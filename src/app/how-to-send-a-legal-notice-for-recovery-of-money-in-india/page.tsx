import { Metadata } from "next";
import HowToSendLegalNoticeClient from "./HowToSendLegalNoticeClient";

export const metadata: Metadata = {
  title: "How to Send a Legal Notice for Money Recovery in India",
  description: "Step-by-step guide to drafting and sending a legal notice for money recovery (loans, dues, freelancer fees) online via Speed Post in India.",
  keywords: [
    "how to send legal notice for recovery of money",
    "step by step process legal notice money recovery",
    "how to draft recovery of money notice",
    "process of sending legal notice in India",
    "servicing legal notice digitally",
    "legal notice delivery WhatsApp email",
    "how to reply to recovery of money notice",
    "send legal notice online India",
    "money recovery advocate notice process"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-send-a-legal-notice-for-recovery-of-money-in-india',
  },
};

export default function HowToSendLegalNoticePage() {
  return <HowToSendLegalNoticeClient />;
}
