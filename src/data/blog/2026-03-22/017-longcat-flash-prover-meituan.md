---
title: "美团开源 LongCat-Flash-Prover：560B 参数刷新形式化推理 SOTA"
description: "美团龙猫团队开源 560B MoE 定理证明模型，MiniF2F-Test 仅 72 次推理达 97.1%，自动形式化和定理证明双 SOTA"
pubDatetime: 2026-03-22T14:45:00+08:00
collectedAt: 2026-03-22T14:45:00+08:00
category: "学术前沿"
tags: [美团, LongCat, Theorem-Proving, Lean4, MoE, Open-Source]
featured: false
score: 7.0
scoreReason: "560B MoE 开源模型，形式化推理领域新 SOTA，72 次推理通过率 97.1% 表明高效推理能力"
scoreBreakdown: "信息增量:8 内容质量:6 实用价值:7 减分:0"
sourceUrl: "https://github.com/meituan/LongCat-Flash-Prover"
sourceType: "github-trending"
sourceName: "美团龙猫"
ogImage: ""
---

> **评分 7.0** · 来源：[GitHub](https://github.com/meituan/LongCat-Flash-Prover) · 发布于 2026-03-21
>
> 评分依据：开源形式化推理新 SOTA，560B MoE 在 Lean4 上同时刷新自动形式化和定理证明

## 要点

美团龙猫团队开源 LongCat-Flash-Prover，一个 560B 参数的 MoE 模型，专注于 Lean4 原生形式推理。

**双 SOTA 成绩。** 在开源权重模型中同时刷新自动形式化（Autoformalization）和定理证明（Theorem Proving）两项 SOTA。MiniF2F-Test 上仅用 72 次推理即达到 97.1% 通过率，显著优于此前开源模型的表现。模型采用 Agentic Tool-Integrated Reasoning 方法，可在推理过程中调用工具。

**技术路线。** 与 DeepSeek-Prover 等竞品不同，LongCat-Flash-Prover 的核心优势在于推理效率——更少的推理步数达到更高通过率，这意味着推理成本显著降低。模型在正式发布论文前即开源权重，让社区可以立即使用和验证。

## 🤖 AI 点评

形式化推理是 AI 数学能力的硬指标——不是答对选择题，而是在 Lean4 中写出可机器验证的证明。560B MoE 在这个领域刷新 SOTA，说明大模型在严格逻辑推理上的潜力远未被穷尽。72 次推理 97.1% 这个数据尤其值得关注：低推理步数+高通过率意味着模型内部已经建立了可靠的数学直觉，而非暴力搜索。美团在 AI 基础研究上的投入正在产出硬核成果。
