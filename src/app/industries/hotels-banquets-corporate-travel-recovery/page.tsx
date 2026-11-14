import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HotelsTravelHubTableOfContents from "./HotelsTravelHubTableOfContents";
import HotelsTravelHubScenarioTabs from "./HotelsTravelHubScenarioTabs";
import HotelsTravelHubCTA from "./HotelsTravelHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/hotels-banquets-corporate-travel-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Hotels, Banquets & Corporate Travel (TMC) Debt Recovery";
const PAGE_DESCRIPTION =
  "Recover overdue 'Bill-to-Company' (BTC) hotel accounts, IATA BSP corporate ticket defaults, dishonoured wedding banquet balances & MICE attrition charges.";
const H1_TEXT =
  "Commercial Credit & Ledger Recovery for Hotels, Resorts, Banquet Venues, IATA Corporate Travel Desks & Caterers";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
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

interface IndustrySpoke {
  id: string;
  archetype: "G1" | "P1";
  archetypeLabel: string;
  track: "corporate-aviation" | "venues-ota" | "catering-dmc-templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_16_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-191",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "corporate-aviation",
    title: "Hotel 'Bill-to-Company' (BTC) City-Ledger Account Default Recovery",
    url: "/hotel-btc-bill-to-company-corporate-credit-account-default-recovery",
    statute: "Order XXXVII CPC + PMS GRCs + GSTR-2B Estoppel",
    summary:
      "Turn email BTC stay approvals, signed Guest Registration Cards, and accepted GST invoices into fast summary recovery suits.",
  },
  {
    id: "B2B-192",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "corporate-aviation",
    title: "IATA Corporate Travel Agent (TMC): Flown Air-Ticket Credit Recovery",
    url: "/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery",
    statute: "Order XXXVII + Order XXXVIII R.5 + Flown PNR Logs",
    summary:
      "Shield your IATA BSP weekly settlement and LCC wallets using flown 13-digit ticket schedules and pre-judgment bank attachment.",
  },
  {
    id: "B2B-198",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "corporate-aviation",
    title: "Private Charter (Jet/Heli) & Luxury Tourist Coach Fleet Receivables",
    url: "/charter-flight-luxury-coach-yacht-corporate-hire-payment-recovery",
    statute: "DGCA Tech-Logs + Order XXXVII CPC + Contract s.73",
    summary:
      "Enforce NSOP block flying hours, ATC holding overruns, and empty-leg ferry charges after weddings or corporate roadshows.",
  },
  {
    id: "B2B-193",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "venues-ota",
    title: "Wedding Host 'Stop Payment' on Banquet & Resort Checkout Cheque",
    url: "/banquet-hall-destination-wedding-post-event-balance-cheque-bounce",
    statute: "NI Act s.138/s.143A + Captain Extra-Pax Slips",
    summary:
      "Prosecute 3 AM checkout stop-payment cheques and defeat post-event 'cold food' excuses using signed extra-plate and bar KOTs.",
  },
  {
    id: "B2B-195",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "venues-ota",
    title: "Corporate MICE & Offsite Room-Block Attrition & Cancellation Recovery",
    url: "/mice-corporate-offsite-conference-attrition-last-minute-cancellation-recovery",
    statute: "Contract Act s.74 Perishable Inventory (Kailash Nath)",
    summary:
      "Substantiate sliding-scale 7–15 day cancellation fees using audited PMS unsold occupancy logs for perishable hotel room-nights.",
  },
  {
    id: "B2B-194",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "venues-ota",
    title: "OTAs & B2B Bed-Banks Withholding Hotel Payouts or Declining VCCs",
    url: "/ota-b2b-bedbank-withheld-hotel-payout-arbitrary-chargeback-recovery",
    statute: "MSMED s.15–18 (Service MSME) + Extranet Audits",
    summary:
      "Challenge unilateral guest-relocation penalties, expired Virtual Credit Cards, and frozen OTA settlements as an Udyam hotelier.",
  },
  {
    id: "B2B-196",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "catering-dmc-templates",
    title: "Industrial Canteen, Corporate Cafeteria & Hostel Mess Bill Recovery",
    url: "/industrial-canteen-corporate-cafeteria-institutional-caterer-bill-recovery",
    statute: "MSMED s.15–18 + IT Act s.43B(h) + Biometric Meal Logs",
    summary:
      "Unlock 4 months of stalled factory, hospital, or college meal invoices and neutralize backdated un-sampled hygiene fines.",
  },
  {
    id: "B2B-197",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "catering-dmc-templates",
    title: "B2B DMC (Destination Management Company) Fake-UTR & Land Package Recovery",
    url: "/b2b-dmc-destination-management-company-tour-operator-default-recovery",
    statute: "BNS 2023 s.318 & s.336/340 Forgery + NI s.138",
    summary:
      "Counter Friday-evening edited NEFT/SWIFT PDF scams by combining civil summary recovery with electronic forgery prosecution.",
  },
  {
    id: "B2B-199",
    archetype: "P1",
    archetypeLabel: "P1 Notice Pack",
    track: "catering-dmc-templates",
    title: "Hospitality & Travel Credit Legal Notice Pack (Hotel BTC + Flown PNR)",
    url: "/templates/hotel-btc-and-iata-travel-agent-corporate-credit-legal-notice",
    statute: "Order XXXVII CPC + MSMED s.16 + NI Act s.138",
    summary:
      "Advocate-drafted commercial notice formats embedding Guest Folio, BTC Voucher, GDS PNR, and 13-digit Ticket Schedules.",
  },
];

