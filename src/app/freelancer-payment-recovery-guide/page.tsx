import { Metadata } from "next";
import FreelancerPaymentClient from "./FreelancerPaymentClient";

export const metadata: Metadata = {
  title: "Freelancer Payment Recovery Guide: Settle Dues Legally",
  description: "Clients refusing to pay for your freelance work? Know your rights under the Contract Act, MSMED Act, and Order 37 CPC. Recover unpaid dues legally.",
  keywords: [
    "freelancer payment recovery guide India",
    "unpaid freelancer invoice recovery",
    "contractor payment default legal notice",
    "MSME Samadhan for freelancers",
    "Summary Suit Order 37 CPC freelancer",
    "how to recover unpaid freelance dues India",
    "freelancer contract breach legal notice",
    "independent contractor payment default",
    "WhatsApp email evidence freelancer recovery",
    "retaining work product freelancer payment"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/freelancer-payment-recovery-guide',
  },
  openGraph: {
    title: "Freelancer Payment Recovery Guide: Settle Dues Legally",
    description: "Clients refusing to pay for your freelance work? Know your rights under the Contract Act, MSMED Act, and Order 37 CPC. Recover unpaid dues legally.",
    url: "https://www.legalrecovery.in/freelancer-payment-recovery-guide",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Freelancer Payment Recovery Guide: Settle Dues Legally",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Payment Recovery Guide: Settle Dues Legally",
    description: "Clients refusing to pay for your freelance work? Know your rights under the Contract Act, MSMED Act, and Order 37 CPC. Recover unpaid dues legally.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FreelancerPaymentPage() {
  return <FreelancerPaymentClient />;
}
