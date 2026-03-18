---
title: "Fish Audio S2：开源多语言 TTS 系统，支持自然语言指令控制"
description: "开源 TTS 系统，支持多说话人、多轮对话生成和自然语言指令控制"
pubDatetime: 2026-03-18T10:05:00+08:00
collectedAt: 2026-03-17T00:00:00+08:00
category: "工程实践"
tags: ["TTS", "语音合成", "开源", "多语言"]
featured: false
score: 7.7
scoreReason: "完整的开源 TTS 技术报告，有生产级性能和详细 benchmark，但属于 TTS 领域常规进展"
scoreBreakdown: "信息增量:7 内容质量:8 实用价值:8 减分:0"
sourceUrl: "https://huggingface.co/papers/2603.08823"
sourceType: "hacker-news"
sourceName: "HuggingFace Papers"
ogImage: ""
---

> **评分 7.7** · 来源：[HuggingFace Papers](https://huggingface.co/papers/2603.08823) · 发布于 2026-03-17
>
> 完整的开源 TTS 技术报告，有生产级性能和详细 benchmark，但属于 TTS 领域常规进展

## 要点

Fish Audio 发布 S2 版本，这是一个开源的文本转语音系统，支持多说话人、多轮对话生成，最重要的是通过自然语言描述实现指令跟随控制。系统采用 Dual-AR 架构，将时序语义建模与深度声学建模解耦，在 H200 GPU 上实现 RTF 0.195 和低于 100ms 的首音频延迟。

训练流程包括多阶段数据管道：视频字幕、语音字幕、音质评估和奖励建模。关键创新是双用途数据管道——语音质量模型和富转录 ASR 模型既作为预训练过滤器，又作为 RL 奖励信号，消除了阶段间的分布偏移。RL 后训练采用多维度奖励（语义准确性、声学质量、说话人相似度）联合优化。

在 Seed-TTS、MiniMax 多语言测试集、CV3-Eval 和 Long-TTS-Eval 等基准上，Fish Audio S2 展现出领先的客观性能。在 Audio Turing Test 上达到 0.483 后验均值，指令重写后提升至 0.515。团队开源了模型权重、微调代码和基于 SGLang 的推理引擎。

## 🤖 AI 点评

TTS 系统的工程完整度很高，从架构到数据管道到推理优化都有详细阐述。双用途数据管道的设计巧妙地解决了预训练和 RL 对齐的分布偏移问题。不过 TTS 领域已有多个开源和闭源方案，这更像是一个高质量的开源实现而非技术突破。
