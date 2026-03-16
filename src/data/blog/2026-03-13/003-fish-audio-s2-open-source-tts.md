---
title: "Fish Audio 开源 S2：可精细控制情感的新一代 TTS 模型"
description: "Fish Audio 开源 S2-Pro，双 AR 架构实现情感可控的高表现力 TTS，同步发布权重、微调代码和推理引擎。"
pubDatetime: 2026-03-13T09:00:00+08:00
tags: [tts, open-source, audio, speech]
featured: true
category: "工程实践"
score: 8.0
sourceUrl: "https://fish.audio/blog/fish-audio-open-sources-s2/"
sourceType: "github-trending"
sourceName: "Fish Audio"
---

Fish Audio 正式开源 **S2-Pro**，这是其新一代文本转语音模型，核心特性是通过自然语言指令精细控制语音的情感与风格——从激动到低沉、从戏剧性停顿到急促节奏，全部可以用语言描述来驾驭。

**技术亮点**：S2-Pro 采用分层 Dual-AR 架构，将语言建模与声学细节建模分离，在序列长度和音质之间取得了更好的平衡。训练管线包含视频字幕、语音字幕、语音质量评估和奖励建模四个阶段，从而形成高质量的自监督数据飞轮。

**开源内容**：模型权重、微调代码、基于 SGLang 的生产级推理引擎——不是只放个 checkpoint，而是完整的系统交付。支持多发言人对话一次性生成，已在 GitHub（fishaudio/fish-speech）上冲上 trending 榜单。

在 ElevenLabs 和各大闭源 TTS 服务主导市场的背景下，一个开源的、情感可控的高质量 TTS 系统意义不小——尤其对需要本地化部署语音能力的 Agent 和应用开发者来说。
