#!/usr/bin/env node
/**
 * 重试失败的爬取任务
 * 读取 _meta/crawl-failures.json，重新爬取失败页面
 */
import { chromium } from 'playwright';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';

const META_DIR = join(import.meta.dirname, '..', '_meta');
const BASE = 'https://developer.work.weixin.qq.com';
const failFile = join(META_DIR, 'crawl-failures.json');

if (!existsSync(failFile)) {
  console.log('No failures to retry.');
  process.exit(0);
}

const failures = JSON.parse(readFileSync(failFile, 'utf-8'));
console.log(`Retrying ${failures.length} failed pages...`);

// 复用 crawl.mjs 的提取函数
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
      case 'p': return '\n' + ch() + '\n';
      case 'br': return '\n';
      case 'strong': case 'b': return '**' + ch() + '**';
      case 'code': {
        if (node.parentElement?.tagName === 'PRE') return node.textContent;
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
      case 'table': {
        const rows = Array.from(node.querySelectorAll('tr'));
        if (!rows.length) return '';
        const r = [];
        rows.forEach((row, i) => {
          const cells = Array.from(row.querySelectorAll('th, td'));
          r.push('| ' + cells.map(c => c.textContent.trim().replace(/\n/g,' ').replace(/\|/g,'\\|')).join(' | ') + ' |');
          if (i === 0) r.push('| ' + cells.map(() => '---').join(' | ') + ' |');
        });
        return '\n' + r.join('\n') + '\n';
      }
      case 'blockquote': return '\n> ' + ch().trim() + '\n';
      default: return ch();
    }
  }
  return { title, lastUpdate, content: toMd(contentEl) };
}

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  const stillFailed = [];
  for (let i = 0; i < failures.length; i++) {
    const f = failures[i];
    const url = f.url || (BASE + f.url);
    console.log(`[${i+1}/${failures.length}] Retrying: ${f.file}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForSelector('.ep-doc-area-cherry', { timeout: 30000 });
      const result = await page.evaluate(extractPageContent);
      const now = new Date().toISOString().split('T')[0];
      let md = `---\ntitle: "${result.title}"\nsource: "${url}"\n`;
      md += `last_update: "${result.lastUpdate}"\ncrawl_date: "${now}"\n---\n\n`;
      md += `# ${result.title}\n\n`;
      md += result.content.replace(/\n{3,}/g, '\n\n').trim() + '\n';
      mkdirSync(dirname(f.path), { recursive: true });
      writeFileSync(f.path, md, 'utf-8');
      console.log(`  OK: ${result.title}`);
    } catch (err) {
      console.log(`  FAIL: ${err.message}`);
      stillFailed.push(f);
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  await browser.close();
  if (stillFailed.length > 0) {
    writeFileSync(failFile, JSON.stringify(stillFailed, null, 2));
    console.log(`\n${stillFailed.length} still failed, saved.`);
  } else {
    writeFileSync(failFile, '[]');
    console.log('\nAll retries succeeded!');
  }
}

main().catch(console.error);
