---
title: "NVIDIA 发布 88 核 Vera CPU：正面挑战 Intel 和 AMD"
description: "NVIDIA 在 GTC 2026 公布 Vera CPU 详细规格，88 核 176 线程，单核性能提升 50%，256 芯片液冷机架提供 6 倍 CPU 吞吐量，正式进军传统 CPU 市场。"
pubDatetime: 2026-03-16T18:00:00+08:00
collectedAt: 2026-03-17T13:52:00+08:00
category: "算力硬件"
tags: ["NVIDIA", "CPU", "数据中心", "Arm", "GTC"]
featured: true
score: 8.3
scoreReason: "NVIDIA 首次独立销售 CPU 产品，88 核 + 1.2TB/s 内存带宽 + 单域架构的技术突破，对数据中心市场格局有重大影响"
scoreBreakdown: "信息增量:8 内容质量:8 实用价值:9 减分:0"
sourceUrl: "https://www.tomshardware.com/pc-components/gpus/nvidia-unveils-details-of-new-88-core-vera-cpus-positioned-to-compete-with-amd-and-intel-new-vera-cpu-rack-features-256-liquid-cooled-chips-that-deliver-up-to-a-6x-gain-in-cpu-throughput"
sourceType: "other"
sourceName: "Tom's Hardware"
ogImage: ""
---

> **评分 8.3** · 来源：[Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/nvidia-unveils-details-of-new-88-core-vera-cpus-positioned-to-compete-with-amd-and-intel-new-vera-cpu-rack-features-256-liquid-cooled-chips-that-deliver-up-to-a-6x-gain-in-cpu-throughput) · 发布于 2026-03-16
>
> 评分依据：NVIDIA 首次独立销售 CPU，技术规格突破（单域 88 核 + 1.2TB/s 带宽），标志着 GPU 巨头正式进军传统 CPU 市场与 Intel/AMD 竞争

## 要点

NVIDIA 在 GTC 2026 上公布了 **Vera CPU** 的完整技术细节，这款 88 核数据中心处理器声称单线程性能达到市场最快，并推出 256 芯片液冷机架系统，CPU 吞吐量提升 6 倍。这标志着 NVIDIA 正式进入独立 CPU 销售市场，与 Intel、AMD 以及各大云厂商的定制 Arm 处理器直接竞争。

**核心规格：**
- **88 核 176 线程**：相比上代 Grace 的 72 核有所增加
- **IPC 提升 1.5 倍**：采用 NVIDIA 定制的 Arm v9.2-A Olympus 核心（非标准 Neoverse）
- **内存带宽 1.2 TB/s**：相比 Grace 的 546 GB/s 翻倍，平均每核 13.6 GB/s，单核峰值可达 80 GB/s
- **单域架构**：所有 88 核在同一 NUMA 域内，无跨域延迟问题（这是相比 x86 高核数处理器的重大优势）
- **1.5TB LPDDR5 内存**：容量是 Grace 的 3 倍

**技术创新：**
- **空间多线程（Spatial Multi-Threading）**：物理隔离流水线组件（执行单元、缓存、寄存器），两个线程真正同时运行，而非传统 SMT 的时间分片
- **NVLink-C2C 互连**：1.8 TB/s 带宽，是 Grace 的 2 倍，比 PCIe 6.0 快 7 倍
- **定制预取引擎**：针对图数据库分析和 PyTorch 优化

**Vera CPU Rack 系统：**
- 256 个液冷 Vera CPU + 74 个 Bluefield-4 DPU
- 400 TB 总内存，300 TB/s 聚合带宽
- 45,056 线程，支持 22,500 个并发 CPU 环境

**性能对比：**
- 相比 Grace 在脚本、编译、数据分析、图分析、HPC 等负载中提升 1.8x 至 2.2x
- 相比标准 x86 CPU 性能提升 50%，每沙箱性能提升 1.5 倍，能效提升 2 倍

**市场部署：**
- Meta 已确认将部署多代 NVIDIA 纯 CPU 系统
- Oracle、CoreWeave、Nebius、阿里云等云厂商将采用
- Dell、HPE、联想、超微等 OEM 将提供单路/双路服务器
- 2026 年下半年开始交付

## 🤖 AI 点评

NVIDIA 这一步棋的战略意义远超技术本身——从"GPU + 配套 CPU"到"独立销售 CPU"，意味着 NVIDIA 不再满足于 AI 加速器市场，而是要在数据中心全栈硬件上与 Intel/AMD 正面交锋。

单域 88 核架构是真正的差异化优势：x86 高核数处理器普遍采用多 chiplet 设计，NUMA 延迟是绕不开的痛点。Vera 的 1.2TB/s 内存带宽（每核 13.6 GB/s）也远超 Intel Xeon 6 的 8.8-11.7 GB/s。这些特性让它在 AI 推理的 Python 执行、SQL 查询等场景中有天然优势。

更值得关注的是生态信号：Meta 的大规模采用 + 主流 OEM 支持，说明 NVIDIA 不是在做技术 demo，而是在构建可持续的 CPU 产品线。如果 Vera 在 AI 数据中心站稳脚跟，Intel/AMD 在这个高增长市场的份额将面临真正威胁。
