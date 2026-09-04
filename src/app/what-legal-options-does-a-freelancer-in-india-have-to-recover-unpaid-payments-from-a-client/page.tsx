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
    canonical: 'https://www.legalrecovery.in/what-legal-options-does-a-freelancer-in-india-have-to-recover-unpaid-payments-from-a-client',
  },
};

export default function FreelancerRecoveryPage() {
  return <FreelancerRecoveryClient />;
}
