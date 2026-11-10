import { Metadata } from "next";
import EcommerceSellerRecoveryClient from "./EcommerceSellerRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Frozen Marketplace Payouts | Seller Dispute",
  description: "Learn how to recover frozen seller money on Amazon, Flipkart, or Meesho. Serve a legal notice to e-commerce marketplaces for withheld seller payouts.",
  keywords: [
    "recover frozen seller account money Amazon",
    "legal notice to e-commerce marketplace",
    "flipkart seller payment dispute legal remedy",
    "withheld seller payouts recovery"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-ecommerce-marketplace-seller-payment-recovery',
  },
  openGraph: {
    title: "Recover Frozen Marketplace Payouts | Seller Dispute",
    description: "Learn how to recover frozen seller money on Amazon, Flipkart, or Meesho. Serve a legal notice to e-commerce marketplaces for withheld seller payouts.",
    url: "https://www.legalrecovery.in/legal-notice-to-ecommerce-marketplace-seller-payment-recovery",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Recover Frozen Marketplace Payouts | Seller Dispute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Frozen Marketplace Payouts | Seller Dispute",
    description: "Learn how to recover frozen seller money on Amazon, Flipkart, or Meesho. Serve a legal notice to e-commerce marketplaces for withheld seller payouts.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function EcommerceSellerRecoveryPage() {
  return <EcommerceSellerRecoveryClient />;
}
