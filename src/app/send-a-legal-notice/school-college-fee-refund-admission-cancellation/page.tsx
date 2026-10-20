import { Metadata } from 'next';
import SchoolCollegeFeeRefundAdmissionCancellationClient from './SchoolCollegeFeeRefundAdmissionCancellationClient';

const slug = 'send-a-legal-notice/school-college-fee-refund-admission-cancellation';
const title = 'School Admission Withdrawal & Caution Deposit Refund Legal Notice India';
const description =
  'Private school or junior college refusing admission fee, caution money, or transfer certificate (TC) on withdrawal? Send an Advocate Legal Notice for immediate refund.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/school-college-fee-refund-admission-cancellation.jpg`;

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
        alt: 'Legal Notice to School or College for Fee Refund on Admission Cancellation India',
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
  return <SchoolCollegeFeeRefundAdmissionCancellationClient />;
}
