import { Metadata } from 'next';
import ForBanksToRecoverTheirUnpaidDuesClient from './ForBanksToRecoverTheirUnpaidDuesClient';

const slug = 'send-a-legal-notice/for-banks-to-recover-their-unpaid-dues';
const title = 'Legal Notice for Banks to Recover Outstanding Dues';
const description = 'Defaulted loan or NPA account? Send an advocate-drafted legal notice for bank loan recovery under the SARFAESI Act and Section 138 NI Act.';
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
