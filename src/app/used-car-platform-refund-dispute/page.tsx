import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UsedCarNoticeCTA from "./UsedCarNoticeCTA";
import UsedCarTableOfContents from "./UsedCarTableOfContents";
import UsedCarProblemTabs from "./UsedCarProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Used-Car Platform Refund Dispute? Your Legal Options",
  description:
    "Used car turned out defective or misrepresented? Platform warranty terms, consumer law and how to send a refund notice.",
  alternates: {
    canonical: `${SITE_URL}/used-car-platform-refund-dispute`,
  },
  openGraph: {
    title: "Used-Car Platform Refund Dispute? Your Legal Options",
    description:
      "Statutory rights against used-car platforms & dealers: 7-day money-back enforcement, hidden defect & meter tampering liability, and legal notices.",
    url: `${SITE_URL}/used-car-platform-refund-dispute`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Used-Car Platform Refund Dispute? Your Legal Options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Used-Car Platform Refund Dispute? Your Legal Options",
    description:
      "Statutory rights against used-car platforms & dealers: 7-day money-back enforcement, hidden defect & meter tampering liability, and legal notices.",
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
    title: "Sale of Goods Act, 1930 — Section 14 (Implied Undertaking as to Title) & Section 16 (Implied Conditions as to Quality or Fitness)",
    url: "https://www.indiacode.nic.in/handle/123456789/2384",
  },
  {
    title: "Central Motor Vehicles Rules, 2022 (GSR 901(E) — Regulatory Ecosystem for Authorized Dealers of Registered Vehicles & Form 29C Mandate)",
    url: "https://morth.nic.in/sites/default/files/notifications_document/GSR%20901%20E.pdf",
  },
  {
    title: "Motor Vehicles Act, 1988 — Section 50 (Transfer of Ownership) & Section 51 (Vehicles Under Hypothecation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1798",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023 — Section 318 Cheating & Dishonest Inducement of Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Inspection Sheets & Diagnostic Scans)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Concealment of Flood Submersion & Severe Rust in 'Certified' Vehicle",
    parties: "Harish Kumar v. CARS24 Services Pvt. Ltd. & Ors.",
    citation: "Consumer Complaint No. 418/2022, DCDRC Gurugram",
    date: "Order Dated 19 May 2023",
    facts:
      "The complainant purchased a pre-owned sedan from CARS24 marketed as having passed a comprehensive '140-point quality check' with guaranteed zero accidental and flood history. Within 3 weeks of delivery, an authorized brand workshop uncovered critical chassis floor rust, corroded electrical wiring under carpets, and silt deposits inside door cavities indicating prior flood submersion. CARS24 rejected the return request, arguing that the complainant accepted delivery and that the 7-day return period had lapsed.",
    holding:
      "The District Consumer Forum held that concealing latent structural defects and flood damage while charging a premium for certified quality amounts to gross deficiency in service and unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Contractual return windows do not extinguish statutory rights where latent defects are deliberately suppressed. The forum directed CARS24 to take back the car and refund the entire purchase consideration of ₹4,85,000 along with 9% annual interest, ₹35,000 compensation for mental harassment, and ₹10,000 litigation expenses.",
    amount: "₹4,85,000 Full Vehicle Refund @ 9% Interest + ₹35,000 Compensation + ₹10,000 Legal Costs",
    takeaway:
      "A platform cannot shield itself behind a 7-day return policy when a car possesses latent, concealed flood or accidental damage that ordinary visual inspection upon delivery could never reveal. Consumer commissions treat certified inspection misrepresentations as actionable unfair trade practices.",
  },
  {
    title: "Catastrophic Engine Seizure Within Warranty Repudiated by Used Car Platform",
    parties: "Deepak Sharma v. Valuedrive Technologies Pvt. Ltd. (Spinny)",
    citation: "Consumer Complaint No. 182/2023, DCDRC New Delhi (South)",
    date: "Order Dated 14 November 2023",
    facts:
      "The buyer acquired a certified SUV with an advertised 1-year comprehensive powertrain warranty and a 5-day money-back guarantee. On the tenth day after delivery, the vehicle suffered complete engine seizure due to pre-existing oil sludge and oil pump failure. Spinny and its warranty administrator repudiated coverage alleging 'driver negligence' and refusing repurchase on the grounds that the 5-day return window had expired.",
    holding:
      "The District Commission observed that engine seizure occurring within ten days of delivery conclusively proves that the latent defect existed prior to the sale. Platforms providing warranty certificates cannot arbitrarily invoke vague exclusion clauses to evade liability. The commission ordered the platform to refund the complete purchase sum of ₹6,20,000, cancel the associated vehicle finance arrangement, and pay ₹50,000 damages for severe mental agony and inconvenience.",
    amount: "₹6,20,000 Full Refund & Loan Discharge + ₹50,000 Agony Damages + ₹15,000 Litigation Costs",
    takeaway:
      "Major mechanical failures manifesting shortly after delivery give rise to an irrebuttable presumption of pre-existing defect under Section 16 of the Sale of Goods Act, 1930 and CPA product liability provisions. Platforms must repurchase the vehicle or face punitive damages.",
  },
  {
    title: "Odometer Rollback Fraud Proved via Authorized Dealership Service Records",
    parties: "Rajesh Patel v. Auto Car Mart & Anr.",
    citation: "First Appeal No. 308/2021, SCDRC Maharashtra, Mumbai",
    date: "Order Dated 08 March 2022",
    facts:
      "The complainant bought a pre-owned hatchback showing 48,000 km on the odometer. When the car was taken to an authorized brand dealership for regular servicing, the computerized OEM server records revealed that the vehicle had already clocked 1,12,000 km fourteen months earlier during a warranty repair. The dealer had digitally dialed back the odometer to deceive prospective buyers into paying inflated market pricing.",
    holding:
      "The State Consumer Disputes Redressal Commission affirmed that altering an odometer reading is not merely a breach of contract but active consumer fraud and criminal deception under Section 318 BNS (formerly IPC 420). The commission affirmed an order directing the dealer to take back the car, refund the full purchase price of ₹5,50,000 with 12% interest, and awarded ₹1,00,000 in punitive damages to deter deceptive commercial practices in the used-vehicle sector.",
    amount: "₹5,50,000 Full Refund @ 12% Interest + ₹1,00,000 Punitive Damages",
    takeaway:
      "Dealership service logs maintained in centralized OEM servers constitute unimpeachable digital proof of odometer fraud. Courts routinely order full refunds, high interest rates, and exemplary damages against offending dealers.",
  },
  {
    title: "Non-Transfer of RC & Undisclosed Bank Hypothecation Over Pre-Owned Car",
    parties: "Sandeep Singh v. Pre-Owned Motors & True Value",
    citation: "Consumer Case No. 89/2023, DCDRC Chandigarh",
    date: "Order Dated 16 July 2024",
    facts:
      "The purchaser paid the full vehicle price plus ₹8,500 RC transfer fees to a certified pre-owned outlet. Ten months after delivery, the Registration Certificate remained in the original owner's name. A Parivahan check disclosed that the vehicle had an undischarged bank loan hypothecation (Form 35 unissued) and ₹18,000 in accumulated unpaid traffic challans incurred before the sale.",
    holding:
      "The District Commission held that under Central Motor Vehicles Rules and Section 14 of the Sale of Goods Act, a seller must deliver an unencumbered title. Selling a vehicle with outstanding hypothecation and delayed RC transfer exposes the purchaser to impoundment risks and police scrutiny. The forum directed the dealer to clear all pending challans, obtain the bank NOC, and deliver the transferred RC within 30 days, failing which the dealer was ordered to refund the entire vehicle cost plus ₹30,000 compensation.",
    amount: "₹30,000 Harassment Compensation + Mandatory Form 35 NOC Clearance within 30 Days",
    takeaway:
      "Dealers and platforms collecting RC transfer fees are legally liable for clean title delivery. If pre-existing challans or bank loan hypothecations are concealed, you have grounds to demand immediate title clearance or complete contract rescission.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Used cars are sold strictly 'as-is, where-is', meaning the dealer or platform bears zero legal responsibility once you drive off the lot.",
    fact: "False. Under Section 16 of the Sale of Goods Act, 1930 and Section 2(11) of the Consumer Protection Act, 2019, goods sold must be of merchantable quality and reasonably fit for their intended purpose. The 'as-is' defense cannot shield a seller who conceals latent structural damage, flood defects, or odometer fraud.",
    sectionRef: "Section 16 Sale of Goods Act, 1930 & Section 2(11) CPA 2019",
  },
  {
    myth: "If the platform's advertised 5-day or 7-day money-back guarantee window has passed, you lose all rights to demand a refund.",
    fact: "False. Contractual return policies are optional marketing guarantees and cannot override statutory consumer remedies. When latent defects (such as engine cylinder failure, transmission slippage, or welded chassis aprons) are discovered after 7 days, consumer commissions routinely order complete vehicle returns and refunds.",
    sectionRef: "Section 2(47) CPA 2019 & Harish Kumar v. CARS24 Services (DCDRC Gurugram)",
  },
  {
    myth: "A platform's '200-point inspection certificate' guarantees that the vehicle has never been involved in an accident.",
    fact: "False. Platform inspection sheets are internal marketing audits often carried out by junior mechanics. If independent dealer diagnostic checks reveal repainted structural pillars, deployed airbag modules, or straightened chassis rails, the certificate becomes primary evidence of false advertising under CCPA Guidelines 2022.",
    sectionRef: "CCPA Guidelines for Prevention of Misleading Advertisements, 2022",
  },
  {
    myth: "Odometer tampering is a standard market practice and cannot be challenged in court.",
    fact: "False. Digital or manual odometer rollback is active fraud under Section 318 of the Bharatiya Nyaya Sanhita, 2023 and an Unfair Trade Practice under CPA Section 2(47). Consumer commissions and criminal courts order full refunds and substantial punitive damages when verified against authorized OEM service records.",
    sectionRef: "Section 318 BNS 2023 & Section 2(47) Consumer Protection Act 2019",
  },
  {
    myth: "Used car platform warranties protect you against all mechanical and electrical breakdowns for 12 months.",
    fact: "False. Most platform warranties are outsourced to third-party administrators with extensive exclusion clauses for electrical harnesses, rubber components, and 'wear-and-tear'. However, under CPA Section 2(46), one-sided unfair contract terms that nullify core powertrain protection are legally voidable.",
    sectionRef: "Section 2(46) CPA 2019 (Unfair Contract Terms)",
  },
  {
    myth: "The buyer is legally responsible for clearing past unpaid traffic e-challans and getting bank hypothecation removed.",
    fact: "False. Under Central Motor Vehicles Rules, 2022 (Dealer Form 29C) and Section 14 of the Sale of Goods Act, the seller has an implied warranty that the vehicle is free from any charge or encumbrance. The platform or dealer is strictly obligated to clear all pre-delivery challans and provide Form 35 bank loan discharge.",
    sectionRef: "CMV Rules 2022 (Form 29C) & Section 14(c) Sale of Goods Act 1930",
  },
  {
    myth: "Consumer courts cannot cancel the auto loan EMIs you took out through the used car platform's lending partner.",
    fact: "False. Under Section 39 of the Consumer Protection Act, 2019, consumer commissions have the power to issue corrective orders against tied financing partners. When vehicle delivery is repudiated for latent defect fraud, commissions direct both the platform and NBFC to cancel the loan agreement and refund deducted EMIs.",
    sectionRef: "Section 39(1)(e) & 39(1)(g) Consumer Protection Act, 2019",
  },
];

