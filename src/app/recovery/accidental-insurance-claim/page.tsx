import { Metadata } from "next";
import AccidentalInsuranceClaimClient from "./AccidentalInsuranceClaimClient";

export const metadata: Metadata = {
  title: "Accidental Insurance Claim Rejected or Delayed? Recover Your Claim Amount | LegalRecovery",
  description: "Has your personal accident insurance claim been rejected, underpaid, or delayed by the insurer? LegalRecovery provides expert legal-tech assistance to recover your rightful accidental death, disability, and injury claim amount under IRDAI guidelines.",
  keywords: [
    "accidental insurance claim rejected India",
    "personal accident insurance claim recovery",
    "IRDAI claim settlement rules",
    "insurance ombudsman complaint India",
    "accidental death claim denied",
    "permanent disability insurance claim",
    "PA policy claim dispute legal help",
    "insurance company not paying claim",
    "Bima Bharosa complaint portal",
    "consumer court insurance claim India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/accidental-insurance-claim',
  },
};

export default function AccidentalInsuranceClaimPage() {
  return <AccidentalInsuranceClaimClient />;
}
