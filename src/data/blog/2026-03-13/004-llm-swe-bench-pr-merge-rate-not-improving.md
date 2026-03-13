---
title: "SWE-Bench 上 LLM 的 PR 合并率没有提高"
description: "研究发现尽管 SWE-Bench 基准分数持续上升，LLM 生成的 PR 实际被合并进主分支的比例并未改善，暗示评测与现实脱节。"
pubDatetime: 2026-03-13T09:00:00+08:00
tags: [benchmark, llm, swe-bench, research]
featured: false
score: 7.5
sourceUrl: "https://entropicthoughts.com/no-swe-bench-improvement"
sourceType: "hacker-news"
sourceName: "Entropic Thoughts"
---

Entropic Thoughts 发布分析文章，质疑 SWE-Bench 基准的真实价值：**LLM 在 SWE-Bench 的得分年年攀升，但生成 PR 被实际项目合并的比例并未跟上**。

作者统计了主流 AI coding 工具生成的 PR 样本，发现即使通过了 SWE-Bench 测试集，PR 在真实 GitHub 项目中被 maintainer 接受的比率依然很低。核心问题在于：SWE-Bench 考察的是「能否让测试通过」，而真实 PR review 还需要考虑代码风格、架构一致性、边界处理、文档完整性等一系列人类关注的维度。

**对行业的影响**：这一发现呼应了 METR 之前关于 AI coding 工具在实际项目中表现不稳定的研究，也为「SWE-Bench 300% → coding 工作全部 AI 化」的乐观叙事泼了一盆冷水。更深层的问题是：我们是否在用一个容易优化但不代表真实价值的指标，来定义 AI 编程能力的进步？

不过文章也指出，这并不意味着 AI coding 工具没有价值，而是提醒我们不要把 benchmark 得分与实际开发效率直接画等号。
