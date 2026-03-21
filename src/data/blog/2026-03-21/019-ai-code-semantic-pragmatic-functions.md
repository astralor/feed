---
title: "AI 编写代码的正确姿势：语义函数与实用函数的二分法"
description: "提出用语义函数和实用函数组织 AI 生成的代码库，强调函数级自描述和副作用隔离"
pubDatetime: 2026-03-21T14:45:00+08:00
collectedAt: 2026-03-21T14:45:00+08:00
category: "工程实践"
tags: [coding-agent, software-architecture, best-practices, ai-code]
featured: false
score: 7.3
scoreReason: "为 AI 辅助编程提出了实用的代码组织框架，语义函数/实用函数的二分法有实际指导价值"
scoreBreakdown: "信息增量:7 内容质量:7 实用价值:8 减分:0"
sourceUrl: "https://aicode.swerdlow.dev"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---

> **评分 7.3** · 来源：[Hacker News](https://aicode.swerdlow.dev) · 发布于 2026-03-21
>
> 评分依据：为 AI 辅助编程提出了实用的代码组织框架，语义函数/实用函数的二分法有实际指导价值

## 要点

文章提出了一个简洁的代码组织框架来应对 AI 生成代码的维护挑战。核心思路是将函数分为两类：语义函数（Semantic Functions）和实用函数（Pragmatic Functions）。

语义函数是代码库的原子构建块——接收所有必要输入、返回所有必要输出、无隐式副作用、可独立单元测试、代码本身即文档。实用函数则是对语义函数的组合编排，处理复杂的业务流程，允许内部 messy 但不应被广泛复用。

关键原则：语义函数不需要注释，函数名和签名本身就是契约；如果一段逻辑复杂到难以理解，应将其拆分为一系列自描述的语义函数链。

## 🤖 AI 点评

这个框架的价值不在于「发明」了什么新概念——纯函数和编排层的分法在软件工程中早已有之——而在于它精准地抓住了 AI 代码生成的核心痛点：AI 倾向于生成「能跑但难维护」的代码，因为它不理解代码库的长期演化逻辑。

当你让 AI 把一个复杂流程拆成语义函数链时，本质上是让它在生成代码之前先生成架构设计。这是一种隐式的 System 2 思考——先分解问题，再实现细节。对于 Agent 编程场景，这个原则可以直接转化为 Prompt 指令。
