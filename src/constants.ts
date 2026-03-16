import type { Props } from "astro";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/astralor/feed",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
] as const;

// Category display config
export const CATEGORIES = [
  { key: "行业格局", slug: "industry", label: "行业格局", color: "#3b82f6" },
  { key: "工程实践", slug: "engineering", label: "工程实践", color: "#8b5cf6" },
  { key: "模型动态", slug: "models", label: "模型动态", color: "#f59e0b" },
  { key: "学术前沿", slug: "research", label: "学术前沿", color: "#06b6d4" },
  { key: "深度观点", slug: "opinions", label: "深度观点", color: "#ef4444" },
] as const;

export const CATEGORY_LABELS: Record<string, { label: string; color: string }> =
  Object.fromEntries(CATEGORIES.map(c => [c.key, { label: c.label, color: c.color }]));

// Source type display names and colors
export const SOURCE_LABELS: Record<string, { label: string; color: string }> = {
  "anthropic-blog": { label: "Anthropic", color: "#d97706" },
  "openai-blog": { label: "OpenAI", color: "#10b981" },
  "deepmind-blog": { label: "DeepMind", color: "#3b82f6" },
  "meta-ai-blog": { label: "Meta AI", color: "#6366f1" },
  "hacker-news": { label: "HN", color: "#f97316" },
  "reddit": { label: "Reddit", color: "#ef4444" },
  "github-trending": { label: "GitHub", color: "#8b5cf6" },
  "arxiv": { label: "arXiv", color: "#06b6d4" },
  "web-search": { label: "Web", color: "#64748b" },
  "rss": { label: "RSS", color: "#84cc16" },
  "jiqizhixin": { label: "机器之心", color: "#e11d48" },
  "qbitai": { label: "量子位", color: "#0ea5e9" },
  "36kr": { label: "36kr", color: "#22c55e" },
  "other": { label: "Other", color: "#94a3b8" },
};
