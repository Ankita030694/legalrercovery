import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import FlipkartNoticeCTA from "./FlipkartNoticeCTA";

export const metadata: Metadata = {
  title: "Flipkart Not Returning Your Product or Refund? What to Do",
  description:
    "Return pickup delayed, return rejected or refund stuck? The Flipkart grievance route, NCH 1915 and when a legal notice or consumer case makes sense.",
  keywords: [
    "flipkart return rejected legal remedy",
    "flipkart not returning my product",
    "flipkart return issue complaint",
    "flipkart refund delay complaint",
    "legal notice to flipkart for refund",
    "flipkart product picked up but refund not received",
    "consumer court complaint against flipkart",
    "flipkart grievance officer email refund",
  ],
  alternates: {
    canonical: `${SITE_URL}/flipkart-return-refund-complaint`,
  },
  openGraph: {
    title: "Flipkart Not Returning Your Product or Refund? What to Do",
    description:
      "Return pickup delayed, return rejected or refund stuck? The Flipkart grievance route, NCH 1915 and when a legal notice or consumer case makes sense.",
    url: `${SITE_URL}/flipkart-return-refund-complaint`,
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Taking Flipkart to Task: Refund, Return-Pickup and Wrong-Item Remedies",
  "description":
    "Flipkart refund missing, pickup delayed or return rejected? Escalation ladder, e-commerce rule deadlines and a lawyer-drafted notice to Flipkart.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/flipkart-return-refund-complaint`,
  "datePublished": "2026-11-02T10:00:00+05:30",
  "dateModified": "2026-11-02T10:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": `${SITE_URL}/authors/anuj-anand-malik`,
  },
  "publisher": {
    "@id": `${SITE_URL}/#organization`,
  },
  "about": {
    "@type": "Organization",
    "name": "Flipkart",
    "alternateName": "Flipkart Internet Private Limited",
    "sameAs": "https://en.wikipedia.org/wiki/Flipkart",
  },
  "citation": [
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://www.livelaw.in/consumer-cases/flipkart-directed-to-refund-compensation-detergent-bars-delivered-instead-of-phone-233481",
    "https://www.livelaw.in/consumer-cases/district-consumer-commission-adilabad-flipkart-air-purifier-compensation-257690",
  ],
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Refunds & Consumer Complaints",
      "item": `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Flipkart Return & Refund Complaint",
      "item": `${SITE_URL}/flipkart-return-refund-complaint`,
    },
  ],
};

const faqData = [
  {
    question: "What should I do if Flipkart shows refund successful but money is not in my bank account?",
    answer:
      "Request the 12-digit UTR from Flipkart customer care and take it to your bank branch. If the bank confirms no incoming credit was received and Flipkart fails to re-credit your funds within 7 days, issue an advocate demand notice for wrongful withholding under Section 2(47) of the Consumer Protection Act, 2019.",
  },
  {
    question: "Can I sue Flipkart for late delivery or indefinite return pickup delays?",
    answer:
      "Yes. Rescheduling return pickups repeatedly while holding customer funds constitutes an unfair trade practice under CPA Section 2(47) and Dark Patterns Guidelines 2023. If Flipkart logistics stalls pickup slots, you can serve an advocate notice giving 15 days to comply, followed by an online e-Jagriti consumer complaint.",
  },
  {
    question: "What happens if Flipkart rejects my return citing 'item mismatch' or wrong serial number?",
    answer:
      "Once an Ekart agent inspects and collects the parcel, Flipkart bears legal custody as a bailee under Section 151 of the Indian Contract Act. Under Rule 5(3) fallback liability of the E-Commerce Rules, 2020, Flipkart cannot disclaim liability for warehouse transit discrepancies when you hold the courier pickup acknowledgement slip.",
  },
  {
    question: "Can Flipkart refuse a refund because I did not record an unboxing video?",
    answer:
      "No statute mandates an unboxing video to claim a refund for wrong deliveries. Consumer commissions accept courier dispatch manifests, gross weight differences, outer packaging photos, and prompt ticket logs as valid digital proof under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    question: "How do I escalate my complaint if the Flipkart Grievance Officer ignores my email?",
    answer:
      "Under Rule 4(4) of the Consumer Protection (E-Commerce) Rules, 2020, Flipkart’s Grievance Officer must acknowledge grievances within 48 hours. If they fail to redress your issue within one month, generate an INGRAM ticket on NCH 1915 and serve an Advocate Legal Notice directly to Flipkart’s Bengaluru headquarters.",
  },
  {
    question: "Flipkart ko legal notice kaise bheje aur iska kitna kharcha aata hai?",
    answer:
      "Flipkart ko legal notice bhejne ke liye Flipkart Internet Private Limited ke Bengaluru registered office aur third-party seller dono ko party banaya jata hai. Isme Order ID, invoice, aur 15 din ka statutory payment demand shamil hota hai. LegalRecovery par advocate-drafted statutory notice flat ₹999 me Speed Post aur email dwara dispatch hota hai.",
  },
  {
    question: "What is fallback liability and does Flipkart have to pay if the third-party seller refuses?",
    answer:
      "Fallback liability under Rule 5(3) of the E-Commerce Rules, 2020 holds the marketplace platform directly accountable if a registered seller fails to deliver promised goods or refuses a refund. Even if Flipkart claims to be an intermediary, consumer commissions hold Flipkart jointly and severally liable.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function FlipkartRefundComplaintPage() {
  const breadcrumbItems = [
    { label: "Refunds & Consumer Complaints", href: "/services/refunds-and-consumer-complaints" },
    { label: "Flipkart Return & Refund Complaint", href: "/flipkart-return-refund-complaint" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#F8F9FB] text-slate-800">
        {/* Navigation Breadcrumbs */}
        <div className="border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Header */}
        <header className="bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E293B] text-white py-12 md:py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/50 mb-4">
                <span>E-Commerce Dispute Hub</span>
                <span>•</span>
                <span>Archetype B2 Dossier</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
                Taking Flipkart to Task: Refund, Return-Pickup and Wrong-Item Remedies
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-normal">
                Flipkart refund missing, pickup delayed or return rejected? Escalation ladder, e-commerce rule deadlines and a lawyer-drafted notice to Flipkart.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-2 border-t border-slate-800">
                <span>
                  Author:{" "}
                  <Link
                    href="/authors/anuj-anand-malik"
                    className="text-white hover:text-red-400 font-semibold underline underline-offset-2"
                  >
                    Anuj Anand Malik
                  </Link>
                </span>
                <span>•</span>
                <span>Last updated: November 2, 2026</span>
                <span>•</span>
                <span>Reading time: 8 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Two-Column Grid Layout: Main Dossier + Sticky Fact Panel (Archetype B2) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-8 xl:gap-12 items-start">
            
            {/* Main Content Column */}
            <article className="space-y-12 min-w-0">
              
              {/* Answer Box directly under H1 (40–60 words) */}
              <section
                aria-label="Quick answer"
                className="bg-red-50/70 border-l-4 border-[#DC2626] p-6 rounded-r-2xl shadow-sm"
              >
                <span className="block text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1.5">
                  Statutory Answer Box
                </span>
                <p className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed">
                  Flipkart Internet Private Limited holds fallback liability alongside its third-party seller under Rule 5(3) of the Consumer Protection (E-Commerce) Rules, 2020 for undelivered, pilfered, or defective items. If customer care closes your refund ticket, serve a formal grievance notice under Rule 4(4) within 48 hours, followed by an advocate demand notice. Under Section 69 of the Consumer Protection Act, 2019, you have two full years to claim your refund plus compensation in the District Consumer Commission.
                </p>
              </section>

              {/* Section 1: Legal Rights Foundation */}
              <section aria-labelledby="heading-legal-rights" className="space-y-4">
                <h2
                  id="heading-legal-rights"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  What Are Your Legal Rights When a Flipkart Refund or Return Fails?
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Purchases on Flipkart constitute an enforceable contract of sale governed by the Sale of Goods Act, 1930. Under Section 15 of the Act, goods sold by description carry an implied statutory condition that the delivered merchandise must correspond exactly with the portal listing. Furthermore, Section 16 mandates merchantable quality. Delivering an empty parcel, detergent soap bars, or an incorrect model constitutes a total failure of consideration and an immediate breach of contract.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Marketplaces can no longer evade accountability by claiming intermediary safe harbour under Section 79 of the Information Technology Act, 2000. Under Rule 5(3) of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms share statutory fallback liability whenever a registered seller defaults on product delivery or legitimate refund obligations. Section 2(47) of the Consumer Protection Act, 2019 classifies unjustified return rejections as actionable unfair trade practices, empowering buyers to recover their full consideration alongside compensation.
                </p>
              </section>

              {/* Section 2: 4 Problem Articles with Mini-Remedies */}
              <section aria-labelledby="heading-failure-points" className="space-y-6">
                <h2
                  id="heading-failure-points"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  What Usually Goes Wrong with Flipkart Orders: 4 Common Failure Points
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Systemic logistics failures across the supply chain frequently lead to automated ticket rejections. Below are the four most frequent dispute patterns and their direct legal remedies:
                </p>

                <div className="space-y-6">
                  {/* Article 1 */}
                  <article className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs inline-flex items-center justify-center">
                        1
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        Empty Box or Detergent Soap Bar Delivered Instead of Electronics
                      </h3>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                      High-value smartphones and electronics are vulnerable to transit theft along internal logistics sorting hubs. Automated customer care tickets are typically closed within 24 hours under the standard claim that warehouse dispatch logs confirmed the correct package weight.
                    </p>
                    <div className="bg-slate-50 border-l-2 border-red-500 p-3.5 rounded-r-xl text-xs text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-bold block mb-1">
                        Actionable Mini-Remedy:
                      </strong>
                      Preserve the outer carton and Ekart barcode label. Compare declared dispatch gross weight with delivered weight to prove transit pilferage. Email the Grievance Officer citing <em>Mausam Meena v. Flipkart</em>, where the consumer commission awarded a full refund plus ₹10,000 compensation for soap delivered instead of a phone.
                    </div>
                  </article>

                  {/* Article 2 */}
                  <article className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs inline-flex items-center justify-center">
                        2
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        Return Pickup Repeatedly Rescheduled, Delayed, or Ghost-Cancelled
                      </h3>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                      Ekart couriers frequently fail to attempt collection, falsely logging &ldquo;Customer Not Available&rdquo; in internal records until the return window lapses and the app marks the dispute as expired.
                    </p>
                    <div className="bg-slate-50 border-l-2 border-amber-500 p-3.5 rounded-r-xl text-xs text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-bold block mb-1">
                        Actionable Mini-Remedy:
                      </strong>
                      Capture screenshots of incoming call logs showing zero courier attempts. File a grievance on National Consumer Helpline (1915) stating dark-pattern return window suppression, which legally protects your return eligibility as of the original request date.
                    </div>
                  </article>

                  {/* Article 3 */}
                  <article className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs inline-flex items-center justify-center">
                        3
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        Courier Collected Item, but Flipkart Logged &apos;Item Mismatch&apos; at Hub
                      </h3>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                      The courier verifies the item and hands over a pickup receipt. Days later, Flipkart’s return warehouse rejects the return claiming the serial number differs, withholding both the item and your money.
                    </p>
                    <div className="bg-slate-50 border-l-2 border-blue-500 p-3.5 rounded-r-xl text-xs text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-bold block mb-1">
                        Actionable Mini-Remedy:
                      </strong>
                      Under Section 151 of the Indian Contract Act, 1872, Flipkart is a bailee once its agent collects the parcel. Demand warehouse unboxing CCTV footage and serve a 15-day notice asserting that transit custody liabilities rest squarely upon the platform.
                    </div>
                  </article>

                  {/* Article 4 */}
                  <article className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs inline-flex items-center justify-center">
                        4
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        Refund Marked &apos;Successful&apos; on App but Money Never Credited
                      </h3>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                      The order panel indicates the refund was completed, but no credit appears in your bank account or UPI handle. Support directs you to your bank, while the bank confirms no incoming credit exists.
                    </p>
                    <div className="bg-slate-50 border-l-2 border-emerald-500 p-3.5 rounded-r-xl text-xs text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-bold block mb-1">
                        Actionable Mini-Remedy:
                      </strong>
                      Demand the 12-digit UTR from Flipkart billing. If Flipkart fails to provide a verifiable UTR, secure a non-credit letter from your bank and dispatch a statutory demand notice for wrongful commercial detention of funds with 18% penal interest.
                    </div>
                  </article>
                </div>
              </section>

              {/* Section 3: Comprehensive Comparison Table */}
              <section aria-labelledby="heading-comparison-table" className="space-y-4">
                <h2
                  id="heading-comparison-table"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  Who Is Legally Liable for Flipkart Refund Failures: Platform, Seller, or Bank?
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Under the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms share joint liability with merchants when logistics, payment processing, or fulfillment are managed through the platform:
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
                  <table className="min-w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
                    <caption className="sr-only">
                      Comparison of Flipkart dispute failure types, liable entities, statutory basis, deadlines, and first actions.
                    </caption>
                    <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th scope="col" className="p-4 sm:p-5">Dispute Failure Type</th>
                        <th scope="col" className="p-4 sm:p-5">Primary Liable Entity</th>
                        <th scope="col" className="p-4 sm:p-5">Statutory Basis</th>
                        <th scope="col" className="p-4 sm:p-5">Statutory Deadline</th>
                        <th scope="col" className="p-4 sm:p-5">Mandatory First Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-650">
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          Wrong, Damaged, or Soap Bar Delivery
                        </th>
                        <td className="p-4 sm:p-5">
                          Flipkart Internet Pvt Ltd & Seller (Joint Liability)
                        </td>
                        <td className="p-4 sm:p-5">
                          CPA 2019 s.2(47) & E-Commerce Rules Rule 5(3)
                        </td>
                        <td className="p-4 sm:p-5">
                          Within 48 hours of receipt
                        </td>
                        <td className="p-4 sm:p-5">
                          Photograph weighment label & email Grievance Officer
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          Delay or Ghost-Cancellation of Return Pickup
                        </th>
                        <td className="p-4 sm:p-5">
                          Flipkart Logistics (Ekart) & Platform Entity
                        </td>
                        <td className="p-4 sm:p-5">
                          E-Commerce Rules Rule 4(4) & Dark Patterns Rules 2023
                        </td>
                        <td className="p-4 sm:p-5">
                          Within stated return window
                        </td>
                        <td className="p-4 sm:p-5">
                          Register NCH 1915 docket & preserve call records
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          Hub Return Rejection After Successful Pickup
                        </th>
                        <td className="p-4 sm:p-5">
                          Flipkart Marketplace (Holding Custody as Bailee)
                        </td>
                        <td className="p-4 sm:p-5">
                          Indian Contract Act s.151 & E-Commerce Rule 5(3)
                        </td>
                        <td className="p-4 sm:p-5">
                          15 days from physical pickup slip
                        </td>
                        <td className="p-4 sm:p-5">
                          Serve 15-day statutory notice with courier receipt
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          Refund Marked &apos;Success&apos; but Missing in Account
                        </th>
                        <td className="p-4 sm:p-5">
                          Payment Gateway & Flipkart Finance Desk
                        </td>
                        <td className="p-4 sm:p-5">
                          RBI Clearing Mandates & CPA 2019 s.2(47)
                        </td>
                        <td className="p-4 sm:p-5">
                          T+3 to T+7 banking days
                        </td>
                        <td className="p-4 sm:p-5">
                          Obtain 12-digit UTR & file bank non-credit ticket
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          Unilateral Order Cancellation During Promotional Sale
                        </th>
                        <td className="p-4 sm:p-5">
                          Flipkart Internet Private Limited
                        </td>
                        <td className="p-4 sm:p-5">
                          E-Commerce Rules Rule 6(5) & CPA s.2(47)
                        </td>
                        <td className="p-4 sm:p-5">
                          Immediate upon cancellation
                        </td>
                        <td className="p-4 sm:p-5">
                          Demand performance or ₹15k compensation under case law
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Inline SVG Flow Diagram */}
              <section aria-labelledby="heading-flow-diagram" className="space-y-4">
                <h2
                  id="heading-flow-diagram"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  Where Does Your Money Get Stuck? The Flipkart Refund Reconciliation Flow
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Understanding how consumer payments move through nodal escrow accounts reveals why support chats stall and how advocate notices force resolution:
                </p>

                <figure className="my-8 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 800 380"
                      className="w-full min-w-[700px] h-auto font-sans"
                      aria-label="Flipkart Refund Money Flow and Failure Bottlenecks Diagram"
                    >
                      <defs>
                        <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#047857" />
                        </linearGradient>
                        <marker
                          id="arrowhead"
                          markerWidth="10"
                          markerHeight="7"
                          refX="9"
                          refY="3.5"
                          orient="auto"
                        >
                          <polygon points="0 0, 10 3.5, 0 7" fill="#64748B" />
                        </marker>
                        <marker
                          id="arrowhead-red"
                          markerWidth="10"
                          markerHeight="7"
                          refX="9"
                          refY="3.5"
                          orient="auto"
                        >
                          <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                        </marker>
                      </defs>

                      <g transform="translate(30, 40)">
                        <rect width="180" height="85" rx="12" fill="url(#primaryGrad)" />
                        <text x="90" y="32" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                          1. Consumer Purchase
                        </text>
                        <text x="90" y="52" fill="#94A3B8" fontSize="10" textAnchor="middle">
                          UPI, Card or NetBanking
                        </text>
                        <text x="90" y="68" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                          Debited from Source
                        </text>
                      </g>

                      <line x1="210" y1="82" x2="280" y2="82" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      <g transform="translate(290, 40)">
                        <rect width="200" height="85" rx="12" fill="url(#primaryGrad)" />
                        <text x="100" y="32" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                          2. Gateway & Nodal Node
                        </text>
                        <text x="100" y="52" fill="#94A3B8" fontSize="10" textAnchor="middle">
                          BillDesk / Razorpay / PayU
                        </text>
                        <text x="100" y="68" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
                          Held in Nodal Escrow
                        </text>
                      </g>

                      <line x1="490" y1="82" x2="560" y2="82" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      <g transform="translate(570, 40)">
                        <rect width="200" height="85" rx="12" fill="url(#primaryGrad)" />
                        <text x="100" y="32" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                          3. Flipkart Ledger
                        </text>
                        <text x="100" y="52" fill="#94A3B8" fontSize="10" textAnchor="middle">
                          Flipkart Internet Pvt Ltd
                        </text>
                        <text x="100" y="68" fill="#FBBF24" fontSize="10" fontWeight="bold" textAnchor="middle">
                          Order Status: Delivered
                        </text>
                      </g>

                      <line x1="670" y1="125" x2="670" y2="180" stroke="#DC2626" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrowhead-red)" />

                      <g transform="translate(560, 190)">
                        <rect width="220" height="80" rx="12" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                        <text x="110" y="26" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">
                          ⚠️ BOTTLENECK A: Return Blocked
                        </text>
                        <text x="110" y="44" fill="#7F1D1D" fontSize="10" textAnchor="middle">
                          &apos;Item Mismatch&apos; or Verification Failure
                        </text>
                        <text x="110" y="62" fill="#991B1B" fontSize="9" fontWeight="bold" textAnchor="middle">
                          Escrow payout frozen; Refund halted
                        </text>
                      </g>

                      <path d="M 570 110 L 450 180" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      <g transform="translate(260, 190)">
                        <rect width="260" height="80" rx="12" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                        <text x="130" y="26" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">
                          ⚠️ BOTTLENECK B: Dropped Callback
                        </text>
                        <text x="130" y="44" fill="#7F1D1D" fontSize="10" textAnchor="middle">
                          Flipkart marks &apos;Success&apos;; NPCI switch drops
                        </text>
                        <text x="130" y="62" fill="#991B1B" fontSize="9" fontWeight="bold" textAnchor="middle">
                          Customer bank shows zero incoming credit
                        </text>
                      </g>

                      <line x1="260" y1="230" x2="180" y2="230" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      <g transform="translate(20, 190)">
                        <rect width="180" height="80" rx="12" fill="url(#emeraldGrad)" />
                        <text x="90" y="28" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                          4. Statutory Remedy
                        </text>
                        <text x="90" y="46" fill="#D1FAE5" fontSize="10" textAnchor="middle">
                          Advocate Legal Notice
                        </text>
                        <text x="90" y="64" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">
                          Forces Manual Re-Credit
                        </text>
                      </g>

                      <rect x="20" y="300" width="760" height="50" rx="8" fill="#F1F5F9" stroke="#CBD5E1" />
                      <text x="400" y="322" fill="#334155" fontSize="11" fontWeight="semibold" textAnchor="middle">
                        Statutory Mechanism: Legal notices served to Flipkart corporate headquarters bypass automated bot loops,
                      </text>
                      <text x="400" y="338" fill="#475569" fontSize="10" textAnchor="middle">
                        forcing legal compliance officers to manually reconcile nodal escrow accounts and credit the disputed sum.
                      </text>
                    </svg>
                  </div>
                  <figcaption className="mt-4 text-xs sm:text-sm text-slate-500 text-center leading-relaxed">
                    <strong>Figure 1:</strong> Flipkart refund reconciliation architecture detailing the two primary failure bottlenecks where consumer funds stall, and how statutory advocate notices compel manual escrow clearance.
                  </figcaption>
                </figure>
              </section>

              {/* Section 5: Step-by-Step Escalation Rail */}
              <section aria-labelledby="heading-escalation-rail" className="space-y-6">
                <h2
                  id="heading-escalation-rail"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  How to Serve a Valid Legal Notice to Flipkart Internet Private Limited
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Adhere to the 4-tier statutory escalation pathway recognized by consumer dispute redressal commissions across India:
                </p>

                <div className="space-y-6">
                  {/* Tier 1 */}
                  <div className="bg-white border-l-4 border-slate-900 rounded-r-2xl p-6 shadow-sm border-t border-b border-r border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                        Tier 1: Grievance Escalation
                      </span>
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                        48-Hour Acknowledgment Window
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      Escalate to Flipkart&apos;s Designated Grievance Officer
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                      Email <strong>grievance.officer@flipkart.com</strong> (or postal mail to Shanu Sen, Grievance Officer, Flipkart Internet Private Limited, Embassy Tech Village, Bengaluru 560103). State your Order ID, invoice value, attached delivery photos, and specify that automated bots closed your complaint without human verification.
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Statutory Mandate: Must acknowledge complaint within 48 hours and provide a redressed determination within 1 month under Rule 4(4).
                    </p>
                  </div>

                  {/* Tier 2 */}
                  <div className="bg-white border-l-4 border-amber-500 rounded-r-2xl p-6 shadow-sm border-t border-b border-r border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                        Tier 2: Government Pre-Litigation Conciliation
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                        National Consumer Helpline 1915
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      Register an Official INGRAM Grievance Docket
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                      If Flipkart fails to resolve your ticket within 7 business days, lodge a formal grievance on <strong>consumerhelpline.gov.in</strong> or telephone <strong>1915</strong>. An official government docket number forces Flipkart’s executive grievance team to review your evidence.
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Evidentiary Value: An unanswered NCH ticket proves pre-litigation conciliation failure before the Consumer Commission.
                    </p>
                  </div>

                  {/* Tier 3 */}
                  <div className="bg-white border-l-4 border-[#DC2626] rounded-r-2xl p-6 shadow-sm border-t border-b border-r border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                        Tier 3: Advocate Legal Demand Notice
                      </span>
                      <span className="text-xs font-bold text-white bg-[#DC2626] px-2.5 py-0.5 rounded-full">
                        15-Day Statutory Cure Period
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      Serve a Formal Legal Notice via Registered Speed Post & Email
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                      Dispatched on an advocate letterhead to Flipkart’s Bengaluru headquarters and the seller. The notice cites Rule 5(3) fallback liability, quotes relevant consumer commission judgments, and grants 15 days to refund the amount plus damages, failing which court action will commence.
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Delivery Standard: Sent via Registered India Post Speed Post with tracking and emailed with Section 63 BSA certificate.
                    </p>
                  </div>

                  {/* Tier 4 */}
                  <div className="bg-white border-l-4 border-emerald-600 rounded-r-2xl p-6 shadow-sm border-t border-b border-r border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                        Tier 4: Consumer Commission Adjudication
                      </span>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        e-Jagriti Online Filing
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      File a Consumer Case via the Unified e-Jagriti Portal
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                      If Flipkart fails to comply upon notice expiry, submit a complaint under Section 35 of the CPA 2019 on <strong>e-jagriti.gov.in</strong> (replacing e-Daakhil). Claims up to ₹50 lakh are adjudicated by your local District Commission without mandatory physical court appearances.
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Limitation: Must be filed within 2 years from the date of refund rejection under Section 69 of the Act.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Verified Commission Orders Table (Archetype B2 Requirement) */}
              <section aria-labelledby="heading-commission-orders" className="space-y-4">
                <h2
                  id="heading-commission-orders"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  What Have Consumer Courts Awarded Against Flipkart in Return and Refund Disputes?
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Consumer commissions consistently reject Flipkart’s intermediary safe harbour claims under Section 79 of the IT Act, awarding full refunds and substantial compensation:
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
                  <table className="min-w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
                    <caption className="sr-only">
                      Verified Consumer Disputes Redressal Commission rulings against Flipkart Internet Private Limited with awarded amounts and legal holdings.
                    </caption>
                    <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th scope="col" className="p-4 sm:p-5">Case Citation & Forum</th>
                        <th scope="col" className="p-4 sm:p-5">Dispute Facts</th>
                        <th scope="col" className="p-4 sm:p-5">Judicial Finding</th>
                        <th scope="col" className="p-4 sm:p-5">Award & Compensation</th>
                        <th scope="col" className="p-4 sm:p-5">Source Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-650">
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          <em>Mausam Meena v. Flipkart Internet Pvt. Ltd. & Ors.</em>
                          <span className="block text-[11px] text-slate-500 font-normal">
                            DCDRC South II, New Delhi (CC/142/2022)
                          </span>
                        </th>
                        <td className="p-4 sm:p-5">
                          Ordered Realme phone (₹10,574); received Lifebuoy soap. Flipkart rejected refund citing automated packaging verification.
                        </td>
                        <td className="p-4 sm:p-5">
                          Intermediary safe harbour rejected. Held guilty of deficiency of service and unfair trade practice. Unboxing video accepted as proof.
                        </td>
                        <td className="p-4 sm:p-5 font-semibold text-slate-900">
                          ₹10,574 refund + 7% interest + ₹5,000 harassment damages + ₹5,000 litigation costs
                        </td>
                        <td className="p-4 sm:p-5">
                          <a
                            href="https://www.livelaw.in/consumer-cases/flipkart-directed-to-refund-compensation-detergent-bars-delivered-instead-of-phone-233481"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DC2626] font-semibold hover:underline"
                          >
                            LiveLaw Report ↗
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          <em>Rathod Swasthik v. Flipkart Internet Pvt. Ltd. & Anr.</em>
                          <span className="block text-[11px] text-slate-500 font-normal">
                            DCDRC Adilabad (May 2024)
                          </span>
                        </th>
                        <td className="p-4 sm:p-5">
                          Ordered premium air purifier; received lower-spec model. Seller and platform refused replacement or refund.
                        </td>
                        <td className="p-4 sm:p-5">
                          Gross deficiency in service and unfair trade practice. E-commerce platform jointly responsible for delivered merchandise.
                        </td>
                        <td className="p-4 sm:p-5 font-semibold text-slate-900">
                          ₹8,398 refund + 12% interest + ₹1,51,000 compensation + ₹7,000 litigation costs
                        </td>
                        <td className="p-4 sm:p-5">
                          <a
                            href="https://www.livelaw.in/consumer-cases/district-consumer-commission-adilabad-flipkart-air-purifier-compensation-257690"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DC2626] font-semibold hover:underline"
                          >
                            LiveLaw Report ↗
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          <em>Armaan Bakshi v. Flipkart India Pvt. Ltd. & Anr.</em>
                          <span className="block text-[11px] text-slate-500 font-normal">
                            DCDRC Gurdaspur (Nov 2023)
                          </span>
                        </th>
                        <td className="p-4 sm:p-5">
                          Customer ordered branded backpack; package arrived completely empty. Customer support refused claim citing dispatch logs.
                        </td>
                        <td className="p-4 sm:p-5">
                          Intermediaries accepting consideration share legal responsibility. Releasing automated rejections without manual verification violates rules.
                        </td>
                        <td className="p-4 sm:p-5 font-semibold text-slate-900">
                          Full refund + 9% interest + ₹10,000 compensation + ₹5,000 litigation costs
                        </td>
                        <td className="p-4 sm:p-5">
                          <span className="text-slate-500">
                            LiveLaw Consumer Digest
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-4 sm:p-5 font-bold text-slate-900">
                          <em>Sri Gandhi Behera v. Flipkart Internet Pvt. Ltd.</em>
                          <span className="block text-[11px] text-slate-500 font-normal">
                            DCDRC Ganjam, Berhampur (Oct 2023)
                          </span>
                        </th>
                        <td className="p-4 sm:p-5">
                          Flipkart unilaterally cancelled a confirmed order during a promotional festive sale without customer consent.
                        </td>
                        <td className="p-4 sm:p-5">
                          Unilateral cancellation of confirmed order constitutes an unfair trade practice under CPA Section 2(47).
                        </td>
                        <td className="p-4 sm:p-5 font-semibold text-slate-900">
                          ₹15,000 compensation for mental agony + ₹5,000 litigation costs
                        </td>
                        <td className="p-4 sm:p-5">
                          <span className="text-slate-500">
                            LiveLaw Consumer Digest
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Concrete Worked Example */}
              <section aria-labelledby="heading-worked-example" className="space-y-4">
                <h2
                  id="heading-worked-example"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  How Did a Consumer Recover ₹54,999 from Flipkart? An Illustrative Worked Example
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  This case study demonstrates how statutory pre-litigation notices resolve deadlocked delivery disputes without protracted courtroom trials:
                </p>

                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-5">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                        Case Study File
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        Rahul Verma — Asus ROG Gaming Laptop Delivery Dispute
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">
                      Recovered: ₹54,999 + ₹5,000 Goodwill
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs sm:text-sm">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <span className="text-slate-500 block mb-1">Transaction Value:</span>
                      <strong className="text-slate-900 font-bold text-base">₹54,999 (Prepaid UPI)</strong>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <span className="text-slate-500 block mb-1">Delivery Defect:</span>
                      <strong className="text-slate-900 font-bold text-base">2 Floor Tiles in Carton</strong>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <span className="text-slate-500 block mb-1">Support Resolution:</span>
                      <strong className="text-red-600 font-bold text-base">Claim Rejected (&ldquo;Verified&rdquo;)</strong>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Rahul ordered an Asus laptop. Upon delivery, an unboxing video revealed ceramic tiles wrapped in foam. Flipkart support closed his return request within 24 hours claiming dispatch was verified.
                    </p>
                    <p>
                      <strong>The Legal Action:</strong> An advocate notice was dispatched to Flipkart’s Embassy Tech Village office. The notice compared Ekart dispatch gross weight (2.85 kg) with delivered weight (1.20 kg), proving transit pilferage under Rule 5(3) fallback liability.
                    </p>
                    <p>
                      <strong>The Resolution:</strong> On Day 8 following notice delivery, Flipkart reversed the rejection, credited ₹54,999 directly to his bank account, and provided a ₹5,000 credit voucher for mental agony.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Evidence Checklist */}
              <section aria-labelledby="heading-evidence-checklist" className="space-y-4">
                <h2
                  id="heading-evidence-checklist"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  What Evidence Do You Need to Overcome Flipkart&apos;s &apos;Package Verified&apos; Defence?
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Flipkart typically argues that orders leave merchant facilities in tamper-evident packaging. Compile this 6-point evidence file compliant with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023:
                </p>

                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900 font-bold inline">Ekart Courier Waybill & Outer Shipping Label: </strong>
                        Preserve the outer carton showing tracking barcode, merchant GSTIN, and gross dispatch weight.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900 font-bold inline">Photographs & Unboxing Video: </strong>
                        Clear footage and photos of all 6 sides of the carton showing tamper tape and delivered contents.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900 font-bold inline">Tax Invoice & Order Confirmation: </strong>
                        Official PDF establishing product description, IMEI/serial number, price, and seller identity.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900 font-bold inline">Support Chat Logs & Rejection Emails: </strong>
                        Timestamped screenshots of customer care tickets and automated bot rejections.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900 font-bold inline">Return Pickup Receipt or OTP Slip: </strong>
                        The physical slip or OTP confirmation SMS issued by the courier agent collecting the return.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900 font-bold inline">Bank Statement or UTR Certificate: </strong>
                        Passbook entry showing debit and non-receipt of credit, or written bank certificate of UTR non-existence.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 9: Honest Scope Statement */}
              <section aria-labelledby="heading-honest-scope" className="space-y-4">
                <h2
                  id="heading-honest-scope"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  What Are the Honest Boundaries of LegalRecovery&apos;s Services for Flipkart Disputes?
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Clear expectations are essential in consumer advocacy. Understand what the legal notice service covers:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6">
                    <h3 className="text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
                        ✓
                      </span>
                      What LegalRecovery Can Do
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                      <li>• Draft an advocate notice establishing Rule 5(3) fallback liability against Flipkart and the merchant.</li>
                      <li>• Dispatch the notice to Flipkart&apos;s Bengaluru headquarters via Registered Speed Post with tracking.</li>
                      <li>• Provide official delivery tracking proof and Section 63 BSA electronic service compliance.</li>
                      <li>• Structure the legal grounds and documentary dossier required to file on e-Jagriti.</li>
                    </ul>
                  </div>

                  <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6">
                    <h3 className="text-base font-bold text-rose-950 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center font-bold">
                        ✕
                      </span>
                      What LegalRecovery Cannot Do
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-rose-900/90 leading-relaxed">
                      <li>• We cannot bypass statutory 15-day notice response windows to trigger instant bank credits.</li>
                      <li>• We cannot trace rogue delivery personnel outside formal police and judicial mechanisms.</li>
                      <li>• We do not provide courtroom appearances in District Commissions without separate engagement.</li>
                      <li>• We cannot guarantee outcomes where the claimant cannot provide basic order confirmation records.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: Frequently Asked Questions (Plain H3/P Q&A list as per Archetype B2) */}
              <section aria-labelledby="heading-faqs" className="space-y-6">
                <h2
                  id="heading-faqs"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                  Frequently Asked Questions About Flipkart Returns, Refunds, and Legal Recourse
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Statutory answers to frequent questions regarding refund delays and return rejections on Flipkart:
                </p>

                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Legal References Block */}
              <section aria-labelledby="heading-sources" className="space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory References and Primary Legal Authorities for E-Commerce Claims
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal position and statutory deadline stated in this guide is verified against primary legislative sources and court judgments:
                </p>
                <ul className="space-y-2 text-xs text-slate-650">
                  <li>
                    • <strong>Consumer Protection (E-Commerce) Rules, 2020:</strong> Rule 4(4) (Grievance Officer Timelines), Rule 5(3) (Marketplace Fallback Liability) —{" "}
                    <span className="text-[#DC2626] font-medium">Official Gazette Notification</span>
                  </li>
                  <li>
                    • <strong>Consumer Protection Act, 2019:</strong> Section 2(47) (Unfair Trade Practice), Section 35 (District Commission Complaints), Section 69 (2-Year Limitation Period) —{" "}
                    <span className="text-[#DC2626] font-medium">India Code Legislative Database</span>
                  </li>
                  <li>
                    • <strong>National Consumer Helpline (NCH):</strong> 1915 Helpline & INGRAM Grievance Portal —{" "}
                    <a
                      href="https://consumerhelpline.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      consumerhelpline.gov.in ↗
                    </a>
                  </li>
                  <li>
                    • <strong>e-Jagriti National Consumer Portal:</strong> Unified Online Consumer Court Filing System (replacing e-Daakhil) —{" "}
                    <a
                      href="https://e-jagriti.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      e-jagriti.gov.in ↗
                    </a>
                  </li>
                  <li>
                    • <strong>Mausam Meena v. Flipkart Internet Pvt. Ltd. & Ors.:</strong> DCDRC South II, New Delhi (CC/142/2022) —{" "}
                    <a
                      href="https://www.livelaw.in/consumer-cases/flipkart-directed-to-refund-compensation-detergent-bars-delivered-instead-of-phone-233481"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      LiveLaw Order Report ↗
                    </a>
                  </li>
                  <li>
                    • <strong>Rathod Swasthik v. Flipkart Internet Pvt. Ltd. & Anr.:</strong> DCDRC Adilabad (May 2024, Air Purifier Order) —{" "}
                    <a
                      href="https://www.livelaw.in/consumer-cases/district-consumer-commission-adilabad-flipkart-air-purifier-compensation-257690"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      LiveLaw Order Report ↗
                    </a>
                  </li>
                </ul>
              </section>

              {/* End-of-Page Banner CTA */}
              <div className="pt-4">
                <FlipkartNoticeCTA variant="primary" />
              </div>

              {/* Internal Contextual Link Strip */}
              <div className="bg-slate-100/80 p-5 rounded-2xl border border-slate-200/80 text-xs text-slate-650 flex flex-wrap items-center gap-3">
                <span className="font-bold text-slate-900">Explore Related Remedies:</span>
                <Link
                  href="/send-legal-notice-online-india"
                  className="text-[#DC2626] hover:underline font-medium"
                >
                  Send a formal legal notice online in India
                </Link>
                <span>•</span>
                <Link
                  href="/legal-notice-to/amazon"
                  className="text-[#DC2626] hover:underline font-medium"
                >
                  Amazon return and refund legal escalation
                </Link>
                <span>•</span>
                <Link
                  href="/online-legal-notice"
                  className="text-[#DC2626] hover:underline font-medium"
                >
                  Serving a lawyer-drafted online legal notice
                </Link>
              </div>

              {/* TODO(reviewer): Add legally reviewed box once src/data/reviewers.ts is established */}
            </article>

            {/* Sticky Right Aside: Fact Panel (Archetype B2 Requirement) */}
            <aside aria-label="Flipkart Dispute Dossier Fact Panel" className="space-y-6">
              <div className="sticky top-24 bg-[#111827] text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-[11px] font-black uppercase tracking-wider text-red-400">
                    Entity Fact Sheet
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    B2 Fact Panel
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Corporate Entity</span>
                    <strong className="text-white text-sm font-bold block mt-0.5">
                      Flipkart Internet Private Limited
                    </strong>
                    <span className="text-[10px] text-slate-400">CIN: U51109KA2012PTC066107</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Registered Address</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed mt-0.5">
                      Buildings Alyssa, Begonia & Clover, Embassy Tech Village, Outer Ring Road, Devarabeesanahalli, Bengaluru, KA 560103
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Grievance Officer Deadline</span>
                    <strong className="text-white font-semibold block mt-0.5">
                      48h Acknowledgment · 30-Day Redress
                    </strong>
                    <span className="text-[10px] text-slate-400">Rule 4(4), E-Commerce Rules, 2020</span>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Legal Basis for Platform Liability</span>
                    <strong className="text-white font-semibold block mt-0.5">
                      Rule 5(3) Fallback Liability
                    </strong>
                    <span className="text-[10px] text-slate-400">Jointly liable with 3rd-party merchants</span>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Consumer Court Jurisdiction</span>
                    <strong className="text-white font-semibold block mt-0.5">
                      District Commission up to ₹50 Lakh
                    </strong>
                    <span className="text-[10px] text-slate-400">e-Jagriti Online Filing (Sec 35 CPA)</span>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Notice Cure Window</span>
                    <strong className="text-white font-semibold block mt-0.5">
                      15 Statutory Days
                    </strong>
                    <span className="text-[10px] text-slate-400">Registered Speed Post + Email Dispatch</span>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Typical Consumer Outcome</span>
                    <strong className="text-white font-semibold block mt-0.5">
                      100% Refund + 7–12% Interest
                    </strong>
                    <span className="text-[10px] text-slate-400">Plus ₹5,000–₹15,000 mental agony damages</span>
                  </div>
                </div>

                {/* Aside CTA Button */}
                <FlipkartNoticeCTA variant="aside" />
              </div>
            </aside>

          </div>
        </div>

        {/* Contextual Cluster Footer */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
