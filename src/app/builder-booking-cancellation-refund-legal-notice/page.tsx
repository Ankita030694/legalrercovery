import { Metadata } from "next";
import BuilderBookingCancellationRefundClient from "./BuilderBookingCancellationRefundClient";

export const metadata: Metadata = {
  title: "Flat Booking Cancellation Refund: Legal Notice to Builder (RERA & Token Money)",
  description: "Builder forfeiting your token money or refusing flat booking cancellation refund? Serve a RERA & Consumer Act Legal Notice to the builder for 100% booking refund + interest.",
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
    title: "Flat Booking Cancellation Refund: Legal Notice to Builder (RERA & Token Money)",
    description: "Recover token money and booking advances from builders after flat cancellation via RERA and Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/builder-booking-cancellation-refund-legal-notice",
    type: "article",
  },
};

export default function BuilderBookingCancellationRefundPage() {
  return <BuilderBookingCancellationRefundClient />;
}
