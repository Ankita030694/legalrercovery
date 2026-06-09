import { Metadata } from "next";
import FreelancerPaymentClient from "./FreelancerPaymentClient";

export const metadata: Metadata = {
  title: "Freelancer Payment Recovery Guide: Settle Unpaid Invoices Legally",
  description: "Are clients refusing to pay for your freelance services or projects? Know your rights under the Indian Contract Act, MSMED Act, and Order 37 CPC. Get professional legal help to recover unpaid dues.",
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
};

export default function FreelancerPaymentPage() {
  return <FreelancerPaymentClient />;
}
