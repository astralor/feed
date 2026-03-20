---
title: "Kitten TTS：15M 参数达到 SOTA 表现力的超轻量开源 TTS"
description: "三个模型（80M/40M/15M 参数），最小仅 25MB，纯 CPU 推理，ONNX 驱动，Apache 2.0 开源"
pubDatetime: 2026-03-20T08:45:00+08:00
collectedAt: 2026-03-20T08:45:00+08:00
category: "工程实践"
tags: [TTS, 开源, 边缘部署, ONNX]
featured: true
score: 7.9
scoreReason: "15M 参数模型达到 SOTA 表现力且仅需 25MB 存储，纯 CPU 推理可跑在树莓派上，pip install 即用"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:9 减分:0"
sourceUrl: "https://github.com/KittenML/KittenTTS"
sourceType: "hacker-news"
sourceName: "Hacker News"
ogImage: ""
---
> **评分 7.9** · 来源：[Hacker News](https://github.com/KittenML/KittenTTS) · 发布于 2026-03-20
>
> 评分依据：15M 参数模型达到 SOTA 表现力且仅需 25MB 存储，纯 CPU 推理可跑在树莓派上，pip install 即用

## 要点

KittenML 发布 Kitten TTS v0.8，提供三个规格的模型：kitten-tts-mini（80M 参数，80MB）、kitten-tts-micro（40M 参数，41MB）、kitten-tts-nano（15M 参数，int8 量化后仅 25MB）。所有模型基于 ONNX 运行，无需 GPU，可在 CPU 上高效推理，支持树莓派和浏览器部署。

15M 参数的 nano 模型在表现力方面达到新的 SOTA 水平。内置 8 种音色（Bella、Jasper、Luna 等），支持语速调节和文本预处理（数字、货币、单位自动展开），输出 24kHz 音频。安装方式为 `pip install`，API 简洁——三行代码即可生成语音。采用 Apache 2.0 许可证，商业友好。

项目目前处于开发者预览阶段，后续路线图包括移动端 SDK、多语言支持和 KittenASR。

## 🤖 AI 点评

TTS 领域一直在追求更大更好的模型，Kitten TTS 反向证明了极小参数量也能达到可用品质。25MB 的 nano 模型意味着嵌入到任何桌面应用、IoT 设备或移动端都不是问题——这个体积甚至小于一张高分辨率图片。对资源受限场景来说，这可能是目前最务实的选择。

值得关注的后续进展：移动端 SDK 和多语言支持如果落地，Kitten TTS 有潜力成为 Piper 之后的下一代边缘 TTS 标杆。
