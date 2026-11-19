import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DgRentalTableOfContents from "./DgRentalTableOfContents";
import DgRentalScenarioTabs from "./DgRentalScenarioTabs";
import DgRentalRecoveryCTA from "./DgRentalRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/diesel-generator-dg-set-temporary-chiller-load-bank-rental-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (140 chars) — kept verbatim in <h1> and ARTICLE_SCHEMA.headline
const HERO_HEADLINE =
  "Recovering Unpaid DG Set, Chiller & Air-Compressor Hire Bills: Enforcing Minimum Monthly Hours, Logbook Sign-Offs & Contaminated-Fuel Damage";

const META_TITLE = "DG Set, Chiller & Compressor Rental Debt Recovery Guide";
const META_DESCRIPTION =
  "Clients run your 1010 kVA DG set during peak summer grid cuts, then dispute log-sheet hours, blame alternator breakdown on your machine, or delay release!";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
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
        alt: formatAltText(META_TITLE),
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
      "The Indian Contract Act, 1872 (Sections 73, 74, 148, 151, 152, 153 & 154 — Bailment Duty of Care & Damages) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17, 18 & 19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "MSME Samadhaan / ODR Delayed Payment Monitoring Portal — Ministry of MSME, Government of India",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Telematics Records & Section 121 Estoppel) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Bharatiya Nyaya Sanhita, 2023 (Sections 316 Criminal Breach of Trust & 318 Cheating) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits on Written Contracts & Invoices) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Central Pollution Control Board (CPCB IV+) Emission Standards & CAQM GRAP Directions for DG Sets",
    url: "https://cpcb.nic.in/",
  },
];

const STATUTORY_PRECEDENTS = [
  {
    title: "Supreme Court on Mandatory 75% Pre-Deposit to Challenge MSEFC Rental Awards",
    parties: "Tirupati Steels v. Shubh Industrial Component & Anr.",
    citation: "(2022) 7 SCC 429, Supreme Court of India",
    holding:
      "Under Section 19 of the MSMED Act, 2006, no court can entertain a Section 34 application setting aside an MSEFC award unless the defaulting lessee first deposits 75% of the awarded amount (including 3x RBI compound interest). For Udyam-registered DG set and chiller leasing firms, this mandatory pre-deposit eliminates frivolous appeals.",
    takeaway:
      "Register your power rental entity under Udyam before executing annual rate contracts so unpaid monthly hire bills qualify for 3x RBI interest and the 75% appeal pre-deposit shield.",
  },
  {
    title: "Supreme Court on Strict Scrutiny of Sham Defenses in Order XXXVII Summary Suits",
    parties: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
    citation: "(2017) 1 SCC 568, Supreme Court of India",
    holding:
      "Where a commercial creditor sues on a written contract, signed logbooks, and undisputed GST invoices, the defendant is not entitled to unconditional leave to defend under CPC Order XXXVII Rule 3(5) if the raised defense is moonshine, illusory, or contradicted by contemporaneous site sign-offs.",
    takeaway:
      "Counter-signed Daily Operator Logbooks paired with AMF hour-meter exports convert a disputed monthly hire bill into a summary-suit-ready liquidated claim.",
  },
  {
    title: "Supreme Court on Mandatory Pre-Institution Mediation in Commercial Suits",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    holding:
      "Section 12A of the Commercial Courts Act, 2015 is mandatory for commercial suits of ₹3 Lakh and above unless urgent interim relief (such as immediate asset attachment or an injunction against unauthorized site shifting/dismantling of a rented DG set) is sought.",
    takeaway:
      "When a lessee threatens to shift or cannibalize your CPCB IV+ generator or temporary chiller, plead urgent interim relief under Order XXXIX / Section 9 Arbitration to bypass the 12A mediation pause.",
  },
  {
    title: "Supreme Court on Dishonour of Security Cheques Issued Under Hire Contracts",
    parties: "Sripati Singh v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    holding:
      "A post-dated or security cheque handed over at the commencement of a commercial hire transaction cannot be brushed aside as mere security once monthly hire arrears or quantified engine-repair bills crystallize into a legally enforceable debt on the date of presentation.",
    takeaway:
      "Collect an undated or post-dated security cheque at mobilization alongside a signed PDC Authorization Letter so NI Act Section 138 prosecution remains live on default.",
  },
];

