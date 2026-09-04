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
};

export default function HotelRefundPage() {
  return <HotelRefundClient />;
}
