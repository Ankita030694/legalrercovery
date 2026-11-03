import { Metadata } from "next";
import NoticePeriodSalaryClient from "./NoticePeriodSalaryClient";

export const metadata: Metadata = {
  title: "Salary Withheld Meaning: Can a Company Hold Your Pay?",
  description: "What 'salary withheld' means, whether an employer can hold your pay during the notice period, and how to get withheld salary released.",
  keywords: [
    "salary withheld meaning",
    "employer withheld notice period salary",
    "can employer hold salary during notice period",
    "legal notice for notice period salary held",
    "salary on hold during notice period india",
    "notice period salary delay legal remedy"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-for-salary-withheld-during-notice-period",
  },
  openGraph: {
    title: "Salary Withheld Meaning: Can a Company Hold Your Pay?",
    description: "What 'salary withheld' means, whether an employer can hold your pay during the notice period, and how to get withheld salary released.",
    url: "https://www.legalrecovery.in/legal-notice-for-salary-withheld-during-notice-period",
    type: "article",
  },
};

export default function NoticePeriodSalaryPage() {
  return <NoticePeriodSalaryClient />;
}
