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
  openGraph: {
    title: "Recover Builder Booking Amount Refund | LegalRecovery",
    description: "Builder refusing to refund booking token money? LegalRecovery provides expert legal-tech assistance to recover your property dues under RERA rules.",
    url: "https://www.legalrecovery.in/recovery/builder-booking-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Builder Booking Amount Refund | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Builder Booking Amount Refund | LegalRecovery",
    description: "Builder refusing to refund booking token money? LegalRecovery provides expert legal-tech assistance to recover your property dues under RERA rules.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function BuilderBookingAmountPage() {
  return <BuilderBookingAmountClient />;
}
