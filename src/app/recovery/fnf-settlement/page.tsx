import { Metadata } from "next";
import FnfSettlementClient from "./FnfSettlementClient";

export const metadata: Metadata = {
  title: "Recover Full & Final (FNF) Settlement | LegalRecovery",
  description: "Company withholding your FNF settlement or gratuity? Learn about legal notices, the 2-day wage settlement rule, and Labour Court procedures in India.",
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
