import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AbandonedPatientTableOfContents from "./AbandonedPatientTableOfContents";
import AbandonedPatientScenarioTabs from "./AbandonedPatientScenarioTabs";
import AbandonedPatientCTA from "./AbandonedPatientCTA";

export const revalidate = 86400;

const PAGE_URL = "/hospital-long-stay-patient-abandonment-unpaid-bill-legal-protocol";
const EXACT_H1 =
  "Medico-Legal & Financial Recovery Protocol When Relatives Abandon a Long-Stay ICU, Neuro or Elderly Patient Without Paying Bills";
const META_TITLE = "Abandoned Patient & Unpaid ICU Bill: Hospital Legal Protocol";
const META_DESCRIPTION =
  "Bed blocked for months with kin untraceable? Police/DM intimation, safe Govt hospital transfer & civil recovery under Contract & Senior Citizens Acts.";

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
        alt: formatAltText("Hospital Abandoned Patient Medico Legal and Financial Recovery Protocol"),
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
    remedy: "Senior Citizens Act 2007 (s.24 & s.4)",
    trigger: "Adult children or relatives deliberately abandon a senior citizen in hospital and cut off communication",
    timeline: "Police intimation within 7 days of kin abandonment; Maintenance Tribunal petition within 30 days",
    interimPower: "Criminal arrest and imprisonment up to 3 months for children; attachment of children's inherited property",
    targetAssets: "Earning children's salaries, bank accounts, and ancestral assets inherited from senior parent",
    verdict: "High-Leverage Criminal Lever",
    tone: "emerald",
  },
  {
    remedy: "Indian Contract Act 1872 (s.126 & s.128)",
    trigger: "Kin who executed admission agreement acts as co-extensive surety for all accrued inpatient charges",
    timeline: "15-day formal Advocate Demand Notice upon kin non-responsiveness / hospital discharge clearance",
    interimPower: "Enables hospital to sue earning relative directly without having to exhaust remedies against patient",
    targetAssets: "Admission guarantor's personal bank accounts, vehicles, and real estate assets",
    verdict: "Primary Civil Debt Anchor",
    tone: "emerald",
  },
  {
    remedy: "State-Assisted Transfer Protocol (DM & CMO Requisition)",
    trigger: "Patient clinically stabilized but relatives refuse to receive; private ICU bed blocked indefinitely",
    timeline: "Internal Medical Board certificate followed by 72-hour formal requisition to CMO & District Magistrate",
    interimPower: "Official custodial handover to Government Medical College or Social Welfare Home under police escort",
    targetAssets: "Immunity against BNS Section 105/106 and consumer malpractice counter-allegations",
    verdict: "Bed De-escalation & Safe Handover",
    tone: "amber",
  },
  {
    remedy: "CPC Order XXXVII (Summary Suit for Medical Debt)",
    trigger: "Accumulated hospital bed days, pharmacy bills, and implants backed by signed admission undertaking",
    timeline: "Filing within 3-year limitation under Article 18/35 Limitation Act; defendant given 10 days to appear",
    interimPower: "Summary money decree without lengthy trial unless defendant deposits substantial disputed amount",
    targetAssets: "Joint & several decree against patient's estate and admission co-guarantor relatives",
    verdict: "Fast-Track Civil Decree",
    tone: "emerald",
  },
  {
    remedy: "BNS 2023 s.105 / s.106 & s.127 Risk Shield",
    trigger: "Hospital tempted to dump abandoned patient on roadside or illegally withhold body/documents",
    timeline: "Strict zero-tolerance red line; criminal liability for Medical Superintendent if patient abandoned outside",
    interimPower: "Habeas corpus writs, Medical Council registration cancellation, and cognizable police FIRs",
    targetAssets: "Hospital Management, MS, and treating clinicians face severe personal criminal jeopardy",
    verdict: "Absolute Medico-Legal Red Line",
    tone: "red",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    item: "Verified Admission Form & Attendant Co-Guarantor KYC",
    purpose:
      "Captures Aadhaar, PAN, permanent address, and co-extensive suretyship undertaking under Section 128 of the Indian Contract Act for civil execution.",
  },
  {
    item: "Contemporaneous Internal Medical Board Stabilization Certificate",
    purpose:
      "Signed by Medical Superintendent, ICU Head, and Treating Consultant certifying hemodynamic stability, termination of acute care needs, and medical readiness for step-down care.",
  },
  {
    item: "Call Logs, WhatsApp Delivery Proofs & Speed Post RPAD Letters",
    purpose:
      "Establishes systematic efforts to contact kin, documenting deliberate phone switch-offs, unanswered door visits, and refused registered postal notices.",
  },
  {
    item: "Local Police Station Sanha / General Diary (GD) Entry",
    purpose:
      "Official police acknowledgment of abandonment under Section 24 Senior Citizens Act, requesting state investigation to locate absconding children.",
  },
  {
    item: "Formal Requisition to District Magistrate (DM) & Chief Medical Officer (CMO)",
    purpose:
      "Statutory administrative paper trail demanding state custodial takeover, government hospital bed allocation, or social welfare shelter placement.",
  },
  {
    item: "Advance Life Support (ALS) Ambulance Transfer & Receiving Sheet",
    purpose:
      "Proves clinical safety during inter-hospital transfer with doctor/paramedic vitals log and formal countersigned receiving by Government Medical Superintendent.",
  },
  {
    item: "BSA 2023 Section 63 Electronic Records Certificate",
    purpose:
      "Certifies Hospital Information Management System (HMS) audit trails, daily bed-charge logs, CCTV footage of attendant abandonment, and SMS alerts.",
  },
];

