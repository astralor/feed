---
title: "OLMo Hybrid：Ai2 用 DeltaNet 混合架构实现数据效率翻倍"
description: "AI2 发布 OLMo Hybrid 7B，用线性循环层替代 75% 注意力层，在 3T token 训练中实现全面性能提升"
pubDatetime: 2026-03-22T14:45:00+08:00
collectedAt: 2026-03-22T14:45:00+08:00
category: "模型动态"
tags: [AI2, OLMo, Hybrid-Architecture, DeltaNet, Open-Source]
featured: false
score: 7.0
scoreReason: "混合架构的又一实证，完全开源（模型+代码+训练日志），DeltaNet 线性循环层替代 75% 注意力实现等效性能"
scoreBreakdown: "信息增量:8 内容质量:6 实用价值:7 减分:0"
sourceUrl: "https://lambda.ai/blog/open-model-open-metrics-how-lambda-and-the-olmo-team-trained-olmo-hybrid"
sourceType: "other"
sourceName: "Lambda / AI2"
ogImage: ""
---

> **评分 7.0** · 来源：[Lambda Blog](https://lambda.ai/blog/open-model-open-metrics-how-lambda-and-the-olmo-team-trained-olmo-hybrid) · 发布于 2026-03-06
>
> 评分依据：完全开源的混合架构实证，3T token 训练 7 天完成，DeltaNet 替代注意力层实现数据效率翻倍

## 要点

OLMo Hybrid 是 AI2 基于 OLMo 3 7B 架构的混合线性 RNN-Transformer 模型，7B 参数完全开源，包括模型权重、训练代码和数据。

**架构设计。** 遵循标准 Transformer 布局，但将 75% 的注意力层替换为带门控的 DeltaNet 线性循环层，每 3 个 DeltaNet 层配 1 个完整多头注意力层。理论上，注意力和循环各有优势——注意力擅长召回任务，循环擅长状态追踪——混合两者可在不牺牲可扩展性的前提下获得更强的表达能力。

**训练与效果。** 在 512 块 NVIDIA Blackwell GPU 上用 3T token 训练，7 天完成，训练可用时间达 99%。相比 OLMo 3 7B，MedQA MC +7.1、MBPP +6.7、MMLU STEM +4.5、MMLU Humanities +4.7，全维度提升。数据效率约为传统 Transformer 的两倍。

## 🤖 AI 点评

OLMo Hybrid 的价值不在于跑分赢了谁，而在于它为「混合架构是否是下一代 LLM 的方向」提供了又一个坚实的实验数据点。75% 注意力层被替换却全面提升，这个结果很难用噪声解释。对关注推理成本和边缘部署的团队来说，线性循环层的 O(n) 复杂度比注意力的 O(n²) 有本质吸引力。完全开源（包括 Lambda 的训练栈和恢复日志）也让复现成为可能，这在行业里越来越稀缺。
