import { Metadata } from "next";
import CollegeFeeRefundClient from "./CollegeFeeRefundClient";

export const metadata: Metadata = {
  title: "College Fee Refund on Admission Cancellation: UGC 100% Refund Rule & Legal Notice",
  description: "College or university refusing tuition fee refund or holding original certificates after admission withdrawal? Enforce UGC & AICTE 100% Fee Refund Guidelines via Advocate Legal Notice.",
  keywords: [
    "college fee refund India",
    "university admission cancellation refund",
    "UGC fee refund guidelines 2026",
    "UGC 100 percent fee refund rule",
    "AICTE college fee refund",
    "college not returning original certificates",
    "college migration fee refund",
    "engineering college fee refund consumer court",
    "deemed university fee recovery India",
    "UGC e-Samadhan portal fee refund",
    "college admission withdrawal refund legal notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/college-fee-refund',
  },
  openGraph: {
    title: "College Fee Refund on Admission Cancellation: UGC 100% Refund Rule & Legal Notice",
    description: "College or university refusing tuition fee refund or holding original certificates after admission withdrawal? Enforce UGC & AICTE 100% Fee Refund Guidelines.",
    url: "https://www.legalrecovery.in/recovery/college-fee-refund",
    type: "article",
  },
};

export default function CollegeFeeRefundPage() {
  return <CollegeFeeRefundClient />;
}
