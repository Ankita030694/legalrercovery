import { Metadata } from "next";
import HandLoanAmountClient from "./HandLoanAmountClient";

export const metadata: Metadata = {
  title: "Recover Hand Loan Given on Trust in India | LegalRecovery",
  description: "Lent a hand loan to someone on trust without an agreement? Learn how to legally recover your hand loan using digital trails, legal notices, and civil/criminal remedies.",
  keywords: [
    "recover hand loan amount",
    "how to recover hand loan in india",
    "legal notice for hand loan recovery",
    "hand loan without written contract",
    "hand loan recovery legal remedies",
    "order 37 cpc hand loan recovery",
    "limitation period for hand loan",
    "cheque bounce case hand loan",
    "hand loan cheating case bns",
    "whatsapp logs proof for hand loan"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/hand-loan-amount',
  },
};

export default function HandLoanAmountPage() {
  return <HandLoanAmountClient />;
}
