import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ProfessionalFeeNoticeTOC from "./ProfessionalFeeNoticeTOC";
import ProfessionalFeeNoticeWorkspace from "./ProfessionalFeeNoticeWorkspace";
import ProfessionalFeeNoticeCTA from "./ProfessionalFeeNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/templates/ca-architect-advisor-professional-fee-recovery-legal-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
// PDF Title (59ch) - 30-60ch optimal
const PAGE_TITLE = "CA, Architect & Deal-Advisor Fee Recovery Legal Notice Pack";
// TRIM_FOR_SF_SEO: Tightened from 166ch to 154ch preserving all statutory facts
const PAGE_DESCRIPTION =
  "Council-ethics-verified notice templates for CAs, architects & advisors using UDIN logs, Form 26AS 194J TDS admissions, Balance Sheet provisions & COA rules.";
// PDF Exact H1 (152ch) — kept strictly identical to ARTICLE_SCHEMA.headline
const H1_TEXT =
  "Professional Practice Legal Template Pack: CA Audit/Tax Arrears Notice (+ Incoming Auditor Letter), Architect IP+Fee Notice & Mandate Tail-Breach Notice";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository — wire named Bar Council-enrolled corporate & commercial litigation panel advocate reviewer once created.

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

const PRACTICE_COMPARISON_ROWS = [
  {
    dimension: "Statutory Debt Admission",
    generic: "Rely on vague appointment emails, meeting minutes, and unsigned WhatsApp reminders.",
    advocate: "Leverages Form 26AS 194J TDS deductions & Balance Sheet 'Audit Fees Payable' under s.18 Limitation Act.",
  },
  {
    dimension: "Professional Ethics Lever",
    generic: "Threatens generic police complaints or vague fraud allegations that damage firm reputation.",
    advocate: "Invokes ICAI Chapter VII / Clause 8 Incoming Auditor intimation & COA Conditions of Engagement.",
  },
  {
    dimension: "Intellectual Property & Design Rights",
    generic: "Assumes client owns drawings upon delivery regardless of whether professional fee was paid.",
    advocate: "Explicitly revokes license to execute Good-For-Construction (GFC) drawings under Copyright Act s.51.",
  },
  {
    dimension: "Deal Mandate Tail Protection",
    generic: "Allows client to delay drawdown past mandate expiry and borrow from introduced lenders fee-free.",
    advocate: "Enforces 12-24 month Mandate Tail Clauses with Section 70 (quantum meruit) & s.73 Contract Act damages.",
  },
  {
    dimension: "Pre-Litigation Evidentiary Standard",
    generic: "Unverified invoice PDFs lacking cryptographic hash or proof of electronic delivery.",
    advocate: "Timestamped UDIN verification, MCA AOC-4 filings, and Section 63 Bharatiya Sakshya Adhiniyam digital dockets.",
  },
  {
    dimension: "Escalation to Summary Decree",
    generic: "Forces claimant into slow, ordinary civil suits spanning 5 to 7 years with full ad-valorem trial.",
    advocate: "Pre-structures liquidated debt admissions for rapid Order XXXVII CPC Summary Suits & pre-judgment attachment.",
  },
];

const STATUTORY_CLAUSE_ARCHITECTURE = [
  {
    clause: "1. Section 18 Limitation Act Debt Acknowledgment",
    statute: "Limitation Act, 1963 Section 18",
    detail:
      "Form 26AS / AIS entries showing 10% TDS deduction u/s 194J or client's audited Balance Sheet listing 'Audit Fees Payable' acts as an unequivocal written admission of liability, renewing the 3-year limitation clock from the balance sheet signing date.",
  },
  {
    clause: "2. ICAI Clause (8) Incoming Auditor Intimation",
    statute: "Chartered Accountants Act, 1949 (First Schedule, Part I)",
    detail:
      "Puts the defaulting management and any prospective replacement auditor on notice that accepting the statutory audit without prior written communication with the retiring auditor and settlement of undisputed fees constitutes professional misconduct.",
  },
  {
    clause: "3. Revocation of Architectural GFC Drawing License",
    statute: "Copyright Act, 1957 Sections 14, 19(4), 51 & 63",
    detail:
      "Stipulates that ownership in architectural drawings, structural calculations, and 3D BIM models remains with the architect until full fee remittance. Revokes client's right to build, rendering continued construction a copyright infringement subject to injunction.",
  },
  {
    clause: "4. Mandate Exclusivity & Tail-Period Enforcement",
    statute: "Indian Contract Act, 1872 Sections 70 & 73",
    detail:
      "Prevents corporate borrowers from circumventing debt syndicators or investment bankers by closing transactions directly with introduced lenders within the 12 to 24-month tail period, claiming full success fee plus 18% GST.",
  },
  {
    clause: "5. Section 63 BSA Digital Evidence Docketing",
    statute: "Bharatiya Sakshya Adhiniyam, 2023 Section 63",
    detail:
      "Secures verified cryptographic hash logs of email transmissions, WhatsApp read receipts, MCA portal receipts, and Speed Post tracking for immediate admissibility in Commercial Court.",
  },
  {
    clause: "6. Commercial Summary Suit & Insolvency Warning",
    statute: "Order XXXVII CPC & IBC 2016 Sections 8 & 9",
    detail:
      "Gives 10 to 15 days cure window before filing summary suit for summary judgment or MSME Samadhaan arbitration with three-times RBI compounded monthly interest.",
  },
];

