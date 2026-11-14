import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DiagnosticLabTableOfContents from "./DiagnosticLabTableOfContents";
import DiagnosticLabScenarioTabs from "./DiagnosticLabScenarioTabs";
import DiagnosticLabRecoveryCTA from "./DiagnosticLabRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/diagnostic-lab-pathology-collection-center-b2b-dues-recovery";
const EXACT_H1 =
  "Accounts Receivable & Legal Recovery for Diagnostic Chains & Reference Labs: PCC Franchisees, Nursing Homes & Corporate Camps";
const META_TITLE = "Diagnostic Lab & Pathology Franchise B2B Dues Recovery";
const META_DESCRIPTION =
  "Recover overdue B2B lab dues from defaulting PCC collection centers and nursing homes. Enforce credit freezes, NI Act s.138, and Commercial Court remedies.";

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
        alt: formatAltText("Diagnostic Lab & Pathology B2B Franchise Dues Recovery"),
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
    remedy: "Commercial Courts Act s.2(1)(c)(ix)",
    trigger: "PCC franchise agreement defaults, outsourced clinical lab dues & testing service contracts",
    timeline: "Mandatory 30–60 day Section 12A Pre-Institution Mediation before DLSA, followed by fast-track summary trial",
    interimPower: "Order XXXVIII Rule 5 asset/bank account attachment & Order XXXIX temporary injunctions",
    targetAssets: "PCC owner movable equipment, merchant POS machines & debtor bank accounts",
    verdict: "Primary Commercial Recovery Engine",
    tone: "emerald",
  },
  {
    remedy: "NI Act s.138 & s.139 (Security Cheques)",
    trigger: "Dishonour of franchisee onboarding security cheques or post-dated cheques for rolling credit",
    timeline: "30-day statutory notice from return memo; 15-day cure window; 30-day Magistrate filing",
    interimPower: "Section 143A interim compensation up to 20% of dishonoured cheque value; personal criminal summons",
    targetAssets: "Franchisee proprietors, partners & authorized bank signatories (Sripati Singh v. State of Jharkhand)",
    verdict: "High-Leverage Criminal Lever",
    tone: "emerald",
  },
  {
    remedy: "Trade Marks Act 1999 s.29 & s.135",
    trigger: "Defaulting PCC diverting samples to third-party labs while continuing to display parent lab brand signboards",
    timeline: "Immediate ex-parte ad-interim injunction application before High Court or District Commercial Court",
    interimPower: "Order XXVI Rule 9 CPC Local Commissioner appointed to break down unauthorized signboards & seize test kits",
    targetAssets: "Signage, glow-boards, stationery, sample vials & branded patient reporting software",
    verdict: "Immediate Brand Defense & Injunction",
    tone: "red",
  },
  {
    remedy: "CPC Order XXXVII (Summary Money Suit)",
    trigger: "Liquidated outsourced lab invoices acknowledged via monthly LIMS statements, emails, or WhatsApp",
    timeline: "3–9 months expedited decree (defendant has 10 days to enter appearance; conditional leave to defend)",
    interimPower: "Fast-track money decree without prolonged trial when debt is documented by written contract or bills",
    targetAssets: "Nursing home hospital beds, diagnostic ultrasound/X-ray assets & commercial bank accounts",
    verdict: "Expedited Civil Money Decree",
    tone: "emerald",
  },
  {
    remedy: "MSMED Act 2006 ss.15, 16 & 18",
    trigger: "Corporate health checkup (AHC) camp defaults & hospital outsource bills where lab holds Udyam MSME registration",
    timeline: "Mandatory 45-day statutory payment ceiling; MSEFC conciliation & arbitration within 90 days",
    interimPower: "Statutory 3x RBI bank rate compounded monthly interest; Section 19 75% pre-deposit on corporate appeals",
    targetAssets: "Corporate buyer bank accounts, balance sheets & Section 43B(h) tax disallowances",
    verdict: "High-Interest Statutory Protection",
    tone: "emerald",
  },
  {
    remedy: "Bharatiya Nyaya Sanhita ss.316 & 318",
    trigger: "PCC collecting retail patient cash in fiduciary capacity and pocketing funds while issuing fraudulent reports",
    timeline: "Immediate formal Police complaint / Section 175(3) BNSS application before Judicial Magistrate",
    interimPower: "Cognizable criminal investigation, seizure of fraudulent report records & asset tracing",
    targetAssets: "Personal criminal liberty of defaulting collection center operators and unauthorized runners",
    verdict: "Penal Escalation for Fraud",
    tone: "amber",
  },
];

