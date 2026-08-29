import { Metadata } from 'next';
import ForBanksToRecoverTheirUnpaidDuesClient from './ForBanksToRecoverTheirUnpaidDuesClient';

const slug = 'send-a-legal-notice/for-banks-to-recover-their-unpaid-dues';
const title = 'Legal Notice for Banks to Recover Their Unpaid Dues | Draft & Send Notice';
const description = 'Defaulted commercial loan, Cash Credit/Overdraft limit, term loan, or NPA? Send an advocate-drafted statutory legal notice for bank recovery under SARFAESI Act, Section 138 NI Act, and DRT provisions.';
const url = `https://legalrecovery.in/${slug}`;

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
        alt: 'Legal Notice for Banks to Recover Their Unpaid Dues',
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
  return <ForBanksToRecoverTheirUnpaidDuesClient />;
}
