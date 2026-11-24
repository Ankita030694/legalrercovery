import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MiceTableOfContents from "./MiceTableOfContents";
import MiceScenarioTabs from "./MiceScenarioTabs";
import MiceNoticeCTA from "./MiceNoticeCTA";
import {
  Building2,
  CalendarX2,
  FileCheck2,
  Scale,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  Calculator,
  FileText,
} from "lucide-react";

export const revalidate = 86400;

const PAGE_URL =
  "/mice-corporate-offsite-conference-attrition-last-minute-cancellation-recovery";
const EXACT_H1 =
  "Enforcing Hotel Room-Block Attrition & Last-Minute MICE Offsite Cancellation Clauses Against Corporate Clients";
// Tightened to 52 chars (within 30-60ch limit) preserving primary keyword
const META_TITLE = "Corporate MICE Cancellation & Attrition Fee Recovery";
// Tightened to 149 chars (within 120-155ch limit) preserving statutory facts
const META_DESCRIPTION =
  "Blocked 150 rooms for a corporate offsite & they cancelled 7 days prior? Enforce Contract Act s.74 perishable-inventory attrition & cancellation fees.";

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
          "MICE Corporate Offsite Cancellation & Hotel Room Attrition Recovery Guide"
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
      "The Indian Contract Act, 1872 — Sections 73 & 74 (Liquidated Damages, Genuine Pre-Estimate of Loss & Mitigation) and Sections 187 & 226 (Principal Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Kailash Nath Associates v. Delhi Development Authority — (2015) 4 SCC 136 (Proof of Loss & Genuine Pre-Estimate under Section 74)",
    url: "https://main.sci.gov.in/",
  },
  {
    title:
      "Oil & Natural Gas Corporation Ltd. v. Saw Pipes Ltd. — (2003) 5 SCC 705 (Enforceability of Agreed Liquidated Damages)",
    url: "https://main.sci.gov.in/",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits on Signed Group Contracts & Liquidated Cancellation Slabs)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Commercial Courts Act, 2015 — Section 2(1)(c) & Section 12A (Mandatory Pre-Institution Mediation for Disputes >= ₹3 Lakh)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of PMS Night-Audit Occupancy Logs & Turnaway Registers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15–18 & Income Tax Act Section 43B(h)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Genuine Pre-Estimate of Loss Survives Section 74 When Actual Unsold Inventory Is Demonstrated",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Supreme Court Section 74 Benchmark",
    holding:
      "The Supreme Court clarified that under Section 74 of the Indian Contract Act, where a sum is named in a contract as payable upon breach, the party complaining of breach is entitled to receive reasonable compensation not exceeding the named amount. Where actual loss is proved—or where proving exact counterfactual loss is difficult and the stipulated slab is a genuine pre-estimate—liquidated damages are enforceable.",
    takeaway:
      "A convention hotel satisfies Kailash Nath by producing its PMS Daily Occupancy Report for the cancelled event dates alongside its CRM Turnaway Log showing wedding/leisure inquiries declined while holding the corporate room block.",
  },
  {
    title: "Stipulated Sliding-Scale Damages Are Binding Unless Shown to Be Wholly Arbitrary Penalties",
    parties: "ONGC Ltd. v. Saw Pipes Ltd.",
    citation: "(2003) 5 SCC 705, Supreme Court of India",
    date: "Supreme Court Liquidated Damages Rule",
    holding:
      "Where parties of equal commercial bargaining power explicitly agree to a pre-estimated damages clause in a commercial contract, courts should give full effect to the agreed terms unless the defaulting party proves the stipulation is unconscionable or a pure penalty unrelated to loss.",
    takeaway:
      "Corporate procurement teams that sign a 30-day (50%), 15-day (75%), and 7-day (100%) sliding-scale MICE cancellation matrix cannot later cry 'penalty' when they cancel 7 days before check-in.",
  },
  {
    title: "Mandatory Section 12A Pre-Institution Mediation for Commercial MICE Claims >= ₹3 Lakh",
    parties: "M/s Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Commercial Courts Protocol",
    holding:
      "For commercial disputes of Specified Value >= ₹3 Lakh not seeking urgent interim attachment, Section 12A mediation before the District/State Legal Services Authority is mandatory prior to instituting an Order XXXVII or commercial suit.",
    takeaway:
      "Serving a crisp Section 74 loss sheet + PMS occupancy log during Section 12A mediation forces corporate CFOs to settle attrition claims rather than face an Order XXXVII decree.",
  },
  {
    title: "Post-Cancellation Service Pretexts Raised After Notice Are 'Moonshine' Defenses",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Supreme Court Dispute Filter",
    holding:
      "A corporate debtor cannot invent a retroactive dispute after receiving a statutory demand notice when no contemporaneous written objection was raised during contract execution.",
    takeaway:
      "If the corporate client approved the Banquet Event Order (BEO) and rooming cut-off without objection, belated excuses like 'venue renovation' or 'unapproved signatory' fail at the leave-to-defend stage.",
  },
];

