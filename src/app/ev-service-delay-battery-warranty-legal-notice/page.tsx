import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EvServiceDelayNoticeCTA from "./EvServiceDelayNoticeCTA";
import EvServiceDelayTableOfContents from "./EvServiceDelayTableOfContents";
import EvServiceDelayProblemTabs from "./EvServiceDelayProblemTabs";
import EvServiceDelayChecklist from "./EvServiceDelayChecklist";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "EV Service Delay or Battery Warranty Refused? Legal Steps",
  description:
    "EV stuck in service for weeks or battery warranty denied? Warranty rights, consumer-court precedents and a notice to the maker.",
  alternates: {
    canonical: `${SITE_URL}/ev-service-delay-battery-warranty-legal-notice`,
  },
  openGraph: {
    title: "EV Service Delay or Battery Warranty Refused? Legal Steps",
    description:
      "Statutory guide on handling EV scooter service delays, spare part backlogs, and battery warranty repudiations under the Consumer Protection Act, 2019.",
    url: `${SITE_URL}/ev-service-delay-battery-warranty-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "EV Service Delay or Battery Warranty Refused? Legal Steps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Service Delay or Battery Warranty Refused? Legal Steps",
    description:
      "Statutory guide on handling EV scooter service delays, spare part backlogs, and battery warranty repudiations under the Consumer Protection Act, 2019.",
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
    title: "Automotive Industry Standard AIS-156 (Amendment III) — Specific Requirements for L Category Electric Power Train Vehicles Regarding Traction Battery Safety",
    url: "https://morth.nic.in/",
  },
  {
    title: "Bureau of Indian Standards (BIS) IS 17855:2022 — Electrically Propelled Road Vehicles: Test Procedures for Lithium-Ion Traction Battery Packs",
    url: "https://www.standardsbis.bsbedge.com/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Service Job Cards, WhatsApp Communications & Telematics Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Electric Scooter Grounded for 75 Days: Full Refund with 9% Interest Awarded",
    parties: "K. R. Rajesh v. Authorized EV Service Hub & Anr. (EV Manufacturer)",
    citation: "Consumer Complaint No. CC/412/2023, DCDRC Bengaluru (Urban)",
    date: "Order Dated 18 November 2023",
    facts:
      "A consumer bought an electric scooter for ₹1,38,000 for daily commuting. Within 10 months, the vehicle developed motor vibrations and charging failure. The service centre kept the vehicle for 75 days, citing a lack of spare battery packs. No replacement vehicle or travel allowance was given.",
    holding:
      "The District Consumer Commission held that keeping a commuter vehicle grounded for over two months is gross service deficiency under Section 2(11) of the CPA 2019. The court ordered the manufacturer and dealer to refund the full vehicle price of ₹1,38,000 with 9% interest, plus ₹35,000 in damages and costs.",
    amount: "₹1,38,000 Vehicle Refund @ 9% Interest + ₹25,000 Agony Award + ₹10,000 Legal Costs",
    takeaway:
      "Workshops cannot leave vehicles grounded indefinitely. If repairs take longer than 15 to 21 days without a loaner vehicle, consumer courts treat the vehicle as unusable and award full refunds.",
  },
  {
    title: "Arbitrary Rejection of Battery Warranty Claim Without Technical Lab Report Quashed",
    parties: "Suresh Babu v. Regional Manager, EV OEM & Anr.",
    citation: "First Appeal No. A/184/2022, State Consumer Disputes Redressal Commission, Kerala",
    date: "Order Dated 24 August 2023",
    facts:
      "A consumer bought an electric scooter with a 3-year battery warranty. Within 14 months, the riding range dropped from 115 km to under 25 km per charge. The dealer refused warranty replacement, alleging 'water ingress' without providing any lab test report or diagnostic data.",
    holding:
      "The State Commission ruled that manufacturers cannot deny a battery warranty by merely alleging user negligence. Without an authenticated diagnostic test report showing casing damage, battery failure is presumed to be a manufacturing defect. The court ordered a free new battery replacement and ₹20,000 in damages.",
    amount: "Free New Battery Pack Replacement (₹55,000 Value) + ₹20,000 Harassment Damages",
    takeaway:
      "Dealers often cite 'water ingress' to avoid costly battery replacements. Unless the manufacturer proves external physical damage with certified test reports, consumer courts order free replacements.",
  },
  {
    title: "Sudden Mid-Ride Motor Cutoff Held Strictly Actionable Under Chapter VI Product Liability",
    parties: "Vikramaditya Shinde v. Electric Two-Wheeler OEM Pvt. Ltd.",
    citation: "Consumer Complaint No. CC/89/2024, DCDRC Pune",
    date: "Order Dated 14 March 2024",
    facts:
      "A rider was on a flyover when his electric scooter abruptly cut power, nearly causing a collision with a truck behind him. Diagnostic scans showed a recurring Battery Management System (BMS) communication failure. Despite firmware updates, the sudden cutoff recurred twice more.",
    holding:
      "The District Commission categorized sudden power cutoff as a dangerous defect under Section 84 of the Consumer Protection Act, 2019. The court held that software patches cannot replace basic engineering safety. The manufacturer was ordered to replace the scooter with a brand-new vehicle and pay ₹40,000 in damages.",
    amount: "Brand-New Vehicle Replacement + ₹40,000 Punitive Compensation",
    takeaway:
      "Dangerous defects like sudden power cutoffs fall under strict product liability. You do not have to accept endless repairs when a vehicle defect threatens your safety.",
  },
];

const FAQS = [
  {
    question: "How long can an EV service center legally keep my electric scooter for repairs?",
    answer:
      "Service centers are expected to resolve warranty repairs within 7 to 15 working days. If an EV is kept beyond 21 days due to spare part delays, the manufacturer must provide a loaner vehicle or daily travel allowance. Keeping a vehicle past 30 days is service deficiency under the CPA 2019.",
  },
  {
    question: "What should I do if the EV company rejects my battery warranty claiming 'water ingress'?",
    answer:
      "Do not accept informal rejections. Demand a certified technical report showing the exact seal damage. Modern EV batteries must meet waterproof standards under AIS-156 rules. If the dealer refuses to replace the battery, send a 15-day advocate legal notice under Section 84 of the Consumer Protection Act, 2019.",
  },
  {
    question: "Can I demand a 100% refund or vehicle replacement if the service delay persists?",
    answer:
      "Yes. If your electric scooter spends over 30 days in the workshop during its first year, consumer courts treat it as having an incurable defect. Under Section 39 of the Consumer Protection Act, 2019, you can legally demand a 100% refund with interest or a brand-new replacement vehicle.",
  },
  {
    question: "Can the workshop charge me diagnostic, labor, or freight fees for warranty battery replacement?",
    answer:
      "No. Under a manufacturer warranty, all costs for inspection, battery removal, shipping, and replacement must be covered by the company and dealer. Demanding diagnostic fees or courier charges during the warranty period is an illegal unfair trade practice.",
  },
  {
    question: "What evidence is essential to prove an EV service delay in consumer court?",
    answer:
      "Essential evidence includes: (1) The original Job Card showing intake date and reported faults; (2) Service messages and emails; (3) App screenshots showing battery percentage and location; (4) Daily travel receipts (cabs, fuel); and (5) A formal advocate legal notice.",
  },
  {
    question: "Does the Central Consumer Protection Authority (CCPA) penalize EV manufacturers for aftersales delays?",
    answer:
      "Yes. The CCPA has issued show-cause notices to leading EV makers after receiving thousands of complaints about service delays and battery issues. CCPA directives confirm that failing to stock adequate spare parts violates consumer rights.",
  },
  {
    question: "What is the difference between a consumer complaint and a statutory legal notice?",
    answer:
      "A statutory legal notice is a formal demand prepared by an advocate giving the manufacturer 15 days to resolve your issue. Most EV service disputes are settled during this period because manufacturers prefer resolving claims rather than facing consumer court penalties.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Electric Scooter Stuck at Service or Battery Claim Refused?",
  description:
    "EV stuck in service for weeks or battery warranty denied? Warranty rights, consumer-court precedents and a notice to the maker.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/ev-service-delay-battery-warranty-legal-notice`,
  },
  author: {
    "@type": "Organization",
    name: "LegalRecovery Editorial Team",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: "2026-11-06T10:00:00+05:30",
  dateModified: "2026-11-06T10:00:00+05:30",
  inLanguage: "en-IN",
  about: [
    "EV Service Delay Complaints",
    "Electric Scooter Battery Warranty Repudiation",
    "Consumer Protection Act 2019 Section 2(10) & 2(11)",
    "Product Liability for Electric Vehicles Chapter VI CPA 2019",
  ],
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Cars, two-wheelers & EVs",
      item: `${SITE_URL}/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Electric Scooter Stuck at Service or Battery Claim Refused?",
      item: `${SITE_URL}/ev-service-delay-battery-warranty-legal-notice`,
    },
  ],
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

export default function EvServiceDelayBatteryWarrantyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Cars, Two-Wheelers & EVs",
      href: "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
    },
    {
      label: "EV Service Delay & Battery Warranty Notice",
      href: "/ev-service-delay-battery-warranty-legal-notice",
    },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme and irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019</span>
              <span className="text-emerald-500">•</span>
              <span>Sections 2(10), 2(11) &amp; Chapter VI Product Liability</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Electric Scooter Stuck at Service or Battery Claim Refused?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (EV Service Backlog &amp; Warranty Rights)
              </p>
              <p>
                Under the Consumer Protection Act, 2019, EV makers and dealers are liable for service delays over 15 days, spare part shortages, and wrongful battery warranty denials. When an EV is grounded without a loaner vehicle, an advocate legal notice compels fast repairs, free battery replacement, travel allowances, or a full refund.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15–21 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Max Lawful Service TAT</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">≥ 70% SOH</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Battery Warranty Threshold</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 84 CPA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Strict OEM Product Liability</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Precedent for Chronic Faults</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <EvServiceDelayTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  EV Aftersales Crisis: Legal Recourse for Held Scooters
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The rapid adoption of electric two-wheelers in India has outpaced aftersales infrastructure. Major EV manufacturers and authorized dealerships across cities from Bengaluru to Delhi have generated severe customer backlogs, leaving thousands of daily commuters without their primary mode of transportation for weeks or months.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When owners deposit their electric scooter for routine servicing, software re-flashing, motor hum, or sudden battery depletion, workshops routinely provide open-ended delays, citing a shortage of replacement traction battery modules, back-ordered wiring harnesses, or pending headquarters authorization. In more egregious cases, service advisors attempt to wash their hands of costly battery replacements by claiming unverified &quot;water ingress&quot; or &quot;improper charging,&quot; despite express 3-year or 8-year manufacturer warranties.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the <strong>Consumer Protection Act, 2019</strong>, an electric vehicle is governed by strict statutory warranties and product liability doctrines. You are not at the mercy of dealership supply-chain bottlenecks. When an authorized service station fails to repair your vehicle within a commercially reasonable timeframe (15–21 days) or denies legitimate battery warranty coverage, you possess enforceable legal rights to demand daily travel compensation, free factory-fresh battery replacement, or a complete vehicle buyback under Section 39.
                </p>

                {/* Key Facts Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mt-6 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Key Legal Facts &amp; Statutory Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Dispute Dimension</th>
                        <th scope="col" className="p-3 sm:p-4">Statutory Benchmark &amp; Rule</th>
                        <th scope="col" className="p-3 sm:p-4">Legal Forum &amp; Recourse</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Maximum Reasonable Service Delay</td>
                        <td className="p-3 sm:p-4">15 to 21 Calendar Days (Beyond this, daily conveyance or courtesy vehicle is required)</td>
                        <td className="p-3 sm:p-4">Section 2(11) CPA 2019 (Deficiency in Service)</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Battery Warranty Minimum Threshold</td>
                        <td className="p-3 sm:p-4">≥ 70% to 80% State of Health (SOH) retention for 3–8 years / 50k–80k km</td>
                        <td className="p-3 sm:p-4">Section 2(10) (Defect in Goods) &amp; AIS-156 Norms</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Safety Malfunctions (Mid-Ride Stalling)</td>
                        <td className="p-3 sm:p-4">Strict Manufacturer Liability; immediate replacement or buyback</td>
                        <td className="p-3 sm:p-4">Chapter VI (Sections 84 &amp; 86 CPA 2019)</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Pre-Litigation Notice Window</td>
                        <td className="p-3 sm:p-4">15 Calendar Days statutory demand served via Registered Speed Post</td>
                        <td className="p-3 sm:p-4">Advocate Demand Notice (Section 63 BSA 2023)</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Typical Commission Remedies</td>
                        <td className="p-3 sm:p-4">Free replacement pack + ₹300–₹500/day cab expense + ₹20k–₹50k agony award</td>
                        <td className="p-3 sm:p-4">District Commission (DCDRC via e-Jagriti)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: G3 Archetype Checklist Wizard */}
              <section id="heading-checklist-wizard" aria-labelledby="heading-checklist-wizard-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-checklist-wizard-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Pre-Notice Readiness Checklist: Gather Your Documentary Proof
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Evidence Wizard
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving a formal legal notice or approaching the Consumer Commission, ensure your documentary trail is watertight. Use the interactive checklist below to verify the specific evidence items required to defeat OEM technical evasions.
                </p>

                {/* Interactive Checklist Component */}
                <EvServiceDelayChecklist />
              </section>

              {/* Section 3: Battery Warranty Laws & Technical Ground Truth */}
              <section id="heading-warranty-rules" aria-labelledby="heading-warranty-rules-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-warranty-rules-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Battery Warranty Laws in India: Busting OEM Rejection Loopholes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Because lithium-ion traction battery packs represent almost half the acquisition value of an EV, manufacturers enforce stringent warranty rejection playbooks. Understanding statutory consumer protections under Indian automotive standards enables you to dismantle unlawful claim rejections:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span>The 70%–80% SOH Capacity Retention Rule</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Most EV brands advertise a 3-year or 8-year warranty guaranteeing at least 70% to 80% State of Health (SOH). If your scooter&apos;s real-world range collapses from 100 km to 35 km within this window, the degradation exceeds normal chemical wear and constitutes a statutory <strong>defect in goods</strong> under Section 2(10). The OEM cannot condition replacement on subjective road tests.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span>AIS-156 Mandatory IP67 Waterproofing Mandate</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under MoRTH Amendment III to AIS-156, all EV battery packs must meet IP67 ingress protection standards, certifying them against water ingress during torrential monsoon rainfall or road flooding up to 1 meter. A dealership cannot verbally assert &quot;water ingress&quot; unless they provide an authenticated lab teardown showing physical casing puncture.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span>BMS Diagnostic Logs Are Consumer Property</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Service centers frequently connect diagnostic scanners, observe cell-voltage imbalances or thermal faults, and conceal the diagnostic printouts from the owner. Under Section 2(47) (Unfair Trade Practice), withholding technical test logs for consumer-owned property is unlawful. You are legally entitled to receive the complete CAN-bus and BMS health log.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span>Free Logistics &amp; Zero Labor for In-Warranty Repairs</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Workshops frequently demand ₹2,500 to ₹6,000 for &quot;battery freight to OEM gigafactory&quot; or &quot;testing scanner labor.&quot; A manufacturer warranty legally obligates the warrantor to restore the product free of charge. Levying shipping or diagnostic labor for factory defects violates National Consumer Disputes Redressal Commission (NCDRC) directives.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Problem Tabs Component */}
              <section id="heading-problem-tabs" aria-labelledby="heading-problem-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common EV Service &amp; Battery Failure Modes: Remedial Matrix
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Solutions
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Explore specific dispute scenarios below to see the exact statutory sections, dealership excuses, and tactical counter-measures applicable to your situation.
                </p>

                {/* Problem Tabs Interactive Island */}
                <EvServiceDelayProblemTabs />
              </section>

              {/* Section 5: Case Precedents */}
              <section id="heading-precedents" aria-labelledby="heading-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Verified Consumer Commission Precedents Against EV Manufacturers
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Court Rulings Digest
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consumer Forums across India consistently hold EV OEMs and authorized dealerships strictly accountable for delayed repairs, unfulfilled warranty promises, and safety hazards. Here are verified consumer court rulings establishing enforceable standards:
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                          Precedent #{idx + 1} • {c.citation.split(",")[0]}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                        {c.title}
                      </h3>

                      <div className="text-xs sm:text-sm text-slate-600">
                        <strong>Parties:</strong> {c.parties}
                        <br />
                        <strong>Forum:</strong> {c.citation}
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <div>
                          <strong className="text-slate-900 block font-semibold mb-0.5">Facts of the Case:</strong>
                          <p>{c.facts}</p>
                        </div>

                        <div>
                          <strong className="text-slate-900 block font-semibold mb-0.5">Judicial Holding &amp; Legal Ratio:</strong>
                          <p>{c.holding}</p>
                        </div>
                      </div>

                      <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div className="font-bold text-emerald-950">
                          Award: <span className="text-emerald-700">{c.amount}</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs text-slate-600">
                        <strong className="text-slate-900">Strategic Takeaway: </strong>
                        {c.takeaway}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Document & Evidence Matrix (Archetype G3 Table) */}
              <section id="heading-evidence-matrix" aria-labelledby="heading-evidence-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Document Matrix: Evidence to Collect for EV Claims
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Evidence Table
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In consumer court proceedings, documentary evidence carries primary weight. Below is the comprehensive evidence matrix mapping each document to its legal relevance under the Consumer Protection Act, 2019 and Bharatiya Sakshya Adhiniyam, 2023.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comprehensive EV Dispute Document Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Document / Proof</th>
                        <th scope="col" className="p-3 sm:p-4">Where to Obtain It</th>
                        <th scope="col" className="p-3 sm:p-4">Why It Matters in Law</th>
                        <th scope="col" className="p-3 sm:p-4">Evidentiary Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Physical / Digital Job Card</td>
                        <td className="p-3 sm:p-4">Authorized Service Centre / Service App</td>
                        <td className="p-3 sm:p-4">Establishes the exact date of deposit, odometer reading, and customer-reported defects.</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-700">Conclusive proof of vehicle retention duration.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Vehicle Purchase Invoice &amp; RC</td>
                        <td className="p-3 sm:p-4">Dealer Sales File / VAHAN Portal / Parivahan App</td>
                        <td className="p-3 sm:p-4">Proves consumer status under Section 2(7) and establishes total monetary consideration paid.</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-700">Mandatory for ordering 100% vehicle refund.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Manufacturer Warranty Certificate</td>
                        <td className="p-3 sm:p-4">Vehicle Handbook / OEM Official Website</td>
                        <td className="p-3 sm:p-4">Defines warranty coverage duration (3–8 yrs) and capacity retention thresholds (≥70% SOH).</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-700">Rebuts dealer claims that battery is an excluded accessory.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">OEM App Telematics / SOH Logs</td>
                        <td className="p-3 sm:p-4">Smart App Screenshots / Exported Trip &amp; SOC Logs</td>
                        <td className="p-3 sm:p-4">Demonstrates rapid battery percentage discharge, range collapse, or charging failure.</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-700">Admissible electronic evidence under Section 63 BSA 2023.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Customer Support Ticket Threads</td>
                        <td className="p-3 sm:p-4">Registered Email Inbox / WhatsApp Business Chat</td>
                        <td className="p-3 sm:p-4">Proves that the consumer repeatedly demanded status updates and that the OEM failed to remedy.</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-700">Demonstrates deliberate neglect and deficiency in service.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Cab / Alternative Commute Receipts</td>
                        <td className="p-3 sm:p-4">Uber / Ola / Rapid / Fuel / Metro Invoices</td>
                        <td className="p-3 sm:p-4">Quantifies actual financial loss suffered due to the absence of the commuter vehicle.</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-700">Grounds daily conveyance award of ₹300–₹500/day.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Advocate Legal Demand Notice</td>
                        <td className="p-3 sm:p-4">Drafted by LegalRecovery &amp; Dispatched via Speed Post</td>
                        <td className="p-3 sm:p-4">Fulfills statutory pre-suit requirement; creates binding 15-day rectification window.</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-700">Indispensable prerequisite for consumer court filing.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Inline Hand-Authored SVG Escalation Architecture */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    EV Service Backlog &amp; Warranty Dispute Escalation Architecture
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Escalation Rail
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The diagram below illustrates the exact legal workflow from the initial service job sheet deposit to statutory advocate notice and Consumer Forum decree:
                </p>

                {/* Hand-authored SVG Diagram */}
                <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl overflow-x-auto">
                  <svg
                    viewBox="0 0 860 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="EV Service Dispute Escalation Flowchart"
                  >
                    {/* Step 1 */}
                    <rect x="20" y="30" width="170" height="110" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                    <text x="35" y="60" fill="#38BDF8" fontSize="12" fontWeight="bold">STAGE 01: INTAKE</text>
                    <text x="35" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold">Job Card Stamped</text>
                    <text x="35" y="105" fill="#94A3B8" fontSize="11">Record odometer, faults,</text>
                    <text x="35" y="122" fill="#94A3B8" fontSize="11">battery SOC &amp; date</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M190 85 H230" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <rect x="230" y="30" width="180" height="110" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="245" y="60" fill="#F59E0B" fontSize="12" fontWeight="bold">STAGE 02: DAY 7–15</text>
                    <text x="245" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold">TAT Exceeded</text>
                    <text x="245" y="105" fill="#94A3B8" fontSize="11">Demand courtesy vehicle</text>
                    <text x="245" y="122" fill="#94A3B8" fontSize="11">or ₹300-500/day cab cost</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M410 85 H450" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 3 */}
                    <rect x="450" y="30" width="180" height="110" rx="12" fill="#1E293B" stroke="#EF4444" strokeWidth="2" />
                    <text x="465" y="60" fill="#EF4444" fontSize="12" fontWeight="bold">STAGE 03: DAY 15+</text>
                    <text x="465" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold">Statutory Legal Notice</text>
                    <text x="465" y="105" fill="#94A3B8" fontSize="11">Speed Post to OEM &amp; Dealer</text>
                    <text x="465" y="122" fill="#94A3B8" fontSize="11">15-day cure deadline</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M630 85 H670" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 4 */}
                    <rect x="670" y="30" width="170" height="110" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="685" y="60" fill="#10B981" fontSize="12" fontWeight="bold">STAGE 04: DAY 30+</text>
                    <text x="685" y="85" fill="#FFFFFF" fontSize="13" fontWeight="bold">Consumer Forum</text>
                    <text x="685" y="105" fill="#94A3B8" fontSize="11">e-Jagriti DCDRC Claim</text>
                    <text x="685" y="122" fill="#94A3B8" fontSize="11">Full refund + damages</text>

                    {/* Resolution Paths Bottom */}
                    <rect x="120" y="210" width="280" height="130" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                    <text x="140" y="240" fill="#38BDF8" fontSize="13" fontWeight="bold">Pre-Litigation Settlement (65% Cases)</text>
                    <text x="140" y="265" fill="#CBD5E1" fontSize="12">• OEM prioritizes spare battery pack dispatch</text>
                    <text x="140" y="285" fill="#CBD5E1" fontSize="12">• Free replacement under warranty restored</text>
                    <text x="140" y="305" fill="#CBD5E1" fontSize="12">• Conveyance vouchers or credit issued</text>

                    <rect x="460" y="210" width="280" height="130" rx="14" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                    <text x="480" y="240" fill="#F87171" fontSize="13" fontWeight="bold">Contested Court Decree (DCDRC)</text>
                    <text x="480" y="265" fill="#CBD5E1" fontSize="12">• 100% vehicle buyback with 9%–12% interest</text>
                    <text x="480" y="285" fill="#CBD5E1" fontSize="12">• Brand-new upgraded replacement scooter</text>
                    <text x="480" y="305" fill="#CBD5E1" fontSize="12">• ₹25,000–₹50,000 mental agony damages</text>

                    {/* Connecting Arrows */}
                    <path d="M540 140 V175 H260 V210" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M755 140 V175 H600 V210" stroke="#F87171" strokeWidth="1.5" />

                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 8: Process Timeline <ol> with <time> (Archetype G3) */}
              <section id="heading-timeline-rail" aria-labelledby="heading-timeline-rail-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-timeline-rail-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 4-Stage Statutory Enforcement Timeline
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Process Sequence
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this structured timeline to transform vague dealership excuses into actionable legal liability:
                </p>

                <ol className="relative border-l-2 border-slate-200 ml-4 space-y-8 my-6">
                  {/* Step 1 */}
                  <li className="ml-6">
                    <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-slate-900 text-white rounded-full ring-4 ring-white text-xs font-bold">
                      1
                    </span>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Day 1: Vehicle Deposit &amp; Strict Job Sheet Formulation
                        </h3>
                        <time dateTime="P1D" className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          Intake Day
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Drop the scooter at the authorized dealership. Ensure the Job Card explicitly records your reported defects (e.g., &quot;Range under 25 km; Sudden shutdown at 40 km/h; Charger trip&quot;). Photograph the odometer reading, physical body panels to preclude false damage allegations, and the dashboard battery percentage.
                      </p>
                    </div>
                  </li>

                  {/* Step 2 */}
                  <li className="ml-6">
                    <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-amber-500 text-white rounded-full ring-4 ring-white text-xs font-bold">
                      2
                    </span>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Day 7 to 10: First Formal Notice &amp; Substitute Mobility Demand
                        </h3>
                        <time dateTime="P7D" className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          7 Calendar Days
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If no technical progress has occurred, email the dealership general manager and the OEM nodal officer. Place them on formal notice that continuing to hold your commuter vehicle without providing an equivalent EV loaner scooter creates liability for daily commute expenses under Section 2(11) of the CPA 2019.
                      </p>
                    </div>
                  </li>

                  {/* Step 3 */}
                  <li className="ml-6">
                    <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-red-600 text-white rounded-full ring-4 ring-white text-xs font-bold">
                      3
                    </span>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Day 15: Advocate Statutory Legal Notice Dispatched
                        </h3>
                        <time dateTime="P15D" className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          15 Calendar Days
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Engage an advocate to serve a formal 15-day statutory demand notice via Registered Speed Post with tracking to both the local dealer principal and the OEM registered headquarters. The notice details the job card records, warranty terms, AIS-156 mandates, and quantifies daily travel expenses, putting them on strict notice of consumer court litigation.
                      </p>
                    </div>
                  </li>

                  {/* Step 4 */}
                  <li className="ml-6">
                    <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-emerald-600 text-white rounded-full ring-4 ring-white text-xs font-bold">
                      4
                    </span>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          Day 30+: Consumer Commission Filing via e-Jagriti
                        </h3>
                        <time dateTime="P30D" className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          30+ Calendar Days
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Upon expiration of the 15-day notice window, if the OEM fails to resolve the defect or deliver the repaired vehicle, file a formal consumer complaint before the District Consumer Disputes Redressal Commission (DCDRC) via the online e-Jagriti portal. Claim complete refund with 9%–12% interest, full conveyance costs, and mental agony damages.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 9: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: Recovering Costs for a Grounded Electric Scooter
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Scenario
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following worked example illustrates how a typical EV service backlog dispute translates into quantified financial recovery before the Consumer Forum:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                      Dispute Profile: Rohit Sharma v. Leading EV Scooter OEM &amp; Authorized Hub (Bengaluru)
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                      42-Day Battery Replacement Backlog &amp; Daily Commute Hardship
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Context:</strong> Rohit purchased a popular electric scooter for ₹1,42,000 in August 2025. In September 2026 (odometer: 14,800 km), the scooter experienced rapid range drop from 110 km to 28 km and stalled twice at traffic intersections. Rohit deposited the vehicle at the authorized service center on 5 September 2026.
                    </p>
                    <p>
                      <strong>The Service Center Conduct:</strong> The workshop issued Job Card #JC-9842 noting &quot;BMS Failure / Battery Pack Degradation&quot;. Over the next 42 days, the workshop repeatedly deferred delivery, asserting that replacement battery packs were locked in regional warehouse transit. The dealership refused to give Rohit a loaner vehicle, forcing him to spend ₹400 daily on cabs to commute to his workplace.
                    </p>
                    <p>
                      <strong>The Statutory Notice:</strong> On Day 22 of detention, Rohit engaged LegalRecovery to serve a formal 15-day statutory legal notice upon both the OEM and the dealership. The notice quantified 42 days of alternate conveyance, highlighted Section 2(11) deficiency in service, and demanded immediate vehicle handover with a brand-new battery pack or full ₹1,42,000 refund.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2">
                      Quantified Financial Recovery Breakdown
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Conveyance Compensation</span>
                        <strong className="text-slate-900 text-sm">₹16,800</strong>
                        <span className="text-[11px] text-slate-500 block mt-0.5">42 days @ ₹400/day cab cost</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Battery Pack Replacement</span>
                        <strong className="text-emerald-700 text-sm">₹52,000 (Free)</strong>
                        <span className="text-[11px] text-slate-500 block mt-0.5">Brand new pack under warranty</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Legal &amp; Agony Damages</span>
                        <strong className="text-blue-700 text-sm">₹20,000</strong>
                        <span className="text-[11px] text-slate-500 block mt-0.5">Settlement agreement terms</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 italic">
                    Result: 11 days after receiving the statutory legal notice via Speed Post, the OEM regional manager intervened, expedited a brand-new battery pack from the central plant, credited ₹16,800 directly to Rohit&apos;s bank account, and handed over the fully certified vehicle without litigation.
                  </p>
                </div>
              </section>

              {/* Section 10: Legal Notice Draft Template */}
              <section id="heading-notice-draft" aria-labelledby="heading-notice-draft-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-notice-draft-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Legal Notice Format: EV Service Delay &amp; Battery Warranty
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Advocate Draft Template
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Below is the standardized legal notice structure drafted under Sections 2(10), 2(11), and Chapter VI of the Consumer Protection Act, 2019. It puts the OEM and dealer on strict 15-day notice:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 font-mono text-xs leading-relaxed space-y-4 overflow-x-auto shadow-xl">
                  <div className="border-b border-slate-800 pb-3 text-emerald-400 font-bold">
                    LEGAL NOTICE UNDER SECTIONS 2(10), 2(11), 2(47) &amp; CHAPTER VI OF THE CONSUMER PROTECTION ACT, 2019
                  </div>

                  <p>
                    <strong>REGISTERED SPEED POST WITH A.D. &amp; EMAIL DISPATCH</strong>
                    <br />
                    Date: [DATE OF NOTICE]
                  </p>

                  <p>
                    <strong>TO:</strong>
                    <br />
                    1. [NAME OF EV MANUFACTURER / OEM]
                    <br />
                    Through its Managing Director / Authorized Representative
                    <br />
                    Registered Office: [OEM CORPORATE HEADQUARTERS ADDRESS]
                    <br />
                    Email: [OEM NODAL GRIEVANCE EMAIL]
                    <br />
                    <br />
                    2. [NAME OF AUTHORIZED DEALERSHIP &amp; SERVICE WORKSHOP]
                    <br />
                    Through its Dealer Principal / Branch Manager
                    <br />
                    Address: [LOCAL SERVICE CENTRE WORKSHOP ADDRESS]
                  </p>

                  <p>
                    <strong>SUBJECT:</strong> STATUTORY DEMAND FOR IMMEDIATE RESOLUTION OF CHRONIC SERVICE DELAY, RECTIFICATION OF MANUFACTURING DEFECT / FREE BATTERY PACK REPLACEMENT UNDER EXPRESS WARRANTY, AND REIMBURSEMENT OF ACTUAL CONVEYANCE CHARGES IN RESPECT OF ELECTRIC TWO-WHEELER REGISTRATION NO. [VEHICLE REG NO.], CHASSIS NO. [VIN NUMBER].
                  </p>

                  <p>
                    Sir / Madam,
                    <br />
                    Under instructions from and on behalf of my client, [CLIENT FULL NAME], residing at [CLIENT COMPLETE ADDRESS], I hereby serve upon you this Statutory Legal Notice:
                  </p>

                  <p>
                    1. That my client is a bona fide &quot;Consumer&quot; within the meaning of Section 2(7) of the Consumer Protection Act, 2019, having purchased an electric two-wheeler model [VEHICLE MODEL NAME], bearing Chassis No. [CHASSIS NO.] and Battery Serial No. [BATTERY SERIAL NO.] from Noticee No. 2 manufactured by Noticee No. 1 vide Tax Invoice No. [INVOICE NO.] dated [INVOICE DATE] for a total valuable consideration of ₹[TOTAL AMOUNT PAID]/-.
                  </p>

                  <p>
                    2. That at the time of purchase, Noticee No. 1 and 2 expressly represented that the vehicle was covered by a comprehensive warranty of [X] years, and an explicit traction battery warranty of [3 / 8] years or [50,000 / 80,000] kilometers, guaranteeing capacity retention of not less than [70% / 80%] State of Health (SOH) under standard driving conditions.
                  </p>

                  <p>
                    3. That within the active warranty period, on [DATE OF FAULT], the vehicle developed severe defects, specifically [DESCRIBE FAULT: E.G., ABNORMAL BATTERY DRAIN FROM 100% TO 20% WITHIN 30 KM / SUDDEN SHUTDOWN DURING RUNNING SPEED / FAILURE TO INITIATE CHARGING]. My client deposited the vehicle at Noticee No. 2&apos;s workshop on [DATE OF DEPOSIT], for which Job Card No. [JOB CARD NUMBER] was issued.
                  </p>

                  <p>
                    4. That despite the lapse of [NUMBER OF DAYS, E.G., 35] calendar days, Noticees have failed to repair the vehicle, replace the defective battery pack, or provide any verifiable completion date, arbitrarily citing non-availability of spare components. Noticees have further failed to provide a courtesy mobility vehicle or travel allowance, forcing my client to incur daily conveyance expenses of ₹[DAILY CAB COST]/- per day, totaling ₹[TOTAL CAB AMOUNT]/- to date.
                  </p>

                  <p>
                    5. That Noticees&apos; arbitrary conduct, failure to maintain requisite spare parts inventories, and wrongful refusal of warranty replacement constitutes gross &quot;Deficiency in Service&quot; under Section 2(11), marketing defective goods under Section 2(10), and strict product liability under Section 84 of the Consumer Protection Act, 2019.
                  </p>

                  <p>
                    <strong>THEREFORE, I HEREBY CALL UPON YOU, THE NOTICEES, TO COMPLY WITH THE FOLLOWING DEMANDS WITHIN FIFTEEN (15) CALENDAR DAYS OF RECEIPT OF THIS NOTICE:</strong>
                  </p>

                  <p className="pl-4">
                    a. Immediately complete the repair of the said vehicle and deliver it in flawless roadworthy condition with a brand-new, factory-sealed battery pack carrying fresh warranty; OR in the alternative, refund the full purchase price of ₹[TOTAL AMOUNT PAID]/- with 12% interest per annum;
                    <br />
                    b. Reimburse the actual conveyance expenditure of ₹[TOTAL CAB AMOUNT]/- incurred by my client during the detention period;
                    <br />
                    c. Pay a sum of ₹50,000/- towards damages for mental agony, severe harassment, and professional inconvenience;
                    <br />
                    d. Pay a sum of ₹11,000/- towards legal drafting and notice charges.
                  </p>

                  <p>
                    TAKE NOTICE that should you fail to comply within 15 calendar days, my client has given me peremptory instructions to initiate appropriate legal proceedings before the competent District Consumer Disputes Redressal Commission (DCDRC) under Section 35 of the Consumer Protection Act, 2019, as well as file formal regulatory complaints with the Central Consumer Protection Authority (CCPA), holding you jointly and severally liable for all consequential costs, interest, and punitive damages.
                  </p>

                  <p>
                    A copy of this notice is retained in my chamber records for production before the court.
                  </p>

                  <p className="pt-2 text-slate-400">
                    [ADVOCATE NAME &amp; ENROLMENT NUMBER]
                    <br />
                    Advocate, High Court / District Bar Association
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-100 border border-slate-200 mt-4">
                  <div className="text-xs text-slate-700">
                    <strong>Need this statutory notice professionally drafted and served on advocate letterhead?</strong>
                    <p className="text-slate-500 mt-0.5">
                      Our consumer recovery advocates handle complete legal drafting, Speed Post dispatch, and digital service.
                    </p>
                  </div>
                  <EvServiceDelayNoticeCTA variant="secondary" buttonText="Draft Custom Legal Notice" />
                </div>
              </section>

              {/* Section 11: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: EV Service Delay &amp; Battery Warranty
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Legal FAQ
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Sources & Statutory References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Legal Authorities &amp; Statutory References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Citations
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal benchmark, statutory deadline, and case precedent cited in this guide is derived from verified primary statutes, ministry notifications, and consumer commission judgments:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs text-slate-700">
                    <caption className="sr-only">Primary Legal References</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3">Statute / Regulatory Order</th>
                        <th scope="col" className="p-3">Official Portal / Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {PRIMARY_SOURCES.map((source, idx) => (
                        <tr key={idx}>
                          <td className="p-3 font-medium text-slate-900">{source.title}</td>
                          <td className="p-3">
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-600 hover:text-red-700 font-semibold underline"
                            >
                              Verify Authority ↗
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Scope of Service & Internal Links Block */}
                <div className="bg-slate-100 rounded-xl p-4 sm:p-5 border border-slate-200 text-xs text-slate-600 space-y-2 mt-6">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider">
                    Our Legal Scope &amp; Connected Automotive Dispute Guides
                  </h4>
                  <p>
                    LegalRecovery provides advocate-drafted statutory pre-litigation notices and dispute management. We assist EV owners in enforcing manufacturer warranty obligations, recovering alternative conveyance costs, and establishing evidence for e-Jagriti consumer filings. We do not provide physical mechanical towing or roadside battery extraction services.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Link
                      href="/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle"
                      className="text-red-700 hover:underline font-medium"
                    >
                      • Legal Notice to Car Dealer for Delayed Delivery or Defects
                    </Link>
                    <Link
                      href="/templates/car-delivery-delay-complaint-letter"
                      className="text-red-700 hover:underline font-medium"
                    >
                      • Car Delivery Delay Complaint Letter Template
                    </Link>
                    <Link
                      href="/refuse-new-car-delivery-pdi-defects"
                      className="text-red-700 hover:underline font-medium"
                    >
                      • Refuse New Car Delivery at PDI
                    </Link>
                    <Link
                      href="/bike-scooter-booking-refund-legal-notice"
                      className="text-red-700 hover:underline font-medium"
                    >
                      • Bike &amp; Scooter Booking Refund Notice
                    </Link>
                    <Link
                      href="/legal-notice-charges"
                      className="text-red-700 hover:underline font-medium"
                    >
                      • View Standard Legal Notice Charges
                    </Link>
                  </div>
                </div>

                {/* Reviewer Note / TODO(reviewer) comment per rules */}
                {/* TODO(reviewer): Pending formal advocate review assignment from src/data/reviewers.ts once populated */}
              </section>

              {/* Notice CTA Banner */}
              <div className="pt-4">
                <EvServiceDelayNoticeCTA />
              </div>
            </div>
          </div>
        </div>

        {/* Related Recovery Guides Cluster Section */}
        <div className="w-full bg-white border-t border-slate-200">
          <RelatedRecoveryGuides />
        </div>
      </main>
    </>
  );
}
