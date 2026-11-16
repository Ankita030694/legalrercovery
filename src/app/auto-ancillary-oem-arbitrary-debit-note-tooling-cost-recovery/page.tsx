import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AutoAncillaryRecoveryTableOfContents from "./AutoAncillaryRecoveryTableOfContents";
import AutoAncillaryScenarioTabs from "./AutoAncillaryScenarioTabs";
import AutoAncillaryRecoveryCTA from "./AutoAncillaryRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery";
const EXACT_H1 =
  "Recovering Unamortized Die/Tooling Investments & Arbitrary Retrospective Debit Notes for Auto-Ancillary & Component Suppliers";
const META_TITLE = "Auto-Ancillary Recovery: OEM Debit Notes & Tooling Dues";
const META_DESCRIPTION =
  "Invested in custom dies or facing unilateral OEM debit notes? Recover unamortized tooling capital & disputed deductions under MSMED Act & Contract Act.";

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
        alt: formatAltText("Auto Ancillary OEM Debit Note and Tooling Recovery"),
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
    remedy: "Bailee's Particular Lien on Dies & Moulds",
    statute: "Indian Contract Act, 1872 (Section 170)",
    timing: "Immediate upon OEM payment default or refusal to reimburse tooling costs",
    mechanism:
      "Exercise lawful physical detention of buyer-owned or custom-developed dies, moulds, jigs, and fixtures where vendor skill, machining, or refurbishment labour was expended.",
    relief:
      "Prevents OEM from shifting tooling to competing vendors; forces upfront settlement before asset release; complete defense against police or civil replevin claims.",
    suitability:
      "Tooling developed or maintained at the supplier's facility where OEM refuses to clear tooling invoices or amortized capital balances.",
    tone: "emerald",
  },
  {
    remedy: "Promissory Estoppel on Unamortized Tooling Capital",
    statute: "Indian Contract Act, 1872 (Section 73) & Equity Doctrine",
    timing: "Triggered when OEM slashes production volume or cancels vehicle platform mid-cycle",
    mechanism:
      "Enforce capital expenditure incurred on the faith of the OEM's commercial volume commitments, Letters of Intent (LOI), or piece-rate amortization schedules.",
    relief:
      "Converts stranded tooling CAPEX into a matured commercial debt; entitles supplier to 100% reimbursement of unrecovered amortization capital plus interest.",
    suitability:
      "Forging dies, injection moulds, stamping tooling, and dedicated casting patterns developed for specific OEM automotive platforms.",
    tone: "slate",
  },
  {
    remedy: "MSMED Act Statutory 3x RBI Compound Interest",
    statute: "MSMED Act, 2006 (Sections 15–18) & Samadhaan / ODR",
    timing: "Day 46 post-delivery of component batches or tooling milestone billing",
    mechanism:
      "Filing before State Micro and Small Enterprises Facilitation Council (MSEFC) or online ODR portal for manufacturing suppliers holding active Udyam registration.",
    relief:
      "Mandatory monthly compounding interest at 3 times RBI Bank Rate; overrides conflicting 90–120 day payment terms in OEM standard purchasing manuals.",
    suitability:
      "Udyam-registered auto-ancillary Tier-1, Tier-2, and Tier-3 suppliers facing unilateral debit deductions or delayed component invoices.",
    tone: "emerald",
  },
  {
    remedy: "Deemed Acceptance Bar Against Belated Batch Rejection",
    statute: "Sale of Goods Act, 1930 (Sections 41 & 42)",
    timing: "Immediate upon OEM consumption of parts or expiration of reasonable inspection window",
    mechanism:
      "Demonstrate that integrating component parts into vehicle assembly lines constitutes an act inconsistent with the seller's ownership, establishing deemed acceptance.",
    relief:
      "Extinguishes OEM's statutory right to reject consumed parts; limits buyer remedies strictly to proven breach of warranty without withholding invoice prices.",
    suitability:
      "Component batches delivered under approved PPAP Level 3/4 and consumed in commercial automotive production.",
    tone: "slate",
  },
  {
    remedy: "Section 43B(h) Corporate Income Tax Disallowance Notice",
    statute: "Income Tax Act, 1961 (Section 43B(h))",
    timing: "Prior to March 31 fiscal year-end or during Q3/Q4 tax advance estimates",
    mechanism:
      "Serve statutory notice on OEM's CFO, Company Secretary, and Statutory Auditors warning of tax deduction disallowance on overdue supplier liabilities.",
    relief:
      "Direct tax liability increases on OEM's audited balance sheet, creating urgent board-level incentive to release withheld vendor debit deductions.",
    suitability:
      "Listed auto manufacturers, Tier-1 multinational conglomerates, and commercial vehicle OEMs withholding vendor payments.",
    tone: "emerald",
  },
];

