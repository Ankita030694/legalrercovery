import { Metadata } from 'next';
import PropertyDisputeMoneyStuckClient from './PropertyDisputeMoneyStuckClient';

const slug = 'send-a-legal-notice/property-dispute-money-stuck';
const title = 'Legal Notice for Property Dispute & Money Recovery';
const description =
  'Property booking deposit or token money stuck? Send a legal notice under RERA Section 18 and the Contract Act to recover funds with interest.';
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
