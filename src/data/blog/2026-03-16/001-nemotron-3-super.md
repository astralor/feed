---
title: "NVIDIA 发布 Nemotron 3 Super：120B 混合专家模型，专为 Agent 推理设计"
description: "120B 参数混合 Mamba-Transformer MoE 架构，1M context 窗口，开源权重，针对多 Agent 系统优化"
pubDatetime: 2026-03-16T06:00:00+08:00
tags: [nvidia, model-release, agent, moe, open-source]
featured: true
category: "模型动态"
score: 8.5
scoreReason: "重要模型发布，架构创新（Latent MoE + Hybrid Mamba-Transformer），专为 Agent 场景优化，完全开源"
sourceUrl: "https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/"
sourceType: "other"
sourceName: "NVIDIA Developer Blog"
ogImage: ""
---

> **评分 8.5** · 来源：[NVIDIA Developer Blog](https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/) · 发布于 2026-03-16
>
> 评分依据：重要模型发布，架构创新显著（Latent MoE、Hybrid Mamba-Transformer、Multi-token Prediction），专为多 Agent 系统设计，完全开源（权重+数据+训练配方），在 PinchBench 上达到 85.6% 成为同级别最佳开源模型

## 要点

NVIDIA 发布 Nemotron 3 Super，一个 120B 总参数、12B 激活参数的混合专家模型，专为解决多 Agent 系统的两大痛点设计：

- **Context 爆炸**：多 Agent 系统生成的 token 量是普通对话的 15 倍，长任务中会导致目标漂移
- **Thinking Tax**：每个子任务都用大型推理模型成本过高且缓慢

**核心创新：**

1. **Latent MoE**：在压缩的低秩潜空间中进行专家路由，相同推理成本下可调用 4 倍专家数量
2. **Hybrid Mamba-Transformer**：Mamba-2 层处理序列（线性复杂度），Transformer 注意力层保证精确检索，MoE 层扩展参数规模
3. **Multi-token Prediction (MTP)**：一次前向传播预测多个未来 token，内置推测解码，结构化生成任务加速 3 倍
4. **Native NVFP4 预训练**：从第一次梯度更新就在 4-bit 精度下训练，Blackwell 上推理速度比 H100 FP8 快 4 倍
5. **多环境强化学习**：在 NeMo Gym 的 21 种环境配置下训练，120 万次环境 rollout

**性能表现：**

- 1M context 窗口（原生支持）
- PinchBench（OpenClaw Agent 基准）：85.6%，同级别开源模型最佳
- 吞吐量比上一代 Nemotron Super 提升 5 倍以上

**开源资源：**

- 模型权重：Hugging Face + NVIDIA NIM
- 完整训练配方：预训练 → SFT → RL 全流程
- 数据集：25T token 预训练语料（10T 去重）+ 40M 后训练样本 + RL 任务环境
- 部署 Cookbook：vLLM、SGLang、TensorRT LLM
- 微调 Cookbook：LoRA SFT、GRPO/DAPO

**部署方式：**

已在 Perplexity、OpenRouter、build.nvidia.com、Cloudflare Workers AI、Google Cloud Vertex AI、Together AI 等 15+ 平台上线。

## 🤖 AI 点评

Nemotron 3 Super 的发布标志着开源模型在 Agent 场景的重要突破。Latent MoE 和 Hybrid Mamba-Transformer 的组合不是简单的架构堆叠，而是针对多 Agent 系统「context 爆炸」和「thinking tax」两大实际痛点的精准设计。

1M context 窗口 + 线性复杂度让 Agent 真正拥有「长期记忆」，而不是在几轮对话后就开始遗忘初始目标。MTP 内置推测解码意味着不需要额外的 draft model，这对生产部署是实质性的简化。

更重要的是完全开源的姿态——不只是权重，连 25T token 预训练语料、40M 后训练样本、RL 环境配置、训练配方全部公开。这对开源社区是巨大的资源注入，也会加速 Agent 领域的研究迭代。

与 Nemotron 3 Nano 的「Super + Nano」部署模式也很务实：简单任务用 Nano 快速执行，复杂任务交给 Super 深度推理，专有模型处理专家级任务。这种分层架构比「一个模型打天下」更符合生产环境的成本和性能权衡。
