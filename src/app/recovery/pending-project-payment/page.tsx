import { Metadata } from "next";
import PendingProjectPaymentClient from "./PendingProjectPaymentClient";

export const metadata: Metadata = {
  title: "Recover Pending Project Payments | LegalRecovery",
  description: "Recover pending project payments, milestone dues, and B2B fees in India. Learn about MSME Samadhaan, Order 37 summary suits, and legal notice options.",
  keywords: [
    "recover pending project payment India",
    "unpaid project dues legal notice",
    "MSME Samadhaan project recovery",
    "breach of contract project pay",
    "milestone payment delay India",
    "summary suit for project dues",
    "Section 138 NI Act bounced cheque project",
    "Operational Creditor NCLT project",
    "Interest on delayed project payments",
    "SOW dispute legal rights India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/pending-project-payment',
  },
};

export default function PendingProjectPaymentPage() {
  return <PendingProjectPaymentClient />;
}
