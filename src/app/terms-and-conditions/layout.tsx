import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions – Legal Recovery India",
  },
  description:
    "Terms and conditions for using Legal Recovery’s legal-tech platform, claim submission, notices, and dispute escalation services in India.",
  alternates: {
    canonical: "https://www.legalrecovery.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions – Legal Recovery India",
    description:
      "Terms and conditions for using Legal Recovery’s legal-tech platform, claim submission, notices, and dispute escalation services in India.",
    url: "https://www.legalrecovery.in/terms-and-conditions",
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions – Legal Recovery India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions – Legal Recovery India",
    description:
      "Terms and conditions for using Legal Recovery’s legal-tech platform, claim submission, notices, and dispute escalation services in India.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
