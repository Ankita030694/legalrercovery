import { Metadata } from "next";
import SendLegalNoticeClient from "./SendLegalNoticeClient";

export const metadata: Metadata = {
  title: "Send Legal Notice Online in India: Draft & Dispatch",
  description: "Send a formal legal notice online on advocate letterhead via Speed Post. Recover money, settle tenant issues, and resolve disputes legally in India.",
  keywords: [
    "send legal notice online India",
    "online legal notice drafting",
    "advocate notice for money recovery",
    "legal notice via speed post online",
    "legal notice WhatsApp email validity",
    "Section 80 CPC notice online",
    "Section 138 NI Act demand notice",
    "legal notice drafting charges India",
    "rejoinder notice drafting online",
    "how to send legal notice online India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-legal-notice-online-india',
  },
};

export default function SendLegalNoticePage() {
  return <SendLegalNoticeClient />;
}
