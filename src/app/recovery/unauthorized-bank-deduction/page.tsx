import { Metadata } from "next";
import UnauthorizedBankDeductionClient from "./UnauthorizedBankDeductionClient";

export const metadata: Metadata = {
  title: "Bank Deducted Money Without Consent? Recover Unauthorized Bank Charges & Lien",
  description: "Bank deducted hidden charges, wrongful penal interest, insurance premiums, or set-off funds without consent? Enforce RBI Fair Practices & Banking Ombudsman refund rules via Legal Notice.",
  keywords: [
    "recover unauthorized bank deduction",
    "unauthorized bank charges refund india",
    "bank deducted money without consent refund",
    "banking ombudsman complaint for wrong deduction",
    "legal notice to bank for hidden charges",
    "recover wrong bank account debit",
    "wrongful bank lien set off recovery",
    "force sold bank insurance deduction refund",
    "consumer court bank negligence deduction"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/unauthorized-bank-deduction',
  },
  openGraph: {
    title: "Bank Deducted Money Without Consent? Recover Unauthorized Bank Charges & Lien",
    description: "Bank deducted hidden charges, wrongful penal interest, or insurance premiums without consent? Enforce RBI refund rules via Legal Notice.",
    url: "https://www.legalrecovery.in/recovery/unauthorized-bank-deduction",
    type: "article",
  },
};

export default function UnauthorizedBankDeductionPage() {
  return <UnauthorizedBankDeductionClient />;
}
