import { NextRequest, NextResponse } from "next/server";
import { revalidateBlogSurfaces } from "@/lib/revalidate-blog";

// POST /api/revalidate — called by publishing scripts that write blog posts straight to MongoDB.
// Body: { "slug": "post-slug" } (optional). Header: x-api-key: <ADMIN_API_KEY>.
export async function POST(req: NextRequest) {
  const expectedKey = process.env.ADMIN_API_KEY;
  if (!expectedKey) {
    return NextResponse.json({ error: "Revalidation is not configured" }, { status: 503 });
  }
  if (req.headers.get("x-api-key") !== expectedKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let slug: string | undefined;
  try {
    const body = await req.json();
    if (typeof body?.slug === "string" && /^[a-z0-9_-]+$/.test(body.slug)) {
      slug = body.slug;
    }
  } catch {
    // Empty or non-JSON body: revalidate the listing surfaces only.
  }

  revalidateBlogSurfaces([slug]);

  return NextResponse.json({
    success: true,
    revalidated: ["/sitemap.xml", "/", "/blog", ...(slug ? [`/blog/${slug}`] : [])],
  });
}
