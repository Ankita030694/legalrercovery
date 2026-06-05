import { Metadata } from "next";
import FnfSettlementClient from "./FnfSettlementClient";

export const metadata: Metadata = {
  title: "Withholding Full and Final (FNF) Settlement? Recover Exit Dues Legally | LegalRecovery",
  description: "Is your company refusing to clear your FNF settlement, withholding gratuity, or delaying exit clearance? Learn about legal notices, the 2-working-day wage rule, and Labour Court procedures. Start recovery online.",
  keywords: [
    "withholding fnf settlement india",
    "full and final settlement rules labour law",
    "fnf delayed by employer legal action",
    "how to recover gratuity and exit dues",
    "company not giving relieving letter no dues",
    "code on wages 2019 two working days rule",
    "labor notice for unpaid exit clearance",
    "gratuity non payment legal remedy",
    "earned leave encashment dispute lawyer"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/fnf-settlement',
  },
};

export default function FnfSettlementPage() {
  return <FnfSettlementClient />;
}
