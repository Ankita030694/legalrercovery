import { Metadata } from "next";
import RentalAgreementNotarizationClient from "./RentalAgreementNotarizationClient";

export const metadata: Metadata = {
  title: "Is a Notarized Rent Agreement Valid? India Rules Explained",
  description: "Is a notarized 11-month rent agreement valid in court, and is one without a notary valid? When registration becomes mandatory, explained simply.",
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
    title: "Is a Notarized Rent Agreement Valid? India Rules Explained",
    description: "Is a notarized 11-month rent agreement valid in court, and is one without a notary valid? When registration becomes mandatory, explained simply.",
    url: "https://www.legalrecovery.in/should-rental-agreements-be-notarized-in-india",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Is a Notarized Rent Agreement Valid? India Rules Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is a Notarized Rent Agreement Valid? India Rules Explained",
    description:
      "Is a notarized 11-month rent agreement valid in court, and is one without a notary valid? When registration becomes mandatory, explained simply.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function RentalAgreementNotarizationPage() {
  return <RentalAgreementNotarizationClient />;
}
