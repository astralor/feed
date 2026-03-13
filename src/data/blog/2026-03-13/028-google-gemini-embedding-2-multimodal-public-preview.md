---
title: "Google 发布 Gemini Embedding 2——首个原生多模态 Embedding 模型"
description: "Google 推出 Gemini Embedding 2，首个同时覆盖文本、图像、视频、音频的原生多模态嵌入模型，支持 8K 上下文和 100+ 语言，已上线公开预览。"
pubDatetime: 2026-03-13T09:00:00+08:00
tags: [google, gemini, embedding, multimodal, rag, search]
featured: true
score: 8.0
sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-embedding-2/"
sourceType: "deepmind-blog"
sourceName: "Google Blog"
---

Google 推出 **Gemini Embedding 2**，这是该公司首个原生多模态嵌入模型，已于 3 月 10 日进入公开预览阶段。

## 核心能力

- **跨模态统一**：单一模型覆盖文本、图像、视频、音频五种模态，无需分别调用多个嵌入模型
- **Matryoshka 表示学习（MRL）**：支持动态缩减向量维度，在精度和存储之间灵活平衡
- **8192 Token 上下文**：支持长文档嵌入
- **100+ 语言**：具备跨语言语义检索能力

## 访问方式

- Gemini API（模型名：`gemini-embedding-2-preview`）
- Vertex AI（通过 Google Cloud 访问）

## 为什么重要

此前多模态嵌入领域多由 Nomic、Jina、CLIP 衍生品主导，Google 以单一模型覆盖五种模态并提供 Gemini API 统一入口，**将开发者构建多模态 RAG 系统的门槛大幅降低**。价格具竞争力，有望成为新的行业基线。
