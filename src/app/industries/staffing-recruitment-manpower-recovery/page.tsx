import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import StaffingRecoveryTableOfContents from "./StaffingRecoveryTableOfContents";
import StaffingRecoveryScenarioTabs from "./StaffingRecoveryScenarioTabs";
import StaffingRecoveryCTA from "./StaffingRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/staffing-recruitment-manpower-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Recruitment, Staffing, Manpower & FMS Debt Recovery India";
const PAGE_DESCRIPTION =
  "Recover unpaid 8.33%–16% placement fees, prosecute client 'backdoor hires', and collect overdue temp-staffing payroll & security/housekeeping FMS bills.";
const H1_TEXT =
  "Placement Fee, Backdoor-Hire & Monthly Payroll Invoice Recovery for Recruitment, Staffing & Facility Management Agencies";

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
  archetype: "G1" | "L1" | "P1";
  archetypeLabel: string;
  track: "permanent-recruitment" | "contract-staffing" | "fms-overseas";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_11_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-136",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "permanent-recruitment",
    title: "Client 'Backdoor Hired' Your Candidate? Detection & Placement Fee Recovery",
    url: "/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india",
    statute: "Contract Act s.70/73 & BSA s.63 Timestamp Law",
    summary:
      "Prove candidate introduction seniority via ATS/email header timestamps, audit LinkedIn and corporate email verification, and enforce 12-month ownership clauses with 25% penal fee damages.",
  },
  {
    id: "B2B-138",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "permanent-recruitment",
    title: "Stopping '90-Day Replacement Guarantee' Abuse & Withheld Day-30 Invoices",
    url: "/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery",
    statute: "Contract Act s.51–54 Condition Precedent",
    summary:
      "Disarm HR tactics turning replacement warranties into 90-day free credit windows; enforce unconditional Day-30 invoice clearance and bar refund claims following corporate restructuring.",
  },
  {
    id: "B2B-140",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "permanent-recruitment",
    title: "Retained CXO Search Mandates: Shortlist Tranches & Cancelled-Search Kill Fees",
    url: "/executive-search-cxo-retainer-milestone-success-fee-recovery",
    statute: "Order XXXVII CPC & Retained Mandate Letters",
    summary:
      "Enforce 1/3–1/3–1/3 CXO search fee tranches, recover cancellation kill fees when promoters freeze hiring after receiving competitive talent maps, and audit undisclosed sign-on bonuses and ESOPs.",
  },
  {
    id: "B2B-142",
    archetype: "L1",
    archetypeLabel: "L1 Statute & Precedent",
    track: "permanent-recruitment",
    title: "No Signed MSA? Placement Fee Recovery via 'Acceptance by Conduct' & IT Act",
    url: "/recruitment-terms-of-business-unsigned-email-acceptance-recovery",
    statute: "Contract Act s.8 & IT Act s.10A Electronic Validity",
    summary:
      "Win full 8.33% market placement fees where clients interviewed emailed resumes without wet-signing terms, establishing binding acceptance by performance under Indian Contract Act Section 8.",
  },
  {
    id: "B2B-137",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "contract-staffing",
    title: "Temp Staffing Payroll, EPF, ESIC & 18% GST Invoice Default Recovery",
    url: "/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery",
    statute: "CLRA s.21(4) Principal Employer Liability & IBC s.8",
    summary:
      "Recover overdue pass-through salary, EPF, ESIC, and GST outlays on 5%–8% markups using statutory principal employer liability, MSME Section 43B(h) tax disallowances, and IBC Section 8 notices.",
  },
  {
    id: "B2B-141",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "contract-staffing",
    title: "Temp-to-Perm Conversion & Workforce 'Rebadging' Buyout Fee Recovery",
    url: "/temp-to-perm-contract-employee-absorption-buyout-fee-recovery",
    statute: "Contract Act s.73/74 C2H Buyout Slabs",
    summary:
      "Enforce contractual C2H transfer fees when clients absorb contract associates onto direct rolls or orchestrate mass rebadging to rival staffing vendors while holding outgoing invoices hostage.",
  },
  {
    id: "B2B-143",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "contract-staffing",
    title: "Industrial & Warehouse Labour Contractor Factory Bill & Minimum-Wage Recovery",
    url: "/blue-collar-industrial-labour-contractor-factory-bill-recovery",
    statute: "Statutory VDA Escalation (*Tarapore & Co.*) & MSMED",
    summary:
      "Recover withheld factory contractor bills, biometric gate-muster discrepancies, and statutory State Minimum-Wage Variable Dearness Allowance (VDA) differential arrears from principal employers.",
  },
  {
    id: "B2B-139",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "fms-overseas",
    title: "PSARA Security Guard & Housekeeping FMS Bill Recovery & Theft Claim Rebuttal",
    url: "/security-guard-housekeeping-facility-management-unpaid-bill-recovery",
    statute: "MSMED Act s.15–18 & Raman Iron Foundry Doctrine",
    summary:
      "Counter bad-faith uninvestigated theft debit notes manufactured by RWAs, builders, and factories to erase 4 months of security guard wages; enforce signed daily attendance muster rolls at MSEFC.",
  },
  {
    id: "B2B-144",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "fms-overseas",
    title: "Overseas Manpower Recruiting Agents (RA): Foreign & GCC Employer Recovery",
    url: "/overseas-manpower-recruiting-agent-foreign-employer-fee-recovery",
    statute: "eMigrate Demand Letters & CPC s.44A Decrees",
    summary:
      "Recover unpaid recruitment service charges, trade-test costs, and airfare advances from GCC, European, and Asian EPC contractors using eMigrate blacklisting intimations and cross-border notices.",
  },
  {
    id: "B2B-145",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "fms-overseas",
    title: "HR & Staffing Legal Notice Pack: Backdoor Hiring & Payroll Arrears Formats",
    url: "/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice",
    statute: "Contract Act s.8/70/73, MSMED s.16 & Order 37 CPC",
    summary:
      "Downloadable advocate-vetted commercial notice formats complete with CV timestamp schedules, Section 8 conduct-acceptance pleadings, statutory payroll outlay tables, and 18% interest clauses.",
  },
];

