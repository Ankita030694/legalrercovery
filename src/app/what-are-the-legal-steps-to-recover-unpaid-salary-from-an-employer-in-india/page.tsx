import { Metadata } from "next";
import SalaryRecoveryStepsClient from "./SalaryRecoveryStepsClient";

export const metadata: Metadata = {
  title: "Steps to Recover Unpaid Salary from Employer in India",
  description: "Step-by-step legal guide to recovering unpaid salary, FNF dues, and delayed wages from employers in India under labor codes, Shops Act, and civil suits.",
  keywords: [
    "legal steps to recover unpaid salary from employer in india",
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
};

export default function SalaryRecoveryStepsPage() {
  return <SalaryRecoveryStepsClient />;
}
