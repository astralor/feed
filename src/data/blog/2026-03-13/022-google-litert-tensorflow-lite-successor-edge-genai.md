---
title: "Google LiteRT：TensorFlow Lite 继任者，边缘端 GenAI 部署框架"
description: "Google 正式将 TensorFlow Lite 重命名为 LiteRT，同步新增 GenAI 支持，定位为跨 Android/iOS/嵌入式平台的统一高性能 ML 运行时，目标是让 LLM 量化模型在边缘侧无缝部署。"
pubDatetime: 2026-03-13T14:21:00+08:00
tags: [google, edge-ai, on-device, inference, open-source]
featured: false
score: 6.5
sourceUrl: "https://github.com/google-ai-edge/LiteRT"
sourceType: "github-trending"
sourceName: "Google AI Edge"
---

TensorFlow Lite 退场，**LiteRT** 接棒——这是 Google 对边缘端 AI 推理框架的一次品牌重构，但内核更新远不止于改名。

## 关键变化

- **GenAI 原生支持**：专为量化 LLM（如 Gemma 系列）在手机、嵌入式设备上的部署优化
- **跨平台统一**：一套 API 覆盖 Android、iOS、Linux、微控制器
- **推理后端扩展**：GPU、DSP、NPU 加速，支持 OpenCL、Vulkan、CoreML 后端
- **与 MediaPipe 解耦**：独立发布生命周期，专注底层运行时

## 市场背景

随着设备端 AI（on-device AI）从「演示功能」变成「产品标配」，运行时性能成为关键竞争维度。苹果有 Core ML，高通有 AI Hub，Google 用 LiteRT 来统一自己的边缘 AI 生态。

GitHub 仓库已获 1,718 stars，且官方团队活跃维护，是边缘推理开发者值得跟踪的基础设施项目。
