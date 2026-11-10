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
    canonical: 'https://www.legalrecovery.in/online-legal-notice',
  },
  openGraph: {
    title: "Send Legal Notice Online in India: Fees & Process",
    description: "Legal guide to sending a legal notice in India. Learn statutory requirements, response timelines, consequences of silence, and ODR integrations.",
    url: "https://www.legalrecovery.in/online-legal-notice",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Send Legal Notice Online in India: Fees & Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Legal Notice Online in India: Fees & Process",
    description: "Legal guide to sending a legal notice in India. Learn statutory requirements, response timelines, consequences of silence, and ODR integrations.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function SendLegalNoticePage() {
  return <SendLegalNoticeClient />;
}
