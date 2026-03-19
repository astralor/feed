---
title: "TDAD：测试驱动的智能体开发，减少 70% 代码回归"
description: "结合 AST 代码-测试图构建与加权影响分析，在 SWE-bench 上将解决率从 24% 提升至 32%"
pubDatetime: 2026-03-19T10:52:00+08:00
collectedAt: 2026-03-19T10:36:07+08:00
category: "工程实践"
tags: ["Coding Agent", "测试", "SWE-bench"]
featured: true
score: 8.0
scoreReason: "70% 回归减少和 8% 解决率提升是实打实的工程价值，直接可用于编码智能体"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:8 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.17973"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 8.0** · 来源：[arXiv](https://arxiv.org/abs/2603.17973) · 发布于 2026-03-19
>
> 评分依据：70% 回归减少和 8% 解决率提升是实打实的工程价值，直接可用于编码智能体

## 要点

TDAD (Test-Driven Agentic Development) 提出了一种减少 AI 编码智能体代码回归的方法。通过构建基于 AST 的代码-测试依赖图，结合加权影响分析，在修改代码前预测哪些测试可能受影响。

在 SWE-bench 评估中，TDAD 将测试级回归减少了 70%，同时将问题解决率从 24% 提升到 32%。这意味着智能体不仅更少破坏现有功能，还能更有效地修复 bug。

## 🤖 AI 点评

这是编码智能体领域的实用突破。当前 Codex、AWS Code 等工具最大的痛点就是「修好了 A，搞坏了 B」。TDAD 的思路是在动手前先建立影响范围的心智模型，这和人类开发者的思维方式一致。关键是 AST 分析的开销能否在实时交互中接受。
