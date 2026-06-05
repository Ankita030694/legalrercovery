import { Metadata } from "next";
import OutstandingDuesClient from "./OutstandingDuesClient";

export const metadata: Metadata = {
  title: "Recovery of Outstanding Dues from Employer: ESOPs, Commission, Retainers | LegalRecovery",
  description: "Struggling to recover outstanding dues like sales commissions, vested ESOPs, maternity benefits, or independent retainer fees from your employer in India? Get tech-enabled legal help now.",
  keywords: [
    "recovery of outstanding dues from employer",
    "unpaid sales commissions recovery india",
    "withholding vested esops options legal notice",
    "freelancer unpaid retainer fees recovery",
    "maternity benefit wages not paid",
    "summary suit for contractual dues cpc order 37",
    "recover relocation bonus from company",
    "unpaid business travel reimbursement",
    "legal action for unpaid consultant fees",
    "director liability for outstanding compensation"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/outstanding-dues-from-employer',
  },
};

export default function OutstandingDuesPage() {
  return <OutstandingDuesClient />;
}
