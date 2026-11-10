import { Metadata } from "next";
import CoachingCollegeRefundClient from "./CoachingCollegeRefundClient";

export const metadata: Metadata = {
  title: "Legal Notice to Coaching Institute for Fee Refund",
  description: "Told fees are non-refundable? Learn how Supreme Court and NCDRC rulings void unfair education fee forfeiture clauses via an advocate legal notice.",
  keywords: [
    "fees once paid are non refundable illegal india",
    "unfair contract clause education fee refund",
    "ncdrc judgment on non refundable tuition fees",
    "legal notice format for tuition fee refund",
    "section 2(46) unfair contract consumer protection act education"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-coaching-institute-college-fee-refund',
  },
  openGraph: {
    title: "Legal Notice to Coaching Institute for Fee Refund",
    description: "Told 'fees once paid are non-refundable'? Learn how Supreme Court & NCDRC precedents void unfair education fee forfeiture clauses.",
    url: "https://www.legalrecovery.in/legal-notice-to-coaching-institute-college-fee-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice to Coaching Institute for Fee Refund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice to Coaching Institute for Fee Refund",
    description: "Told 'fees once paid are non-refundable'? Learn how Supreme Court & NCDRC precedents void unfair education fee forfeiture clauses.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function CoachingCollegeRefundPage() {
  return <CoachingCollegeRefundClient />;
}
