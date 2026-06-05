import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import { getDbAndBucket } from "@/lib/mongodb";
import { SITE_URL } from "@/lib/site";
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

  let imageUrl = "/blog_money_recovery.png";
  if (blog.image) {
    imageUrl = blog.image;
  } else if (blog.coverImage?.gridFsId) {
    imageUrl = `/api/blog/image/${blog.coverImage.gridFsId}`;
  }
  const absoluteImageUrl = imageUrl.startsWith("http") ? imageUrl : `${SITE_URL}${imageUrl}`;

  return {
    title: `${metaTitle} | LegalRecovery`,
    description: metaDescription,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: `${metaTitle} | LegalRecovery`,
      description: metaDescription,
      type: "article",
      images: [
        {
          url: absoluteImageUrl
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

  const postUrl = `${SITE_URL}/blog/${blog.slug}`;
  const absoluteImageUrl = blog.image
    ? (blog.image.startsWith("http") ? blog.image : `${SITE_URL}${blog.image}`)
    : `${SITE_URL}/blog_money_recovery.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "headline": blog.title,
    "description": blog.metaDescription || blog.subtitle || "",
    "image": absoluteImageUrl,
    "datePublished": blogDoc.publishedAt || blogDoc.createdAt || new Date().toISOString(),
    "dateModified": blogDoc.updatedAt || blogDoc.publishedAt || blogDoc.createdAt || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": blog.author || "Team LegalRecovery",
      "url": `${SITE_URL}/about`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "LegalRecovery",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/lrlogo.svg`,
      },
    },
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  // Reviews must live on a Google-supported type (LegalService / LocalBusiness),
  // NOT on BlogPosting, otherwise the validator rejects them.
  const ratingSum = reviews.reduce((sum, r) => sum + r.rating, 0);
  const avgRating = reviews.length > 0 ? Number((ratingSum / reviews.length).toFixed(1)) : 5;

  const reviewSchema = reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "LegalRecovery",
    "image": `${SITE_URL}/lrlogo.svg`,
    "url": SITE_URL,
    "telephone": "+91-8700343611",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": "5",
        "worstRating": "1",
      },
      "author": {
        "@type": "Person",
        "name": r.name,
      },
      "reviewBody": r.review,
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}
      <BlogDetailClient
        blog={blog}
        faqs={faqs}
        reviews={reviews}
        relatedBlogs={relatedBlogs}
      />
    </>
  );
}

