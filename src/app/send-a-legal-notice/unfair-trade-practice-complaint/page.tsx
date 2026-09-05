import { Metadata } from 'next';
import UnfairTradePracticeClient from './UnfairTradePracticeClient';

export const metadata: Metadata = {
  title: 'Legal Notice for Unfair Trade Practices | Legal Recovery',
  description: 'Send a legal notice for unfair trade practices in India. Protect your rights against deceptive marketing, hidden charges, and false claims.',
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-a-legal-notice/unfair-trade-practice-complaint',
  },
  openGraph: {
    title: 'Legal Notice for Unfair Trade Practice Complaint',
    description: 'Fight back against deceptive business practices. Complete legal guide to filing an unfair trade practice complaint and demanding compensation under the Consumer Protection Act.',
    url: 'https://www.legalrecovery.in/send-a-legal-notice/unfair-trade-practice-complaint',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://www.legalrecovery.in/images/og/unfair-trade-practice-complaint.jpg',
        width: 1024,
        height: 1024,
        alt: 'Legal Notice for Unfair Trade Practice Complaint Infographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Notice for Unfair Trade Practice Complaint',
    description: 'Complete legal guide to drafting a legal notice for an unfair trade practice complaint.',
    images: ['https://www.legalrecovery.in/images/og/unfair-trade-practice-complaint.jpg'],
  },
};

export default function UnfairTradePracticePage() {
  return <UnfairTradePracticeClient />;
}
