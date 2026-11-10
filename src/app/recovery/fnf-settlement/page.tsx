import { Metadata } from "next";
import FnfSettlementClient from "./FnfSettlementClient";

export const metadata: Metadata = {
  title: "FnF Recovery Meaning & the 2-Working-Day Settlement Rule",
  description: "What FnF recovery means, what an employer can lawfully deduct from your settlement, and the Code on Wages rule to pay exit dues in 2 working days.",
  keywords: [
    "withholding fnf settlement india",
    "full and final settlement rules labour law",
    "fnf delayed by employer legal action",
    "how to recover gratuity and exit dues",
    "company not giving relieving letter no dues",
    "code on wages 2019 two working days rule",
    "labor notice for unpaid exit clearance",
    "gratuity non payment legal remedy",
    "earned leave encashment dispute lawyer"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/fnf-settlement',
  },
  openGraph: {
    title: "FnF Recovery Meaning & the 2-Working-Day Settlement Rule",
    description: "What FnF recovery means, what an employer can lawfully deduct from your settlement, and the Code on Wages rule to pay exit dues in 2 working days.",
    url: "https://www.legalrecovery.in/recovery/fnf-settlement",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "FnF Recovery Meaning & the 2-Working-Day Settlement Rule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FnF Recovery Meaning & the 2-Working-Day Settlement Rule",
    description:
      "What FnF recovery means, what an employer can lawfully deduct from your settlement, and the Code on Wages rule to pay exit dues in 2 working days.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FnfSettlementPage() {
  return <FnfSettlementClient />;
}
