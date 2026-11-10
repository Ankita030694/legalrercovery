import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Legal Recovery Services | Salary, Invoice & Refund Claims",
  },
  description:
    "Explore legal recovery services for unpaid salary, refunds, deposits, vendor invoices, freelancer dues, and consumer complaints across India.",
  alternates: {
    canonical: "https://www.legalrecovery.in/services",
  },
  openGraph: {
    title: "Legal Recovery Services | Salary, Invoice & Refund Claims",
    description:
      "Explore legal recovery services for unpaid salary, refunds, deposits, vendor invoices, freelancer dues, and consumer complaints across India.",
    url: "https://www.legalrecovery.in/services",
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal Recovery Services | Salary, Invoice & Refund Claims",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Recovery Services | Salary, Invoice & Refund Claims",
    description:
      "Explore legal recovery services for unpaid salary, refunds, deposits, vendor invoices, freelancer dues, and consumer complaints across India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
