import { Metadata } from "next";
import PgHostelRefundClient from "./PgHostelRefundClient";

export const metadata: Metadata = {
  title: "PG Owner Not Returning Security Deposit? Legal Notice & Complaint in India",
  description: "PG or hostel owner refusing to refund your security deposit or making fake notice-period/electricity deductions? Serve an Advocate Legal Notice for 100% deposit refund within 7–15 days.",
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
    title: "PG Owner Not Returning Security Deposit? Legal Notice & Complaint in India",
    description: "Recover your PG or hostel security deposit from a defaulting owner via an Advocate Legal Notice and Consumer Protection Act escalation.",
    url: "https://www.legalrecovery.in/legal-notice-to-pg-owner-for-security-deposit-refund",
    type: "article",
  },
};

export default function PgHostelRefundPage() {
  return <PgHostelRefundClient />;
}
