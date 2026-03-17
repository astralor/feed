---
title: "Leanstral：Mistral 发布首个开源 Lean 4 形式化证明 Agent"
description: "Mistral 推出 Leanstral，专为 Lean 4 形式化证明设计的代码 Agent，6B 活跃参数，Apache 2.0 开源，在 FLTEval 基准上超越 Claude Sonnet"
pubDatetime: 2026-03-16T14:00:00+08:00
collectedAt: 2026-03-17T08:30:00+08:00
category: "工程实践"
tags: ["Mistral", "形式化证明", "Lean", "代码生成", "开源"]
featured: true
score: 8.5
scoreReason: "首个开源 Lean 4 代码 Agent，填补形式化证明领域空白，技术深度高且完全开源"
sourceUrl: "https://mistral.ai/news/leanstral"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: "./001-leanstral.jpg"
---

> **评分 8.5** · 来源：[Mistral AI](https://mistral.ai/news/leanstral) · 发布于 2026-03-16
>
> 评分依据：首个开源 Lean 4 代码 Agent，填补形式化证明领域空白，技术深度高且完全开源

## 要点

Mistral 发布 Leanstral，这是首个专为 Lean 4 形式化证明系统设计的开源代码 Agent。与现有的通用模型包装器不同，Leanstral 从底层针对形式化证明任务优化，旨在让 AI Agent 不仅生成代码，还能形式化证明其正确性。

**核心特性：**
- **高效架构**：采用稀疏 MoE 架构，仅 6B 活跃参数（总参数 120B），在成本和性能间取得平衡
- **完全开源**：Apache 2.0 许可，权重可下载，支持本地部署
- **MCP 集成**：原生支持 Model Context Protocol，可与 lean-lsp-mcp 等工具无缝协作
- **多种访问方式**：Mistral Vibe 零配置使用、免费 API 端点、自托管部署

**性能表现（FLTEval 基准）：**
- 单次推理得分 21.9，pass@2 达到 26.3，超越 Claude Sonnet（23.7）
- pass@16 得分 31.9，成本仅 $290，而 Claude Opus 达到 39.6 需要 $1,650（92 倍成本差）
- 相比开源竞品（GLM5-744B、Kimi-K2.5-1T、Qwen3.5-397B），Leanstral 以更小的参数量实现更好的扩展性

**实际应用案例：**
- 成功诊断 Lean 4.29.0-rc6 版本升级导致的类型别名问题，提出将 `def` 改为 `abbrev` 的正确修复方案
- 将 Coq 语言的程序定义转换为 Lean，并证明程序性质

## 🤖 AI 点评

形式化证明一直是 AI 代码生成的「最后一公里」——生成的代码能跑，但正确性难以保证。Leanstral 的出现标志着从「生成代码」到「生成可证明正确的代码」的范式转变。

Mistral 选择 Lean 4 作为切入点很聪明：Lean 既是数学证明工具（已用于验证 perfectoid spaces 等复杂数学对象），也是软件验证工具（可验证 Rust 代码片段）。这意味着 Leanstral 的应用场景不局限于学术界，还能延伸到关键软件系统的形式化验证。

更重要的是完全开源策略。形式化证明社区一直强调可复现性和透明性，闭源模型在这个领域天然缺乏信任基础。Apache 2.0 许可 + 6B 活跃参数的组合，让研究者和企业都能低成本部署和定制，可能会加速形式化方法在工业界的普及。
