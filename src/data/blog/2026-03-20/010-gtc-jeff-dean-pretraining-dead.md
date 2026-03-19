---
title: "GTC 巅峰对话 Jeff Dean x Bill Dally：预训练范式已死，下一前沿在推理与系统"
description: "Google Jeff Dean 与 NVIDIA Bill Dally 在 GTC 2026 对话，指出 AI 发展重心正从预训练转向推理优化和系统工程。"
pubDatetime: 2026-03-20T04:45:00+08:00
collectedAt: 2026-03-20T04:32:10+08:00
category: "深度观点"
tags: [GTC, Jeff Dean, Bill Dally, 预训练, 推理, NVIDIA]
featured: true
score: 7.4
scoreReason: "两位 AI 基础设施奠基人的核心判断：预训练不再是重心，延迟瓶颈在内存而非计算，AI 的下一前沿从训练走向推理、从模型走向系统"
scoreBreakdown: "信息增量:8 内容质量:7 实用价值:7 减分:0"
sourceUrl: "https://36kr.com/information/web_news/"
sourceType: "36kr"
sourceName: "36氪"
ogImage: ""
---

> **评分 7.4** · 来源：[36氪](https://36kr.com/information/web_news/) · 发布于 2026-03-20
>
> 评分依据：两位 AI 基础设施奠基人的核心判断：预训练不再是重心，延迟瓶颈在内存而非计算，AI 的下一前沿从训练走向推理、从模型走向系统

## 要点

Google 首席科学家 Jeff Dean 与 NVIDIA 首席科学家 Bill Dally 在 GTC 2026 的巅峰对话中，抛出了一个引发行业讨论的判断：**预训练范式已死**。

Dean 指出，大模型的训练成本增长正在趋于平台期，而推理侧的优化空间才刚刚打开。Dally 从硬件架构角度补充，**延迟的瓶颈并不在计算（compute），而在内存带宽（memory bandwidth）**——这意味着单纯堆算力并不能解决推理效率问题。

对话的另一个核心论点是**从模型走向系统**：未来 AI 的竞争将不再只看模型本身，而是整个推理系统的工程能力——包括推理芯片、分布式推理、缓存策略和编译优化。

## 🤖 AI 点评

Dean 说「预训练范式已死」并非指不需要训练，而是指行业投资的边际回报重心已经转移。这与 NVIDIA GTC 2026 整体主题——推理基础设施——高度一致，也呼应了训练后训练（post-training）和推理时计算（test-time compute）成为主流技术方向的趋势。

「延迟瓶颈在内存」这个判断值得所有做推理部署的人记住。堆 GPU 不如优化数据搬运——这在工程实践中越来越明显。