const PREEMPTION_MATRIX = [
  {
    excuse: "“Our standard Vendor Manual allows us to issue unilateral debit notes for line stoppages and warranty failures without vendor consent.”",
    statutoryShield: "Indian Contract Act, 1872 (ss. 73–74) & Principle of Natural Justice",
    counterMeasure:
      "Under settled Indian contract law (*Kailash Nath Associates v. DDA*), a contracting party cannot unilaterally assess and deduct liquidated damages without establishing proof of actual financial loss and proving that the breach was solely attributable to the supplier. A buyer cannot act as judge in its own cause. Furthermore, standard supplier manual clauses that bypass dispute resolution are unconscionable and unenforceable under Section 23 of the Contract Act.",
  },
  {
    excuse: "“The dies belong to our company; hand them over immediately or we will lodge a police complaint for criminal breach of trust.”",
    statutoryShield: "Indian Contract Act, 1872 (Section 170) Statutory Bailee Lien",
    counterMeasure:
      "Under Section 170 of the Indian Contract Act, a bailee who has expended labour and skill in producing or improving goods possesses a statutory particular lien to retain physical possession until remuneration is fully paid. Retention of tooling under a valid statutory lien is a civil right, not criminal misappropriation or theft under Bharatiya Nyaya Sanhita (BNS) 2023. Inform local police authorities in writing of the civil statutory lien to preempt frivolous complaints.",
  },
  {
    excuse: "“If you challenge this debit note or file on MSME Samadhaan, we will block your vendor code and terminate all upcoming vehicle programs.”",
    statutoryShield: "Commercial Courts Act, 2015 (Section 9) & Economic Coercion Bar (ICA s.15)",
    counterMeasure:
      "Threatening vendor code deactivation to coerce acceptance of unauthorized debit notes constitutes economic coercion and tortious interference with business. Ancillary suppliers can approach the Commercial Court under Section 9 of the Commercial Courts Act or Section 9 of the Arbitration Act for urgent interim injunctions restraining the OEM from delisting the vendor or revoking approved PPAP codes during ongoing dispute resolution.",
  },
  {
    excuse: "“Tooling amortization was tied to vehicle sales; market volume dropped, so unamortized tooling capital is an ordinary business risk you must absorb.”",
    statutoryShield: "Doctrine of Promissory Estoppel & Breach of Commercial Representation",
    counterMeasure:
      "When a supplier incurs non-recoverable CAPEX for bespoke dies based on the OEM's explicit Letter of Intent (LOI) or projected production volume schedules, the OEM is bound by the Doctrine of Promissory Estoppel. The OEM cannot induce a capital investment with volume representations and then repudiate the unamortized capital when its own vehicle platform underperforms in the market. The unpaid balance matures into a recoverable debt under Section 73.",
  },
];

