import { Metadata } from "next";
import RetainedSalaryClient from "./RetainedSalaryClient";

export const metadata: Metadata = {
  title: "Recover Retained Salary & Deferred Pay | LegalRecovery",
  description: "Recover retained salary, deferred compensation, and withheld bonuses in India. Learn about the Payment of Wages Act, Order 37 summary suits, and notices.",
  keywords: [
    "recover retained salary India",
    "withheld salary legal notice advocate",
    "deferred compensation recovery",
    "retention bonus unpaid employer",
    "payment of wages act retained salary",
    "summary suit for withheld salary",
    "employee rights deferred pay India",
    "labor court complaint retained wages",
    "relieving letter withheld salary",
    "Section 316 BNS salary breach of trust"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/retained-salary',
  },
};

export default function RetainedSalaryPage() {
  return <RetainedSalaryClient />;
}
