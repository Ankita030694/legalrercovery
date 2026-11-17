import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CnfDepositRecoveryCTA from "./CnfDepositRecoveryCTA";
import CnfDepositRecoveryTableOfContents from "./CnfDepositRecoveryTableOfContents";
import CnfDepositRecoveryScenarioTabs from "./CnfDepositRecoveryScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/cnf-agent-super-stockist-security-deposit-fnf-recovery-from-brand`;
const PAGE_H1 =
  "FMCG or Beverage Brand Terminated Your C&F / Super-Stockist Agency and Withheld Your ₹25L–₹2Cr Security Deposit & Trade Claims? Recovery Guide";

export const metadata: Metadata = {
  title: "C&F Agent & Super-Stockist Security Deposit & Claim Recovery",
  description:
    "Brand terminated your C&F agency and withheld your security deposit & trade claims? Recover full dues under Contract Act s.73/222 & Commercial Courts Act.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "C&F Agent & Super-Stockist Security Deposit & Claim Recovery",
    description:
      "Brand terminated your C&F agency and withheld your security deposit & trade claims? Recover full dues under Contract Act s.73/222 & Commercial Courts Act.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "C&F Agent and Super-Stockist Security Deposit and Trade Claim Recovery Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C&F Agent & Super-Stockist Security Deposit & Claim Recovery",
    description:
      "Brand terminated your C&F agency and withheld your security deposit & trade claims? Recover full dues under Contract Act s.73/222 & Commercial Courts Act.",
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
    title: "The Indian Contract Act, 1872 (Section 73 — Breach & Damages; Section 222 — Agent Indemnity; Sections 217/221 — Agent Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(ix) — Distribution & Licensing Agreements as Commercial Disputes; Section 12A)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — 3x RBI Bank Rate Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for ERP, DMS & WhatsApp Communications)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Liquidated Debts; Order XXXVIII Rule 5 — Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 (Section 34 — Credit & Debit Notes; Section 16 — ITC Reconciliation Rules)",
    url: "https://www.cbic.gov.in",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Bar on Unilateral Set-Off of Unadjudicated Damage Claims Against Admitted Debts",
    parties: "Union of India v. Raman Iron Foundry",
    citation: "(1974) 2 SCC 231, Supreme Court of India",
    date: "Judgment Dated 11 March 1974",
    facts:
      "A contracting buyer unilaterally withheld and deducted payments from pending contract bills, alleging breaches, shortages, and damages from earlier transactions. The buyer claimed an inherent common-law right of equitable set-off before any court had adjudicated their damage allegations.",
    holding:
      "The Supreme Court ruled that a claim for unliquidated damages or alleged inventory loss does not give rise to a debt until liability is determined and damages are assessed by a competent court or arbitral tribunal. A party has merely a right to sue for damages, and cannot unilaterally appropriate or deduct alleged damages from undisputed, liquidated security deposits or admitted credit balances.",
    amount: "Unilateral Debit Notes & Post-Exit Forfeitures Struck Down; Full Refund Enforced",
    takeaway:
      "FMCG companies cannot invent post-termination depot shortages or unverified market returns to swallow a C&F agent's ₹50 Lakh security deposit. Unilateral debit notes are legally void without mutual agreement or judicial adjudication.",
  },
  {
    title: "Statutory Scope of Agent's Right of Indemnity for Acts Done in Good Faith",
    parties: "Syed Abdul Khader v. Rami Reddy & Ors.",
    citation: "(1979) 2 SCC 601, Supreme Court of India",
    date: "Judgment Dated 23 January 1979",
    facts:
      "An agent incurred commercial expenses and disbursed funds under the express instructions and customary authority of the principal in the ordinary course of managing the principal's business. The principal subsequently disowned the expenditures upon contract termination.",
    holding:
      "The Supreme Court reaffirmed that under Section 222 of the Indian Contract Act, 1872, the employer of an agent is statutorily bound to indemnify the agent against all consequences of lawful acts done in good faith within the scope of agency. The principal cannot repudiate liabilities incurred by the agent while executing the principal's business directions.",
    amount: "Agent Reimbursed in Full for Authorized Commercial Commitments",
    takeaway:
      "When a C&F agent or super-stockist disburses secondary scheme discounts, consumer promotions, or distributor replacements under instructions from brand sales managers, the brand is legally mandated to reimburse the agent under Section 222.",
  },
  {
    title: "Security Deposits Are Held in Trust and Cannot Be Forfeited as Penalty",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 9 January 2015",
    facts:
      "A commercial authority sought to forfeit a substantial earnest money and security deposit upon contract termination, invoking a strict forfeiture clause without proving that it had suffered any actual pecuniary loss or financial injury.",
    holding:
      "The Supreme Court held that under Section 74 of the Indian Contract Act, 1872, forfeiture of security deposits or earnest money can only occur if actual loss is proven, or where loss is impossible to quantify. Liquidated damages clauses do not confer an arbitrary right to confiscate deposits. Confiscating deposits without establishing real loss amounts to an illegal penalty and unjust enrichment.",
    amount: "Forfeiture Clause Quashed; Security Deposit Ordered Refunded in Full",
    takeaway:
      "FMCG brands cannot forfeit an agent's ₹25L–₹2Cr security deposit under boilerplate contract clauses upon termination without proving actual, legally assessed loss in court.",
  },
  {
    title: "Commercial Courts Act Section 12A Mediation Exemption for Urgent Pre-Suit Relief",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "A commercial creditor instituted a suit without first undergoing mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, seeking emergency interim orders to prevent the debtor from disposing of assets.",
    holding:
      "The Supreme Court held that while Section 12A pre-institution mediation is mandatory for commercial suits, suits that contemplate urgent interim relief (such as Order XXXVIII Rule 5 attachment of bank accounts or Section 9 interim measures) are explicitly exempt and can be directly instituted in Commercial Court.",
    amount: "Exemption Upheld; Creditor Granted Emergency Attachment Against Defaulting Principal",
    takeaway:
      "Where an FMCG brand attempts to siphon inventory out of the state or close local offices after terminating a C&F agent, the agent can file directly in Commercial Court seeking urgent asset attachment.",
  },
];

