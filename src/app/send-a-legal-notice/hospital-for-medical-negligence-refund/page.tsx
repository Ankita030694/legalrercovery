import { Metadata } from 'next';
import HospitalForMedicalNegligenceRefundClient from './HospitalForMedicalNegligenceRefundClient';

const slug = 'send-a-legal-notice/hospital-for-medical-negligence-refund';
const title = 'Legal Notice to Hospital for Medical Negligence Refund';
const description =
  'Hospital refusing refund for medical negligence or inflated billing? Send a legal notice under the Consumer Protection Act for compensation.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/hospital-for-medical-negligence-refund.jpg`;

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
        alt: 'Legal Notice to Hospital for Medical Negligence and Refund India',
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
  return <HospitalForMedicalNegligenceRefundClient />;
}
