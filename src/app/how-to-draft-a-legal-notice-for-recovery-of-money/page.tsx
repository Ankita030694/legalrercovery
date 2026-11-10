import { Metadata } from "next";
import HowToDraftLegalNoticeClient from "./HowToDraftLegalNoticeClient";

export const metadata: Metadata = {
  title: "How to Draft a Legal Notice for Money Recovery: Guide",
  description: "Learn how to draft a legal notice for recovery of money in India. Step-by-step guide with essential clauses, statutory sections, and formatting rules.",
  keywords: [
    "how to draft a legal notice for recovery of money",
    "legal notice drafting format money recovery",
    "drafting recovery of money notice India",
    "clauses in money recovery notice",
    "statutory notice writing format",
    "Section 73 Contract Act notice drafting",
    "Interest Act 1978 interest claim notice",
    "under instructions clause notice writing",
    "legal drafting green ledger paper A4"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-draft-a-legal-notice-for-recovery-of-money',
  },
  openGraph: {
    title: "How to Draft a Legal Notice for Money Recovery: Guide",
    description: "Learn how to draft a legal notice for recovery of money in India. Step-by-step guide with essential clauses, statutory sections, and formatting rules.",
    url: "https://www.legalrecovery.in/how-to-draft-a-legal-notice-for-recovery-of-money",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "How to Draft a Legal Notice for Money Recovery: Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Draft a Legal Notice for Money Recovery: Guide",
    description: "Learn how to draft a legal notice for recovery of money in India. Step-by-step guide with essential clauses, statutory sections, and formatting rules.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function HowToDraftLegalNoticePage() {
  return <HowToDraftLegalNoticeClient />;
}
