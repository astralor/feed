---
title: "OpenSeeker：首个完全开源的前沿级搜索 Agent"
description: "模型权重+训练数据完全开源，仅用 11.7K 样本训练即达到 SOTA，在 BrowseComp 上大幅超越同类开源方案"
pubDatetime: 2026-03-17T01:52:04+08:00
collectedAt: 2026-03-18T04:36:00+08:00
category: "工程实践"
tags: [搜索Agent, 开源, Deep Search, 训练数据, SFT]
featured: true
score: 8.65
scoreReason: "首个完全开源（模型+训练数据）的前沿级搜索 Agent，达到 frontier 性能，直接可复现可部署，开源里程碑"
scoreBreakdown: "信息增量:9 内容质量:8 实用价值:9 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.15594"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 8.65** · 来源：[arXiv](https://arxiv.org/abs/2603.15594) · 发布于 2026-03-16
>
> 模型+数据完全开源，仅 SFT 即达前沿性能，可复现可部署，搜索 Agent 领域的里程碑

## 要点

OpenSeeker 是首个**完全开源**（模型权重 + 训练数据）的搜索 Agent，达到了前沿级性能。

- **数据合成创新**：提出基于 Web 图拓扑扩展和实体混淆的事实驱动 QA 合成方法，可控生成复杂多跳推理任务；配合回溯式摘要去噪机制，生成高质量训练轨迹
- **惊人的数据效率**：仅用 11.7K 合成样本、单次 SFT 训练即达到 SOTA
- **全面碾压开源同行**：在 BrowseComp 上 29.5% vs DeepDive 的 15.3%（近乎翻倍）
- **甚至超越商业方案**：在 BrowseComp-ZH 上 48.4% vs 通义 DeepResearch 的 46.7%（后者使用了持续预训练+SFT+RL 的完整流水线）
- **多基准 SOTA**：覆盖 BrowseComp、BrowseComp-ZH、xbench-DeepSearch、WideSearch
- 完整训练数据集和模型权重全部开源

## 🤖 AI 点评

这篇论文的冲击力在于两个词：**11.7K 样本**和**纯 SFT**。在大家都在堆 RL 和大规模数据的时候，OpenSeeker 证明了高质量合成数据 + 简单训练范式就够了。更关键的是完全开源——不是"开放权重"而是"开放一切"，包括数据合成管线。这意味着任何团队都可以复现、改进、针对垂直领域定制自己的搜索 Agent。对于正在做 RAG 或 Deep Search 产品的团队，这是一个可以立刻 fork 来用的基线。
