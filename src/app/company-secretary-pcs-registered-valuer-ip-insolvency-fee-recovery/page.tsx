import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PcsIpFeeTableOfContents from "./PcsIpFeeTableOfContents";
import PcsIpFeeScenarioTabs from "./PcsIpFeeScenarioTabs";
import PcsIpFeeCTA from "./PcsIpFeeCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/company-secretary-pcs-registered-valuer-ip-insolvency-fee-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const META_TITLE =
  "PCS (Company Secretary), Valuer & Insolvency RP Fee Recovery";
const META_DESCRIPTION =
  "Paid ₹4L MCA ROC stamp duty upfront or ran a 9-month CIRP while CoC banks stalled IRP fees? Enforce IBBI s.5(13)/53(1)(a), ICSI rules & Order 37 CPC.";
const EXACT_H1 =
  "Fee & Out-of-Pocket Filing Recovery for Practicing Company Secretaries (PCS), IBBI Registered Valuers & Insolvency Resolution Professionals";

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
          "PCS MCA ROC filing reimbursement, IBBI Registered Valuer and Insolvency RP CIRP fee recovery"
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
      "The Insolvency and Bankruptcy Code, 2016 (Sections 5(13), 30(2)(a), 53(1)(a), 60(5) & 208 — CIRP Cost Definition, Super-Priority Waterfall & NCLT Jurisdiction)",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title:
      "IBBI (Insolvency Resolution Process for Corporate Persons) Regulations, 2016 (Regulations 27, 31, 33, 34, 34A & 34B — Minimum RP Fee Structure & CoC Cost Ratification)",
    url: "https://ibbi.gov.in/en/legal-framework/updated",
  },
  {
    title:
      "The Company Secretaries Act, 1980 (First Schedule Part I Clause (8) — Mandatory Written Communication With Outgoing PCS & ICSI Ethical Guidelines)",
    url: "https://www.indiacode.nic.in/handle/123456789/1760",
  },
  {
    title:
      "The Companies Act, 2013 & Companies (Registered Valuers and Valuation) Rules, 2017 (Sections 62, 204 & 247 — Secretarial Audit Form MR-3 & Statutory Valuation Reports)",
    url: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 69, 70 & 222 — Statutory Reimbursement of Agent Advances & MCA/Stamp Duty Payments Made on Principal Instruction)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suit Procedure for Written Engagement Letters, SRN Challans & Liquidated Professional Claims)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Central Goods and Services Tax (CGST) Act, 2017 (Section 16(2) Second Proviso & Section 50 — 180-Day ITC Reversal With 18% Interest on Unpaid Professional Bills)",
    url: "https://www.indiacode.nic.in/handle/123456789/15689",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Record Certification for MCA V3 SRN Receipts, ICSI UDIN Logs & CoC E-Voting Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "NCLT Retains Section 60(5)(c) Jurisdiction to Order Valuer & Professional Fees Even If CIRP Is Set Aside",
    parties: "Alok Kaushik v. Bhuvaneshwari Ramanathan & Ors.",
    citation: "(2021) 5 SCC 787, Supreme Court of India",
    statute: "Insolvency and Bankruptcy Code, 2016 — Sections 5(13) & 60(5)(c)",
    facts:
      "An IBBI Registered Valuer appointed during CIRP completed valuation work, after which the NCLAT set aside the CIRP admission order. The Adjudicating Authority (NCLT) declined to entertain the Valuer's fee application claiming it had become functus officio.",
    holding:
      "The Supreme Court reversed the NCLT and held that the Adjudicating Authority retains full jurisdiction under Section 60(5)(c) of the IBC to quantify and direct payment of genuine CIRP costs and Registered Valuer fees even where CIRP proceedings are subsequently set aside or withdrawn.",
    creditorTakeaway:
      "IBBI Registered Valuers and IRPs/RPs cannot be left stranded when promoters settle u/s 12A or overturn admission in appeal: immediately file an IA u/s 60(5) citing Alok Kaushik before the NCLT closes the docket.",
  },
  {
    title: "Zero Professional Lien Over Entrusted Corporate Registers, DSC Tokens & Client Files",
    parties: "R.D. Saxena v. Balram Prasad Sharma",
    citation: "(2000) 7 SCC 264, Supreme Court of India",
    statute: "Indian Contract Act, 1872 s.171 & Statutory Professional Conduct",
    facts:
      "A practicing professional retained entrusted client files asserting a general lien under Section 171 of the Contract Act until outstanding professional fees were paid.",
    holding:
      "The Supreme Court ruled that client records and entrusted papers are not 'goods' capable of sale under Section 171. Refusing to return client property to coerce fee recovery amounts to professional misconduct; the sole lawful remedy is civil or statutory recovery proceedings.",
    creditorTakeaway:
      "Practicing Company Secretaries must immediately return client Minute Books, Statutory Registers, Share Certificates, and director DSC tokens under a signed Handover Receipt—while retaining internal Secretarial Audit working papers and escalating via Order XXXVII CPC.",
  },
  {
    title: "Balance Sheet Liabilities Operate as Section 18 Written Acknowledgments of Debt",
    parties: "Asset Reconstruction Company (India) Ltd. v. Bishal Jaiswal & Anr.",
    citation: "(2021) 6 SCC 366, Supreme Court of India",
    statute: "Limitation Act, 1963 — Section 18 & Companies Act, 2013",
    facts:
      "Corporate debtors argued that compulsory statutory disclosures of unpaid liabilities in audited Balance Sheets under the Companies Act do not constitute voluntary acknowledgments extending the 3-year limitation window.",
    holding:
      "The Supreme Court settled the law: unreserved entries in a company's signed Balance Sheet constitute binding written acknowledgments under Section 18 of the Limitation Act, refreshing limitation for a fresh 3-year cycle.",
    creditorTakeaway:
      "When a defaulting client's AOC-4 Balance Sheet records 'Professional Fees Payable' or 'Reimbursements Payable' to your PCS or Valuation firm without a dispute note, it proves admitted liability for both Order XXXVII CPC and ICSI Clause (8) communications.",
  },
  {
    title: "Mandatory Pre-Institution Mediation Before Commercial Suits (>= ₹3 Lakh) & s.138 Cheque Enforceability",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. & Sripati Singh v. State of Jharkhand",
    citation: "(2022) 10 SCC 1 & 2021 SCC OnLine SC 1002, Supreme Court of India",
    statute: "Commercial Courts Act, 2015 s.12A & Negotiable Instruments Act, 1881 s.138",
    facts:
      "Commercial plaintiffs bypassed Section 12A mediation in non-urgent money suits above ₹3 Lakh, while drawers in parallel proceedings contended that security/post-dated cheques could not trigger Section 138 criminal prosecution.",
    holding:
      "Patil Automation made Section 12A mediation mandatory for covered Commercial Suits (failing which plaints face Order VII Rule 11 rejection), while Sripati Singh affirmed that post-dated or security cheques given against maturing commercial obligations squarely attract Section 138/143A NI Act liability.",
    creditorTakeaway:
      "For PCS/Valuer claims above ₹3 Lakh, pair an External Advocate Notice with a Section 12A mediation filing (or Order XXXVII Civil Summary Suit where outside s.2(1)(c)), and prosecute bounced fee/reimbursement cheques within 30 days of the bank return memo.",
  },
];

