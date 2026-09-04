import { Metadata } from "next";
import SendALegalNoticeClient from "./SendALegalNoticeClient";

export const metadata: Metadata = {
  title: "How to Send a Legal Notice in India: Process, Cost & Law",
  description: "Learn how to send a legal notice in India under CPC, NI Act, and TPA. Step-by-step procedure, drafting rules, e-signing, and online ODR options.",
  keywords: [
    "send a legal notice",
    "how to send legal notice in india",
    "cpc section 80 notice",
    "cheque bounce notice section 138",
    "tenant notice section 106 tpa",
    "legal notice procedure",
    "send legal notice online",
    "legal notice drafting fee",
    "pre litigation legal notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-a-legal-notice',
  },
};

export default function SendALegalNoticePage() {
  return <SendALegalNoticeClient />;
}
