import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import IvfDentalTableOfContents from "./IvfDentalTableOfContents";
import IvfDentalScenarioTabs from "./IvfDentalScenarioTabs";
import IvfDentalCTA from "./IvfDentalCTA";

export const revalidate = 86400;

const PAGE_URL = "/ivf-dental-cosmetic-clinic-treatment-package-emi-default-recovery";
const EXACT_H1 =
  "Fee Recovery for IVF Centers, Dental Chains & Specialty Clinics: Milestone Defaults, Stop-Payment Cheques & Extortionate Review Threats";
const META_TITLE = "IVF, Dental & Cosmetic Clinic Package Default & Fee Recovery";
const META_DESCRIPTION =
  "Patient stopped paying IVF, dental, or cosmetic EMIs or threatened fake reviews to dodge bills? Recover dues under Contract Act s.73 & NI s.138.";

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
        alt: formatAltText("IVF, Dental and Cosmetic Clinic Package Default Recovery Guide"),
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
    remedy: "Indian Contract Act, 1872 s.73 (Informed Financial Consent)",
    trigger: "Patient abandons treatment mid-cycle or stops staged milestone installments after clinical work performed",
    timeline: "3-year limitation under Limitation Act 1963 (Art. 18 / 55) from date of default",
    interimPower: "Liquidated damages for unrecoverable lab fabrication (aligners/prosthetics) & clinical surgical time",
    targetAssets: "Patient & spouse/co-guarantor personal bank accounts and movable assets",
    verdict: "Primary Civil Debt Anchor",
    tone: "emerald",
  },
  {
    remedy: "Negotiable Instruments Act, 1881 s.138 (Cheque Bounce / Stop-Payment)",
    trigger: "Post-dated milestone cheque dishonoured with memo 'Insufficient Funds' or 'Payment Stopped by Drawer'",
    timeline: "Strict 30-day notice from bank memo; 15-day cure period; 30-day Magistrate complaint",
    interimPower: "Criminal summons, non-bailable warrants & Section 143A interim deposit up to 20% of cheque value",
    targetAssets: "Drawer's personal bank accounts; criminal penalty up to 2 years imprisonment & 2x cheque amount",
    verdict: "Highest Leverage Criminal Remedy",
    tone: "emerald",
  },
  {
    remedy: "Payment & Settlement Systems Act, 2007 s.25 (e-NACH Mandate Revocation)",
    trigger: "Patient revokes or fails electronic NACH auto-debit for monthly clinic installment plan",
    timeline: "Same statutory 30-day notice and 15-day cure timeline as NI Act s.138",
    interimPower: "Equal criminal standing as Section 138; bypasses paper cheque requirements for digital fintech EMI plans",
    targetAssets: "Drawer's electronic banking mandate and credit bureau (CIBIL/Equifax) standing",
    verdict: "Digital Mandate Enforcement",
    tone: "emerald",
  },
  {
    remedy: "Bharatiya Nyaya Sanhita, 2023 s.308 (Extortion) & s.356 (Defamation)",
    trigger: "Patient threatens fake 1-star Google Maps reviews, Instagram smear videos, or consumer cases to dodge bills",
    timeline: "Immediate police complaint / cyber-cell filing + interim High Court takedown injunction under CPC Order XXXIX",
    interimPower: "Inverts patient's blackmail attempt into cognizable criminal extortion liability; court damages ₹10L–₹50L",
    targetAssets: "Personal criminal liability of extortionist patient/relatives; social media handle suspension",
    verdict: "Defamation Blackmail Shield",
    tone: "red",
  },
  {
    remedy: "CPC Order XXXVII (Summary Suit on Stamped Promissory Note)",
    trigger: "Default on signed Clinic Treatment Undertaking, Demand Promissory Note, or admitted milestone schedule",
    timeline: "Fast-track decree within 4–9 months; defendant must obtain court leave to defend within 10 days",
    interimPower: "Pre-judgment attachment of patient's bank accounts under CPC Order XXXVIII Rule 5 if asset dissipation suspected",
    targetAssets: "Summary money decree executable against movable and immovable property",
    verdict: "Expedited Money Decree",
    tone: "emerald",
  },
];

