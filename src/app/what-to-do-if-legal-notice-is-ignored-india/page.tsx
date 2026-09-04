import { Metadata } from "next";
import WhatToDoClient from "./WhatToDoClient";

export const metadata: Metadata = {
  title: "What to do if Legal Notice is Ignored in India | Recovery",
  description: "Learn the legal steps to take when a debtor ignores your legal notice in India, including civil summary suits and criminal complaint options.",
  keywords: [
    "legal recovery",
    "recover my money",
    "recovery of money",
    "ignored legal notice",
    "legal notice ignored",
    "what to do if notice ignored",
    "Order 37 CPC",
    "summary suit India",
    "money recovery case"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/what-to-do-if-legal-notice-is-ignored-india',
  },
};

export default function WhatToDoIfLegalNoticeIsIgnoredPage() {
  return <WhatToDoClient />;
}
