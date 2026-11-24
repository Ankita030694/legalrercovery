import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ProfessionalServicesHubTableOfContents from "./ProfessionalServicesHubTableOfContents";
import ProfessionalServicesHubScenarioTabs from "./ProfessionalServicesHubScenarioTabs";
import ProfessionalServicesHubCTA from "./ProfessionalServicesHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/ca-architects-consultants-professional-fee-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "CAs, Architects, Engineers & M&A Advisors Fee Recovery India"; // 60 chars
const PAGE_DESCRIPTION =
  "Recover unpaid CA audit/tax retainers, COA architectural stage fees, PMC bills & bypassed debt/M&A success fees without breaching ICAI/COA/Bar ethics."; // 150 chars
const H1_TEXT =
  "Council-Ethics-Safe Professional Fee & Mandate Recovery for Chartered Accountants, Architects, Engineering Consultants & Deal Advisors"; // 134 chars

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

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

interface ProfessionalSpoke {
  id: string;
  archetype: "G1" | "L1" | "P1";
  archetypeLabel: string;
  track: "licensed-councils" | "engineering-deals-advisory" | "law-templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_23_SPOKES: ProfessionalSpoke[] = [
  {
    id: "B2B-262",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "licensed-councils",
    title: "Chartered Accountant (CA) Unpaid Audit & Tax Retainer Recovery: ICAI Clause (8) NOC & Chapter VII",
    url: "/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc",
    statute: "CA Act First Schedule Clause (8) + ICAI Chapter VII (Undisputed Audit Fees) & Order XXXVII CPC",
    summary:
      "Stop clients from extracting Sept 30/Oct 31 UDIN signatures, bouncing your cheque, and switching auditors—by notifying the incoming CA of Balance-Sheet-provisioned undisputed audit fees while staying 100% ICAI compliant.",
  },
  {
    id: "B2B-263",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "licensed-councils",
    title: "Architect & Interior Consultant Stage Fee Recovery: COA Regulation 2(1)(xii) & GFC Drawing Copyright",
    url: "/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery",
    statute: "Architects (Professional Conduct) Reg. 2(1)(xii) + Copyright Act ss.13/51 & Commercial Courts",
    summary:
      "Halt developers and villa owners who obtain municipal sanction and working GFC CAD/BIM drawings, fire your studio before final stages, and hand your copyrighted plans to a low-cost draftsman.",
  },
  {
    id: "B2B-267",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "licensed-councils",
    title: "Company Secretary (PCS), IBBI Registered Valuer & Insolvency RP CIRP Fee & MCA Filing Recovery",
    url: "/company-secretary-pcs-registered-valuer-ip-insolvency-fee-recovery",
    statute: "ICSI Ethical Guidelines + IBBI CIRP Cost Priority u/s 5(13)/53(1)(a) & MCA Challan Suits",
    summary:
      "Recover upfront MCA ROC stamp-duty disbursements paid for authorized-capital hikes, unpaid FEMA/Companies Act valuation reports, and CoC-stalled IRP/RP resolution fees systematically.",
  },
  {
    id: "B2B-264",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "engineering-deals-advisory",
    title: "Investment Banker, Debt Syndication & M&A Mandate Success-Fee Circumvention & Tail-Period Recovery",
    url: "/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention",
    statute: "Contract Act ss.73/205 Tail-Period Survival + 'Effective Cause' Law + s.9 / Order XXXVIII r.5",
    summary:
      "Enforce 12-to-24-month mandate survival clauses when promoters use your CMA/IM and bank/PE introduction to obtain a term sheet, pretend talks failed, and close directly to dodge a 2% success fee.",
  },
  {
    id: "B2B-265",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "engineering-deals-advisory",
    title: "Structural, MEP, PMC, EIA & Geotechnical Engineering Consultant Bill & OC Sign-Off Leverage",
    url: "/structural-mep-pmc-geotechnical-engineering-consultant-bill-recovery",
    statute: "Contract Act ss.51–52 Reciprocal Promises + MSMED Act ss.15–18 & s.43B(h)",
    summary:
      "Deploy lawful Section 51–52 contractual suspension before signing Structural Stability, Fire-NOC, Environmental Clearance, or Occupancy Certificate deliverables while 8 months of bills remain unpaid.",
  },
  {
    id: "B2B-268",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "engineering-deals-advisory",
    title: "Management Consulting, CERT-In Cyber Audit, ISO/NABH, ESG/BRSR & State PLI Subsidy Fee Recovery",
    url: "/management-consulting-esg-iso-cyber-audit-advisory-milestone-recovery",
    statute: "Order XXXVII CPC + Public Sanction Proof (NABH/SPCB/DPIIT/PLI) & Income Tax s.43B(h)",
    summary:
      "Defeat post-sanction client amnesia when factories or hospitals secure NABH accreditation, RBI cyber-audit sign-off, or ₹10 Cr state capital/PLI subsidies and freeze your final milestone or 3–8% success fee.",
  },
  {
    id: "B2B-269",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "engineering-deals-advisory",
    title: "CRO Clinical Trial (BA/BE) & NABL Analytical Testing Lab Unpaid Invoice Recovery",
    url: "/clinical-research-cro-testing-laboratory-nabl-unpaid-invoice-recovery",
    statute: "NABL / GLP Anti-Contingency Mandate (Outcome-Neutral Fees) + Final CSR Hold & Order XXXVII",
    summary:
      "Enforce scientific neutrality covenants when pharma sponsors or industrial manufacturers abandon failed BA/BE bioequivalence studies or BIS-failed sample batches and refuse the final 40% testing bill.",
  },
  {
    id: "B2B-266",
    archetype: "L1",
    archetypeLabel: "L1 Statutory Commentary",
    track: "law-templates",
    title: "Law Firm, Litigation Counsel & Patent/IP Attorney Corporate Fee Recovery (R.D. Saxena Safe)",
    url: "/law-firm-litigation-counsel-ip-attorney-unpaid-corporate-fee-recovery",
    statute: "R.D. Saxena (SC) Compliance + CPC Order III Rule 4(2) Court-Leave Discharge & Order XXXVII",
    summary:
      "Practitioner precedent guide explaining why holding case files breaches Bar ethics—and how court-leave discharge fee recording plus Order XXXVII summary suits recover ₹10L–₹80L appearance memos & patent disbursements.",
  },
  {
    id: "B2B-270",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "law-templates",
    title: "3-in-1 Professional Practice Legal Notice Pack: CA Audit (+ Clause 8 Letter), Architect IP & Mandate Tail",
    url: "/templates/ca-architect-advisor-professional-fee-recovery-legal-notice",
    statute: "ICAI Chapter VII, COA Regulations, Copyright Act s.51 & Form 26AS 194J Debt Admission",
    summary:
      "Interactive council-ethics-verified notice builder combining UDIN trails, Form 26AS 194J TDS Section 18 acknowledgments, Balance-Sheet audit-fee provisions, COA IP warnings, and tail-breach demands.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "licensed-councils" as const,
    heading: "Track A: Statutory-Council Professions (CAs, Architects, PCS, Valuers & Insolvency RPs)",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "engineering-deals-advisory" as const,
    heading: "Track B: Deal Mandates, Engineering/PMC Consultants, Compliance Advisors & CRO/NABL Labs",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "law-templates" as const,
    heading: "Track C: Law Firm / IP Attorney Precedent Law & 3-in-1 Practice Notice Workspace",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const STATUTORY_MANDATES = [
  {
    citation: "Chartered Accountants Act, 1949 (First Schedule Part I Clause 8) & ICAI Council General Guidelines Chapter VII",
    title: "Incoming Auditor Prohibition on 'Undisputed Audit Fees' Without Illegal Lien on Client Books",
    parties: "Outgoing Practicing CA Firms & Audit Partners vs Defaulting Corporate Auditees & Successor Auditors",
    holding:
      "Practicing Chartered Accountants are strictly barred by ICAI disciplinary norms from detaining client-owned Tally databases, books of account, vouchers, or digital signature tokens as ransom for unpaid bills. However, Chapter VII of the ICAI Council General Guidelines creates an equally potent ethical shield: an incoming Chartered Accountant cannot accept appointment as auditor of an entity if undisputed audit fees of the previous auditor remain unpaid—especially where those audit fees are explicitly provisioned under 'Audit Fees Payable' in the client's signed financial statements. Placing exact undisputed arrears on formal written record during the Clause (8) NOC exchange compels corporate boards to settle before their next statutory audit deadline.",
    impact:
      "Protects your Certificate of Practice (COP) from counter-complaints while blocking defaulting companies from silently rotating auditors every September.",
  },
  {
    citation: "Limitation Act, 1963 — Section 18 + Income Tax Act Section 194J (Form 26AS / AIS) & ICAI UDIN Trail",
    title: "Audited Balance-Sheet Provisions & 194J TDS Credits as Written Admissions of Debt",
    parties: "CA Firms, Architects, Engineering Consultants, Law Firms & Advisory Practices vs Defaulting Corporate Clients",
    holding:
      "When corporate clients stall professional bills for 12–30 months and later invent vague 'deficiency of service' excuses, their own statutory filings frequently destroy their defence. Under settled Supreme Court jurisprudence on Section 18 of the Limitation Act, booking 'Audit Fees Payable' or 'Consultancy Creditors' in an audited Balance Sheet—or deducting and depositing 10% TDS under Section 194J reflected in the professional's Form 26AS / AIS—constitutes compelling documentary acknowledgment of a liquidated contractual liability. Paired with tamper-proof ICAI UDIN logs, GST e-Invoices, and engagement letters, this record qualifies directly for rapid Order XXXVII CPC Summary Suits where defendants cannot defend without court leave.",
    impact:
      "Eliminates prolonged civil trials and resets the 3-year limitation clock using the defaulting company's own income-tax and MCA filings.",
  },
  {
    citation: "Architects (Professional Conduct) Regulations, 1989 Reg. 2(1)(xii) & Copyright Act, 1957 ss.13(1)(a), 17 & 51",
    title: "Architectural CAD/BIM/GFC Drawing Copyright & Successor-Architect Ethical Restriction",
    parties: "COA-Registered Architects, Urban Planners & Luxury Interior Studios vs Defaulting Developers & HNI Clients",
    holding:
      "Under Section 13(1)(a) read with Sections 17 and 51 of the Copyright Act, original architectural plans, 3D renderings, BIM models, and Good-for-Construction (GFC) working drawings are protected artistic works whose copyright stays with the architect unless assigned by a signed written instrument. A developer's implied license to construct from those drawings is conditional on paying agreed stage fees under the Council of Architecture (COA) Scale of Charges. Concurrently, COA Professional Conduct Regulation 2(1)(xii) restricts another registered architect from taking over a commissioned project without proper communication with the prior architect—giving studios dual leverage via Commercial Courts Act s.2(1)(c)(xvii) IP injunction notices and fee demands.",
    impact:
      "Stops developers from extracting sanction and GFC drawings at 50% payment and hiring a cheap draftsman to finish site execution.",
  },
  {
    citation: "Indian Contract Act, 1872 — ss.51–52, 73 & 205 + Supreme Court R.D. Saxena & IBBI CIRP Priority u/s 5(13)",
    title: "Mandate Tail-Period Enforcement, Reciprocal Sign-Off Holds & Court-Leave Discharge Protection",
    parties: "Investment Bankers, PMC/Structural Engineers, Law Firms, CRO/NABL Labs & Insolvency Professionals",
    holding:
      "Each specialist advisory vertical holds a distinct statutory enforcement lever: (a) Boutique investment bankers, debt-syndication DSAs, and subsidy consultants enforce 12-to-24-month Exclusivity and Tail-Period Survival clauses under Contract Act ss.73 & 205 backed by MCA Form CHG-1/PAS-3 closing records and Arbitration s.9 / Order XXXVIII r.5 interim protection; (b) Structural, MEP, PMC, and EIA engineers lawfully invoke Sections 51–52 reciprocal promises before releasing final non-emergency OC/stability sign-offs; (c) Law firms and patent attorneys comply with R.D. Saxena v. Balram Prasad Sharma (no lien on client files) while recording unpaid fee memos formally via CPC Order III Rule 4(2) discharge applications; and (d) CROs and NABL testing labs enforce GLP/ISO 17025 anti-contingency neutrality so fees never depend on a 'Pass' test outcome.",
    impact:
      "Equips every licensed practitioner and specialist advisory firm with court-tested leverage tailored to its exact regulator and closing trigger.",
  },
];

const FAQS = [
  {
    question: "Can a Chartered Accountant hold a client's Tally data, books of account, or DSC token until unpaid audit fees are cleared?",
    answer:
      "No. Under ICAI ethical standards and disciplinary rulings, an outgoing Chartered Accountant cannot exercise a lien over client-owned books, vouchers, or digital records—doing so exposes your Certificate of Practice to professional misconduct proceedings. Instead, hand over client property cleanly while formally notifying the incoming auditor of your unpaid undisputed audit fees under ICAI First Schedule Clause (8) and Chapter VII Guidelines, and instruct external litigation counsel to serve an Order XXXVII CPC / NI s.138 demand notice backed by UDIN logs and Form 26AS 194J credits.",
  },
  {
    question: "What makes an unpaid CA audit fee 'undisputed' under ICAI Council General Guidelines Chapter VII?",
    answer:
      "An audit fee is treated as undisputed when it was agreed under a signed engagement letter or board resolution and no bona fide written dispute was raised prior to fee demand—especially where the client itself provisioned 'Audit Fees Payable' in its audited Balance Sheet or deducted 10% TDS under Section 194J in Form 26AS. An incoming auditor is prohibited under Chapter VII from accepting an audit appointment while such undisputed audit fees of the outgoing auditor remain unpaid.",
  },
  {
    question: "A developer took our municipal sanction and GFC drawings, fired our architecture studio, and hired a draftsman to build. What can we do?",
    answer:
      "Serve a fact-verified combined Copyright Infringement & Stage-Fee Demand Notice immediately. Under Sections 13(1)(a), 17, and 51 of the Copyright Act, copyright in CAD/BIM and GFC drawings remains with your studio unless assigned in writing, and any implied construction license stands revoked upon fee default. Simultaneously notify any incoming registered architect under COA Professional Conduct Regulation 2(1)(xii) and escalate to Commercial Court (s.2(1)(c)(xvii)) for interim restraint and full stage-fee recovery.",
  },
  {
    question: "A promoter got a bank loan sanction or VC term sheet through our CMA/IM and closed directly 60 days later to avoid our 2% mandate fee. Can we recover?",
    answer:
      "Yes. If your signed Advisory or Debt-Syndication Mandate contains an Exclusivity and 12-to-24-month Tail-Period Survival Clause, closing directly with an introduced lender, PE fund, or acquirer triggers full contractual liability under Contract Act Sections 73 and 205 and the 'Effective Cause' doctrine. Verify disbursement via public MCA Form CHG-1 (charge registration) or Form PAS-3 (share allotment), serve a Tail-Breach Advocate Notice, and move Arbitration Act Section 9 or Order XXXVIII Rule 5 CPC to secure your fee before proceeds dissipate.",
  },
  {
    question: "Can a structural, MEP, PMC, or EIA consultant withhold a final Stability or Occupancy Certificate sign-off if 8 months of bills are unpaid?",
    answer:
      "Yes, provided you act through a formal written contractual suspension notice rather than informal verbal stalling. Under Sections 51 and 52 of the Indian Contract Act (reciprocal promises), a consultant is not bound to perform final commercial certification deliverables when the developer is in material breach of prior certified milestone invoices—while ensuring no emergency public-safety hazard is created. Udyam-registered engineering and PMC consultancies can simultaneously invoke MSMED Act s.15–18 (45-day cap and 3x RBI compound interest) and Income Tax s.43B(h).",
  },
  {
    question: "Under R.D. Saxena, advocates cannot keep client case files—so how do law firms and patent attorneys recover large corporate arrears?",
    answer:
      "In R.D. Saxena v. Balram Prasad Sharma (2000), the Supreme Court held that an advocate has no lien over client litigation files, but expressly affirmed the right to sue for unpaid professional fees. Law firms and patent attorneys protect recovery cleanly by: (1) returning client papers against a signed handover receipt, (2) seeking formal discharge with Court leave under CPC Order III Rule 4(2) while placing the itemized unpaid fee memo and government-filing disbursements on judicial record, and (3) filing an Order XXXVII CPC Summary Suit backed by engagement letters and 194J TDS credits.",
  },
  {
    question: "Our pharma sponsor's BA/BE clinical trial failed bioequivalence (or a factory sample failed BIS specs) and they refuse to pay our CRO / NABL lab invoice. Is that lawful?",
    answer:
      "No. Under NABL accreditation (ISO/IEC 17025) and Good Laboratory Practice (GLP) ethics, independent analytical testing laboratories and Contract Research Organizations are legally forbidden from making testing fees contingent on delivering a 'Pass' or favourable clinical outcome. You are paid for executing the scientific protocol impartially. Lawfully hold the Final Clinical Study Report (CSR) or formal regulatory test dossier under Contract Act ss.51–52 until overdue milestones clear, and enforce via Order XXXVII CPC or MSEFC Samadhaan.",
  },
  {
    question: "Can multi-partner CA, PCS, architectural, or engineering consultancies run bulk overdue fee recovery without harming firm reputation?",
    answer:
      "Yes. Delegating collection to external independent litigation counsel insulates your partners from awkward client friction and disciplinary counter-allegations. Start by testing one overdue corporate account for ₹999 (Fact-Verified + Email, WhatsApp & Speed Post RPAD), or upload 10 to 10,000+ aged audit, retainer, PMC, or testing-lab ledgers via CSV in our Bulk Institutional Representee Desk for dignified, council-ethics-verified recovery.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Institute of Chartered Accountants of India (ICAI — Code of Ethics & Chapter VII)",
    url: "https://www.icai.org/",
  },
  {
    title: "Council of Architecture (COA — Architects Professional Conduct Regulations, 1989)",
    url: "https://www.coa.gov.in/",
  },
  {
    title: "Copyright Act, 1957 (Sections 13, 17 & 51 Architectural Works) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 51–52, 73 & 205) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Insolvency and Bankruptcy Board of India (IBBI — CIRP Costs u/s 5(13) & 53)",
    url: "https://ibbi.gov.in/",
  },
  {
    title: "MSME Samadhaan Delayed Payment Portal (MSMED Act s.15–18 & s.43B(h))",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_URL}#service`,
  name: H1_TEXT,
  headline: H1_TEXT,
  serviceType:
    "Council-Ethics-Safe Professional Fee & Mandate Recovery for Chartered Accountants, Architects, Structural/PMC Engineering Consultants, Law Firms, PCS, IBBI Valuers, CRO/NABL Labs & M&A/Debt Advisors",
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  provider: {
    "@type": "LegalService",
    name: "LegalRecovery.in (AMA Legal Solutions)",
    url: SITE_URL,
  },
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-23 Chartered Accountants, Architects, Engineering Consultants, Law Firms & Advisory Fee Recovery Sub-Routes",
  numberOfItems: IND_23_SPOKES.length,
  itemListElement: IND_23_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
  })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CA, Architects, Engineers & Advisors Fee Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function CaArchitectsConsultantsHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([SERVICE_SCHEMA, ITEM_LIST_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-23 Pillar Hub</span>
            <span className="text-slate-500">&bull;</span>
            <span>CAs, Architects, Engineers, Law Firms, PCS, CROs &amp; Deal Advisors</span>
            <span className="text-slate-500">&bull;</span>
            <span>Council-Ethics Safe</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer (ICAI Clause 8, COA IP, Contract Act Tail Clauses &amp; Order XXXVII CPC)
            </span>
            Licensed Indian practitioners—CAs, Architects, Advocates, PCS, and IBBI Valuers—cannot hold client books or files hostage without risking license suspension. LegalRecovery.in prepares and sends notices to enforce <strong>ICAI Chapter VII undisputed audit fees</strong>, <strong>Form 26AS 194J admissions</strong>, <strong>COA architectural drawing copyright</strong>, and <strong>12–24 month debt/M&amp;A mandate tail clauses</strong> with full disciplinary safety.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">ICAI Ch. VII</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Clause (8) undisputed audit-fee intimation + Form 26AS 194J s.18 acknowledgment
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">COA + s.51 IP</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Architectural CAD/BIM &amp; GFC drawing copyright injunction + Reg. 2(1)(xii) shield
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">12–24 Mo Tail</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Contract Act s.73/205 mandate survival &amp; s.9 security on bypassed loan/M&amp;A deals
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">&#8377;50K – &#8377;1 Cr+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Single &#8377;999 live test or multi-partner CSV desk for 10–10,000+ aged client ledgers
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>
              Legal Review: <strong className="text-slate-200">{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span>
              Target Creditors:{" "}
              <strong className="text-slate-200">
                CA Managing Partners, Principal Architects, Structural/MEP/PMC Consultants, Deal Advisors, PCS &amp; Valuers
              </strong>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: "CA, Architects, Engineers & Advisors Fee Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <ProfessionalServicesHubTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Council Ethics Trap */}
            <section
              id="heading-ethics-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Licensed Professionals Cannot Hold Client Books Hostage
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  Generic commercial debt collection advice breaks down completely for India&rsquo;s regulated professions. Unlike a commodity wholesaler who can halt supply or assert a warehouse lien, <strong>Chartered Accountants (ICAI)</strong>, <strong>Registered Architects (COA)</strong>, <strong>Advocates (BCI)</strong>, <strong>Practicing Company Secretaries (ICSI)</strong>, and <strong>IBBI Registered Valuers / Insolvency Professionals</strong> answer to statutory disciplinary councils. Defaulting corporate promoters know this asymmetry well—and weaponize it brazenly.
                </p>
                <p>
                  Every financial year follows the same predatory playbook: a promoter pressures a CA firm to upload signed Statutory Audit or Tax Audit reports with UDIN on September 30 or October 31 promising immediate NEFT, bounces the fee cheque in November, appoints a new auditor next spring, and threatens an ICAI ethics complaint if the outgoing firm delays returning Tally backups. Developers extract Concept, Municipal Sanction, and Good-for-Construction (GFC) CAD/BIM drawings from an architectural studio at 40–50% stage billing, terminate before site supervision, and hire a cheap draftsman to finish construction. Corporate borrowers take a boutique investment banker&rsquo;s CMA data, Information Memorandum, and bank/PE introduction, wait 60 days after the term sheet, and close directly to evade a &#8377;50 Lakh to &#8377;2.5 Crore success fee.
                </p>
                <p>
                  Elevating far beyond general{" "}
                  <Link
                    href="/recovery/consultancy-fees"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    consultancy fee recovery
                  </Link>
                  , LegalRecovery.in separates your professional practice from hostile collection friction. We prepare dignified, fact-verified statutory notices activating <strong>ICAI Chapter VII undisputed audit-fee protocols</strong>, <strong>Form 26AS Section 194J written debt acknowledgments</strong>, <strong>Copyright Act s.51 architectural drawing injunctions</strong>, <strong>Contract Act s.51–52 reciprocal sign-off holds</strong>, and{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Order XXXVII CPC summary suits
                  </Link>
                  —recovering ₹50,000 retainers to ₹1 Crore+ deal mandates without ever exposing your license.
                </p>
              </div>
            </section>

            {/* Section 2: Multi-Track Escalation Matrix */}
            <section
              id="heading-multi-track-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Multi-Track Recovery Matrix: CAs, Architects, Engineers &amp; Deals
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Match your exact practice vertical, ethical boundary, ticket band, and documentary proof to the highest-leverage statutory recovery forum in India:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Practice Vertical &amp; Dispute Type</th>
                      <th className="p-3 sm:p-4 font-bold">Ticket &amp; Aging</th>
                      <th className="p-3 sm:p-4 font-bold">Primary Statutory &amp; Council Trigger</th>
                      <th className="p-3 sm:p-4 font-bold">Target Forum &amp; Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        CA Firms: Statutory/Tax Audit, GST &amp; Virtual-CFO Retainers
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;1L–&#8377;45L &bull; 60–365 DPD</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        ICAI Clause (8) + Ch. VII Undisputed Fees + UDIN &amp; 26AS 194J
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        Incoming-CA Intimation + NI s.138 / Order XXXVII CPC
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Architects &amp; Luxury Interior Studios (GFC Drawings)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;4L–&#8377;1.2 Cr &bull; Stage Default</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        COA Reg. 2(1)(xii) + Copyright Act ss.13/51 + MSMED s.15–18
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-emerald-700">
                        IP License Revocation + Commercial Court s.2(1)(c)(xvii) / MSEFC
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Investment Bankers, Debt Syndicators &amp; M&amp;A Advisors
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;15L–&#8377;3 Cr+ &bull; Closing Bypass</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Contract Act ss.73/205 Tail Clause + MCA CHG-1 / PAS-3 Proof
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Arbitration s.9 / Order XXXVIII r.5 Freeze + Commercial Suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Structural, MEP, PMC, EIA &amp; Geotechnical Consultants
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;3L–&#8377;90L &bull; Pre-OC Hold</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Contract Act ss.51–52 Reciprocal Promises + MSMED &amp; s.43B(h)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-amber-800">
                        Written Sign-Off Suspension + MSEFC 3x RBI / Order XXXVII
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Law Firms, Counsel Chambers &amp; Patent/IP Attorneys
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;2L–&#8377;80L &bull; Fee Memos/Filings</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        R.D. Saxena Compliance + CPC Order III Rule 4(2) Discharge
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        Court-Leave Fee Recording + Order XXXVII Summary Suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        PCS, IBBI Registered Valuers &amp; Insolvency RPs/IRPs
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;1L–&#8377;65L &bull; MCA / CIRP Dues</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        ICSI Guidelines + IBBI CIRP Priority u/s 5(13)/53(1)(a)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-emerald-700">
                        NCLT CIRP Cost Application / MCA Challan Order 37 Suit
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        ISO/NABH, CERT-In Cyber Audit, ESG &amp; PLI Subsidy Advisors
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;2L–&#8377;1 Cr &bull; Post-Sanction</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Engagement Letter + Public Sanction Order + s.43B(h) Tax Hook
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        CFO 43B(h) Demand + MSEFC Samadhaan / Order XXXVII CPC
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        CRO Clinical Trial (BA/BE) &amp; NABL Analytical Testing Labs
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">&#8377;2.5L–&#8377;95L &bull; Failed-Sample Default</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        NABL / ISO 17025 / GLP Anti-Contingency Mandate + s.51–52
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        Final CSR Report Hold + Order XXXVII / Commercial Court
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Visual Workflow Architecture */}
            <section
              id="heading-recovery-pipeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4-Stage Ethics-Safe Professional Fee &amp; Mandate Escalation
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Designed specifically for licensed practitioners and advisory partners: lock admissions first, clear regulatory ethics cleanly, deploy external advocate notices, and escalate directly into summary or injunctive forums:
              </p>

              {/* Desktop SVG Pipeline */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 mb-4 overflow-x-auto">
                <svg
                  viewBox="0 0 820 200"
                  width="820"
                  height="200"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Four-stage council-ethics-safe professional fee and advisory mandate recovery workflow"
                >
                  <rect x="10" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="100" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 &bull; DAY 1</text>
                  <text x="100" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Admission Lock</text>
                  <text x="100" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">UDIN, Form 26AS 194J,</text>
                  <text x="100" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Balance Sheet Note, GFC</text>
                  <text x="100" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">CAD Logs or MCA CHG-1</text>

                  <path d="M 192 100 L 214 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowProf)" />

                  <rect x="216" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="306" y="60" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 &bull; DAY 2</text>
                  <text x="306" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Council Protocol</text>
                  <text x="306" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Return Client Records,</text>
                  <text x="306" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">Record ICAI Ch. VII / COA</text>
                  <text x="306" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">or Order III r.4(2) Dues</text>

                  <path d="M 398 100 L 420 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowProf)" />

                  <rect x="422" y="30" width="180" height="140" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="512" y="60" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 3 &bull; DAY 3–15</text>
                  <text x="512" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Counsel Notice</text>
                  <text x="512" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">External Advocate Demand</text>
                  <text x="512" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">(IP Revocation / Tail /</text>
                  <text x="512" y="138" textAnchor="middle" fill="#CBD5E1" fontSize="10.5">43B(h) / NI s.138)</text>

                  <path d="M 604 100 L 626 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowProf)" />

                  <rect x="628" y="30" width="182" height="140" rx="14" fill="#DC2626" />
                  <text x="719" y="60" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="bold">STAGE 4 &bull; ESCALATION</text>
                  <text x="719" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Summary / Restraint</text>
                  <text x="719" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">Order XXXVII Summary,</text>
                  <text x="719" y="122" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">Copyright Injunction, s.9</text>
                  <text x="719" y="138" textAnchor="middle" fill="#FFFFFF" fontSize="10.5">Freeze or MSEFC Award</text>

                  <defs>
                    <marker id="arrowProf" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                      <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 • Day 1",
                    title: "Statutory Admission Lock",
                    detail: "Assemble Engagement Letter, UDIN logs, Form 26AS 194J TDS credits, Balance Sheet notes, CAD timestamps, or MCA CHG-1 filings.",
                  },
                  {
                    stage: "Stage 2 • Day 2",
                    title: "Council-Safe Record Protocol",
                    detail: "Return client books/files cleanly while logging undisputed fees via ICAI Clause (8), COA Reg. 2(1)(xii), or CPC Order III r.4(2).",
                  },
                  {
                    stage: "Stage 3 • Day 3–15",
                    title: "External Advocate Demand",
                    detail: "Dispatch Email + WhatsApp + Speed Post RPAD notice invoking 194J admission, IP revocation, Tail Survival, s.51–52, or s.43B(h).",
                  },
                  {
                    stage: "Stage 4 • Escalation",
                    title: "Summary Suit or Restraint",
                    detail: "Escalate to Order XXXVII CPC Summary Suit, Commercial Court Copyright Injunction, Arbitration s.9 freeze, NCLT CIRP, or MSEFC.",
                  },
                ].map((item) => (
                  <div key={item.stage} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[11px] font-bold uppercase text-red-400 mb-1">{item.stage}</p>
                    <p className="text-sm font-extrabold mb-1">{item.title}</p>
                    <p className="text-xs text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Playbooks */}
            <section
              id="heading-interactive-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Interactive Playbooks: ICAI NOC, GFC Copyright &amp; Deal Bypass
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Explore step-by-step creditor strategies across the four highest-value payment evasion patterns facing Indian CAs, Architects, Investment Bankers, Engineering/PMC Consultants, and Analytical Testing Labs:
              </p>

              <ProfessionalServicesHubScenarioTabs />
            </section>

            {/* Section 5: Dual-Track CTA & Bulk CSV Desk */}
            <section
              id="heading-csv-batch-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Start a &#8377;999 Practice Test or Bulk Advisory Firm CSV Desk
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Test our external-advocate recovery desk on a single stalled corporate audit, architectural stage bill, or bypassed mandate for &#8377;999—or clear 10 to 10,000+ aged client ledgers across your entire multi-partner firm via CSV ahead of financial year-end closing.
              </p>

              <ProfessionalServicesHubCTA />
            </section>

            {/* Section 6: Binding Statutory Mandates */}
            <section
              id="heading-statutory-framework"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  ICAI Chapter VII, COA IP, Form 26AS 194J &amp; Tail-Period Law
                </h2>
              </div>

              <div className="space-y-4">
                {STATUTORY_MANDATES.map((item) => (
                  <div
                    key={item.citation}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.citation}
                    </p>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2.5">{item.parties}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      {item.holding}
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3.5 py-2 text-xs font-semibold text-emerald-800">
                      Creditor Leverage: {item.impact}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Worked Economics */}
            <section
              id="heading-worked-ledgers"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Ledgers: &#8377;18.5L CA/194J Audit vs &#8377;75L Debt Mandate
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Worked Case 1 */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/60 mb-3">
                    Case A &bull; Practicing CA Firm (ICAI Clause 8 + Form 26AS Checkmate)
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold mb-3">
                    &#8377;18,50,000 Unpaid Statutory Audit, Tax Audit &amp; GST Retainer
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 mb-4">
                    <li>&bull; <strong>FY Statutory &amp; Tax Audit (UDIN Signed, BS Provisioned):</strong> &#8377;8,50,000</li>
                    <li>&bull; <strong>GST Appeal Representation &amp; Monthly Advisory (10 Months):</strong> &#8377;7,20,000</li>
                    <li>&bull; <strong>GST @ 18% Invoiced &amp; Paid by Firm (Less 194J TDS in 26AS):</strong> &#8377;2,80,000</li>
                    <li>&bull; <strong>Statutory Admission Proof:</strong> &#8377;1,57,000 TDS u/s 194J visible in Form 26AS + Balance-Sheet Liability Note (Limitation Act s.18 reset)</li>
                    <li>&bull; <strong>Ethical Compliance:</strong> Tally &amp; client books returned cleanly against receipt; Clause (8) reply cites exact &#8377;8.50L undisputed audit fee</li>
                  </ul>
                  <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-xl p-3 text-xs text-emerald-300 font-semibold">
                    Outcome: Incoming auditor refuses appointment under ICAI Chapter VII until statutory audit fee clears; external advocate Order XXXVII notice collects full &#8377;18.50L ledger + 18% interest.
                  </div>
                </div>

                {/* Worked Case 2 */}
                <div className="bg-slate-50 text-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 mb-3">
                    Case B &bull; Boutique Debt-Syndication Advisor (Tail-Period Bypass)
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold mb-3">
                    &#8377;75,00,000 Bypassed 1.5% Success Fee on &#8377;50 Cr Term Loan
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 mb-4">
                    <li>&bull; <strong>Signed Exclusive Mandate:</strong> 1.5% success fee + 18-month Tail-Period survival clause</li>
                    <li>&bull; <strong>Evidentiary Trail:</strong> CMA/TEVR submitted to bank, intro email &amp; sanction discussions; promoter closed directly 65 days after mandate expiry</li>
                    <li>&bull; <strong>Public Closing Proof:</strong> MCA Form CHG-1 filed showing &#8377;50 Cr charge registered in favour of the exact introduced bank</li>
                    <li>&bull; <strong>Claimed Principal + GST + Commercial Interest:</strong> &#8377;75,00,000 + &#8377;13,50,000 GST (enforceable via Arbitration s.9 / Commercial Court)</li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold">
                    Outcome: Tail-Breach Advocate Notice enclosing MCA CHG-1 extracts &amp; warning of Section 9 interim attachment forces negotiated closing-table settlement before trial.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Complete Hub-and-Spoke Directory */}
            <section
              id="heading-ind23-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  All 9 CA, Architect, Law, Engineering &amp; Advisory Sub-Routes
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Explore every specialist recovery playbook, Supreme Court precedent commentary, and council-ethics-verified notice template built for the IND-23 professional services &amp; advisory cluster:
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => {
                  const trackSpokes = IND_23_SPOKES.filter((s) => s.track === track.key);
                  return (
                    <div key={track.key}>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 pb-2 border-b border-slate-200">
                        {track.heading}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {trackSpokes.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group block bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-4 transition-all shadow-sm hover:shadow-md"
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${track.badgeClass}`}
                              >
                                {spoke.archetypeLabel}
                              </span>
                              <span className="text-[11px] font-mono text-slate-400">{spoke.id}</span>
                            </div>
                            <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                              {spoke.title}
                            </h4>
                            <p className="text-[11px] font-semibold text-slate-500 mb-2">
                              {spoke.statute}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">{spoke.summary}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 9: Seed Resources, Calculators & Templates */}
            <section
              id="heading-cross-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Consultancy Recovery, IP Rights, Order 37 &amp; MSME Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/recovery/consultancy-fees"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Core Service Route</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Consultancy &amp; Professional Retainer Fee Recovery Portal
                  </p>
                  <p className="text-xs text-slate-600">
                    End-to-end legal notice and pre-litigation recovery workflow for unpaid advisory, retainer, and milestone invoices across India.
                  </p>
                </Link>

                <Link
                  href="/copyright-not-transferred-until-paid-freelancer"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">IP Ownership &amp; Copyright</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Copyright Not Transferred Until Paid (Architectural &amp; Design IP)
                  </p>
                  <p className="text-xs text-slate-600">
                    How Sections 17 &amp; 51 of the Copyright Act protect unpaid CAD drawings, blueprints, interior concepts, and technical deliverables.
                  </p>
                </Link>

                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">Fast-Track Civil Forum</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Order XXXVII CPC Summary Suit for Written Engagement Letters
                  </p>
                  <p className="text-xs text-slate-600">
                    Convert signed mandates, audited Balance-Sheet fee provisions, and Form 26AS 194J TDS admissions into fast-track civil decrees.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Interactive T1 Calculator</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    MSME Delayed Payment Interest Calculator (3x RBI Bank Rate)
                  </p>
                  <p className="text-xs text-slate-600">
                    Calculate monthly compounded MSMED Section 16 interest for Udyam-registered architecture, engineering/PMC, advisory, and lab firms.
                  </p>
                </Link>

                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">March 31 Tax Leverage</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Section 43B(h) Income Tax 45-Day Payment Disallowance Rule
                  </p>
                  <p className="text-xs text-slate-600">
                    Put corporate CFOs on formal notice of 25–30% tax disallowance when Udyam Micro/Small consultancy &amp; testing bills cross 45 days.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Institutional CSV Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Bulk Recovery Cases: Multi-Partner Firm CSV Onboarding
                  </p>
                  <p className="text-xs text-slate-600">
                    Upload 10 to 10,000+ overdue CA, PCS, architecture, engineering, or lab client accounts for unified Email + WhatsApp + RPAD dispatch.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-professional-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: ICAI Clause 8, COA Drawings, Tail Clauses &amp; R.D. Saxena
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-3 font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-statutory-portals"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Councils, Bare Acts &amp; Judicial Reference Portals
                </h2>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626] text-xs font-semibold text-slate-800 hover:text-[#DC2626] transition-colors"
                    >
                      <span>{src.title}</span>
                      <span aria-hidden="true">&nearr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <div className="bg-[#F8F9FB] border-t border-slate-200">
        <RelatedRecoveryGuides />
      </div>
    </div>
  );
}
