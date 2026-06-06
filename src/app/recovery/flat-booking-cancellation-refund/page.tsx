import { Metadata } from "next";
import FlatBookingCancellationRefundClient from "./FlatBookingCancellationRefundClient";

export const metadata: Metadata = {
  title: "Flat Booking Cancellation Refund? Recovery Legal Notice | LegalRecovery",
  description: "Struggling to get a refund after canceling your flat booking? LegalRecovery provides expert legal-tech assistance to recover your apartment booking dues and installments under RERA and consumer law.",
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
