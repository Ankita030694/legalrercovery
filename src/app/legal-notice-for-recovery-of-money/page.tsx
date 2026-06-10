import { Metadata } from "next";
import LegalNoticeRecoveryClient from "./LegalNoticeRecoveryClient";

export const metadata: Metadata = {
  title: "Legal Notice for Recovery of Money: Online Draft & Send in India",
  description: "Draft & send a formal Legal Notice for recovery of money (loans, outstanding invoices, business dues) online on advocate letterhead via Speed Post. Secure your money legally in India.",
  keywords: [
    "legal notice for recovery of money",
    "money recovery legal notice format",
    "send legal notice for money recovery",
    "recovery of money from friend legal notice",
    "legal notice for unpaid dues",
    "summary suit under order 37 cpc",
    "Section 138 demand notice cheque bounce",
    "debt recovery lawyer india",
    "legal notice draft for outstanding payment",
    "notice of recovery of money"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-for-recovery-of-money',
  },
};

export default function LegalNoticeRecoveryPage() {
  return <LegalNoticeRecoveryClient />;
}
