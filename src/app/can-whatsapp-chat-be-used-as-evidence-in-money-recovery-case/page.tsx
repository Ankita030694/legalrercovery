import { Metadata } from "next";
import WhatsappEvidenceClient from "./WhatsappEvidenceClient";

export const metadata: Metadata = {
  title: "Can WhatsApp Chat Be Used as Evidence in a Money Recovery Case in India? (Sec 63 BSA / 65B)",
  description: "Yes—WhatsApp messages, voice notes, and blue ticks are admissible in Indian courts for money recovery with a Section 63 BSA (formerly Sec 65B) Certificate and restart the 3-year limitation clock.",
  keywords: [
    "can whatsapp chat be used as evidence in money recovery case",
    "whatsapp chat evidence in indian court",
    "Section 63 BSA certificate whatsapp chat",
    "Indian Evidence Act Section 65B whatsapp",
    "blue tick legal proof money recovery",
    "digital evidence India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case',
  },
  openGraph: {
    title: "Can WhatsApp Chat Be Used as Evidence in a Money Recovery Case in India? (Sec 63 BSA / 65B)",
    description: "How to use WhatsApp chats, voice notes, and UPI screenshots with a Section 63 BSA certificate to win a money recovery claim in India.",
    url: "https://www.legalrecovery.in/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case",
    type: "article",
  },
};

export default function WhatsappEvidencePage() {
  return <WhatsappEvidenceClient />;
}
