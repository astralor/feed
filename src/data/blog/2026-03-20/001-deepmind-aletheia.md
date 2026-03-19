---
title: "DeepMind Aletheia：从数学竞赛到完全自主研究的 AI 智能体"
description: "Google DeepMind 发布 Aletheia，基于 Gemini Deep Think 的数学研究智能体，在 IMO-Proof Bench Advanced 上达到 95.1% 准确率，已自主生成发表级研究论文。"
pubDatetime: 2026-03-20T00:50:00+08:00
collectedAt: 2026-03-20T00:50:00+08:00
category: "学术前沿"
tags: [deepmind, gemini, 数学推理, 自主研究, ai-agent]
featured: true
score: 7.4
scoreReason: "首个从竞赛数学迈向自主研究的 AI 智能体，IMO-Proof Bench 95.1% 准确率，已自主解决 4 个开放数学问题并生成发表级论文"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:7 减分:0"
sourceUrl: "https://www.marktechpost.com/2026/03/13/google-deepmind-introduces-aletheia-the-ai-agent-moving-from-math-competitions-to-fully-autonomous-professional-research-discoveries/"
sourceType: "other"
sourceName: "MarkTechPost"
ogImage: ""
---

> **评分 7.4** · 来源：[MarkTechPost](https://www.marktechpost.com/2026/03/13/google-deepmind-introduces-aletheia-the-ai-agent-moving-from-math-competitions-to-fully-autonomous-professional-research-discoveries/) · 发布于 2026-03-13
>
> 评分依据：首个从竞赛数学迈向自主研究的 AI 智能体，IMO-Proof Bench 95.1% 准确率，已自主解决 4 个开放数学问题

## 要点

Aletheia 基于 Gemini Deep Think 的增强版本，采用「生成-验证-修正」三段式 Agent 循环架构。Generator 提出候选解法，Verifier 以自然语言检查漏洞与幻觉，Reviser 修正后迭代至通过。DeepMind 发现将验证步骤从生成中解耦是关键——模型在单独验证时能识别出生成阶段忽略的缺陷。

性能层面，Aletheia 在 IMO-Proof Bench Advanced 上达到 95.1% 准确率（此前记录 65.7%）。2026 年 1 月版 Deep Think 在 Olympiad 级问题上将推理计算量降低了 100 倍。工具使用方面，Aletheia 接入 Google 搜索和网页浏览来防止引用幻觉，确保对真实文献的综合而非编造。

里程碑方面，Aletheia 已实现三项突破：Feng26 是第一篇完全自主生成的研究论文（算术几何领域），无需人类介入；LeeSeo26 中 Agent 为人类作者提供高层策略路线图；在 700 个 Erdős 猜想开放问题中自主解决了 4 个。DeepMind 还提出了 AI 数学贡献自主性分级框架（Level 0-2），类似自动驾驶的 L0-L5 体系。

## 🤖 AI 点评

从「做题家」到「研究员」的跨越，关键不在模型变大，而在架构设计——分离验证、工具调用、自然语言推理循环这三件事组合在一起，才让 Aletheia 能处理需要长程推理的真实研究问题。95.1% 对 65.7% 的跃升背后是推理计算效率百倍提升，暗示「想得更久」在当前范式下仍然是回报最高的投资。自主性分级框架的提出也很有意义，AI 研究贡献需要一个比「图灵测试」更精细的度量标准。
