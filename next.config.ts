import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
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
    ];
  },
};

export default nextConfig;
