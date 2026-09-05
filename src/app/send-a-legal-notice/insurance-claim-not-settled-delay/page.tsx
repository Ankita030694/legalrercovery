import { Metadata } from 'next';
import InsuranceClaimNotSettledDelayClient from './InsuranceClaimNotSettledDelayClient';

const slug = 'send-a-legal-notice/insurance-claim-not-settled-delay';
const title = 'Legal Notice for Delayed Insurance Claim Settlement';
const description =
  'Insurance company delaying your claim settlement? Send an advocate-vetted legal notice under IRDAI guidelines to claim dues with interest.';
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
