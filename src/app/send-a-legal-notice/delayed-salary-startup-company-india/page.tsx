import { Metadata } from 'next';
import DelayedSalaryStartupCompanyIndiaClient from './DelayedSalaryStartupCompanyIndiaClient';

const slug = 'send-a-legal-notice/delayed-salary-startup-company-india';
const title = 'Startup Not Paying Salary? Legal Notice to Founders & NCLT IBC Claim';
const description =
  'Startup delaying salaries citing funding winter or runway crunch? Serve an Advocate Legal Notice to startup founders/directors & file an NCLT Operational Creditor claim.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/delayed-salary-startup-company-india.jpg`;

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
        alt: 'Legal Notice to Startup Company for Delayed Salary Recovery India',
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
  return <DelayedSalaryStartupCompanyIndiaClient />;
}
