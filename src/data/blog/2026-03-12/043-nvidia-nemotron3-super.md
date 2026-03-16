---
title: "NVIDIA 发布 Nemotron 3 Super：专为 Agentic AI 打造的 120B 开源混合架构模型"
description: "120B 总参数、12B 激活参数的 Mamba-Transformer MoE 混合模型，开放权重，推理吞吐量比同类高 5 倍，专门针对多智能体系统优化。"
pubDatetime: 2026-03-12T21:00:00+08:00
tags: [nvidia, open-source, model-release, agents, moe]
featured: true
category: "模型动态"
score: 8.5
sourceUrl: "https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/"
sourceType: "web-search"
sourceName: "NVIDIA Developer Blog"
---

NVIDIA 正式发布 **Nemotron 3 Super**，这是 Nemotron 系列首个采用混合 Mamba-Transformer MoE 架构的开源模型，在复杂 Agent 推理任务上树立了新的效率标杆。

**核心参数**：120B 总参数，12B 激活参数，采用 LatentMoE 架构。在 NVIDIA Blackwell 平台上以 NVFP4 精度运行，内存占用更低，推理速度比 NVIDIA Hopper FP8 快 4 倍，整体吞吐量比同等级模型高出 **5 倍**，且精度无损。

**面向场景**：软件工程自动化、网络安全分析等多智能体应用——恰好是当前 Agent 系统的主战场。模型以宽松许可证开放权重，支持商业部署。

混合 Mamba 架构绕开了纯 Transformer 的注意力瓶颈，长序列处理效率显著提升，这对需要持续上下文的 Agent 任务尤为关键。
