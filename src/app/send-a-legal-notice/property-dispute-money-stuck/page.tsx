import { Metadata } from 'next';
import PropertyDisputeMoneyStuckClient from './PropertyDisputeMoneyStuckClient';

const slug = 'send-a-legal-notice/property-dispute-money-stuck';
const title = 'Legal Notice for Property Dispute Money Stuck | Commercial Real Estate Recovery India';
const description =
  'Commercial property token money, earnest deposit, or booking advance stuck with a developer or seller? Send an advocate-drafted statutory legal notice under the Indian Contract Act, RERA Section 18, and Commercial Courts Act to recover your stuck money with statutory interest.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/property-dispute-money-stuck.jpg`;

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
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Legal Notice for Commercial Property Dispute and Stuck Money Recovery in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
};

export default function Page() {
  return <PropertyDisputeMoneyStuckClient />;
}
