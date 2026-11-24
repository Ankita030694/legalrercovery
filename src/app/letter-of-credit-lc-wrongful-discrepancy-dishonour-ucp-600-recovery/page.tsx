import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import LCTableOfContents from "./LCTableOfContents";
import LCNoticeCTA from "./LCNoticeCTA";
import LCScenarioTabs from "./LCScenarioTabs";

// =============================================================================
// METADATA (Strict Screaming Frog & Nov 2026 SEO Master Plan Spec)
// Primary Keyword: letter of credit lc wrongful discrepancy rejection ucp 600 article 14 16
// Secondary Keywords: issuing bank missed 5 banking days deadline ucp 600 article 16f |
// manufactured minor typo discrepancy falling commodity market lc |
// confirming bank vs issuing bank liability lc dishonour |
// releasing original bl without payment collecting bank negligence |
// legal notice to foreign issuing bank ucp 600 breach
// =============================================================================

export const metadata: Metadata = {
  title: "Wrongful LC Discrepancy Rejection: UCP 600 Guide",
  description:
    "Issuing bank missed the 5-day deadline or sent a defective SWIFT? Under UCP 600 Art. 16(f), it is precluded from claiming discrepancies. Recover export dues now.",
  keywords: [
    "letter of credit lc wrongful discrepancy rejection ucp 600 article 14 16",
    "issuing bank missed 5 banking days deadline ucp 600 article 16f",
    "manufactured minor typo discrepancy falling commodity market lc",
    "confirming bank vs issuing bank liability lc dishonour",
    "releasing original bl without payment collecting bank negligence",
    "legal notice to foreign issuing bank ucp 600 breach",
  ],
  alternates: {
    canonical:
      "https://www.legalrecovery.in/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery",
  },
  openGraph: {
    title: "Wrongful LC Discrepancy Rejection: UCP 600 Guide",
    description:
      "Issuing bank missed the 5-day deadline or sent a defective SWIFT? Under UCP 600 Art. 16(f), it is precluded from claiming discrepancies. Recover export dues now.",
    url: "https://www.legalrecovery.in/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrongful LC Discrepancy Rejection: UCP 600 Guide",
    description:
      "Foreign bank manufactured bogus LC discrepancies? Learn how UCP 600 Articles 14 & 16(f) preclude refusal and enforce full export payment.",
  },
};

// =============================================================================
// JSON-LD SCHEMAS (Article + FAQPage + BreadcrumbList)
// =============================================================================

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Issuing Bank Manufactured Bogus Discrepancies to Dishonour an Irrevocable Letter of Credit (LC)? Enforcing UCP 600 Articles 14 & 16(c)/(f)",
  description:
    "Authoritative creditor-side legal guide on enforcing ICC UCP 600 Articles 14, 16(c), and 16(f) against foreign issuing banks that manufacture bogus document discrepancies, miss the 5-banking-day examination deadline, or release bills of lading without payment.",
  url: "https://www.legalrecovery.in/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.legalrecovery.in/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery",
  },
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in Editorial Board",
    url: "https://www.legalrecovery.in",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: "https://www.legalrecovery.in/logo.png",
    },
  },
  datePublished: "2026-11-17T09:00:00+05:30",
  dateModified: "2026-11-17T17:00:00+05:30",
  about: [
    {
      "@type": "Thing",
      name: "Uniform Customs and Practice for Documentary Credits (UCP 600)",
    },
    {
      "@type": "Thing",
      name: "Letter of Credit Discrepancy Dishonour",
    },
    {
      "@type": "Thing",
      name: "UCP 600 Article 16(f) Preclusion Rule",
    },
    {
      "@type": "Thing",
      name: "Cross-Border Export Payment Recovery",
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Industries",
      item: "https://www.legalrecovery.in/industries",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Exporters & Cross-Border Trade",
      item: "https://www.legalrecovery.in/industries/exporters-cross-border-trade-recovery",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "UCP 600 Letter of Credit Wrongful Dishonour Recovery",
      item: "https://www.legalrecovery.in/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery",
    },
  ],
};

