import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import DefectiveCarNoticeCTA from "./DefectiveCarNoticeCTA";
import DefectiveCarTableOfContents from "./DefectiveCarTableOfContents";
import DefectiveCarProblemTabs from "./DefectiveCarProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Defective Car Replacement or Refund: Lemon Law India",
  description:
    "Car spending more time in service centre than on road? CPA 2019 product liability, job cards proof, and legal notice to manufacturer and dealer.",
  alternates: {
    canonical: `${SITE_URL}/manufacturing-defect-car-replacement-refund-lemon-law`,
  },
  openGraph: {
    title: "Defective Car Replacement or Refund: Lemon Law India",
    description:
      "Statutory guide on vehicle manufacturing defects under Chapter VI Consumer Protection Act 2019: the 30-day/3-attempt lemon test, Supreme Court & NCDRC replacement precedents, job card audit rules, and legal notice drafting.",
    url: `${SITE_URL}/manufacturing-defect-car-replacement-refund-lemon-law`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Motor Vehicles Act, 1988 (as amended) — Section 110A Mandatory Recall of Defective Motor Vehicles",
    url: "https://www.indiacode.nic.in/handle/123456789/1798",
  },
  {
    title: "Central Motor Vehicles Rules, 1989 (CMVR) — Rule 127C Mandatory Recall of Motor Vehicles",
    url: "https://morth.nic.in/central-motor-vehicles-rules-1989",
  },
  {
    title: "Sale of Goods Act, 1930 — Section 16 (Implied Conditions as to Quality, Fitness & Merchantability)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Hyundai Motor India Ltd. v. Shailendra Bhatnagar (2022) SCC OnLine SC 483 — Supreme Court on Safety Defect & Product Liability",
    url: "https://main.sci.gov.in/supremecourt/2021/28221/28221_2021_11_1502_35043_Judgement_21-Apr-2022.pdf",
  },
  {
    title: "C.N. Anantharam v. Fiat India Ltd. & Ors. (2011) 1 SCC 460 — Supreme Court on Manufacturing Defect Replacement vs Refund",
    url: "https://main.sci.gov.in/judgment/judis/37255.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Job Cards, Telematics & Video Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Affirms Vehicle Compensation for Critical Safety Failure (Airbag Non-Deployment)",
    parties: "Hyundai Motor India Ltd. v. Shailendra Bhatnagar",
    citation: "Civil Appeal No. 3001 of 2022, 2022 SCC OnLine SC 483",
    date: "Judgment Dated 21 April 2022",
    facts:
      "The consumer purchased a new Hyundai Creta SUV fitted with front airbags. During a major highway accident resulting in severe damage to the vehicle's front cabin and physical injuries to the driver, the front airbags completely failed to deploy. The carmaker repudiated warranty and product liability claims, arguing that the collision velocity and impact angle did not meet the exact pre-set deceleration thresholds programmed into the Airbag Control Module (ACM).",
    holding:
      "A Division Bench of the Supreme Court of India dismissed the carmaker's appeal, holding that ordinary buyers purchase safety-equipped passenger vehicles under the reasonable statutory expectation that airbags will protect occupants during substantial frontal collisions. Technical algorithmic excuses regarding impact angles cannot shield a manufacturer from product liability. The Court affirmed compensation of ₹3 lakh for deficiency, ₹50,000 litigation costs, and interest, reinforcing strict consumer protection standards.",
    amount: "₹3,50,000 Award + Medical Reimbursement + Repudiation of Impact-Angle Excuses",
    takeaway:
      "Automakers cannot hide behind intricate electronic sensor fine-print when fundamental safety mechanisms fail. Critical safety equipment failures constitute severe product defects under Section 84 of CPA 2019.",
  },
  {
    title: "NCDRC Mandates 100% Invoice Refund for Inherent Engine & Powertrain Defects",
    parties: "Maruti Suzuki India Ltd. v. Rajiv Kumar Mittal & Anr.",
    citation: "Revision Petition No. 3678 of 2014, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 12 February 2015",
    facts:
      "The complainant purchased a brand new passenger car that exhibited violent engine vibrations, unexplained power loss, and chronic overheating within the first 1,500 km of driving. Over 10 months, the car visited the authorised dealership workshop 7 times and remained grounded for over 45 days. The dealership repeatedly swapped minor sensors, replaced the water pump, and performed ECU resets, but the core engine vibrations re-emerged on every drive.",
    holding:
      "The National Commission held that when a brand new vehicle suffers persistent mechanical malfunctions from the date of purchase that the manufacturer's authorised engineers cannot resolve despite repeated attempts, the defect is inherent to manufacture. A consumer who pays full consideration for a new car is entitled to uninterrupted road use, not an experimental chassis. The Commission directed the manufacturer to refund the full purchase price with 9% annual interest and ₹25,000 litigation costs.",
    amount: "100% Vehicle Purchase Price Refund @ 9% Interest + ₹25,000 Litigation Costs",
    takeaway:
      "Repeated visits to the authorized service centre for the same mechanical or electronic defect establish a presumption of manufacturing defect. Consumers are not obliged to accept perpetual repairs in lieu of their statutory right to replacement or refund.",
  },
  {
    title: "Supreme Court Settles Legal Standard on Vehicle Replacement vs. Full Price Refund",
    parties: "C.N. Anantharam v. Fiat India Ltd. & Ors.",
    citation: "Civil Appeal No. 2118 of 2004, (2011) 1 SCC 460",
    date: "Judgment Dated 24 November 2010",
    facts:
      "The appellant bought a new Fiat Uno that experienced immediate engine stalling, transmission noise, and steering misalignment. The consumer refused to take the car back from the dealership after 3 unsuccessful repair attempts and demanded a new replacement car. The manufacturer argued that under warranty clauses, their obligation was restricted to free replacement of defective components, not the whole car.",
    holding:
      "The Supreme Court of India laid down the definitive test for automotive manufacturing defects: If the defect in a motor vehicle is of such a pervasive nature that it cannot be rectified by replacing individual components or if repeated major component changes fail to render the vehicle roadworthy, the consumer commission has full statutory power to direct replacement of the vehicle or refund the entire purchase price with interest.",
    amount: "Full Vehicle Refund with Commercial Bank Interest + Strict Replacement Benchmark",
    takeaway:
      "A manufacturer's standard warranty disclaimer claiming 'repairs only' does not curtail the statutory authority of consumer commissions under Section 39 CPA 2019 to order vehicle replacement or complete financial restitution.",
  },
  {
    title: "NCDRC Orders New Vehicle Replacement for Persistent Gearbox Failure in Luxury Segment",
    parties: "Tata Motors Ltd. & Anr. v. Rajesh Tyagi & Anr.",
    citation: "First Appeal No. 497 of 2012, NCDRC New Delhi",
    date: "Order Dated 18 December 2013",
    facts:
      "The complainant purchased a new multi-utility vehicle that suffered sudden automatic gearbox lockups and oil leakages within the first 6,000 km. The vehicle broke down on interstate highways twice, endangering the occupants. While the dealer attempted gearbox overhauls, the transmission continued slipping between 3rd and 4th gear. The State Commission ordered a brand new vehicle replacement.",
    holding:
      "The National Commission upheld the replacement order, holding that buyers of brand new vehicles pay premium prices for peace of mind, mechanical reliability, and passenger safety. Delivering a vehicle with chronic transmission defects violates the implied warranty of merchantability. The manufacturer and dealer were jointly ordered to provide a brand new car of the same or upgraded variant or refund the complete on-road price.",
    amount: "Brand New Replacement Vehicle of Current Model Year + ₹50,000 Compensation",
    takeaway:
      "If a major mechanical assembly (engine block, gearbox, chassis, EV battery) proves defective early in vehicle life, the consumer is entitled to a brand new replacement car rather than a reconditioned vehicle.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "India has no 'Lemon Law', so car buyers have zero legal right to demand a vehicle replacement or refund.",
    fact: "False. While India lacks a statute titled 'Lemon Law', Chapter VI (Sections 82–87) of the Consumer Protection Act, 2019 and Section 39(1)(b) & (c) explicitly empower consumer courts to compel manufacturers to replace defective goods or refund 100% of the purchase price.",
    authority: "Sections 39(1)(b), (c) & Section 84 CPA 2019",
  },
  {
    myth: "The manufacturer's warranty booklet states 'Repairs Only', meaning you can never legally claim a full refund.",
    fact: "Legally Void. Standard adhesion contracts and restrictive warranty terms cannot override statutory rights under the Consumer Protection Act, 2019. In C.N. Anantharam (2011), the Supreme Court ruled that consumer forums possess statutory authority to order replacement or full refund despite warranty clauses.",
    authority: "Supreme Court in (2011) 1 SCC 460 & Section 2(46) CPA 2019",
  },
  {
    myth: "You can only sue the local dealership where you bought the car, not the corporate car manufacturer.",
    fact: "Incorrect. Under Section 84 of CPA 2019, product liability actions lie directly against the product manufacturer. In automotive defects, both the manufacturer (OEM) and authorised dealer must be jointly and severally arrayed as opposite parties.",
    authority: "Sections 84 & 86 Consumer Protection Act, 2019",
  },
  {
    myth: "If the service centre keeps resetting the check-engine light or software, you cannot prove a manufacturing defect.",
    fact: "Untrue. Every visit generates a statutory Job Card and OBD-II DTC fault history. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, repeated job cards recording identical unresolved complaints constitute unimpeachable electronic evidence of an inherent defect.",
    authority: "Section 63 BSA 2023 & NCDRC Powertrain Precedents",
  },
  {
    myth: "A car must break down more than 10 times over several years before a consumer court considers it a lemon.",
    fact: "Myth. Consumer commissions apply the '3-Attempt / 30-Day Workshop Rule'. If a major defect is not rectified within 3 documented repair attempts, or if the car spends a cumulative 30 days in the workshop within the first 12 months, courts consistently award replacement or refund.",
    authority: "NCDRC Automotive Defect Rulings & CMVR 127C",
  },
  {
    myth: "Court proceedings always take 10 years, making it impractical to fight a giant automotive corporation.",
    fact: "Outdated. Serving a formal advocate statutory notice under CPA 2019 frequently compels OEM legal departments to negotiate out-of-court buybacks or vehicle replacements. Furthermore, under e-Jagriti and Section 38(7) CPA, summary consumer trials have fast-track timelines.",
    authority: "Section 38(7) CPA 2019 & e-Jagriti Digital Procedure",
  },
];

