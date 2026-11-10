import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import HomeClient from "./HomeClient";
import LatestBlogPosts from "@/components/LatestBlogPosts";

// Regenerated hourly, and on demand when a post is published (see /api/revalidate).
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Legal Recovery India – Recover Your Money Legally Online",
  description:
    "Recover unpaid money, salary, refunds, deposits, invoices, and consumer claims legally through India's trusted legal platform. Start your claim online.",
  alternates: {
    canonical: `${SITE_URL}`,
  },
  openGraph: {
    title: "Legal Recovery India – Recover Your Money Legally Online",
    description:
      "Recover unpaid money, salary, refunds, deposits, invoices, and consumer claims legally through India's trusted legal platform. Start your claim online.",
    url: `${SITE_URL}/`,
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Legal Recovery India – Recover Your Money Legally Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Recovery India – Recover Your Money Legally Online",
    description:
      "Recover unpaid money, salary, refunds, deposits, invoices, and consumer claims legally through India's trusted legal platform. Start your claim online.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
};

export default function Home() {
  return <HomeClient latestPosts={<LatestBlogPosts />} />;
}