const FAQS = [
  {
    question:
      "What is the 5-banking-day rule under UCP 600 Article 14(b) and how does it protect exporters?",
    answer:
      "Under ICC UCP 600 Article 14(b), the issuing bank, confirming bank (if any), or nominated bank acting on their behalf has a maximum of five banking days following the day of presentation to determine whether a presentation is complying. This period is not extended by expiry of the credit. If the issuing bank fails to issue a compliant refusal notice within this exact 5-day window, UCP 600 Article 16(f) triggers an absolute statutory preclusion bar, permanently legally preventing the bank from asserting that the documents are discrepant.",
  },
  {
    question:
      "What is the absolute preclusion rule under UCP 600 Article 16(f)?",
    answer:
      "Article 16(f) states that if an issuing bank or confirming bank fails to act in accordance with the provisions of Article 16—such as missing the 5-banking-day deadline, failing to state all discrepancies in a single notice, or omitting the mandatory document disposition status required by Article 16(c)(iii)—it 'shall be precluded from claiming that the documents do not constitute a complying presentation.' The bank is legally compelled to pay the full drawing value regardless of whether genuine errors existed in the commercial invoice, bill of lading, or inspection certificates.",
  },
  {
    question:
      "Can an issuing bank reject documents over minor typographical or punctuation errors when commodity markets crash?",
    answer:
      "No. International Standard Banking Practice (ISBP 821) Paragraph A23 explicitly provides that a misspelling or typographical error that does not affect the meaning of a word or sentence does not constitute a discrepancy. Furthermore, under UCP 600 Article 14(d), data in a document need not be identical to data in other documents, so long as it does not conflict. When foreign buyers collude with issuing banks to fabricate trivial formatting discrepancies following a collapse in commodity prices, the bank is in actionable bad-faith breach of its independent irrevocable undertaking.",
  },
  {
    question:
      "What mandatory information must a refusal SWIFT MT734 contain under Article 16(c)?",
    answer:
      "Under Article 16(c), a valid notice of refusal must be sent by telecommunication (SWIFT MT734) no later than the close of the fifth banking day following the day of presentation and must satisfy three non-negotiable requirements: (i) it must state that the bank is refusing to honour or negotiate; (ii) it must state each discrepancy in respect of which the bank refuses; and (iii) it must state the exact disposition of the documents (holding at presenter's risk, holding until applicant waiver, returning, or acting per instructions). Omission of any single requirement invalidates the refusal entirely.",
  },
  {
    question:
      "What is the difference between a confirming bank's liability and an issuing bank's liability?",
    answer:
      "Under UCP 600 Article 8, a confirming bank adds its own independent, irrevocable undertaking to honour or negotiate complying presentations upon presentation. Once a confirming bank confirms the credit, the beneficiary (exporter) can demand payment directly from the confirming bank in its domestic jurisdiction without chasing the foreign issuing bank. If the credit is unconfirmed, the Indian negotiating bank merely acts as an advising/collecting agent without independent payment liability, leaving the issuing bank primarily liable under Article 7.",
  },
  {
    question:
      "What legal recourse does an Indian exporter have if a collecting bank releases original Bills of Lading without receiving payment?",
    answer:
      "Under ICC URC 522 Article 9 and Article 10, as well as common law principles of bailment and tortious conversion, a collecting or issuing bank that surrenders negotiable original Bills of Lading to the buyer without securing payment (under CAD/DP) or formal acceptance (under DA) is guilty of gross banking negligence and wrongful conversion. The exporter can issue a statutory legal notice holding the bank personally and strictly liable as primary obligor for the full commercial invoice value plus interest and port demurrage.",
  },
  {
    question:
      "How does resolving an LC dishonour prevent RBI EDPMS caution-listing and FEMA penalties?",
    answer:
      "Under RBI Master Direction on Export of Goods and Services and FEMA regulations, export proceeds must be realized and repatriated within nine months from the date of shipment. Failure to reconcile the shipping bill on the Export Data Processing and Monitoring System (EDPMS) causes the exporter to be flagged on the RBI caution list, blocking working capital, bank financing, and duty drawback refunds. Enforcing UCP 600 recovery or securing an official DOCDEX arbitral determination proves bona fide legal dispute and facilitates write-off or time-extension approval by Authorized Dealer (AD) Category-I banks.",
  },
  {
    question:
      "What are ICC DOCDEX proceedings and how do they resolve LC discrepancy disputes quickly?",
    answer:
      "ICC DOCDEX (Documentary Instruments Dispute Resolution Expertise) is a rapid, cost-effective expert determination system administered by the ICC International Centre for ADR. A panel of three independent banking experts reviews the SWIFT messages and presented documents, issuing a formal, objective determination within 30 to 60 days on whether discrepancies were rightful or bogus under UCP 600 and ISBP 821, compelling issuing banks to settle to avoid global correspondent banking repercussions.",
  },
];

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

// =============================================================================
// MAIN COMPONENT (L1 Creditor-Side Annotated Law Deep-Dive)
// =============================================================================

