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
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https://va.vercel-scripts.com https://connect.facebook.net https://www.facebook.com https://*.facebook.com https://vitals.vercel-insights.com https://secure.payu.in https://*.payu.in; frame-src 'self' https://www.facebook.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://secure.payu.in https://*.payu.in https://www.facebook.com;",
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

// [old path, closest live page]. Old paths were linked from pages or blog posts but never existed.
const BROKEN_LINK_REDIRECTS: [string, string][] = [
  // linked from page code
  ["/templates/unauthorised-transaction-complaint-letter-bank", "/law/rbi-zero-liability-unauthorised-transaction"],
  ["/security-cheque-misuse-section-138", "/stop-payment-cheque-bounce-case"],
  ["/offer-letter-revoked-compensation-india", "/legal-notice-wrongful-termination-unpaid-notice-period-salary"],
  ["/franchise-fee-refund-legal-notice", "/legal-notice-to-vendor-for-refund-of-advance-payment"],
  ["/hi/security-deposit-wapas-kaise-le", "/recover-security-deposit-from-landlord-india"],
  ["/services/consumer-complaints", "/services/refunds-and-consumer-complaints"],
  ["/services/cheque-bounce", "/recovery/cheque-bounce-amount"],
  ["/services/corporate-recovery", "/services/vendor-and-invoice-recoveries"],
  ["/legal-recovery-by-city/gurugram", "/legal-recovery-by-city/gurgaon"],
  ["/legal-recovery-by-city/bengaluru", "/legal-recovery-by-city/bangalore"],
  // linked from blog post content
  ["/money-recovery-court-case-process-india", "/civil-suit-for-recovery-of-money-india"],
  ["/services/friendly-loan-recovery", "/services/recovery-of-money-from-a-friend"],
  ["/how-to-recover-money-lent-to-friend-without-proof", "/how-to-recover-money-without-written-agreement"],
  ["/legal-notice-for-recovery-of-friendly-loan", "/recovery/friendly-loan-amount"],
  ["/legal-notice-for-money-recovery", "/legal-notice-for-recovery-of-money"],
  ["/legal-notice-for-salary-recovery", "/recovery/unpaid-salary"],
  ["/employer-holding-relieving-letter-and-fnf", "/employer-withholding-relieving-letter-legal-action"],
  ["/startup-laid-off-without-paying-salary", "/send-a-legal-notice/delayed-salary-startup-company-india"],
  ["/b2b-vendor-payment-recovery", "/send-a-legal-notice/vendor-not-paying-pending-payment"],
  ["/msme-samadhaan-portal-delayed-payment-recovery", "/recovery/msme-samadhan"],
  ["/unpaid-invoice-recovery-legal-notice-format", "/recovery/unpaid-invoices"],
  ["/how-to-send-legal-notice-to-company-for-non-payment", "/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"],
  ["/cheque-bounce-legal-notice-format", "/cheque-bounce-notice-timeline-section-138"],
  ["/unpaid-salary-and-pf-not-deposited-legal-notice", "/send-a-legal-notice/employer-not-paying-pf-provident-fund"],
  ["/wrongful-termination-and-unpaid-salary-legal-notice", "/legal-notice-wrongful-termination-unpaid-notice-period-salary"],
  ["/summary-suit-for-money-recovery-india", "/law/order-37-summary-suit-money-recovery"],
  ["/recovery/friendly-loan", "/recovery/friendly-loan-amount"],
  ["/company-closed-down-without-paying-salary", "/recovery/pending-salary-from-employer"],
  ["/debtor-not-responding-to-calls-or-messages", "/what-to-do-if-legal-notice-is-ignored-india"],
  ["/can-legal-notice-be-sent-on-whatsapp-and-email-india", "/is-an-email-or-whatsapp-message-considered-a-valid-legal-notice-in-indian-courts"],
  ["/tenant-security-deposit-recovery-legal-notice", "/legal-notice-to-landlord-for-security-deposit-refund-india"],
  ["/legal-recovery-of-money-from-landlord", "/recover-security-deposit-from-landlord-india"],
  ["/legal-notice-to-recover-my-loan-from-friend", "/legal-notice-to-recovery-my-loan-from-friend"],
  ["/how-to-send-a-legal-notice", "/how-to-send-a-legal-notice-for-recovery-of-money-in-india"],
  ["/delayed-payment-interest-calculator", "/tools/msme-delayed-payment-interest-calculator"],
  ["/amazon-refund-not-received-legal-notice", "/legal-notice-to/amazon"],
  ["/consumer-court-complaint-drafting-services", "/services/refunds-and-consumer-complaints"],
  ["/unpaid-invoices-recovery-guide-for-indian-businesses", "/recovery/unpaid-invoices"],
  ["/commercial-court-summary-suit-recovery-delhi-mumbai-bangalore", "/law/order-37-summary-suit-money-recovery"],
  ["/msme-delayed-payment-interest-recovery-guide", "/msme-delayed-payment-recovery-samadhan-vs-legal-notice"],
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
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
        source: "/blog/recover-money-from-transaction-mistake",
        destination: "/recovery/wrong-upi-transfer",
        permanent: true,
      },
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
      {
        source: "/legal-notice-online",
        destination: "/online-legal-notice",
        permanent: true,
      },
      {
        source: "/send-legal-notice",
        destination: "/online-legal-notice",
        permanent: true,
      },
      {
        source: "/authors/advocate-aman-chawla",
        destination: "/authors/anuj-anand-malik",
        permanent: true,
      },
      // Dead internal links (link audit 2026-11-05): each sends visitors to the closest live page.
      ...BROKEN_LINK_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true })),
      {
        source: "/how-to-recover-full-final-settlement-from-employer",
        destination: "/how-to-recover-full-and-final-settlement-from-employer",
        permanent: true,
      },
      {
        source: "/blog/money-recovery-blinkit-wrongful-delivery",
        destination: "/legal-notice-to/blinkit",
        permanent: true,
      },
      {
        source: "/blog/money-recovery-zepto-wrongful-delivery",
        destination: "/legal-notice-to/zepto",
        permanent: true,
      },
      {
        source: "/send-a-legal-notice/zomato-refund-not-recieved",
        destination: "/legal-notice-to/zomato",
        permanent: true,
      },
      {
        source: "/send-a-legal-notice/swiggy-refund-not-recieved",
        destination: "/legal-notice-to/swiggy",
        permanent: true,
      },
      {
        source: "/blog/money-recovery-instamart-wrongful-product-delivery",
        destination: "/legal-notice-to/swiggy",
        permanent: true,
      },
        {
        source: "/blog/understanding-charges-for-legal-notice",
        destination: "/legal-notice-charges",
        permanent: true,
      },
  ];
  },
};

export default nextConfig;
