import { Metadata } from "next";
import LandlordDeductionsNoticeClient from "./LandlordDeductionsNoticeClient";

export const metadata: Metadata = {
  title: "Landlord Deducting Painting or Repair Charges from Security Deposit? Legal Notice & Rules",
  description: "Can a landlord deduct 1 month's rent for repainting, deep cleaning, or normal wear and tear in India? Challenge illegal security deposit deductions via an Advocate Legal Notice.",
  keywords: [
    "landlord deducted painting charges from deposit",
    "deductions from security deposit rules india",
    "how to challenge landlord deposit deductions",
    "tenant rights security deposit painting charges",
    "normal wear and tear rental deposit india"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-landlord-unreasonable-security-deposit-deductions',
  },
  openGraph: {
    title: "Landlord Deducting Painting or Repair Charges from Security Deposit? Legal Notice & Rules",
    description: "Stop illegal painting and wear-and-tear deductions from your rental security deposit with a formal Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/legal-notice-landlord-unreasonable-security-deposit-deductions",
    type: "article",
  },
};

export default function LandlordDeductionsPage() {
  return <LandlordDeductionsNoticeClient />;
}
