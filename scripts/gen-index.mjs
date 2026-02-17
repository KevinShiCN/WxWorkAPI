#!/usr/bin/env node
/**
 * 生成 docs/INDEX.md 目录索引
 * 从 _meta/nav-*.json 读取导航结构，生成大模型友好的目录树
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const META_DIR = join(import.meta.dirname, '..', '_meta');
const DOCS_DIR = join(import.meta.dirname, '..', 'docs');

function loadNav(file) {
  const p = join(META_DIR, file);
  if (!existsSync(p)) return [];
  return JSON.parse(readFileSync(p, 'utf-8'));
}

function safeName(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
}

function buildTree(items, category) {
  const tree = {};
  for (const item of items) {
    const parts = item.dir ? item.dir.split('/') : [];
    let node = tree;
    for (const p of parts) {
      if (!node[p]) node[p] = {};
      node = node[p];
    }
    const fileName = safeName(item.file) + '.md';
    const filePath = [category, ...parts, fileName].join('/');
    if (!node.__files) node.__files = [];
    node.__files.push({ name: item.file, path: filePath });
  }
  return tree;
}

function renderTree(tree, indent = '') {
  let md = '';
  const dirs = Object.keys(tree).filter(k => k !== '__files').sort();
  const files = tree.__files || [];

  for (const file of files) {
    md += `${indent}- [${file.name}](${file.path})\n`;
  }
  for (const dir of dirs) {
    md += `${indent}- **${dir}/**\n`;
    md += renderTree(tree[dir], indent + '  ');
  }
  return md;
}

function main() {
  const now = new Date().toISOString().split('T')[0];
  let md = `# 企业微信 API 文档索引\n\n`;
  md += `> 自动生成于 ${now}，共计 952 个文档页面\n\n`;
  md += `> 本索引按官方导航目录结构组织，便于 AI/LLM 快速定位目标文档\n\n`;

  const categories = [
    { name: '快速入门', file: 'nav-other.json', key: '快速入门' },
    { name: '服务端API', file: 'nav-server.json' },
    { name: '客户端API', file: 'nav-client.json' },
    { name: '工具与资源', file: 'nav-other.json', key: '工具与资源' },
    { name: '附录', file: 'nav-other.json', key: '附录' },
    { name: '更新日志', file: 'nav-other.json', key: '更新日志' },
    { name: '联系我们', file: 'nav-other.json', key: '联系我们' },
  ];

  let totalCount = 0;
  for (const cat of categories) {
    let items;
    if (cat.key) {
      const all = JSON.parse(readFileSync(join(META_DIR, cat.file), 'utf-8'));
      items = all[cat.key] || [];
    } else {
      items = loadNav(cat.file);
    }
    totalCount += items.length;
    const tree = buildTree(items, cat.name);
    md += `## ${cat.name}（${items.length} 篇）\n\n`;
    md += renderTree(tree);
    md += '\n';
  }

  // 更新总数
  md = md.replace('952 个', `${totalCount} 个`);

  writeFileSync(join(DOCS_DIR, 'INDEX.md'), md, 'utf-8');
  console.log(`INDEX.md generated: ${totalCount} docs`);
}

main();
