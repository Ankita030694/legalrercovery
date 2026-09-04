import { Metadata } from 'next';
import SecurityDepositNotRefundedLandlordClient from './SecurityDepositNotRefundedLandlordClient';

const slug = 'send-a-legal-notice/security-deposit-not-refunded-landlord';
const title = 'Legal Notice to Landlord for Not Giving Back Security Deposit | Commercial & Residential';
const description = 'Landlord withholding commercial or residential rental deposit? Send an advocate-drafted statutory legal notice for security deposit recovery with penal interest under TPA, Model Tenancy Act & Commercial Courts Act.';
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
        alt: 'Legal Notice to Landlord for Not Giving Back Security Deposit',
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
  return <SecurityDepositNotRefundedLandlordClient />;
}
