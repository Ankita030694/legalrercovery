import { Metadata } from "next";
import DelayedFlightClient from "./DelayedFlightClient";

export const metadata: Metadata = {
  title: "Delayed Flight Compensation in India | LegalRecovery",
  description: "Struggling to claim delayed flight compensation in India? Learn your rights under DGCA CAR Section 3 and get expert legal help to recover dues.",
  keywords: [
    "delayed flight compensation India",
    "DGCA flight delay rules",
    "passenger rights delayed flight India",
    "how to claim compensation for flight delay",
    "airline delay refund India",
    "Montreal Convention flight delay India",
    "AirSewa complaint for delay",
    "consumer court case against airline for delay",
    "compensation for flight delay after resignation",
    "flight delay hotel accommodation rules"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/delayed-flight-compensation',
  },
};

export default function DelayedFlightPage() {
  return <DelayedFlightClient />;
}
