#!/usr/bin/env node
/**
 * 修复空壳文档：扫描所有 <200 字节的 md 文件，提取 source URL 重新爬取
 */
import { chromium } from 'playwright';
import { writeFileSync, readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

const DOCS_DIR = resolve(import.meta.dirname, '..', 'docs');

// 递归扫描空壳文件
function findEmptyDocs(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findEmptyDocs(full));
    } else if (entry.name.endsWith('.md') && statSync(full).size < 200) {
      const content = readFileSync(full, 'utf-8');
      const srcMatch = content.match(/source:\s*"([^"]+)"/);
      if (srcMatch) results.push({ path: full, url: srcMatch[1] });
    }
  }
  return results;
}

// 浏览器内提取页面内容（复用 crawl.mjs 逻辑）
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
      case 'dir': return '';
      default: return ch();
    }
  }
  return { title, lastUpdate, content: toMd(contentEl) };
}

async function main() {
  const empties = findEmptyDocs(DOCS_DIR);
  console.log(`Found ${empties.length} empty docs to fix.\n`);
  if (!empties.length) return;

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  const failed = [];
  let ok = 0;

  for (let i = 0; i < empties.length; i++) {
    const { path: filePath, url } = empties[i];
    const shortPath = filePath.replace(DOCS_DIR, '').replace(/\\/g, '/');
    console.log(`[${i+1}/${empties.length}] ${shortPath}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForSelector('.ep-doc-area-cherry', { timeout: 30000 });
      const result = await page.evaluate(extractPageContent);

      if (!result.content || result.content.trim().length < 10) {
        console.log(`  WARN: content too short, retrying...`);
        await new Promise(r => setTimeout(r, 3000));
        await page.reload({ waitUntil: 'networkidle', timeout: 60000 });
        await page.waitForSelector('.ep-doc-area-cherry', { timeout: 30000 });
        const retry = await page.evaluate(extractPageContent);
        if (retry.content && retry.content.trim().length >= 10) {
          Object.assign(result, retry);
        }
      }

      const now = new Date().toISOString().split('T')[0];
      let md = `---\ntitle: "${result.title}"\nsource: "${url}"\n`;
      md += `last_update: "${result.lastUpdate}"\ncrawl_date: "${now}"\n---\n\n`;
      md += `# ${result.title}\n\n`;
      md += result.content.replace(/\n{3,}/g, '\n\n').trim() + '\n';

      writeFileSync(filePath, md, 'utf-8');
      ok++;
      console.log(`  OK: ${result.title} (${md.length} bytes)`);
    } catch (err) {
      console.log(`  FAIL: ${err.message}`);
      failed.push({ path: filePath, url, error: err.message });
    }
    await new Promise(r => setTimeout(r, 800));
  }

  await browser.close();
  console.log(`\nDone: ${ok} fixed, ${failed.length} failed`);
  if (failed.length > 0) {
    const failPath = resolve(import.meta.dirname, '..', '_meta', 'fix-empty-failures.json');
    writeFileSync(failPath, JSON.stringify(failed, null, 2));
    console.log(`Failures saved to _meta/fix-empty-failures.json`);
  }
}

main().catch(console.error);
