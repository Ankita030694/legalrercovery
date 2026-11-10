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
  openGraph: {
    title: "Travel Booking Refund Recovery in India | LegalRecovery",
    description: "Delayed or denied travel booking refunds from OTAs, hotels, or tour operators in India? Know your consumer rights and get expert legal help to recover dues.",
    url: "https://www.legalrecovery.in/recovery/travel-booking-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Travel Booking Refund Recovery in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Booking Refund Recovery in India | LegalRecovery",
    description: "Delayed or denied travel booking refunds from OTAs, hotels, or tour operators in India? Know your consumer rights and get expert legal help to recover dues.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function TravelRefundPage() {
  return <TravelRefundClient />;
}
