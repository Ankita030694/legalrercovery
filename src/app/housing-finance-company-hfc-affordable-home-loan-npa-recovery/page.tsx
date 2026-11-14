import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HfcTableOfContents from "./HfcTableOfContents";
import HfcScenarioTabs from "./HfcScenarioTabs";
import HfcRecoveryCTA from "./HfcRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/housing-finance-company-hfc-affordable-home-loan-npa-recovery";
const EXACT_H1 =
  "Housing Finance Company (HFC) NPA Recovery: ₹1 Lakh SARFAESI Advantage, Tripartite Builder Defaults & Informal-Income Cures";
const META_TITLE = "HFC Affordable Home Loan & Subvention NPA Recovery Playbook";
const META_DESCRIPTION =
  "RBI-registered HFCs hold a ₹1 Lakh SARFAESI floor (vs NBFC ₹20L). Master affordable housing possession, CERSAI checks & builder tripartite recovery.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

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
        alt: formatAltText("Housing Finance Company HFC Affordable Home Loan NPA Recovery India"),
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

const STATUTORY_MATRIX_ROWS = [
  {
    instrument: "SARFAESI Act, 2002 s.2(1)(m)(iv) & HFC Notification",
    trigger: "RBI-registered HFC loan account turns 90+ DPD NPA with secured debt >= ₹1 Lakh",
    timeline: "Immediate upon NPA tagging; s.13(2) 60-day statutory demand",
    leverage: "Bypasses ₹20 Lakh NBFC floor; enables non-judicial possession & e-auction",
    forum: "Authorised Officer + DM/CMM (s.14) / DRT (s.17)",
    tone: "emerald",
  },
  {
    instrument: "SARFAESI s.13(4) & s.14 Physical Possession",
    trigger: "Borrower fails to cure within 60 days of s.13(2) or submits untenable s.13(3A) reply",
    timeline: "Day 61+: Symbolic possession + Rule 8(1) gate paste; s.14 DM order (30–60 days)",
    leverage: "Triggers immediate family-level settlement in Tier-2/3 affordable housing",
    forum: "District Magistrate / Chief Metropolitan Magistrate",
    tone: "emerald",
  },
  {
    instrument: "Tripartite Subvention & Builder Buyback Covenant",
    trigger: "Developer stalls construction or defaults on subvention pre-EMI; buyer halts EMI",
    timeline: "7–15 day joint Advocate Demand on Borrower + Developer",
    leverage: "Bars borrower EMI boycott; compels builder refund/substitution directly to HFC",
    forum: "Tripartite Enforcement + RERA / NCLT Creditor Impleadment",
    tone: "slate",
  },
  {
    instrument: "SARFAESI s.26D CERSAI Registration Mandate",
    trigger: "Pre-enforcement check before issuing any s.13(2) demand on mortgaged flat/plot",
    timeline: "Must be registered on CERSAI prior to s.13(2) issuance",
    leverage: "Establishes statutory priority; prevents DRT s.17 quashing for unregistered charge",
    forum: "CERSAI Portal / DRT",
    tone: "amber",
  },
  {
    instrument: "PSS Act, 2007 s.25 & NI Act, 1881 s.138",
    trigger: "e-NACH / ACH mandate or security PDC dishonour on monthly home loan EMI",
    timeline: "30 days from return memo to serve 15-day statutory demand notice",
    leverage: "Creates criminal liability alongside civil/SARFAESI track without waiting 90 DPD",
    forum: "Judicial Magistrate First Class (JMFC)",
    tone: "red",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    title: "CERSAI Security Interest ID (SARFAESI s.26D Compliance)",
    detail:
      "Mandatory CERSAI Form I/II registration receipt confirming the HFC's equitable or registered mortgage charge was filed before issuing Section 13(2)—without this, Section 26D bars SARFAESI enforcement.",
  },
  {
    title: "Original Title Deeds & Memorandum of Entry (MOE)",
    detail:
      "Complete chain of title documents (Sale Deed, Patta/Khata, Mutation, Allotment Letter + Builder NOC) plus state-compliant Memorandum of Entry recording intent to create a Section 58(f) Transfer of Property Act mortgage.",
  },
  {
    title: "Tripartite Agreement & Builder Subvention Ledger",
    detail:
      "Executed Tripartite Agreement containing the borrower's independent non-abatement repayment covenant, builder cancellation/refund-to-HFC clause, and RTGS/UTR disbursement trail to the developer.",
  },
  {
    title: "RBI 90-DPD NPA Classification & Uncompounded Penal Ledger",
    detail:
      "System-generated NPA tagging extract compliant with RBI Master Direction — Non-Banking Financial Company — Housing Finance Company (Reserve Bank) Directions, showing principal, contractual interest, and uncompounded penal charges.",
  },
  {
    title: "Authorised Officer Board Resolution & Tri-Channel Dispatch Proof",
    detail:
      "Board/Committee delegation under Rule 2(a) of Security Interest (Enforcement) Rules, 2002, paired with Speed Post RPAD receipts, SMTP email logs, and WhatsApp delivery proof for Section 13(2) and Rule 8(1) affixture photos.",
  },
  {
    title: "BSA 2023 Section 63 Electronic Evidence Certificate",
    detail:
      "Signed Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate authenticating core banking loan ledgers, NPCI e-NACH dishonour memos, CERSAI extracts, and digital notice timestamps for DRT s.14/s.17 and JMFC filings.",
  },
];

