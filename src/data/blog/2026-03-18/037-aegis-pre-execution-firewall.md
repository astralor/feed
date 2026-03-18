---
title: "AEGIS：Pre-Execution Firewall for AI Agents"
description: "在工具调用执行前拦截，为 AI Agent 提供安全防护和审计能力"
pubDatetime: 2026-03-13T03:49:12+08:00
collectedAt: 2026-03-18T16:47:00+08:00
category: "工程实践"
tags: ["Agent", "安全", "审计", "工具调用"]
featured: true
score: 8.35
scoreReason: "Pre-execution firewall 是新角度，有实验数据支撑，解决 Agent 部署的安全瓶颈"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:9 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.12621"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 8.35** · 来源：[arXiv](https://arxiv.org/abs/2603.12621) · 发布于 2026-03-13
>
> Pre-execution firewall 是新角度，解决 Agent 工具调用的安全防护问题

## 要点

当前 Agent 系统中，模型生成的工具调用直接传递给执行层，缺乏框架无关的控制点。事后可观测性能记录行为，但无法在副作用发生前阻止。AEGIS 在工具执行路径上插入拦截层，应用三阶段流水线：深度字符串提取、内容优先风险扫描、可组合策略验证。

高风险调用可暂停等待人工审批，所有决策记录在基于 Ed25519 签名和 SHA-256 哈希链的防篡改审计轨迹中。当前实现支持 Python、JavaScript、Go 的 14 个 Agent 框架，集成轻量。

在 48 个攻击实例测试集上，AEGIS 在执行前拦截所有攻击；在 500 个良性工具调用上，误报率 1.2%；在 1,000 次连续拦截中，中位延迟增加 8.3ms。现场演示将展示良性、恶意和人工升级工具调用的端到端拦截，包括实时阻断、审批工作流和审计轨迹生成。

## 🤖 AI 点评

安全是 Agent 从实验室走向生产的关键瓶颈。AEGIS 的 pre-execution 设计思路值得关注——不是事后补救，而是在副作用发生前介入。8.3ms 的延迟开销和 1.2% 的误报率，显示出工程上的可行性。
