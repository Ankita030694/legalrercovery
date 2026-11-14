import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HospitalDischargeTableOfContents from "./HospitalDischargeTableOfContents";
import HospitalDischargeScenarioTabs from "./HospitalDischargeScenarioTabs";
import HospitalDischargeCTA from "./HospitalDischargeCTA";

export const revalidate = 86400;

const PAGE_URL = "/hospital-unpaid-patient-bill-recovery-without-detaining-patient";
const EXACT_H1 =
  "Hospitals Cannot Detain Patients or Bodies—Here Is the Lawful Post-Discharge Protocol to Recover Unpaid ICU & Inpatient Bills";
const META_TITLE = "How Hospitals Legally Recover Unpaid Patient Bills";
const META_DESCRIPTION =
  "Bombay & Delhi HCs criminalize patient detention for unpaid bills. Enforce Discharge Undertakings & 15-day Civil Legal Notices to recover dues lawfully.";

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
        alt: formatAltText("How Hospitals Legally Recover Unpaid Patient Bills Without Detention"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "Article 21 & BNS s.127 (Wrongful Confinement)",
    trigger: "Holding back a medically fit patient, infant, or mortal remains over unpaid hospital bills",
    timeline: "Immediate criminal & writ liability; zero tolerance across High Courts",
    interimPower: "Police FIR, habeas corpus writs, Clinical Establishments Act licence suspension",
    targetAssets: "Hospital Medical Superintendent, Billing Head & Directors face personal criminal risk",
    verdict: "Strict Compliance Red-Line",
    tone: "red",
  },
  {
    remedy: "Indian Contract Act s.126 & s.128 (Co-Guarantor)",
    trigger: "Attendant / relative signs Admission & Discharge Undertaking as co-extensive surety",
    timeline: "Immediate liability upon default; no need to sue patient first under s.128",
    interimPower: "Allows hospital to proceed directly against earning attendant's salary/bank assets",
    targetAssets: "Attendant co-obligor's bank accounts, salary & movable property",
    verdict: "Primary Civil Anchor",
    tone: "emerald",
  },
  {
    remedy: "CPC Order XXXVII (Summary Recovery Suit)",
    trigger: "Liquidated unpaid inpatient bill backed by signed Discharge Undertaking / Promissory Note",
    timeline: "3–9 months (defendant has 10 days to enter appearance; no trial without triable defense)",
    interimPower: "Summary money decree without protracted multi-year civil trial",
    targetAssets: "Joint & several decree against discharged patient and attendant co-guarantor",
    verdict: "Fast-Track Money Decree",
    tone: "emerald",
  },
  {
    remedy: "Indian Contract Act s.70 (Non-Gratuitous Service)",
    trigger: "Emergency trauma or LAMA walkout where attendant refuses to sign discharge undertaking",
    timeline: "3-year limitation from date of discharge / final itemized bill",
    interimPower: "Establishes statutory quantum meruit right to recover reasonable medical charges",
    targetAssets: "Patient / estate assets supported by HMS logs, consent forms & implant stickers",
    verdict: "Fallback Civil Remedy",
    tone: "amber",
  },
  {
    remedy: "NI Act s.138 & s.139 (Discharge Cheque Bounce)",
    trigger: "Post-dated cheque issued by patient or relative at discharge returns unpaid / 'Stop Payment'",
    timeline: "30-day statutory notice from return memo; 15-day cure; 30-day Magistrate filing",
    interimPower: "Criminal summons + Section 143A interim compensation up to 20% of cheque value",
    targetAssets: "Drawer's personal liberty & bank balances (upheld in ICDS v. Beena Shabeer)",
    verdict: "High-Leverage Criminal Lever",
    tone: "emerald",
  },
];

