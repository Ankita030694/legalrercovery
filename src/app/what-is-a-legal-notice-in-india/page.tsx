import { Metadata } from "next";
import WhatIsALegalNoticeClient from "./WhatIsALegalNoticeClient";

export const metadata: Metadata = {
  title: "What is a Legal Notice in India: Validity, Rules & Recovery",
  description: "Learn what is a legal notice in India, its legal validity, rules of service under Civil Procedure Code, how to reply, and the step-by-step recovery process.",
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
    canonical: "https://www.legalrecovery.in/what-is-a-legal-notice-in-india",
  },
};

export default function WhatIsALegalNoticePage() {
  return <WhatIsALegalNoticeClient />;
}
