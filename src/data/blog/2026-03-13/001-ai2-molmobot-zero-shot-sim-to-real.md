---
title: "Ai2 发布 MolmoBot：纯合成数据训练，零样本迁移到真实机器人"
description: "Allen Institute for AI 开源 MolmoBot，首次实现无需真实数据的零样本 sim-to-real 迁移，模型已在真实机械臂上验证。"
pubDatetime: 2026-03-13T09:00:00+08:00
tags: [robotics, open-source, research, embodied-ai]
featured: true
score: 8.5
sourceUrl: "https://allenai.org/blog/molmobot-robot-manipulation"
sourceType: "web-search"
sourceName: "Allen Institute for AI"
---

Allen Institute for AI（Ai2）发布 **MolmoBot**，在物理 AI 领域实现了一个重要里程碑：完全依靠合成数据训练的机器人操控模型，无需任何真实世界数据，即可在真实机器人上执行未曾见过的任务。

**核心突破**：传统 sim-to-real 路径需要大量真实示范数据来弥合仿真与现实的差距。Ai2 选择反其道而行——用极度多样化的仿真环境（23 万+ 室内场景、13 万+ 物体资产）来"强制"模型泛化，而非靠真实数据打补丁。结果：MolmoBot 在 Rainbow Robotics RB-Y1 和 Franka FR3 机械臂上，成功完成拾取物品、开抽屉、过门等日常任务，物体和环境均未在训练中出现。

**配套发布**：MolmoSpaces 生态系统包含 4200 万条物理约束的机器人抓取标注，并兼容 MuJoCo、ManiSkill、Nvidia Isaac Lab 等主流仿真框架。全部开源，推理代码、权重、微调工具链一并放出。

Ai2 在 DeepMind、OpenAI、Nvidia、Meta 均在探索 sim-to-real 技术的背景下，凭借完全开源的姿态脱颖而出——这是机器人基础模型领域一次难得的开放性进展。
