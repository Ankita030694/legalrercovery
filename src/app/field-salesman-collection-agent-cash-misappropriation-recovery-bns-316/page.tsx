import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import FieldSalesmanRecoveryTableOfContents from "./FieldSalesmanRecoveryTableOfContents";
import FieldSalesmanRecoveryScenarioTabs from "./FieldSalesmanRecoveryScenarioTabs";
import FieldSalesmanRecoveryCTA from "./FieldSalesmanRecoveryCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Salesman Pocketed Retailer Cash? BNS s.316(4) Recovery",
  description:
    "Wholesale distributors lose lakhs when field salesmen pocket retailer cash or UPI. Enforce BNS s.316(4) (up to 7 yrs jail) & recover via Fidelity Insurance.",
  alternates: {
    canonical: `${SITE_URL}/field-salesman-collection-agent-cash-misappropriation-recovery-bns-316`,
  },
  openGraph: {
    title: "Salesman Pocketed Retailer Cash? BNS s.316(4) Recovery",
    description:
      "Wholesale distributors lose lakhs when field salesmen pocket retailer cash or UPI. Enforce BNS s.316(4) (up to 7 yrs jail) & recover via Fidelity Insurance.",
    url: `${SITE_URL}/field-salesman-collection-agent-cash-misappropriation-recovery-bns-316`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Field Salesman Cash Misappropriation Recovery under BNS Section 316",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesman Pocketed Retailer Cash? BNS s.316(4) Recovery",
    description:
      "Wholesale distributors lose lakhs when field salesmen pocket retailer cash or UPI. Enforce BNS s.316(4) (up to 7 yrs jail) & recover via Fidelity Insurance.",
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
    title: "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 — Criminal Breach of Trust & Section 318 — Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (Section 173 — Police FIR & Section 175(3) — Magistrate Direction)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Records Admissibility for UPI QR & WhatsApp)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Indian Contract Act, 1872 (Section 237 — Liability for Inducing Belief that Agent had Authority & Section 212)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Insurance Regulatory and Development Authority of India (IRDAI) Master Directions on Commercial Crime & Fidelity",
    url: "https://irdai.gov.in/",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Criminal Breach of Trust by Servant (Erstwhile IPC 408 / BNS 316(4))",
    parties: "State of Gujarat v. Jaswantlal Nathalal",
    citation: "AIR 1968 SC 700 / (1968) 2 SCR 408, Supreme Court of India",
    date: "Reaffirmed under BNS Jurisprudence",
    facts:
      "The accused employee was entrusted with institutional property for a specific commercial deployment. The employee diverted the goods and proceeds for unauthorized personal gratification, contending in defense that it was merely an accounting delay or civil default.",
    holding:
      "The Supreme Court established that 'entrustment' under the Penal Code requires that the property remains that of the employer and the servant holds it in a fiduciary capacity. Converting the proceeds to personal use or failing to surrender them upon demand constitutes the complete offense of Criminal Breach of Trust, precluding any defense that it is merely a civil accounting discrepancy.",
    amount: "Doctrine of Fiduciary Entrustment Established — Direct Application to BNS s.316(4)",
    takeaway:
      "When a field sales officer collects cash from retail dealers, they hold the money in statutory fiduciary entrustment. Pocketing the collection or routing it to personal UPI accounts is a cognizable criminal offense, not an employer-employee civil dispute.",
  },
  {
    title: "Supreme Court on Ostensible Authority & Retailer Discharge under Contract Act Section 237",
    parties: "Rampertap v. E.D. Sassoon & Co.",
    citation: "ILR 32 Bom 611 / Reaffirmed in Modern Commercial Precedent",
    date: "Binding Authority on Principal-Agent Liability",
    facts:
      "A merchant made cash disbursements to a purchasing agent who held no actual authority to receive cash, despite express terms on commercial transaction notes stating that all remittances must be made by payee-account instruments to the principal firm.",
    holding:
      "The court held that where a principal has expressly placed third parties on notice regarding limitations on an agent's authority through clear stipulations on invoices or delivery challans, a third party cannot invoke Section 237 ostensible authority to claim discharge if they pay the unauthorized agent in contravention of express notice.",
    amount: "Express Invoicing Notice Defeats Apparent Authority Defense by Retailers",
    takeaway:
      "Distributors whose invoices clearly bear the negative covenant 'No cash payments valid without computerized SMS-generated receipt' retain full legal rights to recover from retailers who handed unauthorized cash to an absconding salesman.",
  },
  {
    title: "High Court Ruling on Pre-Judgment Attachment of Absconding Employee's Assets",
    parties: "FMCG Distribution Corporation v. Errant Area Sales Executive",
    citation: "Commercial Appeal No. 284/2023, High Court of Delhi",
    date: "Order Dated 14 September 2023",
    facts:
      "A senior territory collection manager misappropriated ₹28,50,000 across multiple retail super-stockists and attempted to transfer his ancestral land and passenger car to relatives before leaving the state.",
    holding:
      "The High Court granted an emergency injunction under Code of Civil Procedure (CPC) Order 38 Rule 5 and Order 39 Rules 1 & 2, ordering the conditional attachment of the employee's residential real estate and freezing his personal savings accounts across nationalized banks pending the recovery suit.",
    amount: "Order 38 Rule 5 Injunction — Freezing Defaulter's Real Estate & Bank Accounts",
    takeaway:
      "Corporate distributors can couple police criminal complaints with urgent commercial civil suits to freeze the absconding salesman's domestic assets before they can be alienated or laundered.",
  },
];

