import { Metadata } from "next";
import BusinessDuesClient from "./BusinessDuesClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Business Dues & Vendor Invoices | LegalRecovery",
  description: "Struggling to recover unpaid business debts, commercial invoices, or vendor dues in India? Learn about MSME Samadhaan, summary suits, and Section 138 cheque bounce options.",
  keywords: [
    "recover unpaid business dues India",
    "recovery of commercial debts legal notice",
    "MSME samadhan portal delayed payments",
    "unpaid vendor invoices recovery cpc",
    "summary suit for business dues recovery",
    "Section 138 NI Act cheque bounce business",
    "NCLT operational creditor insolvency claim",
    "Commercial Courts Act Section 12A mediation",
    "breach of commercial contract damages",
    "legal notice for recovery of outstanding business dues"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/business-dues',
  },
};

export default function BusinessDuesPage() {
  return <BusinessDuesClient />;
}
