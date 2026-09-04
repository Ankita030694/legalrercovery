import { Metadata } from "next";
import DebitCardFraudClient from "./DebitCardFraudClient";

export const metadata: Metadata = {
  title: "Recover Debit Card Fraud Amount in India | LegalRecovery",
  description: "Lost money to ATM skimming or debit card fraud? Learn about the RBI Zero Liability circular, chargeback rules, and how to recover your funds in India.",
  keywords: [
    "recover debit card fraud amount",
    "unauthorized debit card transaction refund",
    "atm skimming cloning card recovery",
    "rbi customer liability debit card fraud",
    "debit card chargeback process india",
    "banking ombudsman debit card dispute",
    "unauthorized card swipe reverse payment",
    "legal notice to bank unauthorized card transaction",
    "nfc contactless card fraud refund",
    "consumer court bank liability debit card skimming"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/debit-card-fraud-amount',
  },
};

export default function DebitCardFraudPage() {
  return <DebitCardFraudClient />;
}
