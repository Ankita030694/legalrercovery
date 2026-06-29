import { Metadata } from "next";
import WhatsappEvidenceClient from "./WhatsappEvidenceClient";

export const metadata: Metadata = {
  title: "WhatsApp Chat Evidence for Money Recovery in India",
  description: "Learn how a WhatsApp chat with a blue tick serves as legally binding evidence under the Indian Evidence Act to recover your unpaid money efficiently.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "WhatsApp evidence",
    "Indian Evidence Act Section 65B",
    "blue tick legal proof",
    "digital evidence India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case',
  },
};

export default function WhatsappEvidencePage() {
  return <WhatsappEvidenceClient />;
}
