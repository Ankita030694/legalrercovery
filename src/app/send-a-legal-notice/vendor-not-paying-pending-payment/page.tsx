import { Metadata } from 'next';
import VendorNotPayingPendingPaymentClient from './VendorNotPayingPendingPaymentClient';

const slug = 'send-a-legal-notice/vendor-not-paying-pending-payment';
const title = 'Legal Notice for Vendor Not Paying Pending Dues India';
const description =
  'Client not paying pending vendor dues? Send an advocate-drafted legal notice under the MSMED Act to recover unpaid commercial invoices.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/vendor-not-paying-pending-payment.jpg`;

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
        alt: 'Send a Legal Notice for Vendor Not Paying Pending Payment in India under MSMED Act 2006 and Commercial Courts Act',
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
  return <VendorNotPayingPendingPaymentClient />;
}