const SPOKE_TRACKS: {
  key: IndustrySpoke["track"];
  heading: string;
  badgeClass: string;
}[] = [
  {
    key: "permanent-recruitment",
    heading: "Track A — Permanent Recruitment, Backdoor Hires, CXO Retainers & Unsigned MSAs",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "contract-staffing",
    heading: "Track B — Temp Staffing, Flexi-Payroll Outlays, C2H Buyouts & Factory Labour",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "fms-overseas",
    heading: "Track C — Security Guards & FMS Arrears, Overseas MEA Recruiting & Notice Templates",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const STATUTORY_PRECEDENTS = [
  {
    citation: "Supreme Court of India (Constitution Bench, 1962) — Section 70 Contract Act",
    title: "State of West Bengal v. B.K. Mondal & Sons (AIR 1962 SC 779) — Quantum Meruit Doctrine",
    parties: "Recruitment Agencies & Headhunters v. Corporate Employers Enjoying Candidate Placements",
    holding:
      "The Supreme Court Constitution Bench held that three conditions are sufficient to establish a claim under Section 70 of the Indian Contract Act: (1) the person must lawfully do something for another or deliver something to him; (2) he must not intend to act gratuitously; and (3) the person for whom something is done must enjoy the benefit thereof. Where an agency sources, screens, and introduces a candidate whose qualifications meet the client's requisition, and the client interviews and appoints that candidate, the client cannot evade paying fair remuneration by claiming there was no formal bilateral contract executed.",
    impact:
      "Demolishes client defenses alleging that 'no recruitment fees are payable because the candidate was hired via a direct link' or 'the HR manager had no formal delegation to sign the agency agreement'.",
  },
  {
    citation: "English Common Law & Indian Commercial Precedents — Effective Cause of Introduction",
    title: "Millar, Son & Co. v. Radford (1903) & Green v. Bartlett (1863) — Effective Cause Principle",
    parties: "Executive Search Firms & Staffing Agencies v. Circumventing Enterprise Clients",
    holding:
      "Under settled agency and commercial law, an intermediary is entitled to its agreed commission if its introduction was the 'effective cause' of the commercial transaction. The introduction does not cease to be the effective cause merely because the principal took over negotiations directly, concluded the employment terms after a hiatus of 60 to 180 days, or altered the candidate's initial designation or reporting department.",
    impact:
      "Enables recruitment agencies to claim full 8.33% to 16% placement fees in backdoor hiring disputes, even when the client alters the candidate's job title from Senior Architect to Engineering Manager.",
  },
  {
    citation: "Contract Labour (Regulation & Abolition) Act, 1970 — Section 21(4) & Code on Wages, 2019",
    title: "Principal Employer's Absolute Statutory Liability for Unpaid Contract Associate Wages",
    parties: "Contract Staffing Companies & Manpower Agencies v. Principal Corporate Employers",
    holding:
      "Section 21(4) of the CLRA Act expressly provides that in case a contractor fails to make payment of wages within the prescribed period or makes short payments, then the Principal Employer shall be liable to make payment of wages in full or the unpaid balance due, as the case may be, to the contract labour employed by the contractor. By statutory extension, where a staffing agency discharges wages out-of-pocket, the Principal Employer cannot withhold invoice reimbursement, because doing so constitutes indirect wage withholding contrary to statutory public policy.",
    impact:
      "Elevates unpaid monthly temp-staffing payroll invoices from unsecured commercial claims into mandatory statutory wage liabilities before Labour Commissioners and Commercial Courts.",
  },
  {
    citation: "Indian Contract Act, 1872 — Section 8 & IT Act, 2000 — Section 10A",
    title: "Contract Formation by Performance & Electronic Offer Acceptance Without Wet-Ink Signature",
    parties: "Recruitment Consultancies v. Corporate HR Departments Pleading 'Unsigned Terms'",
    holding:
      "Under Section 8 of the Indian Contract Act, 1872, performance of the conditions of an offer, or the acceptance of any consideration for a reciprocal promise, constitutes an acceptance of the proposal. Section 10A of the Information Technology Act, 2000 accords full legal recognition and enforceability to contracts concluded electronically via email or digital messaging. When an HR representative receives an agency's fee schedule, requests CVs, schedules interviews, and hires the recommended candidate, a binding contract is created by conduct.",
    impact:
      "Neutralizes corporate legal departments attempting to avoid 8.33% fee liability on grounds that the agency's Master Services Agreement (MSA) was undergoing internal legal review and remained unsigned.",
  },
  {
    citation: "Supreme Court of India (1973) — Union of India v. Raman Iron Foundry (AIR 1974 SC 1265)",
    title: "Prohibition Against Unilateral Set-Off of Unadjudicated Claims Against Admitted Invoices",
    parties: "Security Guard Agencies & Facility Management Companies v. Defaulting RWAs & Factories",
    holding:
      "The Supreme Court established that a purchaser or principal has no authority to unilaterally adjust, withhold, or set off an unadjudicated claim for damages (such as alleged theft, property loss, or performance deficiencies) against liquidated amounts due under admitted service invoices. A claim for unliquidated damages is merely an inchoate right to sue; it does not constitute an existing debt until adjudicated by a competent judicial forum.",
    impact:
      "Stops residential societies (RWAs), builders, and manufacturing plants from creating fictitious 'copper cable / inventory theft debit notes' to wipe out 3 to 6 months of security guard and facility management bills.",
  },
  {
    citation: "MSMED Act, 2006 — Section 15 to Section 18 & Section 43B(h) of the Income-tax Act, 1961",
    title: "Mandatory 45-Day Payment Window, 3x RBI Bank Rate Compound Interest & Tax Disallowance",
    parties: "Udyam-Registered Staffing, Recruitment & Facility Management Service MSMEs",
    holding:
      "Agencies registered under Udyam within service NIC classifications qualify as Micro or Small Service Enterprises. Under Section 15 of the MSMED Act, buyers must settle dues within 45 days. Section 16 mandates monthly compound interest at 3 times the RBI Bank Rate (~19.5% to 20.25% p.a.) for each day of default. Under Section 43B(h) of the Income-tax Act, unpaid MSME dues are disallowed as corporate tax expenses in the defaulting client's assessment for that financial year.",
    impact:
      "Forces enterprise CFOs to settle overdue staffing, recruitment, and guarding bills ahead of other unsecured creditors to protect their corporate income-tax deductions before March 31.",
  },
];

const FAQS = [
  {
    question:
      "Can our recruitment firm recover placement fees if the client never signed our Terms of Business (MSA)?",
    answer:
      "Yes. Under Section 8 of the Indian Contract Act, 1872, performance of the conditions of an offer, or the acceptance of any consideration for a reciprocal promise, constitutes binding acceptance by conduct. When an employer receives your emailed Terms of Business, opens candidate profiles, schedules interviews, and hires the candidate, courts treat the contract as legally concluded. Electronic emails and WhatsApp communications are valid contracts under Section 10A of the Information Technology Act, 2000.",
  },
  {
    question:
      "How do we prove a client committed a 'backdoor hire' after rejecting our candidate on email?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, you prove candidate circumvention by combining three digital evidence pillars: (1) your ATS or email header submission timestamp confirming original introduction; (2) client interview scheduling correspondence; and (3) verified proof of employment via the candidate's updated LinkedIn profile, active company email domain, or EPFO Universal Account Number (UAN) monthly contribution records demonstrating joining within your 12-month ownership window.",
  },
  {
    question:
      "Can an enterprise client delay our Day-30 placement invoice citing a '90-day replacement guarantee'?",
    answer:
      "No. In standard recruitment law, the 90-day free replacement guarantee is a conditional subsequent warranty governed by Sections 51–54 of the Indian Contract Act. The client's right to request a replacement candidate triggers only if the client fulfilled its own condition precedent: settling the placement fee invoice within the contractual 15 or 30 days of joining. Withholding the Day-30 payment forfeits the client's replacement warranty and makes the entire fee immediately recoverable with interest.",
  },
  {
    question:
      "What legal remedies exist when a temp-staffing client defaults on ₹50 Lakh of monthly payroll bills?",
    answer:
      "Because 90%–94% of a temp-staffing invoice represents pass-through salaries, EPF, and ESIC already disbursed by the agency, you have three simultaneous escalation tracks: (1) serve a 15-day statutory demand under Contract Labour Act Section 21(4) holding the Principal Employer directly liable; (2) issue an MSMED Act demand warning of 3x RBI compound interest and Section 43B(h) corporate income-tax disallowance; and (3) if total unpaid arrears exceed ₹1 Crore, serve a Form 3/4 Demand Notice under Section 8 of the Insolvency and Bankruptcy Code (IBC, 2016).",
  },
  {
    question:
      "Can a client absorb our contract employees directly onto their payroll without paying a C2H buyout fee?",
    answer:
      "No. Contract-to-Hire (C2H) agreements contain strict non-solicitation, conversion slab, and liquidated damages clauses enforceable under Sections 73 and 74 of the Indian Contract Act. If a client absorbs deployed personnel onto its own payroll—or rebadges them through a lower-cost rival vendor—without paying the scheduled conversion fee (typically 8% to 15% of annual CTC depending on months completed), the agency can file an Order XXXVII summary suit or commercial arbitration claim for full buyout damages.",
  },
  {
    question:
      "How can security and facility management agencies defeat bogus 'theft debit notes' issued upon contract exit?",
    answer:
      "Under the Supreme Court's ruling in Union of India v. Raman Iron Foundry, a client cannot unilaterally adjust unadjudicated damage claims against admitted wage invoices. To defeat bogus theft claims, produce your daily attendance muster rolls countersigned by site supervisors, demand copies of contemporaneous police FIRs (which defaulting clients rarely file), and file an immediate petition before the Micro & Small Enterprises Facilitation Council (MSEFC) under Section 18 of the MSMED Act.",
  },
  {
    question:
      "Do recruitment, flexi-staffing, and security agencies qualify for MSME Samadhaan and Section 43B(h)?",
    answer:
      "Yes. Agencies registered with an active Udyam Certificate under service classifications (NIC 7810 for employment placement agencies, NIC 7820 for temporary staffing, NIC 7830 for human resources management, and NIC 8010 for private security activities) qualify as Micro or Small Service Enterprises. They enjoy the mandatory 45-day settlement cap, statutory 3x RBI Bank Rate compound interest under Section 16, and Section 43B(h) buyer tax disallowance.",
  },
  {
    question:
      "Can our staffing firm test the legal recovery portal on 1 client before uploading our complete unpaid roster?",
    answer:
      "Yes. You can test LegalRecovery.in on a single overdue placement fee or monthly payroll invoice for ₹999. Our team drafts an advocate statutory notice served across Email, Business WhatsApp, and physical Speed Post RPAD with electronic tracking manifests. For staffing firms and FMS agencies managing 10 to 10,000+ overdue corporate accounts, our Enterprise CSV Desk enables bulk onboarding with multi-branch Representee entity isolation.",
  },
  {
    question:
      "What happens if an introduced candidate resigns on Day 45 after the client paid the placement invoice?",
    answer:
      "If the client settled the invoice on time, the contractual replacement clause applies. The agency must provide a replacement candidate within 30 to 45 days. However, the agency is under no legal obligation to refund cash fees unless explicitly stipulated. Furthermore, if the candidate resigned due to client breaches—such as unilateral salary cuts, altered job location, toxic work environment, or non-payment of joining bonuses—the replacement warranty is legally excused.",
  },
  {
    question:
      "Can our staffing agency legally withdraw deployed contract staff if a factory stops paying invoices?",
    answer:
      "Yes. Staffing contracts contain standard demobilization and work-stoppage clauses. However, to prevent debtor counterclaims alleging unlawful disruption of essential services, the agency must serve a formal 15-day Statutory Demobilization Notice. The notice must explicitly state that continued non-payment prevents the agency from funding statutory wages, and that deployed personnel will be reassigned, leaving the Principal Employer directly liable for site operations.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 (Sections 8, 51–54, 70, 73 & 74) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Contract Labour (Regulation & Abolition) Act, 1970 (Section 21) — Ministry of Labour",
    url: "https://labour.gov.in/",
  },
  {
    title: "Code on Wages, 2019 (Principal Employer Wage Responsibility) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/13768",
  },
  {
    title: "MSMED Act, 2006 & MSME Samadhaan Portal (Sections 15–18) — Ministry of MSME",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Income-tax Act, 1961 Section 43B(h) (Micro & Small Enterprise Protection) — Income Tax India",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 (Section 8 & 9 Operational Debt) — IBBI",
    url: "https://ibbi.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
  {
    title: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952 — EPFO India",
    url: "https://www.epfindia.gov.in/",
  },
  {
    title: "Employees' State Insurance Act, 1948 (Section 40 & 85 Employer Liability) — ESIC",
    url: "https://www.esic.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "Staffing, HR Recruitment, Manpower Outsourcing & Facility Management Legal Debt Recovery",
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
      "Recruitment Agency Founders, Contract Staffing CFOs, Executive Search Managing Partners, Security Guard & Facility Management Promoters",
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
  name: "IND-11 Staffing, Recruitment, Manpower & FMS Recovery Spokes & Notice Templates",
  numberOfItems: IND_11_SPOKES.length,
  itemListElement: IND_11_SPOKES.map((spoke, index) => ({
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
      name: "Staffing & Manpower Debt Recovery",
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

export default function StaffingRecruitmentManpowerRecoveryHubPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Staffing & Manpower Recovery", href: PAGE_URL },
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
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span>IND-11 PILLAR HUB &bull; STATUTORY RECOVERY SOP</span>
            </div>

            {/* Single H1 Tag */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Statutory Summary
              </span>
              India&apos;s 25,000+ recruitment agencies, contract staffing firms, and security/FMS
              contractors face severe working-capital erosion from client &apos;backdoor hires&apos;
              and 90–150 day payroll invoice defaults. Under Indian Contract Act Sections 70/73,
              Contract Labour (R&amp;A) Act Section 21(4), MSMED Act Sections 15–18, and Section
              43B(h), institutional creditors can hold principal employers liable, enforce 12-month
              candidate ownership, and recover full placement and wage dues with 3x compound
              statutory interest.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                  Placement Recovery
                </span>
                <p className="text-base sm:text-xl font-bold text-slate-100">
                  ₹75K – ₹15 Lakh
                </p>
                <p className="text-[10px] text-slate-400">8.33%–16% CTC + Penal Circumvention</p>
              </div>

              <div className="space-y-1">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                  Monthly Temp Payroll
                </span>
                <p className="text-base sm:text-xl font-bold text-emerald-400">
                  ₹5 Lakh – ₹3 Cr+
                </p>
                <p className="text-[10px] text-slate-400">92% Statutory Pass-Through Outlay</p>
              </div>

              <div className="space-y-1">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                  Statutory Hook
                </span>
                <p className="text-base sm:text-xl font-bold text-amber-400">
                  CLRA s.21(4) &amp; s.70
                </p>
                <p className="text-base text-[10px] text-slate-400">Principal Employer Wage Liability</p>
              </div>

              <div className="space-y-1">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                  MSME Samadhaan
                </span>
                <p className="text-base sm:text-xl font-bold text-red-400">
                  3x Bank Rate
                </p>
                <p className="text-[10px] text-slate-400">Monthly Compound Penal Interest</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <StaffingRecoveryTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-working-capital-asymmetry"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    01
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    The Working Capital Crisis in Indian Staffing &amp; Recruitment
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The staffing, human resources recruitment, executive search, and facility management
                    (FMS) sectors represent the operational backbone of corporate India. Over 25,000
                    licensed staffing agencies, search consultancies, and manpower service providers
                    deploy millions of white-collar professionals, IT engineers, customer support
                    specialists, security guards, and warehouse workers across every state. However,
                    beneath this massive economic footprint lies an acute structural vulnerability:
                    institutional creditors in this industry operate under extreme working capital
                    asymmetry created by predatory corporate debtor practices.
                  </p>
                  <p>
                    In permanent contingency recruitment and executive search, recruitment firms invest
                    substantial upfront capital in sourcing databases, candidate screening, technical
                    evaluations, and recruiter compensation. After introducing qualified candidates to
                    prospective employers, agencies frequently encounter <strong>&apos;Backdoor Hiring&apos;</strong>—an
                    unethical practice where corporate talent acquisition teams reject a candidate on
                    email or claim the resume was &apos;already in our internal database&apos;, only to
                    secretly issue an offer letter 60 to 180 days later. Alternatively, employers route
                    the appointment through an affiliated group subsidiary or an unvetted staffing vendor
                    to evade the 8.33% to 16% placement fee.
                  </p>
                  <p>
                    In temporary flexi-staffing, general labour contracting, and security/housekeeping
                    services, the financial risk is even more existential. Unlike traditional
                    manufacturing or product distribution, <strong>92% to 94% of every billed staffing invoice represents pass-through statutory outlays</strong>.
                    Staffing agencies operate on razor-thin gross service commissions of <strong>5% to 8%</strong>.
                    Under the Payment of Wages Act, 1936 and the Code on Wages, 2019, staffing providers
                    are legally obligated to disburse net associate salaries by the 7th or 10th of every
                    month. Under the Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952,
                    and the ESI Act, 1948, statutory PF and ESIC remittances must be deposited by the
                    15th. Furthermore, 18% GST must be remitted to the government by the 20th.
                  </p>
                  <p>
                    When a corporate enterprise, e-commerce fulfillment center, or industrial factory
                    delays payment of a ₹50,00,000 monthly staffing bill for 90 to 150 days, the staffing
                    firm is forced to draw on expensive bank overdrafts (OD lines at 14% to 16% p.a.) to
                    finance corporate client payroll. A single overdue enterprise client wipes out the
                    net annual profits generated by <strong>12 to 15 prompt-paying clients</strong>.
                    When agencies issue formal demand notices, defaulting debtors routinely deploy
                    spurious defenses—such as alleged site shrinkage, uninvestigated equipment theft, or
                    unilateral &apos;performance penalties&apos;. Without specialized legal recovery
                    mechanisms under{" "}
                    <Link
                      href="/services/vendor-and-invoice-recoveries"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      vendor invoice recovery
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/recovery/business-dues"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      commercial debt frameworks
                    </Link>
                    , agencies face catastrophic margin destruction.
                  </p>
                </div>

                {/* 3 Pillars of Staffing Exposure */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="block text-[11px] font-bold text-[#DC2626] uppercase mb-1">
                      Permanent Search
                    </span>
                    <p className="text-xs font-bold text-slate-900 mb-1">
                      Backdoor Circumvention &amp; Replacement Stalls
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Clients circumvent 8.33%–16% fees via shadow sister-entity contracts or abuse
                      the 90-day replacement clause as a 90-day interest-free credit facility.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="block text-[11px] font-bold text-emerald-600 uppercase mb-1">
                      Flexi-Staffing
                    </span>
                    <p className="text-xs font-bold text-slate-900 mb-1">
                      Statutory Payroll &amp; EPF Financing Trap
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Agencies disburse wages and statutory deposits on strict penal dates while
                      enterprise clients stretch credit terms from 30 days to 120+ days.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="block text-[11px] font-bold text-amber-600 uppercase mb-1">
                      Security &amp; FMS
                    </span>
                    <p className="text-xs font-bold text-slate-900 mb-1">
                      Sham Theft Debits &amp; Overnight Swap
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      RWAs and factories switch guard agencies overnight, inventing retroactive
                      uninvestigated pilferage deductions to wipe out 4 months of wage arrears.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Escalation Matrix */}
              <section
                id="heading-multi-track-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    02
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    8-Track Multi-Tier Escalation Matrix for Manpower Creditors
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every staffing claim demands a precision legal track determined by contract
                  architecture, debtor corporate structure, ticket value, and statutory wage exposure.
                  The matrix below outlines our institutional escalation protocols:
                </p>

                {/* Desktop & Tablet Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-white font-semibold">
                        <th className="p-3 sm:p-3.5">Contract Track</th>
                        <th className="p-3 sm:p-3.5">Default Pattern</th>
                        <th className="p-3 sm:p-3.5">Ticket Size</th>
                        <th className="p-3 sm:p-3.5">Statutory Hook</th>
                        <th className="p-3 sm:p-3.5">Primary Forum</th>
                        <th className="p-3 sm:p-3.5">Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-bold text-slate-900">1. Permanent Placement</td>
                        <td className="p-3">Unpaid Day-30 invoice after candidate joins</td>
                        <td className="p-3">₹75K – ₹8 Lakh</td>
                        <td className="p-3">Contract Act s.8 / s.73, Order XXXVII CPC</td>
                        <td className="p-3 font-semibold text-slate-900">Commercial Court / MSEFC</td>
                        <td className="p-3 text-emerald-600 font-bold">15–45 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-900">2. Backdoor Hiring</td>
                        <td className="p-3">Secret direct hire within 12-month ownership</td>
                        <td className="p-3">₹1.5L – ₹15 Lakh</td>
                        <td className="p-3">Contract Act s.70 (Quantum Meruit / Effective Cause)</td>
                        <td className="p-3 font-semibold text-slate-900">Advocate Notice + Civil Suit</td>
                        <td className="p-3 text-emerald-600 font-bold">30–60 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-bold text-slate-900">3. Retained CXO Search</td>
                        <td className="p-3">Freeze role on shortlist delivery; kill fee default</td>
                        <td className="p-3">₹12L – ₹60 Lakh</td>
                        <td className="p-3">Retained Mandate Letter, Specific Performance</td>
                        <td className="p-3 font-semibold text-slate-900">High Court Commercial Division</td>
                        <td className="p-3 text-emerald-600 font-bold">45–90 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-900">4. Temp Flexi-Staffing</td>
                        <td className="p-3">Delayed monthly wage, EPF, ESIC, GST bills</td>
                        <td className="p-3">₹10L – ₹2 Cr+</td>
                        <td className="p-3">CLRA s.21(4), MSMED s.16, IT Act s.43B(h)</td>
                        <td className="p-3 font-semibold text-slate-900">Labour Dept / MSEFC / IBC s.8</td>
                        <td className="p-3 text-emerald-600 font-bold">15–30 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-bold text-slate-900">5. C2H Staff Absorption</td>
                        <td className="p-3">Direct absorption without paying buyout fee</td>
                        <td className="p-3">₹3L – ₹25 Lakh</td>
                        <td className="p-3">Contract Act s.74 Liquidated Conversion Slabs</td>
                        <td className="p-3 font-semibold text-slate-900">Commercial Summary Suit</td>
                        <td className="p-3 text-emerald-600 font-bold">30–60 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-900">6. Industrial Labour</td>
                        <td className="p-3">Withheld factory bills &amp; Minimum Wage VDA hike</td>
                        <td className="p-3">₹5L – ₹50 Lakh</td>
                        <td className="p-3">Statutory VDA Escalation (*Tarapore &amp; Co.*)</td>
                        <td className="p-3 font-semibold text-slate-900">Labour Commissioner / MSEFC</td>
                        <td className="p-3 text-emerald-600 font-bold">30–60 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-bold text-slate-900">7. Security &amp; FMS Guarding</td>
                        <td className="p-3">Overnight exit with bogus theft deduction debit</td>
                        <td className="p-3">₹3L – ₹40 Lakh</td>
                        <td className="p-3">Signed Attendance Estoppel, Raman Iron Doctrine</td>
                        <td className="p-3 font-semibold text-slate-900">MSEFC Samadhaan / Civil Court</td>
                        <td className="p-3 text-emerald-600 font-bold">30–75 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-900">8. Overseas MEA Agency</td>
                        <td className="p-3">Foreign employer default on deployment fee &amp; airfare</td>
                        <td className="p-3">₹15L – ₹1.5 Cr</td>
                        <td className="p-3">eMigrate Demand Letter, CPC s.44A Foreign Decree</td>
                        <td className="p-3 font-semibold text-slate-900">MEA Attestation &amp; GCC Courts</td>
                        <td className="p-3 text-emerald-600 font-bold">60–120 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Aging Buckets &amp; Escalation Triggers
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                    <strong>SMA-0 (Days 1–30):</strong> Soft accounting reconciliation, Statement of
                    Account (SOA) confirmation, and electronic joining authentication.
                    <br />
                    <strong>SMA-1 (Days 31–60):</strong> Advocate Demand Notice invoking Indian
                    Contract Act Section 70/73, Section 43B(h) tax disallowance, and 3x compound
                    interest warnings served via Speed Post RPAD and certified email.
                    <br />
                    <strong>SMA-2 (Days 61–90):</strong> Filing of statutory reference before the Micro
                    &amp; Small Enterprises Facilitation Council (MSEFC) or invocation of
                    Pre-Institution Mediation under Section 12A of the Commercial Courts Act, 2015.
                    <br />
                    <strong>NPA / Default (Days 90+):</strong> Service of Form 3/4 Statutory Demand
                    under IBC Section 8 for institutional corporate arrears exceeding ₹1 Crore, or
                    institution of an Order XXXVII CPC Summary Suit with Order 38 Rule 5 asset
                    attachment petitions.
                  </p>
                </div>
              </section>

              {/* Section 3: SVG Workflow Architecture */}
              <section
                id="heading-workflow-architecture"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    03
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Operational Workflow Map: From Default Notice to IBC s.8
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our institutional recovery engine operates across a structured 4-phase statutory
                  escalation pipeline designed to enforce rapid voluntary compliance or immediate
                  judicial recovery:
                </p>

                {/* Desktop SVG Workflow */}
                <div className="hidden md:block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-800 text-white shadow-md">
                  <svg
                    viewBox="0 0 880 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    width={880}
                    height={200}
                    aria-label="Staffing Debt Recovery Escalation Workflow Diagram"
                  >
                    {/* Node 1 */}
                    <rect x="10" y="30" width="180" height="140" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <circle cx="35" cy="55" r="14" fill="#DC2626" />
                    <text x="35" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                    <text x="60" y="60" fill="white" fontSize="12" fontWeight="bold">Digital Evidence Audit</text>
                    <text x="25" y="90" fill="#94A3B8" fontSize="10">ATS &amp; Email Timestamps</text>
                    <text x="25" y="110" fill="#94A3B8" fontSize="10">UAN / LinkedIn Verification</text>
                    <text x="25" y="130" fill="#94A3B8" fontSize="10">ECR PF / ESIC Challans</text>
                    <text x="25" y="150" fill="#38BDF8" fontSize="10" fontWeight="bold">BSA 2023 s.63 Proof</text>

                    {/* Arrow 1 */}
                    <path d="M195 100 H225" stroke="#DC2626" strokeWidth="3" strokeDasharray="4 4" />
                    <polygon points="225,95 235,100 225,105" fill="#DC2626" />

                    {/* Node 2 */}
                    <rect x="235" y="30" width="180" height="140" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <circle cx="260" cy="55" r="14" fill="#DC2626" />
                    <text x="260" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                    <text x="285" y="60" fill="white" fontSize="12" fontWeight="bold">Advocate Legal Notice</text>
                    <text x="250" y="90" fill="#94A3B8" fontSize="10">15-Day Statutory Demand</text>
                    <text x="250" y="110" fill="#94A3B8" fontSize="10">Email + WhatsApp + RPAD</text>
                    <text x="250" y="130" fill="#94A3B8" fontSize="10">Section 43B(h) Warning</text>
                    <text x="250" y="150" fill="#F59E0B" fontSize="10" fontWeight="bold">3x RBI Bank Rate Interest</text>

                    {/* Arrow 2 */}
                    <path d="M420 100 H450" stroke="#DC2626" strokeWidth="3" strokeDasharray="4 4" />
                    <polygon points="450,95 460,100 450,105" fill="#DC2626" />

                    {/* Node 3 */}
                    <rect x="460" y="30" width="180" height="140" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <circle cx="485" cy="55" r="14" fill="#DC2626" />
                    <text x="485" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                    <text x="510" y="60" fill="white" fontSize="12" fontWeight="bold">Statutory Escalation</text>
                    <text x="475" y="90" fill="#94A3B8" fontSize="10">MSME Samadhaan (MSEFC)</text>
                    <text x="475" y="110" fill="#94A3B8" fontSize="10">CLRA s.21(4) Wage Summons</text>
                    <text x="475" y="130" fill="#94A3B8" fontSize="10">Commercial Summary Suit</text>
                    <text x="475" y="150" fill="#10B981" fontSize="10" fontWeight="bold">Pre-Institution Mediation</text>

                    {/* Arrow 3 */}
                    <path d="M645 100 H675" stroke="#DC2626" strokeWidth="3" strokeDasharray="4 4" />
                    <polygon points="675,95 685,100 675,105" fill="#DC2626" />

                    {/* Node 4 */}
                    <rect x="685" y="30" width="180" height="140" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="710" cy="55" r="14" fill="#DC2626" />
                    <text x="710" y="60" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                    <text x="735" y="60" fill="white" fontSize="12" fontWeight="bold">Judicial Enforcement</text>
                    <text x="700" y="90" fill="#94A3B8" fontSize="10">IBC Section 8 Form 3/4</text>
                    <text x="700" y="110" fill="#94A3B8" fontSize="10">NCLT Corporate Insolvency</text>
                    <text x="700" y="130" fill="#94A3B8" fontSize="10">Order 38 Rule 5 Asset Freeze</text>
                    <text x="700" y="150" fill="#EF4444" fontSize="10" fontWeight="bold">Execution of Money Award</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Workflow */}
                <div className="md:hidden space-y-3">
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px]">
                        1
                      </span>
                      <h3 className="text-xs font-bold text-white">
                        Digital Evidence &amp; Timestamp Audit
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Preserve ATS emails, UAN joining proof, and ECR PF challans certified under
                      Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px]">
                        2
                      </span>
                      <h3 className="text-xs font-bold text-white">
                        Advocate Legal Notice (15 Days)
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Serve formal notice citing Section 70/73 Contract Act, CLRA Section 21(4),
                      3x RBI compound interest, and Section 43B(h) tax disallowance.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px]">
                        3
                      </span>
                      <h3 className="text-xs font-bold text-white">
                        Statutory Forum Escalation
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      File MSEFC reference for 3x interest or Order XXXVII summary suit in
                      Commercial Court with Pre-Institution Mediation invocation.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[10px]">
                        4
                      </span>
                      <h3 className="text-xs font-bold text-white">
                        IBC Section 8 &amp; Asset Attachment
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      For corporate payroll arrears exceeding ₹1 Crore, serve Form 3/4 Demand Notice
                      under IBC Section 8 before approaching NCLT.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Explorer */}
              <section
                id="heading-scenario-explorer"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    04
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Four Critical Agency Failure Modes &amp; Operational Playbooks
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Select an operational failure mode below to review commercial default tactics,
                  statutory hooks, and actionable step-by-step recovery roadmaps:
                </p>

                <StaffingRecoveryScenarioTabs />
              </section>

              {/* Section 5: Statutory Architecture */}
              <section
                id="heading-statutory-architecture"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    05
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Hooks: Quantum Meruit, Wage Code &amp; Order 37 CPC
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Institutional recovery for staffing, recruitment, and facility management firms
                    rests on six core statutory pillars across Indian civil, labour, commercial, and
                    tax law. Corporate debtors frequently operate under the mistaken belief that
                    unless an agency holds a physically signed tripartite Master Services Agreement,
                    placement fees and payroll markup bills cannot be summarily enforced. Judicial
                    precedents from the Supreme Court and appellate High Courts roundly contradict this
                    assumption:
                  </p>
                </div>

                {/* Precedent Cards with Crimson Accent Bar */}
                <div className="space-y-4">
                  {STATUTORY_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="pl-2 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] font-mono font-bold text-[#DC2626]">
                            {item.citation}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                            Verified Commercial Precedent
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-slate-600">
                          Parties: {item.parties}
                        </p>
                        <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80">
                          <strong>Judicial Holding:</strong> {item.holding}
                        </p>
                        <p className="text-xs text-emerald-800 font-medium">
                          <strong>Operational Impact:</strong> {item.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Evidence Protocol */}
              <section
                id="heading-evidence-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    06
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    The ATS, UAN &amp; BSA Section 63 Electronic Evidence Protocol
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which supersedes
                    Section 65B of the Indian Evidence Act, 1872), electronic records are admissible
                    as primary evidence when accompanied by an electronic certificate identifying the
                    device and certifying uninterrupted server operations. For recruitment and
                    staffing agencies, building an airtight trial-ready dossier requires preserving five
                    critical digital artifacts:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-900 text-white">
                      Permanent Search
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      1. ATS Submission Timestamps &amp; Email MIME Headers
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Export full RFC 822 email headers showing message ID, dispatch timestamps, and
                      recipient MTA logs. In ATS systems (Lever, Greenhouse, Zoho Recruit), download
                      audit logs showing candidate creation date to rebut &apos;duplicate profile&apos; claims.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-900 text-white">
                      Circumvention Proof
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      2. EPFO UAN Passbook &amp; Active Corporate Domain Verification
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Verify candidate joining date via public EPFO establishment search, corporate
                      email domain MX delivery ping, and time-stamped LinkedIn profile screenshots
                      authenticated under Section 63 BSA.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-900 text-white">
                      Flexi-Staffing
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      3. ECR Challans &amp; Bank Salary Disbursement Files
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Assemble monthly EPFO Electronic Challan cum Return (ECR) receipts, ESIC monthly
                      contribution returns, and bank NACH wage disbursement statements confirming the
                      agency fully discharged salary outlays.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-900 text-white">
                      Security &amp; FMS
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      4. Countersigned Daily Attendance &amp; Gate Biometric Musters
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Secure monthly physical attendance registers or biometric exports signed by the
                      client&apos;s site admin. Under Indian evidence law, signed attendance estops the client
                      from claiming unauthorized guard absence or shortage.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    The 7-Day Pre-Action Evidence Checklist for Staffing CFOs
                  </h3>
                  <ul className="space-y-1.5 text-slate-700 text-[11px] sm:text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span><strong>Section 63 Certificate:</strong> Formally executed certificate by the agency&apos;s IT head certifying database integrity.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span><strong>Reconciliation Statement:</strong> Detailed ledger listing gross billing, statutory pass-throughs, agency fee markup, and interest accrued.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span><strong>Postal Consignment Barcodes:</strong> Speed Post RPAD tracking numbers to prove statutory service under Section 27 General Clauses Act.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 7: Financial Damage Ledger */}
              <section
                id="heading-financial-damage-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    07
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Financial Damage Model: Math of a ₹50 Lakh Payroll Default
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    To understand how a corporate invoice default destroys staffing solvency,
                    consider a realistic mid-sized flexi-staffing deployment with 150 associates
                    billed at ₹50,00,000 per month on an industry-standard 6% markup:
                  </p>
                </div>

                {/* Ledger Simulation Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Financial Simulation &bull; 150-Associate Flexi-Staffing Default
                    </span>
                    <span className="text-xs text-slate-400">Aging: 120 Days Overdue</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                      <span className="block text-slate-400 text-[10px] uppercase">Gross Billed Value</span>
                      <p className="text-lg font-bold text-white mt-1">₹50,00,000</p>
                      <p className="text-[10px] text-slate-400">Per Month (150 Staff)</p>
                    </div>

                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                      <span className="block text-slate-400 text-[10px] uppercase">Disbursed Wages (7th)</span>
                      <p className="text-lg font-bold text-red-400 mt-1">₹37,50,000</p>
                      <p className="text-[10px] text-slate-400">75% Net Disbursed Wages</p>
                    </div>

                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                      <span className="block text-slate-400 text-[10px] uppercase">EPF, ESIC &amp; GST</span>
                      <p className="text-lg font-bold text-amber-400 mt-1">₹9,50,000</p>
                      <p className="text-[10px] text-slate-400">19% Statutory Remittance</p>
                    </div>

                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                      <span className="block text-slate-400 text-[10px] uppercase">Agency Net Margin</span>
                      <p className="text-lg font-bold text-emerald-400 mt-1">₹3,00,000</p>
                      <p className="text-[10px] text-slate-400">6% Gross Commission</p>
                    </div>
                  </div>

                  <div className="bg-red-950/40 border border-red-800/60 rounded-xl p-4 text-xs space-y-2">
                    <div className="flex items-center gap-2 text-red-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>The Catastrophic Working-Capital Exposure</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      The staffing company already disbursed <strong>₹47,00,000 out-of-pocket</strong> by
                      the 20th of the month. If the client delays payment for 120 days, the agency
                      incurs ₹2,35,000 in working-capital bank overdraft interest (at 15% p.a.), completely
                      wiping out its entire ₹3,00,000 commission!
                    </p>
                  </div>

                  {/* Statutory Interest Remedy */}
                  <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-4 text-xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Statutory Recovery Claim Under MSMED Act Section 16</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      Under MSMED Act Section 16, delayed payment attracts monthly compound interest
                      at <strong>3 times the RBI Bank Rate (currently ~19.5% to 20.25% p.a.)</strong>.
                      For a 120-day default on ₹50,00,000, statutory compound interest adds
                      approximately <strong>₹3,42,000 to the creditor claim</strong>, fully restoring the
                      agency&apos;s commercial margins and legal costs.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/tools/msme-delayed-payment-interest-calculator"
                        className="inline-flex items-center gap-1.5 text-emerald-400 font-bold hover:underline text-xs"
                      >
                        <span>Calculate exact MSME compound interest on your staffing dues</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Case Study 2: CXO Backdoor Hire */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 text-xs">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Case Study 2: The ₹24,00,000 CXO Backdoor Hire Recovery
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                    An executive search firm was engaged to hire a Chief Technology Officer (CTO) at an
                    annual CTC of ₹1,20,00,000 (Fixed + Guaranteed Bonus). The agency introduced three
                    vetted finalists. The client interviewed Candidate A twice, then emailed: &apos;The
                    management has decided to put the role on hold.&apos; Exactly 75 days later, the
                    candidate updated their LinkedIn status to &apos;VP of Engineering&apos; at the
                    client&apos;s wholly owned cloud subsidiary.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                    By invoking Indian Contract Act Section 70 (Quantum Meruit), Section 73 (12-month
                    candidate ownership), and Section 74 (penal circumvention surcharge), LegalRecovery.in
                    issued a 15-day statutory demand notice demanding the 16% contractual placement fee
                    (₹19,20,000) plus a 25% circumvention penalty (₹4,80,000), total ₹24,00,000 plus GST.
                    Faced with email header verification and LinkedIn corporate domain records certified
                    under BSA Section 63, the client settled the entire ₹24 Lakh claim within 11 days of
                    receiving the notice via Speed Post RPAD.
                  </p>
                </div>
              </section>

              {/* Section 8: Spokes Directory */}
              <section
                id="heading-spokes-directory"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    08
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    IND-11 Directory: 10 Recruitment &amp; Staffing Recovery Spokes
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Explore our dedicated operational guides, statutory precedent analyses, and
                  advocate-vetted notice workspaces covering every specialized dispute across the
                  Indian staffing, HR recruitment, and facility management landscape:
                </p>

                {/* 3 Spoke Tracks */}
                <div className="space-y-8">
                  {SPOKE_TRACKS.map((track) => {
                    const spokesInTrack = IND_11_SPOKES.filter((s) => s.track === track.key);
                    return (
                      <div key={track.key} className="space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${track.badgeClass}`}
                          >
                            Sector Track
                          </span>
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                            {track.heading}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {spokesInTrack.map((spoke) => (
                            <div
                              key={spoke.id}
                              className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-sm"
                            >
                              <div className="space-y-2.5">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                                    {spoke.id} &bull; {spoke.archetypeLabel}
                                  </span>
                                  <span className="text-[10px] font-semibold text-[#DC2626] bg-red-50 px-2 py-0.5 rounded border border-red-100">
                                    {spoke.statute}
                                  </span>
                                </div>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                  <Link
                                    href={spoke.url}
                                    className="hover:text-[#DC2626] transition-colors"
                                  >
                                    {spoke.title}
                                  </Link>
                                </h4>
                                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                                  {spoke.summary}
                                </p>
                              </div>

                              <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between">
                                <Link
                                  href={spoke.url}
                                  className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] inline-flex items-center gap-1"
                                >
                                  <span>Open Specialized Playbook</span>
                                  <span>&rarr;</span>
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 9: Dual-Track Funnel Desk */}
              <section
                id="heading-dual-funnel-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    09
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Dual-Track Funnel: Single Notice Test vs Enterprise CSV Desk
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Whether you need to recover a single unpaid CXO placement fee or manage an
                  enterprise roster of 500+ defaulting corporate staffing accounts across multiple
                  subsidiary entities, LegalRecovery.in provides seamless dual-track execution:
                </p>

                <StaffingRecoveryCTA />
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-staffing-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    10
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions for Recruitment Founders &amp; CFOs
                  </h2>
                </div>

                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group py-4 sm:py-5 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-3 text-slate-900 font-bold text-xs sm:text-sm md:text-base hover:text-[#DC2626] transition-colors">
                        <span>{faq.question}</span>
                        <span className="ml-2 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-500 group-open:bg-red-50 group-open:text-[#DC2626] transition-colors">
                          <svg
                            className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Judicial Citations */}
              <section
                id="heading-statutory-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    11
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory References, Judicial Citations &amp; Bare Act Sources
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All statutory workflows, notice structures, and judicial holdings on this portal
                  are grounded in authoritative Indian bare acts, government portals, and binding
                  appellate precedents:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-700 hover:text-slate-900 flex items-center justify-between gap-2 transition-colors group"
                    >
                      <span className="font-medium truncate">{source.title}</span>
                      <span className="text-slate-400 group-hover:text-[#DC2626] shrink-0 font-bold">
                        &nearr;
                      </span>
                    </a>
                  ))}
                </div>

                {/* Advocate Attribution Footnote */}
                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                  <p>
                    <strong>Institutional Legal Notice &amp; Advisory Notice:</strong> All statutory
                    notices, escalation workflows, and dispute strategies are formulated in
                    compliance with the Bar Council of India rules under the supervision of Advocate
                    Anuj Anand Malik (Founder, AMA Legal Solutions). Nothing on this page constitutes an
                    advertisement or personal solicitation; it is published solely for general
                    corporate creditor guidance.
                  </p>
                </div>
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
