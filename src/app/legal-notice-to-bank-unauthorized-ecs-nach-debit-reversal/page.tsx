import { Metadata } from "next";
import BankAutoDebitReversalClient from "./BankAutoDebitReversalClient";

export const metadata: Metadata = {
  title: "Unauthorized ECS/NACH Auto-Debit or Bank Withdrawal? RBI Refund & Legal Notice",
  description: "Bank or NBFC continuing ECS/NACH auto-debits after mandate cancellation or unauthorized withdrawal? Claim 100% reversal, ₹100/day NPCI penalty & RBI Zero Liability refund via Legal Notice.",
  keywords: [
    "unauthorized nach debit bank compensation",
    "legal notice to bank to stop ecs debit",
    "how to reverse wrong auto debit bank",
    "state bank of india must refund funds for unauthorized withdrawals",
    "ecs mandate cancellation grievance bank",
    "unauthorized ecs debit complaints",
    "npci nach mandate cancellation penalty per day",
    "rbi zero liability unauthorized electronic banking transaction"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal',
  },
  openGraph: {
    title: "Unauthorized ECS/NACH Auto-Debit or Bank Withdrawal? RBI Refund & Legal Notice",
    description: "Bank or NBFC continuing ECS/NACH auto-debits after mandate cancellation? Claim 100% reversal, ₹100/day NPCI penalty & RBI Zero Liability refund.",
    url: "https://www.legalrecovery.in/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal",
    type: "article",
  },
};

export default function BankAutoDebitReversalPage() {
  return <BankAutoDebitReversalClient />;
}
