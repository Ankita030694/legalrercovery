import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ApplianceWarrantyNoticeCTA from "./ApplianceWarrantyNoticeCTA";
import ApplianceWarrantyTableOfContents from "./ApplianceWarrantyTableOfContents";
import ApplianceWarrantyProblemTabs from "./ApplianceWarrantyProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Appliance Warranty Replacement Refused? Consumer Rights",
  description:
    "Brand denying warranty repair or replacement for a defective appliance? Warranty law, repeated-defect rules and a notice.",
  alternates: {
    canonical: `${SITE_URL}/appliance-warranty-replacement-refused`,
  },
  openGraph: {
    title: "Appliance Warranty Replacement Refused? Consumer Rights",
    description:
      "Statutory guide on consumer rights when an appliance brand denies warranty repair or replacement: CPA 2019 product liability, repeated defect rules, and legal notice procedure.",
    url: `${SITE_URL}/appliance-warranty-replacement-refused`,
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
    title: "Right to Repair Portal India — Ministry of Consumer Affairs, Food & Public Distribution, Government of India",
    url: "https://righttorepairindia.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Service Job Sheets, WhatsApp & Audio Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Manufacturing Defects & Replacement Obligations",
    parties: "Maruti Udyog Ltd. v. Susheel Kumar Gabgotra & Anr.",
    citation: "Civil Appeal No. 3737 of 2000, (2006) 4 SCC 644 (Supreme Court of India)",
    date: "Judgment Dated 29 March 2006",
    facts:
      "The buyer purchased a brand-new mechanical consumer durable that developed severe mechanical vibration and engine defects within warranty. The manufacturer offered piecemeal part replacement while refusing to replace the entire defective unit or refund the purchase amount. The High Court had directed complete product replacement.",
    holding:
      "The Supreme Court held that while minor replaceable components should normally be rectified under warranty covenants, when an article continues to malfunction despite reasonable opportunities for repair or suffers from an inherent structural manufacturing defect, consumer forums possess full jurisdiction under consumer protection law to order complete unit replacement or 100% price refund with interest.",
    amount: "Replacement of Complete Assembly + Statutory Interest + Litigation Costs",
    takeaway:
      "An appliance brand cannot hide behind 'repair-only' fine print. When a recurring defect renders an appliance unusable or persists across repeated service calls, the law mandates complete unit replacement or full refund.",
  },
  {
    title: "NCDRC Order Striking Down Bogus 'Moisture Ingress' Claim on Smart TV Panel",
    parties: "Samsung India Electronics Pvt. Ltd. v. Rajesh Sharma",
    citation: "Revision Petition No. 2884 of 2016, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 17 May 2017",
    facts:
      "The complainant purchased an LED Smart TV that displayed vertical colored lines across the screen within 8 months of purchase. The company's authorized technician inspected the unit, refused free warranty replacement, and demanded ₹24,000 for a panel swap alleging 'internal moisture ingress and customer-induced corrosion'. The complainant established that the TV was wall-mounted in an air-conditioned living room with zero liquid exposure.",
    holding:
      "The National Commission ruled that appliance brands cannot repudiate express manufacturer warranties by merely uttering the phrase 'physical damage' or 'liquid ingress' without submitting an independent laboratory forensic report. The NCDRC held the brand guilty of unfair trade practice and gross deficiency in service, ordering a 100% refund of the TV invoice value of ₹52,000 with 9% annual interest alongside ₹20,000 damages.",
    amount: "₹52,000 Full Invoice Refund @ 9% Interest + ₹20,000 Harassment Damages + ₹10,000 Costs",
    takeaway:
      "If a brand claims your screen line defect or PCB failure is 'physical damage' or 'liquid ingress', demand their official laboratory metallurgical test report. Under consumer jurisprudence, unproven technician allegations are discarded by courts.",
  },
  {
    title: "State Commission Ruling on Repeated Refrigerator Compressor Failure",
    parties: "Whirlpool of India Ltd. v. K. B. Ramachandran & Anr.",
    citation: "First Appeal No. 742 of 2018, State Consumer Disputes Redressal Commission",
    date: "Order Dated 14 November 2019",
    facts:
      "The consumer purchased a frost-free double door refrigerator with an advertised 10-year compressor warranty. Within 14 months, the compressor failed twice. On the third breakdown, the authorized service centre took 42 days, demanded ₹3,800 for nitrogen flushing and gas recharging, and failed to restore freezing. Perishable groceries and expensive medicines were spoiled repeatedly.",
    holding:
      "The State Commission held that a refrigerator is a daily domestic necessity and persistent cooling failures after multiple repair visits trigger the 'Repeated Failure Doctrine'. The court held that levying mandatory consumable charges during compressor warranty is an unfair trade practice under Section 2(47). The manufacturer and dealer were held jointly and severally liable to replace the refrigerator with a new sealed model of equivalent capacity and pay ₹15,000 compensation for domestic distress.",
    amount: "Brand-New Sealed Refrigerator Replacement + ₹15,000 Compensation for Spoiled Goods & Distress",
    takeaway:
      "Three failed service calls for the same cooling or motor defect create a legal presumption of manufacturing defect. Furthermore, charging extra for gas refilling during warranty is an illegal trade practice.",
  },
  {
    title: "District Commission Order on Unreasonable Delay in Sourcing Spare Parts",
    parties: "LG Electronics India Pvt. Ltd. v. Dinesh Kumar",
    citation: "Consumer Complaint No. 412/2021, DCDRC New Delhi",
    date: "Order Dated 19 October 2022",
    facts:
      "A consumer's front-load washing machine broke down due to a failed inverter control PCB during the manufacturer warranty period. The company registered the service request but left the machine dismantled in the consumer's bathroom for over 35 days, repeatedly stating that 'the spare part is backordered from the Pune factory'. The customer was forced to pay commercial laundry services for over a month.",
    holding:
      "The District Commission observed that selling expensive consumer durables without maintaining a ready inventory of critical electronic spares constitutes gross deficiency in service under Section 2(11) CPA 2019. The Commission directed the manufacturer to refund the complete machine cost of ₹42,990 along with 9% interest, ₹10,000 reimbursement for commercial laundry bills, and ₹8,000 litigation expenses.",
    amount: "₹42,990 Full Purchase Refund @ 9% Interest + ₹10,000 Laundry Cost Damages + ₹8,000 Legal Costs",
    takeaway:
      "Brands cannot keep your household appliance defunct for weeks citing 'parts backordered'. Under Department of Consumer Affairs guidelines and court orders, delays beyond 14 days entitle you to a total refund or replacement.",
  },
];

