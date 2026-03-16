---
title: "AI Agent 研究周报：策略推理 vs 暴力搜索"
description: "本周 Agent 研究论文综述，涵盖推理能力、评估方法、安全风险和持续学习"
pubDatetime: 2026-03-16T04:00:00+08:00
tags: [AI-Agent, 研究论文, 安全, 评估, 强化学习]
featured: false
category: "学术前沿"
score: 7.8
sourceUrl: "https://www.llmwatch.com/p/ai-agents-of-the-week-papers-you-f11"
sourceType: "web-search"
sourceName: "LLM Watch"
---

本周 AI Agent 研究的关键发现：

## 推理 vs 搜索

MADQA 基准测试显示，即使最好的 Agent 在准确率上与人类搜索者持平，但依赖暴力检索策略，与最优性能仍有近 20% 差距。强化学习训练的 Agent 可能陷入「信息自锁」状态，完全停止提出有效问题。

## 视频评估框架

ExeVRM 框架仅通过执行视频判断 Agent 轨迹，达到 84.7% 准确率和 87.7% 召回率，超越 GPT-5.2 和 Gemini-3 Pro。这种与模型无关的方法为大规模评估计算机使用 Agent 提供了实用路径。

## 安全挑战

研究显示，通过文档注入的数据泄露成功率高达 85%，人类检测率为 0%，18 种防御方法均无效。这不是可修补的 bug，而是指令遵循范式的结构性后果。

## 集体动态

当多样化 Agent 群体竞争有限资源时，增加 Agent 智能和多样性实际上可能恶化系统过载，自发形成的「部落」既能缓解也能加剧风险。
