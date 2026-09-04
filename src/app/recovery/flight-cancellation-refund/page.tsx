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
};

export default function FlightCancellationRefundPage() {
  return <FlightCancellationRefundClient />;
}
