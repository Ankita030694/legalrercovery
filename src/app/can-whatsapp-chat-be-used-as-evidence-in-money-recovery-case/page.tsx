import { Metadata } from "next";
import WhatsappEvidenceClient from "./WhatsappEvidenceClient";

export const metadata: Metadata = {
  title: "Can WhatsApp Chat Be Evidence in Money Recovery Cases?",
  description: "WhatsApp chats and blue ticks are admissible in Indian courts for debt recovery with a Section 63 BSA certificate and can reset limitation periods.",
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
    title: "Can WhatsApp Chat Be Evidence in Money Recovery Cases?",
    description: "How to use WhatsApp chats, voice notes, and UPI screenshots with a Section 63 BSA certificate to win a money recovery claim in India.",
    url: "https://www.legalrecovery.in/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Can WhatsApp Chat Be Evidence in Money Recovery Cases?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can WhatsApp Chat Be Evidence in Money Recovery Cases?",
    description: "How to use WhatsApp chats, voice notes, and UPI screenshots with a Section 63 BSA certificate to win a money recovery claim in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function WhatsappEvidencePage() {
  return <WhatsappEvidenceClient />;
}
