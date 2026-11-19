import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ManagementConsultingTableOfContents from "./ManagementConsultingTableOfContents";
import ManagementConsultingScenarioTabs from "./ManagementConsultingScenarioTabs";
import ManagementConsultingCTA from "./ManagementConsultingCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/management-consulting-esg-iso-cyber-audit-advisory-milestone-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Client Secured Its RBI Cyber-Audit Sign-Off, NABH Accreditation or ₹10 Cr State PLI Subsidy—and Froze Your Final Advisory Fee?";

const META_TITLE = "ISO/NABH, CERT-In Audit, Subsidy & ESG Advisory Fee Recovery";

const META_DESCRIPTION =
  "Client amnesia after RBI cyber-audit sign-off, NABH accreditation or state PLI subsidy? Enforce advisory milestone letters, Order 37 CPC & Section 43B(h).";

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
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Payment Ceiling & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 (Section 43B(h) — Mandatory Corporate Expense Disallowance for Delayed Payments to Udyam Advisory MSMEs)",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title:
      "Indian Contract Act, 1872 (Section 70 — Quantum Meruit Obligation for Non-Gratuitous Services & Section 219 Agent Remuneration)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Copyright Act, 1957 (Sections 14, 19 & 51 — Retention of Title & Injunction Against Unpaid Deliverable Utilization)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title:
      "Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Advisory & Consultancy Agreements as Commercial Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2157",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Admissibility of Portal Sign-Offs, DPR Timestamps & Audit Trails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Can a client legally withhold an advisory milestone by claiming 'our internal team did the real work' after receiving a government subsidy?",
    answer:
      "No. Under Section 70 of the Indian Contract Act, 1872, where a person lawfully performs non-gratuitous services for another and the latter enjoys the benefit thereof, the recipient is bound to make compensation. Furthermore, under Section 219 and Section 220, an advisory or mandate agent is entitled to agreed remuneration once the contracted act (e.g., preparation of the DPR, submission of capital incentive documentation, and securing the sanction order) is completed. When supported by official portal logs, email transmittals, and a signed engagement letter, courts treat retroactive claims of 'internal team effort' as mala fide breach.",
  },
  {
    question:
      "How do boutique management consulting firms qualify for MSMED Act Section 15–18 and Section 43B(h) protection?",
    answer:
      "Boutique consulting firms, cyber security audit agencies, ESG advisors, and quality accreditation practices registered under Udyam as Micro or Small Service Enterprises (NIC codes 70200 for management consultancy, 62020 for cyber security/IT consultancy, 71200 for technical testing/audit) are fully protected by Sections 15–18 of the MSMED Act, 2006. Clients are legally mandated to clear undisputed milestone invoices within 45 days. Delayed payments incur compound interest at three times the RBI bank rate under Section 16, and corporate buyers face automatic business deduction disallowance under Section 43B(h) of the Income Tax Act.",
  },
  {
    question:
      "Can an advisory firm use Copyright Act Section 51 to stop an unpaid client from using audit reports or ESG disclosures?",
    answer:
      "Yes. Under Sections 14 and 19 of the Copyright Act, 1957, copyright in original literary, analytical, or technical works—such as Detailed Project Reports (DPR), BRSR Core ESG disclosure frameworks, ISO/ISMS SOP manuals, and VAPT threat models—remains with the consulting author until full agreed consideration is paid. Unless the engagement contract contains an explicit, unconditional present assignment regardless of payment, continuing to use, distribute, or publicly file unpaid deliverables (such as in SEBI annual reports or RBI submissions) constitutes actionable copyright infringement under Section 51.",
  },
  {
    question:
      "What is the fastest legal remedy to recover a 3% to 8% state industrial subsidy (PLI / SGST) success fee?",
    answer:
      "The fastest civil remedy is filing an Order XXXVII Summary Suit in the jurisdictional Commercial Court, accompanied by an urgent interlocutory application under Order XXXVIII Rule 5 of the CPC for Attachment Before Judgment. Because the success fee debt is liquidated by applying the contracted percentage to the official, publicly published subsidy sanction amount, the defendant has no unconditional right to defend. The consultant can simultaneously attach the designated bank account into which the government credited the subsidy tranche.",
  },
  {
    question:
      "What happens if an NBFC or FinTech files a CERT-In cyber-audit sign-off with the RBI but refuses to pay the auditor?",
    answer:
      "Issuing a formal 7-day Advocate Notice that puts the client on notice of impending revocation of the audit clearance certificate triggers immediate settlement. If the client refuses to pay, the auditor can formally notify the RBI Department of Supervision and CERT-In that the audit sign-off was procured under misrepresentation and that copyright authorization for regulatory reliance has been revoked under Copyright Act Section 51. Because an NBFC's operating license relies directly on uncompromised regulatory filings, management invariably settles.",
  },
  {
    question:
      "How does Section 43B(h) of the Income Tax Act force hospitals and corporate clients to clear advisory fees before March 31?",
    answer:
      "Section 43B(h) mandates that any sum payable to a Micro or Small enterprise beyond the 45-day statutory limit of the MSMED Act cannot be claimed as a tax-deductible business expense in that financial year. For a corporate hospital or industrial client with a 25%–30% corporate tax rate, withholding a ₹50 Lakh advisory milestone results in an immediate additional tax outgo of ₹12.5–₹15 Lakh plus penal interest. Reminding the CFO of this statutory consequence in a formal demand notice creates immense internal pressure to clear the invoice before fiscal year-end.",
  },
  {
    question:
      "What electronic evidence is required under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 for advisory milestone claims?",
    answer:
      "To satisfy Section 63 of BSA 2023 (which replaced Section 65B of the Indian Evidence Act), advisory firms must preserve: (1) unedited email headers with cryptographic message hashes demonstrating deliverable dispatch; (2) official government/accreditation portal screenshots and application tracking numbers (e.g., DPIIT, NABH, SPCB, RBI EDCS); (3) Form 26AS/AIS entries showing Section 194J TDS deductions made by the client; and (4) WhatsApp or digital communications acknowledging milestone completion, supported by a formal Section 63 electronic evidence affidavit.",
  },
];

