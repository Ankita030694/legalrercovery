import { Metadata } from "next";
import HowToRecoverMoneyWithoutAgreementClient from "./HowToRecoverMoneyWithoutAgreementClient";

export const metadata: Metadata = {
  title: "Lent Money Without Agreement? How to Recover It Legally",
  description: "No written agreement? UPI or bank transfers and WhatsApp chats can still prove a loan. How to use them as evidence and recover your money legally.",
  keywords: [
    "how to recover money without written agreement",
    "recover money lent to friend without proof",
    "verbal agreement validity india section 10",
    "unwritten contract recovery",
    "informal loan recovery India",
    "recover money given via upi or bank transfer"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/how-to-recover-money-without-written-agreement',
  },
  openGraph: {
    title: "Lent Money Without Agreement? How to Recover It Legally",
    description: "No written agreement? UPI or bank transfers and WhatsApp chats can still prove a loan. How to use them as evidence and recover your money legally.",
    url: "https://www.legalrecovery.in/how-to-recover-money-without-written-agreement",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Lent Money Without Agreement? How to Recover It Legally",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lent Money Without Agreement? How to Recover It Legally",
    description:
      "No written agreement? UPI or bank transfers and WhatsApp chats can still prove a loan. How to use them as evidence and recover your money legally.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function HowToRecoverMoneyWithoutAgreementPage() {
  return <HowToRecoverMoneyWithoutAgreementClient />;
}
