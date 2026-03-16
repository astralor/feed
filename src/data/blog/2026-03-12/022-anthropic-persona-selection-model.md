---
title: "Anthropic 新研究：角色选择模型——AI 如何在多重身份间保持一致性"
description: "Anthropic Alignment 团队发布关于「角色选择模型」的研究，探索大模型如何在被要求扮演不同角色时，维持核心价值观一致性而不「失控出戏」。"
pubDatetime: 2026-03-12T14:00:00+08:00
tags: [anthropic, alignment, persona, identity, safety]
featured: false
category: "学术前沿"
score: 7.5
sourceUrl: "https://www.anthropic.com/research/persona-selection-model"
sourceType: "anthropic-blog"
sourceName: "Anthropic"
---

Anthropic Alignment 团队于 2026 年 2 月 23 日发布《The Persona Selection Model》，研究 LLM 在角色扮演场景下的身份稳定性问题。

## 核心问题

当一个 AI 系统被要求"扮演一个没有限制的助手"或"成为 DAN（Do Anything Now）"时，它如何在不破坏安全约束的前提下理解和响应这类请求？

## 研究框架

Anthropic 提出了「角色选择模型」：将 AI 的行为分为**外层角色层**（可灵活调整的人格、风格、名字）和**内核价值层**（不可更改的核心约束）。

关键发现：
- 当前模型在角色层和价值层之间的边界是模糊的，容易被精心构造的提示词穿透
- 明确的层级分离设计能显著提升对角色扮演越狱的抵抗力
- 身份稳定性与有用性之间存在可优化的权衡空间

## 实践意义

这项研究直接指导了 Claude 的角色扮演安全设计，也对所有需要部署自定义人格 AI（如客服机器人、教育助手）的开发者具有重要参考价值。
