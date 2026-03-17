---
title: "Sears AI 聊天机器人通话和文字记录泄露到公网"
description: "Wired 调查报道：Sears 的 AI 客服聊天机器人将电话录音和文字聊天记录暴露在公开网络上，涉及大量客户隐私数据"
pubDatetime: 2026-03-17T12:00:00+08:00
collectedAt: 2026-03-17T18:35:00+08:00
category: "政策伦理"
tags: ["AI安全", "隐私泄露", "聊天机器人", "Sears", "数据保护"]
featured: false
score: 6.7
scoreReason: "具体的 AI 部署安全事件，Wired 深度调查报道，对 AI 系统安全部署有直接警示价值"
sourceUrl: "https://www.wired.com/story/sears-exposed-ai-chatbot-phone-calls-and-text-chats-to-anyone-on-the-web/"
sourceType: "web-search"
sourceName: "Wired"
ogImage: ""
---

> **评分 6.7** · 来源：[Wired](https://www.wired.com/story/sears-exposed-ai-chatbot-phone-calls-and-text-chats-to-anyone-on-the-web/) · 发布于 2026-03-17
>
> 评分依据：具体的 AI 部署安全事件，Wired 调查报道，对 AI 系统安全部署有警示价值

## 要点

Wired 调查发现，Sears 部署的 AI 客服聊天机器人存在严重安全漏洞：

- **电话录音和文字聊天记录** 被暴露在公开可访问的网络上
- 任何人无需认证即可访问这些客户数据
- 涉及的数据包括 AI 聊天机器人处理的所有客户交互
- 暴露了客户的个人信息、购买记录、投诉内容等敏感数据

**安全警示：**
- AI 聊天机器人的数据管道安全性常被忽视
- 企业在急于部署 AI 客服时可能跳过了基本的安全审计
- 数据存储和访问控制是 AI 系统部署的关键环节

## 🤖 AI 点评

又一个"AI 部署快于安全审计"的案例。Sears 的问题不是 AI 模型本身的缺陷，而是最基础的 **数据管道安全** — 把包含客户隐私的交互记录放在无认证的公网端点上。

这类事件对整个行业的警示在于：AI 聊天机器人处理的数据量和敏感度远超传统客服系统（录音、文字、个人信息全在一个管道里），而很多企业的安全实践还停留在传统 Web 应用的水平。

NVIDIA NemoClaw 强调"企业安全层"不是没有道理 — 在 Agent 时代，每一个数据管道都是潜在的攻击面。
