import { Metadata } from "next";
import FnFSettlementNoticeClient from "./FnFSettlementNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice for Withheld Salary & FnF Settlement",
  description: "Learn how to send a legal notice to your employer for withholding full and final settlement, gratuity, and unpaid salary. Understand the labour laws in India.",
  keywords: [
    "legal notice for full and final settlement",
    "withholding fnf salary legal notice",
    "employer delay fnf payment law india",
    "full and final settlement rules labour law",
    "unpaid salary notice to company"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-for-full-and-final-settlement-delay',
  },
};

export default function FnFSettlementNoticePage() {
  return <FnFSettlementNoticeClient />;
}
