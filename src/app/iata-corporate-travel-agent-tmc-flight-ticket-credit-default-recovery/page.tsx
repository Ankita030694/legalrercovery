import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import IataTmcNoticeCTA from "./IataTmcNoticeCTA";
import IataTmcTableOfContents from "./IataTmcTableOfContents";
import IataTmcScenarioTabs from "./IataTmcScenarioTabs";

export const revalidate = 86400;

const PAGE_PATH = "/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "IATA BSP Debits You in 7 Days—What When Your Corporate Client Defaults on ₹35 Lakh of Flown Air Tickets? Urgent TMC Recovery Playbook";

const META_TITLE = "IATA Travel Agent (TMC): Flight Credit Default Recovery";
const META_DESCRIPTION =
  "IATA BSP debits TMCs weekly while corporate clients default on flown airfares. Recover dues fast via Order 37 CPC, Order 38 Rule 5 & MSMED Act.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "corporate client defaulted on flight ticket credit iata travel agent recovery",
    "iata bsp weekly auto debit travel agent cashflow crisis",
    "startup booked 40 lakhs international flights defaulted tmc",
    "lcc wallet indigo air india corporate booking credit default",
    "pnr ticket flown manifest proof summary suit travel agent",
    "personal director guarantee corporate travel credit line",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "IATA Corporate Travel Agent (TMC) Flight Ticket Credit Default Recovery Playbook"
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
      "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits) & Order XXXVIII Rule 5 (Attachment Before Judgment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15, 16, 17 & 18) — Ministry of MSME / Samadhaan Portal",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A) — Legislative Department, Ministry of Law & Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records, GDS Logs & Email Trails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Section 128 Surety Liability & Section 237 Ostensible Authority) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
];

