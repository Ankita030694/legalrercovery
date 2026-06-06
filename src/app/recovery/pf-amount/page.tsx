import { Metadata } from "next";
import PfAmountClient from "./PfAmountClient";

export const metadata: Metadata = {
  title: "Employer Not Depositing PF? Recovery Legal Notice | LegalRecovery",
  description: "Struggling to recover your unpaid Provident Fund (PF) amount from your employer? LegalRecovery provides expert legal-tech assistance to file EPFiGMS complaints and recover your EPF dues.",
  keywords: [
    "recover unpaid pf from employer",
    "epf non payment complaint epfigms",
    "section 7a epf act inquiry",
    "report pf deduction not deposited",
    "legal notice to employer for pf dues",
    "epfo grievance portal filing",
    "criminal breach of trust pf default",
    "epf recovery certificate bank attachment",
    "employer not depositing pf penalty",
    "how to check pf passbook default"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/pf-amount',
  },
};

export default function PfAmountPage() {
  return <PfAmountClient />;
}
