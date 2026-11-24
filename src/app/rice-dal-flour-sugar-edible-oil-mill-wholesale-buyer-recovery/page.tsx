import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import GrainMillTableOfContents from "./GrainMillTableOfContents";
import GrainMillScenarioTabs from "./GrainMillScenarioTabs";
import GrainMillCTA from "./GrainMillCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/rice-dal-flour-sugar-edible-oil-mill-wholesale-buyer-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Grain, Pulse & Edible-Oil Millers (Karnal, Gondia, Akola, Jalgaon, Lawrence Road & Vashi): Recovering Outstation Buyer & Broker Defaults";

const META_TITLE = "Rice, Dal, Flour & Oil Mill Wholesale Debt Recovery Guide";

const META_DESCRIPTION =
  "Staple food mills ship ₹25L truckloads on 1% margins via mandi brokers! Use FSSAI lot-sample locks, Section 43B(h), s.138 & multi-party broker notices.";

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
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(META_TITLE),
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
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — Manufacturing Mill Status, 45-Day Ceiling & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 (Section 43B(h) — Mandatory Tax Disallowance for Buyer Delays Beyond 15/45 Days to Micro & Small Agro-Processing Mills)",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Dishonour of Mandi PDCs & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suit & Order XXXVIII Rule 5 Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 318 — Cheating & Organized Mandi Bust-Out Fraud)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Section 42 — Deemed Acceptance & Bar on Belated Moisture/Broken-Percentage Deductions)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Admissibility of E-Way Bills, Kanta Slips & Sauda Chitthis)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Do rice, dal, roller flour, and edible-oil mills qualify as manufacturing MSMEs under Section 43B(h) and MSMED Act ss.15–18?",
    answer:
      "Yes. Paddy hulling and rice milling (NIC 10612), pulse/dal milling, wheat roller flour milling (maida/suji/atta under NIC 10611), sugar manufacturing (NIC 1072), and mustard/soybean edible-oil extraction (NIC 1040) are classified as Manufacturing MSMEs when registered on the Udyam portal. Consequently, Micro and Small millers are entitled to the mandatory 45-day payment ceiling under MSMED s.15, 3x RBI compound interest under s.16, and the Income Tax Act Section 43B(h) expense disallowance hammer against defaulting wholesale buyers.",
  },
  {
    question:
      "How can a Karnal, Gondia, or Akola miller stop an outstation buyer from raising fake 'high moisture' or 'broken %' deductions after unloading?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, once a wholesale buyer accepts delivery, fails to intimate rejection within a reasonable time (typically 24–72 hours at unloading), or resells/blends the stock, the buyer is deemed to have accepted the goods in law. Combining a sealed dispatch counter-sample, a signed mill-gate/APMC Kanta weighbridge slip, and an FSSAI/NABL moisture certificate destroys belated quality excuses.",
  },
  {
    question:
      "Is a mandi broker (Kacha or Pakka Arhatiya) legally liable when the outstation buyer defaults?",
    answer:
      "A Pakka Arhatiya or Del Credere commission agent who guarantees payment, routes billing/payments through their gaddi, or acts for an undisclosed outstation principal is jointly and severally liable under Indian Contract Act Sections 182–238 and Section 230. Even where a Kacha Arhatiya denies liability, serving a Multi-Party Legal Notice naming both the buyer and the broker—with copies to the local APMC Mandi Samiti—forces rapid mediation.",
  },
  {
    question:
      "What legal remedy works fastest when a Naya Bazar, Vashi APMC, or Kolkata trader executes an organized 'bust-out' after buying 10 truckloads?",
    answer:
      "When a trader rapidly procures multiple truckloads on 15-day credit, liquidates inventory below mandi cost, and locks their godown citing sudden insolvency, it crosses from civil breach into Criminal Cheating under BNS Section 318. Millers should simultaneously file a BNS s.318 criminal complaint, an Order XXXVII CPC Summary Suit, and an urgent Order XXXVIII Rule 5 application for Attachment Before Judgment of remaining stock and bank accounts.",
  },
  {
    question:
      "Can Modern Trade supermarkets or HoReCa chains withhold payment citing '5% GST branded vs unbranded' invoice disputes?",
    answer:
      "No. Under GST notifications for pre-packaged and labelled food grains (5% GST), any HSN or tax-rate objection must be raised before accepting the GST E-Invoice and claiming Input Tax Credit (ITC). Once the buyer records the invoice in GSTR-2B and takes ITC, withholding principal violates MSMED Act s.15, triggers Section 43B(h) tax disallowance, and exposes the buyer to ITC reversal under CGST Rule 37 after 180 days.",
  },
  {
    question:
      "How does Income Tax Section 43B(h) force corporate and large wholesale buyers to pay Micro & Small mills before March 31?",
    answer:
      "Section 43B(h) of the Income Tax Act, 1961 disallows the buyer from deducting the cost of goods purchased from a Micro or Small registered MSME as a business expense if payment is delayed beyond 15 days (or 45 days with a written agreement). On a ₹25 Lakh unpaid rice or oil invoice, the buyer faces an immediate ~30% corporate tax addition (₹7.50 Lakh extra tax outgo) plus MSMED s.16 compound interest, making delay financially irrational.",
  },
  {
    question:
      "What is the exact timeline to file a Section 138 NI Act case on a bounced mandi security cheque?",
    answer:
      "From the date the bank issues the Cheque Return Memo, you have strictly 30 days to serve a written Statutory Demand Notice under Section 138(b) of the Negotiable Instruments Act, 1881. If the buyer/drawer fails to pay within 15 days of receiving that notice, you must file the criminal complaint before the Judicial Magistrate within the next 30 days, seeking 20% interim compensation under Section 143A.",
  },
];

