import { Metadata } from "next";
import MSMEInterestClient from "./MSMEInterestClient";

export const metadata: Metadata = {
  title: "Calculate & Recover MSME Delayed Payment Interest | LegalRecovery",
  description: "Outstanding B2B dues? Learn how to calculate and claim statutory compound interest at 3x the RBI bank rate under Section 16 of the MSMED Act, 2006. Understand tax non-deductibility and balance sheet disclosures.",
  keywords: [
    "MSME delayed payment interest calculation",
    "Section 16 MSMED Act interest rate",
    "3x RBI bank rate compound interest",
    "MSME interest calculation monthly rests",
    "Section 23 Income Tax disallowance",
    "Section 22 audit disclosure CARO 2020",
    "B2B delayed payment interest advocate notice",
    "form 3cd clause 22 MSME interest",
    "MSEFC interest claim Samadhaan",
    "compound interest with monthly rests MSME"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/delayed-payment-interest-under-msme',
  },
};

export default function MSMEInterestPage() {
  return <MSMEInterestClient />;
}
