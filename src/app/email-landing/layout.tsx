import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Recover Stuck Money Legally | Notice ₹999 | LegalRecovery",
  },
  description:
    "Recover unpaid salary, freelancer dues, deposits, and invoices legally. Advocate-drafted legal notice dispatched by Email and WhatsApp in 24 hours. Flat ₹999, optional Speed Post ₹450.",
  alternates: {
    canonical: "/email-landing",
  },
  openGraph: {
    title: "Recover Your Stuck Money Legally in India | LegalRecovery.in",
    description: "Get an advocate-drafted formal legal notice dispatched by Email and WhatsApp in 24 hours. Flat ₹999 fee, optional Speed Post ₹450. Zero percentage cut. 100% online.",
    url: "https://www.legalrecovery.in/email-landing",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Your Stuck Money Legally in India | LegalRecovery.in",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Your Stuck Money Legally in India | LegalRecovery.in",
    description: "Get an advocate-drafted formal legal notice dispatched by Email and WhatsApp in 24 hours. Flat ₹999 fee, optional Speed Post ₹450. Zero percentage cut. 100% online.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function EmailLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
