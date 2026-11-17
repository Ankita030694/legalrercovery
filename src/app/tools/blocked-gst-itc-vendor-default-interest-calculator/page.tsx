import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BlockedGstItcCalculatorClient from "./BlockedGstItcCalculatorClient";
import BlockedGstItcTOC from "./BlockedGstItcTOC";
import BlockedGstItcCTA from "./BlockedGstItcCTA";

export const revalidate = 86400;

const PAGE_PATH = "/tools/blocked-gst-itc-vendor-default-interest-calculator";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Blocked GST ITC & Vendor Default Recovery Calculator";
const PAGE_DESCRIPTION =
  "Calculate blocked GST ITC, Section 50 interest at 18% & DRC-01 penalties from vendor non-filing. Compute exact indemnity recoverable via legal notice.";
const H1_TEXT =
  "Interactive Blocked GST ITC, Section 50 Interest & DRC-01 Penalty Vendor Indemnity Calculator";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "blocked gst itc interest and vendor recovery calculator",
    "section 50 cgst 18 percent 24 percent interest calculator vendor default",
    "gstr 2b mismatch financial loss calculator",
    "drc 01 penalty section 73 74 74a vendor indemnity calculator",
    "calculate total claim from non filing gst supplier",
    "vendor gst compliance holdback calculator",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "website",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    question: "Why must a buyer reverse ITC if the vendor fails to file GSTR-3B?",
    answer:
      "Under Section 16(2)(c) of the Central Goods and Services Tax (CGST) Act, 2017, a registered recipient is entitled to claim Input Tax Credit (ITC) only if the tax charged in respect of such supply has actually been paid to the Government, either in cash or through utilization of admissible ITC. When a supplier issues a tax invoice and collects GST from the buyer but defaults on filing GSTR-3B, the tax remains unpaid to the exchequer. Tax authorities issue Form GST ASMT-10 or DRC-01 demanding reversal of the ITC from the buyer, shifting the default burden entirely to the purchasing corporate.",
  },
  {
    question: "What is the statutory interest rate under Section 50(3) for reversed ITC?",
    answer:
      "Following retrospective amendments introduced by the Finance Act, 2022 to Section 50(3) with effect from July 1, 2017, interest on wrongly availed and utilized ITC is levied at 18% per annum under Rule 88B(3) of the CGST Rules. If the unutilized balance in the buyer's electronic credit ledger never fell below the disputed ITC amount, no interest is payable under Section 50(3). However, if the credit was utilized to offset outward tax liability, simple interest accrues daily at 18% per annum from the date of utilization until the date of reversal via Form GST DRC-03.",
  },
  {
    question: "When does Section 50(3) interest jump to 24% per annum under GST law?",
    answer:
      "The higher 24% per annum interest rate under Section 50(3) applies strictly to cases of undue or excess reduction of output tax liability under the second proviso to Section 50(3). For routine vendor non-filing, GSTR-2B mismatches, and wrongly availed and utilized ITC, the statutory interest rate is capped at 18% per annum. Historically, Section 50(3) prescribed up to 24%, but the CBIC and Finance Act 2022 harmonized all input tax credit reversal interest to 18% per annum retrospectively.",
  },
  {
    question: "How do DRC-01 penalties differ across Section 73, Section 74, and Section 74A?",
    answer:
      "Under Section 73 (applicable up to FY 2023-24 for bona fide non-fraud cases), the penalty is 10% of the tax or ₹10,000, whichever is higher, provided the demand is adjudicated under DRC-01. Under Section 74 (fraud, willful misstatement, or suppression of facts), the penalty is 100% of the tax amount. Under the unified Section 74A enacted via Finance Act 2024 (effective FY 2024-25 onwards), non-fraud cases carry a standard 10% penalty, while fraud and suppression cases trigger 100% penalty, with a common 42-month adjudication limitation period.",
  },
  {
    question: "Can a corporate buyer recover reversed GST ITC and interest from the vendor?",
    answer:
      "Yes. Under Section 73 and Section 74 of the Indian Contract Act, 1872, a buyer is entitled to full compensation for any direct financial loss resulting from a breach of contract. Furthermore, where the Purchase Order or Master Services Agreement contains a standard GST Compliance & Indemnity clause under Section 124 of the Contract Act, the vendor is legally bound to indemnify the buyer for the blocked tax principal, 18% statutory interest, DRC-01 penalties, and legal representation expenses. Corporate buyers enforce this through 7-day advocate demand notices, invoice holdbacks, and Summary Suits under Order XXXVII CPC.",
  },
  {
    question: "How should Accounts Payable execute a vendor GST holdback legally?",
    answer:
      "To prevent bad debts, the Accounts Payable and Tax teams should institute an automated GSTR-2B reconciliation holdback. If a vendor's tax invoice does not reflect in Form GSTR-2B by the 14th of the subsequent month, AP should withhold the GST component plus an estimated 18% interest buffer from the vendor's pending running bills or retention money. Upon issuing a formal intimation citing the contract indemnity clause, this holdback remains legally protected against vendor dispute until the supplier uploads GSTR-1 and discharges GSTR-3B.",
  },
  {
    question: "Does the Suncraft Energy Supreme Court ruling protect buyers from automatic ITC denial?",
    answer:
      "Yes. In Suncraft Energy Pvt. Ltd. v. Assistant Commissioner of State Tax (2023), the Calcutta High Court held—and the Supreme Court affirmed by dismissing the department's SLP—that the GST department cannot mechanically force a recipient to reverse ITC merely because of a GSTR-2A/2B mismatch without first proceeding against the defaulting supplier who collected the tax. However, because field formations frequently issue DRC-01 notices regardless, buyers must maintain full invoice, e-way bill, payment, and transport records while simultaneously pursuing contractual recovery against the vendor.",
  },
  {
    question: "What legal recourse exists if the defaulting vendor refuses to pay the indemnity?",
    answer:
      "If the vendor fails to cure the default within 7 days of receiving a statutory Advocate Legal Notice, corporate creditors have three primary legal tracks: (1) Filing a Commercial Summary Suit under Order XXXVII CPC for a liquidated debt based on invoices and tax ledger admissions; (2) Invoking institutional arbitration under Section 21 of the Arbitration and Conciliation Act, 1996 if the PO contains an arbitration clause; or (3) Serving a Section 8 Demand Notice under the Insolvency and Bankruptcy Code (IBC) for operational debts exceeding ₹1 Crore if the vendor is a corporate entity.",
  },
];

