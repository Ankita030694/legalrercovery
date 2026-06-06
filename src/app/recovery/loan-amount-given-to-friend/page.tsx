import { Metadata } from "next";
import FriendlyLoanClient from "./FriendlyLoanClient";

export const metadata: Metadata = {
  title: "Recovery of Loan Amount Given to Friend | Recover Money Lent Without Agreement | LegalRecovery",
  description: "Struggling to recover a personal loan given to a friend, relative, or acquaintance? LegalRecovery helps you recover money lent on trust through legal notices, promissory note enforcement, summary suits, and cheque bounce cases under Section 138 NI Act.",
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
