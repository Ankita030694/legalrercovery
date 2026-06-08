import { Metadata } from "next";
import HealthInsuranceRejectionClaimClient from "./HealthInsuranceRejectionClaimClient";

export const metadata: Metadata = {
  title: "Health Insurance Claim Rejected? Challenge Wrongful Repudiation & Recover Your Amount | LegalRecovery",
  description: "Has your health insurance claim been wrongfully rejected, delayed, or underpaid by your insurer or TPA? Learn how to challenge the repudiation using IRDAI regulations, the 5-year moratorium shield, Insurance Ombudsman, and Consumer Forums. Recover your full hospitalization amount with expert legal help.",
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
