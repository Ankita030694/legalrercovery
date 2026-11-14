import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MfiTableOfContents from "./MfiTableOfContents";
import MfiScenarioTabs from "./MfiScenarioTabs";
import MfiRecoveryCTA from "./MfiRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/microfinance-mfi-jlg-group-loan-default-compliant-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "NBFC-MFI & Microfinance Delinquency Recovery (RBI Safe)";
const PAGE_DESCRIPTION =
  "With MFI PAR-90 rising under strict RBI & MFIN rules, learn where legal notices work: ₹75K–₹3L graduated MSME loans, Lok Adalat & ring-leader defaults.";
const H1_TEXT =
  "Navigating Rural & Semi-Urban MFI Delinquency Spikes: RBI-Compliant Legal Notices for High-Ticket Graduated Loans & Ring-Leader Defaults";

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

const FAQS = [
  {
    question:
      "Can an NBFC-MFI use aggressive centre-meeting pressure to recover ₹20,000 JLG group loans?",
    answer:
      "No. Under the RBI Master Direction (Regulatory Framework for Microfinance Loans, 2022) and MFIN / Sa-Dhan Codes of Conduct, field officers are strictly barred from coercive centre-meeting sit-ins, public shaming, or pressuring compliant women members to pay a defaulter's instalment. Violating these norms risks RBI lending bans and supervisory restrictions. Small ₹15,000–₹40,000 JLG loans must rely on non-coercive field counseling and restructuring, while formal legal notices are reserved for graduated ₹75,000–₹3,00,000 loans and wilful ring-leaders.",
  },
  {
    question:
      "Why are vernacular Speed Post RPAD legal notices effective for ₹75,000–₹3,00,000 graduated MFI loans?",
    answer:
      "Graduated Individual Retail and Micro-Enterprise borrowers (kirana stores, dairy units, tailoring shops, e-rickshaws) hold active business cashflows and asset stakes. A formal Advocate Legal Notice drafted in the borrower's local vernacular alongside English—and delivered via India Post Speed Post RPAD plus WhatsApp—signals serious institutional escalation without violating RBI's ban on harsh field recovery, prompting high voluntary cure or Lok Adalat settlement.",
  },
  {
    question:
      "How should an MFI legally handle a ring-leader who instigates a mass village or centre default?",
    answer:
      "Instead of confronting the entire centre in person, the MFI should segregate the 1–3 instigators from genuine distressed borrowers. Serve individualized Advocate Legal Notices via Speed Post RPAD on the ring-leaders, initiate Section 25 PSS Act or Section 138 NI Act proceedings where e-NACH/cheques bounced, or file targeted BNS Section 318 complaints if cash collected from centre members was misappropriated—while offering penalty-waiver Lok Adalat settlement to misled borrowers.",
  },
  {
    question:
      "Are JLG co-borrower guarantees legally enforceable in court against other rural women members?",
    answer:
      "While Joint Liability Group (JLG) loan agreements typically include joint-and-several undertaking language, in practice JLG operates primarily as a social-collateral and moral-suasion mechanism. Attempting to litigate or seize household assets of 4 compliant rural women for 1 absconding member's ₹25,000 loan is economically unviable and triggers severe RBI/MFIN regulatory backlash.",
  },
  {
    question:
      "How does National Lok Adalat help NBFC-MFIs resolve PAR-90 micro-enterprise defaults at scale?",
    answer:
      "Under Sections 19, 20, and 21 of the Legal Services Authorities Act, 1987, pre-litigation Lok Adalat references allow NBFC-MFIs to batch hundreds of ₹75,000–₹3,00,000 graduated loans into a single taluka or district Lok Adalat sitting with zero court fee. Any settlement signed before the Lok Adalat bench becomes a binding civil decree with no right of appeal.",
  },
  {
    question:
      "What RBI household income and FOIR audit records must an MFI verify before issuing a legal notice?",
    answer:
      "Before escalating any microfinance account, legal and risk teams must verify the origination Household Income Assessment sheet (confirming <= ₹3,00,000 annual household income eligibility), the 50% Fixed Obligation to Income Ratio (FOIR) compliance check, the vernacular Key Fact Statement (KFS) / Loan Card, and uncompounded penal charge calculations.",
  },
  {
    question:
      "Can an NBFC-MFI send bulk legal notices for 500+ graduated MSME accounts without violating DPDP Act 2023?",
    answer:
      "Yes. When an enrolled law firm acts as the MFI's authorized legal counsel under a Board Resolution and Representee Mandate, dispatching statutory demand notices solely to KYC-verified borrower addresses, registered mobile numbers, and emails is a lawful contractual enforcement step—completely distinct from illegal contact-list scraping or third-party shaming.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "Reserve Bank of India (RBI) Master Direction — Regulatory Framework for Microfinance Loans Directions, 2022",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12256",
  },
  {
    title:
      "The Legal Services Authorities Act, 1987 (Sections 19, 20 & 21 — Pre-Litigation Lok Adalat & Binding Award)",
    url: "https://www.indiacode.nic.in/handle/123456789/1912",
  },
  {
    title:
      "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH)",
    url: "https://www.indiacode.nic.in/handle/123456789/2062",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records & SHA-256 Dispatch Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "National Legal Services Authority (NALSA) — National Lok Adalat Institutional Guidelines",
    url: "https://nalsa.gov.in/lok-adalat",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-14T09:00:00+05:30",
  dateModified: "2026-11-14T09:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
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
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How NBFC-MFIs Execute Compliant Legal Recovery for Graduated Loans & Ring-Leader Defaults",
  description:
    "5-step operational SOP for NBFC-MFI Chief Operations Officers and Risk Heads to segregate JLG counseling from selective vernacular Speed Post RPAD + Lok Adalat legal notices.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Segregate ₹15K–₹40K JLG Books from ₹75K–₹3L Graduated MSME Loans",
      text: "Keep small JLG group loans on non-coercive field counseling while routing ₹75,000–₹3,00,000 Individual Retail / Micro-Enterprise PAR-90 accounts and ring-leaders to legal escalation.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Audit Origination Household Income, 50% FOIR & Uncompounded Charges",
      text: "Verify the borrower's signed household income assessment, 50% FOIR compliance sheet, vernacular KFS, and uncompounded penal charge schedule before notice generation.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Generate Bilingual Vernacular + English Advocate Demand Notices",
      text: "Draft formal Advocate Demand Notices in the state vernacular and English citing exact principal, overdue EMIs, and e-NACH / PSS s.25 triggers where applicable.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Dispatch via India Post Speed Post RPAD, WhatsApp & Email",
      text: "Serve notices exclusively to KYC-verified borrower addresses and registered phone numbers, preserving BSA 2023 s.63 cryptographic delivery logs.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Convert Non-Responders via Pre-Litigation National Lok Adalat & ODR",
      text: "Batch unresolved ₹75K–₹3L accounts into taluka/district National Lok Adalat sittings under Section 20 of the Legal Services Authorities Act, 1987 for binding Section 21 settlement decrees.",
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
      name: "NBFC & Fintech Recovery Hub",
      item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MFI & JLG Compliant Recovery Guide",
      item: CANONICAL_URL,
    },
  ],
};

