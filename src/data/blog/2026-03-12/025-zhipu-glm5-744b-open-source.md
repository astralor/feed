---
title: "智谱 GLM-5：744B 参数开源 MoE 大模型，MIT 许可，SWE-bench 达 77.8%"
description: "智谱 AI 发布 GLM-5，一个 744B 参数的混合专家（MoE）开源模型，基于华为昇腾芯片训练，MIT 许可证，SWE-bench Verified 达 77.8%，开源阵营中排名第三。"
pubDatetime: 2026-03-12T16:00:00+08:00
tags: [open-source, llm, glm, zhipu, moe, swe-bench]
featured: true
category: "模型动态"
score: 8.5
sourceUrl: "https://0g.ai/blog/glm-5-live-on-0g-compute"
sourceType: "web-search"
sourceName: "Zhipu AI / GLM-5"
---

智谱 AI（Z.ai）于 2026 年 2 月 11 日发布 GLM-5，这是开源 LLM 赛道的重磅进展。

**核心规格**

- **总参数**：744B（激活参数：40B active）
- **训练数据**：28.5T tokens（比 GLM-4.5 增加 5.5T）
- **许可证**：MIT（完全开放商用）
- **训练芯片**：华为昇腾（非 NVIDIA GPU）
- **上下文**：200K token 窗口

**技术亮点**

引入 DeepSeek 稀疏注意力（DSA），在保留长上下文能力的同时大幅降低部署成本。相比前代 GLM-4.5（355B/32B active），GLM-5 大幅扩展规模，针对复杂系统工程和长视野 Agent 任务做专项优化。

**基准成绩**

- SWE-bench Verified：**77.8%**（开源排名第三，仅次于 MiniMax M2.5 和 Kimi K2.5）
- 整体排名第五，与 GPT-5.4 系列差距持续缩小

**意义**

在华为昇腾芯片上训练出如此规模且高质量的开源模型，打破了"中国 AI 因芯片限制落后"的固有认知，同时 MIT 许可也让全球开发者可以自由商用。
