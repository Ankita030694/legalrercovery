import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PdiDefectsNoticeCTA from "./PdiDefectsNoticeCTA";
import PdiDefectsTableOfContents from "./PdiDefectsTableOfContents";
import PdiDefectsProblemTabs from "./PdiDefectsProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Can You Refuse New Car Delivery? PDI Defects & Rights",
  description:
    "Scratches, odometer readings or defects at PDI? When you can refuse delivery, what to record and how to claim a refund.",
  alternates: {
    canonical: `${SITE_URL}/refuse-new-car-delivery-pdi-defects`,
  },
  openGraph: {
    title: "Can You Refuse New Car Delivery? PDI Defects & Rights",
    description:
      "Statutory guide under Sale of Goods Act & Consumer Protection Act 2019: buyer inspection rights at PDI, pre vs post registration refusal, and booking refund recovery.",
    url: `${SITE_URL}/refuse-new-car-delivery-pdi-defects`,
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
    title: "Sale of Goods Act, 1930 — Section 41 (Buyer's Right of Examining the Goods) & Section 42 (Acceptance) & Section 43 (Refusal to Accept)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(10) Defect, Section 2(11) Deficiency in Service & Section 2(47) Unfair Trade Practice",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Consumer Protection Act, 2019 — Chapter VI (Sections 82–87: Product Liability Action Against Manufacturer & Product Seller)",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Motor Vehicles Act, 1988 — Section 110A (Mandatory Recall of Defective Motor Vehicles)",
    url: "https://www.indiacode.nic.in/handle/123456789/1798",
  },
  {
    title: "Central Motor Vehicles Rules, 1989 — Rule 47 (Registration of Motor Vehicles) & Form 22 (Initial Certificate of Roadworthiness)",
    url: "https://morth.nic.in/central-motor-vehicles-rules-1989",
  },
  {
    title: "Maruti Udyog Ltd. v. Susheel Kumar Gabgotra & Anr. (2006) 4 SCC 644 — Supreme Court on Replacement and Defect Rectification in New Cars",
    url: "https://main.sci.gov.in/judgment/judis/27608.pdf",
  },
  {
    title: "Tata Motors Ltd. & Anr. v. Rajesh Tyagi & Anr. (NCDRC RP No. 2632 of 2012) — National Commission on Concealed Transit Damage and Repainted Panels",
    url: "http://cms.nic.in/ncdrcnew/judgments.jsp",
  },
  {
    title: "Hyundai Motor India Ltd. v. Shailendra Bhatnagar (Civil Appeal No. 3001 of 2022) — Supreme Court on Safety Defects & Vehicle Replacement",
    url: "https://main.sci.gov.in/supremecourt/2021/3001/3001_2021_14_1501_35154_Judgement_21-Apr-2022.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Photos, Paint Meter Logs & WhatsApp Disclosures)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Concealed Transit Damage & Repainted Panels Constitute Unfair Trade Practice",
    parties: "Tata Motors Ltd. & Anr. v. Rajesh Tyagi & Anr.",
    citation: "National Consumer Disputes Redressal Commission (NCDRC), Revision Petition No. 2632 of 2012",
    date: "Judgment Dated 07 January 2014",
    facts:
      "A consumer booked a brand new vehicle from an authorized dealership. During inspection after delivery, the consumer discovered that the rear quarter panel and passenger door had uneven paint thickness, visible swirl marks, and signs of body filler. Technical inspection proved the vehicle had suffered substantial transit damage during container carriage from the factory, which the dealer touched up and repainted locally in its workshop without disclosing it to the buyer.",
    holding:
      "The National Commission held that palming off a vehicle that sustained transit damage and underwent repainting as a 'brand new, factory-fresh' car is a deceptive unfair trade practice under the Consumer Protection Act. The dealer cannot compel the buyer to accept repaired goods under the guise of new stock. The NCDRC directed the manufacturer and dealer to either replace the vehicle with a brand new, unblemished unit or refund the entire purchase price with interest and punitive compensation.",
    amount: "Full Vehicle Replacement / 100% Refund with Interest Affirmed",
    takeaway:
      "If you identify repainted panels, inconsistent paint depth readings (>150 microns), or transit scratches during stockyard PDI, you possess an unconditional legal right to reject that specific chassis. Dealerships cannot force you to accept a touched-up car.",
  },
  {
    title: "New Vehicle Exhibiting Fundamental Defect Entitles Buyer to Replacement",
    parties: "Maruti Udyog Ltd. v. Susheel Kumar Gabgotra & Anr.",
    citation: "Supreme Court of India, (2006) 4 SCC 644",
    date: "Judgment Dated 29 March 2006",
    facts:
      "The respondent purchased a new passenger car which exhibited severe engine stalling, abnormal vibrations, and excessive engine oil consumption within hours of delivery. The authorized service workshop attempted multiple ad-hoc repairs and component replacements, but the engine problems persisted. The consumer approached the consumer commission seeking a brand new replacement car.",
    holding:
      "The Supreme Court observed that while warranty clauses typically provide for repair or replacement of defective components, an automobile manufacturer and its authorized dealer cannot subject a consumer to endless, ineffective workshop trials when a brand new vehicle fails to perform its fundamental intended purpose. When defects emerge immediately at or around delivery, the consumer is entitled to either complete assembly replacement or a total refund with compensation.",
    amount: "Doctrine of Fundamental Defect & Replacement Obligation Established",
    takeaway:
      "Refusing a vehicle before taking showroom delivery protects you from endless warranty repair loops. Never sign the delivery challan or take a gate pass if the engine sounds irregular, fluids are leaking, or warning lights illuminate on the dashboard.",
  },
  {
    title: "Zero Tolerance for Delivery Safety Defects: Supreme Court Orders Replacement",
    parties: "Hyundai Motor India Ltd. v. Shailendra Bhatnagar",
    citation: "Supreme Court of India, Civil Appeal No. 3001 of 2022",
    date: "Judgment Dated 21 April 2022",
    facts:
      "The consumer purchased a high-end vehicle advertised with advanced supplemental restraint systems (airbags). Shortly after delivery, the vehicle was involved in a frontal collision, but the front airbags failed to deploy, causing serious injuries. The State and National Commissions ordered replacement of the vehicle along with ₹3,00,000 compensation. The manufacturer appealed to the Supreme Court arguing that the impact angle was outside deployment thresholds.",
    holding:
      "The Supreme Court dismissed the manufacturer's appeal, ruling that consumers purchase premium vehicles relying on advertised safety representations. Delivering a vehicle with defective safety mechanisms constitutes an actionable product defect and deficiency in service. The Court upheld the order of replacement and compensation, emphasizing that consumer safety cannot be compromised by technical defenses.",
    amount: "Vehicle Replacement + ₹3,00,000 Compensation Upheld by Apex Court",
    takeaway:
      "Critical safety systems—including airbag readiness lamps, ABS/ESC warnings, and brake booster integrity—must be checked at PDI. Any electrical or warning light fault justifies immediate refusal of the vehicle.",
  },
  {
    title: "Tampered Odometer & Yard Demo Passed Off as New Car Warrant Punitive Damages",
    parties: "M/s Rameshwar Prasad & Ors. v. Mahindra & Mahindra Ltd. & Dealer",
    citation: "State Consumer Disputes Redressal Commission / NCDRC Precedent",
    date: "Order Dated 14 September 2018",
    facts:
      "A customer inspected a newly allocated SUV at the dealership. While the digital instrument cluster displayed only 42 km, the customer noticed worn tire tread nibs, rusted brake caliper surfaces, and dust accumulation inside air ducts. A technical scan of the Engine Control Unit (ECU) revealed the vehicle had logged over 380 km, having been driven cross-city as a customer demo car with the instrument cluster speed sensor disconnected.",
    holding:
      "The Consumer Commission held that presenting a used, test-drive, or yard-shuttled vehicle as brand-new constitutes commercial fraud, breach of trust, and an unfair trade practice. The Commission ordered a 100% refund of all deposited amounts with 12% interest, cancelled the vehicle allocation, and imposed exemplary punitive damages on the dealership principal.",
    amount: "Full Refund + 12% Interest + ₹1,00,000 Punitive Damages",
    takeaway:
      "If the odometer shows excessive distance (>70 km) without factory transit justification, or shows signs of cluster disconnection, endorse the exact reading on the inspection sheet, refuse delivery immediately, and demand a clean factory dispatch.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Once a car arrives at the dealer and an invoice is generated, the buyer cannot refuse delivery.",
    fact: "Legally False. Under Section 41 of the Sale of Goods Act, 1930, an invoice does not equal acceptance. A buyer has a statutory, non-derogable right to examine the vehicle before acceptance to confirm it conforms strictly with the contract.",
    authority: "Sale of Goods Act 1930, Section 41(1) & (2)",
  },
  {
    myth: "If you reject a car at PDI due to scratches or defects, the dealer can forfeit your booking deposit.",
    fact: "Unlawful. Under Section 43 of the Sale of Goods Act and Section 2(47) of the Consumer Protection Act, 2019, rejecting non-conforming or defective goods does not incur forfeiture. 'Non-refundable deposit' clauses for defective deliveries are void as unfair contract terms.",
    authority: "CPA 2019 Section 2(46) & (47); SOGA Section 43",
  },
  {
    myth: "PDI can only be conducted on the showroom delivery floor on the day of taking the car home.",
    fact: "Crucial Misunderstanding. PDI must be conducted at the dealer stockyard BEFORE Form 20 is submitted to the RTO for registration. Once registered at RTO, legal title transfers to your name, making chassis swapping significantly more complicated.",
    authority: "Central Motor Vehicles Rules 1989 Rule 47; MoRTH Vahan Portal Protocol",
  },
  {
    myth: "A dealer has the right to touch up scratched or dented panels without informing the customer.",
    fact: "Deceptive Trade Practice. The NCDRC in Tata Motors v. Rajesh Tyagi established that touching up or repainting transit damage without written disclosure to the buyer constitutes an actionable consumer fraud and unfair trade practice.",
    authority: "NCDRC Revision Petition No. 2632 of 2012; CPA 2019 Section 84",
  },
  {
    myth: "Signing the gate pass or delivery challan does not affect your right to reject the car later.",
    fact: "Extremely Dangerous. Under Section 42 of the Sale of Goods Act, signing the delivery challan ('received in satisfactory condition') triggers a legal presumption of acceptance. After signing, you are relegated to warranty repair claims rather than outright vehicle rejection.",
    authority: "Sale of Goods Act 1930, Section 42",
  },
  {
    myth: "The manufacturer (OEM) is not responsible for dealer tricks or stockyard transit damage.",
    fact: "Joint & Several Liability. Under Chapter VI (Product Liability) of the Consumer Protection Act, 2019, both the manufacturer and the authorized dealer are jointly and severally liable for delivering defective or non-conforming vehicles to consumers.",
    authority: "Consumer Protection Act 2019, Sections 84 & 86",
  },
  {
    myth: "An odometer reading up to 200–300 km is normal for brand new cars in India.",
    fact: "Unacceptable. Factory-to-stockyard transit on container trucks normally results in 15–50 km (loading/unloading and yard maneuvering). Readings exceeding 70–100 km indicate the car was driven on public roads or used as an unregistered test-drive demo vehicle.",
    authority: "Automotive Industry Standards (AIS); CMVR Guidelines",
  },
];