const FAQS = [
  {
    q: "Can a hotel enforce a 75% to 100% last-minute MICE cancellation fee under Indian law, or is it struck down as a 'penalty'?",
    a: "Yes, a sliding-scale cancellation fee (such as 50% at 30 days, 75% at 15 days, and 100% within 7 days) is legally enforceable under Section 74 of the Indian Contract Act, 1872, provided it reflects a genuine pre-estimate of loss on time-perishable inventory. Under Kailash Nath Associates v. DDA (2015), the hotel must substantiate that the blocked rooms and banquet halls remained unsold on the event dates using its PMS Night-Audit Occupancy Report and CRM Turnaway Log.",
  },
  {
    q: "What if the corporate client says 'zero guests checked in, so you saved electricity and breakfast costs—you suffered no loss'?",
    a: "This is a standard corporate procurement tactic. While a hotel may deduct purely variable pass-through costs (such as unconsumed buffet raw food or third-party artist fees if avoided), the fixed room-night revenue and committed banquet space capacity are 100% perishable. An unsold room on 14 November is lost forever. Courts uphold room-block liquidated damages net of any actual resale revenue achieved on those dates.",
  },
  {
    q: "How do we enforce an 80% room-block attrition clause when 65 out of 150 delegates actually checked in?",
    a: "Attrition clauses protect the hotel against 'wash' when a corporate client demands deeply discounted MICE group rates (25%–35% below BAR) in exchange for a minimum pickup guarantee. If 150 rooms were blocked with an 80% guarantee (120 rooms) and only 65 checked in, the hotel bills for the 55-room attrition shortfall at the contracted group rate—supported by the house occupancy log showing at least 55 rooms remained vacant.",
  },
  {
    q: "If the hotel resold 30 of the 150 cancelled rooms to walk-in or OTA guests at a lower rate, does that destroy our Section 74 claim?",
    a: "No—in fact, demonstrating partial resale proves your bona fides under Section 73/74 mitigation duty! You simply credit the net revenue recovered from those 30 resold rooms against the 150-room cancellation claim and recover the remaining 120 unsold room-nights plus any rate differential on the 30 resold rooms.",
  },
  {
    q: "Can a MICE tour operator or incentive travel agency recover non-refundable airline and foreign resort deposits if the corporate client cancels?",
    a: "Yes. Under Sections 187 and 226 of the Indian Contract Act, an agency executing a written corporate mandate or Purchase Order binds the corporate principal for all third-party commitments (airline group EMDs, charter retainers, international resort blocks). If the MICE agency holds Udyam registration, it can also invoke MSMED Act Sections 15–18 for 3x RBI compound interest and Income Tax Section 43B(h) disallowance.",
  },
  {
    q: "Is GST payable on MICE cancellation and room-block attrition invoices, and how does CBIC Circular 178/10/2022-GST apply?",
    a: "Under CBIC Circular No. 178/10/2022-GST dated 03 August 2022, cancellation charges for hotel accommodation and event bookings are treated as part of the supply of the intended hospitality service (not an independent 'tolerating an act' supply) and attract the same GST rate as the principal room/banquet booking. Raising a formal tax invoice or debit note (rather than a credit note) preserves your GSTR-1 trail and prevents the corporate from claiming an automatic tax-free refund.",
  },
  {
    q: "What if the corporate client issued a post-dated advance or balance cheque for the dealer-meet and then instructed 'Stop Payment'?",
    a: "A 'Stop Payment' instruction on a cheque issued toward a confirmed MICE contract or post-event Banquet Event Order (BEO) triggers criminal liability under Section 138 of the Negotiable Instruments Act, 1881, alongside 20% interim compensation under Section 143A. You must serve a statutory 30-day demand notice from the date of the Bank Return Memo.",
  },
];

