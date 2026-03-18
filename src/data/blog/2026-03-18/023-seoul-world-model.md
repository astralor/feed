---
title: "Seoul World Model：首个真实城市级世界模拟模型"
description: "KAIST 提出基于首尔的城市级世界模型，通过街景检索实现真实环境生成"
pubDatetime: 2026-03-18T10:05:00+08:00
collectedAt: 2026-03-17T00:00:00+08:00
category: "学术前沿"
tags: ["世界模型", "视频生成", "城市模拟", "KAIST"]
featured: true
score: 8.7
scoreReason: "首个锚定真实城市的世界模型，从虚拟环境到物理世界的突破性进展"
scoreBreakdown: "信息增量:9 内容质量:9 实用价值:8 减分:0"
sourceUrl: "https://huggingface.co/papers/2603.15583"
sourceType: "hacker-news"
sourceName: "HuggingFace Papers"
ogImage: ""
---

> **评分 8.7** · 来源：[HuggingFace Papers](https://huggingface.co/papers/2603.15583) · 发布于 2026-03-17
>
> 首个锚定真实城市的世界模型，从虚拟环境到物理世界的突破性进展

## 要点

KAIST 和 NAVER AI Lab 提出 Seoul World Model (SWM)，这是首个锚定真实城市的世界模拟模型。现有生成式世界模型合成视觉上可信但完全虚构的环境，SWM 则通过检索增强生成，基于附近街景图像条件化自回归视频生成，让用户在真实存在的城市街道中导航。

系统面临三大挑战：(1) 检索参考与动态目标场景的时间错位 → 跨时间配对训练；(2) 车载采集的轨迹多样性和数据稀疏性 → 大规模合成数据集 + 视图插值管道；(3) 长距离生成的误差累积 → Virtual Lookahead Sink（动态检索未来位置的街景作为锚点）。

在首尔、釜山和 Ann Arbor 三个城市的评估中，SWM 在生成空间忠实、时序一致的长距离视频方面超越现有视频世界模型，支持数百米轨迹、多样化相机运动和文本提示场景变化。训练使用 44 万张首尔街景图像、Waymo 驾驶视频和合成城市数据。

## 🤖 AI 点评

这是世界模型从"想象世界"到"真实世界"的关键跨越。Virtual Lookahead Sink 的设计很巧妙——不是固定锚定起点，而是动态检索前方街景作为"虚拟目的地"，解决了城市级长距离生成的漂移问题。跨时间配对让模型学会区分持久结构和瞬态物体，这对真实场景建模至关重要。
