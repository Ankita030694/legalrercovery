import { Metadata } from "next";
import TourRefundClient from "./TourRefundClient";

export const metadata: Metadata = {
  title: "Tour Package Refund Recovery: Recover Withheld Holiday Dues | LegalRecovery",
  description: "Struggling to get your tour package refund in India? Learn your legal rights against arbitrary operator cancellations and get expert legal representation to recover your money.",
  keywords: [
    "tour package refund recovery",
    "holiday package cancellation refund consumer court",
    "tour operator deficiency in service case",
    "OTA package tour refund delay",
    "how to get money back from tour operator",
    "package tour cancellation fee dispute India",
    "National Consumer Helpline travel package",
    "e-Daakhil case against tour operator",
    "substandard travel itinerary compensation"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/tour-package-refund',
  },
};

export default function TourRefundPage() {
  return <TourRefundClient />;
}
