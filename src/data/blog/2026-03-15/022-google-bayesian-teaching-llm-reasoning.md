---
title: "Google 研究提出贝叶斯教学法，让 LLM 学会概率推理更新"
description: "Google 研究人员提出一种新训练方法，通过让大模型模拟最优贝叶斯系统的预测，使其具备随新证据动态更新信念的能力，解决了 LLM 推理僵化的核心问题。"
pubDatetime: 2026-03-15T16:00:00+08:00
tags: [google, research, training, reasoning, bayesian]
featured: true
score: 8.0
sourceUrl: "https://www.infoq.com/news/2026/03/google-bayesian-llm/"
sourceType: "other"
sourceName: "InfoQ"
---

Google Research 发布了一种名为「贝叶斯教学（Bayesian Teaching）」的新训练方法，旨在让大语言模型具备贝叶斯推理能力——即在获得新信息时，能够动态更新内部「信念」，而非固化在训练分布上。

**核心发现：**
- 标准 LLM（包括 Llama-3-70B、Qwen-2.5-32B）在多轮交互后几乎没有信念更新，准确率快速平台化
- 「贝叶斯助手」（符号化 Bayes 规则模型）则随每一个数据点持续提升准确率
- 贝叶斯教学法通过让 LLM 从最优贝叶斯系统的预测中学习，使其能近似贝叶斯推理

**意义：**
现有 LLM 的一个核心局限在于无法真正「从对话中学习」——每轮回复只是条件生成，并非推理更新。贝叶斯教学方向若能在生产模型上验证，将为持续交互型 AI Agent 打开全新可能。

这项工作来自 Google Research，时间节点（3 月初）与 Google DeepMind Gemini 3.1 系列密集发布同期，或许是更大战略部署的一部分。
