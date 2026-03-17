---
title: "Simon Willison 实战教程：用 Coding Agent 做数据分析"
description: "Simon Willison 在 NICAR 2026 数据新闻大会的 3 小时实战工作坊讲义，演示 Claude Code 和 Codex 在数据探索、清洗、可视化中的应用"
pubDatetime: 2026-03-16T12:00:00+08:00
collectedAt: 2026-03-17T18:35:00+08:00
category: "工程实践"
tags: ["Simon Willison", "Claude Code", "Codex", "数据分析", "教程", "数据新闻"]
featured: false
score: 7.7
scoreReason: "一手实战经验 + 可复现方法 + 完整工作坊材料，对 AI 工具使用者直接有用，适合数据分析从业者参考"
sourceUrl: "https://simonwillison.net/2026/Mar/16/coding-agents-for-data-analysis/"
sourceType: "web-search"
sourceName: "Simon Willison"
ogImage: ""
---

> **评分 7.7** · 来源：[Simon Willison](https://simonwillison.net/2026/Mar/16/coding-agents-for-data-analysis/) · 发布于 2026-03-16
>
> 评分依据：一手实战经验 + 可复现方法 + 完整工作坊材料，对 AI 工具使用者直接有用

## 要点

Simon Willison 公开了他在 **NICAR 2026**（全美数据新闻大会）上的 3 小时工作坊讲义，主题是用编程 Agent 做数据分析：

**工作坊内容：**
- **编程 Agent 入门** — Claude Code 和 OpenAI Codex 基础
- **数据库提问** — 用 Agent 对 SQLite 数据库进行自然语言查询
- **数据探索** — 让 Agent 自主发现数据中的模式和异常
- **数据清洗** — 解码邻域代码等实际清洗任务
- **可视化创建** — 用 Agent vibe coding 生成交互式可视化（Leaflet 热力图）
- **数据抓取** — 用 Agent 编写和运行爬虫

**技术栈：** Python + SQLite + Datasette + Claude Code / Codex

**亮点：**
- 全场参与者共消耗 **$23** 的 Codex tokens（使用 GitHub Codespaces + 预算限制 API key）
- 一个有趣的演示：启动 Datasette 并让 Claude Code 在 `viz/` 目录中直接 vibe coding 交互式可视化
- 材料开放，适合非参会者自学

**适用人群：** 数据记者、数据分析师、任何有数据需要探索的人

## 🤖 AI 点评

这是目前最好的"如何用 Coding Agent 做数据分析"实战教程之一。Simon Willison 的优势在于他不是在推销某个产品，而是以实践者视角展示 Agent 在真实数据分析工作流中的应用。

$23 的 token 消耗数据很有参考价值 — 一个 3 小时的工作坊，多名参与者共同使用，总成本不到 200 元人民币。这说明 Coding Agent 在数据分析场景中的成本已经很低。

讲义设计为可独立自学，不需要参加工作坊也能跟着做 — 这类高质量、可复现的教程在 Agent 生态中仍然稀缺。
