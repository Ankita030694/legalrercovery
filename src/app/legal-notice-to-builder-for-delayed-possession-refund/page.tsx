import { Metadata } from "next";
import BuilderDelayedPossessionClient from "./BuilderDelayedPossessionClient";

export const metadata: Metadata = {
  title: "Legal Notice to Builder: Delayed Possession & Refund",
  description: "How home buyers can use a legal notice to demand a refund of their booking amount from a builder under RERA, Consumer Forum, and NCLT rules.",
  keywords: [
    "legal notice to builder for delayed possession",
    "builder delayed possession refund",
    "RERA refund legal notice format",
    "recover booking amount from builder",
    "developer delayed possession penalty"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-builder-for-delayed-possession-refund',
  },
  openGraph: {
    title: "Legal Notice to Builder: Delayed Possession & Refund",
    description: "How home buyers can use a legal notice to demand a refund of their booking amount from a builder under RERA, Consumer Forum, and NCLT rules.",
    url: "https://www.legalrecovery.in/legal-notice-to-builder-for-delayed-possession-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice to Builder: Delayed Possession & Refund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice to Builder: Delayed Possession & Refund",
    description: "How home buyers can use a legal notice to demand a refund of their booking amount from a builder under RERA, Consumer Forum, and NCLT rules.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function BuilderDelayedPossessionPage() {
  return <BuilderDelayedPossessionClient />;
}
