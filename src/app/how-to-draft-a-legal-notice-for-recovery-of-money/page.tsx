import { Metadata } from "next";
import HowToDraftLegalNoticeClient from "./HowToDraftLegalNoticeClient";

export const metadata: Metadata = {
  title: "How to Draft a Legal Notice for Money Recovery: Guide",
  description: "Learn how to draft a legal notice for recovery of money in India. Step-by-step guide with essential clauses, statutory sections, and formatting rules.",
  keywords: [
    "how to draft a legal notice for recovery of money",
    "legal notice drafting format money recovery",
    "drafting recovery of money notice India",
    "clauses in money recovery notice",
    "statutory notice writing format",
    "Section 73 Contract Act notice drafting",
    "Interest Act 1978 interest claim notice",
    "under instructions clause notice writing",
    "legal drafting green ledger paper A4"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-draft-a-legal-notice-for-recovery-of-money',
  },
};

export default function HowToDraftLegalNoticePage() {
  return <HowToDraftLegalNoticeClient />;
}
