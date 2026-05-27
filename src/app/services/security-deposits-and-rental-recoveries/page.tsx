import { Metadata } from "next";
import RentalRecoveryClient from "./RentalRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Stuck Rent Security Deposits Legally in India | LegalRecovery",
  description: "Exhaustive legal guide on tenant and landlord recoveries in India. Learn legal notice formats, Model Tenancy Act rules, Rent Court filings, wear-and-tear guidelines, and Order 37 CPC summary suits.",
  openGraph: {
    title: "Recover Stuck Rent Security Deposits Legally in India | LegalRecovery",
    description: "Exhaustive legal guide on tenant and landlord recoveries in India. Learn legal notice formats, Model Tenancy Act rules, Rent Court filings, wear-and-tear guidelines, and Order 37 CPC summary suits.",
    type: "article",
    url: "/services/security-deposits-and-rental-recoveries",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Security Deposits and Rental Recoveries India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Stuck Rent Security Deposits Legally in India | LegalRecovery",
    description: "Exhaustive legal guide on tenant and landlord recoveries in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function SecurityDepositsRentalRecoveryPage() {
  return <RentalRecoveryClient />;
}
