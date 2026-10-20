import { Metadata } from "next";
import DiyLegalNoticeClient from "./DiyLegalNoticeClient";

export const metadata: Metadata = {
  title: "Can You Send a Legal Notice Without a Lawyer in India? (Self-Drafted Validity)",
  description: "Can you draft and send a legal notice yourself without hiring a lawyer in India? Compare self-drafted vs Advocate letterhead legal validity, court admissibility & risks.",
  keywords: [
    "how to send a legal notice without a lawyer",
    "can we send legal notice without lawyer",
    "how to send legal notice without lawyer in india",
    "do i need a lawyer to send legal notice",
    "how to send legal notice yourself",
    "diy legal notice format india",
    "validity of self drafted legal notice",
    "can I draft legal notice myself"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer',
  },
  openGraph: {
    title: "Can You Send a Legal Notice Without a Lawyer in India? (Self-Drafted Validity)",
    description: "Can you draft and send a legal notice yourself without hiring a lawyer in India? Compare self-drafted vs Advocate letterhead legal validity.",
    url: "https://www.legalrecovery.in/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer",
    type: "article",
  },
};

export default function DiyLegalNoticePage() {
  return <DiyLegalNoticeClient />;
}