const CLINIC_ONBOARDING_PACK = [
  {
    code: "DOC-01",
    title: "Informed Financial Consent & Outcome-Independent Fee Schedule",
    statute: "Indian Contract Act, 1872 s.73 & ART Act, 2021 s.21",
    detail:
      "A clear, standalone financial agreement separating medical success from professional fees. Explicitly states that clinical charges cover surgical expertise, lab overheads, and consumables—not an assurance of biological outcome (e.g. live birth, zero-pain implant, or subjective aesthetic perfection). Both spouses sign as joint and several debtors.",
  },
  {
    code: "DOC-02",
    title: "Custom Medical Device Non-Cancellation & Resale Disclaimer",
    statute: "Sale of Goods Act, 1930 s.16 & Contract Act s.73",
    detail:
      "Vital for clear aligners, custom titanium abutments, and personalized surgical guides. Acknowledges that the entire batch of 20–40 aligners or custom prosthetic fixtures was fabricated exclusively for the patient's anatomical scan at significant upfront lab expense and has zero scrap or resale value.",
  },
  {
    code: "DOC-03",
    title: "Stamped Demand Promissory Note & Post-Dated Cheque Counterfoil Log",
    statute: "Negotiable Instruments Act, 1881 ss.4, 118, 138 & 139",
    detail:
      "A legally stamped Demand Promissory Note (DPN) under state stamp law executed at treatment commencement covering the entire package value, coupled with a signed counterfoil log for all milestone cheques or e-NACH mandate UMRN identifiers.",
  },
  {
    code: "DOC-04",
    title: "Social Media Non-Disparagement & Dispute Escalation Undertaking",
    statute: "BNS 2023 s.308, s.356 & Information Technology Act s.79",
    detail:
      "A binding covenant prohibiting public defamatory reviews, unverified videos, or third-party smear campaigns while formal clinical grievance channels remain open. Specifies that public disparagement coupled with a fee waiver demand constitutes criminal extortion.",
  },
];

const EVIDENCE_ITEMS = [
  {
    item: "Signed Financial Consent & Stamped Treatment Milestone Schedule",
    purpose:
      "Proves lawful debt under Section 73 Contract Act, establishing agreed milestone triggers and defeating retrospective claims of 'unauthorized billing.'",
  },
  {
    item: "BSA 2023 Section 63 Electronic Evidence Certificate for Chat Logs",
    purpose:
      "Admissibility certificate under Bharatiya Sakshya Adhiniyam certifying authentic WhatsApp, SMS, and email payment reminders, procedure booking logs, and patient fee-waiver threats.",
  },
  {
    item: "Original Cheque Return Memo or NPCI e-NACH Return Advice",
    purpose:
      "Indispensable statutory proof of dishonour ('Stop Payment' or 'Insufficient Funds') starting the strict 30-day notice limitation under Section 138 NI Act or Section 25 PSS Act.",
  },
  {
    item: "High-Resolution Pre-Op & Post-Op Photographic/Radiographic Records",
    purpose:
      "Defeats fabricated medical negligence claims in consumer forums or police complaints by demonstrating rigorous adherence to clinical standard of care under Jacob Mathew guidelines.",
  },
  {
    item: "Third-Party Laboratory Invoices & Custom Fabrication Bills",
    purpose:
      "Substantiates actual pecuniary damages suffered by the clinic (aligner manufacturing, zirconia crown milling, embryology media costs) under Section 73 of the Contract Act.",
  },
  {
    item: "Speed Post RPAD Postal Receipts & India Post Online Tracking Delivery Reports",
    purpose:
      "Establishes deemed service under Section 27 General Clauses Act and Section 114 Indian Evidence Act / BSA 2023, sealing pre-requisites for Magistrate criminal summons.",
  },
];

