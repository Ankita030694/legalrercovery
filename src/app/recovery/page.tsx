import { Metadata } from "next";
import RecoveryClient from "./RecoveryClient";

export const metadata: Metadata = {
  title: "Money Recovery Claims Directory & Legal Notice Filing | LegalRecovery",
  description: "Complete index of money recovery and legal notice filing categories in India. Start a digital notice campaign for salary, FNF dues, invoices, freelancer, vendor and B2B claims.",
  alternates: {
    canonical: "/recovery",
  },
  openGraph: {
    title: "Money Recovery Claims Directory & Legal Notice Filing | LegalRecovery",
    description: "Complete index of money recovery and legal notice filing categories in India. Start a digital notice campaign for salary, FNF dues, invoices, freelancer, vendor and B2B claims.",
    type: "website",
    url: "/recovery",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Money Recovery Claims Directory India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Recovery Claims Directory & Legal Notice Filing | LegalRecovery",
    description: "Complete index of money recovery and legal notice filing categories in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function RecoveryPage() {
  return <RecoveryClient />;
}
