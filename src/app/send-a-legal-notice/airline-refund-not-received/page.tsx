import { Metadata } from 'next';
import AirlineRefundClient from './AirlineRefundClient';

export const metadata: Metadata = {
  title: 'Legal Notice for Airline Refund Not Received in India',
  description: 'Learn how to send a legal notice for an airline refund not received. Recover money from airlines or travel portals under the Consumer Protection Act.',
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-a-legal-notice/airline-refund-not-received',
  },
  openGraph: {
    title: 'Send a Legal Notice for Airline Refund Not Received',
    description: 'Protect your consumer rights. Learn how to legally demand your pending flight refund when an airline or travel agency refuses to process it.',
    url: 'https://www.legalrecovery.in/send-a-legal-notice/airline-refund-not-received',
    type: 'article',
    authors: ['Anuj Anand Malik'],
    publishedTime: '2024-03-14T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://www.legalrecovery.in/images/og/airline-refund-not-received.jpg',
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
    images: ['https://www.legalrecovery.in/images/og/airline-refund-not-received.jpg'],
  },
};

export default function AirlineRefundNotReceivedPage() {
  return <AirlineRefundClient />;
}
