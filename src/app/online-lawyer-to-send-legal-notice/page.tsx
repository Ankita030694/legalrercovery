import { Metadata } from "next";
import OnlineLawyerNoticeClient from "./OnlineLawyerNoticeClient";

export const metadata: Metadata = {
  title: "Hire Online Lawyer to Send Legal Notice in India: Fees",
  description: "Hire an online lawyer to send a legal notice in India. Understand advocate fees, drafting rules, BCI guidelines, and digital ODR settlement pipelines.",
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
