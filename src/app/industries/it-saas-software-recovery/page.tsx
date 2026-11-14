import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ItSaasTableOfContents from "./ItSaasTableOfContents";
import ItSaasScenarioTabs from "./ItSaasScenarioTabs";
import ItSaasCTA from "./ItSaasCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/it-saas-software-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "IT Services, B2B SaaS & Cloud Vendor Debt Recovery India";
const PAGE_DESCRIPTION =
  "Recover stalled UAT milestones, broken annual SaaS subscriptions, T&M resource invoices, cloud consumption bills & offshore US/UK/GCC tech receivables.";
const H1_TEXT =
  "Enterprise Receivables & Contract Recovery for IT Services, B2B SaaS, ERP Implementers & Cloud Resellers";

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
  archetype: "G1" | "L1" | "T1" | "P1";
  archetypeLabel: string;
  track: "saas-cloud" | "uat-erp" | "staffing-export" | "law-tools";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_05_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-066",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "saas-cloud",
    title: "Enforcing Non-Cancellable Annual & Multi-Year B2B SaaS Order Forms",
    url: "/b2b-saas-annual-subscription-early-cancellation-unpaid-invoice-recovery",
    statute: "Contract Act s.73/74 & DPDP-Safe Read-Only Freeze",
    summary:
      "Enforce committed ACV when enterprise customers cancel mid-term after claiming annual billing discounts.",
  },
  {
    id: "B2B-070",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "saas-cloud",
    title: "AWS, Azure, GCP & Microsoft NCE Cloud Reseller Unpaid Consumption Recovery",
    url: "/cloud-reseller-aws-azure-gcp-microsoft-csp-unpaid-consumption-recovery",
    statute: "Order XXXVII CPC, Telemetry Logs & Director Guarantees",
    summary:
      "Rescue thin-margin CSP partners facing hyperscaler out-of-pocket USD bills on defaulted startup cloud tenants.",
  },
  {
    id: "B2B-067",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "uat-erp",
    title: "Escaping the 'Infinite UAT & Scope-Creep Trap' in Software & AI Projects",
    url: "/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery",
    statute: "Contract Act s.39/55 & Copyright Act s.17/19",
    summary:
      "Prove deemed acceptance via live production usage logs and withhold perpetual IP assignment until final payment.",
  },
  {
    id: "B2B-071",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "uat-erp",
    title: "ERP & CRM (SAP, Oracle, Dynamics, Salesforce, Odoo) Milestone Recovery",
    url: "/erp-sap-oracle-salesforce-implementation-milestone-dispute-recovery",
    statute: "Contract Act s.53/54 Reciprocal Promises & s.12A Mediation",
    summary:
      "Defeat client-caused legacy data migration delays used as pretexts to stall Go-Live and Hypercare billing.",
  },
  {
    id: "B2B-073",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "uat-erp",
    title: "White-Label Subcontracted Agency Unpaid Software Invoice Recovery",
    url: "/white-label-subcontracted-agency-unpaid-software-invoice-recovery",
    statute: "Copyright Act s.17/19 IP Chain & NDA Breach Boundaries",
    summary:
      "Create immediate settlement pressure when a prime agency collects from the end-client yet ghosts your dev shop.",
  },
  {
    id: "B2B-068",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "staffing-export",
    title: "Recovering Unpaid T&M & C2C Staff-Augmentation Monthly Invoices",
    url: "/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery",
    statute: "MSMED s.15–18, s.43B(h), BSA s.63 Jira/Git Logs & O.37 CPC",
    summary:
      "Break Tier-1 SI back-to-back payment excuses on approved developer timesheets and enforce 45-day MSME rules.",
  },
  {
    id: "B2B-069",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "staffing-export",
    title: "Enforcing B2B Non-Solicitation & Buyout Fees for Poached Developers",
    url: "/client-poached-deployed-developer-non-solicitation-fee-recovery",
    statute: "Contract Act s.27 vs s.74 Commercial Conversion Fees",
    summary:
      "Recover 6–12 month commercial placement buyout fees from client companies without hitting employee-restraint bars.",
  },
  {
    id: "B2B-072",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "staffing-export",
    title: "US, UK & UAE Client Unpaid Software Invoices + STPI SOFTEX Closure",
    url: "/us-uk-uae-client-unpaid-software-invoice-softex-fema-recovery",
    statute: "FEMA 9-Month EDPMS Rules, AD Bank Write-Off & CPC s.44A",
    summary:
      "Serve cross-border legal demands on Delaware/UK/Dubai debtors while generating mandatory AD-Bank SOFTEX proof.",
  },
  {
    id: "B2B-074",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "law-tools",
    title: "Withholding Source Code & Server Access vs IT Act s.43/66 Criminal Risk",
    url: "/source-code-escrow-ip-withholding-clause-unpaid-it-invoices",
    statute: "IT Act s.43/66 vs Copyright Act s.19 & Contract Act s.51–54",
    summary:
      "Avoid criminal kill-switch liability while enforcing lawful Git repository liens and 7-day read-only freezes.",
  },
  {
    id: "B2B-075",
    archetype: "T1",
    archetypeLabel: "T1 Interactive Tool",
    track: "law-tools",
    title: "Interactive RBI FEMA 9-Month Export / SOFTEX Realization Calculator",
    url: "/tools/softex-fema-export-realization-deadline-calculator",
    statute: "RBI Export Master Direction (9-Month Clock & 5%/10% Cap)",
    summary:
      "Compute exact EDPMS realization cutoffs, Status-Holder write-off limits, and mandatory legal-notice triggers.",
  },
  {
    id: "B2B-076",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template",
    track: "law-tools",
    title: "Advocate-Drafted IT Services, Custom Software & B2B SaaS Notice Format",
    url: "/templates/it-software-saas-msa-payment-default-legal-notice",
    statute: "Commercial Courts s.2(1)(c)(xviii), Copyright s.51 & MSMED s.16",
    summary:
      "Tech-native demand template integrating Git commit hashes, Jira logs, DPDP data-export window, and IP revocation.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "saas-cloud",
    heading: "Track A: B2B SaaS Order Forms & Hyperscaler Cloud Resellers",
    badgeClass: "bg-red-50 border-red-200 text-[#DC2626]",
    items: IND_05_SPOKES.filter((s) => s.track === "saas-cloud"),
  },
  {
    key: "uat-erp",
    heading: "Track B: Custom Software UAT, ERP Implementation & White-Label",
    badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
    items: IND_05_SPOKES.filter((s) => s.track === "uat-erp"),
  },
  {
    key: "staffing-export",
    heading: "Track C: T&M Staff Augmentation, Poaching Buyouts & STPI SOFTEX",
    badgeClass: "bg-amber-50 border-amber-200 text-amber-800",
    items: IND_05_SPOKES.filter((s) => s.track === "staffing-export"),
  },
  {
    key: "law-tools",
    heading: "Track D: Source-Code Law (IT Act s.66), SOFTEX Tool & MSA Template",
    badgeClass: "bg-slate-100 border-slate-200 text-slate-800",
    items: IND_05_SPOKES.filter((s) => s.track === "law-tools"),
  },
];

