import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import IbcSection8TableOfContents from "./IbcSection8TableOfContents";
import IbcSection8ScenarioTabs from "./IbcSection8ScenarioTabs";
import IbcSection8CTA from "./IbcSection8CTA";

export const revalidate = 86400;

const PAGE_PATH = "/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor";
const META_TITLE = "IBC Section 8 Demand Notice (Form 3 vs Form 4): ₹1 Cr+ Guide";
const META_DESCRIPTION =
  "75% of corporate debtors settle in 10 days of a defect-free IBC Form 3/Form 4 notice to avoid NCLT CIRP. Master ₹1 Cr clubbing, interest & Mobilox rules.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("IBC Section 8 Demand Notice Form 3 vs Form 4 Operational Creditor Guide"),
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
      "Insolvency and Bankruptcy Code, 2016 (Sections 3(12), 4, 5(20), 5(21), 8, 9, 10A & 238A — Operational Creditor Demand Notice & CIRP Initiation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title:
      "Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016 (Rule 5, Form 3, Form 4 & Form 5)",
    url: "https://ibbi.gov.in/legal-framework/rules",
  },
  {
    title:
      "Ministry of Corporate Affairs Notification S.O. 1205(E) dated 24 March 2020 (Enhancement of Minimum Default Threshold under Section 4 to ₹1 Crore)",
    url: "https://ibbi.gov.in/legal-framework/notifications",
  },
  {
    title:
      "Supreme Court of India: Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd., (2018) 1 SCC 353 (Pre-Existing Dispute Standard)",
    url: "https://main.sci.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for ERP Ledgers, Emails & Speed Post Tracking)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on 'Existence of a Dispute' & Moonshine Defence Screening",
    parties: "Mobilox Innovations Private Limited v. Kirusa Software Private Limited",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Judgment Dated 21 September 2017",
    facts:
      "An operational creditor issued a Section 8 demand notice for unpaid software services. Prior to the notice, the corporate debtor had sent an email alleging breach of a non-disclosure agreement (NDA) and withholding payment on that ground. The NCLAT admitted the Section 9 petition, holding the NDA dispute was unrelated.",
    holding:
      "The Supreme Court set aside admission and laid down the foundational test: under Section 8(2)(a) read with Section 9(5)(ii)(d), the Adjudicating Authority must only check whether there is a plausible contention which requires further investigation and is not a patently feeble legal argument or an assertion of fact unsupported by evidence. Importantly, the dispute must exist prior to receipt of the Section 8 demand notice.",
    amount: "Pre-Existing Dispute Rule — Post-Notice Afterthoughts Cannot Defeat Section 9",
    takeaway:
      "General Counsel must audit every email, WhatsApp thread, and debit-note trail before issuing Form 3/Form 4. Never include disputed invoices in your Section 8 schedule if undisputed invoices already cross ₹1 Crore.",
  },
  {
    title: "Supreme Court on Advocate-Issued Section 8 Notices & Directory Banker's Certificate",
    parties: "Macquarie Bank Limited v. Shilpi Cable Technologies Limited",
    citation: "(2018) 2 SCC 674, Supreme Court of India",
    date: "Judgment Dated 15 December 2017",
    facts:
      "The corporate debtor challenged a Section 8 demand notice on two technical grounds: (1) it was signed and issued by an external advocate rather than an employee of the operational creditor, and (2) the foreign bank had not furnished a Section 9(3)(c) certificate from an Indian scheduled bank.",
    holding:
      "The Supreme Court held that a lawyer/advocate duly authorized by the operational creditor is fully competent to issue a Section 8 demand notice on the creditor's behalf. Further, Section 9(3)(c) (furnishing a bank certificate) is directory and not mandatory where non-payment is proved through alternate financial records.",
    amount: "Fact-Verified Form 3/Form 4 Validated — Must Attach Specific Authorization",
    takeaway:
      "External recovery counsel can validly sign and serve your Section 8 notice, provided a Board Resolution or Power of Attorney specifically authorizing the advocate is annexed.",
  },
  {
    title: "NCLAT on Clubbing Principal and Contractual Interest to Cross ₹1 Crore",
    parties: "Prashat Agarwal v. Vikash Parasrampuria & Anr.",
    citation: "2022 SCC OnLine NCLAT 3781, NCLAT New Delhi",
    date: "Judgment Dated 15 July 2022",
    facts:
      "The operational creditor's principal invoice arrears stood at ₹97.87 Lakhs—below the ₹1 Crore Section 4 threshold—but the tax invoices explicitly stipulated 18% p.a. interest on delayed payments, taking the total default to ₹1.37 Crores. The corporate debtor argued that interest cannot be added to principal to meet Section 4.",
    holding:
      "The NCLAT affirmed admission, ruling that where tax invoices or underlying purchase orders clearly stipulate interest on delayed payments, 'debt' under Section 3(11) and 'operational debt' under Section 5(21) encompass both principal and contractual interest, allowing both to be clubbed to cross ₹1 Crore.",
    amount: "₹97.87L Principal + Contractual Interest Validly Crossed ₹1 Crore Threshold",
    takeaway:
      "Contractual interest clauses printed on accepted tax invoices or MSAs can bridge the gap from ₹75–₹99 Lakhs to ₹1 Crore+. Unilateral interest without agreement, however, risks rejection.",
  },
  {
    title: "Supreme Court on 3-Year Limitation Applicability under Section 238A",
    parties: "B.K. Educational Services Private Limited v. Parag Gupta and Associates",
    citation: "(2019) 11 SCC 633, Supreme Court of India",
    date: "Judgment Dated 11 October 2018",
    facts:
      "Creditors sought to revive time-barred operational and financial debts under the IBC by arguing that the Limitation Act, 1963 did not apply to insolvency applications prior to the 2018 insertion of Section 238A.",
    holding:
      "The Supreme Court held that Article 137 of the Limitation Act, 1963 applies to Section 7 and Section 9 applications from the inception of the Code. An application filed beyond three years from the date of default is time-barred unless limitation is extended under Section 18 (written acknowledgment of debt) or Section 19 of the Limitation Act.",
    amount: "Strict 3-Year Limitation from Date of Default (Save Section 18 Balance Confirmations)",
    takeaway:
      "Check invoice due dates before dispatching Form 3/Form 4. For invoices older than 3 years, verify whether the debtor's audited balance sheet, TDS Form 26AS, or email balance confirmation resets limitation under Section 18.",
  },
  {
    title: "Supreme Court on IBC Not Being a Recovery Forum for Disputed Claims",
    parties: "Transmission Corporation of Andhra Pradesh Ltd. v. Equipment Conductors and Cables Ltd.",
    citation: "(2019) 12 SCC 697, Supreme Court of India",
    date: "Judgment Dated 23 October 2018",
    facts:
      "An operational creditor sought to initiate CIRP over claims that had been subjected to contested arbitral and civil proceedings regarding price variation and liquidated damages.",
    holding:
      "The Supreme Court reiterated that the IBC is not intended to be a substitute for a civil recovery forum where a genuine pre-existing dispute exists. NCLT exercises summary jurisdiction and cannot conduct a mini-trial on disputed invoices.",
    amount: "Summary Jurisdiction Boundary — Undisputed Debt Mandatory",
    takeaway:
      "Where an invoice has a documented pre-existing dispute, pivot immediately to Order XXXVII CPC or Section 12A Commercial Mediation rather than risking an adverse NCLT cost order.",
  },
];

