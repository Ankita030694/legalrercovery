import { Metadata } from 'next';
import ForBusinessToRecoverTheirUnpaidDuesClient from './ForBusinessToRecoverTheirUnpaidDuesClient';

const slug = 'send-a-legal-notice/for-business-to-recover-their-unpaid-dues';
const title = 'Legal Notice for Business to Recover Their Unpaid Dues | Draft & Send Notice';
const description = 'Unpaid B2B invoices, delayed client payments, vendor defaults, or contract dues? Send an advocate-drafted statutory legal notice for business debt recovery under MSMED Act, Order 37 CPC, and Section 138 NI Act.';
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
        alt: 'Legal Notice for Business to Recover Their Unpaid Dues',
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
  return <ForBusinessToRecoverTheirUnpaidDuesClient />;
}
