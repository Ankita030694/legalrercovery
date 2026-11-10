import { Metadata } from "next";
import LandlordDepositClient from "./LandlordDepositClient";

export const metadata: Metadata = {
  title: "Landlord Not Returning Security Deposit? Recovery Steps",
  description: "Landlord refusing rental deposit refund? Serve an advocate legal notice, stop illegal painting deductions, and recover your deposit with interest.",
  keywords: [
    "recover security deposit landlord india",
    "landlord refusing refund security deposit",
    "legal notice to landlord for security deposit",
    "model tenancy act 2021 security deposit",
    "rental agreement deposit deduction rules",
    "rent control act security deposit refund",
    "summary suit security deposit recovery",
    "normal wear and tear painting charges",
    "tenant rights security deposit india",
    "how to sue landlord for deposit refund"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recover-security-deposit-from-landlord-india',
  },
  openGraph: {
    title: "Landlord Not Returning Security Deposit? Recovery Steps",
    description: "Recover your rental security deposit from a defaulting landlord in 7–15 days via an Advocate Legal Notice and Rent Authority escalation.",
    url: "https://www.legalrecovery.in/recover-security-deposit-from-landlord-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Landlord Not Returning Security Deposit? Recovery Steps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landlord Not Returning Security Deposit? Recovery Steps",
    description: "Recover your rental security deposit from a defaulting landlord in 7–15 days via an Advocate Legal Notice and Rent Authority escalation.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function LandlordDepositPage() {
  return <LandlordDepositClient />;
}
