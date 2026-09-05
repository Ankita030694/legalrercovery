import { Metadata } from 'next';
import AgencyNotPayingTheCreatorClient from './AgencyNotPayingTheCreatorClient';

const slug = 'send-a-legal-notice/agency-not-paying-the-creator';
const title = 'Legal Notice to Agency for Unpaid Creator Payments';
const description =
  'Agency withholding creator or influencer payments? Send an advocate-drafted legal notice under the Contract Act to recover unpaid dues.';
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
