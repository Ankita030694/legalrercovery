import { Metadata } from "next";
import LandlordDeductionsNoticeClient from "./LandlordDeductionsNoticeClient";

export const metadata: Metadata = {
  title: "Landlord Deducting Security Deposit? Legal Notice",
  description: "Landlord deducting rent for painting or normal wear and tear? Challenge illegal security deposit deductions with an advocate legal notice in India.",
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
    title: "Landlord Deducting Security Deposit? Legal Notice",
    description: "Stop illegal painting and wear-and-tear deductions from your rental security deposit with a formal Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/legal-notice-landlord-unreasonable-security-deposit-deductions",
    type: "article",
  },
};

export default function LandlordDeductionsPage() {
  return <LandlordDeductionsNoticeClient />;
}
