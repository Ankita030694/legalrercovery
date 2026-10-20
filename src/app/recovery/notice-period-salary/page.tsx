import { Metadata } from "next";
import NoticePeriodSalaryClient from "./NoticePeriodSalaryClient";

export const metadata: Metadata = {
  title: "Notice Pay Recovery & Pay in Lieu of Notice Dispute in India | Legal Notice",
  description: "Terminated without notice pay or employer deducting unfair notice period recovery from your FNF? Claim Pay in Lieu of Notice (PILON) or reverse notice buyout deductions via Legal Notice.",
  keywords: [
    "notice pay recovery",
    "recover notice period salary India",
    "payment in lieu of notice recovery",
    "unpaid notice pay legal notice",
    "notice period buyout deduction dispute",
    "shops and establishments act notice period",
    "wrongful termination notice pay India",
    "labor court complaint notice period salary",
    "Order 37 CPC summary suit notice pay",
    "termination without notice compensation"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/notice-period-salary',
  },
  openGraph: {
    title: "Notice Pay Recovery & Pay in Lieu of Notice Dispute in India | Legal Notice",
    description: "Terminated without notice pay or employer deducting unfair notice period recovery from your FNF? Claim Pay in Lieu of Notice via Legal Notice.",
    url: "https://www.legalrecovery.in/recovery/notice-period-salary",
    type: "article",
  },
};

export default function NoticePeriodSalaryPage() {
  return <NoticePeriodSalaryClient />;
}
