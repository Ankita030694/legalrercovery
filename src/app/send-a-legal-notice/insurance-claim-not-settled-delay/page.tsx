import { Metadata } from 'next';
import InsuranceClaimNotSettledDelayClient from './InsuranceClaimNotSettledDelayClient';

const slug = 'send-a-legal-notice/insurance-claim-not-settled-delay';
const title = 'Legal Notice for Insurance Claim Not Settled Delay | Draft & Send Notice India';
const description =
  'Insurance company delaying or not settling your health, motor, life, fire, or commercial claim? Send an advocate-vetted statutory legal notice for claim settlement delay under IRDAI 30-day mandate, penal interest rules & Consumer Protection Act 2019.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/insurance-claim-not-settled-delay.jpg`;

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
        alt: 'Legal Notice for Insurance Claim Not Settled Delay India',
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
  return <InsuranceClaimNotSettledDelayClient />;
}
