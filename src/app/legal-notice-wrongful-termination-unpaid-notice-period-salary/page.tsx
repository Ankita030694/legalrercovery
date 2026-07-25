import { Metadata } from "next";
import WrongfulTerminationClient from "./WrongfulTerminationClient";

export const metadata: Metadata = {
  title: "Wrongful Termination & Unpaid Salary Legal Notice",
  description: "Sudden termination without cause or forced resignation? Learn how to recover unpaid notice period salary and severance pay under Indian labor laws.",
  keywords: [
    "legal notice for wrongful termination india",
    "unpaid notice period salary recovery",
    "forced resignation legal options",
    "how to claim severance pay from employer"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-wrongful-termination-unpaid-notice-period-salary',
  },
};

export default function WrongfulTerminationPage() {
  return <WrongfulTerminationClient />;
}
