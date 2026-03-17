import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      // Feed-specific fields
      category: z.enum([
        "模型动态",
        "工程实践",
        "学术前沿",
        "行业动态",
        "深度观点",
        "算力硬件",
        "政策伦理",
      ]).optional(),
      score: z.number().min(0).max(10).optional(),
      sourceUrl: z.string().url().optional(),
      sourceType: z.enum([
        "anthropic-blog",
        "openai-blog",
        "deepmind-blog",
        "meta-ai-blog",
        "hacker-news",
        "reddit",
        "github-trending",
        "arxiv",
        "techcrunch",
        "wired",
        "huggingface-blog",
        "mit-tech-review",
        "simon-willison",
        "web-search",
        "rss",
        "jiqizhixin",
        "qbitai",
        "36kr",
        "other",
      ]).optional(),
      sourceName: z.string().optional(),
      collectedAt: z.date().optional(),
      scoreReason: z.string().optional(),
    }),
});

export const collections = { blog };
