# AI Feed

📡 AI 信息流聚合站点 — 每日精选 AI 领域动态、论文、开源项目与行业趋势。

🌐 **站点**: [feed.astralor.com](https://feed.astralor.com)

## 信息来源

| Tier | 来源 | 频率 | 过滤 |
|------|------|------|------|
| T1 | Anthropic / OpenAI / DeepMind / Meta AI Blog | 每天 | 全量 |
| T2 | Hacker News / Reddit / GitHub Trending | 每 2h | AI 打分 |
| T3 | arXiv (cs.AI, cs.CL, cs.LG) | 每天 | AI 打分 |
| T4 | 机器之心 / 量子位 / 36kr | 每天 2 次 | AI 打分 |
| T5 | Web Search 热点 | 每 3h | AI 打分 |

## 打分机制

每条素材由 Claude Sonnet 4.6 评分（0-10）：
- **≥ 8.0** — 🔥 重点关注
- **≥ 6.0** — 入库展示
- **< 6.0** — 不入库

评分维度：技术深度 · 新颖性 · 相关性 · 影响力

## 推送节奏

工作日 6 次 Discord 推送：`09:00` `11:00` `14:00` `16:00` `19:00` `21:00`

## 技术栈

- **站点**: [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) (AstroPaper 主题)
- **采集**: [OpenClaw](https://openclaw.ai) Skill + Cron
- **部署**: Cloudflare Pages
- **搜索**: [Pagefind](https://pagefind.app)

## 本地开发

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
```

## License

Content © 2026 [Astralor](https://astralor.com). Site theme based on [AstroPaper](https://github.com/satnaing/astro-paper) (MIT).
