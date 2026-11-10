import { Metadata } from "next";
import CivilSuitRecoveryClient from "./CivilSuitRecoveryClient";

export const metadata: Metadata = {
  title: "Civil Suit for Recovery of Money in India under Order 37",
  description: "Learn how to file a civil suit for recovery of money under Order 37 of the CPC in India. A strategic guide to securing summary decrees swiftly.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "civil suit for recovery of money india",
    "order 37 cpc",
    "summary suit india",
    "money recovery lawyer"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/civil-suit-for-recovery-of-money-india',
  },
  openGraph: {
    title: "Civil Suit for Recovery of Money in India under Order 37",
    description: "Learn how to file a civil suit for recovery of money under Order 37 of the CPC in India. A strategic guide to securing summary decrees swiftly.",
    url: "https://www.legalrecovery.in/civil-suit-for-recovery-of-money-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Civil Suit for Recovery of Money in India under Order 37",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Suit for Recovery of Money in India under Order 37",
    description: "Learn how to file a civil suit for recovery of money under Order 37 of the CPC in India. A strategic guide to securing summary decrees swiftly.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function CivilSuitRecoveryPage() {
  return <CivilSuitRecoveryClient />;
}
