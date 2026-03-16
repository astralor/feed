---
title: "深入 Codex Agent Loop：OpenAI 揭秘 AI Agent 核心机制"
description: "OpenAI 技术博客详解 Codex CLI 的 Agent Loop 实现，包括提示构建、工具调用、缓存优化和上下文管理"
pubDatetime: 2026-03-11T00:00:00+08:00
tags: [openai, codex, agent-loop, llm, technical]
featured: true
category: "工程实践"
score: 9.0
sourceUrl: "https://openai.com/index/unrolling-the-codex-agent-loop/"
sourceType: "openai-blog"
sourceName: "OpenAI"
---

OpenAI 发布技术深度文章，详细解析 Codex CLI 的 Agent Loop 实现机制，这是理解 AI Agent 如何工作的重要参考。

## Agent Loop 基本流程

1. **用户输入** → 构建提示（prompt）
2. **模型推理** → 生成响应或工具调用请求
3. **工具执行** → 将结果追加到提示中
4. **循环迭代** → 直到模型返回最终消息

每次对话轮次（turn）可能包含多次推理-工具调用迭代，对话历史会累积到后续请求的提示中。

## 提示构建细节

Codex 通过 Responses API 发送请求，JSON payload 包含三个关键字段：

- **instructions**：系统/开发者消息
- **tools**：可用工具列表（Codex 内置 + MCP 服务器提供）
- **input**：文本/图片/文件输入列表

初始提示的 input 包含（按优先级）：
1. `role=developer` 消息：沙箱规则说明
2. `role=developer` 消息：用户配置的 developer_instructions
3. `role=user` 消息：聚合的用户指令（AGENTS.md、技能元数据等）
4. 用户的实际消息

## 性能优化：提示缓存

由于对话历史不断增长，请求的 JSON 大小呈二次增长。但通过**提示缓存**，实际采样成本是线性的：

- 缓存仅对提示的精确前缀匹配有效
- 静态内容（指令、工具定义）放在前面，动态内容放在后面
- 配置变更通过追加新消息而非修改旧消息来保持缓存命中

**导致缓存失效的操作**：
- 中途更改可用工具列表
- 切换模型
- 修改沙箱配置或审批模式

## 上下文窗口管理

当 token 数超过阈值时，Codex 使用 `/responses/compact` 端点压缩对话：

- 返回新的 input 列表，包含特殊的 `type=compaction` 项
- 该项的 `encrypted_content` 保留模型对原始对话的理解
- 支持零数据保留（ZDR）配置

## 技术亮点

- **无状态请求**：不使用 `previous_response_id`，简化服务端实现并支持 ZDR
- **开源透明**：实现细节在 [github.com/openai/codex](https://github.com/openai/codex) 公开
- **SSE 流式响应**：通过 Server-Sent Events 实时返回推理结果

这是 OpenAI 技术博客系列的第一篇，后续将深入探讨 CLI 架构、工具实现和沙箱模型。
