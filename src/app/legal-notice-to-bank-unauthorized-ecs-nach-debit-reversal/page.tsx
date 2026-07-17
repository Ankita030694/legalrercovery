import { Metadata } from "next";
import BankAutoDebitReversalClient from "./BankAutoDebitReversalClient";

export const metadata: Metadata = {
  title: "Legal Notice to Bank for Unauthorized ECS & NACH Auto-Debits | Recovery",
  description: "Bank continuing to auto-debit your account via ECS or NACH despite mandate cancellation? Learn how to send a legal notice to reverse unauthorized debits.",
  keywords: [
    "unauthorized nach debit bank compensation",
    "legal notice to bank to stop ecs debit",
    "how to reverse wrong auto debit bank",
    "ecs mandate cancellation grievance bank",
    "unauthorized ecs debit complaints"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal',
  },
};

export default function BankAutoDebitReversalPage() {
  return <BankAutoDebitReversalClient />;
}