const FAQS = [
  {
    question:
      "Can a Practicing Company Secretary (PCS) recover MCA ROC filing fees and State Stamp Duty paid upfront from the firm's bank account?",
    answer:
      "Yes—and statutory out-of-pocket reimbursements are even stronger to recover than disputed consultancy fees. When a PCS pays MCA V3 ROC filing fees or State Stamp Duty (e.g., on Form SH-7 authorized-capital increase, PAS-3 allotment, or CHG-1 charge creation) upon the client's written email/Board instruction, Sections 69, 70, and 222 of the Indian Contract Act, 1872 impose a direct statutory duty of indemnification on the company. Backed by the MCA SRN Payment Receipt (linked to the client's CIN) and your firm's bank debit advice, the claim qualifies for fast-track Summary Suit recovery under Order XXXVII CPC.",
  },
  {
    question:
      "What can an IRP or RP do when Committee of Creditors (CoC) banks delay or refuse to reimburse ratified CIRP fees?",
    answer:
      "Under Section 5(13) of the IBC, 2016 and IBBI CIRP Regulations 33, 34, and 34B, ratified IRP/RP remuneration and going-concern CIRP expenses are mandatory Insolvency Resolution Process Costs carrying Rank-1 super-priority under Section 30(2)(a) (Resolution Plan) and Section 53(1)(a) (Liquidation). First serve a formal pro-rata contribution reconciliation notice to each CoC member (and the CIRP Applicant for pre-CoC Reg. 33 expenses). If unpaid, file an Interlocutory Application (IA) under Section 60(5) IBC before the Adjudicating Authority (NCLT) seeking binding directions for immediate pro-rata release into the CIRP Cost Account.",
  },
  {
    question:
      "Can an IBBI Registered Valuer still recover valuation fees if the NCLT CIRP is withdrawn under Section 12A or set aside by NCLAT?",
    answer:
      "Yes. In Alok Kaushik v. Bhuvaneshwari Ramanathan & Ors. (2021) 5 SCC 787, the Supreme Court categorically held that the NCLT does not become functus officio when a CIRP is set aside or terminated; it retains jurisdiction under Section 60(5)(c) of the IBC to quantify and direct payment of legitimate CIRP costs and fees of IBBI Registered Valuers appointed during the process. File a Section 60(5) IA enclosing your appointment letter, Valuation Report submission proof, and ratified/reasonable fee schedule.",
  },
  {
    question:
      "Can a PCS withhold a company's statutory registers, minute books, or directors' DSC tokens until unpaid retainership or MCA challans are cleared?",
    answer:
      "No. Following R.D. Saxena v. Balram Prasad Sharma (2000) 7 SCC 264 and ICSI ethical standards, a Practicing Company Secretary has no legal lien under Section 171 of the Contract Act over client-owned corporate records—including Statutory Registers (MGT-1/MGT-2), Board/AGM Minute Books, original Share Certificates, corporate seals, or director DSC tokens. Always return client property promptly under a signed Handover Memo while retaining your own Secretarial Audit working papers, and pursue unpaid fees via ICSI Clause (8) communication and an external Advocate Notice.",
  },
  {
    question:
      "How does ICSI First Schedule Part I Clause (8) protect an outgoing PCS when a corporate client switches Secretarial Auditors?",
    answer:
      "Under Clause (8) of Part I of the First Schedule to the Company Secretaries Act, 1980, a Company Secretary in practice is guilty of professional misconduct if they accept a position as Company Secretary in practice previously held by another PCS without first communicating with the outgoing PCS in writing. When you receive a Clause (8) inquiry—or discover an unauthorized Form MGT-14 / MR-3 replacement—send a documented reply via RPAD and ICSI-registered email placing on record your unpaid undisputed Secretarial Audit fees, Balance Sheet provision, and ICSI UDINs.",
  },
  {
    question:
      "How do IBBI Registered Valuers defeat a client's bogus 'quality dispute' after the client has already used the Valuation Report?",
    answer:
      "Valuation clients routinely accept the signed Valuation Report u/s 247 Companies Act or FEMA (Non-Debt Instruments) Rules, file Form PAS-3 / FC-GPR / FC-TRS with ROC or their RBI Authorized Dealer Bank, and then refuse the balance 70%–80% fee alleging 'methodology dissatisfaction'. Because the company statutorily filed and relied upon your IBBI-numbered Valuation Report before government regulators, it is legally estopped from disputing delivery or acceptance. Attach the public MCA/SRN filing extract, RBI FIRMS correspondence, Form 26AS (s.194J TDS), and GSTR-2B ITC records to your Order XXXVII CPC Advocate Notice.",
  },
  {
    question:
      "Can a PCS firm, Registered Valuer Entity (RVE), or Insolvency Professional Entity (IPE) invoke MSMED Act 3x RBI interest and Income Tax s.43B(h)?",
    answer:
      "Yes—for private corporate mandates (secretarial retainerships, corporate advisory, private FEMA/Companies Act valuations, and non-IBC consultancy) where your firm or entity held a valid Micro or Small Enterprise Udyam Registration prior to the date of the engagement/invoice. Under Sections 15–16 of the MSMED Act, 2006, corporate buyers face statutory compound interest at 3x the RBI Bank Rate after 45 days and expense disallowance under Section 43B(h) of the Income-tax Act, 1961. Note, however, that pure CIRP fee disputes inside an active insolvency process are governed exclusively by the IBC s.5(13)/60(5) NCLT framework rather than MSEFC.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository — update author/reviewer link once centralized reviewer registry is added.
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T12:15:00+05:30",
  dateModified: "2026-11-19T12:15:00+05:30",
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
    name: "PCS MCA ROC Filing Reimbursement, IBBI Registered Valuer Fee & Insolvency RP CIRP Cost Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How PCS Firms, IBBI Registered Valuers & Insolvency RPs Recover Unpaid Fees and MCA Filing Advances",
  description:
    "5-step creditor-side operational workflow separating client record handovers from statutory fee and out-of-pocket reimbursement enforcement under ICSI ethics, IBC s.5(13)/60(5), Contract Act s.69/222, and Order XXXVII CPC.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Insulate Your COP / IBBI License via Clean Corporate Record Handover",
      text: "Return all client-owned Statutory Registers, Minute Books, DSC tokens, or Corporate Debtor records under a signed Handover Receipt to comply with R.D. Saxena, ICSI ethical norms, and IBBI Code of Conduct—while keeping internal working papers and engagement proofs.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Segregate Out-of-Pocket Statutory Challans From Professional Fees",
      text: "Split your claim into (a) pure statutory reimbursements (MCA V3 SRN receipts, State e-GRAS stamp duty challans, newspaper/valuer CIRP bills) recoverable u/s 69/222 Contract Act or IBC Reg. 33/34, and (b) professional fee invoices backed by ICSI UDIN, IBBI Reg. 34B, or Valuation Report filing proof.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Deploy Regulatory Leverage (ICSI Clause (8) Reply or CoC Pro-Rata Demand)",
      text: "For Secretarial Audits, serve a written Clause (8) reply to the incoming PCS documenting Balance-Sheet-provisioned undisputed fees. For CIRP arrears, serve a pro-rata CIRP cost contribution schedule on every CoC member citing Regulations 33, 34 & 34B.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Dispatch External Advocate Legal Notice (Order 37 CPC, CGST s.16(2) & s.43B(h))",
      text: "Instruct independent litigation counsel to serve a formal 15-day demand notice via Email, WhatsApp, and Speed Post RPAD attaching SRN challans, Form 26AS 194J TDS credits, GSTR-2B ITC reversal exposure, and BSA 2023 s.63 electronic logs.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File Forum-Matched Action: NCLT s.60(5) IA, Order XXXVII Suit or s.12A Mediation",
      text: "Escalate unpaid CIRP/Valuer costs via an NCLT Interlocutory Application u/s 60(5) IBC (invoking Alok Kaushik and s.53(1)(a) super-priority), and pursue corporate MCA advances/retainerships via Order XXXVII CPC Summary Suit, s.12A Commercial Mediation, or NI Act s.138 prosecution.",
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
      name: "PCS, Registered Valuer & Insolvency RP Fee Recovery",
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

export default function PcsValuerInsolvencyFeeRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "CA, Architects & Advisors Fee Hub",
      href: "/industries/ca-architects-consultants-professional-fee-recovery",
    },
    {
      label: "PCS, Valuer & Insolvency RP Fee Recovery",
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
            <span>IND-23 &middot; PCS, IBBI Registered Valuers &amp; Insolvency RPs</span>
            <span className="text-red-600">&bull;</span>
            <span>ICSI, IBBI s.5(13) &amp; Order 37 Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Answer Box + Parent Hub Link in first 250 words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer (ICSI, IBBI &amp; Civil Law)
            </span>
            Upfront <strong>MCA V3 ROC stamp-duty advances</strong> are recoverable as liquidated agent indemnities under <strong>Contract Act ss.69 &amp; 222 + Order XXXVII CPC</strong>, while CoC-ratified <strong>IRP/RP and IBBI Valuer fees</strong> enjoy Rank-1 super-priority under <strong>IBC ss.5(13), 30(2)(a) &amp; 53(1)(a)</strong> enforceable via an <strong>NCLT s.60(5) IA</strong>—part of our{" "}
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
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.5(13) &amp; 53(1)(a)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Rank-1 Super-Priority for CIRP &amp; Valuer Costs
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">s.69 &amp; s.222</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Contract Act Indemnity on MCA SRN Advances
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">Clause (8)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                ICSI Mandatory Incoming-PCS Written Inquiry
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">s.60(5) &amp; O.37</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                NCLT CoC Fee IA + Summary Suit Recovery
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
          <PcsIpFeeTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: OUT-OF-POCKET MCA & CIRP TRAP */}
            <section
              id="heading-out-of-pocket-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why MCA ROC Challan Advances &amp; CIRP Fees Get Trapped Unpaid
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike generic business consultants who risk only billable hours, <strong>Practicing Company Secretaries (PCS)</strong>, <strong>IBBI Registered Valuers</strong>, and <strong>Insolvency Resolution Professionals (IRP/RP)</strong> routinely put hard working capital and regulated statutory licenses on the line before a single rupee lands in their bank account. On the corporate secretarial side, promoters pressure PCS firms during investor-closing weeks to pay <strong>₹1.5 Lakh to ₹6 Lakh+ in MCA V3 ROC filing fees and State Stamp Duty</strong> upfront for Form SH-7 (authorized share capital hikes), Form PAS-3 (equity allotments), Form CHG-1 (bank charge creation), or condonation/compounding petitions—promising same-day reimbursement that vanishes once the SRN approves.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the insolvency and valuation ecosystem, the credit squeeze is equally acute. An <strong>Interim Resolution Professional (IRP) or Resolution Professional (RP)</strong> runs a distressed corporate debtor as a going concern for 6 to 12 months—paying security guards, public announcements (Form A), e-voting agencies, and two <strong>IBBI Registered Valuers</strong>—while Committee of Creditors (CoC) banks stall pro-rata contribution approvals across zonal credit committees. Similarly, Registered Valuers delivering time-critical Valuation Reports under <strong>Section 247 of the Companies Act, 2013</strong> or <strong>FEMA (Non-Debt Instruments) Rules, 2019</strong> watch clients upload the signed report to ROC or RBI&rsquo;s FIRMS portal and then withhold the 80% balance fee.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    PCS Out-of-Pocket Drain
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    MCA V3 Form SH-7 stamp duty, late additional fees on AOC-4/MGT-7, and Secretarial Audit (Form MR-3) retainerships left unpaid after filing SRNs are approved.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">
                    Insolvency RP / IRP Bottleneck
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    CoC financial creditors delaying pro-rata reimbursement of Reg. 33/34/34B minimum fees, or promoters settling u/s 12A without settling accrued CIRP costs.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                    IBBI Registered Valuer Exposure
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Signed SFA, Land &amp; Building, or Plant &amp; Machinery valuation reports relied upon for PAS-3, FC-GPR, or CIRP Fair Value while balance fees remain unpaid.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Because PCS, Valuers, and IPs are governed by strict statutory discipline (ICSI &amp; IBBI), aggressive self-help—like withholding corporate registers or stalling CIRP handovers—backfires. Pairing clean ethical compliance with forum-specific statutory enforcement (building on our{" "}
                <Link
                  href="/recovery/consultancy-fees"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Consultancy &amp; Advisory Fee Recovery Playbook
                </Link>{" "}
                and{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Order XXXVII CPC Summary Suit Guide
                </Link>
                ) recovers both principal advances and fees without jeopardizing your Certificate of Practice or IBBI registration.
              </p>
            </section>

            {/* SECTION 2: ICSI ETHICS & LIEN BOUNDARY */}
            <section
              id="heading-icsi-ethics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  ICSI First Schedule Clause (8) &amp; PCS Handover Without Lien
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a corporate client switches its Secretarial Auditor or retainer PCS while owing ₹3–₹8 Lakh in unpaid fees and MCA challan reimbursements, two rules under the <strong>Company Secretaries Act, 1980</strong> and Supreme Court jurisprudence define your exact boundary:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Never Withhold (Zero Lien Under R.D. Saxena)
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-800 space-y-1.5 list-disc pl-4">
                    <li>Original Statutory Registers (MGT-1 Register of Members, CHG-7, MBP-4)</li>
                    <li>Signed Board Meeting &amp; General Meeting Minute Books and Common Seal</li>
                    <li>Director Digital Signature Certificate (DSC) USB tokens &amp; MCA V3 business-user IDs</li>
                    <li>Original Share Certificates, Incorporation Deeds &amp; client-owned physical files</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    Your Lawful Leverage (ICSI Clause (8) + Contract Act)
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-800 space-y-1.5 list-disc pl-4">
                    <li>Mandatory prior written communication from any incoming PCS under <strong>First Schedule Part I Clause (8)</strong></li>
                    <li>Formal written disclosure of Balance-Sheet-provisioned undisputed Secretarial Audit fees</li>
                    <li>Full ownership of your own Secretarial Audit working papers, CSAS checklists &amp; research notes</li>
                    <li>Direct statutory indemnity suit u/s <strong>69 &amp; 222 Indian Contract Act</strong> for MCA SRN advances</li>
                  </ul>
                </div>
              </div>

              {/* Copy-Ready ICSI Clause (8) Written Reply Box */}
              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 space-y-3 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                    Model ICSI First Schedule Clause (8) Written Disclosure to Incoming PCS
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    Send via Speed Post RPAD + ICSI-Registered Email
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed font-mono text-slate-200">
                  &ldquo;Dear CS [Incoming PCS Name] (ACS/FCS No. [Number]), Re: Your communication dated [Date] under Clause (8), Part I of the First Schedule to the Company Secretaries Act, 1980 regarding Secretarial Audit / PCS engagement for M/s [Company Name] (CIN: [CIN]). While all client-owned statutory registers and DSC tokens were returned under signed Handover Receipt dated [Date], please take formal record that our undisputed Secretarial Audit fees (Form MR-3, ICSI UDIN: [UDIN]) of ₹[Amount] and out-of-pocket MCA V3 statutory filing reimbursements of ₹[Amount] (SRNs: [SRN List]) remain unpaid despite Balance Sheet / invoice admissions. Copies of the unpaid tax invoices, SRN challans, and Board appointment resolution are enclosed for your ethical compliance and engagement evaluation.&rdquo;
                </p>
              </div>
            </section>

            {/* SECTION 3: IBBI CIRP COST PRIORITY & COC RATIFICATION */}
            <section
              id="heading-ibbi-cirp-cost"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  IBBI CIRP Cost Priority u/s 5(13), 53(1)(a) &amp; CoC Ratification
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For Insolvency Professionals (IRPs/RPs) and IBBI Registered Valuers appointed under CIRP Regulation 27, Parliament engineered the Insolvency and Bankruptcy Code, 2016 so that professionals running a corporate rescue are paid <strong>ahead of every bank, secured lender, tax authority, and shareholder</strong>. Understanding the exact interplay of four statutory provisions turns stalled CoC fee meetings into enforceable NCLT recovery orders:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                    IBC Section 5(13) &amp; CIRP Reg. 31
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    What Qualifies as Statutory CIRP Cost
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Expressly covers IRP/RP fees, expenses incurred by the RP in running the Corporate Debtor as a going concern, fees of <strong>IBBI Registered Valuers</strong> (Reg. 27), transaction/forensic auditors, legal counsel, public announcement costs, and CoC-ratified operational out-of-pocket disbursements.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                    CIRP Regulations 33, 34 &amp; 34B (Schedule II)
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Applicant Liability &amp; Minimum Fixed RP Fee Floor
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>Reg. 33</strong>, the CIRP Applicant bears initial IRP expenses (reimbursable upon CoC ratification). Under <strong>Reg. 34B</strong> (2022 IBBI Amendment), an IP&rsquo;s fee cannot fall below the statutory minimum monthly fixed fee slab (₹1 Lakh to ₹5 Lakh/month based on quantum of admitted claims), plus optional performance-linked incentive fee.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                    IBC Sections 30(2)(a) &amp; 53(1)(a)
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Absolute Rank-1 Super-Priority Waterfall
                  </h3>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    No Resolution Plan can be lawfully approved by NCLT unless it provides for <strong>full payment of CIRP costs in priority to all other debts</strong> (s.30(2)(a)). If the company enters Liquidation, CIRP costs and liquidation costs sit at <strong>Rank 1 (s.53(1)(a))</strong>—paid 100% before secured banks or workmen receive a rupee.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                    IBC Section 60(5) + CoC Escrow / Pro-Rata Contribution
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Enforcing Stalled Bank Contributions Before NCLT
                  </h3>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    When CoC banks ratify expenses in meetings but delay actual cash release into the CIRP Cost Account—or replace the RP without clearing dues—file an <strong>Interlocutory Application u/s 60(5) IBC</strong> seeking an NCLT directive mandating pro-rata deposit by voting share within 14 days (and blocking s.12A withdrawal or RP substitution handover disputes until costs are escrowed).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: 5-STEP RECOVERY DECISION TREE FLOWCHART */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Step Recovery Playbook for PCS, Valuers &amp; Insolvency RPs
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow this five-stage operational decision tree so your claim moves smoothly from clean regulatory handover to binding payment—splitting corporate/private mandates (Order XXXVII CPC &amp; Commercial Courts) cleanly from NCLT/IBC CIRP enforcement:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <svg
                  width="920"
                  height="315"
                  viewBox="0 0 920 315"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-step operational recovery decision tree for PCS MCA advances, IBBI Registered Valuers and Insolvency RP CIRP fees"
                >
                  <rect width="920" height="315" rx="16" fill="#F8FAFC" />

                  {/* Step 1 */}
                  <rect x="18" y="28" width="162" height="130" rx="12" fill="#0F172A" />
                  <rect x="18" y="28" width="162" height="28" rx="12" fill="#DC2626" />
                  <text x="99" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 1 · DAY 0</text>
                  <text x="99" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Ethics-Safe</text>
                  <text x="99" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Handover</text>
                  <text x="99" y="116" textAnchor="middle" fill="#CBD5E1" fontSize="10">Return Registers &amp; DSCs</text>
                  <text x="99" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10">Retain Working Papers</text>
                  <text x="99" y="146" textAnchor="middle" fill="#86EFAC" fontSize="9.5">COP &amp; IBBI Safe</text>

                  <line x1="180" y1="93" x2="200" y2="93" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="200,88 208,93 200,98" fill="#DC2626" />

                  {/* Step 2 */}
                  <rect x="208" y="28" width="162" height="130" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <rect x="208" y="28" width="162" height="28" rx="12" fill="#1E293B" />
                  <text x="289" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 2 · DAY 1–3</text>
                  <text x="289" y="78" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Split Principal</text>
                  <text x="289" y="94" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">&amp; Challans</text>
                  <text x="289" y="116" textAnchor="middle" fill="#475569" fontSize="10">MCA SRN / Stamp Receipts</text>
                  <text x="289" y="130" textAnchor="middle" fill="#475569" fontSize="10">CoC Minutes / UDIN / 26AS</text>
                  <text x="289" y="146" textAnchor="middle" fill="#047857" fontSize="9.5">BSA 2023 s.63 Cert</text>

                  <line x1="370" y1="93" x2="390" y2="93" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="390,88 398,93 390,98" fill="#DC2626" />

                  {/* Step 3 */}
                  <rect x="398" y="28" width="162" height="130" rx="12" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                  <rect x="398" y="28" width="162" height="28" rx="12" fill="#DC2626" />
                  <text x="479" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 3 · DAY 3–7</text>
                  <text x="479" y="78" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Regulatory</text>
                  <text x="479" y="94" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Leverage</text>
                  <text x="479" y="116" textAnchor="middle" fill="#475569" fontSize="10">ICSI Clause (8) Reply</text>
                  <text x="479" y="130" textAnchor="middle" fill="#475569" fontSize="10">CoC Pro-Rata Demand</text>
                  <text x="479" y="146" textAnchor="middle" fill="#B91C1C" fontSize="9.5">PAS-3 / FIRMS Proof</text>

                  <line x1="560" y1="93" x2="580" y2="93" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="580,88 588,93 580,98" fill="#DC2626" />

                  {/* Step 4 */}
                  <rect x="588" y="28" width="162" height="130" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <rect x="588" y="28" width="162" height="28" rx="12" fill="#1E293B" />
                  <text x="669" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 4 · DAY 7–21</text>
                  <text x="669" y="78" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">External</text>
                  <text x="669" y="94" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">Advocate Notice</text>
                  <text x="669" y="116" textAnchor="middle" fill="#475569" fontSize="10">Contract Act s.69/222</text>
                  <text x="669" y="130" textAnchor="middle" fill="#475569" fontSize="10">CGST s.16(2) + s.43B(h)</text>
                  <text x="669" y="146" textAnchor="middle" fill="#047857" fontSize="9.5">15-Day RPAD + Email</text>

                  <line x1="750" y1="93" x2="770" y2="93" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="770,88 778,93 770,98" fill="#DC2626" />

                  {/* Step 5 */}
                  <rect x="778" y="28" width="124" height="130" rx="12" fill="#0F172A" />
                  <rect x="778" y="28" width="124" height="28" rx="12" fill="#059669" />
                  <text x="840" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">STEP 5 · DAY 22+</text>
                  <text x="840" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Forum</text>
                  <text x="840" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Enforcement</text>
                  <text x="840" y="116" textAnchor="middle" fill="#CBD5E1" fontSize="10">NCLT s.60(5) IA</text>
                  <text x="840" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="10">Order 37 / s.12A</text>
                  <text x="840" y="146" textAnchor="middle" fill="#86EFAC" fontSize="9.5">NI Act s.138</text>

                  {/* Forum Split Banner */}
                  <rect x="18" y="184" width="430" height="108" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5" />
                  <text x="34" y="208" fill="#B91C1C" fontSize="11" fontWeight="800">TRACK A · PRIVATE CORPORATE &amp; MCA ADVANCE CLAIMS</text>
                  <text x="34" y="230" fill="#1E293B" fontSize="11" fontWeight="600">PCS Stamp Duty (SH-7/PAS-3), Secretarial Audit &amp; FEMA Valuations</text>
                  <text x="34" y="250" fill="#475569" fontSize="10.5">&bull; Order XXXVII CPC Summary Suit (Contract Act s.69/222 indemnity)</text>
                  <text x="34" y="268" fill="#475569" fontSize="10.5">&bull; Commercial Court s.12A (&gt;= ₹3L) + MSEFC 3x RBI (if Udyam)</text>

                  <rect x="472" y="184" width="430" height="108" rx="12" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
                  <text x="488" y="208" fill="#065F46" fontSize="11" fontWeight="800">TRACK B · IBC CIRP &amp; REGISTERED VALUER (REG. 27) CLAIMS</text>
                  <text x="488" y="230" fill="#1E293B" fontSize="11" fontWeight="600">IRP/RP Ratified Fees, Going-Concern Costs &amp; CIRP Valuations</text>
                  <text x="488" y="250" fill="#475569" fontSize="10.5">&bull; NCLT IA u/s 60(5) IBC directing pro-rata CoC bank contribution</text>
                  <text x="488" y="268" fill="#475569" fontSize="10.5">&bull; Alok Kaushik (2021) protection even if CIRP withdrawn/set aside</text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "STEP 1 · DAY 0",
                    title: "Ethics-Safe Handover",
                    desc: "Return client Statutory Registers, Minute Books & DSC tokens under signed receipt; retain internal working papers.",
                  },
                  {
                    step: "STEP 2 · DAY 1–3",
                    title: "Split Principal Fees & Statutory Challans",
                    desc: "Separate pure MCA V3 / Stamp Duty SRN advances from professional fees; bundle CoC minutes, UDINs, Form 26AS & BSA s.63 certificate.",
                  },
                  {
                    step: "STEP 3 · DAY 3–7",
                    title: "Trigger Regulatory Leverage",
                    desc: "Issue ICSI Clause (8) disclosure to incoming PCS, or serve pro-rata CIRP Cost schedule under IBBI Reg. 33/34/34B to CoC members.",
                  },
                  {
                    step: "STEP 4 · DAY 7–21",
                    title: "External Advocate Legal Notice",
                    desc: "Serve 15-day notice via Email, WhatsApp & Speed Post RPAD citing Contract Act s.69/222, CGST s.16(2) 180-day ITC reversal & s.43B(h).",
                  },
                  {
                    step: "STEP 5 · DAY 22+",
                    title: "Forum-Matched Enforcement",
                    desc: "File NCLT s.60(5) IA for IBC CIRP/Valuer fees, or Order XXXVII CPC Summary Suit / s.12A Commercial Mediation / NI Act s.138 for corporate dues.",
                  },
                ].map((card) => (
                  <div
                    key={card.step}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      {card.step}
                    </p>
                    <p className="text-sm font-bold text-slate-900">{card.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: STATUTORY MATRIX TABLE */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Remedy Matrix: MCA Advances, Valuations, CIRP &amp; Retainerships
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Selecting the wrong forum—such as filing an MSEFC claim for an active CIRP cost dispute or using ICSI Clause (8) to block a non-audit handover—wastes months. Match your exact fee category against the governing statute and primary forum below:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Engagement / Default Type</th>
                      <th className="p-3.5 font-bold">Governing Statute &amp; Rule</th>
                      <th className="p-3.5 font-bold">Primary Forum</th>
                      <th className="p-3.5 font-bold">Killer Proof / Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        PCS MCA V3 Stamp Duty &amp; ROC Filing Advance (SH-7, PAS-3, CHG-1)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act ss.69, 70 &amp; 222; Order XXXVII CPC
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Order XXXVII Summary Suit / Commercial Court (s.12A if &ge;₹3L)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MCA SRN Payment Receipt + Firm Bank Debit + Email Filing Instruction
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Secretarial Audit (Form MR-3) &amp; Annual Return Cert. (MGT-8)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Company Secretaries Act First Schedule Clause (8); Companies Act s.204
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Incoming PCS Clause (8) Reply + Order XXXVII / MSEFC (if Udyam)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Signed Balance Sheet Provision (s.18 Limitation), ICSI UDIN &amp; Form 26AS 194J
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        IRP / RP Monthly Fee &amp; Going-Concern CIRP Costs Stalled by CoC
                      </td>
                      <td className="p-3.5 text-slate-700">
                        IBC ss.5(13), 30(2)(a), 53(1)(a), 60(5); CIRP Reg. 33, 34 &amp; 34B
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NCLT Interlocutory Application (IA u/s 60(5) IBC)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CoC Ratification Minutes, E-Voting Tally, IBBI Form III CIRP Cost Disclosure
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        IBBI Registered Valuer — IBC Fair / Liquidation Valuation (Reg. 27)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        IBC ss.5(13) &amp; 60(5)(c); <em>Alok Kaushik</em> (2021) 5 SCC 787
                      </td>
                      <td className="p-3.5 text-slate-700">
                        RP CIRP Cost Disbursement / NCLT s.60(5) IA (even post-withdrawal)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        RP Appointment Letter, Signed Valuation Reports &amp; CoC Discussion Minutes
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        Registered Valuer — Companies Act s.247 / FEMA FC-GPR / Merchant Banker
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Companies (Registered Valuers) Rules, 2017; Order XXXVII CPC; CGST s.16(2)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Advocate Notice &rarr; s.12A Mediation / Order XXXVII / MSEFC (3x RBI)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Filed Form PAS-3 / RBI FIRMS Extract citing IBBI Reg. No. + GSTR-2B ITC
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Dishonoured Fee or Reimbursement Cheque (Any Category)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Negotiable Instruments Act, 1881 ss.138, 141 &amp; 143A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        JMFC / MM Criminal Court (20% Interim Compensation u/s 143A)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Bank Cheque Return Memo + Statutory Notice Within Strict 30 Days
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: INTERACTIVE SCENARIO TABS */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Real-World Fee Default Flashpoints: Interactive Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your exact dispute profile below to inspect the regulatory trap to avoid, the step-by-step creditor action sequence, and the boardroom or CoC leverage that drives settlement:
              </p>

              <PcsIpFeeScenarioTabs />
            </section>

            {/* SECTION 7: LANDMARK AUTHORITIES */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Verified Legal Authorities: IBBI, Companies Act &amp; Contract Law
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every Advocate Legal Notice and NCLT Interlocutory Application drafted for PCS, Registered Valuers, and Insolvency Professionals rests on these four binding Supreme Court authorities:
              </p>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 relative overflow-hidden pl-6 sm:pl-7"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                        {item.statute}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#DC2626] mb-2">
                      {item.parties} &mdash; {item.citation}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 leading-relaxed">
                      <strong>Creditor Takeaway:</strong> {item.creditorTakeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 8: WORKED FINANCIAL & INTEREST CALCULATION LEDGER */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked ₹11.85L Recovery Ledger: SH-7 Stamp Duty + CIRP Fees
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Separating pure statutory out-of-pocket disbursements (zero GST dispute) from professional fees and statutory tax/interest exposure dramatically accelerates payment. Consider two representative practice ledgers totaling <strong>₹11.85 Lakh</strong> across a PCS &amp; Advisory firm and an IBBI Valuer/IP mandate:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Ledger A: PCS MCA Stamp Duty + Secretarial Audit */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-400">
                      Case A &middot; PCS MCA Advance + Retainership (195 Days Overdue)
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white mt-1">
                      Form SH-7 Stamp Duty + MR-3 Audit Default
                    </h3>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between gap-2 py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">MCA V3 SH-7 Fee &amp; State Stamp Duty (SRN Advance)</span>
                      <span className="font-mono font-bold text-white">₹4,15,000</span>
                    </div>
                    <div className="flex justify-between gap-2 py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Secretarial Audit (MR-3) + Quarterly Retainer (Incl. 18% GST)</span>
                      <span className="font-mono font-bold text-white">₹2,36,000</span>
                    </div>
                    <div className="flex justify-between gap-2 py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Interest u/s 16 MSMED (3x RBI ~19.5% on ₹2.36L) / 18% on Advance</span>
                      <span className="font-mono font-bold text-emerald-400">+ ₹64,200</span>
                    </div>
                    <div className="flex justify-between gap-2 pt-2 text-sm sm:text-base">
                      <span className="font-extrabold text-white">Total Demandable PCS Claim</span>
                      <span className="font-mono font-black text-emerald-400">₹7,15,200</span>
                    </div>
                  </div>

                  <div className="bg-red-950/60 border border-red-800/60 rounded-xl p-3 text-xs text-red-200 leading-relaxed">
                    <strong>Debtor&rsquo;s Tax &amp; Compliance Pain (&gt;180 Days):</strong> Mandatory CGST s.16(2) ITC reversal of ₹36,000 + 18% interest u/s 50, plus potential s.43B(h) disallowance of ₹2.00L professional expense (adding ~₹50,336 corporate tax hit at 25.17%) if the PCS firm holds Udyam Registration.
                  </div>
                </div>

                {/* Ledger B: IBBI Valuer / CIRP CoC Fee */}
                <div className="bg-emerald-50 text-slate-900 rounded-2xl p-5 sm:p-6 border border-emerald-200 space-y-4">
                  <div className="border-b border-emerald-200 pb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800">
                      Case B &middot; IBBI Valuer / IRP CIRP Cost (NCLT s.60(5) IA)
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
                      Ratified CIRP Valuer &amp; Going-Concern Outlay
                    </h3>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between gap-2 py-1.5 border-b border-emerald-200">
                      <span className="text-slate-700">IBBI Reg. 27 Fair &amp; Liquidation Valuation (3 Asset Classes)</span>
                      <span className="font-mono font-bold text-slate-900">₹3,24,500</span>
                    </div>
                    <div className="flex justify-between gap-2 py-1.5 border-b border-emerald-200">
                      <span className="text-slate-700">IRP Public Announcement (Form A), E-Voting &amp; Travel Outlay</span>
                      <span className="font-mono font-bold text-slate-900">₹1,45,300</span>
                    </div>
                    <div className="flex justify-between gap-2 py-1.5 border-b border-emerald-200">
                      <span className="text-slate-700">Statutory Priority Rank (IBC ss.30(2)(a) &amp; 53(1)(a))</span>
                      <span className="font-mono font-bold text-emerald-800">RANK 1 (100%)</span>
                    </div>
                    <div className="flex justify-between gap-2 pt-2 text-sm sm:text-base">
                      <span className="font-extrabold text-slate-900">Enforceable CIRP Cost Claim</span>
                      <span className="font-mono font-black text-emerald-800">₹4,69,800</span>
                    </div>
                  </div>

                  <div className="bg-white border border-emerald-200 rounded-xl p-3 text-xs text-slate-700 leading-relaxed">
                    <strong>CoC Pro-Rata Recovery Mechanism:</strong> Bank A (55% voting share = ₹2,58,390), Bank B (30% = ₹1,40,940), NBFC C (15% = ₹70,470). Even if promoters withdraw the CIRP u/s 12A, NCLT enforces deposit under <em>Alok Kaushik</em>.
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Calculate exact 3x RBI statutory compound interest on Udyam-registered private corporate mandates using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                , and verify your 3-year civil suit / Section 18 Balance Sheet limitation reset with our{" "}
                <Link
                  href="/tools/limitation-period-calculator"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Limitation Period Calculator
                </Link>
                .
              </p>
            </section>

            {/* SECTION 9: EVIDENCE & BSA 2023 s.63 CHECKLIST */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  SRN Challans, CoC Minutes, UDIN &amp; BSA s.63 Evidence Dossier
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Courts and NCLT Benches reject vague fee ledgers lacking electronic authentication. Before instructing litigation counsel to issue your notice or file an Order XXXVII suit / Section 60(5) IA, assemble this 8-point statutory evidence pack certified under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Engagement Letter / Board Resolution / NCLT Order",
                    desc: "Signed PCS retainership letter, Board Resolution appointing Secretarial Auditor (Form MGT-14), RP appointment order, or Valuer mandate letter specifying fee milestones.",
                  },
                  {
                    title: "2. MCA V3 SRN Payment Receipts & Bank Debit Proof",
                    desc: "Downloadable MCA V3 Challan PDFs (showing CIN, Form SH-7/PAS-3/CHG-1 SRN, and exact statutory/stamp fee paid) matched line-by-line to your firm's bank statement.",
                  },
                  {
                    title: "3. ICSI UDIN, IBBI Reg. No. & Government Filing Proof",
                    desc: "ICSI UDIN certificates for Form MR-3 / MGT-8, or MCA PAS-3 / RBI FIRMS FC-GPR extracts proving the client relied on your signed Valuation Report before regulators.",
                  },
                  {
                    title: "4. CoC Minutes, E-Voting Tallies & IBBI Form III",
                    desc: "Signed CoC meeting minutes ratifying Reg. 33/34/34B fees and expenses, e-voting percentage sheets, and IBBI CIRP Cost Disclosure filings with your IPA.",
                  },
                  {
                    title: "5. Form 26AS (s.194J TDS) & GSTR-1 / 2B Tax Trail",
                    desc: "Proof that the client deducted 10% TDS u/s 194J or received GST invoices (SAC 998216 / 998222 / 998231) in GSTR-2B—activating CGST s.16(2) 180-day reversal leverage.",
                  },
                  {
                    title: "6. Audited Balance Sheet Extract (Section 18 Reset)",
                    desc: "Publicly filed Form AOC-4 Balance Sheet noting 'Professional Fees Payable' or 'Payable to PCS/Valuer' without dispute notes (Bishal Jaiswal admission).",
                  },
                  {
                    title: "7. Signed Clean Handover Receipt (R.D. Saxena Shield)",
                    desc: "Itemized receipt confirming return of client Statutory Registers, Minute Books, DSC tokens, or Corporate Debtor records—pre-empting any ICSI/IBBI counter-complaint.",
                  },
                  {
                    title: "8. BSA 2023 Section 63 Electronic Proof Certificate",
                    desc: "Mandatory Schedule certificate authenticating email instructions ('please pay SH-7 challan urgently'), WhatsApp confirmations, portal receipts, and CoC correspondence.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 10: DUAL-TRACK B2B CTA + RELATED CLUSTER LINKS */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Deploy a ₹999 External Notice or Practice Portfolio CSV Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Keep your ICSI Certificate of Practice and IBBI registration dignified and conflict-free by delegating formal recovery demands to independent litigation counsel. Choose either a single-case ₹999 test or a multi-client batch CSV desk:
              </p>

              <PcsIpFeeCTA />

              {/* Sibling Spokes, Templates & Hub Cross-Links */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Related Professional Recovery Guides, Templates &amp; Sibling Playbooks
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <Link
                    href="/industries/ca-architects-consultants-professional-fee-recovery"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors font-semibold text-slate-900"
                  >
                    &rarr; Parent Hub: CAs, Architects, Engineers &amp; Advisory Fee Recovery
                  </Link>
                  <Link
                    href="/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors font-semibold text-slate-900"
                  >
                    &rarr; Sibling Guide: CA Unpaid Audit Fee Recovery &amp; ICAI Clause (8)
                  </Link>
                  <Link
                    href="/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors font-semibold text-slate-900"
                  >
                    &rarr; Sibling Guide: Architect Stage Fee &amp; GFC Drawing Copyright
                  </Link>
                  <Link
                    href="/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors font-semibold text-slate-900"
                  >
                    &rarr; Sibling Guide: Investment Banker &amp; Debt-Syndication Mandate Fees
                  </Link>
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors font-semibold text-slate-900"
                  >
                    &rarr; IP Protection: Unpaid Reports &amp; Deliverable Ownership Rights
                  </Link>
                  <Link
                    href="/templates/msme-delayed-payment-demand-notice"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors font-semibold text-slate-900"
                  >
                    &rarr; Notice Template: MSME Delayed Payment &amp; s.43B(h) Demand Format
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: PCS MCA Reimbursements, IBBI Valuer Fees &amp; CoC CIRP Dues
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-open:bg-[#DC2626] group-open:text-white group-open:border-[#DC2626] shrink-0 transition-colors font-mono text-sm">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 12: AUTHORITATIVE SOURCES */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Authoritative Bare Acts, IBBI, ICSI &amp; MCA Reference Portals
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Authored &amp; reviewed for statutory accuracy by{" "}
                <Link
                  href="/authors/anuj-anand-malik"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Anuj Anand Malik
                </Link>{" "}
                (Advocate &amp; Founder, AMA Legal Solutions). Verify the underlying bare acts, IBBI regulations, and government filing frameworks directly below:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 leading-relaxed">
                <strong>Statutory Disclaimer:</strong> This playbook provides creditor-side legal education for Practicing Company Secretaries, IBBI Registered Valuers, and Insolvency Professionals across India. Specific CoC voting thresholds, NCLT Bench rules, and state stamp-duty schedules vary by jurisdiction; consult independent litigation counsel before initiating formal proceedings or replying to regulatory notices. Also review our{" "}
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="underline text-slate-700 hover:text-[#DC2626]"
                >
                  Legal Notice Reply Format Workspace
                </Link>{" "}
                when countering a defaulting client&rsquo;s pre-emptive allegation notice.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
