import { Metadata } from "next";
import MsmeSamadhanVsNoticeClient from "./MsmeSamadhanVsNoticeClient";

export const metadata: Metadata = {
  title: "MSME Samadhan Portal vs Legal Notice for Dues | Recovery",
  description: "Compare MSME Samadhan Portal filing vs serving a formal legal notice to recover unpaid business dues under the MSMED Act 45-day payment rule penalty.",
  keywords: [
    "msme samadhan portal recovery process",
    "interest rate for delayed payment msme",
    "legal notice to client for msme dues",
    "msme samadhan vs civil suit",
    "msme 45 days payment rule penalty"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
  },
};

export default function MsmeDelayedPaymentRecoveryPage() {
  return <MsmeSamadhanVsNoticeClient />;
}
