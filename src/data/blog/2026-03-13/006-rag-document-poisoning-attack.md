---
title: "RAG 文档投毒攻击：攻击者如何悄悄腐蚀 AI 的知识源"
description: "深度解析针对 RAG 系统的文档投毒攻击手法，包括语义隐藏、延迟触发和跨文档污染等高级技术。"
pubDatetime: 2026-03-13T09:00:00+08:00
tags: [rag, security, llm, ai-safety]
featured: false
category: "行业格局"
score: 7.0
sourceUrl: "https://aminrj.com/posts/rag-document-poisoning/"
sourceType: "hacker-news"
sourceName: "Amin RJ Blog"
---

安全研究员 Amin RJ 发布技术文章，深入分析针对 RAG（检索增强生成）系统的**文档投毒攻击**（Document Poisoning）：攻击者通过在知识库中注入精心构造的恶意文档，操控 AI 的信息检索和输出。

**主要攻击手法**：

- **语义隐藏**：在看似正常的文档中嵌入不可见的指令（如白色字体、零宽字符），RAG 系统会检索并将其注入 context，但人工审核难以发现。
- **延迟触发**：文档在平时检索时无害，只有当特定关键词出现在用户 query 中时才激活恶意行为，绕过基于内容的过滤。
- **跨文档污染**：通过多个看似独立的合法文档协同传递片段化的恶意指令，单文档检测无法识别。

**防御建议**：对知识库入库文档进行语义一致性检查；在 RAG pipeline 中引入输出异常检测；实施严格的文档来源白名单策略；使用 LLM 对检索结果进行二次安全评估。

随着 RAG 在企业 AI 应用中的深度渗透，知识库安全正在成为一个被严重低估的攻击面。
