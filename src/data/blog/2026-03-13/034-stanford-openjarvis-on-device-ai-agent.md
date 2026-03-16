---
title: "斯坦福 OpenJarvis：本地优先的个人 AI Agent 开源框架，88.7% 查询可在设备端完成"
description: "斯坦福 Scaling Intelligence Lab 发布 OpenJarvis，提供共享基元、效能感知评估和本地学习循环，让个人 AI 完全运行在个人设备上。"
pubDatetime: 2026-03-13T21:00:00+08:00
tags: [open-source, on-device-ai, agent, stanford, local-llm, privacy]
featured: true
category: "工程实践"
score: 8.5
sourceUrl: "https://scalingintelligence.stanford.edu/blogs/openjarvis/"
sourceType: "web-search"
sourceName: "Stanford Scaling Intelligence Lab"
---

斯坦福大学 Scaling Intelligence Lab 开源了 **OpenJarvis**，一个专为本地设备端 AI Agent 构建的框架，目标是让个人 AI 完全运行在用户自己的设备上，无需将隐私数据上传至云端。

研究团队此前的 Intelligence Per Watt 研究表明，本地语言模型可以在交互延迟下满足 **88.7%** 的单轮对话和推理查询，且从 2023 到 2025 年间，智能效率提升了 5.3 倍。

## 核心特性

- **共享基元**：提供统一的模型服务、编排、内存、工具接口和适配流水线抽象
- **效能感知评估**：ENERGY leaderboard，评估模型在本地设备上的能耗与性能
- **本地学习循环**：利用本地 trace 数据持续改善模型，不依赖云端训练
- **隐私优先**：个人上下文数据不经过第三方服务器
- **GitHub**：github.com/open-jarvis/OpenJarvis

## 行业背景

OpenJarvis 将自己定位为 AI 从大型数据中心走向个人设备的"PC 时代"转折点。类比 1970-80 年代从大型主机到个人计算机的转变，它认为本地 AI 的拐点已经到来。
