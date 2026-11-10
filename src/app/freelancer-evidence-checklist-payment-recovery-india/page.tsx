import { Metadata } from "next";
import FreelancerEvidenceClient from "./FreelancerEvidenceClient";

export const metadata: Metadata = {
  title: "Evidence Checklist for Freelancer Payment Recovery in India",
  description: "Essential evidence checklist for freelancers in India to recover unpaid dues. Learn about digital proof, Section 63 BSA certificates, and contracts.",
  keywords: [
    "freelancer evidence collection",
    "prove work delivery freelancer",
    "whatsapp chat court evidence india",
    "section 63 bsa certificate freelancer",
    "invoice admissibility order 37 cpc",
    "prove freelance contract india",
    "unpaid freelance invoices proof",
    "gig worker legal evidence checklist",
    "tds deduction proof of debt",
    "how to sue client for nonpayment evidence"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/freelancer-evidence-checklist-payment-recovery-india',
  },
  openGraph: {
    title: "Evidence Checklist for Freelancer Payment Recovery in India",
    description: "Essential evidence checklist for freelancers in India to recover unpaid dues. Learn about digital proof, Section 63 BSA certificates, and contracts.",
    url: "https://www.legalrecovery.in/freelancer-evidence-checklist-payment-recovery-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Evidence Checklist for Freelancer Payment Recovery in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evidence Checklist for Freelancer Payment Recovery in India",
    description: "Essential evidence checklist for freelancers in India to recover unpaid dues. Learn about digital proof, Section 63 BSA certificates, and contracts.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FreelancerEvidencePage() {
  return <FreelancerEvidenceClient />;
}
