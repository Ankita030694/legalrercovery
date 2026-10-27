import { Metadata } from "next";
import LandlordDepositClient from "./LandlordDepositClient";

export const metadata: Metadata = {
  title: "Landlord Not Returning Security Deposit in India? Legal Notice, Rent Court & 18% Interest",
  description: "Landlord refusing to refund your rental security deposit after vacating the flat? Serve an Advocate Legal Notice, stop illegal painting deductions & recover 100% deposit + 18% interest.",
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
    title: "Landlord Not Returning Security Deposit in India? Legal Notice, Rent Court & 18% Interest",
    description: "Recover your rental security deposit from a defaulting landlord in 7–15 days via an Advocate Legal Notice and Rent Authority escalation.",
    url: "https://www.legalrecovery.in/recover-security-deposit-from-landlord-india",
    type: "article",
  },
};

export default function LandlordDepositPage() {
  return <LandlordDepositClient />;
}
