import { Metadata } from 'next';
import GymYogaClubMembershipFeeRefundClient from './GymYogaClubMembershipFeeRefundClient';

const slug = 'send-a-legal-notice/gym-yoga-club-membership-fee-refund';
const title = 'Legal Notice to Gym, Yoga & Fitness Club for Membership Fee Refund | Legal Recovery India';
const description =
  'Gym, yoga studio, or fitness club refusing advance membership fee refund? Send an advocate-vetted statutory legal notice for unfair contract terms, deficiency in service, or abrupt closure under Consumer Protection Act 2019 & Indian Contract Act.';
const url = `https://legalrecovery.in/${slug}`;
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
