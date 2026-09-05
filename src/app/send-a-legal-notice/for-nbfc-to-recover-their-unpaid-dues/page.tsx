import { Metadata } from 'next';
import ForNbfcToRecoverTheirUnpaidDuesClient from './ForNbfcToRecoverTheirUnpaidDuesClient';

const slug = 'send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues';
const title = 'Legal Notice for NBFCs to Recover Unpaid Dues India';
const description = 'Defaulted loans or bounced EMIs? Send an advocate-drafted legal notice for NBFC debt recovery under SARFAESI Act and Section 138 NI Act.';
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
        alt: 'Legal Notice for NBFC to Recover Their Unpaid Dues',
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
  return <ForNbfcToRecoverTheirUnpaidDuesClient />;
}
