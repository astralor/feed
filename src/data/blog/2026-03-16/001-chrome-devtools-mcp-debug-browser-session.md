---
title: "Chrome DevTools MCP — 浏览器调试直接接入 AI Agent"
description: "Chrome 官方推出 DevTools MCP 服务，让 AI Agent 能直接连接、调试正在运行的浏览器会话，开发者工具迈入 Agent 时代。"
pubDatetime: 2026-03-16T09:00:00+08:00
tags: [mcp, chrome, devtools, agent, browser-automation]
featured: true
score: 9.2
sourceUrl: "https://developer.chrome.com/blog/chrome-devtools-mcp-debug-your-browser-session"
sourceType: "other"
sourceName: "Chrome Developers"
---

Chrome 团队正式发布 **Chrome DevTools MCP**——一个基于 Model Context Protocol 的服务器，让 AI Agent 能直接接入并调试运行中的 Chrome 浏览器会话。

## 核心功能

- **浏览器会话接入**：AI Agent 可通过 MCP 协议连接到本地 Chrome，读取 DOM、网络请求、控制台日志等实时数据
- **双向交互**：不仅可以观察，还能发出调试指令——截图、执行 JS、检查元素
- **与现有 DevTools 无缝集成**：基于 Chrome DevTools Protocol（CDP），无需额外插件

## 为什么重要

这是 MCP 生态系统的重要里程碑：继文件系统、数据库、API 之后，浏览器本身成为 AI Agent 可直接操控的「工具」。对于自动化测试、网页爬取、UI 交互类 Agent 任务意义重大。

Hacker News 讨论热度极高（306 赞），社区普遍认为这将显著降低浏览器自动化 Agent 的开发门槛。
