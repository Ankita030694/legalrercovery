import { Metadata } from "next";
import InsuranceClaimRecoveryClient from "./InsuranceClaimRecoveryClient";

export const metadata: Metadata = {
  title: "Legal Notice to Insurance Company for Delayed or Rejected Claim Recovery",
  description: "Learn how to recover delayed or rejected health, motor, or commercial insurance claims. Serve a legal notice to the insurer's grievance head and escalate to the Ombudsman or Consumer Court.",
  keywords: [
    "legal notice to insurance company for claim rejection",
    "recover health insurance claim rejected",
    "consumer court complaint against insurance company",
    "legal notice for insurance claim delay"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-insurance-company-claim-rejection-recovery",
  },
};

export default function InsuranceClaimRecoveryPage() {
  return <InsuranceClaimRecoveryClient />;
}
