import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CaAuditFeeTableOfContents from "./CaAuditFeeTableOfContents";
import CaAuditFeeScenarioTabs from "./CaAuditFeeScenarioTabs";
import CaAuditFeeCTA from "./CaAuditFeeCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const META_TITLE = "CA Unpaid Audit Fee Recovery: ICAI Clause (8) & Civil Law";
const META_DESCRIPTION =
  "ICAI bars holding client Tally books hostage, yet Chapter VII Guidelines forbid an incoming CA from accepting an audit with undisputed fees unpaid.";
const EXACT_H1 =
  "Client Switched Auditors Without Paying Your Statutory Audit & GST Litigation Fees? ICAI Clause (8) 'Undisputed Audit Fee' Rules & Legal Notice Guide";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
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
        alt: formatAltText(
          "CA unpaid statutory audit and tax fee recovery under ICAI Clause 8 and civil law"
        ),
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
      "The Chartered Accountants Act, 1949 (First Schedule Part I Clause (8) & Second Schedule — Incoming Auditor Communication & Disciplinary Governance)",
    url: "https://www.indiacode.nic.in/handle/123456789/1673",
  },
  {
    title:
      "ICAI Code of Ethics & Council General Guidelines, 2008 (Chapter VII — Prohibition on Accepting Audit Where Undisputed Audit Fees Remain Unpaid)",
    url: "https://www.icai.org/post/code-of-ethics",
  },
  {
    title:
      "ICAI Unique Document Identification Number (UDIN) Portal & Verification Framework for Statutory & Tax Audits",
    url: "https://udin.icai.org/",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Written Contracts, Acknowledged Ledgers & Dishonoured Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Dishonoured Post-UDIN Fee Cheques & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Central Goods and Services Tax (CGST) Act, 2017 (Section 16(2) Second Proviso & Section 50 — Mandatory 180-Day ITC Reversal on Unpaid Supplier Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/15689",
  },
  {
    title:
      "The Limitation Act, 1963 (Section 18 — Written Acknowledgment of Debt via Audited Balance Sheet Provisions & Signed Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Proof Certificate for UDIN Logs, Form 26AS, GSTR-2B & MCA Filings)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Strict Prohibition on Professional Lien Over Client Files & Records",
    parties: "R.D. Saxena v. Balram Prasad Sharma",
    citation: "(2000) 7 SCC 264, Supreme Court of India",
    statute: "Indian Contract Act, 1872 s.171 & Professional Ethics",
    facts:
      "A practicing professional retained a client's entrusted files and case records claiming a right of lien under Section 171 of the Indian Contract Act until unpaid professional fees were cleared.",
    holding:
      "The Supreme Court held that client files, papers, and records entrusted for professional services are not marketable 'goods' subject to a Section 171 lien. Refusal to return client files to coerce fee payment amounts to professional misconduct; the lawful remedy for unpaid fees is a civil recovery proceeding.",
    creditorTakeaway:
      "ICAI's Ethical Standards Board applies the identical discipline to Chartered Accountants: immediately return client Tally data, original vouchers, and DSC tokens under a signed Handover Memo while retaining your own SA 230 Audit Working Papers and pursuing fees via Chapter VII + external Advocate Notice.",
  },
  {
    title: "Signed Balance Sheet Entry Is a Binding Section 18 Acknowledgment of Debt",
    parties: "Asset Reconstruction Company (India) Ltd. v. Bishal Jaiswal & Anr.",
    citation: "(2021) 6 SCC 366, Supreme Court of India",
    statute: "Limitation Act, 1963 — Section 18 & Companies Act, 2013",
    facts:
      "Corporate debtors contended that statutory Balance Sheet entries recording liabilities under the Companies Act could not be treated as voluntary acknowledgments of debt extending limitation under Section 18 of the Limitation Act.",
    holding:
      "The Supreme Court conclusively ruled that entries in a company's Balance Sheet—unless specifically caveated by notes disputing the liability—constitute valid written acknowledgments under Section 18 of the Limitation Act, resetting the 3-year limitation period.",
    creditorTakeaway:
      "When a defaulting corporate client's signed Balance Sheet shows 'Audit Fees Payable' or 'Professional Fees Payable' in Trade Payables / Other Current Liabilities, it simultaneously triggers ICAI Chapter VII (undisputed audit fee) AND proves admitted debt for Order XXXVII CPC summary recovery.",
  },
  {
    title: "Security & Post-Dated Fee Cheques Attract Criminal Liability Under s.138 NI Act",
    parties: "Sripati Singh (Deceased) v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    statute: "Negotiable Instruments Act, 1881 — Sections 138 & 139",
    facts:
      "A drawer sought quashing of Section 138 proceedings arguing that the dishonoured cheque had been handed over earlier as a 'security cheque' rather than for a contemporaneous discharge of debt.",
    holding:
      "The Supreme Court held that a security cheque or post-dated cheque is not a worthless piece of paper. Once the underlying obligation matures and remains unpaid on the date of presentation, dishonour squarely triggers Section 138 criminal prosecution.",
    creditorTakeaway:
      "Post-dated fee cheques handed over during the September 30 Tax Audit or October 31 Statutory Audit UDIN rush are fully enforceable under Section 138 NI Act (with up to 20% interim compensation u/s 143A) provided you serve the statutory demand notice within 30 days of the bank return memo.",
  },
  {
    title: "Mandatory Pre-Institution Mediation Before Commercial Recovery Suits (>= ₹3 Lakh)",
    parties: "Patil Automation Pvt. Ltd. & Ors. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    statute: "Commercial Courts Act, 2015 — Section 12A",
    facts:
      "Commercial plaintiffs approached Commercial Courts directly without exhausting pre-institution mediation under Section 12A where no genuine urgent interim relief was sought.",
    holding:
      "The Supreme Court declared Section 12A mediation mandatory for covered commercial suits (specified value ₹3 Lakh and above) not contemplating urgent interim relief, failing which plaints are rejected under Order VII Rule 11 CPC.",
    creditorTakeaway:
      "Where an advisory firm's overdue corporate retainer exceeds ₹3 Lakh and falls within Commercial Court jurisdiction, pairing an external Fact-Verified Demand Notice with Section 12A Pre-Institution Mediation (or Order XXXVII Civil Summary Suit where applicable) secures rapid settlement without threshold dismissal.",
  },
];

