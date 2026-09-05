import { Metadata } from 'next';
import PharmacyInvoiceNotClearedClient from './PharmacyInvoiceNotClearedClient';

const slug = 'send-a-legal-notice/pharmacy-invoice-not-cleared';
const title = 'Legal Notice for Unpaid Pharmacy Invoice | Send Notice';
const description = 'Unpaid pharmacy or medical store invoice? Send an advocate-vetted legal notice under the MSMED Act to recover pending dues with interest.';
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
        alt: 'Legal Notice for Pharmacy Invoice Not Cleared',
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
  return <PharmacyInvoiceNotClearedClient />;
}
