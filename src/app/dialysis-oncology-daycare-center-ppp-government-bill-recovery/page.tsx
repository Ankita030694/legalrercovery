import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PPPDialysisTableOfContents from "./PPPDialysisTableOfContents";
import PPPDialysisScenarioTabs from "./PPPDialysisScenarioTabs";
import PPPDialysisRecoveryCTA from "./PPPDialysisRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/dialysis-oncology-daycare-center-ppp-government-bill-recovery";
const EXACT_H1 =
  "Recovering Delayed National Health Mission (NHM) & State PPP Dues for Dialysis, Diagnostics & Daycare Chains";
const META_TITLE = "PPP Dialysis & Daycare Center NHM Dues Recovery";
const META_DESCRIPTION =
  "Operating PPP dialysis or oncology centers in District Hospitals with unpaid NHM bills? Recover arrears via MSMED Act, CPC s.80, Arbitration & High Court Writs.";

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
        alt: formatAltText("PPP Dialysis Daycare NHM Government Bill Recovery"),
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
    remedy: "PMNDP Portal SLA Notice & Joint Reconciliation",
    statute: "PPP Concession Agreement (Billing & SLA Clauses)",
    timing: "Days 1–30 from monthly invoice submission",
    mechanism: "Formal notice to District Health Society (DHS) submitting biometric logs and machine counter-sheets",
    relief: "Freezes contractual audit objections; creates signed joint reconciliation statement admitting principal debt",
    suitability: "Mandatory foundation for unfreezing operational claims before escalating to statutory or judicial forums",
    tone: "slate",
  },
  {
    remedy: "MSME Samadhaan Petition (MSEFC Statutory Arbitration)",
    statute: "Micro, Small & Medium Enterprises Development Act, 2006 (Sections 15–18)",
    timing: "45 days post-invoice delivery (where supplier holds Udyam registration)",
    mechanism: "Reference to Micro & Small Enterprises Facilitation Council; mandatory conciliation followed by arbitration",
    relief: "Statutory compound interest at 3x RBI Bank Rate; overrides Concession Agreement arbitration clauses",
    suitability: "Most lethal financial remedy for Udyam-registered clinical service, pathology & dialysis operators",
    tone: "emerald",
  },
  {
    remedy: "Section 80 CPC Statutory Notice to State & NHM",
    statute: "Code of Civil Procedure, 1908 (Section 80)",
    timing: "Mandatory 60-day statutory notice prior to civil suit or High Court writ",
    mechanism: "Formal Advocate Legal Notice served on Principal Secretary (Health), NHM Mission Director, and CMO",
    relief: "Halts Limitation Act clock; formalizes admitted debt; triggers state-level inter-departmental budget clearance",
    suitability: "Compulsory statutory prerequisite whenever public health societies default past 90 days",
    tone: "emerald",
  },
  {
    remedy: "Arbitration & Section 9 Injunction against PBG Encashment",
    statute: "Arbitration & Conciliation Act, 1996 (Sections 9 & 11)",
    timing: "Upon threat of Performance Bank Guarantee (PBG) forfeit or dispute impasse",
    mechanism: "Urgent Section 9 petition in Commercial Court to restrain PBG invocation + Section 11(6) independent arbitrator",
    relief: "Protects multi-crore bank guarantees; defeats biased unilateral arbitrator appointments by Health Department",
    suitability: "Essential when District Hospital issues retaliatory liquidated damages or machine downtime notices",
    tone: "amber",
  },
  {
    remedy: "High Court Article 226 Writ Petition (Mandamus)",
    statute: "Constitution of India, Article 226 (ABL International & Surya Doctrine)",
    timing: "Upon expiry of 60-day Section 80 notice or arbitrary treasury freeze",
    mechanism: "Writ of Mandamus against State Health Department to release admitted, audited healthcare disbursements",
    relief: "Ad-interim orders compelling immediate release of 70%–80% admitted funds within 4–6 weeks under contempt threat",
    suitability: "Fastest institutional judicial remedy when government admits verified sessions but stalls on budget tranches",
    tone: "emerald",
  },
];

