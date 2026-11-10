import { Metadata } from "next";
import WhatIsALegalNoticeClient from "./WhatIsALegalNoticeClient";

export const metadata: Metadata = {
  title: "What is a Legal Notice in India: Validity, Rules & Recovery",
  description: "Learn what is a legal notice in India, its legal validity, service rules under CPC, how to reply, and the step-by-step recovery process.",
  keywords: [
    "what is a legal notice in India",
    "legal notice validity period",
    "response to legal notice",
    "legal notice format",
    "legal notice cost India",
    "how to send legal notice online",
    "Section 80 CPC notice"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/what-is-a-legal-notice-in-india',
  },
  openGraph: {
    title: "What is a Legal Notice in India: Validity, Rules & Recovery",
    description: "Learn what is a legal notice in India, its legal validity, service rules under CPC, how to reply, and the step-by-step recovery process.",
    url: "https://www.legalrecovery.in/what-is-a-legal-notice-in-india",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "What is a Legal Notice in India: Validity, Rules & Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a Legal Notice in India: Validity, Rules & Recovery",
    description: "Learn what is a legal notice in India, its legal validity, service rules under CPC, how to reply, and the step-by-step recovery process.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function WhatIsALegalNoticePage() {
  return <WhatIsALegalNoticeClient />;
}
