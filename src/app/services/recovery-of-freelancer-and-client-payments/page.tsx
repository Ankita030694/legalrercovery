import { Metadata } from "next";
import FreelancerRecoveryClient from "./FreelancerRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Freelancer & Client Payments | LegalRecovery",
  description: "Recover unpaid freelance invoices and client dues in India. Learn legal notice formats, MSME Samadhaan options, Order 37 summary suits, and remedies.",
  alternates: {
    canonical: "/services/recovery-of-freelancer-and-client-payments",
  },
  openGraph: {
    title: "Recover Freelancer & Client Payments | LegalRecovery",
    description: "Recover unpaid freelance invoices and client dues in India. Learn legal notice formats, MSME Samadhaan options, Order 37 summary suits, and remedies.",
    type: "article",
    url: "/services/recovery-of-freelancer-and-client-payments",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Freelancer and Client Payments Recovery India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Freelancer & Client Payments | LegalRecovery",
    description: "Exhaustive legal guide on freelancer and client payment recoveries in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function FreelancerClientRecoveryPage() {
  return <FreelancerRecoveryClient />;
}
