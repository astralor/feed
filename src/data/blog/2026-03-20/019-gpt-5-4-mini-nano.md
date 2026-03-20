---
title: "OpenAI 发布 GPT-5.4 Mini 和 Nano：迄今最强小型模型"
description: "OpenAI 推出 GPT-5.4 Mini 和 Nano 两款小型模型，400K 上下文窗口，速度较前代提升超 2 倍，Mini 接近旗舰级性能。"
pubDatetime: 2026-03-20T12:45:00+08:00
collectedAt: 2026-03-20T12:45:00+08:00
category: "模型动态"
tags: [OpenAI, GPT-5.4, 小型模型, API]
featured: true
score: 8.1
scoreReason: "400K 上下文 + 2x 速度提升 + 接近旗舰级基准，Subagent 架构关键组件，定价极具竞争力"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:9 减分:0"
sourceUrl: "https://community.openai.com/t/introducing-gpt-5-4-mini-and-nano-our-most-capable-small-models-yet/1377015"
sourceType: "openai-blog"
sourceName: "OpenAI Developer Forum"
ogImage: ""
---

> **评分 8.1** · 来源：[OpenAI Developer Forum](https://community.openai.com/t/introducing-gpt-5-4-mini-and-nano-our-most-capable-small-models-yet/1377015) · 发布于 2026-03-18
>
> 评分依据：400K 上下文 + 2x 速度提升 + 接近旗舰级基准，Subagent 架构关键组件，定价极具竞争力

## 要点

OpenAI 发布 GPT-5.4 系列两款小型模型——Mini 和 Nano。两款模型均支持文本与图像输入、工具调用、函数调用、网页搜索和文件搜索，上下文窗口达 400K tokens（是 Claude Haiku 的两倍）。

GPT-5.4 Mini 的核心亮点是速度：相比前代 GPT-5 Mini 运行速度提升超过 2 倍，在编码、推理、多模态理解和工具使用等基准测试中接近旗舰 GPT-5.4 的通过率。定价为输入 $0.75/M tokens、输出 $4.50/M tokens。

GPT-5.4 Nano 仅通过 API 提供，进一步降低成本至输入 $0.20/M tokens、输出 $1.25/M tokens，定位为高吞吐量 subagent 执行任务的主力选择。

两款模型的定位逻辑清晰：大型模型负责规划和复杂推理，Mini/Nano 负责 subagent 的实际执行。这种分层架构正在成为 AI Agent 系统的主流设计模式。

## 🤖 AI 点评

400K 上下文 + 低定价的组合让 Mini/Nano 在 subagent 场景中极具吸引力。OpenAI 的定价策略非常精准——Nano 的 $0.20 输入价格几乎是无脑选择，意味着大规模 agent 工作流的边际成本将大幅下降。与 Claude Haiku 的直接竞争中，400K vs 200K 的上下文差异可能成为决定性因素。
