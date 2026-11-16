import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ConstructionHubTableOfContents from "./ConstructionHubTableOfContents";
import ConstructionHubScenarioTabs from "./ConstructionHubScenarioTabs";
import ConstructionHubCTA from "./ConstructionHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/construction-epc-contractor-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Construction, EPC & MEP Contractor Bill & Retention Recovery";
const PAGE_DESCRIPTION =
  "Recover uncertified Running Account (RA) bills, post-DLP retention money, extra-item variations & PSU/developer dues while shielding your Bank Guarantees.";
const H1_TEXT =
  "specialized Legal Recovery & Arbitration Desk for Civil, EPC, Infrastructure & MEP Contractors in India";

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
  track: "RA, Retention & PSU" | "MSME & Subcontract" | "Prolongation, LD & Arb" | "Tools & Templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_07_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-090",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RA, Retention & PSU",
    title: "Uncertified RA & Final Bills: Stalled Measurement Books & Coerced NDCs",
    url: "/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery",
    statute: "Ambica Construction & R.L. Kalathia",
    summary:
      "Trigger deemed MB certification using site DPRs and defeat forced 'No-Claim Certificates' signed under financial duress.",
  },
  {
    id: "B2B-091",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RA, Retention & PSU",
    title: "Post-DLP 5–10% Retention Money Recovery & Beneficial Occupation Proof",
    url: "/retention-money-recovery-after-defect-liability-period-dlp-expiry",
    statute: "Contract Act s.73/74 & Order 37 CPC",
    summary:
      "Close the 'pending OC' developer loophole by proving beneficial handover and recovering post-DLP retention with commercial interest.",
  },
  {
    id: "B2B-093",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "RA, Retention & PSU",
    title: "NHAI, CPWD, PWD, JJM & Municipal Tender Dues: Writ & s.80 CPC",
    url: "/nhai-cpwd-pwd-railways-municipal-tender-payment-recovery-contractors",
    statute: "CPC s.80 & Art. 226 (Surya Constructions)",
    summary:
      "Overcome 'budget/grant not received' excuses on certified MB bills via Section 80 CPC notice, DRB triggers, and High Court Writs.",
  },
  {
    id: "B2B-092",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "MSME & Subcontract",
    title: "Works-Contract MSME Samadhaan Trap & Divisible Supply Fix",
    url: "/works-contract-excluded-from-msme-samadhaan-contractor-alternatives",
    statute: "MSMED s.18 & Shree Gee / Sterling Rulings",
    summary:
      "Avoid 2-year MSEFC quashing of indivisible Works Contracts by splitting Supply vs Erection POs or routing to Commercial Courts.",
  },
  {
    id: "B2B-094",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "MSME & Subcontract",
    title: "Defeating Abusive 'Pay-When-Paid' Back-to-Back Subcontract Clauses",
    url: "/pay-when-paid-back-to-back-clause-subcontractor-recovery-india",
    statute: "Contract Act s.23/46 & Ircon Precedent",
    summary:
      "Stop main EPC contractors from indefinitely withholding Tier-2 MEP, piling, and civil bills or settling behind your back.",
  },
  {
    id: "B2B-095",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Prolongation, LD & Arb",
    title: "Prolongation, Idle Plant, Overhead & Extra-Item BOQ Claims",
    url: "/construction-price-escalation-extra-items-prolongation-claim-recovery",
    statute: "Contract Act s.55, s.70 & s.73",
    summary:
      "Preserve Hudson/Eichleay prolongation damages during EOT applications via mandatory Section 55 reservation notices.",
  },
  {
    id: "B2B-096",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Prolongation, LD & Arb",
    title: "Countering Wrongful 10% Liquidated Damages & Risk-and-Cost Termination",
    url: "/wrongful-liquidated-damages-ld-termination-works-contract-remedy",
    statute: "Contract Act s.74 & Kailash Nath v. DDA",
    summary:
      "Invalidate windfall 10% LD debit notes lacking actual-loss proof and protect site inventory during contested terminations.",
  },
  {
    id: "B2B-097",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "Prolongation, LD & Arb",
    title: "Defect-Free Section 21 Arbitration Invocation & Nortel Limitation Rules",
    url: "/section-21-arbitration-invocation-notice-construction-epc-guide",
    statute: "Arbitration Act s.21, s.11(6) & Nortel",
    summary:
      "Distinguish Section 21 invocation from plain dunning reminders, exhaust DRB/Engineer pre-tiers, and stop the 3-year clock.",
  },
  {
    id: "B2B-098",
    archetype: "G2",
    archetypeLabel: "G2 Execution Matrix",
    track: "Prolongation, LD & Arb",
    title: "Enforcing Section 36 Arbitral Awards, 100% Deposit, PSU 75% & IBC",
    url: "/executing-arbitral-award-section-36-against-developer-psu-india",
    statute: "Arbitration s.36(3), NITI 75% & IBC s.8/9",
    summary:
      "Compel 100% court deposits during s.34 challenges, unlock 75% PSU payouts against BG, or initiate IBC on crystallized awards.",
  },
  {
    id: "B2B-099",
    archetype: "T1",
    archetypeLabel: "T1 Interactive Tool",
    track: "Tools & Templates",
    title: "Construction RA Bill, DLP Retention, Interest & Limitation Calculator",
    url: "/tools/construction-retention-dlp-escalation-claim-calculator",
    statute: "Limitation Act Art. 18, 55 & 113",
    summary:
      "Track split 3-year limitation cutoffs across Final Bills and Post-DLP Retention tranches with downloadable claim summaries.",
  },
  {
    id: "B2B-100",
    archetype: "P1",
    archetypeLabel: "P1 Notice Pack",
    track: "Tools & Templates",
    title: "Contractor Notice Pack: RA Bill, Post-DLP Retention & Duress Protest",
    url: "/templates/construction-ra-bill-retention-money-arbitration-notice",
    statute: "Commercial Courts s.2(1)(c)(vi) & Arb s.21",
    summary:
      "Advocate-vetted notice formats featuring MB schedules, PBG non-encashment warnings, Section 21 invocation, and NDC protest letters.",
  },
];

