import { Metadata } from "next";
import MoneyLentClient from "./MoneyLentClient";

export const metadata: Metadata = {
  title: "Recover Money Lent Without Agreement | LegalRecovery",
  description: "Lent money without an agreement? Learn about oral contract validity, summary suits, digital evidence, and how to recover your money legally in India.",
  keywords: [
    "recover money lent without agreement",
    "recovery of friendly loan without contract",
    "validity of oral agreement for loan india",
    "how to recover money from friend legally",
    "legal notice for money recovery without agreement",
    "order 37 cpc oral agreement",
    "limitations act money recovery friend",
    "whatsapp chat proof for loan recovery",
    "recover money without written contract",
    "friendly loan recovery legal remedies india"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/money-lent-without-agreement',
  },
};

export default function MoneyLentPage() {
  return <MoneyLentClient />;
}
