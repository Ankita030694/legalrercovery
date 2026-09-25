import { Metadata } from 'next';
import BulkRecoveryCasesClient from './BulkRecoveryCasesClient';

export const metadata: Metadata = {
  title: 'Bulk Recovery Cases: All-in-One Affordable Solutions for Business Dues',
  description: 'Streamline the recovery of unpaid dues for business across multiple debtors. Advocate-drafted bulk legal notices, MSME Samadhaan, and commercial debt settlement.',
  alternates: {
    canonical: 'https://legalrecovery.in/bulk-recovery-cases-all-in-one-affordable-solutions',
  },
  openGraph: {
    title: 'Bulk Recovery Cases: All-in-One Affordable Solutions for Business Dues',
    description: 'Statutory guide and affordable all-in-one solutions for businesses to recover bulk unpaid invoices, commercial debts, and client defaults under Indian law.',
    url: 'https://legalrecovery.in/bulk-recovery-cases-all-in-one-affordable-solutions',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: '2024-04-10T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://legalrecovery.in/images/og/bulk-recovery-cases-all-in-one-affordable-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Bulk Recovery Cases: All-in-One Affordable Solutions for Business Dues',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk Recovery Cases: All-in-One Affordable Solutions for Business Dues',
    description: 'Affordable, tech-enabled bulk recovery solutions for commercial unpaid invoices and B2B defaults in India.',
    images: ['https://legalrecovery.in/images/og/bulk-recovery-cases-all-in-one-affordable-solutions.jpg'],
  },
};

export default function BulkRecoveryCasesPage() {
  return <BulkRecoveryCasesClient />;
}
