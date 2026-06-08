import { Metadata } from "next";
import FlightCancellationRefundClient from "./FlightCancellationRefundClient";

export const metadata: Metadata = {
  title: "Flight Cancellation Refund Denied? Recover Your Full Ticket Amount | DGCA Rules & Consumer Rights | LegalRecovery",
  description: "Has your airline denied your flight cancellation refund, forced a credit shell, or delayed reimbursement for weeks? Learn your rights under DGCA CAR Section 3, the new 2026 refund regulations, and the Consumer Protection Act. Recover your full ticket amount with interest and compensation.",
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
