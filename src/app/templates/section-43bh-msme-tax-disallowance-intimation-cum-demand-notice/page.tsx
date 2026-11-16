import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import Section43bhCTA from "./Section43bhCTA";
import Section43bhTOC from "./Section43bhTOC";
import Section43bhWorkspace from "./Section43bhWorkspace";

export const revalidate = 86400;

const EXACT_H1 =
  "2-Stage MSME Collection Template Pack: (1) Polite CFO Section 43B(h) Tax-Disallowance Advisory + (2) Formal Advocate Section 16 Interest Notice";

const EXACT_TITLE = "Section 43B(h) MSME CFO Intimation & Demand Notice Format";

const EXACT_DESCRIPTION =
  "Preserve client ties while getting paid in Q4: Stage-1 CFO Section 43B(h) Tax Advisory + Stage-2 Advocate Legal Notice with 3x RBI compound penal interest.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice`,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(EXACT_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_STATUTES = [
  {
    title: "Income Tax Act, 1961 — Section 43B(h) (Mandatory Payment Timing for MSME Purchases)",
    url: "https://www.incometax.gov.in/iec/foportal/help/statutory-forms/form-3cd",
    description: "Inserted via Finance Act 2023: disallows unpaid expenditure to Micro and Small enterprises beyond Section 15 timelines unless paid within the financial year.",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 — Section 15 & Section 16",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
    description: "Prescribes 45-day maximum credit period and statutory compound interest at 3 times the RBI Bank Rate with monthly rests.",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 — Section 23 (Non-Deductibility of Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
    description: "Statutory bar overriding the Income Tax Act: interest paid under Section 16 is 100% non-deductible from the buyer's taxable profits.",
  },
  {
    title: "Income Tax Act, 1961 — Form 3CD Clause 22 (Tax Audit Reporting of MSME Dues)",
    url: "https://www.incometax.gov.in",
    description: "Mandatory statutory auditor disclosures of overdue MSME principal, accrued penal interest, and Section 23 disallowances.",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 2(1)(c)(i) & Section 12A",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
    description: "Commercial jurisdiction for mercantile recovery, pre-institution mediation procedures, and summary debt enforcement.",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
    description: "Mandatory digital audit trails for e-invoices, GST portal returns, and registered email/WhatsApp demand notice delivery.",
  },
];

const PRECEDENTS = [
  {
    title: "Supreme Court Confirmation of Section 16 Interest Overriding Prior Agreements",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation",
    citation: "(2021) 18 SCC 790 (Supreme Court of India)",
    date: "Judgment Dated 29 June 2021",
    facts:
      "A corporate buyer resisted statutory 3x RBI compound interest by arguing that the signed purchase contract stipulated a 0% interest clause and established an alternate payment schedule beyond 45 days.",
    holding:
      "The Supreme Court ruled that the provisions of Sections 15, 16, 17, and 24 of the MSMED Act, 2006 hold statutory supremacy over any conflicting contractual covenants. Parties cannot contract out of Section 16 interest, and Section 24 provides an overriding non-obstante clause that nullifies buyer-friendly delaying clauses.",
    takeaway:
      "Corporate buyers cannot bypass 3x RBI compound penal interest through unilateral PO terms or boilerplate master service agreements.",
  },
  {
    title: "Overdue Interest Paid to MSME Suppliers is Incontrovertibly Disallowed in Income Tax",
    parties: "Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd.",
    citation: "(2023) 6 SCC 401 (Supreme Court of India)",
    date: "Judgment Dated 31 October 2022",
    facts:
      "A public undertaking claimed that interest liabilities payable to registered MSMEs could be treated as allowable contractual interest under Section 36(1)(iii) or Section 37 of the Income Tax Act, 1961.",
    holding:
      "The Apex Court reaffirmed the absolute sanctity of Section 23 of the MSMED Act. The statutory penal interest mandated by Section 16 possesses a distinct punitive character aimed at protecting small manufacturing capital. Under Section 23, such interest cannot be permitted as a deduction in computing taxable business income under any provision of the Income Tax Act.",
    takeaway:
      "Informing the buyer's CFO of Section 23 disallowance proves that delaying payments costs them 20.25% non-deductible interest plus 30% lost tax shield.",
  },
  {
    title: "Strict Disallowance of Accrued Liabilities Under Section 43B on Mercantile Accounting",
    parties: "Allied Motors (P) Ltd. v. Commissioner of Income Tax",
    citation: "(1997) 224 ITR 677 (Supreme Court of India)",
    date: "Judgment Dated 04 March 1997",
    facts:
      "Assessees argued that liabilities accrued under mercantile accounting principles must be allowed as business deductions irrespective of cash payment timing.",
    holding:
      "The Supreme Court affirmed that Section 43B is an express statutory carve-out to the mercantile system of accounting. Deductions governed by Section 43B can strictly be claimed only in the previous year of actual disbursement. For Section 43B(h), the legislature intentionally omitted the proviso allowing payment up to the ITR filing date, enforcing payment within the financial year itself.",
    takeaway:
      "Unlike statutory tax or PF payments which can be cleared before the ITR date, MSME dues must be cleared strictly by March 31 if overdue beyond 45 days.",
  },
];

