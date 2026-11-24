import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import YarnMillNoticeCTA from "./YarnMillNoticeCTA";
import YarnMillTableOfContents from "./YarnMillTableOfContents";
import YarnMillScenarioTabs from "./YarnMillScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Spinning Mill & Yarn Trader Credit & Rate-Contract Recovery",
  description:
    "When yarn prices fall, buyers ghost forward contracts. Recover contract-vs-market difference under Sale of Goods s.56, SIMA arbitration & MSMED Act.",
  alternates: {
    canonical: `${SITE_URL}/spinning-mill-yarn-dealer-credit-default-cotton-contract-recovery`,
  },
  openGraph: {
    title: "Spinning Mill & Yarn Trader Credit & Rate-Contract Recovery",
    description:
      "When yarn prices fall, buyers ghost forward contracts. Recover contract-vs-market difference under Sale of Goods s.56, SIMA arbitration & MSMED Act.",
    url: `${SITE_URL}/spinning-mill-yarn-dealer-credit-default-cotton-contract-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Spinning Mill Yarn Buyer Default and Forward Contract Breach Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spinning Mill & Yarn Trader Credit & Rate-Contract Recovery",
    description:
      "When yarn prices fall, buyers ghost forward contracts. Recover contract-vs-market difference under Sale of Goods s.56, SIMA arbitration & MSMED Act.",
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
    title: "Sale of Goods Act, 1930 (Section 56 Damages for Non-Acceptance & Section 54 Right of Resale)",
    url: "https://www.indiacode.nic.in/handle/123456789/2389",
  },
  {
    title: "Indian Contract Act, 1872 (Section 73 Compensation for Loss or Damage & Section 182-212 Agency)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 Statutory Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (SIMA / CAI Institutional Rules & Section 36 Enforcement)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Admissibility of Electronic Records: WhatsApp, E-Way & Sauda Slips)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "Can a spinning mill recover the price difference if the yarn buyer refuses to lift booked lots?",
    answer:
      "Yes. Under Section 56 of the Sale of Goods Act, 1930, where the buyer wrongfully neglects or refuses to accept and pay for goods, the seller may sue for damages for non-acceptance. The measure of damages is the difference between the contract forward price and the prevailing spot market rate on the date when the goods ought to have been accepted. The mill also retains the right of resale under Section 54 upon serving statutory notice.",
  },
  {
    question: "What if the forward yarn booking was confirmed only on WhatsApp or oral Sauda Chitthi?",
    answer:
      "Oral and informal electronic contracts are fully binding under the Indian Contract Act, 1872 and Section 10A of the Information Technology Act, 2000. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), WhatsApp chats, audio confirmations, email broker sauda slips, and mill booking registers are admissible as primary electronic evidence when accompanied by the statutory certificate.",
  },
  {
    question: "Should a spinning mill opt for SIMA / CAI arbitration or Commercial Court litigation?",
    answer:
      "If the contract confirmation slip, broker note, or mill invoice contains a SIMA (Southern India Mills' Association) or CAI (Cotton Association of India) arbitration clause, arbitration is vastly faster—typically yielding an award in 4 to 9 months by industry-expert arbitrators. In the absence of an arbitration clause, an Order XXXVII CPC Summary Suit in the Commercial Court or an MSME Samadhaan petition provides statutory speed and pre-judgment asset protection.",
  },
  {
    question: "Can the mill forfeit the advance token paid by the defaulting yarn trader?",
    answer:
      "Yes. If the contract designates the initial payment as earnest money (token guarantee of performance), the mill can forfeit it under Section 74 of the Contract Act, provided it represents a reasonable pre-estimate of loss. The mill then deducts this forfeited token from the larger damages claim for price difference and godown holding charges.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act compel defaulting yarn dealers to settle?",
    answer:
      "If the spinning mill is registered as a Micro or Small enterprise under Udyam, Section 43B(h) mandates payment within 15 days (or 45 days under written agreement). If the buyer fails to pay within this statutory window, the entire yarn purchase expense is disallowed from their taxable income, creating an immediate and heavy corporate tax surcharge in that financial year.",
  },
  {
    question: "What criminal remedies exist against a yarn agency proprietor whose cheques bounce?",
    answer:
      "Under Section 138 of the Negotiable Instruments Act, 1881, the proprietor faces up to 2 years imprisonment and double the cheque amount in fines. The mill can also apply under Section 143A for 20% interim compensation. If the buyer deliberately issued cheques from closed accounts or diverted goods with fraudulent intent, charges under Bharatiya Nyaya Sanhita (BNS) Sections 316 (criminal breach of trust) and 318(4) (cheating) are also maintainable.",
  },
  {
    question: "How can spinning mills manage recovery across dozens of defaulting weavers simultaneously?",
    answer:
      "Spinning mills dealing with dozens of defaulting powerloom or circular knitting units in Surat, Bhiwandi, or Tirupur can leverage LegalRecovery's bulk institutional engine. Mills upload an aging ledger CSV to dispatch automated, fact-verified statutory demand notices with real-time tracking, GST verification, and seamless escalation to MSME Samadhaan or commercial litigation.",
  },
];

export default function SpinningMillYarnRecoveryPage() {
  const publishedDate = "2026-11-17T09:00:00+05:30";
  const modifiedDate = "2026-11-17T09:00:00+05:30";

  const breadcrumbItems = [
    { label: "B2B Recovery", href: "/industries/textiles-apparel-garment-recovery" },
    { label: "Textiles & Garments", href: "/industries/textiles-apparel-garment-recovery" },
    {
      label: "Spinning Mill Yarn Contract Recovery",
      href: "/spinning-mill-yarn-dealer-credit-default-cotton-contract-recovery",
    },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cotton/Yarn Prices Dropped 12% and the Buyer Refuses to Lift Booked Yarn Lots? Enforcing Forward-Rate Difference Damages & Mill Ledgers",
    description:
      "When yarn prices fall, buyers ghost forward contracts. Recover contract-vs-market difference under Sale of Goods s.56, SIMA arbitration & MSMED Act.",
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      worksFor: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
        url: "https://www.amalegalsolutions.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/spinning-mill-yarn-dealer-credit-default-cotton-contract-recovery`,
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
        name: "Textiles & Garments Hub",
        item: `${SITE_URL}/industries/textiles-apparel-garment-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Spinning Mill Yarn Contract Recovery",
        item: `${SITE_URL}/spinning-mill-yarn-dealer-credit-default-cotton-contract-recovery`,
      },
    ],
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Spinning Mills Enforce Forward-Rate Difference Damages on Unlifted Yarn Lots",
    description:
      "Operational SOP for spinning mills to quantify rate differences, execute statutory resale, and recover damages from defaulting yarn buyers.",
    step: [
      {
        "@type": "HowToStep",
        name: "Tender Formal Notice of Readiness to Deliver",
        text: "Serve an advocate demand placing the buyer on notice that the spun yarn lot is ready for inspection and delivery, demanding balance payment within 48 hours.",
      },
      {
        "@type": "HowToStep",
        name: "Serve Statutory Notice of Resale under SOGA §54",
        text: "Explicitly put the defaulting buyer on notice that the lot will be auctioned or sold in the open market at prevailing spot rates at the buyer's risk and cost.",
      },
      {
        "@type": "HowToStep",
        name: "Document Prevailing Market Floor via Trade Benchmarks",
        text: "Collect authenticated spot rate bulletins from SIMA, Cotton Association of India (CAI), or regional yarn merchants to crystallize the breach date market price.",
      },
      {
        "@type": "HowToStep",
        name: "Liquidate Difference Damages in Commercial Forum",
        text: "File an action for the price differential, godown demurrage, and bank financing interest via SIMA Arbitration, MSME Samadhaan, or Order XXXVII CPC.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Spinning Mill Creditor SOP</span>
              <span>•</span>
              <span>Sale of Goods Act §56</span>
              <span>•</span>
              <span>SIMA / CAI Arbitration</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Cotton/Yarn Prices Dropped 12% and the Buyer Refuses to Lift Booked Yarn Lots? Enforcing Forward-Rate Difference Damages &amp; Mill Ledgers
            </h1>

            {/* Executive Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Parent Sector Link
              </span>
              When raw cotton and yarn spot prices drop by 10% to 15%, yarn traders and powerloom weavers routinely abandon forward-booked lots, leaving spinning mills saddled with expensive cotton inventory and blocked working capital. Under Section 56 of the Sale of Goods Act, 1930, spinning mills possess an unassailable statutory right to recover the contract-versus-market price difference, storage demurrage, and bank financing costs. This operational playbook enables CFOs in Coimbatore, Ludhiana, Rajapalayam, Ahmedabad, Bhilwara, and Guntur to enforce forward commitments via SIMA/CAI trade arbitration, MSME Samadhaan 3x compound interest, and Order XXXVII summary suits. Coordinated via our parent industry hub at{" "}
              <Link
                href="/industries/textiles-apparel-garment-recovery"
                className="text-red-400 underline hover:text-red-300 font-semibold"
              >
                Textiles, Apparel &amp; Garment Recovery Hub
              </Link>
              .
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-medium">
                  Statutory Difference Claim
                </span>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">SOGA §56</p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Contract rate minus breach spot floor
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-medium">
                  MSME Interest Floor
                </span>
                <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Compounded monthly under MSMED §16
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-medium">
                  SIMA / CAI Arbitration
                </span>
                <p className="text-lg sm:text-2xl font-black text-slate-100">4–9 Months</p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Technical textile bench final awards
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-medium">
                  Tax Disallowance Squeeze
                </span>
                <p className="text-lg sm:text-2xl font-black text-red-400">IT §43B(h)</p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  15/45 day payment lapse disallows audit
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <YarnMillNoticeCTA buttonText="Issue Statutory Notice for Unlifted Yarn (₹999)" />
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="text-xs sm:text-sm text-slate-300 hover:text-white underline font-semibold transition-colors"
              >
                Managing 10+ Defaulting Weavers or Agencies? Upload Ledger CSV &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky TOC */}
            <YarnMillTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Forward Booking Trap */}
              <section
                id="heading-forward-booking-crisis"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Mandi Commercial Reality</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  The Asymmetric Forward-Booking Trap in Indian Spinning Mills
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    In primary textile spinning clusters like <strong>Coimbatore, Tirupur, Rajapalayam, Ludhiana, Ahmedabad, Guntur, and Bhilwara</strong>, spinning mills operate on wafer-thin margins of 3% to 6%. When a powerloom weaver, knitting unit, or yarn merchant books 50 to 200 metric tons of cotton yarn (e.g., 30s combed, 40s carded, or 60s compact) on a 30-day forward delivery schedule, the spinning mill immediately hedges its exposure by procuring corresponding raw cotton bales (such as Shankar-6 or MCU-5) from ginners and paying spot purchase advances.
                  </p>
                  <p>
                    However, Indian yarn trading follows a predatory, one-sided mercantile asymmetry:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
                    <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                        Scenario A: Yarn Prices Rise 10%
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                        The buyer demands immediate dispatch down to the exact kilogram, threatening commercial damages if delivery is delayed even 24 hours. The mill must honor the contract at the lower agreed rate.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                      <span className="text-xs font-bold text-red-800 uppercase tracking-wider block">
                        Scenario B: Yarn Prices Fall 10%–15%
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                        The buyer suddenly ghosts emails, instructs their transport carriers not to accept bilties, refuses to issue dispatch permits, or manufactures frivolous &quot;count variation&quot; or &quot;CSP quality&quot; excuses to evade lifting the high-rate lot.
                      </p>
                    </div>
                  </div>
                  <p>
                    Left unaddressed, the spinning mill incurs catastrophic holding costs: expensive godown demurrage, working capital blocked at 11%–14% bank interest, and unavoidable risk of inventory spoilage or forced distressed liquidation. Mill CFOs often believe they have no remedy without a notarized agreement. Under Indian statutory law, this assumption is completely false.
                  </p>
                </div>
              </section>

              {/* Section 2: Sale of Goods Act s.56 & s.54 */}
              <section
                id="heading-sale-of-goods-s56"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Statutory Core Doctrine</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Enforcing Sale of Goods Act §56: Rate-Difference Damages for Non-Acceptance
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    The legislative framework governing unlifted commercial commodities is governed by the <strong>Sale of Goods Act, 1930 (SOGA)</strong>, supplemented by Section 73 of the <strong>Indian Contract Act, 1872</strong>.
                  </p>

                  <div className="bg-slate-900 text-slate-100 p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-3 not-prose">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                        Bare Act Formulation: Section 56 SOGA
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">Act No. 3 of 1930</span>
                    </div>
                    <blockquote className="text-xs sm:text-sm md:text-base italic text-slate-200 leading-relaxed">
                      &quot;Where the buyer wrongfully neglects or refuses to accept and pay for the goods, the seller may sue him for damages for non-acceptance.&quot;
                    </blockquote>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      <strong>Judicial Measure of Damages:</strong> As settled by the Supreme Court of India in <em>Murlidhar Chiranjilal v. Harishchandra Dwarkadas</em> (AIR 1962 SC 366), the quantum of damages under Section 56 is the difference between the <strong>Contract Rate</strong> and the <strong>Market Spot Rate</strong> prevailing on the exact date of breach (the date lifting was refused or expired).
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                    The Statutory Right of Resale under Section 54
                  </h3>
                  <p>
                    Where the buyer refuses to take delivery after goods have been appropriated to the contract, the mill does not need to let the yarn rot in its godowns. Under Section 54(2) of SOGA:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>
                      <strong>Statutory Resale Notice:</strong> The mill serves a peremptory notice demanding acceptance within a fixed timeframe (e.g., 48 to 72 hours), failing which the goods will be resold in the open market.
                    </li>
                    <li>
                      <strong>Recovery of Deficiency:</strong> If the resale yields a lower rate than the forward contract price, the seller can recover this loss from the defaulting buyer.
                    </li>
                    <li>
                      <strong>Retention of Surplus:</strong> If the resale yields a profit, the defaulting buyer is barred from claiming the surplus if the seller had given notice.
                    </li>
                    <li>
                      <strong>Incidental Damages:</strong> Warehouse storage fees, container retention penalties, and insurance costs incurred between breach and resale are fully claimable under Section 73 of the Contract Act.
                    </li>
                  </ul>
                  <p>
                    Even if the original sauda was conducted through broker chits or WhatsApp, enforceable rights exist. For deep-dive principles on verbal mandi bookings, review our guide on{" "}
                    <Link
                      href="/how-to-recover-money-without-written-agreement"
                      className="text-red-600 underline hover:text-red-700 font-semibold"
                    >
                      Recovering Business Dues Without a Formal Written Agreement
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 3: Statutory & Institutional Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Legal &amp; Institutional Comparison</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Forum Matrix: Resolving Spinning Mill Yarn Disputes Across Indian Forums
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Selecting the optimum legal forum depends on the contract documentation, presence of trade association clauses, entity registration, and speed requirements.
                </p>

                <div className="overflow-x-auto not-prose -mx-5 sm:mx-0">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold rounded-tl-xl">Remedy / Forum</th>
                        <th className="p-3.5 font-bold">Governing Statute</th>
                        <th className="p-3.5 font-bold">Dispute Scope</th>
                        <th className="p-3.5 font-bold">Timeline</th>
                        <th className="p-3.5 font-bold rounded-tr-xl">Enforceability &amp; Teeth</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 border-b border-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">
                          SIMA / CAI Trade Arbitration
                        </td>
                        <td className="p-3.5 text-slate-600">
                          Arbitration Act 1996 + SIMA / CAI Rules
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Forward-rate breach, unlifted cotton bales, quality CSP test disputes
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-600">4–9 Months</td>
                        <td className="p-3.5 text-slate-700">
                          Directly executable as a Civil Court Decree under Section 36 + Mandi Blacklisting
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">
                          Commercial Court Summary Suit
                        </td>
                        <td className="p-3.5 text-slate-600">
                          Commercial Courts Act 2015 + CPC Order XXXVII
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Liquidated difference damages, unpaid running ledgers, returned cheques
                        </td>
                        <td className="p-3.5 font-semibold text-amber-600">6–14 Months</td>
                        <td className="p-3.5 text-slate-700">
                          Pre-judgment attachment under Order 38 Rule 5; requires mandatory 12A mediation
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">
                          MSME Samadhaan (MSEFC)
                        </td>
                        <td className="p-3.5 text-slate-600">
                          MSMED Act 2006 Sections 15–18
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Delivered yarn invoices, processing job charges, spinning conversion fees
                        </td>
                        <td className="p-3.5 font-semibold text-amber-600">6–12 Months</td>
                        <td className="p-3.5 text-slate-700">
                          Compound interest at 3x RBI Bank Rate; mandatory 75% pre-deposit under Section 19
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">
                          Section 43B(h) IT Disallowance
                        </td>
                        <td className="p-3.5 text-slate-600">
                          Income Tax Act, 1961 Section 43B(h)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Unpaid running credit bills overdue beyond 15 or 45 days
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-600">Immediate Notice</td>
                        <td className="p-3.5 text-slate-700">
                          Drives CFO settlements by inflating buyer taxable income with severe tax penalties
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">
                          Cheque Bounce Criminal Action
                        </td>
                        <td className="p-3.5 text-slate-600">
                          Negotiable Instruments Act Section 138 / 143A
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Dishonored security cheques, booking advance PDCs, ledger balance cheques
                        </td>
                        <td className="p-3.5 font-semibold text-slate-700">8–18 Months</td>
                        <td className="p-3.5 text-slate-700">
                          20% interim deposit order under Section 143A; arrest warrant on non-appearance
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 text-xs text-slate-600 leading-relaxed">
                  For comprehensive insights into MSME delayed payment statutes, explore our dedicated analysis on{" "}
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="text-red-600 underline hover:text-red-700 font-semibold"
                  >
                    Section 43B(h) Income Tax Payment Rules
                  </Link>{" "}
                  and the{" "}
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="text-red-600 underline hover:text-red-700 font-semibold"
                  >
                    MSME Samadhaan &amp; Online Dispute Resolution Guide
                  </Link>
                  .
                </div>
              </section>

              {/* Section 4: Visual Flowchart / Decision Tree */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Recovery Workflow Protocol</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Spinning Mill Operational Escalation Decision Tree
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Follow this standardized 4-phase recovery workflow when a buyer refuses to lift booked yarn lots or repudiates forward rate contracts.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <svg
                    width={880}
                    height={340}
                    viewBox="0 0 880 340"
                    className="w-full h-auto text-white font-sans"
                    aria-label="Spinning Mill Recovery Decision Tree"
                  >
                    <defs>
                      <marker
                        id="arrow"
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Step 1 */}
                    <g transform="translate(10, 20)">
                      <rect width="190" height="110" rx="10" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                      <text x="15" y="30" fill="#EF4444" fontSize="11" fontWeight="bold" letterSpacing="1">STAGE 1: AUDIT &amp; NOTICE</text>
                      <text x="15" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold">Tender Readiness</text>
                      <text x="15" y="75" fill="#9CA3AF" fontSize="10">Lock Sauda Chitthi / WhatsApp</text>
                      <text x="15" y="92" fill="#9CA3AF" fontSize="10">Demand lifting in 48 hours</text>
                    </g>

                    <line x1="200" y1="75" x2="230" y2="75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <g transform="translate(230, 20)">
                      <rect width="190" height="110" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
                      <text x="15" y="30" fill="#F59E0B" fontSize="11" fontWeight="bold" letterSpacing="1">STAGE 2: SOGA §54 RESALE</text>
                      <text x="15" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold">Statutory Resale Notice</text>
                      <text x="15" y="75" fill="#9CA3AF" fontSize="10">Certify CAI/SIMA spot floor</text>
                      <text x="15" y="92" fill="#9CA3AF" fontSize="10">Execute open-market resale</text>
                    </g>

                    <line x1="420" y1="75" x2="450" y2="75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 3 */}
                    <g transform="translate(450, 20)">
                      <rect width="190" height="110" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
                      <text x="15" y="30" fill="#10B981" fontSize="11" fontWeight="bold" letterSpacing="1">STAGE 3: FORUM ROUTING</text>
                      <text x="15" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold">Arbitration vs Courts</text>
                      <text x="15" y="75" fill="#9CA3AF" fontSize="10">SIMA Clause? File Arbitration</text>
                      <text x="15" y="92" fill="#9CA3AF" fontSize="10">No Clause? Order 37 or MSME</text>
                    </g>

                    <line x1="640" y1="75" x2="670" y2="75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 4 */}
                    <g transform="translate(670, 20)">
                      <rect width="190" height="110" rx="10" fill="#1F2937" stroke="#10B981" strokeWidth="2" />
                      <text x="15" y="30" fill="#10B981" fontSize="11" fontWeight="bold" letterSpacing="1">STAGE 4: ENFORCEMENT</text>
                      <text x="15" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold">Liquidate Dues &amp; Freeze</text>
                      <text x="15" y="75" fill="#9CA3AF" fontSize="10">Recover Price Difference</text>
                      <text x="15" y="92" fill="#9CA3AF" fontSize="10">Order 38 asset attachment</text>
                    </g>

                    {/* Lower Fork for Criminal & Tax Disallowance */}
                    <path d="M 105 130 L 105 210 L 230 210" fill="none" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    <g transform="translate(230, 160)">
                      <rect width="410" height="110" rx="10" fill="#111827" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 4" />
                      <text x="20" y="30" fill="#EF4444" fontSize="11" fontWeight="bold" letterSpacing="1">PARALLEL INSTITUTIONAL LEVERAGE</text>
                      <text x="20" y="55" fill="#FFFFFF" fontSize="12" fontWeight="bold">Section 43B(h) Tax Warning + Section 138 Cheque Action</text>
                      <text x="20" y="75" fill="#9CA3AF" fontSize="10">Disallow buyer expense audit deduction + File criminal cheque dishonor</text>
                      <text x="20" y="92" fill="#9CA3AF" fontSize="10">Blacklist dealer through SIMA / NITMA / CAI regional committees</text>
                    </g>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 rounded-xl border border-red-200 bg-red-50 space-y-1.5">
                    <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider">
                      Stage 1: Readiness Notice (Day 1–3)
                    </span>
                    <p className="text-xs text-slate-800 font-semibold">
                      Serve formal advocate demand tendering readiness of spun yarn lots and demanding balance lifting within 48 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                      Stage 2: Statutory Resale Notice under SOGA §54 (Day 4–7)
                    </span>
                    <p className="text-xs text-slate-800">
                      Put the defaulting trader on statutory notice of open-market resale. Obtain authenticated market price bulletins from CAI/SIMA to fix the floor.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Stage 3: Forum Choice &amp; Filing (Day 8–15)
                    </span>
                    <p className="text-xs text-slate-800">
                      If contract incorporates trade arbitration, file before SIMA/CAI bench. Otherwise, invoke Commercial Court Order XXXVII summary suit or MSME Samadhaan.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 space-y-1.5">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                      Stage 4: Enforcement &amp; Recovery
                    </span>
                    <p className="text-xs text-slate-800">
                      Obtain decree for rate differential, storage costs, and interest. Enforce personal asset attachments against proprietorships and corporate debtors.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Scenario Tabs */}
              <section
                id="heading-scenarios"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Interactive Case Studies</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Commercial Failure Modes &amp; Tailored Mill Strategies
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Select a failure mode below to review the specific legal doctrine and recommended recovery roadmap for your spinning enterprise.
                </p>

                <YarnMillScenarioTabs />
              </section>

              {/* Section 6: Worked Calculation & Rate Difference Ledger */}
              <section
                id="heading-worked-calculation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Financial Damages Ledger</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Worked Calculation: Damages for 50 Metric Tons of Unlifted 30s Combed Yarn
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    Consider an authentic textile dispute scenario: A spinning mill in Coimbatore confirms a forward booking with a hosiery agency in Tirupur for <strong>50,000 kg (50 Metric Tons) of 30s Combed Hosiery Yarn</strong>.
                  </p>

                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 space-y-5 not-prose">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-3 gap-2">
                      <div>
                        <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block">
                          Contract Audit Parameters
                        </span>
                        <h4 className="text-base font-bold text-white">
                          Forward Booking vs Spot Breach Rate Differential
                        </h4>
                      </div>
                      <span className="text-xs bg-slate-800 px-3 py-1 rounded-lg text-slate-300 font-mono">
                        50,000 kg • 30s Combed Cotton
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                        <span className="text-slate-400 block text-[11px]">Forward Contract Rate</span>
                        <span className="text-base font-bold text-slate-100">₹290.00 / kg</span>
                        <span className="text-[10px] text-slate-400 block">Total: ₹1,45,00,000</span>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                        <span className="text-slate-400 block text-[11px]">Breach Date Spot Rate</span>
                        <span className="text-base font-bold text-red-400">₹255.00 / kg</span>
                        <span className="text-[10px] text-slate-400 block">Drop: -12.07% (₹35/kg)</span>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                        <span className="text-slate-400 block text-[11px]">Earnest Token Received</span>
                        <span className="text-base font-bold text-amber-400">₹7,25,000</span>
                        <span className="text-[10px] text-slate-400 block">5% Advance Token</span>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                        <span className="text-slate-400 block text-[11px]">Holding Period Delay</span>
                        <span className="text-base font-bold text-slate-100">45 Days</span>
                        <span className="text-[10px] text-slate-400 block">Demurrage + Bank Fin.</span>
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-slate-800 pt-4 text-xs sm:text-sm">
                      <div className="flex justify-between py-1 border-b border-slate-800/60">
                        <span className="text-slate-300">
                          Gross Rate Difference (50,000 kg × ₹35.00/kg)
                        </span>
                        <span className="font-mono font-bold text-slate-100">₹17,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/60">
                        <span className="text-slate-300">
                          Godown Demurrage &amp; Insurance (₹0.20/kg/day × 45 days)
                        </span>
                        <span className="font-mono font-bold text-slate-100">₹4,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/60">
                        <span className="text-slate-300">
                          Working Capital Financing Carry (12% p.a. on ₹1.45 Cr for 45 days)
                        </span>
                        <span className="font-mono font-bold text-slate-100">₹2,14,520</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/60 text-amber-400">
                        <span>Less: Forfeited Advance Token Credited Against Damages</span>
                        <span className="font-mono font-bold">-₹7,25,000</span>
                      </div>
                      <div className="flex justify-between py-2 text-sm sm:text-base font-bold bg-slate-800/90 px-3 rounded-xl">
                        <span className="text-emerald-400">Net Liquidated Claim under SOGA §56</span>
                        <span className="font-mono text-emerald-400">₹16,89,520</span>
                      </div>
                      <div className="flex justify-between py-1 text-xs text-slate-400">
                        <span>Plus: Compound Statutory Interest (MSMED §16 @ ~20.5% p.a. compounded monthly)</span>
                        <span className="font-mono text-slate-300">Accruing Daily</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    By preparing this documented ledger breakdown upfront, spinning mills enter pre-institution mediation or arbitration hearings with insurmountable financial proof. When faced with an indisputable statutory calculation, defaulting traders frequently settle within 14 days rather than risk personal asset attachment.
                  </p>
                </div>
              </section>

              {/* Section 7: SIMA / CAI Arbitration vs Commercial Court */}
              <section
                id="heading-cai-sima-arbitration"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Institutional Arbitration Framework</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  SIMA &amp; CAI Trade Arbitration: Why Technical Textile Benches Outpace Civil Courts
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    In the Indian textile industry, two apex trade bodies provide institutionalized arbitration mechanisms:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>The Southern India Mills&apos; Association (SIMA):</strong> Based in Coimbatore, SIMA administers specialized yarn and cotton arbitration panels. SIMA tribunals comprise seasoned mill owners, spinning technologists, and trade legal counsels who immediately understand count-strength variations, moisture regain percentages, and market spot fluctuations.
                    </li>
                    <li>
                      <strong>Cotton Association of India (CAI):</strong> Headquartered in Mumbai with regional committees across Gujarat, Maharashtra, and Punjab, CAI governs raw cotton bale trade contracts and forward delivery disputes.
                    </li>
                  </ul>

                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2 not-prose">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                      Key Practical Advantage: Mandi Blacklisting &amp; Peer Pressure
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-amber-800">
                      Beyond the legal enforceability of an arbitral award under Section 36 of the Arbitration and Conciliation Act, 1996, a reference to SIMA or CAI triggers catastrophic commercial consequences for the defaulting trader. Regional yarn merchant associations (such as the Surat Yarn Dealers Association or Tirupur Yarn Merchants Association) routinely circularize notices of default, effectively terminating the buyer&apos;s ability to procure yarn on credit anywhere in India.
                    </p>
                  </div>

                  <p>
                    To enforce these institutional clauses, spinning mills must ensure that their standard order confirmation slips, invoice footers, and broker transaction notes contain a clear arbitration covenant:
                  </p>
                  <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 not-prose leading-relaxed">
                    &quot;Any dispute, difference, or claim arising out of or relating to this yarn contract, including unlifted lots or price difference claims, shall be finally settled by arbitration in accordance with the Arbitration Rules of The Southern India Mills&apos; Association (SIMA), Coimbatore, and the award made in pursuance thereof shall be binding on both parties.&quot;
                  </div>
                </div>
              </section>

              {/* Section 8: BSA 2023 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Evidentiary Audit Standard</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Evidentiary Checklist: BSA 2023 §63 Standards for Yarn Contract Claims
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced Section 65B of the Indian Evidence Act, 1872, all digital communications must be certified to prevent defense objections during commercial trials.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose text-xs sm:text-sm">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]">
                        1
                      </span>
                      Forward Contract Documentation
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                      <li>Broker Sauda Chitthi / Yarn Indent Note with rate &amp; count</li>
                      <li>Mill Order Confirmation Letter with dispatch deadlines</li>
                      <li>Token advance payment receipt and bank credit statement</li>
                      <li>Signed credit terms agreement or standard sales conditions</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]">
                        2
                      </span>
                      Readiness &amp; Quality Certification
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                      <li>Mill Quality Assurance Lab USTER Test Certificates (CSP, IPI)</li>
                      <li>Godown lot stacking records and warehouse weighment slips</li>
                      <li>Written tender of readiness to deliver served on buyer</li>
                      <li>Formal statutory notice of resale under SOGA §54</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]">
                        3
                      </span>
                      Market Floor Benchmark Proof
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                      <li>Certified daily spot price circular from SIMA or CAI</li>
                      <li>Open-market resale invoices to third-party weavers</li>
                      <li>Quotations from 3 registered mandi brokers on breach date</li>
                      <li>National Cotton Index / MCX Spot rates on date of repudiation</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]">
                        4
                      </span>
                      BSA §63 Electronic Certification
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                      <li>WhatsApp export of booking chats and dispatch refusals</li>
                      <li>System-generated hash and timestamp of email threads</li>
                      <li>Affidavit from Mill IT Head or General Manager Commercial</li>
                      <li>GST Portal reconciliation (E-Way bills and GSTR-1/3B logs)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 9: FAQ Accordions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                  <span>Legal &amp; Operational Clarifications</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions by Spinning Mill CFOs &amp; Yarn Wholesalers
                </h2>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 open:border-red-600 open:shadow-sm"
                    >
                      <summary className="flex items-center justify-between p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 bg-slate-50/50 group-open:bg-white cursor-pointer select-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                          &darr;
                        </span>
                      </summary>
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 group-open:pt-4">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Dual B2B CTA Banner */}
              <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-red-400 block">
                    Institutional Debt Resolution
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Protect Your Spinning Mill Working Capital from Unlifted Forward Contracts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Stop absorbing inventory market losses caused by defaulting powerloom weavers and opportunistic yarn agencies. Enforce Sale of Goods Act difference damages, commercial court attachments, and SIMA trade arbitration immediately.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                      Single High-Value Breach
                    </span>
                    <p className="text-xs text-slate-300">
                      Issue a fact-verified 48-hour statutory demand notice for rate differences, unlifted lots, or bounced PDCs.
                    </p>
                    <YarnMillNoticeCTA buttonText="Issue Mill Legal Notice (₹999)" />
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                      Enterprise Mill Portfolio (10–10,000+ Accounts)
                    </span>
                    <p className="text-xs text-slate-300">
                      Upload your aging debtor ledger CSV. Automate pan-India statutory notices, Section 43B(h) disallowances, and court filings.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all"
                      >
                        Institutional Bulk Engine &rarr;
                      </Link>
                      <Link
                        href="/user/representees"
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all"
                      >
                        Corporate Sign-In
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sibling Sector Links */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Related Textile Sector Playbooks
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <Link
                    href="/textile-commission-agent-broker-adatiya-buyer-default-liability"
                    className="p-3 rounded-xl border border-slate-200 hover:border-red-600 hover:bg-red-50/30 transition-all font-semibold text-slate-800 flex flex-col justify-between"
                  >
                    <span>Textile Broker &amp; Adatiya Default Liability</span>
                    <span className="text-[10px] text-red-600 font-bold mt-1">Read Playbook &rarr;</span>
                  </Link>
                  <Link
                    href="/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery"
                    className="p-3 rounded-xl border border-slate-200 hover:border-red-600 hover:bg-red-50/30 transition-all font-semibold text-slate-800 flex flex-col justify-between"
                  >
                    <span>Retail Fashion SOR &amp; Garment Rejections</span>
                    <span className="text-[10px] text-red-600 font-bold mt-1">Read Playbook &rarr;</span>
                  </Link>
                  <Link
                    href="/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery"
                    className="p-3 rounded-xl border border-slate-200 hover:border-red-600 hover:bg-red-50/30 transition-all font-semibold text-slate-800 flex flex-col justify-between"
                  >
                    <span>Dyeing, Processing &amp; Job-Work Fabric Lien</span>
                    <span className="text-[10px] text-red-600 font-bold mt-1">Read Playbook &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <div className="w-full bg-[#F8F9FB] border-t border-slate-200">
          <RelatedRecoveryGuides />
        </div>
      </div>
    </>
  );
}
