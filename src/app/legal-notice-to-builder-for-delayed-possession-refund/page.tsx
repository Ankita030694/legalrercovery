import { Metadata } from "next";
import BuilderDelayedPossessionClient from "./BuilderDelayedPossessionClient";

export const metadata: Metadata = {
  title: "Legal Notice to Builder: Delayed Possession & Refund",
  description: "How home buyers can use a legal notice to demand a refund of their booking amount from a builder under RERA, Consumer Forum, and NCLT rules.",
  keywords: [
    "legal notice to builder for delayed possession",
    "builder delayed possession refund",
    "RERA refund legal notice format",
    "recover booking amount from builder",
    "developer delayed possession penalty"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/legal-notice-to-builder-for-delayed-possession-refund',
  },
};

export default function BuilderDelayedPossessionPage() {
  return <BuilderDelayedPossessionClient />;
}
