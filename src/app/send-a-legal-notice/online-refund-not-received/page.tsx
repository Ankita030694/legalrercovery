import { Metadata } from 'next';
import OnlineRefundNotReceivedClient from './OnlineRefundNotReceivedClient';

const slug = 'send-a-legal-notice/online-refund-not-received';
const title = 'Legal Notice for Online Refund Not Received | Draft & Send';
const description = 'Learn how to send a legal notice for an online refund not received. Expert advice on consumer rights, procedures, and drafting the perfect legal notice for commercial disputes.';
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
