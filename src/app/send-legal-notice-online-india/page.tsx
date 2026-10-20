import { Metadata } from "next";
import SendLegalNoticeClient from "./SendLegalNoticeClient";

export const metadata: Metadata = {
  title: "How to Send a Legal Notice to Someone in India (Process, Fees & Kaise Bheje)",
  description: "Step-by-step guide on how to send a legal notice to someone in India (Online Legal Notice Kaise Bheje): advocate drafting charges, Speed Post RPAD rules & 15-day notice period.",
  keywords: [
    "how to send legal notice to someone",
    "online legal notice kaise bheje",
    "how to send legal notice in india",
    "legal notice drafting charges India",
    "advocate notice via speed post",
    "Section 80 CPC notice procedure",
    "Section 138 NI Act demand notice process",
    "rejoinder notice drafting"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-legal-notice-online-india',
  },
  openGraph: {
    title: "How to Send a Legal Notice to Someone in India (Process, Fees & Kaise Bheje)",
    description: "Step-by-step guide on how to send a legal notice to someone in India: advocate drafting charges, Speed Post RPAD rules & 15-day notice period.",
    url: "https://www.legalrecovery.in/send-legal-notice-online-india",
    type: "article",
  },
};

export default function SendLegalNoticePage() {
  return <SendLegalNoticeClient />;
}
