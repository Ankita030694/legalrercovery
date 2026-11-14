import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import RbiComplianceTableOfContents from "./RbiComplianceTableOfContents";
import RbiComplianceScenarioTabs from "./RbiComplianceScenarioTabs";
import RbiComplianceCTA from "./RbiComplianceCTA";

export const revalidate = 86400;

const PAGE_URL = "/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "RBI Recovery Guidelines (2026): Audit-Safe NBFC Notices";
const PAGE_DESCRIPTION =
  "RBI fines hit NBFCs for rogue agent calls. Shift 30–90 DPD collections from risky field/voice tactics to 100% RBI-compliant advocate legal notices.";
const H1_TEXT =
  "RBI Recovery Agent Directions & Digital Lending Compliance: Replacing Telecalling Liability with Audit-Safe Legal Notices";

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
    question: "What are the mandatory RBI calling hours for NBFC recovery agents in 2026?",
    answer:
      "Under the RBI Master Direction on Managing Risks and Code of Conduct in Outsourcing of Financial Services and the Fair Practices Code for NBFCs, recovery agents and telecallers may contact borrowers strictly between 8:00 AM and 7:00 PM. Calls before 8:00 AM or after 7:00 PM, or repeated harassing calls to third parties, expose the NBFC to RBI Ombudsman compensation orders and supervisory penalties.",
  },
  {
    question: "Is IIBF DRA certification mandatory for outsourced NBFC collection agents?",
    answer:
      "Yes. RBI directions require every employee or outsourced agent engaged in debt recovery for banks, NBFCs, and HFCs to complete mandatory training and hold a valid Debt Recovery Agent (DRA) certification from the Indian Institute of Banking and Finance (IIBF), backed by background verification and a published agency roster.",
  },
  {
    question: "Does the 8 AM–7 PM telecalling restriction apply to Advocate Legal Notices?",
    answer:
      "No. The 8 AM–7 PM window governs intrusive voice calls and physical visits by collection agents. A formal Advocate Legal Notice—issued by an enrolled Advocate under the Advocates Act, 1961 via Speed Post RPAD, verified email, and registered WhatsApp—is a statutory pre-litigation demand, not harassment or coercive dunning.",
  },
  {
    question: "How do RBI Digital Lending Guidelines restrict LSPs during loan recovery?",
    answer:
      "The RBI Regulatory Framework for Digital Lending prohibits Digital Lending Apps (DLAs) and Lending Service Providers (LSPs) from accessing borrower phonebooks, contact lists, or call logs, bans contacting relatives or employers (third-party shaming), and mandates that all recovery communications preserve strict data privacy and audit logs.",
  },
  {
    question: "When should an NBFC shift a 30–90 DPD account from telecalling to a Legal Notice?",
    answer:
      "Operational best practice is to restrict soft reminder calls to Bucket X (1–15 DPD) and early 16–29 DPD nudges. Once an account crosses 30 DPD or suffers an e-NACH/UPI AutoPay bounce, continuing 40 daily calls yields diminishing returns while multiplying Ombudsman risk. Issuing an Advocate Legal Notice at 30–45 DPD preserves the 30-day Section 25 PSS Act window and drives higher voluntary settlement.",
  },
  {
    question: "How does BSA 2023 Section 63 protect an NBFC during RBI audits and court filings?",
    answer:
      "Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the Indian Evidence Act) governs the admissibility of electronic records. When LegalRecovery.in dispatches Email and WhatsApp notices, each dispatch generates a timestamped server log and cryptographic hash certificate under Section 63 BSA, creating an unassailable audit trail for both RBI inspections and Section 25 PSS Act / ODR filings.",
  },
  {
    question: "Can an NBFC test compliant legal escalation on one loan before bulk CSV onboarding?",
    answer:
      "Yes. Through LegalRecovery.in's dual-track onboarding desk, Compliance Officers and Collections Heads can pilot a single overdue account for ₹999 (inclusive of Advocate drafting, Email, WhatsApp, and Speed Post RPAD) via /user/new-recovery before uploading 10 to 10,000+ accounts via CSV.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "Reserve Bank of India (RBI) — Master Direction on Outsourcing of Financial Services & Recovery Agents Code of Conduct",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11566",
  },
  {
    title:
      "Reserve Bank of India (RBI) — Master Direction on Regulatory Framework for Digital Lending",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12382",
  },
  {
    title:
      "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer)",
    url: "https://www.indiacode.nic.in/handle/123456789/2067",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Advocates Act, 1961 — Statutory Authority of Enrolled Advocates for Legal Demand Notices",
    url: "https://www.indiacode.nic.in/handle/123456789/1631",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-14T13:15:00+05:30",
  dateModified: "2026-11-14T13:15:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/authors`,
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
  name: "How NBFCs Replace Risky Telecalling with RBI-Compliant Advocate Legal Notices",
  description:
    "5-step operational SOP for NBFC Chief Compliance Officers and Collections Heads to transition 30–90 DPD accounts from telecalling to audit-safe tri-channel Advocate Legal Notices.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Gate Soft Telecalling to Bucket X (1–15 DPD) Within 8 AM–7 PM",
      text: "Restrict automated dialers and soft reminder calls strictly between 08:00 and 19:00 IST with full call-log recording and IIBF DRA verification.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Trigger Automated Voice-Bot & Field Suppression at 30 DPD",
      text: "Pause aggressive voice-bots and unverified field visits once an account reaches 30 DPD or experiences an e-NACH dishonour.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Ingest Loan & NPCI Dishonour Data via CSV or Single-Case Form",
      text: "Upload borrower KYC coordinates, disbursed amount, as-on overdue ledger, and NPCI return memos into the LegalRecovery.in engine.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Dispatch Tri-Channel Advocate Legal Notice (Email + WhatsApp + RPAD)",
      text: "Serve a formal demand notice on Advocate letterhead citing Section 25 PSS Act / Contract Act terms with uncompounded penal charges.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Archive BSA 2023 s.63 Hash Proofs & Triage Inbound Replies via ODR",
      text: "Store timestamped electronic delivery receipts, India Post RPAD tracking, and structured borrower settlement replies for RBI audit readiness.",
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
      name: "RBI Recovery Agent Compliance Guide",
      item: CANONICAL_URL,
    },
  ],
};

