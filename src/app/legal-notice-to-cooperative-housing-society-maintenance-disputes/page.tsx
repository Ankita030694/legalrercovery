import { Metadata } from "next";
import HousingSocietyNoticeClient from "./HousingSocietyNoticeClient";

export const metadata: Metadata = {
  title: "Housing Society Maintenance or NOC Dispute? Your Rights",
  description: "Society charging excess maintenance or transfer fees, or refusing an NOC? Which charges are allowed and how to complain to the registrar.",
  keywords: [
    "housing society maintenance refund dispute",
    "legal notice to cooperative housing society",
    "recover illegal society transfer charges",
    "rwa maintenance penalty legal options",
    "housing society transfer fee limit 25000"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-cooperative-housing-society-maintenance-disputes',
  },
  openGraph: {
    title: "Housing Society Maintenance or NOC Dispute? Your Rights",
    description: "Society charging excess maintenance or transfer fees, or refusing an NOC? Which charges are allowed and how to complain to the registrar.",
    url: "https://www.legalrecovery.in/legal-notice-to-cooperative-housing-society-maintenance-disputes",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Housing Society Maintenance or NOC Dispute? Your Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Housing Society Maintenance or NOC Dispute? Your Rights",
    description:
      "Society charging excess maintenance or transfer fees, or refusing an NOC? Which charges are allowed and how to complain to the registrar.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function HousingSocietyNoticePage() {
  return <HousingSocietyNoticeClient />;
}
