import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CanteenTableOfContents from "./CanteenTableOfContents";
import CanteenScenarioTabs from "./CanteenScenarioTabs";
import CanteenNoticeCTA from "./CanteenNoticeCTA";
import {
  Utensils,
  ShieldAlert,
  FileCheck2,
  Scale,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Calculator,
  Landmark,
} from "lucide-react";

export const revalidate = 86400;

const PAGE_URL =
  "/industrial-canteen-corporate-cafeteria-institutional-caterer-bill-recovery";
const EXACT_H1 =
  "Feeding 2,000 Factory Workers or Hostel Students Daily While Management Withholds 4 Months of Mess Bills? Institutional Caterer Recovery";
// Tightened to 50 chars (within 30-60ch limit) preserving primary keyword
const META_TITLE = "Industrial Canteen, Cafeteria & Mess Bill Recovery";
// Tightened to 147 chars (within 120-155ch limit) preserving statutory facts
const META_DESCRIPTION =
  "Factory, hospital & college mess bills stretched 120 days or cut for hygiene fines? Recover dues via MSMED Act s.15-18, s.43B(h) & Order 37 CPC.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Industrial Canteen Corporate Cafeteria & Hostel Mess Bill Recovery"
        ),
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
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15, 16, 17, 18 & 19 (45-Day Ceiling, 3x RBI Compound Interest & 75% Pre-Deposit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Mandatory Disallowance of Unpaid Micro & Small Enterprise Catering Expenses Beyond 45 Days)",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title:
      "The Indian Contract Act, 1872 — Sections 51, 54, 70, 73 & 74 (Reciprocal Payment Promises & Rebuttal of Un-Sampled Penal Deductions)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits on Signed Catering Contracts & Certified Monthly Bills) & Order XII Rule 6",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Biometric Turnstile Logs, Meal Coupon ERPs & E-Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Central Goods and Services Tax (CGST) Act, 2017 — Section 16(2)(b) & Rule 37 (GSTR-2B ITC Estoppel & 180-Day Reversal)",
    url: "https://cbic-gst.gov.in/pdf/cgst-act.pdf",
  },
  {
    title:
      "Negotiable Instruments Act, 1881 — Section 138 & Section 143A (Criminal Prosecution & 20% Interim Compensation for Dishonoured Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const FAQS = [
  {
    question:
      "Can an industrial canteen or hostel mess contractor file an MSME Samadhaan claim against a factory, hospital, or university trust?",
    answer:
      "Yes. Institutional catering, industrial canteen operations, and hostel mess management fall squarely under NIC Code 5629 (Event catering and other food service activities) on the Udyam Registration portal. If your catering firm holds a valid Micro or Small Udyam Certificate prior to the contract or invoice date, you can file a statutory claim before the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18 of the MSMED Act, 2006 for the full principal plus compound interest at 3 times the RBI bank rate.",
  },
  {
    question:
      "Is a factory or college allowed to deduct a 20% 'food quality or hygiene penalty' 4 months after the meals were served?",
    answer:
      "No. Under Section 15 of the MSMED Act, 2006, if a buyer does not record a written objection within 15 days of receiving the service or monthly bill, the service is deemed accepted by statute. Additionally, under Section 74 of the Indian Contract Act, 1872, arbitrary post-hoc penalties without contemporaneous FSSAI food-sample sealing memos, lab reports, or written show-cause notices are unenforceable 'moonshine' deductions.",
  },
  {
    question:
      "How does Income Tax Section 43B(h) force corporate factories and hospitals to clear canteen bills quickly?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any corporate or audited buyer that fails to pay a Micro or Small Udyam-registered caterer within 45 days (with a written contract) or 15 days (without one) cannot claim that catering bill as a deductible business expense in that financial year. This immediately inflates the buyer's taxable profit and creates a 25%–30% cash tax hit—making CFOs and statutory auditors prioritize your payment.",
  },
  {
    question:
      "What if the client withholds 100% of 4 months' bills citing an 8% biometric meal-coupon count mismatch?",
    answer:
      "A buyer cannot legally freeze an entire ₹20 Lakh ledger over a minor reconciliation variance. Under Order XII Rule 6 CPC (Judgment on Admissions) and MSMED Act principles, the undisputed 92% balance is an admitted liquidated debt payable within the 45-day ceiling. Your legal notice should demand immediate release of the undisputed base amount while proposing a joint BSA Section 63 biometric log audit for the remaining 8%.",
  },
  {
    question:
      "Can we stop daily meal service if the factory owes 4 months of bills, or will they forfeit our security deposit?",
    answer:
      "Under Sections 51 and 54 of the Indian Contract Act, 1872 (Reciprocal Promises), your obligation to procure daily vegetables, LPG, dairy, and pay kitchen staff is dependent on the employer honouring the agreed billing cycle. Before pausing service, serve a formal 7-day Cure-or-Suspension Legal Notice documenting the 120-day breach; this shields your security deposit from wrongful forfeiture under Section 74.",
  },
  {
    question:
      "How does the factory's GSTR-2B / GSTR-3B Input Tax Credit (ITC) claim help our recovery case?",
    answer:
      "If the factory, IT park, or hospital has availed Input Tax Credit (or booked your HSN 9963 GST invoices in its books), it constitutes a binding accounting admission of service receipt. Moreover, under CGST Rule 37, if the buyer fails to pay you within 180 days of the invoice date, they are legally required to reverse the claimed ITC with 18% GST interest.",
  },
  {
    question:
      "What if the hostel or factory issued post-dated cheques for past mess bills that subsequently bounced?",
    answer:
      "A dishonoured cheque triggers parallel criminal liability under Section 138 of the Negotiable Instruments Act, 1881. You must dispatch a statutory demand notice within 30 days of receiving the bank return memo, giving the signatory 15 days to pay. Upon default, you can file a criminal complaint against the Managing Director/Trustee and seek 20% interim compensation under Section 143A.",
  },
];

