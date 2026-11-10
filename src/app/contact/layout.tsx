import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Legal Recovery | Recover Your Money Legally",
  },
  description:
    "Need help recovering unpaid money, refunds, salary, or consumer claims? Contact Legal Recovery and start your legal claim process online today.",
  alternates: {
    canonical: "https://www.legalrecovery.in/contact",
  },
  openGraph: {
    title: "Contact Legal Recovery | Recover Your Money Legally",
    description:
      "Need help recovering unpaid money, refunds, salary, or consumer claims? Contact Legal Recovery and start your legal claim process online today.",
    url: "https://www.legalrecovery.in/contact",
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Contact Legal Recovery | Recover Your Money Legally",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Legal Recovery | Recover Your Money Legally",
    description:
      "Need help recovering unpaid money, refunds, salary, or consumer claims? Contact Legal Recovery and start your legal claim process online today.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
