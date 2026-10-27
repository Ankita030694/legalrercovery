import { Metadata } from "next";
import MultipleChequesClient from "./MultipleChequesClient";

export const metadata: Metadata = {
  title: "Multiple Cheque Bounce Cases from Same Transaction: Single Legal Notice & Sec 219 CrPC / BNSS",
  description: "Did 2 or more cheques from the same loan or invoice bounce? Learn how to send a single consolidated Section 138 NI Act Legal Notice and club up to 3 cases into one joint court trial.",
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
    title: "Multiple Cheque Bounce Cases from Same Transaction: Single Legal Notice & Joint Trial",
    description: "Send a single consolidated Section 138 Legal Notice for multiple bounced cheques from the same transaction and save legal costs.",
    url: "https://www.legalrecovery.in/multiple-cheque-bounce-cases-same-transaction",
    type: "article",
  },
};

export default function MultipleChequesPage() {
  return <MultipleChequesClient />;
}
