import { Metadata } from "next";
import PfAmountClient from "./PfAmountClient";

export const metadata: Metadata = {
  title: "Recover Unpaid PF from Employer | LegalRecovery",
  description: "Recover unpaid Provident Fund (PF) from your employer. LegalRecovery helps you file EPFiGMS complaints, serve legal notices, and recover your EPF dues.",
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
  openGraph: {
    title: "Recover Unpaid PF from Employer | LegalRecovery",
    description: "Recover unpaid Provident Fund (PF) from your employer. LegalRecovery helps you file EPFiGMS complaints, serve legal notices, and recover your EPF dues.",
    url: "https://www.legalrecovery.in/recovery/pf-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid PF from Employer | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid PF from Employer | LegalRecovery",
    description: "Recover unpaid Provident Fund (PF) from your employer. LegalRecovery helps you file EPFiGMS complaints, serve legal notices, and recover your EPF dues.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function PfAmountPage() {
  return <PfAmountClient />;
}
