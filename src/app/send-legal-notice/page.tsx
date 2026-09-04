import { Metadata } from "next";
import SendLegalNoticeClient from "./SendLegalNoticeClient";

export const metadata: Metadata = {
  title: "Send Legal Notice Online in India: Fees & Process",
  description: "Legal guide to sending a legal notice in India. Learn statutory requirements, response timelines, consequences of silence, and ODR integrations.",
  keywords: [
    "send legal notice",
    "send legal notice online india",
    "reply to legal notice",
    "adverse inference legal notice",
    "legal notice lawyer fees",
    "estoppel by silence legal notice",
    "how to send legal notice",
    "cpc section 80 notice period"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-legal-notice',
  },
};

export default function SendLegalNoticePage() {
  return <SendLegalNoticeClient />;
}
