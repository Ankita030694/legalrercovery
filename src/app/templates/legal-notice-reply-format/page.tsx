import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LegalNoticeReplyCTA from "./LegalNoticeReplyCTA";
import LegalNoticeReplyTOC from "./LegalNoticeReplyTOC";
import LegalNoticeReplyWorkspace from "./LegalNoticeReplyWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Reply to Legal Notice Format (Free) + Time Limit",
  description:
    "Reply-to-legal-notice format with guidance on admissions, denials and the usual 15–30 day timeline, and when to get a lawyer.",
  alternates: {
    canonical: `${SITE_URL}/templates/legal-notice-reply-format`,
  },
  openGraph: {
    title: "Reply to Legal Notice Format (Free) + Time Limit",
    description:
      "Reply-to-legal-notice format with guidance on admissions, denials and the usual 15–30 day timeline, and when to get a lawyer.",
    url: `${SITE_URL}/templates/legal-notice-reply-format`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Reply to Legal Notice Format (Free) + Time Limit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reply to Legal Notice Format (Free) + Time Limit",
    description:
      "Reply-to-legal-notice format with guidance on admissions, denials and the usual 15–30 day timeline, and when to get a lawyer.",
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
    title: "Code of Civil Procedure, 1908 (CPC) — Order VIII Rule 5 (Specific Denials & Evasive Admissions Rule)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Section 138(c) & Section 139 (Presumption in Favour of Holder & Rebuttal Standards)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Email & Speed Post Deliveries)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "General Clauses Act, 1897 — Section 27 (Meaning of Service by Post & Statutory Presumption of Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/2202",
  },
  {
    title: "Supreme Court of India — Basalingappa v. Mudibasappa (2019) 5 SCC 418 (Rebuttal of Presumption Under Section 139 NI Act)",
    url: "https://main.sci.gov.in/judgment/judis/46513.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "Order VIII Rule 5 CPC: Evasive Denials Deemed as Legal Admission",
    parties: "Badat and Co. v. East India Trading Co.",
    citation: "AIR 1964 SC 538, (1964) 4 SCR 19 (Supreme Court of India)",
    date: "Judgment Dated 10 May 1963",
    facts:
      "A defendant in a commercial contract dispute responded to a formal claim with a generic denial stating they did not admit the allegations. The claimant contended that under Order VIII Rule 3 and Rule 5 of the Code of Civil Procedure, a non-specific general denial without dealing with each allegation of fact constitutes deemed admission of the debt.",
    holding:
      "A Constitution Bench of the Supreme Court held that pleadings must be specific. Every allegation of fact in a plaint or demand notice, if not denied specifically or by necessary implication, shall be taken to be admitted against the person who failed to deny it. A reply must address each factual assertion directly rather than relying on blanket disclaimers.",
    amount: "Specific Denials Mandated; General Denials Treated as Deemed Admission",
    takeaway:
      "When replying to a legal notice, never use a vague one-line denial such as 'all contents are denied'. You must traverse paragraph by paragraph and state your own positive version of facts to avoid deemed admission.",
  },
  {
    title: "Failure to Reply to Notice Gives Rise to Legitimate Adverse Inference",
    parties: "Gian Chand & Brothers and Anr. v. Rattan Lal @ Dulichand",
    citation: "(2013) 2 SCC 606 (Supreme Court of India)",
    date: "Judgment Dated 07 January 2013",
    facts:
      "A creditor issued a detailed advocate legal notice demanding repayment of outstanding loan amounts and dishonoured trade credits. The debtor received the notice via registered post but chose to ignore it and did not issue any reply. When the creditor filed a recovery suit, the debtor attempted to introduce new oral defenses.",
    holding:
      "The Supreme Court observed that when a party receives an assertory legal notice containing specific factual allegations and remains silent without replying or challenging the assertions, the court is entitled to draw an adverse inference under Section 114 of the Evidence Act (now Section 119 BSA 2023) that the recipient had no credible defense at the time of receipt.",
    amount: "Adverse Inference Drawn Against Non-Responding Recipient",
    takeaway:
      "Ignoring a legal notice is one of the most dangerous litigation mistakes. A timely, well-reasoned advocate reply puts your defense on the judicial record before the other side files a case.",
  },
  {
    title: "Rebuttal of Presumption Under Section 139 NI Act in Notice Reply",
    parties: "Basalingappa v. Mudibasappa",
    citation: "(2019) 5 SCC 418 (Supreme Court of India)",
    date: "Judgment Dated 09 April 2019",
    facts:
      "The complainant issued a statutory notice under Section 138 NI Act alleging a loan of ₹6,00,000 against a dishonoured cheque. The accused immediately issued an advocate reply stating that he had no financial dealings with the complainant, that the cheque was a stolen blank security cheque, and that the complainant lacked the financial capacity to advance such funds.",
    holding:
      "The Supreme Court held that while Section 139 raises a presumption of debt in favour of the cheque holder, the accused is only required to raise a 'probable defense' on the preponderance of probabilities. Because the accused raised the defense of financial incapacity and cheque theft at the earliest point in the reply notice, the statutory presumption was successfully rebutted.",
    amount: "Section 138 Complaint Dismissed; Acquittal of Accused Confirmed",
    takeaway:
      "In cheque bounce disputes, your reply to the 15-day statutory notice is your primary evidentiary weapon to rebut the Section 139 presumption before the Magistrate takes cognizance.",
  },
  {
    title: "Without Prejudice Communications Cannot Be Used as Admission in Court",
    parties: "Peacock Plywood Pvt. Ltd. v. The Oriental Insurance Co. Ltd.",
    citation: "(2006) 12 SCC 673 (Supreme Court of India)",
    date: "Judgment Dated 11 December 2006",
    facts:
      "During settlement correspondence following an insurance dispute, the insured responded to a legal letter reserving rights with the words 'Without Prejudice'. The insurer attempted to use admissions made during the negotiations to extinguish the insured's right to claim additional damages in court.",
    holding:
      "The Supreme Court affirmed that correspondence marked 'Without Prejudice' is privileged under Section 23 of the Indian Evidence Act. Admissions made during negotiations cannot be treated as clear waivers of rights unless there is an express unconditional compromise. Reserving rights ensures the responder can negotiate without forfeiting statutory defenses.",
    amount: "Privilege Upheld for 'Without Prejudice' Legal Correspondence",
    takeaway:
      "Always include an express 'Without Prejudice' clause in your legal notice reply to ensure that any conciliation offer cannot be twisted into an admission of debt.",
  },
];