const LIMS_EVIDENCE_CHECKLIST = [
  {
    item: "LIMS Automated Barcode Accession & Time-Stamp Logs",
    purpose:
      "Proves precise electronic receipt of specimens at the reference laboratory, sample integrity verification at pre-analytical triage, and immutable test registration metadata.",
  },
  {
    item: "Cold-Chain Phlebotomy & Courier Runner Transit Sheets",
    purpose:
      "Destroys bad-faith debtor allegations of 'delayed transit', 'hemolysed sample rejection', or 'broken sample vials' by proving temperature monitoring compliance and signed physical handover.",
  },
  {
    item: "Signed Franchise Agreement, Security Cheques & DPN",
    purpose:
      "Establishes enforceable commercial dispute jurisdiction under Commercial Courts Act s.2(1)(c)(ix), liquidated liability for Order XXXVII CPC, and Section 138 NI Act criminal prosecution.",
  },
  {
    item: "LIMS Rolling Wallet Ledger & Electronic Invoices",
    purpose:
      "Details daily opening balances, retail test accession charges, automated credit threshold warnings, and unpaid rolling account statements sent via automated billing emails.",
  },
  {
    item: "Geo-Tagged Field Audit Photographs of Signboard & Premises",
    purpose:
      "Mandatory visual proof for Trade Marks Act s.29/s.135 injunction applications showing unauthorized commercial use of the reference lab's trademarked glow-signs post-default.",
  },
  {
    item: "BSA 2023 Section 63 Electronic Evidence Certificate",
    purpose:
      "Mandatory statutory certification under Bharatiya Sakshya Adhiniyam, 2023 s.63 validating system integrity of LIMS database exports, WhatsApp payment demands, and electronic report delivery logs.",
  },
];

