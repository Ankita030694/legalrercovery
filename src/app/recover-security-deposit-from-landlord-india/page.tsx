import { Metadata } from "next";
import LandlordDepositClient from "./LandlordDepositClient";

export const metadata: Metadata = {
  title: "Recover Rental Security Deposit from Landlord in India",
  description: "Legal steps to recover your rental security deposit from a landlord in India. Learn about the Model Tenancy Act, Rent Courts, and Order 37 summary suits.",
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
};

export default function LandlordDepositPage() {
  return <LandlordDepositClient />;
}
