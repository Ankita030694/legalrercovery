import { Metadata } from "next";
import OnlineNoticeDeliveryClient from "./OnlineNoticeDeliveryClient";

export const metadata: Metadata = {
  title: "What are the Legally Valid Ways to Deliver a Legal Notice Online in India?",
  description: "Exhaustive legal guide on serving legal notices online in India. Learn about the validity of WhatsApp, email, and digital delivery under BSA 2023.",
  keywords: [
    "legally valid ways to deliver legal notice online in india",
    "send legal notice online india validity",
    "whatsapp summons double blue ticks court judgment",
    "email service of legal notice admissibility",
    "section 63 BSA electronic evidence certificate",
    "deemed service general clauses act section 27",
    "can I serve legal notice digitally in india"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/what-are-the-legally-valid-ways-to-deliver-a-legal-notice-online-in-india',
  },
};

export default function OnlineNoticeDeliveryPage() {
  return <OnlineNoticeDeliveryClient />;
}
