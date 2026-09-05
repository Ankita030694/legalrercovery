import { Metadata } from "next";
import FullAndFinalSettlementClient from "./FullAndFinalSettlementClient";

export const metadata: Metadata = {
  title: "Recover Full & Final Settlement From Employer in India",
  description: "Learn how to recover your full and final settlement from an employer wrongfully withholding dues after resignation or termination in India.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "full and final settlement",
    "F&F settlement recovery",
    "unpaid salary legal notice",
    "employer withholding dues",
    "Payment of Wages Act"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-full-and-final-settlement-from-employer',
  },
};

export default function FullAndFinalSettlementPage() {
  return <FullAndFinalSettlementClient />;
}
