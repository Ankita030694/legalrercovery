import { Metadata } from 'next';
import RecoveryOfUnpaidDuesClient from './RecoveryOfUnpaidDuesClient';

export const metadata: Metadata = {
  title: 'Recovery of Unpaid Dues for My Business | B2B Debt Recovery Guide',
  description: 'Learn the legal process for recovery of unpaid dues for my business in India. Enforce payments under MSMED Act, Order 37 CPC summary suits, and advocate legal notice.',
  alternates: {
    canonical: 'https://legalrecovery.in/recovery-of-unpaid-dues-for-my-business',
  },
  openGraph: {
    title: 'Recovery of Unpaid Dues for My Business | Complete Legal Guide',
    description: 'Statutory remedies and legal notice strategies to recover outstanding commercial dues, B2B unpaid invoices, and vendor defaults under Indian law.',
    url: 'https://legalrecovery.in/recovery-of-unpaid-dues-for-my-business',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: '2024-03-20T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://legalrecovery.in/images/og/recovery-of-unpaid-dues-for-my-business.jpg',
        width: 1200,
        height: 630,
        alt: 'Recovery of Unpaid Dues for My Business - Commercial Legal Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery of Unpaid Dues for My Business | Legal Recovery India',
    description: 'Step-by-step statutory guide for businesses to recover unpaid invoices, commercial debts, and client defaults under Indian law.',
    images: ['https://legalrecovery.in/images/og/recovery-of-unpaid-dues-for-my-business.jpg'],
  },
};

export default function RecoveryOfUnpaidDuesPage() {
  return <RecoveryOfUnpaidDuesClient />;
}
