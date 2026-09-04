import { Metadata } from "next";
import SecurityDepositClient from "./SecurityDepositClient";

export const metadata: Metadata = {
  title: "Recover Employee Security Deposit Dues | LegalRecovery",
  description: "Did your employer deduct a security deposit or hold certificates for an employment bond? Learn how to legally recover your money and documents.",
  keywords: [
    "recovery of employee security deposit",
    "employer withholding original certificates legal notice",
    "legality of security deposit in company india",
    "employment bond validity supreme court",
    "recover salary deduction security deposit",
    "original marksheets held by employer",
    "summary suit for security deposit recovery",
    "labor court complaint for held documents",
    "employer threatening cheque bounce case bond",
    "training bond legal notice india"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/security-deposit',
  },
};

export default function SecurityDepositPage() {
  return <SecurityDepositClient />;
}