export default function BlockedGstItcCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${CANONICAL_URL}#webapp`,
        name: "Interactive Blocked GST ITC, Section 50 Interest & DRC-01 Penalty Vendor Indemnity Calculator",
        url: CANONICAL_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "All (Web Browser)",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        description: PAGE_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        featureList: [
          "CGST Act Section 16(2)(c) blocked input tax credit quantification",
          "Section 50(3) statutory interest calculation at 18% p.a. under Rule 88B",
          "Department DRC-01 penalty estimation across Section 73, 74 & 74A regimes",
          "GSTR-2B reconciliation financial loss and vendor holdback buffer calculator",
          "Accounts Payable automated invoice holdback and net deficit recovery schedule",
          "Downloadable Corporate Claim CSV and copyable 7-day Advocate Demand Notice sheet",
        ],
        author: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${CANONICAL_URL}#software`,
        name: "Blocked GST ITC Vendor Indemnity Calculator",
        applicationCategory: "TaxLegalTechApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
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
            name: "Tools",
            item: `${SITE_URL}/tools`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Blocked GST ITC Calculator",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B-133 &bull; Archetype T1</span>
            <span>&bull;</span>
            <span>Section 6.10 IND-10 FMCG, Durables &amp; C&amp;F Desk</span>
            <span>&bull;</span>
            <span>CGST Act 2017 ss. 16(2)(c) &amp; 50(3)</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Corporate Vendor Indemnity
            </span>
            Corporate tax heads and procurement controllers operating under our{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 underline font-bold hover:text-red-300"
            >
              FMCG Distributors &amp; Super-Stockist Recovery Hub
            </Link>{" "}
            face severe working-capital disruption when suppliers collect GST on commercial invoices but default on filing Form GSTR-3B. Under Section 16(2)(c) of the CGST Act, 2017, the recipient is denied Input Tax Credit (ITC) if the supplier fails to deposit the tax with the Government. When tax authorities issue Form GST ASMT-10 or DRC-01 scrutiny notices, the purchasing corporate must reverse the credit with 18% per annum statutory interest under Section 50(3) and face penalties up to 100%. Under Sections 73 and 124 of the Indian Contract Act, 1872, the corporate buyer possesses an absolute legal right to recover every rupee of blocked tax, accrued interest, penalty, and legal expenses directly from the defaulting supplier.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-10">
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Statutory Burden
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100 mt-1">
                CGST s.16(2)(c)
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buyer must reverse ITC if vendor fails to pay tax
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Accrued Interest
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
                18% p.a. Simple
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Section 50(3) read with Rule 88B daily accrual
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                DRC-01 Penalties
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400 mt-1">
                10% to 100%
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                s.73 (10% min ₹10k) &bull; s.74 (100% fraud) &bull; s.74A
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Contractual Indemnity
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400 mt-1">
                Contract Act s.124
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                100% indemnity + 7-day advocate notice recovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools" },
              {
                label: "Blocked GST ITC & Vendor Calculator",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky Table of Contents */}
          <BlockedGstItcTOC />

          {/* Right Column: Editorial Body & Interactive Tool Island */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The GST Reconciliation Crisis */}
            <section
              id="gst-reconciliation-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  The Corporate Vendor Non-Filing Crisis: Anatomy of Blocked ITC
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In India&apos;s fast-moving corporate supply chains—spanning FMCG manufacturers, electronics distributors, pharmaceutical super-stockists, and engineering EPC contractors—procurement teams issue thousands of purchase orders every month. Corporate buyers diligently pay vendors their full invoice amount, which explicitly incorporates 5%, 12%, 18%, or 28% Goods and Services Tax (GST). The buyer subsequently avails Input Tax Credit (ITC) in their monthly Form GSTR-3B return under the bona fide assumption that the supplier has remitted the collected tax to the national treasury.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                However, when monthly GSTR-2B reconciliations are executed, finance heads frequently uncover a catastrophic default: <strong>the vendor uploaded the invoice to Form GSTR-1 but deliberately defaulted on filing Form GSTR-3B</strong>, or worse, failed to upload the invoice altogether. Under India&apos;s strict GST regime, this non-compliance triggers severe departmental scrutiny. The purchasing corporate is treated as having &ldquo;wrongly availed and utilized&rdquo; input credit, facing coercive demands to reverse the principal credit, pay punitive simple interest under Section 50(3), and absorb departmental penalties under Form GST DRC-01.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                    Failure Mode 1
                  </span>
                  <p className="text-xs font-bold text-slate-900">
                    GSTR-1 Filed, GSTR-3B Defaulted
                  </p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Vendor collects tax, invoices appear in GSTR-2B, but vendor defaults on GSTR-3B tax payment. Tax department invokes Section 16(2)(c) against the buyer.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                    Failure Mode 2
                  </span>
                  <p className="text-xs font-bold text-slate-900">
                    Omission in GSTR-1 (2B Mismatch)
                  </p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Vendor suppresses sales, omitting invoices from GSTR-1. Invoices fail to populate the buyer&apos;s GSTR-2B, triggering Rule 36(4) and DRC-01A automated mismatch demands.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                    Failure Mode 3
                  </span>
                  <p className="text-xs font-bold text-slate-900">
                    Retrospective GSTIN Cancellation
                  </p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    State tax authorities cancel the vendor&apos;s GST registration retrospectively due to non-filing or non-existent premises, labeling all historical buyer ITC invalid.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Interactive React Calculator Tool Component */}
            <BlockedGstItcCalculatorClient />

            {/* Section 3: Statutory Mandate & CGST Section 16(2)(c) */}
            <section
              id="statutory-mandate-s16"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  CGST Section 16(2)(c) &amp; The Recipient&apos;s Legal Burden
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Section 16 of the Central Goods and Services Tax Act, 2017 establishes the fundamental eligibility criteria for claiming Input Tax Credit. While sub-sections 16(2)(a), (aa), and (b) require the buyer to possess a valid tax invoice, have the invoice reported in GSTR-2B, and receive the underlying goods or services, <strong>Section 16(2)(c) imposes a strict statutory condition precedent:</strong>
              </p>

              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs sm:text-sm border-l-4 border-[#DC2626] leading-relaxed">
                &ldquo;Section 16(2)(c): Subject to the provisions of Section 41, the tax charged in respect of such supply has been actually paid to the Government, either in cash or through utilization of input tax credit admissible in respect of the said supply...&rdquo;
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The constitutional validity of Section 16(2)(c) has been challenged across multiple High Courts (including the Delhi, Madras, and Bombay High Courts). While courts have consistently acknowledged that bona fide purchasers should not be penalized for third-party vendor fraud, tax adjudicating authorities continue to apply the bare text of Section 16(2)(c) rigidly. Under current standard operating procedures, when a vendor fails to pay tax, the GST audit wing automatically issues Form GST DRC-01 to the buyer, demanding reversal of the ITC.
              </p>

              {/* Suncraft Energy Judicial Analysis Box */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Supreme Court &amp; High Court Judicial Defense
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold">
                    Binding Precedent
                  </span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  In <em>Suncraft Energy Pvt. Ltd. v. Assistant Commissioner of State Tax</em> (MAT 1218 of 2023), the Calcutta High Court ruled that before demanding ITC reversal from a bona fide purchaser, the tax department must first exhaust all statutory recovery mechanisms against the defaulting supplier. This landmark ruling was affirmed by the Supreme Court of India in Special Leave to Appeal (C) No. 27827/2023. While corporate tax teams must vigorously cite <em>Suncraft Energy</em> in their replies to Form DRC-01A, commercial prudence dictates that corporates immediately initiate legal indemnity recovery against the supplier to prevent irreparable cash flow loss.
                </p>
              </div>
            </section>

            {/* Section 4: Section 50(3) Interest Rules (18% vs 24% Decoded) */}
            <section
              id="section-50-interest-rules"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  04
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Section 50(3) Interest Mechanics: 18% vs 24% &amp; Rule 88B
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a corporate buyer reverses ITC due to vendor default, the single largest compounding component of financial loss is statutory interest under Section 50(3) of the CGST Act. Corporate controllers must understand the exact statutory evolution governing this rate:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Statutory Provision</th>
                      <th className="p-3">Applicable Scenario</th>
                      <th className="p-3">Statutory Rate</th>
                      <th className="p-3">Legal Basis &amp; Amendments</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">
                        Section 50(3) &bull; Primary Rule
                      </td>
                      <td className="p-3 text-slate-600">
                        ITC wrongly availed AND utilized to discharge tax liability
                      </td>
                      <td className="p-3 font-black text-emerald-600">
                        18% per annum
                      </td>
                      <td className="p-3 text-slate-600">
                        Retrospectively substituted by Finance Act, 2022 w.e.f. 01-07-2017. Governed by Rule 88B(3).
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-900">
                        Section 50(3) Proviso &bull; Secondary
                      </td>
                      <td className="p-3 text-slate-600">
                        Undue or excess reduction in outward tax liability
                      </td>
                      <td className="p-3 font-black text-red-600">
                        24% per annum
                      </td>
                      <td className="p-3 text-slate-600">
                        Applies only where outward liability is unlawfully suppressed. Does NOT apply to vendor ITC defaults.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">
                        Rule 88B(3) Balance Rule
                      </td>
                      <td className="p-3 text-slate-600">
                        Wrongly availed ITC remaining unutilized in Electronic Credit Ledger
                      </td>
                      <td className="p-3 font-black text-slate-900">
                        0% Interest
                      </td>
                      <td className="p-3 text-slate-600">
                        If the credit ledger balance never dipped below the disputed ITC amount, zero interest is payable.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1.5">
                <span className="font-bold text-amber-950 uppercase tracking-wider text-[11px] block">
                  Rule 88B Utilization Principle Decoded
                </span>
                <p className="text-amber-800 leading-relaxed">
                  Under Rule 88B(3) inserted via Notification No. 14/2022-CT, interest under Section 50(3) runs strictly from the date the wrongly availed credit is <em>utilized</em> (i.e., when the electronic credit ledger balance falls below the amount of wrongly availed credit) until the date of reversal in Form GSTR-3B or payment through Form GST DRC-03. This distinction saves corporates hundreds of thousands of rupees when challenging arbitrary departmental interest notices calculated from the date of invoice.
                </p>
              </div>
            </section>

            {/* Section 5: DRC-01 Penalties: Section 73, 74 & 74A */}
            <section
              id="drc01-penalties-73-74-74a"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  05
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  DRC-01 Departmental Penalties: Section 73, 74 &amp; 74A Regimes
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When the tax department initiates recovery via Form GST DRC-01, the penalty exposure varies drastically depending on whether the notice is issued under Section 73, Section 74, or the newly enacted unified regime under Section 74A:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-900">Section 73</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      Bona Fide Default
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applies up to FY 2023-24 to cases not involving fraud, willful misstatement, or suppression. The penalty is capped at <strong>10% of the tax or ₹10,000, whichever is higher</strong>. If tax and interest are paid within 30 days of DRC-01, penalty is reduced to zero under Section 73(8).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/40 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-red-900">Section 74</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                      Fraud / Non-Existent
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Invoked when tax authorities allege circular trading, fake invoices, or non-existent vendors. Imposes a mandatory <strong>100% penalty</strong> on the tax amount. Adjudication timeline extends up to 5 years from the due date of the annual return.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-blue-900">Section 74A</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      Finance Act 2024
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Enacted via the Finance (No. 2) Act, 2024 for FY 2024-25 onwards. Unifies limitation to 42 months for SCN issuance across both fraud and non-fraud cases. Preserves the <strong>10% penalty for non-fraud and 100% penalty for fraud</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Worked Corporate Example Ledger */}
            <section
              id="worked-corporate-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  06
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Worked Financial Example: ₹50 Lakh FMCG Vendor Default Ledger
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consider an FMCG corporate distributor purchasing packaging material worth ₹50,00,000 from a supplier under 18% GST. The corporate paid the full invoice of ₹59,00,000 (including ₹9,00,000 GST) in May 2024. In November 2026, the State GST Department issues Form GST DRC-01 following an audit revealing that the vendor never filed Form GSTR-3B for FY 2024-25.
              </p>

              {/* Simulation Ledger Table */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Audit Simulation: 900 Days Default Ledger
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    Assessment Period: May 2024 to Nov 2026
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Base Taxable Supply (Packaging Material):</span>
                    <span className="font-mono font-bold text-slate-100">₹50,00,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Blocked GST ITC Principal (18% CGST + SGST):</span>
                    <span className="font-mono font-bold text-red-400">₹9,00,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">
                      Section 50(3) Interest (18% p.a. for 900 Days):
                    </span>
                    <span className="font-mono font-bold text-amber-400">₹3,99,452</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">
                      DRC-01 Department Penalty (10% under Section 73):
                    </span>
                    <span className="font-mono font-bold text-amber-400">₹90,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Advocate Notice &amp; Tax Representation Costs:</span>
                    <span className="font-mono font-bold text-slate-300">₹25,000</span>
                  </div>
                  <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-slate-300">
                      Total Corporate Indemnity Claim:
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white font-mono">
                      ₹14,14,452
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                  <strong>Financial Impact:</strong> The vendor&apos;s non-filing converts an original ₹9,00,000 ITC into an aggregate ₹14,14,452 financial hemorrhage—an increase of <strong>57.16%</strong> over the principal tax. Without an aggressive legal demand notice and contractual holdback, this entire sum becomes an unrecoverable dead loss on the corporate balance sheet.
                </div>
              </div>
            </section>

            {/* Section 7: Vendor Indemnity Clauses & Statutory Holdbacks */}
            <section
              id="contract-indemnity-holdback"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  07
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Contractual Indemnity &amp; Accounts Payable Holdback SOP
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under the Indian Contract Act, 1872, businesses possess powerful common law and statutory rights to insulate themselves from supplier tax delinquency. Corporate legal and procurement teams must implement a two-tier defense:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block">
                    1. Contract Act Section 124 (Indemnity Clause)
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A well-drafted Purchase Order must include an express GST Indemnity covenant stating that the vendor shall hold the buyer harmless against any tax disallowance, Section 50 interest, DRC-01 penalty, and legal expenses resulting from the vendor&apos;s non-filing, late filing, or cancellation of GSTIN. Under Section 125, the promisee is entitled to recover all damages, costs, and sums incurred.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block">
                    2. Right of Set-Off &amp; Vendor Holdback
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the doctrine of equitable set-off, Accounts Payable is legally empowered to withhold running payments or draw upon security deposits to cover the quantified exposure (Tax + 18% Interest + Penalty). Freezing these funds prevents the supplier from absconding or declaring insolvency while GST proceedings are underway.
                  </p>
                </div>
              </div>

              {/* Recommended Purchase Order Clause Box */}
              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-2 font-mono">
                <span className="text-[11px] font-bold uppercase text-red-400 tracking-wider block font-sans">
                  Recommended Model GST Compliance &amp; Indemnity Clause for POs
                </span>
                <p className="text-slate-300 leading-relaxed">
                  &ldquo;The Supplier warrants that it shall strictly comply with all provisions of the CGST/SGST/IGST Acts, including timely filing of Form GSTR-1 and GSTR-3B. If the Purchaser is denied Input Tax Credit (ITC) under Section 16(2)(c) due to the Supplier&apos;s non-filing, mismatch, or retrospective cancellation, the Supplier agrees to unconditionally indemnify and reimburse the Purchaser within 7 days for the full tax principal, statutory interest accrued under Section 50(3), departmental penalties under Section 73/74/74A, and legal expenses. The Purchaser reserves the absolute right to set off such amounts against any pending bills or security deposits.&rdquo;
                </p>
              </div>
            </section>

            {/* Section 8: Statutory Escalation Roadmap */}
            <section
              id="statutory-escalation-roadmap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  08
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  7-Day Escalation Protocol: From Advocate Notice to Court Execution
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When informal emails and accounting reminders fail to compel the vendor to file GSTR-3B or pay indemnity, corporate creditors must execute a disciplined 4-stage statutory escalation protocol:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Stage 1: Serve 7-Day Tri-Channel Advocate Demand Notice
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Issue a formal legal notice drafted by an advocate citing Section 16(2)(c), Section 50(3), and Contract Act Section 124. Serve simultaneously via registered Speed Post RPAD, WhatsApp, and official email with electronic delivery tracking under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Demand payment or proof of GSTR-3B filing within 7 days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Stage 2: Execute AP Running Invoice &amp; Security Deposit Freeze
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Simultaneously notify Accounts Payable to freeze all pending disbursements to the vendor up to the gross indemnity amount. If security cheques or bank guarantees are held, issue an intimation of invocation under the terms of the Master Agreement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Stage 3: File Commercial Summary Suit (Order XXXVII CPC)
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      If the vendor fails to cure the default within 7 days, file a Summary Suit under Order XXXVII of the Code of Civil Procedure in the competent Commercial Court. Because the debt is liquidated (based on tax invoices and GST portal filings), the defendant has no unconditional right to defend without obtaining leave of the court.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Stage 4: Section 21 Arbitration or Section 8 IBC Demand
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      For corporate vendors with debts exceeding ₹1 Crore, serve a Section 8 Demand Notice under the Insolvency and Bankruptcy Code (IBC). Alternatively, invoke emergency sole arbitrator appointment under Section 21 and Section 11 of the Arbitration and Conciliation Act, 1996 to obtain an enforceable decree.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Dual Track Conversion CTA */}
            <BlockedGstItcCTA />

            {/* Section 9: Frequently Asked Questions Accordions */}
            <section
              id="frequently-asked-questions"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  09
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions (FAQ) for CFOs &amp; Tax Controllers
                </h2>
              </div>

              <div className="space-y-3 pt-2">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 transition-all duration-200 open:border-[#DC2626]/40 open:shadow-xs"
                  >
                    <summary className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 cursor-pointer list-none select-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory References & Precedents */}
            <section
              id="statutory-references-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Statutory References, Judicial Citations &amp; Internal Cross-Links
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Statutory Framework Citations
                  </p>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2256"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-700 underline hover:text-red-800"
                      >
                        CGST Act, 2017 &bull; Section 16(2)(c) &amp; Section 50(3)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cbic.gov.in"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-700 underline hover:text-red-800"
                      >
                        CGST Rules, 2017 &bull; Rule 88B (Manner of Calculating Interest)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-700 underline hover:text-red-800"
                      >
                        Indian Contract Act, 1872 &bull; Sections 73, 74, 124 &amp; 125
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2191"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-700 underline hover:text-red-800"
                      >
                        Code of Civil Procedure, 1908 &bull; Order XXXVII Summary Suits
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/1362"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-700 underline hover:text-red-800"
                      >
                        Bharatiya Sakshya Adhiniyam, 2023 &bull; Section 63 Electronic Records
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Landmark Judicial Authorities
                  </p>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    <li>
                      <strong>Calcutta High Court (Affirmed by Supreme Court):</strong>{" "}
                      <em>Suncraft Energy Pvt. Ltd. v. Asst. Commissioner</em> (2023)
                    </li>
                    <li>
                      <strong>Madras High Court:</strong>{" "}
                      <em>D.Y. Beathel Enterprises v. State Tax Officer</em> (2021)
                    </li>
                    <li>
                      <strong>Madras High Court:</strong>{" "}
                      <em>Refex Industries Ltd. v. Assistant Commissioner</em> (2020)
                    </li>
                    <li>
                      <strong>Supreme Court of India:</strong>{" "}
                      <em>Union of India v. Bharti Airtel Ltd.</em> (2021) 13 SCC 537
                    </li>
                    <li>
                      <strong>Supreme Court of India:</strong>{" "}
                      <em>Kailash Nath Associates v. DDA</em> (2015) 4 SCC 136
                    </li>
                  </ul>
                </div>
              </div>

              {/* Related Internal Cluster Cross-Links */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 pt-3">
                <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                  Related Corporate Recovery Portals &amp; FMCG Legal Spokes
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/industries/fmcg-distributors-super-stockist-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    FMCG Super-Stockist Recovery Hub &rarr;
                  </Link>
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Distributor &amp; Dealer Dues Recovery &rarr;
                  </Link>
                  <Link
                    href="/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Quick-Commerce Deductions Recovery &rarr;
                  </Link>
                  <Link
                    href="/cnf-agent-super-stockist-security-deposit-fnf-recovery-from-brand"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    C&amp;F Agent Security Deposit &amp; F&amp;F Recovery &rarr;
                  </Link>
                  <Link
                    href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Security Cheque Section 138 Prosecution &rarr;
                  </Link>
                  <Link
                    href="/gst-input-tax-credit-blocked-supplier-non-filing-gstr-3b-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Supplier Non-Filing GSTR-3B Recovery Guide &rarr;
                  </Link>
                  <Link
                    href="/stop-payment-cheque-bounce-case"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Stop Payment Cheque Bounce Defense &rarr;
                  </Link>
                  <Link
                    href="/cheque-bounce-case-against-company-directors"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                  >
                    Cheque Bounce Against Company Directors &rarr;
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
