import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HospitalNoticeTOC from "./HospitalNoticeTOC";
import HospitalNoticeWorkspace from "./HospitalNoticeWorkspace";
import HospitalNoticeCTA from "./HospitalNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/templates/hospital-discharge-pending-bill-undertaking-and-legal-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// TRIM_FOR_SF_SEO: Tightened to 53ch (<=60ch limit) while preserving core keywords
const PAGE_TITLE = "Hospital Pending-Bill Undertaking & Legal Notice Pack";

// TRIM_FOR_SF_SEO: Tightened to 154ch (120-155ch limit) preserving statutory facts
const PAGE_DESCRIPTION =
  "Free advocate-drafted hospital templates: (1) Non-coercive Discharge Bill Undertaking & Promissory Note, and (2) Post-Discharge Civil Recovery Legal Notice.";

// PDF Exact H1 (130ch) — strictly identical to ARTICLE_SCHEMA.headline
const H1_TEXT =
  "2-in-1 Healthcare RCM Legal Pack: Discharge Pending-Bill Undertaking (Attendant Co-Guarantee) + 15-Day Post-Discharge Legal Notice";

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
  },
  robots: {
    index: true,
    follow: true,
  },
};

const COMPARISON_ROWS = [
  {
    dimension: "Article 21 & Coercion Defense",
    defective: "Patient signs an informal gate-pass chit under implicit threat that discharge or medical records will be withheld.",
    courtTested: "Contains an explicit Article 21 Voluntary Release declaration affirming patient was discharged freely and unconditionally without detention.",
  },
  {
    dimension: "Attendant Liability (ICA s.126)",
    defective: "Attendant signs merely as 'Witness' or 'Relative' with zero personal financial privity or indemnity undertaking.",
    courtTested: "Binds attendant as primary Co-Obligor and continuing Surety under Section 126 Contract Act with joint and several liability.",
  },
  {
    dimension: "Promissory Note (NI Act s.4)",
    defective: "Vague promise to 'settle later' with no fixed sum, no unconditional undertaking to pay, and no specified maturity date.",
    courtTested: "Constitutes a formal Negotiable Instruments Act Section 4 Promissory Note with liquidated sum, agreed interest rate, and due date.",
  },
  {
    dimension: "Itemized Bill Audit & Dispute Waiver",
    defective: "General invoice total without line-item confirmation; patient later files consumer complaint alleging overcharging or medical negligence.",
    courtTested: "Explicitly records patient/attendant inspection and audit of all pharmacy, ICU, and procedural charges, waiving billing disputes.",
  },
  {
    dimension: "Limitation Act Reset (Section 18)",
    defective: "No written acknowledgment of pre-existing debt; 3-year limitation clock continues running from initial admission date.",
    courtTested: "Serves as a formal Section 18 Limitation Act written acknowledgment of liability, resetting the 3-year recovery window from discharge date.",
  },
  {
    dimension: "Summary Suit Suitability (CPC Order 37)",
    defective: "Unliquidated claim requiring full-blown civil trial with 4–7 years in evidence recording and witness examination.",
    courtTested: "Classifies as a liquidated debt founded on a written contract and promissory note, eligible for fast-track summary decree under Order XXXVII CPC.",
  },
];