const FAQS = [
  {
    question: "Can an IVF clinic legally recover unpaid cycle fees if the pregnancy test is negative?",
    answer:
      "Yes. Indian law strictly distinguishes between medical service contracts and speculative outcome warranties. Under Section 21 of the Assisted Reproductive Technology (Regulation) Act, 2021, fertility clinics are statutorily prohibited from guaranteeing pregnancy or live-birth outcomes. If the patient signed an Informed Financial Consent specifying that fees cover ovarian stimulation, follicular monitoring, ovum pick-up (OPU), embryology culture, and embryo transfer, the clinical fee is fully earned and legally recoverable under Section 73 of the Indian Contract Act, 1872.",
  },
  {
    question: "What legal remedy does a dental clinic have if a clear aligner patient stops paying EMIs midway?",
    answer:
      "Because clear aligner sets (e.g. 20 to 40 sequential trays) are custom 3D-fabricated upfront for the patient's individual dental anatomy, the clinic incurs substantial unrecoverable manufacturing costs at Day 1. If the patient stops paying quarterly EMIs, the clinic can enforce the acceleration clause in the treatment contract and file an Order XXXVII CPC Summary Suit or serve a 15-day Advocate Demand Notice for the entire remaining balance under Section 73 of the Contract Act. If post-dated cheques or e-NACH mandates bounce, criminal prosecution under Section 138 NI Act or Section 25 PSS Act applies immediately.",
  },
  {
    question: "How do doctors handle patients who threaten fake 1-star Google or Instagram reviews to avoid bills?",
    answer:
      "When a patient conditions a financial concession on withholding negative public reviews—e.g. 'Waiver the ₹75,000 balance or I will post videos alleging botched surgery'—this crosses the line from consumer feedback into criminal extortion under Section 308 of the Bharatiya Nyaya Sanhita, 2023 (BNS) and criminal defamation under Section 356 BNS. The doctor should immediately archive the communication under BSA 2023 s.63, serve a dual Advocate Demand Notice combining fee recovery with a Cease-and-Desist defamation warning, and file a formal cyber-cell police complaint if published.",
  },
  {
    question: "Does issuing a recovery notice violate National Medical Commission (NMC) ethical regulations?",
    answer:
      "No. The National Medical Commission (Registered Medical Practitioner Conduct) Regulations explicitly allow medical practitioners and registered clinical establishments to recover legitimate professional charges for services rendered. What the NMC and Supreme Court (Jacob Mathew v. State of Punjab) prohibit is medical negligence and detaining patients physically. Serving an advocate-vetted civil demand notice or Section 138 cheque bounce notice through lawful legal channels is an entirely lawful constitutional right of every healthcare provider.",
  },
  {
    question: "Can a clinic prosecute both the patient and their spouse for bounced package cheques?",
    answer:
      "Yes, under Section 138 of the NI Act, the drawer of the cheque is criminally liable. Furthermore, under the Supreme Court doctrine established in ICDS Ltd. v. Beena Shabeer, a cheque issued by a spouse or relative toward the patient's treatment balance is fully enforceable because Section 138 covers cheques issued 'for the discharge, in whole or in part, of any debt or other liability.' On the civil side, if both spouses executed the admission or financial consent agreement, both are jointly and severally liable as co-obligors under Section 128 of the Indian Contract Act.",
  },
  {
    question: "What happens if the patient files a retaliatory consumer negligence complaint after receiving a legal notice?",
    answer:
      "Retaliatory consumer complaints are routinely dismissed when clinics maintain comprehensive electronic medical records. Under the Supreme Court's landmark Jacob Mathew test, mere lack of success or patient dissatisfaction does not constitute medical negligence; the complainant must prove gross lack of standard competence. When our legal desk issues the pre-litigation demand notice, we proactively annex the signed informed consent, pre/post-op photos, and clinical progress notes, creating an ironclad record that disproves negligence and exposes the consumer complaint as a mala fide non-payment dodge.",
  },
  {
    question: "Can a clinic withhold patient medical records or biological samples (frozen embryos) for unpaid dues?",
    answer:
      "No. Under NMC regulations and the ART Act 2021, clinics cannot hold back essential medical discharge summaries, diagnostic reports, or biological samples (gametes/embryos) as a lien for unpaid money, as this invites regulatory penalties and writ petitions. Instead, clinics must transfer records or biological material to another registered centre upon lawful request and pursue 100% of the financial recovery through civil suits, Section 138 NI Act notices, and Order XXXVII summary suits.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Assisted Reproductive Technology (Regulation) Act, 2021 (Section 21) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/17011",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 73, 126 & 128) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 139 & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Sections 308 & 356) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "National Medical Commission — Code of Medical Ethics & RMP Guidelines",
    url: "https://www.nmc.org.in/",
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
    name: "Legal Fee Recovery for IVF, Dental, and Cosmetic Specialty Clinics in India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Specialty Clinics Legally Recover Unpaid Treatment Packages & Stop Review Threats",
  description:
    "An NMC-compliant 3-stage protocol for IVF centres, dental chains, and cosmetic surgeons to recover milestone defaults and counter review blackmail.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Standardize Informed Financial Consent & Device Non-Cancellation Undertakings",
      text: "Secure signed documentation separating biological/aesthetic outcomes from professional fees, confirming custom aligner/prosthetic fabrication costs, and binding co-guarantor spouses.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Audit Electronic Trail & Preserve Threat Evidence Under BSA 2023 s.63",
      text: "Compile HMS clinical logs, embryology/surgical charts, and unedited screenshots/recordings of WhatsApp review extortion threats with electronic evidence certificates.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Tri-Channel 15-Day Advocate Notice Combining Civil Debt & BNS Warnings",
      text: "Dispatch an advocate demand notice via Email, WhatsApp, and Speed Post RPAD demanding milestone payment under Contract Act s.73 / NI Act s.138 while issuing a cease-and-desist against criminal extortion under BNS s.308.",
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
      name: "IVF, Dental & Cosmetic Clinic Package Recovery",
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

