import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PcdPharmaTableOfContents from "./PcdPharmaTableOfContents";
import PcdPharmaScenarioTabs from "./PcdPharmaScenarioTabs";
import PcdPharmaRecoveryCTA from "./PcdPharmaRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/pcd-pharma-franchise-monopoly-distributor-default-recovery";
const EXACT_H1 =
  "PCD Pharma Franchise Recovery Playbook: Recovering District Distributor Credit Ledgers & Revoking Territory Monopoly";
const META_TITLE = "PCD Pharma Franchise Default & Monopoly Revocation Notice";
const META_DESCRIPTION =
  "For Chandigarh, Panchkula, Ambala & Gujarat PCD pharma companies: revoke district monopoly rights cleanly and recover overdue stock & security cheques.";

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
        alt: formatAltText("PCD Pharma Franchise Default and District Monopoly Revocation Playbook"),
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
    remedy: "Home-Bank Payee Cheque Bounce Prosecution",
    statute: "Negotiable Instruments Act, 1881 (Section 138 & Section 142(2)(a))",
    timing: "Within 30 days of bank return memo; 15-day cure window; 30-day filing clock",
    mechanism: "Statutory Advocate Legal Demand Notice followed by criminal complaint before CJM/MM where franchisor's bank branch is located",
    relief: "Reverses geographic leverage: forces outstation franchisee to travel to Chandigarh/Panchkula/Ahmedabad for bail; 2-year imprisonment + 2x cheque penalty",
    suitability: "Security cheques, current PDCs, or post-dated cheques issued by franchisee dishonoured for 'Funds Insufficient' or 'Stop Payment'",
    tone: "emerald",
  },
  {
    remedy: "Immediate Territory Monopoly Revocation & De-Listing",
    statute: "Indian Contract Act, 1872 (Section 39, Section 73 & Section 75)",
    timing: "Upon expiry of 7-day cure notice for non-payment or failure to meet Minimum Order Quantities (MOQ)",
    mechanism: "Formal Notice of Repudiatory Breach and Immediate Revocation of Exclusive Distribution Territory, copied to regional chemist associations",
    relief: "Extinguishes franchisee's exclusive district marketing rights, releases territory for replacement stockist appointment, and defeats chemist boycott threats",
    suitability: "Franchisees squatting on district monopoly rights while withholding rolling credit payments on formulation batches",
    tone: "emerald",
  },
  {
    remedy: "Statutory MSME 45-Day Payment & Compound Penal Interest",
    statute: "MSMED Act, 2006 (Section 15, Section 16 & Section 18)",
    timing: "Upon expiry of 45 days from delivery/bilty receipt date",
    mechanism: "Statutory Advocate Demand Notice followed by MSEFC conciliation and statutory arbitration petition at franchisor's State Council",
    relief: "Mandatory compound interest at 3 times RBI Bank Rate with monthly rests; overrides conflicting distributor credit agreements",
    suitability: "Udyam-registered formulation marketers, PCD franchisors, and CDMO repackers supplying wholesale franchisees",
    tone: "slate",
  },
  {
    remedy: "Repossession of Promotional Inputs & Physician Samples",
    statute: "Bharatiya Nyaya Sanhita, 2023 (Section 316 & Section 318) + Contract Act s.148",
    timing: "Immediate upon contractual termination or unauthorized diversion of promotional collateral",
    mechanism: "Criminal complaint for Criminal Breach of Trust & Cheating before CJM, coupled with Drug Inspector notification under Drugs & Cosmetics Act",
    relief: "Police-assisted seizure of visual aids, product glossaries, MR bags, and doctor samples; regulatory freeze on franchisee retail drug license",
    suitability: "Defaulters detaining promotional materials worth ₹2L to ₹6L or attempting to illegally resell free physician samples",
    tone: "amber",
  },
  {
    remedy: "Fast-Track Commercial Recovery & Account Attachment",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII & Order XXXVIII Rule 5)",
    timing: "Upon expiry of 15-day statutory demand notice based on written invoices, transport bilties, and ledger balance",
    mechanism: "Commercial recovery plaint filed in Commercial Court under Commercial Courts Act, 2015 s.2(1)(c)(xviii)",
    relief: "Summary decree without protracted full-length trial unless franchisee deposits disputed money in court; pre-judgment attachment of distributor accounts",
    suitability: "Uncontested ledger debts supported by transport bilties, e-Way bills, and GST outward supply matching (GSTR-2B)",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "Do Chandigarh or Gujarat PCD pharma companies have to travel to remote district courts to sue defaulting franchisees?",
    answer:
      "No. Under Section 142(2)(a) of the Negotiable Instruments Act, 1881 (enacted under the Parliament 2015 amendment), territorial jurisdiction for criminal cheque bounce prosecution under Section 138 lies exclusively where the branch of the bank where the payee maintains the account is situated, provided the cheque is delivered for collection through that account. If your PCD pharma company maintains its collection account in Chandigarh, Panchkula, Ambala, or Ahmedabad, the Section 138 criminal complaint is filed directly before the Chief Judicial Magistrate (CJM) in your home city. The defaulting franchisee in Bihar, Uttar Pradesh, Odisha, or Assam must physically travel to your jurisdiction to seek bail, submit personal surety bonds, and attend trial.",
  },
  {
    question: "Can a PCD pharma company revoke district monopoly rights if the franchisee defaults on rolling credit?",
    answer:
      "Yes. Under Section 39 of the Indian Contract Act, 1872, when a party to a contract refuses to perform or disables themselves from performing their promise in its entirety (such as failing to maintain Minimum Order Quantities or clearing rolling 21-to-30-day stock invoices), the franchisor may put an end to the contract. By issuing a formal Notice of Repudiatory Breach, the franchisor legally revokes exclusive marketing rights, cancels territorial protection, and can immediately appoint a new distributor in the district. The defaulting distributor cannot obtain an injunction against new stockist appointments when they have breached the foundational credit terms.",
  },
  {
    question: "Can a franchisee defend a cheque bounce case by claiming the cheque was given only as an 'undated security cheque'?",
    answer:
      "No. The Supreme Court of India in landmark rulings including Sripati Singh v. State of Jharkhand (2021) and Sunil Todi v. State of Gujarat (2021) conclusively held that a cheque issued as 'security' matures into an enforceable legal instrument towards an existing debt as soon as goods are supplied and the buyer defaults. The moment formulation consignments are dispatched and accepted via transport bilties and e-Way bills, the debt crystallizes. The statutory presumption under Sections 118 and 139 of the NI Act operates against the drawer, rendering the 'mere security' defense legally untenable.",
  },
  {
    question: "What legal action can be taken if a terminated franchisee refuses to return MR bags, visual aids, and doctor samples?",
    answer:
      "Promotional materials—such as embossed Medical Representative (MR) bags, laminated visual aids, scientific product literature, and physician samples—are entrusted to the franchisee under bailment (Section 148 of the Indian Contract Act, 1872) for the specific purpose of product detailing. Retaining, destroying, or diverting these inputs constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS, legacy IPC Section 405/406) and Cheating under Section 318 BNS. Furthermore, selling or commercially circulating physician samples marked 'Physician Sample - Not to be Sold' violates Section 18(a) of the Drugs and Cosmetics Act, 1940, exposing the distributor to immediate cancellation of their wholesale drug license.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act compel PCD distributors to clear overdue pharma invoices within 45 days?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any expenditure payable to a registered Micro or Small Enterprise (MSE) is allowed as an income tax deduction only in the financial year in which payment is actually made, provided payment is made within 15 days (where no written agreement exists) or up to 45 days (under written agreement). If a wholesale distributor fails to pay an Udyam-registered PCD pharma company within 45 days, the entire unpaid purchase amount is disallowed and added back to the distributor's taxable profit, resulting in an immediate 25% to 35% tax hit plus mandatory penal interest.",
  },
  {
    question: "How do transport bilties (LRs) and e-Way bills serve as conclusive legal proof of drug delivery under BSA 2023 Section 63?",
    answer:
      "In inter-state PCD pharma distribution, physical deliveries are handled by common carriers (e.g., V-Trans, ARC, TCI Freight, Patel Roadways). Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, legacy Indian Evidence Act Section 65B), digital transport bilties (Lorry Receipts), GST e-Way bills indicating transporter vehicle registration, consignment tracking logs, and GST Portal GSTR-2B matching constitute admissible primary electronic evidence. When accompanied by an advocate BSA Section 63 compliance certificate, these records establish beyond doubt that the franchisee received physical custody of the drug formulations.",
  },
  {
    question: "What should a PCD company do if the local Chemist & Druggist Association threatens a boycott against new stockist appointments?",
    answer:
      "Any collective directive by a regional Chemist and Druggist Association (CDA) boycotting a pharmaceutical company, mandating unauthorized 'No Objection Certificates' (NOCs), or fixing distributor appointment quotas violates Section 3(3)(b) of the Competition Act, 2002. The Competition Commission of India (CCI) has repeatedly penalized chemist associations across Maharashtra, Kerala, and Uttar Pradesh for anti-competitive conduct. A formal legal notice issued to the association's office-bearers warning of immediate Section 19 CCI prosecution and personal civil damages under Section 73 of the Contract Act routinely dissolves orchestrated boycotted threats within 48 to 72 hours.",
  },
  {
    question: "What is the limitation period for recovering overdue PCD franchise ledgers in India?",
    answer:
      "Under Article 14 and Article 15 of the Limitation Act, 1963, the limitation period for recovering unpaid price for goods sold and delivered is three years from the date of delivery. However, the limitation period resets fresh upon: (1) Any part-payment credited into the franchisor's bank account (Section 19 Limitation Act); (2) Any written email, WhatsApp balance confirmation, or signed ledger reconciliation by the distributor (Section 18 Limitation Act); (3) Dishonour of a security cheque, which generates an independent 30-day criminal cause of action under Section 138 of the NI Act; or (4) Service of a formal pre-institution mediation notice under Section 12A of the Commercial Courts Act, 2015, which legally tolls the limitation clock.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Negotiable Instruments Act, 1881 (Section 138, Section 142(2)(a) Payee Jurisdiction & Section 143A)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Indian Contract Act, 1872 (Section 39 Repudiation, Section 73 Damages & Section 148 Bailment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Section 316 Criminal Breach of Trust & Section 318 Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Drugs and Cosmetics Act, 1940 (Section 18(a) & Rule 65 Distribution Regulations)",
    url: "https://cdsco.gov.in",
  },
  {
    title: "Competition Act, 2002 (Section 3 Anti-Competitive Agreements & Chemist Association Boycotts)",
    url: "https://www.cci.gov.in",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment)",
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
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "PCD Pharma Franchise Debt Recovery & Territory Monopoly Revocation",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How PCD Pharma Companies Recover Overdue Franchise Ledgers & Revoke Territory Monopoly Rights",
  description:
    "A 5-stage legal escalation protocol for PCD pharma companies in Chandigarh, Panchkula, Ambala, and Gujarat to revoke district monopoly rights, enforce NI Act s.142(2) home-bank jurisdiction, and recover overdue credit balances.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Consolidate Ledger, Bilties, e-Way Bills & Bank Return Memos",
      text: "Audit the franchisee account ledger. Match unpaid tax invoices with transporter Lorry Receipts (bilties), active GST e-Way bills, and bank dishonour return memos for deposited security cheques or PDCs.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve 7-Day Monopoly Revocation-cum-De-Listing Notice",
      text: "Dispatch an urgent formal demand under Sections 39 and 75 of the Indian Contract Act, 1872, putting the franchisee on notice that persistent credit default and MOQ shortfall immediately terminate exclusive territory distribution rights.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve 48-Hour Promotional Collateral & Physician Sample Demand",
      text: "For unreturned visual aids, scientific literature, MR bags, and doctor samples, dispatch a repossession notice under Section 148 of the Contract Act and Section 316 of the Bharatiya Nyaya Sanhita, 2023.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Dispatch 15-Day Advocate Statutory Section 138 Legal Demand Notice",
      text: "Serve a formal statutory notice via Registered Speed Post RPAD and email under Section 138 of the NI Act, establishing criminal cheque bounce liability with territorial jurisdiction at the franchisor's home bank branch under Section 142(2)(a).",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Initiate Dual Legal Enforcement via Home CJM & MSEFC Council",
      text: "File a Section 138 criminal complaint before the Chief Judicial Magistrate at HQ, while filing an MSME Samadhaan petition for 3x RBI Bank Rate compound interest and appointing a replacement district franchisee.",
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
      name: "PCD Pharma Franchise Recovery & Monopoly Revocation",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function PcdPharmaFranchiseRecoveryPage() {
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
            <span>IND-04 PCD Pharma Spoke &bull; District Distributor Defaults &amp; Territory Revocation</span>
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
            Under Section 142(2)(a) of the Negotiable Instruments Act, 1881, PCD pharma companies operating out of manufacturing and marketing clusters in Chandigarh, Panchkula, Ambala, and Gujarat possess exclusive territorial jurisdiction to prosecute out-of-state distributor cheque bounces before the Chief Judicial Magistrate at their own home bank branch—eliminating the need to travel to remote districts. For cross-vertical pharma procurement strategies, consult our{" "}
            <Link
              href="/industries/pharma-medical-devices-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Pharma, Medical Device &amp; Surgical Distributor Recovery Hub
            </Link>
            . Persistent franchisee credit defaults constitute anticipatory repudiatory breach under Section 39 of the Contract Act, 1872, enabling instantaneous revocation of district exclusive monopoly rights, appointment of replacement stockists, and recovery of bailed MR bags and physician samples under BNS Section 316.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Home Court Power
              </span>
              <p className="text-sm sm:text-base md:text-lg font-black text-emerald-400">
                NI Act s.142(2)
              </p>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">
                Sue at your home bank CJM
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Monopoly Revocation
              </span>
              <p className="text-sm sm:text-base md:text-lg font-black text-slate-100">
                Contract Act s.39
              </p>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">
                Instant de-listing &amp; re-allocation
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Sample &amp; Bag Bailment
              </span>
              <p className="text-sm sm:text-base md:text-lg font-black text-amber-400">
                BNS Section 316
              </p>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">
                Criminal Breach of Trust charge
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Statutory Penal Interest
              </span>
              <p className="text-sm sm:text-base md:text-lg font-black text-red-400">
                3x RBI Bank Rate
              </p>
              <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">
                MSMED Act Section 16
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Pharma, Medical Devices & Surgical Distributors",
              href: "/industries/pharma-medical-devices-recovery",
            },
            {
              label: "PCD Pharma Franchise Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Sticky Left Table of Contents */}
          <PcdPharmaTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Commercial Anatomy of the PCD Default
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                The PCD Franchise Credit Paradox: District Monopoly vs Remote Defaults
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  India&apos;s pharmaceutical distribution ecosystem hosts over 8,000 PCD (Propaganda Cum Distribution) franchise marketing companies concentrated in manufacturing and corporate clusters across Chandigarh, Panchkula, Mohali, Ambala, and Gujarat (Ahmedabad, Vadodara, Surat). The commercial PCD business model depends on granting exclusive district-level marketing monopolies to local stockists, distributors, and enterprising Medical Representatives (MRs) across Tier-2, Tier-3, and rural districts in Uttar Pradesh, Bihar, West Bengal, Odisha, Assam, Rajasthan, and Madhya Pradesh.
                </p>
                <p>
                  Under typical PCD franchise agreements, the franchisor provides proprietary brand rights, product catalogs spanning 100 to 500 formulation SKUs (tablets, dry syrups, injectables, ointments, protein supplements), promotional inputs (visual aids, MR detailing bags, physician catch covers, reminder pads, prescription gifts), and initial rolling credit terms ranging from 21 to 45 days. In return, the district franchisee promises strict adherence to monthly Minimum Order Quantities (MOQs), prompt invoice clearance, and territorial exclusivity.
                </p>
                <p>
                  However, when a franchisee accumulates an overdue credit ledger of ₹5 Lakh to ₹45 Lakh, a severe operational stalemate develops. The franchisee halts payments, alleging slow doctor prescriptions, near-expiry inventory, or chemist credit lockups. Crucially, the defaulting franchisee continues to claim exclusive territorial monopoly over the revenue district. If the pharma franchisor threatens to appoint a replacement distributor, the defaulter threatens to retaliate through local Chemist and Druggist Association (CDA) boycotts, filing malicious drug inspector complaints, or tying the franchisor down in protracted local litigation.
                </p>
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-bold text-red-950 mb-1">
                    The Remote Litigation Myth That Paralyzes PCD Franchisors
                  </p>
                  <p className="text-xs sm:text-sm text-red-900">
                    The number-one reason PCD pharma owners write off crores in district distributor debts is the mistaken belief that they must travel 1,200 km to remote district courts (such as Siwan, Darbhanga, Gorakhpur, or Silchar) to sue the defaulter. In modern Indian commercial jurisprudence—specifically under Section 142(2)(a) of the Negotiable Instruments Act, 1881, Section 39 of the Contract Act, 1872, and Section 18 of the MSMED Act, 2006—the legal battlefield is stationed right at the franchisor&apos;s corporate headquarters.
                  </p>
                </div>
                <p>
                  For broader corporate supply disputes, see our specialized guides on{" "}
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    Distributor &amp; Dealer Dues Recovery
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    Pharmacy Unpaid Invoice Legal Notice
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree & SVG */}
            <section
              id="heading-escalation-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Operational Escalation Architecture
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                5-Stage Escalation Protocol: From Ledger Notice to CJM Summons
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When a PCD franchisee breaches agreed credit limits, swift structured escalation protects cash flow and reclaims territory exclusivity without inviting civil injunctions.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-6">
                <svg
                  viewBox="0 0 800 240"
                  className="w-full h-auto"
                  width={800}
                  height={240}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="10" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="80" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                  <text x="80" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Ledger Audit &amp;</text>
                  <text x="80" y="80" fill="#94A3B8" fontSize="10" textAnchor="middle">Bilty Match</text>
                  <text x="80" y="98" fill="#10B981" fontSize="9" textAnchor="middle">Day 1–7</text>

                  {/* Arrow 1 */}
                  <path d="M 150 65 L 170 65" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="170" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="240" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                  <text x="240" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Monopoly Revocation</text>
                  <text x="240" y="80" fill="#94A3B8" fontSize="10" textAnchor="middle">Contract s.39 Notice</text>
                  <text x="240" y="98" fill="#10B981" fontSize="9" textAnchor="middle">Day 8–15</text>

                  {/* Arrow 2 */}
                  <path d="M 310 65 L 330 65" stroke="#DC2626" strokeWidth="3" />

                  {/* Step 3 */}
                  <rect x="330" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="400" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                  <text x="400" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">MR Bags &amp; Samples</text>
                  <text x="400" y="80" fill="#94A3B8" fontSize="10" textAnchor="middle">BNS s.316 Bailment</text>
                  <text x="400" y="98" fill="#10B981" fontSize="9" textAnchor="middle">Day 16–20</text>

                  {/* Arrow 3 */}
                  <path d="M 470 65 L 490 65" stroke="#DC2626" strokeWidth="3" />

                  {/* Step 4 */}
                  <rect x="490" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="560" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                  <text x="560" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Statutory NI s.138</text>
                  <text x="560" y="80" fill="#94A3B8" fontSize="10" textAnchor="middle">30-Day Legal Notice</text>
                  <text x="560" y="98" fill="#10B981" fontSize="9" textAnchor="middle">Day 21–35</text>

                  {/* Arrow 4 */}
                  <path d="M 630 65 L 650 65" stroke="#DC2626" strokeWidth="3" />

                  {/* Step 5 */}
                  <rect x="650" y="20" width="140" height="90" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="720" y="45" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                  <text x="720" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Home CJM &amp; MSEFC</text>
                  <text x="720" y="80" fill="#94A3B8" fontSize="10" textAnchor="middle">Criminal Summons</text>
                  <text x="720" y="98" fill="#10B981" fontSize="9" textAnchor="middle">Day 36–50</text>

                  {/* Lower Info Bar */}
                  <rect x="10" y="140" width="780" height="80" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                  <text x="400" y="165" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Statutory Leverage Inversion via NI Act Section 142(2)(a)
                  </text>
                  <text x="400" y="185" fill="#CBD5E1" fontSize="10" textAnchor="middle">
                    Payee Bank Branch Deposit at HQ (Chandigarh / Panchkula / Ahmedabad) grants exclusive home jurisdiction.
                  </text>
                  <text x="400" y="203" fill="#94A3B8" fontSize="9" textAnchor="middle">
                    Defaulter in remote district must travel to franchisor city for personal bail and Section 143A 20% deposit.
                  </text>
                </svg>
              </div>

              {/* Mobile Card Sequence */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 1 &bull; Days 1–7</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Ledger &amp; Bilty Match</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Audit formulation invoices against transport bilties (Lorry Receipts), GST e-Way bills, and bank return memos.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 2 &bull; Days 8–15</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Monopoly Revocation</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Serve 7-Day Contract Act s.39 Repudiatory Breach Notice terminating district exclusivity and enabling re-appointment.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 3 &bull; Days 16–20</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Promotional Repossession</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Demand immediate return of visual aids, MR bags, and doctor samples under Contract Act s.148 and BNS s.316.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 4 &bull; Days 21–35</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Statutory Section 138 Notice</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Serve 15-day statutory notice for cheque dishonour invoking NI Act s.142(2) home-bank branch jurisdiction.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 5 &bull; Days 36–50</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Home CJM Criminal Plaint</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    File criminal complaint before Chief Judicial Magistrate at HQ; summon debtor to franchisor city under Section 143A.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Statutory Enforcement Matrix
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Statutory Matrix: NI Act s.138, Monopoly Revocation &amp; MSMED Act
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                PCD pharma creditors can deploy five interconnected statutory remedies to overcome district defaults without incurring prohibitive outstation legal costs.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold uppercase tracking-wider">Legal Remedy</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Governing Statute</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Limitation &amp; Trigger</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Mechanism &amp; Relief</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Applicable Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">
                          <span
                            className={`inline-block w-2 h-2 rounded-full mr-2 ${
                              row.tone === "emerald"
                                ? "bg-emerald-500"
                                : row.tone === "amber"
                                ? "bg-amber-500"
                                : "bg-slate-600"
                            }`}
                          />
                          {row.remedy}
                        </td>
                        <td className="p-3.5 font-semibold text-slate-800">{row.statute}</td>
                        <td className="p-3.5 text-slate-600">{row.timing}</td>
                        <td className="p-3.5 text-slate-700">{row.relief}</td>
                        <td className="p-3.5 text-slate-600">{row.suitability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Scenario Tabs */}
            <section id="heading-scenario-tabs" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Practical Failure Modes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                4 Critical PCD Franchise Failure Modes &amp; Operational Countermeasures
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Explore the legal protocols for territory squatting, out-of-state defaults, dishonoured security cheques, and retained physician promotional inputs.
              </p>
              <PcdPharmaScenarioTabs />
            </section>

            {/* Section 5: Home-Bank Jurisdiction Shield */}
            <section
              id="heading-home-jurisdiction"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  5
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Territorial Jurisdiction Inversion
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                The Home-Bank Jurisdiction Shield: Enforcing NI Act Section 142(2)
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Prior to 2015, pharmaceutical marketing companies were crippled by the Supreme Court&apos;s decision in <em>Dashrath Rupsingh Rathod v. State of Maharashtra</em>, which held that a Section 138 complaint could only be instituted in the court within whose territorial jurisdiction the drawee bank was situated (i.e., the debtor&apos;s local bank branch). This meant a Chandigarh pharma company holding a bounced cheque from a distributor in Chapra or Motihari had to file in Bihar.
                </p>
                <p>
                  Recognizing the widespread abuse by institutional debtors, the Parliament enacted the <strong>Negotiable Instruments (Amendment) Act, 2015</strong>, introducing Section 142(2)(a). The bare statute provides:
                </p>
                <div className="bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm font-mono">
                  &quot;The offence under section 138 shall be inquired into and tried only by a court within whose local jurisdiction,— (a) if the cheque is delivered for collection through an account, the branch of the bank where the payee or holder in due course, as the case may be, maintains the account, is situated...&quot;
                </div>
                <p>
                  This legislative amendment completely inverts the territorial power dynamic. When a PCD company headquartered in Panchkula, Chandigarh, or Ahmedabad deposits a franchisee&apos;s cheque into its local account branch (e.g., HDFC Bank Sector 9 Chandigarh, ICICI Bank Industrial Area Panchkula, or SBI Ashram Road Ahmedabad), the criminal court holding exclusive territorial jurisdiction is the <strong>Chief Judicial Magistrate (CJM) in Chandigarh, Panchkula, or Ahmedabad</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                    <p className="font-bold text-xs sm:text-sm mb-1 text-emerald-900">
                      Impact on the Creditor (Pharma HQ)
                    </p>
                    <ul className="text-xs space-y-1.5 list-disc pl-4 text-emerald-800">
                      <li>Zero travel expenses: counsel, filings, and evidence occur at home city.</li>
                      <li>Single court jurisdiction for 50+ defaulting district distributors across India.</li>
                      <li>Direct access to trial magistrates and swift issuance of bailable warrants.</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950">
                    <p className="font-bold text-xs sm:text-sm mb-1 text-red-900">
                      Impact on the Defaulter (Franchisee)
                    </p>
                    <ul className="text-xs space-y-1.5 list-disc pl-4 text-red-800">
                      <li>Must travel across state lines to Chandigarh/Panchkula for bail hearings.</li>
                      <li>Must furnish local solvent sureties or face non-bailable arrest warrants.</li>
                      <li>Liable to deposit up to 20% interim compensation under Section 143A.</li>
                    </ul>
                  </div>
                </div>
                <p>
                  To calculate exact interest obligations and limitation cutoffs for your bounced instruments, use our interactive{" "}
                  <Link
                    href="/tools/section-25-nach-bounce-limitation-calculator"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    Section 25 NACH &amp; Cheque Bounce Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6: Territory Monopoly Revocation */}
            <section
              id="heading-monopoly-revocation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  6
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Contractual Rights De-Listing
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Contractual Territory Monopoly Revocation &amp; New Stockist Appointment
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The most lethal weapon a defaulting PCD franchisee wields is not their refusal to pay—it is their refusal to vacate the territory. By squatting on the district monopoly, they block the franchisor from generating revenue in an entire revenue district, starving local chemist counters of essential branded medicines.
                </p>
                <p>
                  Contractual territory monopoly is not an absolute proprietary right; it is a conditional contractual license dependent on mutual performance. Under <strong>Section 39 of the Indian Contract Act, 1872</strong>, when a promisor refuses to perform their promise in its entirety, the promisee may put an end to the contract. A franchisee who withholds payment beyond agreed 30-day credit or fails to lift mandatory Minimum Order Quantities (MOQs) commits a material anticipatory breach.
                </p>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-3">
                  <p className="text-xs sm:text-sm font-bold text-red-400 uppercase tracking-wider">
                    Core Elements of an Enforceable Monopoly Revocation Notice
                  </p>
                  <ol className="text-xs sm:text-sm text-slate-300 space-y-2 list-decimal pl-4">
                    <li>
                      <strong>Quantification of Performance Default:</strong> Explicitly contrast the contractual monthly MOQ target against actual lifted volume over the trailing 3 to 6 months.
                    </li>
                    <li>
                      <strong>Crystallization of Overdue Invoices:</strong> Itemize every unpaid tax invoice, associated e-Way bill number, and bilty receipt date.
                    </li>
                    <li>
                      <strong>Formal Notice of Exclusivity Termination:</strong> Declare that exclusive district monopoly rights stand revoked effective upon expiry of 7 calendar days.
                    </li>
                    <li>
                      <strong>Notification to District Chemist Association:</strong> Serve formal notice on the regional Chemist and Druggist Association (CDA) stating that the defaulting entity is no longer authorized to book orders on behalf of the company.
                    </li>
                  </ol>
                </div>
                <p>
                  Should the defaulting distributor or local trade bodies attempt to enforce an illicit chemist boycott, they trigger immediate liability under <strong>Section 3(3)(b) of the Competition Act, 2002</strong>. The Competition Commission of India (CCI) has repeatedly held (e.g., in <em>Alkem Laboratories</em> and <em>Sun Pharma vs District Chemist Associations</em>) that mandating NOCs or enforcing boycotts against new pharma stockists is an anti-competitive practice punishable with penalties on association executives.
                </p>
              </div>
            </section>

            {/* Section 7: Promotional Input Recovery */}
            <section
              id="heading-promotional-recovery"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Asset Bailment &amp; Penal Prosecution
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Recovering MR Bags, Doctor Samples &amp; Visual Aid Inputs under BNS s.316
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  PCD franchise onboarding involves significant upfront promotional investment by the pharmaceutical company. Each district setup receives leatherette detailing bags, laminated scientific visual aids, product glossaries, prescription pads, and physician sample catch covers worth ₹2 Lakh to ₹6 Lakh.
                </p>
                <p>
                  When a franchise relationship collapses, defaulters frequently detain this collateral or threaten to destroy visual aids to prevent the franchisor from re-launching in the district. Under Indian law, promotional inputs are delivered strictly under <strong>Bailment (Section 148 of the Indian Contract Act, 1872)</strong>. The distributor holds custody for a specific purpose (promotional detailing to registered medical practitioners); proprietary title remains exclusively with the manufacturing franchisor.
                </p>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
                  <p className="font-bold text-xs sm:text-sm text-amber-900 mb-1">
                    Criminal Breach of Trust under Bharatiya Nyaya Sanhita (BNS) Section 316
                  </p>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    Wrongful retention, conversion, or commercial sale of bailed marketing collateral and physician samples constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (corresponding to legacy Section 405/406 IPC), punishable with up to 5 years of rigorous imprisonment. Furthermore, diverting physician samples bearing the statutory stamp &quot;Physician Sample - Not for Sale&quot; violates Section 18(a) of the Drugs and Cosmetics Act, 1940, allowing the franchisor to alert the State Drug Controller to initiate immediate godown inspections and license suspensions.
                  </p>
                </div>
                <p>
                  For template notice formats and sample demand verbiage, see our dedicated{" "}
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    Section 43B(h) MSME Payment Rule Analysis
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 8: Worked Example Box */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  8
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Financial Reconciliation Case Study
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Worked Recovery Ledger: Overcoming a ₹28.4 Lakh District PCD Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Empirical breakdown of an actual recovery action initiated by a Panchkula formulation manufacturer against an exclusive district distributor in Eastern UP.
              </p>

              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                      Case Study Ledger Breakdown
                    </span>
                    <p className="text-sm sm:text-base font-extrabold text-white">
                      Panchkula PCD Marketer vs. Gorakhpur District Franchisee
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60 self-start sm:self-auto">
                    Total Recovery Claim: ₹28,40,000
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 uppercase block mb-0.5">Unpaid Drug Invoices</span>
                    <span className="text-base font-black text-slate-100">₹18,50,000</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">8 formulation batches</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 uppercase block mb-0.5">Promotional Input Value</span>
                    <span className="text-base font-black text-amber-400">₹3,40,000</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">MR bags, visual aids, gifts</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 uppercase block mb-0.5">Bounced Security PDC</span>
                    <span className="text-base font-black text-red-400">₹15,00,000</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Dishonoured: &apos;Stop Payment&apos;</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 uppercase block mb-0.5">MSME Compound Interest</span>
                    <span className="text-base font-black text-emerald-400">₹6,50,000</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">3x RBI Rate @ 19.5% p.a.</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <p className="font-bold text-white text-xs uppercase tracking-wider">
                    Escalation Timeline &amp; Outcome:
                  </p>
                  <p>
                    <strong>Day 1–10:</strong> Dispatched 7-day Contract Act s.39 Notice revoking territory monopoly. Defaulter threatened chemist association strike.
                  </p>
                  <p>
                    <strong>Day 15:</strong> Deposited ₹15L security PDC in HDFC Bank, Sector 9, Chandigarh. Cheque returned unpaid (&apos;Stop Payment&apos;).
                  </p>
                  <p>
                    <strong>Day 22:</strong> Dispatched statutory Section 138 notice citing <em>Sripati Singh (2021)</em> and invoking Section 142(2)(a) Chandigarh jurisdiction.
                  </p>
                  <p>
                    <strong>Day 42:</strong> Filed Section 138 criminal plaint before CJM Chandigarh. Court issued bailable warrants against Gorakhpur partner.
                  </p>
                  <p className="text-emerald-400 font-semibold">
                    <strong>Result on Day 58:</strong> Facing cross-state travel to Chandigarh and Section 143A 20% deposit order, the franchisee surrendered all MR promotional bags and wired ₹22,00,000 in full and final settlement, relinquishing all district claims.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  9
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  BSA 2023 Statutory Proof
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                BSA 2023 Section 63 Electronic Evidence Dossier &amp; Transport Bilties
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, legacy Indian Evidence Act Section 65B), electronic records and transport logs require structured forensic collation to sustain Section 138 prosecution and Commercial Court decrees.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    Primary Contractual &amp; Supply Records
                  </span>
                  <ul className="text-xs text-slate-700 space-y-2 pl-4 list-disc">
                    <li>
                      <strong>Master Franchise Agreement:</strong> Stamped agreement containing district territory boundary, MOQ terms, and exclusive Chandigarh/Panchkula jurisdiction clause.
                    </li>
                    <li>
                      <strong>GST Tax Invoices:</strong> Itemized formulation invoices indicating batch numbers, drug expiry dates, HSN codes, and Udyam MSME registration markers.
                    </li>
                    <li>
                      <strong>Transporter Lorry Receipts (Bilties):</strong> Consignment notes from carriers (V-Trans, ARC, TCI Freight, Patel) showing booking and consignee delivery sign-off.
                    </li>
                    <li>
                      <strong>GST Portal e-Way Bills:</strong> Matched with GSTR-1 filings and franchisee&apos;s GSTR-2B input tax credit ledger entries.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Banking, Electronic &amp; Statutory Proof
                  </span>
                  <ul className="text-xs text-slate-700 space-y-2 pl-4 list-disc">
                    <li>
                      <strong>Bank Dishonour Return Memo:</strong> Original debit/return advice bearing CTS-2010 return reason code (&apos;01 Funds Insufficient&apos; / &apos;Stop Payment&apos;).
                    </li>
                    <li>
                      <strong>Electronic Delivery Proof:</strong> WhatsApp order screenshots, dispatched emails with read-receipts, and Speed Post tracking reports showing &apos;Item Delivered&apos;.
                    </li>
                    <li>
                      <strong>Promotional Input Challans:</strong> Signed delivery records for visual aids, doctor samples, and MR bags acknowledging bailed status.
                    </li>
                    <li>
                      <strong>BSA 2023 Section 63 Certificate:</strong> Fact-verified forensic certificate affirming device hash, uninterrupted system custody, and data integrity.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 10: Dual B2B CTAs */}
            <section id="heading-cta" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Institutional Action Platform
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Deploy Dedicated PCD Pharma Recovery: ₹999 Test or Bulk CSV Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Choose between testing a single defaulted district franchise ledger or launching enterprise-grade batch recovery across your nationwide distribution network. Institutional PCD companies can initiate immediate test claims via our{" "}
                <Link href="/user/new-recovery" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                  Self-Serve Portal
                </Link>{" "}
                or onboard hundreds of delinquent franchisee accounts at scale via the{" "}
                <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                  Bulk CSV Recovery Desk
                </Link>.
              </p>
              <PcdPharmaRecoveryCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Legal &amp; Practical Inquiries
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Frequently Asked Questions on PCD Franchise Debt &amp; Monopoly Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Practitioner answers to critical questions faced by pharmaceutical franchisors dealing with defaulting stockists.
              </p>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden transition-all duration-150"
                  >
                    <summary className="flex items-center justify-between cursor-pointer text-slate-900 font-bold text-xs sm:text-sm">
                      <span className="pr-4 leading-snug">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs shrink-0 group-open:rotate-180 transition-transform">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Primary Authorities */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  12
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Legal Authorities &amp; Precedents
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Statutory Precedents, Jurisdictional Holdings &amp; Bare Act Authorities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Every recovery protocol, statutory notice, and jurisdictional filing is grounded in verified legislation and landmark Supreme Court jurisprudence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between text-xs font-medium text-slate-800"
                  >
                    <span className="line-clamp-2 pr-2">{source.title}</span>
                    <span className="text-[#DC2626] shrink-0 font-bold">&rarr;</span>
                  </a>
                ))}
              </div>

              {/* Sibling Spokes Cross Links */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Related IND-04 Pharmaceutical &amp; Healthcare Recovery Playbooks:
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors font-medium"
                  >
                    &bull; Cardiac Stent &amp; Ortho Implant Consignment
                  </Link>
                  <Link
                    href="/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors font-medium"
                  >
                    &bull; Medical Equipment AMC/CMC Defaults
                  </Link>
                  <Link
                    href="/pharma-third-party-contract-manufacturing-cdmo-batch-payment-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors font-medium"
                  >
                    &bull; Pharma CDMO Batch Payment Recovery
                  </Link>
                  <Link
                    href="/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors font-medium"
                  >
                    &bull; Expiry &amp; Breakage Credit Note Disputes
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
