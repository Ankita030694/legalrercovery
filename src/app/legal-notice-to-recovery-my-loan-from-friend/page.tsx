import { Metadata } from "next";
import FriendlyLoanRecoveryClient from "./FriendlyLoanRecoveryClient";

export const metadata: Metadata = {
  title: "Legal Notice for Recovery of Money from Friend or Relative in India (Format & UPI Proof)",
  description: "Friend or relative not returning money lent via UPI, bank transfer, or cash? Serve an Advocate-Drafted Legal Notice for Friendly Loan Recovery to settle within 15 days without court.",
  keywords: [
    "legal notice for recovery of money from friend",
    "how to recover money lent to a friend in india",
    "friendly loan recovery legal notice format",
    "friend not returning money legal action india",
    "recover money from friend using upi whatsapp proof"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-to-recovery-my-loan-from-friend",
  },
  openGraph: {
    title: "Legal Notice for Recovery of Money from Friend or Relative in India (Format & UPI Proof)",
    description: "Recover personal loans given to a friend or relative using UPI receipts, WhatsApp chats, and an Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/legal-notice-to-recovery-my-loan-from-friend",
    type: "article",
  },
};

export default function FriendlyLoanRecoveryPage() {
  return <FriendlyLoanRecoveryClient />;
}
