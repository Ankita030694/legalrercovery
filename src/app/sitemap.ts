import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/property-and-builder-disputes", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/recovery-of-salary-and-employment-dues", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/airline-and-travel-recoveries", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/refunds-and-consumer-complaints", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/vendor-and-invoice-recoveries", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/security-deposits-and-rental-recoveries", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/recovery-of-freelancer-and-client-payments", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/recovery-of-money-from-a-friend", changeFrequency: "weekly", priority: 0.85 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/recovery", changeFrequency: "weekly", priority: 0.9 },
  { path: "/recovery/unpaid-salary", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/pending-salary-from-employer", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/fnf-settlement", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/outstanding-dues-from-employer", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/security-deposit", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/rental-security-deposit", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/office-security-deposit", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/unpaid-incentives", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/unpaid-bonus", changeFrequency: "weekly", priority: 0.8 },
];

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
  if (!process.env.MONGODB_URI) {
    return [];
  }

  try {
    const { getDbAndBucket } = await import("@/lib/mongodb");
    const { db } = await getDbAndBucket("fs");

    const blogs = await db
      .collection("blogs")
      .find(
        { slug: { $exists: true, $ne: "" } },
        { projection: { slug: 1, updatedAt: 1, publishedAt: 1, createdAt: 1 } }
      )
      .sort({ publishedAt: -1 })
      .toArray();

    return blogs.map((blog) => {
      const lastModified = new Date(
        blog.updatedAt || blog.publishedAt || blog.createdAt || Date.now()
      );

      return {
        url: `${SITE_URL}/blog/${blog.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error("Sitemap: failed to fetch blog URLs", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = await getBlogEntries();

  return [...staticEntries, ...blogEntries];
}
