---
title: "Attention Residuals：Kimi 提出动态残差聚合机制"
description: "用注意力机制替代固定权重残差连接，让每层自适应聚合前序表示"
pubDatetime: 2026-03-18T10:05:00+08:00
collectedAt: 2026-03-17T00:00:00+08:00
category: "学术前沿"
tags: ["Transformer", "架构优化", "Kimi", "Moonshot AI"]
featured: false
score: 7.7
scoreReason: "提出新颖的残差连接改进方案，有完整实验验证，但属于架构优化而非突破性创新"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:7 减分:0"
sourceUrl: "https://huggingface.co/papers/2603.15031"
sourceType: "hacker-news"
sourceName: "HuggingFace Papers"
ogImage: ""
---

> **评分 7.7** · 来源：[HuggingFace Papers](https://huggingface.co/papers/2603.15031) · 发布于 2026-03-16
>
> 提出新颖的残差连接改进方案，有完整实验验证，但属于架构优化而非突破性创新

## 要点

Moonshot AI（Kimi）团队提出 Attention Residuals (AttnRes)，用 softmax 注意力机制替代 Transformer 中固定权重的残差连接。传统 PreNorm 架构对所有层输出等权累加，导致隐藏状态随深度无控制增长，逐层稀释单层贡献。AttnRes 让每层通过学习到的、输入依赖的权重选择性聚合前序表示。

为解决大规模训练的内存和通信开销，论文引入 Block AttnRes：将层分块并在块级表示上做注意力，结合缓存式流水线通信和两阶段计算策略，成为标准残差连接的实用替代。Scaling law 实验证实改进在不同模型规模上一致，消融实验验证了内容依赖的深度选择的收益。

团队将 AttnRes 集成到 Kimi Linear 架构（48B 总参数 / 3B 激活参数），在 1.4T tokens 上预训练。AttnRes 缓解了 PreNorm 稀释问题，产生更均匀的输出幅度和梯度分布，在所有评估任务上提升下游性能。

## 🤖 AI 点评

这是架构层面的精细优化，针对 Transformer 残差连接的已知问题提出系统性解决方案。Block AttnRes 的工程设计体现了从理论到实用的完整路径。不过这类架构改进需要从头训练才能发挥效果，对已有模型生态的即时影响有限。
