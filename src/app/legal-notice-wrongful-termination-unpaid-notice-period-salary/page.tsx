import { Metadata } from "next";
import WrongfulTerminationClient from "./WrongfulTerminationClient";

export const metadata: Metadata = {
  title: "Wrongful Termination & Forced Resignation Legal Notice in India | Severance Claim",
  description: "Fired suddenly without cause, put on fake PIP, or forced to resign? Serve an Advocate Legal Notice for wrongful termination, illegal layoff compensation & full severance pay.",
  keywords: [
    "legal notice for wrongful termination india",
    "forced resignation legal action india",
    "illegal termination without notice compensation",
    "how to claim severance pay from employer",
    "fake pip termination legal remedy",
    "industrial disputes act retrenchment compensation"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-wrongful-termination-unpaid-notice-period-salary',
  },
  openGraph: {
    title: "Wrongful Termination & Forced Resignation Legal Notice in India | Severance Claim",
    description: "Fired suddenly without cause or forced to resign? Serve an Advocate Legal Notice for wrongful termination & severance pay.",
    url: "https://www.legalrecovery.in/legal-notice-wrongful-termination-unpaid-notice-period-salary",
    type: "article",
  },
};

export default function WrongfulTerminationPage() {
  return <WrongfulTerminationClient />;
}
