import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SmaCureTableOfContents from "./SmaCureTableOfContents";
import SmaCureScenarioTabs from "./SmaCureScenarioTabs";
import SmaCureNoticeCTA from "./SmaCureNoticeCTA";

export const revalidate = 86400;

const PAGE_PATH = "/sma-1-sma-2-early-delinquency-cure-notice-strategy-banks";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "Arresting SMA-2 to NPA Roll-Rates (61–90 DPD): Why Advocate-Signed Cure Notices Outperform Telecalling 3x";

const META_TITLE = "Stopping SMA-2 Slippage to NPA: Bank Cure Notice Guide";
const META_DESCRIPTION =
  "Under RBI IRACP norms, once SMA-2 crosses 90 DPD, partial payment cannot upgrade it. Deploy Day-62 Advocate Cure Notices to arrest NPA slippage.";

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
        alt: formatAltText(
          "SMA-1 and SMA-2 Early Delinquency Cure Notice Strategy for Banks"
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
      "RBI Master Circular — Prudential Norms on Income Recognition, Asset Classification and Provisioning Pertaining to Advances (IRACP)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12642",
  },
  {
    title:
      "RBI Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning — Clarifications (Nov 12, 2021 — Daily Day-End NPA Stamping & Full Arrears Upgradation)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12194&Mode=0",
  },
  {
    title:
      "RBI Prudential Framework for Resolution of Stressed Assets (June 7, 2019 — SMA-0, SMA-1, SMA-2 Classification & CRILC Reporting)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11580&Mode=0",
  },
  {
    title:
      "RBI Fair Lending Practice — Penal Charges in Loan Accounts (Aug 18, 2023) & Outsourcing of Financial Services / Recovery Agent Directions",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12527&Mode=0",
  },
  {
    title:
      "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/2088",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records) & Bankers' Books Evidence Act, 1891 (Section 2A)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Why can a partial EMI payment no longer prevent or upgrade an NPA under RBI IRACP norms?",
    answer:
      "Under the RBI Circular dated November 12, 2021 (and subsequent IRACP Master Circulars), banks must run asset classification during daily day-end processing on a FIFO (First-In, First-Out) basis. If the oldest overdue installment remains unpaid beyond 90 days, the account is stamped NPA at day-end. Once stamped NPA, a partial payment cannot upgrade the account back to Standard—the borrower must clear 100% of all overdue principal and interest arrears.",
  },
  {
    question:
      "Why is Day 61–85 (SMA-2) the highest-ROI intervention window for bank collections?",
    answer:
      "Between Day 61 and Day 85, the account is still classified as Standard (SMA-2) rather than Sub-Standard NPA. Curing the account within this window requires clearing only the overdue EMIs rather than the entire recalled loan balance, avoids the immediate 15% secured (or 25% unsecured) Sub-Standard provisioning hit, and eliminates multi-year DRT, SARFAESI, or civil court litigation.",
  },
  {
    question:
      "How does an Advocate-Signed Soft Legal Cure Notice outperform telecalling in SMA-2?",
    answer:
      "By Day 61, borrowers have typically muted collection IVRs, ignored automated SMS reminders, and screened unknown telecaller numbers. An Advocate-Signed Cure Notice carries formal statutory authority on legal letterhead, explains the irreversible Day-90 NPA & CICRA credit-score impact, attaches a verified Speed Post RPAD barcode alongside Email and WhatsApp delivery, and establishes an admissible BSA 2023 Section 63 audit trail.",
  },
  {
    question:
      "Does sending an Advocate Cure Notice during SMA-1 or SMA-2 violate RBI Fair Practices Code?",
    answer:
      "No—provided the notice is drafted in strictly non-intimidating, factual statutory language. It must disclose overdue principal, interest, and penal charges separately (in compliance with the RBI August 2023 Penal Charges Directions), avoid false threats of immediate police arrest, and clearly state the contractual and regulatory consequences of crossing 90 DPD.",
  },
  {
    question:
      "Can banks threaten SARFAESI Section 13(2) action inside a Day-62 SMA-2 Cure Notice?",
    answer:
      "A bank cannot issue an actual SARFAESI Section 13(2) demand notice until the account is classified as an NPA. However, a Day-62 Advocate Cure Notice can accurately inform a secured borrower that failure to regularize arrears before Day 90 will result in NPA classification, which statutorily triggers SARFAESI Section 13(2) enforcement proceedings.",
  },
  {
    question:
      "How do Cash Credit (CC) and Overdraft (OD) accounts slip into SMA-2 and NPA?",
    answer:
      "For revolving CC/OD facilities, RBI applies the 'Out of Order' test rather than simple EMI DPD. An account slips toward NPA if the outstanding balance remains continuously in excess of the sanctioned limit or Drawing Power (DP) for 90 days, or if total credits during the preceding 90 days are insufficient to cover the interest debited during the same period.",
  },
  {
    question:
      "How can banks automate Day-62 Cure Notices across 1,000+ SMA-2 accounts without branch bottlenecks?",
    answer:
      "Banks export daily CBS SMA-1/SMA-2 cohorts (CSV or SFTP) into an institutional legal-notice desk. Advocate-vetted templates dynamically populate loan ID, FIFO arrears, e-NACH return references, and vernacular translations, dispatching Email, WhatsApp, and Speed Post RPAD within 24 hours while logging India Post tracking and debtor replies.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const REVIEWER_ATTRIBUTION = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export default function SmaEarlyDelinquencyCureNoticePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: REVIEWER_ATTRIBUTION.name,
      jobTitle: REVIEWER_ATTRIBUTION.role,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    inLanguage: "en-IN",
  };

  const tableSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    about:
      "Comparison of Bank Early Delinquency Intervention Channels (61–90 DPD SMA-2 Window): Telecalling vs SMS/WhatsApp Bot vs Field Agency vs Advocate-Signed Cure Notice",
    name: "SMA-2 Intervention Channel Comparison Matrix for Scheduled Commercial Banks & SFBs",
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
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
        name: "Banks Loan Recovery",
        item: `${SITE_URL}/industries/banks-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SMA-1 & SMA-2 Cure Notice Strategy",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-01 Banking Risk &amp; Collections</span>
            <span>&bull;</span>
            <span>RBI IRACP 61–90 DPD Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull;{" "}
              <Link
                href="/industries/banks-loan-recovery"
                className="underline hover:text-white transition-colors"
              >
                Bank Loan Recovery Hub
              </Link>
            </span>
            Under RBI&apos;s daily day-end NPA stamping mandate, an SMA-2 account crossing 90 DPD becomes irreversible through partial payments—upgradation requires 100% arrears clearance. Deploying automated Day-62 Advocate-Signed Cure Notices within your{" "}
            <Link
              href="/industries/banks-loan-recovery"
              className="text-red-300 underline hover:text-white"
            >
              institutional bank recovery framework
            </Link>{" "}
            arrests NPA roll-rates before provisioning locks up capital.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">
                Day 61–85
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Peak-ROI SMA-2 Cure Window Before Day-90 NPA Cliff
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                100% Arrears
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Mandatory RBI Upgradation Rule Post-NPA Stamping
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                15%–25%
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Sub-Standard NPA Provisioning Saved per Cured Loan
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                24 Hours
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Day-62 CSV-to-RPAD + Email + WhatsApp Dispatch
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-slate-400">
            <span>
              Reviewed by <strong className="text-slate-200">{REVIEWER_ATTRIBUTION.name}</strong> ({REVIEWER_ATTRIBUTION.role})
            </span>
            <span>&bull;</span>
            <span>Updated: November 2026</span>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: "Banks Loan Recovery", href: "/industries/banks-loan-recovery" },
              { label: "SMA-1 & SMA-2 Cure Notice Strategy" },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <SmaCureTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-roi-window"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Day 61–85 (SMA-2) Is a Bank&apos;s Highest-ROI Cure Window
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Most institutional recovery playbooks focus heavily on post-NPA litigation—SARFAESI Section 13(2) demand notices, DRT Section 19 Original Applications, or Order XXXVII summary suits. Yet for a Chief Risk Officer (CRO) or Retail Early-Warning Collections Head, the financial battle is already half-lost the moment an account crosses 90 Days Past Due (DPD) during the bank&apos;s core banking day-end batch run.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Prior to 2021, borrowers routinely exploited &ldquo;evergreening&rdquo; gaps by paying a single partial EMI on Day 89 to keep an account Standard. Following the Reserve Bank of India&apos;s (RBI) Prudential Framework on Resolution of Stressed Assets and the November 12, 2021 IRACP clarification circular, that flexibility ended. Today, once an account slips past 90 DPD, partial payments cannot upgrade it; the borrower must clear 100% of overdue principal and interest. Consequently, <strong>Day 61–85 (the SMA-2 window)</strong> represents the final opportunity where curing only the overdue installments preserves Standard asset classification, avoids immediate 15%–25% Sub-Standard provisioning, and prevents multi-year litigation costs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                    Inside SMA-2 (Day 61–85)
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    Account remains Standard (0.25%–0.40% general provisioning). Clearing 2–3 overdue EMIs immediately resets DPD and restores normal repayment cadence without legal court fees.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                    Post Day-90 NPA Stamping
                  </p>
                  <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                    Immediate 15% (secured) or 25% (unsecured) Sub-Standard provisioning hit, interest derecognition, mandatory full-arrears rule for upgrade, and minimum 60-day SARFAESI or 120-day arbitral/court delay.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="heading-rbi-iracp"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  RBI IRACP Norms: SMA-0, SMA-1, SMA-2 &amp; Day-End NPA Stamping
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Circular on Income Recognition, Asset Classification and Provisioning (IRACP), Scheduled Commercial Banks (SCBs), Small Finance Banks (SFBs), and Urban Cooperative Banks must classify stressed accounts into three Special Mention Account (SMA) buckets prior to NPA stamping:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">RBI Bucket</th>
                      <th className="py-3 px-4 font-bold">Term Loan DPD</th>
                      <th className="py-3 px-4 font-bold">CC / OD Trigger</th>
                      <th className="py-3 px-4 font-bold">Recommended Legal Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">SMA-0</td>
                      <td className="py-3 px-4 text-slate-700">1–30 Days Past Due</td>
                      <td className="py-3 px-4 text-slate-700">Early signs of stress / minor excess</td>
                      <td className="py-3 px-4 text-slate-700">Digital nudges, e-NACH re-presentation, soft SMS</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-4 font-bold text-amber-700">SMA-1</td>
                      <td className="py-3 px-4 text-slate-700">31–60 Days Past Due</td>
                      <td className="py-3 px-4 text-slate-700">Continuous excess &gt;30 to 60 days</td>
                      <td className="py-3 px-4 text-slate-700">
                        Day-45 Soft Legal Intimation +{" "}
                        <Link
                          href="/templates/section-25-pss-act-nach-bounce-legal-notice-format"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          s.25 PSS Act notice
                        </Link>{" "}
                        for bounced mandates
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-[#DC2626]">SMA-2</td>
                      <td className="py-3 px-4 text-slate-700">61–90 Days Past Due</td>
                      <td className="py-3 px-4 text-slate-700">Continuous excess &gt;60 to 90 days</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Day-62 Advocate-Signed Cure Notice (Email + WhatsApp + Speed Post RPAD)
                      </td>
                    </tr>
                    <tr className="bg-red-50/50">
                      <td className="py-3 px-4 font-bold text-red-900">NPA (Sub-Std)</td>
                      <td className="py-3 px-4 text-slate-700">&gt;90 Days (Day-End)</td>
                      <td className="py-3 px-4 text-slate-700">Out of Order &gt;90 days / 90d interest gap</td>
                      <td className="py-3 px-4 text-slate-700">
                        Full Loan Recall,{" "}
                        <Link
                          href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          SARFAESI s.13(2)
                        </Link>
                        , or{" "}
                        <Link
                          href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          Sub-₹20L Litigation
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong>Critical Day-End Stamping Rule:</strong> RBI mandates that exact due dates be specified in loan agreements and NPA classification be executed as part of daily day-end processing—not merely at quarter-end. If an account hits 90 DPD on Day 90 at 11:59 PM, it is stamped NPA immediately.
              </div>
            </section>

            {/* Section 3: G2 Comparison Matrix */}
            <section
              id="heading-comparison-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Comparison Matrix: Telecalling vs SMS vs Advocate Cure Notice
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By Day 61, borrowers in SMA-2 have already experienced two months of automated reminders and call-center outreach. Below is an objective operational comparison of the four primary intervention channels available to bank collections teams during the 61–90 DPD window:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">Evaluation Criterion</th>
                      <th className="py-3.5 px-4 font-bold">Internal Telecalling / IVR</th>
                      <th className="py-3.5 px-4 font-bold">SMS / WhatsApp Bot</th>
                      <th className="py-3.5 px-4 font-bold">Field Recovery Agency</th>
                      <th className="py-3.5 px-4 font-bold bg-[#DC2626]">
                        Advocate Cure Notice (Day 62)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Borrower Contactability (61+ DPD)
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Low (DND / Truecaller spam-tagged)
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Moderate open rate; routinely ignored
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Moderate, but high address-change drop-off
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-800 bg-emerald-50/40">
                        High (Verified Email + WhatsApp + Physical RPAD)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Perceived Statutory Gravity
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Minimal (seen as routine reminder)
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Minimal (automated bot tone)
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        High friction; creates borrower hostility
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-800 bg-emerald-50/40">
                        Maximum (Advocate letterhead + statutory warning)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        RBI Fair Practices &amp; Agent Risk
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Low risk if call-hours (8am–7pm) followed
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Low risk (template-approved)
                      </td>
                      <td className="py-3 px-4 text-[#DC2626] font-medium">
                        High regulatory &amp; reputational risk
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-800 bg-emerald-50/40">
                        Zero physical intimidation; 100% RBI-safe
                      </td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Partial-Payment Myth Correction
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Rarely explained accurately by agents
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Too short for FIFO IRACP explanation
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Agents often accept token cash informally
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-800 bg-emerald-50/40">
                        Explicitly states 100% arrears rule &amp; FIFO ledger
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Litigation &amp; BSA 2023 s.63 Continuity
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        None (call logs rarely prove demand)
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Weak standalone evidentiary value
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        None (oral visits inadmissible)
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-800 bg-emerald-50/40">
                        Complete s.63 + RPAD trail feeding Day-91 legal action
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Decision Tree SVG + Mobile Stacked Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Day-62 Batch Dispatch Architecture: 61–90 DPD Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Speed is decisive in SMA-2. If a branch waits until Day 75 to draft and post a manual reminder, India Post delivery and borrower liquidity mobilization push resolution past Day 90. An automated Day-62 batch pipeline compresses drafting and multi-channel service into 24 hours:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 880 210"
                  width={880}
                  height={210}
                  className="w-full h-auto"
                  role="img"
                  aria-label="4-Stage Day 61 to Day 90 SMA-2 Escalation Decision Tree"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="35" width="185" height="140" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="10" y="35" width="185" height="32" rx="12" fill="#DC2626" />
                  <text x="102" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">STAGE 1: DAY 61</text>
                  <text x="102" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">CBS SMA-2 Export</text>
                  <text x="102" y="112" textAnchor="middle" fill="#94A3B8" fontSize="11">Daily CSV / SFTP sync</text>
                  <text x="102" y="130" textAnchor="middle" fill="#94A3B8" fontSize="11">FIFO arrears + e-NACH</text>
                  <text x="102" y="148" textAnchor="middle" fill="#94A3B8" fontSize="11">return memo tags</text>

                  {/* Arrow 1->2 */}
                  <line x1="195" y1="105" x2="230" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="230,100 240,105 230,110" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="240" y="35" width="185" height="140" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="240" y="35" width="185" height="32" rx="12" fill="#DC2626" />
                  <text x="332" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">STAGE 2: DAY 62</text>
                  <text x="332" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">Advocate Cure Notice</text>
                  <text x="332" y="112" textAnchor="middle" fill="#94A3B8" fontSize="11">Email + WhatsApp +</text>
                  <text x="332" y="130" textAnchor="middle" fill="#94A3B8" fontSize="11">Speed Post RPAD</text>
                  <text x="332" y="148" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="bold">24h Batch Dispatch</text>

                  {/* Arrow 2->3 */}
                  <line x1="425" y1="105" x2="460" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="460,100 470,105 460,110" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="470" y="35" width="185" height="140" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="470" y="35" width="185" height="32" rx="12" fill="#F59E0B" />
                  <text x="562" y="56" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">STAGE 3: DAY 65–84</text>
                  <text x="562" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">Cure &amp; Reply Triage</text>
                  <text x="562" y="112" textAnchor="middle" fill="#94A3B8" fontSize="11">1-click UPI/BBPS full</text>
                  <text x="562" y="130" textAnchor="middle" fill="#94A3B8" fontSize="11">arrears link; advocate</text>
                  <text x="562" y="148" textAnchor="middle" fill="#94A3B8" fontSize="11">reply classification</text>

                  {/* Arrow 3->4 */}
                  <line x1="655" y1="105" x2="690" y2="105" stroke="#10B981" strokeWidth="2.5" />
                  <polygon points="690,100 700,105 690,110" fill="#10B981" />

                  {/* Stage 4 */}
                  <rect x="700" y="35" width="170" height="140" rx="12" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="700" y="35" width="170" height="32" rx="12" fill="#10B981" />
                  <text x="785" y="56" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">STAGE 4: DAY 85+</text>
                  <text x="785" y="90" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">Cured OR Escalate</text>
                  <text x="785" y="112" textAnchor="middle" fill="#CBD5E1" fontSize="11">Cured: Standard Status</text>
                  <text x="785" y="130" textAnchor="middle" fill="#CBD5E1" fontSize="11">Uncured: Pre-staged</text>
                  <text x="785" y="148" textAnchor="middle" fill="#F87171" fontSize="11">s.13(2) / Lok Adalat</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 · Day 61",
                    title: "CBS SMA-2 Cohort Export",
                    desc: "Automated CSV/SFTP pull of accounts crossing 60 DPD with FIFO arrears and e-NACH return memos.",
                  },
                  {
                    stage: "Stage 2 · Day 62",
                    title: "Advocate Cure Notice Dispatch",
                    desc: "24-hour multi-channel service via Email, WhatsApp, and Speed Post RPAD with exact cure amount.",
                  },
                  {
                    stage: "Stage 3 · Day 65–84",
                    title: "Payment Link & Reply Triage",
                    desc: "Borrowers settle 100% overdue EMIs via payment link; hardship replies are triaged by legal counsel.",
                  },
                  {
                    stage: "Stage 4 · Day 85+",
                    title: "Standard Cure or Day-91 Readiness",
                    desc: "Cured accounts stay Standard; uncured accounts feed seamlessly into SARFAESI s.13(2) or Lok Adalat.",
                  },
                ].map((card) => (
                  <div
                    key={card.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {card.stage}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Scenario Playbooks: 4 Retail &amp; SME SMA-2 Slippage Traps
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select a banking portfolio segment below to inspect how RBI IRACP rules interact with borrower behavior between Day 61 and Day 85—and how an advocate-signed notice resolves each trap:
              </p>

              <SmaCureScenarioTabs />
            </section>

            {/* Section 6: Worked Provisioning Cost Model */}
            <section
              id="heading-cure-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  SMA-2 Cure Economics: 1,000-Account Provisioning Cost Model
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To evaluate the return on investment (ROI) of Day-62 Advocate Cure Notices, consider an illustrative institutional model of <strong>1,000 retail/MSME accounts</strong> entering SMA-2 (61 DPD) with an average outstanding principal of <strong>₹4.50 Lakhs</strong> (total cohort exposure: <strong>₹45.00 Crore</strong>):
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Illustrative Provisioning &amp; Capital Release Ledger
                  </span>
                  <span className="text-xs text-slate-400">
                    1,000 SMA-2 Accounts &bull; ₹45.00 Cr Exposure
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-slate-800/70 rounded-xl p-4 space-y-2 border border-slate-700">
                    <p className="font-bold text-slate-200">
                      Baseline: Telecalling Only (Status Quo)
                    </p>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>&bull; Historical Day-61–90 Telecalling Cure: ~10% (100 accounts)</li>
                      <li>&bull; Slippage to NPA on Day 90: 900 accounts (₹40.50 Cr)</li>
                      <li>&bull; 15% Secured Sub-Standard Provisioning: <strong className="text-red-400">₹6.075 Cr locked</strong></li>
                      <li>&bull; Unsecured 25% Provisioning (if unsecured): <strong className="text-red-400">₹10.125 Cr locked</strong></li>
                    </ul>
                  </div>

                  <div className="bg-emerald-950/40 rounded-xl p-4 space-y-2 border border-emerald-800/60">
                    <p className="font-bold text-emerald-300">
                      With Day-62 Advocate Cure Notice Batch
                    </p>
                    <ul className="space-y-1.5 text-slate-200">
                      <li>&bull; Modeled 3x Cure Lift (30% cohort cured): 300 accounts (₹13.50 Cr)</li>
                      <li>&bull; Prevented NPA Slippage: 200 incremental accounts (₹9.00 Cr)</li>
                      <li>&bull; Capital Provisioning Saved (at 15%–25%): <strong className="text-emerald-400">₹1.35 Cr – ₹2.25 Cr</strong></li>
                      <li>&bull; Plus avoided DRT/Arbitration/SARFAESI litigation costs on 200 accounts</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  <em>Methodology Note:</em> Provisioning percentages (15% secured / 25% unsecured Sub-Standard) reflect standard RBI IRACP baseline norms. Actual cure lift depends on portfolio seasoning, collateral mix, and CBS data hygiene.
                </p>
              </div>
            </section>

            {/* Section 7: RBI Compliance & BSA 2023 Checklist */}
            <section
              id="heading-compliance-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  RBI Fair Practices, Penal Charges &amp; BSA 2023 s.63 Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every SMA-1 and SMA-2 notice must withstand both RBI supervisory inspection and subsequent judicial scrutiny if the account eventually enters{" "}
                <Link
                  href="/law/lok-adalat-pre-litigation-money-recovery"
                  className="text-[#DC2626] underline font-semibold"
                >
                  Pre-Litigation Lok Adalat
                </Link>{" "}
                or court proceedings. Verify these 6 mandatory compliance controls before batch dispatch:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  {
                    title: "1. Penal Charges Segregation (RBI Aug 2023)",
                    desc: "Display overdue principal, contractual interest, and penal charges as separate line items—never capitalize penal charges into principal.",
                  },
                  {
                    title: "2. Explicit Full-Arrears Cure Disclosure",
                    desc: "State the exact INR figure required to restore Standard status and warn that partial payments will not prevent Day-90 NPA classification.",
                  },
                  {
                    title: "3. Non-Intimidating Statutory Tone",
                    desc: "Avoid threatening police arrest for civil EMI default; cite only lawful statutory remedies (CICRA reporting, PSS Act s.25, or SARFAESI post-NPA).",
                  },
                  {
                    title: "4. BSA 2023 Section 63 Hash & Delivery Logs",
                    desc: "Archive timestamped Email headers, WhatsApp Business API delivery receipts, and India Post Speed Post RPAD tracking IDs.",
                  },
                  {
                    title: "5. Bankers' Books Evidence Act s.2A Readiness",
                    desc: "Ensure the overdue ledger matches CBS records so the same data can be certified under s.2A if the account proceeds to DRT or Commercial Court.",
                  },
                  {
                    title: "6. Vernacular Accessibility for Retail/Agri",
                    desc: "Include regional language summaries for Tier-2/3 SFB, cooperative, and MSME borrowers to eliminate 'lack of comprehension' defenses.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>

              {/* Cross-Links to Tools, Templates, Sibling Spokes & Seed */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2.5 text-xs sm:text-sm">
                <p className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">
                  Connected Banking Tools, Templates &amp; Escalation Guides
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    Bank Legal Notice Service &rarr;
                  </Link>
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    SARFAESI vs DRT Forum Calculator &rarr;
                  </Link>
                  <Link
                    href="/tools/section-25-nach-bounce-limitation-calculator"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    s.25 e-NACH Limitation Calculator &rarr;
                  </Link>
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    Loan Recall &amp; Guarantee Template &rarr;
                  </Link>
                  <Link
                    href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    SARFAESI Section 14 Possession Guide &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Dual-Track B2B CTA */}
            <SmaCureNoticeCTA variant="primary" />

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: SMA-1 &amp; SMA-2 Cure Notices
                </h2>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="group bg-white">
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 hover:bg-slate-50 transition-colors">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Section 9: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary RBI Circulars &amp; Statutory References
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline leading-relaxed"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
