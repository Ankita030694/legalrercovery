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
  openGraph: {
    title: "Flat Booking Cancellation Refund | LegalRecovery",
    description: "Need a refund after canceling a flat booking? Recover your apartment booking advance and installments under RERA and consumer protection law.",
    url: "https://www.legalrecovery.in/recovery/flat-booking-cancellation-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Flat Booking Cancellation Refund | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flat Booking Cancellation Refund | LegalRecovery",
    description: "Need a refund after canceling a flat booking? Recover your apartment booking advance and installments under RERA and consumer protection law.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FlatBookingCancellationRefundPage() {
  return <FlatBookingCancellationRefundClient />;
}
