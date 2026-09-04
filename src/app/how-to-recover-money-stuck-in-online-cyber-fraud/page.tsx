import { Metadata } from "next";
import CyberFraudRecoveryClient from "./CyberFraudRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Money Stuck in Online Cyber Fraud | Recovery",
  description: "Understand RBI zero liability policy for cyber fraud and learn the step-by-step process to recover fraudulent bank and UPI transactions in India.",
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