const FAQS = [
  {
    question:
      "Can an IATA travel agent file an Order XXXVII CPC Summary Suit using GDS PNR flown status and email approvals?",
    answer:
      "Yes. Under Order XXXVII Rule 1(2) of the Code of Civil Procedure, 1908, a summary suit is maintainable on a written contract or liquidated debt evidenced by written acknowledgments. When a TMC pairs its signed corporate BTC credit onboarding form, corporate travel desk booking emails, GST B2B tax invoices, and Amadeus/Galileo/Sabre PNR 'Flown/Used' coupon manifests (certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023), the debt is liquidated and the corporate debtor cannot obtain unconditional leave to defend.",
  },
  {
    question:
      "How do I stop a defaulting startup or corporate from draining its bank accounts before judgment?",
    answer:
      "If you have credible indicators that a corporate debtor is winding down operations, shifting revenue to sister concerns, or facing cash burn while owing ₹20–₹50 Lakh in flown tickets, your counsel can move an urgent application under Order XXXVIII Rule 5 CPC (Attachment Before Judgment) alongside your Commercial Suit. Supported by a balance-sheet or MCA filing red flag and flown PNR proof, the court can direct the debtor to furnish security or freeze its operating bank accounts pending disposal.",
  },
  {
    question:
      "My IATA BSP auto-debit hits in 7 days, and the client has not paid—what should I do on Day 1?",
    answer:
      "Immediately revoke the client's self-booking tool and corporate desk credit access, cancel any unflown refundable future itineraries per your SLA to cap net exposure, extract the complete GDS 'Flown' coupon report and email approval trail, and dispatch a 7-day Advocate Statutory Demand Notice via Speed Post RPAD, email, and WhatsApp. Simultaneously put any Personal Guarantee signatory or security PDC on formal notice.",
  },
  {
    question:
      "Are LCC wallet bookings (IndiGo, Air India Express, Akasa) recoverable if there is no IATA BSP statement?",
    answer:
      "Yes. Low-Cost Carrier (LCC) portal bookings are even easier to prove because the TMC pre-funds the airline agency wallet in cash and receives instant GST tax invoices and PNR passenger manifests. Pairing the LCC airline invoice, employee boarding/flown record, and your B2B tax invoice with e-Invoice IRN establishes completed performance under the Indian Contract Act, 1872.",
  },
  {
    question:
      "Can a corporate client refuse payment by claiming the employee who booked the tickets has resigned?",
    answer:
      "No. Under Section 237 of the Indian Contract Act, 1872 (Ostensible Authority), a company is legally bound by bookings made by an employee it previously held out as its authorized travel coordinator. Moreover, once your B2B GST invoices reflect in the client's GSTR-2B and are not rejected, the corporate client is estopped from claiming the travel was unauthorized.",
  },
  {
    question:
      "Can an Udyam-registered TMC claim 3x RBI Bank Rate compound interest under the MSMED Act?",
    answer:
      "Yes. If your travel management company holds a valid Micro or Small Udyam Registration predating the invoices, Section 15 and Section 16 of the MSMED Act, 2006 override any 60-day or 90-day credit clause and mandate payment within a maximum of 45 days. Overdue balances accrue compound interest with monthly rests at three times the RBI Bank Rate, and Section 43B(h) of the Income Tax Act disallows the corporate buyer's tax deduction until you are paid.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-18T09:00:00+05:30",
  dateModified: "2026-11-18T09:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How IATA Travel Agents (TMCs) Recover Corporate Flight Credit Defaults Before BSP Debits Hit",
  description:
    "5-stage statutory recovery protocol for IATA-accredited travel management companies facing corporate flight, LCC wallet, visa, and hotel BTC credit defaults.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Freeze Credit Line & Cap Unflown Exposure (Day 0)",
      text: "Suspend corporate self-booking access and cancel refundable unflown itineraries to prevent compounding IATA BSP and LCC wallet exposure.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Compile GDS Flown PNR Manifest & BSA Section 63 Certificate (Day 1)",
      text: "Export Amadeus/Galileo/Sabre coupon 'Flown' status, corporate email approval trails, GST e-Invoices, and execute a Section 63 BSA 2023 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch Multi-Channel Advocate Statutory Demand Notice (Day 2)",
      text: "Serve a formal demand notice to the corporate MD, CFO, and Personal Guarantee signatories via Speed Post RPAD, email, and WhatsApp citing Order XXXVII CPC and MSMED s.16.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Present Security PDC / Invoke Personal Guarantee & Section 43B(h) (Day 8–15)",
      text: "If unpaid, present contractual security PDCs under NI Act s.138 (within 30 days of return memo) and notify the client's statutory auditor of Section 43B(h) disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File Order XXXVII Summary Suit with Order XXXVIII Rule 5 Attachment",
      text: "Move the Commercial Court for summary judgment on the liquidated flight ledger alongside urgent Order XXXVIII Rule 5 bank account attachment.",
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
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hotels, Banquets & Corporate Travel",
      item: `${SITE_URL}/industries/hotels-banquets-corporate-travel-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IATA TMC Flight Credit Recovery",
      item: CANONICAL_URL,
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

export default function IataCorporateTravelTmcRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Hotels, Banquets & Corporate Travel",
      href: "/industries/hotels-banquets-corporate-travel-recovery",
    },
    {
      label: "IATA TMC Flight Credit Recovery",
      href: PAGE_PATH,
    },
  ];

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>IND-16 &bull; IATA BSP &amp; TMC Recovery</span>
              <span className="text-red-500">&bull;</span>
              <span>Order XXXVII CPC &amp; Rule 5 Attachment</span>
              <span className="text-red-500">&bull;</span>
              <span>MSMED Act s.15–18</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40–60 words + inline parent Hub link) */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (TMC &amp; IATA BSP Protection)
              </span>
              <p>
                Under our{" "}
                <Link
                  href="/industries/hotels-banquets-corporate-travel-recovery"
                  className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
                >
                  Hotels, Banquets &amp; Corporate Travel Recovery Hub
                </Link>
                , IATA travel agents facing corporate air-ticket credit defaults can enforce
                immediate recovery using Order XXXVII CPC Summary Suits and urgent Order XXXVIII
                Rule 5 bank account attachment—backed by GDS PNR &ldquo;Flown&rdquo; status
                manifests, corporate email trails, and MSMED Act s.16 3x RBI compound interest.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  7–15 Days
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  IATA BSP Auto-Debit &amp; BG Risk Clock
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  Order 37
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  CPC Summary Suit on Flown PNR Proof
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  Rule 5 Freeze
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Order XXXVIII Bank Attachment Remedy
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  3x RBI Rate
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Compound Interest (MSMED Act s.16)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <IataTmcTableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The IATA BSP Cashflow Squeeze */}
              <section
                id="heading-bsp-squeeze"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Why a Single Corporate Ticket Default Threatens Your IATA License
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Corporate Travel Management Companies (TMCs) and IATA-accredited agencies operate
                  on one of the most asymmetric risk models in Indian B2B commerce. Your agency
                  earns a razor-thin <strong>1% to 3% management or service fee</strong>, yet you
                  front <strong>100% of the gross airfare, airport taxes, and GST</strong> to
                  airlines on a rigid settlement clock.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the <strong>IATA Billing and Settlement Plan (BSP)</strong>, your agency
                  bank account is auto-debited weekly or fortnightly regardless of whether your
                  corporate client has cleared your 30-day credit ledger. Simultaneously, Low-Cost
                  Carriers (LCCs) such as IndiGo, Air India Express, and Akasa require pre-funded
                  agency cash wallets. When a funded startup, EPC contractor, or export house
                  flies ₹35 Lakh to ₹50 Lakh of international business-class tickets and defaults,
                  the loss wipes out the net profit of 150+ profitable corporate accounts—and
                  failure to honour the BSP debit risks <strong>IATA Bank Guarantee (BG)</strong>{" "}
                  invocation and agency termination.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      100% Principal Exposure
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      TMC absorbs full ticket cost on BSP remittance day even when the corporate
                      client withholds payment.
                    </p>
                  </div>
                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                      BG &amp; Remittance Cliff
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      One missed BSP settlement triggers a Notice of Irregularity and threatens
                      your ₹50L–₹2 Cr Bank Guarantee.
                    </p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                      Zero-Trial Proof Advantage
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Unlike disputed goods, an airline PNR showing &ldquo;Flown&rdquo; status is
                      immutable third-party proof of service delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Statutory Recovery Matrix for Corporate Travel Credit Defaults
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Ordinary civil recovery suits take years—far too slow when your IATA BSP debit
                  clears in days. TMCs must deploy high-leverage summary, attachment, criminal
                  cheque-bounce, and MSME tax remedies in parallel. For full background on
                  commercial invoice recovery, see our{" "}
                  <Link
                    href="/recovery/business-dues"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Business Dues Recovery Guide
                  </Link>
                  .
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Statutory Remedy</th>
                        <th className="p-3.5 font-bold">Core TMC Trigger</th>
                        <th className="p-3.5 font-bold">Key Documentary Proof</th>
                        <th className="p-3.5 font-bold">Creditor Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          <Link
                            href="/law/order-37-summary-suit-money-recovery"
                            className="text-[#DC2626] hover:underline"
                          >
                            Order XXXVII CPC Summary Suit
                          </Link>
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Liquidated airfare, visa &amp; hotel BTC ledger unpaid past credit term
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Signed BTC Credit Form, GDS PNR &ldquo;Flown&rdquo; status, B2B GST
                          invoices
                        </td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          Defendant must prove real defence within 10 days or face decree
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Order XXXVIII Rule 5 CPC
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Startup/corporate shutting office, firing staff, or draining bank accounts
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Affidavit of asset dissipation + MCA/GST suspension or layoff evidence
                        </td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          Urgent pre-judgment bank account freeze / security deposit order
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          <Link
                            href="/cheque-bounce-notice-timeline-section-138"
                            className="text-[#DC2626] hover:underline"
                          >
                            NI Act s.138 &amp; s.143A
                          </Link>
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Corporate security PDC or settlement cheque dishonoured / stopped
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Original cheque, Bank Return Memo, 30-day statutory demand notice
                        </td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          Criminal summons to Directors + 20% interim compensation (s.143A)
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          MSMED Act s.15–18 &amp; IT Act s.43B(h)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Udyam-registered Micro/Small TMC unpaid beyond 45 days
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Udyam Certificate + B2B invoices + PNR &amp; email approval logs
                        </td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          3x RBI compound interest + buyer&apos;s Income Tax deduction disallowed
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          Contract Act s.128 Guarantee
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Corporate entity insolvent or unresponsive; Promoter signed guarantee
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Executed Personal Director Guarantee clause in BTC Credit Agreement
                        </td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          Co-extensive personal liability against Promoter&apos;s personal assets
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: 5-Stage Decision Tree SVG + Mobile Stack */}
              <section
                id="heading-escalation-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    5-Stage TMC Escalation Rail: Day 0 Freeze to Bank Attachment
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Speed determines whether your TMC recovers 100% of principal before other
                  creditors queue up. Follow this strict 15-day escalation decision tree the
                  moment a corporate invoice crosses its due date.
                </p>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <svg
                    width="860"
                    height="220"
                    viewBox="0 0 860 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    role="img"
                    aria-label="5-Stage IATA TMC Corporate Flight Credit Default Recovery Decision Tree"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="35" width="148" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="24" y="62" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (DAY 0)</text>
                    <text x="24" y="84" fill="#FFFFFF" fontSize="13" fontWeight="bold">Freeze Credit &amp;</text>
                    <text x="24" y="102" fill="#FFFFFF" fontSize="13" fontWeight="bold">Cap Exposure</text>
                    <text x="24" y="128" fill="#CBD5E1" fontSize="10.5">Lock SBT portal,</text>
                    <text x="24" y="144" fill="#CBD5E1" fontSize="10.5">cancel unflown</text>
                    <text x="24" y="160" fill="#CBD5E1" fontSize="10.5">refundable PNRs</text>

                    <path d="M158 110 L182 110" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="184" y="35" width="148" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="198" y="62" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 (DAY 1)</text>
                    <text x="198" y="84" fill="#FFFFFF" fontSize="13" fontWeight="bold">GDS Flown +</text>
                    <text x="198" y="102" fill="#FFFFFF" fontSize="13" fontWeight="bold">BSA s.63 Pack</text>
                    <text x="198" y="128" fill="#CBD5E1" fontSize="10.5">Export Flown PNR,</text>
                    <text x="198" y="144" fill="#CBD5E1" fontSize="10.5">email approvals &amp;</text>
                    <text x="198" y="160" fill="#CBD5E1" fontSize="10.5">GSTR-2B proof</text>

                    <path d="M332 110 L356 110" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="358" y="35" width="148" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="372" y="62" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 3 (DAY 2)</text>
                    <text x="372" y="84" fill="#FFFFFF" fontSize="13" fontWeight="bold">7-Day Advocate</text>
                    <text x="372" y="102" fill="#FFFFFF" fontSize="13" fontWeight="bold">Demand Notice</text>
                    <text x="372" y="128" fill="#CBD5E1" fontSize="10.5">RPAD + Email + WA</text>
                    <text x="372" y="144" fill="#CBD5E1" fontSize="10.5">to MD, CFO &amp;</text>
                    <text x="372" y="160" fill="#CBD5E1" fontSize="10.5">Guarantor</text>

                    <path d="M506 110 L530 110" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="532" y="35" width="148" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="546" y="62" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 4 (DAY 8)</text>
                    <text x="546" y="84" fill="#FFFFFF" fontSize="13" fontWeight="bold">PDC s.138 &amp;</text>
                    <text x="546" y="102" fill="#FFFFFF" fontSize="13" fontWeight="bold">s.43B(h) Audit</text>
                    <text x="546" y="128" fill="#CBD5E1" fontSize="10.5">Present security</text>
                    <text x="546" y="144" fill="#CBD5E1" fontSize="10.5">PDC &amp; notify</text>
                    <text x="546" y="160" fill="#CBD5E1" fontSize="10.5">Statutory Auditor</text>

                    <path d="M680 110 L704 110" stroke="#94A3B8" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="706" y="35" width="144" height="150" rx="12" fill="#7F1D1D" stroke="#F87171" strokeWidth="2" />
                    <text x="720" y="62" fill="#FECACA" fontSize="11" fontWeight="bold">STAGE 5 (DAY 15)</text>
                    <text x="720" y="84" fill="#FFFFFF" fontSize="13" fontWeight="bold">Order 37 Suit</text>
                    <text x="720" y="102" fill="#FFFFFF" fontSize="13" fontWeight="bold">+ Rule 5 Freeze</text>
                    <text x="720" y="128" fill="#FEE2E2" fontSize="10.5">Summary Suit +</text>
                    <text x="720" y="144" fill="#FEE2E2" fontSize="10.5">Order 38 Rule 5</text>
                    <text x="720" y="160" fill="#FEE2E2" fontSize="10.5">Bank Attachment</text>
                  </svg>
                </div>

                {/* Mobile Stacked Decision Tree Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      stage: "STAGE 1 (DAY 0) — Freeze Credit & Cap Exposure",
                      desc: "Lock corporate self-booking portals and cancel refundable unflown itineraries to stop further BSP/LCC bleed.",
                    },
                    {
                      stage: "STAGE 2 (DAY 1) — GDS Flown + BSA s.63 Pack",
                      desc: "Export Amadeus/Galileo/Sabre 'Flown' coupon logs, corporate email approvals, and B2B GST e-Invoices.",
                    },
                    {
                      stage: "STAGE 3 (DAY 2) — 7-Day Advocate Demand Notice",
                      desc: "Serve notice via Speed Post RPAD, Email, and WhatsApp to MD, CFO, and Personal Guarantee signatories.",
                    },
                    {
                      stage: "STAGE 4 (DAY 8) — Security PDC s.138 & s.43B(h)",
                      desc: "Present contractual security PDCs and put the corporate debtor's Statutory Auditor on Section 43B(h) notice.",
                    },
                    {
                      stage: "STAGE 5 (DAY 15) — Order 37 Suit + Rule 5 Freeze",
                      desc: "File Commercial Summary Suit with urgent Order XXXVIII Rule 5 bank account attachment application.",
                    },
                  ].map((item) => (
                    <div
                      key={item.stage}
                      className="rounded-xl bg-slate-900 text-white p-4 border border-slate-800"
                    >
                      <p className="text-xs font-extrabold text-red-400 mb-1">{item.stage}</p>
                      <p className="text-xs text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    4 Corporate Travel Credit Failure Modes &amp; Tactical Responses
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select the commercial default scenario matching your agency&apos;s overdue
                  account to review the exact statutory leverage and immediate 3-step action plan.
                </p>

                <IataTmcScenarioTabs />
              </section>

              {/* Section 5: Worked ₹35L Financial & Interest Calculation Box */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Worked ₹35 Lakh Flown-Ticket Default &amp; MSMED Interest Ledger
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The table below illustrates why an Udyam-registered TMC must never settle for
                  principal-only instalments on aged corporate flight ledgers. You can compute exact
                  monthly compounded statutory interest on your overdue invoices using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>

                <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                    <p className="text-sm sm:text-base font-bold text-white">
                      Case Illustration: ₹35,00,000 International Business-Class Credit Default
                    </p>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      MSMED Act s.16 Compounding
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-slate-800/80 rounded-xl p-3.5">
                      <p className="text-slate-400 text-xs">TMC Service Fee Earned (2%)</p>
                      <p className="text-lg font-extrabold text-slate-100 mt-0.5">&rupee;70,000</p>
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-3.5">
                      <p className="text-slate-400 text-xs">
                        100% Principal Paid by TMC to IATA BSP
                      </p>
                      <p className="text-lg font-extrabold text-red-400 mt-0.5">
                        &rupee;35,00,000
                      </p>
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-3.5">
                      <p className="text-slate-400 text-xs">
                        Illustrative Statutory Rate (3x 6.50% RBI Bank Rate)
                      </p>
                      <p className="text-lg font-extrabold text-amber-400 mt-0.5">
                        19.50% p.a. (Monthly Rests)
                      </p>
                    </div>
                    <div className="bg-emerald-950/70 border border-emerald-700/60 rounded-xl p-3.5">
                      <p className="text-emerald-300 text-xs">
                        90-Day Overdue Statutory Interest + Principal Claim
                      </p>
                      <p className="text-lg font-extrabold text-emerald-400 mt-0.5">
                        &rupee;36,73,413+
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Note:</strong> Statutory interest under Section 16 of the MSMED Act,
                    2006 is calculated at three times the prevailing RBI Bank Rate notified on the
                    date of compounding with monthly rests. In addition, the corporate buyer faces
                    Income Tax disallowance under Section 43B(h) if micro/small TMC dues remain
                    unpaid beyond 45 days at financial year-end.
                  </p>
                </div>
              </section>

              {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
              <section
                id="heading-evidence-bsa"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    GDS PNR &ldquo;Flown&rdquo; Manifest &amp; BSA 2023 s.63 Evidence Checklist
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Corporate defaulters often challenge TMC claims in court by alleging tickets were
                  cancelled, unused, or booked without authorization. Assemble this 6-document
                  evidentiary pack before serving your{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Multi-Channel Statutory Notice
                  </Link>{" "}
                  or reviewing our{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Commercial Legal Notice Workspace
                  </Link>
                  :
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-[#DC2626] shrink-0">01</span>
                    <div>
                      <strong>GDS PNR &ldquo;Flown / Used&rdquo; Coupon Status:</strong> Export the
                      Amadeus, Galileo, or Sabre ticket record showing each flight coupon marked{" "}
                      <code>F</code> (Flown) or <code>U</code> (Used) along with passenger names and
                      travel dates.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-[#DC2626] shrink-0">02</span>
                    <div>
                      <strong>Corporate Travel Desk Email Approval Trail:</strong> Preserve full
                      email headers (<code>@company.com</code>) approving fare quotes, visa fees,
                      and hotel BTC vouchers.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-[#DC2626] shrink-0">03</span>
                    <div>
                      <strong>IATA BSP Billing Statement / LCC Wallet Debit Ledger:</strong> Proof
                      that your agency already remitted 100% of the airline fare from your own
                      working capital.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-[#DC2626] shrink-0">04</span>
                    <div>
                      <strong>B2B GST Tax Invoices &amp; e-Invoice IRN:</strong> Invoices raised
                      against the client&apos;s GSTIN proving input tax credit (ITC) was passed to
                      their GSTR-2B without rejection.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-[#DC2626] shrink-0">05</span>
                    <div>
                      <strong>Signed BTC Credit Onboarding Form / Personal Guarantee:</strong>{" "}
                      Executed credit application specifying credit days, interest rate, jurisdiction,
                      and surety liability.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-[#DC2626] shrink-0">06</span>
                    <div>
                      <strong>Section 63 BSA 2023 Electronic Evidence Certificate:</strong>{" "}
                      Mandatory statutory certificate signed by your TMC IT/system custodian
                      authenticating GDS exports, emails, and WhatsApp booking chats.
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 7: Personal Director Guarantees & Security PDCs */}
              <section
                id="heading-director-guarantee"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Enforcing Personal Director Guarantees &amp; Security PDCs
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a private limited startup or export house pleads cash crunch, corporate
                  limited liability can stall recovery unless you activate personal security hooks.
                  Under <strong>Section 128 of the Indian Contract Act, 1872</strong>, a promoter
                  or director who executes a Personal Guarantee in your TMC Credit Onboarding
                  Agreement assumes liability <em>co-extensive</em> with the company—meaning you
                  can proceed directly against the guarantor without exhausting remedies against the
                  corporate shell.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Similarly, if your agency holds an undated security cheque that bounces or faces a
                  bank block, review our{" "}
                  <Link
                    href="/stop-payment-cheque-bounce-case"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Stop-Payment Cheque Bounce Legal Action Guide
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 138 30+15 Day Timeline
                  </Link>{" "}
                  to ensure criminal prosecution and Section 143A 20% interim compensation are not
                  time-barred.
                </p>
              </section>

              {/* Dual-Track B2B CTA */}
              <IataTmcNoticeCTA variant="dual" />

              {/* Section 8: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions: IATA TMC Credit Default Recovery
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm md:text-base text-slate-900 flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
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

              {/* Section 9: Primary Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Primary Statutory Authorities &amp; Official Filing Portals
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
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
    </>
  );
}
