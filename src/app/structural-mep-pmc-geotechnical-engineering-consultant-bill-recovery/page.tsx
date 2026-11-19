import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EngineeringRecoveryTableOfContents from "./EngineeringRecoveryTableOfContents";
import EngineeringRecoveryScenarioTabs from "./EngineeringRecoveryScenarioTabs";
import EngineeringRecoveryCTA from "./EngineeringRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/structural-mep-pmc-geotechnical-engineering-consultant-bill-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (142 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Developer Demanding Structural Stability / OC Sign-Off Certificate While Owing 8 Months of Engineering Consultancy Fees? Lawful Leverage Guide";

// 58 chars — tightened from 62ch PDF draft for Screaming Frog 30–60ch limit while preserving primary keyword
const META_TITLE =
  "Structural, MEP, PMC & Engineering Consultant Fee Recovery";

// 145 chars — tightened from 171ch PDF draft for Screaming Frog 120–155ch limit while retaining every statutory hook
const META_DESCRIPTION =
  "Engineering, PMC & EIA consultants hold vital OC/EC sign-offs. Invoke Contract Act s.51–52 reciprocal promises, MSMED 45-day interest & s.43B(h).";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "structural mep pmc engineering consultant unpaid developer fee recovery",
    "withholding structural stability certificate completion sign off unpaid fee",
    "pmc monthly man month deployment bill stuck stalled project",
    "environmental clearance eia consultant unpaid milestone",
    "soil investigation topographical survey agency bill recovery",
    "msme 45 day recovery engineering consultancy firms",
  ],
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
      "The Indian Contract Act, 1872 (Sections 51, 52, 54, 55, 70 & 73 — Reciprocal Promises, Order of Performance, Quantum Meruit & Breach Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17, 18 & 24 — 45-Day Payment Ceiling, 3x RBI Compound Interest & Overriding Effect)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Corporate Tax Disallowance on Unpaid Micro & Small Engineering Consultancy Invoices Past 45 Days)",
    url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "The Copyright Act, 1957 (Sections 13, 17, 19 & 51 — Ownership of Engineering Drawings, Structural Calculations, MEP Layouts & EIA Compilations)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Sections 2(1)(c)(vi), 2(1)(c)(xviii) & 12A — Construction & Infrastructure Engineering Disputes and Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits on Written Consultancy Contracts & Liquidated Invoices; Order XXXVIII Rule 5)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Electronic Records for CAD/ETABS Models, MPRs, Site MOMs & PARIVESH Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Bureau of Indian Standards (BIS) — National Building Code of India (NBC 2016) & Engineering Supervision Norms",
    url: "https://www.bis.gov.in/",
  },
];

