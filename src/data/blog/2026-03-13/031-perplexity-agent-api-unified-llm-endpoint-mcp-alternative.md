---
title: "Perplexity Agent API 发布——用单一端点统一六家模型提供商"
description: "Perplexity 推出 Agent API，单一端点整合 OpenAI、Anthropic、Google、xAI、NVIDIA 等六家模型，内置网络搜索与工具执行，替代拼接式 AI 技术栈。"
pubDatetime: 2026-03-13T07:00:00+08:00
tags: [perplexity, api, agent, openai, anthropic, google, developer]
featured: false
category: "行业动态"
score: 7.0
sourceUrl: "https://thenewstack.io/perplexity-agent-api/"
sourceType: "web-search"
sourceName: "The New Stack"
---

Perplexity 正式推出 **Agent API**，旨在为开发者提供单一集成点，替代原本需要分别维护的多个基础设施组件。

## API 设计

- **端点**：`POST https://api.perplexity.ai/v1/agent`（提供 `/v1/responses` 别名以兼容 OpenAI SDK）
- **支持提供商**：OpenAI、Anthropic、Google、xAI、NVIDIA、Perplexity（共 6 家）
- **内置能力**：网络搜索、工具执行、多模型编排

## 替代的技术栈

Perplexity 将 Agent API 定位为可替代以下组件的一站式方案：

- 模型路由器
- 搜索层
- 嵌入服务提供商
- 沙箱服务
- 监控栈

## CTO 对 MCP 的批评

Denis Yarats 表示，MCP（模型上下文协议）在规模化场景下存在认证摩擦和上下文开销问题，因此 Perplexity 选择以 API + CLI 路径替代 MCP 集成方式。

这一立场引发了开发者社区对 Agent 标准化路径的热烈讨论。
