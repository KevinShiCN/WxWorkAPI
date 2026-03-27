#!/usr/bin/env node
/**
 * 企业微信帮助中心文章爬取脚本
 * 用法: node scripts/crawl-help.mjs [--concurrency N] [--category 智能办公] [--force] [--quick]
 *
 * 前置: 先运行 extract-help-nav.mjs 生成 _meta/nav-help.json
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

const DOCS_DIR = join(import.meta.dirname, '..', 'docs', '帮助中心');
const META_DIR = join(import.meta.dirname, '..', '_meta');
const BASE = 'https://open.work.weixin.qq.com';
const CONCURRENCY = parseInt(process.argv.find((_, i, a) => a[i - 1] === '--concurrency') || '3');
const CATEGORY_FILTER = process.argv.find((_, i, a) => a[i - 1] === '--category') || '';
const FORCE_WRITE = process.argv.includes('--force');
const QUICK_SKIP = process.argv.includes('--quick');
const MAX_RETRIES = 2;
const DELAY_MS = 500;
const CONSECUTIVE_FAIL_LIMIT = 5;

/* ------------------------------------------------------------------ */
/*  工具函数                                                           */
/* ------------------------------------------------------------------ */

function contentHash(text) {
  const normalized = text
    .replace(/^crawl_date:.*$/m, '')
    .replace(/^last_update:.*$/m, '');
  return createHash('sha256').update(normalized).digest('hex');
}

function safeName(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
}

/* ------------------------------------------------------------------ */
/*  页面内容提取（在浏览器内执行）                                      */
/* ------------------------------------------------------------------ */

function extractHelpPageContent() {
  const titleEl = document.querySelector('.que_content_title');
  const title = titleEl ? titleEl.textContent.trim() : '';

  // 面包屑提取（用于校验分类路径）
  const breadcrumbs = [];
  const bcEls = document.querySelectorAll('.que_bread a, .que_bread span, [class*="breadcrumb"] a');
  for (const el of bcEls) {
    const t = el.textContent.trim();
    if (t) breadcrumbs.push(t);
  }

  const contentEl = document.querySelector('#js_doc_content');
  if (!contentEl) return { title, breadcrumbs, content: '' };

  // 复用开发者文档相同的 HTML→Markdown 转换逻辑
  function toMd(node) {
    if (node.nodeType === 3) return node.textContent;
    if (node.nodeType !== 1) return '';
    const tag = node.tagName.toLowerCase();

    // 跳过目录区域
    if (node.classList?.contains('markdown-toc')) return '';

    const ch = () => Array.from(node.childNodes).map(c => toMd(c)).join('');
    switch (tag) {
      case 'h1': return '\n# ' + ch() + '\n';
      case 'h2': return '\n## ' + ch() + '\n';
      case 'h3': return '\n### ' + ch() + '\n';
      case 'h4': return '\n#### ' + ch() + '\n';
      case 'h5': return '\n##### ' + ch() + '\n';
      case 'h6': return '\n###### ' + ch() + '\n';
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
        // 相对路径转绝对路径
        const absHref = href.startsWith('http') ? href : 'https://open.work.weixin.qq.com' + href;
        return '[' + ch() + '](' + absHref + ')';
      }
      case 'img': {
        const src = node.getAttribute('src') || node.getAttribute('data-src') || '';
        const alt = node.getAttribute('alt') || '';
        if (!src) return '';
        return '![](' + src + ')';
      }
      case 'ul': case 'ol': return '\n' + ch() + '\n';
      case 'li': return '- ' + ch().trim() + '\n';
      case 'table': return '\n' + tableMd(node) + '\n';
      case 'blockquote': return '\n> ' + ch().trim().replace(/\n/g, '\n> ') + '\n';
      case 'hr': return '\n---\n';
      case 'div': return ch();
      case 'span': return ch();
      case 'dir': case 'script': case 'style': case 'noscript': return '';
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

  return { title, breadcrumbs, content: toMd(contentEl) };
}

/* ------------------------------------------------------------------ */
/*  加载导航数据                                                       */
/* ------------------------------------------------------------------ */

function loadNavData() {
  const navPath = join(META_DIR, 'nav-help.json');
  if (!existsSync(navPath)) {
    console.error('❌ _meta/nav-help.json 不存在，请先运行: node scripts/extract-help-nav.mjs');
    process.exit(1);
  }
  return JSON.parse(readFileSync(navPath, 'utf-8'));
}

function buildPath(task) {
  const parts = [DOCS_DIR, safeName(task.category)];
  if (task.dir) {
    for (const seg of task.dir.split('/')) parts.push(safeName(seg));
  }
  return join(...parts, safeName(task.file) + '.md');
}

/* ------------------------------------------------------------------ */
/*  爬取单页                                                           */
/* ------------------------------------------------------------------ */

async function crawlPage(page, task) {
  const url = BASE + task.url;
  const outPath = buildPath(task);
  const fileExists = existsSync(outPath);

  if (QUICK_SKIP && fileExists) {
    return { ok: true, title: task.file, path: outPath, status: 'skip' };
  }

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt > 0) await new Promise(r => setTimeout(r, 2000 * attempt));
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });

      // 等待文章内容或列表页面加载
      await Promise.race([
        page.waitForSelector('#js_doc_content', { timeout: 15000 }),
        page.waitForSelector('.que_content_title', { timeout: 15000 }),
      ]).catch(() => {}); // 有些页面可能两者都没有

      const result = await page.evaluate(extractHelpPageContent);

      // 页面没有有效内容 → 检查是否是列表页（含文章链接）
      if (!result.content.trim()) {
        const discovered = await page.evaluate((selfId) => {
          const box = document.querySelector('.apiShow_cnt_article') ||
                      document.querySelector('.right_item') ||
                      document.querySelector('.right_container');
          if (!box) return [];
          const seen = new Set();
          const links = [];
          for (const a of box.querySelectorAll('a[href*="/help2/pc/"]')) {
            const id = a.href.match(/\/(\d+)$/)?.[1] || '';
            const name = a.textContent.trim();
            if (id && name && !seen.has(id) && id !== selfId) { seen.add(id); links.push({ name, id }); }
          }
          return links;
        }, task.id);

        if (discovered.length > 0) {
          return { ok: false, url, error: `列表页(${discovered.length}篇)`, path: outPath, status: 'listing', discovered };
        }
        return { ok: false, url, error: '页面无正文内容', path: outPath, status: 'fail' };
      }

      const now = new Date().toISOString().split('T')[0];
      let md = `---\ntitle: "${result.title.replace(/"/g, '\\"')}"\n`;
      md += `source: "${url}"\n`;
      md += `crawl_date: "${now}"\n`;
      if (result.breadcrumbs.length) md += `breadcrumbs: "${result.breadcrumbs.join(' > ')}"\n`;
      md += `---\n\n`;
      md += `# ${result.title}\n\n`;
      md += result.content.replace(/\n{3,}/g, '\n\n').trim() + '\n';

      // 哈希比对
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

