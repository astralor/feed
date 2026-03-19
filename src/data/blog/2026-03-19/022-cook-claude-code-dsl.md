---
title: "Cook：Claude Code 的编排式工作流 DSL"
description: "轻量级 CLI 工具，用声明式语法为 Claude Code 构建循环、竞速和评审工作流，支持多 Agent 并行对比"
pubDatetime: 2026-03-19T20:45:00+08:00
collectedAt: 2026-03-19T08:34:47Z
category: "工程实践"
tags: [Claude-Code, 工作流, CLI, 编码Agent]
featured: false
score: 6.95
scoreReason: "直接可用的编码 Agent 编排工具，支持评审循环和并行竞速，设计理念简洁但实用"
scoreBreakdown: "信息增量:7 内容质量:6 实用价值:8 减分:0"
sourceUrl: "https://rjcorwin.github.io/cook/"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---

> **评分 6.95** · 来源：[Cook](https://rjcorwin.github.io/cook/) · 发布于 2026-03-19
>
> 评分依据：轻量实用的编码 Agent 编排 DSL，支持评审循环和并行竞速，对 Claude Code 日常使用有即时价值

## 要点

Cook 是一个为 Claude Code、Codex 和 OpenCode 设计的工作流编排 CLI。核心理念是用简洁的声明式语法将单次 Agent 调用组合成复杂工作流。

三大原语类别：

- **工作单元（Work）**：一次 Agent 调用，即一个 prompt。
- **循环算子（Loop）**：`xN` 顺序重复 N 次；`review` 添加评审→门控循环（评审不通过则迭代修复）；`ralph` 任务列表推进（自动读取计划文件，逐项完成）。
- **组合算子（Compose）**：`vN` 在 N 个隔离 git worktree 中并行运行相同任务，取最优；`vs` 并行运行两种不同方案并合并。

一个典型用法：`cook "Implement dark mode" review v3 "least code"` 即表示「并行跑 3 个带评审循环的暗黑模式实现，选代码最少的那个」。支持跨 Agent/跨模型配置，比如让 Codex 干活、Claude 审查。

## 🤖 AI 点评

Cook 的精妙之处在于「操作符从左到右组合」的设计——每个操作符包装其左侧所有内容，形成自然的函数组合。`review v3 pick` 这种表达式读起来就像是在描述意图，而不是在写配置文件。

在 Claude Code 生态工具爆炸的今天，Cook 能在 HN 拿到 162 points，靠的不是功能堆叠，而是把「评审循环」和「并行竞速」这两个最高频的需求提炼到了极致。ralph 算子尤其值得关注——它让 Agent 从「单次执行」变成了「自主推进任务列表」，这是从脚本到 Agent 的关键一步。
