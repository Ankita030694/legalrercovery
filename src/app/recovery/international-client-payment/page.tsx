import { Metadata } from "next";
import InternationalClientPaymentClient from "./InternationalClientPaymentClient";

export const metadata: Metadata = {
  title: "Recover Unpaid International Client Payments & B2B Dues | LegalRecovery",
  description: "Struggling to recover unpaid invoices from international clients or foreign businesses? Learn about cross-border debt recovery, FEMA compliance, EDPMS tracking, and legal notices.",
  keywords: [
    "recover international client payment India",
    "unpaid foreign invoice legal notice",
    "cross border debt recovery India",
    "EDPMS export realization RBI",
    "FEMA compliance delayed export payment",
    "summary suit foreign client CPC",
    "enforcing foreign arbitral award India",
    "international commercial dispute advocate",
    "SIAC arbitration contract recovery",
    "B2B export payment recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/international-client-payment',
  },
};

export default function InternationalClientPaymentPage() {
  return <InternationalClientPaymentClient />;
}
