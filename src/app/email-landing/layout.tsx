import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Recover Stuck Money Legally | Notice ₹999 | LegalRecovery",
  },
  description:
    "Recover unpaid salary, freelancer dues, deposits, and invoices legally. Advocate-drafted legal notice dispatched via Speed Post in 24 hours. Flat ₹999.",
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
