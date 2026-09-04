import { Metadata } from 'next';
import SalaryDeductedDuringNoticePeriodLegalActionIndiaClient from './SalaryDeductedDuringNoticePeriodLegalActionIndiaClient';

const slug = 'send-a-legal-notice/salary-deducted-during-notice-period-legal-action-india';
const title = 'Legal Notice for Salary Deducted During Notice Period | Legal Action India';
const description =
  'Employer unlawfully deducting salary during notice period or withholding full and final (FNF) settlement? Send an advocate-vetted statutory legal demand notice under Payment of Wages Act, Code on Wages, and Indian Contract Act for full recovery with interest.';
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
