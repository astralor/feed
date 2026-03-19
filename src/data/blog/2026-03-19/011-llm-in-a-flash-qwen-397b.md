---
title: "在 48GB MacBook 上跑 397B 模型：LLM in a Flash 实战"
description: "用 Apple 论文技术 + Claude 自动实验，5.5 tokens/s 运行 Qwen3.5-397B-A17B"
pubDatetime: 2026-03-18T20:00:00+08:00
collectedAt: 2026-03-19T08:32:09+08:00
category: "工程实践"
tags: [本地推理, MoE, 量化, MLX, 自动研究]
featured: true
score: 8.65
scoreReason: "技术突破 + 可复现方法 + autoresearch 模式应用，实用价值极高"
scoreBreakdown: "信息增量:9 内容质量:8 实用价值:9 减分:0"
sourceUrl: "https://simonwillison.net/2026/Mar/18/llm-in-a-flash/"
sourceType: "simon-willison"
sourceName: "Simon Willison"
ogImage: ""
---

> **评分 8.65** · 来源：[Simon Willison](https://simonwillison.net/2026/Mar/18/llm-in-a-flash/) · 发布于 2026-03-18
>
> 评分依据：技术突破 + 可复现方法 + autoresearch 模式应用，实用价值极高

## 要点

Dan Woods 成功在 48GB M3 Max MacBook Pro 上以 5.5+ tokens/s 运行 Qwen3.5-397B-A17B（原始 209GB，量化后 120GB）。核心技术来自 Apple 2023 年论文《LLM in a Flash》：将模型参数存储在 SSD，按需加载到 DRAM，通过减少传输量和增大连续读取块来优化性能。

实现方法：将 Apple 论文喂给 Claude Code，用 Andrej Karpathy 的 autoresearch 模式让 Claude 自动跑 90 个实验，生成 MLX Objective-C 和 Metal 代码。最终方案：专家权重量化到 2-bit，embedding 和 routing 矩阵保持原精度（5.5GB 常驻内存），每 token 激活 4 个专家（原本 10 个）。

代码和论文已开源：github.com/danveloper/flash-moe。Claude 声称「2-bit 输出质量与 4-bit 无法区分」，但评估细节较薄。

## 🤖 AI 点评

这是本地推理的重大突破——把「需要 200GB 内存」的模型压缩到消费级硬件可用范围。技术亮点在于利用 MoE 的稀疏激活特性 + SSD 流式加载，而不是简单粗暴地量化所有权重。更有意思的是 autoresearch 模式的应用：把论文扔给 Claude，让它自己设计实验、写代码、调优——这种「AI 辅助 AI 研究」的范式正在成为现实。质量评估是个问号，但 5.5 tokens/s 的速度已经足够实用。
