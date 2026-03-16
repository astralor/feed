---
title: "NVIDIA 发布 Vera CPU：首款专为 Agentic AI 设计的处理器"
description: "NVIDIA 推出 Vera CPU，性能比传统 CPU 快 50%、效率提升 2 倍，88 核心设计，单机架可支持 22,500 个并发 CPU 环境"
pubDatetime: 2026-03-17T03:00:00+08:00
collectedAt: 2026-03-17T04:32:00+08:00
category: "算力硬件"
tags: ["NVIDIA", "Vera CPU", "Agentic AI", "处理器", "强化学习"]
featured: true
score: 8.5
scoreReason: "NVIDIA 首款 Agentic AI 专用 CPU，性能和效率显著提升，Cursor、Redpanda 等已采用，标志着 CPU 在 AI 时代的角色转变"
sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-launches-vera-cpu-purpose-built-for-agentic-ai"
sourceType: "other"
sourceName: "NVIDIA Newsroom"
ogImage: ""
---

> **评分 8.5** · 来源：[NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-launches-vera-cpu-purpose-built-for-agentic-ai) · 发布于 2026-03-16
>
> 评分依据：NVIDIA 首款 Agentic AI 专用 CPU，性能和效率显著提升，Cursor、Redpanda 等已采用，标志着 CPU 在 AI 时代的角色转变

## 要点

NVIDIA 在 GTC 2026 上发布 **Vera CPU**，这是全球首款专为 Agentic AI 和强化学习设计的处理器：

**核心规格：**
- **88 个 Olympus 核心** — NVIDIA 自研设计，支持 Spatial Multithreading（每核心运行 2 个任务）
- **1.2 TB/s 内存带宽** — 基于 LPDDR5X，带宽是通用 CPU 的 2 倍，功耗减半
- **性能提升** — 比传统机架级 CPU 快 50%，效率提升 2 倍
- **单机架密度** — 256 个 Vera CPU，可支持 22,500 个并发 CPU 环境

**关键技术：**
- **NVLink-C2C 互联** — 与 GPU 之间 1.8 TB/s 带宽（PCIe Gen 6 的 7 倍）
- **第二代 Scalable Coherency Fabric** — 高带宽内存子系统
- **液冷设计** — 基于 NVIDIA MGX 模块化架构

**应用场景：**
- 强化学习环境（大规模并发测试验证）
- Agentic 推理（工具调用、代码执行、数据交互）
- 数据处理、编排、存储管理
- 云应用和高性能计算

**生态采用：**
- **AI 公司** — Cursor（AI 编程助手）、Redpanda（流数据平台，延迟降低 5.5 倍）
- **云厂商** — Alibaba、ByteDance、Meta、Oracle、CoreWeave、Lambda、Nebius
- **系统厂商** — Dell、HPE、Lenovo、Supermicro、ASUS、Foxconn、GIGABYTE
- **国家实验室** — Los Alamos、Lawrence Berkeley、TACC（德州超算中心）

Jensen Huang："CPU 不再只是支持模型，而是驱动模型。Vera 让 AI 系统思考更快、扩展更远。"

## 🤖 AI 点评

这是 NVIDIA 对 CPU 角色的重新定义。传统 AI 架构里，CPU 是"配角"（数据搬运、系统控制），GPU 是"主角"（模型计算）。但 Agentic AI 改变了这个格局 — Agent 需要大量 CPU 环境来运行工具、执行代码、验证结果。

Vera 的设计哲学是 **"高单线程性能 + 高内存带宽 + 低功耗"**，这正是 Agentic 工作负载的痛点。Cursor 和 Redpanda 的早期测试数据（5.5 倍延迟降低）证明这不是纸面参数。

更值得关注的是 **单机架 22,500 个并发环境** 的密度 — 这意味着一个机架就能支撑大规模强化学习训练。对比传统 CPU 集群，这是数量级的效率提升。NVIDIA 正在把"AI 工厂"从概念变成可部署的标准化产品。
