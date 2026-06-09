import { Metadata } from "next";
import LandlordDepositClient from "./LandlordDepositClient";

export const metadata: Metadata = {
  title: "Recover Rental Security Deposit from Landlord in India",
  description: "A comprehensive guide on the legal steps to recover a security deposit from a landlord in India. Learn about Model Tenancy Act, Rent Controllers, and Summary Suits.",
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
    canonical: 'https://www.legalrecovery.in/what-are-the-legal-steps-to-recover-a-security-deposit-from-a-landlord-who-is-refusing-to-return-it-in-india',
  },
};

export default function LandlordDepositPage() {
  return <LandlordDepositClient />;
}
