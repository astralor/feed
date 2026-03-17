---
title: "Mistral 发布 Leanstral：首个开源 Lean 4 证明助手模型"
description: "Mistral AI 推出 Leanstral，一个专为 Lean 4 形式化验证设计的高效代码智能体，仅 6B 激活参数即可在证明工程任务中击败大型闭源模型。"
pubDatetime: 2026-03-17T08:30:00+08:00
collectedAt: 2026-03-17T13:52:00+08:00
category: "工程实践"
tags: ["Mistral", "开源模型", "形式化验证", "Lean", "代码生成"]
featured: true
score: 8.7
scoreReason: "首个开源 Lean 4 专用模型，技术创新显著（稀疏架构 + 形式化验证），Apache 2.0 许可证 + 免费 API，实用价值高"
scoreBreakdown: "信息增量:9 内容质量:9 实用价值:8 减分:0"
sourceUrl: "https://mistral.ai/news/leanstral"
sourceType: "other"
sourceName: "Mistral AI"
ogImage: ""
---

> **评分 8.7** · 来源：[Mistral AI](https://mistral.ai/news/leanstral) · 发布于 2026-03-17
>
> 评分依据：首个开源 Lean 4 专用模型，稀疏架构 + 形式化验证的技术突破，Apache 2.0 + 免费 API 降低使用门槛，对数学证明和关键软件验证有实际价值

## 要点

Mistral AI 发布 **Leanstral**，这是首个专为 Lean 4 形式化证明系统设计的开源代码智能体。不同于现有的通用模型包装器或单一数学问题求解器，Leanstral 采用高度稀疏的架构（120B 参数，6B 激活），专门针对真实形式化代码仓库的证明工程任务优化。

**核心特性：**
- **开放可用**：Apache 2.0 许可证发布权重，集成到 Mistral Vibe CLI，提供免费 API 端点（labs-leanstral-2603）
- **高效强大**：6B 激活参数，通过 Lean 并行推理验证，性能与成本效率均优于闭源竞品
- **MCP 可扩展**：通过 Vibe 支持任意 MCP 协议，专门训练以最大化 lean-lsp-mcp 性能

**评测结果（FLTEval 基准）：**
- **vs 开源模型**：Leanstral pass@2（26.3 分）击败 Qwen3.5-397B-A17B pass@4（25.4 分），成本仅为后者一半
- **vs Claude 家族**：
  - Leanstral pass@2（$36）得分 26.3，超越 Sonnet 4.6（$549）的 23.7 分
  - Leanstral pass@16（$290）达到 31.9 分，比 Sonnet 高 8 分
  - Claude Opus 4.6 仍是质量领先者（39.6 分），但成本高达 $1,650（是 Leanstral 的 92 倍）

**实际案例：**
- 成功诊断并修复 Lean 4.29.0-rc6 版本中的类型别名编译问题（将 `def` 改为 `abbrev` 解决定义等价性问题）
- 将 Coq 语言的程序定义转换为 Lean 并证明其性质

## 🤖 AI 点评

这是形式化验证领域的重要进展——AI 不再只是"生成代码让人审查"，而是开始"生成代码并自证正确性"。Leanstral 的意义在于将人类从"调试机器生成逻辑"的苦役中解放出来，转向"定义规格说明"的高层工作。

6B 激活参数击败 400B+ 模型的效率优势，证明了领域专用训练的价值。Apache 2.0 + 免费 API 的组合降低了形式化验证的门槛，可能加速数学证明和关键软件（如 Rust 编译器、密码学库）的形式化进程。

值得关注的是 Mistral 提到的"下一代验证代码模型"——如果这个方向成熟，软件工程的质量保障范式可能从"测试驱动"转向"证明驱动"。
