import { Metadata } from "next";
import ExportDuesClient from "./ExportDuesClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Export Dues in India | LegalRecovery",
  description: "Struggling to recover unpaid export dues in India? Learn about ECGC claims, FEMA compliance, EDPMS tracking, and international debt recovery notices.",
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
  openGraph: {
    title: "Recover Unpaid Export Dues in India | LegalRecovery",
    description: "Struggling to recover unpaid export dues in India? Learn about ECGC claims, FEMA compliance, EDPMS tracking, and international debt recovery notices.",
    url: "https://www.legalrecovery.in/recovery/export-dues",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid Export Dues in India | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Export Dues in India | LegalRecovery",
    description: "Struggling to recover unpaid export dues in India? Learn about ECGC claims, FEMA compliance, EDPMS tracking, and international debt recovery notices.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function ExportDuesPage() {
  return <ExportDuesClient />;
}