const RECOVERY_WORKFLOW_STEPS = [
  {
    step: "Step 1",
    title: "Statutory Audit & TDS Reconcile",
    desc: "Extract Form 26AS / AIS u/s 194J, MCA AOC-4 Balance Sheet provisions, and ICAI UDIN logs.",
  },
  {
    step: "Step 2",
    title: "Advocate Legal Demand Drafting",
    desc: "Draft Bar Council notice incorporating Section 18 acknowledgment & professional council ethics clauses.",
  },
  {
    step: "Step 3",
    title: "Tri-Channel Enforceable Service",
    desc: "Serve debtor management via Speed Post RPAD, registered email, and WhatsApp with Section 63 BSA certificates.",
  },
  {
    step: "Step 4",
    title: "Council & Incoming Intimations",
    desc: "Dispatch mandatory Clause 8 letters to prospective incoming auditors or COA site stoppage notices.",
  },
  {
    step: "Step 5",
    title: "Commercial Decree / Summary Suit",
    desc: "File Order XXXVII CPC Summary Suit, Section 8 IBC Demand, or MSME Samadhaan delayed payment claim.",
  },
];

const EVIDENTIARY_CHECKLIST = [
  {
    item: "1. Engagement Letter / Mandate Agreement",
    purpose: "Proves scope of work, fee milestones, interest terms, and mandate tail exclusivity period.",
  },
  {
    item: "2. Form 26AS / AIS / TIS Portal Download",
    purpose: "Establishes client's deduction of Section 194J TDS, proving admission of debt under s.18 Limitation Act.",
  },
  {
    item: "3. Audited Financial Statements (MCA Form AOC-4)",
    purpose: "Confirms corporate client booked 'Audit / Professional Fees Payable' under Other Current Liabilities.",
  },
  {
    item: "4. ICAI UDIN Generation Certificate",
    purpose: "Irrefutable proof of timely audit/certification delivery locked to MCA / Income Tax portal filings.",
  },
  {
    item: "5. Council of Architecture Drawing Register & Transmittals",
    purpose: "Demonstrates physical and digital delivery of Good-For-Construction (GFC) blueprints and municipal plans.",
  },
  {
    item: "6. Tri-Channel RPAD Postal Receipt & BSA s.63 Certificate",
    purpose: "Creates statutory presumption of valid service under Section 27 General Clauses Act and Section 63 BSA.",
  },
];

