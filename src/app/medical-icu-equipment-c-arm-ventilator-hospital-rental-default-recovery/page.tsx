import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MedicalTableOfContents from "./MedicalTableOfContents";
import MedicalScenarioTabs from "./MedicalScenarioTabs";
import MedicalRecoveryCTA from "./MedicalRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/medical-icu-equipment-c-arm-ventilator-hospital-rental-default-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Leased C-Arms, ICU Ventilators or ₹30L Aesthetic Lasers to a Nursing Home or Clinic That Defaulted? Patient-Safe Repossession & Arrears Guide";

// Tightened from 62ch PDF draft to 58ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Hospital Medical & Aesthetic Laser Rental Default Recovery";

// Tightened from 163ch PDF draft to 152ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "NEVER unplug an active ICU ventilator without a 7-day Patient-Transfer Notice to Medical Superintendent & CMO. Recover arrears via BNS s.316 & Order XL.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(META_TITLE),
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

const PRIMARY_SOURCES = [
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 — Criminal Breach of Trust by Bailee; Section 317 — Dishonestly Receiving Stolen Property; Section 106 — Causing Death by Negligence)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 148–161 — Bailment, Bailee Duty to Return Hired Goods & Liability for Unauthorized Shifting)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Code of Civil Procedure, 1908 (Order XL Rule 1 — Court Receiver Appointment for Medical Asset Seizure; Order XXXVII — Summary Suit for Liquidated Lease Arrears)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Specific Relief Act, 1963 (Sections 7 & 8 — Recovery of Specific Movable Property & Mandatory Injunction)",
    url: "https://www.indiacode.nic.in/handle/123456789/1583",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 3x RBI Compound Interest for Udyam-Registered MedTech Lessors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of DICOM Logs, Biomedical Service Records, WhatsApp & Email Admissions)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Clinical Establishments (Registration and Regulation) Act, 2010 — Standards of Patient Care & District Registering Authority (CMO)",
    url: "https://www.indiacode.nic.in/handle/123456789/2099",
  },
];

