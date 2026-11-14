import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HospitalsHubTableOfContents from "./HospitalsHubTableOfContents";
import HospitalsHubScenarioTabs from "./HospitalsHubScenarioTabs";
import HospitalsHubCTA from "./HospitalsHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/hospitals-doctors-healthcare-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Hospital, Doctor & Healthcare RCM Legal Recovery Desk India";
const PAGE_DESCRIPTION =
  "Recover unpaid post-discharge patient bills, delayed TPA/insurer claims, CGHS/ECHS arrears & B2B lab dues without illegal patient detention or brand risk.";
const H1_TEXT =
  "Ethical, Article-21 Compliant Debt & Claim Recovery for Hospitals, Doctors, Clinics & Diagnostic Chains";

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
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface IndustrySpoke {
  id: string;
  archetype: "G1" | "T1" | "P1" | "R1";
  archetypeLabel: string;
  track: "patient" | "tpa-govt" | "clinics-labs" | "tools";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_03_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-038",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "patient",
    title: "Post-Discharge Patient Bill Recovery Without Detaining Patients",
    url: "/hospital-unpaid-patient-bill-recovery-without-detaining-patient",
    statute: "Article 21, Contract Act s.73/s.126 & Order XXXVII CPC",
    summary:
      "Structure non-coercive discharge undertakings, KYC records, and 15-day advocate notices for unpaid ICU and inpatient balances.",
  },
  {
    id: "B2B-045",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "patient",
    title: "Patient & Relative Stop-Payment Discharge Cheque Bounce (s.138)",
    url: "/patient-cheque-bounce-stop-payment-at-hospital-discharge-section-138",
    statute: "NI Act s.138 & SC ICDS Ltd. v. Beena Shabeer",
    summary:
      "Prosecute dishonoured third-party attendant cheques issued at hospital discharge and defeat coercion defenses cleanly.",
  },
  {
    id: "B2B-048",
    archetype: "G1",
    archetypeLabel: "G1 Medico-Legal SOP",
    track: "patient",
    title: "Abandoned Long-Stay ICU Patient & Unpaid Bill Legal Protocol",
    url: "/hospital-long-stay-patient-abandonment-unpaid-bill-legal-protocol",
    statute: "Clinical Establishments Duty, Senior Citizens Act & CMO Protocol",
    summary:
      "Execute CMO/Police/Magistrate-assisted patient transfers while preserving civil recovery rights against admission guarantors.",
  },
  {
    id: "B2B-039",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "tpa-govt",
    title: "Hospital vs TPA & Insurer: Delayed & Short-Settled Claim Recovery",
    url: "/hospital-tpa-insurance-delayed-short-settled-claim-recovery",
    statute: "IRDAI Master Circular (Bank Rate + 2%) & Commercial Courts Act",
    summary:
      "Challenge arbitrary non-payable deductions after cashless pre-authorization and recover statutory penal interest from insurers.",
  },
  {
    id: "B2B-040",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "tpa-govt",
    title: "CGHS, ECHS, ESIC & Ayushman Bharat (PM-JAY) Empanelment Dues",
    url: "/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery",
    statute: "CPC Section 80 & Article 226 Writ (ABL International)",
    summary:
      "Escalate aged empanelled government scheme receivables past UTIITSL/SHA bottlenecks using 60-day s.80 notices and writ mandamus.",
  },
  {
    id: "B2B-041",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "tpa-govt",
    title: "Corporate Credit Tie-Up, OHC & PSU Medical Bill Recovery",
    url: "/hospital-corporate-credit-tie-up-psu-medical-bill-recovery",
    statute: "Order XXXVII CPC & Commercial Courts Act s.2(1)(c)",
    summary:
      "Enforce signed HR Credit Authorization Letters and Occupational Health Center retainers via credit-suspension and summary notices.",
  },
  {
    id: "B2B-047",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "tpa-govt",
    title: "PPP Dialysis, Radiology & Daycare Center NHM/Govt Dues",
    url: "/dialysis-oncology-daycare-center-ppp-government-bill-recovery",
    statute: "PPP Concession Clauses, CPC s.80, MSMED & Article 226",
    summary:
      "Unfreeze District Hospital PPP per-session payouts stalled by bureaucratic audits through concession-compliant statutory notices.",
  },
  {
    id: "B2B-042",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "clinics-labs",
    title: "Diagnostic & Pathology Lab B2B Franchise & Nursing Home Dues",
    url: "/diagnostic-lab-pathology-collection-center-b2b-dues-recovery",
    statute: "Commercial Courts s.2(1)(c)(ix), NI s.138 & Trade Marks s.29",
    summary:
      "Recover overdue sample-processing ledgers from PCC franchisees and partner clinics while revoking unauthorized brand signage.",
  },
  {
    id: "B2B-043",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "clinics-labs",
    title: "IVF, Dental & Cosmetic Clinic Package Default & Blackmail Shield",
    url: "/ivf-dental-cosmetic-clinic-treatment-package-emi-default-recovery",
    statute: "Contract Act s.73, NI s.138, PSS s.25 & BNS Defamation Rebuttal",
    summary:
      "Recover unpaid treatment milestone cheques and counter extortionate social-media negligence threats with lawful evidence.",
  },
  {
    id: "B2B-044",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "clinics-labs",
    title: "Visiting Consultant & Surgeon Unpaid 194J Hospital Fee Recovery",
    url: "/visiting-consultant-doctor-unpaid-professional-fee-from-hospital",
    statute: "Form 26AS / AIS s.194J TDS Proof, Order XXXVII & Arbitration s.21",
    summary:
      "Use Section 194J TDS credits as written debt acknowledgment when hospitals withhold surgical shares and consultant retainers.",
  },
  {
    id: "B2B-046",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "clinics-labs",
    title: "Home Healthcare, Home-ICU & Eldercare Unpaid Bill Recovery",
    url: "/home-healthcare-icu-at-home-eldercare-unpaid-billing-recovery",
    statute: "Contract Act s.73, BNS s.316 Equipment Recovery & NRI Service",
    summary:
      "Recover overdue home-nursing retainers, curb nurse poaching, and retrieve unreturned ₹3L+ home ventilators and monitors.",
  },
  {
    id: "B2B-049",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "clinics-labs",
    title: "Air Ambulance & Emergency Medical Fleet Charter Recovery",
    url: "/ambulance-air-ambulance-medical-evacuation-unpaid-bill-recovery",
    statute: "BSA 2023 s.63 Electronic Charter Proof & Order XXXVII CPC",
    summary:
      "Enforce ₹4L–₹40L emergency air-evacuation sorties approved over WhatsApp or email against families, assistance firms, and insurers.",
  },
  {
    id: "B2B-050",
    archetype: "T1",
    archetypeLabel: "T1 Interactive Calculator",
    track: "tools",
    title: "Hospital TPA Delayed Claim Penal Interest Calculator (IRDAI)",
    url: "/tools/hospital-tpa-delayed-claim-interest-calculator",
    statute: "IRDAI Health Master Circular (Bank Rate + 2% Formula)",
    summary:
      "Compute exact statutory penal interest owed by health insurers and TPAs across aged cashless claim batches.",
  },
  {
    id: "B2B-051",
    archetype: "P1",
    archetypeLabel: "P1 Legal Pack Template",
    track: "tools",
    title: "2-in-1 Hospital Discharge Undertaking & Legal Notice Pack",
    url: "/templates/hospital-discharge-pending-bill-undertaking-and-legal-notice",
    statute: "NI s.4 Promissory Note, Contract s.126 & Article 21 Clause",
    summary:
      "Advocate-drafted non-coercive discharge financial undertaking with attendant co-guarantee plus 15-day post-discharge notice.",
  },
  {
    id: "B2B-052",
    archetype: "R1",
    archetypeLabel: "R1 Benchmark Report",
    track: "tools",
    title: "2026–2027 Indian Hospital Receivables & TPA/CGHS Delay Index",
    url: "/reports/healthcare-tpa-settlement-delay-hospital-receivables-india",
    statute: "AHPI/CAHO Healthcare RCM & DSO Benchmark Study",
    summary:
      "Empirical DSO benchmark analysis across cashless TPAs, CGHS/ECHS/PM-JAY, corporate credit, and patient undertakings.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "patient",
    heading: "Track A: Post-Discharge Patient Bills, Stop-Payment Cheques & Long-Stay ICU",
    badgeClass: "bg-red-50 border-red-200 text-[#DC2626]",
    items: IND_03_SPOKES.filter((s) => s.track === "patient"),
  },
  {
    key: "tpa-govt",
    heading: "Track B: Cashless TPAs, CGHS/ECHS/PM-JAY, Corporate OHC & NHM PPP",
    badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
    items: IND_03_SPOKES.filter((s) => s.track === "tpa-govt"),
  },
  {
    key: "clinics-labs",
    heading: "Track C: Diagnostic Franchises, IVF/Dental, 194J Doctors, Home-ICU & Air Fleet",
    badgeClass: "bg-amber-50 border-amber-200 text-amber-800",
    items: IND_03_SPOKES.filter((s) => s.track === "clinics-labs"),
  },
  {
    key: "tools",
    heading: "Track D: IRDAI Interest Calculator, Discharge Legal Pack & DSO Report",
    badgeClass: "bg-slate-100 border-slate-200 text-slate-800",
    items: IND_03_SPOKES.filter((s) => s.track === "tools"),
  },
];

