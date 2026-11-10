import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Log In | Legal Recovery India",
  },
  description:
    "Log in to your Legal Recovery account to track dispute status, review advocate notices, and manage legal recovery claims.",
  alternates: {
    canonical: "https://www.legalrecovery.in/login",
  },
  openGraph: {
    title: "Log In | Legal Recovery India",
    description:
      "Log in to your Legal Recovery account to track dispute status, review advocate notices, and manage legal recovery claims.",
    url: "https://www.legalrecovery.in/login",
    siteName: "Legal Recovery India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Log In | Legal Recovery India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Log In | Legal Recovery India",
    description:
      "Log in to your Legal Recovery account to track dispute status, review advocate notices, and manage legal recovery claims.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
