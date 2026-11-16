import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HandoverRecoveryTableOfContents from "./HandoverRecoveryTableOfContents";
import HandoverRecoveryScenarioTabs from "./HandoverRecoveryScenarioTabs";
import HandoverRecoveryCTA from "./HandoverRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/builder-society-handover-ifms-corpus-maintenance-arrears-allottee-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Post-OC Allottee Refusing Possession & CAM: RERA s.19(10)";
const PAGE_DESCRIPTION =
  "Under RERA s.19(10), allottees must take possession within 2 months of OC. Recover post-OC holding charges, CAM arrears & IFMS corpus from investors.";
const H1_TEXT =
  "Project Received OC, Yet Investor-Allottees Won't Take Possession or Pay Maintenance/IFMS? Enforcing RERA Section 19(10) Holding & CAM Dues";

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
      name: "Real Estate & Leasing Recovery Hub",
      item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Post-OC Allottee Possession & Maintenance Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: CANONICAL_URL,
  datePublished: "2026-11-16T12:00:00+05:30",
  dateModified: "2026-11-16T12:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder",
    worksFor: {
      "@type": "LegalService",
      name: "AMA Legal Solutions",
      url: "https://www.amalegalsolutions.com",
    },
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
  image: `${SITE_URL}/blog_money_recovery.png`,
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Real Estate Developers and RWAs Enforce RERA Section 19(10) Possession and CAM Arrears",
  description:
    "A 5-stage legal and operational protocol for developers and condominium associations to demand physical possession, levy holding charges, collect IFMS corpus, and recover pre-handover maintenance deficits under RERA 2016.",
  totalTime: "P60D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Post-OC Audit & Statutory Offer of Possession",
      text: "Obtain formal Occupancy Certificate from local municipal authority and serve registered Offers of Possession setting the 60-day physical handover window under RERA Section 19(10).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Ledger Reconciliation & Milestone Computation",
      text: "Itemize final completion demands, Interest-Free Maintenance Security (IFMS), advance CAM, sinking funds, and electricity meter installation dues into an audited statement.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Formal Advocate Demand Notice Under Section 19(6) & 19(10)",
      text: "Serve a comprehensive 15-day statutory demand notice warning of accrued holding charges, SBI MCLR + 2% interest under Section 19(7), and impending allotment cancellation.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Deactivation of Discretionary Amenities & Possession Hold",
      text: "Exercise promoter possessory lien, withholding interior fit-out NOCs, club membership keys, and basement RFID tags until statutory deposits are settled in full.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "RERA Section 19 Regulatory Recovery Petition",
      text: "File statutory execution applications before the Real Estate Regulatory Authority to obtain recovery certificates executable via the District Collector as arrears of land revenue.",
    },
  ],
};

const FAQS = [
  {
    question: "What is the statutory deadline for an allottee to take physical possession after OC under RERA?",
    answer:
      "Under Section 19(10) of the Real Estate (Regulation and Development) Act, 2016, every allottee is statutorily mandated to take physical possession of the apartment, plot, or building within a period of two months from the date of issuance of the Occupancy Certificate (OC) for the project.",
  },
  {
    question: "Can an allottee refuse to pay maintenance charges on the ground that the flat is lying vacant?",
    answer:
      "No. Under Section 19(6) of RERA, 2016, every allottee is legally obligated to make payments for maintenance charges, municipal taxes, electricity, and water outgoings once possession is offered. State Apartment Ownership Acts across Maharashtra, Haryana, UP, Karnataka, and Delhi strictly prohibit any owner from exempting themselves from common expense liabilities by abandoning or keeping the unit unoccupied.",
  },
  {
    question: "Are holding charges legally enforceable if an allottee delays taking possession post-OC?",
    answer:
      "Yes. The Supreme Court in Supertech Ltd. v. Rajni Goyal and Ireo Grace Realtech affirmed that once the Occupancy Certificate is issued and a lawful Offer of Possession is served, the allottee becomes liable for holding charges and common area maintenance. The promoter cannot be forced to bear continuous security, insurance, and facility upkeep costs for allottees who stall handover in bad faith.",
  },
  {
    question: "What interest rate can a developer charge on delayed post-OC maintenance and possession dues?",
    answer:
      "Under Section 19(7) of RERA, 2016 read with State RERA Rules, allottees who fail to pay timely maintenance, registration charges, or final balance installments are liable to pay statutory interest equal to the State Bank of India (SBI) highest Marginal Cost of Funds based Lending Rate (MCLR) plus two percent (2%).",
  },
  {
    question: "Who pays common maintenance costs during the gap between OC and RWA society handover?",
    answer:
      "Under Section 11(4)(g) of RERA, the promoter is responsible for outgoings until physical possession is handed over. However, for units where the promoter issued a valid Offer of Possession and the two-month statutory window under Section 19(10) expired, legal liability shifts onto the defaulting allottees under Section 19(6). The promoter is entitled to recover all maintenance deficits directly from defaulting allottees before handing over net audited accounts to the RWA.",
  },
  {
    question: "Can an allottee refuse to pay Interest-Free Maintenance Security (IFMS) before getting possession?",
    answer:
      "No. IFMS is a contractual and statutory sinking fund corpus explicitly stipulated in the Builder Buyer Agreement registered under Section 13 of RERA. Promoters collect IFMS in trust to be transferred in full to the registered Apartment Owners Association (AOA) or RWA under Section 17 upon handover. Failure to deposit IFMS entitles the developer to withhold physical keys.",
  },
  {
    question: "What legal remedy does a promoter have if an investor allottee never turns up to register the flat?",
    answer:
      "Under RERA Section 17 and Section 19(10), execution and registration of the conveyance deed is a mutual statutory duty. If an allottee persistently defaults, the promoter can issue a 30-day notice to register. If unremedied, the promoter can apply to the RERA Authority for directions to register or seek cancellation of allotment under Section 11(5) with statutory forfeiture, or recover holding costs and municipal tax reimbursements.",
  },
  {
    question: "How does LegalRecovery assist developers with high volumes of defaulting post-OC units?",
    answer:
      "LegalRecovery provides a dedicated dual-track institutional recovery desk. Developers can test a single defaulting allottee for ₹999 or upload bulk CSV portfolios of 50 to 5,000+ units. Our legal team drafts advocate notices under Section 19(10) and 19(6), executes verified multi-channel dispatches (Speed Post RPAD, email, WhatsApp) under BSA 2023 Section 63, and prepares batch Section 19 recovery certificate petitions.",
  },
];

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

