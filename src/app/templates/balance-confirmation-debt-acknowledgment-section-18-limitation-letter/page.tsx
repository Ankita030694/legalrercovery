import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import LimitationTemplateCTA from "./LimitationTemplateCTA";
import LimitationTemplateTOC from "./LimitationTemplateTOC";
import LimitationTemplateWorkspace from "./LimitationTemplateWorkspace";

export const revalidate = 86400;

const PAGE_PATH =
  "/templates/balance-confirmation-debt-acknowledgment-section-18-limitation-letter";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Extending & Reviving the 3-Year Recovery Clock: Section 18 Balance Confirmation & Section 25(3) Time-Barred Debt Promise Templates";

const META_TITLE = "Balance Confirmation & Debt Acknowledgment (s.18 / s.25(3))";
const META_DESCRIPTION =
  "Invoice near 3 years old? Get Section 18 Balance Confirmation signed before expiry for a fresh 3-year clock—or use Contract Act s.25(3) if >3 years.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Balance Confirmation and Section 18 Limitation Letter Format"),
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

const FAQS = [
  {
    question:
      "Does a March 31 Balance Confirmation letter extend the 3-year limitation under Section 18?",
    answer:
      "Yes, provided two mandatory conditions under Section 18 of the Limitation Act, 1963 are satisfied: first, the debtor or their duly authorised agent must sign or electronically transmit the balance confirmation BEFORE the original 3-year limitation period expires; second, the document must contain a clear admission of a subsisting liability and jural relationship as debtor.",
  },
  {
    question:
      "Can an email or WhatsApp reply from the debtor reset the 3-year limitation clock?",
    answer:
      "Yes. Under Section 4 of the Information Technology Act, 2000 read with Section 18 of the Limitation Act, 1963 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, an email from an authorised corporate domain or a WhatsApp confirmation from an authorised director/partner acknowledging the outstanding ledger balance before expiry triggers a fresh 3-year limitation period.",
  },
  {
    question:
      "What if the 3-year limitation period has already expired? Can Section 18 still save the invoice?",
    answer:
      "No. Section 18 of the Limitation Act, 1963 strictly requires the acknowledgment to be executed BEFORE the expiration of the prescribed period. A mere balance confirmation signed after 3 years does not revive a time-barred debt under Section 18. To revive an already time-barred debt, you must execute an express written 'Promise to Pay' signed by the debtor under Section 25(3) of the Indian Contract Act, 1872.",
  },
  {
    question:
      "How does Section 25(3) of the Indian Contract Act, 1872 revive a time-barred debt?",
    answer:
      "Normally, an agreement without consideration is void under Section 25. However, Section 25(3) carves out a statutory exception: a promise, made in writing and signed by the debtor (or an authorised agent), to pay wholly or in part a debt of which the creditor might have enforced payment but for the law of limitation, is a valid, binding contract creating a fresh cause of action.",
  },
  {
    question:
      "Does a part-payment via NEFT/RTGS automatically extend limitation under Section 19?",
    answer:
      "Under Section 19 of the Limitation Act, 1963, a part-payment made before expiry extends limitation only when an acknowledgment of the payment appears in the handwriting of, or in a writing signed by, the person making the payment. Banking UTR records paired with a signed Section 19 receipt or covering email from the debtor satisfy this requirement.",
  },
  {
    question:
      "Does an unsigned balance confirmation or 'Subject to Reconciliation' remark extend limitation?",
    answer:
      "No. Courts treat 'Subject to Reconciliation' or 'Under Verification' endorsements with caution unless accompanied by an unequivocal admission of a minimum admitted balance. Always use unambiguous wording confirming the subsisting debt and ensure the signatory's name, designation, and company stamp or verified email header are captured.",
  },
  {
    question:
      "Can a debtor's audited Balance Sheet showing 'Trade Payables' count as a Section 18 acknowledgment?",
    answer:
      "Yes. In Asset Reconstruction Company (India) Ltd. v. Bishal Jaiswal (2021) 6 SCC 366, the Supreme Court held that entries in a company's audited Balance Sheet can constitute a valid acknowledgment of debt under Section 18 of the Limitation Act, 1963, provided the entry is not qualified by caveats denying liability.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Limitation Act, 1963 — Sections 18 & 19 and Schedule Articles 14, 15 & 55 (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "Indian Contract Act, 1872 — Section 25(3) Promise to Pay Time-Barred Debt (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 Electronic Record Admissibility",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Information Technology Act, 2000 — Section 4 Legal Recognition of Electronic Records",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Supreme Court: Asset Reconstruction Co. (India) Ltd. v. Bishal Jaiswal (2021) 6 SCC 366",
    url: "https://main.sci.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-20T10:00:00+05:30",
  dateModified: "2026-11-20T10:00:00+05:30",
  mainEntityOfPage: PAGE_URL,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
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
};

const CREATIVE_WORK_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Section 18 Balance Confirmation, Section 19 Part-Payment Receipt & Section 25(3) Time-Barred Debt Promise Templates",
  description:
    "Advocate-vetted corporate AR templates for extending the 3-year limitation period under Sections 18 and 19 of the Limitation Act, 1963 and reviving time-barred debts under Section 25(3) of the Indian Contract Act, 1872.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  encodingFormat: "application/msword",
  author: {
    "@type": "Organization",
    name: "AMA Legal Solutions / LegalRecovery.in",
    url: SITE_URL,
  },
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
      name: "B2B Debt Recovery India",
      item: `${SITE_URL}/b2b-debt-recovery-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Balance Confirmation & s.18 / s.25(3) Letter",
      item: PAGE_URL,
    },
  ],
};

export default function BalanceConfirmationLimitationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CREATIVE_WORK_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>CORE-26 B2B Limitation Pack</span>
            <span>&bull;</span>
            <span>Limitation Act s.18 &amp; s.19</span>
            <span>&bull;</span>
            <span>Contract Act s.25(3)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary
            </span>
            Under the{" "}
            <Link
              href="/b2b-debt-recovery-india"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              B2B Debt Recovery India
            </Link>{" "}
            statutory framework, unpaid commercial invoices expire in <strong>3 years</strong>. An
            unconditional written acknowledgment under <strong>Limitation Act Section 18</strong>{" "}
            or part-payment receipt under <strong>Section 19</strong> signed <em>before</em> expiry
            resets a fresh 3-year clock—while an express written{" "}
            <strong>Contract Act Section 25(3) Promise to Pay</strong> revives even a time-barred
            debt past 3 years.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">3 Years</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Standard B2B Suit Window (Art. 14/15/55)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">+36 Mos</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Fresh Clock via s.18 / s.19 Before Expiry
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">s.25(3)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Revives Time-Barred Debt (&gt;3 Years)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">BSA s.63</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Email &amp; WhatsApp Hash Admissibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "B2B Debt Recovery", href: "/b2b-debt-recovery-india" },
            { label: "Templates", href: "/templates/ibc-section-8-form-3-form-4-demand-notice-editable-pack" },
            {
              label: "Balance Confirmation & s.18 / s.25(3) Letter",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <LimitationTemplateTOC />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The 3-Year Limitation Cliff */}
            <section
              id="heading-limitation-cliff-risk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Unacknowledged Invoices Die at 36 Months (And How to Save Them)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every Accounts Receivable (AR) Manager and Statutory Auditor in India faces the same
                silent write-off trap: under the Schedule to the Limitation Act, 1963 (Articles 14,
                15, and 55), the statutory window to file a commercial recovery suit, Order XXXVII
                summary suit, or{" "}
                <Link
                  href="/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  IBC Section 8 Demand Notice
                </Link>{" "}
                expires exactly <strong>three (3) years</strong> from the invoice due date or breach.
                Once day 1,096 passes without a valid statutory reset, the NCLT and Commercial Courts
                must dismiss your claim <em>suo motu</em> under Section 3 of the Limitation Act—even
                when the debtor&rsquo;s default is undisputed.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This corporate template workspace complements our statutory primer on{" "}
                <Link
                  href="/limitation-extended-by-acknowledgment-part-payment"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  how limitation is extended by acknowledgment and part-payment
                </Link>{" "}
                by giving credit controllers four advocate-vetted, downloadable Word formats: a
                March 31 / quarterly <strong>Section 18 Balance Confirmation Letter</strong>, an{" "}
                <strong>Email &amp; WhatsApp acknowledgment prompt</strong>, a{" "}
                <strong>Section 19 Part-Payment Receipt</strong>, and the rarely used{" "}
                <strong>Indian Contract Act Section 25(3) Promise to Pay</strong> that revives
                debts already past the 3-year cliff.
              </p>

              {/* Desktop Decision SVG Flowchart */}
              <div className="hidden md:block bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Credit Controller&rsquo;s 3-Year Limitation Triage Flowchart
                </p>
                <svg
                  viewBox="0 0 860 175"
                  width="860"
                  height="175"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Limitation Act Section 18 vs Contract Act Section 25(3) triage workflow"
                >
                  <rect x="10" y="25" width="185" height="110" rx="12" fill="#0F172A" />
                  <text x="102" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    STEP 1: CHECK INVOICE AGE
                  </text>
                  <text x="102" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Audit Tally / SAP Aging
                  </text>
                  <text x="102" y="100" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Is Due Date &lt; 36 Months
                  </text>
                  <text x="102" y="116" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    or Already &gt; 36 Months?
                  </text>

                  <path d="M195 80 L235 80" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="235,75 245,80 235,85" fill="#DC2626" />

                  <rect x="245" y="15" width="270" height="62" rx="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
                  <text x="380" y="37" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="bold">
                    PATH A: UNDER 36 MONTHS (BEFORE EXPIRY)
                  </text>
                  <text x="380" y="57" textAnchor="middle" fill="#065F46" fontSize="10">
                    Use Tab 1 (s.18 Letter) / Tab 2 (Email) / Tab 3 (s.19)
                  </text>

                  <rect x="245" y="95" width="270" height="62" rx="10" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="380" y="117" textAnchor="middle" fill="#B91C1C" fontSize="11" fontWeight="bold">
                    PATH B: OVER 36 MONTHS (TIME-BARRED)
                  </text>
                  <text x="380" y="137" textAnchor="middle" fill="#7F1D1D" fontSize="10">
                    Use Tab 4 (Contract Act s.25(3) Promise to Pay)
                  </text>

                  <path d="M515 46 L555 46" stroke="#10B981" strokeWidth="2.5" />
                  <polygon points="555,41 565,46 555,51" fill="#10B981" />
                  <path d="M515 126 L555 126" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="555,121 565,126 555,131" fill="#DC2626" />

                  <rect x="565" y="15" width="285" height="62" rx="10" fill="#1E293B" />
                  <text x="707" y="38" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">
                    RESULT: FRESH 3-YEAR CLOCK
                  </text>
                  <text x="707" y="57" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Full 36 months from signing / UTR date
                  </text>

                  <rect x="565" y="95" width="285" height="62" rx="10" fill="#1E293B" />
                  <text x="707" y="118" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">
                    RESULT: NEW BINDING CONTRACT
                  </text>
                  <text x="707" y="137" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Fresh 3-year cause of action without consideration
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Flow Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-extrabold text-emerald-800">
                    Path A: Under 36 Months &rarr; Section 18 / Section 19
                  </p>
                  <p className="text-xs text-emerald-700 mt-1">
                    Get a signed Balance Confirmation, corporate email reply, or signed part-payment
                    receipt before day 1,095 to reset a fresh 3-year limitation clock.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-xs font-extrabold text-[#DC2626]">
                    Path B: Over 36 Months &rarr; Contract Act Section 25(3)
                  </p>
                  <p className="text-xs text-red-800 mt-1">
                    Section 18 cannot revive an expired debt. Execute a signed written &ldquo;Promise
                    to Pay&rdquo; installment schedule under Section 25(3) to create a fresh
                    enforceable contract.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Interactive Workspace */}
            <section
              id="heading-interactive-limitation-pack"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Interactive Section 18, Section 19 &amp; Section 25(3) Word Pack
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select a commercial aging scenario preset below or enter your debtor&rsquo;s exact
                GSTIN, invoice numbers, and principal/interest figures. Switch between the four
                statutory tabs to copy the text or download a ready-to-execute{" "}
                <strong>Microsoft Word (.doc)</strong> file.
              </p>

              <LimitationTemplateWorkspace />
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-s18-s19-s25-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Limitation Act s.18 vs s.19 vs Contract Act s.25(3): Legal Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit controllers frequently confuse a Section 18 acknowledgment with a Section
                25(3) promise. Using the wrong instrument after 36 months is fatal in{" "}
                <Link
                  href="/law/section-12a-commercial-courts-act-pre-institution-mediation-guide"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Section 12A Commercial Court mediation
                </Link>{" "}
                and NCLT Section 9 petitions. Compare the three statutory mechanisms below:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Legal Parameter</th>
                      <th className="p-3.5 font-bold">Limitation Act s.18</th>
                      <th className="p-3.5 font-bold">Limitation Act s.19</th>
                      <th className="p-3.5 font-bold">Contract Act s.25(3)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Timing Window</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Strictly BEFORE 3-year expiry
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Strictly BEFORE 3-year expiry
                      </td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">
                        Works EVEN AFTER 3-year time-bar
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Triggering Act</td>
                      <td className="p-3.5 text-slate-700">
                        Written admission of subsisting liability (letter, email, audited balance sheet)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Part-payment on account + written/signed acknowledgment of payment by payer
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Express, unconditional written promise to pay signed by debtor/authorised agent
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Fresh Consideration Needed?</td>
                      <td className="p-3.5 text-slate-700">No (extends original cause of action)</td>
                      <td className="p-3.5 text-slate-700">No (part discharge of subsisting debt)</td>
                      <td className="p-3.5 text-slate-700">
                        No (statutory exception to s.25; past debt suffices)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Trap to Avoid</td>
                      <td className="p-3.5 text-amber-800">
                        &ldquo;Subject to reconciliation&rdquo; or unsigned tally ledger printouts
                      </td>
                      <td className="p-3.5 text-amber-800">
                        Cash/NEFT receipt without payer&rsquo;s written confirmation of payment
                      </td>
                      <td className="p-3.5 text-amber-800">
                        Passive balance confirmation without an express &ldquo;Promise to Pay&rdquo;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Reviving Time-Barred Debt under Section 25(3) */}
            <section
              id="heading-section-25-3-revival"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  The Section 25(3) Revival Rule: Rescuing Invoices Past 3 Years
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Most B2B finance teams write off receivables once an invoice crosses 36 months.
                However, Indian law draws a sharp distinction between <strong>extinguishing a
                right</strong> and <strong>barring a remedy</strong>: the Limitation Act only bars
                the court remedy, while the underlying debt remains morally and commercially alive.
                Section 25(3) of the Indian Contract Act, 1872 empowers you to convert that
                time-barred debt into a brand-new, enforceable contract.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                    Why Plain Acknowledgments Fail After 3 Years
                  </p>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    A routine audit letter reading <em>&ldquo;We confirm ₹11.20 Lakh is pending in
                    our books&rdquo;</em> is only a statement of fact. If signed on month 39, it
                    fails both Section 18 (because 3 years already expired) and Section 25(3)
                    (because it lacks an express promise to pay).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    What Makes Tab 4 Valid Under Section 25(3)
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    Tab 4 embeds an <strong>express, unconditional written promise to pay</strong>{" "}
                    a specified sum with a binding installment schedule, signed by the debtor or
                    authorised director/partner. Once executed, it creates a fresh 3-year cause of
                    action enforceable under Order XXXVII CPC or{" "}
                    <Link
                      href="/tools/b2b-debt-recovery-legal-forum-selector"
                      className="underline font-bold"
                    >
                      Commercial Court / IBC tracks
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Email, WhatsApp & BSA s.63 */}
            <section
              id="heading-email-whatsapp-bsa63"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Email, WhatsApp &amp; BSA 2023 s.63 Proof for Electronic Confirmations
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Debtors rarely return signed paper stamp-paper letters willingly when cash-strapped.
                In modern corporate practice, an email reply from the debtor&rsquo;s CFO/accounts
                domain or a WhatsApp Business confirmation from a Managing Director is far easier to
                obtain—and equally valid under Section 4 of the IT Act, 2000—provided you preserve
                its admissibility using a{" "}
                <Link
                  href="/law/bsa-section-63-electronic-evidence-certificate-tally-erp-whatsapp-b2b"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  BSA 2023 Section 63 Electronic Evidence Certificate
                </Link>
                .
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Dispatch Channel</th>
                      <th className="p-3.5 font-bold">Legal Sufficiency (s.18 / s.25(3))</th>
                      <th className="p-3.5 font-bold">Mandatory Evidentiary Safeguard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Corporate Email (Official Domain)
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Valid s.18 Acknowledgment (IT Act s.4)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Export full `.eml` / `.msg` with SMTP headers + SHA-256 hash under BSA s.63
                        Part A &amp; B.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        WhatsApp (Verified Director/Partner)
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Valid s.18 Electronic Record
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Retain native chat export showing phone number, timestamp, and unedited
                        &ldquo;CONFIRMED&rdquo; text.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Speed Post RPAD + Signed Hardcopy
                      </td>
                      <td className="p-3.5 text-slate-900 font-semibold">
                        Gold Standard for s.25(3) Revival
                      </td>
                      <td className="p-3.5 text-slate-700">
                        For time-barred debts (&gt;3 yrs), obtain wet-ink signature or Aadhaar
                        eSign on Tab 4 with India Post tracking.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Need to dispatch confirmation requests across hundreds of slow-paying accounts? See
                our{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  multi-channel Email, WhatsApp &amp; Speed Post RPAD bulk dispatch workflow
                </Link>{" "}
                and our{" "}
                <Link
                  href="/reports/legal-notice-outcomes-study"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  empirical legal notice outcomes benchmark study
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Worked Limitation Timeline */}
            <section
              id="heading-worked-limitation-timeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Example: Resetting a ₹22.57 Lakh Ledger Before Expiry
                </h2>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Illustrative B2B Limitation &amp; Interest Ledger
                  </p>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                    Commercial Court Threshold (&gt; ₹3 Lakh)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <p className="text-slate-400 text-[11px]">Original Invoice Due Date</p>
                    <p className="font-bold text-white mt-0.5">12 May 2024</p>
                    <p className="text-slate-400 text-[11px] mt-1">
                      Original Expiry: 11 May 2027
                    </p>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <p className="text-slate-400 text-[11px]">s.18 Confirmation Signed</p>
                    <p className="font-bold text-emerald-400 mt-0.5">20 November 2026</p>
                    <p className="text-slate-400 text-[11px] mt-1">
                      Executed 5.5 months before expiry
                    </p>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <p className="text-slate-400 text-[11px]">New Limitation Expiry</p>
                    <p className="font-bold text-amber-300 mt-0.5">19 November 2029</p>
                    <p className="text-slate-400 text-[11px] mt-1">
                      +36 fresh months secured
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  With Principal of ₹18,45,000 and contractual interest of ₹4,12,000 (Total Specified
                  Value: ₹22,57,000), the creditor preserves full Commercial Court jurisdiction. You
                  can compute exact ad-valorem court fees and pre-suit interest using our{" "}
                  <Link
                    href="/tools/commercial-court-specified-value-fee-interest-calculator"
                    className="text-red-300 underline font-semibold hover:text-white"
                  >
                    Commercial Court Specified-Value &amp; Court-Fee Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 7: Mandatory Annexure & Audit Checklist */}
            <section
              id="heading-annexure-audit-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Mandatory Annexure &amp; Signatory Verification Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-extrabold text-slate-900 mb-1">
                    1. Verified Signatory Authority
                  </p>
                  <p className="text-slate-600">
                    Confirm the signatory is a Director, Partner, Proprietor, or CFO/Accounts Head
                    with ostensible authority—avoid junior clerk signatures without company seal.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-extrabold text-slate-900 mb-1">
                    2. Invoice-Wise Ledger Schedule
                  </p>
                  <p className="text-slate-600">
                    Attach the Tally/SAP customer ledger showing opening balance, invoice numbers,
                    dates, and credit notes so the debtor cannot claim ambiguity later.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-extrabold text-slate-900 mb-1">
                    3. Date Stamp Before Expiry
                  </p>
                  <p className="text-slate-600">
                    For Section 18/19, preserve the exact date of signing, email header timestamp,
                    or bank UTR date proving execution <em>prior</em> to the 3-year cutoff.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-extrabold text-slate-900 mb-1">
                    4. Escalation Readiness
                  </p>
                  <p className="text-slate-600">
                    If the debtor still defaults post-confirmation, escalate immediately via our{" "}
                    <Link
                      href="/recovery-of-unpaid-dues-for-my-business"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      B2B unpaid dues recovery service
                    </Link>{" "}
                    with a formal Advocate Demand Notice.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section
              id="heading-dual-track-cta"
              className="scroll-mt-28 space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Get Advocate Review on 1 Case or Run Bulk AR Confirmations
                </h2>
              </div>

              <LimitationTemplateCTA />
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Section 18 &amp; Section 25(3)
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-statutory-authorities"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Related B2B Recovery Guides
                </h2>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                <Link
                  href="/b2b-debt-recovery-india"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800"
                >
                  B2B Debt Recovery India Hub
                </Link>
                <Link
                  href="/limitation-extended-by-acknowledgment-part-payment"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800"
                >
                  Limitation Extension Guide
                </Link>
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800"
                >
                  Bulk B2B CSV Recovery
                </Link>
                <Link
                  href="/reports/legal-notice-outcomes-study"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800"
                >
                  Legal Notice Outcomes Report
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
