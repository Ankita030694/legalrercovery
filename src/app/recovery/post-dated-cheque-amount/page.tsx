import { Metadata } from "next";
import PDCAmountClient from "./PDCAmountClient";

export const metadata: Metadata = {
  title: "Post-Dated or Security Cheque Bounced? What to Do Next",
  description: "What PDC and security cheques mean, and what to do if a post-dated cheque bounces: the Section 138 notice deadlines and your recovery options.",
  keywords: [
    "recover post dated cheque amount",
    "bounced post-dated cheque legal process",
    "security cheque bounce legal action",
    "section 138 ni act pdc recovery",
    "order 37 summary suit post dated cheque",
    "section 143a interim compensation pdc",
    "magistrate court pdc complaint",
    "pdc cheque return memo insufficient funds",
    "negotiable instruments act pdc recovery",
    "pdc cheque bounce penalty double amount"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/post-dated-cheque-amount',
  },
  openGraph: {
    title: "Post-Dated or Security Cheque Bounced? What to Do Next",
    description: "What PDC and security cheques mean, and what to do if a post-dated cheque bounces: the Section 138 notice deadlines and your recovery options.",
    url: "https://www.legalrecovery.in/recovery/post-dated-cheque-amount",
    type: "article",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Post-Dated or Security Cheque Bounced? What to Do Next",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Dated or Security Cheque Bounced? What to Do Next",
    description:
      "What PDC and security cheques mean, and what to do if a post-dated cheque bounces: the Section 138 notice deadlines and your recovery options.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function PDCPage() {
  return <PDCAmountClient />;
}