const DISCHARGE_PACK_DOCS = [
  {
    code: "DOC-01",
    title: "Admission Co-Obligor & KYC Verification Sheet",
    statute: "Indian Contract Act, 1872 — Sections 126 & 128",
    detail:
      "Capture Aadhaar/PAN copies and live mobile/email OTP or wet signature of the primary attendant at admission. Include a plain-English clause stating the attendant acts as a co-extensive surety jointly liable with the patient for all ICU, surgical, pharmacy, and implant charges.",
  },
  {
    code: "DOC-02",
    title: "Itemized Interim & Final Bill Acknowledgment",
    statute: "Indian Contract Act s.70 & BSA 2023 s.63",
    detail:
      "Have the attendant sign the itemized summary (bed days, OT consumables, pharmacy, implant batch stickers) prior to clinical release. Even if they request time to pay, signing the bill eliminates later 'inflated billing' defenses in Order XXXVII suits.",
  },
  {
    code: "DOC-03",
    title: "Voluntary Discharge Undertaking & Repayment Schedule",
    statute: "Order XXXVII Rule 1(2) CPC Written Contract",
    detail:
      "Explicitly state: 'The hospital has cleared and released the patient unconditionally without detention. Out of the admitted bill of ₹X, ₹Y is paid and ₹Z shall be paid within 15 days / in instalments.' This converts an open ledger into a liquidated written contract.",
  },
  {
    code: "DOC-04",
    title: "Stamped Demand Promissory Note (DPN)",
    statute: "Negotiable Instruments Act s.4 & Stamp Act",
    detail:
      "For balances exceeding ₹50,000, execute a properly stamped Demand Promissory Note signed by both patient (if medically fit) and attendant co-obligor. A DPN qualifies directly for summary adjudication under Order XXXVII CPC.",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    item: "Verified Admission Form & Attendant Co-Guarantor KYC",
    purpose:
      "Proves identity, permanent residential address for Speed Post RPAD service, and co-extensive suretyship under Section 128 Contract Act.",
  },
  {
    item: "Signed Discharge Summary & Unconditional Release Timestamp",
    purpose:
      "Demonstrates zero wrongful confinement (BNS s.127) by proving the patient or mortal remains were released promptly upon clinical clearance.",
  },
  {
    item: "Itemized HMS Bill, Pharmacy Invoices & Implant Batch Stickers",
    purpose:
      "Substantiates every rupee claimed under Section 70/73 Contract Act and defeats consumer-forum counter-allegations of arbitrary overcharging.",
  },
  {
    item: "Stamped Discharge Undertaking / Promissory Note (or Witnessed Refusal Note)",
    purpose:
      "Establishes liquidated debt for an Order XXXVII CPC Summary Suit, or documents refusal to sign in the presence of two hospital staff witnesses.",
  },
  {
    item: "BSA 2023 Section 63 Electronic Record Certificate",
    purpose:
      "Certifies Hospital Management System (HMS) ledgers, CCTV discharge-desk footage, WhatsApp payment reminders, and email delivery logs for court admissibility.",
  },
  {
    item: "Bank Cheque Return Memo & Speed Post RPAD Tracking Receipts",
    purpose:
      "Mandatory statutory proof for Section 138 NI Act prosecution (if a discharge cheque bounced) and Section 27 General Clauses Act deemed service.",
  },
];

