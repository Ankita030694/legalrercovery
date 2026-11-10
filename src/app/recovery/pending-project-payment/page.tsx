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
  openGraph: {
    title: "Recover Pending Project Payments | LegalRecovery",
    description: "Recover pending project payments, milestone dues, and B2B fees in India. Learn about MSME Samadhaan, Order 37 summary suits, and legal notice options.",
    url: "https://www.legalrecovery.in/recovery/pending-project-payment",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Pending Project Payments | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Pending Project Payments | LegalRecovery",
    description: "Recover pending project payments, milestone dues, and B2B fees in India. Learn about MSME Samadhaan, Order 37 summary suits, and legal notice options.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function PendingProjectPaymentPage() {
  return <PendingProjectPaymentClient />;
}
