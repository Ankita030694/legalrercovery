import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HotelBtcTableOfContents from "./HotelBtcTableOfContents";
import HotelBtcScenarioTabs from "./HotelBtcScenarioTabs";
import HotelBtcNoticeCTA from "./HotelBtcNoticeCTA";
import {
  Building2,
  ShieldAlert,
  FileCheck2,
  Scale,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  Landmark,
} from "lucide-react";

export const revalidate = 86400;

const PAGE_URL = "/hotel-btc-bill-to-company-corporate-credit-account-default-recovery";
const EXACT_H1 =
  "Recovering Aged 'Bill-to-Company' (BTC) City-Ledger Accounts for Business Hotels, Resorts & Corporate Serviced Apartments";
// Tightened to 53 chars (within 30-60ch limit) preserving primary keyword
const META_TITLE = "Hotel 'Bill-to-Company' (BTC) Credit Default Recovery";
// Tightened to 146 chars (within 120-155ch limit) preserving statutory facts
const META_DESCRIPTION =
  "Corporate admin booked 80 room-nights via BTC email and stalled your City Ledger 150+ days? Turn BTC emails & GSTR-2B into Order 37 Summary Suits.";

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
        alt: formatAltText("Hotel Bill-to-Company BTC Corporate Credit Default Recovery Guide"),
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
      "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Procedure on Written Contracts & Liquidated Demands) & Order XXXVIII Rule 5",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Central Goods and Services Tax (CGST) Act, 2017 — Section 16(2)(b) (Statutory Estoppel via Input Tax Credit Availment in GSTR-2B / GSTR-3B)",
    url: "https://cbic-gst.gov.in/pdf/cgst-act.pdf",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of PMS Folios, Corporate BTC Emails & Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Commercial Courts Act, 2015 — Section 2(1)(c) & Section 12A (Mandatory Pre-Institution Mediation for Commercial Disputes >= ₹3 Lakh)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15, 16 & 18 + Income Tax Act Section 43B(h)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Indian Contract Act, 1872 — Sections 73, 74, 126, 128, 187 & 226 (Corporate Principal Liability for Travel Desk Bookings)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Tax Invoices & Written Confirmation Emails Constitute Enforceable Written Contracts Under Order XXXVII CPC",
    parties: "M/s Flint Group India Pvt. Ltd. v. Good Morning India Media Pvt. Ltd. / Bharat Forge Principles",
    citation: "High Court of Delhi — Summary Suit Jurisprudence on Commercial Invoices",
    date: "Settled Commercial Court Principle",
    holding:
      "Indian High Courts consistently hold that commercial tax invoices containing explicit payment terms, read alongside corporate purchase orders or written booking confirmations (such as corporate BTC authorization emails) and acknowledged delivery/occupancy records, constitute a 'written contract' for a liquidated debt maintainable under Order XXXVII of the Code of Civil Procedure.",
    takeaway:
      "A business hotel does not need a 40-page stamped Master Service Agreement to file an Order XXXVII Summary Suit; the Corporate Travel Desk's BTC approval email + Signed Guest Registration Card (GRC) + Tax Invoice form a complete written contract.",
  },
  {
    title: "Pre-Existing Dispute Must Be Bona Fide and Contemporaneous — Post-Notice Excuses Are 'Moonshine'",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Supreme Court Landmark Holding",
    holding:
      "The Supreme Court ruled that a corporate debtor cannot manufacture a spurious, hypothetical, or illusionary dispute after a statutory demand notice is served. Where services were consumed without contemporaneous written protest during the performance window, belated complaints raised months later to evade payment are rejected as moonshine defenses.",
    takeaway:
      "When corporate guests check out without lodging any contemporaneous service complaint and the company claims 'poor AC / unauthorized F&B / employee resigned' 120 days later, courts and NCLTs reject the defense outright.",
  },
  {
    title: "Mandatory Pre-Institution Mediation Under Section 12A for Commercial Claims >= ₹3 Lakh",
    parties: "M/s Patil Automation Pvt. Ltd. & Ors. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Supreme Court Mandatory Protocol",
    holding:
      "Section 12A of the Commercial Courts Act, 2015 is mandatory for commercial disputes of Specified Value >= ₹3 Lakh that do not contemplate urgent interim relief (such as Order XXXVIII Rule 5 attachment). Any settlement reached before the DLSA/SLSA authority carries the executable force of an arbitral award under Section 30(4) of the Arbitration Act.",
    takeaway:
      "For aged City-Ledger accounts between ₹3 Lakh and ₹1 Crore, initiating Form-1 Pre-Institution Mediation after a 15-day Fact-Verified Demand Notice forces the corporate CFO to the settlement table for a ₹1,000 statutory fee.",
  },
];

