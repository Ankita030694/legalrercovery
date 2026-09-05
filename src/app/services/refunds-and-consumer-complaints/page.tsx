import { Metadata } from "next";
import RefundsComplaintsClient from "./RefundsComplaintsClient";

export const metadata: Metadata = {
  title: "Refunds & Consumer Complaints Recovery | LegalRecovery",
  description: "Recover e-commerce refunds, defective product costs, and service claim dues in India. Learn legal notice formats, e-Daakhil filing, and consumer rights.",
  alternates: {
    canonical: "/services/refunds-and-consumer-complaints",
  },
  openGraph: {
    title: "Refunds & Consumer Complaints Recovery | LegalRecovery",
    description: "Recover e-commerce refunds, defective product costs, and service claim dues in India. Learn legal notice formats, e-Daakhil filing, and consumer rights.",
    type: "article",
    url: "/services/refunds-and-consumer-complaints",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Refunds and Consumer Complaints Recovery India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Refunds & Consumer Complaints Recovery | LegalRecovery",
    description: "Exhaustive legal guide on consumer complaints, e-commerce refunds, defective products, deficient services, and warranty disputes in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function RefundsComplaintsPage() {
  return <RefundsComplaintsClient />;
}
