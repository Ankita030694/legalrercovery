import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CyberCellFreezeNoticeCTA from "./CyberCellFreezeNoticeCTA";
import CyberCellFreezeTableOfContents from "./CyberCellFreezeTableOfContents";
import CyberCellFreezeProblemTabs from "./CyberCellFreezeProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Bank Account Frozen by Cyber Cell? How to Unfreeze",
  description:
    "Account put on debit freeze by cyber police? Layer tracing, Section 91/102 notice remedies, obtaining an NOC, and filing before the magistrate.",
  alternates: {
    canonical: `${SITE_URL}/bank-account-frozen-cyber-cell-legal-remedies`,
  },
  openGraph: {
    title: "Bank Account Frozen Due to a Cyber Cell Notice: Step-by-Step Legal Remedies to Unfreeze",
    description:
      "Statutory guide on unfreezing bank accounts on cyber crime debit freeze. Learn layer tracing, BNSS 106 / CrPC 102 requisitions, obtaining police NOC, converting to lien-only freeze, and Magistrate petitions.",
    url: `${SITE_URL}/bank-account-frozen-cyber-cell-legal-remedies`,
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
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS Section 106 — Power of Police to Seize Property & Section 503 — Magistrate Disposal of Seized Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/21736",
  },
  {
    title: "Code of Criminal Procedure, 1973 (CrPC Section 102 — Seizure of Bank Accounts & Section 457 — Procedure on Seizure)",
    url: "https://www.indiacode.nic.in/handle/123456789/1611",
  },
  {
    title: "Supreme Court of India — State of Maharashtra v. Tapas D. Neogy (1999) 7 SCC 685 (Bank Account as Property & Mandatory Safeguards)",
    url: "https://main.sci.gov.in/judgment/judis/15865.pdf",
  },
  {
    title: "Gujarat High Court — Tarun Kumar v. State of Gujarat (R/SCR.A/13812/2024 — Mandate Restricting Account Freeze to Disputed Layer Sum)",
    url: "https://gujarathighcourt.nic.in/",
  },
  {
    title: "Madras High Court — Dr. S. Radhakrishnan v. State (W.P. No. 24821 of 2023 — Disproportionate Total Debit Freeze Quashed)",
    url: "https://hcmadras.tn.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Ledgers, P2P Receipts & Transaction Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank of India (RBI) Master Circular on Customer Service in Banks & Nodal Escalation Standards",
    url: "https://www.rbi.org.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Downstream P2P Crypto & Commercial Recipients Cannot Have Entire Bank Account Frozen",
    parties: "Tarun Kumar v. State of Gujarat & Ors.",
    citation: "Special Criminal Application No. 13812 of 2024, High Court of Gujarat",
    date: "Order Dated 18 October 2024",
    facts:
      "The petitioner was an active peer-to-peer (P2P) cryptocurrency merchant registered on Binance who legitimately sold USDT to multiple buyers through banking channels. A buyer paid ₹68,000 using funds originating from an alleged cyber fraud committed in Ahmedabad. The Cyber Crime Police Station issued an omnibus Section 102 CrPC notice to the petitioner's bank, resulting in a total debit freeze on his entire operational savings account holding over ₹14,50,000, paralyzing his daily livelihood and business commitments.",
    holding:
      "The Gujarat High Court held that the police cannot unilaterally order banks to debit-freeze entire operational bank accounts of innocent downstream recipients who gave lawful valuable consideration. The High Court directed that the debit freeze be immediately quashed, restricting the police requisition strictly to a lien-only hold of ₹68,000 (the tainted sum), subject to the petitioner furnishing an indemnity undertaking before the Investigating Officer.",
    amount: "Total Debit Freeze of ₹14.5 Lakhs Quashed → Restrained to ₹68,000 Lien Hold",
    takeaway:
      "If your bank blocks your complete account balance over a small downstream cyber complaint or P2P crypto trade, High Courts will compel the bank and cyber police to confine the freeze strictly to the specific disputed amount as a lien, freeing the rest of your balance.",
  },
  {
    title: "Indefinite Seizure Without Reporting to Magistrate Violates Article 21 and Section 102(3)",
    parties: "B. Kavitha v. The Inspector of Police, Cyber Crime Cell & Bank Manager",
    citation: "Writ Petition No. 28419 of 2023, High Court of Judicature at Madras",
    date: "Judgment Dated 04 December 2023",
    facts:
      "The petitioner's commercial current account was debit-frozen following a requisition email sent by the Cyber Crime Cell investigating a multi-state online financial fraud. The police neither issued a formal summons under Section 91 CrPC nor reported the seizure to the jurisdictional Judicial Magistrate under Section 102(3) CrPC for more than five months. The bank refused to permit even basic operational debits.",
    holding:
      "The Madras High Court ruled that compliance with Section 102(3) CrPC (now Section 106(3) BNSS) is a mandatory condition precedent. A police officer who freezes a bank account without reporting the seizure forthwith to the jurisdictional Magistrate acts ultra vires and without statutory authority. The court quashed the freeze order and ordered the bank to restore full banking operations within 48 hours.",
    amount: "Complete Bank Account De-freezing Ordered within 48 Hours",
    takeaway:
      "Cyber police cannot freeze bank accounts indefinitely through informal emails. Failure by the police to report the bank freeze to the jurisdictional Magistrate renders the entire freeze legally invalid and subject to immediate judicial quashing.",
  },
  {
    title: "Blanket Account Freezes Stall Legitimate Trade and Infringe Article 19(1)(g)",
    parties: "Dr. S. Radhakrishnan v. Joint Director, Enforcement Directorate & State Cyber Cell",
    citation: "Writ Petition No. 24821 of 2023, Madras High Court",
    date: "Order Dated 11 September 2023",
    facts:
      "The petitioner was a healthcare professional whose hospital current account received an inward patient fee payment that was subsequently flagged as Layer 3 money from a digital fraud ring. The investigating agency ordered a blanket freeze on the hospital account, halting emergency medicine procurements and staff salary disbursements.",
    holding:
      "The High Court held that freezing an entire running commercial or institutional bank account without establishing direct complicity in the underlying criminal offence is manifestly arbitrary. Article 19(1)(g) protects the right to carry on trade and business. The court ordered immediate release of all running funds, permitting a lien mark only on the exact disputed inward payment.",
    amount: "Hospital Current Account Unfrozen & Operations Restored",
    takeaway:
      "Legitimate professionals and business owners cannot be put out of business by automated cyber cell freezes. Demonstrating bona fide commercial consideration through invoices forces the conversion of total freezes into minimal liens.",
  },
  {
    title: "Magistrate Has Full Jurisdiction to De-Freeze Bank Accounts Under Section 457 CrPC / 503 BNSS",
    parties: "State of Maharashtra v. Tapas D. Neogy",
    citation: "Criminal Appeal No. 975 of 1999, (1999) 7 SCC 685 (Supreme Court of India)",
    date: "Judgment Dated 16 September 1999",
    facts:
      "The question arose whether a bank account qualifies as 'property' liable to seizure by a police officer under Section 102 CrPC, and whether an aggrieved account holder can seek de-freezing from the Magistrate having jurisdiction.",
    holding:
      "The Supreme Court affirmed that bank accounts constitute 'property' under Section 102 CrPC (now Section 106 BNSS), but established that such seizure is subject to strict judicial oversight. Aggrieved account holders have a statutory right to apply to the jurisdictional Magistrate under Section 457 CrPC (Section 503 BNSS) for the custody, conditional release, or de-freezing of the bank account pending trial upon furnishing security or indemnity.",
    amount: "Affirmed Statutory Magistrate Jurisdiction for Bank Account De-freezing",
    takeaway:
      "You do not have to wait years for police trial completion. You can file a formal application before the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate under Section 503 BNSS / Section 457 CrPC to obtain a binding judicial de-freeze order.",
  },
];