const FAQS = [
  {
    question: "Can a private hospital physically discharge an abandoned elderly patient onto the street or into an auto-rickshaw?",
    answer:
      "No. Abandoning a helpless, elderly, or semi-conscious patient outside hospital premises is a severe criminal offense under the Bharatiya Nyaya Sanhita, 2023 (Sections 105 and 106 for culpable homicide and criminal negligence) and Section 24 of the Maintenance and Welfare of Parents and Senior Citizens Act, 2007. The hospital and treating doctors also face immediate cancellation of clinical establishment registration and National Medical Commission (NMC) disciplinary action. Safe transfer must strictly follow the formal Police and District Magistrate custodial protocol.",
  },
  {
    question: "How can a hospital unblock an ICU bed when relatives switch off their phones and refuse to collect the patient?",
    answer:
      "The hospital must: (1) Convene an Internal Medical Board certifying the patient is hemodynamically stable and no longer requires active tertiary ICU care; (2) Lodge a formal General Diary (GD) intimation with the local Police Station; (3) File an urgent administrative petition before the District Magistrate (DM/SDM) and Chief Medical Officer (CMO) requesting inter-hospital transfer to a Government Medical College or State-run geriatric facility; and (4) Transfer the patient via an Advance Life Support (ALS) ambulance accompanied by a medical officer against formal written receiving.",
  },
  {
    question: "Can the hospital legally recover the unpaid ₹15–25 Lakh bill from the relatives who abandoned the patient?",
    answer:
      "Yes. The hospital has two potent legal avenues: First, under Sections 126 and 128 of the Indian Contract Act, the relative who signed the admission form as guarantor is jointly and severally liable as a co-extensive surety; the hospital can file an Order XXXVII CPC Summary Suit against them. Second, under Section 4 and Section 23 of the Senior Citizens Act, adult children who have inherited or stand to inherit the parent's property can be compelled by the Maintenance Tribunal to clear medical obligations.",
  },
  {
    question: "Does the hospital have to keep providing free ICU care while waiting for the District Magistrate or Police to act?",
    answer:
      "While the hospital has an ethical and statutory stabilization duty under the Clinical Establishments Act, once the patient is clinically stabilized, there is no mandate to provide tertiary ICU beds. The hospital can safely step the patient down to a general ward or transition bed to minimize ongoing operational costs while continuing essential nutrition, nursing, and maintenance medication until state administrative transfer is executed.",
  },
  {
    question: "What criminal action can be initiated against adult children who abandon their elderly parents in a hospital?",
    answer:
      "Under Section 24 of the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, anyone who has the care or protection of a senior citizen and intentionally leaves them in any place with the intention of wholly abandoning them faces cognizable criminal prosecution, punishable with imprisonment up to 3 months, a fine up to ₹5,000, or both. Hospitals can file a direct complaint with the local Police and Judicial Magistrate.",
  },
  {
    question: "How does the hospital protect its doctors from false medical negligence counter-allegations during transfer?",
    answer:
      "Hospitals protect against retaliatory negligence claims by: (1) Having a multi-disciplinary Medical Board execute a comprehensive clinical stabilization summary with objective scores (GCS, vital parameters, lack of ventilator dependence); (2) Recording bedside video-EEG/clinical examination logs certified under BSA 2023 Section 63; (3) Effecting transfer exclusively via fully-equipped ALS ambulances with an onboard medical officer; and (4) Handing over custody against signed institutional receiving by the Government Hospital Medical Superintendent.",
  },
  {
    question: "What if the abandoned patient was admitted as an unidentified emergency or accident victim with false KYC?",
    answer:
      "For unidentified trauma victims, the hospital must immediately register a Medico-Legal Case (MLC) and notify the police. If the victim stabilizes, the hospital requests UIDAI biometric tracing through the police and District Magistrate. If the injury arose from a road accident, the hospital can implead as an essential medical creditor before the Motor Accident Claims Tribunal (MACT) or claim under the Golden Hour Hit-and-Run Scheme to recover treatment expenses directly from insurers.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Maintenance and Welfare of Parents and Senior Citizens Act, 2007 (Sections 4, 23 & 24) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2048",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 70, 126 & 128) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Clinical Establishments (Registration and Regulation) Act, 2010 — MoHFW",
    url: "https://clinicalestablishments.mohfw.gov.in/",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII & Order XXXVIII) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
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
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: "2026-11-14T10:00:00+05:30",
  dateModified: "2026-11-14T10:00:00+05:30",
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Medico-Legal Protocol for Abandoned Hospital Patients and Unpaid Medical Bill Recovery in India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Protocol for Managing Abandoned Long-Stay Hospital Patients and Recovering Unpaid ICU Bills",
  description:
    "A 4-stage operational and statutory protocol for private hospitals to safely transfer abandoned stabilized patients to state care and recover unpaid bills from relatives.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Convene Internal Medical Board & Document Stabilization",
      text: "The Medical Superintendent and treating clinicians execute a formal board certificate verifying the patient is hemodynamically stable, off mechanical ventilation, and fit for step-down care.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "File Police Sanha & Issue Senior Citizens Act Intimation",
      text: "Lodge a General Diary entry at the local police station to trace absconding relatives and initiate Section 24 criminal abandonment warnings against adult children.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Petition District Magistrate & Execute Safe Inter-Hospital Transfer",
      text: "Requisition the CMO and District Magistrate for administrative transfer to a Government Medical College or Social Welfare Home via Advance Life Support ambulance with clinical escort.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File Order XXXVII CPC Summary Suit Against Admission Guarantor",
      text: "Serve a 15-day formal Advocate Demand Notice and file an Order XXXVII CPC Summary Suit or Maintenance Tribunal petition to recover accrued treatment dues from relatives.",
    },
  ],
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
      name: "Abandoned Patient Legal Protocol",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function AbandonedPatientProtocolPage() {
  const breadcrumbItems = [
    { label: "Hospitals & Healthcare Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "Abandoned Patient Legal Protocol", href: PAGE_URL },
  ];

  return (
    <>
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
              <span>IND-03 Healthcare RCM Playbook</span>
              <span>&bull;</span>
              <span>Senior Citizens Act s.24</span>
              <span>&bull;</span>
              <span>Order XXXVII CPC</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              When relatives abandon a stabilized patient in private care, hospitals face severe cash drains. Through our{" "}
              <Link
                href="/industries/hospitals-doctors-healthcare-recovery"
                className="text-red-300 underline decoration-red-400/70 hover:text-white font-semibold"
              >
                Healthcare Legal Recovery Desk
              </Link>
              , Medical Superintendents execute police/DM-assisted transfers to state facilities under Clinical Establishments norms, then enforce Section 24 Senior Citizens Act penal levers and Order XXXVII CPC suits to recover unpaid bills from kin.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">Zero Criminal Risk</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  BNS s.105/106 Protected Transfer
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">Bed Liberated</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  DM/CMO Custodial Handover
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">Section 24 Lever</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  3-Month Kin Imprisonment Threat
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">100% Civil Decree</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Order XXXVII Guarantor Action
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4 sm:mt-6">
            {/* Left Sticky Sidebar TOC */}
            <AbandonedPatientTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Abandonment Crisis */}
              <section
                id="heading-crisis-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    01
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Clinical Dilemma &amp; Economic Hemorrhage
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Abandoned Long-Stay Patients Paralyze Hospital ICUs &amp; Finances
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every multi-specialty tertiary care hospital and neuro-rehabilitation center in India faces between 3 and 10 cases annually where a critical patient—typically an elderly stroke victim, a post-craniotomy neuro-trauma case, or a prolonged coma patient—stabilizes under intensive therapy, but the relatives vanish. As the medical bill crosses ₹10 Lakh to ₹25 Lakh, calls go unanswered, visiting hours are completely skipped, registered letters return unserved, and the hospital finds its emergency infrastructure hijacked as an unpaid long-term nursing home.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Medical Superintendents, Chief Medical Officers, and hospital administrators find themselves trapped between two catastrophic legal perils:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl space-y-2">
                    <p className="text-xs font-black uppercase tracking-wider text-red-900">
                      The Criminal Trap: Evicting Onto The Road
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      If the hospital forces the patient out, hires an ambulance to leave them at their home doorstep, or drops them at a bus terminus, the hospital management and treating physicians face immediate criminal prosecution under Sections 105 and 106 of the Bharatiya Nyaya Sanhita, 2023 (culpable homicide not amounting to murder and causing death by negligence), alongside suspension of registration under the Clinical Establishments Act.
                    </p>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl space-y-2">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-900">
                      The Financial Trap: Absorbing Infinite Costs
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      If the hospital takes no formal legal action, it continues bleeding ₹15,000 to ₹35,000 per day in bed occupancy, nursing, nutrition, pharmacy, and disposables. Furthermore, blocking an active ICU or High Dependency Unit (HDU) bed deprives incoming acute emergency cases of life-saving equipment, creating secondary liability risks and permanent balance sheet write-offs.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-5 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    The Lawful Solution: Administrative Transfer + Suretyship Enforcement
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Under Indian jurisprudence, while private healthcare institutions possess a statutory stabilization duty, they are not state social welfare orphanages. Once clinical stabilization is certified by an Internal Medical Board, the hospital possesses the clear legal right to requisition District Administrative machinery (CMO and District Magistrate) for transfer to state tertiary facilities, while simultaneously initiating punitive and civil recovery actions against absconding family members under the{" "}
                    <span className="text-white font-semibold">
                      Maintenance and Welfare of Parents and Senior Citizens Act, 2007
                    </span>{" "}
                    and the{" "}
                    <span className="text-white font-semibold">
                      Indian Contract Act, 1872
                    </span>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: Police, CMO & DM Intimation Protocol */}
              <section
                id="heading-police-dm-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    02
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Administrative Intimation SOP
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Protocol: Police, CMO &amp; DM Intimation for Abandoned Patients
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The moment an inpatient has achieved clinical stability and family members become non-responsive for more than 72 hours, the Medical Superintendent must formally trigger the statutory multi-tier administrative intimation mechanism. Silence or informal phone reminders are legally fatal; courts require contemporaneous, documented administrative paper trails.
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Tier 1: Internal Medical Board Certification of Hemodynamic Stability
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Convene a 3-member medical board comprising the Medical Superintendent, Head of Critical Care / Neurology, and the Medico-Legal Officer (MLO). The board records a detailed clinical evaluation confirming: (a) acute life-threatening pathology has stabilized; (b) the patient is off active mechanical ventilation (or stable on room air / tracheostomy T-piece); (c) active tertiary inpatient medical care is no longer required; and (d) the patient requires step-down rehabilitative, home, or palliative care. This certificate is the cornerstone defense against future medical negligence suits.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Tier 2: Police Intimation &amp; Sanha / General Diary (GD) Registration
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Submit a written complaint to the Station House Officer (SHO) of the local police jurisdiction and the Deputy Commissioner of Police (DCP). The letter details the patient&apos;s identity, admission date, last known relative details, phone call logs, and requests the police to: (a) register a General Diary entry; (b) conduct an address verification at the attendant&apos;s residential address; and (c) issue a formal warning under Section 24 of the Senior Citizens Act (if the patient is aged 60+) regarding criminal abandonment.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Tier 3: Formal Administrative Petition to District Magistrate &amp; CMO
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Serve a formal statutory representation to the District Magistrate (DM / Deputy Commissioner) and Chief Medical Officer (CMO) under the Clinical Establishments Act and Senior Citizens Welfare rules. The petition submits that private emergency bed resources are exhausted, the patient is stabilized, and formally requisitions state machinery to allocate a bed in a Government Medical College hospital, District Civil Hospital, or recognized State Social Welfare shelter home.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-blue-900">
                  <span className="font-bold">Statutory Service Rule:</span> Deliver all intimation letters via Speed Post RPAD with online postal tracking delivery proof, and simultaneously dispatch via the hospital&apos;s official email to the DM, CMO, and local Police station to satisfy electronic service criteria under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                </div>
              </section>

              {/* Section 3: Safe Medico-Legal Transfer Protocol */}
              <section
                id="heading-safe-transfer-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    03
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Clinical Handover SOP
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Safe Medico-Legal Transfer Protocol to State Facilities
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Executing an inter-hospital transfer of an abandoned patient without an attending family member requires strict adherence to clinical escort protocols. Any adverse clinical event during transit can trigger devastating consumer negligence claims or criminal inquiries if basic transport safeguards are overlooked.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                      1. ALS Ambulance Standards
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Transfer must exclusively occur via an Advance Life Support (ALS) ambulance fitted with multi-para cardiac monitors, portable transport ventilator/oxygen supply, suction apparatus, and emergency resuscitation pharmacology. Never use standard non-monitored patient transport vans.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      2. Qualified Clinical Escort
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The patient must be accompanied by an ACLS-certified Medical Officer and an experienced critical care nurse who record continuous vitals (BP, SpO2, heart rate, Glasgow Coma Scale) every 10 minutes from departure to bed handover at the receiving facility.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      3. Institutional Handover Dossier
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Prepare 3 certified sets of complete treatment records: Discharge Summary, OT records, diagnostic imaging CDs, medication administration charts, personal effects list, and the CMO/DM transfer sanction order, countersigned by the receiving Medical Superintendent.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <div>
                    <span className="font-bold">Immunity Verification:</span> When an inter-hospital transfer is executed pursuant to written directives from the CMO or District Magistrate with an ALS medical escort and signed handover sheet, the hospital and its clinicians are completely shielded from criminal liability under BNS Sections 105 and 106, as well as Section 127 (wrongful confinement).
                  </div>
                </div>
              </section>

              {/* Section 4: Operational Decision Tree SVG */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    04
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Operational Escalation Architecture
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Hospital Abandoned Patient &amp; Debt Recovery Decision Tree
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Use this operational flowchart to navigate clinical de-escalation, executive administrative intimation, and subsequent legal bill recovery against absconding next-of-kin:
                </p>

                {/* SVG Decision Tree for Desktop */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <svg
                    viewBox="0 0 800 480"
                    className="w-full h-auto text-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={800}
                    height={480}
                  >
                    {/* Node 1: Trigger */}
                    <rect x="250" y="20" width="300" height="55" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="400" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      INPATIENT STABILIZED &amp; KIN NON-RESPONSIVE &gt;72H
                    </text>
                    <text x="400" y="62" textAnchor="middle" fill="#94A3B8" fontSize="10">
                      Unpaid Bill Accruing &bull; Bed Occupancy Locked
                    </text>

                    {/* Down arrow */}
                    <path d="M400 75 L400 110" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Node 2: Internal Medical Board */}
                    <rect x="230" y="110" width="340" height="55" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                    <text x="400" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      CONVENE INTERNAL MEDICAL BOARD
                    </text>
                    <text x="400" y="152" textAnchor="middle" fill="#94A3B8" fontSize="10">
                      Certify Hemodynamic Stability &bull; Fit for Step-Down Transfer
                    </text>

                    {/* Branch Left & Right */}
                    <path d="M310 165 L310 200 L180 200 L180 220" stroke="#94A3B8" strokeWidth="2" />
                    <path d="M490 165 L490 200 L620 200 L620 220" stroke="#94A3B8" strokeWidth="2" />

                    {/* Node 3A: Administrative Safe Transfer */}
                    <rect x="50" y="220" width="260" height="60" rx="8" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                    <text x="180" y="244" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="bold">
                      TRACK A: CUSTODIAL TRANSFER
                    </text>
                    <text x="180" y="260" textAnchor="middle" fill="#E2E8F0" fontSize="9">
                      Police Sanha GD + DM/CMO Requisition
                    </text>
                    <text x="180" y="272" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      ALS Ambulance Transfer to Govt Facility
                    </text>

                    {/* Node 3B: Medico-Legal Criminal Lever */}
                    <rect x="490" y="220" width="260" height="60" rx="8" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
                    <text x="620" y="244" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="bold">
                      TRACK B: STATUTORY ESCALATION
                    </text>
                    <text x="620" y="260" textAnchor="middle" fill="#E2E8F0" fontSize="9">
                      Senior Citizens Act s.24 Complaint (Kin)
                    </text>
                    <text x="620" y="272" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      3-Month Imprisonment &bull; Police Tracing
                    </text>

                    {/* Down arrows from both tracks */}
                    <path d="M180 280 L180 320 L310 320 L310 340" stroke="#10B981" strokeWidth="2" />
                    <path d="M620 280 L620 320 L490 320 L490 340" stroke="#F59E0B" strokeWidth="2" />

                    {/* Node 4: Consolidated Recovery Action */}
                    <rect x="220" y="340" width="360" height="60" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="400" y="364" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      CIVIL &amp; SURETYSHIP FINANCIAL RECOVERY
                    </text>
                    <text x="400" y="380" textAnchor="middle" fill="#E2E8F0" fontSize="9">
                      Contract Act s.128 Admission Guarantor Liability
                    </text>
                    <text x="400" y="392" textAnchor="middle" fill="#94A3B8" fontSize="9">
                      15-Day Advocate Notice &bull; Order XXXVII CPC Summary Suit
                    </text>

                    {/* Arrow down to outcome */}
                    <path d="M400 400 L400 430" stroke="#DC2626" strokeWidth="2" />

                    {/* Node 5: Outcome */}
                    <rect x="260" y="430" width="280" height="35" rx="6" fill="#047857" />
                    <text x="400" y="452" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                      BED LIBERATED &bull; ZERO LIABILITY &bull; DECREE ISSUED
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Flowchart */}
                <div className="md:hidden space-y-3">
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-red-800">
                    <p className="text-[10px] uppercase font-bold text-red-400">Step 1: Clinical Trigger</p>
                    <p className="text-xs font-bold text-slate-100">Patient Stabilized &amp; Relatives Unresponsive &gt;72 Hours</p>
                    <p className="text-[11px] text-slate-400 mt-1">Bed blocked, mounting unpaid bills, phone numbers switched off.</p>
                  </div>
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-blue-800">
                    <p className="text-[10px] uppercase font-bold text-blue-400">Step 2: Clinical Board</p>
                    <p className="text-xs font-bold text-slate-100">Internal Medical Board Issues Stability Certificate</p>
                    <p className="text-[11px] text-slate-400 mt-1">Proves patient is off active acute care; safe for step-down transfer.</p>
                  </div>
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-emerald-800">
                    <p className="text-[10px] uppercase font-bold text-emerald-400">Step 3: State Requisition</p>
                    <p className="text-xs font-bold text-slate-100">Police GD + DM &amp; CMO Requisition for State Facility</p>
                    <p className="text-[11px] text-slate-400 mt-1">Inter-hospital transfer via ALS ambulance with doctor/paramedic escort.</p>
                  </div>
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-amber-800">
                    <p className="text-[10px] uppercase font-bold text-amber-400">Step 4: Legal &amp; Financial Execution</p>
                    <p className="text-xs font-bold text-slate-100">Senior Citizens Act s.24 + Order XXXVII CPC Summary Suit</p>
                    <p className="text-[11px] text-slate-400 mt-1">Arrest threat for abandonment; civil money decree against admission guarantor.</p>
                  </div>
                </div>
              </section>

              {/* Section 5: Statutory Recovery Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    05
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Statutory Framework
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Recovery Matrix: Contract, Senior Citizens &amp; BNS Laws
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Hospital legal counsel must leverage the intersection of criminal abandonment laws, administrative public health transfer provisions, and civil suretyship contracts to resolve bed-blocking while securing financial reimbursement:
                </p>

                <div className="w-full overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="p-3.5">Statutory Provision</th>
                        <th className="p-3.5">Operational Trigger</th>
                        <th className="p-3.5">Statutory Timeline</th>
                        <th className="p-3.5">Enforcement Power</th>
                        <th className="p-3.5">Hospital Verdict</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {STATUTORY_MATRIX.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            {item.remedy}
                          </td>
                          <td className="p-3.5 text-slate-600">
                            {item.trigger}
                          </td>
                          <td className="p-3.5 text-slate-600">
                            {item.timeline}
                          </td>
                          <td className="p-3.5 text-slate-700 font-medium">
                            {item.interimPower}
                          </td>
                          <td className="p-3.5">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                item.tone === "emerald"
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                  : item.tone === "amber"
                                  ? "bg-amber-100 text-amber-800 border border-amber-300"
                                  : "bg-red-100 text-red-800 border border-red-300"
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

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1">
                  <p className="font-bold text-slate-900">Judicial Distinction: Hospital Duty vs Family Legal Responsibility</p>
                  <p className="leading-relaxed">
                    Under the landmark Supreme Court ruling in <em>Paschim Banga Khet Mazdoor Samity v. State of West Bengal</em>, the state has a constitutional obligation under Article 21 to provide emergency medical treatment. However, private hospitals that stabilize patients are not legally mandated to bear permanent hospice costs. In subsequent High Court pronouncements, courts have repeatedly held that children and legal heirs possessing property cannot abdicate their financial duty toward elderly parents by dumping them in private ICUs.
                  </p>
                </div>
              </section>

              {/* Section 6: Scenario Tabs Component */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    06
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Practical Case Scenarios
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Clinical &amp; Kin Abandonment Failure Modes &amp; Recovery Actions
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Explore tailored operational protocols for the four most prevalent patient abandonment scenarios encountered in Indian tertiary hospitals:
                </p>

                <AbandonedPatientScenarioTabs />
              </section>

              {/* Section 7: Senior Citizens Act Section 24 & Civil Guarantor Enforcement */}
              <section
                id="heading-senior-citizens-recovery"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    07
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Statutory Recovery Mechanisms
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Senior Citizens Act Section 24 &amp; Civil Guarantor Enforcement
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering overdue inpatient bills exceeding ₹15 Lakh from uncooperative relatives requires deploying a dual-track strategy combining criminal deterrence under the Senior Citizens Act with swift commercial litigation under the Code of Civil Procedure:
                </p>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      1. Criminal Prosecution Under Section 24 of the Senior Citizens Act, 2007
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Section 24 provides: <em>&ldquo;Whoever, having the care or protection of senior citizen leaves, such senior citizen in any place with the intention of wholly abandoning such senior citizen, shall be punishable with imprisonment of either description for a term which may extend to three months or with fine which may extend to five thousand rupees or with both.&rdquo;</em>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      When hospital advocates issue a 7-day statutory notice quoting Section 24 and mark a copy to the Senior Superintendent of Police (SSP) and District Social Welfare Officer, absconding adult children face immediate arrest warrants. In over 70% of cases, the threat of public criminal arrest and police interrogation forces relatives to appear, negotiate an EMI settlement, and arrange safe discharge.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      2. Impleading Admission Guarantor Under Contract Act Section 128
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Relatives frequently claim: <em>&ldquo;I only signed the admission paper as a family contact; I never agreed to pay ₹20 Lakh.&rdquo;</em> This defense fails under Section 128 of the Indian Contract Act, 1872. If the hospital&apos;s admission form incorporates a standard co-extensive suretyship clause (available in our{" "}
                      <Link
                        href="/templates/promissory-note-format-india"
                        className="text-red-600 underline font-semibold hover:text-red-700"
                      >
                        Promissory Note &amp; Guarantor Templates
                      </Link>
                      ), the liability of the guarantor is co-extensive with the patient. The hospital can initiate an Order XXXVII CPC Summary Suit directly against the earning child without having to wait or exhaust proceedings against the incapacitated parent.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      3. Quantum Meruit Enforcement on Patient&apos;s Inherited Estate
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under Section 70 of the Indian Contract Act, when a person lawfully provides non-gratuitous medical care and life support to another, the recipient (or their estate) is bound to make compensation. If the abandoned senior citizen owns real estate, fixed deposits, or ancestral agricultural property, the hospital can seek an interim attachment before judgment under Order XXXVIII Rule 5 CPC, restraining the children from selling or mortgaging the assets until hospital dues are fully settled.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 rounded-xl p-4 text-xs sm:text-sm space-y-1">
                  <p className="font-bold text-amber-400">Pre-Litigation Strategic Linkages:</p>
                  <p className="text-slate-300 leading-relaxed">
                    If the relatives issued post-dated discharge cheques that bounced, review our strict{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-red-400 underline font-semibold hover:text-white"
                    >
                      Section 138 NI Act 30-Day Notice Timeline
                    </Link>
                    . If the patient was a government pensioner or ECHS/CGHS dependent abandoned after package expiry, serve a formal{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-red-400 underline font-semibold hover:text-white"
                    >
                      Section 80 CPC Notice to Government &amp; Ministries
                    </Link>{" "}
                    to recover bed subsidies from state welfare budgets.
                  </p>
                </div>
              </section>

              {/* Section 8: Worked Bed-Loss & Recovery Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    08
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Financial Impact &amp; Recovery Accounting
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Bed-Loss &amp; Recovery Ledger: ₹18.45 Lakh Long-Stay Case
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consider a real-world institutional scenario: a 68-year-old post-hemorrhagic stroke patient was admitted to a private multi-specialty hospital ICU in Mumbai. Stabilization was achieved on Day 18. The family abandoned communication on Day 22. By Day 85, when administrative transfer to a Government Medical College was executed, the total hospital claim stood at ₹18,45,000.
                </p>

                {/* Ledger Breakdown Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Audit Ledger &bull; 85-Day Long-Stay Breakdown
                    </span>
                    <span className="text-xs font-mono text-slate-400">REF: HMS-ICU-2026-904</span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-300">Acute ICU Care (Days 1–18 @ ₹25,000/day):</span>
                      <span className="font-mono text-slate-100 font-bold">₹4,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-300">Craniotomy Surgery, Anesthesia &amp; OT Consumables:</span>
                      <span className="font-mono text-slate-100 font-bold">₹3,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-300">Post-Stabilization Step-Down HDU Bed (Days 19–85, 67 days @ ₹12,000/day):</span>
                      <span className="font-mono text-slate-100 font-bold">₹8,04,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-300">Parenteral Nutrition, Pharmacy &amp; Tracheostomy Consumables:</span>
                      <span className="font-mono text-slate-100 font-bold">₹1,85,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-300">ALS Ambulance Inter-Hospital Transfer with Medical Escort:</span>
                      <span className="font-mono text-slate-100 font-bold">₹36,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60 text-emerald-400">
                      <span>Less Initial Admission Deposit Collected:</span>
                      <span className="font-mono font-bold">-₹1,50,000</span>
                    </div>
                    <div className="flex justify-between pt-2 text-sm sm:text-base font-black text-white">
                      <span>Net Outstanding Institutional Claim:</span>
                      <span className="font-mono text-emerald-400">₹16,45,000</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-3.5 rounded-xl text-xs text-slate-300 space-y-1">
                    <p className="font-bold text-amber-300">Statutory Interest &amp; Damages Claimable:</p>
                    <p className="leading-relaxed">
                      Under Section 34 CPC and Section 73 Contract Act, the hospital claimed pre-suit commercial interest at 18% p.a. (₹2,46,750 for 10 months) plus exemplary damages for wrongful deprivation of an emergency critical bed. Total Order XXXVII summary suit valuation: <span className="font-bold text-white">₹18,91,750</span>.
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For complex billing scenarios involving TPA deductions, you can calculate accrued statutory interest using our dedicated{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-600 underline font-semibold hover:text-red-700"
                  >
                    Delayed Commercial Payment Interest Calculator
                  </Link>
                  .
                </p>
              </section>

              {/* Section 9: BSA 2023 s.63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    09
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Litigation Readiness
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 s.63 Clinical Logs &amp; Medico-Legal Audit Checklist
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic evidence—including Hospital Management System (HMS) logs, biometric access timestamps, CCTV footage, and WhatsApp notices—is primary evidence in court provided a statutory certificate is executed by the Systems Administrator. Ensure the following 7 documents are certified:
                </p>

                <div className="space-y-3">
                  {EVIDENCE_CHECKLIST.map((doc, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 bg-slate-50 hover:bg-slate-100/80 transition-colors flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-900">{doc.item}</p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {doc.purpose}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10: Dual Track CTA */}
              <section id="heading-cta-desk" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    10
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Take Action
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Deploy Hospital Abandonment Protocol: ₹999 Test or Multi-Bed CSV
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether you are resolving an individual high-risk long-stay abandonment case or cleaning up chronic bed-blockers across a multi-hospital healthcare group, deploy our specialized advocate-managed recovery framework:
                </p>

                <AbandonedPatientCTA />
              </section>

              {/* Section 11: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    11
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Frequently Asked Questions
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions on Patient Abandonment &amp; Unpaid Bills
                </h2>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50 overflow-hidden transition-all duration-150"
                    >
                      <summary className="flex items-center justify-between p-4 cursor-pointer text-xs sm:text-sm font-bold text-slate-900 hover:text-[#DC2626]">
                        <span>{faq.question}</span>
                        <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform duration-200">
                          ▼
                        </span>
                      </summary>
                      <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200 bg-white leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Statutory Authorities & Precedents */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    12
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Statutory Library
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities, Clinical Acts &amp; Medico-Legal Precedents
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All protocols and legal escalation steps detailed in this guide conform to official Indian statutes and Supreme Court authorities:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-700 underline font-medium hover:text-red-900"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <p>
                    <strong>Practice Precaution:</strong> This operational protocol is designed for hospital leadership, Medical Superintendents, and legal counsels. Hospital administrators must adapt specific transfer timelines to state-specific Clinical Establishments rules and District Magistrate standing orders.
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