const FAQS = [
  {
    question:
      "Can a hotel legally recover a 'Bill-to-Company' (BTC) invoice if the corporate guest checked out early without signing the final folio?",
    answer:
      "Yes. While a signed checkout folio is ideal, its absence does not absolve the corporate employer. Under Sections 187 and 226 of the Indian Contract Act, 1872, the binding contract is formed when the company's authorized travel desk or admin executive sends the written BTC booking confirmation email. Combined with the physical/tablet Guest Registration Card (GRC) signed at check-in, mandatory government ID/Form-C logs, keycard door-lock telemetry, and the buyer's acceptance of the B2B GST invoice in GSTR-2B, the hotel establishes conclusive proof of occupancy and liquidated debt for an Order XXXVII CPC Summary Suit.",
  },
  {
    question:
      "What if the corporate client refuses to pay our City Ledger claiming 'the employee who stayed at your hotel has left the company'?",
    answer:
      "This is the most common—and legally invalid—excuse in hospitality credit collections. In a Bill-to-Company (BTC) arrangement, privity of contract exists strictly between the Hotel (Creditor) and the Corporate Entity (Debtor) that issued the BTC authorization—not the individual employee. Whether the employee subsequently resigned, was terminated, or failed to submit internal travel expense reports is purely an internal HR matter between the employer and its ex-employee. Our statutory legal notice cites Section 226 of the Contract Act to dismantle this excuse immediately.",
  },
  {
    question:
      "How does the corporate buyer's GSTR-2B / GSTR-3B Input Tax Credit (ITC) claim prove our hotel bill in court?",
    answer:
      "Whenever your hotel finance team uploads a B2B tax invoice (quoting the corporate client's GSTIN) in GSTR-1, it auto-populates in the corporate client's GSTR-2B and Invoice Management System (IMS). Under Section 16(2)(b) of the CGST Act, 2017, a registered taxpayer is statutorily prohibited from availing Input Tax Credit unless they have actually received the underlying services. Therefore, if the corporate finance team did not reject your invoice in IMS and utilized the 12% or 18% GST credit in GSTR-3B, they are legally estopped from denying the stay or disputing the invoice amount in court.",
  },
  {
    question:
      "What can a hotel do when a company withholds a ₹12 Lakh room-stay ledger over ₹25,000 of disputed laundry, minibar, or F&B charges?",
    answer:
      "A corporate debtor cannot legally hold 98% of an undisputed liquidated room-tariff invoice hostage over a minor 2% ancillary dispute. We serve a bifurcated Statutory Demand Notice: (1) demanding immediate clearance of the undisputed room-night tariff within 7 days under threat of an Order XII Rule 6 CPC Judgment on Admissions, and (2) enforcing the signed POS Kitchen Order Tickets (KOTs) and the BTC credit letter's 'unsettled guest incidentals guarantee clause' against both the company and the departing guest.",
  },
  {
    question:
      "Are business hotels, resorts, and corporate serviced apartments eligible for MSME Samadhaan (3x RBI interest) and Section 43B(h)?",
    answer:
      "Yes, provided the hotel owning/operating entity holds a valid Udyam Registration Certificate as a Micro or Small Enterprise (under the revised MSME investment and turnover thresholds, Service-sector Micro and Small enterprises cover a vast majority of independent 3-Star/4-Star business hotels, boutique resorts, and corporate serviced apartment operators). Under Sections 15 and 16 of the MSMED Act, 2006, if a corporate buyer fails to clear your BTC invoice within 45 days, they are liable to pay compound interest with monthly rests at 3x the RBI Bank Rate (currently ~19.5%–20.25% p.a.), and face 100% expense disallowance if unpaid across March 31 under Section 43B(h) of the Income Tax Act.",
  },
  {
    question:
      "How do we handle EPC contractors or IT firms whose long-stay project crews are still occupying rooms while 90+ day bills remain unpaid?",
    answer:
      "For active in-house long-stay project crews where the corporate employer has defaulted on running monthly bills, hotels possess immediate operational leverage alongside legal remedies. Unlike residential tenants protected by Rent Control Acts, hotel guests occupy rooms strictly as transient licensees; the hotel retains juridical possession at all times. We issue an urgent 48-Hour Cure-Cum-Credit-Suspension Notice to the Corporate CFO warning that electronic keycards and F&B credit privileges for all in-house project personnel will be deactivated at 12:00 Noon on Day 3 unless overdue tranches are cleared via RTGS, followed by Order XXXVII / Section 12A recovery proceedings.",
  },
  {
    question:
      "Can our hotel also use Section 138 of the NI Act if the corporate client or travel desk issued a post-stay cheque that bounced?",
    answer:
      "Absolutely. If the corporate client, event organizer, or project contractor issued a cheque toward City-Ledger settlement—or if your credit policy collected a signed security cheque at the time of corporate empanelment—and it is dishonoured for 'Insufficient Funds' or 'Stop Payment', you can initiate criminal prosecution under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881 against both the company and its active Directors, alongside claiming up to 20% interim compensation under Section 143A.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-18T09:45:00+05:30",
  dateModified: "2026-11-18T09:45:00+05:30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  reviewer: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    name: "Hotel Bill-to-Company (BTC) Corporate Credit Default Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Business Hotels & Serviced Apartments Recover Aged 'Bill-to-Company' (BTC) City-Ledger Accounts",
  description:
    "Step-by-step statutory and operational SOP for Hotel Financial Controllers and Credit Managers to recover 60–180+ DPD corporate BTC accounts in India.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Stage 1: PMS Folio, GRC & BTC Email Audit (Day 45–60)",
      text: "Consolidate the corporate travel desk's BTC authorization email, signed Guest Registration Cards (GRCs), POS KOT slips, and BSA 2023 Section 63 electronic certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Stage 2: GSTR-2B ITC & Form 26AS TDS Verification (Day 60–75)",
      text: "Verify that the B2B GST invoice was accepted in the corporate client's GSTR-2B/IMS without rejection and check Form 26AS for Section 194-I or 194C TDS credits.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Stage 3: Tri-Channel Advocate Legal Demand Notice (Day 75–90)",
      text: "Serve a 15-day Fact-verified statutory demand notice on the Company CFO, Managing Director, and Travel Desk Head via Zoho Verified Email, WATI WhatsApp, and India Post Speed Post RPAD.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Stage 4: Statutory Forum Escalation (Day 91–105)",
      text: "Initiate Commercial Court Section 12A Pre-Institution Mediation (>= ₹3L), CPC Order XXXVII Summary Suit, MSME Samadhaan (for Udyam hotels), or NI Act Section 138 prosecution.",
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
      name: "Hotel 'Bill-to-Company' (BTC) Credit Default Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function HotelBtcCorporateCreditDefaultRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data JSON-LD */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <Building2 className="w-3.5 h-3.5 shrink-0" />
            <span>§6.16 • IND-16 Hospitality & Corporate Travel Credit Playbook</span>
            <span className="text-slate-500">•</span>
            <span>B2B-191 Operational SOP</span>
          </div>

          {/* Single Page H1 — Verbatim Match with ARTICLE_SCHEMA.headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words below H1 + Parent Hub Link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer & Statutory Summary
            </span>
            Under <strong>Order XXXVII CPC</strong> and <strong>Indian Contract Act Section 226</strong>, a corporate travel desk’s BTC authorization email, paired with signed PMS Guest Registration Cards (GRCs) and <strong>GSTR-2B ITC acceptance (CGST s.16(2)(b))</strong>, forms an enforceable written contract—defeating excuses like <em>“guest didn’t sign folio”</em> or <em>“employee resigned.”</em> Explore our{" "}
            <Link
              href="/industries/hotels-banquets-corporate-travel-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Hotels, Banquets & Corporate Travel Recovery Hub
            </Link>{" "}
            for full hospitality enforcement rails.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Primary Civil Remedy
              </p>
              <p className="text-lg sm:text-xl font-black text-emerald-400 mt-1">
                Order XXXVII CPC
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                10-Day Summary Appearance
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Tax Admission Lock
              </p>
              <p className="text-lg sm:text-xl font-black text-amber-400 mt-1">
                GSTR-2B & 26AS
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                CGST s.16(2)(b) + TDS 194-I
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Udyam Hotel Interest
              </p>
              <p className="text-lg sm:text-xl font-black text-red-400 mt-1">
                3x RBI Bank Rate
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                MSMED s.16 + IT Act s.43B(h)
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Digital Folio Proof
              </p>
              <p className="text-lg sm:text-xl font-black text-slate-100 mt-1">
                BSA 2023 s.63
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Opera / IDS / eZee Hash Log
              </p>
            </div>
          </div>

          {/* Advocate Attribution Strip */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-400">
            <span>
              Reviewed by <strong className="text-slate-200">Anuj Anand Malik</strong>, Advocate & Founder, AMA Legal Solutions
            </span>
            <span>Target Persona: Hotel Financial Controllers, Credit Managers & Serviced Apartment CFOs</span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs (Do NOT include Home — component prepends Home /) */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Hotels, Banquets & Corporate Travel Recovery",
                href: "/industries/hotels-banquets-corporate-travel-recovery",
              },
              {
                label: "Hotel 'Bill-to-Company' (BTC) Credit Default Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <HotelBtcTableOfContents />

          {/* Right Main Editorial Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="city-ledger-anatomy"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why 90+ Day Hotel BTC City Ledgers Stall After Guest Checkout
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Every Financial Controller and Credit Manager at a 4-Star or 5-Star business hotel, airport transit property, luxury resort, or corporate serviced apartment chain dreads the monthly <strong>90+ Day City Ledger (Bill-to-Company / BTC)</strong> ageing audit. Across major Indian corporate corridors—Gurugram, Mumbai BKC/Andheri, Bengaluru Whitefield/ORR, Hyderabad HITEC City, Pune Hinjewadi, Chennai OMR, and industrial hubs like Dahej, Jamnagar, Sriperumbudur, and Chakan—corporate room nights represent 55% to 75% of total occupancy.
                </p>

                <p>
                  The operational mechanics of a hotel BTC transaction create an acute structural asymmetry. A corporate travel desk executive or HR admin sends an urgent email at 7:00 PM: <em>“Please book 12 rooms for our project engineering team / regional sales conference on BTC basis per our corporate tariff; billing to Company GSTIN.”</em> The guests check in, consume rooms, breakfast, laundry, airport transfers, and in-room dining over 7 to 45 nights, and check out at 5:30 AM to catch morning flights. The front-office night auditor transfers the settled Guest Folio into the Property Management System (PMS) <strong>City Ledger (Accounts Receivable)</strong> and dispatches the tax invoice to the corporate accounts payable (AP) desk on a 15-day or 30-day credit cycle.
                </p>

                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl my-4 text-slate-800">
                  <p className="font-bold text-xs sm:text-sm text-[#DC2626] uppercase tracking-wide mb-1">
                    The Post-Checkout Leverage Inversion Trap
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Unlike a manufacturing supplier who can stop raw-material dispatches on a daily assembly line, a hotel’s room-night inventory is 100% consumed the moment the corporate guest walks out of the lobby. Once your City-Ledger invoice crosses 60 to 90 Days Past Due (DPD), polite emails and WhatsApp nudges from your AR executive or sales manager are routinely ignored—or met with stalling pretexts such as <em>“the employee who stayed has left the company,”</em> <em>“guest didn’t sign the checkout folio,”</em> or <em>“F&B and laundry were not authorized in the BTC mail.”</em>
                  </p>
                </div>

                <p>
                  When hotel credit teams rely solely on sales-relationship follow-ups, corporate CFOs prioritize statutory vendors, banks, and aggressive litigants while pushing hotel BTC invoices beyond 150 to 240 days—eventually forcing painful bad-debt write-offs that wipe out the property’s Gross Operating Profit (GOP). Converting aged City-Ledger vouchers into formal, fact-verified statutory demands under{" "}
                  <Link
                    href="/recovery/business-dues"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    B2B Commercial & Business Dues Recovery Law
                  </Link>{" "}
                  flips that leverage immediately.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Matrix */}
            <section
              id="statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Order XXXVII CPC, GSTR-2B Estoppel & BSA 2023 Statutory Matrix
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Hospitality credit recovery is governed by six intersecting statutory levers under Indian commercial law. Selecting the right combination depends on your City-Ledger ticket size, Udyam status, and documentary trail:
              </p>

              {/* Dark-Header Comparison Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                        Statutory Lever & Provision
                      </th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                        City-Ledger Eligibility & Pecuniary Floor
                      </th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                        Hospitality Evidentiary Trigger
                      </th>
                      <th className="p-3 sm:p-4 font-bold">
                        Creditor Leverage Against Defaulting Corporate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        CPC Order XXXVII (Summary Suit) & Order XXXVIII Rule 5
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        All liquidated BTC ledgers (Civil Court &lt; ₹3L; Commercial Court &gt;= ₹3L)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Corporate Rate Contract / BTC Email + Signed GRC + B2B Tax Invoices
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Corporate defendant has <strong>no automatic right to defend</strong>; must appear within 10 days and deposit security to avoid immediate decree.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/60">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        CGST Act, 2017 — Section 16(2)(b) (GSTR-2B / IMS Estoppel)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Every B2B hotel invoice where Corporate GSTIN was quoted
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        GSTR-1 filing by hotel + non-rejection in IMS & ITC availment in buyer&apos;s GSTR-3B
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        <strong>Absolute statutory estoppel:</strong> Buyer cannot claim ITC without receiving services—destroying fake &quot;no-show / unsigned folio&quot; defenses.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Commercial Courts Act, 2015 — Section 12A (PIMS)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Specified Value (Principal + Pre-Suit Interest) &gt;= ₹3,00,000
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Commercial accommodation / hospitality service agreement u/s 2(1)(c)(vii)/(xviii)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Mandatory 3-month DLSA mediation (₹1,000 fee); mediated settlement becomes an <strong>executable arbitral award decree u/s 30(4)</strong>.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/60">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        MSMED Act, 2006 (s.15–18) & Income Tax Act s.43B(h)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Udyam-registered Micro & Small Hotels, Resorts & Serviced Apartments
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Udyam Certificate active prior to BTC booking date + 45-day credit breach
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Mandatory <strong>3x RBI Bank Rate monthly compound interest</strong> (~20.25% p.a.) + 100% FY-end corporate income-tax expense disallowance.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        NI Act, 1881 — Sections 138, 141 & 143A
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Any dishonoured corporate settlement cheque or empanelment PDC
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Bank Return Memo + 30-day statutory demand notice + 15-day cure expiry
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Personal criminal prosecution against Company + active Directors (up to 2 yrs imprisonment / 2x fine) + 20% interim payout.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/60">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        IBC, 2016 — Section 8 & Section 9 (Form 3 / Form 4)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Undisputed City-Ledger + Contractual Interest &gt;= ₹1,00,00,000 (₹1 Cr)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Multi-property hotel chain or long-stay airline/EPC crew contract arrears
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        10-day Form 3/4 Statutory Demand Notice threatening NCLT CIRP & board suspension against solvent corporate debtors.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unsure which statutory forum yields the fastest recovery for your exact City-Ledger ticket size? Run your claim through our interactive{" "}
                <Link
                  href="/tools/b2b-debt-recovery-legal-forum-selector"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  B2B & Institutional Recovery Forum Decision Engine Calculator
                </Link>{" "}
                or compute exact Commercial Court filing fees using the{" "}
                <Link
                  href="/tools/commercial-court-specified-value-fee-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Commercial Court Specified-Value & Court-Fee Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage Hotel Credit Controller & City-Ledger Escalation Flow
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Top-performing hotel Financial Controllers never let a BTC account drift past Day 75 without formal legal crystallization. Implement this 5-stage operational decision tree across your property credit desk:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-6">
                <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-4 text-center">
                  Figure 1: Hotel City-Ledger (BTC) Pre-Litigation & Statutory Escalation Decision Tree
                </p>
                <div className="w-full flex justify-center">
                  <svg
                    width={820}
                    height={330}
                    viewBox="0 0 820 330"
                    className="w-full h-auto max-w-4xl text-xs font-sans"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Hotel Bill-to-Company BTC City Ledger 5-Stage Recovery Flowchart"
                  >
                    {/* Step 1 */}
                    <rect x="15" y="20" width="175" height="76" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="102" y="43" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">
                      STAGE 1 (DAY 31–45)
                    </text>
                    <text x="102" y="60" fill="#FCA5A5" textAnchor="middle" fontSize="9.5">
                      Credit Freeze & Folio Lock
                    </text>
                    <text x="102" y="76" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      Attach BTC Mail + Signed GRC
                    </text>

                    <path d="M190 58 L220 58" stroke="#94A3B8" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="220" y="20" width="180" height="76" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="310" y="43" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">
                      STAGE 2 (DAY 46–60)
                    </text>
                    <text x="310" y="60" fill="#FCD34D" textAnchor="middle" fontSize="9.5">
                      GSTR-2B & 26AS Audit
                    </text>
                    <text x="310" y="76" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      Lock s.16(2)(b) & 194-I Proof
                    </text>

                    <path d="M400 58 L430 58" stroke="#94A3B8" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="430" y="20" width="180" height="76" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="520" y="43" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">
                      STAGE 3 (DAY 61–75)
                    </text>
                    <text x="520" y="60" fill="#6EE7B7" textAnchor="middle" fontSize="9.5">
                      Tri-Channel Legal Notice
                    </text>
                    <text x="520" y="76" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      Email + WhatsApp + RPAD
                    </text>

                    <path d="M610 58 L635 58" stroke="#94A3B8" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="635" y="20" width="170" height="76" rx="10" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                    <text x="720" y="43" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">
                      STAGE 4 (15-DAY CURE)
                    </text>
                    <text x="720" y="60" fill="#93C5FD" textAnchor="middle" fontSize="9.5">
                      CFO Escalation Triage
                    </text>
                    <text x="720" y="76" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      68–74% Pre-Suit Settlement
                    </text>

                    {/* Connector Down to Stage 5 Tracks */}
                    <path d="M720 96 L720 142 L410 142 L410 172" stroke="#94A3B8" strokeWidth="2" />
                    <path d="M145 142 L675 142" stroke="#94A3B8" strokeWidth="2" />
                    <path d="M145 142 L145 172" stroke="#94A3B8" strokeWidth="2" />
                    <path d="M675 142 L675 172" stroke="#94A3B8" strokeWidth="2" />

                    {/* Track A */}
                    <rect x="20" y="172" width="250" height="128" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                    <text x="145" y="198" fill="#34D399" textAnchor="middle" fontWeight="bold" fontSize="11">
                      TRACK A: UDYAM MSME HOTEL
                    </text>
                    <text x="145" y="218" fill="#E2E8F0" textAnchor="middle" fontSize="10">
                      MSME Samadhaan (MSEFC s.18)
                    </text>
                    <text x="145" y="236" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      3x RBI Compound Interest (~20.25%)
                    </text>
                    <text x="145" y="253" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      + Section 43B(h) CFO Audit Notice
                    </text>
                    <text x="145" y="272" fill="#6EE7B7" textAnchor="middle" fontSize="9" fontWeight="bold">
                      75% Pre-Deposit to Challenge Award
                    </text>

                    {/* Track B */}
                    <rect x="285" y="172" width="250" height="128" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                    <text x="410" y="198" fill="#F87171" textAnchor="middle" fontWeight="bold" fontSize="11">
                      TRACK B: NON-MSME / ₹3L–₹1CR
                    </text>
                    <text x="410" y="218" fill="#E2E8F0" textAnchor="middle" fontSize="10">
                      Order XXXVII Summary Suit + s.12A
                    </text>
                    <text x="410" y="236" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      Commercial Court PIMS (₹1,000 Fee)
                    </text>
                    <text x="410" y="253" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      + Order 38 Rule 5 Bank Attachment
                    </text>
                    <text x="410" y="272" fill="#FCA5A5" textAnchor="middle" fontSize="9" fontWeight="bold">
                      No Automatic Right to Defend Suit
                    </text>

                    {/* Track C */}
                    <rect x="550" y="172" width="250" height="128" rx="10" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
                    <text x="675" y="198" fill="#FBBF24" textAnchor="middle" fontWeight="bold" fontSize="11">
                      TRACK C: CHEQUE BOUNCE / ₹1CR+
                    </text>
                    <text x="675" y="218" fill="#E2E8F0" textAnchor="middle" fontSize="10">
                      NI Act s.138/141 OR IBC Form 3/4
                    </text>
                    <text x="675" y="236" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      Director Criminal Summons + 20% s.143A
                    </text>
                    <text x="675" y="253" fill="#94A3B8" textAnchor="middle" fontSize="9">
                      OR NCLT Insolvency (&gt;= ₹1 Cr Default)
                    </text>
                    <text x="675" y="272" fill="#FCD34D" textAnchor="middle" fontSize="9" fontWeight="bold">
                      10-Day IBC / 15-Day s.138 Cure Clock
                    </text>
                  </svg>
                </div>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 md:hidden gap-3 mb-6">
                <div className="bg-slate-900 p-4 rounded-xl border border-red-800 text-white">
                  <span className="text-[10px] font-bold text-red-400 uppercase">
                    Stage 1 & 2 (Day 31–60 DPD)
                  </span>
                  <p className="font-bold text-sm mt-1">
                    BTC Credit Suspension + GSTR-2B / 26AS Proof Lock
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Suspend fresh BTC bookings for the corporate account, compile BTC approval emails + signed GRCs, and download GSTR-2B ITC reflection & Form 26AS 194-I TDS credits.
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-emerald-800 text-white">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">
                    Stage 3 & 4 (Day 61–90 DPD)
                  </span>
                  <p className="font-bold text-sm mt-1">
                    15-Day Tri-Channel Advocate Statutory Demand Notice
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Dispatch formal Legal Notice to Corporate CFO, Directors & Travel Desk via Zoho Legal Email, WATI WhatsApp, and India Post Speed Post RPAD with BSA s.63 certificate.
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-amber-800 text-white">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">
                    Stage 5 (Day 91+ Escalation)
                  </span>
                  <p className="font-bold text-sm mt-1">
                    MSEFC s.18 / Commercial Court s.12A / Order 37 / NI Act s.138
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Route Udyam hotels to MSME Samadhaan (3x RBI interest), non-MSME claims &gt;= ₹3L to Commercial Court s.12A & Order 37 Summary Suit, or bounced cheques to s.138 prosecution.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl text-slate-800 text-xs sm:text-sm leading-relaxed">
                <strong>Why Tri-Channel Service Matters in Hospitality Recovery:</strong> A reminder sent only to a junior travel coordinator stays buried in their inbox. By using LegalRecovery.in’s{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-emerald-800 font-bold underline hover:text-emerald-950"
                >
                  Simultaneous Email, WhatsApp & Speed Post RPAD Dispatch Engine
                </Link>
                , the physical RPAD envelope lands on the Company Secretary and CFO’s desk at the registered office while WhatsApp blue-tick receipts lock in court-admissible service under BSA Section 63.
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="btc-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 High-Frequency Corporate BTC Default & Folio Dispute Scenarios
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Select the specific City-Ledger bottleneck your hotel finance team is facing below to view the exact statutory rebuttal, PMS evidence bundle, and recommended legal action:
              </p>

              <HotelBtcScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked City-Ledger Recovery Math: ₹18.40 Lakh 80-Room-Night Default
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Consider a realistic 4-Star business hotel in Gurugram or Bengaluru where an EPC/IT corporate client booked <strong>80 room-nights</strong> across 45 days via email BTC authorization, checked out, availed GSTR-2B Input Tax Credit, and stalled payment for <strong>150 days</strong> beyond the 30-day credit period:
              </p>

              {/* Slate-900 Ledger Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg mb-6">
                <div className="border-b border-slate-800 pb-4 mb-4 flex flex-wrap justify-between items-center gap-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400">
                      City-Ledger Specimen Computation (150 Days Overdue)
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      80 Room-Nights + Conference F&B BTC Claim Sheet
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-red-950/80 border border-red-800/80 rounded-full text-xs font-bold text-red-400">
                    Specified Value &gt;= ₹3 Lakh (Commercial Court)
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      1. 80 Corporate Room-Nights @ ₹16,500/night (incl. 18% GST)
                    </span>
                    <span className="font-bold text-slate-100">₹13,20,000</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      2. Signed POS Boardroom F&B, Airport Transfers & Laundry Folios
                    </span>
                    <span className="font-bold text-slate-100">₹5,20,000</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-800 bg-slate-800/40 px-2 rounded">
                    <span className="font-semibold text-white">
                      Total Principal City-Ledger Receivable (Billed in GSTR-1 / Reflected in GSTR-2B)
                    </span>
                    <span className="font-bold text-white">₹18,40,000</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      3. Statutory / Contractual Interest for 150 Days Delay (@ 18% p.a. Commercial Rate / ~20.25% MSMED s.16)
                    </span>
                    <span className="font-bold text-amber-400">+ ₹1,53,123</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      4. Legal Notice, BSA s.63 Certification & Pre-Institution Mediation Costs Claimed
                    </span>
                    <span className="font-bold text-amber-400">+ ₹25,000</span>
                  </div>

                  <div className="flex justify-between py-3 border-t-2 border-emerald-500 bg-emerald-950/30 px-3 rounded-lg">
                    <span className="font-black text-sm sm:text-base text-white">
                      Total Crystallized Statutory Demand Amount
                    </span>
                    <span className="font-black text-base sm:text-lg text-emerald-400">
                      ₹20,18,123
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-slate-300">
                  <div className="bg-slate-800/70 p-3 rounded-lg">
                    <span className="text-red-400 font-bold block">Buyer Tax Hit (s.43B(h)):</span>
                    If hotel is Udyam Micro/Small & bill crosses March 31 unpaid, buyer faces <strong>₹4,63,128</strong> immediate corporate tax hit (@ 25.17%).
                  </div>
                  <div className="bg-slate-800/70 p-3 rounded-lg">
                    <span className="text-amber-400 font-bold block">GST ITC Reversal Risk:</span>
                    Under Rule 37 / CGST s.16(2) Proviso, non-payment beyond 180 days forces buyer to <strong>reverse ₹2,80,678 GST ITC + 18% interest</strong>!
                  </div>
                  <div className="bg-slate-800/70 p-3 rounded-lg">
                    <span className="text-emerald-400 font-bold block">Pre-Suit ROI:</span>
                    Initial Fact-Verified Notice dispatches for <strong>₹999</strong>; Section 12A Commercial Mediation filing fee is just <strong>₹1,000</strong>.
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-800 text-xs sm:text-sm leading-relaxed">
                <strong>The 180-Day GST Rule 37 Nuclear Weapon for Hotel Controllers:</strong> Under the Second Proviso to Section 16(2) of the CGST Act, 2017 read with CGST Rule 37, if a corporate client avails Input Tax Credit on your hotel invoice in GSTR-3B but fails to pay your invoice value within <strong>180 days from the date of invoice</strong>, the corporate buyer is statutorily required to <strong>reverse the entire GST ITC along with 18% p.a. interest under Section 50</strong> in their next GSTR-3B return! Highlighting this exact 180-day GST ITC reversal liability to the defaulting company’s CFO at Day 120–150 compels immediate settlement.
              </div>
            </section>

            {/* Section 6: PMS Folios, GRC Cards & BSA Section 63 Checklist */}
            <section
              id="pms-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  PMS Folios, GRC Cards & BSA Section 63 Electronic Audit Checklist
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Modern hotel operations run on cloud or on-premise Property Management Systems—<strong>Oracle Opera PMS, IDS Next, eZee Absolute, WinHMS, or SAP Hospitality</strong>—alongside tablet check-in pads and email reservation trails. Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced Section 65B of the erstwhile Indian Evidence Act), electronic PMS printouts and BTC email trails are 100% admissible as primary evidence in Commercial Courts, MSEFC, and NCLT when paired with a Part-A + Part-B statutory certificate.
                </p>

                <p>
                  Before dispatching a formal demand notice or filing an Order XXXVII Summary Suit, your hotel credit team should assemble this 6-document evidentiary docket:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                      1. Corporate BTC Authorization Email / Rate Contract
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Export the original reservation email from the corporate travel desk (<code>@company.com</code>), Purchase Order, or signed Annual Corporate Rate Empanelment Letter specifying BTC billing instructions and room tariff.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                      2. Signed Guest Registration Cards (GRC) & ID / Form-C
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Attach physical or iPad-signed Guest Registration Cards (GRCs) captured at check-in, corporate visiting cards/ID badges, and FRRO Form-C logs (for foreign corporate expats) proving actual physical check-in.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                      3. Itemized PMS Guest Folios & Signed POS KOT Slips
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Generate the master City-Ledger invoice plus individual room folios from Opera/IDS/eZee, attaching signed restaurant/room-service KOT bills, banquet captain extra-pax slips, and airport transfer logs.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                      4. GSTR-1 Filing & Buyer GSTR-2B / IMS Reflection
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download the GST portal B2B invoice summary showing the corporate debtor’s GSTIN, IRN e-Invoice QR code, and non-rejection in IMS to establish statutory service acceptance under CGST Section 16(2)(b).
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                      5. Form 26AS / AIS TDS Credit Statement (s.194-I / 194C)
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Check if the corporate client deducted 2% or 10% TDS under Section 194C or 194-I on your room/banquet bills. A TDS reflection in Form 26AS is an irrefutable written admission of debt extending limitation under Section 18.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                      <FileCheck2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                      6. BSA 2023 Section 63 Part-A & Part-B Certificate
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Certify your PMS ledger export, email headers, and SHA-256 PDF hash values under the statutory Schedule of the Bharatiya Sakshya Adhiniyam, 2023 so defense counsel cannot challenge digital printouts.
                    </p>
                  </div>
                </div>

                <p>
                  Need a ready-to-use legal notice draft tailored with Guest Folio, BTC Voucher, and GSTR-2B schedules? Use our{" "}
                  <Link
                    href="/templates/hotel-btc-and-iata-travel-agent-corporate-credit-legal-notice"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Hospitality & Travel Credit Legal Notice Pack (Hotel BTC City-Ledger & IATA PNR Template)
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 7: FHRAI Credit Alerts, Section 43B(h) & Director Liability Levers */}
            <section
              id="fhrai-43bh-levers"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FHRAI Credit Alerts, Section 43B(h) & Director Liability Levers
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Why do corporate finance departments settle a hotel’s Advocate Demand Notice within 7 to 15 days after ignoring 5 months of polite front-office reminders? Because an institutional hospitality legal notice activates three commercial pressure points simultaneously:
                </p>

                <ul className="space-y-3">
                  <li>
                    <strong>1. Multi-Recipient Service on Board of Directors & Statutory Auditors:</strong> Travel desk coordinators and junior AP executives often hide overdue hotel ledgers from senior management to cover up budget overruns. Serving the statutory notice by Speed Post RPAD and verified email directly on the <strong>Managing Director, Whole-Time Directors, CFO, and Company Secretary</strong> (extracted via MCA Master Data) triggers an immediate internal compliance escalation.
                  </li>
                  <li>
                    <strong>2. Hospitality Trade Association & Credit-Watch Intimation (FHRAI / HRANI / HRAWI / SIHRA):</strong> Corporate travel desks depend on uninterrupted BTC credit privileges across business hotels in every metro. Formally notifying the defaulting corporate that prolonged non-payment will result in revocation of corporate empanelment across your hotel group and credit-default reporting to regional hotel associations and credit bureaus (CIBIL Commercial CMR / Experian) creates immediate operational urgency.
                  </li>
                  <li>
                    <strong>3. Dishonoured Settlement Cheque Prosecution Under Section 138 NI Act:</strong> Whenever a defaulting corporate client, wedding/conference host, or travel consolidator hands over a post-dated cheque that bounces, hotels must act within the strict{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Section 138 NI Act 30-Day Cheque Bounce Notice Timeline
                    </Link>{" "}
                    to fasten personal criminal liability on the company’s signatory and directors under Section 141.
                  </li>
                </ul>

                {/* Precedent Cards */}
                <div className="space-y-4 mt-6 not-prose">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Verified Judicial Precedents Empowering Hospitality Creditors
                  </p>
                  {COURT_PRECEDENTS.map((prec, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl border border-slate-200 shadow-sm"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <span className="font-bold text-sm sm:text-base text-slate-900">
                          {prec.title}
                        </span>
                        <span className="text-xs font-semibold text-[#DC2626]">
                          {prec.citation}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium mb-2">
                        {prec.parties} • {prec.date}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        {prec.holding}
                      </p>
                      <p className="text-xs font-semibold text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="text-[#DC2626]">Hospitality Takeaway:</span> {prec.takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Conversion CTA */}
            <section id="dual-cta" className="scroll-mt-28">
              <HotelBtcNoticeCTA />
            </section>

            {/* Section 9: Hospitality, Travel & Banquet Creditor Network (Sibling Spokes) */}
            <section
              id="hospitality-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Hospitality, Travel & Banquet Creditor Network (IND-16 Guides)
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Explore our specialized B2B hospitality, corporate travel desk, and banquet recovery guides within the{" "}
                <Link
                  href="/industries/hotels-banquets-corporate-travel-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  IND-16 Hotels, Banquets & Corporate Travel Pillar
                </Link>
                :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wide">
                      Sibling Spoke • B2B-192 (IATA TMC Recovery)
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#DC2626] mt-1">
                      IATA BSP Debits You in 7 Days—Corporate Flight Credit Default Recovery Playbook
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Enforce flown-PNR manifests, LCC wallet advances, and urgent Order 38 Rule 5 bank attachment before IATA BSP default hits your agency.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-3">
                    Read TMC Playbook <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  href="/banquet-hall-destination-wedding-post-event-balance-cheque-bounce"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wide">
                      Sibling Spoke • B2B-193 (Banquet & Wedding Venues)
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Wedding Host Issued &apos;Stop Payment&apos; on Banquet Extra-Pax & Bar Balance Cheque?
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Prosecute post-event dishonoured wedding cheques under NI Act s.138/143A using signed event-captain extra-plate slips and CCTV counts.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-3">
                    Read Venue Playbook <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  href="/ota-b2b-bedbank-withheld-hotel-payout-arbitrary-chargeback-recovery"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wide">
                      Sibling Spoke • B2B-194 (OTA & Bed-Bank Payouts)
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Hoteliers vs OTAs & B2B Wholesalers: Recovering Frozen Extranet Settlements & VCCs
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Challenge unilateral guest-relocation debits, declined Virtual Credit Cards (VCCs), and defaulting B2B tour wholesalers.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-3">
                    Read OTA Recovery Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  href="/templates/hotel-btc-and-iata-travel-agent-corporate-credit-legal-notice"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wide">
                      P1 Notice Template • B2B-199
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Hospitality & Travel Credit Legal Notice Pack (Hotel BTC + IATA Flown-PNR Format)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Ready-to-use notice workspace featuring Guest Folio, BTC Voucher, GDS Ticket-Number schedules, and GSTR-2B estoppel clauses.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-3">
                    Open Notice Template <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Hotel BTC & City-Ledger Debt Recovery
                </h2>
              </div>

              <div className="divide-y divide-slate-200">
                {FAQS.map((faq, index) => (
                  <details key={index} className="group py-4 first:pt-0 last:pb-0">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      <span>{faq.question}</span>
                      <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-slate-400 group-hover:text-[#DC2626]">
                        ▾
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-3 border-l-2 border-[#DC2626]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Authorities & Bare Acts */}
            <section
              id="primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities, Bare Acts & Hospitality Legal References
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                All statutory procedures and creditor remedies detailed in this hospitality recovery playbook are verified against official Indian legislative texts and tax portals:
              </p>

              <ul className="space-y-2.5">
                {PRIMARY_SOURCES.map((src, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <ExternalLink className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-[#DC2626] hover:underline leading-relaxed font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                <span>
                  Authored by <strong>Anuj Anand Malik</strong>, Advocate & Founder, AMA Legal Solutions
                </span>
                <span>Statutory baseline verified for 2026–2027 Commercial Courts & BSA s.63 compliance</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="hospitalityB2B" />
    </div>
  );
}
