---
title: "OpenAI Codex 正式发布 Subagents 功能，编程 Agent 进入多智能体时代"
description: "Codex Subagents GA，支持自定义 Agent（TOML 配置）和多 Agent 并行协作，Subagents 模式已成为编程 Agent 标配"
pubDatetime: 2026-03-16T12:00:00+08:00
collectedAt: 2026-03-17T16:38:00+08:00
category: "工程实践"
tags: ["OpenAI", "Codex", "Subagents", "AI 编程", "Multi-Agent"]
featured: true
score: 8.5
scoreReason: "OpenAI 官方 Subagents GA，影响整个 AI 编程生态，标志着编程 Agent 从单体进入多智能体协作时代"
sourceUrl: "https://simonwillison.net/2026/Mar/16/codex-subagents/"
sourceType: "web-search"
sourceName: "Simon Willison"
ogImage: ""
---

> **评分 8.5** · 来源：[Simon Willison](https://simonwillison.net/2026/Mar/16/codex-subagents/) · 发布于 2026-03-16
>
> 评分依据：OpenAI 官方 Subagents GA，影响整个 AI 编程生态，标志着编程 Agent 从单体进入多智能体协作时代

## 要点

OpenAI Codex 正式将 **Subagents** 功能推向 GA（General Availability），此前已在 feature flag 后预览数周：

**内置子 Agent：**
- **explorer** — 探索代码库结构
- **worker** — 并行执行大量小任务
- **default** — 通用默认 Agent

**自定义 Agent：**
- 通过 `~/.codex/agents/` 目录下的 **TOML 文件** 定义
- 可设置自定义指令和指定模型（如 gpt-5.3-codex-spark 追求速度）
- 通过名称引用，支持在提示词中协调多个 Agent

**使用示例：**
```
Investigate why the settings modal fails to save. 
Have browser_debugger reproduce it, code_mapper trace 
the responsible code path, and ui_fixer implement the 
smallest fix once the failure mode is clear.
```

**行业趋势 — Subagents 已成标配：**
Simon Willison 梳理了当前所有支持 Subagents 的编程 Agent 平台：
- OpenAI Codex subagents
- Claude Code subagents
- Gemini CLI subagents（实验性）
- Mistral Vibe subagents
- OpenCode agents
- VS Code Copilot subagents
- Cursor Subagents

## 🤖 AI 点评

Subagents 从"实验特性"变成"行业标配"的速度惊人。Simon Willison 列出的清单很有说明力 — **7 个主流编程 Agent 平台全部支持或正在支持 subagents**，这已经不是某家公司的创新，而是整个行业对"如何构建编程 Agent"的共识。

核心理念是 **分工协作**：一个 Agent 负责定位 bug，另一个负责追踪代码路径，第三个负责修复。这比单个 Agent 从头到尾处理整个问题更高效，也更可靠（每个子 Agent 的上下文更聚焦）。

Codex 的 TOML 配置方式很实用 — 团队可以预定义一组专业化的 Agent（安全审计、性能优化、UI 修复等），然后在日常开发中按需调用。这让"AI 编程团队"从概念变成了可配置的工程实践。
