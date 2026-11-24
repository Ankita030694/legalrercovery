import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BrandLicensingTableOfContents from "./BrandLicensingTableOfContents";
import BrandLicensingScenarioTabs from "./BrandLicensingScenarioTabs";
import BrandLicensingCTA from "./BrandLicensingCTA";

export const revalidate = 86400;

const PAGE_URL = "/brand-licensing-merchandising-minimum-royalty-guarantee-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (115 chars) — kept verbatim in <h1> and ARTICLE_SCHEMA.headline
const HERO_HEADLINE =
  "Enforcing Minimum Guaranteed Royalties (MGR) & Stopping Post-Expiry Inventory Dumping by Defaulting Brand Licensees";

const META_TITLE = "Brand Licensing: Minimum Royalty Guarantee & Sell-Off Law"; // 57 chars
const META_DESCRIPTION =
  "Brand licensee missed sales targets and refuses Minimum Guaranteed Royalty (MGR), or dumps stock past the 60-day sell-off? Enforce Trade Marks Act s.29."; // 152 chars

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
        alt: formatAltText(META_TITLE),
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
      "The Trade Marks Act, 1999 (Section 29 Infringement, Section 30(3) Exhaustion Limits & Section 135 Reliefs) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Section 2(1)(c)(xvii) IP Disputes & Section 12A Urgent Relief Exception) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 73 & 74 Unconditional MGR Debt vs Liquidated Damages) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Section 9 Interim Injunction & Section 29B Fast-Track) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Section 138 Cheque Dishonour) & PSS Act, 2007 (Section 25 e-NACH) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Electronic Marketplace & ERP Audit Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const STATUTORY_PRECEDENTS = [
  {
    title:
      "Urgent IP & Post-Expiry Inventory Dumping Suits Exempt From 3-Month Pre-Institution Mediation",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "Commercial plaintiffs filing suits above ₹3 Lakh faced Order VII Rule 11 rejections when bypassing Section 12A Pre-Institution Mediation without pleading genuine urgency.",
    holding:
      "The Supreme Court held that while Section 12A mediation is mandatory for standard commercial suits, actions genuinely seeking urgent interim relief—such as immediate injunctions against post-expiry trademark infringement or grey-market stock dumping—are statutorily exempt from waiting 90 days.",
    amount: "Immediate Commercial Court Injunction Without 90-Day Mediation Delay",
    takeaway:
      "Celebrity, character, and sports brand licensors in Mumbai, Delhi, and Bengaluru can move Commercial Courts immediately for ex-parte ad-interim injunctions when an ex-licensee dumps stock past the 60-day sell-off window.",
  },
  {
    title:
      "Mandatory Injunction Where Prima Facie Trademark Infringement Is Established",
    parties: "Midas Hygiene Industries (P) Ltd. v. Sudhir Bhatia & Ors.",
    citation: "(2004) 3 SCC 90, Supreme Court of India",
    date: "Judgment Dated 22 January 2004",
    facts:
      "The defendant continued commercial exploitation of a deceptively similar mark after termination of prior commercial arrangements, arguing delay and balance of convenience.",
    holding:
      "The Supreme Court ruled that in trademark infringement cases, an injunction must normally follow once unauthorized commercial use is prima facie established, and mere delay in initiating action cannot defeat statutory IP rights.",
    amount: "Immediate Restraint on Unauthorized Branded Stock Sales",
    takeaway:
      "Once a licensee's 60-day post-termination sell-off window expires—or if royalties were unpaid—continued liquidation of branded apparel, toys, or electronics is statutory infringement under Section 29.",
  },
  {
    title:
      "Immediate Ad-Interim Protection Against Brand Equity & Channel Dilution",
    parties: "Laxmikant V. Patel v. Chetanbhai Shah & Anr.",
    citation: "(2002) 3 SCC 65, Supreme Court of India",
    date: "Judgment Dated 4 December 2001",
    facts:
      "An unauthorized operator exploited an established commercial trade name, threatening immediate dilution of goodwill and customer confusion before full trial.",
    holding:
      "The Supreme Court affirmed that courts must grant prompt ad-interim injunctions and Local Commissioner / Receiver relief where refusal would cause irreparable harm to brand goodwill that monetary damages at trial cannot adequately repair.",
    amount: "Protection of Licensing Prestige & Future Category Minimums",
    takeaway:
      "When a defaulting licensee dumps heritage fashion or sports merchandise at 70% off on discount portals, licensors can establish irreparable brand-equity injury to secure rapid takedowns and stock seizure.",
  },
];

