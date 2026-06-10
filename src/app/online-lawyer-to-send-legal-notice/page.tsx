import { Metadata } from "next";
import OnlineLawyerNoticeClient from "./OnlineLawyerNoticeClient";

export const metadata: Metadata = {
  title: "Hire Online Lawyer to Send a Legal Notice in India: Process & Fees",
  description: "Hire an online lawyer to send a legal notice. Understand advocate fees, drafting guidelines, BCI rules, digital evidence tracking, and ODR settlement pipelines.",
  keywords: [
    "online lawyer to send legal notice",
    "hire advocate online legal notice",
    "legal notice drafting fees",
    "lawyer for money recovery notice",
    "send legal notice through advocate online",
    "advocate letterhead legal notice",
    "pre litigation advocate consultation"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/online-lawyer-to-send-legal-notice',
  },
};

export default function OnlineLawyerNoticePage() {
  return <OnlineLawyerNoticeClient />;
}
