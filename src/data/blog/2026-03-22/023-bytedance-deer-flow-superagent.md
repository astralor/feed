---
title: "字节跳动开源 deer-flow：从 Deep Research 到全能 SuperAgent 框架"
description: "字节跳动推出 DeerFlow 2.0，定位为开源 SuperAgent 框架，支持沙箱、记忆、技能和子 Agent 协作。"
pubDatetime: 2026-03-22T20:45:00+08:00
collectedAt: 2026-03-22T20:45:00+08:00
category: "工程实践"
tags: [open-source, agent-framework, bytedance, langgraph]
featured: false
score: 7.0
scoreReason: "字节跳动推出的 SuperAgent 框架，架构设计完整，支持多种部署模式和 IM 渠道，可直接用于生产环境"
scoreBreakdown: "信息增量:7 内容质量:7 实用价值:7 减分:0"
sourceUrl: "https://github.com/bytedance/deer-flow"
sourceType: "github-trending"
sourceName: "GitHub Trending"
ogImage: ""
---

> **评分 7.0** · 来源：[GitHub Trending](https://github.com/bytedance/deer-flow) · 发布于 2026-03-22
>
> 评分依据：字节跳动推出的 SuperAgent 框架，架构设计完整，支持多种部署模式和 IM 渠道，可直接用于生产环境

## 要点

DeerFlow 2.0 是字节跳动的全新重写版本，定位从「深度研究框架」升级为「SuperAgent 运行时」。核心架构基于 LangGraph + LangChain 构建，提供子 Agent 编排、长期记忆、沙箱执行和渐进式技能加载等能力。

框架支持三种沙箱模式（本地执行、Docker、Kubernetes），原生集成 Telegram/Slack/飞书三个 IM 渠道，无需公网 IP 即可接收任务。技能系统采用 Markdown 文件定义工作流，按需加载以控制上下文窗口开销。此外，还集成了 Claude Code 互操作技能和 BytePlus 自研的 InfoQuest 搜索爬取工具集。

2 月 28 日曾登顶 GitHub Trending 第一名，推荐搭配 Doubao-Seed-2.0-Code、DeepSeek v3.2 或 Kimi 2.5 使用。

## 🤖 AI 点评

Agent 框架赛道已经非常拥挤，DeerFlow 的差异化在于字节跳动的工程资源背书和「渐进式技能加载」这个细节——大多数框架会一股脑把所有工具塞进上下文，而 DeerFlow 按需加载的思路更贴近生产环境的 token 现实。不过从架构描述来看，它和 OpenClaw 的技能系统有不少相似之处，能否在社区层面形成独特生态还需要观察。