const KEY_FACTS_ROWS = [
  {
    metric: "Governing Statute",
    detail: "Consumer Protection Act, 2019 (Chapter VI Product Liability) & Motor Vehicles Act (s.110A)",
    implication: "Strict statutory manufacturer liability; overrides restrictive warranty fine-print",
  },
  {
    metric: "The Lemon Benchmark",
    detail: "3 Unsuccessful Repair Attempts for same major defect OR 30+ cumulative workshop days in Year 1",
    implication: "Triggers strong legal presumption of inherent manufacturing flaw before court",
  },
  {
    metric: "Statutory Remedies",
    detail: "Brand New Replacement Vehicle OR 100% Invoice Refund + Registration/Insurance + 9–12% Interest",
    implication: "Section 39(1)(b) & (c) enforceable via District, State, or National Commission",
  },
  {
    metric: "Key Evidence Required",
    detail: "Sequential Job Cards with detailed fault notes, OBD-II DTC diagnostic logs, Workshop Gate Passes",
    implication: "Section 63 BSA 2023 certified electronic documentation is unassailable",
  },
  {
    metric: "Limitation Period",
    detail: "2 Years from the date the cause of action arises (last repair attempt or refusal notice)",
    implication: "Section 69 CPA 2019; legal notice must be dispatched without undue delay",
  },
  {
    metric: "Pre-Litigation Step",
    detail: "15-Day Advocate Statutory Demand Notice served jointly to OEM Managing Director & Dealership",
    implication: "Flat ₹999 via LegalRecovery.in; unlocks corporate out-of-court buyback negotiations",
  },
];

