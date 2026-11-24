import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ColdChainRecoveryTableOfContents from "./ColdChainRecoveryTableOfContents";
import ColdChainScenarioTabs from "./ColdChainScenarioTabs";
import ColdChainRecoveryCTA from "./ColdChainRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/cold-chain-vaccine-biologics-temperature-dispute-invoice-recovery";
const EXACT_H1 =
  "Recovering High-Value Oncology, Vaccine & Biologics Receivables: Using Data-Logger & Receiving-Temp Proof Against Rejection Claims";
const META_TITLE = "Cold-Chain Vaccine & Biologics B2B Invoice Recovery";
const META_DESCRIPTION =
  "Single vials cost ₹25,000–₹3L. Prevent hospital pharmacies from blaming 2–8°C cold-chain excursions after signed delivery. Recover dues under BSA s.63.";

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
        alt: formatAltText("Cold Chain Vaccine and Biologics Temperature Dispute Invoice Recovery"),
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
    remedy: "Electronic Temperature Data-Logger Certification",
    statute: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63) & IT Act s.65B",
    timing: "Immediate upon delivery; formalized within 7 days of dispute intimation",
    mechanism: "Produce cryptographic audit trail (PDF/CSV) with SHA-256 hash and NIST calibration certificate accompanied by mandatory s.63 certificate",
    relief: "Incontrovertible proof of continuous 2–8°C holding up to hospital dock; defeats fabricated transit temperature excursion allegations",
    suitability: "Hospitals, cancer centers, and pharmacy chains alleging temperature excursion weeks after taking physical delivery",
    tone: "emerald",
  },
  {
    remedy: "Risk Transfer on Deemed Acceptance",
    statute: "Sale of Goods Act, 1930 (Sections 26, 41, 42 & 43)",
    timing: "At moment of tender and signature on Delivery Challan / Receiving Memo",
    mechanism: "Risk of deterioration passes to institutional buyer upon physical receipt; failure to formally reject within 24–48 hours constitutes absolute acceptance",
    relief: "Transfers liability of post-delivery cold storage breakdowns or power failures entirely onto the hospital administration",
    suitability: "Hospital pharmacies issuing debit notes 15 to 45 days after clean signed delivery following internal walk-in refrigerator breakdowns",
    tone: "emerald",
  },
  {
    remedy: "Statutory MSME 45-Day Rule & 3x RBI Penal Interest",
    statute: "MSMED Act, 2006 (Sections 15, 16 & 18) & Income Tax Act s.43B(h)",
    timing: "Day 46 following delivery or expiration of agreed credit terms (max 45 days)",
    mechanism: "Statutory Advocate Legal Demand Notice followed by petition before State Micro & Small Enterprises Facilitation Council (MSEFC)",
    relief: "Mandatory monthly compound interest at 3 times RBI Bank Rate; triggers corporate tax disallowance on overdue hospital purchases under s.43B(h)",
    suitability: "Udyam-registered biologics distributors, vaccine super-stockists, and specialty pharma C&F agents supplying private hospitals",
    tone: "slate",
  },
  {
    remedy: "WHO GDP & Schedule M Storage Audit Demand",
    statute: "Drugs and Cosmetics Rules, 1945 (Schedule M, Rule 64 & Rule 65)",
    timing: "Inspection and pre-litigation notice stage",
    mechanism: "Demand hospital's daily temperature calibration logs, blood bank alarm records, and Drug Inspector inspection records under threat of DCGI notice",
    relief: "Exposes hospital's internal storage non-compliance and licensing violations, compelling immediate commercial settlement of the unpaid invoice",
    suitability: "Hospitals that refuse to pay for temperature-sensitive batches while concealing internal cold-room compressor failures",
    tone: "slate",
  },
  {
    remedy: "Commercial Summary Suit & Pre-Judgment Attachment",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII & Order XXXVIII Rule 5)",
    timing: "Within 3 years of invoice default date (Commercial Courts Act 2015 threshold)",
    mechanism: "Summary recovery suit based on written PO, tax invoice, signed receiving challan, and certified temperature-logger log",
    relief: "Decree without full trial unless defendant deposits disputed invoice funds in court; pre-judgment attachment of hospital bank accounts",
    suitability: "Corporate hospital chains and healthcare trusts defaulting on liquidated invoices exceeding ₹10 Lakh",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "Can a hospital pharmacy refuse to pay for biologics weeks after delivery alleging cold-chain break?",
    answer:
      "No. Under Sections 41 and 42 of the Sale of Goods Act, 1930, a commercial buyer must inspect goods upon tender and communicate rejection within a reasonable time. In specialized cold-chain pharmaceuticals, industry standards and Good Distribution Practices (GDP) dictate that physical acceptance and signature on a receiving memo with active visual temperature indicators (or a green data-logger LED) constitute acceptance. Once accepted, risk of loss transfers to the hospital under Section 26. A hospital cannot legally assert post-facto transit temperature claims weeks later to evade payment.",
  },
  {
    question: "How does Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA) prove unbroken cold chain?",
    answer:
      "Section 63 of BSA 2023 governs the admissibility of electronic records in Indian courts (replacing Section 65B of the Indian Evidence Act, 1872). When a biologics distributor deploys an autonomous NIST-calibrated digital USB data-logger, the device records time-stamped temperature readings at 5-to-15 minute intervals. By generating an immutable PDF/CSV report directly from the logger and executing a fact-verified Section 63 electronic record certificate detailing device serial numbers, cryptographic hash (SHA-256), and server custody, the distributor establishes court-ready, unimpeachable evidence that the vials remained continuously at 2–8°C up to the hospital receiving dock.",
  },
  {
    question: "What should a distributor do if the hospital receiving clerk signs the POD but leaves the temperature blank?",
    answer:
      "A blank receiving temperature line is a common defense tactic used by hospital clerks to delay payment authorization. To rebut this, the distributor must immediately compile secondary electronic proof: contemporaneous photographs of the green LED indicator taken by the delivery rider at the dock, GPS-enabled vehicle temperature logs, and instant dispatch of the logger readout via WhatsApp and email to the hospital purchase manager within 2 hours of delivery. Under Section 43 of the Sale of Goods Act, retaining the stock without an express written rejection note constitutes deemed acceptance.",
  },
  {
    question: "Can a hospital return custom-procured Named-Patient oncology biologics if the patient dies before infusion?",
    answer:
      "No. Under Sections 18 to 20 of the Sale of Goods Act, 1930, property in specific goods passes to the buyer once the goods are unconditionally appropriated to the contract. Named-Patient Programme (NPP) biologics are bespoke imports ordered specifically on the hospital's named patient requisition. Furthermore, under Schedule M and Good Distribution Practices of the Drugs and Cosmetics Act, 1940, returned temperature-critical biologics cannot be returned into general trade inventory due to chain-of-custody contamination risks. The hospital remains 100% liable for the full invoiced cost.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act help recover overdue vaccine and biologics invoices?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any payment due to a registered Micro or Small Enterprise (MSME) that remains unpaid beyond 45 days (under written contract) or 15 days (without written contract) cannot be claimed by the buyer as an allowable business expenditure in that financial year. The entire purchase amount is added back to the hospital's taxable profit, resulting in an immediate 25%–35% corporate tax penalty. Serving a statutory notice referencing MSME status and s.43B(h) forces hospital CFOs to prioritize settlement before financial year closure.",
  },
  {
    question: "What statutory interest rate applies to delayed cold-chain pharmaceutical invoices under MSMED Act?",
    answer:
      "Under Section 16 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, any institutional buyer who fails to make payment within the statutory timeline is legally liable to pay compound interest with monthly rests at three times (3x) the Bank Rate notified by the Reserve Bank of India. This rate (currently 19.5%–20.25% p.a.) is mandatory and overrides any contrary lower interest clause in the hospital's purchase order.",
  },
  {
    question: "Can a hospital withhold payment across multiple centers if only one satellite clinic reports an issue?",
    answer:
      "No. Under Section 38 of the Sale of Goods Act, 1930, delivery to a designated central warehouse or separate installment deliveries are legally severable. If a corporate hospital accepted delivery of a consolidated consignment at its central depot and subsequently used its own internal logistics to distribute batches to satellite branches, the distributor's contractual obligation terminated upon central delivery. The hospital cannot unilaterally freeze undisputed multi-center invoices, and doing so constitutes unlawful withholding of liquidated debt actionable under CPC Order XXXVII.",
  },
  {
    question: "What is the limitation period to file legal recovery for unpaid biologics invoices in India?",
    answer:
      "Under the Limitation Act, 1963 (Articles 14 and 15), the statutory limitation period to initiate a civil suit or commercial recovery proceeding for goods sold and delivered is three (3) years from the date the invoice becomes due. However, for registered MSMEs filing before the MSEFC under Section 18 of the MSMED Act, prompt action within 90–180 days is recommended to maximize financial leverage under Section 43B(h) and prevent debtor asset dissipation.",
  },
];

