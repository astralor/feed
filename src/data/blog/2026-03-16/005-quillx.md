---
title: "Quillx：用文学隐喻标记代码的 AI 参与度"
description: "开源标准，用 5 级评分（Verse/Prose/Adapted/Ghostwritten/Lorem Ipsum）披露 AI 在代码中的参与程度"
pubDatetime: 2026-03-16T06:00:00+08:00
tags: [ai-disclosure, open-standard, transparency]
featured: false
category: "工程实践"
score: 6.5
scoreReason: "有趣的透明度标准尝试，用文学隐喻让 AI 参与度可视化，但实际采用度和效果有待观察"
sourceUrl: "https://github.com/QAInsights/Quillx"
sourceType: "github-trending"
sourceName: "GitHub"
ogImage: ""
---

> **评分 6.5** · 来源：[GitHub](https://github.com/QAInsights/Quillx) · 发布于 2026-03-16
>
> 评分依据：有创意的透明度标准，用文学隐喻让 AI 参与度可量化和可视化，但作为自我声明标准，实际采用度和可信度有待验证

## 要点

Quillx 是一个开源标准，用于披露 AI 在软件项目中的参与程度，核心理念：**代码是文学，你实际写了多少？**

**5 级评分体系（用文学创作隐喻）：**

1. **Verse（诗歌）**：每一行都经过深思熟虑，像诗歌一样精心雕琢，完全由人类创作
2. **Prose（散文）**：人类声音贯穿始终，AI 帮助搭建脚手架和处理重复部分
3. **Adapted（改编）**：协作作品，人类指导、AI 生成、经过有意义的编辑
4. **Ghostwritten（代笔）**：AI 写的，你简要说明、审查并签字
5. **Lorem Ipsum（占位符）**：占位符当作产品发布，生成、接受、部署

**使用方式：**

在 README.md 中添加徽章：
```markdown
[![Quillx](https://raw.githubusercontent.com/qainsights/Quillx/main/badges/quillx-2.svg)](https://github.com/qainsights/Quillx)
```

或纯文本声明：
```
Quillx：2/5 · Prose - 架构和逻辑是我的，AI 搭建了样板代码和测试
```

**核心原则：**

- **透明度优于纯粹性**：不是竞赛，而是诚实披露
- **光谱而非二元**：AI 使用是渐变的，不是开关
- **自我声明**：信任作者，社区随时间验证
- **版本化评分**：项目演进，评分也可以变化

**许可证：**

CC0 1.0 Universal（公共领域），可自由使用，无需署名。

## 🤖 AI 点评

Quillx 的巧妙之处在于用文学隐喻让 AI 参与度变得可感知。「Verse」vs「Lorem Ipsum」比「0% AI」vs「100% AI」更有画面感，也更容易引发对代码质量的思考。

但作为自我声明标准，它面临两个根本挑战：

1. **激励不对齐**：声明高 AI 参与度可能被视为「偷懒」或「不专业」，导致系统性低报。就像学术界的「AI 辅助写作」声明，很多人会选择不标注以避免负面印象。

2. **边界模糊**：什么算「有意义的编辑」？用 Copilot 补全算哪一级？用 Claude 重构一个函数算哪一级？实际使用中，2/3/4 级的边界会非常主观。

更大的问题是：**这个标准解决的是什么问题？** 如果目标是让用户知道代码质量，那么测试覆盖率、文档完整度、bug 密度可能更有用。如果目标是学术诚信或职业伦理，那么需要更强的社区规范支持，而不只是一个徽章。

不过，作为一个「conversation starter」（话题引子），Quillx 有价值。它让「AI 参与度」从隐性话题变成显性话题，这本身就是进步。如果能演化出更细粒度的标准（比如区分「AI 生成初稿 + 人类重写」vs「人类写框架 + AI 填充细节」），可能会更实用。

与前面的「Stop Sloppypasta」呼应：一个呼吁不要直接粘贴 AI 输出，一个提供标准来标注 AI 参与度。两者都在尝试建立 AI 时代的新规范。
