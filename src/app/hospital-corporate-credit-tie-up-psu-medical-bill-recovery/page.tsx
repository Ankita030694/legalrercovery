import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HospitalCorporateTableOfContents from "./HospitalCorporateTableOfContents";
import HospitalCorporateScenarioTabs from "./HospitalCorporateScenarioTabs";
import HospitalCorporateCTA from "./HospitalCorporateCTA";

export const revalidate = 86400;

const PAGE_URL = "/hospital-corporate-credit-tie-up-psu-medical-bill-recovery";
const EXACT_H1 =
  "Recovering Overdue Corporate Credit Letters, Annual Health-Checkup & Occupational Health Center (OHC) Invoices for Hospitals";
const META_TITLE = "Hospital Corporate Tie-Up & PSU Medical Bill Recovery";
const META_DESCRIPTION =
  "Recover overdue corporate credit letters, factory OHC retainers & PSU medical bills with ledger reconciliation & Order 37 CPC / Sec 80 notices.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Hospital Corporate Credit Tie Up and PSU Medical Bill Recovery"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "Order XXXVII CPC Summary Suit",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII Rule 1 & 2)",
    timing: "Immediate upon expiry of 15-day statutory demand notice",
    mechanism: "Fast-track civil plaint based on written corporate credit letter / letter of guarantee",
    relief: "Defendant must obtain leave to defend within 10 days; conditional on 100% pre-deposit if defense is moonshine",
    suitability: "Corporate employer credit letters where medical treatment is admitted but HR/finance refuses payment",
    tone: "emerald",
  },
  {
    remedy: "Section 80 CPC Statutory Notice",
    statute: "Code of Civil Procedure, 1908 (Section 80)",
    timing: "Mandatory 60-day notice prior to suing Government / Statutory PSUs",
    mechanism: "Formal Advocate Legal Notice served on PSU CMD / Ministry Secretary (e.g. Railways, BHEL, ONGC, Coal India)",
    relief: "Freezes limitation clock, triggers internal vigilance/audit scrutiny, compels release of undisputed hospital ledger",
    suitability: "Compulsory legal foundation for aged medical claims against statutory authorities and PSUs exceeding ₹20 Lakh",
    tone: "emerald",
  },
  {
    remedy: "Commercial Courts Act Fast-Track Suit",
    statute: "Commercial Courts Act, 2015 (Section 2(1)(c) & Section 12A)",
    timing: "After 30-day Pre-Institution Mediation (PIMS) or direct if interim relief sought",
    mechanism: "Commercial recovery suit with mandatory case management hearings and strict 120-day written statement cap",
    relief: "Attachment before judgment (Order 38 Rule 5 CPC), freezing debtor bank accounts, commercial decree with real interest",
    suitability: "Factory OHC retainer contracts, multi-hospital executive checkup tie-ups, and corporate healthcare retainers",
    tone: "slate",
  },
  {
    remedy: "MSMED Act Statutory Escalation",
    statute: "MSMED Act, 2006 (Sections 15–18)",
    timing: "45 days from delivery of hospital invoice / medical reports",
    mechanism: "Filing before Micro & Small Enterprise Facilitation Council (MSEFC) followed by statutory conciliation/arbitration",
    relief: "Statutory compound interest at 3x RBI Bank Rate; 75% pre-deposit mandatory for corporate debtor to challenge award",
    suitability: "Hospitals, pathology labs, and occupational health clinics holding valid Udyam MSME registration certificates",
    tone: "amber",
  },
  {
    remedy: "Commercial Arbitration Invocation",
    statute: "Arbitration & Conciliation Act, 1996 (Section 9 & Section 11)",
    timing: "As stipulated under dispute resolution clause of Corporate MoU",
    mechanism: "Notice invoking arbitration to corporate board followed by Section 9 interim protection before High Court / District Court",
    relief: "Interim security deposit orders and appointment of sole independent arbitrator under court supervision",
    suitability: "Large annual institutional tie-ups and multi-plant industrial OHC management agreements with arbitration clauses",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "Can a corporate employer refuse to pay an inpatient hospital bill if the employee resigns before the invoice is cleared?",
    answer:
      "No. Under Sections 126, 128, and 70 of the Indian Contract Act, 1872, an employer's signed Corporate Credit Authorization Letter or Letter of Guarantee constitutes an independent, primary contract of debt and indemnity. The hospital provides specialized inpatient treatment relying on the credit of the company, not the personal solvency of the employee. Internal HR grade policies, subsequent employee resignation, termination, or absconding cannot void or diminish the corporate employer's liquidated liability to the hospital. The hospital can maintain an Order XXXVII CPC summary suit directly against the corporate entity.",
  },
  {
    question: "What is an Order XXXVII CPC Summary Suit and why is it effective for corporate hospital bill recovery?",
    answer:
      "Order XXXVII of the Code of Civil Procedure, 1908 provides an accelerated civil recovery mechanism specifically designed for liquidated debts founded on written contracts, guarantees, and commercial undertakings. When a hospital sues under Order 37 on a signed corporate credit letter, the corporate defendant does not have an automatic right to defend the suit. The company must enter an appearance within 10 days of summons service and file an affidavit demonstrating a substantial, bona fide defense. If the defense is deemed frivolous or illusory, the court either enters summary judgment immediately in favor of the hospital or directs the corporate debtor to deposit 100% of the principal claim into court.",
  },
  {
    question: "Why do PSUs like BHEL, ONGC, Coal India, and Indian Railways delay empanelled hospital bill payments for 6 to 12+ months?",
    answer:
      "Public Sector Undertakings (PSUs) and government bodies typically delay empanelled hospital payments due to three administrative bottlenecks: (1) Irregular annual and quarterly budget disbursements where healthcare budget heads lapse or await ministry approval; (2) Multi-tier internal auditing and retrospective medical scrutiny committees that review settled hospital files months after patient discharge; and (3) Bureaucratic inertia where finance desks prioritize core operational vendor dues over healthcare provider claims. Because hospitals fear losing empanelment status, PSUs exploit this leverage to defer payments interest-free.",
  },
  {
    question: "Is a Section 80 CPC Notice mandatory before suing a PSU or government department for medical dues?",
    answer:
      "Yes, for government departments (such as Indian Railways, Ministry of Defence, or State Health Departments) and certain statutory public corporations, serving a 60-day statutory notice under Section 80 of the Code of Civil Procedure, 1908 is mandatory prior to instituting a civil suit. For autonomous corporate PSUs (like BHEL, ONGC, or NTPC incorporated under the Companies Act), a formal commercial legal notice under the Indian Contract Act and empanelment agreement is sufficient; however, serving a Section 80 notice serves as a powerful compliance trigger that initiates inter-departmental vigilance reviews and high-level audits, frequently unlocking payment without litigation.",
  },
  {
    question: "How can hospitals recover unpaid monthly retainers for on-site factory Occupational Health Centers (OHCs)?",
    answer:
      "Factory OHCs are statutorily required under Section 41-C of the Factories Act, 1948. Hospitals and occupational health firms deputing industrial doctors, nurses, and factory ambulances hold substantial leverage. To recover aged retainer arrears: (1) Audit biometric attendance logs and duty rosters countersigned by factory safety managers; (2) Issue a formal 30-day Credit Suspension and Service Withdrawal Notice alerting the plant management that pausing OHC operations will expose the factory to penal closure under factory safety regulations; and (3) Issue an Advocate Legal Notice demanding payment of retainer arrears with compound interest at 18% p.a. under the Interest Act, 1978 or MSMED Act, 2006.",
  },
  {
    question: "Can hospitals claim statutory interest on delayed corporate credit bills and PSU medical invoices?",
    answer:
      "Yes. Hospitals can claim statutory interest through multiple legal avenues: (1) Under Section 3 and Section 4 of the Interest Act, 1978, where a written notice of demand stipulates that interest will run from the date of demand; (2) Under the Commercial Courts Act, 2015, where courts award commercial interest at prevailing banking lending rates; and (3) Under Sections 15 and 16 of the MSMED Act, 2006, where registered MSME healthcare service providers are statutorily entitled to compound interest with monthly rests at three times the RBI Bank Rate on any payment delayed beyond 45 days.",
  },
  {
    question: "What electronic evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    answer:
      "To substantiate a corporate credit recovery claim in court or arbitration, electronic records from the Hospital Information System (HIS) must be certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act). Essential records include: (1) System-generated Credit Authorization Letter with electronic HR signature or official email confirmation; (2) Inpatient admission and discharge timestamps; (3) Itemized GST e-invoices with valid Invoice Reference Numbers (IRN); (4) Patient or attendant counter-signed discharge bill acknowledgments; and (5) Email and postal delivery logs establishing receipt of final invoices by the corporate finance cell.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Code of Civil Procedure, 1908 (Section 80 — Notice to Government & Public Officers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 (Act No. 4 of 2016 — Commercial Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 126, 128 & 70 — Guarantee & Quantum Meruit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Factories Act, 1948 (Section 41-C — Occupational Health Centers & Safety Officers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2330",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Hospital Corporate Credit Tie-Up & PSU Medical Bill Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Hospitals Legally Recover Overdue Corporate Credit Letters, OHC Retainers & PSU Dues",
  description:
    "A 5-stage legal escalation protocol for multi-specialty hospitals to collect aged corporate credit letters, factory OHC retainers, and PSU medical arrears without burning institutional partnerships.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Credit Authorisations & Reconcile Admitted Medical Ledgers",
      text: "Compile verified patient admission files, HR credit authorization letters, counter-signed discharge bills, and GST e-invoices with valid IRNs. Segregate undisputed principal claims from contested line items.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve 7-Day Administrative Credit Suspension Advisory",
      text: "Issue an executive reconciliation alert to the corporate Chief Financial Officer and HR Head, providing formal notice that cashless admission privileges for company employees will be paused within 7 business days.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch 15-Day Advocate Commercial Demand / Section 80 CPC Notice",
      text: "Serve a formal advocate legal notice invoking Order XXXVII CPC (for private corporations) or Section 80 CPC (for government departments and PSUs), demanding payment of principal plus statutory commercial interest.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Initiate Pre-Institution Mediation or Section 9 Commercial Interim Freeze",
      text: "File for pre-institution commercial mediation under Section 12A of the Commercial Courts Act or approach the High Court / Commercial Court under Section 9 of the Arbitration Act for interim asset attachment.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Institute Order XXXVII Summary Suit or Commercial Recovery Plaint",
      text: "File a summary civil suit under Order XXXVII CPC or Commercial Courts Act to secure an expedited decree or compel 100% cash pre-deposit from the corporate debtor before leave to defend is granted.",
    },
  ],
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
      name: "Hospitals & Healthcare Recovery",
      item: `${SITE_URL}/industries/hospitals-doctors-healthcare-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hospital Corporate Credit & PSU Bill Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function HospitalCorporateCreditRecoveryPage() {
  const breadcrumbItems = [
    { label: "Hospitals & Healthcare Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "Hospital Corporate Credit & PSU Bill Recovery", href: PAGE_URL },
  ];

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Order XXXVII CPC Summary Suit</span>
              <span className="text-red-500">&bull;</span>
              <span>Section 80 CPC Notice</span>
              <span className="text-red-500">&bull;</span>
              <span>OHC Retainer Arrears</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-03 Healthcare Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Corporate Credit &amp; PSU Dues Enforcement
              </span>
              <p>
                When corporate employers, factory plants, and Public Sector Undertakings (PSUs) delay clearing employee credit-letter hospital bills, on-site Occupational Health Center (OHC) retainers, or annual executive health-camp invoices for 180+ days, hospitals enforce recovery through{" "}
                <strong>Order XXXVII CPC Summary Suits</strong> on written letters of guarantee and mandatory{" "}
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Section 80 CPC Statutory Notices
                </Link>{" "}
                for government PSUs. By pairing systematic credit-suspension advisories with commercial interest claims under the Interest Act, 1978, healthcare providers compel prompt treasury clearance without forfeiting institutional contracts. Part of our authoritative{" "}
                <Link
                  href="/industries/hospitals-doctors-healthcare-recovery"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Healthcare RCM &amp; Hospital Recovery Hub
                </Link>
                .
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">&rupee;25L&ndash;&rupee;8 Cr</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Average Corporate &amp; PSU Receivables</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Summary Suit on Credit Guarantee Letters</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">10 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Corporate Leave to Defend Appearance Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">18% p.a.</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Commercial / MSMED Statutory Interest Claim</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky Sidebar Table of Contents */}
            <HospitalCorporateTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Institutional Credit Risk
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  The Corporate &amp; PSU Medical Credit Bottleneck: Why Bills Age 180+ Days
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Across industrial manufacturing hubs (such as Manesar, Pimpri-Chinchwad, Sriperumbudur, Sanand, Jamshedpur, and Angul) and major metropolitan centers, private multi-specialty hospitals, tertiary trauma centers, and diagnostic pathology networks carry substantial aged balance sheets tied up in <strong>corporate credit tie-ups</strong>, <strong>occupational health center (OHC) operations</strong>, and <strong>Public Sector Undertaking (PSU) empanelled contracts</strong>. Unlike individual patient billing or third-party administrator (TPA) insurance claims, corporate medical debts often represent high-trust B2B commitments that gradually deteriorate into structural institutional defaults.
                  </p>
                  <p>
                    Hospitals routinely execute direct billing agreements with corporate employers, manufacturing conglomerates, IT tech parks, and statutory corporations (such as BHEL, ONGC, Coal India subsidiaries, NTPC, SAIL, and Indian Railways). Under these memoranda of understanding (MoUs), hospital emergency rooms and inpatient wards provide cashless medical treatment to corporate executives, industrial factory workers, and their registered dependents solely on the strength of an HR-issued <strong>Corporate Credit Authorization Letter</strong> or official company referral memo. Similarly, hospital healthcare operations teams manage complete on-site factory OHC infrastructure—deploying industrial medical officers, emergency nurses, and round-the-clock factory ambulances—or administer annual corporate executive health checkups (EHC) for thousands of corporate employees.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        1. Post-Treatment Corporate Repudiation
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        After clinical discharge, corporate finance cells disown inpatient bills citing that the treated employee abruptly resigned, was terminated for misconduct, exhausted their annual corporate medical entitlement, or that treatment exceeded internal HR bands.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        2. OHC Retainer &amp; Staffing Arrears
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Factory plant managers arbitrarily withhold monthly retainers for doctors, industrial nurses, and emergency ambulances citing minor biometric attendance discrepancies or internal cost-rationalization mandates, starving service providers of working capital.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        3. PSU Audit &amp; Budget Freezes
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Empanelled PSUs and railway zones sit on crores of verified hospital invoices for 6 to 18 months due to retrospective medical board scrutiny, departmental budget lapses, or procedural bottlenecks, treating hospital credit as interest-free bridge capital.
                      </p>
                    </div>
                  </div>

                  <p>
                    Hospital marketing heads and Chief Financial Officers (CFOs) frequently hesitate to initiate legal recovery proceedings against corporate clients for fear of permanently terminating institutional accounts. However, continuing to extend unlimited cashless credit to delinquent corporate accounts severely jeopardizes hospital liquidity. Hospitals can explore our related operational playbooks for{" "}
                    <Link
                      href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                      className="text-red-600 hover:text-red-700 underline font-semibold"
                    >
                      unpaid patient discharge recovery without detention
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                      className="text-red-600 hover:text-red-700 underline font-semibold"
                    >
                      recovering delayed TPA insurance claims
                    </Link>
                    . To recover corporate and PSU healthcare receivables without burning valuable commercial ties, healthcare institutions must implement a graduated, advocate-backed credit recovery framework that transitions from collaborative reconciliation to statutory civil enforcement.
                  </p>
                </div>
              </section>

              {/* Section 2: Decision Tree */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Graduated Recovery SOP
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  5-Stage Recovery Decision Tree: From Credit Alert to Summary Decree
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 mb-6">
                  <p>
                    Collecting institutional healthcare arrears requires an escalation matrix that balances commercial relationship preservation against statutory limitation deadlines. The following 5-stage architecture enables hospital credit control desks to recover aged receivables methodically.
                  </p>
                </div>

                {/* Hand-Authored SVG Flowchart (Desktop) */}
                <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-6 overflow-x-auto">
                  <p className="text-[11px] font-mono text-red-400 uppercase tracking-widest text-center mb-4">
                    Hospital Corporate &amp; PSU Credit Recovery Architecture
                  </p>
                  <svg
                    viewBox="0 0 900 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto max-w-[860px] mx-auto"
                    aria-label="Flowchart illustrating 5 stages of corporate hospital debt recovery"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="85" y="55" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1 &bull; DAY 1–30</text>
                    <text x="85" y="75" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Credit Ledger Audit</text>
                    <text x="85" y="93" fill="#94A3B8" fontSize="9" textAnchor="middle">Reconcile signed HR letters,</text>
                    <text x="85" y="107" fill="#94A3B8" fontSize="9" textAnchor="middle">GST bills &amp; discharge receipts</text>

                    {/* Arrow 1 */}
                    <path d="M160 75 L185 75" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />

                    {/* Stage 2 */}
                    <rect x="185" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="260" y="55" fill="#FBBF24" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2 &bull; DAY 31–45</text>
                    <text x="260" y="75" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Credit Freeze Notice</text>
                    <text x="260" y="93" fill="#94A3B8" fontSize="9" textAnchor="middle">7-day executive advisory to</text>
                    <text x="260" y="107" fill="#94A3B8" fontSize="9" textAnchor="middle">pause cashless employee care</text>

                    {/* Arrow 2 */}
                    <path d="M335 75 L360 75" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="360" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="435" y="55" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3 &bull; DAY 46–60</text>
                    <text x="435" y="75" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                    <text x="435" y="93" fill="#94A3B8" fontSize="9" textAnchor="middle">15-day Order 37 CPC /</text>
                    <text x="435" y="107" fill="#94A3B8" fontSize="9" textAnchor="middle">60-day Sec 80 CPC for PSUs</text>

                    {/* Arrow 3 */}
                    <path d="M510 75 L535 75" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="535" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#818CF8" strokeWidth="2" />
                    <text x="610" y="55" fill="#A5B4FC" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4 &bull; DAY 61–90</text>
                    <text x="610" y="75" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">PIMS &amp; Interim Freeze</text>
                    <text x="610" y="93" fill="#94A3B8" fontSize="9" textAnchor="middle">Section 12A mediation or</text>
                    <text x="610" y="107" fill="#94A3B8" fontSize="9" textAnchor="middle">Sec 9 interim bank freeze</text>

                    {/* Arrow 4 */}
                    <path d="M685 75 L710 75" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="710" y="30" width="170" height="90" rx="10" fill="#0F172A" stroke="#34D399" strokeWidth="2" />
                    <text x="795" y="55" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5 &bull; DAY 90+</text>
                    <text x="795" y="75" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Summary Suit / Decree</text>
                    <text x="795" y="93" fill="#94A3B8" fontSize="9" textAnchor="middle">Order XXXVII CPC decree or</text>
                    <text x="795" y="107" fill="#94A3B8" fontSize="9" textAnchor="middle">Commercial recovery execution</text>

                    {/* Bottom Status / Enforcement Bar */}
                    <rect x="10" y="150" width="870" height="60" rx="8" fill="#1E293B" stroke="#334155" />
                    <text x="30" y="175" fill="#F87171" fontSize="11" fontWeight="bold">Key Legal Leverage Trigger:</text>
                    <text x="210" y="175" fill="#E2E8F0" fontSize="10">Corporate letters of guarantee establish liquidated debt; leave to defend granted only upon 100% pre-deposit.</text>
                    <text x="30" y="195" fill="#38BDF8" fontSize="10" fontWeight="bold">Statutory Backstops:</text>
                    <text x="145" y="195" fill="#94A3B8" fontSize="10">Order XXXVII CPC &bull; Section 80 CPC &bull; Section 2(1)(c) Commercial Courts Act &bull; Interest Act 1978 &bull; Section 63 BSA</text>
                  </svg>
                </div>

                {/* Mobile Flowchart Stacked Cards */}
                <div className="md:hidden space-y-3 mb-6">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-sky-400">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-sky-400">Stage 1 &bull; Days 1–30</p>
                    <p className="text-sm font-bold text-white mt-0.5">Credit Ledger Audit &amp; Documentation</p>
                    <p className="text-xs text-slate-300 mt-1">Collate signed HR authorization letters, discharge summaries, attendance logs, and GST e-invoices with valid IRNs.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-amber-400">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Stage 2 &bull; Days 31–45</p>
                    <p className="text-sm font-bold text-white mt-0.5">Credit Suspension Advisory to Corporate HR</p>
                    <p className="text-xs text-slate-300 mt-1">Serve a formal 7-day executive warning placing ongoing cashless OP/IP privileges for other company employees on administrative hold.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 3 &bull; Days 46–60</p>
                    <p className="text-sm font-bold text-white mt-0.5">Advocate Statutory Demand / Section 80 CPC Notice</p>
                    <p className="text-xs text-slate-300 mt-1">Serve 15-day commercial demand under Order XXXVII CPC for private corporates, or 60-day Section 80 CPC notice for PSUs and railways.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-indigo-400">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Stage 4 &bull; Days 61–90</p>
                    <p className="text-sm font-bold text-white mt-0.5">Commercial Mediation &amp; Interim Asset Freeze</p>
                    <p className="text-xs text-slate-300 mt-1">Invoke Section 12A pre-institution commercial mediation or apply for Section 9 Arbitration / Order 38 Rule 5 interim bank account freeze.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-400">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Stage 5 &bull; Days 90+</p>
                    <p className="text-sm font-bold text-white mt-0.5">Order XXXVII Summary Suit &amp; Execution</p>
                    <p className="text-xs text-slate-300 mt-1">Obtain summary money decree; enforce execution through bank attachment, corporate garnishee orders, or insolvency proceedings.</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong>Strategic Operational Tip:</strong> When dealing with long-standing corporate relationships, do not initiate judicial proceedings abruptly. The <strong>Stage 2 Credit Suspension Advisory</strong> is singularly potent: when corporate HR realizes their active executives or factory workforce may be turned away at hospital triage for cashless care, internal approvals for pending medical invoices are expedited within 72 hours without requiring formal litigation.
                  </p>
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Statutory Framework
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Matrix: Order 37 CPC, Section 80 &amp; Commercial Court Remedies
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 mb-6">
                  <p>
                    Hospital claims against corporate entities and PSUs fall under distinct legal regimes depending on whether the debtor is a private limited company, an industrial manufacturing entity, or a government public sector enterprise. The table below delineates the statutory forums, timing triggers, and tactical advantages available to healthcare providers.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Legal Remedy</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Governing Statute</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Trigger Window</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Mechanics &amp; Relief</th>
                        <th className="p-3 sm:p-4 font-bold">Best Suited For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {STATUTORY_MATRIX.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                          <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                            {item.remedy}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-700 font-mono text-[11px] sm:text-xs border-r border-slate-200">
                            {item.statute}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                            {item.timing}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                            <span className="font-semibold">{item.mechanism}:</span> {item.relief}
                          </td>
                          <td className="p-3 sm:p-4 text-slate-600">
                            {item.suitability}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  <p>
                    <strong>Precedent Note on Corporate Guarantees:</strong> In <em>State Bank of India v. Indexport Registered</em> (1992) 3 SCC 159, the Supreme Court affirmed that a creditor is not bound to exhaust remedies against the principal debtor before suing the guarantor; the guarantor&apos;s liability is co-extensive and immediate under Section 128 of the Indian Contract Act. Applying this doctrine, when a corporate employer signs a Credit Authorization Letter guaranteeing medical bills, the hospital can proceed directly against the employer without joining or pursuing the individual employee.
                  </p>
                </div>
              </section>

              {/* Section 4: Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Failure Mode Resolution
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Resolving 4 Core Failure Modes in Corporate &amp; PSU Medical Recovery
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 mb-6">
                  <p>
                    Institutional healthcare accounts fail along predictable operational fault lines. Click across the four interactive scenarios below to evaluate the specific contractual exposures, statutory provisions, and advocate-tested action rails for each billing dispute.
                  </p>
                </div>

                <HospitalCorporateScenarioTabs />
              </section>

              {/* Section 5: Order XXXVII CPC Deep Dive */}
              <section
                id="heading-order-37-cpc"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Fast-Track Summary Suit Strategy
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Order XXXVII Summary Suits: Enforcing Corporate Credit Letters in Court
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    A standard civil recovery suit in India takes between 3 to 7 years to reach a final trial decree. For multi-specialty hospitals whose operational viability hinges on rapid cash turnaround, ordinary civil litigation is economically unviable. <strong>Order XXXVII of the Code of Civil Procedure, 1908 (Summary Procedure)</strong> provides the definitive legal shortcut for recovering corporate healthcare dues.
                  </p>
                  <p>
                    Under Order XXXVII Rule 1(2)(b) CPC, summary suits are expressly maintainable to recover a liquidated demand in money arising on a <strong>written contract</strong>, <strong>guarantee</strong>, or <strong>enactment</strong>. A signed Corporate Credit Authorization Letter, Employee Admission Sponsorship Form, or Factory OHC Annual Retainer Agreement executed on corporate letterhead constitutes a binding written contract creating a liquidated debt.
                  </p>

                  <div className="bg-slate-900 text-white rounded-xl p-5 my-6 space-y-3">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-widest">
                      The Order XXXVII Procedural Trap for Corporate Defaulters:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-200">
                      <li>
                        <strong>Mandatory 10-Day Appearance:</strong> Upon service of summons in Form 4 (Appendix B), the defendant company must enter an appearance in court within exactly 10 days. If the corporate debtor fails to appear within this window, the allegations in the hospital&apos;s plaint are deemed admitted, and the court enters a money decree forthwith.
                      </li>
                      <li>
                        <strong>Summons for Judgment:</strong> Once the company appears, the hospital serves a Summons for Judgment (Form 4A). The defendant corporate must then file an affidavit seeking &ldquo;Leave to Defend&rdquo; within 10 days.
                      </li>
                      <li>
                        <strong>Strict Judicial Scrutiny of Defenses:</strong> Under the Supreme Court&apos;s definitive principles laid down in <em>IDBI Trusteeship Services Ltd. v. Hubtown Ltd.</em> (2017) 1 SCC 568 (which refined the classic <em>Mechelec Engineers</em> test), if the corporate debtor raises a moonshine or frivolous defense—such as claiming that the treated employee has resigned or that internal HR budget caps were exceeded—the court must either refuse leave to defend or grant leave conditional upon the defendant depositing <strong>100% of the admitted debt</strong> into court.
                      </li>
                    </ol>
                  </div>

                  <p>
                    Because corporate employers can rarely deny having issued the credit authorization letter on company letterhead or dispute the physical admission and medical discharge of their employees, their defenses almost always collapse into the &ldquo;frivolous or moonshine&rdquo; category. Consequently, Order XXXVII summary suits frequently result in rapid consent settlements, court-directed deposits, or expedited summary decrees within 4 to 8 months. For cases where post-dated cheques were issued by corporate clients or diagnostic franchisees and subsequently dishonoured, hospitals should concurrently execute our{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-red-600 hover:text-red-700 underline font-semibold"
                    >
                      Section 138 Negotiable Instruments Act notice protocol
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 6: Section 80 CPC for PSUs */}
              <section
                id="heading-section-80-psu"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Public Sector Dues Enforcement
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Section 80 CPC Notices: Recovering BHEL, ONGC &amp; Railway Medical Dues
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Empanelled hospitals providing comprehensive secondary and tertiary care to employees and pensioners of central Public Sector Undertakings (PSUs) face institutional recovery hurdles distinct from private commercial corporations. PSUs such as Bharat Heavy Electricals Limited (BHEL), Oil and Natural Gas Corporation (ONGC), Coal India Limited (CIL) subsidiaries (ECL, BCCL, CCL, SECL, WCL), NTPC, Steel Authority of India (SAIL), and Indian Railways empanel hospitals under structured schedules of rates (CGHS/AIIMS/PSU-specific tariffs).
                  </p>
                  <p>
                    When PSU regional accounts offices withhold admitted medical dues for 6 to 18 months, private hospitals are statutorily governed by{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-red-600 hover:text-red-700 underline font-semibold"
                    >
                      Section 80 of the Code of Civil Procedure, 1908
                    </Link>
                    . Section 80 mandates that prior to instituting any civil suit against the Government or a public officer in respect of an official act, a formal 60-day written notice must be served. For statutory corporations and government schemes, serving this notice serves multiple strategic purposes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        1. High-Level Vigilance &amp; Inter-Ministerial Audit
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A formal Section 80 notice addressed to the Chairman &amp; Managing Director (CMD), Director (Finance), and the concerned Administrative Ministry Secretary bypasses mid-level regional billing clerks and triggers mandatory legal scrutiny by the PSU&apos;s corporate law division.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        2. Halting Limitation &amp; Preserving Writ Remedy
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Service of the Section 80 notice formally establishes the demand for debt, halts limitation arguments, and creates the mandatory statutory foundation required to file an Article 226 Writ Petition for Mandamus in the High Court under the Supreme Court&apos;s <em>ABL International</em> doctrine.
                      </p>
                    </div>
                  </div>

                  <p>
                    Hospitals must also ensure that where outpatient, diagnostic, or emergency care is billed against formal promissory undertakings signed by patient family members or company representatives, enforceable{" "}
                    <Link
                      href="/templates/promissory-note-format-india"
                      className="text-red-600 hover:text-red-700 underline font-semibold"
                    >
                      promissory note formats
                    </Link>{" "}
                    are retained on file to support multi-track civil and summary actions. Where PSU dues involve Central Government schemes like CGHS, ECHS, or ESIC, hospitals should align their strategy with our dedicated guide on{" "}
                    <Link
                      href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                      className="text-red-600 hover:text-red-700 underline font-semibold"
                    >
                      CGHS, ECHS, ESIC &amp; Ayushman Bharat hospital dues recovery
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 7: Worked Financial Calculation */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Financial Recovery Ledger
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Financial Worked Example: Reconciling ₹48.5L in Corporate Arrears
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 mb-6">
                  <p>
                    The financial model below illustrates a practical multi-specialty hospital recovery scenario involving a diversified healthcare provider in Pune with <strong>&rupee;48,50,000</strong> in aged receivables spanning corporate credit authorization letters, factory OHC retainers, and PSU empanelment dues. It demonstrates how applying statutory interest under the <strong>Interest Act, 1978</strong> and <strong>MSMED Act, 2006</strong> reverses working capital erosion.
                  </p>
                </div>

                {/* Ledger Breakdown Card */}
                <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 mb-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
                    Corporate Debt Ledger Reconciliation &amp; Statutory Interest Audit
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-slate-700 text-slate-300">
                          <th className="py-2.5 px-3 font-semibold">Account / Debtor Tranche</th>
                          <th className="py-2.5 px-3 font-semibold">Principal</th>
                          <th className="py-2.5 px-3 font-semibold">Aging Bucket</th>
                          <th className="py-2.5 px-3 font-semibold">Statutory Basis</th>
                          <th className="py-2.5 px-3 font-semibold">Interest Rate</th>
                          <th className="py-2.5 px-3 font-semibold text-right">Total Claim</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-200">
                        <tr>
                          <td className="py-3 px-3 font-medium">Automotive OEM — Employee IP Credit Letters</td>
                          <td className="py-3 px-3 font-mono">&rupee;18,20,000</td>
                          <td className="py-3 px-3 text-amber-400">210 Days</td>
                          <td className="py-3 px-3">Order XXXVII CPC Guarantee</td>
                          <td className="py-3 px-3 text-emerald-400">18% p.a. (MSMED)</td>
                          <td className="py-3 px-3 font-mono font-bold text-right text-emerald-300">&rupee;20,08,300</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-medium">Steel Rolling Mill — Factory OHC 6-Month Retainer</td>
                          <td className="py-3 px-3 font-mono">&rupee;14,40,000</td>
                          <td className="py-3 px-3 text-amber-400">180 Days</td>
                          <td className="py-3 px-3">Commercial Contract (s.2(1)(c))</td>
                          <td className="py-3 px-3 text-emerald-400">18% p.a. (MSMED)</td>
                          <td className="py-3 px-3 font-mono font-bold text-right text-emerald-300">&rupee;15,69,600</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-medium">PSU Regional Division — Executive Referral Invoices</td>
                          <td className="py-3 px-3 font-mono">&rupee;15,90,000</td>
                          <td className="py-3 px-3 text-red-400">330 Days</td>
                          <td className="py-3 px-3">Section 80 CPC Notice</td>
                          <td className="py-3 px-3 text-emerald-400">12% p.a. (Interest Act)</td>
                          <td className="py-3 px-3 font-mono font-bold text-right text-emerald-300">&rupee;17,62,450</td>
                        </tr>
                        <tr className="bg-slate-800/80 font-bold">
                          <td className="py-3 px-3 text-white">Consolidated Hospital Portfolio</td>
                          <td className="py-3 px-3 font-mono text-white">&rupee;48,50,000</td>
                          <td className="py-3 px-3 text-slate-300">180–330 Days</td>
                          <td className="py-3 px-3 text-slate-300">Compound Tri-Track SOP</td>
                          <td className="py-3 px-3 text-slate-300">Weighted ~16.0%</td>
                          <td className="py-3 px-3 font-mono text-right text-emerald-400 text-sm sm:text-base">&rupee;53,40,350</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="font-bold text-emerald-950 uppercase tracking-wide mb-1">
                      Statutory Interest Upside
                    </p>
                    <p className="text-emerald-800 leading-relaxed">
                      Statutory interest adds <strong>&rupee;4,90,350</strong> in compound damages, fully compensating the hospital for bank overdraft borrowing costs incurred while carrying the debt.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 uppercase tracking-wide mb-1">
                      Settlement Velocity
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Serving formal 15-day Order XXXVII and Section 80 CPC notices resulted in <strong>82% of principal</strong> (&rupee;39.7 Lakh) being cleared within 45 days during the pre-litigation cooling period.
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="font-bold text-[#DC2626] uppercase tracking-wide mb-1">
                      Litigation Risk Elimination
                    </p>
                    <p className="text-red-900 leading-relaxed">
                      Only 1 contested case (&rupee;8.8 Lakh) escalated to Commercial Court, where the corporate debtor offered a consent decree rather than depositing 100% cash pre-deposit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Statutory Evidence Standards
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  BSA 2023 Section 63 Evidence Checklist for Corporate Hospital Claims
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 mb-6">
                  <p>
                    Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which governs civil and commercial evidence in India, digital records generated by hospital information systems (HIS) and corporate email chains are admissible in court only when certified under <strong>Section 63 of BSA, 2023</strong> (replacing Section 65B of the repealed Indian Evidence Act). Ensure your corporate credit billing desk secures the following documentation prior to issuing legal notices.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Part A: Corporate Credit Letter &amp; Patient Records
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Original or digitally signed Corporate Credit Authorization Letter on official company letterhead with HR seal.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Employee corporate identity card copy, employee token number, and department designation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Hospital admission consent form signed by the employee/attendant acknowledging third-party corporate billing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Final clinical discharge summary counter-signed by the attending medical consultant and the patient.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Part B: Billing, OHC Logs &amp; Delivery Proof
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Itemized GST e-invoices containing valid Invoice Reference Numbers (IRN) and QR codes generated via GST portal.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>For Factory OHC claims: Biometric attendance logs of deputed doctors/nurses countersigned by factory safety managers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>For Executive Health Camps: Attendance sign-in sheets, sample barcoding records, and digital report delivery receipts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">&check;</span>
                        <span>Proof of service of final bills via speed post RPAD tracking receipts and read-receipt email delivery logs to corporate finance.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-4 text-xs sm:text-sm leading-relaxed">
                  <p>
                    <strong>Mandatory BSA Section 63 Certificate:</strong> All electronic records extracted from the Hospital Management System (HMS), ERP billing ledgers, and official email servers must be accompanied by an affidavit certificate executed by the hospital&apos;s Chief Information Officer (CIO) or Systems Administrator certifying the continuous lawful operation and security of the recording servers.
                  </p>
                </div>
              </section>

              {/* Section 9: Dual B2B Action CTAs */}
              <section
                id="heading-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Dual B2B Recovery Rails
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Institutional Debt Recovery Rails for Multi-Specialty Hospitals
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 mb-6">
                  <p>
                    Whether your hospital is testing a single high-value corporate default or looking to systematically recover hundreds of aged corporate credit letters, factory OHC retainer backlogs, and PSU claims, LegalRecovery provides end-to-end institutional recovery infrastructure:
                  </p>
                </div>

                <HospitalCorporateCTA />
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Creditor Legal FAQs
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6">
                  Frequently Asked Questions: Corporate Credit &amp; PSU Hospital Dues
                </h2>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-colors duration-150 open:bg-white open:shadow-xs"
                    >
                      <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-xs sm:text-sm md:text-base">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory References */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Verified Citations
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Authoritative Legal Framework &amp; Statutory Precedents
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-600 mb-4">
                  <p>
                    All statutory recovery mechanisms, limitation deadlines, and judicial doctrines outlined in this operational guide are grounded directly in authoritative legislative enactments and binding judgments of the Supreme Court of India:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <span className="font-semibold text-slate-900 mb-1">{source.title}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[#DC2626] hover:underline font-mono text-[11px] truncate"
                      >
                        {source.url} &rarr;
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span>
                    Advocate Review: <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}
                  </span>
                  <span>Published: November 2026 &bull; Updated for Bharatiya Sakshya Adhiniyam, 2023</span>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Cluster */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
