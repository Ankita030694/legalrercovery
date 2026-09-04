import { Metadata } from "next";
import MSMEDuesClient from "./MSMEDuesClient";

export const metadata: Metadata = {
  title: "Recover Unpaid MSME Dues & Payments | LegalRecovery",
  description: "Struggling with unpaid B2B dues? Learn about MSMED Act 2006 protections, 45-day payment rules, 3x RBI interest rates, and Samadhaan portal filing.",
  keywords: [
    "MSME dues recovery India",
    "delayed payment to MSME",
    "MSMED Act 2006 Section 15",
    "MSEFC Samadhaan portal filing",
    "Udyam registration delayed payment",
    "MSME penal interest rate 3x RBI",
    "B2B vendor payment default",
    "45 days payment rule MSME",
    "recover small business debts India",
    "MSEFC arbitration award enforcement"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/msme-dues',
  },
};

export default function MSMEDuesPage() {
  return <MSMEDuesClient />;
}
