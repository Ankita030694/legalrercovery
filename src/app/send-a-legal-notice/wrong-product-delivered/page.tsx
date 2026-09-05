import { Metadata } from 'next';
import WrongProductDeliveredClient from './WrongProductDeliveredClient';

export const metadata: Metadata = {
  title: 'Legal Notice for Wrong Product Delivered | Send Notice',
  description: 'Received a wrong product? Send a legal notice to get a full refund or replacement from e-commerce sellers under the Consumer Protection Act.',
  alternates: {
    canonical: 'https://www.legalrecovery.in/send-a-legal-notice/wrong-product-delivered',
  },
  openGraph: {
    title: 'Send a Legal Notice for Wrong Product Delivered',
    description: 'Protect your consumer rights. Learn how to legally demand a refund or replacement when a seller delivers the wrong product.',
    url: 'https://www.legalrecovery.in/send-a-legal-notice/wrong-product-delivered',
    type: 'article',
    authors: ['Advocate Aman Chawla'],
    publishedTime: '2024-03-14T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: 'https://www.legalrecovery.in/images/og/wrong-product-delivered.jpg',
        width: 1024,
        height: 1024,
        alt: 'Wrong Product Delivered? Send a Legal Notice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Send a Legal Notice for Wrong Product Delivered',
    description: 'Protect your consumer rights when you receive the wrong product. Complete legal guide.',
    images: ['https://www.legalrecovery.in/images/og/wrong-product-delivered.jpg'],
  },
};

export default function WrongProductDeliveredPage() {
  return <WrongProductDeliveredClient />;
}
