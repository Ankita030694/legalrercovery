import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import AssuredReturnTableOfContents from "./AssuredReturnTableOfContents";
import AssuredReturnNoticeCTA from "./AssuredReturnNoticeCTA";
import AssuredReturnProblemTabs from "./AssuredReturnProblemTabs";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import {
  CheckCircle2,
  AlertTriangle,
  Scale,
  Clock,
  FileText,
  ShieldCheck,
  Building2,
  Landmark,
  Briefcase,
  ArrowRight,
  Gavel,
  BookOpen,
  HelpCircle,
  ExternalLink,
  BadgeAlert,
  Banknote,
  FileSpreadsheet,
  GitBranch,
  UserCheck,
} from "lucide-react";

export const revalidate = 86400;

const SITE_URL = "https://www.legalrecovery.in";
const PAGE_PATH = "/assured-return-builder-default-legal-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED_ISO = "2026-11-04";
const LAST_UPDATED_DISPLAY = "4 November 2026";
const NOTICE_PRICE_NUM = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
const NOTICE_PRICE_FORMATTED = `₹${NOTICE_PRICE_NUM.toLocaleString("en-IN")}`;

export const metadata: Metadata = {
  title: {
    absolute: "Assured Return Not Paid by Builder? Legal Notice",
  },
  description:
    "Builder defaulting on assured-return commitments? Contract and RERA angles, evidence and how to issue a demand notice.",
  keywords: [
    "assured return builder default",
    "assured return scheme default",
    "builder assured return not paid",
    "assured return legal action",
    "commercial property assured return",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Assured Return Not Paid by Builder? Legal Notice",
    description:
      "Builder defaulting on assured-return commitments? Contract and RERA angles, evidence and how to issue a demand notice.",
    url: CANONICAL_URL,
    siteName: "LegalRecovery.in",
    type: "article",
    locale: "en_IN",
    publishedTime: LAST_UPDATED_ISO,
    modifiedTime: LAST_UPDATED_ISO,
  },
  twitter: {
    card: "summary_large_image",
    title: "Assured Return Not Paid by Builder? Legal Notice",
    description:
      "Builder defaulting on assured-return commitments? Contract and RERA angles, evidence and how to issue a demand notice.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    question:
      "Can I file a RERA complaint solely for unpaid assured returns after taking possession of a commercial shop?",
    answer:
      "Most state RERA authorities (including UP RERA and Maharashtra MahaRERA) hold that pure post-possession rental or lease-guarantee disputes are contractual obligations governed by civil courts or arbitration rather than the Real Estate (Regulation and Development) Act, 2016. However, if the builder failed to deliver valid possession with an Occupancy Certificate (OC) by the agreed date, or induced the booking via false representations under Section 12 of RERA, you can claim a 100% principal refund with statutory interest (SBI MCLR + 2%), and Haryana RERA (HARERA) additionally enforces pre-possession assured returns written into the Builder-Buyer Agreement.",
  },
  {
    question:
      "What happens if the post-dated cheques (PDCs) given by the builder for monthly assured returns bounce?",
    answer:
      "Each dishonoured assured-return or buyback PDC constitutes an independent criminal offence under Section 138 of the Negotiable Instruments Act, 1881. Because the developer took your upfront capital and contracted to pay periodic returns, the cheques represent a legally enforceable debt. You must dispatch a statutory legal notice within 30 days of receiving the bank return memo, giving the company and its signatory/active directors 15 days to pay, failing which you can file a criminal complaint before the Judicial Magistrate and seek 20% interim compensation under Section 143A.",
  },
  {
    question:
      "The builder deducted TDS under Section 194A in my Form 26AS but never transferred the assured return to my bank account. How do I use this?",
    answer:
      "A TDS credit entry in Form 26AS or your Annual Information Statement (AIS) is an unconditional statutory admission of debt by the promoter company. Under Order XXXVII of the Code of Civil Procedure, 1908 (Summary Suit) and Order XII Rule 6 CPC (Judgment on Admissions), your advocate can annex your Form 26AS alongside your bank statement showing zero inward credit to obtain a summary money decree without a drawn-out trial. You can also report the builder's failure to issue Form 16A or misuse of TDS provisions to the Income Tax Assessing Officer (TDS Circle).",
  },
  {
    question:
      "Does a commercial office space or retail shop bought under an assured return scheme qualify for a Consumer Court complaint?",
    answer:
      "Yes, provided you satisfy the 'self-employment livelihood' exception under the Explanation to Section 2(7) of the Consumer Protection Act, 2019. As clarified by the Supreme Court in Lilavati Kirtilal Mehta Medical Trust v. Unique Shanti Developers (2020) and Sunil Kohli v. Pure Earth Infrastructure (2019), if you purchased the commercial unit to earn your own livelihood or supplement retirement/family income through self-employment—rather than operating a large-scale real-estate trading business—you are a valid consumer and can file on the e-Jagriti portal.",
  },
  {
    question:
      "Can a single commercial buyer file an NCLT insolvency petition under Section 7 of the IBC when the builder defaults on assured returns?",
    answer:
      "No single real-estate allottee can file individually anymore. While the Supreme Court in Pioneer Urban Land and Infrastructure Ltd. v. Union of India (2019) recognized assured-return and real-estate buyers as Financial Creditors under Section 5(8)(f) of the Insolvency and Bankruptcy Code, 2016, the 2020 IBC Amendment inserted the second proviso to Section 7(1). Today, a real-estate petition requires a joint filing by at least 100 allottees or 10% of the total allottees of the same project, whichever is lower, coupled with an aggregate default threshold of ₹1 Crore.",
  },
  {
    question:
      "Are virtual-space assured return schemes illegal under the Banning of Unregulated Deposit Schemes (BUDS) Act, 2019?",
    answer:
      "When a builder collects upfront funds promising fixed 11%–14% annual returns and a mandatory buyback on 'virtual non-lockable space' without RERA registration, approved building plans, or demarcated physical units, regulators treat it as an Unregulated Deposit Scheme under Section 3 of the BUDS Act, 2019 or an unregistered Collective Investment Scheme (CIS) under Section 11AA of the SEBI Act, 1992. Putting the promoter and directors on notice under Sections 21 and 22 of the BUDS Act (which carry up to 7 years' imprisonment and attachment of personal assets) creates immediate settlement pressure.",
  },
  {
    question:
      "Should I accept the builder's offer to adjust my unpaid assured-return arrears against final possession and maintenance charges?",
    answer:
      "Only if the builder already holds a valid Occupancy Certificate (OC) or Completion Certificate (CC) from the town planning authority and executes a registered Tripartite/Addendum Settlement Deed. In many defaults, promoters raise premature 'fit-out possession' demands without an OC simply to terminate their pre-possession assured return liability and wipe out arrears against inflated Common Area Maintenance (CAM), external development, and club charges. Demand a copy of the OC and a ledger reconciliation before signing any credit-note adjustment.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Builder Stopped Assured Returns: Your Recovery Options",
  description:
    "Builder defaulting on assured-return commitments? Contract and RERA angles, evidence and how to issue a demand notice.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  datePublished: LAST_UPDATED_ISO,
  dateModified: LAST_UPDATED_ISO,
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in Editorial Desk",
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
      name: "Real Estate & RERA Recovery",
      item: `${SITE_URL}/builder-booking-cancellation-refund-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Assured Return Builder Default Legal Notice",
      item: CANONICAL_URL,
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

export default function AssuredReturnBuilderDefaultPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <Navbar />

      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white pt-10 pb-16 md:pt-14 md:pb-20 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Visible Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/builder-booking-cancellation-refund-legal-notice"
              className="hover:text-white transition-colors"
            >
              Real Estate &amp; RERA Recovery
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">
              Assured Return Builder Default
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5">
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  RERA Sec 12 &amp; 18 • NI Act Sec 138/141 • Order XXXVII CPC •
                  BUDS Act 2019
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Builder Stopped Assured Returns: Your Recovery Options
              </h1>

              {/* 40-60 Word Statutory Quick Answer Box */}
              <div className="bg-slate-900/90 border-l-4 border-amber-400 rounded-r-xl p-5 mb-7 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Statutory Quick Answer
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  When a builder defaults on promised monthly assured returns or
                  buyback guarantees, your recovery route depends on your fault
                  line: file under{" "}
                  <strong>Sections 12 and 18 of RERA, 2016</strong> if
                  possession is delayed, prosecute directors under{" "}
                  <strong>Sections 138 and 141 of the NI Act, 1881</strong> within
                  30 days if post-dated cheques bounced, or file an{" "}
                  <strong>Order XXXVII CPC Summary Suit</strong> using Form 26AS
                  TDS admissions for pure return arrears.
                </p>
              </div>

              {/* Author & Editorial Metadata */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>
                    Reviewed by{" "}
                    <strong className="text-white">
                      LegalRecovery.in Real Estate &amp; Commercial Litigation Desk
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Last updated: {LAST_UPDATED_DISPLAY}</span>
                </div>
              </div>
            </div>

            {/* Hero Right Stat Cards */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <div className="text-amber-400 font-extrabold text-2xl sm:text-3xl mb-1">
                  MCLR + 2%
                </div>
                <div className="text-xs text-slate-300 font-medium leading-snug">
                  Statutory RERA refund interest (~10.9%–11.15% p.a.) from each
                  payment date under Section 18(1)
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <div className="text-emerald-400 font-extrabold text-2xl sm:text-3xl mb-1">
                  30 Days
                </div>
                <div className="text-xs text-slate-300 font-medium leading-snug">
                  Mandatory deadline under Section 138(b) NI Act to serve notice
                  after an assured-return PDC bounces
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <div className="text-sky-400 font-extrabold text-2xl sm:text-3xl mb-1">
                  Sec 194A
                </div>
                <div className="text-xs text-slate-300 font-medium leading-snug">
                  TDS reflected in Form 26AS / AIS acts as a written admission
                  of debt for Order XXXVII CPC decrees
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <div className="text-rose-400 font-extrabold text-2xl sm:text-3xl mb-1">
                  {NOTICE_PRICE_FORMATTED}
                </div>
                <div className="text-xs text-slate-300 font-medium leading-snug">
                  All-inclusive advocate legal notice fee with Speed Post RPAD
                  dispatch to builder &amp; directors
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN BODY */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDEBAR: STICKY TOC */}
          <AssuredReturnTableOfContents />

          {/* RIGHT CONTENT COLUMN */}
          <div className="lg:col-span-9 space-y-12">
            {/* SECTION 1: G1 DECISION TREE */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                <GitBranch className="w-4 h-4" />
                <span>Archetype G1 • Statutory Route Selector</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                1. Decision Tree: Which Legal Route Recovers Your Assured Returns?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Across Gurugram, Noida, Greater Noida, Mumbai, Bengaluru, and
                Hyderabad, builders market commercial retail shops, IT office
                spaces, serviced studio apartments, and &ldquo;virtual
                lockable/non-lockable spaces&rdquo; by promising{" "}
                <strong>9% to 12% annual assured returns</strong> until
                possession—frequently paired with a 24-to-36-month post-possession{" "}
                <strong>lease guarantee</strong> or a{" "}
                <strong>guaranteed buyback escalation</strong>. Typically, the
                developer collects 50% to 100% of the sale consideration upfront,
                pays monthly returns for 8 to 14 months out of your own capital,
                and then abruptly stops payments while construction stalls.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Filing in the wrong forum is the single biggest mistake buyers
                make: for example, filing a RERA complaint solely for post-OC
                rental arrears in a state where RERA declines jurisdiction over
                pure lease contracts, or filing a single-buyer NCLT insolvency
                petition without meeting the 100-allottee threshold. Use the
                decision tree below to match your exact agreement and default
                stage to the fastest statutory remedy.
              </p>

              {/* Hand-Authored SVG Decision Flowchart */}
              <figure className="my-6 bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 920 430"
                  role="img"
                  aria-label="Decision tree flowchart for assured return builder default recovery routes"
                  className="w-full min-w-[680px] h-auto"
                >
                  <defs>
                    <marker
                      id="arrow-amber"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
                    </marker>
                    <marker
                      id="arrow-sky"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
                    </marker>
                  </defs>

                  {/* Top Root Node */}
                  <rect
                    x="270"
                    y="16"
                    width="380"
                    height="58"
                    rx="10"
                    fill="#1e293b"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  />
                  <text
                    x="460"
                    y="40"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="13"
                    fontWeight="bold"
                  >
                    BUILDER STOPPED PAYING ASSURED RETURNS / BUYBACK
                  </text>
                  <text
                    x="460"
                    y="59"
                    textAnchor="middle"
                    fill="#fcd34d"
                    fontSize="11"
                  >
                    Step 1: Check PDC Status, Possession / OC Status &amp; MoU
                    Clauses
                  </text>

                  {/* Connector Lines from Root to 4 Branches */}
                  <path
                    d="M 460 74 L 460 104 M 115 104 L 805 104 M 115 104 L 115 132 M 345 104 L 345 132 M 575 104 L 575 132 M 805 104 L 805 132"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Question Box 1 */}
                  <rect
                    x="15"
                    y="132"
                    width="200"
                    height="78"
                    rx="8"
                    fill="#0f172a"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                  <text
                    x="115"
                    y="155"
                    textAnchor="middle"
                    fill="#38bdf8"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    BRANCH A: PDC CHEQUES
                  </text>
                  <text
                    x="115"
                    y="174"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                  >
                    Do you hold assured-return
                  </text>
                  <text
                    x="115"
                    y="190"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                  >
                    or buyback PDCs?
                  </text>

                  {/* Question Box 2 */}
                  <rect
                    x="245"
                    y="132"
                    width="200"
                    height="78"
                    rx="8"
                    fill="#0f172a"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                  <text
                    x="345"
                    y="155"
                    textAnchor="middle"
                    fill="#34d399"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    BRANCH B: DELAYED PROJECT
                  </text>
                  <text
                    x="345"
                    y="174"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                  >
                    Is possession / OC delayed
                  </text>
                  <text
                    x="345"
                    y="190"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                  >
                    on a RERA-able project?
                  </text>

                  {/* Question Box 3 */}
                  <rect
                    x="475"
                    y="132"
                    width="200"
                    height="78"
                    rx="8"
                    fill="#0f172a"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                  <text
                    x="575"
                    y="155"
                    textAnchor="middle"
                    fill="#fbbf24"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    BRANCH C: ARREARS / POST-OC
                  </text>
                  <text
                    x="575"
                    y="174"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                  >
                    Want only return arrears or
                  </text>
                  <text
                    x="575"
                    y="190"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                  >
                    26AS TDS / lease guarantee?
                  </text>

                  {/* Question Box 4 */}
                  <rect
                    x="705"
                    y="132"
                    width="200"
                    height="78"
                    rx="8"
                    fill="#0f172a"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                  <text
                    x="805"
                    y="155"
                    textAnchor="middle"
                    fill="#f87171"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    BRANCH D: UNREGISTERED / MASS
                  </text>
                  <text
                    x="805"
                    y="174"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                  >
                    Self-employment unit or
                  </text>
                  <text
                    x="805"
                    y="190"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                  >
                    virtual space / 100+ buyers?
                  </text>

                  {/* Down Arrows to Route Cards */}
                  <line
                    x1="115"
                    y1="210"
                    x2="115"
                    y2="255"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    markerEnd="url(#arrow-sky)"
                  />
                  <line
                    x1="345"
                    y1="210"
                    x2="345"
                    y2="255"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    markerEnd="url(#arrow-sky)"
                  />
                  <line
                    x1="575"
                    y1="210"
                    x2="575"
                    y2="255"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    markerEnd="url(#arrow-sky)"
                  />
                  <line
                    x1="805"
                    y1="210"
                    x2="805"
                    y2="255"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    markerEnd="url(#arrow-sky)"
                  />

                  {/* Route Box 1 */}
                  <rect
                    x="15"
                    y="260"
                    width="200"
                    height="148"
                    rx="10"
                    fill="#1e293b"
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  <text
                    x="115"
                    y="285"
                    textAnchor="middle"
                    fill="#38bdf8"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    ROUTE 2: NI ACT SEC 138/141
                  </text>
                  <text
                    x="115"
                    y="306"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • Present PDCs in bank
                  </text>
                  <text
                    x="115"
                    y="324"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • 30-day statutory notice
                  </text>
                  <text
                    x="115"
                    y="342"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • Name active directors
                  </text>
                  <text
                    x="115"
                    y="360"
                    textAnchor="middle"
                    fill="#fcd34d"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    • 20% interim relief (143A)
                  </text>
                  <text
                    x="115"
                    y="385"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                  >
                    Can run parallel to RERA!
                  </text>

                  {/* Route Box 2 */}
                  <rect
                    x="245"
                    y="260"
                    width="200"
                    height="148"
                    rx="10"
                    fill="#1e293b"
                    stroke="#34d399"
                    strokeWidth="2"
                  />
                  <text
                    x="345"
                    y="285"
                    textAnchor="middle"
                    fill="#34d399"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    ROUTE 1: RERA SEC 12 &amp; 18
                  </text>
                  <text
                    x="345"
                    y="306"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • Exit project completely
                  </text>
                  <text
                    x="345"
                    y="324"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • 100% Principal Refund
                  </text>
                  <text
                    x="345"
                    y="342"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • + SBI MCLR + 2% Interest
                  </text>
                  <text
                    x="345"
                    y="360"
                    textAnchor="middle"
                    fill="#fcd34d"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    • Sec 40(1) RC Execution
                  </text>
                  <text
                    x="345"
                    y="385"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                  >
                    HARERA: Pre-OC returns too
                  </text>

                  {/* Route Box 3 */}
                  <rect
                    x="475"
                    y="260"
                    width="200"
                    height="148"
                    rx="10"
                    fill="#1e293b"
                    stroke="#fbbf24"
                    strokeWidth="2"
                  />
                  <text
                    x="575"
                    y="285"
                    textAnchor="middle"
                    fill="#fbbf24"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    ROUTE 3: ORDER 37 / ARBITR.
                  </text>
                  <text
                    x="575"
                    y="306"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • Summary Suit on written MoU
                  </text>
                  <text
                    x="575"
                    y="324"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • Form 26AS TDS admission
                  </text>
                  <text
                    x="575"
                    y="342"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • Sec 9 &amp; 21 Arbitration notice
                  </text>
                  <text
                    x="575"
                    y="360"
                    textAnchor="middle"
                    fill="#fcd34d"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    • Order 38 Rule 5 Attachment
                  </text>
                  <text
                    x="575"
                    y="385"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                  >
                    3-Year Limitation per Default
                  </text>

                  {/* Route Box 4 */}
                  <rect
                    x="705"
                    y="260"
                    width="200"
                    height="148"
                    rx="10"
                    fill="#1e293b"
                    stroke="#f87171"
                    strokeWidth="2"
                  />
                  <text
                    x="805"
                    y="285"
                    textAnchor="middle"
                    fill="#f87171"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    ROUTE 4: CPA / IBC / BUDS
                  </text>
                  <text
                    x="805"
                    y="306"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • e-Jagriti (Self-Employment)
                  </text>
                  <text
                    x="805"
                    y="324"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • NCLT Sec 7 (100/10% Group)
                  </text>
                  <text
                    x="805"
                    y="342"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                  >
                    • BUDS Act Sec 3/21 Notice
                  </text>
                  <text
                    x="805"
                    y="360"
                    textAnchor="middle"
                    fill="#fcd34d"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    • EOW / SEBI CIS Complaint
                  </text>
                  <text
                    x="805"
                    y="385"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                  >
                    Pierces Unregistered Schemes
                  </text>
                </svg>
                <figcaption className="text-xs text-slate-400 mt-3 text-center">
                  Figure 1: Multi-forum statutory decision tree for commercial
                  and residential assured-return defaults in India. Note that
                  Section 138 NI Act criminal proceedings can be pursued{" "}
                  <strong>simultaneously</strong> alongside RERA or Civil recovery.
                </figcaption>
              </figure>

              {/* Accessible Nested UL Decision Tree */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 text-sm text-slate-800">
                <h3 className="font-bold text-slate-900 text-base">
                  Quick Text Decision Checklist (Follow Your Fact Pattern):
                </h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong>
                      Condition 1 — Do you have post-dated cheques (PDCs) for
                      monthly assured returns or corpus buyback that bounced (or
                      are still within their 3-month validity window)?
                    </strong>
                    <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-700">
                      <li>
                        <strong>YES:</strong> Immediately trigger{" "}
                        <a
                          href="#heading-route-cheque"
                          className="text-blue-700 font-semibold underline"
                        >
                          Route 2 (Section 138 &amp; 141 NI Act Notice)
                        </a>{" "}
                        within 30 days of the bank return memo. Do not wait—you
                        can run this criminal prosecution in parallel with your
                        principal recovery suit.
                      </li>
                      <li>
                        <strong>NO (NEFT/RTGS auto-credits stopped):</strong>{" "}
                        Proceed to Condition 2.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      Condition 2 — Is the project construction or Occupancy
                      Certificate (OC) delayed beyond the Builder-Buyer Agreement
                      (BBA) possession date, and do you want to exit the toxic
                      project completely?
                    </strong>
                    <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-700">
                      <li>
                        <strong>YES:</strong> Trigger{" "}
                        <a
                          href="#heading-route-rera"
                          className="text-blue-700 font-semibold underline"
                        >
                          Route 1 (RERA Section 12 &amp; 18 Refund Complaint)
                        </a>{" "}
                        for 100% principal refund plus SBI MCLR + 2% interest from
                        every payment date (or pre-possession assured return
                        enforcement before authorities like HARERA).
                      </li>
                      <li>
                        <strong>
                          NO (Possession with valid OC already taken, or you only
                          want unpaid assured-return / lease-guarantee arrears):
                        </strong>{" "}
                        Proceed to Condition 3.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      Condition 3 — Did the builder sign a written Assured Return
                      MoU / Lease Guarantee or deduct TDS in your Form 26AS
                      without crediting your bank account?
                    </strong>
                    <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-700">
                      <li>
                        <strong>YES:</strong> Trigger{" "}
                        <a
                          href="#heading-route-civil"
                          className="text-blue-700 font-semibold underline"
                        >
                          Route 3 (Order XXXVII CPC Summary Suit or Section 21/9
                          Arbitration)
                        </a>{" "}
                        for a liquidated debt decree and pre-judgment bank account
                        attachment.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      Condition 4 — Did the builder sell an unregistered
                      &ldquo;virtual space&rdquo; without RERA approval, OR did
                      you buy the unit for self-employment livelihood?
                    </strong>
                    <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-700">
                      <li>
                        <strong>YES:</strong> Trigger{" "}
                        <a
                          href="#heading-route-consumer-ibc"
                          className="text-blue-700 font-semibold underline"
                        >
                          Route 4 (Consumer Commission e-Jagriti Complaint, BUDS
                          Act 2019 Notice, or 100-Allottee NCLT Section 7 IBC)
                        </a>
                        .
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 2: ROUTE 1 — RERA */}
            <section
              id="heading-route-rera"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase">
                  <Building2 className="w-3.5 h-3.5" /> Route 1 • Delayed
                  Possession &amp; False Prospectus
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Forum: State RERA Authority / Adjudicating Officer • Fee: ₹1,000
                  – ₹5,000
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                2. Route 1: RERA Complaint Under Sections 12, 18 &amp; 31
              </h2>

              <p className="text-slate-700 leading-relaxed mb-4">
                Before filing before the Real Estate Regulatory Authority (RERA),
                you must understand a critical jurisdictional distinction that
                trips up many commercial buyers:{" "}
                <strong>
                  RERA is not a rent-recovery tribunal for post-possession lease
                  defaults, but it is the most powerful weapon to pull your entire
                  capital out when construction or Occupancy Certificate (OC) is
                  delayed.
                </strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-950 text-base mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    What RERA Strongly Enforces
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>
                      <strong>Section 18(1) Complete Exit:</strong> If the
                      promoter fails to hand over legal possession with an OC/CC
                      by the date specified in the Builder-Buyer Agreement (BBA),
                      you have an unqualified right to withdraw from the project
                      and claim 100% of your principal plus statutory interest
                      (State Bank of India Highest Marginal Cost of Funds Based
                      Lending Rate + 2%, currently{" "}
                      <strong>~10.90% to 11.15% p.a.</strong>) calculated from the
                      date of each payment.
                    </li>
                    <li>
                      <strong>Section 12 False Brochure / MoU Promises:</strong>{" "}
                      If you were induced to make an advance deposit based on
                      written assured-return brochures, prospectuses, or annexures
                      that the builder failed to honour, Section 12 independently
                      entitles you to a full return of your investment with
                      interest and compensation.
                    </li>
                    <li>
                      <strong>HARERA Pre-Possession Assured Returns:</strong>{" "}
                      Haryana RERA (Gurugram &amp; Panchkula benches) actively
                      enforces pre-possession assured returns written into the
                      BBA/MoU up to the offer of valid OC-backed possession.
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5">
                  <h3 className="font-bold text-amber-950 text-base mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                    How Builders Try to Trap You in RERA
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>
                      <strong>The &ldquo;Separate MoU&rdquo; Defence:</strong>{" "}
                      Builders split the transaction into a standard BBA and a
                      separate &ldquo;Assured Return Memorandum of
                      Understanding&rdquo; to argue before UP RERA or MahaRERA
                      that the MoU is a purely civil contract outside RERA. You
                      defeat this by opting for a <strong>Section 18 refund</strong>{" "}
                      on the ground of delayed OC, where statutory MCLR + 2%
                      interest replaces the defaulted assured return.
                    </li>
                    <li>
                      <strong>Deduction of Paid Assured Returns:</strong> When a
                      builder has paid 12 months of assured returns before
                      defaulting, they ask RERA to deduct those payouts from your
                      principal refund. When your legal notice frames the claim
                      under Section 18(1) read with Section 12, your total
                      accumulated MCLR + 2% interest from day one almost always
                      exceeds the early assured-return payouts received.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                If you are ready to cancel the allotment and demand your entire
                capital back, compare the cancellation workflow in our{" "}
                <Link
                  href="/builder-booking-cancellation-refund-legal-notice"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                >
                  Builder Booking Cancellation &amp; Refund Legal Notice Guide
                </Link>{" "}
                and use our{" "}
                <Link
                  href="/tools/rera-refund-interest-calculator"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                >
                  RERA Refund &amp; SBI MCLR + 2% Interest Calculator
                </Link>{" "}
                to compute your exact compounded claim before serving notice. You
                can also review the{" "}
                <Link
                  href="/templates/flat-booking-cancellation-letter"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                >
                  Flat &amp; Commercial Unit Booking Cancellation Letter Format
                </Link>{" "}
                to ensure you do not accidentally trigger the builder&apos;s
                10% earnest-money forfeiture clause. Once RERA passes a refund
                decree, if the promoter still refuses to pay within 45 days, you
                can enforce it as arrears of land revenue through the District
                Collector—see{" "}
                <Link
                  href="/rera-refund-order-not-paid-recovery-certificate"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                >
                  RERA Refund Order Not Paid: Section 40(1) Recovery Certificate
                  (RC) Execution
                </Link>
                .
              </p>
            </section>

            {/* SECTION 3: ROUTE 2 — NI ACT SEC 138/141 */}
            <section
              id="heading-route-cheque"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold uppercase">
                  <Gavel className="w-3.5 h-3.5" /> Route 2 • Bounced PDCs for
                  Monthly Returns or Buyback
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Forum: Judicial Magistrate First Class (JMFC) • Strict 30-Day
                  Notice Clock
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                3. Route 2: Criminal Action for Dishonoured Cheques
              </h2>

              <p className="text-slate-700 leading-relaxed mb-4">
                In nearly 65% of commercial assured-return schemes, the builder
                hands over a booklet of 24 to 36{" "}
                <strong>Post-Dated Cheques (PDCs)</strong> for monthly return
                installments—and often one high-value PDC for the principal
                buyback amount at the end of the lock-in period. When the builder
                runs into a liquidity crunch, their relationship manager will
                call or message you asking you{" "}
                <em>&ldquo;not to deposit the cheque this month&rdquo;</em> while
                promising an RTGS transfer next week.
              </p>

              <div className="bg-rose-50 border-l-4 border-rose-600 rounded-r-xl p-5 my-5">
                <p className="text-sm font-bold text-rose-950 mb-1">
                  Critical Statutory Warning: Never Let a PDC Expire Unpresented
                </p>
                <p className="text-sm text-rose-900 leading-relaxed">
                  Under RBI guidelines, a cheque is valid for exactly{" "}
                  <strong>3 months</strong> from the date written on it. If you
                  oblige the builder and let the 3-month window lapse without
                  presenting the cheque at your bank, you permanently lose your
                  criminal leverage under Section 138 of the Negotiable
                  Instruments Act, 1881. Always present every assured-return and
                  buyback PDC within its validity window so the bank issues an
                  official <strong>Cheque Return Memo</strong> (&ldquo;Funds
                  Insufficient&rdquo;, &ldquo;Account Blocked&rdquo;, or
                  &ldquo;Payment Stopped by Drawer&rdquo;).
                </p>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">
                How to Make Directors Personally Liable Under Section 141 NI Act
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Builders routinely incorporate special-purpose vehicle (SPV)
                private limited companies for each commercial tower so they can
                drain project funds into parent entities. A civil decree against
                an empty SPV takes years to execute, whereas a Section 138/141
                criminal summons requires the{" "}
                <strong>
                  Managing Director, Whole-Time Directors, and Authorised
                  Signatories
                </strong>{" "}
                to appear personally in the Magistrate&apos;s court and furnish
                bail bonds. To survive a High Court quashing petition under
                Section 528 BNSS (formerly Section 482 CrPC), your statutory
                notice must follow three strict rules:
              </p>

              <ol className="list-decimal pl-5 space-y-3 text-sm sm:text-base text-slate-700 mb-5">
                <li>
                  <strong>Address the Company as Primary Accused No. 1:</strong>{" "}
                  Following the Supreme Court Constitution Bench ruling in{" "}
                  <em>Aneeta Hada v. Godfather Travels &amp; Tours Pvt. Ltd.</em>{" "}
                  (2012) 5 SCC 661, prosecuting directors without arraigning the
                  builder company itself renders the complaint maintainability-defective.
                </li>
                <li>
                  <strong>Plead Specific Section 141 Averments:</strong> We pull
                  the company&apos;s Ministry of Corporate Affairs (MCA) Master
                  Data and Form DIR-12 filings to name only active executive
                  directors and the cheque signatory, explicitly pleading that
                  they were{" "}
                  <em>
                    &ldquo;in charge of, and responsible to the company for the
                    conduct of the business of the company at the time the offence
                    was committed.&rdquo;
                  </em>{" "}
                  For a deep breakdown of director arraignment rules, read our
                  sister guide on{" "}
                  <Link
                    href="/cheque-bounce-case-against-company-directors"
                    className="text-blue-700 font-semibold underline hover:text-blue-900"
                  >
                    Cheque Bounce Case Against Company Directors (Section 141 NI
                    Act)
                  </Link>
                  .
                </li>
                <li>
                  <strong>Club Up to 12 Bounced Monthly PDCs:</strong> Under
                  Section 242 of the Bharatiya Nagarik Suraksha Sanhita, 2023
                  (formerly Section 219 CrPC) and the Supreme Court&apos;s Section
                  138 expedition directives, dishonoured assured-return cheques
                  forming part of the same transaction within a 12-month window
                  can be consolidated efficiently, and you can immediately move an
                  application under{" "}
                  <strong>Section 143A of the NI Act</strong> for{" "}
                  <strong>20% interim compensation</strong> within 60 days of the
                  directors pleading not guilty.
                </li>
              </ol>
            </section>

            {/* SECTION 4: ROUTE 3 — CIVIL SUMMARY SUIT & ARBITRATION */}
            <section
              id="heading-route-civil"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase">
                  <FileSpreadsheet className="w-3.5 h-3.5" /> Route 3 • Pure
                  Return Arrears, Form 26AS Admissions &amp; Lease Guarantees
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Forum: Commercial / Civil Court or Arbitrator • Limitation: 3
                  Years
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                4. Route 3: Order 37 CPC Summary Suit &amp; Arbitration
              </h2>

              <p className="text-slate-700 leading-relaxed mb-4">
                What if you do <strong>not</strong> want to surrender the
                commercial unit—or what if you have already taken possession and
                executed a Conveyance Deed, and the builder is now defaulting on a
                post-possession <strong>3-year Lease Guarantee</strong> or has
                accumulated ₹6 Lakh to ₹25 Lakh in unpaid assured-return arrears?
                Because UP RERA and MahaRERA routinely decline post-possession
                rental claims as purely contractual matters, your strongest
                remedies lie in Civil/Commercial litigation and Arbitration:
              </p>

              <div className="space-y-4 my-5">
                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Banknote className="w-5 h-5 text-blue-600" />
                    1. Summary Suit Under Order XXXVII CPC (Liquidated Written
                    Debt)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Because your Assured Return MoU specifies an exact monthly
                    rupee figure or fixed percentage on a defined principal sum,
                    the arrears constitute a{" "}
                    <strong>liquidated debt arising on a written contract</strong>
                    . In an{" "}
                    <Link
                      href="/law/order-37-summary-suit-money-recovery"
                      className="text-blue-700 font-semibold underline hover:text-blue-900"
                    >
                      Order XXXVII CPC Summary Suit
                    </Link>
                    , the builder has no automatic right to defend. Within{" "}
                    <strong>10 days</strong> of service of summons, the promoter
                    must apply for leave to defend—and the court ordinarily forces
                    the builder to deposit the admitted arrears in court as a
                    condition for defending the suit.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    2. The Form 26AS / Section 194A TDS Weapon (Order XII Rule 6
                    CPC)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Builders frequently book assured-return expenses in their
                    audited accounts and deposit{" "}
                    <strong>10% TDS under Section 194A</strong> of the Income Tax
                    Act against your PAN, while withholding the remaining 90% net
                    payout from your bank account. When TDS appears in your{" "}
                    <strong>Form 26AS or Annual Information Statement (AIS)</strong>
                    , the builder cannot deny liability in court. Your advocate
                    can file an application under{" "}
                    <strong>Order XII Rule 6 CPC (Judgment on Admissions)</strong>{" "}
                    for an immediate decree on the admitted amount, alongside an{" "}
                    <strong>Order XXXVIII Rule 5 CPC</strong> application for
                    attachment before judgment of the builder&apos;s bank accounts
                    and unsold inventory.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-amber-600" />
                    3. Neutralizing One-Sided Arbitration Clauses (Sections 9, 11
                    &amp; 21 A&amp;C Act)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Almost every commercial MoU contains an arbitration clause
                    allowing the builder&apos;s Managing Director to unilaterally
                    appoint a sole arbitrator. Under{" "}
                    <strong>
                      Section 12(5) read with the Seventh Schedule of the
                      Arbitration and Conciliation Act, 1996
                    </strong>{" "}
                    (and the Supreme Court judgment in{" "}
                    <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd.</em>),
                    unilateral appointment by the builder is{" "}
                    <strong>void ab initio</strong>. Our legal notice serves as a
                    formal <strong>Section 21 Notice invoking arbitration</strong>{" "}
                    proposing an independent arbitrator, while putting the builder
                    on notice of a <strong>Section 9 petition</strong> before the
                    Commercial Court to freeze project receivables.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: ROUTE 4 — CONSUMER, IBC & BUDS ACT */}
            <section
              id="heading-route-consumer-ibc"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold uppercase">
                  <Landmark className="w-3.5 h-3.5" /> Route 4 • Consumer
                  Self-Employment, NCLT IBC &amp; BUDS Act
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Forums: District/State Consumer Commission • NCLT • EOW /
                  Competent Authority
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                5. Route 4: Consumer Court &amp; NCLT Insolvency Remedies
              </h2>

              <p className="text-slate-700 leading-relaxed mb-4">
                Beyond RERA, NI Act, and Civil Courts, three specialized statutory
                frameworks apply depending on why you bought the unit and whether
                the builder&apos;s project is registered at all:
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-5 mb-2">
                A. Consumer Commission (e-Jagriti) — The Section 2(7)
                &ldquo;Self-Employment Livelihood&rdquo; Test
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Builders routinely argue that a buyer of a commercial retail shop,
                food-court kiosk, or office unit with assured returns is an
                &ldquo;investor for commercial purpose&rdquo; barred from the
                Consumer Protection Act, 2019. However, the{" "}
                <strong>Explanation to Section 2(7) of the CPA, 2019</strong>{" "}
                explicitly protects any person who buys commercial goods or avails
                services{" "}
                <em>
                  &ldquo;exclusively for the purpose of earning his livelihood, by
                  means of self-employment.&rdquo;
                </em>{" "}
                If you are a salaried employee, retiree, professional, or
                homemaker who booked one or two units to establish a personal
                office, boutique, or self-managed retirement livelihood—and Your
                Legal Notice specifically pleads this statutory foundation—you can
                file before the District or State Consumer Commission for full
                refund, assured-return compensation, and litigation costs.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-5 mb-2">
                B. NCLT Insolvency (Section 7 IBC) — The 100-Allottee / 10%
                Threshold Rule
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                In <em>Nikhil Mehta &amp; Sons (HUF) v. AMR Infrastructure Ltd.</em>{" "}
                (NCLAT, 2017) and{" "}
                <em>Pioneer Urban Land and Infrastructure Ltd. v. Union of India</em>{" "}
                (SC, 2019), courts held that assured-return agreements carry the
                &ldquo;commercial effect of borrowing&rdquo; because the builder
                guaranteed fixed time-value-of-money returns, making buyers{" "}
                <strong>Financial Creditors under Section 5(8)(f) of the IBC</strong>
                . However, following the <strong>IBC Amendment Act, 2020</strong>{" "}
                (upheld in <em>Manish Kumar v. Union of India</em>, 2021), an
                allottee of a real-estate project cannot file a standalone Section
                7 petition. You must unite{" "}
                <strong>
                  at least 100 allottees of the same project or 10% of the total
                  allottees
                </strong>{" "}
                (whichever is less) with a combined default of{" "}
                <strong>₹1 Crore or more</strong>. Our legal team helps buyer
                associations coordinate joint Section 7 demand notices.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-5 mb-2">
                C. BUDS Act, 2019 &amp; SEBI CIS Action for &ldquo;Virtual
                Space&rdquo; Schemes
              </h3>
              <p className="text-slate-700 leading-relaxed">
                When a developer collects 100% upfront money promising 12%
                assured returns and mandatory buyback on &ldquo;virtual
                non-lockable commercial space&rdquo; without a RERA registration
                number, sanctioned layout, or identifiable physical unit, the
                transaction is not a real-estate sale at all—it is an illegal
                deposit scheme. Putting the builder and its directors on formal
                legal notice under{" "}
                <strong>
                  Sections 3, 21, and 22 of the Banning of Unregulated Deposit
                  Schemes (BUDS) Act, 2019
                </strong>{" "}
                (which prescribes up to 7 years&apos; rigorous imprisonment and
                attachment of personal director assets by the Competent Authority)
                and <strong>Section 11AA of the SEBI Act, 1992</strong> (Collective
                Investment Scheme without registration) forces swift out-of-court
                settlements. If your dispute involves a bank housing loan where the
                builder stopped paying Pre-EMIs, see our dedicated guide on{" "}
                <Link
                  href="/subvention-scheme-pre-emi-builder-default"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                >
                  Subvention Scheme &amp; Pre-EMI Builder Default Legal Notice
                </Link>
                .
              </p>
            </section>

            {/* INLINE SECONDARY CTA */}
            <AssuredReturnNoticeCTA variant="secondary" />

            {/* SECTION 6: COMPARISON MATRIX */}
            <section
              id="heading-comparison-matrix"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                6. Forum &amp; Clause Comparison Matrix: Choosing Your Best Forum
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Compare all five statutory remedies side-by-side based on what you
                want to recover, whether commercial units qualify, statutory
                filing fees, and typical resolution timelines:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold border-b border-slate-700">
                        Legal Forum / Statute
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-700">
                        Best Used When
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-700">
                        What You Can Claim
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-700">
                        Commercial Unit Eligibility
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-700">
                        Filing Fee &amp; Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        State RERA Authority (Sec 12, 18 &amp; 31)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Project / OC is delayed and you want to exit with full
                        principal + interest (or pre-OC returns in HARERA)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        100% Principal Refund + SBI MCLR + 2% (~10.9%–11.15% p.a.)
                        from each payment date
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Yes — Commercial &amp; Residential allottees equally
                        covered under Sec 2(d)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ₹1,000 – ₹5,000 • 4 to 9 months + Sec 40 RC execution
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Criminal Court — Sec 138 &amp; 141 NI Act
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Monthly assured-return PDCs or buyback cheque bounced
                        within the last 30 days
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Up to 2x cheque amount fine + 20% interim relief (Sec
                        143A) + up to 2 years jail for directors
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Yes — Applies to any dishonoured cheque towards legally
                        enforceable debt
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Minimal court fee • High settlement rate within 15–60 days
                        of summons
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC Summary Suit / Arbitration
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Possession already taken, or claiming pure assured-return
                        / lease-guarantee arrears &amp; Form 26AS TDS admissions
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Full unpaid assured-return arrears + contractual/18%
                        commercial interest + bank attachment
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Yes — Ideal forum for commercial MoUs &amp; post-OC lease
                        defaults
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Ad valorem court fee (1%–4%) • 6 to 14 months for summary
                        judgment
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Consumer Commission (e-Jagriti CPA 2019)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Unit booked for self-employment / retirement livelihood;
                        project unregistered in RERA or mental agony claim
                      </td>
                      <td className="p-3.5 text-slate-700">
                        100% Principal Refund + 9%–12% interest + mental
                        harassment &amp; litigation costs
                      </td>
                      <td className="p-3.5 text-amber-800 font-semibold">
                        Conditional — Must plead Sec 2(7) Explanation
                        (self-employment for livelihood)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ₹0 up to ₹5L; ₹200–₹7,500 above • 6 to 15 months
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NCLT Insolvency (Sec 7 IBC) / BUDS Act 2019
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Mass project default (100+ buyers) OR unregistered
                        &ldquo;virtual space&rdquo; Ponzi scheme
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Ousts management via IRP (IBC) or attaches personal
                        promoter properties (BUDS Sec 21)
                      </td>
                      <td className="p-3.5 text-amber-800 font-semibold">
                        IBC needs 100/10% allottees &amp; ₹1 Cr threshold; BUDS
                        applies to individual depositors
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ₹25,000 (NCLT) / Nil (BUDS &amp; EOW complaint)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: LANDMARK COURT & RERA ORDERS DIGEST */}
            <section
              id="heading-case-digest"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Binding Judicial Precedents</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                7. Supreme Court &amp; RERA Rulings on Assured Returns
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Citing binding Supreme Court and appellate tribunal judgments
                inside your demand notice strips the builder&apos;s legal team of
                their standard template excuses:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <article className="border border-slate-200 rounded-xl p-5 bg-slate-50/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Supreme Court of India • (2021) 18 SCC 1
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP
                    &amp; Ors.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Ratio Decidendi:</strong> A three-judge bench of the
                    Supreme Court held that an allottee&apos;s right under Section
                    18(1) of RERA to demand a full refund of principal with
                    prescribed MCLR + 2% interest is{" "}
                    <strong>unconditional and absolute</strong> the moment the
                    builder fails to hand over possession by the timeline
                    stipulated in the agreement. The promoter cannot plead force
                    majeure, market slowdown, or COVID-era liquidity crunches to
                    deny the statutory refund, and RERA Authorities have full power
                    under Section 40(1) to recover the sum as arrears of land
                    revenue.
                  </p>
                </article>

                <article className="border border-slate-200 rounded-xl p-5 bg-slate-50/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Supreme Court • (2019) 8 SCC 416 &amp; NCLAT (2017)
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    Pioneer Urban Land &amp; Infrastructure Ltd. v. Union of India
                    / Nikhil Mehta &amp; Sons v. AMR Infrastructure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Ratio Decidendi:</strong> In{" "}
                    <em>Nikhil Mehta &amp; Sons</em> (Company Appeal (AT)
                    (Insolvency) No. 07 of 2017), NCLAT ruled that when a developer
                    raises funds under an Assured Return MoU promising fixed
                    monthly returns until possession and deducts TDS under Section
                    194A (&ldquo;Interest other than interest on securities&rdquo;),
                    the transaction has the{" "}
                    <strong>commercial effect of borrowing</strong>. In{" "}
                    <em>Pioneer Urban</em>, the Supreme Court affirmed that RERA,
                    the Consumer Protection Act, and the IBC are{" "}
                    <strong>concurrent and harmonious remedies</strong>.
                  </p>
                </article>

                <article className="border border-slate-200 rounded-xl p-5 bg-slate-50/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Supreme Court of India • (2020) 2 SCC 265
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    Lilavati Kirtilal Mehta Medical Trust v. Unique Shanti
                    Developers &amp; Sunil Kohli v. Pure Earth Infrastructure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Ratio Decidendi:</strong> The Supreme Court laid down
                    that merely because a property is designated &ldquo;commercial
                    shop or office space&rdquo; or carries an assured return does{" "}
                    <strong>not</strong> automatically oust Consumer Court
                    jurisdiction. What matters is the dominant nexus: if an
                    individual booked the commercial unit to earn their livelihood
                    by means of self-employment (verified in{" "}
                    <em>Sunil Kohli</em>, (2020) 12 SCC 235), they squarely fall
                    within the Explanation to Section 2(7) of the Consumer
                    Protection Act.
                  </p>
                </article>

                <article className="border border-slate-200 rounded-xl p-5 bg-slate-50/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Supreme Court of India • (2020) 10 SCC 783
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    Imperia Structures Ltd. v. Anil Patni &amp; Anr.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Ratio Decidendi:</strong> The builder argued that
                    because the project was registered under RERA, Section 79 of
                    the RERA Act barred the buyers from approaching the Consumer
                    Commission. The Supreme Court rejected this defence, holding
                    that Section 79 only bars civil courts in matters RERA is
                    empowered to decide, while Section 88 makes RERA{" "}
                    <strong>in addition to and not in derogation of</strong> other
                    laws. Allottees remain free to choose between RERA and
                    Consumer forums.
                  </p>
                </article>
              </div>
            </section>

            {/* SECTION 8: INTERACTIVE PROBLEM TABS */}
            <AssuredReturnProblemTabs />

            {/* SECTION 9: WORKED CASE STUDY */}
            <section
              id="heading-worked-example"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Real-World Calculation &amp; Recovery Strategy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                9. Case Study: Recovers ₹55L in Gurugram Builder Default
              </h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                To see how a multi-statutory legal notice works in practice,
                examine this representative computation from a commercial retail
                unit default in Sector 65, Gurugram (Haryana):
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 mb-6 border border-slate-800">
                <h3 className="text-base sm:text-lg font-bold text-amber-400 mb-4">
                  Fact Pattern &amp; Claim Ledger (Sector 65 Commercial Retail
                  Unit — 550 sq. ft. Super Area)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                  <div className="space-y-2.5">
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">
                        Upfront Consideration Paid (Down-Payment Plan):
                      </span>
                      <span className="font-bold text-white">₹55,00,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">
                        Contracted Assured Return (11% p.a. in MoU):
                      </span>
                      <span className="font-bold text-white">
                        ₹50,417 / month (₹45,375 net of 10% TDS)
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">
                        Returns Paid Before Builder Defaulted (14 Months):
                      </span>
                      <span className="font-bold text-emerald-400">
                        ₹7,05,838 (Gross)
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">
                        Unpaid Assured Return Arrears (22 Months):
                      </span>
                      <span className="font-bold text-rose-400">
                        ₹11,09,174 (incl. 6 quarters of Form 26AS TDS)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">
                        Dishonoured PDCs Held Within 3-Month Window:
                      </span>
                      <span className="font-bold text-sky-400">
                        4 Cheques × ₹45,375 = ₹1,81,500
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">
                        Agreed BBA Possession Date vs. Actual Status:
                      </span>
                      <span className="font-bold text-amber-300">
                        Delayed by 18 Months (No OC Obtained)
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">
                        RERA Sec 18 Interest (10.95% p.a. for 3 Years):
                      </span>
                      <span className="font-bold text-white">₹18,06,750</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-amber-400 font-bold">
                        Net Recoverable Claim (Principal + MCLR Interest − Paid):
                      </span>
                      <span className="font-extrabold text-amber-400 text-base">
                        ₹66,00,912
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                How the Combined Two-Pronged Notice Forced Settlement in 38 Days
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Instead of sending a polite reminder email, the allottee presented
                the 4 unexpired PDCs, collected the bank return memos, and served
                a <strong>composite statutory notice</strong>: (1) a{" "}
                <strong>15-day Section 138/141 NI Act demand</strong> on the
                company and its two active Gurugram directors for the ₹1,81,500
                bounced cheques, and (2) a{" "}
                <strong>Section 18(1) &amp; Section 12 RERA refund notice</strong>{" "}
                demanding the net ₹66,00,912 while placing the builder on notice
                of the 6 quarters of unpaid Section 194A TDS entries reflected in
                Form 26AS. Facing immediate criminal summons before the JMFC
                court in Gurugram and an indisputable RERA refund liability, the
                builder&apos;s legal department executed a registered settlement
                deed within 38 days, refunding ₹55,00,000 principal plus ₹8,25,000
                in net interest via RTGS in three tranches secured by fresh
                personal guarantee cheques.
              </p>
            </section>

            {/* SECTION 10: EVIDENCE CHECKLIST */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>Section 63 BSA, 2023 Compliance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                10. 6-Point Evidence Checklist Before Serving Your Legal Notice
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Assemble these six documents in PDF format so your advocate can
                reference exact dates, cheque numbers, and TDS acknowledgements in
                the legal notice (and certify electronic records under{" "}
                <strong>
                  Section 63 of the Bharatiya Sakshya Adhiniyam, 2023
                </strong>
                ):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold shrink-0">
                      1
                    </span>
                    Allotment Letter, BBA &amp; Assured Return MoU
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Include all annexures, buyback addendums, lease-guarantee
                    clauses, and the original marketing brochure promising fixed
                    monthly returns.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold shrink-0">
                      2
                    </span>
                    Payment Receipts &amp; Bank Account Statement
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Builder receipts plus your bank statement showing RTGS/NEFT/cheque
                    debits for the principal paid and the exact month the
                    assured-return credits stopped.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold shrink-0">
                      3
                    </span>
                    Form 26AS, AIS &amp; Form 16A TDS Certificates
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Download from the Income Tax e-Filing portal showing the
                    builder&apos;s TAN deducting TDS under Section 194A (especially
                    for quarters where net payouts were never transferred).
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold shrink-0">
                      4
                    </span>
                    Original PDCs &amp; Bank Return Memos
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Front-and-back scans of dishonoured assured-return or buyback
                    cheques and the stamped bank return memos showing the exact
                    dishonour date and reason.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold shrink-0">
                      5
                    </span>
                    State RERA Portal Project &amp; OC Status
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Screenshots from the State RERA portal showing the builder&apos;s
                    Quarterly Progress Reports (QPR), lapsed registration, or
                    absence of an Occupancy Certificate. See{" "}
                    <Link
                      href="/rera-complaint-online-state-wise"
                      className="text-blue-700 font-semibold underline"
                    >
                      State-Wise RERA Portals
                    </Link>
                    .
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold shrink-0">
                      6
                    </span>
                    Email &amp; WhatsApp Admissions / Fit-Out Demands
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Any emails from the builder&apos;s CRM team promising new
                    payout schedules, or premature &ldquo;fit-out possession&rdquo;
                    demand letters attempting to adjust arrears against CAM.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-5">
                Wondering how professional drafting fees compare across recovery
                forums? Check our transparent breakdown on{" "}
                <Link
                  href="/legal-notice-charges"
                  className="text-blue-700 font-semibold underline hover:text-blue-900"
                >
                  Legal Notice Charges in India
                </Link>
                .
              </p>
            </section>

            {/* SECTION 11: FAQS */}
            <section
              id="heading-faqs"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Buyer &amp; Investor Questions Answered</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                11. Frequently Asked Questions: Assured Return Builder Defaults
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer p-4 sm:p-5 font-bold text-slate-900 text-sm sm:text-base list-none">
                      <span>{faq.question}</span>
                      <span className="text-blue-600 group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 12: PRIMARY SOURCES */}
            <section
              id="heading-sources"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                12. Statutory Authorities &amp; Primary Sources
              </h2>
              <ol className="sources list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li>
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Real Estate (Regulation and Development) Act, 2016 — Sections
                    12, 18, 31 &amp; 40 (IndiaCode)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Negotiable Instruments Act, 1881 — Sections 138, 141 &amp;
                    143A for Dishonoured Assured-Return Cheques (IndiaCode)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/11219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Banning of Unregulated Deposit Schemes (BUDS) Act, 2019 —
                    Sections 3, 21 &amp; 22 (IndiaCode)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ibbi.gov.in/en/legal-framework/act"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Insolvency and Bankruptcy Code, 2016 — Section 5(8)(f) &amp;
                    Section 7(1) Second Proviso on Real Estate Allottees (IBBI)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://e-jagriti.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    e-Jagriti Consumer Commissions Portal — Section 2(7)
                    Explanation on Commercial Self-Employment Livelihood
                    (Department of Consumer Affairs)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ol>
            </section>

            {/* PRIMARY CTA BLOCK */}
            <AssuredReturnNoticeCTA variant="primary" />
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
      <Footer />
    </div>
  );
}
