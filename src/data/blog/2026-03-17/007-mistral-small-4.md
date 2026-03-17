---
title: "Mistral Small 4 发布：119B MoE 统一推理、多模态和编程能力，Apache 2 开源"
description: "Mistral 发布 Small 4 模型，119B 参数（6B 激活）MoE 架构，首次统一 Magistral 推理、Pixtral 多模态和 Devstral 编程能力，Apache 2 许可"
pubDatetime: 2026-03-16T12:00:00+08:00
collectedAt: 2026-03-17T16:38:00+08:00
category: "模型动态"
tags: ["Mistral", "MoE", "开源模型", "推理", "多模态", "编程"]
featured: true
score: 9.0
scoreReason: "119B MoE 统一三大能力线，Apache 2 开源许可，对开源 AI 生态影响重大，支持 reasoning effort 切换"
sourceUrl: "https://simonwillison.net/2026/Mar/16/mistral-small-4/"
sourceType: "web-search"
sourceName: "Simon Willison"
ogImage: ""
---

> **评分 9.0** · 来源：[Simon Willison](https://simonwillison.net/2026/Mar/16/mistral-small-4/) · 发布于 2026-03-16
>
> 评分依据：119B MoE 统一三大能力线，Apache 2 开源许可，对开源 AI 生态影响重大，支持 reasoning effort 切换

## 要点

Mistral 发布 **Mistral Small 4**，尽管名字里有"Small"，实际上是一个重要的旗舰级发布：

**模型规格：**
- **119B 参数** MoE（Mixture-of-Experts）架构，**6B 激活参数**
- **Apache 2 许可** — 完全开源商用
- 模型体积 **242GB**，已在 HuggingFace 发布

**核心创新 — 三合一统一模型：**
- **Magistral** 的推理能力
- **Pixtral** 的多模态能力
- **Devstral** 的 Agentic 编程能力
- 这是 Mistral 首个将三条产品线统一到一个模型中的版本

**Reasoning Effort 支持：**
- `reasoning_effort="none"` — 快速响应模式
- `reasoning_effort="high"` — 深度推理模式（与 Magistral 同等详细程度）
- 可以根据任务复杂度动态切换

**同步发布 — Leanstral：**
- 专门为 **Lean 4** 形式化验证语言调优的模型
- 开放权重
- Mistral 开始针对特定编程语言做定制模型

## 🤖 AI 点评

这是 Mistral 对"一个模型做所有事"路线的重要验证。之前 Mistral 把推理、多模态、编程拆成三个独立品牌，现在合三为一，说明他们认为 **统一模型** 在用户体验和部署简易性上更有优势。

119B/6B 的 MoE 配比很关键 — 只有 5% 的参数在推理时激活，这意味着在合适的硬件上可以本地部署。Apache 2 许可让任何人都能直接用于商业场景。

reasoning_effort 切换是近期模型设计的重要趋势（OpenAI o 系列也有类似机制）。Mistral 在开源模型上首次支持这个特性，让开发者可以在速度和精度之间灵活权衡。对于 Agent 场景尤其有用 — 简单工具调用用 none，复杂规划用 high。
