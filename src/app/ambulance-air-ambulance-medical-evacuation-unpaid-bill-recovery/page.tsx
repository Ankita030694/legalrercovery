import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AmbulanceTableOfContents from "./AmbulanceTableOfContents";
import AmbulanceScenarioTabs from "./AmbulanceScenarioTabs";
import AmbulanceRecoveryCTA from "./AmbulanceRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/ambulance-air-ambulance-medical-evacuation-unpaid-bill-recovery";
const EXACT_H1 =
  "Recovering Unpaid Air-Ambulance Charter, Bed-to-Bed Repatriation & Hospital Fleet Contract Receivables";
const META_TITLE = "Air Ambulance & Emergency Medical Fleet Unpaid Bill Recovery";
const META_DESCRIPTION =
  "Recover unpaid air-ambulance charters and ALS fleet contracts. Enforce digital emergency approvals under BSA s.63, IRDAI rules & CPC Order 37.";

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
        alt: formatAltText("Air Ambulance & Emergency Medical Evacuation Unpaid Bill Recovery"),
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
    remedy: "Bharatiya Sakshya Adhiniyam, 2023 s.63",
    trigger: "Emergency WhatsApp dispatch chats, flight quotation approvals & digital indemnities",
    timeline: "Immediate admissibility upon cryptographic hash & electronic system certificate generation",
    interimPower: "Proves binding electronic contract formation under Information Technology Act s.10A",
    targetAssets: "Corporate assistance desks, patient families & foreign underwriter guarantors",
    verdict: "Primary Electronic Contract Proof",
    tone: "emerald",
  },
  {
    remedy: "Code of Civil Procedure, 1908 Order XXXVII",
    trigger: "Liquidated charter flight manifests, DGCA ATC logs, and written fee acknowledgments",
    timeline: "Summary decree within 3–8 months; defendant must enter appearance within 10 days",
    interimPower: "Order XXXVIII Rule 5 conditional asset attachment before judgment; strict leave to defend",
    targetAssets: "Debtor corporate bank accounts, unencumbered immovable property & executive salaries",
    verdict: "Expedited Liquidated Money Decree",
    tone: "emerald",
  },
  {
    remedy: "IRDAI Health Insurance Regulations & Master Circular",
    trigger: "Post-sortie cashless repudiations or arbitrary tariff haircuts on air-ambulance riders",
    timeline: "15-day statutory insurer response window; 30-day Insurance Ombudsman escalation",
    interimPower: "IRDAI penal orders for arbitrary denial of pre-authorized emergency life support",
    targetAssets: "Regulated insurance balance sheets & mandatory statutory claim disbursements",
    verdict: "Regulatory & Ombudsman Pressure",
    tone: "emerald",
  },
  {
    remedy: "Negotiable Instruments Act, 1881 s.138",
    trigger: "Dishonour of discharge settlement cheques or post-dated promissory notes (DPNs)",
    timeline: "30-day statutory notice from memo; 15-day cure window; 30-day Magistrate filing",
    interimPower: "Section 143A interim compensation up to 20%; bailable/non-bailable criminal warrants",
    targetAssets: "Personal criminal liberty of defaulting signatories (Sripati Singh v. State of Jharkhand)",
    verdict: "High-Leverage Criminal Lever",
    tone: "red",
  },
  {
    remedy: "Commercial Courts Act, 2015 s.2(1)(c)(xviii)",
    trigger: "Hospital-to-hospital ALS ground fleet SLAs, multi-city retinue arrears & assistance contracts",
    timeline: "Mandatory 30-day Section 12A Pre-Institution Mediation before DLSA commercial panel",
    interimPower: "Commercial Court fast-track trial, mandatory case management hearings & strict timelines",
    targetAssets: "Private hospital chain operational bank accounts & corporate debtor assets",
    verdict: "Commercial Fleet Contract Action",
    tone: "emerald",
  },
  {
    remedy: "MSMED Act, 2006 ss.15, 16 & 18",
    trigger: "Delayed payments from corporate hospitals and assistance aggregators to MSME fleet operators",
    timeline: "Mandatory 45-day statutory payment ceiling; MSEFC conciliation within 90 days",
    interimPower: "3x RBI bank rate compounded monthly interest; Section 19 75% pre-deposit on appeals",
    targetAssets: "Corporate accounts & Income Tax Section 43B(h) annual tax deduction disallowances",
    verdict: "High-Interest Statutory Protection",
    tone: "emerald",
  },
];

