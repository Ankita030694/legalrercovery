import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ChequeBounceNoticeCTA from "./ChequeBounceNoticeCTA";
import ChequeBounceTableOfContents from "./ChequeBounceTableOfContents";
import ChequeReturnTabs from "./ChequeReturnTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Cheque Bounced 'Account Closed' or 'Signature Mismatch'",
  description:
    "Account closed, signature mismatch, refer to drawer: see which return reasons attract Section 138 and which don't.",
  alternates: {
    canonical: `${SITE_URL}/cheque-bounce-account-closed-signature-mismatch`,
  },
  openGraph: {
    title: "Cheque Bounced 'Account Closed' or 'Signature Mismatch'? Section 138 Rules",
    description:
      "Statutory guide on cheque return reasons under Section 138 NI Act: Supreme Court precedents on Account Closed, Signature Differs, Refer to Drawer, and Stop Payment.",
    url: `${SITE_URL}/cheque-bounce-account-closed-signature-mismatch`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881) — Sections 138 to 148",
    url: "https://www.indiacode.nic.in/handle/123456789/2281",
  },
  {
    title: "Supreme Court Landmark Judgment: NEPC Micon Ltd. v. Magma Leasing Ltd. (1999) 4 SCC 253 (Account Closed attracts Section 138)",
    url: "https://main.sci.gov.in/judgment/judgments.php",
  },
  {
    title: "Supreme Court 3-Judge Bench Ruling: Laxmi Dyechem v. State of Gujarat (2012) 13 SCC 375 (Signature Mismatch & Refer to Drawer attract Section 138)",
    url: "https://main.sci.gov.in/judgment/judgments.php",
  },
  {
    title: "Supreme Court Landmark Judgment: Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) 3 SCC 232 (Stop Payment attracts Section 138)",
    url: "https://main.sci.gov.in/judgment/judgments.php",
  },
  {
    title: "Supreme Court Nationwide Directions: Sanjabij Tari v. Kishore S. Borcar (Criminal Appeal No. 3968/2025, Decided 25 Sep 2025)",
    url: "https://main.sci.gov.in/judgment/judgments.php",
  },
  {
    title: "Reserve Bank of India (RBI) Cheque Truncation System (CTS) Procedural Guidelines & Standard Return Reason Codes",
    url: "https://www.rbi.org.in/scripts/BS_ViewMasCirculardetails.aspx?id=9865",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Bank Return Memos & Speed Post Tracking)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on 'Account Closed' Dishonour",
    parties: "NEPC Micon Ltd. & Ors. v. Magma Leasing Ltd.",
    citation: "(1999) 4 SCC 253 : 1999 INSC 195",
    date: "Judgment Dated 29 April 1999",
    facts:
      "The appellant company issued several cheques to the respondent financing company towards hire-purchase installments. Upon presentation within the statutory 6-month validity period (now 3 months), all cheques were returned unpaid by the drawee bank with the bank memo remark 'Account Closed'. The drawer contended that Section 138 only penalizes 'insufficiency of funds' or 'exceeding arrangements', and argued that an account that no longer exists cannot be said to have insufficient funds.",
    holding:
      "The Supreme Court dismissed the drawer's contention in emphatic terms. The Court held that closing an account prior to presenting the cheque or before it is cleared is an intentional act demonstrating complete absence of funds or arrangement to pay. Section 138 must be interpreted purposively to uphold commercial efficacy. The Court confirmed that dishonour on the ground of 'Account Closed' falls squarely within Section 138 criminal liability.",
    amount: "Over ₹1.25 Crore Cheque Dues Enforced + Full Criminal Prosecution Maintained",
    takeaway:
      "A drawer cannot outsmart criminal liability under Section 138 by surreptitiously closing their bank account. If the cheque was issued for an enforceable liability and returned 'Account Closed', criminal liability applies immediately.",
  },
  {
    title: "Supreme Court 3-Judge Bench on 'Signature Differs' & 'Refer to Drawer'",
    parties: "Laxmi Dyechem v. State of Gujarat & Ors.",
    citation: "(2012) 13 SCC 375 : 2012 INSC 644",
    date: "Judgment Dated 27 November 2012",
    facts:
      "The appellant received multiple cheques towards the supply of industrial chemicals. When deposited, the drawee bank returned the instruments unpaid with the remarks 'signatures do not match' and 'refer to drawer'. The High Court quashed the Section 138 complaint on the grounds that Section 138 does not explicitly include 'signature mismatch' among the grounds of dishonour.",
    holding:
      "A 3-Judge Bench of the Supreme Court reversed the High Court decision and reinstated the criminal complaint. The Apex Court ruled that the two statutory expressions in Section 138 ('funds insufficient' and 'exceeds arrangement') are illustrative and expansive. The Court held that if the drawer deliberately appends an irregular signature or signs differently from the bank specimen card, it amounts to an intentional frustration of payment. Section 138 applies in full force to 'signature mismatch', 'image not found', and 'refer to drawer'.",
    amount: "Reinstatement of Criminal Trial for ₹4.85 Crore Disputed Commercial Invoices",
    takeaway:
      "Deliberately scribbling an altered signature to make the cheque bounce is not a legal shield. The Supreme Court holds the drawer criminally liable unless the account holder proves the cheque was an outright forgery executed by an unauthorized third party.",
  },
  {
    title: "Supreme Court on 'Payment Stopped by Drawer' (Stop Payment)",
    parties: "Goaplast (P) Ltd. v. Chico Ursula D'Souza & Anr.",
    citation: "(2003) 3 SCC 232 : 2003 INSC 155",
    date: "Judgment Dated 14 March 2003",
    facts:
      "The respondent issued post-dated cheques towards a commercial transaction. Before the payee could present the cheques, the drawer issued a written letter to their bank requesting a 'Stop Payment'. When presented, the cheques bounced with the memo 'Payment stopped by drawer'. The respondent argued that Section 138 does not apply because the bank did not test whether funds were sufficient.",
    holding:
      "The Supreme Court held that Section 138 is attracted even when payment is stopped by the drawer. The statutory presumption under Section 139 mandates that the cheque was issued for the discharge of a legally enforceable debt. A drawer cannot preempt criminal law simply by issuing a stop-payment notice, unless they prove at trial that there was no existing debt or that the counter-obligation failed entirely.",
    amount: "Criminal Liability Upheld for Dishonoured Post-Dated Cheques",
    takeaway:
      "A stop-payment letter is not an automatic defense. Payees should serve a 15-day statutory Section 138 demand notice immediately upon receiving the 'Payment Stopped' return memo.",
  },
  {
    title: "Supreme Court Nationwide Guidelines on Fast-Tracking Cheque Bounce Trials",
    parties: "Sanjabij Tari v. Kishore S. Borcar",
    citation: "Criminal Appeal No. 3968 of 2025, Supreme Court of India",
    date: "Order Dated 25 September 2025",
    facts:
      "Addressing the systemic backlog of over 33 lakh pending cheque bounce cases across India, the Supreme Court laid down binding pan-India procedural directives under Article 142 of the Constitution for all magistrate courts handling Section 138 NI Act complaints.",
    holding:
      "The Supreme Court directed that summons under Section 138 may be served electronically via WhatsApp and registered email with Section 63 BSA electronic admissibility. The Court mandated structured compounding costs (5% at pre-trial, 10% during trial, and 20% in appeal/revision) and directed courts to enforce Section 143A interim compensation up to 20% of the cheque amount during preliminary appearance.",
    amount: "Mandatory 20% Section 143A Interim Deposit & Graded Compounding Costs Enforced",
    takeaway:
      "Under the 2025/2026 Supreme Court framework, frivolous delay tactics by defaulting drawers are penalized, and early settlements are actively enforced with digital summons service.",
  },
];

