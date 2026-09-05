import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self';",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/favicon/favicon.ico",
        permanent: true,
      },
      {
        source: "/how-does-the-micro-small-and-medium-enterprises-act-help-freelancers-recover-overdue-payments-in-india",
        destination: "/msme-act-freelancer-payment-recovery",
        permanent: true,
      },
      {
        source: "/what-legal-options-does-a-freelancer-in-india-have-to-recover-unpaid-payments-from-a-client",
        destination: "/freelancer-payment-recovery-legal-options-india",
        permanent: true,
      },
      {
        source: "/what-are-the-legal-steps-to-recover-a-security-deposit-from-a-landlord-who-is-refusing-to-return-it-in-india",
        destination: "/recover-security-deposit-from-landlord-india",
        permanent: true,
      },
      {
        source: "/what-evidence-should-a-freelancer-collect-to-strengthen-a-payment-recovery-case-against-a-client",
        destination: "/freelancer-evidence-checklist-payment-recovery-india",
        permanent: true,
      },
      {
        source: "/how-can-a-freelancer-send-a-legal-notice-to-a-client-who-has-not-paid-for-completed-work-in-india",
        destination: "/how-freelancer-can-send-legal-notice-to-client-india",
        permanent: true,
      },
      {
        source: "/can-i-send-a-legal-notice-to-my-landlord-for-not-refunding-the-security-deposit-after-vacating-the-property",
        destination: "/legal-notice-to-landlord-for-security-deposit-refund-india",
        permanent: true,
      },
      {
        source: "/can-a-freelancer-file-a-case-in-a-consumer-forum-or-civil-court-to-recover-payment-in-india",
        destination: "/freelancer-consumer-forum-or-civil-court-case-india",
        permanent: true,
      },
      {
        source: "/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts",
        destination: "/is-an-email-or-whatsapp-message-considered-a-valid-legal-notice-in-indian-courts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