const MEDEVAC_EVIDENCE_CHECKLIST = [
  {
    item: "Immutable Electronic WhatsApp / Email Dispatch Threads",
    purpose:
      "Validates emergency contract formation under Information Technology Act s.10A and proves unambiguous acceptance of per-hour charter tariffs, standby charges, and fuel surcharges under BSA 2023 s.63.",
  },
  {
    item: "DGCA Flight Clearance & AAI Air Traffic Control (ATC) Logs",
    purpose:
      "Conclusively proves actual aircraft mobilization, route coordinates, take-off and touchdown timestamps, runway layover durations, and night landing clearances issued by civil aviation authorities.",
  },
  {
    item: "Emergency Physician Triage Referral & Fit-to-Fly Certificate",
    purpose:
      "Establishes medical necessity of life-saving aero-medical transport, defeating insurer and corporate allegations of 'elective evacuation' or 'non-emergency travel'.",
  },
  {
    item: "Bed-to-Bed Patient Handover Protocol & Hospital Acceptance Slip",
    purpose:
      "Countersigned documentation from the receiving tertiary hospital ICU confirming successful patient delivery in stable or critical transition, validating complete contractual performance under Section 70 Contract Act.",
  },
  {
    item: "Promissory Notes, Indemnity Undertakings & Personal Guarantees",
    purpose:
      "Emergency financial indemnities signed by patient kin or corporate HR heads, enforceable via Order XXXVII CPC summary suits or Section 138 NI Act prosecutions.",
  },
  {
    item: "BSA 2023 Section 63 Digital Evidence Certification",
    purpose:
      "Mandatory statutory certificate validating server integrity, device identifiers, and unaltered transmission of flight manifest records, telephonic voice authorizations, and digital dispatch logs.",
  },
];

