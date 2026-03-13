---
title: "LLM 作为计算机——在 Transformer 内部执行程序，推理速度指数级提升"
description: "Percepta AI 提出全新架构：将程序直接编码进 Transformer 权重中执行，无需传统计算硬件，推理速度可达指数级加速。Hacker News 排名第一。"
pubDatetime: 2026-03-13T11:00:00+08:00
tags: [inference, transformer, llm, architecture, research]
featured: true
score: 8.5
sourceUrl: "https://www.percepta.ai/blog/can-llms-be-computers"
sourceType: "hacker-news"
sourceName: "Hacker News"
---

Percepta AI 发布了一项引人注目的研究：他们探索了一个根本性问题——**LLM 能否成为真正的计算机？**

## 核心思路

传统观点认为 LLM 是通过训练学习「程序近似」，而 Percepta 的方法是将程序直接编码到 Transformer 的注意力和 MLP 层中执行。

主要发现：

- **程序内嵌执行**：通过精心构造的权重矩阵，Transformer 可以精确执行确定性算法（如排序、搜索），而非近似模拟
- **指数级推理加速**：对于可以表示为递归程序的任务，这种方法可获得指数级速度提升
- **理论基础**：研究建立在 Transformer 是通用近似器的数学证明上，进一步证明了其可作为图灵完备计算机的可能性

## 为什么重要

这一研究提示了一个颠覆性方向：未来的模型或许不需要大规模参数来「学会」推理，而是直接「运行」结构化程序——这对 AI Agent 的确定性、可靠性和效率有重大意义。

该帖子在 Hacker News 获得超过 120 分，引发广泛讨论。
