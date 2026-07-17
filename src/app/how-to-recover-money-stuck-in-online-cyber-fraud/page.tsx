import { Metadata } from "next";
import CyberFraudRecoveryClient from "./CyberFraudRecoveryClient";

export const metadata: Metadata = {
  title: "How to Recover Money Stuck in Online Cyber Fraud | Legal Recovery",
  description: "Understand the RBI zero liability policy for cyber fraud and learn the exact step-by-step cyber crime refund process to recover fraudulent bank transactions in India.",
  keywords: [
    "cyber crime refund process",
    "rbi zero liability policy cyber fraud",
    "how to recover scammed money from bank",
    "legal notice to bank for cyber fraud",
    "recover fraudulent bank transaction"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-money-stuck-in-online-cyber-fraud',
  },
};

export default function CyberFraudRecoveryPage() {
  return <CyberFraudRecoveryClient />;
}
