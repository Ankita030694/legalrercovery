import { Metadata } from "next";
import OutstandingDuesClient from "./OutstandingDuesClient";

export const metadata: Metadata = {
  title: "Recover Outstanding Dues from Employer | LegalRecovery",
  description: "Recover outstanding employee dues like sales commissions, ESOPs, maternity benefits, and retainers in India. Get expert legal-tech assistance today.",
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
  openGraph: {
    title: "Recover Outstanding Dues from Employer | LegalRecovery",
    description: "Recover outstanding employee dues like sales commissions, ESOPs, maternity benefits, and retainers in India. Get expert legal-tech assistance today.",
    url: "https://www.legalrecovery.in/recovery/outstanding-dues-from-employer",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Outstanding Dues from Employer | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Outstanding Dues from Employer | LegalRecovery",
    description: "Recover outstanding employee dues like sales commissions, ESOPs, maternity benefits, and retainers in India. Get expert legal-tech assistance today.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function OutstandingDuesPage() {
  return <OutstandingDuesClient />;
}
