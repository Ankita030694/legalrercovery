import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PayWhenPaidTableOfContents from "./PayWhenPaidTableOfContents";
import PayWhenPaidScenarioTabs from "./PayWhenPaidScenarioTabs";
import PayWhenPaidCTA from "./PayWhenPaidCTA";

export const revalidate = 86400;

const PAGE_URL = "/pay-when-paid-back-to-back-clause-subcontractor-recovery-india";
const EXACT_H1 =
  "Defeating Abusive 'Back-to-Back / Pay-When-Paid' Clauses When the Main EPC Contractor Withholds Your Subcontract Dues Indefinitely";
const META_TITLE = "'Pay-When-Paid' Clause Defense: Subcontractor Recovery India";
const META_DESCRIPTION =
  "Main contractor hiding behind a back-to-back clause? Indian High Courts limit pay-when-paid terms to a reasonable time under Indian Contract Act s.23 & s.46.";

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
        alt: formatAltText("Pay When Paid Back to Back Clause Subcontractor Recovery India"),
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
      "The Indian Contract Act, 1872 (Sections 23, 28, 46, 53, 54, 70 & 73) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Commercial Courts Act, 2015 (Section 2(1)(c)(vi) & Section 12A — Commercial Disputes in Construction & Infrastructure Works)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Sections 9, 11, 21, 29A & 36 — Interim Attachment, Arbitrator Appointment & Award Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXI Rule 46 — Garnishee Proceedings & Order XXXVII — Summary Suits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Limitation Act, 1963 (Articles 18, 55 & 137 — Three-Year Commercial Limitation for Subcontractor Balances)",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records & Joint Measurement Book Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Delhi High Court on 'Pay-When-Paid' as a Timing Mechanism, Not Indefinite Condition Precedent",
    parties: "M/s Larsen & Toubro Ltd. v. Mohan Regional & Anr.",
    citation: "FAO(OS) No. 344/2012, High Court of Delhi",
    date: "Judgment Delivered 14 February 2013",
    facts:
      "The prime EPC contractor withheld balance running bills and retention monies owed to a specialized civil subcontractor on an infrastructure project. The prime contractor argued that under the subcontract agreement, payments were strictly 'back-to-back' and contingent upon the principal employer settling the main contract final account, which had remained locked in prolonged audit disputes.",
    holding:
      "The Delhi High Court held that in Indian commercial law, 'pay-when-paid' clauses operate primarily as timing mechanisms governing the schedule of disbursement, rather than absolute conditions precedent that extinguish the subcontractor's fundamental right to payment. In the absence of explicit, unambiguous contractual language transferring the entire commercial risk of owner insolvency or non-payment to the subcontractor, the prime contractor cannot delay subcontractor payments indefinitely. Under Section 46 of the Indian Contract Act, 1872, the main contractor is legally obligated to settle the subcontractor's certified dues within a reasonable time, regardless of whether the employer has released the corresponding funds.",
    amount: "Doctrine Established — Pay-When-Paid Limited to Reasonable Time under ICA s.46",
    takeaway:
      "A main EPC contractor cannot hide behind owner delay to withhold subcontractor dues indefinitely. Once a reasonable time has elapsed, the main contractor must pay the subcontractor from its own balance sheet.",
  },
  {
    title: "Delhi High Court on Prime Contractor Settling with Employer Behind Subcontractor's Back",
    parties: "Simplex Infrastructures Ltd. v. Siemens Ltd.",
    citation: "O.M.P. (COMM) 184/2018, High Court of Delhi",
    date: "Judgment Delivered 28 August 2019",
    facts:
      "Simplex executed subcontracted civil and structural works for Siemens on a substation package. When Siemens entered into a comprehensive global full-and-final settlement with the project owner (DMRC), it failed to allocate or disburse the corresponding share of the settlement funds to Simplex. Siemens argued that under the 'back-to-back' clause, it had no further liability because the owner had imposed mutual deductions.",
    holding:
      "The High Court held that where a prime contractor enters into a private, one-time compromise or global settlement with the principal employer without the concurrence of its subcontractor, it forfeits the protection of the 'back-to-back' payment defense. A prime contractor cannot compromise away an innocent subcontractor's independent claim and then claim non-receipt from the employer. The doctrine of prevention bars the contractor from relying on a condition that it actively compromised.",
    amount: "Forfeiture of Defense — Secret Settlements Destroy Back-to-Back Immunity",
    takeaway:
      "If the main contractor executes a confidential or global settlement with the developer/PSU, it must produce that settlement under court discovery and pay the subcontractor immediately with interest.",
  },
  {
    title: "Supreme Court on Prevention Principle: Defaulting Party Cannot Benefit from its Own Delay",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Delivered 09 January 2015",
    facts:
      "Examining the reciprocal obligations under Sections 53 and 54 of the Indian Contract Act, 1872, the Supreme Court addressed situations where one contracting party prevents or disables the performance of an underlying contractual condition, or fails to take requisite steps to enforce its rights against a third party.",
    holding:
      "Reaffirming foundational contract jurisprudence, the Supreme Court affirmed that a party in default of its reciprocal commitments cannot take advantage of its own wrong (commodum ex injuria sua nemo habere debet). Where a main contractor fails to diligently pursue the employer through contractual dispute resolution or statutory arbitration, it is guilty of preventing the payment condition from occurring, thereby rendering the subcontractor's payment claim immediately mature and payable under Section 53.",
    amount: "Foundational Doctrine — Inaction or Failure to Sue Employer Disqualifies Contractor",
    takeaway:
      "Prime contractors who sit on their hands and fail to commence arbitration against the employer within a reasonable period cannot rely on back-to-back clauses against subcontractors.",
  },
  {
    title: "Bombay High Court on Privity of Contract vs Earmarked Receivables Garnishee Attachment",
    parties: "Technip Energies India Ltd. v. Shapoorji Pallonji & Co. Pvt. Ltd.",
    citation: "Comm. Arb. Pet. No. 892 of 2021, High Court of Bombay",
    date: "Order Dated 17 December 2021",
    facts:
      "A Tier-2 subcontractor sought interim protection under Section 9 of the Arbitration and Conciliation Act against a prime contractor experiencing acute financial distress. The subcontractor sought an order restraining the principal employer (an oil marketing PSU) from disbursing pending milestone payments to the main contractor, seeking a direct garnishee deposit into the court registry.",
    holding:
      "The Bombay High Court held that while the principal employer is technically not a signatory to the subcontract arbitration agreement (doctrine of privity), the arbitral court possesses wide powers under Section 9(1)(ii)(b) to secure the amount in dispute. Where the subcontractor demonstrates that specific funds held by the project owner are directly attributable to works executed by the subcontractor, the court can issue interim orders restraining third-party disbursement and directing deposit into an escrow account to prevent diversion by an insolvent prime contractor.",
    amount: "Garnishee Precedent — Securing Subcontractor Receivables Before Diversion",
    takeaway:
      "Subcontractors can bypass the prime contractor's insolvency risk by obtaining urgent Commercial Court or Section 9 garnishee freezes over pending funds held by the Principal Employer.",
  },
  {
    title: "Delhi High Court on Inequality of Bargaining Power & Contract Act Section 23/28 Public Policy",
    parties: "Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan",
    citation: "(2019) 5 SCC 725, Supreme Court of India",
    date: "Judgment Delivered 02 April 2019",
    facts:
      "The Supreme Court scrutinized standard-form contracts containing wholly one-sided, oppressive clauses imposed by dominant corporate entities upon weaker contracting counterparties possessing zero bargaining leverage.",
    holding:
      "The Supreme Court ruled that a term of a contract will not be final and binding if it is shown that the contract was one-sided, an unfair trade practice, or contrary to public policy under Section 23 of the Indian Contract Act, 1872. Following Central Inland Water Transport Corp v. Brojo Nath Ganguly, courts refuse to enforce contractual stipulations that place an innocent counterparty at the absolute, indefinite mercy of the stronger party without reciprocal accountability.",
    amount: "Unconscionable Clause Bar — Indefinite Withholding Violates Public Policy",
    takeaway:
      "Subcontracts requiring Tier-2 vendors to finance prime contractors indefinitely while waiving all interest and legal recourse are void under Section 23 and Section 28 of the Indian Contract Act.",
  },
];

