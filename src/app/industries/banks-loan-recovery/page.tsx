import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BanksHubTableOfContents from "./BanksHubTableOfContents";
import BanksHubScenarioTabs from "./BanksHubScenarioTabs";
import BanksHubCTA from "./BanksHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/banks-loan-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Bank Loan & NPA Legal Recovery Platform India | Bulk Notices";
const PAGE_DESCRIPTION =
  "End-to-end statutory legal notice drafting and bulk Email, WhatsApp & Speed Post RPAD dispatch for PSU, Private, Small Finance & Cooperative Banks.";
const H1_TEXT =
  "Pre-Litigation Loan Recall & NPA Legal Recovery Infrastructure for Indian Banks";

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
  track: string;
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_01_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-002",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "SARFAESI & DRT",
    title: "SARFAESI Section 13(2) Demand Notice & 13(3A) Reply Checklist",
    url: "/law/sarfaesi-section-13-2-demand-notice-bank-guide",
    statute: "SARFAESI s.13(2), s.13(3A) & Rule 3",
    summary:
      "Authorized Officer checklist for itemized dues, NPA date disclosure, Rule 3 service, and 15-day reasoned replies.",
  },
  {
    id: "B2B-003",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SARFAESI & DRT",
    title: "SARFAESI Section 14 DM/CMM Physical Possession Workflow",
    url: "/sarfaesi-section-14-dm-cmm-physical-possession-workflow",
    statute: "SARFAESI s.14 & Rule 8",
    summary:
      "Filing defect-free 9-point affidavits with CERSAI proof before District Magistrates and defeating tenant stays.",
  },
  {
    id: "B2B-005",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SARFAESI & DRT",
    title: "Filing Original Applications (OA) on e-DRT for Banks (>= ₹20L)",
    url: "/e-drt-original-application-filing-guide-for-banks",
    statute: "RDB Act s.19 & Bankers' Books Act",
    summary:
      "Pre-OA recall drafting, BSA s.63 ledger certification, s.19 asset attachment, and Recovery Officer execution.",
  },
  {
    id: "B2B-013",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SARFAESI & DRT",
    title: "Broken One-Time Settlements (OTS): Revocation & Liability Revival",
    url: "/ots-one-time-settlement-default-revocation-legal-notice-bank",
    statute: "SBI v. Arvindra & Bijnor Urban Co-op",
    summary:
      "Revoking defaulted OTS sanctions, forfeiting token deposits, blocking writ extensions, and reviving full debt.",
  },
  {
    id: "B2B-009",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SARFAESI & DRT",
    title: "Invoking Personal & Corporate Guarantees: s.128 & IBC Form B",
    url: "/personal-guarantor-invocation-notice-bank-loan-recovery",
    statute: "Contract Act s.128 & IBC s.95 Form B",
    summary:
      "Replacing defective 'CC' recalls with formal guarantee invocation notices for limitation and IBC Form B.",
  },
  {
    id: "B2B-004",
    archetype: "G2",
    archetypeLabel: "G2 Forum Matrix",
    track: "Sub-₹20L & Retail",
    title: "Recovering Bank NPAs Below the ₹20 Lakh DRT Threshold (5 Routes)",
    url: "/bank-loan-recovery-below-20-lakhs-drt-threshold-options",
    statute: "RDB Act s.1(4), Commercial Courts & O.37 CPC",
    summary:
      "Forum matrix across ₹0–₹20L comparing Order 37 suits, Commercial Courts s.12A, PSS s.25, ODR, and Lok Adalat.",
  },
  {
    id: "B2B-016",
    archetype: "G2",
    archetypeLabel: "G2 Early Delinquency",
    track: "Sub-₹20L & Retail",
    title: "Arresting SMA-2 to NPA Slippage (61-90 DPD) via Cure Notices",
    url: "/sma-1-sma-2-early-delinquency-cure-notice-strategy-banks",
    statute: "RBI IRACP & Day-End NPA Stamping",
    summary:
      "Preventing Day-90 NPA lock-in with Day-62 advocate cure notices before full-arrears rules trigger provisioning.",
  },
  {
    id: "B2B-006",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Sub-₹20L & Retail",
    title: "Scaling Bank NPA Recovery via Pre-Litigation National Lok Adalats",
    url: "/bank-pre-litigation-lok-adalat-bulk-npa-settlement-guide",
    statute: "LSA Act s.19, s.20(2) & s.21",
    summary:
      "Priming DLSA dockets 21 days ahead via WhatsApp + RPAD to win zero-court-fee Civil Court decrees.",
  },
  {
    id: "B2B-007",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Sub-₹20L & Retail",
    title: "Compliant Credit Card Delinquency Recovery & Neutral ODR",
    url: "/credit-card-default-bulk-legal-notice-arbitration-banks",
    statute: "Arbitration Act s.12(5) & RBI Norms",
    summary:
      "Eliminating harassment exposure and Section 34 annulments using multi-wave bulk notices and neutral institutional ODR.",
  },
  {
    id: "B2B-012",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Sub-₹20L & Retail",
    title: "Education Loan NPA Recovery: Overseas Students & Co-Applicants",
    url: "/education-loan-default-borrower-co-applicant-recovery-banks",
    statute: "Contract Act s.43 & CPC O.V R.25",
    summary:
      "Enforcing co-extensive liability on Indian parent co-obligors alongside international Email and WhatsApp service.",
  },
  {
    id: "B2B-008",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SME, Co-op & Agri",
    title: "Cash Credit (CC) & Overdraft Recall for DP & Stock Diversion",
    url: "/cash-credit-overdraft-stock-statement-default-recall-notice",
    statute: "RBI Out-of-Order Rules & BNS s.316/318",
    summary:
      "Recalling 90-day out-of-order CC/OD facilities for overdue stock statements, issuing book-debt notices, and criminal complaints.",
  },
  {
    id: "B2B-010",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SME, Co-op & Agri",
    title: "Mudra & CGTMSE Collateral-Free MSME Loan Recovery & Claims",
    url: "/mudra-cgtmse-collateral-free-msme-loan-recovery-banks",
    statute: "CGTMSE / NCGTC Claim Rules & PSS s.25",
    summary:
      "Meeting NCGTC documented legal-action requirements on Shishu, Kishore, and Tarun MSME NPAs via bulk notices.",
  },
  {
    id: "B2B-011",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SME, Co-op & Agri",
    title: "Cooperative Bank & Credit Society Recovery: s.84 & SARFAESI",
    url: "/cooperative-bank-credit-society-arbitration-recovery-section-84",
    statute: "MSCS Act s.84 & Pandurang Chaugule",
    summary:
      "Dual-track playbook for Urban Co-op Banks combining Registrar borrower-surety arbitration with SARFAESI enforcement.",
  },
  {
    id: "B2B-014",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SME, Co-op & Agri",
    title: "Lawful Hypothecated Vehicle & Tractor Repossession for Banks",
    url: "/vehicle-tractor-hypothecation-loan-repossession-notice-banks",
    statute: "Prakash Kaur & MV Act s.51(5) Form 36",
    summary:
      "4-notice sequence (Recall, Police Intimation, Pre-Sale Redemption, Post-Auction Deficit) preventing wrongful-seizure FIRs.",
  },
  {
    id: "B2B-015",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "SME, Co-op & Agri",
    title: "Agriculture & KCC NPA Recovery: s.31(i), State RRCs & Lok Adalat",
    url: "/agriculture-kcc-kisan-credit-card-non-wilful-npa-recovery",
    statute: "SARFAESI s.31(i) & State RRC Acts",
    summary:
      "Routing exempt agricultural land to State RRCs and Lok Adalats while enforcing non-exempt commercial agro collateral.",
  },
  {
    id: "B2B-017",
    archetype: "T1",
    archetypeLabel: "T1 Interactive Tool",
    track: "Tools & Templates",
    title: "SARFAESI, DRT Rule 7 Fee & Bank Recovery Forum Calculator",
    url: "/tools/sarfaesi-drt-bank-recovery-forum-calculator",
    statute: "RDB Rule 7 & SARFAESI s.31(h)/(j)",
    summary:
      "Verify 20% principal eligibility, compute DRT Rule 7 OA fees, and generate 60+15+30 day statutory calendars.",
  },
  {
    id: "B2B-018",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template",
    track: "Tools & Templates",
    title: "Loan Recall cum Guarantee Invocation Notice (RBI Penal-Charge Compliant)",
    url: "/templates/bank-loan-recall-cum-guarantee-invocation-notice",
    statute: "Contract Act s.128 & RBI Penal Circular",
    summary:
      "Advocate template separating uncapitalized RBI penal charges from interest with explicit guarantor invocation.",
  },
];

