---
title: "Nemotron-Cascade 2：30B MoE 仅激活 3B，IMO/IOI/ICPC 金牌级开源推理模型"
description: "NVIDIA 发布 30B MoE 开源模型，Cascade RL + 多领域蒸馏技术让小模型达到三大竞赛金牌水平"
pubDatetime: 2026-03-20T14:45:00+08:00
collectedAt: 2026-03-20T14:35:05+08:00
category: "模型动态"
tags: [nvidia, open-source, MoE, reasoning, cascade-rl]
featured: true
score: 7.95
scoreReason: "开源模型+训练数据全部释放，30B/3B 的极高效率比达到 frontier 级推理能力，对资源受限场景有直接实用价值"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:9 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.19220v1"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.95** · 来源：[arXiv](https://arxiv.org/abs/2603.19220v1) · 发布于 2026-03-19
>
> 评分依据：开源模型+训练数据全部释放，30B/3B 的极高效率比达到 frontier 级推理能力，对资源受限场景有直接实用价值

## 要点

NVIDIA 发布 Nemotron-Cascade 2，一个 30B 参数的 MoE 模型，仅激活 3B 参数，在数学推理和代码能力上逼近 frontier 开源模型。

核心亮点：

- **三大竞赛金牌**：继 DeepSeekV3.2-Speciale-671B 之后，第二个在 IMO、IOI、ICPC 三个国际顶级竞赛中达到金牌水平的开源权重 LLM，但参数量仅为后者的 1/20
- **Cascade RL + 多领域蒸馏**：相比前代，大幅扩展 Cascade RL 的覆盖范围，引入多领域 on-policy 蒸馏——在 Cascade RL 过程中从每个领域最强的中间教师模型蒸馏，高效恢复基准回归并维持性能增益
- **完全开源**：模型权重和训练数据均在 HuggingFace 发布

## 🤖 AI 点评

用 20 倍参数优势换取同等水平的竞赛金牌，NVIDIA 这波把「智力密度」的概念推到了新高度。Cascade RL 的多领域蒸馏思路很有启发性——与其用一个教师蒸馏所有能力，不如在不同推理阶段用各自最强的中间 checkpoint 来教，这比单一蒸馏更精细也更能避免能力互相干扰。

对于不想在消费级硬件上跑 671B 但又需要顶级推理能力的场景，这个 3B active 的模型几乎是当前最优选择。训练数据一并释放更是加分项，社区可以基于此继续探索 Cascade RL 的变体。
