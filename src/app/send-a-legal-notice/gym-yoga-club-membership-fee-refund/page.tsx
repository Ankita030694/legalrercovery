import { Metadata } from 'next';
import GymYogaClubMembershipFeeRefundClient from './GymYogaClubMembershipFeeRefundClient';

const slug = 'send-a-legal-notice/gym-yoga-club-membership-fee-refund';
const title = 'Legal Notice for Gym & Fitness Club Membership Refund';
const description =
  'Gym or fitness club refusing membership refund? Send a legal notice for deficiency of service under the Consumer Protection Act in India.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/gym-yoga-club-membership-fee-refund.jpg`;

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
        alt: 'Legal Notice to Gym Yoga Club for Membership Fee Refund India',
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
  return <GymYogaClubMembershipFeeRefundClient />;
}
