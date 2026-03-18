---
title: "AgentRM：OS-Inspired Resource Manager for LLM Agent Systems"
description: "借鉴操作系统设计，解决 Agent 系统的调度失败和上下文退化问题"
pubDatetime: 2026-03-13T16:07:20+08:00
collectedAt: 2026-03-18T16:47:00+08:00
category: "工程实践"
tags: ["Agent", "系统架构", "资源管理", "OpenClaw"]
featured: true
score: 8.65
scoreReason: "首次系统性提出 OS-inspired 资源管理框架，实证分析 40K+ GitHub issues，解决 OpenClaw/AutoGen 等主流框架的调度和上下文管理痛点"
scoreBreakdown: "信息增量:8 内容质量:9 实用价值:9 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.13110"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 8.65** · 来源：[arXiv](https://arxiv.org/abs/2603.13110) · 发布于 2026-03-13
>
> 首次系统性提出 OS-inspired 资源管理框架，解决 Agent 系统的调度失败和上下文退化问题

## 要点

通过分析 OpenClaw、AutoGen、CrewAI、LangGraph、Codex、Claude Code 六大框架的 40,000+ GitHub issues，研究团队识别出两大核心问题：调度失败（blocking、僵尸进程、rate limit 级联）和上下文退化（内存无限增长、保留策略差）。

AgentRM 借鉴操作系统设计，将 Agent 资源类比为 OS 资源，采用 Multi-Level Feedback Queue (MLFQ) 调度器配合僵尸进程回收和 rate-limit-aware 准入控制，以及三层 Context Lifecycle Manager 实现自适应压缩和休眠机制。

评估结果显示：AgentRM-MLFQ 将 P95 延迟降低 86%，lane 浪费减少 96%，吞吐量提升 168%，僵尸 Agent 数量从 29 降至 0；AgentRM-CLM 实现 100% 关键信息保留和 95% 质量评分，相比现有方案的 65.1% 保留率和 87% 质量有显著提升，但压缩成本更高（34,330 vs 17,212 tokens）。

## 🤖 AI 点评

这是 Agent 系统工程化的重要一步——不再只关注模型能力，而是从系统层面解决资源管理问题。MLFQ 调度器和三层上下文管理的设计思路，为 Agent 框架的生产级部署提供了可参考的架构模式。
