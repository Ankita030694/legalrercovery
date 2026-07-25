import { Metadata } from "next";
import InternationalClientNoticeClient from "./InternationalClientNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to International Client: Unpaid Invoices",
  description: "Learn how Indian freelancers and agencies can legally recover unpaid invoices from foreign clients. Draft a cross-border legal notice for breach of contract.",
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
};

export default function InternationalClientNoticePage() {
  return <InternationalClientNoticeClient />;
}