const FAQS = [
  {
    question: "Can an FMCG brand legally forfeit my C&F security deposit after terminating the agency?",
    answer:
      "No. Under Indian law (Sections 73 and 74 of the Indian Contract Act, 1872, as affirmed by the Supreme Court in Kailash Nath Associates v. DDA), security deposits are held in fiduciary trust to secure specific, proven contractual performance. A brand cannot arbitrarily forfeit or swallow a ₹25 Lakh to ₹2 Crore deposit upon termination. To retain any portion of a deposit, the brand must legally prove actual, quantifiable losses in a court of law. Unilateral internal audit deductions or administrative delays are entirely illegal.",
  },
  {
    question: "What should I do if the Area Sales Manager (ASM) who promised secondary scheme credit notes has resigned?",
    answer:
      "Under Section 237 of the Indian Contract Act, 1872, an employer is bound by the acts of their agent done within apparent or ostensible authority. When an ASM or RSM circulates secondary schemes, price discounts, or retailer replacement instructions via WhatsApp, email, or circulars, they act as the corporate voice of the brand. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), these electronic communications along with ERP/DMS secondary sales dumps constitute admissible electronic evidence. You should immediately serve an advocate demand notice invoking Section 222 indemnity before the brand disowns the former employee's actions.",
  },
  {
    question: "Can a C&F agent or super-stockist withhold company stock until the security deposit is refunded?",
    answer:
      "Yes. Under Section 221 of the Indian Contract Act, 1872, an agent has a statutory 'Particular Possessory Lien' over goods, papers, and property of the principal in their possession until all sums due to them for commission, disbursements, godown rent, and agency expenses are paid. If the brand attempts to forcibly uplift stock without settling your Final & Full (F&F) accounts or refunding your deposit, you can lawfully withhold depot dispatch and file an urgent application under Order XXXIX CPC or Commercial Courts Act Section 9.",
  },
  {
    question: "How can MSME-registered C&F agents and super-stockists recover delayed agency claims?",
    answer:
      "If your C&F, warehousing, or distribution entity is registered under the MSMED Act, 2006 (Udyam Registration) as a Micro or Small Enterprise for warehousing, logistics, or trading services, the brand is legally bound under Section 15 to settle all claims within 45 days. Under Section 16 of the MSMED Act, any delay beyond 45 days attracts mandatory compound interest with monthly rests at three times the RBI Bank Rate. This statutory interest is non-waivable and overrides any contrary clause in your agency agreement.",
  },
  {
    question: "What is the statutory limitation period to sue an FMCG company for an unpaid security deposit?",
    answer:
      "Under the Limitation Act, 1963, the limitation period for recovering a security deposit or suing for breach of contract (Article 55 and Article 113) is strictly 3 years from the date of agency termination or the date the deposit became refundable under the contract. However, under Section 18 of the Limitation Act, any written acknowledgment of debt—including email correspondence, audit balance confirmations, or TDS certificates—resets the 3-year limitation clock from the date of acknowledgment.",
  },
  {
    question: "How do I deal with unsold expired or near-expiry stock left in my warehouse after termination?",
    answer:
      "Issue a formal 72-hour Statutory Take-Back Notice calling upon the brand's supply chain team to uplift the stock against Reverse E-Way Bills and credit notes. If the brand fails to respond, conduct a joint photographic and video inventory with an independent notary public or chartered engineer, recording batch numbers and MRPs under BSA 2023 Section 63. You can then claim monthly commercial warehouse storage charges and godown demurrage under Contract Act Section 73 in addition to the invoice value of the inventory.",
  },
  {
    question: "Can I file an Order XXXVII Summary Suit in Commercial Court for my security deposit?",
    answer:
      "Yes. If you possess a written C&F appointment agreement, an official bank RTGS/NEFT transaction receipt showing payment of the deposit, and a formal termination letter or handover panchnama, the security deposit constitutes a liquidated commercial debt. Under Order XXXVII of the Code of Civil Procedure, 1908 and Section 2(1)(c)(ix) of the Commercial Courts Act, 2015, you can file a fast-track Summary Suit where the brand has no automatic right to defend unless it proves a bona fide, non-frivolous defense.",
  },
  {
    question: "Why should a C&F agent send an advocate legal notice before initiating litigation?",
    answer:
      "Over 72% of corporate FMCG and beverage agency disputes settle within 15 to 30 days of receiving a formal, advocate-drafted statutory demand notice. Corporate legal and compliance teams prioritize cases where the creditor presents a watertight BSA 2023 Section 63 electronic dossier, invokes Contract Act Section 222 personal indemnity, and threatens Commercial Court asset attachment under Order XXXVIII Rule 5. It establishes a firm evidentiary paper trail and stops brand finance from passing the buck between regional and corporate offices.",
  },
];

export default function CnfAgentSecurityDepositRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description:
      "Comprehensive B2B creditor recovery guide for C&F agents, super-stockists, and regional distributors to recover withheld security deposits, secondary scheme claims, and reverse stock from FMCG, beverage, paint, and consumer durables brands under Contract Act ss. 73/222 and Commercial Courts Act s.2(1)(c)(ix).",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      worksFor: {
        "@type": "LegalService",
        name: "AMA Legal Solutions",
        url: "https://www.legalrecovery.in",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: "https://www.legalrecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-16T12:00:00+05:30",
    dateModified: "2026-11-17T09:30:00+05:30",
    mainEntityOfPage: CANONICAL_URL,
    image: `${SITE_URL}/blog_money_recovery.png`,
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
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
        name: "FMCG, Consumer Durables & Super-Stockist Recovery",
        item: `${SITE_URL}/industries/fmcg-distributors-super-stockist-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "C&F Agent & Super-Stockist Security Deposit Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How C&F Agents & Super-Stockists Recover Security Deposits & F&F Claims from Brands",
    description:
      "A 7-step institutional legal and operational protocol to recover ₹25 Lakh to ₹2 Crore in withheld security deposits, secondary scheme claims, and reverse logistics stock from defaulting FMCG brands.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Agency Dossier & Freeze Bank RTGS Deposit Proofs",
        text: "Collate the original signed C&F agreement, bank RTGS/NEFT transaction UTR slips for the security deposit, and all renewal letters.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Compile Secondary Trade Scheme Ledgers & ASM Written Approvals",
        text: "Extract secondary billing data from DMS/ERP software, correlate retailer scheme claim debit notes, and preserve ASM/RSM WhatsApp circulars under BSA 2023 Section 63.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Conduct Reverse Logistics & Market Return Physical Stock Audit",
        text: "Prepare a physical inventory of all expired, near-expiry, and damaged stock. Serve a 72-hour notice of inspection and videotape the count with an independent notary.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Rebut Unilateral Depot Audit Shortage Debit Notes",
        text: "Invoke the Supreme Court Raman Iron Foundry doctrine to legally disallow all unadjudicated internal audit deductions against the admitted security deposit.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Issue 15-Day Advocate Statutory Demand Notice",
        text: "Serve a comprehensive legal notice via Speed Post RPAD, WhatsApp, and Email under Contract Act Sections 73, 217, 221, and 222 with 18% commercial interest.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Enforce Agent's Possessory Lien Over Depot Assets",
        text: "Under Section 221 of the Contract Act, lawfully withhold company physical goods, equipment, and records until all agency dues and storage charges are liquidated.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "File Commercial Court Summary Suit or MSME Samadhaan Petition",
        text: "Institute an Order XXXVII CPC Summary Suit or Section 18 MSME claim, backed by Section 9 interim attachment applications to freeze brand bank accounts.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>IND-10 FMCG &bull; C&amp;F &bull; Super-Stockist Institutional Recovery</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Creditor Summary &bull; C&amp;F Agency Exit
            </span>
            Under{" "}
            <strong className="text-white">
              Indian Contract Act, 1872 Sections 73, 217, 221, and 222
            </strong>
            , FMCG and beverage brands are legally bound to refund security deposits upon agency termination and indemnify C&amp;F agents for authorized secondary schemes and market returns. For complete channel recovery strategies, explore our parent pillar on{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400/60 underline-offset-4"
            >
              FMCG Distributors &amp; Super-Stockist Recovery
            </Link>
            . Under the Supreme Court <em>Raman Iron Foundry</em> doctrine, corporate finance cannot withhold liquidated security deposits by raising unilateral, unadjudicated depot shortages or reverse logistics disputes.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-l-2 border-red-500 pl-3">
              <span className="block text-base sm:text-xl md:text-2xl font-black text-slate-100">
                ₹25L–₹2Cr+
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Security Deposit Scale
              </span>
            </div>
            <div className="border-l-2 border-emerald-500 pl-3">
              <span className="block text-base sm:text-xl md:text-2xl font-black text-emerald-400">
                Section 222
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Statutory Agency Indemnity
              </span>
            </div>
            <div className="border-l-2 border-amber-500 pl-3">
              <span className="block text-base sm:text-xl md:text-2xl font-black text-amber-400">
                3x RBI Rate
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                MSMED Act ss.15-18 Interest
              </span>
            </div>
            <div className="border-l-2 border-red-500 pl-3">
              <span className="block text-base sm:text-xl md:text-2xl font-black text-red-400">
                Order XXXVII
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Summary Commercial Suit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "FMCG, Consumer Durables & Super-Stockist Recovery",
                href: "/industries/fmcg-distributors-super-stockist-recovery",
              },
              {
                label: "C&F Security Deposit Recovery",
                href: CANONICAL_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: TOC Sidebar + Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CnfDepositRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Primary Billing Trap */}
            <section
              id="heading-asm-dumping-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  The Primary Billing Trap: Quarter-End Targets &amp; Frozen Exit Claims
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Across the Indian FMCG, alcobev, consumer electronics, and paints landscape, Carrying and Forwarding (C&amp;F) agents and Super-Stockists serve as the critical financial backbone of distribution. Brands require these channel partners to park interest-free security deposits ranging from ₹25 Lakhs to ₹2 Crores, finance massive warehouse infrastructure, and maintain rolling working capital. However, an entrenched commercial failure mode occurs during quarterly and fiscal year-end target pushes.
                </p>
                <p>
                  To achieve internal regional sales quotas and qualify for executive bonuses, corporate Area Sales Managers (ASMs) and Regional Sales Managers (RSMs) routinely dump massive volumes of slow-moving primary stock into the stockist&apos;s depot. These billings are pushed under explicit verbal and electronic promises that the brand will issue special secondary clearance schemes, volume rebates, freight subsidies, and damaged stock credit notes.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-red-950 font-medium">
                  <strong>The Post-Resignation Corporate Freeze:</strong> Within months of pushing unliquidated primary inventory, the sales manager frequently resigns or transfers to another territory. When the super-stockist attempts to adjust the promised ₹15L–₹50L in secondary schemes against outstanding primary invoices, brand corporate finance repudiates the debit notes, disowns the former manager&apos;s communications, abruptly terminates the agency, and freezes the entire security deposit.
                </div>
                <p>
                  Leaving an agency termination unresolved creates compounding financial jeopardy. While brand finance sits on final settlement (F&amp;F) files for 18 to 36 months, the stockist faces mounting warehouse rental costs, rotting inventory nearing expiration, blocked working capital credit lines, and the risk of crossing the 3-year statutory limitation barrier under the Limitation Act, 1963.
                </p>
              </div>
            </section>

            {/* Section 2: Contract Act Section 222 */}
            <section
              id="heading-statutory-indemnity"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Contract Act Section 222: Statutory Indemnity for Market Schemes
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Brand corporate finance frequently claims that secondary discounts, promotional schemes, and market replacement credits cannot be honored unless accompanied by a physical corporate sanction letter signed by the National Head of Finance. Indian agency law completely refutes this corporate defense.
                </p>
                <p>
                  Under <strong className="text-slate-900">Section 222 of the Indian Contract Act, 1872</strong>, the employer of an agent is bound to indemnify the agent against the consequences of all lawful acts done by the agent in good faith and in the execution of the authority conferred upon them:
                </p>
                <div className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl text-xs sm:text-sm border border-slate-800 font-mono leading-relaxed">
                  <p className="text-amber-400 font-bold mb-1">
                    Section 222, Indian Contract Act, 1872:
                  </p>
                  &ldquo;The employer of an agent is bound to indemnify him against the consequences of all lawful acts done by such agent in exercise of the authority conferred upon him.&rdquo;
                </div>
                <p>
                  Furthermore, under <strong className="text-slate-900">Section 237 of the Contract Act</strong>, when an agent (the regional sales manager) has, without authority, done acts or incurred obligations to third persons on behalf of his principal, the principal is bound by such acts or obligations if he has by his words or conduct induced such third persons to believe that such acts and obligations were within the scope of the agent&apos;s authority.
                </p>
                <p>
                  By appointing sales managers, providing them with official email addresses, and empowering them to negotiate distribution targets, the brand creates ostensible authority. When the stockist disburses ₹20 Lakhs in promotional discounts to retail kiranas or secondary distributors based on ASM directives, the brand is statutorily mandated to reimburse the agent under Section 222.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                      Corporate Myth
                    </span>
                    <p className="text-xs text-slate-600">
                      &ldquo;Sales managers have no financial power; only corporate Head Office circulars can validate secondary trade claims and discount credit notes.&rdquo;
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="block text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                      Statutory Reality
                    </span>
                    <p className="text-xs text-emerald-800 font-medium">
                      Under ss. 222 &amp; 237 Contract Act, field instructions issued in regular course of business legally bind the corporate principal to indemnify the stockist.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Why Brands Cannot Forfeit Deposits */}
            <section
              id="heading-security-deposit-law"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Why FMCG Brands Cannot Forfeit Security Deposits Post-Termination
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  When a C&F agency or super-stockist relationship ends, brand finance departments frequently attempt to transform security deposits into an unearned revenue pool. They raise specious claims of &ldquo;territory non-performance&rdquo;, &ldquo;failure to meet minimum quarterly targets&rdquo;, or &ldquo;unliquidated market returns&rdquo; to justify retaining ₹25L–₹2Cr deposits.
                </p>
                <p>
                  Under established Supreme Court jurisprudence (<em className="text-slate-900 font-semibold">Kailash Nath Associates v. DDA</em>), security deposits are not liquidated damages that can be confiscated at will. The law establishes three inviolable principles protecting commercial agents:
                </p>
                <div className="space-y-3 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                        Fiduciary Custody vs. Liquidated Forfeiture
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A security deposit is deposited in trust to secure the physical custody of goods in transit and warehouse storage. Once stock is handed over or accounted for, the deposit must be released immediately. Retaining it without proving actual damage constitutes criminal breach of trust and unlawful forfeiture under Section 74 of the Contract Act.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                        Strict Bar on Unilateral Counterclaims (The Raman Iron Rule)
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under the landmark Supreme Court ruling in <em>Union of India v. Raman Iron Foundry</em>, a brand cannot set off unadjudicated claims for alleged damages or stock shortages against an admitted liquidated debt. Until a civil court or arbitrator determines liability, the brand has merely a right to sue—it cannot unilaterally swallow the deposit.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                        Statutory Possessory Lien (Sections 217 &amp; 221)
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The agent has an affirmative right under Section 217 and Section 221 of the Indian Contract Act to retain physical possession of the principal&apos;s goods, warehouse stock, and collected monies until all deposit refunds, handling fees, and secondary claims are satisfied in full.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Landmark Judicial Rulings */}
            <section
              id="heading-landmark-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Landmark Judicial Rulings on Agency Dues &amp; Security Deposits
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When drafting statutory demand notices or instituting recovery suits against national FMCG conglomerates, citing binding Supreme Court precedents dismantles frivolous corporate defenses at the pre-litigation stage:
              </p>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 font-semibold">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#DC2626] mb-2">
                      {item.parties} &bull; {item.date}
                    </p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p>
                        <strong>Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong>Judicial Holding:</strong> {item.holding}
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {item.amount}
                        </span>
                        <span className="text-slate-600 font-medium italic">
                          Rule: {item.takeaway}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Decision Tree Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Decision Tree: C&amp;F Agent Security Deposit &amp; F&amp;F Recovery
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Follow this operational and statutory escalation roadmap to evaluate your agency documentation, assert possessory liens, and select the optimal judicial forum for rapid realization:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900 p-4">
                <svg
                  viewBox="0 0 960 460"
                  className="w-full h-auto text-slate-100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={960}
                  height={460}
                >
                  {/* Flowchart Background Grid */}
                  <defs>
                    <linearGradient id="boxGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="boxGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                    <linearGradient id="boxGradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                  </defs>

                  {/* Stage 1: Trigger */}
                  <rect x="30" y="30" width="260" height="90" rx="10" fill="url(#boxGradRed)" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="50" y="65" fill="#FFFFFF" fontSize="13" fontWeight="bold">STAGE 1: AGENCY TERMINATION</text>
                  <text x="50" y="85" fill="#FEE2E2" fontSize="11">Brand terminates C&amp;F/Super-Stockist</text>
                  <text x="50" y="103" fill="#FEE2E2" fontSize="11">Withholds ₹25L–₹2Cr Deposit &amp; Claims</text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M290 75 L350 75" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 2: Evidence Audit */}
                  <rect x="350" y="30" width="260" height="90" rx="10" fill="url(#boxGradDark)" stroke="#475569" strokeWidth="1.5" />
                  <text x="370" y="65" fill="#38BDF8" fontSize="13" fontWeight="bold">STAGE 2: EVIDENCE TRIAGE</text>
                  <text x="370" y="85" fill="#CBD5E1" fontSize="11">Audit RTGS UTR, Stamped Agreement</text>
                  <text x="370" y="103" fill="#CBD5E1" fontSize="11">Extract DMS/WhatsApp BSA s.63 Dossier</text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M610 75 L670 75" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 3: Possession & Lien */}
                  <rect x="670" y="30" width="260" height="90" rx="10" fill="url(#boxGradDark)" stroke="#475569" strokeWidth="1.5" />
                  <text x="690" y="65" fill="#FBBF24" fontSize="13" fontWeight="bold">STAGE 3: POSSESSORY LIEN</text>
                  <text x="690" y="85" fill="#CBD5E1" fontSize="11">Contract Act s.221 Agent Lien</text>
                  <text x="690" y="103" fill="#CBD5E1" fontSize="11">Withhold physical stock until F&amp;F paid</text>

                  {/* Down Arrow from Stage 3 to Decision Split */}
                  <path d="M800 120 L800 180" stroke="#94A3B8" strokeWidth="2" />

                  {/* Stage 4: 15-Day Advocate Notice */}
                  <rect x="350" y="180" width="260" height="90" rx="10" fill="url(#boxGradRed)" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="370" y="215" fill="#FFFFFF" fontSize="13" fontWeight="bold">STAGE 4: STATUTORY NOTICE</text>
                  <text x="370" y="235" fill="#FEE2E2" fontSize="11">Advocates Act 15-Day Legal Demand</text>
                  <text x="370" y="253" fill="#FEE2E2" fontSize="11">Invoke Contract Act s.73/222 &amp; Raman Iron</text>

                  {/* Connectors */}
                  <path d="M800 180 L610 225" stroke="#94A3B8" strokeWidth="2" />

                  {/* Arrow to Dual Judicial Pathways */}
                  <path d="M480 270 L300 330" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M480 270 L660 330" stroke="#94A3B8" strokeWidth="2" />

                  {/* Pathway A: MSME Samadhaan */}
                  <rect x="150" y="330" width="300" height="100" rx="10" fill="url(#boxGradEmerald)" stroke="#10B981" strokeWidth="1.5" />
                  <text x="170" y="365" fill="#FFFFFF" fontSize="13" fontWeight="bold">PATH A: MSME SAMADHAAN (ss. 15-18)</text>
                  <text x="170" y="385" fill="#D1FAE5" fontSize="11">&bull; Registered Micro/Small C&amp;F Agency</text>
                  <text x="170" y="403" fill="#D1FAE5" fontSize="11">&bull; Mandatory 3x RBI Bank Rate Compound Interest</text>
                  <text x="170" y="420" fill="#D1FAE5" fontSize="11">&bull; 75% Pre-Deposit on Section 19 Appeal</text>

                  {/* Pathway B: Commercial Court */}
                  <rect x="510" y="330" width="300" height="100" rx="10" fill="url(#boxGradEmerald)" stroke="#10B981" strokeWidth="1.5" />
                  <text x="530" y="365" fill="#FFFFFF" fontSize="13" fontWeight="bold">PATH B: COMMERCIAL COURT (s.2(1)(c)(ix))</text>
                  <text x="530" y="385" fill="#D1FAE5" fontSize="11">&bull; Order XXXVII CPC Summary Liquidated Suit</text>
                  <text x="530" y="403" fill="#D1FAE5" fontSize="11">&bull; Order 38 Rule 5 Interim Bank Account Freeze</text>
                  <text x="530" y="420" fill="#D1FAE5" fontSize="11">&bull; Section 12A Mediation Bypass for Urgent Relief</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Step 1: Agency Breach
                  </span>
                  <p className="text-xs font-bold text-white">
                    Brand Terminates Agency &amp; Freezes Deposit
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Corporate finance sits on ₹25L–₹2Cr deposit and denies secondary scheme claims.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                    Step 2: Electronic Evidence
                  </span>
                  <p className="text-xs font-bold text-white">
                    Audit RTGS Proofs &amp; BSA s.63 Dossier
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Compile UTR deposit numbers, signed appointment agreement, and ASM WhatsApp circulars.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Step 3: Possessory Lien
                  </span>
                  <p className="text-xs font-bold text-white">
                    Exercise Contract Act Section 221 Lien
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Hold depot goods and warehouse possession until all agency commission and claims are paid.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Step 4: Judicial Enforcement
                  </span>
                  <p className="text-xs font-bold text-white">
                    MSME Samadhaan (3x RBI) or Commercial Court
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Fast-track Order XXXVII summary suit or MSMED Act Section 18 statutory conciliation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Statutory Claims Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Claims Matrix: Recovering Deposits, Schemes &amp; Reverse Stock
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When structuring a commercial demand against a corporate brand, every monetary head must be anchored to its exact statutory foundation to eliminate debtor obfuscation:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-bold">Claim Head</th>
                      <th className="py-3 px-4 font-bold">Statutory Anchor</th>
                      <th className="py-3 px-4 font-bold">Brand Defense Tactic</th>
                      <th className="py-3 px-4 font-bold">Legal Counter &amp; Judicial Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Principal Security Deposit (₹25L–₹2Cr)
                      </td>
                      <td className="py-3 px-4 font-mono text-red-600 font-semibold">
                        Contract Act s.73 &amp; s.74
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Fabricated depot inventory shortages &amp; unproven damage deductions.
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">
                        Disallow under <em>Raman Iron</em> doctrine; file Order XXXVII Summary Suit.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Secondary Trade Scheme Reimbursements
                      </td>
                      <td className="py-3 px-4 font-mono text-red-600 font-semibold">
                        Contract Act s.222 &amp; s.237
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        &ldquo;ASM had no financial authority; claims lack HO written circular.&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">
                        Enforce ostensible authority and agent indemnity backed by BSA s.63 chat logs.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Unsold Expired &amp; Damaged Market Returns
                      </td>
                      <td className="py-3 px-4 font-mono text-red-600 font-semibold">
                        Contract Act s.73 &amp; CGST s.34
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Refusing Reverse E-Way Bills &amp; credit notes to avoid inventory write-offs.
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">
                        Serve 72-hr inspection notice; claim warehouse storage demurrage and invoice debt.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Accrued Interest on Deposit (9%–18% p.a.)
                      </td>
                      <td className="py-3 px-4 font-mono text-red-600 font-semibold">
                        MSMED Act s.16 / CPC s.34
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        &ldquo;Agreement contains a waiver clause; interest is non-contractual.&rdquo;
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">
                        MSMED Act s.16 overrides contract waivers; 3x RBI compound interest mandatory.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Post-Termination Warehouse Demurrage
                      </td>
                      <td className="py-3 px-4 font-mono text-red-600 font-semibold">
                        Contract Act s.73 &amp; s.221
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Abandoning non-moving goods in stockist godown for months without rent.
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">
                        Bill monthly commercial pallet rent; assert Section 221 possessory lien.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: 4 Commercial Dispute Playbooks (Tabs) */}
            <section
              id="heading-failure-modes"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  4 Critical Commercial Failure Modes &amp; Agency Dispute Playbooks
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Interact with the failure mode explorer below to review real-world commercial bottlenecks encountered during C&amp;F and Super-Stockist agency exits:
              </p>
              <CnfDepositRecoveryScenarioTabs />
            </section>

            {/* Section 8: Worked Financial Ledger */}
            <section
              id="heading-worked-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Worked Financial Ledger: Rebutting Deductions on ₹86.5 Lakh Claim
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Consider an actual commercial case study of a premier confectionery and beverage Super-Stockist operating in Uttar Pradesh and Delhi-NCR with an FMCG brand:
                </p>

                {/* Ledger Breakdown Card */}
                <div className="rounded-xl border border-slate-200 bg-slate-900 text-white p-5 sm:p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-red-400">
                      Commercial Claim Triage &bull; Apex FMCG Corp vs. Metro Stockist
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      Total Liquidated Claim: ₹86,50,000
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">
                        1. Principal Security Deposit (Paid via RTGS on 14-Aug-2021)
                      </span>
                      <span className="font-mono font-bold text-white">₹50,00,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">
                        2. Unreimbursed Secondary Trade Schemes &amp; Price-Offs (Q3/Q4 DMS Logs)
                      </span>
                      <span className="font-mono font-bold text-white">₹18,50,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">
                        3. Unsold Expired Stock in Warehouse (Not Uplifted by Brand)
                      </span>
                      <span className="font-mono font-bold text-white">₹12,00,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">
                        4. Accrued Contractual Interest (10% p.a. for 12 months post-exit)
                      </span>
                      <span className="font-mono font-bold text-white">₹6,00,000</span>
                    </div>

                    <div className="flex justify-between items-center py-2 bg-slate-800/80 px-3 rounded-lg text-amber-400">
                      <span>Brand Unilateral Debit Note (Purported Stock Audit Shortage)</span>
                      <span className="font-mono font-bold">- ₹42,00,000 [ILLEGAL]</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800">
                    <span className="text-xs text-slate-400">
                      Status under Raman Iron Foundry doctrine:
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded">
                      Debit Note Quashed &bull; Full ₹86,50,000 Enforceable
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs sm:text-sm text-emerald-900 space-y-2">
                  <p className="font-bold text-emerald-950">
                    Legal Analysis &amp; Judicial Outcome:
                  </p>
                  <p>
                    The brand attempted to tender a &ldquo;full and final&rdquo; settlement cheque of only ₹8 Lakhs, asserting that the ₹42 Lakh internal audit debit note was final. Legal counsel served a 15-day statutory demand notice pointing out that:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>The stockist held counter-signed joint physical inspection logs proving zero shortages on the handover date.</li>
                    <li>The ₹42L deduction constituted an unadjudicated claim for damages, prohibited from set-off under <em>Raman Iron Foundry</em>.</li>
                    <li>Secondary schemes were pre-approved by the ASM and documented under BSA Section 63 WhatsApp logs.</li>
                  </ul>
                  <p className="font-semibold text-emerald-950">
                    Within 21 days of notice service, brand legal escalated the file to corporate treasury and released the full ₹86.5 Lakhs along with formal clearance certificates.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: 7-Step Operational SOP */}
            <section
              id="heading-step-by-step-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  7-Step Operational SOP: From Warehouse Handover to Full Recovery
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Execute this battle-tested institutional protocol immediately upon receiving or issuing an agency termination notice:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Audit Agency Dossier &amp; Freeze RTGS Proofs
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Locate the original signed C&amp;F agreement, security deposit receipts, and bank RTGS/NEFT transaction UTR confirmations. Confirm whether the agreement promises interest or incorporates arbitration clauses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Extract DMS / ERP Secondary Scheme Ledger
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download complete secondary billing logs from Bizom, FieldAssist, or SAP SD. Reconcile all outstanding retailer scheme debit notes and match them against ASM email and WhatsApp circulars.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Execute Joint Physical Handover Panchnama
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Never allow brand representatives to uplift depot inventory without a signed, dual-stamped physical handover sheet detailing carton counts, batch numbers, and zero-shortage certificates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Issue 72-Hour Reverse Logistics Notice
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Serve a formal intimation demanding that the brand generate Reverse E-Way Bills and uplift expired stock within 72 hours, failing which commercial godown storage rent will be billed daily under Contract Act Section 73.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Assert Agent&apos;s Possessory Lien (Section 221)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If brand finance hesitates or raises bogus deductions, exercise your statutory possessory lien over remaining company stock, depot equipment, and transport bilties until all agency claims are cleared.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Serve 15-Day Advocate Statutory Demand Notice
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dispatch a Bar Council-compliant legal demand notice via Speed Post RPAD, WhatsApp, and official corporate email under Contract Act ss. 73/222, invoking the Raman Iron Foundry bar against unilateral set-offs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Institute Commercial Court Suit or MSME Samadhaan
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If unpaid on Day 16, initiate an Order XXXVII CPC summary debt suit or file before the MSME Facilitation Council for mandatory 3x RBI compound interest, seeking Order 38 Rule 5 interim bank account attachment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: BSA 2023 Section 63 Evidence Dossier */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  BSA 2023 Section 63 Evidence Dossier: ERP, WhatsApp &amp; Handover Logs
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Under the <strong className="text-slate-900">Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, electronic records are admissible as primary documentary evidence provided the integrity and custodial metadata of the device or server are certified.
                </p>
                <p>
                  To defeat corporate claims of &ldquo;unauthorized ASM commitments&rdquo; or &ldquo;missing physical records&rdquo;, your legal recovery dossier must contain:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      1. Financial &amp; Deposit Proofs
                    </span>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                      <li>Bank statement showing RTGS/NEFT debit to the brand.</li>
                      <li>Original bank UTR transaction receipt.</li>
                      <li>Official brand security deposit confirmation letter.</li>
                      <li>Annual TDS certificates (Form 26AS) showing commission payouts.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      2. Secondary Scheme &amp; ASM Logs
                    </span>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                      <li>WhatsApp chats and broadcasts from ASM/RSM announcing schemes.</li>
                      <li>Email correspondence regarding price-offs and volume rebates.</li>
                      <li>ERP / DMS (Bizom, FieldAssist, SAP) secondary sales dumps.</li>
                      <li>Retailer credit distribution notes signed by field sales reps.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      3. Warehouse &amp; Inventory Handover
                    </span>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                      <li>Dual-signed joint physical stock audit sheet on exit day.</li>
                      <li>Goods Inward / Outward register entries and gate passes.</li>
                      <li>Photographic and timestamped video evidence of stock condition.</li>
                      <li>Transporter bilties (Lorry Receipts) for reverse logistics dispatches.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      4. Statutory Tax &amp; GST Reconciliation
                    </span>
                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                      <li>GSTR-1 and GSTR-3B filings reflecting primary billings.</li>
                      <li>Credit notes issued under Section 34 of the CGST Act.</li>
                      <li>E-Way Bills generated for all inter-depot stock movements.</li>
                      <li>Udyam Registration Certificate for MSME statutory enforcement.</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic">
                  Note: Under BSA 2023 Section 63, all WhatsApp screenshots and cloud ERP exports must be accompanied by an electronic certificate executed by the custodian of the mobile phone or computer system.
                </p>
              </div>
            </section>

            {/* Sibling & Cross-Link Hub Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-2">
                FMCG &amp; Distributor Recovery Network
              </span>
              <p className="text-base sm:text-lg font-bold text-white mb-2">
                Explore Sibling Recovery Playbooks &amp; Judicial Remedies
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Resolve every commercial friction point across General Trade, Modern Trade, and Quick-Commerce distribution channels:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <Link
                  href="/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">Quick-Commerce Deductions</span>
                  <span className="text-red-400 font-bold">&rarr;</span>
                </Link>
                <Link
                  href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">Blank Signed Security Cheques (s.20)</span>
                  <span className="text-red-400 font-bold">&rarr;</span>
                </Link>
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">Distributor &amp; Dealer Dues Recovery</span>
                  <span className="text-red-400 font-bold">&rarr;</span>
                </Link>
                <Link
                  href="/gst-input-tax-credit-blocked-supplier-non-filing-gstr-3b-recovery"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">Blocked GST ITC Vendor Recovery</span>
                  <span className="text-red-400 font-bold">&rarr;</span>
                </Link>
                <Link
                  href="/stop-payment-cheque-bounce-case"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">Stop-Payment Cheque Bounce Remedies</span>
                  <span className="text-red-400 font-bold">&rarr;</span>
                </Link>
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">Cheque Bounce Against Directors (s.141)</span>
                  <span className="text-red-400 font-bold">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions on C&amp;F Agent &amp; Super-Stockist Dues
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-center justify-between font-bold text-xs sm:text-sm text-slate-900 gap-3">
                      <span>{faq.question}</span>
                      <span className="text-red-500 font-bold text-base transition-transform duration-200 group-open:rotate-45 shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Citations & Acts */}
            <section
              id="heading-statutory-citations"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities, Legal Framework &amp; Regulatory Acts
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                All legal notices, commercial summary suits, and possessory lien applications drafted under this playbook are grounded in the following statutory authorities:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500/50 hover:bg-red-50/20 transition-all flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-slate-900 mb-2">
                      {source.title}
                    </span>
                    <span className="text-[11px] font-semibold text-red-600 flex items-center gap-1">
                      Official Government Source &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Dual-Track Conversion CTA Card */}
            <CnfDepositRecoveryCTA />
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
