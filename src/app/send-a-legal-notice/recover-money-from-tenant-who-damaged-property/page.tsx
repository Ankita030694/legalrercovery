import { Metadata } from 'next';
import RecoverMoneyFromTenantWhoDamagedPropertyClient from './RecoverMoneyFromTenantWhoDamagedPropertyClient';

const slug = 'send-a-legal-notice/recover-money-from-tenant-who-damaged-property';
const title = 'Legal Notice to Tenant for Property Damage | Recover Money India';
const description =
  'Tenant damaged your commercial or residential property? Send an advocate-vetted statutory legal notice under Transfer of Property Act Section 108(m) & Contract Act Section 73 to recover repair costs exceeding security deposit.';
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
