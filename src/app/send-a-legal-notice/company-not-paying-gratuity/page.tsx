import { Metadata } from 'next';
import CompanyNotPayingGratuityClient from './CompanyNotPayingGratuityClient';

const slug = 'send-a-legal-notice/company-not-paying-gratuity';
const title = 'Legal Notice to Company for Not Paying Gratuity India';
const description =
  'Employer not paying gratuity after resignation? Send a legal notice under the Payment of Gratuity Act to recover dues with 10% interest.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/company-not-paying-gratuity.jpg`;

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
        alt: 'Send a Legal Notice to Company for Not Paying Gratuity in India under Payment of Gratuity Act 1972',
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
  return <CompanyNotPayingGratuityClient />;
}
