import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import OfcTowerTableOfContents from "./OfcTowerTableOfContents";
import OfcTowerScenarioTabs from "./OfcTowerScenarioTabs";
import OfcTowerCTA from "./OfcTowerCTA";

export const revalidate = 86400;

const PAGE_URL = "/telecom-tower-ip1-optical-fiber-ofc-trenching-contractor-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Completed HDD Optical-Fiber Trenching & OTDR Link Acceptance—Yet the IP-1 / EPC Prime Is Sitting on Your Bills? Telecom Infra Recovery";

// Tightened from 64ch PDF draft to 53ch for Screaming Frog 30-60ch compliance
const META_TITLE = "OFC Fiber Trenching & Telecom Tower O&M Bill Recovery";

// Tightened from 164ch PDF draft to 144ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Telecom OFC splicing & tower O&M vendors face 180-day AT delays & wrongful ROW deductions. Enforce OTDR sign-offs & MSMED Act s.15\u201318 recovery.";

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
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15\u201318 & 24 \u2014 45-Day Payment Ceiling, 3x RBI Compound Interest & MSEFC)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "MSME Samadhaan Portal \u2014 Ministry of MSME Delayed Payment Monitoring & MSEFC Reference Filing",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 8, 53, 73 & 74 \u2014 Implied Acceptance, Prevention of Performance & Liquidated Damages Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII \u2014 Summary Procedure on Written Work Orders, MBs & Certified RA Bills)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 \u2014 Electronic Record Admissibility for OTDR .sor Traces, GPS Photos & Tower NOC Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Department of Telecommunications (DoT) \u2014 Infrastructure Provider Category-I (IP-1) & Right-of-Way (RoW) Rules",
    url: "https://dot.gov.in/",
  },
];

