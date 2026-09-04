import { Metadata } from "next";
import CyberFraudClient from "./CyberFraudClient";

export const metadata: Metadata = {
  title: "Recover Cyber Fraud Money in India | LegalRecovery",
  description: "Victim of online trading scams or banking cyber crime? Learn how to freeze mule accounts, use the 1930 helpline, and obtain court fund release orders.",
  keywords: [
    "recover cyber fraud money",
    "cyber crime money recovery legal process",
    "how to unfreeze bank account cyber cell",
    "online scam refund legal notice",
    "investment fraud money recovery india",
    "citizen financial cyber fraud reporting system",
    "section 503 bnss release of frozen funds",
    "information technology act section 79 liability",
    "mule account freeze police complaint",
    "cyber crime cell fir drafting"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/cyber-fraud-money',
  },
};

export default function CyberPage() {
  return <CyberFraudClient />;
}
