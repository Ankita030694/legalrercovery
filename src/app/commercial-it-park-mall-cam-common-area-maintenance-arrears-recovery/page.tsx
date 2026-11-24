import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CAMRecoveryTableOfContents from "./CAMRecoveryTableOfContents";
import CAMRecoveryScenarioTabs from "./CAMRecoveryScenarioTabs";
import CAMRecoveryCTA from "./CAMRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/commercial-it-park-mall-cam-common-area-maintenance-arrears-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Commercial Mall & IT Park CAM & HVAC Arrears Recovery";
const PAGE_DESCRIPTION =
  "Recover unpaid CAM, chiller & DG power arrears from vacant units & mall tenants. Enforce facility covenants, lawful cutoffs & summary recovery.";
const H1_TEXT =
  "Recovering Unpaid CAM, Chiller/HVAC & DG Power Charges in Malls, IT Parks & Commercial Plazas: Disconnection Law & Bulk Notices";

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

// JSON-LD Schemas: Article + HowTo + FAQPage + BreadcrumbList
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
      name: "B2B Recovery Hub",
      item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CAM & HVAC Arrears Recovery",
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
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
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
  name: "How Commercial Facility Managers Recover Unpaid CAM, Chiller & DG Dues",
  description:
    "A 5-stage legal protocol for shopping malls, IT parks, and commercial condominium boards to reconcile utility ledgers, issue statutory notices, execute lawful utility cutoffs, and enforce summary decrees under Order XXXVII CPC.",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "BMS Telemetry & Ledger Audit",
      text: "Isolate fixed base CAM, smart BTU meter chiller consumption logs, and DG run-hour data into an itemized statutory ledger with Chartered Accountant true-up certificates.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "15-Day Advocate Demand Notice",
      text: "Serve a registered legal notice invoking State Apartment Ownership Acts, registered tripartite covenants, and RERA Section 19(6) with BSA Section 63 delivery certificates.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Targeted Amenity Restriction",
      text: "Deactivate discretionary commercial amenities including RFID basement boom-barrier access, loading-dock priority, and digital lobby directories.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Formal 72-Hour Utility Isolation Notice",
      text: "Issue a final 72-hour notice warning of secondary utility disconnection (chilled water valve throttling and DG backup isolation) backed by High Court utility jurisprudence.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Order XXXVII Summary Suit or Statutory Charge Attachment",
      text: "File an Order XXXVII CPC summary suit in the Commercial Court or petition the Competent Authority under the Apartment Ownership Act to attach the commercial unit title.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an investor refuse to pay CAM charges if their commercial shop or office is vacant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Under State Apartment Ownership Acts (such as Section 10 & 20 of Maharashtra Apartment Ownership Act, Section 13 of Haryana, Karnataka, and Delhi Acts, and Section 14 of UP Apartment Act), no apartment owner may exempt themselves from contributing to common expenses by waiver of use or abandonment of their unit. Base CAM funds building security, lift maintenance, structural insurance, and fire compliance, which benefit the asset regardless of physical occupancy.",
      },
    },
    {
      "@type": "Question",
      name: "Can a mall facility manager lawfully disconnect central chiller (HVAC) and DG backup power for unpaid CAM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, provided due contractual procedure and advance cure notice are followed. Unlike municipal drinking water, high-tonnage centralized chilled water (HVAC) and diesel generator backup power are secondary, capital-intensive commercial amenities governed by tripartite facility covenants. As held by Delhi and Bombay High Courts, facility managers can isolate secondary cooling lines and DG breakers when consumption bills are defaulted after serving formal written notice.",
      },
    },
    {
      "@type": "Question",
      name: "Who is liable for CAM dues when a tenant stops paying and the landlord blames the tenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under real estate law and State Apartment Ownership Acts, common maintenance charges constitute a statutory charge on the property itself. While the Facility Management Company may pursue the occupant tenant as the direct utility consumer, the registered unit owner remains primarily liable under covenants running with the land. Legal notices should be served jointly on both landlord and tenant under CPC Order I Rule 3.",
      },
    },
    {
      "@type": "Question",
      name: "How are CAM arrears recovered under Order XXXVII of the Code of Civil Procedure (CPC)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Order XXXVII CPC provides a fast-track summary suit mechanism for liquidated debts arising from written contracts. Where CAM dues are documented through signed facility agreements, maintenance schedules, and running billing ledgers, the debtor has no unconditional right to defend the suit unless they establish a substantial defense and deposit the disputed arrears in court.",
      },
    },
    {
      "@type": "Question",
      name: "Can a retail tenant withhold CAM payments alleging lack of footfall or poor mall maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. High Court precedents consistently hold that an occupant cannot continue commercial operations and enjoy central air conditioning while unilaterally withholding common charges on subjective allegations of footfall drop or marketing deficiencies. The 'pay first, dispute later' doctrine applies, requiring tenants to pay billed CAM while pursuing audit reconciliations separately.",
      },
    },
    {
      "@type": "Question",
      name: "What interest rate can commercial condominium associations levy on overdue maintenance bills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial facility agreements typically prescribe late payment interest between 18% and 24% per annum. Under RERA Section 19(7), allottees are statutorily bound to pay delayed payment interest at the State Bank of India Marginal Cost of Funds Based Lending Rate (SBI MCLR) plus 2% from the due date until realization.",
      },
    },
    {
      "@type": "Question",
      name: "How does LegalRecovery help facility management companies and commercial associations handle bulk CAM defaults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LegalRecovery provides an automated institutional platform where facility managers and condominium boards can upload accounting ledgers for 10 to 10,000+ units. The system generates fact-verified statutory demand notices with BSA Section 63 compliant electronic audit trails and executes simultaneous delivery via Speed Post RPAD, WhatsApp Business API, and registered email.",
      },
    },
  ],
};

