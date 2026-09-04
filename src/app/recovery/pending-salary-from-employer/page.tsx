import { Metadata } from "next";
import PendingSalaryClient from "./PendingSalaryClient";

export const metadata: Metadata = {
  title: "Recover Pending Salary from Employer | LegalRecovery",
  description: "Employer not paying salary during active service or after layoffs? LegalRecovery helps you recover pending wages in India. Start your recovery online.",
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
