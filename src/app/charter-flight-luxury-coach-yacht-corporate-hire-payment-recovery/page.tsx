import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CharterFleetTableOfContents from "./CharterFleetTableOfContents";
import CharterFleetScenarioTabs from "./CharterFleetScenarioTabs";
import CharterFleetCTA from "./CharterFleetCTA";
import {
  Plane,
  ShieldAlert,
  FileCheck2,
  Scale,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Receipt,
  Bus,
  Navigation,
} from "lucide-react";

export const revalidate = 86400;

const PAGE_URL = "/charter-flight-luxury-coach-yacht-corporate-hire-payment-recovery";
const EXACT_H1 =
  "Recovering Unpaid NSOP Air-Charter Flying Hours, Empty-Leg Ferry Charges & Luxury Tourist Coach Fleet Receivables";
// Tightened to 55 chars (within 30-60ch limit) preserving primary keyword
const META_TITLE = "Private Charter (Jet/Heli) & Luxury Coach Debt Recovery";
// Tightened to 149 chars (within 120-155ch limit) preserving statutory facts
const META_DESCRIPTION =
  "Aviation charter & luxury coach operators face disputes over ATC holding hours, ferry legs & campaign balances. Enforce DGCA logs via Order 37 CPC.";

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
        alt: formatAltText("Private Charter Jet Helicopter and Luxury Coach Fleet Debt Recovery"),
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
      "DGCA Civil Aviation Requirements (CAR) Section 3 — Air Transport, Series 'C', Part III (Non-Scheduled Operator's Permit — NSOP Operations & Flight Logbook Rules)",
    url: "https://www.dgca.gov.in/",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits on Written Charter Contracts) & Order XXXVIII Rule 5 (Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Commercial Courts Act, 2015 — Section 2(1)(c)(i), (iii) & (xviii) & Section 12A (Mandatory Pre-Institution Mediation >= ₹3 Lakh)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 — Sections 138, 141 & 143A (Criminal Prosecution & 20% Interim Compensation on Dishonoured Charter PDCs)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of DGCA Tech-Logs, GPS Telemetry, Fastag & Charter Emails)",
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
    title: "Signed Charter Confirmations & Operational Invoices Qualify as Written Contracts Under Order XXXVII CPC",
    parties: "M/s Flint Group India Pvt. Ltd. v. Good Morning India Media Pvt. Ltd. (Commercial Summary Suit Principles)",
    citation: "High Court of Delhi — Order XXXVII CPC Jurisprudence",
    date: "Settled Commercial Law",
    holding:
      "Indian Commercial Courts hold that signed booking confirmations, rate quotes accepted over corporate email, and itemized tax invoices backed by contemporaneous delivery/performance logs constitute a valid 'written contract' for a liquidated money demand under Order XXXVII Rule 1(2) CPC.",
    takeaway:
      "NSOP aviation operators and luxury coach fleet owners do not need a notarized stamp-paper deed for every ad-hoc trip; the signed Charter Confirmation + DGCA Tech-Log / GPS Trip Sheet + GST Tax Invoice unlocks Summary Suit filing.",
  },
  {
    title: "Post-Service Disputes Raised After Invoice Issuance Are 'Moonshine' Defenses",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Supreme Court Landmark Holding",
    holding:
      "The Supreme Court established that a corporate debtor cannot fabricate a hypothetical or belated service-quality dispute after receiving a statutory demand notice, where the service was fully consumed without contemporaneous written protest.",
    takeaway:
      "When a corporate hirer, wedding host, or campaign manager flies the full sector or completes an 8-day coach tour without signing a defect log, belated claims of 'excess ATC holding' or 'bus AC issue' fail as moonshine.",
  },
  {
    title: "Security Cheques Issued Under Commercial Hire Agreements Attract Full Section 138 NI Act Liability",
    parties: "Sripati Singh v. State of Jharkhand & Anr.",
    citation: "(2021) SCC OnLine SC 1002, Supreme Court of India",
    date: "Supreme Court Binding Precedent",
    holding:
      "The Supreme Court clarified that a cheque issued as 'security' at the time of executing a commercial contract or hire agreement becomes legally enforceable for prosecution under Section 138 NI Act the moment the underlying debt crystallizes and remains unpaid on the presentation date.",
    takeaway:
      "If a political campaign agency or wedding planner hands over a security PDC before aircraft mobilization or coach dispatch and later issues 'Stop Payment' after the trip, Section 138 criminal prosecution + Section 143A 20% interim deposit applies immediately.",
  },
];

