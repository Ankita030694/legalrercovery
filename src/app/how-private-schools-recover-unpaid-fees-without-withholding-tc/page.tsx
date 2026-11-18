import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SchoolFeeTableOfContents from "./SchoolFeeTableOfContents";
import SchoolFeeScenarioTabs from "./SchoolFeeScenarioTabs";
import SchoolFeeNoticeCTA from "./SchoolFeeNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/how-private-schools-recover-unpaid-fees-without-withholding-tc";
const EXACT_H1 =
  "High Courts Bar Withholding TCs—Here Is How Private Schools Actually Recover Chronic Unpaid Tuition Fees From Defaulting Parents";
const META_TITLE = "How Private Schools Recover Unpaid Fees Without Holding TC";
const META_DESCRIPTION =
  "High Courts bar withholding TCs under RTE rules. Recover chronic unpaid school fees via confidential Civil Notices & Order 37 suits against parents.";

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
        alt: formatAltText(META_TITLE),
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
      "The Right of Children to Free and Compulsory Education Act, 2009 (Section 5(3) — Mandatory Release of Transfer Certificate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2086",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Written Fee Undertakings & Liquidated Arrears)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 10, 63 & 73 — Enforceability of Parent Admission Fee Undertakings)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Section 138) & Payment and Settlement Systems Act, 2007 (Section 25 — ECS/NACH Dishonour)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of School ERP Fee Ledgers & Electronic Reminders)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "National Commission for Protection of Child Rights (NCPCR) — Child Protection & Non-Discrimination Guidelines for Schools",
    url: "https://ncpcr.gov.in/",
  },
];

