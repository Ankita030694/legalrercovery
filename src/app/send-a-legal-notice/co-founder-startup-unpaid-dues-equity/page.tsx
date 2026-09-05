import { Metadata } from 'next';
import CoFounderStartupUnpaidDuesEquityClient from './CoFounderStartupUnpaidDuesEquityClient';

const slug = 'send-a-legal-notice/co-founder-startup-unpaid-dues-equity';
const title = 'Legal Notice to Co-Founder for Unpaid Dues & Equity';
const description =
  'Co-founder dispute over unpaid salary or equity shares? Send an advocate-drafted legal notice under the Companies Act to recover dues.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/co-founder-startup-unpaid-dues-equity.jpg`;

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
        alt: 'Legal Notice to Co-Founder for Unpaid Startup Dues and Equity India',
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
  return <CoFounderStartupUnpaidDuesEquityClient />;
}
