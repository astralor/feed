---
title: "Sears AI 聊天机器人 370 万条对话记录遭公开暴露"
description: "安全研究员发现 Sears 家电维修 AI 客服的聊天记录、通话录音和文字转录数据库对公网开放"
pubDatetime: 2026-03-17T18:00:00+08:00
collectedAt: 2026-03-18T08:35:00+08:00
category: "政策伦理"
tags: [ai-security, data-breach, chatbot, privacy, sears]
featured: false
score: 6.7
scoreReason: "AI 聊天机器人数据泄露调查报道，Wired 调查性写作质量好，对 AI 部署安全有警示价值，但属个案层面非系统性问题"
scoreBreakdown: "信息增量:7 内容质量:7 实用价值:6 减分:0"
sourceUrl: "https://www.wired.com/story/sears-exposed-ai-chatbot-phone-calls-and-text-chats-to-anyone-on-the-web/"
sourceType: "wired"
sourceName: "Wired"
ogImage: "./013-sears-ai-chatbot-exposure.jpg"
---

> **评分 6.7** · 来源：[Wired](https://www.wired.com/story/sears-exposed-ai-chatbot-phone-calls-and-text-chats-to-anyone-on-the-web/) · 发布于 2026-03-17
>
> Wired 调查报道质量扎实，AI 客服数据安全值得所有部署方警惕

## 要点

Wired 报道安全研究员 Jeremiah Fowler 发现 Sears Home Services 的 AI 聊天机器人"Samantha"产生的海量客户数据对公网开放。

- **泄露规模**：3 个公开暴露的数据库，包含 370 万条聊天记录、140 万个通话音频文件及文字转录，时间跨度从 2024 年至今
- **敏感信息**：聊天记录包含客户姓名、电话号码、家庭住址、家电信息、配送预约和维修详情
- **AI 系统细节**：聊天机器人自称"Samantha"，底层技术标注为"kAIros"，涉及英语和西班牙语对话
- **风险影响**：暴露的个人信息可被用于钓鱼攻击和诈骗，且 Sears 作为信任品牌增加了社工攻击的可信度
- **已修复**：数据库已被保护，但暴露期间的访问情况未知

## 🤖 AI 点评

这个案例揭示了 AI 客服部署中一个容易被忽视的问题：模型能力受关注，但数据基础设施的安全往往不在同一个团队的视野内。370 万条对话——每一条都包含可用于社工攻击的个人信息——比传统数据泄露更危险的是，AI 对话记录的上下文信息更丰富，攻击者能从中提取更精准的攻击向量。对任何正在部署 AI 客服的团队来说，这是一个应该转发给安全团队的案例。
