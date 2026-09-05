import { Metadata } from "next";
import TravelReimbursementClient from "./TravelReimbursementClient";

export const metadata: Metadata = {
  title: "Unpaid Travel & Conveyance Recovery | LegalRecovery",
  description: "Employer refusing to clear your business travel, hotel, flight, or conveyance bills? Find out how to send a legal notice and recover travel reimbursements.",
  keywords: [
    "recover travel reimbursement from employer",
    "unpaid business trip expense recovery",
    "employer withholding flight and hotel bills",
    "local conveyance allowance claim recovery",
    "legal notice for unpaid travel expenses",
    "recover out of pocket business travel dues",
    "corporate travel policy breach recovery suit",
    "unpaid travel bill dispute labor law India",
    "summary suit for travel expense recovery",
    "how to recover unpaid conveyance from company"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/travel-reimbursement',
  },
};

export default function TravelReimbursementPage() {
  return <TravelReimbursementClient />;
}
