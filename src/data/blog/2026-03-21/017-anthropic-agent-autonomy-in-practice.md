---
title: "Anthropic 首次量化 Agent 自主性：百万次交互数据揭示真实使用模式"
description: "基于 Claude Code 数百万次交互的实证研究，揭示了 Agent 自主运行时长的增长趋势和用户信任演进"
pubDatetime: 2026-03-21T14:45:00+08:00
collectedAt: 2026-03-21T14:45:00+08:00
category: "工程实践"
tags: [anthropic, agent, autonomy, claude-code, research]
featured: true
score: 7.7
scoreReason: "罕见的 Agent 使用实证数据，从百万次交互中提炼出自主性量化指标"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:7 减分:0"
sourceUrl: "https://www.anthropic.com/research/measuring-agent-autonomy"
sourceType: "other"
sourceName: "Anthropic Research"
ogImage: ""
---

> **评分 7.7** · 来源：[Anthropic Research](https://www.anthropic.com/research/measuring-agent-autonomy) · 发布于 2026-03-21
>
> 评分依据：罕见的 Agent 使用实证数据，从百万次交互中提炼出自主性量化指标

## 要点

Anthropic 使用其隐私保护工具 CLIO 分析了 Claude Code 和公开 API 上的数百万次人机交互，首次系统性地量化了 AI Agent 的自主运行模式。

核心发现：Claude Code 最长自主运行时间在三个月内从不足 25 分钟增长到超过 45 分钟，且这一增长跨模型版本平滑推进，说明现有模型的自主能力远超实际使用中所展现的水平。新用户中约 20% 的会话使用全自动审批模式，而有经验的用户这一比例超过 40%——但同时，经验用户中断 Agent 的频率也更高，形成了「信任但不放任」的使用模式。

在复杂任务上，Claude Code 主动暂停请求澄清的频率是人类主动中断的两倍以上。这意味着 Agent 自身的自我监督机制是实际部署中的重要安全层。

## 🤖 AI 点评

这项研究最有价值的发现不是「Agent 越来越自主」，而是「模型的能力上限远高于用户的实际使用水平」。这暗示了一个被低估的问题——我们当前对 Agent 的利用率可能只有其潜力的一小部分。

「信任但不放任」的用户行为模式值得产品设计者深思：用户不是在学会信任 Agent，而是在学会精准地不信任——只在必要时介入。这比「要么全信要么全不信」更成熟，也说明好的 Agent 设计应该让干预成本越来越低。