const APEX_MANDATES = [
  {
    title: "Cooperative Banks Confirmed Eligible Under the SARFAESI Act, 2002",
    parties: "Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd.",
    citation: "5-Judge Constitution Bench, Supreme Court of India (2020)",
    holding:
      "State and Multi-State Cooperative Banks qualify as 'banks' under Section 2(1)(c) of the SARFAESI Act, empowering Urban and District Cooperative Banks to issue Section 13(2) demand notices and enforce secured collateral directly.",
    impact: "Unlocks 60-day SARFAESI enforcement for 1,400+ Cooperative Banks.",
  },
  {
    title: "Neutral Institutional Arbitrators for Bank & Card Portfolios",
    parties: "Perkins Eastman Architects DPC v. HSCC (India) Ltd. & CORE 5-Judge Bench",
    citation: "Supreme Court of India — Section 12(5) & Seventh Schedule Compliance",
    holding:
      "Bank officers with direct financial interest cannot unilaterally appoint sole arbitrators. Retail, card, and personal loan arbitrations must route through neutral institutional ODR rosters to prevent Section 34 annulments.",
    impact: "Eliminates mass Section 34 set-asides across retail loan awards.",
  },
  {
    title: "High Courts Cannot Extend Defaulted Bank One-Time Settlements",
    parties: "State Bank of India v. Arvindra Electronics (P) Ltd. & Bijnor Urban Co-op Bank",
    citation: "Supreme Court of India (2022) — Article 226 & OTS Sanctity",
    holding:
      "High Courts under Article 226 cannot rewrite contractual OTS timelines or force banks to grant extensions once tranche deadlines lapse. Formal OTS Revocation Notices forfeit deposits and restore full dues.",
    impact: "Stops strategic OTS stalling before auctions and DRT recovery.",
  },
  {
    title: "Limitation on Continuing Guarantees Runs From Formal Bank Invocation",
    parties: "Syndicate Bank v. Channaveerappa Beleri & Lalit Kumar Jain v. Union of India",
    citation: "Supreme Court of India — Contract Act s.128 & IBC Part III",
    holding:
      "For on-demand guarantees, the 3-year limitation period runs from formal bank invocation rather than initial EMI default, and corporate CIRP does not discharge the personal guarantor's co-extensive liability.",
    impact: "Makes explicit guarantee invocation vital before IBC s.95 Form B.",
  },
];

