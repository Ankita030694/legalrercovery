import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SchoolsEdTechHubTableOfContents from "./SchoolsEdTechHubTableOfContents";
import SchoolsEdTechHubScenarioTabs from "./SchoolsEdTechHubScenarioTabs";
import SchoolsEdTechHubCTA from "./SchoolsEdTechHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/schools-universities-edtech-b2b-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Private Schools, Universities & EdTech B2B Fee/Debt Recovery";
const PAGE_DESCRIPTION =
  "Recover unpaid school/hostel fees from parents under RTE s.5(3) & Order 37 CPC without withholding TCs—plus B2B EdTech, publisher & skill-grant dues.";
const H1_TEXT =
  "RTE & High-Court Compliant Fee & B2B Receivable Recovery for Private Schools, Universities, Publishers & EdTech Vendors";

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
  archetype: "G1" | "P1";
  archetypeLabel: string;
  track: "institutions-notices" | "edtech-publishers-fleet" | "coaching-skills-ld";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_17_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-201",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "institutions-notices",
    title: "How Private Schools Legally Recover Unpaid Fees Without Withholding TCs",
    url: "/how-private-schools-recover-unpaid-fees-without-withholding-tc",
    statute: "RTE s.5(3) + Delhi/Madras/Kerala/Bombay HC + Order XXXVII CPC",
    summary:
      "Release the Transfer Certificate cleanly to protect the child while enforcing the signed Admission Fee Undertaking strictly against the contracting parent.",
  },
  {
    id: "B2B-202",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "institutions-notices",
    title: "Private University, Medical & Engineering College Semester & Hostel Fee Recovery",
    url: "/private-university-medical-engineering-college-semester-fee-recovery",
    statute: "UGC Guidelines + Co-Guarantor Bond + NI Act s.138 / PSS s.25",
    summary:
      "Enforce multi-semester tuition, hostel, and mess arrears against earning parent co-guarantors without violating UGC degree-retention rules.",
  },
  {
    id: "B2B-210",
    archetype: "P1",
    archetypeLabel: "P1 Notice Pack",
    track: "institutions-notices",
    title: "100% RTE, NCPCR & High-Court Safe School Fee Arrears Legal Notice Format",
    url: "/templates/school-compliant-parent-fee-recovery-legal-notice-format",
    statute: "RTE s.5(3) Safe-Harbour + Parent Contractual Liability + Order 37",
    summary:
      "Advocate-vetted notice template with explicit Child-Safe Disclaimer confirming zero impact on Board roll numbers, exams, or TC issuance.",
  },
  {
    id: "B2B-203",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "edtech-publishers-fleet",
    title: "B2B EdTech, Smart-Class, School-ERP & Robotics Lab Recovery From Schools",
    url: "/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools",
    statute: "Societies Registration Act s.6 / Trusts Act + MSMED s.15–18",
    summary:
      "Bypass 'non-juristic school brand' dismissals by suing the Registered Society or Trust through its President/Secretary with installation logs.",
  },
  {
    id: "B2B-204",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "edtech-publishers-fleet",
    title: "School Textbook Publisher, Uniform & Stationery Distributor Debt Recovery",
    url: "/school-textbook-publisher-uniform-stationery-distributor-recovery",
    statute: "Order XXXVII CPC + NI Act s.138 + Pre-Session Dec–Jan Wave",
    summary:
      "Clear last year's stalled book and uniform ledgers before April stock dispatch using December–January advocate notice waves and PDC enforcement.",
  },
  {
    id: "B2B-209",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "edtech-publishers-fleet",
    title: "School & College Yellow-Bus Transport Fleet Contractor Unpaid Trust Dues",
    url: "/school-bus-transport-fleet-contractor-unpaid-trust-dues-recovery",
    statute: "Fiduciary Fee-Collection Proof + MSMED s.15–18 + Trust Suit",
    summary:
      "Enforce 12-month standing charges and diesel escalation against school Trusts that collected earmarked transport fees upfront from parents.",
  },
  {
    id: "B2B-205",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "coaching-skills-ld",
    title: "Coaching Chain Franchise Royalty Default, Faculty Poaching & IP Recovery",
    url: "/coaching-institute-franchise-royalty-and-installment-bounce-recovery",
    statute: "Commercial Courts Act s.2(1)(c) + Arbitration s.9 + Copyright Act",
    summary:
      "Obtain rapid Section 9 injunctions against rogue franchisees displaying branded signboards, withholding royalties, or pirating study material.",
  },
  {
    id: "B2B-206",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "coaching-skills-ld",
    title: "Corporate L&D, Upskilling & Assessment Vendor Unpaid Invoice Recovery",
    url: "/corporate-training-l-and-d-executive-education-vendor-invoice-recovery",
    statute: "MSMED Act s.15–18 + Income-tax Act s.43B(h) + Attendance Estoppel",
    summary:
      "Defeat post-workshop 'feedback' stalls using signed corporate attendance sheets, LMS completion logs, and March 31 Section 43B(h) tax pressure.",
  },
  {
    id: "B2B-207",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "coaching-skills-ld",
    title: "PMKVY / DDU-GKY / SSDM & CSR Skill-Training Partner Grant Tranche Recovery",
    url: "/pmkvy-ddu-gky-nsdc-csr-skill-training-partner-grant-tranche-recovery",
    statute: "CPC s.80 Notice + SSDM Arbitration + Article 226 Writ Mandamus",
    summary:
      "Unlock stalled 30%–40% assessment and placement tranches from State Skill Missions after SDMS batch certification is already completed.",
  },
  {
    id: "B2B-208",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "coaching-skills-ld",
    title: "Study-Abroad Master Aggregator Withholding Sub-Agent University Commissions",
    url: "/study-abroad-master-aggregator-university-sub-agent-commission-dispute",
    statute: "Contract Act s.213 Agency Accounting + Order XXXVII CPC",
    summary:
      "Compel commission disclosure and payout from master study-abroad aggregators using portal enrolment confirmation and visa-grant logs.",
  },
];

