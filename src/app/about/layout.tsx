import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Legal Recovery | Consumer Claims & Money Recovery",
  },
  description:
    "Learn how Legal Recovery helps recover stuck money, refunds, salaries, deposits, and unpaid dues through affordable legal escalation and technology.",
  alternates: {
    canonical: "https://www.legalrecovery.in/about",
  },
  openGraph: {
    title: "About Legal Recovery | Consumer Claims & Money Recovery",
    description:
      "Learn how Legal Recovery helps recover stuck money, refunds, salaries, deposits, and unpaid dues through affordable legal escalation and technology.",
    url: "https://www.legalrecovery.in/about",
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "About Legal Recovery | Consumer Claims & Money Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Legal Recovery | Consumer Claims & Money Recovery",
    description:
      "Learn how Legal Recovery helps recover stuck money, refunds, salaries, deposits, and unpaid dues through affordable legal escalation and technology.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
