---
title: "独家探访亚马逊 Trainium 芯片实验室：140 万颗芯片已部署，Claude 运行在百万颗 Trainium2 上"
description: "TechCrunch 获邀独家参观 AWS 奥斯汀芯片实验室，揭开 Trainium 如何赢得 Anthropic、OpenAI 和苹果青睐的技术内幕。"
pubDatetime: 2026-03-22T20:45:00+08:00
collectedAt: 2026-03-22T20:45:00+08:00
category: "算力硬件"
tags: [aws, trainium, chips, anthropic, openai, apple]
featured: true
score: 7.7
scoreReason: "独家实地探访带来大量一手数据和细节，从芯片架构到产业链竞争格局都有实质信息"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:7 减分:0"
sourceUrl: "https://techcrunch.com/2026/03/22/an-exclusive-tour-of-amazons-trainium-lab-the-chip-thats-won-over-anthropic-openai-even-apple/"
sourceType: "techcrunch"
sourceName: "TechCrunch"
ogImage: ""
---

> **评分 7.7** · 来源：[TechCrunch](https://techcrunch.com/2026/03/22/an-exclusive-tour-of-amazons-trainium-lab-the-chip-thats-won-over-anthropic-openai-even-apple/) · 发布于 2026-03-22
>
> 评分依据：独家实地探访带来大量一手数据和细节，从芯片架构到产业链竞争格局都有实质信息

## 要点

TechCrunch 记者获邀参观 AWS 位于奥斯汀的定制芯片实验室（原 Annapurna Labs，2015 年被亚马逊以 3.5 亿美元收购），这是公开报道中对该实验室最深入的披露。

关键数据：目前三代 Trainium 芯片总计部署 140 万颗，其中 Claude 运行在超过 100 万颗 Trainium2 上。Anthropic 使用的 Project Rainier 集群于 2025 年底上线，配备 50 万颗芯片，是全球最大 AI 计算集群之一。OpenAI 交易中，AWS 承诺提供 2GW 的 Trainium 算力。

Trainium3（2025 年 12 月发布）采用台积电 3nm 工艺，搭配自研 Neuron 交换机实现全网状互联，AWS 声称同性能下成本比传统云服务器低 50%。框架迁移方面已支持 PyTorch，声称只需修改一行代码即可在 Trainium 上运行。本月还宣布了与 Cerebras Systems 的合作，将 Cerebras 推理芯片集成到 Trainium 服务器上。

## 🤖 AI 点评

这篇文章最有价值的信息不是「Trainium 很强」，而是具体数字：140 万颗部署量、50 万颗集群规模、2GW 承诺——这些让「AWS 挑战 NVIDIA 垄断」的叙事有了量化基础。工程师在 bring-up 时用角磨机手工打磨散热器尺寸的故事也很生动，说明即使是 3nm 级别的芯片工程，最后关头仍然是手工活。不过文章也暴露了一个微妙信号：OpenAI 交易可能面临微软的法律挑战，AWS 团队与 OpenAI 的实际协作尚未深入展开。
