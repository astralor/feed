---
title: "Mixture-of-Depths Attention：按需分配注意力计算的新范式"
description: "arXiv 新论文提出 Mixture-of-Depths 注意力机制，在不同 token 上动态分配不同深度的注意力计算，平衡效率与质量"
pubDatetime: 2026-03-16T17:30:00+08:00
collectedAt: 2026-03-17T18:35:00+08:00
category: "学术前沿"
tags: ["注意力机制", "Transformer", "计算效率", "架构创新"]
featured: false
score: 7.1
scoreReason: "注意力机制优化新方向，在计算效率与模型质量间寻找平衡，是 Transformer 架构改进的有价值探索"
sourceUrl: "https://arxiv.org/abs/2603.15619"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.1** · 来源：[arXiv](https://arxiv.org/abs/2603.15619) · 发布于 2026-03-16
>
> 评分依据：注意力机制优化新方向，在计算效率与模型质量间寻找平衡

## 要点

Mixture-of-Depths (MoD) Attention 提出在不同 token 上 **动态分配不同深度的注意力计算**：

**核心思想：**
- 并非所有 token 都需要同样深度的注意力处理
- 简单 token（如停用词、重复模式）可以用浅层注意力快速处理
- 复杂 token（如关键推理步骤）需要深层注意力完整计算
- 通过学习路由机制自动决定每个 token 的计算深度

**与 Mixture-of-Experts (MoE) 的类比：**
- MoE 在"宽度"维度上按需分配计算（不同专家处理不同 token）
- MoD 在"深度"维度上按需分配计算（不同 token 经过不同层数）
- 两者可以组合使用

## 🤖 AI 点评

这个思路很直觉 — 人在阅读时也不会对每个字投入同样的注意力。MoD 把这种"注意力经济学"形式化到 Transformer 架构中。

与 MoE 的正交性是最大亮点：MoE 已经被证明有效（GPT-5.4、Mistral Small 4 都是 MoE），如果 MoD 能与 MoE 协同工作，意味着 **同时在宽度和深度上优化计算分配**，进一步提升推理效率。

不过从论文标题看这是一个相对早期的工作，距离实际部署还有距离。值得追踪后续实验验证。
