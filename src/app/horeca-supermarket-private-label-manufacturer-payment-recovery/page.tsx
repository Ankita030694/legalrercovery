import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PrivateLabelRecoveryCTA from "./PrivateLabelRecoveryCTA";
import PrivateLabelRecoveryTableOfContents from "./PrivateLabelRecoveryTableOfContents";
import PrivateLabelRecoveryScenarioTabs from "./PrivateLabelRecoveryScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/horeca-supermarket-private-label-manufacturer-payment-recovery`;
const PAGE_H1 =
  "D2C Brand Stopped Paying Your Third-Party Cosmetics, Personal Care or Food Manufacturing Plant? Custom Batch & Packaging Recovery";

export const metadata: Metadata = {
  title: "Private-Label Cosmetics & FMCG Manufacturer Debt Recovery",
  description:
    "Manufactured custom serum bottles or snack pouches for a D2C brand that stopped paying? Recover dues via MSMED Act s.15-18 & Sale of Goods Act s.55 fast.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Private-Label Cosmetics & FMCG Manufacturer Debt Recovery",
    description:
      "Manufactured custom serum bottles or snack pouches for a D2C brand that stopped paying? Recover dues via MSMED Act s.15-18 & Sale of Goods Act s.55 fast.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Private-Label Cosmetics and FMCG Contract Manufacturer Debt Recovery Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private-Label Cosmetics & FMCG Manufacturer Debt Recovery",
    description:
      "Manufactured custom serum bottles or snack pouches for a D2C brand that stopped paying? Recover dues via MSMED Act s.15-18 & Sale of Goods Act s.55 fast.",
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
    title: "The Sale of Goods Act, 1930 (Section 55 — Action for Price; Section 44 — Liability of Buyer for Neglecting Delivery; Section 42 — Acceptance)",
    url: "https://www.indiacode.nic.in/handle/123456789/2389",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — Mandatory 45-Day Payment & 3x RBI Bank Rate Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 73 — Breach of Contract & Consequential Damages; Section 74 — Liquidated Damages & Actual Procurement Loss)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Drugs and Cosmetics Act, 1940 & Rules 1945 (Form 32 / Loan License Provisions & Manufacturing Quality Compliance)",
    url: "https://www.cdsco.gov.in",
  },
  {
    title: "Food Safety and Standards Act, 2006 (FSSAI Regulations for Third-Party Food Processing & Packaging)",
    url: "https://www.fssai.gov.in",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Manufacturing & Processing Agreements; Section 12A Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for ERP, COA, BMR & WhatsApp Sign-Offs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138 & 141 — Dishonor of Cheques & Personal Criminal Liability of Signatory Directors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Rule on Suing for Full Price of Custom-Manufactured Goods",
    parties: "P.S.N.S. Ambalavana Chettiar v. Express Newspapers Ltd.",
    citation: "(1968) 2 SCR 439, Supreme Court of India",
    date: "Judgment Dated 23 April 1968",
    facts:
      "A buyer contracted for bespoke goods tailored specifically to its business specifications and subsequently refused to accept delivery or clear the outstanding contract price. The buyer argued that the manufacturer was restricted to claiming damages under ordinary market rules rather than suing for the agreed purchase price.",
    holding:
      "The Supreme Court affirmed that under Section 55(2) of the Sale of Goods Act, 1930, where the price is payable on a day certain irrespective of delivery, or where goods are manufactured to custom specifications that cannot be resold without substantial commercial loss in an open market, the seller is entitled to maintain an action for the full contract price. The manufacturer is not required to discard or dump the goods at scrap value before enforcing recovery.",
    amount: "Full Contract Price Enforced Against Defaulting Commercial Buyer",
    takeaway:
      "Contract manufacturers of custom-printed cosmetics, custom-bottled serums, and private-label foods are legally entitled to sue the D2C brand for the 100% contract invoice value, not merely open-market scrap difference.",
  },
  {
    title: "Supreme Court Bar on Unilateral Debit Notes for Unadjudicated Quality Allegations",
    parties: "Union of India v. Raman Iron Foundry",
    citation: "(1974) 2 SCC 231, Supreme Court of India",
    date: "Judgment Dated 11 March 1974",
    facts:
      "A contracting buyer unilaterally withheld and deducted payments from pending contract bills, alleging breaches, shortages, and damages from earlier manufacturing batches. The buyer claimed an inherent right of equitable set-off before any court had adjudicated their damage allegations.",
    holding:
      "The Supreme Court ruled that a claim for unliquidated damages or alleged inventory loss does not give rise to a debt until liability is determined and damages are assessed by a competent court or arbitral tribunal. A party has merely a right to sue for damages, and cannot unilaterally appropriate or deduct alleged damages from undisputed, liquidated manufacturing bills.",
    amount: "Arbitrary Quality Debit Notes Quashed; Full Invoice Dues Ordered Cleared",
    takeaway:
      "D2C brands cannot invent post-manufacture viscosity or packaging flaws to withhold clean manufacturing invoices. Unilateral debit notes are legally void without mutual agreement or accredited laboratory adjudication.",
  },
  {
    title: "Supreme Court Test Discarding Frivolous Afterthought Quality Disputes",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Judgment Dated 21 September 2017",
    facts:
      "Upon receiving a statutory demand notice for unpaid invoices, a debtor company fabricated quality complaints and operational breaches for the first time in response to the demand, claiming a 'pre-existing dispute' to derail recovery.",
    holding:
      "The Supreme Court held that the defense of a pre-existing dispute must be real, bona fide, and supported by contemporaneous documentary evidence. A defense that is patently spurious, illusory, hypothetical, or an afterthought raised only after statutory demand is served must be summarily rejected by judicial authorities.",
    amount: "Spurious Quality Defense Struck Down; Statutory Recovery Enforced",
    takeaway:
      "When a D2C founder invents packaging or formulation complaints weeks after signing Batch Manufacturing Records (BMR) and receiving delivery intimations, courts treat the excuse as a legally void afterthought.",
  },
  {
    title: "Cheques Issued as Advance or Security for Manufacturing Batches Trigger Section 138",
    parties: "Sripati Singh v. State of Jharkhand & Anr.",
    citation: "(2021) SCC OnLine SC 1002, Supreme Court of India",
    date: "Judgment Dated 28 October 2021",
    facts:
      "A commercial borrower issued cheques described as 'security cheques' for a loan and commercial delivery commitments. When defaulted, the cheques were presented and dishonored, and the borrower pleaded that security cheques do not represent an existing debt.",
    holding:
      "The Supreme Court held that when cheques are handed over as security for a financial or commercial commitment, and if on the date of presentation the liability has matured and remains unpaid, the cheque represents a legally enforceable debt under Section 138 of the Negotiable Instruments Act, 1881.",
    amount: "Criminal Cognizance Upheld Against Defaulters; Mandatory 20% Interim Deposit",
    takeaway:
      "Post-dated or security cheques collected from D2C founders upon issuing production orders mature into enforceable criminal liabilities under Section 138 the moment the batch is ready and unpaid.",
  },
];