export default function MiceAttritionCancellationRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Hotels, Banquets & Corporate Travel",
      href: "/industries/hotels-banquets-corporate-travel-recovery",
    },
    { label: "MICE Attrition & Cancellation Recovery", href: PAGE_URL },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
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
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Convention Hotels & MICE Agencies Enforce Room-Block Attrition & Cancellation Clauses",
    description:
      "5-step statutory and evidentiary SOP to prove unsold perishable room-night inventory under Contract Act s.74 and Kailash Nath Associates v. DDA.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock PMS Night-Audit & Turnaway Logs on Event Dates",
        text: "Freeze the Property Management System (Opera, IDS Next, eZee) Daily Occupancy Report and CRM Turnaway Register for the exact cancelled dates.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Compute Net Unsold Loss & Apply Resale Mitigation Credit",
        text: "Calculate contracted room-nights minus actual resold rooms, applying the sliding-scale cancellation slab and deducting only avoided variable F&B pass-through costs.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue BSA 2023 Section 63 Certified Demand Notice",
        text: "Serve a Fact-verified demand notice under Indian Contract Act s.74 and Order XXXVII CPC (or NI Act s.138 if a cheque was stopped) on the Corporate CFO and Directors.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Initiate Commercial Courts Act s.12A Mediation or MSMED s.18",
        text: "For claims >= ₹3 Lakh, file mandatory Section 12A pre-institution mediation or MSEFC Samadhaan claim if the hotel/MICE organizer holds Udyam registration.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File Order XXXVII Summary Suit With Unsold Inventory Schedule",
        text: "Convert the signed Group Sales Agreement, cancellation email, and PMS occupancy audit into a summary suit for a fast-track decree.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
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
        name: "Hotels, Banquets & Corporate Travel",
        item: `${SITE_URL}/industries/hotels-banquets-corporate-travel-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "MICE Attrition & Cancellation Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            <CalendarX2 className="w-3.5 h-3.5" />
            IND-16 Convention Hotels, MICE Operators &amp; Incentive Travel
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer — Contract Act Section 74 &amp; Kailash Nath Proof
            </span>
            Under <strong>Section 74 of the Indian Contract Act, 1872</strong>, hotel room-nights and convention spaces are 100% time-perishable inventory. Sliding-scale MICE cancellation slabs (50%/75%/100%) and 80% attrition clauses survive{" "}
            <em>Kailash Nath Associates v. DDA</em> scrutiny when supported by your PMS unsold occupancy log and turnaway register. Part of our{" "}
            <Link
              href="/industries/hotels-banquets-corporate-travel-recovery"
              className="text-red-400 underline hover:text-red-300 font-bold"
            >
              IND-16 Hotels, Banquets &amp; Corporate Travel Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-slate-100">s.74 ICA</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Perishable Inventory Liquidated Damages
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-emerald-400">75%–100%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Enforceable 7–15 Day Cancellation Slabs
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-amber-400">3x RBI</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 Interest (Udyam Hotels &amp; MICE)
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-red-400">Order 37</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Fast-Track Summary Suit on Signed Contracts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <MiceTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="perishable-inventory-gap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Last-Minute MICE Cancellations Trigger Liquidated Damages
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every peak-season quarter, convention hotels, destination resorts, and MICE tour operators block 100 to 300+ rooms and plenary ballrooms for corporate dealer-meets, pharma launches, and annual leadership offsites. To secure those dates, the hotel&rsquo;s Director of Sales turns away high-margin destination weddings, FIT leisure bookings, and competing corporate inquiries for months.
                </p>
                <p>
                  Then, 7 to 10 days before check-in—when it is commercially impossible to backfill 150 rooms—the corporate client emails a terse cancellation citing &ldquo;budget freeze&rdquo; or &ldquo;leadership reschedule.&rdquo; Worse, corporate procurement teams frequently demand a 100% refund of their booking advance, asserting that because no guest slept in the rooms and no banquet buffet was cooked, charging an attrition or cancellation fee is an unenforceable &ldquo;penalty&rdquo; under Indian contract law.
                </p>
                <p>
                  That legal argument is fundamentally flawed when countered properly. Unlike manufactured goods that remain in a warehouse for sale next month, <strong>hotel room-nights and convention hall slots are 100% time-perishable inventory</strong>. An unsold room on a contracted event night is revenue extinguished forever. When your hotel pairs its signed Group Sales Agreement with a Property Management System (PMS) Unsold Occupancy Log and Turnaway Register, your 75%–100% cancellation invoice satisfies the Supreme Court&rsquo;s evidentiary threshold in <em>Kailash Nath Associates v. DDA</em> and becomes fully recoverable through Commercial Court mediation or an Order XXXVII Summary Suit.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Matrix */}
            <section
              id="kailash-nath-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Contract Act Section 74 &amp; Perishable Inventory Legal Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Convention hotels and MICE organizers should anchor every demand notice across these six statutory levers rather than relying on polite sales follow-ups:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Precedent</th>
                      <th className="p-3.5 font-bold">MICE &amp; Attrition Application</th>
                      <th className="p-3.5 font-bold">Mandatory Creditor Proof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Indian Contract Act, 1872 — Section 74
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Enforces pre-agreed sliding-scale cancellation slabs (30d/15d/7d) and 80% room-block attrition shortfalls as genuine pre-estimates of loss.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Signed Group Contract + PMS Night-Audit Occupancy Log showing rooms stayed vacant.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        <em>Kailash Nath Associates v. DDA</em> (2015)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Requires proof of actual loss where feasible; defeats corporate &ldquo;windfall/penalty&rdquo; objections when unsold capacity is documented.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        CRM Turnaway / Regret Log + Event-Date House Count % + Resale Credit ledger.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act ss. 187 &amp; 226
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Binds the corporate principal for non-refundable airline charter EMDs &amp; foreign resort blocks booked by a MICE / Incentive agency.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Corporate PO / Email Mandate + SWIFT / Airline EMD forfeiture receipts.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC Summary Suit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Fast-track recovery of liquidated cancellation slabs &amp; signed Banquet Event Order (BEO) balances without a multi-year civil trial.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Signed Agreement + Cancellation Email + Tax Invoice / Debit Note.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act ss. 15–18 &amp; IT Act s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Udyam-registered boutique resorts &amp; MICE agencies recover 3x RBI compound interest and trigger corporate tax disallowance after 45 days.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Udyam Certificate (prior to contract date) + Unpaid MICE Invoice.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act ss. 138 &amp; 143A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Criminal prosecution + 20% interim compensation if corporate stops payment on an advance or post-event dealer-meet cheque.
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Dishonoured Cheque + Bank Return Memo + 30-Day Statutory Demand Notice.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                        {item.date}
                      </p>
                      <h3 className="text-sm font-black text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 mb-2">
                        {item.parties} — {item.citation}
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">
                        {item.holding}
                      </p>
                      <p className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
                        <strong>Hotel Takeaway:</strong> {item.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="attrition-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Step Hotel &amp; MICE Attrition Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                The moment a corporate client sends a wash notice or short-picks up a contracted room block, your revenue and finance teams must execute this 5-step evidentiary sequence before the event dates pass:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4 overflow-x-auto">
                <svg
                  width="860"
                  height="230"
                  viewBox="0 0 860 230"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Step MICE Room-Block Attrition & Cancellation Recovery Decision Tree"
                >
                  {/* Step 1 */}
                  <rect x="10" y="30" width="150" height="145" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="85" y="56" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STEP 1 · DAY 0</text>
                  <text x="85" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Freeze PMS</text>
                  <text x="85" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">&amp; Turnaways</text>
                  <text x="85" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10">Lock Opera/IDS</text>
                  <text x="85" y="137" textAnchor="middle" fill="#CBD5E1" fontSize="10">Occupancy + CRM</text>
                  <text x="85" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">Declined Inquiries</text>

                  <path d="M160 102 L182 102" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="182" y="30" width="150" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="257" y="56" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STEP 2 · POST-DATE</text>
                  <text x="257" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Compute Net</text>
                  <text x="257" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Unsold Loss</text>
                  <text x="257" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10">Contracted Block</text>
                  <text x="257" y="137" textAnchor="middle" fill="#CBD5E1" fontSize="10">Minus Resold</text>
                  <text x="257" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">Rooms &amp; Avoided F&amp;B</text>

                  <path d="M332 102 L354 102" stroke="#94A3B8" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="354" y="30" width="150" height="145" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="429" y="56" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STEP 3 · TAX &amp; s.63</text>
                  <text x="429" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Raise GST</text>
                  <text x="429" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Attrition Bill</text>
                  <text x="429" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10">CBIC Cir. 178/2022</text>
                  <text x="429" y="137" textAnchor="middle" fill="#CBD5E1" fontSize="10">Tax Invoice + BSA</text>
                  <text x="429" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">s.63 Hash Export</text>

                  <path d="M504 102 L526 102" stroke="#94A3B8" strokeWidth="2" />

                  {/* Step 4 */}
                  <rect x="526" y="30" width="150" height="145" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="601" y="56" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STEP 4 · 15-DAY</text>
                  <text x="601" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Advocate s.74</text>
                  <text x="601" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Demand Notice</text>
                  <text x="601" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10">Email + WhatsApp +</text>
                  <text x="601" y="137" textAnchor="middle" fill="#CBD5E1" fontSize="10">RPAD to CFO &amp; MD</text>
                  <text x="601" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">(+ s.138 if Cheque)</text>

                  <path d="M676 102 L698 102" stroke="#94A3B8" strokeWidth="2" />

                  {/* Step 5 */}
                  <rect x="698" y="30" width="152" height="145" rx="12" fill="#DC2626" />
                  <text x="774" y="56" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="bold">STEP 5 · ESCALATE</text>
                  <text x="774" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">s.12A / Order 37</text>
                  <text x="774" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">or MSEFC s.18</text>
                  <text x="774" y="122" textAnchor="middle" fill="#FEF2F2" fontSize="10">Commercial Court</text>
                  <text x="774" y="137" textAnchor="middle" fill="#FEF2F2" fontSize="10">Mediation (&gt;= ₹3L)</text>
                  <text x="774" y="152" textAnchor="middle" fill="#FEF2F2" fontSize="10">or 3x RBI Interest</text>

                  <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L6,3 z" fill="#94A3B8" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "Step 1 · Day 0",
                    title: "Freeze PMS Occupancy & Turnaway Logs",
                    desc: "Export Night-Audit occupancy reports and CRM declined wedding/leisure inquiries.",
                  },
                  {
                    step: "Step 2 · Post-Date",
                    title: "Compute Net Unsold Loss",
                    desc: "Deduct actual resold rooms & avoided variable food cost from the contracted block.",
                  },
                  {
                    step: "Step 3 · Tax & BSA",
                    title: "Raise GST Attrition Invoice + s.63 Hash",
                    desc: "Apply CBIC Circular 178/10/2022-GST and certify electronic PMS logs under BSA s.63.",
                  },
                  {
                    step: "Step 4 · 15-Day Notice",
                    title: "Serve Advocate s.74 Demand Notice",
                    desc: "Send via Email + WhatsApp + Speed Post RPAD to Corporate CFO & Directors.",
                  },
                  {
                    step: "Step 5 · Forum",
                    title: "Commercial Court s.12A / Order 37 / MSEFC",
                    desc: "Enforce via Summary Suit or MSMED 3x RBI compound interest.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {card.step}
                    </p>
                    <p className="text-sm font-black mt-0.5">{card.title}</p>
                    <p className="text-xs text-slate-300 mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="mice-failure-modes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Corporate Offsite, Dealer-Meet &amp; DMC Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your exact commercial bottleneck below to review the typical corporate procurement excuse, the creditor-side legal rebuttal, and the exact annexures required for recovery:
              </p>

              <MiceScenarioTabs />
            </section>

            {/* Section 5: Worked Financial Calculation Box */}
            <section
              id="unsold-occupancy-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Math: ₹42.50 Lakh 150-Room Offsite Cancellation Claim
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Below is an illustration of how a convention resort structures a 7-day last-minute cancellation ledger so it survives <em>Kailash Nath</em> judicial scrutiny without being struck down as an unmitigated penalty:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Illustrative Section 74 Perishable-Inventory Ledger
                    </p>
                    <p className="text-base sm:text-lg font-black">
                      150 Rooms × 3 Nights (450 Room-Nights) · Cancelled 7 Days Prior
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold">
                    Kailash Nath Compliant
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      1. Contracted Room Block (450 Room-Nights @ ₹10,000/night)
                    </span>
                    <span className="font-bold text-white">₹45,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      2. Contracted Banquet &amp; AV Minimum Guarantee (150 Pax × 2 Gala Dinners)
                    </span>
                    <span className="font-bold text-white">₹9,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-emerald-400">
                      3. Less: Mitigation Resale Credit (32 Rooms Resold via OTA @ ₹8,500)
                    </span>
                    <span className="font-bold text-emerald-400">- ₹2,72,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-emerald-400">
                      4. Less: Avoided Variable Food Raw-Material Cost (35% of Gala F&amp;B)
                    </span>
                    <span className="font-bold text-emerald-400">- ₹3,15,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-amber-300">
                      5. Less: Booking Advance Already Retained by Resort
                    </span>
                    <span className="font-bold text-amber-300">- ₹10,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      6. Add: GST @ 18% on Net Liquidated Damages (CBIC Circular 178/2022)
                    </span>
                    <span className="font-bold text-white">+ ₹6,86,340</span>
                  </div>
                  <div className="flex justify-between pt-3 text-sm sm:text-base font-black text-white">
                    <span>Net Enforceable Balance Principal (418 Unsold Room-Nights + Fixed F&amp;B)</span>
                    <span className="text-red-400">₹44,99,340*</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                  *Plus pendente lite interest @ 18% p.a. under Commercial Courts Act, or 3x RBI Bank Rate compounded monthly under MSMED Act Section 16 if the resort/MICE operator holds Udyam registration. Estimate your exact MSMED interest using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-400 underline hover:text-red-300"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: PMS & BSA 2023 s.63 Checklist */}
            <section
              id="pms-occupancy-audit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Proving Unsold Room Nights: PMS &amp; BSA Section 63 Evidence SOP
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, digital PMS exports and CRM turnaway logs are admissible in court only when accompanied by a statutory electronic-record certificate signed by the Night Auditor or IT Controller. Compile this 6-point dossier before issuing your demand notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Executed Group Sales / Banquet Contract",
                    desc: "Stamped or digitally executed agreement specifying room block count, cut-off date, 80% attrition floor, and 30/15/7-day cancellation slabs.",
                  },
                  {
                    title: "2. PMS Night-Audit Occupancy Report",
                    desc: "System-generated Opera / IDS Next / eZee house-count PDFs for every cancelled event date proving vacant room inventory exceeded the blocked rooms.",
                  },
                  {
                    title: "3. CRM Turnaway & Regret Log",
                    desc: "Timestamped email or CRM entries showing wedding inquiries, tour groups, or corporate leads declined because the 150-room block was held.",
                  },
                  {
                    title: "4. Written Cancellation / Short-Pickup Trail",
                    desc: "Corporate email cancelling the offsite or final rooming list submitted after the cut-off date, establishing the exact slab triggered.",
                  },
                  {
                    title: "5. Mitigation & Resale Ledger",
                    desc: "Transparent reconciliation of any last-minute walk-in or OTA rooms resold on those dates so your claim cannot be attacked as double-recovery.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Hash Certificate",
                    desc: "Statutory certificate verifying device integrity and SHA-256 hash of PMS exports, email headers, and signed Banquet Event Orders (BEOs).",
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

            {/* Section 7: Mitigation, Resale & GST Rules */}
            <section
              id="resale-mitigation-credit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Mitigation Duty, Resale Offset &amp; GST Credit Note Rules
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Two operational mistakes routinely derail otherwise airtight hotel cancellation claims: <strong>failing to document mitigation efforts</strong> and <strong>issuing premature GST credit notes</strong>.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> Critical Accounting &amp; Tax Warning
                  </p>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                    Under <strong>CBIC Circular No. 178/10/2022-GST</strong>, hotel cancellation and retention charges are treated as part of the supply of accommodation/banquet services. Never issue a GST Credit Note for forfeited advances or cancellation slabs until a formal settlement is executed. Retaining the tax invoice and reporting it in GSTR-1 creates a statutory ledger trail.
                  </p>
                </div>
                <p>
                  Additionally, if your property or MICE agency is Udyam-registered, pair your demand notice with our{" "}
                  <Link
                    href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Section 43B(h) MSME Tax Disallowance Intimation Notice
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/templates/msme-delayed-payment-demand-notice"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    MSME Delayed Payment Demand Notice
                  </Link>{" "}
                  and verify statutory limitation windows with the{" "}
                  <Link
                    href="/tools/limitation-period-calculator"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Limitation Period Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section id="dual-cta" className="scroll-mt-28">
              <div className="sr-only">
                <h2>Enforce Your MICE Attrition or Cancellation Invoice Today</h2>
              </div>
              <MiceNoticeCTA />
            </section>

            {/* Section 9: IND-16 & Seed Cross-Links */}
            <section
              id="ind16-recovery-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-16 Hospitality, MICE &amp; Corporate Travel Recovery Guides
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Explore our complete hospitality and corporate travel recovery cluster alongside core commercial enforcement guides:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "IND-16 Hotels, Banquets & Corporate Travel Hub",
                    href: "/industries/hotels-banquets-corporate-travel-recovery",
                    desc: "Master vertical playbook for hotels, banquet venues, MICE organizers & IATA TMCs.",
                    icon: Building2,
                  },
                  {
                    title: "Hotel 'Bill-to-Company' (BTC) City-Ledger Recovery",
                    href: "/hotel-btc-bill-to-company-corporate-credit-account-default-recovery",
                    desc: "Convert 90+ day corporate BTC emails, GRCs & GSTR-2B claims into Order 37 suits.",
                    icon: Receipt,
                  },
                  {
                    title: "IATA Travel Agent (TMC) Flight Credit Default Recovery",
                    href: "/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery",
                    desc: "Recover corporate flight, LCC wallet & hotel BTC defaults before BSP auto-debit.",
                    icon: Scale,
                  },
                  {
                    title: "Banquet & Wedding Post-Event Cheque Bounce Recovery",
                    href: "/banquet-hall-destination-wedding-post-event-balance-cheque-bounce",
                    desc: "Enforce NI Act s.138 & 20% s.143A relief on stopped wedding balance cheques.",
                    icon: FileText,
                  },
                  {
                    title: "OTA & B2B Bed-Bank Withheld Hotel Payout Recovery",
                    href: "/ota-b2b-bedbank-withheld-hotel-payout-arbitrary-chargeback-recovery",
                    desc: "Recover frozen OTA extranet settlements and declined Virtual Credit Cards (VCCs).",
                    icon: Calculator,
                  },
                  {
                    title: "Section 138 Cheque Bounce Notice Timeline (30+15 Day)",
                    href: "/cheque-bounce-notice-timeline-section-138",
                    desc: "Mandatory statutory deadlines for stopped corporate advance or MICE balance cheques.",
                    icon: FileCheck2,
                  },
                  {
                    title: "Business Dues & Commercial Ledger Recovery",
                    href: "/recovery/business-dues",
                    desc: "Institutional B2B recovery workflow for overdue corporate contracts and invoices.",
                    icon: Scale,
                  },
                  {
                    title: "Bulk Legal Notice Dispatch (Email + WhatsApp + RPAD)",
                    href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
                    desc: "Send 10 to 10,000+ statutory demand notices with BSA s.63 delivery logs.",
                    icon: ArrowRight,
                  },
                ].map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={idx}
                      href={link.href}
                      className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                    >
                      <Icon className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {link.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">{link.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: MICE Attrition &amp; Cancellation
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 sm:p-5 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Bare Acts, Supreme Court Precedents &amp; References
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline inline-flex items-center gap-1"
                    >
                      <span>{src.title}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