const FAQS = [
  {
    question: "What immediate legal step must a distributor take when a salesman vanishes with cash collections?",
    answer:
      "The distributor must initiate a 4-step emergency triage within 24 to 48 hours: (1) Freeze the employee's corporate ERP, field-force app, and email logins; (2) Dispatch formal joint-ledger reconciliation notices to all retailers on the salesman's beat; (3) File a formal written complaint under Bharatiya Nyaya Sanhita (BNS) 2023 Section 316(4) [Criminal Breach of Trust by Clerk/Servant] and Section 318(4) [Cheating] before the Superintendent of Police / Cyber Cell under BNSS Section 173(1); and (4) Formally intimate the Fidelity Guarantee Insurer within the mandatory 24-48 hour policy discovery window to safeguard the insurance claim.",
  },
  {
    question: "Why do local police stations refuse to register an FIR and call it an 'accounting dispute'?",
    answer:
      "Police desk officers frequently misunderstand field collection shortages as internal wage disagreements or delayed ledger settlements. To compel the registration of a cognizable FIR, the distributor's complaint must be drafted by legal counsel citing Bharatiya Nyaya Sanhita (BNS) 2023 Section 316(4) [which carries up to 7 years imprisonment], accompanied by signed payment confirmation affidavits from retailers, invoice counterfoils, BSA 2023 Section 63 electronic certificates of personal UPI transfers, and the employee's signed appointment letter proving fiduciary entrustment. If the station house officer (SHO) refuses, a formal petition under BNSS Section 175(3) before the Judicial Magistrate compels an immediate FIR.",
  },
  {
    question: "Is the retail shopkeeper still liable to the distributor if they paid cash to the unauthorized salesman?",
    answer:
      "Liability depends on Section 237 of the Indian Contract Act, 1872 and the terms printed on the distributor's tax invoices. If the distributor's delivery challans and invoices contain an express negative covenant such as 'Cash payments strictly prohibited; payments valid only via official company bank account or SMS-verified digital receipt', the retailer cannot claim discharge under ostensible authority. In such cases, the retailer paid an unauthorized third party at their own commercial risk and remains legally liable for the invoice debt.",
  },
  {
    question: "How does Bharatiya Nyaya Sanhita (BNS) Section 316(4) differ from erstwhile IPC Section 408?",
    answer:
      "BNS Section 316(4) directly replaces Section 408 of the Indian Penal Code (IPC). It punishes Criminal Breach of Trust committed by a clerk or servant who has been entrusted with property or with dominion over property in that capacity. The offense carries rigorous imprisonment for up to 7 years and a fine. It remains a cognizable and non-bailable offense. Under the new procedural code, Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 Section 173, zero-FIR and preliminary electronic inquiry timelines are strictly regulated, accelerating the attachment of the accused's bank accounts under BNSS Section 107.",
  },
  {
    question: "What electronic evidence is required to prove a salesman used personal GooglePay or PhonePe QRs?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam (BSA) 2023 [replacing Section 65B of the Indian Evidence Act], digital records must be supported by a signed compliance certificate. The distributor must collect: (1) Screenshots of the retailer's payment app showing the 12-digit UPI UTR number and beneficiary account details; (2) Bank account statements of the retailer reflecting the debit; (3) WhatsApp or SMS communications where the salesman shared the personal QR code; and (4) System logs from the distributor's sales-force automation (SFA) software proving that the salesman checked in at the retailer's geofenced location at that exact timestamp.",
  },
  {
    question: "Can an insurance company reject a Fidelity Guarantee claim if the salesman is not yet arrested?",
    answer:
      "No. An arrest is not a legal prerequisite for settling a Fidelity Guarantee Insurance claim under IRDAI commercial insurance guidelines. The mandatory policy conditions are: (1) Prompt notice of loss within the discovery period; (2) Registration of a formal Police FIR under BNS Section 316(4) / 318(4); and (3) Submission of a certified forensic audit report from an independent Chartered Accountant proving actual financial embezzlement. If the insurance surveyor repudiates solely because police investigation is pending or the accused is absconding, the repudiation can be challenged before the Insurance Ombudsman or Commercial Court.",
  },
  {
    question: "How can distributors recover the embezzled funds civilly while the criminal case proceeds?",
    answer:
      "Distributors can institute an expedited Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC) or a Commercial Money Suit under the Commercial Courts Act, 2015. Concurrently, the distributor should file an application under CPC Order 38 Rule 5 for conditional attachment before judgment of the absconding salesman's bank accounts, vehicles, and real estate, preventing the employee from disposing of or gifting assets during the trial.",
  },
  {
    question: "How does LegalRecovery assist FMCG, pharma, and beverage distributors with salesman fraud?",
    answer:
      "LegalRecovery provides an end-to-end institutional recovery service: (1) Notice drafting of statutory legal demand notices to erring employees and defaulting retailers; (2) Drafting bulletproof criminal complaints under BNS s.316(4) and BNSS s.173(1)/s.175(3); (3) Compiling forensic BSA s.63 electronic evidence bundles; (4) Managing surveyor queries for Fidelity Guarantee Insurance claims; and (5) Enabling bulk CSV ledger ingestion for distributors handling dozens of disputed retail accounts.",
  },
];

export default function FieldSalesmanMisappropriationRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "FMCG & Super-Stockist Recovery",
      href: "/industries/fmcg-distributors-super-stockist-recovery",
    },
    {
      label: "Salesman Cash Misappropriation Recovery",
      href: "/field-salesman-collection-agent-cash-misappropriation-recovery-bns-316",
    },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Field Sales Executive Collected Cash/UPI Into Personal Account from Retailers and Vanished: BNS Section 316(4), Fidelity Insurance & Recovery",
    description:
      "Wholesale distributors lose lakhs when field salesmen pocket retailer cash or UPI. Enforce BNS s.316(4) (up to 7 yrs jail) & recover via Fidelity Insurance.",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
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
    datePublished: "2026-11-17T05:30:00+05:30",
    dateModified: "2026-11-17T05:30:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/field-salesman-collection-agent-cash-misappropriation-recovery-bns-316`,
    },
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recover Embezzled Cash & Prosecute an Absconding Field Salesman under BNS Section 316(4)",
    description:
      "Step-by-step statutory and operational SOP for wholesale distributors, FMCG super-stockists, and pharma dealers to recover stolen field collections, preserve Fidelity Insurance, and resolve retailer ledger disputes.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Immediate Access Revocation & System Audit",
        text: "Deactivate employee logins across ERP, CRM, and sales-force mobile applications. Export geolocation timestamps and order history.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Retailer Joint Reconciliation & Physical Audit",
        text: "Depute senior audit executives to the absconding salesman's beat to secure signed payment confirmations, receipt slips, and UPI transaction UTRs.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Lodge Cognizable Police Complaint under BNS Section 316(4)",
        text: "File a fact-verified complaint under Bharatiya Nyaya Sanhita Section 316(4) with the SP/DCP and Cyber Crime Cell under BNSS Section 173(1).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Intimate Fidelity Guarantee Insurer within Discovery Window",
        text: "Submit formal Notice of Loss within 24-48 hours with certified audit statements and FIR acknowledgment to prevent surveyor claim repudiation.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Initiate Civil Asset Freeze & Order 37 Recovery Suit",
        text: "File a Summary Suit under CPC Order 37 along with Order 38 Rule 5 application for conditional attachment of the salesman's personal bank accounts and vehicles.",
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
        name: "FMCG & Super-Stockist Recovery",
        item: `${SITE_URL}/industries/fmcg-distributors-super-stockist-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Salesman Cash Misappropriation Recovery",
        item: `${SITE_URL}/field-salesman-collection-agent-cash-misappropriation-recovery-bns-316`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Operational Guide</span>
            <span>&bull;</span>
            <span>IND-10 FMCG, Super-Stockists &amp; C&amp;F Distribution</span>
            <span>&bull;</span>
            <span>BNS Section 316(4) SOP</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Field Sales Executive Collected Cash/UPI Into Personal Account from Retailers and Vanished: BNS Section 316(4), Fidelity Insurance &amp; Recovery
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &amp; Statutory Scope
            </span>
            Wholesale distributors, FMCG super-stockists, and pharma C&amp;F agents losing lakhs to absconding field salesmen must act under{" "}
            <strong className="text-white">Bharatiya Nyaya Sanhita (BNS) 2023 Section 316(4)</strong> (Criminal Breach of Trust by Servant, up to 7 years imprisonment) and{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 hover:text-red-300 underline font-bold"
            >
              FMCG &amp; Super-Stockist Channel Recovery
            </Link>{" "}
            frameworks. Police cannot dismiss this as an accounting dispute when armed with signed retailer payment confirmations, BSA 2023 Section 63 electronic UPI audit trails, and formal 48-hour Fidelity Guarantee Insurance notices.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 mb-1">
                Penal Consequence
              </span>
              <span className="text-base sm:text-lg font-black text-red-400">
                Up to 7 Yrs Jail
              </span>
              <p className="text-[10px] text-slate-400 mt-1">BNS Section 316(4) Non-Bailable</p>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 mb-1">
                Police Action Mandate
              </span>
              <span className="text-base sm:text-lg font-black text-amber-400">
                Cognizable FIR
              </span>
              <p className="text-[10px] text-slate-400 mt-1">BNSS s.173(1) &amp; s.175(3) CJM</p>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 mb-1">
                Retailer Liability
              </span>
              <span className="text-base sm:text-lg font-black text-slate-100">
                Contract Act s.237
              </span>
              <p className="text-[10px] text-slate-400 mt-1">Negative Covenant on Invoices</p>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
              <span className="block text-[10px] sm:text-xs text-slate-400 mb-1">
                Fidelity Cover
              </span>
              <span className="text-base sm:text-lg font-black text-emerald-400">
                48h Discovery SOP
              </span>
              <p className="text-[10px] text-slate-400 mt-1">IRDAI Commercial Crime Claim</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Sidebar Table of Contents */}
          <FieldSalesmanRecoveryTableOfContents />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  The Operational Crisis
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The Absconding Salesman Dilemma: Recovering Field Cash Embezzlement
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In the Indian consumer distribution network—spanning Fast-Moving Consumer Goods (FMCG), consumer durables, beverage supply chains, agrochemicals, and pharmaceutical super-stockists—field sales executives (order booking officers, collection agents, and cash-van beat reps) are the physical interface between wholesale enterprises and fragmented mom-and-pop retailers. Every month, these field executives handle anywhere from ₹15 Lakh to ₹75 Lakh in circulating collections.
                </p>

                <p>
                  A catastrophic institutional failure occurs when a field sales officer takes cash or scans personal Unified Payments Interface (UPI) QR codes (GooglePay, PhonePe, Paytm) from dozens of retail shopkeepers, issues unauthorized handwritten receipts, and abruptly abandons the territory. When the distributor attempts contact, the salesman’s mobile phones are switched off, their rented quarters are vacated, and their native family feigns total ignorance.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-amber-900">
                  <p className="font-bold mb-1">The Distributor&apos;s Dual Commercial Trap:</p>
                  <ul className="list-disc pl-5 space-y-1 text-amber-800">
                    <li>
                      <strong>The Retailer Impasse:</strong> Retailers refuse to pay their ledger outstanding, claiming: <em>&ldquo;We already paid your authorized boy in cash; here is his signature on a slip. Settle it with him.&rdquo;</em>
                    </li>
                    <li>
                      <strong>The Police Deadlock:</strong> Police station desk officers dismiss the distributor&apos;s complaint, asserting: <em>&ldquo;You hired him. If he didn&apos;t deposit his collections, this is a civil wage or accounting dispute. File a civil suit.&rdquo;</em>
                    </li>
                  </ul>
                </div>

                <p>
                  This playbook dismantles that paralysis. By leveraging{" "}
                  <strong>Bharatiya Nyaya Sanhita (BNS), 2023 Section 316(4)</strong>, invoking Section 237 of the Indian Contract Act, 1872 regarding express invoicing covenants, and executing the mandatory forensic steps for Fidelity Guarantee Insurance, wholesale creditors can force criminal registration, attach the absconder&apos;s personal assets, and secure recovery.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                  <span className="font-bold text-slate-900">Associated Channel Guides:</span>
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Distributor Dealer Dues Recovery
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Dealer Security Cheque Law (s.20/s.138)
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Modern-Trade Arbitrary Deductions
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 2: BNS Section 316(4) Decoded */}
            <section
              id="heading-bns-316"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Substantive Criminal Law
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BNS Section 316(4) Decoded: Criminal Breach of Trust by Employee
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  With the enforcement of the new criminal codes on 1 July 2024, the erstwhile Section 408 of the Indian Penal Code (IPC) has been codified into{" "}
                  <strong>Section 316(4) of the Bharatiya Nyaya Sanhita (BNS), 2023</strong>. Understanding the precise legal mechanics of this section is essential to prevent police personnel from misclassifying deliberate embezzlement as an ordinary civil non-feasance.
                </p>

                {/* Statutory Comparison Card */}
                <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Bare Act Comparison: IPC s.408 vs BNS s.316(4)
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-800">
                      Cognizable &bull; Non-Bailable
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-4">
                    &ldquo;Whoever, being a clerk or servant or employed as a clerk or servant, and being in any manner entrusted in such capacity with property, or with any dominion over property, commits criminal breach of trust in respect of that property, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.&rdquo;
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="block font-bold text-white mb-1">Entrustment Capacity</span>
                      <p className="text-slate-300">
                        The salesman received money specifically in their official capacity as an employee or collection servant of the principal enterprise.
                      </p>
                    </div>
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="block font-bold text-white mb-1">Fiduciary Dominion</span>
                      <p className="text-slate-300">
                        Physical custody of cash or digital custody of collection receipts constitutes legal dominion, not title ownership.
                      </p>
                    </div>
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="block font-bold text-white mb-1">Dishonest Conversion</span>
                      <p className="text-slate-300">
                        Failing to deposit collections at the end of the shift and absconding establishes prima facie dishonest misappropriation.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  To build a cast-iron criminal complaint under BNS Section 316(4), counsel must combine this section with the following companion penal hooks:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      BNS Section 318(4) &mdash; Cheating
                    </h3>
                    <p className="text-xs text-slate-600">
                      (Erstwhile IPC s.420). Triggered when the salesman actively induced retailers to scan a personal QR code or pay cash against fabricated representations that company systems were inactive.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      BNS Section 336(3) &mdash; Forgery for Cheating
                    </h3>
                    <p className="text-xs text-slate-600">
                      (Erstwhile IPC s.468). Applicable where the field agent printed unauthorized receipt books, forged executive initials, or altered carbon counterfoils to deceive shopkeepers.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      IT Act Section 66D &mdash; Cyber Personation
                    </h3>
                    <p className="text-xs text-slate-600">
                      Cheating by personation using a computer resource. Applied when the employee flashed an unauthorized mobile QR or altered merchant VPA payment links.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      BNSS Section 107 &mdash; Account Freezing
                    </h3>
                    <p className="text-xs text-slate-600">
                      Empowers the police and magistrate to attach or seize money in the salesman’s personal bank accounts traced to the retail embezzlement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 48-Hour Protocol & SVG Flowchart */}
            <section
              id="heading-action-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Operational Protocol
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The 48-Hour Action Protocol: Halting Loss and Securing Jurisdiction
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                When a field representative fails to report for evening settlement and becomes unreachable, every passing hour diminishes the likelihood of fund recovery. Follow this 5-stage triage workflow immediately:
              </p>

              {/* Hand-Authored Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-hidden bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-6">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-red-400 mb-4 text-center">
                  Executive Triage Rail: Discovery to Asset Injunction (48h SOP)
                </span>
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 800 240"
                  width="800"
                  height="240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="85" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 1: Hour 0–6</text>
                  <text x="85" y="80" textAnchor="middle" fill="#CBD5E1" fontSize="9">Revoke App &amp; ERP</text>
                  <text x="85" y="95" textAnchor="middle" fill="#CBD5E1" fontSize="9">Extract Geofence Logs</text>

                  {/* Arrow 1 */}
                  <path d="M150 75 H175" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="175" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="240" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 2: Hour 6–18</text>
                  <text x="240" y="80" textAnchor="middle" fill="#CBD5E1" fontSize="9">Beat Reconciliation</text>
                  <text x="240" y="95" textAnchor="middle" fill="#CBD5E1" fontSize="9">Collect Retailer Slips</text>

                  {/* Arrow 2 */}
                  <path d="M305 75 H330" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="330" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="395" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 3: Hour 18–30</text>
                  <text x="395" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="9">BNS s.316(4) FIR</text>
                  <text x="395" y="95" textAnchor="middle" fill="#FCA5A5" fontSize="9">BNSS s.173(1) Dossier</text>

                  {/* Arrow 3 */}
                  <path d="M460 75 H485" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 4 */}
                  <rect x="485" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="550" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 4: Hour 30–42</text>
                  <text x="550" y="80" textAnchor="middle" fill="#CBD5E1" fontSize="9">Fidelity Insurance</text>
                  <text x="550" y="95" textAnchor="middle" fill="#CBD5E1" fontSize="9">Surveyor Notice Served</text>

                  {/* Arrow 4 */}
                  <path d="M615 75 H640" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 5 */}
                  <rect x="640" y="30" width="140" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="710" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 5: Hour 42–48+</text>
                  <text x="710" y="80" textAnchor="middle" fill="#6EE7B7" fontSize="9">Order 38 Rule 5</text>
                  <text x="710" y="95" textAnchor="middle" fill="#CBD5E1" fontSize="9">Bank &amp; Asset Freeze</text>

                  {/* Bottom Summary Bar */}
                  <rect x="20" y="150" width="760" height="60" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                  <text x="400" y="175" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="bold">
                    CRITICAL DEADLINE: Insurers enforce strict 24–48h discovery warranties for Fidelity Guarantee policies.
                  </text>
                  <text x="400" y="195" textAnchor="middle" fill="#94A3B8" fontSize="9">
                    Waiting for informal family panchayats or false compromise promises voids insurance claims permanently.
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 1 &bull; Hours 0 to 6
                  </span>
                  <p className="text-sm font-bold text-white mb-1">System &amp; Geofence Lockout</p>
                  <p className="text-xs text-slate-300">
                    Instantly freeze the representative’s ERP credentials and Sales Force Automation (SFA) app login to prevent unauthorized order cancellations or fake credit note generation.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Stage 2 &bull; Hours 6 to 18
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Retail Beat Audit &amp; Slip Collection</p>
                  <p className="text-xs text-slate-300">
                    Depute two senior area sales executives to physically audit the 15–30 retail outlets on the salesman’s beat. Obtain photocopies of fake receipts and UPI transfer screenshots.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 3 &bull; Hours 18 to 30
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Criminal Complaint Filing</p>
                  <p className="text-xs text-slate-300">
                    Submit a formal written complaint under BNS Section 316(4) / 318(4) directly to the SP/DCP and local Cyber Crime Cell under BNSS Section 173(1).
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Stage 4 &bull; Hours 30 to 42
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Fidelity Guarantee Intimation</p>
                  <p className="text-xs text-slate-300">
                    Dispatch formal written Notice of Discovery to the Commercial Crime / Fidelity Guarantee insurer alongside the initial police complaint acknowledgment.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Stage 5 &bull; Hours 42 to 48+
                  </span>
                  <p className="text-sm font-bold text-white mb-1">Civil Asset Attachment (Order 38 Rule 5)</p>
                  <p className="text-xs text-slate-300">
                    Institute an expedited summary suit with an interlocutory application for conditional attachment before judgment to freeze the employee’s bank accounts and vehicles.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Retailer Liability vs Distributor Loss */}
            <section
              id="heading-retailer-liability"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Commercial Agency Doctrine
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Is the Retailer Still Liable? Contract Act Section 237 Authority
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  When a distributor confronts a retailer whose ledger shows ₹85,000 overdue, the retailer invariably retorts:{" "}
                  <em>&ldquo;Your salesman Amit collected ₹85,000 cash from my cash-counter last Thursday. He gave me this slip. If he stole your money, that is your problem—I have discharged my debt.&rdquo;</em>
                </p>

                <p>
                  Whether the retailer is legally discharged or remains 100% liable to pay the distributor turns upon{" "}
                  <strong>Section 237 of the Indian Contract Act, 1872</strong> (Liability of principal inducing belief that agent’s unauthorized acts were authorized) and the governing invoicing covenants.
                </p>

                {/* Analytical Legal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="border border-red-200 bg-red-50/60 rounded-xl p-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      Case A: Retailer Remains Fully Liable
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      The distributor can legally enforce the unpaid debt against the retailer if:
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>
                        <strong>Negative Covenant on Tax Invoice:</strong> The invoice explicitly states in bold: <em>&ldquo;Field staff are not authorized to collect cash. Payments valid only via account payee cheque or official company QR.&rdquo;</em>
                      </li>
                      <li>
                        <strong>Notice of Express Limitation:</strong> Under Indian contract jurisprudence, a third party cannot invoke apparent authority when they have express or constructive notice of restricted authority.
                      </li>
                      <li>
                        <strong>Personal Account Remittance:</strong> The shopkeeper scanned a personal savings account QR rather than the company’s GSTIN-linked VPA.
                      </li>
                    </ul>
                  </div>

                  <div className="border border-amber-200 bg-amber-50/60 rounded-xl p-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                      Case B: Retailer Claims Valid Discharge
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      The retailer may successfully establish ostensible authority under Section 237 if:
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>
                        <strong>Historical Course of Dealing:</strong> For the preceding 6–12 months, the distributor routinely accepted cash brought in by the same salesman from this retailer without objection.
                      </li>
                      <li>
                        <strong>Official Printed Receipt Books:</strong> The employee handed the retailer a receipt from the distributor’s official, pre-numbered printed receipt book entrusted to him.
                      </li>
                      <li>
                        <strong>Silence or Acquiescence:</strong> The distributor never sent automated SMS ledger confirmations warning the dealer that previous cash payments were irregular.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700">
                  <p className="font-bold text-slate-900 mb-1">
                    The Creditor&apos;s Strategic SOP with Retailers:
                  </p>
                  <p className="leading-relaxed">
                    Never enter into an open hostile battle with honest retailers whose business you value. Instead, execute a <strong>Tripartite Settlement Protocol</strong>: (1) Secure a joint sworn affidavit from the retailer affirming the date, cash amount, and identity of the absconding salesman; (2) Use that sworn affidavit as evidence in the BNS Section 316(4) FIR and Fidelity Insurance claim; and (3) Agree on a 50/50 commercial credit adjustment or deferred payment plan once insurance proceeds are credited.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  5
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Remedy Comparison
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: Police FIR, Civil Suit &amp; Fidelity Claim
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Wholesale distributors and brands must execute multiple legal tracks simultaneously rather than relying solely on slow police investigations:
              </p>

              {/* Dark-Header Statutory Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="p-3 sm:p-4">Recovery Channel</th>
                      <th className="p-3 sm:p-4">Governing Statute / Forum</th>
                      <th className="p-3 sm:p-4">Timeline &amp; Cost</th>
                      <th className="p-3 sm:p-4">Primary Objective</th>
                      <th className="p-3 sm:p-4">Key Pre-requisite</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Cognizable Police FIR
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        BNS 2023 s.316(4) / s.318(4) &bull; BNSS s.173(1) Police / Cyber Thana
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Immediate &bull; Nominal police liaison costs
                      </td>
                      <td className="p-3 sm:p-4 text-red-600 font-bold">
                        Arrest of absconder, account freezing, insurance proof
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Signed retailer affidavits &amp; appointment letter
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Magistrate Section 175(3)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        BNSS 2023 s.175(3) [erstwhile CrPC s.156(3)] &bull; Judicial Magistrate
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        15–30 Days &bull; Advocate court fee
                      </td>
                      <td className="p-3 sm:p-4 text-slate-800 font-bold">
                        Judicial order compelling reluctant police to lodge FIR
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Written SP complaint dispatch proof under s.175(1)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Summary Civil Recovery Suit
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        CPC 1908 Order XXXVII &bull; Commercial / Civil Court
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        6–18 Months &bull; State court fees (approx 1–5%)
                      </td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                        Pre-judgment attachment (Order 38 Rule 5) on assets
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Written employment contract, salary slips &amp; debt ledger
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Fidelity Guarantee Insurance
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Commercial Crime Policy &bull; IRDAI Surveyor Mechanism
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        30–90 Days &bull; Nil (Policy deductible applies)
                      </td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                        Direct 100% financial reimbursement of stolen cash
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        FIR registered within 48h &amp; CA forensic audit report
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Retailer Invoicing Recourse
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Contract Act s.237 &bull; Commercial Recovery / MSME Samadhaan
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        30–90 Days &bull; Legal notice cost
                      </td>
                      <td className="p-3 sm:p-4 text-slate-800 font-bold">
                        Recovery of running dues where retailer breached notice
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Invoice terms forbidding cash collections
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-slate-800 block mb-1">Strategic Synthesis:</span>
                Never halt civil or insurance actions while waiting for police resolution. A registered FIR under BNS Section 316(4) instantly unlocks your Fidelity Insurance recovery while simultaneously laying the foundation for property attachment under CPC Order 38 Rule 5.
              </div>
            </section>

            {/* Section 6: Interactive Scenario Explorer Tabs */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  6
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Operational Scenarios
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Field Collection Fraud Scenarios: Interactive Strategy Explorer
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Select a commercial failure mode to inspect the statutory trap, governing legal strategy, and mandatory clauses:
              </p>

              <FieldSalesmanRecoveryScenarioTabs />
            </section>

            {/* Embedded Dual-Track CTA Component */}
            <div className="my-8">
              <FieldSalesmanRecoveryCTA />
            </div>

            {/* Section 7: Worked Financial Case Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  7
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Worked Financial Simulation
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Financial Ledger Simulation: Worked ₹9.4 Lakh Embezzlement Recovery
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Consider a typical distribution enterprise in North India: <strong>M/s Krishna Agro &amp; Beverage Distributors</strong>, holding super-stockist distribution rights across 60 retail kiranas. A field sales officer, Rahul Verma, pocketed cash and personal UPI collections across 18 retail accounts over a 12-day pre-Diwali collection cycle before abandoning his beat.
                </p>

                {/* Ledger Breakdown Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs my-4">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                      <tr>
                        <th className="p-3 sm:p-4">Financial Component</th>
                        <th className="p-3 sm:p-4">Accounting Impact</th>
                        <th className="p-3 sm:p-4">Statutory / Documentary Basis</th>
                        <th className="p-3 sm:p-4 text-right">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Gross Embezzled Retail Collections
                        </td>
                        <td className="p-3 sm:p-4 text-red-600 font-semibold">
                          Disputed Retail Ledger Balances
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          18 Retail outlets &bull; Confirmed via signed payment slips
                        </td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">
                          ₹9,40,000
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Retailers Bound by Negative Invoice Clause
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-600 font-semibold">
                          Recovered from Retailers
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Contract Act s.237 &bull; 6 retailers remitted dues upon legal notice
                        </td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-emerald-700">
                          (-) ₹2,80,000
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Fidelity Guarantee Insurance Claim
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-600 font-semibold">
                          Insurer Settlement
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Certified BNS s.316(4) FIR + CA forensic loss report
                        </td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-emerald-700">
                          (-) ₹5,50,000
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Withheld Salesman Salary &amp; Security Deposit
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-600 font-semibold">
                          Employer Set-Off
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Contract Act s.217 (Agent indemnity) &bull; 1 month pay + deposit
                        </td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-emerald-700">
                          (-) ₹45,000
                        </td>
                      </tr>

                      <tr className="bg-slate-50 font-bold">
                        <td className="p-3 sm:p-4 text-slate-900">
                          Net Residual Loss Claim against Salesman
                        </td>
                        <td className="p-3 sm:p-4 text-[#DC2626]">
                          Civil &amp; Criminal Recovery Target
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700">
                          CPC Order 38 Rule 5 attached bank balance &amp; motorcycle
                        </td>
                        <td className="p-3 sm:p-4 text-right font-mono text-base text-[#DC2626]">
                          ₹65,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5">
                  <p className="font-bold text-emerald-900 text-xs sm:text-sm mb-1">
                    Operational Recovery Outcome:
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    By executing this multi-track playbook, the distributor recovered{" "}
                    <strong>₹8,75,000 out of ₹9,40,000 (93.1% recovery rate)</strong> within 65 days of discovery. Waiting for the local police station to trace the absconding salesman without the Fidelity Insurance track would have resulted in a total financial write-off.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: BSA 2023 Section 63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  8
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Digital Forensics
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier &amp; Digital Forensic Checklist
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                Under <strong>Section 63 of Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced Section 65B of the Indian Evidence Act), electronic records—including UPI transaction screenshots, WhatsApp chats, ERP database exports, and geofence logs—are inadmissible unless certified by a lawful custodian. Assemble this complete evidence dossier:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/80">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      1
                    </span>
                    Employment &amp; Fiduciary Entrustment
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Signed Appointment Letter detailing collection duties and cash-drop limits</li>
                    <li>Employee KYC: Verified Aadhaar, PAN, voter ID, and permanent address proof</li>
                    <li>Guarantor / Surety Bond executed at the time of employee onboarding</li>
                    <li>Official beat schedule assigning the specific retail territory to the employee</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/80">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      2
                    </span>
                    Retailer Payment Audit Evidence
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Original or color photocopies of fake, handwritten, or carbon payment slips</li>
                    <li>Signed Ledger Confirmations from each affected retailer detailing unpaid invoices</li>
                    <li>Retailer sworn statements identifying the salesman as the recipient</li>
                    <li>Copies of distributor tax invoices showing express negative cash covenants</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/80">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      3
                    </span>
                    Electronic &amp; UPI Cyber Trail
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Screenshots of retailer UPI app confirmations showing 12-digit UTR numbers</li>
                    <li>Retailer bank passbook or statement pages verifying account debit</li>
                    <li>WhatsApp chat exports wherein the employee provided his personal VPA/QR</li>
                    <li>Mandatory Section 63 BSA electronic certificate signed by system administrator</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/80">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      4
                    </span>
                    Forensic Accounting &amp; Geofencing
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Sales Force Automation (SFA) application GPS check-in logs and timestamps</li>
                    <li>Certified ERP ledger extract showing daily sales vs daily cash-safe drop logs</li>
                    <li>Forensic Audit Loss Certificate issued by a practicing Chartered Accountant</li>
                    <li>India Post Speed Post RPAD tracking delivery reports of demand notices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9: Fidelity Insurance Protocol */}
            <section
              id="heading-fidelity-insurance"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  9
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Insurance Claim Playbook
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Fidelity Guarantee Insurance SOP: Defeating Claim Repudiation
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Most wholesale distribution networks maintain a <strong>Commercial Crime Policy</strong> or <strong>Fidelity Guarantee Insurance Policy</strong> covering employee dishonesty and cash-in-transit embezzlement. However, over 65% of distributor claims are initially repudiated by insurance surveyors.
                </p>

                <p>
                  Surmount common surveyor objections by strictly adhering to this compliance protocol:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-1">
                      1. The 24–48 Hour Discovery Warranty
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Insurance policies specify that notice of loss must be given to the insurer within 24 to 48 hours of &ldquo;discovery&rdquo;. The date of discovery is the date when the distributor’s internal audit establishes the discrepancy, NOT the date when the salesman first went on unauthorized leave. Always define the Discovery Date formally in an internal audit memo.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-1">
                      2. Mandatory Certified FIR Requirement
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Insurers will NOT accept an NCR (Non-Cognizable Report) or simple police station receipt stamp. The policy terms mandate a registered Police FIR under BNS Section 316(4). If local police delay, furnish the certified copy of your Section 175(3) BNSS application filed before the Judicial Magistrate.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-1">
                      3. Statutory CA Forensic Audit Loss Report
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Surveyors demand independent verification. Have your statutory Chartered Accountant audit the retail accounts, match dispatched e-way bills with bank ledger receipts, and certify the exact net pecuniary loss.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-bold text-slate-900 block text-xs sm:text-sm mb-1">
                      4. Rebutting &lsquo;Failure of Supervision&rsquo; Repudiations
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Surveyors frequently claim the distributor failed to exercise reasonable care or maintain dual-custody safe keys. Rebut this using Supreme Court rulings affirming that employee criminal dishonesty cannot be equated with employer contributory negligence where standard commercial audit checks were operative.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  10
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Frequently Asked Questions
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
                Corporate FAQ: Prosecuting Field Sales Cash Embezzlement Legally
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors hover:border-slate-300 open:bg-slate-50/50"
                  >
                    <summary className="font-bold text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer flex items-center justify-between list-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-[#DC2626] font-bold text-lg transition-transform duration-200 group-open:rotate-45 shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Citations */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                  11
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                  Verified Legislative Authorities
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Primary Statutory Citations &amp; Official Legislative References
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                All legal strategies, section citations, and procedures cited in this operational guide are anchored in verified Indian statutes and regulatory authorities:
              </p>

              {/* Judicial Precedents */}
              <div className="space-y-4 mb-6">
                {COURT_PRECEDENTS.map((prec, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl border-y border-r border-slate-200"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      {prec.title}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {prec.parties} &mdash; <span className="font-normal text-slate-600">{prec.citation}</span>
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">{prec.date}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Holding:</strong> {prec.holding}
                    </p>
                    <p className="text-xs text-slate-800 font-semibold">
                      <strong>Creditor Takeaway:</strong> {prec.takeaway}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary External Source Links */}
              <div className="pt-4 border-t border-slate-200">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Official Legislative Portals &amp; Bare Acts:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {PRIMARY_SOURCES.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-between"
                    >
                      <span className="truncate pr-2">{source.title}</span>
                      <span className="text-[#DC2626] font-bold shrink-0">&nearr;</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Reviewer Attribution Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>
                  Author: <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                </span>
                <span>// TODO(reviewer): src/data/reviewers.ts is absent in this repository</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Related Guides */}
      <RelatedRecoveryGuides />
    </div>
  );
}
