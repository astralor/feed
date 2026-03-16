---
title: "Karpathy 开源 AutoResearch：630 行 Python 让 AI Agent 自主过夜跑 ML 实验"
description: "Andrej Karpathy 发布极简 autoresearch 工具，让 AI Agent 在单 GPU 上自主提出假设、修改训练代码、运行实验并迭代——全程无需人类干预。"
pubDatetime: 2026-03-12T14:00:00+08:00
tags: [karpathy, agent, ml-research, automation, open-source]
featured: true
category: "工程实践"
score: 9.5
sourceUrl: "https://github.com/karpathy/autoresearch"
sourceType: "github-trending"
sourceName: "GitHub / Andrej Karpathy"
---

Andrej Karpathy 于 2026 年 3 月 8 日开源了 **autoresearch**，一个仅 630 行 Python 的极简工具，让 AI Agent 能在单块 GPU（如 H100）上自主进行 LLM 训练实验。

## 工作流程

系统基于一个紧凑的 agentic loop：
1. Agent 读取 `program.md` 中的研究任务描述
2. 自主修改 `train.py` 训练代码（改架构、超参等）
3. 运行 5 分钟短时训练，检查 `val_bpb`（验证位/字节）是否改善
4. 改善则保留并 commit，否则回滚
5. 循环往复，可以过夜跑 100+ 次实验

## 关键特点

- **零框架依赖**：只用 Python 标准库 + LLM API，Karpathy 的极简哲学贯穿始终
- **真实 ML 环境**：基于 nanochat 训练核心，实验具备实际意义而非玩具示例
- **开放可复现**：MIT 许可，任何拥有单 GPU 的研究者都可直接使用

## 意义

这代表了 AI 研究范式的转变——不再是人类手动调参、盯着 loss 曲线，而是 Agent 作为自主研究员在夜间完成实验迭代。"AI 加速 AI 研究"的飞轮效应开始真正成型。
