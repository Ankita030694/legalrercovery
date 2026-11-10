import { Metadata } from "next";
import GratuityAmountClient from "./GratuityAmountClient";

export const metadata: Metadata = {
  title: "Recover Unpaid Gratuity from Employer | LegalRecovery",
  description: "Recover unpaid gratuity from your employer. LegalRecovery provides expert legal-tech assistance under the Payment of Gratuity Act, 1972 with interest.",
  keywords: [
    "recover unpaid gratuity from employer",
    "payment of gratuity act 1972 recovery",
    "form n gratuity controlling authority",
    "gratuity 240 days rule eligibility",
    "legal notice to employer for gratuity",
    "calculate gratuity amount india",
    "delayed gratuity interest rate",
    "employer not paying gratuity remedy",
    "gratuity forfeiture rules misconduct",
    "controlling authority assistant labour commissioner"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/gratuity-amount',
  },
  openGraph: {
    title: "Recover Unpaid Gratuity from Employer | LegalRecovery",
    description: "Recover unpaid gratuity from your employer. LegalRecovery provides expert legal-tech assistance under the Payment of Gratuity Act, 1972 with interest.",
    url: "https://www.legalrecovery.in/recovery/gratuity-amount",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Unpaid Gratuity from Employer | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unpaid Gratuity from Employer | LegalRecovery",
    description: "Recover unpaid gratuity from your employer. LegalRecovery provides expert legal-tech assistance under the Payment of Gratuity Act, 1972 with interest.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function GratuityAmountPage() {
  return <GratuityAmountClient />;
}
