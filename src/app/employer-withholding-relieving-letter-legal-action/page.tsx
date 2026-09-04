import { Metadata } from "next";
import EmployerWithholdingClient from "./EmployerWithholdingClient";

export const metadata: Metadata = {
  title: "Employer Withholding Relieving Letter: Legal Action & Rights",
  description: "Learn the specific legal actions and steps to recover money and force the release of a withheld relieving letter from your employer in India.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "withholding relieving letter",
    "employer holding relieving letter",
    "labour court legal notice",
    "unpaid salary recovery",
    "labour commissioner complaint"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/employer-withholding-relieving-letter-legal-action',
  },
};

export default function EmployerWithholdingPage() {
  return <EmployerWithholdingClient />;
}
