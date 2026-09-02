import { Metadata } from 'next';
import VendorNotPayingPendingPaymentClient from './VendorNotPayingPendingPaymentClient';

const slug = 'send-a-legal-notice/vendor-not-paying-pending-payment';
const title = 'Legal Notice for Vendor Not Paying Pending Payment | Commercial Debt Recovery India';
const description =
  'Corporate client, buyer, or contractor withholding pending vendor payments, unpaid commercial invoices, or supply contract dues? Send an advocate-drafted statutory legal notice under the MSMED Act 2006, Commercial Courts Act 2015, and Indian Contract Act 1872 to recover your pending vendor dues with 3x RBI compound interest within 15 days.';
const url = `https://legalrecovery.in/${slug}`;
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
