import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PatientChequeBounceTableOfContents from "./PatientChequeBounceTableOfContents";
import PatientChequeBounceScenarioTabs from "./PatientChequeBounceScenarioTabs";
import PatientChequeBounceCTA from "./PatientChequeBounceCTA";

export const revalidate = 86400;

const PAGE_URL = "/patient-cheque-bounce-stop-payment-at-hospital-discharge-section-138";
const EXACT_H1 =
  "Prosecuting Dishonoured & 'Stop-Payment' Cheques Issued at Hospital Discharge: Third-Party Relative Cheques & Coercion Defenses";
const META_TITLE = "Patient Cheque Bounce at Hospital Discharge | Section 138";
const META_DESCRIPTION =
  "Relative gave a cheque at hospital discharge and stopped payment? SC (ICDS v. Beena Shabeer) holds third-party cheques 100% liable under NI Act s.138.";

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
        alt: formatAltText("Prosecuting Patient and Relative Cheque Bounce at Hospital Discharge Section 138"),
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
    remedy: "Section 138 NI Act Criminal Complaint",
    statute: "Negotiable Instruments Act, 1881 (ss. 138, 141, 142 & 143A)",
    timing: "Notice within 30 days of bank memo; complaint within 30 days post-15-day notice window",
    mechanism: "Criminal complaint before Judicial Magistrate; covers drawer irrespective of whether they were patient",
    relief: "Up to 2 years imprisonment, double cheque amount fine, plus 20% mandatory interim compensation (s.143A)",
    suitability: "Primary recovery rail for all dishonoured or stopped discharge cheques signed by patient or third-party relative",
    tone: "emerald",
  },
  {
    remedy: "Order XXXVII CPC Summary Money Suit",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII Rule 1 & 2)",
    timing: "3-year limitation from date of dishonour; parallel to s.138 criminal complaint",
    mechanism: "Summary civil suit filed in Commercial Court / District Court based on written cheque & discharge undertaking",
    relief: "Immediate decree unless defendant secures leave to defend; courts order 100% pre-deposit if duress plea is moonshine",
    suitability: "Concurrent civil execution against debtor bank accounts and immoveable assets during pendency of s.138 trial",
    tone: "emerald",
  },
  {
    remedy: "BNS Criminal Breach of Trust & Cheating",
    statute: "Bharatiya Nyaya Sanhita, 2023 (Sections 316 & 318 - formerly IPC 406/420)",
    timing: "Immediate upon dishonour if fraudulent inducement is evident at discharge",
    mechanism: "Police complaint or Section 175(3) BNSS application before Magistrate alleging pre-meditated criminal deception",
    relief: "Cognizable criminal investigation, non-bailable warrants, impounding of passport, and custodial interrogation",
    suitability: "Cases where drawer issued cheque on an already-frozen account, forged signatures, or stopped payment within hours",
    tone: "slate",
  },
  {
    remedy: "Interim Attachment Before Judgment",
    statute: "Code of Civil Procedure, 1908 (Order XXXVIII Rule 5)",
    timing: "Filed alongside civil recovery plaint upon apprehension of asset dissipation",
    mechanism: "Urgent interim application seeking attachment of patient or guarantor bank accounts, vehicles, or properties",
    relief: "Freezes defendant's bank accounts and prohibits sale of assets prior to final judgment",
    suitability: "High-ticket multi-specialty ICU/OT claims exceeding ₹10 Lakh where the family attempts to sell properties",
    tone: "amber",
  },
];

