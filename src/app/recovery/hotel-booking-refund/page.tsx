import { Metadata } from "next";
import HotelRefundClient from "./HotelRefundClient";

export const metadata: Metadata = {
  title: "Hotel Booking Refund Recovery in India | LegalRecovery",
  description: "Struggling to get a hotel booking refund in India? Know your consumer rights against cancellations and get expert legal assistance to recover dues.",
  keywords: [
    "hotel booking refund recovery",
    "hotel cancellation refund consumer court",
    "non-refundable hotel booking refund court cases",
    "OTA hotel refund delay complaint",
    "how to get money back from hotel booking",
    "hotel double charge refund India",
    "hotel booking cancellation fee dispute",
    "National Consumer Helpline hotel complaint",
    "e-Daakhil case against hotel",
    "substandard hotel room refund"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/hotel-booking-refund',
  },
  openGraph: {
    title: "Hotel Booking Refund Recovery in India | LegalRecovery",
    description: "Struggling to get a hotel booking refund in India? Know your consumer rights against cancellations and get expert legal assistance to recover dues.",
    url: "https://www.legalrecovery.in/recovery/hotel-booking-refund",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Hotel Booking Refund Recovery in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Booking Refund Recovery in India | LegalRecovery",
    description: "Struggling to get a hotel booking refund in India? Know your consumer rights against cancellations and get expert legal assistance to recover dues.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function HotelRefundPage() {
  return <HotelRefundClient />;
}
