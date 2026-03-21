---
title: "Gemini CLI：Google 开源终端 Agent，免费用 1M 上下文"
description: "Google 发布 Gemini CLI 开源终端 Agent，支持 1M token 上下文、Google Search Grounding、MCP 扩展，个人账号每天 1000 次免费请求"
pubDatetime: 2026-03-21T18:45:00+08:00
collectedAt: 2026-03-21T18:32:25+08:00
category: "工程实践"
tags: [Google, Gemini, CLI, Agent, 开源]
featured: false
score: 6.7
scoreReason: "开源终端 Agent 新选项，1M 上下文 + 免费 1000 次/天 + MCP 支持组合实用，但功能深度不及 Claude Code/Codex"
scoreBreakdown: "信息增量:7 内容质量:6 实用价值:7 减分:0"
sourceUrl: "https://github.com/google-gemini/gemini-cli"
sourceType: "deepmind-blog"
sourceName: "Google DeepMind"
ogImage: ""
---

> **评分 6.7** · 来源：[GitHub](https://github.com/google-gemini/gemini-cli) · 发布于 2026-03-21
>
> 评分依据：免费 1M 上下文 + MCP 扩展 + Google Search Grounding，实用组合但生态成熟度不足

## 要点

Gemini CLI 是 Google 发布的开源终端 AI Agent（Apache 2.0 许可），直接在终端中使用 Gemini 3 系列模型。核心特性：**1M token 上下文窗口**、内置 Google Search Grounding、MCP 协议扩展支持、文件操作和 Shell 命令执行。支持 Headless 模式用于脚本自动化，以及 VS Code IDE 集成。

个人 Google 账号享有免费额度——60 请求/分钟、1000 请求/天，这在终端 Agent 工具中属于非常慷慨的免费档。还提供 GitHub Action 集成，可用于自动化 PR 审查和 Issue 分类。每周发布 stable 和 preview 两个版本轨道。

## 🤖 AI 点评

Gemini CLI 的策略很清晰：用免费额度和开源自带口碑传播。1000 次/天的免费量对个人开发者已经够用，这比 Claude Code 和 Codex 的付费门槛低很多。但终端 Agent 工具的竞争壁垒不在「能不能跑」，而在「生态整合」——Claude Code 有 OpenClaw 生态，Codex 有 GitHub 深度整合，Gemini CLI 目前还停留在功能展示阶段。

Google Search Grounding 是它的差异化亮点，直接在终端里做联网搜索确实方便。但如果你的工作流深度依赖某个 IDE 或代码平台，Gemini CLI 需要的 MCP 配置成本可能抵消了免费额度带来的吸引力。
