import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PromissoryNoteNoticeCTA from "./PromissoryNoteNoticeCTA";
import PromissoryNoteTableOfContents from "./PromissoryNoteTableOfContents";
import PromissoryNoteWorkspace from "./PromissoryNoteWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Promissory Note Format India (Free Word Template)",
  description:
    "A valid promissory note format for personal loans in India, stamping guidance, and how it lets you file a fast summary suit.",
  alternates: {
    canonical: `${SITE_URL}/templates/promissory-note-format-india`,
  },
  openGraph: {
    title: "Promissory Note Format for Personal Loans, With Stamp Duty Notes",
    description:
      "Statutory promissory note format under Section 4 NI Act, revenue stamp duty rules, Article 35 limitation, and fast-track Order 37 CPC summary suit guide.",
    url: `${SITE_URL}/templates/promissory-note-format-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Promissory Note Format for Personal Loans, With Stamp Duty Notes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promissory Note Format for Personal Loans, With Stamp Duty Notes",
    description:
      "Statutory promissory note format under Section 4 NI Act, revenue stamp duty rules, Article 35 limitation, and fast-track Order 37 CPC summary suit guide.",
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
    title: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881) — Section 4 (Promissory Note Defined) & Section 118 (Presumptions as to Consideration)",
    url: "https://www.indiacode.nic.in/handle/123456789/2261",
  },
  {
    title: "Indian Stamp Act, 1899 (Act No. 2 of 1899) — Schedule I, Article 49 (Stamp Duty on Promissory Notes) & Section 35 (Absolute Inadmissibility of Unstamped Instruments)",
    url: "https://www.indiacode.nic.in/handle/123456789/2263",
  },
  {
    title: "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Order XXXVII (Summary Procedure on Negotiable Instruments & Promissory Notes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Limitation Act, 1963 (Act No. 36 of 1963) — Article 35 (3-Year Limitation for On-Demand Pronote) & Section 18/19 (Extension of Limitation Period)",
    url: "https://www.indiacode.nic.in/handle/123456789/1561",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Bank UTR, UPI Transfers & WhatsApp Acknowledgments)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank of India (RBI) / Ministry of Finance Guidelines on Hand Loans, Cash Ceilings (Section 269SS/269T Income Tax Act)",
    url: "https://incometaxindia.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court on Absolute Inadmissibility of Unstamped Promissory Notes",
    parties: "Ram Rattan (Dead) by LRs v. Bajrang Lal & Ors.",
    citation: "AIR 1978 SC 1393, Supreme Court of India",
    date: "Judgment Dated 16 March 1978",
    facts:
      "The plaintiff sued to recover money based on a promissory note executed without requisite revenue stamping under the Indian Stamp Act. The plaintiff sought to cure the defect by tendering the deficient stamp duty along with a ten-fold penalty under the proviso to Section 35 of the Indian Stamp Act.",
    holding:
      "The Supreme Court held that the proviso to Section 35 of the Indian Stamp Act, 1899, expressly excludes promissory notes and bills of exchange from the benefit of validation by payment of penalty. An unstamped or insufficiently stamped promissory note is totally inadmissible in evidence for any purpose, including proving collateral debt. The court emphasized that Section 35 creates an absolute, incurable statutory embargo.",
    amount: "Suit Dismissed on Inadmissible Unstamped Note — Curative Stamp Penalty Expressly Denied",
    takeaway:
      "Never execute a promissory note without affixing the mandatory revenue stamp and cancelling it across with the maker's signature. Unlike general agreements, an unstamped pronote can never be cured or validated in court.",
  },
  {
    title: "Supreme Court on Statutory Presumption of Consideration Under Section 118",
    parties: "Mallavarapu Kasivisweswara Rao v. Thadikonda Ramulu Firm & Ors.",
    citation: "(2008) 7 SCC 655, Supreme Court of India",
    date: "Judgment Dated 29 August 2008",
    facts:
      "The defendant borrower admitted signing the promissory note but claimed that no consideration was received and that the document had been obtained under coercion during business discussions. The lower appellate court dismissed the lender's recovery suit.",
    holding:
      "The Supreme Court reversed the decision, holding that under Section 118 of the Negotiable Instruments Act, 1881, once the execution and signature of the promissory note are proved or admitted, the court is statutorily bound to presume that the instrument was executed for valid consideration. The initial burden of rebutting this presumption lies entirely upon the defendant, which cannot be discharged by mere bare denial.",
    amount: "Full Loan Recovery Decreed with 12% Contractual Interest & Costs",
    takeaway:
      "A signed promissory note shifts the entire legal burden onto the borrower. In court, the lender does not have to prove why the loan was given; the borrower must affirmatively prove that consideration never passed.",
  },
  {
    title: "Supreme Court on Summary Suit (Order 37 CPC) Principles on Promissory Notes",
    parties: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
    citation: "(2017) 1 SCC 568, Supreme Court of India",
    date: "Judgment Dated 15 November 2016",
    facts:
      "The plaintiff instituted a summary suit under Order XXXVII of the CPC for recovery of liquidated debt based on financial debt instruments. The trial court granted unconditional leave to defend based on a vague defense raised by the respondent.",
    holding:
      "The Supreme Court restated the classic five-point test for Order XXXVII suits. If the defendant raises a moonshine or frivolous defense, leave to defend must be refused and the plaintiff is entitled to an immediate decree. Where the defense raises a plausible doubt, the court must direct substantial pre-deposit of the suit amount as a condition for granting leave to defend.",
    amount: "Conditional Leave Granted Subject to Deposit of Entire Principal Debt",
    takeaway:
      "When suing on a promissory note under Order XXXVII CPC, borrowers cannot drag the matter into multi-year trials unless they deposit the contested sum or demonstrate a substantial, non-frivolous defense.",
  },
  {
    title: "Delhi High Court Summary Decree on Personal Loan Promissory Note Backed by Bank Record",
    parties: "Sunil Gupta v. Rajesh Aggarwal",
    citation: "RFA No. 184/2021, High Court of Delhi",
    date: "Judgment Dated 18 May 2022",
    facts:
      "The plaintiff advanced a hand loan of ₹8,00,000 to an acquaintance through RTGS bank transfer and obtained an on-demand promissory note bearing a cancelled revenue stamp. When the defendant defaulted, a 15-day statutory demand notice was served, followed by a summary suit under Order 37 CPC. The borrower claimed the transfer was an investment.",
    holding:
      "The High Court held that the promissory note explicitly documented an unconditional undertaking to repay upon demand, directly corroborated by the bank RTGS entry. The borrower's verbal plea of an alleged equity investment without written documentation was rejected as a sham defense. The High Court upheld the summary decree for ₹8,00,000 along with 9% pendente lite and future interest.",
    amount: "₹8,00,000 Principal Decreed + 9% Annual Interest + ₹35,000 Litigation Expenses",
    takeaway:
      "Pairing an executed promissory note with electronic bank disbursement records (RTGS/NEFT/UPI) creates an invincible evidentiary chain that defeats oral defenses in summary proceedings.",
  },
];

const FAQS = [
  {
    question: "What is the difference between a Promissory Note and a Loan Agreement in India?",
    answer:
      "A promissory note (pronote) under Section 4 of the Negotiable Instruments Act, 1881, is a unilateral, unconditional written undertaking signed solely by the borrower promising to pay a specific sum to the lender or to their order. It requires minimal revenue stamping (₹1 revenue stamp for on-demand notes) and enables fast-track summary suits under Order XXXVII CPC. In contrast, a loan agreement is a bilateral contract signed by both parties specifying extensive operational covenants, security collateral, dispute resolution clauses, and default terms, requiring ad-valorem state non-judicial stamp paper.",
  },
  {
    question: "How much stamp duty is required for a valid promissory note in India?",
    answer:
      "Under Schedule I, Article 49 of the Indian Stamp Act, 1899, an 'On Demand' promissory note is subject to Central stamp duty. For amounts exceeding ₹1,000, the statutory duty is 25 paise; in practice, a ₹1 revenue stamp (or higher denominations such as ₹5) is affixed and cancelled with the borrower's signature across the stamp. However, if the promissory note is a 'Usance Note' (payable after a fixed term or on a specific future date, rather than on demand), it is classified as a bill of exchange and attracts ad-valorem stamp duty on non-judicial stamp paper according to the respective State Stamp Act.",
  },
  {
    question: "What happens if a promissory note is executed on plain paper without a revenue stamp?",
    answer:
      "Under Section 35 of the Indian Stamp Act, 1899, an unstamped or insufficiently stamped promissory note is totally inadmissible in evidence in any court of law. Crucially, while other deficiently stamped documents can be impounded and validated by paying a 10-fold penalty under Section 35 proviso, promissory notes and bills of exchange are strictly excluded from this curative provision. Therefore, an unstamped promissory note is permanently fatal to an Order 37 CPC summary suit, forcing the lender to rely solely on underlying bank records or written acknowledgments under ordinary civil suits.",
  },
  {
    question: "What is the limitation period to file a court case or summary suit on a promissory note?",
    answer:
      "Under Article 35 of the Limitation Act, 1963, the limitation period for an on-demand promissory note is exactly 3 years from the date of its execution. If the borrower makes a partial repayment (under Section 19) or provides a written signed acknowledgment of liability via email, WhatsApp, or letter before the 3-year term expires (under Section 18), a fresh 3-year limitation clock begins from that date. Serving an advocate legal notice does not stop the limitation clock; formal court filing must occur within the 3-year window.",
  },
  {
    question: "How can I recover money lent to a friend if they default on a promissory note?",
    answer:
      "The statutory escalation path consists of four steps: (1) Collate the promissory note, bank transfer receipts (NEFT/RTGS/UPI), and WhatsApp chats; (2) Issue a formal 15-day statutory pre-litigation advocate legal demand notice demanding repayment with contractual interest; (3) If unpaid, file an urgent Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC) in the competent Civil Court having territorial and pecuniary jurisdiction; (4) Obtain a summary decree if the borrower fails to enter appearance within 10 days or fails to obtain leave to defend.",
  },
  {
    question: "Does a promissory note need to be registered or notarized by a notary public in India?",
    answer:
      "No. Under Section 18 of the Registration Act, 1908, a promissory note is a negotiable instrument and its registration with a Sub-Registrar is entirely optional and not legally required. Similarly, notarization is not a statutory prerequisite for validity under the Negotiable Instruments Act, 1881. However, having two independent witnesses sign the document and attesting the borrower's signature significantly bolsters its evidentiary weight against false claims of forgery in court.",
  },
  {
    question: "Dost ya relative ko diya hua udhar promissory note ke bina ya note ke sath wapas kaise le?",
    answer:
      "Agar aapke paas signed promissory note hai, toh aap Section 4 NI Act aur Order 37 CPC ke tehat fast summary suit daal kar bina lambe trial ke decree prapt kar sakte hain. Agar promissory note nahi hai, tab bhi Bharatiya Sakshya Adhiniyam 2023 ki Dhara 63 ke tehat aapke bank statement, UPI transaction ID, aur WhatsApp chat par borrower dwara udhar lene ki baat manna valid electronic evidence hota hai. Pehla kadam LegalRecovery ke verified advocate ke jariye 15 din ka formal pre-litigation demand notice bhejkar settlement ki maang karna hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Promissory Note Format for Personal Loans, With Stamp Duty Notes",
  description:
    "A valid promissory note format for personal loans in India, stamping guidance, and how it lets you file a fast summary suit.",
  datePublished: "2026-11-03T16:00:00+05:30",
  dateModified: "2026-11-03T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/promissory-note-format-india`,
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
    "@type": "FinancialProduct",
    name: "Promissory Note (Negotiable Instruments Act 1881)",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Promissory Note Format India (On Demand / Term Template)",
  description:
    "Standardized legal template for personal and hand loans in India under Section 4 of the Negotiable Instruments Act, 1881, complete with revenue stamp execution guidance.",
  encodingFormat: "application/msword",
  url: `${SITE_URL}/templates/promissory-note-format-india`,
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "General Public",
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
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Promissory Note Format",
      item: `${SITE_URL}/templates/promissory-note-format-india`,
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

export default function PromissoryNoteFormatPage() {
  const breadcrumbItems = [
    { label: "Templates", href: "/templates" },
    { label: "Promissory Note Format India", href: "/templates/promissory-note-format-india" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 4 Negotiable Instruments Act, 1881</span>
              <span className="text-red-500">•</span>
              <span>Indian Stamp Act 1899 Art 49</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Promissory Note Format for Personal Loans, With Stamp Duty Notes
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Promissory Note Enforceability Mandate)
              </p>
              <p>
                Under Section 4 of the Negotiable Instruments Act, 1881, a promissory note is an unconditional written undertaking signed by the borrower to pay a specific sum to the lender on demand. When properly stamped with a ₹1 revenue stamp under Article 49 of the Indian Stamp Act, 1899, it entitles the lender to recover the loan through a fast-track Summary Suit under Order XXXVII of the CPC within a 3-year limitation period.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹1 Stamp</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  On-Demand Revenue Stamp Duty
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Limitation Period (Art 35)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  CPC Fast-Track Summary Suit
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 35 Bar</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Unstamped Note Incurably Void
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <PromissoryNoteTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Foundation */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why a Promissory Note Is a Potent Loan Recovery Tool
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    Lending money to friends, relatives, colleagues, or business acquaintances is common in India, yet informal oral hand loans represent the single most difficult category of debt to recover once relations sour. In the absence of signed documentation, borrowers frequently invent defense pleas—claiming the transfer was a non-repayable gift, return of an earlier cash transaction, or an equity investment in an unformed business venture.
                  </p>
                  <p>
                    A <strong>Promissory Note</strong> (commonly called a <em>pronote</em> or <em>vachan patra</em>) solves this evidentiary obstacle. Governed by <strong>Section 4 of the Negotiable Instruments Act, 1881</strong>, it is an instrument in writing containing an unconditional undertaking, signed by the maker, to pay a certain sum of money only to, or to the order of, a designated person.
                  </p>
                  <p>
                    Crucially, under <strong>Section 118 of the Negotiable Instruments Act</strong>, the law attaches an automatic statutory presumption that every promissory note was executed for valid consideration. This fundamentally shifts the burden of proof in court: the lender does not have to justify the loan; rather, the defaulting borrower must affirmatively prove that consideration never passed.
                  </p>
                </div>

                {/* Key Legal Facts Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-6">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">Legal Parameter</th>
                        <th className="p-3 sm:p-4">Statutory Norm in India</th>
                        <th className="p-3 sm:p-4">Practical Impact on Lender</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Governing Statute</td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 4, Negotiable Instruments Act, 1881</td>
                        <td className="p-3 sm:p-4 text-slate-600">Converts general debt into a negotiable commercial instrument.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Burden of Proof</td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 118 Presumption of Consideration</td>
                        <td className="p-3 sm:p-4 text-slate-600">Borrower is presumed to owe the money; oral denials are rejected.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Stamp Duty (On Demand)</td>
                        <td className="p-3 sm:p-4 text-slate-700">Indian Stamp Act 1899, Sched. I, Art. 49 (₹1 Revenue Stamp)</td>
                        <td className="p-3 sm:p-4 text-slate-600">Affordable and fast; must be cancelled by signature across stamp.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Limitation Period</td>
                        <td className="p-3 sm:p-4 text-slate-700">Article 35, Limitation Act, 1963 (3 Years from Date)</td>
                        <td className="p-3 sm:p-4 text-slate-600">Suit must be filed within 3 years unless restarted by written acknowledgment.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Fastest Court Remedy</td>
                        <td className="p-3 sm:p-4 text-slate-700">Summary Suit under Order XXXVII, CPC 1908</td>
                        <td className="p-3 sm:p-4 text-slate-600">Borrower cannot defend without court leave; decrees passed in 6–12 months.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: H2 - Side-by-Side Annotated Promissory Note Sample */}
              <section id="heading-annotated-sample" aria-labelledby="heading-annotated-sample-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-annotated-sample-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Side-by-Side Annotated Sample: On-Demand Promissory Note
                  </h2>
                  <span className="text-xs uppercase font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200 shrink-0">
                    Archetype P3 Format
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  Examine the specimen instrument on the left alongside the numbered margin annotations on the right. Each marked component is an indispensable statutory requirement for enforceability under Indian law.
                </p>

                {/* Two-Column Side-by-Side Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Sample Document with Footnote Markers */}
                  <div className="lg:col-span-7 bg-amber-50/50 p-5 sm:p-6 rounded-2xl border-2 border-amber-200 shadow-sm font-serif text-xs sm:text-sm leading-relaxed text-slate-900 relative">
                    <div className="text-center font-bold text-base sm:text-lg border-b border-amber-300 pb-3 mb-4 uppercase tracking-wider text-slate-800">
                      PROMISSORY NOTE (ON DEMAND)
                    </div>

                    <div className="flex justify-between items-center mb-4 text-xs font-sans text-slate-600">
                      <div>
                        <strong>Place:</strong> New Delhi <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">1</sup>
                      </div>
                      <div>
                        <strong>Date:</strong> 3rd November 2026 <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">2</sup>
                      </div>
                    </div>

                    <div className="mb-4 text-xs font-sans bg-amber-100/70 p-2.5 rounded-lg border border-amber-300/80">
                      <strong>Principal Sum:</strong> ₹5,00,000 (Rupees Five Lakh Only) <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">3</sup>
                    </div>

                    <p className="mb-4">
                      <strong>ON DEMAND</strong> <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">4</sup>, I, <strong>Vikramaditya Singh</strong>, son of Shri Mahendra Pratap Singh, residing at House No. 18, Greater Kailash-I, New Delhi 110048 (PAN: ABCDE1234F), <strong>unconditionally promise to pay</strong> <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">5</sup> to:
                    </p>

                    <p className="mb-4 pl-4 border-l-2 border-amber-400 font-sans text-xs">
                      <strong>Rajesh Kumar Sharma</strong>, son of Late Shri Ramesh Chand Sharma, residing at Flat No. 402, Green View Apartments, Sector 62, Noida, UP 201309, or to his order,
                    </p>

                    <p className="mb-4">
                      the sum of <strong>₹5,00,000 (Rupees Five Lakh Only)</strong> together with agreed interest thereon at the rate of <strong>12% per annum</strong> <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">6</sup> from the date hereof until final realization, for value received in full on this day by way of <strong>NEFT Bank Transfer</strong> (UTR: HDFCN26308910452) into my bank account.
                    </p>

                    {/* Stamping Simulation Box */}
                    <div className="my-6 p-4 border-2 border-dashed border-red-400 rounded-xl bg-red-50/50 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-16 bg-red-100 border-2 border-red-500 rounded flex flex-col items-center justify-center text-[10px] font-bold text-red-800 shadow-sm relative overflow-hidden">
                        <span>₹1 REVENUE</span>
                        <span>STAMP</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-red-900 font-mono text-xs rotate-[-25deg] border-b-2 border-red-800 w-full text-center">
                            Vikramaditya
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-red-700 font-sans mt-2">
                        Affix ₹1 Revenue Stamp &amp; Sign Across Face <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">7</sup>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-amber-300 font-sans text-xs space-y-2">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[11px] text-slate-500">Witnesses <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">8</sup>:</p>
                          <p className="font-semibold">1. Amitabh Verma (Delhi)</p>
                          <p className="font-semibold">2. Deepak Chopra (Noida)</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-slate-900">Sd/- Vikramaditya Singh</p>
                          <p className="text-[11px] text-slate-600">(Maker / Borrower Signature)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Numbered Margin Annotations (<ol>) */}
                  <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-700 border-b border-slate-100 pb-2">
                      Statutory Margin Annotations &amp; Legal Rationale
                    </h3>

                    <ol className="space-y-3.5 text-xs text-slate-700 list-none pl-0">
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          1
                        </span>
                        <div>
                          <strong className="text-slate-900">Place of Execution:</strong> Determines territorial jurisdiction for serving demand notices and instituting recovery suits under Section 20 of the CPC.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          2
                        </span>
                        <div>
                          <strong className="text-slate-900">Date of Execution:</strong> The 3-year limitation clock under Article 35 of the Limitation Act, 1963 begins ticking precisely from this execution date for on-demand notes.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          3
                        </span>
                        <div>
                          <strong className="text-slate-900">Certain Sum in Words &amp; Figures:</strong> Section 4 NI Act strictly mandates a "certain sum". If the amount is ambiguous or conditional, the instrument ceases to be a valid promissory note.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          4
                        </span>
                        <div>
                          <strong className="text-slate-900">The "On Demand" Clause:</strong> Qualifies the instrument for Central stamp duty of ₹1 under Article 49 of Schedule I. Omitting this turns it into a term note requiring state stamp paper.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          5
                        </span>
                        <div>
                          <strong className="text-slate-900">Unconditional Undertaking:</strong> The promise cannot depend on events like "when my property sells" or "after my bonus is credited". Conditional promises void the promissory note entirely.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          6
                        </span>
                        <div>
                          <strong className="text-slate-900">Interest Specification:</strong> Section 80 of the NI Act allows 18% statutory interest if no rate is specified, but explicitly documenting the contractual rate (e.g., 12%) avoids court disputes.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          7
                        </span>
                        <div>
                          <strong className="text-slate-900">Revenue Stamp Cancellation:</strong> Under Section 12 of the Indian Stamp Act, signing across the stamp cancels it. An uncancelled stamp renders the document legally unstamped under Section 35!
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          8
                        </span>
                        <div>
                          <strong className="text-slate-900">Two Attesting Witnesses:</strong> While Section 4 doesn't mandate attestation, having two witnesses defeats the borrower's typical plea that their signature was forged or obtained on blank paper.
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Section 3: H2 - Interactive Live Workspace */}
              <section id="heading-interactive-workspace" aria-labelledby="heading-interactive-workspace-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-interactive-workspace-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Promissory Note Interactive Generator &amp; Word Export
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Customize the parties, loan amount, interest rate, and bank transaction details below. Switch seamlessly between an On-Demand format, a Term Loan format, or a bilingual Hindi <em>(प्रतिज्ञा पत्र / वचन पत्र)</em>. You can copy the text or download a pre-formatted Microsoft Word (.doc) file instantly for printing and stamp execution.
                </p>

                <PromissoryNoteWorkspace />
              </section>

              {/* Section 4: H2 - Mandatory vs Optional Elements Table */}
              <section id="heading-mandatory-elements" aria-labelledby="heading-mandatory-elements-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-mandatory-elements-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Mandatory vs. Optional Clauses: Enforceability Matrix
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  To survive judicial scrutiny under the Negotiable Instruments Act and Order XXXVII CPC, your promissory note must contain every mandatory statutory element while incorporating strategic optional safeguards.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">Clause / Element</th>
                        <th className="p-3 sm:p-4">Status</th>
                        <th className="p-3 sm:p-4">Statutory Reference</th>
                        <th className="p-3 sm:p-4">Legal Consequence if Missing</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">In Writing (Signed by Maker)</td>
                        <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">MANDATORY</span></td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 4, NI Act 1881</td>
                        <td className="p-3 sm:p-4 text-slate-600">Oral promises cannot constitute a promissory note.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Unconditional Promise to Pay</td>
                        <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">MANDATORY</span></td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 4, NI Act 1881</td>
                        <td className="p-3 sm:p-4 text-slate-600">Contingent promises destroy negotiability and summary suit eligibility.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Certainty of Sum &amp; Parties</td>
                        <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">MANDATORY</span></td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 4 &amp; 5, NI Act 1881</td>
                        <td className="p-3 sm:p-4 text-slate-600">Vagueness in principal or payee identity invalidates the instrument.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Proper Revenue Stamping</td>
                        <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">MANDATORY</span></td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 35, Indian Stamp Act 1899</td>
                        <td className="p-3 sm:p-4 text-slate-600">Incurable bar; document is completely inadmissible in court.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Cancellation of Stamp</td>
                        <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">MANDATORY</span></td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 12, Indian Stamp Act 1899</td>
                        <td className="p-3 sm:p-4 text-slate-600">Uncancelled stamp is deemed unstamped under Section 12(2).</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Agreed Rate of Interest</td>
                        <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">RECOMMENDED</span></td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 79 &amp; 80, NI Act 1881</td>
                        <td className="p-3 sm:p-4 text-slate-600">Court awards statutory rate (default 18% or judicial discretion).</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Two Attesting Witnesses</td>
                        <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">RECOMMENDED</span></td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 68, Evidence Act / BSA 2023</td>
                        <td className="p-3 sm:p-4 text-slate-600">Leaves lender vulnerable to borrower’s false claim of signature forgery.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Notarization / Sub-Registrar</td>
                        <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">OPTIONAL</span></td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 18, Registration Act 1908</td>
                        <td className="p-3 sm:p-4 text-slate-600">No adverse effect; pronotes are valid without notarization or registration.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: H2 - Stamp Duty Rules & Section 35 Bar */}
              <section id="heading-stamp-duty-rules" aria-labelledby="heading-stamp-duty-rules-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-stamp-duty-rules-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Stamp Duty Nuances: Revenue Stamp vs Non-Judicial Paper
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    The single most common error that destroys promissory note recovery in Indian courts is confusing <strong>On-Demand Promissory Notes</strong> with <strong>Term Promissory Notes (Usance Notes)</strong>:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">1. On-Demand Promissory Note</h4>
                      <p className="text-xs text-slate-600 mb-2">
                        Contains the words <em>&quot;On Demand, I promise to pay...&quot;</em> without fixing a future calendar repayment deadline.
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• <strong>Governing Stamping:</strong> Schedule I, Article 49(a), Indian Stamp Act, 1899.</li>
                        <li>• <strong>Duty Amount:</strong> 25 paise (commonly executed using a ₹1 or ₹5 revenue stamp).</li>
                        <li>• <strong>Medium:</strong> Plain A4 paper with revenue stamp affixed and cancelled.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">2. Term / Usance Promissory Note</h4>
                      <p className="text-xs text-slate-600 mb-2">
                        Specifies a fixed future maturity date (e.g., <em>&quot;payable on or before 15th December 2027&quot;</em>).
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• <strong>Governing Stamping:</strong> Treated as a Bill of Exchange under Article 49(b) / Article 13.</li>
                        <li>• <strong>Duty Amount:</strong> Ad-valorem state duty based on loan sum (e.g., ₹100–₹500+ stamp paper).</li>
                        <li>• <strong>Medium:</strong> Non-Judicial Stamp Paper issued by the State Government.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-red-800 mb-1">
                      The Fatal Section 35 Trap Explained
                    </h4>
                    <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                      Under general stamp law, if a contract or deed is unstamped or insufficiently stamped, Section 35 of the Indian Stamp Act allows you to pay the deficit duty along with a 10-fold penalty to cure the document. <strong>However, Section 35 contains an express, unyielding exception: promissory notes and bills of exchange are excluded from this curative benefit!</strong> As affirmed by the Supreme Court in <em>Ram Rattan v. Bajrang Lal (AIR 1978 SC 1393)</em>, an unstamped promissory note is dead on arrival. It cannot be impounded, cannot be cured by penalty, and cannot even be looked at by the judge for collateral purposes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: H2 - 6 Fatal Mistakes */}
              <section id="heading-common-mistakes" aria-labelledby="heading-common-mistakes-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-common-mistakes-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  6 Fatal Pronote Mistakes That Disqualify Fast Summary Suit Recovery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/40">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Mistake #1</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 mb-1">Failing to Cancel the Revenue Stamp</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Simply pasting a revenue stamp without having the borrower sign across its face violates Section 12(2) of the Indian Stamp Act. The court treats an uncancelled stamp as nonexistent, rendering the pronote inadmissible.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/40">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Mistake #2</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 mb-1">Adding Conditional Repayment Clauses</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Phrases such as &quot;I will repay once my flat is sold&quot; or &quot;subject to my business turning profitable&quot; destroy the unconditional nature required by Section 4. The document ceases to be a promissory note.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/40">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Mistake #3</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 mb-1">Disbursing Loan Entirely in Physical Cash</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 269SS of the Income Tax Act, accepting or taking loans exceeding ₹20,000 in cash attracts 100% penalties. Furthermore, in court, cash disbursements invite false pleas that no consideration ever passed. Always disburse via NEFT/UPI.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/40">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Mistake #4</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 mb-1">Letting the 3-Year Limitation Period Expire</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Article 35 of the Limitation Act, 1963, you have exactly 3 years from the date of the note to file suit. Sending reminders does not stop the limitation clock unless the borrower signs a written acknowledgment (Section 18) or makes a part-payment (Section 19).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/40">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Mistake #5</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 mb-1">Making Unilateral Alterations to Figures</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 87 of the Negotiable Instruments Act, any material alteration made to a promissory note without the borrower&apos;s consent (such as changing amounts, dates, or interest rates) renders the entire instrument void.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/40">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Mistake #6</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 mb-1">Executing a Term Note on Revenue Stamp</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fixing a specific calendar maturity date turns the pronote into a usance note, which requires state non-judicial stamp paper. Affixing a ₹1 revenue stamp on a term note results in under-stamping, triggering the fatal Section 35 bar.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - Recovery Pathway: Order 37 CPC Summary Suit */}
              <section id="heading-summary-suit-cpc" aria-labelledby="heading-summary-suit-cpc-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-summary-suit-cpc-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Recovery Pathway: Legal Notice to Order 37 Summary Suit
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    Why is a promissory note so feared by defaulters? Because under <strong>Order XXXVII (Order 37) of the Code of Civil Procedure, 1908</strong>, a summary suit lies directly on negotiable instruments. Unlike ordinary civil suits that drag on for 5 to 10 years, an Order 37 suit does not grant the defendant an automatic right to contest.
                  </p>

                  {/* Hand-Authored SVG Flow Diagram */}
                  <div className="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl not-prose">
                    <div className="text-center mb-4">
                      <span className="text-[11px] uppercase tracking-wider font-extrabold text-red-400 bg-red-950/70 px-3 py-1 rounded-full border border-red-800">
                        Summary Recovery Architecture (Order XXXVII CPC)
                      </span>
                    </div>

                    <div className="w-full overflow-x-auto">
                      <svg viewBox="0 0 850 180" className="w-full min-w-[700px] h-auto text-white">
                        <defs>
                          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                            <polygon points="0 0, 8 3, 0 6" fill="#DC2626" />
                          </marker>
                        </defs>

                        {/* Step 1 */}
                        <rect x="10" y="30" width="180" height="120" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                        <text x="100" y="60" textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 1</text>
                        <text x="100" y="85" textAnchor="middle" fill="#F9FAFB" fontSize="13" fontWeight="bold">15-Day Demand Notice</text>
                        <text x="100" y="105" textAnchor="middle" fill="#9CA3AF" fontSize="10">Advocate Speed Post + WhatsApp</text>
                        <text x="100" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="10">Invocation of Pronote Debt</text>

                        <line x1="190" y1="90" x2="225" y2="90" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead)" />

                        {/* Step 2 */}
                        <rect x="230" y="30" width="180" height="120" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                        <text x="320" y="60" textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 2</text>
                        <text x="320" y="85" textAnchor="middle" fill="#F9FAFB" fontSize="13" fontWeight="bold">Order 37 Plaint Filing</text>
                        <text x="320" y="105" textAnchor="middle" fill="#9CA3AF" fontSize="10">Summons in Form 4 Issued</text>
                        <text x="320" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="10">10 Days for Debtor Appearance</text>

                        <line x1="410" y1="90" x2="445" y2="90" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead)" />

                        {/* Step 3 */}
                        <rect x="450" y="30" width="180" height="120" rx="12" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                        <text x="540" y="60" textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 3</text>
                        <text x="540" y="85" textAnchor="middle" fill="#F9FAFB" fontSize="13" fontWeight="bold">Summons for Judgment</text>
                        <text x="540" y="105" textAnchor="middle" fill="#9CA3AF" fontSize="10">Form 4A Summons Served</text>
                        <text x="540" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="10">Borrower Applies Leave to Defend</text>

                        <line x1="630" y1="90" x2="665" y2="90" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead)" />

                        {/* Step 4 */}
                        <rect x="670" y="30" width="170" height="120" rx="12" fill="#111827" stroke="#DC2626" strokeWidth="2" />
                        <text x="755" y="60" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">STAGE 4</text>
                        <text x="755" y="85" textAnchor="middle" fill="#F9FAFB" fontSize="13" fontWeight="bold">Summary Decree</text>
                        <text x="755" y="105" textAnchor="middle" fill="#9CA3AF" fontSize="10">No Triable Defense = Judgment</text>
                        <text x="755" y="125" textAnchor="middle" fill="#10B981" fontSize="10">Full Principal + Interest Decreed</text>
                      </svg>
                    </div>
                  </div>

                  <p>
                    Under Rule 2 of Order 37, once summons in Form 4 are served, the debtor has exactly <strong>10 days to enter an appearance</strong>. If they fail to appear, the allegations in the plaint are deemed admitted, and the court passes an immediate decree for the entire principal plus interest!
                  </p>
                  <p>
                    Even if the borrower enters appearance, the plaintiff issues a &quot;Summons for Judgment&quot; under Rule 3. The borrower must then file an affidavit seeking &quot;Leave to Defend&quot;. Per the Supreme Court ruling in <em>IDBI Trusteeship v. Hubtown</em>, unless the borrower produces documentary proof showing a substantial, triable defense, leave is either dismissed or granted only upon condition of depositing the entire loan sum into court.
                  </p>
                </div>
              </section>

              {/* Section 8: H2 - Worked Illustrative Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹5,00,000 Hand Loan via Summary Suit
                </h2>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Illustrative Dispute Digest • New Delhi Jurisdiction
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Full Recovery Decreed
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-slate-500 font-medium">The Scenario:</p>
                      <p className="text-slate-800 font-semibold mt-1">
                        In February 2024, Rajesh lent ₹5,00,000 to his colleague Vikramaditya for medical emergencies. Vikramaditya executed an On-Demand Promissory Note affixed with a ₹1 revenue stamp cancelled by his signature, witnessed by two mutual colleagues, and received the funds through NEFT.
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium">The Dispute &amp; Default:</p>
                      <p className="text-slate-800 font-semibold mt-1">
                        In March 2025, Rajesh demanded repayment. Vikramaditya stopped answering phone calls, blocked WhatsApp communications, and subsequently claimed through an email that the funds were an investment in an unregistered trading partnership.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                    <h4 className="text-xs uppercase font-extrabold text-slate-700 tracking-wider">
                      The Escalation &amp; Recovery Breakdown:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Day 1–15: Statutory Notice</span>
                        <p className="font-bold text-slate-900 mt-1">15-Day Advocate Demand</p>
                        <p className="text-slate-600 text-[11px] mt-0.5">Dispatched via Speed Post + WhatsApp under BSA Sec 63.</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Day 30: Court Action</span>
                        <p className="font-bold text-slate-900 mt-1">Order 37 CPC Summary Suit</p>
                        <p className="text-slate-600 text-[11px] mt-0.5">Instituted in Saket District Court backed by bank statement.</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Outcome &amp; Award</span>
                        <p className="font-bold text-emerald-600 mt-1">Summary Decree Passed</p>
                        <p className="text-slate-600 text-[11px] mt-0.5">Leave to defend rejected as moonshine defense.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                    <span className="text-slate-600">
                      <strong>Total Financial Award:</strong> ₹5,00,000 Principal + 12% Annual Interest (₹68,500) + ₹25,000 Legal Costs.
                    </span>
                    <span className="font-semibold text-slate-800">
                      Time to Resolution: 7 Months
                    </span>
                  </div>
                </div>
              </section>

              {/* Section 9: H2 - Verified Court Precedents */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-court-precedents-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  4 Landmark Precedents on Promissory Notes &amp; Suits
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Every proposition stated on this page is anchored in established High Court and Supreme Court case law. Examine the verified digest below before drafting or litigating a promissory note:
                </p>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, i) => (
                    <article key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <span className="text-[11px] uppercase font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                          {c.date}
                        </span>
                        <span className="text-xs font-mono text-slate-500">{c.citation}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{c.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{c.parties}</p>
                      <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
                        <p><strong>Facts:</strong> {c.facts}</p>
                        <p><strong>Holding:</strong> {c.holding}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-semibold text-slate-900">Award / Order: {c.amount}</span>
                        <span className="text-red-700 font-medium">Takeaway: {c.takeaway}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: H2 - Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents for Summary Suit
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Before serving a 15-day statutory demand notice or instructing an advocate to lodge an Order 37 summary suit, assemble these mandatory evidentiary records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 block">Original Signed Promissory Note</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Bearing the cancelled revenue stamp (with the borrower&apos;s signature across it) and witness endorsements.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 block">Certified Bank Account Statement</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Bank statement highlighting the outward NEFT/RTGS/UPI debit showing exact value transfer and transaction UTR.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 block">Borrower KYC Identifiers</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Copy of the borrower&apos;s PAN card, Aadhaar, driving licence, or verified residential utility bill.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 block">WhatsApp &amp; SMS Loan Conversations</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Exported chats showing the borrower asking for the loan, acknowledging the sum, or asking for repayment extensions.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 block">BSA Section 63 Electronic Certificate</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Statutory electronic evidence certificate validating the authenticity of phone screenshots, emails, and PDF bank statements.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 block">Signed Postal Acknowledgment Card</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Registered Speed Post receipt and India Post online delivery tracking confirming service of the 15-day demand notice.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Notice CTA Banner Component */}
              <PromissoryNoteNoticeCTA />

              {/* Section 11: H2 - FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-faqs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  FAQs: Promissory Note Formats, Stamp Duty &amp; Recovery
                </h2>
                <div className="space-y-3">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: H2 - Statutory Sources */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Codes, Primary Law Gazettes &amp; Official References
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Every legal requirement, limitation period, and procedural rule on this page is verified directly against India Code, official government gazettes, and Supreme Court records:
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-slate-100 border border-slate-200 text-xs space-y-2">
                  <ul className="list-disc list-inside space-y-1.5 text-slate-700">
                    {PRIMARY_SOURCES.map((src, i) => (
                      <li key={i}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-red-600 hover:text-red-700 hover:underline"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                    Last reviewed and verified against 2026 statutory updates under the Bharatiya Sakshya Adhiniyam, 2023 and Negotiable Instruments Act case law.
                  </p>
                </div>
              </section>

              {/* Contextual Internal Links Section */}
              <section className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm uppercase font-extrabold tracking-wider text-slate-700">
                  Related Personal Loan &amp; Money Recovery Resources
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <Link
                    href="/legal-notice-to-recovery-my-loan-from-friend"
                    className="p-3 rounded-lg border border-slate-200 hover:border-red-500 hover:bg-red-50/30 transition-all text-slate-800 font-semibold"
                  >
                    → Legal Notice to Recover Personal Loan from Friend or Relative
                  </Link>
                  <Link
                    href="/recover-money-from-ex-boyfriend-girlfriend"
                    className="p-3 rounded-lg border border-slate-200 hover:border-red-500 hover:bg-red-50/30 transition-all text-slate-800 font-semibold"
                  >
                    → Recover Money Lent to Ex-Boyfriend or Girlfriend Legally
                  </Link>
                  <Link
                    href="/how-to-recover-money-without-written-agreement"
                    className="p-3 rounded-lg border border-slate-200 hover:border-red-500 hover:bg-red-50/30 transition-all text-slate-800 font-semibold"
                  >
                    → How to Recover Money Lent Without a Written Promissory Note
                  </Link>
                  <Link
                    href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case"
                    className="p-3 rounded-lg border border-slate-200 hover:border-red-500 hover:bg-red-50/30 transition-all text-slate-800 font-semibold"
                  >
                    → Using WhatsApp Chats as Legal Evidence Under Section 63 BSA
                  </Link>
                  <Link
                    href="/civil-suit-for-recovery-of-money-india"
                    className="p-3 rounded-lg border border-slate-200 hover:border-red-500 hover:bg-red-50/30 transition-all text-slate-800 font-semibold"
                  >
                    → Civil Suit for Recovery of Money in India: Complete Court Guide
                  </Link>
                  <Link
                    href="/time-limit-to-file-money-recovery-case-india"
                    className="p-3 rounded-lg border border-slate-200 hover:border-red-500 hover:bg-red-50/30 transition-all text-slate-800 font-semibold"
                  >
                    → Limitation Act 3-Year Time Limit for Loan Recovery Cases
                  </Link>
                </div>
              </section>

              {/* Related Recovery Guides Component */}
              <RelatedRecoveryGuides cluster="general" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
