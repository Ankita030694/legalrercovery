import { Metadata } from 'next';
import DelayedSalaryStartupCompanyIndiaClient from './DelayedSalaryStartupCompanyIndiaClient';

const slug = 'send-a-legal-notice/delayed-salary-startup-company-india';
const title = 'Legal Notice to Startup Company for Delayed Salary | Recover Unpaid Dues India';
const description =
  'Is your startup employer delaying or withholding your earned monthly salary, ESOP settlements, or reimbursement dues? Send an advocate-drafted statutory legal notice for unpaid salary under the Code on Wages 2019, Section 73 Indian Contract Act, and IBC Operational Debt rules.';
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