const SPOKE_TRACKS: {
  key: IndustrySpoke["track"];
  heading: string;
  badgeClass: string;
}[] = [
  {
    key: "corporate-aviation",
    heading: "Track A — Hotel BTC City Ledgers, IATA TMC Airfares & Charter Fleets",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "venues-ota",
    heading: "Track B — Banquet Checkout Cheques, MICE Attrition & OTA Payout Holds",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "catering-dmc-templates",
    heading: "Track C — Industrial Canteens, B2B DMCs & Dedicated Notice Pack",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    citation: "Code of Civil Procedure, 1908 — Order XXXVII & Order XXXVIII Rule 5 (+ CGST s.16)",
    title: "Summary Judgment & Pre-Judgment Attachment on BTC Emails, GRCs & Flown PNRs",
    parties: "Business Hotel Financial Controllers & IATA Travel Management Companies",
    holding:
      "Corporate BTC email approvals, signed hotel Guest Registration Cards (GRCs), GDS 13-digit ticket numbers marked 'Flown', and NSOP charter flight tech-logs qualify as written liquidated debt instruments under Order XXXVII CPC. Where a corporate client or retail travel agent signals asset dissipation, Order XXXVIII Rule 5 (subject to Raman Tech. & Process Engg. Co. v. Solanki Traders evidentiary standards) supports urgent bank-account attachment—reinforced by CGST GSTR-2B credit acceptance estoppel.",
    impact:
      "Strips away automatic defense rights in civil recovery suits and forces CFOs who already booked GST credit to pay without years of trial delay.",
  },
  {
    citation: "Negotiable Instruments Act, 1881 — Sections 138, 139, 141 & 143A",
    title: "Strict Criminal Liability on Post-Wedding 'Stop Payment' Checkout Cheques",
    parties: "M.M.T.C. Ltd. v. Medchl Chemicals (SC) & Sripati Singh v. State of Jharkhand (SC)",
    holding:
      "Supreme Court precedent confirms that issuing a 'Stop Payment' instruction triggers full criminal prosecution under Section 138 NI Act, and statutory presumption under Section 139 places the heavy burden on the wedding host or corporate drawer to prove zero enforceable debt existed. Equally, under Sripati Singh, security PDCs handed for corporate credit lines become prosecutable once crystallized on default, unlocking up to 20% interim compensation under Section 143A.",
    impact:
      "Paired with signed banquet captain extra-plate dockets, bar KOTs, and CCTV wristband tallies, Section 138 dismantles morning-after 'cold food' pretexts.",
  },
  {
    citation: "Indian Contract Act, 1872 — Sections 73 & 74 (Perishable Room-Night Inventory)",
    title: "Enforcing Sliding-Scale MICE Attrition Clauses After Kailash Nath v. DDA",
    parties: "Convention Resorts, MICE Organizers & Corporate Conference Venues",
    holding:
      "Under Section 74 as clarified in Kailash Nath Associates v. DDA (2015), liquidated cancellation damages require reasonable proof of actual loss unless loss is impossible to compute. Because unsold hotel room-nights and banquet halls perish permanently once an event date passes, audited PMS occupancy logs showing empty rooms on the cancelled weekend—combined with turned-away wedding or group booking inquiries—establish genuine pre-estimated loss.",
    impact:
      "Protects sliding-scale 15-day and 7-day MICE attrition slabs from arbitrary judicial haircut while cleanly accounting for any resold rooms.",
  },
  {
    citation: "MSMED Act s.15–19, Income-tax Act s.43B(h) & BNS 2023 s.318 / s.336 / s.340",
    title: "Service-MSME 3x Interest, March 31 Tax Pressure & Fake-UTR Forgery Action",
    parties: "Udyam Hotels, TMCs, Industrial Caterers & Inbound/Outbound DMCs",
    holding:
      "Udyam-registered Micro and Small hospitality businesses—spanning independent hotels, IATA TMCs, MICE organizers, and industrial caterers—qualify as Service Enterprises under MSMED Act Sections 15–18 for a 45-day payment ceiling, mandatory 3x RBI Bank Rate monthly compound interest, 75% buyer pre-deposit under s.19, and Income-tax Act Section 43B(h) disallowance. Separately, altered NEFT or SWIFT screenshots sent to DMCs trigger cognizable electronic forgery charges under BNS Sections 336 and 340.",
    impact:
      "Gives thin-margin travel, catering, and boutique hotel operators decisive fiscal and criminal escalation against willful corporate and intermediary defaulters.",
  },
];

