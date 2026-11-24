import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ConstructionNoticeCTA from "./ConstructionNoticeCTA";
import ConstructionNoticeTOC from "./ConstructionNoticeTOC";
import ConstructionNoticeWorkspace from "./ConstructionNoticeWorkspace";
import {
  FileText,
  AlertTriangle,
  Scale,
  ShieldCheck,
  Building2,
  Clock,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Calculator,
  Layers,
  FileCheck2,
} from "lucide-react";

export const revalidate = 86400;

const EXACT_H1 =
  "Contractor Legal Notice Pack: Unpaid RA/Final Bill Demand, Post-DLP Retention Release & Protest-Under-Duress No-Claim Letter";

const EXACT_TITLE =
  "Construction RA Bill & Retention Money Legal Notice Format";

const EXACT_DESCRIPTION =
  "Downloadable construction recovery templates: itemized RA-bill/MB schedule, DLP completion certificate table, PBG warning & Section 21 arbitration notice.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/templates/construction-ra-bill-retention-money-arbitration-notice`,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}/templates/construction-ra-bill-retention-money-arbitration-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Construction RA Bill and Retention Money Legal Notice Template",
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
    title: "Commercial Courts Act, 2015 — Section 2(1)(c)(vi) (Construction & Infrastructure Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Indian Contract Act, 1872 — Section 55 & Section 73 (Reciprocal Obligations, Delay & Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 — Section 21 (Commencement of Arbitral Proceedings) & Section 9 (Interim Stays)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records & Speed Post Manifests)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Limitation Act, 1963 — Articles 18, 55 & 137 (3-Year Period for Works Contracts & Section 11 Petitions)",
    url: "https://www.indiacode.nic.in/handle/123456789/1572",
  },
  {
    title: "Code of Civil Procedure, 1908 — Section 80 (Mandatory 60-Day Notice for Government & PSU Works Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const CASE_CITATIONS = [
  {
    title: "Signing No-Claim Certificate Under Financial Duress Does Not Extinguish Arbitral Claims",
    parties: "Ambica Construction v. Union of India",
    citation: "(2006) 13 SCC 475 (Supreme Court of India)",
    date: "Judgment Dated 01 December 2006",
    facts:
      "A railway civil contractor completed construction works and demanded payment of overdue running account bills. The employer made signing a pre-printed unconditional 'No Claim Certificate' (NDC) a prerequisite for releasing admitted dues. Upon receipt of partial payment, the contractor invoked arbitration for the balance claims. The Union of India contended the dispute was extinguished by accord and satisfaction.",
    holding:
      "The Supreme Court held that where a contractor is compelled to furnish a No-Claim Certificate under financial duress or economic coercion to receive admitted dues, such certificate does not extinguish legitimate contractual claims or bar the arbitral tribunal from adjudicating the real dispute.",
    amount: "Doctrine of Economic Duress in Works Contracts Established; Arbitral Reference Upheld",
    takeaway:
      "Issuing a contemporaneous protest letter or registering economic duress when submitting an NDC preserves all pending RA bills, extra-item variations, and retention claims.",
  },
  {
    title: "Unconditional Discharge Vouchers Voidable Where Economic Coercion is Established",
    parties: "National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd.",
    citation: "(2009) 1 SCC 267 (Supreme Court of India)",
    date: "Judgment Dated 18 September 2008",
    facts:
      "The respondent company sustained massive commercial losses and faced acute liquidity distress. The paying authority insisted on an unqualified discharge voucher before disbursing undisputed funds. The claimant accepted the cheque and immediately issued a protest asserting economic duress.",
    holding:
      "The Supreme Court formulated authoritative guidelines on discharge vouchers: when a party signs an unqualified discharge voucher under financial distress, coercion, or undue influence, the discharge is voidable under Section 19 of the Contract Act. The Chief Justice or arbitral tribunal must examine whether accord and satisfaction was genuine or coerced.",
    amount: "Standard 3-Illustration Test for Duress & Economic Coercion Formulated",
    takeaway:
      "Never accept final bill payments in silence. A prompt fact-verified letter of protest removes the barrier of accord and satisfaction under Section 11 of the Arbitration Act.",
  },
  {
    title: "Section 21 Notice is the Exclusive Statutory Trigger Freezing Limitation for Arbitration",
    parties: "BSNL v. Nortel Networks India Pvt. Ltd.",
    citation: "(2021) 5 SCC 738 (Supreme Court of India)",
    date: "Judgment Dated 10 March 2021",
    facts:
      "In a commercial technology and turnkey infrastructure project, the contractor issued recurring payment reminders and informal demand letters over several years. The employer argued that limitation expired 3 years from the date of completion. The contractor contended that limitation for Section 11(6) court appointment began only after Section 21 notice was ignored.",
    holding:
      "The Supreme Court clarified the dual-limitation architecture: limitation for the underlying contractual claim is governed by the Limitation Act (3 years from cause of action), while limitation for filing a Section 11 application in court is 3 years from the expiry of the 30-day notice period under Section 21 of the Arbitration Act. Section 21 notice formally commences arbitral proceedings.",
    amount: "Dual-Limitation Framework Defined; Section 21 Mandatory for Section 11 Petitions",
    takeaway:
      "Do not rely on standard reminder emails. Serve an express Section 21 invocation notice to halt the limitation clock and trigger the 30-day statutory window for arbitrator appointment.",
  },
  {
    title: "Unilateral Sole Arbitrator Appointments in Infrastructure Contracts Declared Unconstitutional",
    parties: "Central Organisation for Railway Electrification (CORE) v. ECI-SPIC-SMO-MCML (JV)",
    citation: "2024 INSC 859 (5-Judge Constitution Bench, Supreme Court of India)",
    date: "Judgment Dated 08 November 2024",
    facts:
      "Standard public sector and EPC contract clauses empowered the General Manager or Director to appoint a sole arbitrator or provide a curated 3-to-4 member panel of retired government employees from which the contractor was forced to pick nominees. The validity of such clauses was referred to a 5-Judge Constitution Bench.",
    holding:
      "The 5-Judge Constitution Bench overruled previous conflicting decisions and held that unilateral appointment of arbitrators by an interested party violates Section 12(5) of the Arbitration Act and the constitutional guarantee of equality under Article 14. An employer cannot curate an exclusive panel of its own nominees. Independent judicial appointments must be made.",
    amount: "Employer Curated Panels Voided; Party Autonomy Subordinated to Neutrality",
    takeaway:
      "If the employer ignores your Section 21 notice or insists on choosing from its own panel, you can immediately approach the High Court under Section 11(6) for an independent judicial appointment.",
  },
  {
    title: "Performance Bank Guarantees Cannot Be Encashed for Separate Unadjudicated Disputes",
    parties: "Gangotri Enterprises Ltd. v. Union of India",
    citation: "(2016) 11 SCC 720 (Supreme Court of India)",
    date: "Judgment Dated 05 May 2016",
    facts:
      "The contractor completed execution of a railway project. While the final bill and retention money were pending, the employer sought to encash the contractor's Performance Bank Guarantee (PBG) to recover alleged liquidated damages arising out of a completely separate tender package.",
    holding:
      "The Supreme Court held that while courts are slow to interfere with unconditional bank guarantees, an employer cannot encash a PBG furnished for one contract to satisfy an unadjudicated claim or disputed damages in another contract. Doing so amounts to egregious fraud and causes irretrievable injustice.",
    amount: "Injunction Granted Against Wrongful PBG Encashment; Arbitrary Forfeiture Quashed",
    takeaway:
      "Including an express Gangotri Enterprises warning in your pre-litigation notice creates grounds to secure an immediate Section 9 interim stay against bad-faith PBG invocation.",
  },
];

