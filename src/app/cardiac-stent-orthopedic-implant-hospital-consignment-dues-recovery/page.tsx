import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CardiacStentTableOfContents from "./CardiacStentTableOfContents";
import CardiacStentScenarioTabs from "./CardiacStentScenarioTabs";
import CardiacStentRecoveryCTA from "./CardiacStentRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery";
const EXACT_H1 =
  "Hospital Consumed Your Stents or Ortho Implants in OT Without Raising a PO? Consignment Stock & Receivable Recovery Guide";
const META_TITLE = "Cardiac Stent & Ortho Implant Consignment Dues Recovery";
const META_DESCRIPTION =
  "Recover unpaid hospital dues for cardiac stents & ortho implants on consignment. Enforce Sale of Goods Act s.24 with OT stickers & legal notice.";

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
        alt: formatAltText("Cardiac Stent and Orthopedic Implant Hospital Consignment Dues Recovery"),
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
    remedy: "Sale Adoption & Immediate Price Vesting",
    statute: "Sale of Goods Act, 1930 (Section 24(a))",
    timing: "Instantaneous upon physical implantation into patient in OT or Cath-Lab",
    mechanism: "Formal Notice establishing that surgical implantation constitutes 'an act adopting the transaction', extinguishing consignment title and making full price immediately due",
    relief: "Immediate conversion of delivery challan into debt; defeats hospital defense of 'No PO Generated' or missing internal purchase requisitions",
    suitability: "Drug-Eluting Stents (DES), PTCA balloons, total knee/hip prostheses, spine pedicle screws, and intraocular lenses (IOLs) consumed during surgeries",
    tone: "emerald",
  },
  {
    remedy: "Criminal Breach of Trust (Detained Stock & Loaner Sets)",
    statute: "Bharatiya Nyaya Sanhita, 2023 (Section 316 & Section 318)",
    timing: "Within 48 to 72 hours of hospital refusing physical return of unconsumed stock or loaner instruments",
    mechanism: "Criminal police complaint / Section 175 BNSS application before the Chief Judicial Magistrate against Medical Superintendent & Purchase Head",
    relief: "Police-assisted seizure of multi-lakh instrumentation sets, immobilization of hospital OT assets, and non-bailable criminal prosecution carrying up to 5 years imprisonment",
    suitability: "Wrongful detention of proprietary spine instrument trays, trauma drill jigs, unconsumed emergency backup stents, and consignment demo kits",
    tone: "emerald",
  },
  {
    remedy: "Statutory MSME 45-Day Payment & Compound Penal Interest",
    statute: "MSMED Act, 2006 (Section 15, Section 16 & Section 18)",
    timing: "Upon expiry of 45 days from surgical consumption date (Deemed Day of Acceptance)",
    mechanism: "Statutory Advocate Legal Demand Notice followed by petition before the State Micro and Small Enterprises Facilitation Council (MSEFC)",
    relief: "Mandatory compound interest at 3 times RBI Bank Rate with monthly rests; overrides conflicting hospital payment terms and nullifies unilateral credit notes",
    suitability: "Udyam-registered implant distributors, surgical importers, and orthobiologics suppliers supplying private hospital networks",
    tone: "slate",
  },
  {
    remedy: "Order XXXVII Fast-Track Summary Suit & Pre-Judgment Attachment",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII & Order XXXVIII Rule 5)",
    timing: "Upon expiry of 15-day notice window where delivery challans and OT stickers establish admitted debt",
    mechanism: "Commercial recovery plaint filed in Commercial Court under Commercial Courts Act, 2015 s.2(1)(c)(xviii)",
    relief: "Summary decree without protracted full-length trial unless hospital deposits disputed amount in court; interim attachment of hospital corporate bank accounts",
    suitability: "Consignment balances supported by countersigned Delivery Challans, E-Way bills, and patient discharge billing summaries",
    tone: "slate",
  },
  {
    remedy: "NPPA Price-Cap Margin Defense & Anti-Profiteering Rebuttal",
    statute: "DPCO 2013 (Para 19) & Essential Commodities Act, 1955 (Section 10)",
    timing: "Immediate reply to unlawful hospital debit notes attempting retroactive trade margin deductions",
    mechanism: "Advocate rebuttal notice proving hospital billed patient at full NPPA ceiling while illegally undercutting contracted distributor price",
    relief: "Reversal of unauthorized debit notes and notification to NPPA Monitoring Division for illegal hospital profiteering under Essential Commodities Act",
    suitability: "Hospitals deducting 25%–40% arbitrary cuts on cardiac stents (₹34,128 ceiling) or knee replacement implants (₹54K–₹1.14L ceiling)",
    tone: "amber",
  },
];