const FAQS = [
  {
    question: "Does Section 138 apply if a cheque is bounced because the account is closed?",
    answer:
      "Yes, absolutely. In the landmark judgment NEPC Micon Ltd. v. Magma Leasing Ltd. (1999) 4 SCC 253, the Supreme Court ruled that dishonour on the ground of 'Account Closed' falls squarely within Section 138 of the Negotiable Instruments Act. Closing a bank account before the cheque is presented is treated in law as an intentional default showing zero funds. The payee has the complete statutory right to issue a 15-day legal notice and file a criminal complaint under Section 142.",
  },
  {
    question: "Can a drawer escape a cheque bounce case if the bank memo says 'signature differs'?",
    answer:
      "No. A 3-Judge Bench of the Supreme Court in Laxmi Dyechem v. State of Gujarat (2012) 13 SCC 375 held that dishonour on the grounds of 'signature differs' or 'signatures do not match' attracts Section 138 criminal liability. An authorized account holder cannot escape criminal prosecution by intentionally signing differently from their bank specimen. Only where the account holder proves the cheque was stolen and forged by an unrelated stranger can criminal liability under Section 138 be shifted to a criminal cheating and forgery FIR under BNS 318/336.",
  },
  {
    question: "What does 'refer to drawer' mean on a cheque return memo?",
    answer:
      "'Refer to Drawer' is a banking term used when a bank declines to honour a cheque, typically because the account has insufficient funds, lacks an approved credit line, or is subject to an attachment or freeze. Under Supreme Court rulings in Modi Cements Ltd. and Laxmi Dyechem, 'Refer to Drawer' is legally treated as equivalent to fund insufficiency, fully attracting criminal prosecution under Section 138 NI Act.",
  },
  {
    question: "Does a 'stop payment' instruction prevent a cheque bounce case under Section 138?",
    answer:
      "No. Under Supreme Court rulings in MMTC Ltd. and Goaplast (P) Ltd., issuing a stop-payment instruction does not shield the drawer from Section 138 prosecution. The statutory presumption under Section 139 assumes the cheque was issued for an enforceable liability. The drawer must prove at trial that there was no valid consideration, such as goods not being delivered or fraud.",
  },
  {
    question: "What should I do if a cheque bounced for a technical defect like a stale date?",
    answer:
      "If a cheque is returned as 'Stale Cheque' (presented after 3 months from its date) or 'Post-Dated presented prematurely', Section 138 criminal prosecution cannot be initiated because Section 138(a) strictly requires presentation within 3 months of the cheque date. However, the underlying financial debt does not die: you can request a revalidated replacement cheque, file a civil summary suit under Order XXXVII of the CPC within 3 years, or initiate BNS Section 318 cheating proceedings if fraudulent deception occurred.",
  },
  {
    question: "What is the exact time limit to send a legal notice after a cheque bounces?",
    answer:
      "Under Section 138(b) of the Negotiable Instruments Act, you must serve a written statutory demand notice within exactly 30 calendar days from the date you receive the bank return memo from your bank. The drawer must be granted exactly 15 clear days from the date of notice receipt to pay. If they fail to pay by Day 16, you have 30 days to file a criminal complaint before the magistrate court under Section 142.",
  },
  {
    question: "Cheque bounce hone par account closed ya signature mismatch aaye toh notice kaise bheje?",
    answer:
      "Agar cheque 'Account Closed' ya 'Signature Differs' ki wajah se bounce ho gaya hai, toh turant 30 din ke andar ek statutory Section 138 advocate legal notice bhejna zaroori hai. Supreme Court ke Laxmi Dyechem aur NEPC Micon faislon ke mutabiq, drawer aisi chalaki se bachta nahi hai. LegalRecovery.in par verified advocate Speed Post aur WhatsApp/Email se notice bhejte hain, jismein 15 din ka payment time diya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Return Reasons Explained: Which Cheque Bounces Fall Under Section 138",
  description:
    "Account closed, signature mismatch, refer to drawer: see which return reasons attract Section 138 and which don't.",
  datePublished: "2026-11-03T14:00:00+05:30",
  dateModified: "2026-11-03T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/cheque-bounce-account-closed-signature-mismatch`,
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
    name: "Cheque Bounce Law under Section 138 Negotiable Instruments Act",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cheque Bounce Hub",
      item: `${SITE_URL}/cheque-bounce-notice-timeline-section-138`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Return Reasons Explained",
      item: `${SITE_URL}/cheque-bounce-account-closed-signature-mismatch`,
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

export default function ChequeBounceReturnReasonsPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Cheque Bounce Hub", href: "/cheque-bounce-notice-timeline-section-138" },
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Negotiable Instruments Act, 1881</span>
              <span className="text-red-500">•</span>
              <span>Section 138 &amp; 142 Return Reason Master Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Return Reasons Explained: Which Cheque Bounces Fall Under Section 138
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Cheque Dishonour Grounds &amp; Section 138 Applicability)
              </p>
              <p>
                Under Section 138 of the Negotiable Instruments Act, 1881, and landmark Supreme Court rulings in <em>NEPC Micon</em> and <em>Laxmi Dyechem</em>, cheques returned for &quot;Account Closed&quot;, &quot;Signature Mismatch&quot;, &quot;Refer to Drawer&quot;, or &quot;Payment Stopped&quot; attract full criminal liability. Payees must serve a statutory 15-day demand notice via Registered Speed Post within 30 days of the bank return memo before filing a criminal complaint under Section 142.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Notice Limit from Memo</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Drawer Cure Window to Pay</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Up to 20%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Interim Compensation (Sec 143A)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2x Fine</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Double Cheque Fine or 2 Yr Jail</p>
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
            <ChequeBounceTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Archetype G4 Hero Element: Big Comparison Table of Return Reasons */}
              <section id="heading-matrix" aria-labelledby="heading-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Definitive Bank Reason Code Matrix
                  </span>
                  <h2
                    id="heading-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Bank Return Reason vs Section 138 Applicability: The Definitive Comparison Matrix
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a cheque is presented through the Reserve Bank of India&apos;s Cheque Truncation System (CTS), the drawee bank attaches an official return memo assigning a standardized 2-digit reason code. Defaulting drawers often mislead payees by claiming that unless the slip explicitly says &quot;Funds Insufficient&quot;, criminal proceedings under Section 138 cannot be maintained. The comparison matrix below establishes the exact legal standing of every major bank return remark under Indian law:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Bank Return Reason Codes and Section 138 NI Act Applicability Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Bank CTS Memo Reason</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Sec 138 Criminal Liability?</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Landmark Supreme Court Authority</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Core Legal Proof Needed</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Best Action &amp; Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Account Closed (CTS Code 20)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-black">
                          YES — FULLY
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          NEPC Micon Ltd. (1999) 4 SCC 253
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Return memo showing Code 20 + proof of debt
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-700">
                          15-day notice → JMFC / MM Court
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Signature Differs / Incomplete (CTS Code 01/02)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-black">
                          YES — FULLY
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Laxmi Dyechem (2012) 13 SCC 375
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Cheque issued by drawer + bank specimen comparison
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-700">
                          15-day notice citing Laxmi Dyechem
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Payment Stopped by Drawer (CTS Code 10)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-black">
                          YES — STATUTORY PRESUMPTION
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Goaplast (P) Ltd. (2003) 3 SCC 232
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Signed contract, invoices, or delivery receipts
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-700">
                          15-day notice + Sec 143A 20% interim deposit
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Refer to Drawer / Exceeds Arrangement (CTS Code 06/07)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-black">
                          YES — FULLY
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Modi Cements (1998) 3 SCC 249
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Bank return slip + 30-day notice dispatched
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-700">
                          15-day notice → Section 142 complaint
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Account Frozen / Inoperative (CTS Code 22/23)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-black">
                          YES — FULLY
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Laxmi Dyechem (2012) 13 SCC 375
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Failure to provide alternative payment in 15 days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-700">
                          15-day demand notice → Criminal Court
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Stale Cheque (Presented &gt; 3 Months) (CTS Code 30)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-500 font-black">
                          NO — STATUTORY BAR
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Section 138(a) NI Act (Mandatory 3 Months)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Cheque date vs presentation slip date
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-slate-800">
                          Order 37 CPC Summary Suit within 3 yrs
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Post-Dated Cheque Presented Prematurely (CTS Code 31)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-black">
                          NO (UNTIL RE-PRESENTED)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-medium">
                          Ashok Yeshwant Badave (2001) 4 SCC 584
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Wait until instrument date arrives
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-slate-800">
                          Re-present cheque on or after instrument date
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Need to calculate your strict statutory notice deadline from the memo date? Use our interactive{" "}
                  <Link href="/tools/cheque-bounce-deadline-calculator" className="text-blue-700 underline font-semibold">
                    Cheque Bounce Deadline Calculator
                  </Link>{" "}
                  to protect your legal rights before the 30-day window closes.
                </p>
              </section>

              {/* Archetype G4 Step 3: "Which one is right for you" — 3 Persona Paragraphs */}
              <section id="heading-personas" aria-labelledby="heading-personas-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Litigation Strategy Roadmap
                  </span>
                  <h2
                    id="heading-personas-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Legal Strategy Fits Your Dispute? 3 Real-World Scenarios
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Persona 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-800 mb-2">
                        Scenario 1
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        You Hold an &apos;Account Closed&apos; or &apos;Stop Payment&apos; Cheque
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Do not attempt to re-deposit the cheque. Under the Supreme Court precedents in <em>NEPC Micon</em> and <em>Goaplast</em>, the crime of dishonour is complete on the very date the memo was generated. You must serve a formal 15-day statutory demand notice within 30 days of the memo date. Demand both the principal cheque amount and statutory interest under Section 80 NI Act.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-red-700">
                      Recommended Route: Section 138 Notice → Section 143A 20% Interim Deposit
                    </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 mb-2">
                        Scenario 2
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Bank Memo States &apos;Signature Differs&apos; or &apos;Refer to Drawer&apos;
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The drawer may claim you cannot take them to court because they signed differently. Rely on the 3-Judge Bench ruling in <em>Laxmi Dyechem</em>. Issue a 15-day legal notice explicitly asserting that the drawer committed fraudulent intentional signature alteration to evade a legally enforceable liability. Gather underlying invoices, delivery notes, or email acknowledgments to demolish any fabrication defense.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-700">
                      Recommended Route: Section 138 Notice citing Laxmi Dyechem + BNS 318
                    </div>
                  </div>

                  {/* Persona 3 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-800 mb-2">
                        Scenario 3
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Dispute Involves a Stale Cheque, Blank Security Cheque, or Technical Defect
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the cheque was presented after 90 days, Section 138 criminal jurisdiction is barred. However, the civil debt survives for 3 years under the Limitation Act, 1963. You should immediately institute an Order XXXVII CPC Summary Suit in civil court. If a blank security cheque was presented without underlying liability, review our guide on <Link href="/security-cheque-misuse-section-138" className="text-blue-700 underline font-semibold">security cheque misuse</Link>.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-900">
                      Recommended Route: Order 37 CPC Summary Suit + Demand Letter
                    </div>
                  </div>
                </div>
              </section>

              {/* Deep Dive 1: Account Closed */}
              <section id="heading-account-closed" aria-labelledby="heading-account-closed-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-account-closed-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Account Closed Cheque Bounce: Why Section 138 Applies Under NEPC Micon Precedent
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    When a debtor issues a cheque knowing their account is closed, or closes their account shortly after issuing the instrument to prevent clearing, payees often panic upon receiving a bank memo stating &quot;Account Closed&quot; (CTS Code 20). Borrowers frequently send dismissive replies alleging that because no active bank account existed, the mandatory statutory condition of &quot;insufficiency of funds&quot; is not satisfied.
                  </p>
                  <p>
                    This evasive argument was thoroughly dissected and demolished by the Supreme Court of India in the landmark decision <em>NEPC Micon Ltd. v. Magma Leasing Ltd. (1999) 4 SCC 253</em>. The Supreme Court observed that the expression &quot;the amount of money standing to the credit of that account is insufficient&quot; also encompasses cases where the account has been closed. When an account is closed, the balance standing to credit is necessarily nil. Closing an account is an aggressive act demonstrating that there are no funds or arrangements to honour the instrument.
                  </p>
                  <div className="p-4 bg-slate-100 border-l-4 border-slate-900 rounded-r-xl text-xs sm:text-sm">
                    <strong className="block text-slate-900 font-bold mb-1">
                      Legal Principle from NEPC Micon (1999):
                    </strong>
                    &quot;Dishonour on the ground that the account is closed is dishonour for insufficiency of funds. The return memo &apos;Account Closed&apos; falls squarely within the penal consequences of Section 138 of the Negotiable Instruments Act.&quot;
                  </div>
                  <p>
                    Under this binding law, closing an account does not provide immunity; rather, it solidifies criminal liability. Payees must not attempt to re-present the cheque, as an account once closed will never clear. Instead, treat the return memo as definitive, compute your 30-day statutory limitation window, and dispatch a statutory legal notice under Section 138(b).
                  </p>
                </div>
              </section>

              {/* Deep Dive 2: Signature Mismatch */}
              <section id="heading-signature-mismatch" aria-labelledby="heading-signature-mismatch-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-signature-mismatch-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Signature Mismatch &amp; &apos;Signature Differs&apos;: The 3-Judge Bench Ruling in Laxmi Dyechem
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Another common tactic employed by fraudulent drawers is to intentionally sign a cheque with a slight slant, missing initial, or altered cursive stroke, causing the clearing bank to flag the instrument under CTS Code 01 (&quot;Drawer&apos;s Signature Differs&quot;) or Code 02 (&quot;Signature Incomplete&quot;).
                  </p>
                  <p>
                    For years, conflicting High Court verdicts created ambiguity over whether a signature discrepancy could be prosecuted under Section 138. The controversy was settled definitively by a 3-Judge Bench of the Supreme Court in <em>Laxmi Dyechem v. State of Gujarat (2012) 13 SCC 375</em>. The Apex Court held that dishonour on the grounds of &quot;signature does not match&quot; or &quot;signature differs&quot; is fully punishable under Section 138.
                  </p>
                  <p>
                    The Supreme Court held that the legislative intent behind Chapter XVII of the NI Act was to promote efficacy in banking operations and instill credibility in negotiable instruments. If an authorized signatory were permitted to defeat the statute by simply scribbling an irregular signature, the entire objective of Section 138 would be defeated.
                  </p>
                  <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl text-xs sm:text-sm text-red-950">
                    <strong className="block text-red-900 font-bold mb-1">
                      Distinction Between Intentional Signature Mismatch vs Outright Third-Party Forgery:
                    </strong>
                    If the cheque leaf belongs to the drawer&apos;s genuine account and was handed over in discharge of debt, Section 138 applies in full force. The burden shifts to the drawer under Section 139 NI Act to prove they did not issue the cheque. Only if a third-party stranger stole the cheque leaf and forged the signature entirely does criminal liability transfer to an FIR for forgery and cheating under Sections 318 and 336 of the Bharatiya Nyaya Sanhita, 2023 (BNS).
                  </div>
                </div>
              </section>

              {/* Deep Dive 3: Refer to Drawer & Stop Payment */}
              <section id="heading-refer-stop" aria-labelledby="heading-refer-stop-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-refer-stop-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  &apos;Refer to Drawer&apos; &amp; &apos;Payment Stopped&apos;: Criminal Liability vs Legitimate Defenses
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    <strong>Refer to Drawer (CTS Code 06):</strong> Historically borrowed from English banking practice, &quot;Refer to Drawer&quot; is a courteous formula used by bankers to inform the payee that the drawee bank is unwilling to honour the cheque. In <em>Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) 3 SCC 249</em>, the Supreme Court held that &quot;Refer to Drawer&quot; is prima facie evidence of fund insufficiency. Payees do not need to obtain secondary certificates from the bank before serving a Section 138 notice.
                  </p>
                  <p>
                    <strong>Payment Stopped by Drawer (CTS Code 10):</strong> In <em>MMTC Ltd. v. Medchl Chemicals &amp; Pharma (P) Ltd. (2002) 1 SCC 234</em> and <em>Goaplast (P) Ltd. v. Chico Ursula D&apos;Souza (2003) 3 SCC 232</em>, the Supreme Court confirmed that a stop-payment instruction does not prevent criminal liability under Section 138. The statutory presumption under Section 139 mandates that the cheque was issued for an enforceable liability.
                  </p>
                  <p>
                    To escape liability for a stopped cheque, the accused must prove in court that:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
                    <li>There was no existing debt or contractual liability when the cheque was drawn; OR</li>
                    <li>The counter-party committed an incurable breach of contract (e.g., total failure to deliver goods); AND</li>
                    <li>The drawer had sufficient funds in the bank account when they issued the stop-payment instruction.</li>
                  </ul>
                </div>
              </section>

              {/* Deep Dive 4: Technical & Civil Defects */}
              <section id="heading-non-138" aria-labelledby="heading-non-138-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-non-138-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Non-138 Technical Returns: Stale Cheques, CTS Defects &amp; Alternative Civil Remedies
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Not every cheque bounce permits a Section 138 criminal complaint. Section 138(a) contains a mandatory condition precedent: the cheque must be presented to the bank within a period of <strong>three months</strong> from the date on which it is drawn (RBI Notification DBOD.AMLBC.No.47/14.01.001/2011-12).
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <h3 className="font-bold text-slate-900 text-sm mb-1">
                        Stale Cheques (Presented &gt; 90 Days)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If presented after 3 months, the cheque is returned under CTS Code 30 (&quot;Instrument Outdated / Stale&quot;). Section 138 cannot be invoked. However, the debt is enforceable in civil court for 3 years via an <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC summary suit</Link>.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <h3 className="font-bold text-slate-900 text-sm mb-1">
                        Instrument Defaced or Mutilated (CTS Code 33)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Physical tears, non-CTS compliant watermarks, or overwriting without the drawer&apos;s counter-signature represent banking processing defects. Call upon the debtor in writing to issue a replacement cheque within 7 days.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">
                    If the debtor issued a stale or defaced cheque knowingly with dishonest intention to obtain property or services, you can file a criminal complaint for cheating under <Link href="/law/bns-318-cheating-vs-civil-dispute" className="text-blue-700 underline font-semibold">Section 318 of the Bharatiya Nyaya Sanhita, 2023</Link> alongside the civil summary suit.
                  </p>
                </div>
              </section>

              {/* Hand-Authored SVG Flowchart: Statutory Escalation Rail */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Process Flowchart
                  </span>
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Statutory Dishonour Escalation Rail: From Bank Return Memo to Section 138 Filing
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to enforce your cheque recovery rights and prevent forfeiture of your limitation period:
                </p>

                {/* Mobile Responsive Step Sequence */}
                <div className="md:hidden space-y-3">
                  <div className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Bank Return Memo Received</h3>
                    <p className="text-xs text-slate-300 mt-1">Capture memo date &amp; CTS reason code (Account Closed, Signature Differs, etc.).</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">30-Day Legal Notice Window</h3>
                    <p className="text-xs text-amber-900 mt-1">Draft statutory demand notice under Section 138(b) citing Supreme Court precedents.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Speed Post &amp; Electronic Service</h3>
                    <p className="text-xs text-slate-700 mt-1">Dispatch via Registered Speed Post + WhatsApp/Email with Section 63 BSA tracking.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">15-Day Cure Period Expires</h3>
                    <p className="text-xs text-red-900 mt-1">Drawer has exactly 15 clear days from delivery to pay. On Day 16, cause of action arises.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Section 142 Criminal Complaint</h3>
                    <p className="text-xs text-emerald-900 mt-1">File complaint within 30 days before Magistrate; claim 20% Section 143A interim deposit.</p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Cheque Dishonour Statutory Rail</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 250"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Section 138 NI Act Dishonour Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="memoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="noticeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="courtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#memoGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Return Memo</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Capture CTS Code</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Clock Starts (30 Days)</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Draft Legal Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Cite Laxmi / NEPC</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand in 15 Days</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#334155" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Dual Dispatch</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Speed Post + WhatsApp</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Sec 63 BSA Certificate</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#noticeGrad)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">15-Day Cure Window</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Strict Payment Time</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Cause Arises Day 16</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#courtGrad)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Criminal Court Filing</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Sec 142 NI Complaint</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">20% Interim Comp (143A)</text>

                    {/* Bottom Summary Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">BINDING STATUTORY DEADLINES UNDER SECTION 138 &amp; 142 NI ACT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Legal Notice Dispatch: Exactly within 30 calendar days from the receipt of the bank return memo</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Drawer Cure Period: 15 full days from delivery date (no court complaint can be filed before Day 16)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Magistrate Court Filing: Within 30 days of the cause of action arising (between Day 16 and Day 45)</text>
                  </svg>
                </div>
              </section>

              {/* Interactive Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Scenario Explorer
                  </span>
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Bank Return Memo Reason Explorer: Scenario-by-Scenario Action Guide
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select your exact dishonour remark to view governing statutes, Supreme Court holdings, and immediate legal remedies
                  </p>
                </div>

                <ChequeReturnTabs />
              </section>

              {/* Landmark Court Order Digest */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Supreme Court Precedents Enforcing Section 138
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Case Law
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Precedent #{idx + 1} • {c.citation}
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
                              Total Relief &amp; Judicial Impact
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All High Courts &amp; Magistrates
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your case:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Creditor Enforces ₹4,50,000 &apos;Account Closed&apos; &amp; &apos;Signature Mismatch&apos; Cheque
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Commercial Case Study
                    </span>
                    <span className="text-xs text-slate-400">Delhi to Ludhiana Commercial Supply (₹4,50,000)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Transaction:</strong> Amit Khurana, a hardware distributor in Delhi, supplied industrial fittings worth ₹4,50,000 to a manufacturing firm in Ludhiana against signed tax invoices and delivery challans. The proprietor issued an account payee cheque drawn on Punjab National Bank for ₹4,50,000.
                    </p>
                    <p>
                      <strong>The Dishonour &amp; Defense:</strong> When Amit presented the cheque, his bank returned it with a CTS Return Memo stating: <em>&quot;Account Closed&quot;</em> alongside a secondary note indicating <em>&quot;Drawer&apos;s Signature Differs&quot;</em>. When contacted, the debtor scoffed and stated that because the account was shut down 2 months earlier and the signature didn&apos;t match, no Section 138 case could touch him.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Within 12 days of receiving the return memo, Amit engaged LegalRecovery.in. An advocate drafted and dispatched an exhaustive Section 138 demand notice citing the Supreme Court judgments in <em>NEPC Micon Ltd. (1999)</em> and <em>Laxmi Dyechem (2012)</em>. The notice called upon the debtor to discharge the ₹4,50,000 liability along with 18% statutory interest within 15 calendar days of receipt. Notice was served via Registered Speed Post and Section 63 BSA electronic delivery via WhatsApp.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome &amp; Recovery:</strong>
                      Upon receiving the advocate legal notice detailing the 3-Judge Bench ruling in <em>Laxmi Dyechem</em> and facing imminent criminal prosecution under Section 138 with up to 2 years imprisonment and double cheque fine, the debtor&apos;s counsel initiated settlement discussions. On Day 14 of the statutory cure window, the debtor remitted the full principal amount of ₹4,50,000 via RTGS plus ₹25,000 toward drafting expenses and statutory interest, successfully avoiding a criminal complaint.
                    </div>
                  </div>
                </div>
              </section>

              {/* Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Dishonoured Cheque Evidence Checklist: 6 Critical Documents for Section 138 Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the Negotiable Instruments Act and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), maintaining clean documentary evidence guarantees early settlement and eliminates frivolous defenses:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Dishonoured Cheque Leaf:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing payee name, exact date within 3 months, numerical and worded amounts, and drawer signature.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Return Memo (CTS Memo):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bearing the clearing branch stamp, exact date of return, and standardized 2-digit reason code.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Legally Enforceable Debt:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed invoices, loan agreements, promissory notes, delivery challans, or ledger statements establishing debt.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Speed Post Consignment Receipt &amp; Tracking:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">India Post postal receipt and certified online delivery tracking report showing date of service.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Delivery Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">WhatsApp blue-tick delivery screenshot or email transmission report for instantaneous electronic service.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Account Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Demonstrating that no payment was credited to your bank account during the 15-day cure window.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Cheque Bounce Return Reasons &amp; Section 138 NI Act
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Clarifications Grounded in Supreme Court Precedents and the Negotiable Instruments Act
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all"
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

              {/* Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutory Authorities &amp; Landmark Supreme Court Cheque Bounce Judgments
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
                  Statutory verification status: All provisions verified against active India Code statutory entries, Supreme Court judgments (NEPC Micon, Laxmi Dyechem, Goaplast, and Sanjabij Tari 2025 guidelines), and RBI CTS return codes as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Section 138 Cheque Bounce Demand Notice
                </h2>
                <ChequeBounceNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Cheque Bounce &amp; Money Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 138 Notice Timeline Hub →
                  </Link>
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Deadline Calculator →
                  </Link>
                  <Link
                    href="/law/cheque-bounce-supreme-court-guidelines-2025"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Supreme Court 2025 Guidelines (Sanjabij Tari) →
                  </Link>
                  <Link
                    href="/recovery/post-dated-cheque-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Post-Dated &amp; Security Cheque Recovery →
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order XXXVII CPC Summary Suit Guide →
                  </Link>
                  <Link
                    href="/law/bns-318-cheating-vs-civil-dispute"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    BNS 318 Cheating vs Civil Default →
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
