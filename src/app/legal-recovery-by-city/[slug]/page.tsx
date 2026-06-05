import { notFound } from "next/navigation";
import { Metadata } from "next";
import { locationData, getLocationBySlug } from "../locationData";
import CityRecoveryClient from "./CityRecoveryClient";

// Generate all static params at build time for SSG
export async function generateStaticParams() {
  return locationData.map((loc) => ({
    slug: loc.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Not Found" };

  return {
    title: `${location.title} | Legal Recovery`,
    description: location.description,
    keywords: [
      `legal recovery ${location.name}`,
      `unpaid salary recovery ${location.name}`,
      `freelancer payment recovery ${location.name}`,
      `security deposit recovery ${location.name}`,
      `best lawyer for recovery ${location.name}`,
      `send legal notice ${location.name}`,
      `debt recovery lawyer ${location.name}`,
      `unpaid invoice recovery ${location.name}`,
      "money recovery services india",
      "consumer court complaints",
    ],
    alternates: {
      canonical: `https://www.legalrecovery.in/legal-recovery-by-city/${location.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.description,
      url: `https://www.legalrecovery.in/legal-recovery-by-city/${location.slug}`,
      type: "website",
      images: [
        {
          url: "/services/3.png",
          width: 1200,
          height: 630,
          alt: `Legal Recovery Services in ${location.name}`,
        },
      ],
    },
  };
}

export default async function LawyerBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <CityRecoveryClient location={location} />;
}
