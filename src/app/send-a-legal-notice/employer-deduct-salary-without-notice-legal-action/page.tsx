import { Metadata } from 'next';
import EmployerDeductSalaryWithoutNoticeLegalActionClient from './EmployerDeductSalaryWithoutNoticeLegalActionClient';

const slug = 'send-a-legal-notice/employer-deduct-salary-without-notice-legal-action';
const title =
  'Legal Notice for Salary Deducted Without Prior Notice';
const description =
  'Employer deducted salary without notice? Send an advocate-vetted legal notice under the Payment of Wages Act to recover unpaid wages.';
const url = `https://www.legalrecovery.in/${slug}`;
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
