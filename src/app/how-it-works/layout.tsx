import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "How Legal Recovery Works | Recover Money in Simple Steps",
  },
  description:
    "Enter your case details online, get the facts verified, and recover money through structured legal notices and claim escalation in India.",
  alternates: {
    canonical: "https://www.legalrecovery.in/how-it-works",
  },
  openGraph: {
    title: "How Legal Recovery Works | Recover Money in Simple Steps",
    description:
      "Enter your case details online, get the facts verified, and recover money through structured legal notices and claim escalation in India.",
    url: "https://www.legalrecovery.in/how-it-works",
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "How Legal Recovery Works | Recover Money in Simple Steps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Legal Recovery Works | Recover Money in Simple Steps",
    description:
      "Enter your case details online, get the facts verified, and recover money through structured legal notices and claim escalation in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
