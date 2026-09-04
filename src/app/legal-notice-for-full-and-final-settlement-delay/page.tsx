import { Metadata } from "next";
import FnFSettlementNoticeClient from "./FnFSettlementNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice for Withheld Salary & FnF Settlement",
  description: "Send a legal notice to your employer for withholding FNF settlement, gratuity, or unpaid salary. Understand employee rights under Indian labour laws.",
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
