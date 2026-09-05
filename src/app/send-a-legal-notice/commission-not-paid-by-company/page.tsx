import { Metadata } from 'next';
import CommissionNotPaidByCompanyClient from './CommissionNotPaidByCompanyClient';

const slug = 'send-a-legal-notice/commission-not-paid-by-company';
const title = 'Legal Notice to Company for Unpaid Commission Fees';
const description =
  'Company refusing to pay sales commission? Send an advocate-vetted legal notice under the Contract Act & Code on Wages to recover dues.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/commission-not-paid-by-company.jpg`;

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
        alt: 'Legal Notice to Company for Not Paying Commission India',
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
  return <CommissionNotPaidByCompanyClient />;
}
