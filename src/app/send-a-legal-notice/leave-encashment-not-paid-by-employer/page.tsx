import { Metadata } from 'next';
import LeaveEncashmentNotPaidByEmployerClient from './LeaveEncashmentNotPaidByEmployerClient';

const slug = 'send-a-legal-notice/leave-encashment-not-paid-by-employer';
const title =
  'Legal Notice to Company for Unpaid Leave Encashment';
const description =
  'Company withholding earned leave encashment? Send an advocate-vetted legal notice under the Factories & Wages Act for immediate recovery.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/leave-encashment-not-paid-by-employer.jpg`;

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
        alt: 'Legal Notice to Company for Leave Encashment Not Paid by Employer India',
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
  return <LeaveEncashmentNotPaidByEmployerClient />;
}
