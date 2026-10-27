import { Metadata } from "next";
import OnlineNoticeDeliveryClient from "./OnlineNoticeDeliveryClient";

export const metadata: Metadata = {
  title: "Legally Valid Ways to Deliver a Legal Notice Online in India (WhatsApp, Email & Speed Post)",
  description: "Can you serve a legal notice via WhatsApp, Email, and Registered Speed Post in India? Supreme Court rules on double blue ticks, Section 27 Deemed Service & Section 63 BSA certification.",
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
  openGraph: {
    title: "Legally Valid Ways to Deliver a Legal Notice Online in India (WhatsApp, Email & Speed Post)",
    description: "Court-admissible modes of serving a legal notice in India: Registered Speed Post (Sec 27), WhatsApp Blue Ticks, and Email with Sec 63 BSA Certificate.",
    url: "https://www.legalrecovery.in/what-are-the-legally-valid-ways-to-deliver-a-legal-notice-online-in-india",
    type: "article",
  },
};

export default function OnlineNoticeDeliveryPage() {
  return <OnlineNoticeDeliveryClient />;
}
