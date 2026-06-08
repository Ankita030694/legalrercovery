import { Metadata } from "next";
import FlightCompensationClaimClient from "./FlightCompensationClaimClient";

export const metadata: Metadata = {
  title: "Flight Compensation Claim India: Delay, Denied Boarding, Downgrading & Lost Baggage | DGCA Rules | LegalRecovery",
  description: "Claim compensation for flight delays, denied boarding due to overbooking, involuntary downgrading, tarmac delays, lost or damaged baggage, and missed connections. Know your rights under DGCA CAR Section 3, the Montreal Convention, and the Consumer Protection Act, 2019.",
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
