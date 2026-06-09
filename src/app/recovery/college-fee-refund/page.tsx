import { Metadata } from "next";
import CollegeFeeRefundClient from "./CollegeFeeRefundClient";

export const metadata: Metadata = {
  title: "College or University Not Refunding Fees? Recover Your Admission Money | LegalRecovery",
  description: "College or university refusing to refund fees after admission withdrawal? LegalRecovery provides expert legal assistance to recover tuition fees, fight illegal certificate withholding, and enforce UGC and AICTE fee refund guidelines through legal notice and consumer forum.",
  keywords: [
    "college fee refund India",
    "university admission cancellation refund",
    "UGC fee refund guidelines 2024",
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
};

export default function CollegeFeeRefundPage() {
  return <CollegeFeeRefundClient />;
}
