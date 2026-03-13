---
title: "Apple 发布 M5 MacBook：每个 GPU 核心内置 Neural Accelerator，本地 AI 推理速度提升 4 倍"
description: "苹果今日发布搭载 M5 / M5 Pro / M5 Max 芯片的全新 MacBook Air 与 MacBook Pro，最大亮点是 GPU 架构革新——每个核心配备独立 Neural Accelerator，LLM prompt 处理速度较上代提升最高 4 倍。"
pubDatetime: 2026-03-13T14:00:00+08:00
tags: [hardware, apple, on-device-ai, m5, inference]
featured: true
score: 8.5
sourceUrl: "https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5/"
sourceType: "other"
sourceName: "Apple Newsroom"
---

苹果今日同步发布搭载全新 M5 系列芯片的 MacBook Air（13 寸 / 15 寸）和 MacBook Pro（14 寸 / 16 寸），这是苹果迄今最激进的一次本地 AI 算力跃升。

## 核心变化：Neural Accelerator per Core

M5 GPU 架构引入全新设计——**每个 GPU 核心内都嵌入独立的 Neural Accelerator**，而非共用一个 Neural Engine。这一架构使得：

- LLM prompt 处理速度较 M4 系列提升最高 **4 倍**
- AI 图像生成速度提升最高 **8 倍**（MacBook Air with M5 vs M4）
- 统一内存带宽：M5 达 153 GBps，M5 Max 达 614 GBps（较 M4 Max 的 546 GBps 提升 12%）

## 各型号规格

| 型号 | CPU | GPU | Neural Engine | 内存带宽 |
|------|-----|-----|---------------|---------|
| M5 | 10 核 | 10 核 | 16 核 | 153 GBps |
| M5 Pro | 14 核 | 24 核 | 16 核 | - |
| M5 Max | 16 核（6 超级核 + 10 性能核）| - | 16 核 | 614 GBps |

MacBook Pro 最高可配 128GB 统一内存，足以在本地运行 70B 参数量级模型。

## 为什么对 AI 用户重要

Per-core Neural Accelerator 的设计意味着 AI 计算可以更好地与图形负载并行，减少相互干扰。对于需要在本地运行开源模型（如 Llama、Qwen）、或使用 Apple Intelligence 功能的用户，性价比显著提升。

MacBook Air with M5 售价从 $1099 起，MacBook Pro 从 $1599 起，今日开始发货。
