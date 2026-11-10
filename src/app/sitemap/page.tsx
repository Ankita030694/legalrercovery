import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "HTML Sitemap & Legal Directory | LegalRecovery India",
  description:
    "Directory of legal money recovery services, statutory notice guides, pre-litigation filing categories, and e-commerce dispute rails in India.",
  keywords: [
    "legal recovery sitemap",
    "send legal notice directory",
    "money recovery sitemap india",
    "ecommerce legal notice complaints",
    "statutory notice categories",
    "pre litigation recovery guides"
  ],
  alternates: {
    canonical: `${SITE_URL}/sitemap`,
  },
  openGraph: {
    title: "HTML Sitemap & Legal Directory | LegalRecovery India",
    description:
      "Explore all legal notice filing categories, consumer refund rails, salary recovery options, and regional recovery centers across India.",
    url: `${SITE_URL}/sitemap`,
    type: "website",
    siteName: "LegalRecovery",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "HTML Sitemap & Legal Directory | LegalRecovery India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Sitemap & Legal Directory | LegalRecovery India",
    description:
      "Explore all legal notice filing categories, consumer refund rails, salary recovery options, and regional recovery centers across India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
};

export default function SitemapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/sitemap#webpage`,
        url: `${SITE_URL}/sitemap`,
        name: "HTML Sitemap & Legal Directory | LegalRecovery India",
        description:
          "Complete index of all legal money recovery categories, pre-litigation statutory guides, and e-commerce dispute resolution rails in India.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "LegalRecovery",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/sitemap#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sitemap",
            item: `${SITE_URL}/sitemap`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SitemapClient />
    </>
  );
}

