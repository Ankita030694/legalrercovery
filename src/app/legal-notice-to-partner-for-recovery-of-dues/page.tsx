import { Metadata } from "next";
import PartnershipDuesNoticeClient from "./PartnershipDuesNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Partner for Recovery of Dues in India",
  description: "Learn how to draft and serve a legal notice to partner for recovery of money and capital under Section 48 of the Partnership Act and LLP Act rules.",
  keywords: [
    "recover capital from partnership firm",
    "legal notice to partner for recovery of money",
    "llp partner dispute settlement",
    "partnership firm settlement of accounts"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-partner-for-recovery-of-dues',
  },
  openGraph: {
    title: "Legal Notice to Partner for Recovery of Dues in India",
    description: "Learn how to draft and serve a legal notice to partner for recovery of money and capital under Section 48 of the Partnership Act and LLP Act rules.",
    url: "https://www.legalrecovery.in/legal-notice-to-partner-for-recovery-of-dues",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice to Partner for Recovery of Dues in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice to Partner for Recovery of Dues in India",
    description: "Learn how to draft and serve a legal notice to partner for recovery of money and capital under Section 48 of the Partnership Act and LLP Act rules.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function PartnershipRecoveryPage() {
  return <PartnershipDuesNoticeClient />;
}
