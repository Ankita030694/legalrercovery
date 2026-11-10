import { Metadata } from "next";
import FreelancerMSMEClient from "./FreelancerMSMEClient";

export const metadata: Metadata = {
  title: "MSME Act for Freelancer Payment Recovery in India",
  description: "A detailed guide on how the MSMED Act, 2006 and MSME Samadhaan portal help freelancers in India recover overdue payments with 3x RBI interest.",
  keywords: [
    "msme act for freelancers india",
    "msme samadhaan for freelancers",
    "udyam registration gig workers",
    "msefc delayed payment recovery",
    "section 15 msmed act timeline",
    "section 16 compound interest msme",
    "freelancer payment recovery council",
    "recover overdue payments client msme",
    "how to file msme complaint freelancer",
    "gig worker micro enterprise registration"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/msme-act-freelancer-payment-recovery',
  },
  openGraph: {
    title: "MSME Act for Freelancer Payment Recovery in India",
    description: "A detailed guide on how the MSMED Act, 2006 and MSME Samadhaan portal help freelancers in India recover overdue payments with 3x RBI interest.",
    url: "https://www.legalrecovery.in/msme-act-freelancer-payment-recovery",
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: "https://www.legalrecovery.in/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "MSME Act for Freelancer Payment Recovery in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSME Act for Freelancer Payment Recovery in India",
    description: "A detailed guide on how the MSMED Act, 2006 and MSME Samadhaan portal help freelancers in India recover overdue payments with 3x RBI interest.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: ["https://www.legalrecovery.in/blog_money_recovery.png"],
  },
};

export default function FreelancerMSMEPage() {
  return <FreelancerMSMEClient />;
}
