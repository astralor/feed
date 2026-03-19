---
title: "LoST：按语义显著性排序的 3D 形状 Token 化方法（CVPR 2026）"
description: "提出按语义显著性排序 token 的 3D 形状 tokenization 方法，仅用 0.1%-10% 的 token 即可超越现有 SOTA 的重建质量。"
pubDatetime: 2026-03-19T22:45:00+08:00
collectedAt: 2026-03-19T22:33:39+08:00
category: "学术前沿"
tags: [3D生成, tokenization, CVPR2026, 自回归模型]
featured: false
score: 6.7
scoreReason: "从几何 LoD 到语义 LoS 的范式转换，0.1%-10% token 效率提升极显著，CVPR 2026 论文"
scoreBreakdown: "信息增量:7 内容质量:7 实用价值:6 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.17995"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 6.7** · 来源：[arXiv](https://arxiv.org/abs/2603.17995) · 发布于 2026-03-18
>
> 评分依据：从几何 LoD 到语义 LoS 的范式转换，0.1%-10% token 效率提升极显著，CVPR 2026 论文

## 要点

现有 3D 形状 tokenization 方法主要基于几何层次细节（Level of Detail）排序，源自渲染和压缩场景，对 AR 建模而言 token 效率低且缺乏语义连贯性。LoST（Level of Semantics Tokenization）按语义显著性排序 token——前缀 token 解码出具备主体语义的完整形状，后续 token 精细化实例细节。通过 RIDA（Relational Inter-Distance Alignment）损失将 3D 形状潜空间与 DINO 特征空间的关系结构对齐，在几何和语义重建指标上大幅超越此前 LoD 方法，仅需 0.1%-10% 的 token。

## 🤖 AI 点评

「前 N 个 token 就能重建一个有意义的形状」这个特性不只在学术上有价值——它直接意味着可以在 AR 模型中实现渐进式生成和早期终止，大幅降低推理成本。从 LoD 到 LoS 的思路转换也很有启发性：与其按几何精度排序 token，不如按「人类最先感知到的语义」排序。这对于其他模态的 tokenization 设计同样有参考意义。
