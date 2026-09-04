import { Metadata } from "next";
import TravelRecoveryClient from "./TravelRecoveryClient";

export const metadata: Metadata = {
  title: "Airline & Travel Dues Recovery | LegalRecovery",
  description: "Recover flight refunds, booking dues, hotel overcharges, and baggage compensation in India under DGCA regulations and Consumer Protection laws.",
  alternates: {
    canonical: "/services/airline-and-travel-recoveries",
  },
  openGraph: {
    title: "Airline & Travel Dues Recovery | LegalRecovery",
    description: "Recover flight refunds, booking dues, hotel overcharges, and baggage compensation in India under DGCA regulations and Consumer Protection laws.",
    type: "article",
    url: "/services/airline-and-travel-recoveries",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Airline and Travel Recoveries India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Airline & Travel Dues Recovery | LegalRecovery",
    description: "Exhaustive legal guide on recovering flight refunds, train booking dues, hotel overcharges, and baggage loss compensation in India under DGCA and Consumer Protection laws.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function TravelRecoveryPage() {
  return <TravelRecoveryClient />;
}