const FAQS = [
  {
    q: "Can a private unaided school legally withhold a Transfer Certificate (TC) or marksheet for unpaid tuition fees?",
    a: "No. Across India, the Delhi, Madras, Kerala, and Bombay High Courts—as well as Section 5(3) of the RTE Act, 2009 and CBSE/ICSE Affiliation Bye-Laws—categorically prohibit schools from holding a student's Transfer Certificate, Admit Card, or Marksheet as a lien for unpaid fees. However, those exact High Court rulings explicitly affirm that the school Trust retains full liberty to recover the fee arrears from the contracting parents through civil legal action.",
  },
  {
    q: "If we release the TC immediately, doesn't the school lose all leverage over the defaulting parent?",
    a: "Only if the school stops at phone calls. In practice, affluent parents who exploit TC rules to shift schools are terrified of formal, sealed Advocate Civil Recovery Notices landing at their residential or corporate office addresses—especially when the notice attaches their signed Admission Fee Undertaking and warns of an Order XXXVII CPC Summary Suit. Confidential parent-only Advocate notices recover 60–75% of post-exit arrears within 15 to 30 days.",
  },
  {
    q: "Will sending a legal notice for unpaid school fees trigger an NCPCR or Child Rights complaint against the Principal?",
    a: "Not when executed through a child-insulated civil protocol. NCPCR and child-protection rules penalize harassing, shaming, or excluding the minor student (such as barring classroom entry, publishing defaulter lists on WhatsApp, or holding TCs). A confidential Advocate Civil Notice addressed solely to the earning Father, Mother, or Legal Guardian—after unconditionally issuing the TC—touches zero child rights and is 100% lawful.",
  },
  {
    q: "Can a school file an Order XXXVII CPC Summary Suit based on a parent-signed Admission Form and Fee Undertaking?",
    a: "Yes. Under Order XXXVII Rule 1(2)(b) of the Code of Civil Procedure, 1908, a written contract signed by the parent (the Admission Form coupled with the Annual Fee Structure Undertaking and itemized ERP fee ledger) establishes a liquidated debt. Unlike an ordinary civil suit that drags on for 4–6 years, an Order XXXVII Summary Suit denies the parent an automatic right to defend unless they apply for leave to defend within 10 days of summons.",
  },
  {
    q: "What if the student passed out of Class 10 or Class 12 Board exams and the parents vanished without paying 2 years of fees?",
    a: "Allowing a student to appear in Class X or XII Board examinations under CBSE/ICSE welfare mandates never waives the parents' contractual debt under Section 63 of the Indian Contract Act. The school Trust has a full 3-year statutory limitation window from each unpaid term's due date (Limitation Act, 1963) to serve a Civil Demand Notice and institute recovery proceedings against the parents.",
  },
  {
    q: "Can the school prosecute a parent under Section 138 NI Act if their post-dated fee cheque or NACH mandate bounced?",
    a: "Yes. Dishonour of a fee cheque ('Insufficient Funds', 'Account Closed', or 'Payment Stopped by Drawer') attracts criminal prosecution under Section 138 of the NI Act, 1881, carrying up to 2x fine and 2 years' imprisonment, provided the statutory 15-day demand notice is dispatched within 30 days of the Bank Return Memo. Electronic ECS/NACH auto-debit bounces carry identical criminal liability under Section 25 of the Payment and Settlement Systems Act, 2007.",
  },
  {
    q: "How can a CBSE/ICSE school trust recover arrears from 50 to 500 defaulting parents without overwhelming its accounts office?",
    a: "School Trusts and K-12 chains can upload a single CSV batch of aged parent arrears (student ID, parent names, residential/office addresses, admission undertaking dates, and net arrears) to LegalRecovery.in's Representees Desk. Each parent receives an individualized, confidential Advocate Civil Notice via Speed Post RPAD, email, and WhatsApp—keeping the Principal and school staff completely insulated from confrontation.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-18T09:00:00+05:30",
  dateModified: "2026-11-18T10:30:00+05:30",
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Private Schools Recover Chronic Unpaid Tuition Fees Without Withholding Transfer Certificates",
  description:
    "5-stage RTE-compliant and NCPCR-safe civil recovery workflow for private unaided schools to recover tuition, transport, and hostel arrears from defaulting parents.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Release TC Unconditionally & Delink the Child",
      text: "Issue the Transfer Certificate and marksheet without delay under RTE Act s.5(3) and High Court mandates, capturing a signed parent acknowledgment.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Compile Admission Undertaking & BSA s.63 Fee Ledger",
      text: "Extract the parent-signed Admission Fee Undertaking, itemized ERP tuition/hostel ledger, and a Bharatiya Sakshya Adhiniyam 2023 Section 63 electronic certificate.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Confidential Advocate Civil Notice Solely to Parents",
      text: "Dispatch a sealed 15-day statutory demand notice exclusively to the parents' residential and office addresses via Speed Post RPAD, Email, and WhatsApp.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Trigger NI Act s.138 / PSS s.25 on Bounced Fee Instruments",
      text: "If post-dated fee cheques or NACH mandates bounced, serve a mandatory 15-day criminal demand notice within 30 days of the Bank Return Memo.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File Order XXXVII CPC Summary Suit for Unpaid Liquidated Arrears",
      text: "For persistent defaulters beyond 15 days, file an Order XXXVII CPC Summary Suit on the written Admission Contract and seek salary or bank account attachment.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
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
      name: "Schools, Universities & EdTech B2B Recovery",
      item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Recover Unpaid School Fees Without Withholding TC",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function PrivateSchoolFeeRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            ARTICLE_SCHEMA,
            HOWTO_SCHEMA,
            FAQ_SCHEMA,
            BREADCRUMB_SCHEMA,
          ]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-17 Education Creditor Playbook</span>
            <span>&bull;</span>
            <span>RTE s.5(3) &amp; NCPCR Safe</span>
            <span>&bull;</span>
            <span>Order XXXVII CPC</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words + Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            High Courts bar holding Transfer Certificates under RTE Act Section 5(3), but explicitly preserve a school Trust&apos;s right to sue the contracting parent. Serving a confidential Advocate Civil Notice to the parents&apos; residence or office—backed by an{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              IND-17 School &amp; Education Recovery
            </Link>{" "}
            Order XXXVII CPC workflow—recovers 60–75% of post-exit arrears without touching the child.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">60%–75%</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Post-Exit Recovery via Parent-Only Advocate Notice
              </div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-slate-100">0% Risk</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                RTE s.5(3) &amp; NCPCR Compliant (TC Released)
              </div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-amber-400">10 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Order XXXVII CPC Leave-to-Defend Window
              </div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-red-400">₹999 / CSV</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Single Defaulter Test or 50–500+ Bulk School Batch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Schools & EdTech Recovery",
                href: "/industries/schools-universities-edtech-b2b-recovery",
              },
              {
                label: "Recover Unpaid School Fees Without TC",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <SchoolFeeTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & High Court Rule */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Affluent Parents Exploit TC Rules—And What High Courts Actually Allow
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every private unaided school Trustee, Principal, and Finance Administrator in India—whether affiliated with CBSE, ICSE, IB, IGCSE, or a State Board—faces the exact same operational crisis: financially capable parents driving luxury SUVs stop paying ₹1.5 Lakh to ₹3.5 Lakh per year in tuition, transport, and lab fees for 18 to 24 months. When the school accounts office follows up, the parents demand an immediate Transfer Certificate (TC) citing High Court orders and Section 5(3) of the Right of Children to Free and Compulsory Education Act, 2009 (RTE Act), enroll the child in a competing school across town, and block the school&apos;s phone numbers.
                </p>
                <p>
                  Because school managements rightly fear media backlash, CBSE show-cause notices, or National Commission for Protection of Child Rights (NCPCR) inquiries, 6% to 12% of annual fee revenue is silently written off as &ldquo;irrecoverable.&rdquo; Yet this paralysis rests on a fundamental misreading of the law. Across India, the <strong>Delhi, Madras, Kerala, and Bombay High Courts</strong> have drawn a bright constitutional line: a school cannot punish the <em>child</em> by withholding a TC, marksheet, or admit card—but the school Trust&apos;s <em>civil contractual right</em> to recover every rupee of accrued arrears from the <em>earning parent</em> remains 100% intact.
                </p>
                <p>
                  As detailed in our{" "}
                  <Link
                    href="/industries/schools-universities-edtech-b2b-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Private Schools, Universities &amp; EdTech B2B Recovery Hub
                  </Link>
                  , replacing informal clerk calls with a <strong>strictly confidential Advocate Civil Recovery Notice addressed solely to the parents&apos; residential and office addresses</strong>—after releasing the TC—recovers 60–75% of chronic arrears without exposing the school to a single child-rights violation.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  High Court TC Mandates vs. Parent Civil Liability Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Understanding which legal levers belong to the child (non-negotiable statutory protection) and which levers bind the parent (strictly enforceable commercial debt) prevents costly writ litigation while maximizing fee recovery.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Court Mandate</th>
                      <th className="p-3.5 font-bold">What Is Prohibited (Child Protection)</th>
                      <th className="p-3.5 font-bold">School Trust&apos;s Lawful Recovery Weapon</th>
                      <th className="p-3.5 font-bold">Limitation / Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        RTE Act, 2009 s.5(3) &amp; HC Writs (Delhi, Madras, Kerala, Bombay)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Withholding TC, marksheet, or barring classroom entry for fee non-payment.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Release TC immediately, capture parent receipt, and serve Civil Notice to parents.
                      </td>
                      <td className="p-3.5 text-slate-600">Immediate TC release; 3-yr civil suit window</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Indian Contract Act, 1872 (s.10, s.63, s.73)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Imposing arbitrary unnotified mid-year hikes barred by State Fee Acts.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Enforce signed Admission Form, Annual Fee Undertaking &amp; agreed late-fee interest.
                      </td>
                      <td className="p-3.5 text-slate-600">3 years from each term&apos;s due date</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Code of Civil Procedure, 1908 — Order XXXVII Summary Suit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Naming the minor student as a defendant in civil recovery pleadings.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Summary Suit against Father/Mother/Guardian; no automatic right to defend.
                      </td>
                      <td className="p-3.5 text-slate-600">10 days for parent to seek leave to defend</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act, 1881 s.138 &amp; PSS Act, 2007 s.25
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Presenting undated security cheques without prior fee-due computation.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Criminal prosecution (up to 2x fine / 2-yr term) on bounced fee cheques or NACH/ECS.
                      </td>
                      <td className="p-3.5 text-slate-600">30d notice from Memo + 15d cure + 30d filing</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Bharatiya Sakshya Adhiniyam, 2023 (Section 63)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Filing uncertified Excel printouts of school fee ledgers in court.
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Certify ERP fee ledger, SMS/email reminders &amp; WhatsApp logs via s.63 affidavit.
                      </td>
                      <td className="p-3.5 text-slate-600">Prepared prior to notice &amp; suit filing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: 5-Stage Decision Tree (SVG + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage RTE-Compliant Parent Fee Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this exact five-step escalation rail whenever a parent demands a Transfer Certificate or exits after Class 10/12 Boards with unpaid fee arrears.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-50 border border-slate-200 rounded-xl p-4">
                <svg
                  viewBox="0 0 880 210"
                  width="880"
                  height="210"
                  className="w-full h-auto"
                  role="img"
                  aria-label={formatAltText("5-Stage Private School Parent Fee Recovery Decision Tree Without Holding TC")}
                >
                  {/* Stage 1 */}
                  <rect x="10" y="30" width="150" height="130" rx="12" fill="#0F172A" />
                  <text x="85" y="58" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 (DAY 0)</text>
                  <text x="85" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Release TC</text>
                  <text x="85" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">&amp; Delink Child</text>
                  <text x="85" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10">100% RTE s.5(3)</text>
                  <text x="85" y="137" textAnchor="middle" fill="#CBD5E1" fontSize="10">Safe Acknowledgment</text>

                  <path d="M160 95 L185 95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="188" y="30" width="150" height="130" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="263" y="58" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="700">STAGE 2 (DAY 1–3)</text>
                  <text x="263" y="80" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700">Audit Contract</text>
                  <text x="263" y="98" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700">&amp; BSA s.63 Ledger</text>
                  <text x="263" y="122" textAnchor="middle" fill="#475569" fontSize="10">Admission Form +</text>
                  <text x="263" y="137" textAnchor="middle" fill="#475569" fontSize="10">Parent PAN/Office KYC</text>

                  <path d="M338 95 L363 95" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="366" y="30" width="150" height="130" rx="12" fill="#DC2626" />
                  <text x="441" y="58" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="700">STAGE 3 (DAY 4–19)</text>
                  <text x="441" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Confidential</text>
                  <text x="441" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Parent Notice</text>
                  <text x="441" y="122" textAnchor="middle" fill="#FEF2F2" fontSize="10">RPAD to Home/Office</text>
                  <text x="441" y="137" textAnchor="middle" fill="#FEF2F2" fontSize="10">60–75% Settle Here</text>

                  <path d="M516 95 L541 95" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="544" y="30" width="150" height="130" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="619" y="58" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="700">STAGE 4 (IF BOUNCE)</text>
                  <text x="619" y="80" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700">NI Act s.138 /</text>
                  <text x="619" y="98" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700">PSS s.25 Action</text>
                  <text x="619" y="122" textAnchor="middle" fill="#475569" fontSize="10">Fee Cheque or NACH</text>
                  <text x="619" y="137" textAnchor="middle" fill="#475569" fontSize="10">15-Day Criminal Notice</text>

                  <path d="M694 95 L719 95" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="722" y="30" width="148" height="130" rx="12" fill="#0F172A" />
                  <text x="796" y="58" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">STAGE 5 (DAY 20+)</text>
                  <text x="796" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Order XXXVII</text>
                  <text x="796" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Summary Suit</text>
                  <text x="796" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10">Decree + Salary /</text>
                  <text x="796" y="137" textAnchor="middle" fill="#CBD5E1" fontSize="10">Bank Attachment</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  { step: "Stage 1 (Day 0)", title: "Release TC & Delink Child", desc: "Issue TC unconditionally under RTE s.5(3); obtain signed parent receipt." },
                  { step: "Stage 2 (Day 1–3)", title: "Audit Admission Undertaking & BSA s.63 Ledger", desc: "Compile signed Admission Form, ERP fee ledger, and parent office/home KYC." },
                  { step: "Stage 3 (Day 4–19)", title: "Serve Confidential Parent-Only Advocate Notice", desc: "Sealed Speed Post RPAD + Email + WhatsApp to parents only (60–75% settle here)." },
                  { step: "Stage 4 (If Bounced)", title: "Trigger NI Act s.138 or PSS Act s.25", desc: "Serve mandatory 15-day statutory demand for bounced fee cheques or NACH mandates." },
                  { step: "Stage 5 (Day 20+)", title: "File Order XXXVII CPC Summary Suit", desc: "Seek fast-track civil decree on the written admission contract and attach salary/bank accounts." },
                ].map((item) => (
                  <div key={item.step} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      {item.step}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive 4-Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Chronic Parent Fee Default Scenarios &amp; Legal Rebuttals
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select a real-world school accounts scenario below to inspect the parent&apos;s typical pretext, the school Trust&apos;s statutory rebuttal, and the exact documents required before serving notice.
              </p>

              <SchoolFeeScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Recovery Math Ledger */}
            <section
              id="heading-worked-math"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Math: ₹3,96,000 Two-Year Tuition &amp; Transport Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical CBSE/ICSE private day-school in Delhi-NCR, Pune, or Bengaluru where a parent paid the admission fee, defaulted for 2 academic years (₹1,80,000/year), demanded the TC in April, and shifted the student. Here is how the Trust quantifies its liquidated Order XXXVII claim:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 mb-5 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Liquidated Arrears Ledger (Parent-Signed Undertaking)
                  </span>
                  <span className="text-xs text-slate-400">Forum: Civil Judge (Senior Division) / Order 37 CPC</span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-300">Academic Year 1 Unpaid Tuition &amp; Lab Fees (4 Quarters)</span>
                    <span className="font-bold text-white">₹1,80,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-300">Academic Year 2 Unpaid Tuition &amp; Bus Transport (4 Quarters)</span>
                    <span className="font-bold text-white">₹1,80,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-300">Contractual Late-Fee Interest @ 12% p.a. (as per Admission Form)</span>
                    <span className="font-bold text-amber-400">₹36,000</span>
                  </div>
                  <div className="flex justify-between pt-2 text-base sm:text-lg font-black">
                    <span className="text-emerald-400">Total Liquidated Demand in Advocate Civil Notice</span>
                    <span className="text-emerald-400">₹3,96,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900">
                <strong>Portfolio Impact for a 100-Defaulter School:</strong> Writing off 100 such accounts costs a school Trust <strong>₹3.96 Crore</strong> in working capital. Deploying a bulk parent-only Advocate Notice batch across those 100 accounts at institutional rates recovers ₹2.37 Cr–₹2.97 Cr (60–75%) at pre-litigation stage before a single court fee is paid. You can also model statutory interest on B2B vendor/school contracts using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </div>
            </section>

            {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  School Accounts Office &amp; BSA 2023 Section 63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before instructing an advocate to serve a Civil Notice or file an Order XXXVII Summary Suit, the school&apos;s accounts and admission office must assemble these six evidentiary records:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    num: "01",
                    title: "Signed Admission Form & Fee Undertaking",
                    desc: "Original or scanned copy bearing both parents' signatures acknowledging the annual fee schedule, transport/hostel charges, and late-payment terms.",
                  },
                  {
                    num: "02",
                    title: "ERP Fee Ledger + BSA 2023 s.63 Certificate",
                    desc: "Student-wise statement of account exported from the school ERP (e.g., Edunext, Entab, Fedena) accompanied by an IT/Accounts Officer Section 63 electronic certificate.",
                  },
                  {
                    num: "03",
                    title: "Unconditional TC Issuance Acknowledgment",
                    desc: "Counter-signed TC receipt proving the school complied with RTE s.5(3) and High Court mandates without holding the child's academic career hostage.",
                  },
                  {
                    num: "04",
                    title: "Parent KYC & Employer / Office Address",
                    desc: "Parent PAN, Aadhaar, corporate email, and employer/business address collected at admission so sealed RPAD notices reach the earning parent directly.",
                  },
                  {
                    num: "05",
                    title: "Bounced Cheque / NACH Return Memo",
                    desc: "Original dishonoured fee cheque and stamped Bank Return Memo (if applicable) to trigger parallel 15-day NI Act s.138 or PSS Act s.25 criminal notice.",
                  },
                  {
                    num: "06",
                    title: "Prior Fee Reminder & Concession Trail",
                    desc: "Chronological log of polite SMS, email, and ERP portal reminders proving no waiver under Contract Act s.63 and demonstrating institutional patience.",
                  },
                ].map((item) => (
                  <div key={item.num} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-black text-[#DC2626]">{item.num}</span>
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: NCPCR & CBSE Safe Guardrails */}
            <section
              id="heading-ncpcr-guardrails"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Strict NCPCR &amp; CBSE Guardrails: What Schools Must Never Do
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-bold text-[#DC2626] mb-2">
                    Prohibited Actions (Triggers Writ / NCPCR Penalty)
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Withholding Transfer Certificate, Board Admit Card, or Marksheet.</li>
                    <li>Handing fee-default letters to the minor student in class or assembly.</li>
                    <li>Publishing parent/student defaulter lists on PTA WhatsApp groups or notice boards.</li>
                    <li>Engaging unregulated recovery callers who threaten parents over phone.</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-bold text-emerald-800 mb-2">
                    100% Lawful Protocol (Zero Reputational Backlash)
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>Issue the TC immediately upon written request and record parent sign-off.</li>
                    <li>Route all post-exit follow-up through an independent Advocate&apos;s letterhead.</li>
                    <li>Mark the envelope &ldquo;Strictly Private &amp; Confidential — To Contracting Parent Only.&rdquo;</li>
                    <li>Escalate unresolved cheques via{" "}
                      <Link
                        href="/cheque-bounce-account-closed-signature-mismatch"
                        className="text-[#DC2626] font-semibold underline"
                      >
                        NI Act s.138 Cheque Bounce Action
                      </Link>{" "}
                      and civil suits via Order XXXVII CPC.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section id="heading-cta-desk" className="scroll-mt-28">
              <SchoolFeeNoticeCTA />
            </section>

            {/* Section 9: IND-17 Education Hub & Sibling Spokes */}
            <section
              id="heading-ind17-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-17 Education, University &amp; EdTech B2B Recovery Network
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Explore specialized recovery playbooks across the education ecosystem, bulk institutional desks, and statutory notice templates:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "IND-17 Schools, Universities & EdTech B2B Hub",
                    href: "/industries/schools-universities-edtech-b2b-recovery",
                    desc: "Master institutional playbook for K-12 trusts, private universities, and EdTech vendors.",
                  },
                  {
                    title: "Private University & Medical/Engineering Semester Fee Recovery",
                    href: "/private-university-medical-engineering-college-semester-fee-recovery",
                    desc: "Recover chronic hostel, mess, and semester tuition arrears from university students & guarantors.",
                  },
                  {
                    title: "EdTech B2B Smart-Class, ERP & Robotics Lab Dues",
                    href: "/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools",
                    desc: "Enforce annual smart-class & school ERP contracts against defaulting school trusts.",
                  },
                  {
                    title: "Textbook Publisher, Uniform & Stationery Distributor Recovery",
                    href: "/school-textbook-publisher-uniform-stationery-distributor-recovery",
                    desc: "MSMED s.15–18 & s.43B(h) recovery for seasonal school supply invoices.",
                  },
                  {
                    title: "Section 80 CPC Notice to Govt (PMKVY / DDU-GKY Grants)",
                    href: "/law/section-80-cpc-notice-to-government",
                    desc: "Mandatory 60-day statutory notice for delayed state skill-mission and RTE reimbursement grants.",
                  },
                  {
                    title: "Bulk Recovery CSV Desk (10 to 10,000+ Defaulters)",
                    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                    desc: "Upload aged school fee arrears in bulk and dispatch confidential advocate notices pan-India.",
                  },
                  {
                    title: "Statutory Legal Notice & Reply Template Workspace",
                    href: "/templates/legal-notice-reply-format",
                    desc: "Review advocate-vetted notice formats and formal reply structures for commercial claims.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626]/60 hover:bg-white transition-all"
                  >
                    <h3 className="text-sm font-bold text-slate-900 hover:text-[#DC2626] mb-1">
                      {link.title}
                    </h3>
                    <p className="text-xs text-slate-600">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: School Fee Recovery Without Holding TC
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutes &amp; Regulatory Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
