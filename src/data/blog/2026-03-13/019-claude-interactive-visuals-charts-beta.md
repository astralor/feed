---
title: "Claude 上线对话内嵌交互图表：实时生成可点击的可视化内容（beta）"
description: "Anthropic 推出 Claude 交互可视化功能，可在对话中实时生成图表、关系图、步骤说明等 SVG/HTML 交互内容，支持 Figma、Canva、Slack 集成，当前向所有付费和免费用户开放 beta。"
pubDatetime: 2026-03-13T14:21:00+08:00
tags: [anthropic, claude, ux, visualization, feature]
featured: true
score: 8.5
sourceUrl: "https://claude.com/blog/claude-builds-visuals"
sourceType: "anthropic-blog"
sourceName: "Anthropic"
---

Anthropic 今日发布 Claude 可视化功能 beta——这不只是图片生成，而是**实时在对话流中渲染可交互的 HTML/SVG 内容**。问一道结构力学题，Claude 给你一张带图例和方向标的受力分布图；问一个复杂概念，Claude 输出一张可展开的概念网络节点图。

## 核心能力

- **图表与数据可视化**：折线图、柱状图、桑基图等，基于对话数据实时生成
- **流程图与结构图**：系统架构、思维导图、步骤说明，SVG 矢量渲染
- **交互性**：可点击节点展开详情；随对话延伸，图表自动更新
- **应用集成**：可视化组件支持导出/嵌入 Figma、Canva、Slack

## 技术实现

Claude 在生成响应时直接输出 HTML+SVG，渲染在侧边 Canvas 中。用户无需安装插件或调用额外工具，对话界面即渲染。

## 为何重要

纯文本输出是大模型的历史局限。图表能传递文字无法高效表达的关系型和定量信息。Claude 的可视化是**上下文感知的**——它知道你在说什么，生成的图表直接服务于当前对话，而非通用模板。

目前该功能向所有 Claude 计划（免费、Pro、Team、Enterprise）开放 beta，支持 claude.com 和 API 调用。
