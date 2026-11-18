import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import IspLockInTableOfContents from "./IspLockInTableOfContents";
import IspLockInScenarioTabs from "./IspLockInScenarioTabs";
import IspLockInCTA from "./IspLockInCTA";

export const revalidate = 86400;

const PAGE_URL = "/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Laid Dedicated Last-Mile Fiber for an Enterprise ILL / MPLS Link\u2014and the Client Disconnected in Month 4 Refusing Lock-In Charges?";

// Tightened from 68ch PDF draft to 54ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Enterprise ILL / MPLS / SD-WAN Lock-In Breach Recovery";

// Tightened from 166ch PDF draft to 149ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "ISPs waive \u20B91.5L OTCs on 12/24-month CAF lock-ins. Recover unamortized last-mile fiber CapEx, bandwidth arrears & MUX CPE under Contract Act s.74.";

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
      "The Indian Contract Act, 1872 (Sections 73, 74 & 148\u2013160 \u2014 Liquidated Damages, CapEx Loss & Equipment Bailment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII \u2014 Summary Procedure on Written Contracts & Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Telecom Regulatory Authority of India (TRAI) Act, 1997 (Section 14 \u2014 TDSAT Jurisdiction Boundaries)",
    url: "https://www.indiacode.nic.in/handle/123456789/1970",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 \u2014 Electronic Record Admissibility for MRTG, NOC & Billing Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Department of Telecommunications (DoT) \u2014 Unified License & Enterprise ISP Guidelines",
    url: "https://dot.gov.in/",
  },
  {
    title:
      "Telecom Disputes Settlement and Appellate Tribunal (TDSAT) \u2014 Official Filing & Jurisdiction Portal",
    url: "https://tdsat.gov.in/",
  },
];

const FAQS = [
  {
    q: "Are 12-month or 24-month enterprise ILL / MPLS lock-in clauses enforceable in India if the client shuts down its office in Month 4?",
    a: "Yes, provided the ISP frames the claim as recovery of waived One-Time Charges (OTC) and unamortized last-mile fiber, municipal Right-of-Way (ROW), or RF tower CapEx rather than an arbitrary windfall penalty. Under Section 74 of the Indian Contract Act, 1872, courts enforce genuine pre-estimates of sunk capital expenditure substantiated by vendor splicing invoices and a signed Customer Application Form (CAF).",
  },
  {
    q: "Why do civil courts reject ISP early-termination demands that only claim 'remaining 20 months of MRC'?",
    a: "When an ISP claims 100% of future Monthly Recurring Charges (MRC) without deducting upstream bandwidth savings or proving sunk CapEx, defendants argue it is an unenforceable penalty in terrorem under Section 74. Splitting the demand into (1) waived OTC + pro-rata unamortized last-mile CapEx, (2) overdue past MRC, and (3) unreturned MUX/CPE value makes the claim legally watertight.",
  },
  {
    q: "Should an Enterprise ISP file lock-in recovery against an end-customer before TDSAT or a Commercial / Civil Court?",
    a: "Under Section 14 of the TRAI Act, 1997, TDSAT adjudicates disputes between licensors and licensees, between two or more service providers, or between a service provider and a group of consumers—NOT individual enterprise subscriber billing defaults. Individual corporate ILL, MPLS, and SD-WAN arrears must be pursued before the Commercial Court (if ₹3 lakh or above) or Civil Court via Order XXXVII CPC or institutional arbitration.",
  },
  {
    q: "What documents make an enterprise leased line lock-in claim eligible for an Order XXXVII CPC Summary Suit?",
    a: "To maintain an Order XXXVII summary suit for liquidated debt, the ISP needs: (a) the signed Customer Application Form (CAF) or Service Order Form (SOF) containing the lock-in and waived OTC schedule, (b) the signed Commissioning Acceptance Test (AT) Report proving link handover, and (c) GST-compliant monthly invoices plus ledger confirmation.",
  },
  {
    q: "How can an ISP recover unreturned Cisco/Juniper CPE, Layer-2 MUX, SFP+ modules, or rooftop RF radios?",
    a: "CAF terms place ISP-owned Customer Premises Equipment (CPE) under bailment (Sections 148\u2013160, Contract Act). After serving a 7-day hardware surrender notice with serial numbers and MAC IDs, the ISP can claim specific delivery or replacement value under Sections 7\u20138 of the Specific Relief Act, 1963, and initiate criminal breach of trust proceedings under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023 if the client refuses access or disposes of the hardware.",
  },
  {
    q: "What if the defaulting corporate subscriber claims 'slow speed or packet loss' only after receiving the termination bill?",
    a: "Under enterprise SLA clauses, bandwidth degradation must be logged contemporaneously via NOC trouble tickets with an agreed cure window. Retroactive SLA allegations raised after months of unpaid invoices fail the Mobilox test of a bona fide pre-existing dispute when rebutted with BSA 2023 Section 63 certified MRTG/PRTG uptime logs and the signed Commissioning AT Report.",
  },
  {
    q: "Can Class-A/B ISPs send bulk legal notices for 50 to 5,000+ SME broadband and enterprise postpaid defaulters?",
    a: "Yes. Enterprise telecom billing teams routinely batch-process 30-to-180+ DPD postpaid ledgers by uploading circuit IDs, CAF dates, and unamortized CapEx figures via CSV. Multi-channel dispatch (Registered Email + WhatsApp + Speed Post RPAD) creates admissible proof of service before escalating high-value accounts to Commercial Courts or arbitration.",
  },
];

export default function EnterpriseLeasedLineLockInPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
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
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        inLanguage: "en-IN",
        image: `${SITE_URL}/blog_money_recovery.png`,
      },
      {
        "@type": "HowTo",
        "@id": `${CANONICAL_URL}#howto`,
        name: "5-Stage Enterprise ILL / MPLS Lock-In Breach & CapEx Recovery Workflow",
        description:
          "Step-by-step operational and statutory workflow for Class-A/B Enterprise ISPs to recover waived OTCs, unamortized last-mile fiber CapEx, bandwidth arrears, and MUX CPE.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Audit CAF, Commissioning AT Report & CapEx Receipts",
            text: "Compile the signed CAF/SOF lock-in schedule, Commissioning Acceptance Test (AT) Report, municipal ROW fees, and vendor fiber-splicing invoices.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Segregate Waived OTC, Unamortized CapEx & MRC Arrears",
            text: "Calculate pro-rata unamortized last-mile CapEx for remaining lock-in months separately from overdue MRC and CPE replacement value under Contract Act s.74.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Issue 15-Day Link Suspension & CPE Surrender Notice",
            text: "Serve multi-channel notice demanding overdue MRC, lock-in CapEx restitution, and peaceful handover of bailed MUX/router/SFP hardware.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Certify NOC Uptime & Billing Logs Under BSA 2023 s.63",
            text: "Execute a Section 63 BSA certificate authenticating MRTG/PRTG graphs, BGP uptime, and zero unresolved SLA tickets to preempt sham quality defenses.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "File Order XXXVII Summary Suit / Commercial Suit / Arbitration",
            text: "Escalate above-₹3L claims to Commercial Court (after s.12A mediation) or institutional arbitration, and parallelly enforce BNS s.316 for retained CPE.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
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
            name: "Telecom & ISP Recovery",
            item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ILL / MPLS / SD-WAN Lock-In Breach Recovery",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-18 · Telecom &amp; Enterprise ISP Recovery Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 word Executive Creditor Summary Box with inline Parent Hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Enterprise ISPs can enforce 12-to-36-month ILL, MPLS, and SD-WAN lock-ins by framing claims as{" "}
            <strong className="text-white">waived One-Time Charges (OTC) plus unamortized last-mile fiber CapEx</strong>{" "}
            under Section 74 of the Contract Act, backed by the signed CAF and Commissioning AT Report. Explore our{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Telecom, ISP &amp; Data Center Recovery Hub
            </Link>{" "}
            for full sector playbooks.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-lg sm:text-2xl font-black text-slate-100">
                &#8377;50K&ndash;&#8377;3L
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Typical Waived Fiber / ROW CapEx OTC
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-emerald-400">Section 74</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Genuine Pre-Estimate of Sunk CapEx
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-amber-400">15 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Cure Window Before CPE &amp; Lock-In Demand
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-red-400">Order XXXVII</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Summary Suit on CAF + AT + Invoices
              </div>
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
                label: "Telecom & ISP Recovery",
                href: "/industries/telecom-isp-datacenter-msp-recovery",
              },
              {
                label: "ILL / MPLS / SD-WAN Lock-In Breach Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <IspLockInTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-capex-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Pure &ldquo;Penalty&rdquo; Lock-In Clauses Fail—and CapEx Framing Wins
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  To win enterprise Internet Leased Line (ILL), MPLS VPN, and managed SD-WAN mandates, Class-A and Class-B ISPs routinely offer <strong>&ldquo;Zero Installation OTC&rdquo;</strong> promotions. Behind that commercial waiver, the ISP spends ₹50,000 to ₹3,00,000 upfront on municipal Right-of-Way (ROW) road-cutting permissions, dark-fiber trenching, OTDR fusion splicing, or rooftop licensed-band microwave tower erection, amortized over a mandatory 12-, 24-, or 36-month Customer Application Form (CAF) lock-in.
                </p>
                <p>
                  When a BPO, call center, co-working operator, or VC-funded startup shuts its office in Month 4 and sends an email purporting to &ldquo;surrender the circuit,&rdquo; most ISP billing teams issue a credit-control notice demanding <em>&ldquo;100% of the remaining 20 months of Monthly Recurring Charges (MRC) as Early Termination Penalty.&rdquo;</em> In Indian Civil and Commercial Courts, defense counsel immediately attack that framing under <strong>Section 74 of the Indian Contract Act, 1872</strong>, arguing that collecting future bandwidth rentals for unconsumed capacity after disconnection is an unenforceable penalty <em>in terrorem</em>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-[#DC2626] mb-1.5">
                      Vulnerable Framing (Often Cut by Courts)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Demanding &ldquo;20 months &times; ₹65,000 = ₹13,00,000 as Early Termination Penalty&rdquo; without linking the figure to sunk capital expenditure or upstream NNI commitments. Courts treat unmitigated future revenue as a windfall penalty.
                    </p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-emerald-800 mb-1.5">
                      Enforceable Framing (100% CapEx Recoverable)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Splitting the claim into: <strong>(a)</strong> Waived Installation OTC (₹1.50L), <strong>(b)</strong> Pro-rata unamortized last-mile fiber &amp; ROW CapEx (20/24ths), <strong>(c)</strong> Past unpaid MRC invoices, and <strong>(d)</strong> Unreturned MUX/CPE replacement value.
                    </p>
                  </div>
                </div>

                <p>
                  Under Supreme Court precedent interpreting Section 74 (including <em>ONGC Ltd. v. Saw Pipes Ltd.</em> and <em>Kailash Nath Associates v. DDA</em>), where actual loss is proved through vendor civil-work bills and the contract specifies a genuine pre-estimate via a waived-OTC schedule, courts award the full unamortized CapEx without requiring the ISP to absorb the subscriber&rsquo;s premature exit.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage ISP Lock-In Breach Escalation Decision Tree
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Follow this sequential escalation rail from the moment a corporate subscriber requests premature disconnection or hits 45+ DPD on postpaid ILL/MPLS billing.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  width="820"
                  height="220"
                  viewBox="0 0 820 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-Stage Enterprise ISP Lock-In Breach Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  <rect width="820" height="220" rx="16" fill="#0F172A" />

                  {/* Stage 1 */}
                  <rect x="18" y="34" width="142" height="152" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="42" cy="58" r="12" fill="#DC2626" />
                  <text x="42" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="62" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">CAF &amp; AT Audit</text>
                  <text x="30" y="90" fill="#CBD5E1" fontSize="10">Verify signed CAF,</text>
                  <text x="30" y="106" fill="#CBD5E1" fontSize="10">waived OTC clause,</text>
                  <text x="30" y="122" fill="#CBD5E1" fontSize="10">Commissioning AT</text>
                  <text x="30" y="138" fill="#CBD5E1" fontSize="10">&amp; ROW vendor bills.</text>
                  <text x="30" y="166" fill="#34D399" fontSize="9" fontWeight="bold">Day 1&ndash;3</text>

                  <path d="M162 110 H178" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="180" y="34" width="142" height="152" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="204" cy="58" r="12" fill="#DC2626" />
                  <text x="204" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="224" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">CapEx Split</text>
                  <text x="192" y="90" fill="#CBD5E1" fontSize="10">Compute pro-rata</text>
                  <text x="192" y="106" fill="#CBD5E1" fontSize="10">unamortized CapEx</text>
                  <text x="192" y="122" fill="#CBD5E1" fontSize="10">+ past MRC + MUX</text>
                  <text x="192" y="138" fill="#CBD5E1" fontSize="10">CPE replacement.</text>
                  <text x="192" y="166" fill="#34D399" fontSize="9" fontWeight="bold">Contract Act s.74</text>

                  <path d="M324 110 H340" stroke="#94A3B8" strokeWidth="2" />

                  {/* Stage 3 */}
                  <rect x="342" y="34" width="142" height="152" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="366" cy="58" r="12" fill="#DC2626" />
                  <text x="366" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="386" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">BSA s.63 Logs</text>
                  <text x="354" y="90" fill="#CBD5E1" fontSize="10">Lock MRTG/PRTG</text>
                  <text x="354" y="106" fill="#CBD5E1" fontSize="10">uptime &amp; zero-ticket</text>
                  <text x="354" y="122" fill="#CBD5E1" fontSize="10">NOC history with</text>
                  <text x="354" y="138" fill="#CBD5E1" fontSize="10">s.63 BSA certificate.</text>
                  <text x="354" y="166" fill="#FBBF24" fontSize="9" fontWeight="bold">Blocks SLA Excuse</text>

                  <path d="M486 110 H502" stroke="#94A3B8" strokeWidth="2" />

                  {/* Stage 4 */}
                  <rect x="504" y="34" width="142" height="152" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="528" cy="58" r="12" fill="#DC2626" />
                  <text x="528" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="548" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">15-Day Notice</text>
                  <text x="516" y="90" fill="#CBD5E1" fontSize="10">Serve RPAD + Email</text>
                  <text x="516" y="106" fill="#CBD5E1" fontSize="10">+ WhatsApp demand</text>
                  <text x="516" y="122" fill="#CBD5E1" fontSize="10">for dues + 7-day</text>
                  <text x="516" y="138" fill="#CBD5E1" fontSize="10">CPE surrender.</text>
                  <text x="516" y="166" fill="#F87171" fontSize="9" fontWeight="bold">BNS s.316 Warning</text>

                  <path d="M648 110 H664" stroke="#94A3B8" strokeWidth="2" />

                  {/* Stage 5 */}
                  <rect x="666" y="34" width="136" height="152" rx="12" fill="#DC2626" />
                  <circle cx="690" cy="58" r="12" fill="#111827" />
                  <text x="690" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="710" y="62" fill="#FFFFFF" fontSize="11" fontWeight="bold">Forum Action</text>
                  <text x="678" y="90" fill="#FEE2E2" fontSize="10">Order XXXVII Suit,</text>
                  <text x="678" y="106" fill="#FEE2E2" fontSize="10">Commercial Court</text>
                  <text x="678" y="122" fill="#FEE2E2" fontSize="10">(&ge;&#8377;3L), MSEFC,</text>
                  <text x="678" y="138" fill="#FEE2E2" fontSize="10">or Arbitration s.21.</text>
                  <text x="678" y="166" fill="#FFFFFF" fontSize="9" fontWeight="bold">Not TDSAT!</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "1. CAF & Commissioning AT Audit",
                    desc: "Compile signed CAF/SOF lock-in schedule, Commissioning AT Report, and vendor fiber/ROW invoices.",
                  },
                  {
                    step: "2. CapEx vs. Penalty Split (s.74)",
                    desc: "Quantify waived OTC + pro-rata unamortized fiber CapEx separately from overdue MRC and CPE cost.",
                  },
                  {
                    step: "3. BSA 2023 s.63 NOC Certification",
                    desc: "Export MRTG/PRTG uptime logs and zero-ticket history to defeat post-default SLA excuses.",
                  },
                  {
                    step: "4. 15-Day Notice & 7-Day CPE Recall",
                    desc: "Serve Email + WhatsApp + RPAD demand warning of BNS s.316 criminal breach of trust for retained MUX/CPE.",
                  },
                  {
                    step: "5. Commercial Court / Order XXXVII Filing",
                    desc: "Escalate corporate arrears to Commercial Court, Order XXXVII CPC, MSEFC (if MSME), or Arbitration.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-xs font-bold text-red-400 mb-1">{item.step}</p>
                    <p className="text-xs text-slate-200 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory &amp; Forum Matrix: Lock-In, Bandwidth &amp; MUX CPE Recovery
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Enterprise ISP legal heads must route each component of a disconnected ILL/MPLS account to the exact statutory remedy to avoid jurisdictional dismissal (especially avoiding misfiling end-customer defaults before TDSAT).
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Default Component</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Primary Forum</th>
                      <th className="p-3.5 font-bold">Key Evidentiary Anchor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Waived OTC &amp; Unamortized Last-Mile Fiber CapEx
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Indian Contract Act, 1872 s.73 &amp; s.74
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Order XXXVII CPC / Commercial Court (&ge;&#8377;3L) / Arbitration
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Signed CAF lock-in table + ROW &amp; splicing vendor invoices
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Overdue Postpaid ILL / MPLS / SD-WAN MRC
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CPC Order XXXVII; MSMED Act s.15&ndash;18 (for Udyam Class-B/C ISPs)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary Suit / MSEFC Samadhaan / IBC s.8 (&ge;&#8377;1 Cr)
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Commissioning AT Report + GST tax invoices + e-way/CDN logs
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Unreturned Layer-2 MUX, Routers, SFP+ &amp; Radios
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.148&ndash;160; Specific Relief Act s.7&ndash;8; BNS s.316
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Civil / Commercial Court + Criminal Complaint (BNS s.316)
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Hardware Delivery Challan with MAC IDs, serial numbers &amp; AT sign-off
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Wholesale NNI / Dark-Fiber / Inter-Operator Arrears
                      </td>
                      <td className="p-3.5 text-slate-700">
                        TRAI Act, 1997 s.14(a)(ii) (Licensee vs. Licensee)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        TDSAT (Exclusive Telecom Licensee Jurisdiction)
                      </td>
                      <td className="p-3.5 text-slate-600">
                        DoT Unified License / ISP-A/B interconnect agreement &amp; CDRs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 mt-3">
                Need deeper clarity on when to approach TDSAT versus a Commercial Court? Read our sibling guide on{" "}
                <Link
                  href="/tdsat-vs-commercial-court-jurisdiction-telecom-isp-broadcasting-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  TDSAT vs. Commercial Court Jurisdiction for Telecom &amp; ISP Recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section id="heading-scenario-tabs" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Enterprise Leased Line Default Scenarios &amp; ISP Playbooks
                </h2>
              </div>
              <IspLockInScenarioTabs />
            </section>

            {/* Section 5: Worked Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Financial Ledger: Month-4 Exit on a 24-Month 1 Gbps ILL Link
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Consider a typical Class-B Enterprise ISP that commissioned a 1 Gbps 1:1 symmetric ILL circuit for a Bengaluru BPO under a 24-month CAF lock-in with Zero OTC, and the client disconnected in Month 4 after defaulting on Months 3 and 4.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-lg mb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Schedule of Recoverable Claims (Contract Act s.74 + Order XXXVII)
                  </span>
                  <span className="text-xs text-slate-300">24-Month CAF · Month-4 Breach</span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      1. Waived Installation OTC (Explicitly conditioned on 24-month tenure)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;1,50,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      2. Unamortized Last-Mile Fiber &amp; ROW CapEx (&#8377;1,80,000 &times; 20/24 months)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;1,50,000</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      3. Overdue Postpaid MRC (Months 3 &amp; 4 @ &#8377;65,000/mo + 18% GST)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;1,53,400</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      4. Unreturned Layer-2 MUX &amp; Dual SFP+ CPE Replacement Value
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;85,000</span>
                  </div>
                  <div className="flex justify-between gap-4 pt-2 text-sm sm:text-base">
                    <span className="font-bold text-emerald-400">
                      Total Liquidated Principal Claim (Excl. 18% p.a. / MSMED Interest)
                    </span>
                    <span className="font-black text-emerald-400 shrink-0">&#8377;5,38,400</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                <strong>Commercial Court Threshold Cleared:</strong> Because the consolidated claim (&#8377;5,38,400) exceeds the &#8377;3,00,000 Specified Value under the Commercial Courts Act, 2015, the ISP can invoke fast-track Commercial Division proceedings (or{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="font-bold underline hover:text-emerald-700"
                >
                  Order XXXVII CPC Summary Suit
                </Link>
                ). If the ISP holds Udyam MSME registration, compute statutory 3x RBI Bank Rate compound interest using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="font-bold underline hover:text-emerald-700"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                , and verify your 3-year filing window with the{" "}
                <Link
                  href="/tools/limitation-period-calculator"
                  className="font-bold underline hover:text-emerald-700"
                >
                  Limitation Period Calculator
                </Link>
                .
              </div>
            </section>

            {/* Section 6: Evidence & BSA s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  CAF, AT Report &amp; BSA 2023 s.63 Digital Evidence Checklist
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Before issuing a statutory demand notice or uploading a batch CSV, Enterprise Billing and NOC teams should lock down these six evidentiary records:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed CAF / SOF with Lock-In Schedule",
                    body: "Must carry authorized signatory stamp, circuit ID, MRC rate, lock-in months, and the explicit waived OTC / CapEx amortization figure.",
                  },
                  {
                    title: "2. Commissioning Acceptance Test (AT) Report",
                    body: "Signed by the subscriber's IT manager confirming BGP/IP handover, symmetric throughput, and latency compliance on the billing start date.",
                  },
                  {
                    title: "3. ROW & Last-Mile Fiber Vendor Invoices",
                    body: "Municipal trenching receipts, dark-fiber IRU/lease bills, and splicing POs proving actual sunk CapEx under Section 74.",
                  },
                  {
                    title: "4. NOC MRTG/PRTG & Zero-Ticket Logs",
                    body: "99.5%+ uptime graphs and trouble-ticket extracts demonstrating zero unresolved SLA breaches prior to payment default.",
                  },
                  {
                    title: "5. Hardware Delivery Challan (MAC & Serials)",
                    body: "Signed site handover form listing MUX, router, SFP+, ONT, and RF radio serial numbers to anchor Specific Relief Act & BNS s.316 claims.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    body: "Mandatory statutory certificate signed by the person in lawful control of the ISP billing server & NOC logs for court admissibility.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Dual-Track B2B CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Start Single-Circuit Recovery or Upload Bulk Postpaid Arrears
                </h2>
              </div>
              <IspLockInCTA />
            </section>

            {/* Section 8: Related Telecom & B2B Recovery Links */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Related Telecom, ISP &amp; Commercial Recovery Resources
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <Link
                  href="/industries/telecom-isp-datacenter-msp-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Parent Industry Hub
                  </span>
                  <span className="font-bold text-slate-900 block">
                    Telecom, Enterprise ISP, Data Center &amp; MSP Recovery Hub &rarr;
                  </span>
                </Link>

                <Link
                  href="/data-center-colocation-bare-metal-hosting-default-suspension-lien-law"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Sibling Spoke · IND-18
                  </span>
                  <span className="font-bold text-slate-900 block">
                    Data Center Colocation &amp; Bare-Metal Default Lien Law &rarr;
                  </span>
                </Link>

                <Link
                  href="/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Sibling Spoke · IND-18
                  </span>
                  <span className="font-bold text-slate-900 block">
                    CPaaS, Bulk SMS, WhatsApp BSP &amp; Cloud Telephony Postpaid Recovery &rarr;
                  </span>
                </Link>

                <Link
                  href="/templates/it-software-saas-msa-payment-default-legal-notice"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Notice Template · P1
                  </span>
                  <span className="font-bold text-slate-900 block">
                    MSA &amp; Enterprise Tech Payment Default Legal Notice Builder &rarr;
                  </span>
                </Link>

                <Link
                  href="/services/vendor-and-invoice-recoveries"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    B2B Service Rail
                  </span>
                  <span className="font-bold text-slate-900 block">
                    B2B Vendor &amp; Commercial Invoice Recovery Desk &rarr;
                  </span>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Institutional Batch Desk
                  </span>
                  <span className="font-bold text-slate-900 block">
                    Bulk CSV Legal Notice &amp; Pre-Litigation Recovery &rarr;
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: ILL / MPLS Lock-In Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((item) => (
                  <details
                    key={item.q}
                    className="group border border-slate-200 rounded-xl p-4 bg-slate-50/60 open:bg-white open:shadow-xs transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Official Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
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

      {/* Footer Cluster Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
