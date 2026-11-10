import { Metadata } from "next";
import BankTransferFraudClient from "./BankTransferFraudClient";

export const metadata: Metadata = {
  title: "Recover Bank Transfer Fraud Amount in India | LegalRecovery",
  description: "Victim of unauthorized net banking, RTGS, or NEFT fraud? Learn about RBI customer protection circulars, interbank recall steps, and legal notices.",
  keywords: [
    "recover bank transfer fraud amount",
    "unauthorized net banking transfer refund",
    "neft rtgs fraud recovery legal process",
    "rbi customer liability bank transfer fraud",
    "how to recall fraudulent bank transfer",
    "banking ombudsman net banking scam",
    "mule account freeze rbi circular",
    "legal notice to bank unauthorized transfer",
    "digital evidence certificate bank fraud",
    "consumer court bank negligence net banking"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/bank-transfer-fraud-amount',
  },
  openGraph: {
    title: "Recover Bank Transfer Fraud Amount in India | LegalRecovery",
    description: "Victim of unauthorized net banking, RTGS, or NEFT fraud? Learn about RBI customer protection circulars, interbank recall steps, and legal notices.",
    url: "https://www.legalrecovery.in/recovery/bank-transfer-fraud-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Bank Transfer Fraud Amount in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Bank Transfer Fraud Amount in India | LegalRecovery",
    description: "Victim of unauthorized net banking, RTGS, or NEFT fraud? Learn about RBI customer protection circulars, interbank recall steps, and legal notices.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function BankTransferPage() {
  return <BankTransferFraudClient />;
}
