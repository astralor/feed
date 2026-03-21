---
title: "VLM 真的需要 Vision Transformer 吗？SSM 视觉编码器表现更优"
description: "系统性评测发现，在匹配的 ImageNet 初始化条件下，SSM 视觉编码器在 VQA 和定位任务上全面优于 ViT"
pubDatetime: 2026-03-21T14:45:00+08:00
collectedAt: 2026-03-21T14:45:00+08:00
category: "学术前沿"
tags: [vlm, ssm, vision-transformer, backbone, multimodal]
featured: false
score: 7.4
scoreReason: "挑战 ViT 作为 VLM 视觉主干网络的默认选择，提供系统性实验证据支持 SSM 替代方案"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:7 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.19209"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 7.4** · 来源：[arXiv](https://arxiv.org/abs/2603.19209) · 发布于 2026-03-21
>
> 评分依据：挑战 ViT 作为 VLM 视觉主干网络的默认选择，提供系统性实验证据支持 SSM 替代方案

## 要点

论文系统性地在 VLM 场景中评估了 SSM（状态空间模型）作为视觉编码器的可行性，并与 ViT 系列进行了控制变量对比。在 ImageNet-1K 匹配初始化条件下，SSM 视觉主干在 VQA 和定位/grounding 任务上取得了整体最强表现。

进一步实验对两种主干网络进行了检测和分割任务的微调，发现密集任务训练普遍提升了两类家族的性能，但 SSM 主干在微调后仍保持竞争力，同时模型规模显著更小。

两个反直觉的发现：更高的 ImageNet 准确率或更大的主干网络并不总是转化为更好的 VLM 性能；部分视觉主干在定位任务上存在不稳定性。

## 🤖 AI 点评

「更高的图像识别准确率不等于更好的 VLM」——这个发现对当前 VLM 开发范式有深层启示。行业默认做法是选最强的视觉主干然后接一个连接器，但视觉编码的目标不是「看清楚」，而是「生成语言模型能理解的 token」。SSM 在这方面可能天然更适合，因为它的序列建模特性与 LLM 的 token 流更一致。

这个研究如果被验证和推广，可能引发 VLM 架构的一次小转向——从「ViT + 连接器」转向「SSM 视觉编码器」，推理效率和模型大小都会显著改善。
