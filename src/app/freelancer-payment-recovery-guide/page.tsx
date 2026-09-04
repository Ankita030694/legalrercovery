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
};

export default function FreelancerPaymentPage() {
  return <FreelancerPaymentClient />;
}
