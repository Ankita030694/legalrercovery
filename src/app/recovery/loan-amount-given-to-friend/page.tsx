import { Metadata } from "next";
import FriendlyLoanClient from "./FriendlyLoanClient";

export const metadata: Metadata = {
  title: "Recover Loan Amount Given to a Friend | LegalRecovery",
  description: "Struggling to recover a loan given to a friend? LegalRecovery helps recover money through legal notices, summary suits, and Section 138 NI Act actions.",
  keywords: [
    "recover loan given to friend",
    "recovery of money lent to friend India",
    "loan recovery without agreement",
    "hand loan recovery legal notice",
    "promissory note enforcement India",
    "friendly loan recovery legal action",
    "personal loan not returned legal remedy",
    "money lent on trust recovery",
    "recover money from friend legally",
    "summary suit for loan recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/loan-amount-given-to-friend',
  },
};

export default function FriendlyLoanPage() {
  return <FriendlyLoanClient />;
}
