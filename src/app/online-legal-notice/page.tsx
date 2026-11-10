import { Metadata } from "next";
import OnlineLegalNoticeClient from "./OnlineLegalNoticeClient";

export const metadata: Metadata = {
  title: "Send Legal Notice Online in India: Advocate Drafting",
  description: "Send an advocate-drafted online legal notice in India via Speed Post, WhatsApp, and email under Section 63 BSA. Fast dispatch with fixed ₹999 fee.",
  keywords: [
    "online legal notice",
    "send legal notice online",
    "legal notice online",
    "online notice",
    "how to check legal notice online",
    "online legal notice for recovery of money",
    "WhatsApp legal notice validity",
    "Section 63 BSA certificate",
    "digital legal notice service"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/online-legal-notice',
  },
  openGraph: {
    title: "Send Legal Notice Online in India: Advocate Drafting",
    description: "Send an Advocate-drafted Online Legal Notice in India via Registered Speed Post, WhatsApp & Email (Section 63 BSA valid).",
    url: "https://www.legalrecovery.in/online-legal-notice",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Send Legal Notice Online in India: Advocate Drafting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Legal Notice Online in India: Advocate Drafting",
    description: "Send an Advocate-drafted Online Legal Notice in India via Registered Speed Post, WhatsApp & Email (Section 63 BSA valid).",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function OnlineLegalNoticePage() {
  return <OnlineLegalNoticeClient />;
}
