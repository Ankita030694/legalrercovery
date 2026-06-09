import { Metadata } from "next";
import DiyLegalNoticeClient from "./DiyLegalNoticeClient";

export const metadata: Metadata = {
  title: "How to Send a Legal Notice Online in India Without a Lawyer?",
  description: "Exhaustive legal guide on drafting and sending a legal notice yourself (DIY) online or offline in India. Learn the rules, validity, risks, and process.",
  keywords: [
    "send legal notice online in india without lawyer",
    "how to send legal notice yourself",
    "diy legal notice format india",
    "validity of self drafted legal notice",
    "can I draft legal notice myself",
    "how to send legal notice via speed post",
    "legal notice process india"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer',
  },
};

export default function DiyLegalNoticePage() {
  return <DiyLegalNoticeClient />;
}
