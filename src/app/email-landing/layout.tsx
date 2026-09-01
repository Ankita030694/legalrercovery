import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Recover Your Stuck Money Legally | Advocate Speed Post Notice ₹999 | LegalRecovery",
  },
  description:
    "Recover unpaid salary, freelancer dues, security deposits, unpaid invoices, and consumer refunds legally. Advocate-drafted legal notice dispatched via India Post Speed Post within 24 hours. Flat ₹999, 0% commission.",
  alternates: {
    canonical: "/email-landing",
  },
  openGraph: {
    title: "Recover Your Stuck Money Legally in India | LegalRecovery.in",
    description: "Get an advocate-drafted formal legal notice dispatched via Speed Post in 24 hours. Flat ₹999 fee. Zero percentage cut. 100% online.",
    url: "https://www.legalrecovery.in/email-landing",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    type: "website",
  },
};

export default function EmailLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
