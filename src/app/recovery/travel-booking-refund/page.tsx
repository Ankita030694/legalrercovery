import { Metadata } from "next";
import TravelRefundClient from "./TravelRefundClient";

export const metadata: Metadata = {
  title: "Travel Booking Refund Recovery in India | LegalRecovery",
  description: "Delayed or denied travel booking refunds from OTAs, hotels, or tour operators in India? Know your consumer rights and get expert legal help to recover dues.",
  keywords: [
    "travel booking refund recovery",
    "online travel agency refund delay",
    "OTA refund complaint India",
    "hotel booking cancellation refund rules",
    "tour package refund policy dispute",
    "excessive travel cancellation charges",
    "MakeMyTrip refund delay notice",
    "national consumer helpline travel refund",
    "consumer court case against travel portal",
    "recover holiday package booking money"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/travel-booking-refund',
  },
};

export default function TravelRefundPage() {
  return <TravelRefundClient />;
}
