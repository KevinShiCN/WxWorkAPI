#!/usr/bin/env node
/**
 * 企业微信开发者文档批量爬取脚本
 * 用法: node scripts/crawl.mjs [--concurrency N] [--category 服务端API] [--force] [--quick]
 *
 * 模式:
 *   默认    访问每个页面，哈希比对内容，仅写入有变更的页面
 *   --force 访问每个页面，无条件写入（全量重爬）
 *   --quick 文件已存在则跳过（不访问网络，快速增量，仅捕获新增页面）
 */
import { chromium } from 'playwright';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { createHash } from 'crypto';
import { dirname, join } from 'path';

const DOCS_DIR = join(import.meta.dirname, '..', 'docs');
const META_DIR = join(import.meta.dirname, '..', '_meta');
const BASE = 'https://developer.work.weixin.qq.com';
const CONCURRENCY = parseInt(process.argv.find((_, i, a) => a[i-1] === '--concurrency') || '3');
const CATEGORY_FILTER = process.argv.find((_, i, a) => a[i-1] === '--category') || '';
const FORCE_WRITE = process.argv.includes('--force');
const QUICK_SKIP = process.argv.includes('--quick');
const MAX_RETRIES = 2;
const DELAY_MS = 500;
const CONSECUTIVE_FAIL_LIMIT = 5;

// 内容哈希（排除 crawl_date，避免每次爬取都产生差异）
function contentHash(text) {
  const normalized = text.replace(/^crawl_date:.*$/m, '');
  return createHash('sha256').update(normalized).digest('hex');
}

// 在浏览器中提取页面内容
function extractPageContent() {
  const titleEl = document.querySelector('.ep-doc-area-title');
  const title = titleEl ? titleEl.textContent.trim() : '';
  const dateEl = document.querySelector('.ep-doc-area-subtitle');
  const lastUpdate = dateEl ? dateEl.textContent.trim().replace('最后更新：', '') : '';
  const contentEl = document.querySelector('.ep-doc-area-cherry');
  if (!contentEl) return { title, lastUpdate, content: '' };

  function toMd(node) {
    if (node.nodeType === 3) return node.textContent;
    if (node.nodeType !== 1) return '';
    const tag = node.tagName.toLowerCase();
    const ch = () => Array.from(node.childNodes).map(c => toMd(c)).join('');
    switch (tag) {
      case 'h1': return '\n# ' + ch() + '\n';
      case 'h2': return '\n## ' + ch() + '\n';
      case 'h3': return '\n### ' + ch() + '\n';
      case 'h4': return '\n#### ' + ch() + '\n';
      case 'h5': return '\n##### ' + ch() + '\n';
      case 'p': return '\n' + ch() + '\n';
      case 'br': return '\n';
      case 'strong': case 'b': return '**' + ch() + '**';
      case 'em': case 'i': return '*' + ch() + '*';
      case 'code': {
        if (node.parentElement && node.parentElement.tagName === 'PRE') return node.textContent;
        return '`' + ch() + '`';
      }
      case 'pre': {
        const c = node.querySelector('code');
        const lang = c?.className?.match(/language-(\w+)/)?.[1] || '';
        const t = c ? c.textContent : node.textContent;
        return '\n```' + lang + '\n' + t.trim() + '\n```\n';
      }
      case 'a': {
        const href = node.getAttribute('href') || '';
        if (href.startsWith('#') || href.startsWith('javascript:')) return ch();
        return '[' + ch() + '](' + href + ')';
      }
      case 'img': return '![' + (node.getAttribute('alt')||'') + '](' + (node.getAttribute('src')||'') + ')';
      case 'ul': case 'ol': return '\n' + ch() + '\n';
      case 'li': return '- ' + ch().trim() + '\n';
      case 'table': return '\n' + tableMd(node) + '\n';
      case 'blockquote': return '\n> ' + ch().trim() + '\n';
      case 'dir': return '';
      default: return ch();
    }
  }
  function tableMd(table) {
    const rows = Array.from(table.querySelectorAll('tr'));
    if (!rows.length) return '';
    const r = [];
    rows.forEach((row, i) => {
      const cells = Array.from(row.querySelectorAll('th, td'));
      const line = '| ' + cells.map(c =>
        c.textContent.trim().replace(/\n/g, ' ').replace(/\|/g, '\\|')
      ).join(' | ') + ' |';
      r.push(line);
      if (i === 0) r.push('| ' + cells.map(() => '---').join(' | ') + ' |');
    });
    return r.join('\n');
  }
  return { title, lastUpdate, content: toMd(contentEl) };
}

// 加载导航数据
function loadNavData() {
  const allTasks = [];
  const serverNav = JSON.parse(readFileSync(join(META_DIR, 'nav-server.json'), 'utf-8'));
  for (const item of serverNav) {
    allTasks.push({ category: '服务端API', dir: item.dir, file: item.file, url: item.url });
  }
  const clientNav = JSON.parse(readFileSync(join(META_DIR, 'nav-client.json'), 'utf-8'));
  for (const item of clientNav) {
    allTasks.push({ category: '客户端API', dir: item.dir, file: item.file, url: item.url });
  }
  const otherNav = JSON.parse(readFileSync(join(META_DIR, 'nav-other.json'), 'utf-8'));
  for (const [cat, items] of Object.entries(otherNav)) {
    for (const item of items) {
      allTasks.push({ category: cat, dir: item.dir, file: item.file, url: item.url });
    }
  }
  return allTasks;
}

