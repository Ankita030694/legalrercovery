import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import GarmentSorNoticeCTA from "./GarmentSorNoticeCTA";
import GarmentSorTableOfContents from "./GarmentSorTableOfContents";
import GarmentSorScenarioTabs from "./GarmentSorScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Fashion Retailer Dumping Unsold Stock or Forcing SOR Deductions?",
  description:
    "Retail chain signed AQL Passed at your factory yet dumps unsold festive stock back as defective? Stop unauthorized SOR returns & recover outright dues under SGA s.24.",
  alternates: {
    canonical: `${SITE_URL}/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery`,
  },
  openGraph: {
    title: "Fashion Retailer Dumping Unsold Stock or Forcing SOR Deductions?",
    description:
      "Retail chain signed AQL Passed at your factory yet dumps unsold festive stock back as defective? Stop unauthorized SOR returns & recover outright dues under SGA s.24.",
    url: `${SITE_URL}/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery`,
    type: "article",
    siteName: "LegalRecovery India",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Apparel Vendors vs Fashion Retail Chains SOR Recovery Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Retailer Dumping Unsold Stock or Forcing SOR Deductions?",
    description:
      "Stop fashion retail chains from converting outright purchase orders into SOR consignment returns. Enforce Sale of Goods Act Section 24 and MSMED Act 45-day payment rules.",
    creator: "@legalrecoveryin",
    site: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
};

