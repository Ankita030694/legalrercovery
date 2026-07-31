import { Metadata } from "next";
import BuilderBookingCancellationRefundClient from "./BuilderBookingCancellationRefundClient";

export const metadata: Metadata = {
  title: "Flat Booking Cancellation: Recover Token Money Refund from Builder",
  description: "Learn how to recover token money after a flat booking cancellation. Serve a legal notice to the builder for booking amount refund under RERA guidelines and contract rules.",
  keywords: [
    "flat booking cancellation refund rules",
    "legal notice to builder for token money refund",
    "builder forfeits booking amount rera",
    "recover token money paid to builder"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/builder-booking-cancellation-refund-legal-notice",
  },
};

export default function BuilderBookingCancellationRefundPage() {
  return <BuilderBookingCancellationRefundClient />;
}
