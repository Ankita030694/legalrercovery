import { Metadata } from "next";
import BuilderBookingCancellationRefundClient from "./BuilderBookingCancellationRefundClient";

export const metadata: Metadata = {
  title: "Flat Booking Cancellation: Recover Refund from Builder",
  description: "Recover token money after flat booking cancellation. Serve a legal notice to the builder for booking refunds under RERA guidelines and contract law.",
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
