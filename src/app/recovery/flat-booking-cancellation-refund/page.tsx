import { Metadata } from "next";
import FlatBookingCancellationRefundClient from "./FlatBookingCancellationRefundClient";

export const metadata: Metadata = {
  title: "Flat Booking Cancellation Refund | LegalRecovery",
  description: "Need a refund after canceling a flat booking? Recover your apartment booking advance and installments under RERA and consumer protection law.",
  keywords: [
    "flat booking cancellation refund",
    "cancel apartment booking refund rera",
    "flat cancellation charge rules rera",
    "legal notice for flat booking refund",
    "recover booking amount flat builder",
    "consumer court case flat cancellation refund",
    "refund of booking amount flat delayed possession",
    "builder forfeit flat booking amount limit",
    "rera rules flat cancellation refund",
    "flat booking cancellation email template"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/flat-booking-cancellation-refund',
  },
};

export default function FlatBookingCancellationRefundPage() {
  return <FlatBookingCancellationRefundClient />;
}
