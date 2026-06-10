import { Metadata } from "next";
import LegalNoticeOnlineClient from "./LegalNoticeOnlineClient";

export const metadata: Metadata = {
  title: "Legal Notice Online Portal: Process, Validity & Pricing",
  description: "Learn about the legal notice online portal system in India. Understand how technology simplifies case submission, advocate drafting, and digital tracking.",
  keywords: [
    "legal notice online",
    "send legal notice online India",
    "online legal notice portal",
    "legal notice drafting online",
    "digital legal notice tracking",
    "how to send legal notice digitally",
    "e-courts notice system India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-online',
  },
};

export default function LegalNoticeOnlinePage() {
  return <LegalNoticeOnlineClient />;
}