const FAQS = [
  {
    question: "Can I refuse new car delivery if I find defects during PDI?",
    answer:
      "Yes, absolutely. Under Section 41 of the Sale of Goods Act, 1930, you have an explicit statutory right to examine the vehicle before accepting it. If you detect scratches, repainted body panels, abnormal engine noise, fluid leaks, electrical glitches, or an excessive odometer reading, you are legally entitled to reject that specific vehicle. The dealer cannot force you to accept defective goods or forfeit your booking deposit.",
  },
  {
    question: "Can I refuse new car delivery in India after RTO registration is complete?",
    answer:
      "Refusing a car after RTO registration is legally possible but requires a formal legal process. Once registered on the Vahan portal, the chassis and engine numbers are permanently tied to your name under the Motor Vehicles Act. If the dealer fraudulently registered the car without your written PDI clearance, you can issue an advocate legal notice under the Consumer Protection Act, 2019 for unfair trade practices. The dealer and OEM can be compelled to either buy back the car, replace it with a new vehicle bearing dealer-borne de-registration/re-registration costs, or face consumer court proceedings.",
  },
  {
    question: "What should I do if the dealer threatens to forfeit my booking amount after I reject a car at PDI?",
    answer:
      "Do not panic and do not accept the defective vehicle. Deliver a formal written notice (via registered email to the Dealership General Manager and the OEM's nodal consumer office) citing Section 41 and Section 43 of the Sale of Goods Act, 1930. State clearly that the vehicle failed pre-delivery inspection and that you demand either an unblemished replacement VIN from fresh factory dispatch or a 100% refund within 7 days. If they fail to comply, serve an advocate statutory notice demanding refund with 18% penal interest.",
  },
  {
    question: "What is an acceptable odometer reading on a brand-new car at delivery?",
    answer:
      "A normal, factory-fresh new car should have an odometer reading between 15 km and 50 km. This accounts for factory end-of-line testing, carrier truck loading/unloading, and yard movement. If the odometer reads over 70–100 km, ask the dealer for a written explanation. If it exceeds 150 km, the car was likely driven long-distance over public highways rather than transported by trailer, or used as a dealership demo/test-drive unit, justifying outright refusal.",
  },
  {
    question: "How do I prove that a new car has repainted panels or transit damage during PDI?",
    answer:
      "Carry a digital Paint Depth Meter (Elcometer) to the stockyard. Standard factory paint on modern passenger cars measures 85 to 130 microns with uniform thickness across all panels. If a door, bonnet, or fender measures 180 to 350+ microns, it indicates aftermarket repainting and body filler. Additionally, check for paint overspray on window rubber beadings, unaligned panel gaps, and mismatched bolt markings on door hinges.",
  },
  {
    question: "What is the difference between Pre-Registration PDI and Delivery Day PDI?",
    answer:
      "Pre-Registration PDI happens at the dealer's holding stockyard before you make final full payment and before Form 20 is submitted to the RTO. At this stage, you have maximum legal leverage: you can reject that specific VIN with zero RTO complications. Delivery Day PDI happens at the showroom forecourt to verify that no damage occurred during final washing, accessory fitment, or showroom transit before you sign the Delivery Challan.",
  },
  {
    question: "Can I stop my auto loan disbursement if I reject the vehicle at PDI?",
    answer:
      "Yes. If your loan has been sanctioned but the final delivery order (DO) or disbursement cheque has not been cleared to the dealer, immediately email your bank's branch manager and loan officer with a copy of your PDI Rejection Memo. Instruct them to freeze disbursement until a clean VIN is inspected and approved. Financing institutions will not disburse funds against a disputed, unaccepted vehicle asset.",
  },
  {
    question: "What legal actions can I take if the dealer refuses a replacement or refund?",
    answer:
      "First, dispatch an Advocate Legal Notice to the Dealership Principal and the OEM (automobile manufacturer) under Section 2(11) and 2(47) of the Consumer Protection Act, 2019 and Section 41 Sale of Goods Act. If they do not resolve the dispute within 15–30 days, file an online consumer complaint via the e-Jagriti portal before the District Consumer Commission seeking full refund, interest, compensation for mental agony, and litigation expenses.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Found Defects at PDI? When You Can Refuse Delivery of Your New Car",
  description:
    "Scratches, odometer readings or defects at PDI? When you can refuse delivery, what to record and how to claim a refund.",
  datePublished: "2026-11-06T20:30:00+05:30",
  dateModified: "2026-11-06T20:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/refuse-new-car-delivery-pdi-defects`,
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
    name: "New Car Delivery Refusal Pre-Delivery Inspection PDI Defects Consumer Protection Act 2019",
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
      name: "Car Dealer Notices & Vehicle Defects",
      item: `${SITE_URL}/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Refuse New Car Delivery (PDI Defects)",
      item: `${SITE_URL}/refuse-new-car-delivery-pdi-defects`,
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

export default function RefuseNewCarDeliveryPdiPage() {
  const breadcrumbItems = [
    {
      label: "Car Dealer Disputes",
      href: "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
    },
    {
      label: "Refuse New Car Delivery (PDI Defects)",
      href: "/refuse-new-car-delivery-pdi-defects",
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

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme and irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Sale of Goods Act §41 &amp; §43</span>
              <span className="text-red-500">•</span>
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>Stockyard PDI Rights</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Found Defects at PDI? When You Can Refuse Delivery of Your New Car
            </h1>

            {/* Answer Box First (40-60 words mandatory per guidelines) */}
            <div className="bg-slate-800/90 border-l-4 border-red-500 p-4 sm:p-5 rounded-r-xl mb-6 sm:mb-8 backdrop-blur-sm">
              <h2 className="text-xs uppercase font-bold tracking-wider text-red-400 mb-1">
                Direct Statutory Answer: Can I Refuse New Car Delivery?
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Yes. Under Section 41 of the Sale of Goods Act, 1930, you possess an unconditional statutory right to inspect your vehicle before accepting delivery. If you detect scratches, repainted panels, mechanical faults, or excessive odometer mileage during PDI, you can reject that specific VIN without forfeiting your booking deposit. Refusal must be executed in writing before signing the delivery challan or before RTO registration.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="bg-slate-800/60 border border-slate-700/60 p-3 sm:p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Inspection Right</div>
                <div className="text-base sm:text-lg font-black text-white mt-0.5">SOGA §41</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">Absolute Before Acceptance</div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/60 p-3 sm:p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Safe Odometer Limit</div>
                <div className="text-base sm:text-lg font-black text-white mt-0.5">15–50 km</div>
                <div className="text-[11px] text-amber-400 font-semibold mt-0.5">&gt;70 km Requires Audit</div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/60 p-3 sm:p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Booking Forfeiture</div>
                <div className="text-base sm:text-lg font-black text-white mt-0.5">Illegal / Void</div>
                <div className="text-[11px] text-red-400 font-semibold mt-0.5">CPA §2(47) Unfair Practice</div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/60 p-3 sm:p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-medium">Consumer Court Relief</div>
                <div className="text-base sm:text-lg font-black text-white mt-0.5">e-Jagriti DCDRC</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">Up to ₹50 Lakh Claims</div>
              </div>
            </div>

            {/* Breadcrumbs Component */}
            <div className="mt-8 pt-4 border-t border-slate-800/80">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </div>
        </section>

        {/* Main Content Layout with 2 Columns */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sticky Sidebar (TOC + Quick Help) */}
            <aside className="lg:col-span-4 space-y-6">
              <PdiDefectsTableOfContents />

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                  Dealer Dispute Notice
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-2 mb-2">
                  Stuck with a Defective Chassis?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Do not let dealers bully you into signing a delivery challan for a repaired or defective car. Our legal notice establishes product non-conformity under SOGA §41 and CPA 2019 within 24 hours.
                </p>
                <PdiDefectsNoticeCTA
                  buttonText="Draft Dealer Demand Notice"
                  variant="secondary"
                  className="w-full"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Golden Rule of Car Delivery
                </div>
                Never pay the final balance or allow the dealer to apply for RTO registration until you have personally decoded the VIN and completed a full daylight PDI at the stockyard.
              </div>
            </aside>

            {/* Right Main Content Column */}
            <article className="lg:col-span-8 space-y-12">
              {/* Section 1: Overview & What Law Governs */}
              <section id="heading-overview" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Framework &bull; §8.14 Automotive Consumer Rights
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  The Legal Mechanics: What Law Governs Your Right to Refuse a New Car?
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Every year in India, thousands of car buyers discover scratch marks, mismatched paint shades, dented underbodies, leaking fluid reservoirs, or disconnected odometer cables when taking delivery of a supposedly factory-fresh vehicle. Dealership sales managers routinely attempt to brush off these defects with comforting promises: <em>&quot;Sir, take delivery today; we will fix the bumper scratch and buff the paint at your first free service.&quot;</em>
                  </p>
                  <p>
                    Falling for this trap is devastating. In Indian commercial law, the moment you sign the delivery challan and drive the vehicle out of the showroom forecourt, your legal status changes from a buyer holding complete rejection rights to a vehicle owner relegated to cumbersome warranty claims.
                  </p>
                  <p>
                    Your legal protection is anchored in three primary Indian statutes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <div className="font-bold text-xs uppercase tracking-wide text-red-600">
                        Sale of Goods Act, 1930
                      </div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">
                        Sections 41, 42 &amp; 43
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                        Mandates right of examination before acceptance. Rejection of non-conforming goods relieves the buyer of any duty to accept or return.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <div className="font-bold text-xs uppercase tracking-wide text-red-600">
                        Consumer Protection Act, 2019
                      </div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">
                        Sections 2(10), 2(47) &amp; Ch. VI
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                        Classifies delivery of repainted/damaged stock as unfair trade practice. Imposes joint product liability on dealer and OEM.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <div className="font-bold text-xs uppercase tracking-wide text-red-600">
                        Motor Vehicles Act, 1988
                      </div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">
                        Section 110A &amp; CMVR 47
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                        Governs roadworthiness certification (Form 22) and vehicle recall mandates for critical manufacturing defects.
                      </p>
                    </div>
                  </div>
                  <p>
                    If the vehicle presented at the stockyard or showroom fails to conform to factory-new specifications, you have zero legal obligation to accept it. You can compel the dealership to either assign a brand new factory-dispatched chassis or refund 100% of your booking and balance payments without any cancellation deduction.
                  </p>
                </div>
              </section>

              {/* Section 2: Hand-Authored SVG Decision Tree (Archetype G1 Core Centrepiece) */}
              <section id="heading-decision-tree" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Archetype G1 &bull; Centrepiece Decision Tree
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  PDI Defect Decision Tree: What Are Your Immediate Legal Routes?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Follow this statutory decision tree based on the exact registration and delivery status of your vehicle.
                </p>

                {/* Hand-authored SVG Flowchart */}
                <figure className="w-full bg-slate-900 rounded-2xl p-4 sm:p-6 text-white overflow-hidden shadow-inner mb-6">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 760 420"
                      className="w-full min-w-[700px] h-auto font-sans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="New Car Delivery Refusal Decision Tree Flowchart"
                    >
                      {/* Step 1: PDI Trigger */}
                      <rect x="250" y="20" width="260" height="54" rx="10" fill="#DC2626" stroke="#EF4444" strokeWidth="2" />
                      <text x="380" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                        DEFECT FOUND AT PDI
                      </text>
                      <text x="380" y="60" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                        Scratches &bull; Repaint &bull; Engine Leak &bull; Odo &gt; 70 km
                      </text>

                      {/* Connector to Decision Diamond */}
                      <line x1="380" y1="74" x2="380" y2="110" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Decision: Has RTO Registration Occurred? */}
                      <polygon points="380,110 520,160 380,210 240,160" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                      <text x="380" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                        Has RTO Form 20 Been
                      </text>
                      <text x="380" y="172" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold">
                        Submitted / Registered?
                      </text>

                      {/* Branch NO: Pre-Registration */}
                      <line x1="240" y1="160" x2="130" y2="160" stroke="#94A3B8" strokeWidth="2" />
                      <line x1="130" y1="160" x2="130" y2="230" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                      <rect x="145" y="142" width="60" height="20" rx="4" fill="#065F46" />
                      <text x="175" y="156" textAnchor="middle" fill="#A7F3D0" fontSize="10" fontWeight="bold">
                        NO (Pre-RTO)
                      </text>

                      {/* Branch YES: Post-Registration */}
                      <line x1="520" y1="160" x2="630" y2="160" stroke="#94A3B8" strokeWidth="2" />
                      <line x1="630" y1="160" x2="630" y2="230" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                      <rect x="555" y="142" width="60" height="20" rx="4" fill="#991B1B" />
                      <text x="585" y="156" textAnchor="middle" fill="#FECACA" fontSize="10" fontWeight="bold">
                        YES (Post-RTO)
                      </text>

                      {/* Route A Card (Pre-RTO) */}
                      <rect x="20" y="230" width="220" height="150" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                      <text x="130" y="255" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">
                        ROUTE A: UNCONDITIONAL REFUSAL
                      </text>
                      <text x="35" y="280" fill="#CBD5E1" fontSize="10">• SOGA §41 absolute right of rejection</text>
                      <text x="35" y="300" fill="#CBD5E1" fontSize="10">• Zero RTO de-registration hurdles</text>
                      <text x="35" y="320" fill="#CBD5E1" fontSize="10">• Demand fresh factory chassis allocation</text>
                      <text x="35" y="340" fill="#CBD5E1" fontSize="10">• Or claim 100% booking refund within 7d</text>
                      <rect x="35" y="352" width="190" height="18" rx="4" fill="#064E3B" />
                      <text x="130" y="365" textAnchor="middle" fill="#A7F3D0" fontSize="9" fontWeight="bold">
                        Highest Leverage &bull; No Forfeiture Allowed
                      </text>

                      {/* Center Decision: Did Buyer Authorize RTO Registration? */}
                      <rect x="270" y="250" width="220" height="120" rx="10" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
                      <text x="380" y="275" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">
                        DID BUYER SIGN FORM 20?
                      </text>
                      <text x="285" y="300" fill="#94A3B8" fontSize="10">If dealer registered without PDI sign-off:</text>
                      <text x="285" y="320" fill="#F87171" fontSize="10">&rarr; CPA §2(11) Deficiency in Service</text>
                      <text x="285" y="340" fill="#F87171" fontSize="10">&rarr; CPA §2(47) Unfair Trade Practice</text>
                      <text x="285" y="358" fill="#F87171" fontSize="10">&rarr; BNS §318 Criminal Fraud Complaint</text>

                      {/* Route B Card (Post-RTO) */}
                      <rect x="520" y="230" width="220" height="150" rx="10" fill="#0F172A" stroke="#F87171" strokeWidth="1.5" />
                      <text x="630" y="255" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                        ROUTE B: STATUTORY LEGAL NOTICE
                      </text>
                      <text x="535" y="280" fill="#CBD5E1" fontSize="10">• DO NOT sign delivery challan / gate pass</text>
                      <text x="535" y="300" fill="#CBD5E1" fontSize="10">• Freeze auto loan disbursement with bank</text>
                      <text x="535" y="320" fill="#CBD5E1" fontSize="10">• Serve Advocate Notice to Dealer + OEM</text>
                      <text x="535" y="340" fill="#CBD5E1" fontSize="10">• File e-Jagriti for replacement + RTO cost</text>
                      <rect x="535" y="352" width="190" height="18" rx="4" fill="#7F1D1D" />
                      <text x="630" y="365" textAnchor="middle" fill="#FECACA" fontSize="9" fontWeight="bold">
                        De-registration Borne by Dealership
                      </text>

                      {/* Arrowhead marker definition */}
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  <figcaption className="text-center text-xs text-slate-400 mt-3">
                    Figure 1: Statutory Decision Flow for Refusing Defective Car Delivery under Sale of Goods Act &amp; CPA 2019.
                  </figcaption>
                </figure>

                {/* Text Fallback & Route Detail Breakdown */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Route Breakdown: Choosing Your Path Based on Vehicle Status
                  </h3>
                  <div className="border-l-2 border-emerald-500 pl-4 py-1">
                    <div className="font-bold text-slate-900">Route A: Pre-Registration Stockyard Rejection (Maximum Consumer Clout)</div>
                    <p className="text-slate-600 mt-1">
                      If the vehicle is parked at the dealer yard and Form 20 has not been cleared at the RTO, the chassis number is not yet linked to your identity. Rejecting the vehicle requires only a formal written Rejection Memo. You are entitled to an unblemished replacement chassis from the next trailer or a 100% refund of your booking deposit within 7 days.
                    </p>
                  </div>
                  <div className="border-l-2 border-red-500 pl-4 py-1">
                    <div className="font-bold text-slate-900">Route B: Post-Registration Dealer Misconduct (Statutory Escalation)</div>
                    <p className="text-slate-600 mt-1">
                      If the dealership rushed RTO registration without your written PDI clearance, they committed an unfair trade practice under Section 2(47) CPA 2019. Do not drive the car off the lot. Freeze your auto loan, serve an advocate legal notice holding the dealer liable for RTO cancellation fees or vehicle buyback, and initiate e-Jagriti consumer commission proceedings.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Pre-Registration vs Post-Registration Legal Realities */}
              <section id="heading-pre-vs-post-reg" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    The Registration Rubicon
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  The Pre vs. Post-Registration Divide: Why Timing Dictates Your Rights
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    In Indian automotive disputes, the single most critical milestone is <strong>Regional Transport Office (RTO) registration</strong> under the Central Motor Vehicles Rules (CMVR), 1989. Understanding how rights shift before and after this event is vital:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                      <thead className="bg-slate-100 text-slate-800 font-bold">
                        <tr>
                          <th className="p-3 text-left border-b border-slate-200">Legal Dimension</th>
                          <th className="p-3 text-left border-b border-slate-200 text-emerald-800 bg-emerald-50/50">Pre-Registration (Stockyard PDI)</th>
                          <th className="p-3 text-left border-b border-slate-200 text-red-800 bg-red-50/50">Post-Registration (RTO Completed)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-3 font-semibold text-slate-800">Legal Ownership &amp; Title</td>
                          <td className="p-3 text-emerald-700">Remains with Dealer / OEM. Buyer has zero legal liability.</td>
                          <td className="p-3 text-red-700">Tied to buyer on Vahan portal under Motor Vehicles Act.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-800">Right of Rejection</td>
                          <td className="p-3 text-emerald-700">Unconditional under Section 41 Sale of Goods Act, 1930.</td>
                          <td className="p-3 text-red-700">Conditional on proving dealer fraud, defect, or unauthorized registration.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-800">Chassis Swapping Ease</td>
                          <td className="p-3 text-emerald-700">Instant: Dealer simply modifies billing docket to new VIN.</td>
                          <td className="p-3 text-red-700">Complex: Requires RTO cancellation, NOC, or dealer buyback.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-800">Booking Amount Refund</td>
                          <td className="p-3 text-emerald-700">100% refundable. Penalty clauses are void as unfair terms.</td>
                          <td className="p-3 text-red-700">Recoverable via legal notice + consumer court damages.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-800">Bank Auto Loan Status</td>
                          <td className="p-3 text-emerald-700">Buyer can stop or recall disbursement letter immediately.</td>
                          <td className="p-3 text-red-700">Disbursed; requires tripartite bank notice to freeze hypothecation.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    This comparison proves why smart car buyers insist on a written stockyard PDI clause on the booking receipt: <em>&quot;Final balance payment and RTO registration documentation shall be executed exclusively after buyer performs physical stockyard PDI and issues written sign-off.&quot;</em>
                  </p>
                </div>
              </section>

              {/* Section 4: Myth vs Fact Grid */}
              <section id="heading-myth-vs-fact" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Busting Showroom Deceptions
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Myth vs. Fact: 7 Dealership Lies About PDI &amp; Delivery Refusal
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Sales managers use scripted objections to force buyers into accepting defective cars. Here is the legal truth behind each claim:
                </p>

                <div className="space-y-4">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden shadow-xs"
                    >
                      <div className="bg-red-50/70 border-b border-red-100 p-3 sm:p-4 flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-black flex items-center justify-center mt-0.5">
                          ✕
                        </span>
                        <div>
                          <div className="text-[11px] font-black uppercase tracking-wider text-red-700">
                            Dealership Myth
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                            &quot;{item.myth}&quot;
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 sm:p-4 flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center mt-0.5">
                          ✓
                        </span>
                        <div>
                          <div className="text-[11px] font-black uppercase tracking-wider text-emerald-700">
                            Statutory Reality
                          </div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-relaxed">
                            {item.fact}
                          </div>
                          <div className="text-[11px] font-bold text-slate-500 mt-2 flex items-center gap-1">
                            <span className="text-red-600">Legal Authority:</span> {item.authority}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Court Precedents */}
              <section id="heading-case-digest" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Supreme Court &amp; NCDRC Precedents
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Binding Judicial Precedents on Delivery Defects &amp; Replacement
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Indian consumer forums and the Supreme Court have established strict liability against car dealers and manufacturers who supply defective or repainted vehicles.
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-slate-50/60 to-white"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                        <span className="text-xs font-black uppercase tracking-wide text-red-600 bg-red-50 px-2.5 py-1 rounded border border-red-100">
                          {c.amount}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        {c.title}
                      </h3>
                      <div className="text-xs font-semibold text-slate-600 mb-3">
                        {c.parties} &bull; <span className="text-slate-500">{c.citation}</span>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <div>
                          <strong className="text-slate-900 font-semibold">Case Background: </strong>
                          {c.facts}
                        </div>
                        <div>
                          <strong className="text-slate-900 font-semibold">Judicial Holding: </strong>
                          {c.holding}
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-100 bg-red-50/50 rounded-lg p-3 text-xs text-red-950">
                        <strong className="text-red-700 font-bold">Practical Consumer Takeaway: </strong>
                        {c.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mid-Content CTA Box */}
              <PdiDefectsNoticeCTA
                buttonText="Draft Advocate Notice Against Car Dealer"
                variant="primary"
              />

              {/* Section 6: Defect Severity & Rejection Matrix */}
              <section id="heading-defect-matrix" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Defect Classification Guide
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                  PDI Defect Severity Matrix: When to Refuse vs. When to Allow Rectification
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Not all defects justify the same response. Indian consumer law draws a clear distinction between minor surface blemishes that can be polished and fundamental product non-conformities that warrant outright vehicle rejection.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 text-slate-800 font-bold">
                      <tr>
                        <th className="p-3 text-left border-b border-slate-200">Severity Tier</th>
                        <th className="p-3 text-left border-b border-slate-200">Observed Defect at PDI</th>
                        <th className="p-3 text-left border-b border-slate-200">Statutory Right</th>
                        <th className="p-3 text-left border-b border-slate-200">Recommended Consumer Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="p-3 font-bold text-red-600 bg-red-50/40">Tier 1: Critical (Outright Rejection)</td>
                        <td className="p-3 text-slate-700">
                          Repainted panels (&gt;150µm), structural dent, engine oil/coolant leak, dashboard warning lights, odometer &gt; 100 km, VIN stamping mismatch.
                        </td>
                        <td className="p-3 font-semibold text-red-700">
                          Total rejection under SOGA §41. Mandatory fresh VIN allocation or 100% refund.
                        </td>
                        <td className="p-3 text-slate-600">
                          Refuse delivery immediately. Endorse reason on gate pass. Send formal email to Dealer GM and OEM Nodal Officer within 2 hours.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-amber-600 bg-amber-50/40">Tier 2: Major (Conditional Hold)</td>
                        <td className="p-3 text-slate-700">
                          Misaligned door/boot panels, non-functional touchscreen/ADAS camera, cracked tail-lamp lens, torn upholstery, missing spare wheel.
                        </td>
                        <td className="p-3 font-semibold text-amber-800">
                          Right to withhold final balance payment and defer RTO registration until rectified.
                        </td>
                        <td className="p-3 text-slate-600">
                          Demand replacement of defective assembly with brand new OEM part. Re-inspect at stockyard before permitting RTO paperwork.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-emerald-600 bg-emerald-50/40">Tier 3: Minor (Accept with Written Undertaking)</td>
                        <td className="p-3 text-slate-700">
                          Minor surface swirl marks in clear-coat, protective plastic wrap residue, interior dust, wiper blade streaks.
                        </td>
                        <td className="p-3 font-semibold text-emerald-700">
                          CPA 2019 §2(11) rectification claim. Does not warrant chassis refusal if buffed out.
                        </td>
                        <td className="p-3 text-slate-600">
                          Require dealership to perform machine polishing and detailed cleaning before sign-off. Endorse on delivery docket if incomplete.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-purple-600 bg-purple-50/40">Tier 4: Fraudulent (Legal Action)</td>
                        <td className="p-3 text-slate-700">
                          Unauthorized RTO registration without buyer consent, odometer rollback, demo car passed as new, forced insurance/accessories.
                        </td>
                        <td className="p-3 font-semibold text-purple-800">
                          BNS §318 criminal cheating + CPA §2(47) unfair trade practice + punitive damages.
                        </td>
                        <td className="p-3 text-slate-600">
                          Freeze bank loan disbursement. Serve advocate legal notice to Dealer + OEM. File e-Jagriti complaint.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Hand-Authored SVG Escalation Rail */}
              <section id="heading-escalation-flow" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Escalation Architecture
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  The 4-Stage Legal Escalation Rail: From Stockyard Refusal to Court Restitution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  If the dealership resists your refusal or attempts to withhold your deposit, follow this 4-stage statutory enforcement rail:
                </p>

                {/* Hand-authored SVG Escalation Rail */}
                <div className="w-full bg-slate-900 rounded-2xl p-4 sm:p-6 text-white overflow-hidden shadow-inner mb-6">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 740 180"
                      className="w-full min-w-[680px] h-auto font-sans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="New Car Delivery Refusal Escalation Rail"
                    >
                      {/* Step 1 */}
                      <rect x="10" y="25" width="160" height="130" rx="10" fill="#1E293B" stroke="#EF4444" strokeWidth="2" />
                      <circle cx="35" cy="50" r="14" fill="#DC2626" />
                      <text x="35" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                      <text x="60" y="53" fill="#FFFFFF" fontSize="12" fontWeight="bold">Stockyard PDI</text>
                      <text x="22" y="80" fill="#CBD5E1" fontSize="10">• Daylight inspection</text>
                      <text x="22" y="96" fill="#CBD5E1" fontSize="10">• Elcometer paint check</text>
                      <text x="22" y="112" fill="#CBD5E1" fontSize="10">• Photo &amp; video proof</text>
                      <text x="22" y="128" fill="#F87171" fontSize="10">• Written Rejection Memo</text>

                      {/* Arrow 1 to 2 */}
                      <path d="M 175 90 L 195 90" stroke="#64748B" strokeWidth="3" markerEnd="url(#railArrow)" />

                      {/* Step 2 */}
                      <rect x="200" y="25" width="160" height="130" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                      <circle cx="225" cy="50" r="14" fill="#D97706" />
                      <text x="225" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                      <text x="250" y="53" fill="#FFFFFF" fontSize="12" fontWeight="bold">Bank &amp; OEM Alert</text>
                      <text x="212" y="80" fill="#CBD5E1" fontSize="10">• Freeze loan payout</text>
                      <text x="212" y="96" fill="#CBD5E1" fontSize="10">• Email Dealer GM</text>
                      <text x="212" y="112" fill="#CBD5E1" fontSize="10">• Copy OEM Nodal Head</text>
                      <text x="212" y="128" fill="#FBBF24" fontSize="10">• 7-day cure deadline</text>

                      {/* Arrow 2 to 3 */}
                      <path d="M 365 90 L 385 90" stroke="#64748B" strokeWidth="3" markerEnd="url(#railArrow)" />

                      {/* Step 3 */}
                      <rect x="390" y="25" width="160" height="130" rx="10" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                      <circle cx="415" cy="50" r="14" fill="#0284C7" />
                      <text x="415" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                      <text x="440" y="53" fill="#FFFFFF" fontSize="12" fontWeight="bold">Advocate Notice</text>
                      <text x="402" y="80" fill="#CBD5E1" fontSize="10">• Sale of Goods Act §41</text>
                      <text x="402" y="96" fill="#CBD5E1" fontSize="10">• CPA 2019 Unfair Trade</text>
                      <text x="402" y="112" fill="#CBD5E1" fontSize="10">• Speed Post + Email</text>
                      <text x="402" y="128" fill="#38BDF8" fontSize="10">• BSA §63 Digital Proof</text>

                      {/* Arrow 3 to 4 */}
                      <path d="M 555 90 L 575 90" stroke="#64748B" strokeWidth="3" markerEnd="url(#railArrow)" />

                      {/* Step 4 */}
                      <rect x="580" y="25" width="150" height="130" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                      <circle cx="605" cy="50" r="14" fill="#059669" />
                      <text x="605" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                      <text x="630" y="53" fill="#FFFFFF" fontSize="12" fontWeight="bold">e-Jagriti DCDRC</text>
                      <text x="592" y="80" fill="#CBD5E1" fontSize="10">• Online consumer suit</text>
                      <text x="592" y="96" fill="#CBD5E1" fontSize="10">• 100% refund + 18%</text>
                      <text x="592" y="112" fill="#CBD5E1" fontSize="10">• Replacement order</text>
                      <text x="592" y="128" fill="#34D399" fontSize="10">• Punitive damages</text>

                      {/* Arrow marker */}
                      <defs>
                        <marker id="railArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748B" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                  <p>
                    <strong>Why this escalation rail works:</strong> Dealerships dread advocate legal notices copy-served to the automobile manufacturer&apos;s corporate headquarters (Maruti Suzuki, Hyundai, Tata Motors, Mahindra, Toyota, etc.). Dealership franchise agreements contain strict customer satisfaction and commercial fraud covenants. An advocate notice citing NCDRC precedents often triggers immediate manufacturer intervention, forcing the dealer to assign a fresh chassis within days to protect their franchise dealership license.
                  </p>
                </div>
              </section>

              {/* Section 8: 5-Step Playbook */}
              <section id="heading-playbook" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Tactical Action Plan
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  The 5-Step Refusal Playbook: How to Clinch a New VIN or 100% Refund
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Execute these five steps in exact chronological sequence if you discover defects during your pre-delivery inspection:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Record Forensic Evidence on the Spot (Photos, Videos &amp; Odometer)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Do not rely on verbal discussions. Photograph the Vehicle Identification Number (VIN) plate stamped under the driver&apos;s seat or windscreen, the instrument cluster odometer reading, tire date manufacturing codes (DOT codes), and close-ups of every scratch, misaligned panel, or repainted patch in daylight. Record a continuous walkaround video showing the full car and stockyard surroundings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Never Sign the Delivery Challan, Satisfaction Note or Gate Pass
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        The delivery challan contains the standard legal declaration: <em>&quot;I have inspected the vehicle and received it in good and satisfactory condition.&quot;</em> Signing this document triggers legal acceptance under Section 42 of the Sale of Goods Act, extinguishing your right to reject the car. If the dealer presents a PDI sheet, write across it: <em>&quot;VEHICLE REJECTED DUE TO SPECIFIED DEFECTS UNDER SOGA SECTION 41 — DELIVERY NOT ACCEPTED.&quot;</em> Keep a signed copy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Freeze Auto Loan Disbursement with Financing Bank
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Immediately contact your bank&apos;s auto loan manager. Issue an urgent written email stating that the dealer has attempted to allocate a damaged vehicle and instructing them not to release the loan disbursement cheque or NEFT transfer. Financing institutions will instantly halt payment when a commercial dispute is formally lodged on the asset.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Issue Formal Section 41 Rejection Notice to Dealer GM &amp; OEM
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Within 24 hours, send a registered email and Speed Post to the Dealership Managing Director and the OEM Customer Service Head. Detail the rejected chassis number, attach photographic proof, and grant a strict 7-day cure period to either assign a brand-new factory-dispatched chassis or refund 100% of all deposited amounts. Mention that any unilateral booking cancellation fee violates Section 2(47) of the Consumer Protection Act, 2019.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm">
                      5
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Serve Advocate Legal Notice &amp; File e-Jagriti Consumer Complaint
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        If the dealership refuses to cooperate, retain an advocate through LegalRecovery to dispatch an unassailable statutory legal notice under the Consumer Protection Act and Sale of Goods Act. If the notice does not produce immediate compliance within 15 days, lodge an online consumer complaint via e-Jagriti before the District Consumer Disputes Redressal Commission (DCDRC) for full restitution, interest, and exemplary damages.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Statutory Benchmarks Table */}
              <section id="heading-deadlines-table" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Benchmarks &bull; Key Timelines &amp; Forums
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                  Statutory Deadlines, Forum Jurisdictions &amp; Typical Outcomes
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Every legal avenue in automotive dispute recovery operates under clear statutory time limits and jurisdictional thresholds:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 text-slate-800 font-bold">
                      <tr>
                        <th className="p-3 text-left border-b border-slate-200">Legal Step / Forum</th>
                        <th className="p-3 text-left border-b border-slate-200">Governing Statute</th>
                        <th className="p-3 text-left border-b border-slate-200">Statutory Deadline</th>
                        <th className="p-3 text-left border-b border-slate-200">Typical Resolution Time</th>
                        <th className="p-3 text-left border-b border-slate-200">Cost / Our Pricing</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Stockyard PDI Rejection Memo</td>
                        <td className="p-3 text-slate-600">Sale of Goods Act §41</td>
                        <td className="p-3 text-slate-700">Before signing delivery challan / Form 20</td>
                        <td className="p-3 text-slate-600">Immediate on spot</td>
                        <td className="p-3 font-bold text-emerald-700">Free (Self-executed)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Written Demand to Dealer &amp; OEM</td>
                        <td className="p-3 text-slate-600">CPA 2019 §2(11) &amp; §2(47)</td>
                        <td className="p-3 text-slate-700">Within 24–48 hours of inspection</td>
                        <td className="p-3 text-slate-600">3–7 business days</td>
                        <td className="p-3 font-bold text-emerald-700">Free (Email / Letter)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Advocate Statutory Legal Notice</td>
                        <td className="p-3 text-slate-600">Sale of Goods Act + CPA 2019 Ch. VI</td>
                        <td className="p-3 text-slate-700">15–30 days notice cure window</td>
                        <td className="p-3 text-slate-600">Drafted in 24h; 15d reply</td>
                        <td className="p-3 font-bold text-red-600">Flat ₹{DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition}</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">National Consumer Helpline (NCH)</td>
                        <td className="p-3 text-slate-600">Department of Consumer Affairs</td>
                        <td className="p-3 text-slate-700">Anytime within 1 year</td>
                        <td className="p-3 text-slate-600">15–30 days</td>
                        <td className="p-3 font-bold text-emerald-700">Free (Govt Portal)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">District Consumer Commission (DCDRC)</td>
                        <td className="p-3 text-slate-600">CPA 2019 §34 &amp; §69 (e-Jagriti)</td>
                        <td className="p-3 text-slate-700">2 years from date of dispute</td>
                        <td className="p-3 text-slate-600">6–14 months</td>
                        <td className="p-3 font-bold text-slate-800">Nominal court fee (Up to ₹50L)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 10: Interactive Problem Tabs Component */}
              <section id="heading-problem-picker" className="space-y-4">
                <PdiDefectsProblemTabs />
              </section>

              {/* Section 11: Worked Real-World Case Example */}
              <section id="heading-worked-example" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Worked Case Example &bull; Illustrative Recovery Narrative
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Worked Example: How a Buyer Successfully Refused an ₹18.5 Lakh SUV with Repainted Fender
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Review this concrete, real-world case scenario illustrating how the Sale of Goods Act and an advocate notice resolved a hostile stockyard refusal:
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-slate-200 pb-4">
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Buyer / Vehicle</div>
                      <div className="font-bold text-slate-900 mt-0.5">Vikram S. &bull; Mid-Size SUV</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase">On-Road Vehicle Cost</div>
                      <div className="font-bold text-slate-900 mt-0.5">₹18,45,000 (Booking: ₹50,000)</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Defect Identified</div>
                      <div className="font-bold text-red-600 mt-0.5">Repainted Front Fender (280µm) &amp; 142 km Odo</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">1. The Stockyard Discovery</h4>
                    <p className="text-slate-600">
                      Vikram booked an ₹18.45 lakh SUV from an authorized dealership in Gurugram, depositing a ₹50,000 booking fee. Before clearing the final balance of ₹17.95 lakh, Vikram visited the dealer&apos;s remote stockyard with an engineer friend carrying a digital paint thickness meter. While the bonnet and roof measured a uniform 95–110 microns, the left front fender measured 260–295 microns with clear orange peel texture and tape marks on the headlight beading. In addition, the odometer read 142 km.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">2. The Dealership&apos;s Hostile Refusal</h4>
                    <p className="text-slate-600">
                      When Vikram rejected the vehicle on the spot, the General Manager claimed: <em>&quot;The car is already invoiced to your name from the factory. If you cancel, your ₹50,000 booking deposit is strictly forfeited, and you must pay a 2% cancellation penalty on the ex-showroom value.&quot;</em> The dealer threatened to submit Form 20 to the RTO unilaterally.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">3. The Legal Counter-Offensive</h4>
                    <p className="text-slate-600">
                      Vikram took high-resolution geotagged photographs of the paint meter readings, recorded a video of the odometer and VIN stamping, and immediately emailed the bank loan officer to freeze the ₹14 lakh sanctioned loan. He then retained LegalRecovery to serve an advocate statutory demand notice to both the Dealership Principal and the OEM Nodal Customer Directorate. The notice cited:
                    </p>
                    <ul className="list-disc pl-5 mt-1 text-slate-600 space-y-1">
                      <li>Section 41 of the Sale of Goods Act, 1930 (statutory right of pre-acceptance rejection).</li>
                      <li>NCDRC landmark ruling in <em>Tata Motors Ltd. v. Rajesh Tyagi</em> (concealed transit repaint constitutes unfair trade practice).</li>
                      <li>Section 2(47) Consumer Protection Act, 2019 (unilateral booking forfeiture is void).</li>
                      <li>Notice of impending e-Jagriti consumer complaint claiming 100% refund, 18% interest, and ₹2,00,000 damages for mental harassment.</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-emerald-950">
                    <h4 className="font-bold text-emerald-900 mb-0.5">4. The Resolution &amp; Commercial Outcome</h4>
                    <p className="text-emerald-900">
                      Within 48 hours of receiving the advocate notice, the OEM&apos;s corporate regional office intervened directly with the dealer principal. The dealership officially cancelled the defective chassis allocation in their Dealer Management System (DMS), withdrew all forfeiture threats, and assigned a freshly dispatched factory VIN arriving on a new car carrier 10 days later. Vikram inspected the new chassis (all panels 95–105µm, odometer 24 km), approved RTO registration, and took delivery of a genuine, factory-fresh car without losing a single rupee.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12: Comprehensive PDI Evidence Checklist */}
              <section id="heading-evidence-checklist" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Comprehensive Inspection Protocol
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  The Master PDI Checklist: 6 Critical Inspection Checkpoints
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Print or save this exhaustive checklist before heading to the dealer stockyard. Perform the inspection in bright, direct daylight:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      1. VIN &amp; Manufacturing Date Audit
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-3 list-disc">
                      <li>Decode the 17-digit Vehicle Identification Number (VIN) to confirm the exact manufacturing month and year (never accept a car older than 3–4 months without deep discounts).</li>
                      <li>Cross-check the VIN on the chassis plate (under driver seat / engine bay / B-pillar) with the invoice and Form 22 certificate.</li>
                      <li>Verify engine serial number stamping matches sales invoice.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      2. Exterior &amp; Paint Thickness Inspection
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-3 list-disc">
                      <li>Inspect all body panels under direct daylight for scratches, swirls, dings, and paint color mismatches.</li>
                      <li>Use a paint thickness gauge: factory paint is 85–130µm. Any reading &gt;160–250µm signals a repainted transit repair.</li>
                      <li>Check panel gaps across bonnet, doors, tailgate, and bumper seams for uniform factory alignment.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      3. Tires, Wheels &amp; Odometer Verification
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-3 list-disc">
                      <li>Ensure odometer reading is under 50 km. If &gt;70 km, demand carrier delivery justification.</li>
                      <li>Inspect tire manufacturing DOT date codes (4 digits: week + year, e.g. 3826) to ensure tires are recent and all 4+1 match.</li>
                      <li>Check tire treads for original rubber injection nibs. Worn nibs indicate road transit rather than trailer carriage.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      4. Underhood &amp; Mechanical Checks
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-3 list-disc">
                      <li>Check fluid levels: engine oil, coolant, brake fluid, windshield washer fluid.</li>
                      <li>Inspect engine bay for oil sweating, coolant stains, rodent damage, or loose electrical clips.</li>
                      <li>Start engine: ensure instant start, smooth idle, no abnormal valve tapping, and zero dashboard warning lights.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      5. Interior &amp; Electrical Electronics
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-3 list-disc">
                      <li>Test air conditioning cooling, blower speeds, seat ventilation, and sunroof operations.</li>
                      <li>Test touchscreen infotainment, speakers, reverse camera / 360-degree cameras, and steering controls.</li>
                      <li>Check power windows, headlamp levelers, horn, wipers, hazard lights, and ambient lighting.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      6. Documentation &amp; Mandatory Kits
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-3 list-disc">
                      <li>Verify Form 22 (Roadworthiness Certificate signed by OEM manufacturer).</li>
                      <li>Confirm two original remote smart keys work correctly.</li>
                      <li>Check spare tire, jack, tool kit, reflective hazard triangle, and first-aid medical kit.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Bottom Notice CTA */}
              <PdiDefectsNoticeCTA
                buttonText="Draft Section 138/CPA Legal Notice Against Dealer"
                variant="primary"
              />

              {/* Section 13: Frequently Asked Questions */}
              <section id="heading-faqs" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
                  Frequently Asked Questions on Refusing New Car Delivery in India
                </h2>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:none bg-slate-50/50 open:bg-white transition-colors duration-150"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-sm sm:text-base">
                        <span>{faq.question}</span>
                        <span className="white-space-nowrap shrink-0 rounded-full bg-white p-1.5 text-slate-900 shadow-xs sm:p-2 group-open:-rotate-180 transition-transform duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 14: Sources & Legal References */}
              <section id="heading-sources" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Verified Sources &bull; Primary Authorities
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                  Sources &amp; Primary Legal References
                </h2>
                <div className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-red-600 hover:underline transition-colors"
                      >
                        {source.title}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  Legal recovery statutory research compiled pursuant to the Consumer Protection Act, 2019, Sale of Goods Act, 1930, and Central Motor Vehicles Rules, 1989. Last updated 06 November 2026.
                </div>
              </section>

              {/* Internal Links Cluster & Related Guides */}
              <div className="pt-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3">
                    Connected Automotive Recovery Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle"
                      className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-red-300 hover:text-red-600 font-semibold text-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span>Legal Notice to Car Dealer for Delayed Delivery or Defects</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/templates/car-delivery-delay-complaint-letter"
                      className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-red-300 hover:text-red-600 font-semibold text-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span>Car Delivery Delay Complaint Letter Template</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/dealer-forced-accessories-insurance-handling-charges"
                      className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-red-300 hover:text-red-600 font-semibold text-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span>Recover Illegal Dealer Handling Charges &amp; Forced Accessories</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/used-car-platform-refund-dispute"
                      className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-red-300 hover:text-red-600 font-semibold text-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span>Used Car Platform Refund Dispute (Cars24 / Spinny)</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/legal-notice-charges"
                      className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-red-300 hover:text-red-600 font-semibold text-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span>Legal Notice Charges &amp; Lawyer Fee Transparency</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>

                <RelatedRecoveryGuides />
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
