import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SchoolFeeNoticeCTA from "./SchoolFeeNoticeCTA";
import SchoolFeeNoticeTOC from "./SchoolFeeNoticeTOC";
import SchoolFeeNoticeWorkspace from "./SchoolFeeNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH = "/templates/school-compliant-parent-fee-recovery-legal-notice-format";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository; attributed to Anuj Anand Malik (Advocate & Founder, AMA Legal Solutions).
const EXACT_H1 =
  "100% RTE, NCPCR & High-Court Safe Legal Notice Format for Private Schools to Recover Unpaid Fees From Defaulting Parents (Zero Child-Impact Language)";

const EXACT_TITLE = "RTE-Safe School Fee Arrears Legal Notice to Parents";

const EXACT_DESCRIPTION =
  "RTE s.5(3) & NCPCR-safe legal notice format: keeps student TC and exam rights untouched while demanding contractual fee arrears strictly from parents.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("RTE-Safe School Fee Arrears Legal Notice Format to Parents"),
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

const PRIMARY_SOURCES = [
  {
    title: "Right of Children to Free and Compulsory Education Act, 2009 — Section 5(3) (Unconditional Transfer Certificate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2086",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Suit on Written Parent Fee Undertakings)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Indian Contract Act, 1872 — Sections 10, 63 & 73 (Enforceability of Enrollment Financial Undertakings)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Section 138 & PSS Act, 2007 — Section 25 (Fee Cheque & ECS/NACH Bounce)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic ERP Ledger & WhatsApp/Email Service Certificate)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "National Commission for Protection of Child Rights (NCPCR) — School Child-Protection & Non-Discrimination Rules",
    url: "https://ncpcr.gov.in/",
  },
];

const FAQS = [
  {
    question: "Why must a school fee recovery notice include an explicit RTE s.5(3) & NCPCR disclaimer?",
    answer:
      "Local lawyers unfamiliar with education jurisprudence often draft generic recovery notices threatening to withhold a student's Transfer Certificate (TC), Board Roll Number, or exam admit card. Parents screenshot such threats for social media or District Education Officer (DEO) complaints, triggering regulatory show-cause notices. An explicit Safe-Harbour Disclaimer confirms that the child's academic and TC rights remain 100% untouched while enforcing the Trust's civil contract solely against earning parents.",
  },
  {
    question: "Can a school send this legal notice after already issuing the Transfer Certificate (TC)?",
    answer:
      "Yes—and in fact, issuing the TC unconditionally under RTE Act s.5(3) strengthens the school Trust's legal standing. Multiple High Courts have held that while schools cannot hold TCs or marksheets as a lien, the Trust retains full independent liberty to recover unpaid tuition, transport, and lab arrears through a civil demand notice and an Order XXXVII CPC summary suit against the contracting parents.",
  },
  {
    question: "How does the Admission Enrollment Financial Undertaking make Order XXXVII CPC applicable?",
    answer:
      "Under Order XXXVII Rule 1(2) of the Code of Civil Procedure, summary suits lie on written contracts for liquidated sums of money. When the school attaches the signed Admission Fee Undertaking (acknowledging quarterly/annual fee schedules under the Indian Contract Act) alongside the ERP fee ledger, the debt becomes a liquidated contractual claim rather than an open-ended dispute.",
  },
  {
    question: "Can private universities use this format for unpaid semester tuition and hostel fees?",
    answer:
      "Yes. Preset 2 in the workspace above is tailored for private universities, medical/engineering colleges, and residential campuses. It addresses the parent/financial guarantor and adult student as co-obligors under the signed Hostel and Semester Fee Undertaking while keeping UGC/AICTE academic progression norms insulated from civil debt recovery.",
  },
  {
    question: "What if a parent's school-fee cheque or NACH/ECS auto-debit bounces?",
    answer:
      "If a fee cheque or ECS/NACH mandate is dishonoured, select Preset 3 in the builder to include the mandatory 15-day statutory demand under Section 138 of the NI Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007. This notice must be dispatched within 30 days of receiving the bank return memo and addressed strictly to the parent who signed the instrument.",
  },
  {
    question: "Can a school Trust send 100+ parent fee notices at once without media or DEO backlash?",
    answer:
      "Yes. When every notice in the batch carries the Child-Safe Explicit Disclaimer, omits minor-facing threats, and is dispatched confidentially via Official Parent Email, WhatsApp PDF, and Speed Post RPAD (never via student school bags or public WhatsApp groups), school trustees can safely clear 50 to 500+ chronic defaulter accounts in one cycle.",
  },
];

export default function SchoolCompliantParentFeeNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_PATH}`,
        },
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        inLanguage: "en-IN",
      },
      {
        "@type": "CreativeWork",
        name: EXACT_TITLE,
        description: EXACT_DESCRIPTION,
        url: `${SITE_URL}${PAGE_PATH}`,
        genre: "Legal Notice Format & Clause Workspace",
        learningResourceType: "Template",
        inLanguage: "en-IN",
        creator: {
          "@type": "Person",
          name: "Anuj Anand Malik",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
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
            name: "Schools & EdTech Recovery",
            item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "RTE-Safe Parent Fee Notice Format",
            item: `${SITE_URL}${PAGE_PATH}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-17 · Education Template</span>
            <span>·</span>
            <span>RTE s.5(3) &amp; NCPCR Safe-Harbour</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Safe-Harbour Summary
            </span>
            Under our{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline hover:text-white font-bold"
            >
              Schools, Universities &amp; EdTech B2B Recovery Hub
            </Link>
            , private schools and colleges cannot withhold Transfer Certificates (TC) or Board Roll Numbers under RTE Act s.5(3). This advocate-vetted template explicitly insulates the student&apos;s academic rights while enforcing signed parent fee undertakings under Order XXXVII CPC.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">100% Safe</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Zero Child-Impact &amp; RTE s.5(3) Compliant
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-slate-100">Order 37</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Parent Admission Undertaking Summary Suit
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-amber-400">15 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Cure Window &amp; NI s.138 / PSS s.25 Demand
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-red-400">10–10,000+</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Batch ERP CSV Parent Notice Dispatch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Schools & EdTech Recovery",
                href: "/industries/schools-universities-edtech-b2b-recovery",
              },
              {
                label: "RTE-Safe Parent Fee Notice Format",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <SchoolFeeNoticeTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Interactive Workspace */}
            <section
              id="notice-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive RTE-Safe Parent Fee Recovery Notice Builder
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Select your institutional scenario below—<strong>Private School Parent Fee Arrears (Active or Post-TC)</strong>, <strong>Private University Semester &amp; Hostel Dues</strong>, or <strong>Dishonoured Fee Cheque / NACH Mandate (NI s.138 / PSS s.25)</strong>—customize the Trust, parent, and ERP ledger fields, and copy or print the Word-ready notice text.
              </p>

              <SchoolFeeNoticeWorkspace />
            </section>

            {/* Section 2: Gap to Fill / Reputation Risk */}
            <section
              id="reputation-risk-gap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Harsh Local Drafts Trigger DEO Show-Cause &amp; Viral Backlash
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                School principals and Trust secretaries across India often hesitate to send legal notices for chronic 6–18 month fee arrears because an amateur local draft can backfire overnight. When an unvetted notice threatens &ldquo;expulsion,&rdquo; &ldquo;withholding the CBSE/ICSE Board Roll Number,&rdquo; or &ldquo;blocking the Transfer Certificate,&rdquo; defaulting parents immediately upload a photo of that notice to X (Twitter) or local television channels and file a complaint before the District Education Officer (DEO) or State Commission for Protection of Child Rights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] block">
                    What Triggers DEO &amp; NCPCR Penalties
                  </span>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Threatening to withhold TC, marksheets, or character certificates for unpaid fees.</li>
                    <li>Handing sealed fee warnings to minor students in classrooms or school buses.</li>
                    <li>Publishing parent defaulter lists on class WhatsApp groups or school notice boards.</li>
                    <li>Barring a child from appearing in unit tests or board practicals over parent arrears.</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                    What Our Child-Safe Format Protects
                  </span>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>Opens with an explicit RTE s.5(3) &amp; NCPCR Safe-Harbour Non-Interference Clause.</li>
                    <li>Confirms the TC or exam eligibility is 100% issued/protected without condition.</li>
                    <li>Addresses the demand strictly to earning Parents/Guardians as civil contracting parties.</li>
                    <li>Enables Trust boards to dispatch 100+ notices safely with zero reputational exposure.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: 4 Mandatory Clauses */}
            <section
              id="child-safe-harbour-clauses"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The 4 Mandatory Child-Insulated &amp; Contractual Notice Clauses
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Every <strong>rte and cbse compliant school fee recovery notice</strong> generated in our workspace combines four statutory pillars so that the parent cannot weaponize child-rights laws while the Trust preserves summary civil remedies:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Clause Pillar</th>
                      <th className="p-3.5 font-bold">Statutory Basis</th>
                      <th className="p-3.5 font-bold">Legal Effect for School Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        1. Child-Safe Harbour Disclaimer
                      </td>
                      <td className="p-3.5 text-slate-700">
                        RTE Act, 2009 s.5(3) &amp; NCPCR Guidelines
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Neutralizes DEO/NCPCR complaints by proving the student&apos;s TC, marksheet, and exam rights remain untouched.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        2. Parent Financial Undertaking
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Indian Contract Act, 1872 s.10, s.63 &amp; s.73
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Fixes personal civil liability on the Father, Mother, or Legal Guardian who signed the Admission Fee Undertaking.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        3. Order XXXVII CPC Warning
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CPC, 1908 Order XXXVII &amp; BSA 2023 s.63
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Converts ERP fee ledgers + signed admission forms into a fast-track summary suit where parents must seek court leave to defend.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        4. Dishonour Remedy (If Applicable)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act s.138 / PSS Act s.25 (ECS/NACH)
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Triggers criminal accountability and 20% interim compensation u/s 143A solely against the cheque/mandate drawer.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Post-TC, University Hostel & B2B Trust Nuances */}
            <section
              id="enrollment-undertaking-and-tc"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Post-TC Arrears, University Hostel Dues &amp; Parent Undertakings
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>Dignified Fee Arrears Legal Notice After TC Issued:</strong> Many parents wait until March/April, demand a Transfer Certificate under RTE s.5(3), and then block the school accounts office&apos;s phone numbers after enrolling the child elsewhere. Because the school has already complied with the law by releasing the TC, a formal advocate notice sent to the parent&apos;s residential and corporate email addresses establishes clean equity before the Civil Judge.
                </p>
                <p>
                  <strong>School Enrollment Financial Undertaking Form:</strong> To maximize summary suit enforceability, school Trusts should ensure their annual admission or re-enrollment form contains a clear <em>School Enrollment Financial Undertaking</em> signed by both parents, specifying quarterly due dates, transport/hostel opt-in fees, and consent to electronic service.
                </p>
                <p>
                  <strong>University Unpaid Hostel &amp; Tuition Fee Demand Sample:</strong> Higher education registrars face similar defaults where graduating or mid-semester students vacate hostels leaving ₹1.5–₹4.5 Lakh unpaid. Preset 2 in the builder adapts the demand for adult students and parent co-obligors without violating UGC certificate-retention rules. (For B2B vendors recovering software, smart-class, or textbook dues <em>from</em> a School Trust, see our{" "}
                  <Link
                    href="/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    EdTech &amp; Smart-Class B2B School Trust Recovery Guide
                  </Link>
                  .)
                </p>
              </div>
            </section>

            {/* Section 5: Multi-Channel Service & BSA s.63 */}
            <section
              id="service-and-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Multi-Channel Dispatch, BSA s.63 Proof &amp; Mandatory Annexures
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Never send a fee notice through a student&apos;s diary or school bus attendant. Always dispatch confidentially through all three verifiable parent channels and retain a <strong>Section 63 BSA 2023</strong> electronic evidence certificate signed by the School Accounts Officer or ERP Administrator:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Dispatch Channel</th>
                      <th className="p-3.5 font-bold">Target Recipient</th>
                      <th className="p-3.5 font-bold">Court Evidentiary Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">1. Speed Post RPAD</td>
                      <td className="p-3.5 text-slate-700">Parent&apos;s Residential Address</td>
                      <td className="p-3.5 text-slate-600">
                        Presumption of valid service u/s 27 General Clauses Act, 1897 with India Post tracking POD.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">2. Official Parent Email</td>
                      <td className="p-3.5 text-slate-700">Father &amp; Mother ERP Email IDs</td>
                      <td className="p-3.5 text-slate-600">
                        Admissible electronic service record under BSA 2023 s.63 (attach timestamped SMTP/header PDF).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">3. Confidential WhatsApp PDF</td>
                      <td className="p-3.5 text-slate-700">Registered Parent Mobile (1-to-1)</td>
                      <td className="p-3.5 text-slate-600">
                        Double-tick read receipt proves actual notice before filing Order 37 CPC or s.138 NI Act.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 block">
                  Mandatory Annexure Checklist Before Sending
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1 list-disc pl-4">
                  <li>Signed Admission Form &amp; Financial Fee Undertaking executed by Parents/Guardians.</li>
                  <li>Itemized School ERP Fee Ledger showing tuition, transport, hostel, and prior part-payments.</li>
                  <li>Copy of issued Transfer Certificate (if student exited) to prove RTE s.5(3) compliance.</li>
                  <li>Bank Return Memo (if cheque or ECS/NACH bounced) + Trust Board Resolution authorizing recovery.</li>
                </ul>
              </div>
            </section>

            {/* Dual-Track CTA */}
            <SchoolFeeNoticeCTA />

            {/* Section 6: IND-17 Cluster Cross-Links */}
            <section
              id="ind17-recovery-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Education &amp; Institutional Recovery Guides (IND-17 Network)
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/industries/schools-universities-edtech-b2b-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70 space-y-1"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Parent Industry Hub
                  </span>
                  <div className="text-sm font-extrabold text-slate-900">
                    Schools, Universities &amp; EdTech B2B Recovery Hub
                  </div>
                  <p className="text-xs text-slate-600">
                    Complete 8-track escalation matrix for K-12 Trusts, universities, coaching chains &amp; EdTech vendors.
                  </p>
                </Link>

                <Link
                  href="/how-private-schools-recover-unpaid-fees-without-withholding-tc"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70 space-y-1"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Operational SOP
                  </span>
                  <div className="text-sm font-extrabold text-slate-900">
                    How Private Schools Recover Unpaid Fees Without Holding TC
                  </div>
                  <p className="text-xs text-slate-600">
                    High Court rulings, 5-stage escalation tree &amp; worked ₹3.96 Lakh fee recovery math.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70 space-y-1"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Batch CSV Desk
                  </span>
                  <div className="text-sm font-extrabold text-slate-900">
                    Bulk Recovery for 10 to 10,000+ Fee Defaulters
                  </div>
                  <p className="text-xs text-slate-600">
                    Upload school ERP defaulter spreadsheets for automated advocate notice dispatch.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70 space-y-1"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Interactive Calculator
                  </span>
                  <div className="text-sm font-extrabold text-slate-900">
                    MSME &amp; Commercial Delayed Payment Interest Calculator
                  </div>
                  <p className="text-xs text-slate-600">
                    Compute statutory compound interest for B2B EdTech, textbook &amp; campus vendor claims.
                  </p>
                </Link>

                <Link
                  href="/cheque-bounce-account-closed-signature-mismatch"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70 space-y-1"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                    NI Act s.138 Seed
                  </span>
                  <div className="text-sm font-extrabold text-slate-900">
                    Cheque Bounce: Account Closed &amp; Signature Mismatch
                  </div>
                  <p className="text-xs text-slate-600">
                    Enforce Section 138 criminal liability when parent fee cheques dishonour for any reason.
                  </p>
                </Link>

                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50/70 space-y-1"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Govt / Grant Seed
                  </span>
                  <div className="text-sm font-extrabold text-slate-900">
                    Section 80 CPC Notice to Government &amp; State Depts
                  </div>
                  <p className="text-xs text-slate-600">
                    Statutory 60-day notice for RTE reimbursement arrears, PMKVY &amp; state university grants.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 7: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: RTE-Safe School Fee Notices
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Primary Statutory Sources */}
            <section className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 block">
                Primary Statutory Bare Acts &amp; Official Authorities
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-white underline decoration-slate-600 hover:decoration-red-400"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
