---
title: "Context Gateway：AI Agent 的后台上下文压缩代理"
description: "YC 支持的 Compresr 发布 Context Gateway，在 Agent 和 LLM API 之间透明压缩对话历史，支持 Claude Code、Cursor、OpenClaw 等主流 Agent"
pubDatetime: 2026-03-13T12:00:00+08:00
collectedAt: 2026-03-17T16:38:00+08:00
category: "工程实践"
tags: ["Context Window", "压缩", "AI Agent", "开源工具", "YC"]
featured: false
score: 7.5
scoreReason: "解决 Agent 上下文限制的实际痛点，YC 背书，支持主流 Agent 框架，但技术方案较直接"
sourceUrl: "https://github.com/Compresr-ai/Context-Gateway"
sourceType: "github-trending"
sourceName: "GitHub"
ogImage: ""
---

> **评分 7.5** · 来源：[GitHub](https://github.com/Compresr-ai/Context-Gateway) · 发布于 2026-03-13
>
> 评分依据：解决 Agent 上下文限制的实际痛点，YC 背书，支持主流 Agent 框架，但技术方案较直接

## 要点

YC 支持的 Compresr 发布 **Context Gateway**，一个 Agentic 代理层，解决 AI Agent 对话过长导致上下文窗口耗尽的问题：

**工作原理：**
- 作为代理层部署在 Agent（Claude Code、Cursor 等）和 LLM API 之间
- 在后台预计算对话历史的压缩摘要
- 当对话触及上下文阈值时（默认 75%），**即时替换** — 无需等待压缩
- 关键点：压缩是预先完成的，切换时零延迟

**支持的 Agent：**
- Claude Code
- Cursor
- OpenClaw
- 自定义 Agent（通过配置文件）

**安装使用：**
```bash
curl -fsSL https://compresr.ai/api/install | sh
context-gateway  # 交互式 TUI 向导
```

配置项包括：摘要模型选择、API key、Slack 通知、压缩触发阈值等。

**特点：**
- 一键安装，TUI 向导引导配置
- 后台异步压缩，不影响使用体验
- 压缩日志可审查（`logs/history_compaction.jsonl`）

## 🤖 AI 点评

思路简单但实用 — 把上下文压缩从"触发后等待"变成"后台预计算"。这解决了当前 Agent 使用中一个真实的体验痛点：长对话突然卡住做 compaction。

不过需要注意几个问题：压缩过程中信息损失如何控制？摘要模型的质量直接影响 Agent 后续行为的准确性。另外，作为中间代理层，需要信任它处理所有 API 流量。

YC 的背书给了可信度。如果压缩质量经得起验证，这类工具可能会成为 Agent 基础设施的标配组件。
