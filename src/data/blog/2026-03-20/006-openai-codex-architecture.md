---
title: "深入解析 OpenAI Codex 架构：自定义编排层取代 MCP"
description: "ByteByteGo 深度分析 Codex 的 Rust 编排协议设计，揭示 AI 编程 Agent 的架构选择"
pubDatetime: 2026-03-18T12:00:00+08:00
collectedAt: 2026-03-20T02:34:19+08:00
category: "工程实践"
tags: [OpenAI, Codex, Agent架构, MCP, Rust]
featured: true
score: 8.35
scoreReason: "首次披露 Codex 编排协议的架构决策，对构建 AI 编程 Agent 有直接参考价值"
scoreBreakdown: "信息增量:9 内容质量:8 实用价值:8 减分:0"
sourceUrl: "https://blog.bytebytego.com/p/how-openai-codex-works"
sourceType: "openai-blog"
sourceName: "ByteByteGo"
ogImage: "./006-openai-codex-architecture.jpg"
---

> **评分 8.35** · 来源：[ByteByteGo](https://blog.bytebytego.com/p/how-openai-codex-works) · 发布于 2026-03-18
>
> 评分依据：首次披露 Codex 编排协议的架构决策，对构建 AI 编程 Agent 有直接参考价值

## 要点

OpenAI 为 Codex 构建了自定义编排协议，而非采用 MCP（Model Context Protocol）。系统基于 Rust 构建，支持流式进度推送、任务中途暂停等待用户审批、以及增量代码 Diff 输出。

这一架构选择意味着 Codex 需要处理开发者与 AI 之间的复杂交互模式：不仅仅是「发送请求→获取结果」，还包括实时反馈、审批流程和部分执行。ByteByteGo 用经典的系统架构图拆解了整个数据流。

## 🤖 AI 点评

Codex 不选 MCP 而是自建编排层，这个决策本身比技术细节更有信号意义。MCP 试图做一个通用的工具调用协议，但编程 Agent 的交互模式（流式 Diff、中途审批、上下文窗口管理）确实超出了 MCP 当前的设计范畴。这不是 MCP 不够好，而是「编程」这个场景的特殊性需要专用协议——这个判断对于所有在做 Agent 框架的团队都有参考价值。