const APEX_PRECEDENTS = [
  {
    title: "Coerced 'No-Claim / No-Dues Certificates' Do Not Bar Contractor Claims",
    parties: "R.L. Kalathia & Co. v. State of Gujarat & Ambica Construction",
    citation: "(2011) 2 SCC 400 & (2010) 6 SCC 344 — Supreme Court of India",
    holding:
      "Where an employer or PSU withholds admitted Running Account or Final Bill funds unless the contractor signs a full-and-final 'No-Claim Certificate', such coerced discharge does not foreclose arbitration or extra claims—especially when protested contemporaneously or immediately upon release.",
    impact: "Protects contractors forced to sign clean NDCs to meet site payroll and vendor obligations.",
  },
  {
    title: "Article 226 Writ Mandamus for Admitted Government & PSU Certified Bills",
    parties: "M/s Surya Constructions v. State of U.P. & Unitech Precedents",
    citation: "(2019) SCC OnLine SC 2471 — Supreme Court of India",
    holding:
      "Where work is completed satisfactorily and Measurement Book quantities are admitted without bona fide dispute, a State authority or Municipal body cannot deny payment citing 'lack of budget or grant'. High Courts may compel payment with interest under Article 226.",
    impact: "Cuts through 5-year civil suit delays for certified PWD, JJM, and Municipal bills.",
  },
  {
    title: "10% Liquidated Damages Cannot Be Deducted as an Automatic Windfall",
    parties: "Kailash Nath Associates v. Delhi Development Authority (DDA)",
    citation: "(2015) 4 SCC 136 — Supreme Court of India (Contract Act Section 74)",
    holding:
      "Under Section 74 of the Indian Contract Act, 1872, liquidated damages or retention forfeiture require pleading and proof of actual loss or legal injury (unless genuinely impossible to compute), and cannot be imposed where delay stems from employer defaults in site handover or drawings.",
    impact: "Neutralizes arbitrary 10% LD debit notes slapped onto final RA bills.",
  },
  {
    title: "3-Year Limitation Freeze & Limits on 'Pay-When-Paid' Subcontract Clauses",
    parties: "BSNL v. Nortel Networks (India) Pvt. Ltd. & Ircon International v. Vinay Heavy Equipments",
    citation: "(2021) 5 SCC 738 & Supreme Court / High Court Rulings on Subcontract Delay",
    holding:
      "Nortel Networks enforces a strict 3-year limitation window for Section 11/21 arbitration petitions—meaning informal reminder letters never stop the clock. Separately, Ircon and High Court rulings curb main contractors from hiding indefinitely behind back-to-back clauses or settling without paying subcontractors.",
    impact: "Mandates timely Section 21 invocation and strengthens Tier-2 subcontractor recoveries.",
  },
];

