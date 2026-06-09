import { Metadata } from "next";
import FriendlyLoanRecoveryClient from "./FriendlyLoanRecoveryClient";

export const metadata: Metadata = {
  title: "Legal Notice for Recovery of Friendly Loan in India | Complete Guide",
  description:
    "Learn how to recover a friendly or personal loan from a friend or relative in India. Get the complete guide on drafting a legal notice, Order 37 CPC summary suits, Section 138 NI Act, and civil recovery suits.",
  alternates: {
    canonical: "/legal-notice-to-recovery-my-loan-from-friend",
  },
};

export default function FriendlyLoanRecoveryPage() {
  return <FriendlyLoanRecoveryClient />;
}
