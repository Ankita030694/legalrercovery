import { Metadata } from 'next';
import EmployerDeductSalaryWithoutNoticeLegalActionClient from './EmployerDeductSalaryWithoutNoticeLegalActionClient';

const slug = 'send-a-legal-notice/employer-deduct-salary-without-notice-legal-action';
const title =
  'Legal Notice to Employer for Deducting Salary Without Notice | Legal Action & Recovery India';
const description =
  'Employer made unauthorized deductions or slashed your salary without prior notice or disciplinary inquiry? Send an advocate-vetted statutory legal notice under Payment of Wages Act 1936, Code on Wages 2019 & Industrial Disputes Act for immediate recovery with penal compensation.';
const url = `https://legalrecovery.in/${slug}`;
const ogImage = `/images/og/employer-deduct-salary-without-notice-legal-action.jpg`;

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
        alt: 'Legal Notice to Employer for Deducting Salary Without Notice Legal Action India',
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
  return <EmployerDeductSalaryWithoutNoticeLegalActionClient />;
}
