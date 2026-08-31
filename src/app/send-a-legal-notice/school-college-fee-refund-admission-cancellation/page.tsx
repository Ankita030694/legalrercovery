import { Metadata } from 'next';
import SchoolCollegeFeeRefundAdmissionCancellationClient from './SchoolCollegeFeeRefundAdmissionCancellationClient';

const slug = 'send-a-legal-notice/school-college-fee-refund-admission-cancellation';
const title = 'Legal Notice to School or College for Fee Refund on Admission Cancellation | Legal Recovery India';
const description =
  'School, university, or college refusing to refund fees after admission cancellation or seat withdrawal? Send an advocate-drafted statutory legal notice under UGC Guidelines, AICTE Norms, and Consumer Protection Act 2019 for 100% refund.';
const url = `https://legalrecovery.in/${slug}`;
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
