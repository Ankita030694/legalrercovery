import { Metadata } from "next";
import OnlineLegalNoticeClient from "./OnlineLegalNoticeClient";

export const metadata: Metadata = {
  title: "Send Legal Notice Online in India: Advocate Drafting, Speed Post & Tracking",
  description: "Send an Advocate-drafted Online Legal Notice in India via Registered Speed Post, WhatsApp & Email (Section 63 BSA valid). Check online legal notice validity, tracking & ₹999 fixed fee.",
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
    title: "Send Legal Notice Online in India: Advocate Drafting, Speed Post & Tracking",
    description: "Send an Advocate-drafted Online Legal Notice in India via Registered Speed Post, WhatsApp & Email (Section 63 BSA valid).",
    url: "https://www.legalrecovery.in/online-legal-notice",
    type: "article",
  },
};

export default function OnlineLegalNoticePage() {
  return <OnlineLegalNoticeClient />;
}
