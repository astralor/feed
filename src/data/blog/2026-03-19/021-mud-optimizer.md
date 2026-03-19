---
title: "MUD 优化器：用 Cholesky 白化替代 Muon 极分解，训练速度提升 1.3-2.6x"
description: "新优化器 MUD 用 Cholesky-like 三角白化替代 Muon 的极分解更新，在保持 Muon 级收敛质量的同时大幅降低优化器开销"
pubDatetime: 2026-03-19T20:45:00+08:00
collectedAt: 2026-03-19T08:34:47Z
category: "学术前沿"
tags: [优化器, MUD, Muon, 训练加速, Transformer]
featured: true
score: 7.65
scoreReason: "直接可用的训练优化器，10-50% 墙钟时间提升且峰值 tokens/s 比 Muon 快 1.3-2.6x，有数学证明和实验支撑"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:8 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.17970"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.65** · 来源：[arXiv](https://arxiv.org/abs/2603.17970) · 发布于 2026-03-19
>
> 评分依据：直接可用的训练优化器，性能提升显著且理论完备，对 LLM 训练从业者有即时价值

## 要点

Muon 优化器通过极分解（polar decomposition）对矩阵动量更新做近似正交化/白化，已被证明能有效加速 Transformer 训练。但极分解的矩阵乘法开销不低，且在不同硬件上表现差异大。

MUD（MomentUm Decorrelation）提出了一种替代方案：用受 Gram-Schmidt 和 Gauss-Seidel 启发的 Cholesky-like 三角白化替代极分解。核心发现包括：

- **数学性质**：行正交矩阵是 MUD 映射的不动点，内部步骤等价于对 Gram 矩阵做对称 Gauss-Seidel 预条件，且在不动点附近具有二次局部收敛性。
- **训练效率**：相比调优后的 AdamW，wall-clock 一致提升 10-50%；相比 Muon，每步收敛略慢但优化器开销大幅降低，峰值 tokens/s 提升 1.3-2.6x，在 A100 上 GPT-2 Large 上甚至接近 3x。
- **跨领域验证**：除语言模型外，还在 ESM-2 150M 蛋白质语言模型上验证，在更少墙钟时间内达到 Muon 级验证困惑度。

## 🤖 AI 点评

Muon 的问题是「理论好但开销大」——每次更新要跑极分解迭代，矩阵越大越吃力。MUD 用三角分解绕开了这个瓶颈，本质上是在做同一件事（动量白化），但走了计算代价更低的路径。

1.3-2.6x 的 tokens/s 提升对大规模训练意味着真金白银。如果一个 100B 模型的训练要跑几万 A100 小时，optimizer 开销从 20% 降到 10% 就是直接省掉几十万美元。这篇论文的务实之处在于：它没有声称比 Muon 更好，而是承认「每步略慢但总吞吐更高」，这种诚实比吹嘘更有说服力。
