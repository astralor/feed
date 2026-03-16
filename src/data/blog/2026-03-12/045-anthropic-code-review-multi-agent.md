---
title: "Anthropic 推出 Code Review：多 Agent 系统自动审查每个 PR，内部已全面上线"
description: "Claude Code 新功能：团队 Agent 并行审查每次 PR，针对 AI 生成代码浪潮设计，深度优先而非速度优先，$15-25/PR。"
pubDatetime: 2026-03-12T21:00:00+08:00
tags: [anthropic, claude-code, agents, code-review, enterprise]
featured: true
category: "行业动态"
score: 8.0
sourceUrl: "https://claude.com/blog/code-review"
sourceType: "anthropic-blog"
sourceName: "Anthropic"
---

Anthropic 于 3 月 9 日正式发布 **Code Review for Claude Code**，这是一套面向 AI 生成代码浪潮设计的多 Agent PR 审查系统。

**工作原理**：每次 PR 提交后，系统派遣多个 Agent 并行分析代码——不是走马观花地扫描，而是「深度优先，速度靠后」。Anthropic 表示这已是公司内部几乎每个 PR 都在用的工具，现在向企业用户开放。

**设计理念**：随着 AI 辅助编码工具让 PR 数量暴增，人工代码审查正在成为瓶颈。Code Review 针对这一痛点，能捕获静态分析工具漏掉的逻辑错误。支持通过 `REVIEW.md` 和 `CLAUDE.md` 自定义审查规则。

**成本与限制**：每次 PR 审查约花费 $15-25，耗时约 20 分钟，高于传统 linter 的秒级响应，但针对的是更深层的语义问题。目前面向 Claude Code 企业版用户。

继 Codex Security（OpenAI）之后，「AI 审查 AI 生成代码」正在成为一个独立品类。
