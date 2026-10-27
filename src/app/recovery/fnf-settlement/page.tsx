import { Metadata } from "next";
import FnfSettlementClient from "./FnfSettlementClient";

export const metadata: Metadata = {
  title: "Recover Full & Final (F&F) Settlement from Employer (48-Hour Rule & Legal Notice)",
  description: "Employer withholding your F&F settlement, gratuity, or leave encashment after resignation? Enforce the Code on Wages 48-hour settlement rule & serve an Advocate Legal Notice.",
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
  openGraph: {
    title: "Recover Full & Final (F&F) Settlement from Employer (48-Hour Rule & Legal Notice)",
    description: "Company delaying your F&F settlement or gratuity? Enforce your exit dues via Samadhan portal and Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/recovery/fnf-settlement",
    type: "article",
  },
};

export default function FnfSettlementPage() {
  return <FnfSettlementClient />;
}
