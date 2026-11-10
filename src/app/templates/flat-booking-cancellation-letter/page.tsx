import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import FlatCancellationNoticeCTA from "./FlatCancellationNoticeCTA";
import FlatCancellationTOC from "./FlatCancellationTOC";
import FlatCancellationLettersWorkspace from "./FlatCancellationLettersWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Flat Booking Cancellation Letter Format (Before Agreement)",
  description:
    "Letter formats to cancel a flat or plot booking before or after agreement, request a refund and limit forfeiture.",
  alternates: {
    canonical: `${SITE_URL}/templates/flat-booking-cancellation-letter`,
  },
  openGraph: {
    title: "Cancel a Flat Booking in Writing: Letter Formats for Buyers",
    description:
      "Ready-to-use flat and plot booking cancellation letter formats (before or after agreement) with RERA forfeiture caps, GST refund claims, and Word (.doc) export.",
    url: `${SITE_URL}/templates/flat-booking-cancellation-letter`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Real Estate (Regulation and Development) Act, 2016 (RERA) — Section 12 (False Brochure Statements), Section 13(1) (10% Advance Cap Before Registered Agreement), Section 18(1) (Unconditional Refund with Interest) & Section 31 (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "Indian Contract Act, 1872 — Section 65 (Restitution) & Section 74 (No Penal Forfeiture Without Proving Actual Loss — India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Supreme Court of India — M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors., (2021) 18 SCC 1 (Unconditional Right to Refund Under Section 18)",
    url: "https://main.sci.gov.in/supremecourt/2021/16750/16750_2021_34_1501_31312_Judgement_11-Nov-2021.pdf",
  },
  {
    title: "MahaRERA Order No. 35/2022 — Prescribed Model Allotment Letter & Statutory Booking Cancellation Forfeiture Ceiling (0% to 2% Cap)",
    url: "https://maharera.maharashtra.gov.in/",
  },
  {
    title: "Central Goods and Services Tax (CGST) Act, 2017 — Section 34 (Credit Notes & Refund of GST Collected on Cancelled Flat Bookings)",
    url: "https://cbic-gst.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Cancellation Emails, WhatsApp Logs & NEFT UTRs)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Strikes Down 20% Flat Cancellation Forfeiture as One-Sided & Unfair",
    parties: "Godrej Projects Development Ltd. v. Anil Karlekar & Ors.",
    citation: "2025 SCC OnLine SC 222 — Supreme Court of India",
    date: "Judgment Dated 03 February 2025",
    facts:
      "Homebuyers cancelled their apartment booking after allotment because of unfavourable market terms and one-sided buyer agreement clauses. Relying on a clause defining 20% of the total basic sale price as 'earnest money', the builder sought to forfeit 20% of the entire apartment value.",
    holding:
      "The Supreme Court held that a forfeiture clause permitting a developer to deduct 20% of the total sale consideration upon buyer-initiated cancellation is manifestly one-sided, unconscionable, and constitutes an unfair contract under Section 2(46) of the Consumer Protection Act, 2019. Drawing on Maula Bux v. Union of India, the Court capped permissible earnest-money deduction on buyer default at a maximum of 10% of the basic sale price (and lower where no agreement was executed or where actual loss is unproved).",
    amount: "20% Forfeiture Struck Down; Excess Booking Money Ordered Refunded",
    takeaway:
      "Cite Godrej Projects v. Anil Karlekar (2025) in Paragraph 2(c) of your Firm Cancellation Letter whenever a builder threatens to forfeit 15%–20% of the flat's total cost.",
  },
  {
    title: "Homebuyer Cannot Be Forced to Sign a One-Sided Builder-Buyer Agreement",
    parties: "Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan",
    citation: "(2019) 5 SCC 725 — Supreme Court of India",
    date: "Judgment Dated 02 April 2019",
    facts:
      "The developer incorporated heavily skewed terms in the Builder-Buyer Agreement (charging 18% interest on buyer delay while offering nominal sq. ft. compensation for builder delay, plus steep cancellation penalties) and argued that the buyer was bound by the signed terms.",
    holding:
      "The Supreme Court ruled that clauses in a real-estate contract are invalid if a homebuyer had no meaningful bargaining power and was presented with a 'take-it-or-leave-it' draft after paying the initial booking advance. Requiring a buyer to forfeit their token advance for refusing to sign an unfair, non-RERA-compliant draft BBA is an unfair trade practice.",
    amount: "100% Refund Ordered With 10.7% Per Annum Interest",
    takeaway:
      "If you paid ₹1 lakh–₹5 lakh token money and the builder later sends a one-sided draft BBA that you refuse to sign, state this explicitly in your cancellation letter to demand a 100% refund with zero deduction.",
  },
  {
    title: "MahaRERA Statutory Cap on Pre-Agreement Booking Cancellation Charges (0% to 2%)",
    parties: "MahaRERA Order No. 35/2022 (Model Allotment Letter Clause 9)",
    citation: "Maharashtra Real Estate Regulatory Authority — Statutory Direction",
    date: "In Force Across Maharashtra Projects (2022–2026)",
    facts:
      "Promoters across Mumbai, Pune, Thane, and Navi Mumbai routinely printed 'Non-Refundable Booking Token' stamps on booking forms and forfeited ₹2 lakh to ₹10 lakh when buyers cancelled before executing an Agreement for Sale.",
    holding:
      "Under MahaRERA Order No. 35/2022 (Clause 9 of the mandatory Model Allotment Letter), if an allottee cancels a booking: (a) within 15 days of issuance of the allotment letter, permitted deduction is ZERO (0%); (b) between 16 and 30 days, maximum deduction is 0.5% of total consideration; (c) between 31 and 60 days, maximum deduction is 1%; and (d) after 60 days, deduction cannot exceed 2% of total consideration. Any refund balance must be paid within 45 days.",
    amount: "0% Deduction (≤15 Days) & Strict 2% Maximum Ceiling Enforced",
    takeaway:
      "For any flat or plot in Maharashtra, citing MahaRERA Order No. 35/2022 in your cancellation letter immediately invalidates 'non-refundable token' claims.",
  },
  {
    title: "Zero Forfeiture & Full SBI MCLR + 2% Interest When Cancellation Is Due to Builder Delay",
    parties: "Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor",
    citation: "(2022) 15 SCC 480 — Supreme Court of India",
    date: "Judgment Dated 07 April 2022",
    facts:
      "The developer failed to deliver possession of the apartment within the timeline stipulated in the agreement. When the buyer cancelled the booking and sought a full refund, the builder disputed the date from which interest should run.",
    holding:
      "Affirming Newtech Promoters (2021), the Supreme Court held that when an allottee cancels a booking due to the builder's delay or default under Section 18(1) of RERA, the builder cannot deduct a single rupee as cancellation charges and must refund 100% of the paid amount with interest from the exact date each payment instalment was made.",
    amount: "100% Principal Refund + Interest From Each Payment Date",
    takeaway:
      "Never use a polite personal-reason cancellation letter if the builder has already missed the possession date or stalled construction—use Variant 4 (Section 18 Notice) to claim 100% refund plus interest.",
  },
];

