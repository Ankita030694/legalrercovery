import { Metadata } from 'next';
import CollegeSecurityDepositRefundClient from './CollegeSecurityDepositRefundClient';

const slug = 'send-a-legal-notice/college-security-deposit-refund';
const title = 'Legal Notice to College for Not Paying Security Deposit | Refund Caution Money';
const description =
  'College or university refusing to refund caution money, hostel security deposit, or laboratory fees? Send an advocate-drafted statutory legal notice under UGC/AICTE Guidelines, Indian Contract Act, and Consumer Protection Act 2019 to recover your deposit with 18% interest.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/college-security-deposit-refund.jpg`;

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
        alt: 'Legal Notice to College or University for Withholding Security Deposit and Caution Money in India',
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
  return <CollegeSecurityDepositRefundClient />;
}