const FORM_COMPARISON_ROWS = [
  {
    parameter: "Statutory Provision",
    form3: "Rule 5(1)(a) of AAA Rules, 2016",
    form4: "Rule 5(1)(b) of AAA Rules, 2016",
  },
  {
    parameter: "Primary Use Case",
    form3:
      "When operational debt arises from a master contract, MSA, lease, or multiple consolidated invoices where a structured computation sheet is attached.",
    form4:
      "When operational debt arises directly from specific unpaid invoice(s) and you are demanding payment by enclosing copies of those invoices.",
  },
  {
    parameter: "Mandatory Attachments",
    form3:
      "Computation table of default, copy of contract/PO, delivery challans, and records proving debt & default (e.g., GSTR-1/2B, ledger, Section 18 acknowledgments).",
    form4:
      "Copy of each unpaid Tax Invoice clearly showing invoice number, date, due date, principal, and contractual interest terms, plus Board Resolution.",
  },
  {
    parameter: "Best Practice for Multi-PO Clubbing",
    form3:
      "Preferred by Enterprise GCs when clubbing 5–50+ invoices across multiple Purchase Orders with a consolidated interest working sheet.",
    form4:
      "Ideal for 1–5 high-value standalone invoices (e.g., ₹1.2 Cr capital equipment or bulk supply invoice) where terms are printed on the invoice face.",
  },
  {
    parameter: "Common NCLT Filing Mistake",
    form3:
      "Omitting the exact date of default per invoice or failing to attach the underlying contract/PO referenced in the particulars.",
    form4:
      "Serving Form 4 without attaching legible copies of every single invoice listed in the demand schedule.",
  },
];

