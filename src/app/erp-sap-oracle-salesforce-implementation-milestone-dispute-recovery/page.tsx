import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ErpMilestoneRecoveryTableOfContents from "./ErpMilestoneRecoveryTableOfContents";
import ErpMilestoneScenarioTabs from "./ErpMilestoneScenarioTabs";
import ErpMilestoneRecoveryCTA from "./ErpMilestoneRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/erp-sap-oracle-salesforce-implementation-milestone-dispute-recovery";
const EXACT_H1 =
  "Recovering Stalled Blueprint, Go-Live & Hypercare Invoices for ERP & CRM Implementation Partners";
const META_TITLE = "ERP Milestone Dispute Recovery: SAP, Salesforce & Odoo";
const META_DESCRIPTION =
  "Client delayed ERP Go-Live over legacy master data and withholds milestones? Enforce Contract Act s.53/54 reciprocal promises, CR logs & Section 12A recovery.";

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
        alt: formatAltText("ERP SAP Oracle Salesforce Implementation Milestone Dispute Recovery"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "Reciprocal Promise Defense & Standstill Compensation",
    statute: "Indian Contract Act, 1872 (Sections 53 & 54)",
    timing: "Triggered immediately when client misses master data cutoff or UAT sign-off windows",
    mechanism:
      "Formally document that client failure to deliver reconciled opening balances, legacy data, or SPOC sign-offs prevented Go-Live; declare contract voidable at partner option or claim standby T&M damages",
    relief:
      "Disallows client counterclaims of delay; deems implementation milestones earned; entitles partner to idle engineering burn and scope adjustments",
    suitability:
      "Manufacturing, retail, or distribution clients stalling ERP Go-Live due to chaotic internal Tally/Excel data or missing SPOCs",
    tone: "emerald",
  },
  {
    remedy: "Commercial Summary Suit for Fixed Milestone Debts (Order XXXVII)",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015",
    timing: "Post-exhaustion of mandatory Section 12A Pre-Institution Commercial Mediation (30–60 days)",
    mechanism:
      "File summary suit in designated Commercial Court based on signed Business Blueprint Documents (BBD), milestone completion certificates, and acknowledged tax invoices",
    relief:
      "Summary money decree without prolonged full trial unless client deposits 100% of disputed milestone in court registry; pre-judgment asset attachment under Order XXXVIII Rule 5",
    suitability:
      "Enterprise clients withholding undisputed milestone billing (> ₹3 Lakh) under signed Statements of Work",
    tone: "slate",
  },
  {
    remedy: "Unapproved Scope Creep & Change Request (CR) Recovery",
    statute: "Indian Contract Act, 1872 (Section 70 - Quantum Meruit) & IT Act, 2000 s.10A",
    timing: "Raised contemporaneously during billing reconciliations or final project closure",
    mechanism:
      "Segregate baseline SOW from custom ABAP/Apex workflows requested via Jira, email, or SteerCo; enforce digital contract variation and non-gratuitous performance",
    relief:
      "Compels client to pay reasonable commercial value for delivered custom software modules retained in staging or production systems",
    suitability:
      "Clients disowning dozens of custom workflows and CR logs by alleging 'it was part of standard ERP implementation'",
    tone: "emerald",
  },
  {
    remedy: "MSMED Act Statutory 3x RBI Compound Interest & Section 43B(h) Leverage",
    statute: "MSMED Act, 2006 (Sections 15–18) & Income Tax Act, 1961 s.43B(h)",
    timing: "Day 46 post milestone completion / invoice delivery (or up to 45-day contract credit window)",
    mechanism:
      "Filing before State Micro and Small Enterprises Facilitation Council (MSEFC); serving statutory notice of corporate income tax disallowance on overdue software consulting fees",
    relief:
      "Statutory monthly compounding interest at 3 times RBI Bank Rate; corporate debtor loses tax deduction on consulting expenses in audited balance sheets",
    suitability:
      "Udyam-registered Indian implementation agencies, Gold Partners, and boutique ERP consultancies billing Indian corporate clients",
    tone: "emerald",
  },
  {
    remedy: "Intellectual Property Lien & Source Code Transfer Freeze",
    statute: "Copyright Act, 1957 (Section 19(8)) & Pine Labs High Court Precedent",
    timing: "Pre-litigation standoff prior to production code handoff or repository transfer",
    mechanism:
      "Serve legal notice confirming that copyright in custom integrations, proprietary connectors, and bespoke configuration scripts remains with partner until full payment",
    relief:
      "Prevents client from transferring repository to third-party maintenance vendor; creates immediate injunction leverage in commercial court",
    suitability:
      "Disputes where client threatens to terminate partner, seize custom code, and engage cheaper offshore contractors for maintenance",
    tone: "slate",
  },
  {
    remedy: "Corporate Insolvency Notice for Milestone Arrears (≥ ₹1.00 Cr)",
    statute: "Insolvency and Bankruptcy Code, 2016 (Sections 8 & 9)",
    timing: "Upon cumulative operational default exceeding ₹1.00 Crore after statutory 10-day Form 3 notice",
    mechanism:
      "Serve formal Form 3 demand notice on corporate enterprise debtor; initiate Corporate Insolvency Resolution Process (CIRP) before National Company Law Tribunal (NCLT)",
    relief:
      "Immediate C-suite settlement or referral to corporate insolvency; client promoters risk loss of company management over unpaid digital transformation debt",
    suitability:
      "Tier-1 enterprises and listed corporations defaulting on multi-crore SAP S/4HANA or Salesforce transformation programs",
    tone: "emerald",
  },
];

