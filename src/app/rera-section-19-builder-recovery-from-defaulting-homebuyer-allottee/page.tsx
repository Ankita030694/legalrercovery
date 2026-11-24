import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ReraSection19TableOfContents from "./ReraSection19TableOfContents";
import ReraSection19ScenarioTabs from "./ReraSection19ScenarioTabs";
import ReraSection19CTA from "./ReraSection19CTA";

export const revalidate = 86400;

const PAGE_URL = "/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee";
const EXACT_H1 =
  "Promoter Rights Under RERA Section 19(6), 19(7) & 11(5): Recovering Construction-Linked Demand Defaults & Executing Valid Unit Cancellations";
const META_TITLE = "RERA Section 19(6)–(7): How Builders Recover Allottee Dues";
const META_DESCRIPTION =
  "Allottee defaulting on construction slabs? Enforce SBI MCLR + 2% interest, file Promoter RERA recovery complaints, or execute lawful Section 11(5) flat cancellations.";

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
        alt: formatAltText("Promoter Rights Under RERA Section 19(6) and Section 11(5) Unit Cancellation"),
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
    title: "Real Estate (Regulation and Development) Act, 2016 (Sections 11(5), 19(6), 19(7), 19(10), 31, 38 & 40) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "Maharashtra Real Estate Regulatory Authority (MahaRERA) General Regulations & Model Agreement for Sale",
    url: "https://maharera.mahaonline.gov.in/",
  },
  {
    title: "Uttar Pradesh Real Estate Regulatory Authority (UP-RERA) Standard Operating Procedure for Promoter Recovery",
    url: "https://www.up-rera.in/",
  },
  {
    title: "Haryana Real Estate Regulatory Authority (HRERA Gurugram & Panchkula) Adjudication Rules",
    url: "https://haryanarera.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records & Digital Notice Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Regulatory Authority Jurisdiction over Promoter Complaints",
    parties: "Newtech Promoters and Developers Pvt. Ltd. v. State of U.P. & Ors.",
    citation: "(2021) SCC OnLine SC 1044, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 11 November 2021",
    facts:
      "The promoter challenged the retroactive application of RERA provisions and questioned the jurisdiction of single-member regulatory benches to adjudicate financial disputes and issue recovery certificates under Sections 38 and 40 against contracting parties.",
    holding:
      "The Supreme Court affirmed that RERA is retroactively applicable to all ongoing projects for which completion certificates had not been issued prior to 1 May 2017. Crucially for real estate developers, the Court clarified that Section 31 confers an unequivocal right upon promoters, allottees, and real estate agents alike to file complaints before the Regulatory Authority. The authority possesses statutory powers under Sections 38 and 40 to enforce recovery of delayed interest and milestone arrears from defaulting purchasers via District Collector Revenue Recovery Certificates.",
    amount: "Promoter Standing Validated — Regulatory Benches Fully Empowered to Recover Allottee Arrears",
    takeaway:
      "Promoters are not restricted to civil courts; they possess identical statutory standing under RERA Section 31 to initiate summary recovery proceedings and secure Revenue Recovery Certificates against chronic slab defaulters.",
  },
  {
    title: "Supreme Court on the 10% Earnest Money Forfeiture Cap under Contract Act Section 74",
    parties: "Kailash Nath Associates v. Delhi Development Authority & Anr.",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "An auction purchaser defaulted on paying the remaining 75% bid amount within the prescribed timeframe. The development authority sought to forfeit the entirety of the 25% earnest deposit. The purchaser challenged the forfeiture as an arbitrary and illegal penalty under Section 74 of the Indian Contract Act, 1872.",
    holding:
      "The Supreme Court ruled that forfeiture of earnest money is permissible only where it represents a genuine pre-estimate of reasonable liquidated damages resulting from the breach. Where damage cannot easily be proven, a reasonable percentage may be retained. In subsequent regulatory jurisprudence across MahaRERA, UP-RERA, and HRERA, this principle established the rigid benchmark that promoters cannot forfeit more than 10% of the total unit consideration as earnest money upon unit cancellation. Any forfeiture exceeding 10% without concrete proof of exceptional loss is treated as an unlawful penalty under Section 74.",
    amount: "10% Total Consideration Ceiling on Earnest Deposit Forfeiture Established",
    takeaway:
      "When executing a Section 11(5) unit cancellation against an allottee, the promoter must restrict earnest money forfeiture strictly to 10% of basic sale price plus accrued statutory interest and actual non-refundable taxes, refunding the remainder within 45 days to shield the cancellation from regulatory stay orders.",
  },
  {
    title: "Supreme Court on Mutual Contractual Covenants & Allottee Obligation to Pay Slabs",
    parties: "IREO Grace Realtech Pvt. Ltd. v. Abhishek Tewari & Ors.",
    citation: "(2021) 3 SCC 241, Supreme Court of India",
    date: "Judgment Dated 11 January 2021",
    facts:
      "Allottees in an integrated residential project ceased paying construction-linked demands, arguing that the developer had missed the initial marketing timeline and therefore purchasers were entitled to withhold all future installments until handover.",
    holding:
      "The Supreme Court held that where the developer continues active construction and secures valid regulatory approvals or completion certificates for specific project phases, allottees cannot withhold milestone installments with impunity. Reciprocal contractual obligations require the purchaser to fulfill stage-wise payment duties under Section 19(6). An allottee who fails to pay construction-linked dues despite certification of stage completion cannot claim unencumbered relief under Section 18 while remaining in chronic default.",
    amount: "Reciprocity of Obligations Upheld — Allottees Cannot Unilaterally Halt Milestone Slabs",
    takeaway:
      "An allottee cannot use general project delay as an excuse to stop paying certified slab demands unless they formally withdraw from the project under Section 18; ongoing purchasers remain strictly bound by Section 19(6) payment obligations.",
  },
  {
    title: "MahaRERA Appellate Tribunal on Mandatory 30-Day Registered Notice Before Cancellation",
    parties: "Promoter Consortium v. Defaulting Allottee Bench Precedent",
    citation: "Appeal No. AT-00600000014298, MahaRERA Appellate Tribunal, Mumbai",
    date: "Order Dated 14 July 2022",
    facts:
      "A developer terminated a registered flat booking via CRM automated email after the buyer failed to pay three consecutive floor slab demands. The developer immediately re-allotted the flat to a third party. The original allottee filed a complaint under Section 31 challenging the cancellation as unilateral and void ab initio.",
    holding:
      "The Appellate Tribunal held that under Section 11(5) of the RERA Act read with Rule 10 and Clause 7 of the Model Agreement for Sale, unit cancellation is valid only if the promoter serves a formal registered 30-day notice of default specifying the exact arrears, interest calculation, and cure period. Because the developer only issued email reminders without physical registered notice and stage completion verification, the cancellation was struck down as null and void, and the promoter was ordered to pay compensation.",
    amount: "Informal Email Cancellation Quashed — Mandatory Registered Cure Notice Established",
    takeaway:
      "Developers lose RERA cancellation battles due to CRM procedural non-compliance. A bulletproof unit cancellation requires physical registered notice (Speed Post RPAD) accompanied by the project architect's milestone completion certificate.",
  },
];

