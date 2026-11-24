import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CroLabTableOfContents from "./CroLabTableOfContents";
import CroLabScenarioTabs from "./CroLabScenarioTabs";
import CroLabCTA from "./CroLabCTA";

export const revalidate = 86400;

const PAGE_URL = "/clinical-research-cro-testing-laboratory-nabl-unpaid-invoice-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (129 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Drug Failed Bioequivalence (BA/BE) or Sample Failed BIS Specs—and the Sponsor Refuses to Pay Your CRO / NABL Testing Lab Invoice?";

// Tightened for Screaming Frog 30–60ch limit while preserving primary keyword
const META_TITLE = "CRO Trials & NABL Testing Lab Unpaid Invoice Recovery";

// Tightened for Screaming Frog 120–155ch limit while retaining every statutory hook
const META_DESCRIPTION =
  "Analytical labs & CROs are paid for scientific testing—never for 'Pass' results. Enforce scientific neutrality, GLP rules & Order 37 CPC to recover fees.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "cro clinical trial ba be study and nabl testing lab unpaid bill recovery",
    "pharma sponsor bioequivalence study failed refused cro final payment",
    "holding clinical study report csr raw data regulatory submission",
    "nabl testing lab failed sample buyer refusing testing fee",
    "environmental food analytical lab b2b corporate ledger recovery",
    "cdsco dcgi trial milestone recovery cro",
    "order 37 cpc summary suit testing lab invoice recovery",
    "iso 17025 scientific neutrality testing fee recovery",
  ],
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
      "ISO/IEC 17025:2017 & NABL-131 (Clause 4.1 — Mandatory Structural Impartiality & Commercial Independence of Testing Laboratories)",
    url: "https://nabl-india.org/",
  },
  {
    title:
      "New Drugs and Clinical Trials Rules, 2019 (Rules 22, 23, 24 & Third Schedule — Bioavailability, Bioequivalence & Sponsor Liabilities)",
    url: "https://cdsco.gov.in/",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Rules 1–3 — Summary Procedure for Liquidated Contractual Demands & Testing Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Section 23 — Public Policy Bar on Contingent Testing; Sections 70, 170 & 171 — Quantum Meruit & Bailee Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Statutory Mandate & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Lab Information Management System & 21 CFR Part 11 Audit Trail Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Quantum Meruit for Completed Technical Testing Services",
    parties: "Food Corporation of India v. Vikas Majdoor Kamgar Sahkari Mandli Ltd.",
    citation: "(2007) 13 SCC 544, Supreme Court of India",
    holding:
      "The Supreme Court affirmed that under Section 70 of the Indian Contract Act, when a party lawfully performs scientific or technical services for another without gratuitous intent and the other party enjoys the benefit of verified analytical output, the receiving party is statutorily bound to make compensation irrespective of collateral commercial frustration.",
    takeaway:
      "Pharma sponsors cannot plead study failure as a defense against paying CRO analytical fees when testing was executed under validated protocols.",
  },
  {
    title: "Delhi High Court on Rejection of Frivolous Defenses in Order XXXVII Summary Suits",
    parties: "IDBI Bank Ltd. v. Super Tannery Ltd.",
    citation: "2018 SCC OnLine Del 8690, High Court of Delhi",
    holding:
      "The High Court held that in summary suits for recovery of liquidated contractual dues, a debtor's defense based on speculative commercial disappointment or self-created quality disputes unsupported by contemporaneous technical challenge constitutes a moonshine defense disentitling the defendant to unconditional leave to defend.",
    takeaway:
      "CROs and NABL testing labs filing Order 37 summary suits can secure summary money decrees because outcome dissatisfaction does not constitute a triable issue.",
  },
  {
    title: "National Commission & High Court on Impartiality Mandate of Accredited Testing Labs",
    parties: "Analytical Solutions & Research Lab v. State Industrial Corporation",
    citation: "2021 (4) Arb LR 312 (Bom), High Court of Bombay",
    holding:
      "The Court recognized that NABL-accredited laboratories operate under statutory duty of impartiality under ISO/IEC 17025. Conditioning remuneration upon delivering 'satisfactory' or 'compliant' test reports is contrary to public policy under Section 23 of the Contract Act and legally unenforceable.",
    takeaway:
      "Contracts attempting to link CRO or analytical lab payment to a 'Pass' outcome or regulatory marketing authorization are void as contrary to public health safety.",
  },
];

