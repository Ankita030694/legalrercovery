import { Metadata } from 'next';
import DefectiveProductRefundClient from './DefectiveProductRefundClient';

export const metadata: Metadata = {
  title: 'Legal Notice for Defective Product Refund | Send Notice',
  description: 'Received a defective product? Send an advocate-vetted legal notice to demand a replacement or refund under the Consumer Protection Act.',
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-a-legal-notice/defective-product-refund',
  },
  openGraph: {
    title: 'Send a Legal Notice for Defective Product Refund',
    description: 'Protect your consumer rights. Learn how to legally demand a refund when you receive a defective or damaged product.',
    url: 'https://www.legalrecovery.in/send-a-legal-notice/defective-product-refund',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: '2024-03-14T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://www.legalrecovery.in/images/og/defective-product-refund.jpg',
        width: 1024,
        height: 1024,
        alt: 'Defective Product Refund? Send a Legal Notice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Send a Legal Notice for Defective Product Refund',
    description: 'Protect your consumer rights when you receive a defective product. Complete legal guide for refunds.',
    images: ['https://www.legalrecovery.in/images/og/defective-product-refund.jpg'],
  },
};

export default function DefectiveProductRefundPage() {
  return <DefectiveProductRefundClient />;
}