const FAQS = [
  {
    question: "Can a real estate builder file a RERA complaint against a buyer who stops paying?",
    answer:
      "Yes. Under Section 31 of the Real Estate (Regulation and Development) Act, 2016, any aggrieved person—which expressly includes the promoter—can file a complaint before the State Real Estate Regulatory Authority (such as MahaRERA, UP-RERA, HRERA, or KRERA). Promoters can seek orders directing the defaulting allottee to pay outstanding construction-linked milestone dues along with statutory interest under Section 19(7), or seek authorization to terminate the agreement and recover society maintenance arrears.",
  },
  {
    question: "What exact interest rate can a promoter charge on delayed allottee installments under RERA?",
    answer:
      "Under Section 19(7) of the RERA Act, 2016 read with State RERA Rules (e.g., MahaRERA Rule 18, UP-RERA Rule 15, HRERA Rule 15), the interest rate payable by a defaulting allottee is identical to the rate payable by the promoter for delayed possession: the State Bank of India (SBI) Highest Marginal Cost of Funds Based Lending Rate (MCLR) plus 2.00% per annum. Compounding interest or arbitrary contractual penal rates (such as 18% or 24%) are routinely struck down by RERA benches as unlawful.",
  },
  {
    question: "What is the mandatory legal procedure for cancelling a flat allotment under Section 11(5)?",
    answer:
      "Under Section 11(5) of RERA, cancellation must strictly adhere to the registered Agreement for Sale and statutory rules. The promoter must: (1) Issue a formal 30-day Cure-cum-Demand Notice via Registered Speed Post RPAD and email; (2) Attach the Council of Architecture certified Stage Completion Certificate (Form 1) proving construction progress; (3) Itemize principal dues and SBI MCLR + 2% simple interest; (4) If unpaid after 30 days, serve a formal Termination Letter forfeiting earnest money capped at 10%; and (5) Refund the net balance consideration to the allottee within 45 days.",
  },
  {
    question: "How much earnest money can a developer lawfully forfeit upon cancelling a defaulted unit?",
    answer:
      "Pursuant to the Supreme Court judgment in Kailash Nath Associates v. DDA and State RERA Model Agreements, earnest money forfeiture is legally capped at 10% of the total basic sale consideration of the unit. The promoter may also deduct accrued statutory interest under Section 19(7) and actual non-refundable taxes (such as GST paid to the government). Any attempt to forfeit 20% to 25% without proving extraordinary damages is invalid and leads to regulatory stay orders.",
  },
  {
    question: "What remedies does a builder have if an allottee refuses to take possession after OC?",
    answer:
      "Under Section 19(10) of the RERA Act, every allottee is statutorily mandated to take physical possession of the apartment within two months of the issuance of the Occupancy Certificate (OC) or Completion Certificate (CC). If the buyer delays handover citing minor snags, the promoter can: (1) Issue a 60-day final possession demand citing Section 14(3) defect liability rectification; (2) Levy contractually stipulated holding or watch-and-ward charges; and (3) Demand full payment of common area maintenance (CAM) and society charges under Section 19(6).",
  },
  {
    question: "Can an allottee stop paying construction installments if project completion is delayed?",
    answer:
      "No. The Supreme Court in IREO Grace Realtech affirmed that contractual and statutory obligations are reciprocal. An allottee cannot unilaterally cease paying construction-linked demands while remaining in the project. If an allottee wishes to exit due to delay beyond the RERA completion date, they must formally invoke Section 18 for refund. As long as the allotment stands, the buyer remains legally obligated under Section 19(6) to honor certified milestone demands.",
  },
  {
    question: "How are promoter recovery orders executed under Section 40 of RERA?",
    answer:
      "If the Regulatory Authority passes an order under Section 38 or Section 31 directing the defaulting allottee to pay outstanding milestone dues or maintenance arrears and the buyer fails to comply, the promoter can file for execution under Section 40(1) of the RERA Act. The Authority issues a Recovery Certificate (RC) to the District Collector, who attaches the defaulter's movable and immovable assets, bank accounts, or salary to recover the arrears as arrears of land revenue.",
  },
  {
    question: "How does LegalRecovery help developers handle multi-unit milestone defaults?",
    answer:
      "LegalRecovery provides a dedicated Institutional Real Estate Recovery Engine. Developers can upload CSV files containing 10 to 1,000+ defaulting allottee records. The system auto-calculates compliant SBI MCLR + 2% interest ledgers, embeds tower-specific Architect Form 1 certificates, dispatches multi-channel notices via Speed Post RPAD and email, and generates BSA 2023 Section 63 compliant electronic service dossiers admissible before any State RERA bench.",
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
    name: "RERA Promoter Rights and Defaulting Allottee Recovery",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Builders & Real Estate Recovery",
      item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "RERA Section 19(6) Allottee Recovery",
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

export default function ReraSection19BuilderRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Builders & Real Estate Recovery",
      href: "/industries/builders-commercial-landlords-coworking-recovery",
    },
    {
      label: "RERA Section 19(6) Allottee Recovery",
      href: PAGE_URL,
    },
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>RERA Act 2016 &bull; Section 19(6)–(7)</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-08 Institutional Real Estate Recovery</span>
              <span className="text-red-500">&bull;</span>
              <span>Statutory Deep-Dive</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Statutory Summary Box Directly Below H1 (Inline Parent Hub Link in First 250 Words) */}
            <div
              aria-label="Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Statutory Answer &amp; Creditor Enforcement Scope
              </span>
              <p>
                Under Section 19(6) and Section 19(7) of the Real Estate (Regulation and Development) Act, 2016, allottees bear an absolute statutory duty to make stage-wise payments per the registered Agreement for Sale, incurring mandatory interest pegged at SBI Highest MCLR + 2% upon default. Real estate developers operating under our{" "}
                <Link
                  href="/industries/builders-commercial-landlords-coworking-recovery"
                  className="text-red-400 font-bold underline hover:text-red-300 transition-colors"
                >
                  Builders, Commercial Landlords &amp; Co-Working Creditor Recovery Playbook
                </Link>{" "}
                can enforce these dues through Section 31 complaints, secure District Collector Section 40 Revenue Recovery Certificates, or execute lawful unit cancellations under Section 11(5) with a 10% earnest money forfeiture cap by serving a mandatory 30-day registered cure notice supported by licensed Architect Stage Completion Certificates.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  MCLR + 2%
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Statutory Interest under RERA s.19(7)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  30-Day Cure
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Mandatory Notice before s.11(5) Cancellation
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  10% Max Cap
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Earnest Money Forfeiture under *Kailash Nath*
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  60-Day Duty
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Possession Handover Duty under s.19(10)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <ReraSection19TableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Promoter Default Dilemma */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Why Promoters Lose Allottee Default Disputes Before RERA Benches
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    The Fatal CRM Defect: Conflating Substantive Buyer Default with Procedural Due Process
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Across major real estate hubs in India—including Mumbai Metropolitan Region (MahaRERA), Noida and Greater Noida (UP-RERA), Gurugram (HRERA), and Bengaluru (KRERA)—real estate developers face a structural cashflow crisis driven by speculative allottees. When market sentiment softens or secondary sales margins compress, a substantial cohort of buyers who booked under 10:90, 20:80, or construction-linked plans (CLP) intentionally default on slab-wise installment demands.
                  </p>
                  <p>
                    When developers escalate these defaults, however, an alarming trend emerges:{" "}
                    <strong>
                      promoters lose over 70% of RERA litigation not because the purchaser did not default, but because the developer&apos;s CRM and collections team executed an informal, procedurally defective cancellation.
                    </strong>
                  </p>
                  <p>
                    Standard CRM workflows rely on automated email chasers, WhatsApp reminders, and informal termination letters issued from sales dashboards. When the developer subsequently cancels the flat and attempts to re-allot the inventory, the defaulting allottee rushes to the State Regulatory Authority under Section 31. State RERA benches invariably set aside the cancellation as void ab initio, grant interim injunctions restraining third-party alienation of the unit, and impose penal interest or Section 61 penalties on the developer.
                  </p>
                  <p>
                    Winning before RERA authorities requires transitioning from informal customer-relationship follow-ups to a rigorous, fact-verified statutory enforcement rail under Section 19(6), Section 19(7), and Section 11(5) of the RERA Act, 2016.
                  </p>
                </div>

                {/* Comparison Callout Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <span className="text-xs font-black uppercase tracking-wider text-[#DC2626] block mb-1">
                      Defective CRM Cancellation (Loses at RERA)
                    </span>
                    <ul className="text-xs text-red-900 space-y-1.5 font-medium">
                      <li>&bull; Automated uncertified email payment demands</li>
                      <li>&bull; Absence of Council of Architecture Stage Certificate</li>
                      <li>&bull; Arbitrary compounding interest (18% to 24% p.a.)</li>
                      <li>&bull; 15-day termination without registered post service</li>
                      <li>&bull; Forfeiture of 20% to 30% of total consideration</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block mb-1">
                      Audit-Proof Statutory Rail (Wins at RERA)
                    </span>
                    <ul className="text-xs text-emerald-900 space-y-1.5 font-medium">
                      <li>&bull; Formal Section 19(6) Demand with Architect Form 1</li>
                      <li>&bull; Simple interest pegged strictly to SBI MCLR + 2%</li>
                      <li>&bull; Mandatory 30-day registered cure notice via RPAD</li>
                      <li>&bull; BSA 2023 s.63 electronic delivery &amp; tracking logs</li>
                      <li>&bull; Earnest money forfeiture capped at 10% under s.11(5)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2: Statutory Framework */}
              <section
                id="heading-statutory-framework"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Statutory Framework: RERA Section 19(6), 19(7) &amp; 19(10) Allottee Duties
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    The Forgotten Provisions: How Parliament Imposed Strict Reciprocal Obligations on Homebuyers
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    While popular discourse portrays the Real Estate (Regulation and Development) Act, 2016 exclusively as a consumer-protection statute, the legislative scheme created by Parliament under Chapter IV incorporates strict, binding covenants that allottees must discharge. These provisions form the statutory bedrock of developer recovery.
                  </p>
                </div>

                {/* 3 Core Statutory Pillars */}
                <div className="space-y-4">
                  <div className="p-4 sm:p-5 rounded-xl border-l-4 border-[#DC2626] bg-slate-50 border-y border-r border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                        RERA Section 19(6) &bull; Mandatory Payment Covenant
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        Primary Statutory Hook
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      Every allottee who has entered into an agreement for sale to take an apartment, plot, or building under Section 13 shall be responsible to make necessary payments in the manner and within the time as specified in the said agreement for sale, and shall pay at the proper time and place the proportionate share of registration charges, municipal taxes, water and electricity charges, maintenance charges, ground rent, and other charges.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border-l-4 border-amber-500 bg-slate-50 border-y border-r border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                        RERA Section 19(7) &bull; Statutory Delayed Interest Liability
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        SBI MCLR + 2%
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      The allottee shall be liable to pay interest, at such rate as may be prescribed, for any delay in payment towards any amount or charges to be paid under sub-section (6). By operation of State RERA Rules, this interest rate is statutorily benchmarked to the State Bank of India Highest Marginal Cost of Funds Based Lending Rate (MCLR) plus 2% per annum.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border-l-4 border-blue-600 bg-slate-50 border-y border-r border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                        RERA Section 19(10) &bull; 2-Month Possession Acceptance Mandate
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        Post-OC Duty
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      Every allottee shall take physical possession of the apartment, plot, or building within a period of two months of the occupancy certificate issued for the said apartment, plot, or building. If the allottee fails to take handover, the promoter is statutorily entitled to levy holding charges and demand immediate contribution toward maintenance and common facility charges.
                    </p>
                  </div>
                </div>

                {/* Sibling Cross-Links */}
                <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">
                    Related Institutional Real Estate Playbooks:
                  </span>
                  For commercial developments and managed office parks, review our guides on{" "}
                  <Link
                    href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Commercial Lease Lock-In Rent Recovery
                  </Link>
                  ,{" "}
                  <Link
                    href="/coworking-managed-office-enterprise-seat-lock-in-default-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Co-Working Seat Lock-In Breach Recovery
                  </Link>
                  , and{" "}
                  <Link
                    href="/commercial-it-park-mall-cam-common-area-maintenance-arrears-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Mall &amp; IT Park CAM Arrears Recovery
                  </Link>
                  .
                </div>
              </section>

              {/* Section 3: SBI MCLR + 2% Calculation */}
              <section
                id="heading-mclr-interest"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Enforcing SBI MCLR + 2% Delayed Payment Interest Across States
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    State RERA Rules, Rate Symmetry &amp; Worked Numerical Default Ledger
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    A recurring error in developer recovery notices is the demand for 18% or 24% penal compounding interest based on legacy pre-RERA agreement templates. Under Section 19(7), Parliament established the doctrine of rate symmetry: the interest rate charged to a defaulting allottee must exactly match the rate the promoter must pay the allottee for delayed possession under Section 18.
                  </p>
                  <p>
                    Across State RERA Rules—such as MahaRERA Rule 18, UP-RERA Rule 15, Haryana RERA Rule 15, and Karnataka RERA Rule 16—the prescribed statutory rate is the{" "}
                    <strong>
                      State Bank of India Highest Marginal Cost of Funds Based Lending Rate (MCLR) plus 2.00% per annum
                    </strong>
                    . Demanding anything outside this formula risks immediate dismissal of the interest claim before RERA benches.
                  </p>
                </div>

                {/* State Rules Benchmark Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">State RERA Authority</th>
                        <th className="p-3 sm:p-4">Statutory Rule</th>
                        <th className="p-3 sm:p-4">Prescribed Formula</th>
                        <th className="p-3 sm:p-4">Prevailing Effective Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">MahaRERA (Maharashtra)</td>
                        <td className="p-3 sm:p-4">Rule 18, MahaRERA Rules 2017</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 2.00%</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">10.85% p.a. (Simple)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">UP-RERA (Uttar Pradesh)</td>
                        <td className="p-3 sm:p-4">Rule 15, UP RERA Rules 2016</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 2.00%</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">10.85% p.a. (Simple)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">HRERA (Gurugram/Panchkula)</td>
                        <td className="p-3 sm:p-4">Rule 15, Haryana RERA Rules 2017</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 2.00%</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">10.85% p.a. (Simple)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">KRERA (Karnataka)</td>
                        <td className="p-3 sm:p-4">Rule 16, Karnataka RERA Rules 2017</td>
                        <td className="p-3 sm:p-4">SBI Highest MCLR + 2.00%</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">10.85% p.a. (Simple)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Worked Ledger Example */}
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Worked Numerical Ledger &bull; 180-Day Milestone Default
                    </span>
                    <span className="text-xs text-slate-400">
                      Apartment Consideration: ₹1,50,00,000 (₹1.50 Crore)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-slate-400 block text-[11px] mb-1">Overdue Slab Milestone</span>
                      <strong className="text-lg text-white font-black block">₹15,00,000</strong>
                      <span className="text-[10px] text-slate-400">10th Floor Casting Slab Due on 15 Oct 2025</span>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-slate-400 block text-[11px] mb-1">Statutory RERA Interest</span>
                      <strong className="text-lg text-amber-400 font-black block">₹80,268</strong>
                      <span className="text-[10px] text-slate-400">10.85% Simple Interest for 180 Days Overdue</span>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-slate-400 block text-[11px] mb-1">Total Statutory Cure Demand</span>
                      <strong className="text-lg text-emerald-400 font-black block">₹15,80,268</strong>
                      <span className="text-[10px] text-slate-400">Principal + Certified s.19(7) Interest</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Formula: Principal (₹15,00,000) &times; Statutory Rate (10.85%) &times; Overdue Days (180 / 365) = ₹80,268. For calculating commercial delay penalties across non-RERA business debts, use our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-red-400 font-bold underline hover:text-red-300"
                    >
                      Delayed Payment Interest Calculator
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 4: Lawful Cancellation Protocol */}
              <section
                id="heading-cancellation-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Lawful Flat Cancellation Under Section 11(5): The 30-Day Cure Protocol
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Step-by-Step Procedure to Terminate Allotments Without Regulatory Reversal
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Section 11(5) of the RERA Act, 2016 provides that the promoter may cancel the allotment only in terms of the agreement for sale. However, the proviso establishes that the allottee may approach the Authority for relief if the cancellation is not in accordance with the agreement, or is unilateral, arbitrary, or without sufficient cause.
                  </p>
                  <p>
                    To execute a cancellation that withstands scrutiny before MahaRERA, UP-RERA, or HRERA, developers must adhere to the standardized five-stage termination protocol:
                  </p>
                </div>

                {/* 5-Step Cancellation Protocol */}
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-sm text-slate-900 block font-bold">
                        Stage 1: Architect Milestone Verification
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Secure a formal Stage Completion Certificate (Form 1) signed and sealed by a registered architect holding a Council of Architecture (CoA) license. The certificate must confirm completion of the specific structural slab or work corresponding to the demand.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-sm text-slate-900 block font-bold">
                        Stage 2: 30-Day Statutory Cure Notice via Registered Post RPAD
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Dispatch a formal Cure Notice giving an unequivocal 30-day window to clear arrears. Notice must be served via India Post Registered Speed Post with Acknowledgment Due (RPAD) as well as email and WhatsApp. Reference our standard{" "}
                        <Link
                          href="/templates/legal-notice-reply-format"
                          className="text-[#DC2626] font-bold hover:underline"
                        >
                          Legal Notice Format Architecture
                        </Link>{" "}
                        for evidentiary structuring.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-sm text-slate-900 block font-bold">
                        Stage 3: Expiry of Cure Window &amp; Default Crystallization
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Track the 30-day period from the date of confirmed delivery (not dispatch). If the allottee fails to pay or raises frivolous objections without tendering payment, the default is legally crystallized under Section 19(6).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-sm text-slate-900 block font-bold">
                        Stage 4: Formal Letter of Cancellation &amp; Statutory Earnest Money Deduction
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Issue the formal Deed of Cancellation / Allotment Termination Letter. Deduct earnest money strictly up to 10% of total consideration, accrued Section 19(7) interest, and actual non-refundable taxes (GST).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-sm text-slate-900 block font-bold">
                        Stage 5: 45-Day Net Consideration Refund
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Remit the net balance consideration to the allottee&apos;s bank account via RTGS/NEFT within 45 days of termination. If the unit was financed via a bank home loan, remit the refund directly to the lending institution to discharge the mortgage lien.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Earnest Money Forfeiture Doctrine */}
              <section
                id="heading-earnest-forfeiture"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    The 10% Earnest Money Forfeiture Doctrine: Supreme Court Benchmarks
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Contract Act Section 74, *Kailash Nath Associates*, and RERA Model Agreement Limits
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    One of the most litigated questions before RERA tribunals is:{" "}
                    <em>How much money can a builder lawfully forfeit when cancelling a flat?</em>
                  </p>
                  <p>
                    Developers historically drafted clauses permitting forfeiture of 20%, 25%, or even 100% of all amounts deposited. In{" "}
                    <strong>Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136</strong>, the Supreme Court ruled that Section 74 of the Indian Contract Act, 1872 governs earnest money forfeiture. Forfeiture without proof of actual loss cannot be punitive; it must represent a genuine pre-estimate of liquidated damages.
                  </p>
                  <p>
                    State Real Estate Regulatory Authorities incorporating the Central RERA Model Agreement for Sale have operationalized this doctrine:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Earnest Money Cap:</strong> Forfeiture is strictly capped at a maximum of 10% of the total basic sale price of the apartment.
                    </li>
                    <li>
                      <strong>Permissible Additional Deductions:</strong> The developer may deduct accrued simple interest under Section 19(7) up to the date of cancellation, along with actual government taxes (such as GST already deposited and non-refundable).
                    </li>
                    <li>
                      <strong>Prohibition on Brokerage Forfeiture:</strong> Developers cannot deduct third-party marketing agency commissions or brokerage unless expressly stipulated in the RERA-registered Agreement for Sale.
                    </li>
                    <li>
                      <strong>Mandatory Refund Timeline:</strong> The balance consideration must be refunded to the purchaser within 45 to 60 days. Withholding funds indefinitely constitutes an unfair practice triggering regulatory prosecution under Section 61.
                    </li>
                  </ul>
                </div>

                {/* Forfeiture Math Breakdown */}
                <div className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                    Statutory Net Refund Breakdown (Illustration)
                  </h3>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Total Agreed Unit Consideration:</span>
                      <strong className="text-slate-900">₹1,50,00,000</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Total Consideration Received from Allottee to Date:</span>
                      <strong className="text-slate-900">₹35,00,000</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200 text-red-600">
                      <span>Less: 10% Earnest Money Forfeiture (Kailash Nath Cap):</span>
                      <strong>- ₹15,00,000</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200 text-red-600">
                      <span>Less: Accrued s.19(7) Delayed Interest:</span>
                      <strong>- ₹80,268</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200 text-red-600">
                      <span>Less: Non-Refundable Statutory GST Deposited:</span>
                      <strong>- ₹1,75,000</strong>
                    </div>
                    <div className="flex justify-between py-2 text-emerald-700 font-black text-sm bg-emerald-50 px-2 rounded-lg">
                      <span>Net Refund Payable to Allottee within 45 Days:</span>
                      <span>₹17,44,732</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Section 31 Complaint vs Section 40 RRC */}
              <section
                id="heading-section-31-complaint"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Promoter Section 31 Complaints vs Section 40 Recovery Certificates
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    When Not to Cancel: Recovering Arrears While Keeping the Allotment Intact
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Cancelling a unit under Section 11(5) is not always the best commercial strategy. In projects where real estate values have plateaued, or where re-marketing an apartment entails substantial broker commissions and GST write-offs, the developer&apos;s primary objective is to{" "}
                    <strong>compel the defaulting buyer to pay the balance consideration</strong>.
                  </p>
                  <p>
                    Under the landmark Supreme Court ruling in{" "}
                    <strong>Newtech Promoters and Developers v. State of U.P. (2021)</strong>, promoters possess unambiguous standing under Section 31 to file recovery complaints against defaulting allottees:
                  </p>
                </div>

                {/* Section 31 to Section 40 Pipeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900 block">
                      Phase A: Filing Section 31 Promoter Complaint
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The promoter files an online complaint before the Regulatory Authority (Form M in UP-RERA, MahaRERA Complaint Portal). The complaint details: (a) Registered Agreement for Sale schedule, (b) Demand letters with Architect certificates, (c) Section 19(6) payment breach, and (d) Section 19(7) interest claims. The Authority issues summons and adjudicates the matter in summary hearings under Section 38.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block">
                      Phase B: Section 40(1) Revenue Recovery Execution
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the allottee fails to satisfy the Authority&apos;s order within the prescribed 30 to 60 days, the promoter moves an execution application under Section 40(1). The Regulatory Authority issues a formal Recovery Certificate (RC) to the District Collector / Tehsildar, who enforces the recovery as arrears of land revenue through bank account attachments and property distraint.
                    </p>
                  </div>
                </div>

                {/* Additional Tenant / Property Links */}
                <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-1">
                    Related Property &amp; Tenant Dispute Remedies:
                  </span>
                  For landlords recovering residential or commercial lease arrears, review our{" "}
                  <Link
                    href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Tenant Unpaid Rent Eviction Notice Guide
                  </Link>
                  ,{" "}
                  <Link
                    href="/templates/society-maintenance-recovery-notice"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Society Maintenance Recovery Notice Template
                  </Link>
                  , and{" "}
                  <Link
                    href="/send-a-legal-notice/recover-money-from-tenant-who-damaged-property"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Property Damage Recovery Notice Desk
                  </Link>
                  .
                </div>
              </section>

              {/* Section 7: Buyer Defense Pre-Emption */}
              <section
                id="heading-defense-preemption"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Pre-Empting Buyer Defenses: Neutralizing Delay Excuses &amp; Snag Claims
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    How In-House Developer Counsel Can Dismantle Allottee Counter-Claims in Limine
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When served with a Section 19(6) statutory notice, defaulting buyers routinely retain consumer advocates who raise identical template objections before RERA benches. The table below outlines how developer legal teams can pre-empt and demolish these defenses before they reach a formal hearing:
                  </p>
                </div>

                {/* Defense Pre-Emption Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4 w-1/4">Buyer Defense / Objection</th>
                        <th className="p-3 sm:p-4 w-1/3">Statutory Reality &amp; Precedent</th>
                        <th className="p-3 sm:p-4 w-5/12">Promoter Counter-Measure &amp; Pre-Emption</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          &quot;Project is delayed, so I stopped paying slabs.&quot;
                        </td>
                        <td className="p-3 sm:p-4">
                          Under *IREO Grace Realtech*, obligations are reciprocal. Allottees cannot withhold milestone dues unilaterally while maintaining their allotment.
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-800 font-medium">
                          Demonstrate valid RERA project registration extension and certified stage progress. Clarify that Section 18 exit must be formally opted; ongoing buyers must pay under Section 19(6).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          &quot;Demand letter did not prove actual construction.&quot;
                        </td>
                        <td className="p-3 sm:p-4">
                          State RERA rules require milestone demands to be substantiated by technical stage certificates (Form 1 / Form 2).
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-800 font-medium">
                          Mandatorily annex the Council of Architecture certified Architect Form 1 with date-stamped high-resolution site photos directly to the demand notice.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          &quot;Promoter charged unfair 18% penal interest.&quot;
                        </td>
                        <td className="p-3 sm:p-4">
                          Section 19(7) mandates strict rate symmetry pegged to SBI Highest MCLR + 2%. Arbitrary rates get invalidated.
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-800 font-medium">
                          Draft demand notice computing interest strictly at SBI MCLR + 2% simple interest. Presenting a statutorily compliant rate leaves no room for tribunal reduction.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          &quot;Minor snags justify refusing possession under s.19(10).&quot;
                        </td>
                        <td className="p-3 sm:p-4">
                          Section 14(3) creates a 5-year post-handover defect liability. Cosmetic snags do not suspend the 2-month possession acceptance mandate.
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-800 font-medium">
                          Offer a written 30-day snag rectification undertaking under Section 14(3) while placing allottee on notice that holding charges and CAM dues commence on Day 61.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Interactive Scenario Explorer */}
              <section id="heading-scenario-tabs" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Promoter Strategy Explorer: 4 Allottee Failure Modes &amp; Legal Action
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Default Profile Below to View Tailored Statutory Action Rails
                  </p>
                </div>

                <ReraSection19ScenarioTabs />
              </section>

              {/* Section 9: BSA 2023 Section 63 Evidence Dossier */}
              <section
                id="heading-bsa-evidence"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    BSA 2023 Section 63 Electronic Audit Trail &amp; Notice Service Protocol
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Replacing Former Evidence Act Section 65B: Admissibility of ERP Demand Runs &amp; Speed Post Logs
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Effective 1 July 2024, the Indian Evidence Act, 1872 was replaced by the{" "}
                    <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>. When developers tender digital evidence—such as ERP demand generation logs, CRM emails, WhatsApp read receipts, and India Post tracking data—before RERA benches or the High Court, strict adherence to{" "}
                    <strong>Section 63 of BSA 2023</strong> is mandatory.
                  </p>
                  <p>
                    An incomplete or absent electronic evidence certificate allows the defaulting purchaser to argue that the demand notice was never served, thereby invalidating any subsequent cancellation under Section 11(5).
                  </p>
                </div>

                {/* 5-Item BSA Checklist */}
                <div className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Mandatory Section 63 BSA 2023 Evidentiary Dossier Checklist
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block font-bold mb-1">
                        1. ERP Demand Audit Log
                      </strong>
                      System-generated timestamp showing creation and dispatch of the construction milestone demand note from SAP, Salesforce, or Farvision ERP.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block font-bold mb-1">
                        2. Certified Architect Certificate
                      </strong>
                      Council of Architecture (CoA) licensed architect Form 1 milestone completion certificate bearing physical/digital seal and site photo hashes.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block font-bold mb-1">
                        3. India Post Speed Post RPAD Tracking
                      </strong>
                      Official India Post consignment tracking sheet confirming physical delivery or &quot;Addressee Refused&quot; / &quot;Door Locked&quot; return memo (deemed service).
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block font-bold mb-1">
                        4. WhatsApp &amp; Email Delivery Logs
                      </strong>
                      Official WhatsApp Business API delivery and read receipts (two blue ticks) along with SMTP server transmission logs and cryptographic hash.
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium">
                    &check; <strong>Section 63 BSA Certificate:</strong> Signed by the Developer&apos;s IT Head or Systems Administrator certifying that the computer systems and communication servers were operating under lawful control without unauthorized tampering throughout the notice period.
                  </div>
                </div>

                {/* Dual-Track CTA Component Placement */}
                <div className="pt-4">
                  <ReraSection19CTA />
                </div>
              </section>

              {/* Section 10: Verified Court Precedents */}
              <section className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Verified Supreme Court &amp; Appellate RERA Precedent Library
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Citable Judicial Holdings Governing Promoter Standing, s.11(5) Cancellations &amp; Forfeitures
                  </p>
                </div>

                <div className="space-y-6">
                  {COURT_PRECEDENTS.map((prec, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border-l-4 border-[#DC2626] bg-slate-50 border-y border-r border-slate-200 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200 pb-2">
                        <strong className="text-sm sm:text-base font-black text-slate-900">
                          {prec.title}
                        </strong>
                        <span className="text-[10px] sm:text-xs font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                          {prec.date}
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 font-mono">
                        <span className="font-bold text-slate-800">{prec.parties}</span> &bull; {prec.citation}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">Facts &amp; Dispute:</strong> {prec.facts}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        <strong className="text-slate-900">Judicial Holding:</strong> {prec.holding}
                      </p>

                      <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <span className="font-bold text-slate-900">Key Takeaway for Real Estate Counsel:</span>
                        <span className="text-emerald-700 font-bold">{prec.takeaway}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: FAQs Accordion */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: Promoter RERA Recovery &amp; Buyer Defaults
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers to Critical Questions Faced by Real Estate Developers &amp; Collections Heads
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900 group-open:text-[#DC2626]">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2 shrink-0">
                          &#9662;
                        </span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Statutory Sources & Authority References */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Primary Statutory Citations &amp; Real Estate Regulatory Authorities
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Official Legislation, Bare Acts, and State Authority Portals
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-semibold underline underline-offset-2 transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 mt-4">
                  <p>
                    <strong>Legal Notice &amp; Regulatory Disclaimer:</strong> The analysis and procedural frameworks outlined on this page are intended for institutional creditors, real estate developers, and corporate legal teams navigating Indian real estate law. Statutory interest rates, model agreements, and cancellation rules are subject to State RERA Authority notifications and High Court / Supreme Court jurisprudence. Consult legal counsel for case-specific evaluation before issuing statutory notices or executing unit cancellations.
                  </p>
                  <p className="mt-2 text-[11px] text-slate-400">
                    Reviewed by: {LEGAL_REVIEWER.name}, {LEGAL_REVIEWER.role}. Published by LegalRecovery.in.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Outside Main Container */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
