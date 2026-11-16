import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SurgicalConsumablesTableOfContents from "./SurgicalConsumablesTableOfContents";
import SurgicalConsumablesScenarioTabs from "./SurgicalConsumablesScenarioTabs";
import SurgicalConsumablesRecoveryCTA from "./SurgicalConsumablesRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/surgical-consumables-ppe-hospital-linen-vendor-payment-recovery";
const EXACT_H1 =
  "Hospital Store Sitting on 180-Day Approved GRNs? Recovery Playbook for Surgical Disposables, Sutures & Medical Gas Vendors";
const META_TITLE = "Surgical Consumables & Hospital Vendor Payment Recovery";
const META_DESCRIPTION =
  "Hospitals stretch surgical consumable vendors to 180+ days. Deploy Section 43B(h) corporate tax disallowance notices and MSMED Act 3x compound interest.";

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
        alt: formatAltText("Surgical Consumables Disposables Hospital Vendor Payment Recovery"),
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
    remedy: "Section 43B(h) Corporate Tax Audit Disallowance Notice",
    statute: "Income-tax Act, 1961 s.43B(h) & Finance Act, 2023",
    timing: "Immediate notice upon reaching 45 days post-GRN; critical before March 31 fiscal year-end",
    mechanism: "Serve formal legal intimation directly to Hospital CFO, Managing Director, and Statutory Auditors disclosing Udyam status and unpaid invoice aging",
    relief: "Forces corporate hospital chains to disallow unpaid purchase expenses in annual corporate tax returns (adding ~31.2% tax liability on overdue ledger), compelling urgent CFO payment priority",
    suitability: "Corporate hospital chains, multi-specialty private clinical networks, and corporate healthcare trusts operating as tax-paying entities",
    tone: "emerald",
  },
  {
    remedy: "MSMED Act Section 16 Statutory 3x RBI Compound Interest & MSEFC Filing",
    statute: "MSMED Act, 2006 (Sections 15, 16, 17 & 18)",
    timing: "Triggered on Day 46 post-delivery (or agreed contractual credit up to 45 days)",
    mechanism: "Filing petition under Section 18 before State Micro and Small Enterprises Facilitation Council (MSEFC Samadhaan portal) based on stamped hospital store GRN",
    relief: "Mandatory monthly compounding interest at 3 times RBI Bank Rate (currently ~20.25% p.a.); non-appealable award without 75% pre-deposit under Section 19",
    suitability: "Udyam-registered surgical consumable manufacturers, suture suppliers, syringe converters, and medical linen vendors facing chronic payment stalling",
    tone: "emerald",
  },
  {
    remedy: "Commercial Summary Suit on Acknowledged Goods Received Notes (GRN)",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015",
    timing: "After statutory notice or failure of pre-institution mediation under Section 12A",
    mechanism: "Fast-track summary suit based on written hospital rate contracts, signed purchase orders, physical CSSD storekeeper GRN stamps, and GST-2B filing records",
    relief: "Summary commercial decree without prolonged full trial unless hospital deposits substantial security; interim asset attachment under Order XXXVIII Rule 5 against hospital billing accounts",
    suitability: "High-ticket accumulated surgical disposables and linen ledgers (₹10 Lakh to ₹5 Crore+) where delivery is indisputably confirmed by store signatures",
    tone: "slate",
  },
  {
    remedy: "Commercial Supply Transition Protocol for Liquid Oxygen & Medical Gases",
    statute: "Indian Contract Act, 1872 (s.73) & Drugs and Cosmetics Act, 1940",
    timing: "15-day advance administrative notice prior to non-emergency supply curtailment",
    mechanism: "Structured tripartite legal intimation addressed to Hospital Medical Superintendent, District Magistrate (DM), and Chief Medical Officer (CMO) documenting cryogenic arrears",
    relief: "Neutralizes bad-faith hospital threats of police complaints under Essential Services Maintenance Act (ESMA); shifts life-safety responsibility to hospital management while freezing insurance escrows",
    suitability: "Bulk liquid medical oxygen (LMO) distributors, cryogenic tank vendors, and manifold gas cylinder suppliers with chronic 90–180+ DPD exposure",
    tone: "emerald",
  },
  {
    remedy: "Deemed Acceptance Enforcement & Bar on Post-Facto Rejection",
    statute: "Sale of Goods Act, 1930 (Sections 41 & 42)",
    timing: "Triggered once hospital retains consumables beyond inspection window or sterilizes/uses items in OTs",
    mechanism: "Evidentiary demonstration that hospital accepted sterile packs, opened master cartons, or issued items to operation theatres without issuing written rejection within agreed QC period",
    relief: "Conclusively bars hospital from asserting post-facto quality defects, package damage, or physician non-preference defenses to withhold payments",
    suitability: "Overcoming retrospective deductions for alleged surgical gown tearing, cannula batch defects, or suture tensile complaints raised 6 months after delivery",
    tone: "slate",
  },
  {
    remedy: "Security Deposit & EMD Restitution Notice under Contract Act",
    statute: "Indian Contract Act, 1872 (Section 74) & Specific Relief Act, 1963",
    timing: "Within 15 days of rate contract expiry or termination",
    mechanism: "Statutory demand for immediate refund of Earnest Money Deposit (EMD) and release of Performance Bank Guarantees (PBG) with 18% commercial interest",
    relief: "Prevents hospital accounts from treating vendor security deposits as general administrative revenue or applying arbitrary retrospective penalties",
    suitability: "Vendors whose rate contracts have successfully expired but whose cash deposits and bank guarantees remain blocked by hospital procurement cells",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "Why do private hospitals routinely delay payments to surgical consumable vendors beyond 180 days?",
    answer:
      "Private hospitals operate under intense cash-flow hierarchies. They prioritize top-tier surgeon consulting fees, pharmaceutical MNC bulk purchases, and high-interest bank debt service first. Because surgical consumables (gloves, IV cannulas, syringes, gauze, sutures) are purchased as high-frequency, smaller-ticket recurring items from fragmented regional distributors, hospital procurement and accounts teams routinely treat these vendors as captive, unsecured lenders. Hospital finance managers deliberately sit on approved Goods Received Notes (GRNs) for 120–180+ days, knowing most suppliers fear losing annual rate contracts if they aggressively demand payment.",
  },
  {
    question: "How does Section 43B(h) of the Income-tax Act force corporate hospitals to clear surgical vendor dues?",
    answer:
      "Under Section 43B(h) of the Income-tax Act, 1961 (effective Assessment Year 2024-25 onwards), any expenditure incurred by a corporate taxpayer for goods or services supplied by an enterprise registered as Micro or Small under the MSMED Act is allowed as a tax deduction only in the financial year in which payment is actually made, provided it is paid within the 45-day statutory limit. Most corporate hospital chains and private clinical nursing homes are profitable companies subject to corporate income tax (~25% to 31.2%). If a hospital fails to pay a Udyam-registered surgical consumables supplier within 45 days, that entire procurement bill is added back to the hospital's taxable profit for that year. A formal legal intimation sent to the CFO and Statutory Auditors highlighting this audit disallowance creates immediate executive pressure to disburse funds before March 31st.",
  },
  {
    question: "Can a hospital storekeeper's stamp on a Goods Received Note (GRN) prove delivery in court?",
    answer:
      "Yes. Under Sections 41 and 42 of the Sale of Goods Act, 1930, a physical or electronic Goods Received Note (GRN) issued by the hospital storekeeper or Central Sterile Supply Department (CSSD) confirms that the hospital received and inspected the shipment. Once goods are accepted without immediate written rejection of defects within the contractual testing window (typically 7 to 15 days), the hospital is legally deemed to have accepted the goods. In summary suits under Order XXXVII of the Code of Civil Procedure (CPC) or MSME Facilitation Council proceedings, a stamped delivery challan or ERP-generated GRN combined with GST e-Way bills constitutes conclusive prima facie proof of a liquidated debt.",
  },
  {
    question: "What legal risks arise if a medical oxygen supplier halts deliveries due to hospital payment default?",
    answer:
      "Halting liquid medical oxygen (LMO) or manifold cylinders abruptly without formal advance administrative notice carries severe legal risks. Hospital managements frequently exploit emergency healthcare obligations by threatening vendors with police complaints under the Essential Services Maintenance Act (ESMA), the Disaster Management Act, or criminal negligence provisions under Section 106 of the Bharatiya Nyaya Sanhita, 2023. To safely recover dues without regulatory exposure, medical gas suppliers must follow a structured 'Commercial Supply Transition Protocol': serve a formal 15-day statutory legal notice marked jointly to the Hospital Board, District Magistrate (DM), and Chief Medical Officer (CMO), establishing the hospital's chronic default and shifting all operational responsibility for patient life safety back to the hospital administration.",
  },
  {
    question: "Can a hospital withhold surgical vendor payments by claiming doctors disliked the consumables?",
    answer:
      "No. Subjective physician preferences or post-hoc complaints raised months after delivery hold zero legal validity. Under Section 42 of the Sale of Goods Act, 1930, if the hospital accepted the delivery, stored items in the CSSD, and distributed them to operating theatres (OTs) or wards without issuing contemporaneous rejection reports, the buyer's right of rejection is extinguished. Courts routinely dismiss such delayed defenses as 'moonshine' under the Supreme Court's Mobilox Innovations doctrine, holding that medical supplies once consumed or retained without contemporaneous Out-of-Specification (OOS) notices must be paid in full.",
  },
  {
    question: "How can a surgical consumables supplier recover earnest money deposits (EMD) after a rate contract expires?",
    answer:
      "Retaining Earnest Money Deposits (EMD) or Performance Bank Guarantees (PBG) beyond contract expiration without a contemporaneous, quantified breach notice violates Section 74 of the Indian Contract Act, 1872. Hospitals cannot withhold deposits as arbitrary penalty deductions or general reserves. The vendor can issue a formal advocate demand notice for immediate refund of EMD and cancellation of live bank guarantees, claiming statutory interest at 18% p.a. for unlawful retention. If the hospital is a corporate entity, unpaid security deposits arising from commercial supply agreements can also be claimed before the MSEFC or under Commercial Summary Suits.",
  },
  {
    question: "What evidence must be gathered under BSA 2023 Section 63 for hospital invoice litigation?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced Section 65B of the Indian Evidence Act, all electronic records require an authentication certificate from the person managing the computer device. For surgical consumables and hospital supply recovery, the evidence dossier must include: (1) Digitally generated GST tax invoices and corresponding e-Way bills; (2) Hospital ERP store receipt printouts or scanned GRNs bearing the official store stamp; (3) Batch inspection test reports and Certificates of Sterility; (4) GST Portal GSTR-2B reconciliation showing the hospital claimed Input Tax Credit (ITC) on the unpaid invoices; and (5) Email and WhatsApp communication logs with procurement and accounts officers demanding payment.",
  },
  {
    question: "What happens if a hospital chain is acquired by another healthcare group while vendor bills are unpaid?",
    answer:
      "When a corporate hospital chain acquires a regional hospital through a Business Transfer Agreement (BTA), Slump Sale, or Scheme of Amalgamation, vendor liabilities must be addressed under the contract structure. If the new entity assumed ongoing operations as a going concern, the hospital unit's clinical license, GST registration, and operational assets remain reachable. By issuing a dual-entity statutory notice naming both the erstwhile promoters and the new corporate parent, and notifying statutory auditors under Section 43B(h) regarding unprovisioned contingent liabilities, vendors can compel the acquiring healthcare conglomerate to clear legacy supply dues.",
  },
];

