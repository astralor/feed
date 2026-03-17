---
title: "Mamba-3：用状态空间原理推进序列建模的 Pareto 前沿"
description: "SSM 架构第三代，引入复数状态更新和 MIMO 机制，在检索、状态追踪和语言建模上全面提升"
pubDatetime: 2026-03-17T01:30:08+08:00
collectedAt: 2026-03-18T04:36:00+08:00
category: "学术前沿"
tags: [SSM, Mamba, 序列建模, 推理效率, ICLR]
featured: false
score: 7.35
scoreReason: "Mamba 系列第三代 SSM 架构，检索/状态追踪/语言建模全面提升，Transformer 替代路线重要进展"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:7 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.15569"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.35** · 来源：[arXiv](https://arxiv.org/abs/2603.15569) · 发布于 2026-03-16
>
> ICLR 2026 论文，Mamba 系列第三代，SSM 架构在性能-效率 Pareto 前沿的又一次推进

## 要点

Mamba-3 是状态空间模型（SSM）架构的第三代演进，聚焦推理效率优先的设计理念。

- **三大核心改进**：
  - 基于 SSM 离散化的更富表达力的递推公式
  - 复数值状态更新规则，增强状态追踪能力
  - 多输入多输出（MIMO）机制，在不增加解码延迟的前提下提升模型性能
- **显著性能提升**：1.5B 规模下，Mamba-3 在下游平均准确率上比 Gated DeltaNet（次优模型）高 0.6 个百分点；MIMO 变体进一步提升 1.2 点，总计高出 1.8 点
- **更高的状态效率**：Mamba-3 在使用 Mamba-2 一半状态大小的情况下，达到相当的困惑度
- **ICLR 2026 接收**：已被顶会收录
- 核心优势在于亚二次复杂度 + 常数级内存，使推理成本远低于标准 Transformer

## 🤖 AI 点评

Mamba 系列从 v1 到 v3 一路走来，每一代都在补上前代的短板。v3 用复数值状态解决了 SSM 的状态追踪弱点，MIMO 机制则是在不牺牲效率的前提下增加表达能力——这两个改进正好瞄准了 SSM 被诟病最多的地方。虽然目前验证规模只到 1.5B，但方向是清晰的：如果 Mamba-3 能在更大规模上保持这个趋势，SSM 作为 Transformer 替代方案的叙事会再次被强化。ICLR 2026 的收录也为其学术可信度背书。