const FAQS = [
  {
    question: "Can a private hospital legally detain a patient or dead body for unpaid ICU bills in India?",
    answer:
      "No. Repeated rulings by the Bombay High Court, Delhi High Court, Madras High Court, and National Human Rights Commission (NHRC) Patients' Rights Charter establish that detaining a medically fit patient or withholding mortal remains over unpaid bills violates Article 21 of the Constitution and attracts criminal prosecution for wrongful confinement under Section 127 of the Bharatiya Nyaya Sanhita (BNS). Hospitals must release the patient unconditionally and pursue civil recovery.",
  },
  {
    question: "How can a hospital actually recover unpaid bills after releasing the patient?",
    answer:
      "Recovery depends on the paperwork executed before and at discharge. If the hospital's admission and discharge desk obtains verified KYC, an itemized bill acknowledgment, an attendant co-guarantor undertaking under Section 128 of the Indian Contract Act, and a stamped Demand Promissory Note, a 15-day Advocate Legal Notice followed by an Order XXXVII CPC Summary Suit gives the hospital a fast-track money decree without a full trial.",
  },
  {
    question: "Is the patient's attendant or relative legally liable to pay if they signed the admission form?",
    answer:
      "Yes, provided the admission and discharge forms contain a clear co-obligor / suretyship clause under Sections 126 and 128 of the Indian Contract Act, 1872. Under Section 128, the liability of a surety is co-extensive with that of the principal debtor, meaning the hospital can legally serve a demand notice and file a civil recovery suit directly against the earning attendant without waiting for the patient.",
  },
  {
    question: "What if the family takes LAMA (Left Against Medical Advice) and refuses to sign any undertaking?",
    answer:
      "Never block a LAMA exit. Release the patient immediately after recording clinical LAMA consent. On the financial ledger, have two hospital staff members countersign a contemporaneous endorsement stating 'Itemized bill of ₹X presented; attendant refused to sign undertaking; patient released freely.' You can still recover the full bill under Section 70 of the Indian Contract Act (compensation for non-gratuitous services) backed by HMS logs and a BSA s.63 certificate.",
  },
  {
    question: "What if a relative gives a cheque at discharge and then instructs the bank to 'Stop Payment'?",
    answer:
      "A 'Stop Payment' instruction on a cheque issued toward an admitted hospital bill attracts criminal liability under Section 138 of the Negotiable Instruments Act, 1881. In ICDS Ltd. v. Beena Shabeer, the Supreme Court held that even a cheque issued by a guarantor or third-party relative toward another person's debt is fully enforceable under Section 138. Serve the statutory notice strictly within 30 days of receiving the bank return memo.",
  },
  {
    question: "How long does a hospital have to file a civil recovery suit for unpaid medical bills?",
    answer:
      "Under the Limitation Act, 1963 (Article 18 / Article 35), a hospital has 3 years from the date of discharge (or from the date of dishonour/default on a written undertaking or promissory note) to file a civil recovery suit. However, pre-litigation Advocate Legal Notices sent within 15–30 days of discharge achieve the highest voluntary settlement rates before addresses or contact numbers change.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Indian Contract Act, 1872 (Sections 70, 73, 126 & 128) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Sections 4, 138 & 139) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Ministry of Health & Family Welfare (MoHFW) — Clinical Establishments & Patients' Rights Charter",
    url: "https://clinicalestablishments.mohfw.gov.in/",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
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
  datePublished: "2026-11-14T10:00:00+05:30",
  dateModified: "2026-11-14T10:00:00+05:30",
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Lawful Post-Discharge Hospital Bill Recovery Without Patient Detention in India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Hospitals Legally Recover Unpaid Patient Bills Post-Discharge Without Detention",
  description:
    "Article-21 compliant 3-stage discharge desk documentation and 15-day civil legal notice protocol for Indian hospitals and nursing homes.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Execute Attendant Co-Guarantor KYC at Admission",
      text: "Verify Aadhaar/PAN of the primary attendant and incorporate a Section 128 Indian Contract Act co-extensive suretyship clause into the admission contract.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Release Patient Unconditionally Against Discharge Undertaking",
      text: "Release the patient or mortal remains without detention. Obtain itemized bill sign-off plus a stamped Discharge Undertaking or Demand Promissory Note.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve 15-Day Advocate Legal Notice & File Order XXXVII Summary Suit",
      text: "On default, dispatch a tri-channel Advocate Notice (Email + WhatsApp + Speed Post RPAD) jointly to patient and attendant, followed by an Order XXXVII CPC Summary Suit or Section 138 NI Act complaint if a cheque bounced.",
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
      name: "Hospitals & Healthcare Recovery",
      item: `${SITE_URL}/industries/hospitals-doctors-healthcare-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Post-Discharge Patient Bill Recovery",
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

export default function HospitalUnpaidPatientBillRecoveryPage() {
  const breadcrumbItems = [
    { label: "Hospitals & Healthcare Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "Post-Discharge Patient Bill Recovery", href: PAGE_URL },
  ];

  return (
    <>
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-03 Healthcare RCM Playbook</span>
              <span>&bull;</span>
              <span>Article 21 &amp; BNS Safe</span>
              <span>&bull;</span>
              <span>Order XXXVII CPC</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              Under Indian High Court rulings and Article 21, hospitals cannot detain discharged patients or mortal remains over unpaid bills. Instead, our{" "}
              <Link
                href="/industries/hospitals-doctors-healthcare-recovery"
                className="text-red-300 underline decoration-red-400/70 hover:text-white font-semibold"
              >
                Hospital &amp; Healthcare Legal Recovery Desk
              </Link>{" "}
              pairs attendant co-guarantor undertakings (Contract Act s.128) with 15-day Advocate Notices and Order XXXVII CPC Summary Suits to recover ICU dues lawfully.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">Zero Detention</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Article 21 &amp; BNS s.127 Compliant Release
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">15-Day Notice</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Patient + Attendant Co-Guarantor Demand
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">Order XXXVII</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Summary Suit on Promissory Note / Bill
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">&#8377;999 Test</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Single Live Case or Bulk CSV RCM Desk
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <HospitalDischargeTableOfContents />

            {/* Right Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Why Detention Backfires */}
              <section
                id="heading-detention-ban"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Why Detaining Patients or Bodies Backfires Criminally &amp; Civilly
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Every multi-specialty hospital, nursing home, and trauma centre in India faces the same revenue-cycle dilemma: emergency stabilization cannot be denied for want of an advance deposit, yet once the patient is stabilized—or passes away after prolonged ICU care—the family refuses to clear the final ₹1.5 Lakh to ₹20 Lakh balance.
                  </p>
                  <p>
                    When billing desks hold back discharge summaries, refuse gate passes, or withhold mortal remains to force payment, they cross a fatal legal line. Both the <strong>Bombay High Court</strong> and <strong>Delhi High Court</strong>, alongside the NHRC Patients&apos; Rights Charter, have ruled that keeping a medically fit patient in the hospital against their will constitutes <strong>wrongful confinement</strong> (now punishable under Section 127 of the Bharatiya Nyaya Sanhita, 2023) and a direct violation of <strong>Article 21</strong> of the Constitution of India.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800">
                    <strong className="text-[#DC2626] block mb-1">
                      The Operational Gap Courts Ignore:
                    </strong>
                    High Court judgments repeatedly instruct hospitals: <em>&ldquo;Release the patient unconditionally and file a civil recovery suit.&rdquo;</em> Yet almost no hospital billing manual explains how to structure the admission form, itemized bill acknowledgment, and attendant co-guarantor promissory note so that a ₹999 post-discharge Advocate Legal Notice actually recovers the dues without a five-year trial.
                  </div>
                </div>
              </section>

              {/* Section 2: Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Post-Discharge Recovery Decision Tree: Emergency to Order XXXVII
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Use this 4-gate operational decision tree at the billing and discharge desk to convert uncollected inpatient balances into enforceable civil or criminal recovery tracks without triggering wrongful-confinement liability.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <svg
                    viewBox="0 0 880 290"
                    width={880}
                    height={290}
                    className="w-full h-auto"
                    role="img"
                    aria-label="Hospital post-discharge unpaid bill legal recovery decision tree"
                  >
                    {/* Step 1 */}
                    <rect x="15" y="95" width="185" height="95" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="107" y="122" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">GATE 1: ADMISSION</text>
                    <text x="107" y="143" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Attendant KYC +</text>
                    <text x="107" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">s.128 Co-Guarantor</text>
                    <text x="107" y="177" textAnchor="middle" fill="#94A3B8" fontSize="10">Aadhaar, PAN, Mobile</text>

                    <line x1="200" y1="142" x2="235" y2="142" stroke="#94A3B8" strokeWidth="2" />
                    <polygon points="235,137 245,142 235,147" fill="#94A3B8" />

                    {/* Step 2 */}
                    <rect x="245" y="95" width="190" height="95" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="340" y="122" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">GATE 2: DISCHARGE</text>
                    <text x="340" y="143" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Unconditional Release</text>
                    <text x="340" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">+ Signed Undertaking</text>
                    <text x="340" y="177" textAnchor="middle" fill="#94A3B8" fontSize="10">Itemized Bill + DPN</text>

                    {/* Split arrows */}
                    <line x1="435" y1="142" x2="475" y2="65" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="435" y1="142" x2="475" y2="142" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="435" y1="142" x2="475" y2="220" stroke="#94A3B8" strokeWidth="2" />

                    {/* Branch A: Cheque */}
                    <rect x="475" y="20" width="195" height="72" rx="10" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="572" y="42" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="bold">TRACK A: CHEQUE BOUNCE</text>
                    <text x="572" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">30-Day s.138 NI Act Notice</text>
                    <text x="572" y="76" textAnchor="middle" fill="#94A3B8" fontSize="10">Stop-Payment / Insufficient</text>

                    {/* Branch B: Signed Undertaking / DPN */}
                    <rect x="475" y="106" width="195" height="72" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                    <text x="572" y="128" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">TRACK B: SIGNED DPN / BILL</text>
                    <text x="572" y="146" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">15-Day Advocate Notice</text>
                    <text x="572" y="162" textAnchor="middle" fill="#94A3B8" fontSize="10">Order XXXVII Summary Suit</text>

                    {/* Branch C: Refused to Sign / LAMA */}
                    <rect x="475" y="192" width="195" height="72" rx="10" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.5" />
                    <text x="572" y="214" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontWeight="bold">TRACK C: LAMA / REFUSAL</text>
                    <text x="572" y="232" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Witnessed Endorsement</text>
                    <text x="572" y="248" textAnchor="middle" fill="#94A3B8" fontSize="10">s.70 Contract Act + BSA s.63</text>

                    {/* Merge to Execution */}
                    <line x1="670" y1="56" x2="710" y2="142" stroke="#DC2626" strokeWidth="2" />
                    <line x1="670" y1="142" x2="710" y2="142" stroke="#DC2626" strokeWidth="2" />
                    <line x1="670" y1="228" x2="710" y2="142" stroke="#DC2626" strokeWidth="2" />

                    <rect x="710" y="95" width="155" height="95" rx="12" fill="#DC2626" />
                    <text x="787" y="125" textAnchor="middle" fill="#FEE2E2" fontSize="10" fontWeight="bold">ENFORCEMENT</text>
                    <text x="787" y="146" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Pre-Suit Cure</text>
                    <text x="787" y="163" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">or Decree / s.138</text>
                    <text x="787" y="180" textAnchor="middle" fill="#FECACA" fontSize="10">Tri-Channel Proof</text>
                  </svg>
                </div>

                {/* Mobile Stacked Decision Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      gate: "Gate 1: Admission Desk",
                      desc: "Collect Attendant Aadhaar/PAN + s.128 Co-Guarantor signature on admission contract.",
                    },
                    {
                      gate: "Gate 2: Unconditional Discharge",
                      desc: "Release patient or mortal remains immediately; obtain itemized bill sign-off + Discharge Undertaking / DPN.",
                    },
                    {
                      gate: "Gate 3: Track Selection (Day 1–15)",
                      desc: "Cheque bounced -> 30-day s.138 notice; Signed DPN -> 15-day Order XXXVII notice; Refusal/LAMA -> s.70 notice.",
                    },
                    {
                      gate: "Gate 4: Tri-Channel Enforcement",
                      desc: "Dispatch Email + WhatsApp + Speed Post RPAD jointly to patient and attendant co-guarantor.",
                    },
                  ].map((card) => (
                    <div key={card.gate} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                        {card.gate}
                      </p>
                      <p className="text-xs text-slate-200 mt-1">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Statutory Matrix: Article 21, BNS, Contract Act &amp; Order XXXVII
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Hospital Medical Directors and RCM teams must separate criminal detention red-lines from enforceable civil and criminal payment remedies.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3.5 font-bold">Statute / Provision</th>
                        <th className="p-3.5 font-bold">Operational Trigger</th>
                        <th className="p-3.5 font-bold">Timeline &amp; Forum</th>
                        <th className="p-3.5 font-bold">Target &amp; Verdict</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {STATUTORY_MATRIX.map((row) => (
                        <tr key={row.remedy} className="hover:bg-slate-50 align-top">
                          <td className="p-3.5 font-bold text-slate-900 min-w-[170px]">{row.remedy}</td>
                          <td className="p-3.5 text-slate-700 min-w-[200px]">{row.trigger}</td>
                          <td className="p-3.5 text-slate-700 min-w-[190px]">
                            <p>{row.timeline}</p>
                            <p className="text-xs text-slate-500 mt-1">{row.interimPower}</p>
                          </td>
                          <td className="p-3.5 min-w-[170px]">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold mb-1.5 ${
                                row.tone === "emerald"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : row.tone === "amber"
                                  ? "bg-amber-50 text-amber-700 border border-amber-200"
                                  : "bg-red-50 text-[#DC2626] border border-red-200"
                              }`}
                            >
                              {row.verdict}
                            </span>
                            <p className="text-xs text-slate-600">{row.targetAssets}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    4 Hospital Discharge &amp; ICU Billing Failure Modes
                  </h2>
                </div>
                <HospitalDischargeScenarioTabs />
              </section>

              {/* Section 5: 4-Document Discharge Desk Pack */}
              <section
                id="heading-discharge-desk-pack"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    The 4-Document Discharge Desk Pack (Admission to Promissory Note)
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Why do most hospitals fail to recover unpaid bills even after hiring a lawyer? Because their discharge desk hands over the patient with only an unsigned computer printout. To make a post-discharge legal notice fast and decisive, deploy these four non-coercive documents—and use our{" "}
                  <Link
                    href="/templates/promissory-note-format-india"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Promissory Note Format India
                  </Link>{" "}
                  template for balances above ₹50,000.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DISCHARGE_PACK_DOCS.map((doc) => (
                    <div
                      key={doc.code}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded bg-slate-900 text-white text-[11px] font-bold">
                          {doc.code}
                        </span>
                        <span className="text-[11px] font-semibold text-[#DC2626]">
                          {doc.statute}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                        {doc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {doc.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800">
                  <strong>Government / PSU Empanelment Note:</strong> If the unpaid medical bill is owed by a government department, CGHS/ECHS, or municipal body rather than a private patient, a mandatory 60-day statutory notice under{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Section 80 CPC Notice to Government
                  </Link>{" "}
                  applies before filing a civil suit.
                </div>
              </section>

              {/* Section 6: Worked Recovery Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Worked Recovery Ledger: ₹4.85L Unpaid ICU Bill Post-Discharge
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Consider a 12-day uninsured ICU trauma admission where the total itemized bill is ₹6,35,000, the family pays ₹1,50,000 during admission, and the earning brother (attendant co-guarantor) signs a Discharge Undertaking for the remaining ₹4,85,000 payable within 15 days.
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-5 border-b border-slate-800">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        Admitted Balance Principal
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-white mt-1">&#8377;4,85,000</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        Contractual Interest (18% p.a. / 90d)
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-amber-400 mt-1">&#8377;21,526</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        Total Statutory Demand
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">&#8377;5,06,526</p>
                    </div>
                  </div>
                  <div className="pt-4 space-y-2 text-xs sm:text-sm text-slate-300">
                    <p>
                      &bull; <strong>Pre-Litigation ROI:</strong> Serving a ₹999 tri-channel Advocate Legal Notice jointly on the discharged patient and the earning attendant co-guarantor creates immediate legal accountability at <strong>0.2% of principal value</strong>.
                    </p>
                    <p>
                      &bull; <strong>Cheque Bounce Track:</strong> If a ₹4,85,000 post-dated cheque was issued at discharge and stopped, verify exact filing windows with our{" "}
                      <Link
                        href="/cheque-bounce-notice-timeline-section-138"
                        className="text-red-300 underline hover:text-white font-semibold"
                      >
                        Section 138 Cheque Bounce Notice Timeline
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/tools/limitation-period-calculator"
                        className="text-red-300 underline hover:text-white font-semibold"
                      >
                        Limitation Period Calculator
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    BSA 2023 s.63 Digital Billing &amp; Discharge Dossier Checklist
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Before instructing legal counsel to issue a demand notice or file an Order XXXVII Summary Suit, the hospital Medical Records Department (MRD) and billing team should assemble these six evidentiary items:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {EVIDENCE_CHECKLIST.map((entry, idx) => (
                    <div
                      key={entry.item}
                      className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
                    >
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
                          {entry.item}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          {entry.purpose}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Dual-Track CTA */}
              <section
                id="heading-cta-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Deploy Article-21 Safe Hospital Recovery: ₹999 Test or Bulk CSV
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Whether your nursing home has one unpaid ₹1.2L surgical balance or a multi-specialty hospital chain is writing off 200+ post-discharge accounts each quarter, start with a single ₹999 live test or onboard your RCM ledger onto our institutional CSV desk:
                </p>

                <HospitalDischargeCTA />
              </section>

              {/* Section 9: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    FAQs: Post-Discharge Hospital Bill Recovery Without Detention
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-colors open:bg-white open:border-slate-300"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-extrabold text-lg shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 10: Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Statutory Authorities, Bare Acts &amp; Healthcare Portals
                  </h2>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Sibling Healthcare RCM Recovery Playbooks & Institutional Links */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-3">
                    IND-03 Healthcare RCM Sibling Recovery Playbooks &amp; Calculators
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <Link
                      href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-colors flex flex-col justify-between group"
                    >
                      <span className="font-bold text-slate-900 group-hover:text-[#DC2626]">
                        TPA &amp; Cashless Claim Short-Settlement Recovery &rarr;
                      </span>
                      <span className="text-slate-500 mt-1">
                        Recover arbitrary 20–35% deductions and enforce IRDAI penal interest (Bank Rate + 2%).
                      </span>
                    </Link>

                    <Link
                      href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-colors flex flex-col justify-between group"
                    >
                      <span className="font-bold text-slate-900 group-hover:text-[#DC2626]">
                        CGHS, ECHS &amp; Ayushman Bharat Dues Recovery &rarr;
                      </span>
                      <span className="text-slate-500 mt-1">
                        Section 80 CPC statutory notice &amp; Article 226 writ enforcement for empanelment arrears.
                      </span>
                    </Link>

                    <Link
                      href="/hospital-corporate-credit-tie-up-psu-medical-bill-recovery"
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-colors flex flex-col justify-between group"
                    >
                      <span className="font-bold text-slate-900 group-hover:text-[#DC2626]">
                        Corporate Credit Tie-Up &amp; PSU Medical Dues &rarr;
                      </span>
                      <span className="text-slate-500 mt-1">
                        MSMED Act s.15–18 and Order XXXVII summary suits for unpaid corporate patient credit.
                      </span>
                    </Link>

                    <Link
                      href="/tools/hospital-tpa-delayed-claim-interest-calculator"
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-colors flex flex-col justify-between group"
                    >
                      <span className="font-bold text-slate-900 group-hover:text-[#DC2626]">
                        Hospital TPA Delayed Claim Penal Interest Calculator &rarr;
                      </span>
                      <span className="text-slate-500 mt-1">
                        Interactive interest engine calculating Bank Rate + 2% compound interest on delayed claims.
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span>
                    Reviewed by <strong>{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                  </span>
                  <span>
                    Related:{" "}
                    <Link
                      href="/industries/hospitals-doctors-healthcare-recovery"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Hospitals &amp; Healthcare Hub
                    </Link>{" "}
                    &middot;{" "}
                    <Link
                      href="/templates/promissory-note-format-india"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Promissory Note Format
                    </Link>{" "}
                    &middot;{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Section 80 CPC Notice
                    </Link>{" "}
                    &middot;{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Section 138 Timeline
                    </Link>{" "}
                    &middot;{" "}
                    <Link
                      href="/sitemap"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      All Portals Sitemap
                    </Link>
                  </span>
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
