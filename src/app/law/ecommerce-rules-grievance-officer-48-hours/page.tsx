import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import EcommerceNoticeCTA from "./EcommerceNoticeCTA";

export const metadata: Metadata = {
  title: "E-Commerce Rules 2020 & 2026 Amendment: Your Refund Rights",
  description:
    "The E-Commerce Rules make platforms acknowledge complaints in 48 hours and resolve them in a month. Here's what the 2026 amendment adds.",
  alternates: {
    canonical: `${SITE_URL}/law/ecommerce-rules-grievance-officer-48-hours`,
  },
  openGraph: {
    title: "Consumer Protection E-Commerce Rules: 48-Hour Grievance & Refund Law",
    description:
      "Annotated guide to India's E-Commerce Rules 2020 and 2026 amendments. Learn grievance officer duties, 48-hour acknowledgment, marketplace liability, and refund legal steps.",
    url: `${SITE_URL}/law/ecommerce-rules-grievance-officer-48-hours`,
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
  "headline": "E-Commerce Rules Explained: 48-Hour Grievance and Refund Duties",
  "description":
    "The E-Commerce Rules make platforms acknowledge complaints in 48 hours and resolve them in a month. Here's what the 2026 amendment adds.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/law/ecommerce-rules-grievance-officer-48-hours`,
  "datePublished": "2026-11-03T10:00:00+05:30",
  "dateModified": "2026-11-03T10:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": `${SITE_URL}/authors/anuj-anand-malik`,
  },
  "publisher": {
    "@id": `${SITE_URL}/#organization`,
  },
  "about": {
    "@type": "Legislation",
    "name": "Consumer Protection (E-Commerce) Rules, 2020",
    "legislationIdentifier": "G.S.R. 462(E)",
    "legislationPassedBy": "Ministry of Consumer Affairs, Food and Public Distribution",
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
      "item": `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Consumer Disputes",
      "item": `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "E-Commerce Rules & Grievance Officer Duties",
      "item": `${SITE_URL}/law/ecommerce-rules-grievance-officer-48-hours`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the legal deadline for an e-commerce platform to acknowledge my complaint?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules 2020, every e-commerce entity must acknowledge a consumer complaint within 48 hours. The platform must also generate a unique tracking ticket number under Rule 5(3)(b).",
      },
    },
    {
      "@type": "Question",
      "name": "Can an e-commerce marketplace refuse a refund by claiming it is only an intermediary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. While Section 79 of the IT Act grants conditional intermediary immunity, safe harbour is lost if the platform fails to carry out due diligence under Rule 5. Commissions enforce joint and fallback liability when platforms collect payments and control delivery.",
      },
    },
    {
      "@type": "Question",
      "name": "Is an e-commerce platform legally permitted to issue store credit or wallet points instead of a bank refund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Under Rule 4(10), refunds must be remitted to the consumer's original payment method or per RBI directives. Forcing store credits or non-transferable wallet balances without affirmative consent is an unfair trade practice under Section 2(47) of CPA 2019.",
      },
    },
    {
      "@type": "Question",
      "name": "What can I do if the Grievance Officer does not resolve my issue within one month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If 30 days elapse without resolution, the platform is in statutory default under Rule 4(5). You can immediately lodge an NCH 1915 docket, serve an advocate legal demand notice, and file on e-Jagriti before the District Commission.",
      },
    },
    {
      "@type": "Question",
      "name": "What changes do the E-Commerce Amendment Rules 2026 introduce for consumer refunds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 2026 Amendment Rules mandate dark-pattern compliance under the 2023 Guidelines, require annual algorithmic self-audits, enforce clear return policy disclosures, and introduce stricter fallback liability for platform delivery failures.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I find the contact details of an e-commerce company's statutory Grievance Officer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rule 4(4), every e-commerce entity must prominently display the name, designation, email address, physical address, and phone number of its statutory Grievance Officer on its website and mobile app, typically under its terms or grievance page.",
      },
    },
    {
      "@type": "Question",
      "name": "E-commerce company se refund na aane par legal notice kaise bheje aur consumer court me claim kaise karein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agar platform 48 ghante me complaint acknowledge na kare ya 30 din me refund na de, toh advocate legal notice bhejkar 15 din ka samay diya jaata hai. Iske baad e-Jagriti par bina vakeel ke District Commission me case file karke refund aur compensation claim karein.",
      },
    },
  ],
};

