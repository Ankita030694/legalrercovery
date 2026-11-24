import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import TextileRecoveryTableOfContents from "./TextileRecoveryTableOfContents";
import TextileRecoveryScenarioTabs from "./TextileRecoveryScenarioTabs";
import TextileRecoveryCTA from "./TextileRecoveryCTA";

// Canonical & SF SEO Constrained Strings
const CANONICAL_URL = "https://www.legalrecovery.in/industries/textiles-apparel-garment-recovery";
const META_TITLE = "Textiles, Garments, Fabric & Yarn Mill Payment Recovery India"; // 61 chars (tightened)
const META_DESCRIPTION =
  "Built for Surat, Tirupur, Ludhiana, Bhiwandi, Bhilwara & Kolkata textile clusters: recover overdue fabric/yarn bills, SOR abuses & broker-mediated defaults."; // 154 chars

const ARTICLE_HEADLINE =
  "Trade-Credit, Broker-Mediated & Export Receivable Recovery for Spinning Mills, Fabric Wholesalers, Dyeing Houses & Garment Makers";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "website",
    locale: "en_IN",
    siteName: "LegalRecovery.in",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
  keywords: [
    "textile fabric garment and yarn unpaid payment recovery india",
    "surat tirupur ludhiana textile payment recovery legal notice",
    "garment manufacturer buyer payment default india",
    "textile broker adatiya party default legal action",
    "dyeing printing processing job work bill recovery",
    "section 43bh textile trade udhar vasooli",
  ],
};

const INDUSTRY_SPOKES = [
  {
    code: "B2B-158",
    title: "Broker (Adatiya) Del Credere & BNS 318 Liability",
    desc: "When an outstation textile broker's 'guaranteed' buyer vanishes with ₹40L of fabric: joint civil-criminal recovery framework.",
    href: "/textile-commission-agent-broker-adatiya-buyer-default-liability",
    badge: "Agency Fraud",
  },
  {
    code: "B2B-159",
    title: "Retail Fashion Brand Sale-or-Return (SOR) Rejection",
    desc: "Apparel vendors vs large-format fashion retailers: stopping post-season returns, unilateral markdowns & bogus QC rejections.",
    href: "/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery",
    badge: "Retail Abuse",
  },
  {
    code: "B2B-160",
    title: "Dyeing, Bleaching & Rotary-Printing Fabric Lot Lien",
    desc: "Unpaid processing job-work bills: exercising Section 170 possessory lien & defeating shade variation counterclaims.",
    href: "/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery",
    badge: "Processor Lien",
  },
  {
    code: "B2B-161",
    title: "Garment Exporter Buying House Cancellation Relief",
    desc: "Countering mid-production cut-to-pack cancellations, buyer air-freight penalties & destination discount blackmail.",
    href: "/garment-buying-house-export-order-cancelled-after-cutting-recovery",
    badge: "Export SOS",
  },
  {
    code: "B2B-162",
    title: "Spinning Mill Yarn Contract Drop & Refusal to Lift",
    desc: "Cotton & yarn market drops 12%: enforcing forward-rate difference damages and spinning mill ledgers under Sale of Goods Act.",
    href: "/spinning-mill-yarn-dealer-credit-default-cotton-contract-recovery",
    badge: "Commodity Default",
  },
  {
    code: "B2B-163",
    title: "Textile Mahajan / Market Association Arbitration Awards",
    desc: "Enforcing invoice-printed textile trade association Panch arbitration clauses in Civil Court Section 36 execution benches.",
    href: "/textile-trade-association-mahajan-panch-award-enforcement-court",
    badge: "Trade Arbitration",
  },
  {
    code: "B2B-164",
    title: "Corporate, School & Hospital Uniform Bulk Payment Recovery",
    desc: "Custom-logo uniform orders delivered but 50% balance withheld: commercial recovery protocol for institutional supply.",
    href: "/corporate-school-hospital-uniform-bulk-order-payment-recovery",
    badge: "Institutional Uniforms",
  },
  {
    code: "B2B-165",
    title: "Home-Textiles, Carpet & Hospitality Linen Receivables",
    desc: "Panipat, Bhadohi, Karur & Solapur bedsheet, towel and rug suppliers recovering overdue hotel and exporter invoices.",
    href: "/home-textiles-carpet-handloom-furnishing-b2b-hospitality-recovery",
    badge: "Home Textiles",
  },
  {
    code: "B2B-166",
    title: "सूरत, भिवंडी व लुधियाना कपड़ा व्यापारी उधार वसूली गाइड",
    desc: "दलाल या खरीदार पार्टी द्वारा कपड़ा व धागे का पेमेंट अटकाने पर कानूनी नोटिस, एमएसएमई समाधान और बीएनएस कार्रवाई।",
    href: "/hi/kapda-vyapari-textile-garment-udhar-vasooli-legal-notice",
    badge: "हिन्दी Vyapari SOP",
  },
  {
    code: "B2B-167",
    title: "Textile Buyer & Broker Joint Demand Notice Template",
    desc: "Ready-to-use statutory legal notice format holding both the principal buyer and commission agent jointly liable.",
    href: "/templates/textile-garment-buyer-and-broker-joint-demand-legal-notice",
    badge: "Notice Workspace",
  },
];

