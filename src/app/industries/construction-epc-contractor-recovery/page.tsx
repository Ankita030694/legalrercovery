import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ConstructionHubTableOfContents from "./ConstructionHubTableOfContents";
import ConstructionHubScenarioTabs from "./ConstructionHubScenarioTabs";
import ConstructionHubCTA from "./ConstructionHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/construction-epc-contractor-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Construction, EPC & MEP Contractor Bill & Retention Recovery";
const PAGE_DESCRIPTION =
  "Recover uncertified Running Account (RA) bills, post-DLP retention money, extra-item variations & PSU/developer dues while shielding your Bank Guarantees.";
const H1_TEXT =
  "Specialized Legal Recovery & Arbitration Desk for Civil, EPC, Infrastructure & MEP Contractors in India";

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
  archetype: "L1" | "G1" | "G2" | "T1" | "P1";
  archetypeLabel: string;
  track: "RA, Retention & PSU" | "MSME & Subcontract" | "Prolongation, LD & Arb" | "Tools & Templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_07_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-090",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RA, Retention & PSU",
    title: "Uncertified RA & Final Bills: Stalled Measurement Books & Coerced NDCs",
    url: "/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery",
    statute: "Ambica Construction & R.L. Kalathia",
    summary:
      "Trigger deemed MB certification using site DPRs and defeat forced 'No-Claim Certificates' signed under financial duress.",
  },
  {
    id: "B2B-091",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RA, Retention & PSU",
    title: "Post-DLP 5–10% Retention Money Recovery & Beneficial Occupation Proof",
    url: "/retention-money-recovery-after-defect-liability-period-dlp-expiry",
    statute: "Contract Act s.73/74 & Order 37 CPC",
    summary:
      "Close the 'pending OC' developer loophole by proving beneficial handover and recovering post-DLP retention with commercial interest.",
  },
  {
    id: "B2B-093",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RA, Retention & PSU",
    title: "NHAI, CPWD, PWD, JJM & Municipal Tender Dues: Writ & s.80 CPC",
    url: "/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors",
    statute: "CPC s.80 & Art. 226 (Surya Constructions)",
    summary:
      "Overcome 'budget/grant not received' excuses on certified MB bills via Section 80 CPC notice, DRB triggers, and High Court Writs.",
  },
  {
    id: "B2B-092",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "MSME & Subcontract",
    title: "Works-Contract MSME Samadhaan Trap & Divisible Supply Fix",
    url: "/works-contract-excluded-from-msme-samadhaan-contractor-alternatives",
    statute: "MSMED s.18 & Shree Gee / Sterling Rulings",
    summary:
      "Avoid 2-year MSEFC quashing of indivisible Works Contracts by splitting Supply vs Erection POs or routing to Commercial Courts.",
  },
  {
    id: "B2B-094",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "MSME & Subcontract",
    title: "Defeating Abusive 'Pay-When-Paid' Back-to-Back Subcontract Clauses",
    url: "/pay-when-paid-back-to-back-clause-subcontractor-recovery-india",
    statute: "Contract Act s.23/46 & Ircon Precedent",
    summary:
      "Stop main EPC contractors from indefinitely withholding Tier-2 MEP, piling, and civil bills or settling behind your back.",
  },
  {
    id: "B2B-095",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Prolongation, LD & Arb",
    title: "Prolongation, Idle Plant, Overhead & Extra-Item BOQ Claims",
    url: "/construction-price-escalation-extra-items-prolongation-claim-recovery",
    statute: "Contract Act s.55, s.70 & s.73",
    summary:
      "Preserve Hudson/Eichleay prolongation damages during EOT applications via mandatory Section 55 reservation notices.",
  },
  {
    id: "B2B-096",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Prolongation, LD & Arb",
    title: "Countering Wrongful 10% Liquidated Damages & Risk-and-Cost Termination",
    url: "/wrongful-liquidated-damages-ld-termination-works-contract-remedy",
    statute: "Contract Act s.74 & Kailash Nath v. DDA",
    summary:
      "Invalidate windfall 10% LD debit notes lacking actual-loss proof and protect site inventory during contested terminations.",
  },
  {
    id: "B2B-097",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "Prolongation, LD & Arb",
    title: "Defect-Free Section 21 Arbitration Invocation & Nortel Limitation Rules",
    url: "/section-21-arbitration-invocation-notice-construction-epc-guide",
    statute: "Arbitration Act s.21, s.11(6) & Nortel",
    summary:
      "Distinguish Section 21 invocation from plain dunning reminders, exhaust DRB/Engineer pre-tiers, and stop the 3-year clock.",
  },
  {
    id: "B2B-098",
    archetype: "G2",
    archetypeLabel: "G2 Execution Matrix",
    track: "Prolongation, LD & Arb",
    title: "Enforcing Section 36 Arbitral Awards, 100% Deposit, PSU 75% & IBC",
    url: "/executing-arbitral-award-section-36-against-developer-psu-india",
    statute: "Arbitration s.36(3), NITI 75% & IBC s.8/9",
    summary:
      "Compel 100% court deposits during s.34 challenges, unlock 75% PSU payouts against BG, or initiate IBC on crystallized awards.",
  },
  {
    id: "B2B-099",
    archetype: "T1",
    archetypeLabel: "T1 Interactive Tool",
    track: "Tools & Templates",
    title: "Construction RA Bill, DLP Retention, Interest & Limitation Calculator",
    url: "/tools/construction-retention-dlp-escalation-claim-calculator",
    statute: "Limitation Act Art. 18, 55 & 113",
    summary:
      "Track split 3-year limitation cutoffs across Final Bills and Post-DLP Retention tranches with downloadable claim summaries.",
  },
  {
    id: "B2B-100",
    archetype: "P1",
    archetypeLabel: "P1 Notice Pack",
    track: "Tools & Templates",
    title: "Contractor Notice Pack: RA Bill, Post-DLP Retention & Duress Protest",
    url: "/templates/construction-ra-bill-retention-money-arbitration-notice",
    statute: "Commercial Courts s.2(1)(c)(vi) & Arb s.21",
    summary:
      "Advocate-vetted notice formats featuring MB schedules, PBG non-encashment warnings, Section 21 invocation, and NDC protest letters.",
  },
];

