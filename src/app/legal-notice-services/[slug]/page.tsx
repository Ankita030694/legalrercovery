import { notFound } from "next/navigation";
import { Metadata } from "next";
import { noticeLocationData, getNoticeLocationBySlug } from "../locationData";
import LegalNoticeClient from "./LegalNoticeClient";

// Generate all static params at build time for SSG
export async function generateStaticParams() {
  return noticeLocationData.map((loc) => ({
    slug: loc.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getNoticeLocationBySlug(slug);
  if (!location) return { title: "Not Found" };

  return {
    title: `${location.title} | Legal Recovery`,
    description: location.description,
    keywords: [
      `legal notice ${location.name}`,
      `send legal notice ${location.name}`,
      `advocate legal notice ${location.name}`,
      `legal notice for unpaid dues ${location.name}`,
      `legal notice to landlord ${location.name}`,
      `legal notice to employer ${location.name}`,
      `legal notice for cheque bounce ${location.name}`,
      "send legal notice online india",
      "legal notice drafting services",
      "advocate drafted legal notice",
    ],
    alternates: {
      canonical: `https://www.legalrecovery.in/legal-notice-services/${location.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.description,
      url: `https://www.legalrecovery.in/legal-notice-services/${location.slug}`,
      type: "website",
      images: [
        {
          url: "/services/3.png",
          width: 1200,
          height: 630,
          alt: `Legal Notice Services in ${location.name}`,
        },
      ],
    },
  };
}

export default async function LegalNoticeBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getNoticeLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <LegalNoticeClient location={location} />;
}
