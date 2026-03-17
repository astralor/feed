import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import getSortedPosts from "@/utils/getSortedPosts";
import { getPath } from "@/utils/getPath";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sorted = getSortedPosts(posts);

  const articles = sorted.map(({ data, id, filePath }) => ({
    slug: getPath(id, filePath),
    title: data.title,
    description: data.description || "",
    pubDatetime: data.pubDatetime.toISOString(),
    collectedAt: data.collectedAt ? data.collectedAt.toISOString() : null,
    category: data.category || "",
    score: data.score ?? null,
    scoreReason: data.scoreReason || "",
    sourceName: data.sourceName || "",
    sourceUrl: data.sourceUrl || "",
    tags: data.tags || [],
  }));

  return new Response(JSON.stringify(articles), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
    },
  });
};
