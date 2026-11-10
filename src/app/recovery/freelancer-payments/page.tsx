import { Metadata } from "next";
import FreelancerPaymentsClient from "./FreelancerPaymentsClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Freelancer Payments | LegalRecovery",
  description: "Recover unpaid freelance payments or contractor dues in India. Learn contract enforcement, Order 37 CPC summary suits, and legal notice procedures.",
  keywords: [
    "recover unpaid freelancer payments India",
    "freelance payment default legal notice",
    "independent contractor debt recovery",
    "consultant unpaid fees recovery",
    "gig worker payment recovery cpc",
    "unpaid retainer invoices recovery",
    "legal notice for freelance fees",
    "breach of freelance contract India",
    "freelancer legal assistance B2B",
    "Section 70 contract act unjust enrichment"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/freelancer-payments',
  },
  openGraph: {
    title: "Recover Unpaid Freelancer Payments | LegalRecovery",
    description: "Recover unpaid freelance payments or contractor dues in India. Learn contract enforcement, Order 37 CPC summary suits, and legal notice procedures.",
    url: "https://www.legalrecovery.in/recovery/freelancer-payments",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid Freelancer Payments | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Freelancer Payments | LegalRecovery",
    description: "Recover unpaid freelance payments or contractor dues in India. Learn contract enforcement, Order 37 CPC summary suits, and legal notice procedures.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FreelancerPaymentsPage() {
  return <FreelancerPaymentsClient />;
}