const ESCALATION_MATRIX_ROWS = [
  {
    category: "Unpaid Inpatient / ICU Discharge Balance",
    ticket: "₹15,000 – ₹25,00,000",
    trigger: "Discharge + 7 Days",
    primaryTrack: "Voluntary Undertaking + 15-Day Notice -> Order XXXVII CPC",
    guardrail: "Zero patient/body detention; itemized bill & attendant KYC",
  },
  {
    category: "Relative / Attendant Stop-Payment Cheque",
    ticket: "₹25,000 – ₹15,00,000",
    trigger: "Return Memo <= 30d",
    primaryTrack: "NI Act s.138 Demand Notice (15d Cure) -> Magistrate Complaint",
    guardrail: "Cite SC Beena Shabeer on third-party liability + voluntary discharge",
  },
  {
    category: "Delayed / Short-Settled Cashless TPA Claim",
    ticket: "₹2,00,000 – ₹5 Cr+",
    trigger: "TAT Breach / Cut",
    primaryTrack: "IRDAI Bank Rate + 2% Notice -> Commercial Court s.12A",
    guardrail: "Join principal Insurer + TPA; attach pre-auth & MOU tariff table",
  },
  {
    category: "CGHS, ECHS, ESIC & PM-JAY Empanelment Dues",
    ticket: "₹10,00,000 – ₹15 Cr",
    trigger: "90–180+ Days Aged",
    primaryTrack: "UTIITSL/SHA Log -> CPC s.80 (60d) -> Article 226 Writ",
    guardrail: "Prove undisputed audit clearance prior to seeking writ mandamus",
  },
  {
    category: "Corporate Credit Tie-Up & Factory OHC",
    ticket: "₹1,50,000 – ₹80 Lakh",
    trigger: "45–90 Days Overdue",
    primaryTrack: "Credit-Hold Alert -> Order XXXVII CPC / s.43B(h) (if MSE)",
    guardrail: "Attach HR Credit Authorization Letter & employee attendance roster",
  },
  {
    category: "Diagnostic Lab PCC Franchise & B2B Ledger",
    ticket: "₹50,000 – ₹35 Lakh",
    trigger: "Credit Limit Breach",
    primaryTrack: "Commercial s.2(1)(c)(ix) Notice + NI s.138 + Trade Marks s.29",
    guardrail: "Suspend LIS reporting portal & revoke unauthorized lab signage",
  },
  {
    category: "IVF, Dental & Cosmetic Milestone Default",
    ticket: "₹35,000 – ₹8 Lakh",
    trigger: "Bounce / Defamation Threat",
    primaryTrack: "NI s.138 / PSS s.25 + Informed Consent & BNS Extortion Rebuttal",
    guardrail: "Separate clinical consent records from non-defamatory fee demand",
  },
  {
    category: "Visiting Doctor 194J Fees & Home-ICU / Fleet",
    ticket: "₹1,00,000 – ₹40 Lakh",
    trigger: "60–120 Days Unpaid",
    primaryTrack: "Form 26AS 194J Notice / BNS s.316 Gear / BSA s.63 Charter Suit",
    guardrail: "194J consultants bypass Labour Courts; preserve digital chat hashes",
  },
];

