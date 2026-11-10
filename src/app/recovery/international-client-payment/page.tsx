import { Metadata } from "next";
import InternationalClientPaymentClient from "./InternationalClientPaymentClient";

export const metadata: Metadata = {
  title: "Recover International Client Payments | LegalRecovery",
  description: "Recover unpaid foreign client invoices in India. Learn about cross-border debt recovery, FEMA compliance, EDPMS tracking, and legal notice options.",
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
  openGraph: {
    title: "Recover International Client Payments | LegalRecovery",
    description: "Recover unpaid foreign client invoices in India. Learn about cross-border debt recovery, FEMA compliance, EDPMS tracking, and legal notice options.",
    url: "https://www.legalrecovery.in/recovery/international-client-payment",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover International Client Payments | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover International Client Payments | LegalRecovery",
    description: "Recover unpaid foreign client invoices in India. Learn about cross-border debt recovery, FEMA compliance, EDPMS tracking, and legal notice options.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function InternationalClientPaymentPage() {
  return <InternationalClientPaymentClient />;
}