const FAQS = [
  {
    question: "Can a hospital refuse payment for consumed stents or implants because no Purchase Order (PO) was generated?",
    answer:
      "No. Under Section 24(a) of the Sale of Goods Act, 1930, when goods are delivered on 'sale or return' or consignment terms, ownership and title pass irrevocably to the buyer as soon as the buyer performs any act adopting the transaction. Surgically implanting a drug-eluting stent or orthopedic knee prosthesis into a patient's body constitutes an absolute, irreversible adoption of the goods. The hospital cannot invoke internal procurement delays, missing Purchase Orders (POs), or delayed Goods Receipt Notes (GRNs) as a legal defense to withhold payment. Once consumed, the delivery challan price crystallizes into an enforceable commercial debt.",
  },
  {
    question: "How do OT and Cath-Lab consumption barcode stickers serve as legal proof of debt under Indian law?",
    answer:
      "Every cardiac stent, orthobiologic, spine screw, and joint implant package contains sterile peel-off barcode stickers bearing the device serial number, lot number, expiry date, and manufacturer code. Under surgical safety protocols, one sticker is affixed to the patient's Operation Theatre (OT) scrub register or Cath-Lab log, another to the hospital's internal billing sheet, and a third to the patient's discharge summary. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, legacy Indian Evidence Act Section 65B), high-resolution photographs, scanned OT registers, and patient discharge summaries showing these stickers constitute admissible primary electronic evidence conclusively proving consumption.",
  },
  {
    question: "What legal action can an implant distributor take if a hospital refuses to return unconsumed consignment stock or loaner sets?",
    answer:
      "Retaining unconsumed consignment stock or specialized surgical instrumentation sets (such as spine drill jigs, reamers, and reduction forceps worth ₹10L to ₹30L) after termination or audit constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS, legacy IPC Section 405/406) and Cheating under Section 318 BNS. The distributor should: (1) Issue an immediate 48-Hour Surgical Asset Repossession Notice claiming running daily demurrage of ₹3,000–₹10,000 per day; (2) File an application before the Chief Judicial Magistrate / jurisdictional police station under Section 175 BNSS; and (3) Move the Commercial Court under Order XL Rule 1 CPC or Section 9 of the Arbitration Act for an ex-parte Court Receiver to enter the hospital premises and seize the equipment.",
  },
  {
    question: "Can a hospital delay paying the implant distributor until the patient's insurance TPA or government scheme (CGHS/PM-JAY) settles the claim?",
    answer:
      "No. Unless the distributor signed an explicit, legally valid 'Pay-When-Paid' contract (which is severely restricted in Indian commercial jurisprudence and completely void against MSME suppliers under Sections 15 & 24 of the MSMED Act, 2006), the hospital's liability to pay for consumed surgical devices is entirely independent of insurance or government scheme reimbursement. The treatment contract exists between the patient, hospital, and insurer; the supply contract exists between the hospital and the distributor. The hospital cannot transfer its TPA audit or cashless deduction risk onto its medical device vendors.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act compel hospitals to clear MSME implant distributor dues within 45 days?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any expenditure payable to a registered Micro or Small enterprise (including medical device and implant distributors registered under Udyam) is allowable as a tax deduction only in the financial year in which it is actually paid, provided payment is made within 15 days (where no written agreement exists) or up to 45 days (under written contract). If a corporate hospital fails to clear the distributor's dues within 45 days of consumption, the entire unpaid amount is added back to the hospital's taxable income, resulting in a mandatory 25%–35% corporate tax and penalty liability.",
  },
  {
    question: "Can private hospitals deduct arbitrary trade margins from historic ledgers citing NPPA ceiling price revisions?",
    answer:
      "No. Price ceiling orders issued by the National Pharmaceutical Pricing Authority (NPPA) under Paragraph 19 of the Drugs (Prices Control) Order, 2013 (DPCO) cap the maximum price chargeable to the consumer/patient; they do not give hospitals unilateral statutory authority to cut contracted distributor purchase prices or issue retroactive debit notes. Unilateral deductions without bilateral consent breach Section 73 of the Indian Contract Act, 1872. Furthermore, hospitals charging patients the full NPPA ceiling while forcing illegal deductions on distributors risk prosecution under Section 10 of the Essential Commodities Act, 1955.",
  },
  {
    question: "What is the limitation period for recovering hospital consignment dues and unbilled implant arrears in India?",
    answer:
      "Under Article 14 and Article 15 of the Limitation Act, 1963, the limitation period for suing for the price of goods sold and delivered is three years from the date of delivery or consumption. However, limitation resets fresh upon: (1) Any part-payment credited into the distributor's bank account (Section 19 Limitation Act); (2) Any written email acknowledgement of balance, reconciliation statement, or Form 26AS/AIS TDS entry by the hospital (Section 18 Limitation Act); or (3) Service of a formal statutory notice initiating pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, which tolls the limitation clock.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Sale of Goods Act, 1930 (Section 24 — Goods sent on approval or on sale or return)",
    url: "https://www.indiacode.nic.in/handle/123456789/2389",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Section 316 — Criminal Breach of Trust & Section 318 — Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Commercial Disputes on Sale of Goods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Drugs (Prices Control) Order, 2013 (DPCO Para 19 — NPPA Medical Device Ceiling Notifications)",
    url: "https://www.nppaindia.nic.in",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records in Evidence)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure & Order XXXVIII Rule 5)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
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
    name: "Hospital Consignment Stent and Orthopedic Implant Dues Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Implant Distributors Recover Unpaid Consignment Stent & Ortho Stock Dues from Hospitals",
  description:
    "A 5-stage legal escalation protocol for cardiac stent, orthopedic joint, spine, and surgical device distributors to recover aged consignment arrears, enforce Sale of Goods Act s.24, and repossess detained surgical instrumentation.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Consolidate Delivery Challans, E-Way Bills & OT Barcode Stickers",
      text: "Audit physical and digital stock registers. Correlate delivery challans (stamped on receipt by Cath-Lab or OT scrub nurses) with outer carton barcode stickers affixed to patient OT scrub registers, Cath-Lab procedure sheets, and patient discharge summaries.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Issue Sale Adoption & Unbilled Stock Reconciliation Notice",
      text: "Dispatch an urgent formal demand under Section 24(a) of the Sale of Goods Act, 1930, putting the Hospital Medical Superintendent, CFO, and Purchase Head on notice that consumption in OT legally extinguished consignment title and converted items into an immediate payable debt.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve 48-Hour Surgical Asset Repossession & Demurrage Notice",
      text: "For unconsumed backup implants and detained loaner instrumentation trays (spine sets, trauma drill jigs, reamers), dispatch a strict repossession notice detailing device serial numbers and assessing daily commercial demurrage charges.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Dispatch 15-Day Advocate Statutory Demand Notice",
      text: "Serve an advocate-backed legal notice via registered Speed Post RPAD, email, and WhatsApp, invoking MSMED Act Section 15 & 16 compound penal interest, Contract Act s.73 damages, and warning of BNS s.316 criminal breach of trust prosecution.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Initiate Dual Legal Enforcement via MSEFC & Commercial Court",
      text: "File an MSME Samadhaan petition for statutory 3x RBI Bank Rate compound recovery, alongside an Order XXXVII Summary Suit or Section 9 Arbitration interim application in Commercial Court for asset attachment and court-appointed receiver possession.",
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
      name: "Pharma, Medical Devices & Surgical Distributors",
      item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cardiac Stent & Ortho Implant Consignment Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function CardiacStentConsignmentRecoveryPage() {
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
            <span>IND-04 Medical Devices Spoke &bull; Consignment Stock &amp; Implant Dues Recovery</span>
          </div>

          {/* Single H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Executive Creditor Rule
            </span>
            Under Section 24(a) of the Sale of Goods Act, 1930, property in consignment surgical stock passes irrevocably to the hospital upon surgical consumption in the OT or Cath-Lab—rendering the full purchase price immediately due regardless of whether the hospital has generated a formal Purchase Order (PO) or Goods Receipt Note (GRN). For complete cross-sector vertical strategies, explore our master{" "}
            <Link
              href="/industries/pharma-medical-devices-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Pharma, Medical Device &amp; Surgical Distributor Recovery Hub
            </Link>
            . Wrongful detention of unconsumed implants or multi-lakh loaner instrumentation sets constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS), triggering immediate police-assisted repossession, Section 43B(h) tax disallowances, and 3x RBI Bank Rate compound interest under the MSMED Act, 2006.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Sale of Goods Hook
              </span>
              <p className="text-sm sm:text-base md:text-lg font-black text-emerald-400">
                Section 24(a)
              </p>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">
                OT consumption vests title &amp; debt
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Criminal Detention
              </span>
              <p className="text-sm sm:text-base md:text-lg font-black text-red-400">
                BNS s.316 &amp; s.318
              </p>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">
                Breach of trust on loaner sets
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                MSME Statutory Rate
              </span>
              <p className="text-sm sm:text-base md:text-lg font-black text-amber-400">
                3x RBI Bank Rate
              </p>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">
                Monthly compound interest s.16
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Corporate Tax Shield
              </span>
              <p className="text-sm sm:text-base md:text-lg font-black text-slate-100">
                Section 43B(h)
              </p>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">
                45-day hospital tax deduction cut
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Pharma, Medical Devices & Surgical Distributors",
                href: "/industries/pharma-medical-devices-recovery",
              },
              {
                label: "Cardiac Stent & Ortho Implant Consignment Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CardiacStentTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Institutional Bottleneck
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Overview: Why Implant Distributors Face Unbilled Hospital Consignments
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Every cardiac stent, orthopedic joint, spine pedicle screw, and intraocular lens (IOL) distributor across India operates under an operational anomaly that threatens commercial solvency: the <strong>hospital consignment stocking model</strong>. To ensure life-saving surgical implants are available 24 hours a day for emergency primary angioplasties (PAMI) and poly-trauma stabilization, authorized distributors place crores of rupees worth of high-value implants inside hospital Cath-Labs, CSSD units, and Operation Theatres (OT) on provisional <em>Delivery Challans</em>.
                </p>
                <p>
                  Under clinical norms, when a surgeon implants a Drug-Eluting Stent (DES) or total knee arthroplasty kit into a patient, the hospital billing department immediately captures the implant in the patient&apos;s final hospital invoice. Cash-paying patients clear the bill before discharge; corporate and insurance patients have their claims submitted to Third-Party Administrators (TPAs). Yet, when the distributor submits the corresponding Delivery Challan and asks the hospital procurement department to generate a formal <strong>Purchase Order (PO)</strong> and <strong>Goods Receipt Note (GRN)</strong> so a tax invoice can be raised, the institutional excuses begin:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                  <li>
                    <strong>The &ldquo;Internal Requisition Pending&rdquo; Delay:</strong> The purchase department asserts that the operating surgeon hasn&apos;t signed the internal consumption slip or that the Cath-Lab nurse hasn&apos;t forwarded the physical barcode sticker register.
                  </li>
                  <li>
                    <strong>The &ldquo;TPA Settlement Pre-Condition&rdquo; Excuse:</strong> Hospital finance refuses to process the distributor&apos;s bill until the patient&apos;s insurance claim or government scheme (such as CGHS, ECHS, or Ayushman Bharat PM-JAY) is audited and disbursed 6 to 12 months later.
                  </li>
                  <li>
                    <strong>The Retroactive Trade Margin Squeeze:</strong> Hospital CFOs attempt to unilaterally enforce post-billing price cuts, citing National Pharmaceutical Pricing Authority (NPPA) ceiling revisions under the Drugs (Prices Control) Order, 2013 (DPCO), forcing distributors to accept 20% to 35% arbitrary deductions.
                  </li>
                  <li>
                    <strong>The Detained Loaner Instrumentation Trap:</strong> Proprietary surgical instruments, trial sets, reamers, and drill guides worth ₹10 Lakh to ₹30 Lakh are detained inside the hospital&apos;s CSSD or OT, preventing the distributor from servicing other surgical centers.
                  </li>
                </ul>
                <p>
                  This operational stalemate is not merely an administrative delay—it is an unlawful commercial detention. Under Indian commercial law, hospital purchase departments have no legal authority to treat surgical distributors as interest-free working capital lenders. By applying <strong>Section 24(a) of the Sale of Goods Act, 1930</strong>, the statutory protections of the <strong>MSMED Act, 2006</strong>, and penal remedies under the <strong>Bharatiya Nyaya Sanhita, 2023</strong>, implant distributors can pierce hospital procurement bureaucracy and recover their hard-earned dues with statutory compound interest.
                </p>
                <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Cross-Sector Alignment: If your distribution business also manages retail pharmacy ledgers, review our companion playbook on{" "}
                    <Link
                      href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                      className="text-[#DC2626] hover:underline font-bold"
                    >
                      Pharmacy Invoice Not Cleared Legal Action
                    </Link>{" "}
                    and general wholesale trade recovery under{" "}
                    <Link
                      href="/distributor-dealer-dues-recovery"
                      className="text-[#DC2626] hover:underline font-bold"
                    >
                      Distributor &amp; Dealer Dues Recovery
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Escalation Architecture
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Recovery Decision Tree for Unbilled Hospital Consignments
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                When a hospital consumes consignment medical devices without generating a PO, distributors must follow a calibrated, 5-stage legal escalation protocol that shifts the burden of proof onto hospital management while preserving clinical relationships with operating surgeons.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto p-4 bg-slate-950 rounded-2xl border border-slate-800 shadow-inner mb-6">
                <svg
                  viewBox="0 0 960 480"
                  className="w-full h-auto"
                  width={960}
                  height={480}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="stentRed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="stentDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                    <marker id="arrowRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 8 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                    <marker id="arrowSlate" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="30" y="40" width="260" height="90" rx="12" fill="url(#stentDark)" stroke="#334155" strokeWidth="2" />
                  <text x="50" y="70" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 1: AUDIT &amp; STICKER CAPTURE</text>
                  <text x="50" y="92" fill="#E2E8F0" fontSize="11">Gather Challan, E-Way Bill &amp; OT stickers</text>
                  <text x="50" y="110" fill="#94A3B8" fontSize="10">Verify patient scrub register &amp; lot numbers</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="290" y1="85" x2="350" y2="85" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Stage 2 */}
                  <rect x="350" y="40" width="260" height="90" rx="12" fill="url(#stentDark)" stroke="#334155" strokeWidth="2" />
                  <text x="370" y="70" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 2: SALE OF GOODS ACT DEMAND</text>
                  <text x="370" y="92" fill="#E2E8F0" fontSize="11">Serve s.24(a) Sale Adoption Notice</text>
                  <text x="370" y="110" fill="#94A3B8" fontSize="10">Notify Medical Superintendent: Title Passed</text>

                  {/* Arrow 2 -> 3 */}
                  <line x1="610" y1="85" x2="670" y2="85" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Stage 3 */}
                  <rect x="670" y="40" width="260" height="90" rx="12" fill="url(#stentDark)" stroke="#334155" strokeWidth="2" />
                  <text x="690" y="70" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 3: 48-HR ASSET REPOSSESSION</text>
                  <text x="690" y="92" fill="#E2E8F0" fontSize="11">Demand unconsumed stock &amp; loaner sets</text>
                  <text x="690" y="110" fill="#94A3B8" fontSize="10">Assess ₹5K/day demurrage under BNS s.316</text>

                  {/* Arrow 3 -> Split Decision */}
                  <line x1="800" y1="130" x2="800" y2="190" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Decision Diamond */}
                  <polygon points="800,190 910,240 800,290 690,240" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                  <text x="800" y="235" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Hospital Response</text>
                  <text x="800" y="252" fill="#F87171" fontSize="10" textAnchor="middle">in 15 Days?</text>

                  {/* Path Left: Settlement / Tax Invoice Raised */}
                  <line x1="690" y1="240" x2="560" y2="240" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowRed)" />
                  <rect x="350" y="200" width="210" height="80" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="365" y="230" fill="#A7F3D0" fontSize="11" fontWeight="bold">RECONCILIATION &amp; CURE</text>
                  <text x="365" y="248" fill="#ECFDF5" fontSize="10">PO generated; invoice paid</text>
                  <text x="365" y="265" fill="#6EE7B7" fontSize="10">Section 43B(h) tax compliance</text>

                  {/* Path Down: Continued Non-Payment / Default */}
                  <line x1="800" y1="290" x2="800" y2="350" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Stage 4 */}
                  <rect x="670" y="350" width="260" height="90" rx="12" fill="url(#stentRed)" stroke="#B91C1C" strokeWidth="2" />
                  <text x="690" y="380" fill="#FFFFFF" fontSize="12" fontWeight="bold">STAGE 4: STATUTORY ADVOCATE NOTICE</text>
                  <text x="690" y="400" fill="#FEE2E2" fontSize="11">Speed Post RPAD + WATI WhatsApp + Email</text>
                  <text x="690" y="418" fill="#FECACA" fontSize="10">MSMED Act s.16 penal interest invoked</text>

                  {/* Arrow Stage 4 -> Stage 5 */}
                  <line x1="670" y1="395" x2="610" y2="395" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Stage 5 */}
                  <rect x="350" y="350" width="260" height="90" rx="12" fill="url(#stentDark)" stroke="#DC2626" strokeWidth="2" />
                  <text x="370" y="380" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 5: DUAL FORUM LITIGATION</text>
                  <text x="370" y="400" fill="#E2E8F0" fontSize="11">MSEFC Council Reference (3x RBI Rate)</text>
                  <text x="370" y="418" fill="#94A3B8" fontSize="10">Order 37 CPC Summary Suit / Receiver Plaint</text>
                </svg>
              </div>

              {/* Mobile Fallback Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-400 uppercase">Stage 1</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Days 1–5</span>
                  </div>
                  <p className="text-sm font-bold text-white mb-1">Clinical Audit &amp; Barcode Sticker Extraction</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Correlate signed Delivery Challans with outer sterile carton stickers affixed to Cath-Lab logs and patient OT scrub books.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-400 uppercase">Stage 2</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Days 6–10</span>
                  </div>
                  <p className="text-sm font-bold text-white mb-1">Sale of Goods Act Section 24(a) Formal Demand</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Notify the Medical Superintendent that surgical consumption in OT legally extinguished title and converted stock into an immediate debt.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-400 uppercase">Stage 3</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Days 11–15</span>
                  </div>
                  <p className="text-sm font-bold text-white mb-1">48-Hour Loaner Repossession &amp; Demurrage Notice</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Demand immediate physical handover of unconsumed backup implants and detained spine/trauma instrumentation sets under penalty of BNS s.316.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-950 text-white border border-red-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-400 uppercase">Stage 4</span>
                    <span className="text-[10px] bg-red-900 px-2 py-0.5 rounded text-red-200">Days 16–30</span>
                  </div>
                  <p className="text-sm font-bold text-white mb-1">Advocate Demand Notice (Speed Post + Digital Channels)</p>
                  <p className="text-xs text-red-200 leading-relaxed">
                    Serve an advocate notice invoking MSMED Act Section 16 compound penal interest and Income Tax Section 43B(h) disallowance consequences.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-400 uppercase">Stage 5</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Day 31 Onward</span>
                  </div>
                  <p className="text-sm font-bold text-white mb-1">Commercial Court Summary Plaint &amp; MSEFC Petition</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    File an Order XXXVII CPC Summary Suit with Order 38 Rule 5 bank account attachment alongside MSME Samadhaan arbitration.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Framework */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal Arsenal
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Framework: Sale of Goods Act s.24, MSMED Act &amp; BNS s.316
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Hospital procurement heads routinely rely on the vendor&apos;s lack of legal familiarity, treating consignment agreements as non-binding informal arrangements. In reality, Indian statutory law provides a comprehensive framework converting unbilled surgical consumption into immediate, enforceable debts.
              </p>

              {/* Statutory Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Remedy &amp; Cause of Action</th>
                      <th className="py-3.5 px-4 font-bold">Governing Statute</th>
                      <th className="py-3.5 px-4 font-bold">Trigger Window</th>
                      <th className="py-3.5 px-4 font-bold">Relief &amp; Strategic Effect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <span className="block">{item.remedy}</span>
                          <span className="block text-[10px] font-normal text-slate-500 mt-0.5">
                            {item.suitability}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-700">
                          {item.statute}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {item.timing}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                          {item.relief}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900 text-xs sm:text-sm leading-relaxed">
                <p className="font-bold mb-1">
                  Critical Doctrine: Why Sale of Goods Act Section 24 Nullifies Hospital PO Pretexts
                </p>
                <p>
                  Section 24(a) states that when goods are delivered on approval or &ldquo;on sale or return&rdquo;, property passes to the buyer <em>when he signifies his approval or acceptance to the seller or does any other act adopting the transaction</em>. Implantation of a biomedical device into a surgical patient is the ultimate physical act adopting the transaction. Once implanted, the product cannot be un-implanted or returned. Consequently, title vests in the hospital, risk transfers, and the contractual purchase price becomes an immediate actionable debt.
                </p>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational Scenarios
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                4 Hospital Consignment Default Scenarios &amp; Operational Action Rails
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Review the tactical recovery protocols for the four most prevalent commercial default modes faced by orthopedic, cardiac, and spine distributors when dealing with private hospitals and corporate healthcare chains.
              </p>

              <CardiacStentScenarioTabs />
            </section>

            {/* Section 5: OT Stickers & BSA s.63 */}
            <section
              id="heading-ot-stickers"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  5
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Evidentiary Standards
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Cath-Lab &amp; OT Consumption Stickers: Establishing Proof Under BSA s.63
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In traditional B2B debt litigation, a creditor proves supply via a signed Goods Receipt Note (GRN) and a physical invoice counter-stamped by the security gate. In hospital implant consignment, however, hospitals deliberately refuse to issue a GRN until their purchase team raises a PO. To obtain summary decrees and enforce pre-judgment attachments, implant distributors must build an airtight electronic audit trail under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[11px] font-black uppercase text-[#DC2626] mb-1">
                      Anchor 1: The Triple-Sticker Trail
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every stent and joint box contains 3 to 5 peel-off sterile barcode labels. One sticker is affixed into the OT scrub nurse register, one onto the Cath-Lab clinical procedure sheet, and one onto the patient&apos;s final hospital discharge summary.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[11px] font-black uppercase text-[#DC2626] mb-1">
                      Anchor 2: WhatsApp Scrub Nurse Logs
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Real-time photographic handovers sent by your field sales specialist to the OT in-charge or Cath-Lab manager over WhatsApp, timestamped immediately post-surgery, establish contemporaneous acknowledgment under BSA Section 63.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[11px] font-black uppercase text-[#DC2626] mb-1">
                      Anchor 3: Inward Delivery Challans
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Delivery challans endorsed with the hospital&apos;s physical receiving stamp, security inward gate entry numbers, and active E-Way bills definitively place custody of the physical batch inside the hospital premises.
                    </p>
                  </div>
                </div>
                <p>
                  When your legal counsel serves an Advocate Demand Notice supported by an affidavit under BSA Section 63 authenticating these high-resolution OT register photographs, the hospital&apos;s administrative defense of &ldquo;stock unverified&rdquo; collapses instantly. In commercial court, the burden shifts entirely to the hospital to explain how an implant registered in its patient discharge file was not consumed.
                </p>
              </div>
            </section>

            {/* Section 6: Unreturned Loaner Sets */}
            <section
              id="heading-unreturned-sets"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  6
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Asset Protection
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Recovering Unreturned Spine Kits, Demo Trays &amp; Missing Loaner Sets
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Spine pedicle screw procedures, acetabular hip reconstructions, and complex maxillofacial surgeries require specialized surgical instrumentation sets—including pedicle probes, tap guides, rod benders, torque wrenches, and reamer handles. Distributors deliver these multi-tray sets (frequently valued at <strong>₹8 Lakh to ₹35 Lakh per set</strong>) on a loaner or demo basis for the surgery.
                </p>
                <p>
                  A chronic failure mode occurs when hospital CSSD units retain the instrumentation trays for weeks following surgery, misplace critical titanium screws, or refuse to release the sets until the distributor agrees to arbitrary billing discounts on the consumed implants.
                </p>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-slate-800">
                  <p className="text-xs sm:text-sm font-bold text-[#DC2626] mb-1">
                    Bailment &amp; Criminal Breach of Trust under BNS Section 316
                  </p>
                  <p className="text-xs leading-relaxed">
                    Under Section 148 of the Indian Contract Act, 1872, delivering loaner surgical sets creates a legal <strong>bailment</strong> for a specific purpose. Once the surgery terminates, the bailee (the hospital) is under an absolute legal duty under Section 160 to return the goods without demand. Withholding the trays or using them as leverage for billing negotiations constitutes <strong>Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.
                  </p>
                </div>
                <p>
                  Our legal protocol involves serving an urgent <strong>48-Hour Biomedical Asset Repossession Notice</strong> establishing running commercial demurrage of ₹3,500 to ₹7,500 per day. If the hospital fails to tender immediate release, we initiate criminal complaints before the jurisdictional Chief Judicial Magistrate under Section 175 BNSS while moving the Commercial Court under Order XL Rule 1 CPC for an ex-parte Court Commissioner to enter the hospital and repossess the distributor&apos;s property.
                </p>
              </div>
            </section>

            {/* Section 7: NPPA & TPA Excuses */}
            <section
              id="heading-nppa-tpa-excuses"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Debtor Defense Pre-Emption
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Overcoming Hospital Excuses: NPPA Price Caps &amp; TPA Insurance Delays
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  When pressed for settlement, hospital financial controllers routinely deploy two standard statutory misinterpretations. Our pre-litigation notices dismantle these pretexts on Day 1:
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Pretext 1: &ldquo;NPPA Price Ceilings Require Us to Deduct 30% From Your Invoice&rdquo;
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>The Legal Reality:</strong> Orders issued by the National Pharmaceutical Pricing Authority (NPPA) under DPCO 2013 fix the Maximum Retail Price (MRP) at which implants may be billed to patients (e.g., ₹34,128 for Bare Metal vs Drug-Eluting Stents, and categorized caps on Knee Implants). The NPPA ceiling is a statutory consumer cap—it does not confer any legal right upon a private hospital to unilaterally reduce distributor wholesale invoice prices. Unilateral debit notes violate Section 73 of the Contract Act. In fact, if a hospital bills the patient at the ceiling price while forcing an illegal discount on the vendor, it exposes itself to investigation under the Essential Commodities Act, 1955.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Pretext 2: &ldquo;We Will Release Your Payment Once TPA / Ayushman Bharat Clears Our Claim&rdquo;
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>The Legal Reality:</strong> In Indian commercial law, &ldquo;Pay-When-Paid&rdquo; conditions are unenforceable unless explicitly agreed in writing in unambiguous terms. Moreover, for suppliers registered under the MSMED Act, 2006, Section 24 provides an overriding effect over any inconsistent agreement—meaning the statutory 45-day payment deadline under Section 15 is absolute and cannot be waived by linking it to insurance audits, CGHS reimbursement queues, or ECHS processing timelines.
                    </p>
                  </div>
                </div>
                <p>
                  For an in-depth breakdown of mandatory 45-day commercial payment compliance, review our statutory guide on{" "}
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="text-[#DC2626] hover:underline font-bold"
                  >
                    Section 43B(h) MSME Payment Rules &amp; Tax Deductions
                  </Link>{" "}
                  and calculate potential delayed payment interest using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] hover:underline font-bold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 8: Worked Recovery Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  8
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Financial Proof
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Worked Recovery Ledger: ₹38.4 Lakh Ortho &amp; Stent Consignment Arrears
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                The following empirical illustration demonstrates how an advocate demand notice converts 8 months of unbilled hospital consignment stock into an enforceable commercial claim with Section 16 MSME penal compound interest and equipment demurrage.
              </p>

              {/* Recovery Ledger Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                      Case Dossier &bull; MedTech Distributor vs Corporate Hospital Network
                    </span>
                    <p className="text-base sm:text-lg font-bold text-white">
                      Aged Consignment Ledger &amp; Detained Loaner Instrumentation Audit
                    </p>
                  </div>
                  <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full font-mono">
                    Invoice Aging: 240 Days Overdue
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">
                      Unbilled Consumed Stents &amp; Catheters (28 Drug-Eluting Stents @ Challan Rate)
                    </span>
                    <span className="font-mono font-bold text-slate-100">&rupee;8,96,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">
                      Consumed Orthopedic Knee &amp; Hip Implants (14 Total Knee Systems)
                    </span>
                    <span className="font-mono font-bold text-slate-100">&rupee;18,20,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">
                      Trauma Pedicle Screws &amp; Spine Plating (Consignment Consumption)
                    </span>
                    <span className="font-mono font-bold text-slate-100">&rupee;4,84,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                    <span className="text-slate-300 font-semibold">
                      Total Principal Consignment Debt (Section 24(a) Sale of Goods Act)
                    </span>
                    <span className="font-mono font-extrabold text-emerald-400 text-base">
                      &rupee;32,00,000
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">
                      MSMED Act Section 16 Statutory Penal Compound Interest (3x RBI Bank Rate @ 19.5% p.a. for 240 days)
                    </span>
                    <span className="font-mono font-bold text-amber-400">&rupee;4,32,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                    <span className="text-slate-300">
                      Detained Spine Loaner Set Demurrage (42 days @ &rupee;5,000/day contract rate)
                    </span>
                    <span className="font-mono font-bold text-red-400">&rupee;2,10,000</span>
                  </div>

                  <div className="flex justify-between items-center pt-3 text-base sm:text-lg font-black">
                    <span className="text-white">Total Recoverable Pre-Litigation Amount:</span>
                    <span className="font-mono text-emerald-400">&rupee;38,42,000</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900 mb-1">
                  Commercial Outcome: Rapid Pre-Litigation Reconciliation
                </p>
                <p>
                  Upon receiving the formal Advocate Demand Notice itemizing the OT barcode sticker evidence, notifying the Medical Superintendent of personal liability under BNS Section 316, and warning of Section 43B(h) tax disallowances, the hospital management released the detained loaner instrumentation trays within 48 hours and cleared the ₹32,00,000 principal plus agreed interest via RTGS within 14 business days to avoid Commercial Court proceedings.
                </p>
              </div>
            </section>

            {/* Section 9: Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  9
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Litigation Readiness
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Digital Evidence &amp; Hospital OT Audit Checklist
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Before issuing a statutory demand notice or filing a Commercial Court plaint, assemble this comprehensive 6-point evidentiary dossier certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      Delivery Challans &amp; E-Way Bills
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Countersigned consignment delivery challans bearing the hospital gate inward stamp, Cath-Lab receiving signatures, and active GST e-Way bills proving custody transfer.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      Cath-Lab &amp; OT Barcode Scans
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Photographs of sterile outer package barcode stickers affixed to OT scrub books, procedure sheets, and patient discharge summaries detailing batch numbers and expiries.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      WhatsApp &amp; Email Handovers
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Exported WhatsApp Business communication threads between sales representatives and OT in-charges confirming exact implant sizes consumed and patient IPD numbers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      Loaner Set Delivery &amp; Sterilization Logs
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Signed instrumentation dispatch sheets, CSSD autoclave acceptance slips, and field representative physical inspection notes itemizing missing drill bits or detained trays.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      Ledger Statements &amp; Reconciliations
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Itemized distributor statement of accounts segregating admitted billing entries, unapproved debit notes, and pending PO requests across each surgical department.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    6
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      Udyam Registration Certificate
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Active MSME Udyam registration certificate establishing Micro or Small enterprise status prior to supply, unlocking Section 16 compound penal interest and Section 43B(h) leverage.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Deploy Recovery / Dual CTAs */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Action Desk
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Deploy Consignment Recovery: Single Hospital Notice or Batch CSV Desk
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Whether you need to recover from a single delinquent hospital chain holding up ₹5 Lakh in stent consignments or manage aged ledger defaults across 50+ network hospitals, our institutional recovery infrastructure is ready to deploy.
              </p>

              <CardiacStentRecoveryCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal Clarifications
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions: Hospital Implant &amp; Consignment Dues
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Practitioner-grade statutory answers to critical operational questions faced by medical device directors, CFOs, and implant distributors across India.
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-colors hover:border-slate-300"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm select-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                  12
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Primary References
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Authorities, Medical Device Rules &amp; Landmark Precedents
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-3">
                <p>
                  Every legal strategy and procedural action outlined in this playbook is anchored directly in Indian bare acts, central ministry price-control notifications, and binding commercial court precedents:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <span className="font-semibold text-slate-800 text-xs mb-2">
                        {source.title}
                      </span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[11px] font-bold text-[#DC2626] hover:underline inline-flex items-center gap-1"
                      >
                        Inspect Official Statute / Notification &rarr;
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>
                    Reviewed &amp; Authenticated by:{" "}
                    <strong className="text-slate-700">{LEGAL_REVIEWER.name}</strong>,{" "}
                    {LEGAL_REVIEWER.role}
                  </span>
                  <span>Last Verified: November 2026</span>
                </div>
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
