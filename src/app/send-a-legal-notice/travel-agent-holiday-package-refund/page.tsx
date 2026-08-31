import { Metadata } from 'next';
import TravelAgentHolidayPackageRefundClient from './TravelAgentHolidayPackageRefundClient';

const slug = 'send-a-legal-notice/travel-agent-holiday-package-refund';
const title = 'Legal Notice to Travel Agent for Holiday Package Refund | Send Notice India';
const description =
  'Travel agency or tour operator refusing holiday package refund, cutting itineraries, or downgrading hotels? Send an advocate-vetted statutory legal notice under Consumer Protection Act 2019 & Indian Contract Act 1872 for prompt refund recovery.';
const url = `https://legalrecovery.in/${slug}`;
const ogImage = `/images/og/travel-agent-holiday-package-refund.jpg`;

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
        alt: 'Legal Notice to Travel Agent for Holiday Package Refund India',
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
  return <TravelAgentHolidayPackageRefundClient />;
}
