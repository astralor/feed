---
title: everything-claude-code：Anthropic 黑客松冠军打造的全能编码 Agent 优化系统
description: 96K stars 的 Claude Code 性能优化工具集，涵盖 Token 优化、记忆持久化、持续学习、验证循环、并行化和子 Agent 编排，支持 Claude Code/Codex/Opencode/Cursor
pubDatetime: 2026-03-22T22:45:00+08:00
collectedAt: 2026-03-22T22:45:00+08:00
category: "工程实践"
tags: [Claude-Code, Agent, 编码优化, 开源工具, 最佳实践]
featured: false
score: 6.6
scoreReason: "Anthropic 黑客松冠军作品，涵盖 Token 优化、记忆持久化、持续学习等实用编码 Agent 优化策略，96K stars 验证社区认可度，但本质是最佳实践合集而非原创技术突破"
scoreBreakdown: "信息增量:6 内容质量:6 实用价值:8 减分:0"
sourceUrl: "https://github.com/affaan-m/everything-claude-code"
sourceType: "github-trending"
sourceName: "GitHub"
ogImage: ""
---
> **评分 6.6** · 来源：[GitHub](https://github.com/affaan-m/everything-claude-code) · 发布于 2026-03-22
>
> 评分依据：Anthropic 黑客松冠军作品，涵盖 Token 优化、记忆持久化、持续学习等实用编码 Agent 优化策略，96K stars 验证社区认可度，但本质是最佳实践合集而非原创技术突破

## 要点

everything-claude-code 是一个完整的编码 Agent 性能优化系统，源自 Anthropic 黑客松获胜作品，现已积累 96K stars。核心模块包括：Token 优化（模型选择、System Prompt 精简、后台进程）、记忆持久化（跨 Session 自动保存/加载上下文的 Hooks）、持续学习（从历史 Session 自动提取可复用模式）、验证循环（Checkpoint 评估与 pass@k 指标）、并行化（Git Worktrees 级联方法）和子 Agent 编排。

最新版本新增 6 个语言专属 Agent（TypeScript/PyTorch/Java/Kotlin 的 Reviewer 和 Build Resolver），覆盖 10 种语言。采用 Manifest 驱动的选择性安装架构，用户可按需加载组件。支持 Claude Code、Codex、Opencode 等多种 Agent Harness。

## 🤖 AI 点评

这个仓库的价值在于「把散落在 100 篇博客里的 Claude Code 使用经验系统化了」。对于每天和编码 Agent 打交道的人来说，这些 Skills、Hooks 和 Commands 确实能显著提升效率。不过需要注意，工具优化能带来的提升有天花板——真正决定 Agent 效果上限的仍然是模型能力和任务定义的清晰度。96K stars 背后也反映了社区对「怎么更好地用 AI 写代码」这个问题的强烈需求。