const FAQS = [
  {
    q: "Can an IP-1 or EPC prime withhold our OFC trenching RA bills indefinitely by delaying the Acceptance Testing (AT) certificate?",
    a: "No. Under Section 2(b) and Section 15 of the MSMED Act, 2006, if the buyer does not record a written objection within 15 days from the date of delivery or work completion, the work is 'deemed accepted' and the 45-day statutory payment clock starts automatically. Furthermore, if the IP-1 or telecom operator is already passing live commercial traffic over the spliced fiber, that commercial utilization constitutes implied acceptance under Section 8 of the Indian Contract Act, 1872.",
  },
  {
    q: "How can an OFC contractor challenge wrongful municipal or NHAI Right-of-Way (ROW) penalty deductions from RA bills?",
    a: "Under Sections 73 and 74 of the Indian Contract Act, 1872, an EPC prime cannot unilaterally deduct arbitrary ROW restoration penalties or liquidated damages from your Running Account (RA) bill or retention money without proving actual financial loss and causal attribution. Demand the original municipal/NHAI/PWD demand challan, payment UTR, and contemporaneous joint Measurement Book (MB) entry within 7 days of any debit note.",
  },
  {
    q: "Are 'back-to-back' or 'pay-when-paid' clauses in BharatNet and Smart City subcontracts enforceable against MSME contractors?",
    a: "When the subcontractor holds a valid Udyam Registration predating the Work Order or Purchase Order, Section 15 read with Section 24 of the MSMED Act, 2006 overrides any 'pay-when-paid' or 'back-to-back' payment deferral clause beyond 45 days. A Tier-1 EPC cannot indefinitely shift BSNL, BBNL, or State IT SPV disbursement delays onto a Micro or Small enterprise vendor.",
  },
  {
    q: "What legal remedy do telecom tower diesel-filling, DG O&M, and security vendors have when TowerCos withhold monthly reimbursements?",
    a: "Passive-infra O&M vendors can enforce monthly diesel reimbursements and fixed site-care fees through MSEFC Samadhaan (for Udyam-registered MSMEs) or an Order XXXVII CPC Summary Suit (for non-MSMEs or claims backed by signed logbooks and GST invoices). Retroactive 'fuel sensor variance' or 'uptime SLA' deductions raised months after app-logged refueling fail the Mobilox test of a bona fide pre-existing dispute.",
  },
  {
    q: "Should a telecom infra subcontractor file before MSEFC Samadhaan, Arbitration, or Commercial Court?",
    a: "If you hold a Micro or Small Udyam certificate issued before the Work Order date, MSEFC Samadhaan (MSMED Act s.18) is the strongest forum because it grants statutory compound interest at 3x the RBI Bank Rate and requires the buyer to pre-deposit 75% of the award before challenging it under Section 19. For Medium enterprises or non-MSMEs, an Order XXXVII Summary Suit (if no arbitration clause exists) or Section 21 Arbitration notice (if an arbitration clause exists) is the proper track.",
  },
  {
    q: "Does an arbitration clause in the IP-1 / EPC Work Order block an MSME contractor from approaching MSEFC?",
    a: "No. The Supreme Court has settled that the MSMED Act, 2006 is a special welfare legislation whose statutory dispute resolution mechanism under Section 18 overrides private arbitration agreements. An MSME vendor can bypass an unfavorable prime-appointed arbitration clause and file directly on the MSME Samadhaan portal.",
  },
  {
    q: "What electronic proof makes OTDR link tests and tower diesel logs admissible in court?",
    a: "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (replacing Section 65B of the Evidence Act), raw OTDR `.sor` trace files, splice-loss PDFs, geo-tagged HDD trench-depth photographs, and TowerCo mobile-app diesel-fill logs must be accompanied by a signed electronic-record certificate from the person in lawful control of the testing device or server.",
  },
];

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
    // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How OFC Trenching & Telecom Tower O&M Contractors Recover Withheld Bills",
  description:
    "5-stage statutory recovery playbook for HDD optical-fiber contractors, BharatNet subcontractors, and tower O&M vendors facing AT sign-off delays and wrongful ROW deductions.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock OTDR Traces, Measurement Books & BSA s.63 Proof",
      text: "Archive raw .sor OTDR splice traces, geo-tagged trenching photos, diesel GST bills, and signed site logbooks with a Bharatiya Sakshya Adhiniyam 2023 s.63 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Trigger 15-Day Deemed Acceptance & Rebut ROW Debit Notes",
      text: "Serve a formal written notice recording link handover and disputing any unsubstantiated municipal ROW or SLA back-charge under Contract Act s.73-74.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Advocate-Drafted MSMED s.15 / Order XXXVII Demand Notice",
      text: "Dispatch a multi-channel legal notice (Email + WhatsApp + Speed Post RPAD) demanding principal, retention money, and 3x RBI Bank Rate compound interest.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Escalate to MSEFC Samadhaan, Section 21 Arbitration, or Commercial Court",
      text: "File on MSME Samadhaan (for pre-PO Udyam Micro/Small vendors) or initiate Commercial Court s.12A / Order XXXVII / IBC s.8 proceedings.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Enforce Award with 75% Pre-Deposit Shield",
      text: "Enforce the MSEFC award or summary decree; any buyer challenge under MSMED s.19 requires a mandatory 75% pre-deposit of the awarded sum.",
    },
  ],
};