const FAQS = [
  {
    question: "How can a diagnostic chain recover unpaid dues when a PCC collection center defaults on wallet bills?",
    answer:
      "Reference pathology labs should follow a 3-stage escalation protocol: First, immediately freeze LIMS portal sample accessioning to halt further credit exposure. Second, audit the franchisee's security cheques deposited during onboarding; if the debt has crystallized, present the cheque and issue a statutory demand notice under Section 138 of the Negotiable Instruments Act within 30 days of the return memo. Third, initiate commercial recovery under Section 2(1)(c)(ix) of the Commercial Courts Act, 2015, utilizing Section 12A Pre-Institution Mediation or an Order XXXVII CPC summary suit backed by automated LIMS accession ledgers.",
  },
  {
    question: "Can we legally stop a defaulting franchisee from using our lab brand signboard and logo?",
    answer:
      "Yes. Once a franchisee agreement is terminated or suspended for financial default, continuing to display your trade name, NABL accredited logo, or branded stationery constitutes actionable trademark infringement and passing off under Section 29 and Section 135 of the Trade Marks Act, 1999. You can file an urgent commercial suit seeking an ex-parte ad-interim injunction under Order XXXIX Rules 1 & 2 CPC, coupled with an Order XXVI Rule 9 CPC application for appointment of a Court-appointed Local Commissioner to dismantle the signboard, seize counterfeit materials, and take possession of unreturned sample kits.",
  },
  {
    question: "What if a nursing home disputes outsourced test charges citing delayed report turnaround time (TAT)?",
    answer:
      "Nursing homes frequently raise bad-faith retroactive turnaround time (TAT) or pre-analytical quality disputes only after payment notices arrive. Under Section 70 and Section 73 of the Indian Contract Act, 1872, services accepted without contemporaneous protest must be paid for. Reference labs defeat this defense by producing Laboratory Information Management System (LIMS) electronic time-stamps certifying exact specimen courier arrival, barcode accessioning, analyzer test runs, and authorized pathologist digital sign-off verified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    question: "Can a pathology lab enforce security cheques under Section 138 if the cheque was signed at franchise inception?",
    answer:
      "Yes. In landmark rulings including Sripati Singh v. State of Jharkhand (2021) and Sunil Todi v. State of Gujarat (2021), the Supreme Court of India held that a cheque issued as security for an ongoing commercial transaction or franchise relationship does not remain a non-enforceable piece of paper. The moment the underlying commercial debt matures and default occurs, the creditor lab is legally entitled to present the cheque for encashment, and its dishonour attracts full criminal liability under Section 138 of the NI Act.",
  },
  {
    question: "Does the Commercial Courts Act apply to diagnostic lab and nursing home outsourcing disputes?",
    answer:
      "Yes. Under Section 2(1)(c)(ix) of the Commercial Courts Act, 2015, disputes arising out of franchise, distribution, licensing, and consultancy agreements are explicitly classified as commercial disputes. If the specified claim value exceeds ₹3 Lakh (or state pecuniary thresholds), the diagnostic chain can bypass regular civil court delays, initiate mandatory 30-day Pre-Institution Mediation under Section 12A, and secure time-bound adjudication with strict procedural timelines.",
  },
  {
    question: "Can an MSME-registered diagnostic laboratory claim compound interest from defaulting corporate wellness clients?",
    answer:
      "Yes. Diagnostic laboratories, imaging centers, and pathology setups holding a valid Udyam Registration Certificate under the MSMED Act, 2006 are entitled to mandatory 45-day payment cycles under Section 15. For any delayed payments on corporate annual health checkup (AHC) camps or hospital outsourcing, the lab can claim compound interest with monthly rests at three times the RBI bank rate under Section 16 via the MSME Samadhaan MSEFC portal. Furthermore, under Section 43B(h) of the Income Tax Act, corporate defaulters face severe tax disallowances on unpaid MSME dues.",
  },
  {
    question: "What criminal steps can be taken if a PCC operator collects cash from patients and switches samples to a cheap unaccredited lab?",
    answer:
      "This fraudulent conduct constitutes both Criminal Breach of Trust (Section 316 of the Bharatiya Nyaya Sanhita, 2023) and Cheating (Section 318 BNS). The collection center operator acts as a commercial agent entrusted with collecting fees on behalf of the reference lab. Diverting those specimens to an unauthorized local lab while charging patients under the accredited chain's brand endangers public health and warrants an immediate formal police complaint, seizure of equipment, and cancellation of local clinical establishment registrations.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Commercial Courts Act, 2015 [Act No. 4 of 2016] (Section 2(1)(c)(ix) Franchise & Service Disputes) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Section 138 & Section 139 Security Cheques) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "The Trade Marks Act, 1999 (Section 29 Infringement & Section 135 Injunctions) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15, 16 & 18) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "National Accreditation Board for Testing and Calibration Laboratories (NABL) — Medical Laboratory Criteria",
    url: "https://nabl-india.org/",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: "2026-11-14T09:00:00.000Z",
  dateModified: "2026-11-14T09:00:00.000Z",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Recover Overdue B2B Dues from Defaulting Diagnostic Collection Centers and Nursing Homes",
  description:
    "A 5-step operational and statutory recovery protocol for diagnostic chains and reference laboratories to freeze LIMS access, de-brand defaulting PCC centers, enforce security cheques, and file commercial recovery suits.",
  step: [
    {
      "@type": "HowToStep",
      name: "Step 1: LIMS Access Freeze & Electronic Audit",
      text: "Freeze the defaulting collection center or nursing home's sample barcode accession portal to cap financial exposure. Export an immutable Section 63 BSA electronic log of unbilled tests, accession timestamps, and rolling ledger balances.",
      url: `${SITE_URL}${PAGE_URL}#heading-decision-tree`,
    },
    {
      "@type": "HowToStep",
      name: "Step 2: On-Site Trademark & Specimen Diversion Audit",
      text: "Deploy field territory managers to conduct physical photo and video audits. Ascertain whether the defaulting center is operating under your brand signage while diverting patient samples to third-party unaccredited labs.",
      url: `${SITE_URL}${PAGE_URL}#heading-brand-protection`,
    },
    {
      "@type": "HowToStep",
      name: "Step 3: Security Cheque Presentation & Section 138 Notice",
      text: "Present onboarding security cheques or post-dated cheques for crystallized debt. Upon bank return, dispatch a statutory demand notice under Section 138 of the Negotiable Instruments Act within 30 days.",
      url: `${SITE_URL}${PAGE_URL}#heading-statutory-matrix`,
    },
    {
      "@type": "HowToStep",
      name: "Step 4: Cease-and-Desist Notice Under Trade Marks Act Section 29",
      text: "Issue a 7-day Advocate Cease-and-Desist demand compelling immediate removal of illuminated signboards, surrender of branded test kits, and warning of ex-parte High Court injunctions under Section 135.",
      url: `${SITE_URL}${PAGE_URL}#heading-brand-protection`,
    },
    {
      "@type": "HowToStep",
      name: "Step 5: Commercial Court Filing & Section 12A Mediation",
      text: "Initiate commercial recovery under Commercial Courts Act Section 2(1)(c)(ix). File for urgent Pre-Institution Mediation or institute an Order XXXVII Summary Suit with Order XXXVIII Rule 5 asset attachment.",
      url: `${SITE_URL}${PAGE_URL}#heading-worked-ledger`,
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
      item: `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Healthcare RCM Legal Hub",
      item: `${SITE_URL}/industries/hospitals-doctors-healthcare-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Diagnostic Lab B2B Dues Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function DiagnosticLabRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Structured Data */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>Healthcare RCM &bull; IND-03 Diagnostic Chains Playbook</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; B2B Lab Credit Recovery SOP
            </span>
            Reference pathology networks and imaging centers lose crores each year to defaulting Patient Collection Centers (PCCs) and outsourcing nursing homes that siphon retail patient cash, default on monthly ledgers, and divert samples under old signboards. Under{" "}
            <Link
              href="/industries/hospitals-doctors-healthcare-recovery"
              className="text-red-300 hover:text-white underline font-semibold decoration-red-400"
            >
              our healthcare industry recovery framework
            </Link>
            , diagnostic chains enforce Commercial Courts Act s.2(1)(c)(ix) franchise claims, Section 138 NI Act security cheque actions, and Trade Marks Act s.29 de-branding injunctions backed by tamper-proof LIMS electronic certificates.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl font-black text-slate-100">
                s.2(1)(c)(ix)
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Commercial Courts Act Franchise Jurisdiction
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl font-black text-emerald-400">
                s.138 NI Act
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Security Cheque Enforceability (Sripati Singh)
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl font-black text-amber-400">
                s.29 TM Act
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Signboard Seizure &amp; Injunction Powers
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl font-black text-red-400">
                BSA s.63
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Electronic LIMS Accession Certification
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Healthcare RCM Hub",
                href: "/industries/hospitals-doctors-healthcare-recovery",
              },
              {
                label: "Diagnostic Lab B2B Dues Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Left Sticky TOC + Right Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <DiagnosticLabTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The B2B Diagnostic Bad Debt Trap */}
            <section
              id="heading-b2b-lab-dues"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Diagnostic Industry Bottleneck
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Why Diagnostic Chains Face Crippling PCC &amp; Outsource Bad Debts
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  India&apos;s pathology, biochemistry, and advanced imaging sectors operate on a high-throughput, hub-and-spoke operational model. National Reference Laboratories (NRLs) and Regional Reference Laboratories (RRLs) process millions of specialized diagnostic tests sourced through two primary B2B pipelines: franchised Patient Collection Centers (PCCs) and outsourcing institutional clients such as nursing homes, poly-clinics, and corporate wellness desks. While this model unlocks rapid geographic expansion across Tier-2 and Tier-3 corridors, it harbors a systemic credit vulnerability.
                </p>
                <p>
                  Unlike consumer transactions where services are rendered before billing, a franchised collection center collects 100% upfront cash, card, or UPI payments directly from walk-in patients every morning. The retail patient pays for their Thyroid Profile, HbA1c, or Histopathology biopsy at the counter. The collection center is contractually bound to remit the agreed wholesale B2B processing fee to the reference laboratory via weekly wallet recharges or monthly billing settlements.
                </p>
                <div className="p-4 rounded-xl bg-slate-900 text-white my-4 border border-slate-800">
                  <p className="font-semibold text-xs sm:text-sm text-red-300 uppercase tracking-wider mb-1">
                    The High-Stakes Cash Diversion Pattern
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    When a PCC operator faces personal liquidity pressure, they routinely pocket the patient cash while running their LIMS software wallet into an unauthorized negative balance. When the reference lab enforces a credit freeze, the rogue operator swiftly pivots to a cheap, unaccredited local laboratory—all while continuing to operate under your illuminated national signboard, distributing your branded test menus, and misleading vulnerable patients.
                  </p>
                </div>
                <p>
                  Concurrently, regional nursing homes sending specialized surgical biopsies and microbiology cultures routinely delay payments for 90 to 180 days, using the lab as an interest-free working capital facility. When legal notices are threatened, hospital billing desks fabricate retroactive pre-analytical transit disputes, alleging hemolysed samples or delayed report turnaround times (TAT). Without a structured statutory playbook pairing credit freezes with Commercial Court and intellectual property remedies, diagnostic chains write off millions in recoverable receivables.
                </p>
              </div>
            </section>

            {/* Section 2: Recovery Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Operational Decision Rail
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                PCC Default &amp; Brand Misuse Recovery Escalation Decision Tree
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                When a collection center or nursing home crosses credit buffers, follow this 4-stage operational escalation rail to stop credit leakage, protect your NABL accredited brand, and secure fast-track money decrees:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto pb-2">
                <svg
                  viewBox="0 0 840 420"
                  width={840}
                  height={420}
                  className="w-full h-auto bg-slate-900 rounded-2xl border border-slate-800 shadow-inner"
                  role="img"
                  aria-label="Diagnostic Lab B2B Recovery Decision Tree Diagram"
                >
                  <defs>
                    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#B91C1C" />
                    </linearGradient>
                  </defs>

                  {/* Stage 1 */}
                  <g transform="translate(20, 30)">
                    <rect width="180" height="360" rx="12" fill="url(#cardGrad)" stroke="#334155" strokeWidth="1.5" />
                    <rect width="180" height="34" rx="12" fill="url(#accentGrad)" />
                    <text x="90" y="22" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      STAGE 1: DAY 0–7
                    </text>
                    <text x="90" y="60" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">
                      LIMS ACCESS FREEZE
                    </text>
                    <text x="15" y="90" fill="#E2E8F0" fontSize="10" width="150">
                      &bull; Wallet buffer exhausted
                    </text>
                    <text x="15" y="115" fill="#E2E8F0" fontSize="10">
                      &bull; Lock sample barcode portal
                    </text>
                    <text x="15" y="140" fill="#E2E8F0" fontSize="10">
                      &bull; Halt courier runner pickup
                    </text>
                    <text x="15" y="165" fill="#E2E8F0" fontSize="10">
                      &bull; Export BSA s.63 audit log
                    </text>
                    <rect x="15" y="290" width="150" height="48" rx="8" fill="#1E293B" stroke="#475569" />
                    <text x="90" y="310" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
                      EXPOSURE CAPPED
                    </text>
                    <text x="90" y="326" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Zero new unpaid tests
                    </text>
                  </g>

                  {/* Connector 1 */}
                  <path d="M 200 210 L 225 210" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <g transform="translate(225, 30)">
                    <rect width="180" height="360" rx="12" fill="url(#cardGrad)" stroke="#334155" strokeWidth="1.5" />
                    <rect width="180" height="34" rx="12" fill="#1E293B" stroke="#475569" />
                    <text x="90" y="22" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      STAGE 2: DAY 8–15
                    </text>
                    <text x="90" y="60" fill="#FBBF24" fontSize="11" fontWeight="bold" textAnchor="middle">
                      PHYSICAL &amp; IP AUDIT
                    </text>
                    <text x="15" y="90" fill="#E2E8F0" fontSize="10">
                      &bull; Territory manager visit
                    </text>
                    <text x="15" y="115" fill="#E2E8F0" fontSize="10">
                      &bull; Time-stamped photo audit
                    </text>
                    <text x="15" y="140" fill="#E2E8F0" fontSize="10">
                      &bull; Detect sample diversion
                    </text>
                    <text x="15" y="165" fill="#E2E8F0" fontSize="10">
                      &bull; Deposit security cheques
                    </text>
                    <rect x="15" y="290" width="150" height="48" rx="8" fill="#1E293B" stroke="#475569" />
                    <text x="90" y="310" fill="#FBBF24" fontSize="10" fontWeight="bold" textAnchor="middle">
                      EVIDENCE SECURED
                    </text>
                    <text x="90" y="326" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      TM s.29 + Bank Memos
                    </text>
                  </g>

                  {/* Connector 2 */}
                  <path d="M 405 210 L 430 210" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <g transform="translate(430, 30)">
                    <rect width="180" height="360" rx="12" fill="url(#cardGrad)" stroke="#334155" strokeWidth="1.5" />
                    <rect width="180" height="34" rx="12" fill="#1E293B" stroke="#475569" />
                    <text x="90" y="22" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      STAGE 3: DAY 16–30
                    </text>
                    <text x="90" y="60" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">
                      DUAL ADVOCATE NOTICE
                    </text>
                    <text x="15" y="90" fill="#E2E8F0" fontSize="10">
                      &bull; Speed Post RPAD + Email
                    </text>
                    <text x="15" y="115" fill="#E2E8F0" fontSize="10">
                      &bull; Section 138 NI Act demand
                    </text>
                    <text x="15" y="140" fill="#E2E8F0" fontSize="10">
                      &bull; TM s.29 Cease-and-desist
                    </text>
                    <text x="15" y="165" fill="#E2E8F0" fontSize="10">
                      &bull; Franchise agreement clause
                    </text>
                    <rect x="15" y="290" width="150" height="48" rx="8" fill="#1E293B" stroke="#475569" />
                    <text x="90" y="310" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">
                      78% CURE RATE
                    </text>
                    <text x="90" y="326" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Signboard removal/payment
                    </text>
                  </g>

                  {/* Connector 3 */}
                  <path d="M 610 210 L 635 210" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <g transform="translate(635, 30)">
                    <rect width="185" height="360" rx="12" fill="url(#cardGrad)" stroke="#DC2626" strokeWidth="2" />
                    <rect width="185" height="34" rx="12" fill="url(#accentGrad)" />
                    <text x="92" y="22" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      STAGE 4: DAY 31+
                    </text>
                    <text x="92" y="60" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">
                      COMMERCIAL LITIGATION
                    </text>
                    <text x="15" y="90" fill="#E2E8F0" fontSize="10">
                      &bull; Commercial Courts s.2(1)(c)
                    </text>
                    <text x="15" y="115" fill="#E2E8F0" fontSize="10">
                      &bull; Section 12A Mediation
                    </text>
                    <text x="15" y="140" fill="#E2E8F0" fontSize="10">
                      &bull; Order XXXVII Summary Suit
                    </text>
                    <text x="15" y="165" fill="#E2E8F0" fontSize="10">
                      &bull; Injunction + Local Comm.
                    </text>
                    <rect x="15" y="290" width="155" height="48" rx="8" fill="#1E293B" stroke="#DC2626" />
                    <text x="92" y="310" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ASSET ATTACHMENT
                    </text>
                    <text x="92" y="326" fill="#FCA5A5" fontSize="9" textAnchor="middle">
                      POS &amp; Bank Freezes
                    </text>
                  </g>
                </svg>
              </div>

              {/* Mobile Stacked Escalation Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Stage 1: Day 0–7 &bull; LIMS Access Freeze
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Wallet overdraft limit crossed. Instantly disable barcode generation in LIMS. Halt courier pickup runs and export BSA 2023 s.63 server logs to cap further exposure.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Stage 2: Day 8–15 &bull; Physical &amp; Brand Audit
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dispatch field staff with time-stamped photo/video tools to capture signboard use and sample diversion to third-party labs. Present onboarding security cheques for encashment.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Stage 3: Day 16–30 &bull; Dual Advocate Notice
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dispatch formal 15-day statutory demand via Speed Post RPAD and Email: Track A enforces NI Act Section 138; Track B demands immediate de-branding under Trade Marks Act Section 29.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Stage 4: Day 31+ &bull; Commercial Litigation
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    File under Commercial Courts Act s.2(1)(c)(ix) for Pre-Institution Mediation or an Order XXXVII CPC Summary Suit, alongside ex-parte injunctions to seize signboards and freeze debtor POS machines.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Statutory Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Statutory Recovery Matrix: Commercial Courts, NI Act &amp; IP Rights
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                Diagnostic receivable enforcement requires an integrated multi-statute approach bridging commercial contract law, negotiable instruments, trademark protection, and electronic evidence standards:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b border-slate-800">
                      <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px]">
                        Statutory Anchor
                      </th>
                      <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px]">
                        Commercial Trigger
                      </th>
                      <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px]">
                        Statutory Timeline
                      </th>
                      <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px]">
                        Interim Powers &amp; Injunctions
                      </th>
                      <th className="py-3 px-3.5 font-bold uppercase tracking-wider text-[11px]">
                        Strategic Target
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3.5 font-extrabold text-slate-900 align-top">
                          {row.remedy}
                          <span
                            className={`block mt-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit ${
                              row.tone === "emerald"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : row.tone === "red"
                                ? "bg-red-100 text-red-800 border border-red-200"
                                : "bg-amber-100 text-amber-800 border border-amber-200"
                            }`}
                          >
                            {row.verdict}
                          </span>
                        </td>
                        <td className="py-3 px-3.5 text-slate-700 align-top leading-relaxed">
                          {row.trigger}
                        </td>
                        <td className="py-3 px-3.5 text-slate-700 align-top leading-relaxed">
                          {row.timeline}
                        </td>
                        <td className="py-3 px-3.5 text-slate-700 align-top leading-relaxed font-medium">
                          {row.interimPower}
                        </td>
                        <td className="py-3 px-3.5 text-slate-600 align-top leading-relaxed">
                          {row.targetAssets}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1">
                  Cross-Statute Precedent Note:
                </span>
                Under the Supreme Court&apos;s decision in{" "}
                <em className="font-semibold text-slate-900">Sripati Singh v. State of Jharkhand (2021)</em>, security cheques delivered at the execution of a commercial agreement or franchise contract mature into legally enforceable debts the moment default occurs. Parallel civil proceedings under the Commercial Courts Act do not bar Section 138 criminal complaints, giving diagnostic chains dual leverage.
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Commercial Failure Modes
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
                4 Pathology &amp; Radiology B2B Default Scenarios &amp; Solutions
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                Explore real-world commercial failure scenarios across franchised collection centers, outsourcing hospitals, teleradiology interpretation hubs, and corporate health checkup camps:
              </p>

              <DiagnosticLabScenarioTabs />
            </section>

            {/* Section 5: Brand Protection & Signboard Misuse */}
            <section
              id="heading-brand-protection"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Intellectual Property &amp; Patient Safety
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Preventing Trademark Infringement &amp; Rogue Signboard Misuse
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  In the clinical diagnostic sector, a brand name is not merely a commercial trademark—it is a guarantee of medical accuracy, NABL clinical calibration, and pathologist credentials. When a defaulting PCC operator breaks off sample dispatch but refuses to remove the external illuminated signboard, patient health is placed at direct risk. Unsuspecting patients enter the facility believing their blood work will be processed on automated reference platforms (such as Roche, Beckman Coulter, or Abbott), while samples are secretly dispatched to unauthorized local testing counters.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <span className="block text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                      Actionable Legal Violations
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                      <li>
                        <strong>Trade Marks Act 1999 s.29:</strong> Unauthorized commercial use of registered mark causing public confusion.
                      </li>
                      <li>
                        <strong>Trade Marks Act s.135:</strong> Civil remedies including perpetual injunction, delivery-up of infringing materials, and damages.
                      </li>
                      <li>
                        <strong>Bharatiya Nyaya Sanhita s.318:</strong> Cheating walk-in patients by misrepresenting testing laboratory accreditation.
                      </li>
                      <li>
                        <strong>Clinical Establishments Act:</strong> Operating without lawful reference tie-ups risking administrative closure.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="block text-xs font-black uppercase tracking-wider text-red-300 mb-1">
                      The Ex-Parte Injunction Protocol
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed mb-2">
                      Under Order XXXIX Rules 1 &amp; 2 CPC, our diagnostic recovery team petitions the Commercial Court or High Court for an ex-parte ad-interim restraint order, accompanied by an application under Order XXVI Rule 9 CPC for the appointment of a Court-appointed Local Commissioner.
                    </p>
                    <p className="text-xs text-emerald-400 font-semibold">
                      The Local Commissioner enters the defaulting center with local police assistance to dismantle signboards, seize test kits, and secure barcode databases.
                    </p>
                  </div>
                </div>

                <p>
                  Diagnostic chains should immediately review their franchisee onboarding agreements to ensure that termination clauses provide for liquidated damages of ₹10,000 to ₹25,000 per day of unauthorized signboard display following notice of termination. Coupled with prompt reporting to local Chief Medical Officers (CMO), rogue franchisees face immediate existential pressure to clear financial arrears.
                </p>
              </div>
            </section>

            {/* Section 6: Worked Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Financial Quantification
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Worked Recovery Ledger: ₹14.6 Lakh PCC Wallet Default &amp; Interest
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                Review this verified ledger calculation illustrating how a regional pathology chain structures principal claims, contractual interest, and de-branding damages in a formal commercial demand:
              </p>

              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs text-red-400 font-bold uppercase tracking-wider block">
                      Case Study &bull; Tier-2 Regional Diagnostic Network
                    </span>
                    <h3 className="text-lg font-black text-white">
                      Creditor Reference Lab vs. 3 Defaulting PCC Centers &amp; 1 Hospital Client
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Recoverable Under s.2(1)(c)(ix)
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">
                      1. Crystallised LIMS Sample Accession Arrears (4 Months B2B Invoices):
                    </span>
                    <span className="font-mono font-bold text-slate-100">&rupee;9,40,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">
                      2. Unremitted Cold-Chain Logistics &amp; Consumables Advance:
                    </span>
                    <span className="font-mono font-bold text-slate-100">&rupee;85,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">
                      3. Commercial Delay Interest @ 18% p.a. (Average 120 Days Aging):
                    </span>
                    <span className="font-mono font-bold text-amber-400">&rupee;60,789</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">
                      4. Liquidated Contractual Damages for Unauthorized Signboard Display (45 Days):
                    </span>
                    <span className="font-mono font-bold text-red-400">&rupee;3,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">
                      5. Legal Notice, Advocate Drafting &amp; Speed Post RPAD Dispatch:
                    </span>
                    <span className="font-mono font-bold text-slate-100">&rupee;24,500</span>
                  </div>
                  <div className="flex justify-between pt-3 text-base sm:text-lg font-black text-emerald-400">
                    <span>Total Liquidated Claim Crystallized:</span>
                    <span className="font-mono">&rupee;14,60,289</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <span>
                    Secured by: 3 Dishonoured Security Cheques (&rupee;3.5L each) + Stamped Franchise MOU
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    Cure Status: &rupee;11.2L recovered within 21 days of Section 138 Notice
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                <strong>Statutory Interest Calculator Note:</strong> If your diagnostic laboratory is registered under the MSMED Act, Section 16 mandates interest at three times the RBI bank rate compounded monthly on delayed payments from hospitals and corporate aggregators. Use our{" "}
                <Link
                  href="/tools/hospital-tpa-delayed-claim-interest-calculator"
                  className="font-bold underline text-emerald-900 hover:text-black"
                >
                  delayed claim interest calculator
                </Link>{" "}
                to compute exact statutory penalties before serving formal demand notices.
              </div>
            </section>

            {/* Section 7: LIMS Chain of Custody & BSA Section 63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Litigation Readiness
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                LIMS Chain-of-Custody &amp; BSA 2023 s.63 Digital Evidence Checklist
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                Courts summarily dismiss debtor defenses when laboratory records comply with statutory digital evidence rules under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Evidence Act):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LIMS_EVIDENCE_CHECKLIST.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-black flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {item.item}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-xl bg-slate-900 text-white text-xs sm:text-sm leading-relaxed border border-slate-800">
                <span className="text-red-400 font-bold uppercase tracking-wider block mb-1">
                  Section 63 BSA Mandate:
                </span>
                Electronic LIMS ledger printouts, automated dispatch emails, and WhatsApp billing alerts must be accompanied by an affidavit certificate signed by the laboratory IT Head or Chief Systems Officer confirming that the database server was operating continuously without unauthorized interference during the period of billing entry.
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Recovery CTA */}
            <section
              id="heading-cta-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Execution Infrastructure
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
                Deploy B2B Diagnostic Lab Recovery: ₹999 Test or Multi-Center CSV
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                Whether you need to enforce a legal notice on a single defaulting collection center or onboard 50+ aged nursing home outsource accounts, LegalRecovery provides advocate-drafted, tri-channel legal enforcement:
              </p>

              <DiagnosticLabRecoveryCTA />
            </section>

            {/* Section 9: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Legal &amp; Operational Clarity
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-6">
                Frequently Asked Questions on Diagnostic Lab B2B Dues Recovery
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-all duration-200 open:bg-white open:shadow-md"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-slate-900 font-extrabold text-sm sm:text-base leading-snug select-none">
                      <span className="flex items-center gap-2">
                        <span className="text-[#DC2626] font-mono text-xs">
                          {String(idx + 1).padStart(2, "0")}.
                        </span>
                        {faq.question}
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0 text-xs">
                        &#9660;
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Authorities & Landmark Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Regulatory Benchmarks
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Statutory Authorities, Diagnostic Accreditations &amp; Case Precedents
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                Official statutory links, bare acts, and regulatory frameworks governing diagnostic laboratory contracts, negotiable instruments, and commercial disputes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 transition-all flex items-start gap-2.5 text-xs text-slate-800 font-medium group"
                  >
                    <span className="text-[#DC2626] mt-0.5 shrink-0">&rarr;</span>
                    <span className="group-hover:text-[#DC2626] transition-colors leading-relaxed">
                      {source.title}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span>
                  Authoritative Guidance &bull; Advocate Reviewed by {LEGAL_REVIEWER.name} ({LEGAL_REVIEWER.role})
                </span>
                <span>Updated for 2026 Commercial Courts &amp; BSA Practice</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides
        currentPath={PAGE_URL}
        cluster="healthcareB2B"
      />
    </div>
  );
}
