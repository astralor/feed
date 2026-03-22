---
title: 「Karpathy Loop」：700 次实验、两天两夜，AI 自主研究已触手可及
description: Karpathy 用 AI Agent 自主运行 700 次模型训练实验，发现 20 项优化，训练速度提升 11%。Lütke 独立验证获 19% 增益。「所有前沿实验室都会这么做——这是终极 Boss 战。」
pubDatetime: 2026-03-22T22:45:00+08:00
collectedAt: 2026-03-22T22:45:00+08:00
category: "深度观点"
tags: [Karpathy, AI研究, AutoML, Agent, 自主研究]
featured: true
score: 7.7
scoreReason: "Karpathy 用 AI Agent 自主完成 700 次训练实验并获实际性能提升，Lütke 独立验证复现成功，核心概念「Karpathy Loop」可直接复用于各类优化场景，文章包含多方视角和深度讨论"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:7 减分:0"
sourceUrl: "https://fortune.com/2026/03/17/andrej-karpathy-loop-autonomous-ai-agents-future/"
sourceType: "other"
sourceName: "Fortune"
ogImage: ""
---
> **评分 7.7** · 来源：[Fortune](https://fortune.com/2026/03/17/andrej-karpathy-loop-autonomous-ai-agents-future/) · 发布于 2026-03-22
>
> 评分依据：Karpathy 用 AI Agent 自主完成 700 次训练实验并获实际性能提升，Lütke 独立验证复现成功，核心概念「Karpathy Loop」可直接复用于各类优化场景，文章包含多方视角和深度讨论

## 要点

Karpathy 构建了一个名为 autoresearch 的系统，让 AI 编码 Agent 连续运行两天，自主执行了 700 次小型语言模型的训练实验。Agent 从每次实验中学习，逐步发现 20 项有效优化，将训练速度提升 11%。Shopify CEO Lütke 独立复现该实验，在内部数据上跑 37 次实验即获 19% 性能增益。

Karpathy 将这一模式称为「终极 Boss 战」，认为所有前沿实验室都将采用类似方法。当前版本是单 Agent 沿单一路径优化 630 行 Python 代码，但下一步是「异步大规模多 Agent 协作」——不是模拟一个博士生，而是模拟一整个研究社区。

批评者指出这与 AutoML（谷歌、微软已使用多年）相似，Karpathy 回应：传统 AutoML 依赖随机变异或进化算法，而 autoresearch 中的 LLM 能阅读论文、生成假设、从实验中学习并利用互联网，「完全不在一个量级」。

## 🤖 AI 点评

「Karpathy Loop」的真正价值不在 11% 的训练速度提升，而在于它验证了一个可复用的范式：一个 Agent + 一个可修改的目标 + 一个可量化的指标 + 一个时间预算 = 自主优化循环。这个 pattern 天然适用于模型训练、prompt 工程、系统调优等几乎所有参数化问题。

从安全角度看，Karpathy 自己也承认这不是真正的递归自我改进——Agent 优化的是另一个更小的模型，而非自身。但「模拟一个研究社区而非一个博士生」的愿景一旦落地，从 Scaling 到 AutoResearch 的范式转移可能比预想来得更快。
