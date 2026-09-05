import { Metadata } from 'next';
import DelayedSalaryStartupCompanyIndiaClient from './DelayedSalaryStartupCompanyIndiaClient';

const slug = 'send-a-legal-notice/delayed-salary-startup-company-india';
const title = 'Legal Notice to Startup for Delayed Salary Payment';
const description =
  'Startup employer delaying your salary? Send an advocate-drafted legal notice under the Code on Wages to recover pending dues with interest.';
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
