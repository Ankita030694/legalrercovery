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
  openGraph: {
    title: "Recover Debit Card Fraud Amount in India | LegalRecovery",
    description: "Lost money to ATM skimming or debit card fraud? Learn about the RBI Zero Liability circular, chargeback rules, and how to recover your funds in India.",
    url: "https://www.legalrecovery.in/recovery/debit-card-fraud-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Debit Card Fraud Amount in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Debit Card Fraud Amount in India | LegalRecovery",
    description: "Lost money to ATM skimming or debit card fraud? Learn about the RBI Zero Liability circular, chargeback rules, and how to recover your funds in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function DebitCardFraudPage() {
  return <DebitCardFraudClient />;
}