export default function MfiJlgCompliantRecoveryPage() {
  return (
    <>
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-02 &bull; NBFC-MFI &amp; Microfinance Risk Playbook</span>
              <span>&bull;</span>
              <span>RBI &amp; MFIN / Sa-Dhan Compliant</span>
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 word Executive Creditor Answer with inline Parent Hub link */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              NBFC-MFIs cannot deploy aggressive centre-meeting pressure without risking RBI lending
              restrictions. Within our{" "}
              <Link
                href="/industries/nbfc-fintech-loan-recovery"
                className="text-red-300 underline hover:text-white font-bold"
              >
                NBFC &amp; Fintech Loan Recovery Hub
              </Link>
              , small ₹20,000 JLG loans remain on field counseling while ₹75,000–₹3,00,000 graduated
              MSME loans and wilful ring-leaders escalate via vernacular Speed Post RPAD notices and
              National Lok Adalat.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">₹75K – ₹3L</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Viable Graduated MSME Legal Tier
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">Lok Adalat</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Zero Court Fee Binding s.21 Award
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">50% FOIR</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  RBI Household Income Cap Audit
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">Zero Coercion</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  MFIN &amp; Sa-Dhan Safe Notices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs
            items={[
              {
                label: "NBFC & Fintech Recovery Hub",
                href: "/industries/nbfc-fintech-loan-recovery",
              },
              {
                label: "MFI & JLG Compliant Recovery Guide",
                href: PAGE_URL,
              },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
            {/* Left Sticky Sidebar TOC */}
            <MfiTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Why MFI PAR-90 Spikes Demand Selective Legal Escalation
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  India&apos;s microfinance sector is navigating a dual-front operational crisis.
                  Over-leveraging in rural and semi-urban districts, erratic agricultural cashflows,
                  and localized &ldquo;loan waiver&rdquo; rumours triggered by external ring-leaders
                  have pushed Portfolio at Risk beyond 90 days (PAR-90) sharply upward across
                  several states. Simultaneously, the Reserve Bank of India (RBI) has demonstrated
                  zero tolerance for aggressive field recovery, imposing business and lending
                  restrictions on NBFC-MFIs whose field staff or agents breach fair-practice
                  boundaries.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Traditional Joint Liability Group (JLG) collections relied on weekly or monthly
                  centre meetings, peer pressure, and branch officer visits. Under the{" "}
                  <strong>
                    RBI Master Direction — Regulatory Framework for Microfinance Loans (2022)
                  </strong>{" "}
                  and the harmonized <strong>MFIN / Sa-Dhan Codes of Conduct</strong>, coercive
                  centre-meeting sit-ins, public shaming, late-evening visits, and pressuring
                  compliant group members to pay a defaulter&apos;s EMI are strict supervisory red
                  lines.
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-xl p-5 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                    The Structural Shift in MFI Loan Books
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                    While ₹15,000–₹40,000 JLG group loans cannot absorb formal litigation costs,
                    most mid-to-large NBFC-MFIs now carry substantial{" "}
                    <strong>₹75,000–₹3,00,000 Individual Retail &amp; Micro-Enterprise books</strong>{" "}
                    (graduated borrowers running kirana stores, dairy units, looms, and
                    transport services). On these higher-ticket books—and against organized
                    ring-leaders—<strong>vernacular Speed Post RPAD Advocate Notices</strong>{" "}
                    paired with <strong>National Lok Adalat</strong> referrals deliver clean,
                    audit-proof recovery.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For broader NBFC telecalling rules and 8 AM–7 PM restrictions, see our companion
                  guide on{" "}
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    RBI Recovery Agent Directions &amp; Legal Escalation for NBFCs
                  </Link>
                  .
                </p>
              </section>

              {/* Section 2: Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    MFI Escalation Tree: JLG vs. Graduated MSME vs. Ring-Leaders
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  NBFC-MFI Chief Operations Officers and Risk Heads must never apply a single
                  blanket legal workflow across the entire PAR-90 book. Use the three-track triage
                  architecture below to separate low-ticket JLG counseling from formal legal
                  notices:
                </p>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4">
                  <svg
                    viewBox="0 0 820 310"
                    width={820}
                    height={310}
                    className="w-full h-auto"
                    role="img"
                    aria-label="MFI Delinquency Escalation Decision Tree comparing JLG, Graduated MSME, and Ring-Leader tracks"
                  >
                    <rect x="0" y="0" width="820" height="310" rx="12" fill="#0F172A" />

                    {/* Root Node */}
                    <rect
                      x="250"
                      y="18"
                      width="320"
                      height="52"
                      rx="10"
                      fill="#1E293B"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <text
                      x="410"
                      y="40"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="13"
                      fontWeight="bold"
                    >
                      MFI Account Crosses 60–90+ DPD
                    </text>
                    <text x="410" y="58" textAnchor="middle" fill="#94A3B8" fontSize="11">
                      Triage by Ticket Size, Product &amp; Wilful Behaviour
                    </text>

                    {/* Connector Lines */}
                    <path
                      d="M410 70 L410 95 M140 95 L680 95 M140 95 L140 120 M410 95 L410 120 M680 95 L680 120"
                      stroke="#475569"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Track 1: JLG */}
                    <rect
                      x="25"
                      y="120"
                      width="230"
                      height="168"
                      rx="10"
                      fill="#1E293B"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                    <text
                      x="140"
                      y="144"
                      textAnchor="middle"
                      fill="#FBBF24"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      TRACK A: ₹15K–₹40K JLG
                    </text>
                    <text x="140" y="166" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                      Genuine Rural Distress
                    </text>
                    <line x1="45" y1="178" x2="235" y2="178" stroke="#334155" strokeWidth="1" />
                    <text x="140" y="198" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      1. Non-coercive field counseling
                    </text>
                    <text x="140" y="216" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      2. Tenure restructuring / moratorium
                    </text>
                    <text x="140" y="234" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      3. Zero group shaming or sit-ins
                    </text>
                    <rect x="45" y="250" width="190" height="24" rx="6" fill="#78350F" />
                    <text
                      x="140"
                      y="266"
                      textAnchor="middle"
                      fill="#FEF3C7"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      Litigation Unviable &bull; RBI Safe
                    </text>

                    {/* Track 2: Graduated MSME */}
                    <rect
                      x="295"
                      y="120"
                      width="230"
                      height="168"
                      rx="10"
                      fill="#1E293B"
                      stroke="#10B981"
                      strokeWidth="2"
                    />
                    <text
                      x="410"
                      y="144"
                      textAnchor="middle"
                      fill="#34D399"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      TRACK B: ₹75K–₹3L GRADUATED
                    </text>
                    <text x="410" y="166" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                      Individual / Micro-Enterprise
                    </text>
                    <line x1="315" y1="178" x2="505" y2="178" stroke="#334155" strokeWidth="1" />
                    <text x="410" y="198" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      1. Vernacular Speed Post RPAD
                    </text>
                    <text x="410" y="216" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      2. PSS s.25 / NI s.138 (if bounced)
                    </text>
                    <text x="410" y="234" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      3. National Lok Adalat s.21 Decree
                    </text>
                    <rect x="315" y="250" width="190" height="24" rx="6" fill="#064E3B" />
                    <text
                      x="410"
                      y="266"
                      textAnchor="middle"
                      fill="#A7F3D0"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      High Net Recovery &bull; Low Cost
                    </text>

                    {/* Track 3: Ring-Leaders */}
                    <rect
                      x="565"
                      y="120"
                      width="230"
                      height="168"
                      rx="10"
                      fill="#1E293B"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <text
                      x="680"
                      y="144"
                      textAnchor="middle"
                      fill="#F87171"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      TRACK C: RING-LEADERS
                    </text>
                    <text x="680" y="166" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                      Wilful Boycott / Cash Misuse
                    </text>
                    <line x1="585" y1="178" x2="775" y2="178" stroke="#334155" strokeWidth="1" />
                    <text x="680" y="198" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      1. Isolate 1–3 instigators in LMS
                    </text>
                    <text x="680" y="216" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      2. Targeted Advocate RPAD Notice
                    </text>
                    <text x="680" y="234" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      3. BNS s.318 / PSS s.25 Deterrence
                    </text>
                    <rect x="585" y="250" width="190" height="24" rx="6" fill="#7F1D1D" />
                    <text
                      x="680"
                      y="266"
                      textAnchor="middle"
                      fill="#FECACA"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      Breaks Contagion &bull; Zero Mass Friction
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <p className="text-xs font-extrabold uppercase text-amber-800">
                      Track A: ₹15K–₹40K JLG Group Loan
                    </p>
                    <p className="text-xs text-slate-700 mt-1">
                      Use non-coercive field counseling &amp; restructuring. Avoid litigation or
                      group shaming.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-xs font-extrabold uppercase text-emerald-800">
                      Track B: ₹75K–₹3L Graduated MSME Loan
                    </p>
                    <p className="text-xs text-slate-700 mt-1">
                      Serve bilingual vernacular Speed Post RPAD Advocate Notice + National Lok
                      Adalat s.21 decree.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-xs font-extrabold uppercase text-[#DC2626]">
                      Track C: Ring-Leader Mass Default
                    </p>
                    <p className="text-xs text-slate-700 mt-1">
                      Isolate 1–3 instigators, serve targeted RPAD notices, and escalate via PSS
                      s.25 / BNS s.318.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory & MFIN Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Statutory &amp; MFIN Compliance Matrix by MFI Loan Segment
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every microfinance recovery action must pass two filters: statutory enforceability
                  and RBI/SRO supervisory safety. The matrix below maps each MFI loan segment to its
                  lawful enforcement rail:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">MFI Portfolio Segment</th>
                        <th className="p-3.5 font-bold">Primary Statutory Rail</th>
                        <th className="p-3.5 font-bold">RBI &amp; MFIN Boundary</th>
                        <th className="p-3.5 font-bold">Recommended Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          ₹15K–₹40K JLG Group Loan (Distressed)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          RBI Microfinance Master Direction (Restructuring / Moratorium)
                        </td>
                        <td className="p-3.5 text-amber-800 font-medium">
                          Strict ban on centre sit-ins, shaming, or forcing co-members to pay
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Empathetic field counseling + tenure extension; no court filing
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          ₹75K–₹3L Graduated Micro-Enterprise Loan
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Contract Act Recall + Legal Services Authorities Act s.20 (Lok Adalat)
                        </td>
                        <td className="p-3.5 text-emerald-800 font-medium">
                          Must serve vernacular KFS/notice &amp; uncompounded penal charges
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Vernacular Speed Post RPAD + WhatsApp notice &rarr; Lok Adalat batch
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          e-NACH / UPI AutoPay Mandate Bounce
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Section 25 PSS Act, 2007 (criminal parity with NI Act s.138)
                        </td>
                        <td className="p-3.5 text-emerald-800 font-medium">
                          30-day statutory notice deadline from NPCI return memo
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Serve 15-day Advocate Demand Notice via Email + RPAD within 30 days
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Ring-Leader Instigated Mass Default
                        </td>
                        <td className="p-3.5 text-slate-700">
                          BNS 2023 s.318 (Cheating) / PSS s.25 / Civil Recovery
                        </td>
                        <td className="p-3.5 text-red-700 font-medium">
                          Target only documented instigators; never harass entire village
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Individualized RPAD notices to instigators + ODR settlement for members
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Interactive Playbook: 4 MFI Default &amp; Compliance Scenarios
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select an operational failure mode below to inspect the exact RBI/MFIN regulatory
                  boundary and the step-by-step legal remediation protocol:
                </p>
                <MfiScenarioTabs />
              </section>

              {/* Section 5: 5-Step SOP */}
              <section
                id="heading-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    5-Step SOP: Vernacular Speed Post RPAD &amp; Lok Adalat Escalation
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When deploying legal notices across semi-urban and rural districts, English-only
                  PDFs sent solely by email fail both practically and legally—many micro-enterprise
                  borrowers either do not monitor email or later claim they could not read the
                  demand. Follow this five-step institutional SOP:
                </p>

                <ol className="space-y-4">
                  {[
                    {
                      title: "Step 1 — Cohort Filtering in Your Loan Management System (LMS)",
                      desc: "Filter PAR-60 and PAR-90 accounts by ticket size (>= ₹50,000 / ₹75,000–₹3,00,000 Graduated MSME) and flag any documented ring-leader accounts. Exclude genuinely distressed ₹15,000–₹40,000 JLG accounts earmarked for field restructuring.",
                    },
                    {
                      title: "Step 2 — Pre-Notice RBI Compliance & FOIR Gatecheck",
                      desc: "Confirm the origination Household Income & 50% FOIR sheet is on file, strip any compounded penal interest, and compute simple uncompounded penal charges strictly per RBI Penal Charges guidelines.",
                    },
                    {
                      title: "Step 3 — Bilingual Vernacular + English Advocate Notice Drafting",
                      desc: "Generate the demand notice on an enrolled Advocate's letterhead in both English and the borrower's regional language (e.g., Hindi, Marathi, Tamil, Telugu, Kannada, Bengali, Odia), clearly stating the 15-day cure window and pre-litigation Lok Adalat option.",
                    },
                    {
                      title: "Step 4 — Tri-Channel Dispatch (India Post Speed Post RPAD + WhatsApp + Email)",
                      desc: "Physical Speed Post RPAD to the borrower's KYC address carries high evidentiary weight in rural/semi-urban districts, while WhatsApp PDF delivery accelerates immediate branch-level settlement.",
                    },
                    {
                      title: "Step 5 — Pre-Litigation National Lok Adalat & ODR Closure",
                      desc: "For non-responders after 15 days, batch the accounts into the next District Legal Services Authority (DLSA) National Lok Adalat or Online Dispute Resolution (ODR) desk to obtain a zero-court-fee binding Section 21 settlement award.",
                    },
                  ].map((step, i) => (
                    <li
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5"
                    >
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="text-xs sm:text-sm text-slate-600 pt-2">
                  Need to automate tri-channel Speed Post RPAD + WhatsApp + Email across branches?
                  Explore our{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Bulk Recovery Notice Automation Solution
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Online Dispute Resolution (ODR) Desk
                  </Link>
                  .
                </p>
              </section>

              {/* Section 6: Worked Financial Ledger */}
              <section
                id="heading-financial-model"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Worked Cohort Ledger: 500 PAR-90 MFI Accounts
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consider a regional NBFC-MFI managing <strong>500 PAR-90 accounts</strong> across
                  two distinct books: <strong>350 JLG loans</strong> (avg. overdue ₹22,000) and{" "}
                  <strong>150 Graduated Micro-Enterprise loans</strong> (avg. overdue ₹1,45,000).
                  Compare indiscriminate litigation versus selective legal escalation:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-red-200 bg-red-50/60 p-5 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Flawed Approach: Blanket Field Pressure / Civil Suits
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Filing civil suits on 350 × ₹22K JLG loans costs more than recovery</li>
                      <li>Aggressive centre visits trigger RBI Ombudsman &amp; SRO penalties</li>
                      <li>Uniform field friction alienates paying centre members</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Selective Legal Approach: Triage + Lok Adalat
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>
                        <strong>350 JLG Accounts (₹77L book):</strong> Soft counseling &amp;
                        restructuring — zero legal spend, zero RBI coercion risk
                      </li>
                      <li>
                        <strong>150 Graduated MSME (₹2.175 Cr book):</strong> Vernacular Speed Post
                        RPAD + National Lok Adalat s.21 awards (zero court fee)
                      </li>
                      <li>
                        <strong>Ring-Leaders (subset):</strong> Targeted PSS s.25 / BNS s.318
                        notices restore centre discipline
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  For unit-economics modeling on sub-₹1 Lakh digital loans, compare with our{" "}
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Small-Ticket Digital Loan &amp; BNPL Recovery Economics Playbook
                  </Link>{" "}
                  or check forum fee thresholds with the{" "}
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Recovery Forum &amp; Fee Calculator
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: Evidence & BSA 2023 s.63 Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    RBI Microfinance Audit &amp; BSA 2023 s.63 Evidence Checklist
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "1. Household Income & 50% FOIR Fact Sheet",
                      desc: "Signed origination income assessment confirming household income <= ₹3L (for qualifying microfinance) and <= 50% total debt-servicing FOIR.",
                    },
                    {
                      title: "2. Vernacular Key Fact Statement (KFS) & Loan Card",
                      desc: "Proof that the borrower received a standardized Loan Card / KFS in a language understood by them showing APR and uncompounded charges.",
                    },
                    {
                      title: "3. Non-Coercive Field & MFIN Compliance Logs",
                      desc: "Timestamped field visit logs confirming zero after-hours visits, zero centre-meeting sit-ins, and zero third-party shaming.",
                    },
                    {
                      title: "4. India Post Speed Post RPAD Tracking & Pod",
                      desc: "Physical RPAD dispatch receipts and delivery/refusal endorsements to establish statutory service in semi-urban and rural talukas.",
                    },
                    {
                      title: "5. BSA 2023 Section 63 Electronic Hash Logs",
                      desc: "SHA-256 cryptographic timestamps certifying WhatsApp/Email notice generation, e-NACH NPCI return memos, and ledger extracts.",
                    },
                    {
                      title: "6. Ring-Leader Instigation & Lok Adalat Mandate",
                      desc: "Written branch incident reports for ring-leader boycotts plus Board Resolution / Authorised Signatory POA for Lok Adalat settlements.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                          {item.title}
                        </strong>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: FAQs */}
              <section id="heading-faqs" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    FAQs: MFI, JLG &amp; Graduated Loan Legal Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Grounded in RBI Microfinance Master Directions, MFIN Code &amp; Lok Adalat Law
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 9: Primary Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Official RBI Directions, Statutes &amp; Primary Authorities
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
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

              {/* Dual-Track B2B CTA */}
              <section id="heading-cta-block" className="w-full">
                <h2 className="sr-only">Deploy MFI Legal Recovery</h2>
                <MfiRecoveryCTA />
              </section>

              {/* Related Internal Links */}
              <div className="pt-4 w-full">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related NBFC-MFI &amp; Institutional Recovery Resources
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/industries/nbfc-fintech-loan-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC &amp; Fintech Recovery Hub &rarr;
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC Unpaid Dues Legal Notice &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Email, WhatsApp &amp; RPAD Solution &rarr;
                  </Link>
                  <Link
                    href="/online-dispute-resolution-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Online Dispute Resolution (ODR) &rarr;
                  </Link>
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Loan Recall Notice Template &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk CSV Recovery Desk &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
