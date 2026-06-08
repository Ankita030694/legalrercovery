import { Metadata } from "next";
import FriendlyLoanAmountClient from "./FriendlyLoanAmountClient";

export const metadata: Metadata = {
  title: "Friendly Loan Recovery Process & Legal Actions in India | LegalRecovery",
  description: "Struggling to recover a friendly loan given to a friend, relative, or colleague? Learn about legal options, oral contracts validity, digital proofs, and how to recover your funds.",
  keywords: [
    "friendly loan recovery process",
    "how to recover friendly loan india",
    "legal action for personal loan to friend",
    "recover money lent on trust",
    "promissory note friendly loan recovery",
    "order 37 summary suit friendly loan",
    "recover friendly loan without written agreement",
    "limitation period friendly loan recovery",
    "cheque bounce recovery personal loan",
    "criminal complaint friendly loan cheating"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/friendly-loan-amount',
  },
};

export default function FriendlyLoanAmountPage() {
  return <FriendlyLoanAmountClient />;
}