/* ------------------------------------------------------------------ */
/*  并发控制                                                           */
/* ------------------------------------------------------------------ */

async function runPool(tasks, browser, concurrency) {
  let idx = 0;
  const results = [];
  const pages = [];
  for (let i = 0; i < concurrency; i++) pages.push(await browser.newPage());

  let consecutiveFails = 0;
  let aborted = false;

  async function worker(page) {
    while (idx < tasks.length && !aborted) {
      const task = tasks[idx++];
      const n = idx;
      const r = await crawlPage(page, task);
      const tag = { skip: 'SKIP', unchanged: 'SAME', updated: 'UPDATE', new: 'NEW', fail: 'FAIL' }[r.status] || '??';
      console.log(`[${n}/${tasks.length}] ${tag}: ${task.file}${r.status === 'fail' ? ' — ' + r.error : ''}`);
      results.push({ ...task, ...r });

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

/* ------------------------------------------------------------------ */
/*  主函数                                                             */
/* ------------------------------------------------------------------ */

async function main() {
  let tasks = loadNavData();
  if (CATEGORY_FILTER) {
    tasks = tasks.filter(t => t.category === CATEGORY_FILTER);
  }
  console.log(`Total: ${tasks.length}, Concurrency: ${CONCURRENCY}, Mode: ${FORCE_WRITE ? 'force' : QUICK_SKIP ? 'quick' : 'hash-compare'}`);

  mkdirSync(DOCS_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  // === Pass 1: 爬取所有导航条目 ===
  console.log('\n=== Pass 1: 爬取导航条目 ===');
  const results = await runPool(tasks, browser, CONCURRENCY);

  // === Pass 2: 自动补爬列表页发现的文章 ===
  const listings = results.filter(r => r.status === 'listing' && r.discovered?.length);
  if (listings.length > 0) {
    const seenIds = new Set(tasks.map(t => t.id));
    const extraTasks = [];
    for (const listing of listings) {
      for (const art of listing.discovered) {
        if (!seenIds.has(art.id)) {
          seenIds.add(art.id);
          // 列表页的分类名作为子目录
          extraTasks.push({
            category: listing.category,
            dir: listing.file, // 列表页名作为子目录
            file: art.name,
            url: `/help2/pc/${art.id}`,
            id: art.id,
          });
        }
      }
    }
    if (extraTasks.length > 0) {
      console.log(`\n=== Pass 2: 补爬 ${extraTasks.length} 篇列表页文章 (来自 ${listings.length} 个列表页) ===`);
      const extraResults = await runPool(extraTasks, browser, CONCURRENCY);
      results.push(...extraResults);
    }
  }

  await browser.close();

  const stats = { new: 0, updated: 0, unchanged: 0, skip: 0, fail: 0, listing: 0 };
  for (const r of results) stats[r.status] = (stats[r.status] || 0) + 1;
  const fail = results.filter(r => !r.ok && r.status !== 'listing');

  console.log(`\nDone: ${stats.new} new, ${stats.updated} updated, ${stats.unchanged} unchanged, ${stats.skip} skipped, ${stats.listing} listings, ${stats.fail} failed`);

  if (fail.length > 0) {
    writeFileSync(join(META_DIR, 'crawl-help-failures.json'), JSON.stringify(fail, null, 2));
    console.log(`Failures saved to _meta/crawl-help-failures.json`);
  }

  const report = {
    date: new Date().toISOString(),
    total: tasks.length,
    stats,
    categories: {},
  };
  for (const r of results) {
    const key = r.category || 'unknown';
    if (!report.categories[key]) report.categories[key] = { total: 0, new: 0, updated: 0, unchanged: 0, skip: 0, fail: 0 };
    report.categories[key].total++;
    report.categories[key][r.status] = (report.categories[key][r.status] || 0) + 1;
  }
  writeFileSync(join(META_DIR, 'crawl-help-report.json'), JSON.stringify(report, null, 2));
}

main().catch(console.error);
