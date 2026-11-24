import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import OtaHotelTableOfContents from "./OtaHotelTableOfContents";
import OtaScenarioTabs from "./OtaScenarioTabs";
import OtaRecoveryCTA from "./OtaRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/ota-b2b-bedbank-withheld-hotel-payout-arbitrary-chargeback-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "OTA or B2B Bed-Bank Withholding Hotel Payouts? Legal Guide";
const PAGE_DESCRIPTION =
  "Hotels lose 12–20% revenue to unilateral OTA extranet holds, declined VCC cards & defaulting B2B bed-banks. Enforce MSMED Act s.15–18 & recover dues fast.";
const H1_TEXT =
  "Hoteliers vs OTAs & B2B Wholesalers: Recovering Frozen Extranet Settlements, Failed VCC Cards & Arbitrary 'Guest Relocation' Penalties";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    question:
      "Can an Udyam-registered independent hotel or resort file an MSME Samadhaan claim against an OTA or B2B bed-bank?",
    answer:
      "Yes. Hotels, resorts, and homestay operators registered under Udyam Registration (NIC 55101 / 55102) qualify as Service MSMEs under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006. When an Indian OTA, B2B travel wholesaler, or Destination Management Company (DMC) withholds undisputed room-night payouts beyond 45 days from checkout/invoice acceptance, the hotel can claim principal plus 3x RBI Bank Rate compound interest under Section 16 before the Micro and Small Enterprises Facilitation Council (MSEFC).",
  },
  {
    question:
      "What should a hotel do when an OTA Virtual Credit Card (VCC) declines or expires at guest checkout?",
    answer:
      "Immediately capture the POS terminal decline slip showing the exact authorization error code, attach the signed Guest Registration Card (GRC) and GST tax invoice, and log a partner-extranet dispute ticket within 24 hours. Under Section 70 of the Indian Contract Act, 1872 and Order XXXVII CPC, a confirmed prepaid booking voucher creates an enforceable payment obligation on the issuing OTA or bed-bank regardless of single-use VCC expiry.",
  },
  {
    question:
      "Are OTAs legally allowed to deduct 'Guest Relocation' or 'Walk-Out' penalties unilaterally from hotel payouts?",
    answer:
      "No. Under Section 74 of the Indian Contract Act, 1872, a contracting party cannot enforce an arbitrary penalty or liquidated deduction without proving actual breach and quantifiable loss. If the overbooking resulted from the OTA's own channel-manager sync delay or the guest arrived outside policy cut-off hours, unilateral debit notes are legally challengeable through an Extranet Reconciliation Demand Notice.",
  },
  {
    question:
      "Does this recovery process apply to guest refunds against OYO or MakeMyTrip?",
    answer:
      "No. Consumer guest-refund complaints are governed by the Consumer Protection Act, 2019. This playbook is strictly for B2B hospitality creditors—independent 20–80 key hoteliers, boutique resorts, and villa portfolio operators—recovering frozen partner-extranet settlements, failed VCCs, and unpaid B2B bed-bank ledgers.",
  },
  {
    question:
      "How does Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63) protect electronic PMS and extranet evidence?",
    answer:
      "Because OTA extranet dashboards, Channel Manager XML logs, and POS VCC decline slips are electronic records, Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the Evidence Act) requires a signed electronic record certificate from your Hotel Revenue Manager or IT Controller to make screenshots, CSV exports, and email threads admissible in Commercial Courts and MSEFC proceedings.",
  },
  {
    question:
      "Can a hotel invoke Section 138 of the Negotiable Instruments Act against a defaulting B2B tour wholesaler or DMC?",
    answer:
      "Yes. If a B2B tour operator, wedding consolidator, or bed-bank issued a post-dated cheque (PDC) or security cheque against a 30-day credit ledger and it bounces for insufficient funds or stop-payment, you must serve a statutory Section 138 demand notice within 30 days of receiving the bank return memo, giving the defaulter 15 days to pay before criminal prosecution.",
  },
];

