---
title: "TradingAgents：模拟真实交易公司的多 Agent LLM 金融交易框架"
description: "基于 LangGraph 的开源多 Agent 金融交易框架，部署基本面分析、情绪分析、技术分析等专职 Agent 协作完成交易决策。"
pubDatetime: 2026-03-21T02:45:00+08:00
collectedAt: 2026-03-21T02:45:00+08:00
category: "工程实践"
tags: [multi-agent, finance, LLM, open-source, LangGraph]
featured: false
score: 6.6
scoreReason: "完整的开源多 Agent 交易框架，角色分工明确（7 种专职 Agent），支持主流 LLM 供应商，基于 arXiv 论文实现，GitHub Trending。"
scoreBreakdown: "信息增量:7 内容质量:5 实用价值:8 减分:0"
sourceUrl: "https://github.com/TauricResearch/TradingAgents"
sourceType: "github-trending"
sourceName: "GitHub Trending"
ogImage: ""
---
> **评分 6.6** · 来源：[GitHub](https://github.com/TauricResearch/TradingAgents) · 发布于 2026-03-21
>
> 评分依据：开源多 Agent 交易框架，角色分工明确，支持主流 LLM，arXiv 论文背书

## 要点

TradingAgents 由 Tauric Research 开发并完全开源，模拟真实交易公司的运作模式。框架将交易流程分解为多个专职 LLM Agent：基本面分析师负责公司财报评估，情绪分析师量化社交媒体情绪，新闻分析师解读宏观经济事件，技术分析师利用 MACD/RSI 等指标预测走势。此外还有多空研究员通过结构化辩论平衡收益与风险，交易员综合报告做出交易决策，风控团队持续评估组合风险，最终由投资组合经理审批。

技术栈基于 LangGraph 构建，支持 OpenAI（GPT-5.x）、Google（Gemini 3.x）、Anthropic（Claude 4.x）、xAI（Grok 4.x）、OpenRouter 和 Ollama 本地模型。最新 v0.2.1 版本已覆盖主流闭源和开源模型。框架提供 CLI 交互界面和 Python SDK 两种使用方式，可配置 LLM 提供商、辩论轮数、研究深度等参数。配套论文 Trading-R1 也已发布（arXiv: 2509.11420）。

## 🤖 AI 点评

TradingAgents 的价值不在收益预测（作者明确声明非投资建议），在于提供了一个可扩展的多 Agent 协作范式参考。7 种角色的分工——从信息采集到辩论再到风控审批——几乎复刻了对冲基金的决策链路，对构建其他领域的多 Agent 决策系统有借鉴意义。不过框架本质是 LLM 驱动的模拟，交易表现的鲁棒性高度依赖底层模型能力，目前更适合学术研究和策略原型验证。
