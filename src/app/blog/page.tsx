import React from "react";
import { getDbAndBucket } from "@/lib/mongodb";
import BlogListingClient, { BlogPost } from "./BlogListingClient";

export const revalidate = 300;

function inferCategory(blog: any): string {
  const text = `${blog.title || ""} ${blog.subtitle || blog.subtitleKeywords || ""} ${blog.metaDescription || ""}`.toLowerCase();
  if (
    text.includes("friend") ||
    text.includes("lend") ||
    text.includes("recovery") ||
    text.includes("recover money") ||
    text.includes("debt")
  ) {
    return "Money Recovery";
  }
  if (
    text.includes("consumer") ||
    text.includes("refund") ||
    text.includes("e-commerce") ||
    text.includes("retail")
  ) {
    return "Consumer Rights";
  }
  if (
    text.includes("salary") ||
    text.includes("employer") ||
    text.includes("employee") ||
    text.includes("job") ||
    text.includes("labour") ||
    text.includes("fnf")
  ) {
    return "Employment";
  }
  if (
    text.includes("tenant") ||
    text.includes("deposit") ||
    text.includes("rent") ||
    text.includes("landlord") ||
    text.includes("property")
  ) {
    return "Property";
  }
  if (
    text.includes("b2b") ||
    text.includes("invoice") ||
    text.includes("business") ||
    text.includes("msme") ||
    text.includes("corporate")
  ) {
    return "Business";
  }
  if (
    text.includes("flight") ||
    text.includes("cancel") ||
    text.includes("delay") ||
    text.includes("travel") ||
    text.includes("airline")
  ) {
    return "Travel";
  }
  return "Legal Tips";
}

async function getPublishedBlogs(): Promise<BlogPost[]> {
  try {
    const { db } = await getDbAndBucket("fs");
    const docs = await db
      .collection("blogs")
      .find(
        {},
        {
          projection: {
            title: 1,
            slug: 1,
            subtitle: 1,
            subtitleKeywords: 1,
            metaDescription: 1,
            description: 1,
            content: 1,
            image: 1,
            coverImage: 1,
            date: 1,
            publishedAt: 1,
            createdAt: 1,
            author: 1,
          },
        }
      )
      .sort({ publishedAt: -1, createdAt: -1 })
      .toArray();

    const mapped = docs
      .filter((item: any) => item.slug)
      .map((item: any) => {
        const rawContent = item.description || item.content || "";
        const cleanExcerpt =
          item.metaDescription ||
          item.subtitle ||
          item.subtitleKeywords ||
          (rawContent ? rawContent.replace(/<[^>]*>/g, "").substring(0, 160) + "..." : "");

        const wordCount = rawContent ? rawContent.split(/\s+/).length : 1800;
        const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

        let imageUrl = "/blog_money_recovery.png";
        if (item.image) {
          imageUrl = item.image;
        } else if (item.coverImage?.gridFsId) {
          imageUrl = `/api/blog/image/${item.coverImage.gridFsId}`;
        }

        let formattedDate = "Recent";
        const dateStr = item.date || item.publishedAt || item.createdAt;
        const parsedTime = dateStr ? new Date(dateStr).getTime() : 0;
        if (dateStr) {
          try {
            formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            });
          } catch {
            formattedDate = String(dateStr).split("T")[0];
          }
        }

        return {
          id: String(item._id || item.id),
          category: inferCategory(item),
          title: item.title || "Untitled Article",
          date: formattedDate,
          rawTime: !isNaN(parsedTime) ? parsedTime : 0,
          readTime: `${readTimeMinutes} min read`,
          image: imageUrl,
          excerpt: cleanExcerpt,
          slug: item.slug,
          author: "Anuj Anand Malik",
        };
      });

    mapped.sort((a, b) => b.rawTime - a.rawTime);

    return mapped.map(({ rawTime, ...rest }) => rest);
  } catch (error) {
    console.error("Error fetching SSR blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const initialBlogs = await getPublishedBlogs();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Legal Recovery Blog | Money Recovery, Employment & Consumer Rights in India",
    url: "https://www.legalrecovery.in/blog",
    description:
      "Expert legal articles on recovering money, unpaid salary, FNF settlement, consumer refunds, security deposits, and legal notices in India.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: initialBlogs.length,
      itemListElement: initialBlogs.slice(0, 50).map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://www.legalrecovery.in/blog/${b.slug}`,
        name: b.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BlogListingClient initialBlogs={initialBlogs} />
    </>
  );
}
