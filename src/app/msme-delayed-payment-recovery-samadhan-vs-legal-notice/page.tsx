import { Metadata } from "next";
import MsmeSamadhanVsNoticeClient from "./MsmeSamadhanVsNoticeClient";

export const metadata: Metadata = {
  title: "MSME Samadhaan Portal vs Legal Notice: 45-Day Payment Rule & 3x RBI Compound Interest",
  description: "MSME Samadhaan complaint resolution time vs Legal Notice: How Udyam-registered businesses recover unpaid B2B invoices with 3x RBI compound interest under Section 16 of the MSMED Act.",
  keywords: [
    "samadhan portal complaint resolution time",
    "msme samadhan portal recovery process",
    "interest rate for delayed payment msme",
    "legal notice to client for msme dues",
    "msme samadhan vs civil suit",
    "msme 45 days payment rule penalty"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
  },
  openGraph: {
    title: "MSME Samadhaan Portal vs Legal Notice: 45-Day Payment Rule & 3x RBI Compound Interest",
    description: "Compare MSME Samadhaan MSEFC arbitration timelines with an Advocate Demand Notice to recover overdue B2B invoices fast.",
    url: "https://www.legalrecovery.in/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
    type: "article",
  },
};

export default function MsmeDelayedPaymentRecoveryPage() {
  return <MsmeSamadhanVsNoticeClient />;
}
