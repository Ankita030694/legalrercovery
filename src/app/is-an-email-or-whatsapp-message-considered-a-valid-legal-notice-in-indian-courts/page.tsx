import { Metadata } from "next";
import DigitalNoticeValidityClient from "./DigitalNoticeValidityClient";

export const metadata: Metadata = {
  title: "Is WhatsApp or Email a Valid Legal Notice in India?",
  description: "Legal analysis on the validity of WhatsApp and email legal notices in India. Learn court precedents, IT Act rules, and Section 63 BSA requirements.",
  keywords: [
    "is email or whatsapp valid legal notice in india",
    "whatsapp legal notice validity supreme court",
    "can we serve summons through whatsapp in india",
    "email legal notice validity IT Act section 4",
    "section 63 BSA electronic evidence certificate",
    "whatsapp message double ticks court evidence",
    "how to prove delivery of electronic legal notice",
    "legal notice online validity in indian courts"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/is-an-email-or-whatsapp-message-considered-a-valid-legal-notice-in-indian-courts',
  },
};

export default function DigitalNoticeValidityPage() {
  return <DigitalNoticeValidityClient />;
}
