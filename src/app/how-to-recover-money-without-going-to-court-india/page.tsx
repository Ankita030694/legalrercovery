import { Metadata } from "next";
import HowToRecoverMoneyWithoutGoingToCourtIndiaClient from "./HowToRecoverMoneyWithoutGoingToCourtIndiaClient";

export const metadata: Metadata = {
  title: "How to Recover Money Without Going to Court | Legal Guide",
  description: "Recover money without court in India using advocate legal notices, government portals, pre-institution mediation, and online dispute resolution.",
  keywords: [
    "how to recover money without going to court india",
    "recover money without court case india",
    "out of court settlement money recovery",
    "pre-litigation recovery legal notice",
    "MSME Samadhaan",
    "legal notice for recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-money-without-going-to-court-india',
  },
  openGraph: {
    title: "How to Recover Money Without Going to Court | Legal Guide",
    description: "Resolve money recovery disputes in 7–15 days without court via Advocate Legal Notice, Statutory Ombudsmen, and Online Dispute Resolution.",
    url: "https://www.legalrecovery.in/how-to-recover-money-without-going-to-court-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "How to Recover Money Without Going to Court | Legal Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Recover Money Without Going to Court | Legal Guide",
    description: "Resolve money recovery disputes in 7–15 days without court via Advocate Legal Notice, Statutory Ombudsmen, and Online Dispute Resolution.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function HowToRecoverMoneyWithoutGoingToCourtIndiaPage() {
  return <HowToRecoverMoneyWithoutGoingToCourtIndiaClient />;
}
