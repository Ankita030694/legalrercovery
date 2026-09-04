import { Metadata } from "next";
import RentalRecoveryClient from "./RentalRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Rent Security Deposits Legally | LegalRecovery",
  description: "Legal guide on rental deposit recovery in India. Learn notice formats, Model Tenancy Act rules, Rent Court procedures, and Order 37 CPC summary suits.",
  alternates: {
    canonical: "/services/security-deposits-and-rental-recoveries",
  },
  openGraph: {
    title: "Recover Rent Security Deposits Legally | LegalRecovery",
    description: "Legal guide on rental deposit recovery in India. Learn notice formats, Model Tenancy Act rules, Rent Court procedures, and Order 37 CPC summary suits.",
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
    title: "Recover Rent Security Deposits Legally | LegalRecovery",
    description: "Exhaustive legal guide on tenant and landlord recoveries in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function SecurityDepositsRentalRecoveryPage() {
  return <RentalRecoveryClient />;
}
