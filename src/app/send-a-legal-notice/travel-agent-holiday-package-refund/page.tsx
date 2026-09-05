import { Metadata } from 'next';
import TravelAgentHolidayPackageRefundClient from './TravelAgentHolidayPackageRefundClient';

const slug = 'send-a-legal-notice/travel-agent-holiday-package-refund';
const title = 'Legal Notice to Travel Agent for Holiday Package Refund';
const description =
  'Travel agent refusing a holiday refund? Send an advocate-vetted legal notice under the Consumer Protection Act for quick refund recovery.';
const url = `https://www.legalrecovery.in/${slug}`;
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
