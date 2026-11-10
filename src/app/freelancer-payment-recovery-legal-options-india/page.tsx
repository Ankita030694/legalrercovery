import { Metadata } from "next";
import FreelancerRecoveryClient from "./FreelancerRecoveryClient";

export const metadata: Metadata = {
  title: "Freelancer Unpaid Payments Recovery: Legal Options in India",
  description: "Legal remedies for freelancers in India to recover unpaid client payments. Learn about MSME Samadhaan, Order 37 summary suits, and contract rights.",
  keywords: [
    "freelancer payment recovery india",
    "recover unpaid payments client",
    "freelancer legal notice india",
    "msme samadhaan for freelancers",
    "summary suit for unpaid invoices",
    "quantum meruit section 70",
    "freelance work digital evidence",
    "how to sue client for nonpayment",
    "freelancer contract breach",
    "legal rights gig workers india"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/freelancer-payment-recovery-legal-options-india',
  },
  openGraph: {
    title: "Freelancer Unpaid Payments Recovery: Legal Options in India",
    description: "Legal remedies for freelancers in India to recover unpaid client payments. Learn about MSME Samadhaan, Order 37 summary suits, and contract rights.",
    url: "https://www.legalrecovery.in/freelancer-payment-recovery-legal-options-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Freelancer Unpaid Payments Recovery: Legal Options in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Unpaid Payments Recovery: Legal Options in India",
    description: "Legal remedies for freelancers in India to recover unpaid client payments. Learn about MSME Samadhaan, Order 37 summary suits, and contract rights.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FreelancerRecoveryPage() {
  return <FreelancerRecoveryClient />;
}
