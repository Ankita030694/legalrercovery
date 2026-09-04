import { Metadata } from "next";
import AirlineRefundClient from "./AirlineRefundClient";

export const metadata: Metadata = {
  title: "Airline Refund Amount Recovery in India | LegalRecovery",
  description: "Struggling to get your airline ticket refund in India? Learn your legal rights under DGCA CAR rules and get expert assistance to recover withheld dues.",
  keywords: [
    "airline refund amount recovery",
    "DGCA flight cancellation refund rules",
    "airline ticket refund credit card timeline",
    "flight refund travel agency delay",
    "how to recover money from airline",
    "forced travel voucher refund",
    "refund of taxes PSF UDF",
    "AirSewa refund complaint",
    "consumer court refund case against airline",
    "airline refund contact Nodal officer"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/airline-refund-amount',
  },
};

export default function AirlineRefundPage() {
  return <AirlineRefundClient />;
}
