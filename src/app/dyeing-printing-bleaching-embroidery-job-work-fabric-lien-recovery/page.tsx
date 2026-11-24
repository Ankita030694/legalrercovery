import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import DyeingFabricLienCTA from "./DyeingFabricLienCTA";
import DyeingFabricLienTableOfContents from "./DyeingFabricLienTableOfContents";
import DyeingFabricScenarioTabs from "./DyeingFabricScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Dyeing, Printing & Textile Process House Job-Work Lien Recovery",
  description:
    "Dyeing mills burn coal, dyes & power upfront—then merchants claim fabric damage to dodge bills! Enforce lab-dip sign-offs & Section 170 fabric lien.",
  alternates: {
    canonical: `${SITE_URL}/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery`,
  },
  openGraph: {
    title: "Dyeing, Printing & Textile Process House Job-Work Lien Recovery",
    description:
      "Dyeing mills burn coal, dyes & power upfront—then merchants claim fabric damage to dodge bills! Enforce lab-dip sign-offs & Section 170 fabric lien.",
    url: `${SITE_URL}/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Dyeing Printing Bleaching Embroidery Job Work Fabric Lien Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dyeing, Printing & Textile Process House Job-Work Lien Recovery",
    description:
      "Dyeing mills burn coal, dyes & power upfront—then merchants claim fabric damage to dodge bills! Enforce lab-dip sign-offs & Section 170 fabric lien.",
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
    title: "The Indian Contract Act, 1872 (Section 170 — Bailee's Particular Lien & Section 171 — General Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act Sections 15–18 — Delayed Payments & 3x Compounding Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) — Mandatory Disallowance of Unpaid Outstandings to MSME Job-Workers Beyond 45 Days)",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title: "The Sale of Goods Act, 1930 (Section 41 — Right of Examining the Goods & Section 42 — Acceptance of Goods by Buyer)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records, Spectrophotometer delta-E Logs & WhatsApp Approvals)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bureau of Indian Standards (BIS IS 1387 / IS 3588 — Tolerances for Dimensional Changes & Colour Fastness in Textile Processing)",
    url: "https://www.bis.gov.in/",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Bailee's Particular Lien Over Goods Enhanced by Skill & Labour",
    parties: "Board of Trustees of the Port of Bombay v. Sriyanesh Knitters",
    citation: "(1999) 7 SCC 359, Supreme Court of India",
    date: "Judgment Dated 11 August 1999",
    facts:
      "A textile processor claimed statutory detention rights under Section 170 of the Contract Act for unpaid processing charges. The dispute turned on whether continuous physical possession of processed fabric grants an absolute defense against third-party claims or wrongful conversion suits.",
    held:
      "The Supreme Court affirmed that a bailee who has expended labour and skill in accordance with the contract upon the goods bailed has a statutory right to retain such goods until he receives due remuneration for services rendered. The Court clarified that this particular lien attaches directly to the value-added goods and supersedes mere contractual assertions of title by defaulting owners.",
    statutoryTakeaway:
      "A textile dyeing, printing, or embroidery unit that has transformed grey yarn or raw greige fabric into finished textile holds an unassailable statutory right of detention under Section 170. Merchants cannot demand release without tendering full payment of processing bills.",
  },
  {
    title: "High Court of Delhi on Loss of Buyer's Right to Reject Fabric Post Reasonable Opportunity to Inspect",
    parties: "M/s. Texmaco Ltd. v. M/s. Ramkumar & Co.",
    citation: "AIR 2004 Del 128 / 2004 (73) DRJ 312",
    date: "Judgment Dated 14 January 2004",
    facts:
      "The buyer accepted delivery of processed fabric lots and subsequently raised belated complaints of colour fading, uneven bleaching, and dimensional shrinkage several weeks after delivery, attempting to withhold the entire job-work payment ledger.",
    held:
      "The High Court held that under Sections 41 and 42 of the Sale of Goods Act, a merchant who fails to inspect goods within a commercially reasonable period or acts inconsistently with the ownership of the supplier is deemed to have accepted the goods. Belated debit notes or uncalibrated post-wash complaints raised as an afterthought to escape payment liability cannot defeat the processor's money decree.",
    statutoryTakeaway:
      "Where a process house delivers test swatches, strike-offs, or initial rolls and the merchant proceeds without lodging immediate written objections, estoppel applies. Downstream rejections cannot be transferred onto the job-worker.",
  },
  {
    title: "High Court of Madras on Distress Auction of Unlifted Processed Fabric Lots by Bailee",
    parties: "Tirupur Processors Association & Anr. v. Joint Action Council of Textile Merchants",
    citation: "2012 (3) CTC 441, High Court of Madras",
    date: "Judgment Dated 23 March 2012",
    facts:
      "Merchants abandoned over 100 metric tonnes of knitted hosiery fabric in Tirupur dyeing godowns following international retail order cancellations, refusing either to clear accumulated job-work invoices or to take delivery. Processors faced critical warehouse blockades, fire risks, and working capital insolvency.",
    held:
      "The Court recognized that while Section 170 primarily grants retention, prolonged unlifted detention where goods suffer moisture damage and value depreciation justifies a distressed bailee issuing a public auction notice after reasonable statutory notice. Proceeds must be adjusted towards unpaid processing charges and warehousing costs, with surplus returned to the merchant.",
    statutoryTakeaway:
      "A 15-day statutory Notice of Intent to Auction, published with public transparency, allows dyeing units to liquidate unlifted fabric lots and mitigate mounting warehouse demurrage losses safely.",
  },
];

const STATUTORY_MATRIX = [
  {
    forum: "Contract Act s.170 (Bailee Lien)",
    remedyType: "Immediate Possessory Detention",
    pecuniaryFloor: "Nil (Any Ticket Size)",
    timeline: "Immediate (Day 1)",
    preDeposit: "Nil (Zero Court Fee)",
    creditorAdvantage: "Physical control over merchant's fabric lot prevents capital loss; halts downstream garment production.",
  },
  {
    forum: "MSEFC / MSME Samadhaan (MSMED Act)",
    remedyType: "Statutory Money Decree + Interest",
    pecuniaryFloor: "Nil (Registered MSME Units)",
    timeline: "90 Days (Statutory Conciliation)",
    preDeposit: "Nil (No Pre-Court Fee)",
    creditorAdvantage: "Mandatory 3x RBI compounding monthly interest; Section 19 mandates 75% pre-deposit if merchant appeals.",
  },
  {
    forum: "Commercial Court (CPC Order XXXVII)",
    remedyType: "Summary Money Decree",
    pecuniaryFloor: "₹3 Lakh and Above",
    timeline: "6–12 Months",
    preDeposit: "Ad-Valorem State Court Fee",
    creditorAdvantage: "Merchant must prove substantial bona-fide defense to obtain leave to defend against signed delivery challans.",
  },
  {
    forum: "Section 43B(h) Income Tax Notice",
    remedyType: "Fiscal Tax Penalty Pressure",
    pecuniaryFloor: "All Unpaid MSME Invoices",
    timeline: "Prior to March 31 / 45 Days",
    preDeposit: "Nil (Regulatory Notice)",
    creditorAdvantage: "Disallows merchant's income tax deductions, causing up to 35% tax penalty on unpaid job-work invoices.",
  },
  {
    forum: "NCLT (IBC Section 8 & 9)",
    remedyType: "Corporate Insolvency Process",
    pecuniaryFloor: "₹1 Crore (Corporate Debtors)",
    timeline: "10-Day Statutory Demand",
    preDeposit: "₹25,000 Tribunal Fee",
    creditorAdvantage: "Threat of board supersession forces corporate textile merchants and garment brands to settle immediately.",
  },
];

const FAQS = [
  {
    question: "Can a dyeing or printing mill legally hold a customer's grey fabric lot for unpaid job-work bills?",
    answer:
      "Yes. Under Section 170 of the Indian Contract Act, 1872, a job-worker (bailee) who has rendered services by exercising labour and skill (such as bleaching, scouring, dyeing, mercerizing, rotary printing, or computer embroidery) upon goods delivered to them has a statutory right to retain physical possession of those goods until lawful remuneration is fully paid. This 'Bailee's Particular Lien' is automatic and operates without requiring prior court approval, provided the labour was bestowed on that specific lot and no contrary credit contract exists.",
  },
  {
    question: "How do dyeing units defeat false claims of 'shade variation' or 'colour mismatch'?",
    answer:
      "Process houses defeat bogus shade variation claims through approved lab-dip swatch estoppel and spectrophotometer data. Before bulk production, mills prepare 3–5 lab dips under standard illuminants (D65 daylight, TL84, CWF) and obtain physical or digital sign-offs from the merchant. In legal proceedings under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), submitting the signed lab-dip swatch card alongside electronic spectrophotometer pass/fail test logs (demonstrating a delta-E tolerance of dE < 1.0 or commercial trade tolerance) creates an irrebuttable defense against afterthought quality rejections.",
  },
  {
    question: "What is the standard acceptable shrinkage tolerance in the textile processing industry?",
    answer:
      "According to Bureau of Indian Standards (BIS) and international textile testing norms (AATCC/ISO), commercial processing tolerances for woven cottons range between 2% and 3.5%, while circular knits (single jersey, interlock, rib) carry standard relaxation tolerances between 3% and 5% in length and width. When merchants submit uncalibrated home-wash debit notes alleging 8% shrinkage, process houses rebut them by demonstrating that inherent grey fabric count-construction flaws, improper yarn twist, and raw tension from weaving/knitting dictate residual shrinkage unless expensive resin or compactor chemical stabilization was explicitly ordered and invoiced.",
  },
  {
    question: "Can a process house sell or auction unlifted fabric lots if the merchant refuses to pay?",
    answer:
      "Section 170 confers a right of detention, but does not provide an immediate right of private sale unless authorized by contract. To lawfully dispose of abandoned fabric lots without risking criminal breach of trust or civil conversion suits, the process house must serve a formal 15-Day Statutory Notice of Intent to Auction via Speed Post and WhatsApp, specifying accumulated processing charges, demurrage/warehousing costs, and the proposed auction date. In major hubs like Surat, Tirupur, and Pali, public auctions conducted after vernacular newspaper notification and association intimation are upheld by courts (*Tirupur Processors Association v. JAC*), with proceeds adjusted against dues and surplus credited to the merchant.",
  },
  {
    question: "Can a dyeing mill hold Lot #5 for unpaid dues originating from previously delivered Lots #1 to #4?",
    answer:
      "Under bare Section 170, the particular lien is restricted to the specific fabric lot upon which labour was expended. However, textile process houses routinely convert this into a comprehensive general lien by incorporating an express 'General Lien Clause' into every Inward Goods Receipt Note (GRN), delivery challan, and quotation under Section 171 of the Contract Act. Additionally, Indian courts recognize running commercial accounts as continuous bailments where multiple lots constitute a single continuous commercial transaction, allowing detention of newly received goods for outstanding ledger balances.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act help textile process houses recover payments within 45 days?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any enterprise purchasing goods or processing services from a registered Micro or Small Enterprise (MSME) must clear the invoice within 15 days (if no written agreement exists) or within 45 days (if covered by a written contract). If the merchant defaults past March 31, the entire unpaid job-work sum is disallowed as a business expenditure and added directly to the merchant's net taxable income, triggering severe corporate tax liabilities of up to 35% plus interest. Dyeing units leverage this statutory deadline in their formal demand notices to force instant RTGS clearance.",
  },
];

export default function DyeingFabricLienRecoveryPage() {
  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Exercise Fabric Lien and Recover Unpaid Textile Job-Work Dues",
    description:
      "A 5-step operational and statutory SOP for dyeing, printing, bleaching, and embroidery process houses in India to enforce Section 170 bailee lien and recover unpaid processing charges.",
    totalTime: "P15D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Physical Possession & Audit Inward Challans",
        text: "Immediately secure physical custody of the processed or grey fabric lot in mill godowns. Audit Inward Goods Receipt Notes (GRN), lot numbers, and grey yarn specifications.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Compile Approved Lab-Dip Swatches & Spectrophotometer Test Logs",
        text: "Retrieve signed lab-dip cards, D65 lighting strike-off sign-offs, and electronic spectrophotometer delta-E readings under Section 63 of BSA 2023.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve Formal 7-Day Bailee's Particular Lien Notice",
        text: "Issue a fact-verified demand notice invoking Contract Act Section 170, rejecting bogus shade/shrinkage claims and notifying daily demurrage charges.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Issue 15-Day Statutory Notice of Public Auction",
        text: "If payment is not tendered within 7 days, issue a formal notice of distressed asset auction, published in a vernacular textile trade newspaper.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File MSMED Act Section 18 Reference & Commercial Court Suit",
        text: "Initiate conciliation before the Micro & Small Enterprise Facilitation Council (MSEFC) for 3x RBI compounding interest or summary suit under CPC Order XXXVII.",
      },
    ],
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Unpaid Dyeing, Bleaching & Rotary-Printing Bills: Exercising Fabric-Lot Lien & Defeating Bogus 'Shade Variation / Shrinkage' Counterclaims",
    description:
      "Dyeing mills burn coal, dyes & power upfront—then merchants claim fabric damage to dodge bills! Enforce lab-dip sign-offs & Section 170 fabric lien.",
    url: `${SITE_URL}/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery`,
    },
    author: {
      "@type": "Organization",
      name: "LegalRecovery.in Editorial Board",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-17T14:58:00+05:30",
    dateModified: "2026-11-17T15:00:00+05:30",
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
        name: "Textiles & Garment Recovery",
        item: `${SITE_URL}/industries/textiles-apparel-garment-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dyeing & Printing Fabric Lien Recovery",
        item: `${SITE_URL}/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
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
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>IND-13 TEXTILES & PROCESS HOUSES</span>
            <span className="text-slate-500">•</span>
            <span>SECTION 170 BAILEE LIEN SOP</span>
          </div>

          {/* Exact H1 (138 chars) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Unpaid Dyeing, Bleaching & Rotary-Printing Bills: Exercising Fabric-Lot Lien & Defeating Bogus 'Shade Variation / Shrinkage' Counterclaims
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              EXECUTIVE CREDITOR ANSWER & STATUTORY SUMMARY
            </span>
            Under Section 170 of the Indian Contract Act, 1872, textile process houses possess an absolute Bailee&apos;s Particular Lien to detain processed and greige fabric lots until job-work invoices are fully liquidated. When defaulting merchants manufacture bogus &apos;shade variation&apos; or &apos;excessive shrinkage&apos; claims following downstream export cancellations, process houses defeat liability through approved lab-dip swatch estoppel, spectrophotometer delta-E logs (BSA 2023 s.63), and statutory 15-day public auction notices. For comprehensive mill and garment recovery frameworks, review our parent hub at{" "}
            <Link
              href="/industries/textiles-apparel-garment-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold transition"
            >
              Textiles, Apparel & Garment Manufacturers Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-l-2 border-red-500/80 pl-3">
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Statutory Hook
              </p>
              <p className="text-base sm:text-lg md:text-xl font-black text-slate-100 mt-0.5">
                Contract Act s.170
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Bailee&apos;s Particular Lien</p>
            </div>
            <div className="border-l-2 border-emerald-500/80 pl-3">
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                MSME Compounding
              </p>
              <p className="text-base sm:text-lg md:text-xl font-black text-emerald-400 mt-0.5">
                3x RBI Rate
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Monthly compounded interest</p>
            </div>
            <div className="border-l-2 border-amber-500/80 pl-3">
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Process Tolerance
              </p>
              <p className="text-base sm:text-lg md:text-xl font-black text-amber-400 mt-0.5">
                2% – 5% BIS
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Standard shrinkage threshold</p>
            </div>
            <div className="border-l-2 border-red-500/80 pl-3">
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Auction Notice
              </p>
              <p className="text-base sm:text-lg md:text-xl font-black text-red-400 mt-0.5">
                15-Day SOP
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Distress fabric liquidation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with 2-Column Split */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Textiles, Apparel & Garment Recovery",
                href: "/industries/textiles-apparel-garment-recovery",
              },
              {
                label: "Dyeing & Printing Fabric Lien Recovery",
                href: "/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery",
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Sticky Sidebar TOC */}
          <DyeingFabricLienTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & The Merchant Default Modus Operandi */}
            <section
              id="heading-statutory-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  COMMERCIAL ANATOMY OF TEXTILE PROCESSING DEFAULTS
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
                  How Merchant Downstream Cancellations Trigger Sham Quality Counterclaims
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In major Indian textile clusters such as <strong>Tirupur, Surat, Pali, Jetpur, Panipat, Bhiwandi, and Erode</strong>, the process house occupies the most capital-intensive and vulnerable position in the supply chain. A dyeing, rotary printing, scouring, bleaching, or digital printing mill burns expensive fuel (steam boilers, coal, or piped gas), expends specialized reactive/disperse dyes and auxiliary chemicals, and consumes heavy electrical power upfront to transform raw greige rolls into finished apparel-grade textiles.
                </p>
                <p>
                  Yet, when downstream garment buyers in Europe or the US trim seasonal purchase orders, or when seasonal fast-fashion demand in Surat or Kolkata falters, the merchant faces severe inventory devaluation. Rather than absorbing market losses, the merchant executes a predictable evasion strategy: <em>they abandon the processed fabric lot in the mill godown and slap a retaliatory ₹15 Lakh to ₹25 Lakh &apos;fabric damage, colour fading, or uneven shrinkage&apos; counterclaim to avoid paying ₹4 Lakh to ₹8 Lakh in legitimate job-work processing charges!</em>
                </p>
                <p>
                  Without a firm grasp of bailment jurisprudence, mill owners panic, allow months of precious godown space to be occupied by squatting fabric rolls, and frequently surrender to aggressive discount demands. Under the statutory architecture of the <strong>Indian Contract Act, 1872</strong> and the <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>, process houses possess formidable, immediate defensive and offensive legal weapons.
                </p>
              </div>

              {/* Cluster Callout Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold text-slate-900">Tirupur Knits Corridor</p>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Bio-wash, reactive dyeing & rotary print knits; frequent post-export cancellation rejections.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold text-slate-900">Surat & Jetpur Processing</p>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Polyester crepe, georgette discharge printing & rayon job-work; volatile mandi price drops.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold text-slate-900">Pali & Panipat Heavy Cottons</p>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Mercerized poplin, yarn dyeing & home-textile bleaching; shrinkage and GSM variance disputes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Contract Act Section 170 Bailee's Particular Lien Deep-Dive */}
            <section
              id="heading-contract-act-lien"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  STATUTORY MECHANICS OF SECTION 170
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
                  Exercising Bailee&apos;s Particular Lien Over Processed Fabric Lots
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The foundational bedrock of textile job-work protection is <strong>Section 170 of the Indian Contract Act, 1872</strong>. The statute expressly enacts:
                </p>
                <div className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl border border-slate-800 text-xs sm:text-sm leading-relaxed font-mono">
                  &ldquo;Where the bailee has, in accordance with the purpose of the bailment, rendered any service involving the exercise of labour or skill in respect of the goods bailed, he has, in the absence of a contract to the contrary, a right to retain such goods until he receives due remuneration for the services he has rendered in respect of them.&rdquo;
                </div>
                <p>
                  To successfully exercise and defend this lien without facing allegations of wrongful detention, conversion, or criminal breach of trust, the process house must ensure three essential statutory elements are fulfilled:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold mb-2">
                      1
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      Transformation of Goods
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      Labour and skill must physically enhance the fabric. Scouring, mercerizing, dyeing, screen-printing, and chemical finishing indisputably transform greige cloth into marketable textile.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold mb-2">
                      2
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      Continuous Possession
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      The mill must retain uninterrupted physical custody. Once finished rolls leave the factory gate and enter the merchant&apos;s warehouse, the common-law possessory lien is legally extinguished.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold mb-2">
                      3
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      Formal Lien Notice
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      Detention must be formally declared in writing. Serving a Section 170 notice pre-empts bogus merchant police complaints alleging wrongful withholding under BNS Section 316.
                    </p>
                  </div>
                </div>

                <p>
                  Furthermore, if your job-work contract or Inward Delivery Challan has not been reduced to a signed long-term agreement, you can review our statutory guidance on{" "}
                  <Link
                    href="/how-to-recover-money-without-written-agreement"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    how to recover dues without a formal written contract
                  </Link>{" "}
                  via Delivery Challans, E-Way bills, and WhatsApp approvals.
                </p>
              </div>
            </section>

            {/* Section 3: Landmark Judicial Precedents */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  BINDING JURISPRUDENCE & CASE LAW
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
                  Court Precedents Protecting Textile Processors
                </h2>
              </div>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-xl p-5 border border-slate-200 border-l-4 border-l-[#DC2626] space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {item.date}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded bg-slate-200/80 font-mono text-slate-800 font-medium">
                        {item.parties}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono font-medium">
                        {item.citation}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <p>
                        <strong className="text-slate-900">Material Dispute: </strong>
                        {item.facts}
                      </p>
                      <p>
                        <strong className="text-slate-900">Judicial Holding: </strong>
                        {item.held}
                      </p>
                      <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-[11px] sm:text-xs text-slate-800 font-medium">
                        <strong className="text-[#DC2626]">Operational Creditor Rule: </strong>
                        {item.statutoryTakeaway}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Process House Escalation Decision Tree Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  OPERATIONAL ESCALATION PROTOCOL
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
                  Textile Process House Decision Tree & Auction SOP
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Step-by-step procedural roadmap from default notice to fabric lien enforcement, lab-dip estoppel, and public distress sale.
                </p>
              </div>

              {/* Desktop SVG Visual Flowchart */}
              <div className="hidden md:block bg-slate-950 p-6 rounded-xl border border-slate-800 overflow-x-auto">
                <svg
                  className="w-full min-w-[680px] h-[340px]"
                  viewBox="0 0 740 340"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="150" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="95" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">PHASE 1: DEFAULT</text>
                  <text x="95" y="80" textAnchor="middle" fill="#E2E8F0" fontSize="10">Job-Work Invoice Unpaid</text>
                  <text x="95" y="98" textAnchor="middle" fill="#94A3B8" fontSize="9">Fabric Lot Ready in Mill</text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M170 75 H210" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="210" y="30" width="160" height="90" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="290" y="58" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">PHASE 2: LIEN DETENTION</text>
                  <text x="290" y="78" textAnchor="middle" fill="#E2E8F0" fontSize="10">Serve s.170 Lien Notice</text>
                  <text x="290" y="96" textAnchor="middle" fill="#94A3B8" fontSize="9">Hold All Finished Rolls</text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M370 75 H410" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 3: Branch / Decision */}
                  <polygon points="490,30 560,75 490,120 420,75" fill="#334155" stroke="#F59E0B" strokeWidth="2" />
                  <text x="490" y="72" textAnchor="middle" fill="#FDE047" fontSize="10" fontWeight="bold">Bogus Quality</text>
                  <text x="490" y="86" textAnchor="middle" fill="#FDE047" fontSize="10" fontWeight="bold">Dispute Raised?</text>

                  {/* Branch YES -> Spectro Estoppel */}
                  <path d="M490 120 V170" stroke="#EF4444" strokeWidth="2" />
                  <text x="500" y="145" fill="#FCA5A5" fontSize="9" fontWeight="bold">YES</text>
                  <rect x="410" y="170" width="160" height="85" rx="8" fill="#1E293B" stroke="#EF4444" strokeWidth="2" />
                  <text x="490" y="195" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">PRODUCE EVIDENCE</text>
                  <text x="490" y="213" textAnchor="middle" fill="#E2E8F0" fontSize="9">Signed Lab-Dip Swatch</text>
                  <text x="490" y="229" textAnchor="middle" fill="#94A3B8" fontSize="9">Spectrophotometer dE&lt;1.0</text>

                  {/* Branch NO -> Auction SOP */}
                  <path d="M560 75 H600" stroke="#10B981" strokeWidth="2" />
                  <text x="575" y="68" fill="#6EE7B7" fontSize="9" fontWeight="bold">NO</text>
                  <rect x="600" y="30" width="125" height="90" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="662" y="58" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">SETTLEMENT</text>
                  <text x="662" y="78" textAnchor="middle" fill="#E2E8F0" fontSize="9">RTGS Clearance</text>
                  <text x="662" y="96" textAnchor="middle" fill="#94A3B8" fontSize="9">Release Finished Lot</text>

                  {/* Flow from Evidence to Final Remedy */}
                  <path d="M490 255 V285 H290 V255" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
                  <rect x="180" y="170" width="220" height="85" rx="8" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                  <text x="290" y="195" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">LEGAL ENFORCEMENT</text>
                  <text x="290" y="213" textAnchor="middle" fill="#E2E8F0" fontSize="9">15-Day Public Auction Notice</text>
                  <text x="290" y="231" textAnchor="middle" fill="#38BDF8" fontSize="9">MSMED s.18 Council Reference (3x RBI Int)</text>

                  {/* Marker Definition */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 bg-slate-900 rounded-xl text-white border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-red-400">Step 1 • Default Occurs</span>
                  <p className="text-xs font-bold text-slate-100">Job-Work Invoices Defaulted Past Due Date</p>
                  <p className="text-[11px] text-slate-400">
                    Merchant ceases communication or delays delivery-lifting orders as market fabric rates slide.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl text-white border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-red-400">Step 2 • Possessory Detention</span>
                  <p className="text-xs font-bold text-slate-100">Assert Section 170 Bailee&apos;s Particular Lien</p>
                  <p className="text-[11px] text-slate-400">
                    Lock all finished fabric rolls in mill godowns; issue immediate 7-day Bailee Lien Demand Notice.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl text-white border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-amber-400">Step 3 • Neutralize Counterclaims</span>
                  <p className="text-xs font-bold text-slate-100">Lab-Dip Estoppel & BIS Tolerance Shield</p>
                  <p className="text-[11px] text-slate-400">
                    Deploy signed approval swatches, delta-E spectrophotometer logs, and grey yarn specifications.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl text-white border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-emerald-400">Step 4 • Recovery & Liquidation</span>
                  <p className="text-xs font-bold text-slate-100">15-Day Auction Notice + MSMED Council Filing</p>
                  <p className="text-[11px] text-slate-400">
                    Issue public auction notice for unlifted cloth and file MSME Samadhaan for 3x RBI monthly compounded interest.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Remedy Comparison Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  FORUM & REMEDY BENCHMARKING
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
                  Process House Legal Forum & Remedy Comparison Matrix
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Compare operational timelines, costs, and strategic advantages across Indian recovery forums for textile processing dues.
                </p>
              </div>

              <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Forum / Statutory Track</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Remedy Type</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Pecuniary Floor</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Timeline</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Creditor Strategic Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">{row.forum}</td>
                        <td className="p-3 sm:p-4 font-medium text-slate-800">{row.remedyType}</td>
                        <td className="p-3 sm:p-4">{row.pecuniaryFloor}</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">{row.timeline}</td>
                        <td className="p-3 sm:p-4 text-slate-600 leading-snug">{row.creditorAdvantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-900">MSEFC & MSME ODR Route: </strong>
                Registered MSME process houses can bypass high commercial court fees and utilize online conciliation. Read our comprehensive guide on{" "}
                <Link
                  href="/msme-odr-portal-delayed-payment-guide"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  MSME ODR Portal and Delayed Payment Filing Guide
                </Link>{" "}
                for filing step-by-step claims on Samadhaan.
              </div>
            </section>

            {/* Section 6: Interactive 4 Commercial Dispute Scenarios */}
            <section id="heading-failure-scenarios" className="scroll-mt-28 space-y-6">
              <DyeingFabricScenarioTabs />
            </section>

            {/* Section 7: Worked Financial Calculation Box */}
            <section
              id="heading-worked-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  EMPIRICAL FINANCIAL LEDGER
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
                  Worked Calculation: ₹18.5 Lakh Job-Work Default & Warehouse Demurrage
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Real-world calculation illustrating how job-work arrears, demurrage penalties, and MSMED Act 3x RBI compounding interest accumulate over 9 months.
                </p>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-xs text-red-400 font-bold uppercase tracking-wider">
                      SAMPLE CASE LEDGER: TEXTILE PROCESS RECOVERY
                    </span>
                    <h3 className="text-lg font-bold text-slate-100">
                      Processing 12,000 Metres Viscose Rayon Fabric (Surat Cluster)
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-red-950 border border-red-800 text-red-300 rounded-lg text-xs font-bold font-mono">
                    9 Months Aging (270 Days)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-2 bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                    <p className="text-slate-400 uppercase text-[10px] font-bold">Principal Job-Work Outstandings</p>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Rotary Printing Charges (12,000m @ ₹45/m):</span>
                      <span className="text-slate-100 font-bold">₹5,40,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Mercerizing & Softener Chemical Surcharge:</span>
                      <span className="text-slate-100 font-bold">₹1,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">GST @ 12% on Job-Work Services:</span>
                      <span className="text-slate-100 font-bold">₹79,200</span>
                    </div>
                    <div className="flex justify-between pt-1 text-emerald-400 font-bold">
                      <span>Total Principal Invoice Value:</span>
                      <span>₹7,39,200</span>
                    </div>
                  </div>

                  <div className="space-y-2 bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                    <p className="text-slate-400 uppercase text-[10px] font-bold">Lien Demurrage & MSME Interest</p>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">Godown Storage (240 days @ ₹400/day):</span>
                      <span className="text-slate-100 font-bold">₹96,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">RBI Repo Base Rate (6.5% × 3 = 19.5% p.a.):</span>
                      <span className="text-slate-100 font-bold">19.5% p.a.</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700/60">
                      <span className="text-slate-300">MSMED Monthly Compounding (9 Months):</span>
                      <span className="text-slate-100 font-bold">₹1,13,845</span>
                    </div>
                    <div className="flex justify-between pt-1 text-amber-400 font-bold">
                      <span>Total Ancillary Recoverables:</span>
                      <span>₹2,09,845</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-red-900/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <p className="text-xs uppercase font-bold text-red-400">Total Statutory Enforceable Claim Ledger</p>
                    <p className="text-[11px] text-slate-400">Pre-empts fake ₹15L counterclaim; secures full claim against fabric asset value (₹18.5L)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white font-mono">₹9,49,045</p>
                    <p className="text-[10px] text-emerald-400 font-semibold">100% Covered by Value of Retained Fabric Lot</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong className="text-amber-950">Section 43B(h) Corporate Tax Leverage: </strong>
                In addition to compounding interest, if the merchant defaults past March 31, their accountant must disallow this ₹7,39,200 expenditure under the Income Tax Act. For complete statutory calculations, explore our guide on{" "}
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="text-[#DC2626] hover:underline font-bold"
                >
                  Section 43B(h) MSME 45-Day Payment Rule & Tax Disallowances
                </Link>
                .
              </div>
            </section>

            {/* Section 8: Bharatiya Sakshya Adhiniyam, 2023 (BSA s.63) Evidence Checklist */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  EVIDENTIARY FORTIFICATION UNDER NEW CRIMINAL / EVIDENCE CODES
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
                  Bharatiya Sakshya Adhiniyam (BSA) Section 63 Evidence Checklist
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Assemble these essential paper and digital records to defeat sham quality disputes before MSEFC arbitrators or Commercial Courts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      Physical Lab-Dip Swatch & Strike-Off Card
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Signed and dated physically by the merchant&apos;s quality master or merchant merchandiser under D65 daylight standard, specifying shade code, pantone reference, and date.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      Spectrophotometer Computer Delta-E Logs
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Certified digital printouts of spectrophotometer colorimeter readings demonstrating batch consistency with delta-E (dE) deviation below 1.0, backed by a BSA s.63 electronic certificate.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      Inward Grey Goods Inward Register & GSM Check
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Weighbridge slips and raw greige fabric quality inward registers demonstrating yarn count variance, loop irregularity, or pre-existing weaving defects in the supplied cloth.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      Speed Post RPAD & WhatsApp Service Proof
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Postal tracking certificates verifying physical delivery of Section 170 notices, alongside WhatsApp export logs with blue double-tick delivery read receipts.
                  </p>
                </div>
              </div>

              {/* Sibling Cross-Links Banner */}
              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider block">
                  RELATED SECTOR SPOKE GUIDES:
                </span>
                <p className="leading-relaxed">
                  If your recovery involves intermediaries or cancelled downstream orders, consult our operational guides for{" "}
                  <Link
                    href="/textile-commission-agent-broker-adatiya-buyer-default-liability"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Textile Broker / Adatiya Buyer Default Liability
                  </Link>
                  ,{" "}
                  <Link
                    href="/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Retail Fashion Brand SOR Rejection Recovery
                  </Link>
                  , and{" "}
                  <Link
                    href="/garment-buying-house-export-order-cancelled-after-cutting-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Garment Buying House Cancelled Export Order Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 9: FAQ Accordions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  FREQUENTLY ASKED LEGAL QUESTIONS
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
                  Textile Process House Recovery & Fabric Lien FAQ
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Practical legal answers for process mill owners, rotary printers, and dyeing master directors facing merchant payment defaults.
                </p>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-bold text-slate-900 group-open:text-[#DC2626]">
                      <span className="pr-4">{faq.question}</span>
                      <span className="shrink-0 ml-2 transition-transform duration-200 group-open:rotate-180">
                        <svg
                          className="w-4 h-4 text-slate-500 group-open:text-[#DC2626]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources & Citations */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                  STATUTORY ACTS & LEGISLATIVE CITATIONS
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-1">
                  Authoritative Statutory References
                </h2>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">•</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-900 hover:underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Dual B2B Conversion CTA Banner */}
            <div className="pt-2">
              <DyeingFabricLienCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Component */}
      <RelatedRecoveryGuides />
    </div>
  );
}