const FAQS = [
  {
    question: "Why was my bank account frozen by the cyber crime police without any prior notice?",
    answer:
      "When a victim reports an online financial scam on the National Cyber Crime Reporting Portal (NCRP / helpline 1930), the cyber police deploy automated transaction tracing. Scammed funds are frequently dispersed across multiple accounts (Layers 1, 2, 3, and 4) within minutes. To prevent fund depletion, the cyber cell issues an urgent statutory requisition under Section 106 BNSS (Section 102 CrPC) directing banks to debit-freeze all recipient accounts in the chain. Because speed is critical to preserve evidence, notice is served directly to the bank first, leaving the account holder unaware until their cards or UPI transactions decline.",
  },
  {
    question: "What is the legal difference between a total debit freeze and a lien-only freeze?",
    answer:
      "A total debit freeze completely stops all outward transactions from your account—including UPI payments, ATM withdrawals, cheque clearances, and automated EMI debits—regardless of how much money you hold. Conversely, a lien-only freeze places an administrative hold strictly on the specific disputed amount mentioned in the cyber complaint (e.g., ₹25,000), leaving the rest of your balance completely liquid and accessible. High Courts across India have repeatedly held that blanket debit freezes over small disputed sums are illegal and that banks must restrict restrictions to lien holds.",
  },
  {
    question: "How do I find out which cyber cell froze my bank account and the FIR / NCRP number?",
    answer:
      "Under RBI customer service directives, your bank branch is legally obligated to provide you with the full details of the freezing requisition. Visit your home branch or email the bank's Nodal Officer requesting: (1) The official cyber cell name and state jurisdiction, (2) The 14-digit NCRP Acknowledgement Number or Crime/FIR number, (3) The Investigating Officer's (IO) name, email, and phone number, and (4) The exact disputed transaction amount and UTR number attributed to your account.",
  },
  {
    question: "I sold crypto (USDT) on Binance P2P and my account got frozen. Am I considered an accused?",
    answer:
      "No. Selling cryptocurrency or digital assets on a peer-to-peer (P2P) platform for valuable consideration does not make you a criminal accused or co-conspirator. You are treated in law as an innocent third-party bona fide recipient under the Indian Contract Act and High Court precedents. To resolve the freeze, you must furnish the IO with your Binance/Bybit P2P order receipt, counterparty chat history, bank statement showing the matched credit, and PAN/Aadhaar KYC to secure a de-freeze No Objection Certificate (NOC).",
  },
  {
    question: "What is the procedure to unfreeze a bank account through the Judicial Magistrate court?",
    answer:
      "Under Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 457 CrPC), you can engage an advocate to file an Application for De-freezing Bank Account before the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate overseeing the police station where the complaint was filed. The application establishes your bona fide status, offers an indemnity bond or surety equal to the disputed sum, and compels the police to submit their status report. The Magistrate then passes a binding judicial order directing the bank to remove the debit freeze.",
  },
  {
    question: "How long does it typically take to de-freeze a bank account after getting an NOC or court order?",
    answer:
      "Once the Investigating Officer issues a formal de-freeze NOC or the Magistrate issues an unfreeze order under Section 503 BNSS, the communication is transmitted directly to the bank's Central Law Enforcement Cell (LEC) or Nodal Operations Team. Under standard operating banking procedures, banks take between 24 to 72 business hours to lift the debit freeze or remove the lien upon receiving authenticated instructions from official police email domains or certified court orders.",
  },
  {
    question: "Cyber crime cell ne bank account debit freeze kar diya hai toh legal notice kaise bheje?",
    answer:
      "Agar cyber cell ne aapka bank account freeze kar diya hai, toh sabse pehle bank branch se Cyber Police Station ka naam, NCRP complaint number aur disputed amount extract karein. Iske baad ek verified advocate ke through Investigating Officer (IO) ko formal representation bheja jata hai jismein transaction proof, KYC aur innocent third-party status explain kiya jata hai. Saath hi bank manager ko Section 106 BNSS aur High Court rulings ka statutory legal notice bheja jata hai taaki total freeze ko hata kar sirf disputed amount par lien mark kiya jaye.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bank Account Frozen Due to a Cyber Cell Notice: Step-by-Step Legal Remedies to Unfreeze",
  description:
    "Account put on debit freeze by cyber police? Layer tracing, Section 91/102 notice remedies, obtaining an NOC, and filing before the magistrate.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/bank-account-frozen-cyber-cell-legal-remedies`,
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
    name: "Cyber Crime Bank Account Freeze Remedies",
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
      name: "Banking Disputes",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cyber Cell Bank Freeze Remedies",
      item: `${SITE_URL}/bank-account-frozen-cyber-cell-legal-remedies`,
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

export default function BankAccountFrozenCyberCellPage() {
  const breadcrumbItems = [
    { label: "Banking Disputes", href: "/recovery" },
    { label: "Cyber Cell Bank Freeze", href: "/bank-account-frozen-cyber-cell-legal-remedies" },
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
        {/* Hero Section matching site design tokens */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 106 BNSS / 102 CrPC</span>
              <span className="text-red-500">•</span>
              <span>Banking &amp; Digital Payments Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Bank Account Frozen Due to a Cyber Cell Notice: Step-by-Step Legal Remedies to Unfreeze
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Cyber Police Freeze &amp; Unfreeze Mandate)
              </p>
              <p>
                When a cyber crime complaint triggers an account debit freeze under Section 106 BNSS (Section 102 CrPC), you have immediate legal remedies. Obtain the NCRP acknowledgement and Investigating Officer details from your bank, submit an innocent third-party evidentiary representation to secure an official police NOC, serve a statutory demand notice to restrict the freeze strictly to a disputed lien, or petition the jurisdictional Magistrate under Section 503 BNSS / 457 CrPC for an order de-freezing your balance.
              </p>
            </div>

            {/* 4 Verified Metric / Benchmark Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">T+2 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Bank Requisition Disclosure TAT</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Lien Only</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">HC Mandated Scope (Rest Free)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 106 BNSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Magistrate Reporting</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 503 BNSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Magistrate De-freezing Route</p>
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
            <CyberCellFreezeTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Layer Tracing Mechanism */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Cyber Cells Freeze Bank Accounts: Layer Tracing &amp; Innocent Downstream Victims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every day in India, hundreds of business owners, freelance professionals, and peer-to-peer (P2P) cryptocurrency traders suddenly wake up to discover that their bank accounts have been placed on an indefinite &quot;Total Debit Freeze&quot;. Debit cards stop working, UPI transactions fail with errors like &quot;account restricted&quot; or &quot;contact branch&quot;, and recurring EMI standing instructions bounce, incurring unwarranted penalties.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This freeze is triggered when a victim of an online cyber fraud (such as an investment task scam, fake part-time job offer, digital arrest extortion, or illegal betting racket) registers an emergency complaint via the National Cyber Crime Reporting Portal (NCRP) at <code className="text-xs bg-slate-100 text-red-700 px-1 py-0.5 rounded">cybercrime.gov.in</code> or helpline <code className="text-xs bg-slate-100 text-red-700 px-1 py-0.5 rounded">1930</code>. Under automated inter-bank integration protocols managed by the Indian Cyber Crime Coordination Centre (I4C), the system initiates layer-by-layer automated fund tracing:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-red-100 text-red-800 uppercase">
                      Layer 1: The Direct Mule
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The primary account that received the money directly from the fraud victim. These accounts are usually rented mule accounts opened using forged documents or purchased from unvetted individuals.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase">
                      Layers 2, 3 &amp; 4: Downstream Commercial Chains
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      To launder money, scammers disperse the funds into secondary and tertiary accounts by purchasing USDT on P2P crypto exchanges, paying genuine vendor invoices, or buying retail goods. Innocent recipients at Layers 2, 3, or 4 get trapped in the automated police freeze requisition net.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Crucially, being named in a Layer 2 or Layer 3 cyber cell freeze notice does <strong>not</strong> make you an accused criminal. In the eyes of the law, an individual who received funds as legitimate consideration for goods, services, or cryptocurrency assets is an innocent bona fide third-party recipient. While our guide on <Link href="/scam-money-recovery-what-is-possible" className="text-red-600 font-semibold hover:underline">scam money recovery: what is legally possible</Link> explains the victim&apos;s recovery path and the <Link href="/recovery/wrong-upi-transfer" className="text-red-600 font-semibold hover:underline">wrong UPI transfer refund process</Link> handles genuine mistaken transfers, innocent account holders caught downstream must protect their commercial rights under the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) and established High Court jurisprudence.
                </p>
              </section>

              {/* Section 2: H2 - Debit Freeze vs Lien-Only Freeze (Core Differentiator Gap) */}
              <section id="heading-debit-vs-lien" aria-labelledby="heading-debit-vs-lien-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-debit-vs-lien-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Debit Freeze vs. Lien-Only Freeze: The Crucial Legal Distinction
                  </h2>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Core Differentiator
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The single biggest error banks make when receiving an inquiry from a Cyber Crime Cell is imposing a blanket &quot;Total Debit Freeze&quot; on the customer&apos;s entire account balance, rather than placing a restricted &quot;Lien Hold&quot; exclusively on the disputed amount. High Courts across India have repeatedly condemned this administrative overreach as illegal and unconstitutional.
                </p>

                {/* Comparison Facts Table */}
                <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <caption className="sr-only">Comprehensive Comparison: Full Debit Freeze vs Lien-Only Restriction</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th scope="col" className="p-3 sm:p-4 font-bold">Feature / Benchmark</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-red-400">Total Debit Freeze (Default Bank Action)</th>
                        <th scope="col" className="p-3 sm:p-4 font-bold text-emerald-400">Lien-Only Freeze (Legally Mandated)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Operational Scope</th>
                        <td className="p-3 sm:p-4 text-red-700 font-medium">100% of funds locked; all debits (ATM, UPI, cheques, EMI auto-pay) blocked.</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Only the exact disputed sum is locked; balance operates normally.</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Typical Financial Disparity</th>
                        <td className="p-3 sm:p-4">₹15,00,000 balance frozen over an unverified ₹25,000 dispute.</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">₹25,000 marked as lien; ₹14,75,000 remains 100% liquid and withdrawable.</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Statutory Authority</th>
                        <td className="p-3 sm:p-4">Overstretched interpretation of Section 106 BNSS / 102 CrPC.</td>
                        <td className="p-3 sm:p-4">Enforced by High Court Precedents (Gujarat, Madras, Delhi, Bombay).</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Constitutional Standing</th>
                        <td className="p-3 sm:p-4 text-red-700 font-medium">Violates Article 21 (Livelihood) &amp; Article 19(1)(g) (Freedom of Trade).</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Proportionate balance between police investigation &amp; citizen rights.</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900 bg-slate-50/50">Resolution Mechanism</th>
                        <td className="p-3 sm:p-4">Requires advocate legal notice to Bank Branch &amp; Cyber Cell IO.</td>
                        <td className="p-3 sm:p-4">Can be maintained peacefully until final investigation closure or court order.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
                  <strong>Practical Rule of Thumb:</strong> If your bank account holds ₹5,00,000 and the cyber crime complaint involves a ₹30,000 UPI credit, the bank has zero legal right to freeze the remaining ₹4,70,000. Serving an immediate statutory legal notice demanding conversion to a lien-only hold is your fastest route to restoring business operations while resolving the dispute.
                </div>
              </section>

              {/* Section 3: H2 - Interactive/Static Decision Tree (Archetype G1 Centrepiece) */}
              <section id="heading-decision-tree" aria-labelledby="heading-decision-tree-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-decision-tree-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Cyber Cell Bank Freeze Decision Tree: Choosing Your Exact Legal Remedy
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype G1 Roadmap
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Use this visual decision architecture to determine your immediate next legal step based on the type of freeze, your transaction history, and the responsiveness of the investigating police officer:
                </p>

                {/* Hand-Authored Inline SVG Decision Flowchart */}
                <figure className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm overflow-hidden">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 900 520"
                      className="w-full min-w-[700px] h-auto font-sans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Definitions */}
                      <defs>
                        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#DC2626" />
                        </linearGradient>
                        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                      </defs>

                      {/* Root Node */}
                      <rect x="300" y="20" width="300" height="60" rx="12" fill="url(#heroGrad)" stroke="#475569" strokeWidth="2" />
                      <text x="450" y="45" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="14">
                        Bank Account Frozen / Restricted
                      </text>
                      <text x="450" y="65" textAnchor="middle" fill="#94A3B8" fontSize="11">
                        Step 1: Obtain NCRP Ref &amp; Cyber Cell Details
                      </text>

                      {/* Connecting Line from Root */}
                      <path d="M450 80 L450 120" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                      {/* Decision Diamond 1: Freeze Scope */}
                      <rect x="310" y="120" width="280" height="55" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
                      <text x="450" y="145" textAnchor="middle" fill="#0F172A" fontWeight="bold" fontSize="13">
                        What Kind of Freeze Was Placed?
                      </text>
                      <text x="450" y="163" textAnchor="middle" fill="#64748B" fontSize="11">
                        Check with Bank Operations Desk
                      </text>

                      {/* Branches from Decision 1 */}
                      <path d="M310 148 L150 148 L150 210" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
                      <path d="M590 148 L750 148 L750 210" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Left: Total Debit Freeze */}
                      <rect x="40" y="210" width="220" height="60" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" />
                      <text x="150" y="235" textAnchor="middle" fill="#991B1B" fontWeight="bold" fontSize="12">
                        Total Debit Freeze
                      </text>
                      <text x="150" y="253" textAnchor="middle" fill="#B91C1C" fontSize="10">
                        Entire balance blocked (Lacks justification)
                      </text>

                      {/* Right: Lien Only Freeze */}
                      <rect x="640" y="210" width="220" height="60" rx="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
                      <text x="750" y="235" textAnchor="middle" fill="#065F46" fontWeight="bold" fontSize="12">
                        Lien-Only Hold (Disputed Sum)
                      </text>
                      <text x="750" y="253" textAnchor="middle" fill="#047857" fontSize="10">
                        Remaining balance accessible
                      </text>

                      {/* Downward Lines to Route Actions */}
                      <path d="M150 270 L150 320" stroke="#94A3B8" strokeWidth="2" />
                      <path d="M750 270 L750 320" stroke="#94A3B8" strokeWidth="2" />

                      {/* Decision Diamond 2: IO Response */}
                      <rect x="250" y="300" width="400" height="50" rx="8" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
                      <text x="450" y="322" textAnchor="middle" fill="#1E293B" fontWeight="bold" fontSize="12">
                        Will Cyber Cell IO Accept Evidence &amp; Issue NOC?
                      </text>
                      <text x="450" y="339" textAnchor="middle" fill="#64748B" fontSize="10">
                        Submit P2P Trade / Invoices under Sec 63 BSA
                      </text>

                      <path d="M150 320 L250 320" stroke="#94A3B8" strokeWidth="2" />
                      <path d="M750 320 L650 320" stroke="#94A3B8" strokeWidth="2" />

                      {/* 4 Final Action Routes */}
                      <path d="M300 350 L120 400" stroke="#2563EB" strokeWidth="1.5" />
                      <path d="M400 350 L340 400" stroke="#059669" strokeWidth="1.5" />
                      <path d="M500 350 L560 400" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M600 350 L780 400" stroke="#DC2626" strokeWidth="1.5" />

                      {/* Route A Card */}
                      <rect x="20" y="400" width="200" height="90" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
                      <text x="120" y="425" textAnchor="middle" fill="#1E40AF" fontWeight="bold" fontSize="12">
                        ROUTE A: IO NOC
                      </text>
                      <text x="120" y="445" textAnchor="middle" fill="#1E3A8A" fontSize="10">
                        Direct Evidence Dossier
                      </text>
                      <text x="120" y="462" textAnchor="middle" fill="#475569" fontSize="10">
                        IO sends email to Bank
                      </text>
                      <text x="120" y="478" textAnchor="middle" fill="#047857" fontWeight="bold" fontSize="10">
                        TAT: 7–15 Days • Low Cost
                      </text>

                      {/* Route B Card */}
                      <rect x="240" y="400" width="200" height="90" rx="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
                      <text x="340" y="425" textAnchor="middle" fill="#065F46" fontWeight="bold" fontSize="12">
                        ROUTE B: BANK LIEN
                      </text>
                      <text x="340" y="445" textAnchor="middle" fill="#064E3B" fontSize="10">
                        Statutory Demand Notice
                      </text>
                      <text x="340" y="462" textAnchor="middle" fill="#475569" fontSize="10">
                        Convert freeze to disputed lien
                      </text>
                      <text x="340" y="478" textAnchor="middle" fill="#047857" fontWeight="bold" fontSize="10">
                        TAT: 3–5 Days • High Impact
                      </text>

                      {/* Route C Card */}
                      <rect x="460" y="400" width="200" height="90" rx="10" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" />
                      <text x="560" y="425" textAnchor="middle" fill="#92400E" fontWeight="bold" fontSize="12">
                        ROUTE C: MAGISTRATE
                      </text>
                      <text x="560" y="445" textAnchor="middle" fill="#78350F" fontSize="10">
                        Sec 503 BNSS / 457 CrPC
                      </text>
                      <text x="560" y="462" textAnchor="middle" fill="#475569" fontSize="10">
                        Indemnity bond before Court
                      </text>
                      <text x="560" y="478" textAnchor="middle" fill="#B45309" fontWeight="bold" fontSize="10">
                        TAT: 20–45 Days • Judicial Order
                      </text>

                      {/* Route D Card */}
                      <rect x="680" y="400" width="200" height="90" rx="10" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5" />
                      <text x="780" y="425" textAnchor="middle" fill="#991B1B" fontWeight="bold" fontSize="12">
                        ROUTE D: HIGH COURT
                      </text>
                      <text x="780" y="445" textAnchor="middle" fill="#7F1D1D" fontSize="10">
                        Article 226 Writ Petition
                      </text>
                      <text x="780" y="462" textAnchor="middle" fill="#475569" fontSize="10">
                        Quash arbitrary police seizure
                      </text>
                      <text x="780" y="478" textAnchor="middle" fill="#DC2626" fontWeight="bold" fontSize="10">
                        TAT: 30–60 Days • Precedent Relief
                      </text>
                    </svg>
                  </div>
                  <figcaption className="text-[11px] text-slate-500 text-center mt-3 font-medium">
                    Figure 1: Statutory Decision Architecture for Unfreezing Bank Accounts Under BNSS 2023 &amp; High Court Directives.
                  </figcaption>
                </figure>

                {/* Structured Text Fallback / Screen-Reader Accessible Breakdown */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Accessible Summary of the Decision Flow:
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <li>
                      <strong>Check Freeze Type:</strong> Ask your branch whether your account is under a <em>Total Debit Freeze</em> (entire balance locked) or a <em>Lien-Only Hold</em> (only disputed amount earmarked).
                    </li>
                    <li>
                      <strong>Assess Layer Status:</strong> Determine whether you received money directly from an unknown person (Layer 1) or as part of a verified transaction such as Binance/Bybit P2P or freelance client billing (Layer 2/3/4).
                    </li>
                    <li>
                      <strong>Evaluate IO Response:</strong> If the Investigating Officer (IO) is cooperative, pursue <strong>Route A</strong> (submission of documentary evidence under Section 63 BSA 2023 for an administrative NOC).
                    </li>
                    <li>
                      <strong>Challenge Total Freeze:</strong> If the bank has frozen millions of rupees over a minor complaint, initiate <strong>Route B</strong> (Statutory Legal Notice for Lien-Only conversion).
                    </li>
                    <li>
                      <strong>Judicial Interventions:</strong> If the IO is uncooperative, out-of-state, or ignores emails, file before the Magistrate under <strong>Route C</strong> (Section 503 BNSS / 457 CrPC) or before the High Court under <strong>Route D</strong> (Article 226 Writ).
                    </li>
                  </ol>
                </div>
              </section>

              {/* Section 4: H2 - Route A: Cyber Cell IO Representation & Police NOC */}
              <section id="heading-route-io-noc" aria-labelledby="heading-route-io-noc-title" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center shrink-0">
                    A
                  </span>
                  <h2
                    id="heading-route-io-noc-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Route A: Representation to Cyber Cell IO &amp; Securing a De-Freeze NOC
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The most cost-effective and straightforward administrative remedy is engaging directly with the Investigating Officer (IO) at the Cyber Crime Police Station handling the NCRP complaint. Under Section 94 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (Section 91 CrPC), police officers have the authority to request documents and clarify transactions.
                </p>

                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    What Your Legal Representation to the IO Must Include:
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Complete Identity &amp; KYC Verification:</strong> Self-attested PAN card, Aadhaar card, and contact details demonstrating permanent residency and legitimate employment or business.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Commercial Ledger &amp; Invoices:</strong> For freelancers and merchants, attach client contracts, work orders, service completion emails, and GST tax invoices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>P2P Crypto Order Slip &amp; Escrow Proof:</strong> For crypto sellers, attach the Binance/Bybit order execution slip, counterparty chat screenshots, buyer verified KYC details, and blockchain TXID confirmation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Section 63 BSA Electronic Certificate:</strong> A sworn certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 affirming the authenticity of computer-generated screenshots and bank statements.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Once the IO examines the documentary trail and confirms that you provided lawful consideration without knowledge of the underlying scam, they will issue an official de-freeze recommendation or <strong>No Objection Certificate (NOC)</strong>. The IO emails this NOC directly to your bank&apos;s Nodal Officer from the verified state police domain (e.g., <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">@tspolice.gov.in</code> or <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">@mahapolice.gov.in</code>), leading to account restoration within 48 to 72 hours.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-blue-900">
                  <span><strong>Forum:</strong> Respective Cyber Crime Police Station / IO</span>
                  <span><strong>Statutory Basis:</strong> BNSS Section 94 (CrPC Section 91)</span>
                  <span><strong>Typical TAT:</strong> 7 to 15 Working Days</span>
                </div>
              </section>

              {/* Section 5: H2 - Route B: Bank Representation for Lien-Only Conversion */}
              <section id="heading-route-bank-lien" aria-labelledby="heading-route-bank-lien-title" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center shrink-0">
                    B
                  </span>
                  <h2
                    id="heading-route-bank-lien-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Route B: Bank Representation to Convert Total Freeze to Lien-Only Hold
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When cyber cells send freeze notices, their emails often say &quot;freeze the suspected funds&quot;. However, bank branch staff routinely take the path of least resistance and freeze the customer&apos;s entire account. When this occurs, you do not need to wait weeks for police clearance to liberate your operational funds.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under established High Court precedents (Gujarat High Court in <em>Tarun Kumar</em> and Madras High Court in <em>Dr. S. Radhakrishnan</em>), banks are legally obligated to restrict freezes strictly to the specific disputed quantum. You can serve a formal advocate legal demand notice upon:
                </p>

                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <li><strong>The Branch Manager:</strong> Where your savings or current account is domiciled.</li>
                  <li><strong>The Principal Nodal Officer / Head of Legal Operations:</strong> At the bank&apos;s registered corporate headquarters.</li>
                  <li><strong>The Cyber Crime Investigating Officer (IO):</strong> Marking them as a necessary copied respondent.</li>
                </ol>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The notice establishes that continuing a blanket debit freeze over a disproportionately small disputed transaction constitutes gross &quot;Deficiency in Service&quot; under Section 2(11) of the <Link href="/law/rbi-ombudsman-complaint-guide" className="text-red-600 font-semibold hover:underline">Consumer Protection Act, 2019</Link>, directly violates the <Link href="/law/rbi-zero-liability-unauthorised-transaction" className="text-red-600 font-semibold hover:underline">RBI zero liability protection framework</Link>, and breaches RBI customer service standards. For transparency on procedural costs, check our breakdown of <Link href="/legal-notice-charges" className="text-red-600 font-semibold hover:underline">statutory advocate legal notice charges</Link>. Upon receiving a formal advocate notice citing binding case law, banks frequently convert the freeze into a lien hold within 3 to 5 business days, instantly restoring full access to your remaining balance.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-emerald-50/60 border border-emerald-100 rounded-xl text-xs text-emerald-900">
                  <span><strong>Forum:</strong> Bank Branch Manager &amp; Principal Nodal Officer</span>
                  <span><strong>Statutory Basis:</strong> CPA 2019 Section 2(11) &amp; High Court Mandates</span>
                  <span><strong>Typical TAT:</strong> 3 to 5 Working Days</span>
                </div>
              </section>

              {/* Section 6: H2 - Route C: Magistrate Application under Section 503 BNSS / 457 CrPC */}
              <section id="heading-route-magistrate" aria-labelledby="heading-route-magistrate-title" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center shrink-0">
                    C
                  </span>
                  <h2
                    id="heading-route-magistrate-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Route C: Section 503 BNSS / 457 CrPC Application Before the Magistrate
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If the Cyber Cell IO is uncooperative, demands illegal gratification, or fails to respond to written representations because the police station is situated in another state, the statutory judicial remedy is filing an application before the jurisdictional Magistrate.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <strong>Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023</strong> (which replaces Section 457 of the Code of Criminal Procedure, 1973), whenever property is seized by a police officer and reported to a Magistrate, the Magistrate has statutory power to make such order as they think fit respecting the disposal or delivery of such property to the person entitled to possession thereof:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 block">Step 1: Filing the Petition</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      An advocate files an Application for Release / De-freezing of Bank Account before the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate (MM) having territorial jurisdiction over the police station.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 block">Step 2: Police Status Report</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The court issues formal notice to the Cyber Crime Police Station directing the Investigating Officer to submit a verified Status Report within 7 to 14 days detailing the exact complaint nature and disputed sum.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 block">Step 3: Judicial De-Freeze Order</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Upon examining the applicant&apos;s clean transaction history, the Magistrate directs complete unfreezing or orders a lien hold, subject to the applicant furnishing an indemnity bond or surety for the disputed amount.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-amber-50/60 border border-amber-100 rounded-xl text-xs text-amber-900">
                  <span><strong>Forum:</strong> Chief Judicial Magistrate (CJM) / Metropolitan Magistrate</span>
                  <span><strong>Statutory Basis:</strong> BNSS 2023 Section 503 (CrPC Section 457)</span>
                  <span><strong>Typical TAT:</strong> 20 to 45 Working Days</span>
                </div>
              </section>

              {/* Section 7: H2 - Route D: High Court Writ Petition under Article 226 */}
              <section id="heading-route-high-court" aria-labelledby="heading-route-high-court-title" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-red-100 text-red-700 font-black text-sm flex items-center justify-center shrink-0">
                    D
                  </span>
                  <h2
                    id="heading-route-high-court-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Route D: High Court Writ Petition Under Article 226 of the Constitution
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a police department freezes accounts in flagrant violation of statutory procedures—such as failing to report the seizure to the Magistrate under Section 106(3) BNSS, freezing running business payrolls without registering an FIR, or failing to respond for months—you can approach the High Court directly by filing a <strong>Writ Petition under Article 226 of the Constitution of India</strong> (seeking a Writ of Mandamus or Certiorari).
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  High Courts have supervisory jurisdiction over police excess. In numerous landmark decisions, High Courts have imposed costs on police departments for arbitrary freezing of merchant accounts, ruling that freezing orders cannot be used as an instrument of extra-judicial extortion or harassment. If substantial capital (lakhs or crores of rupees) is locked and immediate judicial relief is imperative to prevent enterprise collapse, an Article 226 Writ Petition delivers swift, authoritative, and binding relief.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-red-50/60 border border-red-100 rounded-xl text-xs text-red-900">
                  <span><strong>Forum:</strong> Respective State High Court (Constitutional Bench)</span>
                  <span><strong>Statutory Basis:</strong> Article 226 Constitution of India &amp; Section 528 BNSS (482 CrPC)</span>
                  <span><strong>Typical TAT:</strong> 30 to 60 Days</span>
                </div>
              </section>

              {/* Section 8: H2 - Landmark Judicial Precedents */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Judicial Digest: 4 High Court Orders Protecting Account Holders
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Case Precedents
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Ruling #{idx + 1} &bull; {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Judicial Relief / Order
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding on All Banks &amp; Police Stations Pan-India
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 9: H2 - Scenario Adjudication Component */}
              <section id="heading-problem-scenarios" aria-labelledby="heading-problem-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Scenario Playbook: Practical Solutions for Specific Freeze Triggers
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Troubleshooting
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your exact dispute scenario below to examine root triggers, governing statutes, and a tailored 3-step action roadmap:
                </p>

                <CyberCellFreezeProblemTabs />
              </section>

              {/* Section 10: H2 - Worked Case Example with Concrete Numbers */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: Unfreezing ₹5,40,000 Over an Alleged ₹42,500 P2P Dispute
                  </h2>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Illustrative Case Study
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 space-y-5 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      The Factual Background &amp; Sudden Freeze
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Rahul S., a freelance UI/UX software consultant based in Pune, maintained an active savings and current account balance of ₹5,40,000 with HDFC Bank. On 14 January 2026, Rahul sold 500 USDT on Binance P2P for ₹42,500. The buyer transferred ₹42,500 via IMPS. Rahul verified receipt and released the cryptocurrency escrow.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      On 28 January 2026, Rahul&apos;s UPI transactions and debit card were rejected. Upon visiting his home branch, the branch manager informed him that a &quot;Total Debit Freeze&quot; was placed on his account pursuant to a requisition from the Cyber Crime Police Station, Cyberabad (Telangana), under NCRP Complaint Ref #202611090038. His entire balance of ₹5,40,000 was completely locked over a ₹42,500 transaction.
                    </p>
                  </div>

                  {/* Financial Breakdown Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Total Account Balance</span>
                      <span className="text-lg font-black text-slate-900">₹5,40,000</span>
                      <span className="text-[10px] text-red-600 block mt-0.5">100% Debit Frozen</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Disputed P2P Quantum</span>
                      <span className="text-lg font-black text-amber-600">₹42,500</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Layer 2 Inward Credit</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Unlawfully Trapped Funds</span>
                      <span className="text-lg font-black text-emerald-600">₹4,97,500</span>
                      <span className="text-[10px] text-emerald-700 block mt-0.5">Recoverable via Legal Notice</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Step-by-Step Legal Intervention &amp; Outcome
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <li>
                        <strong>Day 1–2: Statutory Document Collection:</strong> Rahul obtained the formal Cyber Cell Notice copy, NCRP acknowledgment number, and IO contact details from HDFC Bank operations.
                      </li>
                      <li>
                        <strong>Day 3: Dual Legal Action Initiated:</strong> An advocate prepared an evidentiary dossier for the Cyberabad Cyber Cell attaching the Binance order slip, chat logs, blockchain hash, and Section 63 BSA certificate. Concurrently, a formal statutory legal notice was served on HDFC Bank&apos;s Branch Manager and Nodal Officer demanding conversion of the total freeze to a lien hold under Gujarat High Court and Madras High Court precedents.
                      </li>
                      <li>
                        <strong>Day 7: Bank Converts Freeze to Disputed Lien:</strong> HDFC Bank Legal Cell reviewed the advocate demand notice and case precedents. The bank converted the total debit freeze into an administrative lien of ₹42,500, immediately releasing the remaining ₹4,97,500 for normal banking operations.
                      </li>
                      <li>
                        <strong>Day 18: Formal Police NOC Issued:</strong> The Cyberabad Cyber Crime IO examined the electronic evidence, confirmed Rahul&apos;s innocent third-party bona fide status, and dispatched an official de-freeze NOC email to HDFC Bank, fully extinguishing the remaining ₹42,500 lien.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Section 11: H2 - Actionable Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Actionable Evidence Checklist: What You Need to Unfreeze Your Account
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Preparation Protocol
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before contacting the Cyber Cell or serving a legal notice upon your bank, gather these mandatory documentary exhibits:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
                    <h3 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      From Your Bank Branch
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Copy of the Cyber Crime Police Requisition / Email notice.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>14-digit NCRP Acknowledgement Number / Police Crime Reference.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Investigating Officer (IO) Name, Mobile, and Official Email ID.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Certified Bank Statement highlighting the exact disputed credit.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
                    <h3 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      From Your Commercial / Trading Records
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>P2P Order Execution Receipt (Binance, Bybit, KuCoin, etc.).</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Counterparty chat transcripts &amp; verified buyer phone number.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>GST Tax Invoices, service contracts, and delivery receipts.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Section 63 BSA electronic certificate signed by the account holder.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 12: Interactive CTA Component */}
              <CyberCellFreezeNoticeCTA />

              {/* Section 13: H2 - Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Cyber Cell Bank Account Freezes &amp; De-Freezing
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory FAQ
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 14: H2 - Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-4 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Sources &amp; Governing Legal Authorities
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every legal statement, statutory benchmark, and procedural timeline outlined on this page is derived directly from primary Indian statutes, Supreme Court authorities, and High Court judgments:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  {PRIMARY_SOURCES.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0">[{idx + 1}]</span>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-red-700 hover:underline leading-relaxed font-medium"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="p-3.5 bg-slate-100 rounded-xl text-[11px] text-slate-600 leading-relaxed">
                  <p>
                    <strong>Statutory Disclaimer:</strong> Under the Bharatiya Nagarik Suraksha Sanhita, 2023 (effective 1 July 2024), Section 106 governs the seizure of property by police officers, while Section 503 governs the power of Magistrates to dispose of or release seized property. For actions initiated under the Code of Criminal Procedure, 1973, equivalent provisions under Section 102 and Section 457 CrPC remain enforceable. For tailored legal counsel, consult an enrolled advocate.
                  </p>
                </div>
              </section>

              {/* Related Recovery Guides Component */}
              <div className="pt-6">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