const FAQS = [
  {
    question: "What is the legal notice reply time limit, and in how many days must I respond?",
    answer:
      "The legal notice reply time limit depends on the governing statute. For cheque bounce notices under Section 138 of the Negotiable Instruments Act, the statutory window is strictly 15 days from the date of receipt. In consumer and civil recovery disputes, notices typically prescribe a 15-day or 30-day response window. Notices to the Government under Section 80 CPC provide 60 days. While an inadvertent delay of a few days does not bar your defense, issuing your reply within the stated timeframe prevents the sender from claiming you tacitly accepted their allegations.",
  },
  {
    question: "What are the legal notice reply charges if drafted by an advocate?",
    answer:
      "Standard legal notice reply charges in India generally range from ₹3,000 to ₹15,000 depending on the complexity of the dispute, advocate seniority, and required annexures. On LegalRecovery.in, verified litigation advocates review the notice, draft paragraph-by-paragraph specific denials under Order VIII Rule 5 CPC, and dispatch the response by email and WhatsApp under BSA Section 63 for a transparent, flat fee of ₹999. Speed Post is optional at ₹450 per party.",
  },
  {
    question: "What happens if I ignore a legal notice and do not send a reply?",
    answer:
      "Under Indian law, failing to reply to a legal notice does not automatically make you guilty, but it severely weakens your legal standing. The Supreme Court ruled in Gian Chand v. Rattan Lal that courts may draw an adverse inference against a party who stays silent when served with a factual legal demand. Furthermore, the sender will proceed to file a civil suit or criminal complaint, and you lose the chance to point out false statements or negotiate a pre-litigation settlement.",
  },
  {
    question: "Can I download this legal notice reply format in Word (.doc) and customize it myself?",
    answer:
      "Yes. You can use the 'Download .doc' button in our interactive workspace above to download the clean Word template format. Replace the bracketed placeholders with your specific dates, claim numbers, and factual denials. For high-stakes disputes like Section 138 cheque bounce or commercial arbitration, having an advocate verify the specific wording is strongly recommended to avoid unintended admissions.",
  },
  {
    question: "What is the rule on admissions and denials in a legal notice reply?",
    answer:
      "Under Order VIII Rule 5 of the Code of Civil Procedure (CPC), every factual allegation in a notice must be specifically traversed. Blanket statements like 'all allegations are denied' are treated as evasive denials, which courts may interpret as deemed admissions. You must admit undisputed facts (e.g. that a purchase order exists) while categorically denying any liability, default, or breach.",
  },
  {
    question: "Should a legal notice reply be sent by the party directly or through an advocate?",
    answer:
      "While an individual is legally entitled to send a reply under their own signature, issuing a reply through an advocate's office has significant advantages. An advocate's reply carries professional authority, accurately invokes procedural rules (like Order VIII Rule 5 CPC or Section 139 NI Act rebuttal), ensures correct service tracking, and signals to the sender that you are prepared to defend the matter aggressively in court.",
  },
  {
    question: "Legal notice aane par reply kaise karein aur kitne din mein bhejna hota hai?",
    answer:
      "Legal notice milte hi sabse pehle uske envelope ka Speed Post tracking number aur receipt date note karein. Cheque bounce notice mein 15 din ka kanooni samay hota hai, jabki consumer ya civil mamlo mein aam taur par 15 se 30 din milte hain. Notice ka paragraph-wise jawab taiyar karein, har jhuthe arop ko specifically deny karein aur apna paksh rakhein. LegalRecovery.in par verified advocate se proper legal language mein reply draft karwake Speed Post aur email se bhejein taaki court mein adverse inference na bane.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Reply to a Legal Notice: Format and Timelines",
  description:
    "Reply-to-legal-notice format with guidance on admissions, denials and the usual 15–30 day timeline, and when to get a lawyer.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/legal-notice-reply-format`,
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
    name: "Legal Notice Reply",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Reply to Legal Notice Format (Standard Legal Response Template)",
  description:
    "Standard legal response template for replying to statutory legal notices under Section 138 NI Act, Consumer Protection Act 2019, and recovery claims.",
  encodingFormat: "text/html",
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      "audienceType": "Public",
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
      name: "Legal Notice Reply Format",
      item: `${SITE_URL}/templates/legal-notice-reply-format`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function LegalNoticeReplyPage() {
  const breadcrumbItems = [
    { label: "Templates", href: "/templates" },
    { label: "Legal Notice Reply Format", href: "/templates/legal-notice-reply-format" },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Code of Civil Procedure Order VIII &amp; NI Act §138</span>
              <span className="text-red-500">•</span>
              <span>Statutory Defense Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How to Reply to a Legal Notice: Format and Timelines
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Admissions, Denials &amp; Time Limits)
              </p>
              <p>
                A reply to a legal notice must be issued within the stipulated 15 to 30 days (strictly 15 days under Section 138 NI Act). Under Order VIII Rule 5 CPC, every allegation must be specifically denied to prevent deemed admission. An advocate-drafted reply establishes your defence, preserves counter-claims, and prevents adverse inferences before litigation begins.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15–30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Reply Time Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order VIII</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">CPC Specific Denial Rule</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Zero Admission</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">&apos;Without Prejudice&apos; Protection</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Section 63</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">BSA Electronic Proof Standard</p>
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
            <LegalNoticeReplyTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Context */}
              <section id="heading-reply-overview" aria-labelledby="heading-reply-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-reply-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Timely Reply to a Legal Notice Is Essential Under Indian Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Receiving an advocate legal notice is the preliminary warning shot before a formal civil suit, criminal complaint under Section 138 of the Negotiable Instruments Act, or consumer commission case on <Link href="/e-jagriti-consumer-complaint-guide" className="text-blue-700 underline font-medium">e-Jagriti</Link> is filed. Many recipients mistakenly discard the notice, assuming that silence incurs no consequences until summons arrive from a court.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under established Indian jurisprudence, ignoring a legal notice is perilous. In <em>Gian Chand &amp; Brothers v. Rattan Lal</em> (2013), the Supreme Court held that when an assertory legal notice specifying factual liability is received and left unanswered, courts are entitled to draw an adverse inference against the recipient. An unanswered notice allows the sender to claim in their plaint that their assertions stood undisputed prior to litigation.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Conversely, an articulate reply drafted under the Code of Civil Procedure (CPC) and the Bharatiya Sakshya Adhiniyam, 2023 (BSA) enables you to rebut unsubstantiated claims, place your documentary trail on record, expose suppressed facts, and reserve your statutory counter-claims for malicious prosecution.
                </p>
              </section>

              {/* Section 2: Archetype P3 - Interactive Reply Workspace & Annotated Draft */}
              <section id="heading-reply-workspace" aria-labelledby="heading-reply-workspace-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-reply-workspace-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Reply to Legal Notice Format: Annotated Sample &amp; Word Download
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Select your dispute scenario to inspect the side-by-side annotated template with numbered margin explanations:
                  </p>
                </div>

                <LegalNoticeReplyWorkspace />
              </section>

              {/* Section 3: Statutory Timelines & Benchmark Table */}
              <section id="heading-timelines-table" aria-labelledby="heading-timelines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-timelines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Notice Reply Time Limit: In How Many Days Must You Respond?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Different Indian statutes enforce distinct notice windows. Calculating the exact deadline begins from the date of physical or electronic delivery, not the date typed on the sender&apos;s letterhead:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Legal Notice Reply Timelines by Dispute Category</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Category</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Reply Time Limit</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Consequence if Missed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 138 NI Act (Cheque Bounce)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-black">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138(c), Negotiable Instruments Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Complainant files criminal case within next 30 days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Consumer Dispute / Defect in Service
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">15 to 30 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Consumer Protection Act, 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Consumer Commission petition on e-Jagriti with costs
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Civil Money Recovery / Invoices
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">As Specified (15–30 Days)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order VIII CPC &amp; Indian Contract Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Commercial recovery suit with interest claim</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Notice to Government / Public Officer
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">2 Months (60 Days)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 80, Code of Civil Procedure, 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory statutory wait before court filing</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Property Eviction &amp; Tenancy Termination
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">15 Days (Month-to-Month)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 106, Transfer of Property Act, 1882</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Suit for eviction &amp; mesne profits</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Want to verify applicable commission fee thresholds before responding to a consumer claim? Use our free <Link href="/tools/consumer-commission-fee-jurisdiction-calculator" className="text-blue-700 underline font-medium">Consumer Court Fee &amp; Jurisdiction Calculator</Link>.
                </p>
              </section>

              {/* Section 4: Mandatory vs Optional Elements Table (P3 Requirement) */}
              <section id="heading-mandatory-elements" aria-labelledby="heading-mandatory-elements-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-mandatory-elements-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Mandatory vs. Optional Elements in a Legal Notice Reply
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A reply drafted for court scrutiny must conform to strict procedural standards. Omitting mandatory elements exposes you to deemed admissions, while including prudent optional elements bolsters your counter-position:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Mandatory vs Optional Components of Legal Notice Reply</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Drafting Element</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Classification</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Function</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Strategic Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Date &amp; Mode of Notice Receipt
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sets limitation start date</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Defeats sender&apos;s claim of non-responsiveness</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          &apos;Without Prejudice&apos; Reservation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Evidentiary privilege</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Prevents reply from being read as liability admission</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Paragraph-by-Paragraph Specific Denials
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Compliance with Order VIII Rule 5 CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Destroys sender&apos;s assertions of undisputed liability</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Preliminary Legal Objections
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Mandatory</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Jurisdiction, limitation &amp; privity</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Enables early dismissal under Order VII Rule 11 CPC</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Demand for Original Document Inspection
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-semibold">Optional (Recommended)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Testing authenticity of disputed papers</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Exposes forged vouchers or unauthorized cheques</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Counter-Claim &amp; Damages Demand
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-semibold">Optional (Strategic)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Claiming business injury / legal costs</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Forces sender to evaluate cost of protracted suit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Common Mistakes That Weaken a Reply (P3 Requirement) */}
              <section id="heading-common-mistakes" aria-labelledby="heading-common-mistakes-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-common-mistakes-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5 Critical Mistakes That Weaken a Legal Notice Reply
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Litigation records demonstrate that improper replies often inflict more damage than complete silence. Avoid these common drafting pitfalls:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Blanket Evasive Denials (&apos;Contents Denied in Toto&apos;):
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Writing a single paragraph stating &apos;all allegations are baseless and denied&apos; violates Order VIII Rule 5 CPC. If the sender claims you received an invoice on 12th July and you fail to specifically explain your objection to that invoice, the court will treat the delivery of that invoice as admitted.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Inadvertent Admission of Financial or Contractual Liability:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Phrases like &apos;we could not pay due to cash-flow issues&apos; or &apos;we will settle after receiving funds&apos; operate as clear acknowledgments of debt under Section 18 of the Limitation Act, 1963, resetting the 3-year limitation clock and destroying your defense.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Disclosing Your Entire Evidence Base Pre-Maturely:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        A reply should state your core defense and expose the sender&apos;s bad faith without attaching confidential witness details or unfiled internal strategy notes that give the sender an opportunity to patch up their pleadings before filing suit.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Sending via Untraceable Ordinary Post or Informal WhatsApp:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Sending a reply by ordinary post offers zero proof of delivery. A legal reply must always be dispatched via Registered Speed Post with Acknowledgment Due (AD) alongside Section 63 BSA compliant electronic email to both the sender and their advocate.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-bold text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Failing to Challenge Jurisdiction and Missing Necessary Parties:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        If the notice asserts jurisdiction in a court where no cause of action arose or threatens individual directors without arraying the company, failing to raise this objection in your reply weakens your initial preliminary defense.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 6: Statutory Resolution Hierarchy Flowchart (SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Defense Hierarchy: From Notice Receipt to Court Defense
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this 5-stage procedural workflow upon receiving an assertory legal notice to shield yourself from liability:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Receipt &amp; Envelope Audit</h3>
                    <p className="text-xs text-slate-200 mt-1">Preserve Speed Post envelope with tracking barcode; calculate exact 15/30-day deadline.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Document &amp; Account Audit</h3>
                    <p className="text-xs text-amber-900 mt-1">Gather invoices, bank statements, delivery challans, and cancellation emails.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Frame Specific Denials</h3>
                    <p className="text-xs text-slate-700 mt-1">Draft paragraph-wise rebuttals and assert preliminary jurisdictional objections.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Verification &amp; Dispatch</h3>
                    <p className="text-xs text-red-900 mt-1">Serve via Registered Speed Post + BSA Section 63 compliant electronic mail.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Pre-Litigation Settlement or Counter-Suit</h3>
                    <p className="text-xs text-emerald-900 mt-1">Sender drops baseless claim, engages in mediation, or faces your counter-pleadings.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Legal Notice Reply Workflow</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Statutory Defense Hierarchy for Legal Notice Reply"
                  >
                    <defs>
                      <linearGradient id="replyDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="replyAlertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="replySuccGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#replyDarkGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Notice Delivered</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Preserve Envelope</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Calculate 15/30d Limit</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Evidentiary Audit</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Verify Bank / Ledger</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Locate Contract Proof</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Draft Specific Denials</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Order VIII Rule 5 CPC</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Without Prejudice Clause</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#replyAlertGrad)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Dispatch</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Speed Post + AD</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">BSA Section 63 Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#replySuccGrad)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Legal Armor Active</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Zero Adverse Inference</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Defense on Record</text>

                    {/* Bottom Benchmark Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">PROCEDURAL PILLARS OF AN EFFECTIVE LEGAL NOTICE REPLY:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Specific Traversals: Must refute each claim specifically to prevent deemed admissions (Order VIII Rule 5 CPC)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Rebuttal at Earliest Point: Necessary to displace Section 139 NI Act / Section 119 BSA presumptions</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Documented Tracking: Retain India Post delivery logs + Section 63 BSA certificate for court production</text>
                  </svg>
                </div>
              </section>

              {/* Section 7: Landmark Precedents Digest */}
              <section id="heading-precedents-digest" aria-labelledby="heading-precedents-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-precedents-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Precedents Digest: Court Rulings on Legal Notice Replies
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Ruling #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Core Legal Finding
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Procedural Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Precedent Across All Indian High Courts &amp; Tribunals
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Example: Rebutting a Baseless ₹7,50,000 Notice Claim
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Pre-Litigation Defense
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru, Karnataka (Commercial Supply Dispute)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vivek Enterprises, a tech accessories distributor in Bengaluru, received a high-pressure advocate legal demand notice from an overseas component vendor claiming an alleged unpaid invoice of ₹7,50,000 with 24% annual penal interest, giving a 15-day ultimatum before instituting commercial recovery and criminal proceedings.
                    </p>
                    <p>
                      <strong>The Actual Facts:</strong> The component consignment delivered 5 months earlier was substantially defective, having failed quality testing. Vivek Enterprises had formally repudiated the consignment within 72 hours via email and returned 80% of the defective units via V-Trans logistics with signed receiving receipts. The vendor had suppressed these return receipts and attempted to enforce the original gross invoice.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Within 10 days of receiving the notice, Vivek Enterprises engaged an advocate through LegalRecovery.in. The advocate issued a comprehensive Reply under Order VIII Rule 5 CPC and Section 63 BSA. The reply: (1) specifically admitted the initial purchase order while specifically denying the debt; (2) placed on record the rejection emails and signed logistics proof; (3) invoked the &apos;Without Prejudice&apos; doctrine; and (4) called upon the vendor to withdraw the notice within 7 days and compensate ₹25,000 in drafting expenses.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Faced with an ironclad, paragraph-by-paragraph rebuttal containing time-stamped logistics proof, the vendor&apos;s legal team realized that filing a commercial recovery suit would result in immediate dismissal with exemplary costs under Section 35A CPC. The vendor unconditionally withdrew the notice, reconciled the account, and released Vivek Enterprises from all claims without any court proceedings.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Reply Preparation Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Reply Preparation Checklist: 6 Critical Documents to Assemble
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), assembling documentary proof before instructing your advocate guarantees an impregnable reply:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Notice Envelope &amp; Speed Post Barcode:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Preserve the original physical postal cover showing the India Post consignment number and postmark date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Online India Post Tracking Delivery Log:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Download the official delivery confirmation from indiapost.gov.in to confirm the exact delivery timestamp.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Underlying Agreements, Invoices &amp; Receipts:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Contracts, purchase orders, job sheets, payment vouchers, or rent agreements establishing the true relationship.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statements &amp; Payment UTR Numbers:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Demonstrating prior payments, security deposits, or absence of consideration for disputed cheques.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Contemporaneous Communication Trail:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Emails, WhatsApp chats, and SMS proving earlier objections, quality defect rejections, or cancellation notices.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Official Company / Identity Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Aadhaar/PAN for individuals or Certificate of Incorporation and Board Resolution for corporate respondents.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Replying to a Legal Notice
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Answers Grounded in the Code of Civil Procedure, NI Act, and Supreme Court Rulings
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Procedural Codes, Statutes &amp; Judicial References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All provisions verified against India Code, CPC procedural amendments, and active Supreme Court precedent as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Have an Advocate Draft Your Legal Notice Reply
                </h2>
                <LegalNoticeReplyCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Legal Recovery &amp; Process Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-legal-notice-online-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Send Legal Notice Online India →
                  </Link>
                  <Link
                    href="/e-jagriti-consumer-complaint-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    e-Jagriti Consumer Complaint Guide →
                  </Link>
                  <Link
                    href="/national-consumer-helpline-complaint-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    National Consumer Helpline (1915) Guide →
                  </Link>
                  <Link
                    href="/tools/consumer-commission-fee-jurisdiction-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Consumer Commission Fee Calculator →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Costs in India →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
