import { Metadata } from "next";
import BankTransferFraudClient from "./BankTransferFraudClient";

export const metadata: Metadata = {
  title: "Recover Bank Transfer Fraud Amount in India | LegalRecovery",
  description: "Victim of unauthorized net banking, RTGS, or NEFT fraud? Learn about RBI customer protection circulars, interbank recall steps, and legal notices.",
  keywords: [
    "recover bank transfer fraud amount",
    "unauthorized net banking transfer refund",
    "neft rtgs fraud recovery legal process",
    "rbi customer liability bank transfer fraud",
    "how to recall fraudulent bank transfer",
    "banking ombudsman net banking scam",
    "mule account freeze rbi circular",
    "legal notice to bank unauthorized transfer",
    "digital evidence certificate bank fraud",
    "consumer court bank negligence net banking"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/bank-transfer-fraud-amount',
  },
};

export default function BankTransferPage() {
  return <BankTransferFraudClient />;
}
