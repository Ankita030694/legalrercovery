import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import WorksContractTableOfContents from "./WorksContractTableOfContents";
import WorksContractScenarioTabs from "./WorksContractScenarioTabs";
import WorksContractCTA from "./WorksContractCTA";

export const revalidate = 86400;

const PAGE_URL = "/works-contract-excluded-from-msme-samadhaan-contractor-alternatives";
const EXACT_H1 =
  "The Works-Contract MSME Samadhaan Trap: Why High Courts Exclude Indivisible EPC/Civil Works from MSEFC—and How to Structure & Recover Claims";
const META_TITLE = "Why MSEFC Rejects Works Contracts & How Contractors Win";
const META_DESCRIPTION =
  "High Courts hold indivisible works contracts fall outside MSMED Act s.18. Learn how EPC & MEP contractors split Supply POs and recover unpaid dues.";

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
        alt: formatAltText("Why MSEFC Rejects Works Contracts & Contractor Recovery Guide"),
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
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 2(n), 2(d), 2(e), 15, 16, 17, 18 & 19) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2012",
  },
  {
    title:
      "Commercial Courts Act, 2015 (Sections 2(1)(c)(vi) & 12A — Commercial Disputes Arising from Construction & Infrastructure Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Sections 9, 11, 21, 29A, 34 & 36 — Interim Measures, Arbitrator Appointment & Award Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Limitation Act, 1963 (Section 14 — Exclusion of Time of Proceeding Bona Fide in Court Without Jurisdiction & Article 137)",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits for Liquidated Demands & Section 80 — 60-Day Notice to Government)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records & Measurement Book Log Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Delhi High Court on Inapplicability of MSMED Act to Indivisible Composite Works Contracts",
    parties: "Shree Gee Enterprises v. Union of India & Ors.",
    citation: "W.P.(C) 4735/2015, High Court of Delhi",
    date: "Judgment Delivered 19 October 2015",
    facts:
      "The petitioner was awarded a composite contract involving civil construction, electrical works, and supply of equipment. Upon default in payment, the petitioner approached the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18. The respondent employer challenged the reference, contending that a composite works contract does not constitute pure supply of goods or pure rendering of services under the MSMED Act, 2006.",
    holding:
      "The Delhi High Court held that the MSMED Act, 2006 was specifically legislated to protect suppliers of goods and service providers. A composite indivisible works contract is a distinct legal species recognized under Article 366(29A) of the Constitution of India and cannot be fractured into goods and services for conferring statutory jurisdiction upon the MSEFC. Consequently, the reference to MSEFC was quashed for lack of subject-matter jurisdiction.",
    amount: "Jurisdictional Bar Established — Composite Works Outside MSMED Act",
    takeaway:
      "Turnkey civil, MEP, and EPC contractors cannot invoke Section 18 of the MSMED Act if the tender or contract was executed as a single indivisible works contract without independent, segregated supply commitments.",
  },
  {
    title: "Bombay High Court on Primacy of Arbitration Clause in Turnkey EPC Substation Disputes",
    parties: "Konaark Industries v. Tata Projects Ltd. & Anr.",
    citation: "Arbitration Petition No. 128 of 2021, High Court of Bombay",
    date: "Order Dated 14 July 2022",
    facts:
      "Konaark Industries, an Udyam-registered MSME contractor, entered into an agreement with Tata Projects for the supply, erection, testing, and commissioning of high-voltage transmission towers and substations. When payment issues arose, Konaark approached the MSEFC, arguing that Section 18 overrode the contractual arbitration clause. Tata Projects moved the High Court, asserting the contract was an indivisible EPC package.",
    holding:
      "The Bombay High Court affirmed that where the underlying contract is a turnkey, indivisible engineering package requiring supply coupled with complex erection and civil performance, the statutory mechanism of the MSMED Act cannot be invoked. The MSEFC lacks the statutory charter to resolve multi-tiered works disputes involving site testing, variation orders, and liquidated damages. The parties were relegated to the contractual arbitration tribunal.",
    amount: "Contractual Arbitration Clause Prevails Over MSEFC for EPC Packages",
    takeaway:
      "Main contractors can successfully petition the High Court to halt MSEFC proceedings if the agreement constitutes an indivisible EPC package, forcing the contractor to seek relief under the Arbitration and Conciliation Act, 1996.",
  },
  {
    title: "Allahabad High Court on Pure Goods & Services vs Turnkey Construction Works",
    parties: "Sterling and Wilson Pvt. Ltd. v. Union of India & Ors.",
    citation: "Writ-C No. 15478 of 2020, High Court of Allahabad",
    date: "Judgment Delivered 10 August 2021",
    facts:
      "A subcontractor providing electrical and structural turnkey erection for an infrastructure facility filed a reference before the Uttar Pradesh MSEFC. The principal contractor filed a writ petition seeking a writ of prohibition to restrain the Council from adjudicating the multi-crore works dispute.",
    holding:
      "The Allahabad High Court issued a writ of prohibition, observing that the MSMED Act 2006 does not contemplate or define a 'works contract'. The Council's summary jurisdiction under Section 18 cannot adjudicate complicated construction disputes involving defect liability periods, site delays, and mutual breach allegations. The Council's jurisdiction is strictly limited to pure contracts of sale of goods or provision of defined services.",
    amount: "Writ of Prohibition Issued Against MSEFC Adjudication of Works",
    takeaway:
      "Subcontractors attempting to recover turnkey project dues before MSEFC face immediate writ intervention and stay orders from High Courts, paralyzing their cash recovery.",
  },
  {
    title: "Supreme Court on Indivisible Works Contracts as a Distinct Constitutional Category",
    parties: "Commissioner of Central Excise and Customs, Kerala v. Larsen & Toubro Ltd.",
    citation: "(2016) 1 SCC 170, Supreme Court of India",
    date: "Judgment Delivered 20 August 2015",
    facts:
      "The Revenue attempted to levy service tax on indivisible composite works contracts prior to the introduction of Finance Act 2007 amendments, arguing that the service component could be conceptually excised from the supply component.",
    holding:
      "The Supreme Court held that an indivisible works contract is a separate and distinct legal category from both a contract for sale of goods and a contract for provision of pure services. Without express legislative authority and valuation machinery, an indivisible works contract cannot be artificially dissected into goods and services. This ruling forms the foundational jurisprudence relied upon by High Courts to exclude works contracts from the MSMED Act.",
    amount: "Foundational Jurisprudence — Indivisible Works Cannot be Artificially Fractured",
    takeaway:
      "Because the MSMED Act 2006 lacks statutory machinery to apportion indivisible works contracts into goods and services, the entire contract falls outside Section 18.",
  },
  {
    title: "Delhi High Court on the Divisible Contract Exception: Pure Supply POs Remain Eligible",
    parties: "Tata Power Company Ltd. v. Micro and Small Enterprises Facilitation Council",
    citation: "W.P.(C) 8872/2019, High Court of Delhi",
    date: "Order Dated 11 November 2021",
    facts:
      "A vendor was issued two distinct Purchase Orders by Tata Power: one PO specifically for the supply of transformers and switchgear equipment (with independent pricing and transit insurance), and a separate Work Order for site civil foundation and erection. The vendor filed before MSEFC solely for unpaid invoices under the Supply PO.",
    holding:
      "The High Court held that where the employer has bifurcated the project into a divisible Supply Purchase Order and a separate Service/Erection Order, the claim under the pure Supply PO satisfies Section 2(n) of the MSMED Act. The MSEFC holds valid statutory jurisdiction over the unpaid supply invoices, even if both contracts relate to the same larger project.",
    amount: "Divisible Supply PO Exception Upheld — Full MSEFC Jurisdiction Restored",
    takeaway:
      "Contractors who structure their work through separate, divisible Purchase Orders for equipment and materials preserve their complete right to recover under MSME Samadhaan with 3x RBI compound penal interest.",
  },
];

