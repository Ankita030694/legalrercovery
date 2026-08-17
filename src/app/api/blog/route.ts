import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

// Ensure database indexes are created
async function ensureIndexes(db: any) {
  try {
    await db.collection("blogs").createIndex({ slug: 1 }, { unique: true });
    await db.collection("blogs").createIndex({ publishedAt: -1 });
  } catch (error) {
    console.error("Index creation error:", error);
  }
}

// 1. GET /api/blog - Publicly list all blogs
export async function GET(req: NextRequest) {
  try {
    const { db } = await getDbAndBucket("fs");
    await ensureIndexes(db);

    // Fetch all blogs, sorting by newest publication first.
    const blogs = await db
      .collection("blogs")
      .find({})
      .sort({ publishedAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, count: blogs.length, data: blogs });
  } catch (error: any) {
    console.error("Fetch Blogs API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// 2. POST /api/blog - Securely create a new blog
export async function POST(req: NextRequest) {
  // Validate NextAuth session
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();

    const {
      title,
      slug,
      subtitleKeywords,
      metaTitle,
      publishedAt,
      coverImage,
      metaDescription,
      author,
      faqs,
      reviewSnippets,
      content,
      popularSearches,
      infographicImage,
    } = body;

    // Validate essential fields
    if (!title || !slug || !content || !coverImage?.gridFsId) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug, content, and coverImage.gridFsId are mandatory." },
        { status: 400 }
      );
    }

    // Standardize slug
    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9_-]/g, "-").replace(/-+/g, "-");

    const { db } = await getDbAndBucket("fs");
    await ensureIndexes(db);

    // Check for slug duplicate
    const existing = await db.collection("blogs").findOne({ slug: cleanSlug });
    if (existing) {
      return NextResponse.json(
        { error: `A blog post with slug '${cleanSlug}' already exists.` },
        { status: 409 }
      );
    }

    let formattedInfographicImage = null;
    if (infographicImage?.gridFsId) {
      formattedInfographicImage = {
        gridFsId: infographicImage.gridFsId,
        filename: infographicImage.filename || "infographic.png",
        contentType: infographicImage.contentType || "image/png",
      };
    } else if (typeof infographicImage === "string" && infographicImage.trim()) {
      formattedInfographicImage = infographicImage;
    }

    const blogDoc: any = {
      title,
      slug: cleanSlug,
      subtitleKeywords: subtitleKeywords || "",
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || "",
      publishedAt: publishedAt || new Date().toISOString(),
      author: author || (session.user?.name || "Admin"),
      coverImage: {
        gridFsId: coverImage.gridFsId,
        filename: coverImage.filename || "image.jpg",
        contentType: coverImage.contentType || "image/jpeg",
      },
      infographicImage: formattedInfographicImage,
      popularSearches: Array.isArray(popularSearches) ? popularSearches : [],
      faqs: Array.isArray(faqs) ? faqs.map((f: any) => ({
        question: f.question || "",
        answer: f.answer || "",
      })) : [],
      reviewSnippets: Array.isArray(reviewSnippets) ? reviewSnippets.map((r: any) => ({
        reviewerName: r.reviewerName || "Anonymous",
        rating: typeof r.rating === "number" ? Math.min(5, Math.max(1, r.rating)) : 5,
        reviewText: r.reviewText || "",
        reviewDate: r.reviewDate || new Date().toLocaleDateString(),
      })) : [],
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await db.collection("blogs").insertOne(blogDoc);

    return NextResponse.json({
      success: true,
      message: "Blog post successfully created",
      blogId: result.insertedId.toString(),
      data: { ...blogDoc, _id: result.insertedId.toString() },
    });
  } catch (error: any) {
    console.error("Create Blog API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
