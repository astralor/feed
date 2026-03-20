---
title: "TaxHacker：自托管 AI 记账应用，用 LLM 识别票据、发票和交易"
description: "vas3k 开源的自托管 AI 会计工具，支持多模型、多币种（含加密货币），GitHub 日增 136 星"
pubDatetime: 2026-03-20T20:45:00+08:00
collectedAt: 2026-03-20T20:45:00+08:00
category: "工程实践"
tags: [开源工具, AI-Accounting, LLM, Self-Hosted]
featured: false
score: 6.6
scoreReason: "实用开源工具，技术实现清晰，支持多 LLM 供应商和加密货币汇率转换，直接可部署"
scoreBreakdown: "信息增量:6 内容质量:6 实用价值:8 减分:0"
sourceUrl: "https://github.com/vas3k/TaxHacker"
sourceType: "github-trending"
sourceName: "GitHub"
ogImage: "./032-taxhacker-self-hosted-ai-accounting.jpg"
---

> **评分 6.6** · 来源：[GitHub](https://github.com/vas3k/TaxHacker) · 发布于 2026-03-20
>
> 评分依据：实用开源工具，技术实现清晰，支持多 LLM 供应商和加密货币汇率转换，直接可部署

## 要点

TaxHacker 是由 vas3k 开发的自托管 AI 记账应用，面向自由职业者、独立开发者和小型企业。核心能力是用 LLM 自动识别和提取票据、发票、PDF 中的关键信息——产品名称、金额、日期、商户、税费等，并存入结构化数据库。

技术特点：支持 OpenAI、Google Gemini、Mistral 多个 LLM 供应商切换；内置基于交易日期历史汇率（包括加密货币）的自动货币转换；支持自定义 AI Prompt 和分类字段；多项目管理和导入导出功能。支持商店收据、餐厅账单、银行对账单、手写收据等多种文档格式和语言。

目前项目仍在早期开发阶段，发布当天获得 136 星。

## 🤖 AI 点评

TaxHacker 的价值在于把「LLM 识别票据」这个场景做成了完整产品闭环——从上传、识别、分类到结构化存储和报表导出，而不只是一个 demo 级的 OCR wrapper。多 LLM 供应商切换和自定义 Prompt 字段的设计对数据敏感用户很友好。但早期阶段需要注意隐私问题：自托管意味着用户自己控制数据流向，但发送到外部 LLM API 的票据图片是否脱敏，README 中未见说明。对于需要处理真实财务数据的用户，这是部署前必须确认的事项。