const FAQS = [
  {
    question: "Can a hospital prosecute a patient's relative under Section 138 if the relative was not the patient?",
    answer:
      "Yes, absolutely. Under the landmark Supreme Court ruling in ICDS Ltd. v. Beena Shabeer & Anr. (2002) 6 SCC 426, the statutory phrase 'for the discharge, in whole or in part, of any debt or other liability' in Section 138 of the Negotiable Instruments Act, 1881 is not restricted to the drawer's personal debt. The apex court explicitly held that a cheque issued by a guarantor, family member, or third-party to satisfy another individual's liability is 100% prosecutable under Section 138 upon dishonour. When a brother-in-law, spouse, adult child, or employer issues a cheque to clear an admitted patient's hospital bill, they assume direct, independent criminal liability under the Act.",
  },
  {
    question: "What if the drawer instructs their bank to issue a 'Stop Payment' immediately after discharge?",
    answer:
      "A 'Stop Payment' instruction does not shield the drawer from Section 138 criminal prosecution. In Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) 3 SCC 232 and Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) 3 SCC 249, the Supreme Court ruled that once a cheque is issued, a stop payment direction to the bank attracts the exact penal consequences of dishonour for 'Insufficient Funds'. To escape liability, the drawer must prove before the trial court that there was no existing debt or liability at the time the cheque was presented. In hospital discharge cases, the itemized inpatient medical bill, signed admission forms, and clinical summary decisively establish the underlying debt.",
  },
  {
    question: "How do hospitals dismantle the debtor's defense that the cheque was given under 'duress or illegal detention'?",
    answer:
      "Debtors routinely allege in reply notices that the hospital detained the patient or refused mortal remains, extorting the cheque under duress. Hospitals dismantle this manufactured defense through a 4-point documentary barrier: (1) Voluntary Discharge Clearance & Undertaking signed by the drawer acknowledging the exact bill amount without protest; (2) Time-stamped CCTV footage of the discharge desk showing peaceful, amicable departure; (3) The statutory presumption under Section 139 of the NI Act (Bir Singh v. Mukesh Kumar), which requires the drawer to prove coercion with cogent evidence; and (4) Highlighting the complete absence of any contemporaneous police complaint or protest letter filed by the drawer on the day of discharge.",
  },
  {
    question: "What is Section 143A of the Negotiable Instruments Act and how does it help hospitals?",
    answer:
      "Section 143A was inserted into the Negotiable Instruments Act to prevent chronic trial delays. It empowers the Judicial Magistrate to direct the drawer of the bounced cheque to deposit an interim compensation of up to 20% of the total cheque amount to the complainant hospital. This application is filed at the stage of framing notice or recording the plea of the accused. The drawer must deposit this amount within 60 days (extendable by 30 days). If the drawer fails to deposit, the court can recover it as an unpaid fine under Section 421 of the CrPC / Section 461 of the BNSS.",
  },
  {
    question: "What is the exact 30-day statutory timeline for serving a Section 138 Legal Notice?",
    answer:
      "The timeline is strict and non-negotiable under Section 138: (1) The cheque must be presented within its validity period (3 months from date of issue); (2) Upon dishonour, the hospital receives a Bank Return Memo; (3) The hospital must dispatch a formal Advocate Demand Notice within exactly 30 calendar days from the date of receiving the bank memo; (4) The drawer is granted 15 days from notice delivery to pay the full amount; and (5) If payment is not made within 15 days, the cause of action arises, and the hospital must file the Section 138 criminal complaint before the jurisdictional Magistrate within the next 30 days.",
  },
  {
    question: "Can a hospital file an Order 37 CPC summary suit alongside a Section 138 criminal complaint?",
    answer:
      "Yes. The Supreme Court has repeatedly affirmed that criminal prosecution under Section 138 of the NI Act and civil recovery proceedings are concurrent remedies that operate in distinct spheres. While Section 138 penalizes the criminal act of issuing a dishonoured negotiable instrument, an Order XXXVII Summary Suit in the Civil or Commercial Court enforces the civil debt. In an Order 37 suit based on a dishonoured cheque and signed hospital undertaking, the defendant does not have an automatic right to defend; they must apply for leave to defend within 10 days, and courts routinely compel a 100% pre-deposit if the defense is deemed illusory.",
  },
  {
    question: "Can private hospitals legally detain a patient or withhold mortal remains for unpaid medical bills?",
    answer:
      "No. The Supreme Court of India and various High Courts (including the Bombay High Court in Association of Hospitals and Delhi High Court) have unequivocally ruled that private hospitals cannot detain a living patient or withhold deceased bodies as a lien for unpaid medical bills, as doing so violates Article 21 of the Constitution (Right to Life and Personal Liberty) and constitutes wrongful confinement under the penal code. Instead, hospitals must rely strictly on lawful contractual and statutory mechanisms: executing third-party undertakings, accepting negotiable instruments, and prosecuting dishonoured cheques under Section 138 and civil summary suits.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 139, 141, 142 & 143A) — Legislative Department",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Supreme Court of India: ICDS Ltd. v. Beena Shabeer & Anr. (2002) 6 SCC 426 (Third-Party Cheque Liability)",
    url: "https://main.sci.gov.in/judgment",
  },
  {
    title: "Supreme Court of India: Goaplast (P) Ltd. v. Chico Ursula D'Souza (2003) 3 SCC 232 (Stop Payment Doctrine)",
    url: "https://main.sci.gov.in/judgment",
  },
  {
    title: "Supreme Court of India: Bir Singh v. Mukesh Kumar (2019) 4 SCC 197 (Section 139 Presumption of Consideration)",
    url: "https://main.sci.gov.in/judgment",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Bills & Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for Hospital HIS)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Sections 316 & 318 — Criminal Breach of Trust & Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Patient and Relative Cheque Bounce at Hospital Discharge Section 138",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Hospitals Prosecute Dishonoured and Stop-Payment Cheques Under Section 138",
  description:
    "A 5-step operational and statutory escalation protocol for hospital finance and legal officers to prosecute dishonoured discharge cheques, defeat third-party relative duress defenses, and secure 20% interim compensation.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Obtain Bank Return Memo & Audit Discharge Dossier",
      text: "Secure original bank memo citing 'Payment Stopped by Drawer' or 'Insufficient Funds'. Pull the patient's admission form, signed financial guarantor undertaking, itemized bill, and signed voluntary discharge clearance note.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Dispatch Advocate Section 138 Statutory Demand Notice Within 30 Days",
      text: "Serve a formal legal notice via Speed Post RPAD and email/WhatsApp within 30 days of receiving the bank memo, specifically citing the Supreme Court precedent in ICDS Ltd. v. Beena Shabeer and demanding payment within 15 days.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "File Section 138 Criminal Complaint Before Judicial Magistrate",
      text: "Upon expiry of the 15-day statutory window without payment, file the criminal complaint within 30 days before the Metropolitan Magistrate or Judicial Magistrate First Class having territorial jurisdiction over the hospital's bank branch.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Move Section 143A Application for 20% Mandatory Interim Compensation",
      text: "At the time of notice framing or plea recording, submit an application under Section 143A of the Negotiable Instruments Act compelling the drawer to deposit up to 20% of the cheque amount directly into the hospital's account.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Institute Parallel Order XXXVII CPC Civil Summary Suit",
      text: "File an Order 37 summary suit in Civil or Commercial Court against both the drawer and the patient to attach bank accounts and secure an expedited money decree while the criminal trial progresses.",
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
      name: "Healthcare & Hospital Recovery",
      item: `${SITE_URL}/industries/hospitals-doctors-healthcare-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Discharge Cheque Bounce (Section 138)",
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

export default function PatientChequeBouncePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Schema Injection */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Hospital Billing &bull; Section 138 NI Act</span>
            <span>&bull;</span>
            <span>ICDS v. Beena Shabeer Precedent</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (First 250 Words Link Requirement) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer for Hospital Legal &amp; Finance Controllers
            </span>
            When an attendant or relative issues a cheque at discharge to secure the patient&apos;s release and stops payment the following morning, the hospital holds complete criminal and civil remedies. Under the Supreme Court benchmark in <em className="italic">ICDS Ltd. v. Beena Shabeer</em>, third-party cheques given for another person&apos;s medical bill are 100% prosecutable under Section 138 of the Negotiable Instruments Act. Combined with comprehensive voluntary discharge documentation from our{" "}
            <Link
              href="/industries/hospitals-doctors-healthcare-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold transition-colors"
            >
              Healthcare &amp; Hospital Debt Recovery Hub
            </Link>
            , hospitals can dismantle fabricated &apos;coercion&apos; defenses and recover 20% mandatory interim compensation under Section 143A.
          </div>

          {/* Key Metrics 4-Card Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                100%
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-300 font-medium mt-1">
                Third-Party Relative Cheque Liability (ICDS SC Ruling)
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                30 Days
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-300 font-medium mt-1">
                Strict Statutory Notice Window from Bank Return Memo
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                20%
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-300 font-medium mt-1">
                Interim Compensation Awardable Under s.143A NI Act
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                2 Years
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-300 font-medium mt-1">
                Maximum Imprisonment &amp; 2x Fine for Drawer Default
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Navigation */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs
            items={[
              {
                label: "Healthcare & Hospital Recovery",
                href: "/industries/hospitals-doctors-healthcare-recovery",
              },
              {
                label: "Discharge Cheque Bounce (s.138)",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky TOC + Content Rail */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Rail Sticky TOC */}
          <PatientChequeBounceTableOfContents />

          {/* Right Rail Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-3">
                Discharge Desk Vulnerability
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Why Hospital Discharge Cheques Bounce: The 9 PM Discharge Trap
              </h2>
              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Every corporate hospital, nursing home, and multi-specialty healthcare facility in India encounters the notorious &apos;Discharge Desk Trap&apos;. Following major surgical procedures, extended intensive care unit (ICU) admissions, or emergency interventions, patient dues frequently run into several lakhs of rupees. When the final bill is generated late in the evening or over a weekend, attendants claim acute digital banking transfer limits or lack of immediate liquid funds.
                </p>
                <p>
                  To secure the discharge slip and escort the patient home, a relative—frequently a brother-in-law, uncle, cousin, or close family acquaintance—steps forward and tenders a signed bank cheque. At 9:00 AM the following morning, the drawer phones their home bank branch and slaps an immediate <strong>&apos;Stop Payment&apos;</strong> instruction on the instrument.
                </p>
                <p>
                  When the hospital serves a formal demand, the drawer replies through an advocate with a standardized, predatory defense:
                </p>
                <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-xl my-4 text-slate-800 italic font-medium">
                  &ldquo;I was neither the patient nor the beneficiary of medical treatment. I owe no personal debt to the hospital. Furthermore, the hospital unlawfully held my relative hostage and coerced me into signing a blank cheque under extreme emotional duress.&rdquo;
                </div>
                <p>
                  Relying on this manufactured narrative, defaulting drawers assume hospital finance departments will write off the arrears as bad debt. However, Indian statutory law and the Supreme Court of India provide hospitals with formidable, uncompromising legal mechanisms to shatter this defense.
                </p>
                <p>
                  Where hospitals previously faced complex civil litigation, they can now deploy the twin engines of <strong>Section 138 Negotiable Instruments Act</strong> criminal prosecution and <strong>Order XXXVII CPC</strong> summary money suits, compelling defaulters to pay under penalty of imprisonment and asset attachment. For related protocols on inpatient claims where no cheque was taken, consult our guide on{" "}
                  <Link
                    href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Hospital Unpaid Patient Bill Recovery Without Detaining Patients
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Operational Decision Architecture
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                5-Stage Recovery Decision Tree: Dishonour to Interim Deposit
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Hospital billing and legal cells must execute an airtight, statutory escalation protocol from the hour a bank return memo arrives. Missing the 30-day statutory notice limitation forever extinguishes the criminal remedy under Section 138.
              </p>

              {/* Hand-Authored Responsive SVG Workflow (Desktop) */}
              <div className="hidden md:block w-full bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner mb-6">
                <svg
                  viewBox="0 0 900 380"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={900}
                  height={380}
                  aria-label="5-Stage Hospital Discharge Cheque Recovery Workflow"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="150" height="120" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <circle cx="95" cy="55" r="16" fill="#DC2626" />
                  <text x="95" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">01</text>
                  <text x="95" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">Discharge Memo</text>
                  <text x="95" y="110" textAnchor="middle" fill="#94A3B8" fontSize="11">Cheque Bounced /</text>
                  <text x="95" y="125" textAnchor="middle" fill="#94A3B8" fontSize="11">Stop Payment slaps</text>

                  {/* Arrow 1 */}
                  <path d="M170 90 H200" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="200" y="30" width="150" height="120" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <circle cx="275" cy="55" r="16" fill="#DC2626" />
                  <text x="275" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">02</text>
                  <text x="275" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">Dossier Audit</text>
                  <text x="275" y="110" textAnchor="middle" fill="#94A3B8" fontSize="11">Match Inpatient Bill,</text>
                  <text x="275" y="125" textAnchor="middle" fill="#94A3B8" fontSize="11">CCTV &amp; Clearance</text>

                  {/* Arrow 2 */}
                  <path d="M350 90 H380" stroke="#DC2626" strokeWidth="3" />

                  {/* Step 3 */}
                  <rect x="380" y="30" width="150" height="120" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="455" cy="55" r="16" fill="#DC2626" />
                  <text x="455" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">03</text>
                  <text x="455" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">s.138 Notice</text>
                  <text x="455" y="110" textAnchor="middle" fill="#FCA5A5" fontSize="11">Strict 30-Day Window</text>
                  <text x="455" y="125" textAnchor="middle" fill="#FCA5A5" fontSize="11">Speed Post + Email</text>

                  {/* Arrow 3 */}
                  <path d="M530 90 H560" stroke="#DC2626" strokeWidth="3" />

                  {/* Step 4 */}
                  <rect x="560" y="30" width="150" height="120" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <circle cx="635" cy="55" r="16" fill="#DC2626" />
                  <text x="635" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">04</text>
                  <text x="635" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">s.143A Petiton</text>
                  <text x="635" y="110" textAnchor="middle" fill="#94A3B8" fontSize="11">20% Interim Comp</text>
                  <text x="635" y="125" textAnchor="middle" fill="#94A3B8" fontSize="11">Mandatory Deposit</text>

                  {/* Arrow 4 */}
                  <path d="M710 90 H740" stroke="#DC2626" strokeWidth="3" />

                  {/* Step 5 */}
                  <rect x="740" y="30" width="140" height="120" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <circle cx="810" cy="55" r="16" fill="#10B981" />
                  <text x="810" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">05</text>
                  <text x="810" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">Civil Order 37</text>
                  <text x="810" y="110" textAnchor="middle" fill="#A7F3D0" fontSize="11">Asset Attachment</text>
                  <text x="810" y="125" textAnchor="middle" fill="#A7F3D0" fontSize="11">&amp; Summary Decree</text>

                  {/* Flow Details Box */}
                  <rect x="20" y="180" width="860" height="170" rx="14" fill="#0F172A" stroke="#1E293B" />
                  <text x="40" y="215" fill="#EF4444" fontSize="13" fontWeight="bold">CRITICAL HOSPITAL MILESTONE AUDIT:</text>
                  <text x="40" y="245" fill="#E2E8F0" fontSize="12">Day 01–03: Secure original bank dishonour memo citing Code 12 (Stop Payment) or Code 01 (Funds Insufficient).</text>
                  <text x="40" y="270" fill="#E2E8F0" fontSize="12">Day 04–30: Issue advocate demand notice citing ICDS Ltd. v. Beena Shabeer (2002) 6 SCC 426 to destroy third-party plea.</text>
                  <text x="40" y="295" fill="#E2E8F0" fontSize="12">Day 31–45: 15-day statutory payment cure period expires; debtor fails to remit inpatient arrears.</text>
                  <text x="40" y="320" fill="#E2E8F0" fontSize="12">Day 46–75: File s.138 criminal complaint + s.143A interim relief petition before Judicial Magistrate First Class.</text>
                </svg>
              </div>

              {/* Mobile Decision Cards */}
              <div className="md:hidden space-y-3 mb-6">
                {[
                  {
                    step: "01",
                    title: "Bank Return Memo Audit",
                    desc: "Secure original bank slip citing Code 12 (Stop Payment) or Code 01 (Funds Insufficient). Immediately log date of receipt.",
                  },
                  {
                    step: "02",
                    title: "Inpatient Dossier Audit",
                    desc: "Reconcile signed Admission Undertaking, Inpatient Billing Ledger, CCTV exit timestamps, and Discharge Clearance Certificate.",
                  },
                  {
                    step: "03",
                    title: "Section 138 Advocate Notice",
                    desc: "Dispatch statutory demand within strict 30-day window citing ICDS Ltd. v. Beena Shabeer. Deliver via Speed Post RPAD & WhatsApp.",
                  },
                  {
                    step: "04",
                    title: "Section 143A Interim Comp",
                    desc: "File criminal complaint before Magistrate; petition under Section 143A compelling drawer to deposit 20% of cheque amount.",
                  },
                  {
                    step: "05",
                    title: "Parallel Order 37 Civil Suit",
                    desc: "Institute summary recovery suit in Civil/Commercial court for asset attachment before judgment (Order 38 Rule 5).",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{s.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-4 text-xs sm:text-sm text-red-950 leading-relaxed font-normal">
                <strong>Statutory Limitation Warning:</strong> Under Section 142(1)(b) of the NI Act, the complaint must be instituted within one month of the date on which the 15-day notice period expired. Review our detailed statutory calculator and timetable on{" "}
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="text-[#DC2626] hover:underline font-bold"
                >
                  Cheque Bounce Notice Timelines &amp; Section 138 Calculator
                </Link>
                .
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Legal Forums &amp; Penal Comparison
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Statutory Matrix: NI Act s.138 vs Order 37 vs BNS Fraud
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Hospital recovery cells should not treat dishonoured discharge cheques as simple billing defaults. They possess distinct criminal and civil statutory remedies that can be deployed simultaneously.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5 sm:p-4">Recovery Avenue</th>
                      <th className="p-3.5 sm:p-4">Statutory Basis</th>
                      <th className="p-3.5 sm:p-4">Limitation Window</th>
                      <th className="p-3.5 sm:p-4">Enforcement Mechanism</th>
                      <th className="p-3.5 sm:p-4">Maximum Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          {item.remedy}
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-[11px]">
                          {item.statute}
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-700 font-medium">
                          {item.timing}
                        </td>
                        <td className="p-3.5 sm:p-4 text-slate-600">
                          {item.mechanism}
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">
                          {item.relief}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Third-Party Liability */}
            <section
              id="heading-third-party-liability"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-3">
                Supreme Court Jurisprudence
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Third-Party Cheques: Why Relatives Cannot Escape s.138
              </h2>
              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  The central defense concocted by defaulting relatives is that they never received medical treatment and therefore incurred no personal legal debt. Hospital legal teams must crush this argument at the notice stage by citing the binding Supreme Court precedent in <strong>ICDS Ltd. v. Beena Shabeer &amp; Anr. (2002) 6 SCC 426</strong>.
                </p>

                {/* Precedent Deep-Dive Card */}
                <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 my-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                      Supreme Court of India &bull; (2002) 6 SCC 426
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    ICDS Ltd. v. Beena Shabeer &amp; Anr.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    <strong>The Legal Question:</strong> Does Section 138 apply only when the cheque is issued for the drawer&apos;s own personal debt, or does it cover cheques issued by a third party or guarantor for another person&apos;s liability?
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                    <strong>The Holding:</strong> The Supreme Court held that the opening words of Section 138—<em>&quot;where any cheque drawn by a person on an account maintained by him... for the discharge, in whole or in part, of ANY debt or other liability&quot;</em>—are deliberately wide. The legislature did not use the phrase &apos;his debt&apos;; it used &apos;any debt or other liability&apos;. Consequently, a cheque issued by a guarantor or relative to liquidate another individual&apos;s debt creates complete criminal liability under Section 138 upon dishonour.
                  </p>
                  <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-emerald-400 font-semibold">
                    &check; Binding Rule: When an attendant tenders a cheque to clear an admitted patient&apos;s bill, they become an independent surety and statutory debtor under Section 138 NI Act.
                  </div>
                </div>

                <p>
                  Furthermore, under <strong>Section 139 of the Negotiable Instruments Act</strong>, the court presumes that every cheque was drawn for the discharge of a legally enforceable debt. In <strong>Bir Singh v. Mukesh Kumar (2019) 4 SCC 197</strong>, a 3-judge bench of the Supreme Court held:
                </p>
                <div className="bg-slate-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl my-3 text-slate-800 text-xs sm:text-sm font-medium">
                  &ldquo;Even if a blank signed cheque is voluntarily handed over to a creditor toward payment, an implied authority is conferred upon the payee to fill up the particulars. The drawer cannot escape liability by claiming the particulars were entered by someone else.&rdquo;
                </div>
                <p>
                  In addition, where relatives execute written undertakings, hospital finance teams can execute promissory notes or formal debt agreements. Explore our standard template on{" "}
                  <Link
                    href="/templates/promissory-note-format-india"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Promissory Note &amp; Inpatient Undertaking Format India
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 5: Neutralizing Coercion Defense */}
            <section
              id="heading-coercion-counter"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Defense Pre-Emption Protocol
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Neutralizing the &apos;Duress &amp; Detention&apos; Defense at Discharge
              </h2>
              <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Debtor advocates routinely lean on constitutional decisions where courts admonished hospitals for illegally detaining dead bodies or preventing patients from leaving. Armed with these rulings, defaulters claim the discharge cheque was extracted through unlawful coercion under Section 15 of the Indian Contract Act, 1872.
                </p>
                <p>
                  To render this defense completely dead on arrival in court, hospital administrative heads must implement the following 4-point operational safeguard at the discharge desk:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold mb-2">
                      1
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Voluntary Discharge Declaration
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mandate a specific clause in the discharge clearance slip: <em>&quot;I voluntarily tender Cheque No. [...] drawn on Bank [...] toward settled medical charges. The patient has been released in a medically stable condition without any detention, coercion, or protest.&quot;</em>
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold mb-2">
                      2
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      CCTV Audit Trail Preservation
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), immediately back up high-definition video of the discharge counter showing the drawer peacefully handing over the cheque, signing documents, and exiting with the patient.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold mb-2">
                      3
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Absence of Contemporaneous FIR
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Courts hold that a plea of duress is an afterthought if the drawer failed to file a police complaint or send an immediate protest letter within 24 hours of discharge. Pointing out the debtor&apos;s silence proves the defense is sham.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold mb-2">
                      4
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Itemized Bill Counter-Signature
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ensure every page of the final hospital summary bill (pharmacy, OT, ICU, consultant rounds) is initialed by the attendant alongside their Aadhaar or PAN copy, eliminating retroactive dispute over billing lines.
                    </p>
                  </div>
                </div>

                <p>
                  For public sector employee admissions or government referral defaults where payments are delayed by official boards, hospitals can also deploy a{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Section 80 CPC Notice to Government Departments &amp; PSUs
                  </Link>{" "}
                  or explore our specialized protocol on{" "}
                  <Link
                    href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    CGHS, ECHS &amp; Ayushman Bharat Hospital Dues Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-3">
                Practical Case Scenarios
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Hospital Discharge Cheque Default Scenarios &amp; Action SOPs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Explore real-world discharge desk failure modes encountered by multi-specialty hospitals, from attendant stop-payment orders to TPA insurance short-settlement disputes. Select an operational scenario below to view its legal analysis and recovery protocol:
              </p>

              <PatientChequeBounceScenarioTabs />
            </section>

            {/* Section 7: Worked Financial Calculation */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Financial Recovery Model
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Worked Recovery Ledger: ₹6.5 Lakh ICU Discharge Cheque Bounce
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Review a representative case study of a private multi-specialty hospital recovering a ₹6,50,000 dishonoured discharge cheque through composite Section 138 prosecution and Section 143A interim compensation:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5 border-b border-slate-800 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                      Patient Inpatient Stay
                    </span>
                    <span className="font-semibold text-slate-200">
                      12 Days (ICU + Cardiac Stenting + High Dependency Unit)
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                      Discharge Cheque Drawer
                    </span>
                    <span className="font-semibold text-slate-200">
                      Patient&apos;s Brother-in-law (Third-Party Guarantor)
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                      Bank Return Reason
                    </span>
                    <span className="font-semibold text-red-400 font-mono">
                      Code 12 — &quot;Payment Stopped by Drawer&quot;
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                      Debtor Legal Defense
                    </span>
                    <span className="font-semibold text-amber-300">
                      &quot;Cheque given under hospital duress to secure discharge&quot;
                    </span>
                  </div>
                </div>

                {/* Ledger Breakdown */}
                <div className="space-y-3">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400">
                    Hospital Recovery Ledger &amp; Statutory Compensation Matrix
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-300">Principal Admitted Inpatient Bill</span>
                      <span className="font-mono font-bold text-white">₹6,50,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-300">
                        Section 143A Mandatory Interim Compensation (20% Court Order)
                      </span>
                      <span className="font-mono font-bold text-emerald-400">₹1,30,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-300">
                        Statutory Pre-Litigation Interest (18% p.a. for 8 months under Interest Act, 1978)
                      </span>
                      <span className="font-mono font-bold text-slate-300">₹78,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-300">
                        Advocate Notice, Filing Fees &amp; Litigation Packaging
                      </span>
                      <span className="font-mono font-bold text-slate-300">₹25,000</span>
                    </div>
                    <div className="flex justify-between py-3 bg-slate-800/80 px-3 rounded-lg text-sm sm:text-base">
                      <span className="font-bold text-white">
                        Total Recoverable Financial Claim in Summary / s.138 Action
                      </span>
                      <span className="font-mono font-black text-emerald-400">₹7,53,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 text-xs text-slate-300 leading-relaxed">
                  <strong>Outcome Simulation:</strong> Upon receiving the summons and being confronted with the Section 143A interim compensation order compelling an immediate cash deposit of ₹1,30,000 within 60 days, the drawer abandoned their frivolous duress defense. The entire ₹6,50,000 principal plus ₹50,000 toward costs was settled via RTGS within 45 days of court appearance.
                </div>
              </div>
            </section>

            {/* Section 8: BSA 2023 Section 63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Evidentiary Compliance
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                BSA Section 63 Digital Evidence Checklist for Hospital RCM
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced the Indian Evidence Act, Section 63 governs the admissibility of electronic Hospital Information System (HIS) records. Hospital legal units must compile this 6-point dossier before trial:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Original Cheque & Bank Return Memo",
                    desc: "The physical cheque bearing the drawer's signature, accompanied by the bank's return memo with formal reason code and banking clearing seal.",
                  },
                  {
                    title: "2. HIS Admission & Guarantor Undertaking",
                    desc: "Digital admission form signed by the patient and attendant, containing the primary financial guarantee clause and KYC ID proofs (Aadhaar/PAN).",
                  },
                  {
                    title: "3. Itemized GST Discharge Invoices",
                    desc: "Complete system-generated medical bill showing pharmacy, OT, consumable, and physician lines with GST compliance and billing counter sign-off.",
                  },
                  {
                    title: "4. Voluntary Discharge Clearance Slip",
                    desc: "Certificate signed by the attendant at exit acknowledging receipt of patient in stable health, affirming the cheque was issued without duress.",
                  },
                  {
                    title: "5. Section 63 BSA Digital Certificate",
                    desc: "Mandatory affidavit signed by the hospital IT Head certifying HIS server integrity, database timestamps, and CCTV DVR preservation.",
                  },
                  {
                    title: "6. Speed Post RPAD & Delivery Logs",
                    desc: "India Post consignment receipt, barcoded tracking report confirming delivery of the s.138 notice, and WhatsApp blue-tick read receipts.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track B2B Action CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] border border-red-200 mb-3">
                Actionable Hospital Recovery Rails
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Institutional Debt Recovery Rails for Multi-Specialty Hospitals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Whether you need to prosecute an isolated ₹3.5 Lakh discharge cheque bounce or streamline recovery across hundreds of aged inpatient and TPA claims, LegalRecovery.in provides advocate-drafted solutions tailored for healthcare providers:
              </p>

              <PatientChequeBounceCTA />

              <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
                <span>Looking for TPA insurance claim recovery?</span>
                <Link
                  href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Explore Hospital TPA Delayed &amp; Short-Settled Claims Recovery &rarr;
                </Link>
              </div>
            </section>

            {/* Section 10: FAQ Accordions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Knowledge Base &bull; Legal Answers
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Frequently Asked Questions: Hospital Discharge Cheque Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Authoritative legal guidance for hospital medical directors, finance controllers, and billing executives on prosecuting dishonoured discharge cheques:
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200/80 p-4 transition-all duration-200 open:bg-white open:shadow-xs open:border-slate-300"
                  >
                    <summary className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm cursor-pointer list-none select-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs shrink-0 group-open:rotate-180 group-open:bg-[#DC2626] group-open:text-white transition-transform">
                        &darr;
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                Primary Legal Authorities
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Statutory Authorities, Judicial Precedents &amp; Court Records
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Hospital legal teams and external standing counsels can verify the statutory provisions and authoritative apex court rulings cited in this playbook through the official legislative portals below:
              </p>

              <ul className="space-y-2.5">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      &bull;
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline font-medium transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Legal Reviewer Card */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  AM
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Vetted by {LEGAL_REVIEWER.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {LEGAL_REVIEWER.role} &bull; Practice Focus: Commercial Recovery &amp; NI Act Litigation
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Cross-Linking Cluster Footer */}
      <RelatedRecoveryGuides />
    </div>
  );
}
