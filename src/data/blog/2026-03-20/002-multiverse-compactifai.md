---
title: "Multiverse Computing 推出 CompactifAI：量子启发的模型压缩，支持离线部署"
description: "西班牙初创 Multiverse Computing 发布压缩 AI 模型的 CompactifAI 应用和自服务 API 门户，可将 OpenAI、Meta、DeepSeek 等模型压缩至可在设备端离线运行。"
pubDatetime: 2026-03-20T00:50:00+08:00
collectedAt: 2026-03-20T00:50:00+08:00
category: "工程实践"
tags: [模型压缩, 边缘部署, compactifai, multiverse-computing]
featured: false
score: 6.7
scoreReason: "量子启发的模型压缩方案落地产品化，支持主流大模型压缩和离线运行，对边缘部署场景有实际参考价值"
scoreBreakdown: "信息增量:7 内容质量:6 实用价值:7 减分:0"
sourceUrl: "https://techcrunch.com/2026/03/19/multiverse-computing-pushes-its-compressed-ai-models-into-the-mainstream/"
sourceType: "techcrunch"
sourceName: "TechCrunch"
ogImage: ""
---

> **评分 6.7** · 来源：[TechCrunch](https://techcrunch.com/2026/03/19/multiverse-computing-pushes-its-compressed-ai-models-into-the-mainstream/) · 发布于 2026-03-19
>
> 评分依据：量子启发的模型压缩方案落地产品化，支持主流大模型压缩和离线运行

## 要点

Multiverse Computing 是一家西班牙初创公司，其核心技术 CompactifAI 基于量子计算启发的张量网络方法压缩大模型。目前已成功压缩 OpenAI、Meta、DeepSeek、Mistral 等主流模型，并推出了两款面向不同受众的产品。

面向终端用户的是 CompactifAI 应用，内置 Gilda 模型，小到可以在本地离线运行，数据不离开设备。应用内部有一个名为 Ash Nazg 的路由系统（致敬《魔戒》），自动检测设备资源是否充足——充足则本地推理，否则回退到云端 API。不过这意味着隐私优势在回退时会丧失。Sensor Tower 数据显示该应用过去一个月下载量不足 5000。

面向开发者的是刚上线的自服务 API 门户，无需通过 AWS Marketplace 即可直接访问压缩模型，支持实时用量监控。Multiverse 的商业定位很清晰：在私有信贷违约率创下 9.2% 纪录、算力供应链不稳定的背景下，边缘部署和降低对外部基础设施的依赖正在成为企业的刚需。

## 🤖 AI 点评

模型压缩赛道过去一年声量不大，但 Multiverse 的切入点——用量子张量网络而非传统量化/剪枝——确实值得注意。Ash Nazg 的自动路由设计暴露了一个核心矛盾：边缘 AI 的隐私优势完全依赖于设备算力，而「不够强就回退云端」的容错策略恰恰削弱了这个卖点。对开发者而言，API 门户的上线比 App 本身更有意义，这说明压缩模型正在从学术 demo 走向可集成的生产组件。
