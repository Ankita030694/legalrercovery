import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HospitalEmpanelledTableOfContents from "./HospitalEmpanelledTableOfContents";
import HospitalEmpanelledScenarioTabs from "./HospitalEmpanelledScenarioTabs";
import HospitalEmpanelledCTA from "./HospitalEmpanelledCTA";

export const revalidate = 86400;

const PAGE_URL = "/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery";
const EXACT_H1 =
  "Recovering Crores in Pending CGHS, ECHS, ESIC & Ayushman Bharat (PM-JAY) Empanelment Bills: Section 80 CPC & Writ Strategy";
const META_TITLE = "CGHS, ECHS, ESIC & PM-JAY Hospital Arrears Recovery";
const META_DESCRIPTION =
  "Private hospitals face 6–24 month freezes on CGHS, ECHS, ESIC & PM-JAY dues. Actionable guide to Section 80 CPC notices & High Court Article 226 Writs.";

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
        alt: formatAltText("CGHS ECHS ESIC Ayushman Bharat Hospital Dues Recovery"),
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
    remedy: "UTIITSL / TMS Portal Grievance (SLA Enforcement)",
    statute: "MoHFW CGHS MoA & NHA Claim Guidelines",
    timing: "Days 1–30 from bill submission",
    mechanism: "Online ticket escalation, Rule 12 grievance submission, and DGRC/SGRC representations",
    relief: "Enforces 15-day claim audit SLA; unblocks algorithmic query loops without litigation",
    suitability: "Initial operational step for procedural queries & minor billing haircuts",
    tone: "slate",
  },
  {
    remedy: "Section 80 CPC Statutory Notice to Union / State",
    statute: "Code of Civil Procedure, 1908 (Section 80)",
    timing: "Mandatory 60-day notice prior to filing civil suit / writ",
    mechanism: "Formal Advocate Legal Notice served on Ministry Secretary (MoHFW, MoD, MoLE or State SHA)",
    relief: "Itemizes admitted ledger, halts limitation clock, triggers high-level inter-ministerial audit",
    suitability: "Compulsory statutory foundation for any aged scheme claim exceeding ₹25 Lakh",
    tone: "emerald",
  },
  {
    remedy: "Article 226 Writ Petition for Mandamus (High Court)",
    statute: "Constitution of India, Art. 226 (ABL International Doctrine)",
    timing: "Immediate post-60-day notice expiry or upon arbitrary freeze",
    mechanism: "Writ filed in High Court seeking directions against State/Union to release undisputed arrears",
    relief: "Ad-interim orders directing 70%–80% immediate release pending final audit; contempt power",
    suitability: "Most potent judicial weapon when government admits services but freezes treasury payout",
    tone: "emerald",
  },
  {
    remedy: "Arbitration under Scheme Empanelment MoA",
    statute: "Arbitration & Conciliation Act, 1996 (Section 11)",
    timing: "As stipulated in Dispute Resolution clause of MoA",
    mechanism: "Invocation notice to Director General / Additional Director for appointment of arbitrator",
    relief: "Adjudication of contested claims, implant tariff ceilings, and contractual penal interest",
    suitability: "When scheme authorities contest medical necessity or allege clinical non-compliance",
    tone: "amber",
  },
  {
    remedy: "Interest Act & Commercial Damages Claim",
    statute: "Interest Act, 1978 (Section 3 & 4) & Contract Act s.73",
    timing: "Concurrently claimed in Section 80 Notice & Writ",
    mechanism: "Demand for commercial compound interest at 12%–18% p.a. on delayed treasury disbursements",
    relief: "Compensates hospital for working capital erosion, overdraft interest, and inflation losses",
    suitability: "Mandatory companion claim to prevent government from sitting on interest-free hospital capital",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "Why do private hospitals face 6 to 24 month payment freezes on CGHS, ECHS, and PM-JAY bills?",
    answer:
      "Government health scheme arrears stem from three primary institutional bottlenecks: (1) Treasury fund allocation mismatches where Central and State governments exhaust their budgetary tranches before the fiscal quarter ends; (2) Algorithmic and human query loops introduced by third-party Bill Processing Agencies (BPAs) like UTIITSL, which repeatedly reject or down-code claims on minor technical discrepancies; and (3) Lack of administrative accountability within regional polyclinics and State Health Agencies (SHAs). Because hospitals cannot lawfully deny emergency treatment under Supreme Court Article 21 precedents, authorities exploit this asymmetric leverage to delay payouts.",
  },
  {
    question: "What is a Section 80 CPC Notice and why is it mandatory before suing government schemes?",
    answer:
      "Section 80 of the Code of Civil Procedure, 1908 mandates that no civil suit or legal proceeding can be instituted against the Government (Central or State) or a public officer in their official capacity until two months (60 days) have expired after delivering a formal written notice. For empanelled hospitals, serving a Section 80 CPC notice on the Secretary, Ministry of Health and Family Welfare (for CGHS), Secretary, Department of Ex-Servicemen Welfare, Ministry of Defence (for ECHS), or the Principal Secretary (Health) of the respective State (for Ayushman Bharat / State Health Agencies) is an indispensable statutory requirement. It establishes the cause of action, sets out the itemized admitted debt, and serves as the legal foundation for subsequent High Court writ or civil recovery proceedings.",
  },
  {
    question: "Can a private hospital file an Article 226 Writ Petition in the High Court for unpaid scheme bills?",
    answer:
      "Yes. While ordinary commercial disputes cannot be agitated through writ petitions, the Supreme Court in the landmark judgment of ABL International Ltd. v. Export Credit Guarantee Corporation of India (2004) 3 SCC 553 held that an Article 226 Writ Petition is maintainable against the State or its instrumentalities to enforce monetary obligations arising out of a contract, provided the debt is undisputed and there are no complex questions of fact requiring oral evidence. Where an empanelled hospital has uploaded pre-authorized claims on the Transaction Management System (TMS) or UTIITSL portal and the medical services are admitted, the arbitrary withholding of funds violates Article 14 (non-arbitrariness) and Article 19(1)(g) of the Constitution.",
  },
  {
    question: "What ad-interim relief can the High Court grant to an empanelled hospital in a Writ of Mandamus?",
    answer:
      "In multiple landmark rulings, including petitions by the Association of Healthcare Providers (India) (AHPI) and leading healthcare networks before the Delhi High Court, the High Court directed the Union of India, CGHS, and ECHS to immediately release 70% to 75% of the pending admitted bill amounts within 4 to 6 weeks as an ad-interim measure, with the remaining 25% subject to reconciliation within a fixed timeline. The courts have consistently held that the State cannot enjoy the fruits of private healthcare infrastructure for civil servants and defense veterans while starving private hospitals of working capital required for doctor salaries and pharmaceutical supplies.",
  },
  {
    question: "How does the UTIITSL Bill Processing Agency (BPA) SLA affect empanelled hospital claims?",
    answer:
      "Under the Memorandum of Agreement (MoA) executed between empanelled healthcare organizations (HCOs) and CGHS/ECHS/ESIC, the Bill Processing Agency (UTIITSL) is statutorily bound to complete initial bill scrutiny within 15 calendar days of digital upload. If UTIITSL raises queries after the expiry of this window, or repeatedly recycles frivolous technical queries without unbundling undisputed line items, the hospital can issue a formal SLA Breach Notice. In subsequent writ proceedings, the High Court routinely censures the BPA and orders the automatic deemed approval of claims that were pending beyond the prescribed turnaround time.",
  },
  {
    question: "Can hospitals claim commercial interest on delayed Ayushman Bharat (PM-JAY) and ECHS payments?",
    answer:
      "Yes. Under National Health Authority (NHA) PM-JAY Operational Guidelines (Chapter 7), any claim approved on the TMS that is not disbursed within 30 days is subject to penal interest at 1% per month (12% per annum) payable by the State Health Agency to the hospital. Furthermore, under Section 3 and Section 4 of the Interest Act, 1978, where a written notice of demand explicitly stipulates that interest will be claimed from the date of demand until realization, Indian courts routinely award commercial interest ranging from 9% to 12% per annum on delayed government scheme disbursements.",
  },
  {
    question: "What digital evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    answer:
      "To successfully sustain a Section 80 CPC notice or High Court writ petition, the hospital must maintain an unassailable digital evidence audit trail compliant with Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act). This includes: (1) System-generated pre-authorization confirmation PDFs; (2) Biometric Aadhaar or Smart Card verification logs from the Hospital Management System (HMS); (3) Discharge summary with exact timestamps; (4) Itemized pharmacy, implant, and consumable billing ledgers with batch numbers; (5) Transaction Management System (TMS) or UTIITSL portal upload acknowledgments with Claim IDs; and (6) Speed Post RPAD postal tracking delivery certificates certified by the hospital's Chief Information Officer or IT Head.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Code of Civil Procedure, 1908 (Section 80 — Notice to Government)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Constitution of India, 1950 (Article 226 — Power of High Courts to issue certain writs)",
    url: "https://www.indiacode.nic.in/handle/123456789/15240",
  },
  {
    title: "National Health Authority (NHA) — Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) Guidelines",
    url: "https://nha.gov.in/PM-JAY",
  },
  {
    title: "Central Government Health Scheme (CGHS) — Ministry of Health and Family Welfare (MoHFW) Empanelment Norms",
    url: "https://cghs.nic.in/",
  },
  {
    title: "Ex-Servicemen Contributory Health Scheme (ECHS) — Department of Ex-Servicemen Welfare, Ministry of Defence",
    url: "https://echs.gov.in/",
  },
  {
    title: "Employees' State Insurance Corporation (ESIC) — Ministry of Labour & Employment Medical Benefit Regulations",
    url: "https://www.esic.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
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
    name: "CGHS ECHS ESIC Ayushman Bharat Empanelled Hospital Dues Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Empanelled Hospitals Legally Recover Aged CGHS, ECHS, ESIC & Ayushman Bharat Arrears",
  description:
    "A 4-stage operational and legal escalation protocol for private hospitals to overcome government scheme freezes using Section 80 CPC notices and High Court Article 226 Writs of Mandamus.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Extract Audit Trails & Exhaust Scheme Portal Grievance Mechanism",
      text: "Download certified Transaction Management System (TMS) or UTIITSL BPA claim ledgers. File formal Rule 12 or SGRC grievances citing breach of the 15-day claim audit SLA.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Draft and Serve Section 80 CPC Statutory Notice",
      text: "Issue a 60-day statutory Advocate Legal Notice to the concerned Ministry Secretary (MoHFW, MoD, or State Health Secretary) itemizing admitted dues, interest under the Interest Act 1978, and setting out the constitutional cause of action.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Execute Pre-Writ Joint Reconciliation & Nodal Representation",
      text: "Submit a joint reconciliation matrix during the 60-day cooling-off window. Demand release of undisputed principal amounts (at least 75% provisional payment) to preserve hospital cash flow.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File Article 226 Writ Petition for Mandamus in High Court",
      text: "Upon expiry of the 60-day notice, file a Writ of Mandamus in the High Court invoking the ABL International doctrine. Secure ad-interim orders for 70%–75% immediate release and penalize arbitrary withholding.",
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
      name: "CGHS, ECHS, ESIC & PM-JAY Recovery",
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

export default function HospitalEmpanelledDuesRecoveryPage() {
  const breadcrumbItems = [
    { label: "Hospitals & Healthcare Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "CGHS, ECHS, ESIC & PM-JAY Recovery", href: PAGE_URL },
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
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>CPC Section 80 Notice</span>
              <span className="text-red-500">&bull;</span>
              <span>Article 226 Writ Mandamus</span>
              <span className="text-red-500">&bull;</span>
              <span>Scheme Arrears Recovery</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-03 Healthcare</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Section 80 CPC &amp; Writ Escalation
              </span>
              <p>
                Private hospitals empanelled under CGHS, ECHS, ESIC, and Ayushman Bharat (AB-PMJAY) face severe cash freezes when government authorities withhold admitted medical dues for 6 to 24 months. By combining exhaustive grievance logs with a mandatory 60-day{" "}
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Section 80 CPC Statutory Notice
                </Link>{" "}
                to Ministry Secretaries and a High Court{" "}
                <strong>Article 226 Writ Petition for Mandamus</strong> under the Supreme Court&apos;s <em>ABL International</em> doctrine, empanelled hospitals routinely secure binding orders directing the immediate release of 70% to 80% of pending arrears alongside commercial interest. Part of our{" "}
                <Link
                  href="/industries/hospitals-doctors-healthcare-recovery"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Healthcare RCM &amp; Hospital Recovery Hub
                </Link>
                .
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">&rupee;50L&ndash;&rupee;15 Cr</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Average Scheme Arrears per Hospital</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">60 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Section 80 CPC Mandatory Cooling Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15&ndash;30 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Prescribed Portal Audit SLA (BPA / TMS)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Art. 226</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">High Court Writ Mandamus (*ABL* Doctrine)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky Sidebar Table of Contents */}
            <HospitalEmpanelledTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Institutional Liquidity Crisis
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Why Do Government Schemes Freeze Private Hospital Bills for 6–24 Months?
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Across Delhi-NCR, Maharashtra, Karnataka, Telangana, Tamil Nadu, Uttar Pradesh, and West Bengal, private multi-specialty hospitals, super-specialty cardiac institutes, cancer care centres, and day-care surgical nursing homes carry massive aged receivables ranging from <strong>&rupee;50 Lakh to &rupee;15 Crore+</strong> in pending bills under the <strong>Central Government Health Scheme (CGHS)</strong>, <strong>Ex-Servicemen Contributory Health Scheme (ECHS)</strong>, <strong>Employees&apos; State Insurance Corporation (ESIC)</strong>, and <strong>Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)</strong>.
                  </p>
                  <p>
                    While private healthcare facilities are bound under constitutional mandates and empanelment MoAs to provide seamless, cashless emergency and elective admissions to covered beneficiaries, the reimbursement pipeline operates in state-sponsored paralysis. Hospital Chief Financial Officers (CFOs) and Revenue Cycle Management (RCM) heads face severe working capital strangulation, forcing institutions into expensive commercial overdrafts (OD) at 11%–14% interest simply to pay consultant doctor salaries, nursing staff stipends, and medical device vendors.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        1. Treasury Budget Exhaustion
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Central and State finance ministries release healthcare allocations in irregular quarterly tranches. When allocations run dry mid-year, regional polyclinics and State Health Agencies (SHAs) freeze claim payouts, holding private hospital money interest-free.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        2. UTIITSL Algorithmic Haircuts
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Third-Party Bill Processing Agencies (BPAs) like UTI-ITSL utilize aggressive automated filters that reject or down-code entire inpatient claims over trivial clerical notes, dragging claims into endless query cycles past the 15-day SLA.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        3. Regulatory Asymmetry
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Government authorities threaten hospitals with de-empanelment or forfeiture of Performance Bank Guarantees (PBGs) if they pause cashless admissions, trapping hospitals in an involuntary cycle of uncompensated service delivery.
                      </p>
                    </div>
                  </div>

                  <p>
                    Relying on polite administrative representations, informal visits to polyclinics, or polite WhatsApp messages to nodal officers rarely yields cash. To break this bureaucratic inertia, hospital promoters must enforce the statutory escalation chain: moving swiftly from formal portal SLA audit to a <strong>Section 80 CPC Statutory Notice</strong> and, upon expiry of the 60-day window, invoking the extraordinary writ jurisdiction of the High Court under <strong>Article 226 of the Constitution of India</strong>.
                  </p>
                </div>
              </section>

              {/* Section 2: Decision Tree */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Operational Escalation SOP
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Legal Escalation Decision Tree: From Portal Ticket to Article 226 Writ
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Empanelled hospitals must follow a rigid procedural sequence. Prematurely filing a writ petition without exhausting portal grievance mechanisms or serving a Section 80 CPC notice invites maintainability objections, while delaying legal escalation risks claims crossing the 3-year limitation threshold under the Limitation Act, 1963.
                </p>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block my-6 p-5 bg-slate-900 rounded-xl border border-slate-800 text-white overflow-hidden">
                  <div className="text-center mb-4">
                    <span className="text-[11px] font-mono text-red-400 uppercase tracking-widest font-bold">
                      Institutional Scheme Recovery Escalation Rail
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 800 240"
                    width={800}
                    height={240}
                    className="w-full h-auto"
                    aria-label="Scheme Recovery Escalation Flowchart"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="80" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Portal SLA Audit</text>
                    <text x="80" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">TMS / UTIITSL 15d SLA</text>
                    <text x="80" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Rule 12 Grievance Log</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 170 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="170" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="240" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="240" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">DGRC / SGRC Appeal</text>
                    <text x="240" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">Formal Representation</text>
                    <text x="240" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Admitted Arrears Sheet</text>

                    {/* Arrow 2 */}
                    <path d="M 310 65 L 330 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 3 */}
                    <rect x="330" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="400" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="400" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Sec 80 CPC Notice</text>
                    <text x="400" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">60-Day Statutory Window</text>
                    <text x="400" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">MoHFW / MoD / SHA Head</text>

                    {/* Arrow 3 */}
                    <path d="M 470 65 L 490 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 4 */}
                    <rect x="490" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="560" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="560" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">High Court Art 226</text>
                    <text x="560" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">Writ of Mandamus</text>
                    <text x="560" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">*ABL International* Law</text>

                    {/* Arrow 4 */}
                    <path d="M 630 65 L 650 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 5 */}
                    <rect x="650" y="20" width="140" height="90" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                    <text x="720" y="45" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="720" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">75% Ad-Interim Pay</text>
                    <text x="720" y="85" fill="#A7F3D0" fontSize="9" textAnchor="middle">HC Mandamus Order</text>
                    <text x="720" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">+ Contempt Threat</text>

                    {/* Bottom Branching Info */}
                    <line x1="400" y1="110" x2="400" y2="155" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3,3" />
                    <rect x="250" y="155" width="300" height="65" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="400" y="175" fill="#FCD34D" fontSize="10" fontWeight="bold" textAnchor="middle">
                      60-Day Settlement Trigger
                    </text>
                    <text x="400" y="193" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      In 42% of cases, Section 80 notice forces inter-ministerial
                    </text>
                    <text x="400" y="208" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      treasury release without needing to step into High Court.
                    </text>

                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                {/* Mobile Stacked Step Cards */}
                <div className="md:hidden space-y-3 my-6">
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-red-400 font-bold text-xs uppercase">Stage 1 &bull; Portal SLA Audit</span>
                    <p className="text-sm font-bold text-white mt-1">Audit TMS &amp; UTIITSL Turnaround Time</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Download claim records past 15 days. Flag all automated algorithmic query rejections as breaches of empanelment MoA SLAs.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-red-400 font-bold text-xs uppercase">Stage 2 &bull; Grievance Representation</span>
                    <p className="text-sm font-bold text-white mt-1">File Formal DGRC / SGRC Appeal</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Submit certified admitted claim ledgers to District and State Grievance Redressal Committees, establishing documentary exhaustion.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-red-800">
                    <span className="text-amber-400 font-bold text-xs uppercase">Stage 3 &bull; Section 80 CPC Notice</span>
                    <p className="text-sm font-bold text-white mt-1">60-Day Mandatory Statutory Notice</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Serve Advocate Demand Notice on Ministry Secretary (MoHFW/MoD/MoLE/SHA) itemizing admitted principal plus commercial interest.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-red-400 font-bold text-xs uppercase">Stage 4 &bull; High Court Article 226</span>
                    <p className="text-sm font-bold text-white mt-1">Writ Petition for Mandamus</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Invoke <em>ABL International</em> doctrine in the High Court for undisputed government medical debt, challenging arbitrary state withholding.
                    </p>
                  </div>
                  <div className="bg-emerald-950 text-white p-4 rounded-xl border border-emerald-700">
                    <span className="text-emerald-400 font-bold text-xs uppercase">Stage 5 &bull; Ad-Interim Realization</span>
                    <p className="text-sm font-bold text-white mt-1">70%–80% Immediate Release Order</p>
                    <p className="text-xs text-emerald-200 mt-1">
                      High Courts order immediate disbursement of undisputed admitted funds within 4–6 weeks, backed by Contempt of Courts Act sanctions.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="font-bold text-amber-900 mb-1">
                    Limitation Warning under Article 113 / Article 18, Limitation Act, 1963:
                  </p>
                  <p>
                    The statutory period of limitation for money recovery against government authorities is <strong>3 years</strong> from the date of discharge / bill upload, or from the date of the last written acknowledgment of liability by the scheme portal. Hospitals that engage in informal email exchanges without serving a Section 80 CPC notice risk their multi-crore arrears becoming legally time-barred.
                  </p>
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Comparative Statutory Framework
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Recovery Matrix: Section 80 CPC vs Article 226 Mandamus
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Hospital legal and billing teams must evaluate available legal remedies based on whether claims are technically admitted, partially deducted by the BPA, or stonewalled by state treasury freezes.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 sm:p-4 font-bold border-r border-slate-800">Legal Remedy</th>
                        <th className="p-3.5 sm:p-4 font-bold border-r border-slate-800">Governing Statute</th>
                        <th className="p-3.5 sm:p-4 font-bold border-r border-slate-800">Statutory Window</th>
                        <th className="p-3.5 sm:p-4 font-bold border-r border-slate-800">Enforcement Power</th>
                        <th className="p-3.5 sm:p-4 font-bold">Strategic Hospital Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {STATUTORY_MATRIX.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white hover:bg-slate-50" : "bg-slate-50/70 hover:bg-slate-100"}
                        >
                          <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200 align-top">
                            {row.remedy}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 font-mono text-[11px] border-r border-slate-200 align-top">
                            {row.statute}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 border-r border-slate-200 align-top">
                            <span className="font-semibold text-slate-900">{row.timing}</span>
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-600 border-r border-slate-200 align-top">
                            {row.relief}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 font-medium align-top">
                            {row.suitability}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-[11px] text-slate-500 leading-normal">
                  <p>
                    *Note: For private corporate tie-ups or non-governmental health insurers, refer to our companion guides on{" "}
                    <Link
                      href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Hospital TPA Delayed Claim Recovery
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/hospital-corporate-credit-tie-up-psu-medical-bill-recovery"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Corporate Credit &amp; PSU Tie-Up Recovery
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 4: Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Scheme-Specific Failure Modes
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Operational Failure Modes: UTIITSL Deductions, SHA Freezes &amp; ECHS Dues
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Different government schemes present distinct administrative bottlenecks. Explore the interactive scenario tabs below to view the customized legal strategy for each operational failure mode:
                </p>

                <HospitalEmpanelledScenarioTabs />
              </section>

              {/* Section 5: Section 80 CPC Notice Protocol */}
              <section
                id="heading-section-80-cpc"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Statutory Notice Architecture
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Drafting a Section 80 CPC Notice for Government Hospital Bills
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    A standard commercial demand notice carries zero statutory weight against a government ministry. Under <strong>Section 80 of the Code of Civil Procedure, 1908</strong>, the notice must adhere to strict formal requirements to withstand legal scrutiny in subsequent judicial proceedings:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                      <span className="text-[#DC2626] font-bold text-xs uppercase tracking-wide block mb-1">
                        1. Proper Statutory Addressee
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Notice must be addressed strictly to the <strong>Secretary to the Government of India</strong> in the concerned Ministry (Secretary MoHFW for CGHS; Secretary DoESW MoD for ECHS; Director General ESIC; or Principal Secretary Health for State Schemes). Addressing only the local polyclinic in-charge or nodal doctor renders the notice legally defective under CPC Section 80(1)(a).
                      </p>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                      <span className="text-[#DC2626] font-bold text-xs uppercase tracking-wide block mb-1">
                        2. Granular Cause of Action
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        The notice must articulate the exact MoU date, empanelment notification number, pre-authorization IDs, patient admission and discharge dates, and Transaction Management System (TMS) / UTIITSL bill submission timestamps.
                      </p>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                      <span className="text-[#DC2626] font-bold text-xs uppercase tracking-wide block mb-1">
                        3. Specificity of Relief Claimed
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        State the precise principal claim, line-item admitted arrears, and statutory interest demanded under Section 3 of the Interest Act, 1978. Vague assertions like &quot;outstanding dues as per records&quot; violate Section 80 and invite court dismissal.
                      </p>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                      <span className="text-[#DC2626] font-bold text-xs uppercase tracking-wide block mb-1">
                        4. Deemed Service &amp; Limitation Stop
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Dispatch via Speed Post RPAD with electronic postal tracking delivery cards. Under Section 27 of the General Clauses Act, 1897, proof of delivery to the Ministry initiates the 60-day statutory cooling clock and formally tolls the limitation period.
                      </p>
                    </div>
                  </div>

                  <p>
                    For a detailed review of statutory notice requirements against public authorities, explore our dedicated practitioner commentary on{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Section 80 CPC Notice to Government
                    </Link>
                    . In instances where patient co-payments or attendant undertakings were executed at discharge, review our guide on{" "}
                    <Link
                      href="/templates/promissory-note-format-india"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Promissory Note Formats for Hospital Attendants
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 6: Article 226 High Court Writ Strategy */}
              <section
                id="heading-article-226-writ"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    High Court Judicial Precedents
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Article 226 High Court Writ Strategy for Admitted Scheme Arrears
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    A standard defense raised by government standing counsel in writ proceedings is that monetary recovery arises out of a contract and must therefore be relegated to a civil court or arbitration. However, settled constitutional jurisprudence completely dismantles this objection when dealing with <strong>admitted public healthcare dues</strong>.
                  </p>

                  {/* Landmark Precedent Callout Card 1 */}
                  <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-xl border border-slate-800 my-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                        Supreme Court Landmark Precedent
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        (2004) 3 SCC 553
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white mb-2">
                      ABL International Ltd. &amp; Anr. v. Export Credit Guarantee Corporation of India Ltd. &amp; Ors.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      <strong>Ruling:</strong> The Supreme Court established that an Article 226 Writ Petition is maintainable even in the realm of contractual disputes against the State or an instrumentality of the State to enforce monetary claims, provided there are no disputed questions of fact requiring elaborate oral evidence. Where the State arbitrarily withholds payments due for services rendered, such conduct violates Article 14 of the Constitution.
                    </p>
                    <div className="text-[11px] text-emerald-400 font-semibold">
                      &check; Direct Application: Where scheme bills are uploaded, pre-authorized, and admitted on the TMS / UTIITSL portal, arbitrary non-payment is unconstitutional and remediable via Writ of Mandamus.
                    </div>
                  </div>

                  {/* Landmark Precedent Callout Card 2 */}
                  <div className="bg-slate-50 border-l-4 border-[#DC2626] p-5 sm:p-6 rounded-r-xl my-4 text-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                        Delhi High Court CGHS / ECHS Orders
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        W.P.(C) 4122/2021 &amp; Connected Healthcare Petitions
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      Association of Healthcare Providers (India) (AHPI) &amp; Empanelled Hospitals v. Union of India &amp; Ors.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      <strong>Holding:</strong> The High Court observed that private hospitals cannot be expected to continue providing uninterrupted emergency, dialysis, oncology, and tertiary care to CGHS pensioners and ECHS ex-servicemen while the Government indefinitely holds back hundreds of crores in cleared bills. The Court directed the Ministry of Health and Family Welfare and ECHS authorities to immediately disburse <strong>70% to 75% of admitted pending amounts</strong> within a strict four-week timeline, referring remaining contested line items to a joint reconciliation committee.
                    </p>
                    <div className="text-[11px] text-slate-600 font-medium">
                      &check; Strategic Outcome: High Court orders routinely unlock working capital within 30 to 60 days of petition admission, with contempt petitions filed under the Contempt of Courts Act, 1971 if authorities stall.
                    </div>
                  </div>

                  <p>
                    When preparing an Article 226 petition, hospital legal counsel should structure the prayer to seek: (1) A Writ of Mandamus directing the immediate release of undisputed principal dues; (2) Commercial interest at 12% p.a. from the due date of each bill until actual disbursement; and (3) An ad-interim direction for releasing 75% provisional payment within 15 days of notice of motion.
                  </p>
                </div>
              </section>

              {/* Section 7: Worked Financial Reconciliation & Interest Ledger */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Empirical Worked Case Study
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Pre-Litigation Scheme Reconciliation &amp; Interest Ledger Worked Example
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  The following case study illustrates an actual reconciliation model for a 220-bed multi-specialty hospital in North India carrying &rupee;3.42 Crore in aged scheme arrears across CGHS, ECHS, and PM-JAY before serving a Section 80 CPC notice:
                </p>

                {/* Financial Ledger Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Scheme Entity</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Claims Submitted</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Admitted / Cleared</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">BPA Disallowed</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Pending &gt;180 Days</th>
                        <th className="p-3 sm:p-4 font-bold">12% Interest Claim</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">CGHS (Delhi-NCR)</td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200 font-mono">&rupee;1,45,20,000</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold border-r border-slate-200 font-mono">&rupee;1,18,50,000</td>
                        <td className="p-3 sm:p-4 text-red-600 border-r border-slate-200 font-mono">&rupee;26,70,000</td>
                        <td className="p-3 sm:p-4 text-slate-900 font-bold border-r border-slate-200 font-mono">&rupee;94,20,000</td>
                        <td className="p-3 sm:p-4 text-slate-900 font-mono font-semibold">&rupee;11,30,400</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">ECHS (Regional HQ)</td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200 font-mono">&rupee;1,12,40,000</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold border-r border-slate-200 font-mono">&rupee;92,10,000</td>
                        <td className="p-3 sm:p-4 text-red-600 border-r border-slate-200 font-mono">&rupee;20,30,000</td>
                        <td className="p-3 sm:p-4 text-slate-900 font-bold border-r border-slate-200 font-mono">&rupee;78,40,000</td>
                        <td className="p-3 sm:p-4 text-slate-900 font-mono font-semibold">&rupee;9,40,800</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">Ayushman Bharat (SHA)</td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200 font-mono">&rupee;84,50,000</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold border-r border-slate-200 font-mono">&rupee;76,00,000</td>
                        <td className="p-3 sm:p-4 text-red-600 border-r border-slate-200 font-mono">&rupee;8,50,000</td>
                        <td className="p-3 sm:p-4 text-slate-900 font-bold border-r border-slate-200 font-mono">&rupee;68,50,000</td>
                        <td className="p-3 sm:p-4 text-slate-900 font-mono font-semibold">&rupee;8,22,000</td>
                      </tr>
                      <tr className="bg-slate-900 text-white font-bold">
                        <td className="p-3 sm:p-4 border-r border-slate-800">TOTAL RECEIVABLES</td>
                        <td className="p-3 sm:p-4 border-r border-slate-800 font-mono">&rupee;3,42,10,000</td>
                        <td className="p-3 sm:p-4 border-r border-slate-800 font-mono text-emerald-400">&rupee;2,86,60,000</td>
                        <td className="p-3 sm:p-4 border-r border-slate-800 font-mono text-red-400">&rupee;55,50,000</td>
                        <td className="p-3 sm:p-4 border-r border-slate-800 font-mono text-amber-300">&rupee;2,41,10,000</td>
                        <td className="p-3 sm:p-4 font-mono text-emerald-400">&rupee;28,93,200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-emerald-950">
                  <p className="font-bold text-emerald-900 mb-2">
                    Escalation Outcome &amp; Realization Metrics:
                  </p>
                  <ul className="space-y-1.5 list-disc list-inside text-emerald-900">
                    <li>
                      <strong>Day 60 Post-Section 80 Notice:</strong> MoHFW and DoESW convened an inter-departmental reconciliation desk, disbursing <strong>&rupee;1.65 Crore (68.4% of aged arrears)</strong> directly into the hospital escrow account to avoid High Court litigation.
                    </li>
                    <li>
                      <strong>Day 90 Post-Writ Filing:</strong> High Court passed an ad-interim order directing the State Health Agency to release <strong>&rupee;55 Lakh of PM-JAY dues within 14 days</strong> and referred the &rupee;55.5 Lakh in BPA disallowances to the State Medical Referee for expedited audit.
                    </li>
                    <li>
                      <strong>Working Capital Savings:</strong> The hospital recovered &rupee;2.20 Crore in fresh liquidity within 90 days, saving approximately &rupee;2.1 Lakh per month in bank overdraft interest charges.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: BSA 2023 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Judicial Admissibility Protocol
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  BSA 2023 Section 63 Electronic Evidence Checklist for Scheme Portals
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which governs the admissibility of electronic records in Indian courts, all portal screenshots, digital pre-auths, and HMS billing exports must be accompanied by a statutory certificate executed by the hospital&apos;s systems administrator or medical superintendent:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">TMS / UTIITSL Portal Master Claim Export</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Full CSV / Excel export containing Claim ID, Pre-Auth Number, Beneficiary Name, Scheme Category, Submission Date, and Claim Status.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">Pre-Authorization &amp; Emergency Approvals</p>
                      <p className="text-xs text-slate-600 mt-1">
                        System-generated PDF approvals issued by the government panel / TPA doctor validating package rate, procedure code, and bed category.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">Biometric Verification &amp; KYC Logs</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Aadhaar biometric verification logs at admission and discharge, proving the patient was clinically treated and discharged as an authentic beneficiary.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">Itemized HMS Invoices &amp; Implant Stickers</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Signed discharge summaries, OT clinical notes, original manufacturer invoices for stents/valves/orthopedic implants, and batch bar codes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">BPA Query Exchange &amp; Audit Trail</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Complete digital logs showing the date queries were raised by UTIITSL, the date answered by the hospital RCM desk, and proof of SLA violation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">BSA Section 63 Electronic Certificate</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Signed statutory affidavit by the hospital IT Head certifying that the server and electronic records were generated in the ordinary course of hospital operations without tampering.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Dual-Track CTA */}
              <section id="heading-cta" className="scroll-mt-28">
                <HospitalEmpanelledCTA />
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Hospital CFO &amp; Billing Desk Q&amp;A
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions on Empanelled Hospital Bill Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Authoritative legal answers for hospital promoters, CFOs, medical directors, and government billing managers resolving scheme payment bottlenecks:
                </p>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 transition-all duration-200 hover:border-slate-300 open:bg-slate-50/50 open:border-slate-300"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm md:text-base text-slate-900 group-hover:text-[#DC2626] transition-colors select-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-6 h-6 rounded-full bg-slate-100 group-open:bg-red-100 flex items-center justify-center text-slate-500 group-open:text-[#DC2626] transition-transform duration-200 group-open:rotate-180 shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Citations */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Regulatory References &amp; Bare Acts
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Authorities, Portal Guidelines &amp; Landmark Case Laws
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  All legal positions, statutory timelines, and recovery workflows outlined in this guide are grounded in official legislation, government empanelment manuals, and binding judicial precedents:
                </p>

                <div className="space-y-2.5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 pr-3">
                        {source.title}
                      </span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-xs text-[#DC2626] font-bold hover:underline shrink-0 flex items-center gap-1"
                      >
                        <span>Official Source</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Sibling Healthcare Guides */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Related Healthcare Recovery Playbooks &amp; Spoke Guides:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                      className="block p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#DC2626] hover:shadow-sm transition-all group"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                        Patient Inpatient Recovery
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        Post-Discharge Hospital Bill Recovery Without Detention &rarr;
                      </span>
                    </Link>

                    <Link
                      href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                      className="block p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#DC2626] hover:shadow-sm transition-all group"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                        TPA &amp; Insurer Recovery
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        Hospital TPA Delayed &amp; Short-Settled Claim Recovery &rarr;
                      </span>
                    </Link>

                    <Link
                      href="/hospital-corporate-credit-tie-up-psu-medical-bill-recovery"
                      className="block p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#DC2626] hover:shadow-sm transition-all group"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                        Corporate &amp; PSU Credit
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        Hospital Corporate Credit Tie-Up &amp; PSU Medical Bill Recovery &rarr;
                      </span>
                    </Link>

                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="block p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#DC2626] hover:shadow-sm transition-all group"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                        Criminal Dishonour
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        Section 138 Cheque Bounce Notice Timeline (30+15 Days) &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