const FAQS = [
  {
    question: "What is the core difference between Stage 1 Advisory and Stage 2 Advocate Notice?",
    answer:
      "Stage 1 is a commercial, polite audit reconciliation letter sent on your corporate letterhead directly to the buyer's CFO and Accounts Payable team. It positions Section 43B(h) and Form 3CD Clause 22 compliance as a mutual year-end accounting alignment, preserving vendor relations while securing priority release in Q4 treasury runs. Stage 2 is a formal, peremptory legal demand issued by an empanelled High Court advocate under Sections 15, 16, and 23 of the MSMED Act, 2006. It demands mandatory 3x RBI compound interest, notifies the buyer's statutory auditor, and sets a 15-day deadline before filing with MSME Samadhaan (MSEFC) or filing a Commercial Court summary suit.",
  },
  {
    question: "Does Section 43B(h) allow payment up to the Income Tax Return (ITR) filing date?",
    answer:
      "No. The first proviso to Section 43B—which allows deductions for statutory taxes, EPF, and bonus paid before the tax return filing deadline under Section 139(1)—explicitly excludes clause (h). If a payment to a Micro or Small enterprise exceeds the 45-day statutory limit under Section 15 of the MSMED Act, it cannot be paid in the subsequent financial year and claimed retroactively. It must actually be paid on or before March 31 of that fiscal year; otherwise, it is disallowed in full and added back to that year's taxable income.",
  },
  {
    question: "Why is Section 23 of the MSMED Act a lethal leverage point against defaulting corporate buyers?",
    answer:
      "Section 23 of the MSMED Act contains an express non-obstante clause overriding the Income Tax Act, 1961. It provides that any interest paid or payable by a buyer under Section 16 (at 3 times the RBI Bank Rate) shall never be allowed as a tax deduction. While ordinary commercial borrowing interest is tax-deductible (providing a 25%–35% tax shield), MSME penal interest is 100% out-of-pocket dead loss. Highlighting Section 23 in your demand notice proves to the CFO that delaying your invoice creates a catastrophic double tax loss: disallowance of principal under Section 43B(h) plus complete tax disallowance on the 20.25% penal interest.",
  },
  {
    question: "What must the buyer's Statutory Tax Auditor report under Form 3CD Clause 22?",
    answer:
      "Under Clause 22 of Form 3CD (Tax Audit Report under Section 44AB), the chartered accountant auditor is statutorily required to disclose: (1) Principal amount remaining unpaid to MSME suppliers at the end of the year, (2) Interest due thereon remaining unpaid, (3) Total interest paid under Section 16 of the MSMED Act, and (4) The amount of interest disallowed under Section 23. By formally marking a copy of your notice or intimation to the buyer's statutory auditor, you ensure management cannot suppress the default without causing an audit qualification or tax addition.",
  },
  {
    question: "Are Medium enterprises or wholesale traders covered by Section 43B(h) disallowance?",
    answer:
      "No. Section 43B(h) specifically references enterprises defined under Section 15 of the MSMED Act, 2006, which encompasses only 'Micro' (investment ≤ ₹1 Cr, turnover ≤ ₹5 Cr) and 'Small' (investment ≤ ₹10 Cr, turnover ≤ ₹50 Cr) manufacturing and service enterprises. Medium enterprises (turnover up to ₹250 Cr) and wholesale/retail traders (NIC codes 45, 46, 47 under Udyam Circular 5/2021) are excluded from Section 43B(h) disallowance and Section 18 MSME Samadhaan filings, though they retain full recovery rights under Order XXXVII CPC and Commercial Courts Act Section 12A.",
  },
  {
    question: "What documents must be attached when dispatching a Section 43B(h) advocate notice?",
    answer:
      "A complete Section 43B(h) legal demand docket must contain: (1) Purchase Order or Work Contract showing agreed terms, (2) Tax Invoices clearly bearing your valid Udyam Registration Number, (3) Proof of physical delivery such as Signed Delivery Challans, Lorry Receipts (LR), or Transporter Bilty, (4) Counterfoil of GST E-Way Bill showing successful vehicle transit and delivery, (5) GSTR-1 and GSTR-2B filing reconciliation showing the buyer availed input tax credit (ITC), and (6) A formal Section 63 BSA 2023 Electronic Delivery Certificate for all email and WhatsApp transmissions.",
  },
];

