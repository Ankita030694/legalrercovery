import { Metadata } from "next";
import ExportDuesClient from "./ExportDuesClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Export Dues & International Trade Payments | LegalRecovery",
  description: "Struggling to recover unpaid export dues, outstanding trade bills, or B2B export payments in India? Learn about ECGC claims, FEMA write-offs, EDPMS tracking, and legal notices.",
  keywords: [
    "recover export dues India",
    "unpaid export bills legal notice",
    "ECGC claim process India",
    "EDPMS export realization RBI",
    "FEMA write off outstanding bills",
    "foreign buyer payment default CPC",
    "enforcing export contract India",
    "trade credit insurance claim",
    "international trade dispute advocate",
    "B2B export debt recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/export-dues',
  },
};

export default function ExportDuesPage() {
  return <ExportDuesClient />;
}
