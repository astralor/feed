---
title: "Claude Opus 4.6 两周内在 Firefox 发现 22 个安全漏洞，14 个高危"
description: "Mozilla 与 Anthropic Frontier Red Team 合作，用 Claude Opus 4.6 对 Firefox JavaScript 引擎进行安全审计，发现 22 个漏洞其中 14 个高危，AI 还为已修复漏洞生成了可工作的 exploit，全部已在 Firefox 148 中修复。"
pubDatetime: 2026-03-13T14:00:00+08:00
tags: [security, anthropic, claude, firefox, bug-hunting]
featured: true
score: 9.0
sourceUrl: "https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/"
sourceType: "other"
sourceName: "Mozilla Blog"
---

这是 AI 在实际安全工程中最具说服力的演示之一：Anthropic Frontier Red Team 使用 **Claude Opus 4.6** 对 Firefox JavaScript 引擎进行为期两周的安全扫描，找到了 **22 个漏洞，其中 14 个被评定为高危**。

## 关键发现

- **CVE-2026-2796**（CVSS 9.8 严重）：JavaScript WebAssembly 组件中的 JIT 错误编译漏洞，Claude 不仅发现了该漏洞，还生成了一个**可工作的 exploit**
- 漏洞涵盖：内存存储系统、访问边界检查、安全沙箱等核心安全模块
- 所有漏洞已在 **Firefox 148**（2026 年 2 月发布）中完成修复

## Mozilla 的评价

Mozilla 在官方博客中表示：「AI 辅助的漏洞报告历来良莠不齐，误报率高。但我们收到的来自 Anthropic Frontier Red Team 的报告与众不同——格式规范、可重现性高、技术描述准确。」

Mozilla 正将 AI 辅助安全分析列为标准工具链的一部分。

## 行业意义

与此前「AI 辅助找 bug」的零散案例不同，这次展示了端到端的安全能力：
1. 发现未知漏洞（非已知模式匹配）
2. 理解底层 C++ / WASM 代码逻辑
3. 生成可运行 exploit（证明漏洞可利用性）

这意味着 AI 安全工具的能力已超出「辅助审计」范畴，开始具备主动攻防能力。