const APEX_PRECEDENTS = [
  {
    title: "Coerced 'No-Claim / No-Dues Certificates' Do Not Bar Contractor Claims",
    parties: "R.L. Kalathia & Co. v. State of Gujarat & Ambica Construction",
    citation: "Supreme Court of India — Financial Duress & Accord-Satisfaction Doctrine",
    holding:
      "Where an employer or PSU withholds admitted Running Account or Final Bill funds unless the contractor signs a full-and-final 'No-Claim Certificate', such coerced discharge does not foreclose arbitration or extra claims—especially when protested contemporaneously or immediately upon release.",
    impact: "Protects contractors forced to sign clean NDCs to meet site payroll and vendor obligations.",
  },
  {
    title: "Article 226 Writ Mandamus for Admitted Government & PSU Certified Bills",
    parties: "M/s Surya Constructions v. State of U.P. & Unitech Precedents",
    citation: "Supreme Court of India — Constitutional Remedy on Undisputed MBs",
    holding:
      "Where work is completed satisfactorily and Measurement Book quantities are admitted without bona fide dispute, a State authority or Municipal body cannot deny payment citing 'lack of budget or grant'. High Courts may compel payment with interest under Article 226.",
    impact: "Cuts through 5-year civil suit delays for certified PWD, JJM, and Municipal bills.",
  },
  {
    title: "10% Liquidated Damages Cannot Be Deducted as an Automatic Windfall",
    parties: "Kailash Nath Associates v. Delhi Development Authority (DDA)",
    citation: "(2015) 4 SCC 136 — Supreme Court of India (Contract Act Section 74)",
    holding:
      "Under Section 74 of the Indian Contract Act, 1872, liquidated damages or retention forfeiture require pleading and proof of actual loss or legal injury (unless genuinely impossible to compute), and cannot be imposed where delay stems from employer defaults in site handover or drawings.",
    impact: "Neutralizes arbitrary 10% LD debit notes slapped onto final RA bills.",
  },
  {
    title: "3-Year Limitation Freeze & Limits on 'Pay-When-Paid' Subcontract Clauses",
    parties: "BSNL v. Nortel Networks (India) Pvt. Ltd. & Ircon International v. Vinay Heavy Equipments",
    citation: "Supreme Court of India — Limitation Art. 137 & Subcontractor Entitlement",
    holding:
      "Nortel Networks enforces a strict 3-year limitation window for Section 11/21 arbitration petitions—meaning informal reminder letters never stop the clock. Separately, Ircon and High Court rulings curb main contractors from hiding indefinitely behind back-to-back clauses or settling without paying subcontractors.",
    impact: "Mandates timely Section 21 invocation and strengthens Tier-2 subcontractor recoveries.",
  },
];

