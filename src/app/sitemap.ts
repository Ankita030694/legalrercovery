import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locationData } from "./legal-recovery-by-city/locationData";

export const revalidate = 3600;

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/property-and-builder-disputes", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/recovery-of-salary-and-employment-dues", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/airline-and-travel-recoveries", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/refunds-and-consumer-complaints", changeFrequency: "weekly", priority: 0.855 },
  { path: "/services/vendor-and-invoice-recoveries", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/security-deposits-and-rental-recoveries", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/recovery-of-freelancer-and-client-payments", changeFrequency: "weekly", priority: 0.85 },
  { path: "/services/recovery-of-money-from-a-friend", changeFrequency: "weekly", priority: 0.85 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact/thank-you", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/payment-success", changeFrequency: "monthly", priority: 0.3 },
  { path: "/payment-failure", changeFrequency: "monthly", priority: 0.3 },
  { path: "/payment-cancelled", changeFrequency: "monthly", priority: 0.3 },
  { path: "/legal-recovery-by-city", changeFrequency: "weekly", priority: 0.8 },
  { path: "/legal-notice-services", changeFrequency: "weekly", priority: 0.8 },

  // Recovery routes
  { path: "/recovery", changeFrequency: "weekly", priority: 0.9 },
  { path: "/recovery/accidental-insurance-claim", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/airline-refund-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/bank-transfer-fraud-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/builder-booking-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/business-dues", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/cheque-bounce-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/consultancy-fees", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/contractor-payment", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/credit-card-fraud-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/cyber-fraud-money", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/debit-card-fraud-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/delayed-flight-compensation", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/delayed-payment-interest-under-msme", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/delayed-wages", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/employment-reimbursement-claims", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/export-dues", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/flat-booking-cancellation-refund", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/flight-cancellation-refund", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/flight-compensation-claim", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/fnf-settlement", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/fraud-transaction-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/freelancer-payments", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/friendly-loan-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/gratuity-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/hand-loan-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/health-insurance-rejection-claim", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/hotel-booking-refund", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/insurance-claim-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/international-client-payment", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/loan-amount-given-to-friend", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/mediclaim-reimbursement", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/money-lent-without-agreement", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/msme-dues", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/msme-samadhan", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/notice-period-salary", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/office-security-deposit", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/online-scam-payment", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/outstanding-dues-from-employer", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/pending-overtime-payment", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/pending-project-payment", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/pending-salary-from-employer", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/pf-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/post-dated-cheque-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/rental-security-deposit", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/retained-salary", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/security-deposit", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/tour-package-refund", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/travel-booking-refund", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/travel-reimbursement", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/under-ni-act", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/unauthorized-bank-deduction", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/unpaid-bonus", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/unpaid-commissions", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/unpaid-incentives", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/unpaid-invoices", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/unpaid-salary", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/upi-fraud-amount", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recovery/vendor-payments", changeFrequency: "weekly", priority: 0.8 },
  { path: "/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india", changeFrequency: "weekly", priority: 0.85 },
  { path: "/can-i-send-a-legal-notice-to-my-employer-for-not-paying-my-salary-and-how-does-it-work", changeFrequency: "weekly", priority: 0.85 },
  { path: "/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer", changeFrequency: "weekly", priority: 0.85 },
  { path: "/what-are-the-legally-valid-ways-to-deliver-a-legal-notice-online-in-india", changeFrequency: "weekly", priority: 0.85 },
  { path: "/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts", changeFrequency: "weekly", priority: 0.85 },
  { path: "/what-should-a-legal-notice-include-to-be-enforceable-under-indian-law", changeFrequency: "weekly", priority: 0.85 },
  { path: "/which-online-platforms-or-services-allow-you-to-draft-and-send-a-legal-notice-in-india", changeFrequency: "weekly", priority: 0.85 },
  { path: "/what-legal-options-does-a-freelancer-in-india-have-to-recover-unpaid-payments-from-a-client", changeFrequency: "weekly", priority: 0.85 },
  { path: "/how-can-a-freelancer-send-a-legal-notice-to-a-client-who-has-not-paid-for-completed-work-in-india", changeFrequency: "weekly", priority: 0.85 },
  { path: "/can-a-freelancer-file-a-case-in-a-consumer-forum-or-civil-court-to-recover-payment-in-india", changeFrequency: "weekly", priority: 0.85 },
  { path: "/send-legal-notice-online-india", changeFrequency: "weekly", priority: 0.85 },
  { path: "/freelancer-payment-recovery-guide", changeFrequency: "weekly", priority: 0.85 },
  { path: "/how-to-recover-unpaid-salary-legally", changeFrequency: "weekly", priority: 0.85 },
  { path: "/legal-notice-to-recovery-my-loan-from-friend", changeFrequency: "weekly", priority: 0.85 },
  { path: "/what-evidence-should-a-freelancer-collect-to-strengthen-a-payment-recovery-case-against-a-client", changeFrequency: "weekly", priority: 0.85 },
  { path: "/how-does-the-micro-small-and-medium-enterprises-act-help-freelancers-recover-overdue-payments-in-india", changeFrequency: "weekly", priority: 0.85 },
  { path: "/what-are-the-legal-steps-to-recover-a-security-deposit-from-a-landlord-who-is-refusing-to-return-it-in-india", changeFrequency: "weekly", priority: 0.85 },
  { path: "/can-i-send-a-legal-notice-to-my-landlord-for-not-refunding-the-security-deposit-after-vacating-the-property", changeFrequency: "weekly", priority: 0.85 },
  { path: "/how-do-i-send-a-legal-notice-to-a-friend-who-is-not-repaying-my-personal-loan-in-india", changeFrequency: "weekly", priority: 0.85 },
];

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
  if (!process.env.MONGODB_URI) {
    return [];
  }

  try {
    const { getDbAndBucket } = await import("@/lib/mongodb");
    const { db } = await getDbAndBucket("fs");

    const blogs = await db
      .collection("blogs")
      .find(
        { slug: { $exists: true, $ne: "" } },
        { projection: { slug: 1, updatedAt: 1, publishedAt: 1, createdAt: 1 } }
      )
      .sort({ publishedAt: -1 })
      .toArray();

    return blogs.map((blog) => {
      const lastModified = new Date(
        blog.updatedAt || blog.publishedAt || blog.createdAt || Date.now()
      );

      return {
        url: `${SITE_URL}/blog/${blog.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error("Sitemap: failed to fetch blog URLs", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = await getBlogEntries();

  const cityEntries: MetadataRoute.Sitemap = locationData.map((loc) => ({
    url: `${SITE_URL}/legal-recovery-by-city/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...cityEntries];
}

