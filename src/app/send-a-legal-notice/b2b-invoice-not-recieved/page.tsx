import { Metadata } from 'next';
import B2bInvoiceNotRecievedClient from './B2bInvoiceNotRecievedClient';

const slug = 'send-a-legal-notice/b2b-invoice-not-recieved';
const title = 'Legal Notice for B2B Invoice Not Recieved | Recover Commercial Dues';
const description = 'Unpaid B2B supplier invoice, pending vendor dues, or corporate billing default? Send a formal advocate-vetted legal notice under the MSMED Act and Commercial Courts Act to recover business dues with 3x compound interest.';
const url = `https://www.legalrecovery.in/${slug}`;

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
        url: `/images/og/${slug.split('/').pop()}.jpg`,
        width: 1200,
        height: 630,
        alt: 'Legal Notice for B2B Invoice Not Recieved',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/images/og/${slug.split('/').pop()}.jpg`],
  },
};

export default function Page() {
  return <B2bInvoiceNotRecievedClient />;
}
