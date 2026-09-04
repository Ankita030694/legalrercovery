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
};

export default function GratuityAmountPage() {
  return <GratuityAmountClient />;
}
