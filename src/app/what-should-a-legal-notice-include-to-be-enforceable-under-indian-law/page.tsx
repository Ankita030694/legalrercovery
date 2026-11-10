import { Metadata } from "next";
import EnforceableNoticeClient from "./EnforceableNoticeClient";

export const metadata: Metadata = {
  title: "What Should a Legal Notice Include in India? Checklist",
  description: "Learn the essential components, statutory citations, and delivery rules required to make a legal notice legally binding and enforceable in India.",
  keywords: [
    "legal notice requirements india",
    "what should a legal notice include",
    "enforceable legal notice checklist",
    "section 80 cpc legal notice",
    "section 138 ni act notice drafting",
    "digital legal notice validity",
    "section 63 bsa certificate",
    "legal notice for breach of contract",
    "general clauses act section 27",
    "how to draft a legal notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/what-should-a-legal-notice-include-to-be-enforceable-under-indian-law',
  },
  openGraph: {
    title: "What Should a Legal Notice Include in India? Checklist",
    description: "Learn the essential components, statutory citations, and delivery rules required to make a legal notice legally binding and enforceable in India.",
    url: "https://www.legalrecovery.in/what-should-a-legal-notice-include-to-be-enforceable-under-indian-law",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "What Should a Legal Notice Include in India? Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Should a Legal Notice Include in India? Checklist",
    description: "Learn the essential components, statutory citations, and delivery rules required to make a legal notice legally binding and enforceable in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function EnforceableNoticePage() {
  return <EnforceableNoticeClient />;
}
