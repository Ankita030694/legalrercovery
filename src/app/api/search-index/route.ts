import { NextResponse } from "next/server";
import pages from "@/data/search-index.json";

// Static page index (built by scripts/build-search-index.mjs) plus every published blog post.
// Rendered once and refreshed hourly, or on demand when a post is published (revalidate-blog.ts).
export const revalidate = 3600;

export interface SearchEntry {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  type: string;
}

function asStrings(value: unknown): string[] {
  if (Array.isArray(value)) return value.filter((v): v is string => typeof v === "string");
  if (typeof value === "string") return value.split(",").map((s) => s.trim()).filter(Boolean);
  return [];
}

async function getBlogEntries(): Promise<SearchEntry[]> {
  if (!process.env.MONGODB_URI) return [];
  try {
    const { getDbAndBucket } = await import("@/lib/mongodb");
    const { db } = await getDbAndBucket("fs");
    const docs = await db
      .collection("blogs")
      .find(
        { slug: { $exists: true, $ne: "" } },
        { projection: { slug: 1, title: 1, metaDescription: 1, subtitle: 1, tags: 1, keywords: 1, category: 1 } }
      )
      .toArray();

    return docs.map((doc) => ({
      url: `/blog/${doc.slug}`,
      title: doc.title || "Untitled guide",
      description: doc.metaDescription || doc.subtitle || "",
      keywords: [...asStrings(doc.tags), ...asStrings(doc.keywords), ...asStrings(doc.category)].slice(0, 12),
      type: "Blog",
    }));
  } catch (error) {
    console.error("search-index: failed to fetch blog posts", error);
    return [];
  }
}

export async function GET() {
  const blogs = await getBlogEntries();
  const entries: SearchEntry[] = [...(pages as SearchEntry[]), ...blogs];
  return NextResponse.json(entries);
}