const FAQS = [
  {
    question:
      "Can a brand licensee refuse to pay Minimum Guaranteed Royalty (MGR) because retail sales missed projections?",
    answer:
      "No. Under Indian contract law, a Minimum Guaranteed Royalty (MGR) is the unconditional fixed consideration paid for granting exclusive or semi-exclusive category, character, or celebrity trademark rights—it is not a contingent commission or a Section 74 penalty. Unless the agreement contains an explicit force majeure abatement triggered by a statutory lockdown, the licensee owes 100% of the contracted MGR regardless of actual sell-through.",
  },
  {
    question:
      "Does a terminated licensee have the right to sell leftover branded inventory after the 60-day sell-off window expires?",
    answer:
      "No. Once the contracted 60-day (or 90-day) sell-off window expires, any further sale, wholesale liquidation, or online marketplace listing of branded merchandise constitutes unauthorized use of a registered trademark under Section 29 of the Trade Marks Act, 1999. The licensee cannot claim exhaustion of rights under Section 30(3) because post-expiry sales violate the express conditions of the license.",
  },
  {
    question:
      "How can a licensor stop grey-market dumping on Amazon, Flipkart, or Myntra within days?",
    answer:
      "First, conduct a documented test purchase and capture timestamped seller-ID URLs certified under BSA 2023 Section 63. Second, serve a 48-hour Trade Marks Act s.29 cease-and-desist notice. Third, file an urgent Commercial IP Suit (exempt from Section 12A mediation under Patil Automation urgency) in Mumbai, Delhi, or Bengaluru seeking an ex-parte ad-interim injunction and Local Commissioner warehouse seizure, then serve the court order on marketplace IP grievance desks for immediate delisting.",
  },
  {
    question:
      "What if the licensee blocks our quarterly royalty statement audit or hides SKUs?",
    answer:
      "Most licensing agreements grant a 14-day audit right over ERP sales ledgers, GST GSTR-1 filings, and hologram/hang-tag consumption. If the licensee blocks inspection, serve an Event-of-Default Notice and file a Commercial Suit or Section 9 petition seeking court-ordered discovery under CPC Order XI. Unexplained gaps between issued security holograms and reported sales justify immediate MGR acceleration and audit-cost recovery.",
  },
  {
    question:
      "Can we prosecute a licensee under Section 138 NI Act or Section 25 PSS Act for bounced MGR installments?",
    answer:
      "Yes. If quarterly MGR post-dated cheques (PDCs) or e-NACH auto-debits bounce, you must serve a statutory demand notice within 30 days of receiving the bank/NPCI return memo (15-day cure window). Upon non-payment, file a criminal complaint under Section 138 of the NI Act or Section 25 of the PSS Act—alongside seeking 20% interim compensation under Section 143A—while pursuing civil recovery for the remaining contract balance.",
  },
  {
    question:
      "Should a licensor file in Commercial Court or invoke Arbitration for MGR and sell-off breaches?",
    answer:
      "If your primary goal is an urgent multi-party injunction against third-party grey-market wholesalers, e-commerce sellers, and warehouse stockists who are non-signatories to the arbitration clause, a Commercial IP Suit under Section 2(1)(c)(xvii) of the Commercial Courts Act is superior. For pure MGR debt and audit shortfalls strictly between licensor and licensee, Section 9 interim relief followed by fast-track Section 29B institutional arbitration delivers rapid awards.",
  },
  {
    question:
      "What evidence is mandatory before filing an MGR recovery and Section 29 infringement action?",
    answer:
      "Assemble: (1) the executed Trademark / Merchandising License Agreement showing MGR schedules and the 60-day sell-off clause, (2) signed artwork/sample approvals and hologram hang-tag dispatch logs, (3) quarterly royalty statements and unpaid MGR debit notes, (4) test-purchase invoices and marketplace listings showing post-expiry sales, and (5) a BSA 2023 Section 63 certificate authenticating all digital records.",
  },
];

export default function BrandLicensingMinimumRoyaltyRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Franchisors & Brand Licensors",
      href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
    },
    {
      label: "Brand Licensing MGR & Sell-Off Recovery",
      href: PAGE_URL,
    },
  ];

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: HERO_HEADLINE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Brand Licensors Enforce Minimum Guaranteed Royalties (MGR) & Stop Post-Expiry Stock Dumping",
    description:
      "Operational legal playbook for IP, celebrity, sports, and fashion licensors to recover unconditional MGR debt and restrain post-sell-off trademark infringement.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Down MGR Ledger, Hologram Variance & Test-Purchase Proof",
        text: "Reconcile unpaid quarterly MGR installments, freeze new artwork/hang-tag approvals, and execute a timestamped test purchase of any post-expiry stock with a BSA 2023 s.63 certificate.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve Dual MGR Debt + Trade Marks Act s.29 Cease-and-Desist Notice",
        text: "Dispatch a Fact-Verified Demand Notice via Email, WhatsApp, and Speed Post RPAD demanding unconditional MGR arrears within 15 days and halting post-sell-off sales within 48 hours.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Prosecute Bounced MGR Cheques / e-NACH & Move Urgent IP Injunction",
        text: "Initiate NI s.138 / PSS s.25 proceedings on dishonoured MGR mandates and file an urgent Commercial Court IP Suit (exempt from s.12A mediation) for Local Commissioner stock seizure.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Enforce Summary Suit / Arbitral Award & Marketplace Takedowns",
        text: "Serve court injunction orders on e-commerce marketplaces for immediate ASIN delisting and recover the liquidated MGR shortfall, 18% interest, and account of profits.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Franchisors & Brand Licensors",
        item: `${SITE_URL}/industries/franchisors-brand-licensors-oem-dealership-recovery`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Brand Licensing MGR & Sell-Off Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ================= DARK GRADIENT HERO ================= */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-24 &bull; IP &amp; Merchandising Licensors</span>
            <span className="text-red-600">&bull;</span>
            <span>Trade Marks Act s.29 &amp; MGR Debt</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {HERO_HEADLINE}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Indian commercial law, a contracted Minimum Guaranteed Royalty (MGR) is an
            unconditional debt payable regardless of licensee sell-through. Furthermore, under{" "}
            <strong className="text-white">Section 29 of the Trade Marks Act, 1999</strong>, selling
            branded merchandise past the 60-day sell-off window constitutes statutory trademark
            infringement. Explore our{" "}
            <Link
              href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              Franchisors, Brand Licensors &amp; OEM Dealership Recovery Hub
            </Link>{" "}
            for full-network enforcement across Mumbai, Delhi, and Bengaluru.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">100% Debt</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MGR Payable Regardless of Sales
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-red-400">60-Day Cap</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Post-Window Sales = s.29 Infringement
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">3–7 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Urgent IP Injunction (s.12A Exempt)
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">₹12L–₹3Cr+</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Typical Licensing Portfolio Exposure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN 2-COLUMN CONTENT ================= */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <BrandLicensingTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: MGR & POST-EXPIRY DUMPING CRISIS */}
            <section
              id="heading-mgr-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why Brand Licensors Lose MGR &amp; Control of Expired Stock
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s booming brand licensing ecosystem—spanning celebrity athleisure
                  lines in Mumbai, character and cartoon toy licensees in Delhi-NCR, and heritage
                  fashion or sports-team merchandising houses in Bengaluru—licensors face a recurring
                  two-front default. First, an apparel, footwear, home-textile, or consumer-electronics
                  licensee underperforms on retail distribution and refuses to pay the contracted{" "}
                  <strong>Minimum Guaranteed Royalty (MGR)</strong>, insisting royalties should be
                  recalculated purely on actual net sales.
                </p>
                <p>
                  Second, when the licensor refuses renewal or terminates for non-payment, the
                  defaulting licensee weaponizes unsold warehouse inventory. Instead of liquidating
                  approved stock strictly within the contracted <strong>60-day sell-off window</strong>{" "}
                  and destroying or de-branding the remainder, the licensee dumps branded merchandise
                  into grey-market wholesale hubs and deep-discount e-commerce listings months after
                  termination—destroying the brand&apos;s full-price positioning for incoming
                  licensees.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950">
                  <strong className="text-amber-900 block mb-1">
                    Creditor-Side Reality Check:
                  </strong>
                  Treating an MGR shortfall or post-expiry inventory dump as an ordinary &ldquo;accounts
                  reconciliation&rdquo; lets the licensee drain your brand equity while stalling
                  payments for 18–24 months. Pairing <strong>unconditional MGR debt enforcement</strong>{" "}
                  with <strong>Trade Marks Act Section 29 infringement injunctions</strong> flips
                  leverage back to the licensor within days.
                </div>
              </div>
            </section>

            {/* SECTION 2: OPERATIONAL DECISION TREE SVG + MOBILE CARDS */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Decision Tree: MGR Debt Suit vs Section 29 Injunction
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your legal track based on whether the licensee is still within term
                (defaulting on quarterly MGR/audits) or holding over past the 60-day sell-off expiry:
              </p>

              {/* Desktop SVG Decision Flowchart */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4 overflow-x-auto">
                <svg
                  width="760"
                  height="270"
                  viewBox="0 0 760 270"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Gate Brand Licensing MGR and Section 29 Enforcement Decision Tree"
                >
                  {/* Gate 1 */}
                  <rect x="10" y="20" width="135" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="77" y="45" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">GATE 1: AUDIT</text>
                  <text x="77" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">MGR Shortfall or</text>
                  <text x="77" y="81" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">Sell-Off Breach?</text>
                  <text x="77" y="98" textAnchor="middle" fill="#94A3B8" fontSize="9">Freeze Artwork / Tags</text>

                  {/* Arrow 1->2 */}
                  <path d="M145 65 H168" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="168,60 176,65 168,70" fill="#DC2626" />

                  {/* Gate 2 */}
                  <rect x="176" y="20" width="135" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="243" y="45" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">GATE 2: PROOF</text>
                  <text x="243" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">Test Purchase +</text>
                  <text x="243" y="81" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">BSA s.63 Cert</text>
                  <text x="243" y="98" textAnchor="middle" fill="#94A3B8" fontSize="9">Hologram / GSTR-1 Gap</text>

                  {/* Arrow 2->3 */}
                  <path d="M311 65 H334" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="334,60 342,65 334,70" fill="#DC2626" />

                  {/* Gate 3 */}
                  <rect x="342" y="20" width="135" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="409" y="45" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">GATE 3: NOTICE</text>
                  <text x="409" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">15d MGR Demand /</text>
                  <text x="409" y="81" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">48h s.29 C&amp;D</text>
                  <text x="409" y="98" textAnchor="middle" fill="#94A3B8" fontSize="9">Email + WA + RPAD</text>

                  {/* Arrow 3->4 (Top Branch) */}
                  <path d="M477 65 H510 V45 H525" stroke="#34D399" strokeWidth="2" />
                  <polygon points="525,40 533,45 525,50" fill="#34D399" />

                  {/* Arrow 3->5 (Bottom Branch) */}
                  <path d="M477 65 H510 V195 H525" stroke="#F87171" strokeWidth="2" />
                  <polygon points="525,190 533,195 525,200" fill="#F87171" />

                  {/* Gate 4 (Top: Pure MGR Debt) */}
                  <rect x="533" y="15" width="215" height="100" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="640" y="38" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="700">TRACK A: MGR DEBT &amp; AUDIT</text>
                  <text x="640" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">NI s.138 / PSS s.25 +</text>
                  <text x="640" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">Order 37 / s.29B ODR Award</text>
                  <text x="640" y="96" textAnchor="middle" fill="#A7F3D0" fontSize="9.5">100% Shortfall + 18% Interest</text>

                  {/* Gate 5 (Bottom: Post-Expiry Dumping) */}
                  <rect x="533" y="150" width="215" height="105" rx="10" fill="#450A0A" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="640" y="173" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="700">TRACK B: SELL-OFF DUMPING</text>
                  <text x="640" y="193" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">Commercial IP Suit (s.12A Exempt)</text>
                  <text x="640" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">Ex-Parte s.135 Injunction</text>
                  <text x="640" y="232" textAnchor="middle" fill="#FECACA" fontSize="9.5">Stock Seizure + Portal Takedowns</text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    gate: "Gate 1: Audit & Freeze",
                    desc: "Stop new artwork/packaging approvals and hologram hang-tag releases immediately.",
                  },
                  {
                    gate: "Gate 2: BSA s.63 Proof",
                    desc: "Execute timestamped test purchase of dumped stock and certify ERP/GSTR-1 ledgers.",
                  },
                  {
                    gate: "Gate 3: Dual Notice",
                    desc: "Serve 15-day MGR Debt Demand + 48-hour Trade Marks Act s.29 Cease-and-Desist.",
                  },
                  {
                    gate: "Gate 4 / 5: Dual Escalation",
                    desc: "Track A: NI s.138 + Order 37/ODR for MGR. Track B: Urgent Commercial IP Suit for stock seizure.",
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-xs font-bold text-red-400 uppercase mb-1">{card.gate}</p>
                    <p className="text-xs text-slate-200 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 3: STATUTORY MATRIX TABLE */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory Matrix: MGR Debt &amp; Post-Expiry Infringement
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Licensing Default</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Creditor Remedy &amp; Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Unpaid MGR Shortfall (Missed Sales Targets)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.73; Commercial Courts Act s.2(1)(c)(xvii); CPC Order XXXVII
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary Suit / s.29B Fast-Track Arbitration for 100% contracted MGR + 18% p.a. interest
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Stock Dumping Past 60-Day Sell-Off Window
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Trade Marks Act 1999 s.29(1)–(4), s.30(3) &amp; s.135; Commercial Courts Act s.12A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Urgent ex-parte injunction (3–7 days), Local Commissioner seizure &amp; account of profits
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Bounced Quarterly MGR Cheques / e-NACH
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act 1881 s.138 &amp; s.143A; PSS Act 2007 s.25
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-day statutory notice → Magistrate complaint + 20% interim compensation order
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Refusal of Quarterly Royalty &amp; Hologram Audit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CPC Order XI (Commercial Discovery); BSA 2023 s.63
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Court-compelled GSTR-1 / E-Way Bill production + audit-fee reimbursement
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Unauthorized Sub-Licensing / Export Leakage
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Trade Marks Act s.48–50; Specific Relief Act s.38 &amp; s.39
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Immediate termination, customs/channel recall injunction &amp; MGR acceleration
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: JUDICIAL PRECEDENTS */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Key Judicial Precedents for IP &amp; Royalty Enforcement
                </h2>
              </div>

              <div className="space-y-4">
                {STATUTORY_PRECEDENTS.map((p, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60"
                  >
                    <div className="flex">
                      <div className="w-1.5 bg-[#DC2626] shrink-0" />
                      <div className="p-4 sm:p-5 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900">
                            {p.parties}
                          </h3>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                            {p.citation}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#DC2626] mb-2">{p.title}</p>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                          <strong>Holding:</strong> {p.holding}
                        </p>
                        <p className="text-xs sm:text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 leading-relaxed">
                          <strong>Licensor Application:</strong> {p.takeaway}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: 4 INTERACTIVE SCENARIO TABS */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4 Brand Licensing Default Scenarios &amp; Counter-Moves
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select a commercial failure mode below to review the licensee&apos;s typical pretext
                and the exact statutory counter-playbook for IP and fashion licensors:
              </p>

              <BrandLicensingScenarioTabs />
            </section>

            {/* SECTION 6: WORKED FINANCIAL & INTEREST LEDGER */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Worked Ledger: ₹64.20L Apparel MGR &amp; Sell-Off Claim
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Illustration for a Mumbai-based celebrity athleisure licensor enforcing Year-2 MGR
                shortfalls and post-expiry e-commerce dumping against a defaulting apparel licensee:
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Quantified Brand Licensor Recovery Ledger
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    Unconditional Debt + s.135 Disgorgement
                  </span>
                </div>
                <div className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                  <div className="flex justify-between p-4">
                    <span className="text-slate-700">
                      Year-2 Contracted Minimum Guaranteed Royalty (MGR @ ₹22.50L / quarter)
                    </span>
                    <span className="font-bold text-slate-900">₹90,00,000</span>
                  </div>
                  <div className="flex justify-between p-4 bg-slate-50/70">
                    <span className="text-slate-700">
                      Less: Earned Royalty Paid on Reported Wholesale Sales (Q1–Q2 Only)
                    </span>
                    <span className="font-semibold text-slate-600">− ₹41,00,000</span>
                  </div>
                  <div className="flex justify-between p-4">
                    <span className="text-slate-900 font-semibold">
                      Unpaid MGR Shortfall Principal Debt (Q3–Q4 Guarantee)
                    </span>
                    <span className="font-bold text-[#DC2626]">₹49,00,000</span>
                  </div>
                  <div className="flex justify-between p-4 bg-slate-50/70">
                    <span className="text-slate-700">
                      Contracted Late-Payment Commercial Interest (18% p.a. for 6 months)
                    </span>
                    <span className="font-bold text-slate-900">+ ₹4,41,000</span>
                  </div>
                  <div className="flex justify-between p-4">
                    <span className="text-slate-700">
                      Post-60-Day Sell-Off Infringing Units (1,800 units × ₹600 profit disgorgement)
                    </span>
                    <span className="font-bold text-slate-900">+ ₹10,80,000</span>
                  </div>
                  <div className="flex justify-between p-4 bg-slate-50/70">
                    <span className="text-slate-700">
                      Less: Security Deposit Adjusted Under Contractual Set-Off Clause
                    </span>
                    <span className="font-semibold text-slate-600">− ₹5,01,000</span>
                  </div>
                  <div className="flex justify-between p-4 bg-emerald-50 border-t-2 border-emerald-200">
                    <span className="font-bold text-emerald-950">
                      Net Enforceable Claim + Audit &amp; Legal Costs (Excl. Punitive Damages)
                    </span>
                    <span className="font-black text-emerald-700 text-base sm:text-lg">
                      ₹59,20,000 (+ ₹5L Costs)
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: 6-POINT EVIDENCE & BSA 2023 s.63 CHECKLIST */}
            <section
              id="heading-evidence-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6-Point Royalty Audit &amp; BSA 2023 s.63 Evidence Pack
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Executed License & MGR Schedule",
                    desc: "Stamped agreement highlighting unconditional MGR clauses, 60-day sell-off cap, and Mumbai/Delhi/Bengaluru jurisdiction.",
                  },
                  {
                    title: "2. Trademark Registration Certificates",
                    desc: "Certified Trade Marks Registry extracts (Classes 18, 25, 28, 9) establishing statutory proprietorship under s.29.",
                  },
                  {
                    title: "3. Hologram & Hang-Tag Dispatch Logs",
                    desc: "Serial-numbered security tag ledgers proving total units authorized for manufacture vs quarterly sales reported.",
                  },
                  {
                    title: "4. Test-Purchase & Marketplace Captures",
                    desc: "Timestamped invoices, courier AWBs, and seller-ID URLs proving sales after the 60-day sell-off expiry.",
                  },
                  {
                    title: "5. Bounced PDC / e-NACH Return Memos",
                    desc: "Original bank cheque return memos or NPCI e-NACH dishonour logs for immediate NI s.138 / PSS s.25 action.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    desc: "Mandatory electronic-record certificate signed by your IP/finance officer authenticating ERP statements and portal screenshots.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 8: DUAL-TRACK B2B CTA DESK */}
            <section
              id="heading-cta-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Serve a Brand Licensing Demand or Bulk Portfolio Drive
                </h2>
              </div>

              <BrandLicensingCTA />
            </section>

            {/* SECTION 9: HUB, CALCULATORS, TEMPLATES & SIBLING GUIDES */}
            <section
              id="heading-related-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Brand Licensing Hub, Calculators &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    label: "IND-24 Parent Hub",
                    title: "Franchisors, Brand Licensors & OEM Dealership Recovery",
                    href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
                  },
                  {
                    label: "Sibling Playbook",
                    title: "Terminated Rogue Franchisee Using Brand Signboard & Royalty Recovery",
                    href: "/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery",
                  },
                  {
                    label: "Sibling Playbook",
                    title: "Franchisee POS Cash Skimming & Sales Under-Reporting Audit",
                    href: "/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery",
                  },
                  {
                    label: "Sibling Playbook",
                    title: "FOCO / FICO Franchise Store Lockout & CapEx Dispute Recovery",
                    href: "/fico-foco-franchise-investor-minimum-guarantee-capex-dispute-recovery",
                  },
                  {
                    label: "Interactive Calculator",
                    title: "Commercial & MSME Delayed Payment Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                  },
                  {
                    label: "Notice Workspace",
                    title: "Fact-Verified Commercial Legal Notice & Reply Format",
                    href: "/templates/legal-notice-reply-format",
                  },
                  {
                    label: "Channel Recovery",
                    title: "Distributor & Dealer Credit Dues Recovery Playbook",
                    href: "/distributor-dealer-dues-recovery",
                  },
                  {
                    label: "Fast-Track Forum",
                    title: "Online Dispute Resolution (ODR) for Commercial Royalties",
                    href: "/online-dispute-resolution-india",
                  },
                ].map((linkItem, idx) => (
                  <Link
                    key={idx}
                    href={linkItem.href}
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#DC2626] transition-all"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {linkItem.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {linkItem.title} &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* SECTION 10: FAQ ACCORDIONS */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: MGR &amp; Sell-Off Enforcement
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none p-4 flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
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

            {/* SECTION 11: PRIMARY STATUTORY SOURCES */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="text-xs sm:text-sm">
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
