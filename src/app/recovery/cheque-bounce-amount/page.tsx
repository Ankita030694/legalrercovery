import { Metadata } from "next";
import ChequeBounceAmountClient from "./ChequeBounceAmountClient";

export const metadata: Metadata = {
  title: "Recover Bounced Cheque Amount under Section 138 NI Act | LegalRecovery",
  description: "Faced with a bounced cheque in India? Learn the step-by-step legal process under Section 138 NI Act, demand notice timelines, and how to recover your money.",
  keywords: [
    "recover bounced cheque amount",
    "section 138 ni act cheque bounce",
    "legal notice for cheque bounce timeline",
    "cheque bounce recovery lawyer",
    "order 37 cpc cheque bounce recovery",
    "interim compensation section 143a",
    "magistrate court cheque bounce case",
    "cheque return memo insufficient funds",
    "negotiable instruments act section 138",
    "cheque bounce penalty double amount"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/cheque-bounce-amount',
  },
};

export default function ChequeBounceAmountPage() {
  return <ChequeBounceAmountClient />;
}