export default function RbiRecoveryGuidelinesNbfcPage() {
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
              <span>IND-02 &bull; NBFC &amp; Digital Lending Compliance</span>
              <span>&bull;</span>
              <span>RBI 8 AM–7 PM &amp; Audit Playbook</span>
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 word Executive Statutory Summary with inline Parent Hub link */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              RBI supervisory penalties and Ombudsman orders now hold NBFCs vicariously liable for
              rogue agency calls outside the 8 AM–7 PM window. Under our{" "}
              <Link
                href="/industries/nbfc-fintech-loan-recovery"
                className="text-red-300 underline hover:text-white font-bold"
              >
                NBFC &amp; Fintech Loan Recovery Hub
              </Link>
              , replacing 40 daily telecalls at 30–90 DPD with a tri-channel Advocate Legal Notice
              delivers higher cure rates with zero regulatory exposure.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">8 AM – 7 PM</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Mandatory RBI Calling Window
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">100% Audit</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  BSA s.63 Hash &amp; RPAD Trail
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">30-Day Clock</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  PSS s.25 e-NACH Notice Window
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">0% Shaming</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Zero Third-Party Contact Risk
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
                label: "RBI Recovery Agent Compliance Guide",
                href: PAGE_URL,
              },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
            {/* Left Sticky Sidebar TOC */}
            <RbiComplianceTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Supervisory Risk Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Why RBI Supervisory Crackdowns Force NBFCs Out of Telecalling
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For Chief Compliance Officers and Collections Operations Heads across Indian
                  NBFCs, Housing Finance Companies (HFCs), Microfinance Institutions (MFIs), and
                  Digital Lending Fintechs, the regulatory cost of aggressive third-party
                  telecalling now outweighs its marginal recovery yield. Recent Reserve Bank of
                  India (RBI) supervisory actions—including monetary penalties, restrictions on new
                  loan disbursements, and mandatory third-party forensic audits—have demonstrated that
                  Regulated Entities (REs) cannot outsource regulatory accountability to voice-bot
                  vendors or field recovery agencies.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the <strong>RBI Master Direction on Managing Risks and Code of Conduct in
                  Outsourcing of Financial Services</strong> and the{" "}
                  <strong>Master Direction on Regulatory Framework for Digital Lending</strong>,
                  every call, WhatsApp message, and field visit made by a Debt Recovery Agent (DRA)
                  or Lending Service Provider (LSP) is legally attributed to the NBFC. When a
                  sub-contracted caller dials a borrower at 7:45 AM or 8:15 PM, contacts a
                  borrower&apos;s employer or family member, or uses intimidating language, the
                  borrower does not merely ignore the demand—they record the call and file an
                  immediate complaint on the RBI Complaint Management System (CMS) or Integrated
                  Ombudsman Scheme.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      The 40-Call Voice-Bot Trap
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Bombarding 30–90 DPD accounts with 30 to 40 automated calls per week trains
                      borrowers to block numbers, triggers DND/TRAI spam flags, and creates
                      discoverable audio evidence of harassment—all without establishing a legal
                      cause of action under Section 25 of the PSS Act or Section 138 of the NI Act.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
                      The Advocate Legal Notice Advantage
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Shifting 30+ DPD accounts to a formal{" "}
                      <Link
                        href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                        className="text-emerald-800 underline font-bold"
                      >
                        NBFC Advocate Legal Notice
                      </Link>{" "}
                      served simultaneously via Email, WhatsApp, and Speed Post RPAD signals
                      institutional seriousness, stops limitation leakage, and complies 100% with
                      RBI Responsible Business Conduct norms.
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
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    30–90 DPD Compliance Decision Tree: Telecalling vs. Legal Escalation
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To insulate the NBFC from Ombudsman awards while maximizing net recovery,
                  collections teams must enforce a hard operational handoff at{" "}
                  <strong>30 Days Past Due (DPD)</strong> or upon the first{" "}
                  <strong>e-NACH / UPI AutoPay bounce</strong>:
                </p>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4">
                  <svg
                    width={820}
                    height={250}
                    viewBox="0 0 820 250"
                    role="img"
                    aria-label="RBI 30 to 90 DPD Compliance Decision Tree for NBFCs"
                    className="w-full h-auto"
                  >
                    {/* Node 1: Bucket X */}
                    <rect x="10" y="75" width="175" height="100" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="97" y="103" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="700">STAGE 1 (1–15 DPD)</text>
                    <text x="97" y="123" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">Soft Reminder Desk</text>
                    <text x="97" y="143" textAnchor="middle" fill="#CBD5E1" fontSize="10">8 AM–7 PM Window Only</text>
                    <text x="97" y="159" textAnchor="middle" fill="#34D399" fontSize="10">IIBF DRA + Call Recording</text>

                    {/* Arrow 1->2 */}
                    <line x1="185" y1="125" x2="215" y2="125" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="215,120 225,125 215,130" fill="#DC2626" />

                    {/* Node 2: Gate 30 DPD */}
                    <rect x="225" y="65" width="180" height="120" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                    <text x="315" y="93" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="700">COMPLIANCE GATE (30 DPD)</text>
                    <text x="315" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">Freeze Voice Bots</text>
                    <text x="315" y="135" textAnchor="middle" fill="#FECACA" fontSize="10">Stop 40x Daily Dialing</text>
                    <text x="315" y="152" textAnchor="middle" fill="#FECACA" fontSize="10">Capture NPCI Bounce Memo</text>
                    <text x="315" y="169" textAnchor="middle" fill="#FDE047" fontSize="10">30-Day PSS s.25 Clock Starts</text>

                    {/* Arrow 2->3 */}
                    <line x1="405" y1="125" x2="435" y2="125" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="435,120 445,125 435,130" fill="#DC2626" />

                    {/* Node 3: Tri-Channel Advocate Notice */}
                    <rect x="445" y="65" width="180" height="120" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="535" y="93" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="700">STAGE 3 (31–60 DPD)</text>
                    <text x="535" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">Advocate Legal Notice</text>
                    <text x="535" y="135" textAnchor="middle" fill="#CBD5E1" fontSize="10">Email + WhatsApp + RPAD</text>
                    <text x="535" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">BSA 2023 s.63 Hash Log</text>
                    <text x="535" y="169" textAnchor="middle" fill="#34D399" fontSize="10">Zero Harassment Exposure</text>

                    {/* Arrow 3->4 */}
                    <line x1="625" y1="125" x2="655" y2="125" stroke="#10B981" strokeWidth="2.5" />
                    <polygon points="655,120 665,125 655,130" fill="#10B981" />

                    {/* Node 4: ODR / Court Escalation */}
                    <rect x="665" y="65" width="145" height="120" rx="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="737" y="93" textAnchor="middle" fill="#7DD3FC" fontSize="11" fontWeight="700">STAGE 4 (61–90+ DPD)</text>
                    <text x="737" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">ODR / Statutory</text>
                    <text x="737" y="135" textAnchor="middle" fill="#CBD5E1" fontSize="10">PSS s.25 / NI s.138</text>
                    <text x="737" y="152" textAnchor="middle" fill="#CBD5E1" fontSize="10">Institutional Arbitration</text>
                    <text x="737" y="169" textAnchor="middle" fill="#38BDF8" fontSize="10">Reply Triage &amp; Cure</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Stage 1 (1–15 DPD)
                    </span>
                    <p className="text-sm font-extrabold mt-0.5">Soft Reminder Desk (8 AM–7 PM)</p>
                    <p className="text-xs text-slate-300 mt-1">
                      IIBF DRA-certified telecallers only, capped frequency, full call recording.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-950 text-white border border-red-700">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-300">
                      Compliance Gate (30 DPD / Bounce)
                    </span>
                    <p className="text-sm font-extrabold mt-0.5">Freeze Voice-Bots &amp; Field Visits</p>
                    <p className="text-xs text-red-100 mt-1">
                      Stop high-frequency dialing; capture NPCI return memo for 30-day PSS s.25 clock.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-emerald-600">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      Stage 3 (31–60 DPD)
                    </span>
                    <p className="text-sm font-extrabold mt-0.5">Tri-Channel Advocate Legal Notice</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Email + WhatsApp + Speed Post RPAD with BSA 2023 s.63 server hash certificate.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-sky-500">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                      Stage 4 (61–90+ DPD)
                    </span>
                    <p className="text-sm font-extrabold mt-0.5">ODR, PSS s.25 &amp; Arbitration</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Structured inbound reply triage, ODR settlement, or statutory court filing.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    RBI Recovery Agent Directions &amp; Statutory Compliance Matrix
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The table below benchmarks traditional outsourced recovery agencies and automated
                  voice-bots against an Advocate-led Tri-Channel Legal Escalation desk across six
                  RBI inspection parameters:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">RBI Compliance Parameter</th>
                        <th className="p-3.5 font-bold">Outsourced DRA / Field Agency</th>
                        <th className="p-3.5 font-bold">Automated Voice-Bot SaaS</th>
                        <th className="p-3.5 font-bold text-emerald-300">
                          Advocate Legal Notice Desk
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          8 AM – 7 PM Contact Window
                        </td>
                        <td className="p-3.5 text-red-700 font-medium">
                          High breach risk by field executives &amp; local sub-agents
                        </td>
                        <td className="p-3.5 text-amber-700 font-medium">
                          Time-zone &amp; retry-queue misconfigurations risk DND flags
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold">
                          Exempt from telecalling restrictions; formal statutory notice
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          IIBF DRA Certification
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Mandatory for every agent; high attrition creates audit gaps
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Does not replace human DRA oversight for escalations
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold">
                          Executed by Enrolled Advocates under Advocates Act, 1961
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Zero Third-Party Shaming
                        </td>
                        <td className="p-3.5 text-red-700 font-medium">
                          Frequent complaints of visiting workplaces or calling relatives
                        </td>
                        <td className="p-3.5 text-amber-700 font-medium">
                          LSPs using scraped contacts trigger RBI business bans
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold">
                          Addressed strictly to KYC-verified Borrower &amp; Co-Obligors
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Audit Trail &amp; Evidence
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Fragmented agency call logs; rarely admissible in court
                        </td>
                        <td className="p-3.5 text-slate-700">
                          IVR logs only; no statutory demand proof
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold">
                          BSA 2023 s.63 SHA-256 hash + India Post RPAD tracking
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Statutory Limitation Stop
                        </td>
                        <td className="p-3.5 text-red-700 font-medium">
                          Zero legal effect; 30-day PSS s.25 clock expires silently
                        </td>
                        <td className="p-3.5 text-red-700 font-medium">
                          Zero legal effect under PSS Act or NI Act
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold">
                          Preserves PSS s.25 / NI s.138 &amp; Arbitration s.21 rights
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    4 NBFC Compliance Failure Modes &amp; Legal Substitution Protocols
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select an operational failure mode below to review the RBI supervisory trigger and
                  the exact legal-escalation substitution protocol:
                </p>
                <RbiComplianceScenarioTabs />
              </section>

              {/* Section 5: 5-Step SOP */}
              <section
                id="heading-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    5-Step SOP to Replace Aggressive Calling with Advocate Notices
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      01
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Lock Soft Telecalling to 8 AM–7 PM in Bucket X (1–15 DPD)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                        Configure your LMS/CRM dialer to permit polite payment reminders strictly
                        between 08:00 and 19:00 IST, routed exclusively through IIBF DRA-certified
                        personnel with 100% call recording retention.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      02
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Enforce a Hard Dialer Cutoff at 30 DPD or First e-NACH Dishonour
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                        Once an account crosses 30 DPD, halt high-frequency calling and unverified
                        field visits. Export the defaulted cohort alongside NPCI dishonour memos so
                        the 30-day statutory notice window under Section 25 of the PSS Act is never
                        missed.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      03
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Segregate Principal, Interest &amp; Uncompounded Penal Charges
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                        Per RBI Fair Lending Practice – Penal Charges directions, ensure your demand
                        schedule states overdue principal, contractual interest, and uncompounded
                        penal charges separately. Use our{" "}
                        <Link
                          href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          Loan Recall &amp; Penal-Charge Notice Template
                        </Link>{" "}
                        as a structural benchmark.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      04
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Dispatch Tri-Channel Advocate Notices via Bulk CSV Engine
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                        Upload 10 to 10,000+ accounts through our{" "}
                        <Link
                          href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          Bulk Email, WhatsApp &amp; Speed Post RPAD Solution
                        </Link>
                        . Each borrower receives an Advocate-signed notice on letterhead, with zero
                        third-party contact leakage.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      05
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Triage Inbound Replies into ODR or Statutory Forum Escalation
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                        Route responsive borrowers into{" "}
                        <Link
                          href="/online-dispute-resolution-india"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          Online Dispute Resolution (ODR)
                        </Link>{" "}
                        for structured EMI restructuring, and escalate willful non-responders via
                        our{" "}
                        <Link
                          href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                          className="text-[#DC2626] underline font-semibold"
                        >
                          Recovery Forum &amp; Fee Calculator
                        </Link>{" "}
                        to select Arbitration, Section 25 PSS Act, or SARFAESI.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Worked Financial & Unit-Economics Box */}
              <section
                id="heading-financial-model"
                className="scroll-mt-28 bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg space-y-5 border border-slate-800"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Unit-Economics Ledger: 40-Call Agency Cost vs. Tri-Channel Notice
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Consider an illustrative <strong>1,000-account 30–90 DPD NBFC cohort</strong>{" "}
                  with an average overdue ticket of <strong>₹45,000</strong> (Total Cohort Exposure:
                  ₹4.50 Crore). Compare continued outsourced agency telecalling against shifting
                  30+ DPD accounts to Advocate Legal Notices:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white/5 border border-red-500/40 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Model A: Traditional Agency Telecalling (40 Calls/Acct)
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                      <li className="flex justify-between">
                        <span>Agency Commission (12%–18% on recovery):</span>
                        <span className="font-bold text-white">High Variable Cost</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Ombudsman / Legal Defensibility:</span>
                        <span className="font-bold text-red-400">Zero (Adverse Risk)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>30-Day PSS s.25 Notice Preservation:</span>
                        <span className="font-bold text-red-400">Missed / Expired</span>
                      </li>
                      <li className="flex justify-between pt-2 border-t border-white/10">
                        <span>RBI Supervisory Exposure:</span>
                        <span className="font-bold text-red-400">Elevated Penalty Risk</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Model B: Tri-Channel Advocate Legal Notice (30+ DPD)
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                      <li className="flex justify-between">
                        <span>Fixed Legal Dispatch Fee (No % Cut):</span>
                        <span className="font-bold text-emerald-300">Predictable Per-Case</span>
                      </li>
                      <li className="flex justify-between">
                        <span>RBI 8 AM–7 PM &amp; Shaming Risk:</span>
                        <span className="font-bold text-emerald-300">0% Exposure</span>
                      </li>
                      <li className="flex justify-between">
                        <span>BSA 2023 s.63 + RPAD Evidentiary Pack:</span>
                        <span className="font-bold text-emerald-300">100% Court-Ready</span>
                      </li>
                      <li className="flex justify-between pt-2 border-t border-white/10">
                        <span>Net Portfolio Control:</span>
                        <span className="font-bold text-emerald-300">Full Audit Compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  For deeper institutional cost-reduction benchmarks, review our{" "}
                  <Link
                    href="/third-party-legal-recovery-services-financial-institutions"
                    className="text-red-300 underline hover:text-white"
                  >
                    Third-Party Legal Recovery for Financial Institutions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/how-banks-reduce-recovery-costs-through-legal-outsourcing"
                    className="text-red-300 underline hover:text-white"
                  >
                    Reducing Recovery Costs Through Legal Outsourcing
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: Audit Trail & BSA 2023 s.63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    RBI Audit Trail &amp; BSA 2023 s.63 Evidence Checklist
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every NBFC Chief Compliance Officer should maintain the following six-point
                  documentation pack to satisfy RBI Supervisory Inspections and preserve judicial
                  enforceability:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "1. Board-Approved Fair Practices & Recovery Policy",
                      desc: "Annual Board review documenting calling hours (8 AM–7 PM), escalation thresholds at 30 DPD, and grievance redressal officer details.",
                    },
                    {
                      title: "2. IIBF DRA Certificates & Published Agency List",
                      desc: "Updated website disclosure of all empaneled recovery agencies and valid IIBF DRA certificate IDs for any Bucket X telecallers.",
                    },
                    {
                      title: "3. LSP Data-Purge & Zero-Contact-Scraping Attestation",
                      desc: "Technical audit confirming Digital Lending Apps cannot access phonebooks, call logs, or third-party contacts.",
                    },
                    {
                      title: "4. Advocate Vakalatnama & Board Resolution Vault",
                      desc: "Centralized entity authorization and Authorised Signatory POAs stored in the Representees Vault before bulk notice dispatch.",
                    },
                    {
                      title: "5. BSA 2023 Section 63 Electronic Hash Certificates",
                      desc: "Cryptographic SHA-256 server logs certifying Email and WhatsApp legal notice generation and delivery timestamps.",
                    },
                    {
                      title: "6. India Post RPAD Consignment & Reply Triage Logs",
                      desc: "Physical Speed Post tracking receipts paired with structured borrower reply logs for ODR or Section 25 PSS Act filing.",
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
                    FAQs: RBI Recovery Guidelines &amp; NBFC Legal Escalation
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Compliance Answers Grounded in RBI Master Directions, PSS Act 2007 &amp; BSA 2023
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
                  Official RBI Directions, Statutes &amp; Primary References
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
                <h2 className="sr-only">Onboard NBFC Legal Escalation</h2>
                <RbiComplianceCTA />
              </section>

              {/* Related Internal Links */}
              <div className="pt-4 w-full">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related NBFC &amp; Institutional Recovery Resources
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