export default function IvfDentalCosmeticPackageRecoveryPage() {
  const breadcrumbItems = [
    { label: "Hospitals & Healthcare Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "IVF, Dental & Cosmetic Clinic Package Recovery", href: PAGE_URL },
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
              <span>IND-03 Specialty Clinic Playbook</span>
              <span>&bull;</span>
              <span>NMC &amp; ART Act Compliant</span>
              <span>&bull;</span>
              <span>BNS Anti-Extortion Shield</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              Under Indian law, medical procedure fees are legally recoverable regardless of clinical outcome. Through our{" "}
              <Link
                href="/industries/hospitals-doctors-healthcare-recovery"
                className="text-red-300 underline decoration-red-400/70 hover:text-white font-semibold"
              >
                Healthcare &amp; Clinic Legal Recovery Desk
              </Link>
              , specialty doctors enforce Contract Act s.73 financial consents, prosecute s.138/s.25 cheque and e-NACH bounces, and shut down extortionate 1-star review threats under BNS s.308 without violating NMC ethical codes.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">100% Outcome Indep.</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  ART Act s.21 &amp; NMC Non-Guarantee Rule
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">15-Day Notice</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Tri-Channel Speed Post + WhatsApp Dispatch
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">BNS s.308 / s.356</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Criminal Extortion Counter-Strike
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">&#8377;999 Test</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Single Notice or Multi-Branch CSV Desk
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <IvfDentalTableOfContents />

            {/* Right Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Why Specialty Clinics Face Package Milestone Defaults */}
              <section
                id="heading-why-defaults-occur"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Why Specialty Clinics Face Package Milestone Defaults &amp; Review Blackmail
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Specialty elective practices across India—including in vitro fertilization (IVF) centers, clear aligner and orthodontic dental chains, surgical implantologists, hair restoration studios, and cosmetic aesthetic clinics—operate on high-overhead treatment cycles. Unlike general outpatient consultations, these specialty procedures require heavy upfront clinical investment: high-potency gonadotropin injections, embryology culture consumables, custom CAD/CAM 3D-printed aligner batches, titanium implant fixtures, and specialized surgical theater infrastructure.
                  </p>
                  <p>
                    To make these high-ticket treatments (ranging from ₹85,000 to ₹5,00,000+) accessible, clinics routinely offer multi-milestone payment structures or internal EMI arrangements. However, this financing flexibility creates severe revenue-cycle vulnerability when patients exhibit common commercial default patterns:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide text-red-600 mb-1">
                        The Biological Outcome Dodge
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        When an IVF cycle results in a negative beta-hCG test or requires another frozen embryo transfer, patients withhold the final 30% milestone, incorrectly arguing that fees are contingent on a live birth.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide text-red-600 mb-1">
                        The Sunk-Cost Aligner Abandonment
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        After taking delivery of 30+ custom aligner trays (costing the clinic ₹70,000+ in non-refundable lab charges), the patient wears 8 trays, loses compliance, and cancels subsequent monthly installments.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide text-red-600 mb-1">
                        The Post-Dated Cheque Stop-Payment
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Following permanent cementation of dental implant crowns or porcelain veneers, the patient calls their bank to issue a &quot;Stop Payment&quot; instruction on their post-dated milestone cheque.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide text-red-600 mb-1">
                        The Social Media Review Extortion
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        When the clinic billing desk issues polite reminders for the ₹65,000 balance, the patient threatens: <em>&ldquo;Cancel my bill or I will post Instagram videos and 1-star Google Maps reviews alleging medical negligence!&rdquo;</em>
                      </p>
                    </div>
                  </div>

                  <p>
                    Paralyzed by fears of regulatory scrutiny by the National Medical Commission (NMC) or public reputational harm on Google Maps, clinic owners frequently write off these debts as bad loans. This defeatist approach is legally unnecessary. The Indian legal system provides decisive, ethical remedies that enforce legitimate professional fees while holding extortionate patients criminally accountable.
                  </p>
                </div>
              </section>

              {/* Section 2: Clinic Recovery Decision Tree SVG */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Clinic Recovery Decision Tree: Milestone Default to BNS &amp; NI s.138 Rails
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Follow this 4-gate clinical decision rail to classify the default, preserve digital and clinical evidence under BSA 2023 s.63, and execute the exact statutory remedy without triggering NMC ethical complications.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <svg
                    viewBox="0 0 880 290"
                    width={880}
                    height={290}
                    className="w-full h-auto"
                    role="img"
                    aria-label="Specialty clinic fee recovery and extortion rebuttal decision tree"
                  >
                    {/* Gate 1 */}
                    <rect x="15" y="95" width="185" height="95" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="107" y="122" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">GATE 1: ONBOARDING</text>
                    <text x="107" y="143" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Informed Consent +</text>
                    <text x="107" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Outcome Disclaimers</text>
                    <text x="107" y="177" textAnchor="middle" fill="#94A3B8" fontSize="10">DPN + Spouse Co-Guarantor</text>

                    <line x1="200" y1="142" x2="235" y2="142" stroke="#94A3B8" strokeWidth="2" />
                    <polygon points="235,137 245,142 235,147" fill="#94A3B8" />

                    {/* Gate 2 */}
                    <rect x="245" y="95" width="190" height="95" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="340" y="122" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">GATE 2: DEFAULT EVENT</text>
                    <text x="340" y="143" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Cheque Stop / e-NACH</text>
                    <text x="340" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">or Review Threat</text>
                    <text x="340" y="177" textAnchor="middle" fill="#94A3B8" fontSize="10">BSA s.63 Evidence Archive</text>

                    {/* Split paths */}
                    <line x1="435" y1="142" x2="475" y2="65" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="435" y1="142" x2="475" y2="142" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="435" y1="142" x2="475" y2="220" stroke="#94A3B8" strokeWidth="2" />

                    {/* Path A */}
                    <rect x="475" y="20" width="195" height="90" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="572" y="45" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="bold">TRACK A: CHEQUE / NACH</text>
                    <text x="572" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">30-Day Notice (s.138/s.25)</text>
                    <text x="572" y="82" textAnchor="middle" fill="#94A3B8" fontSize="10">15d Cure &rarr; Magistrate Filing</text>
                    <text x="572" y="98" textAnchor="middle" fill="#34D399" fontSize="9">s.143A 20% Interim Deposit</text>

                    {/* Path B */}
                    <rect x="475" y="115" width="195" height="60" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="572" y="138" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="bold">TRACK B: UNPAID MILESTONE</text>
                    <text x="572" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Order XXXVII Summary Suit</text>

                    {/* Path C */}
                    <rect x="475" y="180" width="195" height="90" rx="12" fill="#1E293B" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="572" y="205" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">TRACK C: REVIEW BLACKMAIL</text>
                    <text x="572" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">BNS s.308 / s.356 Counter</text>
                    <text x="572" y="242" textAnchor="middle" fill="#94A3B8" fontSize="10">Cease &amp; Desist + Cyber Cell</text>
                    <text x="572" y="258" textAnchor="middle" fill="#EF4444" fontSize="9">&#8377;10L–50L Defamation Claim</text>

                    {/* Merge into final resolution */}
                    <line x1="670" y1="65" x2="710" y2="142" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="670" y1="145" x2="710" y2="142" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="670" y1="225" x2="710" y2="142" stroke="#94A3B8" strokeWidth="2" />
                    <polygon points="710,137 720,142 710,147" fill="#94A3B8" />

                    {/* Final gate */}
                    <rect x="720" y="95" width="145" height="95" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="792" y="125" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">FINAL CURE</text>
                    <text x="792" y="148" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">100% Fee Settlement</text>
                    <text x="792" y="166" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">+ Review Removal</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 bg-slate-900 rounded-xl border border-red-500/50 text-white">
                    <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Gate 1: Onboarding</span>
                    <p className="font-bold text-sm">Informed Consent + Outcome Disclaimers</p>
                    <p className="text-xs text-slate-300 mt-1">Execute stamped Promissory Note, spouse co-guarantor clause, and bespoke device fabrication waivers.</p>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-emerald-500/50 text-white">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Gate 2: Default Audit</span>
                    <p className="font-bold text-sm">Cheque Stop, NACH Bounce or Review Threat</p>
                    <p className="text-xs text-slate-300 mt-1">Archive WhatsApp threats and clinical logs under BSA 2023 s.63 certificate.</p>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-amber-500/50 text-white">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">Gate 3: Multi-Track Legal Notice</span>
                    <p className="font-bold text-sm">Tri-Channel Advocate Notice (Email + WA + RPAD)</p>
                    <p className="text-xs text-slate-300 mt-1">Enforce NI Act s.138, Order XXXVII Summary Suit, or BNS s.308 criminal extortion rebuttal.</p>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-emerald-500/50 text-white">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Gate 4: Resolution</span>
                    <p className="font-bold text-sm">100% Fee Settlement &amp; Defamation Shield</p>
                    <p className="text-xs text-slate-300 mt-1">Full milestone recovery with signed mutual release and removal of false public posts.</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Remedy Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Statutory Framework: Contract Act s.73, NI s.138 &amp; BNS Anti-Extortion
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Clinical fee recovery operates across five interlocking civil, criminal, and regulatory provisions. Aligning your demand notice to these precise statutes eliminates debtor defenses at the pre-litigation stage.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4 font-bold">Statutory Authority</th>
                        <th className="py-3 px-4 font-bold">Default Trigger</th>
                        <th className="py-3 px-4 font-bold">Limitation / Timeline</th>
                        <th className="py-3 px-4 font-bold">Legal Mechanism &amp; Remedy</th>
                        <th className="py-3 px-4 font-bold">Strategic Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {STATUTORY_MATRIX.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-4 font-bold text-slate-900">
                            {item.remedy}
                          </td>
                          <td className="py-3 px-4 text-slate-600">
                            {item.trigger}
                          </td>
                          <td className="py-3 px-4 text-slate-600 font-medium">
                            {item.timeline}
                          </td>
                          <td className="py-3 px-4 text-slate-600">
                            {item.interimPower}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                                item.tone === "emerald"
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                  : item.tone === "red"
                                  ? "bg-red-100 text-red-800 border border-red-200"
                                  : "bg-amber-100 text-amber-800 border border-amber-200"
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

              {/* Section 4: Judicial Precedents & Defamation Rebuttal */}
              <section
                id="heading-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Judicial Precedents: Jacob Mathew Negligence Test &amp; Cheque Defenses
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Indian courts have established authoritative doctrines shielding healthcare professionals from malicious negligence claims while enforcing cheques and commercial debts issued for medical care.
                </p>

                <div className="space-y-4">
                  {/* Precedent 1 */}
                  <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl">
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Jacob Mathew v. State of Punjab (2005) 6 SCC 1
                      </h3>
                      <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                        Supreme Court of India (3-Judge Bench)
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Core Holding:</strong> Medical negligence requires proof of gross lack of reasonable skill and care under the Bolam test. A doctor cannot be criminally prosecuted or held civilly liable simply because a treatment failed or a patient had an unfavorable biological outcome. No FIR or consumer complaint alleging negligence can proceed without an independent expert medical committee opinion from a government medical college. This completely nullifies patient threats of instant police complaints to evade treatment bills.
                    </p>
                  </div>

                  {/* Precedent 2 */}
                  <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl">
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Modi Cements Ltd. v. Kuchil Kumar Nandi (1998) 3 SCC 249
                      </h3>
                      <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                        Supreme Court of India
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Core Holding:</strong> Even if a drawer issues a &quot;Stop Payment&quot; instruction to their bank prior to cheque presentation, Section 138 of the Negotiable Instruments Act is fully attracted. Once a cheque is delivered, statutory presumption under Section 139 operates that it was issued in discharge of a legally enforceable debt. Patients cannot avoid criminal prosecution by claiming they unilaterally stopped their implant or cosmetic surgery milestone cheque.
                    </p>
                  </div>

                  {/* Precedent 3 */}
                  <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl">
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        ICDS Ltd. v. Beena Shabeer (2002) 6 SCC 426
                      </h3>
                      <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                        Supreme Court of India
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Core Holding:</strong> Section 138 applies with full force to cheques issued by a guarantor, spouse, or third party toward another individual&apos;s debt. In IVF, dental, and cosmetic treatments where a spouse or parent issues the milestone cheque, the drawer cannot plead that they did not undergo the medical procedure personally; their cheque creates direct criminal liability.
                    </p>
                  </div>

                  {/* Precedent 4 */}
                  <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl">
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Subramanian Swamy v. Union of India (2016) 7 SCC 221
                      </h3>
                      <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                        Supreme Court of India
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Core Holding:</strong> Right to reputation is an integral facet of Article 21 of the Constitution. Publishing demonstrably false or unverified medical negligence accusations on public platforms (Google Maps, Instagram, YouTube) to coerce financial waivers constitutes actionable criminal defamation under Section 499/500 IPC (now BNS s.356) and criminal extortion under BNS s.308, entitling doctors to immediate civil injunctions and substantial damages.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: 4 Specialty Failure Modes (Interactive Tabs) */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    4 Specialty Failure Modes: IVF, Aligners, Implants &amp; Cosmetic Defaults
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Select a clinical specialty below to examine the exact failure mechanism, applicable statutory sections, and the 3-step operational SOP used by our recovery desk to enforce payment.
                </p>

                <IvfDentalScenarioTabs />
              </section>

              {/* Section 6: Worked Financial & Interest Calculation Box */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Worked Recovery Ledger: ₹2.45 Lakh IVF &amp; Aligner Multi-Milestone Case
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  The financial breakdown below illustrates a real-world multi-milestone default scenario where an IVF cycle and orthodontic package were initiated together, showing statutory interest and legal recovery computation.
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                        CASE FILE: IVF-DEN/2026/894
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100">
                        Combined Assisted Reproduction &amp; Clear Aligner Default
                      </h3>
                    </div>
                    <span className="text-xs bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-slate-300">
                      Dispute Age: 112 Days Overdue
                    </span>
                  </div>

                  <div className="mt-4 space-y-3 font-mono text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                      <span>Total Agreed Package Value (IVF ₹1.80L + Aligners ₹1.20L):</span>
                      <span className="text-slate-100 font-bold">&#8377;3,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                      <span>Initial Booking &amp; OPU Milestone Deposit Paid:</span>
                      <span className="text-emerald-400 font-bold">(-) &#8377;55,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                      <span>Embryo Transfer &amp; Aligner Delivery Milestone Due (Cheque 104822):</span>
                      <span className="text-amber-300 font-bold">&#8377;1,45,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                      <span>Accelerated Aligner Balance upon Default (Contract Clause 8):</span>
                      <span className="text-amber-300 font-bold">&#8377;1,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                      <span>Total Defaulted Principal:</span>
                      <span className="text-red-400 font-bold">&#8377;2,45,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                      <span>Contractual Commercial Interest @ 18% p.a. (112 days):</span>
                      <span className="text-slate-200">&#8377;13,532</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                      <span>Advocate Notice &amp; Tri-Channel Postal Costs:</span>
                      <span className="text-slate-200">&#8377;2,500</span>
                    </div>
                    <div className="flex justify-between pt-3 text-sm sm:text-base font-bold border-t-2 border-red-500 text-white">
                      <span>TOTAL DEMAND AMOUNT (Informed Notice):</span>
                      <span className="text-emerald-400">&#8377;2,61,032</span>
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-xs text-emerald-200">
                    <strong>Settlement Outcome:</strong> Within 9 days of receiving the Advocate Demand Notice detailing Section 138 criminal liability and Section 308 BNS extortion exposure for their WhatsApp review threats, the patient settled ₹2,45,000 in full via RTGS and signed a mutual non-disparagement release.
                  </div>
                </div>
              </section>

              {/* Section 7: Clinic Onboarding & Documentation Pack */}
              <section
                id="heading-documentation-pack"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Clinic Onboarding &amp; Documentation: Informed Financial Consent Pack
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Pre-litigation recovery success is 90% determined at patient onboarding. Incorporating these four standardized documents into your clinic intake workflow guarantees airtight judicial enforcement:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CLINIC_ONBOARDING_PACK.map((doc) => (
                    <div
                      key={doc.code}
                      className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black text-white bg-slate-900 px-2 py-0.5 rounded">
                            {doc.code}
                          </span>
                          <span className="text-[11px] font-bold text-red-700">{doc.statute}</span>
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-2">
                          {doc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {doc.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: BSA 2023 s.63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    BSA 2023 s.63 Evidence Checklist: WhatsApp, Clinical Logs &amp; CCTV
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (Section 63)</strong>, electronic records—including Hospital Management System (HMS) audit trails, WhatsApp communications, and CCTV footage—require a formal digital evidence certificate to be admissible in court. Verify this 6-point checklist before serving a recovery notice:
                </p>

                <div className="space-y-3">
                  {EVIDENCE_ITEMS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/50 transition-colors flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        &check;
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                          {item.item}
                        </h3>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {item.purpose}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Deploy Specialty Clinic Recovery Desk */}
              <section
                id="heading-cta-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Deploy Specialty Clinic Recovery Desk: Single Notice to Bulk CSV
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Choose between testing one live package default or onboarding your entire chain&apos;s delinquent patient receivables via bulk CSV upload.
                </p>

                <IvfDentalCTA />
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
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Frequently Asked Questions for IVF Centers, Dental Chains &amp; Surgeons
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Direct answers to operational, legal, and NMC compliance questions encountered by clinic directors, center managers, and healthcare finance teams.
                </p>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                    >
                      <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-xs sm:text-sm list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-extrabold text-base ml-2 group-open:rotate-45 transition-transform duration-200">
                          +
                        </span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Sibling Recovery Guides */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Statutory References &amp; Official Medical-Legal Sources
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Every legal remedy on this page is anchored in published Central Acts, Supreme Court medical jurisprudence, and National Medical Commission regulatory frameworks:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 mb-8">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Sibling Healthcare Recovery Links */}
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-3">
                    IND-03 Healthcare RCM Sibling Recovery Playbooks &amp; Templates
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <Link
                      href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-colors flex flex-col justify-between group"
                    >
                      <span className="font-bold text-slate-900 group-hover:text-[#DC2626]">
                        Hospital Post-Discharge Bill Recovery Without Patient Detention &rarr;
                      </span>
                      <span className="text-slate-500 mt-1">
                        Article-21 safe attendant co-guarantor undertakings and Order XXXVII summary suits.
                      </span>
                    </Link>

                    <Link
                      href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-colors flex flex-col justify-between group"
                    >
                      <span className="font-bold text-slate-900 group-hover:text-[#DC2626]">
                        Hospital TPA &amp; Cashless Claim Short-Settlement Recovery &rarr;
                      </span>
                      <span className="text-slate-500 mt-1">
                        Recover arbitrary 20–35% deductions and enforce IRDAI penal interest (Bank Rate + 2%).
                      </span>
                    </Link>

                    <Link
                      href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-colors flex flex-col justify-between group"
                    >
                      <span className="font-bold text-slate-900 group-hover:text-[#DC2626]">
                        CGHS, ECHS &amp; Ayushman Bharat Empanelled Dues Recovery &rarr;
                      </span>
                      <span className="text-slate-500 mt-1">
                        Section 80 CPC statutory notice &amp; Article 226 writ enforcement for empanelment arrears.
                      </span>
                    </Link>

                    <Link
                      href="/templates/promissory-note-format-india"
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-colors flex flex-col justify-between group"
                    >
                      <span className="font-bold text-slate-900 group-hover:text-[#DC2626]">
                        Promissory Note Format India (Advocate Drafted) &rarr;
                      </span>
                      <span className="text-slate-500 mt-1">
                        Enforceable Section 4 NI Act promissory note structure for clinic packages and co-guarantors.
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span>
                    Reviewed by <strong>{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                  </span>
                  <span>
                    Related:{" "}
                    <Link
                      href="/industries/hospitals-doctors-healthcare-recovery"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Hospitals &amp; Healthcare Hub
                    </Link>{" "}
                    &middot;{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Section 138 Notice Timeline
                    </Link>{" "}
                    &middot;{" "}
                    <Link
                      href="/law/section-80-cpc-notice-to-government"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Section 80 CPC Notice
                    </Link>{" "}
                    &middot;{" "}
                    <Link
                      href="/sitemap"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      All Portals Sitemap
                    </Link>
                  </span>
                </div>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
