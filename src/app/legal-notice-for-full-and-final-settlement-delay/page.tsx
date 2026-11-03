import { Metadata } from "next";
import FnFSettlementNoticeClient from "./FnFSettlementNoticeClient";

export const metadata: Metadata = {
  title: "FnF Delay Mail Format & Legal Notice to Employer",
  description: "A ready full and final settlement delay mail to send HR, and how to escalate with a legal notice to your employer if your FnF still isn't paid.",
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
    title: "FnF Delay Mail Format & Legal Notice to Employer",
    description: "A ready full and final settlement delay mail to send HR, and how to escalate with a legal notice to your employer if your FnF still isn't paid.",
    url: "https://www.legalrecovery.in/legal-notice-for-full-and-final-settlement-delay",
    type: "article",
  },
};

export default function FnFSettlementNoticePage() {
  return <FnFSettlementNoticeClient />;
}
