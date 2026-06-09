import { Metadata } from "next";
import FreelancerEvidenceClient from "./FreelancerEvidenceClient";

export const metadata: Metadata = {
  title: "Evidence Checklist for Freelancer Payment Recovery in India",
  description: "A comprehensive guide on the evidence a freelancer in India must collect to recover unpaid dues. Learn about digital evidence, Section 63 BSA, and contract proofs.",
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
    canonical: 'https://www.legalrecovery.in/what-evidence-should-a-freelancer-collect-to-strengthen-a-payment-recovery-case-against-a-client',
  },
};

export default function FreelancerEvidencePage() {
  return <FreelancerEvidenceClient />;
}
