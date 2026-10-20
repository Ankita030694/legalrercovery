import { Metadata } from "next";
import FraudTransactionClient from "./FraudTransactionClient";

export const metadata: Metadata = {
  title: "Unauthorized Card, SIM Swap or UPI Fraud Transaction? RBI 3-Day Zero Liability Refund",
  description: "Lost money in an unauthorized credit/debit card, phishing, or SIM-swap transaction? Claim 100% Bank Shadow Credit within 10 days under RBI Zero Liability Circular via Legal Notice.",
  keywords: [
    "recover fraud transaction amount",
    "unauthorized electronic transaction liability rbi",
    "credit card skimming refund legal notice",
    "sim swap bank fraud recovery india",
    "zero customer liability banking fraud 3 days",
    "rbi shadow credit 10 working days rule",
    "information technology act section 43a bank negligence"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/fraud-transaction-amount',
  },
  openGraph: {
    title: "Unauthorized Card, SIM Swap or UPI Fraud Transaction? RBI 3-Day Zero Liability Refund",
    description: "Lost money in an unauthorized credit/debit card or SIM-swap transaction? Claim 100% Bank Shadow Credit under RBI Zero Liability Circular.",
    url: "https://www.legalrecovery.in/recovery/fraud-transaction-amount",
    type: "article",
  },
};

export default function FraudPage() {
  return <FraudTransactionClient />;
}
