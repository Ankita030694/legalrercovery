import { Metadata } from "next";
import PgHostelRefundClient from "./PgHostelRefundClient";

export const metadata: Metadata = {
  title: "PG Security Deposit Refund Legal Notice Guide | Recovery",
  description: "Struggling to recover your PG or hostel security deposit from a defaulting owner? Learn how to draft and send a legal notice under rent control laws.",
  keywords: [
    "pg security deposit refund legal notice",
    "how to recover hostel security deposit",
    "paying guest owner not returning deposit",
    "legal notice to pg owner for deposit"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-pg-owner-for-security-deposit-refund',
  },
};

export default function PgHostelRefundPage() {
  return <PgHostelRefundClient />;
}
