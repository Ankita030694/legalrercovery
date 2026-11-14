import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HomeHealthcareTableOfContents from "./HomeHealthcareTableOfContents";
import HomeHealthcareScenarioTabs from "./HomeHealthcareScenarioTabs";
import HomeHealthcareCTA from "./HomeHealthcareCTA";

export const revalidate = 86400;

const PAGE_URL = "/home-healthcare-icu-at-home-eldercare-unpaid-billing-recovery";
const EXACT_H1 =
  "Debt & Asset Recovery for Home-Healthcare, Home-ICU, Assisted Living & Nursing Agencies in India";
const META_TITLE = "Home Healthcare & ICU Eldercare Unpaid Bill Recovery";
const META_DESCRIPTION =
  "Recover unpaid 24x7 home-ICU nursing bills, NRI-sponsored eldercare arrears, unreturned bedside medical monitors, and nurse-poaching penalties ethically.";

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
        alt: formatAltText("Home Healthcare ICU at Home and Eldercare Unpaid Billing Recovery"),
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
    remedy: "Breach of SLA & Liquidated Damages Demand",
    statute: "Indian Contract Act, 1872 (Section 73 & Section 74)",
    timing: "Immediate upon 7-day default of shift billing invoice or monthly retainer",
    mechanism: "Advocate notice enforcing master caregiver SLA, shift logs & attendant indemnity undertakings",
    relief: "Recovery of unpaid caregiver shifts, doctor tele-rounds, plus contractually stipulated liquidated damages",
    suitability: "Direct household defaults, non-payment of nursing shift rosters, and eldercare companion contracts",
    tone: "emerald",
  },
  {
    remedy: "Criminal Breach of Trust (Unreturned Equipment)",
    statute: "Bharatiya Nyaya Sanhita, 2023 (Section 316 & Section 318)",
    timing: "Within 48 hours of refused equipment return or post-demise detention",
    mechanism: "Police complaint / CJM application for wrongful conversion of bailed medical life-support assets",
    relief: "Immediate police-assisted asset recovery, search warrant issuance, and criminal charges carrying up to 5 years imprisonment",
    suitability: "Wrongful retention of ventilators, BiPAP machines, oxygen concentrators, and motorized ICU beds",
    tone: "emerald",
  },
  {
    remedy: "Cross-Border NRI Legal Notice & Electronic Summons",
    statute: "CPC Order V Rule 9 & Rule 25 / Hague Service Convention",
    timing: "15-day statutory cure window following overseas wire defaults",
    mechanism: "Certified service via WhatsApp Business API, registered email, and international courier to foreign domicile",
    relief: "Freezes debtor defenses, creates BSA s.63 electronic evidence trail, and enables domestic execution plaints",
    suitability: "Overseas sons/daughters sponsoring parents in India then ghosting billing calls from the US, UK, Canada, or UAE",
    tone: "slate",
  },
  {
    remedy: "Senior Citizens Act Maintenance Interplay",
    statute: "Maintenance & Welfare of Parents & Senior Citizens Act, 2007 (ss. 4, 5 & 23)",
    timing: "Simultaneous with civil demand when adult children abandon elderly parents",
    mechanism: "Informational memorandum before the Maintenance Tribunal / Sub-Divisional Magistrate (SDM)",
    relief: "Tribunal order directing children to pay monthly maintenance directly to the healthcare facility or attaching child income",
    suitability: "Assisted living homes and palliative care facilities where family deposits elder and ceases contact",
    tone: "amber",
  },
  {
    remedy: "Nurse Anti-Poaching Non-Solicitation Enforcement",
    statute: "Indian Contract Act, 1872 (Sections 27, 73 & 74)",
    timing: "Within 30 days of discovering off-the-books direct hiring of agency staff",
    mechanism: "Cease-and-desist cum commercial damages plaint for breach of client non-solicitation covenant",
    relief: "Pre-estimated placement liquidated damages (3–6 months fee) plus professional complaint to State Nursing Council",
    suitability: "Clients hiring critical care nurses or GDA attendants privately behind the agency's back",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "Can an overseas NRI child be sued in India for unpaid home-ICU or eldercare bills?",
    answer:
      "Yes. Under Section 20 of the Code of Civil Procedure, 1908 (CPC), an Indian civil court possesses territorial jurisdiction because the healthcare contract was executed, the patient was treated, and the payment breach occurred within India. Furthermore, under Order V Rule 9 and Rule 25 CPC, along with the Hague Service Convention, legal notices and court summons can be served directly upon the NRI sponsor's overseas residential address or verified electronic accounts (email and WhatsApp) backed by a Section 63 BSA electronic certificate. Overseas assets, remittances to Indian NRE/NRO accounts, and ancestral property situated in India remain attachable under Order 38 Rule 5 and Order 21 CPC.",
  },
  {
    question: "What criminal and civil steps can an agency take if a family refuses to return a rented ventilator or BiPAP?",
    answer:
      "When a family or landlord refuses to return rented life-support equipment after care termination or patient demise, the retention is not merely a civil breach—it constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS, legacy IPC Section 405/406) and Cheating under Section 318 BNS. The agency should: (1) Issue an immediate 48-Hour Biomedical Equipment Repossession Demand citing serial numbers, hire challans, and running daily demurrage (₹2,500–₹5,000/day); (2) File an urgent application before the jurisdictional Chief Judicial Magistrate (CJM) / Police Station under Section 175 BNSS; and (3) File a civil application under Order XL Rule 1 CPC for an urgent Court Receiver to take inventory and possession of the machinery.",
  },
  {
    question: "Are non-solicitation / anti-poaching clauses in home healthcare contracts enforceable against families?",
    answer:
      "Yes. While employee non-compete agreements are strictly restricted under Section 27 of the Indian Contract Act, 1872, client-facing non-solicitation covenants are recognized by Indian courts as lawful commercial protections. When an agency invests in screening, training, police verification, and deploying ICU nurses or attendants, a contractual clause barring the client family from directly hiring the deployed staff for 12 months is legally enforceable. In the event of a breach, the agency can claim liquidated damages under Section 74 of the Contract Act (typically equivalent to 3 to 6 months of billing value or recruitment replacement costs).",
  },
  {
    question: "Can an assisted living home or rehab center discharge an elderly patient if the family stops paying monthly fees?",
    answer:
      "No, home healthcare agencies and assisted living centers cannot physically abandon a vulnerable or medically frail patient on the roadside, as this triggers criminal liability under Section 93 of the Bharatiya Nyaya Sanhita, 2023 (Exposure and abandonment of child or vulnerable person) and violates the Senior Citizens Act, 2007. The ethical and lawful recovery protocol requires the center to: (1) Serve an urgent 7-day administrative notice on all legal heirs; (2) Notify the local Senior Citizens Maintenance Tribunal (chaired by the Sub-Divisional Magistrate) of institutional abandonment; and (3) Institute an Order XXXVII summary suit or civil recovery plaint against the nominated sponsor and guarantors.",
  },
  {
    question: "What electronic evidence is required to prove home nursing shifts under Section 63 of Bharatiya Sakshya Adhiniyam, 2023?",
    answer:
      "To obtain a fast-track summary decree or commercial recovery order, the agency must furnish electronic evidence certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). Key documents include: (1) Digitally countersigned Master Service Agreement (MSA) with verified IP/OTP logs; (2) Shift handover charts and vital-sign monitoring logs signed by deployed nurses; (3) GPS geo-stamped check-in/check-out logs from the agency's caregiver mobile application; (4) WhatsApp message threads acknowledging care delivery and billing statements; and (5) Itemized GST e-invoices with valid Invoice Reference Numbers (IRN).",
  },
  {
    question: "Can an MSME-registered home healthcare startup claim compound interest from defaulting families?",
    answer:
      "The statutory compound interest provisions of Sections 15 and 16 of the MSMED Act, 2006 (three times the RBI Bank Rate) apply primarily to B2B commercial buyers and corporate employers. However, when home healthcare agencies provide services to individual families, they can lawfully enforce contractually stipulated delayed payment interest (typically 18%–24% p.a.) under Section 73 of the Indian Contract Act, 1872, or seek pre-litigation and post-decree interest under Section 3 and Section 4 of the Interest Act, 1978 and Section 34 CPC.",
  },
  {
    question: "How does the Senior Citizens Act assist agencies when adult children refuse to maintain parents?",
    answer:
      "Under Section 4 of the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, adult children and legal heirs in possession of or entitled to inherit the senior citizen's property are legally bound to provide food, clothing, residence, and medical attendance. When children contract a healthcare agency and subsequently default, the agency can assist the elderly parent (or submit an informational brief to the Maintenance Tribunal under Section 5) to issue maintenance orders against the children's bank accounts or monthly earnings, ensuring ongoing institutional care fees are cleared directly by statutory order.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 (Section 73 & Section 74 — Breach & Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Section 316 — Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Maintenance and Welfare of Parents and Senior Citizens Act, 2007 (Act No. 56 of 2007)",
    url: "https://www.indiacode.nic.in/handle/123456789/2026",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order V Rule 25 — Service where Defendant Resides Out of India)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Commercial Courts Act, 2015 (Act No. 4 of 2016 — Section 2(1)(c) Commercial Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Mental Healthcare Act, 2017 (Act No. 10 of 2017 — Rights of Persons with Mental Illness)",
    url: "https://www.indiacode.nic.in/handle/123456789/2253",
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
  about: {
    "@type": "Thing",
    name: "Home Healthcare, Home-ICU & Eldercare Unpaid Billing Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Home Healthcare & Nursing Agencies Recover Unpaid Shift Bills and Bedside ICU Equipment",
  description:
    "A 5-stage legal escalation protocol for home-healthcare operators, nursing bureaus, and assisted living facilities to recover aged shift arrears, retrieve unreturned ventilators, and hold overseas NRI sponsors accountable.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Consolidate Clinical Shift Logs & Equipment Bailment Records",
      text: "Gather digitally countersigned master service agreements, nurse bedside vital registers, GPS check-in logs, and equipment delivery challans with serial numbers. Segregate admitted nursing shift dues from contested medical consumables.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Issue 48-Hour Equipment Demurrage & Repossession Demand",
      text: "For unreturned ICU machinery (ventilators, BiPAPs, oxygen concentrators), dispatch an urgent formal repossession notice establishing running commercial rental charges and warning of Section 316 BNS Criminal Breach of Trust.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch 15-Day Advocate Demand Notice via Multi-Channel Delivery",
      text: "Serve a formal advocate legal notice on domestic family guarantors and overseas NRI sponsors via WhatsApp Business API, registered email, and international tracked courier, invoking Contract Act s.73 and Senior Citizens Act s.4.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Initiate Criminal Complaint under BNS s.316 or Tribunal Intervention",
      text: "Where medical machinery is willfully withheld or senior citizens are abandoned in assisted care, file a police complaint for criminal breach of trust under BNS s.316 and notify the Senior Citizens Maintenance Tribunal.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File Order XXXVII Summary Suit or Receiver Application under CPC",
      text: "Institute fast-track civil recovery under Order XXXVII CPC for admitted caregiver shift invoices or apply under Order XL Rule 1 CPC for an expedited court receiver to repossess critical medical equipment.",
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
      name: "Hospitals & Healthcare Recovery",
      item: `${SITE_URL}/industries/hospitals-doctors-healthcare-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Home Healthcare & Eldercare Dues Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function HomeHealthcareRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Schema Injection */}
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

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>IND-03 Healthcare Spoke &bull; Home-ICU &amp; Nursing Bureau Debt Recovery</span>
          </div>

          {/* Single H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Statutory Answer &bull; §6.3 Healthcare Recovery Spoke
            </span>
            Home-healthcare startups, nursing bureaus, and assisted living centers operating across India face chronic defaults when overseas NRI children ghost shift invoices, families retain ₹3.5 Lakh ventilators post-demise, or households poach deployed ICU nurses. Under{" "}
            <Link
              href="/industries/hospitals-doctors-healthcare-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline underline-offset-2"
            >
              Hospitals &amp; Healthcare Debt Recovery
            </Link>{" "}
            rails, creditors enforce Contract Act s.73, cross-border electronic notice service under CPC Order V Rule 25, BNS s.316 Criminal Breach of Trust for unreturned gear, and client non-solicitation liquidated damages ethically without jeopardizing vulnerable patient care.
          </div>

          {/* Hero Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                Typical Shift Arrears
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-100">
                &#8377;1.5L &ndash; &#8377;12L
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">
                24x7 ICU &amp; Palliative shifts
              </span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                Equipment Recovery
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400">
                BNS s.316
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">
                Up to 5 yrs prison for breach
              </span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                Cross-Border Notice
              </span>
              <span className="text-xl sm:text-2xl font-black text-amber-400">
                Order V CPC
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">
                Hague &amp; Electronic NRI service
              </span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                Nurse Poaching
              </span>
              <span className="text-xl sm:text-2xl font-black text-red-400">
                s.74 Damages
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">
                Liquidated placement penalty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Hospitals & Healthcare Recovery",
                href: "/industries/hospitals-doctors-healthcare-recovery",
              },
              {
                label: "Home Healthcare & Eldercare Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Client Sticky Sidebar TOC */}
          <HomeHealthcareTableOfContents />

          {/* Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>The Home-Healthcare Financial Crisis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Operational Reality: Why Home-ICU, Eldercare &amp; Nursing Agencies Face 35% Bad-Debt Exposure
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  India&apos;s home-healthcare, home-ICU, and specialized assisted living sector—anchored by institutional brands like Portea, HealthCare atHOME, Apollo HomeCare, alongside more than 10,000 local nursing bureaus, palliative centers, and de-addiction homes—operates on the razor&apos;s edge of clinical complexity and credit risk. Unlike hospital inpatient admissions where security deposits and front-desk billing counters regulate care, home healthcare is delivered inside private residential residences where institutional control is inherently dispersed.
                </p>
                <p>
                  A typical critical-care home-ICU setup entails deploying round-the-clock trained GNM/BSc nurses (₹3,000–₹5,000 per 12-hour shift), dedicated General Duty Assistants (GDAs), intensive care physician tele-monitoring, and deploying ₹5,00,000 to ₹10,00,000 worth of biomedical hardware—including high-end mechanical turbine ventilators, BiPAP/CPAP units, 10-litre oxygen concentrators, syringe infusion pumps, suction apparatus, and motorized 5-function ICU beds.
                </p>
                <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 my-4 space-y-2">
                  <p className="font-extrabold text-sm text-red-400 uppercase tracking-wider">
                    The 3 Chronic Bottlenecks Crippling Home-Healthcare CFOs:
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc pl-5">
                    <li>
                      <strong className="text-white">Overseas NRI Sponsor Default:</strong> Adult children living in North America, Europe, or the Gulf commission high-end 24x7 eldercare or palliative ICU care for aging parents in India. After 2–3 months of punctual payment, sponsors cite international banking friction, contest daily consumables, and sever communication, leaving agencies with mounting arrears while eldercare ethics prohibit sudden bedside withdrawal.
                    </li>
                    <li>
                      <strong className="text-white">Withholding Life-Support Equipment:</strong> Following patient recovery or unfortunate demise, families refuse physical entry to biomedical retrieval teams, wrongfully converting ₹3.5 Lakh ventilators and BiPAP units into leverage for disputed invoices or simply locking them in private premises.
                    </li>
                    <li>
                      <strong className="text-white">Backdoor Nurse Poaching:</strong> Households bypass the agency&apos;s overhead and commercial margin by privately hiring the deployed ICU nurse or attendant off-the-books for cash-in-hand, directly breaching contractual non-solicitation covenants and causing substantial revenue and placement loss.
                    </li>
                  </ul>
                </div>
                <p>
                  Navigating this delicate matrix requires specialized institutional recovery rails that respect medical ethics and Article 21 human dignity while deploying surgical statutory remedies: invoking Section 73 of the Indian Contract Act for liquidated shift arrears, executing Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS) for criminal breach of trust regarding unreturned equipment, and serving cross-border legal notices under CPC Order V Rule 25 on overseas NRI guarantors.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                5-Stage Legal Escalation Protocol for Home Healthcare &amp; Assisted Living Defaults
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                A structured, legally vetted decision path for home healthcare finance teams, nursing bureau operators, and palliative center directors to systematically transition from informal bedside reminders to high-impact statutory notices and court asset retrieval.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-hidden bg-slate-900 rounded-xl p-6 border border-slate-800 mb-6 text-white">
                <svg
                  viewBox="0 0 800 380"
                  className="w-full h-auto"
                  width={800}
                  height={380}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="85" y="55" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">STAGE 1</text>
                  <text x="85" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Shift Audit &amp;</text>
                  <text x="85" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Asset Dossier</text>
                  <text x="85" y="108" textAnchor="middle" fill="#94A3B8" fontSize="9">Day 1–7 Post-Default</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="150" y1="75" x2="175" y2="75" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="175,75 167,70 167,80" fill="#94A3B8" />

                  {/* Step 2 */}
                  <rect x="180" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="245" y="55" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">STAGE 2</text>
                  <text x="245" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">48-Hr Equipment</text>
                  <text x="245" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Demurrage Demand</text>
                  <text x="245" y="108" textAnchor="middle" fill="#94A3B8" fontSize="9">Ventilator / BiPAP</text>

                  {/* Arrow 2 -> 3 */}
                  <line x1="310" y1="75" x2="335" y2="75" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="335,75 327,70 327,80" fill="#94A3B8" />

                  {/* Step 3 */}
                  <rect x="340" y="30" width="135" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="407" y="55" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">STAGE 3</text>
                  <text x="407" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Advocate Legal</text>
                  <text x="407" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Notice Dispatch</text>
                  <text x="407" y="108" textAnchor="middle" fill="#94A3B8" fontSize="9">Speed Post + WhatsApp</text>

                  {/* Arrow 3 -> 4 */}
                  <line x1="475" y1="75" x2="500" y2="75" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="500,75 492,70 492,80" fill="#94A3B8" />

                  {/* Step 4 */}
                  <rect x="505" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="570" y="55" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">STAGE 4</text>
                  <text x="570" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">BNS s.316 &amp;</text>
                  <text x="570" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Tribunal Action</text>
                  <text x="570" y="108" textAnchor="middle" fill="#94A3B8" fontSize="9">Police &amp; SDM Notice</text>

                  {/* Arrow 4 -> 5 */}
                  <line x1="635" y1="75" x2="660" y2="75" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="660,75 652,70 652,80" fill="#94A3B8" />

                  {/* Step 5 */}
                  <rect x="665" y="30" width="115" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="722" y="55" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">STAGE 5</text>
                  <text x="722" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Order 37 Plaint</text>
                  <text x="722" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">&amp; Court Receiver</text>
                  <text x="722" y="108" textAnchor="middle" fill="#94A3B8" fontSize="9">Summary Decree</text>

                  {/* Decision Branch Downward */}
                  <path d="M 407 120 L 407 190" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
                  <polygon points="407,195 402,185 412,185" fill="#DC2626" />

                  {/* NRI Branch Box */}
                  <rect x="250" y="200" width="315" height="130" rx="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                  <text x="407" y="225" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold">OVERSEAS NRI SPONSOR PARALLEL TRACK</text>
                  <text x="407" y="248" textAnchor="middle" fill="#FFFFFF" fontSize="11">CPC Order V Rule 25 + Hague Service Convention</text>
                  <text x="407" y="268" textAnchor="middle" fill="#CBD5E1" fontSize="10">Certified digital delivery via WhatsApp API + Registered Email</text>
                  <text x="407" y="288" textAnchor="middle" fill="#CBD5E1" fontSize="10">BSA 2023 s.63 electronic certificate filed with jurisdictional court</text>
                  <text x="407" y="310" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">Attach domestic NRE/NRO accounts &amp; ancestral real estate</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 1 &bull; Days 1–7 Post-Default
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Clinical Shift Audit &amp; Equipment Bailment Dossier
                  </p>
                  <p className="text-xs text-slate-300">
                    Compile caregiver shift handover charts, biometric time-logs, and signed equipment delivery challans with serial numbers.
                  </p>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 2 &bull; Days 8–10
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    48-Hour Equipment Demurrage &amp; Repossession Notice
                  </p>
                  <p className="text-xs text-slate-300">
                    Notify family that continued retention of ventilator/BiPAP incurs daily commercial hire charges (₹2,500–₹5,000/day) and constitutes criminal conversion.
                  </p>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 3 &bull; Days 11–25
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Advocate Legal Demand Notice (Domestic + Overseas NRI)
                  </p>
                  <p className="text-xs text-slate-300">
                    Serve high-impact notice via Speed Post RPAD, WhatsApp Business API, and international tracked courier under CPC Order V Rule 25.
                  </p>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 4 &bull; Days 26–40
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    BNS s.316 Criminal Action &amp; Senior Citizens Tribunal
                  </p>
                  <p className="text-xs text-slate-300">
                    Lodge CJM application for criminal breach of trust regarding unreturned equipment, and report family abandonment to the Maintenance Tribunal.
                  </p>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Stage 5 &bull; Judicial Relief
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Order XXXVII CPC Summary Suit &amp; Court Receiver
                  </p>
                  <p className="text-xs text-slate-300">
                    File fast-track summary suit for liquidated nursing shift debt and obtain urgent Court Receiver orders under Order XL CPC to seize detained gear.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Zero Patient Abandonment Compliance:</strong> All legal escalation tracks are structured to proceed against legal guarantors, adult sponsors, and equipment bailees without creating an abrupt bedside clinical abandonment that could trigger adverse regulatory action under state clinical establishment acts.
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Statutory Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Statutory Matrix: Contract Act s.73, BNS s.316 &amp; Electronic Service on Overseas Sponsors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Comparative analysis of statutory remedies available to home-healthcare startups, nursing bureaus, and assisted living centers under Indian commercial and criminal jurisprudence.
              </p>

              <div className="overflow-x-auto -mx-5 sm:mx-0">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-3.5 font-bold rounded-tl-xl">Remedy &amp; Mechanism</th>
                      <th className="py-3 px-3.5 font-bold">Governing Statute</th>
                      <th className="py-3 px-3.5 font-bold">Statutory Window</th>
                      <th className="py-3 px-3.5 font-bold">Relief &amp; Leverage</th>
                      <th className="py-3 px-3.5 font-bold rounded-tr-xl">Target Persona / Bottleneck</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 border-x border-b border-slate-200">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-extrabold text-slate-900">
                          {row.remedy}
                        </td>
                        <td className="py-3 px-3.5 text-slate-700 font-medium">
                          {row.statute}
                        </td>
                        <td className="py-3 px-3.5 text-slate-600">
                          {row.timing}
                        </td>
                        <td className="py-3 px-3.5 text-slate-700">
                          {row.relief}
                        </td>
                        <td className="py-3 px-3.5">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              row.tone === "emerald"
                                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                : row.tone === "amber"
                                ? "bg-amber-50 text-amber-800 border border-amber-200"
                                : "bg-slate-100 text-slate-800 border border-slate-300"
                            }`}
                          >
                            {row.suitability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Commercial Failure Modes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Resolving 4 Chronic Failure Modes: NRI Ghosting, Equipment Seizure &amp; Nurse Poaching
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Explore dedicated legal and operational playbooks designed specifically for the unique commercial pitfalls encountered by home-healthcare providers across Indian metropolitan hubs.
              </p>

              <HomeHealthcareScenarioTabs />
            </section>

            {/* Section 5: Equipment Recovery Protocol */}
            <section
              id="heading-equipment-recovery"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Biomedical Asset Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Asset Recovery Protocol: Recovering Unreturned Ventilators, BiPAPs &amp; Bedside Monitors
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  High-end home-ICU deployments rely heavily on expensive, portable life-support machinery. When an elderly patient passes away or is transferred to a tertiary hospital, families frequently withhold access to the premises, effectively holding ₹3,50,000 to ₹7,00,000 worth of biomedical machinery hostage. Some families demand complete fee waivers before releasing equipment, while others simply lock the house and travel out of city.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <p className="font-extrabold text-sm text-red-400 mb-2">
                      Criminal Conversion &bull; Section 316 BNS
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Under Section 316 of Bharatiya Nyaya Sanhita, 2023, the entrustment of medical gear creates a statutory bailment. Retaining custody after the contractual tenure or using it as wrongful leverage satisfies all elements of Criminal Breach of Trust. It carries non-bailable exposure and up to 5 years imprisonment.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <p className="font-extrabold text-sm text-emerald-400 mb-2">
                      Civil Court Receiver &bull; Order XL Rule 1 CPC
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Courts recognize that medical ventilators and oxygen units are life-saving assets that deteriorate without calibration. Under Order XL Rule 1 CPC, an agency can secure an ex-parte interim order appointing a Court Receiver with police assistance to enter premises and retrieve the asset.
                    </p>
                  </div>
                </div>
                <p>
                  To maximize recovery speed, the agency&apos;s legal notice must calculate running daily equipment rental demurrage (e.g. ₹3,500 per day for mechanical ventilators, ₹1,200 per day for BiPAP units, ₹500 per day for hospital beds) from the date retrieval access was denied. This converts a static asset dispute into an escalating liquidated liability that motivates immediate return.
                </p>
                <p>
                  Compare this with sibling healthcare credit procedures such as{" "}
                  <Link
                    href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Hospital Patient Bill Recovery Without Detaining Patients
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/diagnostic-lab-pathology-collection-center-b2b-dues-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Diagnostic Lab Franchise B2B Dues Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Overseas NRI Service */}
            <section
              id="heading-nri-enforcement"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Cross-Border Recovery Rails</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Cross-Border Enforcement: Serving Statutory Notices on Defaulting NRI Children Abroad
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  One of the most persistent operational hurdles for Indian home-healthcare startups is the &ldquo;Overseas Default Shield.&rdquo; An NRI son or daughter signs the digital caregiver contract from California, London, or Dubai, remits the initial month&apos;s deposit via credit card or Stripe, and then defaults once the parent&apos;s clinical care needs escalate. Local branch managers assume cross-border legal recovery is impossible. This assumption is legally incorrect.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <p className="font-extrabold text-sm text-slate-900">
                    The 4-Step Cross-Border Legal Enforcement Mechanism:
                  </p>
                  <ol className="text-xs sm:text-sm text-slate-700 space-y-2 list-decimal pl-5">
                    <li>
                      <strong>Jurisdiction Grounding under CPC Section 20:</strong> Because the medical services were performed in India and payment was contractually payable to the Indian agency&apos;s domestic bank account, the cause of action arises entirely within Indian territorial jurisdiction.
                    </li>
                    <li>
                      <strong>Certified Electronic Service (WhatsApp API &amp; Email):</strong> Under Order V Rule 9 CPC and the Supreme Court&apos;s landmark directives on digital summons service, formal service of legal demand via registered email and blue-tick verified WhatsApp Business messages constitutes valid, court-recognized service when accompanied by a Section 63 BSA electronic certificate.
                    </li>
                    <li>
                      <strong>Hague Service Convention Tracking:</strong> Under Order V Rule 25 CPC, formal process can be forwarded through the Central Authority designated under the Hague Service Convention (e.g. US Department of Justice for American residents) or dispatched via tracked DHL/FedEx courier to the overseas employer and residential address.
                    </li>
                    <li>
                      <strong>Domestic Asset Attachment (CPC Order 38 Rule 5):</strong> Even if the debtor resides abroad, their domestic financial footprint in India—including Non-Resident External (NRE) accounts, Non-Resident Ordinary (NRO) fixed deposits, and inherited ancestral land or apartments—can be attached before judgment to satisfy the hospital or nursing bureau&apos;s decree.
                    </li>
                  </ol>
                </div>
                <p>
                  Furthermore, under Section 4 of the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, adult children with means who abandon senior citizen parents to third-party charity or unpaid institutional care commit a statutory civil offense. Mentioning this statutory liability alongside Section 73 Contract Act damages frequently induces immediate family settlement.
                </p>
                <p>
                  Review our standardized{" "}
                  <Link
                    href="/templates/promissory-note-format-india"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Promissory Note Format India
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Cheque Bounce Section 138 Timeline Guide
                  </Link>{" "}
                  to reinforce billing documentation at admission.
                </p>
              </div>
            </section>

            {/* Section 7: Worked Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Numerical Recovery Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Worked Recovery Ledger: &#8377;4.85 Lakh Home-ICU Shift Arrears &amp; Asset Conversion
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                A real-world commercial calculation illustrating how an advocate demand notice reconciles unpaid shift fees, medical consumable outlays, unreturned ventilator demurrage, and statutory interest.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-lg space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Matter Profile &bull; 90-Day Palliative Home-ICU Package
                  </span>
                  <p className="text-base sm:text-lg font-black text-white">
                    Client: Overseas NRI Family &bull; Patient: Post-Stroke Tracheostomy Care (Bengaluru)
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-400 text-[11px] uppercase tracking-wider">
                        <th className="pb-2">Claim Component</th>
                        <th className="pb-2">Operational Basis</th>
                        <th className="pb-2 text-right">Ledger Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      <tr>
                        <td className="py-2.5 font-semibold text-white">
                          Unpaid 24x7 Critical Care Nursing
                        </td>
                        <td className="py-2.5 text-slate-400">
                          60 shifts &times; &#8377;4,000/shift (GNM certified, biometric verified)
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-white">
                          &#8377;2,40,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-white">
                          GDA Attendant Roster Dues
                        </td>
                        <td className="py-2.5 text-slate-400">
                          60 shifts &times; &#8377;1,500/shift (bedside hygiene &amp; mobility)
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-white">
                          &#8377;90,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-white">
                          Physician Tele-Rounds &amp; Consumables
                        </td>
                        <td className="py-2.5 text-slate-400">
                          Daily intensivist reviews, tracheostomy tubes, suction catheters
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-white">
                          &#8377;45,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-amber-400">
                          Withheld Ventilator Demurrage
                        </td>
                        <td className="py-2.5 text-slate-400">
                          Philips Trilogy unit detained 30 days &times; &#8377;3,000/day
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-amber-400">
                          &#8377;90,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-slate-300">
                          Security Deposit Adjusted
                        </td>
                        <td className="py-2.5 text-slate-400">
                          Initial 1-month advance deposit credited against ledger
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-red-400">
                          - &#8377;50,000
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-emerald-400">
                          Pre-Litigation Interest (18% p.a.)
                        </td>
                        <td className="py-2.5 text-slate-400">
                          Interest Act, 1978 s.3 on overdue balance (90 days)
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-emerald-400">
                          &#8377;18,675
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-red-400">
                          Nurse Poaching Placement Penalty
                        </td>
                        <td className="py-2.5 text-slate-400">
                          Direct hire of agency GDA without 30-day notice (SLA clause 8)
                        </td>
                        <td className="py-2.5 text-right font-mono font-bold text-red-400">
                          &#8377;50,000
                        </td>
                      </tr>
                      <tr className="border-t-2 border-slate-700 bg-slate-800/80">
                        <td className="py-3 px-2 font-black text-white text-sm">
                          Total Crystallized Demand
                        </td>
                        <td className="py-3 text-xs text-slate-300">
                          Payable within 15 days of Advocate Demand Notice
                        </td>
                        <td className="py-3 px-2 text-right font-mono font-black text-base sm:text-lg text-emerald-400">
                          &#8377;4,83,675
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Litigation Risk Warning:</strong> If the debtor fails to remit within 15 days, the demand escalates to an Order XXXVII CPC summary suit claiming 100% of the liquidated sum, plus an immediate complaint under Section 316 BNS before the Magistrate for recovery of the ₹3.5 Lakh ventilator asset.
                </div>
              </div>
            </section>

            {/* Section 8: BSA 2023 Section 63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Litigation Admissibility</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                BSA 2023 Section 63 Digital Evidence &amp; Chain-of-Custody Checklist
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which superseded Section 65B of the Indian Evidence Act), electronic medical records and communications must be properly certified to obtain an ex-parte summary judgment or maintain a criminal breach of trust complaint.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <p className="font-extrabold text-sm text-slate-900">
                      Master Caregiver Service Agreement (MSA)
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Digitally countersigned contract featuring clear clauses: daily shift tariffs, overtime multipliers, equipment bailment covenants, client non-solicitation penalties, and clear nomination of the domestic or overseas adult sponsor as primary obligor.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <p className="font-extrabold text-sm text-slate-900">
                      Biometric &amp; Geo-Stamped Nurse Logs
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Daily check-in / check-out timestamps recorded through the agency&apos;s mobile attendance software, vital-chart monitoring registers countersigned by family attendants, and handover logs demonstrating continuous bedside clinical delivery.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <p className="font-extrabold text-sm text-slate-900">
                      Equipment Bailment &amp; Delivery Challans
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Original delivery challan recording machine serial numbers, hours run meter, calibration certificate, and signed acknowledgment of bailment terms stating ownership remains with the agency at all times.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <p className="font-extrabold text-sm text-slate-900">
                      WhatsApp &amp; Email Communications Audit
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    Exported chat transcripts from verified WhatsApp numbers demonstrating invoicing receipts, promises to pay, disputes raised post-facto, or refusal to grant access for equipment return, paired with a valid Section 63 BSA certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Deploy Legal Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Deploy Institutional Recovery: Test 1 Default Notice or Onboard Batch Receivables
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Whether you need to recover a single high-value ventilator and unpaid palliative care bill or onboard an entire ledger of aged eldercare receivables, LegalRecovery.in provides advocate-drafted, multi-channel legal notices tailored for healthcare institutions.
              </p>

              <HomeHealthcareCTA />
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Frequently Asked Questions: Home-Healthcare, Nursing Bureau &amp; Eldercare Dues
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors open:bg-white open:shadow-xs"
                  >
                    <summary className="flex items-center justify-between font-extrabold text-sm sm:text-base text-slate-900 cursor-pointer list-none gap-3">
                      <span>{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                        &darr;
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Sources & Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] mb-3">
                <span>Statutory Authority</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Statutory Authorities, Healthcare Regulations &amp; Landmark Precedents
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 mb-6">
                <p>
                  Every legal notice, repossession demand, and civil recovery plaint issued through LegalRecovery.in is anchored in authoritative statutory acts and landmark judgments from the Supreme Court of India and High Courts:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <strong>Indian Contract Act, 1872 (ss. 70, 73 &amp; 74):</strong> Entitlement to compensation for breach of contract and quantum meruit reimbursement for non-gratuitous clinical services rendered to patients.
                  </li>
                  <li>
                    <strong>Bharatiya Nyaya Sanhita, 2023 (s. 316 &amp; s. 318):</strong> Criminal breach of trust and cheating penalties applicable when rented life-support equipment or hospital beds are unlawfully retained by bailees.
                  </li>
                  <li>
                    <strong>Maintenance and Welfare of Parents and Senior Citizens Act, 2007 (ss. 4 &amp; 5):</strong> Statutory obligation of children and relatives to maintain elderly parents, enabling tribunal attachment of earnings to satisfy institutional care dues.
                  </li>
                  <li>
                    <strong>Code of Civil Procedure, 1908 (Order V Rule 25 &amp; Order XL Rule 1):</strong> Jurisdictional authority to serve summons on overseas non-residents and obtain urgent court receiver orders for biomedical equipment repossession.
                  </li>
                  <li>
                    <strong>Niranjan Shankar Golikari v. Century Spinning &amp; Mfg. Co. (AIR 1967 SC 1098):</strong> Supreme Court doctrine affirming the validity of commercial non-solicitation covenants protecting agency investments and trade goodwill.
                  </li>
                </ul>
              </div>

              {/* Primary External Source Links */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Verified Government Portals &amp; Bare Acts
                </p>
                <div className="flex flex-wrap gap-2">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200"
                    >
                      <span>{source.title}</span>
                      <span aria-hidden="true" className="text-[10px] text-slate-400">&nearr;</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Legal Reviewer Badge */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Content Reviewed &amp; Statutorily Vetted By
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                    {LEGAL_REVIEWER.name} &bull; {LEGAL_REVIEWER.role}
                  </p>
                </div>
                <Link
                  href="/about"
                  className="text-xs font-bold text-[#DC2626] hover:underline shrink-0"
                >
                  About Our Legal Panel &rarr;
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
