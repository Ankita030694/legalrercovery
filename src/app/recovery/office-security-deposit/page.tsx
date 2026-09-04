import { Metadata } from "next";
import OfficeSecurityDepositClient from "./OfficeSecurityDepositClient";

export const metadata: Metadata = {
  title: "Recover Office Security Deposit | LegalRecovery",
  description: "Landlord withholding your commercial office lease security deposit? Learn legal notice rules, Commercial Courts remedies, and recovery options in India.",
  keywords: [
    "recover commercial office security deposit",
    "legal notice for refund of commercial lease deposit",
    "commercial lease lock in period dispute",
    "office reinstatement restoration make good clause",
    "pre-institution mediation commercial lease",
    "commercial courts act security deposit recovery",
    "unregistered commercial lease deed enforceability",
    "summary suit for commercial security deposit",
    "arbitration in commercial lease agreements",
    "withholding commercial office security deposit"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/office-security-deposit',
  },
};

export default function OfficeSecurityDepositPage() {
  return <OfficeSecurityDepositClient />;
}