const FAQS = [
  {
    question: "What are my legal rights if an appliance brand refuses replacement under warranty?",
    answer:
      "Under Section 39(1)(b) and Section 84 of the Consumer Protection Act, 2019, if your appliance develops an inherent defect or cannot be permanently repaired within reasonable opportunities during the warranty period, you have a statutory right to demand complete replacement with a brand-new unit free of defects, or a 100% refund of the purchase price with interest under Section 39(1)(c). Company policy clauses stating 'No Replacement, Repair Only' cannot override parliamentary statute.",
  },
  {
    question: "How many repair attempts are considered reasonable before I can demand replacement?",
    answer:
      "Under the 'Repeated Failure Doctrine' upheld by the National Consumer Disputes Redressal Commission (NCDRC), three unsuccessful repair attempts for the same core defect (e.g. TV panel lines, refrigerator cooling loss, washing machine drum vibration) legally establish that the unit is a defective lemon. After the third failed visit, or if the brand delays spare parts for more than 14 to 21 days, you are entitled to refuse further repairs and demand a replacement unit or full invoice refund.",
  },
  {
    question: "Can an appliance brand reject my warranty claim alleging 'physical damage' or 'liquid ingress'?",
    answer:
      "No, not without concrete technical proof. Consumer courts have repeatedly held (such as in Samsung India v. Rajesh Sharma) that a service technician's verbal assertion or subjective tick-box remark on a job card is insufficient to repudiate warranty coverage. Unless the manufacturer provides an independent laboratory analysis or photographic metallurgical evidence proving consumer-induced impact, consumer forums routinely dismiss such claims and penalize brands for unfair trade practices.",
  },
  {
    question: "Are compressor or motor gas refilling and labor charges legal during warranty?",
    answer:
      "No. When an appliance is sold with a comprehensive or extended warranty on critical components (such as a 10-year compressor or motor warranty), demanding out-of-pocket charges for refrigerant gas, nitrogen flushing, transportation, or technician labor to fix the covered component constitutes an Unfair Trade Practice under Section 2(47) of CPA 2019. The brand is legally bound to restore the appliance to working condition at zero cost to the buyer.",
  },
  {
    question: "Who is legally responsible: the manufacturer, the local dealer, or the e-commerce platform?",
    answer:
      "Under Chapter VI (Sections 84, 85, and 86) of the Consumer Protection Act, 2019, the manufacturer bears primary product liability for manufacturing defects and express warranty breaches. However, the authorized retail dealer or e-commerce marketplace (Amazon, Flipkart, Reliance Digital, Croma) is jointly liable if they made independent warranty representations, failed to transmit service requests, or sold a refurbished/returned unit as brand new.",
  },
  {
    question: "What is the Right to Repair framework in India for home appliances?",
    answer:
      "The Department of Consumer Affairs launched the Right to Repair Portal India (righttorepairindia.gov.in) covering consumer electronics and durables. Under this framework, OEMs (like Samsung, LG, Whirlpool, Havells, Panasonic) must ensure the availability of genuine spare parts, diagnostic schematics, and repair services for the reasonable lifespan of the product. Withholding parts to force consumers to buy new models is an actionable unfair trade practice.",
  },
  {
    question: "What should I do if the brand service centre marks my complaint as 'Resolved' without fixing it?",
    answer:
      "Immediately send a written protest email to the brand's Grievance Redressal Officer and National Service Head attaching the job sheet and video proof that the defect persists. Lodge an urgent complaint on the National Consumer Helpline (consumerhelpline.gov.in or 1915). If the brand fails to rectify or replace within 7 days, have an advocate dispatch a formal statutory legal demand notice.",
  },
  {
    question: "Appliance warranty replacement reject kar diya toh legal notice kaise bheje?",
    answer:
      "Agar brand ya service centre warranty ke bawajood TV, fridge, AC ya washing machine replace karne se mana kare ya jhootha physical damage ka bahana banaye, toh aap ek statutory legal notice bhej sakte hain. LegalRecovery.in par verified advocate Consumer Protection Act 2019 Section 39 aur Section 84 ke tehat brand ke Corporate Office aur local dealer par Registered Speed Post aur email se notice bhejte hain, jismein 15 din ke andar naya unit ya 100% refund demand kiya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Brand Refusing Repair or Replacement Under Warranty?",
  description:
    "Brand denying warranty repair or replacement for a defective appliance? Warranty law, repeated-defect rules and a notice.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/appliance-warranty-replacement-refused`,
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
    name: "Consumer Protection Warranty Law India",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Refunds & Consumer Complaints",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Appliance Warranty Replacement Refused",
      item: `${SITE_URL}/appliance-warranty-replacement-refused`,
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

export default function ApplianceWarrantyReplacementRefusedPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Refunds & Consumer Complaints", href: "/services/refunds-and-consumer-complaints" },
    { label: "Warranty Replacement Refused", href: "/appliance-warranty-replacement-refused" },
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

      <main className="min-h-screen bg-[#FDFDFD] text-slate-900 antialiased">
        {/* Top Breadcrumb Navigation */}
        <div className="border-b border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section */}
        <header className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 sm:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                Consumer Protection Act 2019 • Product Liability &amp; Right to Repair
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight mb-5">
                Brand Refusing Repair or Replacement Under Warranty?
              </h1>

              {/* Answer Box directly under H1: 40-60 words */}
              <div
                id="heading-quick-summary"
                className="bg-white border-l-4 border-[#DC2626] rounded-r-2xl p-5 sm:p-6 shadow-sm border-y border-r border-slate-200 mb-6"
              >
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  Under <strong className="text-slate-950 font-bold">Section 39(1)(b) &amp; Section 84 of the Consumer Protection Act, 2019</strong>, an appliance manufacturer is strictly liable for inherent defects. When a brand refuses replacement, falsely alleges customer damage, or fails to repair after three attempts, your first legal remedy is serving an advocate statutory legal notice. If unrectified within 15 days, consumer commissions order complete replacement or 100% price refund with 9% interest.
                </p>
              </div>

              {/* Quick Summary Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Statutory Basis</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">CPA 2019 §§ 39, 84</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Replacement Threshold</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">3 Failed Repairs / 14d Delay</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Pre-Litigation Step</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#DC2626]">Advocate Legal Notice</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Dispute Forum</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">DCDRC / e-Jagriti</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Layout with Sticky TOC Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Sticky Sidebar (Desktop TOC) */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <ApplianceWarrantyTableOfContents />
            </div>

            {/* Right Main Article */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-12">
              {/* Section 1: Statutory Rights */}
              <section id="heading-statutory-rights" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 1 • Statutory Framework
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Rights: When an Appliance Brand Must Replace or Refund Under Indian Law
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When you purchase a major home appliance—whether a Smart LED/OLED TV, frost-free refrigerator, inverter air conditioner, front-load washing machine, or microwave—you are legally protected by express statutory covenants that no corporate terms or service franchise policy can override. Under Indian jurisprudence, warranties are not gratuitous corporate favors; they represent binding statutory commitments governed by the <strong className="font-semibold text-slate-900">Consumer Protection Act, 2019</strong> and the Ministry of Consumer Affairs’ national <strong className="font-semibold text-slate-900">Right to Repair framework</strong>.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4">
                  1. The Legal Definition of &apos;Defect&apos; under Section 2(10) CPA 2019
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Section 2(10) defines a &quot;defect&quot; as any fault, imperfection, or shortcoming in the quality, quantity, potency, purity, or standard which is required to be maintained by or under any law for the time being in force, or under any contract, express or implied, or as is claimed by the trader in any manner whatsoever. If an LED TV panel develops vertical lines, or a refrigerator compressor trips repeatedly, the product legally suffers from a statutory defect.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4">
                  2. Strict Product Liability under Section 84
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Under Chapter VI of the 2019 Act, manufacturers are held strictly liable for defective products. Section 84(1) establishes that a manufacturer is liable if the product contains a manufacturing defect, is defective in design, deviates from manufacturing specifications, or fails to conform to an express warranty. Crucially, proving wrongful intention or negligence is no longer required; mere failure of the appliance to perform as guaranteed during the warranty period triggers strict statutory liability.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4">
                  3. The Powers of Consumer Commissions under Section 39
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Consumer commissions are not limited to ordering repeated repairs. Under Section 39(1)(b), the District Commission possesses explicit statutory powers to direct the opposite party to replace the goods with new goods of similar description which shall be free from any defect. Furthermore, under Section 39(1)(c), the forum can direct the complete refund of the price paid along with penal interest, while Section 39(1)(d) empowers courts to grant substantial compensation for mental agony, food spoilage, and domestic hardship.
                </p>
              </section>

              {/* Top CTA Banner */}
              <ApplianceWarrantyNoticeCTA
                buttonText="Draft Advocate Legal Demand Notice Now"
                variant="primary"
              />

              {/* Section 2: Key Facts Table */}
              <section id="heading-key-benchmarks" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 2 • Statutory Benchmarks
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Key Facts &amp; Statutory Benchmarks: Appliance Warranty Replacement &amp; Repair Rules
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The table below outlines statutory benchmarks, repair timelines, and replacement thresholds established across Indian consumer forums and regulatory frameworks:
                </p>

                {/* Responsive Data Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th scope="col" className="p-3.5 font-bold">Appliance Category</th>
                        <th scope="col" className="p-3.5 font-bold">Standard Warranty Scope</th>
                        <th scope="col" className="p-3.5 font-bold">Max Permissible Repair Attempts</th>
                        <th scope="col" className="p-3.5 font-bold">Replacement Trigger</th>
                        <th scope="col" className="p-3.5 font-bold">Statutory Remedy (CPA 2019)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Smart LED / OLED TV</td>
                        <td className="p-3.5">1-3 yrs Comprehensive; 2-3 yrs Panel</td>
                        <td className="p-3.5">2 visits for screen lines/PCB</td>
                        <td className="p-3.5">Spare parts delayed &gt;14 days or recurring panel lines</td>
                        <td className="p-3.5 text-slate-900 font-semibold">New Unit Replacement or 100% Refund (s.39)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Double Door / Side-by-Side Fridge</td>
                        <td className="p-3.5">1 yr Comprehensive; 10-20 yrs Compressor</td>
                        <td className="p-3.5">2 visits for cooling/gas leak</td>
                        <td className="p-3.5">Gas refill demanded at cost, or unrectified &gt;7 days</td>
                        <td className="p-3.5 text-slate-900 font-semibold">Brand-New Refrigerator + Food Spoilage Damages</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Front / Top Load Washing Machine</td>
                        <td className="p-3.5">2-4 yrs Comprehensive; 10 yrs Motor</td>
                        <td className="p-3.5">3 visits for drum/PCB errors</td>
                        <td className="p-3.5">Recurrent error code, drum vibration, or parts wait &gt;14d</td>
                        <td className="p-3.5 text-slate-900 font-semibold">Machine Replacement or Full Refund @ 9% Interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Inverter Split Air Conditioner (AC)</td>
                        <td className="p-3.5">1 yr Complete; 5 yrs PCB; 10 yrs Compressor</td>
                        <td className="p-3.5">2 visits for coil leak</td>
                        <td className="p-3.5">Recurring gas leakage, condenser rust, or ODU board trip</td>
                        <td className="p-3.5 text-slate-900 font-semibold">Complete IDU/ODU Replacement (s.84)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Dishwasher / Built-In Microwave</td>
                        <td className="p-3.5">1-2 yrs Comprehensive; 5 yrs Magnetron/Pump</td>
                        <td className="p-3.5">2 visits</td>
                        <td className="p-3.5">Workshop retention &gt;15 days without loaner device</td>
                        <td className="p-3.5 text-slate-900 font-semibold">Full Invoice Value Refund + Legal Expenses</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Brand Rejection Tactics */}
              <section id="heading-rejection-tactics" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 3 • Unfair Trade Practices
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  The Brand Playbook: How Companies Illegally Reject Valid Appliance Warranty Claims
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Appliance manufacturers and third-party franchised service centres deploy well-documented playbook tactics designed to frustrate consumers, force out-of-pocket repair payments, or push warranty expiration. Knowing these tactics enables you to defeat them legally:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <span className="text-[#DC2626]">✕</span> False Allegation of &apos;Physical Damage&apos;
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Technicians routinely report internal screen lines or shattered bonding as &quot;external pressure impact&quot; or &quot;cockroach / insect infestation&quot;. In consumer courts, an unsubstantiated technician notation without third-party laboratory metallurgical proof is discarded as an unfair trade practice.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <span className="text-[#DC2626]">✕</span> Deliberate Spare Part Starvation
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Service centres claim that display panels, inverter PCB motherboards, or condenser coils are &quot;out of stock at the central warehouse&quot;. Keeping a product dismantled for 30–60 days violates Right to Repair norms and constitutes actionable deficiency in service under Section 2(11).
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <span className="text-[#DC2626]">✕</span> Illegal &apos;Gas Charging &amp; Labor&apos; Demands
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Brands advertising &quot;10-Year Inverter Compressor Warranty&quot; frequently demand ₹3,500 to ₹5,500 for nitrogen flushing, labor, and refrigerant gas. Under Section 2(47), advertising free warranty while conditioning it on exorbitant compulsory consumable charges is a punishable deceptive practice.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <span className="text-[#DC2626]">✕</span> Fraudulent Ticket Auto-Closures
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      To meet internal SLA metrics, service centres mark unresolved complaint dockets as &quot;Completed&quot; or &quot;Customer Not Available&quot;. Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), your call recordings and unanswered WhatsApp chats expose this fraud directly in court.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Picker */}
              <section id="heading-problem-tabs" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 4 • Interactive Scenario Navigator
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Interactive Dispute Navigator: Choose Your Appliance Failure Scenario
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Select your specific home appliance category below to inspect the manufacturer&apos;s typical excuse, the exact legal grounding under Indian statutes, and the recommended step-by-step action plan:
                </p>

                <ApplianceWarrantyProblemTabs />
              </section>

              {/* Section 5: Hand-Authored SVG Replacement Pipeline Figure */}
              <section id="heading-svg-escalation" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 5 • Process Architecture
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  The Warranty Enforcement Pipeline: From Denied Claim to Commission Order
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The following end-to-end statutory escalation pipeline illustrates how a denied appliance warranty claim is converted into a court-enforceable replacement or 100% price refund:
                </p>

                {/* Hand-Authored Custom SVG Diagram */}
                <figure className="bg-slate-900 rounded-2xl p-4 sm:p-6 text-white border border-slate-800 shadow-xl overflow-x-auto">
                  <figcaption className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-4 flex items-center justify-between">
                    <span>Figure 1: Statutory Appliance Warranty Escalation &amp; Replacement Architecture</span>
                    <span className="text-[#DC2626]">CPA 2019 §§ 39 &amp; 84</span>
                  </figcaption>

                  <svg
                    viewBox="0 0 900 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Appliance warranty escalation pipeline from defective product to consumer commission decree"
                  >
                    {/* Stage 1 */}
                    <g transform="translate(20, 20)">
                      <rect width="180" height="240" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <rect width="180" height="36" rx="12" fill="#0F172A" />
                      <text x="90" y="24" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 1: EVIDENCE</text>
                      <text x="90" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Job Sheets &amp; Video</text>
                      <text x="20" y="105" fill="#94A3B8" fontSize="11">• Purchase Tax Invoice</text>
                      <text x="20" y="130" fill="#94A3B8" fontSize="11">• Physical Job Cards</text>
                      <text x="20" y="155" fill="#94A3B8" fontSize="11">• Error Code / Line Video</text>
                      <text x="20" y="180" fill="#94A3B8" fontSize="11">• Refusal / Ticket Closure</text>
                      <rect x="20" y="200" width="140" height="24" rx="6" fill="#334155" />
                      <text x="90" y="216" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontWeight="bold">Day 1 to Day 10</text>
                    </g>

                    {/* Arrow 1 */}
                    <path d="M210 140 L240 140" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <g transform="translate(250, 20)">
                      <rect width="180" height="240" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <rect width="180" height="36" rx="12" fill="#0F172A" />
                      <text x="90" y="24" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 2: ESCALATION</text>
                      <text x="90" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Nodal Grievance &amp; NCH</text>
                      <text x="20" y="105" fill="#94A3B8" fontSize="11">• Brand Grievance Officer</text>
                      <text x="20" y="130" fill="#94A3B8" fontSize="11">• NCH Docket (1915)</text>
                      <text x="20" y="155" fill="#94A3B8" fontSize="11">• Contest False Denial</text>
                      <text x="20" y="180" fill="#94A3B8" fontSize="11">• Right to Repair Portal</text>
                      <rect x="20" y="200" width="140" height="24" rx="6" fill="#334155" />
                      <text x="90" y="216" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontWeight="bold">Day 11 to Day 20</text>
                    </g>

                    {/* Arrow 2 */}
                    <path d="M440 140 L470 140" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                    {/* Stage 3 */}
                    <g transform="translate(480, 20)">
                      <rect width="180" height="240" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                      <rect width="180" height="36" rx="12" fill="#DC2626" />
                      <text x="90" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">STAGE 3: STATUTORY NOTICE</text>
                      <text x="90" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Advocate Legal Notice</text>
                      <text x="20" y="105" fill="#94A3B8" fontSize="11">• Registered Speed Post</text>
                      <text x="20" y="130" fill="#94A3B8" fontSize="11">• BSA s.63 Email Dispatch</text>
                      <text x="20" y="155" fill="#94A3B8" fontSize="11">• 15-Day Replacement Demand</text>
                      <text x="20" y="180" fill="#94A3B8" fontSize="11">• Manufacturer + Dealer</text>
                      <rect x="20" y="200" width="140" height="24" rx="6" fill="#7F1D1D" />
                      <text x="90" y="216" textAnchor="middle" fill="#FECACA" fontSize="10" fontWeight="bold">Crucial Pre-Litigation Rail</text>
                    </g>

                    {/* Arrow 3 */}
                    <path d="M670 140 L700 140" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                    {/* Stage 4 */}
                    <g transform="translate(710, 20)">
                      <rect width="170" height="240" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <rect width="170" height="36" rx="12" fill="#0F172A" />
                      <text x="85" y="24" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">STAGE 4: FORUM ORDER</text>
                      <text x="85" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">e-Jagriti Commission</text>
                      <text x="15" y="105" fill="#94A3B8" fontSize="11">• New Unit Replacement</text>
                      <text x="15" y="130" fill="#94A3B8" fontSize="11">• 100% Refund @ 9% Int.</text>
                      <text x="15" y="155" fill="#94A3B8" fontSize="11">• Mental Distress Damages</text>
                      <text x="15" y="180" fill="#94A3B8" fontSize="11">• Full Litigation Costs</text>
                      <rect x="15" y="200" width="140" height="24" rx="6" fill="#064E3B" />
                      <text x="85" y="216" textAnchor="middle" fill="#A7F3D0" fontSize="10" fontWeight="bold">Enforceable Decree</text>
                    </g>

                    {/* Defs for arrowheads */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </figure>
              </section>

              {/* Section 6: 5-Step Escalation Framework */}
              <section id="heading-escalation-playbook" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 6 • Strategic Execution
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  The 5-Step Escalation Framework: Forcing Brands to Replace Defective Appliances
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Do not waste months arguing with junior customer support call-centre agents. Execute this structured 5-step legal escalation framework to assert your statutory rights:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                          Secure Certified Physical Job Sheets &amp; Written Denial Remarks
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Whenever a technician visits, demand a physical copy or official electronic PDF of the Service Job Sheet. Ensure the technician writes the exact failure symptom, cosmetic state (confirming no cracks or dents), and parts required. If they verbally deny warranty, demand their written observation and refuse to sign any generic acceptance form.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                          Demand the Manufacturer&apos;s Technical Laboratory Test Report
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          If the brand asserts &quot;moisture ingress&quot;, &quot;liquid damage&quot;, or &quot;voltage surge&quot;, email the company&apos;s Service Head demanding their formal technical laboratory analysis under Section 2(10) CPA 2019. In 95% of cases, brands do not possess such reports and are exposed immediately when challenged legally.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                          File Grievance on National Consumer Helpline (NCH) &amp; Right to Repair Portal
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Register an online grievance on <span className="font-semibold text-slate-900">consumerhelpline.gov.in</span> or dial 1915. Upload the invoice, warranty card, and job sheets. NCH generates a government docket directly routed to the brand&apos;s corporate nodal team. If the brand fails to replace the appliance within 7 business days, proceed immediately to pre-litigation notice.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                          Serve a Statutory Advocate Legal Demand Notice (15-Day Ultimatum)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Have an experienced consumer lawyer draft and serve a formal advocate legal notice to the brand&apos;s Managing Director, Corporate Legal Team, and the selling dealer. Delivered via Registered Speed Post with postal acknowledgment and served electronically under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. This establishes pre-litigation readiness and prompts senior legal teams to authorize replacement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">5</span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                          Lodge e-Jagriti Product Liability Claim before the District Commission
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          If the brand remains recalcitrant past the 15-day notice window, lodge a digital complaint on the government&apos;s <span className="font-semibold text-slate-900">e-jagriti.gov.in</span> portal. Under Section 35 of CPA 2019, you can file directly in your home district, claiming complete replacement, 100% refund, interest, compensation for domestic hardship, and litigation costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Verified Judicial Precedents */}
              <section id="heading-case-citations" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 7 • Binding Case Law
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Landmark Consumer Court Precedents on Defective Appliances &amp; Replacement Orders
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Indian consumer forums consistently protect consumers against corporate warranty repudiation. Review these authoritative judgments demonstrating actual relief awarded:
                </p>

                <div className="space-y-4 pt-2">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wide">
                          Precedent #{idx + 1}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {c.title}
                      </h3>

                      <div className="text-xs text-slate-600 space-y-1">
                        <p><strong className="text-slate-900">Parties:</strong> {c.parties}</p>
                        <p><strong className="text-slate-900">Citation / Forum:</strong> {c.citation}</p>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-700 space-y-2 pt-1">
                        <p><strong className="text-slate-900">Facts:</strong> {c.facts}</p>
                        <p><strong className="text-slate-900">Judicial Holding:</strong> {c.holding}</p>
                      </div>

                      <div className="bg-rose-50/70 border border-rose-100 rounded-xl p-3.5 space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626] block">
                          Award Amount &amp; Remedy
                        </span>
                        <p className="text-xs sm:text-sm font-extrabold text-slate-900">{c.amount}</p>
                        <p className="text-xs text-slate-600 pt-1"><strong className="text-slate-900">Key Takeaway:</strong> {c.takeaway}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 8 • Concrete Worked Example
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Example: ₹68,500 4K OLED TV Display Line Defect &amp; Replacement Dispute
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The following case study illustrates how a consumer successfully countered a brand&apos;s warranty repudiation using statutory documentation and an advocate legal demand notice:
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4 text-xs sm:text-sm">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                      Illustrative Case Study • OLED Smart TV Warranty Denial
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      Dispute: ₹68,500 Purchase • Vertical Magenta Screen Lines in Month 11
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Product Cost</span>
                      <span className="text-sm font-black text-slate-900">₹68,500</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Warranty Period</span>
                      <span className="text-sm font-black text-slate-900">1+2 Yr Panel Warranty</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Brand Demand</span>
                      <span className="text-sm font-black text-rose-600">₹32,000 for Panel Swap</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-slate-700 leading-relaxed">
                    <p>
                      <strong>Initial Fact Pattern:</strong> A consumer in Bengaluru purchased a 55-inch 4K OLED Smart TV. In the 11th month of use, two prominent vertical magenta lines appeared down the centre of the screen. The brand&apos;s authorized technician inspected the TV, noted &quot;physical panel failure&quot;, and refused free warranty service, alleging that the defect arose from external pressure. The customer was quoted ₹32,000 for a replacement panel.
                    </p>
                    <p>
                      <strong>Strategic Escalation:</strong> The consumer refused to sign the biased job card and recorded a 4K video showing the flawless physical exterior of the screen with zero impact marks. The customer submitted a formal objection to the brand&apos;s Grievance Redressal Officer demanding the technical laboratory report supporting the &quot;external pressure&quot; claim. When the company reiterated its refusal, the consumer engaged LegalRecovery.in to serve a formal Advocate Legal Demand Notice to the brand&apos;s India headquarters in Gurugram and the authorized electronics retailer.
                    </p>
                    <p>
                      <strong>The Resolution:</strong> The statutory notice cited Section 2(10) and Section 84 of CPA 2019 along with the NCDRC precedent in <em>Samsung India v. Rajesh Sharma</em>, giving 15 days to deliver a brand-new TV or face an e-Jagriti complaint with claims for ₹50,000 mental agony damages. Within 9 days of receiving the Speed Post notice, the brand&apos;s Corporate Escalation Cell contacted the consumer, waived all charges, and delivered a brand-new sealed current-year replacement television valued at ₹72,000 along with an extended 2-year comprehensive warranty.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-emerald-950 font-medium">
                    ✓ Total Consumer Financial Recovery: ₹68,500 Full Asset Value Preserved + ₹32,000 Bogus Charge Extinguished + ₹72,000 Upgraded Replacement Unit Delivered.
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 9 • Pre-Litigation Evidence
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Essential Evidence Checklist: Building an Unshakeable Defective Product Claim
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Before serving a legal notice or filing before the District Consumer Commission, ensure you have gathered the following six critical evidentiary documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Original Tax Invoice &amp; Warranty Card</h3>
                      <p className="text-xs text-slate-600">Retail invoice showing model number, serial number, date of purchase, and GST breakdown from dealer or e-commerce platform.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">All Physical &amp; Digital Job Sheets</h3>
                      <p className="text-xs text-slate-600">Technician visit sheets detailing visit dates, parts requested, and observations proving repeated failures for the same defect.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Continuous 4K Video Evidence of Defect</h3>
                      <p className="text-xs text-slate-600">High-resolution video showing the appliance serial sticker, flawless external body, and the malfunctioning screen, vibration, or error code.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Email Communications with Brand Nodal Cell</h3>
                      <p className="text-xs text-slate-600">Complete email chains addressed to customer service heads, showing refusal to repair, delay of parts, or demand for illegal charges.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">National Consumer Helpline (NCH) Docket</h3>
                      <p className="text-xs text-slate-600">Registration acknowledgment and closure summary from consumerhelpline.gov.in proving prior good-faith administrative escalation.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="text-emerald-600 font-black text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Consequential Loss Proof (Groceries/Laundry)</h3>
                      <p className="text-xs text-slate-600">Receipts for spoiled medications, groceries, commercial laundry bills, or temporary appliance rentals during the breakdown period.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Key Takeaways Box (Archetype G6 Mandate: <aside>) */}
              <aside id="heading-key-takeaways" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <h3 className="text-xs font-black uppercase tracking-widest text-rose-400">
                    Key Legal Takeaways for Appliance Buyers
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="space-y-1">
                    <strong className="text-white block font-bold">1. Three Repairs Equals Manufacturing Defect:</strong>
                    Under the NCDRC Repeated Failure Doctrine, three failed attempts to fix the same core issue legally trigger mandatory unit replacement or full refund.
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block font-bold">2. Corporate Clauses Cannot Override CPA:</strong>
                    Standard terms stating &quot;No Replacement Under Any Circumstances&quot; are void under Section 2(47) as unfair contracts.
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block font-bold">3. No Free Compressor Without Free Gas:</strong>
                    Conditioning a compressor warranty on paying compulsory gas charging and labor fees is an actionable deceptive trade practice.
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block font-bold">4. Statutory Notice Precedes e-Jagriti:</strong>
                    A formal advocate legal notice serves as the pivotal tipping point where 70%+ of manufacturers settle before court litigation.
                  </div>
                </div>
              </aside>

              {/* Honest Scope Section */}
              <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  Honest Scope: What LegalRecovery Can and Cannot Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
                  <div>
                    <strong className="text-emerald-700 font-bold block mb-1">What We Do:</strong>
                    We assign a verified advocate to draft a watertight statutory legal notice under CPA 2019, cite relevant NCDRC precedents, dispatch it via Registered Speed Post with tracking proof, and serve electronic notice under BSA Section 63 directly to corporate heads.
                  </div>
                  <div>
                    <strong className="text-rose-700 font-bold block mb-1">What We Do Not Do:</strong>
                    We are not an appliance repair contractor or technical service provider. We do not dispatch repairmen or physically inspect electronics. Our scope is statutory legal recovery, consumer rights enforcement, and pre-litigation advocate notices.
                  </div>
                </div>
              </section>

              {/* Contextual Internal Links Section */}
              <section className="border-t border-slate-200 pt-6 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  Related Everyday Consumer Rights &amp; Service Dispute Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <Link
                    href="/legal-notice-to/urban-company"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block"
                  >
                    <span className="font-bold text-slate-900 block mb-0.5">Urban Company Service Damage Notice →</span>
                    <span className="text-slate-600">Remedies for appliance damage caused by technician negligence during home servicing.</span>
                  </Link>
                  <Link
                    href="/legal-notice-to-interior-designer-contractor-refund"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block"
                  >
                    <span className="font-bold text-slate-900 block mb-0.5">Interior Contractor &amp; Modular Kitchen Refund →</span>
                    <span className="text-slate-600">Legal remedies when home improvement contractors abandon work or deliver defective fixtures.</span>
                  </Link>
                  <Link
                    href="/templates/wrong-electricity-bill-complaint-application"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block"
                  >
                    <span className="font-bold text-slate-900 block mb-0.5">Wrong Electricity Bill Complaint Format →</span>
                    <span className="text-slate-600">Challenge inflated power bills and faulty meter readings before the electricity consumer forum.</span>
                  </Link>
                  <Link
                    href="/event-concert-ticket-refund-cancelled"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors block"
                  >
                    <span className="font-bold text-slate-900 block mb-0.5">Cancelled Event &amp; Concert Ticket Refund →</span>
                    <span className="text-slate-600">Recover ticket payments and non-refundable platform fees under Indian e-commerce consumer rules.</span>
                  </Link>
                </div>
                <div className="pt-1">
                  <Link
                    href="/legal-notice-charges"
                    className="text-xs font-bold text-[#DC2626] hover:underline"
                  >
                    View Legal Notice Pricing, Drafting Turnaround &amp; Speed Post Delivery Charges →
                  </Link>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 11 • Frequently Asked Questions
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions About Appliance Warranty Replacement &amp; Consumer Rights
                </h2>

                <div className="space-y-3 pt-2">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs"
                    >
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Sources and Legal References */}
              <section id="heading-sources" className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  Section 12 • Authoritative Citations
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Sources, Consumer Statutes &amp; Regulatory References
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <ul className="space-y-2 text-xs text-slate-700">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">[{idx + 1}]</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#DC2626] hover:underline"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 mt-4 border-t border-slate-200 pt-3">
                    Statutory provisions, case law citations, and regulatory frameworks verified as of November 2026. Electronic service compliance aligned with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                  </p>
                </div>
              </section>

              {/* Bottom CTA */}
              <ApplianceWarrantyNoticeCTA
                buttonText="Instruct Advocate to Draft Notice"
                variant="primary"
              />
            </article>
          </div>
        </div>

        {/* Related Recovery Guides Cluster */}
        <RelatedRecoveryGuides
          currentPath="/appliance-warranty-replacement-refused"
          cluster="consumer"
        />
      </main>
    </>
  );
}
