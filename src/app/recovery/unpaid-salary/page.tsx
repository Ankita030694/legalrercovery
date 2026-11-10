import { Metadata } from "next";
import UnpaidSalaryClient from "./UnpaidSalaryClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Salary After Resignation | LegalRecovery",
  description: "Struggling with unpaid salary after resignation? LegalRecovery provides expert legal assistance to recover your FNF dues, salary, and gratuity.",
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
  openGraph: {
    title: "Recover Unpaid Salary After Resignation | LegalRecovery",
    description: "Struggling with unpaid salary after resignation? LegalRecovery provides expert legal assistance to recover your FNF dues, salary, and gratuity.",
    url: "https://www.legalrecovery.in/recovery/unpaid-salary",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid Salary After Resignation | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Salary After Resignation | LegalRecovery",
    description: "Struggling with unpaid salary after resignation? LegalRecovery provides expert legal assistance to recover your FNF dues, salary, and gratuity.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function UnpaidSalaryPage() {
  return <UnpaidSalaryClient />;
}