const DECISION_STAGES = [
  {
    stage: "Stage 1 · Day 0–10",
    title: "Deliverable Transmittal & Hash Lock",
    detail:
      "Transmit final milestone deliverable (DPR, ISO manual, CERT-In audit clearance, BRSR Core data) with digital cryptographic hash and formal milestone completion memo under BSA 2023 Section 63.",
  },
  {
    stage: "Stage 2 · Day 11–25",
    title: "Public Portal Verification & Sanction Order Extraction",
    detail:
      "Extract official public proof of regulatory or financial benefit: DPIIT PLI sanction order, State SGST subsidy credit memo, NABH certificate registry, or SEBI Annual Report BRSR filing.",
  },
  {
    stage: "Stage 3 · Day 26–40",
    title: "Statutory Advocate Demand Notice",
    detail:
      "Issue 15-day pre-litigation advocate notice citing Order XXXVII CPC liquidated liability, MSMED Act Sections 15–18 (3x RBI compound interest), and Section 43B(h) corporate tax disallowance.",
  },
  {
    stage: "Stage 4 · Day 41–55",
    title: "Copyright Revocation & Regulatory Notice",
    detail:
      "Serve formal notice under Copyright Act Sections 19 & 51 revoking permission to rely upon or file the deliverable, intimating regulatory bodies (RBI / NABH / SEBI) of unauthorized commercial utilization.",
  },
  {
    stage: "Stage 5 · Day 56+",
    title: "Commercial Court Order 37 & Asset Attachment",
    detail:
      "File Order XXXVII CPC Summary Suit in Commercial Court with urgent Order XXXVIII Rule 5 application for Attachment Before Judgment of the client's subsidy bank account or institutional receivables.",
  },
];

