import { Metadata } from "next";
import BuilderBookingAmountClient from "./BuilderBookingAmountClient";

export const metadata: Metadata = {
  title: "Builder Not Refunding Booking Amount? Recovery Legal Notice | LegalRecovery",
  description: "Struggling to get a refund of your booking amount or token money from a builder? LegalRecovery provides expert legal-tech assistance to recover your property dues under RERA and Consumer Protection Act.",
  keywords: [
    "builder not refunding booking amount",
    "recover booking amount from builder",
    "rera booking refund",
    "builder forfeiture of booking amount limit",
    "legal notice to builder for refund",
    "consumer court case against builder refund",
    "builder not refunding token money",
    "how to get booking amount back from builder",
    "rera section 18 refund",
    "earnest money forfeiture builder rules"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/builder-booking-amount',
  },
};

export default function BuilderBookingAmountPage() {
  return <BuilderBookingAmountClient />;
}