const STATUTORY_HEADS = [
  {
    head: "Common Area Maintenance (CAM)",
    statutoryBasis: "RERA 2016 s.19(6) & State Apartment Acts",
    applicability: "From expiry of 2-month post-OC offer of possession period",
    enforceability: "Mandatory statutory charge; cannot be waived by non-occupancy",
    interestRate: "SBI Highest MCLR + 2% per annum",
  },
  {
    head: "Holding / Custodial Charges",
    statutoryBasis: "Builder Buyer Agreement read with SC Supertech Doctrine",
    applicability: "Accrues daily/monthly from 61st day post-OC until physical key handover",
    enforceability: "Recoverable as liquidated damages for unit preservation and security",
    interestRate: "Standard contractual rate (typically ₹5 to ₹10 per sq. ft. per month)",
  },
  {
    head: "Interest-Free Maintenance Security (IFMS)",
    statutoryBasis: "RERA 2016 s.13 & s.17 Handover Trust Covenants",
    applicability: "Payable prior to physical possession for transfer to RWA corpus",
    enforceability: "Mandatory pre-condition; key release strictly conditional on deposit",
    interestRate: "Deposit held in dedicated escrow trust account",
  },
  {
    head: "Municipal Property Tax & Water Outgoings",
    statutoryBasis: "RERA 2016 s.19(6) Statutory Apportionment",
    applicability: "Billed on unit pro-rata from date of possession readiness",
    enforceability: "Statutory reimbursement; promoter indemnified against local body liens",
    interestRate: "Actual local municipal authority penal surcharge rates",
  },
  {
    head: "Conveyance Deed Stamp & Registration Deficits",
    statutoryBasis: "RERA 2016 s.17 & s.19(10) Mutual Title Obligations",
    applicability: "Within 3 months of OC issuance or handover readiness",
    enforceability: "Enforceable via RERA specific performance or Section 11(5) termination",
    interestRate: "State stamp duty delay penalty plus legal administration fees",
  },
];

