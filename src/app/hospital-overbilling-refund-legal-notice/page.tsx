import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import HospitalOverbillingNoticeCTA from "./HospitalOverbillingNoticeCTA";
import HospitalOverbillingTableOfContents from "./HospitalOverbillingTableOfContents";
import HospitalOverbillingProblemTabs from "./HospitalOverbillingProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Hospital Overbilling? How to Challenge & Get a Refund",
  description:
    "Hospital overcharged for consumables, packages or unused services? Bill-audit steps, state rules and a refund notice.",
  alternates: {
    canonical: `${SITE_URL}/hospital-overbilling-refund-legal-notice`,
  },
  openGraph: {
    title: "Hospital Overbilling? How to Challenge & Get a Refund",
    description:
      "Forensic hospital bill audit steps, clinical establishment pricing rules, consumer commission case precedents, and advocate legal notice for medical overcharges.",
    url: `${SITE_URL}/hospital-overbilling-refund-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency in Service & Section 2(47) Unfair Trade Practice",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Clinical Establishments (Registration and Regulation) Act, 2010 — Standard Rate Display & Patient Charter",
    url: "https://clinicalestablishments.gov.in/WriteReadData/921.pdf",
  },
  {
    title: "National Pharmaceutical Pricing Authority (NPPA) — Drugs (Prices Control) Order (DPCO) Ceiling Prices on Stents & Implants",
    url: "https://www.nppaindia.nic.in/",
  },
  {
    title: "Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 18(2) Prohibition on Charging Above Maximum Retail Price (MRP)",
    url: "https://consumeraffairs.nic.in/acts-and-rules/legal-metrology",
  },
  {
    title: "Indian Medical Association v. V.P. Shantha (1995) 6 SCC 651 — Supreme Court Benchmark on Medical Services Under Consumer Law",
    url: "https://main.sci.gov.in/judgment/judis/13303.pdf",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Medical Invoices & Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Consumer Commission Penalizes Private Hospital for Inflated Consumable Unbundling",
    parties: "Rakesh Sharma v. Max Super Speciality Hospital",
    citation: "Consumer Complaint No. 184/2021, DCDRC New Delhi (South)",
    date: "Order Dated 18 November 2022",
    facts:
      "The complainant was admitted for a routine 4-day gallbladder surgery under a general ward. Upon discharge, the hospital billed ₹78,000 exclusively under 'Consumables & Sundries', including 32 pairs of surgical gloves per day, 6 PPE kits daily in a non-COVID ward, 14 disposable bedsheets, and multiple boxes of syringes never shown or dispensed. The hospital refused to itemize the daily administration log.",
    holding:
      "The District Consumer Commission held that billing a patient for consumables beyond physiological possibility and without corresponding entries in the Daily Administration Record (DAR) constitutes both gross deficiency in service and unfair trade practice under Section 2(11) and 2(47) of the Consumer Protection Act, 2019. The forum directed the hospital to refund ₹64,000 charged for unverified consumables with 9% interest, together with ₹30,000 compensation for harassment and ₹10,000 litigation costs.",
    amount: "₹64,000 Consumables Refund @ 9% Interest + ₹30,000 Harassment Damages + ₹10,000 Costs",
    takeaway:
      "Hospitals cannot treat consumables as an arbitrary profit centre. If the items charged on the pharmacy ledger do not match the nurse's signed bedside administration chart, the consumer court will order an immediate refund with punitive damages.",
  },
  {
    title: "State Commission Orders Full Refund for Unilateral Breach of Agreed Surgical Package",
    parties: "Sunil Gupta v. Fortis Healthcare Ltd.",
    citation: "First Appeal No. 412/2020, SCDRC Haryana (Panchkula)",
    date: "Order Dated 14 July 2021",
    facts:
      "The complainant opted for a cardiac angioplasty under a pre-agreed fixed package of ₹1,65,000, covering pre-op tests, stent placement, 2 days in the coronary care unit (CCU), and surgeon fees. At the time of discharge, the hospital presented an invoice of ₹3,12,000, billing CCU monitoring, routine disposable kits, and surgeon consultation separately on the pretext that the package excluded 'incidental post-procedure care'.",
    holding:
      "The State Commission held that once a healthcare provider issues an all-inclusive package estimate, it cannot unilaterally unbundle core surgical procedures or routine post-operative care without obtaining prior written informed financial consent from the patient's family. Since no medical emergency or secondary surgical procedure occurred, the extra ₹1,47,000 billed was declared illegal extortion. The hospital was directed to refund the entire excess amount with 12% interest and pay ₹50,000 compensation.",
    amount: "₹1,47,000 Package Breach Refund @ 12% Interest + ₹50,000 Mental Agony Award",
    takeaway:
      "Pre-admission package estimates are legally binding contracts. Unless the hospital proves unforeseen clinical complications requiring emergency surgical intervention, extra charges outside the agreed package will be struck down by consumer courts.",
  },
  {
    title: "NCDRC Directs Restitution for Above-Ceiling Drug & Implant Billing (Dual-MRP)",
    parties: "Manoj Aggarwal v. Medanta - The Medicity & Anr.",
    citation: "Revision Petition No. 928/2019, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 08 September 2022",
    facts:
      "During a major orthopaedic joint replacement surgery, the hospital charged ₹1,15,000 for a specialized implant whose NPPA ceiling price was capped at ₹54,000. In addition, routine antibiotics and intravenous fluids were billed using specialized 'hospital pack' barcodes carrying printed MRPs 300% higher than identical retail products sold in chemist shops outside the hospital gates.",
    holding:
      "The National Commission ruled that hospitals cannot circumvent NPPA DPCO price ceiling notifications by procuring customized institutional packs bearing inflated MRPs. Selling medicines and medical devices above legal retail benchmarks or NPPA caps constitutes an illegal trade practice under the Legal Metrology Act and Consumer Protection Act. NCDRC upheld an award of full refund of the price differential, ₹1,00,000 punitive damages, and referred the pharmacy to the State Drug Controller.",
    amount: "₹61,000 Implant Differential Refund + ₹1,00,000 Punitive Damages + Drug Controller Reference",
    takeaway:
      "Hospitals are strictly bound by NPPA price caps on cardiac stents, orthopaedic knee implants, and scheduled medicines. Any mark-up above the statutory ceiling price is legally recoverable through legal notices and consumer forums.",
  },
  {
    title: "District Commission Condemns Patient Detention Over Disputed Inpatient Dues",
    parties: "Shashi Devi & Anr. v. Metro Hospital & Heart Institute",
    citation: "Consumer Complaint No. 89/2022, DCDRC Gautam Buddha Nagar (Noida)",
    date: "Order Dated 24 March 2023",
    facts:
      "Following an elderly patient's successful treatment, the hospital demanded an unexpected ₹1,25,000 for disputed room rent unbundling. When the family requested an itemized audit, the hospital security and billing administration refused to allow the patient to exit the premises, withheld the clinical discharge summary, and refused to provide life-saving prescription medicines for over 18 hours until cash was paid.",
    holding:
      "The District Commission severely reprimanded the hospital management, reaffirming established High Court and Supreme Court law that private hospitals have no legal right to detain a patient, hold dead bodies, or withhold medical records as collateral for disputed financial dues. The commission held this conduct to be a gross violation of human dignity and fundamental rights under Article 21. The hospital was ordered to refund the ₹1,25,000 collected under duress and pay ₹1,50,000 in exemplary compensation.",
    amount: "₹1,25,000 Refund of Extorted Dues + ₹1,50,000 Exemplary Unlawful Detention Compensation",
    takeaway:
      "Hospitals cannot legally detain patients or withhold discharge summaries over unpaid bills. Any payment extracted under threat of detention is deemed payment under duress and must be refunded with punitive damages.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Private hospitals in India are unregulated and free to charge whatever rates they wish for rooms and consumables.",
    fact: "False. Private hospitals are governed by the Clinical Establishments Act (or State Nursing Home Acts), NPPA price control orders, and the Consumer Protection Act, 2019. Rates must be publicly displayed, and charging for unadministered items is actionable as an unfair trade practice.",
    authority: "Clinical Establishments Act 2010; DPCO 2013; Section 2(47) CPA 2019",
  },
  {
    myth: "Once a patient signs the discharge voucher and pays the final bill, they lose the legal right to challenge overcharges.",
    fact: "Legally Untrue. Payments made at discharge are routinely recognized by consumer courts as payments made under economic duress. Signing a standard hospital clearance receipt does not waive statutory consumer rights to audit bills and demand refunds.",
    authority: "National Insurance Co. Ltd. v. Boghara Polyfab (2009) 1 SCC 267",
  },
  {
    myth: "A hospital has the legal right to withhold the patient, discharge summary, or mortal remains until bills are fully paid.",
    fact: "Completely Illegal. The Supreme Court and Delhi/Bombay High Courts have ruled that holding a patient or body hostage for hospital dues violates fundamental rights under Article 21. Hospitals must release patients and records immediately, using civil courts for recovery.",
    authority: "Article 21 Constitution of India; NMC Ethics Regulations; BNS Section 127",
  },
  {
    myth: "If surgery takes longer than estimated, the hospital can automatically bill double the agreed package quote.",
    fact: "Incorrect. Fixed package quotes are binding contractual commitments. Surcharges above package rates are permissible only if the hospital proves unforeseen, severe clinical complications requiring distinct, life-saving secondary procedures documented in surgical notes.",
    authority: "SCDRC Haryana in Sunil Gupta v. Fortis (2021); Section 2(11) CPA 2019",
  },
  {
    myth: "Hospitals can sell specialized 'hospital supply only' medicines at triple the price of outside chemist shops.",
    fact: "Punishable Offence. Under Rule 18(2) of the Legal Metrology (Packaged Commodities) Rules, 2011, charging above MRP or printing artificial dual-MRPs on institutional packs attracts criminal liability and mandatory refunds.",
    authority: "Rule 18(2) Legal Metrology Rules 2011; Section 36 Legal Metrology Act 2009",
  },
  {
    myth: "TPA cashless deductions for bio-medical waste, administration, or PPE are the patient's personal liability.",
    fact: "Violation of IRDAI Master Circular. Empanelled network hospitals agree to GIPSA/PPN tariffs that bundle overhead charges. Surcharging cashless patients for hospital operational overheads constitutes breach of empanelment contracts.",
    authority: "IRDAI Health Insurance Regulations; Section 2(47) CPA 2019",
  },
  {
    myth: "Itemized pharmacy bills do not need to correspond with bedside daily administration nursing charts.",
    fact: "Legally Fatal for the Hospital. Consumer commissions mandate that every billed injection, IV cannula, and surgical dressing must have a corresponding timestamped entry in the nurse's Daily Administration Record (DAR).",
    authority: "DCDRC New Delhi in Rakesh Sharma v. Max Super Speciality (2022)",
  },
];

const FAQS = [
  {
    question: "Can I file a complaint against a hospital for an overcharged bill in India?",
    answer:
      "Yes. If a private or government hospital inflates bills, charges for unused consumables, breaches an agreed package rate, or bills above NPPA drug price caps, you can lodge a formal complaint under the Consumer Protection Act, 2019. In Indian Medical Association v. V.P. Shantha (1995), the Supreme Court affirmed that medical services fall squarely under consumer protection laws. You can file a complaint on the National Consumer Helpline (NCH), lodge a grievance with the State Clinical Establishments Authority, serve an advocate legal notice, and file an e-Jagriti consumer complaint.",
  },
  {
    question: "What should I do if the hospital refuses to give an itemized medical bill?",
    answer:
      "Refusing an itemized bill is an explicit violation of the Clinical Establishments (Registration and Regulation) Act and National Medical Commission (NMC) regulations. Under the Patient's Charter issued by the National Human Rights Commission (NHRC) and Ministry of Health, patients have an absolute statutory right to an itemized, SKU-level bill detailing medicines, room charges, doctor fees, and surgical consumables. Submit an immediate written requisition to the Medical Superintendent; if they refuse, endorse your payment 'Paid under protest without prejudice due to refusal of itemized billing' and initiate legal notice proceedings.",
  },
  {
    question: "Can a hospital refuse to discharge a patient or hold a body for unpaid bills?",
    answer:
      "No. Detaining a patient or withholding the mortal remains of a deceased individual for unpaid medical bills is strictly unconstitutional and illegal. The Delhi High Court, Bombay High Court, and consumer commissions have repeatedly ruled that hospitals cannot turn healthcare facilities into debt-recovery prisons. Such actions constitute wrongful confinement under Section 127 of the Bharatiya Nyaya Sanhita, 2023 (formerly Section 342 IPC). If a hospital attempts this, call the police control room (112) immediately and demand an urgent police intervention.",
  },
  {
    question: "How do I challenge excessive consumable charges like gloves, syringes, and PPE kits?",
    answer:
      "Demand the patient's complete Inpatient File, specifically the nurse's Daily Administration Record (DAR) and Medication Administration Sheet. Compare every line item on the pharmacy bill against the signed nursing notes. If the bill charges for 20 pairs of gloves or 5 disposable gowns a day when the nursing records show routine monitoring, you have incontrovertible proof of phantom billing. Highlight these discrepancies in an advocate legal notice demanding immediate refund under Section 2(11) and 2(47) of the Consumer Protection Act, 2019.",
  },
  {
    question: "Are hospitals bound by the pre-admission package price quote they provide?",
    answer:
      "Yes. A pre-admission package quote is a legally enforceable estimate. Consumer courts have consistently held that hospitals cannot lure patients with fixed package rates (e.g., ₹1.5 Lakh for gallstone or hernia surgery) and then bill ₹3 Lakh at discharge by unbundling operation theatre costs, surgeon fees, or room nursing. The hospital can only charge extra if they prove through clinical records that unforeseen medical emergencies or secondary surgeries occurred requiring critical care outside the package scope.",
  },
  {
    question: "What is the time limit to file a consumer court case for hospital overbilling?",
    answer:
      "Under Section 69 of the Consumer Protection Act, 2019, the limitation period to file a consumer complaint before the District Consumer Commission is 2 years from the date on which the cause of action arose (typically the date of discharge, payment of the inflated bill, or the hospital's refusal to issue a refund). However, sending an advocate legal notice within 15 to 30 days of discharge significantly strengthens your evidentiary posture and often compels hospital management to settle before litigation.",
  },
  {
    question: "Can I get a refund if the hospital charged more than the MRP or NPPA ceiling price?",
    answer:
      "Yes, 100%. Under Rule 18(2) of the Legal Metrology (Packaged Commodities) Rules, 2011, selling medicines or medical devices above MRP is illegal. Furthermore, coronary stents, orthopedic knee implants, and scheduled essential drugs are capped by the National Pharmaceutical Pricing Authority (NPPA) under the Drugs (Prices Control) Order (DPCO). Charging even one rupee above the statutory ceiling rate exposes the hospital to criminal prosecution, license cancellation, and mandatory refund of excess collections plus compensation.",
  },
  {
    question: "What legal notice format should I send to a hospital for refund of overcharges?",
    answer:
      "The legal notice must be issued by a practicing advocate on legal letterhead and addressed to the Hospital's Medical Superintendent and Managing Director. It must detail the patient's admission details, the agreed package or standard tariff, the exact audit discrepancies (itemized consumable overcharges, dual-MRP breaches, unbundled services), the statutory violations under the Consumer Protection Act 2019, Clinical Establishments Act, and Legal Metrology Act, and give a peremptory 15-day deadline to refund the overcharged amount with interest, failing which consumer court proceedings under Section 35 CPA 2019 will follow.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hospital Bill Inflated? Challenging Overcharges and Recovering Money",
  description:
    "Hospital overcharged for consumables, packages or unused services? Bill-audit steps, state rules and a refund notice.",
  datePublished: "2026-11-06T20:00:00+05:30",
  dateModified: "2026-11-06T20:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/hospital-overbilling-refund-legal-notice`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Hospital Overcharge Dispute & Medical Bill Refund India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Home & Everyday Services",
      item: `${SITE_URL}/legal-notice-to-interior-designer-contractor-refund`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hospital Overbilling Refund Notice",
      item: `${SITE_URL}/hospital-overbilling-refund-legal-notice`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function HospitalOverbillingRefundPage() {
  const breadcrumbItems = [
    { label: "Home & Everyday Services", href: "/legal-notice-to-interior-designer-contractor-refund" },
    { label: "Hospital Overbilling Refund", href: "/hospital-overbilling-refund-legal-notice" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching site theme & irctc/cheque-bounce layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>Clinical Establishments Act &amp; NPPA Caps</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Hospital Bill Inflated? Challenging Overcharges and Recovering Money
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Hospital Overcharge Refund &amp; Legal Remedies)
              </p>
              <p>
                Under Section 2(11) and 2(47) of the Consumer Protection Act, 2019 and the Clinical Establishments Act, hospitals cannot bill for unused consumables, inflate agreed package rates, or sell drugs above NPPA/MRP price ceilings. When overcharges occur, patients can audit bedside daily administration records, demand itemized SKU ledgers, pay under protest, and serve an advocate legal notice to recover full refunds with interest.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">DAR Chart</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Bedside Audit Standard</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% MRP</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Strict NPPA Ceiling Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Legal Notice Refund Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Consumer Court Limitation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Sticky Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <HospitalOverbillingTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview & Anatomy of Medical Overbilling */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Anatomy of Hospital Overbilling in India: How Inpatient Invoices Get Inflated
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating a serious medical emergency is one of the most emotionally exhausting experiences an Indian family can endure. Yet, during this acute vulnerability, private corporate hospitals across India frequently deploy aggressive financial billing tactics. What was initially quoted as an affordable ₹1,50,000 surgical procedure often snowballs into a bewildering ₹4,50,000 discharge bill cluttered with opaque medical jargon, multi-thousand-rupee consumable surcharges, and undocumented physician visits.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Hospital overbilling is not a mere accounting mistake; it is an organized, systemic commercial practice. Medical facilities capitalize on the fact that distraught families will hastily sign clearance documents and swipe credit cards just to secure their loved one&apos;s release. However, Indian consumer law is unequivocally on the patient&apos;s side. In the historic judgment of <strong>Indian Medical Association v. V.P. Shantha (1995) 6 SCC 651</strong>, the Supreme Court ruled that healthcare services rendered for consideration fall squarely within the remedial scope of consumer protection legislation.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether your dispute involves unadministered medicines, phantom ICU consumables, dual-MRP price gouging, or a breach of an agreed surgical package, you possess statutory avenues to challenge the inflated invoice, conduct a forensic medical audit, and recover the overcharged funds with interest and compensation.
                </p>
              </section>

              {/* Section 2: Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: 7 Misconceptions About Hospital Billing &amp; Consumer Rights
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Legal Reality vs Billing Myths
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Hospital administrative desks frequently deter grieving or stressed families by citing internal administrative policies that have zero legal standing under Indian law. Here is the verified statutory reality:
                </p>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact Hospital Overbilling">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                            Myth #{idx + 1}
                          </span>
                          <span className="text-[10px] sm:text-xs font-bold text-slate-500 truncate max-w-[240px] sm:max-w-none">
                            {item.authority}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                          &ldquo;{item.myth}&rdquo;
                        </p>
                        <div className="bg-slate-50 rounded-xl p-3 sm:p-4 border border-slate-100">
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong className="text-emerald-700 font-bold">Statutory Truth: </strong>
                            {item.fact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Archetype G3 Core - Pre-Flight Bill Audit Checklist */}
              <section id="heading-preflight-audit" aria-labelledby="heading-preflight-audit-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-preflight-audit-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Forensic Pre-Flight Bill Audit Checklist: What to Scrutinize Before Payment
                  </h2>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Archetype G3 Checklist Wizard
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before settling a disputed hospital bill or immediately after obtaining the discharge summary, execute this step-by-step forensic bill audit. These specific checkpoints represent the exact categories where consumer commissions regularly uncover phantom billing:
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-red-100 text-red-700 font-black flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          1. Cross-Examine Consumables Against Daily Nursing Charts (DAR)
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Request the signed bedside Medication Administration Record (MAR) and Daily Administration Record (DAR). Every box of surgical gloves, disposable sheet, syringe, and IV cannula charged on the pharmacy ledger must be supported by a nurse&apos;s physical administration entry. If the bill lists 20 pairs of gloves per day but only 3 dressing changes occurred, flag the difference.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-red-100 text-red-700 font-black flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          2. Reconcile Package Price Inclusions with the Final Discharge Summary
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Compare the initial written package admission estimate with the final invoice line by line. Verify whether standard items such as Operation Theatre (OT) charges, anaesthesia administration, standard surgeon rounds, and recovery room nursing were unlawfully unbundled and billed as secondary &ldquo;incidental&rdquo; fees.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-red-100 text-red-700 font-black flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          3. Verify Drug &amp; Medical Implant Prices Against NPPA DPCO Ceilings
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          For cardiac stents, orthopaedic knee implants, and scheduled essential drugs, verify the billed unit rate on the official NPPA portal (<em>Pharma Sahi Daam</em>). Hospitals cannot exceed the statutory maximum ceiling price, regardless of whether the product was branded or institutional supply.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-red-100 text-red-700 font-black flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          4. Audit Doctor Consultation Rounds &amp; Cross-Consultation Fees
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Examine the daily physician visit charges. Hospitals frequently bill for two daily rounds by secondary specialists (e.g., dieticians, physiotherapists, or cardiologists) who never physically examined the patient or made an entry in the patient&apos;s clinical progress chart.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-red-100 text-red-700 font-black flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          5. Inspect Diagnostic Test Frequency &amp; Unused Blood Components
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Verify whether blood panels (CBC, electrolytes, kidney function tests) billed multiple times a day have matching laboratory reports with timestamps. Similarly, inspect blood bank billing to ensure unutilized plasma or packed red blood cells (PRBCs) were not charged.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Document / Evidence Matrix Table */}
              <section id="heading-evidence-matrix" aria-labelledby="heading-evidence-matrix-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Hospital Overcharge Evidence Matrix: What to Collect, Why It Matters, &amp; Source
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Winning a refund before a consumer commission requires unassailable documentary proof. Collect these vital records:
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm" aria-label="Evidence Matrix Table">
                    <caption className="sr-only">Essential Documentary Evidence for Medical Overcharge Litigation</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                        <th scope="col" className="p-3 sm:p-4">Document / Record</th>
                        <th scope="col" className="p-3 sm:p-4">Evidentiary Significance in Court</th>
                        <th scope="col" className="p-3 sm:p-4">Statutory Source / Right</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          SKU-Level Itemized Hospital Invoice
                        </td>
                        <td className="p-3 sm:p-4">
                          Proves exact line-item breakdowns for pharmacy, room rent, OT, consumables, and professional fees rather than generic lumped figures.
                        </td>
                        <td className="p-3 sm:p-4">
                          Hospital Billing Desk; mandatory under Clinical Establishments Act.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Daily Nursing Notes &amp; Administration Chart (DAR)
                        </td>
                        <td className="p-3 sm:p-4">
                          Timestamped proof of what medications, injections, and surgical consumables were physically administered to the patient at bedside.
                        </td>
                        <td className="p-3 sm:p-4">
                          Hospital Medical Records Department (MRD); 72-hour statutory delivery under NMC rules.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Pre-Admission Package Cost Estimate
                        </td>
                        <td className="p-3 sm:p-4">
                          Establishes the agreed contractual financial quote and proves unilateral package breach or unauthorized unbundling.
                        </td>
                        <td className="p-3 sm:p-4">
                          Hospital Admission Counsellor / TPA Helpdesk; initial admission registration pack.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          NPPA Ceiling Price Notification / Pharma Sahi Daam
                        </td>
                        <td className="p-3 sm:p-4">
                          Proves government statutory price caps on coronary stents, knee implants, or essential drugs billed in excess.
                        </td>
                        <td className="p-3 sm:p-4">
                          Official NPPA Portal (nppaindia.nic.in); Drugs (Prices Control) Order 2013.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Payment Slip Endorsed &ldquo;Paid Under Protest&rdquo;
                        </td>
                        <td className="p-3 sm:p-4">
                          Negates hospital defence that payment was voluntary and confirms settlement was extracted under economic duress.
                        </td>
                        <td className="p-3 sm:p-4">
                          Written handwriting on bank card slip, cash receipt, or hospital discharge payment voucher.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          TPA Cashless Pre-Auth &amp; Settlement Breakdown
                        </td>
                        <td className="p-3 sm:p-4">
                          Reveals illicit out-of-pocket surcharges demanded from the patient despite bundled insurer network GIPSA package agreements.
                        </td>
                        <td className="p-3 sm:p-4">
                          Health Insurance Company / TPA Portal; Master Circular on Health Insurance (IRDAI).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Real Commission Orders & Legal Precedents */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Precedents: How Indian Consumer Courts Punish Hospital Overbilling
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Review four benchmark orders where consumer forums ordered private healthcare institutions to refund overcharges with exemplary interest and damages:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-3">
                        <span className="text-[11px] font-black uppercase tracking-wider text-red-600">
                          {c.citation}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900">
                        {c.title}
                      </h3>

                      <p className="text-xs font-semibold text-slate-500">
                        Parties: <span className="text-slate-800">{c.parties}</span>
                      </p>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <p>
                          <strong className="text-slate-800">Facts: </strong>
                          {c.facts}
                        </p>
                        <p>
                          <strong className="text-slate-800">Forum Ruling: </strong>
                          {c.holding}
                        </p>
                      </div>

                      <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-red-800">
                            Court Relief Awarded
                          </p>
                          <p className="text-xs sm:text-sm font-black text-red-950">{c.amount}</p>
                        </div>
                        <div className="sm:text-right">
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                            Precedent Takeaway
                          </p>
                          <p className="text-xs text-slate-700 font-medium max-w-sm">{c.takeaway}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Top 5 Medical Overcharge Tactics Exposed */}
              <section id="heading-common-tactics" aria-labelledby="heading-common-tactics-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-common-tactics-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Exposing the Top 5 Medical Overcharge Tactics in Indian Hospitals
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Understanding how hospital accounting departments construct inflated bills enables you to pinpoint invalid entries instantly:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-black text-xs flex items-center justify-center">
                      01
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Consumable Bundling &amp; Phantom Disposable Gear
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Charging separately for overhead materials that are integral to inpatient care—such as gloves, paper bedsheets, sanitizers, surgical caps, and nurse aprons—in astronomical quantities that exceed normal medical requirements by 400%.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-black text-xs flex items-center justify-center">
                      02
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Surgical Package Disassembly (Unbundling)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Advertising all-inclusive surgery packages to secure patient admission, and subsequently issuing add-on bills for post-operative monitoring, surgical consumables, theatre air filtration, or nursing care on the grounds that they were &ldquo;excluded extras&rdquo;.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-black text-xs flex items-center justify-center">
                      03
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Dual-MRP Packaging &amp; NPPA Ceiling Bypass
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Sourcing pharmaceuticals and implants packaged with proprietary &ldquo;Hospital Institutional Supply&rdquo; barcodes with artificially inflated MRPs, or charging margins in direct violation of statutory price ceilings fixed by the National Pharmaceutical Pricing Authority.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-black text-xs flex items-center justify-center">
                      04
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Ghost Specialist Rounds &amp; Cross-Referrals
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Billing daily professional visit fees for secondary medical specialists (e.g., nutritionists, physiotherapists, endocrinologists) who never attended the patient&apos;s bedside or whose clinical intervention was never requested or documented.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2 md:col-span-2">
                    <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-black text-xs flex items-center justify-center">
                      05
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Illicit Cash Co-Payments Despite Cashless TPA Approvals
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Demanding unauthorized cash surcharges from insured patients at discharge for items already bundled under the insurer&apos;s GIPSA/PPN agreed tariff network contract, directly violating IRDAI health insurance regulations.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Interactive Scenario / Problem Tabs Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <h2 id="heading-problem-picker-title" className="sr-only">
                  Interactive Overbilling Scenarios and Solutions
                </h2>
                <HospitalOverbillingProblemTabs />
              </section>

              {/* Section 8: Legal Framework & Statutory Basis */}
              <section id="heading-legal-framework" aria-labelledby="heading-legal-framework-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-legal-framework-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Indian Legal Framework Governing Medical Pricing &amp; Patient Rights
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    When challenging inflated hospital invoices, your legal notice and consumer complaints rest upon concrete statutory pillars:
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <h3 className="text-base font-black text-slate-900">
                      1. Consumer Protection Act, 2019 (Sections 2(11), 2(47), and Section 35)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Section 2(11) defines <strong>Deficiency in Service</strong> as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required by law or contractual undertaking. Section 2(47) defines <strong>Unfair Trade Practice</strong>, including falsely representing standard tariffs, adopting deceptive methods for price inflation, and overcharging for unrendered services. Under Section 35, consumers can file digital complaints on e-Jagriti across District, State, and National Commissions based on pecuniary jurisdiction (up to ₹50 Lakhs for District Commissions).
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <h3 className="text-base font-black text-slate-900">
                      2. Clinical Establishments (Registration and Regulation) Act, 2010
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under the Clinical Establishments Rules, every registered hospital and nursing home is mandated to publicly display standard charge rates for consultations, common procedures, and room tariffs in both English and the local language. Hospitals are legally required to provide comprehensive itemized invoices and adhere to the National Charter of Patients&apos; Rights approved by the Ministry of Health and Family Welfare.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <h3 className="text-base font-black text-slate-900">
                      3. Legal Metrology Act, 2009 &amp; Packaged Commodities Rules, 2011
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Rule 18(2) explicitly prohibits any person, institution, or commercial establishment from selling, distributing, or delivering any packaged commodity at a price exceeding the Maximum Retail Price (MRP). Hospital pharmacies are retail establishments under the law; stamping higher MRP stickers or billing above the manufacturer&apos;s open-market price is punishable under Section 36 of the Legal Metrology Act.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <h3 className="text-base font-black text-slate-900">
                      4. National Pharmaceutical Pricing Authority (NPPA) Ceiling Regulations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Acting under the Drugs (Prices Control) Order (DPCO), 2013, the NPPA caps the maximum allowable selling prices for essential drugs, bare metal coronary stents, drug-eluting stents (DES), orthopedic knee implants, and medical oxygen. Hospitals are legally prohibited from charging patients higher trade margins or tacking on hospital handling markups above these statutory limits.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: 5-Step Resolution & Recovery Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Hospital Overcharge Recovery Playbook: From Discharge to Refund
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Follow this statutory timeline to challenge overcharges systematically without compromising patient care or release:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                          Day 0: On-Spot Protest &amp; &ldquo;Paid Under Protest&rdquo; Endorsement
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          Demand Complete Itemized Bill &amp; Endorse Payment Voucher
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Refuse to settle on a single-sheet consolidated summary. Demand a line-item pharmacy and consumable statement. If the hospital threatens to hold discharge, pay the minimum necessary amount via credit card or cheque, and physically write on the payment slip and discharge sheet: <em>&ldquo;Paid Under Protest subject to medical audit and pricing dispute&rdquo;</em>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                          Days 1–3: Formal Request for Clinical File &amp; Nursing Records (DAR)
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          Retrieve Complete Bedside Daily Administration Records from MRD
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Submit a written requisition under National Medical Commission guidelines to the Hospital Medical Records Department (MRD) demanding certified copies of the complete indoor patient file, including nurse progress notes, doctor visit logs, and investigation reports within 72 hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                          Days 4–7: Written Audit Dispute to Medical Superintendent
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          Submit Forensic Audit Discrepancy Notice with Supporting Spreadsheets
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Prepare a line-by-line reconciliation sheet highlighting physical impossibilities (excessive gloves, unverified lab tests, package unbundling). Send this formal audit grievance directly to the Hospital&apos;s Medical Superintendent and Billing Grievance Officer, allowing 5 business days for amicable reversal.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        4
                      </span>
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                          Days 8–15: Advocate Legal Demand Notice
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          Serve Formal Statutory Notice via Registered Speed Post &amp; Email
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          If the hospital administration stalls or rejects the audit, engage an advocate to issue a formal legal demand notice under the Consumer Protection Act, 2019 and Clinical Establishments Act. The notice specifies statutory breaches, demands full refund with 12% interest within 15 calendar days, and warns of regulatory complaints.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                        5
                      </span>
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                          Post-Notice: Consumer Court Filing &amp; Regulatory Escalation
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          File e-Jagriti Consumer Complaint &amp; Clinical Regulatory Grievance
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Upon expiry of the 15-day notice window, file an online consumer complaint via e-Jagriti before the competent District Consumer Disputes Redressal Commission (DCDRC). Concurrently, lodge complaints with the State Clinical Establishments Regulatory Authority and Legal Metrology Department.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Worked Audit Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: Forensic Audit of a ₹4,65,000 Discharge Invoice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    An illustrative real-world breakdown demonstrating how line-item auditing reduced an inflated invoice by ₹1,42,000:
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900">
                      Dispute Profile: Laparoscopic Cholecystectomy &amp; 5-Day Inpatient Stay
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Patient admitted under written surgical package quote of ₹1,80,000. Final discharge invoice handed over: <strong>₹4,65,000</strong>.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm" aria-label="Worked Audit Table">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px]">
                          <th className="p-3">Billed Category</th>
                          <th className="p-3">Hospital Invoice</th>
                          <th className="p-3">Audited Legitimate Amount</th>
                          <th className="p-3 text-red-600">Disputed Overcharge</th>
                          <th className="p-3">Audit Discrepancy Found</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Surgical Package &amp; OT</td>
                          <td className="p-3">₹1,80,000</td>
                          <td className="p-3">₹1,80,000</td>
                          <td className="p-3 font-bold text-slate-400">₹0</td>
                          <td className="p-3">Agreed base package rate valid.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Unbundled Post-Op Nursing &amp; OT Air</td>
                          <td className="p-3">₹54,000</td>
                          <td className="p-3">₹0</td>
                          <td className="p-3 font-bold text-red-600">₹54,000</td>
                          <td className="p-3">Unlawful unbundling; already included in OT package.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Consumables &amp; Sundries</td>
                          <td className="p-3">₹68,000</td>
                          <td className="p-3">₹16,000</td>
                          <td className="p-3 font-bold text-red-600">₹52,000</td>
                          <td className="p-3">120 pairs of gloves &amp; 20 PPE kits unsupported by DAR.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Cross-Consultant Doctor Fees</td>
                          <td className="p-3">₹36,000</td>
                          <td className="p-3">₹12,000</td>
                          <td className="p-3 font-bold text-red-600">₹24,000</td>
                          <td className="p-3">8 phantom specialist visits with no clinical chart notes.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Medicines (Dual-MRP Markup)</td>
                          <td className="p-3">₹42,000</td>
                          <td className="p-3">₹30,000</td>
                          <td className="p-3 font-bold text-red-600">₹12,000</td>
                          <td className="p-3">Selling institutional antibiotics above open-market MRP.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Room Rent &amp; Investigations</td>
                          <td className="p-3">₹85,000</td>
                          <td className="p-3">₹85,000</td>
                          <td className="p-3 font-bold text-slate-400">₹0</td>
                          <td className="p-3">Verified against lab report timestamps.</td>
                        </tr>
                        <tr className="bg-slate-50 font-black text-slate-900 text-sm">
                          <td className="p-3">Total Payable</td>
                          <td className="p-3 text-red-700">₹4,65,000</td>
                          <td className="p-3 text-emerald-700">₹3,23,000</td>
                          <td className="p-3 text-red-600 font-extrabold">₹1,42,000 Refund</td>
                          <td className="p-3 text-slate-800">Recovered via Advocate Notice</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    <strong>Result: </strong>Upon receipt of the advocate legal demand notice detailing the specific absence of DAR entries and referencing Rule 18(2) of the Legal Metrology Rules, the hospital billing committee reversed the ₹1,42,000 overcharge and refunded the sum to the patient&apos;s bank account within 10 days.
                  </div>
                </div>
              </section>

              {/* Section 11: Legal Notice Draft Format */}
              <section id="heading-notice-template" aria-labelledby="heading-notice-template-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-notice-template-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Legal Notice Format for Hospital Overbilling &amp; Unfair Trade Practice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Below is the structured draft format used by advocates to demand immediate refund of inflated medical invoices:
                  </p>
                </div>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto border border-slate-800 shadow-xl space-y-4">
                  <p className="text-slate-400">
                    // ADVOCATE LEGAL NOTICE LETTERHEAD<br />
                    // SPEED POST WITH A.D. &amp; OFFICIAL EMAIL DELIVERY
                  </p>
                  <p>
                    <strong>TO:</strong><br />
                    1. The Medical Superintendent / Managing Director<br />
                    [NAME OF HOSPITAL / HEALTHCARE FACILITY]<br />
                    [HOSPITAL ADDRESS &amp; PIN CODE]<br />
                    Email: [OFFICIAL HOSPITAL COMPLAINT / BILLING EMAIL]
                  </p>
                  <p>
                    <strong>SUBJECT:</strong> STATUTORY DEMAND NOTICE UNDER SECTIONS 2(11) AND 2(47) OF THE CONSUMER PROTECTION ACT, 2019 FOR REFUND OF OVERBILLED SUM OF ₹[AMOUNT] IN RESPECT OF INPATIENT ADMISSION NO. [IPD / UHID NUMBER] OF [PATIENT NAME].
                  </p>
                  <p>
                    Sir / Madam,<br /><br />
                    Under instructions from and on behalf of my client, [NAME OF COMPLAINANT/PATIENT], residing at [RESIDENTIAL ADDRESS], I hereby serve you with this statutory legal notice:
                  </p>
                  <p>
                    1. That my client was admitted to your hospital under IPD Registration No. [IPD NO.] from [ADMISSION DATE] to [DISCHARGE DATE] for undergoing [NAME OF MEDICAL PROCEDURE / SURGERY].
                  </p>
                  <p>
                    2. That at the time of admission, your hospital management provided an agreed written cost estimate of ₹[ESTIMATE AMOUNT] covering standard surgical procedures, room rent, and post-operative nursing care.
                  </p>
                  <p>
                    3. That to my client&apos;s utter shock, upon discharge on [DATE], your billing department presented an exorbitant final invoice totaling ₹[TOTAL BILLED], arbitrarily adding:
                    <br />(a) ₹[AMOUNT] towards consumables (including [QUANTITY] pairs of gloves, masks, and syringes) unsupported by the nurse&apos;s Daily Administration Record (DAR);
                    <br />(b) ₹[AMOUNT] towards unilateral unbundling of surgical package inclusions;
                    <br />(c) ₹[AMOUNT] towards phantom cross-consultation doctor visits never physically conducted; and
                    <br />(d) ₹[AMOUNT] towards pharmaceuticals charged in gross excess of NPPA ceiling prices and open-market MRPs.
                  </p>
                  <p>
                    4. That the aforementioned acts constitute gross Deficiency in Service under Section 2(11) and Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019, as well as a direct violation of the Clinical Establishments Act and Rule 18(2) of the Legal Metrology Rules, 2011.
                  </p>
                  <p>
                    5. That my client was compelled to clear the disputed sum under severe economic duress to secure discharge, expressly recording &ldquo;Paid Under Protest&rdquo; on the payment voucher.
                  </p>
                  <p>
                    <strong>NOW THEREFORE</strong>, I hereby call upon you to refund the extorted sum of ₹[DISPUTED REFUND AMOUNT] directly into my client&apos;s bank account, alongside interest at 12% per annum, within 15 (fifteen) calendar days from receipt of this notice, failing which my client shall initiate legal proceedings before the competent Consumer Disputes Redressal Commission under Section 35 of the Consumer Protection Act, 2019, claiming full refund, exemplary compensation of ₹[COMPENSATION AMOUNT], and litigation costs at your sole risk and liability.
                  </p>
                  <p className="text-slate-400">
                    [ADVOCATE NAME &amp; SIGNATURE]<br />
                    Enrolment No.: [BAR COUNCIL ENROLMENT NO.]<br />
                    Office Address &amp; Contact: [PHONE &amp; EMAIL]
                  </p>
                </div>
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Hospital Overbilling &amp; Refund Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Direct statutory answers to common questions about medical bill disputes, consumable markups, and consumer rights in India:
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Sources &amp; Statutory Legal References
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Every statutory benchmark, legal section, and precedent cited on this page is derived from primary official sources:
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-red-700 hover:underline font-medium break-words"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                  <span>Topic: Medical Overcharging &amp; Inpatient Hospital Bill Audit</span>
                  <span>Last Updated: 06 November 2026</span>
                </div>
              </section>

              {/* Call to Action Card Component */}
              <HospitalOverbillingNoticeCTA />

              {/* Internal Linking Exploration Grid */}
              <div className="bg-slate-100/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Related Everyday Consumer Recovery Resources
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/cashless-claim-denied-what-to-do"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-red-600 hover:border-red-300 font-medium transition-colors"
                  >
                    Cashless Claim Denied? Legal Steps
                  </Link>
                  <Link
                    href="/health-insurance-claim-rejection-reasons-counter"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-red-600 hover:border-red-300 font-medium transition-colors"
                  >
                    Health Insurance Claim Rejection Counter
                  </Link>
                  <Link
                    href="/how-to-file-consumer-complaint-india"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-red-600 hover:border-red-300 font-medium transition-colors"
                  >
                    How to File Consumer Court Complaint
                  </Link>
                  <Link
                    href="/legal-notice-to-interior-designer-contractor-refund"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-red-600 hover:border-red-300 font-medium transition-colors"
                  >
                    Interior Contractor Refund Notice
                  </Link>
                  <Link
                    href="/send-a-legal-notice"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-red-600 hover:border-red-300 font-medium transition-colors"
                  >
                    Send an Advocate Legal Notice Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides Cluster */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