const FAQS = [
  {
    question: "How do I write a letter for cancellation of a flat booking before agreement?",
    answer:
      "Your letter for cancellation of flat booking before agreement (Variant 1 or Variant 2 above) must state five essential facts: (1) The exact project name, RERA registration number, and provisional unit/plot number; (2) The token or booking amount paid, with receipt number and bank NEFT/cheque UTR; (3) An explicit statement that no registered Agreement for Sale (Builder-Buyer Agreement) has been executed under Section 13(1) of RERA, 2016; (4) Your reason for withdrawal (such as home loan rejection, medical emergency, or refusal to sign a one-sided draft agreement); and (5) Your bank account details with a firm 15-day deadline for full refund including GST reversal.",
  },
  {
    question: "What are the flat booking cancellation charges as per RERA?",
    answer:
      "Flat booking cancellation charges under RERA depend on why and when you cancel: (1) If you cancel because of the builder's fault (possession delay, stalled construction, layout changes, or false brochure promises under Sections 12 and 18 of RERA), the cancellation charge is ZERO—you get a 100% refund with SBI MCLR + 2% interest; (2) In Maharashtra under MahaRERA Order No. 35/2022, buyer-initiated cancellation attracts 0% deduction within 15 days of allotment, 0.5% within 16–30 days, 1% within 31–60 days, and a strict maximum cap of 2% after 60 days; (3) In other states (UP, Haryana, Karnataka, Delhi NCR), before a registered BBA is signed, builders can deduct only nominal administrative charges unless actual loss is proved under Section 74 of the Contract Act, and even after agreement, the Supreme Court (Godrej Projects v. Anil Karlekar, 2025) caps earnest money forfeiture at a maximum of 10% of basic sale price.",
  },
  {
    question: "Can a builder forfeit my entire token money if the booking form says 'Non-Refundable'?",
    answer:
      "No. Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court rulings in Kailash Nath Associates v. DDA and Pioneer Urban Land v. Govindan Raghavan, a printed 'Non-Refundable Token' clause on a unilateral booking application form is an unenforceable penalty. Because no registered Agreement for Sale under Section 13(1) of RERA exists at the token stage and the builder suffers no financial loss when re-allotting the unit, consumer commissions and RERA benches routinely strike down 100% token forfeiture.",
  },
  {
    question: "Is the builder required to refund the 5% GST paid on the flat booking amount?",
    answer:
      "Yes. When a flat booking is cancelled before execution of a sale deed or handover of possession, no 'supply' of construction service is completed. Under Section 34 of the Central Goods and Services Tax (CGST) Act, 2017 and Ministry of Finance Circular No. 188/20/2022-GST, the builder must issue a GST Credit Note and refund the 5% (or 1% affordable housing) GST collected from you. Even if the builder's time limit to adjust the credit note in their GST return has lapsed, unregistered buyers can claim the tax refund on the GST portal using the builder's cancellation certificate.",
  },
  {
    question: "Should I hand over my original payment receipts to the builder when submitting the cancellation letter?",
    answer:
      "Never surrender your original physical payment receipts or original allotment letter before the refund money actually credits your bank account. Unscrupulous developers often collect original receipts along with a pre-printed 'Cancellation & Full Discharge Form' and then delay the refund for 6 to 12 months. Attach self-attested photocopies with your cancellation letter and write clearly that the originals will be handed over simultaneously against a cleared Demand Draft or confirmed NEFT/RTGS UTR.",
  },
  {
    question: "What if I booked the flat under a subvention scheme or bank home loan and now want to cancel?",
    answer:
      "If a bank or Housing Finance Company (HFC) has already disbursed funds to the builder under a tripartite agreement or subvention scheme, your cancellation letter must be addressed to the builder with a formal copy (CC) marked to the lending bank's branch manager. Demand that the builder refund your own contribution (OCR/down payment) to your bank account and simultaneously remit the entire loan closure payoff directly to the bank to obtain a No Dues Certificate (NOC).",
  },
  {
    question: "Builder flat booking cancel karne ke baad paisa wapas nahi de raha toh kya kare?",
    answer:
      "Agar aapne flat ya plot booking cancel karne ka written letter bhej diya hai lekin builder 15 se 45 din ke andar refund nahi de raha ya 'non-refundable token' bolkar paisa kaat raha hai, toh LegalRecovery.in ke madhyam se builder ke Managing Director ko 15-day Statutory Advocate Legal Notice (Registered Speed Post aur Email se) bhejein. Notice ke baad bhi payment na aane par aap apne state ke RERA portal par Section 31/18 complaint ya e-Jagriti consumer court case file karke 100% refund aur byaj (interest) le sakte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cancel a Flat Booking in Writing: Letter Formats for Buyers",
  description:
    "Letter formats to cancel a flat or plot booking before or after agreement, request a refund and limit forfeiture.",
  datePublished: "2026-11-04T12:50:00+05:30",
  dateModified: "2026-11-04T12:50:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/flat-booking-cancellation-letter`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Flat and Plot Booking Cancellation Letter Format Under RERA",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Flat & Plot Booking Cancellation Letter Formats (Before & After Agreement)",
  description:
    "Four legally vetted flat and plot booking cancellation letter templates for Indian homebuyers (Polite Pre-Agreement Request, Firm Anti-Forfeiture RERA Demand, Final 15-Day Pre-Litigation Ultimatum, and Section 18 Builder Delay Withdrawal) with Word (.doc) export.",
  url: `${SITE_URL}/templates/flat-booking-cancellation-letter`,
  fileFormat: ["text/plain", "application/msword", "application/pdf"],
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Homebuyers and Plot Allottees in India",
    },
  },
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
      name: "Builder Booking Cancellation Refund",
      item: `${SITE_URL}/builder-booking-cancellation-refund-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Flat Booking Cancellation Letter Format",
      item: `${SITE_URL}/templates/flat-booking-cancellation-letter`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function FlatBookingCancellationLetterPage() {
  const breadcrumbItems = [
    {
      label: "Builder Booking Refund",
      href: "/builder-booking-cancellation-refund-legal-notice",
    },
    {
      label: "Flat Cancellation Letter Format",
      href: "/templates/flat-booking-cancellation-letter",
    },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching IRCTC & Company Directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RERA Sections 12, 13 &amp; 18 • Contract Act §74</span>
              <span className="text-red-500">•</span>
              <span>Free Word (.doc) &amp; PDF Templates</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Cancel a Flat Booking in Writing: Letter Formats for Buyers
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Flat &amp; Plot Booking Cancellation &amp; Forfeiture Limits)
              </p>
              <p>
                To cancel a flat or plot booking and stop illegal forfeiture, serve a dated written cancellation letter via Registered Post (RPAD) and email. Under Section 13(1) of RERA, 2016 and Section 74 of the Indian Contract Act, builders cannot enforce penal forfeiture on unilateral booking forms before a registered Agreement for Sale, and must refund your advance within 45 days.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">0%–2%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  MahaRERA Allotment Deduction Cap
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">0% Cut</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  On Builder Delay / Loan Reject
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Max 10%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  SC Earnest Money Cap (2025)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  RERA Statutory Refund Window
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <FlatCancellationTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype P2 Core — 3 Complete Tone Variants + Section 18 Builder Delay Variant */}
              <section
                id="heading-letter-formats"
                aria-labelledby="heading-letter-formats-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-letter-formats-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    3 Flat Booking Cancellation Formats &amp; Delay Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Never cancel a property booking through a verbal phone call to the site sales manager. Builders routinely exploit oral requests by issuing backdated demand notices to manufacture a &quot;buyer default&quot;. Below are three complete, original <strong>flat booking cancellation letter</strong> formats—calibrated from a polite pre-agreement withdrawal to a final pre-litigation notice—plus a fourth format for builder possession delay. For full legal remedies if the builder refuses to pay, read our pillar guide on{" "}
                    <Link
                      href="/builder-booking-cancellation-refund-legal-notice"
                      className="text-blue-700 underline font-semibold"
                    >
                      recovering a flat booking cancellation refund via legal notice
                    </Link>
                    .
                  </p>
                </div>

                <FlatCancellationLettersWorkspace />
              </section>

              {/* Section 2: Archetype P2 Core — Choosing the Right Tone Table + Subject-Line Bank */}
              <section
                id="heading-tone-matrix"
                aria-labelledby="heading-tone-matrix-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-tone-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Choosing the Right Cancellation Variant &amp; Tone
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The wording of your first written cancellation notice determines how much money the builder can legally deduct. Match your booking stage and reason for exit to the exact template variant below:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Flat Booking Cancellation Letter Tone Selection Matrix by Buyer Scenario
                    </caption>
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Buyer Situation &amp; Stage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recommended Format</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Key Statutory Shield Cited</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Cure Deadline &amp; Delivery</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cancelling within 7–30 days of paying token/booking advance; no BBA signed; bank loan rejected or personal emergency
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">
                          Variant 1: Polite Pre-Agreement Letter
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          No registered Agreement under s.13(1) RERA + CGST s.34 GST credit note
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          15 Days • Official CRM Email + RPAD
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Builder claims token is &quot;non-refundable&quot;, threatens 10%–20% deduction, or shares a one-sided draft BBA
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">
                          Variant 2: Firm Anti-Forfeiture Demand
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Contract Act s.74 (Kailash Nath) + SC Godrej Projects (2025) + MahaRERA 0%–2% cap
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          15 Days • India Post RPAD + MD Email
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          30–45 days elapsed after cancellation; builder stalls refund or demands original receipts &amp; indemnity bond upfront
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-800 font-extrabold">
                          Variant 3: Final Pre-Litigation Notice
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          CPA s.2(47) coercive practice ban + Contract Act s.65 restitution + RERA s.31
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          15 Days • RPAD + Email + WhatsApp PDF
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Builder delayed possession past RERA date, stalled construction, stopped paying subvention Pre-EMIs, or changed layout
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          Variant 4: Sec 18 Builder Default Notice
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          RERA s.12 &amp; s.18(1) unconditional 100% refund + SBI MCLR+2% interest (Newtech SC)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          15 Days • RPAD + RERA Portal Escalation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Subject-Line Options Bank (Archetype P2 Requirement) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    High-Impact Subject Lines for Flat Cancellation Emails &amp; Registered Letters
                  </h3>
                  <p className="text-xs text-slate-600">
                    Always put your Unit Number, Project Name, and RERA Registration Number in the subject line so the builder cannot claim the email was lost in general inquiries:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-800 font-mono bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <li>
                      <strong className="text-blue-700 font-sans">[Before Agreement / Polite]:</strong>{" "}
                      Cancellation of Provisional Booking Before Agreement &amp; Refund Request — Unit [FLAT NO.], [PROJECT NAME] (Booking Ref: [ID])
                    </li>
                    <li>
                      <strong className="text-red-700 font-sans">[Challenging Forfeiture]:</strong>{" "}
                      WITHOUT PREJUDICE: Objection to Booking Forfeiture under RERA Sec 13(1) &amp; Sec 74 Contract Act — Demand for Refund of ₹[AMOUNT] — Unit [FLAT NO.]
                    </li>
                    <li>
                      <strong className="text-amber-800 font-sans">[Home Loan Rejection]:</strong>{" "}
                      Booking Withdrawal Due to Bank Home Loan Non-Sanction &amp; Request for 100% Token Refund — Unit [FLAT NO.], [PROJECT NAME]
                    </li>
                    <li>
                      <strong className="text-emerald-800 font-sans">[Builder Delay / Sec 18]:</strong>{" "}
                      STATUTORY NOTICE UNDER SECTION 18(1) RERA: Withdrawal from Project &quot;[PROJECT NAME]&quot; ([RERA NO.]) &amp; Demand for 100% Refund with MCLR+2% Interest
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Flat Booking Cancellation Charges as per RERA (State & Stage Table) */}
              <section
                id="heading-rera-charges"
                aria-labelledby="heading-rera-charges-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-rera-charges-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Cancellation Charges as per RERA: Before vs After Deed
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When homebuyers search for <strong>flat booking cancellation charges as per RERA</strong>, they often encounter builders quoting 10% to 20% of the total apartment value—which can wipe out 100% of a buyer&apos;s initial booking advance. In law, what a builder can deduct depends strictly on whether a registered Agreement for Sale exists, which state the project is in, and who caused the cancellation:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Flat Booking Cancellation Charges as per RERA and Supreme Court Precedents
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-4">Cancellation Scenario / Jurisdiction</th>
                        <th scope="col" className="py-3 px-4">Permissible Deduction Cap</th>
                        <th scope="col" className="py-3 px-4">GST &amp; Interest Rule</th>
                        <th scope="col" className="py-3 px-4">Governing Legal Authority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Builder Default: Delayed Possession, Stalled Site, False Brochure, or Subvention Pre-EMI Default
                        </th>
                        <td className="py-3 px-4 text-emerald-700 font-extrabold">
                          ₹0 (0% Deduction)
                        </td>
                        <td className="py-3 px-4 text-xs">
                          100% Refund + SBI Highest MCLR + 2% p.a. interest from each payment date
                        </td>
                        <td className="py-3 px-4 text-xs font-medium">
                          RERA Sections 12 &amp; 18(1); Newtech Promoters (2021) SC
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Maharashtra (MahaRERA): Buyer Cancels Within 15 Days of Allotment Letter
                        </th>
                        <td className="py-3 px-4 text-emerald-700 font-extrabold">
                          ₹0 (0% Deduction)
                        </td>
                        <td className="py-3 px-4 text-xs">
                          100% Refund within 45 days; MCLR+2% interest if delayed past 45 days
                        </td>
                        <td className="py-3 px-4 text-xs font-medium">
                          MahaRERA Order No. 35/2022 (Clause 9 Model Allotment)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Maharashtra (MahaRERA): Buyer Cancels After 15 Days (Pre-BBA)
                        </th>
                        <td className="py-3 px-4 text-blue-700 font-bold">
                          0.5% (16–30d) • 1% (31–60d) • Max 2% (&gt;60d) of Total Cost
                        </td>
                        <td className="py-3 px-4 text-xs">
                          Full 5% GST must be refunded via Section 34 Credit Note
                        </td>
                        <td className="py-3 px-4 text-xs font-medium">
                          MahaRERA Order No. 35/2022
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          All Other States (Pre-Agreement): Only Token / Booking Form Signed; Draft BBA One-Sided
                        </th>
                        <td className="py-3 px-4 text-blue-700 font-bold">
                          ₹0 to Nominal Admin Charge (₹10k–₹25k) unless actual loss proved
                        </td>
                        <td className="py-3 px-4 text-xs">
                          100% GST refundable; penal forfeiture void without registered BBA
                        </td>
                        <td className="py-3 px-4 text-xs font-medium">
                          RERA s.13(1); Contract Act s.74; Pioneer Urban Land (2019) SC
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          After Registered BBA: Buyer Cancels Purely for Personal Reasons (No Builder Fault)
                        </th>
                        <td className="py-3 px-4 text-amber-800 font-bold">
                          Capped at Earnest Money (Max 10% of Basic Sale Price; 20% clauses void)
                        </td>
                        <td className="py-3 px-4 text-xs">
                          Brokerage, taxes &amp; unproved penalties cannot be added above earnest cap
                        </td>
                        <td className="py-3 px-4 text-xs font-medium">
                          Godrej Projects v. Anil Karlekar (2025) SC; HRERA / UP RERA Rules
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Calculating your interest claim:</strong> If you are cancelling due to builder delay under Variant 4, or if the builder has held your refund past the 45-day statutory window after cancellation, compute the exact interest owed to you using our{" "}
                  <Link
                    href="/tools/rera-refund-interest-calculator"
                    className="text-blue-700 underline font-semibold"
                  >
                    RERA refund interest calculator (SBI MCLR + 2%)
                  </Link>
                  . If you booked under a &quot;No EMI Till Possession&quot; plan where the builder defaulted on bank instalments, also see our guide on{" "}
                  <Link
                    href="/subvention-scheme-pre-emi-builder-default"
                    className="text-blue-700 underline font-semibold"
                  >
                    subvention scheme Pre-EMI builder default remedies
                  </Link>
                  , or if you invested in a commercial/residential buyback plan where monthly payouts stopped, read{" "}
                  <Link
                    href="/assured-return-builder-default-legal-notice"
                    className="text-blue-700 underline font-semibold"
                  >
                    builder assured-return default legal notice &amp; recovery options
                  </Link>
                  .
                </p>
              </section>

              {/* Section 4: Archetype P2 Sending Tips & Legal Validity */}
              <section
                id="heading-sending-rules"
                aria-labelledby="heading-sending-rules-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-sending-rules-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Serving Cancellation Letter via RPAD &amp; Section 63 BSA
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Why do so many homebuyers lose 1% to 10% in extra forfeiture? Because they hand an unacknowledged paper letter to a site relationship manager, and the builder later claims in RERA that the buyer never cancelled—while issuing backdated stage-payment demand notices with 18% delay interest. Protect your cancellation date using this 3-part service rule:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-[#DC2626]">
                      1. India Post RPAD / Speed Post
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Freeze the Cancellation Date (Sec 27)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Print two copies of your chosen letter, sign both (including the co-applicant&apos;s signature), and dispatch one via India Post Registered Post with Acknowledgment Due (RPAD) to the promoter&apos;s registered address listed on the State RERA portal. Under Section 27 of the General Clauses Act, 1897, the postal receipt locks in your statutory cancellation date—especially critical for MahaRERA&apos;s 15-day 0%-deduction window.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      2. RERA-Registered Email ID
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Bypass Site Sales &amp; CRM Stalling
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Look up the project on your State RERA website and extract the promoter&apos;s official compliance email ID. Email the signed PDF cancellation letter plus copies of your payment receipts to the CRM desk, copying the promoter&apos;s official RERA email and corporate directors. If a home loan was sanctioned, mark a copy (CC) to your bank&apos;s home-loan branch manager.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                      3. Never Surrender Originals Early
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Refuse Pre-Payment Waiver Traps
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Do not hand over your original payment receipts or sign the builder&apos;s pre-printed &quot;No-Objection / Full &amp; Final Settlement Discharge Voucher&quot; accepting a 10%–20% cut before the refund is in your bank. If forced, write <em>&quot;Accepted under protest and without prejudice to balance refund claim&quot;</em> above your signature.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Visual Refund Path Flowchart (Hand-Authored Inline SVG) */}
              <section
                id="heading-refund-flow"
                aria-labelledby="heading-refund-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-refund-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Visual Refund Path: Cancellation Letter to RERA Order
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  How your written cancellation letter initiates the 45-day statutory countdown and escalates to RERA or Consumer Court if the builder defaults:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Stage 1 • Day 1
                    </span>
                    <h3 className="font-bold text-sm">Serve Written Cancellation Letter</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Dispatch Variant 1/2/4 via India Post RPAD + RERA-registered email; keep original receipts.
                    </p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                      Stage 2 • Day 1 to 15
                    </span>
                    <h3 className="font-bold text-sm">Challenge Illegal Forfeiture / GST Cut</h3>
                    <p className="text-xs text-amber-900 mt-1">
                      If CRM quotes 10%–20% cut, serve Variant 2 citing RERA s.13(1), Contract Act s.74 &amp; SC rulings.
                    </p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Stage 3 • Day 15 to 45
                    </span>
                    <h3 className="font-bold text-sm">Statutory 45-Day RERA Refund Window</h3>
                    <p className="text-xs text-slate-700 mt-1">
                      Promoter must remit refund + issue Section 34 GST Credit Note within 45 days.
                    </p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                      Stage 4 • Day 46
                    </span>
                    <h3 className="font-bold text-sm">15-Day Advocate Statutory Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">
                      Serve formal legal notice on Builder MD demanding principal + SBI MCLR+2% interest.
                    </p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      Stage 5 • Post-Notice
                    </span>
                    <h3 className="font-bold text-sm">Bank Refund or RERA Form M / e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">
                      File online RERA Section 31 complaint and enforce via Section 40(1) Recovery Certificate.
                    </p>
                  </div>
                </div>

                {/* Desktop & Tablet SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Flat Booking Refund Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 255"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Flat Booking Cancellation Letter to RERA Refund Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="flatDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="flatRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="flatGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Box 1 */}
                    <rect x="10" y="20" width="144" height="92" rx="10" fill="url(#flatDark)" />
                    <text x="82" y="44" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">DAY 1</text>
                    <text x="82" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Written Letter</text>
                    <text x="82" y="81" fill="#E2E8F0" fontSize="10" textAnchor="middle">Send RPAD + Email</text>
                    <text x="82" y="97" fill="#CBD5E1" fontSize="9" textAnchor="middle">Keep Original Receipts</text>

                    <path d="M 154 66 L 180 66" stroke="#64748B" strokeWidth="2" />

                    {/* Box 2 */}
                    <rect x="180" y="20" width="144" height="92" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="252" y="44" fill="#B45309" fontWeight="bold" textAnchor="middle">DAY 7–15</text>
                    <text x="252" y="64" fill="#92400E" fontWeight="bold" textAnchor="middle">Block Forfeiture</text>
                    <text x="252" y="81" fill="#78350F" fontSize="10" textAnchor="middle">Cite RERA s.13(1) &amp; s.74</text>
                    <text x="252" y="97" fill="#78350F" fontSize="9" textAnchor="middle">Demand GST Credit Note</text>

                    <path d="M 324 66 L 350 66" stroke="#64748B" strokeWidth="2" />

                    {/* Box 3 */}
                    <rect x="350" y="20" width="144" height="92" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="422" y="44" fill="#404447" fontWeight="bold" textAnchor="middle">DAY 15–45</text>
                    <text x="422" y="64" fill="#0F172A" fontWeight="bold" textAnchor="middle">45-Day Window</text>
                    <text x="422" y="81" fill="#334155" fontSize="10" textAnchor="middle">Statutory RERA Refund</text>
                    <text x="422" y="97" fill="#475569" fontSize="9" textAnchor="middle">Sign Only Under Protest</text>

                    <path d="M 494 66 L 520 66" stroke="#64748B" strokeWidth="2" />

                    {/* Box 4 */}
                    <rect x="520" y="20" width="144" height="92" rx="10" fill="url(#flatRed)" />
                    <text x="592" y="44" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">DAY 46</text>
                    <text x="592" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="592" y="81" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Legal Demand</text>
                    <text x="592" y="97" fill="#FECACA" fontSize="9" textAnchor="middle">Claim MCLR+2% Interest</text>

                    <path d="M 664 66 L 690 66" stroke="#64748B" strokeWidth="2" />

                    {/* Box 5 */}
                    <rect x="690" y="20" width="140" height="92" rx="10" fill="url(#flatGreen)" />
                    <text x="760" y="44" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">EXECUTION</text>
                    <text x="760" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">RERA / e-Jagriti</text>
                    <text x="760" y="81" fill="#D1FAE5" fontSize="10" textAnchor="middle">Sec 31 / 18 Refund Order</text>
                    <text x="760" y="97" fill="#A7F3D0" fontSize="9" textAnchor="middle">Sec 40 Collector RC</text>

                    {/* Bottom Summary Bar */}
                    <rect x="10" y="138" width="820" height="98" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="162" fill="#0F172A" fontWeight="bold" fontSize="11">
                      KEY STATUTORY BENCHMARKS FOR FLAT &amp; PLOT BOOKING CANCELLATIONS:
                    </text>
                    <text x="25" y="184" fill="#475569" fontSize="10">
                      • Pre-Agreement Advance Limit: Promoter cannot take &gt;10% without a registered Agreement for Sale (Section 13(1) RERA, 2016)
                    </text>
                    <text x="25" y="202" fill="#475569" fontSize="10">
                      • Forfeiture Ceilings: 0% on builder default (s.18); 0%–2% in Maharashtra (MahaRERA Order 35/2022); max 10% earnest money post-BBA (SC 2025)
                    </text>
                    <text x="25" y="220" fill="#475569" fontSize="10">
                      • Refund Timeline: 45 days from written cancellation under State RERA Rules; delayed refunds attract SBI Highest MCLR + 2% p.a. interest
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 6: Landmark Supreme Court & RERA Precedents */}
              <section
                id="heading-case-precedents"
                aria-labelledby="heading-case-precedents-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Supreme Court &amp; RERA Rulings Limiting Forfeiture
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Rulings
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Precedent #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties / Authority: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial / Regulatory Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Relief / Statutory Rule Established
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              How to Use in Your Letter
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Pre-populated in Variants 2, 3 &amp; 4 above
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Drafting Takeaway:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹4,85,000 Booking Money via Variant 2
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">
                      Illustrative Pre-Litigation Scenario • Noida Sector 150 / Pune Hinjewadi
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs">
                      Resolved in 18 Days Without Court Filing
                    </span>
                  </div>

                  <p>
                    <strong>The Situation:</strong> On 10 August 2026, homebuyer <em>Siddharth Nair</em> booked a 2BHK apartment (quoted total price: ₹85,00,000) by paying a booking advance of <strong>₹5,00,000</strong> (₹4,76,190 base advance + ₹23,810 @ 5% GST) via NEFT and signing a 4-page &quot;Provisional Booking Application Form&quot;. Twenty-two days later, his bank declined the full home-loan sanction due to a change in his employer&apos;s overseas deputation policy, and the builder simultaneously emailed a one-sided draft BBA pushing possession back by 18 months.
                  </p>

                  <p>
                    <strong>The Builder&apos;s Rejection:</strong> When Siddharth emailed CRM requesting cancellation, the sales head replied that under Clause 14 of the Booking Form, <em>&quot;10% of the total apartment cost (₹8,50,000) constitutes earnest money, so your entire ₹5,00,000 booking amount stands 100% forfeited.&quot;</em>
                  </p>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs space-y-1.5">
                    <p className="font-sans font-bold text-slate-900">How Variant 2 + Advocate Notice Reversed the Forfeiture:</p>
                    <p>• <strong>Total Booking Advance Paid:</strong> ₹5,00,000 (Base: ₹4,76,190 + 5% GST: ₹23,810)</p>
                    <p>• <strong>Builder&apos;s Illegal Claim:</strong> ₹5,00,000 Forfeited (citing 10% of ₹85L on an unregistered booking form)</p>
                    <p>• <strong>Legal Counter in Variant 2 Letter:</strong> No registered BBA under Section 13(1) RERA + One-sided draft BBA (Pioneer Urban Land SC) + Zero proved loss under Section 74 Contract Act + Section 34 CGST Credit Note</p>
                    <p>• <strong>Nominal Administrative Fee Agreed (Without Prejudice):</strong> ₹15,000</p>
                    <p className="text-emerald-700 font-bold">• <strong>Net Refund Credited via RTGS on Day 18:</strong> ₹4,85,000 (97% Recovery including ₹23,810 GST reversal)</p>
                  </div>
                </div>
              </section>

              {/* Section 8: Enclosure Checklist */}
              <section
                id="heading-enclosure-checklist"
                aria-labelledby="heading-enclosure-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-enclosure-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Enclosures: 6 Documents for Flat Cancellation Letter
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Attach self-attested copies (never originals) of these six records when dispatching your cancellation letter by RPAD and email so your dossier is immediately ready for{" "}
                  <Link
                    href="/rera-complaint-online-state-wise"
                    className="text-blue-700 underline font-semibold"
                  >
                    filing an online RERA complaint in your state
                  </Link>{" "}
                  if the builder ignores your deadline:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 font-bold block">Photocopy of Booking Receipts &amp; Bank UTR Statement:</strong>
                      Highlight every NEFT/RTGS/UPI UTR number or cleared cheque entry in your bank statement proving exact payment dates and GST components.
                    </div>
                  </li>
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 font-bold block">Copy of Booking Application Form / Allotment Letter:</strong>
                      Shows the provisional unit number, quoted price sheet, and absence of a bilateral registered Agreement for Sale under Section 13(1) RERA.
                    </div>
                  </li>
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 font-bold block">Cancelled Cheque Copy of Source Bank Account:</strong>
                      Eliminates any administrative excuse by the builder&apos;s finance desk regarding your IFSC code or co-applicant account name.
                    </div>
                  </li>
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-slate-900 font-bold block">Home Loan Rejection / Non-Sanction Letter (If Applicable):</strong>
                      If cancelling due to bank loan rejection (either on personal eligibility or builder project title/APF issues), attach the bank&apos;s rejection email.
                    </div>
                  </li>
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-slate-900 font-bold block">Sales Brochure / WhatsApp Promises (For Sec 12/18 Claims):</strong>
                      If cancelling due to false brochure promises, possession date changes, or layout deviations, attach screenshots preserved under Section 63 BSA, 2023.
                    </div>
                  </li>
                  <li className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-slate-900 font-bold block">India Post RPAD Receipt &amp; Tracking Sheet:</strong>
                      Staple the original postal booking slip to your file copy to prove the exact date your written cancellation was served on the promoter.
                    </div>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 italic">
                  Note: If your cancellation involves a secondary-market resale flat or individual plot seller (rather than a RERA builder), read our guide on{" "}
                  <Link
                    href="/token-money-refund-property-deal"
                    className="text-blue-700 underline font-medium"
                  >
                    token and bayana money refund rules when a property deal fails
                  </Link>
                  . And if you already hold a RERA refund order that the builder is ignoring, see{" "}
                  <Link
                    href="/rera-refund-order-not-paid-recovery-certificate"
                    className="text-blue-700 underline font-medium"
                  >
                    how to enforce an unpaid RERA order via a Section 40 Recovery Certificate
                  </Link>
                  .
                </p>
              </section>

              {/* Section 9: Honest Scope */}
              <section
                id="heading-honest-scope"
                aria-labelledby="heading-honest-scope-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Scope &amp; Boundaries: What LegalRecovery Can and Cannot Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-emerald-900">
                      ✓ What We Do
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950 leading-relaxed list-disc pl-4">
                      <li>
                        Draft and serve a formal 15-day <strong>Advocate Statutory Legal Notice</strong> on the builder&apos;s Managing Director, Directors, and RERA compliance officer via Registered Speed Post (RPAD) and electronic mail (see our transparent{" "}
                        <Link
                          href="/legal-notice-charges"
                          className="text-emerald-900 underline font-bold hover:text-[#DC2626]"
                        >
                          legal notice charges and drafting fee schedule
                        </Link>
                        ).
                      </li>
                      <li>
                        Challenge illegal 10%–20% forfeiture demands on unregistered booking applications under Section 13(1) RERA, Section 74 of the Contract Act, and <em>Godrej Projects v. Anil Karlekar</em> (2025).
                      </li>
                      <li>
                        Quantify your 100% refund + SBI MCLR + 2% statutory interest schedule for builder-delay withdrawals under Section 18(1) RERA and structure your pre-litigation dossier for State RERA (Form M) or e-Jagriti filing.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-2">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-amber-900">
                      ✕ What We Cannot Do
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950 leading-relaxed list-disc pl-4">
                      <li>
                        If you signed a registered Agreement for Sale (BBA) and cancel purely for personal reasons when the builder is constructing on schedule without fault, we cannot prevent the builder from deducting reasonable earnest money within the statutory cap (0%–2% in Maharashtra; up to 10% earnest cap in other states).
                      </li>
                      <li>
                        We cannot recover unaccounted cash (&quot;black money&quot;) paid to a builder or broker without banking trails, receipts, or admissible electronic acknowledgment.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-faqs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  FAQs: Flat Booking Cancellation &amp; RERA Refund Rules
                </h2>

                <div className="space-y-3.5">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-2xs open:border-red-300 transition-all"
                      open={index === 0}
                    >
                      <summary className="flex items-start justify-between gap-3 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 group-open:text-[#DC2626]">
                        <span>{faq.question}</span>
                        <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 group-open:bg-red-50 text-slate-600 group-open:text-[#DC2626] flex items-center justify-center text-xs font-extrabold transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Supreme Court Judgments &amp; State RERA References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
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
                      <span className="text-slate-400 ml-1.5">(Accessed: November 2026)</span>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Last updated: 4 November 2026 • Statutory verification status: All RERA sections, Supreme Court earnest-money caps, and MahaRERA Order No. 35/2022 forfeiture ceilings verified against primary sources as of November 2026.
                </p>
              </section>

              {/* CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="scroll-mt-28 pt-2 w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve an Advocate RERA Refund Legal Notice to the Builder
                </h2>
                <FlatCancellationNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster (matching IRCTC & Company Directors layout) */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Builder Refund, RERA &amp; Property Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Builder Booking Cancellation Refund Hub →
                  </Link>
                  <Link
                    href="/tools/rera-refund-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RERA Refund Interest Calculator (MCLR+2%) →
                  </Link>
                  <Link
                    href="/subvention-scheme-pre-emi-builder-default"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Subvention Scheme Pre-EMI Default Guide →
                  </Link>
                  <Link
                    href="/assured-return-builder-default-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Assured Return Builder Default Legal Notice →
                  </Link>
                  <Link
                    href="/plot-booking-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Plot Booking Amount Refund Rules →
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

        {/* Related Recovery Guides Cluster */}
        <RelatedRecoveryGuides currentPath="/templates/flat-booking-cancellation-letter" cluster="property" />
      </div>
    </>
  );
}
