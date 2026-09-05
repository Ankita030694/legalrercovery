import { Metadata } from 'next';
import RecoverMoneyFromTenantWhoDamagedPropertyClient from './RecoverMoneyFromTenantWhoDamagedPropertyClient';

const slug = 'send-a-legal-notice/recover-money-from-tenant-who-damaged-property';
const title = 'Legal Notice to Tenant for Property Damage Recovery';
const description =
  'Tenant damaged your property? Send an advocate-vetted legal notice under the Transfer of Property Act to recover repair costs and damages.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/recover-money-from-tenant-who-damaged-property.jpg`;

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
        alt: 'Legal Notice to Tenant to Recover Money for Property Damage in India',
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
  return <RecoverMoneyFromTenantWhoDamagedPropertyClient />;
}
