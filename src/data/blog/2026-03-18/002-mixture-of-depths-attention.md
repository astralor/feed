---
title: "MoDA：混合深度注意力机制，让 LLM 的深度扩展更高效"
description: "提出跨层深度 KV 注意力机制 MoDA，在仅增加 3.7% FLOPs 的情况下显著提升深层 LLM 性能"
pubDatetime: 2026-03-17T01:59:55+08:00
collectedAt: 2026-03-18T04:36:00+08:00
category: "学术前沿"
tags: [注意力机制, LLM架构, 深度扩展, MoDA]
featured: false
score: 7.05
scoreReason: "MoDA 提出跨层深度 KV 注意力机制，架构创新有新意，对 LLM 效率优化方向有启发，但落地尚远"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:6 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.15619"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.05** · 来源：[arXiv](https://arxiv.org/abs/2603.15619) · 发布于 2026-03-16
>
> 架构创新方向，跨层注意力思路有新意，效率开销极低，代码已开源

## 要点

随着 LLM 深度增加，浅层形成的有效特征会被反复残差更新逐渐稀释（信号衰减问题）。MoDA（Mixture-of-Depths Attention）提出让每个注意力头同时关注当前层的序列 KV 对和前序层的深度 KV 对。

- **核心思路**：打破传统 Transformer 中各层独立注意力的限制，允许深层直接"回看"浅层的 KV 缓存，缓解信号衰减
- **硬件友好**：提出专门的高效算法解决非连续内存访问问题，在 64K 序列长度下达到 FlashAttention-2 效率的 97.3%
- **性能提升**：1.5B 参数模型上，10 个验证集平均困惑度降低 0.2，10 个下游任务平均提升 2.11%，FLOPs 开销仅 3.7%
- **额外发现**：MoDA + post-norm 优于 pre-norm 组合
- 代码已开源：[github.com/hustvl/MoDA](https://github.com/hustvl/MoDA)

## 🤖 AI 点评

MoDA 的思路和最近 Mixture-of-Experts 在宽度维度的扩展形成互补——MoE 扩展宽度，MoDA 扩展深度利用率。3.7% 的额外 FLOPs 换来 2%+ 的下游提升，性价比相当高。不过目前验证规模止步于 1.5B，能否在 7B+ 甚至更大模型上保持收益是关键问题。这个方向如果被大厂跟进，可能会改变下一代模型的架构设计思路。
