import { Metadata } from "next";
import UPIFraudClient from "./UPIFraudClient";

export const metadata: Metadata = {
  title: "Recover UPI Fraud Amount in India | LegalRecovery",
  description: "Victim of an online UPI scam, fake QR code, or remote access app fraud? Learn the NPCI dispute mechanism, RBI customer liability rules, and legal notice actions.",
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
};

export default function UPIPage() {
  return <UPIFraudClient />;
}