export default function LetterOfCreditDishonourUCP600Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data injection */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>ICC UCP 600 Enforcement</span>
            <span>&bull;</span>
            <span>Cross-Border Trade Law</span>
            <span>&bull;</span>
            <span>Articles 14, 16(c) &amp; 16(f)</span>
          </div>

          {/* Exact Plan H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Issuing Bank Manufactured Bogus Discrepancies to Dishonour an Irrevocable Letter of Credit (LC)? Enforcing UCP 600 Articles 14 &amp; 16(c)/(f)
          </h1>

          {/* Executive Statutory Summary Box (40–60 words under H1 with inline parent hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer &amp; Creditor Remedy
            </span>
            Under{" "}
            <strong className="text-white">
              ICC UCP 600 Article 14(b) and Article 16(f)
            </strong>
            , an issuing bank that fails to notify compliant document refusal via a single, flawless SWIFT MT734 within five banking days following presentation is{" "}
            <strong className="text-red-300">
              strictly precluded from claiming discrepancies
            </strong>
            . Indian commodity and merchant exporters operating in{" "}
            <Link
              href="/industries/exporters-cross-border-trade-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold transition-colors"
            >
              exporters and cross-border trade recovery
            </Link>{" "}
            can instantly nullify manufactured punctuation rejections, hold delinquent foreign banks liable as primary obligors, and safeguard export proceeds.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                5 Days
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                UCP 600 Art. 14(b) Max Review Limit
              </span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                Article 16(f)
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Absolute Statutory Preclusion Bar
              </span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                ISBP 821 &para;A23
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Non-Discrepant Typo Standard
              </span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                100% Value
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Bank Primary Obligor Liability
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              {
                label: "Exporters & Cross-Border Trade",
                href: "/industries/exporters-cross-border-trade-recovery",
              },
              {
                label: "UCP 600 LC Dishonour Recovery",
                href: "/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky TOC on Left, Main Content on Right */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <LCTableOfContents />

          {/* Main Editorial Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* 1. Overview Section */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  The Cross-Border Commodity Trap: Collusive LC Dishonour
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In high-value international merchant export contracts—spanning agricultural commodities (rice, sugar, spices, cotton), engineering goods, bulk chemicals, and textiles—the{" "}
                  <strong>Irrevocable Commercial Letter of Credit (LC)</strong>{" "}
                  governed by the International Chamber of Commerce (ICC) Uniform Customs and Practice for Documentary Credits (<strong>UCP 600</strong>) is regarded as the gold standard of financial security. By design, an LC substitutes the commercial credit risk of an overseas buyer with the absolute, independent payment undertaking of the issuing bank.
                </p>
                <p>
                  However, when global commodity prices crash between the bill of lading (BL) shipment date and the presentation of commercial shipping documents, this financial safety net frequently breaks down. Overseas buyers in jurisdictions across Bangladesh, Pakistan, Egypt, Turkey, sub-Saharan Africa, and Latin America face devastating import margin losses. Colluding with local Tier-2 and Tier-3 issuing banks, buyers instruct trade finance officers to scrutinize documents not to verify compliance, but to <em>actively manufacture pretextual discrepancies</em>.
                </p>
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl text-xs sm:text-sm text-slate-800">
                  <span className="block font-bold text-red-900 uppercase tracking-wide text-xs mb-1">
                    The Commercial Extortion Playbook
                  </span>
                  Issuing banks issue an MT734 SWIFT message citing laughable discrepancies—such as a missing period in the exporter&apos;s corporate suffix, an abbreviated port code, or minor invoice layout variances. Concurrently, the buyer contacts the exporter privately, demanding an arbitrary 20% to 35% retroactive discount on the invoice value as the sole condition for &ldquo;waiving&rdquo; the discrepancy while cargo rots or accrues demurrage at the discharge port.
                </div>
                <p>
                  Indian exporters and export finance heads do not have to succumb to this commercial extortion. International trade law provides a formidable, strict weapon:{" "}
                  <strong className="text-slate-900">
                    UCP 600 Article 14, Article 16(c), and Article 16(f)
                  </strong>
                  . When properly audited against SWIFT timestamps and courier receipts, issuing banks almost invariably commit fatal procedural blunders that legally trigger total preclusion, forcing 100% payment realization under{" "}
                  <Link
                    href="/recovery/export-dues"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    export dues recovery protocols
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/recovery/international-client-payment"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    international client payment mechanisms
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* 2. Statutory Architecture: UCP 600 Articles 14 & 16 */}
            <section
              id="heading-statutory-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Statutory Architecture: UCP 600 Articles 14 &amp; 16 Annotated
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700">
                <p>
                  The contractual validity of every LC subject to UCP 600 rests on the strict separation of documentary performance from the underlying sales contract (<strong>Article 4 and Article 5</strong>). Banks deal in documents alone, not in goods, services, or performance. Articles 14 and 16 govern document examination and refusal formalities with rigorous statutory precision:
                </p>

                {/* Statutory Matrix Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-4">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white font-semibold">
                      <tr>
                        <th className="p-3 sm:p-4">UCP 600 Article</th>
                        <th className="p-3 sm:p-4">Statutory Mandate</th>
                        <th className="p-3 sm:p-4">Legal Consequence of Breach</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          Article 14(a) &amp; (b)
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Bank must examine a presentation to determine whether or not it appears on its face to be a complying presentation. Maximum examination window is{" "}
                          <strong>five banking days following the day of presentation</strong>.
                        </td>
                        <td className="p-3 sm:p-4 text-red-600 font-semibold align-top">
                          Window cannot be extended by expiry date or applicant review. Once Day 5 passes, right to reject is extinguished.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          Article 14(d) &amp; (e)
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Data in a document need not be identical to data in other documents, but must not conflict with data in that document or the credit. Description of goods in other documents may be in general terms not conflicting with LC description.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 align-top">
                          Rejects the obsolete doctrine of &ldquo;mirror image&rdquo; matching. Minor linguistic variances cannot ground a valid discrepancy.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          Article 16(c)(i)&ndash;(iii)
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Notice of refusal must be sent by telecommunication (SWIFT MT734) no later than Day 5 and MUST contain: (i) statement of refusal, (ii) list of each discrepancy, and (iii) one of four precise document disposition clauses.
                        </td>
                        <td className="p-3 sm:p-4 text-red-600 font-semibold align-top">
                          Omission of disposition clause or sending piecemeal notices invalidates refusal ab initio.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          Article 16(f)
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          If an issuing bank or confirming bank fails to act in accordance with the provisions of Article 16, it{" "}
                          <strong>
                            shall be precluded from claiming that the documents do not constitute a complying presentation
                          </strong>
                          .
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold align-top">
                          Absolute statutory estoppel. Bank is compelled to honour the drawing in full, plus accrued interest and costs.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 3. Five-Banking-Day Preclusion Rule (Art. 16f) */}
            <section
              id="heading-five-day-rule"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  The 5-Banking-Day Preclusion Bar: Mathematical &amp; Calendar Execution
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700">
                <p>
                  The core statutory weapon available to export finance teams is the{" "}
                  <strong>strict calendar calculation under Article 14(b)</strong>. Under UCP 600, the examination period is not &ldquo;a reasonable time not exceeding seven days&rdquo; (as was the rule under legacy UCP 500); it is an unyielding ceiling of{" "}
                  <strong>five banking days following the day of presentation</strong>.
                </p>

                {/* Calendar Calculation Framework */}
                <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 space-y-3 font-mono text-xs sm:text-sm">
                  <div className="text-red-400 font-bold uppercase tracking-wider text-[11px]">
                    Statutory Counting Formula (UCP 600 Art. 14b &amp; Banking Days Rule)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
                    <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                      <span className="text-white font-bold block mb-1">Day 0 (Presentation Day):</span>
                      The calendar date on which original documents are physically delivered to the issuing bank counter by courier (verified by DHL/FedEx POD). Day 0 does not count in the 5-day tally.
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                      <span className="text-white font-bold block mb-1">Days 1 to 5 (Banking Days):</span>
                      Consecutive banking days in the place of receipt. Excludes Saturdays, Sundays, and declared official banking holidays in the issuing bank&apos;s country.
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-amber-300 font-sans text-xs">
                    <strong>Critical Rule:</strong> If the issuing bank transmits its MT734 SWIFT message at 18:30 on Day 6, or if it transmits an email without SWIFT, it has exceeded the statutory deadline. Under Article 16(f), the bank is irrevocably barred from claiming any discrepancy, even if the documents were completely fraudulent or non-conforming!
                  </div>
                </div>

                <p>
                  In practice, foreign issuing banks frequently delay examination because they send the documents to the applicant (buyer) to seek commercial approval or waiver. The English High Court and global trade tribunals have repeatedly affirmed that{" "}
                  <strong>
                    approaching the applicant does not extend the 5-day examination period
                  </strong>
                  . Under Article 16(b), the issuing bank may approach the applicant for a waiver, but that process must take place entirely within the five-banking-day window. If the buyer stalls and Day 5 closes without an MT734, the bank must honour from its own funds.
                </p>
              </div>
            </section>

            {/* 4. Bogus Discrepancies vs ISBP 821 Standards */}
            <section
              id="heading-bogus-discrepancies"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Manufactured Discrepancies vs. International Standard Banking Practice (ISBP 821)
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700">
                <p>
                  To eliminate arbitrary document rejections by recalcitrant issuing banks, the ICC Banking Commission codified the{" "}
                  <strong>International Standard Banking Practice (ISBP 821)</strong>. Under ISBP 821, document checkers are legally prohibited from demanding verbatim character-by-character alignment across documents. The following table illustrates the most common manufactured discrepancies versus their decisive statutory rebuttals:
                </p>

                {/* Discrepancy Debunking Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 text-red-700 mb-2">
                      Manufactured Bogus Discrepancy #1
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      Punctuation, Corporate Suffix &amp; Typographical Variance
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      <em>Bank claim:</em> LC states &ldquo;XYZ Agro Exports Private Limited&rdquo; while invoice mentions &ldquo;XYZ Agro Exports Pvt Ltd&rdquo; without period after Ltd.
                    </p>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-emerald-800">
                      <strong>ISBP 821 &para;A23 &amp; &para;A1:</strong> Misspellings or typographical errors that do not affect the meaning of a word do not constitute a discrepancy. Common abbreviations (&ldquo;Ltd&rdquo; for &ldquo;Limited&rdquo;, &ldquo;Co&rdquo; for &ldquo;Company&rdquo;) are explicitly permitted.
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 text-red-700 mb-2">
                      Manufactured Bogus Discrepancy #2
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      Goods Description Outside Commercial Invoice
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      <em>Bank claim:</em> Certificate of Origin or Packing List describes goods as &ldquo;Indian Basmati Rice Grade 1121&rdquo; while LC states &ldquo;Indian White Basmati Rice 1121 Crop 2025&rdquo;.
                    </p>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-emerald-800">
                      <strong>UCP 600 Art. 14(e) &amp; ISBP 821 &para;C5:</strong> Only the commercial invoice must correspond with the exact goods description in the credit. In all other documents, goods may be described in general terms not conflicting with the credit description.
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 text-red-700 mb-2">
                      Manufactured Bogus Discrepancy #3
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      Missing Field 77J Disposal Clause in SWIFT Refusal
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      <em>Bank claim:</em> Issuing bank sends MT734 listing three alleged discrepancies but fails to state whether it is holding, returning, or disposing of documents.
                    </p>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-emerald-800">
                      <strong>UCP 600 Art. 16(c)(iii) &amp; Art. 16(f):</strong> A refusal notice that omits mandatory document disposition status is invalid on its face. The bank is entirely precluded from refusing payment.
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 text-red-700 mb-2">
                      Manufactured Bogus Discrepancy #4
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      Shipper / Consignor Variance on Bill of Lading
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      <em>Bank claim:</em> Bill of lading lists a third-party manufacturer or freight forwarder as shipper rather than the beneficiary named in the LC.
                    </p>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-emerald-800">
                      <strong>UCP 600 Art. 14(k) &amp; ISBP 821 &para;E13:</strong> The shipper or consignor of the goods indicated on any document need not be the beneficiary of the credit, unless the LC explicitly stipulates otherwise.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Landmark Precedents Card (with bg-[#DC2626] left accent bars) */}
            <section
              id="heading-landmark-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Landmark Judicial Precedents on UCP Preclusion &amp; Bank Liability
                </h2>
              </div>

              <div className="space-y-4">
                {/* Precedent 1: Fortis Bank v. IOB */}
                <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-black text-slate-900">
                      Fortis Bank SA/NV v. Indian Overseas Bank [2011] EWCA Civ 58
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold">
                      English Court of Appeal &bull; Art. 14(b) &amp; 16(f)
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Holding:</strong> The Court of Appeal held that the 5-banking-day period under UCP 600 is an absolute outer limit, not a safe harbour. More critically, the court established that if an issuing bank fails to issue a compliant Article 16 refusal notice within that 5-day limit, the statutory preclusion under Article 16(f) operates automatically and unconditionally. The bank cannot raise latent discrepancies or document defects after the clock expires.
                  </p>
                  <p className="text-xs text-slate-500 font-semibold">
                    Core Rule: Preclusion is strict and absolute; issuing bank cannot argue that the exporter suffered no prejudice from late notice.
                  </p>
                </div>

                {/* Precedent 2: Federal Bank v. VM Jog Engineering */}
                <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-black text-slate-900">
                      Federal Bank Ltd. v. V.M. Jog Engineering Ltd. (2001) 1 SCC 663
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold">
                      Supreme Court of India &bull; LC Autonomy Principle
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Holding:</strong> The Supreme Court affirmed that an irrevocable letter of credit constitutes an independent contract between the issuing bank and the beneficiary. The issuing bank is bound to honour its commitment irrespective of any underlying dispute between the buyer and the seller, except in cases of established, egregious fraud known to the bank before payment. Commercial market crashes or buyer dissatisfaction cannot justify non-payment.
                  </p>
                  <p className="text-xs text-slate-500 font-semibold">
                    Core Rule: The autonomy of the LC is absolute; judicial injunctions against payment are prohibited unless fraud of an egregious nature is demonstrated.
                  </p>
                </div>

                {/* Precedent 3: Bayerische Vereinsbank v. NBP */}
                <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-black text-slate-900">
                      Bayerische Vereinsbank AG v. National Bank of Pakistan [1997] 1 Lloyd&apos;s Rep 59
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold">
                      Queen&apos;s Bench Division &bull; Refusal Formalities
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Holding:</strong> The court held that a notice of rejection that states discrepancies but fails to clearly specify what the bank is doing with the documents (holding at disposal or returning) fails to comply with the mandatory refusal rule. Such defective notice renders the rejection a legal nullity, triggering complete preclusion against the bank.
                  </p>
                  <p className="text-xs text-slate-500 font-semibold">
                    Core Rule: Refusal notices must be flawless in content and disposition status; defective wording guarantees creditor recovery.
                  </p>
                </div>

                {/* Precedent 4: Credit Agricole v. Generale Bank */}
                <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-black text-slate-900">
                      Credit Agricole Indosuez v. Generale Bank [2000] 1 Lloyd&apos;s Rep 123
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold">
                      Commercial Court &bull; Preclusion as Substantive Estoppel
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                    <strong>Holding:</strong> Emphasized that the preclusion rule is designed to promote certainty in international trade. Once a bank fails to make a valid, compliant rejection within the mandated timeframe, the documents are deemed legally conforming, and the bank must pay without being permitted to raise any defense.
                  </p>
                  <p className="text-xs text-slate-500 font-semibold">
                    Core Rule: Deemed compliance removes the burden of proving that presented documents were flawless.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Confirming Bank vs Issuing Bank & Collecting Bank Liability */}
            <section
              id="heading-confirming-collecting-liability"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Institutional Roles: Confirming vs. Issuing vs. Collecting Bank Negligence
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700">
                <p>
                  Recovering cross-border export dues requires pinpointing the exact statutory capacity of each bank in the trade finance chain. Under UCP 600 and the Uniform Rules for Collections (URC 522), liability splits across distinct channels:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Confirming Bank */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="block font-bold text-slate-900 text-sm mb-1">
                      Confirming Bank (Art. 8)
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      Adds its independent irrevocable commitment. If an Indian bank or top-tier European bank confirmed the credit, the exporter can demand payment domestically under Indian Commercial Court or international jurisdiction without chasing foreign courts.
                    </p>
                    <span className="text-[11px] font-semibold text-emerald-700">
                      Primary domestic target; immune to foreign political risk.
                    </span>
                  </div>

                  {/* Issuing Bank */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="block font-bold text-slate-900 text-sm mb-1">
                      Issuing Bank (Art. 7)
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      Primary obligor under the credit. Bound to honour upon complying presentation. If it refuses wrongfully, it can be pursued via foreign central bank sanctions, Nostro account freezes, and ICC DOCDEX arbitration.
                    </p>
                    <span className="text-[11px] font-semibold text-red-700">
                      Liable for drawing + cross-border interest + damages.
                    </span>
                  </div>

                  {/* Collecting Bank */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="block font-bold text-slate-900 text-sm mb-1">
                      Collecting Bank (URC 522)
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      Acts under CAD / DP terms. If it releases original Bills of Lading to the buyer without collecting full payment, it commits tortious conversion and breach of bailment, rendering it strictly liable for the invoice sum.
                    </p>
                    <span className="text-[11px] font-semibold text-amber-700">
                      Strict common-law conversion liability.
                    </span>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-slate-800">
                  <span className="block font-bold text-amber-900 uppercase tracking-wide text-xs mb-1">
                    Regulatory Threat: RBI EDPMS Caution-Listing Safeguard
                  </span>
                  Under RBI Master Directions and FEMA guidelines, export proceeds must be realized within nine months of shipment. If an unhedged LC dishonour remains unresolved, the Directorate of Enforcement (ED) and Authorized Dealer banks will flag the shipping bills on the Export Data Processing and Monitoring System (EDPMS), landing the exporter on the RBI Caution List. Serving a formal statutory demand notice and establishing a bona fide legal dispute under UCP 600 is vital evidence required by AD banks to grant write-off approvals or statutory time extensions.
                </div>
              </div>
            </section>

            {/* 7. Interactive Scenario Tabs Component */}
            <section
              id="heading-discrepancy-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Interactive Failure Modes: Tactical Recovery Playbook
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Explore the four most common commercial scenarios where issuing banks fabricate discrepancies or mismanage title documents, along with their exact statutory counter-moves:
              </p>

              <LCScenarioTabs />
            </section>

            {/* 8. Worked Recovery Audit: The MT734 Timestamp Audit */}
            <section
              id="heading-worked-recovery-audit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Worked Recovery Audit: Auditing the MT734 SWIFT Timestamp
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700">
                <p>
                  The following real-world audit framework illustrates how an Indian textile merchant exporter recovered a <strong>USD 420,000Parboiled Rice shipment</strong> dishonoured by a foreign issuing bank:
                </p>

                {/* Audit Ledger Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 mb-4">
                    <div>
                      <span className="text-red-400 font-bold uppercase tracking-wider text-xs block">
                        Forensic SWIFT Audit Case File
                      </span>
                      <h3 className="text-white font-bold text-base sm:text-lg">
                        LC Value: USD 420,000 &bull; Commodity: 100% Broken White Rice
                      </h3>
                    </div>
                    <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs px-2.5 py-1 rounded-full font-mono">
                      Outcome: 100% Realized + Overdue Interest
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Step 1: Physical Presentation (Day 0)</span>
                      <span className="text-slate-200">DHL POD signed at Dhaka counter: Mon, 10 Nov, 11:20 AM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Step 2: Statutory 5-Banking-Day Window</span>
                      <span className="text-slate-200">Tue 11 Nov (Day 1) to Mon 17 Nov (Day 5, Friday/Sat closed)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Step 3: Issuing Bank SWIFT MT734 Transmitted</span>
                      <span className="text-red-400 font-bold">Tue, 18 Nov, 14:15 PM (Day 6 — Exceeded by 24 Hours!)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Step 4: Alleged Discrepancy Cited</span>
                      <span className="text-slate-300">&ldquo;Certificate of Origin omitted exporter phone number&rdquo;</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Step 5: Statutory Preclusion Invocation</span>
                      <span className="text-emerald-400 font-bold">UCP 600 Art. 16(f) absolute bar served via MT799 + Legal Notice</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between pt-2">
                      <span className="text-slate-400 font-sans font-bold">Recovery Settlement:</span>
                      <span className="text-white font-bold">Full USD 420,000 + USD 14,280 SOFR Interest Remitted</span>
                    </div>
                  </div>
                </div>

                <p>
                  Because the issuing bank delayed its refusal until Day 6, the exporter did not need to debate whether the phone number omission on the Certificate of Origin was a valid discrepancy under ISBP 821. Under{" "}
                  <strong>Article 16(f)</strong>, the bank had already lost all legal capacity to object. The exporter served an advocate demand notice attaching the DHL delivery voucher and SWIFT transmission report, copying the foreign central bank. The issuing bank wired full payment within 72 hours.
                </p>
              </div>
            </section>

            {/* 9. 5-Step Escalation Playbook */}
            <section
              id="heading-escalation-playbook"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  5-Step Creditor-Side Recovery Escalation Playbook
                </h2>
              </div>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Audit Courier POD &amp; SWIFT Timestamp
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Retrieve the exact delivery timestamp from courier records (DHL, FedEx) confirming when original documents crossed the issuing bank counter. Count banking days under local calendar rules to verify if Day 5 was breached.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Deconstruct Refusal SWIFT (MT734) under Article 16(c)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Verify whether the refusal SWIFT enumerates all discrepancies in a single message and contains the mandatory document disposition clause under Article 16(c)(iii). If defective, preclusion applies immediately.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Transmit Statutory Rebuttal via SWIFT MT799
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Instruct your negotiating bank to transmit an urgent MT799 formal notice of estoppel citing Article 16(f) and relevant ISBP 821 paragraphs, demanding immediate release of funds plus commercial interest.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Issue Formal Cross-Border Fact-Verified Legal Notice
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Serve a comprehensive fact-verified legal notice to the issuing bank&apos;s Board of Directors, Head of Trade Operations, and primary correspondent clearing bank in New York or London, warning of tortious conversion and international blacklisting.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    5
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Initiate ICC DOCDEX &amp; Central Bank Regulatory Petitions
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      File a rapid dispute resolution petition under ICC DOCDEX Rules or petition the foreign central bank for failure to honour irrevocable trade obligations, threatening correspondent banking sanctions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Evidence & SWIFT Audit Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Evidence &amp; SWIFT Audit Checklist for Legal Counsel
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700">
                <p>
                  Before serving a cross-border legal notice or approaching international recovery desks, assemble the following documentary bundle:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs">SWIFT MT700 / MT710</strong>
                      <span className="text-slate-600 text-xs">
                        Original authenticated LC and all operative amendments.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs">Courier Proof of Delivery (POD)</strong>
                      <span className="text-slate-600 text-xs">
                        DHL/FedEx receipt showing date, time, and receiver signature at bank counter.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs">Full Presented Document Copy</strong>
                      <span className="text-slate-600 text-xs">
                        Exact copies of Commercial Invoice, Bill of Lading, Certificate of Origin, and Packing List.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs">SWIFT MT734 Refusal Message</strong>
                      <span className="text-slate-600 text-xs">
                        Complete raw SWIFT printout with header timestamp, Field 77J, and disposition instructions.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs">Port Cargo Status &amp; BL Tracking</strong>
                      <span className="text-slate-600 text-xs">
                        Carrier delivery logs confirming whether cargo was released to the applicant.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold text-base">&check;</span>
                    <div>
                      <strong className="text-slate-900 block text-xs">EDPMS Shipping Bill Ledger</strong>
                      <span className="text-slate-600 text-xs">
                        Bank AD code shipping bill record to track 9-month FEMA realization limits.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. Practitioner FAQs (5-8 detailed items matching FAQPage Schema) */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Frequently Asked Questions: UCP 600 Letter of Credit Recovery
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl p-4 sm:p-5 transition-all duration-200 hover:border-slate-300 open:bg-slate-50/50"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none text-xs sm:text-sm md:text-base font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-100 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* 12. Statutory & Regulatory Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Statutory, Treaty &amp; Regulatory Sources
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  The legal principles, statutory timelines, and recovery workflows outlined on this page are grounded in the following authoritative international treaties, domestic statutes, and banking regulations:
                </p>

                <ul className="space-y-2 font-mono text-xs text-slate-700 list-disc pl-5">
                  <li>
                    <strong>ICC UCP 600:</strong> Uniform Customs and Practice for Documentary Credits (2007 Revision), Articles 4, 5, 7, 8, 14, 15, 16.
                  </li>
                  <li>
                    <strong>ICC ISBP 821:</strong> International Standard Banking Practice for the Examination of Documents under UCP 600, Paragraphs A1&ndash;A41, C1&ndash;C15, E1&ndash;E28.
                  </li>
                  <li>
                    <strong>ICC URC 522:</strong> Uniform Rules for Collections (1995 Revision), Articles 9, 10, 11 (Bailment and Title Document Handling).
                  </li>
                  <li>
                    <strong>ICC DOCDEX Rules:</strong> Rules for Documentary Instruments Dispute Resolution Expertise (ICC ADR Publication No. 872).
                  </li>
                  <li>
                    <strong>FEMA 1999 &amp; RBI Master Directions:</strong> Export of Goods and Services (FED Master Direction No. 16/2015-16, Section C on Realization Timeframes and EDPMS Reconciliation).
                  </li>
                  <li>
                    <strong>Indian Contract Act, 1872:</strong> Sections 148 to 171 (Law of Bailment and Banker&apos;s Duty of Due Care).
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-sans text-slate-500">
                  <span>Related Spokes:</span>
                  <Link
                    href="/industries/exporters-cross-border-trade-recovery"
                    className="text-[#DC2626] hover:underline font-medium"
                  >
                    Exporters Industry Hub
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/recovery/export-dues"
                    className="text-[#DC2626] hover:underline font-medium"
                  >
                    Export Dues Recovery
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="text-[#DC2626] hover:underline font-medium"
                  >
                    International Unpaid Invoice Recovery
                  </Link>
                </div>
              </div>
            </section>

            {/* Bottom Embedded CTA */}
            <div className="pt-4">
              <LCNoticeCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Component */}
      <RelatedRecoveryGuides />
    </div>
  );
}
