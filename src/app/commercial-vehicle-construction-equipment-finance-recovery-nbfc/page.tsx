import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CommercialVehicleTableOfContents from "./CommercialVehicleTableOfContents";
import CommercialVehicleScenarioTabs from "./CommercialVehicleScenarioTabs";
import CommercialVehicleCTA from "./CommercialVehicleCTA";

export const revalidate = 86400;

const PAGE_URL = "/commercial-vehicle-construction-equipment-finance-recovery-nbfc";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Commercial Vehicle & Construction Equipment Finance Recovery: Section 9 Court Receivers, Interstate Seizure & Loss-on-Sale Suits";

const META_TITLE = "Commercial Vehicle & Equipment Finance Recovery for NBFCs";
const META_DESCRIPTION =
  "CV & CE NBFC recovery playbook: pre-seizure loan recall, Section 9 ex-parte Court Receiver orders, Vahan Form 36 registration & post-sale deficit suits.";

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
    title: "The Arbitration and Conciliation Act, 1996 (Sections 9, 12(5), 17, 21 & 36) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "The Motor Vehicles Act, 1988 (Section 51 — Special Provisions Regarding Motor Vehicle Subject to Hypothecation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1798",
  },
  {
    title: "The Commercial Courts Act, 2015 (Specified Value & Pre-Institution Mediation s.12A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Ministry of Road Transport & Highways (MoRTH) — Vahan Citizen & Financier Services (Forms 34, 35, 36)",
    url: "https://vahan.parivahan.gov.in/",
  },
  {
    title: "RBI Master Direction — Fair Lending Practice: Penal Charges in Loan Accounts (August 18, 2023)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12527",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic GPS, FASTag & LMS Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const JUDICIAL_PRECEDENTS = [
  {
    title: "Prohibition of Unlawful Musclemen & Mandate for Due-Process Repossession",
    parties: "ICICI Bank Ltd. v. Prakash Kaur & Ors.",
    citation: "(2007) 2 SCC 711 — Supreme Court of India",
    holding:
      "The Supreme Court condemned the practice of banks and NBFCs hiring recovery agents/musclemen to forcibly seize vehicles on highways without lawful process. Lenders must recover assets strictly through due process of law—either peaceful consensual surrender or court-appointed Receivers under Section 9.",
    impact:
      "Every CV/CE NBFC must back field repossession with a prior Loan Recall Notice, Police Station intimation, or an explicit Section 9 Court Receiver order to eliminate criminal extortion/theft counter-cases.",
  },
  {
    title: "Pre-Sale Notice, Fair Valuation & Transparent Auction Standards",
    parties: "Citicorp Maruti Finance Ltd. v. S. Vijayalaxmi",
    citation: "(2012) 1 SCC 1 — Supreme Court of India",
    holding:
      "A 3-Judge Bench affirmed that even where a hypothecation agreement confers a right of repossession, the financier cannot act arbitrarily. After taking possession, the NBFC must issue a reasonable pre-sale notice giving the borrower a final opportunity to redeem, conduct a fair valuation, and account for sale proceeds transparently.",
    impact:
      "Mandatory compliance with Citicorp Maruti protects the NBFC's post-sale Loss-on-Sale deficit claim from being dismissed as an unconscionable or vitiated auction.",
  },
  {
    title: "Section 9 Interim Custody & Receiver Jurisdiction Before Arbitral Commencement",
    parties: "Sundaram Finance Ltd. v. NEPC India Ltd.",
    citation: "(1999) 2 SCC 479 — Supreme Court of India",
    holding:
      "The Supreme Court held that a party can apply to a Court for interim measures under Section 9 even before arbitral proceedings commence, provided there is a manifest intention to arbitrate (typically evidenced by or followed promptly with a Section 21 invocation notice).",
    impact:
      "Enables CV/CE NBFCs to obtain urgent ex-parte Court Receiver orders to freeze and seize disappearing trucks or earthmovers before the borrower strips or hides the collateral.",
  },
  {
    title: "Neutral Arbitrator Empanelment to Protect Deficit Awards from Annulment",
    parties: "Perkins Eastman Architects DPC & Anr. v. HSCC (India) Ltd.",
    citation: "(2020) 20 SCC 760 — Supreme Court of India",
    holding:
      "An interested party (such as an NBFC's MD or Legal Head) is statutorily ineligible under Section 12(5) read with the Seventh Schedule to unilaterally appoint a sole arbitrator.",
    impact:
      "For post-sale Loss-on-Sale arbitral awards to survive Section 34 challenges, NBFCs must route disputes through independent Online Dispute Resolution (ODR) or neutral arbitral institutions.",
  },
];

const FAQS = [
  {
    q: "Can an NBFC obtain an ex-parte Section 9 Court Receiver order to seize a commercial truck across state borders?",
    a: "Yes. Under Section 9 of the Arbitration and Conciliation Act, 1996 (read with Sundaram Finance Ltd. v. NEPC India Ltd.), a Commercial Court at the agreed seat of arbitration can appoint an Advocate or NBFC Officer as Court Receiver on an ex-parte urgent basis when there is prima facie proof of default, loan recall, and risk of asset alienation or GPS tampering. The Receiver order typically authorizes police assistance across jurisdictions.",
  },
  {
    q: "What is Vahan Form 36 and when should a CV NBFC file it under Section 51(5) of the Motor Vehicles Act?",
    a: "Form 36 is the statutory application under Section 51(5) of the Motor Vehicles Act, 1988, filed by the financier before the Registering Authority (RTO) to cancel the defaulting borrower's Registration Certificate (RC) and issue a fresh RC in the financier's name after repossession. It is essential when the borrower refuses to hand over the original RC or sign Form 35/29/30 transfer papers, allowing the NBFC to legally auction the vehicle with clean title.",
  },
  {
    q: "How does an NBFC prevent a defaulting fleet operator from cannibalising tyres and engines before seizure?",
    a: "First, file an immediate Vahan Portal Blacklist/Flag request to block NOCs, fitness renewals, and permit transfers. Second, seek an omnibus Section 9 injunction restraining the borrower from dismantling, parting with, or transferring chassis/engine components, coupled with an inventory Panchnama referencing disbursement tyre/engine serials. Third, initiate parallel Section 25 PSS Act / Section 138 NI Act proceedings on dishonoured fleet NACH mandates.",
  },
  {
    q: "How can an NBFC recover the shortfall if the auction proceeds are lower than the loan outstanding (Loss-on-Sale)?",
    a: "After conducting a transparent auction with prior pre-sale redemption notice (Citicorp Maruti compliance) and minimum 3 independent bids, the NBFC issues a Post-Sale Appropriation & Loss-on-Sale Demand Notice. If unpaid, the NBFC pursues an Arbitral Award (Section 17/31) or Commercial Court Summary Suit (Order 37 CPC) jointly against the borrower and personal/corporate guarantors under Section 128 of the Indian Contract Act, followed by Order 21 property/bank attachment.",
  },
  {
    q: "Does SARFAESI apply to commercial vehicle and construction equipment loans?",
    a: "Generally no for standalone movable vehicles/equipment where SARFAESI enforcement is practically displaced by rapid depreciation and mobility, and only NBFCs notified by the Central Government (₹100 Crore+ asset size and ₹20 Lakh+ security threshold) can invoke SARFAESI. Even notified NBFCs prefer Section 9 Court Receivers + MV Act s.51(5) for trucks and earthmovers because Receiver orders provide immediate physical seizure with police aid.",
  },
  {
    q: "How do NBFCs repossess non-RTO off-highway construction equipment like excavators or batching plants?",
    a: "Off-highway construction equipment (crawler excavators, tower cranes, batching plants) often lack RTO registration under the Motor Vehicles Act. NBFCs rely on CERSAI security interest registration, ROC Form CHG-1 (for corporate borrowers), serial-plate verification, and a specific Section 9 Court Receiver order authorizing entry onto the EPC project site with low-bed trailer demobilisation and police protection.",
  },
  {
    q: "How do RBI's 2023 Penal Charges guidelines affect Loss-on-Sale deficit calculations?",
    a: "Under the RBI Fair Lending Practice Master Direction (effective 2024), NBFCs cannot capitalise penal interest or compound penalty over overdue EMIs. All overdue/penal charges in the Loss-on-Sale ledger must be shown as uncompounded fixed penal charges; otherwise, Commercial Courts or Arbitral Tribunals may disallow the interest component of the deficit suit.",
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
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
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
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How NBFCs Recover Defaulted Commercial Vehicles & Construction Equipment",
  description:
    "Step-by-step statutory workflow for CV and CE NBFCs: pre-seizure loan recall, Section 9 Court Receiver seizure, Vahan Form 36 RC transfer, transparent auction, and Loss-on-Sale deficit suit.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Serve Pre-Seizure Loan Recall & Hypothecation Notice",
      text: "Issue a 7-to-15 day Loan Recall cum Termination Notice via Email, WhatsApp, and Speed Post RPAD invoking cross-default and hypothecation clauses.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Flag Asset on Vahan Portal & Trace via AIS-140 GPS / FASTag",
      text: "Place an administrative block on Vahan to prevent NOC or fitness transfer and compile FASTag toll logs and GPS pings as BSA s.63 electronic evidence.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Obtain Ex-Parte Section 9 Court Receiver Order",
      text: "File an urgent Section 9 petition before the Commercial Court seeking appointment of a Court Receiver with police aid to seize the truck or earthmover.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Execute Receiver Seizure & Prepare Inventory Panchnama",
      text: "Take physical custody with local police intimation, record chassis/engine/tyre serials in a Panchnama, and store in an insured yard.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File MV Act s.51(5) Form 36 & Conduct 3-Bid E-Auction",
      text: "Serve Citicorp Maruti pre-sale redemption notice, obtain fresh RC in financier name via Form 36 if RC is withheld, and sell via transparent e-auction.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Initiate Loss-on-Sale Deficit Arbitration / Summary Suit",
      text: "Serve Post-Sale Deficit Notice and recover remaining shortfall from borrower and guarantor under Contract Act s.128 via neutral arbitration or Commercial Court suit.",
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
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "NBFC & Fintech Loan Recovery",
      item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CV & CE Finance Recovery",
      item: CANONICAL_URL,
    },
  ],
};

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
export default function CommercialVehicleRecoveryPage() {
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
            <span>IND-02 &bull; NBFC CV &amp; CE Collections Playbook</span>
            <span>&middot;</span>
            <span>Arbitration Act s.9 &amp; MV Act s.51(5)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Summary + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; CV &amp; CE NBFC Legal SOP
            </span>
            Part of our{" "}
            <Link
              href="/industries/nbfc-fintech-loan-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              NBFC &amp; Fintech Loan Recovery Hub
            </Link>
            : when financed trucks, buses, or excavators cross state borders or face component cannibalisation, NBFCs must pair rapid Vahan blacklisting and pre-seizure recall notices with ex-parte Section 9 Court Receiver orders, Form 36 RC transfer under MV Act s.51(5), and post-auction Loss-on-Sale guarantor suits.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">Section 9</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Ex-Parte Court Receiver &amp; Police Aid Seizure
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Form 36</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MV Act s.51(5) Fresh RC in Financier Name
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">7–15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Mandatory Pre-Sale Redemption Notice Window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Order 37 / s.128</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Post-Auction Loss-on-Sale Guarantor Suits
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-slate-400">
            <span>
              Legal Review: <strong className="text-slate-200">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
            </span>
            <span>&bull;</span>
            <span>Updated: 14 Nov 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "NBFC & Fintech Loan Recovery",
                href: "/industries/nbfc-fintech-loan-recovery",
              },
              { label: "CV & CE Finance Recovery" },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CommercialVehicleTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Gaps */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why Retail Car Recovery Fails for Commercial Vehicles &amp; Earthmovers
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike urban passenger car loans where collateral remains parked at a fixed residential address,{" "}
                <strong>commercial vehicle (CV) and construction equipment (CE)</strong> assets—multi-axle HCVs, tippers, intercity buses, crawler excavators, and transit mixers—operate continuously across state borders and remote infrastructure corridors. A 30-day delay in legal escalation often results in rapid asset depreciation, AIS-140 GPS tampering, or systematic{" "}
                <em>cannibalisation</em> of radial tyres, batteries, fuel injectors, and hydraulic pumps by distressed fleet operators.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For CV/CE NBFC Collections VPs and Litigation Heads, relying on informal field agents creates severe regulatory and criminal exposure under RBI&apos;s Fair Practices Code and the Supreme Court&apos;s mandate in{" "}
                <em>ICICI Bank Ltd. v. Prakash Kaur</em>. Conversely, waiting for a conventional civil suit takes years while the hypothecated rig loses 40–60% of its resale value. An institutional NBFC recovery desk must therefore execute a synchronized four-rail workflow: (1) formal{" "}
                <Link
                  href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  NBFC Loan Recall &amp; Hypothecation Notice
                </Link>
                , (2) ex-parte Section 9 Court Receiver orders with police aid, (3) Vahan Portal blacklisting and Section 51(5) Form 36 RC transfer, and (4) post-auction Loss-on-Sale recovery against borrowers and guarantors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Asset Mobility Risk
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Trucks cross 3+ RTO jurisdictions weekly; local police refuse assistance without a Section 9 Receiver order.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                    RC &amp; Auction Blockade
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Without original RC or Form 36 under MV Act s.51(5), auction buyers discount bids by 20–35% for title risk.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    Deficit Recovery Rail
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Compliant pre-sale notice + 3-bid valuation preserves 100% of the Loss-on-Sale claim against guarantors.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Operational Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  CV &amp; CE Recovery Decision Tree: From 30 DPD to Deficit Execution
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This operational decision tree maps the exact escalation sequence for CV/CE NBFCs based on borrower cooperation, GPS visibility, and post-seizure auction shortfall.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  width="860"
                  height="320"
                  viewBox="0 0 860 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Commercial Vehicle and Equipment NBFC Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="16" y="110" width="160" height="90" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="96" y="138" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1 (30-45 DPD)</text>
                  <text x="96" y="158" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Recall + Vahan Flag</text>
                  <text x="96" y="176" fill="#CBD5E1" fontSize="10" textAnchor="middle">7-Day RPAD / Email</text>
                  <text x="96" y="190" fill="#CBD5E1" fontSize="10" textAnchor="middle">+ PSS s.25 e-NACH</text>

                  {/* Arrow 1->2 */}
                  <path d="M176 155 L220 155" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="220,150 230,155 220,160" fill="#94A3B8" />

                  {/* Stage 2 Top: Hostile / Hidden */}
                  <rect x="232" y="30" width="185" height="95" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="324" y="56" fill="#FBBF24" fontSize="11" fontWeight="bold" textAnchor="middle">ASSET HIDDEN / HOSTILE</text>
                  <text x="324" y="76" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Sec 9 Ex-Parte Receiver</text>
                  <text x="324" y="94" fill="#CBD5E1" fontSize="10" textAnchor="middle">Commercial Court + Police Aid</text>
                  <text x="324" y="109" fill="#CBD5E1" fontSize="10" textAnchor="middle">FASTag / GPS Evidence</text>

                  {/* Stage 2 Bottom: Voluntary */}
                  <rect x="232" y="190" width="185" height="95" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="324" y="216" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">PEACEFUL SURRENDER</text>
                  <text x="324" y="236" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Surrender Panchnama</text>
                  <text x="324" y="254" fill="#CBD5E1" fontSize="10" textAnchor="middle">Police Intimation + Yard</text>
                  <text x="324" y="269" fill="#CBD5E1" fontSize="10" textAnchor="middle">Signed Form 29/30/35</text>

                  {/* Arrows 2->3 */}
                  <path d="M417 77 L465 135" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M417 237 L465 175" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="462,150 472,155 462,160" fill="#94A3B8" />

                  {/* Stage 3: Form 36 & Auction */}
                  <rect x="474" y="105" width="175" height="100" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                  <text x="561" y="132" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3 (CUSTODY)</text>
                  <text x="561" y="152" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Form 36 + E-Auction</text>
                  <text x="561" y="170" fill="#CBD5E1" fontSize="10" textAnchor="middle">MV Act s.51(5) Fresh RC</text>
                  <text x="561" y="185" fill="#CBD5E1" fontSize="10" textAnchor="middle">7-15d Redemption Notice</text>

                  {/* Arrow 3->4 */}
                  <path d="M649 155 L685 155" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="685,150 695,155 685,160" fill="#94A3B8" />

                  {/* Stage 4: Loss-on-Sale */}
                  <rect x="696" y="105" width="150" height="100" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                  <text x="771" y="132" fill="#FCA5A5" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4 (DEFICIT)</text>
                  <text x="771" y="152" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Loss-on-Sale Suit</text>
                  <text x="771" y="170" fill="#F1F5F9" fontSize="10" textAnchor="middle">s.21 ODR / Order 37</text>
                  <text x="771" y="185" fill="#F1F5F9" fontSize="10" textAnchor="middle">Guarantor Attachment</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "Stage 1 (30–45 DPD): Recall + Vahan Blacklist",
                    desc: "Issue 7-day Loan Recall Notice via Email, WhatsApp & RPAD; flag vehicle on Vahan and trigger PSS Act s.25 on bounced NACH.",
                  },
                  {
                    step: "Stage 2 (Seizure Track): Sec 9 Court Receiver vs Surrender",
                    desc: "If borrower hides or strips asset, obtain ex-parte Section 9 Receiver order with police aid. If cooperative, record Surrender Panchnama.",
                  },
                  {
                    step: "Stage 3 (Title & Sale): MV Act s.51(5) Form 36 + E-Auction",
                    desc: "Apply for fresh RC in financier name via Form 36 if RC is withheld; serve 7–15 day Citicorp Maruti redemption notice and run 3-bid auction.",
                  },
                  {
                    step: "Stage 4 (Deficit): Post-Sale Loss-on-Sale Suit",
                    desc: "Quantify uncompounded shortfall and pursue Arbitral Award or Order 37 / Commercial Court suit against borrower and guarantor (s.128).",
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-xs font-bold text-red-400 mb-1">{card.step}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory Recovery Matrix for CV &amp; CE NBFC Portfolios
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Legal Remedy / Statute</th>
                      <th className="p-3.5 font-bold">Primary Use Case</th>
                      <th className="p-3.5 font-bold">Typical Timeline</th>
                      <th className="p-3.5 font-bold">Key NBFC Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Arbitration Act s.9 (Court Receiver)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Hidden, interstate, or cannibalised trucks &amp; site-locked excavators
                      </td>
                      <td className="p-3.5 text-slate-700">7–21 days for interim order</td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Ex-parte Receiver appointment with police aid before arbitration begins
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Arbitration Act s.17 (Tribunal Custody)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Active arbitration where collateral or sale permission is contested
                      </td>
                      <td className="p-3.5 text-slate-700">15–30 days post-constitution</td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Same enforceability as a Civil Court decree under s.17(2)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        MV Act s.51(5) (Vahan Form 36)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Borrower refuses to surrender original RC post-repossession
                      </td>
                      <td className="p-3.5 text-slate-700">21–45 days at RTO</td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Cancels borrower RC &amp; issues fresh RC in NBFC name for clean auction
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Commercial Courts Act / Order 37 CPC
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Post-sale Loss-on-Sale deficit &ge; &#8377;3 Lakh (when no arbitration clause)
                      </td>
                      <td className="p-3.5 text-slate-700">4–10 months</td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Summary decree + Order 38 Rule 5 attachment of guarantor property
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        PSS Act s.25 / NI Act s.138
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Dishonoured fleet e-NACH mandates or post-dated security cheques
                      </td>
                      <td className="p-3.5 text-slate-700">30-day statutory notice</td>
                      <td className="p-3.5 text-emerald-700 font-medium">
                        Criminal summons pressure compels voluntary vehicle surrender
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Need to benchmark forum fees or check limitation cutoffs? Use our{" "}
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="text-[#DC2626] font-semibold underline"
                >
                  SARFAESI, DRT &amp; Recovery Forum Calculator
                </Link>{" "}
                or{" "}
                <Link
                  href="/tools/limitation-period-calculator"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Limitation Period Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 4: Section 9 Ex-Parte Court Receiver & Interstate Seizure */}
            <section
              id="heading-section-9-receiver"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Section 9 Ex-Parte Court Receivers &amp; Interstate Seizure SOP
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a commercial vehicle is operating on a national highway or a crawler excavator is locked inside an outstation mining or EPC site, field repossession without judicial backing exposes NBFC officers to FIRs for wrongful restraint or theft. Obtaining an urgent <strong>Section 9 Court Receiver order</strong> solves three operational bottlenecks simultaneously:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong>Ex-Parte Urgency:</strong> By demonstrating active EMI default, prior{" "}
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    Loan Recall &amp; Guarantee Invocation Notice
                  </Link>
                  , and tampering with AIS-140 GPS or movement across state borders, Commercial Courts grant ex-parte interim custody orders at the first hearing.
                </li>
                <li>
                  <strong>Pan-India Police Aid Direction:</strong> Draft the Section 9 prayer specifically requesting authority for the Receiver to take assistance from the Officer-in-Charge of any local Police Station where the vehicle is traced via FASTag toll logs or Vahan alerts.
                </li>
                <li>
                  <strong>Anti-Cannibalisation &amp; Sale Permission:</strong> Seek a composite prayer directing the Receiver to prepare a photographic inventory Panchnama and permitting the NBFC to sell the asset if the borrower fails to clear arrears within 15 days of seizure.
                </li>
                <li>
                  <strong>Prompt Section 21 Invocation:</strong> Under Section 9(2) of the Arbitration Act, arbitral proceedings must be initiated within <strong>90 days</strong> of the interim order. Automate this via{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    Online Dispute Resolution (ODR)
                  </Link>{" "}
                  and neutral institutional arbitration.
                </li>
              </ul>
            </section>

            {/* Section 5: Vahan Portal Blacklist & MV Act s.51(5) Form 36 */}
            <section
              id="heading-vahan-form-36"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Vahan Blacklist &amp; MV Act Section 51(5) Form 36 Workflow
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A repossessed truck without a clean Registration Certificate (RC) is a stranded asset. Defaulting fleet operators routinely withhold the original RC or attempt fraudulent inter-state re-registration. NBFCs must execute a two-step RTO protocol:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Step A: Immediate Vahan Portal Blacklist / Flagging
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Immediately upon 60+ DPD or loan recall, submit the Hypothecation Enforcement Flag / Blacklist request with the registering RTO (supported by Form 34 endorsement). This blocks the borrower from obtaining Duplicate RCs, Fitness Certificate renewals, National Permit transfers, or inter-state NOCs.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Step B: Form 36 Application Under MV Act s.51(5)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Post-seizure, serve a final notice demanding surrender of the original RC. If the borrower refuses, file <strong>Form 36</strong> with the RTO attaching the Loan Recall Notice, Seizure Panchnama / Court Receiver Order, and Form 34 record. The RTO issues a show-cause notice to the borrower (Form 37) and cancels the old RC, issuing a fresh RC in the NBFC&apos;s name.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4 Commercial Failure Modes &amp; NBFC Legal Playbooks
                </h2>
              </div>

              <CommercialVehicleScenarioTabs />
            </section>

            {/* Section 7: Judicial Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Landmark Judicial Precedents Governing CV &amp; CE Recovery
                </h2>
              </div>

              <div className="space-y-4">
                {JUDICIAL_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.citation}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {item.parties} &mdash; {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 bg-white border border-slate-200 rounded-lg p-3">
                      <strong>NBFC Operational Impact:</strong> {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Worked Financial & Loss-on-Sale Calculation Box */}
            <section
              id="heading-loss-on-sale"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Worked Loss-on-Sale Ledger: &#8377;48L Heavy Tipper Deficit Suit
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a repossessed 12-wheel tipper or excavator sells below foreclosure value, the NBFC must present an audit-proof Loss-on-Sale ledger compliant with RBI&apos;s uncompounded Penal Charges Circular to recover the deficit from the borrower and guarantor.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Illustrative Post-Auction Deficit Ledger (RBI Penal-Charge Compliant)
                  </span>
                  <span className="text-xs text-slate-400">Asset: 2024 BharatBenz 3528CM Tipper</span>
                </div>

                <div className="divide-y divide-slate-800 text-xs sm:text-sm">
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-300">1. Principal Outstanding at Loan Recall (75 DPD)</span>
                    <span className="font-mono font-semibold">&#8377;38,40,000</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-300">2. Accrued Contract Interest (13.5% p.a. till Auction)</span>
                    <span className="font-mono font-semibold">&#8377;2,15,000</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-300">3. Uncompounded Penal Charges (RBI 2023 Compliant)</span>
                    <span className="font-mono font-semibold">&#8377;42,000</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-300">4. Court Receiver, Low-Bed Transport, Yard &amp; Form 36 Costs</span>
                    <span className="font-mono font-semibold">&#8377;68,000</span>
                  </div>
                  <div className="py-2 flex justify-between font-bold text-white bg-slate-800/60 px-2 rounded">
                    <span>Gross Foreclosure &amp; Enforcement Claim (A)</span>
                    <span className="font-mono">&#8377;41,65,000</span>
                  </div>
                  <div className="py-2 flex justify-between text-emerald-400">
                    <span>5. Less: Net E-Auction Realisation (3 Independent Bids)</span>
                    <span className="font-mono font-semibold">(&#8377;30,20,000)</span>
                  </div>
                  <div className="py-3 flex justify-between text-base sm:text-lg font-black text-red-400 border-t border-slate-700">
                    <span>Net Loss-on-Sale Deficit Suit / Award Claim (A &minus; B)</span>
                    <span className="font-mono">&#8377;11,45,000</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  BSA 2023 Section 63 Evidence &amp; Litigation Readiness Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  "Executed Loan-cum-Hypothecation Agreement & Deed of Personal/Corporate Guarantee",
                  "Vahan Form 34 Hypothecation Endorsement & CERSAI / ROC Form CHG-1 (for CE)",
                  "Loan Recall Notice + Multi-Channel Proof (Email, WhatsApp, Speed Post RPAD tracking)",
                  "AIS-140 GPS Pings & FASTag Toll Logs certified under BSA 2023 Section 63",
                  "Section 9 Court Receiver Order, Local Police Intimation & Dual-Witness Panchnama",
                  "IRDAI Surveyor Valuation Report + 7–15 Day Citicorp Maruti Pre-Sale Notice + 3-Bid Log",
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
                  >
                    <span className="text-emerald-600 font-bold shrink-0">&#10003;</span>
                    <span className="text-slate-700 font-medium">{doc}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Managing 50+ delinquent fleet accounts? Explore our{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Bulk Recovery Notice Automation (Email + WhatsApp + Speed Post)
                </Link>{" "}
                and{" "}
                <Link
                  href="/end-to-end-legal-recovery-solutions-banks-nbfcs"
                  className="text-[#DC2626] font-semibold underline"
                >
                  End-to-End Legal Recovery Solutions for Banks &amp; NBFCs
                </Link>
                .
              </p>

              {/* Dual-Track B2B CTAs */}
              <div className="pt-2">
                <CommercialVehicleCTA />
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions for CV &amp; CE NBFC Legal Teams
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory References &amp; Official Regulatory Sources
                </h2>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-3 text-xs">
                <Link
                  href="/arbitration-personal-loan-defaults-bank-recovery-mechanism"
                  className="text-slate-600 hover:text-[#DC2626] underline"
                >
                  Arbitration for Loan Defaults Guide
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href="/legal-recovery-unsecured-loans-guide-banks-nbfcs"
                  className="text-slate-600 hover:text-[#DC2626] underline"
                >
                  NBFC &amp; Bank Recovery Guide
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <div className="bg-[#F8F9FB] border-t border-slate-200">
        <RelatedRecoveryGuides />
      </div>
    </div>
  );
}
