import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import UncertifiedRABillTableOfContents from "./UncertifiedRABillTableOfContents";
import UncertifiedRABillScenarioTabs from "./UncertifiedRABillScenarioTabs";
import UncertifiedRABillRecoveryCTA from "./UncertifiedRABillRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery";
const EXACT_H1 =
  "Recovering Unpaid Running Account (RA) & Final Bills When the Developer or PMC Deliberately Stalls Measurement Certification";
const META_TITLE = "Employer Refusing to Certify RA Bills? Contractor Recovery";
const META_DESCRIPTION =
  "Developer or PMC stalling RA bills or forcing a No-Claim Certificate? Follow Supreme Court Ambica Construction rules, protest notices & recovery steps.";

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
        alt: formatAltText("Recovering Unpaid Running Account RA Bills Measurement Certification"),
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
    remedy: "Deemed Certification & Commercial Payment Demand",
    statute: "Contract Act 1872 (ss. 53/54) & CPWD Clause 7/9 / FIDIC Sub-Clause 14.3",
    timing: "Upon expiry of contractual 10–14 day PMC verification window",
    mechanism:
      "Serve formal notice establishing employer's default in joint measurement; place unilateral measurements on record backed by DPRs and Pour Cards; trigger contractual deemed acceptance.",
    relief:
      "Crystallizes debt as an admitted liquidated commercial claim; prevents employer from manufacturing retrospective punch lists or arbitrary rate deductions.",
    suitability:
      "Stalled monthly Running Account (RA) bills where the project manager or quantity surveyor avoids physical site recording.",
    tone: "emerald",
  },
  {
    remedy: "Protest Notice Repudiating Coerced No-Claim Certificate",
    statute: "Supreme Court Ambica Construction & R.L. Kalathia Doctrine",
    timing: "Prior to execution or within 24–48 hours of part-payment receipt",
    mechanism:
      "Issue registered advocate notice establishing financial duress and economic coercion under Contract Act Sections 15 & 19; reserve full rights to arbitrate extra items and escalation.",
    relief:
      "Neutralizes employer's 'Full & Final Accord and Satisfaction' defense; preserves multi-crore arbitral claims despite signing standard-form No-Dues Undertakings.",
    suitability:
      "Final Bill settlements where developers or PSUs withhold admitted principal dues until unconditional waivers are signed.",
    tone: "emerald",
  },
  {
    remedy: "Suspension of Work Without Liquidated Damages (LD) Liability",
    statute: "Indian Contract Act, 1872 (Sections 51, 52 & 54 - Reciprocal Promises)",
    timing: "Post-expiry of 15-day default notice on 2 or more unpaid RA bills",
    mechanism:
      "Formally notify suspension of site operations due to employer's failure to perform fundamental reciprocal obligation of interim project financing and bill certification.",
    relief:
      "Insulates contractor from wrongful termination and LD deductions; establishes statutory entitlement to claim plant, machinery, crane, and site overhead idling costs.",
    suitability:
      "Civil, structural, and MEP contractors experiencing severe working-capital starvation due to chronic employer non-certification.",
    tone: "slate",
  },
  {
    remedy: "Pre-Arbitration Section 9 Interim Bank Guarantee Injunction",
    statute: "Arbitration & Conciliation Act, 1996 (Section 9) & Commercial Courts Act",
    timing: "Immediate upon receipt of employer's wrongful termination or cure notice",
    mechanism:
      "File urgent petition before Commercial Court establishing employer's foundational breach, irretrievable injustice, and special equities under U.P. State Sugar Corp.",
    relief:
      "Restrains employer and issuing bank from encashing Performance Bank Guarantees (PBG) and Retention Mobilization Guarantees pending arbitration.",
    suitability:
      "Disputes where the developer retaliates against legitimate bill recovery demands by threatening encashment of bank securities.",
    tone: "slate",
  },
  {
    remedy: "Commercial Summary Suit / Order XXXVII CPC Recovery",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act s.2(1)(c)(vi)",
    timing: "Within 3-year limitation from date of deemed certification or part-payment",
    mechanism:
      "Institute fast-track commercial suit on written contract, joint measurement sheets, TDS Form 26AS admissions, and architect certificates.",
    relief:
      "Defendant must obtain leave to defend within 10 days by proving a substantial defense or depositing the contested sum into court escrow.",
    suitability:
      "Certified or part-certified final accounts, undisputed RA bills, and subcontracts lacking an express arbitration clause.",
    tone: "emerald",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Benchmark: No-Claim Certificate Signed Under Financial Duress Is Voidable",
    parties: "Ambica Construction v. Union of India",
    citation: "(2006) 13 SCC 475 & (2015) 13 SCC 644, Supreme Court of India",
    date: "Reaffirmed by Division Bench",
    facts:
      "The contractor completed construction works for the Railways. The department refused to release the undisputed final bill and security deposit unless the contractor signed an unconditional 'No-Claim Certificate' (NCC). Facing severe liquidity constraints, the contractor executed the certificate, accepted the admitted payment, and subsequently invoked arbitration for extra work and price escalation. The department contended that the contract was fully discharged by accord and satisfaction.",
    holding:
      "The Supreme Court held that the submission of a 'No-Claim Certificate' does not bar the contractor from raising genuine arbitrable claims. When a contractor is forced to provide a discharge voucher to receive undisputed admitted amounts under economic duress and financial stringency, the dispute remains alive and arbitrable. The Court ruled that bar clauses in standard tender agreements cannot override legitimate statutory rights under the Arbitration Act.",
    amount: "Contractor's Extra Claims Upheld Despite Unconditional Pre-Printed No-Claim Certificate",
    takeaway:
      "Developers and government agencies cannot defeat contractor arbitration claims by relying on forced No-Claim Certificates. Prompt repudiation or contemporaneous protest notices preserve multi-crore arbitral recovery rights.",
  },
  {
    title: "Supreme Court 5-Point Test: Discharge Vouchers and Economic Coercion in Construction",
    parties: "National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd.",
    citation: "(2009) 1 SCC 267, Supreme Court of India",
    date: "Landmark Judgment Dated 18 September 2008",
    facts:
      "The Supreme Court examined whether the execution of a full-and-final settlement voucher completely bars arbitral references. The Court laid down clear legal principles governing cases where discharge vouchers are signed under commercial compulsion, undue influence, or financial duress.",
    holding:
      "The Court established that whether a contract has been discharged by accord and satisfaction through a discharge voucher is itself an arbitrable dispute. If the claimant demonstrates prima facie that the voucher was obtained under financial distress, coercion, or threat of withholding admitted dues, the arbitral tribunal possesses exclusive jurisdiction to determine whether the discharge was voluntary or vitiated by duress.",
    amount: "Arbitral Tribunal Empowered to Pierce Coerced Discharge Vouchers",
    takeaway:
      "A contractor need only establish prima facie financial coercion (such as unpaid labour dues, pending bank interest, or withheld admitted bills) to refer uncertified claims to an independent arbitrator.",
  },
  {
    title: "Supreme Court Ruling: Claims Maintainable Even After Accepting Final Payment Without Initial Protest",
    parties: "R.L. Kalathia & Co. v. State of Gujarat",
    citation: "(2011) 2 SCC 400, Supreme Court of India",
    date: "Judgment Dated 18 January 2011",
    facts:
      "A government civil contractor accepted the final bill payment and signed a 'No-Due Certificate'. Sometime later, the contractor submitted claims for extra work, idle machinery, and material escalation. The trial court and High Court dismissed the suit holding that signing the NDC without an immediate endorsement on the cheque voucher operated as complete discharge.",
    holding:
      "The Supreme Court reversed the lower courts and laid down three landmark rules: (i) Merely because the contractor accepted final payment and signed a no-dues certificate, they are not precluded from raising balance claims; (ii) The contractor can prove by contemporaneous evidence that the certificate was signed under financial pressure; (iii) If legitimate claims were pending during the currency of the contract, the right to recover remains intact.",
    amount: "Full Balance Extra-Work and Escalation Claims Decreed in Favor of Contractor",
    takeaway:
      "Even if a contractor signed a clean No-Dues Certificate to prevent insolvency, contemporaneous letters, Daily Progress Reports, and hindrance logs maintain complete recovery viability.",
  },
  {
    title: "Supreme Court Restitution Rule: Unapproved Extra Work Reimbursable Under Section 70",
    parties: "Food Corporation of India & Ors. v. Vikas Majdur Kamdar Sahakari Mandli Ltd.",
    citation: "(2007) 13 SCC 544 & (2004) 9 SCC 672, Supreme Court of India",
    date: "Supreme Court Civil Appellate Jurisdiction",
    facts:
      "The contractor executed substantial extra structural work and site grading on oral instructions of the department engineer. The department refused to certify the variation bills on the ground that no prior written variation order had been issued by the competent sanctioning authority as required by contract terms.",
    holding:
      "The Supreme Court held that under Section 70 of the Indian Contract Act, when a contractor lawfully executes work not intending to do so gratuitously, and the employer enjoys the permanent benefit of such construction, the employer cannot raise formal contractual technicalities to evade payment. The contractor is statutorily entitled to reasonable compensation based on prevailing schedule rates.",
    amount: "Statutory Restitution Mandated for Non-Gratuitous Extra Construction Works",
    takeaway:
      "Absence of a formal signed Variation Order does not defeat recovery if the contractor proves actual execution through Pour Cards, RFIs, and employer utilization.",
  },
];