const FAQS = [
  {
    q: "Can a medical equipment lessor unplug or remove an ICU ventilator if the nursing home stops paying rent?",
    a: "Never unilaterally disconnect an ICU ventilator, BiPAP, or multipara monitor that is actively supporting an admitted patient. Doing so exposes the lessor and its field engineers to criminal prosecution under BNS 2023 Section 106 (death by negligence) and regulatory action. Instead, serve a 7-day or 14-day Patient-Transfer & Clinical Handover Statutory Notice on the Medical Superintendent and copy the District Chief Medical Officer (CMO), forcing the hospital to clear arrears or shift the patient before Court Receiver de-installation.",
  },
  {
    q: "What is a 7/14-Day Patient-Transfer Statutory Notice and why must the District CMO be copied?",
    a: "A Patient-Transfer & Clinical Handover Notice formally terminates the equipment bailment while explicitly stating that the lessor will not endanger any admitted patient. By granting 7 days (or 14 days for critical ICU wards) and copying the District CMO / Civil Surgeon, the notice shifts clinical continuity liability squarely onto the hospital management and creates an official administrative record that prevents the nursing home from weaponizing patient safety to retain free hardware.",
  },
  {
    q: "How do I recover unpaid per-case fees on a rented C-Arm, endoscopy tower, or holmium lithotripsy laser?",
    a: "Non-life-support surgical and diagnostic machines can be repossessed between scheduled OT lists once the bailment is terminated. Pair a 7-day Bailment Termination Notice with DICOM study timestamps, AERB radiation exposure logs, or laser pulse-counter logs (certified under BSA 2023 Section 63) to file an Order XXXVII Summary Suit for unpaid per-case / Monthly Minimum Guarantee (MMG) fees alongside an Order XL Rule 1 application for a Court Receiver.",
  },
  {
    q: "A dermatology clinic is refusing to return a ₹30 lakh aesthetic diode laser and claiming 'cooling defects'. What should I do?",
    a: "Cosmetic and dermatology lasers carry zero life-support risk. Pre-empt fabricated defect excuses by compiling your signed Installation & Commissioning Certificate, preventive maintenance (PM) visit sheets, and WhatsApp acknowledgments under BSA s.63. Serve a 7-day BNS Section 316 Bailment Termination Notice fixing a biomedical engineer pick-up slot; if the clinic still withholds access, file a BNS s.316(2) Criminal Breach of Trust complaint and an Order XXXVII suit for running rent plus ₹30L replacement value.",
  },
  {
    q: "What if the defaulting nursing home shifted my rented ventilator or C-Arm to another branch or sold it?",
    a: "Unauthorized relocation to an undisclosed clinic or sale to a second-hand medical equipment broker completes the offence of Criminal Breach of Trust by a bailee under BNS 2023 Section 316(2)/(3) (formerly IPC 406). Any dealer who knowingly buys or holds the serial-numbered machine is also liable under BNS Section 317 (dishonestly receiving stolen property). Serve a BNS s.316 notice with jurisdictional Police Station Email CC to trigger search-and-seizure recovery.",
  },
  {
    q: "Can Udyam-registered medical equipment leasing companies claim 3x RBI interest under the MSMED Act?",
    a: "Yes. If your medical equipment rental or MedTech leasing company holds a valid Udyam Registration under the Micro/Small enterprise category prior to the lease contract, delayed monthly rentals or per-case OT invoices attract mandatory compound interest at 3x the RBI bank rate under MSMED Act Sections 15–16, recoverable via MSEFC Samadhaan or alongside commercial recovery proceedings.",
  },
  {
    q: "Why use an Order XL Rule 1 Court Receiver instead of sending private recovery agents to a hospital?",
    a: "Sending private bouncers into a hospital or nursing home triggers immediate police complaints for trespass, intimidation, and disruption of clinical services. An Order XL Rule 1 CPC Court Receiver—accompanied by your biomedical engineer and local police assistance if ordered—provides court-sanctioned entry, sterile de-installation, and an official inventory panchnama that insulates your company from counter-litigation.",
  },
];

export default function MedicalIcuEquipmentRecoveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
        datePublished: "2026-11-18T09:00:00+05:30",
        dateModified: "2026-11-18T09:00:00+05:30",
        inLanguage: "en-IN",
        author: {
          "@type": "Person",
          // TODO(reviewer): src/data/reviewers.ts is absent in this repository
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "Organization",
            name: "AMA Legal Solutions",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/blog_money_recovery.png`,
          },
        },
        image: `${SITE_URL}/blog_money_recovery.png`,
      },
      {
        "@type": "HowTo",
        "@id": `${CANONICAL_URL}#howto`,
        name: "Patient-Safe Repossession & Arrears Recovery for Leased Hospital Equipment",
        description:
          "5-step clinical-legal escalation protocol to recover overdue rentals and repossess ICU ventilators, C-Arms, and aesthetic lasers from defaulting nursing homes and clinics without clinical liability.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Audit Serial Numbers, Clinical Status & BSA s.63 Logs",
            text: "Verify whether the leased unit is active life-support (ICU ventilator) or non-life-support (C-Arm, endoscopy, aesthetic laser), and compile Delivery Challans, Installation Reports, DICOM/pulse logs, and BSA 2023 s.63 electronic evidence.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Serve 7/14-Day Patient-Transfer & Bailment Termination Notice",
            text: "Dispatch a statutory notice to the Hospital MD and Medical Superintendent—with mandatory CC to the District CMO for ICU units—granting 7 to 14 days to clear arrears or transfer admitted patients safely.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Lock Liquidated Arrears & 3x RBI MSME Interest",
            text: "Compute unpaid monthly minimum guarantees (MMG), per-case OT fees, and statutory MSMED Act 3x RBI compound interest to prevent post-notice negotiation erosion.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Escalate Non-Return or Shifting to BNS s.316 & Order XL Receiver",
            text: "If the hospital shifts the machine, blocks biomedical pick-up, or retains possession past the handover deadline, file for an Order XL Rule 1 Court Receiver and/or a BNS s.316 Criminal Breach of Trust FIR.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Execute Court-Supervised De-Installation & Order XXXVII Suit",
            text: "De-install the hardware through a certified biomedical engineer under Court Receiver panchnama and recover remaining arrears plus depreciation via an Order XXXVII Summary Suit.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
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
            name: "Equipment Rental & Machinery Leasing Recovery",
            item: `${SITE_URL}/industries/equipment-rental-machinery-leasing-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Medical & ICU Equipment Rental Default Recovery",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-20 · Equipment &amp; Medical Asset Leasing</span>
            <span className="text-slate-500">&bull;</span>
            <span>Patient-Safe B2B Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &middot; Clinical-Legal Guardrail
            </span>
            Under our{" "}
            <Link
              href="/industries/equipment-rental-machinery-leasing-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Equipment Rental &amp; Machinery Leasing Recovery Hub
            </Link>
            , medical lessors must <strong>never</strong> unplug an active ICU ventilator unilaterally. Serve a 7/14-Day Patient-Transfer Notice to the Medical Superintendent and District CMO to insulate against clinical liability, then enforce arrears and seizure via{" "}
            <strong>BNS Section 316</strong> and <strong>CPC Order XL Rule 1</strong>.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">7–14 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                Patient-Transfer Notice to MS &amp; District CMO
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-red-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                Bailee Breach of Trust for Shifted / Sold Units
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">Order XL</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                Court Receiver Sterile Asset Repossession
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">3x RBI</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                MSMED Compound Interest for Udyam Lessors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Equipment Rental & Machinery Leasing",
                href: "/industries/equipment-rental-machinery-leasing-recovery",
              },
              {
                label: "Medical & ICU Equipment Rental Default",
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <MedicalTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-clinical-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why 20-Bed Nursing Homes Default on Leased Medical Devices
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across Tier-2 and Tier-3 cities, 15-to-30-bed nursing homes, trauma centres, and standalone dermatology clinics routinely lease high-capex hardware—<strong>ICU ventilators (₹8L–₹18L), mobile C-Arm image intensifiers (₹18L–₹32L), endoscopy towers, holmium lithotripsy lasers, Holter monitors, and ₹30L+ aesthetic diode lasers</strong>—on monthly minimum guarantees (MMG) or per-case revenue-share contracts.
                </p>
                <p>
                  Unlike construction cranes or scaffolding covered in our{" "}
                  <Link
                    href="/industries/equipment-rental-machinery-leasing-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    equipment rental &amp; machinery leasing recovery playbook
                  </Link>
                  , medical asset defaults trap lessors in a <strong>clinical-legal hostage dilemma</strong>. A defaulting hospital director knows that your field engineer cannot walk into an active ICU ward and disconnect a ventilator supporting a critical patient without risking criminal prosecution for negligence.
                </p>
                <p>
                  Meanwhile, orthopaedic and urology nursing homes continue collecting ₹45,000–₹1,20,000 per surgical package from patients and insurance TPAs while withholding your per-case C-Arm or laser fees for 6 to 14 months. Worse, distressed clinics sometimes relocate portable Holters, syringe pumps, or aesthetic handpieces to an undisclosed sister branch—or sell them to second-hand biomedical brokers.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                  <strong className="font-bold block mb-1">Core Creditor Rule:</strong>
                  Separate <em>life-support continuity</em> from <em>asset ownership</em>. By serving a structured 7/14-Day Patient-Transfer Notice on the Medical Superintendent and District Chief Medical Officer (CMO), you eliminate clinical negligence risk while locking in civil and criminal remedies.
                </div>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-handover-pipeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Step Patient-Safe Clinical Handover &amp; Repossession Pipeline
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this sequential escalation tree before dispatching any biomedical engineer or filing a police complaint. Each step builds an airtight evidentiary trail for Civil Courts, Commercial Courts, and police stations.
              </p>

              {/* Desktop Decision Tree SVG */}
              <div className="hidden md:block w-full overflow-x-auto mb-4">
                <svg
                  viewBox="0 0 880 210"
                  width="880"
                  height="210"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Step Patient-Safe Medical Equipment Repossession Flowchart"
                >
                  <rect x="0" y="0" width="880" height="210" rx="16" fill="#0F172A" />
                  {/* Step 1 */}
                  <rect x="18" y="34" width="148" height="142" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="42" cy="58" r="12" fill="#DC2626" />
                  <text x="42" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="62" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">Triage Asset</text>
                  <text x="30" y="88" fill="#CBD5E1" fontSize="10">Life-Support ICU</text>
                  <text x="30" y="104" fill="#CBD5E1" fontSize="10">vs. OT / Aesthetic</text>
                  <text x="30" y="124" fill="#94A3B8" fontSize="9.5">Audit Serials &amp;</text>
                  <text x="30" y="138" fill="#94A3B8" fontSize="9.5">DICOM / Shot Logs</text>
                  <text x="30" y="160" fill="#34D399" fontSize="9.5" fontWeight="bold">Day 1</text>

                  <path d="M168 105 L188 105" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="192" y="34" width="152" height="142" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="216" cy="58" r="12" fill="#DC2626" />
                  <text x="216" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="236" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">Handover Notice</text>
                  <text x="204" y="88" fill="#CBD5E1" fontSize="10">Serve Hospital MD,</text>
                  <text x="204" y="104" fill="#CBD5E1" fontSize="10">Med. Supdt. &amp; CMO</text>
                  <text x="204" y="124" fill="#94A3B8" fontSize="9.5">7/14-Day Patient</text>
                  <text x="204" y="138" fill="#94A3B8" fontSize="9.5">Transfer Window</text>
                  <text x="204" y="160" fill="#34D399" fontSize="9.5" fontWeight="bold">Days 2–14</text>

                  <path d="M346 105 L366 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Step 3 */}
                  <rect x="370" y="34" width="148" height="142" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="394" cy="58" r="12" fill="#DC2626" />
                  <text x="394" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="414" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">Lock Arrears</text>
                  <text x="382" y="88" fill="#CBD5E1" fontSize="10">MMG + Per-Case</text>
                  <text x="382" y="104" fill="#CBD5E1" fontSize="10">+ 3x RBI MSME</text>
                  <text x="382" y="124" fill="#94A3B8" fontSize="9.5">BSA 2023 s.63</text>
                  <text x="382" y="138" fill="#94A3B8" fontSize="9.5">Ledger Certified</text>
                  <text x="382" y="160" fill="#FBBF24" fontSize="9.5" fontWeight="bold">Day 15</text>

                  <path d="M520 105 L540 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Step 4 */}
                  <rect x="544" y="34" width="148" height="142" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="568" cy="58" r="12" fill="#DC2626" />
                  <text x="568" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="588" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">Court / BNS 316</text>
                  <text x="556" y="88" fill="#CBD5E1" fontSize="10">Order XL Receiver</text>
                  <text x="556" y="104" fill="#CBD5E1" fontSize="10">if Access Blocked</text>
                  <text x="556" y="124" fill="#94A3B8" fontSize="9.5">BNS s.316 FIR if</text>
                  <text x="556" y="138" fill="#94A3B8" fontSize="9.5">Shifted or Sold</text>
                  <text x="556" y="160" fill="#F87171" fontSize="9.5" fontWeight="bold">Days 16–30</text>

                  <path d="M694 105 L714 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Step 5 */}
                  <rect x="718" y="34" width="144" height="142" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="742" cy="58" r="12" fill="#10B981" />
                  <text x="742" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="762" y="62" fill="#F8FAFC" fontSize="11" fontWeight="bold">Safe Recovery</text>
                  <text x="730" y="88" fill="#CBD5E1" fontSize="10">Sterile Pick-Up +</text>
                  <text x="730" y="104" fill="#CBD5E1" fontSize="10">Panchnama Sign</text>
                  <text x="730" y="124" fill="#94A3B8" fontSize="9.5">Order XXXVII Suit</text>
                  <text x="730" y="138" fill="#94A3B8" fontSize="9.5">for Balance Dues</text>
                  <text x="730" y="160" fill="#34D399" fontSize="9.5" fontWeight="bold">Asset + Cash</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  { n: "1", t: "Triage Asset & Logs", d: "Separate active ICU life-support from OT/aesthetic gear; export serials, DICOM & pulse logs." },
                  { n: "2", t: "7/14-Day Handover Notice", d: "Serve Hospital MD, Medical Superintendent & District CMO to shift clinical duty-of-care." },
                  { n: "3", t: "Lock Liquidated Arrears", d: "Compute MMG, per-case OT fees & 3x RBI MSME interest under BSA 2023 s.63." },
                  { n: "4", t: "Order XL / BNS s.316", d: "Seek Court Receiver for hostile OT lockouts; file BNS s.316 FIR if shifted or sold." },
                  { n: "5", t: "Sterile Pick-Up & Suit", d: "De-install via biomedical engineer under panchnama and enforce Order XXXVII decree." },
                ].map((s) => (
                  <div key={s.n} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{s.t}</p>
                      <p className="text-xs text-slate-300 mt-0.5">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory & Clinical Matrix */}
            <section
              id="heading-clinical-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Clinical-Legal Matrix: Life-Support vs. Diagnostic &amp; Laser Assets
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Not every medical machine carries the same repossession protocol. Courts and District Health Authorities draw a sharp line between active life-sustaining hardware and elective diagnostic or cosmetic equipment.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Equipment Class</th>
                      <th className="p-3.5 font-bold">Patient-Safety Guardrail</th>
                      <th className="p-3.5 font-bold">Primary Civil / Statutory Remedy</th>
                      <th className="p-3.5 font-bold">Criminal Escalation Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        ICU Ventilators, BiPAP &amp; Multipara Monitors
                      </td>
                      <td className="p-3.5 text-slate-700">
                        <span className="inline-block px-2 py-0.5 rounded bg-red-50 text-[#DC2626] font-bold text-[11px] mb-1">
                          CRITICAL
                        </span>
                        <br />
                        Mandatory 7/14-Day Patient-Transfer Notice to Medical Supdt. &amp; District CMO.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CPC Order XL Rule 1 Court Receiver + Order XXXVII Summary Suit for running hire.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BNS s.316(2) if hospital retains post-transfer or shifts to another facility.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        C-Arm, Endoscopy Tower &amp; Lithotripsy Laser
                      </td>
                      <td className="p-3.5 text-slate-700">
                        <span className="inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[11px] mb-1">
                          SCHEDULED OT
                        </span>
                        <br />
                        De-install strictly between scheduled surgeries with written OT clearance.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.148–161 Bailment Termination + MSMED s.15–18 (3x RBI interest).
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BNS s.316 if OT access is forcibly blocked after termination notice expires.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        ₹30L Aesthetic Diode / Picosecond Lasers
                      </td>
                      <td className="p-3.5 text-slate-700">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[11px] mb-1">
                          ELECTIVE COSMETIC
                        </span>
                        <br />
                        Zero life-support risk; immediate engineer pick-up slot after 7-day notice.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Specific Relief Act s.7–8 + Order XXXVII Summary Suit for arrears &amp; depreciation.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BNS s.316(2) Criminal Breach of Trust + Police Station Email CC for refusal.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Shifted / Pledged / Sold Units (Any Category)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Hospital has already severed clinical custody; immediate asset-tracing mode.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Replacement-value recovery suit + injunction against third-party broker.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Immediate BNS s.316(2)/(3) FIR + BNS s.317 against second-hand dealer.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Hospital &amp; Clinic Rental Default Scenarios (Interactive)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your exact clinical-commercial failure mode below to view the risk profile, statutory notice trigger, and step-by-step recovery execution.
              </p>

              <MedicalScenarioTabs />
            </section>

            {/* Section 5: Worked Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Ledger: ₹30L Aesthetic Laser &amp; Per-Case C-Arm Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Hospital lessors frequently under-claim by demanding only unpaid monthly base rent. When a nursing home or dermatology clinic holds over your equipment past bailment termination, your legal notice must quantify <strong>four cumulative heads</strong>:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg mb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3 mb-4">
                  <p className="text-sm sm:text-base font-bold text-white">
                    Illustration: 24-Bed Orthopaedic &amp; Derm Clinic (6-Month Holdover)
                  </p>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-700/60">
                    Udyam-Registered Lessor
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      1. Unpaid Monthly Minimum Guarantee (₹95,000/mo &times; 6 months)
                    </span>
                    <span className="font-bold text-white">₹5,70,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      2. Unreported Per-Case C-Arm / Laser Shots (42 DICOM cases &times; ₹4,500)
                    </span>
                    <span className="font-bold text-white">₹1,89,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      3. MSMED Act s.16 Compound Interest (3x RBI Bank Rate ~19.5% p.a. avg.)
                    </span>
                    <span className="font-bold text-amber-400">₹74,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      4. Alternative Replacement / Unreturned Asset Value (₹30L Laser + ₹18L C-Arm)
                    </span>
                    <span className="font-bold text-red-400">₹48,00,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-sm sm:text-base">
                    <span className="font-extrabold text-emerald-400">
                      Total Liquidated Claim (Arrears + Asset Replacement Alternative)
                    </span>
                    <span className="font-black text-emerald-400">₹56,33,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900">
                <strong>Pro Tip:</strong> Always compute exact statutory compound interest using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-emerald-800 font-bold underline hover:text-emerald-950"
                >
                  MSME Delayed Payment 3x RBI Interest Calculator
                </Link>{" "}
                before dispatching your demand notice so the hospital CFO sees the compounding cost of every extra week of delay.
              </div>
            </section>

            {/* Section 6: Biomedical & BSA 2023 s.63 Evidence */}
            <section
              id="heading-biomedical-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Biomedical Logbooks, Calibration &amp; BSA 2023 s.63 Evidence
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Hospitals rarely deny receiving the machine; instead, they manufacture last-minute allegations of &ldquo;faulty oxygen sensor calibration&rdquo; or &ldquo;laser energy drop&rdquo; to justify non-payment. Neutralize these defenses upfront by assembling this 6-point evidentiary pack:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. OEM Serial & Asset QR Tagging",
                    body: "Delivery Challan and e-Way Bill capturing exact chassis serial numbers, handpiece serials, and probe IDs.",
                  },
                  {
                    title: "2. Signed Commissioning Certificate",
                    body: "Installation & Clinical Acceptance Report counter-signed by the hospital's Biomedical Engineer or Medical Superintendent.",
                  },
                  {
                    title: "3. DICOM / Shot-Counter Exports",
                    body: "Automated machine usage logs (C-Arm radiation exposures, laser pulse counts, ventilator run-hours) proving active commercial use.",
                  },
                  {
                    title: "4. Preventive Maintenance (PM) Sheets",
                    body: "Zero-defect service engineer visit slips proving the hospital never raised a breakdown ticket during the unpaid months.",
                  },
                  {
                    title: "5. BSA 2023 Section 63 Certificate",
                    body: "Mandatory electronic-record certificate authenticating WhatsApp payment promises, email ledger confirmations, and remote telemetry.",
                  },
                  {
                    title: "6. District CMO & Police CC Proof",
                    body: "Speed Post RPAD tracking receipts and email delivery headers showing service on the Medical Superintendent and District CMO.",
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Liability Shield */}
            <section
              id="heading-liability-shield"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Insulating Lessors from Clinical Negligence &amp; BNS s.106 Liability
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Under the <strong>Clinical Establishments (Registration and Regulation) Act, 2010</strong> and <strong>BNS 2023 Section 106</strong> (causing death by rash or negligent act), primary clinical responsibility for an admitted ICU patient rests with the treating physician and the hospital&apos;s Medical Superintendent. However, if a lessor&apos;s technician enters an ICU and abruptly powers down or removes an active ventilator, that clinical shield shatters instantly.
                </p>
                <p>
                  Our <strong>7/14-Day Patient-Transfer &amp; Clinical Handover Notice</strong> solves this cleanly: it places on formal record that (a) the bailment stands terminated for payment default, (b) the lessor explicitly refuses to interrupt active patient care, and (c) the Medical Superintendent and District CMO have 7 to 14 days to arrange an alternate ventilator or transfer the patient. Once that window expires, either the hospital clears the dues to retain the machine or the Court Receiver supervises sterile handover with zero clinical liability on the lessor.
                </p>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Send One Clinical Handover Notice or Upload Hospital Portfolio
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are chasing a single nursing home holding your ₹30L laser or managing 150+ defaulting clinics across multiple states, choose your recovery track below.
              </p>

              <MedicalRecoveryCTA />
            </section>

            {/* Section 9: Related Internal Links */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Related Equipment Leasing, Calculator &amp; Template Links
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <Link
                  href="/industries/equipment-rental-machinery-leasing-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    IND-20 Parent Hub: Equipment &amp; Machinery Leasing Recovery
                  </span>
                  <span className="text-slate-600">
                    Master recovery tracks for cranes, DG sets, IT fleets, scaffolding &amp; medical gear.
                  </span>
                </Link>
                <Link
                  href="/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Unreturned Rented Scaffolding &amp; Formwork (BNS s.316)
                  </span>
                  <span className="text-slate-600">
                    Bailee criminal breach of trust FIR &amp; replacement-value recovery SOP.
                  </span>
                </Link>
                <Link
                  href="/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Blocked Demobilization &amp; Gate Pass for Rented Machinery
                  </span>
                  <span className="text-slate-600">
                    Order XL Rule 1 Receiver &amp; wrongful detention injunctions for site-locked assets.
                  </span>
                </Link>
                <Link
                  href="/law/bns-318-cheating-vs-civil-dispute"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    BNS Section 318 Cheating vs. Civil Breach of Contract
                  </span>
                  <span className="text-slate-600">
                    When dishonest asset shifting or resale crosses from civil default into FIR territory.
                  </span>
                </Link>
                <Link
                  href="/recovery/contractor-payment"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Contractor &amp; B2B Commercial Payment Recovery
                  </span>
                  <span className="text-slate-600">
                    Order XXXVII summary suits &amp; statutory demand frameworks for service invoices.
                  </span>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Advocate-Vetted Legal Notice &amp; Reply Template Workspace
                  </span>
                  <span className="text-slate-600">
                    Draft, preview, and export structured commercial demand notices.
                  </span>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </span>
                  <span className="text-slate-600">
                    Compute exact statutory compound interest on overdue hospital rental bills.
                  </span>
                </Link>
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="font-bold text-slate-900 block mb-1">
                    Bulk Notice Dispatch (Email + WhatsApp + Speed Post RPAD)
                  </span>
                  <span className="text-slate-600">
                    Multi-channel legal notice delivery with BSA 2023 s.63 delivery proofs.
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Medical Equipment Rental Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Healthcare Regulatory Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
