import { Metadata } from "next";
import FlightCompensationClaimClient from "./FlightCompensationClaimClient";

export const metadata: Metadata = {
  title: "Flight Compensation Claim in India | LegalRecovery",
  description: "Claim flight compensation for delays, denied boarding, or lost baggage in India. Know your rights under DGCA CAR rules and Consumer Protection Act.",
  keywords: [
    "flight delay compensation India",
    "denied boarding compensation DGCA",
    "flight downgrading compensation India",
    "lost baggage claim airline India",
    "tarmac delay passenger rights India",
    "missed connection compensation airline",
    "DGCA CAR Section 3 compensation",
    "airline compensation consumer court India",
    "flight compensation claim how to file",
    "AirSewa complaint compensation"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/flight-compensation-claim',
  },
};

export default function FlightCompensationClaimPage() {
  return <FlightCompensationClaimClient />;
}
