import { Metadata } from "next";
import BusinessDuesClient from "./BusinessDuesClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Business Dues in India | LegalRecovery",
  description: "Recover unpaid business debts, invoices, or vendor dues in India. Learn about MSME Samadhaan, summary suits, and Section 138 cheque bounce remedies.",
  keywords: [
    "recover unpaid business dues India",
    "recovery of commercial debts legal notice",
    "MSME samadhan portal delayed payments",
    "unpaid vendor invoices recovery cpc",
    "summary suit for business dues recovery",
    "Section 138 NI Act cheque bounce business",
    "NCLT operational creditor insolvency claim",
    "Commercial Courts Act Section 12A mediation",
    "breach of commercial contract damages",
    "legal notice for recovery of outstanding business dues"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/business-dues',
  },
  openGraph: {
    title: "Recover Unpaid Business Dues in India | LegalRecovery",
    description: "Recover unpaid business debts, invoices, or vendor dues in India. Learn about MSME Samadhaan, summary suits, and Section 138 cheque bounce remedies.",
    url: "https://www.legalrecovery.in/recovery/business-dues",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid Business Dues in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Business Dues in India | LegalRecovery",
    description: "Recover unpaid business debts, invoices, or vendor dues in India. Learn about MSME Samadhaan, summary suits, and Section 138 cheque bounce remedies.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function BusinessDuesPage() {
  return <BusinessDuesClient />;
}
