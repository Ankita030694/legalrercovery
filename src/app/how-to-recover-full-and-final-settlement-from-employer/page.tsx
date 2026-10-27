import { Metadata } from "next";
import FullAndFinalSettlementClient from "./FullAndFinalSettlementClient";

export const metadata: Metadata = {
  title: "Company Not Giving Full and Final Settlement? Legal Action, Samadhan & Notice",
  description: "What to do if company is not giving Full and Final (F&F) settlement after resignation? Enforce the 48-hour wage rule, file a Samadhan complaint & serve an Advocate Legal Notice.",
  keywords: [
    "what to do if company is not giving full and final settlement",
    "if company is not giving full and final settlement",
    "full and final settlement complaint",
    "legal action if full and final settlement not done by employer",
    "how to recover full and final settlement from employer",
    "F&F settlement recovery",
    "unpaid salary legal notice",
    "employer withholding dues",
    "Payment of Wages Act"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-full-and-final-settlement-from-employer',
  },
  openGraph: {
    title: "Company Not Giving Full and Final Settlement? Legal Action, Samadhan & Notice",
    description: "Employer withholding your F&F settlement, gratuity, or leave encashment? Learn how to escalate via Samadhan portal and serve an Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/how-to-recover-full-and-final-settlement-from-employer",
    type: "article",
  },
};

export default function FullAndFinalSettlementPage() {
  return <FullAndFinalSettlementClient />;
}
