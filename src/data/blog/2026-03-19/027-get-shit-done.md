---
title: "get-shit-done：Claude Code 的上下文工程层"
description: "GitHub 热门项目，35K stars，为 Claude Code 等编码 Agent 提供轻量级 meta-prompting 和 spec-driven 开发系统"
pubDatetime: 2026-03-19T20:45:00+08:00
collectedAt: 2026-03-19T08:34:47Z
category: "工程实践"
tags: [Claude-Code, 上下文工程, meta-prompting, 编码Agent]
featured: false
score: 6.95
scoreReason: "解决 Claude Code 上下文腐烂问题的实用工具，支持 6 种编码 Agent 运行时，35K stars 验证实用性"
scoreBreakdown: "信息增量:7 内容质量:6 实用价值:8 减分:0"
sourceUrl: "https://github.com/gsd-build/get-shit-done"
sourceType: "github-trending"
sourceName: "GitHub"
ogImage: ""
---

> **评分 6.95** · 来源：[GitHub](https://github.com/gsd-build/get-shit-done) · 发布于 2026-03-19
>
> 评分依据：直接解决 Claude Code 上下文腐烂问题，支持多运行时，实用价值高

## 要点

get-shit-done（GSD）是一个轻量级 meta-prompting 和 spec-driven 开发系统，专为 Claude Code、OpenCode、Gemini CLI、Codex、Copilot 和 Antigravity 设计。35,378 stars，当日新增 2,642。

核心定位是解决「上下文腐烂」（context rot）——当 Claude 的上下文窗口被填满时，代码质量急剧下降的问题。安装只需一条命令：`npx get-shit-done-cc@latest`。

作者（TÂCHES）是独立开发者，强调「我不写代码，Claude Code 写」。系统背后的复杂性在于上下文工程、XML prompt 格式化和子 Agent 编排，但对用户暴露的只有几个简洁的命令。

关键特性包括：spec-driven development（先定义要做什么，再让 Agent 执行）、上下文工程（自动管理 Agent 看到的信息）、状态管理（跨会话保持任务上下文）。支持全局安装和项目级安装，兼容 Mac/Windows/Linux。

## 🤖 AI 点评

GSD 和 learn-claude-code 形成有趣的对照：前者是「怎么把 Claude Code 用得更好」，后者是「怎么理解 Claude Code 为什么好」。两者在 GitHub Trending 同日霸榜，说明社区对编码 Agent 的需求已经从「尝鲜」进化到了「系统化使用」。

GSD 的 spec-driven 方法论和前文「spec is code」的观点恰好互补——GSD 承认 spec 不是代码的替代品，而是人机协作的「意图接口」。这种务实的定位比「让工程师变成 spec 写手」的幻想更有可能长期存活。
