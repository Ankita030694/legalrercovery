import { Metadata } from "next";
import RentalSecurityDepositClient from "./RentalSecurityDepositClient";

export const metadata: Metadata = {
  title: "Recover Rental Security Deposit from Landlord | LegalRecovery",
  description: "Is your landlord refusing to refund your rental security deposit or making arbitrary deductions for painting and cleaning? Learn how to legally recover your money in India.",
  keywords: [
    "recover rental security deposit from landlord",
    "legal notice to landlord for refund of security deposit",
    "landlord withholding security deposit painting charges",
    "model tenancy act security deposit refund rules",
    "rent court complaint for security deposit",
    "unregistered rent agreement security deposit recovery",
    "recover deposit from co-living platforms",
    "commercial lease security deposit recovery",
    "summary suit against landlord for deposit refund",
    "arbitrary deductions from rental security deposit"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/rental-security-deposit',
  },
};

export default function RentalSecurityDepositPage() {
  return <RentalSecurityDepositClient />;
}
