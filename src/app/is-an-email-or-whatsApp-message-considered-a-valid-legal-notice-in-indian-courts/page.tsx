import { Metadata } from "next";
import DigitalNoticeValidityClient from "./DigitalNoticeValidityClient";

export const metadata: Metadata = {
  title: "Is Email or WhatsApp Message a Valid Legal Notice in Indian Courts?",
  description: "Exhaustive legal analysis on the validity of WhatsApp messages & emails as legal notices in India. Learn about court precedents, IT Act provisions, and BSA 2023 requirements.",
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
    canonical: 'https://www.legalrecovery.in/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts',
  },
};

export default function DigitalNoticeValidityPage() {
  return <DigitalNoticeValidityClient />;
}