const DECISION_STAGES = [
  {
    stage: "Stage 1 · Day 0–15",
    title: "Lot-Sample & Kanta Lock",
    detail:
      "Seal counter-sample with batch tag, retain E-Way Bill Part B, Lorry Receipt (Bilty), and weighbridge Kanta slip.",
  },
  {
    stage: "Stage 2 · Day 16–30",
    title: "Multi-Party Broker Notice",
    detail:
      "Serve fact-verified notice jointly on Outstation Buyer & Pakka Arhatiya via RPAD + Email + WhatsApp; invoke s.42 deemed acceptance.",
  },
  {
    stage: "Stage 3 · Day 31–45",
    title: "43B(h) & MSEFC Trigger",
    detail:
      "Send Section 43B(h) Tax Disallowance Warning & file MSME Samadhaan claim for 3x RBI compound interest.",
  },
  {
    stage: "Stage 4 · PDC Bounce",
    title: "NI s.138 & s.143A Action",
    detail:
      "Issue 15-day statutory cheque bounce notice within 30 days of return memo; claim 20% interim deposit under s.143A.",
  },
  {
    stage: "Stage 5 · Bust-Out",
    title: "Order 37 + BNS s.318",
    detail:
      "File CPC Order XXXVII Summary Suit with Order XXXVIII Rule 5 asset freeze + BNS s.318 cheating FIR.",
  },
];

export default function RiceDalFlourOilMillRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    datePublished: "2026-11-18T00:00:00+05:30",
    dateModified: "2026-11-18T00:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Grain, Pulse & Edible-Oil Millers Recover Outstation Wholesale & Mandi Broker Defaults",
    description:
      "5-step creditor recovery SOP for rice, dal, roller flour, sugar, and edible-oil mills facing Naya Bazar, Vashi APMC, and Modern Trade payment defaults.",
    step: DECISION_STAGES.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: `${s.stage}: ${s.title}`,
      text: s.detail,
    })),
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
        name: "Agri-Inputs, Cold Storage & Food Processing Recovery",
        item: `${SITE_URL}/industries/agri-inputs-cold-storage-food-processing-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Rice, Dal, Flour & Edible Oil Mill Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-21 · Agro-Processing &amp; Mandi Wholesale Recovery</span>
            <span className="text-red-600">|</span>
            <span>MSMED s.15–18 · s.43B(h) · NI s.138 · BNS s.318</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/agri-inputs-cold-storage-food-processing-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Agri-Inputs &amp; Food Processing Recovery Hub
            </Link>
            , rice, dal, roller flour, sugar, and edible-oil mills qualify as manufacturing MSMEs. By pairing sealed FSSAI lot-samples with multi-party notices to buyers and Pakka Arhatiyas under MSMED ss.15–18, Income Tax s.43B(h), NI s.138, and BNS s.318, millers defeat bust-out traders and recover locked truckload capital fast.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-lg sm:text-2xl font-black text-red-400">
                1%–1.5%
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Net Mill Margin (1 Default = 100 Paid Trucks Lost)
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-amber-400">
                45 Days
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                s.43B(h) Tax Disallowance &amp; MSMED Ceiling
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-emerald-400">
                3x RBI Rate
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 Monthly Compound Interest
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-slate-100">
                ₹25L+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Avg 25–30 MT Truckload Claim Value
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Agri & Food Processing Hub",
                href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
              },
              {
                label: "Rice, Dal, Flour & Edible Oil Mill Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <GrainMillTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-margin-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Staple Food Mills Bleed Working Capital on 1% Margins
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s primary agro-processing belts—Basmati and non-Basmati rice mills in{" "}
                  <strong>Karnal, Taraori, Amritsar, Gondia, and Raipur</strong>; Tur and Chana dal mills in{" "}
                  <strong>Akola, Latur, Jalgaon, and Indore</strong>; roller flour mills (maida/suji/atta) in{" "}
                  <strong>Lawrence Road (Delhi) and Kanpur</strong>; and mustard/soybean edible-oil mills in{" "}
                  <strong>Alwar and Bharatpur</strong>—business runs on razor-thin{" "}
                  <strong>1% to 1.5% net operating margins</strong>. A single 25–30 MT truckload of Basmati rice, refined soybean oil, or sorted Tur dal carries an invoice value of{" "}
                  <strong>₹18 Lakh to ₹32 Lakh</strong>, meaning one unpaid dispatch wipes out the net profit of nearly 100 clean deliveries.
                </p>

                <p>
                  Yet wholesale grain and oil trade still relies heavily on informal{" "}
                  <em>Sauda Chitthis</em> routed through mandi commission agents (<em>Kacha</em> and{" "}
                  <em>Pakka Arhatiyas</em>) into terminal consumption hubs like{" "}
                  <strong>Naya Bazar (Delhi), Vashi APMC (Navi Mumbai), and Posta (Kolkata)</strong>. Over the past three years, organized{" "}
                  <strong>&ldquo;bust-out&rdquo; syndicates</strong> have exploited this trust: they build a 6-month clean payment track record on small lots, suddenly procure 8 to 12 full truckloads across multiple millers within 20 days, liquidate stock below mandi parity for cash, and then shut their <em>gaddi</em> claiming sudden insolvency.
                </p>

                <p>
                  For millers supplying <strong>Modern Trade supermarkets, HoReCa chains, or institutional packers</strong>, a second cash trap has emerged: buyers withhold ₹10–₹40 Lakh citing{" "}
                  <strong>5% GST branded vs. unbranded HSN disputes</strong>, arbitrary &ldquo;high moisture / &gt;5% broken percentage&rdquo; debit notes raised weeks after unloading, or unilateral 90-to-120-day credit policies. As detailed in our{" "}
                  <Link
                    href="/industries/agri-inputs-cold-storage-food-processing-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Agri-Inputs, Cold Storage &amp; Food Processing Recovery Hub
                  </Link>
                  , the law treats agro-processing mills as <strong>Manufacturing MSMEs</strong>—giving you extraordinary statutory leverage if you sequence your notices correctly.
                </p>
              </div>
            </section>

            {/* Section 2 — Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage Mandi Broker &amp; Outstation Buyer Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Do not wait 90 days hoping a mandi broker will &ldquo;adjust&rdquo; the account in the next harvest cycle. Follow this strict 5-stage escalation rail from the first missed due date.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-950 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 820 260"
                  width="820"
                  height="260"
                  role="img"
                  aria-label="5-Stage Grain, Dal and Edible Oil Mill Wholesale Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Connectors */}
                  <line x1="152" y1="95" x2="176" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                  <line x1="312" y1="95" x2="336" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                  <line x1="472" y1="95" x2="496" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                  <line x1="632" y1="95" x2="656" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

                  {/* Node 1 */}
                  <rect x="12" y="35" width="140" height="125" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="24" y="58" fill="#F87171" fontSize="10" fontWeight="800">STAGE 1 · DAY 0–15</text>
                  <text x="24" y="80" fill="#FFFFFF" fontSize="12" fontWeight="800">Lot-Sample Lock</text>
                  <text x="24" y="102" fill="#CBD5E1" fontSize="10">Seal FSSAI/AGMARK</text>
                  <text x="24" y="117" fill="#CBD5E1" fontSize="10">counter-sample +</text>
                  <text x="24" y="132" fill="#CBD5E1" fontSize="10">Kanta slip + E-Way</text>

                  {/* Node 2 */}
                  <rect x="176" y="35" width="136" height="125" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="188" y="58" fill="#F87171" fontSize="10" fontWeight="800">STAGE 2 · DAY 16–30</text>
                  <text x="188" y="80" fill="#FFFFFF" fontSize="12" fontWeight="800">Joint Notice</text>
                  <text x="188" y="102" fill="#CBD5E1" fontSize="10">Serve Buyer + Pakka</text>
                  <text x="188" y="117" fill="#CBD5E1" fontSize="10">Arhatiya; invoke s.42</text>
                  <text x="188" y="132" fill="#CBD5E1" fontSize="10">deemed acceptance</text>

                  {/* Node 3 */}
                  <rect x="336" y="35" width="136" height="125" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="348" y="58" fill="#FBBF24" fontSize="10" fontWeight="800">STAGE 3 · DAY 31–45</text>
                  <text x="348" y="80" fill="#FFFFFF" fontSize="12" fontWeight="800">43B(h) + MSEFC</text>
                  <text x="348" y="102" fill="#CBD5E1" fontSize="10">30% tax disallowance</text>
                  <text x="348" y="117" fill="#CBD5E1" fontSize="10">alert + 3x RBI</text>
                  <text x="348" y="132" fill="#CBD5E1" fontSize="10">compound interest</text>

                  {/* Node 4 */}
                  <rect x="496" y="35" width="136" height="125" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="508" y="58" fill="#34D399" fontSize="10" fontWeight="800">STAGE 4 · PDC BOUNCE</text>
                  <text x="508" y="80" fill="#FFFFFF" fontSize="12" fontWeight="800">NI s.138 + s.143A</text>
                  <text x="508" y="102" fill="#CBD5E1" fontSize="10">15-day notice within</text>
                  <text x="508" y="117" fill="#CBD5E1" fontSize="10">30d of memo; claim</text>
                  <text x="508" y="132" fill="#CBD5E1" fontSize="10">20% interim deposit</text>

                  {/* Node 5 */}
                  <rect x="656" y="35" width="150" height="125" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                  <text x="668" y="58" fill="#FCA5A5" fontSize="10" fontWeight="800">STAGE 5 · BUST-OUT</text>
                  <text x="668" y="80" fill="#FFFFFF" fontSize="12" fontWeight="800">Order 37 + BNS 318</text>
                  <text x="668" y="102" fill="#FEE2E2" fontSize="10">Order 38 R.5 godown</text>
                  <text x="668" y="117" fill="#FEE2E2" fontSize="10">attachment + BNS</text>
                  <text x="668" y="132" fill="#FEE2E2" fontSize="10">s.318 cheating FIR</text>

                  {/* Bottom Bar */}
                  <rect x="12" y="188" width="794" height="52" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                  <text x="28" y="210" fill="#34D399" fontSize="11" fontWeight="800">
                    RECOVERY ACCELERATOR:
                  </text>
                  <text x="195" y="210" fill="#E2E8F0" fontSize="11">
                    Simultaneous RPAD + Email + WhatsApp service under BSA 2023 s.63 freezes limitation &amp; prevents asset stripping.
                  </text>
                  <text x="28" y="228" fill="#94A3B8" fontSize="10">
                    Never accept oral broker assurances after Day 30 — every day of delay weakens Order XXXVIII Rule 5 attachment relief.
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {DECISION_STAGES.map((item) => (
                  <div
                    key={item.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block mb-1">
                      {item.stage}
                    </span>
                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 — Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Remedy Matrix for Grain, Dal &amp; Oil Millers
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every wholesale commodity dispute has a matching statutory weapon. Match your buyer&apos;s default pattern to the exact Act and timeline below:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute &amp; Section</th>
                      <th className="p-3.5 font-bold">Mandi / Mill Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Leverage</th>
                      <th className="p-3.5 font-bold">Strict Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act, 2006 (ss.15–18)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Any Micro/Small mill (Udyam Manufacturing NIC) unpaid past 45 days
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        3x RBI Bank Rate (~19.5% p.a.) compounded monthly + MSEFC conciliation
                      </td>
                      <td className="p-3.5 text-slate-700">45-day max ceiling</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Income Tax Act s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Corporate / audited wholesale buyer delaying MSME mill invoice past FY-end
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        100% purchase expense disallowed in buyer&apos;s ITR (~30% immediate tax hit)
                      </td>
                      <td className="p-3.5 text-slate-700">15d / 45d ceiling</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act, 1881 (ss.138, 141, 143A)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Dishonoured mandi security PDC or part-payment cheque
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Criminal prosecution of partners/directors + 20% interim deposit
                      </td>
                      <td className="p-3.5 text-red-700 font-semibold">
                        30d notice / 15d cure
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act s.42
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Buyer resells stock then raises belated moisture/broken-% cut
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Deemed acceptance bars post-delivery quality deductions
                      </td>
                      <td className="p-3.5 text-slate-700">24–72h inspection</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act ss.182–238
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Pakka Arhatiya / Del Credere broker refuses responsibility
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Joint &amp; several liability + APMC Mandi Samiti license pressure
                      </td>
                      <td className="p-3.5 text-slate-700">3-year limitation</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        CPC Order XXXVII &amp; BNS s.318
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Organized Naya Bazar / Vashi / Kolkata 10-truck bust-out fraud
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Summary decree + Order 38 R.5 asset freeze + criminal cheating FIR
                      </td>
                      <td className="p-3.5 text-red-700 font-semibold">
                        Immediate filing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 — Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Wholesale Mill &amp; Mandi Default Playbooks (Interactive)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact commercial failure mode below to inspect the debtor&apos;s excuse, the statutory counter-weapon, required evidence packet, and recovery timeline:
              </p>

              <GrainMillScenarioTabs />
            </section>

            {/* Section 5 — Worked Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Ledger: ₹25L Basmati Lot vs 1% Mill Margin &amp; s.43B(h)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Why does a Micro or Small rice/dal/oil miller hold decisive financial leverage over a corporate or audited wholesale buyer? Look at the statutory arithmetic on a single defaulted{" "}
                <strong>₹25,00,000</strong> truckload delayed for 180 days:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block mb-2">
                    Miller&apos;s Margin Erosion vs Statutory Claim
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Unpaid Truckload Principal (25 MT):</span>
                      <span className="font-bold text-white">₹25,00,000</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Mill Net Profit per Truck (at 1%):</span>
                      <span className="font-bold text-amber-400">₹25,000</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Clean Trucks Needed to Recover Loss:</span>
                      <span className="font-bold text-red-400">100 Truckloads</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">MSMED s.16 Interest (19.5% p.a. × 180d):</span>
                      <span className="font-bold text-emerald-400">+₹2,51,800</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span className="font-bold text-white">Total Recoverable Claim (Day 180):</span>
                      <span className="font-black text-emerald-400">₹27,51,800</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block mb-2">
                      Buyer&apos;s Hidden Section 43B(h) Tax Shock
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-3">
                      If the buyer is an audited firm or company and fails to clear the ₹25,00,000 invoice within the 45-day MSMED window before March 31, the entire ₹25,00,000 purchase is{" "}
                      <strong>disallowed as a tax deduction</strong> under Income Tax Act Section 43B(h).
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-4">
                      At a 30% tax bracket, the buyer suffers an immediate{" "}
                      <strong>₹7,50,000 extra income tax outgo</strong>—plus ₹2,51,800 non-deductible MSMED interest. Paying you ₹25L immediately saves the buyer over ₹10L in combined tax and statutory interest.
                    </p>
                  </div>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors text-center"
                  >
                    Compute Exact MSMED s.16 &amp; s.43B(h) Interest &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 — Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Dispatch, Lot-Sample &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before issuing a legal notice or filing an Order XXXVII Summary Suit, assemble these 6 admissibility-ready records (all electronic WhatsApp, E-Way Bill, and E-Invoice logs must be backed by a{" "}
                <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023 Section 63</strong> certificate):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                {[
                  {
                    title: "1. GST E-Invoice IRN & GSTR-1 Proof",
                    desc: "Proves buyer claimed Input Tax Credit (ITC), defeating denial of delivery or 5% GST invoice disputes.",
                  },
                  {
                    title: "2. E-Way Bill (Part A & B) + Bilty",
                    desc: "Establishes vehicle number, dispatch timestamp, and physical handover to the transporter.",
                  },
                  {
                    title: "3. Weighbridge Kanta Slip (Dispatch & Unloading)",
                    desc: "Locks net weight (MT/Quintals) and eliminates post-delivery short-weight claims.",
                  },
                  {
                    title: "4. Sealed Counter-Sample & Moisture Lab Slip",
                    desc: "Tamper-evident lot sample signed at loading + FSSAI/NABL moisture & broken-% report.",
                  },
                  {
                    title: "5. Sauda Chitthi & Arhatiya WhatsApp Trail",
                    desc: "Binds the Pakka Arhatiya / Del Credere broker to payment timelines and quality tolerances.",
                  },
                  {
                    title: "6. Udyam Certificate + Bounced Cheque Memo",
                    desc: "Unlocks MSMED s.15–18 interest, s.43B(h) tax hammer, and NI Act s.138 criminal prosecution.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  Need a structured notice format or buyer reply rebuttal before escalating to MSEFC or Order XXXVII?
                </p>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 shrink-0"
                >
                  View Legal Notice Templates &rarr;
                </Link>
              </div>
            </section>

            {/* Section 7 — Dual-Track CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Launch Your Mill Recovery Notice or Bulk Mandi Ledger Drive
                </h2>
              </div>

              <GrainMillCTA />
            </section>

            {/* Section 8 — IND-21 & Seed Cross-Links */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-21 Agri, Cold Storage &amp; Wholesale Recovery Network
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "Agri-Inputs, Cold Storage & Food Mill Hub",
                    href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
                    tag: "IND-21 Pillar Hub",
                  },
                  {
                    title: "Agrochemical & Seed Dealer Credit Default Recovery",
                    href: "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery",
                    tag: "Sibling Spoke",
                  },
                  {
                    title: "B2B Distributor & Dealer Dues Recovery",
                    href: "/distributor-dealer-dues-recovery",
                    tag: "B2B Seed Guide",
                  },
                  {
                    title: "NI Act Section 138 Cheque Bounce Timeline",
                    href: "/cheque-bounce-notice-timeline-section-138",
                    tag: "Statutory Timeline",
                  },
                  {
                    title: "Hindi Guide: Legal Notice Kaise Bheje (Vyapari SOP)",
                    href: "/hi/legal-notice-kaise-bheje",
                    tag: "Hindi SOP",
                  },
                  {
                    title: "MSME Delayed Payment 3x RBI Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "Interactive Tool",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626]/50 bg-slate-50 hover:bg-white transition-all flex items-center justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626] block mb-1">
                        {link.tag}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        {link.title}
                      </span>
                    </div>
                    <span className="text-slate-400 group-hover:text-[#DC2626] font-bold">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 9 — FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Grain, Dal &amp; Oil Mill Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10 — Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