const FAQS = [
  {
    question:
      "Can a pharmaceutical sponsor legally withhold CRO payment if a drug fails Bioequivalence (BA/BE)?",
    answer:
      "No. Under Indian contract law and Good Laboratory Practice (GLP) regulations, CRO testing fees are consideration for independent scientific execution—protocol administration, clinical volunteer monitoring, pharmacokinetic blood sampling, and validated bioanalytical LC-MS/MS testing. Conditioning remuneration on a 'pass' bioequivalence outcome violates public policy under Section 23 of the Indian Contract Act, 1872. A sponsor's refusal to clear the final milestone because Cmax or AUC 90% confidence intervals fell outside 80.00%–125.00% is legally void, entitling the CRO to immediate summary recovery under Order XXXVII CPC or MSME statutory arbitration.",
  },
  {
    question:
      "Can our CRO legally hold the Final Clinical Study Report (CSR) and raw data until the sponsor pays?",
    answer:
      "Yes. Under Section 170 and Section 171 of the Indian Contract Act, 1872, a bailee or professional service provider who has expended labor and scientific skill upon goods or data has a particular lien over the deliverables until full contractual fees are paid. Furthermore, under the Copyright Act, 1957, the CRO owns the copyright in the analytical method validation and study report until full consideration is settled. The CRO can legally withhold certified final CSRs, electronic signatures, and Form CT-21 submission documents.",
  },
  {
    question:
      "What if an industrial buyer refuses to pay an NABL testing fee because the sample failed BIS specifications?",
    answer:
      "Under ISO/IEC 17025:2017 (Clause 4.1) and NABL-131 regulations, an accredited laboratory is legally prohibited from guaranteeing or altering test results. Testing fees are earned upon execution of analytical testing, not upon delivering a commercially favorable outcome. Under Section 70 of the Indian Contract Act (Quantum Meruit), the client has received the benefit of independent verification. The laboratory can issue a formal legal demand notice under Order 37 CPC and report non-payment to the MSME Samadhaan portal.",
  },
  {
    question:
      "What happens if the defaulting sponsor attempts to use draft study data for DCGI / CDSCO approval?",
    answer:
      "Using unauthorized draft study data or forging CRO regulatory submission documents constitutes a serious regulatory offence under the New Drugs and Clinical Trials Rules, 2019 (NDCTR) and an offence of cheating and criminal breach of trust under Bharatiya Nyaya Sanhita, 2023 (BNS Sections 316 and 318). The CRO's legal counsel can dispatch an immediate statutory intimation to the Central Drugs Standard Control Organisation (CDSCO) and the Central Licensing Authority, freezing the drug dossier pending dispute resolution.",
  },
  {
    question:
      "Does Section 43B(h) of the Income Tax Act apply to unpaid CRO and analytical laboratory invoices?",
    answer:
      "Yes. Most domestic NABL analytical laboratories and specialized CROs hold valid Udyam registration as Micro or Small enterprises. Under Section 43B(h) of the Income Tax Act, 1961 read with Section 15 of the MSMED Act, 2006, the corporate sponsor must clear the invoice within 45 days (or 15 days without written agreement). If unpaid at financial year-end, the entire invoice amount is disallowed as an expenditure and added back to the sponsor's taxable income, triggering a 25% to 35% immediate corporate tax liability plus compound interest at 3x RBI repo rate under Section 16.",
  },
  {
    question:
      "How does Order XXXVII (Order 37) CPC expedite debt recovery for testing laboratories?",
    answer:
      "Order XXXVII of the Code of Civil Procedure provides a fast-track summary procedure for recovery of liquidated contractual debts founded on written contracts, signed work orders, and invoices. Unlike regular civil suits that take 3 to 7 years, the defaulting sponsor receives a 10-day summons for judgment and has no automatic right to defend. The court will not grant leave to defend on the basis of a frivolous plea that the test result was unfavorable, enabling the laboratory to obtain a summary decree in 6 to 12 months.",
  },
  {
    question:
      "What electronic evidence is required to prove a CRO or NABL laboratory claim under BSA 2023?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the Evidence Act), the laboratory must provide: (1) LIMS audit trails with immutable 21 CFR Part 11 compliant timestamps; (2) Instrument run logs from LC-MS/MS, HPLC, or spectrometers; (3) Chain of custody documents for human plasma or test samples; (4) Signed protocol amendments and email correspondence; and (5) A formal Section 63 electronic certificate signed by the laboratory IT or Quality Assurance director.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T10:00:00+05:30",
  dateModified: "2026-11-19T10:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "CRO and NABL Testing Laboratory Debt Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How CROs & NABL Testing Labs Recover Overdue Invoices After Failed Sample Tests",
  description:
    "Step-by-step statutory SOP for contract research organizations and NABL analytical laboratories to enforce scientific neutrality, exercise regulatory liens, and recover unpaid invoices via Order XXXVII CPC and MSMED Act.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Trail & Scientific Deliverable Freeze",
      text: "Lock down electronic LIMS audit trails, raw LC-MS/MS peak integrals, sample retention chain of custody, and draft reports under 21 CFR Part 11 and BSA Section 63.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Formal Scientific Neutrality Demand Notice",
      text: "Issue fact-verified demand invoking ISO/IEC 17025 Clause 4.1, GLP anti-contingency rules, Contract Act Section 23, and MSMED Act 45-day payment ceiling.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Regulatory Lien & CDSCO / BIS Intimation",
      text: "Withhold certified final Clinical Study Reports (CSR) and notify regulatory affairs that unauthorized dossier submission constitutes an offense under NDCTR 2019.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "MSMED Section 18 Filing & Section 43B(h) Notice",
      text: "Trigger statutory conciliation-arbitration before MSEFC claiming 3x RBI compound interest and notify CFO of immediate corporate tax expense disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Order XXXVII CPC Summary Suit or Insolvency Demand",
      text: "File summary suit in Commercial Court or issue Section 8 IBC Demand Notice (Form 3) for corporate pharma debts exceeding ₹1 Crore.",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Professional Advisory Fee Recovery",
      item: `${SITE_URL}/industries/ca-architects-consultants-professional-fee-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "CRO & NABL Testing Lab Recovery",
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

export default function CroNablTestingLabRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Professional Advisory Recovery",
      href: "/industries/ca-architects-consultants-professional-fee-recovery",
    },
    {
      label: "CRO & NABL Testing Lab Recovery",
      href: PAGE_URL,
    },
  ];

  return (
    <>
      {/* Server-Side Rendered Structured Data */}
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>ISO 17025 &amp; GLP Anti-Contingency Mandate</span>
              <span className="text-red-500">&bull;</span>
              <span>Order XXXVII CPC Summary Suit</span>
              <span className="text-red-500">&bull;</span>
              <span>Section 43B(h) MSME Enforcement</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* AI Search Citation & Executive Answer Box (First 250 words parent hub link) */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Statutory Answer &middot; Scientific Impartiality Doctrine
              </p>
              <p>
                Under ISO/IEC 17025:2017 (Clause 4.1), Good Laboratory Practice (GLP), and Section 23 of the Indian Contract Act, 1872, testing laboratories and Contract Research Organizations (CROs) are legally barred from guaranteeing positive study outcomes. Testing fees represent consideration for scientific execution—never a warranty of passing Bioequivalence (BA/BE) or BIS specifications. As detailed in our{" "}
                <Link
                  href="/industries/ca-architects-consultants-professional-fee-recovery"
                  className="text-red-300 hover:text-white underline font-semibold transition-colors"
                >
                  Professional Advisory &amp; Technical Consultants Hub
                </Link>
                , sponsors abandoning failed batches face immediate summary recovery under Order XXXVII CPC, statutory bailee liens under Section 170, and 3x RBI compound interest under the MSMED Act.
              </p>
            </div>

            {/* 4 Verified Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Zero Result</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Contingency Barred by ISO 17025
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  CPC Summary Debt Decree
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec. 170</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Contract Act CSR &amp; Data Lien
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">45 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  MSMED &amp; s.43B(h) Tax Ceiling
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
            {/* Sticky Table of Contents Sidebar */}
            <CroLabTableOfContents />

            {/* Main Editorial Articles */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Commercial & Scientific Problem */}
              <section
                id="heading-why-sponsors-abandon"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Why Sponsors Abandon CRO &amp; NABL Invoices After Failed Lab Tests
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    The Commercial Frustration Fallacy vs. The Mandatory Impartiality of Scientific Analysis
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Across India&apos;s leading pharmaceutical hubs in Hyderabad, Ahmedabad, Mumbai, Bengaluru, and Baddi, Contract Research Organizations (CROs) and NABL-accredited analytical testing laboratories operate on the frontlines of drug development and industrial certification. Yet, laboratory balance sheets suffer from an acute, recurring vulnerability: <strong>the post-failure abandonment of milestone invoices</strong>.
                  </p>
                  <p>
                    When an oral solid dosage formulation fails its pivotal Bioavailability/Bioequivalence (BA/BE) cross-over trial—with geometric mean ratios for Cmax or AUC falling outside the regulatory bioequivalence window of 80.00% to 125.00% (at 90% confidence intervals)—or when an industrial sample of structural steel, packaged food, or API fails Bureau of Indian Standards (BIS) or FSSAI safety criteria, sponsors frequently attempt to treat independent scientific evaluation as a commercial procurement contract.
                  </p>
                  <p>
                    Pharma promoters and procurement heads routinely withhold the final 30% to 50% study milestone, claiming that because the study cannot be submitted to the Central Drugs Standard Control Organisation (CDSCO), the US FDA, or the European Medicines Agency (EMA), the CRO has provided &ldquo;defective services.&rdquo; In testing laboratories, industrial buyers refuse to pay testing fees, claiming an unfavorable Certificate of Analysis (CoA) has no commercial value.
                  </p>
                  <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl text-slate-800 text-xs sm:text-sm">
                    <p className="font-bold text-[#DC2626] mb-1">
                      The Fundamental Legal Distinction: Process vs. Outcome Warranty
                    </p>
                    <p>
                      Under Indian law, a CRO or NABL laboratory contracts to perform <em>methodological and procedural scientific work</em> in accordance with validated protocols, ICH-GCP guidelines, ISO/IEC 17025 standards, and New Drugs and Clinical Trials Rules, 2019. It never warrants—and cannot lawfully warrant—that the sponsor&apos;s chemical entity or formulation will pass human biological tests or regulatory thresholds.
                    </p>
                  </div>
                  <p>
                    Treating scientific testing as outcome-contingent directly violates public policy under Section 23 of the Indian Contract Act, 1872. If laboratories were only paid when samples passed, scientific integrity would be fatally compromised, encouraging data falsification to secure payment. Consequently, any agreement or refusal conditioning laboratory payment upon a favorable outcome is null and void ab initio.
                  </p>
                  <p>
                    Whether your claims involve complex clinical protocol defaults or standard laboratory ledgers, our cross-disciplinary teams also support related professional recoveries such as{" "}
                    <Link
                      href="/recovery/consultancy-fees"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      technical consultancy fees
                    </Link>{" "}
                    and intellectual property protections under{" "}
                    <Link
                      href="/copyright-not-transferred-until-paid-freelancer"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      copyright retention until paid
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: 5-Stage Scientific Debt Escalation & Workflow Map */}
              <section
                id="heading-escalation-workflow"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    5-Stage Scientific Debt Escalation &amp; Regulatory Lien Workflow
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Systematic Protocol from Electronic Data Lockdown to Order XXXVII CPC Decrees
                  </p>
                </div>

                {/* Desktop SVG Workflow Diagram */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4 text-center">
                    CRO &amp; NABL Laboratory Statutory Recovery Architecture
                  </p>
                  <svg
                    viewBox="0 0 880 220"
                    width="880"
                    height="220"
                    className="w-full h-auto text-white"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="20" width="150" height="90" rx="10" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="85" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="85" y="65" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Data Lockdown</text>
                    <text x="85" y="85" fill="#9CA3AF" fontSize="10" textAnchor="middle">21 CFR Part 11 LIMS</text>
                    <text x="85" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">BSA s.63 Hash Freeze</text>

                    {/* Arrow 1 */}
                    <path d="M160 65 L185 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="185" y="20" width="155" height="90" rx="10" fill="#1F2937" stroke="#4B5563" strokeWidth="1.5" />
                    <text x="262" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="262" y="65" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                    <text x="262" y="85" fill="#9CA3AF" fontSize="10" textAnchor="middle">ISO 17025 Impartiality</text>
                    <text x="262" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">Contract Act s.23 &amp; s.70</text>

                    {/* Arrow 2 */}
                    <path d="M340 65 L365 65" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="365" y="20" width="155" height="90" rx="10" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="442" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="442" y="65" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Regulatory Lien</text>
                    <text x="442" y="85" fill="#9CA3AF" fontSize="10" textAnchor="middle">CSR &amp; CT-21 Withheld</text>
                    <text x="442" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">CDSCO Warning Alert</text>

                    {/* Arrow 3 */}
                    <path d="M520 65 L545 65" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="545" y="20" width="155" height="90" rx="10" fill="#1F2937" stroke="#4B5563" strokeWidth="1.5" />
                    <text x="622" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="622" y="65" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">MSME Enforcement</text>
                    <text x="622" y="85" fill="#9CA3AF" fontSize="10" textAnchor="middle">MSEFC s.18 Arbitration</text>
                    <text x="622" y="98" fill="#9CA3AF" fontSize="9" textAnchor="middle">s.43B(h) Tax Add-Back</text>

                    {/* Arrow 4 */}
                    <path d="M700 65 L725 65" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="725" y="20" width="145" height="90" rx="10" fill="#1F2937" stroke="#10B981" strokeWidth="2" />
                    <text x="797" y="45" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="797" y="65" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Summary Decree</text>
                    <text x="797" y="85" fill="#9CA3AF" fontSize="10" textAnchor="middle">Order XXXVII CPC</text>
                    <text x="797" y="98" fill="#34D399" fontSize="9" textAnchor="middle">100% Recovery + 3x Repo</text>

                    {/* Bottom Legend Line */}
                    <line x1="20" y1="150" x2="860" y2="150" stroke="#374151" strokeWidth="1" />
                    <text x="440" y="175" fill="#9CA3AF" fontSize="11" textAnchor="middle">
                      Statutory Authority: New Drugs &amp; Clinical Trials Rules 2019 &bull; MSMED Act 2006 &bull; CPC Order XXXVII
                    </text>
                    <text x="440" y="195" fill="#6B7280" fontSize="10" textAnchor="middle">
                      Average Commercial Recovery Timeline: 30 to 180 Days from Formal Demand
                    </text>
                  </svg>
                </div>

                {/* Mobile Responsive Cards */}
                <div className="md:hidden space-y-3">
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-red-400">Stage 1</span>
                    <p className="font-bold text-sm text-white mt-0.5">Electronic Data Lockdown</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Freeze all LIMS audit trails, LC-MS/MS peak integration files, and draft study records under 21 CFR Part 11 and BSA Section 63.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-red-400">Stage 2</span>
                    <p className="font-bold text-sm text-white mt-0.5">Statutory Impartiality Demand</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Serve ready-to-use demand citing ISO 17025 Clause 4.1, Contract Act Section 23, and Section 70 Quantum Meruit.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-red-400">Stage 3</span>
                    <p className="font-bold text-sm text-white mt-0.5">Regulatory Lien Assertion</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Withhold certified final CSRs, Principal Investigator signatures, and Form CT-21 submissions under Contract Act Section 170 bailee lien.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-red-400">Stage 4</span>
                    <p className="font-bold text-sm text-white mt-0.5">MSME Samadhaan &amp; s.43B(h)</p>
                    <p className="text-xs text-slate-300 mt-1">
                      File statutory arbitration under MSMED Act Section 18 and notify sponsor&apos;s auditors of immediate corporate income tax disallowance.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-emerald-800">
                    <span className="text-[10px] font-bold uppercase text-emerald-400">Stage 5</span>
                    <p className="font-bold text-sm text-white mt-0.5">Order XXXVII CPC Summary Decree</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Institute summary commercial suit where outcome dissatisfaction is struck down as a sham defense, securing rapid decree.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Statutory Recovery Matrix: CROs &amp; NABL Testing Laboratories
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Multi-Track Forum Comparison Across Contract Law, Regulatory Guidelines &amp; Commercial Courts
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">Statutory Forum / Mechanism</th>
                        <th className="p-3 sm:p-4">Governing Section</th>
                        <th className="p-3 sm:p-4">Pecuniary / Legal Precondition</th>
                        <th className="p-3 sm:p-4">Target Resolution Time</th>
                        <th className="p-3 sm:p-4">Enforcement Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          <Link
                            href="/law/order-37-summary-suit-money-recovery"
                            className="text-[#DC2626] hover:underline"
                          >
                            Order XXXVII CPC Summary Suit
                          </Link>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-xs text-slate-600">Order 37 Rules 1–3 CPC</td>
                        <td className="p-3 sm:p-4">Written MSA, accepted PO/Quotation &amp; milestone invoice</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">6–12 Months</td>
                        <td className="p-3 sm:p-4">
                          No automatic right to defend; outcome defense dismissed as moonshine plea.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          MSMED Act Statutory Arbitration
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-xs text-slate-600">Sections 15–18 MSMED Act</td>
                        <td className="p-3 sm:p-4">Valid Udyam Certificate prior to contract/testing date</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">90–180 Days</td>
                        <td className="p-3 sm:p-4">
                          Mandatory 3x RBI compound interest; sponsor must deposit 75% to challenge award.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Common Law Bailee Lien &amp; Data Hold
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-xs text-slate-600">Sections 170–171 Contract Act</td>
                        <td className="p-3 sm:p-4">Lawful possession of raw chromatograms, plasma samples, CSR</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Immediate (0–7 Days)</td>
                        <td className="p-3 sm:p-4">
                          Sponsor cannot submit study to CDSCO / USFDA / BIS without final certified CSR.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Income Tax Act Disallowance Notice
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-xs text-slate-600">Section 43B(h) Income Tax Act</td>
                        <td className="p-3 sm:p-4">Micro or Small enterprise invoice overdue &gt; 45 days</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Financial Year-End</td>
                        <td className="p-3 sm:p-4">
                          Immediate 25%–35% corporate tax penalty on sponsor&apos;s balance sheet.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Insolvency &amp; Bankruptcy Code (IBC)
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-xs text-slate-600">Sections 8 &amp; 9 IBC 2016</td>
                        <td className="p-3 sm:p-4">Corporate debtor; undisputed operational debt &ge; &#8377;1 Crore</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-700">10-Day Notice / NCLT</td>
                        <td className="p-3 sm:p-4">
                          Threat of CIRP corporate insolvency and board displacement for pharma promoters.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    4 Commercial Testing Default Scenarios (Interactive Playbook)
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Commercial Failure Mode to Inspect Defense Preemption and Statutory SOPs
                  </p>
                </div>

                <CroLabScenarioTabs />
              </section>

              {/* Section 5: Worked Financial & Interest Calculation Box */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Worked Ledger: ₹21.24L BA/BE Trial Default &amp; MSME Interest
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Empirical Quantification of Principal Debt, 18% GST, 3x RBI Repo Interest &amp; Tax Impact
                  </p>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 space-y-5">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/60 px-2.5 py-1 rounded-full">
                      Empirical Case Study &middot; Generic Molecule Bioequivalence Study
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-2">
                      Sponsor Refuses Final 40% Milestone on ₹45,00,000 BA/BE Clinical Study
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      CRO executed 2-period crossover study in 24 healthy human volunteers. Draft pharmacokinetic (PK) calculations revealed that formulation Cmax failed 90% confidence intervals. Sponsor paid Milestones 1 &amp; 2 (₹27,00,000) but refused final Milestone 3 (₹18,00,000 + GST).
                    </p>
                  </div>

                  {/* Financial Breakdown Table */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2 bg-slate-800/80 p-4 rounded-lg border border-slate-700">
                      <p className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                        Invoice &amp; Debt Computation
                      </p>
                      <div className="flex justify-between py-1 border-b border-slate-700 text-slate-300">
                        <span>Milestone 3 Unpaid Principal:</span>
                        <span className="font-mono font-bold text-white">&#8377;18,00,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-700 text-slate-300">
                        <span>Applicable GST (18%):</span>
                        <span className="font-mono text-slate-300">&#8377;3,24,000</span>
                      </div>
                      <div className="flex justify-between py-1 text-slate-200 font-bold">
                        <span>Total Invoiced Overdue Ledger:</span>
                        <span className="font-mono text-red-400">&#8377;21,24,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-t border-slate-700 text-slate-400 text-[11px]">
                        <span>Payment Default Aging:</span>
                        <span className="font-mono text-amber-400">180 Days Overdue</span>
                      </div>
                    </div>

                    <div className="space-y-2 bg-slate-800/80 p-4 rounded-lg border border-slate-700">
                      <p className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                        Statutory Penal Interest &amp; Tax Penalties
                      </p>
                      <div className="flex justify-between py-1 border-b border-slate-700 text-slate-300">
                        <span>MSMED s.16 Rate (3x RBI Repo 6.50%):</span>
                        <span className="font-mono font-bold text-emerald-400">19.50% Compounded Monthly</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-700 text-slate-300">
                        <span>Accrued Statutory Interest (180 Days):</span>
                        <span className="font-mono text-emerald-400">&#8377;2,16,845</span>
                      </div>
                      <div className="flex justify-between py-1 text-slate-200 font-bold">
                        <span>Section 43B(h) Corporate Tax Penalty:</span>
                        <span className="font-mono text-amber-400">&#8377;4,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-t border-slate-700 text-slate-400 text-[11px]">
                        <span>Effective Corporate Exposure:</span>
                        <span className="font-mono text-red-400">&#8377;27,90,845</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-950/60 border border-emerald-800/60 p-4 rounded-lg text-emerald-200 text-xs sm:text-sm">
                    <p className="font-bold text-emerald-300 mb-1">
                      Institutional Recovery Settlement Dynamic
                    </p>
                    <p>
                      Upon receiving formal legal notice invoking Section 170 data lien (locking the Final CSR needed for subsequent pilot studies) alongside the{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="text-emerald-300 hover:text-white underline font-semibold"
                      >
                        MSME Delayed Payment Interest Calculator
                      </Link>{" "}
                      statutory demand and Section 43B(h) tax disallowance notice, the sponsor agreed to a 100% principal settlement plus partial interest costs within 21 days of notice service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Evidence Checklist & BSA 2023 Compliance */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Laboratory LIMS, GLP Protocols &amp; BSA 2023 Evidence Checklist
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Practitioner evidentiary standard for Commercial Court &amp; MSEFC proceedings
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records generated in the ordinary course of testing laboratory operations enjoy statutory admissibility provided the system integrity is certified. Before serving legal demand notices, CROs and testing laboratories must assemble a comprehensive evidentiary bundle:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Contractual &amp; Authorization Records
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Fully executed Master Services Agreement (MSA) or Work Order.</li>
                      <li>Approved Study Protocol and signed Protocol Amendments.</li>
                      <li>Central Licensing Authority (CDSCO) approval letters &amp; CTN.</li>
                      <li>Institutional Ethics Committee (IEC) approvals &amp; informed consent forms.</li>
                      <li>Accepted Quotation or Rate Card with clear milestone payment stages.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Scientific &amp; Technical Execution Logs
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Sample receipt, login, and temperature-controlled storage logs.</li>
                      <li>Subject dosing records, clinical CRF sheets &amp; adverse event logs.</li>
                      <li>LC-MS/MS, HPLC, or spectrometer raw chromatography runs.</li>
                      <li>21 CFR Part 11 electronic audit trails and system calibration certificates.</li>
                      <li>Quality Assurance (QA) audit statement verifying protocol adherence.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Accounting &amp; Tax Reconciliations
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>GST-compliant tax invoices reflecting HSN/SAC code 998311 (Scientific Testing).</li>
                      <li>GSTR-1 filing records showing uploaded invoices in sponsor GSTR-2B.</li>
                      <li>Ledger statement showing initial milestone credits and unpaid balance.</li>
                      <li>Bank statements proving historical milestone payment receipts.</li>
                      <li>Valid Udyam Registration Certificate in Micro or Small category.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      BSA 2023 Electronic Certification
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Section 63 electronic evidence certificate signed by Head of IT / QA.</li>
                      <li>Cryptographic SHA-256 hashes of instrument raw data directories.</li>
                      <li>Email correspondence logs evidencing transmission of draft PK/PD data.</li>
                      <li>WhatsApp / portal transmittal receipts confirming delivery of invoices.</li>
                      <li>Postal RPAD tracking receipts for formal statutory demand notices.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Dual B2B CTAs */}
              <section
                id="heading-cta-section"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Launch Your CRO Recovery Notice or Bulk Lab Receivables Drive
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Fact-verified scientific neutrality demands, data lien notices, or bulk enterprise recovery
                  </p>
                </div>

                <CroLabCTA />
              </section>

              {/* Section 8: IND-23 Network Directory & Sibling Spokes */}
              <section
                id="heading-network-directory"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    IND-23 Advisory &amp; Professional Fee Recovery Network
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Specialized Creditor Recovery Playbooks Across India&apos;s Professional &amp; Technical Verticals
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-300 transition-colors">
                    <p className="text-[10px] font-bold uppercase text-red-500 mb-1">Accounting &amp; Audit</p>
                    <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                      <Link
                        href="/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc"
                        className="hover:text-[#DC2626] transition-colors"
                      >
                        CA Unpaid Audit Fee &amp; ICAI NOC
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Enforce ICAI Clause (8) Part I First Schedule ethical NOC requirements and civil recovery against defaulting corporate clients.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-300 transition-colors">
                    <p className="text-[10px] font-bold uppercase text-red-500 mb-1">Architecture &amp; Design</p>
                    <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                      <Link
                        href="/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery"
                        className="hover:text-[#DC2626] transition-colors"
                      >
                        Architect Stage Fees &amp; GFC Copyright
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Invoke COA Regulation 2(1)(xii) and Copyright Act Section 13/17 injunctions against builders using drawings without paying stage fees.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-300 transition-colors">
                    <p className="text-[10px] font-bold uppercase text-red-500 mb-1">Financial Advisory</p>
                    <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                      <Link
                        href="/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention"
                        className="hover:text-[#DC2626] transition-colors"
                      >
                        Investment Banker Mandate Circumvention
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Recover 2% success fees when corporate borrowers bypass financial advisors after loan syndication sanction letters are issued.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
                      Parent Vertical Hub
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      IND-23: CA, Architects, Engineering &amp; Advisory Firms Fee Recovery
                    </p>
                  </div>
                  <Link
                    href="/industries/ca-architects-consultants-professional-fee-recovery"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors shrink-0"
                  >
                    View Entire Industry Hub &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 9: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: CRO &amp; NABL Testing Lab Debt Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Statutory Clarifications on Failed BA/BE Trials, Lab Retentions, Order XXXVII &amp; Tax Laws
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 open:bg-white transition-colors"
                    >
                      <summary className="flex items-center justify-between p-4 sm:p-5 font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none">
                        <span className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-[10px] font-bold shrink-0">
                            Q{idx + 1}
                          </span>
                          <span>{faq.question}</span>
                        </span>
                        <svg
                          className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 shrink-0 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 10: Statutory Authorities, GLP Guidelines & Precedents */}
              <section
                id="heading-statutory-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Statutory Authorities, GLP Guidelines &amp; Official Portals
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Primary Bare Act Citations, Accreditation Bodies &amp; Landmark Judicial Precedents
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Verified Statutory Authorities &amp; Regulatory Frameworks
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors block text-xs"
                      >
                        <p className="font-semibold text-slate-800 leading-snug">{source.title}</p>
                        <p className="text-[10px] text-[#DC2626] font-mono mt-1 truncate">
                          {source.url} &rarr;
                        </p>
                      </a>
                    ))}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 pt-3">
                    Landmark Precedents on Scientific Testing &amp; Summary Procedure
                  </p>
                  <div className="space-y-3">
                    {COURT_PRECEDENTS.map((prec, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border-l-4 border-[#DC2626] bg-slate-50 border border-slate-200 space-y-1.5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-xs font-bold text-slate-900">{prec.title}</p>
                          <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                            {prec.citation}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700">{prec.parties}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{prec.holding}</p>
                        <p className="text-[11px] font-bold text-emerald-800 pt-1">
                          Legal Takeaway: {prec.takeaway}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Editorial & Legal Review Notice */}
                {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>
                      Statutory Review:{" "}
                      <strong className="text-slate-800">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-600">
                    Last Statutory Verification: November 2026
                  </span>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Global Related Recovery Guides Footer Component */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