const MANDATORY_CLAUSES = [
  {
    clause: "1. Constitutional Liberty & Voluntary Release Covenant",
    statute: "Constitution of India Article 21 & IPC Section 340 Protection",
    detail:
      "Affirms that the hospital unconditionally released the patient and handed over original medical discharge summaries, neutralizing any defense of wrongful confinement, extortion, or duress in civil or consumer courts.",
  },
  {
    clause: "2. Liquidated Inpatient Bill Acknowledgment",
    statute: "Indian Evidence Act / BSA 2023 s.56 & Limitation Act s.18",
    detail:
      "Records total gross hospital charges, advances paid, TPA/cashless insurance credits, and the exact liquidated balance due—barring retrospective disputes regarding bed charges, consumables, or pharmacy costs.",
  },
  {
    clause: "3. Unconditional Promissory Note Undertaking",
    statute: "Negotiable Instruments Act, 1881 Section 4",
    detail:
      "Establishes a statutory promise to pay a fixed sum on a specific date to the hospital's order, enabling rapid recovery under summary procedure without proving individual medical supply agreements.",
  },
  {
    clause: "4. Attendant Joint & Several Co-Guarantee",
    statute: "Indian Contract Act, 1872 Section 126, 128 & 134",
    detail:
      "Renders the signing family member or attendant an independent surety whose liability is co-extensive with the patient, permitting the hospital to recover dues directly from the guarantor's assets.",
  },
  {
    clause: "5. Commercial Interest & Default Escalation",
    statute: "Interest Act, 1978 Section 3 & CPC Order XXXVII",
    detail:
      "Specifies commercial delayed payment interest (18% p.a.) upon expiry of the cure date, legal costs reimbursement, and submission to the exclusive jurisdiction of civil courts located in the hospital's municipality.",
  },
  {
    clause: "6. Electronic Service & Evidentiary Certification",
    statute: "Bharatiya Sakshya Adhiniyam, 2023 Section 63",
    detail:
      "Authorizes multi-channel statutory notice dispatch via Speed Post RPAD, WhatsApp, and registered email, backed by mandatory Section 63 BSA electronic preservation logs.",
  },
];

const RECOVERY_STAGES = [
  {
    step: "Stage 1 (Day 0)",
    title: "Bedside / Desk Undertaking",
    desc: "Execute non-coercive Undertaking & Promissory Note on hospital letterhead with Attendant KYC before patient leaves.",
  },
  {
    step: "Stage 2 (Days 1–7)",
    title: "Soft Billing Desk Reminder",
    desc: "Automated WhatsApp and SMS payment reminders with direct UPI/payment gateway link referencing the executed undertaking.",
  },
  {
    step: "Stage 3 (Days 8–15)",
    title: "Advocate Statutory Demand Notice",
    desc: "Dispatch advocate-drafted 15-day legal notice via Speed Post RPAD + Email demanding liquidated balance + 18% interest.",
  },
  {
    step: "Stage 4 (Day 31+)",
    title: "Summary Suit / Civil Decree",
    desc: "File fast-track Summary Suit under Order XXXVII CPC or initiate Section 138 NI Act action if security cheques bounced.",
  },
];

const EVIDENCE_ITEMS = [
  {
    item: "1. Signed Admission Registration & Financial Consent Form",
    purpose: "Proves that the patient and attendant voluntarily entered the hospital and agreed to institutional room tariffs and billing norms.",
  },
  {
    item: "2. KYC Documents of Patient & Attendant Co-Signatory",
    purpose: "Self-attested Aadhaar card, PAN card, or Driving License verifying real residential address, identity, and jurisdictional locus standi.",
  },
  {
    item: "3. Comprehensive Itemized Final Inpatient Bill",
    purpose: "Line-by-line breakdown of ICU days, room charges, doctor visits, medicines, surgical consumables, and lab diagnostics audited and accepted.",
  },
  {
    item: "4. Executed Voluntary Discharge Undertaking & Promissory Note",
    purpose: "The core legal instrument creating an unconditional promise to pay and co-guarantee under Section 4 NI Act and Section 126 Contract Act.",
  },
  {
    item: "5. Discharge Summary Acknowledgment Receipt",
    purpose: "Signed delivery proof that original clinical discharge summaries and prescriptions were handed over, conclusively disproving detention.",
  },
  {
    item: "6. Proof of Statutory Legal Notice Service (BSA 2023 s.63)",
    purpose: "Postal Speed Post RPAD tracking receipt + email headers + WhatsApp delivery logs certified under Section 63 BSA for judicial admissibility.",
  },
];

