---
title: "STTS：跨 ViT 和 LLM 的统一视频 token 剪枝"
description: "新方法通过统一的时空 token 评分模块，跨 ViT 和 LLM 全架构剪枝 50% 视觉 token，效率提升 62% 性能仅降 0.7%"
pubDatetime: 2026-03-19T20:45:00+08:00
collectedAt: 2026-03-19T08:34:47Z
category: "学术前沿"
tags: [视频VLM, token剪枝, ViT, 训练效率]
featured: false
score: 7.00
scoreReason: "首个跨 ViT 和 LLM 的统一 token 剪枝方案，无需文本条件，端到端可训练，50% 剪枝仅 0.7% 性能损失"
scoreBreakdown: "信息增量:7 内容质量:7 实用价值:7 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.18004"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.00** · 来源：[arXiv](https://arxiv.org/abs/2603.18004) · 发布于 2026-03-19
>
> 评分依据：首个跨 ViT+LLM 全架构的视频 token 剪枝方法，简洁高效，训练和推理均可获益

## 要点

视频 VLM 的计算瓶颈很大程度上来自视觉 token 的冗余——时间维度上的帧间重复和空间维度上的背景冗余。之前的方案要么只在 ViT 内部剪枝（不适应下游视觉语言任务），要么只在 LLM 内部剪枝（需要复杂的文本条件机制）。

STTS（Spatio-Temporal Token Scoring）提出了一种统一方案：

- **架构全跨越**：一个轻量评分模块同时在 ViT 和 LLM 中剪枝视觉 token，不需要文本条件或 token 合并，完全兼容端到端训练。
- **双维度学习**：时间维度通过辅助损失学习评分，空间维度通过 LLM 下游梯度学习评分，配合高效 packing 算法。
- **效果**：剪枝 50% 视觉 token，训练和推理效率提升 62%，13 个短视频和长视频 QA 任务平均性能仅下降 0.7%。长视频场景下 test-time scaling 还能额外获得 0.5-1% 的性能提升。

## 🤖 AI 点评

STTS 的简洁性是其最大卖点——不引入新的架构假设，不加文本条件分支，就是一个小评分模块 + 打包算法，然后在 ViT 和 LLM 两端统一生效。这种「少即是多」的设计在学术届很稀缺。

50% 剪枝只丢 0.7% 性能的数据很有说服力，但更值得关注的是「效率增益随采样帧数增加而增大」这个特性。这意味着对于长视频场景（帧数多），STTS 的优势会被放大——这恰好是当前视频 VLM 最需要优化的方向。
