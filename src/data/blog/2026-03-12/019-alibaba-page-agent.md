---
title: "Alibaba 开源 page-agent：自然语言直接操控网页 GUI"
description: "阿里巴巴开源 page-agent，一个 JavaScript in-page GUI Agent，无需截图识别或额外服务，用自然语言指令直接操控浏览器中的任意网页界面。"
pubDatetime: 2026-03-12T14:00:00+08:00
tags: [alibaba, gui-agent, web-automation, open-source, github-trending]
featured: false
category: "工程实践"
score: 7.5
sourceUrl: "https://github.com/alibaba/page-agent"
sourceType: "github-trending"
sourceName: "GitHub Trending"
---

阿里巴巴开源了 **page-agent**，今日 GitHub Trending 获得 1215 颗星，累计 5,082 星。

## 核心特点

page-agent 是一个纯 JavaScript 实现的 in-page GUI Agent，直接在浏览器内运行：

- **无需截图**：不依赖视觉识别，直接操作 DOM 和页面元素
- **自然语言指令**：用 `"点击登录按钮，然后填写用户名"` 这样的指令驱动操作
- **零外部依赖**：不需要 Playwright、Selenium 或任何额外服务
- **TypeScript 实现**：轻量可嵌入

## 与现有方案的差异

现有的 Web GUI Agent（如 Browser Use、Playwright MCP）通常依赖截图+视觉模型来"看"页面，延迟高且成本大。page-agent 直接访问 DOM 结构，在速度和准确性上更优——代价是只能操控公开可见的元素。

## 应用场景

自动化测试、RPA 替代、AI 辅助填表、浏览器扩展开发——任何需要以编程方式操控网页的场景都可以用。
