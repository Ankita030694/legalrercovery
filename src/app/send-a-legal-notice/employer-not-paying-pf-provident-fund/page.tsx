import { Metadata } from 'next';
import EmployerNotPayingPfProvidentFundClient from './EmployerNotPayingPfProvidentFundClient';

const slug = 'send-a-legal-notice/employer-not-paying-pf-provident-fund';
const title = 'Legal Notice to Employer for Not Paying PF Provident Fund | Draft & Send Notice';
const description = 'Employer deducted PF from salary but did not deposit with EPFO? Send an advocate-vetted legal notice to your employer for unpaid provident fund under EPF Act Section 14B, Section 7Q & IPC 406.';
const url = `https://www.legalrecovery.in/${slug}`;

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
        url: `/images/og/${slug.split('/').pop()}.jpg`,
        width: 1200,
        height: 630,
        alt: 'Legal Notice to Employer for Not Paying PF Provident Fund',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/images/og/${slug.split('/').pop()}.jpg`],
  },
};

export default function Page() {
  return <EmployerNotPayingPfProvidentFundClient />;
}
