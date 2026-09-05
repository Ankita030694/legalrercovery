import { Metadata } from "next";
import PendingOvertimeClient from "./PendingOvertimeClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Overtime Compensation | LegalRecovery",
  description: "Recover pending overtime payment or late wages in India. Learn about the Factories Act, Shops and Establishments Act, and legal notice remedies.",
  keywords: [
    "recover unpaid overtime India",
    "overtime calculation formula labor law",
    "shops and establishments act overtime",
    "double rate overtime pay India",
    "unpaid overtime legal notice advocate",
    "labor court complaint overtime wages",
    "workman overtime rights Factories Act",
    "Order 37 CPC summary suit overtime",
    "overtime rate basic dearness allowance",
    "employee rights working hours India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/pending-overtime-payment',
  },
};

export default function PendingOvertimePage() {
  return <PendingOvertimeClient />;
}
