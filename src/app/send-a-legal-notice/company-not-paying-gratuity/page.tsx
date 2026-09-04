import { Metadata } from 'next';
import CompanyNotPayingGratuityClient from './CompanyNotPayingGratuityClient';

const slug = 'send-a-legal-notice/company-not-paying-gratuity';
const title = 'Send Legal Notice to Company for Not Paying Gratuity | Recovery India';
const description =
  'Company or employer withholding your gratuity after resignation, retirement, or termination? Send an advocate-drafted statutory legal notice under Section 4, 7(3A), and 8 of the Payment of Gratuity Act, 1972 to recover your unpaid gratuity with mandatory 10% statutory interest within 15 days.';
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
