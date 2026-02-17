import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const BASE = 'https://developer.work.weixin.qq.com';

function extractNav() {
  const sidebar = document.querySelector('#js-ep-sidebar');
  if (!sidebar) return [];
  const items = [];
  sidebar.querySelectorAll('.ep-doc-wrap').forEach(w => {
    const level = parseInt(w.getAttribute('level') || '0');
    const link = w.querySelector(':scope > a.ep-doc-item');
    const div = w.querySelector(':scope > div.ep-doc-item');
    if (link) items.push({ l: level, t: link.textContent.trim(), h: link.getAttribute('href'), k: 'L' });
    else if (div) items.push({ l: level, t: div.textContent.trim(), k: 'C' });
  });
  const result = [];
  const ps = [];
  for (const item of items) {
    while (ps.length > item.l) ps.pop();
    if (item.k === 'C') { ps[item.l] = item.t; }
    else {
      ps[item.l] = item.t;
      result.push({ dir: ps.slice(0, item.l).join('/'), file: item.t, url: item.h });
    }
  }
  return result;
}

async function extract(page, url) {
  await page.goto(BASE + url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('#js-ep-sidebar', { timeout: 15000 });
  return await page.evaluate(extractNav);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const server = await extract(page, '/document/path/90664');
  writeFileSync('W:/Projects/WxWorkAPI/_meta/nav-server.json', JSON.stringify(server, null, 2));
  console.log('服务端API:', server.length);

  const client = await extract(page, '/document/path/92455');
  writeFileSync('W:/Projects/WxWorkAPI/_meta/nav-client.json', JSON.stringify(client, null, 2));
  console.log('客户端API:', client.length);

  const others = {};
  for (const [name, url] of [
    ['快速入门', '/document/path/90556'],
    ['工具与资源', '/document/path/90678'],
    ['附录', '/document/path/90968'],
    ['更新日志', '/document/path/93221'],
    ['联系我们', '/document/path/90623'],
  ]) {
    const data = await extract(page, url);
    others[name] = data;
    console.log(`${name}: ${data.length}`);
  }
  writeFileSync('W:/Projects/WxWorkAPI/_meta/nav-other.json', JSON.stringify(others, null, 2));

  await browser.close();
  console.log('Done.');
}

main().catch(e => { console.error(e); process.exit(1); });