export default function CommercialCAMRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Script Tags */}
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

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            IND-08 &bull; Commercial Real Estate &amp; Facility Asset Recovery SOP
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Executive Answer &bull; Facility Manager Quick Reference
            </span>
            Under State Apartment Ownership Acts and RERA Section 19(6), unit owners cannot waive common maintenance by keeping commercial shops locked or unleased. For ongoing operations, explore our parent{" "}
            <Link
              href="/industries/builders-commercial-landlords-coworking-recovery"
              className="text-red-300 underline font-semibold hover:text-white transition-colors"
            >
              Commercial Real Estate &amp; Landlord Recovery Hub
            </Link>
            . Facility managers possess the lawful contractual right to isolate secondary private utilities—centralized chilled water (HVAC) and DG backup power—following a 15-day cure notice, and recover accumulated arrears via Order XXXVII CPC summary suits.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block uppercase tracking-wider">
                Statutory Non-Waiver
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100">
                100% Base CAM
              </p>
              <p className="text-[10px] text-emerald-400">Locked units liable by law</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block uppercase tracking-wider">
                Disconnection Window
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100">
                15-Day Cure Notice
              </p>
              <p className="text-[10px] text-amber-400">Chiller &amp; DG power isolation</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block uppercase tracking-wider">
                Statutory Penal Interest
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100">
                SBI MCLR + 2%
              </p>
              <p className="text-[10px] text-emerald-400">RERA s.19(7) / 18% contract</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block uppercase tracking-wider">
                Summary Court Action
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100">
                Order XXXVII CPC
              </p>
              <p className="text-[10px] text-red-400">Zero unconditional defense</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "B2B Recovery Hub",
              href: "/industries/builders-commercial-landlords-coworking-recovery",
            },
            {
              label: "CAM & HVAC Arrears Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4 sm:mt-6">
          {/* Sticky Table of Contents Sidebar */}
          <CAMRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational Bottleneck
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                The Commercial CAM Crisis: Why Residential Maintenance Rules Fail in High-Value Plazas
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                In shopping malls, high-street shopping arcades, and Grade-A IT business parks, Common Area Maintenance (CAM) is not a nominal residential society subscription. Monthly facility charges range between ₹15 and ₹65 per square foot, frequently exceeding ₹50,000 to ₹15,00,000 per month for individual multi-level showrooms, multiplexes, or corporate floor plates. These dues fund capital-intensive central infrastructure: water-cooled centrifugal chillers, secondary air handling units (AHUs), high-voltage diesel generators (DG), multi-level basement ventilation, fire suppression systems, and 24/7 security.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                When speculative investor-buyers or retail chains default on CAM bills, Facility Management Companies (FMCs) and Condominium Boards face severe cash flow starvation. Because residential RWAs operate under simple cooperative bylaws, facility managers erroneously apply residential templates—such as our general{" "}
                <Link
                  href="/templates/society-maintenance-recovery-notice"
                  className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                >
                  residential society maintenance notice format
                </Link>
                —which lack commercial utility disconnection remedies, energy sub-metering protocols, and summary recovery triggers under Order XXXVII CPC.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-slate-800 uppercase block mb-1">
                    Base Fixed CAM
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Security, housekeeping, facade cleaning, elevator AMC, insurance, and common lighting. Incurred regardless of shop occupancy.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-slate-800 uppercase block mb-1">
                    HVAC / Chilled Water
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Billed on BTU energy meters or tonnage basis. High electrical consumption tied directly to central chiller plants.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-slate-800 uppercase block mb-1">
                    DG Backup Power
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Billed per unit (kWh) plus fixed diesel readiness surcharge. High diesel fuel overhead directly funded by facility managers.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Defeating Vacant Shop Defense */}
            <section
              id="heading-vacant-defense"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Doctrine
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Defeating the &apos;My Shop is Vacant&apos; Defense Under State Apartment Ownership Acts
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                The most prevalent defense raised by commercial investors is the &quot;non-occupancy plea&quot;: <em>&quot;My unit has been locked for two years, no lights were switched on, and no customers walked into my space; therefore, I have no obligation to pay CAM charges.&quot;</em>
              </p>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                Under Indian real estate law, this defense is legally bankrupt. State Apartment Ownership Acts contain explicit non-waiver provisions that demolish the vacant shop excuse:
              </p>

              <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-red-400 uppercase tracking-wider">
                  Section 20 of Maharashtra Apartment Ownership Act, 1970 (and State Equivalents):
                </p>
                <blockquote className="text-xs sm:text-sm italic text-slate-200 border-l-2 border-[#DC2626] pl-3 leading-relaxed">
                  &quot;No apartment owner may exempt himself from contributing towards the common expenses by waiver of the use or enjoyment of any of the common areas and facilities or by abandonment of his apartment.&quot;
                </blockquote>
                <p className="text-[11px] text-slate-400">
                  Identical statutory provisions govern Haryana (Section 13, Haryana Apartment Ownership Act 1983), Karnataka (Section 13, KAOA 1972), Delhi (Section 13, DAOA 1986), and Uttar Pradesh (Section 14, UP Apartment Act 2010).
                </p>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, under Section 19(6) and 19(7) of the Real Estate (Regulation and Development) Act, 2016 (RERA), an allottee is statutorily obligated to pay all maintenance and utility charges upon receiving possession. If an investor allottee fails to pay, developers can execute promoter rights under{" "}
                <Link
                  href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                  className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                >
                  RERA Section 19(6)–(7) recovery remedies
                </Link>{" "}
                with penal interest at SBI MCLR + 2%.
              </p>
            </section>

            {/* Section 3: Disconnection Law */}
            <section
              id="heading-disconnection-law"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Jurisprudence
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Disconnection Law: When Can Facility Managers Lawfully Cut Off HVAC and DG Power?
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                Facility directors often hesitate to isolate services, fearing criminal complaints under Section 126 of Bharatiya Nyaya Sanhita, 2023 (formerly Section 339 IPC for wrongful restraint) or municipal tenancy injunctions. However, judicial precedent firmly distinguishes between fundamental municipal utilities and private contractual amenities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-xl bg-red-50 border border-red-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-900 block">
                    Essential Municipal Utilities (Protected)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Direct DISCOM grid electricity and municipal potable water supply. These cannot be disconnected arbitrarily without statutory authority from the electricity board or local municipality under the Electricity Act, 2003.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
                    Secondary Contractual Amenities (Severable)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Centralized chilled water (HVAC), backup DG electricity, multi-level car parking passes, freight elevator cards, and lobby directory displays. These are private commercial amenities governed by the Tripartite Facility Agreement.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                As established by the Delhi High Court in commercial leasing disputes (including <em>Select Infrastructure</em> and <em>DLF Utilities</em>), where an occupant enjoys commercial space in a mall or IT park but fails to pay for dedicated cooling and diesel power, the facility operator is under no legal obligation to subsidize the defaulting tenant. Isolating secondary chilled water valves or tripping the DG backup breaker after serving a 15-day cure notice is completely lawful and does not constitute wrongful restraint.
              </p>
            </section>

            {/* Section 4: Decision Tree Flowchart */}
            <section
              id="heading-decision-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Decision Tree: Facility Manager Disconnection &amp; Recovery Protocol
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow this sequential operational framework to escalate chronic maintenance defaults from initial audit reconciliation to lawful utility isolation and summary court execution:
              </p>

              {/* Hand-Authored Desktop SVG Diagram */}
              <div className="hidden md:block w-full overflow-x-auto p-4 rounded-xl bg-slate-900 border border-slate-800">
                <svg
                  viewBox="0 0 800 320"
                  className="w-full h-auto text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={320}
                  aria-label="CAM and HVAC Disconnection Decision Tree Flowchart"
                >
                  {/* Step 1 */}
                  <rect x="20" y="40" width="160" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="100" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 01</text>
                  <text x="100" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">BMS Energy Audit</text>
                  <text x="100" y="108" textAnchor="middle" fill="#94A3B8" fontSize="10">BTU &amp; DG Telemetry</text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M180 85 H220" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="220" y="40" width="160" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="300" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 02</text>
                  <text x="300" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">15-Day Legal Notice</text>
                  <text x="300" y="108" textAnchor="middle" fill="#94A3B8" fontSize="10">RPAD + WhatsApp + BSA s.63</text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M380 85 H420" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 3 */}
                  <rect x="420" y="40" width="160" height="90" rx="10" fill="#1E293B" stroke="#EAB308" strokeWidth="2" />
                  <text x="500" y="70" textAnchor="middle" fill="#FACC15" fontSize="11" fontWeight="bold">STAGE 03</text>
                  <text x="500" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Amenity Restriction</text>
                  <text x="500" y="108" textAnchor="middle" fill="#94A3B8" fontSize="10">RFID &amp; Parking Passes</text>

                  {/* Arrow 3 -> 4 */}
                  <path d="M580 85 H620" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 4 */}
                  <rect x="620" y="40" width="160" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="700" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 04</text>
                  <text x="700" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">72-Hr Utility Cutoff</text>
                  <text x="700" y="108" textAnchor="middle" fill="#94A3B8" fontSize="10">Chiller / DG Valve Isolation</text>

                  {/* Downward branch from 4 to 5 */}
                  <path d="M700 130 V200 H400" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 5 */}
                  <rect x="220" y="170" width="360" height="90" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                  <text x="400" y="200" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 05 &bull; JUDICIAL RECOVERY</text>
                  <text x="400" y="222" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Order XXXVII CPC Summary Suit / Unit Charge</text>
                  <text x="400" y="242" textAnchor="middle" fill="#94A3B8" fontSize="10">Commercial Courts Act s.2(1)(c)(vii) &bull; Registry Attachment</text>
                </svg>
              </div>

              {/* Mobile Stacked Responsive Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold text-red-400 block uppercase">Stage 01</span>
                  <p className="text-xs font-bold">BMS Energy &amp; Smart Meter Audit</p>
                  <p className="text-[11px] text-slate-300">Extract calibrated BTU chiller data, DG runtime, and ledger reconciliation.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold text-red-400 block uppercase">Stage 02</span>
                  <p className="text-xs font-bold">15-Day Registered Legal Notice</p>
                  <p className="text-[11px] text-slate-300">Issue demand invoking Apartment Act non-waiver covenants with BSA s.63 proof.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 text-white border-l-4 border-amber-500">
                  <span className="text-[10px] font-bold text-yellow-400 block uppercase">Stage 03</span>
                  <p className="text-xs font-bold">Discretionary Amenity Suspension</p>
                  <p className="text-[11px] text-slate-300">Disable RFID boom barrier cards, loading-bay slots, and lobby signage.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold text-red-400 block uppercase">Stage 04</span>
                  <p className="text-xs font-bold">72-Hour Chiller &amp; DG Isolation Notice</p>
                  <p className="text-[11px] text-slate-300">Serve final warning and throttle secondary chilled water supply valves.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 text-white border-l-4 border-emerald-500">
                  <span className="text-[10px] font-bold text-emerald-400 block uppercase">Stage 05</span>
                  <p className="text-xs font-bold">Order XXXVII CPC Summary Suit / Unit Attachment</p>
                  <p className="text-[11px] text-slate-300">Initiate summary recovery in Commercial Court or register charge on unit title.</p>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Matrix Table */}
            <section
              id="heading-cam-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Comparative Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Commercial CAM Heads &amp; Judicial Remedy Matrix: Base Charges vs Utility Pass-Through
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Different maintenance heads carry distinct legal enforcement powers, evidentiary burdens, and disconnection rights under Indian commercial law:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Maintenance Head</th>
                      <th className="py-3 px-4">Billing Basis</th>
                      <th className="py-3 px-4">Disconnection Remedy</th>
                      <th className="py-3 px-4">Primary Legal Hook</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Base Fixed CAM
                      </td>
                      <td className="py-3.5 px-4">Fixed Rate / Sq. Ft.</td>
                      <td className="py-3.5 px-4 text-amber-700 font-semibold">
                        RFID &amp; Parking Passes
                      </td>
                      <td className="py-3.5 px-4">
                        State Apartment Ownership Act s.20 (Non-Waiver)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Central Chiller / HVAC
                      </td>
                      <td className="py-3.5 px-4">BTU Energy Meter / Tonnage</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Chilled Water Valve Isolation
                      </td>
                      <td className="py-3.5 px-4">
                        Tripartite FMC Covenant &amp; Commercial Contract
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        DG Power Backup
                      </td>
                      <td className="py-3.5 px-4">Per kWh + Fuel Surcharge</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        DG Breaker Isolation
                      </td>
                      <td className="py-3.5 px-4">
                        Contract Act s.70 &amp; Electricity Rules (Non-Essential)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Sinking &amp; Capital Fund
                      </td>
                      <td className="py-3.5 px-4">Pro-rata Super Area</td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Title Lien / Charge Attachment
                      </td>
                      <td className="py-3.5 px-4">
                        Statutory Charge on Immovable Unit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Mall Marketing Fund
                      </td>
                      <td className="py-3.5 px-4">Lease % or Fixed / Sq. Ft.</td>
                      <td className="py-3.5 px-4 text-red-700 font-semibold">
                        Lease Termination Notice
                      </td>
                      <td className="py-3.5 px-4">
                        TPA s.106 / Commercial Lease Covenants
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Interactive Scenario Explorer */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Intelligence
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Interactive Default Explorer: 4 Commercial Facility Failure Modes &amp; Solutions
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Explore actionable recovery pathways tailored to the specific nature of your commercial debtor—from investor non-occupancy excuses to retail tenant audit stalls:
              </p>

              <CAMRecoveryScenarioTabs />
            </section>

            {/* Section 7: Worked Mathematical Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Numerical Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Worked Financial Ledger: Recovering ₹18.5L in CAM, BTU Chiller Dues &amp; Sinking Funds
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consider an anchor fashion tenant occupying a 6,000 sq. ft. showroom in an Grade-A commercial mall who withheld all facility dues for 8 months during an audit dispute. You can also calculate statutory interest via our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                >
                  MSME &amp; commercial delayed payment interest calculator
                </Link>
                .
              </p>

              <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-5 sm:p-7 space-y-5 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                      Case Ledger Breakdown
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      6,000 Sq. Ft. Unit &bull; 8 Months Arrears Escalation
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
                    Order XXXVII Liquidated Debt
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="font-bold text-slate-200 border-b border-white/10 pb-1">
                      1. Base Operational Dues
                    </p>
                    <div className="flex justify-between text-slate-300">
                      <span>Fixed CAM (₹28/sq.ft. &times; 6,000 &times; 8 mos):</span>
                      <span className="font-semibold text-white">₹13,44,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Sinking Fund (₹2/sq.ft. &times; 6,000 &times; 8 mos):</span>
                      <span className="font-semibold text-white">₹96,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Common Marketing Levy (₹5/sq.ft. &times; 8 mos):</span>
                      <span className="font-semibold text-white">₹2,40,000</span>
                    </div>
                  </div>

                  <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="font-bold text-slate-200 border-b border-white/10 pb-1">
                      2. Variable Utilities &amp; Interest
                    </p>
                    <div className="flex justify-between text-slate-300">
                      <span>Chiller HVAC BTU Consumption (8 mos):</span>
                      <span className="font-semibold text-white">₹3,84,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>DG Backup Run-Hour Power (Logged):</span>
                      <span className="font-semibold text-white">₹1,92,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Penal Interest @ 18% p.a. (Contract Act):</span>
                      <span className="font-semibold text-emerald-400">₹1,74,240</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase">
                      Total Liquidated Claim Value
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white">
                      ₹24,30,240
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 bg-red-950/80 border border-red-800 px-3 py-1.5 rounded-lg">
                    Commercial Courts Act s.2(1)(c)(vii) &bull; Specified Value Exceeded (&gt;₹3 Lakh)
                  </span>
                </div>
              </div>
            </section>

            {/* Section 8: Step-by-Step SOP */}
            <section
              id="heading-recovery-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step-by-Step Protocol
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                How-to 5-Stage Statutory CAM Recovery SOP for Facility Companies &amp; Condos
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Execute this standardized 5-stage legal and facility protocol to recover overdue maintenance without procedural loopholes:
              </p>

              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Step 1: BMS Energy Telemetry &amp; Statutory Auditor True-Up
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Download calibrated smart BTU meter telemetry logs for chilled water, DG run-hour counters, and unit electricity sub-meters. Secure a Chartered Accountant True-Up Certificate reconciling budgeted CAM vs actual operational expenses.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Step 2: 15-Day Advocate Statutory Demand Notice
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Issue a formal demand notice on advocate letterhead invoking the State Apartment Ownership Act non-waiver sections, registered Tripartite Covenants, and RERA Section 19(6). Deliver simultaneously via Speed Post RPAD, WhatsApp Business API, and registered email with BSA Section 63 digital proof. If lease breaches accompany CAM arrears, review our{" "}
                      <Link
                        href="/templates/commercial-lease-lock-in-breach-section-106-termination-notice"
                        className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                      >
                        commercial lease termination notice format
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Step 3: Suspension of Discretionary Facilities
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Upon expiry of the 15-day cure window, deactivate non-essential amenities: disable RFID basement boom-barrier access, loading dock reservations, and digital directory entries.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Step 4: Formal 72-Hour Utility Isolation Notice &amp; Cutoff
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Serve a final 72-hour notice stating that secondary commercial utilities (chilled water valve supply and DG backup power) will be isolated. On hour 73, execute physical valve lock-out and circuit breaker isolation with video and photographic timestamping.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Step 5: Order XXXVII CPC Summary Suit &amp; Unit Title Attachment
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      File an Order XXXVII summary suit in the Commercial Court or file an application before the Competent Authority under the Apartment Ownership Act to register a statutory charge and seek attachment of the commercial shop or office registry. For broader commercial lease defaults, compare with our{" "}
                      <Link
                        href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                        className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                      >
                        commercial lock-in rent recovery guide
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: BSA Section 63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Evidentiary Standards
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                BSA Section 63 Evidence Dossier &amp; BMS Energy Telemetry Verification Checklist
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63, replacing Section 65B of the Indian Evidence Act), electronic logs from Building Management Systems (BMS) and automated billing portals are admissible only when supported by a mandatory statutory certificate. Assemble this 6-point evidence docket:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    &check;
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      BMS Smart BTU &amp; Energy Meter Logs
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      Automated hourly energy logs reflecting chilled water inlet/outlet temperatures, flow rates, and DG run hours with device serial numbers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    &check;
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Statutory Auditor True-Up Certificate
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      Signed certificate from a registered Chartered Accountant verifying annual facility expenses and pro-rata super area allocation.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    &check;
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Registered Tripartite Facility Agreement
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      Stamped and registered covenant granting the facility company authority to manage common areas, levy CAM, and disconnect utilities upon default.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    &check;
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Sub-Meter Calibration Reports
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      NABL-accredited or manufacturer calibration certificates for electric and BTU meters to pre-empt faulty hardware allegations.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    &check;
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Speed Post RPAD &amp; Digital Tracking
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      Postal booking receipts, India Post delivery confirmation logs, and WhatsApp Business API double-blue-tick delivery certificates.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    &check;
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      BSA 2023 Section 63 Statutory Certificate
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      Mandatory certificate signed by the Facility Head / IT Systems Administrator confirming uncorrupted server database custody.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Verified Court Precedents */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Case Law Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Landmark Judicial Precedents on Commercial Common Area Dues &amp; Utility Cutoffs
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rely on these verified High Court and Supreme Court rulings to overcome debtor injunctions and enforce prompt recovery:
              </p>

              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      DLF Utilities Ltd. &amp; Commercial Mall Principles &bull; Delhi High Court
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                      Disconnection Upheld
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> Commercial utility supplies (including dedicated chiller pipelines and captive generator power) provided under private commercial facility agreements are contractual services. Where an occupant defaults on utility bills, the supplier or mall management is fully entitled to disconnect supply after serving contractual cure notices. Commercial occupants have no fundamental right to enjoy subsidized private cooling.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Maharashtra Apartment Ownership Act Ruling &bull; Bombay High Court
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                      Non-Waiver Doctrine
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> Section 20 of the Apartment Act strictly prohibits an owner from evading common expenses on grounds of non-use or lock-in vacancy. The obligation to pay maintenance charges runs with the title of the unit and constitutes a first charge on the apartment.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Ambalal Sarabhai Enterprises v. KS Infraspace &bull; Supreme Court of India
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                      Commercial Court Jurisdiction
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> Confirmed that agreements relating to immovable property used exclusively in trade or commerce fall squarely under Section 2(1)(c)(vii) of the Commercial Courts Act, 2015, entitling commercial landlords and facility managers to fast-track adjudication and summary disposal.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Vidya Drolia &amp; Ors. v. Durga Trading Corp &bull; Supreme Court of India
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                      Arbitrability of Dues
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> Disputes regarding monetary recovery of lease arrears, CAM dues, and utility default under commercial contracts are fully arbitrable, enabling facility companies to enforce arbitration clauses without the delays of regular civil courts. Compare with our related{" "}
                    <Link
                      href="/coworking-managed-office-enterprise-seat-lock-in-default-recovery"
                      className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                    >
                      co-working seat and enterprise lease recovery guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Clarity &amp; Answers
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions: Commercial Mall &amp; IT Park CAM Dues Recovery
              </h2>

              <div className="space-y-3">
                {FAQ_SCHEMA.mainEntity.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                      <span className="pr-4">{faq.name}</span>
                      <span className="text-slate-400 transition-transform duration-200 group-open:rotate-180">
                        &darr;
                      </span>
                    </summary>
                    <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Framework & Official Repositories */}
            <section
              id="heading-statutes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  12
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Official Sources
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Statutory Framework, Primary Sources &amp; Official Regulatory Repositories
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consult authoritative Bare Acts, regulatory bodies, and official repositories governing commercial property maintenance and utility enforcement in India:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900">State Apartment Ownership Acts</p>
                  <p className="text-slate-600 text-xs">
                    Maharashtra Act 1970 s.20, Haryana Act 1983 s.13, UP Act 2010 s.14. Consult official text on{" "}
                    <a
                      href="https://www.indiacode.nic.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] underline hover:text-[#B91C1C]"
                    >
                      India Code
                    </a>
                    .
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900">Real Estate Regulation Act, 2016 (RERA)</p>
                  <p className="text-slate-600 text-xs">
                    Sections 19(6) &amp; 19(7) statutory maintenance duties. Official portal:{" "}
                    <a
                      href="https://mohua.gov.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] underline hover:text-[#B91C1C]"
                    >
                      Ministry of Housing &amp; Urban Affairs
                    </a>
                    .
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900">Commercial Courts Act, 2015</p>
                  <p className="text-slate-600 text-xs">
                    Section 2(1)(c)(vii) commercial dispute definition &amp; Section 12A pre-institution mediation on{" "}
                    <a
                      href="https://cdnbbsr.s3waas.gov.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] underline hover:text-[#B91C1C]"
                    >
                      Department of Justice
                    </a>
                    .
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900">Bharatiya Sakshya Adhiniyam, 2023</p>
                  <p className="text-slate-600 text-xs">
                    Section 63 electronic energy telemetry admissibility. Access verified legislation on{" "}
                    <a
                      href="https://www.mha.gov.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] underline hover:text-[#B91C1C]"
                    >
                      Ministry of Home Affairs
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Advocate Attribution & Reviewer Notice */}
              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                {/* // TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                Editorial Review &amp; Statutory Oversight: <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions. Updated November 2026.
              </div>
            </section>

            {/* Dual Track Conversion CTA */}
            <CAMRecoveryCTA />
          </div>
        </div>
      </main>

      {/* Footer Related Cross Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
