import { Metadata } from "next";
import BankAutoDebitReversalClient from "./BankAutoDebitReversalClient";

export const metadata: Metadata = {
  title: "ECS/NACH Debit Dispute? Get Wrong Debits & Charges Back",
  description: "Unauthorised ECS or NACH debit, or debits continuing after you cancelled the mandate? How to dispute it, escalate to RBI and recover the money.",
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
    title: "ECS/NACH Debit Dispute? Get Wrong Debits & Charges Back",
    description: "Unauthorised ECS or NACH debit, or debits continuing after you cancelled the mandate? How to dispute it, escalate to RBI and recover the money.",
    url: "https://www.legalrecovery.in/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "ECS/NACH Debit Dispute? Get Wrong Debits & Charges Back",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECS/NACH Debit Dispute? Get Wrong Debits & Charges Back",
    description:
      "Unauthorised ECS or NACH debit, or debits continuing after you cancelled the mandate? How to dispute it, escalate to RBI and recover the money.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function BankAutoDebitReversalPage() {
  return <BankAutoDebitReversalClient />;
}