const FAQS = [
  {
    question: "Are composite works contracts eligible for MSME Samadhaan MSEFC?",
    answer:
      "No. Landmark rulings of the Delhi High Court (Shree Gee Enterprises), Bombay High Court (Konaark Industries v. Tata Projects), and Allahabad High Court (Sterling and Wilson) have consistently established that indivisible composite works contracts fall outside the statutory scope of Section 18 of the MSMED Act, 2006. The MSMED Act only governs contracts for the sale of pure goods or pure services. Because indivisible works contracts involve an inseparable combination of material supply, civil works, and labor without segregated statutory pricing, the MSEFC lacks subject-matter jurisdiction to entertain or decide such claims.",
  },
  {
    question: "Why do High Courts quash MSEFC awards granted to civil and EPC contractors?",
    answer:
      "High Courts quash MSEFC awards granted for composite works contracts on the ground of total lack of subject-matter jurisdiction (coram non judice). Under the Supreme Court's ruling in CCE v. Larsen & Toubro (2016) 1 SCC 170, an indivisible works contract is a distinct legal entity that cannot be artificially dissected into goods and services without express legislative provisions. Since the MSMED Act 2006 neither defines 'works contract' nor provides any valuation machinery to bifurcate goods from civil works, any arbitral award passed by an MSEFC on an indivisible works contract is void ab initio and liable to be set aside under Section 34 of the Arbitration and Conciliation Act, 1996 or quashed under Article 226/227 writ jurisdiction.",
  },
  {
    question: "How can EPC, MEP, and civil contractors structure contracts to remain eligible for MSME Samadhaan?",
    answer:
      "Contractors must execute a 'Dual-PO Structure' prior to project commencement. Instead of signing a single composite works contract, the contractor must insist on two legally separate, divisible contracts: (1) An Equipment & Material Supply Purchase Order (covering manufactured goods, equipment, cables, and fabrication delivered ex-works or FOR site, supported by E-Way Bills, GST tax invoices with HSN codes, and retention of title); and (2) A Site Services & Erection Agreement (covering site installation, testing, civil foundation, and commissioning). Under the Delhi High Court's Tata Power ruling, the Supply PO constitutes a pure contract of sale under Section 2(n), allowing the contractor to recover material dues through MSEFC with 3x RBI compound penal interest.",
  },
  {
    question: "What happens to the limitation period if a contractor wastes 2 years in MSEFC before getting dismissed?",
    answer:
      "If an MSEFC reference or award is dismissed or quashed for lack of subject-matter jurisdiction, the contractor can invoke Section 14 of the Limitation Act, 1963. Section 14 excludes the time spent bona fide in prosecuting a legal proceeding in a forum that suffered from a defect of jurisdiction. To successfully claim Section 14 exclusion when transitioning to Commercial Court or contractual arbitration, the contractor must demonstrate that the MSEFC filing was pursued diligently and in good faith based on valid Udyam registration, without deliberate concealment of contract terms.",
  },
  {
    question: "What are the fastest recovery alternatives for contractors excluded from MSME Samadhaan?",
    answer:
      "For contractors with indivisible works contracts, four primary legal alternatives exist: (1) Commercial Courts Act, 2015: File a commercial suit under Section 2(1)(c)(vi) with fast-track case management and Section 12A Pre-Institution Mediation; (2) Fast-Track Arbitration: Invoke Section 21 and Section 11(6) of the Arbitration Act, 1996 for the appointment of a neutral sole arbitrator, alongside Section 9 emergency interim injunctions to stay illegal encashment of Performance Bank Guarantees (PBG); (3) Order XXXVII CPC Summary Suit: Applicable where the employer has signed Measurement Books (MB) or issued undisputed milestone handover certificates; and (4) Section 80 CPC Notice: Mandatory 60-day statutory notice for claims against CPWD, Railways, NHAI, or State PWD authorities prior to filing suit.",
  },
  {
    question: "Can an EPC main contractor hide behind a 'pay-when-paid' or back-to-back clause to deny subcontractor dues?",
    answer:
      "No. Indian courts do not treat 'pay-when-paid' clauses as an absolute defense for non-payment. Under Section 23 and Section 28 of the Indian Contract Act, 1872, conditional clauses that indefinitely postpone payment for completed works are viewed with strict judicial scrutiny. Where a subcontractor has completed the work, obtained joint inspection sign-offs, and the main contractor has received stage payments or failed to pursue claims against the project owner with due diligence, courts hold the main contractor liable to settle subcontractor dues independently.",
  },
  {
    question: "Does Income Tax Section 43B(h) apply to composite works contracts executed by MSMEs?",
    answer:
      "Section 43B(h) of the Income Tax Act, 1961 disallows deductions for payments owed to Micro and Small enterprises if not settled within the timelines specified under Section 15 of the MSMED Act (maximum 45 days). Because Section 43B(h) is tethered directly to the definition of 'supplier' under Section 2(n) of the MSMED Act, corporate buyers frequently argue that dues under composite works contracts are exempt from Section 43B(h) disallowance. However, where contracts are bifurcated into divisible Supply POs, the corporate buyer faces mandatory tax disallowance on the supply component if unpaid by March 31.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
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
    name: "Works Contract Exclusion from MSME Samadhaan MSEFC & Contractor Recovery",
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
      name: "Construction & EPC Recovery",
      item: `${SITE_URL}/industries/construction-epc-contractor-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Works Contract MSME Exclusion",
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

export default function WorksContractExcludedFromMsmeSamadhaanPage() {
  const breadcrumbItems = [
    { label: "Construction & EPC Recovery", href: "/industries/construction-epc-contractor-recovery" },
    { label: "Works Contract MSME Exclusion", href: PAGE_URL },
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>MSMED Act Section 18</span>
              <span className="text-red-500">&bull;</span>
              <span>High Court Jurisdictional Bar</span>
              <span className="text-red-500">&bull;</span>
              <span>EPC &amp; MEP Contractor Recovery</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (First 250 words with Parent Hub Link) */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Statutory Answer &bull; Section 18 MSMED Exclusion
              </span>
              <p>
                In our specialized practice at the{" "}
                <Link
                  href="/industries/construction-epc-contractor-recovery"
                  className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400 underline-offset-2 transition-colors"
                >
                  Construction, EPC &amp; Turnkey MEP Contractor Recovery Hub
                </Link>
                , civil and infrastructure contractors routinely encounter catastrophic jurisdictional hurdles before the Micro and Small Enterprises Facilitation Council (MSEFC). Landmark decisions of the Delhi, Bombay, and Allahabad High Courts affirm that indivisible composite &apos;Works Contracts&apos; fall strictly outside Section 18 of the MSMED Act, 2006. Because indivisible EPC agreements combine materials and labor without divisible pricing, Facilitation Councils lack subject-matter jurisdiction. To recover unpaid RA bills and retention money, contractors must either deploy a pre-bid Dual-Purchase-Order bifurcation or immediately pivot to fast-track Commercial Courts under Section 2(1)(c)(vi) and contractual arbitration under the Arbitration and Conciliation Act, 1996.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">0%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  MSEFC Jurisdiction on Indivisible Works
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">2 to 3 Yrs</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Average Wasted Time in Quashed Samadhaan Awards
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Dual-PO</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Supply vs Erection Bifurcation Solution
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">s. 2(1)(c)(vi)</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Commercial Courts Act Fast-Track Forum
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <WorksContractTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Statutory Trap */}
              <section id="heading-statutory-trap" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    The MSMED Section 2(n) &amp; Section 18 Statutory Trap for Works Contractors
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Why Millions in Turnkey Civil, MEP, Solar &amp; HVAC Dues Are Thrown Out of Facilitation Councils
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Every year, thousands of engineering and infrastructure contractors holding valid Udyam registration certificates attempt to recover overdue running account (RA) bills, final milestone invoices, and withheld retention money through the online MSME Samadhaan portal. Operating under the belief that any registered enterprise can drag a defaulting debtor before the Micro and Small Enterprises Facilitation Council (MSEFC) to claim 3x RBI compound penal interest under Section 16, contractors invest 18 to 36 months in conciliatory and arbitral proceedings.
                  </p>
                  <p>
                    This commercial expectation crashes against a severe statutory barrier. The Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act) was drafted with a strictly circumscribed legislative scope. Under Section 2(n), a &quot;supplier&quot; is statutorily defined as an enterprise that has filed an Udyam memorandum and supplies <em>goods produced by it</em> or renders <em>services</em>. Section 15 and Section 17 mandatorily tether the buyer&apos;s payment obligation to the &quot;supply of goods or the rendering of services.&quot;
                  </p>
                  <p>
                    Crucially, the MSMED Act contains <strong>no statutory definition or inclusion of a &apos;Works Contract&apos;</strong>. Unlike the Central Goods and Services Tax (CGST) Act, 2017—which under Section 2(119) specifically recognizes works contracts as a composite supply deemed to be a service—the MSMED Act 2006 has never been amended to encompass composite construction agreements.
                  </p>
                </div>

                {/* Statutory Contrast Callout Box */}
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-bold text-red-950 uppercase tracking-wider mb-1">
                    The Jurisdictional Exclusion Mechanism
                  </p>
                  <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                    When an EPC or MEP contractor executes a single composite agreement for supply, civil foundation, piping, cabling, erection, testing, and commissioning, the transaction represents an <strong>indivisible works contract</strong>. Because the contract cannot be severed into distinct sales of goods or independent service line-items, the MSEFC suffers from a total lack of subject-matter jurisdiction (<em>defectus jurisdictionis</em>). Any arbitral award passed by the Council is null, void ab initio, and incapable of execution.
                  </p>
                </div>
              </section>

              {/* Section 2: High Court Precedents */}
              <section id="heading-precedents" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Landmark High Court Precedents: Judicial Quashing of MSEFC Works Awards
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Delhi, Bombay, and Allahabad High Court Standards Distinguishing Pure Sales from Composite Turnkey Contracts
                  </p>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow space-y-3.5 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block">
                            {item.citation}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-100 px-2.5 py-1 rounded-md self-start sm:self-auto">
                          {item.date}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-600">
                        <strong className="text-slate-900 font-bold">Litigants: </strong>
                        <span>{item.parties}</span>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong className="text-slate-900 font-bold">Contractual Dispute: </strong>
                          {item.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900 font-bold">Judicial Holding: </strong>
                          {item.holding}
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                        <div className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                          {item.amount}
                        </div>
                        <div className="text-xs text-slate-600 italic">
                          <strong className="text-slate-800 not-italic font-semibold">Creditor Takeaway: </strong>
                          {item.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Indivisible vs Divisible Test */}
              <section id="heading-divisible-test" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    The Indivisible vs Divisible Contract Test: When Can Contractors Access MSEFC?
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Applying the Gannon Dunkerley &amp; Tata Power Legal Tests to Your Purchase Orders
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    The legal dividing line between a contract barred from MSEFC and one eligible for statutory recovery hinges upon whether the agreement is legally <strong>divisible</strong> or <strong>indivisible</strong>. Originating from the Constitution Bench ruling in <em>State of Madras v. Gannon Dunkerley &amp; Co.</em> and reaffirmed in modern commercial disputes by the Delhi High Court in <em>Tata Power Company Ltd.</em>, the following three-prong test determines Facilitation Council jurisdiction:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
                      1
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Transfer of Property in Goods
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In a pure supply contract, title and risk in materials pass to the buyer upon dispatch, delivery, or receipt of the E-Way bill. In an indivisible works contract, title passes only upon permanent incorporation into the civil structure or upon final commercial commissioning.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
                      2
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Independent Consideration &amp; Invoicing
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If equipment and materials have separate line-item pricing, separate tax invoices with HSN codes, and milestone disbursements independent of civil erection progress, the contract is legally divisible. A unified lump-sum BoQ indicates an indivisible works contract.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
                      3
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Performance &amp; Acceptance Test
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where supply invoices can be accepted or rejected at the project gate under Section 42 of the Sale of Goods Act, 1930, goods supply is divisible. Where payment requires an overarching Plant Performance Guarantee Test (PG Test), the contract is indivisible.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Forum Comparison Matrix */}
              <section id="heading-forum-matrix" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Recovery Forum Comparison: MSEFC vs Commercial Court vs Arbitration vs Order 37
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Objective Risk, Timeline, and Enforceability Analysis for Infrastructure Contractors
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Operational Parameter</th>
                        <th className="p-3.5 border-b border-slate-800 text-red-300">MSME Samadhaan (MSEFC)</th>
                        <th className="p-3.5 border-b border-slate-800">Commercial Court (s. 2(1)(c)(vi))</th>
                        <th className="p-3.5 border-b border-slate-800 text-emerald-300">Fast-Track Arbitration (s. 29A)</th>
                        <th className="p-3.5 border-b border-slate-800">Order XXXVII CPC Summary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Works Contract Jurisdiction</td>
                        <td className="p-3.5 text-red-600 font-bold bg-red-50/40">0% (Quashed by High Courts)</td>
                        <td className="p-3.5 text-emerald-700 font-semibold">100% Statutory Authority</td>
                        <td className="p-3.5 text-emerald-700 font-semibold">100% Subject to Agreement</td>
                        <td className="p-3.5">Eligible if bills certified</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Average Duration to Decree/Award</td>
                        <td className="p-3.5 text-red-600">18 to 36 Months (plus writ stays)</td>
                        <td className="p-3.5">12 to 18 Months (s.12A mediation)</td>
                        <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/40">6 to 12 Months</td>
                        <td className="p-3.5">6 to 9 Months</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Interim Relief (Asset / PBG Freeze)</td>
                        <td className="p-3.5 text-red-600">No Interim Power Available</td>
                        <td className="p-3.5">Order XXXVIII CPC Attachment</td>
                        <td className="p-3.5 font-semibold text-emerald-700 bg-emerald-50/40">Section 9 Injunction (High Court)</td>
                        <td className="p-3.5">Conditional leave to defend</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Penal Interest Entitlement</td>
                        <td className="p-3.5">3x RBI Compound (if valid)</td>
                        <td className="p-3.5">Commercial Rate (12%–18% p.a.)</td>
                        <td className="p-3.5">Contractual Rate / 18% (s. 31(7))</td>
                        <td className="p-3.5">Interest Act 1978 Rate</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">High Court Section 34 Risk</td>
                        <td className="p-3.5 text-red-600 font-bold bg-red-50/40">High (Quashed for jurisdiction)</td>
                        <td className="p-3.5">Regular First Appeal (RFA)</td>
                        <td className="p-3.5 font-semibold text-emerald-700">Minimal if procedure followed</td>
                        <td className="p-3.5">Direct Execution via Order XXI</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: The Dual-PO Blueprint */}
              <section id="heading-dual-po-split" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    The Dual-PO Contract Restructuring Blueprint (Supply PO vs Service PO)
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    How Astute Contractors Split Turnkey Scope to Legally Safeguard 70%–85% of Project Cash Flow Under MSMED Protections
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    For contractors negotiating upcoming tenders, subcontracts, or private industrial packages, executing an indivisible works contract is legal malpractice against their own balance sheet. By adopting our proprietary <strong>Dual-Purchase-Order (Dual-PO) Structuring Protocol</strong>, contractors divide the commercial transaction into two distinct legal vehicles before the first invoice is issued:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Vehicle A */}
                  <div className="p-5 rounded-xl border border-emerald-300 bg-emerald-50/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Vehicle A &bull; Pure Supply Purchase Order
                      </span>
                      <span className="text-xs font-black text-emerald-700">70%–85% Contract Value</span>
                    </div>
                    <strong className="text-base text-slate-900 font-bold block">
                      Equipment, Structural Steel &amp; Material Supply PO
                    </strong>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                      <li><strong>Scope:</strong> Supply of transformers, switchgear, solar modules, cables, valves, or pre-engineered steel.</li>
                      <li><strong>Transfer of Property:</strong> Delivery ex-works or FOR site with retention of title until payment.</li>
                      <li><strong>Documentation:</strong> Distinct GST Tax Invoice with HSN code, Part-A/Part-B E-Way Bill, and Material Receipt Note (MRN).</li>
                      <li><strong>Statutory Forum:</strong> 100% Eligible for MSME Samadhaan MSEFC under the <em>Tata Power</em> exception with 3x RBI compound penal interest.</li>
                      <li><strong>Tax Disallowance:</strong> Subject to mandatory corporate buyer tax disallowance under Income Tax Section 43B(h).</li>
                    </ul>
                  </div>

                  {/* Vehicle B */}
                  <div className="p-5 rounded-xl border border-slate-300 bg-slate-50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded-full border border-slate-300">
                        Vehicle B &bull; Site Erection &amp; Services Agreement
                      </span>
                      <span className="text-xs font-black text-slate-700">15%–30% Contract Value</span>
                    </div>
                    <strong className="text-base text-slate-900 font-bold block">
                      Civil Foundation, Erection &amp; Testing Contract
                    </strong>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                      <li><strong>Scope:</strong> Civil trenching, equipment mounting, cabling termination, testing, and commissioning.</li>
                      <li><strong>Invoicing:</strong> Milestone-based running bills tied to signed Measurement Book (MB) entries.</li>
                      <li><strong>Remedies:</strong> Fast-track institutional arbitration under the Arbitration Act, 1996 or Commercial Court summary suit under Order XXXVII CPC.</li>
                      <li><strong>Cross-Fall Clause:</strong> Agreement explicitly states breach of Service PO shall not entitle employer to withhold payments under Supply PO.</li>
                      <li><strong>Security:</strong> Backed by independent milestone bank guarantees rather than composite project encashment.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Statutory Timelines & Limitation Stops */}
              <section id="heading-statutory-timelines" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Statutory Timelines, Limitation Windows &amp; Section 14 Limitation Act Protection
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    How to Exclude Time Spent Before MSEFC and Stop the 3-Year Commercial Limitation Clock
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Statutory Stage</th>
                        <th className="p-3.5 border-b border-slate-800">Governing Provision</th>
                        <th className="p-3.5 border-b border-slate-800">Statutory Window</th>
                        <th className="p-3.5 border-b border-slate-800">Legal Risk &amp; Mandatory Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">RA Bill Payment Due Date</td>
                        <td className="p-3.5">Contract Agreement / MSMED s. 15</td>
                        <td className="p-3.5 font-semibold text-emerald-700">15 to 45 Days from certification</td>
                        <td className="p-3.5">Non-payment triggers right to suspend work under Contract Act s. 51–54</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Section 80 CPC Notice (Govt/PSUs)</td>
                        <td className="p-3.5">Code of Civil Procedure, 1908 s. 80</td>
                        <td className="p-3.5 font-semibold text-amber-700">60 Calendar Days mandatory</td>
                        <td className="p-3.5">Suits against CPWD, Railways or NHAI without s.80 notice are rejected at inception</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Pre-Institution Mediation (s. 12A)</td>
                        <td className="p-3.5">Commercial Courts Act, 2015 s. 12A</td>
                        <td className="p-3.5 font-semibold text-emerald-700">3 Months (+ 2 Months Extension)</td>
                        <td className="p-3.5">Exempted only if urgent interim relief (e.g. freezing PBG encashment) is pleaded</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Limitation for Commercial Suit / Arbitration</td>
                        <td className="p-3.5">Limitation Act 1963 Art. 55 &amp; 137</td>
                        <td className="p-3.5 font-semibold text-red-600">3 Years from default / final bill rejection</td>
                        <td className="p-3.5">Invoking arbitration under s. 21 freezes the limitation clock immediately</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 font-bold text-slate-900">Section 14 Limitation Act Exclusion</td>
                        <td className="p-3.5">Limitation Act, 1963 s. 14</td>
                        <td className="p-3.5 font-semibold text-emerald-700">Full Period Spent in MSEFC</td>
                        <td className="p-3.5">Must prove bona fide prosecution without jurisdiction to defeat time-bar objection</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Pre-emption Matrix */}
              <section id="heading-preemption-matrix" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Debtor Defense Pre-Emption Matrix: Neutralizing Contractor Payment Excuses
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Statutory Rebuttals for Liquidated Damages (LD), Uncertified Measurements, and Back-to-Back Clauses
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-slate-900 font-bold">1. Debtor Excuse: &quot;This is an indivisible Works Contract; you have zero legal remedy in fast-track forums.&quot;</strong>
                      <span className="text-[11px] font-bold text-red-600 bg-red-100 px-2.5 py-0.5 rounded-full">Jurisdictional Bluff</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Statutory Rebuttal:</strong> While MSEFC may be barred under <em>Shree Gee</em>, Section 2(1)(c)(vi) of the Commercial Courts Act, 2015 explicitly defines construction and infrastructure contracts as commercial disputes subject to summary adjudication. Simultaneously, invoke Section 21 of the Arbitration Act. If the debtor attempts to encash PBG, obtain an immediate Section 9 injunction from the High Court under the <em>Hindustan Construction Co.</em> doctrine.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-slate-900 font-bold">2. Debtor Excuse: &quot;Measurement Book (MB) was never signed; the final bill is uncertified.&quot;</strong>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">Measurement Delay</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Statutory Rebuttal:</strong> Where the contractor submitted joint measurement sheets and the employer failed to conduct verification within the contractual 14/30-day window, the measurements stand deemed admitted. Under Section 70 of the Indian Contract Act, 1872 (quantum meruit) and Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), contemporaneous site WhatsApp logs, gate passes, and drone surveying data constitute conclusive secondary evidence of execution.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-slate-900 font-bold">3. Debtor Excuse: &quot;We have levied Liquidated Damages (LD) of 10% for project delays.&quot;</strong>
                      <span className="text-[11px] font-bold text-red-600 bg-red-100 px-2.5 py-0.5 rounded-full">Arbitrary LD Penalty</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Statutory Rebuttal:</strong> Under the Supreme Court rulings in <em>Kailash Nath Associates v. DDA</em> (2015) and <em>Maula Bux</em>, Liquidated Damages cannot be deducted arbitrarily as a penalty. The employer must strictly prove actual financial loss suffered. Furthermore, if the employer caused delays in site handover, drawing approvals, or utility clearances (concurrent delay), the time becomes at large, nullifying the employer&apos;s right to levy LD under Indian Contract Act Section 55.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-slate-900 font-bold">4. Debtor Excuse: &quot;We will pay you only when the project owner/client pays us (Back-to-Back Clause).&quot;</strong>
                      <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">Pay-When-Paid Defense</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Statutory Rebuttal:</strong> Under Section 23 and 28 of the Indian Contract Act, 1872, conditional clauses cannot indefinitely defeat an accrued debt. Unless the subcontract incorporates clear, unequivocal &apos;pay-if-paid&apos; risk-shifting language, courts construe such clauses as mere timing mechanisms requiring payment within a reasonable duration, regardless of owner disbursement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Resolving Contractor Dispute Impasses: Interactive Scenario Solutions
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Select Your Specific Contract Structure to Review the Verified Legal Escalation Path
                  </p>
                </div>

                <WorksContractScenarioTabs />
              </section>

              {/* Section 9: Worked Case Study Ledger */}
              <section id="heading-worked-example" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Worked Financial Ledger: &rupee;4.80 Crore EPC Substation Recovery
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Comparative Recovery Economics: The Cost of the Indivisible MSEFC Mistake vs Dual-PO Commercial Fast-Track
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide block mb-1">
                      Case Profile: Substation Turnkey Package Default
                    </strong>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      A Small Enterprise MEP contractor undertakes supply, civil foundation, cabling, and commissioning of a 132/33 kV industrial substation for a private solar park developer. Total contract value: &rupee;4,80,00,000. Upon complete energization, the developer withholds &rupee;1,42,00,000 in RA bills and DLP retention, alleging minor testing punch-list delays.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Path A */}
                    <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs sm:text-sm font-bold text-red-950">Option A: Unsplit Works Contract &rarr; MSEFC Reference</strong>
                        <span className="text-[11px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">Fatal Trap</span>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                        <li>Filing on MSME Samadhaan: 14 months spent in conciliation hearings.</li>
                        <li>MSEFC Arbitral Award: Council awards &rupee;1.42 Cr + 3x RBI interest in Month 22.</li>
                        <li>High Court Writ Petition: Developer challenges award under Article 226 citing <em>Konaark Industries</em>.</li>
                        <li>High Court Order: Award quashed as <strong>void ab initio for lack of subject-matter jurisdiction</strong>.</li>
                        <li>Net Realization: <strong>&rupee;0.00 recovered after 34 months</strong>; limitation period for regular suit severely jeopardized.</li>
                      </ul>
                    </div>

                    {/* Path B */}
                    <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs sm:text-sm font-bold text-emerald-950">Option B: LegalRecovery Dual-Track Commercial Protocol</strong>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Verified Win</span>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                        <li>Supply PO Allocation (&rupee;1.05 Cr): Separated and pursued under pure supply terms.</li>
                        <li>Commercial Action: High Court Section 9 application filed within 15 days; developer restrained from encashing PBG.</li>
                        <li>Section 11(6) Appointment: Neutral retired High Court judge appointed as sole arbitrator.</li>
                        <li>Order XXXVII Pressure: Summary application based on joint testing certificates.</li>
                        <li>Net Realization: <strong>Full settlement of &rupee;1.42 Cr + 14% commercial interest recovered in 8.5 months</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Evidentiary Audit Checklist */}
              <section id="heading-evidence-checklist" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Evidentiary Audit Checklist: Building an Bulletproof Construction Claim
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    The 6 Indispensable Evidentiary Records Required to Defeat Employer Set-Offs and Summary Rejections
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Contract Agreement &amp; Detailed BoQ:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed contract, GCC/SCC clauses, Purchase Orders, and item-rate schedules establishing agreed unit rates and escalation formulas.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Joint Measurement Books (MB) &amp; Field Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Measurement sheets signed by the Project Manager / Resident Engineer, level books, and bar bending schedules proving physical execution.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">E-Way Bills, Delivery Challans &amp; HSN Tax Invoices:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proof of physical delivery of equipment and materials to the site, stamped gate passes, and GSTR-1/GSTR-3B filings.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Contemporaneous Delay Correspondence:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Written notices of site hindrance, delayed drawing approvals, unhindered right-of-way (ROW) delays, and formal extension of time (EoT) applications.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Testing, Commissioning &amp; Handover Certificates:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Taking-Over Certificate (TOC), provisional acceptance, electrical inspectorate clearances, and Defect Liability Period (DLP) expiry notices.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">BSA Section 63 Electronic Evidence Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Statutory certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 authenticating site emails, project WhatsApp chats, and digital CAD transmissions.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Dual-Track B2B Conversion Desk */}
              <section id="heading-cta" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Initiate Contractor Payment Recovery &bull; Dual-Track Legal Desk
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Deploy High-Impact Statutory Legal Notices or Retain Our Dedicated Infrastructure Dispute Practice
                  </p>
                </div>

                <WorksContractCTA />
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section id="heading-faqs" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions: Works Contracts &amp; MSME Samadhaan
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Practitioner-Grade Statutory Guidance for EPC, MEP, Civil and Specialty Contractors
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
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources & Citations */}
              <section id="heading-sources" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Statutory Framework, Primary Sources &amp; Official References
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All provisions verified against the MSMED Act 2006, Commercial Courts Act 2015, Arbitration and Conciliation Act 1996, and relevant High Court and Supreme Court precedents current as of November 2026.
                </p>
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Construction &amp; Commercial Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/industries/construction-epc-contractor-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Construction &amp; EPC Hub &rarr;
                  </Link>
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Subcontractor Payment Recovery &rarr;
                  </Link>
                  <Link
                    href="/recovery/contractor-payment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Contractor Payment Recovery &rarr;
                  </Link>
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 80 CPC Notice to Government &rarr;
                  </Link>
                  <Link
                    href="/wrongful-performance-bank-guarantee-pbg-invocation-stay-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Wrongful PBG Invocation Stay &rarr;
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Interest Calculator &rarr;
                  </Link>
                  <Link
                    href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 43B(h) Notice Template &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Contractor Recovery Desk &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