const PRECEDENTS_AND_MANDATES = [
  {
    title: "Absolute Prohibition on Patient or Mortal-Remains Detention",
    citation:
      "Article 21 Constitution of India, Delhi & Bombay High Court Directives & BNS Wrongful Confinement Rules",
    holding:
      "Indian High Courts unequivocally hold that private hospitals cannot detain a medically stabilized patient, withhold discharge summaries, or hold back mortal remains to compel bill settlement. Hospitals attempting physical coercion face criminal FIRs and clinical establishment license suspension—leaving structured discharge contracts and civil legal notices as the sole enforceable recovery rail.",
    actionableRule:
      "Release the patient on schedule against a voluntary itemized bill acknowledgment and Attendant Co-Obligor Promissory Note, then serve a 15-day advocate notice.",
  },
  {
    title: "Third-Party Relative Cheques Issued at Discharge Are Fully Prosecutable",
    citation:
      "ICDS Ltd. v. Beena Shabeer (Supreme Court) & Negotiable Instruments Act, 1881 Section 138",
    holding:
      "When a relative, friend, or employer issues a cheque to clear a patient's discharge bill and immediately instructs 'Stop Payment' the next morning, they routinely argue they owed no personal medical debt. The Supreme Court ruled that the statutory phrase 'any debt or other liability' in Section 138 squarely covers cheques drawn by third-party guarantors toward another person's liability.",
    actionableRule:
      "Dispatch the Section 138 demand notice within 30 days of the bank return memo to both the drawer and primary patient/guarantor, attaching the voluntary discharge undertaking.",
  },
  {
    title: "Mandatory Penal Interest on Delayed Cashless TPA & Health Claims",
    citation:
      "IRDAI Master Circular on Health Insurance Business & Commercial Courts Act, 2015 s.2(1)(c)(xx)",
    holding:
      "Under IRDAI regulatory directions, insurers and TPAs must process and settle cashless hospital claims within prescribed turnaround limits and pay automatic penal interest at RBI Bank Rate + 2% for unexplained settlement delays. Unilateral post-treatment deductions contradicting approved pre-authorization and signed ROHINI Provider MOU tariffs constitute actionable commercial breaches.",
    actionableRule:
      "Aggregate aged TPA short-settlements above ₹3 Lakh into a claim-wise Bank Rate + 2% schedule and issue joint statutory notices to the Insurer and TPA.",
  },
  {
    title: "High Court Writ Mandamus for Admitted Government Empanelment Bills",
    citation:
      "ABL International Ltd. v. Export Credit Guarantee Corp. (SC) & CPC Section 80",
    holding:
      "While disputed factual claims belong in civil suits, the Supreme Court clarified in ABL International that where monetary dues under a State or PSU contract are undisputed, audited, and arbitrarily withheld, writ jurisdiction under Article 226 is maintainable. For standard civil recovery suits against CGHS, ECHS, ESIC, or NHM authorities, a mandatory 60-day Section 80 CPC notice precedes litigation.",
    actionableRule:
      "Exhaust UTIITSL/SHA portal audit reconciliation first, then serve a formal Section 80 CPC notice documenting undisputed verified claim IDs.",
  },
];

