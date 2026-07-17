import { Metadata } from "next";
import AirlineRefundNoticeClient from "./AirlineRefundNoticeClient";

export const metadata: Metadata = {
  title: "Flight Ticket Refund Legal Notice to Airline & Travel Portal",
  description: "Learn the DGCA flight cancellation refund rules and how to draft a joint legal notice to recover your ticket refund from travel agents and airlines in India.",
  keywords: [
    "legal notice to airline for flight refund",
    "dgca flight cancellation refund rules",
    "how to recover ticket refund from travel agent",
    "airline delay compensation india"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-airline-travel-agent-refund',
  },
};

export default function AirlineRefundNoticePage() {
  return <AirlineRefundNoticeClient />;
}
