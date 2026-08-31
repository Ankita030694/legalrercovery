import { Metadata } from 'next';
import CommissionNotPaidByCompanyClient from './CommissionNotPaidByCompanyClient';

const slug = 'send-a-legal-notice/commission-not-paid-by-company';
const title = 'Legal Notice to Company for Not Paying Commission | Draft & Send Notice India';
const description =
  'Company refusing or delaying earned sales commission, channel partner payout, or freelance incentives? Send an advocate-vetted statutory legal notice for unpaid commission under Indian Contract Act 1872, Commercial Courts Act 2015 & Code on Wages.';
const url = `https://legalrecovery.in/${slug}`;
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