const FAQ_SCHEMA = {
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
      name: "Telecom, ISP & Data Center Recovery",
      item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "OFC Trenching & Tower O&M Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function OfcTowerContractorRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data */}
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
            <span>IND-18 Telecom Infra Playbook</span>
            <span className="text-slate-500">&bull;</span>
            <span>OTDR AT &amp; MSMED Act s.15&ndash;18</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Telecom, ISP &amp; Data Center Recovery framework
            </Link>
            , IP-1 licensees and EPC primes cannot indefinitely stall OFC trenching, BharatNet, or tower O&amp;M bills by withholding Acceptance Testing (AT) certificates. Raw OTDR traces trigger 15-day deemed acceptance under MSMED Act s.2(b) and 45-day payment enforcement at 3x RBI compound interest.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Deemed Acceptance Clock (MSMED s.2(b))
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Compound Monthly Interest (MSMED s.16)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">75% Deposit</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Mandatory Buyer Pre-Deposit (s.19)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">45-Day Cap</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Overrides &ldquo;Pay-When-Paid&rdquo; (s.15 &amp; s.24)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Telecom, ISP & Data Center Recovery",
              href: "/industries/telecom-isp-datacenter-msp-recovery",
            },
            {
              label: "OFC Trenching & Tower O&M Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          <OfcTowerTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-certification-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why IP-1 &amp; EPC Primes Sit on OTDR-Cleared Bills—and How to Break It
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India&apos;s 5G backhaul densification, BharatNet Phase-II/III rollouts, and Smart City fiber corridors, regional Horizontal Directional Drilling (HDD) trenching contractors, OFC splicing teams, and passive telecom tower O&amp;M vendors finance massive upfront working capital. You pay for bentonite mud, HDPE ducting, fusion splicing crews, municipal Right-of-Way (ROW) coordination, and daily diesel deliveries to keep tower DG sets running. Yet once the fiber is blown and the Optical Time-Domain Reflectometer (OTDR) trace clears DoT/TEC attenuation benchmarks, the Infrastructure Provider Category-I (IP-1) or Tier-1 EPC prime routinely stalls your Running Account (RA) bill for 120 to 240 days.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The prime contractor&apos;s playbook relies on three artificial bottlenecks: (1) withholding the formal Acceptance Testing (AT) sign-off despite lighting up commercial traffic on your fiber, (2) issuing unilateral debit notes for unverified municipal or NHAI ROW restoration penalties, and (3) invoking &ldquo;back-to-back pay-when-paid&rdquo; clauses tied to BSNL, BBNL, or telecom operator milestone releases. Unlike generic commercial defaults covered under{" "}
                <Link
                  href="/services/vendor-and-invoice-recoveries"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  vendor and invoice recoveries
                </Link>
                , telecom infrastructure disputes turn on technical commissioning records—specifically OTDR <code>.sor</code> files, joint Measurement Books (MBs), and NOC fuel-fill logs—paired with the overriding statutory timeline of the MSMED Act, 2006.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                    The &ldquo;No AT Certificate&rdquo; Myth
                  </p>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    EPC procurement teams often tell subcontractors that no invoice can be raised without a signed AT Certificate. Legally, under Section 53 of the Indian Contract Act, a party cannot take advantage of its own failure to inspect, and Section 2(b) of the MSMED Act deems acceptance complete after 15 days of silent handover.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                    Statutory Overriding Power
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    If your enterprise holds a Micro or Small Udyam Registration predating the Work Order, Section 24 of the MSMED Act overrides &ldquo;pay-when-paid&rdquo; clauses and prime-appointed arbitration clauses, routing your claim straight to MSEFC Samadhaan with 3x RBI compound interest.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  5-Stage OFC &amp; Tower O&amp;M Escalation Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Avoid informal WhatsApp follow-ups with project managers—they create zero limitation or deemed-acceptance record. Execute this five-stage statutory escalation sequence to convert technical handover into an enforceable money decree or MSEFC award.
              </p>

              {/* Desktop SVG Decision Flowchart */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-5 overflow-x-auto">
                <svg
                  viewBox="0 0 920 220"
                  width={920}
                  height={220}
                  role="img"
                  aria-label="5-Stage OFC Trenching and Tower O&M Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="10" y="30" width="155" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="34" cy="54" r="12" fill="#DC2626" />
                  <text x="34" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="54" y="58" fill="#F8FAFC" fontSize="12" fontWeight="bold">OTDR &amp; MB</text>
                  <text x="22" y="84" fill="#CBD5E1" fontSize="10.5">Export .sor traces,</text>
                  <text x="22" y="100" fill="#CBD5E1" fontSize="10.5">GPS trench photos,</text>
                  <text x="22" y="116" fill="#CBD5E1" fontSize="10.5">diesel logbooks &amp;</text>
                  <text x="22" y="132" fill="#CBD5E1" fontSize="10.5">BSA s.63 certificate.</text>
                  <text x="22" y="160" fill="#F87171" fontSize="10" fontWeight="bold">Day 0&ndash;7</text>

                  <line x1="165" y1="105" x2="195" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Stage 2 */}
                  <rect x="197" y="30" width="155" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="221" cy="54" r="12" fill="#DC2626" />
                  <text x="221" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="241" y="58" fill="#F8FAFC" fontSize="12" fontWeight="bold">Deemed AT</text>
                  <text x="209" y="84" fill="#CBD5E1" fontSize="10.5">Serve 15-day deemed</text>
                  <text x="209" y="100" fill="#CBD5E1" fontSize="10.5">acceptance notice &amp;</text>
                  <text x="209" y="116" fill="#CBD5E1" fontSize="10.5">rebut any wrongful</text>
                  <text x="209" y="132" fill="#CBD5E1" fontSize="10.5">ROW debit note.</text>
                  <text x="209" y="160" fill="#FBBF24" fontSize="10" fontWeight="bold">Day 15 Trigger</text>

                  <line x1="352" y1="105" x2="382" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Stage 3 */}
                  <rect x="384" y="30" width="155" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="408" cy="54" r="12" fill="#DC2626" />
                  <text x="408" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="428" y="58" fill="#F8FAFC" fontSize="12" fontWeight="bold">Legal Notice</text>
                  <text x="396" y="84" fill="#CBD5E1" fontSize="10.5">Advocate demand</text>
                  <text x="396" y="100" fill="#CBD5E1" fontSize="10.5">via Email, WhatsApp</text>
                  <text x="396" y="116" fill="#CBD5E1" fontSize="10.5">&amp; RPAD citing s.15</text>
                  <text x="396" y="132" fill="#CBD5E1" fontSize="10.5">&amp; s.43B(h) tax risk.</text>
                  <text x="396" y="160" fill="#F87171" fontSize="10" fontWeight="bold">Day 45 Breach</text>

                  <line x1="539" y1="105" x2="569" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Stage 4 */}
                  <rect x="571" y="30" width="155" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="595" cy="54" r="12" fill="#DC2626" />
                  <text x="595" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="615" y="58" fill="#F8FAFC" fontSize="12" fontWeight="bold">Forum Routing</text>
                  <text x="583" y="84" fill="#CBD5E1" fontSize="10.5">MSME -&gt; MSEFC;</text>
                  <text x="583" y="100" fill="#CBD5E1" fontSize="10.5">Non-MSME -&gt; Order</text>
                  <text x="583" y="116" fill="#CBD5E1" fontSize="10.5">XXXVII / s.21 Arb /</text>
                  <text x="583" y="132" fill="#CBD5E1" fontSize="10.5">IBC s.8 (&gt;= ₹1 Cr).</text>
                  <text x="583" y="160" fill="#34D399" fontSize="10" fontWeight="bold">90-Day Conciliation</text>

                  <line x1="726" y1="105" x2="756" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Stage 5 */}
                  <rect x="758" y="30" width="152" height="150" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="782" cy="54" r="12" fill="#10B981" />
                  <text x="782" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="802" y="58" fill="#F8FAFC" fontSize="12" fontWeight="bold">Execution</text>
                  <text x="770" y="84" fill="#CBD5E1" fontSize="10.5">Enforce award with</text>
                  <text x="770" y="100" fill="#CBD5E1" fontSize="10.5">75% pre-deposit</text>
                  <text x="770" y="116" fill="#CBD5E1" fontSize="10.5">shield (s.19) &amp;</text>
                  <text x="770" y="132" fill="#CBD5E1" fontSize="10.5">bank attachment.</text>
                  <text x="770" y="160" fill="#34D399" fontSize="10" fontWeight="bold">3x RBI Interest</text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    num: "1",
                    title: "OTDR & MB Proof Pack (Day 0–7)",
                    desc: "Export raw .sor OTDR splice traces, geo-tagged trench photos, diesel logbooks, and BSA 2023 s.63 certificate.",
                  },
                  {
                    num: "2",
                    title: "Deemed Acceptance & ROW Rebuttal (Day 15)",
                    desc: "Serve 15-day deemed acceptance notice under MSMED s.2(b) and reject unsubstantiated municipal ROW debit notes.",
                  },
                  {
                    num: "3",
                    title: "Advocate Demand Notice (Day 45 Breach)",
                    desc: "Dispatch Email + WhatsApp + Speed Post RPAD demand citing MSMED s.15-16 and Income Tax s.43B(h) disallowance.",
                  },
                  {
                    num: "4",
                    title: "Forum Routing (MSEFC / Order 37 / IBC)",
                    desc: "File on MSME Samadhaan (pre-PO Udyam) or pursue Order XXXVII CPC, s.21 Arbitration, or IBC s.8 (>= ₹1 Cr).",
                  },
                  {
                    num: "5",
                    title: "Award Execution & 75% Pre-Deposit Shield",
                    desc: "Enforce MSEFC award; buyer cannot appeal under s.19 without depositing 75% of principal + 3x RBI compound interest.",
                  },
                ].map((stage) => (
                  <div
                    key={stage.num}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
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

            {/* Section 3: Statutory & Forum Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory &amp; Forum Matrix for Telecom Infra Contractors
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Selecting the right legal forum depends on three thresholds: (a) whether your Udyam Micro/Small registration predates the Work Order, (b) whether the IP-1 / EPC prime has raised a genuine contemporaneous defect or only a post-default excuse, and (c) the total principal plus retention arrears.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Forum</th>
                      <th className="p-3.5 font-bold">Ideal Telecom Infra Use-Case</th>
                      <th className="p-3.5 font-bold">Key Statutory Leverage</th>
                      <th className="p-3.5 font-bold">Threshold / Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act s.15&ndash;18 (MSEFC Samadhaan)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        OTDR-cleared OFC trenching, splicing &amp; tower O&amp;M bills stalled &gt;45 days
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Overrides &ldquo;pay-when-paid&rdquo; &amp; private arbitration; 3x RBI Bank Rate compound interest; 75% pre-deposit for appeal (s.19)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        No minimum floor; Udyam Micro/Small must predate PO; 90-day statutory disposal target
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC Summary Suit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Medium/non-MSME vendors holding signed MBs, AT certificates &amp; GST invoices
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Defendant cannot defend as of right—must obtain leave to defend by showing a triable issue
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Works where no arbitration clause exists; Commercial Court if &ge; ₹3 Lakh
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Indian Contract Act s.53, s.73 &amp; s.74
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Wrongful municipal/NHAI ROW penalty deductions &amp; retention forfeiture
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Bars prime from profiting from own AT delay (s.53) or deducting unproved penalties without actual loss proof (s.74)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        3-year limitation from date of wrongful deduction / RA bill rejection
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Arbitration Act s.21 &amp; s.11
                      </td>
                      <td className="p-3.5 text-slate-700">
                        High-value EPC / BharatNet subcontracts (&ge; ₹25L) for non-MSME entities
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Freezes limitation on service of s.21 notice; invalidates unilateral prime-appointed arbitrators (Perkins / CORE)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        12-month award timeline under s.29A post-pleadings
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        IBC 2016 s.8 &amp; s.9 (NCLT)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Undisputed multi-circle TowerCo diesel / O&amp;M or OFC EPC arrears &ge; ₹1 Cr
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10-day statutory Demand Notice (Form 3/4) creates acute board-level settlement pressure
                      </td>
                      <td className="p-3.5 text-slate-700">
                        ₹1 Crore default floor; requires zero pre-existing bona fide dispute
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Telecom Infra Payment Failure Modes &amp; Creditor Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your exact operational bottleneck below to inspect the commercial cause, statutory counter-leverage, and 3-step execution workflow.
              </p>

              <OfcTowerScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked MSME Interest Ledger: ₹42L OFC &amp; Tower O&amp;M Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many telecom contractors settle for 60%–70% of their principal because they ignore statutory compound interest under Section 16 of the MSMED Act, 2006. When an IP-1 or EPC prime delays payment by 240 days (roughly 8 months) past the 45-day ceiling, compound interest at three times the RBI Bank Rate (illustrated at 6.50% &times; 3 = 19.50% p.a. compounded monthly) dramatically shifts settlement leverage in your favor.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                      Illustrative Claim Breakdown (Udyam Micro/Small Contractor)
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white">
                      24-km HDD Trenching RA Bill + 40-Site Tower Diesel O&amp;M
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    240 Days Overdue
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <p className="text-slate-400">1. Certified HDD &amp; Splicing RA Bill</p>
                    <p className="text-lg font-extrabold text-white mt-0.5">₹26,50,000</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <p className="text-slate-400">2. Tower Diesel &amp; O&amp;M Monthly Bills</p>
                    <p className="text-lg font-extrabold text-white mt-0.5">₹10,50,000</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <p className="text-slate-400">3. Unproved ROW Deduction Reversed</p>
                    <p className="text-lg font-extrabold text-amber-400 mt-0.5">₹5,00,000</p>
                  </div>
                  <div className="bg-emerald-950/60 rounded-xl p-3.5 border border-emerald-700/60">
                    <p className="text-emerald-300">4. MSMED s.16 Interest (19.5% p.a. Monthly Comp.)</p>
                    <p className="text-lg font-extrabold text-emerald-400 mt-0.5">~₹5,79,800</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-700">
                  <div>
                    <p className="text-xs text-slate-400">Total Enforceable Demand (Principal + s.16 Interest)</p>
                    <p className="text-2xl font-black text-white">₹47,79,800</p>
                  </div>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors"
                  >
                    Calculate Your Exact MSME Interest &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  OTDR Trace, Measurement Book &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before serving a legal notice or uploading a claim on MSME Samadhaan, assemble these six evidentiary pillars so the IP-1 or EPC prime cannot manufacture a technical defect defense:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Executed Work Order / PO & BOQ",
                    detail:
                      "Signed Rate Contract, Bill of Quantities (BOQ), and any email amendments authorizing extra HDD rock-boring or micro-trenching depth.",
                  },
                  {
                    title: "2. Raw OTDR .sor Traces & As-Built Maps",
                    detail:
                      "Bi-directional 1310nm/1550nm OTDR trace files showing splice loss within TEC limits, paired with GPS-tagged manhole/route-marker photos.",
                  },
                  {
                    title: "3. Joint Measurement Book (MB) / Site Logs",
                    detail:
                      "Site engineer-signed Measurement Book sheets, or email proof submitting the MB where the prime failed to object within 15 days.",
                  },
                  {
                    title: "4. Diesel GST Bills & Tower App Exports",
                    detail:
                      "Pump-wise GST invoices, DG hour-meter snapshots, and screenshots/CSV exports from the TowerCo&apos;s own O&M mobile portal.",
                  },
                  {
                    title: "5. Pre-PO Udyam Registration Certificate",
                    detail:
                      "Your Udyam Micro or Small certificate showing registration date strictly prior to the Work Order/PO date (mandatory for MSEFC jurisdiction).",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    detail:
                      "A signed Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate authenticating all OTDR exports, NOC portal logs, and WhatsApp site approvals.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Dual-Track B2B CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Start Single-PO Recovery or Upload Multi-Circle OFC Arrears
                </h2>
              </div>

              <OfcTowerCTA />
            </section>

            {/* Section 8: Related Telecom & Commercial Recovery Resources */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Related Telecom, ISP &amp; Commercial Recovery Resources
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Telecom, Enterprise ISP, Data Center & MSP Recovery Hub",
                    href: "/industries/telecom-isp-datacenter-msp-recovery",
                    desc: "Complete IND-18 pillar playbook covering TRAI s.14, DPDP server lien, and telecom vendor recovery.",
                  },
                  {
                    title: "Enterprise ILL / MPLS / SD-WAN Lock-In Breach Recovery",
                    href: "/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp",
                    desc: "How ISPs recover unamortized last-mile fiber CapEx, waived OTCs, and unreturned MUX CPE.",
                  },
                  {
                    title: "Data Center Colocation Server Lien & DPDP Suspension Law",
                    href: "/data-center-colocation-bare-metal-hosting-default-suspension-lien-law",
                    desc: "Exercising Contract Act s.170/171 physical rack lien with a 7-day DPDP-safe data export window.",
                  },
                  {
                    title: "Order XXXVII CPC Summary Suit for Money Recovery",
                    href: "/law/order-37-summary-suit-money-recovery",
                    desc: "Fast-track civil recovery on written contracts, certified MBs, and acknowledged GST invoices.",
                  },
                  {
                    title: "MSME Delayed Payment Interest Calculator (s.16)",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Compute exact 3x RBI Bank Rate monthly compound interest on overdue telecom infra bills.",
                  },
                  {
                    title: "Commercial Legal Notice & Reply Workspace",
                    href: "/templates/legal-notice-reply-format",
                    desc: "Draft and structure formal commercial demand notices and debit-note rebuttals.",
                  },
                ].map((linkItem) => (
                  <Link
                    key={linkItem.href}
                    href={linkItem.href}
                    className="group block bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-red-200 rounded-xl p-4 transition-colors"
                  >
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {linkItem.title} &rarr;
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{linkItem.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: OFC &amp; Tower O&amp;M Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="list-none cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Sources &amp; Official Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2 transition-colors"
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
