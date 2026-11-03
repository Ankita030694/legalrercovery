import { Metadata } from "next";
import NoticePeriodSalaryClient from "./NoticePeriodSalaryClient";

export const metadata: Metadata = {
  title: "Notice Pay Recovery: Meaning & What's Legal in India",
  description: "What notice pay recovery means, when an employer can deduct it from your FnF, basic vs gross pay, and how to challenge an excessive deduction.",
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
    title: "Notice Pay Recovery: Meaning & What's Legal in India",
    description: "What notice pay recovery means, when an employer can deduct it from your FnF, basic vs gross pay, and how to challenge an excessive deduction.",
    url: "https://www.legalrecovery.in/recovery/notice-period-salary",
    type: "article",
  },
};

export default function NoticePeriodSalaryPage() {
  return <NoticePeriodSalaryClient />;
}