// 构建输出路径
function buildPath(task) {
  const safeName = task.file
    .replace(/[<>:"/\\|?*]/g, '_')
    .replace(/\s+/g, ' ')
    .trim();
  const parts = [DOCS_DIR, task.category];
  if (task.dir) parts.push(...task.dir.split('/'));
  return join(...parts, safeName + '.md');
}

// 爬取单个页面（带重试 + 哈希比对）
async function crawlPage(page, task) {
  const url = BASE + task.url;
  const outPath = buildPath(task);
  const fileExists = existsSync(outPath);

  // --quick: 文件存在就跳过（不访问网络，用于快速增量）
  if (QUICK_SKIP && fileExists) {
    return { ok: true, title: task.file, path: outPath, status: 'skip' };
  }

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt > 0) await new Promise(r => setTimeout(r, 2000 * attempt));
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForSelector('.ep-doc-area-cherry', { timeout: 20000 });
      const result = await page.evaluate(extractPageContent);
      const now = new Date().toISOString().split('T')[0];
      let md = `---\ntitle: "${result.title}"\nsource: "${url}"\n`;
      md += `last_update: "${result.lastUpdate}"\ncrawl_date: "${now}"\n---\n\n`;
      md += `# ${result.title}\n\n`;
      md += result.content.replace(/\n{3,}/g, '\n\n').trim() + '\n';

      // 哈希比对：内容无变化时跳过写入（--force 强制写入）
      if (!FORCE_WRITE && fileExists) {
        const newHash = contentHash(md);
        const oldHash = contentHash(readFileSync(outPath, 'utf-8'));
        if (newHash === oldHash) {
          return { ok: true, title: result.title, path: outPath, status: 'unchanged' };
        }
      }

      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, md, 'utf-8');
      return { ok: true, title: result.title, path: outPath, status: fileExists ? 'updated' : 'new' };
    } catch (err) {
      if (attempt === MAX_RETRIES) {
        return { ok: false, url, error: err.message, path: outPath, status: 'fail' };
      }
    }
  }
}

// 并发控制
async function runPool(tasks, browser, concurrency) {
  let idx = 0;
  const results = [];
  const pages = [];
  for (let i = 0; i < concurrency; i++) {
    pages.push(await browser.newPage());
  }
  let consecutiveFails = 0;
  let aborted = false;
  async function worker(page) {
    while (idx < tasks.length && !aborted) {
      const task = tasks[idx++];
      const n = idx;
      const r = await crawlPage(page, task);
      const tag = { skip: 'SKIP', unchanged: 'SAME', updated: 'UPDATE', new: 'NEW', fail: 'FAIL' }[r.status] || '??';
      console.log(`[${n}/${tasks.length}] ${tag}: ${task.file}${r.status === 'fail' ? ' - ' + r.error : ''}`);
      results.push({ ...task, ...r });
      // 风控熔断：连续失败超过阈值自动停止
      if (r.status === 'fail') {
        consecutiveFails++;
        if (consecutiveFails >= CONSECUTIVE_FAIL_LIMIT) {
          console.error(`\n⚠️ 连续 ${consecutiveFails} 次失败，疑似风控，自动停止`);
          aborted = true;
          break;
        }
      } else {
        consecutiveFails = 0;
      }
      await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }
  await Promise.all(pages.map(p => worker(p)));
  for (const p of pages) await p.close();
  return results;
}

// 主函数
async function main() {
  let tasks = loadNavData();
  if (CATEGORY_FILTER) {
    tasks = tasks.filter(t => t.category === CATEGORY_FILTER);
  }
  console.log(`Total: ${tasks.length}, Concurrency: ${CONCURRENCY}`);
  const browser = await chromium.launch({ headless: false });
  const results = await runPool(tasks, browser, CONCURRENCY);
  await browser.close();

  const stats = { new: 0, updated: 0, unchanged: 0, skip: 0, fail: 0 };
  for (const r of results) stats[r.status] = (stats[r.status] || 0) + 1;
  const fail = results.filter(r => !r.ok);
  console.log(`\nDone: ${stats.new} new, ${stats.updated} updated, ${stats.unchanged} unchanged, ${stats.skip} skipped, ${stats.fail} failed`);
  if (fail.length > 0) {
    writeFileSync(join(META_DIR, 'crawl-failures.json'), JSON.stringify(fail, null, 2));
    console.log(`Failures saved to _meta/crawl-failures.json`);
  }
  const report = {
    date: new Date().toISOString(),
    total: tasks.length, stats,
    categories: {},
  };
  for (const r of results) {
    if (!report.categories[r.category]) report.categories[r.category] = { total: 0, new: 0, updated: 0, unchanged: 0, skip: 0, fail: 0 };
    report.categories[r.category].total++;
    report.categories[r.category][r.status] = (report.categories[r.category][r.status] || 0) + 1;
  }
  writeFileSync(join(META_DIR, 'crawl-report.json'), JSON.stringify(report, null, 2));
}

main().catch(console.error);
