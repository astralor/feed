#!/usr/bin/env python3
import json
import re
from urllib.parse import urlparse, urlunparse
from datetime import datetime

def normalize_url(url):
    """归一化 URL：移除 fragment、统一 scheme"""
    if not url:
        return None
    parsed = urlparse(url)
    # 移除 fragment (#xxx)
    normalized = urlunparse((
        parsed.scheme or 'https',
        parsed.netloc,
        parsed.path,
        parsed.params,
        parsed.query,
        ''  # 移除 fragment
    ))
    return normalized.rstrip('/')

# 读取 seen.json
with open('/data/code/github.com/astralor/feed/data/seen.json', 'r') as f:
    seen = json.load(f)

seen_set = set(seen)

# 手动提取的 URL 列表（从采集结果中提取）
raw_urls = [
    # GitHub Trending
    "https://github.com/obra/superpowers",
    "https://github.com/codecrafters-io/build-your-own-x",
    "https://github.com/abhigyanpatwari/GitNexus",
    "https://github.com/langchain-ai/deepagents",
    "https://github.com/jarrodwatts/claude-hud",
    "https://github.com/cloudflare/workerd",
    
    # TechCrunch AI
    "https://techcrunch.com/2026/03/17/mistral-forge-nvidia-gtc-build-your-own-ai-enterprise/",
    "https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/",
    "https://techcrunch.com/2026/03/17/the-pentagon-is-developing-alternatives-to-anthropic-report-says/",
    "https://techcrunch.com/2026/03/17/world-launches-tool-to-verify-humans-behind-ai-shopping-agents/",
    "https://techcrunch.com/2026/03/16/nvidias-version-of-openclaw-could-solve-its-biggest-problem-security/",
    
    # Wired AI
    "https://www.wired.com/story/department-of-defense-responds-to-anthropic-lawsuit/",
    "https://www.wired.com/story/china-is-going-all-in-on-openclaw/",
    
    # HuggingFace Blog
    "https://huggingface.co/blog/nvidia/nemotron-3-nano-4b",
    "https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026",
    "https://huggingface.co/blog/Hcompany/holotron-12b",
    
    # MIT Tech Review
    "https://www.technologyreview.com/2026/03/17/1134351/the-pentagon-is-planning-for-ai-companies-to-train-on-classified-data-defense-official-says/",
    "https://www.technologyreview.com/2026/03/16/1134315/where-openais-technology-could-show-up-in-iran/",
    
    # Simon Willison
    "https://simonwillison.net/2026/Mar/17/mini-and-nano/",
    "https://simonwillison.net/2026/Mar/16/mistral-small-4/",
    "https://simonwillison.net/2026/Mar/16/codex-subagents/",
    
    # 36kr
    "https://36kr.com/p/2182025084516354",
    "https://36kr.com/p/3725086033590916",
    "https://36kr.com/p/3715653109200263",
    
    # 动态搜索
    "https://thediplomat.com/2026/03/why-chinas-openclaw-mania-is-more-than-just-a-tech-craze/",
    "https://www.reuters.com/world/asia-pacific/alibaba-launches-new-ai-agent-platform-enterprises-2026-03-17/",
    "https://www.reuters.com/business/media-telecom/mystery-ai-model-has-developers-buzzing-is-this-deepseeks-latest-blockbuster-2026-03-18/",
]

# 归一化并去重
candidates = []
new_seen = []

for url in raw_urls:
    normalized = normalize_url(url)
    if normalized and normalized not in seen_set:
        candidates.append({
            "url": normalized,
            "title": "",
            "source": "feed-collect",
            "collected_at": datetime.now().isoformat()
        })
        new_seen.append(normalized)
        seen_set.add(normalized)

print(f"采集到 {len(raw_urls)} 个 URL")
print(f"去重后新增 {len(candidates)} 条候选")

# 追加到 candidates.json
candidates_path = '/data/code/github.com/astralor/feed/data/candidates.json'
try:
    with open(candidates_path, 'r') as f:
        existing = json.load(f)
except FileNotFoundError:
    existing = []

existing.extend(candidates)

with open(candidates_path, 'w') as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)

# 更新 seen.json
with open('/data/code/github.com/astralor/feed/data/seen.json', 'w') as f:
    json.dump(sorted(list(seen_set)), f, indent=2, ensure_ascii=False)

print(f"已更新 candidates.json (总计 {len(existing)} 条)")
print(f"已更新 seen.json (总计 {len(seen_set)} 条)")
