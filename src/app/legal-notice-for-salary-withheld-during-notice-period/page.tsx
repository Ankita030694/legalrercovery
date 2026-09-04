import { Metadata } from "next";
import NoticePeriodSalaryClient from "./NoticePeriodSalaryClient";

export const metadata: Metadata = {
  title: "Recover Salary Withheld During Notice Period | Legal Remedy",
  description: "Recover notice period salary withheld by your employer during exit settlement. Serve an advocate legal notice before your last working day in India.",
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
