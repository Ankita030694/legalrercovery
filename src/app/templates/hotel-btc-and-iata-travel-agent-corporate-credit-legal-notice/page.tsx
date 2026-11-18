import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HospitalityNoticeCTA from "./HospitalityNoticeCTA";
import HospitalityNoticeTOC from "./HospitalityNoticeTOC";
import HospitalityNoticeWorkspace from "./HospitalityNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH = "/templates/hotel-btc-and-iata-travel-agent-corporate-credit-legal-notice";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository; attributed to Anuj Anand Malik (Advocate & Founder, AMA Legal Solutions).
const EXACT_H1 =
  "Hospitality & Travel Credit Legal Notice Pack: (1) Hotel BTC City-Ledger Demand Notice + (2) IATA Travel Agent Flown-PNR Recovery Notice";

const EXACT_TITLE = "Hotel BTC City-Ledger & Travel Agent Credit Notice Format";

const EXACT_DESCRIPTION =
  "Downloadable advocate-drafted notice formats featuring Guest Folio / BTC Voucher / Airline PNR / GDS Ticket-Number schedules & GSTR-2B acceptance estoppel.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Hotel BTC City-Ledger & IATA Travel Agent Legal Notice Format"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
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
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Procedure on Written Contracts & Liquidated Claims)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "MSMED Act, 2006 — Sections 15, 16 & 18 (45-Day Credit Ceiling, 3x RBI Compound Interest & MSEFC)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Sections 138 & 143A (Cheque Dishonour & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 — Section 16 & Form GSTR-2B (ITC Availment & Invoice Acceptance)",
    url: "https://www.gst.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic Record Admissibility for PMS Folios & GDS PNRs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "Why must a hotel BTC legal notice attach Guest Folio numbers and GRC cards?",
    answer:
      "Corporate accounts payable teams routinely stall 90+ day City-Ledger invoices by claiming an employee checked out without authorization or disputing F&B and laundry add-ons. Attaching the PMS Guest Folio number, signed Guest Registration Card (GRC), and corporate BTC authorization email transforms an open ledger into a liquidated written contract triable under Order XXXVII CPC.",
  },
  {
    question: "Why should an IATA travel agent list the 13-digit ticket number and GDS PNR in the notice?",
    answer:
      "Because IATA Billing and Settlement Plan (BSP) auto-debits the Travel Management Company every week regardless of whether the corporate client pays. Listing the 6-character GDS PNR (Amadeus/Galileo/Sabre), 13-digit Airline Ticket Number (e.g., 098- or 228- prefix), passenger name, sector, and flown date proves the ticket was actually utilized and forecloses bogus refund or no-show excuses.",
  },
  {
    question: "How does GSTR-2B Input Tax Credit (ITC) estoppel defeat corporate payment excuses?",
    answer:
      "Under Section 16 of the CGST Act, 2017, a corporate recipient can claim ITC on hotel stays or business airfares only if the underlying tax invoice reflects in Form GSTR-2B and the supply is accepted. Once the corporate debtor avails ITC without issuing a Section 34 debit note or contemporaneous objection, it is legally estopped from denying liability in Commercial Court or MSEFC proceedings.",
  },
  {
    question: "Can registered hotels, TMCs, and industrial caterers claim 3x RBI interest under MSMED s.16?",
    answer:
      "Yes. Hotels, IATA-accredited travel agencies, event venues, and industrial mess caterers holding a valid Udyam Registration Certificate qualify as Micro or Small Enterprises for services rendered. If the corporate buyer delays payment beyond 45 days, Section 16 mandates compound interest with monthly rests at three times the RBI Bank Rate, while Section 43B(h) of the Income Tax Act disallows the buyer's expense deduction.",
  },
  {
    question: "What if a wedding host or corporate client issues a stop-payment on a post-event cheque?",
    answer:
      "Stopping payment on a cheque issued towards a final banquet settlement or corporate BTC security PDC triggers criminal liability under Section 138 of the Negotiable Instruments Act, 1881. You must serve the statutory 15-day demand notice within 30 days of receiving the bank return memo and can seek 20% interim compensation under Section 143A once the complaint is registered.",
  },
  {
    question: "How do I preserve PMS folios, GDS PNR logs, and WhatsApp service proof under BSA 2023 s.63?",
    answer:
      "Export unaltered PDFs of the PMS Guest Folio, GDS PNR flown manifest, bank return memo, and GST invoice ledger directly from your system, then serve the notice simultaneously via official corporate email, WhatsApp PDF, and Speed Post RPAD. Execute a Section 63 BSA 2023 electronic evidence certificate signed by the Hotel Financial Controller or TMC Systems Admin.",
  },
];

export default function HospitalityTravelNoticePackPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_PATH}#article`,
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        datePublished: "2026-11-18T09:00:00+05:30",
        dateModified: "2026-11-18T09:00:00+05:30",
        inLanguage: "en-IN",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "LegalService",
            name: "AMA Legal Solutions",
          },
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
        image: `${SITE_URL}/blog_money_recovery.png`,
      },
      {
        "@type": ["DigitalDocument", "CreativeWork"],
        "@id": `${SITE_URL}${PAGE_PATH}#document`,
        name: EXACT_TITLE,
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        url: `${SITE_URL}${PAGE_PATH}`,
        inLanguage: "en-IN",
        encodingFormat: "text/plain",
        isAccessibleForFree: true,
        about: {
          "@type": "Thing",
          name: "Hotel BTC City-Ledger & IATA Travel Agent Corporate Credit Legal Notice",
        },
        creator: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_PATH}#faq`,
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
        "@id": `${SITE_URL}${PAGE_PATH}#breadcrumb`,
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
            name: EXACT_TITLE,
            item: `${SITE_URL}${PAGE_PATH}`,
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-16 · Hospitality &amp; Corporate Travel Template Pack</span>
            <span>·</span>
            <span>Order XXXVII CPC, MSMED s.16 &amp; NI Act s.138</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary · Hotel BTC &amp; IATA TMC Recovery
            </span>
            Built for our{" "}
            <Link
              href="/industries/hotels-banquets-corporate-travel-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Hotels, Banquets &amp; Corporate Travel Recovery Hub
            </Link>
            , this dual-format legal notice pack arms Hotel Credit Managers, IATA Travel Management Companies (TMCs), Banquet GMs, and Industrial Caterers with itemized Guest Folio, BTC Voucher, 13-digit Airline Ticket Number, and GDS PNR schedules—locking in GSTR-2B acceptance estoppel for Order XXXVII CPC summary suits, MSMED Section 16 interest, and Section 138 cheque prosecution.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">4 Presets</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                BTC, IATA PNR, Banquet &amp; Mess Drafts
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                MSMED s.16 + Income Tax s.43B(h) Lever
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">Order 37 CPC</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Summary Suit on Folio &amp; Flown-PNR Logs
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">30 + 15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                NI Act s.138 &amp; 20% Interim s.143A Window
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Hotels, Banquets & Corporate Travel",
                href: "/industries/hotels-banquets-corporate-travel-recovery",
              },
              {
                label: "Hotel BTC & IATA Credit Notice Pack",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <HospitalityNoticeTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Interactive Workspace */}
            <section
              id="notice-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Interactive Hotel BTC &amp; IATA PNR Notice Workspace
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your operational default scenario below—<strong>Hotel BTC City-Ledger</strong>, <strong>IATA TMC Flown-PNR</strong>, <strong>Banquet Stopped Cheque (s.138)</strong>, or <strong>Industrial Canteen Mess Arrears</strong>. Edit the Guest Folio, BTC Voucher, 13-digit Airline Ticket Number, and GSTIN fields to generate an advocate-ready demand notice with 1-click Copy or PDF Print.
              </p>

              <HospitalityNoticeWorkspace />
            </section>

            {/* Section 2: Why Generic Drafts Fail */}
            <section
              id="why-generic-drafts-fail"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Generic Notice Drafts Fail for Hotel BTC &amp; IATA Credit
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Standard B2B demand letters fail in hospitality and corporate travel disputes because they cite only a lump-sum ledger balance. Corporate finance controllers exploit vague notices by inventing post-hoc excuses—claiming an engineer checked out early, room-service F&amp;B was unauthorized, or a flight ticket was cancelled. To lock out frivolous leave-to-defend applications under <strong>Order XXXVII Rule 3 CPC</strong>, your notice must embed industry-specific transactional identifiers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-100 text-[#DC2626]">
                    Hotel City-Ledger Pitfall
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    &ldquo;Employee Left the Company / F&amp;B Not Approved&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Defeated by citing the exact <strong>PMS Guest Folio No.</strong>, signed <strong>Guest Registration Card (GRC)</strong>, corporate <strong>BTC Authorization Email</strong>, and zero-protest checkout timestamp.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-100 text-[#DC2626]">
                    IATA BSP Cashflow Trap
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Weekly IATA BSP Auto-Debit vs 60-Day Corporate Stall
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    IATA debits the TMC&apos;s bank account every 7–15 days. Citing the <strong>6-character GDS PNR</strong>, <strong>13-digit Airline Ticket Number</strong>, and flown coupon status proves irreversible cash outflow.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                    Banquet Balance Trick
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Post-Phera Stop-Payment on Extra-Pax &amp; Bar Cheques
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hosts often stop post-event cheques alleging &ldquo;service deficiency.&rdquo; Embedding the <strong>Event Captain consumption slip</strong> and <strong>Section 138 + 143A NI Act</strong> warning shuts down bad-faith stop-payments.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Canteen &amp; Mess Defense
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Arbitrary Hygiene Penalties Blocking 120-Day Bills
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Factories withhold ₹15–30 Lakh mess bills citing un-sampled quality fines. Citing <strong>Biometric Meal Logs</strong>, <strong>MSMED s.16</strong>, and <strong>Income Tax s.43B(h)</strong> triggers immediate CFO settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Folio, BTC & PNR Schedules */}
            <section
              id="folio-pnr-schedules"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Mandatory Folio, BTC Voucher &amp; GDS PNR Schedule Fields
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether your team dispatches a single notice or uploads 500+ overdue accounts via CSV, every hospitality and travel credit notice must attach a structured transaction schedule. Below is the exact evidentiary matrix used by Indian Commercial Courts and MSEFC tribunals.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Vertical / Track</th>
                      <th className="p-3.5 font-bold">Mandatory Schedule Identifiers</th>
                      <th className="p-3.5 font-bold">Primary Proof Document</th>
                      <th className="p-3.5 font-bold">Statutory Enforcement Hook</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Hotel BTC City-Ledger</td>
                      <td className="p-3.5 text-slate-700">
                        PMS Folio No., Guest Name, Check-in/Out Dates, BTC Voucher / Email Date, Tax Invoice No.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Signed GRC + BTC Authorization Email + GSTR-2B ITC Reflection
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Order XXXVII CPC + MSMED s.16
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">IATA Travel Agent (TMC)</td>
                      <td className="p-3.5 text-slate-700">
                        6-Char GDS PNR, 13-Digit Airline Ticket No., Passenger Name, Sector, Travel Date, BSP Cycle
                      </td>
                      <td className="p-3.5 text-slate-700">
                        GDS Flown-Coupon Manifest + Corporate Travel Desk Approval Email
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Order XXXVII CPC + Order 38 Rule 5
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Banquet / Wedding Venue</td>
                      <td className="p-3.5 text-slate-700">
                        Event Contract Date, Min. Guaranteed Pax, Extra-Pax / Bar Slip, Cheque No. &amp; Return Memo
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Signed Event Captain Consumption Slip + CCTV Timestamp + Bank Memo
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        NI Act s.138 + s.143A (20% Interim)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">Industrial Canteen / Mess</td>
                      <td className="p-3.5 text-slate-700">
                        Monthly Billing Cycle, Biometric / RFID Meal Count, Rate per Thali, Udyam Reg. No.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Plant HR Certified Meal Sheet + GSTR-2B + Zero FSSAI Penalty Notice
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        MSMED s.15–18 + Income Tax s.43B(h)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: GSTR-2B, Order 37 & MSMED */}
            <section
              id="gstr2b-and-statutory-hooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  GSTR-2B Acceptance Estoppel, Order XXXVII CPC &amp; MSMED s.16
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Hospitality and travel receivables carry three exceptionally sharp statutory levers in India that generic collection agencies rarely invoke together:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 rounded-r-xl space-y-1.5">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    1. GSTR-2B Input Tax Credit (ITC) Estoppel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Section 16 of the CGST Act, 2017, a corporate debtor cannot lawfully claim ITC unless it has received the services and accepted the tax invoice. Once your hotel or TMC invoice reflects in the corporate buyer&apos;s Form GSTR-2B and ITC is availed without a Section 34 debit note, the debtor is estopped from disputing the underlying stay or flown ticket.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 bg-emerald-50/60 p-4 rounded-r-xl space-y-1.5">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    2. MSMED Section 16 Compound Interest &amp; Section 43B(h) Tax Disallowance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If your hotel, TMC, or catering entity holds a Micro or Small Udyam registration, unpaid bills beyond 45 days attract mandatory monthly-compounded interest at <strong>3x the RBI Bank Rate</strong> (currently ~18.75%–19.50% p.a.)—and the corporate buyer loses its income tax expense deduction for that financial year under Section 43B(h). Compute your exact statutory interest claim using our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>
                    .
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 bg-amber-50/60 p-4 rounded-r-xl space-y-1.5">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    3. Order XXXVII CPC Summary Suits &amp; NI Act Section 138/143A
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Signed Banquet Contracts, corporate BTC credit applications, and acknowledged PMS/GDS schedules qualify as written contracts for liquidated sums under Order XXXVII CPC, barring long civil trials. Where a post-event cheque or corporate security PDC is dishonoured (including &ldquo;Payment Stopped by Drawer&rdquo;), serving a{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      Section 138 cheque bounce notice within 30 days
                    </Link>{" "}
                    unlocks criminal summons and 20% interim compensation under Section 143A.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Service Protocol & BSA 2023 s.63 */}
            <section
              id="service-bsa-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Multi-Channel Dispatch &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Corporate debtors routinely deny receiving physical letters. Under <strong>Section 27 of the General Clauses Act, 1897</strong> and <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, simultaneous tri-channel service creates an airtight presumption of delivery before Commercial Courts and Magistrates:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Channel 1 · Speed Post RPAD
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Dispatch to the corporate debtor&apos;s MCA Registered Office and billing branch. Retain the original postal receipt and India Post tracking delivery PDF.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Channel 2 · Corporate Email
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Mark the CFO, Accounts Payable desk, and Admin Head who issued the original BTC/travel approval. Preserve full SMTP/MIME headers for BSA s.63 certification.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Channel 3 · WhatsApp PDF
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Send the signed PDF notice to the authorized signatory or wedding host&apos;s verified mobile number. Archive double-tick delivery timestamps with a{" "}
                    <Link
                      href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      unified digital audit log
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Dual-Track CTA */}
            <HospitalityNoticeCTA />

            {/* Section 6: Cluster Cross-Links */}
            <section
              id="hospitality-cluster-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Related Hospitality, Banquet &amp; TMC Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/hotel-btc-bill-to-company-corporate-credit-account-default-recovery"
                  className="group block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Hotel BTC Playbook
                  </span>
                  <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Hotel &lsquo;Bill-to-Company&rsquo; (BTC) City-Ledger Recovery
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Convert 90+ day corporate BTC emails, PMS Guest Registration Cards &amp; GSTR-2B claims into Order 37 suits.
                  </p>
                </Link>

                <Link
                  href="/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery"
                  className="group block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    IATA BSP &amp; TMC Guide
                  </span>
                  <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    IATA Travel Agent (TMC) Flight Credit Default Recovery
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Recover corporate air-ticket, LCC wallet &amp; visa credit defaults via Order XXXVII Rule 5 bank attachment.
                  </p>
                </Link>

                <Link
                  href="/banquet-hall-destination-wedding-post-event-balance-cheque-bounce"
                  className="group block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Wedding &amp; Banquet s.138
                  </span>
                  <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Banquet Hall &amp; Wedding Balance Cheque Stop-Payment
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Enforce NI Act s.138 &amp; 20% s.143A interim relief on stopped post-event extra-pax &amp; bar cheques.
                  </p>
                </Link>

                <Link
                  href="/industrial-canteen-corporate-cafeteria-institutional-caterer-bill-recovery"
                  className="group block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Institutional Catering
                  </span>
                  <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Industrial Canteen &amp; Corporate Mess Bill Recovery
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Recover 120-day factory &amp; hostel mess arrears using MSMED s.16, s.43B(h) &amp; biometric meal logs.
                  </p>
                </Link>

                <Link
                  href="/recovery/business-dues"
                  className="group block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Core Commercial Rail
                  </span>
                  <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    B2B Commercial &amp; Business Dues Recovery Portal
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Structured pre-litigation escalation for corporate invoices, running accounts &amp; trade credit.
                  </p>
                </Link>

                <Link
                  href="/templates/legal-notice-reply-format"
                  className="group block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Companion Template
                  </span>
                  <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Reply to Legal Notice Format (Order VIII Rule 5 CPC)
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Counter-notice template if a defaulting corporate buyer sends a frivolous set-off or quality claim.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 7: FAQs & Primary Sources */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions: Hotel BTC &amp; IATA Credit Notices
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

              {/* Statutory References */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Primary Statutory Authorities &amp; Official Portals
                </p>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((src) => (
                    <li key={src.title} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">•</span>
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
              </div>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
