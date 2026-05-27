import { Metadata } from "next";
import FreelancerRecoveryClient from "./FreelancerRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Freelancer & Client Payments Legally in India | LegalRecovery",
  description: "Exhaustive legal guide on freelancer and client payment recoveries in India. Learn legal notice formats, MSME Samadhaan portals, Order 37 CPC summary suits, and copyright protection acts.",
  openGraph: {
    title: "Recover Unpaid Freelancer & Client Payments Legally in India | LegalRecovery",
    description: "Exhaustive legal guide on freelancer and client payment recoveries in India. Learn legal notice formats, MSME Samadhaan portals, Order 37 CPC summary suits, and copyright protection acts.",
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
    title: "Recover Unpaid Freelancer & Client Payments Legally in India | LegalRecovery",
    description: "Exhaustive legal guide on freelancer and client payment recoveries in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function FreelancerClientRecoveryPage() {
  return <FreelancerRecoveryClient />;
}
