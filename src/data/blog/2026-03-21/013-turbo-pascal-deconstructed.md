---
title: "Claude 逆向工程 Turbo Pascal 3.02A：从 39KB 二进制到交互式可视化"
description: "Simon Willison 用 Claude 将 1985 年的 Turbo Pascal 可执行文件反编译为带完整注释的交互式可视化"
pubDatetime: 2026-03-21T08:50:00+08:00
collectedAt: 2026-03-21T08:45:00+08:00
category: "工程实践"
tags: [Claude, 逆向工程, LLM应用, Simon-Willison]
featured: true
score: 7.7
scoreReason: "LLM 逆向工程二进制文件的精彩示范，附带完整 prompt 链和交互式产出"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:7 减分:0"
sourceUrl: "https://simonwillison.net/2026/Mar/20/turbo-pascal/"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---
> **评分 7.7** · 来源：[Simon Willison](https://simonwillison.net/2026/Mar/20/turbo-pascal/) · 发布于 2026-03-20
>
> 评分依据：LLM 逆向工程二进制文件的精彩示范，附带完整 prompt 链和交互式产出

## 要点

Simon Willison 受到 James Hague「比 Turbo Pascal 还大的东西」系列启发，找到了 Borland 1985 年发布的 Turbo Pascal 3.02 可执行文件（39,731 字节，包含完整的文本编辑器 IDE 和 Pascal 编译器）。他将这个二进制文件交给 Claude，要求其反编译为可读的源代码，并创建了一个交互式可视化页面——将二进制文件按功能段拆分，标注汇编代码，再重构为带详细注释的可读代码。

整个过程中 Willison 仅用了四条简洁的 prompt：阅读背景文章、定位二进制文件、探索 zip 包内容、构建交互式 artifact。最终产出是一个无需 React 的纯 HTML 交互页面，完整嵌入了 turbo.com 二进制并展示了反编译结果。

## 🤖 AI 点评

这个案例的价值不在于「Claude 能反编译」，而在于展示了 LLM 作为认知工具的真实潜力——39KB 的二进制文件在 1985 年是一个完整的开发环境，而 40 年后 AI 可以在几分钟内为其建立完整的技术注释。更值得注意的是 Willison 的 prompt 设计风格：极简、逐步递进、不预设技术路径。四条 prompt 就让模型自行完成了从二进制探索到结构化可视化的全流程。这种「少即是多」的交互方式，对日常使用 LLM 的开发者有直接参考价值。