const FAQS = [
  {
    question: "Why can an HFC invoke SARFAESI for a ₹1 Lakh loan while a regular NBFC needs ₹20 Lakh?",
    answer:
      "Under Section 2(1)(m)(iv) of the SARFAESI Act, 2002 and Central Government notifications issued for Housing Finance Companies (historically regulated by NHB and now under RBI Master Directions), notified HFCs retain the statutory ₹1 Lakh minimum debt threshold (Section 31(h) exclusion applies only up to ₹1 Lakh). By contrast, regular NBFCs are governed by MoF Notifications S.O. 856(E) and S.O. 652(E), which restrict NBFC SARFAESI access to entities with >= ₹100 Crore asset size and individual loan securities >= ₹20 Lakh.",
  },
  {
    question: "Can a homebuyer legally stop paying EMIs if the builder stalls an under-construction project?",
    answer:
      "No. Under standard Tripartite Agreements, the housing loan is an independent financial contract between the borrower and the HFC, and the HFC disburses funds directly to the builder solely at the borrower's instruction. Construction delay or developer default under RERA does not extinguish the borrower's unconditional EMI obligation to the HFC—allowing the HFC to enforce against both the borrower and the builder's refund/buyback covenant.",
  },
  {
    question: "What happens if an HFC issues a SARFAESI Section 13(2) notice without CERSAI registration?",
    answer:
      "Section 26D of the SARFAESI Act, 2002 explicitly bars a secured creditor from exercising Chapter III enforcement powers (Section 13(2) demand or Section 13(4) possession) unless the security interest has been registered with CERSAI. A borrower can get the entire SARFAESI action quashed in DRT under Section 17 if CERSAI registration was missing prior to enforcement.",
  },
  {
    question: "How should an HFC recover from informal-income borrowers in Tier-2/3 towns who ignore telecallers?",
    answer:
      "Informal-sector borrowers in Tier-2/3 markets frequently ignore telecalling and SMS nudges until physical property consequences appear. The fastest compliant cure is replacing repetitive calls with a BSA s.63-logged Advocate Recall Notice at 60+ DPD, followed immediately at 91 DPD by a 60-day SARFAESI Section 13(2) demand and Rule 8(1) symbolic-possession gate-pasting—which drives rapid family-level regularization without full auction.",
  },
  {
    question: "How can an HFC enforce security on an under-construction flat before a Sale Deed is executed?",
    answer:
      "Where conveyance is pending, the HFC holds security over the borrower's allotment rights via the Allotment Letter, Builder-Buyer Agreement, and Tripartite Builder NOC. The HFC should serve a formal restraint notice freezing resale/transfer with the developer, invoke the Tripartite cancellation-and-refund clause compelling the builder to remit disbursed funds to the HFC, and pursue parallel Section 25 PSS Act e-NACH prosecution.",
  },
  {
    question: "How do HFCs cure an Equitable Mortgage defect discovered before Section 13(2)?",
    answer:
      "Before issuing Section 13(2), legal teams should audit three items: (1) CERSAI Section 26D registration, (2) state-specific stamp duty/registration of the Memorandum of Entry (MOE) under Section 17(1)(c) of the Registration Act where applicable, and (3) complete chain of title deeds. If title perfection is incurably flawed, pivot immediately to an Order XXXIV/XXXVII civil suit, personal guarantee invocation, and Section 25 PSS Act prosecution.",
  },
  {
    question: "Does RBI's Penal Charges circular affect HFC SARFAESI Section 13(2) demand calculations?",
    answer:
      "Yes. Under RBI's Fair Lending Practice — Penal Charges in Loan Accounts framework (applicable to HFCs), defaults must attract uncompounded 'penal charges' rather than capitalized 'penal interest'. Including capitalized penal interest inside a Section 13(2) demand figure invites borrower objections under Section 13(3A) and adverse DRT scrutiny under Section 17.",
  },
];

