import { Metadata } from 'next';
import TradingScamTelegramClient from './TradingScamTelegramClient';

const slug = 'send-a-legal-notice/trading-scam-telegram';
const title = 'Legal Notice for Trading Scam on Telegram India';
const description =
  'Lost money in a Telegram trading or investment scam? Send an advocate-drafted legal notice and take legal action to recover stolen funds.';
const url = `https://www.legalrecovery.in/${slug}`;
const ogImage = `/images/og/trading-scam-telegram.jpg`;

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
        alt: 'Legal Notice for Telegram Stock Trading and Investment Scam Recovery in India',
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
  return <TradingScamTelegramClient />;
}
