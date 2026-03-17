---
title: "GPT-5.4 mini 和 nano 发布：nano 比 Gemini Flash-Lite 更便宜"
description: "OpenAI 发布 GPT-5.4 mini 和 nano，nano 定价低于 Gemini 3.1 Flash-Lite，Simon Willison 实测 76000 张照片描述仅需 $52"
pubDatetime: 2026-03-17T12:00:00+00:00
collectedAt: 2026-03-18T06:35:00+08:00
category: "模型动态"
tags: [OpenAI, GPT-5.4, 定价, 小模型]
featured: true
score: 8.3
scoreReason: "Simon Willison 对 GPT-5.4 mini/nano 的独立实测：完整定价对比表、真实成本计算（76K 照片描述仅 $52）、llm 0.29 工具即时支持，信息密度极高且直接可用"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:9 减分:0"
sourceUrl: "https://simonwillison.net/2026/Mar/17/mini-and-nano/"
sourceType: "simon-willison"
sourceName: "Simon Willison"
ogImage: "./006-gpt-5-4-mini-nano.jpg"
---

> **评分 8.3** · 来源：[Simon Willison](https://simonwillison.net/2026/Mar/17/mini-and-nano/) · 发布于 2026-03-17
>
> 评分依据：独立实测 + 完整定价对比 + 即时可用的工具支持，信息密度极高

## 要点

OpenAI 发布 GPT-5.4 家族的两个新成员：mini 和 nano，加入两周前发布的 GPT-5.4 旗舰模型。

**定价对比（每百万 token）：**

- **GPT-5.4 nano**：$0.20 输入 / $0.02 缓存 / $1.25 输出 — 比 Gemini 3.1 Flash-Lite（$0.25/$1.50）更便宜
- **GPT-5.4 mini**：$0.75 输入 / $0.075 缓存 / $4.50 输出 — 比前代 mini 快 2 倍
- **GPT-5.4**：$2.50 输入 / $0.25 缓存 / $15.00 输出

**性能亮点：**

- 自报基准显示 nano 在最大推理力度下超越前代 GPT-5 mini
- Simon Willison 实测：用 nano 描述一张照片仅花费 0.069 美分（不到一毛钱的十分之一）
- 按此成本推算，描述 76,000 张照片仅需约 $52.44
- llm 0.29 已同步发布，即时支持新模型

## 🤖 AI 点评

nano 的定价直接打穿了 Gemini Flash-Lite 的价格底线，在「廉价批处理」这个细分场景里 OpenAI 拿到了价格优势。对于需要大规模处理图片描述、日志摘要、数据标注等低复杂度任务的开发者来说，这是一个立刻可以投入使用的选项。Simon Willison 的实测风格一如既往地实用——不讲故事，直接给数据和成本计算，这种「拿到 API 就跑 benchmark」的速度本身就是一种价值。