const FAQS = [
  {
    q: "Can a textile mill or fabric trader legally hold the commission broker (adatiya / dalal) liable if the outstation buyer vanishes?",
    a: "Yes. Under Section 182, 211, and 230 of the Indian Contract Act 1872, where a textile broker acts as a Del Credere agent—charging brokerage (dalali) to introduce, guarantee, and vouch for the financial solvency of an outstation buyer—the broker assumes secondary or joint liability for payment. Furthermore, under Bharatiya Nyaya Sanhita (BNS) 2023 Section 318(4) (cheating) read with Section 61(2) (criminal conspiracy), if the broker actively arranged fraudulent delivery of goods to an untraceable godown, they can be made a co-noticee in the statutory demand and co-defendant in a Commercial Summary Suit under Order 37 CPC.",
  },
  {
    q: "How does Section 43B(h) of the Income Tax Act help textile manufacturers recover overdue trade debts?",
    a: "Section 43B(h) mandates that any payment due to an enterprise registered as a Micro or Small enterprise under the MSMED Act 2006 must be cleared within 15 days (or up to 45 days if governed by a written agreement). If a garment buyer, retail brand, or wholesale fabric merchant fails to pay within this statutory ceiling, the entire unpaid purchase amount is disallowed as an expenditure and added directly to the buyer's taxable corporate profit, subjecting them to immediate 25%–35% income tax plus interest. Citing Section 43B(h) in a formal legal notice creates massive tax exposure that forces prompt commercial clearance.",
  },
  {
    q: "Can a fabric dyeing and printing processing house retain greige or finished fabric lots if previous job-work bills remain unpaid?",
    a: "Yes. Under Section 170 of the Indian Contract Act 1872, a bailee or processor who has expended labor and skill on goods possesses a 'Particular Possessory Lien' over those goods. A dyeing mill or printing house is legally entitled to retain possession of the fabric lots currently in its mill premises until all outstanding processing and job-work remuneration for those lots is settled in full. This right cannot be defeated by allegations of minor shade variations or unverified shrinkage unless proven by independent lab testing.",
  },
  {
    q: "How can garment manufacturers counter large retail fashion brands returning unsold seasonal stock under 'Sale-or-Return' (SOR)?",
    a: "Under Section 41 and 42 of the Sale of Goods Act 1930, a buyer is legally deemed to have accepted goods when they retain them beyond a reasonable time without intimating rejection, or perform any act inconsistent with the seller's ownership (such as placing the garments on retail display or selling partial quantities). If a fashion retailer holds stock across a 60–90 day festive season and subsequently issues unilateral debit notes, the rejection is invalid in law. Furthermore, MSMED Act Section 15 limits the objection window to 15 days from delivery, after which the invoice becomes incontestable with 3x RBI Bank Rate compound interest.",
  },
  {
    q: "What is the legal standing of 'Subject to Textile Mahajan / Market Association Arbitration' printed on bills?",
    a: "Where an invoice bears a clear arbitration clause and is backed by delivery challans or lorry receipts acknowledged by the buyer, Indian courts under Section 7 of the Arbitration and Conciliation Act 1996 recognize this as a valid arbitration agreement in commercial trade. Awards passed by recognized market Panch / Mahajan tribunals can be converted into binding decrees executable through Commercial Execution Courts under Section 36 of the Act to freeze debtor bank accounts and seize inventory.",
  },
  {
    q: "What digital evidence is necessary to establish fabric or yarn delivery in court under the new BSA 2023?",
    a: "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA) 2023, digital records are fully admissible in court provided they are supported by an electronic evidence certificate. Textile creditors must preserve: (1) GST E-Way Bills matching vehicle registration numbers, (2) Transporter Lorry Receipts (LR/Bilty) signed at destination godowns, (3) WhatsApp sauda confirmations and broker audio messages, and (4) Email exchanges detailing sample approvals and statements of account.",
  },
];

export default function TextileApparelGarmentRecoveryPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${CANONICAL_URL}#service`,
        name: ARTICLE_HEADLINE,
        serviceType: "Textile, Fabric, Yarn & Garment B2B Debt Recovery Legal Service",
        provider: {
          "@type": "LegalService",
          name: "LegalRecovery.in",
          url: "https://www.legalrecovery.in",
          telephone: "+91-98711-12345",
          priceRange: "₹999 - ₹4,999",
        },
        areaServed: [
          { "@type": "City", name: "Surat" },
          { "@type": "City", name: "Tirupur" },
          { "@type": "City", name: "Ludhiana" },
          { "@type": "City", name: "Bhiwandi" },
          { "@type": "City", name: "Bhilwara" },
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Kolkata" },
          { "@type": "City", name: "Ichalkaranji" },
          { "@type": "City", name: "Coimbatore" },
        ],
        description: META_DESCRIPTION,
      },
      {
        "@type": "ItemList",
        "@id": `${CANONICAL_URL}#spokes`,
        name: "Textile & Apparel Specialized Legal Recovery Sub-Routes",
        itemListElement: INDUSTRY_SPOKES.map((spoke, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: spoke.title,
          url: `https://www.legalrecovery.in${spoke.href}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Industries",
            item: "https://www.legalrecovery.in/industries",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Textiles, Garments & Yarn Recovery",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>IND-13 Pillar Hub</span>
            <span className="text-slate-500">•</span>
            <span>Surat, Tirupur, Ludhiana, Bhiwandi, Bhilwara & Kolkata Clusters</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {ARTICLE_HEADLINE}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Creditor Mandate
            </span>
            India&apos;s ₹12-Lakh-Crore textile supply chain suffers from chronic 90–180 day credit defaults, broker (adatiya) absconding fraud, and predatory retail Season-SOR rejections. Creditors can enforce mandatory recovery through{" "}
            <strong className="text-white">MSMED Act s.15–18</strong> (3x RBI compound interest),{" "}
            <strong className="text-white">Section 43B(h)</strong> tax disallowance,{" "}
            <strong className="text-white">Contract Act s.170</strong> processor lien, and Del Credere broker joint liability under{" "}
            <strong className="text-white">Order 37 CPC & BNS s.318</strong>.
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold block">
                Statutory Payment Limit
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">15–45 Days</span>
              <span className="text-[10px] text-slate-400 block">MSMED Act s.15 Mandate</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold block">
                Statutory Penal Interest
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</span>
              <span className="text-[10px] text-slate-400 block">Compound Monthly (s.16)</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold block">
                Tax Disallowance Floor
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">Section 43B(h)</span>
              <span className="text-[10px] text-slate-400 block">30%+ Corporate Tax Hit</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold block">
                Broker Co-Liability
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400">Del Credere</span>
              <span className="text-[10px] text-slate-400 block">Contract Act s.230 + BNS 318</span>
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
              { label: "Industries", href: "/industries" },
              { label: "Textiles, Garments & Yarn Recovery", href: "/industries/textiles-apparel-garment-recovery" },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column Sticky TOC */}
          <TextileRecoveryTableOfContents />

          {/* Right Column Main Content */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Working Capital & Credit Crisis */}
            <section
              id="heading-textile-credit-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Macroeconomic & Cluster Bottleneck Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                The ₹12-Lakh-Crore Textile Supply Chain: Working Capital Trap & Debtor Evasion
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                The Indian textile and apparel industry employs over 45 million workers and contributes 2.3% of India&apos;s GDP. Yet, from the ginning units and spinning mills of Coimbatore, Rajkot, and Bhilwara to the synthetic weaving looms of Surat and Bhiwandi, the knitwear export houses of Tirupur and Ludhiana, and the garment hubs of Noida and Kolkata, the sector operates on an extraordinarily fragile credit architecture.
              </p>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Unlike organized capital goods or IT industries governed by master service agreements with milestone bank guarantees, the textile industry relies on informal trade credit (udhari), broker-mediated sauda chithis (dalali parchas), and unsigned delivery challans. This creates three fatal structural vulnerabilities for creditors:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-red-500 inline-block mb-2" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    The 90–180 Day Rollover Cycle
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Yarn mills sell to weavers on 30-day credit; weavers sell grey fabric on 60 days; processors take 45 days; garmenters face 120 days from retail chains. Any single default cascades upstream, threatening mill NPA classification.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block mb-2" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    &apos;Party Uth Gayi&apos; Absconding Frauds
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Outstation fabric merchants in Delhi Chandni Chowk, Kanpur, or Kolkata take deliveries on credit through local commission brokers, liquidate fabric at 20% discount for cash, and abruptly close godowns without trace.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block mb-2" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Season-SOR Rejection Traps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Large-format retail apparel brands issue purchase orders, display merchandise across festive quarters, and subsequently force manufacturers to accept 30% unsold stock back under unilateral &apos;Sale-or-Return&apos; clauses.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 leading-relaxed">
                <strong className="font-bold">Statutory Defense Shift:</strong> For decades, default in textile trading was dismissed as a &apos;civil business dispute&apos; or deferred to informal trade Mahajan Panchayats that lack civil execution powers. Under modern Indian commercial jurisprudence, including the MSMED Act, the Bharatiya Sakshya Adhiniyam 2023, and Income Tax Section 43B(h), textile unpaid debt is enforceable through swift statutory mechanisms. Learn how to navigate these using our{" "}
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="font-bold text-[#DC2626] underline hover:text-[#B91C1C]"
                >
                  Section 43B(h) MSME Payment Guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/how-to-recover-money-without-written-agreement"
                  className="font-bold text-[#DC2626] underline hover:text-[#B91C1C]"
                >
                  Receivable Recovery Without Written Agreement Playbook
                </Link>.
              </div>
            </section>

            {/* Section 2: Multi-Track Escalation Matrix */}
            <section
              id="heading-multi-track-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Strategic Forum Selection Protocol
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                The 8-Track Textile Debt Escalation Decision Matrix
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Institutional recovery requires matching the specific transactional structure (job-work, yarn contract, retail garment PO, or broker sauda) to the forum with maximum pecuniary leverage and fastest relief.
              </p>

              {/* Table Wrapper */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 font-bold border-b border-slate-800">Track & Ticket Tier</th>
                      <th className="p-3 font-bold border-b border-slate-800">Debtor Profile</th>
                      <th className="p-3 font-bold border-b border-slate-800">Forum & Statute</th>
                      <th className="p-3 font-bold border-b border-slate-800">Statutory Timeline</th>
                      <th className="p-3 font-bold border-b border-slate-800">Strategic Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        Track 1: ₹50K – ₹10 Lakhs (Petty / Job-Work)
                      </td>
                      <td className="p-3 text-slate-600">Local Weavers, Embroidery & Washing Job-Workers</td>
                      <td className="p-3 text-slate-700">Contract Act s.170 Lien + Lok Adalat / MSEFC</td>
                      <td className="p-3 text-slate-600">15–30 Days</td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        Physical retention of fabric lot halts debtor production
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        Track 2: ₹10L – ₹1 Crore (MSME Trade)
                      </td>
                      <td className="p-3 text-slate-600">Fabric Wholesalers & Domestic Retail Chains</td>
                      <td className="p-3 text-slate-700">
                        MSMED Act s.18 Samadhaan ODR + IT Act s.43B(h)
                      </td>
                      <td className="p-3 text-slate-600">45–90 Days</td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        Compound interest @ 3x RBI Bank Rate + 30% tax hit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        Track 3: ₹5L – ₹50 Lakhs (Cheque/NACH Default)
                      </td>
                      <td className="p-3 text-slate-600">Post-Dated Cheques (PDC) from Outstation Buyers</td>
                      <td className="p-3 text-slate-700">NI Act s.138 / s.143A & PSS Act s.25</td>
                      <td className="p-3 text-slate-600">15-day notice, 6–12 mos</td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        20% interim deposit order + non-bailable warrants
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        Track 4: ₹10L – ₹50 Lakhs (Broker Fraud)
                      </td>
                      <td className="p-3 text-slate-600">Absconding Buyer & Del Credere Commission Broker</td>
                      <td className="p-3 text-slate-700">
                        BNS s.318(4) Criminal + Order 37 CPC Co-Noticee Suit
                      </td>
                      <td className="p-3 text-slate-600">Immediate FIR + 90d Suit</td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        Broker personal property attached as co-defendant
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        Track 5: ₹20L – ₹2 Crores (Yarn/Contract Breach)
                      </td>
                      <td className="p-3 text-slate-600">Yarn Traders Refusing to Lift Crash Lots</td>
                      <td className="p-3 text-slate-700">
                        Sale of Goods Act s.56 + Order 38 Rule 5 Pre-Trial Freeze
                      </td>
                      <td className="p-3 text-slate-600">30–60 Days</td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        Pre-judgment attachment of buyer bank accounts
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        Track 6: ₹1 Crore+ (Corporate Debtor)
                      </td>
                      <td className="p-3 text-slate-600">National Retail Apparel Brands & Large Mills</td>
                      <td className="p-3 text-slate-700">IBC 2016 Section 8 Demand Notice &rarr; Section 9 NCLT</td>
                      <td className="p-3 text-slate-600">10-Day Statutory Notice</td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        Threat of insolvency, corporate resolution & board ouster
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        Track 7: Cross-Border Garment Export
                      </td>
                      <td className="p-3 text-slate-600">Overseas Buying Houses (US, EU, UAE, UK)</td>
                      <td className="p-3 text-slate-700">ECGC Claim Filing + International ODR Conciliation</td>
                      <td className="p-3 text-slate-600">60–120 Days</td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        90% ECGC risk indemnity + port arrest advisories
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        Track 8: Mahajan Arbitration Awards
                      </td>
                      <td className="p-3 text-slate-600">Mandi Association Registered Merchants</td>
                      <td className="p-3 text-slate-700">Arbitration Act s.36 Civil Execution Court</td>
                      <td className="p-3 text-slate-600">90–120 Days</td>
                      <td className="p-3 text-emerald-700 font-semibold">
                        Attachment of stock and mandi shop allotment
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Workflow Flowchart: Desktop SVG + Mobile Cards */}
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-2">
                  Systematic Cluster Workflow Map
                </span>
                <h3 className="text-base sm:text-lg font-bold mb-4">
                  End-to-End Creditor Escalation Pipeline
                </h3>

                {/* Desktop SVG */}
                <div className="hidden md:block w-full overflow-hidden">
                  <svg viewBox="0 0 900 160" className="w-full h-auto text-xs font-sans">
                    <rect x="10" y="30" width="160" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="90" y="65" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">1. Default Trigger</text>
                    <text x="90" y="85" textAnchor="middle" fill="#94A3B8" fontSize="10">Aging &gt; 45 Days</text>
                    <text x="90" y="102" textAnchor="middle" fill="#F87171" fontSize="10">Bilty &amp; Invoice Reconciliation</text>

                    <line x1="170" y1="75" x2="210" y2="75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    <rect x="210" y="30" width="180" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="300" y="65" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">2. Dual Co-Notice</text>
                    <text x="300" y="85" textAnchor="middle" fill="#94A3B8" fontSize="10">Buyer + Adatiya / Broker</text>
                    <text x="300" y="102" textAnchor="middle" fill="#34D399" fontSize="10">MSMED s.15 &amp; s.43B(h)</text>

                    <line x1="390" y1="75" x2="430" y2="75" stroke="#DC2626" strokeWidth="2" />

                    <rect x="430" y="30" width="190" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="525" y="65" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">3. Statutory Leverage</text>
                    <text x="525" y="85" textAnchor="middle" fill="#94A3B8" fontSize="10">Sec 170 Lien on Fabric</text>
                    <text x="525" y="102" textAnchor="middle" fill="#FBBF24" fontSize="10">MSME Samadhaan Filing</text>

                    <line x1="620" y1="75" x2="660" y2="75" stroke="#DC2626" strokeWidth="2" />

                    <rect x="660" y="30" width="220" height="90" rx="10" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                    <text x="770" y="65" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">4. Judicial Recovery</text>
                    <text x="770" y="85" textAnchor="middle" fill="#FECACA" fontSize="10">Commercial Summary Suit (O.37)</text>
                    <text x="770" y="102" textAnchor="middle" fill="#FCA5A5" fontSize="10">Bank Attachment &amp; Decree</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-3 bg-slate-800 rounded-lg border-l-4 border-red-500 text-xs">
                    <span className="font-bold text-white block">Step 1: Aging Trigger & Bilty Audit</span>
                    <span className="text-slate-400">Match GST E-Way Bill, Lorry Receipt (LR), and Broker Memo.</span>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border-l-4 border-amber-500 text-xs">
                    <span className="font-bold text-white block">Step 2: Dual Legal Notice to Buyer & Broker</span>
                    <span className="text-slate-400">Cite Section 43B(h), Del Credere joint liability, and MSMED 3x interest.</span>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border-l-4 border-emerald-500 text-xs">
                    <span className="font-bold text-white block">Step 3: Possessory Lien & Samadhaan ODR</span>
                    <span className="text-slate-400">Retain unreleased fabric lots under s.170 and lodge Samadhaan claim.</span>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border-l-4 border-red-600 text-xs">
                    <span className="font-bold text-white block">Step 4: Summary Suit & Pre-Trial Bank Freeze</span>
                    <span className="text-slate-400">Order 37 CPC / IBC Section 9 enforcement for immediate settlement.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Interactive Scenario Explorer */}
            <section
              id="heading-scenario-explorer"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Cluster-Specific Deep Dives
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Interactive Recovery Scenario Explorer: 4 Textile Bottlenecks
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Explore custom statutory recovery protocols built specifically for Surat synthetic weavers, Tirupur knitwear garmenters, Bhiwandi job-work processors, and Bhilwara spinning mills.
              </p>

              {/* Client Interactive Island */}
              <TextileRecoveryScenarioTabs />
            </section>

            {/* Section 4: Statutory Hooks & Precedents */}
            <section
              id="heading-statutory-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Foundations & Bare Act Hooks
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Statutory Architecture: The 5 Legal Pillars of Textile Debt Enforcement
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Textile default disputes are governed by a robust interplay of commercial statutes, penal provisions, and tax disallowance rules that override informal mandi customs.
              </p>

              <div className="space-y-4">
                {/* Pillar 1 */}
                <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-sm font-black text-slate-900">
                      1. MSMED Act 2006 (Sections 15, 16, 17 & 18) — 3x RBI Interest
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-[#DC2626]">
                      Mandatory Overriding Law
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    Under Section 15, the buyer is statutorily obligated to pay within 15 days, or up to 45 days if expressly agreed in writing. Section 16 mandates that any delayed payment carries compound interest with monthly rests at <strong>three times the RBI Bank Rate</strong>. Section 18 empowers the supplier to refer the dispute to the Micro and Small Enterprises Facilitation Council (MSEFC), bypassing slow ordinary civil litigation.
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    Supreme Court Benchmark: <em>Silpi Industries v. KSRTC (2021)</em> affirms that MSMED Act provisions override inconsistent terms in private commercial contracts, and limitation is strictly governed.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-sm font-black text-slate-900">
                      2. Section 43B(h) Income Tax Act 1961 — Corporate Tax Disallowance
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      Fiscal Pressure Point
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    Effective FY 2023-24, any sum payable to a micro or small enterprise supplier beyond the Section 15 MSMED timeline cannot be deducted as business expenditure in that financial year. The buyer must pay immediate income tax on that amount (at 25% to 35% corporate rates) until payment is actually released.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-sm font-black text-slate-900">
                      3. Indian Contract Act 1872 (Section 170) — Processor Particular Lien
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Physical Collateral Control
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    Where a bailee has rendered any service involving the exercise of labor or skill in respect of goods bailed, they have, in the absence of a contract to the contrary, a right to retain such goods until they receive due remuneration for services rendered. A dyeing house, printer, or embroidery unit can legally freeze release of processed fabric.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-sm font-black text-slate-900">
                      4. Law of Agency (Contract Act s.230) & Del Credere Brokerage
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      Broker Liability
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    In textile mandis where dalals charge extra brokerage or issue &apos;guaranteed sauda&apos; confirmation notes, Indian courts treat them as Del Credere agents. Under Section 230(2) &amp; (3), where the broker does not fully disclose the principal or guarantees solvency, the broker is personally liable and can be sued as a co-defendant.
                  </p>
                </div>

                {/* Pillar 5 */}
                <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 border-l-4 border-l-[#DC2626]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-sm font-black text-slate-900">
                      5. BNS 2023 Section 318(4) & Section 61(2) — Criminal Cheating & Conspiracy
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                      Penal Recourse
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    Where an outstation buyer takes delivery of goods with a pre-conceived fraudulent intention never to pay, liquidates goods below market value, and vanishes, this constitutes cheating under BNS Section 318(4) (punishable with imprisonment up to 7 years) and criminal conspiracy under Section 61(2) against both the absconding buyer and colluding broker.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Bilty, E-Way Bill & BSA s.63 Evidence Protocol */}
            <section
              id="heading-evidence-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Litigation-Grade Documentation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Evidence Protocol: The Bilty, E-Way Bill & BSA Section 63 Trial Stack
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                The most frequent defense raised by defaulting textile buyers is: <em>&apos;We never ordered these goods&apos;</em> or <em>&apos;The fabric was rejected on delivery due to poor quality.&apos;</em> Under the Bharatiya Sakshya Adhiniyam 2023, textile mills must assemble an airtight evidentiary trail prior to issuing statutory notices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    1. Transportation & Delivery Bilty
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure the Lorry Receipt (LR) explicitly records debtor godown address, driver phone number, truck vehicle registration number, and signed recipient stamp. Retain transport proof of delivery (POD).
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    2. GST E-Way Bill & GSTR-2B Proof
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Download official GST E-Way Bill verification reports. If the buyer claimed input tax credit (ITC) on GSTR-2B, Indian courts recognize this as conclusive prima facie proof of receipt of goods without defect.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    3. WhatsApp Sauda Audio & Chats
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Preserve unedited WhatsApp voice notes where the broker confirms the rate, meterage, and payment terms. Under Section 63 BSA 2023, generate hash values and device custody affidavits to submit in court.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    4. 15-Day Quality Objection Stop
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under MSMED Act Section 15, if the buyer did not issue written defect notifications within 15 calendar days from physical delivery, subsequent &apos;shade variation&apos; or &apos;shrinkage&apos; claims are barred as an afterthought.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-900 text-white rounded-xl text-xs leading-relaxed">
                <span className="text-red-400 font-bold block mb-1 uppercase tracking-wider text-[10px]">
                  ODR Digital Gateway
                </span>
                Explore our detailed step-by-step documentation on the{" "}
                <Link
                  href="/msme-odr-portal-delayed-payment-guide"
                  className="text-white underline font-bold hover:text-red-300"
                >
                  MSME Samadhaan ODR Portal Delayed Payment Guide
                </Link>{" "}
                to learn how digital bilty uploads fast-track MSEFC conciliation summons.
              </div>
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-financial-damage-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Empirical Damages & Financial Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Financial Default Math: MSMED 3x Compound Interest & Section 43B(h) Calculation
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Consider an illustrative commercial default of ₹25,00,000 for cotton fabric supplied by a Surat weaving mill to a Delhi apparel wholesaler, overdue by 180 days past the statutory 45-day window.
              </p>

              {/* Ledger Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                      Case Study Ledger
                    </span>
                    <h3 className="text-base font-bold text-white">
                      ₹25,00,000 Fabric Lot Default (180 Days Overdue)
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-lg text-xs font-mono font-bold">
                    Total Recovery Claim: ₹38,72,500
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">1. Principal Invoice Amount (Taxable Value + GST)</span>
                    <span className="text-white font-bold">₹25,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">2. Statutory 45-Day Grace Period (MSMED s.15)</span>
                    <span className="text-emerald-400">Expired (Zero Deductions Allowed)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">3. Prevailing RBI Bank Rate (Assume 6.75% × 3 = 20.25% p.a.)</span>
                    <span className="text-amber-400 font-bold">20.25% p.a. Compound Monthly</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">4. Compound Penal Interest Accrued (180 Days Overdue)</span>
                    <span className="text-emerald-400 font-bold">+ ₹2,62,500</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">5. Warehouse Demurrage, Carrying Costs & Cartage</span>
                    <span className="text-white font-bold">+ ₹1,10,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">6. Legal Notice, ODR Filing & Advocate Retainer Fees</span>
                    <span className="text-white font-bold">+ ₹1,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 bg-slate-800/90 px-3 rounded-lg text-sm">
                    <span className="text-red-400 font-bold">Total Enforceable Recovery Sum</span>
                    <span className="text-white font-black">₹29,72,500</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-1">
                  <p className="font-sans">
                    <strong className="text-amber-400 font-bold">Buyer Tax Disallowance Impact:</strong> Under Section 43B(h), the buyer loses ₹25,00,000 in expenditure deductions, creating an immediate tax liability of approximately <strong>₹7,80,000</strong> (at 31.2% effective corporate tax).
                  </p>
                  <p className="font-sans text-slate-400">
                    Grand Total Commercial & Tax Cost to Defaulting Debtor: <strong>₹37,52,500</strong> on an original ₹25 Lakh bill.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Downward Hub-and-Spoke Directory Cards */}
            <section
              id="heading-spokes-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Specialized Sector Sub-Routes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                IND-13 Sector Directory: 10 Specialized Textile Recovery Guides & Tools
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Explore in-depth operational SOPs, precedent analyses, and ready-to-use notice workspaces across specific sub-segments of the textile economy.
              </p>

              {/* Grid of 10 Spokes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {INDUSTRY_SPOKES.map((spoke) => (
                  <Link
                    key={spoke.code}
                    href={spoke.href}
                    className="group block p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#DC2626] hover:shadow-md transition-all relative"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700 group-hover:bg-red-100 group-hover:text-[#DC2626] transition-colors">
                        {spoke.code} • {spoke.badge}
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5 leading-snug">
                      {spoke.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {spoke.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 8: Dual B2B Onboarding Funnel (₹999 vs Bulk CSV) */}
            <section id="heading-dual-funnel-desk" className="scroll-mt-28">
              <TextileRecoveryCTA />
            </section>

            {/* Section 9: Mill Promoter & CFO FAQs */}
            <section
              id="heading-textile-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                Frequently Answered Statutory Questions for Textile Promoters & CFOs
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Clear legal answers regarding broker liability, Section 43B(h) compliance, possessory lien enforcement, and electronic evidence under BSA 2023.
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs shrink-0 group-open:rotate-180 transition-transform">
                        ↓
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Legal Citations & Sitemap Filter */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 text-xs text-slate-600 space-y-4"
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                Official Statutory Authorities & Regulatory Sources
              </h2>
              <p className="leading-relaxed">
                All statutory procedures referenced on this page derive from the Gazette of India: Micro, Small and Medium Enterprises Development (MSMED) Act 2006 (Act No. 27 of 2006); Indian Contract Act 1872 (Act No. 9 of 1872) Sections 170, 182, 211, and 230; Sale of Goods Act 1930 Sections 41, 42, 44, and 56; Income Tax Act 1961 Section 43B(h); Negotiable Instruments Act 1881 Section 138; Bharatiya Nyaya Sanhita 2023 Sections 318 and 61; and Bharatiya Sakshya Adhiniyam 2023 Section 63.
              </p>
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-[11px]">
                <span>
                  Explore all sectors and complete legal-tech directory on our live{" "}
                  <Link href="/sitemap" className="font-bold text-[#DC2626] underline hover:text-[#B91C1C]">
                    Complete B2B Sitemap & Industry Directory
                  </Link>
                  .
                </span>
                <span className="text-slate-400">Last Verified: November 2026 Statutory Release</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