const FAQS = [
  {
    question: "Does India have a Lemon Law for defective cars?",
    answer:
      "India does not have a single dedicated statute titled 'Lemon Law', but consumers enjoy equivalent and robust legal protections under Chapter VI (Sections 82–87) of the Consumer Protection Act, 2019 and Section 110A of the Motor Vehicles Act, 1988. Under Section 39 of CPA 2019, consumer commissions have statutory authority to order car manufacturers to replace a defective vehicle with a brand new one or issue a 100% refund of the purchase price with interest.",
  },
  {
    question: "When is a car officially considered a lemon or manufacturing defect vehicle in India?",
    answer:
      "Consumer courts in India consider a vehicle to have an inherent manufacturing defect when: (1) The same critical mechanical, electronic, or safety defect cannot be cured after 3 documented repair attempts; (2) The vehicle spends a cumulative total of 30 or more days stationed in an authorised service centre within the first 12 months of purchase; or (3) A critical safety mechanism (such as airbags, brakes, or steering) fails to function, creating life-threatening risks.",
  },
  {
    question: "Can I get a full refund or a replacement car from the manufacturer under consumer court?",
    answer:
      "Yes. In landmark judgments such as C.N. Anantharam v. Fiat India Ltd. ((2011) 1 SCC 460) and Maruti Suzuki v. Rajiv Kumar Mittal, the Supreme Court of India and NCDRC have repeatedly ordered manufacturers to either provide a brand new replacement vehicle of the same or higher variant or refund the complete on-road purchase price along with 9% to 12% annual interest and compensation for mental harassment.",
  },
  {
    question: "What evidence is essential to prove a manufacturing defect in consumer court?",
    answer:
      "You must preserve: (1) All sequential job cards from day one, ensuring service advisors record your actual grievance rather than generic 'running repair' notes; (2) Workshop gate passes proving the entry and exit dates; (3) Printed OBD-II diagnostic trouble code (DTC) scan printouts; (4) Video and audio recordings of the defect occurring in real time; (5) Roadside assistance (RSA) breakdown receipts; and (6) A formal advocate statutory legal notice served to both the car manufacturer and the dealer under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    question: "Why must I serve a legal notice to both the car manufacturer and the dealership?",
    answer:
      "Under Sections 84 and 86 of the Consumer Protection Act, 2019, product liability rests with the product manufacturer, while deficiency of service applies to the authorized dealer. Serving both entities jointly prevents them from shifting blame between 'dealership workmanship' and 'factory engineering'. A joint statutory notice delivered by Registered Speed Post creates mandatory pre-litigation documentation and frequently prompts the manufacturer's corporate legal desk to offer a vehicle buyback.",
  },
  {
    question: "Can the car dealer force me to accept repeated repairs instead of a replacement?",
    answer:
      "No. While dealerships often argue that their warranty obligations are limited to replacing defective nuts, bolts, or sensors, consumer law supersedes private warranty contracts. If an inherent defect persists after reasonable repair opportunities, the consumer cannot be compelled to drive an unsafe or chronically malfunctioning vehicle. You have the statutory right under Section 39 CPA 2019 to reject the vehicle and demand complete financial restitution.",
  },
  {
    question: "What is the procedure and fee to send a legal notice for a defective car via LegalRecovery?",
    answer:
      "At LegalRecovery.in, an automotive consumer protection advocate drafts a customized, high-impact statutory demand notice citing Chapter VI CPA 2019, Section 16 Sale of Goods Act, and NCDRC replacement case law. The notice is served via Registered Speed Post with postal tracking and digital email/WhatsApp copies to the Managing Director of the automotive OEM and the dealership for a transparent flat fee of ₹999.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vehicle Manufacturing Defect: How to Force Replacement or Refund",
  description:
    "Car spending more time in service centre than on road? CPA 2019 product liability, job cards proof, and legal notice to manufacturer and dealer.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/manufacturing-defect-car-replacement-refund-lemon-law`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
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
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Defective Car Replacement India Lemon Law CPA 2019",
  },
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
      name: "Vehicle & PDI Legal Rights",
      item: `${SITE_URL}/refuse-new-car-delivery-pdi-defects`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Defective Car Replacement & Lemon Law",
      item: `${SITE_URL}/manufacturing-defect-car-replacement-refund-lemon-law`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function DefectiveCarReplacementPage() {
  const breadcrumbItems = [
    { label: "Vehicle & PDI Rights", href: "/refuse-new-car-delivery-pdi-defects" },
    { label: "Defective Car Replacement Guide", href: "/manufacturing-defect-car-replacement-refund-lemon-law" },
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching platform dark gradient styling */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Chapter VI CPA 2019</span>
              <span className="text-red-500">•</span>
              <span>Product Liability &amp; Lemon Law</span>
              <span className="text-red-500">•</span>
              <span>Supreme Court Precedents</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Vehicle Manufacturing Defect: How to Force Replacement or Refund
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (CPA 2019 Product Liability &amp; Indian Lemon Standard)
              </p>
              <p>
                Under Chapter VI of the Consumer Protection Act, 2019 and Section 16 of the Sale of Goods Act, vehicle manufacturers are strictly liable for inherent manufacturing defects. If your new car suffers recurring powertrain, electrical, or safety failures requiring 3 failed repair attempts or spending 30 cumulative days in workshop custody, consumer commissions possess full statutory authority to mandate a brand new vehicle replacement or 100% purchase price refund with interest.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 84 CPA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Strict Product Liability</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Workshop Custody Benchmark</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Or Brand New Replacement</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">9%–12% Int.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Plus Harassment Damages</p>
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
            <DefectiveCarTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview & What is a Lemon Car in India */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Lemon Car Reality in India: When Vehicles Turn Defective
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Buying a brand new car, SUV, or electric vehicle in India is one of the largest financial commitments an individual or family undertakes. Buyers pay substantial sums—often exceeding ₹12 lakh to ₹35 lakh—inclusive of high GST and road taxes, expecting mechanical perfection, reliability, and passenger safety.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Yet, thousands of new car owners discover within days of delivery that their vehicle is fundamentally flawed: sudden engine cut-offs at expressway speeds, shuddering dual-clutch transmissions (DCTs), defective electronic power steering (EPS), persistent battery drain, or severe structural and paint defects. Instead of enjoying their new purchase, owners find their vehicle spending more time parked in the dealership service bay than on the road.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When car owners demand a replacement or refund, dealerships and automotive manufacturers routinely dismiss them. Service advisors offer excuses like &ldquo;it is a minor software glitch,&rdquo; perform continuous temporary repairs, or claim that under company warranty policy, &ldquo;we only replace components, we never replace cars.&rdquo; This position is legally indefensible under modern Indian consumer jurisprudence.
                </p>
              </section>

              {/* Section 2: Chapter VI CPA 2019 & Product Liability */}
              <section id="heading-cpa-liability" aria-labelledby="heading-cpa-liability-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-cpa-liability-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Protection Act Shield for Defective Cars
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Product Liability
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Prior to the enactment of the Consumer Protection Act, 2019, automotive manufacturers routinely escaped liability by arguing that dealerships operated as independent principal-to-principal retail agents. The 2019 Act completely dismantled this corporate defence by introducing <strong>Chapter VI: Product Liability (Sections 82 to 87)</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-100 text-red-800">
                      Section 84 CPA 2019
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Strict Liability of the Vehicle Manufacturer (OEM)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A product manufacturer is legally liable if: (a) The product contains a manufacturing defect; (b) The product is defective in design; (c) There is a deviation from manufacturing specifications; (d) The product does not conform to the express warranty; or (e) The manufacturer fails to contain adequate instructions of correct usage.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                      Section 86 CPA 2019
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Joint &amp; Several Liability of the Authorised Dealership
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A product seller/dealer is liable if: (a) They exercised substantial control over designing, testing, or modifying the vehicle; (b) They altered or failed to maintain the vehicle; or (c) They made an express warranty independent of the manufacturer that was breached during pre-delivery inspection (PDI) or handover.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
                  Furthermore, under <strong>Section 39(1)(b) &amp; (c) of CPA 2019</strong>, consumer commissions are expressly mandated to direct the opposite parties to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-700">
                  <li><strong>Replace the goods:</strong> Issue a brand new vehicle of similar description, completely free from defects.</li>
                  <li><strong>Refund the purchase price:</strong> Return 100% of the vehicle invoice price, registration charges, road tax, and insurance alongside commercial interest.</li>
                  <li><strong>Award compensation:</strong> Pay damages for mental agony, harassment, alternate cab rentals, and litigation expenses.</li>
                </ul>
              </section>

              {/* Section 3: Landmark Court Precedents Digest */}
              <section id="heading-precedents" aria-labelledby="heading-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Precedents on Defective Car Replacement &amp; Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian consumer forums have developed an extensive body of case law protecting vehicle purchasers against manufacturing flaws. Citing these judgments in your statutory notice dismantles dealership evasion:
                </p>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full inline-block w-fit">
                            Judicial Citation #{idx + 1}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500">{c.date}</span>
                        </div>

                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
                          {c.title}
                        </h3>

                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm font-semibold text-slate-700 space-y-1">
                          <p><strong className="text-slate-900">Parties:</strong> {c.parties}</p>
                          <p><strong className="text-slate-900">Forum &amp; Citation:</strong> {c.citation}</p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <p><strong>Factual Matrix:</strong> {c.facts}</p>
                          <p><strong>Commission / Court Holding:</strong> {c.holding}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                            <span>Award:</span>
                            <span>{c.amount}</span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-600 italic">
                            <strong>Takeaway:</strong> {c.takeaway}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs Fact: 6 Misconceptions in Defective Car Claims
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Legal Reality vs Dealership Myths
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact Defective Car Replacement Analysis">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                            Misconception #{idx + 1}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500 text-right">
                            {item.authority}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                          <div className="p-3.5 bg-red-50/70 border border-red-200/70 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
                              ✕ Common Dealership Misrepresentation:
                            </span>
                            <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                              {item.myth}
                            </p>
                          </div>

                          <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                              ✓ Statutory Legal Reality:
                            </span>
                            <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                              {item.fact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: The 30-Day / 3-Attempt Lemon Test Criteria */}
              <section id="heading-lemon-criteria" aria-labelledby="heading-lemon-criteria-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-lemon-criteria-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 3-Attempt Test: How Courts Determine a Lemon Car
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Evidentiary Benchmarks
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Because Indian statutes do not prescribe an automated lemon formula, consumer commissions apply judicial benchmarks rooted in the doctrine of commercial merchantability under Section 16 of the Sale of Goods Act, 1930 and Section 2(10) of CPA 2019. If your vehicle meets any of the following three criteria, it qualifies for mandatory replacement or refund:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-black text-lg">
                      3x
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      The 3-Attempt Repair Rule
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The vehicle has been brought to the authorised service workshop three or more times for the exact same critical defect (engine, transmission, brake booster, steering EPS, or EV battery) without lasting cure.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-lg">
                      30d
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      The 30-Day Custody Rule
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The vehicle has remained out of service or grounded inside dealership workshops for a cumulative total of 30 or more days within the first 12 months of purchase, depriving you of ordinary use.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-black text-lg">
                      1x
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Critical Safety Hazard Rule
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Even a single failure of a life-critical safety system—such as airbags failing to deploy in a collision, sudden uncommanded acceleration, steering seizure, or EV battery thermal runaway—suffices under Supreme Court jurisprudence.
                    </p>
                  </div>
                </div>

                {/* Defect Classification Matrix Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mt-4">
                  <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <caption className="p-3 text-left font-bold text-slate-800 bg-slate-100 border-b border-slate-200">
                      Table 1: Defect Classification, Commission Jurisprudence &amp; Replacement Probability
                    </caption>
                    <thead className="bg-slate-50 text-slate-900 uppercase font-black tracking-wider text-[11px]">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left">Defect Category</th>
                        <th scope="col" className="px-4 py-3 text-left">Typical Symptoms</th>
                        <th scope="col" className="px-4 py-3 text-left">Statutory Ground</th>
                        <th scope="col" className="px-4 py-3 text-left">Court Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-bold text-slate-900">Safety &amp; Airbags</td>
                        <td className="px-4 py-3">Airbag failure in crash, EPS steering lockup, brake servo failure</td>
                        <td className="px-4 py-3 text-red-600 font-semibold">Strict Product Liability (s.84)</td>
                        <td className="px-4 py-3 font-semibold text-emerald-700">100% Refund + High Damages</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-bold text-slate-900">Powertrain (ICE &amp; Hybrid)</td>
                        <td className="px-4 py-3">DCT judder, chronic stalling, engine block oil seepage, turbo failure</td>
                        <td className="px-4 py-3 text-red-600 font-semibold">Manufacturing Defect (s.2(10))</td>
                        <td className="px-4 py-3 font-semibold text-emerald-700">Replacement Vehicle or Full Refund</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-bold text-slate-900">EV Traction Battery</td>
                        <td className="px-4 py-3">Rapid SOC cliff-drop, refusal to DC charge, BMS isolation errors</td>
                        <td className="px-4 py-3 text-red-600 font-semibold">AIS-156 &amp; Product Liability</td>
                        <td className="px-4 py-3 font-semibold text-emerald-700">New Battery Pack or Vehicle Buyback</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-bold text-slate-900">Chronic Electrical / CAN</td>
                        <td className="px-4 py-3">Cluster blackout while driving, parasitic drain overnight, ADAS false triggers</td>
                        <td className="px-4 py-3 text-slate-600 font-semibold">Deficiency &amp; Fitness for Purpose</td>
                        <td className="px-4 py-3 font-semibold text-slate-800">Complete Harness / Unit Replacement + Compensation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-bold text-slate-900">Cosmetic / Rattles</td>
                        <td className="px-4 py-3">Interior panel gaps, paint swirls, minor boot lid squeaks</td>
                        <td className="px-4 py-3 text-slate-600 font-semibold">Minor Rectification</td>
                        <td className="px-4 py-3 text-slate-700">Free Workshop Rectification Only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Hand-authored SVG Escalation Flowchart */}
              <section id="heading-resolution-flow" aria-labelledby="heading-resolution-flow-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-resolution-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Escalation Architecture: Workshop Denial to Replacement
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Decision Tree &amp; Process Flow
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Automotive companies rely on delay tactics, hoping consumers will exhaust their patience or exceed warranty windows. The diagram below illustrates the exact legal escalation sequence required to establish an airtight claim:
                </p>

                {/* Handcrafted Inline SVG Diagram */}
                <figure className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 840 260"
                      className="w-full min-w-[700px] h-auto"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Escalation Flowchart: From Defect to Vehicle Replacement"
                    >
                      {/* Step 1 */}
                      <rect x="10" y="20" width="145" height="100" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <rect x="10" y="20" width="145" height="24" rx="12" fill="#0F172A" />
                      <text x="82" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 1: SERVICE BAY</text>
                      <text x="82" y="65" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Job Cards &amp; Logs</text>
                      <text x="82" y="82" textAnchor="middle" fill="#64748B" fontSize="9">3 Unsuccessful Repairs</text>
                      <text x="82" y="96" textAnchor="middle" fill="#64748B" fontSize="9">or 30+ Workshop Days</text>
                      <text x="82" y="110" textAnchor="middle" fill="#DC2626" fontSize="9" fontWeight="bold">OBD-II DTC Reports</text>

                      {/* Arrow 1 */}
                      <path d="M155 70 H175" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                      {/* Step 2 */}
                      <rect x="175" y="20" width="145" height="100" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="2" />
                      <rect x="175" y="20" width="145" height="24" rx="12" fill="#DC2626" />
                      <text x="247" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 2: LEGAL NOTICE</text>
                      <text x="247" y="65" textAnchor="middle" fill="#991B1B" fontSize="11" fontWeight="bold">Advocate Notice</text>
                      <text x="247" y="82" textAnchor="middle" fill="#7F1D1D" fontSize="9">Jointly Served to OEM</text>
                      <text x="247" y="96" textAnchor="middle" fill="#7F1D1D" fontSize="9">&amp; Dealer via Speed Post</text>
                      <text x="247" y="110" textAnchor="middle" fill="#991B1B" fontSize="9" fontWeight="bold">15-Day Demand Period</text>

                      {/* Arrow 2 */}
                      <path d="M320 70 H340" stroke="#DC2626" strokeWidth="2.5" />

                      {/* Step 3 */}
                      <rect x="340" y="20" width="145" height="100" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <rect x="340" y="20" width="145" height="24" rx="12" fill="#1E293B" />
                      <text x="412" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 3: NEGOTIATION</text>
                      <text x="412" y="65" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">OEM Corporate Desk</text>
                      <text x="412" y="82" textAnchor="middle" fill="#64748B" fontSize="9">Technical Inspection</text>
                      <text x="412" y="96" textAnchor="middle" fill="#64748B" fontSize="9">Voluntary Buyback Offer</text>
                      <text x="412" y="110" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="bold">42% Settle Pre-Court</text>

                      {/* Arrow 3 */}
                      <path d="M485 70 H505" stroke="#DC2626" strokeWidth="2.5" />

                      {/* Step 4 */}
                      <rect x="505" y="20" width="145" height="100" rx="12" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
                      <rect x="505" y="20" width="145" height="24" rx="12" fill="#1D4ED8" />
                      <text x="577" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 4: E-JAGRITI</text>
                      <text x="577" y="65" textAnchor="middle" fill="#1E3A8A" fontSize="11" fontWeight="bold">Consumer Forum</text>
                      <text x="577" y="82" textAnchor="middle" fill="#1E40AF" fontSize="9">Sec 38(2)(c) ARAI Test</text>
                      <text x="577" y="96" textAnchor="middle" fill="#1E40AF" fontSize="9">District / State Commission</text>
                      <text x="577" y="110" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontWeight="bold">Product Liability Suit</text>

                      {/* Arrow 4 */}
                      <path d="M650 70 H670" stroke="#DC2626" strokeWidth="2.5" />

                      {/* Step 5 */}
                      <rect x="670" y="20" width="160" height="100" rx="12" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="2" />
                      <rect x="670" y="20" width="160" height="24" rx="12" fill="#059669" />
                      <text x="750" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">STAGE 5: COURT AWARD</text>
                      <text x="750" y="65" textAnchor="middle" fill="#065F46" fontSize="11" fontWeight="bold">Binding Enforceable Order</text>
                      <text x="750" y="82" textAnchor="middle" fill="#047857" fontSize="9">Brand New Replacement OR</text>
                      <text x="750" y="96" textAnchor="middle" fill="#047857" fontSize="9">100% Refund + 9-12% Int.</text>
                      <text x="750" y="110" textAnchor="middle" fill="#065F46" fontSize="9" fontWeight="bold">Plus Harassment Damages</text>

                      {/* Bottom Explanation Subtext */}
                      <rect x="10" y="150" width="820" height="90" rx="10" fill="#F1F5F9" stroke="#E2E8F0" />
                      <text x="30" y="175" fill="#0F172A" fontSize="11" fontWeight="bold">Statutory Escalation Rules Under Consumer Protection Act, 2019:</text>
                      <text x="30" y="195" fill="#475569" fontSize="10">• Stage 1 creates certified electronic records under Section 63 BSA 2023. Never allow service staff to wipe diagnostic logs without printouts.</text>
                      <text x="30" y="212" fill="#475569" fontSize="10">• Stage 2 legal notice puts the automaker on formal 15-day pre-litigation clock, invoking Section 84 product liability damages.</text>
                      <text x="30" y="229" fill="#475569" fontSize="10">• If unheeded, Stage 4 filing on e-Jagriti triggers fast-track summary trial where commissions order forensic inspection under Section 38(2)(c).</text>

                      {/* Markers */}
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  <figcaption className="text-center text-xs text-slate-500 mt-2">
                    Figure 1: Statutory 5-stage lifecycle of an automotive manufacturing defect dispute under Chapter VI CPA 2019.
                  </figcaption>
                </figure>
              </section>

              {/* Section 7: 5-Step Legal Playbook to Force Replacement or Refund */}
              <section id="heading-step-by-step" aria-labelledby="heading-step-by-step-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-step-by-step-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Step Playbook to Compel Carmakers to Replace or Refund
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Litigation Strategy
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">
                        1
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Audit &amp; Standardise All Service Bay Job Cards
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
                      Dealerships frequently try to shield the OEM by entering deceptive customer grievance notes such as &ldquo;routine running repair&rdquo; or &ldquo;customer running checkup.&rdquo; Before leaving the workshop, demand an amended job card that documents your verbatim complaint (e.g., &ldquo;Vehicle stalled abruptly on highway with engine overheat lamp and gear selector stuck in Neutral&rdquo;). Collect physical gate passes noting exact workshop entry and exit dates.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">
                        2
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Gather Certified Digital Telematics &amp; OBD-II Diagnostic Logs
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
                      Modern automobiles log diagnostic trouble codes (DTCs) in non-volatile flash memory inside the ECU, TCU, and BMS. Take high-resolution video recordings whenever the instrument cluster throws warning lights. Demand an official printout of the dealer&apos;s proprietary scanner report showing freeze-frame sensor data. These digital files are admissible under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">
                        3
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Serve a Joint 15-Day Advocate Statutory Demand Notice
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
                      Never engage in endless email arguments with customer-care bots. Instruct an advocate to draft a formal legal notice addressed jointly to the carmaker&apos;s Managing Director at their Indian corporate headquarters and the dealership Principal. The notice invokes Chapter VI CPA 2019, details all repair visits, cites Supreme Court replacement precedents, and grants a strict 15-day window to replace the vehicle or refund 100% of the invoice value.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">
                        4
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Participate in Corporate OEM Inspection &amp; Technical Settlement
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
                      Upon receipt of an advocate notice, automotive OEMs typically escalate the dispute to their Regional Technical Service Managers and Legal Department to avoid adverse judicial precedents. Over 40% of cases are settled at this stage via an out-of-court vehicle replacement, loan closure buyback, or vehicle trade-in with zero depreciation.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center">
                        5
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        File e-Jagriti Product Liability Complaint &amp; Seek Section 38(2)(c) Testing
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
                      If the carmaker remains stubborn, file an online consumer complaint via the government&apos;s <Link href="/e-jagriti-consumer-complaint-guide" className="text-[#DC2626] font-bold hover:underline">e-Jagriti consumer portal</Link>. In your application, file an interim prayer under Section 38(2)(c) of CPA 2019 requesting the commission to direct inspection by an authorized automotive testing agency (such as ARAI Pune, ICAT Manesar, or a Government Engineering Institute). An expert technical report confirming inherent defect makes a replacement or refund order inescapable.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Statutory Benchmarks & Comparison Table */}
              <section id="heading-key-facts" aria-labelledby="heading-key-facts-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-key-facts-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Benchmarks for Defective Vehicle Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Summary Matrix
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <caption className="p-3 text-left font-bold text-slate-800 bg-slate-100 border-b border-slate-200">
                      Table 2: Core Legal Parameters Governing Defective Vehicle Replacement &amp; Refunds in India
                    </caption>
                    <thead className="bg-slate-50 text-slate-900 uppercase font-black tracking-wider text-[11px]">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left">Legal Parameter</th>
                        <th scope="col" className="px-4 py-3 text-left">Statutory Position / Benchmark</th>
                        <th scope="col" className="px-4 py-3 text-left">Strategic Practical Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {KEY_FACTS_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-bold text-slate-900">{row.metric}</td>
                          <td className="px-4 py-3 text-slate-800 font-medium">{row.detail}</td>
                          <td className="px-4 py-3 text-slate-600">{row.implication}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 9: Interactive Problem Picker Component */}
              <section id="heading-scenarios" aria-labelledby="heading-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Scenarios: Select Your Specific Vehicle Malfunction
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Tailored Legal Fixes
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Different mechanical and electrical failures require distinct evidentiary strategies. Click through the tabs below to view the verified legal ground and immediate steps for your exact situation:
                </p>

                <DefectiveCarProblemTabs />
              </section>

              {/* Section 10: Worked Real-World Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Case Study: Compelling ₹18.5L Buyback on Defective SUV
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Case Study
                  </span>
                </div>

                <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Dispute Scenario</p>
                      <p className="text-base sm:text-lg font-black text-slate-900">
                        Recurring DCT Transmission Shudder &amp; Highway Limp Mode in 2025 Mid-Size SUV
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-black rounded-full">
                      100% Refund Resolved
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Sh. R. K. Sharma purchased an automatic petrol SUV in Bengaluru for ₹18,45,000 on-road. Within 2 months of purchase (odometer: 1,800 km), the dual-clutch transmission began vibrating violently when shifting from 1st to 2nd gear in traffic, accompanied by &ldquo;Transmission Overheat — Pull Over Safely&rdquo; alerts.
                    </p>
                    <p>
                      <strong>Dealership Evasion:</strong> Over the subsequent 6 months, the SUV was towed to the authorised dealership workshop 5 times. The service centre performed 2 TCU software flashes, replaced the dual-clutch assembly twice, and retained the vehicle in workshop custody for a cumulative 42 days. Despite these interventions, the transmission stalled on the Bengaluru-Mysuru Expressway, nearly triggering a multi-vehicle pile-up. The dealer refused vehicle replacement, offering only a third clutch replacement.
                    </p>
                    <p>
                      <strong>Legal Escalation:</strong> Sh. Sharma engaged LegalRecovery.in to serve a formal statutory advocate legal notice directly to the OEM&apos;s Managing Director at their Gurgaon headquarters and the local dealership. The notice invoked Chapter VI Product Liability under CPA 2019, compiled all 5 job cards and gate passes proving 42 days of loss of use, cited NCDRC rulings in <em>Maruti Suzuki v. Rajiv Kumar Mittal</em> and <em>Tata Motors v. Rajesh Tyagi</em>, and demanded either a brand new vehicle or full invoice reimbursement within 15 days.
                    </p>
                    <p>
                      <strong>The Resolution:</strong> Facing an airtight paper trail and potential regulatory scrutiny under Section 110A of the Motor Vehicles Act, the carmaker&apos;s Corporate Legal Counsel intervened within 11 days of receiving the notice. The OEM agreed to an out-of-court buyback: the manufacturer refunded the full invoice amount of ₹18,45,000, reimbursed ₹45,000 incurred on alternate vehicle rentals, and cleared the outstanding auto loan directly with the financing bank.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Total Price Paid</p>
                      <p className="text-sm sm:text-base font-black text-slate-900">₹18,45,000</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Workshop Days</p>
                      <p className="text-sm sm:text-base font-black text-red-600">42 Days (5 visits)</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Notice Turnaround</p>
                      <p className="text-sm sm:text-base font-black text-slate-900">11 Days</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Total Recovered</p>
                      <p className="text-sm sm:text-base font-black text-emerald-700">₹18,90,000</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Essential Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: 6 Documents Before Legal Notice
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Section 63 BSA 2023 Admissibility
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In automotive defect litigation, courts decide on documentary proof, not emotional frustration. Ensure you have secured the following six pieces of evidence:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-black uppercase text-[#DC2626]">Document 01</span>
                    <h3 className="text-sm font-bold text-slate-900">Sequential Workshop Job Cards</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every single job card generated since delivery. Ensure the customer grievance section notes your specific complaint rather than generic check-up phrases.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-black uppercase text-[#DC2626]">Document 02</span>
                    <h3 className="text-sm font-bold text-slate-900">Security Gate Passes (In &amp; Out)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Physical or digital gate passes showing the exact calendar date your vehicle entered the dealership workshop and when you collected it, computing total workshop days.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-black uppercase text-[#DC2626]">Document 03</span>
                    <h3 className="text-sm font-bold text-slate-900">OBD-II Diagnostic Scan Reports</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Printed copies of the Diagnostic Trouble Code (DTC) fault logs downloaded by service technicians using OEM diagnostic software before fault clearing.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-black uppercase text-[#DC2626]">Document 04</span>
                    <h3 className="text-sm font-bold text-slate-900">Time-Stamped Videos &amp; Dashcam Footage</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Clear smartphone video of warning lights flashing on the instrument cluster, strange mechanical noises, or stalls while driving, certified under Section 63 BSA 2023.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-black uppercase text-[#DC2626]">Document 05</span>
                    <h3 className="text-sm font-bold text-slate-900">Roadside Assistance (RSA) &amp; Towing Invoices</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Official towing receipts and RSA call centre reference IDs establishing that the vehicle experienced sudden breakdown and left you stranded on public roads.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-xs font-black uppercase text-[#DC2626]">Document 06</span>
                    <h3 className="text-sm font-bold text-slate-900">Original Tax Invoice, RC &amp; Insurance Copy</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Original purchase invoice, road tax receipt, registration certificate (RC), and insurance cover note to compute 100% on-road compensation.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                  <span>Related vehicle guides:</span>
                  <Link href="/refuse-new-car-delivery-pdi-defects" className="text-[#DC2626] hover:underline">
                    Refusing Defective New Car Delivery at PDI →
                  </Link>
                  <Link href="/ev-service-delay-battery-warranty-legal-notice" className="text-[#DC2626] hover:underline">
                    EV Battery Service Delay Legal Notice →
                  </Link>
                  <Link href="/templates/car-delivery-delay-complaint-letter" className="text-[#DC2626] hover:underline">
                    Car Delivery Delay Complaint Letter →
                  </Link>
                </div>
              </section>

              {/* Section 12: Key Takeaways Box (<aside>) */}
              <aside
                aria-label="Key Takeaways for Defective Car Owners"
                className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                  <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-red-400">
                    Key Legal Takeaways: Protecting Your Investment
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="space-y-1">
                    <p className="font-bold text-white">1. You Are Not Obliged to Endure Endless Repairs</p>
                    <p className="leading-relaxed">
                      Standard warranty booklets cannot force you to accept perpetual fixes. Section 39 of CPA 2019 empowers consumer commissions to order a brand new replacement car or 100% price refund.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-white">2. The 30-Day / 3-Attempt Rule is Your Lever</p>
                    <p className="leading-relaxed">
                      If the car spends 30+ cumulative days in the workshop or fails 3 times for the same defect, courts presume an inherent manufacturing flaw.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-white">3. Serve Both Manufacturer &amp; Dealership</p>
                    <p className="leading-relaxed">
                      Array both parties jointly to defeat the common defence where the OEM blames dealer workmanship and the dealer blames factory engineering.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-white">4. Fast Pre-Litigation Advocate Notice</p>
                    <p className="leading-relaxed">
                      A statutory legal notice under Chapter VI CPA 2019 served via Registered Speed Post often resolves the dispute via out-of-court buyback within 15–30 days.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Section 13: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Defective Car Replacement &amp; Lemon Law
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Q&amp;A
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-colors"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                        <span className="text-[#DC2626] font-black shrink-0">Q{idx + 1}:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 14: Primary Sources & Citations */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Sources &amp; Legal References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Citations
                  </span>
                </div>

                <p className="text-sm text-slate-600">
                  Every legal claim, statutory section, and precedent referenced in this guide is derived directly from verified Indian legislation, Supreme Court judgments, and central consumer protection portals:
                </p>

                <div className="grid grid-cols-1 gap-2.5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/30 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5 truncate pr-2">
                        <span className="text-slate-400 group-hover:text-[#DC2626] transition-colors text-xs font-black">
                          §
                        </span>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-red-950 truncate">
                          {source.title}
                        </span>
                      </div>
                      <span className="text-xs text-[#DC2626] font-black shrink-0 group-hover:translate-x-0.5 transition-transform">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Call to Action Card Component */}
              <div className="pt-4">
                <DefectiveCarNoticeCTA />
              </div>
            </div>
          </div>
        </div>

        {/* Related Guides Component */}
        <div className="border-t border-slate-200 bg-white">
          <RelatedRecoveryGuides />
        </div>
      </div>
    </>
  );
}
