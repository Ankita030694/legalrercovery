import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import VehicleRepossessionTableOfContents from "./VehicleRepossessionTableOfContents";
import VehicleRepossessionScenarioTabs from "./VehicleRepossessionScenarioTabs";
import VehicleRepossessionCTA from "./VehicleRepossessionCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/vehicle-tractor-hypothecation-loan-repossession-notice-banks";
const PAGE_H1 =
  "Lawful Hypothecated Vehicle & Tractor Repossession for Banks: Pre-Seizure Notice, Police Intimation & Deficit Recovery";
const META_TITLE =
  "Hypothecated Vehicle Loan Seizure: Pre-Repossession Law";
const META_DESCRIPTION =
  "Prevent theft/kidnapping FIRs against bank repossession teams. Master pre-seizure recall, pre/post police intimation, RTO Form 36 & deficit recovery.";

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
          "Hypothecated Vehicle and Tractor Repossession Legal Notice SOP for Indian Banks"
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
      "Motor Vehicles Act, 1988 (Section 51 — Special Provisions Regarding Motor Vehicle Subject to Hypothecation & s.51(5) Fresh RC) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1798",
  },
  {
    title:
      "Arbitration and Conciliation Act, 1996 (Sections 9, 17, 21 & 36 — Interim Custody, Court Receiver & Award Execution) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "SARFAESI Act, 2002 (Sections 13(2), 13(4) & 26D — Enforcement of Hypothecated Movable Security & CERSAI) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title:
      "Indian Contract Act, 1872 (Sections 73, 128 & 176 — Co-Extensive Guarantor Liability & Reasonable Pre-Sale Notice) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "RBI Circular — Engagement of Recovery Agents by Banks & Fair Practices Code for Lenders (Updated Directions)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=4141",
  },
  {
    title:
      "Parivahan Vahan 4.0 Portal (Form 36 Fresh RC to Financier & Hypothecation Endorsement Services) — MoRTH",
    url: "https://vahan.parivahan.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Dispatch, GPS, Bodycam & Auction Logs) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita, 2023 (Sections 303, 309, 316 & 323 — Criminal Liability Guardrails & Borrower Asset Concealment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
];

