import { Metadata } from "next";
import HowToRecoverMoneyWithoutAgreementClient from "./HowToRecoverMoneyWithoutAgreementClient";

export const metadata: Metadata = {
  title: "How to Recover Money Lent Without a Written Agreement in India (UPI, Bank & WhatsApp Proof)",
  description: "Lent money to a friend, relative, or party without a written agreement? Use UPI/NEFT bank statements, WhatsApp chats (Sec 63 BSA) & an Advocate Legal Notice to recover your money legally.",
  keywords: [
    "how to recover money without written agreement",
    "recover money lent to friend without proof",
    "verbal agreement validity india section 10",
    "unwritten contract recovery",
    "informal loan recovery India",
    "recover money given via upi or bank transfer"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-money-without-written-agreement',
  },
  openGraph: {
    title: "How to Recover Money Lent Without a Written Agreement in India (UPI, Bank & WhatsApp Proof)",
    description: "Turn UPI receipts, bank transfers, and WhatsApp chats into legally enforceable proof under Section 10 Contract Act & Section 63 BSA.",
    url: "https://www.legalrecovery.in/how-to-recover-money-without-written-agreement",
    type: "article",
  },
};

export default function HowToRecoverMoneyWithoutAgreementPage() {
  return <HowToRecoverMoneyWithoutAgreementClient />;
}
