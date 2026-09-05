import { Metadata } from 'next';
import RecoverMoneyFromBusinessPartnerCheatingIndiaClient from './RecoverMoneyFromBusinessPartnerCheatingIndiaClient';

const slug = 'send-a-legal-notice/recover-money-from-business-partner-cheating-india';
const title = 'Legal Notice to Business Partner for Money Recovery';
const description =
  'Cheated by a business partner? Send an advocate-vetted legal notice under the Partnership Act & Order 37 CPC to recover your business dues.';
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
