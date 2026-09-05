import { Metadata } from 'next';
import RecoverUnpaidRentFromTenantIndiaClient from './RecoverUnpaidRentFromTenantIndiaClient';

const slug = 'send-a-legal-notice/recover-unpaid-rent-from-tenant-india';
const title = 'Legal Notice to Tenant for Unpaid Rent Recovery India';
const description =
  'Tenant not paying rent in India? Send an advocate-vetted legal notice under Section 106 TPA to recover rent arrears and initiate eviction.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/recover-unpaid-rent-from-tenant-india.jpg`;

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
        alt: 'Legal Notice to Tenant for Not Paying Rent – Recover Unpaid Rent India',
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
  return <RecoverUnpaidRentFromTenantIndiaClient />;
}