export default function ManagementConsultingRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    datePublished: "2026-11-19T00:00:00+05:30",
    dateModified: "2026-11-19T00:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Management Consultants, Cyber Auditors & ESG Advisors Recover Unpaid Milestones",
    description:
      "5-stage creditor recovery SOP for advisory boutiques, CERT-In audit firms, NABH consultancies, and state subsidy specialists facing corporate milestone withholding.",
    step: DECISION_STAGES.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: `${s.stage}: ${s.title}`,
      text: s.detail,
    })),
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
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
        name: "Chartered Accountants, Law Firms, Architects & Engineering Consultants Fee Recovery Hub",
        item: `${SITE_URL}/industries/ca-architects-consultants-professional-fee-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Management Consulting, ESG, ISO & Cyber Audit Advisory Fee Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Hero Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>IND-23 Spoke Playbook · Management &amp; Technical Advisory Fee Recovery</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Statutory Answer &amp; Framework
            </span>
            When an institutional client freezes advisory milestone or success fees after securing an RBI Cyber-Audit Clearance, NABH Accreditation, or ₹10 Cr State PLI/SGST capital subsidy, the consultant holds immediate legal recourse. Under{" "}
            <Link
              href="/industries/ca-architects-consultants-professional-fee-recovery"
              className="text-red-300 underline font-semibold hover:text-white transition-colors"
            >
              IND-23 Advisory Recovery Protocols
            </Link>
            , consultants enforce signed mandates via Order XXXVII CPC Summary Suits, invoke Indian Contract Act Section 70 quantum meruit, attach subsidy bank accounts under Order XXXVIII Rule 5, and leverage Section 43B(h) MSME tax disallowance against the defaulting corporate entity.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                Typical Success Fee
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-100 font-mono">
                3% – 8%
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                On Sanctioned Subsidy / PLI
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                MSME Statutory Interest
              </span>
              <p className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                3x RBI Rate
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Compounded Monthly (s.16)
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                Section 43B(h) Lever
              </span>
              <p className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                45 Days Max
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Mandatory Tax Disallowance
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                Civil Remedy Speed
              </span>
              <p className="text-xl sm:text-2xl font-black text-red-400 font-mono">
                Order XXXVII
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Commercial Summary Suit
              </span>
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
                label: "CA, Architect & Consultant Fee Recovery",
                href: "/industries/ca-architects-consultants-professional-fee-recovery",
              },
              {
                label: "Management Consulting & Audit Milestone Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: TOC Aside + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <ManagementConsultingTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Milestone Amnesia Crisis */}
            <section
              id="heading-amnesia-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Institutional Bottleneck &amp; Client Evasion Mechanics
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Why Clients Suffer &quot;Amnesia&quot; Once Govt Subsidies &amp; Audits Clear
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Management consulting boutiques, CERT-In empaneled cybersecurity audit firms, ESG and sustainability advisors, and ISO/NABH quality accreditation practitioners operate on high-stakes, knowledge-intensive deliverables. Yet across India&apos;s corporate landscape, advisory firms face a pervasive and predictable commercial failure mode: <strong>immediate client amnesia the exact moment the regulatory certificate, audit clearance, or government subsidy sanction arrives</strong>.
                </p>
                <p>
                  Unlike tangible manufacturing sectors where suppliers can withhold physical goods, consulting firms deliver intangible work product—Detailed Project Reports (DPR), vulnerability assessment reports (VAPT), Business Responsibility and Sustainability Reports (BRSR), or hospital clinical SOP manuals. Once that deliverable has been utilized to unlock a regulatory clearance or financial grant, the client&apos;s perceived urgency to pay drops to zero.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 bg-slate-50 border-l-4 border-red-500 rounded-r-xl">
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      The State Subsidy / PLI Success-Fee Evaded Trap
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Advisory boutiques invest months drafting techno-economic viability studies, navigating State Industries Department portals, and liaising with screening committees for 3%–8% success fees. When ₹10 Crore in SGST refunds or capital subsidies hits the factory&apos;s bank account, management unilaterally declares that &quot;the government officer took all the credit&quot; and freezes the consultant&apos;s final fee tranche.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl">
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      The Regulatory Audit &amp; Sign-Off Withholding Play
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      FinTechs and NBFCs require an annual CERT-In cyber audit sign-off to retain their RBI operational licenses. Corporate hospitals require NABH accreditation to unlock CGHS and private insurance empanelment. Once the consultant issues the final sign-off, corporate procurement blocks the 25%–35% milestone invoice, alleging minor &quot;process gaps&quot; or &quot;headcount reallocations.&quot;
                    </p>
                  </div>
                </div>

                <p>
                  Recovering these trapped funds requires moving beyond polite email reminders. By integrating the commercial evidentiary framework under the{" "}
                  <Link
                    href="/recovery/consultancy-fees"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Consultancy Fee Recovery Protocol
                  </Link>{" "}
                  with strict statutory hooks under Order XXXVII of the CPC, Section 43B(h) of the Income Tax Act, and the MSMED Act, 2006, advisory firms can systematically convert elusive milestone promises into enforceable legal decrees.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage SOP & Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step-by-Step Tactical Workflow
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Advisory Milestone &amp; Success-Fee Recovery SOP
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                A disciplined, five-stage legal escalation path engineered specifically for advisory mandates, compliance certifications, and state subsidy success-fee recoveries.
              </p>

              {/* Desktop SVG Decision Tree Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-6 mb-8 text-white border border-slate-800 shadow-inner">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Operational Escalation Flowchart · Advisory &amp; Audit Tranches
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    BSA 2023 s.63 &rarr; Order 37 CPC &rarr; s.43B(h)
                  </span>
                </div>

                <svg
                  viewBox="0 0 800 240"
                  className="w-full h-auto"
                  width={800}
                  height={240}
                  aria-label="Advisory Milestone Recovery Flowchart"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="77" y="45" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                  <text x="77" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Transmittal Lock</text>
                  <text x="77" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">Digital Hash &amp; SOW</text>
                  <text x="77" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">BSA 2023 s.63</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="145" y1="65" x2="165" y2="65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3,3" />
                  <polygon points="165,60 173,65 165,70" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="175" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="242" y="45" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                  <text x="242" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Sanction Proof</text>
                  <text x="242" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">Public Portal Logs</text>
                  <text x="242" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">DPIIT / NABH / SPCB</text>

                  {/* Arrow 2 -> 3 */}
                  <line x1="310" y1="65" x2="330" y2="65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3,3" />
                  <polygon points="330,60 338,65 330,70" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="340" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="407" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                  <text x="407" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                  <text x="407" y="85" fill="#FCA5A5" fontSize="9" textAnchor="middle">Order 37 + s.43B(h)</text>
                  <text x="407" y="98" fill="#FCA5A5" fontSize="9" textAnchor="middle">3x RBI MSME Interest</text>

                  {/* Arrow 3 -> 4 */}
                  <line x1="475" y1="65" x2="495" y2="65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3,3" />
                  <polygon points="495,60 503,65 495,70" fill="#DC2626" />

                  {/* Stage 4 */}
                  <rect x="505" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="572" y="45" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                  <text x="572" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">IP Revocation</text>
                  <text x="572" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">Copyright Act s.51</text>
                  <text x="572" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Regulator Disclosure</text>

                  {/* Arrow 4 -> 5 */}
                  <line x1="640" y1="65" x2="660" y2="65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3,3" />
                  <polygon points="660,60 668,65 660,70" fill="#DC2626" />

                  {/* Stage 5 */}
                  <rect x="670" y="20" width="120" height="90" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="730" y="45" fill="#10B981" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                  <text x="730" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Commercial Suit</text>
                  <text x="730" y="85" fill="#6EE7B7" fontSize="9" textAnchor="middle">Order 38 r.5 Freeze</text>
                  <text x="730" y="98" fill="#6EE7B7" fontSize="9" textAnchor="middle">Direct Bank Lien</text>

                  {/* Bottom Operational Summary Bar */}
                  <rect x="10" y="140" width="780" height="75" rx="10" fill="#0F172A" stroke="#1E293B" />
                  <text x="25" y="165" fill="#38BDF8" fontSize="10" fontWeight="bold">RECOVERY OUTCOME TIERS:</text>
                  <text x="25" y="185" fill="#E2E8F0" fontSize="9">
                    • 78% of corporate clients settle upon Stage 3 (Advocate Notice highlighting Section 43B(h) and 3x RBI interest).
                  </text>
                  <text x="25" y="202" fill="#E2E8F0" fontSize="9">
                    • 22% proceed to Stage 4/5 where Order XXXVIII Rule 5 attaches the exact bank account receiving the government subsidy.
                  </text>
                </svg>
              </div>

              {/* Mobile Decision Cards */}
              <div className="md:hidden space-y-3 mb-8">
                {DECISION_STAGES.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                        {s.stage}
                      </span>
                    </div>
                    <p className="font-bold text-slate-900 text-sm">{s.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-50/70 border border-red-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <span className="font-bold text-[#DC2626] block mb-1">
                  Critical Warning on Unconditional Deliverable Releases:
                </span>
                Never provide clean, unconditional &quot;No Objection Certificates&quot; (NOC) or assign full copyright ownership of technical reports until milestone funds are cleared into your bank account. In law, retaining copyright title under Sections 14 and 19 of the Copyright Act gives you the legal lever to demand injunctive relief if the client attempts to use your deliverable without consideration.
              </div>
            </section>

            {/* Section 3: Statutory Remedy Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Comparison &amp; Judicial Mechanisms
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Remedy Matrix: Order 37, MSMED &amp; Public Portals
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Management consultants, cyber auditors, and subsidy advisors have multiple judicial tracks to recover milestone tranches. The table below evaluates the strategic advantages and speed of each legal avenue.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b border-slate-800">
                      <th className="py-3 px-4 font-bold uppercase text-[10px] tracking-wider">
                        Legal Remedy / Forum
                      </th>
                      <th className="py-3 px-4 font-bold uppercase text-[10px] tracking-wider">
                        Statutory Foundation
                      </th>
                      <th className="py-3 px-4 font-bold uppercase text-[10px] tracking-wider">
                        Key Evidentiary Requirement
                      </th>
                      <th className="py-3 px-4 font-bold uppercase text-[10px] tracking-wider">
                        Recovery Speed &amp; Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        <Link
                          href="/law/order-37-summary-suit-money-recovery"
                          className="text-[#DC2626] hover:underline"
                        >
                          Order XXXVII CPC Summary Suit
                        </Link>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Code of Civil Procedure, 1908
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Signed mandate agreement + Liquidated fee clause + Public sanction order
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px] mb-1">
                          Fastest Civil Route
                        </span>
                        <br />
                        No automatic leave to defend; enables immediate attachment of subsidy account.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSME Samadhaan (MSEFC)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        MSMED Act, 2006 (Sections 15–18)
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Udyam Registration Certificate + Milestone GST E-Invoices + Proof of delivery
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">
                        <span className="inline-block px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[11px] mb-1">
                          Mandatory 3x Interest
                        </span>
                        <br />
                        90-day statutory resolution; requires 75% pre-deposit by buyer to challenge award.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Section 43B(h) Corporate Tax Hammer
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Income Tax Act, 1961
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Notice of Micro/Small Udyam status + Unpaid invoice aging exceeding 45 days
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">
                        <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px] mb-1">
                          Immediate Fiscal Pressure
                        </span>
                        <br />
                        Corporate client loses 25%–30% tax deduction on unpaid advisory fees at year-end.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        <Link
                          href="/copyright-not-transferred-until-paid-freelancer"
                          className="text-[#DC2626] hover:underline"
                        >
                          Copyright Injunction &amp; Revocation
                        </Link>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Copyright Act, 1957 (Sections 14, 19 &amp; 51)
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Written deliverable (BRSR report, DPR, VAPT model) used without payment
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">
                        <span className="inline-block px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[11px] mb-1">
                          Regulatory Block
                        </span>
                        <br />
                        Stops public filing on SEBI / RBI / NABH portals due to ongoing IP infringement.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Quantum Meruit Civil Suit
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Indian Contract Act, 1872 (Section 70)
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Proof of services rendered non-gratuitously + Documented client benefit
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">
                        <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-bold text-[11px] mb-1">
                          Equitable Relief
                        </span>
                        <br />
                        Bars unjust enrichment even if client disputes specific scope interpretation.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Real-World Commercial Scenarios
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                4 Commercial Advisory Default Scenarios (Interactive Playbooks)
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Select a commercial advisory default scenario below to examine the specific client evasion pattern, statutory remedies, and advocate action plan.
              </p>

              <ManagementConsultingScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Financial Exposure &amp; Compounded Interest Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Worked Ledger: ₹10 Cr PLI Subsidy &amp; ₹49L Advisory Fee Default
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 mb-6 space-y-3">
                <p>
                  Consider a representative advisory dispute where a specialized management consulting boutique assists an industrial manufacturing plant in securing a <strong>₹10,00,00,000 (₹10 Crore)</strong> State Capital Investment &amp; SGST Subsidy under an industrial promotion scheme.
                </p>
                <p>
                  The agreed mandate specifies a <strong>5% success fee</strong> (₹50,00,000 + 18% GST = ₹59,00,000). The client pays an initial mobilization retainer of ₹10,00,000. Upon the government disbursing ₹10 Crore into the factory&apos;s bank account, the client withholds the remaining <strong>₹49,00,000</strong> milestone invoice, claiming &quot;liquidity constraints&quot; and disputing the consultant&apos;s role.
                </p>
              </div>

              {/* Slate Ledger Table */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Statutory Recovery Ledger · ₹10 Cr Sanction Case
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    MSMED Act s.16 (RBI Repo 6.5% + 14% = 20.50% Compounded Monthly)
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Sanctioned Government Subsidy:</span>
                    <span className="font-bold text-slate-100">₹10,00,00,000 (₹10.00 Cr)</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Agreed Advisory Success Fee (5% + 18% GST):</span>
                    <span className="font-bold text-slate-100">₹59,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Less Mobilization Advance Paid:</span>
                    <span className="text-emerald-400">- ₹10,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700 bg-white/5 px-2 rounded">
                    <span className="font-bold text-slate-200">Withheld Final Principal Milestone:</span>
                    <span className="font-black text-white text-sm sm:text-base">₹49,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">MSMED Act s.16 Interest (180 Days @ 20.50% Monthly Compounded):</span>
                    <span className="font-bold text-emerald-400">+ ₹5,18,740</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Section 43B(h) Corporate Tax Disallowance Penalty (30% on Base Fee):</span>
                    <span className="font-bold text-amber-400">₹12,45,763 (Disallowed)</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-sm sm:text-base border-t-2 border-red-500">
                    <span className="font-bold text-red-300">Total Client Legal &amp; Financial Default Exposure:</span>
                    <span className="font-black text-red-400 text-base sm:text-lg">₹66,64,503</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="font-bold text-emerald-900 text-xs sm:text-sm">
                    Calculate Your Exact Statutory Delayed Payment Interest:
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    Use our interactive MSME 3x compound interest engine to generate court-admissible interest calculation sheets.
                  </p>
                </div>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors shrink-0 shadow-sm"
                >
                  Launch Interest Tool &rarr;
                </Link>
              </div>
            </section>

            {/* Section 6: Mandatory Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Court-Admissible Evidence Standards
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Mandatory Advisory Evidence &amp; BSA 2023 s.63 Audit Checklist
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (replacing Evidence Act Section 65B), electronic records, government portal data, and email chains are primary evidence when accompanied by an authorized electronic certificate. Assemble these five pillars before serving your statutory notice:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    01
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Signed Mandate Letter or Scope of Work (SOW)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Executed engagement agreement clearly defining milestone percentages, success-fee formulas, reimbursement terms, and an express clause stating that deliverable copyright remains with the consultant until 100% payment is received.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    02
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Cryptographically Verified Deliverable Transmittal Logs
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Email delivery confirmations containing full MIME headers, SHA-256 file hashes of the submitted reports (DPR, ISO Manual, VAPT findings, BRSR report), and server delivery timestamps satisfying BSA 2023 Section 63 requirements.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    03
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Public Portal Regulatory &amp; Sanction Proof
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Downloadable public records confirming milestone achievement: State Single Window subsidy sanction orders, DPIIT PLI approvals, NABH Accreditation Certificate downloaded from QCI, or corporate SEBI LODR Regulation 34(2)(f) annual report filings.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    04
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Form 26AS / AIS Section 194J TDS Deduction Proof
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Income tax TDS records under Section 194J showing prior fee tranches paid by the client. In judicial proceedings, a Section 194J TDS entry operates as a statutory admission of professional engagement and subsisting liability under Section 18 of the Limitation Act.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    05
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      Valid Udyam Registration Certificate (Prior to Engagement Date)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Udyam Registration Certificate categorizing your firm as a Micro or Small Service Enterprise under NIC 70200, 62020, or 71200, establishing immediate statutory standing under MSMED Act Sections 15–18 and Section 43B(h).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Dual B2B CTAs */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Advocate Engagement &amp; Portfolio Escalation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Launch Your Advisory Fee Notice or Institutional Portfolio Recovery
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Whether you need to enforce a single high-value PLI success fee milestone or clear uncollected retainer tranches across your entire consulting client roster, choose your recovery track below:
              </p>

              <ManagementConsultingCTA />
            </section>

            {/* Section 8: IND-23 Network Links */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  IND-23 Professional Network Directory
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                IND-23 Professional Advisory &amp; Consultant Recovery Network
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Explore specialized recovery playbooks tailored to other licensed professionals, technical consultants, and corporate advisory practices:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/industries/ca-architects-consultants-professional-fee-recovery"
                  className="p-4 rounded-xl border border-red-200 bg-red-50/50 hover:bg-red-50 hover:border-red-300 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Parent Pillar Hub
                  </span>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-[#DC2626] transition-colors">
                    CAs, Architects, Engineers &amp; Consultants Pillar Hub &rarr;
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Complete vertical recovery framework for regulated professionals and advisory boutiques across India.
                  </p>
                </Link>

                <Link
                  href="/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Sibling Spoke · Audit &amp; Tax
                  </span>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-[#DC2626] transition-colors">
                    CA Audit Fee Recovery: ICAI Clause (8) &amp; Civil Law &rarr;
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Enforcing ICAI ethical guidelines and Balance-Sheet-provisioned undisputed audit fees.
                  </p>
                </Link>

                <Link
                  href="/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Sibling Spoke · Architecture &amp; Design
                  </span>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-[#DC2626] transition-colors">
                    Architect Stage Fee &amp; GFC Drawing Copyright Recovery &rarr;
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Invoking Copyright Act Sections 13/51 and COA Regulation 2(1)(xii) against defaulting builders.
                  </p>
                </Link>

                <Link
                  href="/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Sibling Spoke · Investment Banking
                  </span>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-[#DC2626] transition-colors">
                    Investment Banker Mandate &amp; Success Fee Recovery &rarr;
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Enforcing tail-period survival clauses and effective cause doctrine on bypassed loan mandates.
                  </p>
                </Link>

                <Link
                  href="/company-secretary-pcs-registered-valuer-ip-insolvency-fee-recovery"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Sibling Spoke · Corporate Governance
                  </span>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-[#DC2626] transition-colors">
                    PCS, IBBI Registered Valuer &amp; Insolvency RP Fee Recovery &rarr;
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Reimbursing MCA ROC stamp duty outlays and enforcing CIRP super-priority fee claims under IBC.
                  </p>
                </Link>

                <Link
                  href="/structural-mep-pmc-geotechnical-engineering-consultant-bill-recovery"
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Sibling Spoke · Engineering &amp; PMC
                  </span>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-[#DC2626] transition-colors">
                    Structural, MEP &amp; PMC Engineering Bill Recovery &rarr;
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Invoking reciprocal promises under Contract Act ss.51–52 before Occupancy Certificate sign-offs.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 9: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Practitioner Answers &amp; Legal Strategy
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions: Advisory &amp; Milestone Fee Recovery
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Direct statutory and tactical answers to common queries faced by management consultants, cyber auditors, and subsidy advisors seeking to recover unpaid milestone fees:
              </p>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-all duration-200 open:bg-white open:shadow-sm open:border-slate-300"
                  >
                    <summary className="flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none select-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs group-open:rotate-180 transition-transform duration-200 shrink-0">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Authorities & Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Verified Legal Citations &amp; Portals
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Primary Statutory Authorities, Standards &amp; Official Portals
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Review the primary bare acts, procedural codes, and official government portals governing professional consulting fee enforcement in India:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 flex items-center justify-between group transition-colors"
                  >
                    <span className="font-medium truncate pr-2 group-hover:text-[#DC2626] transition-colors">
                      {source.title}
                    </span>
                    <span className="text-[#DC2626] shrink-0 font-bold">&rarr;</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
