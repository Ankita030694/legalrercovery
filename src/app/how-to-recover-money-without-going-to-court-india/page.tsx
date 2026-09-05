import { Metadata } from "next";
import HowToRecoverMoneyWithoutGoingToCourtIndiaClient from "./HowToRecoverMoneyWithoutGoingToCourtIndiaClient";

export const metadata: Metadata = {
  title: "How to Recover Money Without Going to Court in India",
  description: "Discover pre-litigation strategies, legal notice drafting, and ADR methods to recover your money in India without lengthy civil court battles.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "out of court settlement",
    "pre-litigation recovery",
    "MSME Samadhaan",
    "legal notice for recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-money-without-going-to-court-india',
  },
};

export default function HowToRecoverMoneyWithoutGoingToCourtIndiaPage() {
  return <HowToRecoverMoneyWithoutGoingToCourtIndiaClient />;
}
