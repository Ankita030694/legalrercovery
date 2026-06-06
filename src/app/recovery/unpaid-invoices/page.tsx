import { Metadata } from "next";
import UnpaidInvoicesClient from "./UnpaidInvoicesClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Invoices & B2B Vendor Payments | LegalRecovery",
  description: "Struggling to recover unpaid commercial invoices, B2B debts, or vendor payments in India? Learn about MSME Samadhaan, Order 37 CPC summary suits, Section 138 cheque bounce, and how to serve a legal notice.",
  keywords: [
    "recover unpaid invoices India",
    "commercial invoice debt recovery",
    "legal notice for unpaid vendor bills",
    "B2B payment default remedies CPC",
    "MSME samadhan delayed payment portal",
    "summary suit for outstanding invoices",
    "Section 138 NI Act bounced cheque invoice",
    "legal action for vendor payment default",
    "breach of business contract unpaid invoices",
    "legalnotice campaign for invoice recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/unpaid-invoices',
  },
};

export default function UnpaidInvoicesPage() {
  return <UnpaidInvoicesClient />;
}
