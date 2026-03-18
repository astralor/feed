---
title: "AI Planning Framework：用传统规划范式诊断 LLM Web Agent"
description: "arXiv 论文将 Web Agent 架构映射到 BFS/DFS/Best-First 搜索，提出 5 个新评估指标和 794 条人类标注轨迹数据集"
pubDatetime: 2026-03-18T10:45:00+08:00
collectedAt: 2026-03-18T02:32:00+08:00
category: "学术前沿"
tags: ["AI Agent", "Web Agent", "规划", "评估", "arXiv"]
featured: false
score: 6.5
scoreReason: "提出分类框架+新数据集，学术研究贡献，但实用价值偏理论"
scoreBreakdown: "信息增量:7 内容质量:6 实用价值:6 减分:0"
sourceUrl: "https://arxiv.org/abs/2603.12710"
sourceType: "arxiv"
sourceName: "arXiv"
ogImage: ""
---

> **评分 6.5** · 来源：[arXiv](https://arxiv.org/abs/2603.12710) · 发布于 2026-03-13
>
> 评分依据：提出分类框架+新数据集，学术研究贡献，但实用价值偏理论

## 要点

论文将 Web 任务形式化为序列决策过程，提出分类法将现代 Agent 架构映射到传统规划范式：Step-by-Step Agent → 广度优先搜索（BFS），Tree Search Agent → Best-First 树搜索，Full-Plan-in-Advance Agent → 深度优先搜索（DFS）。

这一框架允许原则性诊断系统失败，如上下文漂移和不连贯的任务分解。论文提出 5 个新评估指标，评估轨迹质量而非简单成功率，并提供 794 条来自 WebArena 基准的人类标注轨迹数据集。

实验对比 Step-by-Step 基线与新实现的 Full-Plan-in-Advance Agent：Step-by-Step 与人类黄金轨迹对齐度更高（38% 总体成功率），但 Full-Plan-in-Advance 在技术指标如元素准确率上表现更优（89%）。结果表明，根据具体应用约束选择合适 Agent 架构时，提出的指标是必要的。

## 🤖 AI 点评

这是少见的"把 LLM Agent 拉回计算机科学基础"的尝试。将黑盒 Agent 映射到经典搜索算法，让失败模式变得可诊断——这对工程化部署很重要。但 38% 的成功率和 89% 的元素准确率之间的鸿沟，暴露了一个尴尬事实：技术上"做对了"不等于"完成了任务"。数据集是亮点，但论文整体偏学术。