const FAQS = [
  {
    question:
      "Can an outgoing Chartered Accountant refuse NOC under ICAI Clause (8) if undisputed audit fees are unpaid?",
    answer:
      "Yes, for undisputed statutory audit fees—subject to the exact wording of ICAI Council General Guidelines, 2008 (Chapter VII). While Clause (8) of Part I of the First Schedule requires the incoming auditor to communicate in writing with the outgoing auditor, Chapter VII expressly prohibits an incoming CA in practice from accepting an audit assignment where the 'undisputed audit fee' of the previous auditor remains unpaid (except in the case of a 'sick unit'). You should promptly reply in writing to the incoming auditor stating the exact unpaid undisputed audit fee and enclosing the signed Balance Sheet provision.",
  },
  {
    question:
      "What proves that my unpaid CA audit fee is 'undisputed' under Chapter VII of ICAI Guidelines?",
    answer:
      "Under ICAI Council General Guidelines Chapter VII, where a provision for audit fee has been made in the signed financial statements (Balance Sheet / Profit & Loss Account) signed by both the auditor and the auditee or Board of Directors, that fee is conclusively treated as an 'undisputed audit fee'. Signed engagement letters, admitted fee invoices reflected in Form 26AS (Section 194J TDS deducted), and uncontested ledger confirmations further cement the undisputed status.",
  },
  {
    question:
      "Can a CA withhold the client's Tally data, original vouchers, GST passwords, or DSC until fees are paid?",
    answer:
      "No. Under ICAI Ethical Standards Board rulings and the Supreme Court principle in R.D. Saxena v. Balram Prasad Sharma (2000) 7 SCC 264, a practicing Chartered Accountant cannot exercise a lien over client-owned books of account, original bills, Tally backups, DSC tokens, or statutory portal credentials. Holding client property exposes your Certificate of Practice (COP) to ICAI disciplinary proceedings. Return client records immediately under a signed Handover Memo—while retaining your own SA 230 audit working papers—and recover fees through Chapter VII + an external Advocate Legal Notice.",
  },
  {
    question:
      "Does ICAI Chapter VII block an incoming auditor if only GST litigation, ITR filing, or Virtual-CFO retainer fees are unpaid?",
    answer:
      "No. Chapter VII's prohibition applies strictly to unpaid 'undisputed audit fees' for statutory audits (Companies Act, Income Tax u/s 44AB, or other statutory audits). It does not bar an incoming auditor from accepting an audit solely because non-audit fees (monthly bookkeeping, GST returns, SCN replies, ITAT appeals, or Virtual-CFO retainers) are overdue. For non-audit arrears, grant clean Clause (8) audit clearance if audit fees are settled, and deploy an external Advocate Notice leveraging Form 26AS 194J TDS admissions, CGST s.16(2) 180-day ITC reversal, and Order XXXVII CPC summary suits.",
  },
  {
    question:
      "What if the client generated UDIN on Sept 30 / Oct 31, bounced my fee cheque, and refuses to pay?",
    answer:
      "Do NOT attempt to improperly revoke a validly signed statutory audit UDIN to pressure payment. Instead, act within 30 days of the bank cheque-return memo date to issue a statutory demand notice under Section 138 of the Negotiable Instruments Act, 1881 (making both the company and signatory/managing directors liable under Section 141). Simultaneously notify any incoming auditor of the unpaid undisputed audit fee under Chapter VII and seek up to 20% interim compensation under Section 143A upon filing.",
  },
  {
    question:
      "How do Form 26AS (Section 194J TDS) and GSTR-2B ITC help a CA firm win an Order XXXVII Summary Suit?",
    answer:
      "If the defaulting client deducted 10% TDS under Section 194J on your fee invoice (visible in your Form 26AS / AIS) or availed 18% Input Tax Credit on your SAC 998221/998231 invoice in GSTR-2B, they have statutorily admitted receipt of your professional services and the invoice amount before tax authorities. Moreover, under the second proviso to Section 16(2) of the CGST Act, 2017, failing to pay a supplier within 180 days forces the client to reverse the entire GST ITC with 18% annual interest u/s 50—giving your Advocate Legal Notice immediate boardroom leverage.",
  },
  {
    question:
      "What is the 'sick unit' exception under ICAI Chapter VII, and how do I still recover my fees?",
    answer:
      "Under Chapter VII of the ICAI Council General Guidelines, 2008, the bar against an incoming auditor accepting an audit with unpaid undisputed fees does not apply to a 'sick unit'—defined as a unit registered for not less than five years which has, at the end of any financial year, accumulated losses equal to or exceeding its entire net worth. Even if the client qualifies as a sick unit (allowing the new CA to accept), your civil remedies—Order XXXVII CPC summary suit, NI Act s.138 cheque bounce prosecution, and IBC operational creditor claim (if meeting the ₹1 Crore threshold)—remain fully enforceable.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository — update author/reviewer link once centralized reviewer registry is added.
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T11:30:00+05:30",
  dateModified: "2026-11-19T11:30:00+05:30",
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
    name: "Chartered Accountant Unpaid Audit Fee Recovery & ICAI Clause (8) Chapter VII Rules",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How a Practicing Chartered Accountant Recovers Unpaid Audit & Tax Fees Without Breaching ICAI Ethics",
  description:
    "5-stage ICAI-compliant operational sequence combining clean client-record handover, Chapter VII Undisputed Audit Fee intimation, Form 26AS/GSTR-2B proof, and external Advocate Legal Notice.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Return Client Books & Tally Data Under Signed Handover Memo",
      text: "Immediately hand back client-owned books, original vouchers, Tally backups, and DSC tokens under an itemized receipt to comply with R.D. Saxena and ICAI Ethical Standards Board rules, while retaining your own SA 230 Audit Working Papers.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Compile Statutory Debt Admissions (Balance Sheet, UDIN, 26AS & GSTR-2B)",
      text: "Extract the signed Balance Sheet showing 'Audit Fees Payable' (Section 18 Limitation Act acknowledgment), UDIN certificates, Form 26AS Section 194J TDS credits, GSTR-1/2B tax invoices, and bank cheque-return memos.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Written Chapter VII Undisputed Audit Fee Reply to Incoming Auditor",
      text: "Upon receiving (or discovering bypass of) a First Schedule Part I Clause (8) inquiry, notify the incoming CA via RPAD and ICAI-registered email enclosing Balance-Sheet-provisioned undisputed audit fee proof under Council Guidelines Chapter VII.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Dispatch External Fact-Verified Legal Notice (Order XXXVII, NI s.138 & CGST s.16(2))",
      text: "Instruct independent litigation counsel to serve a formal 15-day demand notice via Email, WhatsApp, and Speed Post RPAD covering all audit, GST litigation, and Virtual-CFO arrears, citing CGST s.16(2) 180-day ITC reversal + 18% interest.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate to NI Act s.138 Prosecution, s.12A Mediation or Order XXXVII Summary Suit",
      text: "If unpaid after 15 days, file a criminal complaint under s.138/143A NI Act for bounced cheques within 30 days, or institute an Order XXXVII CPC summary suit / Commercial Court s.12A mediation backed by BSA 2023 s.63 electronic records.",
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
      name: "CAs, Architects & Advisors Fee Recovery Hub",
      item: `${SITE_URL}/industries/ca-architects-consultants-professional-fee-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CA Unpaid Audit Fee Recovery & ICAI Clause (8)",
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

export default function CaUnpaidAuditFeeRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "CA, Architects & Advisors Fee Hub",
      href: "/industries/ca-architects-consultants-professional-fee-recovery",
    },
    {
      label: "CA Unpaid Audit Fee & ICAI Clause (8)",
      href: PAGE_URL,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Server-Side Rendered JSON-LD Schemas */}
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

      {/* DARK GRADIENT HERO */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-23 &middot; Practicing CA Firms &amp; Tax Advisors</span>
            <span className="text-red-600">&bull;</span>
            <span>ICAI Clause (8) &amp; Chapter VII Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Answer Box + Parent Hub Link in first 250 words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer (ICAI Ethics &amp; Civil Law)
            </span>
            ICAI ethics and <em>R.D. Saxena</em> forbid withholding client Tally books or DSC tokens for unpaid fees—yet <strong>ICAI Council General Guidelines Chapter VII</strong> bars an incoming auditor from accepting any non-sick-unit audit while <strong>Balance-Sheet-provisioned undisputed audit fees</strong> remain unpaid. Combine written Clause (8) objection with an external Fact-Verified Notice (Order XXXVII CPC, NI s.138 &amp; CGST s.16(2)) via our{" "}
            <Link
              href="/industries/ca-architects-consultants-professional-fee-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              CA, Architects &amp; Consultants Professional Fee Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Clause (8)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Mandatory Written Inquiry by Incoming CA
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Chapter VII</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Bar on Accepting Unpaid Undisputed Audits
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">180 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                CGST s.16(2) ITC Reversal + 18% Interest
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">Order 37 &amp; 138</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Summary Suit + Post-UDIN Cheque Bounce
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SHELL */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <CaAuditFeeTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: BOOKS LIEN TRAP & ICAI ETHICS */}
            <section
              id="heading-lien-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Holding Client Tally Books Backfires Under ICAI Ethics
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every practicing Chartered Accountant firm in India knows the September 30 (Tax Audit u/s 44AB) and October 31 (Companies Act Statutory Audit) ambush: a promoter begs you to generate the UDIN and sign the Balance Sheet under deadline pressure, hands over a post-dated fee cheque or promises RTGS &ldquo;next Monday,&rdquo; and then ghosts your billing desk—only to appoint a cheaper CA the following financial year.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The instinctive reaction—refusing to hand back the client&rsquo;s Tally backup, original purchase files, DSC USB token, or GST/Income-Tax portal credentials until overdue bills are cleared—is a <strong>fatal disciplinary trap</strong>. Following the Supreme Court&rsquo;s binding doctrine in <em>R.D. Saxena v. Balram Prasad Sharma</em> (2000) 7 SCC 264 and consistent rulings of the ICAI Ethical Standards Board (ESB), a Chartered Accountant in practice <strong>cannot exercise a lien over client books of account or client-owned documents</strong> for unpaid professional fees. Withholding client records flips the dispute upside down: the defaulting promoter files a disciplinary complaint before the ICAI Board of Discipline, placing your Certificate of Practice (COP) at risk while your fees remain unpaid.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Must Return Immediately (Client Property — Zero Lien)
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-800 space-y-1.5 list-disc pl-4">
                    <li>Original physical vouchers, bills, bank statements &amp; statutory registers</li>
                    <li>Client&rsquo;s Tally Prime / accounting software data files &amp; backups</li>
                    <li>Digital Signature Certificate (DSC) tokens belonging to directors/partners</li>
                    <li>Income Tax, GST, MCA V3 &amp; TRACES login passwords (reset recommendation noted)</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    You Lawfully Retain (Auditor&rsquo;s Property — SA 230)
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-800 space-y-1.5 list-disc pl-4">
                    <li>Audit Working Papers, audit programmes &amp; tick-marked trial balances (SA 230)</li>
                    <li>Internal tax-computation workbooks, reconciliation checklists &amp; research memos</li>
                    <li>Copies of signed engagement letters, UDIN logs &amp; client fee confirmations</li>
                    <li>Right to issue formal Chapter VII Objection &amp; External Advocate Legal Notice</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This exact boundary—distinguishing client records from proprietary professional work—mirrors broader professional-practice recovery rules detailed in our{" "}
                <Link
                  href="/recovery/consultancy-fees"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Consultancy &amp; Professional Fee Recovery Guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/copyright-not-transferred-until-paid-freelancer"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Unpaid Work-Product &amp; IP Ownership Rights Guide
                </Link>
                .
              </p>
            </section>

            {/* SECTION 2: ICAI CLAUSE (8) & CHAPTER VII */}
            <section
              id="heading-icai-clause8"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  ICAI Clause (8) &amp; Chapter VII: Blocking Incoming Auditors
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While ICAI protects clients from book-holding, ICAI simultaneously arms the outgoing statutory auditor with one of the strongest professional credit-protection rules in Indian corporate law: the combined operation of <strong>First Schedule, Part I, Clause (8)</strong> of the Chartered Accountants Act, 1949 and <strong>Chapter VII of the Council General Guidelines, 2008</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Rule 1 &middot; First Schedule Clause (8)
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Mandatory Written Communication
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An incoming CA commits professional misconduct if they accept an audit position previously held by another CA without first communicating in writing via a mode providing positive proof of delivery (RPAD, hand delivery with receipt, or official ICAI-registered email).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                    Rule 2 &middot; Council Guidelines Chapter VII
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Hard Bar on Undisputed Audit Fees
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A practicing CA <strong>shall not accept</strong> appointment as auditor of an entity if the <strong>undisputed audit fee</strong> of the outgoing CA for carrying out statutory audit under the Companies Act or other statutes remains unpaid.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                    Rule 3 &middot; The Balance Sheet Proof &amp; Sick Unit Caveat
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Provisioned Fee = Conclusive Proof
                  </h3>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    Any audit fee provisioned in the <strong>signed Balance Sheet / accounts</strong> (signed by both auditor and auditee) is conclusively &ldquo;undisputed.&rdquo; The sole statutory carve-out is a <strong>sick unit</strong> (registered &ge;5 years with accumulated losses &ge; entire net worth).
                  </p>
                </div>
              </div>

              {/* Copy-Ready Incoming Auditor Clause (8) / Chapter VII Reply Box */}
              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 space-y-3 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                    Model Clause (8) &amp; Chapter VII Written Reply to Incoming Auditor
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    Dispatch via RPAD + ICAI-Registered Email
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed font-mono text-slate-200">
                  &ldquo;Dear CA [Incoming Partner Name], Re: Your Clause (8) communication dated [Date] regarding statutory audit of M/s [Client Name] (CIN/PAN: [ID]). Please take formal notice under Chapter VII of the ICAI Council General Guidelines, 2008 that our <strong>undisputed statutory audit fees of ₹[Amount]</strong> (inclusive of GST under SAC 998221) for FY [2024-25], expressly provisioned under &lsquo;Audit Fees Payable&rsquo; in the audited Balance Sheet signed by the Board on [Date] (UDIN: [18-digit UDIN]), remain unpaid. The auditee is not a sick unit as defined under Chapter VII. In view of Chapter VII, we request you to kindly refrain from accepting the audit assignment until our undisputed audit fees are cleared in full. Copy of the signed Balance Sheet schedule and unpaid invoice ledger are enclosed. All client-owned books and Tally data have already been handed over to the client on [Date].&rdquo;
                </p>
              </div>
            </section>

            {/* SECTION 3: 5-STAGE DECISION TREE FLOWCHART */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage CA Audit &amp; Tax Fee Recovery Decision Flowchart
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Practicing CA partners lose leverage when they mix ethical obligations (returning client books) with commercial fee recovery. Follow this strict 5-stage operational sequence to keep your ICAI standing spotless while maximizing payment pressure across statutory, tax, and civil channels:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <svg
                  width="920"
                  height="310"
                  viewBox="0 0 920 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-stage operational decision tree for Chartered Accountant unpaid audit and tax fee recovery under ICAI Clause 8, Chapter VII, NI Act s.138 and Order XXXVII CPC"
                >
                  <rect width="920" height="310" rx="16" fill="#F8FAFC" />

                  {/* Stage 1 */}
                  <rect x="20" y="34" width="160" height="128" rx="12" fill="#0F172A" />
                  <rect x="20" y="34" width="160" height="28" rx="12" fill="#DC2626" />
                  <text x="100" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STAGE 1 · DAY 0</text>
                  <text x="100" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Clean Books</text>
                  <text x="100" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Handover</text>
                  <text x="100" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10">Return Tally/Vouchers/DSC</text>
                  <text x="100" y="136" textAnchor="middle" fill="#CBD5E1" fontSize="10">Retain SA 230 Papers</text>
                  <text x="100" y="150" textAnchor="middle" fill="#86EFAC" fontSize="9.5">R.D. Saxena Safe</text>

                  <line x1="180" y1="98" x2="202" y2="98" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="202,93 210,98 202,103" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="210" y="34" width="160" height="128" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <rect x="210" y="34" width="160" height="28" rx="12" fill="#1E293B" />
                  <text x="290" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STAGE 2 · DAY 1–3</text>
                  <text x="290" y="84" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Ledger Split &amp;</text>
                  <text x="290" y="100" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Proof Audit</text>
                  <text x="290" y="122" textAnchor="middle" fill="#475569" fontSize="10">Balance Sheet Provision</text>
                  <text x="290" y="136" textAnchor="middle" fill="#475569" fontSize="10">Form 26AS 194J + UDIN</text>
                  <text x="290" y="150" textAnchor="middle" fill="#047857" fontSize="9.5">GSTR-2B ITC Check</text>

                  <line x1="370" y1="98" x2="392" y2="98" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="392,93 400,98 392,103" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="400" y="34" width="160" height="128" rx="12" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                  <rect x="400" y="34" width="160" height="28" rx="12" fill="#DC2626" />
                  <text x="480" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STAGE 3 · DAY 3–7</text>
                  <text x="480" y="84" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Chapter VII</text>
                  <text x="480" y="100" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Incoming CA Bar</text>
                  <text x="480" y="122" textAnchor="middle" fill="#475569" fontSize="10">RPAD + ICAI Email Reply</text>
                  <text x="480" y="136" textAnchor="middle" fill="#475569" fontSize="10">Audit Fee Undisputed</text>
                  <text x="480" y="150" textAnchor="middle" fill="#B91C1C" fontSize="9.5">Blocks New Statutory CA</text>

                  <line x1="560" y1="98" x2="582" y2="98" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="582,93 590,98 582,103" fill="#DC2626" />

                  {/* Stage 4 */}
                  <rect x="590" y="34" width="160" height="128" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <rect x="590" y="34" width="160" height="28" rx="12" fill="#1E293B" />
                  <text x="670" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STAGE 4 · DAY 7–15</text>
                  <text x="670" y="84" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Advocate Legal</text>
                  <text x="670" y="100" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Demand Notice</text>
                  <text x="670" y="122" textAnchor="middle" fill="#475569" fontSize="10">Order 37 + NI s.138 (30d)</text>
                  <text x="670" y="136" textAnchor="middle" fill="#475569" fontSize="10">CGST s.16(2) ITC Alert</text>
                  <text x="670" y="150" textAnchor="middle" fill="#047857" fontSize="9.5">Email + WA + RPAD</text>

                  <line x1="750" y1="98" x2="772" y2="98" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="772,93 780,98 772,103" fill="#DC2626" />

                  {/* Stage 5 */}
                  <rect x="780" y="34" width="120" height="128" rx="12" fill="#064E3B" />
                  <rect x="780" y="34" width="120" height="28" rx="12" fill="#059669" />
                  <text x="840" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="700">STAGE 5 · 15d+</text>
                  <text x="840" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700">Summary Suit</text>
                  <text x="840" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="700">/ s.138 Filing</text>
                  <text x="840" y="122" textAnchor="middle" fill="#D1FAE5" fontSize="9.5">s.143A 20% Relief</text>
                  <text x="840" y="136" textAnchor="middle" fill="#D1FAE5" fontSize="9.5">s.12A Mediation</text>
                  <text x="840" y="150" textAnchor="middle" fill="#FDE68A" fontSize="9.5">RTGS Recovery</text>

                  {/* Bottom Split Track Banner */}
                  <rect x="20" y="190" width="430" height="96" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5" />
                  <text x="38" y="214" fill="#B91C1C" fontSize="11" fontWeight="800">TRACK A: STATUTORY &amp; TAX AUDIT FEES (UNDISPUTED)</text>
                  <text x="38" y="234" fill="#334155" fontSize="10.5">&bull; Provisioned in signed Balance Sheet &rarr; Incoming CA barred (Chapter VII)</text>
                  <text x="38" y="252" fill="#334155" fontSize="10.5">&bull; Bounced post-UDIN cheque &rarr; s.138 NI Act notice within 30 days</text>
                  <text x="38" y="270" fill="#334155" fontSize="10.5">&bull; Balance Sheet entry resets 3-year limitation under Section 18</text>

                  <rect x="470" y="190" width="430" height="96" rx="12" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
                  <text x="488" y="214" fill="#065F46" fontSize="11" fontWeight="800">TRACK B: GST LITIGATION, ITR &amp; VIRTUAL-CFO RETAINERS</text>
                  <text x="488" y="234" fill="#334155" fontSize="10.5">&bull; Outside Chapter VII audit bar &rarr; Grant clean audit NOC if audit paid</text>
                  <text x="488" y="252" fill="#334155" fontSize="10.5">&bull; Leverage Form 26AS (194J TDS) + CGST s.16(2) 180-day ITC Reversal</text>
                  <text x="488" y="270" fill="#334155" fontSize="10.5">&bull; Escalate via Order XXXVII CPC + Udyam s.43B(h) (where registered)</text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "01 · Day 0",
                    title: "Clean Books & Tally Handover (R.D. Saxena Safe)",
                    desc: "Return all client-owned Tally backups, vouchers, and DSC tokens against a signed Handover Memo. Retain your SA 230 Audit Working Papers.",
                  },
                  {
                    step: "02 · Day 1–3",
                    title: "Ledger Split & Statutory Proof Audit",
                    desc: "Separate Statutory/Tax Audit fees from non-audit GST/CFO retainers. Pull signed Balance Sheet provision, Form 26AS 194J TDS, UDIN log, and GSTR-2B.",
                  },
                  {
                    step: "03 · Day 3–7",
                    title: "Chapter VII Objection to Incoming Auditor",
                    desc: "Reply to Clause (8) inquiry via RPAD + ICAI email enclosing signed Balance Sheet audit-fee provision to legally bar incoming acceptance.",
                  },
                  {
                    step: "04 · Day 7–15",
                    title: "External Advocate Legal Demand Notice",
                    desc: "Dispatch tri-channel notice (Email + WhatsApp + Speed Post RPAD) citing Order XXXVII CPC, NI s.138 (within 30 days of bounce), and CGST s.16(2) ITC reversal.",
                  },
                  {
                    step: "05 · Day 15+",
                    title: "Summary Suit, s.138 Filing or s.12A Mediation",
                    desc: "File NI Act s.138/143A complaint or Order XXXVII CPC / Commercial Court s.12A proceedings backed by BSA 2023 s.63 electronic proof.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Stage {item.step}
                    </span>
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: DARK-HEADER STATUTORY MATRIX */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Matrix: Audit Fees vs GST, ITR &amp; CFO Retainers
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Not every CA invoice enjoys Chapter VII incoming-auditor blocking power. Misclassifying a monthly GST retainer as an &ldquo;undisputed audit fee&rdquo; weakens your credibility before peer CAs and courts. Use this matrix to match each overdue engagement to its exact statutory remedy:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">CA Engagement / Fee Bucket</th>
                      <th className="p-3.5 font-bold">ICAI Chapter VII Block?</th>
                      <th className="p-3.5 font-bold">Primary Statutory Lever</th>
                      <th className="p-3.5 font-bold">Best Debt-Admission Proof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Companies Act Statutory Audit (SAC 998221)
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/50">
                        YES (if undisputed &amp; non-sick unit)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Clause (8) + Chapter VII Bar + Order XXXVII CPC Summary Suit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Signed Balance Sheet &lsquo;Audit Fees Payable&rsquo; + MCA AOC-4 &amp; UDIN
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Income Tax Audit u/s 44AB (Form 3CA/3CB-3CD)
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/50">
                        YES (statutory audit under IT Act)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Chapter VII Bar + Order XXXVII CPC + CGST s.16(2) ITC Reversal
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Signed Financial Statements + IT Portal Acceptance Log + UDIN
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Bounced Post-UDIN Fee Cheque (Any Service)
                      </td>
                      <td className="p-3.5 font-semibold text-amber-800 bg-amber-50/60">
                        YES if linked to statutory audit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act ss.138, 141 &amp; 143A (30-day statutory notice deadline)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Original Cheque + Bank Return Memo + UDIN Certificate
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        GST SCN Replies, Audit Representation &amp; ITAT/CIT(A)
                      </td>
                      <td className="p-3.5 font-semibold text-red-700 bg-red-50/40">
                        NO (non-audit representation)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Order XXXVII CPC / Commercial Court s.12A + CGST s.16(2) 180d Alert
                      </td>
                      <td className="p-3.5 text-slate-700">
                        GST Portal ARN / Letter of Authority + Form 26AS 194J TDS Credit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Monthly GST/TDS Filings &amp; Virtual-CFO Retainer
                      </td>
                      <td className="p-3.5 font-semibold text-red-700 bg-red-50/40">
                        NO (non-audit retainership)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Advocate Demand Notice + Contract Act s.73 + MSMED s.16 / s.43B(h)*
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Monthly GSTR-1/2B ITC Claimed + Signed Retainer Mail + 26AS
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                *Note on Udyam / MSMED Act: Where a CA/advisory firm holds valid Udyam Registration (Micro/Small Enterprise under NIC 69201), overdue invoices past 45 days additionally trigger 3x RBI Bank Rate monthly compound interest under MSMED s.16 and corporate buyer disallowance under Income Tax Act s.43B(h). Always pair Udyam leverage with unconditional civil recovery under{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Order XXXVII CPC Summary Suits
                </Link>{" "}
                so recovery never hinges on a single forum.
              </p>
            </section>

            {/* SECTION 5: INTERACTIVE 4-SCENARIO EXPLORER */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 CA Firm Fee Default Traps: Interactive Recovery Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select the exact flashpoint your CA practice is facing today to view the ethical trap to avoid and the step-by-step creditor action sequence:
              </p>

              <CaAuditFeeScenarioTabs />
            </section>

            {/* SECTION 6: VERIFIED SUPREME COURT PRECEDENTS */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Landmark Precedents: R.D. Saxena, Bishal Jaiswal &amp; s.138
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every Advocate Legal Notice issued for a practicing Chartered Accountant should anchor its legal arguments on four verified Supreme Court rulings that foreclose client excuses on books lien, limitation, security cheques, and commercial mediation:
              </p>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 border-l-4 border-l-[#DC2626] space-y-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                        {item.parties}
                      </h3>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                      {item.statute} &mdash; {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">Holding: </strong>
                      {item.holding}
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg p-3 leading-relaxed">
                      <strong>CA Firm Takeaway: </strong>
                      {item.creditorTakeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 7: WORKED FINANCIAL & COMPLIANCE SHOCK LEDGER */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked ₹6.45L Ledger: Balance Sheet, 26AS &amp; ITC Leverage
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a typical mid-market Private Limited company (turnover ₹42 Crore) that switched auditors after defaulting on 11 months of combined Statutory Audit, Tax Audit, GST SCN litigation, and Virtual-CFO invoices raised by a 4-partner CA firm:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                    Statutory &amp; Compliance Shock Breakdown (Principal + Tax Penalties on Defaulter)
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    Net Unpaid Receivable: ₹6,45,000
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-300">
                        <th className="py-2.5 pr-3">Fee Head (SAC)</th>
                        <th className="py-2.5 pr-3">Invoice (+18% GST)</th>
                        <th className="py-2.5 pr-3">194J TDS (26AS)</th>
                        <th className="py-2.5">Active Statutory Trigger</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      <tr>
                        <td className="py-2.5 pr-3 font-semibold">
                          Statutory + Tax Audit (SAC 998221)
                        </td>
                        <td className="py-2.5 pr-3">₹1,77,000</td>
                        <td className="py-2.5 pr-3 text-emerald-400">₹15,000 (Booked)</td>
                        <td className="py-2.5 text-red-300">
                          Chapter VII Incoming CA Bar + Balance Sheet s.18 Admission
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-3 font-semibold">
                          GST s.73 SCN Reply &amp; Hearing (SAC 998231)
                        </td>
                        <td className="py-2.5 pr-3">₹2,36,000</td>
                        <td className="py-2.5 pr-3 text-emerald-400">₹20,000 (Booked)</td>
                        <td className="py-2.5 text-amber-300">
                          Order XXXVII CPC + CGST s.16(2) 180d ITC Reversal (₹36,000 + 18% int.)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-3 font-semibold">
                          Virtual-CFO &amp; Monthly Retainer (8 Mos)
                        </td>
                        <td className="py-2.5 pr-3">₹2,95,000</td>
                        <td className="py-2.5 pr-3 text-emerald-400">₹25,000 (Booked)</td>
                        <td className="py-2.5 text-amber-300">
                          CGST s.16(2) ITC Reversal (₹45,000) + Commercial s.12A / Interest
                        </td>
                      </tr>
                      <tr className="font-bold text-white bg-slate-800/70">
                        <td className="py-3 pr-3">Total Billed / Net Cash Due After TDS</td>
                        <td className="py-3 pr-3">₹7,08,000</td>
                        <td className="py-3 pr-3 text-emerald-400">-₹60,000 (Credit)</td>
                        <td className="py-3 text-emerald-300">
                          ₹6,48,000 Cash Due (~₹6.45L Net Ledger) + ₹1,08,000 ITC Reversal Risk!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-emerald-950/60 border border-emerald-700/60 rounded-xl p-3.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                      Why This Forces Fast Settlement
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Because the client already deposited ₹60,000 TDS u/s 194J (visible in Form 26AS) and availed ₹1,08,000 GST ITC in GSTR-2B, denying the invoice now means confessing to a false ITC claim before GST authorities and blocking their new statutory auditor under Chapter VII.
                    </p>
                  </div>
                  <div className="bg-amber-950/60 border border-amber-700/60 rounded-xl p-3.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Statutory Deadline Calculators
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Verify exact filing windows before dispatch using our{" "}
                      <Link
                        href="/tools/cheque-bounce-deadline-calculator"
                        className="text-amber-300 underline font-semibold"
                      >
                        Cheque Bounce s.138 Deadline Calculator
                      </Link>
                      ,{" "}
                      <Link
                        href="/tools/limitation-period-calculator"
                        className="text-amber-300 underline font-semibold"
                      >
                        Limitation Period Calculator
                      </Link>{" "}
                      &amp;{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="text-amber-300 underline font-semibold"
                      >
                        MSME Interest Calculator
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: EVIDENCE & BSA 2023 s.63 CHECKLIST */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  UDIN, 26AS, ADT-1 &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before instructing an advocate to dispatch a Legal Notice or initiating an Order XXXVII CPC summary suit, assemble this 4-quadrant evidentiary pack so every digital filing is immediately admissible under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                    1. Statutory Deliverables &amp; UDIN Proof
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>18-digit UDIN Portal PDF acknowledgments for every signed Audit / 3CD / Certificate</li>
                    <li>MCA V3 Form ADT-1 (appointment) &amp; Form AOC-4 / MGT-7 SRN receipts</li>
                    <li>Income Tax e-Filing Form 3CD acceptance &amp; GST Portal SCN reply ARN screenshots</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                    2. Written Debt &amp; Tax Admissions
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Signed audited Balance Sheet + Notes showing &lsquo;Audit Fees Payable&rsquo; (s.18 Limitation proof)</li>
                    <li>Form 26AS / AIS PDF reflecting Section 194J TDS deposited by the client</li>
                    <li>GSTR-1 invoice filings (SAC 998221/998231) &amp; Engagement Letter / Fee Proposal</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    3. Ethics Shield &amp; Clause (8) Record
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Signed Handover Memo proving Tally backup, vouchers &amp; DSC were returned cleanly</li>
                    <li>Incoming Auditor&rsquo;s Clause (8) mail + your RPAD Chapter VII Objection Letter &amp; POD</li>
                    <li>Original dishonoured cheque + Bank Return Memo (stamped with return date)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                    4. BSA 2023 Section 63 Electronic Certificate
                  </p>
                  <ul className="text-xs sm:text-sm text-amber-950 space-y-1.5 list-disc pl-4">
                    <li>Mandatory Schedule-compliant BSA s.63 certificate signed by firm partner / IT custodian</li>
                    <li>Preserves admissibility of WhatsApp fee approvals, email engagement chains &amp; portal PDFs</li>
                    <li>Export full headers (.eml) for email engagement &amp; fee reminders to block tampering pleas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 9: DUAL-TRACK CTA + CROSS-CLUSTER RESOURCES */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Send an ICAI-Safe Fact-Verified Notice or Batch CA Firm CSV
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Practicing Chartered Accountants shouldn&rsquo;t chase defaulting promoters over uncomfortable WhatsApp reminders—and shouldn&rsquo;t risk ICAI friction by drafting personal legal threats. Let independent litigation advocates serve a crisp, council-ethics-verified statutory demand notice backed by your Balance Sheet provision, Form 26AS 194J credit, and CGST s.16(2) ITC reversal warning:
              </p>

              <CaAuditFeeCTA />

              <div className="pt-6 border-t border-slate-200 space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  IND-23 Professional Practice Hub, Templates &amp; Sibling Playbooks
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <Link
                    href="/industries/ca-architects-consultants-professional-fee-recovery"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      CAs, Architects &amp; Advisory Firms Recovery Hub &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Parent IND-23 pillar covering ICAI, COA, ICSI, IBBI &amp; Bar-safe fee recovery.
                    </span>
                  </Link>
                  <Link
                    href="/templates/ca-architect-advisor-professional-fee-recovery-legal-notice"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      CA &amp; Advisor Fee Recovery Legal Notice Pack &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Template workspace with Chapter VII Incoming Auditor Letter &amp; 194J TDS notice clauses.
                    </span>
                  </Link>
                  <Link
                    href="/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      Architect GFC Drawing Copyright &amp; Stage Fee Recovery &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Enforcing COA Scale of Charges &amp; Copyright Act s.51 when builders bypass stage payments.
                    </span>
                  </Link>
                  <Link
                    href="/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      Debt Syndication &amp; M&amp;A Mandate Success-Fee Recovery &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Enforcing exclusivity &amp; 24-month tail-period clauses when clients bypass deal advisors.
                    </span>
                  </Link>
                  <Link
                    href="/templates/msme-delayed-payment-demand-notice"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      MSME Delayed Payment Demand Notice Template &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Ready-to-use s.15–18 &amp; Income Tax s.43B(h) format for Udyam-registered advisory firms.
                    </span>
                  </Link>
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="block font-bold text-slate-900">
                      Legal Notice Reply Format (Defeating Counter-Threats) &rarr;
                    </span>
                    <span className="text-xs text-slate-600">
                      Rebut sham deficiency-of-service notices sent by defaulting clients to stall fee recovery.
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 10: FAQS */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: ICAI Clause (8) NOC, Undisputed Audit Fees &amp; Lien
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    open={idx === 0}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 11: PRIMARY STATUTORY SOURCES */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Bare Acts, ICAI Guidelines &amp; Judicial Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                <strong>Legal Disclaimer:</strong> This B2B creditor guide is prepared for practicing Chartered Accountants, tax advisory partnerships, and Virtual-CFO firms for informational and pre-litigation planning under Indian law and ICAI ethical norms. Outcomes depend on your engagement letter, signed Balance Sheet disclosures, sick-unit status under Chapter VII, and timely compliance with statutory limitation periods.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