const FAQS = [
  {
    question: "How can banks recover loans below the ₹20 Lakh DRT limit?",
    answer:
      "Under Section 1(4) RDB Act, DRT requires ≥ ₹20 Lakh. Below ₹20L, banks use PSS s.25 (e-NACH bounce), NI s.138 (cheque bounce), Pre-Litigation Lok Adalat Civil Court decrees, Order XXXVII/Commercial s.12A suits (≥₹3L), and neutral Section 12(5) ODR.",
  },
  {
    question: "What causes SARFAESI Section 13(2) demand notices to fail in DRT?",
    answer:
      "DRT quashes Section 13(2) notices when branches omit the NPA date, fail to itemize principal and interest under s.13(3), compound penal charges, skip Rule 3 service proofs, or miss the 15-day reasoned reply window under s.13(3A).",
  },
  {
    question: "Why send advocate cure notices during SMA-2 (61–90 DPD)?",
    answer:
      "Once an account crosses 90 DPD into NPA status, RBI rules block upgradation until 100% of overdue arrears clear. Sending an advocate-signed SMA-2 cure notice at Day 62 drives regularization before provisioning locks in.",
  },
  {
    question: "Can Cooperative Banks and RRBs use SARFAESI and bulk notices?",
    answer:
      "Yes. Under Pandurang Ganpati Chaugule (2020), Urban and State/Multi-State Co-op Banks can invoke SARFAESI on non-agricultural secured NPAs ≥ ₹1 Lakh (>20% remaining), and combine Section 84 MSCS arbitration with Lok Adalat dockets.",
  },
  {
    question: "How does LegalRecovery satisfy RBI, DPDP 2023, and BSA 2023 norms?",
    answer:
      "Bar Council-regulated advocates issue all notices under DPDP safeguards and RBI penal-charge separation, generating Zoho Email, WATI WhatsApp, and Speed Post RPAD tracking alongside Section 63 BSA 2023 certificates.",
  },
  {
    question: "Why shouldn't banks merely mark guarantors as 'CC' on recall letters?",
    answer:
      "Limitation on on-demand guarantees runs from formal invocation (Syndicate Bank v. Channaveerappa Beleri), and IBC s.95 Form B mandates a 14-day demand. Direct Section 128 Guarantee Invocation Notices protect enforceability.",
  },
  {
    question: "Can a bank test LegalRecovery with one overdue loan first?",
    answer:
      "Yes. Branches can submit 1 live overdue account at ₹999 (24-hour tri-channel advocate dispatch) to audit notice quality and delivery proofs before onboarding 10–10,000+ monthly accounts via CSV.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Recovery of Debts and Bankruptcy (RDB) Act, 1993 & e-DRT Portal — Ministry of Finance / DRT",
    url: "https://www.indiacode.nic.in/handle/123456789/1964",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Electronic Funds Transfer Dishonour) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Reserve Bank of India (RBI) Master Directions on IRACP, Penal Charges & Outsourcing of Financial Services",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Sections 19–21 Pre-Litigation Lok Adalat) — NALSA",
    url: "https://nalsa.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Admissibility of Electronic Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "Institutional Bank Loan & NPA Pre-Litigation Legal Recovery",
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
      "Scheduled Commercial Banks, PSU Banks, Private Banks, Small Finance Banks, Cooperative Banks & RRBs",
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
  name: "IND-01 Bank Loan & NPA Legal Recovery Spokes, Tools & Templates",
  numberOfItems: IND_01_SPOKES.length,
  itemListElement: IND_01_SPOKES.map((spoke, index) => ({
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
      name: "Banks Loan Recovery",
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

const SPOKE_GROUPS = [
  {
    groupTitle: "Track A: SARFAESI, e-DRT, OTS & Guarantee Enforcement",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
    items: IND_01_SPOKES.filter((s) => s.track === "SARFAESI & DRT"),
  },
  {
    groupTitle: "Track B: Sub-₹20L DRT Gap, SMA-2 Cure, Lok Adalat & Credit Cards",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: IND_01_SPOKES.filter((s) => s.track === "Sub-₹20L & Retail"),
  },
  {
    groupTitle: "Track C: Cooperative Banks, Mudra/CGTMSE, KCC Agri, CC/OD & Vehicles",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    items: IND_01_SPOKES.filter((s) => s.track === "SME, Co-op & Agri"),
  },
  {
    groupTitle: "Track D: Interactive Bank Calculators & RBI-Compliant Notice Templates",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
    items: IND_01_SPOKES.filter((s) => s.track === "Tools & Templates"),
  },
];

export default function BanksLoanRecoveryHubPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banks Loan Recovery", href: PAGE_URL },
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
              <span>IND-01 Banking Pillar Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>SARFAESI &bull; DRT &bull; Lok Adalat &bull; PSS s.25</span>
              <span className="text-red-500">&bull;</span>
              <span>PSU, Private, SFB &amp; Co-op Banks</span>
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
                Executive Creditor Answer (Scheduled, Small Finance &amp; Co-op Banks)
              </span>
              <p>
                Indian banks can cut branch pre-litigation notice turnaround from weeks to under 24 hours by combining RBI-compliant advocate notices (Email, WhatsApp, and Speed Post RPAD with BSA s.63 certificates) across SARFAESI s.13(2), RDB Act s.19 DRT, sub-₹20 Lakh Order 37/PSS s.25/ODR tracks, MSCS s.84 arbitration, and bulk Pre-Litigation Lok Adalats.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &rupee;25K&ndash;50Cr+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Card/Mudra to Corporate NPA Spectrum
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  &lt; 24 Hours
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Tri-Channel Advocate Dispatch TAT
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  &ge; &rupee;20 Lakh
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  DRT Floor (Sub-&rupee;20L Track Mapped)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  &rupee;999 &rarr; CSV
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  1 Live Test Case to 10,000+ Batch
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
              Statutory Architecture Reviewed by{" "}
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
            <BanksHubTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1 */}
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
                      Why Indian Banks Need Multi-Track Pre-Litigation Legal Infrastructure
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Closing the Sub-₹20 Lakh DRT Blind Spot, Preventing SMA-2 Slippage &amp; Standardizing Authorized Officer Notices
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Zonal NPA Chiefs, Authorized Officers under SARFAESI, and Cooperative Bank MDs manage portfolios spanning ₹25,000 card and Mudra defaults, ₹3–18 Lakh retail loans, ₹50 Lakh–₹5 Crore SME Cash Credit facilities, and ₹50 Crore+ corporate exposures.
                  </p>
                  <p>
                    Conventional recovery stacks create three roadblocks: SaaS dunning tools impose multi-month procurement lock-ins without statutory drafting; consumer blogs write from a borrower angle; and raising the DRT floor to ₹20 Lakh left retail, KCC, and micro-MSME NPAs without an obvious tribunal track.
                  </p>
                  <p>
                    This Pillar Hub unites all 18 banking recovery playbooks, calculators, and notice templates—allowing Stressed Asset Recovery Branches (SARBs) and branches to test 1 live account at ₹999 or launch 10–10,000+ CSV batch notices in under 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Daily Day-End Stamping
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      SMA-1 &amp; SMA-2 Intervention
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Trigger Day-62 cure notices before Day-90 NPA lock-in activates full-arrears upgrade rules.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Zero Harassment Exposure
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      BCI &amp; RBI Compliant
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Advocate-signed statutory notices complying with DPDP 2023 and RBI Fair Practices norms.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Court-Admissible Service
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      BSA 2023 s.63 Trail
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Zoho Email, WATI WhatsApp, and Speed Post RPAD manifests built for DRT, NCLT, and courts.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Multi-Track Matrix */}
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
                      Multi-Track Bank Escalation Matrix by Ticket, Aging &amp; Collateral
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Mapping Ticket Size, SMA/DPD Bucket, Collateral Status, and Statutory Forum Across Indian Banking Portfolios
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Portfolio &amp; Ticket Tier</th>
                        <th className="p-3.5 border-b border-slate-800">Aging / Trigger</th>
                        <th className="p-3.5 border-b border-slate-800">Primary Statutory Lever</th>
                        <th className="p-3.5 border-b border-slate-800">Notice &amp; Cure Window</th>
                        <th className="p-3.5 border-b border-slate-800">Escalation Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Early Delinquency (All Tickets)
                        </td>
                        <td className="p-3.5">SMA-1 (31&ndash;60 DPD) &amp; SMA-2 (61&ndash;90 DPD)</td>
                        <td className="p-3.5">RBI IRACP Framework &amp; Advocate Soft Cure Notice</td>
                        <td className="p-3.5 font-semibold text-amber-700">Day 62 Dispatch (7&ndash;15d Cure)</td>
                        <td className="p-3.5">Pre-NPA Regularization / Restructuring</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Credit Cards, Mudra &amp; Micro Retail (&rupee;25K&ndash;&rupee;3L)
                        </td>
                        <td className="p-3.5">90+ DPD / NACH Bounce</td>
                        <td className="p-3.5">PSS Act s.25, NI Act s.138, LSA Act s.20(2), Neutral ODR</td>
                        <td className="p-3.5 font-semibold text-emerald-700">30d Notice from Bounce; 15d Cure</td>
                        <td className="p-3.5">National Lok Adalat / Magistrate / ODR</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Sub-&rupee;20L Unsecured, Auto &amp; Education (&rupee;3L&ndash;&rupee;19.99L)
                        </td>
                        <td className="p-3.5">90+ DPD / Loan Recall</td>
                        <td className="p-3.5">Commercial Courts s.12A, Order XXXVII CPC, MV Act s.51(5)</td>
                        <td className="p-3.5">15d Recall + Police Intimation (Vehicles)</td>
                        <td className="p-3.5">Commercial Court / Civil Court / ODR</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Secured Mortgages &amp; LAP (&ge; &rupee;1L, &gt;20% Due)
                        </td>
                        <td className="p-3.5">NPA &gt; 90 DPD</td>
                        <td className="p-3.5">SARFAESI Act s.13(2), s.13(3A), s.13(4) &amp; s.14</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">60d Demand; 15d s.13(3A) Reply</td>
                        <td className="p-3.5">DM / CMM Possession (30&ndash;60d) &amp; e-Auction</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Corporate CC/OD, Term Loans &amp; Guarantees (&ge; &rupee;20L)
                        </td>
                        <td className="p-3.5">Out-of-Order / NPA / OTS Breach</td>
                        <td className="p-3.5">RDB Act s.19 e-DRT, Contract Act s.128 &amp; IBC s.95 Form B</td>
                        <td className="p-3.5">15d Recall + 14d Form B Demand</td>
                        <td className="p-3.5">DRT / NCLT Part III (Personal Guarantors)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Cooperative Banks, Credit Societies &amp; KCC / Agri
                        </td>
                        <td className="p-3.5">90+ DPD / Surety Default</td>
                        <td className="p-3.5">MSCS Act s.84, SARFAESI (Chaugule), State RRC Acts</td>
                        <td className="p-3.5">15&ndash;30d Borrower + 2-Surety Notice</td>
                        <td className="p-3.5">Registrar Arbitration / SARFAESI / State RRC</td>
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
                      Pan-India Bank Recovery Architecture: SMA-1 to Decree Execution
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      End-to-End Statutory Pipeline Integrating CBS Data Ingestion, Tri-Channel Service, Forum Routing &amp; Execution
                    </p>
                  </div>
                </div>

                {/* Desktop Hand-Authored SVG Diagram */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={300}
                    viewBox="0 0 920 300"
                    role="img"
                    aria-label="5-stage bank loan and NPA legal recovery workflow diagram from SMA-2 to decree execution"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="300" rx="12" fill="#0F172A" />
                    <text x="24" y="34" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1.2">
                      LEGALRECOVERY.IN • IND-01 BANKING ESCALATION ARCHITECTURE
                    </text>

                    {/* Stage 1 */}
                    <rect x="24" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="48" cy="84" r="13" fill="#DC2626" />
                    <text x="48" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                    <text x="70" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">CBS Ingestion</text>
                    <text x="36" y="116" fill="#CBD5E1" fontSize="10.5">SMA-1 / SMA-2 / NPA</text>
                    <text x="36" y="134" fill="#CBD5E1" fontSize="10.5">CSV / Representee</text>
                    <text x="36" y="152" fill="#CBD5E1" fontSize="10.5">Ticket &amp; Security Tag</text>
                    <rect x="36" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="44" y="196" fill="#34D399" fontSize="10" fontWeight="700">RBI Penal Hygiene</text>
                    <text x="44" y="213" fill="#94A3B8" fontSize="9.5">Uncapitalized schedule</text>

                    <path d="M180 152 L202 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="202,147 212,152 202,157" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="212" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="236" cy="84" r="13" fill="#DC2626" />
                    <text x="236" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                    <text x="258" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Tri-Channel</text>
                    <text x="224" y="116" fill="#CBD5E1" fontSize="10.5">Zoho Verified Email</text>
                    <text x="224" y="134" fill="#CBD5E1" fontSize="10.5">WATI Blue-Tick WA</text>
                    <text x="224" y="152" fill="#CBD5E1" fontSize="10.5">India Post Speed Post</text>
                    <rect x="224" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="232" y="196" fill="#FBBF24" fontSize="10" fontWeight="700">BSA s.63 Certificate</text>
                    <text x="232" y="213" fill="#94A3B8" fontSize="9.5">SHA-256 &amp; RPAD Log</text>

                    <path d="M368 152 L390 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,147 400,152 390,157" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="424" cy="84" r="13" fill="#DC2626" />
                    <text x="424" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                    <text x="446" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Triage &amp; Cure</text>
                    <text x="412" y="116" fill="#CBD5E1" fontSize="10.5">Inbound Reply Triage</text>
                    <text x="412" y="134" fill="#CBD5E1" fontSize="10.5">15d s.13(3A) Disposal</text>
                    <text x="412" y="152" fill="#CBD5E1" fontSize="10.5">Pre-OTS Slab Match</text>
                    <rect x="412" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="420" y="196" fill="#34D399" fontSize="10" fontWeight="700">OTS Default Guard</text>
                    <text x="420" y="213" fill="#94A3B8" fontSize="9.5">Arvindra Electronics</text>

                    <path d="M556 152 L578 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="578,147 588,152 578,157" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="588" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="612" cy="84" r="13" fill="#DC2626" />
                    <text x="612" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                    <text x="634" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum Action</text>
                    <text x="600" y="116" fill="#CBD5E1" fontSize="10.5">&ge;₹20L: e-DRT / IBC s.95</text>
                    <text x="600" y="134" fill="#CBD5E1" fontSize="10.5">Secured: SARFAESI s.14</text>
                    <text x="600" y="152" fill="#CBD5E1" fontSize="10.5">&lt;₹20L: O.37 / s.25 / ODR</text>
                    <rect x="600" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="608" y="196" fill="#FBBF24" fontSize="10" fontWeight="700">Co-op &amp; Lok Adalat</text>
                    <text x="608" y="213" fill="#94A3B8" fontSize="9.5">MSCS s.84 / LSA s.21</text>

                    <path d="M744 152 L766 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="766,147 776,152 766,157" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="776" y="58" width="120" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="800" cy="84" r="13" fill="#10B981" />
                    <text x="800" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                    <text x="820" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Decree</text>
                    <text x="788" y="116" fill="#CBD5E1" fontSize="10.5">DM Possession</text>
                    <text x="788" y="134" fill="#CBD5E1" fontSize="10.5">e-Auction / RC</text>
                    <text x="788" y="152" fill="#CBD5E1" fontSize="10.5">CPC O.21 Attach</text>
                    <rect x="788" y="176" width="96" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="794" y="196" fill="#34D399" fontSize="10" fontWeight="700">Cash Realized</text>
                    <text x="794" y="213" fill="#94A3B8" fontSize="9.5">CGTMSE / RRC</text>

                    <text x="24" y="280" fill="#94A3B8" fontSize="10">
                      All stages maintain Bar Council conduct compliance, DPDP 2023 borrower privacy, and Bankers&apos; Books Evidence Act certification.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      num: "01",
                      title: "CBS Data Ingestion & Statutory Tagging",
                      desc: "Segment SMA-1/2 and NPA buckets with RBI-compliant uncapitalized penal charges.",
                    },
                    {
                      num: "02",
                      title: "Tri-Channel Dispatch & BSA s.63 Seal",
                      desc: "Simultaneous Zoho Email, WATI WhatsApp, and Speed Post RPAD delivery manifests.",
                    },
                    {
                      num: "03",
                      title: "Inbound Reply Triage & s.13(3A) Disposal",
                      desc: "Track OTS requests, part-payments, and 15-day SARFAESI Section 13(3A) replies.",
                    },
                    {
                      num: "04",
                      title: "Track-Specific Adjudication Routing",
                      desc: "Escalate to SARFAESI s.14, e-DRT OA (>=₹20L), Order 37, PSS s.25, MSCS s.84, or Lok Adalat.",
                    },
                    {
                      num: "05",
                      title: "Decree Execution & Recovery",
                      desc: "Enforce CPC Order 21 execution, complete collateral e-auctions, or claim CGTMSE/RRC.",
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
                        Interactive Bank Recovery Playbooks by Portfolio Segment
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Explore Statutory Triggers, Bottlenecks, and 3-Step Execution Rails Across Four Banking Verticals
                      </p>
                    </div>
                  </div>
                  <BanksHubScenarioTabs />
                </div>
              </section>

              {/* Section 5: LegalRecovery Institutional Infrastructure & Dual-Track CTA */}
              <section
                id="heading-bulk-infrastructure"
                aria-labelledby="heading-bulk-infrastructure-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="heading-bulk-infrastructure-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      How LegalRecovery Powers Zonal &amp; Branch Bulk Notice Operations
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Production Banking Plumbing: Multi-Entity Representees, Loan-Recovery Schema, Tri-Channel Dispatch &amp; Inbound Triage
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Multi-Entity Representees Workspace
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Zonal Offices, SARBs &amp; Co-op Branches
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Segregate Authorized Officers, letterheads, and branch dockets via{" "}
                      <Link href="/user/representees" className="text-[#DC2626] font-semibold underline">
                        Representees management
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Loan-Recovery Data Schema
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      As-On-Date Balances &amp; 4-Step Escalation
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Track disbursement date, outstanding principal, and separate uncapitalized penal charges from Demand to Recall.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Tri-Channel Dispatch
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Email + WhatsApp + Speed Post RPAD
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Cut dispatch TAT to under 24 hours with barcode tracking and BSA s.63 certificates proving valid service.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      4. Inbound Reply Triage
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      OTS Proposals &amp; s.13(3A) Objections
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Centralize borrower emails and WhatsApp replies so branches never miss 15-day statutory s.13(3A) deadlines.
                    </p>
                  </div>
                </div>

                <div id="heading-cta-block" className="scroll-mt-28 pt-2">
                  <BanksHubCTA />
                </div>
              </section>

              {/* Section 6: Landmark Supreme Court Mandates */}
              <section
                id="heading-supreme-court-mandates"
                aria-labelledby="heading-supreme-court-mandates-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="heading-supreme-court-mandates-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Landmark Supreme Court Mandates Governing Bank Legal Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Binding Constitution Bench &amp; Apex Precedents Built Into Every Bank Notice Workflow
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {APEX_MANDATES.map((item) => (
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

              {/* Section 7: Sub-₹20L DRT Gap & Provisioning Economics */}
              <section
                id="heading-sub20l-economics"
                aria-labelledby="heading-sub20l-economics-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="heading-sub20l-economics-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Sub-&rupee;20 Lakh DRT Gap &amp; Provisioning Economics: Worked Bank Example
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Illustrative Modeling for a Regional Bank&apos;s SMA-2 &amp; Sub-&rupee;20 Lakh Retail/Mudra Portfolio
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider a regional bank holding 200 stressed retail accounts averaging ₹6.50 Lakh (₹13.00 Crore exposure) at 62–110 DPD. Because every account sits below the ₹20 Lakh RDB Act DRT floor, waiting for Civil Court suits erodes recovery.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Delayed Civil Suit Baseline
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Day-90 stamping freezes NPA status until 100% arrears clear.</li>
                      <li>Ad-valorem court fees delay small-ticket branch litigation.</li>
                      <li>Ordinary post lacks BSA s.63 electronic service timestamps.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Multi-Track Pre-Litigation Protocol
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Day-62 SMA-2 cure notices resolve delinquency pre-NPA.</li>
                      <li>Bounced e-NACH triggers 30-day PSS s.25 criminal notices.</li>
                      <li>21-day Lok Adalat + Commercial s.12A dockets win decrees.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Need Exact DRT Rule 7 Fee &amp; SARFAESI Eligibility Math?</strong>
                    <span className="text-slate-300">
                      Compute DRT filing slabs (₹12,000 + ₹1,000/lakh capped at ₹1.5L) and SARFAESI s.31 cutoffs instantly.
                    </span>
                  </div>
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="px-4 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shrink-0 text-center transition-colors"
                  >
                    Launch Bank Forum Calculator &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 8: Full 17-Spoke Downward Directory */}
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
                      Complete Banking Recovery Directory: 17 Specialized Spokes &amp; Tools
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Complete IND-01 Hub-and-Spoke Map Covering B2B-002 Through B2B-018 Across Statutes, Playbooks, Tools &amp; Templates
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

              {/* Section 9: Live Seed Assets & Existing Banking Guides */}
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
                      Live Institutional Banking Guides &amp; Bulk Solutions on LegalRecovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Core Live Seed Assets &amp; Operational Banking Playbooks Ready to Explore Now
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
                      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                      tag: "CSV Batch Desk",
                      desc: "Batch onboarding for banks dispatching 10 to 10,000+ statutory notices.",
                    },
                    {
                      title: "Legal Notice for Banks to Recover Unpaid Dues",
                      href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues",
                      tag: "IND-01 Seed Asset",
                      desc: "Bank legal notice drafting covering loan recall and security cheques.",
                    },
                    {
                      title: "Bulk Recovery Notice via Email, WhatsApp & Speed Post",
                      href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
                      tag: "Tri-Channel Engine",
                      desc: "Simultaneous Email, WhatsApp, and Speed Post RPAD batch dispatch proofs.",
                    },
                    {
                      title: "Pre-Litigation Lok Adalat for Money Recovery",
                      href: "/law/lok-adalat-pre-litigation-money-recovery",
                      tag: "LSA Act s.19–21",
                      desc: "Zero-court-fee DLSA conciliation yielding executable Civil Court decrees.",
                    },
                    {
                      title: "Arbitration for Personal Loan Defaults: Bank Mechanism",
                      href: "/arbitration-personal-loan-defaults-bank-recovery-mechanism",
                      tag: "Perkins & s.36 Decree",
                      desc: "Neutral institutional arbitration and Order 21 execution for retail loans.",
                    },
                    {
                      title: "Third-Party Legal Recovery for Financial Institutions",
                      href: "/third-party-legal-recovery-services-financial-institutions",
                      tag: "RBI & DPDP",
                      desc: "Replacing field agencies with Bar Council-regulated advocate teams.",
                    },
                    {
                      title: "Outsourced Legal Teams for Banking Debt Recovery",
                      href: "/outsourced-legal-teams-banking-debt-recovery",
                      tag: "Virtual Legal Cell",
                      desc: "Scaling multi-state court filings and diary TATs on retail NPAs.",
                    },
                    {
                      title: "How Banks Recover Long-Pending Outstanding Loans",
                      href: "/how-banks-recover-long-pending-outstanding-loan-amounts",
                      tag: "Limitation Revival",
                      desc: "Using Section 18 acknowledgments and part-payments on aged NPAs.",
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
                      FAQs: Institutional Bank Loan &amp; NPA Legal Recovery in India
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Answers for Bank Heads of Legal, Authorized Officers, CROs &amp; Cooperative Bank MDs
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
                      Statutory Authorities, RBI Directions &amp; Official Portals
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Legislative Acts, Regulatory Circulars &amp; Judicial Authorities Referenced
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
