import { Metadata } from "next";
import DiyLegalNoticeClient from "./DiyLegalNoticeClient";

export const metadata: Metadata = {
  title: "Can You Send a Legal Notice Without a Lawyer in India?",
  description: "Can you send a legal notice yourself in India? Compare self-drafted vs advocate letterhead notices for legal validity, admissibility, and risks.",
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
    title: "Can You Send a Legal Notice Without a Lawyer in India?",
    description: "Can you draft and send a legal notice yourself without hiring a lawyer in India? Compare self-drafted vs Advocate letterhead legal validity.",
    url: "https://www.legalrecovery.in/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Can You Send a Legal Notice Without a Lawyer in India?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can You Send a Legal Notice Without a Lawyer in India?",
    description: "Can you draft and send a legal notice yourself without hiring a lawyer in India? Compare self-drafted vs Advocate letterhead legal validity.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function DiyLegalNoticePage() {
  return <DiyLegalNoticeClient />;
}
