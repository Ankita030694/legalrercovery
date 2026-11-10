import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy – Legal Recovery India",
  },
  description:
    "Read how Legal Recovery collects, uses, stores, and protects your personal information and claim documents on legalrecovery.in.",
  alternates: {
    canonical: "https://www.legalrecovery.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy – Legal Recovery India",
    description:
      "Read how Legal Recovery collects, uses, stores, and protects your personal information and claim documents on legalrecovery.in.",
    url: "https://www.legalrecovery.in/privacy-policy",
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy – Legal Recovery India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Legal Recovery India",
    description:
      "Read how Legal Recovery collects, uses, stores, and protects your personal information and claim documents on legalrecovery.in.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
