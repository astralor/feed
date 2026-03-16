---
title: "AutoResearch 实战：一夜 151 次实验的自动化研究循环"
description: "Karpathy AutoResearch 在 Blackwell GB10 上的实践，展示了 AI Agent 如何通过自主循环优化发现硬件最优配置"
pubDatetime: 2026-03-16T04:00:00+08:00
tags: [AutoResearch, AI-Agent, 自动化研究, GPU优化, 强化学习]
featured: true
category: "工程实践"
score: 8.2
sourceUrl: "https://rundatarun.io/p/the-overnight-loop"
sourceType: "web-search"
sourceName: "Run Data Run"
---

作者在 DGX Spark (Blackwell GB10 GPU) 上运行 Karpathy 的 AutoResearch，一夜之间完成 151 次实验，最终将验证指标提升 22.5%。

## 核心发现

Agent 自主发现了硬件约束下的最优配置：在 128GB 显存中只使用 6.1GB，因为 GB10 的 213 TFLOPS 算力（相比 H100 的 990）决定了「更小模型 + 更多训练步数」才是最优解。三个独立团队在 GB10 上运行 AutoResearch 都得出了相同结论。

## 通用模式

这个「尝试-测量-学习-重复」的循环不仅适用于 GPU 训练，已被应用到：
- GPU kernel 优化 (AutoKernel)
- 前端性能优化 (pi-autoresearch)
- 营销落地页测试
- 算法发现 (DeepMind AlphaEvolve)
- 科学实验自动化 (Self-driving labs)

## 关键洞察

硬件决定最优架构。你无法复制别人的 GPU 配置并期待相同结果。每个平台都有自己的最优点，唯一找到它的方法就是运行循环。

完整代码和 151 次实验日志已开源在 GitHub。
