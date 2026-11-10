import { Metadata } from "next";
import LegalNoticeRecoverySampleClient from "./LegalNoticeRecoverySampleClient";

export const metadata: Metadata = {
  title: "Legal Notice for Recovery of Money Format & Sample PDF",
  description: "Free legal notice for recovery of money format and samples in India for loans, unpaid invoices, and salary dues. Send an advocate notice online.",
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
  openGraph: {
    title: "Legal Notice for Recovery of Money Format & Sample PDF",
    description: "Court-ready Legal Notice formats and sample drafts for money recovery in India, or get an Advocate-Drafted Legal Notice dispatched online.",
    url: "https://www.legalrecovery.in/legal-notice-for-recovery-of-money-sample",
    type: "article",
  },
};

export default function LegalNoticeRecoverySamplePage() {
  return <LegalNoticeRecoverySampleClient />;
}