const FAQS = [
  {
    question: "Why do District Health Societies and NHM delay PPP dialysis and oncology center payments by 12+ months?",
    answer:
      "Public-Private Partnership (PPP) payment freezes in healthcare arise primarily from three institutional bottlenecks: (1) Treasury fund allocation mismatches where National Health Mission (NHM) Central-to-State 60:40 matching grants are delayed at the State Finance Department; (2) Bureaucratic post-audit query loops where District Health Societies (DHS) dispute patient biometric thumbprints, offline registers, or dialyzer reuse counts to artificially delay disbursements; and (3) Frequent administrative turnover among Chief Medical Officers (CMOs) and District Collectors, which stalls file approvals. Because operators cannot abruptly stop life-sustaining dialysis or chemotherapy without risking criminal negligence and public outrage, authorities exploit this asymmetric ethical bind to withhold working capital.",
  },
  {
    question: "Does the MSMED Act, 2006 apply to healthcare PPP operators running centers inside District Hospitals?",
    answer:
      "Yes. Private healthcare concessionaires operating hemodialysis units, daycare chemotherapy suites, CT/MRI scanners, and pathology collection centers inside government hospitals qualify as 'suppliers' under Section 2(n) of the MSMED Act, 2006, provided they hold a valid Udyam Registration under National Industrial Classification (NIC) codes for healthcare services (such as NIC 86100 for hospital activities or NIC 86905 for diagnostic imaging/pathology). Under Section 16 of the Act, any buyer—including a District Health Society or State Government—is statutorily liable to pay compound interest with monthly rests at three times the RBI Bank Rate on payments delayed beyond 45 days. The Supreme Court in Gujarat State Civil Supplies Corp. v. Mahakali Foods (2023) confirmed that MSMED statutory remedies override private contract arbitration clauses.",
  },
  {
    question: "What is a Section 80 CPC notice and why is it mandatory before suing a District Health Society or NHM?",
    answer:
      "Section 80 of the Code of Civil Procedure, 1908 mandates that no suit or formal legal proceeding can be instituted against the Government or a public officer in their official capacity until two months (60 days) have expired after delivering a formal written statutory notice. Because the District Health Society is chaired by the District Magistrate/Collector and funded through the State Health Directorate and Ministry of Health and Family Welfare (MoHFW), serving a Section 80 notice on the Principal Secretary (Health), State Mission Director (NHM), and District CMO is legally compulsory. It formalizes the admitted debt ledger, stops the limitation clock under the Limitation Act 1963, and establishes clean cause of action for High Court writ proceedings.",
  },
  {
    question: "Can an operator file an Article 226 Writ Petition in the High Court for admitted healthcare PPP dues?",
    answer:
      "Yes. While disputed contractual claims generally require arbitration or civil suits, the Supreme Court of India in landmark precedents—including ABL International Ltd. v. ECGC (2004) 3 SCC 553, Surya Constructions v. State of U.P. (2019) 16 SCC 794, and Unitech Ltd. v. HSVP (2021)—established that an Article 226 Writ Petition is fully maintainable against the State or its instrumentalities to enforce monetary liabilities arising out of a public contract, provided the debt is admitted or based on verified records. In healthcare PPPs, where session counts are logged on the Pradhan Mantri National Dialysis Programme (PMNDP) portal or signed by the Hospital Superintendent, the High Court routinely issues Writs of Mandamus directing the State to disburse 70% to 80% of admitted arrears within 4 to 6 weeks.",
  },
  {
    question: "How can a dialysis or radiology concessionaire prevent the government from encashing its Performance Bank Guarantee (PBG)?",
    answer:
      "When an operator demands overdue arrears, government authorities sometimes retaliate by issuing show-cause notices alleging machine downtime or clinical lapses to justify encashing the concessionaire's multi-lakh Performance Bank Guarantee (PBG). To prevent encashment, the operator must immediately approach the Commercial Court or High Court under Section 9 of the Arbitration & Conciliation Act, 1996 for an ad-interim injunction. Under Supreme Court settled law (BSES Ltd. v. Fenner India Ltd.), courts will restrain bank guarantee encashment where the invocation is tainted by egregious fraud or where encashment would inflict irretrievable injustice on a creditor who is already owed massive undisputed operational dues.",
  },
  {
    question: "Can the State Health Society appoint a departmental officer as the Sole Arbitrator under the Concession Agreement?",
    answer:
      "No. Many legacy PPP Concession Agreements contain clauses stating that disputes shall be referred to the sole arbitration of the Principal Secretary (Health) or the Director General of Health Services. Under Section 12(5) read with the Seventh Schedule of the Arbitration & Conciliation Act, 1996, and the Supreme Court rulings in Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) and the 5-Judge Constitution Bench in CORE (2024), any clause empowering a party or its employee to unilaterally appoint a sole arbitrator is void ab initio. The concessionaire can approach the High Court under Section 11(6) to secure the appointment of an independent, neutral former High Court or Supreme Court Judge.",
  },
  {
    question: "What electronic evidence is mandatory under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    answer:
      "To enforce payment before the MSEFC, High Court, or Arbitral Tribunal, the concessionaire must produce an electronic audit trail compliant with Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced Section 65B of the Indian Evidence Act. Mandatory electronic evidence includes: (1) System-generated PMNDP or state portal session logs with patient biometric or OTP timestamps; (2) Biomedical engineering machine maintenance logs proving hemodialysis/CT uptime; (3) Reverse Osmosis (RO) water chemical and microbiological testing certificates; (4) Itemized pharmacy/dialyzer consumable issue registers with manufacturer batch numbers; and (5) Email audit trails of monthly invoices served on the CMO with certified server metadata certificates.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Code of Civil Procedure, 1908 (Section 80 — Notice to Government)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Constitution of India, 1950 (Article 226 — High Court Writ Jurisdiction)",
    url: "https://www.indiacode.nic.in/handle/123456789/15240",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Arbitration & Conciliation Act, 1996 (Sections 9, 11 & 12(5))",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Pradhan Mantri National Dialysis Programme (PMNDP) — Operational Guidelines, MoHFW",
    url: "https://nhm.gov.in/",
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
    name: "Healthcare PPP Concessionaire Dialysis Oncology Daycare Arrears Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Healthcare PPP Concessionaires Legally Recover Frozen NHM & State Government Dues",
  description:
    "A 5-stage statutory and operational recovery playbook for private dialysis chains, radiology hubs, and daycare oncology centers operating inside District Hospitals to recover aged public arrears.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Extract Audit Trails & Force Joint Monthly Reconciliation",
      text: "Download certified PMNDP or state portal session logs, biometric verification data, and dialyzer batch registers. Secure a signed joint reconciliation statement from the Chief Medical Officer admitting undisputed sessions.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "File MSME Samadhaan Petition under Section 18 MSMED Act",
      text: "Where the healthcare operator possesses Udyam registration, file a formal delayed payment reference before the Micro and Small Enterprises Facilitation Council (MSEFC) to demand statutory 3x RBI Bank Rate compound interest.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Statutory Section 80 CPC Notice on State Health Leadership",
      text: "Deliver a mandatory 60-day Advocate Statutory Notice under Section 80 CPC to the Principal Secretary (Health), NHM State Mission Director, and District Collector, halting limitation and crystallizing cause of action.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Secure Section 9 Commercial Injunction Against PBG Encashment",
      text: "If the District Health Society issues retaliatory liquidated damages or threatens Performance Bank Guarantee forfeit, file an urgent Section 9 petition in the Commercial Court to obtain an ad-interim stay.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File Article 226 High Court Writ of Mandamus for Fund Disbursal",
      text: "Upon expiry of the 60-day Section 80 CPC notice, move the High Court under Article 226 invoking the Surya Constructions and ABL International doctrine to compel immediate release of 70%–80% admitted arrears.",
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
      name: "PPP Dialysis & Daycare Dues Recovery",
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

export default function PPPDialysisDaycareRecoveryPage() {
  const breadcrumbItems = [
    { label: "Hospitals & Healthcare Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "PPP Dialysis & Daycare Dues Recovery", href: PAGE_URL },
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
              <span>Healthcare PPP Concessions</span>
              <span className="text-red-500">&bull;</span>
              <span>PMNDP &amp; NHM Tender Dues</span>
              <span className="text-red-500">&bull;</span>
              <span>Section 80 CPC Notice</span>
              <span className="text-red-500">&bull;</span>
              <span>MSMED Act Sec 16 Interest</span>
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
                Executive Creditor Answer &bull; PPP Healthcare Recovery Framework
              </span>
              <p>
                Private dialysis chains, CT/MRI diagnostic hubs, and oncology daycare operators under the Pradhan Mantri National Dialysis Programme (PMNDP) and National Health Mission (NHM) face acute working capital crises when District Health Societies freeze per-session payouts for 12 to 24 months. By combining certified digital portal audit logs with a mandatory{" "}
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Section 80 CPC Statutory Notice
                </Link>
                , statutory compound interest petitions under the MSMED Act 2006, and High Court{" "}
                <strong>Article 226 Writs of Mandamus</strong> under the Supreme Court&apos;s <em>Surya Constructions</em> and <em>ABL International</em> doctrines, healthcare concessionaires can compel the immediate release of 70% to 80% of admitted treasury funds while staying retaliatory bank guarantee encashments. Governed under our{" "}
                <Link
                  href="/industries/hospitals-doctors-healthcare-recovery"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Healthcare &amp; Hospital Institutional Recovery Hub
                </Link>
                .
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold block uppercase">
                  Avg. Treasury Freeze
                </span>
                <span className="text-lg sm:text-2xl font-black text-red-400">
                  12–24 Mos.
                </span>
                <span className="text-[10px] text-slate-400 block">
                  NHM Central-State budget stalls
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold block uppercase">
                  MSMED Sec 16 Interest
                </span>
                <span className="text-lg sm:text-2xl font-black text-emerald-400">
                  3x Bank Rate
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Compounded monthly by statute
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold block uppercase">
                  Section 80 CPC Notice
                </span>
                <span className="text-lg sm:text-2xl font-black text-amber-400">
                  60 Days
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Mandatory pre-writ cooling window
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold block uppercase">
                  High Court Mandamus
                </span>
                <span className="text-lg sm:text-2xl font-black text-emerald-400">
                  70%–80% Release
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Ad-interim orders in 4–6 weeks
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="mt-6 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky TOC */}
            <PPPDialysisTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    1
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Operational Asymmetry
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Why Healthcare PPP Concessionaires Face Catastrophic Cash Freezes
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    Under the <strong>Pradhan Mantri National Dialysis Programme (PMNDP)</strong>, State National Health Mission (NHM) initiatives, and tertiary oncology schemes, private healthcare operators enter into 5-to-10-year Concession Agreements on a Design-Build-Finance-Operate (DBFO) model. The private concessionaire invests crores in capital expenditures: importing advanced hemodialysis machines, establishing multi-stage Reverse Osmosis (RO) water purification plants, deploying biosafety hoods for chemotherapy compounding, and employing full-time nephrology technicians, oncology nurses, and biomedical engineers inside Government District Hospitals.
                  </p>
                  <p>
                    While clinical care is delivered 100% free of charge to Below Poverty Line (BPL) and Ayushman Bharat beneficiaries at pre-fixed per-session package rates (typically &rupee;1,200 to &rupee;1,800 per hemodialysis cycle), the reimbursement mechanism breaks down completely at the District Health Society (DHS) level. Concessionaires routinely face 12-to-24-month payment freezes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-slate-800">
                      <span className="block text-xs font-black uppercase text-[#DC2626] mb-1">
                        60:40 Matching Deadlock
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        NHM funds route through complex treasury tranches between the Ministry of Health and Family Welfare (MoHFW) and State Finance Departments, stranding district budgets for quarters.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-slate-800">
                      <span className="block text-xs font-black uppercase text-amber-700 mb-1">
                        Algorithmic Post-Audit Traps
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        District audit teams withhold multi-month batches citing technical portal timeouts, unreadable patient biometric thumbprints, or minor discrepancies in offline registers.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800">
                      <span className="block text-xs font-black uppercase text-slate-700 mb-1">
                        The Article 21 Ethical Bind
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Because dialysis and chemotherapy are life-sustaining, operators cannot lawfully suspend services without triggering public outrage, FIR threats, or contractual breach allegations.
                      </p>
                    </div>
                  </div>
                  <p>
                    Operating in this ethical and financial trap, private healthcare providers accumulate massive overdrafts to fund dialyzers, blood tubing lines, heparin, erythropoietin injections, and staff salaries. When conventional administrative appeals fail, concessionaires must enforce their contractual and statutory rights through structured legal escalation rather than absorbing unviable balance-sheet haircuts.
                  </p>
                </div>
              </section>

              {/* Section 2: Decision Tree */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Strategic Workflow
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Healthcare PPP Concessionaire Recovery Escalation Decision Tree
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Follow this 5-stage institutional escalation path to systematically unfreeze admitted NHM and District Health Society disbursements while insulating your entity against retaliatory liquidated damages and bank guarantee forfeitures.
                </p>

                {/* SVG Flowchart (Desktop) */}
                <div className="hidden md:block w-full overflow-x-auto pb-4 mb-6">
                  <svg
                    viewBox="0 0 900 460"
                    width="900"
                    height="460"
                    className="w-full h-auto text-xs"
                  >
                    <defs>
                      <linearGradient id="gDark" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0F172A" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="gRed" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="gEmerald" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#047857" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="20" y="20" width="240" height="90" rx="12" fill="url(#gDark)" stroke="#334155" strokeWidth="2" />
                    <text x="140" y="50" textAnchor="middle" fill="#F87171" fontWeight="bold" fontSize="12">STAGE 1: AUDIT &amp; SLA</text>
                    <text x="140" y="72" textAnchor="middle" fill="#F8FAFC" fontSize="11">Extract PMNDP Portal Data</text>
                    <text x="140" y="90" textAnchor="middle" fill="#94A3B8" fontSize="10">Serve 15-Day SLA Cure Notice</text>

                    {/* Arrow 1 to 2 */}
                    <line x1="260" y1="65" x2="330" y2="65" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <rect x="330" y="20" width="250" height="90" rx="12" fill="url(#gDark)" stroke="#334155" strokeWidth="2" />
                    <text x="455" y="50" textAnchor="middle" fill="#34D399" fontWeight="bold" fontSize="12">STAGE 2: MSMED ACT SEC 18</text>
                    <text x="455" y="72" textAnchor="middle" fill="#F8FAFC" fontSize="11">File MSEFC Samadhaan Case</text>
                    <text x="455" y="90" textAnchor="middle" fill="#94A3B8" fontSize="10">3x RBI Rate Monthly Interest</text>

                    {/* Arrow 2 to 3 */}
                    <line x1="580" y1="65" x2="650" y2="65" stroke="#DC2626" strokeWidth="3" />

                    {/* Step 3 */}
                    <rect x="650" y="20" width="230" height="90" rx="12" fill="url(#gRed)" stroke="#B91C1C" strokeWidth="2" />
                    <text x="765" y="50" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">STAGE 3: SECTION 80 CPC</text>
                    <text x="765" y="72" textAnchor="middle" fill="#FEE2E2" fontSize="11">60-Day Notice to Ministry</text>
                    <text x="765" y="90" textAnchor="middle" fill="#FEE2E2" fontSize="10">Principal Secretary &amp; NHM MD</text>

                    {/* Branching down from Step 3 */}
                    <path d="M 765 110 L 765 180" stroke="#DC2626" strokeWidth="3" fill="none" />

                    {/* Decision Diamond */}
                    <polygon points="765,180 850,225 765,270 680,225" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="765" y="222" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="11">Government Action</text>
                    <text x="765" y="238" textAnchor="middle" fill="#94A3B8" fontSize="10">During 60-Day Notice?</text>

                    {/* Branch Left: Threat to Encash PBG */}
                    <path d="M 680 225 L 455 225 L 455 310" stroke="#EAB308" strokeWidth="3" fill="none" />
                    <rect x="330" y="310" width="250" height="110" rx="12" fill="#1E293B" stroke="#EAB308" strokeWidth="2" />
                    <text x="455" y="338" textAnchor="middle" fill="#FACC15" fontWeight="bold" fontSize="12">STAGE 4: SEC 9 ARBITRATION</text>
                    <text x="455" y="360" textAnchor="middle" fill="#F8FAFC" fontSize="11">Urgent Commercial Injunction</text>
                    <text x="455" y="380" textAnchor="middle" fill="#CBD5E1" fontSize="10">Restrain PBG Encashment</text>
                    <text x="455" y="400" textAnchor="middle" fill="#94A3B8" fontSize="10">Invoke Sec 11(6) Sole Arbitrator</text>

                    {/* Branch Right: Unresponsive or Budget Stalled */}
                    <path d="M 765 270 L 765 310" stroke="#059669" strokeWidth="3" fill="none" />
                    <rect x="640" y="310" width="250" height="110" rx="12" fill="url(#gEmerald)" stroke="#047857" strokeWidth="2" />
                    <text x="765" y="338" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">STAGE 5: ARTICLE 226 WRIT</text>
                    <text x="765" y="360" textAnchor="middle" fill="#D1FAE5" fontSize="11">High Court Writ of Mandamus</text>
                    <text x="765" y="380" textAnchor="middle" fill="#D1FAE5" fontSize="10">Surya Constructions Doctrine</text>
                    <text x="765" y="400" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">75% Immediate Release Order</text>

                    {/* Cross-link connection */}
                    <path d="M 330 65 L 140 65 L 140 365 L 330 365" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase block mb-1">
                      Stage 1 &bull; Portal Audit &amp; Reconciliation
                    </span>
                    <p className="text-xs text-slate-200 font-semibold mb-1">
                      Extract certified PMNDP session logs and serve a 15-day SLA cure notice to the CMO.
                    </p>
                    <span className="text-[11px] text-slate-400 block">
                      Enforces 30-day billing SLA; forces joint physical ledger reconciliation.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">
                      Stage 2 &bull; MSMED Act Section 18 Filing
                    </span>
                    <p className="text-xs text-slate-200 font-semibold mb-1">
                      File statutory delayed payment reference before the MSEFC (MSME Samadhaan).
                    </p>
                    <span className="text-[11px] text-slate-400 block">
                      Demands monthly compound interest at 3x RBI Bank Rate; overrides concession clauses.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-red-950/80 text-white border border-red-800">
                    <span className="text-[10px] font-bold text-red-300 uppercase block mb-1">
                      Stage 3 &bull; Section 80 CPC Statutory Notice
                    </span>
                    <p className="text-xs text-slate-100 font-semibold mb-1">
                      60-Day Legal Notice to Principal Secretary (Health), NHM Director, and District Collector.
                    </p>
                    <span className="text-[11px] text-red-200 block">
                      Mandatory statutory prerequisite; stops limitation; triggers inter-ministerial audit.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-amber-600/60">
                    <span className="text-[10px] font-bold text-amber-400 uppercase block mb-1">
                      Stage 4 &bull; Commercial Section 9 Injunction
                    </span>
                    <p className="text-xs text-slate-200 font-semibold mb-1">
                      Move Commercial Court to restrain retaliatory encashment of Performance Bank Guarantees.
                    </p>
                    <span className="text-[11px] text-slate-400 block">
                      Neutralizes bad-faith liquidated damages and appoints independent Section 11(6) arbitrator.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/80 text-white border border-emerald-800">
                    <span className="text-[10px] font-bold text-emerald-300 uppercase block mb-1">
                      Stage 5 &bull; High Court Article 226 Writ
                    </span>
                    <p className="text-xs text-slate-100 font-semibold mb-1">
                      File Writ of Mandamus in High Court under Surya Constructions &amp; ABL International.
                    </p>
                    <span className="text-[11px] text-emerald-200 block">
                      Secures binding order for 70%–80% immediate release of undisputed treasury arrears.
                    </span>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Comparative Framework
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Remedies &amp; Legal Forum Matrix for Healthcare PPP Arrears
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Unlike private commercial debt recovery, reclaiming dues from a government-funded healthcare concession requires navigating administrative law, the MSMED Act, and constitutional writ remedies simultaneously.
                </p>

                <div className="overflow-x-auto -mx-5 sm:mx-0">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th className="py-3 px-3 sm:px-4 font-bold uppercase tracking-wider text-[11px]">
                          Remedy &amp; Forum
                        </th>
                        <th className="py-3 px-3 sm:px-4 font-bold uppercase tracking-wider text-[11px]">
                          Statutory Anchor
                        </th>
                        <th className="py-3 px-3 sm:px-4 font-bold uppercase tracking-wider text-[11px]">
                          Statutory Window
                        </th>
                        <th className="py-3 px-3 sm:px-4 font-bold uppercase tracking-wider text-[11px]">
                          Primary Relief &amp; Strategic Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {STATUTORY_MATRIX.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900 align-top">
                            {item.remedy}
                          </td>
                          <td className="py-3.5 px-3 sm:px-4 text-slate-700 align-top">
                            <span className="font-semibold text-slate-800 block">
                              {item.statute}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              {item.mechanism}
                            </span>
                          </td>
                          <td className="py-3.5 px-3 sm:px-4 text-slate-700 align-top whitespace-nowrap">
                            <span className="inline-block px-2 py-1 rounded bg-slate-100 font-semibold text-xs text-slate-800">
                              {item.timing}
                            </span>
                          </td>
                          <td className="py-3.5 px-3 sm:px-4 text-slate-700 align-top">
                            <p className="text-xs leading-relaxed text-slate-800 mb-1">
                              {item.relief}
                            </p>
                            <span className="text-[11px] font-semibold text-[#DC2626]">
                              Suitability: {item.suitability}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    4
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Case Studies &amp; Failure Modes
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  4 Healthcare PPP Default Scenarios &amp; Tailored Recovery SOPs
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Select a commercial failure mode below to review the specific legal vulnerability in the government&apos;s defense and the precise advocate-led counter-measure.
                </p>

                <PPPDialysisScenarioTabs />
              </section>

              {/* Section 5: MSME Samadhaan Applicability */}
              <section
                id="heading-msme-applicability"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    5
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Leverage
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  MSMED Act Applicability to PPP Dialysis &amp; Diagnostic Operators
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    A pervasive legal myth among District Health Societies is that the Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act) does not apply to healthcare tenders or concession agreements executed by government societies. This assumption is completely contrary to law.
                  </p>
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-emerald-950">
                    <strong className="block text-emerald-900 font-bold mb-1">
                      Supreme Court Landmark Holding &bull; Gujarat State Civil Supplies Corp. (2023)
                    </strong>
                    The Supreme Court held in <em>Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd. (2023) 6 SCC 401</em> that the provisions of Sections 15 to 23 of the MSMED Act have overriding effect over the Arbitration and Conciliation Act, 1996 and any private contract arbitration clause. If the supplier is registered as an MSE, the Micro and Small Enterprises Facilitation Council (MSEFC) retains exclusive statutory jurisdiction to adjudicate overdue payments and award penal compound interest.
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mt-6 mb-2">
                    Key MSME Criteria for PPP Healthcare Concessionaires:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Udyam Registration under Healthcare NIC Codes:</strong> Healthcare operators holding valid Udyam certificates under NIC Code 86100 (Hospital activities including dialysis and daycare), 86200 (Medical and dental practice activities), or 86905 (Pathology and diagnostic imaging services) qualify as service micro or small enterprises.
                    </li>
                    <li>
                      <strong>District Health Society Qualifies as a &apos;Buyer&apos;:</strong> Under Section 2(d) of the MSMED Act, a buyer means anyone who purchases goods or services. District Health Societies, State NHM Directorates, and CMOs contracting private entities for hemodialysis or radiology qualify squarely as buyers.
                    </li>
                    <li>
                      <strong>Statutory 45-Day Payment Ceiling:</strong> Under Section 15, the period agreed between buyer and supplier cannot exceed 45 days. Any contractual clause in a concession agreement providing for 90 or 180 days is voided by statute.
                    </li>
                    <li>
                      <strong>Mandatory Penal Interest under Section 16:</strong> Section 16 mandates that if the buyer fails to pay within 45 days, the buyer shall be liable to pay compound interest with monthly rests at <strong>three times the RBI Bank Rate</strong>. Calculate this interest using our{" "}
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        MSME Delayed Payment Interest Calculator
                      </Link>
                      .
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6: Concession Arbitration & Section 9 PBG Injunction */}
              <section
                id="heading-concession-arbitration"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    6
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Commercial Arbitration
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Concession Arbitration, PBG Protection &amp; Defeating Unilateral Appointments
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    Most healthcare Concession Agreements feature a multi-tier dispute resolution clause: initial amicable settlement with the Hospital Management Committee, administrative escalation to the State Mission Director, and finally formal arbitration under the Arbitration &amp; Conciliation Act, 1996.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-amber-950">
                    <strong className="block text-amber-900 font-bold mb-1">
                      Unilateral Arbitrator Appointment Is Void &bull; Perkins Eastman &amp; CORE 5-Judge Bench
                    </strong>
                    Government tender clauses routinely state that the Director General of Health Services or Health Secretary shall act as the sole arbitrator. Under Section 12(5) read with the Seventh Schedule of the Arbitration Act and the Supreme Court&apos;s authoritative rulings in <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020)</em> and the Constitution Bench judgment in <em>Central Organisation for Railway Electrification (2024)</em>, no interested party can unilaterally appoint an arbitrator. The concessionaire has the absolute right to petition the High Court under Section 11(6) for the appointment of a neutral, retired judicial officer.
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mt-6 mb-2">
                    Section 9 Interim Injunction Against PBG Encashment:
                  </h3>
                  <p>
                    When a concessionaire initiates legal recovery, government authorities frequently issue retaliatory show-cause notices threatening to cancel the concession and encash the Performance Bank Guarantee (PBG) on manufactured pretexts (such as alleged dialyzer reuse or machine downtime).
                  </p>
                  <p>
                    By moving an urgent application under <strong>Section 9 of the Arbitration &amp; Conciliation Act, 1996</strong> before the Commercial Court or High Court, concessionaires can secure an immediate ad-interim injunction restraining the bank and the District Health Society from invoking or honoring the PBG, demonstrating egregious bad faith and irretrievable harm.
                  </p>
                </div>
              </section>

              {/* Section 7: Section 80 CPC Statutory Notice */}
              <section
                id="heading-section-80-cpc"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    7
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Prerequisite
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Serving a Mandatory Section 80 CPC Notice to State Health Leadership
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    Under Section 80 of the Code of Civil Procedure, 1908, delivering a formal two-month (60-day) notice is a mandatory condition precedent before instituting any suit or writ against the Government or a public officer in their official capacity. For healthcare concessionaires, this notice serves as an indispensable strategic weapon. Review our complete guide to{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      Section 80 CPC Notice to Government
                    </Link>
                    .
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 text-white my-4 not-prose">
                    <span className="text-xs font-black uppercase text-red-400 block mb-2">
                      Statutory Addressees for Section 80 CPC Healthcare Notice:
                    </span>
                    <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-300">
                      <li>
                        <strong>Principal Secretary, Department of Health and Family Welfare:</strong> Government of the respective State.
                      </li>
                      <li>
                        <strong>State Mission Director, National Health Mission (NHM):</strong> State Health Society Headquarters.
                      </li>
                      <li>
                        <strong>District Magistrate / Collector:</strong> Ex-officio Chairperson, District Health Society.
                      </li>
                      <li>
                        <strong>Chief Medical Officer (CMO) / Chief District Medical Officer (CDMO):</strong> Member Secretary, District Health Society.
                      </li>
                      <li>
                        <strong>Medical Superintendent:</strong> District Hospital / Medical College where the center is situated.
                      </li>
                    </ol>
                  </div>
                  <p>
                    The Section 80 CPC notice halts the limitation period under Section 15(2) of the Limitation Act, 1963. Crucially, it elevates the dispute from local district hospital politics directly to the State Health Secretary and State Finance Department, frequently prompting an administrative allocation before the 60-day window expires.
                  </p>
                </div>
              </section>

              {/* Section 8: High Court Article 226 Writ Petition */}
              <section
                id="heading-writ-mandamus"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    8
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Constitutional Remedy
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  High Court Article 226 Writ of Mandamus: The Fast-Track Payout Route
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    When the 60-day Section 80 CPC cooling period expires without payment, or where authorities admit verified hemodialysis sessions on the PMNDP portal but cite treasury delays, the most potent judicial remedy is an <strong>Article 226 Writ Petition for Mandamus</strong> filed before the High Court having territorial jurisdiction.
                  </p>
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-emerald-950">
                    <strong className="block text-emerald-900 font-bold mb-1">
                      The Surya Constructions &amp; ABL International Doctrine
                    </strong>
                    The Supreme Court settled in <em>Surya Constructions v. State of U.P. (2019) 16 SCC 794</em> and <em>ABL International Ltd. v. ECGC (2004) 3 SCC 553</em> that where money claims against the State or its instrumentalities are based on admitted, verified bills, the existence of an alternative remedy (like arbitration or a civil suit) does NOT bar a High Court from exercising writ jurisdiction under Article 226. The State cannot withhold public funds for essential services rendered and force the contractor into years of costly litigation.
                  </div>
                  <p>
                    In numerous healthcare writ petitions, High Courts have issued interim directions compelling the State Treasury to disburse <strong>70% to 80% of undisputed principal arrears within 4 to 6 weeks</strong>, with the balance subject to joint audit. Failure by the Health Secretary or CMO to comply exposes them to immediate contempt of court proceedings under the Contempt of Courts Act, 1971. Sibling remedies for empanelled hospitals are covered in our{" "}
                    <Link
                      href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      CGHS, ECHS, ESIC &amp; Ayushman Bharat Empanelled Hospital Dues Guide
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 9: Worked Financial & Interest Calculation Box */}
              <section
                id="heading-worked-calculation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    9
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Financial Illustration
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Worked Recovery Ledger: &rupee;4.87 Crore NHM Arrears &amp; Statutory Penal Interest
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Below is an empirical recovery computation for a 20-machine hemodialysis cluster operating across two District Hospitals under the PMNDP framework, showing the compounding effect of MSMED Act Section 16 penal interest over 14 months of treasury default.
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-7 border border-slate-800 shadow-xl space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                        Cluster Profile
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-200">
                        2 District Hospital PPP Dialysis Centers (20 Hemodialysis Machines)
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                      MSMED Act Sec 16 Compounding
                    </span>
                  </div>

                  {/* Operational Ledger Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                        Monthly Volume
                      </span>
                      <span className="text-lg font-black text-white">2,400 Sessions</span>
                      <span className="text-[11px] text-slate-400 block">
                        120 sessions/machine/mo
                      </span>
                    </div>
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                        Package Rate
                      </span>
                      <span className="text-lg font-black text-white">&rupee;1,450 / Run</span>
                      <span className="text-[11px] text-slate-400 block">
                        PMNDP agreed package
                      </span>
                    </div>
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                        Monthly Billing
                      </span>
                      <span className="text-lg font-black text-white">&rupee;34,80,000</span>
                      <span className="text-[11px] text-slate-400 block">
                        Submitted monthly to DHS
                      </span>
                    </div>
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                        Default Aging
                      </span>
                      <span className="text-lg font-black text-red-400">14 Months</span>
                      <span className="text-[11px] text-slate-400 block">
                        Frozen treasury tranches
                      </span>
                    </div>
                  </div>

                  {/* Detailed Numbers Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                          <th className="py-2">Line Item Component</th>
                          <th className="py-2">Statutory Basis</th>
                          <th className="py-2 text-right">Computed Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        <tr>
                          <td className="py-2.5 font-medium">Accumulated Principal Dues (14 Months)</td>
                          <td className="py-2.5 text-slate-400">2,400 runs &times; &rupee;1,450 &times; 14 mos.</td>
                          <td className="py-2.5 text-right font-bold text-white">&rupee;4,87,20,000</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-medium">MSMED Act Sec 16 Interest (3x RBI Bank Rate = 19.5% p.a.)</td>
                          <td className="py-2.5 text-slate-400">Compounded monthly rests over 14 mos.</td>
                          <td className="py-2.5 text-right font-bold text-emerald-400">&rupee;74,32,450</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-medium">Working Capital Overdraft &amp; Consumable Carrying Cost</td>
                          <td className="py-2.5 text-slate-400">Bank overdraft at 11.5% actual borrowing</td>
                          <td className="py-2.5 text-right font-bold text-amber-400">&rupee;18,65,000</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-medium">Advocate Notice, Portal Audit &amp; Legal Retainer Costs</td>
                          <td className="py-2.5 text-slate-400">Section 80 CPC dispatch &amp; MSEFC filing</td>
                          <td className="py-2.5 text-right font-bold text-slate-200">&rupee;5,50,000</td>
                        </tr>
                        <tr className="border-t-2 border-slate-700 bg-slate-800/50">
                          <td className="py-3 font-black text-white text-sm">TOTAL STATUTORY CLAIM AMOUNT</td>
                          <td className="py-3 text-red-400 font-bold text-xs">Section 80 Demand Notice Claim</td>
                          <td className="py-3 text-right font-black text-emerald-400 text-base">&rupee;5,85,67,450</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-bold text-sm shrink-0">&bull;</span>
                    <p>
                      <strong>Strategic Impact:</strong> By presenting the &rupee;74.3 Lakh MSMED Act compound interest liability alongside the &rupee;4.87 Crore principal in the Section 80 notice, the State Finance Department is alerted that every month of continued treasury delay compounds state liability by over &rupee;7.8 Lakhs, breaking administrative inertia.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: BSA 2023 Section 63 Evidence Checklist */}
              <section
                id="heading-bsa-evidence"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    10
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Digital Evidence Standard
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  BSA 2023 Section 63 Audit &amp; Electronic Evidence Checklist
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  To succeed before the MSEFC, Commercial Court, or High Court, all electronic logs must be certified under <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> (replacing Section 65B of the Indian Evidence Act). Ensure your IT and operations teams compile this 6-point evidentiary dossier:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        1
                      </span>
                      <span className="text-xs font-black text-slate-900 uppercase">
                        PMNDP / State Portal Log Sheets
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Certified server extracts of session completion entries, patient unique PMNDP ID, biometric Aadhaar authentication tokens, and portal submission timestamps.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        2
                      </span>
                      <span className="text-xs font-black text-slate-900 uppercase">
                        Offline Attendant Sign-Off Registers
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      High-resolution scans of daily physical clinical registers countersigned by the on-duty District Hospital Medical Officer and dialysis head technician.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        3
                      </span>
                      <span className="text-xs font-black text-slate-900 uppercase">
                        Biomedical Machine Uptime Certificates
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      OEM biomedical maintenance reports and calibrated machine operating hours proving 98%+ uptime, defeating false liquidated damage counter-claims.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        4
                      </span>
                      <span className="text-xs font-black text-slate-900 uppercase">
                        RO Water Purity &amp; Microbiology Reports
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Monthly NABL-accredited water laboratory testing certificates documenting TDS, microbial colony count, and endotoxin levels compliant with AAMI/ISO standards.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        5
                      </span>
                      <span className="text-xs font-black text-slate-900 uppercase">
                        Consumable Batch &amp; Cold-Chain Logs
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Itemized delivery challans, GST invoices, and temperature monitoring logs for erythropoietin, heparin, dialyzers, chemotherapy drugs, and blood tubing sets.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        6
                      </span>
                      <span className="text-xs font-black text-slate-900 uppercase">
                        Section 63 BSA Digital Certificate
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Formal affidavit executed by the Chief Technology Officer (CTO) or Head of Billing certifying electronic storage custody, portal integrity, and unaltered hash records.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Deploy B2B Recovery Desk CTA */}
              <section
                id="heading-recovery-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    11
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Actionable Deployment
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Deploy Healthcare PPP Legal Recovery: Single Notice or Multi-District CSV
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Choose between testing our advocate legal notice protocol on 1 frozen District Health Society tender invoice, or onboarding your entire multi-district dialysis or daycare chain via institutional CSV desk.
                </p>

                <PPPDialysisRecoveryCTA />
              </section>

              {/* Section 12: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    12
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Knowledge Base
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions on Healthcare PPP Tender Dues Recovery
                </h2>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
                    >
                      <summary className="p-4 sm:p-5 text-xs sm:text-sm md:text-base font-bold text-slate-900 cursor-pointer flex items-center justify-between gap-3 hover:text-[#DC2626] transition-colors">
                        <span>{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs text-slate-500 group-open:rotate-180 transition-transform shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 pt-3">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Statutory Sources */}
              <section
                id="heading-primary-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    13
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Legal Citations
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Authorities, Concession Guidelines &amp; Judicial Precedents
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between text-slate-800 hover:text-[#DC2626]"
                    >
                      <span className="font-semibold line-clamp-1">{source.title}</span>
                      <span className="text-slate-400 shrink-0 ml-2">&rarr;</span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <span>
                    Advocate Review: <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}
                  </span>
                  <span>
                    Governed under: Indian Contract Act 1872 &bull; CPC 1908 &bull; MSMED Act 2006 &bull; ACA 1996
                  </span>
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