const FAQS = [
  {
    question: "Can an employer or PMC legally withhold RA bills because joint measurement was not done?",
    answer:
      "No. Standard construction contracts (including CPWD Works Manual Clauses 7 and 9, MES, and FIDIC Red Book Sub-Clauses 14.3 and 14.6) impose a time-bound duty on the Employer/Engineer to record joint measurements within 7 to 14 days of bill submission. If the PMC deliberately neglects or fails to attend joint measurement after receiving due notice, the measurements recorded unilaterally by the contractor are deemed accepted. Furthermore, under Sections 53 and 54 of the Indian Contract Act, 1872, an employer cannot exploit its own failure in performing a reciprocal obligation to starve the contractor of interim cash flows.",
  },
  {
    question: "What should a contractor do if forced to sign a 'No-Claim Certificate' to get the Final Bill released?",
    answer:
      "Follow the Supreme Court Ambica Construction and R.L. Kalathia protocol: (1) If possible, endorse the payment receipt voucher with the words: 'Received under protest and financial duress, without prejudice to our pending claims detailed in letter dated [Date]'; (2) If the developer refuses to hand over the cheque unless a clean pre-printed form is signed, immediately dispatch a registered Advocate Legal Notice within 24 to 48 hours of bank credit repudiating the certificate as vitiated by economic coercion under Sections 15 and 19 of the Indian Contract Act; (3) Invoke arbitration under Section 21 of the Arbitration and Conciliation Act, 1996 for the balance claims.",
  },
  {
    question: "Does a contractor have the legal right to stop or suspend construction work for unpaid RA bills?",
    answer:
      "Yes. Interim Running Account payments are the lifeblood of construction contracts. Under Sections 51, 52, and 54 of the Indian Contract Act, 1872, employer milestone payments and contractor site execution are reciprocal promises. If the employer commits a foundational breach by failing to certify and pay two or more RA bills, the contractor is legally entitled to suspend work after serving a formal default cure notice. The employer cannot impose Liquidated Damages (LD) or terminate the contract for contractor delays arising during a lawful suspension.",
  },
  {
    question: "Can civil and EPC contractors use MSME Samadhaan for works contracts involving both material and labor?",
    answer:
      "Caution is required. Multiple High Courts (including Bombay, Delhi, and Allahabad High Courts) have held that pure indivisible 'Works Contracts' involving composite supply of goods and construction services do not fall within the definition of supply of goods or services under Section 2(n) of the MSMED Act, 2006. However, if your contract is a divisible supply-and-erection package, or if you hold an active Udyam registration for manufacturing/supplying structural steel, RMC, or MEP equipment, MSMED Act benefits (including Section 16 compound interest at 3 times the RBI bank rate and Section 43B(h) tax leverage) apply to the supply component. Otherwise, Section 21 Arbitration and Order XXXVII Commercial Suits are the robust legal pathways.",
  },
  {
    question: "How do contractors prove uncertified extra items if the PMC never issued a formal written Variation Order?",
    answer:
      "Under Section 70 of the Indian Contract Act, 1872, an employer who enjoys the non-gratuitous benefit of lawful work must pay reasonable compensation regardless of missing paperwork. Contractors prove execution using contemporaneous site records admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA): signed Request for Inspection (RFI) logs, concrete Pour Cards, Daily Progress Reports (DPRs), site Hindrance Registers, material delivery weigh-slips, GPS-tagged site photos, and email correspondence acknowledging structural modifications.",
  },
  {
    question: "What is the limitation period for recovering unpaid Running Account and Final Bills in India?",
    answer:
      "Under the Limitation Act, 1963, the limitation period is 3 years: (a) For an RA bill, 3 years from the date payment became due under the contract or from the date of the last part-payment/acknowledgment of debt under Section 18; (b) For a Final Bill, 3 years from the date of completion/submission, or 3 years from the date the PMC formally rejected the bill or from the date of unilateral settlement. Crucially, serving a Section 21 Arbitration Invocation Notice stops the clock on limitation for all arbitral claims.",
  },
  {
    question: "Can the developer invoke our Performance Bank Guarantee (PBG) if we demand payment for uncertified bills?",
    answer:
      "While bank guarantees are generally independent commercial contracts, the Supreme Court has established clear exceptions: (1) Established fraud; (2) Special equities and irretrievable injustice (U.P. State Sugar Corp v. Sumac International). If the employer manufactures a fraudulent default to encash the PBG while withholding certified contractor bills that exceed the PBG value, the contractor can file an urgent Section 9 petition under the Arbitration Act before the Commercial Court to secure an interim stay against PBG encashment.",
  },
];

export default function UnpaidRABillsContractorRecoveryPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    datePublished: "2026-11-16T14:49:33+05:30",
    dateModified: "2026-11-16T14:49:33+05:30",
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
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
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Civil and EPC Contractors Recover Unpaid RA Bills and Coerced Final Bill Deductions",
    description:
      "A practitioner-grade statutory escalation protocol for civil contractors to overcome PMC measurement book stalling, repudiate forced No-Claim Certificates, and recover full contract dues with 18% interest.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Serve 7-Day Time-Bound Joint Measurement Notice",
        text: "Issue a formal notice calling on the Project Management Consultant (PMC) and Employer to record measurements in the Measurement Book (MB) on site, citing CPWD Clause 7/9 or FIDIC Sub-Clause 14.3 deemed certification rules.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Place Unilateral Measurements & DPRs on Record",
        text: "If the PMC fails to attend, record measurements unilaterally with an independent Chartered Engineer, backed by signed Pour Cards, Request for Inspection (RFI) logs, and BSA Section 63 compliant electronic site logs.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue Deemed Certification & Commercial Interest Demand Notice",
        text: "Serve a statutory demand notice declaring the RA bill deemed certified, claiming 18% commercial interest, and intimating the statutory right to suspend work under Contract Act Section 53/54 without Liquidated Damages.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Repudiate Coerced No-Claim Certificates Under Kalathia Rule",
        text: "If the developer coerced a full-and-final discharge voucher to release admitted amounts, issue a 48-hour advocate protest notice under Supreme Court Ambica Construction and R.L. Kalathia precedents establishing economic duress.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Invoke Section 21 Arbitration or File Commercial Court Suit",
        text: "Initiate formal dispute resolution under Section 21 of the Arbitration Act or institute an Order XXXVII Summary Suit under Commercial Courts Act Section 2(1)(c)(vi), securing Section 9 interim protection against Bank Guarantee encashment.",
      },
    ],
  };

  const jsonLdFaq = {
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

  const jsonLdBreadcrumb = {
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
        name: "Construction & EPC Contractor Recovery",
        item: `${SITE_URL}/industries/construction-epc-contractor-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Uncertified RA Bills & Measurement Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Infrastructure, Civil Construction, EPC &amp; MEP Claims &bull; IND-07 Playbook</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words) with parent Hub link in first 250 words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Statutory Summary
            </span>
            When real estate developers or Project Management Consultants (PMCs) deliberately stall Measurement Book (MB) sign-offs or coerce unconditional &lsquo;No-Claim Certificates&rsquo; (NDCs) before releasing admitted funds, civil and EPC contractors can enforce deemed certification clauses and recover balance dues under the Supreme Court doctrines in <em>Ambica Construction</em> and <em>R.L. Kalathia</em>. Part of our comprehensive{" "}
            <Link
              href="/industries/construction-epc-contractor-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Construction &amp; EPC Contractor Recovery Desk
            </Link>
            , this playbook establishes unilateral measurement protocols, work suspension rights under Contract Act Section 53/54 without Liquidated Damages, and fast-track Commercial Court arbitration.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Deemed Cert Window
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                14 Days
              </p>
              <p className="text-[10px] text-slate-400 mt-1">CPWD Cl. 7 / FIDIC Cl. 14.3</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Coerced NDC Bar
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                0% Bar
              </p>
              <p className="text-[10px] text-slate-400 mt-1">SC Ambica / Kalathia Rule</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Commercial Interest
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                18% p.a.
              </p>
              <p className="text-[10px] text-slate-400 mt-1">Commercial Courts Act s.2(1)(c)</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Work Suspension Right
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                100% Shield
              </p>
              <p className="text-[10px] text-slate-400 mt-1">Contract Act ss. 51-54 (No LD)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumb component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Construction & EPC Recovery",
                href: "/industries/construction-epc-contractor-recovery",
              },
              {
                label: "Uncertified RA Bills Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky TOC + Main Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky TOC */}
          <UncertifiedRABillTableOfContents />

          {/* Right Column: Editorial Sections */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational Bottleneck
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Why Developers and PMCs Stall Running Account (RA) Measurements
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In the Indian infrastructure and civil construction sector, Running Account (RA) bills represent the operational lifeblood of general contractors, structural fabricators, and MEP turnkey specialists. A contractor executing an industrial warehouse, high-rise residential complex, or highway interchange commits massive upfront working capital: weekly labor wages, bulk purchases of TMT steel and RMC, specialized crane rentals, and subcontractor mobilization. Contracts typically mandate monthly interim payments certified through a formal Joint Measurement Sheet (JMS) entered into the Measurement Book (MB).
                </p>
                <p>
                  However, when commercial real estate developers, industrial project promoters, or Public Sector Undertakings (PSUs) experience funding crunches, cost overruns, or bank disbursement freezes, the Project Management Consultant (PMC) and site Quantity Surveyor (QS) are unofficially instructed to &ldquo;slow-pedal&rdquo; bill certification. Instead of rejecting bills on bona fide technical grounds, the PMC deploys systemic stonewalling tactics:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                      Measurement Avoidance
                    </p>
                    <p className="text-xs text-slate-600">
                      Site engineers avoid attending joint measurement sessions, cancel site visits on trivial grounds, and leave measurement sheets unsigned for months.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                      Repetitive Paperwork Loops
                    </p>
                    <p className="text-xs text-slate-600">
                      PMC issues piecemeal queries every 20 days, demanding re-submission of concrete pour cards, cube test reports, and mill test certificates already submitted.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                      Coerced Final Bill Waivers
                    </p>
                    <p className="text-xs text-slate-600">
                      Developer withholds admitted principal payments on the Final Bill until the contractor signs an unconditional &lsquo;No-Claim Certificate&rsquo; waiving all extra items.
                    </p>
                  </div>
                </div>
                <p>
                  Allowing this deadlock to fester without a structured legal response leads directly to commercial insolvency. Contractors who continue funding site operations on borrowed capital face mounting bank interest, while an employer in financial distress may unilaterally terminate the contract or invoke Performance Bank Guarantees. Understanding how to transform uncertified measurements into legally enforceable debts under the{" "}
                  <Link
                    href="/recovery/contractor-payment"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    contractor payment recovery framework
                  </Link>{" "}
                  is essential for every commercial billing engineer and contractor managing director.
                </p>
              </div>
            </section>

            {/* Section 2: Stalling Tactics & Statutory Hook */}
            <section
              id="heading-stalling-tactics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal Doctrine
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Supreme Court Precedents: Invalidating Coerced No-Claim Certificates
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The most pervasive trap in Indian construction contracting occurs during Final Bill closure. After completing a project spanning two or three years, the contractor submits a Final Bill of ₹10 Crore, encompassing base contract quantities, extra item variations executed on oral site orders, and statutory price escalation (cement, steel, diesel). The developer&rsquo;s finance director acknowledges an admitted debt of ₹6 Crore, but delivers an ultimatum:
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-red-950 font-medium">
                  &ldquo;Sign our printed, un-amended &lsquo;Full and Final No-Claim Certificate&rsquo; confirming you have zero balance claims, zero variation disputes, and waiving all escalation claims, or we will not release even the admitted ₹6 Crore.&rdquo;
                </div>
                <p>
                  Confronted with pressing vendor dues, bank loan default notices, and worker payroll obligations, contractors frequently capitulate and sign the certificate under extreme financial duress. The developer immediately pockets the certificate, disburses the ₹6 Crore, and repudiates the balance ₹4 Crore of legitimate claims.
                </p>
                <p>
                  Under established Indian jurisprudence, this predatory tactic has been completely dismantled. The Supreme Court of India in <em>Ambica Construction v. Union of India</em> (2006) 13 SCC 475 &amp; (2015) 13 SCC 644, <em>National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd.</em> (2009) 1 SCC 267, and <em>R.L. Kalathia &amp; Co. v. State of Gujarat</em> (2011) 2 SCC 400 held that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong>Economic Coercion Vitiates Consent:</strong> A discharge voucher or No-Dues Certificate signed under financial duress, where admitted amounts are held hostage, does not constitute genuine accord and satisfaction under Sections 15 and 19 of the Indian Contract Act, 1872.
                  </li>
                  <li>
                    <strong>Arbitration Bar Inoperative:</strong> Boilerplate clauses in standard tender contracts declaring that submission of a No-Claim Certificate operates as a complete waiver of the right to arbitrate are contrary to public policy and void under Section 28 of the Contract Act.
                  </li>
                  <li>
                    <strong>Contemporaneous Evidence Governs:</strong> If the contractor serves a timely protest notice or demonstrates that claims were pending prior to the release of funds, the arbitral tribunal possesses full jurisdiction to award balance dues, variation claims, and interest.
                  </li>
                </ul>
                <p>
                  To preserve your claims, you must adhere strictly to the <strong>Kalathia Protest Protocol</strong>: either endorse the payment voucher with &lsquo;Under Protest and Without Prejudice&rsquo; or dispatch a registered advocate notice within 24 to 48 hours of payment credit formally repudiating the certificate as coerced. If you are dealing with government authorities, also review our guide on{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Section 80 CPC Notice to Government &amp; PSUs
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Remedy Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal Pathways
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Statutory Remedy Matrix for Uncertified Contractor RA Bills
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Compare five actionable legal mechanisms available to civil, structural, EPC, and turnkey MEP contractors facing measurement obstruction, withheld payments, or coerced final waivers:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                    <tr>
                      <th className="p-3 sm:p-4">Remedy &amp; Statute</th>
                      <th className="p-3 sm:p-4">Trigger &amp; Timing</th>
                      <th className="p-3 sm:p-4">Operational Mechanism</th>
                      <th className="p-3 sm:p-4">Commercial Relief</th>
                      <th className="p-3 sm:p-4">Contract Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          <span
                            className={`inline-block w-2 h-2 rounded-full mr-2 ${
                              row.tone === "emerald" ? "bg-emerald-500" : "bg-slate-600"
                            }`}
                          />
                          {row.remedy}
                          <span className="block text-[11px] font-normal text-slate-500 mt-1 font-mono">
                            {row.statute}
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 align-top font-medium">
                          {row.timing}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top leading-relaxed">
                          {row.mechanism}
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-800 font-semibold bg-emerald-50/50 align-top">
                          {row.relief}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          {row.suitability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: SVG Flowchart Decision Tree */}
            <section
              id="heading-decision-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Step-by-Step Recovery Decision Tree for Stalled RA Bills
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When the Project Management Consultant fails to certify monthly running bills or delays recording measurements in the Measurement Book, follow this standardized five-stage escalation protocol:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-6">
                <svg
                  viewBox="0 0 960 220"
                  className="w-full h-auto text-white font-sans"
                  width={960}
                  height={220}
                  role="img"
                  aria-label="Contractor RA Bill Recovery Escalation Decision Tree"
                >
                  <defs>
                    <linearGradient id="boxGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="boxGradSlate" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                    <marker
                      id="arrow"
                      viewBox="0 0 10 10"
                      refX="5"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Step 1 */}
                  <g transform="translate(10, 20)">
                    <rect
                      width="165"
                      height="170"
                      rx="12"
                      fill="url(#boxGradSlate)"
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                    <circle cx="28" cy="28" r="14" fill="#DC2626" />
                    <text x="28" y="33" fill="#FFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      1
                    </text>
                    <text x="50" y="32" fill="#F87171" fontSize="11" fontWeight="bold">
                      STAGE 01
                    </text>
                    <text x="14" y="65" fill="#FFF" fontSize="13" fontWeight="bold">
                      7-Day Joint MB Notice
                    </text>
                    <text x="14" y="88" fill="#94A3B8" fontSize="10">
                      Formally notify PMC
                    </text>
                    <text x="14" y="104" fill="#94A3B8" fontSize="10">
                      for site measurement;
                    </text>
                    <text x="14" y="120" fill="#94A3B8" fontSize="10">
                      invoke CPWD Cl. 7/9
                    </text>
                    <text x="14" y="136" fill="#94A3B8" fontSize="10">
                      or FIDIC 14.3 timelines.
                    </text>
                  </g>

                  {/* Arrow 1 -> 2 */}
                  <line
                    x1="180"
                    y1="105"
                    x2="205"
                    y2="105"
                    stroke="#DC2626"
                    strokeWidth="2.5"
                    markerEnd="url(#arrow)"
                  />

                  {/* Step 2 */}
                  <g transform="translate(210, 20)">
                    <rect
                      width="165"
                      height="170"
                      rx="12"
                      fill="url(#boxGradSlate)"
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                    <circle cx="28" cy="28" r="14" fill="#DC2626" />
                    <text x="28" y="33" fill="#FFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      2
                    </text>
                    <text x="50" y="32" fill="#F87171" fontSize="11" fontWeight="bold">
                      STAGE 02
                    </text>
                    <text x="14" y="65" fill="#FFF" fontSize="13" fontWeight="bold">
                      Unilateral Recording
                    </text>
                    <text x="14" y="88" fill="#94A3B8" fontSize="10">
                      If PMC defaults, seal
                    </text>
                    <text x="14" y="104" fill="#94A3B8" fontSize="10">
                      measurements with
                    </text>
                    <text x="14" y="120" fill="#94A3B8" fontSize="10">
                      Chartered Engineer,
                    </text>
                    <text x="14" y="136" fill="#94A3B8" fontSize="10">
                      Pour Cards &amp; RFI logs.
                    </text>
                  </g>

                  {/* Arrow 2 -> 3 */}
                  <line
                    x1="380"
                    y1="105"
                    x2="405"
                    y2="105"
                    stroke="#DC2626"
                    strokeWidth="2.5"
                    markerEnd="url(#arrow)"
                  />

                  {/* Step 3 */}
                  <g transform="translate(410, 20)">
                    <rect
                      width="165"
                      height="170"
                      rx="12"
                      fill="url(#boxGradSlate)"
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                    <circle cx="28" cy="28" r="14" fill="#DC2626" />
                    <text x="28" y="33" fill="#FFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      3
                    </text>
                    <text x="50" y="32" fill="#F87171" fontSize="11" fontWeight="bold">
                      STAGE 03
                    </text>
                    <text x="14" y="65" fill="#FFF" fontSize="13" fontWeight="bold">
                      Deemed Certification
                    </text>
                    <text x="14" y="88" fill="#94A3B8" fontSize="10">
                      Issue formal demand;
                    </text>
                    <text x="14" y="104" fill="#94A3B8" fontSize="10">
                      bill deemed accepted;
                    </text>
                    <text x="14" y="120" fill="#94A3B8" fontSize="10">
                      warn of work suspension
                    </text>
                    <text x="14" y="136" fill="#94A3B8" fontSize="10">
                      under Sec 53/54 (No LD).
                    </text>
                  </g>

                  {/* Arrow 3 -> 4 */}
                  <line
                    x1="580"
                    y1="105"
                    x2="605"
                    y2="105"
                    stroke="#DC2626"
                    strokeWidth="2.5"
                    markerEnd="url(#arrow)"
                  />

                  {/* Step 4 */}
                  <g transform="translate(610, 20)">
                    <rect
                      width="165"
                      height="170"
                      rx="12"
                      fill="url(#boxGradSlate)"
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                    <circle cx="28" cy="28" r="14" fill="#DC2626" />
                    <text x="28" y="33" fill="#FFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      4
                    </text>
                    <text x="50" y="32" fill="#F87171" fontSize="11" fontWeight="bold">
                      STAGE 04
                    </text>
                    <text x="14" y="65" fill="#FFF" fontSize="13" fontWeight="bold">
                      Duress Repudiation
                    </text>
                    <text x="14" y="88" fill="#94A3B8" fontSize="10">
                      If forced into NDC,
                    </text>
                    <text x="14" y="104" fill="#94A3B8" fontSize="10">
                      dispatch 48-hr notice
                    </text>
                    <text x="14" y="120" fill="#94A3B8" fontSize="10">
                      under Ambica/Kalathia
                    </text>
                    <text x="14" y="136" fill="#94A3B8" fontSize="10">
                      citing economic duress.
                    </text>
                  </g>

                  {/* Arrow 4 -> 5 */}
                  <line
                    x1="780"
                    y1="105"
                    x2="805"
                    y2="105"
                    stroke="#DC2626"
                    strokeWidth="2.5"
                    markerEnd="url(#arrow)"
                  />

                  {/* Step 5 */}
                  <g transform="translate(810, 20)">
                    <rect
                      width="140"
                      height="170"
                      rx="12"
                      fill="url(#boxGradRed)"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                    />
                    <circle cx="28" cy="28" r="14" fill="#FFF" />
                    <text x="28" y="33" fill="#DC2626" fontSize="12" fontWeight="bold" textAnchor="middle">
                      5
                    </text>
                    <text x="50" y="32" fill="#FECACA" fontSize="11" fontWeight="bold">
                      STAGE 05
                    </text>
                    <text x="14" y="65" fill="#FFF" fontSize="13" fontWeight="bold">
                      Arbitration &amp; Stay
                    </text>
                    <text x="14" y="88" fill="#FEE2E2" fontSize="10">
                      Invoke Section 21;
                    </text>
                    <text x="14" y="104" fill="#FEE2E2" fontSize="10">
                      file Section 9 for
                    </text>
                    <text x="14" y="120" fill="#FEE2E2" fontSize="10">
                      PBG stay; claim
                    </text>
                    <text x="14" y="136" fill="#FEE2E2" fontSize="10">
                      18% interest &amp; idling.
                    </text>
                  </g>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <span className="text-xs font-bold text-red-400 uppercase">
                      Stage 01 &bull; 7-Day Joint Measurement Notice
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Serve formal notice calling upon the PMC/QS to attend site measurement under CPWD Clause 7/9 or FIDIC Sub-Clause 14.3.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <span className="text-xs font-bold text-red-400 uppercase">
                      Stage 02 &bull; Unilateral Recording &amp; Seal
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Upon PMC default, record quantities unilaterally with an independent Chartered Engineer, backed by signed Pour Cards and RFI logs.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <span className="text-xs font-bold text-red-400 uppercase">
                      Stage 03 &bull; Deemed Certification Demand
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Issue commercial demand notice; declare bill deemed approved; notify right to suspend work under Contract Act Section 53/54 without LD.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                      4
                    </span>
                    <span className="text-xs font-bold text-red-400 uppercase">
                      Stage 04 &bull; Duress Repudiation Notice
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    If forced into signing an NDC to release admitted dues, issue a 48-hour advocate notice under <em>Ambica Construction</em> and <em>Kalathia</em>.
                  </p>
                </div>
                <div className="bg-[#DC2626] text-white p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-white text-[#DC2626] text-xs font-bold flex items-center justify-center">
                      5
                    </span>
                    <span className="text-xs font-bold text-white uppercase">
                      Stage 05 &bull; Section 21 Arbitration &amp; PBG Injunction
                    </span>
                  </div>
                  <p className="text-xs text-red-100">
                    Invoke arbitration under Section 21, file Section 9 petition for interim protection against PBG encashment, and claim 18% commercial interest.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Practical Scenarios
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Four Real-World Commercial Scenarios Faced by Civil Contractors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Select a scenario below to explore specific contractual failure modes, statutory legal grounds, and advocate-vetted action steps:
              </p>
              <UncertifiedRABillScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Interest Ledger */}
            <section
              id="heading-financial-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Financial Proof
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Worked Financial Ledger: Uncertified RA Bill and Interest Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Consider an illustrative commercial contract executed by an MEP and civil contractor for a commercial IT park in Bengaluru. The developer&rsquo;s PMC stonewalled certification on RA Bill No. 14 and coerced a partial No-Claim Certificate during Final Bill clearance:
              </p>

              {/* Financial Calculation Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                      Case Ledger No. LR-EPC-2026-090
                    </span>
                    <p className="text-base sm:text-lg font-black text-white mt-1">
                      Commercial Claim Quantification Breakdown
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Recoverable Under Arbitral Award
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">1. Uncertified RA Bill No. 14 (Base Structural Items)</span>
                    <span className="font-mono font-bold text-slate-100">&rupee;84,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">2. Extra-Item Variations (M35 Grade Concrete &amp; Rock Excavation per Sec 70)</span>
                    <span className="font-mono font-bold text-slate-100">&rupee;42,80,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">3. Statutory Price Escalation (WPI Cement &amp; TMT Steel Slabs)</span>
                    <span className="font-mono font-bold text-slate-100">&rupee;26,40,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">4. Idling Machinery, Tower Crane &amp; Scaffolding Charges (54 Days Suspension)</span>
                    <span className="font-mono font-bold text-slate-100">&rupee;18,90,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">5. Withheld Retention Money (DLP Concluded Without Notified Snags)</span>
                    <span className="font-mono font-bold text-slate-100">&rupee;35,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80 bg-red-950/40 px-3 rounded-lg">
                    <span className="text-red-300">Less: Coerced Part-Payment Received on Disputed Final Bill</span>
                    <span className="font-mono font-bold text-red-400">(&minus;&rupee;60,00,000)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700 font-bold">
                    <span className="text-slate-200">Total Net Principal Balance Outstanding</span>
                    <span className="font-mono text-emerald-400">&rupee;1,47,60,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-400">Pre-Reference &amp; Pendent Lite Interest @ 18% p.a. (14 Months)</span>
                    <span className="font-mono font-bold text-amber-400">&rupee;30,99,600</span>
                  </div>
                  <div className="flex justify-between pt-3 text-sm sm:text-base font-black">
                    <span className="text-white">Total Enforceable Commercial Recovery Claim</span>
                    <span className="font-mono text-emerald-400 text-lg sm:text-xl">
                      &rupee;1,78,59,600
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm leading-relaxed">
                <strong>Strategic Takeaway:</strong> Under Supreme Court precedents, when the employer withholds admitted principal payments to extract an unconditional waiver, the contractor recovers not merely the unpaid balance of ₹1.47 Crore, but also statutory 18% interest under the Commercial Courts Act, 2015, and idling machinery costs incurred during the lawful suspension period. Use our interactive{" "}
                <Link
                  href="/tools/construction-retention-dlp-escalation-claim-calculator"
                  className="font-bold underline text-emerald-950"
                >
                  Construction Retention &amp; Escalation Claim Calculator
                </Link>{" "}
                to compute exact interest amounts for your pending bill portfolio.
              </div>
            </section>

            {/* Section 7: Supreme Court Precedents */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Critical Court Rulings on Measurement Stalling and Economic Duress
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Indian courts consistently protect contractors against institutional bad faith, unilateral bill slashing, and coerced settlement waivers:
              </p>

              <div className="space-y-6">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50 border-l-4 border-[#DC2626] border-y border-r border-slate-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                        {item.citation}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">{item.date}</span>
                    </div>
                    <p className="text-base sm:text-lg font-black text-slate-900 mb-2">
                      {item.title}
                    </p>
                    <p className="text-xs font-semibold text-slate-600 mb-3 italic">
                      Parties: {item.parties}
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                      <p>
                        <strong>Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong>Supreme Court Holding:</strong> {item.holding}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        {item.amount}
                      </span>
                      <span className="text-xs text-slate-600 font-medium">
                        <strong>Rule:</strong> {item.takeaway}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Debtor Excuses Refuted */}
            <section
              id="heading-debtor-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pre-Empting Defenses
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Debtor Excuses Refuted: Overcoming PMC Billing Hurdles
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Developers and government departments raise predictable standard defenses when confronted with demand notices for uncertified Running Account bills. Here is how Indian law refutes each:
                </p>

                <div className="space-y-4 not-prose my-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-red-700 mb-1">
                      Excuse 1: &ldquo;The contract states that no bill is payable unless certified by the Architect/PMC.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Statutory Refutation:</strong> The certification power of an Engineer or PMC is held in a quasi-judicial capacity, requiring impartiality and adherence to contractual time limits. If the PMC acts at the behest of the developer to withhold certification, the condition precedent is dispensed with. The Supreme Court in <em>Northern Railway v. Sarvesh Chopra</em> affirmed that an employer cannot take advantage of an architect&rsquo;s wrongful non-certification to withhold earned monies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-red-700 mb-1">
                      Excuse 2: &ldquo;You stopped work; therefore, we are terminating the contract and forfeiting your Bank Guarantee.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Statutory Refutation:</strong> Under Section 54 of the Contract Act, when a party who fails to perform a prior reciprocal promise (such as financing certified monthly work) attempts to hold the other party in default, the defaulting party cannot claim performance. The contractor&rsquo;s suspension is a direct consequence of the employer&rsquo;s breach. Injunctions against PBG invocation are readily granted by Commercial Courts under Section 9 of the Arbitration Act under the &lsquo;special equities&rsquo; doctrine.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-red-700 mb-1">
                      Excuse 3: &ldquo;You executed extra items without an approved written Variation Order from the Managing Director.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Statutory Refutation:</strong> Under Section 70 of the Indian Contract Act, compensation is mandatory where non-gratuitous benefits are accepted. If structural modifications were inspected by site engineers, logged in Daily Progress Reports, and incorporated into the permanent structure, the employer is statutorily bound to pay fair market rates regardless of procedural omissions in issuing formal variation paperwork.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-red-700 mb-1">
                      Excuse 4: &ldquo;We are levying 10% Liquidated Damages (LD) for project milestone delays.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Statutory Refutation:</strong> Liquidated damages cannot be levied without proving employer-caused hindrances were absent. Under the Supreme Court ruling in <em>Kailash Nath Associates v. DDA</em> (2015) 4 SCC 136, LD under Section 74 is compensatory, not penal; an employer who contributed to delays (late drawing approvals, delayed site handover, or payment freezes) cannot enforce LD. The Hindrance Register serves as conclusive evidence in favor of the contractor.
                    </p>
                  </div>
                </div>

                <p>
                  If you are working as a subcontractor whose principal contractor is citing &lsquo;Pay-When-Paid&rsquo; excuses, read our focused guide on{" "}
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Subcontractor Payment Recovery &amp; Defeating Pay-When-Paid Clauses
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 9: Evidence & BSA Section 63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Evidence Mastery
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Evidentiary Checklist Under Section 63 of Bharatiya Sakshya Adhiniyam
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In construction disputes, contemporaneous documentary and electronic evidence determines the outcome. Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> (replacing Section 65B of the Indian Evidence Act, 1872), electronic records—including email correspondence, site WhatsApp instructions, electronic ERP submittals, and timestamped digital photos—are fully admissible when supported by a statutory certificate:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-2">
                      Primary Construction Site Records
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Joint Measurement Sheets (JMS) &amp; Measurement Book (MB) copies.</li>
                      <li>Daily Progress Reports (DPRs) counter-signed by Resident Engineers.</li>
                      <li>Site Hindrance Register showing employer-caused bottlenecks.</li>
                      <li>Request for Inspection (RFI) logs and signed Concrete Pour Cards.</li>
                      <li>Material test certificates, RMC batch slips, and cube test logs.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs sm:text-sm text-slate-900 mb-2">
                      Electronic Evidence &amp; Financial Trails (BSA s.63)
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Timestamped site photos showing extra structural execution.</li>
                      <li>Email trails notifying the PMC of joint measurement dates.</li>
                      <li>WhatsApp messages and site group instructions from the PMC.</li>
                      <li>GST Portal 2B filings confirming tax credit availed by employer.</li>
                      <li>Form 26AS TDS certificates acknowledging contract billing values.</li>
                    </ul>
                  </div>
                </div>

                <p>
                  Having this documentation audited and drafted into a formal notice before initiating arbitration creates overwhelming settlement pressure. Use our specialized{" "}
                  <Link
                    href="/templates/construction-ra-bill-retention-money-arbitration-notice"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Construction RA Bill &amp; Retention Arbitration Notice Template
                  </Link>{" "}
                  to assemble your claim dossier.
                </p>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Contractor Q&amp;A
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Frequently Asked Questions on Unpaid Contractor RA Bills
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Expert answers addressing measurement stonewalling, economic duress, Bank Guarantee defense, and arbitral remedies:
              </p>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-colors open:bg-white open:shadow-xs"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-xs sm:text-sm md:text-base text-slate-900 pr-2">
                      <span className="flex items-center gap-2">
                        <span className="text-[#DC2626] font-mono text-xs">Q{idx + 1}.</span>
                        {faq.question}
                      </span>
                      <span className="text-[#DC2626] group-open:rotate-180 transition-transform text-xs shrink-0 ml-2">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources & Standard Works Contracts */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Statutory References, Works Contracts and Legal Framework
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-3">
                <p>
                  Every legal claim drafted by LegalRecovery.in relies upon verified bare-act statutes, central works manuals, and binding Supreme Court precedents:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li>
                    <strong>Indian Contract Act, 1872:</strong> Sections 15 &amp; 19 (Coercion and Voidability), Sections 51, 52, 53 &amp; 54 (Reciprocal Promises &amp; Performance Prevention), Section 70 (Obligation for Non-Gratuitous Benefits), and Section 73 (Compensation for Breach).
                  </li>
                  <li>
                    <strong>Commercial Courts Act, 2015:</strong> Section 2(1)(c)(vi) (Construction &amp; Infrastructure Contracts Designated as Commercial Disputes) &amp; Section 12A (Pre-Institution Mediation with Urgent Interim Relief Exceptions).
                  </li>
                  <li>
                    <strong>Arbitration &amp; Conciliation Act, 1996:</strong> Section 9 (Interim Injunctions &amp; Bank Guarantee Protection), Section 11 (Appointment of Arbitrator), Section 21 (Notice Invoking Arbitration Stopping Limitation), and Section 36 (Execution of Arbitral Awards).
                  </li>
                  <li>
                    <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA):</strong> Section 63 (Admissibility of Electronic Records, Emails, WhatsApp Logs &amp; Site Photos).
                  </li>
                  <li>
                    <strong>Central &amp; Standard Works Manuals:</strong> CPWD Works Manual 2019 (Clauses 7, 8, 9 &amp; 10B/10C), MES General Conditions of Contract, and FIDIC Red Book (Sub-Clauses 14.3, 14.6 &amp; 16.1 Contractor&rsquo;s Right to Suspend Work).
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                  Reviewed and verified by <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}. For sister guides in this vertical, consult our analysis of{" "}
                  <Link
                    href="/retention-money-recovery-after-defect-liability-period-dlp-expiry"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Post-DLP Retention Money Recovery
                  </Link>
                  ,{" "}
                  <Link
                    href="/works-contract-excluded-from-msme-samadhaan-contractor-alternatives"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Works Contracts Excluded from MSME Samadhaan
                  </Link>
                  , and{" "}
                  <Link
                    href="/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    NHAI, CPWD, PWD &amp; Railway Tender Payment Recovery
                  </Link>
                  .
                </div>
              </div>
            </section>

            {/* Dual B2B Conversion Funnel CTA Component */}
            <div className="pt-4">
              <UncertifiedRABillRecoveryCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
