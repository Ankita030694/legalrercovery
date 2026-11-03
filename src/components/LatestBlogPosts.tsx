import Link from "next/link";

interface LatestPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string | null;
}

const POST_LIMIT = 8;

async function getLatestPosts(): Promise<LatestPost[]> {
  if (!process.env.MONGODB_URI) {
    return [];
  }

  try {
    const { getDbAndBucket } = await import("@/lib/mongodb");
    const { db } = await getDbAndBucket("fs");

    const docs = await db
      .collection("blogs")
      .find(
        { slug: { $exists: true, $ne: "" } },
        { projection: { slug: 1, title: 1, metaDescription: 1, subtitle: 1, publishedAt: 1, createdAt: 1 } }
      )
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(POST_LIMIT)
      .toArray();

    return docs.map((doc: any) => ({
      slug: doc.slug,
      title: doc.title || "Untitled guide",
      excerpt: doc.metaDescription || doc.subtitle || "",
      publishedAt: doc.publishedAt || doc.createdAt || null,
    }));
  } catch (error) {
    console.error("LatestBlogPosts: failed to fetch posts", error);
    return [];
  }
}

function formatDate(value: string | null): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

// Server-rendered so crawlers get plain <a href> links from the homepage to the newest posts.
export default async function LatestBlogPosts() {
  const posts = await getLatestPosts();
  if (posts.length === 0) return null;

  return (
    <section
      aria-labelledby="latest-guides-heading"
      className="w-full max-w-7xl mx-auto px-4 md:px-0 mt-12 md:mt-24"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4 mb-6">
        <div>
          <h2 id="latest-guides-heading" className="text-2xl md:text-3xl font-black text-[#111827]">
            Latest Recovery Guides
          </h2>
          <p className="mt-1 text-sm text-[#4B5563]">
            New, step-by-step guides on recovering salary, deposits, loans and refunds.
          </p>
        </div>
        <Link href="/blog" className="shrink-0 text-sm font-bold text-[#DC2626] hover:text-[#B91C1C]">
          All guides →
        </Link>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => {
          const date = formatDate(post.publishedAt);
          return (
            <li key={post.slug} className="rounded-xl border border-[#E5E7EB] bg-white p-5 hover:border-[#DC2626]/40 transition-colors">
              <Link href={`/blog/${post.slug}`} className="block">
                {date && (
                  <time dateTime={post.publishedAt ?? undefined} className="text-xs font-semibold text-[#6B7280]">
                    {date}
                  </time>
                )}
                <h3 className="mt-1 text-[15px] font-bold leading-snug text-[#111827] line-clamp-3">{post.title}</h3>
                {post.excerpt && (
                  <p className="mt-2 text-[13px] leading-relaxed text-[#4B5563] line-clamp-3">{post.excerpt}</p>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
