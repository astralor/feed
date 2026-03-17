---
title: "OpenSeeker：首个完全开源的前沿搜索 Agent，训练数据+模型权重全公开"
description: "OpenSeeker 用 11.7K 合成样本训练，在 BrowseComp 上以 29.5% 大幅超越次优开源 Agent（15.3%），甚至超越部分工业级竞品"
pubDatetime: 2026-03-16T17:30:00+08:00
collectedAt: 2026-03-17T18:35:00+08:00
category: "学术前沿"
tags: ["搜索Agent", "开源", "训练数据", "BrowseComp", "深度搜索"]
featured: false
score: 7.7
scoreReason: "首个完全开源的前沿搜索 Agent（数据+模型），在多个基准上达到 SOTA，用简单 SFT 超越复杂训练流程的工业方案"
sourceUrl: "https://arxiv.org/abs/2603.15594"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.7** · 来源：[arXiv](https://arxiv.org/abs/2603.15594) · 发布于 2026-03-16
>
> 评分依据：首个完全开源的前沿搜索 Agent，用 11.7K 样本+简单 SFT 达到 SOTA，数据和模型全部公开

## 要点

OpenSeeker 是首个完全开源（模型 + 训练数据）的前沿搜索 Agent，用两项核心技术创新实现了与工业级方案竞争的性能：

**技术创新：**
1. **事实锚定的可控 QA 合成** — 通过拓扑扩展和实体混淆反向工程 Web 图谱，生成复杂多跳推理任务，可控制覆盖范围和复杂度
2. **去噪轨迹合成** — 使用回顾性摘要机制清理轨迹噪声，引导教师 LLM 生成高质量动作

**实验结果：**
- 仅用 **11.7K 合成样本**（单次训练）训练
- BrowseComp：**29.5%**（vs 次优开源 DeepDive 15.3%，近 2 倍领先）
- BrowseComp-ZH：**48.4%**（超越通义 DeepResearch 的 46.7%，后者使用了持续预训练+SFT+RL）
- 在 xbench-DeepSearch、WideSearch 等基准上也达到 SOTA
- 训练方法仅用 **简单 SFT**，无需复杂的 RL 流程

**开源内容：** 完整训练数据集 + 模型权重

## 🤖 AI 点评

这篇论文最令人印象深刻的不是 SOTA 结果本身，而是 **用 11.7K 样本 + 简单 SFT 就超越了使用持续预训练+SFT+RL 完整流程的工业方案**。这说明数据质量和合成方法的重要性远超训练规模。

"事实锚定"的数据合成方法很聪明 — 不是随机生成问答对，而是从 Web 图谱结构出发，构造有真实依据的多跳推理任务。这避免了合成数据常见的"幻觉训练"问题。

完全开源训练数据在搜索 Agent 领域是首次，意义重大。之前这个领域被工业巨头垄断的核心原因就是缺乏透明的高质量训练数据。OpenSeeker 打破了这个壁垒。
