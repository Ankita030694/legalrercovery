import { Metadata } from 'next';
import SwiggyRefundNotRecievedClient from './SwiggyRefundNotRecievedClient';

const slug = 'send-a-legal-notice/swiggy-refund-not-recieved';
const title = 'Legal Notice for Swiggy Refund Not Received | Draft & Send Notice';
const description = 'Swiggy refund not received or wrongfully denied? Send a formal advocate-vetted legal notice under the Consumer Protection Act to recover your money with interest and damages.';
const url = `https://www.legalrecovery.in/${slug}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    type: 'article',
    images: [
      {
        url: `/images/og/${slug.split('/').pop()}.jpg`,
        width: 1200,
        height: 630,
        alt: 'Legal Notice for Swiggy Refund Not Received',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/images/og/${slug.split('/').pop()}.jpg`],
  },
};

export default function Page() {
  return <SwiggyRefundNotRecievedClient />;
}
