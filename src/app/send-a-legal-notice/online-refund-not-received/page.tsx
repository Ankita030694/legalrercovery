import { Metadata } from 'next';
import OnlineRefundNotReceivedClient from './OnlineRefundNotReceivedClient';

const slug = 'send-a-legal-notice/online-refund-not-received';
const title = 'Legal Notice for Online Refund Not Received | Draft & Send';
const description = 'Online refund not received? Learn how to send an advocate-vetted legal notice to recover money from e-commerce sellers under consumer law.';
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
        alt: 'Legal Notice for Online Refund Not Received',
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
  return <OnlineRefundNotReceivedClient />;
}
