import { Metadata } from 'next';
import OnlineShoppingDisputeClient from './OnlineShoppingDisputeClient';

export const metadata: Metadata = {
  title: 'Send a Legal Notice for Online Shopping Dispute | Legal Recovery',
  description: 'Learn the exact legal steps and how to send a legal notice for online shopping disputes. Get your refund or compensation from e-commerce sellers under the Consumer Protection Act.',
  alternates: {
    canonical: 'https://legalrecovery.in/send-a-legal-notice/online-shopping-dispute',
  },
  openGraph: {
    title: 'Send a Legal Notice for Online Shopping Dispute',
    description: 'Protect your consumer rights. Learn how to legally resolve online shopping disputes and demand a refund from e-commerce platforms.',
    url: 'https://legalrecovery.in/send-a-legal-notice/online-shopping-dispute',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: '2024-04-10T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://legalrecovery.in/images/og/online-shopping-dispute.jpg',
        width: 1024,
        height: 1024,
        alt: 'Legal Notice for Online Shopping Dispute',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Send a Legal Notice for Online Shopping Dispute',
    description: 'Protect your consumer rights when you face an online shopping dispute. Complete legal guide.',
    images: ['https://legalrecovery.in/images/og/online-shopping-dispute.jpg'],
  },
};

export default function OnlineShoppingDisputePage() {
  return <OnlineShoppingDisputeClient />;
}
