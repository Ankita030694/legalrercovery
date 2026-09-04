import { Metadata } from "next";
import ConsultancyFeesClient from "./ConsultancyFeesClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Consultancy Fees | LegalRecovery",
  description: "Struggling to recover unpaid consulting fees or retainers in India? Learn about contract enforcement, Order 37 CPC summary suits, and legal notices.",
  keywords: [
    "recover unpaid consultancy fees India",
    "consulting agreement payment default",
    "advisory retainer fees recovery",
    "legal notice for unpaid consulting bills",
    "professional services debt recovery CPC",
    "summary suit for consultancy fees",
    "consultant payment default remedies",
    "breach of consulting contract damages",
    "Section 70 contract act consulting",
    "Section 138 NI Act bounced cheque consultant"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/consultancy-fees',
  },
};

export default function ConsultancyFeesPage() {
  return <ConsultancyFeesClient />;
}
