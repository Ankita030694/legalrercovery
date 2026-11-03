import { Metadata } from "next";
import PgHostelRefundClient from "./PgHostelRefundClient";

export const metadata: Metadata = {
  title: "PG Owner Not Returning Deposit? How to Get It Back",
  description: "PG or hostel owner keeping your security deposit or making unfair deductions? Lock-in and notice rules, valid deductions and how to demand it back.",
  keywords: [
    "pg security deposit refund legal notice",
    "pg owner not returning security deposit",
    "how to recover hostel security deposit",
    "paying guest owner not returning deposit",
    "legal notice to pg owner for deposit",
    "complaint against pg owner for deposit refund"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-pg-owner-for-security-deposit-refund',
  },
  openGraph: {
    title: "PG Owner Not Returning Deposit? How to Get It Back",
    description: "PG or hostel owner keeping your security deposit or making unfair deductions? Lock-in and notice rules, valid deductions and how to demand it back.",
    url: "https://www.legalrecovery.in/legal-notice-to-pg-owner-for-security-deposit-refund",
    type: "article",
  },
};

export default function PgHostelRefundPage() {
  return <PgHostelRefundClient />;
}
