import { Metadata } from "next";
import FraudTransactionClient from "./FraudTransactionClient";

export const metadata: Metadata = {
  title: "Fraud Transaction Refund: How Long Does the Bank Take?",
  description: "Unauthorised card, UPI or SIM-swap debit? RBI's zero-liability rule, shadow credit within 10 working days, and how to make your bank refund you.",
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
    title: "Fraud Transaction Refund: How Long Does the Bank Take?",
    description: "Unauthorised card, UPI or SIM-swap debit? RBI's zero-liability rule, shadow credit within 10 working days, and how to make your bank refund you.",
    url: "https://www.legalrecovery.in/recovery/fraud-transaction-amount",
    type: "article",
  },
};

export default function FraudPage() {
  return <FraudTransactionClient />;
}
