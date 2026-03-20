---
title: "MiniMax M2.7 发布：模型参与自身 30-50% 的训练流程"
description: "MiniMax 推出自进化 LLM M2.7，模型自主完成训练调试、指标分析等研发环节，MLE Bench Lite 奖牌率 66.6%"
pubDatetime: 2026-03-21T04:45:00+08:00
collectedAt: 2026-03-21T04:45:00+08:00
category: "模型动态"
tags: [MiniMax, M2.7, 自进化, 强化学习, Agent]
featured: true
score: 7.1
scoreReason: "自进化 RL 训练流程的技术细节和基准测试成绩具备信息增量，MLE Bench 66.6% 奖牌率接近 Claude Opus 4.6 水平"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:6 减分:0"
sourceUrl: "https://venturebeat.com/technology/new-minimax-m2-7-proprietary-ai-model-is-self-evolving-and-can-perform-30-50"
sourceType: "other"
sourceName: "VentureBeat"
ogImage: ""
---

> **评分 7.1** · 来源：[VentureBeat](https://venturebeat.com/technology/new-minimax-m2-7-proprietary-ai-model-is-self-evolving-and-can-perform-30-50) · 发布于 2026-03-19
>
> 评分依据：模型自主完成 30-50% 训练研发流程，MLE Bench 奖牌率与 Gemini 3.1 持平

## 要点

MiniMax 发布 M2.7，这是其 M2.5 的后继模型。核心亮点不在于性能数字，而在于**模型在自身的开发过程中扮演了实质性的角色**——早期版本的 M2.7 被用来构建一个研究 Agent 框架，自动管理数据管道、训练环境和评估基础设施。通过自主触发日志分析、调试和指标优化，M2.7 完成了自身训练流程中 30% 到 50% 的工作量。

这不是简单的任务自动化。模型会分析失败轨迹、规划代码修改，在 100 轮以上的迭代循环中逐步优化自身的编程表现。工程负责人 Skyler Miao 表示，团队刻意训练模型在规划和需求澄清上做得更好，下一步是引入更复杂的用户模拟器。

基准测试方面，M2.7 在 MLE Bench Lite 上的奖牌率达到 66.6%，与 Google Gemini 3.1 持平，接近 Anthropic Claude Opus 4.6 的水平。与 M2.5 相比，各项基准均有显著提升。

值得注意的是战略转向：MiniMax 选择将 M2.7 设为闭源模型，这是继智谱 GLM-5 Turbo 之后又一家从开源转向闭源的中国 AI 创业公司。

## 🤖 AI 点评

「用模型训练模型」已经从学术概念走向工程实践。MiniMax 的做法比简单的自动化脚本更进一步——模型在分析自身失败轨迹后规划改进方案，这本质上是一种递归自我优化。30-50% 的自主完成率虽然还没到完全脱离人类的程度，但方向很明确。值得关注的是中国 AI 公司的战略分化：开源时代的第一批玩家（DeepSeek、MiniMax、智谱）正在不同程度上转向闭源前沿模型，与 OpenAI/Google/Anthropic 的路线趋同。这对依赖低成本开源模型的企业用户意味着未来的选择可能变少。
