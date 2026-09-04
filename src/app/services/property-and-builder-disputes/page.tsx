import { Metadata } from "next";
import PropertyDisputesClient from "./PropertyDisputesClient";

export const metadata: Metadata = {
  title: "Property & Builder Disputes Legal Recovery | LegalRecovery",
  description: "Recover booking token refunds, possession delay interest, and stalled project funds in India under RERA, Consumer Court, and IBC proceedings.",
  alternates: {
    canonical: "/services/property-and-builder-disputes",
  },
  openGraph: {
    title: "Property & Builder Disputes Legal Recovery | LegalRecovery",
    description: "Recover booking token refunds, possession delay interest, and stalled project funds in India under RERA, Consumer Court, and IBC proceedings.",
    type: "article",
    url: "/services/property-and-builder-disputes",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Property and Builder Disputes Recovery India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Property & Builder Disputes Legal Recovery | LegalRecovery",
    description: "Exhaustive legal guide on recovering booking token refunds, possession delays interest, and claiming refunds for incomplete builder projects in India under RERA, Consumer Court, and IBC.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function PropertyDisputesPage() {
  return <PropertyDisputesClient />;
}