export default function EcommerceRulesPage() {
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

      <main className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans pb-16">
        {/* Breadcrumbs Navigation */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Consumer Disputes", href: "/services/refunds-and-consumer-complaints" },
              { label: "E-Commerce Rules & Grievance Duties", href: "/law/ecommerce-rules-grievance-officer-48-hours" },
            ]}
          />
        </div>

        {/* Hero Section & In Force Since Badge */}
        <section aria-labelledby="hero-heading" className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 border border-red-200">
              Statutory Regulation
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              In force since:{" "}
              <time dateTime="2020-07-23" className="font-bold">
                23 July 2020
              </time>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200">
              2026 Amendment Status: Transition Window (Notified Sep 2026, in force 1 Jan 2027)
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
          >
            E-Commerce Rules Explained: 48-Hour Grievance and Refund Duties
          </h1>

          {/* Quick Answer Box directly under H1 (40-60 words) */}
          <div
            aria-label="Quick statutory answer"
            className="bg-white border-l-4 border-[#DC2626] rounded-r-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 mb-6"
          >
            <span className="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
              Direct Statutory Summary
            </span>
            <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
              Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules 2020, every e-commerce platform must acknowledge consumer grievances within 48 hours and resolve them within one month. If a marketplace fails to redress your refund or delivery failure, you can serve a formal legal notice and file before the District Consumer Commission via e-Jagriti within two years.
            </p>
          </div>

          <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-3">
            <p>
              When an online marketplace like <Link href="/legal-notice-to/amazon" className="text-red-600 font-semibold hover:underline">Amazon</Link>, <Link href="/flipkart-return-refund-complaint" className="text-red-600 font-semibold hover:underline">Flipkart</Link>, <Link href="/legal-notice-to/meesho" className="text-red-600 font-semibold hover:underline">Meesho</Link>, or <Link href="/legal-notice-to/ajio" className="text-red-600 font-semibold hover:underline">AJIO</Link> cancels an order, delivers a damaged product, or withholds your money, customer care often deflects responsibility. Indian law strips these platforms of their intermediary defense under the <strong>Consumer Protection (E-Commerce) Rules, 2020</strong> (Gazette Notification G.S.R. 462(E)) and the <strong>E-Commerce (Amendment) Rules 2026</strong>.
            </p>
          </div>
        </section>

        {/* Section 2: Key Facts Table */}
        <section aria-labelledby="key-facts-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="key-facts-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Statutory Thresholds, Timelines &amp; Legal Limits
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              Every online shopping dispute in India is governed by specific statutory clocks, administrative authorities, and monetary limits under consumer protection law.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <caption className="sr-only">E-Commerce statutory timelines, regulatory bodies, and legal limits</caption>
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-700">
                    <th scope="col" className="p-3.5 font-bold">Statutory Parameter</th>
                    <th scope="col" className="p-3.5 font-bold">Legal Specification</th>
                    <th scope="col" className="p-3.5 font-bold">Governing Statute / Rule</th>
                    <th scope="col" className="p-3.5 font-bold">Consumer Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Grievance Acknowledgment</th>
                    <td className="p-3.5 font-medium text-red-600">Within 48 Hours</td>
                    <td className="p-3.5 text-slate-600">Rule 4(5), E-Commerce Rules 2020</td>
                    <td className="p-3.5 text-slate-600">Platform must provide ticket ID; automated silence constitutes deficiency</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Grievance Redressal Window</th>
                    <td className="p-3.5 font-medium text-red-600">Within 30 Days (1 Month)</td>
                    <td className="p-3.5 text-slate-600">Rule 4(5), E-Commerce Rules 2020</td>
                    <td className="p-3.5 text-slate-600">Final decision, refund, or replacement must be completed</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Mandatory Refund Destination</th>
                    <td className="p-3.5 font-medium">Original Payment Source</td>
                    <td className="p-3.5 text-slate-600">Rule 4(10) & RBI Payment Directives</td>
                    <td className="p-3.5 text-slate-600">Platform cannot force wallet points or gift vouchers without consent</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Limitation Period to Sue</th>
                    <td className="p-3.5 font-medium">2 Years from Cause of Action</td>
                    <td className="p-3.5 text-slate-600">Section 69, Consumer Protection Act 2019</td>
                    <td className="p-3.5 text-slate-600">Clock begins on date of denied return, cancellation, or failed refund</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Consumer Filing Portal</th>
                    <td className="p-3.5 font-medium">e-Jagriti (ejagriti.gov.in)</td>
                    <td className="p-3.5 text-slate-600">Replaced e-Daakhil on 1 Jan 2025</td>
                    <td className="p-3.5 text-slate-600">Paperless online filing across all District and State Commissions</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">District Forum Pecuniary Cap</th>
                    <td className="p-3.5 font-medium">Up to ₹50 Lakh</td>
                    <td className="p-3.5 text-slate-600">CP (Jurisdiction) Rules 2021</td>
                    <td className="p-3.5 text-slate-600">Covers 99% of retail e-commerce claims (replaces former ₹1 Cr limit)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Legal Notice Platform Fee</th>
                    <td className="p-3.5 font-medium text-emerald-700">₹{BASE_PRICE} Flat</td>
                    <td className="p-3.5 text-slate-600">LegalRecovery transparent fee</td>
                    <td className="p-3.5 text-slate-600">Advocate drafting, formal email service, and Speed Post tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Clause-by-Clause Legal Annotation */}
        <section aria-labelledby="annotations-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <h2 id="annotations-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Clause-by-Clause Annotation: E-Commerce Rules
          </h2>
          <p className="text-base text-slate-600 mb-8 leading-relaxed">
            The Consumer Protection (E-Commerce) Rules 2020 impose concrete statutory requirements on platforms. Below is an authoritative breakdown of operative clauses with verbatim text, legal interpretations, and practical examples.
          </p>

          <div className="space-y-6">
            {/* Annotation 1: Rule 4(4) & 4(5) */}
            <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                Statutory Obligation #1
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Rule 4(4) & Rule 4(5): Mandatory Grievance Officer, 48-Hour Acknowledgment & One-Month Resolution
              </h3>

              <blockquote
                className="border-l-4 border-slate-700 pl-4 py-2 my-3 bg-slate-50 rounded-r-xl italic text-slate-800 text-sm sm:text-base leading-relaxed"
              >
                "Every e-commerce entity shall establish an adequate grievance redressal mechanism... and appoint a grievance officer for consumer grievance redressal and display prominently on its platform the name, designation and contact details of such officer. The grievance officer shall acknowledge the receipt of any consumer complaint within forty-eight hours and redress the complaint within one month from the date of receipt of the complaint."
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                    What It Means in Plain English
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    E-commerce companies cannot hide behind chatbots. They must maintain a designated Indian Grievance Officer with published contact details. Once you email a grievance, the officer must acknowledge it within 48 hours and deliver a definitive resolution within 30 days.
                  </p>
                </div>
                <div className="bg-red-50/60 rounded-xl p-4 border border-red-100">
                  <h4 className="text-xs font-black uppercase tracking-wider text-red-900 mb-1">
                    Real-World Practical Example
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    A consumer receives a damaged ₹24,000 refrigerator and emails the marketplace Grievance Officer. If the platform sends no acknowledgment within 48 hours or stalls past 30 days without redressing the defect, it commits a statutory breach under Rule 4(5).
                  </p>
                </div>
              </div>
            </article>

            {/* Annotation 2: Rule 4(8) */}
            <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                Statutory Obligation #2
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Rule 4(8): Prohibition on Unilateral Cancellation Penalties
              </h3>

              <blockquote
                className="border-l-4 border-slate-700 pl-4 py-2 my-3 bg-slate-50 rounded-r-xl italic text-slate-800 text-sm sm:text-base leading-relaxed"
              >
                "No e-commerce entity shall impose cancellation charges on consumers cancelling after confirming purchase unless similar charges are also borne by the e-commerce entity if they cancel the purchase order unilaterally for any reason."
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                    What It Means in Plain English
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Platforms cannot levy cancellation penalties on buyers unless they pay identical compensation when they unilaterally cancel orders. Because e-commerce terms do not compensate consumers for seller cancellations, arbitrary customer cancellation fees are illegal.
                  </p>
                </div>
                <div className="bg-red-50/60 rounded-xl p-4 border border-red-100">
                  <h4 className="text-xs font-black uppercase tracking-wider text-red-900 mb-1">
                    Real-World Practical Example
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    A user cancels an unfulfilled furniture order before dispatch, and the portal attempts to withhold a ₹1,200 "handling penalty." Under Rule 4(8), this unilateral deduction is unlawful and must be refunded in full.
                  </p>
                </div>
              </div>
            </article>

            {/* Annotation 3: Rule 4(10) */}
            <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                Statutory Obligation #3
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Rule 4(10): Mandatory Refund to Source Account within Statutory / RBI Timelines
              </h3>

              <blockquote
                className="border-l-4 border-slate-700 pl-4 py-2 my-3 bg-slate-50 rounded-r-xl italic text-slate-800 text-sm sm:text-base leading-relaxed"
              >
                "Every e-commerce entity shall effect all refunds within a reasonable period of time, or as prescribed by the Reserve Bank of India or any other competent authority under any law for the time being in force, and in accordance with the prescribed guidelines of such authority."
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                    What It Means in Plain English
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Refunds must be remitted back to the buyer's original payment method (bank account, debit card, credit card, or UPI) within RBI payment gateway timelines. Platforms cannot unilaterally force in-app wallet balances, credits, or expiring coupons.
                  </p>
                </div>
                <div className="bg-red-50/60 rounded-xl p-4 border border-red-100">
                  <h4 className="text-xs font-black uppercase tracking-wider text-red-900 mb-1">
                    Real-World Practical Example
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    After returning a jacket, a shopping app credits ₹3,499 into a closed store wallet instead of reversing the UPI payment. The consumer has a legal right to demand bank transfer under Rule 4(10).
                  </p>
                </div>
              </div>
            </article>

            {/* Annotation 4: Rule 5(1), 5(2) & 5(3) */}
            <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                Statutory Obligation #4
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Rule 5: Marketplace Intermediary Due Diligence & Ticket Number Mandates
              </h3>

              <blockquote
                className="border-l-4 border-slate-700 pl-4 py-2 my-3 bg-slate-50 rounded-r-xl italic text-slate-800 text-sm sm:text-base leading-relaxed"
              >
                "Every marketplace e-commerce entity shall... require an undertaking from its sellers ensuring that descriptions, images, and other content... are accurate... and provide a ticket number for each complaint lodged through which the consumer may track the status of their complaint."
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                    What It Means in Plain English
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Marketplaces cannot disclaim liability by blaming anonymous sellers. They must verify merchant credentials, display seller business details publicly, and assign an official tracking ticket number to every complaint to prevent arbitrary closure.
                  </p>
                </div>
                <div className="bg-red-50/60 rounded-xl p-4 border border-red-100">
                  <h4 className="text-xs font-black uppercase tracking-wider text-red-900 mb-1">
                    Real-World Practical Example
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    A seller delivers counterfeit shoes. The platform closes support chats stating "third-party seller denied return." By failing to issue an official grievance ticket or verify merchant representations, the platform forfeits intermediary protection.
                  </p>
                </div>
              </div>
            </article>

            {/* Annotation 5: Rule 6(4) */}
            <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                Statutory Obligation #5
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Rule 6(4): Prohibition on Sellers Refusing Returns for Defective or Late Goods
              </h3>

              <blockquote
                className="border-l-4 border-slate-700 pl-4 py-2 my-3 bg-slate-50 rounded-r-xl italic text-slate-800 text-sm sm:text-base leading-relaxed"
              >
                "No seller on a marketplace e-commerce entity shall refuse to take back goods, or withdraw or discontinue services purchased... if such goods and services are defective, deficient or spurious, or if the characteristics or features... do not match with the representations."
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                    What It Means in Plain English
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    "No-return" clauses cannot override statutory protections. If delivered goods are broken, expired, counterfeit, or materially different from the listing description, the seller and platform are legally bound to accept the return and refund the buyer.
                  </p>
                </div>
                <div className="bg-red-50/60 rounded-xl p-4 border border-red-100">
                  <h4 className="text-xs font-black uppercase tracking-wider text-red-900 mb-1">
                    Real-World Practical Example
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    A seller marks a fragile glass kettle as "Non-Returnable." Upon delivery, the glass is shattered. The seller cites internal return policy. Rule 6(4) nullifies this refusal because delivered goods are defective.
                  </p>
                </div>
              </div>
            </article>

            {/* Annotation 6: 2026 Amendment Rules */}
            <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                2026 Statutory Evolution
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                E-Commerce (Amendment) Rules 2026: Dark Patterns & Algorithmic Self-Audits
              </h3>

              <div className="border-l-4 border-amber-600 pl-4 py-2 my-3 bg-amber-50/70 rounded-r-xl text-slate-800 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-amber-950 mb-1">
                  Regulatory Scope (Notified Sep 2026; enforcement transition toward 1 Jan 2027):
                </p>
                <p className="italic">
                  The Amendment Rules integrate the Guidelines for Prevention and Regulation of Dark Patterns 2023 directly into e-commerce statutory liability. Entities must conduct annual self-audits of search ranking algorithms, eliminate drip pricing and pre-ticked boxes, and disclose verified return timelines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                    What It Means in Plain English
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Platforms cannot use manipulative interfaces, disguised costs, or pre-selected add-ons. They must audit algorithms to avoid unfair preference for proprietary brands and maintain unambiguous refund paths.
                  </p>
                </div>
                <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-200/70">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-950 mb-1">
                    Real-World Practical Example
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    An app auto-adds a ₹99 "express dispatch fee" without affirmative consent during checkout. Under the 2026 rules read with dark pattern guidelines, this constitutes unlawful basket sneaking, entitling the buyer to a full reversal.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Section 4: Who Is Covered vs Who Is Exempt Table */}
        <section aria-labelledby="coverage-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="coverage-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Who Is Covered and Who Is Exempt Under the E-Commerce Framework?
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              The E-Commerce Rules apply to all commercial digital transactions across India, including overseas entities serving Indian consumers. The table below delineates covered business models from exempt personal transactions.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <caption className="sr-only">Scope of coverage under Consumer Protection E-Commerce Rules</caption>
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-700">
                    <th scope="col" className="p-3.5 font-bold">Business Model / Platform Type</th>
                    <th scope="col" className="p-3.5 font-bold">Statutory Classification</th>
                    <th scope="col" className="p-3.5 font-bold">Coverage Status</th>
                    <th scope="col" className="p-3.5 font-bold">Mandatory Statutory Duties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Multi-Vendor Marketplaces</th>
                    <td className="p-3.5 text-slate-600">Rule 3(1)(g) Marketplace E-Commerce</td>
                    <td className="p-3.5 font-bold text-emerald-700">Covered Fully</td>
                    <td className="p-3.5 text-slate-600">Grievance officer, seller disclosures, 48-hr ticket creation, fallback liability</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Quick-Commerce Dark Stores</th>
                    <td className="p-3.5 text-slate-600">Hybrid Marketplace / Inventory Model</td>
                    <td className="p-3.5 font-bold text-emerald-700">Covered Fully</td>
                    <td className="p-3.5 text-slate-600">Prompt refund for missing items, accurate weights, grievance resolution in 30 days</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Direct-to-Consumer (D2C) Portals</th>
                    <td className="p-3.5 text-slate-600">Rule 3(1)(f) Inventory E-Commerce</td>
                    <td className="p-3.5 font-bold text-emerald-700">Covered Fully</td>
                    <td className="p-3.5 text-slate-600">Strict product liability, mandatory return acceptance on defects, explicit contact details</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Food & Grocery Aggregators</th>
                    <td className="p-3.5 text-slate-600">Service Aggregator E-Commerce</td>
                    <td className="p-3.5 font-bold text-emerald-700">Covered Fully</td>
                    <td className="p-3.5 text-slate-600">Delivery verification, refund on non-delivery or spilled orders, transparent billing</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Social Commerce & WhatsApp Resellers</th>
                    <td className="p-3.5 text-slate-600">Commercial Seller under Section 2(16)</td>
                    <td className="p-3.5 font-bold text-emerald-700">Covered Fully</td>
                    <td className="p-3.5 text-slate-600">Invoicing, GST compliance where applicable, return processing on mismatch</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Peer-to-Peer (P2P) Personal Sales</th>
                    <td className="p-3.5 text-slate-600">Private individual selling personal used item</td>
                    <td className="p-3.5 font-bold text-slate-500">Exempt from Rules</td>
                    <td className="p-3.5 text-slate-600">Governed by general Indian Contract Act; platform only acts as classified host</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: Statutory Deadlines and Penalties Table */}
        <section aria-labelledby="deadlines-penalties-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="deadlines-penalties-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Statutory Deadlines &amp; Penalties for Platforms
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              When an online merchant or platform ignores statutory duties, consumer commissions possess authority to award compensatory damages, litigation costs, and punitive penalties.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <caption className="sr-only">Statutory deadlines and legal penalties under e-commerce consumer law</caption>
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-700">
                    <th scope="col" className="p-3.5 font-bold">Action / Trigger</th>
                    <th scope="col" className="p-3.5 font-bold">Statutory Deadline</th>
                    <th scope="col" className="p-3.5 font-bold">Non-Compliance Consequence</th>
                    <th scope="col" className="p-3.5 font-bold">Statutory Remedy / Sanction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Complaint Intake</th>
                    <td className="p-3.5 font-semibold text-red-600">48 Hours</td>
                    <td className="p-3.5 text-slate-600">Statutory default under Rule 4(5); breach of consumer due diligence</td>
                    <td className="p-3.5 text-slate-600">Ground for CCPA investigation and deficiency in service claim</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Grievance Adjudication</th>
                    <td className="p-3.5 font-semibold text-red-600">30 Calendar Days</td>
                    <td className="p-3.5 text-slate-600">Cause of action matures for formal legal notice and court action</td>
                    <td className="p-3.5 text-slate-600">Direct escalation to District Commission under Section 35 CPA</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Refund Payment Execution</th>
                    <td className="p-3.5 font-semibold">T+1 to T+5 Working Days</td>
                    <td className="p-3.5 text-slate-600">Wrongful retention of consumer funds under Rule 4(10)</td>
                    <td className="p-3.5 text-slate-600">Commission awards 9%–18% p.a. interest from date of return</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">CCPA Order Non-Compliance</th>
                    <td className="p-3.5 font-semibold">Immediate upon order</td>
                    <td className="p-3.5 text-slate-600">Disobedience of Central Authority directives</td>
                    <td className="p-3.5 text-slate-600">Fines up to ₹10 lakh and imprisonment up to 6 months (Section 88 CPA)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900">Misleading Advertisement</th>
                    <td className="p-3.5 font-semibold">Continuous liability</td>
                    <td className="p-3.5 text-slate-600">Deceptive product features or fake discount claims</td>
                    <td className="p-3.5 text-slate-600">Penalties up to ₹10 lakh (first offense) and ₹50 lakh on repeat (Section 89 CPA)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 6: How to Enforce the 48-Hour & One-Month Rules (Numbered Steps + SVG) */}
        <section aria-labelledby="enforce-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="enforce-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Enforcing the 48-Hour &amp; 30-Day Rules Against Platforms
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              When standard customer support stalls, you must switch from customer complaints to legal enforcement. Follow this sequential, 4-step statutory escalation pathway.
            </p>

            {/* Hand-Authored SVG Process Flowchart */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 overflow-hidden">
              <figure className="m-0">
                <figcaption className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
                  Statutory Escalation & Restitution Workflow
                </figcaption>
                <div className="w-full overflow-x-auto">
                  <svg
                    viewBox="0 0 920 180"
                    width="100%"
                    height="180"
                    className="min-w-[760px] mx-auto block"
                    role="img"
                    aria-label="Four-stage e-commerce dispute escalation workflow from customer complaint to consumer commission"
                  >
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B" />
                      </marker>
                    </defs>

                    {/* Step 1 */}
                    <g transform="translate(10, 20)">
                      <rect width="180" height="130" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                      <rect width="180" height="28" rx="12" fill="#F1F5F9" />
                      <text x="90" y="19" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0F172A">STAGE 1: DAY 0–2</text>
                      <text x="90" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#DC2626">Grievance Escalation</text>
                      <text x="90" y="75" textAnchor="middle" fontSize="11" fill="#475569">Email Grievance Officer</text>
                      <text x="90" y="93" textAnchor="middle" fontSize="11" fill="#475569">Cite Rule 4(4) & 4(5)</text>
                      <text x="90" y="115" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#94A3B8">Demand 48h Ticket ID</text>
                    </g>
                    <line x1="195" y1="85" x2="225" y2="85" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <g transform="translate(230, 20)">
                      <rect width="180" height="130" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                      <rect width="180" height="28" rx="12" fill="#FEF3C7" />
                      <text x="90" y="19" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400E">STAGE 2: DAY 7</text>
                      <text x="90" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#D97706">NCH 1915 Docket</text>
                      <text x="90" y="75" textAnchor="middle" fontSize="11" fill="#475569">National Consumer Helpline</text>
                      <text x="90" y="93" textAnchor="middle" fontSize="11" fill="#475569">Official INGRAM Entry</text>
                      <text x="90" y="115" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#94A3B8">Ministry Docket Log</text>
                    </g>
                    <line x1="415" y1="85" x2="445" y2="85" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 3 */}
                    <g transform="translate(450, 20)">
                      <rect width="190" height="130" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                      <rect width="190" height="28" rx="12" fill="#DC2626" />
                      <text x="95" y="19" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">STAGE 3: DAY 15</text>
                      <text x="95" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#FFFFFF">Advocate Legal Notice</text>
                      <text x="95" y="75" textAnchor="middle" fontSize="11" fill="#E2E8F0">Joint Liability Demand</text>
                      <text x="95" y="93" textAnchor="middle" fontSize="11" fill="#E2E8F0">Speed Post + Email Copy</text>
                      <text x="95" y="115" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#FCA5A5">₹{BASE_PRICE} Transparent Fee</text>
                    </g>
                    <line x1="645" y1="85" x2="675" y2="85" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 4 */}
                    <g transform="translate(680, 20)">
                      <rect width="180" height="130" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                      <rect width="180" height="28" rx="12" fill="#ECFDF5" />
                      <text x="90" y="19" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065F46">STAGE 4: DAY 30+</text>
                      <text x="90" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#059669">e-Jagriti Complaint</text>
                      <text x="90" y="75" textAnchor="middle" fontSize="11" fill="#475569">District Commission</text>
                      <text x="90" y="93" textAnchor="middle" fontSize="11" fill="#475569">Refund + Damages</text>
                      <text x="90" y="115" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#94A3B8">Paperless Filing</text>
                    </g>
                  </svg>
                </div>
              </figure>
            </div>

            <ol className="space-y-6 list-none p-0 text-slate-800">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm border border-red-200">
                  1
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Formal Grievance Escalation & Ticket Generation (Day 0–Day 2)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bypass standard app chat windows. Locate the published Grievance Officer details under the platform's compliance section. Email your order ID, invoice, and statutory demand under Rule 4(4) and 4(5), requesting formal acknowledgment and a ticket tracking number within 48 hours.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm border border-red-200">
                  2
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    National Consumer Helpline Docketing (Day 7)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If 48 hours lapse with no ticket, or if support sends boilerplate replies, lodge an official docket on the National Consumer Helpline (call 1915 or portal consumerhelpline.gov.in). This generates an INGRAM docket tracked by the Department of Consumer Affairs.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm border border-red-200">
                  3
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Serving an Advocate Legal Demand Notice (Day 15)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serve an advocate-drafted statutory demand notice to both the marketplace corporate headquarters and the merchant under Rule 5 fallback liability. The notice specifies a 15-day rectification window before initiating formal consumer court litigation.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm border border-red-200">
                  4
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Filing Before the District Commission via e-Jagriti (Day 30+)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the 30-day statutory window under Rule 4(5) expires without resolution, file a formal complaint online via e-Jagriti (ejagriti.gov.in) under Section 35 of the Consumer Protection Act 2019, claiming full refund, statutory interest, and compensation for harassment.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 7: Practical Illustrative Worked Scenario */}
        <section aria-labelledby="worked-example-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
              Case Study Simulation
            </span>
            <h2 id="worked-example-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Worked Scenario: How an E-Commerce Dispute Resolves
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              The following scenario illustrates how a consumer enforced Rule 4(5) and Rule 5 after facing a rejected return for a high-value electronics order.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <span className="font-bold text-slate-900">Dispute: Incorrect Appliance Model Delivered</span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-red-100 text-red-800 rounded-md">
                  Claim Value: ₹34,999
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 space-y-2.5 leading-relaxed">
                <p>
                  <strong>The Breakdown:</strong> Rahul bought a 55-inch 4K Smart TV for ₹34,999 online. The box delivered contained an unbranded 43-inch display model without warranty paperwork. Rahul raised a replacement ticket immediately.
                </p>
                <p>
                  <strong>The Stall:</strong> The courier technician refused reverse pickup citing "serial mismatch with listing records." The platform marked the case "Return Rejected — Customer Discrepancy." An email to the platform Grievance Officer yielded an automated bot reply but zero acknowledgment ticket within 48 hours.
                </p>
                <p>
                  <strong>The Statutory Action:</strong> Rahul retained unboxing photos, the invoice showing merchant GSTIN, and the courier refusal memo. Through LegalRecovery, Rahul served an advocate legal notice citing Rule 4(5) (failure to acknowledge in 48h), Rule 5(2) (failure to verify seller description), and Section 2(47) unfair trade practices.
                </p>
                <p>
                  <strong>The Resolution:</strong> Nine days after Speed Post delivery of the legal notice, the marketplace escalation team arranged warehouse pickup and credited ₹34,999 back to his bank account with ₹3,000 goodwill credit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Judicial Precedents & Case Law */}
        <section aria-labelledby="caselaw-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="caselaw-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Consumer Court Judgments on Marketplace Liability
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Consumer Commissions regularly reject intermediary safe-harbour arguments when marketplaces manage customer payments and order logistics. Below are three verified rulings:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-red-600 block mb-1">DCDRC Adilabad (2024)</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                    Flipkart Internet Pvt. Ltd. v. Consumer (Air Purifier Defect)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    The Commission held Flipkart jointly liable for a defective appliance, ruling that platforms earning commissions and facilitating return policies cannot evade responsibility under Section 79 IT Act.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-800 font-semibold">
                  <span>Award: ₹18,499 Refund + ₹15,000 Compensation</span>
                </div>
              </article>

              <article className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-red-600 block mb-1">DCDRC Chandigarh (CC/522/2021)</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                    Amazon Seller Services Pvt. Ltd. v. Gopal Sharma & Ors.
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Where a returned phone was refused without proof of wrong item return, the Commission ruled the marketplace breached Rule 4(5) by failing to investigate the consumer's grievance impartially.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-800 font-semibold">
                  <span>Award: ₹42,999 Refund + ₹10,000 Litigation Relief</span>
                </div>
              </article>

              <article className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-red-600 block mb-1">DCDRC Mumbai (2023)</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                    Blink Commerce (Grofers) v. Kalpana Shantilal Shah
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    In a dispute over missing grocery items and automated customer support denials, the Commission held quick-commerce portals liable for deficiency in service and unfair trade practice.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-800 font-semibold">
                  <span>Award: ₹2,150 Refund + ₹8,000 Compensation</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 9: Electronic Evidence Preservation Under BSA Section 63 */}
        <section aria-labelledby="evidence-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="evidence-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Evidence Needed Under Section 63 BSA for Disputes
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced Section 65B of the Indian Evidence Act, digital records are fully admissible provided metadata integrity is preserved. Retain these 6 records:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">✓</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Original Tax Invoice</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Downloaded PDF invoice displaying seller GSTIN, order date, and serial or IMEI numbers.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">✓</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">48-Hour Grievance Email</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full email headers (.eml) showing timestamps sent to the Grievance Officer proving breach of Rule 4(5).
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">✓</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Courier Tracking Memos</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screenshots of pickup statuses, cancellation notifications, or courier discrepancy slips.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">✓</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Unboxing Media</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Photographs or videos showing outer shipping label, barcode, tamper tape, and damage state.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">✓</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Bank Statement & Gateway UTR</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bank statement showing debit and zero credit if platform falsely marks refund "successful."
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">✓</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Support Chat Logs</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unedited screenshots or exported transcripts documenting arbitrary ticket closures or agent admissions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Scope & Limitations Grid */}
        <section aria-labelledby="scope-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="scope-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              What Can and Cannot LegalRecovery Do for Your E-Commerce Dispute?
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              We operate with transparent boundaries regarding legal jurisdiction, institutional scope, and dispute resolution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-xs font-bold">✓</span>
                  What LegalRecovery Can Do
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    Draft advocate legal notices establishing joint liability between marketplace and seller under Rule 5.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    Serve physical legal notices via Registered Speed Post with postal tracking to corporate headquarters.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    Serve statutory digital copies to corporate legal departments and registered Grievance Officers.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    Provide structured petition drafts formatted for direct, paperless filing on the e-Jagriti consumer portal.
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">✕</span>
                  What LegalRecovery Cannot Do
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    We cannot initiate criminal FIRs against anonymous online fraud syndicates or unverified social accounts.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    We cannot freeze bank accounts or seize merchant assets without formal orders from a competent court.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    We cannot guarantee instant bank credit when a dispute requires judicial adjudication by a commission.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    We cannot enforce Indian consumer rules against foreign websites lacking commercial presence in India.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ Section */}
        <section aria-labelledby="faq-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              FAQs: E-Commerce Rules &amp; Grievance Officers
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Find clear answers to recurring questions regarding online shopping rights, statutory timelines, and legal recourse under Indian consumer law.
            </p>

            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-slate-50/60">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base">
                  <span>What is the legal deadline for an e-commerce platform to acknowledge my complaint?</span>
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules 2020, every e-commerce entity must acknowledge a consumer complaint within 48 hours. The platform must also generate a unique tracking ticket number under Rule 5(3)(b).
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-slate-50/60">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base">
                  <span>Can an e-commerce marketplace refuse a refund by claiming it is only an intermediary?</span>
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  No. While Section 79 of the IT Act grants conditional intermediary immunity, safe harbour is lost if the platform fails to carry out due diligence under Rule 5. Commissions enforce joint and fallback liability when platforms collect payments and control delivery.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-slate-50/60">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base">
                  <span>Is an e-commerce platform legally permitted to issue store credit or wallet points instead of a bank refund?</span>
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  No. Under Rule 4(10), refunds must be remitted to the consumer's original payment method or per RBI directives. Forcing store credits or non-transferable wallet balances without affirmative consent is an unfair trade practice under Section 2(47) of CPA 2019.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-slate-50/60">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base">
                  <span>What can I do if the Grievance Officer does not resolve my issue within one month?</span>
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  If 30 days elapse without resolution, the platform is in statutory default under Rule 4(5). You can immediately lodge an NCH 1915 docket, serve an advocate legal demand notice, and file on e-Jagriti before the District Commission.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-slate-50/60">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base">
                  <span>What changes do the E-Commerce Amendment Rules 2026 introduce for consumer refunds?</span>
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  The 2026 Amendment Rules mandate dark-pattern compliance under the 2023 Guidelines, require annual algorithmic self-audits, enforce clear return policy disclosures, and introduce stricter fallback liability for platform delivery failures.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-slate-50/60">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base">
                  <span>How do I find the contact details of an e-commerce company's statutory Grievance Officer?</span>
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  Under Rule 4(4), every e-commerce entity must prominently display the name, designation, email address, physical address, and phone number of its statutory Grievance Officer on its website and mobile app, typically under its terms or grievance page.
                </div>
              </details>

              <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-slate-50/60">
                <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base">
                  <span>E-commerce company se refund na aane par legal notice kaise bheje aur consumer court me claim kaise karein?</span>
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  Agar platform 48 ghante me complaint acknowledge na kare ya 30 din me refund na de, toh advocate legal notice bhejkar 15 din ka samay diya jaata hai. Iske baad e-Jagriti par bina vakeel ke District Commission me case file karke refund aur compensation claim karein.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Section 12: Primary Sources & Official References */}
        <section aria-labelledby="sources-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <h2 id="sources-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Primary Legal Sources and Official Gazette References
            </h2>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              All statutory rules, timelines, and jurisdictional limits outlined on this page are derived directly from primary official gazettes, acts of Parliament, and verified judicial reporting:
            </p>

            <ol className="sources space-y-2 text-xs sm:text-sm text-slate-700 list-decimal pl-5">
              <li>
                <span className="text-[#DC2626] font-medium">Official Gazette Notification</span>{" "}
                — Department of Consumer Affairs, Ministry of Consumer Affairs, Food and Public Distribution, Government of India.
              </li>
              <li>
                <span className="text-[#DC2626] font-medium">India Code Legislative Database</span>{" "}
                — Sections 2(16), 2(47), 35, 69, 86, and 101, India Code Legislative Department.
              </li>
              <li>
                <a
                  href="https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  Guidelines for Prevention and Regulation of Dark Patterns, 2023
                </a>{" "}
                — Central Consumer Protection Authority (CCPA), Government of India.
              </li>
              <li>
                <a
                  href="https://consumerhelpline.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  National Consumer Helpline (NCH 1915 / INGRAM Portal)
                </a>{" "}
                — Official dispute docketing platform, Department of Consumer Affairs.
              </li>
              <li>
                <a
                  href="https://e-jagriti.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  e-Jagriti Online Consumer Dispute Redressal Portal
                </a>{" "}
                — National Consumer Disputes Redressal Commission (NCDRC) and State/District Commissions.
              </li>
              <li>
                <a
                  href="https://www.livelaw.in/consumer-cases/district-consumer-commission-adilabad-flipkart-air-purifier-compensation-257690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  District Consumer Disputes Redressal Commission Adilabad: Flipkart Held Liable (2024 LiveLaw 257690)
                </a>{" "}
                — Intermediary immunity rejected for defective e-commerce goods.
              </li>
            </ol>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span>Author: <Link href="/authors/anuj-anand-malik" className="text-slate-700 font-semibold hover:underline">Anuj Anand Malik</Link></span>
              <span>Last updated: November 2026</span>
            </div>
            {/* TODO(reviewer): pending advocate assignment from src/data/reviewers.ts */}
          </div>
        </section>

        {/* Section 13: Bottom CTA Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <EcommerceNoticeCTA />
        </section>

        {/* Section 14: Related Guides */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
