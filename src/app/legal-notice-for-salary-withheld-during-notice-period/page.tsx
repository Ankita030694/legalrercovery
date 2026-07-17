import { Metadata } from "next";
import NoticePeriodSalaryClient from "./NoticePeriodSalaryClient";

export const metadata: Metadata = {
  title: "Recover Salary Withheld During Notice Period | Legal Remedy",
  description: "Learn how to recover notice period salary withheld by your employer under the guise of final settlement. Serve a legal notice to employer before your final day.",
  keywords: [
    "employer withheld notice period salary",
    "legal notice for notice period salary",
    "can employer hold salary during notice period",
    "notice period salary delay legal remedy"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/legal-notice-for-salary-withheld-during-notice-period",
  },
};

export default function NoticePeriodSalaryPage() {
  return <NoticePeriodSalaryClient />;
}
