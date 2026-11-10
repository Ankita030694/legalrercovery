import { Metadata } from "next";
import LandlordNoticeClient from "./LandlordNoticeClient";

export const metadata: Metadata = {
  title: "Can I Send a Legal Notice to Landlord for Deposit?",
  description: "A comprehensive guide on sending a legal notice to your landlord in India for withholding your rental security deposit after vacating the property.",
  keywords: [
    "send legal notice to landlord security deposit",
    "legal notice for rental deposit refund",
    "advocate notice for tenant deposit recovery",
    "withheld security deposit notice india",
    "interest act 1978 rental deposit",
    "how to serve legal notice to landlord",
    "proof of service landlord notice",
    "leave and license deposit refund notice",
    "unpaid rental deposit legal action",
    "rent control act notice to landlord"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-landlord-for-security-deposit-refund-india',
  },
  openGraph: {
    title: "Can I Send a Legal Notice to Landlord for Deposit?",
    description: "A comprehensive guide on sending a legal notice to your landlord in India for withholding your rental security deposit after vacating the property.",
    url: "https://www.legalrecovery.in/legal-notice-to-landlord-for-security-deposit-refund-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Can I Send a Legal Notice to Landlord for Deposit?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can I Send a Legal Notice to Landlord for Deposit?",
    description: "A comprehensive guide on sending a legal notice to your landlord in India for withholding your rental security deposit after vacating the property.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function LandlordNoticePage() {
  return <LandlordNoticeClient />;
}
