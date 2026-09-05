import { Metadata } from "next";
import UnauthorizedBankDeductionClient from "./UnauthorizedBankDeductionClient";

export const metadata: Metadata = {
  title: "Recover Unauthorized Bank Deduction in India | LegalRecovery",
  description: "Bank deducted money without consent? Learn RBI rules on unauthorized debits, e-mandate cancellations, and Banking Ombudsman complaints.",
  keywords: [
    "recover unauthorized bank deduction",
    "unauthorized bank charges refund india",
    "rbi auto debit mandate rules",
    "bank deducted money without consent refund",
    "how to stop unauthorized auto debit",
    "banking ombudsman complaint for wrong deduction",
    "legal notice to bank for hidden charges",
    "recover wrong bank account debit",
    "nach mandate cancel refund",
    "consumer court bank negligence deduction"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/unauthorized-bank-deduction',
  },
};

export default function UnauthorizedBankDeductionPage() {
  return <UnauthorizedBankDeductionClient />;
}
