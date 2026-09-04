import { Metadata } from "next";
import FriendlyLoanRecoveryClient from "./FriendlyLoanRecoveryClient";

export const metadata: Metadata = {
  title: "Legal Notice for Friendly Loan Recovery in India",
  description:
    "Learn how to recover a personal loan from a friend or relative in India. Complete guide on drafting a legal notice, Order 37 CPC, and summary suits.",
  alternates: {
    canonical: "/legal-notice-to-recovery-my-loan-from-friend",
  },
};

export default function FriendlyLoanRecoveryPage() {
  return <FriendlyLoanRecoveryClient />;
}