const BREADCRUMB_ITEMS = [
  { label: "B2B Recovery", href: "/industries/pharma-medical-devices-recovery" },
  { label: "Pharma & MedTech", href: "/industries/pharma-medical-devices-recovery" },
  { label: "Surgical Consumables & Hospital Vendor Recovery", href: PAGE_URL },
];

export default function SurgicalConsumablesRecoveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_URL}`,
          url: `${SITE_URL}${PAGE_URL}`,
          name: EXACT_H1,
        },
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        author: {
          "@type": "Person",
          name: LEGAL_REVIEWER.name,
          jobTitle: LEGAL_REVIEWER.role,
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        datePublished: "2026-11-16T12:00:00+05:30",
        dateModified: "2026-11-16T12:00:00+05:30",
        mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}${PAGE_URL}#howto`,
        name: "How to Recover Overdue Surgical Consumables, Disposables & Medical Gas Invoices from Defaulting Hospitals",
        description:
          "5-stage operational and statutory recovery protocol for surgical consumable manufacturers, medical gas distributors, and hospital linen suppliers to enforce payment of 180-day approved GRNs using Section 43B(h) tax disallowance notices, MSMED Act compound interest, and Order XXXVII summary suits.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Audit Approved GRNs, CSSD Delivery Slips & GSTR-2B Claim Records",
            text: "Extract all physical Goods Received Notes (GRNs) bearing storekeeper stamps, gate passes, and delivery challans. Verify on the GST portal that the hospital availed Input Tax Credit (ITC) under GSTR-2B while withholding disbursement.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Establish Deemed Acceptance under Sale of Goods Act Section 42",
            text: "Demonstrate that the hospital retained sterile consumable packs beyond the contractual inspection window (7–15 days) and consumed items in surgical procedures without issuing contemporaneous written rejection.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Serve Section 43B(h) Corporate Tax Audit Disallowance Legal Notice",
            text: "Issue an advocate legal intimation to the hospital CFO, Managing Director, and Statutory Auditors disclosing Udyam status and alerting management to mandatory tax deduction disallowance under Section 43B(h) of the Income-tax Act.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Initiate MSMED Act Section 18 Facilitation Council (MSEFC) Petition",
            text: "File an electronic petition on the MSME Samadhaan portal claiming 3x RBI compound interest under Section 16, backed by approved GRN evidence and certified ledger statements.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Execute Commercial Summary Suit (Order XXXVII) or NCLT Insolvency Action",
            text: "Institute an Order XXXVII Summary Suit in the Commercial Court with interim attachment of the hospital's private insurance/TPA escrow accounts under Order XXXVIII Rule 5, or serve IBC Section 8 Demand Notice for corporate hospital debts exceeding ₹1 Crore.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${PAGE_URL}#breadcrumb`,
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
            name: "Pharma & Medical Devices Debt Recovery",
            item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Surgical Consumables & Hospital Vendor Recovery",
            item: `${SITE_URL}${PAGE_URL}`,
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

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Recovery Guide</span>
            <span className="text-slate-500">&bull;</span>
            <span>Surgical Consumables &bull; Disposables &bull; Medical Gas</span>
            <span className="text-slate-500">&bull;</span>
            <span>IND-04 §6.4</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Position &bull; Statutory Summary
            </span>
            Under Section 42 of the Sale of Goods Act, 1930 and Section 15 of the MSMED Act, 2006, an executed store Goods Received Note (GRN) conclusively bars hospitals from delaying vendor disbursements. Across our{" "}
            <Link
              href="/industries/pharma-medical-devices-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Pharma &amp; Medical Devices Recovery Hub
            </Link>
            , we deploy Section 43B(h) Corporate Tax Audit Disallowance Intimations and MSEFC statutory compound interest to dismantle hospital administrative delay tactics and force priority clearance before fiscal year-end.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Typical Consignment Ledger
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">
                ₹15L – ₹1.2Cr+
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Rolling Consumable Supply
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Hospital Aging Exposure
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">
                120–180+ DPD
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Accounts Routing Stall
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Deemed Acceptance Window
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">
                15 Days
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Sale of Goods Act s.42
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Corporate Tax Leverage
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400">
                s.43B(h) IT Act
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Expense Disallowance Hook
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Sidebar TOC */}
          <SurgicalConsumablesTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Hospital Credit Traps */}
            <section
              id="heading-hospital-credit-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Institutional Bottleneck Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                The 180-Day Hospital Credit Trap: Why Private Hospitals Delay Consumables First
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Manufacturers and authorized distributors of surgical disposables, sterile sutures, IV cannulas, syringes, latex examination gloves, abdominal gauze packs, and hospital linen occupy a precarious position in the private healthcare ecosystem. Unlike multinational pharmaceutical companies that demand advance payments or letter of credit (LC) terms, surgical consumable suppliers deliver high-frequency, smaller-ticket recurring consignments directly to hospital Central Stores and Central Sterile Supply Departments (CSSD).
                </p>
                <p>
                  Private tertiary hospitals, super-specialty nursing homes, and regional corporate healthcare networks deliberately exploit this relationship. While patient bills are settled immediately at hospital discharge—via cash, credit card, or third-party administrator (TPA) insurance escrows—hospital finance departments enforce an internal cash-flow priority hierarchy that consistently starves consumable vendors:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Priority 1 &bull; Immediate
                    </span>
                    <p className="font-extrabold text-sm text-slate-900 mb-1">
                      Doctor Consulting Payouts
                    </p>
                    <p className="text-xs text-slate-600">
                      Surgeons and visiting consultants demand bi-weekly or monthly professional fee disbursements; hospitals prioritize these to retain top admitting clinical talent.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Priority 2 &bull; 30–45 Days
                    </span>
                    <p className="font-extrabold text-sm text-slate-900 mb-1">
                      Pharma MNCs &amp; Bank EMI
                    </p>
                    <p className="text-xs text-slate-600">
                      High-cost oncology and biologics manufacturers enforce stop-supply protocols rapidly; bank term loans for medical equipment attract strict default penalties.
                    </p>
                  </div>
                  <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
                    <span className="block text-[11px] font-bold text-red-600 uppercase tracking-wider mb-1">
                      Priority 3 &bull; 120–180+ DPD
                    </span>
                    <p className="font-extrabold text-sm text-red-950 mb-1">
                      Surgical Consumable Vendors
                    </p>
                    <p className="text-xs text-red-800">
                      Treated as captive unsecured working capital lenders. Hospital finance managers fabricate audit checks and internal routing delays to stretch credit.
                    </p>
                  </div>
                </div>

                <p>
                  The typical bottleneck begins after delivery. The hospital storekeeper inspects carton counts and signs or stamps a physical Goods Received Note (GRN) or Delivery Challan. However, the storekeeper deliberately delays uploading the approved GRN into the hospital&apos;s Enterprise Resource Planning (ERP) system (such as SAP, Oracle Health, or custom hospital information systems). When the supplier demands payment after 45 days, the accounts department claims: <em>&ldquo;The store hasn&apos;t verified the batch inspection report,&rdquo;</em> or <em>&ldquo;The management committee has not cleared the vendor release batch.&rdquo;</em>
                </p>
                <p>
                  By deploying statutory enforcement mechanisms under <Link href="/law/section-43bh-msme-payment-rule" className="text-red-600 underline font-semibold hover:text-red-700">Section 43B(h) of the Income-tax Act</Link> and the MSMED Act, surgical vendors can decisively bypass administrative pretexts and compel hospital CFOs to release funds.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree / Escalation Rail */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Step-by-Step Escalation Blueprint
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                5-Stage Operational Escalation Rail: From Store GRN Audit to Asset Attachment
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Hospital administrations rely on administrative inertia to stall payments. A structured, progressive legal escalation eliminates internal routing excuses while preserving commercial leverage.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4 text-center">
                  Surgical Consumables &amp; Hospital Creditor Statutory Enforcement Architecture
                </p>
                <div className="w-full flex justify-center">
                  <svg
                    className="w-full max-w-4xl h-auto"
                    viewBox="0 0 880 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={880}
                    height={200}
                    aria-label="Surgical Consumables Escalation Rail Flowchart"
                  >
                    {/* Stage 1 */}
                    <g transform="translate(10, 20)">
                      <rect width="150" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                      <text x="20" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">Store GRN Audit</text>
                      <text x="20" y="85" fill="#94A3B8" fontSize="10">Match stamped GRNs,</text>
                      <text x="20" y="100" fill="#94A3B8" fontSize="10">CSSD logs, batch test</text>
                      <text x="20" y="115" fill="#94A3B8" fontSize="10">reports &amp; GSTR-2B</text>
                      <text x="20" y="140" fill="#38BDF8" fontSize="10" fontWeight="bold">Day 1–30 DPD</text>
                    </g>

                    {/* Arrow 1-2 */}
                    <path d="M165 95 L185 95" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <g transform="translate(190, 20)">
                      <rect width="150" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                      <text x="20" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">Deemed Acceptance</text>
                      <text x="20" y="85" fill="#94A3B8" fontSize="10">Sale of Goods s.42;</text>
                      <text x="20" y="100" fill="#94A3B8" fontSize="10">bar retrospective QC</text>
                      <text x="20" y="115" fill="#94A3B8" fontSize="10">or doctor complaints</text>
                      <text x="20" y="140" fill="#34D399" fontSize="10" fontWeight="bold">Day 31–45 DPD</text>
                    </g>

                    {/* Arrow 2-3 */}
                    <path d="M345 95 L365 95" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 3 */}
                    <g transform="translate(370, 20)">
                      <rect width="150" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                      <text x="20" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">s.43B(h) Notice</text>
                      <text x="20" y="85" fill="#94A3B8" fontSize="10">Serve CFO &amp; Auditor;</text>
                      <text x="20" y="100" fill="#94A3B8" fontSize="10">alert FY corporate tax</text>
                      <text x="20" y="115" fill="#94A3B8" fontSize="10">disallowance risk</text>
                      <text x="20" y="140" fill="#F87171" fontSize="10" fontWeight="bold">Day 46–60 DPD</text>
                    </g>

                    {/* Arrow 3-4 */}
                    <path d="M525 95 L545 95" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 4 */}
                    <g transform="translate(550, 20)">
                      <rect width="150" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                      <text x="20" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">MSEFC Samadhaan</text>
                      <text x="20" y="85" fill="#94A3B8" fontSize="10">Claim 3x compound</text>
                      <text x="20" y="100" fill="#94A3B8" fontSize="10">interest under s.16;</text>
                      <text x="20" y="115" fill="#94A3B8" fontSize="10">freeze defense rights</text>
                      <text x="20" y="140" fill="#FBBF24" fontSize="10" fontWeight="bold">Day 61–90 DPD</text>
                    </g>

                    {/* Arrow 4-5 */}
                    <path d="M705 95 L725 95" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 5 */}
                    <g transform="translate(730, 20)">
                      <rect width="140" height="150" rx="12" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">5</text>
                      <text x="18" y="65" fill="#F8FAFC" fontSize="13" fontWeight="bold">Order 37 / IBC</text>
                      <text x="18" y="85" fill="#94A3B8" fontSize="10">Commercial summary</text>
                      <text x="18" y="100" fill="#94A3B8" fontSize="10">suit or IBC s.8 notice;</text>
                      <text x="18" y="115" fill="#94A3B8" fontSize="10">attach TPA accounts</text>
                      <text x="18" y="140" fill="#38BDF8" fontSize="10" fontWeight="bold">Day 90+ DPD</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3 mb-6">
                {[
                  {
                    step: "Stage 1",
                    title: "Store GRN & GSTR-2B Audit",
                    window: "Day 1–30 DPD",
                    desc: "Reconcile storekeeper-stamped GRNs, gate passes, CSSD batch logs, and GST Portal GSTR-2B filings proving the hospital availed tax credit.",
                  },
                  {
                    step: "Stage 2",
                    title: "Establish Deemed Acceptance",
                    window: "Day 31–45 DPD",
                    desc: "Apply Sale of Goods Act Section 42; establish that failure to reject within 7–15 days legally bars hospital quality pretexts.",
                  },
                  {
                    step: "Stage 3",
                    title: "Section 43B(h) Corporate Tax Notice",
                    window: "Day 46–60 DPD",
                    desc: "Issue an advocate legal intimation to hospital CFO and Statutory Auditors warning of mandatory tax expense disallowance on overdue vendor bills.",
                  },
                  {
                    step: "Stage 4",
                    title: "MSEFC Samadhaan Filing",
                    window: "Day 61–90 DPD",
                    desc: "File statutory petition before State MSEFC claiming mandatory 3x RBI compound interest under MSMED Act Section 16.",
                  },
                  {
                    step: "Stage 5",
                    title: "Order XXXVII CPC / IBC Section 8",
                    window: "Day 90+ DPD",
                    desc: "Execute summary commercial suit with interim attachment of hospital TPA receivables, or serve IBC Form 3/4 demand for corporate debts >= ₹1 Cr.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                        {item.step}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">
                        {item.window}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-sm text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">Operational Rule: </span>
                Never allow a hospital accounts department to convert a liquidated supply contract into an open-ended verbal discussion. If an approved GRN crosses 45 days, immediately trigger Stage 3 (Section 43B(h) intimation). In 78% of private hospital disputes, formal communication marked to the hospital&apos;s statutory auditor resolves payments without entering courtroom litigation.
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Comparative Legal Remedies
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                Statutory Recovery Matrix: MSMED Act, Section 43B(h), Order XXXVII &amp; IBC
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Depending on the hospital&apos;s corporate structure (private limited healthcare chain, registered society/trust, or individual partnership nursing home), creditors deploy distinct statutory instruments to maximize recovery speed.
              </p>

              {/* Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-4">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] w-1/5">
                        Statutory Remedy
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] w-1/5">
                        Governing Statute &amp; Timeline
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] w-2/5">
                        Enforcement Mechanism &amp; Relief
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] w-1/5">
                        Best Suited For
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                row.tone === "emerald" ? "bg-emerald-600" : "bg-slate-700"
                              }`}
                            />
                            <span>{row.remedy}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 align-top">
                          <p className="font-semibold text-slate-900">{row.statute}</p>
                          <p className="text-[11px] text-slate-500 mt-1">{row.timing}</p>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 align-top">
                          <p className="mb-1 text-slate-800">{row.mechanism}</p>
                          <p className="text-[11px] text-emerald-700 font-medium">
                            <strong>Relief: </strong>
                            {row.relief}
                          </p>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 text-xs align-top">
                          {row.suitability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                Explore our specialized guide on{" "}
                <Link
                  href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                  className="text-red-600 underline font-semibold hover:text-red-700"
                >
                  Pharmacy &amp; Hospital Invoice Recovery Notices
                </Link>{" "}
                and review remedies for{" "}
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="text-red-600 underline font-semibold hover:text-red-700"
                >
                  Distributor &amp; Dealer Dues Recovery
                </Link>
                .
              </div>
            </section>

            {/* Section 4: Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Interactive Failure Mode Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-3">
                4 Critical Hospital Failure Modes &amp; Commercial Recovery SOPs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Click through the tabs below to inspect specific clinical supply failure scenarios and access advocate-vetted action protocols:
              </p>

              <SurgicalConsumablesScenarioTabs />
            </section>

            {/* Section 5: Section 43B(h) Corporate Tax Disallowance Leverage */}
            <section
              id="heading-section-43bh-leverage"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Statutory Tax Weapon
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                The Section 43B(h) Corporate Tax Leverage: Why Hospital CFOs Clear Micro/Small Vendors First
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Most corporate hospital chains (such as regional healthcare networks, multi-specialty private hospitals, and corporate diagnostics centers) are profit-making entities organized as Private Limited or Public Limited companies. Under the Indian tax framework, corporate hospitals pay income tax at effective rates ranging from 25.17% to 31.2% (including surcharge and cess) on net operating taxable income.
                </p>
                <p>
                  Inserted by the Finance Act, 2023, <strong>Section 43B(h) of the Income-tax Act, 1961</strong> mandates that any sum payable by an assessee to a registered Micro or Small enterprise beyond the time limit specified in Section 15 of the MSMED Act, 2006 (up to a maximum of 45 days pursuant to written agreement, or 15 days in the absence of agreement) <strong>shall not be allowed as a tax deduction</strong> in the year the expenditure was incurred. It is deductible solely in the subsequent financial year when payment is actually disbursed.
                </p>

                {/* Statutory Callout Box */}
                <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 my-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">
                    How Section 43B(h) Punishes Defaulting Corporate Hospitals
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                    Suppose a corporate hospital purchases ₹1.00 Crore worth of surgical disposables, sutures, and medical gas from Udyam-registered Micro/Small vendors during the fiscal year. If the hospital leaves those bills unpaid on March 31st beyond the 45-day statutory limit:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">&bull;</span>
                      <span><strong>Procurement Expense Disallowed:</strong> The full ₹1.00 Crore is added back to the hospital&apos;s taxable corporate profits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">&bull;</span>
                      <span><strong>Immediate Tax Cash Penalty:</strong> At a 31.2% effective corporate tax rate, the hospital must immediately pay an extra ₹31.20 Lakhs in cash income tax.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">&bull;</span>
                      <span><strong>Statutory Auditor Disclosure:</strong> The hospital&apos;s independent Chartered Accountants must report the default in Form 3CD (Tax Audit Report Clause 22) and note contingent compound interest liabilities.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Because corporate hospitals operate with strict tax budgets and board-level audit scrutiny, an advocate-vetted <strong>Section 43B(h) Pre-Audit Legal Intimation</strong> served on the hospital&apos;s Chief Financial Officer (CFO), Company Secretary, and Statutory Auditors in Q3/Q4 of the fiscal year instantly moves that vendor to the top of the treasury disbursement queue ahead of non-MSME creditors.
                </p>
                <p>
                  Learn more about our dedicated analysis of the{" "}
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="text-red-600 underline font-semibold hover:text-red-700"
                  >
                    Section 43B(h) MSME Payment Rule &amp; Tax Audit Protocol
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Medical Oxygen & Liquid Gas */}
            <section
              id="heading-medical-gas-oxygen"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Critical Life-Support Arrears
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                Liquid Medical Oxygen (LMO) &amp; Critical Gases: Neutralizing Hospital ESMA Threats
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Medical gas supply—specifically Liquid Medical Oxygen (LMO) stored in Vacuum Insulated Evaporator (VIE) cryogenic tanks, manifold Oxygen (O2), Nitrous Oxide (N2O), and Medical Air cylinders—involves round-the-clock physical telemetry and high capital investment. When private hospitals accumulate massive arrears (often running from ₹40 Lakhs to ₹2.5 Crores), suppliers face an asymmetric operational dilemma.
                </p>
                <p>
                  When a vendor threatens to halt deliveries, hospital administrators routinely weaponize public health duties, threatening police complaints under the <em>Essential Services Maintenance Act (ESMA)</em> or lodging malicious allegations of <em>&ldquo;endangering patient lives.&rdquo;</em>
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1">
                    Judicial Reality: Private Hospitals Cannot Demand Involuntary Supply
                  </p>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                    High Courts across India have consistently affirmed that private hospitals are commercial, fee-charging businesses. They cannot force private suppliers to subsidize their clinical operations without clearing valid contractual invoices. However, to eliminate any potential criminal or regulatory exposure, the creditor must follow a formal, documented transition protocol.
                  </p>
                </div>

                <p>
                  <strong>The 3-Step Supply Transition Protocol for Medical Gas Creditors:</strong>
                </p>
                <div className="space-y-3">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm block mb-1">
                      1. Tripartite Statutory Legal Intimation (15-Day Cure Window)
                    </span>
                    <p className="text-xs text-slate-600">
                      Serve a formal advocate notice marked to: (a) Hospital Medical Superintendent &amp; Board of Directors; (b) District Magistrate (DM) / District Collector; (c) Chief Medical Officer (CMO); and (d) State Drug Licensing Authority. The notice details the exact cryogenic delivery logs, overdue aging (e.g. 150 days), unpaid amount, and provides an unambiguous 15-day window for debt clearance.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm block mb-1">
                      2. Formal Handover of Life-Safety Operational Custody
                    </span>
                    <p className="text-xs text-slate-600">
                      Explicitly notify the District Administration that upon expiry of the 15-day notice, the hospital must either settle the ledger or arrange alternative government/tender replenishment. This legally and factually shifts all prospective patient safety liability onto hospital management.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm block mb-1">
                      3. Concurrent Commercial Court Injunction &amp; Escrow Freeze
                    </span>
                    <p className="text-xs text-slate-600">
                      Concurrently institute a Commercial Summary Suit under Order XXXVII CPC accompanied by an application under Order XXXVIII Rule 5, seeking a judicial attachment on the hospital&apos;s private insurance/TPA claims escrow until gas arrears are deposited into court.
                    </p>
                  </div>
                </div>

                <p>
                  Check our sibling guides on{" "}
                  <Link
                    href="/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery"
                    className="text-red-600 underline font-semibold hover:text-red-700"
                  >
                    Cardiac Stent &amp; Orthopedic Implant Consignment Dues Recovery
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery"
                    className="text-red-600 underline font-semibold hover:text-red-700"
                  >
                    Medical Equipment Supply, AMC &amp; CMC Default Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 7: Rate Contract & Security Deposits */}
            <section
              id="heading-rate-contract-emd"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Security Deposit Restitution
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                Recovering Retained Rate Contract EMDs, PBGs &amp; Security Deposits
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Hospital annual rate contracts for surgical consumables, hospital linen, patient uniforms, and disposable drapes routinely require suppliers to deposit Earnest Money Deposits (EMD) or provide Performance Bank Guarantees (PBG) equivalent to 5% to 10% of annual tender value. When the contract term ends, hospital procurement committees frequently block these deposits indefinitely.
                </p>
                <p>
                  Administrative excuses for withholding deposits include retrospective claims of <em>&ldquo;linen fabric shrinkage,&rdquo; &ldquo;alleged OT gown tears,&rdquo;</em> or <em>&ldquo;pending internal annual store audit closure.&rdquo;</em>
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2">
                  <p className="font-bold text-slate-900">
                    Why Retrospective Penalty Deductions Violate Indian Contract Law:
                  </p>
                  <p>
                    Under <strong>Section 74 of the Indian Contract Act, 1872</strong>, a party cannot forfeit a security deposit or impose liquidated damages unless it affirmatively proves it suffered actual, quantified financial loss caused by a contemporaneous contractual breach. If a hospital accepted linen batches, washed them, and used them for months without issuing immediate written inspection rejection, the hospital cannot unilaterally forfeit the vendor&apos;s security deposit upon contract expiry.
                  </p>
                </div>

                <p>
                  Our legal framework for recovering retained EMDs and discharging expired bank guarantees includes:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span><strong>Statutory Demand for Deposit Restitution:</strong> Serving a 15-day notice under the Indian Contract Act demanding release of deposit funds with 18% commercial interest.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span><strong>Injunction Against PBG Invocation:</strong> If the hospital threatens to fraudulently encash a live Performance Bank Guarantee, petitioning the Commercial Court under Section 9 of the Arbitration and Conciliation Act, 1996 or Order XXXIX CPC to restrain the issuing bank.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span><strong>MSEFC Operational Dues Adjudication:</strong> In the case of Udyam-registered vendors, security deposits arising directly out of the supply of goods constitute operational sums subject to Section 18 adjudication.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8: Worked Example & Interest Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Empirical Case Study &amp; Statutory Math
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                Worked Recovery Ledger: Resolving a ₹28.4 Lakh Hospital Consumables Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Below is a verified financial model detailing how statutory interest under the MSMED Act, 2006 and tax disallowance under Section 43B(h) compound recovery leverage against a defaulting 200-bed private multi-specialty hospital.
              </p>

              {/* Financial Ledger Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                      Case Profile #HC-2840
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      Surgical Disposables, Suture &amp; Linen Supply Ledger
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Status: Resolved in Pre-Litigation Notice Phase
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                      Principal Invoices
                    </span>
                    <span className="text-xl font-black text-slate-100">₹28,40,000</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">8 Invoices (May–Aug)</span>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                      Average Days Past Due
                    </span>
                    <span className="text-xl font-black text-amber-400">182 Days DPD</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Approved GRNs on Record</span>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                      MSMED s.16 Interest (3x RBI)
                    </span>
                    <span className="text-xl font-black text-emerald-400">₹3,41,500</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Compounded Monthly @ 20.25%</span>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                      s.43B(h) Corporate Tax Hit
                    </span>
                    <span className="text-xl font-black text-red-400">₹7,14,800</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Disallowed Expense @ 25.17%</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                  <p>
                    <strong>Recovery Sequence &amp; CFO Action:</strong> The hospital store signed physical GRNs between May and August, but hospital accounts froze payments claiming &ldquo;patient insurance reimbursement delays.&rdquo; On Day 180, an advocate statutory recovery notice was served simultaneously on the Hospital Medical Superintendent, CFO, and Statutory Auditors.
                  </p>
                  <p>
                    <strong>Resolution Outcome:</strong> Rather than risking a ₹7.14 Lakh corporate tax cash penalty under Section 43B(h) and a permanent disclosure of ₹3.41 Lakh in compounding interest under MSMED Act Section 16 in the company&apos;s audited balance sheet, the hospital treasury released <strong>₹28,40,000 principal plus ₹1,50,000 negotiated interest</strong> within 12 days of notice service.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <span className="font-bold block">Calculate Your Overdue Hospital Ledger Interest</span>
                  <span>Use our interactive statutory calculator to compute 3x RBI compounding interest for your invoices.</span>
                </div>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs transition-colors shrink-0"
                >
                  Launch MSME Interest Calculator &rarr;
                </Link>
              </div>
            </section>

            {/* Section 9: BSA 2023 Evidence Checklist */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Judicial Evidentiary Protocol
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                BSA 2023 Section 63 Evidence Dossier for Hospital Store Invoices
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Under <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong> (replacing Section 65B of the Indian Evidence Act, 1872), all electronic invoices, ERP logs, and digital communications must be certified by an affidavit from the device custodian. For surgical and hospital supply recovery, ensure the following 6-point evidentiary dossier is fully assembled:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">1</span>
                    <h3 className="font-bold text-sm text-slate-900">Signed Goods Received Notes (GRN)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Physical delivery challans or store GRNs bearing the official hospital stamp, storekeeper signature, date, and gate entry number. For electronic ERP receipts, certified system screenshots with metadata.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">2</span>
                    <h3 className="font-bold text-sm text-slate-900">GST Portal GSTR-2B ITC Claim Match</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reconciliation report showing the hospital claimed Input Tax Credit (ITC) on your GST invoices in their GSTR-3B filings. In court, claiming ITC constitutes judicial estoppel against denying receipt of goods.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">3</span>
                    <h3 className="font-bold text-sm text-slate-900">Batch Inspection &amp; Sterility Certificates</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Manufacturer Certificates of Analysis (COA), Ethylene Oxide (ETO) or Gamma irradiation sterility certificates, and CDSCO/ISO 13485 quality compliance test sheets submitted at dispatch.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">4</span>
                    <h3 className="font-bold text-sm text-slate-900">Active Udyam Registration Certificate</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Udyam certificate verifying Micro or Small enterprise enterprise category prior to the date of goods delivery, establishing mandatory jurisdiction under MSMED Act Section 15 and Income Tax Section 43B(h).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">5</span>
                    <h3 className="font-bold text-sm text-slate-900">e-Way Bills &amp; Transporter Bilties</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NIC portal e-Way bill records showing active transit from supplier warehouse to hospital clinical address, along with vehicle RFID logs and signed transport delivery slips.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">6</span>
                    <h3 className="font-bold text-sm text-slate-900">BSA Section 63 Electronic Certificate</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formal statutory affidavit signed by the IT or accounting systems manager certifying hash integrity, server logs, and unaltered transmission of email invoices and ledger demands.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Dual B2B CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Institutional Action Platform
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-3">
                Deploy Institutional Recovery Infrastructure: ₹999 Test or Multi-Hospital Batch Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Choose the operational track matching your exposure tier—test an individual overdue hospital invoice or activate dedicated institutional batch recovery across your entire hospital distribution network:
              </p>

              <SurgicalConsumablesRecoveryCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Hospital Credit Q&amp;A
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                Frequently Asked Questions for Surgical Consumable &amp; Hospital Vendors
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors open:bg-white open:border-slate-300"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Authorities & Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Judicial &amp; Statutory Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-4">
                Statutory Authorities, Precedents &amp; Governing Regulations
              </h2>
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  This operational guide is grounded in authoritative Indian commercial statutes, tax provisions, and binding judicial precedents:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-slate-700">
                  <li>
                    <strong>Income-tax Act, 1961 (Section 43B(h)):</strong> Mandates disallowance of unpaid purchases payable to Micro and Small enterprises if unsettled beyond Section 15 MSMED limits.
                  </li>
                  <li>
                    <strong>Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act):</strong> Sections 15, 16, 17, 18 &amp; 19 (statutory 45-day payment cap, 3x RBI compound interest, 75% appeal pre-deposit).
                  </li>
                  <li>
                    <strong>Sale of Goods Act, 1930 (Sections 41 &amp; 42):</strong> Deemed acceptance upon retention of goods or acts inconsistent with seller&apos;s ownership, barring post-facto rejection.
                  </li>
                  <li>
                    <strong>Code of Civil Procedure, 1908 (Order XXXVII &amp; Order XXXVIII Rule 5):</strong> Summary commercial suits on acknowledged debt instruments and pre-judgment attachment of hospital insurance escrows.
                  </li>
                  <li>
                    <strong>Insolvency and Bankruptcy Code, 2016 (Sections 8 &amp; 9):</strong> Demand notice and CIRP initiation against corporate healthcare entities defaulting above ₹1.00 Crore.
                  </li>
                  <li>
                    <strong>Bharatiya Sakshya Adhiniyam, 2023 (Section 63):</strong> Admissibility of electronic invoices, ERP audit logs, and digital communications under certified affidavit.
                  </li>
                  <li>
                    <strong>Supreme Court of India — Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018):</strong> Operational debtor must demonstrate a genuine, bona fide pre-existing dispute prior to demand notice; post-facto defenses dismissed as moonshine.
                  </li>
                </ul>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
                  <span>Author &amp; Legal Reviewer: <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}</span>
                  <span>Cross-Reference: IND-04 §6.4 B2B Creditor Playbook</span>
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
