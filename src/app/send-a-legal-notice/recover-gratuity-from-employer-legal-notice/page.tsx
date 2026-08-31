import { Metadata } from 'next';
import RecoverGratuityFromEmployerLegalNoticeClient from './RecoverGratuityFromEmployerLegalNoticeClient';

const slug = 'send-a-legal-notice/recover-gratuity-from-employer-legal-notice';
const title = 'Legal Notice to Company for Gratuity Not Paid by Employer | Send Notice India';
const description =
  'Employer or company withholding or delaying your gratuity payout? Send an advocate-vetted statutory legal notice under Payment of Gratuity Act 1972 to claim full gratuity with mandatory 10% interest per annum.';
const url = `https://legalrecovery.in/${slug}`;
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