const PREEMPTION_ROWS = [
  {
    challenge: "Pre-Existing Quality / Quantity Dispute Email",
    statute: "IBC s.8(2)(a) & s.9(5)(ii)(d)",
    preemption:
      "Pre-screen 24 months of emails, WhatsApp chats, and GRN remarks. Drop any disputed invoice from the schedule if remaining undisputed invoices still exceed ₹1 Crore. Attach GSTR-2B ITC claim proof.",
  },
  {
    challenge: "Unilateral Interest Disallowed Below ₹1 Crore",
    statute: "IBC s.4 & s.5(21)",
    preemption:
      "Include interest only where expressly stipulated in signed POs, MSAs, or mutually accepted tax invoices (Prashat Agarwal). Clearly segregate Principal vs Interest in Annexure-II.",
  },
  {
    challenge: "Section 10A Covid Moratorium Inclusion",
    statute: "IBC s.10A Proviso",
    preemption:
      "Exclude every invoice whose due date/default fell between 25 March 2020 and 24 March 2021. Never rely on a Section 10A default to cross the ₹1 Crore floor.",
  },
  {
    challenge: "Unauthorized Signatory / Missing Board Resolution",
    statute: "Rule 5(1) AAA Rules",
    preemption:
      "Pass a specific Board Resolution authorizing both the CFO/Director and external Advocates (Macquarie Bank). Annex the certified true copy directly to Form 3/Form 4.",
  },
  {
    challenge: "Defective Service / Wrong Registered Address",
    statute: "Rule 5(2)(a)-(b) AAA Rules",
    preemption:
      "Verify MCA Master Data on dispatch day. Serve simultaneously via Speed Post RPAD at the Registered Office AND official email to a Whole-Time Director/KMP with BSA s.63 certificate.",
  },
  {
    challenge: "Time-Barred Invoices (> 3 Years Old)",
    statute: "IBC s.238A & Limitation Act Art. 137",
    preemption:
      "Audit invoice due dates against the 3-year cut-off. Attach debtor balance confirmations, part-payments (s.19), or signed audited financials (s.18) extending limitation.",
  },
];

const AUDIT_CHECKLIST = [
  {
    id: "chk-1",
    title: "1. ₹1 Crore Threshold Verified",
    description:
      "Confirm undisputed principal plus legally enforceable contractual interest equals or exceeds ₹1,00,00,000 as on notice date.",
  },
  {
    id: "chk-2",
    title: "2. Section 10A Dates Scrubbed",
    description:
      "Verify zero defaults relied upon fell between 25 March 2020 and 24 March 2021 under the statutory Covid-19 bar.",
  },
  {
    id: "chk-3",
    title: "3. Mobilox Email & WhatsApp Audit",
    description:
      "Search all project, sales, and accounts threads for any pre-existing quality, rate, or delivery dispute raised by the debtor.",
  },
  {
    id: "chk-4",
    title: "4. Form 3 vs Form 4 Selection",
    description:
      "Use Form 3 for contract/multi-PO schedules with computation sheets; use Form 4 when enclosing specific unpaid invoices.",
  },
  {
    id: "chk-5",
    title: "5. Exact Date of Default Per Invoice",
    description:
      "State the precise due date and date of default for each invoice in the schedule—never leave the default date vague.",
  },
  {
    id: "chk-6",
    title: "6. Contractual Interest Proof",
    description:
      "Highlight the exact MSA, PO, or tax-invoice clause stipulating delayed-payment interest and attach the working sheet.",
  },
  {
    id: "chk-7",
    title: "7. 3-Year Limitation Check (s.238A)",
    description:
      "Ensure all invoices are within 3 years of default, or attach Section 18 written acknowledgments / balance sheets.",
  },
  {
    id: "chk-8",
    title: "8. Board Resolution & Authority",
    description:
      "Attach certified Board Resolution / LLP Authorization empowering the signatory and external advocate under Macquarie Bank.",
  },
  {
    id: "chk-9",
    title: "9. MCA Registered Office Sync",
    description:
      "Download fresh MCA Company Master Data to verify current Registered Office PIN code and Whole-Time Director email IDs.",
  },
  {
    id: "chk-10",
    title: "10. Delivery & GST ITC Evidence",
    description:
      "Compile signed e-Way Bills, LR/Bilty, GRNs, and GSTR-2B ITC reflection to crush sham 'non-delivery' defences.",
  },
  {
    id: "chk-11",
    title: "11. Dual-Channel Rule 5(2) Service",
    description:
      "Dispatch via Speed Post RPAD (retaining postal receipt + tracking) AND official email to KMP/Whole-Time Director.",
  },
  {
    id: "chk-12",
    title: "12. 10-Day Clear Calendar Buffer",
    description:
      "Compute 10 clear days from the latest confirmed delivery date before executing Form 5 affidavit under Section 9(3)(b).",
  },
];