const STATUTORY_SOURCES = [
  {
    title: "Reserve Bank of India (RBI) — Master Direction: Non-Banking Financial Company – Housing Finance Company Directions",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "National Housing Bank (NHB) — Housing Finance Companies Regulatory & Refinance Portal",
    url: "https://www.nhb.org.in/",
  },
  {
    title: "India Code — SARFAESI Act, 2002 (Sections 2(1)(m)(iv), 13(2), 13(4), 14, 26D & 31(h))",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "CERSAI — Central Registry of Securitisation Asset Reconstruction and Security Interest of India",
    url: "https://www.cersai.org.in/",
  },
  {
    title: "India Code — Payment and Settlement Systems Act, 2007 (Section 25) & Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    url: "https://www.indiacode.nic.in/",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Step HFC SARFAESI & Tripartite Affordable Housing NPA Recovery Workflow",
  description:
    "Operational SOP for RBI-registered Housing Finance Companies to enforce the ₹1 Lakh SARFAESI floor, cure CERSAI/MOE defects, and resolve stalled-builder tripartite defaults.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pre-NPA Advocate Recall & s.25 PSS Act Notice (60–89 DPD)",
      text: "Serve a BSA 2023 s.63-logged tri-channel Advocate Recall Notice and Section 25 PSS Act demand upon e-NACH dishonour before 90-DPD NPA tagging.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "CERSAI s.26D & Equitable Mortgage Audit",
      text: "Verify CERSAI Security Interest ID, Memorandum of Entry perfection, and uncompounded RBI penal-charge ledger prior to SARFAESI invocation.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Statutory 60-Day Section 13(2) Demand Notice (91+ DPD)",
      text: "Issue Section 13(2) notice via Authorised Officer for any HFC loan >= ₹1 Lakh, and concurrently serve Tripartite Builder Demand if the project is stalled.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Rule 8(1) Symbolic Possession & Gate Affixture (Day 152+)",
      text: "Take symbolic possession under Section 13(4) upon expiry of 60 days, affix notice on the property gate, and publish in two local newspapers.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Section 14 DM/CMM Physical Possession & E-Auction",
      text: "File Section 14 application with BSA s.63 affidavit before the District Magistrate/CMM to secure physical possession and conduct reserve-price e-auction.",
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
      name: "HFC Affordable Home Loan NPA Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function HfcAffordableHomeLoanNpaRecoveryPage() {
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
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-02 &bull; Housing Finance Company (HFC) SARFAESI Playbook</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              Under the{" "}
              <Link
                href="/industries/nbfc-fintech-loan-recovery"
                className="text-red-300 underline hover:text-white font-semibold"
              >
                NBFC, HFC &amp; Fintech Recovery Framework
              </Link>
              , RBI-registered Housing Finance Companies bypass the ₹20 Lakh NBFC bar and invoke{" "}
              <strong>SARFAESI Section 13(2) from just ₹1 Lakh</strong>. Pairing CERSAI-verified
              symbolic possession with tripartite builder-buyer demands cures both stalled-project
              EMI boycotts and Tier-2/3 informal-income defaults.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">₹1 Lakh</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  HFC SARFAESI Floor (vs. ₹20L Regular NBFC)
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">60 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Section 13(2) Statutory Cure Window
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">s.26D</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Mandatory CERSAI Filing Before Notice
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">Dual-Obligor</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Borrower + Builder Tripartite Liability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main 2-Column Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "NBFC & Fintech Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
                { label: "HFC Affordable Home Loan NPA Recovery", href: PAGE_URL },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <HfcTableOfContents />

            <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: ₹1 Lakh SARFAESI Floor */}
              <section
                id="heading-sarfaesi-floor"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    HFC ₹1 Lakh SARFAESI Floor vs. Regular NBFC ₹20 Lakh Bar
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For Heads of Legal and Affordable Housing Collections VPs, the single greatest
                  statutory moat available to a Housing Finance Company (HFC) is its preferential
                  notification status under <strong>Section 2(1)(m)(iv) of the SARFAESI Act, 2002</strong>.
                  While non-housing NBFCs face a strict dual-gate barrier under Ministry of Finance
                  Notifications S.O. 856(E) and S.O. 652(E)—requiring at least ₹100 Crore in asset
                  size and an individual secured loan of ₹20 Lakh or more—RBI-registered HFCs
                  governed by the NHB/RBI Master Directions operate at the{" "}
                  <strong>statutory ₹1 Lakh floor</strong> (Section 31(h)).
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This distinction transforms portfolio unit economics across affordable housing
                  tickets (₹3 Lakh to ₹18 Lakh) in Tier-2 and Tier-3 towns. Instead of waiting
                  years in civil courts under Order XXXIV CPC, an HFC can serve a{" "}
                  <strong>60-day Section 13(2) demand notice</strong> immediately upon 90-DPD NPA
                  classification, take symbolic possession under Section 13(4) with Rule 8(1)
                  property-gate affixture, and approach the District Magistrate under Section 14
                  for physical possession. If your institution operates both an NBFC and an HFC
                  subsidiary, compare the exact forum thresholds in our{" "}
                  <Link
                    href="/nbfc-sarfaesi-eligibility-100-crore-asset-20-lakh-loan-rule"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    NBFC ₹100 Cr / ₹20 Lakh SARFAESI Eligibility Guide
                  </Link>{" "}
                  or model forum timelines using the{" "}
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    SARFAESI &amp; DRT Recovery Forum Calculator
                  </Link>
                  .
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                      Notified HFC Advantage (₹1 Lakh+)
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      Full Chapter III SARFAESI enforcement (s.13(2) &rarr; s.13(4) &rarr; s.14 DM
                      possession &rarr; Rule 8 e-auction) on affordable home loans from ₹1,00,001
                      upwards, provided CERSAI s.26D registration is perfected.
                    </p>
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                      Regular NBFC Constraint (&lt; ₹20 Lakh)
                    </p>
                    <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                      Sub-₹20 Lakh LAP loans held by non-HFC NBFCs are barred from SARFAESI and
                      must rely on Order XXXIV mortgage suits, Arbitration s.9/s.36, or ARC
                      assignment—creating 24–48 month recovery drag.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    HFC NPA Escalation Decision Tree: 30 DPD to s.14 Possession
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Affordable housing collections fail when HFCs rely exclusively on telecallers
                  past 60 DPD or trigger SARFAESI Section 13(2) without auditing CERSAI and
                  tripartite status. The five-stage escalation rail below aligns RBI Fair Practice
                  compliance with maximum pre-auction cure velocity.
                </p>

                {/* Desktop SVG Workflow */}
                <div className="hidden md:block w-full overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4">
                  <svg
                    width="880"
                    height="340"
                    viewBox="0 0 880 340"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="HFC Affordable Home Loan NPA Escalation Decision Tree from 30 DPD to SARFAESI Section 14"
                    className="w-full h-auto"
                  >
                    <rect width="880" height="340" rx="12" fill="#0F172A" />
                    {/* Stage 1 */}
                    <rect x="24" y="32" width="190" height="92" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="40" y="58" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 (30–89 DPD)</text>
                    <text x="40" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">e-NACH Bounce &amp; Recall</text>
                    <text x="40" y="100" fill="#CBD5E1" fontSize="11">PSS Act s.25 + Advocate Notice</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M214 78 H246" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="248" y="32" width="190" height="92" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="264" y="58" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 2 (DAY 90 NPA)</text>
                    <text x="264" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">CERSAI s.26D &amp; MOE Gate</text>
                    <text x="264" y="100" fill="#CBD5E1" fontSize="11">Verify Charge + Uncompounded Dues</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M438 78 H470" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 3 */}
                    <rect x="472" y="32" width="185" height="92" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="488" y="58" fill="#F87171" fontSize="11" fontWeight="700">STAGE 3 (DAY 91+)</text>
                    <text x="488" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">s.13(2) 60-Day Demand</text>
                    <text x="488" y="100" fill="#CBD5E1" fontSize="11">₹1L+ Floor | Tri-Channel Proof</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M657 78 H684" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 4 */}
                    <rect x="686" y="32" width="170" height="92" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="702" y="58" fill="#6EE7B7" fontSize="11" fontWeight="700">STAGE 4 (DAY 152+)</text>
                    <text x="702" y="80" fill="#FFFFFF" fontSize="13" fontWeight="700">s.13(4) &amp; s.14 DM Order</text>
                    <text x="702" y="100" fill="#A7F3D0" fontSize="11">Gate Paste &rarr; Physical Seizure</text>

                    {/* Branching Lower Tracks */}
                    <path d="M343 124 V178" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="40" y="180" width="380" height="128" rx="10" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="60" y="208" fill="#38BDF8" fontSize="11" fontWeight="700">PARALLEL TRACK A: STALLED BUILDER / SUBVENTION</text>
                    <text x="60" y="232" fill="#FFFFFF" fontSize="13" fontWeight="700">Joint Borrower + Developer Tripartite Enforcement</text>
                    <text x="60" y="255" fill="#CBD5E1" fontSize="11">1. Serve non-abatement notice on Borrower + Builder</text>
                    <text x="60" y="275" fill="#CBD5E1" fontSize="11">2. Freeze unit resale + invoke builder refund-to-HFC clause</text>
                    <text x="60" y="295" fill="#CBD5E1" fontSize="11">3. RERA / NCLT creditor impleadment if builder in CIRP</text>

                    <path d="M564 124 V178" stroke="#F87171" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="460" y="180" width="396" height="128" rx="10" fill="#1E293B" stroke="#F87171" strokeWidth="1.5" />
                    <text x="480" y="208" fill="#F87171" fontSize="11" fontWeight="700">PARALLEL TRACK B: TITLE / CERSAI DEFECT FALLBACK</text>
                    <text x="480" y="232" fill="#FFFFFF" fontSize="13" fontWeight="700">Non-SARFAESI Recovery &amp; Defect Cure</text>
                    <text x="480" y="255" fill="#CBD5E1" fontSize="11">1. Cure CERSAI s.26D filing before issuing s.13(2)</text>
                    <text x="480" y="275" fill="#CBD5E1" fontSize="11">2. If MOE/title flawed: Order XXXIV CPC + Personal Guarantee</text>
                    <text x="480" y="295" fill="#CBD5E1" fontSize="11">3. Prosecute forged title / diversion under BNS s.318</text>
                  </svg>
                </div>

                {/* Mobile Stacked Decision Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700">
                    <span className="text-[10px] font-bold text-red-400 uppercase">Stage 1 (30–89 DPD)</span>
                    <p className="text-sm font-bold mt-0.5">e-NACH Bounce &amp; Advocate Recall</p>
                    <p className="text-xs text-slate-300 mt-1">PSS Act s.25 demand + BSA s.63 tri-channel recall.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-amber-500/60">
                    <span className="text-[10px] font-bold text-amber-400 uppercase">Stage 2 (Day 90 NPA)</span>
                    <p className="text-sm font-bold mt-0.5">CERSAI s.26D &amp; MOE Audit Gate</p>
                    <p className="text-xs text-slate-300 mt-1">Verify CERSAI ID, title chain &amp; uncompounded penal charges.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-red-500/60">
                    <span className="text-[10px] font-bold text-red-400 uppercase">Stage 3 (Day 91+)</span>
                    <p className="text-sm font-bold mt-0.5">SARFAESI s.13(2) 60-Day Demand</p>
                    <p className="text-xs text-slate-300 mt-1">₹1 Lakh+ HFC floor; concurrent Tripartite Builder Notice if stalled.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950 text-white border border-emerald-500/60">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Stage 4 (Day 152+)</span>
                    <p className="text-sm font-bold mt-0.5">s.13(4) Symbolic Paste &amp; s.14 DM Order</p>
                    <p className="text-xs text-emerald-100 mt-1">Rule 8(1) gate affixture &rarr; DM/CMM physical possession &amp; e-auction.</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Matrix: SARFAESI, NHB/RBI, RERA &amp; Tripartite Law
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                        <th className="p-3.5 font-bold">Statutory Instrument</th>
                        <th className="p-3.5 font-bold">Default Trigger</th>
                        <th className="p-3.5 font-bold">Timeline / Gate</th>
                        <th className="p-3.5 font-bold">Creditor Leverage</th>
                        <th className="p-3.5 font-bold">Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                      {STATUTORY_MATRIX_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 align-top">
                          <td className="p-3.5 font-bold text-slate-900">{row.instrument}</td>
                          <td className="p-3.5 text-slate-700">{row.trigger}</td>
                          <td className="p-3.5 text-slate-700">{row.timeline}</td>
                          <td className="p-3.5 text-slate-700">{row.leverage}</td>
                          <td className="p-3.5 font-semibold text-slate-900">{row.forum}</td>
                        </tr>
                      ))}
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
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    4 Affordable Housing &amp; Subvention Default Failure Modes
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select an operational failure mode below to inspect the exact statutory hooks and
                  step-by-step legal workflow for HFC collections and litigation teams.
                </p>
                <HfcScenarioTabs />
              </section>

              {/* Section 5: Tripartite Builder Defaults */}
              <section
                id="heading-tripartite-builder"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Tripartite Builder-Buyer Defaults &amp; Under-Construction Flats
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Stalled residential projects generate the highest litigation friction for HFCs.
                  When a developer misses RERA completion timelines or stops paying subvention
                  pre-EMIs, homebuyers routinely halt monthly EMIs arguing that they never
                  received possession. However, settled banking and consumer jurisprudence draws a
                  sharp line between the <strong>construction contract</strong> (Buyer vs. Builder)
                  and the <strong>loan contract</strong> (Borrower vs. HFC).
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under a properly drafted Tripartite Agreement, the borrower expressly covenants
                  that the obligation to repay disbursed principal and interest is{" "}
                  <strong>unconditional and independent of construction progress</strong>. To
                  prevent organized borrower EMI boycotts across a stalled tower, HFC legal teams
                  should execute a three-pronged notice strategy:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                  <li>
                    <strong>Joint Borrower + Builder Advocate Demand:</strong> Put both parties on
                    written notice simultaneously, invoking the borrower&apos;s non-abatement
                    covenant and the builder&apos;s obligation to remit any cancellation refund or
                    subvention shortfall directly to the HFC escrow/loan account.
                  </li>
                  <li>
                    <strong>Allotment Lien &amp; Transfer Freeze:</strong> Issue a formal restraint
                    intimation to the developer&apos;s CRM and RERA compliance officer prohibiting
                    any unit substitution, third-party resale, or NOC issuance without written HFC
                    discharge.
                  </li>
                  <li>
                    <strong>Pre-Recall &amp; Guarantee Invocation:</strong> Use our{" "}
                    <Link
                      href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Advocate-Vetted Loan Recall &amp; Guarantee Invocation Template
                    </Link>{" "}
                    to place co-borrowers and guarantors on formal notice alongside{" "}
                    <Link
                      href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      NBFC/HFC unpaid dues escalation
                    </Link>
                    .
                  </li>
                </ul>
              </section>

              {/* Section 6: Informal-Income & Title Defect Cure */}
              <section
                id="heading-informal-mortgage"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Curing Informal-Income &amp; Tier-2/3 Equitable Mortgage Defects
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In Tier-2 and Tier-3 affordable housing portfolios (self-employed micro-merchants,
                  contractors, and cash-flow households), telecalling compliance is tightly
                  constrained by RBI&apos;s 8 AM–7 PM contact rules and zero-harassment mandates
                  (detailed in our{" "}
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    RBI Recovery Agent Compliance Guide
                  </Link>
                  ). Informal-income borrowers frequently ignore phone reminders until a formal{" "}
                  <strong>Section 13(2) 60-day notice</strong> and subsequent{" "}
                  <strong>Rule 8(1) symbolic-possession notice</strong> are affixed to the
                  residential gate—a visible statutory milestone that mobilizes extended-family
                  repayment within days.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before deploying Section 13(2) across regional branches, however, HFC legal
                  teams must eliminate three common equitable mortgage defects that trigger DRT
                  Section 17 stays: (1) missing <strong>CERSAI s.26D registration</strong> prior to
                  notice date; (2) unregistered Memorandums of Entry (MOE) in states where
                  registration/stamp duty is mandatory upon deposit of title deeds; and (3)
                  incomplete revenue/municipal mutation chains on semi-urban plots. Where a
                  borrower also holds unsecured top-up or personal exposure, pair SARFAESI with{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    tri-channel bulk recovery notices
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Online Dispute Resolution (ODR)
                  </Link>{" "}
                  to settle low-ticket top-ups rapidly.
                </p>
              </section>

              {/* Section 7: Worked Financial Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked ₹8.4L Affordable Housing SARFAESI Recovery Ledger
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Below is an illustrative recovery ledger for a Tier-2 self-employed affordable
                  home loan of ₹8,40,000 (11.5% p.a. contractual rate) turning NPA at 90 DPD—showing
                  how the HFC ₹1 Lakh SARFAESI floor outperforms a regular NBFC barred below ₹20
                  Lakh.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-900 text-white p-5 space-y-3 border border-slate-800">
                    <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
                      HFC SARFAESI Track (₹1L+ Floor)
                    </span>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-slate-300">Principal Outstanding at 90 DPD</span>
                        <span className="font-bold">₹8,40,000</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-slate-300">Accrued Contractual Interest (5 mos)</span>
                        <span className="font-bold">₹40,250</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-slate-300">Uncompounded Penal Charges (RBI Rule)</span>
                        <span className="font-bold">₹8,400</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-slate-300">s.13(2), Rule 8 Ads &amp; s.14 DM Cost</span>
                        <span className="font-bold text-amber-400">~₹38,500</span>
                      </div>
                      <div className="flex justify-between pt-1 text-sm sm:text-base font-black text-emerald-400">
                        <span>Total s.13(2) Claim &amp; Timeline</span>
                        <span>₹8,88,650 &bull; 5–7 Mos</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 space-y-3">
                    <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-white text-emerald-800 border border-emerald-300">
                      Benchmark vs. Non-SARFAESI NBFC (&lt; ₹20L)
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      <strong>Why ₹1L Floor Wins:</strong> A non-HFC NBFC holding this exact
                      ₹8.40L mortgage is barred from SARFAESI under MoF S.O. 652(E) and must file
                      an Order XXXIV CPC mortgage suit—incurring ad-valorem court fees plus 30–48
                      months of civil trial delays while interest compounds into dead-weight loss.
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      <strong>Pre-Auction Cure Reality:</strong> With a ₹14.5L valuation on the
                      mortgaged Tier-2 house, Rule 8(1) gate-affixture under SARFAESI typically
                      compels borrower family settlement before e-auction—protecting net recovery
                      yield and avoiding{" "}
                      <Link
                        href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                        className="text-[#DC2626] font-bold underline"
                      >
                        litigation cost erosion
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Evidence & BSA s.63 Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    BSA 2023 s.63, CERSAI &amp; Section 14 DM/CMM Dossier Checklist
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EVIDENCE_CHECKLIST.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1.5"
                    >
                      <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {idx + 1}. {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Dual-Track B2B CTA */}
              <section
                id="heading-deploy-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Deploy HFC Recovery: Single ₹999 Test or Bulk CSV Desk
                  </h2>
                </div>
                <HfcRecoveryCTA />
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    FAQs: HFC SARFAESI ₹1 Lakh Floor &amp; Tripartite Recovery
                  </h2>
                </div>
                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Portals */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    RBI, NHB, CERSAI &amp; Statutory Housing Finance Portals
                  </h2>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {STATUTORY_SOURCES.map((source, idx) => (
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
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span>
                    Reviewed by <strong className="text-slate-700">{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                  </span>
                  <span>Updated 14 Nov 2026 &bull; India HFC SARFAESI Standard</span>
                </div>
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-2 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related NBFC, HFC &amp; Institutional Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/industries/nbfc-fintech-loan-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC &amp; Fintech Recovery Hub &rarr;
                  </Link>
                  <Link
                    href="/nbfc-sarfaesi-eligibility-100-crore-asset-20-lakh-loan-rule"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC SARFAESI ₹100 Cr / ₹20L Rule &rarr;
                  </Link>
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    SARFAESI &amp; DRT Forum Calculator &rarr;
                  </Link>
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Loan Recall &amp; Guarantee Template &rarr;
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
                    Bulk Email, WhatsApp &amp; Speed Post &rarr;
                  </Link>
                  <Link
                    href="/online-dispute-resolution-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Online Dispute Resolution (ODR) &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk CSV Institutional Desk &rarr;
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