const SPOKE_TRACKS: {
  key: IndustrySpoke["track"];
  heading: string;
  badgeClass: string;
}[] = [
  {
    key: "institutions-notices",
    heading: "Track A — K-12 Private Schools, Universities & RTE-Safe Notice Pack",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "edtech-publishers-fleet",
    heading: "Track B — B2B EdTech, Smart-Class, Textbook Publishers & Bus Fleets",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "coaching-skills-ld",
    heading: "Track C — Coaching Franchises, Corporate L&D, Skill Grants & Aggregators",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    citation: "RTE Act, 2009 s.5(3) & High Court Mandates (Delhi, Madras, Kerala & Bombay HC)",
    title: "Release the Transfer Certificate to the Child; Recover Fees From Parents via Civil Action",
    parties: "Private Unaided School Trusts, Principals & Governing Societies",
    holding:
      "High Courts across India uniformly hold that a school cannot withhold a student's Transfer Certificate (TC), Board examination roll number, or marksheet as a lien for unpaid tuition—treating the child's right to education under RTE Act s.5(3) as inviolable. Simultaneously, these rulings affirm that the school management retains full civil and contractual rights to sue the parent or guardian who signed the Admission Fee Undertaking.",
    impact:
      "Eliminates DEO show-cause notices and media backlash while turning unpaid parent fee ledgers into enforceable civil claims.",
  },
  {
    citation: "Societies Registration Act, 1860 s.6 & Indian Trusts Act, 1882",
    title: "Why B2B EdTech & Publisher Suits Fail When Filed Against a 'School Name'",
    parties: "Smart-Class Vendors, School-ERP SaaS, Textbook Publishers & Bus Fleet Contractors",
    holding:
      "A K-12 school brand name (e.g., 'XYZ Public School') is not an independent juristic person capable of suing or being sued. Under Section 6 of the Societies Registration Act, 1860 (or applicable State Public Trusts Acts and Section 8 Companies Act), statutory notices and Order XXXVII CPC plaints must array the Registered Society or Trust through its President, Secretary, or Managing Trustees.",
    impact:
      "Prevents fatal Order VII Rule 11 technical dismissals and pins personal fiduciary accountability on the Trust's authorized signatories.",
  },
  {
    citation: "NI Act, 1881 s.138 & Payment and Settlement Systems Act, 2007 s.25",
    title: "Criminal Prosecution on Bounced Semester Cheques & Failed NACH E-Mandates",
    parties: "Private Universities, Medical/Engineering Colleges & Coaching Chains",
    holding:
      "Where parents, adult students, or school Trusts issue post-dated cheques or NACH auto-debit mandates for tuition, hostel, textbook, or smart-class installments and the instrument returns unpaid ('Insufficient Funds', 'Account Closed', or 'Payment Stopped'), Section 138 NI Act and Section 25 PSS Act trigger identical statutory criminal liability upon serving a 15-day demand notice within 30 days of the bounce memo.",
    impact:
      "Unlocks up to 20% interim compensation under Section 143A and drives rapid pre-summons settlement without touching student degrees.",
  },
  {
    citation: "CPC Order XXXVII, CPC Section 80 & Article 226 / MSMED Act s.15–18",
    title: "Summary Suits for Private Contracts vs Section 80 & Writ Mandamus for Skill Grants",
    parties: "Corporate L&D Vendors, NSDC/PMKVY/SSDM Skill Partners & B2B Aggregators",
    holding:
      "Private B2B contracts backed by signed installation certificates, delivery challans, or parent fee undertakings qualify for Order XXXVII CPC summary suits (and MSMED s.15–18 3x RBI interest + s.43B(h) tax pressure for Udyam vendors). Conversely, when State Skill Development Missions (SSDMs) or CSR PSUs withhold audited PMKVY/DDU-GKY tranches, a mandatory 60-day Section 80 CPC notice sets the foundation for High Court Article 226 writ relief.",
    impact:
      "Matches every education creditor's exact counterparty—parent, Trust, corporate, or government mission—to the fastest statutory forum.",
  },
];

