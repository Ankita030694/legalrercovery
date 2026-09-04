import { Metadata } from "next";
import UnpaidInvoicesClient from "./UnpaidInvoicesClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Invoices & B2B Dues | LegalRecovery",
  description: "Recover unpaid commercial invoices and B2B debts in India. Learn about MSME Samadhaan, Order 37 summary suits, Section 138, and legal notices.",
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
