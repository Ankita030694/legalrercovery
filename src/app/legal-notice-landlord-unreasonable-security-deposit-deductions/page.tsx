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
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Landlord Deducting Security Deposit? Legal Notice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landlord Deducting Security Deposit? Legal Notice",
    description: "Stop illegal painting and wear-and-tear deductions from your rental security deposit with a formal Advocate Legal Notice.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function LandlordDeductionsPage() {
  return <LandlordDeductionsNoticeClient />;
}