const LIVE_SEED_LINKS = [
  {
    label: "Promissory Note Format India (Downloadable Template)",
    href: "/templates/promissory-note-format-india",
    note: "Statutory NI Act s.4 promissory note foundation adaptable for attendant co-guarantors.",
  },
  {
    label: "Section 80 CPC Notice to Government & PSUs",
    href: "/law/section-80-cpc-notice-to-government",
    note: "Mandatory 60-day statutory notice blueprint for CGHS, ECHS, ESIC, and NHM arrears.",
  },
  {
    label: "Cheque Bounce Notice Timeline (Section 138 NI Act)",
    href: "/cheque-bounce-notice-timeline-section-138",
    note: "Strict 30+15+30 day prosecution clock for dishonoured discharge and franchise cheques.",
  },
  {
    label: "Stop-Payment Cheque Bounce Case Guide",
    href: "/stop-payment-cheque-bounce-case",
    note: "Countering 'Payment Stopped by Drawer' return memos on hospital and clinic cheques.",
  },
  {
    label: "Order XXXVII CPC Summary Suit Guide",
    href: "/law/order-37-summary-suit-money-recovery",
    note: "Fast-track civil recovery on written undertakings, credit letters, and 194J retainers.",
  },
  {
    label: "Section 43B(h) MSME 45-Day Payment Rule",
    href: "/law/section-43bh-msme-payment-rule",
    note: "Tax-disallowance leverage where Udyam-registered clinics, labs, or PPP entities qualify.",
  },
  {
    label: "Bulk Recovery Cases All-in-One Affordable Solutions",
    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    note: "CSV batch onboarding for multi-branch hospitals, diagnostic chains, and RCM teams.",
  },
  {
    label: "Tri-Channel Email, WhatsApp & Speed Post RPAD Dispatch",
    href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
    note: "Synchronized multi-channel delivery backed by Section 63 BSA 2023 certificates.",
  },
  {
    label: "Recovery of Unpaid Dues for Businesses",
    href: "/recovery-of-unpaid-dues-for-my-business",
    note: "Commercial B2B recovery playbook for corporate retainers and vendor agreements.",
  },
  {
    label: "IND-01 Bank Loan & NPA Legal Recovery Hub",
    href: "/industries/banks-loan-recovery",
    note: "Sibling industry hub covering institutional banking and healthcare equipment lenders.",
  },
];

const FAQS = [
  {
    question:
      "Can a private hospital legally hold a patient or mortal remains until unpaid ICU bills are cleared?",
    answer:
      "No. Constitutional Article 21 protections and binding High Court directions strictly prohibit detaining a medically stabilized patient or withholding mortal remains over unpaid hospital bills. Attempting physical detention exposes hospital directors and administrators to criminal wrongful confinement complaints and regulatory license action. The lawful procedure is to obtain voluntary itemized bill acknowledgment and an Attendant Co-Obligor Promissory Undertaking at discharge, followed by a 15-day advocate notice and Order XXXVII CPC or Section 138 NI Act proceedings.",
  },
  {
    question:
      "What if a relative issues a cheque at discharge to take the patient home and stops payment the next morning?",
    answer:
      "Under Section 138 of the Negotiable Instruments Act, 1881 and the Supreme Court ruling in ICDS Ltd. v. Beena Shabeer, the expression 'any debt or other liability' covers cheques issued by a third party—such as a relative, friend, or attendant—to discharge a patient's hospital liability. Provided the hospital preserves signed itemized bills and a non-coercive voluntary discharge acknowledgment, serving a Section 138 demand notice within 30 days of the bank return memo establishes valid criminal prosecution.",
  },
  {
    question:
      "How can network hospitals recover arbitrary TPA deductions and delayed cashless payouts?",
    answer:
      "Hospitals should first audit cashless pre-authorization approvals against final deduction sheets to isolate unilateral cuts that violate the signed ROHINI Provider MOU tariff schedule. Under IRDAI health insurance circulars, insurers and TPAs face mandatory settlement timelines and automatic penal interest at RBI Bank Rate + 2% on delays. Serving a claim-wise statutory legal notice jointly on the underwriting Insurer and TPA prepares the record for Commercial Courts Act s.12A mediation or regulatory escalation.",
  },
  {
    question:
      "How do empanelled hospitals recover crores stuck in CGHS, ECHS, ESIC, or Ayushman Bharat (PM-JAY) arrears?",
    answer:
      "Empanelled hospitals must first document portal audit clearance and grievance exhaustion across UTIITSL, State Health Agencies (SHA), or ESIC systems to establish that the bills are undisputed. Where audited payables remain frozen, hospitals serve a mandatory 60-day Section 80 CPC statutory notice on the concerned Central/State Ministry or agency, paving the way for civil execution or an Article 226 High Court Writ of Mandamus under the ABL International principle for undisputed State contractual dues.",
  },
  {
    question:
      "Can visiting consultant doctors and surgeons recover unpaid hospital payouts through the Labour Commissioner?",
    answer:
      "Usually no. Most visiting super-specialists, anesthetists, intensivists, and teleradiologists are engaged as independent professionals subject to TDS under Section 194J of the Income Tax Act rather than salaried employees under Section 192. Labour Commissioners routinely dismiss 194J claims for lack of employer-employee jurisdiction. Doctors should instead rely on Form 26AS / AIS Section 194J TDS credits as written acknowledgment of debt to pursue Order XXXVII CPC summary suits or Section 21 arbitration.",
  },
  {
    question:
      "How can IVF, dental, or cosmetic clinics respond when defaulting patients threaten defamatory viral videos?",
    answer:
      "Specialty clinics should insulate clinical consent records and itemized milestone agreements before treatment begins. When a patient halts milestone cheques or threatens fabricated negligence posts to extort a fee waiver, an advocate legal notice separates the factual clinical timeline from the liquidated financial debt—simultaneously asserting Section 138 NI Act / Section 25 PSS Act remedies and putting the debtor on formal notice against criminal defamation and extortion under the Bharatiya Nyaya Sanhita (BNS).",
  },
  {
    question:
      "Can a hospital or diagnostic chain test LegalRecovery.in on one unpaid case before onboarding CSV batches?",
    answer:
      "Yes. Under our dual-track onboarding model, hospital Medical Superintendents, clinic founders, or RCM heads can pilot a single overdue post-discharge file, stop-payment cheque, or diagnostic ledger for ₹999 via the self-serve intake form. After reviewing the advocate-drafted notice, Section 63 BSA 2023 server certificate, and Speed Post RPAD tracking proof, institutions can onboard 10 to 10,000+ receivables in bulk via CSV and Representee mandates.",
  },
];