const FAQS = [
  {
    question: "Can a contractor recover an unpaid RA bill if the developer or PMC refuses to sign the Measurement Book?",
    answer:
      "Yes. In Indian construction contracts, private developers and Project Management Consultants (PMCs) frequently stonewall joint measurement sign-offs to defer payment liabilities. However, contractors can establish deemed certification by compiling contemporaneous electronic site records certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023)—including Daily Progress Reports (DPRs), concrete pour cards, joint level sheets, material gate-entry passes, and third-party laboratory test cubes. Serving an advocate-drafted deemed-certification notice puts the employer on 15-day notice under Section 55/70 of the Indian Contract Act, laying the mandatory evidentiary foundation for Section 21 arbitration or summary judgment under Order XIII-A of the Commercial Courts Act, 2015.",
  },
  {
    question: "If we signed a 'No-Claim Certificate' under pressure to get 60% of our Final Bill, are our remaining claims dead?",
    answer:
      "No. The Supreme Court of India in landmark rulings including National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd., Ambica Construction v. Union of India, and R.L. Kalathia & Co. v. State of Gujarat (2011) 2 SCC 400 has definitively held that a 'No-Dues' or 'No-Claim' Certificate issued under financial duress or economic coercion does not extinguish genuine contractor claims. If an employer conditioned the release of admitted running bills on executing a blanket waiver, our advocates serve a formal 'Without Prejudice — Signed Under Financial Duress' revocation notice. This contemporaneous protest preserves your right to pursue uncertified quantities, price escalation, prolongation overheads, and retention balances before an arbitral tribunal.",
  },
  {
    question: "Why do High Courts quash MSME Samadhaan awards on EPC and construction 'Works Contracts'?",
    answer:
      "Multiple High Courts—including Delhi, Bombay, and Allahabad in decisions such as Shree Gee Enterprises and Sterling & Wilson—have established that an indivisible composite 'Works Contract' (involving supply, civil labour, structural erection, and the transfer of property in goods embedded into immovable property) falls outside the purview of Section 18 of the MSMED Act, 2006. When contractors file indivisible claims before the Micro and Small Enterprise Facilitation Council (MSEFC), respondents often wait 18–24 months before approaching the High Court under Article 226 to quash the proceedings for want of jurisdiction. LegalRecovery.in performs a structural contract audit: where equipment supply and civil installation are billed under divisible purchase orders, we route the supply component to MSEFC and Section 43B(h) enforcement, while channeling composite infrastructure claims directly to Section 21 arbitration or Commercial Courts under Section 2(1)(c)(vi).",
  },
  {
    question: "How do we recover 5%–10% retention money if the builder says Occupancy Certificate (OC) is still pending?",
    answer:
      "Developers routinely treat contractor retention money as interest-free working capital by asserting that the Defect Liability Period (DLP) only begins once the local municipal authority issues an Occupancy Certificate (OC). However, where the contractor has achieved Virtual Completion, handed over the site, and the developer or buyers have entered into 'Beneficial Occupation' (such as interior fit-outs, leasing, or commercial operations), courts hold that the DLP commences from the actual handover date. Once the contractual DLP expires (typically 12 to 24 months post-handover) without contemporaneous defect notices, retention money becomes an unconditionally due liquidated debt recoverable via Summary Suits under Order XXXVII CPC or Section 21 arbitration with commercial interest.",
  },
  {
    question: "How can a contractor protect Performance Bank Guarantees (PBGs) before demanding overdue payments?",
    answer:
      "Whenever a contractor prepares to serve a high-value demand or dispute notice, developers often retaliate by threatening to encash Performance Bank Guarantees (PBGs) or Retention Money BGs. While bank guarantees are independent contracts, Indian courts recognize two well-established exceptions: egregious fraud and irretrievable injustice / special equities (as affirmed in BSES Rajdhani Power Ltd. v. Ultra Modern Projects). LegalRecovery.in coordinates pre-emptive Section 9 Commercial Court petitions under the Arbitration Act, placing complete hindrance registers, extension-of-time (EOT) applications, and unpaid certified bills on record to obtain immediate ad-interim injunctions restraining the beneficiary and issuing bank from processing fraudulent encashments.",
  },
  {
    question: "When must an EPC contractor serve a Section 80 CPC notice vs an Article 226 Writ against NHAI, CPWD, or PWD?",
    answer:
      "Under Section 80(1) of the Code of Civil Procedure, 1908, serving a clear 60-day statutory notice is a mandatory condition precedent before instituting a civil or commercial suit against the Government or a public officer. Fortunately, Section 15(2) of the Limitation Act, 1963 explicitly excludes this 60-day notice period from the 3-year limitation clock. However, where Government departments (such as CPWD, State PWD, Railways, or Jal Jeevan Mission) have officially signed and certified the Measurement Book—and withhold disbursements solely due to 'exhausted budget allocations' or 'pending state grants'—the Supreme Court in M/s Surya Constructions v. State of U.P. confirmed that High Courts can issue a Writ of Mandamus under Article 226 directing immediate payment with interest, bypassing prolonged civil trials.",
  },
  {
    question: "Can an EPC firm test LegalRecovery.in on one stuck bill before onboarding multiple project sites?",
    answer:
      "Yes. EPC contractors, civil engineering firms, and MEP subcontractors can initiate a single overdue Running Account bill, retention release claim, or government department demand under our ₹999 Self-Serve Test Desk. An experienced construction recovery advocate reviews your contract clauses, MB records, and correspondence, drafts a statutory demand notice, and dispatches it via tracked Email, WhatsApp, and Speed Post RPAD with Section 63 BSA compliance. Once validated, enterprise contractors can onboard multiple SPVs, joint-venture divisions, and project sites via our Representees workspace and CSV bulk onboarding desk.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Arbitration and Conciliation Act, 1996 (Sections 9, 11, 21, 29A & 36) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(vi) Construction Contracts, s.12A & Order XIII-A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 23, 46, 55, 70, 73 & 74) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Section 80 Government Notice & Order XXXVII Summary Suits) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Admissibility for DPRs, MBs & Notices) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court of India Judgments Portal (R.L. Kalathia, Surya Constructions, Kailash Nath & Nortel)",
    url: "https://main.sci.gov.in/judgments",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: CANONICAL_URL,
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-14T09:00:00+05:30",
  dateModified: "2026-11-16T14:49:03+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder",
    worksFor: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      url: "https://www.amalegalsolutions.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "Construction, EPC & MEP Contractor Pre-Arbitration Legal Recovery",
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
      "EPC Directors, Civil & Structural Contractors, MEP/HVAC Contractors, Infra Promoters, Subcontractors & Quantity Surveyors",
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
  name: "IND-07 Construction, EPC & MEP Contractor Recovery Spokes, Tools & Templates",
  numberOfItems: IND_07_SPOKES.length,
  itemListElement: IND_07_SPOKES.map((spoke, index) => ({
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
      name: "Construction & EPC Contractor Recovery",
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

const SPOKE_GROUPS: {
  groupTitle: string;
  badgeClass: string;
  items: IndustrySpoke[];
}[] = [
  {
    groupTitle: "Track A: Uncertified RA Bills, Post-DLP Retention & Govt/PSU Tenders",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
    items: IND_07_SPOKES.filter((s) => s.track === "RA, Retention & PSU"),
  },
  {
    groupTitle: "Track B: Works-Contract MSME Traps & Subcontractor 'Pay-When-Paid' Defense",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    items: IND_07_SPOKES.filter((s) => s.track === "MSME & Subcontract"),
  },
  {
    groupTitle: "Track C: Prolongation Claims, Wrongful LD, s.21 Invocation & s.36 Execution",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: IND_07_SPOKES.filter((s) => s.track === "Prolongation, LD & Arb"),
  },
  {
    groupTitle: "Track D: Interactive Retention/DLP Calculator & Contractor Notice Pack",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
    items: IND_07_SPOKES.filter((s) => s.track === "Tools & Templates"),
  },
];

export default function ConstructionEpcContractorRecoveryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Construction & EPC Recovery", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
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
              <span>IND-07 Infrastructure &amp; EPC Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>Arbitration Act s.21/s.9/s.36</span>
              <span className="text-red-500">&bull;</span>
              <span>Commercial Courts Act s.2(1)(c)(vi)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Statutory Scope
              </span>
              Under Section 2(1)(c)(vi) of the Commercial Courts Act, 2015, construction, infrastructure, and turnkey EPC contracts are statutorily recognized commercial disputes. For contractors pursuing construction contractor ra bill and retention money recovery india, ordinary dunning letters fail when developers stonewall Joint Measurement Books, withhold post-DLP retention, or levy arbitrary 10% Liquidated Damages. LegalRecovery.in provides an institutional legal desk combining BSA 2023 s.63 deemed-certification notices, Section 9 Bank Guarantee injunctions, Section 80 CPC government notices, and Section 21 arbitration invocations to accelerate recoveries across India.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Statutory Classification</span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-slate-100 block">s.2(1)(c)(vi) CCA</span>
                <span className="text-[10px] text-slate-400">Commercial Courts Act</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Arbitration Timeline</span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-emerald-400 block">12 Months</span>
                <span className="text-[10px] text-slate-400">s.29A Fast-Track Mandate</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Govt / PSU Notice</span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-amber-400 block">60 Days</span>
                <span className="text-[10px] text-slate-400">Section 80 CPC Mandate</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">BG Shield Priority</span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-red-400 block">Section 9 Injunction</span>
                <span className="text-[10px] text-slate-400">Commercial Court Stay</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Sticky Table of Contents */}
            <ConstructionHubTableOfContents />

            {/* Main Editorial Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Construction Recovery Gap */}
              <section
                id="heading-epc-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Industry Recovery Gap &bull; IND-07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why Construction &amp; EPC Dues Stall Beyond Standard Invoices
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  In commercial debt recovery, ordinary retail or trading debt is straightforward: a tax invoice is issued, goods are delivered against an e-Way bill, and payment falls due within 30 to 45 days. In the infrastructure and civil engineering sector, however, recovery is exponentially more complex. Whether dealing with an NHAI highway package, a metro rail elevated corridor, a commercial high-rise, or an industrial turnkey facility, contractors face structural bottlenecks that require specialized institutional legal interventions rather than generic collection notices.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  When dealing with stubborn commercial debtors, partnering with a knowledgeable civil work measurement book dispute recovery lawyer allows contractors to overcome administrative delays and compel joint site verifications through enforceable statutory channels. The four primary systemic failure modes in Indian construction projects include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wide block">
                      1. Measurement Book (MB) Stonewalling
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Developers and Project Management Consultants (PMCs) deliberately delay joint site measurements or refuse to sign Measurement Books. Without an endorsed MB, the employer argues the Running Account (RA) bill is &quot;uncertified&quot; and premature, freezing working capital while forcing the contractor to continue site operations. Engaging an experienced civil work measurement book dispute recovery lawyer becomes essential to establish deemed certification.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wide block">
                      2. Coerced &quot;No-Claim Certificates&quot; (NDCs)
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      To release even partial tranches of long-overdue bills, developers frequently demand unconditional &quot;No-Dues Certificates&quot; on contractor letterhead. Desperate to meet labour payroll and vendor commitments, contractors sign under financial duress—unaware that Supreme Court jurisprudence protects claims signed under protest.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wide block">
                      3. Indefinite Retention Money Withholding
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Contracts mandate 5% to 10% retention money deductions from every RA bill, repayable upon expiry of the Defect Liability Period (DLP). Developers routinely invent cosmetic punch-list defects or cite pending Occupancy Certificates (OCs) to withhold retention funds years after commercial handover and tenant occupation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wide block">
                      4. Retaliatory Bank Guarantee Encashment
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The moment a contractor serves a legal demand for unpaid bills or extra-item variations, employers weaponize Performance Bank Guarantees (PBGs). Unless restrained through an urgent Section 9 Commercial Court petition, wrongful encashment destroys the contractor&apos;s banking limits and balance sheet overnight.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Evidentiary Architecture Under Section 63 Bharatiya Sakshya Adhiniyam, 2023
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    When an employer refuses to countersign the Measurement Book, the contractor must construct an unassailable contemporaneous paper trail. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023), electronic records—including Daily Progress Reports (DPRs), digital level books, concrete batching plant logs, cube compressive strength test certificates from NABL-accredited laboratories, and WhatsApp/email communication chains—are fully admissible as primary electronic evidence.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    By serving a structured statutory demand annexing these Section 63 BSA records, the contractor legally shifts the burden of proof onto the employer. Under Section 55 and Section 70 of the Indian Contract Act, 1872, an employer who accepts the benefit of executed civil works without returning contemporaneous written rejections within the contractual inspection window is deemed to have accepted the quantities as billed.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Furthermore, standard construction contract frameworks—such as CPWD General Conditions of Contract (GCC) Clauses 7 and 8, FIDIC Red Book Sub-Clauses 14.3 and 14.6, and Model EPC Concession Agreements under NHAI—mandate that the Engineer or PMC must record joint measurements within a stipulated window (typically 10 to 14 days of invoice submission). If the employer fails to conduct the measurement within this period after receiving formal notice, the contractor&apos;s submitted measurements achieve the legal status of deemed certification, entitling the contractor to immediate payment of the interim Running Account bill.
                  </p>
                </div>

                <div className="bg-red-50/70 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <strong>The Commercial Courts Act Breakthrough:</strong> Section 2(1)(c)(vi) of the Commercial Courts Act, 2015 explicitly classifies construction and infrastructure contracts (including construction tenders) as commercial disputes. This statutory classification unlocks specialized Commercial Courts, mandatory Section 12A Pre-Institution Mediation with limitation protection, Order XIII-A Summary Judgments for admitted MBs, and commercial interest rates—bypassing decade-long civil suit backlogs.
                  </p>
                </div>
              </section>

              {/* Section 2: Escalation Matrix */}
              <section
                id="heading-escalation-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Multi-Track Forum Selection
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Construction Claim Escalation Matrix by Contract &amp; Ticket
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Construction recoveries cannot follow a single procedural path. Selecting the right statutory rail depends on ticket size, the nature of documentation (certified vs uncertified), public sector vs private developer status, and whether the underlying agreement contains an arbitration clause. When dealing with specialized infrastructure arbitration and claim recovery india, contractors must calibrate their legal notices to the exact contractual forum:
                </p>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[620px]">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th className="py-3 px-3.5 font-bold uppercase tracking-wider">Dispute Category</th>
                        <th className="py-3 px-3 font-bold uppercase tracking-wider">Pecuniary Floor</th>
                        <th className="py-3 px-3 font-bold uppercase tracking-wider">Primary Statutory Rail</th>
                        <th className="py-3 px-3 font-bold uppercase tracking-wider">Pre-Tier Waiting Period</th>
                        <th className="py-3 px-3 font-bold uppercase tracking-wider">Enforcement Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Uncertified RA Bills &amp; Stalled MB
                        </td>
                        <td className="py-3 px-3 font-mono">&ge; &#8377;10 Lakh</td>
                        <td className="py-3 px-3">Deemed MB Notice &amp; s.21 Invocation</td>
                        <td className="py-3 px-3">15–30 Days (Contractual)</td>
                        <td className="py-3 px-3 font-medium text-[#DC2626]">Sole Arbitrator / Commercial Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Post-DLP Retention Money Release
                        </td>
                        <td className="py-3 px-3 font-mono">&#8377;5L – &#8377;25 Cr</td>
                        <td className="py-3 px-3">Beneficial Possession Proof &amp; Demand</td>
                        <td className="py-3 px-3">30 Days Post-DLP Expiry</td>
                        <td className="py-3 px-3 font-medium text-emerald-700">Order 37 CPC / Arb s.11</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          NHAI, CPWD, PWD &amp; JJM Dues
                        </td>
                        <td className="py-3 px-3 font-mono">&ge; &#8377;25 Lakh</td>
                        <td className="py-3 px-3">s.80 CPC Notice &amp; Art. 226 Writ</td>
                        <td className="py-3 px-3">Mandatory 60 Days (s.80 CPC)</td>
                        <td className="py-3 px-3 font-medium text-amber-800">High Court / GCC DRB &amp; Arb</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Tier-2 Subcontractor &amp; MEP Bills
                        </td>
                        <td className="py-3 px-3 font-mono">&#8377;3L – &#8377;10 Cr</td>
                        <td className="py-3 px-3">Contract Act s.46 (Invalidating Pay-When-Paid)</td>
                        <td className="py-3 px-3">15 Days Statutory Notice</td>
                        <td className="py-3 px-3 font-medium text-[#DC2626]">Commercial Court s.12A / MSEFC (Supply)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Prolongation &amp; Extra-Item Claims
                        </td>
                        <td className="py-3 px-3 font-mono">&ge; &#8377;50 Lakh</td>
                        <td className="py-3 px-3">Contract Act s.55 Notice &amp; Hudson Formula</td>
                        <td className="py-3 px-3">Synchronous with EOT Applications</td>
                        <td className="py-3 px-3 font-medium text-slate-900">Arbitral Tribunal (s.29A 12-mo)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Wrongful 10% LD &amp; Termination
                        </td>
                        <td className="py-3 px-3 font-mono">10% Contract Sum</td>
                        <td className="py-3 px-3">Contract Act s.74 (Kailash Nath Actual Loss)</td>
                        <td className="py-3 px-3">Immediate 7-Day Injunction Move</td>
                        <td className="py-3 px-3 font-medium text-red-700">Commercial Court s.9 / Section 17</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-semibold text-slate-900">
                          Arbitral Award Execution
                        </td>
                        <td className="py-3 px-3 font-mono">Crystallized Sum</td>
                        <td className="py-3 px-3">Arbitration Act s.36 Decree &amp; NITI 75%</td>
                        <td className="py-3 px-3">90 Days Post-Award (s.34 window)</td>
                        <td className="py-3 px-3 font-medium text-emerald-700">Commercial Court Execution / IBC s.9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Navigating Government Tenders: NHAI, CPWD, Railways &amp; Jal Jeevan Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    For public sector projects, finding a prompt nhai cpwd pwd contractor payment delay legal remedy requires balancing statutory prerequisites with aggressive legal remedies. Section 80(1) CPC makes a 60-day notice mandatory prior to instituting civil or commercial recovery suits against government authorities. Under Section 15(2) of the Limitation Act, 1963, this 60-day notice period is excluded from computing limitation, ensuring contractors do not lose their legal rights while exhausting administrative review.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Furthermore, where public authorities admit the certified MB quantities but refuse disbursement by citing &quot;budget freeze&quot; or &quot;head-office grants pending&quot;, the contractor is not required to undergo a 5-year civil trial. The Supreme Court in <em>M/s Surya Constructions v. State of U.P.</em> established that writ petitions under Article 226 of the Constitution are fully maintainable against public authorities to compel payment of undisputed, certified contractor liabilities.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under CPWD GCC Clause 25 and standard NHAI concession models, contracts often mandate a multi-tiered dispute escalation mechanism—requiring disputes to be referred first to the Engineer-in-Charge, followed by the Dispute Review Board (DRB) or Dispute Review Expert (DRE), before formal arbitration can be invoked. Serving a defect-free claim notice that meticulously complies with these contractual pre-conditions prevents respondents from filing procedural delay petitions under Section 11(6) of the Arbitration Act, ensuring the arbitral tribunal is constituted within statutory timeframes.
                  </p>
                </div>
              </section>

              {/* Section 3: Recovery Rail SVG Workflow */}
              <section
                id="heading-epc-pipeline"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    End-to-End Workflow Architecture
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    EPC Recovery Rail: From Joint MB &amp; Notice to s.36 Decree
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering complex contractor dues requires a disciplined 5-stage legal architecture. Each step builds an unassailable evidentiary record under the Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023), eliminating debtor defences before the matter reaches an arbitral tribunal or commercial judge.
                </p>

                {/* Desktop SVG Workflow */}
                <div className="hidden md:block w-full overflow-hidden py-3">
                  <svg
                    viewBox="0 0 860 160"
                    width={860}
                    height={160}
                    className="w-full h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="5-Stage Construction and EPC Legal Recovery Rail"
                  >
                    {/* Stage 1 */}
                    <g transform="translate(10, 10)">
                      <rect width="150" height="140" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">01</text>
                      <text x="50" y="32" fill="#F8FAFC" fontSize="12" fontWeight="bold">Site Audit</text>
                      <text x="14" y="65" fill="#94A3B8" fontSize="10">DPRs &amp; Pour Cards</text>
                      <text x="14" y="82" fill="#94A3B8" fontSize="10">Joint Level Sheets</text>
                      <text x="14" y="99" fill="#94A3B8" fontSize="10">Material Gate Pass</text>
                      <text x="14" y="122" fill="#38BDF8" fontSize="9" fontWeight="600">BSA 2023 s.63 Proof</text>
                    </g>

                    {/* Arrow 1 */}
                    <path d="M165 80 L180 80" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 2 */}
                    <g transform="translate(185, 10)">
                      <rect width="150" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">02</text>
                      <text x="50" y="32" fill="#0F172A" fontSize="12" fontWeight="bold">Statutory Notice</text>
                      <text x="14" y="65" fill="#475569" fontSize="10">Deemed MB Notice</text>
                      <text x="14" y="82" fill="#475569" fontSize="10">Duress Protest Letter</text>
                      <text x="14" y="99" fill="#475569" fontSize="10">s.80 CPC (Govt / PSU)</text>
                      <text x="14" y="122" fill="#DC2626" fontSize="9" fontWeight="600">15–60 Day Demand</text>
                    </g>

                    {/* Arrow 2 */}
                    <path d="M340 80 L355 80" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 3 */}
                    <g transform="translate(360, 10)">
                      <rect width="150" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">03</text>
                      <text x="50" y="32" fill="#0F172A" fontSize="12" fontWeight="bold">BG Shield</text>
                      <text x="14" y="65" fill="#475569" fontSize="10">Section 9 Petition</text>
                      <text x="14" y="82" fill="#475569" fontSize="10">Restrain PBG Encashment</text>
                      <text x="14" y="99" fill="#475569" fontSize="10">Special Equities Plea</text>
                      <text x="14" y="122" fill="#DC2626" fontSize="9" fontWeight="600">Urgent Injunction</text>
                    </g>

                    {/* Arrow 3 */}
                    <path d="M515 80 L530 80" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 4 */}
                    <g transform="translate(535, 10)">
                      <rect width="150" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">04</text>
                      <text x="50" y="32" fill="#0F172A" fontSize="12" fontWeight="bold">s.21 Invocation</text>
                      <text x="14" y="65" fill="#475569" fontSize="10">Crystallize Claims</text>
                      <text x="14" y="82" fill="#475569" fontSize="10">Exhaust DRB / GCC</text>
                      <text x="14" y="99" fill="#475569" fontSize="10">High Court s.11 Filing</text>
                      <text x="14" y="122" fill="#059669" fontSize="9" fontWeight="600">3-Yr Limitation Stop</text>
                    </g>

                    {/* Arrow 4 */}
                    <path d="M690 80 L705 80" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 5 */}
                    <g transform="translate(710, 10)">
                      <rect width="140" height="140" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#059669" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">&#10003;</text>
                      <text x="50" y="32" fill="#F8FAFC" fontSize="12" fontWeight="bold">Execution</text>
                      <text x="14" y="65" fill="#94A3B8" fontSize="10">s.36 Court Decree</text>
                      <text x="14" y="82" fill="#94A3B8" fontSize="10">100% Deposit Order</text>
                      <text x="14" y="99" fill="#94A3B8" fontSize="10">NITI 75% Release</text>
                      <text x="14" y="122" fill="#34D399" fontSize="9" fontWeight="600">Recovery Complete</text>
                    </g>
                  </svg>
                </div>

                {/* Mobile Stacked Cards Fallback */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Stage 01</span>
                    <p className="text-sm font-bold text-white">Site Audit &amp; Electronic Evidence Compilation</p>
                    <p className="text-xs text-slate-300">Daily Progress Reports (DPRs), concrete pour cards, lab test logs, and material gate passes certified under Section 63 BSA 2023.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wider">Stage 02</span>
                    <p className="text-sm font-bold text-slate-900">Statutory Notice &amp; Duress Protest</p>
                    <p className="text-xs text-slate-600">Deemed MB certification notice, under-duress protest on coerced NDCs, or mandatory Section 80 CPC notice to government departments.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wider">Stage 03</span>
                    <p className="text-sm font-bold text-slate-900">Section 9 Bank Guarantee Shield</p>
                    <p className="text-xs text-slate-600">Urgent Commercial Court petition to restrain fraudulent or retaliatory invocation of Performance Bank Guarantees (PBGs).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wider">Stage 04</span>
                    <p className="text-sm font-bold text-slate-900">Section 21 Arbitration Invocation</p>
                    <p className="text-xs text-slate-600">Formal claim crystallization notice freezing the 3-year limitation clock under Nortel Networks, followed by Section 11 arbitrator appointment.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Stage 05</span>
                    <p className="text-sm font-bold text-white">Section 36 Execution &amp; 100% Deposit</p>
                    <p className="text-xs text-slate-300">Enforcing the arbitral award as a civil court decree, compelling 100% pre-deposit during Section 34 appeals, or unlocking 75% PSU payouts under NITI Aayog norms.</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Defeating &quot;Pay-When-Paid&quot; Clauses in MEP and Subcontracting Contracts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Tier-2 contractors, specialized MEP subcontractors, and HVAC/firefighting specialists routinely face abusive &quot;back-to-back&quot; or &quot;pay-when-paid&quot; clauses. When pursuing mep hvac firefighting contractor pending developer dues, the main turnkey EPC contractor often hides behind the developer&apos;s non-payment to withhold subcontractor remittances indefinitely.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Indian jurisprudence under Section 23 and Section 46 of the Indian Contract Act invalidates clauses that create an indefinite suspension of payment. In <em>Ircon International v. Vinay Heavy Equipments</em> and related High Court precedents, courts have held that a main contractor cannot withhold subcontractor payments indefinitely where the employer&apos;s delay is protracted or where the main contractor failed to vigorously pursue the claims. By serving a formal statutory demand establishing completion of the subcontracted package, subcontractors can break the back-to-back trap and enforce immediate recovery.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Moreover, if the prime contractor executes a global settlement or enters into an amicable dispute resolution with the project owner—accepting discounted payments or lump-sum compensation without accounting for the subcontractor&apos;s executed portion—the prime contractor commits a breach of trust and constructive fraud. In such cases, the subcontractor is legally entitled to proceed against the prime contractor under Order XXXVII of the CPC for liquidated sums, or institute corporate insolvency proceedings under Section 8 and 9 of the Insolvency and Bankruptcy Code, 2016 (IBC) where the operational debt exceeds ₹1 Crore.
                  </p>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28">
                <ConstructionHubScenarioTabs />
              </section>

              {/* Section 5: Dual B2B Conversion Funnel */}
              <section
                id="heading-dual-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Dual-Track B2B Onboarding
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Pre-Arbitration Claim Crystallization &amp; Multi-Site CSV Desk
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether you need an immediate advocate-drafted epc turnkey contractor unpaid bill legal notice for a single critical dispute or require an enterprise infrastructure to manage receivables across 50 SPVs, joint ventures, and municipal packages, LegalRecovery.in operates two synchronized engagement tracks. You can test a single case at ₹999 via our <Link href="/user/new-recovery" className="font-semibold text-[#DC2626] hover:underline">New Recovery Case Portal</Link>, manage multi-entity project sites via our <Link href="/user/representees" className="font-semibold text-[#DC2626] hover:underline">Representees Workspace</Link>, or upload high-volume arrears portfolios via our <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="font-semibold text-[#DC2626] hover:underline">Bulk Recovery Cases Solutions</Link>.
                </p>

                <ConstructionHubCTA />
              </section>

              {/* Section 6: Supreme Court Precedents */}
              <section
                id="heading-supreme-court-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Judicial Authority &bull; Creditor Protection
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Apex Court Precedents Protecting Construction Contractors
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian construction recovery is anchored in powerful Supreme Court precedents that strip employers and PSUs of unfair contractual leverage. Our advocate panel leverages these verified holdings to defeat debtor defences at the pre-litigation notice stage:
                </p>

                <div className="space-y-4">
                  {APEX_PRECEDENTS.map((prec, idx) => (
                    <div
                      key={prec.title}
                      className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="pl-2 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900">
                            {idx + 1}. {prec.title}
                          </h3>
                          <span className="text-[11px] font-mono font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
                            {prec.parties}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#DC2626]">{prec.citation}</p>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {prec.holding}
                        </p>
                        <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-medium text-emerald-800">
                          <span className="font-bold uppercase tracking-wider text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            Contractor Impact:
                          </span>
                          <span>{prec.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Challenging Arbitrary Liquidated Damages (LD) Deductions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Indian contract law, Liquidated Damages (LD) cannot be deducted as an automatic windfall. In <em>Kailash Nath Associates v. Delhi Development Authority</em> (2015) 4 SCC 136, the Supreme Court held that Section 74 of the Indian Contract Act requires proof of actual damage or loss, except where it is impossible to compute. Where delay is attributable to the employer—such as delayed site handover, unapproved structural drawings, utility shifting delays, or stalled inter-departmental clearances—the employer cannot unilaterally impose 10% LD penalties.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Our pre-arbitration demand notices cross-reference the site Hindrance Register against Section 55 of the Contract Act, placing contemporaneous extension-of-time (EOT) applications on record. This dismantles arbitrary LD debit notes and prevents developers from using liquidated damages to wipe out genuine final bill receivables.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Similarly, when employers threaten &quot;Risk and Cost Termination&quot; under standard contract clauses, they must demonstrate strict compliance with contractual cure notices (typically 14 to 30 days) and provide an objective inventory of balance works. Terminations executed without giving adequate opportunity to cure or where the employer is in prior material breach of its payment obligations are held illegal, entitling the contractor to full restitution of equipment, release of retained funds, and expectation damages for loss of profit on unexecuted scope under Section 73 of the Contract Act.
                  </p>
                </div>
              </section>

              {/* Section 7: Worked EPC Claim Calculation Math */}
              <section
                id="heading-worked-math"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Financial Crystallization Model
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked EPC Claim Math: &#8377;2.40 Cr Final Bill, Retention &amp; LD
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consider a typical commercial infrastructure project where an EPC contractor completed civil, structural, and MEP works valued at &#8377;12.00 Crore. Upon submitting the Final Bill, the private developer withheld payments citing snag-list delays and slapped an arbitrary 10% Liquidated Damages penalty. Here is how LegalRecovery.in crystallizes the contractor&apos;s true statutory claim:
                </p>

                {/* Ledger Breakdown Table */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 overflow-hidden">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
                    Statutory Claim Crystallization Ledger (Pre-Arbitration Notice)
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-300">Contract Value (Total Executed Scope)</span>
                      <span className="font-mono font-bold text-slate-100">&#8377;12,00,00,000</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-300">Cumulative RA Bills Certified &amp; Paid (RA 1 to RA 14)</span>
                      <span className="font-mono text-slate-400">(&#8377;9,60,00,000)</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-300 font-semibold">Unpaid Final Running Account Bill (RA 15 Submitted with DPRs)</span>
                      <span className="font-mono font-bold text-slate-100">&#8377;2,40,00,000</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-300 font-semibold">5% Retention Money Withheld Across All Bills (DLP Expired 12 Mo Ago)</span>
                      <span className="font-mono font-bold text-slate-100">&#8377;60,00,000</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-red-400">Developer&apos;s Arbitrary 10% LD Debit Note (No Actual Loss Proved — Kailash Nath Rebuttal)</span>
                      <span className="font-mono font-bold text-emerald-400">+&#8377;1,20,00,000 (Invalidated)</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-300">Verified Extra-Item Variations (Approved Site Level Sheets &amp; Pour Cards)</span>
                      <span className="font-mono font-bold text-slate-100">&#8377;42,50,000</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-300">Statutory Commercial Interest @ 12% p.a. (14 Months Delay on Admitted Final Bill)</span>
                      <span className="font-mono font-bold text-amber-400">&#8377;33,60,000</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 text-sm sm:text-base font-black">
                      <span className="text-emerald-400 uppercase tracking-wide">Total Demand Crystallized in Section 21 Notice</span>
                      <span className="font-mono text-emerald-400 text-base sm:text-xl">&#8377;3,76,10,000</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Prolongation Damages: Applying Hudson, Emden and Eichleay Formulas
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    In large-scale infrastructure projects prolonged due to employer defaults, claims extend far beyond the unpaid contract balance. Where the original contract duration of 18 months stretched to 32 months due to delayed right-of-way (RoW) or structural drawing revisions, the contractor incurred continuous site overheads, head office administrative expenses, and equipment idling costs.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Indian arbitral tribunals and High Courts routinely apply established formulas—primarily the <strong>Hudson Formula</strong>, <strong>Emden Formula</strong>, and <strong>Eichleay Formula</strong>—to quantify off-site overheads and lost profit opportunities during the delay period. By preserving rights via synchronous Section 55 notices during every Extension of Time (EOT) application, contractors ensure that prolongation compensation remains fully recoverable in Section 21 arbitration.
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  By transforming an uncertified, contested &#8377;2.40 Cr invoice into a comprehensive &#8377;3.76 Cr statutory demand—backed by Kailash Nath LD invalidation, post-DLP retention rights, extra-item proofs, and accrued commercial interest—the contractor establishes dominant settlement leverage before institutional arbitration or Commercial Court litigation.
                </p>
              </section>

              {/* Section 8: Complete IND-07 Spoke Directory */}
              <section
                id="heading-ind07-directory"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Industry Sub-Routes &bull; 11 Dedicated Spokes
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    IND-07 Directory: All 11 Construction Spokes, Tools &amp; Packs
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigate the complete legal infrastructure built specifically for civil contractors, EPC project directors, and MEP subcontractors across all 4 operational tracks:
                </p>

                <div className="space-y-8">
                  {SPOKE_GROUPS.map((group) => (
                    <div key={group.groupTitle} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${group.badgeClass}`}>
                          Track
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {group.groupTitle}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {group.items.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/50 hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                                  {spoke.id} &bull; {spoke.archetype}
                                </span>
                                <span className="text-[10px] font-semibold text-[#DC2626] truncate max-w-[140px]">
                                  {spoke.statute}
                                </span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug mb-2">
                                {spoke.title}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                                {spoke.summary}
                              </p>
                            </div>
                            <span className="text-xs font-bold text-[#DC2626] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 self-start">
                              Open Guide &rarr;
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Live Seed Cross-Links */}
              <section
                id="heading-live-seed-guides"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Codebase Integration &bull; Cross-Links
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Live Contractor, Subcontractor &amp; Govt Notice Guides
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Explore established core playbooks across the LegalRecovery.in network addressing general contractor payments, government notice mandates, and subcontractor recovery rights:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all shadow-xs space-y-2 block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                      Subcontractor Playbook
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      Subcontractor Payment Recovery India
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Statutory steps for Tier-2 and Tier-3 civil, electrical, plumbing, and structural subcontractors tackling prime contractor withholding.
                    </p>
                  </Link>

                  <Link
                    href="/recovery/contractor-payment"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all shadow-xs space-y-2 block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                      Core Contractor Desk
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      Contractor Payment Legal Notice &amp; Recovery
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Standard demand formats and recovery pathways for independent contractors, building contractors, and commercial suppliers.
                    </p>
                  </Link>

                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all shadow-xs space-y-2 block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                      Government Statutory Notice
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      Section 80 CPC Notice to Government
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mandatory 60-day notice requirements before initiating recovery proceedings against Central/State departments, CPWD, PWD, and municipal bodies.
                    </p>
                  </Link>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    FAQs: Construction, EPC &amp; MEP Contractor Debt Recovery
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={faq.question}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-white open:bg-slate-50/50 transition-colors"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-3 text-slate-900 font-bold text-sm sm:text-base select-none">
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#DC2626]">
                            Q{idx + 1}.
                          </span>
                          <span>{faq.question}</span>
                        </span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3.5 pt-3.5 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Sources & Government Portals */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Statutory Foundations &bull; Primary Sources
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Authorities, Acts &amp; Official Construction Portals
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All legal notices, arbitration petitions, and enforcement strategies formulated by LegalRecovery.in comply strictly with primary legislation published on the official India Code repository and judgments of the Supreme Court of India:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((src) => (
                    <li key={src.title} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[#DC2626] hover:underline font-medium"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                  <p>
                    <strong>Editorial &amp; Review Attribution:</strong> Reviewed by Advocate Anuj Anand Malik, Founder &amp; Managing Partner, AMA Legal Solutions. Content formulated strictly from institutional creditor perspectives for EPC directors, civil contractors, and infrastructure promoters across India.
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
