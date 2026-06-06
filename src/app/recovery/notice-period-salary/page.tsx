import { Metadata } from "next";
import NoticePeriodSalaryClient from "./NoticePeriodSalaryClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Notice Period Salary & Dues | LegalRecovery",
  description: "Struggling to recover notice period salary, compensation in lieu of notice, or FNF dues in India? Learn about state labor laws, summary suits, and legal notices.",
  keywords: [
    "recover notice period salary India",
    "payment in lieu of notice recovery",
    "unpaid notice pay legal notice",
    "shops and establishments act notice period",
    "wrongful termination notice pay India",
    "labor court complaint notice period salary",
    "relieving letter withheld salary",
    "Order 37 CPC summary suit notice pay",
    "employee rights probation notice period",
    "termination without notice compensation"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/notice-period-salary',
  },
};

export default function NoticePeriodSalaryPage() {
  return <NoticePeriodSalaryClient />;
}
