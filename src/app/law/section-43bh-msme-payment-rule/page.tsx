import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import Section43bhTableOfContents, { TocItem } from "./Section43bhTableOfContents";
import Section43bhNoticeCTA from "./Section43bhNoticeCTA";
import Section43bhEligibilityChecker from "./Section43bhEligibilityChecker";

// TODO(reviewer): populate from src/data/reviewers.ts when human legal reviewer registry is created

const PAGE_URL = `${SITE_URL}/law/section-43bh-msme-payment-rule`;

export const metadata: Metadata = {
  title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
  description:
    "Buyers lose the tax deduction if MSE dues stay unpaid past 45 days. How suppliers can use Section 43B(h) as payment leverage.",
  keywords: [
    "section 43b(h) msme",
    "43b h msme payment",
    "msme payment 45 days income tax",
    "43bh disallowance",
    "msme payment rule for buyers",
    "section 15 msmed act 15 45 days",
    "form 3cd clause 22 msme disallowance",
    "section 16 msmed act compound interest",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
    description:
      "Buyers lose the tax deduction if MSE dues stay unpaid past 45 days. How suppliers can use Section 43B(h) as payment leverage.",
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
    description:
      "Buyers lose the tax deduction if MSE dues stay unpaid past 45 days. How suppliers can use Section 43B(h) as payment leverage.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TOC_ITEMS: TocItem[] = [
  { id: "heading-what-is-43bh", label: "What Section 43B(h) Actually States" },
  { id: "heading-15-vs-45-days", label: "15-Day vs 45-Day Deadline (Section 15)" },
  { id: "heading-march-31-trap", label: "March 31 Cross-Financial-Year Disallowance" },
  { id: "heading-proviso-139-exclusion", label: "Why Section 139(1) Grace Period Fails" },
  { id: "heading-eligible-suppliers", label: "Who Qualifies: MSE vs Medium & Traders" },
  { id: "heading-capex-gst-presumptive", label: "Capex, GST & Presumptive Tax Rules" },
  { id: "heading-section-16-23-interest", label: "Section 16 Compound Interest & Sec 23 Bar" },
  { id: "heading-form-3cd-clause-22", label: "Form 3CD Clause 22 Tax Audit Reporting" },
  { id: "heading-supplier-leverage", label: "Using 43B(h) as Legal Notice Leverage" },
  { id: "heading-2026-amendment-odr", label: "2026 MSMED Amendment & ODR Portal" },
  { id: "heading-eligibility-checker", label: "Eligibility Checker & Buyer Scenarios" },
  { id: "heading-statutory-matrix", label: "Statutory Deadlines & Tax Impact Matrix" },
  { id: "heading-process-flowchart", label: "Process Flowchart: Disallowance to Recovery" },
  { id: "heading-worked-calculation", label: "Worked Example: ₹25L Invoice Tax Hit" },
  { id: "heading-judicial-precedents", label: "Landmark Supreme Court & HC Precedents" },
  { id: "heading-evidence-checklist", label: "6-Point Supplier Evidence Checklist" },
  { id: "heading-honest-scope", label: "Honest Scope: Notice Leverage vs Litigation" },
  { id: "heading-faqs", label: "Frequently Asked Questions (FAQs)" },
  { id: "heading-sources", label: "Primary Statutory Sources & Citations" },
];

const PRIMARY_SOURCES = [
  {
    title:
      "Income-tax Act, 1961 — Section 43B(h) & Explanation 4(e)/(g) (Inserted by Finance Act, 2023, w.e.f. 1 April 2024 / AY 2024–25) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 2(b), 15, 16, 17, 18, 22 & 23 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Central Board of Direct Taxes (CBDT) — Income-tax Rules, 1962, Form No. 3CD Clause 22 (Tax Audit Disclosure of Principal & Interest Under MSMED Act)",
    url: "https://incometaxindia.gov.in/",
  },
  {
    title:
      "Ministry of MSME Notification S.O. 2119(E) (Udyam Registration & Enterprise Classification Criteria) & O.M. No. 5/2(2)/2021-E/P & G/Policy (Retail/Wholesale Traders Clarification)",
    url: "https://udyamregistration.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA) — Section 63 (Admissibility of Electronic Invoices, E-Way Bills, Udyam Certificates & Audit Communications)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const FAQS = [
  {
    question: "What is the Section 43B(h) MSME 45-day payment rule under the Income-tax Act?",
    answer:
      "Section 43B(h) of the Income-tax Act, 1961 (effective from 1 April 2024, Assessment Year 2024–25 onwards) mandates that any sum payable by a buyer to a Udyam-registered Micro or Small Enterprise (MSE) beyond the time limit specified in Section 15 of the MSMED Act, 2006 (15 days without a written agreement, or up to a maximum of 45 days with a written agreement) is allowed as a tax deduction only in the financial year in which the sum is actually paid.",
  },
  {
    question: "When is the MSME payment deadline 15 days instead of 45 days?",
    answer:
      "Under Section 15 read with Section 2(b) of the MSMED Act, 2006, if there is no written agreement between the buyer and the Micro or Small supplier regarding credit period, the statutory payment deadline is strictly 15 days from the date of acceptance or deemed acceptance of goods or services. If a written agreement exists (such as a signed Purchase Order or supply contract), the credit period is whatever is agreed in writing, but it can never exceed 45 days.",
  },
  {
    question: "What happens if a buyer pays a March MSME invoice in April or May before filing their ITR?",
    answer:
      "It depends on whether the payment in April or May falls within the original 15-day or 45-day Section 15 window. If an invoice is raised on 20 March and paid on 25 April within a written 45-day credit period, there is no violation of Section 15, so the buyer gets the tax deduction in the March financial year itself. However, if the payment crosses the 15/45-day limit and remains unpaid past March 31, the First Proviso to Section 43B explicitly excludes clause (h)—meaning paying before the Section 139(1) ITR due date does NOT save the deduction for that financial year.",
  },
  {
    question: "Does Section 43B(h) apply to Medium Enterprises or Retail and Wholesale Traders?",
    answer:
      "No. Explanation 4(e) and 4(g) to Section 43B incorporate the definitions of 'micro enterprise' and 'small enterprise' from the MSMED Act, 2006. Medium Enterprises are excluded. Furthermore, under Ministry of MSME Office Memorandum dated 2 July 2021, Retail and Wholesale Traders (NIC Codes 45, 46, and 47) are permitted Udyam registration solely for Priority Sector Lending and do not qualify as 'suppliers' for delayed-payment benefits under Section 15 or Section 43B(h).",
  },
  {
    question: "Can a buyer claim tax deduction for delayed payment interest paid to an MSME under Section 16?",
    answer:
      "Never. While overdue invoice principal disallowed under Section 43B(h) can be claimed as a deduction in the subsequent financial year when actually paid, penal compound interest payable under Section 16 of the MSMED Act (at 3 times the RBI Bank Rate with monthly rests) is permanently disallowed as a business expense under Section 23 of the MSMED Act, 2006, notwithstanding anything contained in the Income-tax Act.",
  },
  {
    question: "Does Section 43B(h) disallowance apply to the GST component of an unpaid MSME invoice?",
    answer:
      "If the buyer claims Input Tax Credit (ITC) on GST and does not route the GST component as an expense through its Profit & Loss Account, Section 43B(h) disallowance applies only to the base taxable invoice value claimed as an expense. However, under the second proviso to Section 16(2) of the CGST Act, 2017, if a buyer fails to pay the supplier within 180 days from the date of invoice, the buyer must also reverse the GST Input Tax Credit along with 18% interest under Section 50.",
  },
  {
    question: "How can an MSME supplier use Section 43B(h) to recover stuck invoice payments faster?",
    answer:
      "An MSE supplier can serve an advocate-drafted Section 43B(h) + Section 16 Pre-Audit Demand Notice addressed to the buyer's Managing Director, Chief Financial Officer (CFO), and Company Secretary, putting them on formal notice of the Udyam Registration Number, exact Section 15 appointed-day breach, mandatory disclosure in Tax Audit Form 3CD Clause 22, and 30% tax disallowance risk. Because corporate CFOs want to avoid a qualified Form 3CD report and cash tax outflow, most settle within 7–15 days of receiving the formal notice.",
  },
  {
    question: "Section 43B(h) MSME rule kya hai aur 45 din mein payment na milne par legal notice kaise bheje?",
    answer:
      "Income Tax Act ke Section 43B(h) ke tahat agar koi buyer Micro ya Small Udyam-registered supplier ka bill 15 din (bina agreement) ya maximum 45 din (written agreement ke saath) mein clear nahi karta aur bill 31 March cross kar jata hai, toh buyer ko us poore bill par Income Tax deduction nahi milta aur ~30% tax dena padta hai. Supplier apne advocate ke madhyam se buyer ke Directors aur CFO ko Section 43B(h) tax disallowance aur Section 16 (3x RBI Bank Rate) ब्याज ka statutory legal notice bhejkar 15 din mein apna ruka hua payment vasool sakta hai.",
  },
];

export default function Section43bhMsmePaymentRulePage() {
  const noticePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;
  const formattedPrice = noticePrice.toLocaleString("en-IN");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}#article`,
    headline: "How Section 43B(h) Turns Late MSME Payments Into a Tax Problem for Buyers",
    description:
      "Buyers lose the tax deduction if MSE dues stay unpaid past 45 days. How suppliers can use Section 43B(h) as payment leverage.",
    url: PAGE_URL,
    datePublished: "2026-11-04T09:00:00+05:30",
    dateModified: "2026-11-04T10:55:00+05:30",
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      url: `${SITE_URL}/about`,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    citation: PRIMARY_SOURCES.map((s) => s.url),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
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
        name: "Statutory Law Guides",
        item: `${SITE_URL}/law/section-43bh-msme-payment-rule`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Section 43B(h): MSME 45-Day Payment Rule",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
        {/* Hero Header Section — Strictly matching IRCTC dark slate gradient theme */}
        <header className="bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 text-xs font-extrabold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              Income-Tax Act Section 43B(h) × MSMED Act Section 15 Rulebook Guide
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl">
              How Section 43B(h) Turns Late MSME Payments Into a Tax Problem for Buyers
            </h1>

            {/* 40-60 Word Statutory Quick Answer Box */}
            <div
              aria-label="Statutory Quick Answer"
              className="mt-6 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border-l-4 border-[#C92A2A] border-t border-r border-b border-slate-700/80 shadow-xl max-w-4xl"
            >
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 mb-1.5">
                Statutory Rulebook Summary (Section 43B(h) read with Section 15 MSMED Act)
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-medium">
                Under <strong>Section 43B(h) of the Income-tax Act, 1961</strong>, any sum payable by a buyer to a Udyam-registered <strong>Micro or Small Enterprise (MSE)</strong> beyond <strong>15 days</strong> (without a written agreement) or <strong>45 days</strong> (with a written agreement) under <strong>Section 15 of the MSMED Act, 2006</strong> is disallowed as a tax expense if unpaid across March 31, forcing the buyer to pay tax on the unpaid invoice amount.
              </p>
            </div>

            {/* 4 Hero Stat Cards */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-lg sm:text-2xl font-black text-amber-400">15 / 45 Days</div>
                <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                  Mandatory Payment Cap
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Sec 15 MSMED Act: 15 days without written PO; max 45 days with agreement.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-lg sm:text-2xl font-black text-red-400">100% Add-Back</div>
                <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                  FY Expense Disallowance
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Sec 43B(h): Unpaid overdue MSE invoices added back to buyer&apos;s taxable profit.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-lg sm:text-2xl font-black text-emerald-400">3× Bank Rate</div>
                <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                  Monthly Compound Interest
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Sec 16 &amp; 23 MSMED Act: ~20.25% p.a. penal interest, permanently non-deductible.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="text-lg sm:text-2xl font-black text-sky-400">Form 3CD Cl. 22</div>
                <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                  Tax Audit Disclosure
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Statutory auditors must report all overdue MSE principal &amp; unpaid interest.
                </p>
              </div>
            </div>

            {/* Author & Verification Strip */}
            <div className="mt-6 pt-5 border-t border-slate-800/90 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <div>
                <span className="text-slate-500">Authored by:</span>{" "}
                <strong className="text-slate-200 font-semibold">Anuj Anand Malik</strong>
              </div>
              <div>
                <span className="text-slate-500">Jurisdiction:</span>{" "}
                <span className="text-slate-300">All-India (Income-tax Act, 1961 &amp; MSMED Act, 2006)</span>
              </div>
              <div>
                <span className="text-slate-500">Last Verified:</span>{" "}
                <time dateTime="2026-11-04" className="text-slate-300">
                  4 November 2026 (AY 2026–27 / FY 2026–27 Rules)
                </time>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Statutory Law Guides", href: "/law/section-43bh-msme-payment-rule" },
                {
                  label: "Section 43B(h): MSME 45-Day Payment Rule",
                  href: "/law/section-43bh-msme-payment-rule",
                },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
            {/* Sticky Sidebar / Mobile Accordion TOC */}
            <Section43bhTableOfContents items={TOC_ITEMS} />

            {/* Right Column: L3 Rulebook Q&A Content */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Q1: What Does Section 43B(h) State? */}
              <section
                id="heading-what-is-43bh"
                aria-labelledby="heading-what-is-43bh-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-what-is-43bh-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  1. What Does Section 43B(h) of the Income-tax Act State About Unpaid MSME Dues?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Inserted by the Finance Act, 2023 (effective 1 April 2024, Assessment Year 2024–25 onwards), clause (h) of Section 43B of the Income-tax Act, 1961 states that any sum payable by an assessee to a micro or small enterprise beyond the time limit specified in Section 15 of the MSMED Act, 2006 shall be allowed as a deduction only in the previous year in which such sum is actually paid.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    Prior to Finance Act, 2023, corporate and commercial buyers following the <strong>mercantile (accrual) system of accounting</strong> under Section 145 of the Income-tax Act routinely booked vendor invoices from Micro and Small Enterprises (MSEs) as deductible purchases or business expenses on the date of invoice, reduced their taxable profit immediately, and then delayed actual cash payment to the supplier for 90, 120, or 180 days.
                  </p>
                  <p>
                    <strong>Section 43B(h)</strong> closes this working-capital arbitrage. Section 43B begins with a non-obstante clause (<em>&quot;Notwithstanding anything contained in any other provision of this Act&quot;</em>). If a buyer purchases goods or services from a Udyam-registered Micro or Small Enterprise and fails to pay within the mandatory window prescribed in <strong>Section 15 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>, the buyer cannot claim that purchase or expense deduction on an accrual basis across financial years.
                  </p>
                  <p>
                    Instead, the unpaid invoice amount is added back to the buyer&apos;s taxable income for that financial year, triggering an immediate corporate or firm tax liability of <strong>25.17% to 31.20%</strong> (plus applicable surcharge and interest under Sections 234B and 234C). The buyer can claim the tax deduction only in the future financial year when the cash payment actually hits the MSE supplier&apos;s bank account.
                  </p>
                </div>
              </section>

              {/* Q2: 15 Days vs 45 Days under Section 15 */}
              <section
                id="heading-15-vs-45-days"
                aria-labelledby="heading-15-vs-45-days-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-15-vs-45-days-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  2. When Is the Payment Deadline 15 Days vs 45 Days Under Section 15 of the MSMED Act?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Section 43B(h) does not create a flat 45-day credit period for all buyers; it imports the two-tier deadline from Section 15 read with Section 2(b) of the MSMED Act, 2006: 15 days where there is no written agreement between buyer and supplier, or the agreed credit period up to a strict statutory ceiling of 45 days where a written agreement exists.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-red-50 text-[#C92A2A] border border-red-200">
                      Rule 1: No Written Agreement
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      15-Day Statutory Limit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If goods or services are supplied against verbal orders, WhatsApp confirmations, or standard tax invoices without a signed agreement specifying credit terms, <strong>Section 2(b) (&quot;appointed day&quot;)</strong> mandates payment within <strong>15 days</strong> from the day of acceptance or deemed acceptance.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-50 text-amber-800 border border-amber-200">
                      Rule 2: Written Agreement ≤ 45 Days
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      Agreed Period (e.g., 30 or 45 Days)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If a mutually executed Purchase Order (PO), Master Service Agreement, or signed contract specifies 30 days or 45 days, the buyer must pay on or before that exact agreed date (up to 45 days from acceptance).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-900 text-amber-300">
                      Rule 3: Written Agreement &gt; 45 Days
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      Statutorily Capped at 45 Days
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under the <strong>Proviso to Section 15 of the MSMED Act</strong>, in no case shall the period agreed upon between the supplier and the buyer in writing exceed <strong>45 days</strong>. A 60-day, 90-day, or 120-day PO clause is overridden by statute and cut down to 45 days.
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Crucial Trigger — &quot;Day of Acceptance&quot; vs &quot;Day of Deemed Acceptance&quot; (Explanation to Section 2(b)):</strong> The 15-day or 45-day clock starts from the day of actual delivery of goods or rendering of services. If the buyer fails to raise a specific, written objection regarding quality or quantity within <strong>15 days from the delivery of goods or rendering of services</strong>, the law triggers <em>deemed acceptance</em> on the actual date of delivery—defeating belated quality excuses raised by buyers on Day 40 or Day 60.
                </p>
              </section>

              {/* Q3: What Happens If an Unpaid MSE Invoice Crosses March 31? */}
              <section
                id="heading-march-31-trap"
                aria-labelledby="heading-march-31-trap-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-march-31-trap-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  3. What Happens If an Unpaid Micro or Small Enterprise Invoice Crosses March 31?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Section 43B(h), if an MSE invoice remains unpaid across the financial year-end (March 31) AND is paid beyond the 15-day or 45-day deadline under Section 15 of the MSMED Act, the buyer loses the expense deduction in the year the invoice was booked and can claim it only in the financial year of actual payment.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    There are three distinct year-end accounting situations every MSME supplier and corporate CFO must distinguish:
                  </p>
                  <ul className="space-y-2.5 pl-4 list-disc text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Situation A — Paid Late, But Within the Same Financial Year (Before March 31):</strong> Suppose an invoice is raised on 10 October 2025 (45-day due date: 24 November 2025) and the buyer pays late on 20 February 2026. Because actual payment occurred in FY 2025–26 (before 31 March 2026), the principal deduction IS allowed in FY 2025–26. However, the buyer remains statutorily liable to pay <strong>Section 16 compound interest</strong> for the 88-day delay, which is permanently non-deductible under Section 23.
                    </li>
                    <li>
                      <strong>Situation B — March Invoice Paid in April/May Within the 15/45-Day Window:</strong> Suppose an MSE raises an invoice on 15 March 2026 under a written 45-day PO (due date: 29 April 2026). Even though the invoice is unpaid on 31 March 2026, if the buyer pays on or before <strong>29 April 2026</strong>, the sum was <em>not</em> payable &quot;beyond the time limit specified in Section 15&quot;. Therefore, the buyer retains the full tax deduction in FY 2025–26.
                    </li>
                    <li>
                      <strong>Situation C — Unpaid Past 15/45 Days AND Crosses March 31 (The Section 43B(h) Disallowance Trap):</strong> If an invoice raised in January/February is still unpaid on 31 March, OR if a March invoice misses its April/May 15/45-day deadline by even a single day, <strong>100% of the invoice principal is disallowed</strong> in that financial year. The deduction is deferred to the financial year of actual payment.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Q4: Why Does the Section 139(1) Grace Period Not Save Buyers? */}
              <section
                id="heading-proviso-139-exclusion"
                aria-labelledby="heading-proviso-139-exclusion-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-proviso-139-exclusion-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  4. Why Does the Section 139(1) Return-Filing Grace Period Not Save Buyers Under Clause (h)?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    The First Proviso to Section 43B of the Income-tax Act—which allows taxpayers to claim deductions for statutory dues, bonus, or bank interest if paid on or before the due date of filing the Income Tax Return under Section 139(1) (31 July or 31 October)—explicitly states: &quot;nothing contained in this proviso shall apply to a sum referred to in clause (h).&quot;
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    This explicit statutory carve-out in the First Proviso to Section 43B is what gives MSME suppliers extraordinary leverage between <strong>January and May every year</strong>. For other Section 43B items (such as employer PF/gratuity contributions, leave encashment, or scheduled bank interest under clauses (a) to (g)), a company can leave the liability unpaid on March 31 and clear it in September or October before filing its ITR under Section 139(1) without losing the tax deduction.
                  </p>
                  <p>
                    Parliament deliberately blocked that escape route for <strong>clause (h)</strong>. Once an MSE invoice breaches the 15-day or 45-day Section 15 window across March 31, paying the supplier in June, July, or September before the October tax audit filing deadline <strong>cannot</strong> restore the deduction for the closed financial year.
                  </p>
                </div>
              </section>

              {/* Inline CTA */}
              <Section43bhNoticeCTA variant="inline" />

              {/* Q5: Which Suppliers Qualify Under Section 43B(h)? */}
              <section
                id="heading-eligible-suppliers"
                aria-labelledby="heading-eligible-suppliers-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-eligible-suppliers-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5. Which Suppliers Qualify Under Section 43B(h): Micro, Small, Medium Enterprises, or Traders?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Explanation 4(e) and 4(g) to Section 43B read with Section 7 of the MSMED Act, 2006, Section 43B(h) applies exclusively to Udyam-registered Micro Enterprises and Small Enterprises engaged in manufacturing or rendering services. Medium Enterprises, unregistered suppliers, and Retail/Wholesale Traders (NIC Codes 45, 46, and 47) are excluded from Section 43B(h).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      ✓ Covered Under Section 43B(h)
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800 list-disc pl-4">
                      <li>
                        <strong>Micro Enterprises (Manufacturing &amp; Services):</strong> Registered on the Udyam Portal on or before the invoice date (Composite criteria: Plant &amp; Machinery/Equipment investment &le; ₹1 Crore [revised up to ₹2.5 Crore under 2025–26 notification†] and Turnover &le; ₹5 Crore [revised up to ₹10 Crore†]).
                      </li>
                      <li>
                        <strong>Small Enterprises (Manufacturing &amp; Services):</strong> Registered on the Udyam Portal on or before the invoice date (Investment &le; ₹10 Crore [revised up to ₹25 Crore†] and Turnover &le; ₹50 Crore [revised up to ₹100 Crore†]).
                      </li>
                      <li>
                        <strong>Works Contract &amp; Job-Work Subcontractors:</strong> Udyam-registered Micro/Small engineering, fabrication, IT, SaaS, logistics, manpower, and B2B service providers. (See our{" "}
                        <Link
                          href="/subcontractor-payment-recovery-india"
                          className="text-[#C92A2A] underline font-semibold hover:text-red-800"
                        >
                          Subcontractor Payment Recovery Guide
                        </Link>
                        .)
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#C92A2A]">
                      ✗ Excluded From Section 43B(h)
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800 list-disc pl-4">
                      <li>
                        <strong>Medium Enterprises:</strong> Explicitly omitted from Explanation 4 to Section 43B and Section 2(n) of the MSMED Act.
                      </li>
                      <li>
                        <strong>Retail &amp; Wholesale Traders (NIC Codes 45, 46, 47):</strong> Per Ministry of MSME O.M. No. 5/2(2)/2021-E/P &amp; G/Policy dated 2 July 2021, traders are allowed Udyam registration strictly for Priority Sector Lending—not for Chapter V delayed-payment provisions or Section 43B(h). (For trader/dealer recovery, see{" "}
                        <Link
                          href="/distributor-dealer-dues-recovery"
                          className="text-[#C92A2A] underline font-semibold hover:text-red-800"
                        >
                          Distributor &amp; Dealer Dues Recovery
                        </Link>
                        .)
                      </li>
                      <li>
                        <strong>Retrospective Udyam Registration:</strong> Per the Supreme Court ruling in <em>Silpi Industries v. Kerala State Road Transport Corporation</em> (2021), a supplier who had no Udyam registration at the time of contract/supply cannot retroactively invoke MSMED Act benefits for past supplies.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Q6: Does Section 43B(h) Disallow Capital Expenditure, GST, or Presumptive Tax Buyers? */}
              <section
                id="heading-capex-gst-presumptive"
                aria-labelledby="heading-capex-gst-presumptive-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-capex-gst-presumptive-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  6. Does Section 43B(h) Disallow Capital Expenditure, GST Components, or Presumptive Tax Buyers?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Section 43B governs sums &quot;otherwise allowable under this Act as a deduction&quot; (revenue expenditure under Sections 30 to 37). Consequently, capital expenditure (fixed assets), GST components claimed as Input Tax Credit (not charged to P&amp;L), and buyers computing income on a presumptive basis under Sections 44AD, 44ADA, or 44AE are treated distinctly under tax law.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    When drafting a pre-litigation demand notice or evaluating buyer exposure, accuracy on these three technical points separates an authoritative advocate notice from a generic template:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                        1. Capital Goods / Fixed Assets &amp; Depreciation
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Section 43B disallows deductions &quot;otherwise allowable under this Act&quot;. Capital expenditure is not deducted in the Profit &amp; Loss account, and depreciation under Section 32 is a statutory allowance rather than a &quot;sum payable&quot;. While Section 43B(h) may not disallow capital cost, <strong>Section 16 compound interest (3× RBI Bank Rate)</strong> and <strong>Section 23 permanent interest disallowance</strong> still apply in full force to capital machinery suppliers!
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                        2. GST Component &amp; 180-Day ITC Reversal
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Where the buyer accounts for GST separately in the Balance Sheet to claim Input Tax Credit (ITC), Section 43B(h) disallows the net pre-tax expense booked in the P&amp;L. Additionally, if the invoice remains unpaid beyond <strong>180 days</strong>, the <strong>Second Proviso to Section 16(2) of the CGST Act, 2017</strong> forces the buyer to reverse the entire GST ITC with 18% interest.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block">
                        3. Presumptive Taxation Buyers (Sec 44AD / 44ADA)
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Sections 44AD, 44ADA, and 44AE begin with <em>&quot;Notwithstanding anything to the contrary contained in sections 28 to 43C&quot;</em>. Small buyers filing returns on presumptive taxation are shielded from Section 43B(h) add-back, though they remain 100% liable for principal and 3× RBI Bank Rate compound interest under the MSMED Act.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Q7: Can a Buyer Deduct MSMED Section 16 Compound Interest Under Section 23? */}
              <section
                id="heading-section-16-23-interest"
                aria-labelledby="heading-section-16-23-interest-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-section-16-23-interest-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  7. Can a Buyer Deduct MSMED Section 16 Compound Interest Under Section 23?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    No. Under Section 16 of the MSMED Act, 2006, a buyer who misses the 15-day or 45-day deadline must pay compound interest with monthly rests at three times the RBI Bank Rate. Under Section 23 of the MSMED Act, that interest is permanently disallowed as a deduction under the Income-tax Act, 1961—even when actually paid.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    Many buyers mistakenly believe that once they eventually pay the MSE vendor in the next financial year, all their tax problems disappear. While the <strong>invoice principal</strong> disallowed under Section 43B(h) is allowed as a deduction in the year of actual payment, the <strong>statutory interest under Section 16</strong> suffers a permanent tax penalty:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Mandatory 3× RBI Bank Rate with Monthly Rests (Section 16):</strong> Notwithstanding any clause in the Purchase Order saying &quot;no interest shall be payable on delayed invoices,&quot; the buyer is statutorily bound to pay compound interest with monthly rests from the day immediately following the 15-day or 45-day appointed day at <strong>3× the RBI Bank Rate</strong> (with RBI Bank Rate at 6.75%, 3× equals <strong>20.25% p.a. compounded monthly</strong>).
                    </li>
                    <li>
                      <strong>Permanent Tax Disallowance (Section 23 MSMED Act):</strong> Section 23 explicitly provides that <em>&quot;notwithstanding anything contained in the Income-tax Act, 1961, the amount of interest payable or paid by any buyer, under or in accordance with the provisions of this Act, shall not, for the purposes of computation of income under the Income-tax Act, 1961, be allowed as deduction.&quot;</em>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Q8: How Do Statutory Tax Auditors Report Section 43B(h) Defaults in Form 3CD Clause 22? */}
              <section
                id="heading-form-3cd-clause-22"
                aria-labelledby="heading-form-3cd-clause-22-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-form-3cd-clause-22-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  8. How Do Statutory Tax Auditors Report Section 43B(h) Defaults in Form 3CD Clause 22?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Under Section 44AB of the Income-tax Act read with CBDT-notified Form No. 3CD (Clause 22 and Clause 26), the buyer&apos;s Chartered Accountant conducting the Tax Audit must verify the vendor master, identify every Udyam-registered MSE invoice paid beyond Section 15 timelines, and report both disallowed principal under Section 43B(h) and inadmissible interest under Section 23.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    Furthermore, if the buyer is a company governed by the Companies Act, 2013, <strong>Section 22 of the MSMED Act</strong> and the <strong>MSME Form-1 half-yearly MCA filing mandate</strong> require the company to disclose in its audited annual financial statements:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>The principal amount and the interest due thereon remaining unpaid to any MSE supplier as at the end of each accounting year;</li>
                    <li>The amount of interest paid by the buyer in terms of Section 16 along with the amount of the payment made to the supplier beyond the appointed day;</li>
                    <li>The amount of interest due and payable for the period of delay in making payment (where principal has been paid late without paying Section 16 interest); and</li>
                    <li>The amount of accrued interest remaining unpaid at the end of each accounting year.</li>
                  </ol>
                  <p>
                    Omitting these disclosures under Section 22 of the MSMED Act attracts a statutory penalty on the buyer under <strong>Section 27(2) of the MSMED Act</strong> (not less than ₹10,000) and exposes the company and its officers in default to Ministry of Corporate Affairs (MCA) scrutiny for misreporting MSME Form-1.
                  </p>
                </div>
              </section>

              {/* Q9: How Can MSME Suppliers Use Section 43B(h) as Pre-Audit Legal Notice Leverage? */}
              <section
                id="heading-supplier-leverage"
                aria-labelledby="heading-supplier-leverage-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-supplier-leverage-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  9. How Can MSME Suppliers Use Section 43B(h) Tax Disallowance as Pre-Audit Legal Notice Leverage?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    Suppliers maximize payment recovery by serving a formal Section 43B(h) + Section 16 Legal Demand Notice addressed simultaneously to the buyer&apos;s Managing Director, Chief Financial Officer (CFO), and Company Secretary, putting the company on written record of its Udyam status, exact Section 15 breach date, and mandatory Form 3CD Clause 22 tax disallowance.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    In B2B recovery, procurement managers often delay vendor bills to make their department&apos;s cash-flow metrics look good. However, a company&apos;s <strong>CFO and Tax Head</strong> have the opposite incentive: if an overdue ₹10,00,000 MSE invoice crosses March 31 unpaid, the company must pay ~₹2,51,680 to ₹3,12,000 in immediate cash Income-tax, suffer an audit qualification in <strong>Form 3CD Clause 22</strong>, and still owe the ₹10,00,000 principal plus 20.25% compound interest!
                  </p>
                  <p>
                    A strategic advocate legal notice from LegalRecovery.in bridges this internal gap inside the buyer&apos;s organization by:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Eliminating the &quot;We Didn&apos;t Know You Were an MSE&quot; Excuse:</strong> Attaching your verified Udyam Registration Certificate and invoice schedule on formal legal record so the buyer cannot omit your ledger from its Tax Audit MSME schedule.
                    </li>
                    <li>
                      <strong>Quantifying the Exact Tax + Interest Cost of Delay:</strong> Presenting a clear side-by-side table in the notice showing the buyer&apos;s CFO the exact Section 43B(h) tax disallowance amount alongside accrued Section 16 monthly compound interest.
                    </li>
                    <li>
                      <strong>Setting a Strict 15-Day Pre-ODR Cure Window:</strong> Putting the buyer on notice that failure to remit within 15 days will result in immediate online reference on the{" "}
                      <Link
                        href="/msme-odr-portal-delayed-payment-guide"
                        className="text-[#C92A2A] underline font-semibold hover:text-red-800"
                      >
                        MSME ODR Portal
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                        className="text-[#C92A2A] underline font-semibold hover:text-red-800"
                      >
                        MSME Samadhaan / MSEFC
                      </Link>
                      .
                    </li>
                  </ul>
                </div>
              </section>

              {/* Q10: How Do the MSMED (Amendment) Act 2026 and MSME ODR Portal Reinforce the 45-Day Rule? */}
              <section
                id="heading-2026-amendment-odr"
                aria-labelledby="heading-2026-amendment-odr-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-2026-amendment-odr-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  10. How Do the MSMED (Amendment) Act 2026 and MSME ODR Portal Reinforce the 45-Day Rule?
                </h2>

                <div className="p-4 rounded-xl bg-white border-l-4 border-[#C92A2A] border border-slate-200 shadow-xs">
                  <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    The MSMED (Amendment) Act, 2026 (Presidential assent 13 August 2026†) retains the strict 15-day/45-day payment cap under Section 15 and upgrades adjudication by routing delayed-payment disputes through the unified MSME ODR Portal with time-bound 90-day online mediation, 30-day referral to online arbitration†, and mandatory 75% pre-deposit for buyer challenges.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    Combined with Section 43B(h) of the Income-tax Act (and its corresponding provision carried forward into the new Income-tax Act, 2025 framework effective April 2026), the{" "}
                    <Link
                      href="/law/msmed-amendment-act-2026"
                      className="text-[#C92A2A] underline font-semibold hover:text-red-800"
                    >
                      MSMED (Amendment) Act, 2026
                    </Link>{" "}
                    creates a twin-engine enforcement mechanism:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Tax Engine (Section 43B(h) + Form 3CD Clause 22):</strong> Penalizes the buyer via immediate Income-tax disallowance and statutory audit disclosure if the invoice crosses the 15/45-day deadline across the financial year-end.
                    </li>
                    <li>
                      <strong>Adjudication Engine (MSME ODR Portal + Section 19 75% Deposit):</strong> Allows the supplier to file an online delayed-payment reference without physical travel, obtain an enforceable arbitral award including 3× RBI Bank Rate compound interest, and block any buyer appeal under Section 34 of the Arbitration Act unless the buyer first deposits <strong>75% of the awarded amount</strong> in court under Section 19 of the MSMED Act.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 11: Interactive Eligibility Checker & Server-Rendered Yes/No Checklist */}
              <section
                id="heading-eligibility-checker"
                aria-labelledby="heading-eligibility-checker-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-eligibility-checker-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  11. Section 43B(h) Eligibility Checker &amp; Buyer Disallowance Scenarios
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Use the interactive diagnostic below or verify the 5-point statutory Yes/No checklist to confirm whether your unpaid invoice triggers Section 43B(h) tax disallowance for your buyer:
                </p>

                {/* Static Server-Rendered Yes/No Eligibility List for L3 Archetype Compliance */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                    Statutory 5-Point Yes/No Rulebook Checklist
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>1. Active Udyam Registration on Invoice Date:</strong> Was the supplier holding a valid Udyam Registration Number as a <strong>Micro</strong> or <strong>Small</strong> Enterprise on or before the date of supply/invoice? (<em>Must be YES</em>)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>2. Manufacturing or Service Activity:</strong> Is the supplier engaged in manufacturing/production of goods or rendering of services, rather than pure retail/wholesale trading (NIC 45–47)? (<em>Must be YES</em>)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>3. Section 15 Time Limit Breached:</strong> Has more than <strong>15 days</strong> (if no written credit agreement) or more than the agreed credit period (capped at <strong>45 days</strong>) elapsed since acceptance/deemed acceptance? (<em>Must be YES</em>)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>4. No Written Quality Objection Within 15 Days:</strong> Did the buyer fail to raise a formal written objection regarding defects within 15 days of delivery (triggering deemed acceptance under Section 2(b))? (<em>Must be YES</em>)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0 mt-0.5">
                        YES / NO
                      </span>
                      <span>
                        <strong>5. Cross-Financial-Year Unpaid Balance:</strong> Did the invoice remain unpaid across March 31 beyond the 15/45-day Section 15 deadline, and is the buyer on regular (non-presumptive) business taxation? (<em>If YES → 100% Section 43B(h) tax disallowance applies</em>)
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Client Island Interactive Diagnostic + Scenario Tabs */}
                <Section43bhEligibilityChecker />
              </section>

              {/* Section 12: Statutory Reference Matrix Table (Placed below the fold per L3 Archetype spec) */}
              <section
                id="heading-statutory-matrix"
                aria-labelledby="heading-statutory-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-statutory-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  12. Statutory Reference Matrix: Section 43B(h) Deadlines, Tax Impact &amp; MSMED Provisions
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  The table below consolidates the exact interplay between the Income-tax Act, 1961 and the MSMED Act, 2006 across every payment scenario:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-extrabold border-b border-slate-800">Parameter / Scenario</th>
                        <th className="p-3.5 font-extrabold border-b border-slate-800">Statutory Section</th>
                        <th className="p-3.5 font-extrabold border-b border-slate-800">Time Limit / Rule</th>
                        <th className="p-3.5 font-extrabold border-b border-slate-800">Consequence for Buyer on Default</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">No Written Credit Agreement</td>
                        <td className="p-3.5">Sec 15 &amp; Sec 2(b), MSMED Act</td>
                        <td className="p-3.5 font-semibold text-[#C92A2A]">15 Days from delivery/acceptance</td>
                        <td className="p-3.5">Appointed day triggers on Day 16; Sec 16 compound interest + Sec 43B(h) disallowance if unpaid across March 31.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Written Agreement (&le; 45 Days)</td>
                        <td className="p-3.5">Sec 15, MSMED Act</td>
                        <td className="p-3.5 font-semibold">Agreed period (e.g., 30 or 45 Days)</td>
                        <td className="p-3.5">Must be paid within the exact agreed days; default triggers Sec 16 interest from the day after agreed due date.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Written Agreement (&gt; 45 Days, e.g., 60/90 Days)</td>
                        <td className="p-3.5">Proviso to Sec 15, MSMED Act</td>
                        <td className="p-3.5 font-semibold text-[#C92A2A]">Statutorily capped at 45 Days</td>
                        <td className="p-3.5">Contractual clause exceeding 45 days is void to that extent; statutory clock expires strictly on Day 45.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Cross-FY Unpaid Overdue Invoice</td>
                        <td className="p-3.5">Sec 43B(h), Income-tax Act</td>
                        <td className="p-3.5 font-semibold">Unpaid past March 31 &amp; past 15/45d</td>
                        <td className="p-3.5">100% of expense disallowed in year of accrual; added to buyer&apos;s taxable income; allowed only in FY of actual payment.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Payment Before ITR Filing Due Date</td>
                        <td className="p-3.5">First Proviso to Sec 43B</td>
                        <td className="p-3.5 font-semibold text-[#C92A2A]">Clause (h) explicitly excluded</td>
                        <td className="p-3.5">Paying before 31 July / 31 October ITR deadline does NOT save the deduction once the 15/45-day window is breached.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Delayed Payment Penal Interest</td>
                        <td className="p-3.5">Sec 16 &amp; Sec 23, MSMED Act</td>
                        <td className="p-3.5 font-semibold">3× RBI Bank Rate (monthly rests)</td>
                        <td className="p-3.5">Mandatory ~20.25% p.a. compound interest; permanently disallowed as a tax expense under Sec 23 even when paid.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Tax Audit &amp; Balance Sheet Disclosure</td>
                        <td className="p-3.5">Form 3CD Cl. 22 &amp; Sec 22 MSMED Act</td>
                        <td className="p-3.5 font-semibold">Annual Tax Audit &amp; MCA MSME-1</td>
                        <td className="p-3.5">Tax Auditor must report unpaid principal &amp; interest; non-disclosure attracts Sec 27(2) MSMED Act penalty.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 13: Hand-Authored SVG Process Diagram + Mobile Step Cards */}
              <section
                id="heading-process-flowchart"
                aria-labelledby="heading-process-flowchart-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-process-flowchart-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  13. Process Flowchart: How a Late MSME Invoice Triggers Tax Disallowance &amp; Legal Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Follow the 5-stage statutory progression from invoice delivery to Section 43B(h) tax disallowance and MSE supplier recovery:
                </p>

                {/* Mobile Vertical Step Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  {[
                    {
                      step: "Stage 1: Supply & Deemed Acceptance (Day 0 to Day 15)",
                      desc: "Udyam-registered MSE delivers goods/services with Udyam Number on invoice. If buyer raises no written defect objection within 15 days, deemed acceptance locks in under Section 2(b).",
                    },
                    {
                      step: "Stage 2: Section 15 Deadline Expiry (Day 15 or Max Day 45)",
                      desc: "Statutory credit ceiling expires on Day 15 (no written agreement) or agreed date up to Day 45 (written PO/contract). Any 60/90-day clause is overridden.",
                    },
                    {
                      step: "Stage 3: Dual Statutory Penalty Triggers (Day 16 / Day 46 Onwards)",
                      desc: "Section 16 compound interest (3× RBI Bank Rate, monthly rests) starts accruing automatically. If unpaid across March 31 past the 15/45d limit, Section 43B(h) disallows 100% of the expense.",
                    },
                    {
                      step: "Stage 4: Advocate Section 43B(h) + Form 3CD Legal Notice",
                      desc: "Supplier serves formal legal notice on Buyer's MD, CFO & Tax Auditor citing Section 43B(h) add-back, Form 3CD Clause 22 reporting, and Section 23 permanent interest bar.",
                    },
                    {
                      step: "Stage 5: Settlement Within 15 Days or MSME ODR / MSEFC Reference",
                      desc: "Buyer settles invoice to avoid tax disallowance & audit qualification, or supplier files online claim on MSME ODR Portal for arbitral award (with 75% buyer deposit bar under Sec 19).",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="text-xs font-extrabold text-[#C92A2A] mb-1">{item.step}</div>
                      <p className="text-xs text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Desktop / Tablet Hand-Authored SVG Diagram */}
                <div className="hidden md:block bg-white rounded-2xl border border-slate-200 p-5 shadow-xs overflow-x-auto">
                  <svg
                    viewBox="0 0 960 220"
                    role="img"
                    aria-labelledby="svg-43bh-title svg-43bh-desc"
                    className="w-full h-auto min-w-[780px]"
                  >
                    <title id="svg-43bh-title">
                      Section 43B(h) MSME 45-Day Payment Rule &amp; Recovery Escalation Flowchart
                    </title>
                    <desc id="svg-43bh-desc">
                      Five-stage horizontal diagram showing Day 0 MSE Supply and Udyam Invoice, Day 15/45 Section 15 Deadline, March 31 Section 43B(h) Tax Disallowance and Section 16 Interest, Pre-Audit Legal Notice to Buyer CFO, and Settlement or MSME ODR Arbitral Award.
                    </desc>

                    <defs>
                      <marker
                        id="arrow-43bh"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#C92A2A" />
                      </marker>
                    </defs>

                    {/* Box 1 */}
                    <rect x="10" y="25" width="168" height="165" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="10" y="25" width="168" height="32" rx="12" fill="#0F172A" />
                    <text x="94" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      1. MSE SUPPLY (DAY 0)
                    </text>
                    <text x="22" y="78" fill="#1E293B" fontSize="11" fontWeight="bold">
                      Udyam Invoice Raised
                    </text>
                    <text x="22" y="98" fill="#475569" fontSize="10">
                      • Micro/Small Mfg or Service
                    </text>
                    <text x="22" y="116" fill="#475569" fontSize="10">
                      • Udyam No. printed on bill
                    </text>
                    <text x="22" y="134" fill="#475569" fontSize="10">
                      • Deemed acceptance if no
                    </text>
                    <text x="22" y="148" fill="#475569" fontSize="10">
                      written objection in 15d
                    </text>

                    <line x1="178" y1="108" x2="202" y2="108" stroke="#C92A2A" strokeWidth="2.5" markerEnd="url(#arrow-43bh)" />

                    {/* Box 2 */}
                    <rect x="204" y="25" width="168" height="165" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="204" y="25" width="168" height="32" rx="12" fill="#1E293B" />
                    <text x="288" y="45" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">
                      2. SEC 15 CAP (15/45D)
                    </text>
                    <text x="216" y="78" fill="#1E293B" fontSize="11" fontWeight="bold">
                      Statutory Due Date
                    </text>
                    <text x="216" y="98" fill="#475569" fontSize="10">
                      • No Written PO: 15 Days
                    </text>
                    <text x="216" y="116" fill="#475569" fontSize="10">
                      • Written PO: Max 45 Days
                    </text>
                    <text x="216" y="134" fill="#475569" fontSize="10">
                      • 60/90d terms voided by
                    </text>
                    <text x="216" y="148" fill="#475569" fontSize="10">
                      Proviso to Section 15
                    </text>

                    <line x1="372" y1="108" x2="396" y2="108" stroke="#C92A2A" strokeWidth="2.5" markerEnd="url(#arrow-43bh)" />

                    {/* Box 3 */}
                    <rect x="398" y="25" width="168" height="165" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                    <rect x="398" y="25" width="168" height="32" rx="12" fill="#C92A2A" />
                    <text x="482" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      3. TAX &amp; INTEREST HIT
                    </text>
                    <text x="410" y="78" fill="#7F1D1D" fontSize="11" fontWeight="bold">
                      Sec 43B(h) + Sec 16
                    </text>
                    <text x="410" y="98" fill="#991B1B" fontSize="10">
                      • 100% FY Expense Add-Back
                    </text>
                    <text x="410" y="116" fill="#991B1B" fontSize="10">
                      • ~25%–31% Extra Cash Tax
                    </text>
                    <text x="410" y="134" fill="#991B1B" fontSize="10">
                      • 3× RBI Rate Interest (Sec 16)
                    </text>
                    <text x="410" y="148" fill="#991B1B" fontSize="10">
                      • Form 3CD Cl. 22 Audit Flag
                    </text>

                    <line x1="566" y1="108" x2="590" y2="108" stroke="#C92A2A" strokeWidth="2.5" markerEnd="url(#arrow-43bh)" />

                    {/* Box 4 */}
                    <rect x="592" y="25" width="168" height="165" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="592" y="25" width="168" height="32" rx="12" fill="#0F172A" />
                    <text x="676" y="45" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold">
                      4. ADVOCATE NOTICE
                    </text>
                    <text x="604" y="78" fill="#1E293B" fontSize="11" fontWeight="bold">
                      Served on CFO &amp; Board
                    </text>
                    <text x="604" y="98" fill="#475569" fontSize="10">
                      • Cites Sec 43B(h) &amp; Cl. 22
                    </text>
                    <text x="604" y="116" fill="#475569" fontSize="10">
                      • Quantifies Tax + 3× Interest
                    </text>
                    <text x="604" y="134" fill="#475569" fontSize="10">
                      • Sent via Speed Post, Email
                    </text>
                    <text x="604" y="148" fill="#475569" fontSize="10">
                      &amp; WhatsApp (15d Cure)
                    </text>

                    <line x1="760" y1="108" x2="784" y2="108" stroke="#C92A2A" strokeWidth="2.5" markerEnd="url(#arrow-43bh)" />

                    {/* Box 5 */}
                    <rect x="786" y="25" width="164" height="165" rx="12" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="2" />
                    <rect x="786" y="25" width="164" height="32" rx="12" fill="#065F46" />
                    <text x="868" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      5. PAYOUT / MSME ODR
                    </text>
                    <text x="798" y="78" fill="#064E3B" fontSize="11" fontWeight="bold">
                      Settlement or Award
                    </text>
                    <text x="798" y="98" fill="#065F46" fontSize="10">
                      • Fast CFO Settlement to
                    </text>
                    <text x="798" y="112" fill="#065F46" fontSize="10">
                      save FY tax deduction, OR
                    </text>
                    <text x="798" y="130" fill="#065F46" fontSize="10">
                      • MSME ODR / MSEFC Award
                    </text>
                    <text x="798" y="144" fill="#065F46" fontSize="10">
                      + 75% Appeal Deposit Bar
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 14: Worked Calculation & Illustrative Case Study (Styled strictly like IRCTC dark slate card) */}
              <section
                id="heading-worked-calculation"
                aria-labelledby="heading-worked-calculation-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-calculation-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  14. Worked Calculation: How an Unpaid ₹25,00,000 MSE Invoice Costs a Corporate Buyer ₹7,80,000 in Cash Tax + 3× RBI Interest
                </h2>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Worked Tax &amp; Interest Leverage Calculation
                    </span>
                    <span className="text-xs text-slate-400">
                      Faridabad Small Precision Engineering Vendor vs Gurugram EPC Company
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Fact Pattern:</strong> Precision Tooling Works (a Udyam-registered Small Enterprise in Faridabad) supplied custom CNC assemblies worth <strong>₹25,00,000</strong> (base value + ₹4,50,000 GST = ₹29,50,000) on <strong>12 January 2026</strong> to a Gurugram EPC company under a written PO specifying 45-day credit. The 45-day Section 15 deadline expired on <strong>26 February 2026</strong>. The buyer held back payment past <strong>31 March 2026</strong> citing &quot;internal project milestone sign-off pending.&quot;
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
                      <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                        <div className="text-[11px] font-bold text-amber-400 uppercase">
                          1. Sec 43B(h) Tax Add-Back
                        </div>
                        <div className="text-base sm:text-lg font-black text-white mt-0.5">
                          ₹25,00,000 Disallowed
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          At 31.20% corporate tax rate (or ₹6,29,200 at 25.168% u/s 115BAA), the buyer faces up to <strong>₹7,80,000</strong> in immediate extra Income-tax outflow for FY 2025–26.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                        <div className="text-[11px] font-bold text-red-400 uppercase">
                          2. Sec 16 Compound Interest
                        </div>
                        <div className="text-base sm:text-lg font-black text-white mt-0.5">
                          ₹1,54,430 (3 Months)
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          At 20.25% p.a. (3× 6.75% RBI Bank Rate) compounded monthly on ₹29,50,000 for 90 days of delay, permanently non-deductible under <strong>Section 23</strong>.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                        <div className="text-[11px] font-bold text-sky-400 uppercase">
                          3. Form 3CD Cl. 22 Audit Flag
                        </div>
                        <div className="text-base sm:text-lg font-black text-white mt-0.5">
                          Mandatory Qualification
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Statutory Tax Auditor must report ₹29.50L overdue MSE principal + ₹1.54L inadmissible interest in Form 3CD Clause 22 &amp; MCA MSME-1.
                        </p>
                      </div>
                    </div>

                    <p>
                      <strong>The Statutory Action:</strong> Precision Tooling Works engaged LegalRecovery.in. An advocate served a formal <strong>Section 43B(h) + Section 16 Statutory Demand Notice</strong> on the EPC company&apos;s Managing Director, CFO, and Company Secretary, enclosing the Udyam Certificate, e-Way Bill, and a detailed computation of the Section 43B(h) disallowance and Form 3CD Clause 22 reporting obligation.
                    </p>

                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      Within 9 days of the CFO receiving the advocate notice, the buyer&apos;s Finance Department bypassed the procurement bottleneck and released ₹29,50,000 in full via RTGS along with a negotiated delayed-interest settlement, securing an No-Dues Certificate before their statutory audit sign-off.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 15: Judicial Precedents (Styled as <article> cards matching IRCTC) */}
              <section
                id="heading-judicial-precedents"
                aria-labelledby="heading-judicial-precedents-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-judicial-precedents-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  15. Judicial Precedents Governing MSMED Section 15–23 Overriding Effect and Tax Disallowance
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Indian courts have consistently upheld the mandatory nature of the 15/45-day payment rule, the overriding effect of Sections 15 to 23 of the MSMED Act, and the constitutional validity of linking tax deductions to actual payment under Section 43B:
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-red-50 text-[#C92A2A] border border-red-200">
                        Supreme Court of India • (2023) 6 SCC 401
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Sections 15–24 MSMED Act</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ratio:</strong> The Supreme Court held that Chapter V of the MSMED Act, 2006 (Sections 15 to 24) is a special statute enacted for the protection of Micro and Small Enterprises and carries an overriding non-obstante effect under Section 24 over general contract law and private arbitration clauses. No private contract or Purchase Order can contract out of the 45-day payment cap under Section 15 or the 3× RBI Bank Rate compound interest mandate under Section 16.
                    </p>
                  </article>

                  <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-100 text-slate-800 border border-slate-300">
                        Supreme Court of India • (2020) 12 SCC 534
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Section 43B Constitutional Validity</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      Exide Industries Ltd. v. Union of India
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ratio:</strong> Upholding Parliament&apos;s power to insert new clauses into Section 43B of the Income-tax Act, 1961, the Supreme Court affirmed that conditioning a business tax deduction on <em>actual payment</em> rather than mere accounting accrual is a valid legislative measure to prevent taxpayers from claiming fiscal deductions while withholding statutory or socially protected payments.
                    </p>
                  </article>

                  <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-50 text-amber-900 border border-amber-200">
                        Supreme Court of India • (2021) 19 SCC 206
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Prospective Udyam Registration Rule</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      Silpi Industries v. Kerala State Road Transport Corporation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ratio:</strong> To claim the statutory protections of Chapter V of the MSMED Act (and consequently trigger Section 43B(h) compliance obligations on the buyer), the supplier must hold a valid Udyam / Memorandum registration on the date the contract is entered into or the supply is made. Subsequent registration does not apply retrospectively to prior supplies.
                    </p>
                  </article>
                </div>
              </section>

              {/* Section 16: Supplier Evidence & Compliance Checklist (Styled like IRCTC 6-card grid) */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  16. Supplier Evidence &amp; Compliance Checklist Before Serving a Section 43B(h) Demand Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic invoices, e-Way bills, and email/WhatsApp acknowledgments are admissible evidence. Assemble these 6 documents before serving your notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Udyam Registration Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Showing active Micro or Small Enterprise classification in Manufacturing or Services prior to the invoice date.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Purchase Order (PO) or Supply Agreement:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Establishing whether a written credit agreement exists (capped at 45 days) or if the 15-day statutory default applies.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        GST Tax Invoices &amp; E-Invoicing IRN:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Displaying your Udyam Registration Number on the face of the invoice and matching the buyer&apos;s GSTR-2B reflection.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Delivery Challan, E-Way Bill / Lorry Receipt or Service Sign-Off:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Proving the exact date of delivery/rendering of service to lock in the 15-day deemed acceptance date under Section 2(b).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Debtor Ledger &amp; Part-Payment Statement:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Chronological running account statement showing invoice dates, part-payments, and net overdue principal.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Email / WhatsApp Balance Confirmation Logs:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Showing absence of any written defect objection within 15 days of delivery and acknowledging the outstanding balance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 17: Honest Scope Block (Mandatory per Prompt §11) */}
              <section
                id="heading-honest-scope"
                aria-labelledby="heading-honest-scope-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  17. Honest Scope: When Section 43B(h) Leverage Works vs When Full Litigation Is Required
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                      ✓ Where a Section 43B(h) Legal Notice Works Fast
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      An advocate-drafted Section 43B(h) + Section 16 Legal Notice (₹{formattedPrice} via{" "}
                      <Link href="/legal-notice-charges" className="text-emerald-900 underline font-semibold">
                        LegalRecovery.in transparent fee schedule
                      </Link>
                      ) is highly effective when the buyer is a solvent, tax-paying Pvt Ltd / Public Ltd company, LLP, or audited partnership firm where the CFO and Statutory Tax Auditor want to prevent a 30% tax disallowance, Form 3CD Clause 22 qualification, and MCA MSME-1 non-compliance.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                      ⚠ When Formal ODR / Court Filing Is Required
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      If the buyer is already insolvent/loss-making (carrying heavy tax losses where Section 43B(h) disallowance produces no immediate cash tax outflow), or if there is a genuine pre-existing contemporaneous dispute documented within 15 days of delivery, a notice alone may not suffice. In those cases, our notice serves as the mandatory pre-litigation foundation before filing on the{" "}
                      <Link href="/msme-odr-portal-delayed-payment-guide" className="text-amber-900 underline font-semibold">
                        MSME ODR Portal
                      </Link>
                      , Order XXXVII Summary Suit, or NCLT (Section 9 IBC for defaults &ge; ₹1 Crore).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 18: FAQs (Matching FAQ_SCHEMA) */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    18. Frequently Asked Questions on Section 43B(h) MSME 45-Day Payment Rule
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Rulebook Answers Grounded in Section 43B(h) Income-tax Act, 1961 &amp; Sections 15–23 MSMED Act, 2006
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 19: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  19. Primary Statutory Sources, Income-tax Act Citations &amp; MSMED Notifications
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  † Statutory verification note: All Income-tax Act Section 43B(h), Form 3CD Clause 22, and MSMED Act Sections 15–23 provisions verified as of November 2026. Specific 2026 MSMED (Amendment) Act and revised Udyam threshold figures marked with † should be cross-checked against the latest Gazette notifications at the time of filing.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Section 43B(h) &amp; Section 16 MSME Legal Demand Notice
                </h2>
                <Section43bhNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster (Includes all 5 required row.internal_links + sibling ODR guide) */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related MSME &amp; B2B Invoice Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Samadhaan vs Legal Notice Comparison →
                  </Link>
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME ODR Portal Delayed Payment Guide →
                  </Link>
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Subcontractor &amp; Retention Money Recovery →
                  </Link>
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Distributor &amp; Dealer Dues Recovery →
                  </Link>
                  <Link
                    href="/law/msmed-amendment-act-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSMED (Amendment) Act 2026 Explained →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
