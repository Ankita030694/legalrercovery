import { Metadata } from "next";
import VendorPaymentsClient from "./VendorPaymentsClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Vendor Payments & Dues | LegalRecovery",
  description: "Recover unpaid vendor payments and supplier debts in India. Learn about MSMED Act claims, Order 37 summary suits, and legal notice procedures.",
  keywords: [
    "recover unpaid vendor payments India",
    "vendor debt recovery legal notice",
    "raw material supplier dues recovery",
    "MSME samadhan portal vendor payment",
    "Order 37 CPC summary suit for vendor",
    "commercial dispute vendor payment default",
    "B2B procurement payment recovery",
    "legal notice for outstanding vendor dues",
    "corporate buyer payment default remedies",
    "Section 138 NI Act vendor cheque bounce"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/vendor-payments',
  },
};

export default function VendorPaymentsPage() {
  return <VendorPaymentsClient />;
}
