---
title: "2026 年后训练技术全景：GRPO、DAPO、RLVR 如何取代 RLHF"
description: "深度综述 GRPO、DAPO、RLVR 等后训练方法如何成为主流，以及合成自博弈数据为何让 RLHF 退出历史舞台。"
pubDatetime: 2026-03-13T09:00:00+08:00
tags: [training, research, rlhf, llm]
featured: true
score: 8.0
sourceUrl: "https://llm-stats.com/blog/research/post-training-techniques-2026"
sourceType: "web-search"
sourceName: "LLM Stats Research"
---

LLM Stats 发布长篇技术综述《Post-Training in 2026》，系统梳理过去一年间后训练技术栈的范式迁移：从 RLHF 到以 **GRPO、DAPO、RLVR** 为代表的基于可验证奖励的强化学习框架，再到合成自博弈数据驱动的持续后训练。

**关键转变**：

- **GRPO（Group Relative Policy Optimization）**：去掉了 PPO 的 value network，用同组输出的相对排名作为奖励信号，大幅降低了训练成本。DeepSeek-R1 将其推向主流。
- **DAPO（Decoupled Clip and Dynamic Sampling Policy Optimization）**：在 GRPO 基础上引入动态采样和解耦裁剪，解决了训练不稳定和奖励 hacking 问题。
- **RLVR（Reinforcement Learning from Verifiable Rewards）**：对于有确定性答案的任务（数学、代码），用程序验证结果替代人类标注奖励，彻底绕开偏好数据瓶颈。

合成自博弈（synthetic self-play）则让模型用自己生成的数据持续迭代，无需依赖外部标注，显著降低了持续对齐的人力成本。

文章还指出：这轮技术迭代的最大受益者是推理类任务——数学、代码、逻辑推理的能力提升幅度远超通用问答，暗示大模型的「深度思考」能力正进入加速期。