const ESCALATION_MATRIX_ROWS = [
  {
    segment: "B2B SaaS Annual / Multi-Year ACV",
    ticket: "₹3L – ₹1.5 Cr",
    bottleneck: "Mid-term Q2/Q3 cancellation on discounted annual Order Form",
    primaryTrack: "Contract Act s.73/74 ACV Acceleration + 7-Day Read-Only Freeze Notice",
    guardrail: "Preserve tenant data export window; avoid abrupt deletion under IT Act s.43",
  },
  {
    segment: "Custom Software, Mobile & AI Builds",
    ticket: "₹5L – ₹80L",
    bottleneck: "Infinite UAT bug-fix loop while running app in live production",
    primaryTrack: "Deemed Acceptance Telemetry + Copyright s.17/19 IP Non-Transfer Notice",
    guardrail: "Attach Git commit hashes, staging URLs, and production API hits under BSA s.63",
  },
  {
    segment: "IT Staff Augmentation (T&M / C2C)",
    ticket: "₹2L – ₹75L",
    bottleneck: "Tier-1 SI cites 'end-client hasn't paid us' on approved timesheets",
    primaryTrack: "MSMED s.15–18 (3x RBI Interest) + Income Tax s.43B(h) + 15d Resource Pullback",
    guardrail: "Confirm Udyam Micro/Small status; Medium units use Order XXXVII / Commercial Court",
  },
  {
    segment: "AWS / Azure / GCP / NCE Cloud Reseller",
    ticket: "₹10L – ₹2 Cr+",
    bottleneck: "Startup burns postpaid GPU/NCE seats leaving CSP liable in USD",
    primaryTrack: "Urgent Order XXXVII CPC + Order XXXVIII Rule 5 Garnishee + Director PG",
    guardrail: "Follow CSP Partner Center suspension protocol without destroying tenant backups",
  },
  {
    segment: "SAP / Oracle / Salesforce / Odoo ERP",
    ticket: "₹15L – ₹3 Cr+",
    bottleneck: "Client's unclean legacy master data stalls Go-Live & final milestone",
    primaryTrack: "Contract Act s.53/54 Reciprocal Promise Breach + Commercial Court s.12A",
    guardrail: "Separate signed Change Requests (CRs) from base SOW deliverables in ledger",
  },
  {
    segment: "Deployed Engineer Poaching",
    ticket: "₹4L – ₹35L",
    bottleneck: "Client secretly hires vendor's bench developer directly off-MSA",
    primaryTrack: "Commercial B2B Conversion / Buyout Fee Notice (Contract Act s.74)",
    guardrail: "Claim liquidated placement fee against corporate client—never restrain employee",
  },
  {
    segment: "White-Label Dev Shop Subcontracts",
    ticket: "₹3L – ₹60L",
    bottleneck: "Prime agency collects from end-client and withholds subcontractor dues",
    primaryTrack: "Conditional IP Non-Transfer Notice to Prime Agency General Counsel",
    guardrail: "Respect valid NDA tiers before third-party escalation; challenge prime IP warranty",
  },
  {
    segment: "US / UK / EU / GCC Offshore Exports",
    ticket: "$5K – $500K+",
    bottleneck: "Foreign entity defaults & triggers RBI EDPMS 9-month SOFTEX flag",
    primaryTrack: "Cross-Border Demand Notice + AD-Bank Write-Off Dossier / CPC s.44A",
    guardrail: "Track 9-month realization date and 5%/10% self-write-off limits strictly",
  },
];

