import { Metadata } from "next";
import CreditCardFraudClient from "./CreditCardFraudClient";

export const metadata: Metadata = {
  title: "Recover Credit Card Fraud Amount in India | LegalRecovery",
  description: "Victim of credit card cloning, skimming, unauthorized international billing, or online e-commerce fraud? Learn about the RBI customer protection circular, Visa/Mastercard dispute rules, and how to recover your funds.",
  keywords: [
    "recover credit card fraud amount",
    "unauthorized credit card transaction refund",
    "credit card billing dispute process",
    "rbi customer liability credit card fraud",
    "credit card chargeback rules india",
    "banking ombudsman credit card dispute",
    "how to reverse credit card fraud charge",
    "credit card skimming cloning legal notice",
    "amex dispute resolution guidelines",
    "consumer court credit card bank liability"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/credit-card-fraud-amount',
  },
};

export default function CreditCardFraudPage() {
  return <CreditCardFraudClient />;
}