const FAQS = [
  {
    question:
      "Can a private unaided school legally recover unpaid tuition fees if the High Court forbids withholding Transfer Certificates (TCs)?",
    answer:
      "Yes. High Courts bar withholding TCs, marksheets, or Board admit cards because the child cannot be penalized—but they explicitly recognize the school Trust's right to recover unpaid fees from the contracting parent or guardian. Issuing the TC cleanly and serving an advocate-drafted civil demand notice addressed solely to the earning parent (with an explicit RTE s.5(3) child-protection disclaimer) is 100% lawful and reputation-safe.",
  },
  {
    question:
      "What language must be in a school's legal notice to parents so it never triggers DEO or NCPCR complaints?",
    answer:
      "The notice must never threaten expulsion, classroom detention, exam barring, or withholding of the Transfer Certificate. Instead, it must carry an explicit Safe-Harbour clause confirming the student's academic records remain completely unaffected, while demanding the contractual arrears strictly from the parent/guardian who executed the Admission Fee Undertaking under the Indian Contract Act and Order XXXVII CPC.",
  },
  {
    question:
      "How do private universities and medical/engineering colleges recover unpaid semester or hostel fees without violating UGC rules?",
    answer:
      "Under UGC guidelines, institutions cannot retain original academic certificates as security. Instead, enforce the Admission & Hostel Financial Bond co-signed by the earning parent or sponsor as joint co-guarantor, backed by biometric hostel/mess logs and NACH/cheque bounce notices under Section 25 of the PSS Act or Section 138 of the NI Act.",
  },
  {
    question:
      "Why do smart-class, ERP, and textbook publisher legal notices fail when addressed only to the 'School Principal'?",
    answer:
      "Because a school's brand name is not a legal entity. Under Section 6 of the Societies Registration Act, 1860 and Indian Trust law, you must name the underlying Registered Society, Public Trust, or Section 8 Company through its President, Secretary, and Managing Trustees so the notice and any Order XXXVII CPC suit bind the Trust's bank accounts.",
  },
  {
    question:
      "Can a textbook publisher or school bus contractor use MSME Samadhaan and Section 43B(h) against a school Trust?",
    answer:
      "Yes, provided your publishing house, EdTech firm, or bus fleet holds Udyam Micro or Small Enterprise registration. MSMED Act Sections 15–18 mandate payment within 45 days and impose 3x RBI Bank Rate monthly compound interest, while Income-tax Act s.43B(h) creates severe compliance pressure on commercial corporate buyers and taxable entities.",
  },
  {
    question:
      "Our skill-training institute completed PMKVY / DDU-GKY batch certification, yet the State Skill Mission is holding our 30% placement tranche—what works?",
    answer:
      "Government skill missions rarely respond to ordinary reminders. Audit your SDMS batch-closure, assessment, and placement verification logs, check the MOU arbitration clause, and serve a formal statutory Section 80 CPC notice on the State Skill Development Mission (SSDM) Secretary—setting up an Article 226 High Court writ of mandamus for undisputed audited payouts.",
  },
  {
    question:
      "Can a school Trust, university, or EdTech vendor test LegalRecovery.in on one defaulter before uploading a 200-row CSV?",
    answer:
      "Yes. You can test 1 live overdue parent fee ledger, bounced semester cheque, or defaulting school Trust account for ₹999 (advocate-drafted and dispatched via Email, Business WhatsApp, and Speed Post RPAD), and then onboard 10 to 10,000+ cases in our bulk CSV and campus-isolated Representees workspace.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Right of Children to Free and Compulsory Education (RTE) Act, 2009 s.5(3) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2086",
  },
  {
    title: "Societies Registration Act, 1860 (Section 6 Suits By & Against Societies) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2262",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Section 80) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 139 & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 NACH/ECS Dishonour) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2052",
  },
  {
    title: "MSMED Act, 2006 & MSME Samadhaan Portal (Sections 15–19) — Ministry of MSME",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "University Grants Commission (UGC) Fee & Certificate Guidelines — UGC.gov.in",
    url: "https://www.ugc.gov.in/",
  },
  {
    title: "National Commission for Protection of Child Rights (NCPCR) — Gov.in",
    url: "https://ncpcr.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType:
    "RTE-Compliant Fee Arrears & B2B Commercial Recovery for Private Schools, Universities, Publishers, EdTech Vendors & Skill-Training Institutes",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    founder: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  url: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-17 Education & EdTech B2B Legal Recovery Playbooks & Templates",
  numberOfItems: IND_17_SPOKES.length,
  itemListElement: IND_17_SPOKES.map((spoke, index) => ({
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
      name: "Schools, Universities & EdTech B2B Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function SchoolsUniversitiesEdTechHubPage() {
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
            <span>IND-17 Pillar Hub</span>
            <span className="text-slate-500">&bull;</span>
            <span>Schools, Universities &amp; EdTech B2B</span>
            <span className="text-slate-500">&bull;</span>
            <span>RTE s.5(3) &amp; Order 37 Safe</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Institutional Answer (RTE &amp; High-Court Compliant)
            </span>
            Under <strong>RTE Act Section 5(3)</strong> and binding Delhi, Madras, Kerala, and Bombay High Court mandates, private schools cannot withhold Transfer Certificates (TCs) or marksheets—yet retain full civil rights to recover arrears strictly from contracting parents via{" "}
            <strong>Order XXXVII CPC</strong>, <strong>NI Act s.138</strong>, and{" "}
            <strong>PSS Act s.25</strong>, while B2B EdTech vendors and publishers enforce against{" "}
            <strong>Registered Societies/Trusts (s.6)</strong>.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">100% TC-Safe</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Zero student detention; civil demand strictly vs earning parent
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">30d + 15d</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                NI s.138 &amp; PSS s.25 NACH bounce criminal demand window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 compound interest for Udyam EdTech &amp; publishers
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">10–10,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Batch CSV parent fee &amp; Trust ledger notices via Representees
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>
              Legal Review: <strong className="text-slate-200">Anuj Anand Malik</strong> (Advocate &amp; Founder, AMA Legal Solutions)
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span>
              Sector Scope: <strong className="text-slate-200">4.5L+ Private Schools, 500+ Universities, Publishers &amp; EdTech</strong>
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
              { label: "Schools, Universities & EdTech B2B Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <SchoolsEdTechHubTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Polarity Flip */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Schools, Universities &amp; EdTech Vendors Lose 6–12% Revenue
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&rsquo;s 4.5 lakh+ private unaided schools, 500+ private and deemed universities, national coaching chains, and B2B school-tech suppliers face a dual structural trap. On the institution-to-parent side, High Courts across Delhi, Madras, Kerala, and Bombay strictly enforce <strong>RTE Act Section 5(3)</strong> and UGC norms—forbidding schools from withholding Transfer Certificates (TCs), Board admit cards, or degree certificates over fee arrears. Because principals and Trust Secretaries rightly refuse to deploy aggressive collection agents who trigger viral social media backlash and District Education Officer (DEO) show-cause notices, affluent willful-defaulter parents routinely walk away with TCs leaving ₹1.5 Lakh to ₹4 Lakh per child unpaid.
                </p>
                <p>
                  On the B2B vendor-to-school side, smart-class integrators, school-ERP SaaS platforms, robotics lab providers, textbook publishers, and yellow-bus fleet contractors suffer an equally acute legal blind spot: they issue invoices and legal notices to the <em>&ldquo;School Brand Name&rdquo;</em> rather than the underlying <strong>Registered Society, Public Trust, or Section 8 Company</strong>. Meanwhile, NSDC/PMKVY/DDU-GKY skill-training partners wait 12–24 months for audited government tranches without invoking <strong>Section 80 CPC</strong>.
                </p>
                <p>
                  LegalRecovery.in flips this paralysis into a dignified, 100% statutory, reputation-safe recovery engine. Every parent fee notice carries an explicit <strong>Child-Safe Safe-Harbour Disclaimer</strong> affirming zero academic or TC interference while enforcing the parent&rsquo;s signed Admission Undertaking—and every B2B vendor notice arrays the exact juristic Society/Trust office-bearers.
                </p>
              </div>
            </section>

            {/* Section 2: 8-Track Multi-Tier Escalation Matrix */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  8-Track Education &amp; EdTech Escalation Decision Matrix
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Match your exact institution type, ticket size, aging bucket, and evidentiary instrument to the fastest compliant legal forum before launching single or bulk CSV notices.
              </p>

              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold rounded-tl-xl">Creditor &amp; Claim Type</th>
                      <th className="p-3.5 font-bold">Ticket &amp; Aging</th>
                      <th className="p-3.5 font-bold">Core Proof / Instrument</th>
                      <th className="p-3.5 font-bold rounded-tr-xl">Primary Statutory Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 border border-slate-200">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">K-12 Private School Tuition &amp; Transport Arrears</td>
                      <td className="p-3.5 text-slate-700">₹25K–₹5L / student<br /><span className="text-xs text-slate-500">90–365+ DPD</span></td>
                      <td className="p-3.5 text-slate-700">Signed Admission Undertaking + ERP Fee Ledger + TC Issued</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">RTE-Safe Parent Civil Notice + Order XXXVII CPC</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Private University / Medical Semester &amp; Hostel Dues</td>
                      <td className="p-3.5 text-slate-700">₹1.5L–₹25L<br /><span className="text-xs text-slate-500">1–4 Semesters</span></td>
                      <td className="p-3.5 text-slate-700">Co-Guarantor Parent Bond + Biometric Mess/Hostel Logs</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">PSS s.25 / NI s.138 + Civil Suit vs Co-Guarantor</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">B2B Smart-Class, School-ERP &amp; Robotics Lab Vendors</td>
                      <td className="p-3.5 text-slate-700">₹5L–₹3 Cr<br /><span className="text-xs text-slate-500">60–240 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Trust/Society Deed + Commissioning Sign-Off + Usage Logs</td>
                      <td className="p-3.5 font-semibold text-emerald-700">Societies Act s.6 Notice + MSMED s.15–18 / Order 37</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Textbook Publishers, Uniform &amp; Stationery Suppliers</td>
                      <td className="p-3.5 text-slate-700">₹2L–₹80L<br /><span className="text-xs text-slate-500">Pre-Session Dec–Jan</span></td>
                      <td className="p-3.5 text-slate-700">Signed Delivery Challans, LRs/GRs &amp; Security PDCs</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">NI Act s.138 + Order XXXVII CPC + MSMED s.16</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Yellow-Bus School Transport Fleet Contractors</td>
                      <td className="p-3.5 text-slate-700">₹3L–₹1.2 Cr<br /><span className="text-xs text-slate-500">3–6 Months</span></td>
                      <td className="p-3.5 text-slate-700">Transport Agreement + RTO Permit + Parent Fee Collection</td>
                      <td className="p-3.5 font-semibold text-emerald-700">Fiduciary Trust Notice + MSMED s.15–18 / Commercial Suit</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Coaching Chain Franchise Royalties &amp; IP Piracy</td>
                      <td className="p-3.5 text-slate-700">₹8L–₹2.5 Cr<br /><span className="text-xs text-slate-500">Immediate Breach</span></td>
                      <td className="p-3.5 text-slate-700">Franchise Agreement + Enrolment Portal + Branded Photos</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">Commercial Courts Act + Arbitration s.9 Injunction + Copyright</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Corporate L&amp;D, Upskilling &amp; Assessment Vendors</td>
                      <td className="p-3.5 text-slate-700">₹1.5L–₹45L<br /><span className="text-xs text-slate-500">45–150 DPD</span></td>
                      <td className="p-3.5 text-slate-700">Signed Attendance Sheets + LMS Logs + GSTR-2B Acceptance</td>
                      <td className="p-3.5 font-semibold text-emerald-700">MSMED s.15–18 + Income-tax s.43B(h) Tax Disallowance</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">PMKVY / DDU-GKY / SSDM &amp; CSR Skill Grants</td>
                      <td className="p-3.5 text-slate-700">₹10L–₹3 Cr+<br /><span className="text-xs text-slate-500">6–24 Months</span></td>
                      <td className="p-3.5 text-slate-700">SDMS Batch Certification + Placement Audit + Sanction Order</td>
                      <td className="p-3.5 font-semibold text-amber-800">CPC s.80 Statutory Notice + Arbitration / Art. 226 Writ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Workflow SVG & Mobile Cards */}
            <section
              id="heading-workflow-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  RTE-Safe Parent &amp; School-Trust Recovery Architecture
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Whether your institution is collecting chronic parent arrears or a B2B EdTech vendor is pursuing a School Trust, separating child/academic compliance from financial enforcement is the decisive legal filter.
              </p>

              {/* Desktop SVG Escalation Map */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                <svg
                  width={820}
                  height={250}
                  viewBox="0 0 820 250"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Dual-track education recovery workflow separating RTE-safe parent notices from Registered Society and Trust B2B enforcement"
                >
                  {/* Step 1 */}
                  <rect x="10" y="65" width="175" height="120" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="97" y="92" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1: COMPLIANCE</text>
                  <text x="97" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Zero Child / Degree</text>
                  <text x="97" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Interference</text>
                  <text x="97" y="158" textAnchor="middle" fill="#CBD5E1" fontSize="10">Issue TC / Marksheet cleanly;</text>
                  <text x="97" y="172" textAnchor="middle" fill="#CBD5E1" fontSize="10">Lock BSA s.63 Fee Ledger</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="185" y1="125" x2="225" y2="125" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="225,119 237,125 225,131" fill="#DC2626" />

                  {/* Stage 2 Top (Parent/Student) */}
                  <rect x="237" y="15" width="250" height="95" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="362" y="38" textAnchor="middle" fill="#FCA5A5" fontSize="10" fontWeight="700">TRACK A: PARENT / CO-GUARANTOR</text>
                  <text x="362" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">RTE s.5(3) Safe-Harbour Notice</text>
                  <text x="362" y="76" textAnchor="middle" fill="#CBD5E1" fontSize="10">Addressed strictly to Earning Parent</text>
                  <text x="362" y="92" textAnchor="middle" fill="#CBD5E1" fontSize="10">Email + WhatsApp + Speed Post RPAD</text>

                  {/* Stage 2 Bottom (B2B Trust/Skill) */}
                  <rect x="237" y="140" width="250" height="95" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="362" y="163" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700">TRACK B: B2B TRUST / GOVT MISSION</text>
                  <text x="362" y="183" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Societies Act s.6 / CPC s.80</text>
                  <text x="362" y="201" textAnchor="middle" fill="#CBD5E1" fontSize="10">Array President, Secretary &amp; Trustees</text>
                  <text x="362" y="217" textAnchor="middle" fill="#CBD5E1" fontSize="10">Attach Challans, ERP &amp; SDMS Logs</text>

                  {/* Arrows 2 -> 3 */}
                  <line x1="487" y1="62" x2="535" y2="100" stroke="#DC2626" strokeWidth="2" />
                  <line x1="487" y1="187" x2="535" y2="150" stroke="#10B981" strokeWidth="2" />
                  <polygon points="532,95 543,105 529,106" fill="#DC2626" />
                  <polygon points="529,144 543,145 532,155" fill="#10B981" />

                  {/* Stage 3 */}
                  <rect x="543" y="55" width="265" height="140" rx="12" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="675" y="82" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="700">STAGE 3: STATUTORY ESCALATION</text>
                  <text x="675" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Fast-Track Recovery Forums</text>
                  <text x="675" y="128" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">1. Order XXXVII CPC Summary Suit</text>
                  <text x="675" y="146" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">2. NI s.138 / PSS s.25 (30d Bounce)</text>
                  <text x="675" y="164" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">3. MSMED s.18 (3x RBI) &amp; s.43B(h)</text>
                  <text x="675" y="182" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">4. Art. 226 Writ (Audited Skill Grants)</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase text-red-400 mb-1">Stage 1 &bull; Compliance Lock</p>
                  <p className="text-sm font-bold mb-1">Zero Child or Degree Interference</p>
                  <p className="text-xs text-slate-300">Release TCs/marksheets cleanly under RTE s.5(3) &amp; UGC norms; export BSA s.63 fee/delivery records.</p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-red-900/60">
                  <p className="text-[11px] font-bold uppercase text-red-400 mb-1">Stage 2A &bull; Parent / Co-Guarantor Track</p>
                  <p className="text-sm font-bold mb-1">RTE Safe-Harbour Advocate Notice</p>
                  <p className="text-xs text-slate-300">Served strictly on earning parents via Email, WhatsApp &amp; Speed Post RPAD with zero academic threat.</p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-emerald-900/60">
                  <p className="text-[11px] font-bold uppercase text-emerald-400 mb-1">Stage 2B &bull; B2B Trust &amp; Skill Track</p>
                  <p className="text-sm font-bold mb-1">Societies Act s.6 / CPC s.80 Notice</p>
                  <p className="text-xs text-slate-300">Arrays Registered Society/Trust office-bearers or State Skill Missions ahead of Order 37 / MSEFC / Writ.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Sector-Specific Recovery Playbooks (Interactive Explorer)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Select your institutional profile below to inspect the exact statutory hook, common debtor excuses, and 3-step execution workflow.
              </p>

              <SchoolsEdTechHubScenarioTabs />
            </section>

            {/* Section 5: Bulk CSV & Dual-Track CTA */}
            <section
              id="heading-bulk-csv-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Bulk Parent CSV &amp; Multi-Campus Trust Representee Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                K-12 school groups, private universities, and textbook publishers rarely suffer from a single defaulter—they carry 50 to 500+ overdue parent ledgers or 40+ defaulting school Trusts at the close of each academic term. Through LegalRecovery.in&rsquo;s{" "}
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Bulk Recovery CSV Desk
                </Link>{" "}
                and{" "}
                <Link
                  href="/user/representees"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Representees Workspace
                </Link>
                , school Trusts and EdTech controllers can isolate ledgers campus-by-campus, test 1 live notice for ₹999 first, and then dispatch 10 to 10,000+ advocate-vetted notices simultaneously with tracked Email, Business WhatsApp, and Speed Post RPAD delivery logs.
              </p>

              <SchoolsEdTechHubCTA />
            </section>

            {/* Section 6: Statutory & Precedent Deep-Dive */}
            <section
              id="heading-statutory-mandates"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Binding Statutory Mandates: RTE s.5(3), Societies Act &amp; PSS s.25
                </h2>
              </div>

              <div className="space-y-4">
                {BINDING_MANDATES.map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5 border-l-4 border-l-[#DC2626]"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.citation}
                    </p>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2.5">
                      Applicable To: {item.parties}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
                      {item.holding}
                    </p>
                    <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                      Creditor Impact: {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Worked Economics Ledger */}
            <section
              id="heading-worked-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Economics: 120-Parent Fee Batch vs ₹38L EdTech Trust Claim
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Compare how structured statutory notices transform write-off risk across both sides of the education sector—without risking a single DEO complaint or technical dismissal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                    Scenario A &bull; K-12 Private School Trust
                  </p>
                  <h3 className="text-base font-extrabold mb-3">
                    120 Chronic Fee-Defaulting Parents (Avg ₹95,000 / Student)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 mb-4">
                    <li>&bull; <strong>Total Stuck Arrears:</strong> ₹1,14,00,000 (₹1.14 Cr across 2 academic terms)</li>
                    <li>&bull; <strong>Compliance Rule:</strong> All TCs &amp; report cards released cleanly (zero RTE s.5(3) risk)</li>
                    <li>&bull; <strong>Action:</strong> Bulk CSV upload of 120 RTE-Safe Parent Notices (Email + WhatsApp + RPAD)</li>
                    <li>&bull; <strong>Escalation Filter:</strong> Bounced PDCs routed to 30-day NI s.138; balance to Order 37 CPC</li>
                  </ul>
                  <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-xl p-3 text-xs text-emerald-300 font-semibold">
                    Result: Structured pre-litigation civil settlement directly with earning parents—zero media or DEO friction.
                  </div>
                </div>

                <div className="bg-slate-50 text-slate-900 rounded-2xl p-5 border border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    Scenario B &bull; Udyam B2B Smart-Class / Publisher
                  </p>
                  <h3 className="text-base font-extrabold mb-3">
                    ₹38,00,000 Overdue From 6 School Trusts (180+ Days Overdue)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 mb-4">
                    <li>&bull; <strong>Principal Overdue:</strong> ₹38,00,000 (signed installation &amp; book challans)</li>
                    <li>&bull; <strong>Entity Correction:</strong> Arrayed Registered Societies/Trusts via President &amp; Secretary (s.6)</li>
                    <li>&bull; <strong>MSMED s.16 Interest:</strong> 3x RBI Bank Rate (~19.5% p.a. compounded monthly)</li>
                    <li>&bull; <strong>Accrued 6-Month Statutory Interest:</strong> ~₹3,89,000+ (check exact math via{" "}
                      <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] underline font-semibold">
                        MSME Interest Calculator
                      </Link>)
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold">
                    Result: Pre-session December–January demand wave compels Trust clearing before April admissions.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Complete Hub-and-Spoke Directory */}
            <section
              id="heading-spokes-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Complete IND-17 Directory: All 10 Playbooks &amp; Notice Template
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Explore every specialized guide and notice workspace in our Education &amp; EdTech B2B recovery cluster.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => {
                  const trackSpokes = IND_17_SPOKES.filter((s) => s.track === track.key);
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
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {spoke.summary}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 9: Seed Resources & Tools */}
            <section
              id="heading-seed-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Essential Statutory Guides, Calculators &amp; Bulk Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">Bulk CSV Desk</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Bulk Recovery Cases: All-in-One Institutional Solutions
                  </p>
                  <p className="text-xs text-slate-600">
                    Upload 10 to 10,000+ parent fee ledgers or defaulting school Trusts in one structured batch.
                  </p>
                </Link>

                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">Government Grants</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Section 80 CPC Notice to Government &amp; Skill Missions
                  </p>
                  <p className="text-xs text-slate-600">
                    Mandatory 60-day statutory notice before filing suits or writs against State Skill Missions (PMKVY/SSDM).
                  </p>
                </Link>

                <Link
                  href="/cheque-bounce-account-closed-signature-mismatch"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">NI Act s.138</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    Cheque Bounce: Account Closed &amp; Signature Mismatch
                  </p>
                  <p className="text-xs text-slate-600">
                    Prosecute bounced semester fee cheques, school Trust PDCs, and dishonoured NACH mandates.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] transition-colors"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Interactive Calculator</p>
                  <p className="text-sm font-extrabold text-slate-900 mb-1">
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </p>
                  <p className="text-xs text-slate-600">
                    Compute exact compound interest under MSMED s.16 for Udyam EdTech, L&amp;D, publisher &amp; bus invoices.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: School, University &amp; EdTech Recovery
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
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Education Portals
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
