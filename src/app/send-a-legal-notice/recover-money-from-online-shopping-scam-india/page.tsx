import { Metadata } from 'next';
import RecoverMoneyFromOnlineShoppingScamIndiaClient from './RecoverMoneyFromOnlineShoppingScamIndiaClient';

const slug = 'send-a-legal-notice/recover-money-from-online-shopping-scam-india';
const title = 'How to Recover Money from Online Shopping Scam India | Legal Notice & Recovery Guide';
const description =
  'Scammed by a fake shopping website, fraudulent social media seller, or deceptive ecommerce portal in India? Send an advocate-vetted statutory legal notice, trigger bank chargebacks, file on National Cybercrime Portal (1930), and recover your money under Consumer Protection Act 2019 and BNS 2023.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/recover-money-from-online-shopping-scam-india.jpg`;

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
        alt: 'Recover Money from Online Shopping Scam India - Legal Notice & Recovery Process',
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
  return <RecoverMoneyFromOnlineShoppingScamIndiaClient />;
}
