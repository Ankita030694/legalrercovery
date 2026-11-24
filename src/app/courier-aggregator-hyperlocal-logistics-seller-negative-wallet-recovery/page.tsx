import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CourierWalletTableOfContents from "./CourierWalletTableOfContents";
import CourierWalletScenarioTabs from "./CourierWalletScenarioTabs";
import CourierWalletCTA from "./CourierWalletCTA";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/courier-aggregator-hyperlocal-logistics-seller-negative-wallet-recovery`;
const PAGE_H1 =
  "Bulk Legal Recovery for E-Commerce Courier & Shipping Aggregators: Negative Seller Wallets, RTO Surges & Volumetric Weight Arrears";
const META_TITLE = "Courier Aggregator: Negative Seller Wallet & RTO Recovery";
const META_DESCRIPTION =
  "D2C sellers abandoning courier accounts after RTO & volumetric weight audits push wallets negative? Enforce IT Act s.10A terms & recover in bulk.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Courier Aggregator Negative Seller Wallet and RTO Weight Arrears Recovery Guide"
        ),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title:
      "Information Technology Act, 2000 (Section 10A — Validity of Clickwrap Electronic Merchant Shipping Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 37, 73 & 74 — Freight Performance, Liquidated Damages & Set-Off Clauses)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic AWB, Sorter Dimensioner & COD Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits for Liquidated Commercial Wallet Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Sections 7(4)(b) & 21 — Electronic Arbitration Agreements & ODR Invocation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita, 2023 (Sections 316 & 318 — Criminal Breach of Trust & Cheating in Fake COD / Empty-Box Fraud)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
];

const FAQS = [
  {
    question:
      "Are clickwrap Merchant Shipping Terms enforceable to recover a negative courier seller wallet in India?",
    answer:
      "Yes. Under Section 10A of the Information Technology Act, 2000, a contract formed through electronic acceptance (checkbox clickwrap, OTP login, and dashboard API onboarding) is legally valid and enforceable. When paired with the merchant's GSTIN/PAN KYC, bank penny-drop verification, and IP/timestamp audit logs certified under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, the negative wallet balance constitutes an enforceable commercial debt.",
  },
  {
    question:
      "How can shipping aggregators recover RTO and volumetric weight arrears when COD payouts were remitted early?",
    answer:
      "Early T+1 or T+2 COD remittance is a credit accommodation governed by the aggregator's settlement and clawback clauses. Once subsequent Return-to-Origin (RTO) freight charges or automated sorter volumetric weight-discrepancy debits push the wallet negative, the aggregator can freeze any linked GSTIN/PAN sub-wallets, generate a consolidated AWB-level ledger, and serve a 15-day batch legal notice via Email, WhatsApp, and Speed Post RPAD demanding wallet regularization.",
  },
  {
    question:
      "What proof defeats D2C seller objections to volumetric weight discrepancy charges?",
    answer:
      "Aggregators win weight-dispute defences by combining three electronic records: (1) the express L×B×H / 5000 volumetric billing clause in the accepted rate card, (2) timestamped automated hub laser-dimensioner photos and carrier re-weigh manifest scans linked to the AWB, and (3) proof that the seller failed to upload unboxing/dimension counter-evidence within the contractual 7-day dispute SLA.",
  },
  {
    question:
      "Can a courier company send 500 to 1,000+ legal notices in a single monthly batch via CSV?",
    answer:
      "Yes. Enterprise courier aggregators and hyperlocal platforms routinely onboard 500 to 1,000+ negative-wallet accounts per month using a standardized CSV ledger feed (Seller Legal Name, GSTIN/PAN, Registered Address, Email, WhatsApp Number, Negative Wallet Principal, and AWB/Weight Audit Count). Each account receives an individualized, fact-verified statutory notice dispatched across Email, WhatsApp, and Speed Post RPAD.",
  },
  {
    question:
      "When should an aggregator escalate a negative wallet account to criminal action under BNS s.316/s.318?",
    answer:
      "Ordinary RTO surges or business cash-flow defaults are civil/commercial disputes best handled through batch notices, Online Dispute Resolution (ODR), or Order XXXVII CPC summary suits. However, where KYC, hub weight-mismatch scans, and consignee clustering reveal deliberate fake COD cycles, empty-box parcels, or systematic siphoning of early COD payouts, the aggregator can invoke Sections 316 and 318 of the Bharatiya Nyaya Sanhita (BNS), 2023 alongside civil recovery.",
  },
  {
    question:
      "What is the typical ticket threshold for moving from batch legal notices to Order 37 CPC or Arbitration?",
    answer:
      "Accounts between -₹15,000 and -₹1,00,000 typically deliver the highest net ROI through automated 3-channel legal demand notices and institutional ODR conciliation, avoiding disproportionate court fees. Accounts exceeding -₹1,00,000 to -₹5,00,000+ (including postpaid enterprise courier defaults) justify rapid escalation to Institutional Arbitration under Section 21 or Order XXXVII CPC summary suits.",
  },
  {
    question:
      "Can an aggregator set off a negative seller wallet against another brand or GSTIN operated by the same promoter?",
    answer:
      "If the Merchant Terms of Service contain an explicit cross-account and sister-entity set-off clause—and the aggregator can prove common beneficial ownership via shared PAN, bank settlement account, or GSTIN director linkage—the aggregator can lawfully withhold and adjust pending COD remittances across linked accounts, provided transparent ledger reconciliation is furnished.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Courier & Shipping Aggregators Recover Negative Seller Wallets in Bulk",
  description:
    "Step-by-step operational and statutory playbook for Indian e-commerce shipping aggregators and hyperlocal logistics platforms to recover abandoned negative seller wallets.",
  step: [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Freeze Linked COD Payouts & Export Defaulter CSV",
      "text": "Suspend pending COD remittances on linked PAN/GSTIN accounts under cross-account set-off clauses and export negative wallet balances (-₹15,000 to -₹5,00,000+) with KYC and AWB metadata.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Compile BSA 2023 s.63 Electronic Evidence Pack",
      "text": "Bundle clickwrap Merchant Terms acceptance logs (IT Act s.10A), COD UTR remittance trails, automated sorter dimensioner photos, and closed weight-dispute tickets with a Section 63 BSA certificate.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Dispatch Synchronized Batch Legal Notices (Email, WhatsApp & RPAD)",
      "text": "Serve individualized fact-verified 15-day statutory demand notices in batches of 500 to 1,000+ accounts per month with direct wallet top-up payment links.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Escalate Uncured Accounts to ODR, Order 37 CPC, or BNS Fraud Action",
      "text": "Route uncured ₹15K–₹1L wallets to institutional ODR, escalate ₹1L–₹5L+ postpaid or RTO arrears to Order XXXVII CPC / Arbitration, and refer collusive fake-COD rings under BNS ss.316 & 318.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Logistics & 3PL Recovery Hub",
      item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Courier Aggregator Negative Wallet Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function CourierAggregatorNegativeWalletRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-09 Logistics &amp; E-Commerce Hub</span>
            <span>•</span>
            <span>B2B Creditor Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* 40–60 Word Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Indian shipping aggregators can recover abandoned negative seller wallets (-₹15,000 to -₹5,00,000+) by enforcing clickwrap Merchant Terms under{" "}
            <strong className="text-white">IT Act s.10A</strong> and{" "}
            <strong className="text-white">Contract Act s.73</strong>, certifying AWB/weight-audit logs under{" "}
            <strong className="text-white">BSA 2023 s.63</strong>, and dispatching batch legal notices via Email, WhatsApp &amp; Speed Post within our{" "}
            <Link
              href="/industries/logistics-freight-3pl-recovery"
              className="text-red-300 underline hover:text-white font-bold"
            >
              Logistics, 3PL &amp; Freight Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">
                -₹15K to -₹5L
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Typical Abandoned D2C Seller Wallet Deficit
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                IT Act s.10A
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Binding Clickwrap Merchant &amp; Rate Card Terms
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                1,000+ / mo
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Automated CSV Batch Legal Notice Throughput
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                BSA 2023 s.63
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Admissible Sorter, AWB &amp; COD Ledger Proof
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Logistics & 3PL Recovery Hub",
                href: "/industries/logistics-freight-3pl-recovery",
              },
              {
                label: "Courier Aggregator Negative Wallet Recovery",
                href: "/courier-aggregator-hyperlocal-logistics-seller-negative-wallet-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <CourierWalletTableOfContents />

          {/* Article Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why D2C Seller Wallets Turn Negative After Early COD Payouts
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For Indian e-commerce courier aggregators, express parcel carriers, and hyperlocal delivery platforms, bad-debt leakage rarely looks like a single defaulted corporate invoice. Instead, it manifests across <strong>500 to 5,000+ dormant D2C merchant wallets</strong> sitting between <strong>-₹15,000 and -₹5,00,000</strong>. To win seller acquisition, aggregators offer <strong>T+1 or T+2 Early COD remittance</strong>. The merchant receives Cash-on-Delivery proceeds immediately upon delivery, but two structural billing events hit the wallet 10 to 25 days later:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                    1. Delayed RTO Surges
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    High-RTO categories (apparel, beauty, gadgets) experience 25%–40% return rates. Forward plus reverse logistics charges hit the wallet after COD cash is already withdrawn.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                    2. Volumetric Weight Audits
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sellers declare 500g dead weight on bulky boxes. Automated hub laser dimensioners (L&times;B&times;H / 5000) apply 2 kg–4 kg volumetric surcharges, pushing wallets deeply negative.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                    3. Platform Churn &amp; Abandonment
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the wallet turns red, the D2C seller ignores in-app recharge banners, abandons the dashboard, and shifts future AWB volume to a competing courier aggregator.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Automated email dunning and WhatsApp bot reminders recover barely 6%–8% of abandoned balances because merchants assume aggregators will not litigate sub-₹2 Lakh clickwrap balances. Replacing passive reminders with <strong>fact-verified statutory legal notices</strong>—backed by{" "}
                <Link
                  href="/recovery/unpaid-invoices"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  commercial invoice recovery workflows
                </Link>{" "}
                and our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME 3x RBI Bank Rate interest calculator
                </Link>{" "}
                (for registered MSME logistics providers)—immediately shifts CFO recovery economics.
              </p>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Negative Wallet Recovery Decision Tree (₹15K to ₹5L+)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Do not treat a -₹22,000 D2C wallet deficit and a -₹8,50,000 postpaid enterprise courier default with the same litigation spend. Route your negative wallet portfolio through this four-track statutory decision tree:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 820 350"
                  width="820"
                  height="350"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Decision tree routing courier negative seller wallets by ticket size and fraud indicators"
                >
                  <rect x="0" y="0" width="820" height="350" rx="12" fill="#0F172A" />
                  {/* Root Node */}
                  <rect x="260" y="18" width="300" height="52" rx="10" fill="#DC2626" />
                  <text x="410" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                    Negative Seller Wallet Detected
                  </text>
                  <text x="410" y="58" textAnchor="middle" fill="#FEE2E2" fontSize="11">
                    Freeze Linked COD + Export BSA s.63 Ledger
                  </text>

                  {/* Connector Lines */}
                  <line x1="410" y1="70" x2="410" y2="100" stroke="#64748B" strokeWidth="2" />
                  <line x1="110" y1="100" x2="710" y2="100" stroke="#64748B" strokeWidth="2" />
                  <line x1="110" y1="100" x2="110" y2="130" stroke="#64748B" strokeWidth="2" />
                  <line x1="310" y1="100" x2="310" y2="130" stroke="#64748B" strokeWidth="2" />
                  <line x1="510" y1="100" x2="510" y2="130" stroke="#64748B" strokeWidth="2" />
                  <line x1="710" y1="100" x2="710" y2="130" stroke="#64748B" strokeWidth="2" />

                  {/* Track 1 */}
                  <rect x="20" y="130" width="180" height="90" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="110" y="155" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">
                    Tier 1: -₹15K to -₹1L
                  </text>
                  <text x="110" y="175" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    RTO / Weight Audit
                  </text>
                  <text x="110" y="192" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    CSV Batch Legal Notice
                  </text>
                  <text x="110" y="207" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    (Email + WhatsApp + RPAD)
                  </text>

                  {/* Track 2 */}
                  <rect x="220" y="130" width="180" height="90" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="310" y="155" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">
                    Tier 2: -₹1L to -₹5L
                  </text>
                  <text x="310" y="175" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    High-Value D2C Churn
                  </text>
                  <text x="310" y="192" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    15-Day Notice → ODR /
                  </text>
                  <text x="310" y="207" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Order XXXVII Summary Suit
                  </text>

                  {/* Track 3 */}
                  <rect x="420" y="130" width="180" height="90" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="510" y="155" textAnchor="middle" fill="#60A5FA" fontSize="12" fontWeight="bold">
                    Tier 3: Postpaid &gt;₹3L
                  </text>
                  <text x="510" y="175" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Enterprise / Hyperlocal SLA
                  </text>
                  <text x="510" y="192" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Commercial Court s.12A /
                  </text>
                  <text x="510" y="207" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Institutional Arbitration
                  </text>

                  {/* Track 4 */}
                  <rect x="620" y="130" width="180" height="90" rx="10" fill="#1E293B" stroke="#DC2626" />
                  <text x="710" y="155" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                    Fake COD / Empty Box
                  </text>
                  <text x="710" y="175" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Collusive Fraud Ring
                  </text>
                  <text x="710" y="192" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    7-Day Notice + BNS s.316/318
                  </text>
                  <text x="710" y="207" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    EOW / Cyber Complaint
                  </text>

                  {/* Bottom Outcome Bar */}
                  <line x1="110" y1="220" x2="110" y2="255" stroke="#64748B" strokeWidth="2" />
                  <line x1="310" y1="220" x2="310" y2="255" stroke="#64748B" strokeWidth="2" />
                  <line x1="510" y1="220" x2="510" y2="255" stroke="#64748B" strokeWidth="2" />
                  <line x1="710" y1="220" x2="710" y2="255" stroke="#64748B" strokeWidth="2" />
                  <rect x="20" y="255" width="780" height="72" rx="10" fill="#064E3B" stroke="#059669" />
                  <text x="410" y="284" textAnchor="middle" fill="#ECFDF5" fontSize="13" fontWeight="bold">
                    Resolution Funnel: Instant UPI/NEFT Wallet Top-Up • Installment Consent • Ex-Parte Arbitral Award / Decree
                  </text>
                  <text x="410" y="306" textAnchor="middle" fill="#A7F3D0" fontSize="11">
                    Every uncured notice builds an admissible statutory paper trail without premature court-fee burn
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-extrabold text-emerald-400">Tier 1: -₹15K to -₹1L</p>
                  <p className="text-xs text-slate-300 mt-1">
                    CSV Batch Legal Notice (Email + WhatsApp + Speed Post RPAD) with direct wallet top-up link.
                  </p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-extrabold text-amber-400">Tier 2: -₹1L to -₹5L</p>
                  <p className="text-xs text-slate-300 mt-1">
                    15-Day Demand Notice followed by Institutional ODR or Order XXXVII CPC Summary Suit.
                  </p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-extrabold text-blue-400">Tier 3: Postpaid Enterprise (&gt;₹3L)</p>
                  <p className="text-xs text-slate-300 mt-1">
                    GST ITC Admission + Commercial Courts Act s.12A Pre-Institution Mediation or Sole Arbitration.
                  </p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-red-800">
                  <p className="text-xs font-extrabold text-red-400">Tier 4: Fake COD / Collusive Return Fraud</p>
                  <p className="text-xs text-slate-300 mt-1">
                    7-Day Civil-cum-Criminal Notice + BNS ss.316 &amp; 318 EOW/Cyber Complaint.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Dark-Header Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Enforcement Matrix: Clickwrap, Weight &amp; Fraud
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute &amp; Section</th>
                      <th className="p-3.5 font-bold">Aggregator Recovery Use Case</th>
                      <th className="p-3.5 font-bold">Mandatory Evidence</th>
                      <th className="p-3.5 font-bold">Strategic Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">IT Act, 2000 s.10A</td>
                      <td className="p-3.5 text-slate-700">
                        Enforces clickwrap Merchant Shipping Terms, COD clawback &amp; volumetric rate cards.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        OTP/checkbox acceptance timestamp, IP address &amp; T&amp;C version hash.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Eliminates &ldquo;no wet-ink contract&rdquo; defence.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Contract Act ss.73 &amp; 74</td>
                      <td className="p-3.5 text-slate-700">
                        Recovers forward/RTO freight, hyperlocal cancellation fees &amp; minimum-commitment shortfalls.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        AWB manifest, delivery/RTO status scans &amp; rate-card tariff schedule.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Validates contractual set-off &amp; interest.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">BSA, 2023 s.63</td>
                      <td className="p-3.5 text-slate-700">
                        Makes digital wallet ledgers, sorter dimensioner photos &amp; WhatsApp notices admissible.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Signed Section 63 electronic record certificate + SHA-256 hash log.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Court-ready digital proof without paper files.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">CPC Order XXXVII</td>
                      <td className="p-3.5 text-slate-700">
                        Fast-track summary decree for liquidated wallet arrears &amp; postpaid GST invoices.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Written T&amp;Cs, confirmed ledger statement &amp; GSTR-1/2B ITC acceptance.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Seller cannot defend without court leave.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Arbitration Act s.7(4)(b)</td>
                      <td className="p-3.5 text-slate-700">
                        Routes mid-ticket defaults into online ODR / neutral sole-arbitrator awards.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Electronic arbitration clause + Section 21 notice delivery proof.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        60–90 day remote awards via neutral roster.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">BNS, 2023 ss.316 &amp; 318</td>
                      <td className="p-3.5 text-slate-700">
                        Prosecutes fake COD rings, empty-box parcels &amp; deliberate early-COD siphoning.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Hub weight-mismatch scans, consignee clustering &amp; bank UTR trail.
                      </td>
                      <td className="p-3.5 text-red-700 font-semibold">
                        Creates immediate criminal deterrence.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Courier Aggregator Default Scenarios &amp; Counter-Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select an operational failure mode below to inspect the exact statutory leverage and 3-step recovery workflow for your collections and legal team:
              </p>

              <CourierWalletScenarioTabs />
            </section>

            {/* Section 5: 1,000-Notice Monthly CSV Batch SOP */}
            <section
              id="heading-bulk-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  1,000-Notice Monthly CSV Batch SOP: Email, WhatsApp &amp; RPAD
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Manual notice drafting breaks down when an aggregator carries 800 to 3,000 negative seller wallets. Our{" "}
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Bulk Institutional Recovery Desk
                </Link>{" "}
                executes a four-stage monthly CSV pipeline:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                    Stage A: Defaulter CSV &amp; KYC Scrubbing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ingest Seller Entity Name, Proprietor/Director Name, GSTIN/PAN, Registered Address, Email, WhatsApp Mobile, Negative Balance, and AWB/Weight Dispute Summary. Cross-check active GST status to identify operating businesses.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                    Stage B: Fact-Verified Notice Generation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Generate bespoke statutory notices citing IT Act s.10A clickwrap acceptance, exact AWB/RTO/volumetric ledger arrears, a 15-day cure window, and embedded UPI/NEFT wallet-recharge links.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                    Stage C: 3-Channel Synchronized Service
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dispatch simultaneously via verified Email, WhatsApp Business API (capturing delivery/read timestamps), and India Post Speed Post RPAD—satisfying Supreme Court electronic service standards.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                    Stage D: Day-16 Selective Escalation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Accounts that remain unpaid past Day 15 are segmented: &gt;₹1L accounts move to institutional ODR or{" "}
                    <Link
                      href="/law/order-37-summary-suit-money-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Order XXXVII CPC summary suits
                    </Link>
                    , while fake-COD clusters move to BNS s.316/318 action.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: 500 Negative Seller Wallets (₹3.4 Cr)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a mid-sized e-commerce shipping aggregator holding <strong>500 dormant D2C seller accounts</strong> with an average negative wallet balance of <strong>-₹68,000</strong> (total stranded receivables: <strong>₹3,40,00,000</strong>) triggered by early COD payouts followed by RTO surges and volumetric weight audits:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                    Baseline: In-App Banners &amp; Internal Telecalling
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
                    <li>• Total Negative Wallet Pool: <strong>₹3,40,00,000</strong> (500 sellers)</li>
                    <li>• Voluntary Top-Up Rate (6%): <strong>₹20,40,000</strong> recovered</li>
                    <li>• Balance Written Off as Bad Debt: <strong>₹3,19,60,000</strong></li>
                    <li>• Legal Deterrence Created: <strong>Zero</strong> (sellers open rival accounts)</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    Structured Batch Legal Notice + Selective ODR Escalation
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                    <li>• Batch Dispatch: <strong>500 Legal Notices</strong> (Email + WhatsApp + RPAD)</li>
                    <li>• Illustrative Pre-Suit Cure Scenario (28%–35%): <strong>₹95.2L–₹1.19 Cr</strong></li>
                    <li>• Top 80 Accounts (&gt;₹1.5L) Escalated to ODR / Order 37: <strong>+₹42L–₹55L</strong></li>
                    <li>• Preserved Audit Trail: <strong>500 BSA s.63 Dossiers</strong> for tax write-off or suit</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Digital Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 s.63 Digital Evidence &amp; Audit-Trail Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before launching a bulk notice batch or filing an Order XXXVII summary suit, verify that your operations and engineering teams export these 8 electronic records for each defaulting seller:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Clickwrap T&C Acceptance Log (Timestamp, IP, OTP & Version Hash under IT Act s.10A)",
                  "Merchant KYC Pack (GSTIN Certificate, PAN, Aadhaar/CIN & Penny-Drop Bank Proof)",
                  "AWB Manifest & Carrier Scan History (Pickup, In-Transit, Delivery & RTO Reason Codes)",
                  "Automated Hub Dimensioner Photos (Timestamped L×B×H & Dead-Weight Scale Captures)",
                  "COD Remittance UTR Ledger (Bank-verified proof of early COD funds transferred to seller)",
                  "Itemized Negative Wallet Statement (Running debit/credit ledger showing exact net deficit)",
                  "Closed Weight-Dispute Ticket Logs (Proof of 7-day SLA expiry without seller counter-proof)",
                  "BSA 2023 Section 63 Electronic Record Certificate signed by authorized IT/Finance officer",
                ].map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Start Single Test Recovery or Upload Bulk Seller CSV
                </h2>
              </div>
              <CourierWalletCTA />
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Courier Aggregator Negative Wallet &amp; RTO Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Verified Statutes & Sibling Logistics Guides */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Verified Statutes, Sibling Logistics Guides &amp; Portals
                </h2>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Primary Indian Statutory Sources
                </h3>
                <ul className="space-y-2">
                  {PRIMARY_SOURCES.map((src) => (
                    <li key={src.url} className="text-xs sm:text-sm">
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[#DC2626] hover:underline font-medium"
                      >
                        {src.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-200 pt-5 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Related IND-09 Logistics, 3PL &amp; Template Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#DC2626] transition-colors"
                  >
                    Transporter&apos;s Right of Lien Under Carriage by Road Act →
                  </Link>
                  <Link
                    href="/truck-detention-halting-charges-container-demurrage-recovery"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#DC2626] transition-colors"
                  >
                    Truck Detention, Halting &amp; Container Demurrage Recovery →
                  </Link>
                  <Link
                    href="/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#DC2626] transition-colors"
                  >
                    CHA &amp; Freight Forwarder Customs Duty Reimbursement →
                  </Link>
                  <Link
                    href="/templates/transporter-freight-detention-carrier-lien-legal-notice"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#DC2626] transition-colors"
                  >
                    Logistics &amp; Freight Legal Notice Template Pack →
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