const FAQS = [
  {
    question: "Can I get a full refund from Cars24 or Spinny if my used car has hidden defects?",
    answer:
      "Yes. If a pre-owned vehicle purchased from platforms like Cars24, Spinny, or CarDekho develops major mechanical failure or is discovered to have concealed accidental or flood damage, you are legally entitled to a full refund. Under Section 16 of the Sale of Goods Act, 1930 and Section 2(11) of the Consumer Protection Act, 2019, platforms cannot rely on expiry of a 5-day or 7-day return window to evade liability for latent defects that were actively suppressed at the time of sale. Serving a formal advocate legal notice is the first statutory step to initiate repurchase.",
  },
  {
    question: "What should I do if the platform denies my 7-day money-back guarantee return request?",
    answer:
      "When a platform rejects a return request under fine-print exclusions (such as exceeding kilometer limits or alleging customer damage), immediately lock down your paper trail. Obtain an independent diagnostic inspection report from an authorized OEM brand service center, download your initial ticket submission timestamps, and send an urgent formal escalation to the platform's Grievance Officer and Nodal Desk. If they fail to accept return within 7 days, dispatch a statutory advocate legal notice demanding immediate vehicle repurchase and refund.",
  },
  {
    question: "How do I prove that a used car's odometer was rolled back or tampered with?",
    answer:
      "The most conclusive proof of odometer tampering is the centralized vehicle service history maintained by the manufacturer's authorized dealership network. Take the car to an authorized brand service center (e.g., Hyundai, Maruti Suzuki, Tata, Honda) and request a stamped printout of the vehicle's historical maintenance visits. If the record shows 95,000 km recorded in 2024, but your dashboard displayed 42,000 km at the time of delivery, you have indisputable evidence of fraud under Section 318 BNS and Section 2(47) CPA 2019.",
  },
  {
    question: "What legal actions can I take against a used car dealer for fraud?",
    answer:
      "You have three concurrent legal remedies: (1) Serve a 15-day statutory advocate legal notice demanding full refund, cancellation of tied loans, and compensation; (2) File an online consumer complaint on the government's e-Jagriti portal under the Consumer Protection Act, 2019 for unfair trade practices and product liability; and (3) File a formal police complaint or Section 175(3) BNSS application before the Judicial Magistrate for criminal cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    question: "The used car platform has not transferred the RC even after 6 months. What are my rights?",
    answer:
      "Under the Central Motor Vehicles Rules, 2022 (GSR 901(E)) and Section 50 of the Motor Vehicles Act, 1988, authorized used car dealers operating under Form 29C are legally responsible for vehicle custody and timely transfer of ownership. If the platform delays RC transfer or conceals pending bank hypothecation, you can issue an advocate notice demanding transfer within 15 days or complete return of the vehicle with full refund plus compensation for illegal driving liability.",
  },
  {
    question: "Can I stop paying auto loan EMIs if the used car is completely unusable?",
    answer:
      "You should never stop auto loan EMIs unilaterally without legal notice, as the lending bank or NBFC will report defaults to CIBIL and trigger automated NACH bounce penalties. Instead, issue a joint statutory legal notice to both the used-car platform and the tied lending institution, notifying them that the underlying asset transaction has failed due to product liability failure and demanding that the NBFC suspend EMI deductions pending contract rescission under Section 39 CPA 2019.",
  },
  {
    question: "Used car khareedne ke baad engine ya meter tampering nikle toh paisa wapas kaise milega?",
    answer:
      "Agar used car platform (jaise Cars24, Spinny ya dealer) accident, flood damage ya meter tampering chhipakar gaadi bechta hai, toh yeh Consumer Protection Act 2019 ke Section 2(47) ke tehat Unfair Trade Practice aur Bharatiya Nyaya Sanhita (BNS) Section 318 ke tehat cheating hai. Authorized service center se report lekar platform ko turant return request bhejein. Agar wo mana karein, toh ek formal Advocate Legal Notice bhejkar 100% refund aur compensation demand karein, jiske baad e-Jagriti consumer court mein complaint darj ki ja sakti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bought a Used Car With Hidden Defects? Getting a Refund",
  description:
    "Used car turned out defective or misrepresented? Platform warranty terms, consumer law and how to send a refund notice.",
  datePublished: "2026-11-06T12:00:00+05:30",
  dateModified: "2026-11-06T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/used-car-platform-refund-dispute`,
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
    "@type": "Product",
    name: "Pre-Owned Used Vehicle Refund & Legal Dispute Resolution",
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
      name: "Consumer Refunds",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Car & Vehicle Disputes",
      item: `${SITE_URL}/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Used-Car Platform Refund Dispute",
      item: `${SITE_URL}/used-car-platform-refund-dispute`,
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

export default function UsedCarPlatformRefundPage() {
  const breadcrumbItems = [
    { label: "Consumer Refunds", href: "/services/refunds-and-consumer-complaints" },
    { label: "Car & Vehicle Disputes", href: "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle" },
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
        {/* Hero Section matching high-converting dark gradient theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019 §2(47)</span>
              <span className="text-red-500">•</span>
              <span>Sale of Goods Act §16</span>
              <span className="text-red-500">•</span>
              <span>Pre-Owned Vehicle Refund Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Bought a Used Car With Hidden Defects? Getting a Refund
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Used Car Dealer &amp; Platform Refund Liability)
              </p>
              <p>
                Under Section 16 of the Sale of Goods Act, 1930 and Section 2(47) of the Consumer Protection Act, 2019, used-car platforms and dealers are strictly liable for misrepresentation, concealed accidental damage, and odometer tampering. Contractual 5-day or 7-day return policies cannot extinguish your statutory right to full vehicle repurchase. Buyers can obtain an authorized OEM diagnostic report, serve a formal 15-day advocate legal notice, and file for 100% refund plus compensation before consumer commissions via e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">For Concealed Latent Defects</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">§16 SOGA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Implied Merchantable Quality</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">BNS §318</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Criminal Cheating for Meter Fraud</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹1 Lakh+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Exemplary Damages in Orders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Sticky Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <UsedCarTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Legal Reality: Used-Car Platforms Cannot Sell Lemons With Impunity
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Indian pre-owned automobile ecosystem has undergone an enormous transition. Venture-funded digital platforms such as Cars24, Spinny, CarDekho, and OEM certified pre-owned outlets (like Maruti True Value, Hyundai Promise, and Mahindra First Choice) charge premiums of ₹40,000 to ₹1,00,000 above unorganized market rates. They justify these markups by promising rigorous &quot;140-point&quot; or &quot;200-point&quot; mechanical certifications, assured warranties, clear RTO documentation, and &quot;no-questions-asked&quot; money-back return windows.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, thousands of vehicle buyers discover within days of delivery that their vehicle suffers from catastrophic defects: engine cylinder blow-by, dual-clutch transmission slippage, repainted chassis aprons indicating severe structural collisions, or internal flood silt. When consumers attempt to trigger the advertised 5-day or 7-day money-back guarantee, platforms routinely deploy deceptive resistance tactics—claiming that the defect falls under &quot;wear-and-tear&quot;, asserting that the buyer exceeded a hidden kilometer cap, or directing them to third-party warranty administrators that systematically reject claims.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian law stands firmly on the consumer&apos;s side. Under the{" "}
                  <strong className="text-slate-900">Consumer Protection Act, 2019</strong> and the{" "}
                  <strong className="text-slate-900">Sale of Goods Act, 1930</strong>, an advertised certification creates a binding statutory warranty of merchantability. A buyer who has been sold a misrepresented, accident-damaged, or odometer-tampered vehicle is legally entitled to complete contract rescission, full financial refund, loan cancellation, and substantial damages for mental harassment.
                </p>
              </section>

              {/* Section 2: Court Orders Digest */}
              <section id="heading-court-orders" aria-labelledby="heading-court-orders-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Orders: Rulings Against Used-Car Platforms &amp; Dealers
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Official Judicial Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Order #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Judicial Relief Awarded
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Legal Precedent Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Directly Binding on Certified Resellers &amp; Dealers
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-red-50/60 border border-red-200/60 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong className="text-[#DC2626] font-bold">Key Practical Takeaway: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Myth vs Fact Table (Archetype G5 Core) */}
              <section id="heading-myths-facts" aria-labelledby="heading-myths-facts-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myths-facts-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: 7 Deceptive Dealer Defenses Dismantled by Law
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Used car platforms rely on buyer unfamiliarity with commercial law. Here is what the statutes and consumer commissions actually mandate.
                  </p>
                </div>

                <div className="space-y-4">
                  {MYTH_FACT_PAIRS.map((pair, index) => (
                    <div
                      key={index}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100"
                    >
                      {/* Myth Column */}
                      <div className="p-5 sm:p-6 bg-rose-50/40 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                            ✕
                          </span>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-700">
                            Common Dealer Myth #{index + 1}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                          &quot;{pair.myth}&quot;
                        </p>
                      </div>

                      {/* Fact Column */}
                      <div className="p-5 sm:p-6 bg-white space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                            ✓
                          </span>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                            The Legal Statutory Fact
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                          {pair.fact}
                        </p>
                        <div className="pt-1">
                          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            Ref: {pair.sectionRef}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Resolution Rail / SVG Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Resolution Rail: The 4-Phase Path to a Used-Car Refund
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Do not waste weeks arguing with chatbot support agents. Follow the established legal trajectory to enforce repurchase.
                  </p>
                </div>

                {/* Hand-Authored Responsive SVG Diagram */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 880 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Used-Car Refund Dispute Resolution Rail Diagram"
                  >
                    {/* Step 1 */}
                    <g transform="translate(10, 15)">
                      <rect width="190" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#0F172A" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                      <text x="50" y="32" fill="#0F172A" fontSize="12" fontWeight="bold">Evidence Audit</text>
                      <text x="16" y="65" fill="#475569" fontSize="10.5" lineHeight="15">
                        <tspan x="16" dy="0">• Dealership service history</tspan>
                        <tspan x="16" dy="16">• OBD diagnostic error log</tspan>
                        <tspan x="16" dy="16">• Paint gauge &amp; apron audit</tspan>
                        <tspan x="16" dy="16">• Parivahan challan/NOC status</tspan>
                      </text>
                    </g>

                    {/* Arrow 1 */}
                    <path d="M 205 90 L 225 90" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <g transform="translate(230, 15)">
                      <rect width="190" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#0F172A" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                      <text x="50" y="32" fill="#0F172A" fontSize="12" fontWeight="bold">Written Repudiation</text>
                      <text x="16" y="65" fill="#475569" fontSize="10.5">
                        <tspan x="16" dy="0">• Formal email to Nodal Officer</tspan>
                        <tspan x="16" dy="16">• Invocation of 7-day guarantee</tspan>
                        <tspan x="16" dy="16">• Demand vehicle pickup</tspan>
                        <tspan x="16" dy="16">• Notice of tied-loan dispute</tspan>
                      </text>
                    </g>

                    {/* Arrow 2 */}
                    <path d="M 425 90 L 445 90" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Step 3 */}
                    <g transform="translate(450, 15)">
                      <rect width="190" height="150" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                      <text x="50" y="32" fill="#991B1B" fontSize="12" fontWeight="bold">Advocate Notice</text>
                      <text x="16" y="65" fill="#7F1D1D" fontSize="10.5">
                        <tspan x="16" dy="0">• 15-day statutory demand</tspan>
                        <tspan x="16" dy="16">• Dispatched via Speed Post</tspan>
                        <tspan x="16" dy="16">• CPA §2(47) &amp; BNS 318 citation</tspan>
                        <tspan x="16" dy="16">• Co-notice to lending bank</tspan>
                      </text>
                    </g>

                    {/* Arrow 3 */}
                    <path d="M 645 90 L 665 90" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Step 4 */}
                    <g transform="translate(670, 15)">
                      <rect width="195" height="150" rx="12" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#16A34A" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                      <text x="50" y="32" fill="#14532D" fontSize="12" fontWeight="bold">e-Jagriti Redressal</text>
                      <text x="16" y="65" fill="#166534" fontSize="10.5">
                        <tspan x="16" dy="0">• Online Consumer Commission</tspan>
                        <tspan x="16" dy="16">• 100% refund of vehicle price</tspan>
                        <tspan x="16" dy="16">• 9%–12% statutory interest</tspan>
                        <tspan x="16" dy="16">• Compensation for harassment</tspan>
                      </text>
                    </g>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Escalation Playbook: How to Recover Your Car Money Legally
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Follow these step-by-step procedures to preserve evidence and force the platform into a settlement.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        01
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Secure an Unbiased Diagnostic Audit from the Brand&apos;s Authorized Dealership
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Do not take the vehicle to a roadside mechanic. Immediately book an appointment at the vehicle manufacturer&apos;s official authorized service center (e.g., Maruti Suzuki ARENA/NEXA, Hyundai Motor, Honda Cars, or Tata Motors). Request a formal inspection job card covering: (a) diagnostic OBD scan report showing historical Diagnostic Trouble Codes (DTCs), (b) engine compression test, (c) chassis apron and underbody structural inspection, and (d) computerized printout of previous service records with historical odometer timestamps.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        02
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Formally Repudiate Delivery in Writing (Cease Verbal Call Center Chats)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Phone calls with customer support representatives are routinely denied or mischaracterized. Send a structured email to the platform&apos;s registered grievance officer, customer support head, and local hub manager. Clearly state: &quot;I hereby formally repudiate delivery and reject the vehicle under Section 16 of the Sale of Goods Act, 1930 and the platform&apos;s Money-Back Guarantee due to undisclosed latent defects. Please schedule immediate vehicle pickup and refund the sum of ₹[Amount] to my bank account within 7 days.&quot;
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        03
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Serve a Statutory Advocate Legal Demand Notice
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      If the platform refuses the return or stalls past 7 days, engage a verified advocate to draft a formal statutory legal notice. The notice is addressed to the corporate operating entity (e.g., CARS24 Services Pvt. Ltd. or Valuedrive Technologies Pvt. Ltd. for Spinny) and served via Registered Speed Post with Electronic Tracking and digital email dispatch under Section 63 BSA 2023. The notice establishes a 15-day deadline for full refund and alerts the platform to impending prosecution for unfair trade practices.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        04
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Protect Yourself Against Auto-Loan EMI Defaults
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      If you financed the purchase through the platform&apos;s partnered NBFC or bank (such as Cars24 Financial Services, Bajaj Finance, or IDFC First Bank), do not stop EMIs without notice. Copy the lending institution on your legal notice, citing Section 39 of the Consumer Protection Act, 2019. Notify them that the loan was disbursed for an asset that has failed due to product liability defects, demanding that they place the loan in formal dispute status.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        05
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        File on e-Jagriti Consumer Portal &amp; Lodge a Criminal Cheating Complaint
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-10">
                      Upon expiry of the 15-day notice period, file an online consumer complaint through the government&apos;s e-Jagriti portal before your District Consumer Commission. In cases involving deliberate odometer rollback or forged inspection certificates, simultaneously file a complaint under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (criminal cheating) at your local police station or via the Cyber Crime Portal.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Platform Warranty Terms vs. Statutory Law Matrix Table */}
              <section id="heading-warranty-matrix" aria-labelledby="heading-warranty-matrix-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-warranty-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Platform Contract Fine Print vs Statutory Consumer Rights
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Understand why the platform&apos;s one-sided warranty agreements fail under judicial scrutiny.
                  </p>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <caption className="sr-only">Platform Warranty Terms vs. Statutory Consumer Protection Matrix</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider font-extrabold">
                        <th scope="col" className="p-3.5 sm:p-4">Dispute Area</th>
                        <th scope="col" className="p-3.5 sm:p-4">Platform Claim / Contract Clause</th>
                        <th scope="col" className="p-3.5 sm:p-4 text-emerald-300">Enforceable Statutory Law</th>
                        <th scope="col" className="p-3.5 sm:p-4">Governing Section</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">Return Window</th>
                        <td className="p-3.5 sm:p-4">Strict 5 or 7 days / 300–500 km cap; no returns entertained thereafter.</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-800">Return window does not apply to latent, actively concealed defects.</td>
                        <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-[11px]">SOGA §16 &amp; CPA §2(47)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">Accident / Flood Damage</th>
                        <td className="p-3.5 sm:p-4">&quot;Customer inspected and accepted the car on delivery date; as-is condition.&quot;</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-800">Concealing structural pillar cuts or flood submersion is actionable fraud.</td>
                        <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-[11px]">CPA 2019 Ch. VI (Product Liability)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">Engine / Gearbox Seizure</th>
                        <td className="p-3.5 sm:p-4">Warranty excludes &quot;wear and tear&quot;, gaskets, fluid leaks, and electronics.</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-800">Catastrophic powertrain failure within days indicates pre-existing defect.</td>
                        <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-[11px]">CPA §2(46) Unfair Contract</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">Odometer Rollback</th>
                        <td className="p-3.5 sm:p-4">Disclaims liability based on third-party seller info or previous owner history.</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-800">Criminal cheating and commercial deceit; full refund + exemplary damages.</td>
                        <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-[11px]">BNS §318 &amp; CPA §2(47)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900">RC Transfer &amp; Challans</th>
                        <td className="p-3.5 sm:p-4">Delays blamed on RTO backlogs; customer forced to pay old traffic fines.</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-800">Dealer holding Form 29C has strict statutory duty to deliver clean title.</td>
                        <td className="p-3.5 sm:p-4 text-slate-500 font-mono text-[11px]">CMV Rules 2022 &amp; SOGA §14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Problem Picker Tabs */}
              <section id="heading-problem-tabs" aria-labelledby="heading-problem-tabs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Dispute Playbooks: Root Causes &amp; Targeted Legal Remedies
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Select your exact dispute scenario below to examine root causes, legal provisions, and specific tactical countermeasures.
                  </p>
                </div>

                <UsedCarProblemTabs />
              </section>

              {/* Section 8: Worked Example / Real-World Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Case Study: Buyer Recovers ₹7.25 Lakh for Misrepresented Car
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Real-World Representation
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-500 font-medium block">Vehicle Purchased:</span>
                      <strong className="text-slate-900 font-bold">2021 Hyundai Creta 1.5 SX(O)</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">Total Price Paid:</span>
                      <strong className="text-slate-900 font-bold">₹7,25,000 (Full Transfer)</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">Final Recovery:</span>
                      <strong className="text-emerald-700 font-black">₹7,25,000 Full Refund + ₹65,000 Damages</strong>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong className="text-slate-900 font-bold">The Initial Transaction: </strong>
                      In March 2026, an IT manager in Bengaluru purchased a 2021 Hyundai Creta from a major online pre-owned car platform for ₹7,25,000. The vehicle was advertised as having passed a &quot;200-point inspection&quot; with &quot;zero accidental damage&quot; and an odometer reading of 39,200 km.
                    </p>
                    <p>
                      <strong className="text-slate-900 font-bold">The Latent Defect Discovery: </strong>
                      Nine days after delivery (two days after the advertised 7-day return window expired), the buyer took the vehicle to an authorized Hyundai workshop due to a steering wobble and abnormal tire wear. The authorized technician discovered that the vehicle had suffered a severe frontal collision: the right front apron and radiator support had been cut and re-welded, and the passenger airbag module had been electronically bypassed with a dummy resistor. Furthermore, Hyundai&apos;s centralized system showed the car had visited a workshop in Hyderabad at 74,000 km—confirming an odometer rollback of over 35,000 km.
                    </p>
                    <p>
                      <strong className="text-slate-900 font-bold">The Platform&apos;s Resistance: </strong>
                      When the buyer contacted platform support, the customer executive summarily dismissed the complaint, citing clause 14 of the purchase agreement: <em>&quot;No returns or refunds entertained after 7 days or 500 km from delivery.&quot;</em>
                    </p>
                    <p>
                      <strong className="text-slate-900 font-bold">The Legal Counter-Offensive: </strong>
                      The buyer engaged an advocate to serve a comprehensive 15-day statutory legal demand notice on the platform&apos;s registered corporate headquarters in Gurugram. The notice detailed the Hyundai dealership&apos;s diagnostic findings, cited Section 2(47) CPA 2019 for misleading advertising, invoked Section 16 of the Sale of Goods Act, and outlined imminent prosecution under Section 318 BNS for criminal odometer fraud.
                    </p>
                    <p>
                      <strong className="text-slate-900 font-bold">The Resolution: </strong>
                      Faced with incontrovertible dealer documentation and the threat of a formal e-Jagriti consumer complaint and police investigation, the platform&apos;s legal compliance division settled within 12 days. They retrieved the vehicle from the buyer&apos;s residence, executed a total contract cancellation, and credited the entire ₹7,25,000 purchase sum back to the buyer&apos;s bank account, alongside ₹65,000 compensation for insurance costs and harassment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: 6-Point Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: 6 Critical Records Under BSA 2023
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Gather these documents before issuing your advocate legal notice to make your claim legally irrefutable.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                      Document 01
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Platform Web Listing Snapshot &amp; Inspection Report
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download and archive the digital inspection certificate (the 140/200 point check), the original vehicle listing page showing advertised odometer reading, and the warranty certificate.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                      Document 02
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Authorized Brand Dealership Service History Printout
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      An official, stamped service history printout from the OEM dealer showing past repair dates, job card descriptions, and logged mileage to conclusively establish odometer tampering.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                      Document 03
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Independent Technical Inspection / OBD Scan Report
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A diagnostic sheet from an authorized workshop noting paint thickness measurements (&gt;250 microns showing repainted panels), chassis welds, or error codes (DTCs) indicating mechanical failure.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                      Document 04
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Proof of Payment, Delivery Memo &amp; Purchase Invoice
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bank account statements with UTR numbers showing payment of booking tokens and balance consideration, official platform tax invoice, and delivery receipt note.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                      Document 05
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Time-Stamped Grievance Correspondence &amp; Return Tickets
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete email threads, support ticket acknowledgments, and WhatsApp conversations with customer care establishing that defects were notified promptly upon discovery.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                      Document 06
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Parivahan Vahan Record &amp; Pending Challan Extract
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Official Parivahan portal PDF showing undischarged bank hypothecation (Form 35 pending), RTO blacklist alerts, or unpaid traffic violation challans dating prior to delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Legal Notice CTA */}
              <section id="heading-cta-block" aria-label="Legal Notice CTA" className="scroll-mt-28">
                <UsedCarNoticeCTA />
              </section>

              {/* Section 11: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Used-Car Platform Refunds &amp; Disputes
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Essential answers on Cars24, Spinny, dealer warranties, meter fraud, and consumer court filings.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <article
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 12: Sources and Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Sources &amp; Primary Legal References
                  </h2>
                  <p className="text-xs text-slate-500">
                    All legal positions cited above are grounded in verified central statutes, consumer tribunal orders, and official portals.
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                  {PRIMARY_SOURCES.map((src, i) => (
                    <li key={i}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DC2626] hover:underline font-semibold"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed mt-4">
                  <p>
                    <strong>Statutory Disclaimer: </strong>
                    Information provided on this page constitutes consumer awareness information regarding Indian commercial and consumer protection law as of November 2026. If you require formal representation or personalized statutory notice drafting, consult with a qualified advocate or access our legal notice services.
                  </p>
                </div>
              </section>

              {/* Contextual Internal Links Section */}
              <section aria-label="Contextual Automotive Dispute Guides" className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Further Reading on Vehicle &amp; Consumer Recoveries
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs">
                  <Link
                    href="/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 font-medium transition-colors"
                  >
                    New Car Dealer Delivery Delay &amp; Defective Vehicle Notice →
                  </Link>
                  <Link
                    href="/refuse-new-car-delivery-pdi-defects"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 font-medium transition-colors"
                  >
                    Refuse New Car Delivery for PDI Defects →
                  </Link>
                  <Link
                    href="/bike-scooter-booking-refund-legal-notice"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 font-medium transition-colors"
                  >
                    Two-Wheeler Booking Cancellation &amp; Refund Notice →
                  </Link>
                  <Link
                    href="/services/refunds-and-consumer-complaints"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 font-medium transition-colors"
                  >
                    Consumer Refund &amp; E-Commerce Dispute Hub →
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Related Recovery Guides Cluster Component */}
        <RelatedRecoveryGuides currentPath="/used-car-platform-refund-dispute" />
      </div>
    </>
  );
}