const LESSEE_ENFORCEMENT_MATRIX = [
  {
    lesseeType: "Factories & Industrial Plants (MIDC, Manesar, Bhiwadi, Sanand)",
    assetScope: "500–2000 kVA DG Sets, Oil-Free Compressors, Process Chillers",
    typicalDispute:
      "Refusal to pay 200-hour minimum monthly standby hire during monsoon grid stability; engine seizure from cheap adulterated diesel.",
    primaryRemedy:
      "Contract Act ss.73 & 151–152 + MSMED Act ss.15–18 (3x RBI Compound Interest) + Income Tax s.43B(h) disallowance leverage.",
    timeline: "15-Day Demand -> 45-Day MSME Trigger -> 90-Day MSEFC Award",
  },
  {
    lesseeType: "Private Hospitals & Healthcare Chains (24x7 Critical Backup)",
    assetScope: "250–1010 kVA Acoustic DG Sets, AMF Panels, Temporary HVAC Chillers",
    typicalDispute:
      "Delaying monthly rentals for 120–180 days citing TPA/insurance cashflow while refusing demobilization citing patient-safety dependency.",
    primaryRemedy:
      "Order XXXVII Summary Suit on signed logbooks + Commercial Court s.12A + Formal 72-Hour Substitute-Power Notice before lawful cut-off.",
    timeline: "15-Day Statutory Notice -> Order 37 Filing / s.12A Mediation",
  },
  {
    lesseeType: "Commercial Malls, IT Parks & Data Centers (NCR, Mumbai, Bengaluru)",
    assetScope: "Synchronized 1010–1500 kVA DG Sets, Resistive/Reactive Load Banks",
    typicalDispute:
      "Deductions for alleged voltage/frequency fluctuations or refusal to pay load-bank testing and mobilization/demobilization crane charges.",
    primaryRemedy:
      "BSA 2023 s.63 AMF/SCADA telemetry proof + Estoppel under BSA s.121 + Section 9 Arbitration Interim Receiver for blocked equipment.",
    timeline: "7-Day Telemetry Notice -> Sec. 9 Receiver / Arbitration Invocation",
  },
  {
    lesseeType: "EPC Infra Contractors & Event Power Vendors",
    assetScope: "125–625 kVA Mobile DG Sets, Tower Lights, Screw Air-Compressors",
    typicalDispute:
      "Unauthorized shifting of DG set to a sub-contractor site, non-return post project completion, or gate-pass blockade for forced haircuts.",
    primaryRemedy:
      "BNS s.316 Criminal Breach of Trust + Running Daily Hire Meter + Police Station Email CC + Principal Employer Set-Off Notice.",
    timeline: "48-Hour Gate-Pass Ultimatum -> BNS s.316 FIR / Sec. 9 Order",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    title: "Executed Hire Agreement / PO With Minimum Hours & Fuel Clause",
    detail:
      "Must expressly stipulate fixed monthly minimum running hours (e.g., 200 hrs/month), excess per-hour rate, mobilization/demobilization charges, and 'Diesel & Coolant in Client Scope (HSD conforming to IS 1460)'.",
  },
  {
    title: "Counter-Signed Daily Operator Logbooks (Physical + Scanned PDF)",
    detail:
      "Every shift's start/stop meter reading, kWh output, coolant temperature, and oil pressure signed by the client's site engineer creates binding factual estoppel under BSA 2023 Section 121.",
  },
  {
    title: "Telematics, AMF Controller & GPS Hour-Meter Exports (BSA s.63)",
    detail:
      "Download raw CSV/PDF logs from your Deep Sea / ComAp / Cummins telematics dashboard showing exact engine run-hours, fuel-rail pressure drops, and geofence coordinates, paired with a BSA s.63(4) Hash Certificate.",
  },
  {
    title: "Pre-Dispatch Commissioning & Load-Test Report",
    detail:
      "Signed handover checklist with alternator megger value, engine serial plate photo, and e-Way bill proving the DG set or chiller was delivered in zero-defect, CPCB IV+ compliant condition.",
  },
  {
    title: "Joint Fuel Sample Panchnama & NABL Lab / OEM Failure Report",
    detail:
      "In breakdown disputes, collect a sealed 1-litre diesel sample from the day tank and fuel-water separator in the presence of site witnesses, backed by an OEM injector/turbo lab report.",
  },
  {
    title: "GST Tax Invoices, GSTR-1 / E-Invoice IRN & Ledger Confirmation",
    detail:
      "E-invoice IRN and GSTR-1 filings prove the lessee claimed Input Tax Credit (ITC) on your monthly hire bills—legally estopping them from denying service delivery or invoice liability.",
  },
];

