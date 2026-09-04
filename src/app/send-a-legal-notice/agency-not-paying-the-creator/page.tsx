import { Metadata } from 'next';
import AgencyNotPayingTheCreatorClient from './AgencyNotPayingTheCreatorClient';

const slug = 'send-a-legal-notice/agency-not-paying-the-creator';
const title = 'Legal Notice to Agency for Unpaid Creator Payment | Recover Dues India';
const description =
  'Marketing or talent agency withholding payment for completed influencer campaigns, UGC reels, or creative deliverables? Send an advocate-drafted statutory legal notice under the Indian Contract Act, Copyright Act Section 19, and MSMED Act to recover outstanding creator dues with interest.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/agency-not-paying-the-creator.jpg`;

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
        alt: 'Legal Notice to Marketing Agency to Recover Unpaid Creator and Influencer Payments in India',
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
  return <AgencyNotPayingTheCreatorClient />;
}