const FAQS = [
  {
    question: "Can an employer withhold post-DLP retention money if no defect notice was served during the DLP?",
    answer:
      "No. Retention money (typically 5% to 10% of gross contract value) is a security held solely to safeguard the employer against latent defects arising during the contractually stipulated Defect Liability Period (usually 12 to 24 months). If the DLP has expired and the employer's engineer never issued a contemporaneous written defect notice under the contract, the retention money ceases to be a contingent reserve and becomes an admitted, liquid contractual debt. Withholding it post-DLP constitutes an unlawful retention of contractor capital, entitling the contractor to interest at 18% per annum under Section 73 of the Indian Contract Act, 1872.",
  },
  {
    question: "Does signing a No-Claim Certificate (NDC) or Final Discharge Voucher completely waive contractor claims?",
    answer:
      "No. Under the landmark Supreme Court judgments in Ambica Construction v. Union of India (2006) and National Insurance Co. v. Boghara Polyfab (2009), a No-Claim Certificate or discharge voucher signed under financial duress or economic coercion does not extinguish genuine contractual claims. When an employer or PSU makes signing an NDC a mandatory prerequisite for releasing admitted running bills or releasing bank guarantees, the contractor has zero bargaining power. By issuing a contemporaneous protest letter or legal notice asserting economic duress, the contractor fully preserves their rights to refer unpaid RA bills, uncertified MB items, and prolongation claims to arbitration.",
  },
  {
    question: "How does a Section 21 notice differ from a normal legal demand notice in construction contracts?",
    answer:
      "A standard legal demand notice simply calls upon the debtor to clear unpaid invoices within a specified timeframe (e.g. 15 days) and threatens civil litigation. In contrast, a notice under Section 21 of the Arbitration and Conciliation Act, 1996 is a statutory instrument that formally commences arbitral proceedings. As held in BSNL v. Nortel Networks (2021), a Section 21 notice freezes the limitation clock and triggers the 30-day window for arbitrator appointment. If the employer fails to agree on an arbitrator within 30 days, the contractor obtains an immediate cause of action to file a Section 11(6) petition before the High Court.",
  },
  {
    question: "Can an EPC contractor stop the employer from encashing the Performance Bank Guarantee (PBG)?",
    answer:
      "Yes, under specific legal exceptions. While Indian courts generally treat bank guarantees as independent contracts, an injunction against encashment can be obtained under Section 9 of the Arbitration Act or Order XXXIX Rules 1 & 2 CPC if the contractor establishes: (1) Egregious fraud in the invocation of the guarantee, or (2) Special equities and irretrievable harm/injustice, such as where works are virtually completed, DLP has expired, and the employer invokes the PBG in bad faith to enforce unadjudicated liquidated damages (as settled in Gangotri Enterprises v. Union of India).",
  },
  {
    question: "Why are works contracts excluded from MSME Samadhaan, and what alternative recovery rails exist?",
    answer:
      "The Supreme Court of India in Sterling and Wilson Pvt. Ltd. and subsequent High Court rulings established that turnkey EPC and civil works contracts involve an indivisible composite supply of goods and services (materials, labour, engineering, equipment). Such composite contracts are classified as 'Works Contracts' and fall outside the definition of pure goods or service supplies under Sections 2(n) and 18 of the MSMED Act, 2006. Consequently, MSEFC councils frequently reject works contract claims. Contractors must instead pursue recovery through Section 21 Arbitration, Summary Suits under Order XXXVII CPC, or Section 80 CPC pre-suit notices for Government departments.",
  },
  {
    question: "Can a main contractor withhold payments from a subcontractor using a 'pay-when-paid' back-to-back clause?",
    answer:
      "No. Indian courts do not treat 'pay-when-paid' or 'pay-if-paid' clauses as an absolute defense to non-payment. Under Sections 37, 70, and 73 of the Indian Contract Act, 1872, where a subcontractor has fully executed the subcontracted scope and the main contractor has accepted the works in joint measurement sheets, the main contractor cannot indefinitely delay payment citing non-receipt of funds from the project developer. In Indian law, 'pay-when-paid' is construed merely as a timing mechanism for reasonable disbursement, not a condition precedent that extinguishes the contractor's liability to pay for completed work.",
  },
  {
    question: "What is the statutory limitation period for issuing a Section 21 notice for unpaid construction bills?",
    answer:
      "Under Articles 18 and 55 of the Limitation Act, 1963, the limitation period for recovering money for works executed is 3 years from the date when the work is completed or when the bill becomes due and payable under the contract. In construction contracts with a Defect Liability Period, cause of action for retention money arises specifically upon the date of DLP expiry. For final bills, limitation runs from the date of final bill rejection or uncertified measurement dispute. Serving a Section 21 notice within this 3-year window formally halts the limitation clock.",
  },
  {
    question: "What evidence is mandatory under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 for serving construction notices?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic records—including email notice transmissions, project management portal communications, and digital delivery receipts—are admissible only when supported by a statutory certificate. For a construction legal notice, the creditor must maintain: (1) The original digital PDF notice file with SHA-256 cryptographic hash, (2) SMTP transmission logs and recipient mail server acceptance records, (3) India Post Speed Post tracking report with delivery timestamp, and (4) An advocate or authorized officer certificate certifying the lawful operation of the computer device at the time of transmission.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: EXACT_DESCRIPTION,
  datePublished: "2026-11-16T15:30:00+05:30",
  dateModified: "2026-11-16T15:30:00+05:30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/templates/construction-ra-bill-retention-money-arbitration-notice`,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder",
    worksFor: {
      "@type": "LegalService",
      name: "AMA Legal Solutions",
      url: SITE_URL,
    },
  },
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
    name: "Construction RA Bill and Retention Money Legal Notice Template",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const CREATIVE_WORK_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["CreativeWork", "DigitalDocument"],
  name: "Contractor Legal Notice Pack: RA Bills, Retention & Duress Protest",
  headline: EXACT_H1,
  description:
    "Comprehensive legal notice templates and clause workspace for civil, EPC, and MEP contractors under Commercial Courts Act s.2(1)(c)(vi), Contract Act s.55/73, and Arbitration Act s.21.",
  encodingFormat: "text/html",
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Public",
    },
  },
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
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Construction RA Bill & Retention Notice",
      item: `${SITE_URL}/templates/construction-ra-bill-retention-money-arbitration-notice`,
    },
  ],
};

