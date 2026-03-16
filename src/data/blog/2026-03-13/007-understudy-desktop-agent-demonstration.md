---
title: "Understudy：演示一次，桌面 Agent 学会自动化任务"
description: "开源项目 Understudy 让用户只需操作演示一遍，AI 桌面 Agent 即可学习并复现该工作流，无需编写脚本。"
pubDatetime: 2026-03-13T09:00:00+08:00
tags: [agents, open-source, automation, desktop]
featured: false
category: "工程实践"
score: 7.0
sourceUrl: "https://github.com/understudy-ai/understudy"
sourceType: "hacker-news"
sourceName: "GitHub"
---

**Understudy** 是一个在 Hacker News 上受到关注的开源桌面 AI Agent 项目，核心理念是「示教一次，永久复现」：用户只需正常操作一遍（如填写表单、整理文件、批量处理数据），Understudy 会自动学习操作序列，之后可以在新的上下文中自动重放。

**工作原理**：系统通过屏幕录制和操作捕获建立任务的「剧本」（playbook），再由视觉语言模型理解 UI 状态，实现跨会话、跨数据集的泛化执行。与传统 RPA 脚本不同，它不依赖固定的 UI 元素坐标，而是通过视觉理解来找到「功能等价」的元素。

**适用场景**：重复性后台操作、办公软件批处理、数据迁移等场景——恰好是企业用户最常见但又最难通过 API 自动化的任务。

Understudy 的出现是桌面 AI Agent 从「聊天完成任务」向「操作完成任务」演进的一个缩影，也与 OpenAI Operator 等商业产品形成有趣的开源对标。