export default function ColdChainVaccineBiologicsRecoveryPage() {
  const breadcrumbItems = [
    { label: "B2B Recovery Hubs", href: "/industries/pharma-medical-devices-recovery" },
    { label: "Pharma & MedTech", href: "/industries/pharma-medical-devices-recovery" },
    {
      label: "Cold-Chain Biologics Recovery",
      href: PAGE_URL,
    },
  ];

  const articleSchema = {
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
      worksFor: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-16T09:30:00+05:30",
    dateModified: "2026-11-16T09:30:00+05:30",
    articleSection: "Pharma, Medical Devices & Surgical Distributors B2B Recovery",
    keywords: [
      "vaccine biologics cold chain invoice dispute recovery",
      "2 to 8 degree data logger proof cold chain pharma",
      "hospital rejecting biologics batch alleging cold chain break",
      "oncology specialty drug high value hospital credit recovery",
      "who gdp cold chain delivery acceptance sign off",
      "named patient oncology supply unpaid invoice",
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Protocol for Overcoming Hospital Cold-Chain Rejection & Invoicing Disputes",
    description:
      "A practitioner-grade operational and statutory standard operating procedure (SOP) for vaccine, biologics, and oncology distributors to rebut sham temperature excursion claims and recover unpaid dues under BSA 2023 s.63.",
    totalTime: "P15D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Extraction of Cryptographic Data-Logger Audit Trail",
        text: "Extract NIST-calibrated USB temperature-logger digital readouts (PDF and CSV) with unbroken 5-minute sampling intervals verifying continuous 2–8°C transit compliance.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Execution of BSA 2023 Section 63 Electronic Evidence Certificate",
        text: "Execute a statutory electronic record certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, recording device serial numbers, hash values, and unbroken chain of custody.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Audit of Proof of Delivery & Risk Transfer Point",
        text: "Examine physical receiving slips, dock time-stamps, and delivery challans to verify risk transfer under Sections 26 and 41 of the Sale of Goods Act, 1930.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Service of 15-Day Advocate Statutory Demand Notice",
        text: "Dispatch a fact-verified demand notice demanding immediate invoice clearance, appending certified logger curves, and invoking MSMED Act Section 16 penal interest.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Judicial Escalation via MSEFC Conciliation or Order XXXVII Summary Suit",
        text: "File an electronic petition before the State MSEFC or institute a Summary Suit under Order XXXVII CPC with pre-judgment bank attachment under Order XXXVIII Rule 5.",
      },
    ],
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "B2B Recovery Hubs",
        item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pharma & MedTech",
        item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cold-Chain Biologics Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Specialty Pharma &bull; IND-04 Playbook</span>
            <span className="w-1 h-1 rounded-full bg-red-500" />
            <span>BSA 2023 s.63 &bull; Sale of Goods Act ss.41–44</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Creditor Summary &bull; Cold-Chain Receivables SOP
            </span>
            Single vials of oncology biologics, vaccines, and insulin cost ₹25,000 to ₹3,50,000 each. Specialty distributors extending ₹20 Lakh to ₹1 Crore credit are frequently ambushed when hospital pharmacies invent retrospective &quot;2–8°C cold-chain excursion&quot; claims weeks after delivery. Under the{" "}
            <Link
              href="/industries/pharma-medical-devices-recovery"
              className="text-red-400 hover:text-red-300 underline font-bold"
            >
              Pharmaceuticals &amp; Medical Devices Recovery Framework
            </Link>
            , distributors counter fabricated rejections by executing cryptographic USB temperature-logger certificates under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), establishing risk transfer under Sections 41–44 of the Sale of Goods Act, 1930, and compelling settlement via 3x RBI compound penal interest under the MSMED Act, 2006.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Vial Value Exposure
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100 mt-0.5">
                ₹25K–₹3.5L
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Per Biologic / MAb Unit</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Statutory Evidence Hook
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400 mt-0.5">
                BSA s.63
              </p>
              <p className="text-[11px] text-slate-400 mt-1">NIST Logger Certificate</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Risk-Transfer Standard
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400 mt-0.5">
                SOGA s.42
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Signed Dock Acceptance</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Delayed Penal Interest
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400 mt-0.5">
                3x RBI Rate
              </p>
              <p className="text-[11px] text-slate-400 mt-1">MSMED Act Section 16</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split: Sticky TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <ColdChainRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Cold-Chain Rejection Ambush */}
            <section
              id="heading-rejection-ambush"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Institutional Bottleneck Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Cold-Chain Rejection Ambush: How Hospital Receivers Evade Dues
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  In the super-specialized pharmaceutical distribution ecosystem, suppliers of monoclonal antibodies (e.g., Rituximab, Bevacizumab, Trastuzumab, Pembrolizumab), childhood and rabies vaccines, recombinant insulin, and hematological factor concentrates operate under immense financial exposure. Unlike generic oral solids where individual unit values are modest, single vials in this category regularly invoice between ₹25,000 and ₹3,50,000. Consignments delivered to private tertiary-care hospitals, oncology institutes, and corporate hospital networks routinely total ₹20 Lakh to ₹1.5 Crore.
                </p>
                <p>
                  Because these pharmaceutical formulations are thermolabile biologics, they must be continuously stored and transported within strict temperature bands—predominantly 2°C to 8°C (with certain mRNA or plasma derivatives requiring ultra-cold storage between -20°C and -80°C). When credit terms mature at 30, 45, or 60 days, hospital finance departments face acute working capital shortfalls. Rather than citing cash-flow constraints, hospital pharmacy heads and materials managers fabricate technical rejection claims: they issue retrospective debit notes alleging that the biologics arrived in a degraded or compromised condition due to an alleged transit temperature spike.
                </p>
                <p>
                  Investigations frequently reveal that the cold-chain break did not occur during transit. Instead, the excursion took place <em>inside the hospital&apos;s own premises</em>—triggered by poorly maintained walk-in cold rooms, unmonitored ward domestic refrigerators, weekend power fluctuations where backup DG sets failed to switch, or careless nursing staff leaving cold boxes unpacked at room temperature. Having destroyed high-value biologics internally, the hospital attempts to offload the financial loss onto the distributor by refusing payment on the entire invoice batch.
                </p>
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-semibold text-red-900">
                    <strong>The Commercial Trap:</strong> When distributors rely only on manual paper stamps without continuous cryptographic temperature logs, hospital lawyers assert a &quot;pre-existing quality dispute,&quot; effectively stalling summary court procedures and blocking insolvency actions under the IBC. To counter this, distributors must transition to automated digital evidence protocols.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: 5-Stage Verification Protocol (SVG + Cards) */}
            <section
              id="heading-5stage-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Operational Standard Operating Procedure
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Verification Protocol: From Box Packing to BSA s.63 Sign-Off
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                To guarantee zero evidentiary loopholes in arbitration, Commercial Court, or MSME Facilitation Council proceedings, biologics distributors must enforce this five-stage statutory operational protocol:
              </p>

              {/* Responsive SVG Flowchart (Desktop/Tablet) */}
              <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md mb-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-red-400 mb-4 text-center">
                  Figure 1.0: End-to-End Cold-Chain Electronic Evidentiary Rail &bull; BSA 2023 Protocol
                </p>
                <svg
                  viewBox="0 0 800 160"
                  className="w-full h-auto text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="160"
                >
                  {/* Step 1 */}
                  <rect x="10" y="20" width="135" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="77" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                  <text x="77" y="65" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">NIST Calibration</text>
                  <text x="77" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">USB Logger Active</text>
                  <text x="77" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">2–8°C Pre-Condition</text>
                  <text x="77" y="116" fill="#10B981" fontSize="9" fontWeight="bold" textAnchor="middle">VIP Box Sealed</text>

                  {/* Arrow 1 */}
                  <path d="M150 80 H165" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Step 2 */}
                  <rect x="170" y="20" width="135" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="237" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                  <text x="237" y="65" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">Cold Transit GPS</text>
                  <text x="237" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Active Reefer Van</text>
                  <text x="237" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Continuous Telemetry</text>
                  <text x="237" y="116" fill="#10B981" fontSize="9" fontWeight="bold" textAnchor="middle">Zero Excursion</text>

                  {/* Arrow 2 */}
                  <path d="M310 80 H325" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Step 3 */}
                  <rect x="330" y="20" width="135" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="397" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                  <text x="397" y="65" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">Dock Receiving</text>
                  <text x="397" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">Signed POD Temp</text>
                  <text x="397" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Visual Tag Photo</text>
                  <text x="397" y="116" fill="#F59E0B" fontSize="9" fontWeight="bold" textAnchor="middle">SOGA s.42 Risk Shifts</text>

                  {/* Arrow 3 */}
                  <path d="M470 80 H485" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Step 4 */}
                  <rect x="490" y="20" width="135" height="120" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                  <text x="557" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                  <text x="557" y="65" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">BSA s.63 Audit</text>
                  <text x="557" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">SHA-256 PDF Hash</text>
                  <text x="557" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Advocate Electronic Cert</text>
                  <text x="557" y="116" fill="#10B981" fontSize="9" fontWeight="bold" textAnchor="middle">Court-Ready Proof</text>

                  {/* Arrow 4 */}
                  <path d="M630 80 H645" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Step 5 */}
                  <rect x="650" y="20" width="140" height="120" rx="10" fill="#0F172A" stroke="#EF4444" strokeWidth="2" />
                  <text x="720" y="45" fill="#10B981" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                  <text x="720" y="65" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                  <text x="720" y="82" fill="#94A3B8" fontSize="9" textAnchor="middle">15-Day Demand</text>
                  <text x="720" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">MSMED 3x Interest</text>
                  <text x="720" y="116" fill="#EF4444" fontSize="9" fontWeight="bold" textAnchor="middle">s.43B(h) Tax Shock</text>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      1
                    </span>
                    <span className="text-[11px] font-bold uppercase text-red-600">NIST Packing</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Insert NIST-traceable USB logger into vacuum panel box; log activation timestamp.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <span className="text-[11px] font-bold uppercase text-red-600">Reefer Transit</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    GPS-enabled continuous telemetry with real-time temperature alerts across corridor.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      3
                    </span>
                    <span className="text-[11px] font-bold uppercase text-red-600">Dock Receipt</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Enforce counter-signed delivery challan noting physical box temp &amp; LED status.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      4
                    </span>
                    <span className="text-[11px] font-bold uppercase text-red-600">BSA s.63 Dossier</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Hash PDF log with SHA-256; issue advocate certificate under BSA 2023 Section 63.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      5
                    </span>
                    <span className="text-[11px] font-bold uppercase text-red-600">Legal Demand</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Serve 15-day statutory notice with 3x RBI interest and Section 43B(h) disallowance warning.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Statutory Enforcement Matrix
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: BSA 2023 s.63, Sale of Goods &amp; MSMED Act
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                When hospitals evade multi-lakh cold-chain dues, remedies span evidentiary, commercial contract, and statutory insolvency avenues. The table below outlines the judicial mechanisms available to specialty pharmaceutical creditors:
              </p>

              {/* Desktop Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-4">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3 sm:p-3.5 font-bold">Remedy &amp; Strategic Objective</th>
                      <th className="p-3 sm:p-3.5 font-bold">Governing Statute &amp; Section</th>
                      <th className="p-3 sm:p-3.5 font-bold">Timing / Trigger</th>
                      <th className="p-3 sm:p-3.5 font-bold">Operative Mechanism &amp; Creditor Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-3.5 font-bold text-slate-900 align-top">
                          <span className="block text-slate-900 font-extrabold">{item.remedy}</span>
                          <span className="text-[10px] font-normal text-slate-500 mt-0.5 block">
                            Best for: {item.suitability}
                          </span>
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700 font-semibold align-top whitespace-nowrap">
                          {item.statute}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-600 align-top">
                          {item.timing}
                        </td>
                        <td className="p-3 sm:p-3.5 text-slate-700 align-top">
                          <p className="mb-1 font-medium">{item.mechanism}</p>
                          <p className="text-[11px] text-emerald-700 font-bold">
                            &bull; Relief: {item.relief}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Under Section 16 of the MSMED Act, statutory compound interest is calculated at three times the RBI Bank Rate and is legally immune from contractual reduction.
              </p>
            </section>

            {/* Section 4: 4 Critical Biologics Failure Modes (Interactive Tabs) */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Interactive Failure Mode Scenarios
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                4 Critical Biologics Failure Modes: Temperature Spikes to Sabotage
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Explore the four most common commercial evasion scenarios engineered by hospital purchasing desks, complete with their exact statutory exposure and creditor-side Standard Operating Procedures:
              </p>

              {/* Client Component: Scenario Tabs */}
              <ColdChainScenarioTabs />
            </section>

            {/* Section 5: WHO GDP Protocols vs Sham Excursion Claims */}
            <section
              id="heading-who-gdp-proof"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Quality Compliance &amp; Technical Standards
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                WHO GDP Protocols vs Sham Excursion Claims: Establishing Proof
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  The World Health Organization (WHO) Technical Report Series No. 961 (Annex 9: Good Distribution Practices for Pharmaceutical Products) and Annex 5 (Cold Chain Verification) establish unequivocal international guidelines for temperature-controlled distribution. Under these guidelines, a cold-chain excursion is defined as any event where pharmaceuticals are exposed to temperatures outside the manufacturer&apos;s specified label storage conditions (typically 2°C to 8°C).
                </p>
                <p>
                  However, international regulatory bodies—including the WHO, the US FDA, and the European Medicines Agency (EMA)—explicitly recognize that transient temperature variations (such as brief excursions to 9°C or 10°C during physical door opening or box unsealing for under 15 minutes) do not automatically cause biological denaturing or loss of therapeutic potency. When hospital pharmacies claim total batch rejection based on a brief, non-critical deviation, the distributor has the legal right to demand the manufacturer&apos;s official <em>Stability Data Sheet</em> or <em>Mean Kinetic Temperature (MKT)</em> calculation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                      Distributor&apos;s Affirmative Defense Burden:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-700">
                      <li>Valid calibration certificate for data-logger within 12 months.</li>
                      <li>Continuous recording without missing data packets or clock drift.</li>
                      <li>Visual indicator (Freeze-tag / Warm-mark) verified intact at dispatch.</li>
                      <li>Chain of custody logs from warehouse cold room to hospital receiving dock.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="font-bold text-red-950 text-xs sm:text-sm mb-1.5">
                      Hospital&apos;s Evasion Tactics Exposed:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-red-900">
                      <li>Failing to download data-logger at receiving dock upon delivery.</li>
                      <li>Storing cold boxes on the pharmacy floor for hours before refrigeration.</li>
                      <li>Failing to maintain continuous temperature logs for internal coolers.</li>
                      <li>Blaming delivery when internal ward refrigerators fail over weekends.</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Under Section 106 of the Bharatiya Sakshya Adhiniyam, 2023 (facts especially within knowledge), once the distributor proves delivery of an undamaged, cold box with active temperature readings, the burden of proving that the goods degraded prior to delivery shifts squarely onto the hospital.
                </p>
              </div>
            </section>

            {/* Section 6: Sale of Goods Act s.41–44: Risk Transfer */}
            <section
              id="heading-sale-of-goods-risk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Commercial Law &amp; Risk Transfer
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Sale of Goods Act s.41–44: Risk Transfer on Signed Cold-Box Delivery
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  The statutory bedrock of all B2B pharmaceutical sales in India is the Sale of Goods Act, 1930. The legal transition of risk and ownership is governed by Sections 26, 41, 42, 43, and 44:
                </p>
                <div className="space-y-3">
                  <div className="p-3.5 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Section 26 (Risk Prima Facie Passes with Property):
                    </p>
                    <p className="text-xs text-slate-700 mt-1">
                      Unless otherwise agreed, the goods remain at the seller&apos;s risk until the property therein is transferred to the buyer. When goods are delivered and accepted at the hospital&apos;s premises, the property passes and the goods are thenceforth at the buyer&apos;s risk, whether delivery has been made or not, provided that where delivery has been delayed through the fault of either buyer or seller, the goods are at the risk of the party in fault.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Section 41 (Buyer&apos;s Right of Examining the Goods):
                    </p>
                    <p className="text-xs text-slate-700 mt-1">
                      Where goods are delivered to the buyer which he has not previously examined, he is not deemed to have accepted them unless and until he has had a reasonable opportunity of examining them. In cold-chain logistics, examining temperature-indicator strips or data-logger status takes less than 60 seconds. Signing the receipt without noting an excursion exhausts this opportunity.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border-l-4 border-[#DC2626] rounded-r-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      Section 42 (Acceptance):
                    </p>
                    <p className="text-xs text-slate-700 mt-1">
                      The buyer is deemed to have accepted the goods when he intimates to the seller that he has accepted them, or when the goods have been delivered to him and he does any act in relation to them which is inconsistent with the ownership of the seller, or when after the lapse of a reasonable time, he retains the goods without intimating to the seller that he has rejected them.
                    </p>
                  </div>
                </div>
                <p>
                  Under established judicial precedents across Indian High Courts, holding biological pharmaceuticals in hospital stock for more than 48 hours without a written rejection note constitutes constructive acceptance under Section 42. Any subsequent temperature variation that occurs during internal storage is exclusively at the hospital&apos;s peril.
                </p>
              </div>
            </section>

            {/* Section 7: Overcoming the 'Named-Patient' Oncology Supply Trap */}
            <section
              id="heading-named-patient-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Specialty Oncology Credit Defense
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Overcoming the &apos;Named-Patient&apos; Oncology Supply Non-Payment Trap
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  One of the most financially crippling bottlenecks for oncology distributors is the &quot;Named-Patient Supply&quot; default. Advanced targeted cancer therapies (such as antibody-drug conjugates, immunotherapies, and rare orphan disease biologics) are frequently procured under specific patient requisitions signed by the treating medical oncologist. Due to high unit costs, distributors often source these under urgent air-cargo arrangements.
                </p>
                <p>
                  Tragically, patients undergoing advanced oncology treatment may suffer rapid clinical deterioration, death, or discontinuation of therapy before the drug can be infused. When this occurs, hospital administration frequently instructs its pharmacy to cancel the purchase order, push the unused vials back to the distributor, or refuse payment on the invoice.
                </p>
                <div className="p-4 bg-slate-900 text-white rounded-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                    Legal Rebuttal to Named-Patient Cancellations:
                  </p>
                  <p className="text-xs leading-relaxed text-slate-300">
                    Under Section 18 of the Sale of Goods Act, 1930, where there is a contract for the sale of unascertained goods, no property in the goods is transferred to the buyer unless and until the goods are ascertained. In Named-Patient supplies, goods are ascertained and appropriated to the contract the moment they are ordered and dispatched against the specific patient identifier. Furthermore, Schedule M of the Drugs and Cosmetics Rules prohibits distributors from re-stocking or re-selling biological products once custody has left the validated distribution network. Consequently, the commercial loss remains 100% with the ordering hospital, not the distributor.
                  </p>
                </div>
                <p>
                  Distributors can enforce recovery of Named-Patient invoices through summary recovery proceedings under Order XXXVII of the Code of Civil Procedure, 1908, or by lodging an urgent reference before the MSME Facilitation Council. For further guidance on recovering pharmacy-related dues, review our{" "}
                  <Link
                    href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                    className="text-red-600 hover:text-red-700 underline font-bold"
                  >
                    Pharmacy Invoice Not Cleared Legal Notice Guide
                  </Link>{" "}
                  and our dedicated{" "}
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-red-600 hover:text-red-700 underline font-bold"
                  >
                    Distributor &amp; Dealer Dues Recovery Desk
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 8: Worked Recovery Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Illustrative Numerical Recovery Case
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Worked Recovery Ledger: Rebutting an Arbitrary ₹42,50,000 Rejection
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                The following financial ledger illustrates how an advocate statutory notice dismantled a sham cold-chain excursion claim raised by a 350-bed private oncology hospital against a Delhi-NCR specialty biologics distributor:
              </p>

              {/* Financial Ledger Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-md">
                <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                      Case Study Ledger &bull; Delhi-NCR Biologics Distributor
                    </span>
                    <p className="text-base sm:text-lg font-bold text-white mt-0.5">
                      Supply of 80 Vials Trastuzumab (440 mg) &bull; Batch #TR-2026-08
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Full Recovery Achieved
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Invoiced Principal Amount:</span>
                      <span className="font-bold text-white">₹42,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Delivery Date &amp; POD Stamp:</span>
                      <span className="font-semibold text-slate-200">12 August 2026 (Clean)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Hospital Rejection Debit Note:</span>
                      <span className="font-semibold text-red-400">08 September 2026 (27d Later)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Hospital Allegation:</span>
                      <span className="text-slate-300">Transit temperature spike &gt; 12°C</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">NIST USB Logger Data Readout:</span>
                      <span className="font-bold text-emerald-400">3.4°C to 4.9°C (Continuous)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">BSA 2023 s.63 Certificate Hash:</span>
                      <span className="font-mono text-[10px] text-slate-300">SHA-256 e8f3...a91c</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">MSMED Act s.16 Penal Interest (19.5%):</span>
                      <span className="font-bold text-amber-400">₹2,07,187 (90 Days)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Total Statutory Recovery Claim:</span>
                      <span className="font-extrabold text-white">₹44,57,187</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <p>
                    <strong>Resolution Outcome:</strong> Upon receipt of the Fact-Verified Legal Demand Notice appending the BSA s.63 electronic certificate and citing Income Tax Section 43B(h) disallowance risks, the hospital management conducted an internal inquiry. The audit revealed that on August 24, the hospital&apos;s backup generator circuit breaker tripped during pharmacy maintenance, causing the walk-in cooler to warm to 16°C. Realizing their internal fault was fully exposed, the hospital withdrew the debit note, released ₹42,50,000 principal in full, and paid ₹1,50,000 in negotiated interest charges.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: BSA 2023 Section 63 Digital Evidence Dossier */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Evidentiary Standards &amp; Judicial Admissibility
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Digital Temperature Dossier &amp; Cryptographic Hash
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Under the modernized evidentiary regime established by the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023)</strong>, electronic records are admissible under Section 63 without the need to produce the physical computer or sensor device in court, provided a statutory certificate is executed by a person occupying an official responsible position in relation to the operation of the relevant device or management of the relevant activities.
                </p>
                <p>
                  To secure an unassailable legal dossier against defaulting hospital procurement desks, biologics distributors must assemble the following 6-point evidentiary bundle:
                </p>

                {/* Evidence Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-4">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">
                        1. Manufacturer NIST Calibration Certificate
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Proof that the USB data-logger sensor is NIST-traceable and calibrated within permissible ±0.5°C tolerances.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">
                        2. Cryptographic SHA-256 PDF &amp; CSV Hash
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Digital checksum generated immediately upon logger readout to prove the temperature data points were never altered.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">
                        3. Clean Counter-Signed Proof of Delivery (POD)
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Physical receiving slip signed and stamped by hospital pharmacist, noting unbroken outer seals and visual tag state.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">
                        4. Contemporaneous Dock Arrival Photo Metadata
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Geotagged image of delivery rider presenting cold box at hospital central dock with visible Green LED status.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">
                        5. Vehicle Telemetry &amp; GPS Reefer Logs
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Secondary independent telemetry record from refrigerated van reefer unit confirming unbroken power supply during transit.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">
                        6. Formal Section 63 BSA 2023 Affidavit
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Statutory declaration signed by distributor IT / Logistics Head certifying device integrity and data custody.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Deploy Biologics Legal Recovery (Dual B2B CTAs) */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Actionable Recovery Solutions
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Deploy Biologics Legal Recovery: Single Case Test or Bulk CSV Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Whether you need to recover a single high-value oncology invoice or streamline institutional recoveries across hundreds of defaulted hospital ledgers, LegalRecovery.in provides specialized fact-verified legal solutions:
              </p>

              {/* Client Component: Dual B2B CTAs */}
              <ColdChainRecoveryCTA />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Direct Answers for Credit Managers
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
                Frequently Asked Questions on Cold-Chain &amp; Biologics Dues Recovery
              </h2>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2 shrink-0">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-200">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Authorities & Sibling Links */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  12
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Legal Bibliography &amp; Cross-Links
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Authorities, WHO GDP Guidelines &amp; Precedential Framework
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  This operational guide is drafted in strict alignment with Indian commercial jurisprudence, statutory enactments, and international pharmacopeial cold-chain distribution standards:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Primary Statutes &amp; Rules:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-slate-600">
                      <li>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</li>
                      <li>Sale of Goods Act, 1930 (Sections 18–26, 41–44)</li>
                      <li>Indian Contract Act, 1872 (Sections 73 &amp; 74)</li>
                      <li>Drugs and Cosmetics Rules, 1945 (Schedule M &amp; Rule 65)</li>
                      <li>Micro, Small and Medium Enterprises Development Act, 2006 (ss. 15–18)</li>
                      <li>Income Tax Act, 1961 (Section 43B(h))</li>
                      <li>Code of Civil Procedure, 1908 (Order XXXVII &amp; XXXVIII Rule 5)</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Regulatory &amp; International Standards:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-slate-600">
                      <li>WHO Technical Report Series No. 961, Annex 9 (GDP)</li>
                      <li>WHO Technical Report Series No. 961, Annex 5 (Cold Chain)</li>
                      <li>Central Drugs Standard Control Organization (CDSCO) Guidelines</li>
                      <li>NIST Special Publication 250 (Sensor Calibration)</li>
                      <li>Reserve Bank of India Bank Rate Directives (MSME 3x Interest)</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-slate-900 mb-2">
                    Explore Related Specialized Healthcare &amp; Medical Recovery Playbooks:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery"
                      className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors block"
                    >
                      &rarr; Cardiac Stent &amp; Ortho Implant Consignment Recovery
                    </Link>
                    <Link
                      href="/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery"
                      className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors block"
                    >
                      &rarr; Medical Equipment, Reagent &amp; AMC/CMC Recovery
                    </Link>
                    <Link
                      href="/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery"
                      className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors block"
                    >
                      &rarr; Pharma Expired Goods &amp; Breakage Credit-Note Recovery
                    </Link>
                    <Link
                      href="/pharma-third-party-contract-manufacturing-cdmo-batch-payment-recovery"
                      className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors block"
                    >
                      &rarr; Pharma Third-Party CDMO Batch Payment Recovery
                    </Link>
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors block"
                    >
                      &rarr; MSME Delayed Payment Interest Calculator (3x RBI)
                    </Link>
                    <Link
                      href="/templates/hospital-discharge-pending-bill-undertaking-and-legal-notice"
                      className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors block"
                    >
                      &rarr; Hospital Discharge Pending Bill Undertaking &amp; Notice Pack
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Component */}
      <RelatedRecoveryGuides />
    </div>
  );
}
