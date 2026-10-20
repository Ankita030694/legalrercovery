import { Metadata } from 'next';
import SalaryDeductedDuringNoticePeriodLegalActionIndiaClient from './SalaryDeductedDuringNoticePeriodLegalActionIndiaClient';

const slug = 'send-a-legal-notice/salary-deducted-during-notice-period-legal-action-india';
const title = 'Illegal Salary Cut or Penalty Deducted in Notice Period: Legal Notice';
const description =
  'Employer made arbitrary salary cuts, training bond deductions, or asset penalties during your notice period? Challenge unlawful wage deductions under Section 7 Payment of Wages Act.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/salary-deducted-during-notice-period-legal-action-india.jpg`;

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
        alt: 'Legal Notice for Salary Deducted During Notice Period Legal Action India',
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
  return <SalaryDeductedDuringNoticePeriodLegalActionIndiaClient />;
}
