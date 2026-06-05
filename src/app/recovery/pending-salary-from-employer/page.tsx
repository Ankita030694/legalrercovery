import { Metadata } from "next";
import PendingSalaryClient from "./PendingSalaryClient";

export const metadata: Metadata = {
  title: "Pending Salary From Employer? Recover Delayed Wages Legally | LegalRecovery",
  description: "Employer not paying your salary during active service or after layoffs? LegalRecovery provides expert legal-tech assistance to recover pending salaries and wages in India. Start your recovery online.",
  keywords: [
    "pending salary from employer",
    "employer delaying salary india",
    "legal action for delayed salary",
    "how to recover unpaid salary from employer",
    "complaint against employer for non payment of wages",
    "salary not credited by company",
    "unilateral salary cut legal options",
    "layoff unpaid salary recovery",
    "labor commissioner complaint delayed salary",
    "wage recovery lawyer online"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/pending-salary-from-employer',
  },
};

export default function PendingSalaryPage() {
  return <PendingSalaryClient />;
}
