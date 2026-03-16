---
title: "LangChain 发布 Deep Agents：开箱即用的 Agent 框架"
description: "LangChain 推出 Deep Agents，一个包含规划、文件系统、子 Agent 等能力的完整 Agent 运行时"
pubDatetime: 2026-03-15T12:00:00+08:00
collectedAt: 2026-03-17T02:32:00+08:00
category: "工程实践"
tags: ["agent", "langchain", "framework", "open-source"]
featured: true
score: 8.0
scoreReason: "LangChain 主导的开源 Agent 框架，提供完整的规划、文件操作、子 Agent 能力，开箱即用"
sourceUrl: "https://github.com/langchain-ai/deepagents"
sourceType: "github-trending"
sourceName: "GitHub"
ogImage: ""
---

> **评分 8.0** · 来源：[GitHub](https://github.com/langchain-ai/deepagents) · 发布于 2026-03-15
>
> 评分依据：LangChain 主导的开源 Agent 框架，提供完整的规划、文件操作、子 Agent 能力，开箱即用

## 要点

LangChain 发布 Deep Agents，一个「开箱即用」的 Agent 运行时框架。不需要自己组装 prompt、工具和上下文管理，安装后直接可用。

核心能力包括：
- **规划系统** — write_todos 用于任务分解和进度跟踪
- **文件系统** — read_file、write_file、edit_file、ls、glob、grep 等完整文件操作
- **Shell 访问** — execute 命令执行（带沙箱）
- **子 Agent** — task 工具用于委派工作，隔离上下文窗口
- **智能默认值** — 内置 prompt 教模型如何有效使用这些工具
- **上下文管理** — 对话过长时自动摘要，大输出自动保存到文件

安装只需一行：`pip install deepagents` 或 `uv add deepagents`。

框架基于 LangGraph 构建，支持流式、持久化、检查点等生产级特性。MIT 开源，支持任何支持工具调用的 LLM（包括前沿模型和开源模型）。

项目灵感来自 Claude Code，目标是提取 Claude Code 的通用性并进一步增强。

## 🤖 AI 点评

这是 LangChain 对「Agent 框架应该长什么样」的一次明确表态。不再是零散的工具集，而是一个有主见的完整运行时。规划、文件、子 Agent 这三个能力组合起来，基本覆盖了复杂任务执行的核心需求。

值得注意的是「智能默认值」——内置 prompt 教模型如何使用工具。这意味着框架不只是提供能力，还在引导模型的行为模式。这种「有主见的框架」可能会成为趋势，因为纯工具集已经不够了，开发者需要的是「能直接跑起来的 Agent」。

与 Claude Code 的对标也很有意思。开源社区在追赶闭源产品的体验，而 LangChain 的生态优势（LangGraph、LangSmith）让这个框架有机会成为事实标准。