const FAQ_ITEMS = [
  {
    question: "Should an Operational Creditor send Form 3 or Form 4 under IBC Section 8?",
    answer:
      "Under Rule 5(1) of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016, Form 3 is a Demand Notice demanding payment (typically used when debt arises from a contract, MSA, or multiple purchase orders with a detailed computation sheet), whereas Form 4 is a Notice attached directly with copies of unpaid invoices. Many NCLT benches treat them as interchangeable if all statutory particulars and invoices are annexed, but Form 3 with an itemized Computation Sheet + attached invoices is the gold-standard practice for multi-invoice B2B claims.",
  },
  {
    question: "Can principal and contractual interest be clubbed to cross the ₹1 Crore IBC threshold?",
    answer:
      "Yes. Following the NCLAT ruling in Prashat Agarwal v. Vikash Parasrampuria (2022), both principal and contractual interest can be clubbed to meet the ₹1 Crore minimum threshold under Section 4 of the IBC, provided the interest rate is clearly stipulated in the underlying agreement, Purchase Order, or accepted tax invoices. Unilateral interest printed on an invoice without mutual agreement or course of conduct is frequently disallowed by NCLT.",
  },
  {
    question: "Can multiple Purchase Orders or invoices be clubbed in a single Section 8 notice?",
    answer:
      "Yes, an Operational Creditor can club multiple unpaid invoices and Purchase Orders owed by the same Corporate Debtor into a single Section 8 Demand Notice to cross the ₹1 Crore threshold, provided all claims arise from operational transactions between the same legal entities, are within the 3-year limitation period, and are free of Section 10A Covid-period exclusions.",
  },
  {
    question: "What happens during the 10-day reply window under Section 8(2)?",
    answer:
      "Within 10 days of receiving the Section 8 Demand Notice, the Corporate Debtor must either: (a) pay the unpaid operational debt and furnish proof of payment, or (b) bring to the notice of the Operational Creditor the 'existence of a dispute' (supported by pre-existing records or pending suit/arbitration). If the debtor neither pays nor demonstrates a genuine pre-existing dispute within 10 days, the Operational Creditor acquires the statutory right to file a Section 9 CIRP petition in Form 5 before the NCLT.",
  },
  {
    question: "How does the Mobilox Innovations test affect my Section 8 notice?",
    answer:
      "Under Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353, if the Corporate Debtor raises a plausible, pre-existing dispute (supported by emails, debit notes, or correspondence predating your Section 8 notice), the NCLT must reject the Section 9 petition. However, sham or 'moonshine' defences fabricated for the first time in the 10-day reply will not defeat admission.",
  },
  {
    question: "Can an external Advocate sign and issue an IBC Section 8 Demand Notice?",
    answer:
      "Yes. In Macquarie Bank Ltd. v. Shilpi Cable Technologies Ltd. (2018) 2 SCC 674, the Supreme Court held that an advocate duly authorized by the Operational Creditor can validly sign and issue a Section 8 Demand Notice. To prevent technical objections, always annex a copy of the Board Resolution or Power of Attorney authorizing the advocate.",
  },
  {
    question: "What if my undisputed B2B claim is below ₹1 Crore (e.g., ₹25 Lakhs to ₹90 Lakhs)?",
    answer:
      "If your undisputed principal plus contractual interest cannot cross ₹1 Crore, do not file an IBC Section 9 petition—it will be dismissed at the threshold under Section 4. Instead, immediately escalate via an Order XXXVII CPC Summary Suit in Commercial Court, MSMED Act Section 18 MSEFC reference (for registered MSMEs claiming 3x RBI compound interest), or a Commercial Courts Act Section 12A Pre-Institution Mediation notice.",
  },
];

