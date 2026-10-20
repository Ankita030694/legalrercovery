import { Metadata } from "next";
import SalaryRecoveryStepsClient from "./SalaryRecoveryStepsClient";

export const metadata: Metadata = {
  title: "How to Recover Unpaid Salary from Employer in India: Legal Notice & Labour Court",
  description: "Employer not paying salary or FNF settlement? Complete 4-step salary recovery process in India: Advocate Legal Notice, SAMADHAN Portal, Section 33C(2) Labour Court & 18% interest.",
  keywords: [
    "legal steps to recover unpaid salary from employer in india",
    "salary recovery",
    "salary recovery means",
    "what is salary recovery in payslip",
    "salary recovery legal notice india",
    "how to recover unpaid salary from employer",
    "labor court complaint for unpaid salary",
    "summary suit for salary recovery",
    "samadhan portal salary complaint",
    "section 33c2 industrial disputes act",
    "unpaid FNF settlement legal actions"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india',
  },
  openGraph: {
    title: "How to Recover Unpaid Salary from Employer in India: Legal Notice & Labour Court",
    description: "Employer not paying salary or FNF settlement? Complete 4-step salary recovery process in India: Advocate Legal Notice, SAMADHAN Portal & Labour Court.",
    url: "https://www.legalrecovery.in/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india",
    type: "article",
  },
};

export default function SalaryRecoveryStepsPage() {
  return <SalaryRecoveryStepsClient />;
}
