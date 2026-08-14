import { Metadata } from 'next';
import AirlineRefundClient from './AirlineRefundClient';

export const metadata: Metadata = {
  title: 'Send a Legal Notice for Airline Refund Not Received | Legal Recovery',
  description: 'Learn the exact legal steps and how to send a legal notice for airline refund not received. Get your refund from airlines or travel portals under the Consumer Protection Act.',
  alternates: {
    canonical: 'https://legalrecovery.in/send-a-legal-notice/airline-refund-not-received',
  },
  openGraph: {
    title: 'Send a Legal Notice for Airline Refund Not Received',
    description: 'Protect your consumer rights. Learn how to legally demand your pending flight refund when an airline or travel agency refuses to process it.',
    url: 'https://legalrecovery.in/send-a-legal-notice/airline-refund-not-received',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: '2024-03-14T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://legalrecovery.in/images/og/airline-refund-not-received.jpg',
        width: 1024,
        height: 1024,
        alt: 'Airline Refund Not Received? Send a Legal Notice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Send a Legal Notice for Airline Refund Not Received',
    description: 'Protect your consumer rights when you do not receive your airline refund. Complete legal guide.',
    images: ['https://legalrecovery.in/images/og/airline-refund-not-received.jpg'],
  },
};

export default function AirlineRefundNotReceivedPage() {
  return <AirlineRefundClient />;
}
