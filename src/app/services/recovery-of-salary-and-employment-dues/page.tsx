import { Metadata } from "next";
import SalaryRecoveryClient from "./SalaryRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Salary & Employment Dues | LegalRecovery",
  description: "Legal guide on recovering unpaid salary, FNF settlements, bonuses, and notice pay in India. Learn legal notice drafting, labor laws, and recovery suits.",
  alternates: {
    canonical: "/services/recovery-of-salary-and-employment-dues",
  },
  openGraph: {
    title: "Recover Unpaid Salary & Employment Dues | LegalRecovery",
    description: "Legal guide on recovering unpaid salary, FNF settlements, bonuses, and notice pay in India. Learn legal notice drafting, labor laws, and recovery suits.",
    type: "article",
    url: "/services/recovery-of-salary-and-employment-dues",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Salary and Employment Dues Recovery India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Salary & Employment Dues | LegalRecovery",
    description: "Exhaustive legal guide on recovering unpaid salary, F&F settlement, bonuses, gratuity, and notice pay in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function SalaryRecoveryPage() {
  return <SalaryRecoveryClient />;
}
