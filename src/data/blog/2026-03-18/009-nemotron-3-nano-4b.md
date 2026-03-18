---
title: "Nemotron 3 Nano 4B：面向本地 AI 的紧凑型混合架构模型"
description: "NVIDIA 发布 4B 参数 Mamba-Transformer 混合架构模型，专为边缘设备本地部署优化"
pubDatetime: 2026-03-18T07:17:07+08:00
collectedAt: 2026-03-18T08:35:00+08:00
category: "模型动态"
tags: [nvidia, nemotron, edge-ai, small-language-model, mamba]
featured: false
score: 7.65
scoreReason: "NVIDIA 官方发布的 4B 紧凑型混合架构模型，面向本地 AI 推理，有具体技术细节和可直接下载使用的权重，对本地部署从业者实用价值高"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:8 减分:0"
sourceUrl: "https://huggingface.co/blog/nvidia/nemotron-3-nano-4b"
sourceType: "huggingface-blog"
sourceName: "Hugging Face"
ogImage: "./009-nemotron-3-nano-4b.jpg"
---

> **评分 7.65** · 来源：[Hugging Face](https://huggingface.co/blog/nvidia/nemotron-3-nano-4b) · 发布于 2026-03-18
>
> NVIDIA 官方一手发布，有完整技术细节和开源权重，边缘部署场景价值明确

## 要点

NVIDIA 正式发布 Nemotron 3 Nano 4B，这是 Nemotron 3 系列中最紧凑的成员，采用 Mamba-Transformer 混合架构，专为本地和边缘 AI 场景设计。

- **4B 参数，极致轻量**：可在 Jetson Thor/Orin Nano、DGX Spark 和 RTX GPU 上运行，VRAM 占用为同级别最低
- **混合架构优势**：Mamba SSM + Transformer 结合，在高输入/输出长度下实现最低 TTFT（首 token 延迟）
- **能力全面**：指令跟随（IFBench/IFEval）和游戏代理智能（Orak）均达同级别 SOTA，工具调用表现优异
- **训练来源**：从 Nemotron Nano 9B v2 通过 Nemotron Elastic 框架剪枝蒸馏而来，继承了混合推理能力
- **开源可定制**：模型权重已在 Hugging Face 开放，支持领域特定微调和优化

## 🤖 AI 点评

这是 NVIDIA 在 GTC 期间推出的"小而美"路线代表作。4B 参数跑在 RTX 4070 上用 Q4 量化就能工作，把"本地 AI"从概念拉到了真正可用的水平。Mamba-Transformer 混合架构在推理效率上的优势正在被越来越多模型采用，Nemotron Nano 的实测数据给了这个方向一个扎实的 benchmark。对关注端侧部署的开发者来说，这可能是目前最值得尝试的 4B 级开源模型。