const FAQS = [
  {
    question:
      "Can an Indian bank legally repossess a hypothecated vehicle or tractor without a court order?",
    answer:
      "Only if the Loan-cum-Hypothecation Agreement contains an explicit, clearly printed repossession clause AND the bank strictly executes peaceful, non-coercive repossession following the Supreme Court mandates in ICICI Bank v. Prakash Kaur (2007) and Citicorp Maruti Finance v. S. Vijayalaxmi (2012). This requires serving a prior written Loan Recall-cum-Pre-Repossession Notice (typically 7–15 days), intimating the local police station before and after seizure, deploying only IIBF-certified recovery agents, and immediately retreating to an Arbitration Section 9 Court Receiver petition if the borrower or family physically objects.",
  },
  {
    question:
      "Why is pre-seizure and post-seizure police station intimation mandatory for banks?",
    answer:
      "When a defaulting borrower discovers their hypothecated car, truck, or tractor missing from their yard or highway stop, their immediate counter-move is lodging an FIR for vehicle theft (BNS Section 303), robbery (BNS Section 309), or wrongful restraint/kidnapping (BNS Section 140) against bank collection staff. Filing a written pre-seizure intimation with the jurisdictional Station House Officer (SHO) — obtaining a General Diary (GD) entry or timestamped email acknowledgment — followed immediately by a post-seizure intimation enclosing the signed Inventory Panchnama neutralizes dishonest intent (mens rea) and shields bank officers from arrest.",
  },
  {
    question:
      "How many days must a bank wait between repossessing a vehicle and auctioning it?",
    answer:
      "Under RBI Fair Practice norms and Supreme Court jurisprudence (including Citicorp Maruti Finance and Magma Fincorp v. Rajesh Kumar Tiwari), banks must serve a formal Pre-Sale Valuation and Redemption Notice granting the borrower a reasonable final window — standardly 7 to 15 days — to inspect the independent valuer's assessment and redeem the vehicle by clearing overdue dues. Selling a repossessed vehicle silently or before the redemption notice expires renders the auction defective and exposes the bank to consumer-court punitive compensation and disallowance of any deficit claim.",
  },
  {
    question:
      "How does a bank obtain a Fresh RC via RTO Form 36 under Section 51(5) when the borrower refuses to surrender the original RC?",
    answer:
      "Section 51(5) of the Motor Vehicles Act, 1988 read with Rule 61(2) of the Central Motor Vehicles Rules, 1989 empowers the Registering Authority (RTO) to cancel the borrower's original Registration Certificate and issue a Fresh RC directly in the financier's name upon default and lawful repossession. The bank submits Form 36 online on Parivahan Vahan 4.0 along with the hypothecation agreement, recall notice dispatch proof, pre/post police intimations, and inventory panchnama. The RTO issues a statutory show-cause notice (Form 37) to the registered owner; if the borrower fails to respond or produce a stay order, the RTO issues the Fresh RC to the bank even without the physical old RC.",
  },
  {
    question:
      "Can a bank recover the remaining shortfall (deficit) after auctioning a hypothecated vehicle or tractor?",
    answer:
      "Yes. Auctioning a hypothecated vehicle does not extinguish the borrower's or guarantor's balance loan liability unless the bank explicitly executes a full-and-final One-Time Settlement (OTS). To lawfully enforce the shortfall (Loss-on-Sale), the bank must serve a Post-Auction Appropriation and Deficit Recovery Notice itemizing the independent valuation report, public auction bids, realized sale value, towing/stockyard charges, and net balance due. Because most retail auto and tractor shortfalls sit below the ₹20 Lakh DRT floor, banks recover deficits via Pre-Litigation National Lok Adalat, neutral institutional ODR Arbitration (post-CORE compliant), Order XXXVII CPC summary suits, or PSS Act Section 25 e-NACH prosecution.",
  },
  {
    question:
      "When should an Auto or Tractor Collections Head opt for an Arbitration Section 9 Court Receiver instead of field repossession?",
    answer:
      "Banks should bypass direct field repossession and immediately file an ex-parte Section 9 interim custody application (Arbitration and Conciliation Act, 1996) whenever: (1) the borrower has issued written threats or lives in a politically sensitive rural tehsil where farm-gate tractor seizures risk mob conflict; (2) the commercial vehicle is locked inside closed third-party premises or shifted interstate; (3) the borrower is suspected of stripping tyres, batteries, or hydraulic implements; or (4) the ticket value exceeds ₹12 Lakh–₹15 Lakh and zero criminal litigation risk is acceptable to zonal compliance.",
  },
  {
    question:
      "What happens under SARFAESI Act Section 31(i) for agricultural tractors versus commercial vehicles?",
    answer:
      "While Section 31(i) of the SARFAESI Act, 2002 exempts 'agricultural land' from enforcement, a hypothecated tractor is movable plant/machinery — NOT agricultural land. However, SARFAESI Section 31(h) and Section 31(j) still bar SARFAESI action where total dues are under ₹1 Lakh or remaining debt is below 20% of principal and interest, and Rule 4–6 of the Security Interest (Enforcement) Rules, 2002 impose strict 60-day Section 13(2) demand + 30-day sale notice timelines. For speed and lower depreciation loss on tractors and retail cars, banks therefore pair contractual peaceful repossession (or Section 9 Court Receiver custody) with the 4-Notice Statutory Sequence.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T16:12:00+05:30",
  dateModified: "2026-11-19T16:12:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
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
    name: "Hypothecated Vehicle and Tractor Loan Pre-Repossession, Police Intimation, Form 36 & Deficit Recovery for Indian Banks",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "4-Notice Statutory Sequence for Lawful Hypothecated Vehicle & Tractor Repossession by Banks",
  description:
    "Step-by-step bank compliance sequence covering Pre-Seizure Loan Recall, Pre/Post Police Station Intimation, 7/15-Day Pre-Sale Valuation Redemption Notice, RTO Form 36, and Post-Auction Deficit Recovery.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Notice 1: Loan Recall-cum-Pre-Repossession Cure Notice (7–15 Days)",
      text: "Serve a fact-verified Recall and Pre-Repossession Notice to borrower and guarantor via Email, WhatsApp, and Speed Post RPAD stating itemized principal, non-capitalized penal charges, and the explicit cure deadline before asset enforcement.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Notice 2: Pre-Seizure & Post-Seizure Police Station Intimation + Inventory Panchnama",
      text: "File written Pre-Seizure Intimation with the jurisdictional SHO (via station diary and policeStationEmail CC), execute peaceful seizure or Section 9 Court Receiver custody with video panchnama, and submit Post-Seizure Intimation immediately.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Notice 3: 7/15-Day Pre-Sale Valuation, Redemption & RTO Form 36 Notice",
      text: "Obtain an independent licensed surveyor valuation report, serve the Pre-Sale Redemption Notice citing reserve price and auction window, and apply for Fresh RC under Motor Vehicles Act Section 51(5) via RTO Form 36.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Notice 4: Post-Auction Appropriation & Deficit (Loss-on-Sale) Recovery Notice",
      text: "Credit transparent e-auction proceeds to the loan account, dispatch the Post-Auction Deficit Recovery Notice to borrower and guarantor, and enforce the shortfall via Lok Adalat, neutral ODR Arbitration, or Order XXXVII CPC.",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banks & Financial Institutions",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Vehicle & Tractor Repossession Law",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function VehicleTractorRepossessionBanksPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Banks & Financial Institutions",
      href: "/industries/banks-loan-recovery",
    },
    {
      label: "Vehicle & Tractor Repossession Law",
      href: PAGE_URL,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Schemas */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-01 &bull; Auto, Tractor &amp; Retail CV Playbook</span>
            <span>&bull;</span>
            <span>Prakash Kaur &bull; Citicorp &bull; MV Act s.51(5)</span>
          </div>

          {/* Single Page H1 (verbatim == ARTICLE_SCHEMA.headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Auto &amp; Tractor Collections SOP
            </span>
            Under Supreme Court rulings in <em>ICICI Bank v. Prakash Kaur</em>{" "}
            and <em>Citicorp Maruti Finance</em>, forcible roadside vehicle
            seizure exposes bank officers to theft/kidnapping FIRs and
            ₹5–₹10 Lakh consumer penalties. Through our{" "}
            <Link
              href="/industries/banks-loan-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Bank Loan &amp; NPA Legal Recovery Platform
            </Link>
            , lenders execute the 4-notice statutory sequence—Loan Recall,
            Pre/Post SHO Police Intimation, Pre-Sale Valuation &amp; Form 36,
            and Post-Auction Deficit Recovery.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Mandatory Notice Chain
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400">
                4-Notice SOP
              </span>
              <span className="text-[10px] text-slate-400 block">
                Recall &rarr; SHO &rarr; Pre-Sale &rarr; Deficit
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Fresh RC Statutory Rail
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">
                Form 36 / s.51(5)
              </span>
              <span className="text-[10px] text-slate-400 block">
                MV Act 1988 Financier Title
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Unlawful Seizure Penalty
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">
                ₹5L–₹10L + FIR
              </span>
              <span className="text-[10px] text-slate-400 block">
                BNS s.303/s.309 &amp; NCDRC Risk
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Hostile Seizure Shield
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">
                s.9 Receiver
              </span>
              <span className="text-[10px] text-slate-400 block">
                Arbitration Interim Custody
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs (Breadcrumbs component auto-prepends Home) */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <VehicleRepossessionTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Criminal FIR & Consumer-Court Risk */}
            <section
              id="heading-criminal-exposure"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Operational &amp; Criminal Exposure Audit
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Why Unlawful Vehicle Seizures Trigger FIRs &amp; ₹10L Damages
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Across Indian Scheduled Commercial Banks, Small Finance Banks,
                Regional Rural Banks (RRBs), and Cooperative Banks, auto,
                tractor, and retail commercial vehicle (LCV/SCV) portfolios
                suffer from fast-depreciating movable collateral. Unlike
                immovable property mortgages enforced via{" "}
                <Link
                  href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  SARFAESI Section 13(2) demand notices
                </Link>{" "}
                and{" "}
                <Link
                  href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  District Magistrate Section 14 orders
                </Link>
                , a hypothecated car, pickup truck, or 50-HP farm tractor is
                mobile, easily hidden across district lines, and rapidly
                stripped of tyres, batteries, or hydraulic implements once an
                account crosses 60–90 DPD.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                That urgency pushes branch recovery teams into the single
                costliest mistake in retail banking: dispatching outsourced
                roadside repossession agencies to intercept a moving vehicle
                without serving a verifiable pre-repossession legal notice or
                filing prior police intimation. Under the Bharatiya Nyaya
                Sanhita (BNS), 2023 and binding Supreme Court precedent, an
                undocumented highway snatch immediately hands the defaulting
                borrower three lethal counter-weapons:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="bg-red-50/70 border border-red-200 rounded-xl p-4 space-y-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                    1. Criminal FIRs Against Officers
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Borrowers lodge immediate FIRs citing theft (BNS s.303),
                    robbery/extortion (BNS s.309), wrongful restraint (BNS
                    s.126), or abduction (BNS s.140) when drivers or family
                    members are forced out of vehicles on highways—naming Branch
                    Managers and Collection Heads as co-accused.
                  </p>
                </div>
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800">
                    2. ₹5L–₹10L Consumer Penalties
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    District, State, and National Consumer Commissions (NCDRC)
                    routinely award ₹3 Lakh to ₹10 Lakh in punitive compensation
                    plus full vehicle market value restitution whenever a bank
                    fails to produce Speed Post RPAD proof of both Pre-Seizure
                    and Pre-Sale Redemption Notices.
                  </p>
                </div>
                <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-4 space-y-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-red-400">
                    3. RBI Supervisory Sanctions
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Under RBI&apos;s Engagement of Recovery Agents Directions,
                    using non-IIBF-certified agents, contacting borrowers outside
                    8:00 AM–7:00 PM, or failing to maintain board-approved
                    repossessed-asset valuation logs invites RBI monetary fines
                    and regional agency bans.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Crucially, Indian law does <strong>not</strong> strip banks of
                their contractual right to enforce hypothecation. It merely
                requires strict adherence to a documented, fact-verified{" "}
                <strong>4-Notice Statutory Sequence</strong> so that every
                action—from loan recall to RTO Form 36 fresh registration and
                post-auction deficit recovery—is 100% insulated against criminal
                prosecution and consumer-court challenge.
              </p>
            </section>

            {/* Section 2: 4-Notice Statutory Sequence & Decision Tree SVG */}
            <section
              id="heading-four-notice-sequence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Operational Decision Tree
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                The 4-Notice Statutory Sequence for Lawful Repossession
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Every bank vehicle, tractor, and retail commercial vehicle loan
                crossing 60–90 DPD must move through four consecutive,
                evidence-stamped notice gates. Skipping even one gate breaks the
                chain of lawful custody, jeopardizes RTO Form 36 processing, and
                renders any downstream post-auction shortfall irrecoverable.
              </p>

              {/* Desktop SVG Decision Tree Diagram */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                <svg
                  width={820}
                  height={295}
                  viewBox="0 0 820 295"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Four-notice statutory decision tree for lawful bank vehicle and tractor repossession"
                  className="w-full h-auto"
                >
                  {/* Title */}
                  <text
                    x="20"
                    y="26"
                    fill="#F87171"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="1.2"
                  >
                    BANK VEHICLE &amp; TRACTOR HYPOTHECATION 4-NOTICE STATUTORY PIPELINE
                  </text>

                  {/* Node 1 */}
                  <rect
                    x="16"
                    y="48"
                    width="178"
                    height="108"
                    rx="12"
                    fill="#1E293B"
                    stroke="#DC2626"
                    strokeWidth="2"
                  />
                  <rect x="28" y="58" width="66" height="18" rx="9" fill="#DC2626" />
                  <text x="38" y="70" fill="#FFFFFF" fontSize="9.5" fontWeight="700">
                    NOTICE 1
                  </text>
                  <text x="28" y="94" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Loan Recall &amp; Pre-Seizure
                  </text>
                  <text x="28" y="112" fill="#CBD5E1" fontSize="10">
                    7–15 Day Cure Window
                  </text>
                  <text x="28" y="128" fill="#94A3B8" fontSize="9.5">
                    RPAD + Email + WhatsApp
                  </text>
                  <text x="28" y="143" fill="#94A3B8" fontSize="9.5">
                    Borrower + Co-Guarantor
                  </text>

                  {/* Arrow 1 -> 2 */}
                  <line
                    x1="194"
                    y1="102"
                    x2="218"
                    y2="102"
                    stroke="#94A3B8"
                    strokeWidth="2"
                  />
                  <polygon points="218,97 228,102 218,107" fill="#94A3B8" />

                  {/* Node 2 */}
                  <rect
                    x="228"
                    y="48"
                    width="178"
                    height="108"
                    rx="12"
                    fill="#1E293B"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  <rect x="240" y="58" width="66" height="18" rx="9" fill="#D97706" />
                  <text x="250" y="70" fill="#FFFFFF" fontSize="9.5" fontWeight="700">
                    NOTICE 2
                  </text>
                  <text x="240" y="94" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Pre &amp; Post Police Intimation
                  </text>
                  <text x="240" y="112" fill="#CBD5E1" fontSize="10">
                    Local SHO GD + Email CC
                  </text>
                  <text x="240" y="128" fill="#94A3B8" fontSize="9.5">
                    Peaceful Surrender OR
                  </text>
                  <text x="240" y="143" fill="#94A3B8" fontSize="9.5">
                    s.9 Court Receiver + Panchnama
                  </text>

                  {/* Arrow 2 -> 3 */}
                  <line
                    x1="406"
                    y1="102"
                    x2="430"
                    y2="102"
                    stroke="#94A3B8"
                    strokeWidth="2"
                  />
                  <polygon points="430,97 440,102 430,107" fill="#94A3B8" />

                  {/* Node 3 */}
                  <rect
                    x="440"
                    y="48"
                    width="178"
                    height="108"
                    rx="12"
                    fill="#1E293B"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <rect x="452" y="58" width="66" height="18" rx="9" fill="#059669" />
                  <text x="462" y="70" fill="#FFFFFF" fontSize="9.5" fontWeight="700">
                    NOTICE 3
                  </text>
                  <text x="452" y="94" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Pre-Sale &amp; Form 36 RC
                  </text>
                  <text x="452" y="112" fill="#CBD5E1" fontSize="10">
                    7/15-Day Redemption Notice
                  </text>
                  <text x="452" y="128" fill="#94A3B8" fontSize="9.5">
                    Approved Valuer Reserve Price
                  </text>
                  <text x="452" y="143" fill="#94A3B8" fontSize="9.5">
                    RTO Form 36 (MV Act s.51(5))
                  </text>

                  {/* Arrow 3 -> 4 */}
                  <line
                    x1="618"
                    y1="102"
                    x2="642"
                    y2="102"
                    stroke="#94A3B8"
                    strokeWidth="2"
                  />
                  <polygon points="642,97 652,102 642,107" fill="#94A3B8" />

                  {/* Node 4 */}
                  <rect
                    x="652"
                    y="48"
                    width="152"
                    height="108"
                    rx="12"
                    fill="#1E293B"
                    stroke="#38BDF8"
                    strokeWidth="2"
                  />
                  <rect x="664" y="58" width="66" height="18" rx="9" fill="#0284C7" />
                  <text x="674" y="70" fill="#FFFFFF" fontSize="9.5" fontWeight="700">
                    NOTICE 4
                  </text>
                  <text x="664" y="94" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Post-Auction Deficit
                  </text>
                  <text x="664" y="112" fill="#CBD5E1" fontSize="10">
                    Loss-on-Sale Statement
                  </text>
                  <text x="664" y="128" fill="#94A3B8" fontSize="9.5">
                    ODR / Lok Adalat / O.37
                  </text>
                  <text x="664" y="143" fill="#94A3B8" fontSize="9.5">
                    Guarantor s.128 Demand
                  </text>

                  {/* Decision Branch Under Node 2 */}
                  <line
                    x1="317"
                    y1="156"
                    x2="317"
                    y2="188"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  <rect
                    x="110"
                    y="192"
                    width="600"
                    height="84"
                    rx="12"
                    fill="#0F172A"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <text x="128" y="214" fill="#FBBF24" fontSize="10.5" fontWeight="700">
                    CRITICAL FIELD DECISION GATE: BORROWER RESISTANCE OR CONCEALMENT?
                  </text>
                  <text x="128" y="236" fill="#E2E8F0" fontSize="10">
                    &bull; Peaceful / Unattended Yard Surrender &rarr; IIBF DRA Agent + Pre/Post SHO GD + Video Panchnama (Zero Force).
                  </text>
                  <text x="128" y="258" fill="#F87171" fontSize="10">
                    &bull; Verbal/Physical Resistance or Locked Premises &rarr; ABORT FIELD SEIZURE &rarr; Ex-Parte s.9 Court Receiver + Police Aid.
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "Notice 1",
                    color: "border-[#DC2626] bg-red-50/50",
                    badge: "bg-[#DC2626] text-white",
                    title: "Loan Recall & Pre-Repossession Cure Notice (7–15 Days)",
                    desc: "Served via Speed Post RPAD, Email & WhatsApp to borrower and guarantor with RBI-compliant itemized breakup (non-capitalized penal charges).",
                  },
                  {
                    step: "Notice 2",
                    color: "border-amber-500 bg-amber-50/50",
                    badge: "bg-amber-600 text-white",
                    title: "Pre-Seizure & Post-Seizure Police Station Intimation",
                    desc: "Local SHO GD receipt + email CC before and after seizure; abort field action on any resistance and escalate to Arbitration s.9 Court Receiver.",
                  },
                  {
                    step: "Notice 3",
                    color: "border-emerald-600 bg-emerald-50/50",
                    badge: "bg-emerald-700 text-white",
                    title: "7/15-Day Pre-Sale Valuation, Redemption & RTO Form 36",
                    desc: "Licensed surveyor valuation report, final redemption window citing reserve price, and MV Act s.51(5) Form 36 Fresh RC filing on Vahan 4.0.",
                  },
                  {
                    step: "Notice 4",
                    color: "border-sky-600 bg-sky-50/50",
                    badge: "bg-sky-700 text-white",
                    title: "Post-Auction Appropriation & Deficit Recovery Notice",
                    desc: "Itemized e-auction proceeds ledger demanding residual Loss-on-Sale from borrower and co-extensive guarantor prior to Lok Adalat / ODR / Order 37.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`rounded-xl border-l-4 p-4 space-y-1.5 ${item.color}`}
                  >
                    <span
                      className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${item.badge}`}
                    >
                      {item.step}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Enforcement Matrix Table */}
            <section
              id="heading-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Creditor Forum &amp; Seizure Matrix
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Peaceful Seizure vs Section 9 Receiver &amp; SARFAESI Matrix
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Auto and tractor collections heads must match the enforcement
                rail to ticket size, borrower hostility, and collateral
                accessibility. For sub-₹20 Lakh retail vehicle loans excluded
                from the Debt Recovery Tribunal (see our{" "}
                <Link
                  href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Sub-₹20 Lakh Bank Recovery Options Guide
                </Link>
                ), choosing the right track prevents months of yard depreciation
                and litigation stays.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">
                        Enforcement Track
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Governing Statute
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Mandatory Pre-Condition
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Best-Fit Asset &amp; Risk Profile
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Peaceful Contractual Repossession
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Hypothecation Contract + RBI Fair Practice +{" "}
                        <em>Citicorp Maruti</em>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        7–15d Recall Notice + Pre/Post SHO Intimation + IIBF
                        DRA Agent (zero force)
                      </td>
                      <td className="py-3.5 px-4 text-emerald-800 font-medium">
                        Cooperative surrender or parked retail cars/2W/tractors
                        (₹1L–₹12L) with low hostility
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Ex-Parte Court Receiver Custody
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Arbitration Act 1996 s.9 / s.17 (Interim Asset
                        Protection)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Valid Arbitration Clause + Loan Recall Notice + prima
                        facie default &amp; dissipation risk
                      </td>
                      <td className="py-3.5 px-4 text-slate-800 font-medium">
                        Hostile rural tractors, interstate trucks/LCVs, hidden
                        or stripped vehicles (&ge;₹3L Commercial Court)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        SARFAESI Movables Enforcement
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        SARFAESI Act s.13(2), s.13(4) &amp; Enforcement Rules
                        Rule 4–6
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        NPA + CERSAI (s.26D) + 60-day s.13(2) Notice + 30-day
                        Sale Notice (&gt;₹1L &amp; &gt;20% due)
                      </td>
                      <td className="py-3.5 px-4 text-slate-800 font-medium">
                        High-value fleet hypothecation (&ge;₹25L) combined with
                        collateral mortgage security
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        RTO Fresh RC Issuance
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Motor Vehicles Act 1988 s.51(5) &amp; CMV Rules Rule
                        61(2) (Form 36)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Hypothecation Endorsement + Lawful Seizure Proof + RTO
                        Form 37 Notice to Borrower
                      </td>
                      <td className="py-3.5 px-4 text-slate-800 font-medium">
                        Mandatory whenever defaulting borrower refuses to hand
                        over original RC before e-auction
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Post-Auction Deficit Recovery
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Contract Act s.73/s.128, PSS Act s.25, LSA Act s.20(2)
                        Lok Adalat, Neutral ODR
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Valuation Report + 7/15d Pre-Sale Notice + Public
                        Auction Ledger + Notice 4 Deficit Demand
                      </td>
                      <td className="py-3.5 px-4 text-slate-800 font-medium">
                        Recovering ₹1L–₹15L Loss-on-Sale shortfalls from
                        borrower &amp; co-extensive guarantor
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Supreme Court Mandates */}
            <section
              id="heading-sc-mandates"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Verified Binding Precedents
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Supreme Court Mandates: Prakash Kaur, Citicorp &amp; Magma
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Bank legal manuals and vendor agency SLAs must align verbatim
                with four foundational Supreme Court rulings that draw the exact
                constitutional boundary between lawful contractual repossession
                and criminal misconduct:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      1. ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
                      Zero Musclemen Rule
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The Supreme Court categorically deprecated banks hiring
                    recovery musclemen to forcibly seize vehicles from defaulting
                    borrowers, holding that banks must recover loans strictly
                    through lawful procedure recognized by law rather than
                    strong-arm tactics. This ruling directly triggered RBI&apos;s
                    mandatory Recovery Agent Code, IIBF training certification,
                    and board-approved repossession policies.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      2. Citicorp Maruti Finance Ltd. v. S. Vijayalaxmi (2012) 1
                      SCC 1
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
                      3-Judge Bench Mandate
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Clarifying both hire-purchase and hypothecation loans, a
                    3-Judge Bench affirmed that even where the loan agreement
                    contains an express repossession clause, recovery must occur
                    strictly by <strong>due process of law</strong>—never
                    through force. The Court held that notice before seizure and
                    fair notice prior to sale remain essential safeguards to
                    prevent punitive consumer-forum liability.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      3. Charanjit Singh Chadha v. Sudhir Mehra (2001) 7 SCC 417
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                      Criminal Quashing Shield
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Where a financier takes peaceful possession strictly in
                    exercise of an explicit contractual right upon default—with
                    zero dishonest intent—criminal charges of theft cannot be
                    sustained. While <em>Citicorp Maruti</em> subsequently
                    heightened due-process notice safeguards for hypothecation
                    loans, documented Pre-Seizure Notice + SHO Diary Intimation
                    proves bona fide civil enforcement and supports Section 528
                    BNSS (erstwhile Section 482 CrPC) FIR quashing.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      4. Magma Fincorp Ltd. v. Rajesh Kumar Tiwari (2020) 10 SCC
                      399
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Deficiency vs Contract Balance
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The Supreme Court held that a financier exercising a
                    contractual right of repossession after documented default
                    does not automatically commit &ldquo;deficiency in
                    service&rdquo; under the Consumer Protection Act merely by
                    taking possession—provided proper notice was served and no
                    force was used. Conversely, failure to serve pre-sale notice
                    or account fairly for auction proceeds attracts strict
                    proportional damages.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Pre/Post Police Intimation SOP */}
            <section
              id="heading-police-intimation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Field Criminal Immunity Protocol
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Pre-Seizure &amp; Post-Seizure Police Station Intimation SOP
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                A bank&apos;s pre-repossession recall notice loses half its
                protective value if the jurisdictional Station House Officer
                (SHO) learns about the vehicle seizure for the first time from
                an angry borrower filing a stolen-vehicle complaint. Every
                regional auto and tractor collections desk must enforce a strict
                dual-intimation police protocol:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-bold">
                      STEP 2A
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Pre-Seizure Police Intimation (Before Roll-Out)
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        Submit written intimation at the police station having
                        jurisdiction over the borrower&apos;s address or
                        vehicle location, <strong>plus</strong> send official
                        electronic intimation to the SHO&apos;s official
                        government email ID (supported natively via
                        LegalRecovery&apos;s{" "}
                        <code className="bg-slate-200 px-1 rounded text-[11px]">
                          policeStationEmail
                        </code>{" "}
                        CC rail).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        Attach Loan Account Number, Vehicle Registration No.,
                        Engine &amp; Chassis Number, copy of expired 7/15-day
                        Pre-Seizure Recall Notice with India Post RPAD tracking,
                        and Bank Authorization Letter naming the IIBF-certified
                        recovery officer.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        Record the stamped Police Station Receipt / Daily Diary
                        (GD/Roznamcha) number prior to approaching the asset.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#DC2626] text-white text-[11px] font-bold">
                      STEP 2B
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Post-Seizure Police Intimation &amp; Inventory Panchnama
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">&bull;</span>
                      <span>
                        Within 2–4 hours of taking peaceful custody (or Court
                        Receiver seizure), submit Post-Seizure Intimation to the
                        same SHO confirming exact seizure timestamp, GPS
                        coordinates, and stockyard parking address.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">&bull;</span>
                      <span>
                        Enclose the signed <strong>Inventory Panchnama</strong>{" "}
                        listing odometer reading, fuel level, battery make,
                        stepney/tyre serials, tractor attachments (trolley,
                        cultivator, rotavator), and confirmation that zero
                        personal cash or belongings were inside the cabin.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">&bull;</span>
                      <span>
                        Archive timestamped 360-degree walkaround video and
                        continuous handover footage with SHA-256 hash logs under
                        BSA 2023 Section 63.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong>Non-Negotiable Tractor &amp; Rural Compliance Rule:</strong>{" "}
                Never seize a loaded commercial vehicle carrying perishable
                freight or a tractor actively ploughing a standing crop without
                unloading cargo peacefully or obtaining a judicial Section 9
                Court Receiver direction. Unattended transit cargo claims
                frequently double bank liability in consumer forums.
              </div>
            </section>

            {/* Section 6: RTO Form 36 & Vahan Protocol */}
            <section
              id="heading-form-36-rto"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  6
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Motor Vehicles Act s.51(5) Title Transfer
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                RTO Form 36 Fresh RC Transfer &amp; Vahan Blacklist Protocol
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Even after lawful repossession and expiry of the 7/15-day
                Pre-Sale Valuation &amp; Redemption Notice, banks hit a
                predictable commercial wall: defaulting borrowers refuse to hand
                over the original Registration Certificate (RC) and signed Form
                29/30 transfer papers. Selling a vehicle &ldquo;without RC
                assurance&rdquo; slashes auction bids by 25%–40% because buyers
                cannot legally transfer ownership or insure the vehicle.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Parliament solved this exact bottleneck through{" "}
                <strong>Section 51(5) of the Motor Vehicles Act, 1988</strong>{" "}
                read with{" "}
                <strong>
                  Rule 61(2) of the Central Motor Vehicles Rules, 1989
                </strong>
                . Once a bank satisfies the Registering Authority (RTO) that the
                registered owner defaulted and the financier has lawfully taken
                possession, the RTO is statutorily empowered to{" "}
                <strong>cancel the borrower&apos;s old RC</strong> and issue a{" "}
                <strong>Fresh Registration Certificate in the bank&apos;s name</strong>{" "}
                via <strong>Form 36</strong>—even if the borrower refuses to
                surrender the physical certificate.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {[
                  {
                    n: "01",
                    title: "Vahan 4.0 Blacklist Check",
                    body: "Verify active HP (Hypothecation) endorsement, pending e-challans, and road-tax arrears; lodge financier objection on Vahan to block fraudulent NOC/duplicate RC attempts.",
                  },
                  {
                    n: "02",
                    title: "Form 36 Statutory Packet",
                    body: "Upload Form 36 with bank seal, loan agreement, expired Recall & Pre-Sale RPAD receipts, pre/post SHO intimation copies, panchnama, and valid insurance/PUC.",
                  },
                  {
                    n: "03",
                    title: "RTO Form 37 Show-Cause",
                    body: "The RTO serves mandatory Form 37 registered notice granting the borrower an opportunity to object or prove zero default within the statutory notice window.",
                  },
                  {
                    n: "04",
                    title: "Fresh RC & Clean Auction",
                    body: "Upon non-appearance or failure to produce a court stay, the RTO cancels the old RC and issues Fresh RC to the bank—maximizing transparent e-auction bid value.",
                  },
                ].map((card) => (
                  <div
                    key={card.n}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5"
                  >
                    <span className="text-xs font-black text-[#DC2626]">
                      STAGE {card.n}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Interactive 4-Scenario Playbooks */}
            <section
              id="heading-scenario-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Interactive Operational Playbooks
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                4 Auto, Tractor &amp; Retail CV Repossession Failure Playbooks
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Select your active collections bottleneck below to inspect the
                exact statutory escalation sequence, criminal-risk guardrails,
                and recovery rail engineered for bank auto and tractor desks:
              </p>

              <VehicleRepossessionScenarioTabs />
            </section>

            {/* Mid-Page Compact Dual CTA */}
            <VehicleRepossessionCTA variant="compact" />

            {/* Section 8: Worked Financial & Deficit Recovery Ledger */}
            <section
              id="heading-deficit-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  8
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Worked Recovery Economics
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Worked Ledger: Tractor Auction Shortfall &amp; Deficit Recovery
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                The financial spread between an undocumented field seizure and a
                4-Notice statutory repossession is dramatic. Below is an
                illustrative bank ledger comparing a{" "}
                <strong>₹9.40 Lakh Hypothecated Tractor NPA</strong> executed
                via the compliant 4-Notice workflow against an undocumented
                roadside seizure challenged before the District Consumer
                Commission:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Compliant Ledger */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Compliant 4-Notice + Form 36 Track
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      50-HP Tractor NPA
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">
                        Foreclosure Principal + Accrued Interest
                      </span>
                      <span className="font-bold text-white">₹9,12,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">
                        Non-Capitalized Penal Charges (RBI Compliant)
                      </span>
                      <span className="font-bold text-white">₹28,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">
                        Documented Recovery, Towing, Valuer &amp; Yard Cost
                      </span>
                      <span className="font-bold text-white">₹24,500</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-2">
                      <span className="text-slate-200 font-semibold">
                        Total Recoverable Claim (A)
                      </span>
                      <span className="font-black text-white">₹9,64,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-300">
                        Less: Transparent e-Auction Realization (With Form 36
                        RC)
                      </span>
                      <span className="font-bold text-emerald-400">
                        - ₹6,25,000
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-2.5">
                      <span className="text-amber-300 font-bold">
                        Enforceable Post-Auction Deficit (Notice 4)
                      </span>
                      <span className="font-black text-amber-400">
                        ₹3,39,500
                      </span>
                    </div>
                  </div>
                  <div className="bg-emerald-950/60 border border-emerald-800/70 rounded-xl p-3 text-xs text-emerald-200 leading-relaxed">
                    <strong>Deficit Enforcement Path:</strong> Notice 4 served
                    on Borrower + Co-Borrower/Guarantor (Contract Act s.128)
                    &rarr; Pre-Litigation National Lok Adalat or Neutral ODR
                    Arbitration Award. Zero FIRs; zero consumer penalty.
                  </div>
                </div>

                {/* Unlawful Seizure Cost */}
                <div className="bg-red-50/70 border border-red-200 rounded-2xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-red-200 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                      Unlawful Roadside Seizure (No Pre-Notice)
                    </span>
                    <span className="text-xs font-semibold text-red-700">
                      Litigation Blowback
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                    <div className="flex justify-between">
                      <span>Original NPA Exposure</span>
                      <span className="font-bold">₹9,40,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Distressed Auction Bid (No Form 36 RC Clarity)
                      </span>
                      <span className="font-bold text-slate-700">
                        - ₹4,30,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Deficit Claim Disallowed (No Pre-Sale Valuation Notice)
                      </span>
                      <span className="font-bold text-[#DC2626]">
                        ₹5,10,000 Written Off
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Consumer Commission Punitive Damages &amp; Costs
                      </span>
                      <span className="font-bold text-[#DC2626]">
                        + ₹5,50,000 Outflow
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        High Court FIR Quashing &amp; Anticipatory Bail Counsel
                      </span>
                      <span className="font-bold text-[#DC2626]">
                        + ₹2,25,000 Outflow
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-red-200 pt-2.5">
                      <span className="font-bold text-red-900">
                        Net Bank Loss From Skipping 4-Notice SOP
                      </span>
                      <span className="font-black text-[#DC2626]">
                        ₹12,85,000+ Loss
                      </span>
                    </div>
                  </div>
                  <div className="bg-white border border-red-200 rounded-xl p-3 text-xs text-slate-700 leading-relaxed">
                    <strong>Executive Takeaway:</strong> Spending ₹999–₹2,500 on
                    compliant advocate notices and SHO intimation prevents a
                    100%+ net-recovery swing and shields zonal managers from
                    personal criminal arrest.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: 8-Point Panchnama, Valuation & BSA 2023 s.63 Checklist */}
            <section
              id="heading-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  9
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Evidentiary &amp; Audit Bundle
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Panchnama, Valuation &amp; BSA 2023 s.63 Repossession Checklist
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Before authorizing any vehicle e-auction or filing a
                post-auction deficit claim before an Arbitrator, Civil Court, or
                Lok Adalat, branch legal officers must verify that all eight
                mandatory evidentiary records are sealed inside the case dossier
                with a{" "}
                <strong>
                  Bharatiya Sakshya Adhiniyam (BSA) 2023 Section 63 Part-A &amp;
                  Part-B Certificate
                </strong>{" "}
                (including SHA-256 hash logs for digital media) and a Bankers&apos;
                Books Evidence Act Section 2A ledger certificate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    idx: "01",
                    title: "Hypothecation Deed & Vahan HP Endorsement",
                    desc: "Executed Loan-cum-Hypothecation Agreement with highlighted repossession & arbitration clauses, plus Vahan Form 34 / RC HP extract and CERSAI registration receipt.",
                  },
                  {
                    idx: "02",
                    title: "Notice 1 Recall & Tri-Channel Delivery Proof",
                    desc: "7–15 day Loan Recall-cum-Pre-Repossession Notice (separate non-capitalized penal charges per RBI rules) with India Post Speed Post RPAD tracking, SMTP email header, and WhatsApp read log.",
                  },
                  {
                    idx: "03",
                    title: "Pre-Seizure SHO Intimation & Agent ID",
                    desc: "Stamped Pre-Seizure Police Intimation (or official policeStationEmail dispatch proof), Bank Authorization Letter, and valid IIBF Debt Recovery Agent (DRA) certificate.",
                  },
                  {
                    idx: "04",
                    title: "Signed Inventory Panchnama & 360° Video",
                    desc: "Dated Panchnama recording odometer, chassis/engine plate etching, accessories/tractor implements, and unedited timestamped video confirming peaceful handover or Court Receiver custody.",
                  },
                  {
                    idx: "05",
                    title: "Post-Seizure SHO Receipt & Yard Entry Log",
                    desc: "Post-Seizure Police Intimation filed within hours of custody alongside stockyard gate-in register entry and approved parking tariff schedule.",
                  },
                  {
                    idx: "06",
                    title: "Independent Surveyor Valuation Report",
                    desc: "IRDAI-licensed or bank-empanelled automobile valuer assessment with photographs fixing fair market value and forced-sale reserve price prior to auction.",
                  },
                  {
                    idx: "07",
                    title: "Notice 3 Pre-Sale Redemption & Form 36 File",
                    desc: "7/15-day Pre-Sale Valuation & Redemption Notice served via RPAD/WhatsApp/Email plus Vahan Form 36 filing receipt and RTO Form 37 notice status.",
                  },
                  {
                    idx: "08",
                    title: "e-Auction Bid Trail & Notice 4 Deficit Ledger",
                    desc: "Multi-bidder online auction log, buyer sale confirmation invoice, itemized appropriation of proceeds, and Notice 4 Deficit Recovery Demand served on borrower and guarantor.",
                  },
                ].map((item) => (
                  <div
                    key={item.idx}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                      {item.idx}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Primary Dual-Track B2B Conversion Funnel */}
            <VehicleRepossessionCTA variant="primary" />

            {/* IND-01 Hub, Calculators, Templates & Sibling Spokes Cross-Link Grid */}
            <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    IND-01 Banking Recovery Ecosystem
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    Connected Bank Calculators, Notice Templates &amp; Sibling
                    Playbooks
                  </p>
                </div>
                <Link
                  href="/industries/banks-loan-recovery"
                  className="text-xs font-bold text-[#DC2626] hover:underline"
                >
                  View Full Banking Hub &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {[
                  {
                    tag: "Interactive Calculator (T1)",
                    title: "SARFAESI, DRT Fee & Bank Forum Selector",
                    href: "/tools/sarfaesi-drt-bank-recovery-forum-calculator",
                    desc: "Check ₹1L/₹3L/₹20L pecuniary cutoffs, SARFAESI s.31 rules & statutory dates.",
                  },
                  {
                    tag: "Notice Template (P1)",
                    title: "Bank Loan Recall & Guarantee Invocation Format",
                    href: "/templates/bank-loan-recall-cum-guarantee-invocation-notice",
                    desc: "RBI Penal-Charge compliant recall & Section 128 guarantor invocation draft.",
                  },
                  {
                    tag: "e-NACH Criminal Rail (T1)",
                    title: "Section 25 PSS Act e-NACH Deadline Calculator",
                    href: "/tools/section-25-nach-bounce-limitation-calculator",
                    desc: "Compute exact 30+15+30 day criminal limitation for bounced vehicle EMI mandates.",
                  },
                  {
                    tag: "Seed Bank Notice Page",
                    title: "Send Legal Notice for Banks to Recover Dues",
                    href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues",
                    desc: "Fact-verified demand notice desk for PSU, Private & SFB branches.",
                  },
                  {
                    tag: "Zero-Fee Deficit Route",
                    title: "Pre-Litigation National Lok Adalat Guide",
                    href: "/law/lok-adalat-pre-litigation-money-recovery",
                    desc: "Convert sub-₹5L post-auction vehicle shortfalls into final Section 21 decrees.",
                  },
                  {
                    tag: "Guarantor Enforcement",
                    title: "Personal & Corporate Guarantee Invocation Guide",
                    href: "/personal-guarantor-invocation-notice-bank-loan-recovery",
                    desc: "Enforce co-extensive Contract Act s.128 liability against vehicle loan guarantors.",
                  },
                  {
                    tag: "Bulk NPA Lok Adalat",
                    title: "Bank Pre-Litigation Lok Adalat Bulk Playbook",
                    href: "/bank-pre-litigation-lok-adalat-bulk-npa-settlement-guide",
                    desc: "Prime thousands of retail auto/tractor NPA borrowers with WhatsApp + RPAD OTS slabs.",
                  },
                  {
                    tag: "e-NACH Notice Format (P1)",
                    title: "Section 25 PSS Act e-NACH Bounce Notice Format",
                    href: "/templates/section-25-pss-act-nach-bounce-legal-notice-format",
                    desc: "Dual-demand Suman Sethi safe notice format for dishonoured vehicle EMI mandates.",
                  },
                  {
                    tag: "Unsecured ODR Parallel",
                    title: "Credit Card & Retail Bulk ODR Arbitration Guide",
                    href: "/credit-card-default-bulk-legal-notice-arbitration-banks",
                    desc: "Transition legacy unilateral bank arbitration clauses to post-CORE neutral ODR.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-4 transition-all flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#DC2626] mb-1">
                        {link.tag}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        {link.title}
                      </p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {link.desc}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#DC2626]">
                      Open Resource &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Collections &amp; Legal Counsel Q&amp;A
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                FAQs: Vehicle &amp; Tractor Repossession Notices for Banks
              </h2>

              <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white open:bg-slate-50/70 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-bold text-xs sm:text-sm md:text-base text-slate-900 hover:text-[#DC2626]">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-100 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">&minus;</span>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Verified Statutory & Regulatory Sources + Author Attribution */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Official Statutory Verification
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Primary Statutes, Supreme Court Rulings &amp; Official Portals
              </h2>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-bold mt-0.5">
                      &rarr;
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] underline-offset-2 transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Fact Verification & Institutional Disclaimer */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 rounded-xl p-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-900">
                    Authored &amp; Legally Reviewed By: Anuj Anand Malik
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Advocate &amp; Founder, AMA Legal Solutions &bull;
                    Institutional Banking &amp; Commercial Recovery Practice
                  </p>
                </div>
                <div className="text-[11px] text-slate-500 sm:text-right">
                  <p>Last Updated: November 19, 2026</p>
                  <p>Jurisdiction: Republic of India (Creditor-Side SOP)</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
