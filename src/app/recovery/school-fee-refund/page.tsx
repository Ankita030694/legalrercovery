import { Metadata } from "next";
import SchoolFeeRefundClient from "./SchoolFeeRefundClient";

export const metadata: Metadata = {
  title: "Private School Refusing Fee Refund? Recover Your Money | LegalRecovery",
  description: "Private school not refunding admission fees, caution deposit, or development charges? LegalRecovery provides expert legal-tech assistance to recover school fees, fight illegal capitation charges, and hold school management accountable under RTE Act and consumer law.",
  keywords: [
    "school fee refund India",
    "private school admission cancellation refund",
    "school not refunding fees consumer court",
    "capitation fee refund RTE Act",
    "school caution deposit refund",
    "transfer certificate withheld fee recovery",
    "CBSE school fee refund",
    "school development fee refund India",
    "mid session withdrawal school refund",
    "school fee recovery legal notice India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/school-fee-refund',
  },
};

export default function SchoolFeeRefundPage() {
  return <SchoolFeeRefundClient />;
}