const FAQS = [
  {
    q: "Can a structural or MEP engineer lawfully refuse to sign the OC Structural Stability or As-Built Completion Certificate when 8 months of fees are unpaid?",
    a: "Yes, provided the refusal involves a commercial statutory sign-off for a finished project and does not create an acute life-safety emergency. Under Sections 51 and 52 of the Indian Contract Act, 1872, where a consultancy agreement sets out reciprocal promises in sequence—milestone payments against design, site inspection, and final certification—the consultant is not bound to perform the final commercial certification while the developer stands in material breach of prior certified fee milestones. Always document the hold formally via an Advocate Notice offering immediate inspection and certification upon RTGS clearance or escrow deposit.",
  },
  {
    q: "Could withholding an OC or Fire-NOC completion certificate invite criminal complaints or municipal licensing trouble?",
    a: "Only if done unprofessionally, silently, or in a way that endangers active site safety (for example, hiding an urgent slab-collapse warning or sabotaging municipal portal records). Issuing a polite, factual Advocate Notice expressly citing Indian Contract Act ss.51–52, confirming zero safety objection to date while conditioning fresh final certification on settlement of admitted milestone invoices, keeps the dispute strictly within civil commercial contract law and insulates your engineering license from frivolous coercion claims.",
  },
  {
    q: "What if the developer promises to pay immediately after receiving the Occupancy Certificate and asks us to sign now?",
    a: "Never surrender your final statutory sign-off against an oral assurance or an unsecured post-dated cheque. Once the developer obtains OC or Final Fire NOC, your contractual commercial leverage drops to near zero and the promoter often diverts handover collections to lenders. Instead, require either full RTGS settlement of admitted invoices before releasing the certificate, or an irrevocable Bank Escrow / Tripartite Payment Instruction releasing fees simultaneously with delivery of the signed certificate.",
  },
  {
    q: "How can a PMC firm recover 8 months of monthly man-month deployment bills on a stalled real estate or industrial project?",
    a: "Under a monthly man-month deployment contract, your billing right accrues from verified site presence—not slab-casting velocity. Assemble signed mobilization letters, monthly attendance logs, Monthly Progress Reports (MPRs), site Minutes of Meetings (MOMs), and GST e-invoices backed by a BSA 2023 s.63 certificate. Serve a 15-day Advocate Notice under Contract Act ss.51–52 & 73 warning of lawful demobilization if arrears remain unpaid, and pursue parallel recovery via MSEFC Samadhaan (for Udyam Micro/Small PMCs) or an Order XXXVII CPC summary suit.",
  },
  {
    q: "Do structural, MEP, PMC, EIA, and geotechnical soil-testing consultancies qualify for MSMED 45-day payment protection and Income Tax s.43B(h)?",
    a: "Yes. Architectural, engineering, project management, technical testing, and environmental consultancy services (NIC 7110 and NIC 7120) qualify as Micro or Small service enterprises upon Udyam registration (valid prior to invoice/supply dates). When billing corporate developers, EPC companies, or audited LLPs, invoices unpaid beyond 45 days attract monthly-compounded statutory interest at 3x the RBI bank rate under MSMED s.16 and trigger corporate tax disallowance under Section 43B(h) of the Income Tax Act if unpaid past March 31.",
  },
  {
    q: "Can an EPC contractor refuse to pay our geotechnical soil-investigation or topographical survey invoice citing a 'back-to-back' client payment clause?",
    a: "No, not in two decisive ways. First, unless your subcontract explicitly contains an unambiguous conditional payment clause—and even then courts scrutinize indefinite withholding—you have direct contractual privity with the EPC contractor who mobilized your rigs. Second, if your geotechnical lab or survey agency holds Udyam Micro/Small registration, Section 24 of the MSMED Act gives Sections 15–18 overriding statutory effect over contrary contract terms, enforcing the strict 45-day maximum payment ceiling.",
  },
  {
    q: "How does Form 26AS Section 194J TDS help an engineering consultant win an Order XXXVII summary suit?",
    a: "When a corporate developer or EPC contractor deducts 10% (or 2% for technical services under s.194J(1)(a)) TDS on your engineering fee bills and deposits it against your PAN in Form 26AS / AIS while withholding the net 90%–98% cash payout, that statutory tax credit operates as powerful documentary corroboration of liability and extends limitation under Section 18 of the Limitation Act, 1963—helping defeat sham 'defective design' defenses in Order XXXVII CPC and Commercial Court summary proceedings.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T12:10:00+05:30",
  dateModified: "2026-11-19T12:10:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  image: `${SITE_URL}/blog_money_recovery.png`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    name: "Structural, MEP, PMC, EIA & Geotechnical Engineering Consultancy Fee Recovery under Contract Act ss.51–52 and MSMED Act",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Step Structural, MEP, PMC, EIA & Geotechnical Fee Recovery Decision Tree",
  description:
    "Lawful step-by-step protocol for structural engineers, MEP/Fire-NOC consultants, PMC firms, EIA agencies, and geotechnical labs to leverage Contract Act ss.51–52 reciprocal promises, escrow clearance, MSMED ss.15–18, and Order XXXVII CPC.",
  totalTime: "P30D",
  step: [
    {
      position: 1,
      "@type": "HowToStep",
      name: "Audit Certified Milestones, Site Safety Status & BSA s.63 Electronic Dossier",
      text: "Verify that no active life-safety hazard exists, separate paid design stages from pending OC/EC/As-Built deliverables, and freeze native ETABS/STAAD/CAD files, MPRs, borehole logs, and Form 26AS s.194J credits with a BSA 2023 s.63 certificate.",
    },
    {
      position: 2,
      "@type": "HowToStep",
      name: "Serve Advocate Contract Act s.51–52 Conditional Performance & Fee Demand Notice",
      text: "Dispatch a 15-day Advocate Statutory Notice via Email, WhatsApp, and Speed Post RPAD invoking reciprocal performance (Contract Act ss.51–52), confirming readiness to issue final OC/Stability/EIA/SBC sign-offs immediately upon settlement of overdue milestone invoices.",
    },
    {
      position: 3,
      "@type": "HowToStep",
      name: "Mandate RTGS Clearance or Escrow Exchange Before Releasing Final Statutory Sign-Offs",
      text: "Reject oral post-OC payment assurances. Convert settlement discussions into simultaneous RTGS credit or an irrevocable Bank Escrow undertaking releasing fees upon delivery of the signed certificate.",
    },
    {
      position: 4,
      "@type": "HowToStep",
      name: "Trigger MSMED s.16 (3x RBI Interest) & Section 43B(h) Corporate Tax Disallowance",
      text: "Where your consultancy holds Udyam Micro/Small registration (NIC 7110/7120), issue a formal Section 43B(h) Tax Disallowance Intimation to the developer's CFO/Auditors and lodge an MSEFC Samadhaan reference for unpaid invoices past 45 days.",
    },
    {
      position: 5,
      "@type": "HowToStep",
      name: "Enforce Order XXXVII Summary Suit, Commercial Court s.12A or NI Act s.138",
      text: "For non-MSME or high-value developer/EPC arrears, escalate to Commercial Court (after s.12A pre-institution mediation unless urgent interim relief applies), Order XXXVII CPC summary suit on signed work orders/Form 26AS admissions, or NI Act s.138 on bounced cheques.",
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
      name: "CA, Architects & Consultants Recovery",
      item: `${SITE_URL}/industries/ca-architects-consultants-professional-fee-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Structural, MEP, PMC & Geotechnical Consultant Fee Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const STATUTORY_MATRIX = [
  {
    discipline: "Structural Engineer (LSE / RCC / Steel)",
    stuckMilestone: "Structural Stability Certificate, Plinth/OC Form, As-Built RCC Drawings",
    primaryLaw: "Contract Act ss.51–52 (Reciprocal Promises) + Copyright Act ss.13/17 + MSMED s.16",
    forum: "MSEFC Samadhaan (Udyam) / Commercial Court / Order XXXVII CPC",
    leverageWindow: "Pre-OC & Pre-Plinth Checking (Highest Settlement Velocity)",
  },
  {
    discipline: "MEP & Fire-Safety / Fire-NOC Consultant",
    stuckMilestone: "MEP As-Built Schematics, Testing & Commissioning Logs, Final Fire NOC Compliance",
    primaryLaw: "Contract Act ss.51–52 & 70 + MSMED ss.15–18 + Income Tax s.43B(h)",
    forum: "Advocate Escrow Notice -> MSEFC / Commercial Court s.12A",
    leverageWindow: "Pre-Chief Fire Officer (CFO) Inspection & OC Filing",
  },
  {
    discipline: "Project Management Consultant (PMC)",
    stuckMilestone: "6–10 Months Unpaid Resident-Engineer Man-Month & QA/QC Deployment Bills",
    primaryLaw: "Contract Act ss.51, 55 & 73 (Demobilization + Standby Damages) + Form 26AS 194J",
    forum: "Order XXXVII CPC / Commercial Court / MSEFC Samadhaan",
    leverageWindow: "Pre-Demobilization Notice (Before Site Handover/Snag Closure)",
  },
  {
    discipline: "EIA / Environmental Clearance Consultant",
    stuckMilestone: "Draft EIA/EMP Report, Public Hearing Follow-Up, SEAC/EAC Final Appraisal Deck",
    primaryLaw: "Contract Act ss.51–52 + Copyright Act s.51 (Data & Report IP) + s.43B(h)",
    forum: "Advocate IP & s.51 Notice -> Commercial Court / MSEFC",
    leverageWindow: "Pre-SEAC/EAC Appraisal & PARIVESH Final Upload",
  },
  {
    discipline: "Geotechnical & Topographical Survey Agency",
    stuckMilestone: "Borehole Drilling, NABL Soil Testing, SBC Interpretative Report & DGPS Contours",
    primaryLaw: "MSMED s.24 (Overrides 'Pay-When-Paid') + Contract Act ss.51–52 & 70",
    forum: "MSEFC Samadhaan (3x RBI Interest) / Order XXXVII CPC",
    leverageWindow: "Before Final Stamped SBC Report & Native CAD/GIS Release",
  },
];

const EVIDENCE_ITEMS = [
  {
    category: "Contractual Scope & Sequence Proof",
    items: [
      "Signed Fee Proposal, Letter of Intent (LOI), or Consultancy Work Order mapping milestone deliverables against payment tranches.",
      "Explicit schedule showing prior invoices due before final OC, Stability, Fire-NOC, EIA appraisal, or SBC report release.",
      "Variation orders and client emails authorizing additional towers, basement revisions, extra boreholes, or extended PMC months.",
    ],
  },
  {
    category: "Delivery, Site Deployment & Technical Logs",
    items: [
      "Dated drawing transmittal sheets (PDF/CAD/BIM/ETABS/STAAD) and municipal or PARIVESH portal upload acknowledgments.",
      "For PMCs: signed resident engineer mobilization letters, monthly attendance sheets, MPRs, RFI registers, and client-signed MOMs.",
      "For Geotech/EIA labs: signed borehole depth logs, rig mobilization challans, NABL test reports, and SPCB hearing minutes.",
    ],
  },
  {
    category: "Financial & Statutory Admissions",
    items: [
      "GST e-invoices (IRN/QR), GSTR-1 filing logs showing buyer ITC claims, and aged ledger reconciliation statements.",
      "Form 26AS / AIS transcripts reflecting Section 194J TDS deposited by the developer or EPC contractor on unpaid fee bills.",
      "Udyam Registration Certificate (NIC 7110/7120) dated prior to supply—mandatory to invoke MSMED s.16 (3x RBI) and s.43B(h).",
    ],
  },
  {
    category: "BSA 2023 Section 63 Electronic Certification",
    items: [
      "Signed Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate covering email chains, WhatsApp site groups, ERP billing ledgers, and native CAD/BIM metadata.",
      "Written proof that no unresolved structural safety defect or formal quality rejection was raised within the contractual review window.",
      "Copies of all prior payment reminders, bounced cheques with Bank Return Memos (for NI Act s.138), and RPAD dispatch receipts.",
    ],
  },
];

export default function EngineeringConsultantRecoveryPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-23 B2B Creditor Playbook</span>
            <span>&bull;</span>
            <span>Contract Act s.51&ndash;52</span>
            <span>&bull;</span>
            <span>MSMED Act &amp; s.43B(h)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 word Executive Statutory Summary + Parent Hub link within first 250 words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Sections 51&ndash;52 of the Indian Contract Act, 1872, a structural, MEP, Fire-NOC, PMC, EIA, or geotechnical consultant is not legally bound to issue final non-emergency commercial sign-offs (OC Stability, As-Built, or EC appraisal certificates) while prior certified milestone fees remain unpaid. Part of our{" "}
            <Link
              href="/industries/ca-architects-consultants-professional-fee-recovery"
              className="text-red-300 underline decoration-red-400/70 hover:text-white font-bold"
            >
              CA, Architects, Engineers &amp; Advisory Fee Recovery Hub
            </Link>
            , this operational playbook pairs reciprocal performance leverage with MSMED s.16 (3x RBI interest), Income Tax s.43B(h), and Order XXXVII CPC enforcement.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.51&ndash;52</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Contract Act Reciprocal Performance Right
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">45 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MSMED s.15 Ceiling (Overrides Pay-When-Paid)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Monthly Compound Interest (NIC 7110/7120)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">s.43B(h)</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Developer Corporate Tax Disallowance Trigger
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "CA, Architects & Consultants Recovery",
              href: "/industries/ca-architects-consultants-professional-fee-recovery",
            },
            {
              label: "Structural, MEP, PMC & Geotech Consultant Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="mt-4 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <EngineeringRecoveryTableOfContents />

          {/* Right Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Leverage Gap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Engineers Sign Away OC &amp; EC Leverage Under False Promises
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across Mumbai, NCR, Bengaluru, Pune, Hyderabad, Ahmedabad, and Chennai, technical engineering consultancies—Structural Engineers (Licensed Structural Engineers / RCC &amp; Post-Tensioning Designers), MEP &amp; Fire-NOC Designers, Project Management Consultants (PMCs), QCI-NABET Environmental Impact Assessment (EIA) agencies, and Geotechnical Soil-Investigation labs—routinely hold the single highest point of statutory commercial leverage in a ₹100-crore construction project, yet end up holding the worst aged receivables.
                </p>
                <p>
                  The commercial trap unfolds predictably. During the first 12 to 24 months of excavation, piling, and superstructure casting, your engineering team delivers STAAD/ETABS models, Good For Construction (GFC) reinforcement drawings, HVAC/electrical schematics, baseline environmental monitoring, and daily site QA/QC supervision. The promoter pays the opening 30%&ndash;45% smoothly, then stretches the remaining 6 to 10 months of milestone or monthly man-month invoices citing RERA escrow timing, lender tranche delays, or minor drawing revisions.
                </p>
                <p>
                  Then arrives the decisive choke point: the developer needs your signed <strong>Structural Stability Certificate</strong>, <strong>MEP As-Built Commissioning Certificate</strong>, <strong>Fire-Safety Compliance Dossier</strong>, <strong>SEAC/EAC Environmental Clearance appraisal presentation</strong>, or <strong>Final Safe Bearing Capacity (SBC) Geotechnical Report</strong> to file for the Municipal Occupancy Certificate (OC), Final Fire NOC, or bank project-finance disbursement. Without your statutory sign-off, flat handovers, lease rent commencement, and RERA closure freeze completely.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
                    The Post-OC Default Reality
                  </p>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Under intense phone calls from the developer&apos;s managing director promising &ldquo;we will transfer your entire ₹28 lakh the morning OC arrives,&rdquo; too many engineering principals sign the certificate in good faith. The day OC is granted, the project SPV diverts handover proceeds to bank debt and contractors, stops answering calls, and forces the consultant into a multi-year civil recovery battle. Retaining lawful contractual control <strong>before</strong> executing final commercial sign-offs converts a 3-year courtroom chase into a 10-to-15-day escrow settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Contract Act ss.51–52 */}
            <section
              id="heading-reciprocal-promises"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Contract Act ss.51&ndash;52: Lawful Right to Pause Final Sign-Offs
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Developers frequently try to intimidate consulting engineers by alleging that pausing an OC Structural Stability Certificate or As-Built MEP set amounts to &ldquo;extortion&rdquo; or &ldquo;unlawful withholding of property.&rdquo; Indian statutory contract law directly refutes that pressure tactic when structured properly under the <strong>Indian Contract Act, 1872</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 border-l-4 border-l-[#DC2626]">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      Section 51 &middot; Simultaneous Reciprocity
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      When a contract consists of reciprocal promises to be simultaneously performed, no promisor need perform their promise unless the promisee is ready and willing to perform their reciprocal payment obligation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 border-l-4 border-l-slate-900">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                      Section 52 &middot; Contractual Order
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Where the work order expressly fixes the sequence—Stage 1&ndash;6 fee payments preceding Stage 7 Final Inspection &amp; Completion Sign-Off—the developer cannot demand Stage 7 performance while breaching Stages 3&ndash;6.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 border-l-4 border-l-emerald-600">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
                      Section 54 &middot; Defaulting Party Barred
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      When one promise cannot be performed until the prior reciprocal promise is honoured, the defaulting developer cannot claim non-performance damages and must compensate the consultant for resulting delay/idle losses.
                    </p>
                  </div>
                </div>

                <p>
                  Crucially, exercising Sections 51&ndash;52 is legally distinct from holding a client&apos;s pre-existing personal documents hostage (which courts restrict for advocates under <em>R.D. Saxena</em> or CAs under ICAI guidelines). Here, the Structural Stability Certificate, MEP As-Built Compilation, SEAC/EAC Final Appraisal Deck, or Final SBC Geotechnical Report is a <strong>new professional work product</strong> that your firm has not yet been paid to produce, verify, and certify. You are also reinforced by{" "}
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Copyright Act ss.13, 17 &amp; 19 intellectual property retention rules
                  </Link>
                  : unpaid native CAD, Revit BIM, ETABS/STAAD models, and EIA technical compilations remain your firm&apos;s exclusive copyright until full fee settlement.
                </p>
              </div>
            </section>

            {/* Section 3: Safety vs Commercial Deliverable Boundaries */}
            <section
              id="heading-safety-boundaries"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Emergency Safety vs Commercial Deliverables: Ethical Boundaries
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                To keep your engineering consultancy 100% bulletproof before Municipal Licensing Committees, the National Building Code (NBC 2016) compliance authorities, and civil courts, maintain an airtight boundary between <strong>active life-safety alerts</strong> and <strong>commercial certification deliverables</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-3">
                    Lawful Commercial Leverage (Do This)
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-700 mt-0.5">&check;</span>
                      <span>
                        Pause issuance of fresh <strong>Occupancy Certificate (OC) Stability Forms</strong>, Final Fire-NOC compliance letters, MEP As-Built drawings, SEAC/EAC appraisal decks, and Final SBC Soil Reports via formal Advocate s.51&ndash;52 notice.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-700 mt-0.5">&check;</span>
                      <span>
                        Offer an explicit <strong>Simultaneous Escrow Exchange</strong>: confirm in writing that your engineers are ready to inspect and execute the certificate within 48 hours of RTGS clearance or bank escrow deposit.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-700 mt-0.5">&check;</span>
                      <span>
                        File a factual <strong>Scope &amp; Supervision Cut-Off Intimation</strong> with the Municipal Authority or RERA if the developer unilaterally replaces you mid-project, capping your professional liability strictly to inspected slabs.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-red-50 border border-red-200 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-3">
                    Strict Red Lines (Never Do This)
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-red-950">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#DC2626] mt-0.5">&times;</span>
                      <span>
                        <strong>Never withhold urgent structural hazard alerts</strong> (e.g., active shoring failure, foundation settlement, or live excavation collapse risk) to coerce payment—public life safety overrides commercial claims.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#DC2626] mt-0.5">&times;</span>
                      <span>
                        <strong>Never delete or tamper with already-uploaded files</strong> on Municipal, RERA, or MoEFCC PARIVESH government portals—that invites IT Act s.43/s.66 counter-proceedings.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#DC2626] mt-0.5">&times;</span>
                      <span>
                        <strong>Never retain client-supplied original land deeds or third-party municipal originals</strong>; your lawful leverage rests on withholding your own unpaid future certification and native engineering IP.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: 5-Step Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Step OC, Fire-NOC, EIA &amp; PMC Fee Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this sequential operational decision tree the moment milestone or monthly deployment invoices cross 45 days—and strictly before signing final statutory completion forms:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto pb-2">
                <svg
                  viewBox="0 0 920 260"
                  width={920}
                  height={260}
                  role="img"
                  aria-label="5-step engineering consultancy fee recovery decision tree from evidence lock to Order 37 and MSEFC enforcement"
                  className="w-full h-auto rounded-xl border border-slate-200 bg-slate-950"
                >
                  <defs>
                    <marker
                      id="eng-arrow"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Title Banner */}
                  <text
                    x="460"
                    y="28"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="1.6"
                  >
                    LAWFUL PRE-OC / PRE-EC / PMC ESCALATION RAIL (INDIAN CONTRACT ACT s.51–52 + MSMED ACT)
                  </text>

                  {/* Stage 1 */}
                  <rect x="20" y="52" width="156" height="148" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="20" y="52" width="156" height="28" rx="12" fill="#DC2626" />
                  <text x="98" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">
                    STEP 1 &middot; DAY 1–3
                  </text>
                  <text x="98" y="102" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    Freeze Native IP &amp;
                  </text>
                  <text x="98" y="118" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    Audit Safety Status
                  </text>
                  <text x="98" y="142" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Lock CAD/ETABS/SBC
                  </text>
                  <text x="98" y="156" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    &amp; BSA s.63 Logs +
                  </text>
                  <text x="98" y="170" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Form 26AS 194J Proof
                  </text>

                  <line x1="176" y1="126" x2="196" y2="126" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#eng-arrow)" />

                  {/* Stage 2 */}
                  <rect x="202" y="52" width="156" height="148" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="202" y="52" width="156" height="28" rx="12" fill="#DC2626" />
                  <text x="280" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">
                    STEP 2 &middot; DAY 4–7
                  </text>
                  <text x="280" y="102" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    Serve s.51–52
                  </text>
                  <text x="280" y="118" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    Advocate Notice
                  </text>
                  <text x="280" y="142" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Pause OC/Fire/EC
                  </text>
                  <text x="280" y="156" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Sign-Offs Conditionally
                  </text>
                  <text x="280" y="170" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Email + WA + RPAD
                  </text>

                  <line x1="358" y1="126" x2="378" y2="126" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#eng-arrow)" />

                  {/* Stage 3 */}
                  <rect x="384" y="52" width="156" height="148" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.8" />
                  <rect x="384" y="52" width="156" height="28" rx="12" fill="#059669" />
                  <text x="462" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">
                    STEP 3 &middot; DAY 8–15
                  </text>
                  <text x="462" y="102" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    Escrow / RTGS
                  </text>
                  <text x="462" y="118" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    Simultaneous Swap
                  </text>
                  <text x="462" y="142" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    No Oral Post-OC IOUs;
                  </text>
                  <text x="462" y="156" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    Release Certificate Only
                  </text>
                  <text x="462" y="170" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    Against Bank Credit
                  </text>

                  <line x1="540" y1="126" x2="560" y2="126" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#eng-arrow)" />

                  {/* Stage 4 */}
                  <rect x="566" y="52" width="156" height="148" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="566" y="52" width="156" height="28" rx="12" fill="#D97706" />
                  <text x="644" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">
                    STEP 4 &middot; DAY 16–25
                  </text>
                  <text x="644" y="102" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    MSMED s.16 &amp;
                  </text>
                  <text x="644" y="118" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    s.43B(h) Tax Trigger
                  </text>
                  <text x="644" y="142" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Notify Developer CFO;
                  </text>
                  <text x="644" y="156" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    File MSEFC Samadhaan
                  </text>
                  <text x="644" y="170" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    (3x RBI Compound)
                  </text>

                  <line x1="722" y1="126" x2="742" y2="126" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#eng-arrow)" />

                  {/* Stage 5 */}
                  <rect x="748" y="52" width="152" height="148" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="748" y="52" width="152" height="28" rx="12" fill="#0F172A" />
                  <text x="824" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="800">
                    STEP 5 &middot; DAY 26+
                  </text>
                  <text x="824" y="102" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    Order 37 / s.138 /
                  </text>
                  <text x="824" y="118" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">
                    Commercial Suit
                  </text>
                  <text x="824" y="142" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Summary Decree +
                  </text>
                  <text x="824" y="156" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Order 38 r.5 Attachment
                  </text>
                  <text x="824" y="170" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    or Arbitration s.9/21
                  </text>

                  {/* Footer Note */}
                  <text x="460" y="236" textAnchor="middle" fill="#94A3B8" fontSize="10.5">
                    Note: If developer bypasses you with a replacement engineer, immediately file a Scope Cut-Off Intimation with Municipal/RERA Authority.
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "Step 1 (Day 1–3)",
                    title: "Freeze Native IP & Audit Safety Status",
                    body: "Confirm zero active site safety hazard; lock native CAD/ETABS/SBC files and compile BSA s.63 transmittals & Form 26AS 194J credits.",
                  },
                  {
                    step: "Step 2 (Day 4–7)",
                    title: "Serve s.51–52 Conditional Sign-Off Notice",
                    body: "Dispatch an Advocate Notice via Email, WhatsApp & RPAD pausing OC/Stability/Fire/EIA sign-offs until overdue prior milestones are paid.",
                  },
                  {
                    step: "Step 3 (Day 8–15)",
                    title: "Mandate RTGS or Bank Escrow Exchange",
                    body: "Reject verbal post-OC payment promises; deliver signed final certificates strictly against cleared RTGS credit or irrevocable escrow.",
                  },
                  {
                    step: "Step 4 (Day 16–25)",
                    title: "Invoke MSMED s.16 & Income Tax s.43B(h)",
                    body: "Serve CFO tax-disallowance intimation (s.43B(h)) and file MSEFC Samadhaan reference claiming 3x RBI monthly compound interest.",
                  },
                  {
                    step: "Step 5 (Day 26+)",
                    title: "Order XXXVII CPC, Commercial Suit or s.138",
                    body: "Escalate unresolved developer/EPC ledgers into Summary Suit, Commercial Court s.12A/Arbitration, or NI Act s.138 cheque prosecution.",
                  },
                ].map((card, i) => (
                  <div
                    key={card.step}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex gap-3 items-start"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {card.step}
                      </p>
                      <p className="text-sm font-extrabold text-slate-900 mb-1">
                        {card.title}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Statutory Forum Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Forum Matrix: Structural, MEP, PMC, EIA &amp; Geotech
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every engineering discipline sits on a different regulatory milestone and contractual billing model. Use the creditor matrix below to pair your discipline&apos;s exact bottleneck with the fastest statutory enforcement rail:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Engineering Discipline</th>
                      <th className="py-3.5 px-4 font-bold">Stuck Deliverable / Milestone</th>
                      <th className="py-3.5 px-4 font-bold">Governing Statutory Hooks</th>
                      <th className="py-3.5 px-4 font-bold">Primary Recovery Forum</th>
                      <th className="py-3.5 px-4 font-bold">Peak Leverage Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr
                        key={row.discipline}
                        className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                      >
                        <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                          {row.discipline}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 align-top">
                          {row.stuckMilestone}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 align-top font-medium">
                          {row.primaryLaw}
                        </td>
                        <td className="py-3.5 px-4 text-slate-800 align-top">
                          {row.forum}
                        </td>
                        <td className="py-3.5 px-4 text-emerald-700 font-semibold align-top">
                          {row.leverageWindow}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Interactive 4-Scenario Playbooks */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Engineering Consultancy Default Traps: Legal Action Plans
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your consultancy vertical below to view the exact developer default tactic, statutory counter-leverage, and three-step execution playbook:
              </p>

              <EngineeringRecoveryScenarioTabs />
            </section>

            {/* Section 7: Worked Financial & MSME Interest Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked &#8377;34.8L Ledger: Structural, PMC &amp; MSME s.16 Interest
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a Pune/NCR Udyam-registered Small Engineering &amp; PMC Consultancy (NIC 7110) owed 8 months of unpaid structural supervision and resident-engineer deployment bills by a corporate real estate developer seeking its final Occupancy Certificate:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-lg mb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                      Illustrative Creditor Recovery &amp; Tax Disallowance Ledger
                    </p>
                    <p className="text-base sm:text-lg font-extrabold text-white">
                      Structural + PMC 8-Month Overdue Receivable (Udyam Small Enterprise)
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    RBI Bank Rate Assumed: 6.75% p.a. (3x = 20.25% p.a.)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Unpaid Structural Stage Bills (Stages 4–6)</span>
                      <span className="font-bold text-white">&#8377;14,50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Unpaid PMC Man-Month Bills (8 Months)</span>
                      <span className="font-bold text-white">&#8377;16,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Sub-Total Principal (Excl. TDS Adjusted)</span>
                      <span className="font-bold text-slate-100">&#8377;30,50,000</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/10">
                      <span className="text-emerald-300 font-semibold">
                        MSMED s.16 Compound Interest (~8 Mo Avg Delay @ 20.25% p.a.)
                      </span>
                      <span className="font-extrabold text-emerald-400">&#8377;4,30,000</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Total Statutory Demand Claim</span>
                      <span className="font-black text-emerald-400 text-base">&#8377;34,80,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-amber-300">
                        Developer Income Tax Disallowance (s.43B(h) @ ~25.17%)
                      </span>
                      <span className="font-extrabold text-amber-400">&#8377;7,67,685</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-300">
                        CGST s.16(2) 180-Day ITC Reversal Risk (18% GST)
                      </span>
                      <span className="font-extrabold text-red-400">&#8377;5,49,000</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/10">
                      <span className="text-slate-200 font-bold">
                        Combined Developer Cash-Outflow Penalty if Unpaid
                      </span>
                      <span className="font-black text-red-400">&#8377;17.46 Lakh+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-emerald-900 font-medium">
                  Want exact invoice-by-invoice monthly compounding for your Udyam engineering or PMC ledger? Run your real dates in our interactive tool.
                </p>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors"
                >
                  Open MSME Interest Calculator &rarr;
                </Link>
              </div>
            </section>

            {/* Section 8: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Engineering Evidence Dossier &amp; BSA 2023 s.63 Proof Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Whether enforcing through MSEFC Samadhaan, a Commercial Court suit (after mandatory s.12A pre-institution mediation unless urgent interim relief is sought), or an{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Order XXXVII CPC Summary Suit
                </Link>
                , build your digital proof packet before serving notice so every CAD transmittal, MPR, and WhatsApp approval is admissible under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EVIDENCE_ITEMS.map((group) => (
                  <div
                    key={group.category}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
                  >
                    <h3 className="text-sm font-extrabold text-slate-900 mb-3 pb-2 border-b border-slate-200">
                      {group.category}
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track B2B CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Launch a &#8377;999 Consultant Notice or Multi-Site Firm CSV Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Stop funding a developer&apos;s construction cash flow out of your engineering payroll. Start with a single advocate-drafted Contract Act s.51&ndash;52 &amp; MSMED notice today, or onboard your entire aged project receivables ledger onto our institutional B2B desk:
              </p>

              <EngineeringRecoveryCTA />
            </section>

            {/* Section 10: Internal Hub, Tools, Templates & Sibling Links */}
            <section
              id="heading-internal-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Professional Fee Hub, MSME Calculators &amp; Related Legal Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    tag: "IND-23 Pillar Hub",
                    title: "CAs, Architects, Engineers & Advisory Fee Recovery",
                    href: "/industries/ca-architects-consultants-professional-fee-recovery",
                    desc: "Full multi-track recovery directory for licensed technical, design, legal, and financial firms.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "Architect Stage Fee & GFC Drawing Copyright Recovery",
                    href: "/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery",
                    desc: "Enforce Copyright Act ss.13/17/51/59 and COA Reg. 2(1)(xii) against defaulting developers.",
                  },
                  {
                    tag: "Sibling Playbook",
                    title: "CA Unpaid Audit & Tax Retainer Recovery (ICAI Clause 8)",
                    href: "/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc",
                    desc: "Recover Balance-Sheet-provisioned audit & advisory fees using Form 26AS 194J and ITC reversal.",
                  },
                  {
                    tag: "Core Seed Guide",
                    title: "Consultancy & Professional Retainer Fee Recovery",
                    href: "/recovery/consultancy-fees",
                    desc: "Pre-litigation advocate notices and civil recovery workflows for overdue B2B consultancy bills.",
                  },
                  {
                    tag: "Interactive Calculator",
                    title: "MSME Delayed Payment 3x RBI Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Calculate exact monthly-compounded MSMED s.16 interest for Udyam engineering & PMC bills.",
                  },
                  {
                    tag: "Notice Template",
                    title: "Section 43B(h) MSME Tax Disallowance Demand Notice",
                    href: "/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice",
                    desc: "Ready-to-customize notice alerting developer CFOs to March 31 Income Tax disallowance.",
                  },
                  {
                    tag: "Notice Template",
                    title: "MSME Delayed Payment Statutory Demand Notice",
                    href: "/templates/msme-delayed-payment-demand-notice",
                    desc: "Structured 15-day pre-MSEFC demand format under MSMED Act ss.15–18.",
                  },
                  {
                    tag: "Notice Template",
                    title: "Construction RA Bill & Retention Arbitration Notice",
                    href: "/templates/construction-ra-bill-retention-money-arbitration-notice",
                    desc: "Useful for EPC/PMC consultants facing withheld retention money or stalled project claims.",
                  },
                  {
                    tag: "Interactive Calculator",
                    title: "Construction Retention & Escalation Claim Calculator",
                    href: "/tools/construction-retention-dlp-escalation-claim-calculator",
                    desc: "Quantify trapped DLP retention and idle-time escalation claims on delayed real estate sites.",
                  },
                ].map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#DC2626]/60 hover:shadow-md p-4 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white mb-2">
                        {card.tag}
                      </span>
                      <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                        {card.title}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <span className="mt-3 text-xs font-bold text-[#DC2626]">
                      Read Guide &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: Structural Stability, OC Sign-Offs, PMC &amp; EIA Dues
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-slate-200 bg-slate-50/60 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 text-xs font-extrabold flex items-center justify-center shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources & Author Attribution */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Bare Acts, NBC Standards &amp; Regulatory References
                </h2>
              </div>

              <ul className="space-y-2.5 mb-6">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-900 mb-1">
                  Reviewed &amp; Authored by Anuj Anand Malik (Advocate &amp; Founder, AMA Legal Solutions)
                </p>
                <p>
                  This operational recovery guide is for B2B legal information for Indian engineering, PMC, EIA, and geotechnical consultancies. Specific contractual arbitration clauses, municipal licensing bye-laws, and urgent site-safety duties should be verified against your signed work order before dispatching statutory notices.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