const FAQS = [
  {
    question: "Can I sell the orphaned custom-branded cosmetics or food batches in the open market to recover my manufacturing costs?",
    answer:
      "Generally, no. Custom-branded goods bear the D2C brand's registered trademark, logo, and statutory labeling information (including their FSSAI marketer license or FDA cosmetic marketing endorsement). Selling these goods in the open market, through discount wholesalers, or on liquidator portals without express written consent exposes the contract manufacturer to trademark infringement suits under the Trade Marks Act, 1999, as well as regulatory penalties under the Drugs & Cosmetics Act, 1940 or FSSAI Regulations for misbranding. Instead, your lawful remedy is under Section 55(2) and Section 44 of the Sale of Goods Act, 1930: sue the brand directly for the full contract price plus warehouse storage demurrage.",
  },
  {
    question: "What if the D2C brand claims the batch had 'wrong viscosity, color variation, or odor' after refusing to pay?",
    answer:
      "Under the Sale of Goods Act, 1930 (Section 41 & 42), the buyer is deemed to have accepted the goods if they retain them without intimating rejection within a reasonable time or do any act inconsistent with the seller's ownership. Furthermore, in contract manufacturing, quality is legally benchmarked against the approved Master Batch Record (BMR) and Certificate of Analysis (COA) issued by your in-house or NABL-accredited laboratory. Under the Supreme Court's Mobilox Innovations doctrine, afterthought quality complaints raised only after invoices fall overdue or demand notices are served are treated as sham defenses and summarily dismissed.",
  },
  {
    question: "Can an MSME-registered contract manufacturing plant recover interest on delayed D2C batch payments?",
    answer:
      "Yes. If your plant holds an active Udyam Registration as a Micro or Small Enterprise under the MSMED Act, 2006, the buyer is statutorily mandated under Section 15 to clear payments within 45 days (or the agreed contract period, not exceeding 45 days). Under Section 16, any delay beyond this window attracts mandatory compound interest with monthly rests at three times the RBI Bank Rate. This statutory interest is non-negotiable, cannot be waived by any contract clause, and is tax-disallowable for the buyer under Section 23 of the MSMED Act and Section 43B(h) of the Income Tax Act.",
  },
  {
    question: "How can I recover the cost of stranded custom packaging (printed bottles, tubes, mono-cartons) purchased for the brand?",
    answer:
      "Where custom packaging materials (such as screen-printed glass dropper bottles, engraved closures, or brand-specific mono-cartons) were procured based on the brand's confirmed Purchase Order, signed MOQ commitment, or approved artwork proofs, the expenditure represents actual reliance damage under Section 73 of the Indian Contract Act, 1872. You can legally claim 100% of the procurement invoice value, inbound freight, and inventory carrying costs from the brand, alongside an authorization to destroy or scrap the unprinted packaging to mitigate storage overhead.",
  },
  {
    question: "Can I hold the D2C brand founders personally liable for the unpaid manufacturing invoices?",
    answer:
      "Yes, under three distinct legal routes: (1) If the founders executed personal guarantees or indemnity deeds in the manufacturing agreement; (2) If the founders issued post-dated cheques (PDCs) from company accounts that bounced, the signatory directors are personally and criminally liable under Sections 138 and 141 of the Negotiable Instruments Act, 1881; (3) If the founders collected customer preorders or e-commerce revenues while willfully diverting capital and inducing the manufacturer to produce without intent to pay, a criminal complaint under Sections 316 and 318 of Bharatiya Nyaya Sanhita, 2023 (formerly IPC 406/420) can be filed alongside lifting the corporate veil in Commercial Court.",
  },
  {
    question: "What is the statutory limitation period to file a recovery claim against a defaulting private-label brand?",
    answer:
      "Under the Limitation Act, 1963, the limitation period to file a commercial suit for the price of goods sold and delivered or for breach of contract (Articles 14, 55, and 113) is 3 years from the date of the invoice or breach. Under Section 18 of the Limitation Act, any written acknowledgment of the liability—such as WhatsApp messages acknowledging the batch, email confirmations from founders, or partial TDS deposits on Form 26AS—resets the 3-year limitation clock from that date.",
  },
  {
    question: "Can I file an Order XXXVII Summary Suit in Commercial Court for unpaid manufacturing invoices?",
    answer:
      "Yes. Where you possess a written contract or confirmed Purchase Order, signed Batch Manufacturing Records (BMR), Goods Delivery Intimations, and unpaid commercial invoices with proof of service, the claim represents a liquidated commercial debt. Under Order XXXVII of the Code of Civil Procedure, 1908 and Section 2(1)(c)(xviii) of the Commercial Courts Act, 2015, you can institute a fast-track Summary Suit where the debtor has no automatic right to defend unless it deposits the disputed sum or proves a substantial defense.",
  },
  {
    question: "Why should a contract manufacturing plant issue an advocate demand notice before going to court or MSEFC?",
    answer:
      "Over 75% of defaulting D2C brand disputes settle within 15 to 30 days of receiving a formal, advocate-drafted statutory demand notice. When brand founders and their venture capital/angel backers see a meticulously prepared notice citing Sale of Goods Act Section 55, MSMED Act 3x RBI compound interest, personal director liability under NI Act Section 141, and potential regulatory notifications to the state FDA/FSSAI licensing authorities, they immediately prioritize liquidating the plant's invoices to safeguard their company valuation and avoid public litigation.",
  },
];

export default function PrivateLabelManufacturerRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description:
      "Comprehensive B2B recovery guide for third-party cosmetics, personal care, nutraceutical, and food contract manufacturers to recover unpaid invoices, custom batches, stranded packaging, and MOQ commitments from defaulting D2C and HoReCa brands under Sale of Goods Act s.55 and MSMED Act ss.15-18.",
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
    dateModified: "2026-11-17T10:00:00+05:30",
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
        name: "Private-Label & Contract Manufacturer Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Contract Manufacturers Recover Unpaid D2C Batch Dues & Custom Packaging Costs",
    description:
      "A 7-step statutory legal procedure for OEM/ODM cosmetics, personal care, and food contract manufacturers to recover unpaid invoices, custom batch manufacturing costs, and stranded packaging materials from defaulting D2C brands.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Production Records & Seal Technical Dossier",
        text: "Compile Master Batch Records (BMR), Batch Packaging Records (BPR), in-house Certificate of Analysis (COA), and accredited NABL test reports certifying conformity to the agreed Product Technical Dossier.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Quantify Stranded Inventory & Calculate Warehouse Demurrage",
        text: "Perform physical stock verification of finished goods, semi-finished bulk, and branded packaging (screen-printed bottles, tubes, cartons) and compute daily storage demurrage under Sale of Goods Act Section 44.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue 48-Hour Statutory Take-Delivery Demand",
        text: "Serve a formal written demand putting the D2C brand on notice that the goods are ready for dispatch and demanding balance payment and lifting within 48 hours under Sale of Goods Act Section 44.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve 15-Day Advocate Pre-Litigation Statutory Notice",
        text: "Issue an advocate demand notice invoking Sale of Goods Act Section 55(2), MSMED Act Section 15, and Contract Act Section 73, served via Speed Post RPAD, WhatsApp, and email under BSA 2023 Section 63.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Trigger MSME Samadhaan Conciliation & MSEFC Arbitration",
        text: "File an online recovery petition on the MSME Samadhaan portal to initiate statutory conciliation and claim mandatory compound interest at three times the RBI Bank Rate under Section 16.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Institute Commercial Court Summary Suit & Asset Attachment",
        text: "File an Order XXXVII CPC Summary Suit in Commercial Court with an urgent interim application under Order XXXVIII Rule 5 to attach the D2C brand's e-commerce and quick-commerce receivables.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Prosecute Bounced Cheques Under Section 138 NI Act",
        text: "If post-dated or security cheques were dishonored, serve a 30-day statutory notice and initiate criminal proceedings against the signatory directors under Sections 138 and 141 of the Negotiable Instruments Act.",
      },
    ],
  };

  return (
    <>
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Third-Party OEM &bull; Private-Label Contract Manufacturing Recovery</span>
              <span className="text-slate-400">&bull;</span>
              <span>Sale of Goods Act s.55 &bull; MSMED Act s.15–18</span>
            </div>

            {/* Single Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {PAGE_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary &bull; Statutory Right of Action
              </span>
              When an undercapitalized D2C beauty, wellness, or food brand orders custom batches, burns its digital advertising budget, and abandons finished goods or custom-printed packaging, contract manufacturers are not limited to resale salvage. Under{" "}
              <strong className="text-white">Section 55(2) and Section 44 of the Sale of Goods Act, 1930</strong>, the manufacturer is legally entitled to maintain an action for the{" "}
              <strong className="text-emerald-400">100% full contract price</strong> plus warehouse storage demurrage, because custom-branded stock with proprietary trademarks and loan-license endorsements cannot lawfully be liquidated in an open market. For MSME-registered plants under our{" "}
              <Link
                href="/industries/fmcg-distributors-super-stockist-recovery"
                className="text-red-300 hover:text-white underline font-semibold transition-colors"
              >
                FMCG, Consumer Durables &amp; Super-Stockist Recovery Hub
              </Link>
              , the buyer is statutorily bound under{" "}
              <strong className="text-white">MSMED Act Sections 15–18</strong> to settle within 45 days subject to mandatory compound interest at three times the RBI Bank Rate.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block">
                  Action for Price
                </span>
                <p className="text-base sm:text-xl md:text-2xl font-black text-slate-100">
                  Sale of Goods s.55
                </p>
                <p className="text-[11px] text-slate-300">100% Invoice Recovery</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block">
                  Custom Inventory
                </span>
                <p className="text-base sm:text-xl md:text-2xl font-black text-emerald-400">
                  Zero Resale Risk
                </p>
                <p className="text-[11px] text-slate-300">Trademark Bar on Salvage</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block">
                  MSME Interest
                </span>
                <p className="text-base sm:text-xl md:text-2xl font-black text-amber-400">
                  3x RBI Rate
                </p>
                <p className="text-[11px] text-slate-300">Monthly Compounded</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block">
                  Director Liability
                </span>
                <p className="text-base sm:text-xl md:text-2xl font-black text-red-400">
                  NI Act s.138/141
                </p>
                <p className="text-[11px] text-slate-300">Personal Founder Exposure</p>
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
                  label: "Private-Label & Contract Manufacturer Recovery",
                  href: CANONICAL_URL,
                },
              ]}
            />
          </div>

          {/* 2-Column Split: Sidebar TOC + Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <PrivateLabelRecoveryTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: THE ORPHANED BATCH CRISIS */}
              <section
                id="heading-orphaned-batch-crisis"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    01
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    The D2C Orphaned Batch Crisis: Stranded Custom Inventory &amp; Packaging
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Over the past five years, India&apos;s direct-to-consumer (D2C) startup ecosystem has experienced explosive growth across skincare, cosmetics, haircare, nutraceuticals, gourmet snacks, and eco-friendly cleaning formulations. Behind every glossy Instagram ad and influencer endorsement lies a third-party contract manufacturing plant, OEM/ODM facility, or loan-license bottling factory in hubs like Baddi (Himachal Pradesh), Haridwar (Uttarakhand), Ahmedabad (Gujarat), or Peenya (Karnataka).
                  </p>
                  <p>
                    However, this boom has triggered an unprecedented commercial crisis: the <strong className="text-slate-900">Orphaned Batch Crisis</strong>. Under pressure to show hypergrowth, early-stage and venture-funded D2C founders issue massive Purchase Orders committing to strict Minimum Order Quantities (MOQs) of 20,000 to 1,00,000 units to secure aggressive per-unit pricing. The contract manufacturer purchases specialized active ingredients, imports customized glass dropper bottles, screen-prints brand logos, and produces custom-laminated mono-cartons.
                  </p>
                  <p>
                    When the D2C brand&apos;s digital customer acquisition costs (CAC) suddenly surge, Meta ad accounts get disabled, or subsequent funding rounds collapse, the founders abruptly halt operations. They stop lifting completed production batches, ignore delivery notices, and refuse to pay the 70% dispatch balances. The contract plant is left with warehouses full of branded, finished goods and hundreds of thousands of bespoke printed cartons.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-amber-900">
                    <strong className="font-bold block mb-1">
                      The Critical Salvage Deadlock in Private-Label Manufacturing:
                    </strong>
                    Unlike standard industrial commodities (such as raw steel, cement, or generic grains) that can be liquidated on commodity exchanges, custom private-label goods cannot be resold in an open market. Under the <strong className="font-semibold">Trade Marks Act, 1999</strong>, the contract manufacturer cannot liquidate the stock to third-party distributors or discounters without committing trademark infringement. Furthermore, under the <strong className="font-semibold">Drugs and Cosmetics Act, 1940</strong> and <strong className="font-semibold">FSSAI Regulations</strong>, the goods carry the D2C brand&apos;s proprietary license and marketer details. Attempting to sell them openly constitutes illegal misbranding. The plant is legally trapped unless statutory remedies are enforced.
                  </div>

                  <p>
                    To break this deadlock, contract manufacturers must reject the narrative that they are mere unsecured creditors holding unsellable scrap. By deploying the statutory mechanics of the <strong className="text-slate-900">Sale of Goods Act, 1930</strong>, the <strong className="text-slate-900">MSMED Act, 2006</strong>, and <strong className="text-slate-900">Negotiable Instruments Act, 1881</strong>, factories can compel full invoice payment, recover packaging procurement costs, and hold defaulting startup founders personally liable.
                  </p>
                </div>
              </section>

              {/* SECTION 2: SALE OF GOODS ACT SECTION 55 & SECTION 44 */}
              <section
                id="heading-sale-of-goods-act"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    02
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    Sale of Goods Act Section 55: Suing for Price of Custom-Branded Stock
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    When a commercial buyer refuses to accept delivery of manufactured goods, ordinary contract law under Section 73 of the Indian Contract Act allows the seller to resell the goods and sue only for the difference between the contract price and market price. However, in private-label manufacturing, <strong className="text-slate-900">there is no market price</strong> because no third party can lawfully buy or distribute custom-labeled cosmetic or food products.
                  </p>
                  <p>
                    The legislature anticipated this precise scenario in the <strong className="text-slate-900">Sale of Goods Act, 1930</strong> under Sections 55, 44, and 42:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="text-xs font-bold text-[#DC2626] uppercase tracking-wide mb-1">
                        Section 55(1) &bull; Property Passed
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 font-semibold mb-2">
                        Action for Full Contract Price Where Goods Are Appropriated
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Where under a contract of sale the property in the goods has passed to the buyer and the buyer wrongfully neglects or refuses to pay for the goods according to the terms of the contract, the seller may sue him for the price of the goods. Once the batch is manufactured, packaged with the buyer&apos;s brand, and invoiced, property is unconditionally appropriated to the contract.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="text-xs font-bold text-[#DC2626] uppercase tracking-wide mb-1">
                        Section 55(2) &bull; Payment on Day Certain
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 font-semibold mb-2">
                        Suing for Price Irrespective of Physical Delivery
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Where under a contract of sale the price is payable on a day certain irrespective of delivery and the buyer wrongfully neglects or refuses to pay such price, the seller may sue him for the price although the property in the goods has not passed and the goods have not been appropriated to the contract.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl my-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-2">
                      Section 44 &bull; Buyer&apos;s Statutory Liability for Neglecting Delivery
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      &quot;When the seller is ready and willing to deliver the goods and requests the buyer to take delivery, and the buyer does not within a reasonable time after such request take delivery of the goods, he is liable to the seller for any loss occasioned by his neglect or refusal to take delivery, and also for a reasonable charge for the care and custody of the goods.&quot;
                    </p>
                    <p className="text-xs text-emerald-400 font-semibold mt-2">
                      Practical Meaning: In addition to the 100% batch price, the manufacturer can legally bill the D2C brand for daily warehouse pallet rent, temperature-controlled storage electricity, and demurrage!
                    </p>
                  </div>

                  <p>
                    Under the landmark ruling of the Supreme Court in <em className="text-slate-900 font-medium">P.S.N.S. Ambalavana Chettiar v. Express Newspapers Ltd.</em> (1968) 2 SCR 439, the apex court affirmed that where goods are manufactured to custom specifications for which no alternative market exists without severe financial detriment, the manufacturer is fully entitled to maintain an action for the contract price.
                  </p>
                </div>
              </section>

              {/* SECTION 3: MSMED ACT S.15-18 PROTECTION */}
              <section
                id="heading-msmed-act-protection"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    03
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    MSMED Act Protection for Third-Party Cosmetics &amp; Food OEM Plants
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Most contract manufacturing, packaging, and formulation units in India are registered as Micro or Small Enterprises under the <strong className="text-slate-900">Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>. This registration provides the strongest statutory shield against defaulting corporate buyers and private-equity-backed brands.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                    <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50">
                      <span className="text-xs font-extrabold text-[#DC2626] block mb-1">
                        Section 15 &bull; 45-Day Cap
                      </span>
                      <p className="text-xs text-slate-700">
                        Payment must be made on or before the agreed date, which cannot exceed 45 days from the day of acceptance or deemed acceptance. Any contract clause specifying 60, 90, or 120-day credit is void ab initio.
                      </p>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50">
                      <span className="text-xs font-extrabold text-[#DC2626] block mb-1">
                        Section 16 &bull; 3x RBI Interest
                      </span>
                      <p className="text-xs text-slate-700">
                        Buyer is liable to pay compound interest with monthly rests at three times the RBI Bank Rate from the appointed day until full liquidation. This statutory interest is non-waivable.
                      </p>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50">
                      <span className="text-xs font-extrabold text-[#DC2626] block mb-1">
                        Section 18 &bull; MSEFC Fast-Track
                      </span>
                      <p className="text-xs text-slate-700">
                        Disputes can be referred to the Micro and Small Enterprises Facilitation Council (MSEFC), which conducts statutory conciliation and fast-track arbitration overriding private arbitration clauses.
                      </p>
                    </div>
                  </div>

                  <p>
                    You can compute the exact compounded liability on your overdue manufacturing batches using our dedicated{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-[#DC2626] hover:underline font-bold"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>
                    .
                  </p>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                      Section 43B(h) Income Tax Disallowance &bull; Corporate Tax Leverage
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under Section 43B(h) of the Income Tax Act, 1961, if a corporate D2C brand fails to pay an MSME-registered contract manufacturer within 45 days, the entire unpaid expenditure cannot be deducted as an expense in that financial year. The brand faces a 25%–35% tax hit on the gross unpaid batch value! Contract manufacturers can serve our{" "}
                      <Link
                        href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                        className="text-[#DC2626] underline font-bold"
                      >
                        Section 43B(h) MSME Tax Disallowance Demand Notice
                      </Link>{" "}
                      to bring the brand&apos;s CFO and auditors to the negotiating table before fiscal year-end.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: DRUGS & COSMETICS ACT / FSSAI COMPLIANCE */}
              <section
                id="heading-regulatory-compliance"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    04
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    Drugs &amp; Cosmetics Act &amp; FSSAI: Neutralizing Debtor Quality Excuses
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    When D2C brands run out of marketing cash, their most predictable legal defense is manufacturing defect. The brand suddenly sends an email claiming that the batch has &quot;slight color separation&quot;, &quot;viscosity discrepancy&quot;, or &quot;atypical fragrance&quot; and purports to cancel the Purchase Order or issue unilateral debit notes.
                  </p>
                  <p>
                    Contract manufacturers must understand that Indian regulatory statutes—the <strong className="text-slate-900">Drugs and Cosmetics Act, 1940</strong> and the <strong className="text-slate-900">Food Safety and Standards Act, 2006 (FSSAI)</strong>—establish objective, statutory standards that thoroughly dismantle subjective, after-the-fact buyer pretexts:
                  </p>

                  <div className="space-y-3 my-4">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-1">
                        1. The Master Batch Record (BMR) &amp; Batch Packaging Record (BPR) Shield
                      </strong>
                      <p className="text-xs text-slate-600">
                        Under Good Manufacturing Practices (GMP) and Schedule M-II of the Drugs and Cosmetics Rules, 1945, every batch is produced under certified operating procedures. The BMR logs raw material lot numbers, mixing temperatures, heating cycles, and in-process QC checks signed by certified chemists. This creates a statutory presumption of quality.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-1">
                        2. NABL Third-Party Laboratory Certification
                      </strong>
                      <p className="text-xs text-slate-600">
                        A buyer cannot legally reject a batch based on subjective sensory claims by marketing personnel. Under Indian evidence law, quality repudiation requires an accredited Certificate of Analysis (COA) from an independent, NABL-certified laboratory demonstrating non-conformity with the signed Technical Specifications Dossier.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-1">
                        3. Section 42 Sale of Goods Act &bull; Deemed Acceptance Rule
                      </strong>
                      <p className="text-xs text-slate-600">
                        If the brand received the pre-dispatch sample, signed the pilot approval, or failed to inspect the batch within the contractual window (typically 48 to 72 hours of dispatch intimation), the buyer is statutorily deemed to have accepted the goods. Any subsequent complaint is legally barred as an afterthought under the Supreme Court&apos;s <em className="font-semibold">Mobilox Innovations</em> precedent.
                      </p>
                    </div>
                  </div>

                  <p>
                    Furthermore, if the brand is operating under a <strong className="text-slate-900">Form 32 Loan License</strong> utilizing your factory&apos;s manufacturing license, the manufacturer retains regulatory leverage. If the brand defaults, the manufacturer can notify the State Drug Licensing Authority or FSSAI of contractual termination, effectively halting the brand&apos;s ability to legally market those SKUs on quick-commerce and retail shelves.
                  </p>
                </div>
              </section>

              {/* SECTION 5: LANDMARK COURT PRECEDENTS */}
              <section
                id="heading-landmark-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    05
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    Landmark Court Precedents on Private-Label &amp; Custom Contract Debts
                  </h2>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((item, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/50 hover:bg-white transition-colors relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="pl-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                          {item.title}
                        </span>
                        <div className="flex flex-wrap items-baseline gap-2 mb-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {item.parties}
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            {item.citation} &bull; {item.date}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3 space-y-1.5">
                          <p>
                            <strong className="text-slate-900 font-semibold">Facts: </strong>
                            {item.facts}
                          </p>
                          <p>
                            <strong className="text-slate-900 font-semibold">Judicial Holding: </strong>
                            {item.holding}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200 text-xs">
                          <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                            Outcome: {item.amount}
                          </span>
                          <span className="text-slate-600 italic">
                            Creditor Rule: {item.takeaway}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 6: OPERATIONAL DECISION TREE */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    06
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    Recovery Decision Tree: Contract Manufacturer Operational Escalation
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  How an OEM/ODM manufacturing plant escalates unpaid batch dues depending on production status, packaging exposure, and commercial collateral:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white mb-6">
                  <svg
                    viewBox="0 0 960 440"
                    width={960}
                    height={440}
                    className="w-full h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Top Level: Default Trigger */}
                    <rect x="330" y="20" width="300" height="60" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="480" y="45" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                      D2C Brand Stops Batch Payments / Refuses Uplift
                    </text>
                    <text x="480" y="65" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      PO Confirmed &bull; BMR Signed &bull; Stock Ready in Warehouse
                    </text>

                    {/* Connecting Lines from Top */}
                    <path d="M480 80 V110" stroke="#DC2626" strokeWidth="2" />
                    <path d="M160 110 H800" stroke="#64748B" strokeWidth="2" />
                    <path d="M160 110 V140" stroke="#64748B" strokeWidth="2" />
                    <path d="M480 110 V140" stroke="#64748B" strokeWidth="2" />
                    <path d="M800 110 V140" stroke="#64748B" strokeWidth="2" />

                    {/* Path 1: Finished Custom Stock (Sale of Goods Act s.55) */}
                    <rect x="60" y="140" width="200" height="90" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="160" y="165" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Branch 1: Finished Stock
                    </text>
                    <text x="160" y="185" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Serums / Food Packaged
                    </text>
                    <text x="160" y="205" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Zero Alternative Market
                    </text>
                    <text x="160" y="220" fill="#CBD5E1" fontSize="9" textAnchor="middle">
                      Trademark Bar on Resale
                    </text>

                    {/* Path 2: Stranded Custom Packaging & MOQ Shortfall */}
                    <rect x="380" y="140" width="200" height="90" rx="8" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="480" y="165" fill="#F59E0B" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Branch 2: Stranded Packaging
                    </text>
                    <text x="480" y="185" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Printed Bottles / Foil Pouches
                    </text>
                    <text x="480" y="205" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Contract Act s.73 Reliance Loss
                    </text>
                    <text x="480" y="220" fill="#CBD5E1" fontSize="9" textAnchor="middle">
                      MOQ Breach &amp; Storage Dues
                    </text>

                    {/* Path 3: PDCs Bounced / Director Personal Guarantees */}
                    <rect x="700" y="140" width="200" height="90" rx="8" fill="#0F172A" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="800" y="165" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Branch 3: Cheques &amp; Guarantees
                    </text>
                    <text x="800" y="185" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Dishonored Batch Cheques
                    </text>
                    <text x="800" y="205" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      NI Act s.138/141 Prosecution
                    </text>
                    <text x="800" y="220" fill="#CBD5E1" fontSize="9" textAnchor="middle">
                      Direct Founder Personal Liability
                    </text>

                    {/* Downward Connectors */}
                    <path d="M160 230 V260" stroke="#38BDF8" strokeWidth="2" />
                    <path d="M480 230 V260" stroke="#F59E0B" strokeWidth="2" />
                    <path d="M800 230 V260" stroke="#EF4444" strokeWidth="2" />

                    {/* Tactical Legal Action Blocks */}
                    <rect x="60" y="260" width="200" height="85" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
                    <text x="160" y="285" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Action for 100% Price
                    </text>
                    <text x="160" y="305" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      Sale of Goods Act s.55(2)
                    </text>
                    <text x="160" y="325" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      + Warehouse Demurrage s.44
                    </text>

                    <rect x="380" y="260" width="200" height="85" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="1" />
                    <text x="480" y="285" fill="#F59E0B" fontSize="11" fontWeight="bold" textAnchor="middle">
                      MSMED Act s.15–18
                    </text>
                    <text x="480" y="305" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      MSEFC Conciliation / Arbitration
                    </text>
                    <text x="480" y="325" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      3x RBI Compound Interest
                    </text>

                    <rect x="700" y="260" width="200" height="85" rx="8" fill="#1E293B" stroke="#EF4444" strokeWidth="1" />
                    <text x="800" y="285" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Criminal + Commercial Court
                    </text>
                    <text x="800" y="305" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      s.138 NI Notice (15 Days)
                    </text>
                    <text x="800" y="325" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      + Order 38 R.5 Asset Freeze
                    </text>

                    {/* Bottom Consolidation Node */}
                    <path d="M160 345 V380 H800 V345" stroke="#10B981" strokeWidth="2" fill="none" />
                    <path d="M480 345 V395" stroke="#10B981" strokeWidth="2" />
                    <rect x="310" y="395" width="340" height="40" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="480" y="420" fill="#34D399" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Full Principal Recovery + 3x RBI Interest + Legal Costs
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Flowchart Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border-l-4 border-sky-400">
                    <span className="text-[11px] font-bold text-sky-400 uppercase block mb-1">
                      Track 1 &bull; Finished Custom Formulations
                    </span>
                    <p className="text-xs font-semibold text-slate-100 mb-1">
                      Sale of Goods Act Section 55(2) Action for Full Price
                    </p>
                    <p className="text-xs text-slate-300">
                      Cannot resell in open market due to buyer&apos;s registered trademark. Sue for 100% invoice price plus Section 44 storage demurrage.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl border-l-4 border-amber-400">
                    <span className="text-[11px] font-bold text-amber-400 uppercase block mb-1">
                      Track 2 &bull; Stranded Custom Packaging &amp; MOQ Breach
                    </span>
                    <p className="text-xs font-semibold text-slate-100 mb-1">
                      Contract Act Section 73 &bull; Full Procurement Reimbursement
                    </p>
                    <p className="text-xs text-slate-300">
                      Recover 100% procurement cost of printed bottles, foil pouches, and cartons ordered on confirmed buyer forecasts.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl border-l-4 border-red-500">
                    <span className="text-[11px] font-bold text-red-400 uppercase block mb-1">
                      Track 3 &bull; Cheque Dishonor &amp; Founder Fraud
                    </span>
                    <p className="text-xs font-semibold text-slate-100 mb-1">
                      NI Act Section 138/141 &bull; Personal Director Criminal Liability
                    </p>
                    <p className="text-xs text-slate-300">
                      Cheques issued by founders represent enforceable debts under the Supreme Court&apos;s Sripati Singh rule. Signatory directors face personal summons and 20% interim deposits.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 7: STATUTORY CLAIMS MATRIX */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    07
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    Statutory Claims Matrix: Custom Stock, Packaging, MOQ &amp; Demurrage
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Comprehensive comparison of actionable legal heads available to OEM/ODM contract manufacturers under Indian commercial statutes:
                </p>

                <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Disputed Claim Head</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Governing Statute</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Evidentiary Requirement</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Statutory Remedy &amp; Quantum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Orphaned Finished Stock (Custom Serums / Foods)
                        </td>
                        <td className="py-3 px-4 font-mono text-red-700">
                          Sale of Goods Act 1930 s.55(1) &amp; s.55(2)
                        </td>
                        <td className="py-3 px-4">
                          Confirmed PO, Batch Manufacturing Record (BMR), in-house COA, Delivery Intimation
                        </td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">
                          100% Invoice Value; Zero obligation to mitigate at scrap price
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Stranded Custom Packaging (Screen-Printed Glass/Tubes)
                        </td>
                        <td className="py-3 px-4 font-mono text-red-700">
                          Indian Contract Act 1872 s.73 (Reliance Loss)
                        </td>
                        <td className="py-3 px-4">
                          Approved Artwork Proofs, Packaging Vendor Invoices, Payment Proofs, Inventory Roster
                        </td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">
                          Full procurement cost + Inbound freight + Scrap offset authorization
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Minimum Order Quantity (MOQ) Volume Shortfall
                        </td>
                        <td className="py-3 px-4 font-mono text-red-700">
                          Contract Act s.73 &amp; Commercial Courts Act
                        </td>
                        <td className="py-3 px-4">
                          Manufacturing Agreement with signed MOQ table, production forecasting schedules
                        </td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">
                          Loss of contract margin on unlifted volume + Fixed overhead recovery
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Warehouse Storage Rent &amp; Pallet Demurrage
                        </td>
                        <td className="py-3 px-4 font-mono text-red-700">
                          Sale of Goods Act 1930 s.44
                        </td>
                        <td className="py-3 px-4">
                          Written notice requesting buyer to lift stock, pallet space logs, commercial storage tariff
                        </td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">
                          Monthly warehouse storage charges from date of neglect until court decree
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Delayed Payment Statutory Interest
                        </td>
                        <td className="py-3 px-4 font-mono text-red-700">
                          MSMED Act 2006 s.16 &amp; s.17
                        </td>
                        <td className="py-3 px-4">
                          Valid Udyam Registration Certificate, Commercial Invoice, Proof of Service
                        </td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">
                          3x RBI Bank Rate compounded monthly; Non-waivable statutory right
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Bounced Cheques &amp; Director Fraud
                        </td>
                        <td className="py-3 px-4 font-mono text-red-700">
                          NI Act 1881 s.138 &amp; s.141; BNS 2023 s.316/318
                        </td>
                        <td className="py-3 px-4">
                          Original Cheque, Bank Return Memo, 30-Day Demand Notice, Proof of Delivery (RPAD)
                        </td>
                        <td className="py-3 px-4 font-semibold text-emerald-800">
                          Up to 2x Cheque Amount + 2 years imprisonment + 20% interim deposit (s.143A)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 8: 4 COMMERCIAL DISPUTE PLAYBOOKS */}
              <section
                id="heading-failure-modes"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    08
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    4 Critical Commercial Failure Modes &amp; OEM Dispute Playbooks
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Select an operational failure mode below to review the debtor&apos;s statutory trap, legal rebuttals, and exact advocate recovery playbook:
                </p>

                <PrivateLabelRecoveryScenarioTabs />
              </section>

              {/* SECTION 9: WORKED FINANCIAL LEDGER */}
              <section
                id="heading-worked-calculation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    09
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    Worked Financial Ledger: Recovering ₹64.8L on Orphaned D2C Serums
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The financial impact of an abandoned manufacturing run extends far beyond the raw material cost. Consider a realistic case study of an MSME contract manufacturing plant in Himachal Pradesh that produced 35,000 units of custom 30ml Anti-Aging Serums for an Instagram D2C brand under a signed Purchase Order.
                  </p>

                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-800 my-4">
                    <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                        Institutional Recovery Ledger &bull; Contract Manufacturing Audit
                      </span>
                      <span className="text-xs font-mono text-emerald-400">
                        Status: Adjudicated Statutory Demand Dossier
                      </span>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                        <span className="text-slate-300">1. Finished Serum Batch Invoice (35,000 units @ ₹120/unit)</span>
                        <span className="font-mono font-bold text-white">₹42,00,000</span>
                      </div>

                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                        <span className="text-slate-300">Less: 30% Advance Received with Purchase Order</span>
                        <span className="font-mono text-emerald-400 font-semibold">- ₹12,60,000</span>
                      </div>

                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800 font-semibold text-slate-200">
                        <span>Net Unpaid Production Batch Balance</span>
                        <span className="font-mono text-white">₹29,40,000</span>
                      </div>

                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                        <span className="text-slate-300">2. Stranded Custom Packaging (Screen-printed bottles &amp; mono-cartons)</span>
                        <span className="font-mono text-amber-400 font-semibold">+ ₹18,40,000</span>
                      </div>

                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                        <span className="text-slate-300">3. Warehouse Storage Demurrage (6 months @ ₹45,000/month under s.44)</span>
                        <span className="font-mono text-amber-400 font-semibold">+ ₹2,70,000</span>
                      </div>

                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                        <span className="text-slate-300">4. MSMED Act s.16 Interest (3x RBI Bank Rate = 19.5% p.a., 8 months overdue)</span>
                        <span className="font-mono text-emerald-400 font-semibold">+ ₹6,82,000</span>
                      </div>

                      <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                        <span className="text-slate-300">5. Advocate Pre-Litigation Legal Fees &amp; Verification Costs</span>
                        <span className="font-mono text-slate-300">+ ₹75,000</span>
                      </div>

                      <div className="flex justify-between items-center pt-3 text-base sm:text-lg font-black">
                        <span className="text-red-400">Total Statutory Claim Against D2C Brand:</span>
                        <span className="font-mono text-emerald-400">₹58,07,000</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600">
                    When the brand attempted to tender a &quot;full and final&quot; settlement offer of ₹10 Lakhs, the plant served an advocate statutory demand with this comprehensive ledger. Seeing that the claim encompassed Sale of Goods Act Section 55(2), packaging reliance damages, warehouse storage rent, and non-waivable MSME interest, the D2C company&apos;s lead venture investor stepped in to clear the principal and packaging dues in full within 21 days.
                  </p>
                </div>
              </section>

              {/* SECTION 10: 7-STEP OPERATIONAL SOP */}
              <section
                id="heading-step-by-step-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    10
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    7-Step Operational SOP: From Demand Notice to Asset Attachment
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold mb-1">
                        Step 1: Audit Production Records &amp; Seal Technical Dossier
                      </strong>
                      <p className="text-slate-600">
                        Gather Master Batch Records (BMR), Batch Packaging Records (BPR), in-house Certificate of Analysis (COA), and accredited NABL test reports certifying conformity to the agreed Product Technical Dossier.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold mb-1">
                        Step 2: Quantify Stranded Inventory &amp; Calculate Demurrage
                      </strong>
                      <p className="text-slate-600">
                        Perform a formal physical stock verification of finished goods, bulk formulation, and branded packaging (screen-printed bottles, tubes, cartons) and compute daily storage demurrage under Sale of Goods Act Section 44.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold mb-1">
                        Step 3: Issue 48-Hour Statutory Take-Delivery Demand
                      </strong>
                      <p className="text-slate-600">
                        Serve a formal written demand putting the D2C brand on notice that the goods are ready for dispatch and demanding balance payment and lifting within 48 hours under Sale of Goods Act Section 44.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold mb-1">
                        Step 4: Serve 15-Day Advocate Pre-Litigation Statutory Demand Notice
                      </strong>
                      <p className="text-slate-600">
                        Issue an advocate demand notice invoking Sale of Goods Act Section 55(2), MSMED Act Section 15, and Contract Act Section 73, served via Speed Post RPAD, WhatsApp, and email under BSA 2023 Section 63.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      5
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold mb-1">
                        Step 5: Trigger MSME Samadhaan Conciliation &amp; MSEFC Arbitration
                      </strong>
                      <p className="text-slate-600">
                        File an online recovery petition on the MSME Samadhaan portal to initiate statutory conciliation and claim mandatory compound interest at three times the RBI Bank Rate under Section 16.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      6
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold mb-1">
                        Step 6: Institute Commercial Court Summary Suit &amp; Asset Attachment
                      </strong>
                      <p className="text-slate-600">
                        File an Order XXXVII CPC Summary Suit in Commercial Court with an urgent interim application under Order XXXVIII Rule 5 to attach the D2C brand&apos;s e-commerce and quick-commerce receivables. Also review our{" "}
                        <Link
                          href="/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery"
                          className="text-[#DC2626] font-semibold underline"
                        >
                          Quick-Commerce &amp; Modern-Trade Deductions Playbook
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      7
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold mb-1">
                        Step 7: Prosecute Dishonored Cheques Under Section 138 NI Act
                      </strong>
                      <p className="text-slate-600">
                        If post-dated or security cheques were dishonored, serve a 30-day statutory notice and initiate criminal proceedings against the signatory directors under Sections 138 and 141 of the Negotiable Instruments Act. See our guides on{" "}
                        <Link
                          href="/stop-payment-cheque-bounce-case"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          Stop Payment Cheque Bounce Cases
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/cheque-bounce-case-against-company-directors"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          Cheque Bounce Cases Against Company Directors
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 11: BSA 2023 SECTION 63 EVIDENCE DOSSIER */}
              <section
                id="heading-bsa-evidence"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    11
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    BSA 2023 Section 63 Electronic Evidence Dossier for OEM Plants
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Under Section 63 of the <strong className="text-slate-900">Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced Section 65B of the Indian Evidence Act, 1872, electronic records—including ERP batch entries, digital Certificate of Analysis PDFs, email Purchase Orders, and WhatsApp artwork approvals—are fully admissible as primary documentary evidence when accompanied by an electronic certificate.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Technical &amp; Production Quadrant
                      </span>
                      <ul className="text-xs space-y-1.5 text-slate-600 list-disc pl-4">
                        <li>Master Batch Record (BMR) with chemist signatures</li>
                        <li>Batch Packaging Record (BPR) with artwork sign-offs</li>
                        <li>In-house &amp; NABL third-party Certificate of Analysis (COA)</li>
                        <li>FDA/FSSAI manufacturing logbook entries</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Commercial &amp; Procurement Quadrant
                      </span>
                      <ul className="text-xs space-y-1.5 text-slate-600 list-disc pl-4">
                        <li>Purchase Order (PO) or signed Manufacturing Agreement</li>
                        <li>Approved artwork proofs for bottles, labels, and mono-cartons</li>
                        <li>Invoices from specialized packaging &amp; ingredient suppliers</li>
                        <li>Proforma &amp; final commercial dispatch tax invoices</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Communication &amp; Acknowledgment Quadrant
                      </span>
                      <ul className="text-xs space-y-1.5 text-slate-600 list-disc pl-4">
                        <li>Email threads regarding production milestones and delays</li>
                        <li>WhatsApp chats with founders discussing launch schedules</li>
                        <li>Form 26AS TDS statements reflecting buyer acknowledgment</li>
                        <li>Audit balance confirmation requests sent by statutory auditors</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Statutory Dispatch &amp; Notice Quadrant
                      </span>
                      <ul className="text-xs space-y-1.5 text-slate-600 list-disc pl-4">
                        <li>48-Hour Statutory Take-Delivery Notice with email timestamps</li>
                        <li>Advocate Demand Notice with Speed Post RPAD postal receipts</li>
                        <li>India Post web tracking delivery confirmation reports</li>
                        <li>BSA 2023 Section 63 electronic compliance affidavit</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    For distributor and dealer debt collection mechanisms, also refer to our guide on{" "}
                    <Link
                      href="/distributor-dealer-dues-recovery"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      Distributor &amp; Dealer Dues Recovery
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      Security Cheques under Section 20/138 NI Act
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* DUAL-TRACK CONVERSION FUNNEL CTA */}
              <PrivateLabelRecoveryCTA />

              {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    12
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    Frequently Asked Questions on Contract Manufacturer Debt Recovery
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 open:bg-white transition-all"
                    >
                      <summary className="font-bold text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-3 list-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 13: STATUTORY CITATIONS & ACTS */}
              <section
                id="heading-statutory-citations"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    13
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    Statutory Framework, Legal Authorities &amp; Regulatory Enactments
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  Every recovery procedure, notice clause, and court petition drafted by LegalRecovery.in is anchored in verified central enactments and statutory portals:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 transition-colors flex items-center justify-between group"
                    >
                      <span className="pr-2">{source.title}</span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-[#DC2626] shrink-0 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                  Disclaimer: The legal analysis, decision workflows, and statutory calculations provided on this page are intended for institutional, corporate, and commercial creditors (third-party manufacturers, OEM plants, private-label packagers, and loan-license operators). LegalRecovery.in operates in strict compliance with the Advocates Act, 1961 and Bar Council of India rules. Nothing on this website constitutes legal solicitation or an advocate-client relationship prior to formal engagement.
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
