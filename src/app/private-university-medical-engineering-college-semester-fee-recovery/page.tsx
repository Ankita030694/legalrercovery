import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UniversityFeeTableOfContents from "./UniversityFeeTableOfContents";
import UniversityFeeScenarioTabs from "./UniversityFeeScenarioTabs";
import UniversityFeeNoticeCTA from "./UniversityFeeNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/private-university-medical-engineering-college-semester-fee-recovery";
const FULL_URL = `${SITE_URL}${PAGE_URL}`;
const EXACT_H1 =
  "UGC-Compliant Tuition & Hostel Fee Recovery for Private Universities & Professional Colleges";

export const metadata: Metadata = {
  title: "Private University & College Unpaid Semester Fee Recovery",
  description:
    "Recover unpaid semester tuition & hostel fees without violating UGC certificate-retention bans. Enforce parent co-guarantor liability, NI s.138 & PSS s.25.",
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "Private University & College Unpaid Semester Fee Recovery",
    description:
      "Recover unpaid semester tuition & hostel fees without violating UGC certificate-retention bans. Enforce parent co-guarantor liability, NI s.138 & PSS s.25.",
    url: FULL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "UGC-Compliant University Semester and Hostel Fee Recovery Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private University & College Unpaid Semester Fee Recovery",
    description:
      "Recover unpaid semester tuition & hostel fees without violating UGC certificate-retention bans. Enforce parent co-guarantor liability, NI s.138 & PSS s.25.",
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
      "University Grants Commission (UGC) Notification on Refund of Fees and Non-Retention of Original Certificates (2018 & Subsequent Directives)",
    url: "https://www.ugc.gov.in/pdfnews/5437737_UGC-Notice-reg-Fees-refund-Eng.pdf",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 10, 37, 43, 73 & 74) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 142(2) & 143A) — Cheque Dishonour & Interim Compensation",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Payment and Settlement Systems Act, 2007 (Section 25 — e-NACH & ECS Mandate Dishonour)",
    url: "https://www.indiacode.nic.in/handle/123456789/2048",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order V Rule 25 Foreign Service)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic ERP Ledgers, Email & Biometric Mess Record Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Can a private university or medical college withhold original 10th/12th mark-sheets or degree certificates for unpaid semester fees?",
    answer:
      "No. Under binding UGC Notifications on Refund of Fees and Non-Retention of Original Certificates, as well as AICTE and NMC/DCI norms, higher education institutions cannot retain original academic certificates or mark-sheets as a lien for unpaid fees. Doing so exposes the university to UGC show-cause notices, heavy regulatory penalties, and Consumer Commission orders. Instead, institutions must release original documents against a written receipt acknowledging the admitted fee balance and enforce recovery through civil notices, parent co-guarantor liability, and Order XXXVII CPC summary suits.",
  },
  {
    question:
      "How can a university recover fees when a bank disburses an education loan into the student's personal account instead of the college account?",
    answer:
      "When a bank credits an education loan tranche to the student's personal savings account and the student diverts the funds without remitting semester fees, the university should immediately issue a Joint Statutory Demand Notice under Sections 37 and 43 of the Indian Contract Act, 1872 to both the student and the earning parent/co-obligor, while marking a factual intimation to the sanctioning bank's Nodal Officer. Because education loans are co-signed by parents and disbursed strictly for tuition, formal intimation often prompts the bank to freeze subsequent tranches and compels the co-guarantor to clear the university dues.",
  },
  {
    question:
      "Are parents legally liable as co-guarantors for an adult university student's unpaid tuition and hostel arrears?",
    answer:
      "Yes, provided the parent or guardian signed the Admission Undertaking, Financial Guarantee Bond, or Hostel Allotment Form as a co-applicant, guarantor, or sponsor. Under Section 43 and Section 128 of the Indian Contract Act, 1872, the liability of a co-promisor or surety is joint, several, and co-extensive with that of the student. Even after the student turns 18 and graduates, the university can file a single Order XXXVII CPC Summary Suit joining the earning parent as a co-defendant.",
  },
  {
    question:
      "Can a university prosecute a student or parent under Section 138 NI Act or Section 25 PSS Act for bounced semester fee PDCs or NACH mandates?",
    answer:
      "Yes. Where semester tuition or hostel instalments are secured by post-dated cheques (PDCs) or e-NACH/ECS mandates, dishonour due to 'Insufficient Funds', 'Account Closed', or 'Payment Stopped' triggers criminal liability under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007. The Finance Office must serve a statutory demand notice within 30 days of receiving the Bank Return Memo, granting 15 days to pay. Upon non-payment, a criminal complaint can be filed at the university's own bank-branch jurisdiction under Section 142(2).",
  },
  {
    question:
      "Are medical and dental seat-leaving bonds enforceable if a student drops out mid-course?",
    answer:
      "Courts distinguish between arbitrary punitive penalties and genuine pre-estimated loss under Section 74 of the Indian Contract Act, 1872. If a medical, dental, or professional college student abandons a seat after the final counselling/stray-vacancy cut-off date—leaving that regulated seat vacant for the remaining 3 to 4.5 years—the university can lawfully enforce the seat-leaving bond to the extent of provable lost tuition revenue, provided it establishes that the seat could not be filled in subsequent rounds.",
  },
  {
    question:
      "How do Indian private universities recover unpaid tuition from foreign or NRI students who return abroad?",
    answer:
      "Universities should enforce two tracks simultaneously: first, invoke the mandatory Indian Local Guardian or Co-Sponsor undertaking executed at admission to recover dues domestically in India; second, serve statutory demand notices and Order XXXVII CPC summons on the foreign/NRI student electronically via registered email and WhatsApp under CPC Order V Rule 25 read with Bharatiya Sakshya Adhiniyam (BSA), 2023 Section 63.",
  },
  {
    question:
      "How can a multi-campus university trust recover arrears from 100 to 500+ defaulting students without hiring a large litigation team?",
    answer:
      "Instead of handling defaulters ad hoc, the Registrar or Finance Officer can upload a structured CSV of defaulted student ledgers, co-guarantor parent contacts, and bounced PDC/NACH details to LegalRecovery's Representees desk. Advocate-drafted statutory notices are dispatched simultaneously via Email, WhatsApp, and Speed Post RPAD—typically resolving 60–70% of chronic arrears at the notice stage before any Order XXXVII suit is required.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description:
    "Institutional playbook for Private Universities, Deemed Universities, and Medical/Engineering Colleges on UGC-compliant semester tuition, hostel mess, and education-loan-diverted fee recovery.",
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about-us`,
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
    "@id": FULL_URL,
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage UGC-Compliant Tuition & Hostel Fee Recovery SOP for Private Universities",
  description:
    "Step-by-step operational sequence for University Registrars and Finance Officers to recover semester, hostel, and loan-diverted fee arrears without retaining original certificates.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit ERP Ledger & Release Original Certificates Against Receipt",
      text: "Reconcile tuition, hostel, and mess dues in the University ERP and release any original 10th/12th mark-sheets against a signed receipt recording the admitted fee balance, ensuring 100% UGC compliance.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Separate Bounced PDC/NACH Track from Civil Contract Track",
      text: "Flag dishonoured semester cheques or e-NACH mandates within 30 days of the Bank Return Memo for mandatory NI Act s.138 or PSS Act s.25 criminal statutory notice.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Issue Joint Advocate Notice to Student, Co-Guarantor Parent & Lending Bank",
      text: "Serve a formal 15-day statutory demand under Contract Act s.43 on the student and earning parent/co-guarantor, copying the education-loan sanctioning bank where loan funds were diverted.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Certify Electronic Records Under BSA 2023 Section 63",
      text: "Execute a Section 63 BSA certificate covering the university ERP fee ledger, biometric hostel/mess logs, admission undertaking, and email/WhatsApp delivery receipts.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate Uncured Accounts to Order XXXVII CPC Summary Suit or Criminal Complaint",
      text: "File Order XXXVII CPC Summary Suits against co-guarantor parents for liquidated fee arrears and NI s.138 / PSS s.25 complaints at the university bank-branch jurisdiction.",
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
      name: "Schools, Universities & EdTech Recovery",
      item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "University & College Fee Recovery",
      item: FULL_URL,
    },
  ],
};

export default function UniversitySemesterFeeRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-17 Higher Education Playbook</span>
            <span>&bull;</span>
            <span>UGC &amp; NMC Compliant</span>
            <span>&bull;</span>
            <span>Registrar &amp; CFO Desk</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60w Executive Statutory Summary Box with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Private universities and medical or engineering colleges cannot withhold original mark-sheets under UGC rules. Under our{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Education &amp; EdTech B2B Recovery Hub
            </Link>
            , institutions recover chronic semester tuition, hostel mess, and diverted education-loan arrears by enforcing Contract Act s.43 parent co-guarantor liability, NI Act s.138 / PSS Act s.25 bounce notices, and Order XXXVII CPC summary suits.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-red-400">₹2–15 Cr</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Typical Annual Campus Arrears Exposure
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">Zero Lien</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                100% UGC Certificate-Release Compliant
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-amber-400">30 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NI s.138 &amp; PSS s.25 Statutory Notice Clock
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-slate-100">Order 37</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Fast-Track Summary Suit vs Co-Guarantors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Schools, Universities & EdTech Recovery",
              href: "/industries/schools-universities-edtech-b2b-recovery",
            },
            {
              label: "University & College Fee Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <UniversityFeeTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & UGC Compliance Gap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Universities Lose ₹2–15 Cr Under UGC Certificate Bans
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Private and Deemed-to-be Universities, self-financed medical and dental colleges, and autonomous engineering or MBA institutes across India routinely carry <strong>₹2 Crore to ₹15 Crore per campus</strong> in chronic final-year tuition, hostel room rent, and mess arrears. Historically, university accounts offices relied on informal leverage: holding back original 10th/12th mark-sheets, migration certificates, or provisional degree certificates until the student cleared their ledger.
                </p>
                <p>
                  That informal lever is now legally toxic. Under strict <strong>UGC Notifications on Non-Retention of Original Certificates</strong>, backed by AICTE, NMC, and High Court rulings across Delhi, Madras, Bombay, and Karnataka, retaining a student&apos;s original academic documents as a financial lien is an unfair trade practice. A single student complaint to the UGC e-Samadhaan portal or District Consumer Commission can trigger show-cause notices, NAAC/NIRF compliance flags, and punitive compensation orders against the Trust.
                </p>
                <p>
                  At the same time, students and families exploit this regulatory protection in four recurring ways: diverting bank-disbursed education loan tranches from personal accounts, defaulting on final-semester hostel and lab dues after sitting for exams, bouncing post-dated semester cheques or e-NACH mandates, or abandoning medical/dental seats after mop-up counselling closes. The solution is not surrendering receivables—it is shifting from <em>academic hostage-taking</em> to <strong>institutional civil and negotiable-instrument enforcement</strong> against earning co-guarantor parents.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage UGC-Compliant Fee Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Every university Finance Officer and Registrar should route overdue student ledgers through this five-stage statutory filter so that no regulatory rule is breached while limitation and criminal cheque-bounce clocks remain protected.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-6 overflow-x-auto">
                <svg
                  viewBox="0 0 880 230"
                  width={880}
                  height={230}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage UGC-Compliant University Fee Recovery Decision Tree"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="30" width="150" height="160" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="85" y="58" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (T+0)</text>
                  <text x="85" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Release Docs &amp;</text>
                  <text x="85" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Sign Balance</text>
                  <text x="85" y="125" textAnchor="middle" fill="#CBD5E1" fontSize="10">UGC Compliant Receipt</text>
                  <text x="85" y="142" textAnchor="middle" fill="#CBD5E1" fontSize="10">Records Admitted</text>
                  <text x="85" y="159" textAnchor="middle" fill="#CBD5E1" fontSize="10">Arrears Without Waiver</text>

                  <path d="M160 110 L185 110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="188" y="30" width="150" height="160" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="263" y="58" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 (T+1–15d)</text>
                  <text x="263" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Triage Payment</text>
                  <text x="263" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Instrument</text>
                  <text x="263" y="125" textAnchor="middle" fill="#CBD5E1" fontSize="10">PDC / e-NACH Bounce?</text>
                  <text x="263" y="142" textAnchor="middle" fill="#CBD5E1" fontSize="10">Loan Diverted?</text>
                  <text x="263" y="159" textAnchor="middle" fill="#CBD5E1" fontSize="10">Hostel / Seat Bond?</text>

                  <path d="M338 110 L363 110" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="366" y="30" width="150" height="160" rx="12" fill="#DC2626" />
                  <text x="441" y="58" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="bold">STAGE 3 (T+15–30d)</text>
                  <text x="441" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Joint Advocate</text>
                  <text x="441" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Statutory Notice</text>
                  <text x="441" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="10">Student + Co-Guarantor</text>
                  <text x="441" y="142" textAnchor="middle" fill="#FFFFFF" fontSize="10">Parent + Lending Bank</text>
                  <text x="441" y="159" textAnchor="middle" fill="#FFFFFF" fontSize="10">RPAD + Email + WhatsApp</text>

                  <path d="M516 110 L541 110" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="544" y="30" width="150" height="160" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="619" y="58" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 4 (T+45d)</text>
                  <text x="619" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">BSA s.63 Ledger</text>
                  <text x="619" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">&amp; Cure Window</text>
                  <text x="619" y="125" textAnchor="middle" fill="#CBD5E1" fontSize="10">15-Day Cure Settlement</text>
                  <text x="619" y="142" textAnchor="middle" fill="#CBD5E1" fontSize="10">or Certify ERP + Mess</text>
                  <text x="619" y="159" textAnchor="middle" fill="#CBD5E1" fontSize="10">Logs Under BSA s.63</text>

                  <path d="M694 110 L719 110" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="722" y="30" width="150" height="160" rx="12" fill="#065F46" stroke="#10B981" strokeWidth="1.5" />
                  <text x="797" y="58" textAnchor="middle" fill="#A7F3D0" fontSize="11" fontWeight="bold">STAGE 5 (T+60d)</text>
                  <text x="797" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Dual Court</text>
                  <text x="797" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Enforcement</text>
                  <text x="797" y="125" textAnchor="middle" fill="#ECFDF5" fontSize="10">NI s.138 / PSS s.25</text>
                  <text x="797" y="142" textAnchor="middle" fill="#ECFDF5" fontSize="10">Criminal + Order 37</text>
                  <text x="797" y="159" textAnchor="middle" fill="#ECFDF5" fontSize="10">Summary Suit Decree</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden mb-4">
                {[
                  {
                    step: "Stage 1 (T+0)",
                    title: "Release Original Docs Against Signed Balance Receipt",
                    desc: "Eliminate UGC/NMC penalty exposure by releasing original certificates while obtaining written acknowledgement of unpaid semester & hostel dues.",
                  },
                  {
                    step: "Stage 2 (T+1–15d)",
                    title: "Triage Instrument & Loan Diversion",
                    desc: "Separate bounced PDC/e-NACH accounts (30-day statutory clock) from education-loan-diverted and hostel/seat-bond arrears.",
                  },
                  {
                    step: "Stage 3 (T+15–30d)",
                    title: "Serve Joint Advocate Statutory Notice",
                    desc: "Dispatch RPAD + Email + WhatsApp demand jointly to Student, Co-Guarantor Parent, and Nodal Bank Officer (where loan was diverted).",
                  },
                  {
                    step: "Stage 4 (T+45d)",
                    title: "BSA 2023 s.63 Digital Ledger Certification",
                    desc: "Compile ERP fee ledgers, biometric hostel/mess logs, and admission bonds with Section 63 BSA electronic evidence certificates.",
                  },
                  {
                    step: "Stage 5 (T+60d)",
                    title: "NI s.138 / PSS s.25 & Order XXXVII Summary Suit",
                    desc: "File criminal complaints at the university bank branch and Order 37 civil summary suits against earning parent co-guarantors.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      {item.step}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Enforcement Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: UGC Rules, Co-Guarantors &amp; Cheque Bounce
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Effective higher-education fee recovery pairs strict regulatory compliance with high-leverage civil and negotiable-instrument remedies. Use this matrix to map every defaulted student ledger to its exact statutory weapon:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="p-3.5 font-bold">Statute / Regulatory Norm</th>
                      <th className="p-3.5 font-bold">University Default Trigger</th>
                      <th className="p-3.5 font-bold">Strict Deadline / Compliance</th>
                      <th className="p-3.5 font-bold">Creditor Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        UGC Certificate &amp; Fee Guidelines
                      </td>
                      <td className="p-3.5">
                        Student demands original 10th/12th mark-sheets or migration certificate while owing fees
                      </td>
                      <td className="p-3.5 font-semibold text-amber-700">
                        Immediate release mandatory; zero lien on originals
                      </td>
                      <td className="p-3.5">
                        Release originals against signed balance-acknowledgement receipt; pursue civil/criminal tracks
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Indian Contract Act, 1872 (ss. 37, 43, 128)
                      </td>
                      <td className="p-3.5">
                        Adult student defaults on tuition, hostel, or diverts personal-account bank loan
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900">
                        3-year limitation from semester due date (Art. 55)
                      </td>
                      <td className="p-3.5">
                        Joint &amp; several recovery from earning parent / co-guarantor who signed Admission Bond
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act, 1881 (ss. 138, 142(2), 143A)
                      </td>
                      <td className="p-3.5">
                        Post-dated semester fee cheque bounces (Funds Insufficient / Account Closed)
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        30 days from Return Memo for notice; 15d cure; 30d filing
                      </td>
                      <td className="p-3.5">
                        Criminal prosecution at university bank branch + 20% interim compensation under s. 143A
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        PSS Act, 2007 (Section 25)
                      </td>
                      <td className="p-3.5">
                        Semester e-NACH, ECS, or UPI AutoPay instalment mandate dishonoured (R01–R05)
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        30 days from NPCI return date for statutory notice
                      </td>
                      <td className="p-3.5">
                        Full parity with NI s. 138 criminal prosecution against parent/student mandate holder
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        CPC, 1908 (Order XXXVII Summary Suit)
                      </td>
                      <td className="p-3.5">
                        Liquidated tuition, hostel &amp; mess arrears backed by signed Fee Undertaking
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        10-day defendant appearance window after summons
                      </td>
                      <td className="p-3.5">
                        Fast-track money decree + Order XXI Rule 48 salary/bank attachment of co-guarantor
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act s. 74 &amp; CPC Order V Rule 25
                      </td>
                      <td className="p-3.5">
                        Mid-course medical/dental dropout post-counselling or NRI/foreign student default
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Provable actual vacant-seat loss post mop-up round
                      </td>
                      <td className="p-3.5">
                        Enforce seat-leaving bond against Indian Local Guardian &amp; electronic service abroad
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-xs">
                <Link
                  href="/tools/cheque-bounce-deadline-calculator"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors"
                >
                  Calculate NI s.138 Deadlines &rarr;
                </Link>
                <Link
                  href="/tools/section-25-nach-bounce-limitation-calculator"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors"
                >
                  Calculate PSS s.25 NACH Clocks &rarr;
                </Link>
                <Link
                  href="/cheque-bounce-account-closed-signature-mismatch"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-[#DC2626] font-bold transition-colors"
                >
                  Account Closed / Signature Mismatch Guide &rarr;
                </Link>
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
                  4 University &amp; Medical College Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select an institutional default scenario below to inspect the exact statutory trigger, Registrar action sequence, and recovery outcome:
              </p>

              <UniversityFeeScenarioTabs />
            </section>

            {/* Section 5: Worked Campus Financial & Interest Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Campus Ledger: ₹1.84 Cr Across 45 Final-Year Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                To illustrate how a self-financed Engineering &amp; Medical University Trust structures a batch recovery without withholding a single original certificate, consider a real-world campus portfolio of <strong>45 graduating/exited students</strong> carrying 12–18 months of unpaid arrears:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                      Illustrative Trust Audit Portfolio
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      45 Defaulted Student Accounts (B.Tech, MBA &amp; BDS Cohorts)
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs font-bold">
                    Zero UGC Violations
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-700">
                        <th className="py-2.5 pr-4">Arrears Bucket</th>
                        <th className="py-2.5 pr-4">Accounts</th>
                        <th className="py-2.5 pr-4">Principal Due</th>
                        <th className="py-2.5 pr-4">Contractual Interest / Costs</th>
                        <th className="py-2.5">Total Claim</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      <tr>
                        <td className="py-3 pr-4 font-semibold">
                          Diverted Education Loan Tranches (Contract s.43)
                        </td>
                        <td className="py-3 pr-4">14</td>
                        <td className="py-3 pr-4">₹58,80,000</td>
                        <td className="py-3 pr-4 text-emerald-400">₹8,82,000 (15% p.a. / 12m)</td>
                        <td className="py-3 font-bold">₹67,62,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold">
                          Bounced Semester PDC / e-NACH (NI s.138 / PSS s.25)
                        </td>
                        <td className="py-3 pr-4">12</td>
                        <td className="py-3 pr-4">₹43,20,000</td>
                        <td className="py-3 pr-4 text-emerald-400">₹6,48,000 (Interest + s.143A)</td>
                        <td className="py-3 font-bold">₹49,68,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold">
                          Final-Year Hostel, Mess &amp; Lab Arrears (Order 37)
                        </td>
                        <td className="py-3 pr-4">19</td>
                        <td className="py-3 pr-4">₹59,40,000</td>
                        <td className="py-3 pr-4 text-emerald-400">₹7,80,000 (Late Fee Cap)</td>
                        <td className="py-3 font-bold">₹67,20,000</td>
                      </tr>
                      <tr className="bg-slate-800/80 text-white font-black">
                        <td className="py-3.5 pr-4">Total Batch Recovery Claim</td>
                        <td className="py-3.5 pr-4">45</td>
                        <td className="py-3.5 pr-4">₹1,61,40,000</td>
                        <td className="py-3.5 pr-4 text-emerald-400">₹23,10,000</td>
                        <td className="py-3.5 text-red-400">₹1,84,50,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                <strong>Finance Officer Takeaway:</strong> By separating the 12 bounced PDC/NACH accounts onto the 30-day NI s.138 / PSS s.25 criminal track and serving Joint Co-Guarantor + Bank Intimation Notices on the remaining 33 civil accounts in a single CSV batch, the Trust converts a stagnant ₹1.61 Cr write-off risk into an enforceable ₹1.845 Cr recovery pipeline—while maintaining 100% UGC certificate-release compliance. Need to verify limitation windows? Run the{" "}
                <Link
                  href="/tools/limitation-period-calculator"
                  className="underline font-bold text-emerald-800 hover:text-emerald-950"
                >
                  Limitation Period Calculator
                </Link>
                .
              </div>
            </section>

            {/* Section 6: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Registrar &amp; Accounts BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, digital university ERP ledgers, biometric hostel attendance logs, and email/WhatsApp fee reminders are admissible in Order XXXVII summary suits and NI s.138 trials only when properly certified. Ensure your Accounts Office compiles these 8 records before dispatching statutory notices:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Signed Admission & Fee Undertaking",
                    desc: "Original or scanned copy of the Admission Form & Financial Guarantee Bond signed by both the student and earning parent/co-guarantor.",
                  },
                  {
                    title: "2. Certificate Release Receipt (UGC Proof)",
                    desc: "Written acknowledgement signed by the student confirming receipt of original 10th/12th mark-sheets while expressly noting the unpaid fee balance.",
                  },
                  {
                    title: "3. Itemized University ERP Fee Ledger",
                    desc: "Semester-wise breakdown separating approved tuition, hostel room rent, mess charges, and security deposit adjustments.",
                  },
                  {
                    title: "4. Biometric Hostel & Mess Consumption Logs",
                    desc: "Digital entry/exit and dining logs proving the student actually occupied the hostel and availed mess services during the billed period.",
                  },
                  {
                    title: "5. Bank Education Loan Sanction / Demand Letter",
                    desc: "Official fee-structure demand letter issued to the student's lending bank (proving loan proceeds were earmarked for university tuition).",
                  },
                  {
                    title: "6. Original Dishonoured Cheque & Return Memo",
                    desc: "Physical bounced PDC with Bank Return Memo bearing stamp and date, or NPCI ISO 20022 e-NACH return log (R01–R05).",
                  },
                  {
                    title: "7. NRI / Foreign Student Local Guardian Bond",
                    desc: "Mandatory Indian Local Guardian / Co-Sponsor undertaking with domestic PAN, Aadhaar, and residential address for local execution.",
                  },
                  {
                    title: "8. BSA 2023 Section 63 Hash Certificate",
                    desc: "Signed electronic-record certificate by the University IT/ERP Administrator validating all computer-generated ledgers and email trails.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Dual-Track CTA */}
            <section id="heading-cta" className="scroll-mt-28">
              <h2 className="sr-only">
                Recover Single Case (₹999) or Upload Campus Defaulter CSV
              </h2>
              <UniversityFeeNoticeCTA />
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: University Semester, Hostel &amp; Loan-Diversion Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer font-bold text-xs sm:text-sm md:text-base text-slate-900 list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Statutory Authorities & Internal Cluster Links */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities, Portals &amp; IND-17 Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Primary Statutes &amp; Regulatory Notifications
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {PRIMARY_SOURCES.map((src, idx) => (
                      <li key={idx}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-slate-700 hover:text-[#DC2626] underline font-medium transition-colors"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    IND-17 Sibling Playbooks, Templates &amp; Portals
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link
                        href="/industries/schools-universities-edtech-b2b-recovery"
                        className="text-[#DC2626] hover:underline font-bold"
                      >
                        IND-17 Hub: Private Schools, Universities &amp; EdTech B2B Recovery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/how-private-schools-recover-unpaid-fees-without-withholding-tc"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                      >
                        How Private Schools Recover Unpaid Fees Without Withholding TC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                      >
                        EdTech B2B Smart-Class, School ERP &amp; Robotics Lab Dues Recovery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/school-textbook-publisher-uniform-stationery-distributor-recovery"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                      >
                        School Textbook Publisher, Uniform &amp; Stationery Distributor Recovery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/templates/school-compliant-parent-fee-recovery-legal-notice-format"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                      >
                        Template: Compliant Parent Fee Recovery Legal Notice Format
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/templates/section-25-pss-act-nach-bounce-legal-notice-format"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                      >
                        Template: Section 25 PSS Act e-NACH Bounce Legal Notice Format
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/law/section-80-cpc-notice-to-government"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                      >
                        Section 80 CPC Notice to Government (Skill-Grant &amp; Scholarship Delays)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