export default function IbcSection8DemandNoticePage() {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;
  const pageTitle =
    "Operational Creditor's Master Guide to IBC Section 8 Demand Notices (Form 3 vs Form 4): Crossing the ₹1 Crore Threshold & Surviving Mobilox Scrutiny";

  const breadcrumbItems = [
    { label: "Business Recovery", href: "/recovery-of-unpaid-dues-for-my-business" },
    { label: "IBC Section 8 Demand Notice", href: PAGE_PATH },
  ];

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: META_DESCRIPTION,
    url: pageUrl,
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
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
      "@id": pageUrl,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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
        name: "Business Recovery",
        item: `${SITE_URL}/recovery-of-unpaid-dues-for-my-business`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "IBC Section 8 Demand Notice",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IBC 2016 &bull; SECTIONS 4, 8 &amp; 9</span>
              <span>&bull;</span>
              <span>RULE 5 FORM 3 vs FORM 4</span>
              <span>&bull;</span>
              <span>₹1 CRORE+ B2B CREDITOR GUIDE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {pageTitle}
            </h1>

            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Summary
              </span>
              Under Section 8 of the Insolvency and Bankruptcy Code, 2016 (IBC) read with Rule 5 of the Adjudicating Authority Rules, 2016, an Operational Creditor owed at least ₹1 Crore serves a statutory Form 3 or Form 4 Demand Notice triggering a strict 10-day reply window. For{" "}
              <Link
                href="/recovery-of-unpaid-dues-for-my-business"
                className="text-red-400 font-semibold underline underline-offset-2 hover:text-red-300 transition-colors"
              >
                Enterprise B2B Creditors, CFOs &amp; General Counsel
              </Link>
              , a defect-free Section 8 notice forces board-level settlement before NCLT Corporate Insolvency Resolution Process (CIRP) strips promoter control.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Reply Window
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-100 mt-1 block">
                  10 Days
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Strict s.8(2) payment or dispute clock
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Minimum Default
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 block">
                  ₹1 Crore
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Principal + contractual interest (s.4)
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Notice Forms
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-400 mt-1 block">
                  Form 3 / 4
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Rule 5(1)(a) &amp; (b) AAA Rules 2016
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Limitation Bar
                </span>
                <span className="text-xl sm:text-2xl font-black text-red-400 mt-1 block">
                  3 Years
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Article 137 under IBC s.238A
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6 sm:mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <IbcSection8TableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Statutory Framework */}
              <section
                id="heading-statutory-framework"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Why IBC Section 8 Is India&rsquo;s Highest-Leverage B2B Recovery Tool
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Unlike conventional civil suits or commercial arbitrations that take 18 to 48 months to yield an executable decree, a statutory Demand Notice under <strong>Section 8(1) of the Insolvency and Bankruptcy Code, 2016</strong> places the Corporate Debtor&rsquo;s board of directors under immediate existential pressure. Once an Operational Creditor files a Section 9 petition before the National Company Law Tribunal (NCLT) and secures admission, the existing board is suspended under Section 17 and an Interim Resolution Professional (IRP) takes over company management and bank accounts.
                  </p>
                  <p>
                    Because promoters stand to lose control of their enterprise, a meticulously drafted Form 3 or Form 4 notice frequently unlocks priority treasury settlement within the 10-day statutory reply window. Whether you are a manufacturing supplier, EPC contractor, logistics operator, or SaaS vendor managing{" "}
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      enterprise commercial receivables
                    </Link>
                    , understanding the statutory architecture of Sections 4, 5(20), 5(21), 8, and 9 is essential before serving notice.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                        Operational Debt — Section 5(21)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A claim in respect of the provision of goods or services including employment, or a debt in respect of the payment of dues arising under any law for the time being in force and payable to the Central/State Government or local authority.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                        Default &amp; Threshold — Sections 3(12) &amp; 4
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Non-payment of debt when whole or any part or instalment has become due and payable and is not paid by the debtor. Following MCA Notification S.O. 1205(E) dated 24 March 2020, the minimum default threshold is <strong>₹1,00,00,000 (₹1 Crore)</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Bare-Act Timelines & SVG Workflow */}
              <section
                id="heading-timelines-limitation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Statutory Timelines: 10-Day Window, s.10A &amp; 3-Year Limitation
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Section 8 operates on a rigid statutory clock. Filing a Form 5 Section 9 application even one day before the expiry of 10 clear days from the date of delivery of the Demand Notice renders the NCLT petition premature and liable to dismissal.
                </p>

                {/* Desktop SVG Decision & Timeline Map */}
                <div className="hidden md:block mb-6 rounded-2xl border border-slate-200 bg-slate-900 p-5 overflow-x-auto">
                  <svg
                    viewBox="0 0 880 170"
                    width="880"
                    height="170"
                    className="w-full h-auto"
                    role="img"
                    aria-label="IBC Section 8 Demand Notice Statutory Escalation Workflow"
                  >
                    <defs>
                      <marker
                        id="arrowRed"
                        markerWidth="8"
                        markerHeight="8"
                        refX="6"
                        refY="4"
                        orient="auto"
                      >
                        <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="25" width="185" height="115" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="26" y="52" fill="#F87171" fontSize="11" fontWeight="bold">STEP 1 &bull; PRE-AUDIT</text>
                    <text x="26" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold">₹1 Cr &amp; Mobilox Check</text>
                    <text x="26" y="96" fill="#CBD5E1" fontSize="11">Scrub s.10A &amp; 3-yr</text>
                    <text x="26" y="112" fill="#CBD5E1" fontSize="11">limitation; audit emails</text>

                    <line x1="195" y1="82" x2="230" y2="82" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                    {/* Step 2 */}
                    <rect x="235" y="25" width="185" height="115" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="251" y="52" fill="#FBBF24" fontSize="11" fontWeight="bold">STEP 2 &bull; RULE 5(1)-(2)</text>
                    <text x="251" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold">Serve Form 3 / Form 4</text>
                    <text x="251" y="96" fill="#CBD5E1" fontSize="11">RPAD at Regd Office +</text>
                    <text x="251" y="112" fill="#CBD5E1" fontSize="11">Email to WTD / KMP</text>

                    <line x1="420" y1="82" x2="455" y2="82" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                    {/* Step 3 */}
                    <rect x="460" y="25" width="185" height="115" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="476" y="52" fill="#FCA5A5" fontSize="11" fontWeight="bold">STEP 3 &bull; SECTION 8(2)</text>
                    <text x="476" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold">10-Day Reply Window</text>
                    <text x="476" y="96" fill="#FEE2E2" fontSize="11">Debtor must pay OR</text>
                    <text x="476" y="112" fill="#FEE2E2" fontSize="11">cite pre-existing dispute</text>

                    <line x1="645" y1="82" x2="680" y2="82" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                    {/* Step 4 */}
                    <rect x="685" y="25" width="185" height="115" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="701" y="52" fill="#6EE7B7" fontSize="11" fontWeight="bold">STEP 4 &bull; SECTION 9</text>
                    <text x="701" y="74" fill="#FFFFFF" fontSize="13" fontWeight="bold">File Form 5 in NCLT</text>
                    <text x="701" y="96" fill="#D1FAE5" fontSize="11">Attach s.9(3)(b) No-Dispute</text>
                    <text x="701" y="112" fill="#D1FAE5" fontSize="11">Affidavit &amp; trigger CIRP</text>
                  </svg>
                </div>

                {/* Mobile Timeline Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden mb-6">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-red-400">Step 1 &bull; Pre-Audit</span>
                    <p className="font-bold text-sm mt-1">₹1 Cr &amp; Mobilox Check</p>
                    <p className="text-xs text-slate-300 mt-1">Scrub s.10A &amp; 3-year limitation; audit email trails.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-amber-400">Step 2 &bull; Rule 5(2)</span>
                    <p className="font-bold text-sm mt-1">Serve Form 3 / Form 4</p>
                    <p className="text-xs text-slate-300 mt-1">RPAD at Registered Office + Email to Whole-Time Director.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-950 text-white border border-red-800">
                    <span className="text-[10px] font-bold uppercase text-red-300">Step 3 &bull; Section 8(2)</span>
                    <p className="font-bold text-sm mt-1">10-Day Reply Window</p>
                    <p className="text-xs text-red-100 mt-1">Debtor must pay OR prove pre-existing dispute.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950 text-white border border-emerald-800">
                    <span className="text-[10px] font-bold uppercase text-emerald-300">Step 4 &bull; Section 9</span>
                    <p className="font-bold text-sm mt-1">File Form 5 in NCLT</p>
                    <p className="text-xs text-emerald-100 mt-1">Attach s.9(3)(b) affidavit &amp; initiate CIRP.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <h3 className="font-bold text-amber-900 text-sm mb-1">10-Day Delivery Rule</h3>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      The 10-day period under Section 8(2) runs from the date of <strong>receipt/delivery</strong> of the notice by the Corporate Debtor, not the date of dispatch. Always track India Post delivery confirmation.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <h3 className="font-bold text-red-900 text-sm mb-1">Section 10A Covid Bar</h3>
                    <p className="text-xs text-red-800 leading-relaxed">
                      No Section 9 application can <strong>ever</strong> be filed for any default occurring between 25 March 2020 and 24 March 2021. Mixing a 10A invoice into your ₹1 Cr total is fatal.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <h3 className="font-bold text-emerald-900 text-sm mb-1">Section 18 Reset</h3>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      While Article 137 imposes a 3-year limit from default, a signed balance confirmation, audited balance sheet entry, or email admitting liability restarts a fresh 3-year clock.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Form 3 vs Form 4 */}
              <section
                id="heading-form3-vs-form4"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Form 3 vs Form 4 Under Rule 5: Which Notice Format Should You Serve?
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Rule 5(1) of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016 prescribes two distinct formats for an Operational Creditor&rsquo;s Demand Notice: <strong>Form 3</strong> under Rule 5(1)(a) and <strong>Form 4</strong> under Rule 5(1)(b). Selecting the right format—and attaching the corresponding mandatory annexures—prevents preliminary maintainability objections before the NCLT.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="p-3.5 sm:p-4 w-1/5">Criteria</th>
                        <th className="p-3.5 sm:p-4 w-2/5">Form 3 (Demand Notice)</th>
                        <th className="p-3.5 sm:p-4 w-2/5">Form 4 (Notice with Invoice)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                      {FORM_COMPARISON_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">
                            {row.parameter}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 leading-relaxed align-top">
                            {row.form3}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 leading-relaxed align-top">
                            {row.form4}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-4">
                  Need an immediate pre-litigation reply or commercial demand template for sub-₹1 Crore claims? Review our{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Ready-to-Use Legal Notice Format Workspace
                  </Link>{" "}
                  or explore{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    Order XXXVII CPC Summary Suits
                  </Link>{" "}
                  for written-contract invoice recovery.
                </p>
              </section>

              {/* Section 4: Crossing ₹1 Crore Threshold (Clubbing & Interest) */}
              <section
                id="heading-threshold-clubbing"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Crossing the ₹1 Crore Threshold: Clubbing POs &amp; Contractual Interest
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Since the March 2020 enhancement of the Section 4 threshold from ₹1 Lakh to ₹1 Crore, enterprise CFOs frequently ask two threshold questions: (1) Can multiple unpaid Purchase Orders or tax invoices be clubbed together? (2) Can accrued interest be added to principal to cross ₹1 Crore?
                  </p>
                  <p>
                    Under settled NCLAT jurisprudence—most notably <em>Prashat Agarwal v. Vikash Parasrampuria</em> (2022)—the answer to both is <strong>yes</strong>, subject to strict documentary conditions. Multiple invoices issued under the same or different Purchase Orders to the same Corporate Debtor may be clubbed into a single Section 8 notice. Likewise, contractual interest may be clubbed with principal if—and only if—the interest rate is agreed upon in the Master Services Agreement, Purchase Order, or counter-signed Tax Invoice terms.
                  </p>
                </div>

                {/* Worked Computation Ledger */}
                <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Worked Section 8 Threshold Computation Ledger
                    </span>
                    <span className="text-[11px] font-mono text-slate-300">
                      18% p.a. Contractual Interest Clause in PO
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px]">
                        <tr>
                          <th className="p-3.5">PO / Invoice Ref</th>
                          <th className="p-3.5">Due Date</th>
                          <th className="p-3.5">Principal (₹)</th>
                          <th className="p-3.5">18% Interest (₹)</th>
                          <th className="p-3.5">Total Default (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <tr>
                          <td className="p-3.5 font-semibold">PO-104 / INV-221</td>
                          <td className="p-3.5">15 Jul 2025</td>
                          <td className="p-3.5">₹34,00,000</td>
                          <td className="p-3.5">₹8,25,000</td>
                          <td className="p-3.5 font-bold">₹42,25,000</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-semibold">PO-118 / INV-249</td>
                          <td className="p-3.5">10 Sep 2025</td>
                          <td className="p-3.5">₹28,50,000</td>
                          <td className="p-3.5">₹6,12,000</td>
                          <td className="p-3.5 font-bold">₹34,62,000</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-semibold">PO-132 / INV-275</td>
                          <td className="p-3.5">20 Nov 2025</td>
                          <td className="p-3.5">₹23,50,000</td>
                          <td className="p-3.5">₹4,03,000</td>
                          <td className="p-3.5 font-bold">₹27,53,000</td>
                        </tr>
                        <tr className="bg-emerald-50/80 font-black text-emerald-950">
                          <td className="p-3.5" colSpan={2}>
                            AGGREGATE SECTION 8 CLAIM (CROSSES ₹1 CRORE)
                          </td>
                          <td className="p-3.5">₹86,00,000</td>
                          <td className="p-3.5">₹18,40,000</td>
                          <td className="p-3.5 text-emerald-700">₹1,04,40,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  If you are a registered Micro or Small Enterprise under the MSMED Act, 2006, you can also compute statutory 3x RBI Bank Rate compound interest using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-red-700"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  before deciding between MSEFC and NCLT Section 9.
                </div>
              </section>

              {/* Section 5: Landmark Precedents */}
              <section
                id="heading-mobilox-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Surviving Mobilox Scrutiny: Verified Supreme Court &amp; NCLAT Precedents
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Over 60% of contested Section 9 dismissals turn on the <em>Mobilox Innovations</em> pre-existing dispute test or technical authorization defects. Every Operational Creditor counsel must anchor their Form 3/Form 4 drafting in these five binding precedents:
                </p>

                <div className="space-y-5">
                  {COURT_PRECEDENTS.map((prec, idx) => (
                    <article
                      key={idx}
                      className="relative pl-5 sm:pl-6 pr-4 py-4 rounded-r-2xl bg-slate-50 border border-slate-200 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                          {prec.parties}
                        </h3>
                        <span className="text-[11px] font-mono font-semibold text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                          {prec.citation}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 mb-2">
                        {prec.title} &bull; {prec.date}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        <strong>Facts &amp; Holding:</strong> {prec.facts} {prec.holding}
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <span className="font-bold text-emerald-700">{prec.amount}</span>
                        <span className="text-slate-600">
                          <strong>Creditor Takeaway:</strong> {prec.takeaway}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Rule 5(2) Service & Board Authorization */}
              <section
                id="heading-rule5-service"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Rule 5(2) Service Protocol &amp; Board Resolution Authorization
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Under <strong>Rule 5(2) of the AAA Rules, 2016</strong>, a Section 8 Demand Notice must be delivered to the Corporate Debtor at its <strong>registered office</strong> by hand, registered post, or speed post with acknowledgement due, <strong>OR</strong> by electronic mail service to a whole-time director or designated partner or key managerial personnel of the Corporate Debtor.
                  </p>
                  <p>
                    In practice, relying on a single channel invites tactical denial of service. LegalRecovery.in recommends simultaneous{" "}
                    <Link
                      href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      tri-channel dispatch via Speed Post RPAD, Official Email, and WhatsApp
                    </Link>{" "}
                    backed by a <strong>Section 63 Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> electronic evidence certificate. For empirical settlement velocity across notice channels, see our{" "}
                    <Link
                      href="/reports/legal-notice-outcomes-study"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      Legal Notice Outcomes Study
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 7: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28">
                <IbcSection8ScenarioTabs />
              </section>

              {/* Section 8: NCLT Defense Pre-Emption Matrix */}
              <section
                id="heading-preemption-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Debtor Defense Pre-Emption Matrix (NCLT Section 9 Stage)
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Corporate debtor counsel rely on six predictable technical objections in their Section 8(2) reply to derail NCLT admission. Pre-empt every defence before dispatching your notice:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="p-3.5 sm:p-4 w-1/4">Debtor Objection</th>
                        <th className="p-3.5 sm:p-4 w-1/4">Statutory Provision</th>
                        <th className="p-3.5 sm:p-4 w-1/2">Creditor Pre-Emption SOP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                      {PREEMPTION_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-semibold text-slate-900 align-top">
                            {row.challenge}
                          </td>
                          <td className="p-3.5 sm:p-4 font-mono text-[11px] text-[#DC2626] align-top">
                            {row.statute}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 leading-relaxed align-top">
                            {row.preemption}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 9: 12-Point Operational Creditor Pre-Issuance Audit Checklist */}
              <section
                id="heading-audit-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    12-Point Operational Creditor Pre-Issuance Audit Checklist
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Before signing Form 3 or Form 4, General Counsel and Credit Controllers should certify compliance across all 12 statutory checkpoints:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {AUDIT_CHECKLIST.map((chk) => (
                    <div
                      key={chk.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all"
                    >
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                          &check;
                        </span>
                        {chk.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{chk.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10: Dual B2B CTA Action Desk */}
              <section id="heading-action-desk" className="scroll-mt-28">
                <IbcSection8CTA />
              </section>

              {/* Section 11: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Frequently Asked Questions: IBC Section 8 Form 3 &amp; Form 4
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3 select-none">
                        <span>{faq.question}</span>
                        <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Primary Statutory Citations &amp; IBBI Rules
                  </h2>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                  All statutory commentary, threshold computations, and NCLT pre-emption checklists in this guide are derived from primary Indian statutes, IBBI regulations, and verified Supreme Court / NCLAT rulings:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-medium underline underline-offset-2 transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
                  <span>
                    Authored &amp; Vetted by: <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                  </span>
                  <span>Last Verified: November 2026 &bull; CORE-26 Enterprise B2B Recovery</span>
                </div>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