const FAQS = [
  {
    question:
      "How can a business hotel recover an aged 120+ day 'Bill-to-Company' (BTC) invoice if the corporate says the employee left or F&B was unauthorized?",
    answer:
      "Compile the original BTC authorization email or corporate rate agreement, signed PMS Guest Registration Card (GRC), itemized room/F&B folio, and GSTR-1/GSTR-2B reflection showing the corporate claimed GST input credit on your bill. Once ITC is booked, post-checkout denials collapse under estoppel, and the admitted ledger supports a fast Order XXXVII CPC summary suit and MSMED Section 43B(h) tax-disallowance notice.",
  },
  {
    question:
      "Our IATA travel agency (TMC) faces weekly BSP auto-debits while a corporate client defaulted on ₹35 Lakh of flown tickets—what is the fastest legal action?",
    answer:
      "Extract a PNR-wise manifest showing 13-digit GDS ticket numbers, passenger names, travel sectors, and 'Flown' coupon status alongside corporate booking emails. Serve an immediate 7-day advocate demand on the CFO and Directors warning of an Order XXXVII CPC summary suit, urgent Order XXXVIII Rule 5 pre-judgment bank attachment, Section 138 prosecution on security cheques, and MSMED Section 43B(h) disallowance.",
  },
  {
    question:
      "What can a wedding venue or resort do if the host hands over an extra-pax balance cheque at 3 AM checkout and issues 'Stop Payment' the next morning?",
    answer:
      "Do not treat 'Stop Payment' as an ordinary civil dispute. Preserving banquet captain countersigned extra-plate dockets, bar POS receipts, room-extension folios, and gate/wristband CCTV logs destroys belated 'cold food' excuses. Serve a mandatory Section 138 NI Act statutory demand notice within 30 days of the bank return memo to trigger criminal prosecution and seek up to 20% interim compensation under Section 143A.",
  },
  {
    question:
      "How do convention hotels enforce MICE room-block attrition or last-minute offsite cancellation penalties under Section 74 of the Contract Act?",
    answer:
      "Hotel room-nights are 100% time-perishable inventory. Under Kailash Nath Associates v. DDA, substantiate your sliding-scale 15-day or 7-day attrition invoice with Property Management System (PMS) occupancy reports proving rooms remained unsold on those dates, together with turned-away booking leads, crediting any walk-in rooms actually resold.",
  },
  {
    question:
      "Can independent Udyam-registered hotels, travel agencies, and industrial caterers use MSME Samadhaan and Section 43B(h) against corporate buyers or OTAs?",
    answer:
      "Yes. Hotels, resorts, corporate travel agencies (TMCs), MICE organizers, and industrial canteen contractors holding Udyam Micro or Small Service registration are protected under MSMED Act Sections 15–18 (3x RBI Bank Rate compound interest and 75% buyer appeal pre-deposit) and Section 43B(h) of the Income-tax Act, which disallows overdue payments on the corporate buyer's P&L.",
  },
  {
    question:
      "A retail travel agent sent an edited NEFT/SWIFT UTR PDF on arrival morning and never paid our DMC land package—does criminal law apply?",
    answer:
      "Yes. Submitting a doctored bank remittance or SWIFT screenshot to induce hotel check-ins and ground transport goes beyond civil debt breach. Pairing a commercial demand with a pre-FIR complaint notice under Bharatiya Nyaya Sanhita (BNS), 2023 Section 318 (cheating) and Sections 336/340 (forgery of electronic records) compels rapid clearing.",
  },
  {
    question:
      "Can our hotel chain, banquet group, or travel agency test LegalRecovery.in on one overdue corporate account before uploading our City Ledger CSV?",
    answer:
      "Yes. Hotels, TMCs, venues, and caterers can run one live overdue invoice, bounced banquet cheque, or defaulted BTC ledger for ₹999 (advocate-drafted and dispatched via Email, Business WhatsApp, and Speed Post RPAD) and then scale to 10–10,000+ overdue accounts inside our bulk CSV and multi-property Representees workspace.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 139, 141 & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 73 & 74 Liquidated Damages) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "MSMED Act, 2006 & MSME Samadhaan Portal (Sections 15–19) — Ministry of MSME",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Income-tax Act, 1961 Section 43B(h) (Micro & Small Service Dues) — Income Tax India",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title: "Bharatiya Nyaya Sanhita (BNS), 2023 (Sections 318, 336 & 340) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Electronic Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
  {
    title: "Directorate General of Civil Aviation (DGCA) NSOP Journey Log & Charter Rules — Gov.in",
    url: "https://www.dgca.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType:
    "Commercial Credit & Debt Recovery for Hotels, Resorts, Banquet Venues, IATA TMCs, MICE Organizers, DMCs & Industrial Caterers",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Hotel Financial Controllers, General Managers, IATA Travel Management Companies (TMCs), Banquet Venue Owners, MICE Organizers, DMCs & Industrial Caterers",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/user/new-recovery`,
  },
  mainEntityOfPage: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-16 Hotels, Banquets & Corporate Travel (TMC) Recovery Spokes & Notice Pack",
  numberOfItems: IND_16_SPOKES.length,
  itemListElement: IND_16_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hotels, Banquets & Corporate Travel Recovery",
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

export default function HotelsBanquetsCorporateTravelRecoveryHubPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Hotels, Banquets & Corporate Travel Recovery", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
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
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-16 Hospitality, Banquet &amp; TMC Pillar Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>Order 37 &bull; NI s.138 &bull; Contract s.74 &bull; MSMED</span>
              <span className="text-red-500">&bull;</span>
              <span>Hotels, TMCs, MICE &amp; Caterers</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (Hotel Controllers, IATA TMCs &amp; Venue Owners)
              </span>
              <p>
                Hotels, resorts, banquet venues, IATA corporate travel desks, DMCs, and industrial caterers recover aged City-Ledger (&lsquo;Bill-to-Company&rsquo;) accounts, flown-PNR ticket credit, post-wedding stop-payment cheques, and MICE attrition dues by converting PMS folios, GDS ticket schedules, captain pax slips, and GSTR-2B acceptances into Order XXXVII summary suits, NI Act s.138 prosecutions, and MSMED s.43B(h) claims.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &rupee;1L&ndash;&rupee;2Cr+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  BTC City Ledgers, Flown Airfares &amp; Charters
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  7-Day BSP Clock
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Urgent Order 38 R.5 &amp; s.138 PNR Protection
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  s.138 + s.74
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Stop-Payment Banquets &amp; Perishable MICE
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  &rupee;999 &rarr; CSV
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  1 Live Account Test to Chain City-Ledger Batch
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
              Hospitality &amp; Travel Creditor Architecture Reviewed by{" "}
              <Link href="/authors/anuj-anand-malik" className="text-slate-200 underline hover:text-white font-semibold">
                Anuj Anand Malik
              </Link>
              , Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 2026
            </p>
          </div>
        </section>

        {/* Main 2-Column Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky TOC */}
            <HotelsTravelHubTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h2
                      id="heading-overview-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Why Hotels, Banquets &amp; IATA Agents Bleed Corporate Credit
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Closing India&apos;s Creditor-Side Gap for Hotel Controllers, TMCs, Wedding Venues, MICE Properties, DMCs &amp; Caterers
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Virtually every hospitality and travel dispute page online addresses guests or wedding families seeking advance refunds from hotels, airlines, or marriage halls. Yet across India&apos;s hotels, convention venues, corporate travel agencies (TMCs), destination management companies (DMCs), charter fleets, and institutional kitchens, the reverse balance-sheet crisis is far larger: corporate clients, event hosts, OTA intermediaries, and retail tour agents consume perishable rooms, flown seats, banquet inventory, and daily cash rations upfront—and then stall crores on City Ledgers. Alongside our foundational{" "}
                    <Link href="/recovery/business-dues" className="text-[#DC2626] font-semibold underline">
                      commercial business dues recovery guide
                    </Link>{" "}
                    and{" "}
                    <Link href="/cheque-bounce-notice-timeline-section-138" className="text-[#DC2626] font-semibold underline">
                      Section 138 cheque-bounce timeline protocol
                    </Link>
                    , hospitality and aviation creditors require industry-tailored statutory enforcement that prevents working-capital collapse.
                  </p>
                  <p>
                    Consider the acute weekly cashflow trap facing IATA-accredited Travel Management Companies (TMCs): TMCs earn razor-thin 1%–3% service fees while extending 30-day credit to startups, IT companies, and export houses—yet IATA Billing and Settlement Plan (BSP) auto-debits 100% of ticket fares every 7 days and LCC wallets (IndiGo, Air India) demand prepaid deposits. A single ₹35L–₹50L corporate airfare default threatens the travel agency&apos;s own IATA Bank Guarantee and operating survival. Similarly, hotel Financial Controllers watch 90–180+ day &lsquo;Bill-to-Company&rsquo; (BTC) ledgers balloon after corporate project teams check out and finance controllers suddenly dispute laundry, F&amp;B, or resigned employees—even after claiming Input Tax Credit in GSTR-2B.
                  </p>
                  <p>
                    Meanwhile, destination wedding venues and luxury resorts face hosts who beg for extra suites, bar tabs, and 150 extra guests during wedding pheras, tender a balance cheque at 3 AM checkout, and issue &lsquo;Stop Payment&rsquo; next morning citing fabricated &ldquo;cold food&rdquo; complaints. Convention hotels suffer 7-day corporate MICE offsite cancellations on perishable room blocks; factory and hostel mess caterers absorb 4 months of unpaid thali bills while paying daily cash for vegetables and LPG; and DMCs get ambushed on Friday evenings by doctored NEFT/SWIFT UTR screenshots as tourists arrive at the airport. Using automated{" "}
                    <Link href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution" className="text-[#DC2626] font-semibold underline">
                      Email, WhatsApp &amp; Speed Post RPAD legal notice dispatch
                    </Link>
                    , this IND-16 Pillar Hub turns property folios, flown PNR records, and captain pax slips into fast corporate realizations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      BTC &amp; Flown-PNR Proof
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Order 37 + GSTR-2B
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Convert signed Guest Registration Cards, BTC emails, and 13-digit flown tickets into summary court recovery.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Banquet &amp; MICE Shield
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      NI s.138 + Contract s.74
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Prosecute stopped checkout cheques (with 20% s.143A relief) and prove unsold perishable MICE room losses.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Catering, OTA &amp; DMC
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      s.43B(h) + BNS s.336
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Trigger March 31 tax disallowance for Udyam hotels/caterers and BNS electronic forgery action on fake UTRs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: 8-Track Escalation Matrix */}
              <section
                id="heading-escalation-matrix"
                aria-labelledby="heading-escalation-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="heading-escalation-matrix-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      8-Track Hospitality, TMC, Banquet &amp; Catering Recovery Matrix
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Sub-Vertical Ticket Band, Primary Statutory Lever, Cure Window &amp; Target Enforcement Forum Across IND-16
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[740px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Hospitality / Travel Sub-Vertical</th>
                        <th className="p-3.5 border-b border-slate-800">Typical Ticket</th>
                        <th className="p-3.5 border-b border-slate-800">Primary Statutory Lever</th>
                        <th className="p-3.5 border-b border-slate-800">Cure / Notice Window</th>
                        <th className="p-3.5 border-b border-slate-800">Target Enforcement Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Corporate &lsquo;Bill-to-Company&rsquo; (BTC) Hotel City Ledgers
                        </td>
                        <td className="p-3.5">&rupee;1.5L&ndash;&rupee;80L</td>
                        <td className="p-3.5">BTC Emails + Signed GRCs + GSTR-2B Estoppel</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">15-Day CFO Demand</td>
                        <td className="p-3.5">Order XXXVII CPC / MSEFC / Commercial Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          IATA Corporate Travel Agent (TMC) Airfare Credit
                        </td>
                        <td className="p-3.5">&rupee;5L&ndash;&rupee;2Cr+</td>
                        <td className="p-3.5">13-Digit Flown PNRs + Order XXXVIII R.5 Freeze</td>
                        <td className="p-3.5 font-semibold text-amber-700">7-Day Urgent BSP Notice</td>
                        <td className="p-3.5">Order XXXVII Summary Suit / s.138 Security PDC</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Destination Wedding &amp; Banquet Checkout Cheques
                        </td>
                        <td className="p-3.5">&rupee;3L&ndash;&rupee;60L</td>
                        <td className="p-3.5">NI Act s.138/s.143A + Captain Extra-Pax Slips</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">30d Memo / 15d Cure</td>
                        <td className="p-3.5">Judicial Magistrate s.138 (20% Interim Relief)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          OTA Extranet Payout Holds, Declined VCCs &amp; Bed-Banks
                        </td>
                        <td className="p-3.5">&rupee;1.5L&ndash;&rupee;45L</td>
                        <td className="p-3.5">MSMED s.15&ndash;18 (Service MSME) + BSA s.63 Logs</td>
                        <td className="p-3.5 font-semibold text-emerald-700">15-Day Nodal Reconciliation</td>
                        <td className="p-3.5">MSEFC Samadhaan (3x Interest) / Commercial Arb</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Corporate MICE Offsite Room-Block Attrition &amp; Cancels
                        </td>
                        <td className="p-3.5">&rupee;5L&ndash;&rupee;1.5Cr</td>
                        <td className="p-3.5">Contract Act s.74 + Audited PMS Unsold Logs</td>
                        <td className="p-3.5">15-Day Attrition Invoice</td>
                        <td className="p-3.5">Commercial Court s.12A Mediation / Order XXXVII</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Industrial Canteen, Hospital &amp; Hostel Mess Caterers
                        </td>
                        <td className="p-3.5">&rupee;2L&ndash;&rupee;75L</td>
                        <td className="p-3.5">MSMED s.15&ndash;18 + IT Act s.43B(h) + Biometric Meals</td>
                        <td className="p-3.5 font-semibold text-emerald-700">15-Day s.43B(h) Warning</td>
                        <td className="p-3.5">MSEFC Conciliation / Arbitration (75% Appeal Deposit)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          B2B DMC Land Packages &amp; Fake UTR / SWIFT Scams
                        </td>
                        <td className="p-3.5">&rupee;2L&ndash;&rupee;90L</td>
                        <td className="p-3.5">BNS 2023 s.318 &amp; s.336/340 Forgery + NI s.138</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">48-Hr Pre-FIR Ultimatum</td>
                        <td className="p-3.5">EOW / SHO Forgery Complaint + Commercial Recovery</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          NSOP Air-Charter (Jet/Heli) &amp; Luxury Coach Fleets
                        </td>
                        <td className="p-3.5">&rupee;8L&ndash;&rupee;2Cr</td>
                        <td className="p-3.5">DGCA Journey Tech-Logs + Signed Charter Charterparty</td>
                        <td className="p-3.5">7&ndash;15 Day Balance Demand</td>
                        <td className="p-3.5">Commercial Court Order XXXVII / Arbitration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: SVG Workflow Architecture + Mobile Stacked Cards */}
              <section
                id="heading-workflow-architecture"
                aria-labelledby="heading-workflow-architecture-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="heading-workflow-architecture-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      7-Day IATA BSP &amp; Guest-Folio to Decree Enforcement Pipeline
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      5-Stage Creditor Workflow Linking Folio/PNR Verification, Tri-Channel Service &amp; Rapid Forum Action
                    </p>
                  </div>
                </div>

                {/* Desktop Hand-Authored SVG Pipeline */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={310}
                    viewBox="0 0 920 310"
                    role="img"
                    aria-label="5-stage hotel BTC, IATA travel agent, banquet and catering legal recovery pipeline"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="310" rx="12" fill="#0F172A" />
                    <text x="24" y="34" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1.2">
                      LEGALRECOVERY.IN &bull; IND-16 HOSPITALITY, TMC &amp; BANQUET RECOVERY ENGINE
                    </text>

                    {/* Stage 1 */}
                    <rect x="24" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="48" cy="84" r="13" fill="#DC2626" />
                    <text x="48" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                    <text x="70" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Ledger Lock</text>
                    <text x="36" y="116" fill="#CBD5E1" fontSize="10.5">BTC Mail &amp; PMS GRCs</text>
                    <text x="36" y="134" fill="#CBD5E1" fontSize="10.5">GDS 13-Digit Flown PNR</text>
                    <text x="36" y="152" fill="#CBD5E1" fontSize="10.5">Extra-Pax &amp; Tech-Logs</text>
                    <rect x="36" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="44" y="198" fill="#34D399" fontSize="10" fontWeight="700">BSA s.63 Hash</text>
                    <text x="44" y="216" fill="#94A3B8" fontSize="9.5">Locks checkout proof</text>

                    <path d="M180 156 L202 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="202,151 212,156 202,161" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="212" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="236" cy="84" r="13" fill="#DC2626" />
                    <text x="236" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                    <text x="258" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Statute Hook</text>
                    <text x="224" y="116" fill="#CBD5E1" fontSize="10.5">GSTR-2B ITC Estoppel</text>
                    <text x="224" y="134" fill="#CBD5E1" fontSize="10.5">NI s.138 / Contract s.74</text>
                    <text x="224" y="152" fill="#CBD5E1" fontSize="10.5">MSMED 3x + s.43B(h)</text>
                    <rect x="224" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="232" y="198" fill="#FBBF24" fontSize="10" fontWeight="700">BNS s.336 Check</text>
                    <text x="232" y="216" fill="#94A3B8" fontSize="9.5">Flags fake UTR PDFs</text>

                    <path d="M368 156 L390 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,151 400,156 390,161" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="424" cy="84" r="13" fill="#DC2626" />
                    <text x="424" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                    <text x="446" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Tri-Channel</text>
                    <text x="412" y="116" fill="#CBD5E1" fontSize="10.5">CFO &amp; Director Email</text>
                    <text x="412" y="134" fill="#CBD5E1" fontSize="10.5">WATI Business WhatsApp</text>
                    <text x="412" y="152" fill="#CBD5E1" fontSize="10.5">India Post RPAD</text>
                    <rect x="412" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="420" y="198" fill="#34D399" fontSize="10" fontWeight="700">Executive Reach</text>
                    <text x="420" y="216" fill="#94A3B8" fontSize="9.5">Bypasses admin stalls</text>

                    <path d="M556 156 L578 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="578,151 588,156 578,161" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="588" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="612" cy="84" r="13" fill="#DC2626" />
                    <text x="612" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                    <text x="634" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Cure &amp; Triage</text>
                    <text x="600" y="116" fill="#CBD5E1" fontSize="10.5">7-Day BSP / 15-Day BTC</text>
                    <text x="600" y="134" fill="#CBD5E1" fontSize="10.5">Rebut Food/F&amp;B Excuses</text>
                    <text x="600" y="152" fill="#CBD5E1" fontSize="10.5">Log s.18 Part-Payment</text>
                    <rect x="600" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="608" y="198" fill="#FBBF24" fontSize="10" fontWeight="700">SHO / EOW Option</text>
                    <text x="608" y="216" fill="#94A3B8" fontSize="9.5">When UTR is forged</text>

                    <path d="M744 156 L766 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="766,151 776,156 766,161" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="776" y="58" width="120" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="800" cy="84" r="13" fill="#10B981" />
                    <text x="800" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                    <text x="820" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum</text>
                    <text x="788" y="116" fill="#CBD5E1" fontSize="10.5">Order 37 + O.38 R.5</text>
                    <text x="788" y="134" fill="#CBD5E1" fontSize="10.5">s.138 + 20% s.143A</text>
                    <text x="788" y="152" fill="#CBD5E1" fontSize="10.5">MSEFC 3x Interest</text>
                    <rect x="788" y="178" width="96" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="794" y="198" fill="#34D399" fontSize="10" fontWeight="700">Cash Realized</text>
                    <text x="794" y="216" fill="#94A3B8" fontSize="9.5">Principal + Interest</text>

                    <text x="24" y="286" fill="#94A3B8" fontSize="10">
                      Every notice preserves Bar Council standards, Section 63 BSA evidence logs, and hotel-SPV or TMC-branch Representees separation.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      num: "01",
                      title: "Ledger Lock & BSA s.63 Certification",
                      desc: "Bundle BTC approval emails, PMS Guest Registration Cards, GDS 13-digit flown PNRs, extra-pax slips, or DGCA tech-logs.",
                    },
                    {
                      num: "02",
                      title: "Statutory Hook Selection",
                      desc: "Attach GSTR-2B credit estoppel, NI s.138 stop-payment liability, Contract s.74 attrition logs, or BNS s.336 forgery alerts.",
                    },
                    {
                      num: "03",
                      title: "Tri-Channel CFO & Host Dispatch",
                      desc: "Serve corporate finance controllers, company directors, wedding hosts, and OTA desks via Email, WhatsApp, and Speed Post RPAD.",
                    },
                    {
                      num: "04",
                      title: "7/15-Day Cure & Excuse Rebuttal",
                      desc: "Dismantle post-checkout F&B, cold-food, or un-sampled canteen quality excuses and capture Section 18 limitation resets.",
                    },
                    {
                      num: "05",
                      title: "Order 37, s.138 & MSEFC Enforcement",
                      desc: "Convert non-payment into summary suits, Order 38 Rule 5 bank attachments, s.143A 20% relief, or 3x RBI interest awards.",
                    },
                  ].map((stage) => (
                    <div
                      key={stage.num}
                      className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-black text-xs flex items-center justify-center shrink-0">
                        {stage.num}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{stage.title}</p>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Interactive 4-Tab Scenario Explorer */}
              <section
                id="heading-scenario-playbooks"
                aria-labelledby="heading-scenario-playbooks-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h2
                        id="heading-scenario-playbooks-title"
                        className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Interactive Playbooks: BTC Hotels, TMCs, Banquets &amp; Caterers
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Select Your Hospitality or Travel Sub-Vertical to Inspect Bottlenecks, Statutory Hooks &amp; 3-Step Execution
                      </p>
                    </div>
                  </div>
                  <HotelsTravelHubScenarioTabs />
                </div>
              </section>

              {/* Section 5: City-Ledger, Flown-PNR & Multi-Property Dispatch Desk */}
              <section
                id="heading-ledger-engine"
                aria-labelledby="heading-ledger-engine-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="heading-ledger-engine-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      City-Ledger Folio, Flown-PNR &amp; Multi-Property Dispatch Desk
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Production B2B Infrastructure Built for Hotel Finance Teams, Multi-Branch TMCs, Banquet Chains &amp; Caterers
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Multi-Folio &amp; PNR Schedule Bundling (invoices[])
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Hundreds of Checkouts or Flight Tickets in One Demand
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Attach itemized hotel Guest Folios, room-night dates, GDS PNR / 13-digit airline ticket numbers, or monthly cafeteria bills inside a unified statutory demand schedule rather than sending piecemeal payment reminders.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Multi-Hotel SPV &amp; TMC Branch Isolation
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Separate GSTINs &amp; Signatories Inside Representees
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Managing multiple resorts, franchise properties, or regional TMC branches? Operate every SPV entity cleanly inside the{" "}
                      <Link href="/user/representees" className="text-[#DC2626] font-semibold underline">
                        Representees portal
                      </Link>{" "}
                      with property-level GSTINs, Udyam numbers, and credit controllers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Bypass Travel-Desk Delays to Corporate CFOs
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Joint Service on Directors &amp; Registered Offices
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Admin executives routinely sit on overdue BTC folios and PNR bills for months. Tri-channel dispatch serves corporate CFOs and active directors directly—linking personal liability rules for{" "}
                      <Link href="/cheque-bounce-case-against-company-directors" className="text-[#DC2626] font-semibold underline">
                        bounced corporate cheques under Section 141
                      </Link>{" "}
                      with BSA Section 63 delivery proof.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      4. Fake-UTR Police CC &amp; Batch Triage
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Pre-FIR Forgery Notices &amp; Reply Reconciliation
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When an agent transmits an altered NEFT/SWIFT PDF to a DMC or banquet venue, deploy pre-FIR BNS s.336/340 forgery alerts alongside centralized inbound reply triage capturing settlement schedules and UTR confirmations.
                    </p>
                  </div>
                </div>

                <div id="heading-cta-block" className="scroll-mt-28 pt-2">
                  <HotelsTravelHubCTA />
                </div>
              </section>

              {/* Section 6: Binding Statutory & Judicial Rules */}
              <section
                id="heading-statutory-precedents"
                aria-labelledby="heading-statutory-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="heading-statutory-precedents-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Binding Statutory &amp; Judicial Rules for Hospitality Creditors
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Verified Statutory Enactments &amp; Supreme Court Precedents Deployed Across Every Hospitality &amp; Travel Notice
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {BINDING_MANDATES.map((item) => (
                    <article
                      key={item.parties}
                      className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <span className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#DC2626]" aria-hidden="true" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                          Creditor Precedent
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{item.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.holding}</p>
                      <p className="text-xs font-bold text-slate-900 pt-1">
                        Operational Impact: <span className="font-medium text-slate-700">{item.impact}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Ledger Math */}
              <section
                id="heading-worked-economics"
                aria-labelledby="heading-worked-economics-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="heading-worked-economics-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Ledger Math: &rupee;35L Flown Air Tickets vs &rupee;14L MICE Block
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Illustrative Claim Quantification for IATA TMC BSP Defaults &amp; Perishable Resort MICE Attrition
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Hospitality and travel controllers maximize pre-litigation leverage when every demand notice itemizes exact cash outlays, mitigated room resales, and statutory tax or interest multipliers. Compare two flagship IND-16 exposures:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Case A: &rupee;35,00,000 Corporate Airfare Default (48 Flown PNRs)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Udyam-Small IATA TMC earned a 2% management fee (<strong>&rupee;70,000</strong>) while settling <strong>&rupee;35,00,000</strong> directly via weekly BSP auto-debit.</li>
                      <li>After 90 days past due, notice triggers <strong>MSMED s.16</strong> 3x RBI compound interest (~<strong>&rupee;1,70,000+</strong> accrued in 90 days) plus <strong>Section 43B(h)</strong> tax disallowance costing the corporate buyer ~&rupee;8.8L–&rupee;10.5L extra income tax if unpaid on March 31.</li>
                      <li>Backed by flown 13-digit tickets + <strong>Order XXXVII CPC</strong> &amp; <strong>Order XXXVIII Rule 5</strong> bank-attachment notice, settlement pressure flips immediately.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                      Case B: &rupee;14,40,000 MICE Block Cancelled 6 Days Prior (Contract s.74)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>A corporate booked <strong>120 rooms &times; 2 nights</strong> at &rupee;6,000/night (total <strong>&rupee;14,40,000</strong>), paid &rupee;3,00,000 advance, and cancelled 6 days before check-in under an 85% (&lt;7-day) attrition clause (&rupee;12,24,000 gross).</li>
                      <li>Resort PMS logs prove only 40 room-nights (&rupee;2,40,000) could be resold last minute, leaving <strong>200 room-nights permanently unsold</strong> (&rupee;12,00,000 perished revenue).</li>
                      <li>Crediting the &rupee;3,00,000 advance, the notice quantifies an airtight <strong>&rupee;9,00,000 net liquidated balance</strong> satisfying <em>Kailash Nath</em> loss-mitigation scrutiny.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Quantify MSME 3x Interest &amp; 3-Year Limitation Before Serving Notice</strong>
                    <span className="text-slate-300">
                      Compute exact Section 16 monthly compound interest on aged BTC/TMC ledgers and verify limitation reset dates.
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="px-3.5 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold text-center transition-colors"
                    >
                      MSME 3x Calculator &rarr;
                    </Link>
                    <Link
                      href="/tools/limitation-period-calculator"
                      className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition-colors border border-white/15"
                    >
                      Limitation Calculator &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 8: Complete 9-Spoke IND-16 Directory */}
              <section
                id="heading-spokes-directory"
                aria-labelledby="heading-spokes-directory-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="heading-spokes-directory-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Complete IND-16 Directory: All 9 Hospitality &amp; Travel Spokes
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Full Hub-and-Spoke Map Covering B2B-191 Through B2B-199 Across Hotels, TMCs, Banquets, MICE, Catering &amp; DMCs
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {SPOKE_TRACKS.map((trackGroup) => {
                    const items = IND_16_SPOKES.filter((s) => s.track === trackGroup.key);
                    return (
                      <div key={trackGroup.key} className="space-y-3.5">
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 border-l-4 border-[#DC2626] pl-3">
                          {trackGroup.heading}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {items.map((spoke) => (
                            <Link
                              key={spoke.id}
                              href={spoke.url}
                              className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#DC2626]/60 hover:shadow-sm transition-all flex flex-col justify-between gap-2.5"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <span
                                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${trackGroup.badgeClass}`}
                                  >
                                    {spoke.archetypeLabel}
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-400">{spoke.id}</span>
                                </div>
                                <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                                  {spoke.title}
                                </p>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                                  {spoke.summary}
                                </p>
                              </div>
                              <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between gap-2 text-[11px]">
                                <span className="font-semibold text-slate-500 truncate">{spoke.statute}</span>
                                <span className="font-bold text-[#DC2626] shrink-0">Open &rarr;</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 9: Live Seed Guides & Bulk Solutions */}
              <section
                id="heading-seed-resources"
                aria-labelledby="heading-seed-resources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="heading-seed-resources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Live Cheque-Bounce, Order 37, MSME &amp; Bulk Recovery Resources
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Live Statutory Playbooks, Stop-Payment Rules, Templates &amp; Bulk Dispatch Portals on LegalRecovery.in
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "Section 138 Cheque Bounce Notice Timeline (30 + 15 Day Rule)",
                      href: "/cheque-bounce-notice-timeline-section-138",
                      tag: "IND-16 Seed Guide",
                      desc: "Mandatory statutory clocks for bounced banquet checkout cheques, corporate security PDCs, and DMC agent cheques.",
                    },
                    {
                      title: "Business Dues & Commercial Ledger Recovery Guide",
                      href: "/recovery/business-dues",
                      tag: "IND-16 Seed Guide",
                      desc: "Step-by-step recovery for overdue corporate invoices, running accounts, and unacknowledged City Ledgers.",
                    },
                    {
                      title: "Bulk Notice via Email, WhatsApp & Speed Post RPAD",
                      href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
                      tag: "Tri-Channel Engine",
                      desc: "Simultaneous electronic and RPAD delivery manifests with Section 63 BSA certificates for hotel chains & TMCs.",
                    },
                    {
                      title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
                      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                      tag: "CSV Batch Desk",
                      desc: "Onboard 10 to 10,000+ aged corporate accounts, travel sub-agents, or event balances in one centralized desk.",
                    },
                    {
                      title: "Stop-Payment Cheque Bounce Legal Action Guide",
                      href: "/stop-payment-cheque-bounce-case",
                      tag: "Stop-Payment Law",
                      desc: "How Section 138 and Supreme Court rulings defeat hosts or corporate buyers who block cheques after checkout.",
                    },
                    {
                      title: "Order 37 Summary Suit for Liquidated Commercial Debt",
                      href: "/law/order-37-summary-suit-money-recovery",
                      tag: "Order 37 CPC",
                      desc: "Convert signed Guest Registration Cards, BTC emails, and GDS flown-ticket manifests into rapid civil decrees.",
                    },
                    {
                      title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
                      href: "/law/section-43bh-msme-payment-rule",
                      tag: "Tax Leverage",
                      desc: "Use March 31 income-tax expense disallowance to unlock stuck invoices for Udyam hotels, TMCs, and caterers.",
                    },
                    {
                      title: "Send Legal Notice for Business to Recover Unpaid Dues",
                      href: "/send-a-legal-notice/for-business-to-recover-their-unpaid-dues",
                      tag: "B2B Notice Portal",
                      desc: "Dispatch advocate-vetted corporate demand notices directly to Finance Controllers, CFOs, and Managing Directors.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626]/60 bg-slate-50/40 hover:bg-white transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full mb-1.5">
                          {item.tag}
                        </span>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626]">
                        Read Live Resource &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="heading-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      FAQs: Hotel BTC, IATA Travel Credit, Banquet &amp; MICE Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Statutory Answers for Hotel Controllers, IATA TMCs, Venue Promoters, DMCs &amp; Caterers
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white p-4 sm:p-5 transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-base shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Acts & Official Portals */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    11
                  </span>
                  <div>
                    <h2
                      id="heading-sources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Hospitality Statutes, Aviation Logs &amp; Official Filing Portals
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Bare Acts, Aviation Rules, Tax Disallowance Enactments &amp; Official Government Portals Referenced
                    </p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
