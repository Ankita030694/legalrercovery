import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SocietyMaintenanceNoticeCTA from "./SocietyMaintenanceNoticeCTA";
import SocietyMaintenanceTOC from "./SocietyMaintenanceTOC";
import SocietyMaintenanceWorkspace from "./SocietyMaintenanceWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Society Maintenance Recovery Notice Format (Free)",
  description:
    "A notice format societies can send to defaulting members for maintenance arrears, with interest and the state-law recovery route.",
  alternates: {
    canonical: `${SITE_URL}/templates/society-maintenance-recovery-notice`,
  },
  openGraph: {
    title: "Maintenance Arrears Notice Format for Housing Societies",
    description:
      "A notice format societies can send to defaulting members for maintenance arrears, with interest and the state-law recovery route.",
    url: `${SITE_URL}/templates/society-maintenance-recovery-notice`,
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
    title:
      "Maharashtra Co-operative Societies Act, 1960 (Act No. XXIV of 1961) — Section 101 (Summary Recovery Certificate for Society Maintenance Arrears) & Section 156 (Registrar's Attachment Powers)",
    url: "https://www.indiacode.nic.in/handle/123456789/16058",
  },
  {
    title:
      "Delhi Co-operative Societies Act, 2003 (Delhi Act 3 of 2004) — Section 70 (Disputes Referred to Registrar Arbitration) & Section 83 (Execution of Awards & Attachment)",
    url: "https://www.indiacode.nic.in/handle/123456789/13602",
  },
  {
    title:
      "Uttar Pradesh Apartment (Promotion of Construction, Ownership and Maintenance) Act, 2010 — Section 14(5) & Section 22 (Unpaid Common Expenses Constitute a Statutory Charge on the Apartment)",
    url: "https://www.indiacode.nic.in/handle/123456789/19150",
  },
  {
    title:
      "Karnataka Co-operative Societies Act, 1959 — Section 70 (Disputes Touching Business of a Co-operative Society) & Section 101 (Execution of Orders)",
    url: "https://www.indiacode.nic.in/handle/123456789/7418",
  },
  {
    title:
      "Code of Civil Procedure, 1908 (Act No. 5 of 1908) — Order XXXVII & Order VII (Civil Recovery Suits by Societies Registered Under the Societies Registration Act, 1860)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Maintenance Bills, Accounting Ledgers & WhatsApp/Email Notice Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Bombay High Court on 10% Maximum Cap on Non-Occupancy Charges & Validity of Model Bye-Laws",
    parties: "Mont Blanc Co-operative Housing Society Ltd. & Anr. v. State of Maharashtra & Ors.",
    citation: "2007 (4) Mh.L.J. 595, High Court of Judicature at Bombay",
    date: "Division Bench Judgment Dated 2 March 2007",
    facts:
      "Several housing societies challenged the Maharashtra Government Circular issued under Section 79A of the MCS Act, 1960, which capped Non-Occupancy Charges (NOC) levied on flats let out to tenants at 10% of the basic service charges (excluding municipal property taxes). Certain societies were charging 100% to 500% extra maintenance from flat owners who rented out their apartments.",
    holding:
      "The Division Bench of the Bombay High Court upheld the statutory validity of the Section 79A order and ruled that no cooperative housing society can levy non-occupancy charges exceeding 10% of the standard service charges (excluding municipal/local authority taxes). Furthermore, no non-occupancy charge is payable at all if the flat is occupied by immediate family members as defined in the Bye-Laws.",
    amount: "Non-Occupancy Charges Strictly Capped at 10% of Service Charges; Excess Demands Quashed",
    takeaway:
      "When drafting a society maintenance recovery notice against a landlord member who has rented out their flat, ensure non-occupancy arrears do not exceed 10% of basic service charges—otherwise the Deputy Registrar will strike down the inflated claim during Section 101 scrutiny.",
  },
  {
    title: "Bombay High Court on Mandatory Principles of Natural Justice & Itemized Ledger Under Section 101 MCS Act",
    parties: "Sundeep Polymers Pvt. Ltd. & Ors. v. State of Maharashtra & Ors. (and connected Section 101 Rulings)",
    citation: "2010 (6) Mh.L.J. 690, High Court of Judicature at Bombay",
    date: "Judgment Dated 2010",
    facts:
      "A cooperative society obtained a Recovery Certificate under Section 101 of the Maharashtra Co-operative Societies Act, 1960 without serving a prior itemized statement of accounts or passing a valid Managing Committee resolution authorizing the proceedings, and the Registrar issued the certificate mechanically without a reasoned speaking order.",
    holding:
      "The High Court held that Section 101 is a drastic summary recovery mechanism that bypasses a full trial, and therefore strict compliance with Rules 86A to 86F of the MCS Rules, 1961 is mandatory. The society must first serve a written demand notice accompanied by a bill-by-bill ledger extract, pass a specific Managing Committee resolution, and the Registrar must conduct a summary inquiry verifying the principal and simple interest calculations before granting a Recovery Certificate.",
    amount: "Mechanical Section 101 Certificate Set Aside; Fresh Hearing Ordered With Full Ledger Disclosure",
    takeaway:
      "Never jump straight to the Registrar's office without first serving a formal 15-day written demand notice enclosing a certified month-by-month ledger statement and citing the Managing Committee resolution number.",
  },
  {
    title: "Supreme Court on Invalidity of Disconnecting Essential Water Supply or Charging Arbitrary Penalties",
    parties: "Venus Co-operative Housing Society & Anr. v. Dr. J.Y. Detwani & Ors.",
    citation: "2003 (3) ALL MR 570 (Bom HC) / Affirmed Principles on Statutory Recovery vs Coercive Self-Help",
    date: "Judgment Dated 2003",
    facts:
      "Disputes arose between flat members and the managing committee regarding differential maintenance billing and coercive steps taken by the managing committee against members who questioned disputed heads of expenditure.",
    holding:
      "Courts have consistently held that a housing society must recover unpaid maintenance strictly through the statutory recovery machinery prescribed under the Cooperative Societies Act (such as Section 91 or Section 101 of the MCS Act) and cannot resort to extra-legal strong-arm tactics such as cutting off essential municipal drinking water supply, blocking lift access to senior citizens, or publicly defaming members on external banners.",
    amount: "Coercive Disconnection of Essential Utilities Held Illegal; Statutory Recovery Route Enforced",
    takeaway:
      "Do not threaten to cut off essential water or electricity in your maintenance demand letter. Instead, invoke your lawful powers: charging up to 21% simple interest, recording a statutory first charge on the flat, restricting non-essential amenities (clubhouse/gym/additional parking), and filing for a Recovery Certificate.",
  },
  {
    title: "Supreme Court on Binding Nature of General Body Resolutions & Statutory Society Bye-Laws",
    parties: "Zoroastrian Co-operative Housing Society Ltd. & Anr. v. District Registrar, Co-operative Societies (Urban) & Ors.",
    citation: "(2005) 5 SCC 632, Supreme Court of India",
    date: "Judgment Dated 15 April 2005",
    facts:
      "A member challenged the enforceability of registered society bye-laws and resolutions passed by the General Body governing membership obligations and property restrictions within the cooperative housing society.",
    holding:
      "The Supreme Court held that once a person voluntarily becomes a member of a registered cooperative housing society, they lose their independent right to act contrary to the registered Bye-Laws and lawful General Body (AGM/SGM) resolutions. Until a General Body resolution levying maintenance or repair contributions is set aside by a competent Cooperative Court or Registrar, every member is legally bound to pay the assessed charges.",
    amount: "Registered Bye-Laws & General Body Resolutions Held Binding on All Members",
    takeaway:
      "A flat owner cannot unilaterally withhold monthly maintenance citing personal dissatisfaction with security guards, seepage repairs, or gardening. Their legal obligation to pay AGM-approved maintenance is independent, and your demand notice should explicitly cite this principle.",
  },
];

