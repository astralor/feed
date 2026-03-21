---
title: "把 Markdown 变成 Agentic UI 协议：文本、代码、数据三流合一"
description: "提出用 Markdown 作为 Agent 生成 UI 的统一协议，在同一个响应流中交错传输文本、可执行代码和结构化数据"
pubDatetime: 2026-03-21T14:45:00+08:00
collectedAt: 2026-03-21T14:45:00+08:00
category: "工程实践"
tags: [agent-ui, markdown, protocol, open-source, streaming]
featured: true
score: 8.0
scoreReason: "优雅的协议设计解决了一个真实问题——Agent 如何在单一流中同时输出文本、代码和 UI 组件"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:8 减分:0"
sourceUrl: "https://fabian-kuebler.com/posts/markdown-agentic-ui/"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---

> **评分 8.0** · 来源：[Hacker News](https://fabian-kuebler.com/posts/markdown-agentic-ui/) · 发布于 2026-03-21
>
> 评分依据：优雅的协议设计解决了一个真实问题——Agent 如何在单一流中同时输出文本、代码和 UI 组件

## 要点

Eric Schmidt 预测「用户界面将基本消失」，Agent 将按需生成 UI。作者据此构建了一个原型，核心思路极其简洁：用 Markdown 作为 Agentic UI 的统一协议，因为 LLM 已经天生精通 Markdown。

协议定义三种块类型：普通 Markdown 文本（直接展示给用户）、`agent.run` 代码栅栏（服务端持久化上下文中执行）、`agent.data` 数据栅栏（流式传输数据到 UI）。三者可在同一响应中任意交错排列，解析器增量处理——每条语句写完即执行，无需等待完整响应。

配套的 `mount()` 原语允许 Agent 创建响应式 UI 组件，支持客户端-服务端-LLM 三方数据流。项目已开源（fenced）。

## 🤖 AI 点评

这个设计的精妙之处在于「不发明新东西」。MCP 要定义新协议、新 SDK、新数据格式；而这套方案直接复用 LLM 最熟悉的数据格式——Markdown——把代码执行和数据传输编码为两种特殊的代码栅栏。对 LLM 来说，学习成本为零。

流式执行这一点尤为关键。当前大多数 Agent UI 方案是「先生成完整代码，再渲染」，用户要等。这套方案让每条语句写完即刻执行，实现了真正的增量交互体验。这不仅是性能优化，更是交互范式的改变——用户看到 Agent 在「实时思考」，而不是对着一个加载条干等。