const STATUTORY_PRECEDENTS = [
  {
    title: "Independent Software Vendors Retain Copyright Absent Signed Section 19 Assignment",
    citation: "Pine Labs Pvt. Ltd. v. Gemalto Terminals India Pvt. Ltd. (Delhi HC DB, 2011 SCC OnLine Del 3186)",
    holding:
      "The Division Bench affirmed that an external software vendor working under a 'contract for service'—not as a salaried employee under Section 17(c)—remains the first owner of source-code copyright under Section 17 of the Copyright Act, 1957. Where written assignment clauses fail to specify duration and territory, Sections 19(5) and 19(6) restrict rights to 5 years and India.",
    operationalRule:
      "Anchor every MSA with conditional IP transfer upon full consideration and cite Pine Labs when unpaid clients deploy code commercially.",
  },
  {
    title: "Commercial Courts Section 12A Mediation Gate for Technology Contracts",
    citation: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (Supreme Court, 2022) & Commercial Courts Act s.2(1)(c)(xviii)",
    holding:
      "Agreements for licensing, software development, SaaS subscriptions, and technical consultancy valued at ₹3 Lakh or more fall squarely under 'commercial disputes'. Pre-Institution Mediation under Section 12A is mandatory before filing suit unless the creditor demonstrates urgent interim relief—such as freezing unauthorized code redistribution or dissipating assets.",
    operationalRule:
      "Draft initial advocate demand notices to establish clean breach records for s.12A mediation or substantiate genuine urgency for interim injunctions.",
  },
  {
    title: "Pre-Existing Dispute Screening Against Spurious Post-Invoice UAT Excuses",
    citation: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (Supreme Court, 2017) & IBC s.8/9",
    holding:
      "For corporate operational defaults meeting the ₹1 Crore IBC threshold, an NCLT petition fails if a genuine 'pre-existing dispute' predates the Section 8 demand notice. However, sham or moonshine quality objections invented for the first time after months of silent production usage do not qualify as plausible pre-existing disputes when contradicted by prior acceptance trails.",
    operationalRule:
      "Archive Jira ticket sign-offs, production deployment timestamps, and CFO ledger confirmations before issuing Form 3/Form 4 notices.",
  },
  {
    title: "Neutral Institutional ODR Post-CORE & Criminal Liability for Code Kill-Switches",
    citation: "CORE v. ECI SPIC SMO MCML (JV) (5-Judge SC Bench, Nov 2024) & Information Technology Act, 2000 s.43/66",
    holding:
      "Unilateral vendor-appointed sole arbitrator clauses in enterprise MSAs fail Section 12(5) neutrality under the 5-Judge Constitution Bench ruling. Separately, embedding covert software 'time-bombs', deleting live client databases, or hijacking client root cloud accounts triggers criminal liability under IT Act Sections 43 and 66.",
    operationalRule:
      "Adopt neutral institutional ODR panels in MSAs, and enforce non-payment solely via lawful Git withholding and 7-day read-only suspension notices.",
  },
];

const LIVE_SEED_LINKS = [
  {
    label: "Legal Notice to International Client for Unpaid Invoices",
    href: "/legal-notice-to-international-client-unpaid-invoice-recovery",
    note: "Cross-border jurisdiction, foreign entity demand drafting, and international fee recovery workflow.",
  },
  {
    label: "Copyright Not Transferred Until Paid (Section 17 & 19 Guide)",
    href: "/copyright-not-transferred-until-paid-freelancer",
    note: "Detailed Pine Labs precedent breakdown, IT Rules takedown options, and conditional IP assignment.",
  },
  {
    label: "Consultancy & Advisory Retainer Fee Recovery",
    href: "/recovery/consultancy-fees",
    note: "Enforcing written SOW retainers, Section 70 quantum meruit claims, and Order XXXVII CPC.",
  },
  {
    label: "Web Development Client Not Paying Legal Notice",
    href: "/web-development-client-not-paying-legal-notice",
    note: "Foundational agency guide covering staging holds, hosting notices, and milestone disputes.",
  },
  {
    label: "Freelancer Payment Recovery Legal Guide",
    href: "/freelancer-payment-recovery-guide",
    note: "Core independent contractor escalation path across Contract Act and summary suits.",
  },
  {
    label: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
    href: "/law/section-43bh-msme-payment-rule",
    note: "Leverage March 31 income-tax disallowance and Form 3CD audit pressure against corporate IT buyers.",
  },
  {
    label: "MSME Samadhaan Portal vs Advocate Legal Notice",
    href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
    note: "Compare formal pre-MSEFC legal demands with Samadhaan/MSME ODR conciliation timelines.",
  },
  {
    label: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
    href: "/tools/msme-delayed-payment-interest-calculator",
    note: "Compute Section 16 monthly compound interest and buyer s.43B(h) tax impact with CSV export.",
  },
  {
    label: "Order XXXVII Summary Suit Money Recovery Guide",
    href: "/law/order-37-summary-suit-money-recovery",
    note: "Fast-track civil litigation on signed MSAs, accepted tax invoices, and dishonoured cheques.",
  },
  {
    label: "Online Dispute Resolution (ODR) India",
    href: "/online-dispute-resolution-india",
    note: "Post-CORE neutral institutional ODR arbitration for SaaS subscriptions and remote MSAs.",
  },
];

