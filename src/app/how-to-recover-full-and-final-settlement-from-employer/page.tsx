import { Metadata } from "next";
import FullAndFinalSettlementClient from "./FullAndFinalSettlementClient";

export const metadata: Metadata = {
  title: "Company Not Giving Full and Final Settlement? What to Do",
  description: "FnF stuck after resignation? Wages due on exit must be paid within 2 working days under the Code on Wages. How to complain and send a legal notice.",
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
    title: "Company Not Giving Full and Final Settlement? What to Do",
    description: "FnF stuck after resignation? Wages due on exit must be paid within 2 working days under the Code on Wages. How to complain and send a legal notice.",
    url: "https://www.legalrecovery.in/how-to-recover-full-and-final-settlement-from-employer",
    type: "article",
  },
};

export default function FullAndFinalSettlementPage() {
  return <FullAndFinalSettlementClient />;
}