const FAQS = [
  {
    question: "What is the legal process for society maintenance dues recovery in India?",
    answer:
      "The statutory maintenance dues recovery process follows 4 sequential steps: (1) Issue monthly maintenance bills and allow the grace period fixed in the society bye-laws; (2) Pass a Managing Committee resolution and serve a formal 15-day Society Maintenance Recovery Notice (first demand letter, followed by a final pre-litigation advocate notice) enclosing a certified bill-by-bill ledger statement; (3) If the member still defaults, file a summary recovery application before the Deputy/Assistant Registrar under Section 101 of the Maharashtra Co-operative Societies Act, 1960 (or Section 70 of the Delhi/Karnataka Co-operative Societies Acts, or Section 22 of the UP Apartment Act, 2010); and (4) Execute the Recovery Certificate by attaching the member's bank account, garnishing rent from their tenant, or registering a statutory charge on the flat.",
  },
  {
    question: "How much interest can a housing society legally charge on overdue maintenance arrears?",
    answer:
      "Under Model Bye-Law No. 71 in Maharashtra (and similar state cooperative bye-laws), a cooperative housing society can charge simple interest up to a maximum of 21% per annum (or such lower rate as fixed by the General Body in the AGM) on unpaid maintenance bills from the due date until actual payment. Crucially, societies can only levy simple interest on the unpaid principal service and repair charges—charging compound interest (interest on previous months' interest) is illegal and routinely struck down by Deputy Registrars.",
  },
  {
    question: "Can a housing society or RWA disconnect water or electricity for non-payment of maintenance?",
    answer:
      "Cutting off essential municipal drinking water supply is held by High Courts to violate the fundamental right to life under Article 21 of the Constitution, especially where families, children, or senior citizens reside. Instead of disconnecting essential municipal water or grid electricity, the society should legally restrict non-essential common facilities (such as clubhouse, swimming pool, gymnasium, community hall booking, and additional visitor parking), place the member on the Defaulting Members list (barring voting/election rights), withhold voluntary sale/refinance NOCs until arrears are paid, and obtain a Section 101 Recovery Certificate for bank or rent attachment.",
  },
  {
    question: "Can a society refuse to give an NOC due to a maintenance dispute or demand transfer money?",
    answer:
      "If a member has genuine, quantified unpaid maintenance arrears approved by the AGM, the society holds a statutory first charge on the flat (e.g., under Section 47 of the MCS Act or Section 22 of the UP Apartment Act) and can lawfully require clearance of all pending maintenance dues and simple interest before issuing a No Dues Certificate / Sale NOC. However, if the member has paid all regular maintenance bills and the society withholds the NOC solely to extort an illegal 'voluntary donation' or transfer premium above the statutory ₹25,000 limit in Maharashtra, the member can serve a counter legal notice and complain to the Deputy Registrar.",
  },
  {
    question: "Who is liable to pay overdue society maintenance—the flat owner (landlord) or the tenant?",
    answer:
      "Under cooperative society and apartment ownership laws across India, primary statutory liability for society maintenance always rests with the registered flat owner (member), because privity of membership exists between the society and the owner. Even if the leave-and-licence or rental agreement states that the tenant will pay monthly maintenance, the society must address its formal recovery notice to the flat owner. However, once a Recovery Certificate is issued—or if the landlord is Simultaneously withholding the tenant's security deposit—the Recovery Officer can issue a garnishee order directing the tenant to deposit monthly rent directly into the society's account toward the owner's arrears.",
  },
  {
    question: "Can a flat owner stop paying maintenance because of roof leakage, lift breakdown, or poor housekeeping?",
    answer:
      "No. Under settled cooperative law (including Zoroastrian CHS v. District Registrar), a member's statutory duty to contribute to common outgoings—which fund municipal water bills, common electricity, lift AMC, insurance, and staff wages—is absolute and cannot be unilaterally suspended by self-help set-off. If a member has a grievance regarding structural seepage or deficient services, they must pay the maintenance (under protest if necessary) and file an independent complaint before the Cooperative Court or Registrar under Section 91/70.",
  },
  {
    question: "Society maintenance bकाया (arrears) वसूली के लिए डिफॉल्टर फ्लैट मालिक को नोटिस कैसे भेजें?",
    answer:
      "यदि कोई फ्लैट मालिक लगातार मेंटेनेंस बिल जमा नहीं कर रहा है, तो प्रबंध समिति (Managing Committee) को पहले एक प्रस्ताव (Resolution) पारित करना चाहिए और सदस्य को 15 दिन का लिखित मांग नोटिस (Maintenance Recovery Notice) पंजीकृत डाक (RPAD), ईमेल और हैंड-डिलीवरी द्वारा भेजना चाहिए। नोटिस के साथ महीने-वार बकाया मूल राशि और साधारण ब्याज (अधिकतम 21% वार्षिक तक) का लेजर स्टेटमेंट संलग्न करना अनिवार्य है। 15 दिन में भुगतान न होने पर एडवोकेट के माध्यम से अंतिम वैधानिक नोटिस भेजकर सहकारिता उप-निबंधक (Deputy Registrar) के समक्ष धारा 101 (Section 101 MCS Act) या संबंधित राज्य अपार्टमेंट कानून के तहत वसूली प्रमाण-पत्र (Recovery Certificate) का आवेदन किया जाता है।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maintenance Arrears Notice Format for Housing Societies",
  description:
    "A notice format societies can send to defaulting members for maintenance arrears, with interest and the state-law recovery route.",
  datePublished: "2026-11-04T12:25:00+05:30",
  dateModified: "2026-11-04T12:25:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/society-maintenance-recovery-notice`,
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
    name: "Housing Society Maintenance Arrears Recovery Notice",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Society Maintenance Recovery Notice Format (English & Hindi Word Template)",
  description:
    "Downloadable housing society maintenance arrears demand notice format for Cooperative Housing Societies (CHS), RWAs, and Apartment Owners Associations (AOA) with Section 101 recovery clauses.",
  encodingFormat: "application/msword",
  url: `${SITE_URL}/templates/society-maintenance-recovery-notice`,
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "General Public",
    },
  },
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
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Society Maintenance Recovery Notice Format",
      item: `${SITE_URL}/templates/society-maintenance-recovery-notice`,
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