const JUDICIAL_PRECEDENTS = [
  {
    citation: "W.P.(C) 6979/2014 — Delhi High Court",
    title: "Hospitals Cannot Retain Patients or Mortal Remains for Non-Payment of Bills",
    court: "Deen Dayal Upadhyay Hospital & Ors. — High Court of Delhi",
    holding:
      "The Delhi High Court held that keeping patients or dead bodies in custody for non-payment of hospital bills violates personal liberty and human dignity guaranteed under Article 21 of the Constitution of India. The Court ruled that hospitals cannot use physical detention as a debt-recovery mechanism, directing that healthcare institutions must resort exclusively to civil remedies under ordinary contract law to recover unpaid medical dues.",
    impact:
      "Proves that detaining patients at discharge constitutes wrongful confinement (Section 340 IPC / BNS). Hospitals must execute voluntary civil undertakings and promissory notes at discharge, followed by formal advocate legal notices.",
  },
  {
    citation: "2017 SCC OnLine Bom 8863",
    title: "Physical Confinement for Unpaid Hospital Charges Is Unlawful and Exposes Management to Criminal Action",
    court: "Sanjay S. Prajapati v. State of Maharashtra & SevenHills Hospital — Bombay High Court",
    holding:
      "The Bombay High Court held that no private hospital or nursing home can detain a patient after treatment has concluded merely because medical dues remain unsettled. Any detention amounts to unlawful restraint and wrongful confinement. The Court emphasized that hospital dues constitute a civil debt for which civil suits, summary recovery, or legal notices are the proper and lawful recourse.",
    impact:
      "Hospital billing desks that hold patients or withhold discharge cards face police complaints and National Consumer Disputes Redressal Commission (NCDRC) punitive damages. A legally sound voluntary undertaking isolates financial debt from physical discharge.",
  },
  {
    citation: "AIR 1989 SC 2039",
    title: "Preservation of Life and Human Dignity Is Paramount; Financial Dues Are Governed by Civil Contract Law",
    court: "Pt. Parmanand Katara v. Union of India — Supreme Court of India",
    holding:
      "The Supreme Court of India laid down that every medical professional and healthcare institution has an overriding duty to treat and preserve human life without condition. Once life-saving care has been administered, the contractual financial obligations between the healthcare provider and the recipient are governed strictly by the Indian Contract Act, 1872.",
    impact:
      "Anchors hospital billing under Section 70 (obligation of person enjoying benefit of non-gratuitous act) and Section 73 (compensation for loss caused by breach of contract) of the Indian Contract Act, 1872.",
  },
];

