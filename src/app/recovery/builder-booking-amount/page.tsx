import { Metadata } from "next";
import BuilderBookingAmountClient from "./BuilderBookingAmountClient";

export const metadata: Metadata = {
  title: "Recover Builder Booking Amount Refund | LegalRecovery",
  description: "Builder refusing to refund booking token money? LegalRecovery provides expert legal-tech assistance to recover your property dues under RERA rules.",
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
