import { Metadata } from "next";
import FraudTransactionClient from "./FraudTransactionClient";

export const metadata: Metadata = {
  title: "Recover Fraud Transaction Amount in India | LegalRecovery",
  description: "Struggling to recover funds from an unauthorized online banking or UPI fraud? Learn about the RBI zero liability guidelines, cyber complaint filings, and legal notices.",
  keywords: [
    "recover fraud transaction amount",
    "unauthorized electronic transaction liability rbi",
    "upi fraud refund legal action",
    "bank transfer cyber fraud recovery",
    "national cyber crime helpline 1930",
    "rbi ombudsman complaint online fraud",
    "consumer court bank negligence fraud",
    "zero customer liability banking fraud",
    "credit card skimming refund legal notice",
    "information technology act section 43a fraud"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/fraud-transaction-amount',
  },
};

export default function FraudPage() {
  return <FraudTransactionClient />;
}
