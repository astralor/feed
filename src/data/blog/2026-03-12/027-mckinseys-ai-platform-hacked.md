---
title: "研究人员攻破麦肯锡 AI 平台：暴露 LLM 系统的系统性安全漏洞"
description: "安全研究人员成功入侵麦肯锡内部 AI 平台，发现提示注入、权限越界等多重漏洞，揭示企业级 AI 部署的严峻安全形势。"
pubDatetime: 2026-03-12T16:00:00+08:00
tags: [security, llm, prompt-injection, enterprise-ai, red-team]
featured: false
score: 7.5
sourceUrl: "https://codewall.ai/blog/how-we-hacked-mckinseys-ai-platform"
sourceType: "hacker-news"
sourceName: "Hacker News"
---

一篇 HN 热帖（431 分）记录了安全研究人员如何系统性地攻破麦肯锡的企业 AI 平台，揭示了当前"AI 应用化"浪潮下被忽视的严重安全隐患。

**发现的主要漏洞**

- **提示注入（Prompt Injection）**：攻击者可通过构造特殊输入，让 AI 泄露内部系统提示或执行未授权操作
- **权限越界**：AI 代理可被诱导访问原本无权查看的数据
- **间接注入**：通过用户上传的文档污染对话上下文

**攻击路径**

研究人员首先通过公开渠道发现平台入口，随后利用 LLM 本身对自然语言的开放性逐步扩大权限。整个过程无需传统漏洞利用，仅凭语言技巧即可完成。

**行业警示**

麦肯锡作为全球顶级咨询公司，内部 AI 基础设施也未能幸免。这表明企业 AI 安全不只是"提示词写好一点"的问题，需要架构层面的隔离与防护——包括沙箱、权限最小化、输出校验等。

随着 AI Agent 获得越来越多系统权限，此类攻击的危害将成倍放大。
