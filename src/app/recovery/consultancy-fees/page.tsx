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
  openGraph: {
    title: "Recover Unpaid Consultancy Fees | LegalRecovery",
    description: "Struggling to recover unpaid consulting fees or retainers in India? Learn about contract enforcement, Order 37 CPC summary suits, and legal notices.",
    url: "https://www.legalrecovery.in/recovery/consultancy-fees",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid Consultancy Fees | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Consultancy Fees | LegalRecovery",
    description: "Struggling to recover unpaid consulting fees or retainers in India? Learn about contract enforcement, Order 37 CPC summary suits, and legal notices.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function ConsultancyFeesPage() {
  return <ConsultancyFeesClient />;
}
