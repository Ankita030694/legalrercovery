import { Metadata } from "next";
import MsmeSamadhanVsNoticeClient from "./MsmeSamadhanVsNoticeClient";

export const metadata: Metadata = {
  title: "MSME Samadhaan vs Legal Notice: 45-Day Payment Rule",
  description: "MSME Samadhaan vs legal notice: How businesses recover unpaid B2B invoices with 3x RBI compound interest under Section 16 of the MSMED Act in India.",
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
    title: "MSME Samadhaan vs Legal Notice: 45-Day Payment Rule",
    description: "Compare MSME Samadhaan MSEFC arbitration timelines with an Advocate Demand Notice to recover overdue B2B invoices fast.",
    url: "https://www.legalrecovery.in/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "MSME Samadhaan vs Legal Notice: 45-Day Payment Rule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSME Samadhaan vs Legal Notice: 45-Day Payment Rule",
    description: "Compare MSME Samadhaan MSEFC arbitration timelines with an Advocate Demand Notice to recover overdue B2B invoices fast.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function MsmeDelayedPaymentRecoveryPage() {
  return <MsmeSamadhanVsNoticeClient />;
}
