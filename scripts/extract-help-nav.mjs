#!/usr/bin/env node
/**
 * 企业微信帮助中心导航提取脚本
 * 用法: node scripts/extract-help-nav.mjs
 *
 * 从 open.work.weixin.qq.com/help2 提取所有分类和文章链接
 * 输出: _meta/nav-help.json
 *
 * 策略:
 *   1. 单次页面加载 → 从 ul.tree_list_container 提取 18 个一级分类及其所有子项
 *   2. 所有子项作为潜在文章输出
 *   3. 爬取阶段（crawl-help.mjs）会自动处理列表页并发现额外文章
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';

const META_DIR = join(import.meta.dirname, '..', '_meta');
const BASE = 'https://open.work.weixin.qq.com';

/**
 * 从 ul.tree_list_container 提取完整导航树
 * 单次页面加载即可获得所有分类及其子项
 */
function evalFullNavTree() {
  const ul = document.querySelector('ul.tree_list_container');
  if (!ul) return [];

  return Array.from(ul.querySelectorAll(':scope > li')).map(li => {
    const a = li.querySelector('a[href*="/help2/pc/"]');
    if (!a) return null;

    const subUl = li.querySelector('ul.sub_tree');
    const subItems = subUl
      ? Array.from(subUl.querySelectorAll('a[href*="/help2/pc/"]')).map(sa => ({
          name: sa.textContent.trim(),
          id: sa.href.match(/\/(\d+)$/)?.[1] || '',
        }))
      : [];

    return {
      name: a.textContent.trim(),
      id: a.href.match(/\/(\d+)$/)?.[1] || '',
      subItems,
    };
  }).filter(Boolean);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('提取帮助中心导航树...');
  await page.goto(`${BASE}/help2/pc/14506`, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForSelector('ul.tree_list_container', { timeout: 15000 });

  const navTree = await page.evaluate(evalFullNavTree);
  console.log(`一级分类: ${navTree.length}`);

  await browser.close();

  if (!navTree.length) {
    console.error('❌ 未提取到任何分类，请检查页面结构');
    process.exit(1);
  }

  // 构建任务列表
  const allTasks = [];
  const seenIds = new Set();

  for (const cat of navTree) {
    // 跳过一级分类本身（它们是 landing page，不是文章）
    seenIds.add(cat.id);

    if (cat.subItems.length === 0) {
      // 无子项的分类（罕见），把分类本身作为文章
      allTasks.push({ category: cat.name, dir: '', file: cat.name, url: `/help2/pc/${cat.id}`, id: cat.id });
      continue;
    }

    for (const sub of cat.subItems) {
      if (seenIds.has(sub.id)) continue;
      seenIds.add(sub.id);
      allTasks.push({
        category: cat.name,
        dir: '',
        file: sub.name,
        url: `/help2/pc/${sub.id}`,
        id: sub.id,
      });
    }
  }

  // 保存
  writeFileSync(join(META_DIR, 'nav-help.json'), JSON.stringify(allTasks, null, 2));

  // 统计
  const stats = {};
  for (const t of allTasks) stats[t.category] = (stats[t.category] || 0) + 1;

  console.log(`\n✓ 共 ${allTasks.length} 个条目 → _meta/nav-help.json\n`);
  console.log('分类统计:');
  for (const [k, v] of Object.entries(stats).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}: ${v}`);
  }
}

main().catch(console.error);
