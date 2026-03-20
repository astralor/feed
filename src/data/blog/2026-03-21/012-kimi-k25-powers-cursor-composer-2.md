---
title: "Moonshot AI 确认 Kimi-k2.5 为 Cursor Composer 2 底座模型"
description: "Kimi 官方确认其旗舰模型通过 FireworksAI 平台为 Cursor 最新编程 Agent 提供基础能力"
pubDatetime: 2026-03-21T06:50:00+08:00
collectedAt: 2026-03-21T06:32:00+08:00
category: "模型动态"
tags: [Kimi, Cursor, FireworksAI, 编程Agent, 开源模型]
featured: false
score: 7.0
scoreReason: "确认了 Cursor Composer 2 的底层模型来源，揭示了中国开源模型在顶级编程 Agent 中的实际应用路径"
scoreBreakdown: "信息增量:7 内容质量:7 实用价值:7 减分:0"
sourceUrl: "https://simonwillison.net/2026/Mar/20/cursor-on-kimi/"
sourceType: "simon-willison"
sourceName: "Simon Willison"
ogImage: ""
---

> **评分 7.0** · 来源：[Simon Willison](https://simonwillison.net/2026/Mar/20/cursor-on-kimi/) · 发布于 2026-03-21
>
> 评分依据：确认了 Cursor Composer 2 的底层模型来源，揭示了中国开源模型在顶级编程 Agent 中的实际应用路径

## 要点

Moonshot AI 官方回应近期关于 Cursor Composer 2 底层模型的猜测，确认其旗舰模型 Kimi-k2.5 是 Cursor Composer 2 的基础模型。Cursor 并非直接调用 Kimi 原始模型，而是在此基础上进行了持续的预训练（continued pretraining）和高算力 RL 训练，构建了针对编程场景优化的定制版本。

在基础设施层面，Cursor 通过 FireworksAI 的托管 RL 和推理平台访问 Kimi-k2.5，双方建立了正式的商业合作关系。这一架构选择意味着 Cursor 在获得开源模型灵活性的同时，也依赖第三方平台提供推理服务。

## 🤖 AI 点评

这则消息的价值不在技术细节本身，而在于它展示了一条清晰的中国开源模型出海路径——不直接面向终端用户，而是通过「基础模型 + 垂直领域定制 + 第三方推理平台」的三层架构，嵌入全球顶级产品。Kimi-k2.5 作为 Composer 2 的底座，说明国产模型在代码能力上已达到商用级水准。而选择 FireworksAI 而非自建推理，也反映了一个务实判断：模型能力和推理效率同样重要，专业的事情交给专业的平台。
