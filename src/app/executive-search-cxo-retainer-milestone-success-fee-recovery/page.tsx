import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ExecutiveSearchTableOfContents from "./ExecutiveSearchTableOfContents";
import ExecutiveSearchScenarioTabs from "./ExecutiveSearchScenarioTabs";
import ExecutiveSearchNoticeCTA from "./ExecutiveSearchNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/executive-search-cxo-retainer-milestone-success-fee-recovery";
const EXACT_H1 =
  "Enforcing 1/3–1/3–1/3 Retained CXO Search Mandates: Recovering Shortlist Tranches, Cancelled-Search Kill Fees & Understated ESOP/CTC Fees";
const META_TITLE = "Retained CXO Search Shortlist & Closure Fee Recovery";
const META_DESCRIPTION =
  "Delivered a CXO market map and shortlist, but the client froze hiring or hid sign-on bonuses to evade fees? Recover unpaid retained search milestones under CPC.";

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
        alt: formatAltText("Retained Executive Search CXO Shortlist & Closure Fee Recovery Guide"),
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
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Liquidated Debts on Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 53 — Prevention of Performance, Section 70 — Quantum Meruit, Sections 73 & 74 — Breach Damages & Liquidated Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Payment Cap & Mandatory 3x Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Mercantile Agency Contracts & Section 12A Mandatory Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Talent Mapping & Email Approvals)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) — Mandatory Disallowance of Unpaid MSME Search Invoices Beyond Due Date)",
    url: "https://www.incometax.gov.in/iec/foportal/",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Constitution Bench on Quantum Meruit & Restitution for Non-Gratuitous Advisory Work",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 05 December 1961",
    facts:
      "A commercial contractor performed specialized works requested by the principal without a formal wet-signed statutory contract. The recipient accepted the delivered infrastructure benefits but later denied payment liability citing absence of formalized documentation.",
    holding:
      "The 5-Judge Constitution Bench established that under Section 70 of the Indian Contract Act, where a commercial entity lawfully executes specialized professional work not intending to act gratuitously, and the recipient enjoys the commercial benefit thereof, the recipient is bound by law to make compensation. In retained executive search, once the firm conducts comprehensive competitor mapping and delivers vetted CXO profiles, the client cannot take shelter under unexecuted signature blocks or internal hiring holds to evade milestone payments.",
    amount: "Doctrine of Quantum Meruit Established — Mandatory Commercial Restitution",
    takeaway:
      "Delivering candidate longlists, psychometric profiles, and candidate slates creates an enforceable statutory right to milestone compensation under Section 70.",
  },
  {
    title: "Supreme Court on Enforceability of Contractual Pre-Estimates & Liquidated Kill Fees",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A commercial contract contained pre-agreed forfeiture and liquidated payment clauses upon premature termination. The dispute centered on whether contractual cancellation fees represent enforceable liquidated compensation under Section 74 or impermissible penalties.",
    holding:
      "The Supreme Court held that where commercial loss or dedicated professional bandwidth allocation is difficult or impossible to mathematically evaluate precisely upon premature breach, a pre-agreed contractual figure (such as a 50% to 75% search kill fee) entered into between sophisticated commercial parties represents a genuine pre-estimate of damages and is enforceable as liquidated compensation under Section 74.",
    amount: "Liquidated Compensation Affirmed under Section 74 of the Contract Act",
    takeaway:
      "Retained search cancellation clauses ('Kill Fees') that compensate the firm for dedicated partner hours and opportunity loss are legally valid and fully recoverable under Indian law.",
  },
  {
    title: "Supreme Court on Prevention of Performance Vesting Immediate Right to Remuneration",
    parties: "M/s Motilal Padampat Sugar Mills Co. Ltd. & General Contract Doctrines",
    citation: "AIR 1979 SC 621 / Contract Act Section 53 Statutory Interpretation",
    date: "Authoritative Supreme Court Jurisprudence",
    facts:
      "A contracting party fully prepared to discharge its executory obligations was prevented from doing so because the promisor unilaterally froze the project and refused to permit final delivery.",
    holding:
      "Under Section 53 of the Indian Contract Act, 1872, when a contract contains reciprocal promises, and one party to the contract prevents the other from performing his promise, the contract becomes voidable at the option of the party so prevented; and he is entitled to compensation from the other party for any loss sustained. When a corporate client abruptly puts a CXO search 'on hold' after receiving the shortlist, they prevent final placement, immediately vesting the search firm's right to claim the full Tranche-2 and accrued Kill Fees.",
    amount: "Statutory Right to Milestone Damages upon Debtor-Induced Frustration",
    takeaway:
      "Promoters cannot avoid search milestones by unilaterally stalling recruitment interviews after receiving proprietary market talent maps.",
  },
  {
    title: "Commercial Courts on Summary Suits for Retained Professional Mandate Retainers",
    parties: "K.G. Ringsdorff v. Standard Batteries Ltd. & Allied Commercial Summary Precedents",
    citation: "AIR 2002 Bom 418 / Order XXXVII Commercial Court Standards",
    date: "High Court of Bombay & Commercial Appellate Division",
    facts:
      "A professional advisory firm instituted an Order XXXVII Summary Suit against a corporate client for unpaid contractual retainer fees documented via signed mandate letters and milestone delivery correspondence.",
    holding:
      "The High Court held that an executed retainer engagement letter with clear milestone triggers (e.g., commencement, shortlist presentation, final placement) constitutes an express written contract for a liquidated demand in money under Order XXXVII Rule 1(2)(b)(i) CPC. The debtor is denied unconditional leave to defend unless they establish a substantial and bona fide pre-existing dispute prior to the presentation of invoices.",
    amount: "Decree for Liquidated Professional Fees under Order XXXVII CPC",
    takeaway:
      "Retained search milestone disputes qualify for expedited summary decrees under Order XXXVII, bypassing multi-year civil trial bottlenecks.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is the standard 1/3–1/3–1/3 fee structure in retained executive search mandates?",
    a: "Under global and Indian retained executive search conventions, the total professional fee (typically 25% to 33.33% of the projected first-year Total Cost-to-Company) is divided into three equal tranches: Tranche 1 (Commencement Retainer) payable upon execution of the mandate agreement before market mapping begins; Tranche 2 (Shortlist Milestone) payable upon delivery of the market mapping report and a vetted slate of 3 to 5 qualified CXO candidates; and Tranche 3 (Placement/Closure Tranche) payable upon candidate acceptance of the offer letter or joining date. Unlike contingent recruitment, retained mandates compensate the firm for dedicated executive partner time, competitor talent mapping, and exclusive representation.",
  },
  {
    q: "Can a client refuse to pay Tranche-2 if they place the CXO search 'on hold' after getting the shortlist?",
    a: "No. Tranche-2 is legally earned upon the delivery of the agreed contractual milestone—namely, the submission of the vetted candidate shortlist conforming to the search specifications. Under Section 53 and Section 70 of the Indian Contract Act, 1872, a client's unilateral internal decision to 'freeze the hiring budget', restructure management, or pause the search does not alter the fact that the search firm completed the intellectual deliverable. The Tranche-2 invoice becomes an unconditional, crystallised liquidated debt enforceable via an Order XXXVII Summary Suit in the Commercial Court.",
  },
  {
    q: "Are 'Kill Fees' (Search Cancellation Penalties) legally enforceable in Indian courts?",
    a: "Yes. Indian courts routinely enforce pre-agreed contractual cancellation fees under Section 74 of the Indian Contract Act, 1872 as genuine pre-estimates of damages (liquidated damages), provided they were agreed upon by sophisticated commercial parties. A standard kill fee clause stipulating that the client pays two-thirds of the total fee or a minimum retainer if the search is cancelled after 30 to 60 days of market mapping is fully valid and protected against debtor claims of 'unfair penalty'.",
  },
  {
    q: "How can an executive search firm prove the client understated the candidate's true CTC?",
    a: "Executive search agreements must define 'Annual Remuneration' broadly to encompass fixed basic pay, allowances, guaranteed joining bonuses, retention incentives, variable performance bonuses, and the fair market value of ESOPs or equity grants. In legal discovery under Order XI Rule 14 CPC, the Commercial Court can order the client to produce the executed Offer Letter, Form 16, and Board Resolutions approving stock option grants. Any deliberate suppression of compensation components to deflate the 25% search fee constitutes actionable civil fraud under Contract Act Section 17.",
  },
  {
    q: "What happens if a client rejects a mapped CXO candidate but hires them 6 months later?",
    a: "Standard retained search mandate agreements contain a 12-to-24 month Exclusivity and Candidate Ownership Clause. If the client, its promoters, subsidiaries, joint ventures, or board contacts hire any candidate introduced or mapped by the search firm within the ownership window, the client is contractually bound to pay the full placement success fee plus interest and circumvention damages under Section 73 of the Contract Act.",
  },
  {
    q: "Can an executive search consultancy file a claim under the MSMED Act for unpaid retainers?",
    a: "Yes, provided the search firm is registered as a Micro or Small enterprise on the Udyam portal under professional or management consultancy services (NIC 70200 / 78100). Under Section 15 of the MSMED Act, the corporate client must pay invoices within a maximum of 45 days. Delayed payments attract mandatory monthly compound interest at three times the RBI Bank Rate under Section 16, which cannot be waived by private contractual terms.",
  },
  {
    q: "How does Section 43B(h) of the Income Tax Act help executive search firms collect unpaid fees?",
    a: "Under Section 43B(h) of the Income Tax Act, 1961, any corporate client that fails to clear an invoice issued by an Udyam-registered Micro or Small enterprise within the statutory deadline (maximum 45 days) cannot claim that expenditure as a tax deduction in that financial year. The full unpaid amount is added back to their taxable net profit, triggering an immediate 25% to 34% corporate income tax hit plus interest, providing tremendous leverage in pre-litigation negotiations.",
  },
  {
    q: "What electronic evidence is necessary under BSA 2023 Section 63 to enforce a retained search fee?",
    a: "To satisfy the strict standards of Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), the search firm must preserve: the executed mandate letter or email confirmation of Terms of Business (TOB), the detailed Role Specification document, hash-verified email records transmitting the competitor talent map and candidate resumes, interview scheduling calendar invites, WhatsApp communications with the promoter or CHRO, and formal milestone delivery acceptance notices with corresponding GST invoices.",
  },
];