export default function GarmentSorRecoveryPage() {
  const pageUrl = `${SITE_URL}/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery`;
  const parentHubUrl = `${SITE_URL}/industries/textiles-apparel-garment-recovery`;

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
        name: "Textiles & Apparel Recovery",
        item: parentHubUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fashion Retail SOR & Rejection Recovery",
        item: pageUrl,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Apparel Vendors vs Large-Format Fashion Retailers: Stopping Unauthorized End-of-Season Returns, Forced Markdowns & Post-QC Rejections",
    description:
      "Operational decision tree, statutory remedies under Sale of Goods Act Section 24, MSMED Act 45-day payment mandates, and commercial recovery protocols for apparel and knitwear manufacturers against national retail chains and fashion e-commerce portals.",
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery India",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    author: {
      "@type": "Organization",
      name: "LegalRecovery Commercial Litigation & Textile Insolvency Practice Group",
      url: SITE_URL,
    },
    datePublished: "2026-11-17T09:30:00+05:30",
    dateModified: "2026-11-17T09:30:00+05:30",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Apparel Vendors Defeat Post-Season SOR Returns and Recover Withheld Invoices",
    description:
      "Step-by-step statutory recovery workflow for garment manufacturers when retail chains wrongfully return seasonal inventory or deduct forced markdown debits.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Issue Written Protest on Unilateral SOR Debit Notes",
        text: "Formally reject the retailer's debit note within 48 hours in writing. State that purchase orders were executed on outright terms and refuse authorization for inward return gate passes.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Compile Factory-Gate AQL Clearance and Transit Estoppel",
        text: "Assemble third-party pre-shipment AQL 2.5 inspection certificates, verified lorry receipts (LR), electronic waybills, and inward Goods Receipt Notes (GRN) establishing conclusive acceptance.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue Statutory Demand under Sale of Goods Act Section 24 and MSMED Act",
        text: "Serve a fact-verified demand notice demanding immediate RTGS release of invoice principal plus compounding interest at 3x RBI bank rate under MSMED Section 16, notifying Income Tax Section 43B(h) disallowance.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Escalate to MSEFC Conciliation or Summary Commercial Suit under Order 37",
        text: "File an electronic petition on the MSME Samadhaan portal or institute a summary suit in the Commercial Court seeking an interim attachment before judgment on retailer bank accounts.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can a fashion retail chain legally convert an outright Purchase Order into SOR (Sale or Return)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Under the Sale of Goods Act, 1930 and Section 62 of the Indian Contract Act, novation or alteration of contract terms requires mutual written consent of both parties. Once goods are accepted against an outright purchase order (PO), title and inventory risk transfer completely to the buyer. Unilateral conversion to Sale or Return (SOR) at the end of the selling season constitutes a breach of contract and an unlawful withholding of the agreed price.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a retail chain returns display-damaged or shopworn garments 4 months after delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 42 of the Sale of Goods Act, a buyer is deemed to have accepted the goods when they do any act in relation to them which is inconsistent with the ownership of the seller (such as affixing retail price tags, placing garments on floor display hangers, or merchandising them in trial rooms) or retains them beyond a reasonable time without intimating rejection. Garments returned with broken security tags, perfume marks, soilage, or fabric fade constitute buyer shopwear, and the vendor is legally entitled to reject the return and claim 100% of the invoice value.",
        },
      },
      {
        "@type": "Question",
        name: "How does factory-gate AQL (Acceptable Quality Limit) inspection protect the apparel vendor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When a retailer's nominated quality auditor (or third-party agency like SGS, Intertek, or Bureau Veritas) conducts pre-shipment AQL inspection and signs an Inspection Passed Certificate, the buyer exercises their statutory right of inspection under Section 41 of the Sale of Goods Act. Once goods are dispatched upon this sign-off, the buyer is legally estopped from asserting generic quality rejections, stitch defects, or shade variations months later.",
        },
      },
      {
        "@type": "Question",
        name: "How does the MSME 45-day payment rule (Section 15) impact 120-day fashion SOR credit cycles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Section 15 of the MSMED Act, 2006 mandates that payment to a registered MSME supplier cannot exceed 45 days from the date of acceptance, notwithstanding anything contained in any agreement. Any contractual clause stipulating a 120-day or 180-day fashion credit cycle or linking payment to 'sales velocity' is void under Section 24 of the MSMED Act, which has overriding effect over conflicting private contracts.",
        },
      },
      {
        "@type": "Question",
        name: "Can an e-commerce fashion marketplace deduct forced promotional markdowns without vendor consent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Unilateral deduction of promotional discounts, platform listing rebates, or End-of-Season Sale (EOSS) margin contributions from vendor disbursements without an express written consent addendum violates Section 55 of the Sale of Goods Act (Suit for Price). Vendors can claim full recovery of deducted amounts along with statutory interest through the MSME Facilitation Council or Commercial Courts.",
        },
      },
      {
        "@type": "Question",
        name: "How does Section 43B(h) of the Income Tax Act help apparel manufacturers recover pending retail dues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 43B(h), if a corporate retailer fails to pay a registered MSME manufacturer within 45 days (under written contract) or 15 days (without written terms), the entire outstanding purchase value is disallowed as a business expense for that financial year, adding directly to the retailer's taxable income and triggering a 25%–35% tax liability. Notifying the retailer's Chief Financial Officer and statutory auditors of imminent 43B(h) disallowance frequently accelerates release of withheld payments before fiscal year-end.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Operational Creditor Playbook</span>
            <span>&bull;</span>
            <span>SGA §24 &amp; MSMED Act §15</span>
            <span>&bull;</span>
            <span>Garment Vendor Recovery</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Apparel Vendors vs Large-Format Fashion Retailers: Stopping Unauthorized End-of-Season Returns, Forced Markdowns &amp; Post-QC Rejections
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Executive Creditor Protocol
            </span>
            Apparel manufacturers supplying national retail chains and fashion e-commerce portals under outright Purchase Orders are protected under{" "}
            <strong className="text-white">Sale of Goods Act s.24</strong> and{" "}
            <Link
              href="/industries/textiles-apparel-garment-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Textiles &amp; Garment Recovery Frameworks
            </Link>
            . Once pre-dispatch AQL inspection certificates are signed, property passes to the buyer. Retailers cannot unilaterally convert outright orders to Sale or Return (SOR), deduct forced promotional markdowns, or dump shopworn display inventory back after season end. All dues are recoverable under{" "}
            <Link
              href="/law/section-43bh-msme-payment-rule"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              MSMED Act 45-day mandates and Section 43B(h)
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Statutory Return Limit
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400">
                Lapsed
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                SGA §24 Reasonable Time
              </span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                MSME Payment Ceiling
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-amber-400">
                45 Days
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Overrides 120d Credit
              </span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Statutory Interest
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-red-400">
                3x RBI Rate
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Monthly Compounding
              </span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Inspection Estoppel
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-slate-100">
                AQL 2.5
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Pre-Dispatch Binding
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumb component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Textiles & Apparel Recovery",
                href: "/industries/textiles-apparel-garment-recovery",
              },
              {
                label: "Fashion Retail SOR & Rejection Recovery",
                href: "/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Sticky Sidebar TOC */}
          <GarmentSorTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Executive Statutory Summary */}
            <section
              id="heading-statutory-summary"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Executive Creditor Answer: The Unlawful SOR Trap for Apparel Vendors
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  In major textile manufacturing hubs across India—including <strong className="text-slate-900">Tirupur, Noida, Gurugram, Bengaluru, Ludhiana, and Surat</strong>—apparel manufacturers and knitwear exporters face a chronic, systemic commercial trap. National large-format fashion retail chains, department stores, and venture-backed e-commerce portals place massive seasonal orders (Autumn/Winter, Festive/Diwali, Spring/Summer) on what appears to be an outright Purchase Order (PO).
                </p>
                <p>
                  However, when retail footfall underperforms, weather changes, or fashion trends shift, these institutional buyers unilaterally treat outright transactions as zero-risk consignment stock. Four to six months later, long after the selling season has ended, the retailer generates unapproved debit notes, deducts arbitrary 40%–60% forced markdown subsidies, or attempts to physically dump truckloads of crumpled, soiled, shopworn garments back at the vendor&apos;s factory gates under the pretext of &quot;quality rejections.&quot;
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 text-amber-900 text-xs sm:text-sm">
                  <strong className="font-bold block mb-1">
                    Statutory Rule of Law (Sale of Goods Act, 1930 &sect;24):
                  </strong>
                  Where goods are delivered on approval or &quot;on sale or return,&quot; property in the goods passes to the buyer when the buyer signifies approval, does any act adopting the transaction, or retains the goods without giving notice of rejection within the agreed time or beyond a reasonable time. If the original contract was an outright PO, unilateral conversion into SOR without bilateral written novation is void ab initio.
                </div>

                <p>
                  This playbook provides apparel promoters, finance directors, and commercial heads with the exact statutory weapons, contractual defenses, and litigation escalation pathways required to halt unauthorized returns, repudiate bogus quality rejections, and recover 100% of withheld garment receivables.
                </p>
              </div>
            </section>

            {/* Section 2: SOR Conversion Abuses & Modus Operandi */}
            <section
              id="heading-sor-abuse-mechanics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  How Large-Format Retailers Manufacture Post-Season Deductions
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  Large fashion retailers exploit asymmetrical commercial bargaining power to force apparel vendors into absorbing commercial retail risk. Four primary mechanisms are systematically deployed:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      1. Post-Season Retroactive SOR Switch
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      The retailer issues an outright PO. After 120–150 days of inventory stagnation, their commercial team issues an internal email stating that unsold stock is being &quot;returned to vendor&quot; (RTV) or converted into consignment at a 50% markdown.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      2. Shopworn &amp; Floor-Damaged &quot;QC Rejections&quot;
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Garments that passed pre-dispatch AQL inspection at the manufacturer&apos;s factory are hung on retail racks, handled by thousands of shoppers, and tried on in fitting rooms. When unsold, they are repackaged and rejected for &quot;stitching flaws,&quot; &quot;stains,&quot; or &quot;missing tags.&quot;
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      3. Forced Promotional Markdown Subsidies
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Online fashion portals and retail chains run national discount sales (e.g., &quot;End of Season Sale&quot;, &quot;Buy 1 Get 2&quot;). Without vendor written agreement, they debit the vendor&apos;s settlement account with 30%–50% margin contributions to fund these discounts.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      4. Asymmetrical 120-Day Credit vs MSME Law
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Retailers impose boilerplate vendor agreements mandating 90–120 day payment terms tied to &quot;sell-through percentage.&quot; This directly contravenes Section 15 of the MSMED Act, which mandates a maximum 45-day payment cap for registered enterprises.
                    </p>
                  </div>
                </div>

                <p>
                  To explore broader recovery strategies across the textile manufacturing chain, review our flagship guide on{" "}
                  <Link
                    href="/industries/textiles-apparel-garment-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Textiles, Apparel, Dyeing Units &amp; Yarn Mills Payment Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 3: Sale of Goods Act §24 & Legal Hooks */}
            <section
              id="heading-sale-of-goods-s24"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Sale of Goods Act, 1930 &sect;24: The Legal Shield Against Unlawful Returns
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  The fundamental statutory anchor governing retail inventory returns in India is <strong className="text-slate-900">Section 24 of the Sale of Goods Act, 1930</strong> (&quot;Goods sent on approval or &apos;on sale or return&apos;&quot;). Section 24 states:
                </p>

                <blockquote className="border-l-4 border-[#DC2626] pl-4 italic text-slate-800 bg-slate-50 py-3 rounded-r-lg my-3 font-serif">
                  &quot;When goods are delivered to the buyer on approval or &apos;on sale or return&apos; or other similar terms, the property therein passes to the buyer:&mdash;<br />
                  (a) when he signifies his approval or acceptance to the seller or does any other act adopting the transaction;<br />
                  (b) if he does not signify his approval or acceptance to the seller but retains the goods without giving notice of rejection, then, if a time has been fixed for the return of the goods, on the expiration of such time, and, if no time has been fixed, on the expiration of a reasonable time.&quot;
                </blockquote>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                  Three Critical Statutory Estoppels for Apparel Vendors:
                </h3>

                <div className="space-y-3">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      1. Act Adopting the Transaction (&sect;24(a))
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      When a retailer displays garments on store hangers, affixes retail price stickers, logs garments into their POS / ERP software, or photographs items for digital catalog listing, they have committed an <em>act adopting the transaction</em>. Property in the goods passes irrevocably, and the sale is completed.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      2. Lapsing of &quot;Reasonable Time&quot; (&sect;24(b))
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Fashion retail operates on strict seasonal windows (e.g., Diwali festive season, winter wear from October to January). In commercial trade custom, &quot;reasonable time&quot; to reject fashion merchandise expires the moment the primary selling season concludes. A retailer cannot retain winter jackets until March and then claim the right to return them.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      3. Statutory Right of Examination Extinguished (&sect;41 &amp; &sect;42)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Under Section 41, the buyer is entitled to a reasonable opportunity of examining goods upon delivery. When a pre-shipment AQL 2.5 audit is conducted at the vendor&apos;s factory, or when the central warehouse signs clean Goods Receipt Notes (GRN), this right is fully exhausted. Under Section 42, retaining goods without rejection notice constitutes deemed acceptance.
                    </p>
                  </div>
                </div>

                <p>
                  Even in cases where contracts were executed informally through email POs, WhatsApp dispatch approvals, or delivery challans, vendors retain powerful legal recourse. Review our detailed guide on{" "}
                  <Link
                    href="/how-to-recover-money-without-written-agreement"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    How to Recover Business Dues Without a Formal Written Agreement
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 4: Dark-Header Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Statutory Matrix: Vendor Legal Rights Across Retail Dispute Scenarios
                </h2>
              </div>

              <div className="overflow-x-auto my-4 -mx-2 sm:mx-0">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-3 sm:px-4 font-semibold rounded-tl-lg">Dispute Category</th>
                      <th className="py-3 px-3 sm:px-4 font-semibold">Retail Chain Tactic</th>
                      <th className="py-3 px-3 sm:px-4 font-semibold">Statutory Defense Hook</th>
                      <th className="py-3 px-3 sm:px-4 font-semibold rounded-tr-lg">Legal Action Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        Post-Season Return (Unsold Inventory)
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Sends RTV gate pass or debits vendor account 120 days post-dispatch.
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-medium text-red-600">
                        SGA 1930 &sect;24(b) (Reasonable time elapsed) + Contract Act &sect;73.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-700">
                        MSEFC Samadhaan / Summary Suit (Order 37).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        Shopworn / Soiled Rejection
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Claims &quot;fabric stain / tear&quot; on display garments tried on by shoppers.
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-medium text-red-600">
                        SGA &sect;42 (Act inconsistent with seller title) + AQL Estoppel.
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-700">
                        Pre-Litigation Legal Notice + Surveyor Inspection.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        Forced Markdown Debit
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Unilaterally deducts 40% margin subsidy for EOSS discount events.
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-medium text-red-600">
                        SGA 1930 &sect;55 (Suit for Price) + Contract Act &sect;62 (No novation).
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-700">
                        Commercial Court / MSME Facilitation Council.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        120-Day Extended Credit Term
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Cites vendor manual clause requiring payment only after end-consumer sale.
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-medium text-red-600">
                        MSMED Act &sect;15 &amp; &sect;24 (Overriding 45-day statutory cap).
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-700">
                        MSME Samadhaan Portal (3x Bank Rate Compounding).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        Tax Disallowance Threat
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        Delays supplier ledger settlement across financial year closing.
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-medium text-red-600">
                        Income Tax Act &sect;43B(h) (Disallowance of retail buyer&apos;s expense).
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-700">
                        Notice to CFO &amp; Statutory Auditors.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Vendor Escalation Decision Tree: From Rejection Notice to Full Settlement
                </h2>
              </div>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-hidden my-6 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <svg
                  viewBox="0 0 900 380"
                  className="w-full h-auto text-white font-sans text-xs"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="240" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="140" y="60" textAnchor="middle" fill="#F87171" fontWeight="bold" fontSize="12">
                    TRIGGER: RETAIL DEBIT NOTE
                  </text>
                  <text x="140" y="80" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Chain attempts RTV / SOR return
                  </text>
                  <text x="140" y="98" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    or deducts forced markdown
                  </text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M260 75 H320" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="330" y="30" width="240" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="450" y="60" textAnchor="middle" fill="#F8FAFC" fontWeight="bold" fontSize="12">
                    DAY 1–3: REJECTION AUDIT
                  </text>
                  <text x="450" y="80" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Issue written debit note protest
                  </text>
                  <text x="450" y="98" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Refuse return transport gate entry
                  </text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M570 75 H630" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="640" y="30" width="240" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="760" y="60" textAnchor="middle" fill="#F8FAFC" fontWeight="bold" fontSize="12">
                    DAY 4–10: EVIDENCE LOCK
                  </text>
                  <text x="760" y="80" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Assemble AQL certificates, LRs
                  </text>
                  <text x="760" y="98" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    e-Way Bills &amp; POS display proof
                  </text>

                  {/* Downward Arrow from Step 3 to Row 2 */}
                  <path d="M760 120 V180" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 4 (Bottom Right) */}
                  <rect x="640" y="190" width="240" height="95" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="760" y="220" textAnchor="middle" fill="#F87171" fontWeight="bold" fontSize="12">
                    DAY 11–20: STATUTORY NOTICE
                  </text>
                  <text x="760" y="240" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Serve advocate demand citing
                  </text>
                  <text x="760" y="258" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    SGA §24, MSMED §15 &amp; IT §43B(h)
                  </text>

                  {/* Leftward Arrow from Step 4 to Step 5 */}
                  <path d="M640 237 H580" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 5 (Bottom Middle) */}
                  <rect x="330" y="190" width="240" height="95" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="450" y="220" textAnchor="middle" fill="#F8FAFC" fontWeight="bold" fontSize="12">
                    TRACK A: MSEFC RECOVERY
                  </text>
                  <text x="450" y="240" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    MSME Samadhaan petition
                  </text>
                  <text x="450" y="258" textAnchor="middle" fill="#34D399" fontSize="10">
                    Principal + 3x RBI Bank Rate
                  </text>

                  {/* Leftward Arrow from Step 5 to Step 6 */}
                  <path d="M330 237 H270" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 6 (Bottom Left) */}
                  <rect x="20" y="190" width="240" height="95" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="140" y="220" textAnchor="middle" fill="#F8FAFC" fontWeight="bold" fontSize="12">
                    TRACK B: COMMERCIAL SUIT
                  </text>
                  <text x="140" y="240" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    CPC Order 37 Summary Suit
                  </text>
                  <text x="140" y="258" textAnchor="middle" fill="#38BDF8" fontSize="10">
                    Interim attachment before judgment
                  </text>

                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3 my-4">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-red-400 font-bold text-xs uppercase block mb-1">
                    Stage 1 &bull; Immediate Trigger
                  </span>
                  <h4 className="font-bold text-sm">Retailer Attempts SOR Return or Debit Note</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Retailer sends RTV delivery or debits vendor account. Vendor issues formal written rejection within 48 hours and bars gate entry for return logistics.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-red-400 font-bold text-xs uppercase block mb-1">
                    Stage 2 &bull; Evidence Lockdown
                  </span>
                  <h4 className="font-bold text-sm">Compile Factory-Gate AQL &amp; Transit Records</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Collate pre-shipment inspection certificates, signed LRs, e-Way bills, and retail POS photos proving merchandise was merchandised in stores.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-red-400 font-bold text-xs uppercase block mb-1">
                    Stage 3 &bull; Statutory Demand Notice
                  </span>
                  <h4 className="font-bold text-sm">Serve Fact-Verified Notice Under SGA §24 &amp; MSMED Act</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Notify retail leadership of SGA Section 24 expiry of return rights, Section 15 payment caps, and imminent Section 43B(h) income tax disallowance.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-red-400 font-bold text-xs uppercase block mb-1">
                    Stage 4 &bull; Judicial Recovery Action
                  </span>
                  <h4 className="font-bold text-sm">MSEFC Samadhaan / Order 37 Commercial Court</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Initiate statutory recovery claiming 100% principal plus 3x RBI compounding interest, or secure interim bank account freezes via Commercial Courts.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Interactive Scenario Explorer */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Interactive Retail Dispute Scenarios &amp; Recovery SOPs
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Select a commercial failure mode below to view the retail chain&apos;s tactic, the applicable statutory doctrine, and the vendor counter-escalation protocol:
              </p>

              <GarmentSorScenarioTabs />
            </section>

            {/* Section 7: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Worked Claim Ledger: &rupee;45 Lakh Garment Consignment Recovery
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  Consider a representative commercial dispute involving a knitwear manufacturer in Tirupur supplying a nationwide fashion retail chain with 15,000 units of cotton pullovers.
                </p>

                {/* Ledger Breakdown Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl my-4">
                  <div className="border-b border-slate-800 pb-3 mb-4 flex justify-between items-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                      Case Study Ledger &bull; Fashion Retailer Default
                    </span>
                    <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      MSMED Act &sect;16 Compliant
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Total Outright Invoice Value (15,000 units @ &rupee;300):</span>
                      <span className="font-mono font-bold text-slate-200">&rupee;45,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Payment Released on Account by Retailer:</span>
                      <span className="font-mono text-slate-300">&minus; &rupee;15,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Unauthorized End-of-Season SOR Return Debit Note (5,000 units):</span>
                      <span className="font-mono text-red-400 font-bold">&minus; &rupee;15,00,000 (Disputed)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Unilateral 20% &quot;EOSS Promotion Discount&quot; Debit Note:</span>
                      <span className="font-mono text-red-400 font-bold">&minus; &rupee;6,00,000 (Disputed)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Withheld Outstanding Principal Claim:</span>
                      <span className="font-mono font-bold text-emerald-400 text-base">&rupee;30,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Statutory Credit Period Ceiling (MSMED &sect;15):</span>
                      <span className="font-mono text-slate-300">45 Days from Acceptance</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Period of Default (180 Days Past 45-Day Cap):</span>
                      <span className="font-mono text-slate-300">6 Months</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Applicable Statutory Interest Rate (3x RBI Bank Rate @ 6.50%):</span>
                      <span className="font-mono text-amber-400 font-bold">19.50% p.a. (Monthly Compounding)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Accrued Compound Interest (6 Months):</span>
                      <span className="font-mono text-amber-400 font-bold">&rupee;3,04,260</span>
                    </div>
                    <div className="flex justify-between pt-2 text-sm sm:text-base font-bold bg-slate-800/50 p-2.5 rounded-lg">
                      <span className="text-white">Total Recoverable Demand (Principal + Statutory Interest):</span>
                      <span className="font-mono text-emerald-400">&rupee;33,04,260</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                    * Note: If the buyer is a corporate entity, withholding &rupee;30,00,000 beyond March 31 without settlement triggers mandatory disallowance under Section 43B(h), resulting in an immediate additional corporate tax liability of approximately &rupee;7,50,000 to &rupee;9,36,000 (at 25%–31.2%).
                  </div>
                </div>

                <p>
                  To run statutory compounding calculations for your pending invoices, utilize the{" "}
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    MSME Samadhaan Delayed Payment Recovery Guide
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 8: Evidence & BSA 2023 §63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Evidence Lockdown: Bharatiya Sakshya Adhiniyam, 2023 &sect;63 Checklist
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  To secure an unchallengeable recovery petition before the MSEFC or Commercial Courts, garment manufacturers must establish conclusive electronic and physical paper trails. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), all electronic communications (vendor portal logs, emails, WhatsApp messages, EDI transmissions) are admissible with a statutory electronic record certificate.
                </p>

                <div className="space-y-3 my-4">
                  <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs sm:text-sm">
                        1. Outright Purchase Order &amp; Vendor Code Agreement
                      </strong>
                      <span className="text-xs text-slate-600">
                        The original PO showing outright commercial terms (not consignment), delivery schedule, payment terms, and delivery warehouse addresses.
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs sm:text-sm">
                        2. Factory-Gate AQL Inspection Passed Certificate
                      </strong>
                      <span className="text-xs text-slate-600">
                        The inspection report signed by the retailer&apos;s nominated quality auditor or QA agency prior to dispatch, proving goods met AQL standards.
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs sm:text-sm">
                        3. Lorry Receipts (LR) &amp; Electronic Waybills (e-Way Bill)
                      </strong>
                      <span className="text-xs text-slate-600">
                        Transporter receipts confirming delivery at the retailer&apos;s distribution center with gross weight and carton counts intact.
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs sm:text-sm">
                        4. Clean Goods Receipt Notes (GRN) / Inward Dock Acknowledgment
                      </strong>
                      <span className="text-xs text-slate-600">
                        Warehouse inward register or portal status showing &quot;Goods Received Clean&quot; without on-dock shortage or physical damage endorsement.
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs sm:text-sm">
                        5. Evidence of Retail Merchandising &amp; Display (Act Adopting Transaction)
                      </strong>
                      <span className="text-xs text-slate-600">
                        Photographs of garments displayed on store racks, online marketplace listings with active SKU URLs, or barcode ticketing confirming goods entered the retail sales stream.
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs sm:text-sm">
                        6. Written Protest to Debit Notes &amp; BSA &sect;63 Electronic Certificate
                      </strong>
                      <span className="text-xs text-slate-600">
                        Vendor email rejecting the debit note within 48 hours, accompanied by an affidavit certificate from the vendor&apos;s IT head under Section 63 BSA 2023.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Frequently Asked Questions Accordion */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions on Fashion Retail Returns &amp; Receivables
                </h2>
              </div>

              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm md:text-base list-none">
                      <span className="pr-4">{faq.name}</span>
                      <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.acceptedAnswer.text}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Dual B2B Conversion CTA Banner */}
            <GarmentSorNoticeCTA />
          </div>
        </div>
      </main>

      {/* Sibling Spokes & Hub Footer Cross-Links */}
      <div className="w-full bg-[#F8F9FB] border-t border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
            Related Industry Guides &bull; Textiles, Apparel &amp; Garments (§6.13)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <Link
              href="/industries/textiles-apparel-garment-recovery"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-red-600 uppercase">Parent Vertical Hub</span>
                <h4 className="font-bold text-slate-900 mt-1 mb-2">
                  Textiles, Apparel &amp; Garment Recovery Hub
                </h4>
                <p className="text-slate-600 text-[11px]">
                  Institutional recovery guide for fabric wholesalers, spinning mills, dyeing houses, and garment exporters.
                </p>
              </div>
              <span className="text-[#DC2626] font-semibold mt-3 text-[11px] inline-flex items-center gap-1">
                Explore Hub &rarr;
              </span>
            </Link>

            <Link
              href="/textile-commission-agent-broker-adatiya-buyer-default-liability"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Sibling Spoke &bull; Mandi Brokers</span>
                <h4 className="font-bold text-slate-900 mt-1 mb-2">
                  Textile Broker / Adatiya Liability Guide
                </h4>
                <p className="text-slate-600 text-[11px]">
                  When an outstation buyer defaults: enforcing Del Credere liability and BNS s.318 conspiracy remedies.
                </p>
              </div>
              <span className="text-[#DC2626] font-semibold mt-3 text-[11px] inline-flex items-center gap-1">
                Read Guide &rarr;
              </span>
            </Link>

            <Link
              href="/law/section-43bh-msme-payment-rule"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Statutory Rule &bull; Income Tax</span>
                <h4 className="font-bold text-slate-900 mt-1 mb-2">
                  Section 43B(h) MSME Payment Mandate
                </h4>
                <p className="text-slate-600 text-[11px]">
                  Disallowance of corporate buyer tax deductions for payments delayed past 45 days.
                </p>
              </div>
              <span className="text-[#DC2626] font-semibold mt-3 text-[11px] inline-flex items-center gap-1">
                View Tax Rule &rarr;
              </span>
            </Link>

            <Link
              href="/msme-odr-portal-delayed-payment-guide"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">ODR &bull; Statutory Forum</span>
                <h4 className="font-bold text-slate-900 mt-1 mb-2">
                  MSME Samadhaan Delayed Payment Filing
                </h4>
                <p className="text-slate-600 text-[11px]">
                  Filing MSEFC conciliation petitions with 3x RBI bank rate compounding interest.
                </p>
              </div>
              <span className="text-[#DC2626] font-semibold mt-3 text-[11px] inline-flex items-center gap-1">
                Filing Guide &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Global Related Recovery Guides */}
      <RelatedRecoveryGuides />
    </div>
  );
}
