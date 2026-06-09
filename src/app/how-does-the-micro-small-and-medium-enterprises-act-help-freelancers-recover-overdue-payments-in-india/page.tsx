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
    canonical: 'https://www.legalrecovery.in/how-does-the-micro-small-and-medium-enterprises-act-help-freelancers-recover-overdue-payments-in-india',
  },
};

export default function FreelancerMSMEPage() {
  return <FreelancerMSMEClient />;
}
