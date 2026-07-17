import { Metadata } from "next";
import LandlordDeductionsNoticeClient from "./LandlordDeductionsNoticeClient";

export const metadata: Metadata = {
  title: "Tenant Legal Notice for Unreasonable Landlord Deposit Deductions",
  description: "Learn how to challenge landlord deposit deductions in India. Understand tenant rights regarding security deposit painting charges and draft a legal notice.",
  keywords: [
    "landlord deducted painting charges from deposit",
    "deductions from security deposit rules india",
    "how to challenge landlord deposit deductions",
    "tenant rights security deposit painting charges"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-landlord-unreasonable-security-deposit-deductions',
  },
};

export default function LandlordDeductionsPage() {
  return <LandlordDeductionsNoticeClient />;
}
