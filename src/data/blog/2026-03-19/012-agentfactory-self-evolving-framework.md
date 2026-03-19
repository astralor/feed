---
title: "AgentFactory：通过可执行子智能体积累实现自我进化"
description: "提出将成功任务方案保存为可执行子智能体代码而非文本经验，基于执行反馈持续优化"
pubDatetime: 2026-03-19T10:52:00+08:00
collectedAt: 2026-03-19T10:36:07+08:00
category: "学术前沿"
tags: ["Agent", "自我进化", "代码生成"]
featured: false
score: 7.4
scoreReason: "提出了将经验保存为可执行代码而非文本的新范式，对 Agent 自我进化有启发"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:7 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.18000"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.4** · 来源：[arXiv](https://arxiv.org/abs/2603.18000) · 发布于 2026-03-19
>
> 评分依据：提出了将经验保存为可执行代码而非文本的新范式，对 Agent 自我进化有启发

## 要点

AgentFactory 提出了一种自我进化范式：将成功的任务解决方案保存为可执行的子智能体代码，而不是传统的文本经验。这些子智能体会基于执行反馈持续优化，变得越来越健壮。

这种方法的核心思想是「代码即经验」——相比文本描述，可执行代码能更精确地保留解决方案的细节，并且可以直接复用和组合。

## 🤖 AI 点评

这个思路和 OpenClaw 的 skill 机制有异曲同工之妙。把经验沉淀为可执行代码而非 prompt，确实能避免自然语言的模糊性。但关键在于如何自动生成高质量的子智能体代码，以及如何处理代码之间的依赖和冲突。
