import { Metadata } from "next";
import RentalAgreementNotarizationClient from "./RentalAgreementNotarizationClient";

export const metadata: Metadata = {
  title: "Is a Notarized Rent Agreement Valid in India? Rules",
  description: "Learn if a notarized rent agreement is valid in Indian courts. Understand the Registration Act 1908, 11-month leases, and deposit recovery rules.",
  keywords: [
    "is notarized rent agreement valid in court",
    "rent agreement registration vs notarization",
    "11 month rent agreement stamp duty",
    "security deposit dispute notarized agreement",
    "value of notarized lease deed in india"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/should-rental-agreements-be-notarized-in-india",
  },
};

export default function RentalAgreementNotarizationPage() {
  return <RentalAgreementNotarizationClient />;
}
