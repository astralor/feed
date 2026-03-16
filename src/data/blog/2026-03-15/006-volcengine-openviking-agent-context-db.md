---
title: "OpenViking：火山引擎开源 AI Agent 上下文数据库，今日 GitHub Trending 第一"
description: "字节旗下火山引擎开源 OpenViking，一个专为 AI Agent 设计的上下文数据库，通过文件系统范式统一管理 Agent 的记忆、资源和技能，支持层次化上下文传递。"
pubDatetime: 2026-03-15T09:00:00+08:00
tags: [agent, memory, context, open-source, volcengine]
featured: false
category: "工程实践"
score: 7.5
sourceUrl: "https://github.com/volcengine/OpenViking"
sourceType: "github-trending"
sourceName: "GitHub Trending"
---

火山引擎（字节跳动云服务部门）开源了 OpenViking，一个专为 AI Agent 设计的上下文数据库系统。今日在 GitHub Trending 榜首，单日新增 1,610 星。

**技术定位：** OpenViking 通过文件系统范式，统一管理 Agent 运行所需的三类上下文：
- **Memory（记忆）**：长期/短期记忆的持久化与检索
- **Resources（资源）**：工具、API、文档的结构化存储
- **Skills（技能）**：可复用 Agent 能力的注册与调度

**核心能力：**
- 层次化上下文传递（父 Agent 向子 Agent 精准传递必要上下文）
- 自进化机制（Agent 可更新自身记忆和技能，实现连续学习）
- 主要用 Python 实现，与主流 Agent 框架（如 OpenClaw）可集成

这是继 LangGraph Memory 和 MemGPT 之后，又一个将「Agent 持久化上下文」作为核心产品的开源项目，火山引擎的背书和生态资源使其具备较强的工程落地潜力。
