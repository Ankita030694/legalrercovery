import { Metadata } from "next";
import NoticePeriodSalaryClient from "./NoticePeriodSalaryClient";

export const metadata: Metadata = {
  title: "Salary Withheld During Notice Period? Meaning, Law & Legal Notice to Employer",
  description: "Can an employer hold your monthly salary while serving notice period? Understand 'Salary Withheld' meaning, Payment of Wages Act rules & serve a Legal Notice to release held salary.",
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
    title: "Salary Withheld During Notice Period? Meaning, Law & Legal Notice to Employer",
    description: "Can an employer hold your monthly salary while serving notice period? Understand 'Salary Withheld' meaning & serve an Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/legal-notice-for-salary-withheld-during-notice-period",
    type: "article",
  },
};

export default function NoticePeriodSalaryPage() {
  return <NoticePeriodSalaryClient />;
}