const FAQS = [
  {
    question:
      "Can a factory or mall pay only for actual running hours instead of our agreed 200-hour monthly minimum?",
    answer:
      "No. Under Sections 37 and 73 of the Indian Contract Act, 1872, a fixed minimum monthly rental is consideration for keeping your 125 kVA–2000 kVA DG set or temporary chiller exclusively dedicated and on standby at the client's site. Once the Purchase Order or Hire Agreement specifies a 200-hour or 24-hour standby minimum, lower grid cuts do not entitle the lessee to unilaterally convert the contract into a pro-rata hourly rate.",
  },
  {
    question:
      "Who is legally liable when client-supplied adulterated diesel seizes our CPCB IV+ DG set engine?",
    answer:
      "Under Sections 151 and 152 of the Indian Contract Act, 1872, a lessee acting as bailee owes a statutory duty of reasonable care toward rented machinery. When diesel is in the client's scope and water-contaminated, high-sulphur, or adulterated fuel damages injectors, fuel pumps, or SCR exhaust systems, the lessee is liable for the full OEM overhaul cost plus uninterrupted hire charges during the repair period, provided you document a joint fuel sample and OEM failure report.",
  },
  {
    question:
      "How do signed daily operator logbooks and telematics help in an Order XXXVII Summary Suit?",
    answer:
      "Under CPC Order XXXVII, a creditor can obtain a fast-track decree without full trial if the debt is liquidated and supported by written contracts and acknowledgments. Counter-signed daily operator logbooks, combined with BSA 2023 Section 63 certified AMF/telematics hour-meter logs and GSTR-1 e-invoices, leave the debtor with no triable defense under the Supreme Court's IDBI Trusteeship v. Hubtown standard.",
  },
  {
    question:
      "What can we do if a client blocks our gate pass and refuses to release our DG set or chiller after contract termination?",
    answer:
      "A lessee has no right of retention or lien over your leased machinery for billing disputes. Blocking demobilization after a formal Termination & Asset Recall Notice constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023. You should immediately serve an Advocate Ultimatum Notice with Police Station Email CC claiming running daily detention hire until physical gate-out, or seek an urgent Section 9 Arbitration interim receiver.",
  },
  {
    question:
      "Can Udyam-registered DG set and chiller rental vendors claim 3x RBI interest and Section 43B(h) tax leverage?",
    answer:
      "Yes. Industrial power, chiller, and compressor leasing entities registered as Micro or Small Enterprises under Udyam (NIC service codes for machinery/equipment rental) can invoke MSMED Act Sections 15–18 before the MSEFC to recover principal plus 3x RBI bank rate compound interest monthly. Furthermore, if the buyer fails to pay within 45 days of a written agreement, Income Tax Act Section 43B(h) disallows their rental expense deduction for that financial year.",
  },
  {
    question:
      "What if the lessee shifts our rented DG set to another project site without permission in Delhi-NCR during GRAP?",
    answer:
      "Unauthorized relocation violates bailment conditions under Contract Act Sections 153–154 and triggers BNS Sections 316/318 criminal liability. In Delhi-NCR, where CAQM/GRAP norms strictly regulate CPCB IV+ and dual-fuel DG sets, unauthorized movement or tampering exposes you to regulatory sealing. Use GPS geofence logs to issue an immediate 24-hour recall notice and alert the jurisdictional SHO.",
  },
  {
    question:
      "Can we cut off backup power to a defaulting hospital or running industrial plant?",
    answer:
      "Never shut down live critical backup power without documented notice, especially for hospitals. Instead, serve a formal 7-day Cure-cum-Disconnection & Demobilization Notice giving the facility time to arrange alternative power, simultaneously invoking MSMED/Order 37 recovery for arrears and seeking police protection for peaceful demobilization upon expiry of the notice window.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HERO_HEADLINE,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
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
      url: `${SITE_URL}/blog_money_recovery.png`,
    },
  },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Recover Unpaid DG Set, Temporary Chiller & Compressor Rental Bills",
  description:
    "Step-by-step creditor SOP for enforcing minimum monthly hours, signed operator logbooks, adulterated-diesel overhaul claims, and asset demobilization.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Logbook & Telematics Evidence Under BSA s.63",
      text: "Compile counter-signed daily operator logbooks, AMF/telematics hour-meter exports with a BSA 2023 Section 63 certificate, and GSTR-1 e-invoice proof.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Preserve Fuel Sample & OEM Report for Breakdown Claims",
      text: "If the engine seized on client-supplied diesel, draw a sealed joint fuel sample panchnama and obtain an NABL lab / OEM failure analysis citing Contract Act ss.151–152.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch Advocate Demand & Asset Recall Notice",
      text: "Serve a multi-channel notice via Email, WhatsApp, and Speed Post RPAD demanding minimum monthly hire, 3x RBI MSME interest, or immediate gate-pass release under BNS s.316.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Escalate to MSEFC, Order 37 Summary Suit, or Section 9 Receiver",
      text: "File on MSME Samadhaan for 3x RBI compound interest, institute a CPC Order 37 summary suit on signed logbooks, or move for urgent receiver/FIR action if demobilization is blocked.",
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
      name: "Equipment Rental & Machinery Leasing Recovery",
      item: `${SITE_URL}/industries/equipment-rental-machinery-leasing-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "DG Set, Chiller & Load Bank Rental Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function DgSetChillerLoadBankRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository; attribution reflects verified editorial counsel Anuj Anand Malik.
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-20 Equipment Rental</span>
            <span>&bull;</span>
            <span>DG Sets, Chillers &amp; Load Banks</span>
            <span>&bull;</span>
            <span>Creditor Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {HERO_HEADLINE}
          </h1>

          {/* Executive Creditor Answer Box (40-60 words + inline parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/equipment-rental-machinery-leasing-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Equipment Rental &amp; Machinery Leasing Recovery
            </Link>{" "}
            framework, DG set, chiller, and compressor lessors enforce fixed monthly minimum hours
            using counter-signed operator logbooks and BSA s.63 telematics, recover adulterated-diesel
            overhauls under Contract Act ss.151&ndash;152 bailment duties, and break gate-pass
            blockades via BNS s.316.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                &rupee;2L&ndash;&rupee;25L
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Typical Monthly DG / Chiller Hire Ticket
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">s.151&ndash;152</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Contract Act Bailment Fuel-Damage Duty
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 Monthly Compound Interest
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Criminal Breach for Blocked Gate Pass
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
                label: "Equipment Rental & Machinery Leasing Recovery",
                href: "/industries/equipment-rental-machinery-leasing-recovery",
              },
              {
                label: "DG Set, Chiller & Load Bank Rental Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <DgRentalTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Industry Gap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why DG Set &amp; Chiller Lessors Face Logbook &amp; Fuel-Damage Disputes
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Industrial power and cooling rental companies operating 125 kVA&ndash;2000 kVA
                  diesel generator (DG) sets, temporary process chillers, resistive/reactive load
                  banks, and high-pressure air compressors across Delhi-NCR, Maharashtra, Tamil
                  Nadu, and Gujarat carry heavy capital debt on every deployed machine. With strict
                  CPCB IV+ emission norms and Delhi-NCR CAQM/GRAP mandates, fleet owners invest
                  &rupee;25 Lakh to &rupee;1.5 Crore per unit—yet collect &rupee;2 Lakh to &rupee;25
                  Lakh in monthly hire on unsecured 30-to-60-day credit terms.
                </p>
                <p>
                  Once peak summer grid cuts or plant shutdowns end, defaulting factories,
                  hospitals, malls, and EPC contractors routinely deploy three calculated excuses to
                  withhold payment: (1) disputing signed daily log-sheet hours to convert fixed
                  200-hour monthly minimums into pro-rata hourly rates, (2) blaming engine or
                  alternator seizure on &ldquo;machine defect&rdquo; even when the lessee supplied
                  water-contaminated or adulterated diesel, and (3) blocking the site gate pass to
                  force a 30&ndash;40% haircut before releasing the equipment.
                </p>
                <p>
                  Unlike generic civil supply disputes, power-rental arrears require a synchronized
                  commercial and bailment recovery strategy. By combining{" "}
                  <strong>signed daily operator logbooks</strong>,{" "}
                  <strong>AMF/telematics hour-meter logs</strong>,{" "}
                  <strong>Indian Contract Act ss.151&ndash;152 bailment liability</strong>, and{" "}
                  <strong>BNS s.316 asset-detention remedies</strong>, rental vendors can recover
                  both unpaid monthly hire and &rupee;10L&ndash;&rupee;15L engine overhaul costs
                  without surrendering margin.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Bailment &amp; Commercial Recovery Precedents for Rental Fleets
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Indian Supreme Court rulings strongly favour equipment lessors who maintain
                contemporaneous site sign-offs, Udyam registration, and security cheques at
                mobilization.
              </p>

              <div className="space-y-4">
                {STATUTORY_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative pl-5 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#DC2626] mb-2">{item.parties}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      {item.holding}
                    </p>
                    <p className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                      <strong>Creditor Takeaway:</strong> {item.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Operational Decision Tree: Unlocking Arrears &amp; Asset Release
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Select the exact legal escalation rail based on whether your primary bottleneck is
                unpaid monthly hire, contaminated-diesel engine damage, or a blocked gate pass.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4 mb-4">
                <svg
                  viewBox="0 0 760 300"
                  width={760}
                  height={300}
                  className="w-full h-auto"
                  role="img"
                  aria-label="DG Set and Chiller Rental Recovery Decision Tree"
                >
                  <rect x="0" y="0" width="760" height="300" fill="#0F172A" rx="12" />
                  {/* Root Node */}
                  <rect
                    x="220"
                    y="16"
                    width="320"
                    height="48"
                    rx="8"
                    fill="#DC2626"
                  />
                  <text
                    x="380"
                    y="38"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    DG Set / Chiller / Compressor Default
                  </text>
                  <text x="380" y="54" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    Audit PO + Signed Logbooks + Telematics
                  </text>

                  {/* Connector Lines */}
                  <line x1="380" y1="64" x2="380" y2="88" stroke="#64748B" strokeWidth="2" />
                  <line x1="125" y1="88" x2="635" y2="88" stroke="#64748B" strokeWidth="2" />
                  <line x1="125" y1="88" x2="125" y2="112" stroke="#64748B" strokeWidth="2" />
                  <line x1="380" y1="88" x2="380" y2="112" stroke="#64748B" strokeWidth="2" />
                  <line x1="635" y1="88" x2="635" y2="112" stroke="#64748B" strokeWidth="2" />

                  {/* Track 1 */}
                  <rect
                    x="20"
                    y="112"
                    width="210"
                    height="82"
                    rx="8"
                    fill="#1E293B"
                    stroke="#334155"
                  />
                  <text x="125" y="134" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">
                    Track A: Unpaid Hire &amp; Min Hours
                  </text>
                  <text x="125" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Signed Logbook + GSTR-1 IRN
                  </text>
                  <text x="125" y="168" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    MSMED s.15 (3x RBI) or Order 37
                  </text>
                  <text x="125" y="184" textAnchor="middle" fill="#94A3B8" fontSize="9">
                    Target: 45&ndash;90 Days Recovery
                  </text>

                  {/* Track 2 */}
                  <rect
                    x="275"
                    y="112"
                    width="210"
                    height="82"
                    rx="8"
                    fill="#1E293B"
                    stroke="#334155"
                  />
                  <text x="380" y="134" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">
                    Track B: Adulterated Diesel Damage
                  </text>
                  <text x="380" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Joint Fuel Sample + OEM Lab Report
                  </text>
                  <text x="380" y="168" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Contract Act ss.151&ndash;152 Bailment
                  </text>
                  <text x="380" y="184" textAnchor="middle" fill="#94A3B8" fontSize="9">
                    Claim: Overhaul + Loss of Hire
                  </text>

                  {/* Track 3 */}
                  <rect
                    x="530"
                    y="112"
                    width="210"
                    height="82"
                    rx="8"
                    fill="#1E293B"
                    stroke="#334155"
                  />
                  <text x="635" y="134" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    Track C: Blocked Gate Pass / Shift
                  </text>
                  <text x="635" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Termination + GPS Geofence Proof
                  </text>
                  <text x="635" y="168" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    BNS s.316 + Sec. 9 Receiver
                  </text>
                  <text x="635" y="184" textAnchor="middle" fill="#94A3B8" fontSize="9">
                    48-Hr Ultimatum + Police CC
                  </text>

                  {/* Bottom Convergence */}
                  <line x1="125" y1="194" x2="125" y2="222" stroke="#64748B" strokeWidth="2" />
                  <line x1="380" y1="194" x2="380" y2="222" stroke="#64748B" strokeWidth="2" />
                  <line x1="635" y1="194" x2="635" y2="222" stroke="#64748B" strokeWidth="2" />
                  <line x1="125" y1="222" x2="635" y2="222" stroke="#64748B" strokeWidth="2" />
                  <line x1="380" y1="222" x2="380" y2="236" stroke="#64748B" strokeWidth="2" />

                  <rect
                    x="150"
                    y="236"
                    width="460"
                    height="46"
                    rx="8"
                    fill="#065F46"
                  />
                  <text x="380" y="256" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    Unified Multi-Channel Execution: Email + WhatsApp + Speed Post RPAD
                  </text>
                  <text x="380" y="272" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    Optional NI Act s.138 Cheque Bounce + Principal Employer Set-Off Notice
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-800 uppercase mb-1">
                    Track A &bull; Unpaid Hire &amp; Min Hours
                  </p>
                  <p className="text-xs text-emerald-950">
                    Signed Logbooks + GSTR-1 IRN &rarr; MSMED s.15 (3x RBI interest) or Order 37
                    Summary Suit.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-xs font-bold text-amber-800 uppercase mb-1">
                    Track B &bull; Adulterated Diesel Damage
                  </p>
                  <p className="text-xs text-amber-950">
                    Joint Fuel Sample + OEM Report &rarr; Contract Act ss.151&ndash;152 Bailment
                    Overhaul Claim.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-xs font-bold text-[#DC2626] uppercase mb-1">
                    Track C &bull; Blocked Gate Pass / Site Shift
                  </p>
                  <p className="text-xs text-red-950">
                    Termination + GPS Proof &rarr; 48-Hr Ultimatum under BNS s.316 + Police Station
                    Email CC.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Lessee Enforcement Matrix */}
            <section
              id="heading-enforcement-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  DG, Chiller &amp; Compressor Enforcement Matrix by Lessee Type
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Lessee Profile &amp; Corridor</th>
                      <th className="p-3.5 font-bold">Equipment Deployed</th>
                      <th className="p-3.5 font-bold">Primary Dispute Pattern</th>
                      <th className="p-3.5 font-bold">Statutory Remedy</th>
                      <th className="p-3.5 font-bold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {LESSEE_ENFORCEMENT_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 align-top">
                        <td className="p-3.5 font-bold text-slate-900">{row.lesseeType}</td>
                        <td className="p-3.5 text-slate-700">{row.assetScope}</td>
                        <td className="p-3.5 text-slate-700">{row.typicalDispute}</td>
                        <td className="p-3.5 text-slate-800 font-medium">{row.primaryRemedy}</td>
                        <td className="p-3.5 font-mono text-xs text-[#DC2626] font-semibold">
                          {row.timeline}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Enforcing Minimum Monthly Hours & Signed Logbooks */}
            <section
              id="heading-minimum-hours"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Enforcing Minimum Monthly Hours &amp; Signed Daily Operator Logbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                The single biggest revenue leak in industrial DG set and temporary chiller leasing
                occurs when a client&apos;s finance department retroactively audits a monthly
                invoice and tries to pay only for &ldquo;actual engine run hours&rdquo; rather than
                the contracted 200-hour or 24-hour standby minimum. Indian contract law provides
                three decisive pillars to defeat this re-pricing tactic:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase bg-slate-900 text-white mb-2">
                    Pillar 1 &bull; Contract Act s.37
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Standby Readiness Is Consideration
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Minimum monthly hire pays for exclusive capital deployment, CPCB IV+ compliance
                    availability, and operator standby—not just runtime. Under Section 37, the
                    lessee cannot unilaterally alter fixed hire into variable hourly billing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase bg-[#DC2626] text-white mb-2">
                    Pillar 2 &bull; BSA s.121 Estoppel
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Daily Logbook Sign-Off Estoppel
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Once the lessee&apos;s site engineer counter-signs daily operator logbooks
                    recording start/stop meter readings and fuel consumption, the company is
                    legally estopped under BSA 2023 s.121 from disputing billed hours months later.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase bg-emerald-700 text-white mb-2">
                    Pillar 3 &bull; BSA s.63 Telemetry
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Digital AMF Hour-Meter Proof
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Even if a site supervisor refuses to sign paper log sheets on the final week,
                    AMF controller and cloud telematics hour-meter logs certified under BSA 2023
                    Section 63 serve as primary electronic evidence in court.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Interactive 4 Failure Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Real-World DG &amp; Chiller Default Scenarios &amp; Counter-Moves
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Select your active site dispute below to view the exact statutory counter-move,
                mandatory proof packet, and escalation timeline.
              </p>
              <DgRentalScenarioTabs />
            </section>

            {/* Section 7: Worked Financial & Interest Calculation Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Recovery Ledger: &rupee;14.80L 1010 kVA DG Set &amp; Overhaul Claim
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Illustrative claim computation for a Manesar/Bhiwadi industrial supplier whose
                1010 kVA CPCB IV+ DG set suffered injector and turbocharger seizure on client-supplied
                adulterated diesel after 3 months of unpaid minimum monthly hire.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Claim Schedule &bull; 1010 kVA DG Set (120-Day Overdue)
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    MSMED s.16 + Contract Act ss.151&ndash;152
                  </span>
                </div>
                <div className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                  <div className="flex justify-between items-center px-5 py-3">
                    <span className="text-slate-700">
                      3 Months Fixed Minimum Hire (200 hrs/mo @ &rupee;2.40L/mo + 18% GST)
                    </span>
                    <span className="font-mono font-bold text-slate-900">&rupee;8,49,600</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-3">
                    <span className="text-slate-700">
                      Excess Running Hours (95 hrs @ &rupee;1,200/hr verified by AMF log + GST)
                    </span>
                    <span className="font-mono font-bold text-slate-900">&rupee;1,34,520</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-3">
                    <span className="text-slate-700">
                      OEM Engine Overhaul (Adulterated Diesel Damage — Contract Act ss.151&ndash;152)
                    </span>
                    <span className="font-mono font-bold text-slate-900">&rupee;4,25,000</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-3 bg-emerald-50/70">
                    <span className="text-emerald-900 font-semibold">
                      MSMED s.16 Statutory Interest (3x RBI Bank Rate compounded monthly on overdue
                      hire)
                    </span>
                    <span className="font-mono font-bold text-emerald-700">&rupee;70,880</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-4 bg-slate-900 text-white">
                    <span className="font-extrabold text-sm sm:text-base">
                      Total Recoverable Legal Demand (Excluding Future Detention Hire)
                    </span>
                    <span className="font-mono font-black text-base sm:text-lg text-red-400">
                      &rupee;14,80,000
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: 6-Point BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  6-Point DG &amp; Chiller Evidence &amp; BSA 2023 s.63 Digital Dossier
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Assemble these six documents before dispatching your legal notice so the lessee
                cannot raise sham quality or runtime objections in MSEFC or Commercial Court.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EVIDENCE_CHECKLIST.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-700 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track B2B Conversion CTA */}
            <section id="heading-cta" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Serve an Advocate DG Rental Notice or Upload Bulk Defaulters
                </h2>
              </div>
              <DgRentalRecoveryCTA />
            </section>

            {/* Section 10: Mandatory Internal Links — Tools, Templates & Sibling Spokes */}
            <section
              id="heading-related-tools"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Equipment Rental Recovery Tools, Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <Link
                  href="/industries/equipment-rental-machinery-leasing-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-[#DC2626] mb-1">
                    Parent Industry Hub
                  </span>
                  <span className="font-bold text-slate-900">
                    Equipment Rental, Cranes, Scaffolding &amp; DG Leasing Recovery
                  </span>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-emerald-700 mb-1">
                    Interactive T1 Calculator
                  </span>
                  <span className="font-bold text-slate-900">
                    MSME Delayed Payment 3x RBI Compound Interest Calculator
                  </span>
                </Link>

                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                    P1 Notice Workspace
                  </span>
                  <span className="font-bold text-slate-900">
                    Commercial Legal Notice &amp; Statutory Demand Format
                  </span>
                </Link>

                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                    Multi-Channel Dispatch
                  </span>
                  <span className="font-bold text-slate-900">
                    Bulk Legal Notice via Email, WhatsApp &amp; Speed Post RPAD
                  </span>
                </Link>

                <Link
                  href="/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                    Sibling Spoke &bull; IND-20
                  </span>
                  <span className="font-bold text-slate-900">
                    Unreturned Rented Scaffolding &amp; Formwork (BNS s.316) Recovery
                  </span>
                </Link>

                <Link
                  href="/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                    Sibling Spoke &bull; IND-20
                  </span>
                  <span className="font-bold text-slate-900">
                    Builder Blocking Gate Pass for Rented Crane &amp; Machinery Demobilization
                  </span>
                </Link>

                <Link
                  href="/law/bns-318-cheating-vs-civil-dispute"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                    Statutory Deep-Dive
                  </span>
                  <span className="font-bold text-slate-900">
                    BNS Section 318 Cheating vs. Civil Breach of Contract
                  </span>
                </Link>

                <Link
                  href="/recovery/contractor-payment"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                    Core Recovery Guide
                  </span>
                  <span className="font-bold text-slate-900">
                    Contractor Payment &amp; Running Bill Recovery Playbook
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: DG Set &amp; Chiller Rental Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-slate-200 bg-slate-50 p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Section 12: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2"
                    >
                      {src.title}
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
