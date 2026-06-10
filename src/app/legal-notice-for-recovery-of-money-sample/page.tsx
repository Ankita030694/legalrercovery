import { Metadata } from "next";
import LegalNoticeRecoverySampleClient from "./LegalNoticeRecoverySampleClient";

export const metadata: Metadata = {
  title: "Legal Notice for Recovery of Money Sample: Format & Draft Template",
  description: "Download and view standard Legal Notice formats for recovery of money (friendly loans, unpaid invoices, freelancer dues) in India. Learn how to draft and customize templates legally.",
  keywords: [
    "legal notice for recovery of money sample",
    "money recovery legal notice format",
    "legal notice for money recovery template",
    "draft legal notice for recovery of money",
    "personal loan recovery notice sample",
    "unpaid invoice legal notice format",
    "advocate notice draft recovery",
    "Section 138 cheque bounce format",
    "recovery of money legal notice doc"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-for-recovery-of-money-sample',
  },
};

export default function LegalNoticeRecoverySamplePage() {
  return <LegalNoticeRecoverySampleClient />;
}
