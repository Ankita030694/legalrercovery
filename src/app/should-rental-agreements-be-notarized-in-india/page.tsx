import { Metadata } from "next";
import RentalAgreementNotarizationClient from "./RentalAgreementNotarizationClient";

export const metadata: Metadata = {
  title: "Is a Notarized Rent Agreement Valid in India? (11-Month vs Registered Rules)",
  description: "Yes—an 11-month notarized rent agreement on stamp paper is legally valid in Indian courts for security deposit recovery and tenancy proof, while leases over 12 months require Sec 17 registration.",
  keywords: [
    "is notarized rent agreement valid in court",
    "is rent agreement valid without notary",
    "notarized rent agreement validity india",
    "rent agreement registration vs notarization",
    "11 month rent agreement stamp duty",
    "security deposit dispute notarized agreement",
    "value of notarized lease deed in india"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/should-rental-agreements-be-notarized-in-india",
  },
  openGraph: {
    title: "Is a Notarized Rent Agreement Valid in India? (11-Month vs Registered Rules)",
    description: "Yes—an 11-month notarized rent agreement on stamp paper is legally valid in Indian courts for security deposit recovery, while leases over 12 months require registration.",
    url: "https://www.legalrecovery.in/should-rental-agreements-be-notarized-in-india",
    type: "article",
  },
};

export default function RentalAgreementNotarizationPage() {
  return <RentalAgreementNotarizationClient />;
}
