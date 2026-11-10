import { Metadata } from "next";
import InternationalClientNoticeClient from "./InternationalClientNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to International Client: Unpaid Invoices",
  description: "Learn how Indian freelancers and agencies can recover unpaid invoices from foreign clients. Draft a cross-border legal notice for breach of contract.",
  keywords: [
    "recover unpaid money from international client",
    "legal notice to US client for unpaid invoice",
    "freelancer cross border payment recovery",
    "how to sue foreign client for non payment",
    "international client unpaid invoice laws"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-international-client-unpaid-invoice-recovery',
  },
  openGraph: {
    title: "Legal Notice to International Client: Unpaid Invoices",
    description: "Learn how Indian freelancers and agencies can recover unpaid invoices from foreign clients. Draft a cross-border legal notice for breach of contract.",
    url: "https://www.legalrecovery.in/legal-notice-to-international-client-unpaid-invoice-recovery",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice to International Client: Unpaid Invoices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice to International Client: Unpaid Invoices",
    description: "Learn how Indian freelancers and agencies can recover unpaid invoices from foreign clients. Draft a cross-border legal notice for breach of contract.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function InternationalClientNoticePage() {
  return <InternationalClientNoticeClient />;
}