const STATUTORY_MATRIX = [
  {
    statute: "MSMED Act, 2006 (Sections 15–18)",
    trigger: "Indian OTA, DMC, or B2B wholesaler holds verified stay payouts beyond 45 days.",
    remedy: "MSEFC conciliation & arbitration; mandatory 3x RBI Bank Rate monthly compound interest.",
    limitation: "Requires active Udyam Registration prior to the date of supply/booking.",
  },
  {
    statute: "Indian Contract Act, 1872 (Sections 70, 73 & 74)",
    trigger: "Unilateral 'Guest Relocation' debit notes or post-stay rate-parity clawbacks.",
    remedy: "Disallows punitive deductions unless OTA proves actual third-party relocation loss.",
    limitation: "3 years from the date of wrongful deduction or breach.",
  },
  {
    statute: "CPC, 1908 (Order XXXVII Summary Suit)",
    trigger: "Declined/expired VCCs or signed B2B rate-contract ledgers with undisputed folios.",
    remedy: "Fast-track liquidated money decree; defendant must seek court leave to defend.",
    limitation: "3 years from invoice/checkout date; Commercial Court if claim >= ₹3 Lakh.",
  },
  {
    statute: "Negotiable Instruments Act, 1881 (Section 138)",
    trigger: "Dishonoured security or settlement cheques from B2B tour wholesalers / DMCs.",
    remedy: "Criminal prosecution + up to 2x cheque amount fine + 20% Section 143A interim relief.",
    limitation: "Strict 30-day statutory notice from bank return memo + 15-day cure period.",
  },
  {
    statute: "Competition Act, 2002 (Section 4 & CCI/FHRAI Orders)",
    trigger: "Coercive delisting threats, unilateral contract amendments, or forced deep discounting.",
    remedy: "Leverages CCI anti-competitive parity principles in regulatory & arbitral submissions.",
    limitation: "Fact-specific abuse-of-dominance threshold for major platforms.",
  },
  {
    statute: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    trigger: "Proving extranet wallet freezes, XML inventory syncs, and POS VCC decline logs.",
    remedy: "Renders digital PMS folios, emails, and portal CSVs admissible as primary electronic proof.",
    limitation: "Certificate must accompany electronic printouts at the time of filing.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "MSME Samadhaan — Delayed Payment Monitoring & MSEFC Filing Portal",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 70, 73 & 74) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Competition Commission of India (CCI) — Hospitality & OTA Market Orders",
    url: "https://www.cci.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Independent Hotels Recover Frozen OTA Extranet Payouts & B2B Bed-Bank Dues",
  description:
    "Four-step legal and operational workflow for hotels and resorts to challenge arbitrary OTA deductions, declined VCCs, and defaulting B2B wholesalers.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Electronic Extranet & PMS Evidence Under BSA Section 63",
      text: "Export the extranet payout ledger, POS VCC decline receipts, signed Guest Registration Cards (GRCs), and Channel Manager XML sync logs with a Section 63 BSA 2023 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve an Extranet Reconciliation & Statutory Demand Notice",
      text: "Issue a fact-verified 15-day demand notice to the OTA Nodal Officer or B2B wholesaler CFO disputing unproved Section 74 relocation penalties and claiming principal dues.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Invoke MSMED Act s.15–18 (Udyam Hotels) or Section 138 NI Act",
      text: "File an MSME Samadhaan claim for 3x RBI Bank Rate compound interest if Udyam-registered, or serve a 30-day Section 138 notice if a B2B DMC cheque bounced.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Escalate to Institutional Arbitration or Order XXXVII Commercial Suit",
      text: "For high-value frozen ledgers or foreign bed-banks, invoke Section 21 neutral arbitration or file an Order XXXVII Summary Suit in the Commercial Court.",
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
      name: "Hotels, Banquets & Travel Recovery",
      item: `${SITE_URL}/industries/hotels-banquets-corporate-travel-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "OTA & B2B Bed-Bank Payout Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function OtaBedbankHotelPayoutRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([ARTICLE_SCHEMA, HOWTO_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-16 Hospitality Creditor Playbook</span>
            <span>&bull;</span>
            <span>MSMED Act s.15–18 &amp; Order XXXVII CPC</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* 40-60 word Executive Statutory Summary Box with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Independent hotels, resorts, and villa portfolios losing 12–20% of revenue to frozen OTA extranet settlements, expired Virtual Credit Cards (VCCs), or unilateral guest-relocation debits can enforce recovery under{" "}
            <strong className="text-white">MSMED Act Sections 15–18</strong> (for Udyam-registered hotels),{" "}
            <strong className="text-white">Contract Act Section 74</strong>, and{" "}
            <strong className="text-white">Order XXXVII CPC</strong>. Part of our{" "}
            <Link
              href="/industries/hotels-banquets-corporate-travel-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Hotels, Banquets &amp; Corporate Travel Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">12–20%</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Hotel Revenue Eroded by Unilateral OTA Adjustments
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">45 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Max Statutory Credit Period Under MSMED Act s.15
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Monthly Compound Interest Under MSMED Act s.16
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">BSA s.63</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Admissibility Standard for Extranet &amp; VCC Logs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Hotels, Banquets & Travel Recovery",
                href: "/industries/hotels-banquets-corporate-travel-recovery",
              },
              {
                label: "OTA & B2B Bed-Bank Payout Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <OtaHotelTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why OTAs &amp; B2B Bed-Banks Freeze Hotel Extranet Settlements
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  For independent 20-to-80-key hoteliers, boutique resort chains, and serviced villa operators across India, Online Travel Agencies (OTAs) and B2B bed-banks drive 35% to 65% of room-night occupancy. Yet once guests check out, hospitality finance teams frequently discover that 12% to 20% of earned room tariff has been unilaterally frozen, offset, or clawed back inside the partner extranet wallet.
                </p>
                <p>
                  Unlike consumer-facing refund disputes (such as a guest seeking a refund on{" "}
                  <span className="font-semibold text-slate-900">consumer travel portals</span>), B2B hotel-partner defaults are commercial debt and contract enforcement battles. When an OTA or global bed-bank withholds settled room revenue, issues a single-use Virtual Credit Card (VCC) that declines after guest checkout, or deducts an unverified &ldquo;Guest Relocation Penalty,&rdquo; the hotelier is a{" "}
                  <strong className="text-slate-900">commercial creditor</strong> enforcing payment for hospitality services already consumed.
                </p>
                <p>
                  Most properties hesitate to challenge extranet deductions because they fear algorithmic ranking suppression or sudden delisting. However, under Indian statutory law—specifically the{" "}
                  <strong className="text-slate-900">MSMED Act, 2006</strong>, the{" "}
                  <strong className="text-slate-900">Indian Contract Act, 1872</strong>, and{" "}
                  <strong className="text-slate-900">Competition Commission of India (CCI)</strong> parity principles—OTAs and B2B wholesalers cannot act as judge and executioner over your earned ledger. For broader corporate credit defaults, see our{" "}
                  <Link
                    href="/recovery/business-dues"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Business Dues &amp; Commercial Ledger Recovery Guide
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  OTA &amp; Bed-Bank Payout Recovery Decision Tree
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Before serving a legal demand, classify the exact failure mode in your Property Management System (PMS) and extranet statement. Choosing the right statutory track cuts recovery timelines from 18 months of civil litigation down to 30–90 days.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4 overflow-x-auto">
                <svg
                  width="820"
                  height="320"
                  viewBox="0 0 820 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Decision tree for hoteliers recovering frozen OTA extranet payouts, failed VCCs, and B2B bed-bank defaults"
                  className="w-full h-auto"
                >
                  {/* Root Node */}
                  <rect x="260" y="14" width="300" height="48" rx="10" fill="#DC2626" />
                  <text x="410" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                    Unpaid Hotel Stay / Extranet Hold Identified
                  </text>
                  <text x="410" y="52" textAnchor="middle" fill="#FEE2E2" fontSize="11">
                    Lock PMS Folios, GRCs &amp; BSA s.63 Logs First
                  </text>

                  {/* Connector Lines */}
                  <path d="M410 62 V92 M105 92 H715 M105 92 V120 M308 92 V120 M512 92 V120 M715 92 V120" stroke="#64748B" strokeWidth="2" />

                  {/* Track A */}
                  <rect x="15" y="120" width="180" height="84" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="105" y="142" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    TRACK A: EXTRANET HOLD
                  </text>
                  <text x="105" y="160" textAnchor="middle" fill="#F8FAFC" fontSize="11">
                    Udyam Hotel vs Indian OTA
                  </text>
                  <text x="105" y="176" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    (&gt;45 Days Overdue)
                  </text>
                  <text x="105" y="194" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">
                    MSMED s.15–18 + MSEFC
                  </text>

                  {/* Track B */}
                  <rect x="218" y="120" width="180" height="84" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="308" y="142" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    TRACK B: FAILED VCC
                  </text>
                  <text x="308" y="160" textAnchor="middle" fill="#F8FAFC" fontSize="11">
                    Expired / Declined Virtual Card
                  </text>
                  <text x="308" y="176" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    (Prepaid Voucher Exists)
                  </text>
                  <text x="308" y="194" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">
                    Order XXXVII Summary Suit
                  </text>

                  {/* Track C */}
                  <rect x="422" y="120" width="180" height="84" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="512" y="142" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    TRACK C: WALK-OUT DEBIT
                  </text>
                  <text x="512" y="160" textAnchor="middle" fill="#F8FAFC" fontSize="11">
                    Arbitrary Relocation Penalty
                  </text>
                  <text x="512" y="176" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    (No Proof of Actual Loss)
                  </text>
                  <text x="512" y="194" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">
                    Contract Act s.74 + s.21 Arb
                  </text>

                  {/* Track D */}
                  <rect x="625" y="120" width="180" height="84" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="715" y="142" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    TRACK D: DMC / BED-BANK
                  </text>
                  <text x="715" y="160" textAnchor="middle" fill="#F8FAFC" fontSize="11">
                    Bounced Security Cheque
                  </text>
                  <text x="715" y="176" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    (30-Day Memo Window)
                  </text>
                  <text x="715" y="194" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">
                    NI Act s.138 + 43B(h) Notice
                  </text>

                  {/* Bottom Convergence */}
                  <path d="M105 204 V240 M308 204 V240 M512 204 V240 M715 204 V240 M105 240 H715 M410 240 V260" stroke="#64748B" strokeWidth="2" />
                  <rect x="190" y="260" width="440" height="44" rx="10" fill="#065F46" stroke="#10B981" strokeWidth="1.5" />
                  <text x="410" y="280" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Advocate Tri-Channel Demand Notice (Email + WhatsApp + Speed Post RPAD)
                  </text>
                  <text x="410" y="295" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                    15-Day Statutory Cure Window Before MSEFC / Commercial Court Filing
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    track: "Track A: Extranet Hold",
                    rule: "Udyam Hotel (>45 Days) -> MSMED Act s.15–18 & MSEFC Samadhaan",
                  },
                  {
                    track: "Track B: Failed VCC",
                    rule: "Declined/Expired Virtual Card -> Order XXXVII CPC Summary Suit",
                  },
                  {
                    track: "Track C: Relocation Penalty",
                    rule: "Unproved Walk-Out Debit -> Contract Act s.74 + s.21 Arbitration",
                  },
                  {
                    track: "Track D: DMC / Bed-Bank",
                    rule: "Bounced Security PDC -> NI Act s.138 (30-Day Notice) + s.43B(h)",
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-xs font-bold uppercase text-red-400 mb-1">{card.track}</p>
                    <p className="text-xs text-slate-200">{card.rule}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory &amp; Regulatory Matrix for Hotel Extranet Disputes
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Standard OTA partner agreements attempt to grant platforms broad discretion to &ldquo;withhold, offset, or adjust&rdquo; settlements. Under Indian statutory law, private adhesion clauses cannot override mandatory protections available to Udyam-registered hotels and commercial creditors.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Statute / Forum</th>
                      <th className="p-3.5 font-bold">Hospitality Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Remedy</th>
                      <th className="p-3.5 font-bold">Key Statutory Guardrail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900 align-top">{row.statute}</td>
                        <td className="p-3.5 text-slate-700 align-top">{row.trigger}</td>
                        <td className="p-3.5 text-emerald-800 font-medium align-top">{row.remedy}</td>
                        <td className="p-3.5 text-amber-800 align-top">{row.limitation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Commercial Failure Modes &amp; Hotelier Action Playbooks
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact dispute scenario below to review the governing statutory hook, mandatory evidence pack, and step-by-step escalation timeline.
              </p>
              <OtaScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Math */}
            <section
              id="heading-worked-math"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Recovery Math: ₹14.50 Lakh Frozen OTA &amp; Bed-Bank Ledger
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a 45-key Udyam-registered boutique resort in Jaipur facing a combined ₹14,50,000 payout hold across 120 days: ₹8,20,000 in frozen OTA extranet settlements, ₹3,50,000 in expired post-checkout VCCs, and ₹2,80,000 in arbitrary &ldquo;guest relocation&rdquo; deductions lacking third-party invoice proof.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
                    Statutory Claim Breakdown (MSMED Act s.16)
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Frozen Extranet Stay Settlements</span>
                      <span className="font-bold">₹8,20,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Declined / Expired VCC Folios</span>
                      <span className="font-bold">₹3,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Disallowed s.74 Relocation Debits</span>
                      <span className="font-bold">₹2,80,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-2 text-emerald-400 font-bold">
                      <span>Total Principal Claimed</span>
                      <span>₹14,50,000</span>
                    </div>
                    <div className="flex justify-between text-amber-300 font-bold pt-1">
                      <span>Illustrative MSMED s.16 Interest (19.50% p.a. / 120d)</span>
                      <span>+ ₹94,884*</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                      Total Enforceable Demand Value
                    </p>
                    <p className="text-2xl sm:text-3xl font-black text-emerald-900 mb-2">
                      ₹15,44,884+
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed mb-4">
                      *Under Section 16 of the MSMED Act, 2006, compound interest is calculated with monthly rests at three times the RBI Bank Rate (illustrative 6.50% &times; 3 = 19.50% p.a.). Moreover, under Section 19, any buyer challenging an MSEFC award must deposit{" "}
                      <strong>75% of the awarded amount</strong> upfront.
                    </p>
                  </div>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold transition-colors text-center"
                  >
                    Calculate Exact MSMED s.16 Interest &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Extranet Reconciliation &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                OTAs and bed-banks routinely close support tickets or restrict extranet ledger exports once a dispute escalates. Assemble this seven-point evidence pack before serving your statutory notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
                {[
                  "Signed Guest Registration Cards (GRCs) & ID scans proving physical stay occupancy",
                  "PMS Checkout Tax Invoices & GSTR-1 / GSTR-2B reconciliation statements",
                  "Extranet Payout Settlement CSVs & timestamped wallet-hold screenshots",
                  "POS Terminal VCC Decline Slips showing authorization failure / expiry codes",
                  "Channel Manager XML/API inventory push logs refuting overbooking allegations",
                  "Udyam Registration Certificate (verifying NIC 55101/55102 Service MSME status)",
                  "Signed BSA 2023 Section 63 Electronic Record Certificate by Revenue/IT Head",
                  "Dishonoured B2B DMC cheque & Bank Return Memo (if NI Act s.138 applies)",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                <strong className="font-bold">Pro Tip for Multi-Property Groups:</strong> If an OTA or bed-bank has sent you an arbitrary debit note, respond formally using a structured commercial rebuttal—see our{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="font-bold underline text-amber-950 hover:text-[#DC2626]"
                >
                  Legal Notice Reply &amp; Rebuttal Format
                </Link>{" "}
                or dispatch batch notices via our{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="font-bold underline text-amber-950 hover:text-[#DC2626]"
                >
                  Bulk Tri-Channel Notice Dispatch Engine
                </Link>
                .
              </div>
            </section>

            {/* Section 7: Hospitality Cluster Network */}
            <section
              id="heading-cluster-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Hospitality, Banquet &amp; Corporate Travel Recovery Network
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Explore connected statutory playbooks and recovery tools built specifically for Indian hotels, banquet venues, and travel management companies:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/industries/hotels-banquets-corporate-travel-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    IND-16 Pillar Hub
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Hotels, Banquets &amp; Corporate Travel (TMC) Recovery Hub
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Master playbook covering Corporate BTC city-ledgers, IATA BSP tickets, and destination wedding balances.
                  </p>
                </Link>

                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    NI Act s.138 Timeline
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Section 138 Cheque Bounce Notice Timeline (30 + 15 Day Rule)
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Enforce dishonoured DMC security cheques and post-event banquet settlement PDCs.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive T1 Calculator
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Compute exact Section 16 compound interest on overdue OTA and B2B wholesaler invoices.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Batch Dispatch Engine
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Bulk Tri-Channel Legal Notice Dispatch (Email + WhatsApp + RPAD)
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Serve dozens of defaulting tour operators, BTC corporates, and bed-banks in one upload.
                  </p>
                </Link>
              </div>
            </section>

            {/* Dual-Track CTA */}
            <OtaRecoveryCTA />

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: OTA &amp; Bed-Bank Payout Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Authorities, Bare Acts &amp; Hospitality Regulators
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
