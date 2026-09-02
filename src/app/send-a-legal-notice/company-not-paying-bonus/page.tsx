import { Metadata } from 'next';
import CompanyNotPayingBonusClient from './CompanyNotPayingBonusClient';

const slug = 'send-a-legal-notice/company-not-paying-bonus';
const title = 'Send Legal Notice to Company for Not Paying Bonus | Recovery India';
const description =
  'Company withholding your earned annual performance bonus, statutory bonus, or retention incentive post-resignation? Send an advocate-drafted statutory legal notice under the Payment of Bonus Act, 1965 and Indian Contract Act, 1872 to recover your unpaid bonus with 18% interest within 15 days.';
const url = `https://legalrecovery.in/${slug}`;
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
