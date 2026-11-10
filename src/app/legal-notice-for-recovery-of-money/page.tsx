import { Metadata } from "next";
import LegalNoticeRecoveryClient from "./LegalNoticeRecoveryClient";

export const metadata: Metadata = {
  title: "Legal Notice for Recovery of Money: Draft & Send",
  description: "Draft and send a legal notice for recovery of money (loans, invoices, dues) on advocate letterhead via Speed Post. Secure your money legally in India.",
  keywords: [
    "legal notice for recovery of money",
    "money recovery legal notice format",
    "send legal notice for money recovery",
    "recovery of money from friend legal notice",
    "legal notice for unpaid dues",
    "summary suit under order 37 cpc",
    "Section 138 demand notice cheque bounce",
    "debt recovery lawyer india",
    "legal notice draft for outstanding payment",
    "notice of recovery of money"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-for-recovery-of-money',
  },
  openGraph: {
    title: "Legal Notice for Recovery of Money: Draft & Send",
    description: "Draft and send a legal notice for recovery of money (loans, invoices, dues) on advocate letterhead via Speed Post. Secure your money legally in India.",
    url: "https://www.legalrecovery.in/legal-notice-for-recovery-of-money",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice for Recovery of Money: Draft & Send",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice for Recovery of Money: Draft & Send",
    description: "Draft and send a legal notice for recovery of money (loans, invoices, dues) on advocate letterhead via Speed Post. Secure your money legally in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function LegalNoticeRecoveryPage() {
  return <LegalNoticeRecoveryClient />;
}
