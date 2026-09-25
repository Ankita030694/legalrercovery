import { Metadata } from 'next';
import BulkRecoveryNoticeSendThroughEmailWhatsappSpeedpostSolutionClient from './BulkRecoveryNoticeSendThroughEmailWhatsappSpeedpostSolutionClient';

export const metadata: Metadata = {
  title: 'Bulk Recovery Notice via Email, WhatsApp & Speed Post | Business Dues Recovery',
  description: 'Execute rapid recovery of unpaid dues for business using advocate-drafted bulk legal notices delivered simultaneously across Email, WhatsApp, and India Post Speed Post.',
  alternates: {
    canonical: 'https://legalrecovery.in/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution',
  },
  openGraph: {
    title: 'Bulk Recovery Notice Solution: Email, WhatsApp & Speed Post | Legal Recovery',
    description: 'Statutory guide and multi-channel bulk recovery notice solution to recover unpaid commercial dues, invoices, and delinquent debts under Indian law.',
    url: 'https://legalrecovery.in/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: '2024-04-15T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://legalrecovery.in/images/og/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution.jpg',
        width: 1200,
        height: 630,
        alt: 'Bulk Recovery Notice via Email, WhatsApp & Speed Post for Business Unpaid Dues',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk Recovery Notice Solution: Email, WhatsApp & Speed Post',
    description: 'Fast-track recovery of unpaid dues for business through simultaneous legal notices sent via Email, WhatsApp, and Speed Post in India.',
    images: ['https://legalrecovery.in/images/og/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution.jpg'],
  },
};

export default function BulkRecoveryNoticePage() {
  return <BulkRecoveryNoticeSendThroughEmailWhatsappSpeedpostSolutionClient />;
}