const FAQS = [
  {
    question: "Can a contractor recover an unpaid RA bill if the developer or PMC refuses to sign the Measurement Book?",
    answer:
      "Yes. While employers often stall joint Measurement Book (MB) sign-offs to delay payment, contractors can establish deemed certification using signed Daily Progress Reports (DPRs), gate-entry material logs, concrete pour cards, third-party lab tests, and email trails. Serving an advocate-drafted notice compiling these BSA 2023 s.63 records compels formal response before Section 21 arbitration or Commercial Court filing.",
  },
  {
    question: "If we signed a 'No-Claim Certificate' under pressure to get 60% of our Final Bill, are our remaining claims dead?",
    answer:
      "Not necessarily. Under Supreme Court jurisprudence in Ambica Construction and R.L. Kalathia & Co. v. State of Gujarat, a No-Dues or No-Claim Certificate obtained under economic coercion does not bar further arbitration or extra claims—particularly where the contractor records 'signed under protest/duress' or serves a formal protest notice immediately upon receiving the coerced tranche.",
  },
  {
    question: "Why do High Courts quash MSME Samadhaan awards on EPC and construction 'Works Contracts'?",
    answer:
      "Multiple High Courts (including Delhi, Bombay, and Allahabad in rulings such as Shree Gee Enterprises and Sterling & Wilson) have held that an indivisible composite 'Works Contract' involving supply, labour, civil erection, and transfer of property in goods embedded into immovable property does not fall within Section 18 MSEFC jurisdiction. Contractors should audit PO divisibility first—routing pure or separately billed Supply POs to MSEFC/43B(h), and indivisible works straight to Commercial Courts or Section 21 arbitration.",
  },
  {
    question: "How do we recover 5%–10% retention money if the builder says Occupancy Certificate (OC) is still pending?",
    answer:
      "Developers cannot indefinitely postpone the Defect Liability Period (DLP) by withholding OC applications or delaying regulatory clearances after taking beneficial possession. Documenting virtual completion, resident/tenant handover, MEP commissioning, and zero unrectified snags notified during the contractual DLP period establishes DLP expiry and triggers retention release plus commercial interest.",
  },
  {
    question: "How can a contractor protect Performance Bank Guarantees (PBGs) before demanding overdue payments?",
    answer:
      "Before serving an aggressive termination or final recovery notice on a contract carrying live PBGs, contractors should assemble documentary proof of employer-caused delays, unpaid certified bills, and bad-faith linkage. Where fraudulent invocation or irretrievable injustice is imminent, an urgent Section 9 Commercial Court petition seeks interim injunction restraining encashment prior to or alongside Section 21 arbitration invocation.",
  },
  {
    question: "When must an EPC contractor serve a Section 80 CPC notice vs an Article 226 Writ against NHAI, CPWD, or PWD?",
    answer:
      "Before instituting a civil or commercial recovery suit against Central/State Government departments or public officers, Section 80(1) CPC mandates a clear 60-day prior notice (excluded from limitation under Section 15(2) Limitation Act). However, where work is completed and Measurement Books are unconditionally admitted—with payment withheld solely for 'lack of budget'—contractors may evaluate a High Court Writ under Article 226 per Surya Constructions, or follow contractual GCC DRB and Section 21 arbitration steps.",
  },
  {
    question: "Can an EPC firm test LegalRecovery.in on one stuck bill before onboarding multiple project sites?",
    answer:
      "Yes. Contractors can pilot a single overdue RA bill, retention tranche, or subcontract ledger at ₹999 for advocate drafting and tri-channel service (Email, Business WhatsApp, and Speed Post RPAD with BSA s.63 evidence), or onboard multiple SPVs, JV divisions, and project sites via our Representees workspace and CSV batch workflow.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Arbitration and Conciliation Act, 1996 (Sections 9, 11, 21, 29A & 36) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(vi) Construction Contracts, s.12A & Order XIII-A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 23, 46, 55, 70, 73 & 74) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Section 80 Government Notice & Order XXXVII Summary Suits) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Admissibility for DPRs, MBs & Notices) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court of India Judgments Portal (R.L. Kalathia, Surya Constructions, Kailash Nath & Nortel)",
    url: "https://main.sci.gov.in/judgments",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "Construction, EPC & MEP Contractor Pre-Arbitration Legal Recovery",
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
      "EPC Directors, Civil & Structural Contractors, MEP/HVAC Contractors, Infra Promoters, Subcontractors & Quantity Surveyors",
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
  name: "IND-07 Construction, EPC & MEP Contractor Recovery Spokes, Tools & Templates",
  numberOfItems: IND_07_SPOKES.length,
  itemListElement: IND_07_SPOKES.map((spoke, index) => ({
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
      name: "Construction & EPC Contractor Recovery",
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

const SPOKE_GROUPS: {
  groupTitle: string;
  badgeClass: string;
  items: IndustrySpoke[];
}[] = [
  {
    groupTitle: "Track A: Uncertified RA Bills, Post-DLP Retention & Govt/PSU Tenders",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
    items: IND_07_SPOKES.filter((s) => s.track === "RA, Retention & PSU"),
  },
  {
    groupTitle: "Track B: Works-Contract MSME Traps & Subcontractor 'Pay-When-Paid' Defense",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    items: IND_07_SPOKES.filter((s) => s.track === "MSME & Subcontract"),
  },
  {
    groupTitle: "Track C: Prolongation Claims, Wrongful LD, s.21 Invocation & s.36 Execution",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: IND_07_SPOKES.filter((s) => s.track === "Prolongation, LD & Arb"),
  },
  {
    groupTitle: "Track D: Interactive Retention/DLP Calculator & Contractor Notice Pack",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
    items: IND_07_SPOKES.filter((s) => s.track === "Tools & Templates"),
  },
];

export default function ConstructionEpcContractorRecoveryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Construction & EPC Recovery", href: PAGE_URL },
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
              <span>IND-07 Infrastructure &amp; EPC Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>Arbitration s.21 / s.9 &bull; Commercial Courts s.2(1)(c)(vi) &bull; CPC s.80</span>
              <span className="text-red-500">&bull;</span>
              <span>Civil, MEP &amp; Subcontractors</span>
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
                Executive Creditor Answer (EPC Directors, Civil &amp; MEP Contractors)
              </span>
              <p>
                Civil, EPC, and MEP contractors recover stuck RA bills, post-DLP retention money, and extra-item claims under Commercial Courts Act s.2(1)(c)(vi) and Arbitration Act s.21 without surrendering to coerced No-Claim Certificates or retaliatory Bank Guarantee encashments—combining site Measurement Book proof, s.9 interim stays, and CPC s.80 / Art. 226 PSU remedies.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &rupee;10L&ndash;50Cr+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  RA Bills, Retention &amp; Prolongation Claims
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  s.9 + s.21
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  PBG Injunction &amp; Limitation Freeze
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  60d / 12m
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  CPC s.80 Wait &amp; s.29A Award Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  &rupee;999 &rarr; CSV
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Single Claim Pilot to Multi-Site Desk
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
              Infrastructure &amp; Arbitration Protocol Reviewed by{" "}
              <Link
                href="/authors/anuj-anand-malik"
                className="text-slate-200 underline hover:text-white font-semibold"
              >
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
            {/* Left Sticky Sidebar TOC */}
            <ConstructionHubTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: EPC Recovery Gap */}
              <section
                id="heading-epc-gap"
                aria-labelledby="heading-epc-gap-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h2
                      id="heading-epc-gap-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Why Construction &amp; EPC Dues Stall Beyond Standard Invoices
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Commercial Courts Act s.2(1)(c)(vi), Measurement Book Bottlenecks, Works-Contract Traps &amp; Bank Guarantee Leverage
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Generic legal-tech portals treat an ₹85 Lakh HVAC or civil Running Account (RA) bill the exact same way they treat a ₹15,000 retail invoice. In reality, construction, infrastructure, and turnkey MEP receivables sit behind five specialized employer defenses: unsigned Joint Measurement Books (MBs), postponed Defect Liability Period (DLP) retention releases, arbitrary 10% Liquidated Damages (LD) debit notes, forced No-Claim Certificates (NDCs), and retaliatory threats to encash Performance Bank Guarantees (PBGs).
                  </p>
                  <p>
                    Meanwhile, thousands of Udyam-registered EPC and MEP contractors lose two years pursuing MSME Samadhaan only for High Courts to quash their MSEFC awards because an indivisible composite &ldquo;Works Contract&rdquo; falls outside MSMED Section 18. Section 2(1)(c)(vi) of the Commercial Courts Act, 2015 expressly classifies construction and infrastructure contracts (including tenders) as specialized commercial disputes requiring disciplined claim crystallization before litigation.
                  </p>
                  <p>
                    This IND-07 Pillar Hub unites all 11 construction recovery playbooks, statutory calculators, and advocate notice packs—alongside our live{" "}
                    <Link
                      href="/subcontractor-payment-recovery-india"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      subcontractor payment recovery guide
                    </Link>
                    ,{" "}
                    <Link
                      href="/recovery/contractor-payment"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      contractor payment recovery desk
                    </Link>
                    , and{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      Section 80 CPC government notice playbook
                    </Link>
                    .
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      MB &amp; Duress Protocol
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Beat Uncertified Final Bills
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Convert DPRs, level sheets, and GST invoices into deemed certification and invalidate coerced NDCs under R.L. Kalathia.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      DLP &amp; s.74 Shield
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Unlock Retention &amp; Counter LD
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Trigger beneficial occupation DLP expiry and strike down windfall 10% LD set-offs lacking Kailash Nath loss proof.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      PBG &amp; Limitation Guard
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      s.9 Stay &amp; s.21 Invocation
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Restrain bad-faith Bank Guarantee invocation under Section 9 while stopping the 3-year Nortel limitation clock cleanly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Multi-Track Claim Escalation Matrix */}
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
                      Construction Claim Escalation Matrix by Contract &amp; Ticket
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Routing EPC, Civil, MEP &amp; Subcontract Receivables by Ticket Tier, Employer Type, and Statutory Mechanism
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[740px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Claim &amp; Contract Bucket</th>
                        <th className="p-3.5 border-b border-slate-800">Typical Ticket</th>
                        <th className="p-3.5 border-b border-slate-800">Primary Statutory Lever</th>
                        <th className="p-3.5 border-b border-slate-800">Notice &amp; Pre-Tier Window</th>
                        <th className="p-3.5 border-b border-slate-800">Target Adjudication Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Uncertified RA / Final Bills &amp; Coerced NDC
                        </td>
                        <td className="p-3.5">&rupee;10L&ndash;&rupee;15Cr+</td>
                        <td className="p-3.5">Contract Act s.55/70, Ambica / Kalathia Duress Rule</td>
                        <td className="p-3.5 font-semibold text-amber-700">15d Demand + Immediate NDC Protest</td>
                        <td className="p-3.5">Arbitration s.21 / Commercial Court s.12A</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Post-DLP Retention Money (5%&ndash;10%)
                        </td>
                        <td className="p-3.5">&rupee;5L&ndash;&rupee;5Cr</td>
                        <td className="p-3.5">Contract Act s.73/74 &amp; Beneficial Occupation</td>
                        <td className="p-3.5 font-semibold text-emerald-700">15d Release Notice post-DLP</td>
                        <td className="p-3.5">Order 37 CPC / Commercial Summary (O.XIII-A)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          NHAI, CPWD, PWD, JJM &amp; Municipal Tenders
                        </td>
                        <td className="p-3.5">&rupee;15L&ndash;&rupee;50Cr+</td>
                        <td className="p-3.5">CPC s.80, Art. 226 Writ (Surya Constructions), GCC DRB</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">60d CPC s.80 / GCC Engineer-DRB Steps</td>
                        <td className="p-3.5">High Court Writ (Admitted MB) / Arbitral Tribunal</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Subcontractor &lsquo;Pay-When-Paid&rsquo; Holdbacks
                        </td>
                        <td className="p-3.5">&rupee;5L&ndash;&rupee;3Cr</td>
                        <td className="p-3.5">Contract Act s.23/46, Ircon Precedent, IBC s.8 (&ge;&rupee;1Cr)</td>
                        <td className="p-3.5">15d Reasonable-Time Breach / 10d IBC Form 3</td>
                        <td className="p-3.5">Commercial Court / s.21 Arbitration / NCLT</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Divisible Supply POs vs Composite Works
                        </td>
                        <td className="p-3.5">&rupee;3L&ndash;&rupee;5Cr</td>
                        <td className="p-3.5">MSMED s.15&ndash;18 (Supply Only) vs s.43B(h) Tax Rule</td>
                        <td className="p-3.5">15&ndash;45d Appointed Day + Pre-31 Mar Notice</td>
                        <td className="p-3.5">MSEFC (Supply) / Commercial Court (Works)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Prolongation, Extra Items, LD &amp; PBG Threat
                        </td>
                        <td className="p-3.5">&rupee;25L&ndash;&rupee;50Cr+</td>
                        <td className="p-3.5">Contract Act s.55 &amp; s.74 (Kailash Nath), Arb Act s.9</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">EOT Reservation + Urgent s.9 BG Stay</td>
                        <td className="p-3.5">Commercial Court (s.9) &rarr; Tribunal (s.29A 12m)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Unpaid Arbitral Awards (Post-s.34 Filing)
                        </td>
                        <td className="p-3.5">&rupee;10L&ndash;&rupee;50Cr+</td>
                        <td className="p-3.5">Arbitration s.36(3) Deposit, NITI 75% PSU, IBC s.9</td>
                        <td className="p-3.5">Post-90d Award Window / BG Submission</td>
                        <td className="p-3.5">Execution Court (O.21 Garnishee) / NCLT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: SVG Workflow Architecture + Mobile Stacked Cards */}
              <section
                id="heading-epc-pipeline"
                aria-labelledby="heading-epc-pipeline-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="heading-epc-pipeline-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      EPC Recovery Rail: From Joint MB &amp; Notice to s.36 Decree
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      5-Stage Infrastructure Litigation Pipeline Protecting Cashflow, Bank Guarantees, and Limitation Deadlines
                    </p>
                  </div>
                </div>

                {/* Desktop Hand-Authored SVG Diagram */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={310}
                    viewBox="0 0 920 310"
                    role="img"
                    aria-label="5-stage construction and EPC contractor legal recovery workflow from Measurement Book audit to Section 36 execution"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="310" rx="12" fill="#0F172A" />
                    <text x="24" y="34" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1.2">
                      LEGALRECOVERY.IN &bull; IND-07 CONSTRUCTION &amp; EPC RECOVERY ARCHITECTURE
                    </text>

                    {/* Stage 1 */}
                    <rect x="24" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="48" cy="84" r="13" fill="#DC2626" />
                    <text x="48" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                    <text x="70" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Site Audit</text>
                    <text x="36" y="116" fill="#CBD5E1" fontSize="10.5">Joint MB &amp; Site DPRs</text>
                    <text x="36" y="134" fill="#CBD5E1" fontSize="10.5">Hindrance &amp; EOT Logs</text>
                    <text x="36" y="152" fill="#CBD5E1" fontSize="10.5">Supply vs Works Check</text>
                    <rect x="36" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="44" y="198" fill="#34D399" fontSize="10" fontWeight="700">Limitation Split</text>
                    <text x="44" y="215" fill="#94A3B8" fontSize="9.5">Final Bill vs Post-DLP</text>

                    <path d="M180 154 L202 154" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="202,149 212,154 202,159" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="212" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="236" cy="84" r="13" fill="#DC2626" />
                    <text x="236" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                    <text x="258" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Notice &amp; BG</text>
                    <text x="224" y="116" fill="#CBD5E1" fontSize="10.5">RA / Retention Demand</text>
                    <text x="224" y="134" fill="#CBD5E1" fontSize="10.5">s.55 EOT Reservation</text>
                    <text x="224" y="152" fill="#CBD5E1" fontSize="10.5">CPC s.80 (60d PSU)</text>
                    <rect x="224" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="232" y="198" fill="#FBBF24" fontSize="10" fontWeight="700">Section 9 PBG Stay</text>
                    <text x="232" y="215" fill="#94A3B8" fontSize="9.5">Block Retaliatory Encash</text>

                    <path d="M368 154 L390 154" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,149 400,154 390,159" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="424" cy="84" r="13" fill="#DC2626" />
                    <text x="424" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                    <text x="446" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Pre-Tier Cure</text>
                    <text x="412" y="116" fill="#CBD5E1" fontSize="10.5">Duress NDC Protest</text>
                    <text x="412" y="134" fill="#CBD5E1" fontSize="10.5">Kailash Nath LD Rebut</text>
                    <text x="412" y="152" fill="#CBD5E1" fontSize="10.5">Engineer / DRB Escalate</text>
                    <rect x="412" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="420" y="198" fill="#34D399" fontSize="10" fontWeight="700">BSA s.63 Service</text>
                    <text x="420" y="215" fill="#94A3B8" fontSize="9.5">RPAD + Email + WA Hash</text>

                    <path d="M556 154 L578 154" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="578,149 588,154 578,159" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="588" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="612" cy="84" r="13" fill="#DC2626" />
                    <text x="612" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                    <text x="634" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum Action</text>
                    <text x="600" y="116" fill="#CBD5E1" fontSize="10.5">s.21 &amp; s.11 Appointment</text>
                    <text x="600" y="134" fill="#CBD5E1" fontSize="10.5">Art. 226 PSU Admitted</text>
                    <text x="600" y="152" fill="#CBD5E1" fontSize="10.5">Commercial s.12A / O.37</text>
                    <rect x="600" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="608" y="198" fill="#FBBF24" fontSize="10" fontWeight="700">Nortel Clock Stop</text>
                    <text x="608" y="215" fill="#94A3B8" fontSize="9.5">Explicit s.21 Receipt</text>

                    <path d="M744 154 L766 154" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="766,149 776,154 766,159" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="776" y="58" width="120" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="800" cy="84" r="13" fill="#10B981" />
                    <text x="800" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                    <text x="820" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Realize</text>
                    <text x="788" y="116" fill="#CBD5E1" fontSize="10.5">s.29A 12m Award</text>
                    <text x="788" y="134" fill="#CBD5E1" fontSize="10.5">s.36(3) 100% Dep</text>
                    <text x="788" y="152" fill="#CBD5E1" fontSize="10.5">NITI 75% PSU BG</text>
                    <rect x="788" y="178" width="96" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="794" y="198" fill="#34D399" fontSize="10" fontWeight="700">O.21 / IBC s.9</text>
                    <text x="794" y="215" fill="#94A3B8" fontSize="9.5">Bank Garnishee</text>

                    <text x="24" y="286" fill="#94A3B8" fontSize="10">
                      Every stage embeds Commercial Courts Act s.2(1)(c)(vi) compliance, R.L. Kalathia duress safeguards, and Section 63 BSA evidence preservation.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      num: "01",
                      title: "Site Proof & Contract Divisibility Audit",
                      desc: "Bundle Joint MBs, DPRs, Hindrance Logs, and split Final Bill vs Post-DLP limitation clocks.",
                    },
                    {
                      num: "02",
                      title: "Statutory Notice & Section 9 PBG Protection",
                      desc: "Dispatch RA/Retention demand, s.55 EOT reservation, or 60-day CPC s.80 notice with s.9 BG stay readiness.",
                    },
                    {
                      num: "03",
                      title: "Duress NDC Protest, LD Rebuttal & DRB Tiers",
                      desc: "Neutralize coerced No-Claim Certificates, strike windfall 10% LD claims, and exhaust Engineer/DRB pre-tiers.",
                    },
                    {
                      num: "04",
                      title: "Section 21 Invocation, Writ or Commercial Suit",
                      desc: "Stop the 3-year Nortel clock via s.21 invocation, file Art. 226 Writ for admitted PSU bills, or move Commercial Courts.",
                    },
                    {
                      num: "05",
                      title: "Section 29A Award & Section 36 / IBC Realization",
                      desc: "Enforce s.36(3) cash deposits, NITI Aayog 75% PSU payouts, Order 21 bank garnishee orders, or NCLT IBC.",
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

              {/* Section 4: Interactive Portfolio Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                aria-labelledby="heading-scenario-tabs-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h2
                        id="heading-scenario-tabs-title"
                        className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Interactive Playbooks Across 4 Infrastructure Claim Tracks
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Switch Between RA Bill Certification, PSU/Govt Tenders, Works-MSME/Subcontractors &amp; DLP/LD/PBG Protection
                      </p>
                    </div>
                  </div>
                  <ConstructionHubScenarioTabs />
                </div>
              </section>

              {/* Section 5: Dual-Track Infrastructure & CTA */}
              <section
                id="heading-dual-desk"
                aria-labelledby="heading-dual-desk-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="heading-dual-desk-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Pre-Arbitration Claim Crystallization &amp; Multi-Site CSV Desk
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Bridging ₹999 Statutory Claim Notices to Section 9 BG Stays, Arbitral Representation &amp; Multi-SPV Workspaces
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Multi-Entity Representees for EPC SPVs
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Segregated JV, SPV &amp; Project Site Profiles
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Manage distinct Work Orders, authorized project signatories, and corporate sender profiles via{" "}
                      <Link href="/user/representees" className="text-[#DC2626] font-semibold underline">
                        Representees management
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Multi-Invoice &amp; RA-Bill Ledger Engine
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      RA Bill 1..N, GST/WCT Holdbacks &amp; DLP Dates
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Attach itemized running bills, PO numbers, certified vs uncertified MB balances, and retention release schedules inside each notice.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Tri-Channel BSA s.63 Service Proof
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Email + Business WhatsApp + Speed Post RPAD
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Eliminate &ldquo;notice never received&rdquo; objections in Section 11, Section 80 CPC, and Commercial Court hearings with timestamped delivery hashes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      4. Direct Infrastructure Panel Escalation
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Section 9 BG Injunctions &amp; Section 21 Arbitration
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Seamlessly transition unresolved notices to AMA Legal Solutions&apos; infrastructure litigation panel for Commercial Court filings and arbitral proceedings.
                    </p>
                  </div>
                </div>

                <div id="heading-cta-block" className="scroll-mt-28 pt-2">
                  <ConstructionHubCTA />
                </div>
              </section>

              {/* Section 6: Apex Court Precedents */}
              <section
                id="heading-supreme-court-precedents"
                aria-labelledby="heading-supreme-court-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="heading-supreme-court-precedents-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Apex Court Precedents Protecting Construction Contractors
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Verified Supreme Court Doctrines Against Coerced NDCs, PSU Budget Excuses, Windfall LD &amp; Limitation Traps
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {APEX_PRECEDENTS.map((item) => (
                    <article
                      key={item.parties}
                      className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <span
                        className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#DC2626]"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                          Contractor Precedent
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{item.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.holding}</p>
                      <p className="text-xs font-bold text-slate-900 pt-1">
                        Operational Impact:{" "}
                        <span className="font-medium text-slate-700">{item.impact}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Financial & Claim Math */}
              <section
                id="heading-worked-math"
                aria-labelledby="heading-worked-math-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="heading-worked-math-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked EPC Claim Math: &rupee;2.40 Cr Final Bill, Retention &amp; LD
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Illustrative Pre-Arbitration Claim Crystallization for a Turnkey Civil &amp; MEP Contractor
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider a mid-sized MEP &amp; civil contractor completing a ₹24.00 Crore commercial tower contract. At handover, the developer&apos;s PMC stalls certification on the ₹2.40 Crore Final Bill, withholds ₹90.00 Lakh in 5% post-DLP retention (claiming Occupancy Certificate is pending), and issues a ₹24.00 Lakh (10%) Liquidated Damages debit note despite 14 months of employer-caused drawing delays—while holding a live ₹1.20 Crore Performance Bank Guarantee.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Passive Contractor Path (High Loss Exposure)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Signs unconditional &ldquo;No-Claim Certificate&rdquo; just to get ₹1.30 Cr, forfeiting ₹1.10 Cr + prolongation overheads.</li>
                      <li>Misses Section 55 EOT reservation, killing overhead claims in arbitration.</li>
                      <li>Sends informal emails instead of a s.21 notice, risking Nortel 3-year limitation expiry.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Structured IND-07 Recovery Protocol
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Serves deemed-MB demand + immediate R.L. Kalathia duress protest preserving full ₹3.30 Cr principal + interest.</li>
                      <li>Rebuts 10% LD (₹24L) via Hindrance Register under Kailash Nath Associates (s.74 actual-loss rule).</li>
                      <li>Pairs s.9 Commercial Court PBG stay prep with explicit s.21 notice, crystallizing ₹3.54 Cr+ enforceable claim.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">
                      Track Split Final-Bill vs Post-DLP Retention Limitation Clocks
                    </strong>
                    <span className="text-slate-300">
                      Compute exact DLP release dates, commercial interest, and 3-year Article 18/55/113 cutoffs per project site.
                    </span>
                  </div>
                  <Link
                    href="/tools/construction-retention-dlp-escalation-claim-calculator"
                    className="px-4 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shrink-0 text-center transition-colors"
                  >
                    Launch Construction Calculator &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 8: Complete 11-Spoke IND-07 Directory */}
              <section
                id="heading-ind07-directory"
                aria-labelledby="heading-ind07-directory-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="heading-ind07-directory-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      IND-07 Directory: All 11 Construction Spokes, Tools &amp; Packs
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Complete Hub-and-Spoke Map Covering B2B-090 Through B2B-100 Across Civil, EPC, MEP &amp; Government Tenders
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {SPOKE_GROUPS.map((group) => (
                    <div key={group.groupTitle} className="space-y-3.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 border-l-4 border-[#DC2626] pl-3">
                        {group.groupTitle}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {group.items.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#DC2626]/60 hover:shadow-sm transition-all flex flex-col justify-between gap-2.5"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span
                                  className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${group.badgeClass}`}
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
                  ))}
                </div>
              </section>

              {/* Section 9: Live Seed Assets & Existing Contractor Guides */}
              <section
                id="heading-live-seed-guides"
                aria-labelledby="heading-live-seed-guides-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="heading-live-seed-guides-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Live Contractor, Subcontractor &amp; Govt Notice Guides
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Live Cross-Linked Seed Assets, Calculators &amp; Commercial Recovery Solutions Ready Today
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "Subcontractor Payment Recovery in India",
                      href: "/subcontractor-payment-recovery-india",
                      tag: "IND-07 Seed Asset",
                      desc: "Defeat back-to-back clauses, enforce Ircon & Section 70 quantum meruit, and recover retention money.",
                    },
                    {
                      title: "Recover Contractor Payments & Project Dues",
                      href: "/recovery/contractor-payment",
                      tag: "IND-07 Seed Asset",
                      desc: "Actionable options across Order 37 CPC, MSME Samadhaan, Section 138 cheques, and NCLT s.9.",
                    },
                    {
                      title: "Section 80 CPC Notice to Government & PSUs",
                      href: "/law/section-80-cpc-notice-to-government",
                      tag: "IND-07 Seed Asset",
                      desc: "60-day statutory notice rules, designated addressees, Section 15(2) exclusion, and urgent s.80(2) leave.",
                    },
                    {
                      title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
                      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                      tag: "CSV Batch Desk",
                      desc: "Multi-site batch notice onboarding for EPC companies, suppliers, and institutional creditors.",
                    },
                    {
                      title: "Order XXXVII Summary Suit for Money Recovery",
                      href: "/law/order-37-summary-suit-money-recovery",
                      tag: "Fast Civil Route",
                      desc: "10-day leave-to-defend threshold for liquidated certified bills, cheques, and written contracts.",
                    },
                    {
                      title: "Interactive 3-Year Limitation Period Calculator",
                      href: "/tools/limitation-period-calculator",
                      tag: "Live Calculator",
                      desc: "Verify Article 18/55 deadlines and Section 18/19 debt-acknowledgment resets before filing.",
                    },
                    {
                      title: "MSME Delayed Payment Interest Calculator (3x Rate)",
                      href: "/tools/msme-delayed-payment-interest-calculator",
                      tag: "Divisible Supply Tool",
                      desc: "Compute Section 16 monthly compound interest & s.43B(h) impact for eligible Udyam supply POs.",
                    },
                    {
                      title: "MSME ODR Portal Step-by-Step Recovery Guide",
                      href: "/msme-odr-portal-delayed-payment-guide",
                      tag: "MSME ODR",
                      desc: "End-to-end mediation and arbitration filing workflow for eligible Udyam material and service suppliers.",
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
                      FAQs: Construction, EPC &amp; MEP Contractor Debt Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Answers for EPC Directors, Contracts Heads, Quantity Surveyors &amp; Specialty Subcontractors
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

              {/* Section 11: Statutory Authorities & Official Sources */}
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
                      Statutory Authorities, Acts &amp; Official Construction Portals
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Indian Statutes &amp; Supreme Court Judgment Repositories Referenced
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
