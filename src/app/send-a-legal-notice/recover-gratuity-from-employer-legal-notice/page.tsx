import { Metadata } from 'next';
import RecoverGratuityFromEmployerLegalNoticeClient from './RecoverGratuityFromEmployerLegalNoticeClient';

const slug = 'send-a-legal-notice/recover-gratuity-from-employer-legal-notice';
const title = 'Legal Notice to Employer for Unpaid Gratuity in India';
const description =
  'Employer withholding your gratuity? Send an advocate-vetted legal notice under the Payment of Gratuity Act to claim dues with 10% interest.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/recover-gratuity-from-employer-legal-notice.jpg`;

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
        alt: 'Legal Notice to Company for Gratuity Not Paid by Employer India',
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
  return <RecoverGratuityFromEmployerLegalNoticeClient />;
}