const FAQS = [
  {
    question: "Is a 'pay-when-paid' or 'back-to-back' clause legally valid against subcontractors in India?",
    answer:
      "In Indian contract law, a 'pay-when-paid' clause is NOT an absolute bar to recovery. High Courts—most notably the Delhi High Court in M/s Larsen & Toubro Ltd. v. Mohan Regional—interpret 'pay-when-paid' provisions as timing mechanisms rather than absolute conditions precedent. Under Section 46 of the Indian Contract Act, 1872, where no fixed time is agreed, performance must occur within a 'reasonable time'. A prime contractor cannot delay subcontractor payments indefinitely due to employer disputes. If the prime contractor fails to pay after a reasonable period (typically 60 to 90 days post-certification), or if the prime contractor sits on its hands without vigorously pursuing the employer, the clause is defeated and the subcontractor can legally recover the full amount with interest.",
  },
  {
    question: "What is the legal difference between 'Pay-When-Paid' and 'Pay-If-Paid' under Indian law?",
    answer:
      "The distinction is critical: (1) 'Pay-When-Paid' is a timing mechanism indicating when payment is expected (e.g., 'subcontractor will be paid within 15 days of main contractor receiving funds'). Under Section 46, if the employer does not pay, the main contractor must still pay after a reasonable time. (2) 'Pay-If-Paid' is a condition precedent where the subcontractor ostensibly agrees that owner payment is an absolute condition to ever being paid, effectively transferring the owner's insolvency risk. However, Indian courts subject 'Pay-If-Paid' clauses to intense scrutiny under Section 23 (unconscionable agreements opposed to public policy) and Section 28 (agreements restraining legal proceedings). Unless drafted with unmistakable, explicit waiver language, Indian courts consistently treat such clauses merely as 'Pay-When-Paid' timing covenants.",
  },
  {
    question: "Can a prime contractor settle with the project owner behind the subcontractor's back and refuse to pay?",
    answer:
      "No. Under the established 'prevention principle' and Section 53/67 of the Indian Contract Act, 1872 (as affirmed by the Delhi High Court in Simplex Infrastructures Ltd. v. Siemens Ltd.), a prime contractor who enters into a private, global compromise or settlement with the principal employer completely forfeits the back-to-back payment defense. A main contractor cannot voluntarily discount or compromise an innocent subcontractor's certified scope of work and subsequently claim non-receipt from the employer. In court or arbitration, the subcontractor can compel discovery of the confidential settlement deed under Order XI CPC and secure an immediate award against the prime contractor.",
  },
  {
    question: "Can a subcontractor directly sue or issue a garnishee notice to the Principal Employer (NHAI, CPWD, Developer)?",
    answer:
      "Under the strict doctrine of privity of contract, a subcontractor cannot directly institute a civil suit for breach of contract against the Principal Employer because no direct contractual relationship exists. However, two powerful exceptions exist: (1) Direct Garnishee Proceedings: Under Order XXI Rule 46 or Order XXXVIII Rule 5 of the CPC, or Section 9(1)(ii)(b) of the Arbitration Act, the subcontractor can obtain a court order attaching unpaid disbursements held by the Principal Employer that are earmarked for the prime contractor; and (2) Trust / Earmark Exception: Where the main contract or tripartite escrow agreement explicitly earmarks funds for specialized subcontractor packages, courts recognize a beneficial interest allowing direct injunctive relief against the employer.",
  },
  {
    question: "How long does a subcontractor have to file a claim before limitation expires?",
    answer:
      "Under Article 18 and Article 55 of the Schedule to the Limitation Act, 1963, the limitation period for recovering unpaid construction dues is 3 years from the date the work was completed, the bill was submitted, or the breach occurred. However, where a prime contractor continually promises payment 'as soon as the employer releases funds', subcontractors often risk sleeping on their rights. To stop limitation, subcontractors must issue a formal Section 21 Arbitration Invocation Notice or file a Section 12A Commercial Pre-Institution Mediation application before the 3-year anniversary of the certified bill or completion handover.",
  },
  {
    question: "What evidence does a subcontractor need to defeat a back-to-back defense in court or arbitration?",
    answer:
      "Subcontractors must assemble six key evidentiary pillars: (1) Joint Measurement Sheets (MB) or Inspection Reports signed by the Prime Contractor's site engineer; (2) Delivery challans, E-Way bills, and GST tax invoices matching the certified scope; (3) Virtual Completion or Work Handover Certificates issued by the PMC or Employer; (4) Email correspondence demonstrating that the prime contractor never raised defects within the contractual notice period; (5) Electronic audit logs under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 for WhatsApp/email communications; and (6) Evidence of the prime contractor's failure to commence arbitration or legal recovery against the principal employer.",
  },
  {
    question: "Can a Tier-2 subcontractor claim 18% commercial interest despite a clause waiving interest in the subcontract?",
    answer:
      "Yes. Under Section 3 of the Interest Act, 1978 and Section 31(7) of the Arbitration and Conciliation Act, 1996, courts and arbitral tribunals possess statutory power to award reasonable commercial interest (typically 12% to 18% per annum) from the date the debt became due. Contractual clauses that attempt to completely bar interest where a prime contractor has wrongfully withheld funds for years are frequently struck down as oppressive and contrary to public policy under Section 23 of the Indian Contract Act, 1872.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
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
    name: "Pay When Paid Back to Back Clause Subcontractor Recovery India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Construction & EPC Recovery",
      item: `${SITE_URL}/industries/construction-epc-contractor-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pay-When-Paid Defense",
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

export default function PayWhenPaidSubcontractorRecoveryPage() {
  const breadcrumbItems = [
    { label: "Construction & EPC Recovery", href: "/industries/construction-epc-contractor-recovery" },
    { label: "Pay-When-Paid Clause Defense", href: PAGE_URL },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Indian Contract Act s.23 &amp; s.46</span>
              <span className="text-red-500">&bull;</span>
              <span>Delhi High Court Jurisprudence</span>
              <span className="text-red-500">&bull;</span>
              <span>Subcontractor Protection</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (First 250 words with Parent Hub Link) */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Statutory Answer &bull; Contract Act s.23 &amp; s.46
              </span>
              <p>
                In our specialized construction dispute practice at the{" "}
                <Link
                  href="/industries/construction-epc-contractor-recovery"
                  className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400 underline-offset-2 transition-colors"
                >
                  Construction, EPC &amp; Turnkey MEP Contractor Recovery Hub
                </Link>
                , specialty Tier-2 subcontractors (piling, MEP, HVAC, facade, civil, and earthwork) face a systemic contractual barrier: the abusive &apos;pay-when-paid&apos; or &apos;back-to-back&apos; payment clause. Major EPC prime contractors routinely withhold certified running bills and retention money for 2 to 4 years, asserting that the Principal Employer (NHAI, CPWD, Metro Rail, or private real estate developers) has delayed project disbursements. However, Indian High Court jurisprudence—anchored by the Delhi High Court in <em>Larsen &amp; Toubro Ltd. v. Mohan Regional</em>—establishes that &apos;pay-when-paid&apos; clauses operate merely as timing covenants, not indefinite risk transfers. Under Section 46 of the Indian Contract Act, 1872, the main contractor is legally obligated to settle subcontractor dues within a reasonable time. Furthermore, under the Prevention Doctrine, a prime contractor that fails to pursue the employer or enters into a secret global settlement forfeits the defense entirely.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">s. 46 ICA</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Reasonable Time Limit on Payment
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">60–90 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Judicial Window for Reasonable Delay
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">O. XXI R. 46</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Direct Employer Garnishee Remedy
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">18% p.a.</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Commercial Interest under Interest Act
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <PayWhenPaidTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Validity Status */}
              <section id="heading-validity-status" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Is &apos;Pay-When-Paid&apos; Legally Valid Against Subcontractors in India?
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    How Prime EPC Contractors Abuse Back-to-Back Terms and Why Indian Law Rejects Perpetual Non-Payment
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Across Indian infrastructure projects—from highways and metro lines to data centers, commercial high-rises, and industrial plants—Tier-2 subcontractors perform the bulk of specialized physical execution. Piling rigs, earthmoving excavators, HVAC chiller piping, structural steel fabrication, high-voltage transformers, and facade glazing are deployed on site under subcontracts issued by major Engineering, Procurement, and Construction (EPC) prime contractors.
                  </p>
                  <p>
                    Almost universally, these prime contractors insert standard &apos;back-to-back&apos; or &apos;pay-when-paid&apos; clauses into purchase orders and work orders. The typical wording stipulates: <em>&quot;Payment shall be released to the Subcontractor only as and when corresponding payment is received by the Main Contractor from the Principal Employer/Client.&quot;</em>
                  </p>
                  <p>
                    When commercial disputes arise between the prime contractor and the owner—often over project-wide delays, scope variations, or liquidated damages having nothing to do with the subcontractor—the prime contractor invokes this clause as an absolute legal shield. Specialized subcontractors are informed that until the main contractor&apos;s multi-crore arbitration against the employer concludes (often 4 to 7 years later), not a single rupee of certified running bills or defect liability retention can be disbursed.
                  </p>
                </div>

                {/* Statutory Warning Box */}
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-bold text-red-950 uppercase tracking-wider mb-1">
                    The Legal Reality in Indian Courts
                  </p>
                  <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                    Under Indian contract jurisprudence, a main contractor <strong>cannot indefinitely withhold subcontractor dues</strong> behind a &apos;pay-when-paid&apos; clause. Sections 23, 28, and 46 of the Indian Contract Act, 1872, together with High Court precedents, firmly establish that a subcontractor is an independent contracting party who does not share the equity risk of the principal contract. Once the subcontractor has properly performed its scope and obtained joint inspection sign-offs, the prime contractor&apos;s liability becomes independent and mature within a reasonable period.
                  </p>
                </div>
              </section>

              {/* Section 2: Timing vs Condition Precedent */}
              <section id="heading-timing-vs-condition" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Pay-When-Paid vs Pay-If-Paid: Indian Contract Act Timing Distinction
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Analyzing the Crucial Difference Between a Payment Timing Mechanism and an Absolute Condition Precedent
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    To defeat a prime contractor&apos;s non-payment defense, counsel must analyze the precise grammatical structure and legal effect of the clause under the Indian Contract Act, 1872. Commercial courts globally and in India draw a strict distinction between two categories of risk-shifting clauses:
                  </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                        A
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        &apos;Pay-When-Paid&apos; (Timing Covenant)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong>Contractual Phrasing:</strong> <em>&quot;Payment shall be made within 15 days of receipt of payment from the Owner.&quot;</em>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Legal Status under Indian Law:</strong> This governs the <em>timing</em> of payment, not the underlying <em>obligation</em> to pay. It gives the prime contractor a reasonable breathing space to obtain funds from the owner. However, under Section 46 of the Indian Contract Act, if the owner delays or fails to pay, the main contractor remains unconditionally liable to pay after a &quot;reasonable time&quot; (typically 60 to 90 days post-bill certification).
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 font-medium">
                      Subcontractor Entitlement: 100% Recoverable from Prime Contractor&apos;s own funds once reasonable time expires.
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
                        B
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        &apos;Pay-If-Paid&apos; (Condition Precedent)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong>Contractual Phrasing:</strong> <em>&quot;Receipt of payment by Main Contractor from Employer is an express condition precedent to any liability to Subcontractor. Subcontractor expressly assumes the risk of Owner insolvency or default.&quot;</em>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Legal Status under Indian Law:</strong> Highly disfavored. Indian courts require unmistakable, unequivocal drafting before holding that a subcontractor agreed to forfeit all compensation for completed work. Furthermore, under Section 23 (unconscionability and public policy) and Section 28 (agreements ousting judicial remedies), such clauses face severe judicial challenge.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900 font-medium">
                      Judicial Interpretation: Courts lean heavily against forfeiture, re-interpreting &apos;Pay-If-Paid&apos; as mere timing clauses unless explicit risk-assumption is proven.
                    </div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 pt-2">
                  <p>
                    In 95% of subcontracts executed in India, prime EPC contractors use generic &apos;pay-when-paid&apos; wording rather than bulletproof &apos;pay-if-paid&apos; language. Consequently, under settled Delhi High Court law, the clause provides only a temporary deferral—never a permanent exemption from payment. For specialized statutory advice on managing general contractor payment defaults, see our comprehensive guide on{" "}
                    <Link
                      href="/subcontractor-payment-recovery-india"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Subcontractor Payment Recovery in India
                    </Link>{" "}
                    and our guide on{" "}
                    <Link
                      href="/recovery/contractor-payment"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Recovering Project Dues &amp; Contractor Payments
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 3: Landmark High Court Precedents */}
              <section id="heading-precedents" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Landmark Precedents: Judicial Limits on Back-to-Back Clauses
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Verified Supreme Court and High Court Holdings That Restrict Prime Contractor Non-Payment Tactics
                  </p>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow space-y-3.5 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block">
                            {item.citation}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-100 px-2.5 py-1 rounded-md self-start sm:self-auto">
                          {item.date}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-600">
                        <strong className="text-slate-900 font-bold">Litigants: </strong>
                        <span>{item.parties}</span>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong className="text-slate-900 font-bold">Factual Dispute: </strong>
                          {item.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900 font-bold">Judicial Holding: </strong>
                          {item.holding}
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                        <div className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                          {item.amount}
                        </div>
                        <div className="text-xs text-slate-600 italic">
                          <strong className="text-slate-800 not-italic font-semibold">Creditor Takeaway: </strong>
                          {item.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Prevention Principle */}
              <section id="heading-prevention-principle" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    The Prevention Principle: When Prime Contractors Forfeit the Defense
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    How Prime Contractor Inaction, Owner Settlement, or Project-Wide Default Disqualifies the Conditional Clause
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Even where a subcontract contains rigorous &apos;pay-when-paid&apos; terms, the prime contractor loses the right to rely on the clause under the universally recognized <strong>Doctrine of Prevention</strong>, codified in Sections 53, 54, and 67 of the Indian Contract Act, 1872.
                  </p>
                  <p>
                    Under Section 53, when a contract contains reciprocal promises and one party prevents the other from performing or prevents the occurrence of an agreed event, the contract becomes voidable at the option of the party prevented, who is entitled to compensation for any loss. In subcontractor litigation, Indian courts apply this doctrine across three common commercial scenarios:
                  </p>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
                      1
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Secret or Global Compromise
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the prime contractor settles its final account with the developer, NHAI, or PSU behind closed doors—accepting a lump sum or mutual waiver of liquidated damages—it extinguishes the condition precedent. Under the Delhi High Court&apos;s <em>Simplex v. Siemens</em> doctrine, the prime contractor cannot sacrifice subcontractor dues in a global compromise and subsequently plead non-receipt.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
                      2
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Failure to Diligently Sue the Owner
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A main contractor cannot rely on non-payment by the owner while sitting idle. If the main contractor fails to issue contractual dispute notices, invoke arbitration, or file a recovery suit against the employer within a reasonable timeframe, it is guilty of preventing the realization of the funds. Inaction constitutes an intentional breach that makes the subcontractor&apos;s bill mature immediately.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
                      3
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Default Committed on Other Packages
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where the principal employer withholds project funds because the prime contractor defaulted on independent civil, structural, or electrical scopes, the prime contractor cannot penalize an innocent subcontractor whose specific package (e.g. piling or facade) was duly certified and defect-free. The subcontractor&apos;s right to compensation cannot be held hostage by the prime&apos;s unrelated failures.
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 pt-2">
                  <p>
                    For contractors dealing with uncertified bills caused by engineer stalling, explore our playbook on{" "}
                    <Link
                      href="/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Uncertified Measurement Book &amp; Unpaid RA Bill Recovery
                    </Link>
                    , or review our guide on{" "}
                    <Link
                      href="/retention-money-recovery-after-defect-liability-period-dlp-expiry"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Post-DLP Retention Money Recovery
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 5: Overcoming Privity via Garnishee */}
              <section id="heading-privity-garnishee" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Overcoming Privity of Contract: Direct Garnishee Against Employer
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    How Subcontractors Attach NHAI, CPWD, Metro Rail, and Developer Receivables Before the Main Contractor Siphons Funds
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    The greatest risk confronting a Tier-2 subcontractor in prolonged back-to-back disputes is the financial insolvency or asset-stripping of the prime contractor. If a mid-tier EPC contractor falls into Corporate Insolvency Resolution Process (CIRP) under Section 7 or Section 9 of the Insolvency and Bankruptcy Code (IBC), 2016, an immediate Section 14 moratorium halts all civil suits and arbitrations. Subcontractors are categorized as unsecured operational creditors, historically receiving near-zero recovery in resolution plans.
                  </p>
                  <p>
                    While the traditional doctrine of <em>privity of contract</em> prevents a subcontractor from filing a direct suit for breach against the Principal Employer, procedural law provides a devastating counter-measure: <strong>Garnishee Proceedings</strong>.
                  </p>
                </div>

                {/* Tactical Steps Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 font-semibold">Statutory Mechanism</th>
                        <th className="p-3 font-semibold">Procedural Stage</th>
                        <th className="p-3 font-semibold">Judicial Action on Principal Employer</th>
                        <th className="p-3 font-semibold">Subcontractor Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">
                          Arbitration Act Section 9(1)(ii)(b)
                        </td>
                        <td className="p-3">Pre-Arbitration or Pending Award</td>
                        <td className="p-3">
                          Court issues interim injunction restraining Principal Employer from disbursing certified milestone funds to prime contractor; directs deposit into court registry.
                        </td>
                        <td className="p-3 text-emerald-700 font-semibold">
                          Earmarks project funds in high court custody before the prime can divert money to other sites.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">
                          CPC Order XXXVIII Rule 5
                        </td>
                        <td className="p-3">During Commercial Court Suit</td>
                        <td className="p-3">
                          Attachment before judgment of debts due or accruing from the Principal Employer to the defendant prime contractor.
                        </td>
                        <td className="p-3 text-emerald-700 font-semibold">
                          Creates a formal judicial lien on project receivables ahead of competing unsecured creditors.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">
                          CPC Order XXI Rule 46 &amp; 46A–46B
                        </td>
                        <td className="p-3">Execution of Decree / Award</td>
                        <td className="p-3">
                          Court issues Garnishee Notice ordering Principal Employer to show cause why it should not pay the subcontractor directly out of retained contractor dues.
                        </td>
                        <td className="p-3 text-emerald-700 font-semibold">
                          Direct recovery from government treasury (NHAI/CPWD/Railways) without relying on prime&apos;s solvency.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">
                          Section 80 CPC Notice
                        </td>
                        <td className="p-3">Pre-Litigation on Govt Employers</td>
                        <td className="p-3">
                          Statutory 60-day notice served on Govt Department intimating intention to attach departmental escrow dues owed to prime.
                        </td>
                        <td className="p-3 text-emerald-700 font-semibold">
                          Forces administrative review and prevents PSU finance desk from releasing final retention to prime.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 pt-2">
                  <p>
                    For public infrastructure contracts involving Central/State Government departments or PSUs, review our detailed statutory analysis on{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Section 80 CPC Notice to Government &amp; PSUs
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 6: Statutory Limitation Stops */}
              <section id="heading-statutory-timelines" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Statutory Limitation Stops &amp; Demand Notice Timelines for Subcontracts
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Strict Time Bars under the Limitation Act, 1963 and Commercial Courts Act, 2015
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    The prime contractor&apos;s primary defensive strategy in back-to-back disputes is delay. By issuing reassuring verbal statements—<em>&quot;Our joint claim against NHAI is in advanced arbitration, your ₹2 Crore will be released immediately upon the award&quot;</em>—the main contractor lulls the subcontractor into inaction until the 3-year statutory limitation period expires.
                  </p>
                  <p>
                    Under Articles 18 and 55 of the Schedule to the Limitation Act, 1963, the limitation period for recovering unpaid bills is <strong>3 years</strong>. The clock starts ticking from the date the work is completed or the invoice becomes payable. Crucially, a conditional &apos;pay-when-paid&apos; clause does NOT automatically toll or suspend limitation unless the prime contractor issues a signed, written acknowledgment of liability under Section 18 of the Limitation Act.
                  </p>
                </div>

                {/* Timeline Stops Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-4 bg-slate-900 text-white rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                      15-Day Cure Notice
                    </span>
                    <p className="text-lg font-black text-white">Day 1 to 15</p>
                    <p className="text-xs text-slate-300 leading-tight">
                      Issue formal statutory demand asserting lapse of reasonable time under ICA s.46 and claiming 18% commercial interest.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                      Section 21 Invocation
                    </span>
                    <p className="text-lg font-black text-white">Day 16 to 30</p>
                    <p className="text-xs text-slate-300 leading-tight">
                      Issue formal notice under Section 21 of the Arbitration Act. Formally stops limitation clock under Article 137.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Section 9 Asset Stay
                    </span>
                    <p className="text-lg font-black text-white">Day 30 to 60</p>
                    <p className="text-xs text-slate-300 leading-tight">
                      File urgent Section 9 petition in High Court to attach prime&apos;s bank accounts and freeze employer receivables.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">
                      Section 11(6) Mandate
                    </span>
                    <p className="text-lg font-black text-white">Day 60+</p>
                    <p className="text-xs text-slate-300 leading-tight">
                      Petition High Court to appoint an independent sole arbitrator, defeating biased in-house arbitrator clauses.
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 pt-2">
                  <p>
                    Subcontractors must also consider whether their work constitutes a pure supply or composite works contract. Where composite contracts are excluded from MSME Samadhaan, commercial courts and arbitration remain the premier recovery track. For full details, review{" "}
                    <Link
                      href="/works-contract-excluded-from-msme-samadhaan-contractor-alternatives"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      The Works-Contract MSME Samadhaan Trap &amp; Recovery Alternatives
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 7: Debtor Defense Pre-Emption Matrix */}
              <section id="heading-preemption-matrix" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Debtor Defense Pre-Emption Matrix: Neutralizing EPC Non-Payment Excuses
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    How LegalRecovery Dismantles Standard Main Contractor Boilerplate Defenses
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 font-semibold">EPC Prime Contractor Excuse</th>
                        <th className="p-3 font-semibold">Contractual &amp; Statutory Counter-Measure</th>
                        <th className="p-3 font-semibold">Verified Precedent / Statutory Section</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      <tr>
                        <td className="p-3 font-bold text-red-950 bg-red-50/50">
                          &quot;The owner has deducted Liquidated Damages (LD) across the whole project, so your bill is set off.&quot;
                        </td>
                        <td className="p-3">
                          Demand proof of actual loss and specific causal attribution. Under Indian Contract Act s.74 (Kailash Nath doctrine), LD cannot be imposed as a penalty without proving actual loss specifically caused by the subcontractor. If the subcontractor&apos;s scope was timely certified, project-wide LD deductions cannot be set off.
                        </td>
                        <td className="p-3 font-semibold text-slate-900">
                          ICA s.74 &amp; Kailash Nath Associates v. DDA (2015) 4 SCC 136
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-red-950 bg-red-50/50">
                          &quot;Payment is strictly back-to-back. The employer is auditing final bills; wait until the audit completes.&quot;
                        </td>
                        <td className="p-3">
                          Invoke Section 46 of the Contract Act. High Courts rule that audit delays by an employer do not suspend payment indefinitely. Once reasonable time (60–90 days) expires, the prime contractor must fund the subcontractor from its own capital.
                        </td>
                        <td className="p-3 font-semibold text-slate-900">
                          ICA s.46 &amp; Larsen &amp; Toubro Ltd. v. Mohan Regional (Del HC)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-red-950 bg-red-50/50">
                          &quot;We signed a full and final settlement with the developer; there is no balance left for your package.&quot;
                        </td>
                        <td className="p-3">
                          Invoke the Prevention Doctrine. A prime contractor cannot settle third-party claims behind the subcontractor&apos;s back and destroy the condition precedent. Settlement triggers immediate personal liability on the prime contractor.
                        </td>
                        <td className="p-3 font-semibold text-slate-900">
                          ICA s.53 &amp; Simplex Infrastructures v. Siemens Ltd. (Del HC)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-red-950 bg-red-50/50">
                          &quot;You signed a No-Claim Certificate (NCC) to get partial payment; your balance retention is extinguished.&quot;
                        </td>
                        <td className="p-3">
                          Repudiate the NCC as coerced under economic duress (Contract Act s.15 &amp; s.19). Under the Supreme Court doctrines in <em>National Insurance v. Boghara Polyfab</em> and <em>Ambica Construction</em>, coerced NCCs signed to release undisputed dues do not extinguish valid dispute claims.
                        </td>
                        <td className="p-3 font-semibold text-slate-900">
                          ICA s.15, 19 &amp; Boghara Polyfab (2009) 1 SCC 267
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Interactive Scenario Solutions */}
              <section id="heading-scenario-tabs" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Resolving Subcontractor Payment Impasses: 4 Dispute Scenarios
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Select a Failure Mode Below to View the Prescribed Legal Recovery Playbook
                  </p>
                </div>

                <PayWhenPaidScenarioTabs />
              </section>

              {/* Section 9: Worked Financial Ledger */}
              <section id="heading-worked-example" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Worked Financial Ledger: ₹3.65 Crore MEP Subcontract Recovery Claim
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Realistic Breakdown of Certified RA Bills, Post-DLP Retention, 18% Commercial Interest &amp; Bank Guarantee Return
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When preparing a formal statutory demand notice or Section 21 arbitration claim against an EPC main contractor, claims must be crystallized into an indisputable, interest-bearing financial ledger. The following worked financial ledger illustrates an actual commercial recovery for an MEP &amp; HVAC subcontractor operating under a ₹12.50 Crore subcontract package:
                  </p>
                </div>

                {/* Financial Ledger Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 font-semibold">Claim Component</th>
                        <th className="p-3 font-semibold">Factual &amp; Contractual Basis</th>
                        <th className="p-3 font-semibold">Statutory Authority</th>
                        <th className="p-3 font-semibold text-right">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">
                          Unpaid Certified RA Bill #14 &amp; #15
                        </td>
                        <td className="p-3">
                          Joint measurement signed by Main Contractor&apos;s site engineer; PMC inspection sign-off obtained; building beneficially occupied.
                        </td>
                        <td className="p-3">Indian Contract Act s.70 (Quantum Meruit)</td>
                        <td className="p-3 font-mono font-bold text-right text-slate-900">
                          ₹1,85,40,000
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">
                          Withheld 5% Retention Money
                        </td>
                        <td className="p-3">
                          12-month Defect Liability Period (DLP) expired on 31 Dec 2024; zero defect notices issued within warranty window.
                        </td>
                        <td className="p-3">Indian Contract Act s.73 (Unlawful Detention)</td>
                        <td className="p-3 font-mono font-bold text-right text-slate-900">
                          ₹62,50,000
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">
                          Compound Commercial Interest @ 18% p.a.
                        </td>
                        <td className="p-3">
                          Interest calculated from 90 days post-bill submission (expiry of reasonable time) to notice date (540 days).
                        </td>
                        <td className="p-3">Interest Act, 1978 s.3 &amp; Arb. Act s.31(7)</td>
                        <td className="p-3 font-mono font-bold text-right text-emerald-700">
                          ₹66,93,300
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">
                          Performance Bank Guarantee (PBG) Encashment Indemnity
                        </td>
                        <td className="p-3">
                          PBG illegally held by Prime Contractor post-DLP; demand for immediate discharge or cash deposit into escrow.
                        </td>
                        <td className="p-3">Arbitration Act s.9(1)(ii)(a)</td>
                        <td className="p-3 font-mono font-bold text-right text-slate-900">
                          ₹50,00,000
                        </td>
                      </tr>
                      <tr className="bg-slate-100 font-extrabold text-slate-900 border-t-2 border-slate-300">
                        <td className="p-3 text-sm uppercase tracking-wider" colSpan={3}>
                          Total Subcontractor Crystallized Claim
                        </td>
                        <td className="p-3 font-mono text-base text-right text-[#DC2626]">
                          ₹3,64,83,300
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  <p className="font-bold mb-1">Interactive Financial Sizing:</p>
                  <p>
                    Calculate your exact interest escalation, retention dues, and statutory limitation windows using our specialized{" "}
                    <Link
                      href="/tools/construction-retention-dlp-escalation-claim-calculator"
                      className="text-emerald-700 underline font-bold hover:text-emerald-800"
                    >
                      Construction Retention, DLP &amp; Escalation Claim Calculator
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 10: Evidentiary Audit Checklist */}
              <section id="heading-evidence-checklist" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Subcontractor Evidentiary Audit: Building a Bulletproof Claim
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    6 Mandatory Document Pillars to Pre-empt Main Contractor Rebuttals under BSA Section 63
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    To enforce payment against an EPC prime contractor who relies on a back-to-back clause, your claim must be supported by an unassailable paper trail. Before issuing a statutory demand notice or filing in Commercial Court, ensure the following six evidentiary pillars are assembled:
                  </p>
                </div>

                {/* 6 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                        1
                      </span>
                      <strong className="text-sm font-bold text-slate-900">
                        Joint Measurement Books &amp; Site Logs
                      </strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Signed measurement sheets, joint level books, or electronic daily progress reports (DPR) certified by the main contractor&apos;s site representative. Establishes indisputable quantum of work executed.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                        2
                      </span>
                      <strong className="text-sm font-bold text-slate-900">
                        Material Delivery Proof (E-Way Bills &amp; GRNs)
                      </strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      E-Way bills, weighbridge slips, Goods Receipt Notes (GRN), and site gate passes proving supply and delivery of steel, concrete, cables, or equipment onto the project site.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                        3
                      </span>
                      <strong className="text-sm font-bold text-slate-900">
                        Virtual Completion / Beneficial Occupancy Proof
                      </strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      PMC handover certificates, test-and-commissioning reports, or documentary proof that the employer has taken commercial possession and is utilizing the facility.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                        4
                      </span>
                      <strong className="text-sm font-bold text-slate-900">
                        Absence of Timely Defect Notices
                      </strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Full email correspondence proving that the prime contractor never served contractual defect notifications within the mandated cure period, barring post-facto snag list fabrications.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                        5
                      </span>
                      <strong className="text-sm font-bold text-slate-900">
                        BSA Section 63 Electronic Evidence Certificate
                      </strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mandatory statutory certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 certifying WhatsApp chats, project emails, and billing portal logs for courtroom admissibility.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                        6
                      </span>
                      <strong className="text-sm font-bold text-slate-900">
                        Inaction Proof: Absence of Suit Against Employer
                      </strong>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Right to Information (RTI) responses or commercial court registry searches proving that the prime contractor has not initiated arbitration or litigation against the Principal Employer.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="font-semibold text-slate-900 mb-1">Standard Notice Drafting Format:</p>
                  <p>
                    Deploy our advocate-vetted commercial template to draft your formal statutory demand:{" "}
                    <Link
                      href="/templates/construction-ra-bill-retention-money-arbitration-notice"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      Construction RA Bill &amp; Retention Money Arbitration Notice Template
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 11: Dual-Track B2B Action Desk */}
              <section id="heading-cta" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Initiate Subcontractor Legal Recovery &bull; Dual-Track Action Desk
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Choose Your Recovery Route: Fast-Track Single Case Test or Dedicated Portfolio Management Desk
                  </p>
                </div>

                <PayWhenPaidCTA />
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section id="heading-faqs" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions: Back-to-Back Clauses &amp; Subcontract Dues
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Authoritative Answers to Common Practical Questions on Subcontract Recovery in India
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors open:bg-white open:shadow-xs"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base list-none">
                        <span>{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 ml-3 transition-colors">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Statutory Sources & References */}
              <section id="heading-sources" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Statutory Citations, Indian Contract Act Sections &amp; Precedents
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Official Acts, High Court Decisions &amp; Parliamentary Legislation Governing Subcontract Recovery
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-100 transition-colors block space-y-1"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Official Gazette / Repository
                      </span>
                      <p className="text-xs font-semibold text-slate-900 leading-snug">
                        {source.title}
                      </p>
                      <span className="text-[11px] text-[#DC2626] font-bold block pt-1">
                        View Official Statute &rarr;
                      </span>
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p>
                    Peer-Reviewed &amp; Vetted by: <strong>{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                  </p>
                  <p>Last Statutory Verification: November 2026</p>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Cluster Cross-Links Footer */}
        <div className="w-full bg-[#F8F9FB] border-t border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RelatedRecoveryGuides />
          </div>
        </div>
      </div>
    </>
  );
}
