import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import { getDbAndBucket } from "@/lib/mongodb";
import BlogDetailClient, { Blog, FAQ, Review } from "./BlogDetailClient";

function mapDatabaseBlog(item: any): Blog {
  const rawContent = item.description || item.content || "";
  
  let imageUrl = "/blog_money_recovery.png";
  if (item.image) {
    imageUrl = item.image;
  } else if (item.coverImage?.gridFsId) {
    imageUrl = `/api/blog/image/${item.coverImage.gridFsId}`;
  }

  let formattedDate = "Recent";
  const dateStr = item.date || item.publishedAt || item.createdAt;
  if (dateStr) {
    try {
      formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      });
    } catch (e) {
      formattedDate = dateStr.split("T")[0];
    }
  }

  return {
    id: String(item._id || item.id),
    title: item.title || "Untitled Article",
    subtitle: item.subtitle || item.subtitleKeywords || "",
    description: rawContent,
    date: formattedDate,
    image: imageUrl,
    slug: item.slug || "",
    author: "Team LegalRecovery",
    created: item.created || (item.createdAt ? new Date(item.createdAt).getTime() : Date.now()),
    metaTitle: item.metaTitle || item.title || "",
    metaDescription: item.metaDescription || item.subtitle || item.subtitleKeywords || ""
  };
}

function mapFaqs(item: any): FAQ[] {
  const rawFaqs = item.faqs || [];
  return rawFaqs.map((f: any, idx: number) => ({
    id: String(f._id || f.id || idx),
    question: f.question || "",
    answer: f.answer || ""
  }));
}

function mapReviews(item: any): Review[] {
  const rawReviews = item.reviews || item.reviewSnippets || [];
  return rawReviews.map((r: any, idx: number) => ({
    id: String(r._id || r.id || idx),
    name: r.name || r.reviewerName || "Anonymous",
    rating: typeof r.rating === "number" ? r.rating : 5,
    review: r.review || r.reviewText || ""
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const { db } = await getDbAndBucket("fs");
  
  let blog = await db.collection("blogs").findOne({ slug: slug.toLowerCase() });

  if (!blog && ObjectId.isValid(slug)) {
    blog = await db.collection("blogs").findOne({ _id: new ObjectId(slug) });
  }

  if (!blog) {
    return {
      title: "Article Not Found | LegalRecovery",
      description: "The requested legal article could not be found."
    };
  }

  const metaTitle = blog.metaTitle || blog.title || "Legal Article";
  const metaDescription = blog.metaDescription || blog.subtitle || blog.subtitleKeywords || "";

  return {
    title: `${metaTitle} | LegalRecovery`,
    description: metaDescription,
    openGraph: {
      title: `${metaTitle} | LegalRecovery`,
      description: metaDescription,
      type: "article",
      images: [
        {
          url: blog.image || (blog.coverImage?.gridFsId ? `/api/blog/image/${blog.coverImage.gridFsId}` : "/logo.png")
        }
      ]
    }
  };
}

export default async function BlogDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { db } = await getDbAndBucket("fs");

  let blogDoc = await db.collection("blogs").findOne({ slug: slug.toLowerCase() });

  // If not found by slug, check if the parameter is a valid MongoDB ObjectId
  if (!blogDoc && ObjectId.isValid(slug)) {
    blogDoc = await db.collection("blogs").findOne({ _id: new ObjectId(slug) });
    if (blogDoc && blogDoc.slug) {
      redirect(`/blog/${blogDoc.slug}`);
    }
  }

  if (!blogDoc) {
    notFound();
  }

  const blog = mapDatabaseBlog(blogDoc);
  const faqs = mapFaqs(blogDoc);
  const reviews = mapReviews(blogDoc);

  // Fetch up to 2 other related blogs (excluding the current one) to display under "Related Articles"
  const relatedDocs = await db
    .collection("blogs")
    .find({ slug: { $ne: blogDoc.slug } })
    .limit(2)
    .toArray();

  const relatedBlogs = relatedDocs.map(mapDatabaseBlog);

  return (
    <BlogDetailClient
      blog={blog}
      faqs={faqs}
      reviews={reviews}
      relatedBlogs={relatedBlogs}
    />
  );
}
