import { Metadata } from "next";
import SendLegalNoticeClient from "./SendLegalNoticeClient";

export const metadata: Metadata = {
  title: "Send a Legal Notice Online in India (Kaise Bheje): Steps",
  description: "How to send a legal notice online: do you need a lawyer, drafting charges, Speed Post delivery and the 15-day notice period, step by step.",
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
    title: "Send a Legal Notice Online in India (Kaise Bheje): Steps",
    description: "How to send a legal notice online: do you need a lawyer, drafting charges, Speed Post delivery and the 15-day notice period, step by step.",
    url: "https://www.legalrecovery.in/send-legal-notice-online-india",
    type: "article",
  },
};

export default function SendLegalNoticePage() {
  return <SendLegalNoticeClient />;
}
