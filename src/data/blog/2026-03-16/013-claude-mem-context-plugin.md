---
title: "claude-mem：自动捕获 Claude Code 会话上下文并注入未来对话的插件"
description: "开源插件自动记录 Claude Code 的所有操作，用 AI 压缩后注入到后续会话中，解决上下文丢失问题"
pubDatetime: 2026-03-16T12:00:00+08:00
collectedAt: 2026-03-17T00:31:00+08:00
category: "工程实践"
tags: ["Claude Code", "上下文管理", "开发工具", "插件"]
featured: false
score: 7.5
scoreReason: "解决 Claude Code 实际痛点（会话上下文丢失），实现思路清晰，但属于工具增强而非技术突破"
sourceUrl: "https://github.com/thedotmack/claude-mem"
sourceType: "github-trending"
sourceName: "GitHub Trending"
ogImage: ""
---

> **评分 7.5** · 来源：[GitHub Trending](https://github.com/trending) · 发布于 2026-03-16
>
> 评分依据：针对 Claude Code 用户的实用工具，解决真实痛点，但技术深度有限

## 要点

`claude-mem` 是一个 Claude Code 插件，自动捕获编码会话中的所有操作，用 AI 压缩后注入到未来会话的上下文中。

**核心功能：**
- **自动捕获**：记录 Claude Code 在会话中的所有操作（文件修改、命令执行、对话内容）
- **AI 压缩**：使用 Claude 的 agent-sdk 将原始记录压缩成精简的上下文摘要
- **自动注入**：在新会话启动时，将相关历史上下文注入到提示词中

**解决的问题：**

Claude Code 每次新会话都是「失忆」的——之前做过什么、为什么这样设计、遇到过什么坑，全都不记得。开发者要么手动复制粘贴历史对话，要么重新解释一遍背景。`claude-mem` 让 Claude Code 拥有「记忆」，自动延续上下文。

**技术实现：**
- TypeScript 编写
- 使用 Claude 的 agent-sdk 进行上下文压缩
- 插件形式集成到 Claude Code

**GitHub 数据：**
- 36,410 stars（今日新增 1,017）
- 2,618 forks
- 主要贡献者：@thedotmack, @claude, @apps/copilot-swe-agent

## 🤖 AI 点评

这个插件戳中了 AI 编程助手的一个核心痛点：**会话边界导致的上下文断裂**。人类开发者有长期记忆，知道「上周改这个文件是为了修 bug X」，但 AI 每次重启都是白纸一张。

`claude-mem` 的思路是用 AI 压缩 AI 的输出——这很聪明，因为原始会话记录太长无法全部注入，但人工总结又太费力。让 Claude 自己总结自己的工作，既保留关键信息又控制 token 消耗。

不过这个方案有个隐含假设：**压缩后的上下文足够准确**。如果 AI 在总结时遗漏了关键细节（比如某个边界条件的处理逻辑），后续会话可能会重复犯错。理想情况下，应该结合「AI 压缩」+「关键操作的结构化记录」（比如文件变更 diff、测试结果），而不是纯依赖自然语言摘要。

这个插件的火爆（1000+ stars/天）说明开发者对「有记忆的 AI 助手」需求强烈。
