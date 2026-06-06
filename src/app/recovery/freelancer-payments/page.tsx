import { Metadata } from "next";
import FreelancerPaymentsClient from "./FreelancerPaymentsClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Freelancer Payments & Consultant Fees | LegalRecovery",
  description: "Struggling to recover unpaid freelance payments, gig worker fees, or independent contractor dues in India? Learn about contract enforcement, Order 37 CPC summary suits, and legal notices.",
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
};

export default function FreelancerPaymentsPage() {
  return <FreelancerPaymentsClient />;
}
