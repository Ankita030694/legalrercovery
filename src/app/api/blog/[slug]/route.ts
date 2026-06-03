import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

// 1. GET /api/blog/[slug] - Publicly fetch a single blog post
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { db } = await getDbAndBucket("fs");

    // Highly performant O(1) index search on slug field
    let blog = await db.collection("blogs").findOne({ slug: slug.toLowerCase() });

    // Fallback: If not found and slug is a valid MongoDB ObjectId, fetch by _id
    if (!blog && ObjectId.isValid(slug)) {
      blog = await db.collection("blogs").findOne({ _id: new ObjectId(slug) });
    }

    if (!blog) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    console.error("Fetch Single Blog API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// 2. PUT /api/blog/[slug] - Securely update a blog post
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  // Validate NextAuth session
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug } = await params;
    const body = await req.json();

    const {
      title,
      newSlug,
      subtitleKeywords,
      metaTitle,
      publishedAt,
      coverImage,
      metaDescription,
      author,
      faqs,
      reviewSnippets,
      content,
    } = body;

    const { db } = await getDbAndBucket("fs");

    // Verify blog post exists
    const existing = await db.collection("blogs").findOne({ slug: slug.toLowerCase() });
    if (!existing) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    // Determine target slug (allow updating slug)
    let targetSlug = existing.slug;
    if (newSlug && newSlug.toLowerCase() !== existing.slug) {
      const cleanNewSlug = newSlug.toLowerCase().replace(/[^a-z0-9_-]/g, "-").replace(/-+/g, "-");
      // Check for slug duplicate
      const duplicate = await db.collection("blogs").findOne({ slug: cleanNewSlug });
      if (duplicate) {
        return NextResponse.json(
          { error: `Slug '${cleanNewSlug}' is already in use by another blog post.` },
          { status: 409 }
        );
      }
      targetSlug = cleanNewSlug;
    }

    // Prepare update payload
    const updateDoc: any = {};
    if (title) updateDoc.title = title;
    updateDoc.slug = targetSlug;
    if (subtitleKeywords !== undefined) updateDoc.subtitleKeywords = subtitleKeywords;
    if (metaTitle !== undefined) updateDoc.metaTitle = metaTitle;
    if (metaDescription !== undefined) updateDoc.metaDescription = metaDescription;
    if (publishedAt) updateDoc.publishedAt = publishedAt;
    if (author) updateDoc.author = author;
    if (content) updateDoc.content = content;

    if (coverImage?.gridFsId) {
      updateDoc.coverImage = {
        gridFsId: coverImage.gridFsId,
        filename: coverImage.filename || "image.jpg",
        contentType: coverImage.contentType || "image/jpeg",
      };
    }

    if (Array.isArray(faqs)) {
      updateDoc.faqs = faqs.map((f: any) => ({
        question: f.question || "",
        answer: f.answer || "",
      }));
    }

    if (Array.isArray(reviewSnippets)) {
      updateDoc.reviewSnippets = reviewSnippets.map((r: any) => ({
        reviewerName: r.reviewerName || "Anonymous",
        rating: typeof r.rating === "number" ? Math.min(5, Math.max(1, r.rating)) : 5,
        reviewText: r.reviewText || "",
        reviewDate: r.reviewDate || new Date().toLocaleDateString(),
      }));
    }

    updateDoc.updatedAt = new Date().toISOString();

    await db.collection("blogs").updateOne(
      { slug: slug.toLowerCase() },
      { $set: updateDoc }
    );

    const updatedBlog = await db.collection("blogs").findOne({ slug: targetSlug });

    return NextResponse.json({
      success: true,
      message: "Blog post successfully updated",
      data: updatedBlog,
    });
  } catch (error: any) {
    console.error("Update Blog API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// 3. DELETE /api/blog/[slug] - Securely delete a blog post & its GridFS image
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  // Validate NextAuth session
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug } = await params;
    const { db, bucket } = await getDbAndBucket("fs");

    // Find blog to retrieve linked GridFS image
    const blog = await db.collection("blogs").findOne({ slug: slug.toLowerCase() });
    if (!blog) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    // Attempt to delete linked image in GridFS
    const gridFsId = blog.coverImage?.gridFsId;
    if (gridFsId && ObjectId.isValid(gridFsId)) {
      try {
        await bucket.delete(new ObjectId(gridFsId));
      } catch (gridFsError) {
        // Log error but proceed to delete blog document to prevent orphaned documents
        console.warn(`GridFS deletion failed for image ID ${gridFsId}:`, gridFsError);
      }
    }

    // Delete blog document
    await db.collection("blogs").deleteOne({ slug: slug.toLowerCase() });

    return NextResponse.json({
      success: true,
      message: "Blog post and linked cover image successfully deleted",
    });
  } catch (error: any) {
    console.error("Delete Blog API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
