---
title: "Newton：Linux 基金会支持的 GPU 加速物理仿真引擎"
description: "Disney、DeepMind 和 NVIDIA 联合发起的开源机器人仿真引擎，基于 NVIDIA Warp 构建"
pubDatetime: 2026-03-19T08:32:00+08:00
collectedAt: 2026-03-19T08:32:09+08:00
category: "工程实践"
tags: [机器人, GPU加速, 物理仿真, 开源]
featured: false
score: 7.35
scoreReason: "技术文档完整，示例丰富，对机器人研究者有实用价值"
scoreBreakdown: "信息增量:7 内容质量:8 实用价值:7 减分:0"
sourceUrl: "https://github.com/newton-physics/newton"
sourceType: "github-trending"
sourceName: "GitHub Trending"
ogImage: ""
---

> **评分 7.35** · 来源：[GitHub](https://github.com/newton-physics/newton) · 发布于 2026-03-19
>
> 评分依据：技术文档完整，示例丰富，对机器人研究者有实用价值

## 要点

Newton 是一个基于 NVIDIA Warp 构建的 GPU 加速物理仿真引擎，专为机器人研究者和仿真研究人员设计。项目由 Disney Research、Google DeepMind 和 NVIDIA 联合发起，现已成为 Linux 基金会项目。

引擎集成了 MuJoCo Warp 作为主要后端，强调 GPU 计算、OpenUSD 支持、可微分性和用户自定义扩展性。支持刚体、软体、布料、绳索、MPM 粒子等多种物理模拟，提供 80+ 示例代码覆盖机器人控制、逆运动学、可微仿真等场景。

系统要求：Python 3.10+，NVIDIA Maxwell 或更新 GPU（驱动 545+），macOS 可在 CPU 模式运行。安装简单（pip install "newton[examples]"），无需本地 CUDA Toolkit。

## 🤖 AI 点评

这是机器人仿真领域的重量级开源项目，三家顶级机构背书 + Linux 基金会托管保证了长期维护。GPU 原生设计和可微分特性对强化学习训练很友好，OpenUSD 支持则方便与现代渲染管线集成。文档和示例质量高，降低了上手门槛。
