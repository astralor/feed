---
title: "OS-Themis：可扩展的多 Agent 评判框架，GUI Agent RL 训练提升 10.3%"
description: "将 GUI Agent 轨迹分解为可验证里程碑，通过多 Agent 审查机制构建高质量奖励函数"
pubDatetime: 2026-03-22T10:45:00+08:00
collectedAt: 2026-03-22T10:31:00+08:00
category: "学术前沿"
tags: [GUI-Agent, 强化学习, 奖励函数, AndroidWorld]
featured: false
score: 6.7
scoreReason: "多 Agent Critic 框架改进 GUI Agent RL 训练的奖励函数，AndroidWorld 提升 10.3%"
scoreBreakdown: "信息增量:7 内容质量:7 实用价值:6 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.19191v1"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 6.7** · 来源：[arXiv](https://arxiv.org/abs/2603.19191v1) · 发布于 2026-03-22
>
> 评分依据：提出 GUI Agent RL 训练中奖励函数质量问题的系统性解决方案，实验验证充分

## 要点

GUI Agent 的强化学习训练面临一个核心难题：奖励函数的质量直接决定训练效果，但现有方案难以兼顾规模化和准确性。OS-Themis 提出了一种多 Agent Critic 框架来解决这个问题。

核心设计是「轨迹分解 + 审查机制」：先将 Agent 的完整执行轨迹分解为多个可独立验证的里程碑（milestone），隔离关键决策证据；然后通过审查机制严格审计证据链，最终给出裁决。这种分解使得奖励评估更具可解释性，也更容易定位失败原因。

作者同时推出了 OmniGUIRewardBench（OGRBench），一个跨平台的 GUI 结果奖励基准。实验显示，OS-Themis 在 AndroidWorld 上支持在线 RL 训练带来 10.3% 的提升，在自训练循环中用于轨迹验证和过滤则带来 6.9% 的增益。

## 🤖 AI 点评

GUI Agent 当前最大的瓶颈不是模型能力而是训练信号——如何在随机性环境中定义「做对了」。OS-Themis 的里程碑分解思路本质上是在给奖励函数加上可解释的中间检查点，这比端到端给一个总分靠谱得多。10.3% 的提升幅度在 RL 领域相当显著。不过值得关注的是这个方法对推理延迟的开销——多 Agent 审查意味着每个训练步骤都需要额外的 LLM 调用，成本能否被生产环境接受还有待验证。
