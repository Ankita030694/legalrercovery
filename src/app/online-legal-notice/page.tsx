import { Metadata } from "next";
import OnlineLegalNoticeClient from "./OnlineLegalNoticeClient";

export const metadata: Metadata = {
  title: "Online Legal Notice Services in India: Legality, Service & Process",
  description: "Learn about the legality of serving an online legal notice via WhatsApp, Email, or SMS in India. Understand Section 63 BSA 2023 admissibility and court rules.",
  keywords: [
    "online legal notice",
    "send legal notice online India",
    "WhatsApp legal notice validity",
    "legal notice via email CPC",
    "electronic legal notice service rules",
    "Section 63 BSA certificate",
    "digital legal notice service",
    "presumption of service online notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/online-legal-notice',
  },
};

export default function OnlineLegalNoticePage() {
  return <OnlineLegalNoticeClient />;
}
