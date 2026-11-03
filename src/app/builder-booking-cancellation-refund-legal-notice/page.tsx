import { Metadata } from "next";
import BuilderBookingCancellationRefundClient from "./BuilderBookingCancellationRefundClient";

export const metadata: Metadata = {
  title: "Flat Booking Cancelled? Get Your Booking Amount Back",
  description: "Builder forfeiting your booking or token amount after cancellation? How much a builder can legally deduct under RERA and how to demand a refund.",
  keywords: [
    "flat booking cancellation refund rules",
    "legal notice to builder for token money refund",
    "builder forfeits booking amount rera",
    "recover token money paid to builder",
    "builder not refunding booking amount after cancellation"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/builder-booking-cancellation-refund-legal-notice",
  },
  openGraph: {
    title: "Flat Booking Cancelled? Get Your Booking Amount Back",
    description: "Builder forfeiting your booking or token amount after cancellation? How much a builder can legally deduct under RERA and how to demand a refund.",
    url: "https://www.legalrecovery.in/builder-booking-cancellation-refund-legal-notice",
    type: "article",
  },
};

export default function BuilderBookingCancellationRefundPage() {
  return <BuilderBookingCancellationRefundClient />;
}
