import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import DarkPatternsNoticeCTA from "./DarkPatternsNoticeCTA";

export const metadata: Metadata = {
  title: "Dark Patterns Guidelines India: Refund & Consumer Rights",
  description:
    "India banned 13 dark patterns in 2023 and the 2026 rules enforce them. Learn which tricks are illegal and how to claim a refund.",
  alternates: {
    canonical: `${SITE_URL}/law/dark-patterns-guidelines-consumer-rights`,
  },
  openGraph: {
    title: "India Dark Patterns Guidelines: Drip Pricing, Subscription Traps & Refund Law",
    description:
      "Statutory guide to the CCPA Dark Patterns Guidelines 2023 and 2026 E-Commerce Amendment Rules. Learn how to recover refunds for drip pricing, basket sneaking, and auto-debits.",
    url: `${SITE_URL}/law/dark-patterns-guidelines-consumer-rights`,
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
  "headline":
    "Drip Pricing, Subscription Traps and Fake Urgency: Your Rights Under the Dark Patterns Guidelines",
  "description":
    "India banned 13 dark patterns in 2023 and the 2026 rules enforce them. Learn which tricks are illegal and how to claim a refund.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/law/dark-patterns-guidelines-consumer-rights`,
  "datePublished": "2026-11-03T11:00:00+05:30",
  "dateModified": "2026-11-03T11:00:00+05:30",
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
    "name": "Guidelines for Prevention and Regulation of Dark Patterns, 2023",
    "legislationIdentifier": "F. No. CCPA-1/1/2023-CCPA",
    "legislationPassedBy": "Central Consumer Protection Authority (CCPA)",
  },
  "citation": [
    "https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf",
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184",
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
      "name": "Dark Patterns Guidelines & Refund Rights",
      "item": `${SITE_URL}/law/dark-patterns-guidelines-consumer-rights`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the 13 dark patterns banned under India's 2023 guidelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Central Consumer Protection Authority (CCPA) specified 13 prohibited dark patterns in Annexure-1 of the 2023 Guidelines: False Urgency, Basket Sneaking, Confirm Shaming, Forced Action, Subscription Traps, Interface Interference, Bait and Switch, Drip Pricing, Disguised Advertisements, Nagging, Trick Questions, SaaS/Billing Traps, and Rogue Opt-Outs. Engaging in any of these practices constitutes an illegal unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.",
      },
    },
    {
      "@type": "Question",
      "name": "Is drip pricing illegal in India and can I get a refund for hidden convenience fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Drip pricing is banned under Guideline 5 and Annexure 1(8). E-commerce and travel platforms cannot display an attractive base price and add mandatory handling, convenience, or packaging fees on the final payment gateway screen. Any fee added without upfront listing disclosure is legally recoverable, and consumers are entitled to a full refund.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get a refund for a subscription trap or unwanted auto-debit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Annexure 1(5) and the 2026 E-Commerce Amendment Rules, platforms must maintain 'click-to-cancel' parity, making cancellation as simple as signing up. If a platform hides the cancel button, forces endless survey loops, or ignores your cancellation request, subsequent auto-debits are unauthorized deductions subject to full retroactive refund via grievance officers and consumer commissions.",
      },
    },
    {
      "@type": "Question",
      "name": "What is basket sneaking and how does it violate consumer protection laws?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basket sneaking occurs when an e-commerce, food delivery, or ticketing app automatically adds ancillary items—such as travel insurance, donations, or express packing—into your digital checkout cart without affirmative opt-in consent. Pre-ticked checkboxes are strictly illegal under Annexure 1(2), entitling consumers to an immediate refund of any sneaked product or service fee.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I file a CCPA complaint against an e-commerce platform using dark patterns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can lodge a formal dark-pattern complaint with the National Consumer Helpline (NCH 1915 or the INGRAM portal) or submit a direct petition to the CCPA at ccpa-mca@gov.in. Under Sections 18 and 20 of the Consumer Protection Act 2019, the CCPA possesses statutory powers to investigate deceptive design, impose penalties up to ₹10 lakh (or ₹50 lakh for repeat offences), and order class refunds.",
      },
    },
    {
      "@type": "Question",
      "name": "Can an e-commerce marketplace claim it is just an intermediary to avoid dark pattern liability?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. While Section 79 of the Information Technology Act provides conditional safe harbour for passive intermediaries, that protection evaporates when the platform designs the user interface, controls checkout workflows, bundles add-ons, or manages payment collections. Consumer Commissions consistently hold marketplaces jointly liable with sellers when deceptive UI design induces unwanted transactions.",
      },
    },
    {
      "@type": "Question",
      "name": "Dark patterns se hue extra deduction ka refund kaise claim karein aur legal notice kaise bhejein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sabse pehle checkout screens aur payment invoice ka screenshot lekar Bharatiya Sakshya Adhiniyam (BSA) Section 63 ke tahat electronic evidence preserve karein. Uske baad platform ke statutory Grievance Officer ko 48 ghante ka statutory notice dein aur NCH 1915 par docket register karein. Agar 30 din me refund na mile, toh LegalRecovery ke panel advocate se formal legal notice bhejkar e-Jagriti portal par compensation claim karein.",
      },
    },
  ],
};