const OFFICIAL_SOURCES = [
  {
    label: "Insurance Regulatory and Development Authority of India (IRDAI) — Health Insurance Master Circulars",
    url: "https://irdai.gov.in/",
  },
  {
    label: "Central Government Health Scheme (CGHS) — Empanelled Hospital Guidelines & Tariffs",
    url: "https://cghs.gov.in/",
  },
  {
    label: "National Health Authority (NHA) — Ayushman Bharat PM-JAY Empanelment & Claim Portal",
    url: "https://nha.gov.in/",
  },
  {
    label: "National Medical Commission (NMC) — Registered Medical Practitioner Ethics & Conduct Framework",
    url: "https://www.nmc.org.in/",
  },
  {
    label: "India Code — Negotiable Instruments Act, 1881, Indian Contract Act, 1872 & CPC Order XXXVII",
    url: "https://www.indiacode.nic.in/",
  },
  {
    label: "India Code — Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    label: "e-Courts Services India — Commercial Courts & Civil Recovery Case Status Portal",
    url: "https://services.ecourts.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType:
    "Article-21 & NMC Compliant Healthcare Revenue Cycle Management (RCM) Legal Recovery",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Multi-Specialty Hospitals, Nursing Homes, Medical Superintendents, RCM Heads, Doctors, IVF/Dental Clinics, Diagnostic Chains & Home-Healthcare Operators",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/user/new-recovery`,
  },
  mainEntityOfPage: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-03 Hospitals, Doctors, Clinics & Diagnostic Chains Recovery Spokes",
  numberOfItems: IND_03_SPOKES.length,
  itemListElement: IND_03_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hospitals & Healthcare Recovery",
      item: CANONICAL_URL,
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

export default function HospitalsDoctorsHealthcareRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Institutional Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-03 Pillar Hub</span>
            <span>•</span>
            <span>Hospitals, Doctors, Clinics &amp; Diagnostic Chains</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* 40-60 Word Executive Creditor Summary */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Indian hospitals cannot detain patients or mortal remains over unpaid bills under
            Article 21. LegalRecovery.in equips Medical Superintendents, RCM heads, clinics, and
            labs with non-coercive discharge undertakings,{" "}
            <strong className="text-white">Section 138 NI Act</strong> cheque notices,{" "}
            <strong className="text-white">IRDAI Bank Rate + 2%</strong> TPA interest claims, and{" "}
            <strong className="text-white">Section 80 CPC</strong> CGHS recovery—anchored to our{" "}
            <Link
              href="/services"
              className="text-red-300 underline decoration-red-400/60 hover:text-white"
            >
              institutional legal recovery services hub
            </Link>
            .
          </div>

          {/* 4-Card Statutory Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-5">
            <div>
              <p className="text-base sm:text-xl font-black text-slate-100">Article 21 Safe</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Zero Patient Detention Protocol
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-emerald-400">Bank Rate + 2%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                IRDAI Delayed TPA Penal Interest
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-amber-400">60 Days (s.80)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                CGHS, ECHS &amp; NHM Statutory Notice
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-red-400">30 + 15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Discharge Cheque s.138 Clock
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <p>
              Legal Architecture Reviewed by{" "}
              <Link
                href="/authors/anuj-anand-malik"
                className="text-slate-200 font-semibold underline decoration-slate-500 hover:text-white"
              >
                Anuj Anand Malik, Advocate &amp; Founder (AMA Legal Solutions)
              </Link>
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/tools/hospital-tpa-delayed-claim-interest-calculator"
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold transition-colors"
              >
                TPA Penal Interest Calculator →
              </Link>
              <a
                href="#dual-track-cta"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
              >
                ₹999 Live Test / CSV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Hospitals & Healthcare Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <HospitalsHubTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Institutional Positioning */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Why Healthcare Providers Cannot Rely on Informal Billing Follow-Ups
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Private multi-specialty hospitals, nursing homes, specialty clinics, and
                  diagnostic networks across India face an acute receivables paradox. Emergency
                  stabilization obligations and binding High Court directions under{" "}
                  <strong className="text-slate-900">Article 21</strong> prohibit holding back
                  stabilized patients or mortal remains at discharge—even when ICU bills cross
                  ₹10–25 Lakh. Yet informal billing desk calls post-discharge rarely compel
                  repayment once the patient leaves the hospital premises.
                </p>
                <p>
                  On the institutional payer front, hospital Revenue Cycle Management (RCM) teams
                  routinely suffer 90–180+ day payout delays and arbitrary 15–35% tariff
                  deductions from cashless TPAs despite prior pre-authorization approvals, while
                  empanelled <strong className="text-slate-900">CGHS, ECHS, ESIC, and PM-JAY</strong>{" "}
                  receivables freeze working capital needed for doctor payouts and medical supply
                  ledgers. Meanwhile, standalone operators—from IVF/dental clinics facing
                  extortionate review threats to diagnostic labs chasing PCC franchisee arrears and
                  visiting surgeons paid under <strong className="text-slate-900">Section 194J</strong>{" "}
                  TDS—lack a specialized creditor-side legal desk.
                </p>
                <p>
                  LegalRecovery.in bridges this operational gap as an{" "}
                  <strong className="text-slate-900">
                    Article-21 &amp; NMC-Compliant Healthcare RCM Legal Desk
                  </strong>
                  . Starting with our{" "}
                  <Link
                    href="/templates/hospital-discharge-pending-bill-undertaking-and-legal-notice"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    non-coercive Discharge Pending-Bill Undertaking Pack
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Post-Discharge Civil Recovery Protocol
                  </Link>
                  , we convert chaotic hospital receivables into structured, court-admissible
                  demand workflows without risking brand goodwill or regulatory complaints.
                </p>
              </div>
            </section>

            {/* Section 2: 8-Track Healthcare RCM Escalation Matrix */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Healthcare RCM Escalation Matrix Across 8 Receivable Categories
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Every healthcare default demands a distinct statutory trigger. Issuing a generic
                collection notice—such as threatening an empanelled PSU under private rules without
                Section 80 CPC or routing a 194J visiting surgeon to a Labour Commissioner—stalls
                recovery and weakens litigation leverage.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold border-b border-slate-800">
                        Receivable Category
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Ticket Band</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Notice Trigger</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">
                        Primary Statutory Track
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-800">
                        Mandatory Legal Guardrail
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {ESCALATION_MATRIX_ROWS.map((row) => (
                      <tr key={row.category} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 align-top">
                          {row.category}
                        </td>
                        <td className="p-3.5 font-semibold text-[#DC2626] whitespace-nowrap align-top">
                          {row.ticket}
                        </td>
                        <td className="p-3.5 text-slate-600 whitespace-nowrap align-top">
                          {row.trigger}
                        </td>
                        <td className="p-3.5 text-slate-800 font-medium align-top">
                          {row.primaryTrack}
                        </td>
                        <td className="p-3.5 text-slate-600 align-top">{row.guardrail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Custom SVG Recovery Pipeline + Mobile Cards */}
            <section
              id="heading-pipeline-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Article-21 &amp; NMC-Compliant Recovery Pipeline: Admission to Realization
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Whether recovering a single unpaid ICU discharge balance or batching 200 short-settled
                TPA and corporate credit claims, every hospital receivable flows through a four-stage
                compliant verification and tri-channel dispatch architecture.
              </p>

              {/* Desktop Hand-Authored SVG Workflow Architecture */}
              <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-800 bg-[#0F172A] p-4">
                <svg
                  viewBox="0 0 920 310"
                  width={920}
                  height={310}
                  role="img"
                  aria-label="Four-stage Article-21 compliant healthcare RCM legal recovery pipeline"
                  className="w-full h-auto"
                >
                  <rect x="0" y="0" width="920" height="310" rx="14" fill="#0F172A" />

                  <text
                    x="30"
                    y="36"
                    fill="#F87171"
                    fontSize="12"
                    fontWeight="bold"
                    letterSpacing="1.5"
                  >
                    IND-03 HEALTHCARE RCM ARCHITECTURE: NON-COERCIVE INTAKE TO RECOVERY
                  </text>

                  {/* Stage 1 Box */}
                  <rect
                    x="30"
                    y="64"
                    width="195"
                    height="190"
                    rx="12"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <rect x="30" y="64" width="195" height="32" rx="12" fill="#DC2626" />
                  <text x="127" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    01. DISCHARGE &amp; AUDIT
                  </text>
                  <text x="44" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">
                    • Zero Detention Release
                  </text>
                  <text x="44" y="148" fill="#CBD5E1" fontSize="11">
                    Signed Itemized Bill Ack
                  </text>
                  <text x="44" y="168" fill="#CBD5E1" fontSize="11">
                    Attendant Co-Obligor KYC
                  </text>
                  <text x="44" y="194" fill="#34D399" fontSize="11" fontWeight="bold">
                    TPA / CGHS Ledger Split
                  </text>
                  <text x="44" y="214" fill="#94A3B8" fontSize="10">
                    Lock pre-auth &amp; MOU rates
                  </text>
                  <text x="44" y="236" fill="#94A3B8" fontSize="10">
                    Verify Form 26AS / LIS logs
                  </text>

                  {/* Arrow 1->2 */}
                  <line x1="225" y1="159" x2="255" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="253,153 265,159 253,165" fill="#DC2626" />

                  {/* Stage 2 Box */}
                  <rect
                    x="265"
                    y="64"
                    width="195"
                    height="190"
                    rx="12"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <rect x="265" y="64" width="195" height="32" rx="12" fill="#334155" />
                  <text x="362" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    02. STATUTORY DRAFTING
                  </text>
                  <text x="279" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">
                    • Advocate Letterhead
                  </text>
                  <text x="279" y="148" fill="#CBD5E1" fontSize="11">
                    NI s.138 (30d Cheque Clock)
                  </text>
                  <text x="279" y="168" fill="#CBD5E1" fontSize="11">
                    IRDAI Bank Rate + 2% Sheet
                  </text>
                  <text x="279" y="194" fill="#FBBF24" fontSize="11" fontWeight="bold">
                    CPC s.80 / Contract s.73
                  </text>
                  <text x="279" y="214" fill="#94A3B8" fontSize="10">
                    BNS s.316 Gear / Defamation
                  </text>
                  <text x="279" y="236" fill="#94A3B8" fontSize="10">
                    NMC-Ethical Non-Harassing Tone
                  </text>

                  {/* Arrow 2->3 */}
                  <line x1="460" y1="159" x2="490" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="488,153 500,159 488,165" fill="#DC2626" />

                  {/* Stage 3 Box */}
                  <rect
                    x="500"
                    y="64"
                    width="195"
                    height="190"
                    rx="12"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <rect x="500" y="64" width="195" height="32" rx="12" fill="#059669" />
                  <text x="597" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    03. TRI-CHANNEL DISPATCH
                  </text>
                  <text x="514" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">
                    • Admissible Service
                  </text>
                  <text x="514" y="148" fill="#CBD5E1" fontSize="11">
                    India Post Speed Post RPAD
                  </text>
                  <text x="514" y="168" fill="#CBD5E1" fontSize="11">
                    Signed Email + PDF Ledger
                  </text>
                  <text x="514" y="194" fill="#34D399" fontSize="11" fontWeight="bold">
                    Verified WhatsApp Notice
                  </text>
                  <text x="514" y="214" fill="#94A3B8" fontSize="10">
                    SHA-256 BSA 2023 s.63 Cert
                  </text>
                  <text x="514" y="236" fill="#94A3B8" fontSize="10">
                    NRI / Corporate Nodal Routing
                  </text>

                  {/* Arrow 3->4 */}
                  <line x1="695" y1="159" x2="725" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="723,153 735,159 723,165" fill="#DC2626" />

                  {/* Stage 4 Box */}
                  <rect
                    x="735"
                    y="64"
                    width="155"
                    height="190"
                    rx="12"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  <rect x="735" y="64" width="155" height="32" rx="12" fill="#B45309" />
                  <text x="812" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    04. FORUM RESOLUTION
                  </text>
                  <text x="747" y="122" fill="#34D399" fontSize="11" fontWeight="bold">
                    ✓ Pre-Suit Bill Settlement
                  </text>
                  <text x="747" y="150" fill="#CBD5E1" fontSize="11">
                    • Commercial s.12A Med.
                  </text>
                  <text x="747" y="176" fill="#CBD5E1" fontSize="11">
                    • Order XXXVII Summary
                  </text>
                  <text x="747" y="202" fill="#CBD5E1" fontSize="11">
                    • s.138 / s.25 Prosecution
                  </text>
                  <text x="747" y="228" fill="#F87171" fontSize="10" fontWeight="bold">
                    • Art. 226 Writ (Govt Dues)
                  </text>

                  <text x="460" y="288" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    Audit-ready case history exportable for Hospital Trustees, RCM Heads, and Statutory Auditors
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Pipeline Cards */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {[
                  {
                    step: "01. Discharge & Ledger Audit",
                    text: "Release patients lawfully under Article 21 against voluntary itemized bill acknowledgment and Attendant Co-Obligor KYC, or compile TPA/CGHS audit clearances.",
                  },
                  {
                    step: "02. Statutory Drafting",
                    text: "Advocates draft NI s.138 discharge cheque notices, IRDAI Bank Rate + 2% TPA claims, CPC s.80 notices, or 194J/franchise demands in ethical medical-legal tone.",
                  },
                  {
                    step: "03. Tri-Channel Dispatch",
                    text: "Simultaneous delivery via Speed Post RPAD, Email, and verified WhatsApp backed by Section 63 BSA 2023 cryptographic hash certificates.",
                  },
                  {
                    step: "04. Pre-Suit Cure or Forum Action",
                    text: "Resolve balances in 15 days or escalate uncured claims to Order XXXVII CPC summary suits, s.138 complaints, Commercial s.12A mediation, or Art. 226 writs.",
                  },
                ].map((stage) => (
                  <div
                    key={stage.step}
                    className="rounded-xl bg-slate-900 text-white p-4 border border-slate-800"
                  >
                    <p className="text-xs font-extrabold text-red-400 mb-1">{stage.step}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{stage.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Vertical Scenario Tabs */}
            <section
              id="heading-vertical-tracks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Interactive Recovery Playbooks Across 4 Healthcare Segments
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Select your healthcare vertical below to review exact statutory workflows,
                compliance boundaries, and linked execution playbooks.
              </p>

              <HospitalsHubScenarioTabs />
            </section>

            {/* Section 5: Discharge Desk, TPA Batch & Representee Vault */}
            <section
              id="heading-dispatch-vault"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Advocate-Led Discharge Desk, TPA Batch &amp; Representee Vault
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                <p>
                  Hospital finance teams, specialty clinic chains, and diagnostic networks rarely
                  have in-house litigation cells dedicated to sub-₹5 Lakh patient balances or
                  hundreds of aged insurer short-settlements. Traditional law firm retainers charge
                  prohibitive per-notice fees, while unlicensed recovery agents create fatal NMC and
                  patient-harassment risks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-2">
                    Track 1 • Single-Case RCM Pilot (₹999)
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Post-Discharge Undertaking &amp; Stop-Payment Notice
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a single unpaid ICU bill, bounced discharge cheque, or 194J fee invoice
                    via{" "}
                    <Link href="/user/new-recovery" className="text-[#DC2626] font-semibold underline">
                      /user/new-recovery
                    </Link>
                    . Enrolled advocates verify your itemized bill and dispatch tri-channel notices
                    with Email, WhatsApp, and India Post RPAD tracking.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">
                    Track 2 • Hospital Group &amp; Lab Chain CSV
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Multi-Unit Representees &amp; Aged TPA Batch Vault
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Map Trust Deeds, Society Resolutions, and Hospital Director POAs across multiple
                    hospital units or diagnostic labs under{" "}
                    <Link href="/user/representees" className="text-emerald-700 font-semibold underline">
                      /user/representees
                    </Link>
                    . Batch-process 10 to 10,000+ aged TPA, CGHS, corporate tie-up, and PCC franchise
                    accounts cleanly.
                  </p>
                </div>
              </div>
            </section>

            {/* Dual-Track B2B Conversion Funnel */}
            <HospitalsHubCTA />

            {/* Section 6: Constitutional, IRDAI & Statutory Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Binding Constitutional, IRDAI &amp; Statutory Precedents for Hospitals
                </h2>
              </div>

              <div className="space-y-4">
                {PRECEDENTS_AND_MANDATES.map((item) => (
                  <div
                    key={item.title}
                    className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"
                    />
                    <p className="text-sm sm:text-base font-extrabold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs font-bold text-[#DC2626] mt-0.5 mb-2">{item.citation}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      {item.holding}
                    </p>
                    <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 inline-block">
                      Operational Rule: {item.actionableRule}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Illustrative Hospital RCM Unit Economics */}
            <section
              id="heading-unit-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Hospital RCM Unit Economics: ICU Undertaking vs Aged TPA Claims
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                <strong>Illustrative Procedural &amp; Statutory Calculation Model:</strong> Comparing
                informal write-offs against structured statutory enforcement across two common
                hospital receivables scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Scenario A */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-2">
                    Model A • Post-Discharge ICU Balance
                  </span>
                  <p className="text-base font-extrabold text-slate-900 mb-2">
                    ₹3,80,000 Unpaid ICU Balance + Relative Cheque Stop-Payment
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Broken Approach:</strong> Holding the patient at discharge triggers
                      police/CMO intervention under Article 21, while unsigned billing promises fail
                      under Order XXXVII scrutiny.
                    </li>
                    <li>
                      <strong>IND-03 Legal Workflow:</strong> Discharge unconditionally with signed
                      itemized bill + Attendant Co-Guarantor Undertaking. Upon next-morning cheque
                      stop-payment, serve a ₹999 advocate{" "}
                      <strong>Section 138 NI Act</strong> notice within 30 days citing{" "}
                      <em>Beena Shabeer</em>.
                    </li>
                    <li className="text-emerald-800 font-semibold">
                      Statutory Outcome: Criminal summons leverage on the drawer plus Order XXXVII
                      summary recovery without Article 21 exposure.
                    </li>
                  </ul>
                </div>

                {/* Scenario B */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold mb-2">
                    Model B • Aged Cashless TPA Ledger
                  </span>
                  <p className="text-base font-extrabold text-slate-900 mb-2">
                    ₹48,00,000 Across 32 Delayed / Short-Settled Cashless Claims (120 Days Overdue)
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Broken Approach:</strong> Hospital billing clerks send repeated polite
                      emails while quietly accepting 20% arbitrary consumable cuts (₹9.6L loss).
                    </li>
                    <li>
                      <strong>IND-03 Legal Workflow:</strong> Run claims through our{" "}
                      <Link
                        href="/tools/hospital-tpa-delayed-claim-interest-calculator"
                        className="text-[#DC2626] font-semibold underline"
                      >
                        IRDAI Penal Interest Calculator
                      </Link>{" "}
                      (computing statutory <strong>RBI Bank Rate + 2%</strong> pro-rata delay
                      interest per claim—e.g. at an illustrative 8.75% combined rate over 120 delay
                      days = ~₹1.38 Lakh statutory interest add-on) and serve joint notice on the
                      Insurer + TPA under Commercial Courts Act s.12A.
                    </li>
                    <li className="text-amber-900 font-semibold">
                      Statutory Outcome: Enforces signed ROHINI MOU package schedules and creates
                      audit-verified bad-debt or commercial recovery files.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Complete 15-Spoke IND-03 Directory */}
            <section
              id="heading-ind03-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Complete IND-03 Directory: All 15 Healthcare Spokes, Tools &amp; Templates
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Explore every specialized guide, interactive IRDAI calculator, discharge legal pack,
                and hospital receivables benchmark report in the IND-03 healthcare cluster.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => (
                  <div key={track.key}>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900 border-b border-slate-200 pb-2 mb-4">
                      {track.heading}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {track.items.map((spoke) => (
                        <Link
                          key={spoke.id}
                          href={spoke.url}
                          className="group rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 hover:bg-white p-4 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase ${track.badgeClass}`}
                              >
                                {spoke.id} • {spoke.archetypeLabel}
                              </span>
                            </div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                              {spoke.title}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed mb-2">
                              {spoke.summary}
                            </p>
                          </div>
                          <p className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200/80">
                            {spoke.statute}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Foundational Statutory Guides & Bulk Recovery Pages */}
            <section
              id="heading-seed-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Foundational Statutory Guides &amp; Bulk Recovery Pages on LegalRecovery
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Access existing live statutory templates, government notice guides, cheque-bounce
                timelines, and bulk dispatch infrastructure immediately:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {LIVE_SEED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-slate-200 hover:border-slate-900 p-4 bg-slate-50 hover:bg-white transition-all block"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.label} →
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.note}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: Institutional FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  FAQs: Hospital, Doctor, TPA &amp; Healthcare Debt Recovery in India
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-base font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Authorities & Official Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Statutory Authorities, IRDAI, CGHS &amp; Court Reference Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {OFFICIAL_SOURCES.map((src) => (
                  <li key={src.label} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">•</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 transition-colors"
                    >
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="healthcareB2B" />
    </div>
  );
}