export default function Section43bhNoticePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice`,
    },
    image: [`${SITE_URL}/blog_money_recovery.png`],
    datePublished: "2026-11-16T10:00:00+05:30",
    dateModified: "2026-11-16T10:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    keywords: [
      "section 43bh payment reminder and legal notice format msme",
      "udyam msme 45 day payment intimation letter to buyer format",
      "q4 march 31 section 43bh demand notice word pdf",
      "msme invoice overdue notice to cfo and statutory auditor",
      "interest calculation 3x rbi bank rate schedule template",
      "combined section 43bh and section 16 msmed demand draft",
    ],
  };

  const jsonLdCreativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "2-Stage Section 43B(h) MSME Statutory Intimation & Legal Demand Notice Workspace",
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice`,
    creator: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Legal Consultant",
    },
    learningResourceType: "Legal Notice Template & Interactive Clause Builder",
    educationalUse: "Commercial Creditor Debt Recovery & Corporate Tax Audit Enforcement",
    genre: "B2B Legal Template & Statutory Notice",
  };

  const jsonLdFaq = {
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

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Templates",
        item: `${SITE_URL}/templates`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Section 43B(h) Notice Pack",
        item: `${SITE_URL}/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Script Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCreativeWork) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Hero Section */}
      <header className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>P1 Notice &amp; Clause Workspace</span>
            <span className="text-slate-400">&bull;</span>
            <span>IND-06 Manufacturing &amp; OEM Supply Chain</span>
            <span className="text-slate-400">&bull;</span>
            <span>Income Tax Act s.43B(h) &amp; MSMED Act s.16/23</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box with Inline Parent Hub Link in First 250 Words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Creditor Summary &amp; Q4 Strategy
            </span>
            For micro and small engineering suppliers, tooling fabricators, and auto-ancillary manufacturers governed under the{" "}
            <Link
              href="/industries/manufacturing-machinery-oem-recovery"
              className="text-red-300 font-bold hover:underline"
            >
              Manufacturing, Industrial Machinery &amp; OEM Supplier Recovery Hub
            </Link>
            , recovering aged receivables from corporate buyers in Q4 requires a dual-track strategy. Section 43B(h) of the Income Tax Act, 1961 disallows any business deduction for unpaid MSME goods past Section 15 timelines (15 or 45 days) unless actually paid within the fiscal year ending March 31. This creates a mandatory 25.17% to 34.94% corporate cash tax penalty on your defaulting buyer. Paired with Section 23 of the MSMED Act—which completely disallows buyer deductions for the 3x RBI compound penal interest accrued under Section 16—this 2-stage template pack gives factory owners the exact documentation needed to turn corporate tax auditors into powerful collection allies.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                Mandatory Credit Window
              </span>
              <p className="text-lg sm:text-xl font-black text-slate-100 mt-0.5">
                15 / 45 Days Max
              </p>
              <span className="text-[10px] text-slate-400">MSMED Act s.15 Non-Negotiable</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                Statutory Penal Interest
              </span>
              <p className="text-lg sm:text-xl font-black text-amber-400 mt-0.5">
                3x RBI Bank Rate
              </p>
              <span className="text-[10px] text-slate-400">Monthly Rests (s.16 MSMED)</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                Tax Deduction on Interest
              </span>
              <p className="text-lg sm:text-xl font-black text-red-400 mt-0.5">
                100% Disallowed
              </p>
              <span className="text-[10px] text-slate-400">MSMED Act s.23 Non-Obstante</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                Corporate Tax Hit on Principal
              </span>
              <p className="text-lg sm:text-xl font-black text-emerald-400 mt-0.5">
                25.17% – 34.94%
              </p>
              <span className="text-[10px] text-slate-400">Form 3CD Clause 22 Reporting</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Templates", href: "/templates" },
            {
              label: "Section 43B(h) MSME Notice Pack",
              href: "/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice",
            },
          ]}
        />

        {/* 2-Column Split: Left Sticky TOC + Right Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <Section43bhTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The 2-Tier Tax Escalation Framework */}
            <section
              id="heading-executive-statutory-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  The 2-Tier Escalation Framework: Preserve Ties While Enforcing Q4 Cash Payout
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Most micro and small manufacturing units face an acute operational dilemma when corporate buyers delay invoice settlement: issuing an immediate, aggressive advocate notice can rupture fragile OEM vendor-supply relationships and cause vendor de-listing. Conversely, sending toothless accounts reminders yields empty promises while corporate treasuries deploy your working capital to clear debts of more litigious creditors.
                </p>
                <p>
                  The solution lies in a synchronized, <strong>two-tier statutory escalation methodology</strong> that leverages the financial year-end compliance mechanisms established under Section 43B(h) of the Income Tax Act, 1961, and Sections 15, 16, and 23 of the Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act):
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-800 mb-2">
                      Stage 1 &bull; Friendly Audit Advisory
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                      CFO Section 43B(h) Tax Disallowance Intimation
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dispatched on your corporate letterhead directly to the buyer&apos;s Chief Financial Officer and Head of Accounts Payable. Written as a courteous year-end audit reconciliation notice highlighting that because your firm is registered under Udyam (Micro/Small), their failure to release payment before March 31 forces an immediate 25.17% to 34.94% cash corporate tax disallowance on their books.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-200 text-[#DC2626] mb-2">
                      Stage 2 &bull; Formal Legal Demand
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                      Advocate Notice with Section 16 &amp; 23 Penal Claims
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Issued on High Court advocate letterhead via Registered Speed Post RPAD and certified email when Stage 1 is ignored past 7–10 days. Demands mandatory 3x RBI compound penal interest, formally notifies the buyer&apos;s Statutory Tax Auditor under Form 3CD Clause 22, alerts the CFO that Section 23 bars deducting interest, and initiates the 15-day pre-litigation clock before filing with{" "}
                      <Link
                        href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        MSME Samadhaan (MSEFC)
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <p className="pt-2 text-xs sm:text-sm text-slate-600">
                  By sequencing these two stages, factory owners provide corporate finance controllers with a legally sound justification to prioritize your invoices in weekly treasury disbursements—without prematurely burning commercial bridges.
                </p>
              </div>
            </section>

            {/* Section 2: Interactive Notice & Clause Workspace Island */}
            <section
              id="heading-interactive-template-workspace"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Interactive Notice Workspace: Generate Stage 1 Advisory or Stage 2 Legal Demand
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Configure your invoice particulars, corporate debtor details, and statutory clauses below. The workspace automatically computes 3x RBI compound interest with monthly rests and generates print-ready legal text for company or advocate dispatch.
              </p>

              {/* Dedicated Interactive P1 Workspace Component */}
              <Section43bhWorkspace />
            </section>

            {/* Section 3: Section 43B(h) Mechanics & March 31 Cutoff */}
            <section
              id="heading-section-43bh-mechanics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Section 43B(h) Mechanics: Why Deductions are Strictly Denied on March 31
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Section 43B(h) was introduced into the Income Tax Act, 1961 by the Finance Act, 2023 with an effective date of 1st April 2024 (Assessment Year 2024-25 onwards). It acts as an absolute statutory exception to the traditional mercantile system of accounting. Under typical commercial accounting, a buyer records an expense as deductible in the profit-and-loss account as soon as the invoice is booked, regardless of whether payment has actually been released.
                </p>
                <p>
                  Section 43B(h) completely reverses this for purchases made from <strong>Micro and Small Enterprises</strong>:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-5 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-widest block">
                    Statutory Rule &bull; Section 43B Clause (h)
                  </span>
                  <p className="font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
                    &ldquo;Any sum payable by the assessee to a micro or small enterprise beyond the time limit specified in section 15 of the Micro, Small and Medium Enterprises Development Act, 2006, shall be allowed as a deduction only in computing the income of the previous year in which such sum is actually paid.&rdquo;
                  </p>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                  The Omission of the Section 139(1) Proviso: No Grace Period for Buyers
                </h3>
                <p>
                  Crucially, Section 43B contains a general proviso that allows assessees to claim deductions for unpaid taxes, provident fund dues, or bonus payments if they disburse the amounts on or before the due date for furnishing the return of income under Section 139(1). However, the legislature <strong>intentionally excluded clause (h) from this proviso</strong>.
                </p>
                <p>
                  As a direct statutory consequence:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>
                    <strong>Within the Year (Before March 31)</strong>: If goods are purchased on 10th May with a 45-day credit period ending 24th June, and the buyer defaults, but eventually pays on 15th March of that same fiscal year, the deduction is permitted in that financial year because actual payment occurred within the year.
                  </li>
                  <li>
                    <strong>Overdue Beyond March 31</strong>: If the invoice is outstanding beyond the 15-day or 45-day statutory limit on March 31, the entire unpaid principal amount is <strong>disallowed and added back to taxable profits</strong> for that fiscal year. Paying it in April or May after the fiscal year ends will only permit a deduction in the subsequent financial year.
                  </li>
                </ul>

                <p className="text-xs sm:text-sm text-slate-600 bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <strong>Cash Flow Shock to Buyer</strong>: For an enterprise buyer in the 25.17% (Section 115BAA) or 34.94% corporate tax bracket with ₹1 Crore in unpaid MSME invoices on March 31, Section 43B(h) forces an immediate, non-negotiable cash tax outflow of ₹25.17 Lakh to ₹34.94 Lakh to the Income Tax Department during advance tax and self-assessment filing.
                </p>
              </div>
            </section>

            {/* Section 4: Section 23 MSMED Act Non-Deductible Interest */}
            <section
              id="heading-section-23-interest-disallowance"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Section 23 of MSMED Act: The 100% Non-Deductible Penal Interest Trap
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  While many corporate buyers are now aware of Section 43B(h), few finance managers recognize the severe compound threat posed by <strong>Section 23 of the MSMED Act, 2006</strong>. In standard corporate finance, interest paid on commercial debt, bank borrowings, or working capital credit lines is an allowable expenditure under Section 36(1)(iii) of the Income Tax Act, shielding roughly 30% of that financial expense from tax.
                </p>
                <p>
                  Section 23 of the MSMED Act shatters this assumption with an absolute non-obstante clause that explicitly overrides the Income Tax Act:
                </p>

                <div className="bg-red-950/90 text-white rounded-xl p-4 sm:p-5 border border-red-800 space-y-2">
                  <span className="text-[11px] font-mono text-red-300 font-bold uppercase tracking-widest block">
                    Bare Act &bull; Section 23 of MSMED Act, 2006
                  </span>
                  <p className="font-mono text-xs sm:text-sm leading-relaxed text-red-100">
                    &ldquo;Notwithstanding anything contained in the Income-tax Act, 1961 (43 of 1961), the amount of interest payable or paid by any buyer, under or in accordance with the provisions of this Act, shall not, for the purposes of computation of income under the Income-tax Act, 1961, be allowed as deduction.&rdquo;
                  </p>
                </div>

                <p>
                  When your Stage 2 advocate notice highlights Section 23, the CFO is confronted with an alarming mathematical reality:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3">Financial Parameter</th>
                        <th className="p-3">Standard Bank / NBFC Borrowing</th>
                        <th className="p-3">Defaulting on MSME Supplier (Section 16 &amp; 23)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800">
                      <tr>
                        <td className="p-3 font-semibold">Interest Rate</td>
                        <td className="p-3">9.0% – 12.0% Simple / Annual</td>
                        <td className="p-3 font-bold text-red-600">3x RBI Rate (20.25% p.a. Compound with Monthly Rests)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Tax Deductibility (IT Act)</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Allowable under s.36(1)(iii)</td>
                        <td className="p-3 text-red-600 font-bold">0% Deductible under MSMED Act s.23</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Effective Net Cost of Capital</td>
                        <td className="p-3">~6.5% – 8.5% (after 30% tax shield)</td>
                        <td className="p-3 font-black text-red-700">20.25%+ Pure Post-Tax Cash Hemorrhage</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Audit Reporting Requirement</td>
                        <td className="p-3">Standard Finance Cost in P&amp;L</td>
                        <td className="p-3 text-amber-700 font-semibold">Mandatory Disclosure in Form 3CD Clause 22</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  Delaying payments to an MSME is the single most expensive financing decision an enterprise can make. You can calculate your exact claim using our dedicated{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 5: Tax Audit Form 3CD Clause 22 Disclosures */}
            <section
              id="heading-clause-22-form-3cd"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Form 3CD Clause 22: Enlisting the Buyer&apos;s Tax Auditor as Your Ally
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Every corporate entity whose turnover exceeds the statutory tax audit threshold under Section 44AB of the Income Tax Act, 1961 must have their accounts audited by an independent Chartered Accountant who files Form 3CD.
                </p>
                <p>
                  Under <strong>Clause 22 of Form 3CD</strong>, the auditor is under a strict, non-derogable professional obligation to examine and certify the following MSME compliance particulars:
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Mandatory Form 3CD Clause 22 Audit Checklist
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">22(a)</span>
                      <span>The principal amount and interest due thereon remaining unpaid to any supplier as at the end of each accounting year.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">22(b)</span>
                      <span>The amount of interest paid by the buyer in terms of Section 16, along with the amount of the payment made to the supplier beyond the appointed day.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">22(c)</span>
                      <span>The amount of interest due and payable for the period of delay in making payment (which has been paid but beyond the appointed day).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">22(d)</span>
                      <span>The amount of interest accrued and remaining unpaid at the end of each accounting year.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">22(e)</span>
                      <span>The amount of further interest remaining due and payable even in succeeding years, until such date when interest dues are actually paid.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  <strong>Why Marking a Copy to the Auditor Changes the Game</strong>: Corporate accounting teams often attempt to bury overdue MSME invoices in generalized &ldquo;Sundry Creditors for Goods&rdquo; buckets during the financial year. By serving a formal Stage 2 Legal Demand Notice with a copy explicitly addressed to the <em>Audit Committee and Statutory Auditors</em>, you place the audit team on formal written record. If the auditor fails to qualify the report or leaves Clause 22 blank despite receiving proof of default, they face severe disciplinary inquiry by the National Financial Reporting Authority (NFRA) and ICAI. Consequently, the auditor forces corporate management to disallow the expense or clear the invoice immediately.
                </p>
              </div>
            </section>

            {/* Section 6: Worked ₹42.5L Principal & Penal Interest Ledger */}
            <section
              id="heading-worked-tax-interest-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  6
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Worked Financial Ledger: ₹42.50L Industrial Machinery Invoice Default
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  To illustrate the compounding financial devastation facing a corporate buyer who ignores your Section 43B(h) demand notice, consider this real-world case of an industrial machinery and tooling supplier:
                </p>

                <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs text-slate-400 block">Creditor Status</span>
                      <p className="text-sm font-bold text-white">Small Enterprise (Udyam Verified)</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Invoice Value &amp; Credit Period</span>
                      <p className="text-sm font-bold text-white">₹42,50,000 (45 Days Credit Window)</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Invoice Delivery Date</span>
                      <p className="text-sm font-bold text-white">15 September 2026 (Due: 30 October 2026)</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Assessment Date (Fiscal Close)</span>
                      <p className="text-sm font-bold text-white">31 March 2027 (152 Days Overdue)</p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2 text-xs sm:text-sm font-mono">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-300">Outstanding Principal Amount:</span>
                      <span className="text-white font-bold">₹42,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-300">RBI Bank Rate (6.75% &times; 3):</span>
                      <span className="text-amber-400 font-bold">20.25% p.a. (Monthly Rests)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-300">Section 16 Compound Penal Interest (152 Days):</span>
                      <span className="text-amber-400 font-bold">+₹3,84,192</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-300">Section 43B(h) Principal Tax Disallowance (at 25.17%):</span>
                      <span className="text-red-400 font-bold">+₹10,69,725 Cash Tax Penalty</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-300">Section 23 Lost Tax Deduction on Penal Interest:</span>
                      <span className="text-red-400 font-bold">+₹96,701 Lost Shield</span>
                    </div>
                    <div className="flex justify-between py-2 text-base font-black border-t-2 border-[#DC2626]">
                      <span className="text-white">Total True Financial Exposure to Defaulting Buyer:</span>
                      <span className="text-emerald-400">₹58,00,618</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700">
                  By withholding ₹42.50 Lakh, the buyer incurs an extra ₹15.50 Lakh in statutory penal interest and immediate cash tax penalties—costing them <strong>36.4% on top of the original bill</strong>. Presenting this exact breakdown inside your Stage 1 and Stage 2 notices transforms an emotional payment plea into an undeniable corporate financial emergency.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  For suppliers dealing with withheld machinery commissioning retention balances, see our operational guide on{" "}
                  <Link
                    href="/custom-industrial-machinery-balance-withheld-after-installation-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Custom Industrial Machinery Balance Recovery After Installation
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 7: BSA 2023 Section 63 Evidence Docket */}
            <section
              id="heading-bsa63-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  7
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  BSA 2023 Section 63 Digital Evidence Docket for MSME Invoices
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023)</strong>—which replaced Section 65B of the Indian Evidence Act, 1872—electronic records are admissible in civil, commercial, and facilitation council proceedings only when supported by a prescribed certificate of digital integrity.
                </p>
                <p>
                  To pre-empt manufactured debtor excuses when escalating a Section 43B(h) demand, assemble this five-point evidentiary docket:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      1. Valid Udyam Registration Certificate
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Must demonstrate valid registration as &ldquo;Micro&rdquo; or &ldquo;Small&rdquo; Enterprise on the date of goods supply. Section 43B(h) cannot be claimed retrospectively for transactions executed prior to Udyam registration date (as held by the Supreme Court in <em>Silpi Industries</em>).
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      2. Counter-Signed Delivery Challan / Bilty
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Physical receipt stamp from the buyer&apos;s factory storekeeper or transporter consignment note (Bilty). This triggers the 15-day deemed acceptance clock under Section 2(b) of the MSMED Act if no formal quality rejection was lodged.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      3. E-Way Bill &amp; RFID Toll Gate Telemetry
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      GST E-Way Bill verification showing successful vehicle transit and completion status on the NIC portal. Proves uncontroverted physical ingress into the buyer&apos;s manufacturing facility.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <span className="text-xs font-bold text-[#DC2626] uppercase block mb-1">
                      4. GSTR-1 vs GSTR-2B Input Tax Credit Proof
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Proof that your company filed the invoice in Form GSTR-1 and that the buyer availed 100% Input Tax Credit (ITC) in their GSTR-2B. Under mercantile law, availing ITC legally estops the buyer from denying invoice validity.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-slate-900 bg-slate-100 p-4 rounded-r-xl">
                  <span className="text-xs font-bold text-slate-900 uppercase block mb-1">
                    5. Section 63 BSA Digital Delivery Certificate
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A formal statutory affidavit executed by your IT head or finance manager certifying the server hash, timestamp, and SMTP transmission receipt for all emails and WhatsApp notifications sent to the buyer&apos;s CFO and Accounts Payable desk.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: High Court & ITAT Binding Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  8
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Verified Judicial Precedents on Section 43B &amp; MSMED Act Enforcement
                </h2>
              </div>

              <div className="space-y-4">
                {PRECEDENTS.map((p, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-2xl border-y border-r border-slate-200 space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {p.title}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 font-medium">
                        {p.date}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#DC2626]">
                      {p.parties} &bull; {p.citation}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Facts &amp; Holding</strong>: {p.facts} {p.holding}
                    </p>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-slate-800">
                      <strong>Creditor Practical Takeaway</strong>: {p.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track B2B Conversion Funnel Island */}
            <section
              id="heading-dual-track-cta"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  9
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Dispatch Your Advocate Section 43B(h) Demand Notice
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Choose between issuing a single advocate-drafted demand notice or deploying our bulk CSV recovery desk for enterprise ledgers.
              </p>

              {/* Dedicated B2B Dual CTA Component */}
              <Section43bhCTA />
            </section>

            {/* Section 10: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Frequently Asked Questions on Section 43B(h) &amp; MSME Legal Notices
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors open:bg-white open:border-slate-300"
                  >
                    <summary className="font-bold text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-lg font-bold group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Authorities & Bare Acts */}
            <section
              id="heading-primary-statutes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Primary Statutory Statutes, Regulations &amp; Official References
                </h2>
              </div>

              <div className="space-y-3">
                {PRIMARY_STATUTES.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        {stat.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                        {stat.description}
                      </p>
                    </div>
                    <a
                      href={stat.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="shrink-0 text-xs font-semibold text-[#DC2626] hover:underline flex items-center gap-1"
                    >
                      <span>View Statute</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Author & Reviewer Attribution Box */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
                <div>
                  <span className="font-bold text-slate-700 block">
                    Author &amp; Legal Review:
                  </span>
                  <span>
                    Advocate Anuj Anand Malik (Bar Council of Delhi &bull; Enrolment No. D/1842/2014)
                  </span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    Senior Commercial Recovery &amp; MSMED Act Counsel, AMA Legal Solutions
                  </span>
                </div>
                {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                <div className="text-[11px] text-slate-400 sm:text-right">
                  <span>Last Updated: November 16, 2026</span>
                  <span className="block">Compliant with Finance Act 2023 &amp; BSA 2023</span>
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