const FAQS = [
  {
    question:
      "Can an Indian IT services or SaaS company legally withhold source code or suspend server access for non-payment?",
    answer:
      "Yes—if structured lawfully, never through covert sabotage. Under Sections 17 and 19 of the Copyright Act, 1957 (affirmed in Pine Labs v. Gemalto), an independent software vendor retains copyright unless assigned in writing, and Contract Act Sections 51–54 allow withholding future deliverables upon buyer default. However, planting hidden 'kill-switches', deleting live customer databases, or locking out client-owned cloud roots violates Sections 43 and 66 of the IT Act, 2000. Always issue a 7-day Cure-Cum-Read-Only Suspension Notice granting a clean data-export window first.",
  },
  {
    question:
      "How do software agencies defeat 'infinite UAT bug-fix loops' when a client already deployed the app to production?",
    answer:
      "Once a client pushes staging or build code into live production traffic, the vendor should immediately preserve server telemetry, Git commit timestamps, Jira sprint acceptance emails, and public app-store/domain release logs certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. An advocate demand notice pairing 'deemed commercial acceptance' with Copyright Act Section 51 infringement warnings (blocking unauthorized commercial exploitation absent final milestone settlement) typically ends artificial UAT stalling.",
  },
  {
    question:
      "Are non-cancellable annual B2B SaaS Order Forms enforceable if an enterprise buyer stops paying quarterly installments?",
    answer:
      "Yes. Where a corporate buyer executes a non-cancellable 12-to-36-month Order Form in exchange for an annual-commitment discount, mid-term repudiation constitutes breach under Sections 73 and 74 of the Indian Contract Act, 1872. Provided the MSA includes an express acceleration clause and clear read-only suspension mechanics, the SaaS vendor can demand the committed Annual Contract Value balance via Commercial Courts (for claims >= ₹3 Lakh) or Order XXXVII CPC summary proceedings.",
  },
  {
    question:
      "Can a Tier-2 IT staffing vendor collect unpaid T&M invoices when a Tier-1 System Integrator cites 'back-to-back' client non-payment?",
    answer:
      "For Udyam-registered Micro and Small IT service enterprises, Section 15 of the MSMED Act, 2006 caps payment credit at 45 days regardless of any 'pay-when-paid' or back-to-back condition in a Tier-1 SI's purchase order. Pairing approved Jira/timesheet logs with a formal Section 15/16 (3x RBI Bank Rate compound interest) and Income Tax Act Section 43B(h) disallowance notice forces Tier-1 procurement and CFO desks to release payment ahead of March 31 tax audits.",
  },
  {
    question:
      "Is a B2B non-solicitation or developer buyout fee valid under Section 27 of the Indian Contract Act?",
    answer:
      "While post-termination non-compete restrictions against individual employees are generally void under Section 27 of the Indian Contract Act, commercial B2B 'Temp-to-Perm Conversion' or 'Resource Buyout Fee' clauses between two corporate entities operate differently. When drafted in the MSA as a reasonable liquidated commercial placement fee payable by the client company upon hiring a deployed engineer, the demand targets commercial compensation from the corporate client rather than restraining the engineer's right to work.",
  },
  {
    question:
      "What happens under RBI FEMA and STPI SOFTEX rules if a US, UK, or UAE software client refuses to pay past 9 months?",
    answer:
      "Under the RBI Master Direction on Export of Goods and Services, IT exporters filing STPI SOFTEX declarations must realize export proceeds within 9 months (unless extended). Unresolved open bills on RBI's EDPMS can trigger AD-Bank caution-listing. Even where cross-border litigation is uneconomical for smaller invoices, AD Banks require documented proof of formal legal recovery demand notices before approving self-write-offs (capped at 5% for regular exporters and 10% for Status Holders).",
  },
  {
    question:
      "Can an IT founder or SaaS CFO test LegalRecovery.in on one unpaid client before onboarding a batch portfolio?",
    answer:
      "Yes. Under our Dual-Track Onboarding model, you can submit a single overdue domestic or international invoice for ₹999 via the live recovery portal, review the advocate-drafted notice citing your exact SOW/Git/SOFTEX facts, and inspect the tri-channel Email, WhatsApp, and Speed Post RPAD tracking plus BSA s.63 certificate before scaling to bulk CSV recovery.",
  },
];

