import { Metadata } from "next";
import LegalNoticeOnlineClient from "./LegalNoticeOnlineClient";

export const metadata: Metadata = {
  title: "Legal Notice Online Portal: Process, Validity & Pricing",
  description: "Learn about the legal notice online portal system in India. Understand how technology simplifies case submission, advocate drafting, and digital tracking.",
  keywords: [
    "legal notice online",
    "send legal notice online India",
    "online legal notice portal",
    "legal notice drafting online",
    "digital legal notice tracking",
    "how to send legal notice digitally",
    "e-courts notice system India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/online-legal-notice',
  },
  openGraph: {
    title: "Legal Notice Online Portal: Process, Validity & Pricing",
    description: "Learn about the legal notice online portal system in India. Understand how technology simplifies case submission, advocate drafting, and digital tracking.",
    url: "https://www.legalrecovery.in/online-legal-notice",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice Online Portal: Process, Validity & Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice Online Portal: Process, Validity & Pricing",
    description: "Learn about the legal notice online portal system in India. Understand how technology simplifies case submission, advocate drafting, and digital tracking.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function LegalNoticeOnlinePage() {
  return <LegalNoticeOnlineClient />;
}