const FAQS = [
  {
    question:
      "Can an auto OEM unilaterally issue debit notes for line stoppage or assembly downtime?",
    answer:
      "No. Under Sections 73 and 74 of the Indian Contract Act, 1872, compensation for breach or downtime cannot be quantified and deducted unilaterally. The OEM must prove that: (1) an actual assembly stoppage occurred, (2) the stoppage was caused exclusively by the vendor's defective component and not by OEM assembly error or logistics failure, and (3) the quantified financial loss represents genuine damages. Unilateral debit notes issued without joint technical investigation (8D analysis) and bilateral written agreement are legally void and constitute unauthorized deductions under Section 15 of the MSMED Act, 2006.",
  },
  {
    question:
      "What is a Bailee's Particular Lien under Section 170 of the Indian Contract Act, and how does it protect auto component suppliers?",
    answer:
      "Under Section 170 of the Indian Contract Act, 1872, any bailee who has rendered service involving the exercise of labour or skill in respect of goods bailed has a statutory right to retain such goods until receiving due remuneration for those services. For auto-ancillary units, if you developed, modified, maintained, or refurbished stamping dies, casting patterns, or injection moulds, you hold a statutory particular lien over those physical assets. You are legally entitled to retain physical custody of the dies until the OEM clears all outstanding tooling balances and unamortized capital.",
  },
  {
    question:
      "Can the OEM lodge a police complaint against our factory for withholding their dies?",
    answer:
      "No, provided you have formally served a Section 170 Bailee Lien Notice. Exercising a statutory civil lien under the Indian Contract Act does not constitute criminal breach of trust (Section 316 BNS 2023) or theft. It is an exercise of a recognized civil security right over goods in your lawful custody. When withholding tooling, the supplier should immediately send a formal intimation to the OEM and copy the local police station and jurisdictional Commercial Court, confirming that the assets are retained under a statutory lien pending settlement of commercial dues.",
  },
  {
    question:
      "How do we recover unamortized tooling and die costs if the OEM abruptly slashes production volume?",
    answer:
      "When an auto manufacturer issues a Letter of Intent (LOI) or Purchase Order projecting a specific volume (e.g., 200,000 units over 3 years) with die costs amortized into a per-piece price, the OEM makes an enforceable commercial representation. If the OEM drops volumes by 80% or cancels the vehicle model, the supplier can invoke the Doctrine of Promissory Estoppel and Section 73 of the Indian Contract Act. The unamortized portion of the tooling investment (Total Tooling Cost minus Amortized Revenue Received) converts into a direct liquidated damages claim recoverable through MSME Samadhaan or a Commercial Court suit.",
  },
  {
    question:
      "Does the OEM's consumption of PPAP Level 3 approved parts extinguish their right of rejection?",
    answer:
      "Yes. Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted goods when they perform any act in relation to them inconsistent with the seller's ownership. Once the OEM's inbound quality checks accept the component batch and the plant feeds those parts into commercial vehicle assembly, the OEM has exercised ownership and irrevocably accepted the goods. Under Section 59, the OEM is barred from rejecting the batch retrospectively; any subsequent claim is strictly restricted to proving warranty damages, and cannot justify withholding invoice payments.",
  },
  {
    question:
      "How can an ancillary supplier counter an OEM's threat to block their vendor code?",
    answer:
      "Threatening to deactivate a vendor code or delist a supplier in retaliation for disputing an arbitrary debit note constitutes unlawful economic coercion under Section 15 of the Indian Contract Act. Suppliers can immediately file an urgent application under Section 9 of the Commercial Courts Act, 2015 or Section 9 of the Arbitration and Conciliation Act, 1996 seeking an interim mandatory injunction restraining the OEM from blacklisting, terminating vendor codes, or canceling active purchase orders pending adjudication.",
  },
  {
    question:
      "How does Section 43B(h) of the Income Tax Act help auto component suppliers recover disputed deductions?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any sum owed by a corporate buyer to a Micro or Small enterprise beyond the 45-day statutory window under the MSMED Act is disallowed as a business expense in the financial year. If an OEM unilaterally withholds payments via arbitrary debit notes past March 31, that unpaid sum is added back to the OEM's taxable profit, subjecting them to corporate tax plus interest. Serving a Section 43B(h) tax disallowance notice to the OEM's Chief Financial Officer creates powerful fiscal urgency to reconcile and reverse improper debit notes.",
  },
  {
    question:
      "Can Tier-2 and Tier-3 suppliers file on MSME Samadhaan against Tier-1 vendors or only against OEMs?",
    answer:
      "MSMED Act Sections 15–18 apply equally to any commercial buyer, regardless of whether they are a Tier-1 vendor, Tier-2 supplier, or original vehicle manufacturer. If you are an Udyam-registered Micro or Small enterprise providing machining, forging, stamping, or surface coating to a Tier-1 auto supplier, you have the full statutory right to file a delayed payment reference before the State MSEFC against the Tier-1 buyer. You are entitled to 3 times the RBI Bank Rate compounded monthly from Day 46 onwards.",
  },
];

export default function AutoAncillaryRecoveryPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    image: `${SITE_URL}/blog_money_recovery.png`,
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
    datePublished: "2026-11-16T08:00:00+05:30",
    dateModified: "2026-11-16T08:00:00+05:30",
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Statutory Protocol for Auto-Ancillary OEM Debit Notes & Tooling Dues",
    description:
      "A step-by-step creditor recovery SOP for automotive component, forging, stamping, casting, and moulding suppliers to repudiate arbitrary OEM debit notes, assert Section 170 tooling liens, and recover unamortized die capital under Indian commercial law.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Serve 7-Day Debit Note Repudiation Notice",
        text: "Issue formal legal repudiation of unilateral line-stoppage or warranty debit notes within 7 days, denying liability and objecting to unauthorized ERP ledger set-offs.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Audit & Quantify Unamortized Tooling Capital",
        text: "Compile LOIs, RFQs, tooling purchase orders, tool-room fabrication invoices, and PPAP approvals to calculate unrecovered amortization balances under Promissory Estoppel.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Execute Section 170 Bailee's Particular Lien",
        text: "Serve formal notice exercising physical detention of buyer-owned dies, moulds, and fixtures developed or maintained with vendor labour until dues are cleared.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Issue CFO Section 43B(h) Corporate Tax Warning",
        text: "Deliver statutory intimation to the OEM's CFO and statutory auditors warning of income tax disallowances on overdue vendor liabilities past the 45-day statutory limit.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File MSME Samadhaan Reference or Commercial Summary Suit",
        text: "Initiate statutory conciliation and arbitration before the State MSEFC for Micro/Small units, or file an Order XXXVII CPC Summary Suit in Commercial Court.",
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
        name: "Manufacturing & Machinery OEM Recovery",
        item: `${SITE_URL}/industries/manufacturing-machinery-oem-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Auto-Ancillary OEM Debit Note & Tooling Recovery",
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

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Contract Act s.170 Bailee Lien</span>
            <span className="text-slate-400">&bull;</span>
            <span>Promissory Estoppel</span>
            <span className="text-slate-400">&bull;</span>
            <span className="text-slate-300">IND-06 §6.6</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Creditor Legal Defense
            </span>
            Under Section 170 of the Indian Contract Act, 1872, auto-ancillary manufacturers hold a statutory Bailee Particular Lien over customer-owned dies and moulds developed or maintained with vendor labour, lawfully retaining possession until all unamortized tooling capital and disputed deductions are paid. As part of our comprehensive{" "}
            <Link
              href="/industries/manufacturing-machinery-oem-recovery"
              className="text-red-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              Manufacturing &amp; Industrial Machinery OEM Recovery Hub
            </Link>
            , this playbook provides component suppliers across Chakan, Manesar, Sriperumbudur, Sanand, Hosur, and Jamshedpur with the operational framework to repudiate unilateral line-stoppage debit notes, enforce Promissory Estoppel under Section 73, and secure MSMED 3x RBI compound penal interest.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                s.170 Bailee Lien
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
                Statutory Right
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                Lawful physical retention of dies
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Debit Note Window
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100 mt-1">
                7 Days
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                Preempts implied consent
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                MSMED Penal Interest
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400 mt-1">
                3x RBI Rate
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                Compounded monthly (s.16)
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Commercial Summary
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400 mt-1">
                Order XXXVII
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                10-day conditional summons
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Manufacturing & Machinery OEM Recovery",
                href: "/industries/manufacturing-machinery-oem-recovery",
              },
              {
                label: "Auto-Ancillary OEM Debit Note & Tooling Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <AutoAncillaryRecoveryTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Trap */}
            <section
              id="heading-oem-arbitrary-debit-notes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  01
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Commercial Power Asymmetry in Auto Clusters
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                The Auto-Ancillary Debit Note &amp; Tooling Holdback Trap
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Across India&apos;s primary automotive manufacturing hubs—Chakan–Talegaon, Gurgaon–Manesar, Sriperumbudur–Oragadam, Sanand, Hosur, and Jamshedpur—auto-ancillary forging, sheet-metal stamping, plastic injection-moulding, and precision machining vendors operate under severe commercial asymmetry. Tier-1 conglomerates and original equipment manufacturers (OEMs) routinely impose unilateral financial deductions, weaponizing their purchasing power and the implicit threat of vendor code blacklisting.
                </p>
                <p>
                  This institutional exploitation typically manifests in two predatory patterns. First, OEMs issue retrospective debit notes for alleged &ldquo;assembly line stoppages,&rdquo; &ldquo;field warranty claims,&rdquo; or &ldquo;raw-material indexing corrections&rdquo; without granting the vendor access to joint dimensional failure analysis (8D audits) or metallurgical testing. The OEM&apos;s finance desk simply deducts ₹15 Lakh to ₹50 Lakh directly from approved running payment cycles, leaving the supplier with no immediate operational recourse.
                </p>
                <p>
                  Second, auto manufacturers induce component makers to invest between ₹35 Lakh and ₹1.50 Crore in dedicated dies, moulds, jigs, and fixtures based on Letters of Intent (LOI) projecting three-to-five-year vehicle volumes. Tooling costs are amortized at a nominal ₹4.00 to ₹12.00 per component. When vehicle sales stumble or the OEM prematurely axes the vehicle platform, production is abruptly halted. The OEM refuses to reimburse the unamortized tooling capital, yet aggressively demands the immediate return of the physical dies, threatening criminal breach of trust proceedings if the supplier withholds the tooling.
                </p>
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="font-bold text-[#DC2626] text-xs sm:text-sm mb-1">
                    The Legal Reality for Component Makers:
                  </p>
                  <p className="text-slate-700 text-xs sm:text-sm m-0">
                    Unilateral debit notes and stranded tooling investments are not unavoidable manufacturing overhead. Under the Indian Contract Act, 1872 and the MSMED Act, 2006, unilateral deductions without mutual agreement are legally invalid debts. Furthermore, component suppliers possess a formidable statutory weapon: a Bailee&apos;s Particular Lien under Section 170 of the Indian Contract Act over buyer-owned tooling in their physical custody.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Statutory Lien & Promissory Estoppel */}
            <section
              id="heading-statutory-lien-promissory-estoppel"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  02
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Substantive Legal Weapons
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Section 170 Bailee Lien &amp; Promissory Estoppel: Retaining Dies Lawfully
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  When an OEM defaults on component payments or refuses to settle unamortized tooling capital, the auto-ancillary unit&apos;s strongest commercial leverage is physical possession of the production dies, moulds, and fixtures. OEMs frequently bluff suppliers by claiming: <em>&ldquo;These dies are our property; withholding them is theft under Section 303 of BNS 2023.&rdquo;</em> This assertion is legally baseless.
                </p>
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                  <p className="text-xs uppercase tracking-wider text-red-400 font-bold">
                    Bare Act: Section 170 of the Indian Contract Act, 1872
                  </p>
                  <blockquote className="italic text-xs sm:text-sm text-slate-200 border-l-2 border-red-500 pl-3">
                    &ldquo;Where the bailee has, in accordance with the purpose of the bailment, rendered any service involving the exercise of labour or skill in respect of the goods bailed, he has, in the absence of a contract to the contrary, a right to retain such goods until he receives due remuneration for the services he has rendered in respect of them.&rdquo;
                  </blockquote>
                </div>
                <p>
                  In the automotive industry, stamping dies, casting patterns, and plastic injection moulds are continuously maintained, refurbished, polished, dimensionally calibrated, and aligned by the vendor&apos;s engineering personnel. Under Section 170, the expenditure of skilled labour and technical precision confers an automatic, statutory <strong>Bailee Particular Lien</strong> upon the supplier. The supplier is legally empowered to retain physical custody of the dies at its factory premises until every rupee of pending tooling development, maintenance, and unamortized investment is fully satisfied.
                </p>
                <p>
                  Simultaneously, where an OEM induces a component maker to invest substantial capital in bespoke tooling relying on projected off-take volumes in a Letter of Intent or RFQ award letter, the OEM is strictly bound by the <strong>Doctrine of Promissory Estoppel</strong> (*Motilal Padampat Sugar Mills v. State of U.P.*, (1979) 2 SCC 409). The buyer cannot make a solemn commercial representation regarding volume off-take, witness the vendor sink ₹50 Lakh into non-reusable tooling, and then walk away unscathed when vehicle sales drop. Under Section 73 of the Indian Contract Act, the supplier is entitled to full compensation for the unamortized capital as direct damages arising naturally in the usual course of things.
                </p>
                <p>
                  For component suppliers who also perform precision CNC machining, turning, or fabrication under job-work challans, see our specialized analysis on{" "}
                  <Link
                    href="/cnc-machining-fabrication-job-work-challan-payment-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    exercising statutory bailee liens for unpaid CNC job-work challans
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 3: Escalation Flowchart */}
            <section
              id="heading-escalation-flowchart"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  03
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Creditor Playbook &bull; 5-Stage Protocol
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage OEM Escalation SOP: From Repudiation to Summary Decree
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                A structured operational escalation framework designed to stop unilateral OEM deductions, freeze die removal attempts, and enforce full statutory interest.
              </p>

              {/* Hand-Authored SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 rounded-xl p-5 border border-slate-800 mb-6 overflow-x-auto">
                <svg
                  viewBox="0 0 880 200"
                  className="w-full h-auto min-w-[760px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="5-Stage Auto-Ancillary OEM Debt & Tooling Recovery Escalation Flowchart"
                >
                  {/* Step 1 */}
                  <rect x="10" y="20" width="150" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="85" cy="45" r="16" fill="#DC2626" />
                  <text x="85" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">01</text>
                  <text x="85" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">7-Day Repudiation</text>
                  <text x="85" y="102" textAnchor="middle" fill="#94A3B8" fontSize="10">Reject debit notes</text>
                  <text x="85" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">Deny ERP set-offs</text>
                  <text x="85" y="134" textAnchor="middle" fill="#94A3B8" fontSize="10">Demand 8D joint audit</text>

                  {/* Arrow 1 */}
                  <path d="M165 95 H185" stroke="#DC2626" strokeWidth="2" markerEnd="url(#red-arrow)" />

                  {/* Step 2 */}
                  <rect x="190" y="20" width="150" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="265" cy="45" r="16" fill="#334155" />
                  <text x="265" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">02</text>
                  <text x="265" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">Tooling Amortization</text>
                  <text x="265" y="102" textAnchor="middle" fill="#94A3B8" fontSize="10">Audit RFQ &amp; LOI volumes</text>
                  <text x="265" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">Quantify stuck CAPEX</text>
                  <text x="265" y="134" textAnchor="middle" fill="#94A3B8" fontSize="10">Promissory Estoppel</text>

                  {/* Arrow 2 */}
                  <path d="M345 95 H365" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="370" y="20" width="150" height="150" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <circle cx="445" cy="45" r="16" fill="#10B981" />
                  <text x="445" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">03</text>
                  <text x="445" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">s.170 Bailee Lien</text>
                  <text x="445" y="102" textAnchor="middle" fill="#94A3B8" fontSize="10">Serve formal lien notice</text>
                  <text x="445" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">Freeze die removal</text>
                  <text x="445" y="134" textAnchor="middle" fill="#94A3B8" fontSize="10">Notify local authorities</text>

                  {/* Arrow 3 */}
                  <path d="M525 95 H545" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 4 */}
                  <rect x="550" y="20" width="150" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="625" cy="45" r="16" fill="#334155" />
                  <text x="625" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">04</text>
                  <text x="625" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">Advocate Demand</text>
                  <text x="625" y="102" textAnchor="middle" fill="#94A3B8" fontSize="10">15-day statutory notice</text>
                  <text x="625" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">MSMED 3x RBI interest</text>
                  <text x="625" y="134" textAnchor="middle" fill="#94A3B8" fontSize="10">s.43B(h) CFO warning</text>

                  {/* Arrow 4 */}
                  <path d="M705 95 H725" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 5 */}
                  <rect x="730" y="20" width="140" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="800" cy="45" r="16" fill="#DC2626" />
                  <text x="800" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">05</text>
                  <text x="800" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">Judicial Decree</text>
                  <text x="800" y="102" textAnchor="middle" fill="#94A3B8" fontSize="10">MSME Samadhaan / ODR</text>
                  <text x="800" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">Order XXXVII CPC Suit</text>
                  <text x="800" y="134" textAnchor="middle" fill="#94A3B8" fontSize="10">Attachment Order XXXVIII</text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden space-y-3 mb-6">
                {[
                  {
                    step: "01",
                    title: "Serve 7-Day Repudiation Notice",
                    desc: "Formally object to line-stoppage or warranty debit notes within 7 days. Demand joint 8D metallurgical root-cause analysis.",
                    badge: "Deny Implied Consent",
                  },
                  {
                    step: "02",
                    title: "Audit Tooling Amortization Dues",
                    desc: "Reconcile RFQ, LOI, and PO volume commitments against actual off-take to establish unrecovered capital expenditure.",
                    badge: "Promissory Estoppel",
                  },
                  {
                    step: "03",
                    title: "Enforce Section 170 Bailee Lien",
                    desc: "Serve notice exercising physical retention over customer tooling, moulds, and fixtures developed or serviced by your shop.",
                    badge: "Block Asset Shifting",
                  },
                  {
                    step: "04",
                    title: "Serve 15-Day Advocate Notice",
                    desc: "Deliver statutory tri-channel demand notice invoking MSMED Act 3x RBI interest and Section 43B(h) tax disallowances.",
                    badge: "Tri-Channel Service",
                  },
                  {
                    step: "05",
                    title: "MSEFC Award or Summary Decree",
                    desc: "Initiate fast-track arbitration via MSME Samadhaan or file an Order XXXVII CPC Summary Suit in Commercial Court.",
                    badge: "Asset Attachment",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-900">{item.title}</span>
                        <span className="text-[10px] font-semibold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 m-0 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  04
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Comparative Remedy Matrix
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: Contract Act, SOGA, MSMED &amp; Tax Law
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Evaluate your substantive legal remedies against defaulting Tier-1 OEMs, comparing statutory timing, procedural mechanisms, and enforceability thresholds.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-3.5 font-bold">Remedy &amp; Statute</th>
                      <th className="p-3 sm:p-3.5 font-bold">Statutory Trigger</th>
                      <th className="p-3 sm:p-3.5 font-bold">Legal Mechanism</th>
                      <th className="p-3 sm:p-3.5 font-bold">Commercial Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-3.5 align-top">
                          <span className="font-bold text-slate-900 block">{row.remedy}</span>
                          <span className="text-[11px] text-[#DC2626] font-medium block mt-0.5">
                            {row.statute}
                          </span>
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-600 align-top leading-snug">
                          {row.timing}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-600 align-top leading-snug">
                          {row.mechanism}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-800 font-medium align-top leading-snug">
                          {row.relief}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  05
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Interactive Failure Mode Explorer
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                4 Critical Auto-Ancillary Breach Scenarios
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Explore real-world commercial failure modes experienced by automotive suppliers, along with the precise counter-arguments and statutory action protocols.
              </p>
              <AutoAncillaryScenarioTabs />
            </section>

            {/* Section 6: Worked Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  06
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Transparent Claim Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Worked Financial Recovery Ledger: Resolving a ₹63.50 Lakh OEM Dispute
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <p>
                  Consider an auto-ancillary stamping and press-tool manufacturer based in Talegaon, Pune. Against an OEM Letter of Intent for a newly launched passenger SUV model, the supplier spent ₹45,000,000 (₹45 Lakh) developing a multi-stage progressive stamping die. The contract provided for piece-rate amortization of ₹7.50 per stamping over an agreed run of 600,000 parts (₹45 Lakh total amortization).
                </p>
                <p>
                  After 10 months and only 90,000 stampings delivered (amortizing ₹6,75,000), the OEM slashed production by 90% due to poor vehicle showroom demand, leaving <strong>₹38,25,000 in unamortized tooling capital</strong>. Simultaneously, the OEM&apos;s plant issued three arbitrary debit notes totaling <strong>₹18,50,000</strong> alleging &ldquo;assembly conveyor line stoppage,&rdquo; which they deducted from current component invoices without joint quality clearance.
                </p>
              </div>

              {/* Financial Breakdown Table */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl mb-6">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-3">
                  Forensic Claim Computation &bull; MSMED s.16 Compounding Ledger
                </span>
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">Total Tooling CAPEX Incurred (Progressive Die):</span>
                    <span className="text-white font-bold">₹45,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Less: Amortized Revenue Received (90k parts @ ₹7.50):</span>
                    <span className="text-emerald-400 font-bold">&minus; ₹6,75,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 bg-slate-800/50 px-2 rounded">
                    <span className="text-slate-200 font-bold">Unamortized Tooling Capital Claim (s.73):</span>
                    <span className="text-amber-300 font-bold">₹38,25,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">Arbitrary Line-Stoppage Debit Notes Deducted:</span>
                    <span className="text-white font-bold">₹18,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">Unpaid Component Invoices Matured (&gt;45 Days):</span>
                    <span className="text-white font-bold">₹6,75,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700 bg-slate-800/80 px-2 rounded">
                    <span className="text-slate-100 font-bold">Total Principal Debt Matured:</span>
                    <span className="text-white font-black text-sm sm:text-base">₹63,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-amber-400">
                    <span>Accrued MSMED s.16 Interest (3x RBI Bank Rate ~20.25% p.a., 9 mos):</span>
                    <span className="font-bold">+ ₹10,47,150</span>
                  </div>
                  <div className="flex justify-between py-3 bg-red-950/70 border border-red-800/60 px-3 rounded-xl mt-3">
                    <span className="text-red-200 font-bold text-xs sm:text-sm">Total Actionable Legal Demand:</span>
                    <span className="text-white font-black text-base sm:text-lg">₹73,97,150</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                  <span className="text-red-400 font-bold block mb-1">Corporate Tax Exposure for the OEM:</span>
                  Under Section 43B(h) of the Income Tax Act, 1961, failure to settle the ₹25,25,000 overdue component portion prior to March 31 disallows the deduction on the OEM&apos;s tax return, creating an immediate ₹7,87,800 direct corporate income tax liability (at 31.2% corporate tax rate).
                </div>
              </div>

              <div className="text-xs text-slate-500">
                To calculate precise statutory interest on your automotive invoices and debit notes, utilize our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </div>
            </section>

            {/* Section 7: BSA Section 63 Evidence Dossier */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  07
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Forensic Admissibility
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier for Auto Component Creditors
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <p>
                  Under Section 63 of Bharatiya Sakshya Adhiniyam (BSA), 2023 (which replaced Section 65B of the Indian Evidence Act, 1872), recovering unamortized die costs and defeating unilateral debit notes requires a rigorous electronic and documentary evidentiary dossier. Commercial Courts and MSEFC tribunals demand contemporaneous proof that component parts met agreed quality benchmarks and that tooling investments were expressly induced by the buyer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      1. Part Submission Warrant (PSW) &amp; PPAP Sign-Off
                    </span>
                    <p className="text-slate-600 text-xs m-0">
                      Approved PPAP Level 3 documentation, Initial Sample Inspection Reports (ISIR), and signed PSW certificates establishing that the component design and production process were formally approved by the OEM quality department.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      2. CMM Inspection &amp; NABL Metallurgical Reports
                    </span>
                    <p className="text-slate-600 text-xs m-0">
                      Coordinate Measuring Machine (CMM) dimensional reports for each dispatch batch, along with Raw Material Test Certificates (MTRs) and third-party NABL metallurgical lab test reports proving chemical and tensile compliance.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      3. Dispatch Challans, GST e-Way Bills &amp; FASTag
                    </span>
                    <p className="text-slate-600 text-xs m-0">
                      Signed Goods Receipt Notes (GRN), security gate-entry stamped delivery challans, Part-B GST e-Way bills, and transport vehicle FASTag toll logs proving physical delivery into the OEM plant premises.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      4. Tooling Trial Run Sheets &amp; CAPEX Invoices
                    </span>
                    <p className="text-slate-600 text-xs m-0">
                      External tool-room fabrication purchase orders, tax invoices, tool steel procurement bills, machine trial inspection sheets, and joint tool sign-off protocols establishing verified upfront capital expenditure.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      5. Contemporaneous Debit Note Repudiation Emails
                    </span>
                    <p className="text-slate-600 text-xs m-0">
                      Timestamped email communications sent within 7 days of receiving unilateral debit notes, containing technical objections, 8D requests, and express refusals to accept unauthorized ledger set-offs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      6. Section 63 BSA Digital Affidavit
                    </span>
                    <p className="text-slate-600 text-xs m-0">
                      A sworn certificate signed by the vendor&apos;s IT head or commercial manager certifying the authenticity, hash integrity, and unmanipulated server origin of all ERP logs, EDI dispatches, and email correspondence.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Debtor Defense Pre-Emption Matrix */}
            <section
              id="heading-preemption-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  08
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Neutralizing Buyer Defenses
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Neutralizing OEM Purchasing Excuses: Pre-Emption Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Auto manufacturers rely on standardized boilerplate excuses to justify debit deductions and demand die surrender. Here is how statutory provisions neutralize them.
              </p>

              <div className="space-y-4">
                {PREEMPTION_MATRIX.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        &times;
                      </span>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm m-0">
                        {item.excuse}
                      </p>
                    </div>
                    <div className="ml-7 space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                        Statutory Shield: {item.statutoryShield}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 m-0 leading-relaxed">
                        {item.counterMeasure}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: 15-Day Advocate SOP */}
            <section
              id="heading-advocate-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  09
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Advocate Demand Protocol
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Serving an Advocate Demand Notice on Tier-1 OEMs
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <p>
                  Informal commercial emails and polite accounting follow-ups are routinely ignored by OEM supply-chain executives. Escalation requires serving a formal, advocate-vetted 15-Day Statutory Legal Demand Notice signed by institutional counsel.
                </p>
                <p>
                  To maximize legal efficacy, the demand notice must be dispatched via a verified <strong>Tri-Channel Protocol</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-1">
                      1. Speed Post RPAD
                    </span>
                    <p className="text-xs text-slate-600 m-0">
                      Dispatched to the registered corporate office and plant manufacturing head with postal tracking receipts retained for court filings.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-1">
                      2. Corporate Email
                    </span>
                    <p className="text-xs text-slate-600 m-0">
                      Delivered to the CFO, Chief Procurement Officer, and Statutory Auditors with full RFC 822 transport headers preserved under BSA s.63.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-1">
                      3. WhatsApp Service
                    </span>
                    <p className="text-xs text-slate-600 m-0">
                      Transmitted to authorized purchasing directors with timestamped read receipts (blue ticks) admissible under Indian procedural rules.
                    </p>
                  </div>
                </div>
                <p>
                  For an in-depth comparison of MSEFC statutory conciliation versus direct advocate demand notices, review our detailed guide on{" "}
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    MSME Samadhaan vs Legal Notice
                  </Link>
                  {" "}or explore the{" "}
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    MSME ODR Portal Delayed Payment Guide
                  </Link>
                  . For Medium enterprises excluded from the MSMED Act, refer to{" "}
                  <Link
                    href="/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Medium Enterprise Recovery Alternatives
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 10: Dual-Track CTA Component */}
            <section id="heading-cta" className="scroll-mt-28">
              <AutoAncillaryRecoveryCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  11
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Expert Counsel Answers
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions on Auto-Ancillary OEM Debt Recovery
              </h2>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 sm:p-5 transition-all duration-200 hover:border-slate-300 open:bg-slate-50/50"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-slate-900 text-xs sm:text-sm md:text-base">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 group-open:rotate-180 shrink-0 text-xs">
                        &darr;
                      </span>
                    </summary>
                    <div className="pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Precedents & Bare Acts */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                  12
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Judicial Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Authorities, Bare Acts &amp; Verified Judicial Precedents
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <p>
                  Every legal position asserted in this operational recovery guide is anchored in verified enactments of the Parliament of India and authoritative judgments of the Supreme Court of India and High Courts:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626]">
                    <span className="font-bold text-slate-900 block mb-1">
                      Kailash Nath Associates v. Delhi Development Authority, (2015) 4 SCC 136
                    </span>
                    <p className="text-xs text-slate-600 m-0">
                      The Supreme Court held that liquidated damages under Section 74 of the Indian Contract Act can only be awarded when actual loss or damage has been proven. Where loss can be assessed, the claimant cannot merely point to a contract clause and deduct arbitrary penalties without substantive financial proof.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626]">
                    <span className="font-bold text-slate-900 block mb-1">
                      Motilal Padampat Sugar Mills Co. Ltd. v. State of U.P., (1979) 2 SCC 409
                    </span>
                    <p className="text-xs text-slate-600 m-0">
                      The landmark Supreme Court ruling establishing the Doctrine of Promissory Estoppel in India. Where one party makes a clear and unequivocal representation intending to create legal relations, and the other party acts upon it by altering their position (such as sinking capital into tooling), the promisor is strictly bound by their promise.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626]">
                    <span className="font-bold text-slate-900 block mb-1">
                      Silpi Industries v. Kerala State Road Transport Corporation, 2021 SCC OnLine SC 439
                    </span>
                    <p className="text-xs text-slate-600 m-0">
                      The Supreme Court affirmed that the provisions of the MSMED Act, 2006, including Section 16 statutory compound interest and Section 18 dispute resolution, possess overriding effect over contrary contractual clauses under Section 24.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626]">
                    <span className="font-bold text-slate-900 block mb-1">
                      Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd., (2022) 10 SCC 1
                    </span>
                    <p className="text-xs text-slate-600 m-0">
                      The Supreme Court confirmed that pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 is mandatory for commercial suits, except where urgent interim relief (such as Section 9 asset freezing or die lien protection) is sought.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-2">
                    Official Statutory Portals &amp; Acts (External Citations):
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <a
                      href="https://samadhaan.msme.gov.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      MSME Samadhaan Official Portal &rarr;
                    </a>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Indian Contract Act, 1872 (India Code) &rarr;
                    </a>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2398"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Sale of Goods Act, 1930 (India Code) &rarr;
                    </a>
                    <a
                      href="https://incometaxindia.gov.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Income Tax Act Section 43B(h) Provisions &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Related Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
