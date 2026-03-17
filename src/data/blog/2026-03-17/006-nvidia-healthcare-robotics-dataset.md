---
title: "首个医疗机器人开放数据集 Open-H-Embodiment 发布，附 GR00T-H 手术 VLA 模型"
description: "NVIDIA 联合 35 家机构发布 Open-H-Embodiment 数据集（778 小时手术机器人数据），同步开源 GR00T-H 手术 VLA 模型和 Cosmos-H 手术模拟器"
pubDatetime: 2026-03-16T12:00:00+08:00
collectedAt: 2026-03-17T16:29:00+08:00
category: "学术前沿"
tags: ["NVIDIA", "医疗AI", "机器人", "数据集", "GR00T", "物理AI", "开源"]
featured: true
score: 8.5
scoreReason: "填补医疗机器人领域关键空白，778 小时开放数据集+两个开源基础模型，35 家机构协作，对具身智能研究有重大推动"
sourceUrl: "https://huggingface.co/blog/nvidia/physical-ai-for-healthcare-robotics"
sourceType: "other"
sourceName: "HuggingFace Blog (NVIDIA)"
ogImage: ""
---

> **评分 8.5** · 来源：[HuggingFace Blog](https://huggingface.co/blog/nvidia/physical-ai-for-healthcare-robotics) · 发布于 2026-03-16
>
> 评分依据：填补医疗机器人领域关键空白，778 小时开放数据集+两个开源基础模型，35 家机构协作，对具身智能研究有重大推动

## 要点

NVIDIA 联合 35 家机构发布 **Open-H-Embodiment**，这是首个面向医疗机器人的大规模开放数据集，同步开源两个基础模型：

**Open-H-Embodiment 数据集：**
- **778 小时** CC-BY-4.0 医疗机器人训练数据
- 覆盖手术机器人、超声和结肠镜自主化场景
- 包含仿真、台面训练（如缝合）和真实临床操作
- 使用 9 种机器人平台（CMR Surgical、Rob Surgical、Tuodao、dVRK、Franka、Kuka 等）
- 由 Johns Hopkins、TUM、Stanford、UC Berkeley 等顶级机构贡献

**GR00T-H — 手术机器人 VLA 模型：**
- 基于 NVIDIA Isaac GR00T N 系列的视觉-语言-动作模型
- 在 ~600 小时 Open-H-Embodiment 数据上训练
- **首个手术机器人策略模型**，已演示完整的端到端缝合
- 关键设计：
  - 独立的 Embodiment 投影器（统一不同机器人运动学）
  - 100% 状态丢弃（State Dropout）— 推理时不依赖本体感知输入
  - 相对末端执行器动作空间
  - VLM 骨干：Cosmos Reason 2 2B

**Cosmos-H-Surgical-Simulator — 手术世界模型：**
- 基于 NVIDIA Cosmos Predict 2.5 2B 微调
- 从运动学动作直接生成物理合理的手术视频
- **效率提升**：600 次仿真回滚仅需 40 分钟（vs 真实台面操作需 2 天）
- 隐式学习组织变形和器械交互
- 训练规模：64x A100 GPU，约 10,000 GPU 小时
- 统一 44 维动作空间

**开源资源：**
- 数据集：[HuggingFace](https://huggingface.co/datasets/nvidia/PhysicalAI-Robotics-Open-H-Embodiment) / [GitHub](https://github.com/open-h/data-collection)
- GR00T-H 模型：[HuggingFace](https://huggingface.co/nvidia/GR00T-H) / [GitHub](https://github.com/NVIDIA-Medtech/GR00T-H)
- Cosmos-H 模型：[HuggingFace](https://huggingface.co/nvidia/Cosmos-H-Surgical-Simulator) / [GitHub](https://github.com/NVIDIA-Medtech/Cosmos-H-Surgical-Simulator)

## 🤖 AI 点评

医疗 AI 的"感知→行动"转型终于有了数据基础。之前医疗 AI 主要做图像分类和病理分割，而 Open-H-Embodiment 首次提供了包含 **力反馈、运动学同步数据和闭环控制** 的手术机器人数据。这不是增量改进，而是填补了一个根本性的空白。

GR00T-H 的设计特别聪明 — **State Dropout 100%** 意味着推理时完全不依赖本体感知输入，只靠视觉和语言。这解决了手术机器人最大的工程问题：每台机器人的运动学都不同，传感器配置也不同。去掉状态依赖后，模型的跨平台迁移变得可行。

Cosmos-H 的 **40 分钟 vs 2 天** 对比非常直观 — 世界模型作为物理仿真器的替代品，在软组织这种传统仿真器无法准确建模的场景中有独特优势。35 家机构的协作规模也说明社区对这个方向的共识。