const OFFICIAL_SOURCES = [
  {
    label: "India Code — Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) & Section 12A)",
    url: "https://www.indiacode.nic.in/",
  },
  {
    label: "India Code — The Copyright Act, 1957 (Sections 17, 19, 51 & 55)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    label: "India Code — Information Technology Act, 2000 (Sections 43 & 66)",
    url: "https://www.indiacode.nic.in/",
  },
  {
    label: "Reserve Bank of India — Master Direction on Export of Goods and Services (EDPMS & Write-Off)",
    url: "https://www.rbi.org.in/",
  },
  {
    label: "Software Technology Parks of India (STPI) — SOFTEX Export Filing Framework",
    url: "https://www.stpi.in/",
  },
  {
    label: "Ministry of MSME — Samadhaan & MSME ODR Delayed Payment Portal",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    label: "India Code — Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "B2B IT Services, SaaS, ERP, Cloud Reseller & Software Export Legal Recovery",
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
      "B2B SaaS CFOs, VP RevOps, IT Services Founders, Staff-Augmentation Firms, Cloud CSP Resellers & ERP Implementation Partners",
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
  name: "IND-05 IT Services, B2B SaaS, Cloud & Software Export Legal Recovery Spokes",
  numberOfItems: IND_05_SPOKES.length,
  itemListElement: IND_05_SPOKES.map((spoke, index) => ({
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
      name: "IT & SaaS Legal Recovery",
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

export default function ItSaasSoftwareRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* Dark Gradient Institutional Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-05 Pillar Hub</span>
            <span>•</span>
            <span>IT Services, B2B SaaS, ERP &amp; Cloud Resellers</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* 40-60 Word Executive Creditor Summary + Inline Parent Directory Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            LegalRecovery.in equips IT firms, SaaS CFOs, ERP implementers, and cloud CSP partners
            with advocate-issued <strong className="text-white">Copyright Act s.19</strong> IP
            liens, <strong className="text-white">Commercial Courts s.2(1)(c)(xviii)</strong>{" "}
            notices, MSMED 45-day demands, and US/UK/UAE{" "}
            <strong className="text-white">SOFTEX</strong> recovery letters—integrated with our{" "}
            <Link
              href="/services"
              className="text-red-300 underline decoration-red-400/60 hover:text-white"
            >
              institutional legal recovery services directory
            </Link>
            .
          </div>

          {/* 4-Card Statutory Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-5">
            <div>
              <p className="text-base sm:text-xl font-black text-slate-100">₹3 Lakh Floor</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Commercial Courts Act s.2(1)(c)(xviii)
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 + s.43B(h) Tax Leverage
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-amber-400">9 Months</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                RBI FEMA / STPI SOFTEX Clock
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-red-400">Section 17 &amp; 19</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                IP Ownership Until Paid (Pine Labs)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <p>
              Legal Architecture Reviewed by{" "}
              <Link
                href="/authors/anuj-anand-malik"
                className="text-slate-200 font-semibold underline decoration-slate-500 hover:text-white"
              >
                Anuj Anand Malik, Advocate &amp; Founder (AMA Legal Solutions)
              </Link>
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/tools/softex-fema-export-realization-deadline-calculator"
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold transition-colors"
              >
                SOFTEX 9m Calculator →
              </Link>
              <a
                href="#dual-track-cta"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
              >
                ₹999 Live Test / CSV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "IT & SaaS Legal Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <ItSaasTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Enterprise Tech & SaaS Context */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Why Enterprise Tech &amp; SaaS Firms Lose Revenue on Generic Notices
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&apos;s IT services companies, B2B SaaS startups, SAP and Salesforce
                  implementation partners, staff-augmentation firms, and hyperscaler cloud resellers
                  face contractual payment blockades that bear almost zero resemblance to ordinary
                  goods-supply defaults. A generic invoice demand citing lorry receipts or physical
                  delivery challans carries no leverage against a corporate CTO who already has your
                  code running in live production while refusing User Acceptance Testing (UAT)
                  sign-off over cosmetic UI requests.
                </p>
                <p>
                  Existing solo-freelancer guides—such as our foundational{" "}
                  <Link
                    href="/web-development-client-not-paying-legal-notice"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    web development unpaid client guide
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/freelancer-payment-recovery-guide"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    freelancer payment recovery playbook
                  </Link>
                  —serve independent contractors effectively, yet ₹5 Lakh to ₹2 Crore+ enterprise
                  defaults require institutional statutory architecture. SaaS CFOs routinely suffer
                  mid-term repudiation on discounted non-cancellable annual Order Forms; cloud
                  resellers under Microsoft&apos;s New Commerce Experience (NCE) or AWS Partner
                  programs absorb immediate out-of-pocket USD payables when funded startups default;
                  and offshore software exporters accumulate open STPI SOFTEX entries in RBI&apos;s
                  EDPMS risking caution-listing after nine months.
                </p>
                <p>
                  Without careful legal calibration, panicked tech founders also make costly
                  mistakes—planting hidden code kill-switches (inviting criminal FIRs under{" "}
                  <strong className="text-slate-900">Sections 43 and 66 of the IT Act, 2000</strong>
                  ), misdrafting employee restraint claims instead of corporate buyout demands, or
                  skipping <strong className="text-slate-900">Section 12A</strong> pre-institution
                  mediation under the Commercial Courts Act, 2015. Our IND-05 creditor desk pairs
                  tech-native digital evidence (Git hashes, Jira sprint approvals, cloud billing
                  telemetry) with advocate-vetted statutory escalation across India, the US, the UK,
                  Europe, and the GCC.
                </p>
              </div>
            </section>

            {/* Section 2: Multi-Track IT & SaaS Escalation Matrix */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  IT, SaaS, ERP &amp; Cloud Escalation Matrix by Contract Type
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Select the exact statutory mechanism matching your tech contract structure, ticket
                band, and debtor defense pattern before sending any suspension or demand notice.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold border-b border-slate-800">Tech Segment</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Ticket Band</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Typical Default Pattern</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Primary Statutory Track</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Critical Legal Guardrail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {ESCALATION_MATRIX_ROWS.map((row) => (
                      <tr key={row.segment} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 align-top">{row.segment}</td>
                        <td className="p-3.5 font-semibold text-[#DC2626] whitespace-nowrap align-top">
                          {row.ticket}
                        </td>
                        <td className="p-3.5 text-slate-600 align-top">{row.bottleneck}</td>
                        <td className="p-3.5 text-slate-800 font-medium align-top">
                          {row.primaryTrack}
                        </td>
                        <td className="p-3.5 text-slate-600 align-top">{row.guardrail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Custom SVG Workflow Architecture + Mobile Fallback */}
            <section
              id="heading-pipeline-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Domestic &amp; Cross-Border Tech Receivable Recovery Architecture
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                From Git/Jira telemetry capture and conditional Copyright s.19 auditing to
                synchronized Email, WhatsApp, and Speed Post RPAD service, every IT or SaaS dispute
                follows a four-gate evidentiary sequence built for Commercial Courts, MSEFC, and
                AD-Bank SOFTEX review.
              </p>

              {/* Desktop Hand-Authored SVG Diagram */}
              <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-800 bg-[#0F172A] p-4">
                <svg
                  viewBox="0 0 920 310"
                  width={920}
                  height={310}
                  role="img"
                  aria-label="Four-stage IT services, SaaS, cloud reseller, and SOFTEX legal recovery workflow"
                  className="w-full h-auto"
                >
                  <rect x="0" y="0" width="920" height="310" rx="14" fill="#0F172A" />

                  <text
                    x="30"
                    y="36"
                    fill="#F87171"
                    fontSize="12"
                    fontWeight="bold"
                    letterSpacing="1.5"
                  >
                    IND-05 TECH CREDITOR WORKFLOW: TELEMETRY AUDIT TO ENFORCEABLE RECOVERY
                  </text>

                  {/* Stage 1 */}
                  <rect x="30" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="30" y="64" width="195" height="32" rx="12" fill="#DC2626" />
                  <text x="127" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    01. TELEMETRY &amp; CONTRACT
                  </text>
                  <text x="44" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• BSA s.63 Tech Proof</text>
                  <text x="44" y="148" fill="#CBD5E1" fontSize="11">Git Hashes &amp; Jira Logs</text>
                  <text x="44" y="168" fill="#CBD5E1" fontSize="11">Order Form / NCE Usage CSV</text>
                  <text x="44" y="194" fill="#34D399" fontSize="11" fontWeight="bold">Udyam &amp; SOFTEX Check</text>
                  <text x="44" y="214" fill="#94A3B8" fontSize="10">Verify Micro/Small vs Med</text>
                  <text x="44" y="236" fill="#94A3B8" fontSize="10">Lock 9-Month EDPMS Date</text>

                  <line x1="225" y1="159" x2="255" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="253,153 265,159 253,165" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="265" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="265" y="64" width="195" height="32" rx="12" fill="#334155" />
                  <text x="362" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    02. ADVOCATE DRAFTING
                  </text>
                  <text x="279" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• Precision Statutory Hook</text>
                  <text x="279" y="148" fill="#CBD5E1" fontSize="11">Copyright s.19 Non-Transfer</text>
                  <text x="279" y="168" fill="#CBD5E1" fontSize="11">7d Read-Only Freeze Notice</text>
                  <text x="279" y="194" fill="#FBBF24" fontSize="11" fontWeight="bold">s.43B(h) &amp; Conversion Fee</text>
                  <text x="279" y="214" fill="#94A3B8" fontSize="10">Zero IT Act s.66 exposure</text>
                  <text x="279" y="236" fill="#94A3B8" fontSize="10">US/UK/UAE GC Addressee</text>

                  <line x1="460" y1="159" x2="490" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="488,153 500,159 488,165" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="500" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="500" y="64" width="195" height="32" rx="12" fill="#059669" />
                  <text x="597" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    03. TRI-CHANNEL DISPATCH
                  </text>
                  <text x="514" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• Verifiable Corporate Service</text>
                  <text x="514" y="148" fill="#CBD5E1" fontSize="11">CFO + General Counsel Email</text>
                  <text x="514" y="168" fill="#CBD5E1" fontSize="11">Verified WhatsApp + PDF</text>
                  <text x="514" y="194" fill="#34D399" fontSize="11" fontWeight="bold">Speed Post RPAD / Courier</text>
                  <text x="514" y="214" fill="#94A3B8" fontSize="10">SHA-256 BSA s.63 Cert</text>
                  <text x="514" y="236" fill="#94A3B8" fontSize="10">AD-Bank SOFTEX Proof Pack</text>

                  <line x1="695" y1="159" x2="725" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="723,153 735,159 723,165" fill="#DC2626" />

                  {/* Stage 4 */}
                  <rect x="735" y="64" width="155" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="735" y="64" width="155" height="32" rx="12" fill="#B45309" />
                  <text x="812" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    04. FORUM / CLOSURE
                  </text>
                  <text x="747" y="122" fill="#34D399" fontSize="11" fontWeight="bold">✓ Invoice / ACV Cure</text>
                  <text x="747" y="150" fill="#CBD5E1" fontSize="11">• Comm. Court s.12A</text>
                  <text x="747" y="176" fill="#CBD5E1" fontSize="11">• Order XXXVII / O.38</text>
                  <text x="747" y="202" fill="#CBD5E1" fontSize="11">• MSME ODR / Neutral ODR</text>
                  <text x="747" y="228" fill="#F87171" fontSize="10" fontWeight="bold">• EDPMS Write-Off Pack</text>

                  <text x="460" y="288" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    Designed for multi-invoice SOW ledgers, domestic Commercial Courts (&gt;= ₹3L), and cross-border IT exports
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Fallback Cards */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {[
                  {
                    step: "01. Telemetry & Contract Audit",
                    text: "Preserve Git hashes, Jira logs, cloud NCE consumption CSVs, Udyam status, and STPI SOFTEX 9-month EDPMS dates under BSA s.63.",
                  },
                  {
                    step: "02. Advocate Statutory Drafting",
                    text: "Integrate Copyright s.19 IP non-transfer, 7-day read-only data-export suspension notices, s.43B(h) tax hooks, or B2B buyout fees.",
                  },
                  {
                    step: "03. Tri-Channel Corporate Dispatch",
                    text: "Serve CFOs, CTOs, and General Counsel via logged Email, WhatsApp, and Speed Post RPAD / international courier with SHA-256 certificates.",
                  },
                  {
                    step: "04. Forum Execution or EDPMS Closure",
                    text: "Escalate uncured accounts to Commercial Courts s.12A, Order XXXVII summary suits, MSME ODR, neutral ODR, or AD-Bank SOFTEX write-off clearance.",
                  },
                ].map((stage) => (
                  <div
                    key={stage.step}
                    className="rounded-xl bg-slate-900 text-white p-4 border border-slate-800"
                  >
                    <p className="text-xs font-extrabold text-red-400 mb-1">{stage.step}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{stage.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Vertical Scenario Tabs */}
            <section
              id="heading-vertical-tracks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Interactive Recovery Playbooks Across 4 Tech &amp; Cloud Verticals
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Switch across the four technology recovery tracks below to review statutory hooks,
                operational workflows, and technical compliance boundaries.
              </p>

              <ItSaasScenarioTabs />
            </section>

            {/* Section 5: Multi-Invoice Ledger, BSA s.63 Proof & Batch Dispatch */}
            <section
              id="heading-ledger-dispatch"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Multi-Invoice Tech Ledger, Git/Jira Proof &amp; Batch CSV Dispatch
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                <p>
                  IT services and SaaS receivables rarely fail on one standalone bill—they accumulate
                  across six months of unpaid T&amp;M timesheets, multiple SOW change requests,
                  quarterly Order Form installments, or monthly AWS/Azure pass-through consumption
                  statements. LegalRecovery.in&apos;s production{" "}
                  <code className="px-1.5 py-0.5 rounded bg-slate-100 text-[#DC2626] text-xs font-semibold">
                    invoices[]
                  </code>{" "}
                  multi-invoice schema consolidates dozens of GST tax invoices, PO numbers, sprint
                  milestones, and SOFTEX references into a single itemized statutory demand.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-2">
                    Tech-Native Evidence &amp; Multi-Invoice Engine
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Consolidate Sprints, Cloud Usage &amp; Running Ledgers
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit single cases via{" "}
                    <Link href="/user/new-recovery" className="text-[#DC2626] font-semibold underline">
                      /user/new-recovery
                    </Link>{" "}
                    with itemized invoice schedules, or route high-volume SaaS dunning through our{" "}
                    <Link
                      href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      tri-channel Email + WhatsApp + Speed Post RPAD engine
                    </Link>{" "}
                    backed by BSA 2023 Section 63 cryptographic proof.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">
                    Multi-Subsidiary &amp; Export Representee Vault
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Indian Pvt Ltd, US Inc &amp; STPI Unit Mapping
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under{" "}
                    <Link href="/user/representees" className="text-emerald-700 font-semibold underline">
                      /user/representees
                    </Link>
                    , IT groups store Board Resolutions, Udyam Micro/Small certificates, and AD-Bank
                    authorized signatory letters across domestic entities and export units—producing
                    clean, audit-ready dossiers for both Commercial Courts and FEMA EDPMS closure.
                  </p>
                </div>
              </div>
            </section>

            {/* Dual-Track B2B Conversion Funnel */}
            <ItSaasCTA />

            {/* Section 6: Statutory Precedents & IT Act Boundaries */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Statutory Precedents: Copyright, Commercial Courts &amp; IT Act Limits
                </h2>
              </div>

              <div className="space-y-4">
                {STATUTORY_PRECEDENTS.map((item) => (
                  <div
                    key={item.title}
                    className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"
                    />
                    <p className="text-sm sm:text-base font-extrabold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs font-bold text-[#DC2626] mt-0.5 mb-2">{item.citation}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      {item.holding}
                    </p>
                    <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 inline-block">
                      Creditor Protocol: {item.operationalRule}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Worked Economics (UAT Milestone vs Microsoft NCE Cloud) */}
            <section
              id="heading-worked-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Worked Economics: ₹24L UAT Dispute vs ₹60L Microsoft NCE Default
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                <strong>Illustrative Procedural &amp; Risk Comparison:</strong> Two high-stakes
                recovery scenarios showing why tech-specific statutory hooks outperform generic
                reminder emails or unlawful self-help lockouts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Scenario A */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-2">
                    Scenario A • Stalled Software / AI Milestone
                  </span>
                  <p className="text-base font-extrabold text-slate-900 mb-2">
                    ₹24,00,000 Final UAT Milestone Held Over Cosmetic Tweaks
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Self-Sabotage Risk:</strong> Triggering a hidden code kill-switch on
                      the buyer&apos;s production server invites an IT Act s.43/66 Cyber Cell FIR
                      and reverses legal leverage.
                    </li>
                    <li>
                      <strong>IND-05 Legal Workflow:</strong> Capture live production API/traffic
                      logs proving deemed acceptance, invoke{" "}
                      <strong>Copyright Act s.17/19 (Pine Labs)</strong> confirming perpetual IP has
                      not transferred, and assert <strong>MSMED s.16 / s.43B(h)</strong> tax
                      disallowance if Udyam-registered.
                    </li>
                    <li className="text-emerald-800 font-semibold">
                      Strategic Outcome: Clean settlement leverage ahead of Commercial Court s.12A
                      mediation with zero criminal counterclaim risk.
                    </li>
                  </ul>
                </div>

                {/* Scenario B */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold mb-2">
                    Scenario B • Cloud Partner Working-Capital Crisis
                  </span>
                  <p className="text-base font-extrabold text-slate-900 mb-2">
                    ₹60,00,000 Defaulted AWS / Microsoft NCE Consumption Bill
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Margin Exposure:</strong> Operating on 5–8% partner spreads, the Indian
                      CSP reseller must still pay hyperscaler USD invoices even when the startup
                      client stops paying.
                    </li>
                    <li>
                      <strong>IND-05 Legal Workflow:</strong> Serve a 7-day Cure-Cum-Read-Only
                      Suspension Notice offering lawful data migration, bundle Partner Center usage
                      CSVs under <strong>BSA s.63</strong>, and file{" "}
                      <strong>Order XXXVII CPC</strong> + <strong>Order XXXVIII Rule 5</strong>{" "}
                      attachment-before-judgment against funded client receivables or director
                      guarantees.
                    </li>
                    <li className="text-amber-900 font-semibold">
                      Strategic Outcome: Halts ongoing burn immediately while prioritizing CSP
                      recovery before startup cash runs dry.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Complete 11-Spoke IND-05 Directory */}
            <section
              id="heading-ind05-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Complete IND-05 Directory: 11 Specialized Tech Spokes &amp; Tools
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Explore every dedicated operational guide, statutory deep-dive, SOFTEX deadline
                calculator, and tech-native MSA notice format inside the IND-05 IT &amp; SaaS
                recovery cluster.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => (
                  <div key={track.key}>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900 border-b border-slate-200 pb-2 mb-4">
                      {track.heading}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {track.items.map((spoke) => (
                        <Link
                          key={spoke.id}
                          href={spoke.url}
                          className="group rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 hover:bg-white p-4 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase ${track.badgeClass}`}
                              >
                                {spoke.id} • {spoke.archetypeLabel}
                              </span>
                            </div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                              {spoke.title}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed mb-2">
                              {spoke.summary}
                            </p>
                          </div>
                          <p className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200/80">
                            {spoke.statute}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Live Existing Seed & Cross-Cluster Resources */}
            <section
              id="heading-seed-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Live International, IP &amp; MSME Seed Guides on LegalRecovery.in
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Pair our IND-05 enterprise playbooks with these live LegalRecovery.in guides, MSME
                interest tools, and cross-border recovery workflows—plus our{" "}
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  bulk recovery CSV solutions portal
                </Link>
                :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {LIVE_SEED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-slate-200 hover:border-slate-900 p-4 bg-slate-50 hover:bg-white transition-all block"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.label} →
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.note}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: Institutional FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  FAQs: IT Services, B2B SaaS, Cloud &amp; SOFTEX Recovery in India
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-base font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Portals & Official Authorities */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Statutory Portals, STPI SOFTEX, RBI FEMA &amp; Court Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {OFFICIAL_SOURCES.map((src) => (
                  <li key={src.label} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">•</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 transition-colors"
                    >
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="itSaas" />
    </div>
  );
}