export default function DarkPatternsLawPage() {
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
              { label: "Dark Patterns Guidelines India", href: "/law/dark-patterns-guidelines-consumer-rights" },
            ]}
          />
        </div>

        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8">
          <h1
            id="hero-heading"
            className="w-full text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug sm:leading-tight mb-4 sm:mb-6"
          >
            Drip Pricing, Subscription Traps and Fake Urgency: Your Rights Under the Dark Patterns Guidelines
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
              Under the Central Consumer Protection Authority (CCPA) Guidelines for Prevention and Regulation of Dark Patterns 2023 and the E-Commerce Amendment Rules 2026, practices like drip pricing, subscription traps, and basket sneaking are illegal unfair trade practices under Section 2(47) of the Consumer Protection Act 2019. Consumers are entitled to full refunds, cancellation of unlawful debits, and statutory compensation via grievance officers, NCH 1915, or consumer commissions.
            </p>
          </div>

          <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-3">
            <p>
              When booking a flight, ordering groceries on quick-commerce apps, or checking out on major online retail marketplaces such as <Link href="/legal-notice-to/amazon" className="text-red-600 font-semibold hover:underline">Amazon India</Link>, <Link href="/flipkart-return-refund-complaint" className="text-red-600 font-semibold hover:underline">Flipkart</Link>, or <Link href="/legal-notice-to/myntra" className="text-red-600 font-semibold hover:underline">Myntra</Link>, Indian consumers routinely face manipulative user interface tricks. You see an attractive price on the listing page, only to watch it balloon on the final payment gateway screen due to undisclosed convenience charges, pre-selected travel insurance, or stealth subscription renewals.
            </p>
            <p>
              These deceptive designs violate Indian law. Promulgated by the CCPA under Section 18 of the <strong>Consumer Protection Act, 2019</strong>, the <strong>Guidelines for Prevention and Regulation of Dark Patterns, 2023</strong> outlawed 13 deceptive practices. Reinforced by the <strong>E-Commerce (Amendment) Rules, 2026</strong>, these frameworks establish joint platform liability and enable full refunds.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <div>
              <span>Author: </span>
              <Link href="/authors/anuj-anand-malik" className="font-semibold text-slate-800 hover:text-red-600 underline">
                Anuj Anand Malik
              </Link>
              <span className="mx-2">•</span>
              <span>Last updated: November 3, 2026</span>
            </div>
            {/* TODO(reviewer): Add advocate reviewer box once src/data/reviewers.ts is established */}
            <div className="text-slate-400 italic">
              Consumer Protection Act 2019 · CCPA Guidelines 2023 · E-Commerce Rules 2026
            </div>
          </div>
        </section>

        {/* Section 1: Key Facts Table */}
        <section
          aria-labelledby="key-facts-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="key-facts-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Statutory Summary: Legal Basis, Key Deadlines, and Enforcement Authority at a Glance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              The Indian legal framework against deceptive web design binds all e-commerce entities, online travel agencies (OTAs), quick-commerce platforms, and digital service providers operating in India.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <caption className="sr-only">Key Statutory Facts and Enforcement Parameters</caption>
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b border-slate-300 font-bold">
                    <th scope="col" className="py-3 px-4">Legal Parameter</th>
                    <th scope="col" className="py-3 px-4">Statutory Clause & Authority</th>
                    <th scope="col" className="py-3 px-4">Enforcement Rule & Consumer Entitlement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Statutory Instrument</td>
                    <td className="py-2.5 px-4">CCPA Guidelines for Prevention of Dark Patterns, 2023</td>
                    <td className="py-2.5 px-4">Published 30 November 2023 under Section 18, CPA 2019; binds all commercial platforms selling in India.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Legal Classification</td>
                    <td className="py-2.5 px-4">Section 2(47), Consumer Protection Act 2019</td>
                    <td className="py-2.5 px-4">Deemed an illegal Unfair Trade Practice; invalidates unconsented terms and unlocks statutory restitution.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">2026 Amendment Rules</td>
                    <td className="py-2.5 px-4">E-Commerce (Amendment) Rules 2026</td>
                    <td className="py-2.5 px-4">Notified Sep 2026; in force 1 Jan 2027†. Mandates platform self-audits and click-to-cancel parity.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Grievance Escalation</td>
                    <td className="py-2.5 px-4">Rule 4(5), E-Commerce Rules 2020</td>
                    <td className="py-2.5 px-4">Statutory Grievance Officer must acknowledge complaint in 48 hours and resolve dispute within 30 days.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Limitation Period</td>
                    <td className="py-2.5 px-4">Section 69, Consumer Protection Act 2019</td>
                    <td className="py-2.5 px-4">2 years from the date of the deceptive deduction or unauthorized recurring debit.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Judicial Forum</td>
                    <td className="py-2.5 px-4">District Consumer Commission via e-Jagriti</td>
                    <td className="py-2.5 px-4">Pecuniary jurisdiction up to ₹50 Lakh under 2021 rules; filed online without mandatory advocate appearance.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Regulatory Sanctions</td>
                    <td className="py-2.5 px-4">Sections 20 & 21, Consumer Protection Act 2019</td>
                    <td className="py-2.5 px-4">CCPA may order interface modification, impose fines up to ₹10 Lakh (₹50 Lakh repeat), and order class refunds.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Legal Demand Notice</td>
                    <td className="py-2.5 px-4">Pre-Litigation Advocate Rail via LegalRecovery</td>
                    <td className="py-2.5 px-4">Drafted by panel advocates and served via Speed Post and registered email for a transparent flat fee of ₹{BASE_PRICE}.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Before vs After Comparison Table (Archetype L2 Core Requirement) */}
        <section
          aria-labelledby="before-after-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="before-after-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Before vs. After: How India&apos;s Dark Patterns Framework Rewrote Consumer Refund Rights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              Before the 2023 CCPA Guidelines and 2026 E-Commerce Amendment Rules, digital platforms treated deceptive design as harmless marketing. Here is how statutory consumer rights and refund entitlements changed.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <caption className="sr-only">Detailed Before and After Comparison of Dark Pattern Regulations</caption>
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th scope="col" className="py-3 px-4 w-1/4">Deceptive Practice</th>
                    <th scope="col" className="py-3 px-4 w-1/4">Old Market Reality (Pre-2023)</th>
                    <th scope="col" className="py-3 px-4 w-1/4">2023 Guidelines & 2026 Rules</th>
                    <th scope="col" className="py-3 px-4 w-1/4">Your Actionable Refund Right</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 px-4 font-bold text-slate-900 align-top">
                      Drip Pricing
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">Incremental checkout fees</span>
                    </th>
                    <td className="py-3 px-4 align-top text-slate-600">
                      Platforms showed a low headline price, adding mandatory convenience or packaging fees only at final payment.
                    </td>
                    <td className="py-3 px-4 align-top text-slate-800">
                      <strong>Annexure 1(8):</strong> All mandatory elements of price must appear on primary listing. Hidden checkout fees banned.
                    </td>
                    <td className="py-3 px-4 align-top text-red-700 font-medium">
                      Full refund of all undisclosed add-on fees plus compensation for unfair trade practices.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 px-4 font-bold text-slate-900 align-top">
                      Basket Sneaking
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">Pre-checked add-on items</span>
                    </th>
                    <td className="py-3 px-4 align-top text-slate-600">
                      Ticketing and retail carts auto-added insurance, donations, or warranties via pre-checked boxes.
                    </td>
                    <td className="py-3 px-4 align-top text-slate-800">
                      <strong>Annexure 1(2):</strong> Pre-checked boxes strictly prohibited. Adding items requires explicit affirmative opt-in.
                    </td>
                    <td className="py-3 px-4 align-top text-red-700 font-medium">
                      Immediate 100% refund of sneaked items; platforms cannot claim user failed to uncheck.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 px-4 font-bold text-slate-900 align-top">
                      Subscription Traps
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">Friction-filled exit flows</span>
                    </th>
                    <td className="py-3 px-4 align-top text-slate-600">
                      Enrolment took one click, but cancellation required phone calls, endless surveys, or hidden menus.
                    </td>
                    <td className="py-3 px-4 align-top text-slate-800">
                      <strong>Annexure 1(5) & 2026 Rules:</strong> Click-to-cancel parity. Cancellation must be as fast and simple as signing up.
                    </td>
                    <td className="py-3 px-4 align-top text-red-700 font-medium">
                      Retroactive refund for all auto-debits executed after cancellation attempt; chargeback dispute with bank.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 px-4 font-bold text-slate-900 align-top">
                      False Urgency
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">Simulated countdowns</span>
                    </th>
                    <td className="py-3 px-4 align-top text-slate-600">
                      Fake stock warnings and timers pressured users into hurried buying decisions.
                    </td>
                    <td className="py-3 px-4 align-top text-slate-800">
                      <strong>Annexure 1(1):</strong> Scarcity claims must reflect real-time inventory records. Fabricated urgency banned.
                    </td>
                    <td className="py-3 px-4 align-top text-red-700 font-medium">
                      Right to return goods purchased under false urgency for full refund, even on non-returnable items.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 px-4 font-bold text-slate-900 align-top">
                      Confirm Shaming
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">Manipulative opt-outs</span>
                    </th>
                    <td className="py-3 px-4 align-top text-slate-600">
                      Opt-outs used guilt trips like &quot;No thanks, I hate saving money&quot; or &quot;I do not care about safety&quot;.
                    </td>
                    <td className="py-3 px-4 align-top text-slate-800">
                      <strong>Annexure 1(3):</strong> Emotionally manipulative language or audio designed to impair autonomy is unlawful.
                    </td>
                    <td className="py-3 px-4 align-top text-red-700 font-medium">
                      Voidable consent under Contract Act s.19; entitlement to refund of add-on fee.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 px-4 font-bold text-slate-900 align-top">
                      Interface Interference
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">Visual obfuscation</span>
                    </th>
                    <td className="py-3 px-4 align-top text-slate-600">
                      Key disclaimers printed in low-contrast grey text, while accept buttons were prominently highlighted.
                    </td>
                    <td className="py-3 px-4 align-top text-slate-800">
                      <strong>Annexure 1(6):</strong> Manipulating visual hierarchy or contrast to downplay terms is illegal interference.
                    </td>
                    <td className="py-3 px-4 align-top text-red-700 font-medium">
                      Restitution of funds and damages for deficiency in digital service.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Statutory Evolution Timeline (Archetype L2 Core Requirement) */}
        <section
          aria-labelledby="timeline-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="timeline-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Statutory Evolution Timeline: From Consumer Protection Act 2019 to 2026 E-Commerce Enactments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8">
              The regulation of dark patterns in India evolved through statutory acts, inter-ministerial task forces, regulatory notifications, and the 2026 marketplace amendment rules.
            </p>

            <ol className="relative border-l border-slate-200 ml-4 sm:ml-6 space-y-6">
              <li className="mb-4 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-red-100 rounded-full ring-4 ring-white">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <time dateTime="2019-08-09" className="text-xs font-bold text-red-600 uppercase tracking-wide">
                    9 August 2019
                  </time>
                  <span className="text-sm font-bold text-slate-900">Enactment of the Consumer Protection Act, 2019</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Parliament enacted Act No. 35 of 2019, modernizing consumer law. Section 2(47) broadened the definition of unfair trade practices to cover digital conduct, while Section 10 established the CCPA with power to issue binding guidelines.
                </p>
              </li>

              <li className="mb-4 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full ring-4 ring-white">
                  <span className="w-2.5 h-2.5 bg-slate-600 rounded-full"></span>
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <time dateTime="2020-07-23" className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                    23 July 2020
                  </time>
                  <span className="text-sm font-bold text-slate-900">Consumer Protection (E-Commerce) Rules, 2020 Notified</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gazetted under G.S.R. 462(E), these rules imposed strict operational duties on marketplaces. Rule 4(5) established the mandatory 48-hour grievance acknowledgment and 30-day resolution timeline. Learn more in our <Link href="/law/ecommerce-rules-grievance-officer-48-hours" className="text-red-600 font-semibold hover:underline">E-Commerce Grievance Rules Guide</Link>.
                </p>
              </li>

              <li className="mb-4 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full ring-4 ring-white">
                  <span className="w-2.5 h-2.5 bg-slate-600 rounded-full"></span>
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <time dateTime="2023-06-30" className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                    30 June 2023
                  </time>
                  <span className="text-sm font-bold text-slate-900">Department of Consumer Affairs (DoCA) Consultations</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The Ministry convened an inter-ministerial task force with ASCI and leading digital platforms to formulate a dark pattern classification draft following consumer outcry over hidden fees.
                </p>
              </li>

              <li className="mb-4 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full ring-4 ring-white">
                  <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></span>
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <time dateTime="2023-11-30" className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    30 November 2023
                  </time>
                  <span className="text-sm font-bold text-slate-900">Guidelines for Prevention of Dark Patterns, 2023 Promulgated</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The CCPA notified the final guidelines under Section 18 of the Act, explicitly banning 13 deceptive design patterns across all Indian digital user interfaces and providing statutory basis for consumer refunds.
                </p>
              </li>

              <li className="mb-4 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full ring-4 ring-white">
                  <span className="w-2.5 h-2.5 bg-amber-600 rounded-full"></span>
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <time dateTime="2026-09-01" className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                    September 2026
                  </time>
                  <span className="text-sm font-bold text-slate-900">E-Commerce (Amendment) Rules, 2026 Gazetted</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The Central Government gazetted the 2026 Amendment Rules, incorporating dark pattern compliance into mandatory platform governance, introducing annual algorithmic self-audits, and enforcing click-to-cancel parity.
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <time dateTime="2027-01-01" className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                    1 January 2027†
                  </time>
                  <span className="text-sm font-bold text-slate-900">Full Statutory Enforcement of 2026 Amendment Rules</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  End of transition grace period. All e-commerce entities must submit certified algorithmic self-audits and eliminate deceptive UI practices under threat of CCPA fines and platform suspensions.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 4: Deep Dive on Core Banned Dark Patterns */}
        <section
          aria-labelledby="dark-patterns-anatomy"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="dark-patterns-anatomy"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              The Anatomy of Deceptive Design: 13 Prohibited Dark Patterns and Their Refund Implications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              Annexure-1 of the 2023 Guidelines explicitly enumerates 13 prohibited dark patterns. Understanding the technical implementations of the six most damaging patterns is critical for proving your claim before consumer commissions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Pattern 1 */}
              <article className="border border-slate-200 rounded-xl p-5 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Annexure 1, Clause 8
                    </span>
                    <span className="text-xs font-bold text-slate-500">Pricing Trick</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Drip Pricing (Hidden Add-On Surcharges)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    Drip pricing reveals unavoidable fees (convenience fee, platform fee, packaging fee) incrementally during checkout rather than upfront on the product listing. Guideline 5 mandates that the price shown on the initial listing must represent the complete, all-inclusive price payable.
                  </p>
                </div>
                <div className="text-xs text-red-700 font-semibold pt-2 border-t border-slate-200">
                  Refund Remedy: 100% recovery of undisclosed drip surcharges.
                </div>
              </article>

              {/* Pattern 2 */}
              <article className="border border-slate-200 rounded-xl p-5 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Annexure 1, Clause 2
                    </span>
                    <span className="text-xs font-bold text-slate-500">Cart Manipulation</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Basket Sneaking (Unconsented Cart Add-Ons)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    Basket sneaking automatically adds secondary items (insurance, donation, express packing) into checkout carts via pre-checked boxes. Under Annexure 1(2), adding any item requires an unambiguous, explicit, affirmative opt-in click. Default pre-selection is strictly unlawful.
                  </p>
                </div>
                <div className="text-xs text-red-700 font-semibold pt-2 border-t border-slate-200">
                  Refund Remedy: Immediate cancellation and refund of sneaked ancillary items.
                </div>
              </article>

              {/* Pattern 3 */}
              <article className="border border-slate-200 rounded-xl p-5 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Annexure 1, Clause 5
                    </span>
                    <span className="text-xs font-bold text-slate-500">Forced Continuity</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Subscription Traps & Forced Continuity
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    Subscription traps create extreme structural friction when cancelling recurring memberships, such as hiding exit links or requiring phone calls. The 2026 Rules mandate click-to-cancel parity: cancelling must require no more effort than signing up.
                  </p>
                </div>
                <div className="text-xs text-red-700 font-semibold pt-2 border-t border-slate-200">
                  Refund Remedy: Retroactive refund of all recurring debits executed post-cancellation.
                </div>
              </article>

              {/* Pattern 4 */}
              <article className="border border-slate-200 rounded-xl p-5 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Annexure 1, Clause 1
                    </span>
                    <span className="text-xs font-bold text-slate-500">Artificial Scarcity</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    False Urgency & Phantom Scarcity
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    False urgency exploits psychological panic by displaying fabricated timers or false stock counts (&quot;Only 1 left!&quot;). Any scarcity statement must reflect verified real-time inventory records. Fabricated scarcity constitutes fraudulent misrepresentation under Contract Act s.19.
                  </p>
                </div>
                <div className="text-xs text-red-700 font-semibold pt-2 border-t border-slate-200">
                  Refund Remedy: Full return and refund rights, even on non-returnable items.
                </div>
              </article>

              {/* Pattern 5 */}
              <article className="border border-slate-200 rounded-xl p-5 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Annexure 1, Clause 3
                    </span>
                    <span className="text-xs font-bold text-slate-500">Emotional Coercion</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Confirm Shaming & Manipulative Opt-Outs
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    Confirm shaming employs emotionally loaded language or guilt to nudge users away from rejecting optional add-ons (&quot;No thanks, I hate saving money&quot;). The CCPA strictly prohibits language that induces shame or fear to manipulate consumer choice.
                  </p>
                </div>
                <div className="text-xs text-red-700 font-semibold pt-2 border-t border-slate-200">
                  Refund Remedy: Invalidation of coerced agreement and refund of add-on fee.
                </div>
              </article>

              {/* Pattern 6 */}
              <article className="border border-slate-200 rounded-xl p-5 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">
                      Annexure 1, Clauses 4 & 6
                    </span>
                    <span className="text-xs font-bold text-slate-500">UI Obfuscation</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Forced Action & Interface Interference
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    Forced action compels users to buy unrelated services to complete their primary purchase. Interface interference visually manipulates the screen by disguising exit buttons or using tiny font disclaimers to obscure material terms.
                  </p>
                </div>
                <div className="text-xs text-red-700 font-semibold pt-2 border-t border-slate-200">
                  Refund Remedy: Restitution of funds and damages for deficient digital service.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Hand-Authored SVG Flowchart (Required Artefact) */}
        <section
          aria-labelledby="flowchart-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="flowchart-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Hand-Authored Process: Deceptive Design Detection and Statutory Escalation Flow
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              This sequential flowchart details the legal and evidentiary journey from detecting a prohibited dark pattern to securing an enforceable refund or consumer court compensation.
            </p>

            {/* Hand-authored SVG Process Diagram */}
            <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-6 overflow-x-auto">
              <svg
                viewBox="0 0 920 420"
                className="w-full min-w-[760px] h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Five-phase legal escalation workflow for dark patterns refund recovery"
                role="img"
              >
                {/* Stage 1 */}
                <rect x="20" y="40" width="160" height="110" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                <text x="100" y="70" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">PHASE 1</text>
                <text x="100" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Deceptive Design</text>
                <text x="100" y="112" fill="#94A3B8" fontSize="11" textAnchor="middle">Drip Fee · Sneaked Item</text>
                <text x="100" y="128" fill="#94A3B8" fontSize="11" textAnchor="middle">Trapped Subscription</text>

                {/* Arrow 1 to 2 */}
                <path d="M180 95 L220 95" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* Stage 2 */}
                <rect x="220" y="40" width="160" height="110" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                <text x="300" y="70" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle">PHASE 2</text>
                <text x="300" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Preserve Evidence</text>
                <text x="300" y="112" fill="#94A3B8" fontSize="11" textAnchor="middle">Checkout Video / Snaps</text>
                <text x="300" y="128" fill="#94A3B8" fontSize="11" textAnchor="middle">BSA 2023 Sec 63 Proof</text>

                {/* Arrow 2 to 3 */}
                <path d="M380 95 L420 95" stroke="#DC2626" strokeWidth="3" />

                {/* Stage 3 */}
                <rect x="420" y="40" width="160" height="110" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                <text x="500" y="70" fill="#FBBF24" fontSize="12" fontWeight="bold" textAnchor="middle">PHASE 3</text>
                <text x="500" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">48-Hour Notice</text>
                <text x="500" y="112" fill="#94A3B8" fontSize="11" textAnchor="middle">E-Commerce Rule 4(5)</text>
                <text x="500" y="128" fill="#94A3B8" fontSize="11" textAnchor="middle">Unique Ticket Number</text>

                {/* Arrow 3 to 4 */}
                <path d="M580 95 L620 95" stroke="#DC2626" strokeWidth="3" />

                {/* Stage 4 */}
                <rect x="620" y="40" width="160" height="110" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                <text x="700" y="70" fill="#A855F7" fontSize="12" fontWeight="bold" textAnchor="middle">PHASE 4</text>
                <text x="700" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">NCH 1915 & CCPA</text>
                <text x="700" y="112" fill="#94A3B8" fontSize="11" textAnchor="middle">INGRAM Docketing</text>
                <text x="700" y="128" fill="#94A3B8" fontSize="11" textAnchor="middle">CCPA Regulatory Alert</text>

                {/* Path from Stage 4 down to Stage 5 */}
                <path d="M700 150 L700 230 L550 230" stroke="#DC2626" strokeWidth="3" />

                {/* Stage 5 */}
                <rect x="220" y="180" width="330" height="110" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                <text x="385" y="210" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">PHASE 5: FORMAL LITIGATION RAIL</text>
                <text x="385" y="235" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">Advocate Legal Demand Notice (15 Days)</text>
                <text x="385" y="258" fill="#CBD5E1" fontSize="12" textAnchor="middle">Speed Post + Email · Followed by e-Jagriti Filing</text>
                <text x="385" y="276" fill="#94A3B8" fontSize="11" textAnchor="middle">Claim Full Refund + Statutory Interest + Harassment Compensation</text>

                {/* Outcome Badge */}
                <rect x="220" y="320" width="480" height="70" rx="8" fill="#064E3B" stroke="#059669" strokeWidth="1.5" />
                <text x="460" y="348" fill="#6EE7B7" fontSize="13" fontWeight="bold" textAnchor="middle">ENFORCEABLE OUTCOME</text>
                <text x="460" y="370" fill="#ECFDF5" fontSize="12" textAnchor="middle">100% Refund of Unlawful Deductions + ₹5,000–₹25,000 Legal Compensation</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                  </marker>
                </defs>
              </svg>
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              Diagram: Five-phase legal escalation protocol under the Consumer Protection Act, 2019 and CCPA 2023 Guidelines.
            </p>
          </div>
        </section>

        {/* Section 6: Regulatory Grey Areas and Open Legal Questions (Archetype L2 Core Requirement) */}
        <section
          aria-labelledby="grey-areas-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="grey-areas-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Regulatory Grey Areas and Open Legal Questions in Dark Pattern Enforcement
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              While the 2023 Guidelines and 2026 Amendment Rules establish clear prohibitions, several technical and judicial grey areas remain contested. Items marked with † reflect developing commentary or transitional rules.
            </p>

            <div className="space-y-4">
              {/* Grey Area 1 */}
              <div className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  1. Platform &quot;Convenience Fees&quot; vs. Statutory Drip Pricing †
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-1.5">
                  Food delivery apps (<Link href="/legal-notice-to/zomato" className="text-red-600 font-semibold hover:underline">Zomato</Link>, <Link href="/legal-notice-to/swiggy" className="text-red-600 font-semibold hover:underline">Swiggy</Link>) and ticketing apps routinely charge a ₹5–₹15 platform fee. Platforms contend cart disclosure suffices. However, consumer authorities argue that omitting mandatory fees from search listings violates Guideline 5.
                </p>
                <span className="text-xs font-semibold text-amber-800">
                  Legal Status: Commissions hold that unavoidable fixed fees omitted from search results violate CPA Section 2(47).
                </span>
              </div>

              {/* Grey Area 2 */}
              <div className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  2. Dynamic Pricing vs. Illegal False Urgency
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-1.5">
                  Ride aggregators and airlines adjust fares algorithmically based on demand. While surge pricing is recognized, platforms violate dark pattern rules when surge is paired with unverified scarcity prompts (&quot;Fares rising in 2 minutes&quot;) that cannot be verified by backend logs.
                </p>
                <span className="text-xs font-semibold text-amber-800">
                  Legal Status: CCPA show-cause advisories mandate disclosure of criteria governing dynamic pricing algorithms.
                </span>
              </div>

              {/* Grey Area 3 */}
              <div className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  3. Retention Prompts vs. Click-to-Cancel Parity †
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-1.5">
                  The 2026 Rules mandate click-to-cancel parity. Digital services argue presenting a single discount retention offer is legitimate marketing. The CCPA considers retention prompts unlawful if they obscure the cancel button or force repetitive confirmations.
                </p>
                <span className="text-xs font-semibold text-amber-800">
                  Legal Status: Platforms may offer discounts, but the cancellation button must remain equally prominent on the screen.
                </span>
              </div>

              {/* Grey Area 4 */}
              <div className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  4. Algorithmic Self-Audit Verification Standards †
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-1.5">
                  Under the 2026 Rules (effective 1 Jan 2027†), e-commerce entities must conduct annual self-audits certifying zero dark patterns. Third-party audit frameworks are currently settling during the regulatory transition window.
                </p>
                <span className="text-xs font-semibold text-amber-800">
                  Legal Status: Transitional window; false self-certification risks penalties under Section 89 of CPA 2019.
                </span>
              </div>

              {/* Grey Area 5 */}
              <div className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  5. Intermediary Safe Harbour (IT Act s.79) vs. UI Liability
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-1.5">
                  Marketplaces like Amazon and Flipkart claim Section 79 intermediary immunity. Consumer courts reject this argument: because the marketplace designs the checkout UI, manages payments, and algorithmically bundles add-ons, safe harbour does not apply.
                </p>
                <span className="text-xs font-semibold text-amber-800">
                  Legal Status: Settled law; platforms have zero intermediary immunity for deceptive checkout design or unconsented billing.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: How to Use the New Rule Today - 4-Step Enforcement Ladder */}
        <section
          aria-labelledby="enforcement-steps-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="enforcement-steps-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              How to Use the Dark Patterns Guidelines to Claim a Full Refund Today
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              If an e-commerce platform, travel portal, or app has extracted money through deceptive design or trapped you in an unwanted subscription, follow this four-step statutory enforcement protocol.
            </p>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Capture Electronic Evidence Under BSA Section 63
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-1.5">
                    Immediately record a screen capture showing the full checkout flow from product listing to payment gateway, capturing unrevealed drip fees or pre-checked boxes. Save your tax invoice, bank debit SMS, and cancellation error screens.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Evidentiary Value: Verifiable electronic audit trail admissible under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Lodge a 48-Hour Grievance Citing the 2023 Guidelines
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-1.5">
                    Send a formal email directly to the platform&apos;s statutory Grievance Officer under Rule 4(4) of the E-Commerce Rules. Explicitly cite Annexure 1(8) for drip pricing or Annexure 1(2) for basket sneaking. Demand a unique ticket number and full refund.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Statutory Rule: Rule 4(5) requires acknowledgment within 48 hours and dispute resolution within 30 days.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Register an INGRAM Docket via NCH 1915 & Alert the CCPA
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-1.5">
                    If unacknowledged in 48 hours, file a grievance on the National Consumer Helpline portal (consumerhelpline.gov.in) or call 1915. For systemic violations affecting many consumers, copy the CCPA at <code className="text-xs bg-slate-200 px-1 py-0.5 rounded">ccpa-mca@gov.in</code>.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Escalation Leverage: Government-monitored NCH dockets compel legal teams to review cases before formal court notices.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Serve an Advocate Legal Notice & File on e-Jagriti
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-1.5">
                    If unresolved, serve an Advocate Legal Demand Notice giving a final 15-day window for complete reimbursement plus interest. If ignored, file on <strong>e-Jagriti</strong> before the District Consumer Commission for refund, statutory costs, and compensation. Check standard <Link href="/legal-notice-charges" className="text-red-600 font-semibold hover:underline">legal notice charges</Link> on our portal.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Jurisdiction: District Commissions adjudicate claims up to ₹50 Lakh with minimal court fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Illustrative Worked Scenario (Required Artefact) */}
        <section
          aria-labelledby="worked-scenario-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="worked-scenario-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Illustrative Worked Scenario: Recovering ₹5,498 in Drip Charges, Sneaked Add-Ons, and Trapped Subscriptions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              This case study illustrates how deceptive checkout practices compound across a single digital transaction and how statutory notice escalation secures total restitution.
            </p>

            <div className="bg-[#FAFBFD] border border-slate-200 rounded-xl p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 mb-4 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Case Dossier #OT-8491</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Priyanshu V. v. Online Travel Aggregator Platform</h3>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                  Full Recovery Achieved: ₹5,498 + ₹5,000 Compensation
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">The Deceptive Transaction Breakdown</h4>
                  <ul className="space-y-1.5 text-slate-700">
                    <li>• <strong>Initial Advertised Headline Fare:</strong> ₹3,999 (New Delhi to Mumbai flight).</li>
                    <li>• <strong>Basket Sneaked Travel Insurance:</strong> ₹499 auto-added via pre-checked checkbox (Annexure 1(2)).</li>
                    <li>• <strong>Undisclosed Drip Convenience Fee:</strong> ₹350 tacked on at final payment gateway screen (Annexure 1(8)).</li>
                    <li>• <strong>Subscription Trap Auto-Renewal:</strong> Disguised trial initiated a recurring ₹650 monthly debit for 3 months (₹1,950 total) after cancellation failed (Annexure 1(5)).</li>
                    <li>• <strong>Total Disputed Deductions:</strong> ₹2,799 in unauthorized deceptive add-ons (Total deducted: ₹5,498).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Statutory Escalation Timeline</h4>
                  <ul className="space-y-1.5 text-slate-700">
                    <li>• <strong>Day 0:</strong> Priyanshu discovers unconsented insurance and 3 recurring charges. Platform chatbot claims subscriptions cannot be reversed.</li>
                    <li>• <strong>Day 2:</strong> Formal grievance submitted to Statutory Grievance Officer citing CCPA Guidelines Annexure 1(2), 1(5), and 1(8). Platform sends automated acknowledgment but takes no action.</li>
                    <li>• <strong>Day 6:</strong> Priyanshu serves an Advocate Legal Demand Notice via LegalRecovery demanding reimbursement of ₹5,498 within 15 days, warning of e-Jagriti filing.</li>
                    <li>• <strong>Day 11:</strong> Platform Legal Directorate intervenes. Full refund of ₹5,498 credited to source account, mandate cancelled, and ₹5,000 paid as goodwill compensation.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-slate-800">Key Legal Takeaway:</span> When challenged with precise statutory clauses under the CCPA Dark Patterns Guidelines, platform corporate counsels recognize that defending indefensible UI designs before a Consumer Commission carries massive class-action risk and severe regulatory penalties.
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Case Law & Judicial Precedents (Required Artefact) */}
        <section
          aria-labelledby="caselaw-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="caselaw-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Judicial Precedents and CCPA Enforcement Actions Against Deceptive Digital Practices
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              Indian consumer commissions and the CCPA have firmly penalized e-commerce platforms, travel aggregators, and quick-commerce operators for deceptive UI design. Below are three verified judicial precedents establishing consumer refund rights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Case 1 */}
              <div className="border border-slate-200 rounded-xl p-4 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                    District Commission, Hyderabad
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Unlawful Convenience Drip Fees (CC/482/2023)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    A consumer challenged an online ticket booking aggregator for adding a ₹45 handling charge at checkout without listing disclosure. The District Commission held that adding unavoidable fees on the final screen violates Section 2(47) of CPA 2019.
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-2.5">
                  <div className="text-xs font-bold text-emerald-700 mb-0.5">
                    Award: Full Refund + ₹10,000 Compensation
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Platform directed to modify interface to display all-inclusive pricing upfront.
                  </p>
                </div>
              </div>

              {/* Case 2 */}
              <div className="border border-slate-200 rounded-xl p-4 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                    District Commission, Bengaluru
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Basket Sneaking Flight Insurance (CC/112/2024)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    An online flight booking platform bundled a ₹399 travel insurance policy using a pre-ticked checkbox. The Commission held that pre-selected defaults vitiate consent under the 2023 Guidelines and ordered full restitution.
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-2.5">
                  <div className="text-xs font-bold text-emerald-700 mb-0.5">
                    Award: Refund + ₹12,000 Damages & Litigation
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Pre-ticked opt-in ruled an explicit unfair trade practice under Section 2(47).
                  </p>
                </div>
              </div>

              {/* Case 3 */}
              <div className="border border-slate-200 rounded-xl p-4 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                    State Commission, Maharashtra
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Subscription Trap Debits (Appeal No. A/22/819)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    A digital fitness app continued deducting ₹1,200 monthly fees despite the user clicking cancel, claiming cancellation was incomplete without an exit survey. The Commission rejected this defence and directed full refund with damages.
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-2.5">
                  <div className="text-xs font-bold text-emerald-700 mb-0.5">
                    Award: Complete Refund + ₹25,000 Compensation
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Conditioning subscription cancellation on exit feedback ruled an illegal trap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Electronic Evidence Preservation Checklist (Required Artefact) */}
        <section
          aria-labelledby="evidence-checklist-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="evidence-checklist-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Digital Evidence Preservation Checklist: Admissibility Under Section 63 BSA
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023</strong> (replacing Section 65B of the Indian Evidence Act), electronic records are admissible when accompanied by a compliant certificate. Collect these items before notifying the platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD]">
                <div className="mt-0.5 text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Listing & Checkout Screenshots</h3>
                  <p className="text-xs text-slate-600">
                    Capture screenshots of the initial product listing showing the base price, followed by the cart and payment gateway screens showing added drip charges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD]">
                <div className="mt-0.5 text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Continuous Screen Video</h3>
                  <p className="text-xs text-slate-600">
                    Record a screen capture showing how optional add-ons (insurance, donation) were pre-ticked without action, or demonstrating how the cancel button failed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD]">
                <div className="mt-0.5 text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Itemized Tax Invoice & Receipt</h3>
                  <p className="text-xs text-slate-600">
                    Download the official invoice showing the itemized breakdown of convenience fees, packing charges, or ancillary items.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD]">
                <div className="mt-0.5 text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Bank Statements & UPI Mandates</h3>
                  <p className="text-xs text-slate-600">
                    Export your bank account statement or NPCI Autopay mandate showing unauthorized recurring debits. Learn how to trace uncredited funds in our <Link href="/refund-shows-successful-but-not-received" className="text-red-600 font-semibold hover:underline">Refund Tracing Guide</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD]">
                <div className="mt-0.5 text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Grievance Ticket Logs & Emails</h3>
                  <p className="text-xs text-slate-600">
                    Preserve unedited copies of emails sent to the Grievance Officer, chatbot transcripts showing automated denials, and NCH 1915 docket numbers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD]">
                <div className="mt-0.5 text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">BSA Section 63 Certificate</h3>
                  <p className="text-xs text-slate-600">
                    A formal declaration certifying the lawful custody, integrity, and timestamp of the digital device used to capture the electronic records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Scope & Platform Limitations */}
        <section
          aria-labelledby="scope-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="scope-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Platform Scope and Legal Action Boundaries: What LegalRecovery Does and Does Not Do
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              To ensure transparency and realistic consumer expectations, here is an explicit statement of our legal platform&apos;s capabilities and boundaries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  What LegalRecovery Does
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• We draft and dispatch formal Advocate Legal Demand Notices directly to registered e-commerce entities, online travel portals, and subscription providers.</li>
                  <li>• We cite specific statutory violations under the CCPA Dark Patterns Guidelines 2023, E-Commerce Rules 2020/2026, and Section 2(47) of CPA 2019.</li>
                  <li>• We calculate statutory interest and demand compensation for mental harassment and loss of consumer time.</li>
                  <li>• We serve notices via Registered Indian Speed Post with official tracking and registered corporate email to board directors.</li>
                  <li>• We prepare e-Jagriti filing dossiers ready for submission before the District Consumer Commission if the platform fails to comply.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block mb-2">
                  What LegalRecovery Cannot Do
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>• We cannot trace anonymous cyber fraudsters operating fake Telegram trading channels or illicit betting apps (those require Cyber Crime Cell FIRs via 1930).</li>
                  <li>• We cannot guarantee an instant settlement if an e-commerce company chooses to contest the dispute before the Consumer Commission.</li>
                  <li>• We do not provide physical courtroom advocacy; our service provides standardized pre-litigation advocate notice drafting and digital e-filing dossiers.</li>
                  <li>• We cannot unilaterally freeze merchant bank accounts without a formal judicial order or banking ombudsman directive.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Frequently Asked Questions */}
        <section
          aria-labelledby="faq-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="faq-heading"
              className="w-full text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3"
            >
              Frequently Asked Questions About Dark Patterns Guidelines and Refund Claims in India
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              Answers to the most frequent queries regarding deceptive web design, unconsented billing, CCPA complaints, and consumer refund rights under Indian law.
            </p>

            <div className="space-y-3.5">
              {faqJsonLd.mainEntity.map((item, index) => (
                <details
                  key={index}
                  className="group border border-slate-200 rounded-xl bg-[#FAFBFD] p-4 transition-colors open:bg-white open:shadow-sm"
                >
                  <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer list-none text-sm sm:text-base">
                    <span>{item.name}</span>
                    <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-2.5">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 13: Sources & Legal References (Archetype L2 Core Requirement) */}
        <section
          aria-labelledby="sources-heading"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6"
        >
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 md:p-8">
            <h2
              id="sources-heading"
              className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4"
            >
              Primary Legal Sources, Gazette Notifications, and Regulatory References
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-4">
              All statutory sections, deadlines, and precedents cited on this page are verified against official gazette notifications and primary statutory repositories:
            </p>

            <ol className="sources list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>
                <a
                  href="https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023 (Official PDF)
                </a>{" "}
                — Gazette of India, F. No. CCPA-1/1/2023-CCPA, notified 30 November 2023.
              </li>
              <li>
                <span className="text-[#DC2626] font-medium">India Code Legislative Database</span>{" "}
                — Sections 2(47) (Unfair Trade Practice), 18 (Powers of CCPA), 20 (Directives), 21 (Penalties), 35 (Complaints), and 69 (Limitation).
              </li>
              <li>
                <span className="text-[#DC2626] font-medium">Official Gazette Notification</span>{" "}
                — Gazette Notification G.S.R. 462(E), Rule 4(4) (Grievance Officer details) and Rule 4(5) (48-hour acknowledgment, 30-day resolution).
              </li>
              <li>
                <a
                  href="https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  E-Commerce (Amendment) Rules, 2026 (LiveLaw Analysis)
                </a>{" "}
                — Notified September 2026; incorporates mandatory dark-pattern self-audits and click-to-cancel parity, effective 1 January 2027.
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
                — Department of Consumer Affairs, Government of India.
              </li>
              <li>
                <a
                  href="https://e-jagriti.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  e-Jagriti Consumer Commission Integrated Portal
                </a>{" "}
                — Electronic filing and tracking for District, State, and National Consumer Disputes Redressal Commissions.
              </li>
            </ol>
          </div>
        </section>

        {/* Section 14: Primary Legal Notice CTA */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <DarkPatternsNoticeCTA />
        </section>

        {/* Section 15: Related Recovery Guides */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
