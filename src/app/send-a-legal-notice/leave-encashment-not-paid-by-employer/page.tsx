import { Metadata } from 'next';
import LeaveEncashmentNotPaidByEmployerClient from './LeaveEncashmentNotPaidByEmployerClient';

const slug = 'send-a-legal-notice/leave-encashment-not-paid-by-employer';
const title =
  'Legal Notice to Company for Leave Encashment Not Paid by Employer | Draft & Send Notice India';
const description =
  'Company refusing or delaying earned leave encashment in Full & Final (F&F) settlement? Send an advocate-vetted statutory legal notice for unpaid leave encashment under the Factories Act 1948, State Shops & Establishments Act, Payment of Wages Act, and Code on Wages.';
const url = `https://legalrecovery.in/${slug}`;
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
