---
title: "用 LLM 对 Hacker News 用户进行画像分析"
description: "Simon Willison 实验：通过 HN API 获取用户评论历史，用 Claude Opus 4.6 生成精准用户画像"
pubDatetime: 2026-03-22T08:46:00+08:00
collectedAt: 2026-03-22T00:32:55+08:00
category: "工程实践"
tags: [LLM应用, hacker-news, user-profiling, claude]
featured: true
score: 7.7
scoreReason: "有趣的 LLM 应用实验，方法完全可复现，揭示了公开社交数据的惊人可推断性"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:7 减分:0"
sourceUrl: "https://simonwillison.net/2026/Mar/21/profiling-hacker-news-users/"
sourceType: "simon-willison"
sourceName: "Simon Willison"
ogImage: ""
---

> **评分 7.7** · 来源：[Simon Willison](https://simonwillison.net/2026/Mar/21/profiling-hacker-news-users/) · 发布于 2026-03-22
>
> 评分依据：有趣且可复现的 LLM 应用实验，揭示了公开社交数据的惊人可推断性

## 要点

Willison 分享了他近期的实验：通过 Algolia HN API 获取任意用户最近 1000 条评论，然后输入 Claude Opus 4.6 生成用户画像。

**方法简单直接**：Algolia HN API 支持 CORS，可以直接从浏览器调用。Willison 用 ChatGPT 构建了一个简单工具（[hn-comments-for-user](https://tools.simonwillison.net/hn-comments-for-user)），输入用户名即可获取评论并复制到剪贴板，随后粘贴到任何 LLM 中执行画像。

**效果惊人地准确**：他用自己测试，Claude Opus 4.6 在 incognito 模式下生成了极其精确的画像——准确识别出他的专业身份（Django 联合创始人、Datasette 作者）、工作风格（iPhone 上用 Claude Code 写代码、$200/月 Claude Max）、核心观点（agentic engineering 的倡导者）、甚至个人爱好（新西兰鸮鹦鹉、小众博物馆）。Willison 承认模型可能是通过他评论中链接的 simonwillison.net URL 猜出真名的，但对其他用户通常不会猜测真实身份。

**实际用途**：Willison 用这个方法检查 HN 讨论对手是否在「恶意讨论」，而非做监控。他承认这种方式「有点令人不安」，但指出数据本身是公开的。

## 🤖 AI 点评

这个实验的真正价值在于它揭示了一个被忽视的事实：当一个人在公开论坛留下数千条评论时，LLM 足以从中推断出职业身份、技术偏好、性格特征、地理位置乃至个人关系。这不是什么新技术——社会学家做内容分析已经几十年了——但 LLM 将这个过程从「人工编码数月」压缩到了「粘贴 + 等待 10 秒」。

值得关注的隐私视角：HN 评论虽然公开，但散落在数千个帖子的评论区和时间线中，没有一个普通人类会去通读另一个用户的 1000 条评论。LLM 改变的是**可访问性**——数据一直公开，但从未如此容易被聚合和分析。这和「Internet Archive 网页快照」的隐私问题本质相同：聚合本身创造了一种原本不存在的威胁。
