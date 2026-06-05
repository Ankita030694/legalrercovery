import { Metadata } from "next";
import UnpaidSalaryClient from "./UnpaidSalaryClient";

export const metadata: Metadata = {
  title: "Employer Not Paying Salary After Resignation? Recovery Dues | LegalRecovery",
  description: "Struggling with unpaid salary after resignation? LegalRecovery provides expert legal-tech assistance to recover your FNF dues, salary, and gratuity. Stop harassment and get what is yours.",
  keywords: [
    "employer not paying salary after resignation",
    "salary recovery legal notice",
    "fnf not paid after resignation",
    "legal action for unpaid salary india",
    "labor court complaint for salary",
    "unpaid salary lawyer",
    "full and final settlement issues",
    "recovery of dues from employer",
    "employee rights unpaid wages",
    "how to track unpaid salary"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/unpaid-salary',
  },
};

export default function UnpaidSalaryPage() {
  return <UnpaidSalaryClient />;
}
