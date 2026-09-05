import { Metadata } from 'next';
import CompanyNotPayingBonusClient from './CompanyNotPayingBonusClient';

const slug = 'send-a-legal-notice/company-not-paying-bonus';
const title = 'Legal Notice to Company for Unpaid Employee Bonus';
const description =
  'Company not paying your earned bonus? Send an advocate-drafted legal notice under the Payment of Bonus Act to claim dues with 18% interest.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/company-not-paying-bonus.jpg`;

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
        alt: 'Send a Legal Notice to Company for Not Paying Bonus in India under Payment of Bonus Act 1965 and Contract Act',
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
  return <CompanyNotPayingBonusClient />;
}
