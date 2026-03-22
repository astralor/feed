---
title: "Tinybox：tinygrad 团队推出离线 AI 推理硬件，$12K 起跑 120B 模型"
description: "tinygrad 团队发布 Tinybox 系列硬件，Red v2 现货可跑 120B 参数模型，Green v2 搭载 Blackwell 384GB VRAM"
pubDatetime: 2026-03-22T10:45:00+08:00
collectedAt: 2026-03-22T10:31:00+08:00
category: "算力硬件"
tags: [tinygrad, 本地推理, 硬件, GPU]
featured: true
score: 8.0
scoreReason: "tinygrad 团队推出的离线 AI 硬件，Red v2 现货 $12K 可跑 120B 模型，Green v2 Blackwell 384GB VRAM，性价比极高"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:9 减分:0"
sourceUrl: "https://tinygrad.org/#tinybox"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---

> **评分 8.0** · 来源：[Hacker News](https://tinygrad.org/#tinybox) · 发布于 2026-03-22
>
> 评分依据：tinygrad 团队直接面向开发者出售的离线 AI 推理硬件，从 $12K 到 $10M 三档配置，现货发售

## 要点

tinygrad 团队（George Hotz 创立的深度学习框架团队）正式推出 Tinybox 系列硬件，面向需要本地运行大模型的开发者。三个版本覆盖从个人到数据中心的全场景需求：

- **Red v2**（现货 $12,000）：4× 9070XT，778 TFLOPS FP16，64GB VRAM，适合跑 70B-120B 级模型
- **Green v2**（现货 $65,000）：4× RTX PRO 6000 Blackwell，3086 TFLOPS FP16，384GB VRAM，适合 400B+ 模型
- **Exabox**（2027 年，约 $10M）：720× RDNA5 AT0 XL，约 1 EXAFLOP，25,920GB VRAM，单节点数据中心级

所有版本均可脱离云端独立运行，支持 Ubuntu 24.04，Red v2 可放在桌面或机架安装。tinygrad 强调其在 MLPerf Training 4.0 中的表现——性能与 10 倍价格的设备相当。

## 🤖 AI 点评

本地推理硬件正在从极客玩具走向实用工具。$12K 跑 120B 模型意味着个人开发者可以在完全离线、数据不出本机的前提下使用大模型，这对隐私敏感场景（医疗、金融）和边缘计算有直接意义。更值得注意的是 tinygrad 选择了「自建硬件+自研框架」的垂直整合路线，类似 Apple Silicon 模式——当软件栈与硬件深度耦合时，性能天花板才能被真正突破。Exabox 的 1 EFLOP 规格则暗示他们瞄准的是「人人都能拥有超算」的长期愿景。
