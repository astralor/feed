---
title: "AI Can Learn Scientific Taste：用社区反馈训练科学判断力"
description: "复旦提出 RLCF 范式，让 AI 学会判断和提出高影响力研究想法"
pubDatetime: 2026-03-18T10:05:00+08:00
collectedAt: 2026-03-17T00:00:00+08:00
category: "学术前沿"
tags: ["AI Scientist", "强化学习", "科研评估", "复旦大学"]
featured: true
score: 8.7
scoreReason: "首次系统化训练 AI 的科学品味，完整方法论和大规模实验，对 AI 科学家发展具有里程碑意义"
scoreBreakdown: "信息增量:9 内容质量:9 实用价值:8 减分:0"
sourceUrl: "https://huggingface.co/papers/2603.14473"
sourceType: "hacker-news"
sourceName: "HuggingFace Papers"
ogImage: ""
---

> **评分 8.7** · 来源：[HuggingFace Papers](https://huggingface.co/papers/2603.14473) · 发布于 2026-03-16
>
> 首次系统化训练 AI 的科学品味，完整方法论和大规模实验，对 AI 科学家发展具有里程碑意义

## 要点

复旦大学团队提出 Reinforcement Learning from Community Feedback (RLCF)，将科学品味学习形式化为偏好建模和对齐问题。他们构建了 SciJudgeBench（70万对论文摘要配对，按领域和时间匹配），用引用数作为社区反馈信号训练两个模型：Scientific Judge 判断研究想法的潜在影响力，Scientific Thinker 生成高影响力研究想法。

Scientific Judge 在 SciJudgeBench 上显著超越 GPT-5.2 和 Gemini 3 Pro，并泛化到未来年份、未见领域和同行评审偏好。使用 Scientific Judge 作为奖励模型，Scientific Thinker 通过强化学习训练后，提出的研究想法比基线模型获得更高的潜在影响力评分。

实验显示科学品味随数据量和模型规模提升，跨时间、跨领域、跨评估标准泛化。这标志着 AI 可以学习科学品味，是迈向人类水平 AI 科学家的关键一步。

## 🤖 AI 点评

这项工作填补了 AI 科学家能力拼图中的关键一块。现有研究多聚焦执行能力（文献检索、实验自动化），而判断力和前瞻性一直是空白。用引用数作为社区反馈的设计巧妙——既可大规模获取，又天然反映长期价值。RLCF 范式可能适用于其他需要社区共识的领域。