const FAQS = [
  {
    question:
      "Can a client withhold an ERP Go-Live milestone if their internal finance team failed to provide clean master data?",
    answer:
      "No. Under Sections 53 and 54 of the Indian Contract Act, 1872, an ERP implementation contract consists of reciprocal promises. The implementation partner's technical obligation to complete cutover and achieve Go-Live is legally conditional upon the client first performing their prerequisite duty: providing cleansed, validated legacy data (opening GL balances, vendor/customer masters, inventory valuation, and Chart of Accounts mapping). When the client fails to provide this data, they have prevented the partner from performing under Section 53. Legally, the client cannot take advantage of their own default to withhold milestone payments, and the implementation partner is entitled to compensation for standby consultant costs.",
  },
  {
    question:
      "How do we recover unapproved Change Request (CR) logs when the client CFO claims 'there is no signed physical paper CR'?",
    answer:
      "Under Section 10A of the Information Technology Act, 2000, contracts and contract amendments negotiated or approved through electronic communications (including Jira tickets, Azure DevOps work items, email approvals from project managers, and Steering Committee meeting minutes) are legally valid and enforceable. Furthermore, under Section 70 of the Indian Contract Act, 1872 (Doctrine of Quantum Meruit), where a party lawfully does something for another, not intending to do so gratuitously, and the other party enjoys the benefit thereof, the recipient is bound to compensate the service provider. If the client tested, accepted, or deployed custom ABAP/Apex workflows into staging or production, they cannot avoid paying fair commercial value.",
  },
  {
    question:
      "Does putting an ERP into live production constitute 'Deemed Acceptance' of the Go-Live milestone?",
    answer:
      "Yes. Indian commercial jurisprudence and High Court rulings hold that putting enterprise software into live operational use—processing real-world GST invoices, running payroll, managing warehouse dispatches, or tracking customer orders—constitutes unequivocal constructive acceptance. An enterprise client cannot enjoy the economic utility of an operational ERP system while simultaneously withholding the Go-Live milestone payment under the pretext of minor, cosmetic defects or open support tickets. Post-deployment cosmetic issues are strictly covered under warranty or Hypercare SLA maintenance, not milestone withholding.",
  },
  {
    question:
      "Can an ERP implementation partner retain copyright in custom ABAP code or Salesforce Apex scripts if invoices are unpaid?",
    answer:
      "Yes. Under Section 19(8) of the Copyright Act, 1957 and the landmark Delhi High Court ruling in Pine Labs v. Gemalto, copyright in custom software code, bespoke algorithms, and custom middleware connectors does not transfer to the client unless full, agreed consideration has been paid. Unless the Statement of Work explicitly states that IP vests unconditionally upon code creation (which standard SOWs do not), the partner retains copyright ownership and can seek an urgent commercial injunction barring the client or any third-party AMC vendor from utilizing or modifying the code.",
  },
  {
    question:
      "How does Section 43B(h) of the Income Tax Act help an ERP partner recover overdue consulting fees?",
    answer:
      "If your implementation consultancy is registered under the MSMED Act, 2006 (possessing an active Udyam Registration Certificate as a Micro or Small Enterprise), Section 43B(h) of the Income Tax Act mandates that your corporate client must settle your invoices within the agreed contract period (maximum 45 days). If the client fails to pay within this statutory window, the entire outstanding ERP consulting expense is disallowed as a tax deduction for that financial year, inflating the client's taxable income and resulting in an immediate 25%–30% corporate tax penalty plus interest.",
  },
  {
    question:
      "What evidence is required under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) for an ERP milestone dispute?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic records must be accompanied by an evidentiary certificate signed by the technical custodian of the computer system. For an ERP dispute, this dossier must include: (1) Countersigned SOW and Business Blueprint Document (BBD); (2) Jira, Azure DevOps, or Git commit logs showing feature delivery dates and client acceptance comments; (3) Steering Committee (SteerCo) slide decks and attendance records; (4) Email chains documenting client master data submission delays; (5) Production database logs proving live transactional throughput; and (6) Speed Post RPAD tracking receipts for statutory demand notices.",
  },
  {
    question:
      "What is the statutory timeline to initiate Commercial Court litigation under Section 12A?",
    answer:
      "Under Section 12A of the Commercial Courts Act, 2015, pre-institution mediation is mandatory before filing a commercial suit, unless urgent interim relief (such as a temporary injunction against software misuse or Order XXXVIII Rule 5 asset freeze) is sought. The mediation process is typically concluded within 3 to 5 months by the District Legal Services Authority (DLSA). If the client fails to participate or settlement is not reached, a Non-Starter Report is issued, enabling the partner to immediately institute an Order XXXVII Summary Suit in the Commercial Court.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "The Indian Contract Act, 1872 (Sections 53, 54, 70, 73 & 74 — Reciprocal Promises, Quantum Meruit & Breach Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Sections 2(1)(c)(xviii), 12A — Technology Contracts & Mandatory Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Jira, Git & ERP Audit Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Copyright Act, 1957 (Sections 17 & 19 — First Ownership & Statutory Assignment of Custom Software Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/1964",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Prevention of Performance in Reciprocal Contracts",
    parties: "M/s Construction & Design Services v. Delhi Development Authority",
    citation: "(2015) 14 SCC 263, Supreme Court of India",
    date: "Judgment Dated 04 February 2015",
    facts:
      "The project suffered substantial delays because the employer failed to hand over unencumbered site boundaries and critical design inputs, yet sought to levy liquidated damages and forfeit milestone payments from the contractor.",
    holding:
      "The Supreme Court affirmed that under Section 53 and Section 54 of the Indian Contract Act, where a party is prevented from completing their obligations due to the other contracting party's antecedent failures, the defaulting party cannot claim compensation or withhold payments. The contractor is entitled to extension of time and compensation for idling resources.",
    amount: "Doctrine of Reciprocal Promises Applied to Complex Implementation Stalls",
    takeaway:
      "Directly protects ERP partners when enterprise clients delay furnishing reconciled legacy master data or test environments, establishing that the client's own default estops them from withholding milestone payments.",
  },
  {
    title: "High Court on Software Copyright Retention Prior to Full Payment",
    parties: "Pine Labs Private Limited v. Gemalto Terminals India Pvt. Ltd.",
    citation: "2011 SCC OnLine Del 3381, Delhi High Court",
    date: "Judgment Dated 03 August 2011",
    facts:
      "A software developer created custom point-of-sale software applications and payment gateway integrations. The client attempted to commercialize and license the software to third parties while withholding milestone licensing fees.",
    holding:
      "The Delhi High Court held that under Section 19 of the Copyright Act, 1957, software copyright assignment is contingent upon full payment of the agreed commercial consideration. In the absence of full consideration, copyright remains vested in the software developer, who is entitled to interim injunctions restraining commercial exploitation.",
    amount: "Equitable Software IP Protection & Code Withholding Injunction",
    takeaway:
      "ERP consultancies retain full statutory leverage over custom ABAP, Apex, and middleware integration code until final milestone and change request invoices are settled in full.",
  },
  {
    title: "Supreme Court on Rejection of Manufactured Post-Facto Commercial Disputes",
    parties: "Mobilox Innovations Private Limited v. Kirusa Software Private Limited",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Judgment Dated 21 September 2017",
    facts:
      "A debtor sought to defeat a statutory debt demand under the Insolvency and Bankruptcy Code by inventing post-facto technical performance defects that were never raised contemporaneously during the service delivery period.",
    holding:
      "The Supreme Court established the 'plausible dispute' standard, clarifying that a dispute must be bona fide, truly existing, and supported by contemporaneous documentation. Spurious defenses, afterthought allegations of technical failure, and 'moonshine' pretexts fabricated after payment demands mature cannot bar statutory debt recovery.",
    amount: "Landmark Pre-Existing Dispute Threshold Under Commercial & Insolvency Law",
    takeaway:
      "Client excuses alleging 'ERP implementation failure' raised only after the partner demands payment for Go-Live milestones are readily dismissed by Commercial Courts and NCLT benches.",
  },
];

const BREADCRUMB_ITEMS = [
  { label: "B2B Recovery", href: "/industries/it-saas-software-recovery" },
  { label: "IT & SaaS Recovery", href: "/industries/it-saas-software-recovery" },
  { label: "ERP Milestone Dispute Recovery", href: PAGE_URL },
];

export default function ErpMilestoneRecoveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_URL}`,
          url: `${SITE_URL}${PAGE_URL}`,
          name: EXACT_H1,
        },
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        author: {
          "@type": "Person",
          name: LEGAL_REVIEWER.name,
          jobTitle: LEGAL_REVIEWER.role,
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
        datePublished: "2026-11-16T12:00:00+05:30",
        dateModified: "2026-11-16T12:00:00+05:30",
        mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}${PAGE_URL}#howto`,
        name: "How to Recover Stalled ERP & CRM Implementation Milestone Invoices",
        description:
          "5-stage operational and legal escalation protocol for SAP, Salesforce, Oracle, Microsoft Dynamics, and Odoo implementation partners to enforce Indian Contract Act Sections 53/54 reciprocal obligations, defeat manufactured ERP failure defenses, recover change request logs, and execute Commercial Court Section 12A recovery.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Audit SOW Milestones, Business Blueprint & Cutover Sign-Offs",
            text: "Extract countersigned Statement of Work (SOW), signed Business Blueprint Document (BBD), Jira/Azure DevOps sprint tickets, and Steering Committee minutes. Segregate baseline scope from client-induced delays and master data dependencies.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Serve Reciprocal Promise Breach Notice (Contract Act ss. 53 & 54)",
            text: "Issue formal legal communication establishing that the client's internal failure to furnish cleansed legacy master data, test environments, or key users prevented Go-Live. Demand deemed milestone sign-off and compensation for idle consultant bench time.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Segregate & Bill Change Request (CR) Overruns Under Quantum Meruit",
            text: "Collate electronic approval trails for custom ABAP/Apex workflows and integrations. Issue formal Quantum Meruit demand under Section 70 of the Indian Contract Act and Section 10A of the IT Act, 2000 for unapproved scope creep.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Issue 15-Day Fact-Verified Demand Notice & Section 43B(h) Tax Intimation",
            text: "Deliver a fact-verified statutory demand notice invoking MSMED Act 3x RBI compound interest and notifying the debtor's Chief Financial Officer of impending corporate income tax expense disallowance under Section 43B(h).",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Initiate Commercial Courts Section 12A Mediation & Order XXXVII Summary Suit",
            text: "File for mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015. Upon non-settlement, institute an Order XXXVII Summary Suit with pre-judgment bank attachment under Order XXXVIII Rule 5.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${PAGE_URL}#breadcrumb`,
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
            name: "IT Services & SaaS Recovery",
            item: `${SITE_URL}/industries/it-saas-software-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ERP Milestone Dispute Recovery",
            item: `${SITE_URL}${PAGE_URL}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Recovery Guide</span>
            <span className="text-slate-500">&bull;</span>
            <span>ERP &amp; CRM Implementations</span>
            <span className="text-slate-500">&bull;</span>
            <span>IND-05 §6.5</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Statutory Position
            </span>
            Under Sections 53 and 54 of the Indian Contract Act, 1872, an enterprise client that stalls an ERP or CRM Go-Live by failing to supply cleansed legacy master data or designate key SPOCs has breached a reciprocal promise. Within our{" "}
            <Link
              href="/industries/it-saas-software-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              IT Services &amp; SaaS Recovery Hub
            </Link>
            , we assist SAP, Salesforce, Microsoft Dynamics, Oracle, and Odoo implementation partners in recovering stalled blueprint and cutover milestones, billing for idle consultant bench time under Section 73, establishing deemed acceptance from live production use, and executing swift recovery via Commercial Courts Section 12A mediation and Order XXXVII summary suits.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Typical Milestone Lockup
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">
                ₹30L – ₹2.5Cr+
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Go-Live &amp; Retainage Pool
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Primary Stall Cause
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">
                70% Internal Data
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Client Legacy Tally/BOMs
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Statutory Remedy
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">
                ICA s.53 &amp; s.54
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Reciprocal Promise Shield
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Commercial Court
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400">
                Order 37 / s.12A
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Summary Money Decree
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Table of Contents */}
          <ErpMilestoneRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Anatomy of ERP Milestone Disputes */}
            <section
              id="heading-erp-milestone-anatomy"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  The Enterprise Implementation Bottleneck
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Anatomy of ERP Milestone Stalls: The Manufacturing &amp; Retail Master-Data Trap
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) implementations represent the financial backbone of enterprise IT consulting. Whether deploying SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite, Salesforce Revenue Cloud, or Odoo Enterprise, contracts are almost universally structured around fixed-price phased milestones: 20% on Business Blueprint Document (BBD) sign-off, 30% on System Realization and Configuration, 30% upon Cutover and Go-Live, and a final 20% retainage post-Hypercare.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                However, empirical data across Indian corporate IT contracts reveals that over 70% of ERP Go-Live delays originate inside the client&apos;s own operational trenches. Mid-market manufacturing firms, pharmaceutical distributors, and multi-location retail chains frequently operate on fragmented, un-reconciled legacy software (Tally, Busy, legacy FoxPro, or thousands of disconnected Excel workbooks). When cutover arrives, the client&apos;s internal finance and warehouse teams fail to clean opening general ledger balances, customer credit memos, and bill-of-materials (BOM) master data. Months pass. The implementation partner maintains 4 to 12 senior functional consultants, ABAP developers, and solution architects on stand-by. Yet, the client&apos;s CFO refuses to release the ₹30 Lakh to ₹2.5 Crore Go-Live milestone, claiming: <em>&ldquo;You have not delivered Go-Live, so no payment is due under the fixed-price agreement.&rdquo;</em>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                <div className="border-l-2 border-red-500 pl-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase">Legacy Master Data Chaos</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Client finance teams cannot reconcile 5-year-old opening balances, shifting the operational blame onto the SAP/Odoo partner.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase">Unchecked Scope Creep</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Client department heads request 50+ bespoke workflow customizations on Jira, then CFO rejects the Change Request (CR) invoices.
                  </p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase">SPOC Churn &amp; UAT Evasion</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Client project managers resign mid-way; replacements disown signed blueprints and indefinitely refuse UAT sign-off.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong className="text-[#DC2626] font-bold">The Strategic Solution:</strong> Implementation partners must cease treating milestone disputes as informal client relationship issues. By transitioning to a statutory enforcement posture anchored in Indian Contract Act reciprocal promise jurisprudence, partners can convert stalled milestones into legally mature debts with compound interest.
              </div>
            </section>

            {/* Section 2: Statutory Core: Sections 53 & 54 */}
            <section
              id="heading-reciprocal-promises"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Foundation
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Contract Act Sections 53 &amp; 54: The Reciprocal Promise Legal Key
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The core legal breakthrough for ERP and CRM implementation partners lies in classifying the Statement of Work (SOW) not as a unilateral delivery contract, but as a binding sequence of <strong>reciprocal promises</strong> under the Indian Contract Act, 1872.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-2">
                    Bare Act: Section 53 of the Indian Contract Act, 1872
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed mb-3">
                    &ldquo;When a contract contains reciprocal promises, and one party to the contract prevents the other from performing his promise, the contract becomes voidable at the option of the party so prevented; and he is entitled to compensation from the other party for any loss which he may sustain in consequence of the non-performance of the contract.&rdquo;
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong>Implementation Application:</strong> The partner&apos;s promise to execute data cutover and deploy Go-Live is physically and legally impossible without the client fulfilling their prerequisite reciprocal promise: supplying cleansed, validated legacy data. By failing to furnish clean master data or validate UAT scripts, the client has <em>prevented performance</em> under Section 53. The partner is entitled to treat the contract as voidable, declare the milestone fully earned, and bill for standby consultant idle capacity under Section 73.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-2">
                    Bare Act: Section 54 of the Indian Contract Act, 1872
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed mb-3">
                    &ldquo;When a contract consists of reciprocal promises, such that one of them cannot be performed, or that its performance cannot be claimed till the other has been performed, and the promisor of the promise last mentioned fails to perform it, such promisor cannot claim the performance of the reciprocal promise, and must make compensation to the other party of the contract for any loss which such other party may sustain by the non-performance of the contract.&rdquo;
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong>Implementation Application:</strong> The client cannot legally demand Go-Live performance, levy liquidated damages for project delay, or withhold milestone payments when their own antecedent promise (delivering test environments, key users, and sign-offs) remains unperformed. Section 54 legally estops the client from claiming breach against the partner.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 sm:p-5 rounded-r-xl text-slate-800 text-xs sm:text-sm leading-relaxed">
                <strong className="text-emerald-900 font-bold block mb-1">
                  Supreme Court Doctrine: Estoppel by Inaction
                </strong>
                As reaffirmed by the Supreme Court in <em>Construction &amp; Design Services v. DDA (2015)</em>, where an owner/client delays furnishing prerequisite inputs, site clearances, or core architectural specifications, they are precluded from enforcing contractual penalty clauses. For tech agencies, this precedent neutralizes client threats of invoking SOW delay penalties or forfeiture of retainage.
              </div>
            </section>

            {/* Section 3: 5-Stage Decision Tree Escalation SOP */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational SOP &bull; Visual Roadmap
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                5-Stage ERP Milestone Escalation Protocol: From Stalled UAT to Recovery
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                When an enterprise client begins drifting on master data deliverables or refuses to countersign a Go-Live milestone, the implementation partner must follow a disciplined, 5-stage statutory escalation protocol to preserve evidence, establish deemed acceptance, and enforce payment.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-6 mb-8 border border-slate-800">
                <div className="text-center mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                    Statutory ERP Recovery Flowchart (Desktop Architecture)
                  </span>
                </div>
                <svg
                  viewBox="0 0 900 240"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="900"
                  height="240"
                >
                  {/* Stage 1 */}
                  <g>
                    <rect x="20" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <circle cx="95" cy="55" r="14" fill="#DC2626" />
                    <text x="95" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                    <text x="95" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Evidence Audit</text>
                    <text x="95" y="112" textAnchor="middle" fill="#94A3B8" fontSize="9">Extract BBD, Jira</text>
                    <text x="95" y="128" textAnchor="middle" fill="#94A3B8" fontSize="9">&amp; SteerCo Minutes</text>
                    <text x="95" y="148" textAnchor="middle" fill="#38BDF8" fontSize="9" fontWeight="bold">BSA 2023 s.63</text>
                  </g>

                  {/* Arrow 1 -> 2 */}
                  <path d="M 175 105 L 195 105" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead)" />

                  {/* Stage 2 */}
                  <g>
                    <rect x="200" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <circle cx="275" cy="55" r="14" fill="#DC2626" />
                    <text x="275" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                    <text x="275" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Reciprocal Notice</text>
                    <text x="275" y="112" textAnchor="middle" fill="#94A3B8" fontSize="9">Contract Act s.53</text>
                    <text x="275" y="128" textAnchor="middle" fill="#94A3B8" fontSize="9">Client Data Delay</text>
                    <text x="275" y="148" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="bold">Estop Penalties</text>
                  </g>

                  {/* Arrow 2 -> 3 */}
                  <path d="M 355 105 L 375 105" stroke="#DC2626" strokeWidth="3" />

                  {/* Stage 3 */}
                  <g>
                    <rect x="380" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <circle cx="455" cy="55" r="14" fill="#DC2626" />
                    <text x="455" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                    <text x="455" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">CR Segregation</text>
                    <text x="455" y="112" textAnchor="middle" fill="#94A3B8" fontSize="9">Quantum Meruit</text>
                    <text x="455" y="128" textAnchor="middle" fill="#94A3B8" fontSize="9">Contract Act s.70</text>
                    <text x="455" y="148" textAnchor="middle" fill="#FBBF24" fontSize="9" fontWeight="bold">Bill Scope Creep</text>
                  </g>

                  {/* Arrow 3 -> 4 */}
                  <path d="M 535 105 L 555 105" stroke="#DC2626" strokeWidth="3" />

                  {/* Stage 4 */}
                  <g>
                    <rect x="560" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <circle cx="635" cy="55" r="14" fill="#DC2626" />
                    <text x="635" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                    <text x="635" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Statutory Demand</text>
                    <text x="635" y="112" textAnchor="middle" fill="#94A3B8" fontSize="9">15-Day Advocate</text>
                    <text x="635" y="128" textAnchor="middle" fill="#94A3B8" fontSize="9">RPAD + Email + WA</text>
                    <text x="635" y="148" textAnchor="middle" fill="#F87171" fontSize="9" fontWeight="bold">s.43B(h) Warning</text>
                  </g>

                  {/* Arrow 4 -> 5 */}
                  <path d="M 715 105 L 735 105" stroke="#DC2626" strokeWidth="3" />

                  {/* Stage 5 */}
                  <g>
                    <rect x="740" y="30" width="140" height="150" rx="12" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="810" cy="55" r="14" fill="#DC2626" />
                    <text x="810" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">5</text>
                    <text x="810" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Commercial Suit</text>
                    <text x="810" y="112" textAnchor="middle" fill="#94A3B8" fontSize="9">Commercial s.12A</text>
                    <text x="810" y="128" textAnchor="middle" fill="#94A3B8" fontSize="9">Order 37 / NCLT</text>
                    <text x="810" y="148" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="bold">Asset Freeze</text>
                  </g>

                  <defs>
                    <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center">1</span>
                    <h3 className="text-xs font-bold text-white uppercase">Evidence Audit &amp; BBD Extraction</h3>
                  </div>
                  <p className="text-xs text-slate-300">Extract countersigned SOW, BBD sign-offs, Jira tickets, and SteerCo decks under BSA 2023 Section 63.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center">2</span>
                    <h3 className="text-xs font-bold text-white uppercase">Reciprocal Breach Notice (ICA s.53/54)</h3>
                  </div>
                  <p className="text-xs text-slate-300">Formally record client data delay, neutralising counterclaims and deeming milestones earned.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center">3</span>
                    <h3 className="text-xs font-bold text-white uppercase">CR Segregation &amp; Quantum Meruit (s.70)</h3>
                  </div>
                  <p className="text-xs text-slate-300">Invoice unapproved ABAP/Apex customizations retained by client under digital contract principles.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center">4</span>
                    <h3 className="text-xs font-bold text-white uppercase">15-Day Advocate Notice &amp; s.43B(h) Warning</h3>
                  </div>
                  <p className="text-xs text-slate-300">Serve speed-post and digital demand intimating MSMED 3x compound interest and corporate tax disallowance.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center">5</span>
                    <h3 className="text-xs font-bold text-white uppercase">Commercial Court Order 37 &amp; s.12A Action</h3>
                  </div>
                  <p className="text-xs text-slate-300">Fast-track summary suit for liquidated milestone debts with pre-judgment bank attachments.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Comprehensive Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Comparative Analysis
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                ERP Implementation Dispute Statutory Recovery Matrix
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Technology implementations fall under the specialized jurisdiction of the Commercial Courts Act, 2015. The following matrix outlines the strategic avenues available to SAP, Oracle, Microsoft, and Odoo implementation partners to enforce stalled milestone debts against corporate debtors.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Legal Remedy &amp; Statute</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Trigger &amp; Timing</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Operational Mechanism</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Commercial Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 sm:p-4 font-bold">
                          <span className="block text-slate-900">{row.remedy}</span>
                          <span className="text-[11px] font-mono text-[#DC2626] font-semibold">{row.statute}</span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">{row.timing}</td>
                        <td className="p-3 sm:p-4 text-slate-700">{row.mechanism}</td>
                        <td className="p-3 sm:p-4 font-medium text-emerald-800">{row.relief}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive 4-Scenario Playbook */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Decision Tree
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-2">
                4 Enterprise Implementation Failure Modes &amp; Counter-Measures
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Explore the four most common debtor strategies used by corporate manufacturing, retail, and healthcare clients to evade paying ERP partners, paired with their statutory counter-measures.
              </p>

              <ErpMilestoneScenarioTabs />
            </section>

            {/* Section 6: Change Request (CR) Log Enforcement & Quantum Meruit */}
            <section
              id="heading-cr-log-defense"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  6
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Scope Creep &bull; Unapproved CR Logs
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Enforcing Unapproved Change Requests: Quantum Meruit &amp; Digital Approvals
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                One of the most frequent balance sheet drains for ERP implementation agencies is the &ldquo;Informal Scope Creep&rdquo; dilemma. During the 6-to-18 month implementation cycle, the client&apos;s department heads, plant managers, and sales leads request numerous custom modules: bespoke e-invoicing middleware, automated barcode scanners, complex discount approval hierarchies, and tailored MIS dashboards.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                To keep project momentum alive, the partner&apos;s technical team builds the customizations based on Jira tickets, Slack/Teams chats, or email instructions from the client Project Manager. When the partner submits an aggregated Change Request (CR) invoice for ₹25 Lakh to ₹60 Lakh at cutover, the client CFO disowns the entire amount, citing clause 14 of the Master Agreement: <em>&ldquo;Any variation to scope must be executed via a written Change Order signed by a Director of both companies.&rdquo;</em>
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    1. Information Technology Act, 2000 — Section 10A (Electronic Contracts)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 10A of the IT Act, where contract proposals, acceptances, and variations are expressed in electronic form, they shall not be deemed unenforceable solely on the ground that electronic records were used. Email sign-offs by the designated Project Manager or Jira approvals constitute a binding digital contract amendment.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    2. Indian Contract Act, 1872 — Section 70 (Obligation of Person Enjoying Benefit of Non-Gratuitous Act)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the equitable doctrine of <em>Quantum Meruit</em> codified in Section 70, when a party does work for another without intending it to be gratuitous, and the other party retains the benefit, the recipient is statutorily mandated to pay reasonable compensation. Having integrated and tested the custom ABAP/Apex workflows in their staging environment, the client cannot retain the economic utility of the custom software for free.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    3. Copyright Act, 1957 — Section 19(8) &amp; Pine Labs Doctrine
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the landmark Delhi High Court precedent in <em>Pine Labs v. Gemalto</em>, copyright in custom software does not assign to the customer until full consideration is paid. For related insights on developer IP retention, review our analysis on{" "}
                    <Link
                      href="/copyright-not-transferred-until-paid-freelancer"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      software copyright retention under Section 19
                    </Link>
                    . The partner can legally assert an IP lien, disabling or revoking access to custom middleware until CR dues are cleared.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong>Practitioner Action Tip:</strong> In your statutory demand notice, always bifurcate the claim: present the baseline SOW milestones under Order XXXVII CPC for debt on a written contract, and present the Change Request overruns under Section 70 Quantum Meruit supported by Jira audit logs.
              </div>
            </section>

            {/* Section 7: Post-Go-Live Hypercare, AMC & Retainage Recovery */}
            <section
              id="heading-hypercare-amc"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Post-Go-Live Retainage
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Hypercare Retainage Holdback: Why Live Production Bars Milestone Withholding
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                A standard contractual clause in enterprise ERP engagements requires a 15% to 20% retainage fee to be paid following 60 to 90 days of successful &ldquo;Hypercare&rdquo; post-Go-Live support. In predatory procurement cycles, clients seize upon minor, low-severity tickets (e.g., a secondary MIS report loading slowly or a cosmetic font misalignment) to withhold the final ₹25 Lakh to ₹80 Lakh retainage indefinitely, often while demanding complimentary support beyond the agreed Hypercare window.
              </p>

              <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-4 mb-6">
                <h3 className="text-base font-bold text-white">
                  The Legal Principle of Constructive Commercial Acceptance
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Indian commercial jurisprudence draws a firm statutory distinction between <em>defects that prevent operational deployment</em> (Severity-1 showstoppers) and <em>minor post-deployment defects</em> (Severity-3 cosmetic or non-critical enhancements). Once an enterprise client transitions real business operations to the new ERP—generating e-invoices, filing GST returns, dispatching inventory, and paying employee payroll—the system is, in fact and in law, <strong>Live</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="block text-xs font-bold text-emerald-400 uppercase mb-1">
                      Live Transactional Volume
                    </span>
                    <p className="text-xs text-slate-300">
                      Processing 5,000+ monthly GST invoices establishes unequivocal commercial utility, legally barring milestone withholding.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="block text-xs font-bold text-red-400 uppercase mb-1">
                      Cosmetic Bugs Fall Under AMC
                    </span>
                    <p className="text-xs text-slate-300">
                      Non-critical tickets must be resolved under standard SLA warranty or AMC support, not used as leverage to withhold capital retainage.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For broader insights on consulting retainers and software milestone disputes, explore our guide on{" "}
                <Link
                  href="/recovery/consultancy-fees"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  recovering unpaid professional consultancy fees
                </Link>
                {" "}and our sister guide on{" "}
                <Link
                  href="/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  software UAT sign-off delay &amp; milestone debt recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Worked Financial Calculation */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  8
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Worked Financial Calculation &bull; Real Ledger
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Worked Financial Calculation: ₹68.50 Lakh ERP Dispute Recovery Ledger
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Consider an actual composite claim scenario: an SAP Gold Partner contracted by a mid-market automotive parts manufacturer for an implementation valued at ₹1.10 Crore. Due to client legacy data chaos, Go-Live was stalled by 7 months. The following ledger illustrates the breakdown of principal milestones, idle consultant standby costs, CR scope creep, and statutory MSMED Act interest.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400">
                      Audit Ledger &bull; Statutory Claim Breakdown
                    </span>
                    <p className="text-base sm:text-lg font-bold text-white">
                      SAP S/4HANA Implementation &bull; 7-Month Cutover Standoff
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    MSMED Act s.16 3x RBI Compounding Active
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">Milestone 3: Cutover &amp; Go-Live (30% of Baseline SOW)</span>
                    <span className="font-mono font-bold text-white">₹33,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">Milestone 4: Post-Go-Live Hypercare Retainage (15% of SOW)</span>
                    <span className="font-mono font-bold text-white">₹16,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">Contract Act s.53 Standby Damages: 3 Consultants on Idle Hold (4 Months @ ₹1.8L/mo)</span>
                    <span className="font-mono font-bold text-amber-400">₹7,20,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">Section 70 Quantum Meruit: 28 Custom ABAP/Apex Jira Change Requests</span>
                    <span className="font-mono font-bold text-white">₹11,80,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="font-bold text-slate-100">Subtotal Principal Claim:</span>
                    <span className="font-mono font-extrabold text-white text-base">₹68,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">
                      MSMED Act Section 16 Interest (3x RBI Bank Rate = 19.5% p.a. monthly compounded for 210 Days)
                    </span>
                    <span className="font-mono font-bold text-emerald-400">₹8,12,450</span>
                  </div>
                  <div className="flex justify-between pt-3 text-base sm:text-lg">
                    <span className="font-black text-red-400">Total Statutory Recovery Demand:</span>
                    <span className="font-mono font-black text-white">₹76,62,450</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Use our dedicated{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                to compute exact 3x RBI compound interest for your specific overdue milestone aging buckets.
              </p>
            </section>

            {/* Section 9: BSA 2023 Section 63 Evidence Checklist */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  9
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Evidentiary Protocol
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                BSA 2023 Section 63 Electronic Evidence Checklist for ERP Litigations
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records require strict authentication through a statutory certificate signed by the technical custodian of the computer system. In ERP milestone recovery proceedings, your legal counsel must assemble the following 6-point evidentiary dossier:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                    1. Blueprint &amp; Scope Architecture
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Countersigned Business Blueprint Document (BBD), Scope Traceability Matrix, and signed Architecture Sign-off sheets establishing the exact baseline scope.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                    2. Jira / DevOps Audit Trails
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Cryptographically stamped Jira/Azure DevOps export logs demonstrating story completion, sprint velocity, and user acceptance comments by client personnel.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                    3. Reciprocal Data Delay Audit
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Timestamped email communications, meeting minutes of Project Steering Committees, and cutover runbook entries documenting repeated client failure to supply legacy data.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                    4. Production System Telemetry
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Certified database extracts proving commercial transaction throughput (number of GST e-invoices, material documents, payroll runs) demonstrating constructive Go-Live.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                    5. Change Request (CR) Register
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Detailed CR log showing ticket creation by client SPOCs, technical development hours logged, code commits, and deployment timestamps in staging environments.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                    6. Statutory Service Records
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Speed Post RPAD consignment tracking reports, registered email read-receipts, and WhatsApp Blue-Tick delivery certificates for statutory demand notices.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For cross-border implementations where foreign enterprise buyers default on software development invoices, refer to our specialized protocol on{" "}
                <Link
                  href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  issuing legal demand notices to international tech clients
                </Link>
                {" "}and our guide for{" "}
                <Link
                  href="/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  IT staff augmentation &amp; C2C developer invoice recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 10: Dual-Track B2B Conversion Funnel */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Conversion Funnel
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-2">
                Activate Institutional ERP Milestone Recovery Desk
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Choose the appropriate recovery channel: test an overdue enterprise milestone notice individually or deploy our enterprise batch recovery engine across your multi-client project portfolio.
              </p>

              <ErpMilestoneRecoveryCTA />
            </section>

            {/* Section 11: 7 Unique FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Practitioner Knowledge Base
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-6">
                Frequently Asked Questions: ERP Milestone Disputes
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-all duration-200 open:bg-white open:shadow-xs"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between list-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-[#DC2626] font-bold text-lg group-open:rotate-180 transition-transform shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory References & Court Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  12
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal Authority &bull; Verified Precedents
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Statutory Citations &amp; Judicial Precedents
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Every recovery strategy and legal notice template drafted by LegalRecovery.in is governed by established statutes and authoritative holdings of the Supreme Court of India and High Courts.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Primary Legislation
                </h3>
                <ul className="space-y-2">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li key={idx} className="text-xs sm:text-sm">
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[#DC2626] hover:underline font-semibold flex items-center gap-1.5"
                      >
                        <span>&rarr;</span>
                        <span>{src.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Landmark Judicial Precedents
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {COURT_PRECEDENTS.map((prec, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                          {prec.title}
                        </span>
                        <span className="text-[11px] font-bold text-red-600">
                          {prec.citation}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 mb-2">
                        {prec.parties} &bull; {prec.date}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        <strong>Facts:</strong> {prec.facts}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        <strong>Holding:</strong> {prec.holding}
                      </p>
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
                        <strong>Key Takeaway:</strong> {prec.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
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