const FAQS = [
  {
    question: "Can a corporate hirer refuse to pay for ATC holding hours, weather diversions, or empty-leg ferry flights?",
    answer:
      "No, provided your NSOP Charter Agreement or signed Booking Confirmation specifies billing on 'actual block hours (chocks-off to chocks-on)' and explicitly covers positioning/repositioning ferry legs and ATC/weather contingencies. The DGCA-mandated Flight Logbook (Tech-Log) and AAI ATC Flight Plan serve as statutory, third-party-verified proof of exact flying and holding duration under Order XXXVII CPC.",
  },
  {
    question: "How do helicopter charter operators recover unpaid balances from political parties or election campaign agencies?",
    answer:
      "Under Election Commission of India (ECI) candidate expenditure rules, aviation charter payments must be settled via transparent banking channels against GST invoices. Operators should immediately present any mobilization/balance PDCs for Section 138 NI Act enforcement, serve a 15-day Advocate Demand Notice on the contracting agency, candidate election agent, and corporate guarantor, and initiate Commercial Court Section 12A / Order XXXVIII Rule 5 attachment if the unpaid sum exceeds ₹3 Lakh.",
  },
  {
    question: "What evidence proves a 10-bus luxury Volvo/Mercedes coach fleet completed a wedding or Chardham pilgrimage?",
    answer:
      "Luxury coach operators should compile a BSA 2023 Section 63 certified bundle containing: (1) signed hire quote or WhatsApp/email PO, (2) vehicle GPS route telemetry logs, (3) NHAI Fastag toll plaza timestamps, (4) inter-state permit and border tax challans, and (5) driver duty slips signed by the tour manager. This defeats post-trip excuses claiming 'buses arrived late' or 'fewer coaches deployed.'",
  },
  {
    question: "Are aviation fuel, AAI landing/parking, and ground handling disbursements recoverable in a Summary Suit?",
    answer:
      "Yes. Under Section 73 of the Indian Contract Act, 1872 and Order XXXVII CPC, pass-through operational disbursements—such as Aviation Turbine Fuel (ATF) uplift invoices, AAI landing/parking charges, Watch-Hour Extension fees, and crew night-halt allowances—are liquidated, verifiable sums recoverable alongside the base hourly charter tariff.",
  },
  {
    question: "Can Udyam-registered luxury coach fleets or yacht charterers claim 3x RBI interest under the MSMED Act?",
    answer:
      "Yes. If your coach fleet or marine charter entity holds an active Udyam Registration Certificate (Micro or Small Enterprise) and the corporate hirer delays payment beyond 45 days from invoice/trip completion, you can file a claim before the Micro and Small Enterprises Facilitation Council (MSEFC / MSME Samadhaan) under Section 18 for compound interest at 3x the RBI Bank Rate (currently 19.50%+ p.a. compounded monthly), while triggering Income Tax Section 43B(h) disallowance against the corporate hirer.",
  },
  {
    question: "What if a corporate MICE agency cancels a chartered yacht or private jet 48 hours before departure?",
    answer:
      "Where your signed Charter Party or Booking Confirmation includes a graded cancellation forfeiture schedule (e.g., 50% within 7 days, 100% within 48 hours of ETD), Section 74 of the Indian Contract Act entitles you to retain the advance and sue for the balance liquidated cancellation fee, particularly where you can demonstrate port clearance fees, crew rostering, and lost alternate charter bookings.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "NSOP Air-Charter Flying Hours, Empty-Leg Ferry & Luxury Coach Fleet Debt Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How NSOP Air-Charter & Luxury Coach Operators Recover Unpaid Flying Hours and Fleet Balances",
  description:
    "Step-by-step statutory recovery SOP for private jet/helicopter operators, luxury Volvo coach fleets, and corporate yacht charterers in India.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Stage 1: Lock DGCA Tech-Log, GPS & AAI Disbursement Proof (Day 1–15 Post-Trip)",
      text: "Extract chocks-off to chocks-on flying hours from the DGCA Flight Logbook (or GPS/Fastag logs for luxury coaches), pair with AAI/ATF vouchers, and generate a BSA 2023 Section 63 electronic certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Stage 2: GSTR-2B ITC & Security PDC Verification (Day 16–30)",
      text: "Confirm the hirer has not rejected your GST B2B invoice on the IMS/GSTR-2B portal and verify any security or balance post-dated cheques (PDCs) before presentation.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Stage 3: Tri-Channel Advocate Legal Demand Notice (Day 31–45)",
      text: "Serve a 15-day Advocate-signed statutory demand notice on the Corporate CFO, Wedding/Campaign Coordinator, and Directors via Email, Blue-Tick WhatsApp, and Speed Post RPAD.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Stage 4: Order XXXVII CPC, Section 138 NI Act or MSME Samadhaan Filing (Day 46+)",
      text: "Escalate unpaid ₹3L+ claims to Commercial Court Section 12A / Order XXXVII Summary Suit, prosecute bounced PDCs under Section 138 NI Act, or file MSME Samadhaan for 3x RBI compound interest.",
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
      name: "Private Charter (Jet/Heli) & Luxury Coach Debt Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function CharterFlightLuxuryCoachRecoveryPage() {
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
            <Plane className="w-3.5 h-3.5 shrink-0" />
            <span>§6.16 • IND-16 Aviation Charter, Yacht & Luxury Fleet Playbook</span>
            <span className="text-slate-500">•</span>
            <span>B2B-198 Operational SOP</span>
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
            Under <strong>Order XXXVII CPC</strong> and <strong>DGCA NSOP Flight Logbook</strong> regulations, signed charter quotes paired with chocks-off/chocks-on Tech-Logs, AAI landing receipts, or <strong>GPS/Fastag coach telemetry</strong> form conclusive liquidated debt—defeating post-trip excuses on ATC holding or ferry legs. See our{" "}
            <Link
              href="/industries/hotels-banquets-corporate-travel-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Hotels, Banquets & Corporate Travel Recovery Hub
            </Link>{" "}
            for full hospitality and travel enforcement.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Primary Civil Remedy
              </p>
              <p className="text-sm sm:text-base font-black text-slate-100 mt-0.5">
                Order XXXVII CPC
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Statutory Flying Proof
              </p>
              <p className="text-sm sm:text-base font-black text-emerald-400 mt-0.5">
                DGCA Tech-Log / GPS
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                MSME Interest (Udyam)
              </p>
              <p className="text-sm sm:text-base font-black text-amber-400 mt-0.5">
                3x RBI (~19.5%+ p.a.)
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Typical Ticket Exposure
              </p>
              <p className="text-sm sm:text-base font-black text-red-400 mt-0.5">
                ₹10 Lakh – ₹2 Crore+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Hotels, Banquets & Corporate Travel Recovery",
                href: "/industries/hotels-banquets-corporate-travel-recovery",
              },
              {
                label: "Charter Flight & Luxury Coach Fleet Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CharterFleetTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Anatomy of Charter & Coach Fleet Defaults */}
            <section
              id="charter-default-anatomy"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why NSOP Air-Charter & Luxury Coach Invoices Stall Post-Trip
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Non-Scheduled Operator&apos;s Permit (<strong>NSOP</strong>) private jet and helicopter charter companies, luxury Volvo/Scania tourist coach fleet owners, and corporate yacht operators operate on high-burn, upfront disbursement economics. Before a single rotor turns or a 45-seater luxury coach leaves the depot, the operator incurs irreversible cash outflows: Aviation Turbine Fuel (ATF) uplift, Airports Authority of India (AAI) landing and parking fees, Watch-Hour Extension (WHE) surcharges, crew positioning allowances, inter-state road permits, and port berthing charges.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Yet, once the corporate roadshow concludes, the destination wedding ends, or election polling finishes, ₹10 Lakh to ₹2 Crore balance invoices routinely stall. Hirers—ranging from corporate travel desks and MICE agencies to political campaign managers and pilgrimage tour wholesalers—exploit the gap between the <strong>pre-trip estimated quote</strong> and the <strong>post-trip actual reconciliation invoice</strong>. Instead of contesting the service while aboard, they raise retrospective objections to ATC holding hours, weather diversions, empty-leg ferry repositioning, or standby crew halts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                    <Plane className="w-4 h-4 text-[#DC2626]" />
                    NSOP Block-Hour Friction
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hirers demand billing only for &ldquo;passenger-in-cabin&rdquo; time, refusing to pay for empty-leg repositioning ferries, Mumbai/Delhi ATC holding patterns, and AAI Watch-Hour Extension fees.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                    <Bus className="w-4 h-4 text-[#DC2626]" />
                    Wedding & Pilgrimage Fleets
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tour wholesalers and wedding planners collect 100% transport fees from families or delegates, then withhold 30–40% of the coach fleet balance citing trivial post-tour complaints.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                    <Navigation className="w-4 h-4 text-[#DC2626]" />
                    Campaign & Yacht Retainers
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Election campaign committees and corporate MICE agencies default on Minimum Guaranteed Hours (MGH) or last-minute yacht cancellations after event momentum fades.
                  </p>
                </div>
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
                  DGCA Tech-Log, Order 37 CPC & Fleet Recovery Statutory Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Aviation and luxury fleet receivables are governed by specialized statutory evidence that leaves almost zero room for factual denial when properly packaged under <strong>BSA 2023 Section 63</strong>. Use this statutory matrix to select the fastest enforcement track:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Default Type & Ticket</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Conclusive Proof Anchor</th>
                      <th className="p-3.5 font-bold">Enforcement Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NSOP Jet / Heli Flying Hours & Ferry Legs (₹10L–₹2Cr)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CPC Order XXXVII + Commercial Courts Act s.2(1)(c)(i) & s.12A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Signed Charter Quote + DGCA Flight Logbook (Tech-Log) + AAI ATC & ATF Receipts
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        15-day Notice → s.12A Mediation → Summary Suit (Leave to Defend bar)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Bounced Campaign / Wedding Security PDCs
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act s.138, s.141 & s.143A (20% Interim Compensation)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Original Dishonoured Cheque + Bank Return Memo + Charter Agreement
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Strict 30-day Notice from Memo → 15-day Cure → Criminal Complaint
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Luxury Coach Fleet & Yacht Hire (Udyam Operator)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSMED Act s.15–18 + Income Tax Act s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Udyam Certificate + GPS Telemetry + Fastag Logs + Border Permit Challans
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        45-day Statutory Credit → 3x RBI Compound Interest + Tax Disallowance
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Corporate Hirer Denying Service After Tax Credit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CGST Act s.16(2)(b) + Indian Contract Act s.73/74
                      </td>
                      <td className="p-3.5 text-slate-700">
                        GSTR-2B / IMS ITC Acceptance + Form 26AS s.194C TDS Credit
                      </td>
                      <td className="p-3.5 font-semibold text-slate-800">
                        Statutory Estoppel: Cannot claim GST ITC while denying liability
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="escalation-pipeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Step Aviation Charter & Coach Fleet Escalation Pipeline
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this operational escalation sequence immediately upon trip completion so your claim stays litigation-ready without losing Limitation Act timelines or Section 138 cheque-bounce windows:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-x-auto">
                <svg
                  viewBox="0 0 920 230"
                  width="920"
                  height="230"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Step Aviation Charter and Luxury Coach Fleet Escalation Pipeline"
                >
                  {/* Step 1 */}
                  <rect x="10" y="30" width="160" height="150" rx="12" fill="#0F172A" />
                  <circle cx="34" cy="54" r="12" fill="#DC2626" />
                  <text x="34" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="54" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 1–10: Log Lock</text>
                  <text x="22" y="84" fill="#CBD5E1" fontSize="10">• DGCA Tech-Log</text>
                  <text x="22" y="102" fill="#CBD5E1" fontSize="10">• AAI / ATF Vouchers</text>
                  <text x="22" y="120" fill="#CBD5E1" fontSize="10">• GPS / Fastag CSV</text>
                  <text x="22" y="138" fill="#34D399" fontSize="10" fontWeight="bold">BSA s.63 Certified</text>

                  <line x1="170" y1="105" x2="195" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="195,100 205,105 195,110" fill="#DC2626" />

                  {/* Step 2 */}
                  <rect x="205" y="30" width="160" height="150" rx="12" fill="#1E293B" />
                  <circle cx="229" cy="54" r="12" fill="#DC2626" />
                  <text x="229" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="249" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 11–25: Tax Audit</text>
                  <text x="217" y="84" fill="#CBD5E1" fontSize="10">• Verify GSTR-2B ITC</text>
                  <text x="217" y="102" fill="#CBD5E1" fontSize="10">• Check 26AS s.194C</text>
                  <text x="217" y="120" fill="#CBD5E1" fontSize="10">• Present PDCs</text>
                  <text x="217" y="138" fill="#FBBF24" fontSize="10" fontWeight="bold">CGST s.16 Estoppel</text>

                  <line x1="365" y1="105" x2="390" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="390,100 400,105 390,110" fill="#DC2626" />

                  {/* Step 3 */}
                  <rect x="400" y="30" width="160" height="150" rx="12" fill="#0F172A" />
                  <circle cx="424" cy="54" r="12" fill="#DC2626" />
                  <text x="424" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="444" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 26–40: Notice</text>
                  <text x="412" y="84" fill="#CBD5E1" fontSize="10">• 15-Day Legal Notice</text>
                  <text x="412" y="102" fill="#CBD5E1" fontSize="10">• Email + WA + RPAD</text>
                  <text x="412" y="120" fill="#CBD5E1" fontSize="10">• s.138 if PDC Bounced</text>
                  <text x="412" y="138" fill="#F87171" fontSize="10" fontWeight="bold">CFO &amp; Directors Served</text>

                  <line x1="560" y1="105" x2="585" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="585,100 595,105 585,110" fill="#DC2626" />

                  {/* Step 4 */}
                  <rect x="595" y="30" width="150" height="150" rx="12" fill="#1E293B" />
                  <circle cx="619" cy="54" r="12" fill="#DC2626" />
                  <text x="619" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="639" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 41–55: Forum</text>
                  <text x="607" y="84" fill="#CBD5E1" fontSize="10">• s.12A Mediation (&gt;=3L)</text>
                  <text x="607" y="102" fill="#CBD5E1" fontSize="10">• MSME Samadhaan</text>
                  <text x="607" y="120" fill="#CBD5E1" fontSize="10">• s.43B(h) Tax Alert</text>
                  <text x="607" y="138" fill="#34D399" fontSize="10" fontWeight="bold">3x RBI Interest</text>

                  <line x1="745" y1="105" x2="770" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="770,100 780,105 770,110" fill="#DC2626" />

                  {/* Step 5 */}
                  <rect x="780" y="30" width="130" height="150" rx="12" fill="#991B1B" />
                  <circle cx="804" cy="54" r="12" fill="#FFFFFF" />
                  <text x="804" y="58" textAnchor="middle" fill="#991B1B" fontSize="11" fontWeight="bold">5</text>
                  <text x="824" y="58" fill="#FFFFFF" fontSize="11" fontWeight="bold">Decree</text>
                  <text x="792" y="84" fill="#FEE2E2" fontSize="10">• Order 37 Suit</text>
                  <text x="792" y="102" fill="#FEE2E2" fontSize="10">• Order 38 R.5</text>
                  <text x="792" y="120" fill="#FEE2E2" fontSize="10">• Bank Attachment</text>
                  <text x="792" y="138" fill="#FFFFFF" fontSize="10" fontWeight="bold">100% Recovery</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "1",
                    title: "Day 1–10: Lock DGCA Tech-Log & GPS Data",
                    desc: "Export signed Flight Tech-Log, AAI/ATF vouchers, or coach GPS/Fastag logs with BSA 2023 s.63 certification.",
                  },
                  {
                    step: "2",
                    title: "Day 11–25: GSTR-2B & PDC Verification",
                    desc: "Check GSTR-2B ITC acceptance and Form 26AS TDS credits; present balance PDCs for clearing.",
                  },
                  {
                    step: "3",
                    title: "Day 26–40: Tri-Channel Advocate Notice",
                    desc: "Serve 15-day statutory demand (or s.138 NI Act notice within 30 days of cheque return) on CFO & Directors.",
                  },
                  {
                    step: "4",
                    title: "Day 41–55: Commercial s.12A / MSME Filing",
                    desc: "File MSME Samadhaan (3x RBI interest) or Commercial Court s.12A Pre-Institution Mediation.",
                  },
                  {
                    step: "5",
                    title: "Day 56+: Order 37 Summary Suit & Attachment",
                    desc: "Seek Order XXXVII Summary Decree and Order XXXVIII Rule 5 bank account attachment.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="charter-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 High-Ticket Charter & Fleet Default Modes (Interactive)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your operational failure mode below to inspect the exact hirer excuse, the binding statutory rebuttal, and the immediate enforcement action:
              </p>

              <CharterFleetScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Math */}
            <section
              id="worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Math: ₹42.50 Lakh Helicopter & Ferry-Leg Default
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a real-world recovery ledger for an NSOP twin-engine helicopter operator hired for a 10-day corporate roadshow &amp; regional campaign block where the hirer paid the initial mobilization advance but defaulted on actual flying hours, empty-leg positioning, and AAI disbursements:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-lg mb-5">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Illustrative Claim Ledger — Order XXXVII CPC + MSMED s.16
                  </span>
                  <span className="text-xs text-slate-400">180 Days Overdue</span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      1. Actual Flying Hours (26.5 hrs @ ₹1,85,000/hr per DGCA Tech-Log)
                    </span>
                    <span className="font-bold text-white">₹49,02,500</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      2. Empty-Leg Positioning &amp; Repositioning Ferry (4.5 hrs @ ₹1,60,000/hr)
                    </span>
                    <span className="font-bold text-white">₹7,20,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      3. Pass-Through AAI Landing, Parking, WHE &amp; Crew Night-Halt Vouchers
                    </span>
                    <span className="font-bold text-white">₹4,27,500</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      4. Less: Pre-Flight Mobilization Advance Received
                    </span>
                    <span className="font-bold text-emerald-400">- ₹18,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700 bg-slate-800/60 px-2 rounded">
                    <span className="font-bold text-slate-100">
                      Net Liquidated Principal Balance (excl. GST adjustment)
                    </span>
                    <span className="font-black text-amber-400">₹42,50,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      5. Statutory Interest (6 Months @ 19.50% p.a. MSMED 3x RBI Rate)
                    </span>
                    <span className="font-bold text-emerald-400">+ ₹4,24,100</span>
                  </div>
                  <div className="flex justify-between pt-2 text-base font-black">
                    <span className="text-white">Total Statutory Recovery Demand</span>
                    <span className="text-red-400">₹46,74,100</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-emerald-900 font-medium">
                  Calculate your exact compound 3x RBI interest or check Section 138 cheque-bounce limitation dates before serving notice:
                </p>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors"
                  >
                    MSME Interest Calculator <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-emerald-300 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors"
                  >
                    s.138 Deadline Tool <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: DGCA Flight Log, GPS & BSA 2023 s.63 Evidence Checklist */}
            <section
              id="dgca-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  DGCA Flight Log, GPS & BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (replacing Section 65B of the Indian Evidence Act), electronic flight logs, GPS vehicle telemetry, Fastag statements, and email/WhatsApp charter confirmations require a formal electronic evidence certificate to be admissible in Commercial Courts. Assemble these 6 items before issuing your demand notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed Charter Quote / Rate Matrix",
                    detail:
                      "Corporate email, WhatsApp acceptance, or signed Charter Party clearly stating hourly block rates, empty-leg ferry terms, MGH, and cancellation slabs.",
                  },
                  {
                    title: "2. DGCA Flight Logbook / Tech-Log Extracts",
                    detail:
                      "Commander-signed Journey Log & Technical Log showing exact chocks-off/chocks-on (or rotor-start/stop) UTC/IST timestamps and sector codes.",
                  },
                  {
                    title: "3. AAI, ATF & Port Disbursement Vouchers",
                    detail:
                      "Third-party receipts for aviation fuel uplift, airport landing/parking, Watch-Hour Extension, helipad NOC, or marine port-trust berthing fees.",
                  },
                  {
                    title: "4. Coach GPS Telemetry & Fastag Toll Logs",
                    detail:
                      "Fleet tracking CSV exports, NHAI Fastag plaza timestamps, and inter-state border tax receipts proving full deployment of every luxury coach.",
                  },
                  {
                    title: "5. GSTR-2B / Form 26AS Tax Estoppel",
                    detail:
                      "GST portal B2B invoice reflection showing Input Tax Credit availed by the corporate hirer, plus Section 194C/194-I TDS credits in Form 26AS.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Hash Certificate",
                    detail:
                      "Signed affidavit/certificate by the Fleet Operations Manager or Chief Engineer certifying the integrity of exported PDFs, emails, and GPS logs.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <FileCheck2 className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Precedents & Campaign/Wedding Enforcement */}
            <section
              id="campaign-wedding-levers"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Election Campaign, Wedding & Corporate Roadshow Enforcement
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                When high-ticket charter invoices stall after political campaigns, destination weddings, or corporate roadshows, Indian courts enforce strict commercial accountability. Review these binding judicial principles and notice templates:
              </p>

              <div className="space-y-4 mb-6">
                {COURT_PRECEDENTS.map((prec, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {prec.title}
                        </h3>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-slate-200 text-slate-700">
                          {prec.date}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#DC2626] mb-2">
                        {prec.parties} • {prec.citation}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        {prec.holding}
                      </p>
                      <p className="text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 font-medium">
                        <strong>Creditor Takeaway:</strong> {prec.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Need ready-to-serve statutory notice formats for fleet detention, MSME interest, or bounced charter cheques? Access our advocate-vetted templates and{" "}
                    <Link href="/cheque-bounce-notice-timeline-section-138" className="font-bold underline text-[#DC2626]">
                      Section 138 Cheque Bounce Timeline
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <Link
                    href="/templates/msme-delayed-payment-demand-notice"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                  >
                    MSME Notice Format <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/templates/transporter-freight-detention-carrier-lien-legal-notice"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-amber-300 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-colors"
                  >
                    Fleet Hire Notice <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section id="dual-cta" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Dual-Track Aviation & Luxury Fleet Legal Recovery Desk
                </h2>
              </div>
              <CharterFleetCTA />
            </section>

            {/* Section 9: IND-16 Network Cross-Links */}
            <section
              id="ind16-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Hospitality, Travel & Charter Creditor Network (IND-16)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Explore our specialized B2B creditor playbooks across the{" "}
                <Link
                  href="/industries/hotels-banquets-corporate-travel-recovery"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  Hotels, Banquets &amp; Corporate Travel Recovery Hub
                </Link>
                , alongside our{" "}
                <Link href="/recovery/business-dues" className="text-[#DC2626] font-bold hover:underline">
                  B2B Business Dues Recovery
                </Link>{" "}
                and{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  Tri-Channel Bulk Notice Dispatch
                </Link>{" "}
                guides:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/hotel-btc-bill-to-company-corporate-credit-account-default-recovery"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wide">
                      Sibling Spoke • B2B-191 (Hotel BTC Ledgers)
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Recovering Aged &lsquo;Bill-to-Company&rsquo; (BTC) City-Ledger Accounts
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Enforce corporate crew layover contracts, GSTR-2B ITC estoppel, and Order 37 Summary Suits for business hotels.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-3">
                    Read Hotel BTC Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  href="/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wide">
                      Sibling Spoke • B2B-192 (IATA &amp; TMCs)
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#DC2626] mt-1">
                      IATA Corporate Travel Agent (TMC) Flight Ticket Credit Default Recovery
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Protect your IATA BSP settlement cycle using flown-PNR manifests, director guarantees, and Order 38 Rule 5 attachment.
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
                      Sibling Spoke • B2B-193 (Wedding Venues)
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Destination Wedding &amp; Banquet Post-Event Balance Cheque Bounce
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Prosecute stopped wedding cheques under NI Act s.138/143A using signed event-captain extra-plate slips.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-3">
                    Read Banquet Playbook <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-red-500 bg-slate-50 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wide">
                      Institutional Desk • 10–10,000+ Cases
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Bulk Fleet &amp; Charter Receivables CSV Notice Dispatch Solution
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Upload aged Tally/ERP charter and coach fleet ledgers for simultaneous advocate-signed Email, WhatsApp &amp; Speed Post RPAD notices.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] mt-3">
                    Explore Bulk Desk <ArrowRight className="w-3.5 h-3.5" />
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
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Air-Charter & Coach Debt Recovery
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
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities, DGCA & Aviation Legal References
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                All statutory procedures and creditor remedies detailed in this aviation charter and luxury fleet recovery playbook are verified against official Indian legislative texts and regulatory portals:
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
                  Authored by <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                </span>
                <span>Statutory baseline verified for 2026–2027 Commercial Courts, DGCA &amp; BSA s.63 compliance</span>
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