export default function IndustrialCanteenRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Institutional Canteen & Hostel Mess Bill Recovery SOP",
    description:
      "Step-by-step statutory recovery playbook for industrial canteen contractors, corporate cafeteria operators, and hostel mess caterers facing 90–120+ day unpaid bills or arbitrary hygiene penalties.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Biometric Counts & BSA s.63 Kitchen Evidence",
        text: "Export daily biometric turnstile logs, meal coupon counterfoils, signed canteen committee registers, and GSTR-1/2B reflection before serving notice.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Rebut Backdated Hygiene Fines Under Contract Act s.74 & MSMED s.15",
        text: "Document the absence of contemporaneous 15-day written objections or FSSAI sample memos to invalidate post-hoc quality deductions.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve Dual-Trigger Demand Notice (MSMED s.15–18 + Section 43B(h))",
        text: "Dispatch an Advocate-signed notice to the Plant Head, CFO, Statutory Auditor, and Trustees demanding principal + 3x RBI compound interest.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Issue 7-Day Cure Notice Before Kitchen Demobilization",
        text: "Protect your security deposit under Contract Act s.51/54 by formally notifying management of reciprocal payment default prior to suspending meals.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Escalate to MSEFC Samadhaan, Order 37 CPC, or NI Act s.138",
        text: "File online MSEFC reference for 3x RBI interest awards, Order 37 Summary Suit for non-MSME claims, or Section 138 criminal complaint on bounced cheques.",
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
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
        name: "Hotels, Banquets & Corporate Travel Recovery",
        item: `${SITE_URL}/industries/hotels-banquets-corporate-travel-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industrial Canteen & Mess Bill Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <Utensils className="w-3.5 h-3.5" />
            <span>B2B Creditor SOP · IND-16 Institutional Catering &amp; Mess</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box + Parent Hub Link in First 250 Words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer — Institutional Canteen &amp; Mess Recovery
            </span>
            Part of our{" "}
            <Link
              href="/industries/hotels-banquets-corporate-travel-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Hotels, Banquets &amp; Hospitality Credit Recovery Hub
            </Link>
            : industrial canteen and hostel mess contractors can recover 90–120+ day unpaid bills using{" "}
            <strong>MSMED Act Sections 15–18</strong> (45-day cap &amp; 3x RBI compound interest),{" "}
            <strong>Income Tax Section 43B(h)</strong> expense disallowance, and{" "}
            <strong>Contract Act Section 74</strong> to strike down un-sampled, backdated hygiene penalties.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                45 Days Max
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Statutory Payment Ceiling (MSMED s.15)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                3x RBI Rate
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Monthly Compound Interest (MSMED s.16)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                s.43B(h) Hit
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                100% Tax Disallowance on Buyer
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                15 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buyer Objection Window (Deemed Acceptance)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Hotels, Banquets & Travel Recovery",
                href: "/industries/hotels-banquets-corporate-travel-recovery",
              },
              {
                label: "Industrial Canteen & Mess Bill Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CanteenTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="canteen-cashflow-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Factories &amp; Hostels Freeze 4 Months of Mess Caterer Bills
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Unlike software vendors or equipment suppliers, an industrial canteen contractor, corporate cafeteria operator, hospital nutrition vendor, or university hostel mess caterer operates on a <strong>daily cash-burn working capital cycle</strong>. Every morning at 5:00 AM, you pay wholesale mandis in cash for fresh vegetables, milk, paneer, poultry, cooking oil, and commercial LPG cylinders, while disbursing weekly or monthly wages to cooks, stewards, and cleaning staff on thin ₹55–₹110 per-thali margins.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Yet, large manufacturing plants, IT parks, private hospitals, and university trusts routinely stretch monthly catering invoices to <strong>90–150+ days</strong>. Worse, when the caterer finally threatens to halt kitchen operations, management deploys a predictable playbook: they invent backdated food-taste or hygiene penalties, dispute biometric meal-coupon counts across 120 days, or threaten to forfeit your ₹5–₹10 Lakh security deposit if breakfast is skipped.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Daily Cash Outflow
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Vegetables, dairy, LPG &amp; ration suppliers demand 7-day cash settlement, leaving zero cushion when a plant freezes ₹20+ Lakh.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                    Hostage Kitchen Trap
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Clients exploit your fear of losing the Security Deposit or Bank Guarantee to force continued meal supply without payment.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    Statutory Leverage
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Udyam-registered caterers trigger 3x RBI compound interest (MSMED s.16) and immediate buyer tax disallowance under s.43B(h).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Statutory Matrix */}
            <section
              id="statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  MSMED s.15–18, s.43B(h) &amp; Quality-Penalty Rebuttal Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Indian commercial and MSME law gives institutional caterers decisive statutory weapons against both delayed payments and arbitrary post-hoc deductions. Use this matrix to structure your demand notice and audit response.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Statute / Provision</th>
                      <th className="py-3.5 px-4 font-bold">Core Creditor Right</th>
                      <th className="py-3.5 px-4 font-bold">How It Defeats Canteen Delays</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act, 2006 (s.15 &amp; s.16)
                      </td>
                      <td className="py-3.5 px-4">
                        45-day max credit ceiling; 15-day objection limit; 3x RBI bank rate compound interest.
                      </td>
                      <td className="py-3.5 px-4">
                        Any hygiene/taste complaint raised after 15 days of monthly billing is barred by statutory deemed acceptance.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Income Tax Act (Section 43B(h))
                      </td>
                      <td className="py-3.5 px-4">
                        Disallows unpaid Micro/Small enterprise expenses beyond 45 days in buyer&apos;s tax return.
                      </td>
                      <td className="py-3.5 px-4">
                        Forces factory/hospital CFOs &amp; statutory auditors to clear overdue canteen bills before March 31 audit sign-off.
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act (s.74 &amp; s.51/54)
                      </td>
                      <td className="py-3.5 px-4">
                        Bars unproved penal deductions (s.74); links meal supply to timely payment (s.51/54).
                      </td>
                      <td className="py-3.5 px-4">
                        Strikes down un-sampled hygiene fines &amp; prevents forfeiture of Security Deposit when you suspend unpaid service.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Order XXXVII &amp; Order XII Rule 6 CPC
                      </td>
                      <td className="py-3.5 px-4">
                        Summary Suit on written contracts &amp; immediate decree on admitted undisputed balances.
                      </td>
                      <td className="py-3.5 px-4">
                        Stops management from freezing 100% of a ₹22L ledger over a minor 5%–8% biometric coupon variance.
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGST Act s.16(2)(b) &amp; Rule 37
                      </td>
                      <td className="py-3.5 px-4">
                        ITC availment proves receipt; 180-day non-payment mandates ITC reversal with 18% interest.
                      </td>
                      <td className="py-3.5 px-4">
                        If the factory claimed GSTR-2B credit on your HSN 9963 bills, they cannot deny service delivery in court.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        NI Act, 1881 (s.138 &amp; s.143A)
                      </td>
                      <td className="py-3.5 px-4">
                        Criminal prosecution + 20% interim compensation for dishonoured settlement cheques.
                      </td>
                      <td className="py-3.5 px-4">
                        Applies direct criminal pressure on Managing Directors / Trustees if post-dated mess cheques bounce.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: 5-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  5-Stage Institutional Canteen &amp; Mess Bill Escalation Flow
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this sequential escalation path to recover overdue canteen bills without triggering wrongful security deposit forfeiture or losing statutory interest.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-50 border border-slate-200 rounded-xl p-4 overflow-x-auto">
                <svg
                  viewBox="0 0 920 280"
                  width={920}
                  height={280}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Institutional Canteen and Hostel Mess Bill Recovery Flowchart"
                >
                  <defs>
                    <marker
                      id="arrowCanteen"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="10" y="30" width="160" height="105" rx="10" fill="#0F172A" />
                  <text x="22" y="55" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 (DAY 46)</text>
                  <text x="22" y="75" fill="#FFFFFF" fontSize="12" fontWeight="700">Lock Biometric &amp;</text>
                  <text x="22" y="92" fill="#FFFFFF" fontSize="12" fontWeight="700">GSTR-2B Logs</text>
                  <text x="22" y="115" fill="#CBD5E1" fontSize="10">BSA s.63 Hash + Registers</text>

                  <line x1="170" y1="82" x2="195" y2="82" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowCanteen)" />

                  {/* Stage 2 */}
                  <rect x="198" y="30" width="160" height="105" rx="10" fill="#1E293B" />
                  <text x="210" y="55" fill="#F87171" fontSize="11" fontWeight="700">STAGE 2 (DAY 60)</text>
                  <text x="210" y="75" fill="#FFFFFF" fontSize="12" fontWeight="700">Rebut Un-Sampled</text>
                  <text x="210" y="92" fill="#FFFFFF" fontSize="12" fontWeight="700">Hygiene Penalties</text>
                  <text x="210" y="115" fill="#CBD5E1" fontSize="10">MSMED s.15 + Contract s.74</text>

                  <line x1="358" y1="82" x2="383" y2="82" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowCanteen)" />

                  {/* Stage 3 */}
                  <rect x="386" y="30" width="160" height="105" rx="10" fill="#DC2626" />
                  <text x="398" y="55" fill="#FEE2E2" fontSize="11" fontWeight="700">STAGE 3 (DAY 75)</text>
                  <text x="398" y="75" fill="#FFFFFF" fontSize="12" fontWeight="700">Advocate Notice:</text>
                  <text x="398" y="92" fill="#FFFFFF" fontSize="12" fontWeight="700">CFO &amp; Auditor CC</text>
                  <text x="398" y="115" fill="#FEF2F2" fontSize="10">s.43B(h) + 3x RBI Interest</text>

                  <line x1="546" y1="82" x2="571" y2="82" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowCanteen)" />

                  {/* Stage 4 */}
                  <rect x="574" y="30" width="160" height="105" rx="10" fill="#1E293B" />
                  <text x="586" y="55" fill="#F87171" fontSize="11" fontWeight="700">STAGE 4 (DAY 90)</text>
                  <text x="586" y="75" fill="#FFFFFF" fontSize="12" fontWeight="700">7-Day Cure Notice</text>
                  <text x="586" y="92" fill="#FFFFFF" fontSize="12" fontWeight="700">Before Pause</text>
                  <text x="586" y="115" fill="#CBD5E1" fontSize="10">Shield Deposit (s.51/54)</text>

                  <line x1="734" y1="82" x2="759" y2="82" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowCanteen)" />

                  {/* Stage 5 */}
                  <rect x="762" y="30" width="148" height="105" rx="10" fill="#065F46" />
                  <text x="774" y="55" fill="#A7F3D0" fontSize="11" fontWeight="700">STAGE 5 (DAY 105+)</text>
                  <text x="774" y="75" fill="#FFFFFF" fontSize="12" fontWeight="700">MSEFC / Order 37</text>
                  <text x="774" y="92" fill="#FFFFFF" fontSize="12" fontWeight="700">/ NI Act s.138</text>
                  <text x="774" y="115" fill="#D1FAE5" fontSize="10">75% Appeal Deposit Lock</text>

                  {/* Bottom Branching Tracks */}
                  <rect x="198" y="175" width="220" height="78" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="212" y="198" fill="#0F172A" fontSize="11" fontWeight="700">Track A: Udyam Micro/Small</text>
                  <text x="212" y="216" fill="#475569" fontSize="10">File MSEFC Samadhaan (s.18)</text>
                  <text x="212" y="233" fill="#059669" fontSize="10" fontWeight="700">3x RBI Interest + 75% Deposit</text>

                  <rect x="440" y="175" width="220" height="78" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="454" y="198" fill="#0F172A" fontSize="11" fontWeight="700">Track B: Non-MSME / Medium</text>
                  <text x="454" y="216" fill="#475569" fontSize="10">Order XXXVII CPC Summary Suit</text>
                  <text x="454" y="233" fill="#DC2626" fontSize="10" fontWeight="700">+ Commercial Court s.12A</text>

                  <rect x="682" y="175" width="228" height="78" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                  <text x="696" y="198" fill="#0F172A" fontSize="11" fontWeight="700">Track C: Bounced Mess Cheque</text>
                  <text x="696" y="216" fill="#475569" fontSize="10">NI Act s.138 (30-Day Notice)</text>
                  <text x="696" y="233" fill="#B45309" fontSize="10" fontWeight="700">20% Interim Comp (s.143A)</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  { stage: "Stage 1 (Day 46)", title: "Lock Biometric & GSTR-2B Logs", desc: "Export turnstile CSVs, signed canteen registers & BSA s.63 certificate." },
                  { stage: "Stage 2 (Day 60)", title: "Rebut Un-Sampled Hygiene Fines", desc: "Invoke MSMED s.15 (15-day bar) & Contract Act s.74 against backdated deductions." },
                  { stage: "Stage 3 (Day 75)", title: "Advocate Notice to CFO & Auditor", desc: "Trigger Section 43B(h) tax disallowance & 3x RBI compound interest." },
                  { stage: "Stage 4 (Day 90)", title: "7-Day Cure Notice Before Pause", desc: "Shield Security Deposit under Contract Act s.51/54 before demobilizing." },
                  { stage: "Stage 5 (Day 105+)", title: "MSEFC / Order 37 / s.138 Action", desc: "Escalate to statutory tribunal or criminal cheque bounce court." },
                ].map((step, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      {step.stage}
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{step.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Explorer */}
            <section
              id="canteen-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4 High-Frequency Canteen &amp; Mess Payment Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact institutional bottleneck below to inspect the debtor&apos;s delay tactic, the statutory rebuttal, and the required evidence packet.
              </p>

              <CanteenScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Math */}
            <section
              id="worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Worked Mess Ledger: ₹22.50 Lakh 120-Day Canteen Default Math
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider an Udyam-registered institutional caterer feeding 1,500 workers at an auto-component plant (₹150/worker/day across breakfast, lunch, and tea = ₹5,62,500/month for 4 months = <strong>₹22,50,000</strong> principal, with 15-day credit terms). Management stalls 120 days and proposes an arbitrary ₹3,50,000 &ldquo;hygiene &amp; taste deduction.&rdquo;
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold">
                      Caterer Statutory Claim Ledger
                    </span>
                    <ul className="mt-3 space-y-2.5 text-xs sm:text-sm">
                      <li className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">4-Month Principal (HSN 9963)</span>
                        <span className="font-bold text-white">₹22,50,000</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">Disputed Hygiene Fine (Rebutted s.74)</span>
                        <span className="font-bold text-emerald-400">₹0 Allowed</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-700 pb-2">
                        <span className="text-slate-300">
                          MSMED s.16 Interest (19.5% p.a. = 3x 6.5% RBI, 105 overdue days)
                        </span>
                        <span className="font-bold text-amber-400">+ ₹1,28,700</span>
                      </li>
                      <li className="flex justify-between pt-1">
                        <span className="font-bold text-white">Total Recoverable Demand</span>
                        <span className="font-black text-emerald-400 text-base">₹23,78,700</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 sm:p-5">
                    <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                      Factory Buyer&apos;s Hidden Cost of Delay
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 mb-3">
                      If the plant fails to pay before financial year-end under <strong>Section 43B(h)</strong>, the entire ₹22.50 Lakh expense is disallowed from taxable profit—adding <strong>~₹5.66 Lakh</strong> in immediate corporate tax (at 25.17% effective rate), plus <strong>₹1.28 Lakh+</strong> in compounding statutory interest.
                    </p>
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 underline"
                    >
                      <Calculator className="w-4 h-4" />
                      Compute Exact 3x RBI Compound Interest &amp; s.43B(h) Tax Hit →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Evidence Checklist */}
            <section
              id="biometric-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Biometric Meal Counts, FSSAI &amp; BSA s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before serving a statutory notice or filing before the MSEFC / Commercial Court, assemble these 6 electronic and physical records under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed Canteen / Mess Agreement & Work Order",
                    desc: "Establishes per-plate rates, Minimum Guaranteed Pax (MGP), 15/30-day credit cycle, and Security Deposit terms.",
                  },
                  {
                    title: "2. Biometric / RFID / Meal Coupon Logs (BSA s.63)",
                    desc: "Daily shift-wise headcount CSVs, physical coupon counterfoils, or canteen supervisor sign-off sheets.",
                  },
                  {
                    title: "3. Monthly Tax Invoices & GSTR-1 / 2B Proof",
                    desc: "GST HSN 9963 invoices uploaded to the GST portal proving buyer's Input Tax Credit (ITC) availment.",
                  },
                  {
                    title: "4. Udyam Registration Certificate (NIC 5629)",
                    desc: "Mandatory Micro or Small Enterprise proof predating the disputed invoices to unlock MSMED s.16 & s.43B(h).",
                  },
                  {
                    title: "5. Zero-Complaint Canteen Committee Minutes",
                    desc: "Monthly food committee logs showing no contemporaneous FSSAI sample failure or 15-day written objection.",
                  },
                  {
                    title: "6. Security Deposit / Bank Guarantee & Ration Bills",
                    desc: "Proof of upfront deposit and your own unpaid mandi/LPG/dairy vendor ledgers demonstrating reciprocal breach.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <FileCheck2 className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: s.138, GSTR-2B & Continuity Traps */}
            <section
              id="s138-continuity-traps"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Section 138 Cheques, GSTR-2B Estoppel &amp; Continuity Traps
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  <strong>1. Dishonoured Part-Payment Cheques (NI Act s.138):</strong> Many factory HR or hostel trustees issue post-dated cheques to pacify caterers when bills cross 90 days, only for the cheques to bounce for &ldquo;Insufficient Funds&rdquo; or &ldquo;Payment Stopped.&rdquo; Never miss the strict{" "}
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    30-day Section 138 cheque bounce notice timeline
                  </Link>{" "}
                  from the date of the bank return memo.
                </p>
                <p>
                  <strong>2. GSTR-2B ITC Estoppel:</strong> If the corporate client has claimed Input Tax Credit on your monthly catering invoices, they have legally certified receipt of services to the GST Department. Under CGST Rule 37, withholding payment past 180 days obligates them to reverse that ITC with 18% interest.
                </p>
                <p>
                  <strong>3. Commercial Notice Format &amp; Multi-Channel Service:</strong> Ensure your demand notice is served simultaneously via Speed Post RPAD, official corporate email, and WhatsApp with BSA s.63 delivery logs. You can inspect standard statutory phrasing in our{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Advocate-Vetted Legal Notice Workspace
                  </Link>{" "}
                  or explore our{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Email + WhatsApp + Speed Post RPAD dispatch system
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section id="dual-cta" className="scroll-mt-28">
              <CanteenNoticeCTA />
            </section>

            {/* Section 9: IND-16 Cross-Links */}
            <section
              id="ind16-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Hospitality, Banquet &amp; Institutional Catering Recovery Network
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Explore sibling B2B recovery playbooks across{" "}
                <Link
                  href="/industries/hotels-banquets-corporate-travel-recovery"
                  className="text-[#DC2626] font-semibold underline"
                >
                  IND-16 Hospitality, Banquets &amp; Corporate Travel
                </Link>{" "}
                and core commercial debt recovery desks:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Hotel 'Bill-to-Company' (BTC) City-Ledger Recovery",
                    href: "/hotel-btc-bill-to-company-corporate-credit-account-default-recovery",
                    desc: "Order 37 CPC & GSTR-2B estoppel for unpaid corporate room-night ledgers.",
                  },
                  {
                    title: "IATA Corporate Travel Agent (TMC) Flight Credit Recovery",
                    href: "/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery",
                    desc: "Recover corporate airfare credit defaults before weekly IATA BSP auto-debits.",
                  },
                  {
                    title: "Banquet Hall & Wedding Post-Event Balance Recovery",
                    href: "/banquet-hall-destination-wedding-post-event-balance-cheque-bounce",
                    desc: "Enforce minimum guaranteed pax clauses & Section 138 post-event cheques.",
                  },
                  {
                    title: "B2B Business Dues & Commercial Invoice Recovery",
                    href: "/recovery/business-dues",
                    desc: "Dedicated corporate receivable recovery desk for Indian B2B vendors.",
                  },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all flex items-start justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        {link.title}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">{link.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#DC2626] shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions: Industrial Canteen Bill Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-lg font-black group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Sources */}
            <section
              id="primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Authorities, Bare Acts &amp; Catering Legal References
                </h2>
              </div>

              <ul className="space-y-2.5">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline inline-flex items-center gap-1"
                    >
                      <span>{source.title}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#DC2626]" />
                  <span>
                    Legal Review: <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                  </span>
                </div>
                <span>Updated: November 18, 2026</span>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Related Guides */}
      <RelatedRecoveryGuides />
    </div>
  );
}
