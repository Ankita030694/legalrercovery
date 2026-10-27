import { Metadata } from "next";
import FnFSettlementNoticeClient from "./FnFSettlementNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice to Employer for Full and Final Settlement Delay (Format & Mail Draft)",
  description: "Delay in Full and Final settlement? Get the F&F reminder mail format and send an Advocate Legal Notice to your employer for unpaid F&F salary, gratuity, and relieving letter within 15 days.",
  keywords: [
    "legal notice to employer for full and final settlement",
    "delay in full and final settlement mail format word",
    "legal notice for full and final settlement",
    "withholding fnf salary legal notice",
    "employer delay fnf payment law india",
    "full and final settlement rules labour law",
    "unpaid salary notice to company"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-for-full-and-final-settlement-delay',
  },
  openGraph: {
    title: "Legal Notice to Employer for Full and Final Settlement Delay (Format & Mail Draft)",
    description: "Serve a formal Legal Notice to your employer for withheld F&F settlement, unpaid salary, gratuity, and relieving letter.",
    url: "https://www.legalrecovery.in/legal-notice-for-full-and-final-settlement-delay",
    type: "article",
  },
};

export default function FnFSettlementNoticePage() {
  return <FnFSettlementNoticeClient />;
}