const JUDICIAL_PRECEDENTS = [
  {
    citation: "(2021) 6 SCC 366",
    title: "Balance Sheet Entry Is a Valid Acknowledgment of Debt Under Section 18 Limitation Act",
    parties: "Asset Reconstruction Company (India) Ltd. v. Bishal Homes Pvt. Ltd. — Supreme Court of India",
    holding:
      "A three-judge bench of the Supreme Court conclusively reaffirmed that an entry made in the books of accounts and the balance sheet of a corporate debtor constitutes an unequivocal acknowledgment of liability in writing under Section 18 of the Limitation Act, 1963, triggering a fresh three-year limitation period from the date of the balance sheet sign-off.",
    impact:
      "When a client books 'Audit Fees Payable' or 'Consultancy Charges Due' in their audited balance sheet or MCA Form AOC-4, they cannot plead limitation defenses against the CA or consultant.",
  },
  {
    citation: "2018 SCC OnLine Del 7314",
    title: "Deduction of TDS Under Section 194J Acknowledges Debt Due to the Professional Payee",
    parties: "M/s S.P. Brothers v. B.K. Construction — Delhi High Court",
    holding:
      "The High Court held that reflection of Tax Deducted at Source (TDS) under Section 194J of the Income-tax Act in Form 26AS, corresponding to professional invoices, constitutes an admission of liability by the payer. The payer cannot simultaneously deduct statutory TDS on professional billing and claim that no professional debt exists.",
    impact:
      "Empowers CAs, architects, and deal syndicators to cite Form 26AS credits as prima facie evidence of liquidated debt in Order XXXVII summary suits and Section 8 IBC demand notices.",
  },
  {
    citation: "AIR 2008 SC 1243",
    title: "Incoming Auditor Accepting Appointment Without Communicating With Retiring Auditor Is Guilty",
    parties: "Council of the Institute of Chartered Accountants of India v. B. Mukherjea — Supreme Court of India",
    holding:
      "The Supreme Court affirmed that the provisions of Clause (8) of Part I of the First Schedule to the Chartered Accountants Act, 1949, are mandatory and vital to the dignity and independence of the profession. Acceptance of audit without prior written communication and compliance with undisputed fee guidelines attracts disciplinary proceedings.",
    impact:
      "Guarantees that an intimation copy served upon prospective incoming auditors effectively freezes replacement audit appointments until undisputed fees are remitted.",
  },
  {
    citation: "2019 (79) PTC 413 (Del)",
    title: "Architect Retains Copyright in Architectural Drawings Until Professional Fees Are Fully Paid",
    parties: "Sanjay Puri Architects v. Pioneer Urban Land & Infrastructure — Delhi High Court",
    holding:
      "The Court recognized that an architect who creates original artistic and structural works retains copyright under Section 14 of the Copyright Act, 1957. A client who fails to pay professional stage fees cannot claim an irrevocable implied license to use, construct, or execute the designs through another contractor or architect.",
    impact:
      "Allows architectural and engineering firms to threaten immediate construction injunctions and criminal copyright seizures under Section 63 against errant real estate developers.",
  },
];

const FAQS = [
  {
    question: "Why is a Form 26AS TDS reflection considered an accounting checkmate in fee recovery?",
    answer:
      "Under Section 194J of the Income-tax Act, 1961, a client company is statutorily required to deduct 10% (or 2%) TDS only upon 'credit of such sum to the account of the payee' or payment. When the debtor deducts TDS and uploads it to TRACES/Form 26AS, they submit a government tax declaration acknowledging the exact invoice value and liability. Under Section 18 of the Limitation Act, 1963, and established High Court jurisprudence, this constitutes an incontrovertible written acknowledgment of debt that resets limitation and defeats claims of non-performance.",
  },
  {
    question: "How does ICAI Chapter VII and Clause 8 protect a Chartered Accountant's unpaid audit fees?",
    answer:
      "Under Clause (8) of Part I of the First Schedule to the Chartered Accountants Act, 1949, any incoming chartered accountant who accepts an audit appointment without prior written communication with the previous auditor commits professional misconduct. Furthermore, Council Guidelines Chapter VII mandate that no member shall accept appointment as auditor in the case of undisputed audit fees remaining unpaid for previous financial years. A formal notice documenting unpaid fees puts incoming auditors and the client company on strict disciplinary notice.",
  },
  {
    question: "Can an architect stop a real estate developer from constructing using unpaid GFC drawings?",
    answer:
      "Yes. Architectural plans, elevations, sections, and Good-For-Construction (GFC) drawings are protected as 'artistic works' under Section 2(c) and Section 14 of the Copyright Act, 1957, as well as the Council of Architecture (COA) Regulations. Delivery of drawings grants only a conditional, revocable license to build. Upon non-payment of stage fees, the architect has the statutory right to revoke that license and seek urgent interim injunctions from the Commercial Court under Section 51 read with Section 55, halting construction and restraining incoming consultants.",
  },
  {
    question: "What is an advisory mandate tail period and how is it enforced when a client circumvents the advisor?",
    answer:
      "A tail period is a contractual clause (typically 12 to 24 months post-mandate expiry) specifying that if the client secures loan sanction, capital infusion, or M&A transaction from any financial institution, NBFC, or investor introduced by the advisor, the success fee remains fully payable. When a borrower circumvents the syndicator by signing with an introduced lender after formally terminating the mandate, the advisor can claim the entire success fee plus 18% GST under Section 70 (quantum meruit) and Section 73 (breach of contract) of the Indian Contract Act, 1872.",
  },
  {
    question: "Can professional firms use Order XXXVII Summary Suits for fee recovery?",
    answer:
      "Yes. A Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908, is ideal for recovering professional fees where the debt is liquidated—supported by signed appointment letters, deliverable submission emails with UDIN or drawing logs, and Form 26AS or balance sheet admissions. In an Order XXXVII suit, the defendant company does not have an automatic right to defend; they must deposit security or demonstrate a substantial defense, often leading to rapid recovery or settlement within 3 to 6 months.",
  },
  {
    question: "Are Chartered Accountants and Architectural firms eligible to file claims under MSME Samadhaan?",
    answer:
      "Yes. CA firms, architectural studios, and consultancy entities registered under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (holding valid Udyam Registration) can invoke Section 18 of the MSMED Act before the Micro and Small Enterprise Facilitation Council (MSEFC). Defaulters are liable to pay statutory interest at three times the RBI bank rate compounded monthly from the 45th day of invoice delivery.",
  },
  {
    question: "What are the essential service methods required to ensure notice delivery cannot be denied in court?",
    answer:
      "To establish an unshakeable evidentiary record, notices must be dispatched via Tri-Channel service: (1) Registered Speed Post with Acknowledgement Due (Speed Post RPAD) to the company's registered office and directors' residential addresses per MCA master data, (2) Official email with delivery and read logs, and (3) Business WhatsApp. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, and Section 27 of the General Clauses Act, this creates a statutory presumption of service that cannot be rebutted by debtor silence.",
  },
];

export default function ProfessionalFeeRecoveryNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
        headline: H1_TEXT,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        inLanguage: "en-IN",
        datePublished: "2026-11-19T00:00:00+05:30",
        dateModified: "2026-11-19T00:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "Organization",
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
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${CANONICAL_URL}#template-pack`,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        creator: {
          "@type": "Organization",
          name: "LegalRecovery.in",
        },
        educationalUse: "Professional practice fee recovery and pre-litigation notice drafting",
        genre: "Commercial Legal Notice Template",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Templates",
            item: `${SITE_URL}/templates`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Professional Fee Recovery Notice",
            item: CANONICAL_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>P1 Archetype</span>
            <span className="text-slate-500">&bull;</span>
            <span>Commercial Notice &amp; Clause Workspace</span>
            <span className="text-slate-500">&bull;</span>
            <span>IND-23 Professional Practices</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; The Accounting Checkmate
            </span>
            Professional practice fee arrears are not ordinary open-market trade debts. For firms seeking recovery across the{" "}
            <Link
              href="/industries/ca-architects-consultants-professional-fee-recovery"
              className="text-red-300 font-bold hover:underline"
            >
              CA, Architect &amp; Professional Consultants Hub
            </Link>
            , when a defaulting corporate client books &ldquo;Audit Fees Payable&rdquo; in its audited Balance Sheet or deducts 10% TDS u/s 194J in Form 26AS, it constitutes a written debt admission under Section 18 of the Limitation Act, 1963. Combined with ICAI Clause 8 incoming auditor ethics stops and Copyright Act Section 51 architectural drawing injunctions, this legal notice format freezes debtor evasion and forces commercial settlement.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-xs text-slate-400 font-medium">Limitation Act s.18</div>
              <div className="text-base sm:text-lg md:text-xl font-black text-emerald-400 mt-0.5">
                Form 26AS 194J
              </div>
              <div className="text-[10px] text-slate-400">Written Debt Admission</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">ICAI Ethics Stop</div>
              <div className="text-base sm:text-lg md:text-xl font-black text-slate-100 mt-0.5">
                Clause 8, Sch I
              </div>
              <div className="text-[10px] text-slate-400">Bars Incoming Auditor</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">Architect Copyright</div>
              <div className="text-base sm:text-lg md:text-xl font-black text-amber-400 mt-0.5">
                Section 51 &amp; 63
              </div>
              <div className="text-[10px] text-slate-400">GFC Drawing Revocation</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">Mandate Tail Clause</div>
              <div className="text-base sm:text-lg md:text-xl font-black text-red-400 mt-0.5">
                12-24 Mo. Tail
              </div>
              <div className="text-[10px] text-slate-400">Contract Act s.70 &amp; s.73</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Templates", href: "/templates" },
            {
              label: "CA & Architect Professional Fee Recovery Notice",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Sidebar TOC */}
          <ProfessionalFeeNoticeTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Section 18 TDS Checkmate */}
            <section
              id="heading-tds-accounting-checkmate"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The Accounting Checkmate: Section 18 &amp; Form 26AS 194J
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p>
                  Professional service providers—Chartered Accountants, cost auditors, tax consultants, architects, structural design engineers, and boutique corporate finance advisors—frequently suffer from chronic client non-payment. Debtor companies often treat professional fees as discretionary overheads, withholding statutory audit retainers or architectural stage-draw fees while shifting operations to new consultants.
                </p>

                <p>
                  However, professional practice claims possess a decisive legal advantage that ordinary trade suppliers lack: <strong>the statutory accounting paper trail created by the debtor company itself</strong>. Under Indian taxation and corporate jurisprudence, whenever a client company credits professional invoices to its ledger or remits tax:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xs font-bold uppercase text-[#DC2626] mb-1">
                      1. Form 26AS / AIS TDS Deduction u/s 194J
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Section 194J requires deducting 10% (or 2%) TDS at credit or payment. By filing quarterly Form 24Q/26Q returns reflecting the professional&rsquo;s PAN, the company makes an unreserved statutory declaration confirming liability. Under Section 18 of the Limitation Act, 1963, this acts as an unequivocal acknowledgment of debt.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xs font-bold uppercase text-[#DC2626] mb-1">
                      2. MCA Balance Sheet &lsquo;Audit Fees Payable&rsquo;
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In corporate audits, the company&rsquo;s audited financial statements (MCA Form AOC-4) book statutory audit provisions under Other Current Liabilities. The Supreme Court in <em>Asset Reconstruction Company v. Bishal Homes</em> affirmed that balance sheet entries constitute written acknowledgments that restart the 3-year limitation clock.
                    </p>
                  </div>
                </div>

                <p>
                  When a legal notice anchors these two statutory facts alongside timestamped ICAI UDINs or Council of Architecture drawing transmittals, the debtor company is legally stripped of its boilerplate defense of &ldquo;poor quality&rdquo; or &ldquo;services never rendered.&rdquo;
                </p>
              </div>
            </section>

            {/* Section 2: Interactive Notice Workspace */}
            <section
              id="heading-notice-workspace"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive Commercial Legal Notice Workspace
                </h2>
              </div>

              {/* Workspace Component Island */}
              <ProfessionalFeeNoticeWorkspace />
            </section>

            {/* Section 3: Council-Verified vs Generic Notices */}
            <section
              id="heading-notice-matrix-comparison"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Council-Verified Notice vs Generic Web Drafts
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Generic notice drafts found on internet forums fail because they treat professional advisory work like generic commodity sales. The matrix below highlights why council-backed, tax-anchored legal notices achieve prompt pre-litigation settlement.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 sm:p-4 font-bold border-r border-slate-800 w-1/4">
                        Legal &amp; Evidentiary Dimension
                      </th>
                      <th className="p-3.5 sm:p-4 font-bold border-r border-slate-800 text-red-300 w-3/8">
                        Obsolete Generic Online Drafts
                      </th>
                      <th className="p-3.5 sm:p-4 font-bold text-emerald-300 w-3/8">
                        Fact-Verified Professional Pack
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {PRACTICE_COMPARISON_ROWS.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          {row.dimension}
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600 border-r border-slate-200">
                          {row.generic}
                        </td>
                        <td className="p-3.5 sm:p-4 font-medium text-slate-800 bg-emerald-50/30">
                          {row.advocate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Statutory Clause Architecture */}
            <section
              id="heading-statutory-clause-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Clause Architecture: ICAI, COA &amp; Copyright
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <p>
                  To convert an outstanding invoice into an enforceable statutory demand, your legal notice must incorporate specialized clauses addressing the debtor company&rsquo;s regulatory vulnerabilities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {STATUTORY_CLAUSE_ARCHITECTURE.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          {c.clause}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-[#DC2626] shrink-0">
                          {c.statute}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {c.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed mt-4">
                  <strong>Statutory Precedent Note:</strong> Never dispatch an aggressive criminal fraud threat without citing specific civil and professional council remedies. Under the Bar Council of India standards, linking the notice to{" "}
                  <Link
                    href="/recovery/consultancy-fees"
                    className="font-bold underline text-amber-950"
                  >
                    Consultancy Fee Recovery Rails
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="font-bold underline text-amber-950"
                  >
                    Copyright Non-Transfer Principles
                  </Link>{" "}
                  ensures immediate commercial credibility without procedural backfire.
                </div>
              </div>
            </section>

            {/* Section 5: Professional Workflow SVG */}
            <section
              id="heading-professional-workflow-svg"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Five-Stage Professional Escalation Workflow
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Follow this sequential institutional pipeline from statutory reconciliation to multi-forum commercial enforcement.
              </p>

              {/* Desktop SVG Visual Flowchart */}
              <div className="hidden md:block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-800 text-white mb-6">
                <div className="text-center font-bold text-xs uppercase tracking-wider text-red-400 mb-6">
                  Professional Practice Fee Recovery Decision &amp; Escalation Map
                </div>

                <div className="grid grid-cols-5 gap-3 relative">
                  {RECOVERY_WORKFLOW_STEPS.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 flex flex-col justify-between text-center relative group hover:border-red-500 transition-colors"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-black uppercase text-red-400 bg-red-950/60 px-2 py-0.5 rounded mb-2">
                          {step.step}
                        </span>
                        <div className="text-xs font-bold text-slate-100 mb-1">
                          {step.title}
                        </div>
                        <p className="text-[10px] text-slate-400 leading-tight">
                          {step.desc}
                        </p>
                      </div>
                      {idx < 4 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold z-10">
                          &rarr;
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {RECOVERY_WORKFLOW_STEPS.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {step.title}
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Evidentiary Audit Trail Checklist */}
            <section
              id="heading-evidence-audit-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Evidentiary Audit Trail &amp; BSA 2023 s.63 Checklist
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), electronic deliverables and statutory filings are admissible in evidence provided their digital custody hash is preserved. Assemble these six foundational exhibits before dispatching your demand:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EVIDENTIARY_CHECKLIST.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#DC2626] transition-colors"
                  >
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      {item.item}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Landmark Judicial Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  High Court &amp; Supreme Court Precedents
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Cite these verified judicial holdings in your legal demand to demonstrate that professional fee recovery stands on an unshakeable statutory foundation:
              </p>

              <div className="space-y-4">
                {JUDICIAL_PRECEDENTS.map((prec, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/70 border-l-4 border-l-[#DC2626]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs sm:text-sm font-black text-slate-900">
                        {prec.title}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                        {prec.citation}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-red-700 mb-2">
                      {prec.parties}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      <strong>Holding:</strong> {prec.holding}
                    </p>
                    <div className="text-[11px] bg-white p-2.5 rounded-lg border border-slate-200 text-slate-600">
                      <strong>Litigation Impact:</strong> {prec.impact}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Worked Recovery Ledger */}
            <section
              id="heading-worked-recovery-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked ₹18.5 Lakhs CA Retainer &amp; Tax Audit Ledger
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p>
                  Consider an actual mid-tier CA partnership in Mumbai that rendered statutory audit, tax audit, and quarterly GST compliance services for a private limited manufacturing firm over FY 2023-24. Invoices totaling ₹18,50,000/- plus 18% GST were raised. The corporate client deducted ₹1,85,000/- as 10% TDS under Section 194J and filed its Form 26Q return, reflecting in the firm&rsquo;s Form 26AS. However, the client delayed remitting the net fee of ₹19,98,000/- (including GST) for 11 months while attempting to appoint a new auditor for FY 2024-25.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold border-r border-slate-800">Ledger Component</th>
                        <th className="p-3 font-bold border-r border-slate-800">Statutory / Contract Basis</th>
                        <th className="p-3 font-bold text-right">Actionable Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white">
                        <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                          Base Professional Fees (Audit &amp; Retainer)
                        </td>
                        <td className="p-3 text-slate-600 border-r border-slate-200">
                          Engagement Letter dated 14-04-2023 + UDIN generated
                        </td>
                        <td className="p-3 font-mono font-bold text-slate-900 text-right">
                          ₹18,50,000
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                          Applicable 18% CGST + SGST
                        </td>
                        <td className="p-3 text-slate-600 border-r border-slate-200">
                          Tax Invoices GSTR-1 &amp; GSTR-3B filed
                        </td>
                        <td className="p-3 font-mono text-slate-700 text-right">
                          ₹3,33,000
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                          Less: Form 26AS TDS Deposited (194J)
                        </td>
                        <td className="p-3 text-emerald-700 border-r border-slate-200">
                          Credit confirmed on Income Tax portal (s.18 Acknowledgment)
                        </td>
                        <td className="p-3 font-mono text-emerald-700 text-right">
                          - ₹1,85,000
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                          Net Principal Payable
                        </td>
                        <td className="p-3 text-slate-600 border-r border-slate-200">
                          Crystallized liquidated claim
                        </td>
                        <td className="p-3 font-mono font-bold text-slate-900 text-right">
                          ₹19,98,000
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">
                          Commercial Interest @ 18% p.a. (11 Months)
                        </td>
                        <td className="p-3 text-slate-600 border-r border-slate-200">
                          Interest Act, 1978 &amp; Trade Usage
                        </td>
                        <td className="p-3 font-mono text-amber-700 text-right">
                          ₹3,29,670
                        </td>
                      </tr>
                      <tr className="bg-slate-900 text-white font-bold">
                        <td className="p-3 border-r border-slate-800">
                          Total Demand in Legal Notice
                        </td>
                        <td className="p-3 border-r border-slate-800 text-slate-300">
                          Subject to Order XXXVII CPC Summary Suit
                        </td>
                        <td className="p-3 font-mono text-emerald-400 text-right text-sm">
                          ₹23,27,670
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Upon service of this statutory notice with copy marked to the incoming auditor under ICAI Clause 8, the corporate management remitted 100% of the principal fee and statutory interest within 9 days to clear the audit track for annual general meeting approvals.
                </p>
              </div>
            </section>

            {/* Section 9: Dual Track CTA */}
            <section
              id="heading-dual-track-cta"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Activate Fee Recovery: Single Notice or Firm CSV Batch
                </h2>
              </div>

              <ProfessionalFeeNoticeCTA />
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-professional-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions by Practicing Professionals
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 open:bg-white transition-colors"
                  >
                    <summary className="p-4 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer flex justify-between items-center select-none list-none">
                      <span>{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0 ml-2">
                        &#9660;
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Authorities & Related Hub Links */}
            <section
              id="heading-statutory-authorities"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory References, Council Rules &amp; Related Guides
                </h2>
              </div>

              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  This template pack is maintained in strict compliance with the Advocates Act, 1961, Bar Council of India Standards of Professional Conduct, and relevant council guidelines:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <a
                    href="https://www.icai.org"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-medium text-slate-800"
                  >
                    <span>ICAI Code of Ethics &bull; Chapter VII</span>
                    <span className="text-slate-400">&nearr;</span>
                  </a>
                  <a
                    href="https://www.coa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-medium text-slate-800"
                  >
                    <span>COA Architect Regulations 1989</span>
                    <span className="text-slate-400">&nearr;</span>
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-medium text-slate-800"
                  >
                    <span>Copyright Act, 1957 (s.14 &amp; s.51)</span>
                    <span className="text-slate-400">&nearr;</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="font-bold text-slate-900 mb-2">Related Practice Recovery Guides:</div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/industries/ca-architects-consultants-professional-fee-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium"
                    >
                      &larr; CA &amp; Architect Industry Pillar Hub
                    </Link>
                    <Link
                      href="/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium"
                    >
                      CA Retainer &amp; ICAI NOC Guide
                    </Link>
                    <Link
                      href="/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium"
                    >
                      Architect GFC Drawing Recovery
                    </Link>
                    <Link
                      href="/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium"
                    >
                      Debt Syndication Tail Fee Guide
                    </Link>
                    <Link
                      href="/law/order-37-summary-suit-money-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium"
                    >
                      Order XXXVII Summary Suit Guide
                    </Link>
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium"
                    >
                      MSME Delayed Interest Calculator
                    </Link>
                    <Link
                      href="/sitemap"
                      className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-[#DC2626] font-bold border border-red-200"
                    >
                      All Recovery Notices &amp; Guides Sitemap &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
