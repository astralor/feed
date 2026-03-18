---
title: "Context Gateway：用 SLM 压缩 Agent 输出，对抗上下文退化"
description: "开源代理工具，在工具输出进入 LLM 前用小模型压缩，解决长上下文性能退化问题"
pubDatetime: 2026-03-18T09:44:00+08:00
collectedAt: 2026-03-13T00:00:00+08:00
category: "工程实践"
tags: ["Agent", "上下文管理", "开源工具"]
featured: false
score: 8.0
scoreReason: "针对实际痛点（GPT-5.4 在 1M tokens 时准确率从 97.2% 降至 36.6%）提供可用方案，技术路径清晰"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:9"
sourceUrl: "https://github.com/Compresr-ai/Context-Gateway"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---

> **评分 8.0** · 来源：[Hacker News](https://github.com/Compresr-ai/Context-Gateway) · 发布于 2026-03-13
>
> 评分依据：针对实际痛点（GPT-5.4 在 1M tokens 时准确率从 97.2% 降至 36.6%）提供可用方案，技术路径清晰

## 要点

Context Gateway 是一个开源代理工具，专门解决 AI Agent 的上下文退化问题。它在工具输出进入 LLM 上下文之前，使用小型语言模型（SLM）进行压缩。

核心场景：当 Agent 调用工具返回大量数据（如文件内容、API 响应）时，直接塞入上下文会导致性能下降。研究显示 GPT-5.4 在 32k tokens 时准确率 97.2%，但在 1M tokens 时骤降至 36.6%。

功能包括：支出上限控制、会话仪表板、可配置压缩策略。项目定位为 Agent 框架的中间层，不绑定特定 LLM 提供商。

## 🤖 AI 点评

这是对「无限上下文」神话的务实回应。长上下文不等于有效上下文，压缩层的引入让 Agent 在保持信息密度的同时控制成本和性能。开源实现降低了接入门槛，值得关注其压缩质量和延迟开销的实际表现。
