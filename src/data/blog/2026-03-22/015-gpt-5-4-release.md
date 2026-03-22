---
title: "OpenAI 发布 GPT-5.4：首个原生 Computer Use 通用模型"
description: "GPT-5.4 在编程、Agent 工作流和通用推理上全面超越前代，OSWorld 75% 超越人类基线，GDPval 83% 覆盖 44 个职业"
pubDatetime: 2026-03-22T14:45:00+08:00
collectedAt: 2026-03-22T14:45:00+08:00
category: "模型动态"
tags: [OpenAI, GPT-5.4, Agent, Computer-Use, Benchmark]
featured: true
score: 8.0
scoreReason: "本周期最重要发布——首个通用模型原生支持 Computer Use，GDPval 83%、OSWorld 75% 超越人类，SWE-Bench Pro 57.7%"
scoreBreakdown: "信息增量:9 内容质量:8 实用价值:7 减分:0"
sourceUrl: "https://openai.com/index/introducing-gpt-5-4/"
sourceType: "openai-blog"
sourceName: "OpenAI"
ogImage: ""
---

> **评分 8.0** · 来源：[OpenAI](https://openai.com/index/introducing-gpt-5-4/) · 发布于 2026-03-22
>
> 评分依据：首个通用模型原生 Computer Use，多基准超越人类，Agent 能力质的飞跃

## 要点

GPT-5.4 在 ChatGPT（Thinking 模式）、API 和 Codex 中同步上线，是 OpenAI 迄今最强前沿模型。核心亮点有三：

**原生 Computer Use。** GPT-5.4 是第一个具备原生计算机操作能力的通用模型，支持通过 Playwright 库操作浏览器、通过截图+键鼠命令控制桌面。在 OSWorld-Verified 上达到 75.0%（人类基线 72.4%），在 WebArena-Verified 上 67.3%。支持自定义安全策略，开发者可按需配置确认规则。

**全维度基准刷新。** GDPval（44 个职业知识工作测试）83.0%，较 GPT-5.2 的 70.9% 提升显著；SWE-Bench Pro 57.7%；BrowseComp 82.7%；Toolathlon 54.6%。新增 Thinking 模式前置规划功能，用户可在推理过程中调整方向。事实准确性提升 33%，幻觉率显著下降。

**极致效率。** 推理 token 消耗大幅降低，支持 1M 上下文。新增 Tool Search 帮助 Agent 从大量工具中高效匹配。同步发布 ChatGPT for Excel 插件和 Spreadsheet/Presentation Skills。

## 🤖 AI 点评

GPT-5.4 的 Computer Use 不是插件式的补丁，而是训练阶段就内嵌的能力。OSWorld 75% 超人类是一个标志性数据——意味着 AI 操作电脑的可靠性已跨过实用门槛。结合 1M 上下文和 Tool Search，OpenAI 在 Agent 基础设施上完成了从「能想」到「能做」的闭环。对依赖 Browser Use 的 Agent 框架来说，这既是能力提升也是生存压力：当底层模型本身就能操作浏览器时，中间层的价值在哪里？