export default function ConstructionNoticePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CREATIVE_WORK_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <Scale className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>Ready-to-Use Construction Recovery Template &bull; Archetype P1</span>
            </div>

            {/* Single Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40–60 words with parent hub link) */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary &bull; Works Contract Recovery Rail
              </span>
              Under Section 2(1)(c)(vi) of the Commercial Courts Act, 2015 and Sections 55 and 73 of the Indian Contract Act, 1872, contractors facing unpaid Running Account (RA) bills or withheld post-DLP retention funds possess statutory rights to immediate liquidity. Explore our comprehensive{" "}
              <Link
                href="/industries/construction-epc-contractor-recovery"
                className="text-red-400 hover:text-red-300 font-bold underline decoration-red-500 underline-offset-2"
              >
                construction and EPC contractor recovery playbook
              </Link>{" "}
              to enforce joint Measurement Book (MB) records, invoke Section 21 arbitration, and restrain retaliatory bank guarantee forfeiture under established Supreme Court jurisprudence.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
                  Statutory Classification
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-slate-100">
                  Commercial Courts s.2(1)(c)(vi)
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
                  Post-DLP Retention Due
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-emerald-400">
                  Immediate 100% Release
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
                  Arbitration Limitation
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400">
                  Section 21 Freeze Trigger
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
                  Coerced NDC Shield
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-red-400">
                  Ambica Construction Ratio
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Component */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Templates", href: "/templates" },
                {
                  label: "Construction RA Bill & Retention Notice",
                  href: "/templates/construction-ra-bill-retention-money-arbitration-notice",
                },
              ]}
            />
          </div>

          {/* 2-Column Split */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <ConstructionNoticeTOC />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview & Statutory Foundation */}
              <section
                id="heading-statutory-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Recovery Framework for Civil &amp; EPC Contractors
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  In the Indian infrastructure and civil engineering sector, contractor recovery is fundamentally distinct from ordinary commercial invoice defaults. Infrastructure disputes do not hinge on simple transport lorry receipts (bilties) or delivery challans; they are governed by <strong>Joint Measurement Books (MB)</strong>, progressive <strong>Running Account (RA) bills</strong>, certified milestone deductions, and <strong>Defect Liability Period (DLP)</strong> retention covenants.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-black uppercase text-[#DC2626] tracking-wider block mb-1">
                      Commercial Courts Act
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Section 2(1)(c)(vi)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Expressly classifies disputes arising out of construction and infrastructure contracts, including tenders, as commercial disputes eligible for fast-track Commercial Court adjudication.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-black uppercase text-[#DC2626] tracking-wider block mb-1">
                      Indian Contract Act
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Sections 55 &amp; 73</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Payment of progressive RA bills is a vital reciprocal promise. Failure to disburse certified funds entitles the contractor to suspend work, claim plant idling costs, and demand 18% commercial interest.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-black uppercase text-[#DC2626] tracking-wider block mb-1">
                      Arbitration &amp; Conciliation Act
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Sections 21 &amp; 9</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Section 21 notice halts limitation and launches arbitration, while Section 9 enables emergency High Court injunctions against illegal Performance Bank Guarantee (PBG) encashment.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <strong>Notice regarding Works Contract Exclusion:</strong> Contractors frequently attempt to file claims before the Micro and Small Enterprise Facilitation Council (MSEFC). However, as analyzed in our guide on{" "}
                  <Link
                    href="/works-contract-excluded-from-msme-samadhaan-contractor-alternatives"
                    className="text-[#DC2626] font-bold underline"
                  >
                    works contract exclusion from MSME Samadhaan
                  </Link>
                  , composite EPC and civil contracts are regularly dismissed by councils. Serving a fact-verified Section 21 notice or filing a Commercial Suit under Section 2(1)(c)(vi) is the proven legal rail.
                </div>
              </section>

              {/* Section 2: Interactive Notice Workspace Island */}
              <section id="heading-notice-workspace" className="scroll-mt-28">
                <ConstructionNoticeWorkspace />
              </section>

              {/* Primary Dual-Track CTA Banner */}
              <ConstructionNoticeCTA />

              {/* Section 3: Structuring the RA Bill & MB Ledger */}
              <section
                id="heading-mb-ra-schedule"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Structuring the RA Bill &amp; Joint Measurement Book Ledger
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  The most fatal defect in generic legal notices is issuing a lump-sum demand without a forensically reconciled bill schedule. In civil disputes, an employer defends non-payment by claiming that measurements were unverified, quantity variations exceeded tender limits, or statutory taxes were unadjusted.
                </p>

                {/* Structured Schedule Demonstration Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold">Bill Reference</th>
                        <th className="p-3 font-bold">MB Reference</th>
                        <th className="p-3 font-bold">Gross Certified (₹)</th>
                        <th className="p-3 font-bold">Uncertified MB (₹)</th>
                        <th className="p-3 font-bold">Statutory Holdbacks</th>
                        <th className="p-3 font-bold">Retention (5%)</th>
                        <th className="p-3 font-bold">Net Overdue (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold">RA Bill No. 12</td>
                        <td className="p-3 text-slate-600">MB Vol 08, Entry 22–39</td>
                        <td className="p-3 tabular-nums font-semibold">₹1,25,00,000</td>
                        <td className="p-3 tabular-nums text-slate-400">₹0</td>
                        <td className="p-3 tabular-nums">₹5,00,000 (TDS/GST)</td>
                        <td className="p-3 tabular-nums">₹6,25,000</td>
                        <td className="p-3 tabular-nums font-bold text-emerald-700">₹45,00,000 (Balance)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold">RA Bill No. 13</td>
                        <td className="p-3 text-slate-600">MB Vol 09, Entry 14–48</td>
                        <td className="p-3 tabular-nums font-semibold">₹1,80,00,000</td>
                        <td className="p-3 tabular-nums text-amber-700">₹32,00,000</td>
                        <td className="p-3 tabular-nums">₹7,20,000 (TDS/GST)</td>
                        <td className="p-3 tabular-nums">₹9,00,000</td>
                        <td className="p-3 tabular-nums font-bold text-emerald-700">₹1,63,80,000</td>
                      </tr>
                      <tr className="bg-slate-50 font-bold">
                        <td className="p-3">Final Handover Bill</td>
                        <td className="p-3 text-slate-600">Final MB Book 10</td>
                        <td className="p-3 tabular-nums">₹2,10,00,000</td>
                        <td className="p-3 tabular-nums text-amber-700">₹48,00,000</td>
                        <td className="p-3 tabular-nums">₹8,40,000 (TDS/GST)</td>
                        <td className="p-3 tabular-nums">₹10,50,000</td>
                        <td className="p-3 tabular-nums font-bold text-red-600">₹2,39,10,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  By incorporating this granular ledger into the legal demand notice, you shift the evidentiary burden onto the employer under Order VIII Rule 5 CPC. The employer is forced to either specifically dispute line items with supporting measurement sheets or face deemed admission before the Commercial Court. For detailed guidance on tackling delayed site measurements, review our guide on{" "}
                  <Link
                    href="/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery"
                    className="text-[#DC2626] font-bold underline"
                  >
                    unpaid RA bills and uncertified Measurement Book recovery
                  </Link>.
                </p>
              </section>

              {/* Section 4: Post-DLP Retention Release & PBG Non-Encashment */}
              <section
                id="heading-dlp-retention-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Post-DLP Retention Release &amp; PBG Non-Encashment Protocol
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  In infrastructure contracts, retention money is routinely retained until 12 to 24 months after physical handover. When the Defect Liability Period expires, employers often manufacture sham defect lists or refuse to return Performance Bank Guarantees (PBGs) to coerce contractors into foregoing final claims.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Retention Release Mandate
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Admitted Debt Upon DLP Expiry
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Once Virtual Completion is certified and the DLP concludes without written defect notices, retention money transforms from a conditional performance guarantee into an absolute debt. Learn more in our{" "}
                      <Link
                        href="/retention-money-recovery-after-defect-liability-period-dlp-expiry"
                        className="text-emerald-900 font-bold underline"
                      >
                        retention money recovery after DLP expiry guide
                      </Link>.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/60 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                      PBG Injunction Pre-Emption
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Gangotri Enterprises Protection
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Under the Supreme Court ruling in <em>Gangotri Enterprises</em>, an employer cannot encash a PBG to recover disputed damages. Our notice issues an express restraint to the issuing bank, establishing grounds for an immediate{" "}
                      <Link
                        href="/wrongful-performance-bank-guarantee-pbg-invocation-stay-recovery"
                        className="text-[#DC2626] font-bold underline"
                      >
                        Section 9 PBG stay petition
                      </Link>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Signing NDC Under Financial Duress */}
              <section
                id="heading-ndc-duress-letter"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Signing No-Claim Certificate (NDC) Under Financial Duress
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  The most pervasive coercive tactic used by government authorities, PSUs, and private developers is conditioning the release of admitted running bills or retention money on signing an unconditional <strong>No Claim Certificate (NDC)</strong> or Final Discharge Voucher.
                </p>

                <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-xl space-y-3">
                  <h3 className="text-sm sm:text-base font-bold text-red-400">
                    The Legal Doctrine of Coercion: Ambica Construction &amp; Boghara Polyfab
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Under Indian law, accord and satisfaction requires true consensus ad idem (free consent). When a contractor is servicing heavy bank loans, machinery leases, and vendor liabilities, forcing them to sign an NDC to release undisputed funds constitutes economic coercion under Section 15 of the Contract Act.
                  </p>
                  <div className="p-3 bg-white/10 rounded-lg text-xs text-slate-200 space-y-1">
                    <p className="font-semibold text-emerald-400">The 3-Step Legal Counter-Action:</p>
                    <p>1. Transmit the Formal Protest Letter via registered email <strong>prior to or concurrently with</strong> signing the NDC.</p>
                    <p>2. Expressly cite <em>Ambica Construction (2006) 13 SCC 475</em> and state that endorsement is done strictly under financial duress.</p>
                    <p>3. File a Section 21 notice immediately upon credit of admitted funds to preserve the right to claim extra items, interest, and damages.</p>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  For subcontractors dealing with prime contractors withholding funds, explore our targeted guide on{" "}
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="text-[#DC2626] font-bold underline"
                  >
                    subcontractor payment recovery in India
                  </Link>{" "}
                  and our comprehensive analysis on{" "}
                  <Link
                    href="/recovery/contractor-payment"
                    className="text-[#DC2626] font-bold underline"
                  >
                    general contractor payment dispute strategies
                  </Link>.
                </p>
              </section>

              {/* Section 6: Combined Demand cum Section 21 Arbitration Notice */}
              <section
                id="heading-section-21-arbitration"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Combined Demand cum Section 21 Arbitration Notice SOP
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Issuing a combined notice that unites a commercial demand with a formal Section 21 arbitration invocation saves months of procedural delay. It immediately triggers the 30-day statutory countdown for arbitrator appointment while legally freezing the limitation period under <em>BSNL v. Nortel Networks</em>.
                </p>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#DC2626]" />
                    The 2024 CORE Constitution Bench Ruling on Unilateral Appointments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Historically, PSU tender clauses empowered the Managing Director to appoint their own employee or force contractors to choose from a 3-person curated panel. On 08 November 2024, a 5-Judge Constitution Bench of the Supreme Court in <em>Central Organisation for Railway Electrification (CORE)</em> held that all such unilateral appointment clauses violate Section 12(5) of the Arbitration Act and Article 14 of the Constitution.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our template incorporates this binding precedent by proposing a panel of independent, distinguished retired High Court Judges. If the employer fails to agree within 30 days, the contractor can directly file a Section 11(6) petition before the High Court. Read our deep-dive on{" "}
                    <Link
                      href="/section-21-arbitration-invocation-notice-construction-epc-guide"
                      className="text-[#DC2626] font-bold underline"
                    >
                      Section 21 arbitration invocation notice strategy
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Section 7: Service Protocol & BSA 2023 Section 63 */}
              <section
                id="heading-service-bsa-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Electronic Service &amp; BSA 2023 Section 63 Evidence Dossier
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  In high-value infrastructure litigation, debtors frequently evade service or claim that notice emails were caught in spam filters. With the enactment of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, electronic evidence rules have been overhauled.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                    <span className="font-bold text-slate-900 block mb-1">1. Registered Speed Post AD</span>
                    <p className="text-slate-600 leading-relaxed">
                      Dispatched with acknowledgement due to the registered office and project site. India Post tracking receipt constitutes statutory presumption of service under Section 27 of the General Clauses Act, 1897.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                    <span className="font-bold text-slate-900 block mb-1">2. Corporate Email Transmission</span>
                    <p className="text-slate-600 leading-relaxed">
                      Transmitted to official project heads, finance executives, and contract directors. SMTP server handshake logs prove receipt on the recipient&apos;s mail server.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                    <span className="font-bold text-slate-900 block mb-1">3. BSA s.63 Certificate</span>
                    <p className="text-slate-600 leading-relaxed">
                      Accompanied by a contemporaneous digital certificate authenticating electronic records, SHA-256 hashes, and computer system integrity, making evidence immediately admissible in court.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Notice to Government Employers:</strong> When serving claims against CPWD, state PWDs, Municipal Corporations, or Railways, check whether a 60-day statutory notice is mandatory under our guide on{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] font-bold underline"
                  >
                    Section 80 CPC notice to government departments
                  </Link>.
                </div>
              </section>

              {/* Section 8: Landmark Judicial Precedents */}
              <section
                id="heading-judicial-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Landmark Supreme Court Precedents on Contractor Claims
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  These verified Supreme Court precedents form the statutory backbone of our construction notice pack. Review the exact judicial holdings:
                </p>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((cit, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl border border-slate-200 shadow-xs space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm font-bold text-slate-900">{cit.title}</h3>
                        <span className="text-[11px] font-semibold text-slate-500">{cit.date}</span>
                      </div>
                      <p className="text-xs font-mono text-[#DC2626] font-bold">{cit.parties} &bull; {cit.citation}</p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        <strong>Facts:</strong> {cit.facts}
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        <strong>Holding:</strong> {cit.holding}
                      </p>
                      <div className="pt-2 border-t border-slate-200 text-xs text-emerald-800 font-semibold">
                        Practical Takeaway: {cit.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Evidentiary Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Mandatory Evidentiary Checklist for Construction Disputes
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Before dispatching your legal demand notice or filing Section 21 arbitration papers, assemble this mandatory 6-point evidentiary dossier:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">1. Executed Contract &amp; Amendments</span>
                      <span className="text-slate-600">Work order, letter of award (LOA), BOQ schedules, and GCC/SCC tender conditions.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">2. Certified Measurement Books (MB)</span>
                      <span className="text-slate-600">Copies of joint measurement sheets signed by site engineers, PMCs, and quantity surveyors.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">3. Serialized Running Account Bills</span>
                      <span className="text-slate-600">All submitted RA bills (RA-1 to Final) showing certified value, TDS deductions, and net receipts.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">4. Completion &amp; Handover Certificate</span>
                      <span className="text-slate-600">Virtual completion certificate, taking-over certificate (TOC), and proof of DLP commencement.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">5. Bank Guarantee Instrument Copies</span>
                      <span className="text-slate-600">Original issuance copy of PBG, extensions, and letters demanding return upon DLP expiry.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">6. Delay &amp; Extension Correspondence</span>
                      <span className="text-slate-600">Section 55 Contract Act delay notices proving employer hindrances (site handover, drawings, unhindered access).</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-slate-500">
                    Use our interactive{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-[#DC2626] font-bold underline"
                    >
                      delayed payment interest calculator
                    </Link>{" "}
                    to compute statutory compounded interest on admitted invoices before finalizing your claim schedule.
                  </p>
                </div>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions on Contractor Legal Notices
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 bg-white open:bg-slate-50 transition-colors"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory References & Primary Authorities */}
              <section
                id="heading-primary-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Primary Statutory Enactments &amp; Construction Case Law
                  </h2>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Official statutory handles and legislative frameworks cited in this template pack:
                </p>

                <ul className="space-y-2 text-xs">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-medium underline underline-offset-2"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Bottom Dual-Track CTA Banner */}
              <ConstructionNoticeCTA />
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Component */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
