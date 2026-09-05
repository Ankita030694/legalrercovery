import { Metadata } from 'next';
import CompanyRefusingRefundClient from './CompanyRefusingRefundClient';

export const metadata: Metadata = {
  title: 'Legal Notice for Company Refusing Refund | Send Notice',
  description: 'Learn the exact legal steps and how to send a legal notice for a company refusing refund. Get your money back under the Consumer Protection Act.',
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-a-legal-notice/company-refusing-refund',
  },
  openGraph: {
    title: 'Send a Legal Notice for Company Refusing Refund',
    description: 'Protect your consumer rights. Learn how to legally demand a refund when a company refuses to return your money.',
    url: 'https://www.legalrecovery.in/send-a-legal-notice/company-refusing-refund',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://www.legalrecovery.in/images/og/company-refusing-refund.jpg',
        width: 1024,
        height: 1024,
        alt: 'Company Refusing Refund? Send a Legal Notice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Send a Legal Notice for Company Refusing Refund',
    description: 'Protect your consumer rights when a company refuses to refund your money. Complete legal guide.',
    images: ['https://www.legalrecovery.in/images/og/company-refusing-refund.jpg'],
  },
};

export default function CompanyRefusingRefundPage() {
  return <CompanyRefusingRefundClient />;
}
