import { Metadata } from "next";
import FlightCancellationRefundClient from "./FlightCancellationRefundClient";

export const metadata: Metadata = {
  title: "Recover Flight Cancellation Refund | LegalRecovery",
  description: "Airline denied your cancellation refund or forced a credit shell? Learn DGCA CAR rules, AirSewa options, and recover your full ticket amount in India.",
  keywords: [
    "flight cancellation refund India",
    "airline refund denied India",
    "DGCA refund rules 2026",
    "credit shell vs cash refund airline",
    "AirSewa complaint flight refund",
    "consumer court airline refund India",
    "IndiGo refund denied",
    "Air India refund delay",
    "flight ticket refund consumer forum",
    "travel agent refund delay MakeMyTrip"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/flight-cancellation-refund',
  },
  openGraph: {
    title: "Recover Flight Cancellation Refund | LegalRecovery",
    description: "Airline denied your cancellation refund or forced a credit shell? Learn DGCA CAR rules, AirSewa options, and recover your full ticket amount in India.",
    url: "https://www.legalrecovery.in/recovery/flight-cancellation-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Flight Cancellation Refund | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Flight Cancellation Refund | LegalRecovery",
    description: "Airline denied your cancellation refund or forced a credit shell? Learn DGCA CAR rules, AirSewa options, and recover your full ticket amount in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FlightCancellationRefundPage() {
  return <FlightCancellationRefundClient />;
}