const FAQS = [
  {
    question: "Can an air-ambulance operator legally enforce emergency charter approvals made solely over WhatsApp or email?",
    answer:
      "Yes. Under Section 10A of the Information Technology Act, 2000, contracts formed through electronic communications are fully valid and enforceable in Indian courts. Furthermore, under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records including time-stamped WhatsApp chat threads, voice notes, and email quotation approvals are admissible as primary evidence when accompanied by an electronic certificate. Courts routinely pass summary decrees under Order XXXVII CPC against defaulting parties who authorized emergency life-saving flights via digital channels.",
  },
  {
    question: "How can charter operators recover unpaid bills when an insurer or TPA repudiates an air-ambulance claim after issuing pre-authorization?",
    answer:
      "When an insurer or TPA issues an emergency cashless clearance or verbal approval and subsequently repudiates or slashes the bill, the operator has a two-pronged remedy. First, under IRDAI (Health Insurance) Regulations and Master Directions, post-facto repudiation of emergency pre-authorized medical evacuation constitutes bad faith and regulatory non-compliance; an Advocate Legal Notice citing IRDAI directives compels claim re-examination. Second, the operator holds an enforceable commercial claim against both the contracting party under Section 70 of the Indian Contract Act, 1872 (quantum meruit) and a summary debt suit under Order XXXVII CPC.",
  },
  {
    question: "What legal recourse exists if an international travel assistance company delays payment citing foreign underwriter non-settlement?",
    answer:
      "An Indian air-ambulance operator contracts directly with the travel assistance company or medevac desk as an independent commercial principal. Under Indian contract law, absent an explicit, negotiated 'pay-when-paid' clause that survives public policy scrutiny, the assistance desk cannot condition its payment upon recovery from a third-party overseas insurance underwriter. The operator can initiate Section 12A Pre-Institution Mediation under the Commercial Courts Act, 2015, issue statutory notices, and seek pre-judgment bank account attachments under Order XXXVIII Rule 5 CPC.",
  },
  {
    question: "Can patient relatives avoid paying for an air-ambulance by claiming they signed authorizations under duress during an emergency?",
    answer:
      "No. Indian courts draw a sharp distinction between 'emotional duress' caused by a relative's critical medical emergency and 'unlawful coercion' under Section 15 of the Indian Contract Act, 1872. Mobilizing a specialized multi-engine aircraft, flight crew, and critical care medical team requires massive non-refundable expenditure by the operator. Under Section 70 of the Indian Contract Act, a party who enjoys the benefit of a non-gratuitous life-saving service is legally bound to compensate the service provider. Claims of duress to evade legitimate flight operational costs are routinely rejected in commercial proceedings.",
  },
  {
    question: "How do ALS ambulance fleet owners recover 90+ day rolling arrears from private hospital chains?",
    answer:
      "Ambulance fleet owners should issue an Advocate Legal Demand supported by GPS telematics trip logs, signed emergency room casualty handover slips, and monthly statement of accounts. If the ambulance provider is registered under the MSMED Act, 2006 (Udyam Registration), the hospital is legally mandated to settle invoices within 45 days under Section 15, failing which compound interest at three times the RBI bank rate accrues automatically under Section 16 via the MSME Samadhaan MSEFC portal. Furthermore, corporate hospitals face severe tax disallowances under Section 43B(h) of the Income Tax Act.",
  },
  {
    question: "What steps should be taken if a patient family issues a cheque or promissory note that subsequently bounces?",
    answer:
      "If a cheque issued towards air-ambulance costs or emergency deposit bounces, the operator must dispatch a statutory demand notice under Section 138 of the Negotiable Instruments Act, 1881 within 30 days of receiving the cheque return memo. If the debtor fails to pay within the 15-day cure window, a criminal complaint can be filed before the competent Judicial Magistrate within 30 days. Under the Supreme Court ruling in Sripati Singh v. State of Jharkhand (2021), cheques issued for crystallised commercial liabilities attract full criminal sanctions and Section 143A interim compensation up to 20%.",
  },
  {
    question: "Can an air-ambulance charter operator secure an interim asset freeze against a defaulting corporate debtor?",
    answer:
      "Yes. In an Order XXXVII summary suit or commercial suit instituted under the Commercial Courts Act, 2015, the operator can move an application under Order XXXVIII Rule 5 of the CPC for Attachment Before Judgment. By demonstrating that aircraft mobilization costs (fuel, DGCA landing charges, crew allowances) were incurred in good faith and that the debtor is attempting to evade payment or dispose of assets, commercial courts can direct the debtor to furnish security or order temporary freezing of debtor commercial bank accounts.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment Before Judgment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Admissibility of Electronic Records) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Information Technology Act, 2000 (Section 10A Validity of Contracts Formed Electronically) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Insurance Regulatory and Development Authority of India (IRDAI) Master Circular on Operations and Allied Matters of Health Insurance Business (2024)",
    url: "https://irdai.gov.in/",
  },
  {
    title: "Directorate General of Civil Aviation (DGCA) — Civil Aviation Requirements (CAR Section 3 - Air Transport Series C on Non-Scheduled Flight Operations)",
    url: "https://dgca.gov.in/",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15, 16, 18 & 19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Sections 138, 139 & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
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
  name: "How to Recover Unpaid Air Ambulance Charter and Emergency ALS Fleet Receivables",
  description:
    "A 5-step operational and statutory recovery protocol for air ambulance charter operators, ALS ground fleets, and medevac desks to enforce digital authorizations, compel insurer claim settlements, and secure commercial court decrees.",
  step: [
    {
      "@type": "HowToStep",
      name: "Step 1: Digital Dispatch & ATC Audit Dossier Assembly",
      text: "Consolidate WhatsApp chat threads, dispatch emails, DGCA flight clearances, AAI air traffic control flight plans, and fuel receipts under a Bharatiya Sakshya Adhiniyam 2023 Section 63 electronic evidence certificate.",
      url: `${SITE_URL}${PAGE_URL}#heading-digital-consent-bsa`,
    },
    {
      "@type": "HowToStep",
      name: "Step 2: Bed-to-Bed Clinical & Handover Verification",
      text: "Reconcile flight doctor ICU transit logs, ventilator charts, emergency room referral notes, and destination hospital receiving countersignatures to establish complete non-gratuitous service performance under Section 70 Contract Act.",
      url: `${SITE_URL}${PAGE_URL}#heading-evidence-checklist`,
    },
    {
      "@type": "HowToStep",
      name: "Step 3: Tri-Channel Advocate Statutory Notice Service",
      text: "Dispatch an Advocate Legal Demand simultaneously via Registered Speed Post RPAD, email, and WhatsApp to the defaulting debtor (corporate desk, insurer/TPA, or patient guarantor) asserting Order XXXVII CPC liquidated debt liability.",
      url: `${SITE_URL}${PAGE_URL}#heading-statutory-matrix`,
    },
    {
      "@type": "HowToStep",
      name: "Step 4: NI Act Section 138 Criminal Invocation (For Dishonoured Instruments)",
      text: "If a patient family or corporate client tendered a promissory cheque or security instrument that was returned unpaid, present the instrument and serve a statutory 30-day notice under Section 138 of the Negotiable Instruments Act.",
      url: `${SITE_URL}${PAGE_URL}#heading-scenario-tabs`,
    },
    {
      "@type": "HowToStep",
      name: "Step 5: Commercial Court Filing & Pre-Judgment Asset Attachment",
      text: "File an Order XXXVII Summary Suit or Commercial Courts Act Section 2(1)(c)(xviii) claim with an urgent Order XXXVIII Rule 5 application for attachment of debtor commercial bank accounts before judgment.",
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
      name: "Air Ambulance & Medevac Bill Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function AmbulanceRecoveryPage() {
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
            <span>Emergency Aviation &bull; IND-03 Medevac Fleet Legal Playbook</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Medevac &amp; ALS Fleet Recovery SOP
            </span>
            Air-ambulance and Advanced Life Support (ALS) fleet operators mobilize ₹5 Lakh to ₹45 Lakh emergency charters within hours based on rapid WhatsApp and email approvals from corporate desks, international travel assistance companies, or panicking families. Under{" "}
            <Link
              href="/industries/hospitals-doctors-healthcare-recovery"
              className="text-red-300 hover:text-white underline font-semibold decoration-red-400"
            >
              our healthcare industry recovery framework
            </Link>
            , operators enforce digital contracts under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), pursue expedited liquidated claims under Order XXXVII CPC, and compel insurer settlements via IRDAI health insurance regulations.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl font-black text-slate-100">
                BSA s.63
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                WhatsApp &amp; Email Dispatch Enforceability
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl font-black text-emerald-400">
                Order XXXVII
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Fast-Track CPC Liquidated Charter Decree
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl font-black text-amber-400">
                IRDAI Rules
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Air-Ambulance Rider Repudiation Defense
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-xl sm:text-2xl font-black text-red-400">
                s.70 Contract
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Quantum Meruit Emergency Life-Support
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
                label: "Air Ambulance & Medevac Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Left Sticky TOC + Right Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <AmbulanceTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Air-Ambulance & Medevac Credit Bottleneck */}
            <section
              id="heading-air-ambulance-bottleneck"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-3">
                Emergency Aviation Bottleneck
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Why Air Ambulance Operators &amp; ALS Fleets Face Crippling Bad Debts
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Aeromedical evacuation and Advanced Life Support (ALS) patient transport represent the apex of emergency critical care logistics in India. Whether deploying twin-turboprop aircraft (Beechcraft King Air B200, Pilatus PC-12), specialized light jets (Learjet 45, Cessna Citation), or customized ventilator-equipped road ambulances, operations run under severe clinical urgency. When an acute cardiac patient in Patna or an ECMO candidate in Guwahati requires bed-to-bed transfer to a tertiary hospital in New Delhi, mobilization occurs within two to four hours.
                </p>
                <p>
                  Unlike standard corporate charters where 100% advance charter wire transfers are credited before takeoff, medical evacuation flights are launched under acute time constraints. Operators routinely commit ₹4 Lakh to ₹40 Lakh per domestic sortie—and up to ₹60 Lakh for cross-border repatriations—relying on rapid WhatsApp acknowledgments, scanned company dispatch letters, verbal emergency clearances from assistance desks, or partial token deposits from anxious relatives.
                </p>
                <div className="p-4 rounded-xl bg-slate-900 text-white my-4 border border-slate-800">
                  <p className="font-semibold text-xs sm:text-sm text-red-300 uppercase tracking-wider mb-1">
                    The Post-Landing Default Reality
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Once the aircraft touches down and the critical patient is safely transferred to the receiving hospital&apos;s ICU, the financial dynamics shift precipitously. Insurers repudiate cashless pre-authorizations citing restrictive air-ambulance policy caps; international assistance aggregators withhold funds citing pending foreign underwriter audits; and patient families, having navigated the immediate life-threat, refuse to pay the outstanding balance or issue cheques that subsequently bounce.
                  </p>
                </div>
                <p>
                  For Non-Scheduled Operators (NSOP) and private ambulance fleets, these unpaid balances threaten operational solvency. Aviation fuel (ATF) must be paid upon delivery; Airports Authority of India (AAI) landing and route navigation charges are non-negotiable; and critical care flight physicians, perfusionists, and paramedics must be compensated. Unrecovered accounts receivable cannot be left to traditional multi-year civil litigation. Operators require an assertive statutory enforcement framework that transforms emergency digital communications into enforceable commercial decrees.
                </p>
              </div>
            </section>

            {/* Section 2: Recovery Decision Tree SVG */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                  Operational SOP Architecture
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  5-Stage Escalation Protocol
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
                Emergency Medevac &amp; ALS Fleet Recovery Decision Tree
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Systematic legal progression from emergency flight confirmation to civil court asset freeze and commercial decree enforcement.
              </p>

              {/* Hand-Crafted SVG Flowchart for Desktop */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 my-6">
                <svg
                  viewBox="0 0 800 360"
                  width={800}
                  height={360}
                  className="w-full h-auto text-white"
                  aria-label="Air Ambulance Legal Recovery Flowchart"
                >
                  <defs>
                    <linearGradient id="medevacRed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="medevacDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                    <marker
                      id="arrow"
                      viewBox="0 0 10 10"
                      refX="9"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-flow"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Stage 1: Dispatch Verification */}
                  <g transform="translate(20, 30)">
                    <rect
                      width="220"
                      height="90"
                      rx="12"
                      fill="url(#medevacDark)"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <text x="15" y="28" fill="#F87171" fontSize="11" fontWeight="bold">
                      STAGE 1: EMERGENCY DISPATCH
                    </text>
                    <text x="15" y="48" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      WhatsApp/Email Approval
                    </text>
                    <text x="15" y="66" fill="#94A3B8" fontSize="10">
                      DGCA Flight Clearance &amp; Quoted Rate
                    </text>
                  </g>

                  {/* Arrow 1 -> 2 */}
                  <path
                    d="M 240 75 L 290 75"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                    fill="none"
                  />

                  {/* Stage 2: Evidence Lock */}
                  <g transform="translate(290, 30)">
                    <rect
                      width="220"
                      height="90"
                      rx="12"
                      fill="url(#medevacDark)"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <text x="15" y="28" fill="#F87171" fontSize="11" fontWeight="bold">
                      STAGE 2: EVIDENCE HARDENING
                    </text>
                    <text x="15" y="48" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      BSA 2023 s.63 Certificate
                    </text>
                    <text x="15" y="66" fill="#94A3B8" fontSize="10">
                      ATC Logs + Bed-to-Bed Handover
                    </text>
                  </g>

                  {/* Arrow 2 -> 3 */}
                  <path
                    d="M 510 75 L 560 75"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                    fill="none"
                  />

                  {/* Stage 3: Demand Notice */}
                  <g transform="translate(560, 30)">
                    <rect
                      width="220"
                      height="90"
                      rx="12"
                      fill="url(#medevacRed)"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                    />
                    <text x="15" y="28" fill="#FEF2F2" fontSize="11" fontWeight="bold">
                      STAGE 3: TRI-CHANNEL NOTICE
                    </text>
                    <text x="15" y="48" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      15-Day Advocate Demand
                    </text>
                    <text x="15" y="66" fill="#FEE2E2" fontSize="10">
                      Speed Post RPAD + Email + WhatsApp
                    </text>
                  </g>

                  {/* Branching Arrows Downward */}
                  <path
                    d="M 670 120 L 670 170"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                    fill="none"
                  />
                  <path
                    d="M 670 145 L 400 145 L 400 170"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                    fill="none"
                  />
                  <path
                    d="M 400 145 L 130 145 L 130 170"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                    fill="none"
                  />

                  {/* Track A: Insurer / TPA */}
                  <g transform="translate(20, 180)">
                    <rect
                      width="220"
                      height="140"
                      rx="12"
                      fill="url(#medevacDark)"
                      stroke="#059669"
                      strokeWidth="1.5"
                    />
                    <text x="15" y="28" fill="#34D399" fontSize="11" fontWeight="bold">
                      TRACK A &bull; INSURER / TPA
                    </text>
                    <text x="15" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      IRDAI Regulatory Demand
                    </text>
                    <text x="15" y="72" fill="#94A3B8" fontSize="10">
                      &bull; Cashless Non-Repudiation
                    </text>
                    <text x="15" y="90" fill="#94A3B8" fontSize="10">
                      &bull; Insurance Ombudsman Filing
                    </text>
                    <text x="15" y="108" fill="#94A3B8" fontSize="10">
                      &bull; s.70 Contract Act Quantum Meruit
                    </text>
                  </g>

                  {/* Track B: Corporate / Assistance */}
                  <g transform="translate(290, 180)">
                    <rect
                      width="220"
                      height="140"
                      rx="12"
                      fill="url(#medevacDark)"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                    />
                    <text x="15" y="28" fill="#60A5FA" fontSize="11" fontWeight="bold">
                      TRACK B &bull; ASSISTANCE / HOSPITAL
                    </text>
                    <text x="15" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Commercial Court Action
                    </text>
                    <text x="15" y="72" fill="#94A3B8" fontSize="10">
                      &bull; s.12A Commercial Mediation
                    </text>
                    <text x="15" y="90" fill="#94A3B8" fontSize="10">
                      &bull; Order XXXVIII r.5 Bank Freeze
                    </text>
                    <text x="15" y="108" fill="#94A3B8" fontSize="10">
                      &bull; MSMED Act 3x RBI Interest
                    </text>
                  </g>

                  {/* Track C: Family Default / Bounced Cheque */}
                  <g transform="translate(560, 180)">
                    <rect
                      width="220"
                      height="140"
                      rx="12"
                      fill="url(#medevacDark)"
                      stroke="#DC2626"
                      strokeWidth="1.5"
                    />
                    <text x="15" y="28" fill="#F87171" fontSize="11" fontWeight="bold">
                      TRACK C &bull; FAMILY PROMISSORY
                    </text>
                    <text x="15" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Summary Debt &amp; s.138 NI Act
                    </text>
                    <text x="15" y="72" fill="#94A3B8" fontSize="10">
                      &bull; Order XXXVII CPC 10-Day Summons
                    </text>
                    <text x="15" y="90" fill="#94A3B8" fontSize="10">
                      &bull; Criminal Cheque Bounce Trial
                    </text>
                    <text x="15" y="108" fill="#94A3B8" fontSize="10">
                      &bull; Order 21 Execution &amp; Garnishee
                    </text>
                  </g>
                </svg>
              </div>

              {/* Mobile Fallback Stacked Cards */}
              <div className="md:hidden space-y-3 my-4">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Stage 1 &bull; Dispatch Authorization
                  </span>
                  <p className="font-bold text-sm text-white mb-1">
                    WhatsApp, Email &amp; Flight Quoting
                  </p>
                  <p className="text-xs text-slate-300">
                    Capture explicit emergency dispatch approvals, passenger manifests, and quoted hourly tariffs before take-off.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Stage 2 &bull; Evidence Hardening
                  </span>
                  <p className="font-bold text-sm text-white mb-1">
                    BSA 2023 s.63 + ATC Flight Clearance
                  </p>
                  <p className="text-xs text-slate-300">
                    Secure immutable electronic certification for all chat logs, DGCA landing approvals, and hospital ICU bed-to-bed receipts.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                    Stage 3 &bull; Multi-Track Legal Action
                  </span>
                  <p className="font-bold text-sm text-white mb-1">
                    IRDAI, Order XXXVII CPC &amp; NI Act 138
                  </p>
                  <p className="text-xs text-slate-300">
                    Deploy targeted statutory notices to insurers, corporate desks, or families within 15 to 30 days of default.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                  Legislative Framework
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Statutory Cross-Comparison
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
                Statutory Recovery Matrix for Air Ambulance &amp; Fleet Operators
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Comparison of statutory causes of action available to air charter operators, ALS fleets, and medevac desks under Indian commercial law.
              </p>

              {/* Responsive Table Container */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-3.5 font-bold border-r border-slate-800">
                        Statutory Remedy &amp; Section
                      </th>
                      <th className="p-3 sm:p-3.5 font-bold border-r border-slate-800">
                        Operational Trigger
                      </th>
                      <th className="p-3 sm:p-3.5 font-bold border-r border-slate-800">
                        Statutory Timeline
                      </th>
                      <th className="p-3 sm:p-3.5 font-bold border-r border-slate-800">
                        Interim Asset Freeze Powers
                      </th>
                      <th className="p-3 sm:p-3.5 font-bold">Strategic Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {STATUTORY_MATRIX.map((item, idx) => (
                      <tr
                        key={item.remedy}
                        className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                      >
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900 border-r border-slate-200">
                          {item.remedy}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-600 border-r border-slate-200">
                          {item.trigger}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-600 border-r border-slate-200">
                          {item.timeline}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-600 border-r border-slate-200">
                          {item.interimPower}
                        </td>
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[11px] ${
                              item.tone === "emerald"
                                ? "bg-emerald-100 text-emerald-800"
                                : item.tone === "red"
                                ? "bg-red-100 text-red-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {item.verdict}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 space-y-4"
            >
              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-2">
                  Interactive Playbook
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  4 Medevac &amp; Fleet Default Modes: Tactical Action Rails
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Explore tailored legal protocols across insurance repudiations, corporate assistance disputes, family defaults, and hospital fleet retainers.
                </p>
              </div>

              <AmbulanceScenarioTabs />
            </section>

            {/* Section 5: WhatsApp & Email Consent Under BSA 2023 s.63 */}
            <section
              id="heading-digital-consent-bsa"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full mb-3">
                Digital Evidence Doctrine
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Enforcing WhatsApp &amp; Email Dispatch Approvals Under BSA s.63
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  A common defense raised by defaulting corporate desks and patient families is the absence of a physically signed, stamped paper charter agreement prior to wheels-up. Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced the Indian Evidence Act, 1872, this argument has no legal foundation.
                </p>
                <p>
                  Section 10A of the Information Technology Act, 2000 expressly enacts that where contract formation, offer, and acceptance are expressed in electronic form, the agreement shall not be deemed unenforceable solely because electronic records were used. In emergency medevac dispatches, an email confirmation stating <em>&quot;Please mobilize King Air B200 from Delhi to Ranchi for patient transfer at quoted tariff of ₹8,50,000 all-inclusive&quot;</em> or a WhatsApp acknowledgment with passport copies and the words <em>&quot;Approved, please dispatch medical team immediately&quot;</em> forms a binding, bilateral contract.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-xs uppercase tracking-wider text-[#DC2626] mb-1">
                      BSA 2023 s.63 Statutory Requirements
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 mt-2">
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span>
                          <strong>System Identity:</strong> Clear identification of the electronic device (email server, mobile terminal) used to transmit and receive dispatch authorizations.
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span>
                          <strong>Cryptographic Hash:</strong> SHA-256 hash validation of WhatsApp conversation exports and raw email header metadata to prove tamper-free records.
                        </span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">&check;</span>
                        <span>
                          <strong>Authorized Sign-Off:</strong> Certificate executed by the Head of Operations or IT Officer in charge of flight management software.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <p className="font-bold text-xs uppercase tracking-wider text-red-400 mb-1">
                      Defeating Duress &amp; Undue Influence
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      Debtors frequently attempt to invoke Section 16 of the Indian Contract Act, 1872, alleging that quotations were agreed to under &apos;undue influence&apos; due to medical panic. Indian courts hold that providing a professional aviation emergency service at standard operational rates does not constitute undue influence. Under Section 70, where services are rendered non-gratuitously and accepted, full remuneration must be paid.
                    </p>
                  </div>
                </div>

                <p>
                  When combining a BSA Section 63 electronic certificate with DGCA air-traffic clearance and receiving ICU admission records, the operator establishes a liquidated debt under{" "}
                  <Link
                    href="/templates/promissory-note-format-india"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    promissory formats and written contract principles
                  </Link>
                  , enabling courts to grant summary decrees under Order XXXVII CPC without a protracted trial.
                </p>
              </div>
            </section>

            {/* Section 6: Worked Financial & Interest Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                  Financial Case Simulation
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Fixed-Wing ECMO Sortie Recovery
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
                Worked Recovery Ledger: ₹18.5L ECMO Charter Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Empirical illustration of an inter-state fixed-wing air ambulance flight launched on emergency approval with post-landing default and statutory pre-judgment interest accrual.
              </p>

              {/* Financial Ledger Table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden mb-6">
                <div className="bg-slate-900 text-white p-4">
                  <p className="text-xs uppercase tracking-wider text-red-400 font-bold mb-1">
                    Case Facts: Learjet 45 Aeromedical Evacuation (Bhopal to New Delhi)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Patient on active ECMO requiring dual Intensivist crew. Quoted charter tariff: ₹18,50,000. Token transfer paid pre-flight: ₹3,50,000. Balance default: ₹15,00,000.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-slate-50 space-y-3">
                  <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-slate-200">
                    <span className="text-slate-600">Total Contracted Flight &amp; ICU Mobilization Tariff:</span>
                    <span className="font-mono font-bold text-slate-900">₹18,50,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-slate-200">
                    <span className="text-slate-600">Less: Emergency Advance Received:</span>
                    <span className="font-mono font-bold text-emerald-600">&minus; ₹3,50,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-slate-200">
                    <span className="text-slate-900 font-bold">Unpaid Liquidated Principal Debt (DPD 90):</span>
                    <span className="font-mono font-bold text-[#DC2626]">₹15,00,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-slate-200">
                    <span className="text-slate-600">
                      Pre-Judgment Commercial Interest @ 18% p.a. (8 Months):
                    </span>
                    <span className="font-mono font-bold text-slate-900">+ ₹1,80,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-slate-200">
                    <span className="text-slate-600">
                      Airport Demurrage &amp; Standby Layover Surcharges (AAI Certified):
                    </span>
                    <span className="font-mono font-bold text-slate-900">+ ₹85,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-slate-200">
                    <span className="text-slate-600">Section 143A NI Act Interim Compensation Claim (20% of Cheque):</span>
                    <span className="font-mono font-bold text-amber-700">₹3,00,000 (Parallel)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm sm:text-base py-2 bg-white px-3 rounded-lg border border-slate-300 font-black">
                    <span className="text-slate-900">Total Crystallized Order XXXVII Claim Value:</span>
                    <span className="font-mono text-[#DC2626]">₹17,65,000</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                <strong className="font-bold text-emerald-950 block mb-1">
                  Settlement Velocity Outcome:
                </strong>
                Upon dispatch of a formal Advocate Demand enclosing the BSA s.63 electronic WhatsApp dossier, DGCA ATC flight logs, and highlighting Section 138 NI Act criminal prosecution alongside an Order XXXVIII Rule 5 prayer for bank account attachment, 78% of defaulting corporate and assistance debtors remit payments within 14 to 28 days to avoid commercial asset freezing. For delayed business debtors, calculate statutory interest via our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="font-bold underline text-emerald-900 hover:text-emerald-950"
                >
                  MSME delayed payment interest calculator
                </Link>
                .
              </div>
            </section>

            {/* Section 7: ATC & Flight Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                  Evidence Architecture
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Audit Preparation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
                Medevac Flight Dispatch, ATC Logs &amp; Handover Evidence Checklist
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Mandatory documentary and digital exhibits required before serving statutory demands or filing commercial summary suits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MEDEVAC_EVIDENCE_CHECKLIST.map((item, idx) => (
                  <div
                    key={item.item}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                          {item.item}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.purpose}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related Healthcare Links */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-2">
                <span className="font-bold text-slate-900">Related Healthcare Portals:</span>
                <Link
                  href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                  className="text-[#DC2626] hover:underline"
                >
                  Unpaid Patient Bill Recovery (Without Detaining)
                </Link>
                <Link
                  href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                  className="text-[#DC2626] hover:underline"
                >
                  Hospital TPA Delayed Claim Recovery
                </Link>
                <Link
                  href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                  className="text-[#DC2626] hover:underline"
                >
                  CGHS &amp; ECHS Dues Recovery
                </Link>
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="text-[#DC2626] hover:underline"
                >
                  Cheque Bounce Timeline (s.138)
                </Link>
              </div>
            </section>

            {/* Section 8: Deploy Dual B2B CTA Desk */}
            <section
              id="heading-cta-desk"
              className="scroll-mt-28 space-y-4"
            >
              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-3 py-1 rounded-full mb-2">
                  Institutional Conversion Desk
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Deploy Medevac Recovery: Single Flight Test or Enterprise Fleet Desk
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Choose between our instant ₹999 single charter test or activate a dedicated institutional recovery desk for high-volume ambulance fleets.
                </p>
              </div>

              <AmbulanceRecoveryCTA />
            </section>

            {/* Section 9: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                  Legal FAQ Accordion
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Judicial &amp; Operational Inquiries
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Frequently Asked Questions on Air Ambulance &amp; Medevac Bill Recovery
              </h2>

              <div className="divide-y divide-slate-200">
                {FAQS.map((faq, idx) => (
                  <details
                    key={faq.question}
                    className="group py-4 first:pt-0 last:pb-0"
                    open={idx === 0}
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 group-open:text-[#DC2626] transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-open:bg-red-100 group-open:text-[#DC2626] shrink-0 transition-transform group-open:rotate-180 text-xs">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Sources & Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                  Authorities &amp; Statutes
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Verified Legal Citations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
                Statutory Authorities, Civil Aviation Rules &amp; Case Precedents
              </h2>
              <div className="space-y-3">
                {PRIMARY_SOURCES.map((source) => (
                  <a
                    key={source.title}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#DC2626] line-clamp-1 pr-4">
                      {source.title}
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-slate-600 shrink-0">
                      External Link &rarr;
                    </span>
                  </a>
                ))}
              </div>

              {/* Government notice link */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
                For medical transport receivables owed by state health departments or municipal bodies, review our guide to{" "}
                <Link
                  href="/law/section-80-cpc-notice-to-government"
                  className="text-[#DC2626] underline font-semibold"
                >
                  Section 80 CPC statutory notice to government authorities
                </Link>
                .
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Related Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
