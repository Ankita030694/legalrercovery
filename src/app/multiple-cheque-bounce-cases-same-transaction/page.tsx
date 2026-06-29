import { Metadata } from "next";
import MultipleChequesClient from "./MultipleChequesClient";

export const metadata: Metadata = {
  title: "Consolidate Multiple Cheque Bounce Cases in India",
  description: "Learn how to consolidate multiple cheque bounce cases from a single transaction under Section 138 NI Act to save court fees and legal costs in India.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "multiple cheque bounce cases",
    "same transaction",
    "Section 138 NI Act",
    "consolidated legal notice",
    "cheque bounce jurisdiction"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/multiple-cheque-bounce-cases-same-transaction',
  },
};

export default function MultipleChequesPage() {
  return <MultipleChequesClient />;
}
