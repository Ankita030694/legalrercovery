import { Metadata } from "next";
import HealthInsuranceRejectionClaimClient from "./HealthInsuranceRejectionClaimClient";

export const metadata: Metadata = {
  title: "Recover Rejected Health Insurance Claim | LegalRecovery",
  description: "Health insurance claim rejected or delayed? Challenge repudiations using IRDAI rules, 5-year moratorium shields, Ombudsman, and Consumer Courts.",
  keywords: [
    "health insurance claim rejected India",
    "health insurance repudiation challenge",
    "IRDAI moratorium period 5 years",
    "TPA rejected health claim",
    "insurance ombudsman health insurance",
    "consumer court health insurance India",
    "cashless claim denied what to do",
    "pre-existing disease claim rejection",
    "health insurance claim recovery legal help",
    "Bima Bharosa complaint health insurance"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/health-insurance-rejection-claim',
  },
};

export default function HealthInsuranceRejectionClaimPage() {
  return <HealthInsuranceRejectionClaimClient />;
}