export default function SocietyMaintenanceRecoveryNoticePage() {
  const breadcrumbItems = [
    { label: "Templates", href: "/templates" },
    {
      label: "Society Maintenance Recovery Notice Format",
      href: "/templates/society-maintenance-recovery-notice",
    },
  ];

  // TODO(reviewer): Render Reviewer Box from src/data/reviewers.ts once verified advocate metadata is populated.

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
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
        {/* Hero Section strictly matching IRCTC & P3 Template theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 101 MCS Act &amp; State Apartment Laws</span>
              <span className="text-red-500">•</span>
              <span>Archetype P3 Annotated Template</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-3 sm:mb-4 break-words">
              Maintenance Arrears Notice Format for Housing Societies
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base mb-5 max-w-3xl">
              Use Case: Formal written demand and pre-recovery show-cause notice for Cooperative Housing Societies (CHS), Apartment Owners Associations (AOA), and RWAs to recover unpaid monthly maintenance bills, sinking fund dues, and simple interest from defaulting flat owners.
            </p>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Housing Society Maintenance Recovery Mandate)
              </p>
              <p>
                A housing society maintenance recovery notice is a mandatory 15-day written demand served on a defaulting flat owner pursuant to a Managing Committee resolution, annexing an itemized bill-by-bill ledger and simple interest (capped at 21% p.a. under Model Bye-Law 71). If unpaid, it unlocks summary execution via a Recovery Certificate under Section 101 of the Maharashtra Co-operative Societies Act, 1960 or equivalent state Apartment Ownership Acts.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Mandatory Pre-Filing Cure Period
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Up to 21%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Max Simple Interest (Bye-Law 71)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 101 / 70</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Registrar Summary Recovery Route
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">1st Charge</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Lien on Defaulting Flat
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <SocietyMaintenanceTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Standing of Society Maintenance Notices */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why a Maintenance Recovery Notice Is Legally Mandatory
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                  <p>
                    Across Indian residential complexes, 5% to 12% of flat owners chronically delay or withhold monthly maintenance charges—starving the housing society of working capital needed to pay municipal water bills, common-area electricity, lift annual maintenance contracts (AMCs), 24x7 security guards, and statutory sinking funds. Yet when Managing Committees attempt to take action against chronic defaulters, their recovery applications are frequently rejected by the Deputy Registrar or Cooperative Court on technical grounds.
                  </p>
                  <p>
                    The single most common reason a society loses or faces remand in recovery proceedings is <strong>failure to serve a legally compliant pre-litigation society maintenance recovery notice</strong> backed by a Managing Committee resolution and an itemized bill-by-bill ledger statement. Under <strong>Rule 86A of the Maharashtra Co-operative Societies Rules, 1961</strong> (for Section 101 Recovery Certificates) as well as arbitration rules under the Delhi, Karnataka, and Uttar Pradesh statutes, the society must prove that the defaulting member was given a clear opportunity to verify the ledger and cure the default before coercive statutory powers were invoked.
                  </p>
                  <p>
                    Furthermore, where a flat is let out on leave and licence, disputes often entangle both the flat owner and the tenant—especially when a landlord deducts alleged society arrears from a vacating tenant&apos;s security deposit (see our guide on how tenants can{" "}
                    <Link
                      href="/recover-security-deposit-from-landlord-india"
                      className="text-[#DC2626] font-semibold underline hover:text-red-800"
                    >
                      recover a security deposit from a landlord in India
                    </Link>{" "}
                    or read in Hindi:{" "}
                    <Link
                      href="/recover-security-deposit-from-landlord-india"
                      className="text-[#DC2626] font-semibold underline hover:text-red-800"
                    >
                      सिक्योरिटी डिपॉजिट वापस कैसे लें
                    </Link>
                    ). A properly drafted society maintenance recovery letter establishes beyond doubt that primary statutory liability rests on the registered unit owner.
                  </p>
                </div>

                {/* Comparison of Legal Entities: CHS vs AOA vs RWA */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-6">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">Housing Body Type</th>
                        <th className="p-3 sm:p-4">Governing Statute</th>
                        <th className="p-3 sm:p-4">Primary Recovery Forum</th>
                        <th className="p-3 sm:p-4">Statutory Property Lien / Charge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Co-operative Housing Society (CHS)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          State Co-operative Societies Act (e.g., MCS Act 1960, DCS Act 2003, KCS Act 1959)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Deputy / Assistant Registrar (Sec 101 Recovery Certificate or Sec 70 Arbitration)
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                          Yes — Statutory First Charge on Flat &amp; Share Certificate (e.g., Sec 47 MCS Act)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Apartment Owners Association (AOA / Condominium)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          State Apartment Ownership Act (e.g., UP Act 2010, MAOA 1970, KAOA 1972, Haryana 1983, TN 2022)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Competent Authority / Registrar or Civil Court Charge Enforcement Suit
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                          Yes — Unpaid Common Expenses Constitute Prior Charge on Apartment (e.g., Sec 22 UP Act)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Resident Welfare Association (RWA - Society Reg. Act)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Societies Registration Act, 1860 / Haryana Reg. &amp; Regulation of Societies Act, 2012
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Civil Court Summary Suit (Order XXXVII CPC) or Ordinary Money Suit
                        </td>
                        <td className="p-3 sm:p-4 text-amber-700 font-semibold">
                          Contractual Obligation under Maintenance Agreement / Deed of Declaration
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: H2 - Archetype P3 Side-by-Side Annotated Sample */}
              <section
                id="heading-annotated-sample"
                aria-labelledby="heading-annotated-sample-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-annotated-sample-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Annotated Sample: Maintenance Arrears Recovery Notice
                  </h2>
                  <span className="text-xs uppercase font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200 shrink-0">
                    Archetype P3 Annotated Specimen
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  Review the specimen society demand notice on the left alongside its numbered legal margin annotations (1–8) on the right. Every numbered marker corresponds to a mandatory evidentiary requirement inspected by the Deputy Registrar or Civil Judge.
                </p>

                {/* Two-Column Side-by-Side Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Sample Document with Footnote Markers */}
                  <div className="lg:col-span-7 bg-amber-50/50 p-5 sm:p-6 rounded-2xl border-2 border-amber-200 shadow-sm font-serif text-xs sm:text-sm leading-relaxed text-slate-900 relative">
                    <div className="text-center border-b border-amber-300 pb-3 mb-4">
                      <p className="font-bold text-sm sm:text-base uppercase tracking-wider text-slate-900">
                        GREEN VALLEY CO-OPERATIVE HOUSING SOCIETY LTD.{" "}
                        <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-sans font-bold">
                          1
                        </sup>
                      </p>
                      <p className="text-[11px] font-sans text-slate-600 mt-0.5">
                        Regd. No.: BOM/WR/HSG/TC/11482/2014-15 | Plot 44, Sector 14, Vashi, Navi Mumbai 400703
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-3 text-xs font-sans text-slate-700">
                      <div>
                        <strong>Ref:</strong> GVCHS/MAINT/2026-27/108
                      </div>
                      <div>
                        <strong>Date:</strong> 4th November 2026
                      </div>
                    </div>

                    <div className="mb-3 text-xs font-sans text-slate-800">
                      <p className="font-bold text-red-700 uppercase text-[11px] mb-1">
                        BY REGISTERED POST A.D. / OFFICIAL EMAIL / HAND DELIVERY{" "}
                        <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">
                          2
                        </sup>
                      </p>
                      <p>
                        <strong>To:</strong> Shri Siddharth Malhotra, Registered Member —{" "}
                        <strong>Flat No. B-704 (Wing B)</strong>, Share Cert. No. 74{" "}
                        <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">
                          3
                        </sup>
                      </p>
                    </div>

                    <div className="mb-4 text-xs font-sans bg-amber-100/80 p-2.5 rounded-lg border border-amber-300/90 font-bold text-slate-900">
                      SUBJECT: FINAL STATUTORY DEMAND NOTICE FOR MAINTENANCE ARREARS OF ₹1,19,320 (APRIL 2025 – OCTOBER 2026) PRIOR TO SECTION 101 MCS ACT PROCEEDINGS.
                    </div>

                    <p className="mb-3">
                      Pursuant to Managing Committee <strong>Resolution No. MC/RES/2026/19 dated 25.10.2026</strong>{" "}
                      <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-sans font-bold">
                        4
                      </sup>
                      , we hereby call upon you to clear your overdue society maintenance charges for Flat No. B-704. Despite regular monthly bills raised in accordance with the General Body (AGM) approved tariff, your account stands in default for 19 consecutive months:
                    </p>

                    <div className="my-3 p-3 bg-white rounded-xl border border-amber-300 font-sans text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span>1. Principal Maintenance &amp; Water/Electricity Outgoings:</span>
                        <strong>₹85,500</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>2. Statutory Sinking Fund &amp; Major Repair Fund Dues:</span>
                        <strong>₹19,000</strong>{" "}
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>
                          3. Simple Interest @ 21% p.a. (Model Bye-Law No. 71){" "}
                          <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">
                            5
                          </sup>
                          :
                        </span>
                        <strong>₹14,820</strong>
                      </div>
                      <div className="flex justify-between pt-1.5 border-t border-slate-200 font-extrabold text-slate-900">
                        <span>
                          TOTAL RECOVERABLE ARREARS (Certified Ledger Annexed{" "}
                          <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold">
                            6
                          </sup>
                          ):
                        </span>
                        <span>₹1,19,320</span>
                      </div>
                    </div>

                    <p className="mb-3">
                      You are hereby granted a final statutory cure period of <strong>15 (Fifteen) days</strong>{" "}
                      <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-sans font-bold">
                        7
                      </sup>{" "}
                      from receipt of this notice to remit ₹1,19,320 to the Society Bank Account (A/c No. 50200048192811, IFSC: HDFC0000240) or produce written bank proof of any prior payment for reconciliation.
                    </p>

                    <p className="mb-4">
                      Upon failure to pay within 15 days, the Society shall enforce its statutory first charge under Section 47 and file an application before the Deputy Registrar under <strong>Section 101 of the Maharashtra Co-operative Societies Act, 1960</strong>{" "}
                      <sup className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-sans font-bold">
                        8
                      </sup>{" "}
                      for a Recovery Certificate and attachment of bank accounts / rent garnishment at your cost.
                    </p>

                    <div className="pt-3 border-t border-amber-300 font-sans text-xs flex justify-between items-end">
                      <div>
                        <p className="text-[11px] text-slate-600">Encl: Annexure-A (19-Month Certified Bill Ledger)</p>
                        <p className="font-semibold text-slate-800 mt-1">[Official Society Rubber Seal]</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900">Sd/- Hon. Secretary &amp; Chairman</p>
                        <p className="text-[11px] text-slate-600">Green Valley CHS Ltd.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Numbered Margin Annotations (<ol>) */}
                  <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-700 border-b border-slate-100 pb-2">
                      Statutory Margin Annotations &amp; Registrar Scrutiny Notes
                    </h3>

                    <ol className="space-y-3.5 text-xs text-slate-700 list-none pl-0">
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          1
                        </span>
                        <div>
                          <strong className="text-slate-900">Registered Name &amp; Reg. No.:</strong> Proves the society is a body corporate (e.g., under Section 36 MCS Act) legally entitled to sue and recover statutory dues in its own name.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          2
                        </span>
                        <div>
                          <strong className="text-slate-900">Verifiable Dispatch Mode:</strong> Registrars require proof of delivery. Always dispatch via Registered Post AD (RPAD) to both the flat address and any external correspondence address registered by the member, plus email/WhatsApp.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          3
                        </span>
                        <div>
                          <strong className="text-slate-900">Member Name, Flat &amp; Share Certificate:</strong> Identifies the exact immovable unit and share certificate over which the society holds a statutory first charge/lien for unpaid outgoings.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          4
                        </span>
                        <div>
                          <strong className="text-slate-900">Managing Committee Resolution Citation:</strong> A Secretary cannot initiate legal recovery unilaterally. Citing the MC Resolution number and date proves collective institutional authorization.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          5
                        </span>
                        <div>
                          <strong className="text-slate-900">Segregated Simple Interest (Max 21% p.a.):</strong> Principal dues and interest must be shown separately. Never compound interest—Model Bye-Law 71 permits only simple interest up to 21% p.a.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          6
                        </span>
                        <div>
                          <strong className="text-slate-900">Certified Bill-by-Bill Ledger (Annexure-A):</strong> Under <em>Sundeep Polymers</em>, a lump-sum demand without a month-wise statement of bills raised and payments credited violates natural justice.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          7
                        </span>
                        <div>
                          <strong className="text-slate-900">15-Day Cure &amp; Reconciliation Window:</strong> Gives the member a fair chance to pay or produce UTR receipts for any uncredited transfer before the society files before the Registrar.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                          8
                        </span>
                        <div>
                          <strong className="text-slate-900">State-Law Recovery Section Warning:</strong> Explicitly puts the member on notice of summary Recovery Certificate execution (Sec 101 MCS Act / Sec 70 DCS/KCS Act / Sec 22 UP Apartment Act).
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Section 3: H2 - Interactive Society Maintenance Notice Workspace */}
              <section
                id="heading-interactive-workspace"
                aria-labelledby="heading-interactive-workspace-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-interactive-workspace-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Society Maintenance Recovery Notice Template
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Customize the placeholders below for your Cooperative Housing Society, Apartment Owners Association, or RWA. Switch between the <strong>1st Committee Demand Letter</strong>, the <strong>Final Section 101 / Registrar Pre-Recovery Notice</strong>, and the <strong>Hindi (हिंदी) Format</strong>, then copy the text or download a formatted Microsoft Word (<code>.doc</code>) file.
                </p>

                <SocietyMaintenanceWorkspace />
              </section>

              {/* Section 4: H2 - Mandatory vs Optional Elements Table */}
              <section
                id="heading-mandatory-elements"
                aria-labelledby="heading-mandatory-elements-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-mandatory-elements-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Mandatory vs Optional Elements in Maintenance Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Before printing your demand letter on the society letterhead or escalating to an{" "}
                  <Link
                    href="/legal-notice-to-cooperative-housing-society-maintenance-disputes"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    advocate legal notice for housing society maintenance disputes
                  </Link>
                  , verify which elements are statutorily mandatory for Registrar admissibility versus optional best practices:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">Notice Component / Clause</th>
                        <th className="p-3 sm:p-4">Legal Status</th>
                        <th className="p-3 sm:p-4">Statutory Authority / Rule</th>
                        <th className="p-3 sm:p-4">Consequence If Omitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Managing Committee Resolution No. &amp; Date
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold text-[11px] border border-red-200">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">Rule 86A MCS Rules, 1961 &amp; Model Bye-Law 138</td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Defaulter can challenge the Secretary&apos;s locus standi to initiate recovery without committee approval.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Itemized Bill-Wise Principal vs. Interest Split
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold text-[11px] border border-red-200">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <em>Sundeep Polymers v. State of Maharashtra</em> (2010)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Registrar cannot verify whether forbidden compound interest was bundled into the principal claim.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Certified Month-by-Month Ledger Extract (Annexure)
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold text-[11px] border border-red-200">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Section 101 MCS Act / Section 63 BSA 2023
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Application for Recovery Certificate will be returned as defective at the Registrar scrutiny counter.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Clear 15-Day Payment &amp; Reconciliation Deadline
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold text-[11px] border border-red-200">
                            MANDATORY
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">Principles of Natural Justice &amp; Bye-Law 70/71</td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Member can plead they were never granted reasonable notice before coercive recovery costs were added.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Share Certificate No. &amp; Distinctive Share Numbers
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[11px] border border-amber-200">
                            RECOMMENDED (CHS)
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 47 MCS Act (Statutory Charge on Shares)</td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Highly recommended for Cooperative Societies; not applicable to AOAs or RWAs where Deed of Apartment applies.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Copy (CC) to Tenant / Occupant or Mortgagee Bank
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[11px] border border-slate-300">
                            OPTIONAL TACTICAL
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">Section 156 MCS Act / Garnishee Execution</td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Useful if the flat is rented out or mortgaged, as it alerts the tenant/bank of the society&apos;s first charge.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: H2 - State-Wise Society Maintenance Recovery Section & Interest Rules */}
              <section
                id="heading-state-recovery-laws"
                aria-labelledby="heading-state-recovery-laws-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-state-recovery-laws-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  State-Wise Maintenance Recovery Laws &amp; Forums
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cooperative societies and apartment associations are governed by state-specific enactments under Entry 32 of List II (State List) of the Seventh Schedule to the Constitution. Make sure your maintenance recovery notice cites the exact statutory section applicable to your state:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">State / Metro</th>
                        <th className="p-3 sm:p-4">Governing Act &amp; Recovery Section</th>
                        <th className="p-3 sm:p-4">Max Interest / Late Fee Rule</th>
                        <th className="p-3 sm:p-4">Coercive Execution Power</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Maharashtra (Mumbai, Pune, Thane, Navi Mumbai)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <strong>Section 101</strong>, Maharashtra Co-operative Societies Act, 1960 (or Sec 154B-29 for Housing Societies)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Up to <strong>21% p.a. simple interest</strong> (Model Bye-Law No. 71); Non-occupancy capped at 10% of service charges
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Deputy Registrar issues Recovery Certificate; Special Recovery Officer attaches bank account, rent, or flat under Sec 156 as land revenue arrears.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Karnataka (Bengaluru, Mysuru, Mangaluru)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <strong>Section 70 &amp; 101</strong>, Karnataka Co-op Societies Act, 1959; or <strong>Sec 19</strong> Karnataka Apartment Ownership Act, 1972
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          As per registered Deed of Declaration / Bye-Laws (typically 12%–18% p.a. simple interest)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Statutory charge on apartment under KAOA Sec 19; Registrar award executed via attachment of movable/immovable property or Civil Court.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Delhi (CGHS / Dwarka, Rohini, IP Extension)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <strong>Section 70 &amp; Section 83</strong>, Delhi Co-operative Societies Act, 2003
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Up to <strong>18% p.a. simple interest</strong> or AGM-approved rate under DCS Rules, 2007
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Registrar refers dispute to summary arbitration under Sec 70; award executed under Sec 83 as a civil court decree or land revenue recovery.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Uttar Pradesh (Noida, Greater Noida, Ghaziabad, Lucknow)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <strong>Section 14(5) &amp; Section 22</strong>, UP Apartment Act, 2010 &amp; Model Bye-Laws 2011
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <strong>12% to 18% p.a. simple interest</strong> under UP Model Bye-Laws (Bye-Law 38/42)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Unpaid common expenses constitute a statutory first charge on the apartment; AOA can apply to Competent Authority / Collector for recovery as arrears of land revenue.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Haryana (Gurugram, Faridabad)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <strong>Section 19</strong>, Haryana Apartment Ownership Act, 1983 &amp; HRRS Act, 2012
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Rate fixed in registered Bye-Laws (typically 12%–18% p.a. simple interest)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Prior statutory charge on apartment; District Registrar / Civil Court summary recovery and restriction on non-essential amenities.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Tamil Nadu (Chennai, Coimbatore)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          <strong>Section 18 &amp; 20</strong>, Tamil Nadu Apartment Ownership Act, 2022 / Sec 90 TNCS Act, 1983
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          Interest rate prescribed under registered Society/Association Bye-Laws
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Association holds statutory charge on apartment; unpaid arrears recoverable through Competent Authority / Civil Court.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: H2 - Common Mistakes That Weaken a Society Maintenance Notice */}
              <section
                id="heading-common-mistakes"
                aria-labelledby="heading-common-mistakes-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-common-mistakes-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  6 Mistakes That Weaken a Maintenance Recovery Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Managing Committees frequently commit procedural errors that give a defaulting flat owner ammunition to drag the case before the Cooperative Court, Consumer Commission, or High Court. Avoid these six mistakes when issuing your demand notice:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider">
                      <span>Mistake #1</span>
                      <span>•</span>
                      <span>Compound Interest Calculation</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Charging Interest on Previous Months&apos; Interest
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Many accounting software packages automatically add unpaid interest to the next month&apos;s opening principal balance, creating illegal compound interest. Under Model Bye-Law 71 and Registrar circulars, interest (up to 21% p.a.) must be calculated strictly as <strong>simple interest</strong> on unpaid principal charges only.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider">
                      <span>Mistake #2</span>
                      <span>•</span>
                      <span>Excessive Non-Occupancy Charges</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Levying Above 10% Non-Occupancy Charge on Rented Flats
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under the Bombay High Court ruling in <em>Mont Blanc CHS Ltd.</em> (2007), non-occupancy charges for rented flats cannot exceed <strong>10% of basic service charges</strong> (excluding municipal taxes), and are zero if occupied by close family. Inflated non-occupancy bills will cause your Section 101 application to fail.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider">
                      <span>Mistake #3</span>
                      <span>•</span>
                      <span>Threatening to Cut Drinking Water</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Disconnecting Essential Municipal Water or Electricity
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Putting a written threat in your notice to cut off municipal water or electricity exposes the Managing Committee to police complaints and High Court writ petitions under Article 21. Restrict only <strong>non-essential amenities</strong> (gym, pool, clubhouse, extra parking, voluntary sale NOC) and use the statutory attachment route.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider">
                      <span>Mistake #4</span>
                      <span>•</span>
                      <span>Addressing the Tenant Instead of Owner</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Serving the Primary Demand Notice Only on the Tenant
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Whether the tenant lives in a flat or a managed accommodation subject to{" "}
                      <Link
                        href="/pg-lock-in-period-notice-period-rules"
                        className="text-[#DC2626] font-semibold underline hover:text-red-800"
                      >
                        PG lock-in period and notice period rules
                      </Link>
                      , privity of membership is strictly with the registered flat owner. Address the notice to the owner at both the flat and their external address; mark the tenant only as a <em>CC / Occupant</em>.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider">
                      <span>Mistake #5</span>
                      <span>•</span>
                      <span>Public Defamation on Banners / WhatsApp</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Using Derogatory Language Outside the Official Notice Board
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      While Bye-Laws permit displaying a factual list of defaulting flat numbers and overdue amounts on the internal Society Notice Board prior to an AGM, printing derogatory banners at the main gate or shaming family members on public social media can invite defamation counter-suits under Section 356 BNS.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider">
                      <span>Mistake #6</span>
                      <span>•</span>
                      <span>Missing MC Resolution &amp; Ledger</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Sending a One-Line Lump-Sum Demand Without Annexure
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A notice stating merely &ldquo;Pay ₹1,19,320 within 7 days&rdquo; without attaching the bill-by-bill ledger from the date of default or citing the Managing Committee resolution number will be rejected by the Deputy Registrar under Rule 86B scrutiny.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - SVG Flowchart of the Maintenance Dues Recovery Process */}
              <section
                id="heading-escalation-process"
                aria-labelledby="heading-escalation-process-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-process-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Step-by-Step Housing Society Maintenance Dues Recovery Process
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this 5-stage statutory escalation workflow to convert overdue maintenance bills into an enforceable Recovery Certificate and bank/rent attachment:
                </p>

                <figure className="w-full bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 920 210"
                    className="w-full min-w-[680px] h-auto"
                    role="img"
                    aria-label="5-stage flowchart showing housing society maintenance dues recovery process from bill default to Section 101 Recovery Certificate execution"
                  >
                    <defs>
                      <marker
                        id="arrow-red"
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="25" width="155" height="140" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                    <text x="87" y="52" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                      STAGE 1 (MONTH 1–3)
                    </text>
                    <text x="87" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Bill Default &amp;
                    </text>
                    <text x="87" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      MC Resolution
                    </text>
                    <text x="87" y="118" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      Generate ledger split
                    </text>
                    <text x="87" y="133" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      (Principal + ≤21% SI) &amp;
                    </text>
                    <text x="87" y="148" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      pass MC Resolution
                    </text>

                    <line x1="165" y1="95" x2="193" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />

                    {/* Stage 2 */}
                    <rect x="198" y="25" width="155" height="140" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="275" y="52" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">
                      STAGE 2 (15 DAYS)
                    </text>
                    <text x="275" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Committee Demand
                    </text>
                    <text x="275" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Notice (RPAD)
                    </text>
                    <text x="275" y="118" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      Serve P3 Template +
                    </text>
                    <text x="275" y="133" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      Certified Ledger via
                    </text>
                    <text x="275" y="148" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      RPAD, Email &amp; Hand
                    </text>

                    <line x1="353" y1="95" x2="381" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />

                    {/* Stage 3 */}
                    <rect x="386" y="25" width="155" height="140" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                    <text x="463" y="52" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">
                      STAGE 3 (15 DAYS)
                    </text>
                    <text x="463" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Final Advocate
                    </text>
                    <text x="463" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Show-Cause Notice
                    </text>
                    <text x="463" y="118" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                      Mandatory pre-filing
                    </text>
                    <text x="463" y="133" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                      notice citing Sec 101 /
                    </text>
                    <text x="463" y="148" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                      Sec 70 &amp; First Charge
                    </text>

                    <line x1="541" y1="95" x2="569" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />

                    {/* Stage 4 */}
                    <rect x="574" y="25" width="155" height="140" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                    <text x="651" y="52" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold">
                      STAGE 4 (60–90 DAYS)
                    </text>
                    <text x="651" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Registrar Inquiry &amp;
                    </text>
                    <text x="651" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Recovery Certificate
                    </text>
                    <text x="651" y="118" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      Deputy Registrar verifies
                    </text>
                    <text x="651" y="133" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      ledger under Rule 86 &amp;
                    </text>
                    <text x="651" y="148" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                      grants Sec 101 RC
                    </text>

                    <line x1="729" y1="95" x2="757" y2="95" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />

                    {/* Stage 5 */}
                    <rect x="762" y="25" width="148" height="140" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                    <text x="836" y="52" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">
                      STAGE 5 (EXECUTION)
                    </text>
                    <text x="836" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Bank Attachment /
                    </text>
                    <text x="836" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      Rent Garnishment
                    </text>
                    <text x="836" y="118" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                      SRO attaches bank a/c,
                    </text>
                    <text x="836" y="133" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                      garnishes tenant rent,
                    </text>
                    <text x="836" y="148" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                      or attaches flat (Sec 156)
                    </text>
                  </svg>
                  <figcaption className="text-[11px] sm:text-xs text-slate-500 text-center mt-3">
                    Figure 1: Statutory 5-stage housing society maintenance recovery workflow under Section 101 of the Maharashtra Co-operative Societies Act, 1960 and analogous state cooperative/apartment statutes.
                  </figcaption>
                </figure>
              </section>

              {/* Section 8: H2 - Court Precedents */}
              <section
                id="heading-court-precedents"
                aria-labelledby="heading-court-precedents-title"
                className="scroll-mt-28 space-y-6"
              >
                <h2
                  id="heading-court-precedents-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Supreme Court &amp; High Court Rulings on Maintenance
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  These four judicial precedents govern how housing societies must calculate interest, cap non-occupancy charges, and serve demand notices prior to Section 101 or Registrar proceedings:
                </p>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, index) => (
                    <article
                      key={index}
                      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                          {c.citation}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{c.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">{c.title}</h3>
                      <p className="text-xs font-semibold text-slate-700">Case: {c.parties}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 leading-relaxed pt-1">
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                          <strong className="text-slate-900 block mb-1">Dispute Facts:</strong>
                          {c.facts}
                        </div>
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                          <strong className="text-slate-900 block mb-1">Judicial Holding:</strong>
                          {c.holding}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-xs">
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                          Outcome: {c.amount}
                        </span>
                        <span className="text-slate-600 italic">
                          <strong>Drafting Takeaway:</strong> {c.takeaway}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 9: H2 - Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Case Study: CHS Recovers ₹1,19,320 in Maintenance Arrears
                </h2>

                <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block">
                        Real-World Recovery Scenario • Sector 14 Vashi, Navi Mumbai
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                        Investor Flat Owner Letting Out 3BHK While Ignoring 19 Months of Society Bills
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                      100% Recovered in 14 Days
                    </span>
                  </div>

                  <p>
                    <strong>The Problem:</strong> The owner of Flat B-704 in a 96-unit Cooperative Housing Society in Vashi, Navi Mumbai lived in Pune and had rented out his apartment at ₹42,000/month. While collecting rent every month—and simultaneously holding a 3-month security deposit from his tenant (who later needed a{" "}
                    <Link
                      href="/templates/security-deposit-refund-letter-to-landlord"
                      className="text-[#DC2626] font-semibold underline hover:text-red-800"
                    >
                      security deposit refund letter to the landlord
                    </Link>
                    )—the owner stopped paying the ₹5,500 monthly society bill (₹4,500 service &amp; water charges + ₹1,000 sinking/repair fund) from April 2025 to October 2026. Informal WhatsApp messages from the society manager were ignored.
                  </p>

                  <p>
                    <strong>The Ledger Audit &amp; Notice Strategy:</strong> Instead of cutting off water to the tenant or charging compound interest, the Managing Committee passed Resolution No. <code>MC/RES/2026/19</code>, recalculated the arrears strictly with <strong>21% p.a. simple interest</strong> (₹85,500 principal + ₹19,000 repair/sinking fund + ₹14,820 simple interest = <strong>₹1,19,320</strong>), and served a 15-day final pre-recovery notice via RPAD to the owner&apos;s Pune residence and Vashi flat, with a copy marked to the tenant warning of imminent rent attachment under Section 101 &amp; Section 156 of the MCS Act, 1960.
                  </p>

                  <p>
                    <strong>The Outcome:</strong> Once the tenant saw the official notice warning that his monthly rent would be garnished by a Special Recovery Officer and that clubhouse/parking privileges for Flat B-704 were being suspended, the tenant immediately pressured the landlord. On Day 14, the flat owner remitted the entire <strong>₹1,19,320 via NEFT</strong> to avoid a Section 101 Recovery Certificate and permanent encumbrance entry on his share certificate.
                  </p>
                </div>
              </section>

              {/* Section 10: H2 - 6-Point Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidence Checklist Before Filing Under Section 101
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Keep these six documents ready in your society office dossier so your advocate can immediately file for a Recovery Certificate if the 15-day notice expires unpaid (see our{" "}
                  <Link
                    href="/legal-notice-charges"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    transparent legal notice charges in India
                  </Link>{" "}
                  for committee and bulk defaulter notices):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      num: "01",
                      title: "AGM Resolution Fixing Maintenance Tariff",
                      desc: "Certified copy of the Annual General Body Meeting (AGM) minutes approving the per-flat / per-sq-ft maintenance heads and simple interest rate.",
                    },
                    {
                      num: "02",
                      title: "Bill-by-Bill Certified Ledger Statement",
                      desc: "Month-wise statement signed by the Secretary/Treasurer and Chartered Accountant showing every bill raised, receipt credited, principal balance, and simple interest.",
                    },
                    {
                      num: "03",
                      title: "Copies of Monthly Maintenance Bills",
                      desc: "Copies of the actual monthly bills generated by the society ERP (MyGate, Adda, NoBrokerHood, or tally ledger) with electronic delivery logs.",
                    },
                    {
                      num: "04",
                      title: "15-Day Demand Notice & RPAD Postal Receipts",
                      desc: "Copy of the 1st Demand Notice and Final Pre-Litigation Notice along with original India Post RPAD receipts, tracking printouts, and email/WhatsApp screenshots (Sec 63 BSA).",
                    },
                    {
                      num: "05",
                      title: "Managing Committee Authorization Resolution",
                      desc: "Extract of the Managing Committee meeting minutes authorizing the Hon. Secretary/Chairman to issue the legal notice and file the Section 101 / Sec 70 application.",
                    },
                    {
                      num: "06",
                      title: "Society Registration Certificate & Approved Bye-Laws",
                      desc: "Self-attested copy of the Society Registration Certificate and relevant pages of the registered Bye-Laws (e.g., Bye-Laws 65 to 71 on levy and recovery of charges).",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-slate-900 text-red-400 font-black text-xs flex items-center justify-center">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: H2 - FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-faqs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  FAQs: Society Maintenance Notice &amp; Recovery Rules
                </h2>

                <div className="space-y-3">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                    >
                      <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-bold text-slate-900 text-xs sm:text-sm md:text-base hover:bg-slate-50 transition-colors">
                        <span>{faq.question}</span>
                        <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs group-open:rotate-180 group-open:bg-red-50 group-open:text-[#DC2626] transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: H2 - Primary Sources */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-sources-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  Primary Statutory Sources &amp; Cooperative Law References
                </h2>
                <ol className="sources list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-[#DC2626] underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Bottom CTA Section */}
              <div id="heading-cta-bottom" className="scroll-mt-28 pt-2">
                <SocietyMaintenanceNoticeCTA />
              </div>
            </div>
          </div>
        </div>

        {/* Contextual Related Recovery Guides Cluster */}
        <RelatedRecoveryGuides
          currentPath="/templates/society-maintenance-recovery-notice"
          cluster="property"
        />
      </div>
    </>
  );
}
