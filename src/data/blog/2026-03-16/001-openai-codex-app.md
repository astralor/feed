---
title: "OpenAI 推出 Codex 桌面应用：多 Agent 协作的指挥中心"
description: "OpenAI 发布 Codex 桌面应用，支持多 Agent 并行工作、技能扩展和自动化任务，重新定义软件开发方式"
pubDatetime: 2026-03-04T00:00:00+08:00
tags: [openai, codex, agent, desktop-app, automation]
featured: true
category: "行业格局"
score: 9.3
sourceUrl: "https://openai.com/index/introducing-the-codex-app/"
sourceType: "openai-blog"
sourceName: "OpenAI"
---

OpenAI 正式发布 Codex 桌面应用（macOS，Windows 版本已于 3 月 4 日上线），这是一个专为管理多个 AI Agent 设计的「指挥中心」。

## 核心能力

**多 Agent 并行工作**
- 每个 Agent 在独立线程中运行，按项目组织
- 支持 worktrees，多个 Agent 可同时操作同一仓库而不冲突
- 可在应用内审查代码变更、添加评论，或在编辑器中手动修改

**技能系统（Skills）**
- 将 Codex 从「写代码的 Agent」扩展为「用代码完成工作的 Agent」
- 内置技能库包括：Figma 设计实现、Linear 项目管理、Cloudflare/Netlify 部署、GPT Image 图片生成等
- 技能可跨 CLI、IDE 扩展和桌面应用共享

**自动化任务（Automations）**
- 按计划在后台运行任务（如每日 issue 分类、CI 失败总结、发布简报生成）
- 完成后结果进入审查队列，可随时介入

**个性化交互**
- 提供两种对话风格：简洁务实型 vs 健谈共情型
- 通过 `/personality` 命令切换，能力不变

## 实战案例

OpenAI 演示了用 Codex 制作赛车游戏：仅一个初始提示，Codex 使用图片生成和 Web 游戏开发技能，独立消耗 700 万 tokens，完成设计、开发、QA 测试全流程。

## 安全与沙箱

- 原生开源的系统级沙箱（与 Codex CLI 一致）
- 默认限制 Agent 仅能编辑工作目录文件、使用缓存的 Web 搜索
- 需要提升权限的命令（如网络访问）会请求许可
- 支持项目或团队级规则配置

## 可用性

- ChatGPT Plus/Pro/Business/Enterprise/Edu 用户可用
- 限时向 ChatGPT Free 和 Go 用户开放
- 所有付费计划的速率限制翻倍

自 GPT-5.2-Codex 发布以来，Codex 使用量翻倍，过去一个月超过 100 万开发者使用。
