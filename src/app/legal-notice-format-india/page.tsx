import { Metadata } from "next";
import LegalNoticeFormatClient from "./LegalNoticeFormatClient";

export const metadata: Metadata = {
  title: "Legal Notice Format in India: Draft & Checklist",
  description: "Download a valid legal notice format in India. Learn how to write a notice, essential drafting rules under CPC, and money recovery notice guidelines.",
  keywords: [
    "legal notice format india pdf",
    "legal notice format for recovery of money",
    "how to write a legal notice in india",
    "legal notice draft format",
    "indian legal notice draft"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-format-india',
  },
  openGraph: {
    title: "Legal Notice Format in India: Draft & Checklist",
    description: "Download a valid legal notice format in India. Learn how to write a notice, essential drafting rules under CPC, and money recovery notice guidelines.",
    url: "https://www.legalrecovery.in/legal-notice-format-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice Format in India: Draft & Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice Format in India: Draft & Checklist",
    description: "Download a valid legal notice format in India. Learn how to write a notice, essential drafting rules under CPC, and money recovery notice guidelines.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function LegalNoticeFormatPage() {
  return <LegalNoticeFormatClient />;
}
