---
title: "一份足够详细的规格说明就是代码"
description: "从 OpenAI Symphony 的 SPEC.md 出发，论证「spec-driven coding」的两大误区：规格并不比代码简单，写 spec 也不比写代码更「高级」"
pubDatetime: 2026-03-19T20:45:00+08:00
collectedAt: 2026-03-19T08:34:47Z
category: "深度观点"
tags: [编码Agent, 软件工程, 规格说明, AI编程]
featured: false
score: 6.70
scoreReason: "用 OpenAI 官方项目作为反例论证，有具体代码分析而非空谈，HN 308 points 证明社区共鸣"
scoreBreakdown: "信息增量:7 内容质量:7 实用价值:6 减分:0"
sourceUrl: "https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---

> **评分 6.70** · 来源：[Haskell for all](https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code) · 发布于 2026-03-19
>
> 评分依据：以 OpenAI Symphony 为反例的扎实论证，对 spec-driven coding 的两个核心误区有具体代码层面的拆解

## 要点

这篇来自 Haskell for all 的文章直接挑战了当前 agentic coding 社区的主流叙事——「工程师可以退化为 spec 写手，把编码工作交给 Agent」。

作者拆解了 OpenAI 官方的 Symphony 项目（一个号称「从规格说明生成」的 Agent 编排器），展示其 SPEC.md 文件实际上包含了完整的数据库 schema 定义（字段名、类型、约束）、并发控制伪代码、重试退避公式——本质上就是用 Markdown 格式重写的代码。

文章指出两个核心误区：

- **误区一：规格说明比代码更简单**。agentic coding 推广者向「信徒」承诺工程师只需写 spec，但如果 spec 必须精确到字段级别，那写 spec 的成本并不低于写代码——甚至更高，因为你还要额外维护 spec 和代码的一致性。
- **误区二：规格工作比编码工作更「深思熟虑」**。向「怀疑者」承诺 spec 能过滤掉 slop、提升工程质量，但现实是 spec 本身也会产生 slop，只是换了一种形式。

## 🤖 AI 点评

308 points 说明这个观点击中了社区的某个痛点。但文章的论证有一个隐性前提：它在批判的是「用 spec 替代代码」的极端立场，而非 spec 本身的价值。一个更公允的表述应该是：spec 和代码是同一个抽象层次的不同表达，不存在谁比谁更「高级」。

对 AI 编码实践的真实启示是：不要指望「写个 spec 就让 Agent 全搞定」，而是把 spec 当作人机协作的接口——spec 定义意图和约束，Agent 填充实现细节，人类做最终判断。这比文章描述的两极化场景都更接近现实。
