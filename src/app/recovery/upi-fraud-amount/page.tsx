import { Metadata } from "next";
import UPIFraudClient from "./UPIFraudClient";

export const metadata: Metadata = {
  title: "Recover UPI Fraud Amount in India | LegalRecovery",
  description: "Victim of an online UPI scam or fake QR fraud? Learn the NPCI dispute mechanism, RBI zero-liability rules, and legal notice recovery actions.",
  keywords: [
    "recover upi fraud amount",
    "upi scam refund legal notice",
    "npci upi dispute redressal mechanism",
    "unauthorized upi transaction bank liability",
    "google pay phonepe scam refund",
    "how to recover money from upi scammer",
    "upi collect request fraud complaint",
    "zero customer liability upi fraud",
    "digital evidence certificate upi bounce",
    "consumer court bank negligence upi fraud"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/upi-fraud-amount',
  },
  openGraph: {
    title: "Recover UPI Fraud Amount in India | LegalRecovery",
    description: "Victim of an online UPI scam or fake QR fraud? Learn the NPCI dispute mechanism, RBI zero-liability rules, and legal notice recovery actions.",
    url: "https://www.legalrecovery.in/recovery/upi-fraud-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover UPI Fraud Amount in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover UPI Fraud Amount in India | LegalRecovery",
    description: "Victim of an online UPI scam or fake QR fraud? Learn the NPCI dispute mechanism, RBI zero-liability rules, and legal notice recovery actions.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function UPIPage() {
  return <UPIFraudClient />;
}
