import { Metadata } from "next";
import OnlineNoticeDeliveryClient from "./OnlineNoticeDeliveryClient";

export const metadata: Metadata = {
  title: "Valid Ways to Deliver a Legal Notice Online in India",
  description: "Learn valid ways to serve a legal notice via WhatsApp, email, and Speed Post in India under Supreme Court rules, Section 27 and Section 63 BSA.",
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
    title: "Valid Ways to Deliver a Legal Notice Online in India",
    description: "Court-admissible modes of serving a legal notice in India: Registered Speed Post (Sec 27), WhatsApp Blue Ticks, and Email with Sec 63 BSA Certificate.",
    url: "https://www.legalrecovery.in/what-are-the-legally-valid-ways-to-deliver-a-legal-notice-online-in-india",
    type: "article",
  },
};

export default function OnlineNoticeDeliveryPage() {
  return <OnlineNoticeDeliveryClient />;
}