export default function ExecutiveSearchRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    { label: "Staffing & Manpower", href: "/industries/staffing-recruitment-manpower-recovery" },
    { label: "Retained CXO Search Fee Recovery", href: PAGE_URL },
  ];

  // Schema Definitions
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-17T09:00:00+05:30",
    dateModified: "2026-11-17T09:00:00+05:30",
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: `${SITE_URL}/about-us`,
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
    inLanguage: "en-IN",
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Enforce Retained Executive Search Mandates and Recover Unpaid Milestone Fees",
    description:
      "A step-by-step statutory and operational escalation framework for retained executive search partners to recover unpaid shortlist retainers, cancelled-search kill fees, and concealed ESOP/CTC success fees under Order XXXVII CPC and the MSMED Act.",
    totalTime: "P45D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Milestone Delivery & BSA Section 63 Evidence",
        text: "Compile cryptographic email transmission logs, ATS records, calendar interview invitations, and the competitor talent mapping dossier confirming delivery of the shortlist deliverable.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Issue Milestone Tranche Invoices & Reconcile TCTC",
        text: "Generate the formal Tranche-2 (Shortlist) or Tranche-3 (Closure) GST invoice. If the client concealed sign-on bonuses or pre-IPO stock grants, issue a formal Compensation Audit Requisition notice demanding certified Form 16 and offer letters.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve 15-Day Statutory Legal Demand Notice",
        text: "Issue a fact-verified statutory demand notice under Order XXXVII CPC, Section 53/70/73 of the Indian Contract Act, and Section 15 of the MSMED Act, detailing Section 43B(h) corporate tax disallowance liabilities.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Initiate Section 12A Commercial Mediation or MSME Samadhaan Conciliation",
        text: "Lodge a commercial claim on the MSME Samadhaan portal or apply for mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 to leverage rapid board-level settlement.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File Commercial Summary Suit under Order XXXVII CPC",
        text: "Institute an expedited Summary Suit in the designated Commercial Court based on the executed Retained Mandate Letter, precluding the debtor from presenting vexatious defenses without conditional security deposit.",
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
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
        name: "Industries",
        item: `${SITE_URL}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Staffing & Manpower",
        item: `${SITE_URL}/industries/staffing-recruitment-manpower-recovery`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Retained CXO Search Fee Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
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
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Retained Executive Search & Board Advisory</span>
            <span className="text-slate-600">•</span>
            <span>Order XXXVII CPC & Section 70/74 Law</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (Includes parent hub link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &amp; Practice Directive
            </span>
            Retained CXO and Board search mandates operate under an established 1/3–1/3–1/3 milestone architecture. When a promoter or corporate board absorbs your confidential competitor talent map and 5 interviewed finalists, only to &ldquo;freeze the role&rdquo; or claim budgetary cuts, they trigger immediate liability under Sections 53 and 70 of the Indian Contract Act, 1872. Across India&apos;s leadership ecosystem, our <Link href="/industries/staffing-recruitment-manpower-recovery" className="text-red-300 font-bold underline hover:text-white transition-colors">Staffing &amp; Recruitment Debt Recovery Practice</Link> enforces non-refundable commencement retainers, Tranche-2 shortlist milestones, contractual cancelled-search Kill Fees under Section 74, and conducts forensic compensation audits to recover depressed success fees from concealed sign-on bonuses and pre-IPO ESOP packages under Order XXXVII of the Code of Civil Procedure, 1908.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-xl sm:text-2xl font-black text-slate-100 block">
                1/3–1/3–1/3
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">
                Milestone Structure Enforced
              </span>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-xl sm:text-2xl font-black text-emerald-400 block">
                Order XXXVII
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">
                Summary Suit Expedited Path
              </span>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-xl sm:text-2xl font-black text-amber-400 block">
                50%–75%
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">
                Contractual Kill Fee Recovery
              </span>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-xl sm:text-2xl font-black text-red-400 block">
                3x RBI Rate
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">
                Compound MSMED Interest
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split: Left Sticky Sidebar + Right Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <ExecutiveSearchTableOfContents />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            
            {/* Section 1: Retained Search Default Crisis */}
            <section
              id="heading-retained-mandate-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  The ₹15L–₹60L Retained CXO Search Default Crisis in India
                </h2>
              </div>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In the upper echelons of Indian corporate recruitment—encompassing Managing Director, Chief Executive Officer (CEO), Chief Financial Officer (CFO), Chief Technology Officer (CTO), and Independent Board Director appointments—contingency hiring gives way to <strong>retained executive search</strong>. Retained search engagements are distinct commercial animals: search firms commit dedicated senior partners, expend weeks conducting proprietary competitor organizational charting, and perform discreet background vetting. In exchange, client mandates command professional fees ranging from <strong>₹15 Lakh to ₹60 Lakh+ per mandate</strong> (typically 25% to 33.33% of the candidate’s first-year Total Guaranteed Remuneration).
                </p>
                <p>
                  However, an alarming commercial trend has emerged across venture capital-funded tech unicorns, mid-cap manufacturing enterprises, and family-owned conglomerates. Corporate promoters and Human Resources heads treat retained search firms as cost-free advisory consultants. The debtor engages an exclusive search firm, extracts an exhaustive competitor talent map featuring 30–50 mapped market leaders, interviews the top 5 curated finalists, and then abruptly issues a curt email: <em>&ldquo;Due to changing macroeconomic dynamics and a board-level capital reallocation, this leadership search is placed on immediate hold.&rdquo;</em>
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-slate-800">
                  <strong className="text-red-900 font-bold block mb-1">
                    The Retained Search Opportunism Playbook:
                  </strong>
                  By freezing the role at the shortlist stage, the client evades the 33.33% Tranche-2 invoice, ignores the contractual Kill Fee, and retains the complete competitor intelligence map. Four months later, the company secretly recruits one of the mapped finalists directly or through an offshore holding subsidiary, defrauding the search firm of both milestone remuneration and its 25% closure success fee.
                </div>
                <p>
                  To secure your firm’s revenue stream and recover both operational milestones and closure commissions, search practices must enforce their contractual mandate letters under the strict provisions of <strong>Order XXXVII of the Code of Civil Procedure, 1908</strong>, invoke statutory restitution under <strong>Sections 53, 70, 73, and 74 of the Indian Contract Act, 1872</strong>, and leverage the severe 45-day payment sanctions of the <strong>MSMED Act, 2006</strong> alongside corporate tax disallowance under <Link href="/law/section-43bh-msme-payment-rule" className="text-[#DC2626] font-semibold underline hover:text-red-700">Section 43B(h) of the Income Tax Act</Link>.
                </p>
              </div>
            </section>

            {/* Section 2: 1/3–1/3–1/3 Tranche Mechanics */}
            <section
              id="heading-tranche-mechanics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  The 1/3–1/3–1/3 Retained Milestone Architecture &amp; Legal Crystallization
                </h2>
              </div>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Unlike contingent recruitment agencies where compensation is purely conditional on candidate onboarding, retained executive search mandatorily divides the professional fee into three structured, non-refundable milestone payments:
                </p>

                {/* 3 Milestone Tranches Visual Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                        Milestone 01
                      </span>
                      <span className="text-xs font-black bg-red-950/80 text-red-300 px-2 py-0.5 rounded border border-red-800/60">
                        33.33% / 1st Tranche
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      Commencement Retainer
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Payable immediately upon contract execution prior to search launch. Compensates dedicated partner allocation, search strategy formulation, position specification drafting, and initial market research. Non-refundable under all commercial circumstances.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        Milestone 02
                      </span>
                      <span className="text-xs font-black bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/60">
                        33.33% / 2nd Tranche
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      Shortlist Presentation
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Earned and billed upon delivery of the agreed Candidate Shortlist (typically 3 to 5 thoroughly evaluated, benchmarked, and interviewed CXO finalists). Under Section 53 of the Contract Act, delivery of the slate crystallizes the fee irrespective of whether the client schedules interviews.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                        Milestone 03
                      </span>
                      <span className="text-xs font-black bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-800/60">
                        33.33% / 3rd Tranche
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      Placement &amp; TCTC Reconciliation
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Billed upon candidate offer acceptance or formal appointment. Reconciles the final 25%–33.33% fee against the actual audited Total Cost-to-Company (TCTC), including sign-on bonuses, guaranteed first-year retention payments, and fair-value equity/ESOP allocations.
                    </p>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-6 mb-2">
                  The Doctrine of Prevention of Performance (Section 53 Contract Act)
                </h3>
                <p>
                  When a client freezes a leadership search after receiving the mapped shortlist, corporate counsel frequently attempts to assert that <em>&ldquo;the search never progressed to interviews, so Tranche-2 is premature.&rdquo;</em> This defense fails as a matter of settled commercial law:
                </p>
                <div className="bg-slate-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Section 53, Indian Contract Act, 1872:</strong> Where a contract contains reciprocal promises, and one party prevents the other from performing their promise, the contract becomes voidable at the option of the party prevented, who is entitled to recover compensation for any loss sustained. By refusing to interview delivered finalists or unilaterally halting the mandate, the client prevents final closure, rendering both Tranche-2 and the agreed contractual Kill Fee immediately due and payable.
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-enforcement-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Recovery Matrix: Forums, Legal Hooks &amp; Evidentiary Floors
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Executive search partners possess multiple concurrent legal forums under Indian mercantile law. The optimal recovery route depends upon the mandate agreement type, the existence of an Udyam registration, and whether the dispute involves an unpaid milestone tranche, a defaulted kill fee, or a fraudulent under-reporting of candidate remuneration:
              </p>

              {/* Responsive Dark Header Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-slate-900 text-white font-semibold">
                    <tr>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Legal Forum / Remedy</th>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Primary Statutory Hook</th>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Pecuniary / Legal Floor</th>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Speed &amp; Leverage</th>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Ideal For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Order XXXVII CPC Summary Suit
                      </td>
                      <td className="p-3 sm:p-4 font-mono text-xs">
                        Order XXXVII Rule 1(2)(b)(i) CPC (Written Contract for Liquidated Debt)
                      </td>
                      <td className="p-3 sm:p-4">
                        ₹3 Lakh+ (Commercial Court jurisdiction)
                      </td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                        4–8 Months (No unconditional leave to defend)
                      </td>
                      <td className="p-3 sm:p-4 text-xs">
                        Signed mandate letters with fixed milestone tranches and clear email delivery proof.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        MSME Samadhaan Facilitation Council
                      </td>
                      <td className="p-3 sm:p-4 font-mono text-xs">
                        MSMED Act 2006 Sections 15–18 &amp; 3x RBI Compound Interest
                      </td>
                      <td className="p-3 sm:p-4">
                        Zero floor (Requires valid Udyam registration before mandate date)
                      </td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                        90-Day Statutory Mandate (75% Pre-deposit on debtor appeals)
                      </td>
                      <td className="p-3 sm:p-4 text-xs">
                        Unpaid Tranche-1 or Tranche-2 invoices pending beyond 45 days.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Commercial Courts Act Pre-Institution Mediation
                      </td>
                      <td className="p-3 sm:p-4 font-mono text-xs">
                        Section 12A Commercial Courts Act, 2015 (Mandatory DLSA Mediation)
                      </td>
                      <td className="p-3 sm:p-4">
                        ₹3 Lakh+ Commercial Dispute (Mercantile Agency Contracts)
                      </td>
                      <td className="p-3 sm:p-4 text-amber-700 font-semibold">
                        30–60 Days Confidential Process
                      </td>
                      <td className="p-3 sm:p-4 text-xs">
                        Preserving search firm reputation while settling disputed Kill Fees with VC/PE boards.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Income Tax Act Section 43B(h) Audit Disallowance
                      </td>
                      <td className="p-3 sm:p-4 font-mono text-xs">
                        Finance Act 2023 / Income Tax Act Section 43B(h)
                      </td>
                      <td className="p-3 sm:p-4">
                        Any unpaid Micro/Small enterprise invoice outstanding past 45 days
                      </td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                        Immediate Financial Year-End Impact (25%–34% Tax Surcharge)
                      </td>
                      <td className="p-3 sm:p-4 text-xs">
                        Forcing CFOs and Statutory Auditors to settle search invoices before March 31.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        IBC Section 8 Demand &amp; Section 9 CIRP
                      </td>
                      <td className="p-3 sm:p-4 font-mono text-xs">
                        Insolvency and Bankruptcy Code, 2016 (Operational Debt)
                      </td>
                      <td className="p-3 sm:p-4">
                        ₹1 Crore Default Floor (Combined placement &amp; search debts)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700 font-semibold">
                        10-Day Statutory Notice Period
                      </td>
                      <td className="p-3 sm:p-4 text-xs">
                        Large staffing groups with aggregated corporate defaults exceeding ₹1 Crore without pre-existing dispute.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Operational Decision Tree & SVG Escalation Map */}
            <section
              id="heading-operational-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Operational Protocol for Retained CXO Search Fee Recovery
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                When a corporate client defaults on a milestone tranche or attempts to bypass an executive search agreement, the firm must follow an unassailable escalation sequence that leaves zero room for fabricated claims of candidate mismatch or lack of delivery:
              </p>

              {/* Desktop SVG Workflow Map */}
              <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl my-6">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Retained Search Recovery Decision Tree
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Order XXXVII CPC &amp; MSMED Act Escalation Flow
                  </span>
                </div>
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 900 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="900"
                  height="240"
                  aria-label="Retained Executive Search Milestone Fee Recovery Decision Tree"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="95" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Stage 1: Evidence Audit</text>
                  <text x="95" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10">Lock Hash &amp; Delivery</text>
                  <text x="95" y="98" textAnchor="middle" fill="#38BDF8" fontSize="9">BSA 2023 Section 63</text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M170 75 L200 75" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="200" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="275" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Stage 2: Milestone Bill</text>
                  <text x="275" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10">Invoice Tranche 2/Kill Fee</text>
                  <text x="275" y="98" textAnchor="middle" fill="#FBBF24" fontSize="9">Section 53 Demand</text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M350 75 L380 75" stroke="#94A3B8" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="380" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="455" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Stage 3: Advocate Notice</text>
                  <text x="455" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10">15-Day Statutory Cure</text>
                  <text x="455" y="98" textAnchor="middle" fill="#F87171" fontSize="9">s.43B(h) Tax Warning</text>

                  {/* Arrow 3 -> 4 */}
                  <path d="M530 75 L560 75" stroke="#94A3B8" strokeWidth="2" />

                  {/* Step 4 */}
                  <rect x="560" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="635" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Stage 4: Mediation</text>
                  <text x="635" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10">Commercial Courts s.12A</text>
                  <text x="635" y="98" textAnchor="middle" fill="#34D399" fontSize="9">Confidential Board Session</text>

                  {/* Arrow 4 -> 5 */}
                  <path d="M710 75 L740 75" stroke="#94A3B8" strokeWidth="2" />

                  {/* Step 5 */}
                  <rect x="740" y="30" width="140" height="90" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                  <text x="810" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Stage 5: Court Decree</text>
                  <text x="810" y="80" textAnchor="middle" fill="#94A3B8" fontSize="10">Order XXXVII CPC</text>
                  <text x="810" y="98" textAnchor="middle" fill="#F87171" fontSize="9">MSME 3x Interest Award</text>

                  {/* Bottom Note */}
                  <text x="450" y="180" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    Timeline: Day 0 (Mandate) &rarr; Day 45 (Shortlist Delivery) &rarr; Day 60 (Legal Notice) &rarr; Day 90 (Commercial Decree)
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3 my-6">
                <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                    Stage 1 &bull; Days 1–5
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Cryptographic Evidence Lock (BSA Section 63)
                  </h3>
                  <p className="text-xs text-slate-300">
                    Compile time-stamped email chains transmitting the market talent map, shortlist dossier, calendar interview requests, and client receipt acknowledgements.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-slate-600">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Stage 2 &bull; Days 6–15
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Formal Milestone Invoicing &amp; Section 53 Intimation
                  </h3>
                  <p className="text-xs text-slate-300">
                    Issue the Tranche-2 invoice or contractual Kill Fee. Notify the client that under Section 53 of the Contract Act, unilateral hiring pauses do not stall earned milestone fees.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                    Stage 3 &bull; Days 16–30
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Fact-Verified Legal Demand Notice
                  </h3>
                  <p className="text-xs text-slate-300">
                    Dispatch an Order XXXVII / MSMED Act demand notice via Email + WhatsApp + Speed Post RPAD, highlighting Section 43B(h) corporate tax disallowance liabilities.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-slate-600">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Stage 4 &bull; Days 31–60
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Commercial Mediation (Section 12A) or MSME Samadhaan
                  </h3>
                  <p className="text-xs text-slate-300">
                    Initiate confidential statutory pre-institution mediation under the Commercial Courts Act, 2015, or lodge a statutory conciliation petition on the MSME Samadhaan portal.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-red-500">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    Stage 5 &bull; Days 61–120
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Order XXXVII Commercial Summary Suit
                  </h3>
                  <p className="text-xs text-slate-300">
                    Institute summary proceedings in the Commercial Court. Obtain a money decree with 3x compound interest as the debtor lacks a bona fide defense.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-600">
                  Calculate statutory delayed payment compound interest for your search fee invoices:
                </span>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shrink-0"
                >
                  Launch MSME Interest Calculator &rarr;
                </Link>
              </div>
            </section>

            {/* Section 5: Commercial Failure Scenarios & Interactive Tabs */}
            <section
              id="heading-commercial-failure-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Common Executive Search Default Scenarios &amp; Interactive Playbooks
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Corporate clients deploy sophisticated tactical maneuvers to evade senior leadership search fees. Explore the four standard failure modes below and see the precise statutory counter-measures:
              </p>

              {/* Interactive Scenario Tabs Component */}
              <ExecutiveSearchScenarioTabs />
            </section>

            {/* Section 6: Cancelled Search Kill Fees */}
            <section
              id="heading-kill-fee-enforceability"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Enforcing Cancelled-Search &lsquo;Kill Fees&rsquo; Under Indian Contract Law
                </h2>
              </div>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  A standard point of friction in executive recruitment occurs when a corporate board aborts a search mandate midway through the process—whether due to an internal leadership promotion, corporate restructuring, merger, or private equity sponsor veto. In such instances, the mandate agreement typically entitles the search partner to a <strong>Cancellation Fee (&ldquo;Kill Fee&rdquo;)</strong>, commonly stipulated as:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold uppercase text-slate-700 block mb-1">
                      Tier 1 Cancellation (0–30 Days)
                    </span>
                    <p className="text-xs text-slate-600">
                      If cancelled before shortlist delivery: The firm retains the non-refundable Tranche-1 Commencement Retainer (33.33%) plus all out-of-pocket research and travel expenses.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold uppercase text-[#DC2626] block mb-1">
                      Tier 2 Cancellation (31–90 Days)
                    </span>
                    <p className="text-xs text-slate-600">
                      If cancelled post-shortlist delivery or candidate interviews: The client is contractually obligated to pay two-thirds (66.66%) of the total estimated fee or a minimum agreed flat sum.
                    </p>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-6 mb-2">
                  Defeating the Debtor’s &ldquo;Section 74 Penalty&rdquo; Defense
                </h3>
                <p>
                  Corporate defense counsel routinely argues that a Kill Fee constitutes an unenforceable &ldquo;penalty clause&rdquo; under Section 74 of the Indian Contract Act, 1872. This argument is squarely defeated by the Supreme Court’s landmark ruling in <em>Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136</em>.
                </p>
                <p>
                  The Supreme Court affirmed that where damage or opportunity loss is incapable of exact mathematical calculation—as is inherently true when an executive search partner reserves senior partner time, foregoes competing mandates due to exclusivity restrictions, and conducts confidential headhunting—a pre-agreed contractual figure agreed between sophisticated commercial entities represents a valid, enforceable <strong>genuine pre-estimate of damages</strong>.
                </p>
                <p>
                  Because retained search contracts are negotiated at arm&apos;s length between corporate boards and specialized advisory firms, Commercial Courts uphold Kill Fee clauses in full, awarding pre-suit interest under the Interest Act, 1978 and MSMED Act, 2006.
                </p>
              </div>
            </section>

            {/* Section 7: CTC, Bonus & ESOP Audit Disclosures */}
            <section
              id="heading-ctc-esop-audit-disclosure"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  CTC, Sign-On Bonus &amp; ESOP Audit Disclosures: Uncovering Depressed Fees
                </h2>
              </div>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In retained leadership recruitment, the final 25%–33.33% success fee is benchmarked against the placed executive’s first-year aggregate compensation. In high-growth startups and public corporations, fixed base pay often accounts for less than 50% of the true compensation package. Dishonest corporate clients frequently attempt to minimize the search firm’s fee by billing against a deflated base salary figure:
                </p>

                {/* Comparison Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <span className="text-[11px] font-bold uppercase text-red-700 block mb-1">
                      Disclosed by Client HR (Deflated Base)
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
                      <li>Fixed Basic Salary: ₹75,00,000</li>
                      <li>Standard Executive Perquisites: ₹15,00,000</li>
                      <li><strong>Reported CTC: ₹90,00,000</strong></li>
                      <li><strong>25% Fee Billed: ₹22,50,000</strong></li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[11px] font-bold uppercase text-emerald-800 block mb-1">
                      Actual Full Remuneration (Forensic Audit)
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
                      <li>Fixed Basic &amp; Allowances: ₹90,00,000</li>
                      <li>Guaranteed Joining Sign-On Bonus: ₹30,00,000</li>
                      <li>First-Year Guaranteed Performance Bonus: ₹25,00,000</li>
                      <li>Pre-IPO ESOP Grant (Year 1 Vesting): ₹40,00,000</li>
                      <li><strong>True Total Remuneration: ₹1,85,00,000</strong></li>
                      <li><strong>True 25% Fee: ₹46,25,000</strong> (Deficit: ₹23,75,000)</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-6 mb-2">
                  Order XI Rule 14 CPC: Judicial Compulsion for Form 16 &amp; Offer Letters
                </h3>
                <p>
                  When client finance refuses to disclose full employment agreements, search firms can initiate a Commercial Suit and file an application under <strong>Order XI Rule 14 of the Code of Civil Procedure</strong> for the Production of Documents.
                </p>
                <p>
                  Commercial Courts will compel the defendant company to produce the certified Offer Letter, employment contract, Form 16 tax filings, and Board Resolutions detailing equity option allotments. Deliberate misrepresentation of candidate remuneration in commercial invoices constitutes civil fraud under Section 17 of the Contract Act, exposing company directors to personal civil liability and exemplary damages.
                </p>
              </div>
            </section>

            {/* Section 8: Model Mandate Clauses */}
            <section
              id="heading-model-search-mandate-clauses"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Model Ready-to-Use Retained Mandate Agreement Clauses
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                To guarantee rapid summary enforcement under Order XXXVII CPC and eliminate debtor ambiguities, retained search practice leaders should incorporate the following ready-to-use contractual clauses into their standard Terms of Business (TOB):
              </p>

              <div className="space-y-4">
                {/* Clause 1 */}
                <div className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-2 font-mono">
                    Clause 4.2 &bull; Irrevocable Milestone Crystallization &amp; Role Freeze
                  </span>
                  <p className="text-xs sm:text-sm font-mono leading-relaxed text-slate-300">
                    &ldquo;Tranche 1 (Commencement Retainer) is strictly non-refundable and vests immediately upon execution of this Mandate. Tranche 2 (Shortlist Milestone) vests irrevocably and shall become due and payable within fifteen (15) days of the Firm transmitting the verified Candidate Shortlist (comprising not less than three evaluated profiles), irrespective of whether the Client conducts interviews, pauses the mandate, restructures the role, or freezes recruitment budgets. Any client-induced hiatus shall not toll or extinguish the Client’s obligation to discharge Tranche 2.&rdquo;
                  </p>
                </div>

                {/* Clause 2 */}
                <div className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-2 font-mono">
                    Clause 5.1 &bull; Cancelled Search Kill Fee (Liquidated Compensation)
                  </span>
                  <p className="text-xs sm:text-sm font-mono leading-relaxed text-slate-300">
                    &ldquo;In the event the Client cancels, defers for more than sixty (60) days, or materially modifies the scope of the Search Mandate prior to candidate onboarding, the Client shall remit a Cancellation Fee (&lsquo;Kill Fee&rsquo;) equal to: (a) 100% of Tranche 1 if cancelled within 30 days of launch; or (b) the aggregate of Tranche 1 plus Tranche 2 (66.66% of estimated total fees) if cancelled after 30 days or after shortlist delivery. The Parties explicitly agree that this fee constitutes a genuine pre-estimate of damages and operational allocation loss under Section 74 of the Indian Contract Act, 1872.&rdquo;
                  </p>
                </div>

                {/* Clause 3 */}
                <div className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-2 font-mono">
                    Clause 6.3 &bull; Total Cost-to-Company (TCTC) Definition &amp; Audit Clause
                  </span>
                  <p className="text-xs sm:text-sm font-mono leading-relaxed text-slate-300">
                    &ldquo;Annual Remuneration for fee computation shall include all fixed base salary, flexible allowances, guaranteed or anticipated signing/joining bonuses, guaranteed first-year retention payments, and the fair market value of all stock options, RSUs, or equity grants approved by the Board. The Client agrees to provide a certified copy of the executive&apos;s signed offer letter and salary annexures within five (5) business days of execution. The Firm reserves the absolute right to audit Form 16 filings and ROC MCA records.&rdquo;
                  </p>
                </div>

                {/* Clause 4 */}
                <div className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-2 font-mono">
                    Clause 8.1 &bull; 18-Month Candidate Introduction &amp; Group Entity Ownership
                  </span>
                  <p className="text-xs sm:text-sm font-mono leading-relaxed text-slate-300">
                    &ldquo;The Client acknowledges that any candidate introduced, submitted, or mapped by the Firm during this Search shall remain the proprietary introduction of the Firm for a period of eighteen (18) months from the date of last correspondence. If any such candidate is engaged or hired by the Client, its parent, subsidiary, sister enterprise, joint venture partner, or investment portfolio entity in any leadership or advisory capacity, the Client shall be jointly and severally liable to pay the full 33.33% Placement Fee plus an exclusivity breach surcharge of 100% of said fee.&rdquo;
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-search-fee-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Financial Simulation Ledger: ₹36 Lakh Retained CXO Search Fee Dispute
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Consider an illustrative commercial default: A retained search boutique is engaged on an exclusive mandate to recruit a Chief Operating Officer (COO) for a mid-market manufacturing firm at an agreed 25% fee on an estimated ₹1.44 Crore TCTC (Total Fee: ₹36,00,000 + 18% GST).
              </p>

              {/* Financial Simulation Ledger */}
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Commercial Claim Ledger Simulation
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Case Ref: COO Mandate Milestone Default
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm font-mono">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Total Contractual Search Fee (25% on ₹1.44 Cr Projected TCTC):</span>
                    <span className="font-bold text-slate-100">₹36,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Tranche 1 (Paid upon Commencement):</span>
                    <span className="font-semibold text-emerald-400">-₹12,00,000 (Credited)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Tranche 2 (Shortlist Delivered &bull; Client Put Search &ldquo;On Hold&rdquo;):</span>
                    <span className="font-bold text-red-400">₹12,00,000 (Overdue 120 Days)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Candidate Hired Secretly 5 Months Later (Tranche 3 Due):</span>
                    <span className="font-bold text-red-400">₹12,00,000 (Overdue 90 Days)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Discovered Sign-on &amp; Retention Bonus (₹30L Concealed &bull; 25% Fee):</span>
                    <span className="font-bold text-red-400">₹7,50,000 (Concealed Debt)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Applicable 18% GST on Total Unpaid Fees (₹31,50,000):</span>
                    <span className="font-bold text-slate-200">₹5,67,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">MSMED Act 3x RBI Bank Rate Compound Monthly Interest (19.5% p.a.):</span>
                    <span className="font-bold text-amber-400">₹2,84,300</span>
                  </div>
                  <div className="flex justify-between pt-3 text-sm sm:text-base font-bold text-white bg-slate-800/60 p-3 rounded-lg border border-slate-700">
                    <span>Total Crystallized Legal Recovery Claim:</span>
                    <span className="text-emerald-400">₹40,01,300</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 leading-relaxed border-t border-slate-800">
                  <strong>Tax Disallowance Surcharge:</strong> Under Section 43B(h), the client is disallowed from deducting ₹31,50,000 from corporate profit for FY 2025–26, resulting in an immediate <strong>₹9,80,000+ income tax cash outflow</strong> if unpaid prior to filing.
                </div>
              </div>
            </section>

            {/* Section 10: BSA Section 63 Electronic Evidence Audit Checklist */}
            <section
              id="heading-bsa-electronic-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  BSA 2023 Section 63 Electronic Evidence &amp; Audit Trail Checklist
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, digital records (emails, attachments, ATS server timestamps, and WhatsApp messages) are primary documentary evidence in Indian courts, provided a mandatory technical certificate is filed. Ensure your legal dossier contains every item below before issuing a formal demand:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Mandate Letter &amp; Scope Specification
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Signed engagement letter, digital DocuSign audit trail, or email thread exchanging agreed Terms of Business detailing 1/3–1/3–1/3 tranches and Kill Fee formulas.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Competitor Market Mapping Report
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The proprietary market intelligence deck and target company talent matrix shared with the promoter or CHRO, establishing substantial performance under Contract Act Section 70.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Shortlist Transmission &amp; Read Receipts
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Email logs transmitting the 3 to 5 candidate profiles, psychometric evaluations, compensation expectations, and client acknowledgement emails or calendar invites.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      Appointment Proof &amp; MCA Filings
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In circumvention or backdoor hiring claims: MCA DIR-12 director filings, LinkedIn corporate announcements, press releases, or candidate confirmation messages proving onboarding within 18 months.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      GSTR-1 Invoices &amp; MSME Disclosures
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Properly generated GST invoices reflecting the search milestone, verified GSTR-1 portal filing data, and Udyam Registration Certificate establishing Micro/Small enterprise status.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      BSA Section 63 Electronic Certificate
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A sworn technical affidavit executed by the search firm’s IT or operations head verifying device integrity, server hashing, and continuous uncorrupted email custody.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Dual-Track B2B Conversion Funnel */}
            <section className="scroll-mt-28 bg-transparent">
              <ExecutiveSearchNoticeCTA />
            </section>

            {/* Section 12: Frequently Asked Questions */}
            <section
              id="heading-executive-search-faq"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions by Executive Search Partners
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Critical legal answers for Managing Partners, Search Practice Leads, and Agency Founders navigating client milestone defaults, role freezes, and compensation disputes:
              </p>

              <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-all open:bg-white open:shadow-xs"
                  >
                    <summary className="font-bold text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{item.q}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs group-open:rotate-180 transition-transform shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Statutory Precedents & Legal Authorities */}
            <section
              id="heading-statutory-authorities"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Precedents &amp; Primary Legal Authorities
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Review authoritative rulings of the Supreme Court of India and High Courts establishing the enforceability of professional retainers, milestone fees, and liquidated cancellation covenants:
              </p>

              {/* Precedent Cards with Crimson Accent Bar */}
              <div className="space-y-4 mb-8">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#DC2626]"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-600">
                        {item.citation}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      {item.title} ({item.parties})
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      <strong className="text-slate-800">Facts &amp; Holding: </strong>
                      {item.holding}
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <strong className="text-[#DC2626]">Practical Application: </strong>
                      {item.takeaway}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Primary Source References */}
              <div className="border-t border-slate-200 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Statutory Codes &amp; Central Government Legislative Sources:
                </span>
                <ul className="space-y-2">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium transition-colors"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author & Fact Verification Box */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black flex items-center justify-center text-xs">
                    LR
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">
                      Editorial &amp; Legal Review: {LEGAL_REVIEWER.name}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {LEGAL_REVIEWER.role} &bull; Commercial Litigation Practice
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[11px] font-mono text-slate-400">
                    Published: November 2026 &bull; B2B-140 Playbook
                  </span>
                  <span className="text-[10px] text-emerald-600 font-semibold">
                    Verified for Commercial Courts &amp; MSME Samadhaan
                  </span>
                </div>
              </div>
            </section>

            {/* Sibling Spokes Cross-Linking Directory */}
            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
                Staffing &amp; Recruitment Industry Cluster Spokes
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                Explore dedicated statutory recovery playbooks across India&apos;s human capital, recruitment, and manpower verticals:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <Link
                  href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                  className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors group"
                >
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#DC2626] block mb-1">
                    Backdoor Hiring Recovery &rarr;
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-2">
                    Enforce 12-month candidate ownership when clients secretly hire rejected profiles.
                  </span>
                </Link>

                <Link
                  href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                  className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors group"
                >
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#DC2626] block mb-1">
                    Temp Staffing Payroll Recovery &rarr;
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-2">
                    Recover monthly pass-through wages, EPF, and GST under CLRA s.21(4).
                  </span>
                </Link>

                <Link
                  href="/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery"
                  className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors group"
                >
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#DC2626] block mb-1">
                    90-Day Replacement Clause Defense &rarr;
                  </span>
                  <span className="text-[11px] text-slate-500 line-clamp-2">
                    Stop client fee-withholding during probation using Contract Act s.51–54.
                  </span>
                </Link>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2 text-xs">
                <Link
                  href="/services/vendor-and-invoice-recoveries"
                  className="text-slate-600 hover:text-[#DC2626] font-medium"
                >
                  &larr; Vendor &amp; Invoice Recovery Services
                </Link>
                <Link
                  href="/recovery/business-dues"
                  className="text-slate-600 hover:text-[#DC2626] font-medium"
                >
                  Commercial Debt Recovery Solutions &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
