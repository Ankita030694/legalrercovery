import { Metadata } from "next";
import MultipleChequesClient from "./MultipleChequesClient";

export const metadata: Metadata = {
  title: "Multiple Cheque Bounce Cases: Single Notice & BNSS 219",
  description: "Multiple cheques bounced from one loan or invoice? Learn how to send a single Section 138 legal notice and club cases into a joint court trial.",
  keywords: [
    "multiple cheque bounce cases same transaction",
    "can one legal notice be sent for multiple cheque bounce",
    "section 219 crpc section 242 bnss multiple cheques",
    "Section 138 NI Act consolidated legal notice",
    "cheque bounce jurisdiction multiple cheques"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/multiple-cheque-bounce-cases-same-transaction',
  },
  openGraph: {
    title: "Multiple Cheque Bounce Cases: Single Notice & BNSS 219",
    description: "Send a single consolidated Section 138 Legal Notice for multiple bounced cheques from the same transaction and save legal costs.",
    url: "https://www.legalrecovery.in/multiple-cheque-bounce-cases-same-transaction",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Multiple Cheque Bounce Cases: Single Notice & BNSS 219",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiple Cheque Bounce Cases: Single Notice & BNSS 219",
    description: "Send a single consolidated Section 138 Legal Notice for multiple bounced cheques from the same transaction and save legal costs.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function MultipleChequesPage() {
  return <MultipleChequesClient />;
}
