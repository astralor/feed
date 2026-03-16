---
title: "Tree Search Distillation：用 PPO 让语言模型学会「先搜后答」"
description: "研究者提出树搜索蒸馏方法，通过 PPO 将 MCTS 等树搜索过程内化到 LLM 推理中，推理时无需额外搜索即可受益。"
pubDatetime: 2026-03-15T14:00:00+08:00
tags: [research, training, PPO, inference-scaling, reasoning]
featured: false
category: "学术前沿"
score: 7.0
sourceUrl: "https://ayushtambde.com/blog/tree-search-distillation-for-language-models-using-ppo/"
sourceType: "hacker-news"
sourceName: "Hacker News / ayushtambde.com"
---

一篇在 Hacker News 上获得广泛讨论的技术文章，探讨如何将树搜索（Tree Search）能力通过 PPO 蒸馏进语言模型，使其在推理时无需外部搜索系统。

核心思路：MCTS 等树搜索算法能有效探索解空间，但推理时成本高昂。通过 PPO 训练，让模型「内化」搜索过程，把多步探索压缩为单次前向传播中的隐式推理。

**方法亮点：**
- 蒸馏目标：让模型模仿树搜索产生的高质量轨迹
- PPO 作为强化学习框架，奖励正确且高效的推理路径
- 在数学推理、代码生成等任务上有明显提升
- 推理时算力消耗不增加，但推理质量接近搜索水平

这与 OpenAI o1/o3 和 DeepSeek R1 的方向一脉相承，但提供了更轻量的实现路径。
