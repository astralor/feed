---
title: "Agent Browser Protocol：为 AI Agent 定制的 Chromium 分支"
description: "冻结 JS 执行和渲染，每步同步捕获状态，让浏览器交互变成多模态对话循环"
pubDatetime: 2026-03-18T12:45:00+08:00
collectedAt: 2026-03-18T12:45:00+08:00
category: "工程实践"
tags: [浏览器自动化, Chromium, Agent工具, 开源]
featured: true
score: 8.3
scoreReason: "技术方案创新，解决 Agent 浏览器交互的核心痛点，Opus 4.6 达到 90.5% Mind2Web 准确率"
scoreBreakdown: "信息增量:9 内容质量:8 实用价值:8 减分:0"
sourceUrl: "https://github.com/theredsix/agent-browser-protocol"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---

> **评分 8.3** · 来源：[Hacker News](https://github.com/theredsix/agent-browser-protocol) · 发布于 2026-03-11
>
> 评分依据：技术方案创新，解决 Agent 浏览器交互的核心痛点，Opus 4.6 达到 90.5% Mind2Web 准确率

## 要点

Agent Browser Protocol (ABP) 是 Chromium 的定制分支，专为 AI Agent 设计。核心机制是在每次操作后冻结 JavaScript 执行和页面渲染，捕获完整状态（截图 + 结构化事件摘要），包括导航、文件选择器、权限请求、弹窗、下载等。

这种同步机制让浏览器交互变成类似多模态对话的循环：Agent 发出动作 → 浏览器执行并冻结 → 返回状态快照 → Agent 基于快照决策下一步。配合 Claude Opus 4.6，在 Online Mind2Web 基准测试中达到 90.5% 准确率。

## 🤖 AI 点评

传统浏览器自动化工具（Selenium、Playwright）是为人类测试工程师设计的，Agent 使用时常因异步状态不一致而出错。ABP 从内核层面重新定义交互协议，让「浏览器状态」成为 Agent 可靠感知的输入。这种架构级创新，可能比在现有工具上打补丁更有长期价值。
