import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Legal Recovery Blog | Money Recovery & Consumer Rights",
  },
  description:
    "Read expert legal tips on recovering money, unpaid salary, refunds, consumer complaints, security deposits, freelancer payments, and legal rights in India.",
  alternates: {
    canonical: "https://www.legalrecovery.in/blog",
  },
  openGraph: {
    title: "Legal Recovery Blog | Money Recovery & Consumer Rights",
    description:
      "Read expert legal tips on recovering money, unpaid salary, refunds, consumer complaints, security deposits, freelancer payments, and legal rights in India.",
    url: "https://www.legalrecovery.in/blog",
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Recovery Blog | Money Recovery & Consumer Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Recovery Blog | Money Recovery & Consumer Rights",
    description:
      "Read expert legal tips on recovering money, unpaid salary, refunds, consumer complaints, security deposits, freelancer payments, and legal rights in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