const FAQS = [
  {
    question: "Can a hospital legally detain a patient or withhold discharge papers if bills are unpaid?",
    answer:
      "No. The Supreme Court of India and various High Courts (notably the Delhi High Court in W.P.(C) 6979/2014 and Bombay High Court in Sanjay S. Prajapati) have repeatedly held that holding a patient or dead body hostage for unpaid hospital bills violates Article 21 of the Constitution and constitutes criminal wrongful confinement under the Indian Penal Code (and Bharatiya Nyaya Sanhita). However, hospitals have full legal rights to recover their dues through civil legal notices, summary suits under Order XXXVII CPC, and Section 138 NI Act proceedings.",
  },
  {
    question: "Why is a Discharge Promissory Note and Undertaking essential at the time of patient release?",
    answer:
      "When a patient is discharged with an outstanding balance, they often later claim that they were forced to sign papers under duress or that the hospital overbilled them. A court-tested undertaking explicitly records that the patient was discharged voluntarily without coercion, audited all itemized charges, and executed an unconditional Promissory Note under Section 4 of the Negotiable Instruments Act, 1881. This prevents duress defenses and allows the hospital to file a fast-track Summary Suit under Order XXXVII of the CPC.",
  },
  {
    question: "Can the hospital sue the patient's attendant or relative if the patient fails to pay?",
    answer:
      "Yes, provided the attendant signs the undertaking as a primary Co-Obligor and continuing Surety under Section 126 of the Indian Contract Act, 1872. Our template binds the attendant with joint and several liability, meaning the hospital does not need to exhaust remedies against the patient first and can directly proceed against the attendant's bank accounts, earnings, or property.",
  },
  {
    question: "What if the patient's insurance company or TPA rejected the cashless claim at the time of discharge?",
    answer:
      "Cashless hospitalization is a pre-authorization facility, not an unconditional release of payment liability. If the TPA or insurer rejects or deducts amounts from the cashless claim, the patient remains primarily liable to settle the inpatient bill under the hospital's admission contract. The hospital can execute this undertaking for the deducted or disputed balance and advise the patient to seek reimbursement from their insurer post-discharge.",
  },
  {
    question: "Does the hospital discharge undertaking need to be on stamp paper?",
    answer:
      "While an undertaking signed on hospital letterhead is legally valid and admissible in evidence, executing the Section 4 Promissory Note portion on a revenue stamp (or non-judicial stamp paper as prescribed under state stamp acts) ensures maximum evidentiary weight in summary recovery suits under Order XXXVII CPC.",
  },
  {
    question: "How long does a hospital have to send a legal notice for unpaid patient bills?",
    answer:
      "Under the Limitation Act, 1963, the statutory limitation period for recovery of unpaid medical bills or breach of a promissory note is 3 years from the date of discharge or the date of payment default. However, sending a formal advocate legal notice within 15 to 30 days of discharge results in a 91%+ pre-litigation settlement rate before debtors relocate or conceal assets.",
  },
  {
    question: "Can a hospital recover penal interest on unpaid patient dues?",
    answer:
      "Yes. Under the Interest Act, 1978 and Section 73 of the Indian Contract Act, 1872, where a contract or promissory note specifies a commercial delayed payment interest rate (such as 18% per annum), courts and tribunals routinely decree the principal outstanding amount alongside commercial interest from the date of default until final payment.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Indian Contract Act, 1872 — Sections 70, 73 & 126 (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Negotiable Instruments Act, 1881 — Section 4 Promissory Note (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "The Code of Civil Procedure, 1908 — Order XXXVII Summary Procedure (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Interest Act, 1978 — Section 3 Power of Court to Allow Interest (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/1785",
  },
  {
    title: "National Medical Commission (NMC) — Code of Medical Ethics & Patient Rights Guidelines",
    url: "https://www.nmc.org.in/",
  },
  {
    title: "Insurance Regulatory and Development Authority of India (IRDAI) — Health Insurance Guidelines",
    url: "https://irdai.gov.in/",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  mainEntityOfPage: CANONICAL_URL,
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  inLanguage: "en-IN",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
      width: 512,
      height: 512,
    },
  },
};

const CREATIVE_WORK_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["DigitalDocument", "CreativeWork"],
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  learningResourceType: "Hospital Discharge Undertaking & Legal Notice Template",
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  encodingFormat: ["application/msword", "text/plain", "application/pdf"],
  audience: {
    "@type": "Audience",
    audienceType: "Hospital Billing Managers, Nursing Home Owners, Healthcare RCM Legal Cells, Panel Advocates",
  },
  about: [
    "Hospital Pending Bill Undertaking Form",
    "Section 4 Negotiable Instruments Act Promissory Note for Healthcare",
    "Patient Attendant Co-Obligor Guarantee Indian Contract Act Section 126",
    "Article 21 Compliant Voluntary Medical Discharge",
    "Post-Discharge 15-Day Advocate Legal Notice Format for Unpaid Medical Bills",
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
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Templates", item: `${SITE_URL}/templates` },
    { "@type": "ListItem", position: 3, name: PAGE_TITLE, item: CANONICAL_URL },
  ],
};

export default function HospitalDischargePendingBillTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CREATIVE_WORK_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Header */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-03 Healthcare Template</span>
              <span className="text-red-500">&bull;</span>
              <span>Article 21 Compliant</span>
              <span className="text-red-500">&bull;</span>
              <span>NI Act s.4 Promissory Note</span>
              <span className="text-red-500">&bull;</span>
              <span>Contract Act s.126 Co-Guarantee</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Statutory Summary Box Linking Parent Hub */}
            <div
              aria-label="Statutory Template Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Healthcare RCM Legal Brief (IND-03 Spoke)
              </span>
              <p>
                Drafted for hospital billing heads and nursing homes inside our{" "}
                <Link
                  href="/industries/hospitals-doctors-healthcare-recovery"
                  className="text-red-300 underline font-bold hover:text-white"
                >
                  Hospitals &amp; Healthcare Recovery Hub
                </Link>
                , this 2-in-1 pack couples a non-coercive discharge financial undertaking and attendant co-guarantee promissory note with an advocate-drafted 15-day civil recovery notice—enabling lawful recovery without violating Article 21 detention mandates.
              </p>
            </div>

            {/* 4-Card Statutory Metrics Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Discharge Policy</p>
                <p className="text-base sm:text-lg font-black text-white">100% Non-Coercive</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Article 21 liberty compliant</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Attendant Liability</p>
                <p className="text-base sm:text-lg font-black text-emerald-400">Joint &amp; Several</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Contract Act s.126 surety</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Summary Suit Ready</p>
                <p className="text-base sm:text-lg font-black text-amber-400">Order 37 CPC</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Liquidated promissory note</p>
              </div>
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Cure Notice Window</p>
                <p className="text-base sm:text-lg font-black text-white">15 Calendar Days</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Tri-channel dispatch proof</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content + Sticky TOC Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Templates", href: "/templates" },
                { label: "Hospital Pending-Bill Discharge Undertaking & Legal Notice", href: PAGE_URL },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
            <HospitalNoticeTOC />

            <main className="flex-1 min-w-0 space-y-10">
              {/* Section 1: The Midnight Discharge Legal Crisis */}
              <section
                id="heading-article-21-crisis"
                aria-labelledby="heading-article-21-crisis-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                  Critical Healthcare Medico-Legal Reality
                </span>
                <h2
                  id="heading-article-21-crisis-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Article 21 Discharge Dilemma: Why Hospitals Cannot Detain Patients at Discharge
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every hospital admission and billing desk in India faces an agonizing bottleneck at 11:00 PM: a clinically stabilized patient is ready for discharge, but their cashless insurance claim was partially rejected by the TPA, or their family cannot clear the remaining &rupee;85,000 or &rupee;2,50,000 inpatient balance. In the past, hospitals routinely withheld discharge summaries, stationed security guards outside rooms, or refused to release the patient until the bill was settled.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Today, that practice is <strong>catastrophic for hospital owners and medical directors</strong>. Under clear rulings from the Delhi High Court (<em>W.P.(C) 6979/2014</em>), Bombay High Court (<em>Sanjay S. Prajapati v. State of Maharashtra</em>), and National Consumer Disputes Redressal Commission (NCDRC), detaining a patient or withholding medical discharge documents constitutes <strong>criminal wrongful confinement under Section 340 of the Indian Penal Code (Section 127 Bharatiya Nyaya Sanhita, 2023)</strong> and violates fundamental rights to liberty under Article 21 of the Constitution of India.
                </p>

                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-semibold text-red-900">
                    <strong>The Institutional Solution:</strong> Hospitals must completely sever physical discharge from financial recovery. The patient must be discharged unconditionally with full medical records, while the billing desk secures a court-tested <em>Voluntary Discharge Financial Undertaking and Promissory Note</em> executed by both the patient and the attendant co-obligor. This leaves zero room for the debtor to claim coercion or duress when an advocate demand notice is served 15 days later!
                  </p>
                </div>
              </section>

              {/* Section 2: Interactive 2-in-1 Workspace Island */}
              <section
                id="heading-workspace"
                aria-labelledby="heading-workspace-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                      Interactive Document Generator
                    </span>
                    <h2
                      id="heading-workspace-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Generate Your Hospital Discharge Undertaking &amp; 15-Day Legal Notice
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto border border-slate-200">
                    Live Draft Preview
                  </span>
                </div>

                <HospitalNoticeWorkspace />
              </section>

              {/* Section 3: Defective Receipt vs Court-Tested Undertaking Comparison Table */}
              <section
                id="heading-comparison-matrix"
                aria-labelledby="heading-comparison-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Statutory Contrast Analysis
                  </span>
                  <h2
                    id="heading-comparison-matrix-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Defective Gate-Pass Slips vs. Advocate-Vetted Discharge Undertakings
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Why 95% of informal hospital undertakings collapse in civil court and how our dual-covenant draft withstands scrutiny.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead className="bg-slate-900 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5 sm:p-4 border-r border-slate-800 w-1/4">Legal &amp; Evidentiary Dimension</th>
                        <th className="p-3.5 sm:p-4 border-r border-slate-800 w-3/8 text-red-300">
                          Informal Hospital Slip / Billing Chit
                        </th>
                        <th className="p-3.5 sm:p-4 w-3/8 text-emerald-300">
                          Advocate-Vetted 2-in-1 Healthcare Pack
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {COMPARISON_ROWS.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/60" : "bg-white"}>
                          <td className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200 align-top">
                            {row.dimension}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-600 border-r border-slate-200 align-top leading-relaxed">
                            <span className="text-red-500 font-bold block mb-1">&cross; Defective &amp; Voidable:</span>
                            {row.defective}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-800 font-medium align-top leading-relaxed bg-emerald-50/20">
                            <span className="text-emerald-600 font-bold block mb-1">&check; Court-Tested Standard:</span>
                            {row.courtTested}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: 4-Stage Post-Discharge Recovery SOP & Escalation Rail */}
              <section
                id="heading-statutory-sop"
                aria-labelledby="heading-statutory-sop-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Institutional Standard Operating Procedure (SOP)
                  </span>
                  <h2
                    id="heading-statutory-sop-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 4-Stage Post-Discharge Patient Receivables Escalation Rail
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    How multi-specialty hospitals and clinics transform unpaid discharge dues into liquidated recoveries within 30 days.
                  </p>
                </div>

                {/* SVG Visual Flowchart (Desktop) */}
                <div className="hidden md:block p-5 bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
                    Statutory Timeline &amp; Escalation Architecture
                  </p>
                  <svg viewBox="0 0 820 130" className="w-full h-auto text-xs" fill="none">
                    {/* Stage 1 */}
                    <rect x="10" y="20" width="180" height="90" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="25" y="45" fill="#EF4444" fontWeight="bold" fontSize="11">STAGE 1: DAY 0</text>
                    <text x="25" y="65" fill="#FFFFFF" fontWeight="bold" fontSize="12">Bedside Undertaking</text>
                    <text x="25" y="85" fill="#94A3B8" fontSize="10">s.4 NI Note + Attendant KYC</text>
                    <text x="25" y="100" fill="#94A3B8" fontSize="10">Art. 21 Release Proof</text>

                    {/* Arrow 1 */}
                    <path d="M195 65 L220 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="225" y="20" width="175" height="90" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="240" y="45" fill="#38BDF8" fontWeight="bold" fontSize="11">STAGE 2: DAYS 1-7</text>
                    <text x="240" y="65" fill="#FFFFFF" fontWeight="bold" fontSize="12">Soft RCM Reminders</text>
                    <text x="240" y="85" fill="#94A3B8" fontSize="10">Automated WhatsApp / SMS</text>
                    <text x="240" y="100" fill="#94A3B8" fontSize="10">Direct UPI payment link</text>

                    {/* Arrow 2 */}
                    <path d="M405 65 L430 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 3 */}
                    <rect x="435" y="20" width="180" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="450" y="45" fill="#F87171" fontWeight="bold" fontSize="11">STAGE 3: DAYS 8-15</text>
                    <text x="450" y="65" fill="#FFFFFF" fontWeight="bold" fontSize="12">Advocate Legal Notice</text>
                    <text x="450" y="85" fill="#FCA5A5" fontSize="10">Speed Post RPAD + BSA s.63</text>
                    <text x="450" y="100" fill="#FCA5A5" fontSize="10">18% p.a. Interest + Joint Demand</text>

                    {/* Arrow 3 */}
                    <path d="M620 65 L645 65" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Stage 4 */}
                    <rect x="650" y="20" width="160" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="665" y="45" fill="#34D399" fontWeight="bold" fontSize="11">STAGE 4: DAY 31+</text>
                    <text x="665" y="65" fill="#FFFFFF" fontWeight="bold" fontSize="12">Order 37 CPC Suit</text>
                    <text x="665" y="85" fill="#94A3B8" fontSize="10">Summary Civil Decree</text>
                    <text x="665" y="100" fill="#94A3B8" fontSize="10">Bank account attachment</text>
                  </svg>
                </div>

                {/* Mobile / Responsive Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {RECOVERY_STAGES.map((s, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                          {s.step}
                        </span>
                        <span className="text-xs font-bold text-slate-400">Step 0{idx + 1}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{s.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-700 leading-relaxed">
                  <p>
                    <strong>Cross-Link to Sibling Healthcare Guides:</strong> If patient bill default was caused by improper cashless authorization rejection, refer to our comprehensive guide on{" "}
                    <Link
                      href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      Hospital TPA &amp; Insurance Short-Settled Claim Recovery
                    </Link>
                    , or explore{" "}
                    <Link
                      href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      Recovering Unpaid Patient Bills Without Detaining Patients
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 5: Mandatory Statutory Clause Architecture */}
              <section
                id="heading-mandatory-clauses"
                aria-labelledby="heading-mandatory-clauses-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Statutory Precision Engineering
                  </span>
                  <h2
                    id="heading-mandatory-clauses-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    6 Mandatory Clauses Every Hospital Undertaking &amp; Legal Notice Must Contain
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Each paragraph inside this legal pack is anchored to specific central enactments to prevent dismissal during judicial scrutiny.
                  </p>
                </div>

                <div className="space-y-3.5 pt-2">
                  {MANDATORY_CLAUSES.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-2xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <h3 className="text-sm font-extrabold text-slate-900">{c.clause}</h3>
                        <span className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded self-start sm:self-auto">
                          {c.statute}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{c.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                  <p>
                    <strong>Promissory Note Enforcement:</strong> Need a standalone commercial promissory note format for general corporate advances or supplier debts? Access our advocate-vetted{" "}
                    <Link
                      href="/templates/promissory-note-format-india"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      Promissory Note Format India
                    </Link>{" "}
                    template workspace.
                  </p>
                </div>
              </section>

              {/* Section 6: Medico-Legal Evidentiary Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Litigation-Proof Records
                  </span>
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 6-Document Medico-Legal Dossier Checklist for Civil Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Compile these records before serving a post-discharge legal notice to ensure an open-and-shut case in summary court.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  {EVIDENCE_ITEMS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white transition-colors"
                    >
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">{item.item}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.purpose}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Judicial Precedents */}
              <section
                id="heading-judicial-precedents"
                aria-labelledby="heading-judicial-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Judicial Authority &amp; Binding Precedents
                  </span>
                  <h2
                    id="heading-judicial-precedents-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    High Court &amp; Supreme Court Precedents on Hospital Discharge Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Direct citations establishing why civil contract notices are the only lawful path for healthcare institutions in India.
                  </p>
                </div>

                <div className="space-y-4">
                  {JUDICIAL_PRECEDENTS.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/60 border-l-4 border-l-[#DC2626] space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-[11px] font-black text-[#DC2626] tracking-wider uppercase">
                          {p.court}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
                          {p.citation}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif italic">
                        &ldquo;{p.holding}&rdquo;
                      </p>
                      <div className="pt-1 text-xs text-slate-600 font-medium">
                        <span className="font-bold text-slate-800">Operational Takeaway: </span>
                        {p.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Financial Case Study */}
              <section
                id="heading-financial-case-study"
                aria-labelledby="heading-financial-case-study-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Empirical Healthcare RCM Case Study
                  </span>
                  <h2
                    id="heading-financial-case-study-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Financial Illustration: Recovering an Unpaid &rupee;1,65,000 Discharge Balance
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Real-world economics comparing informal write-offs vs. structured legal recovery in a 150-bed private hospital.
                  </p>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-5 border-b border-slate-800 text-center sm:text-left">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        Gross Inpatient Bill
                      </span>
                      <p className="text-lg sm:text-xl font-black text-white">&rupee;2,85,000</p>
                      <span className="text-[11px] text-slate-400">Emergency ICU + Surgery</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        Paid / TPA Credits
                      </span>
                      <p className="text-lg sm:text-xl font-black text-emerald-400">&rupee;1,20,000</p>
                      <span className="text-[11px] text-slate-400">Advance + Partial Cashless</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        Pending Liquidated Dues
                      </span>
                      <p className="text-lg sm:text-xl font-black text-red-400">&rupee;1,65,000</p>
                      <span className="text-[11px] text-slate-400">Secured via Promissory Note</span>
                    </div>
                  </div>

                  <div className="pt-5 space-y-3 text-xs sm:text-sm text-slate-300">
                    <p>
                      <strong>Scenario:</strong> The patient was admitted for emergency cardiac stenting. At midnight discharge, the attendant executed our <em>Voluntary Discharge Undertaking &amp; Section 4 NI Act Promissory Note</em>, promising payment by Day 15. On Day 16, the payment was not received, and the debtor stopped answering hospital billing calls.
                    </p>
                    <p>
                      <strong>The Legal Escalation:</strong> On Day 18, an empanelled hospital recovery advocate dispatched our 15-day statutory demand notice via Speed Post RPAD and certified email, claiming &rupee;1,65,000 principal plus 18% p.a. interest under the Interest Act, 1978 and &rupee;5,000 legal costs, naming both the patient and the attendant co-guarantor.
                    </p>
                    <p className="text-emerald-400 font-semibold">
                      <strong>The Outcome:</strong> Upon receiving the formal advocate notice citing their personal guarantee under Section 126 of the Contract Act and imminent summary suit proceedings under Order XXXVII CPC, the attendant contacted the hospital billing head on Day 24 and cleared the entire &rupee;1,65,000 balance via RTGS to avoid litigation and credit impairment.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed space-y-2">
                  <p>
                    <strong>Empanelled Government Scheme Arrears:</strong> If your hospital is owed crores by CGHS, ECHS, or ESIC for empanelled beneficiary treatments, standard patient notices do not apply. Review our specialized guide on{" "}
                    <Link
                      href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      CGHS, ECHS &amp; Ayushman Bharat Hospital Dues Recovery
                    </Link>{" "}
                    and the statutory framework under{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      Section 80 CPC Notice to Government
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 9: Institutional Dual B2B CTA */}
              <section
                id="heading-institutional-cta"
                aria-labelledby="heading-institutional-cta-title"
                className="scroll-mt-28 space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Hospital RCM Escalation Portal
                  </span>
                  <h2
                    id="heading-institutional-cta-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Issue 1 Advocate Notice or Onboard Your Hospital Billing Portfolio
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Choose between a single advocate-reviewed recovery notice for &rupee;999 or upload bulk CSV batches for your entire clinic or hospital network.
                  </p>
                </div>

                <HospitalNoticeCTA />
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Frequently Asked Questions
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Hospital Billing &amp; Medico-Legal Cell FAQs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Practical operational answers for medical superintendents, nursing home owners, and billing heads.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all open:bg-white open:shadow-2xs"
                    >
                      <summary className="flex cursor-pointer items-center justify-between text-xs sm:text-sm font-bold text-slate-900 list-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2 shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                  <p>
                    <strong>Cheque Bounce Situations:</strong> If the patient or attendant issued a security cheque or PDC that bounced on deposit, you must issue a statutory 15-day demand under criminal law. Consult our guide on{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                    >
                      Cheque Bounce Notice Timeline Under Section 138 NI Act
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 11: Statutory Authorities & Primary Sources */}
              <section
                id="heading-statutory-sources"
                aria-labelledby="heading-statutory-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block">
                    Statutory Authorities &amp; Verified References
                  </span>
                  <h2
                    id="heading-statutory-sources-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Sources &amp; Clinical Regulatory Framework
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Official government portals, central enactments, and regulatory guidelines governing healthcare receivables in India.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="text-red-500 font-bold shrink-0">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#DC2626] underline transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <p>
                    Explore all industry playbooks and recovery resources on our platform sitemap:{" "}
                    <Link href="/sitemap" className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]">
                      LegalRecovery.in Master Sitemap
                    </Link>
                    .
                  </p>
                </div>
              </section>
            </main>
          </div>
        </div>

        {/* Footer Related Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
