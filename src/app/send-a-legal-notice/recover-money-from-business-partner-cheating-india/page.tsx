import { Metadata } from 'next';
import RecoverMoneyFromBusinessPartnerCheatingIndiaClient from './RecoverMoneyFromBusinessPartnerCheatingIndiaClient';

const slug = 'send-a-legal-notice/recover-money-from-business-partner-cheating-india';
const title = 'Legal Notice to Business Partner for Recovery of Money | Cheating & Fraud India';
const description =
  'Business partner siphoned capital, withheld profits, or cheated on partnership dues? Send an advocate-vetted statutory legal notice for recovery of money under Indian Partnership Act 1932, Section 73 Contract Act, Order 37 CPC & BNS 2023.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/recover-money-from-business-partner-cheating-india.jpg`;

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
        alt: 'Legal Notice to Business Partner for Recovery of Money India',
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
  return <RecoverMoneyFromBusinessPartnerCheatingIndiaClient />;
}