const PRECEDENTS = [
  {
    title: "Supreme Court on Allottee Liability for Maintenance Post-Occupancy Certificate",
    citation: "Supertech Ltd. v. Rajni Goyal, (2019) 17 SCC 681",
    bench: "Supreme Court of India",
    coreHolding:
      "The Supreme Court held that once the Occupancy Certificate is obtained by the builder and an offer of possession is communicated to the buyer, the builder cannot be saddled with compensation or maintenance obligations. From the date the flat is made ready and possession is offered, the allottee becomes legally liable to pay common maintenance charges and electricity outgoings.",
    developerTakeaway:
      "Establishes a firm judicial cutoff: once OC is obtained and possession offered, the maintenance deficit cannot be shifted onto the developer, even if the allottee deliberately refuses or delays physical handover.",
  },
  {
    title: "Supreme Court on Unconditional Obligation to Take Possession Post-OC",
    citation: "Ireo Grace Realtech Pvt. Ltd. v. Abhishek Khurana & Ors., (2021) 3 SCC 241",
    bench: "Supreme Court of India",
    coreHolding:
      "A three-judge bench ruled that allottees in towers where the Occupancy Certificate has been issued by the competent authority are legally obligated to take possession of their apartments and clear pending milestone demands. Allottees cannot seek exit, full refund, or evade contractual completion payments once the project is certified habitable.",
    developerTakeaway:
      "Completely eliminates speculative investor exit strategies; buyers must pay final demands, discharge IFMS corpus, and take physical possession under RERA Section 19(10).",
  },
  {
    title: "Enforceability of Holding Charges on Defaulting Allottees",
    citation: "DLF Home Developers Ltd. v. Capital Greens Flat Buyers Association, (2021) 5 SCC 537",
    bench: "Supreme Court of India",
    coreHolding:
      "The Supreme Court reviewed promoter entitlements regarding holding charges and club facility costs, affirming that where delays in taking possession are solely attributable to the allottee failing to pay final dues or complete registration formalities, holding charges are legitimate custodial costs incurred by the promoter to safeguard and maintain the asset.",
    developerTakeaway:
      "Validates holding charges as contractual custodial reimbursements when allottees intentionally stall physical inspection or conveyance deed execution.",
  },
  {
    title: "RERA Regulatory Precedent on Section 19(10) Possession Compliance",
    citation: "Praveen Chhabra v. Real Estate Regulatory Authority, HRERA Panchkula (2022)",
    bench: "Real Estate Regulatory Authority (Appellate / Adjudicating Bench)",
    coreHolding:
      "The Authority held that Section 19(10) is a mandatory statutory command requiring allottees to take physical possession within 60 days of OC. If an allottee defaults without lawful justification, the promoter is entitled to levy holding charges, claim statutory interest under Section 19(7), and recover maintenance arrears.",
    developerTakeaway:
      "Provides direct statutory grounding before State RERA Authorities to obtain enforceable recovery certificates for holding dues and CAM arrears against defaulting investors.",
  },
];

export default function BuilderSocietyHandoverRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Real Estate & Leasing Recovery Hub",
      href: "/industries/builders-commercial-landlords-coworking-recovery",
    },
    {
      label: "Post-OC Allottee Possession & CAM Recovery",
      href: PAGE_URL,
    },
  ];

  return (
    <>
      {/* Structured JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>RERA 2016 § 19(10) &bull; § 19(6)</span>
              <span className="text-red-500">&bull;</span>
              <span>Post-OC Holding Dues</span>
              <span className="text-red-500">&bull;</span>
              <span>Society Handover Protocol</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div
              aria-label="Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Statutory RERA Command
              </span>
              <p>
                Under Section 19(10) of the Real Estate (Regulation and Development) Act, 2016, every
                allottee is statutorily obligated to take physical possession within two months of
                the Occupancy Certificate (OC). Once the offer of possession is served, Section 19(6)
                mandates prompt payment of common area maintenance (CAM), municipal outgoings, and
                Interest-Free Maintenance Security (IFMS). For comprehensive guidance across all real estate
                and leasing recovery corridors, consult our{" "}
                <Link
                  href="/industries/builders-commercial-landlords-coworking-recovery"
                  className="text-red-400 font-bold underline hover:text-red-300"
                >
                  Real Estate Developers, Builders &amp; Landlords Recovery Hub
                </Link>
                . Speculative investors stalling handover face contractual holding charges, SBI MCLR + 2%
                penal interest under Section 19(7), and regulatory recovery execution under Section 19.
              </p>
            </div>

            {/* 4 Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">60 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  RERA s.19(10) Mandatory Handover Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% CAM</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Non-Waivable Maintenance from Offer Date
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">MCLR + 2%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Statutory Penal Interest under s.19(7)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Order 21</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Recovery Certificate via District Collector
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <HandoverRecoveryTableOfContents />

            {/* Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Statutory Mandate */}
              <section
                id="heading-statutory-mandate"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    The 2-Month Statutory Command: Deciphering RERA Section 19(10)
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    How Parliament Balanced Allottee Protection with Promoter Operational Rights
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When the Real Estate (Regulation and Development) Act, 2016 was enacted, industry
                    discussions focused overwhelmingly on promoter compliance under Section 11, Section
                    14, and Section 18 delay interest. However, Section 19 codifies the mandatory statutory
                    duties of allottees, creating an enforceable legal regime designed to prevent project
                    paralysis post-completion.
                  </p>
                  <p>
                    Central to this statutory architecture is <strong>Section 19(10)</strong>, which
                    stipulates in unambiguous terms that every allottee <em>shall</em> take physical
                    possession of their apartment, plot, or building within a period of two months from the
                    issuance of the Occupancy Certificate (OC). The use of the word &ldquo;shall&rdquo; denotes a
                    strict statutory command rather than a directory suggestion.
                  </p>
                  <p>
                    This provision operates hand-in-hand with <strong>Section 19(6)</strong>, which makes
                    every buyer statutorily responsible to make all payments specified in the registered
                    Builder Buyer Agreement (BBA) at the proper time and place, specifically including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-800">
                    <li>Registration charges and stamp duty costs for the conveyance deed</li>
                    <li>Municipal and local authority property taxes and development charges</li>
                    <li>Water, sewerage, and electricity meter infrastructure installation costs</li>
                    <li>Common Area Maintenance (CAM) charges from the date of handover readiness</li>
                    <li>Interest-Free Maintenance Security (IFMS) and sinking fund contributions</li>
                  </ul>
                  <p>
                    Under <strong>Section 19(7)</strong>, failure to clear these dues triggers statutory penal
                    interest at the prescribed rate—consistently codified across State RERA Rules as the
                    State Bank of India (SBI) highest MCLR plus 2.00% per annum.
                  </p>
                </div>
              </section>

              {/* Section 2: Investor Speculator Crisis */}
              <section
                id="heading-investor-speculator-crisis"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    The Speculative Investor Crisis: Why Handover Deficits Threaten Developers
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    How Unoccupied Units Create Multi-Crore Facility Gaps Before Society Handover
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    In metropolitan high-rise projects across NCR, MMR, Bengaluru, Hyderabad, and Pune,
                    between 20% and 40% of residential units in large complexes are acquired not by end-users,
                    but by speculative investors and HNIs. These investors frequently book units under
                    subvention or construction-linked plans with the sole commercial objective of exiting via
                    resale prior to registration.
                  </p>
                  <p>
                    Once the promoter secures the Occupancy Certificate and issues the formal Offer of
                    Possession, the investor faces an acute financial dilemma: taking physical possession and
                    registering the conveyance deed requires paying 5%–7% state stamp duty, 1% registration fee,
                    ₹2.5L–₹5L in IFMS corpus, and ongoing monthly CAM charges of ₹6,000–₹18,000 per unit.
                  </p>
                  <p>
                    To avoid these cash outflows while searching for resale buyers, speculative investors adopt
                    systematic bad-faith delay tactics:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="bg-red-50/70 border border-red-200 p-3.5 rounded-xl">
                      <span className="text-xs font-bold text-red-900 block mb-1">
                        Cosmetic Snag-List Weaponization
                      </span>
                      <p className="text-xs text-red-800 leading-relaxed">
                        Submitting repetitive lists of hairline tile cracks, paint touch-ups, or minor
                        hardware adjustments as legal pretexts to refuse key handover, claiming the flat is
                        &ldquo;not habitable&rdquo; despite a valid statutory OC.
                      </p>
                    </div>
                    <div className="bg-red-50/70 border border-red-200 p-3.5 rounded-xl">
                      <span className="text-xs font-bold text-red-900 block mb-1">
                        Resale Assignment Pressure
                      </span>
                      <p className="text-xs text-red-800 leading-relaxed">
                        Demanding developer CRM teams process tripartite assignment or nomination transfers
                        without paying accumulated CAM arrears, holding charges, or administrative transfer
                        fees.
                      </p>
                    </div>
                    <div className="bg-red-50/70 border border-red-200 p-3.5 rounded-xl">
                      <span className="text-xs font-bold text-red-900 block mb-1">
                        Pre-RWA Handover Blackmail
                      </span>
                      <p className="text-xs text-red-800 leading-relaxed">
                        Waiting for the ad-hoc RWA to take over society management under RERA Section 17,
                        gambling that incoming committee members will waive historical developer holding dues
                        or fail to litigate past arrears.
                      </p>
                    </div>
                    <div className="bg-red-50/70 border border-red-200 p-3.5 rounded-xl">
                      <span className="text-xs font-bold text-red-900 block mb-1">
                        Stamp Duty &amp; Registry Evasion
                      </span>
                      <p className="text-xs text-red-800 leading-relaxed">
                        Refusing to register sub-lease deeds, exposing the developer SPV to ongoing municipal
                        property tax audits, civic assessments, and regulatory show-cause notices.
                      </p>
                    </div>
                  </div>
                  <p>
                    Because promoters must keep common utilities running 24/7 (diesel generators, sewage
                    treatment plants, elevators, security, perimeter lighting), uncollected CAM from 100
                    defaulting units can saddle the developer facility arm with ₹1.5 to ₹3.5 Crores in annual
                    operating deficits. For related notice workflows, see our{" "}
                    <Link
                      href="/templates/society-maintenance-recovery-notice"
                      className="text-red-600 font-bold underline hover:text-red-700"
                    >
                      Society Maintenance Recovery Notice Template
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                      className="text-red-600 font-bold underline hover:text-red-700"
                    >
                      RERA Section 19 Builder Recovery Guide
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 3: Landmark Court Precedents */}
              <section
                id="heading-court-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Verified Supreme Court &amp; Regulatory Precedents on Post-OC Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Judicial Holdings Affirming Promoter Rights to Maintenance, Holding Dues &amp; Enforcement
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/60 hover:bg-slate-50 transition-colors border-l-4 border-l-[#DC2626]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-extrabold text-sm sm:text-base text-slate-900">
                          {item.title}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-bold text-[11px]">
                          {item.bench}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-red-600 mb-2">{item.citation}</p>
                      <p className="text-slate-700 mb-2.5 leading-relaxed">{item.coreHolding}</p>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-0.5">
                          Institutional Developer Impact
                        </span>
                        <p className="text-xs font-semibold text-slate-800">{item.developerTakeaway}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: 5-Stage Escalation Protocol */}
              <section
                id="heading-escalation-flow"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    The 5-Stage Statutory Escalation Protocol: From Offer to Execution
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Standard Operating Procedure (SOP) for Real Estate Developer Legal &amp; CRM Teams
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="space-y-1">
                      <span className="font-extrabold text-slate-900 text-sm block">
                        Stage 1: Statutory Offer of Possession Notice (Day 0 &ndash; Day 15)
                      </span>
                      <p className="text-slate-600">
                        Immediately upon receipt of the Occupancy Certificate, serve the registered Offer of
                        Possession via Speed Post RPAD and email. Clearly cite RERA Section 19(10), establishing
                        the mandatory 60-day physical takeover deadline, and enclose the audited statement of
                        final account.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="space-y-1">
                      <span className="font-extrabold text-slate-900 text-sm block">
                        Stage 2: Joint Inspection &amp; Habitation Certificate (Day 16 &ndash; Day 45)
                      </span>
                      <p className="text-slate-600">
                        Offer a structured 30-day window for pre-handover joint inspection. Record all punch-list
                        items on a standardized tri-partite snag sheet. Where the allottee fails to attend or
                        demands unreasonable alterations, complete an engineer-certified Habitation Affidavit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="space-y-1">
                      <span className="font-extrabold text-slate-900 text-sm block">
                        Stage 3: Day-61 Expiry Notice &amp; Holding Charge Levying (Day 61 &ndash; Day 75)
                      </span>
                      <p className="text-slate-600">
                        Upon expiry of the 2-month statutory window under Section 19(10), issue a formal legal
                        intimation confirming that deemed possession has arisen. Automatically bill ongoing monthly
                        CAM, municipal tax proportions, and contractual holding charges, with Section 19(7) interest.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                      4
                    </span>
                    <div className="space-y-1">
                      <span className="font-extrabold text-slate-900 text-sm block">
                        Stage 4: 15-Day Advocate Statutory Demand Notice (Day 76 &ndash; Day 90)
                      </span>
                      <p className="text-slate-600">
                        Deploy an advocate legal demand notice under Advocates Act 1961 on legal letterhead.
                        Deliver via Speed Post RPAD, WhatsApp, and registered email with BSA 2023 Section 63 digital
                        certificates, notifying the buyer of allotment termination risk under Section 11(5).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                      5
                    </span>
                    <div className="space-y-1">
                      <span className="font-extrabold text-slate-900 text-sm block">
                        Stage 5: RERA Section 19 Enforcement &amp; Recovery Certificate (Day 91+)
                      </span>
                      <p className="text-slate-600">
                        File execution applications before the Real Estate Regulatory Authority under Section 19
                        read with Section 40. Secure a Recovery Certificate directed to the District Collector to
                        attach bank accounts or execute the claim as arrears of land revenue.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Decision Tree Flowchart */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Decision Tree: Post-OC Allottee Non-Responsive Default Protocol
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Visual Strategy Engine for Developer CRM &amp; Litigation Desks
                  </p>
                </div>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner">
                  <svg
                    viewBox="0 0 900 480"
                    width="900"
                    height="480"
                    className="w-full h-auto"
                    aria-label="Post-OC Allottee Recovery Decision Tree Flowchart"
                  >
                    <defs>
                      <linearGradient id="boxGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="boxGradSlate" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="boxGradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#047857" />
                      </linearGradient>
                      <marker
                        id="arrow"
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
                      </marker>
                    </defs>

                    {/* Step 1: OC Received */}
                    <rect x="30" y="30" width="220" height="70" rx="10" fill="url(#boxGradSlate)" stroke="#475569" strokeWidth="1.5" />
                    <text x="140" y="60" fill="#F8FAFC" fontSize="13" fontWeight="bold" textAnchor="middle">1. OC Obtained &amp; Offer Sent</text>
                    <text x="140" y="80" fill="#94A3B8" fontSize="11" textAnchor="middle">RERA s.19(10) 60-Day Clock Starts</text>

                    {/* Arrow 1 to 2 */}
                    <line x1="250" y1="65" x2="330" y2="65" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 2: 60-Day Expiry Check */}
                    <polygon points="450,20 570,65 450,110 330,65" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
                    <text x="450" y="60" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Has Allottee Taken</text>
                    <text x="450" y="76" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">Possession in 60d?</text>

                    {/* Path Yes: Physical Handover */}
                    <line x1="570" y1="65" x2="680" y2="65" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
                    <rect x="680" y="30" width="190" height="70" rx="10" fill="url(#boxGradEmerald)" stroke="#059669" strokeWidth="1.5" />
                    <text x="775" y="60" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Yes: Standard Handover</text>
                    <text x="775" y="80" fill="#E2E8F0" fontSize="11" textAnchor="middle">Collect IFMS, Keys &amp; Sub-Lease</text>

                    {/* Path No: Possession Default */}
                    <line x1="450" y1="110" x2="450" y2="180" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
                    <text x="465" y="145" fill="#EF4444" fontSize="11" fontWeight="bold">NO: Default</text>

                    {/* Step 3: Deemed Possession & Holding Dues */}
                    <rect x="330" y="180" width="240" height="75" rx="10" fill="url(#boxGradSlate)" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="450" y="210" fill="#F8FAFC" fontSize="13" fontWeight="bold" textAnchor="middle">2. Invoke Deemed Possession</text>
                    <text x="450" y="228" fill="#FCA5A5" fontSize="11" textAnchor="middle">Bill Holding Dues + CAM + s.19(7)</text>
                    <text x="450" y="244" fill="#94A3B8" fontSize="10" textAnchor="middle">Supreme Court Supertech Doctrine</text>

                    {/* Arrow 3 to 4 */}
                    <line x1="450" y1="255" x2="450" y2="310" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 4: 15-Day Advocate Notice */}
                    <rect x="330" y="310" width="240" height="75" rx="10" fill="url(#boxGradRed)" stroke="#B91C1C" strokeWidth="1.5" />
                    <text x="450" y="340" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">3. 15-Day Advocate Notice</text>
                    <text x="450" y="358" fill="#FEE2E2" fontSize="11" textAnchor="middle">Tri-Channel: Post + WhatsApp + Email</text>
                    <text x="450" y="374" fill="#FEE2E2" fontSize="10" textAnchor="middle">Warn of s.11(5) Allotment Cancellation</text>

                    {/* Split: Paid vs Unpaid */}
                    <line x1="330" y1="347" x2="220" y2="347" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
                    <rect x="30" y="315" width="190" height="65" rx="10" fill="url(#boxGradEmerald)" stroke="#059669" strokeWidth="1.5" />
                    <text x="125" y="345" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Settles Dues &amp; Takes Keys</text>
                    <text x="125" y="363" fill="#E2E8F0" fontSize="10" textAnchor="middle">Full Recovery Achieved</text>

                    <line x1="570" y1="347" x2="680" y2="347" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
                    <rect x="680" y="315" width="190" height="65" rx="10" fill="url(#boxGradSlate)" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="775" y="343" fill="#FCA5A5" fontSize="12" fontWeight="bold" textAnchor="middle">Still Stalling / Unresponsive</text>
                    <text x="775" y="361" fill="#94A3B8" fontSize="10" textAnchor="middle">Proceed to Twin Remedies</text>

                    {/* Downward from Still Stalling to Step 5 */}
                    <line x1="775" y1="380" x2="775" y2="415" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                    <rect x="580" y="415" width="300" height="50" rx="8" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
                    <text x="730" y="437" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">RERA s.19 Execution / District Collector RC</text>
                    <text x="730" y="453" fill="#94A3B8" fontSize="10" textAnchor="middle">OR s.11(5) Cancellation &amp; Earnest Forfeiture</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3 pt-2">
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Step 1 &bull; Day 0 to 60
                    </span>
                    <p className="font-bold text-sm mb-1">OC Receipt &amp; Offer of Possession</p>
                    <p className="text-xs text-slate-300">
                      Serve formal notice citing RERA Section 19(10). The allottee has 60 statutory days to complete
                      inspections, settle final demands, and take physical possession.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      Step 2 &bull; Day 61 Onward
                    </span>
                    <p className="font-bold text-sm mb-1">Deemed Possession &amp; Holding Dues</p>
                    <p className="text-xs text-slate-300">
                      If the buyer stalls, invoke deemed possession under the Supertech doctrine. Automatically
                      bill contractual holding charges, CAM dues, and SBI MCLR + 2% interest under Section 19(7).
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      Step 3 &bull; Day 75 to 90
                    </span>
                    <p className="font-bold text-sm mb-1">15-Day Advocate Demand Notice</p>
                    <p className="text-xs text-slate-300">
                      Issue advocate notice via Speed Post RPAD, email, and WhatsApp with BSA Section 63 delivery
                      proof, warning of allotment cancellation under Section 11(5).
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Step 4 &bull; Day 91+
                    </span>
                    <p className="font-bold text-sm mb-1">RERA Regulatory Execution</p>
                    <p className="text-xs text-slate-300">
                      Petition RERA for a Section 19 Recovery Certificate executable via the District Collector, or
                      terminate the contract and forfeit permissible earnest money under RERA guidelines.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Statutory Liability Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Liability Matrix: Recoverable Post-OC Heads &amp; Forums
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Comparative Breakdown of Recoverable Outgoings from Stalling Allottees
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-3.5 font-bold rounded-tl-lg">Recoverable Head</th>
                        <th className="p-3 sm:p-3.5 font-bold">Statutory Authority</th>
                        <th className="p-3 sm:p-3.5 font-bold">Applicability Window</th>
                        <th className="p-3 sm:p-3.5 font-bold">Enforcement Strength</th>
                        <th className="p-3 sm:p-3.5 font-bold rounded-tr-lg">Statutory Rate / Quantum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {STATUTORY_HEADS.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                          <td className="p-3 sm:p-3.5 font-bold text-slate-900">{item.head}</td>
                          <td className="p-3 sm:p-3.5 text-slate-600">{item.statutoryBasis}</td>
                          <td className="p-3 sm:p-3.5 text-slate-600">{item.applicability}</td>
                          <td className="p-3 sm:p-3.5">
                            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                              {item.enforceability}
                            </span>
                          </td>
                          <td className="p-3 sm:p-3.5 font-semibold text-slate-900">{item.interestRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28 space-y-4">
                <HandoverRecoveryScenarioTabs />
              </section>

              {/* Section 8: Worked Financial Ledger */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Financial Ledger: Recovering Holding Dues &amp; Arrears on 3-BHK Unit
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Empirical Calculation Illustrating 14 Months of Post-OC Investor Possession Default
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Consider an investor who purchased a 1,850 sq. ft. luxury apartment in Gurugram / Noida for
                    ₹1.65 Crores. The developer received the Occupancy Certificate on 15 September 2025 and served
                    the registered Offer of Possession on 20 September 2025. The statutory 60-day window under
                    Section 19(10) expired on 19 November 2025. For the subsequent 14 months, the allottee failed
                    to clear the final demand, deposit IFMS, or register the sub-lease deed.
                  </p>

                  {/* Financial Breakdown Ledger */}
                  <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-4 font-mono text-xs sm:text-sm">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Unit Super Area</span>
                      <span className="font-bold text-slate-100">1,850 Sq. Ft.</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Offer of Possession Statutory Grace Expiry</span>
                      <span className="font-bold text-slate-100">19 November 2025 (Day 60)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Final Milestone Completion Demand (5% Base Price)</span>
                      <span className="font-bold text-slate-100">₹8,25,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Interest-Free Maintenance Security (IFMS @ ₹150/sq.ft.)</span>
                      <span className="font-bold text-slate-100">₹2,77,500</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">
                        Monthly Base CAM Arrears (14 mos @ ₹4.50/sq.ft. = ₹8,325/mo)
                      </span>
                      <span className="font-bold text-slate-100">₹1,16,550</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">
                        Contractual Holding Charges (14 mos @ ₹5.00/sq.ft. = ₹9,250/mo)
                      </span>
                      <span className="font-bold text-slate-100">₹1,29,500</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">
                        Municipal Property Tax Reimbursement (Pro-rata 14 mos)
                      </span>
                      <span className="font-bold text-slate-100">₹42,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">
                        RERA Section 19(7) Penal Interest (SBI MCLR 8.75% + 2% = 10.75% p.a.)
                      </span>
                      <span className="font-bold text-amber-400">₹1,18,740</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 text-sm sm:text-base font-bold bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="text-emerald-400">TOTAL RECOVERABLE POST-OC CLAIM</span>
                      <span className="text-emerald-400">₹15,09,290</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    Note: If the developer SPV is managing 50 similar defaulting investor units across two towers,
                    the aggregate locked capital represents over ₹7.54 Crores, illustrating why proactive Section
                    19(10) legal escalation is critical to project cash flow and pre-RWA handover balance sheet
                    clearing.
                  </p>
                </div>
              </section>

              {/* Section 9: BSA 2023 Section 63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    BSA 2023 Section 63 Evidence Dossier &amp; Possession Audit Trail
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Mandatory Digital &amp; Physical Evidence to Secure RERA Recovery Certificates
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), electronic records, automated
                    CRM dispatch logs, and postal tracking receipts must be accompanied by a statutory electronic
                    certificate to be admissible in evidence before RERA Authorities or Civil Courts.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        1. Certified Occupancy Certificate
                      </span>
                      <p className="text-xs text-slate-600">
                        True copy of the OC issued by the DTCP, Municipal Corporation, or Development Authority,
                        verifying that the specific unit and tower are formally declared habitable.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        2. Offer of Possession Notice &amp; Postal Barcode
                      </span>
                      <p className="text-xs text-slate-600">
                        Original India Post Speed Post RPAD consignment booking receipt and electronic delivery
                        confirmation showing service at the buyer&apos;s registered address.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        3. BSA Section 63 Electronic Certificate
                      </span>
                      <p className="text-xs text-slate-600">
                        Affidavit from the developer&apos;s IT head or CRM administrator certifying the integrity of
                        email delivery server headers and WhatsApp Business API message delivery hashes.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        4. Chartered Accountant Maintenance True-Up
                      </span>
                      <p className="text-xs text-slate-600">
                        Statutory auditor certificate confirming actual common area operational expenditure (OPEX)
                        incurred on elevators, STP, security, and common electricity during the post-OC period.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        5. Registered Builder Buyer Agreement (BBA)
                      </span>
                      <p className="text-xs text-slate-600">
                        Executed agreement highlighting Section 13 covenants, holding charge clauses, IFMS
                        collection obligations, and Section 19(7) interest agreements.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        6. Joint Snag Sheet / Habitation Affidavit
                      </span>
                      <p className="text-xs text-slate-600">
                        Project engineer inspection log confirming unit completion or recording allottee&apos;s failure
                        to attend the scheduled joint handover walk-through.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: RWA Handover Protocol */}
              <section
                id="heading-rwa-handover-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Clean RWA Handover Protocol: Segregating Builder vs Allottee Deficits
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    How Developers Execute Seamless Society Transfers Without Assuming Third-Party Debts
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Under Section 17 of RERA, 2016, the promoter must execute a registered conveyance deed in favour
                    of the association of allottees (RWA / AOA) within three months of receiving the Occupancy
                    Certificate and hand over the common areas. In practice, handover talks frequently deadlock when
                    the incoming RWA discovers significant deficits in the maintenance account.
                  </p>
                  <p>
                    To prevent costly litigation and reputational friction, developers must implement a three-pillar
                    Handover Protocol:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-800">
                    <li>
                      <strong>Separate Promoter Capital Works from Facility OPEX:</strong> Commission an
                      independent third-party Chartered Accountant audit clearly separating the promoter&apos;s
                      statutory defect liability works under Section 14(3) from operational utility and staff
                      expenses.
                    </li>
                    <li>
                      <strong>Ring-Fence IFMS Funds in Dedicated Escrow:</strong> Maintain all collected IFMS
                      deposits in an earmarked bank account, transferring 100% of collected corpus plus accrued
                      bank interest directly to the RWA against an official acknowledgement.
                    </li>
                    <li>
                      <strong>Execute Deed of Assignment for Arrears:</strong> Rather than absorbing the deficits of
                      stalling investors, execute a formal tripartite Assignment Agreement wherein the developer
                      either retains direct locus standi to prosecute Section 19 recovery certificates against
                      unpaid units or assigns actionable debt claims to the RWA with shared recovery proceeds.
                    </li>
                  </ol>
                  <p>
                    If tenants or licensees are involved, review our guidelines on{" "}
                    <Link
                      href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                      className="text-red-600 font-bold underline hover:text-red-700"
                    >
                      Tenant Unpaid Rent Eviction
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/send-a-legal-notice/recover-money-from-tenant-who-damaged-property"
                      className="text-red-600 font-bold underline hover:text-red-700"
                    >
                      Recovering Property Damage from Occupiers
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: RERA Section 19(10) Possession &amp; Maintenance Arrears
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Statutory Clarifications for Real Estate Developers, Asset Managers &amp; Condominium Boards
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/50 open:bg-white transition-all"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                          &darr;
                        </span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Primary Statutory Authorities &amp; Legislative Framework
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Bare-Act Provisions Governing Post-OC Allottee Duties &amp; Recovery
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-red-600">&bull;</span>
                    <span>
                      <strong>The Real Estate (Regulation and Development) Act, 2016 (Sections 11, 13, 14, 17, 18, 19 &amp; 40)</strong> &mdash;{" "}
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2158"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-600 underline font-semibold hover:text-red-700"
                      >
                        India Code Legislative Repository
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-red-600">&bull;</span>
                    <span>
                      <strong>State Apartment Ownership Acts</strong> (Maharashtra Apartment Ownership Act 1970 s.10/20, Haryana Apartment Ownership Act 1983 s.13, UP Apartment Act 2010 s.14) &mdash; Mandatory Non-Waiver of Common Expenses
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-red-600">&bull;</span>
                    <span>
                      <strong>Bharatiya Sakshya Adhiniyam, 2023 (Section 63)</strong> &mdash; Electronic Records &amp; Digital Certificate Standards for Postal and Messaging Proof &mdash;{" "}
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/21735"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-600 underline font-semibold hover:text-red-700"
                      >
                        India Code Official Text
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-red-600">&bull;</span>
                    <span>
                      <strong>Code of Civil Procedure, 1908 (Order XXI &amp; Order XXXVII)</strong> &mdash; Execution of Money Decrees and Summary Enforcement Against Allottee Balances
                    </span>
                  </li>
                </ul>
              </section>

              {/* Dual-Track Conversion CTA */}
              <HandoverRecoveryCTA />
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
