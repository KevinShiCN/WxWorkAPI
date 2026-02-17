# 企业微信开发者 API 文档（本地镜像）

> 企业微信开发者中心 API 文档的本地 Markdown 镜像，专为 AI/LLM 辅助开发（Vibe Coding）优化。

## 为什么需要这个项目？

企业微信开发者中心（https://developer.work.weixin.qq.com/document/ ）使用 SPA 架构构建，所有文档内容通过 JavaScript 动态加载。这意味着：

- 普通的 HTTP 请求（fetch/curl）无法获取文档内容
- 搜索引擎和 AI 工具无法直接索引
- LLM 无法通过 URL 直接读取 API 文档
- 开发者在 AI 辅助编程时，无法让 AI 参考官方文档

本项目将全部文档爬取为结构化 Markdown 文件，按官方导航目录组织，方便：

- AI/LLM 直接读取和引用
- 本地全文搜索（grep/ripgrep）
- 作为 RAG 知识库的数据源
- IDE 内直接查阅

## 文档结构

```
docs/
├── 快速入门/                  # 开发入门指南
├── 服务端API/                 # 服务端接口（核心）
│   ├── 开发指南/              # 基础概念、access_token、回调等
│   ├── 通讯录管理/            # 成员/部门/标签管理
│   ├── 客户联系/              # 外部联系人、客户群
│   ├── 消息接收与发送/        # 应用消息、群机器人
│   ├── 身份验证/              # OAuth、Web登录
│   ├── 应用管理/              # 应用配置与管理
│   ├── 审批/                  # 审批流程接口
│   ├── 打卡/                  # 考勤打卡
│   ├── 会议/                  # 会议管理
│   ├── 直播/                  # 直播管理
│   ├── 微盘/                  # 文件存储
│   └── ...                    # 更多模块
├── 客户端API/                 # 客户端接口
│   ├── 小程序/                # 企业微信小程序 API
│   ├── JS-SDK/                # 网页 JS-SDK
│   ├── 移动端SDK/             # iOS/Android SDK
│   └── 消息推送/              # 消息推送 schema
├── 工具与资源/                # SDK下载、设计资源
├── 附录/                      # 错误码、频率限制
├── 更新日志/                  # API 变更记录
└── 联系我们/                  # 技术支持
```

## 文档格式

每个 Markdown 文件包含 YAML frontmatter 元数据：

```yaml
---
title: "创建成员"
source: "https://developer.work.weixin.qq.com/document/path/90195"
last_update: "2024/03/15"
crawl_date: "2026-02-17"
---
```

| 字段 | 说明 |
|------|------|
| `title` | 文档标题（与官方一致） |
| `source` | 官方文档原始 URL |
| `last_update` | 官方标注的最后更新时间 |
| `crawl_date` | 本地爬取/同步时间 |

## AI/LLM 使用指南

### 作为 Claude Code / Cursor 上下文

```bash
# 查找特定 API
rg "access_token" docs/服务端API/ --files-with-matches

# 读取特定接口文档
cat "docs/服务端API/通讯录管理/成员管理/创建成员.md"

# 搜索错误码
rg "errcode" docs/附录/
```

### 作为 RAG 知识库

所有文件均为纯 Markdown，可直接用于：
- LangChain / LlamaIndex 文档加载器
- Embedding 向量化后存入向量数据库
- Claude / GPT 的上下文窗口

### 目录索引

`docs/INDEX.md` 提供完整的文档目录树，包含所有文件的标题和路径，方便 AI 快速定位目标文档。

## 更新文档

### 全量更新

```bash
# 1. 提取最新导航结构
node scripts/extract-nav.mjs

# 2. 全量爬取（约 950+ 页面，耗时约 15-30 分钟）
node scripts/crawl.mjs --concurrency 8

# 3. 重新生成目录索引
node scripts/gen-index.mjs
```

### 按分类更新

```bash
# 只更新服务端API
node scripts/crawl.mjs --category 服务端API --concurrency 8

# 只更新客户端API
node scripts/crawl.mjs --category 客户端API --concurrency 5
```

### 重试失败页面

爬取失败的页面会记录在 `_meta/crawl-failures.json`，可手动检查后重试。

## 技术实现

- 使用 [Playwright](https://playwright.dev/) 加载 SPA 页面
- 并发爬取（默认 5 个浏览器标签页）
- DOM 递归转换为 Markdown（保留表格、代码块、链接等格式）
- 导航树从侧边栏 DOM 自动提取，确保与官方目录结构一致

## 数据统计

| 分类 | 页面数 |
|------|--------|
| 服务端API | 744 |
| 客户端API | 225 |
| 快速入门 | 2 |
| 工具与资源 | 7 |
| 附录 | 7 |
| 更新日志 | 1 |
| 联系我们 | 1 |
| **合计** | **987** |

## 免责声明

- 本项目仅做文档格式转换和本地化存储，所有内容版权归腾讯/企业微信所有
- 文档内容可能与官方存在时间差，以官方文档为准
- 本项目不提供任何保证，使用风险自负

## License

文档内容版权归腾讯所有。爬取脚本代码以 MIT 协议开源。
