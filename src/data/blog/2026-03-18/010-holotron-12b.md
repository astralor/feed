---
title: "Holotron-12B：高吞吐 Computer Use Agent 开源模型"
description: "H Company 联合 NVIDIA 发布 12B 参数 Computer Use 代理模型，SSM 混合架构实现 2 倍吞吐提升"
pubDatetime: 2026-03-17T20:33:39+08:00
collectedAt: 2026-03-18T08:35:00+08:00
category: "工程实践"
tags: [computer-use, agent, open-source, nvidia, ssm, holotron]
featured: false
score: 7.65
scoreReason: "开源 Computer Use Agent 模型，12B 参数量强调高吞吐，正处于 Agent 操控计算机的热门赛道，开源可直接试用"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:8 减分:0"
sourceUrl: "https://huggingface.co/blog/Hcompany/holotron-12b"
sourceType: "huggingface-blog"
sourceName: "Hugging Face"
ogImage: "./010-holotron-12b.jpg"
---

> **评分 7.65** · 来源：[Hugging Face](https://huggingface.co/blog/Hcompany/holotron-12b) · 发布于 2026-03-17
>
> Computer Use 赛道的开源新选手，SSM 架构在吞吐量上的实测数据很有说服力

## 要点

H Company 与 NVIDIA 合作发布 Holotron-12B，一款专为 Computer Use（计算机操控）场景优化的多模态代理模型，基于 NVIDIA Nemotron-Nano-2 VL 后训练。

- **SSM 混合架构**：采用 State-Space Model + Attention 混合设计，避免纯 Transformer 的二次方计算开销，KV Cache 内存占用与序列长度无关
- **吞吐量翻倍**：单张 H100 GPU 上使用 vLLM（v0.14.1），在 100 并发 WebVoyager 基准下达到 8.9k tokens/s，比 Holo2-8B 高 2 倍以上
- **生产导向设计**：针对长上下文、多图像、高并发的真实代理工作负载优化，适合数据生成、标注和在线强化学习
- **开源可用**：模型已在 Hugging Face 发布，可直接下载

## 🤖 AI 点评

Computer Use 正从"Demo 好看"走向"生产可用"，而吞吐量是这个转变的关键瓶颈。Holotron-12B 用 SSM 架构解决了长上下文多图像场景下的内存和吞吐问题，单 H100 跑到 8.9k tokens/s 的数据相当亮眼。更重要的是它开源了——对于想在自己基础设施上跑 Computer Use Agent 的团队来说，这比调用闭源 API 灵活得多。与 Nemotron Nano 4B 一起看，NVIDIA 在 GTC 期间构建的是一个从边缘到云端的完整开源模型生态。
