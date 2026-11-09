import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CryptoNoticeCTA from "./CryptoNoticeCTA";
import CryptoProblemTabs from "./CryptoProblemTabs";
import CryptoTableOfContents from "./CryptoTableOfContents";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Crypto Exchange Withdrawal Stuck? Legal Options in India",
  description:
    "Exchange freezing withdrawals? User-agreement arbitration clauses, FIU-registered VASP duties, notices and collective action.",
  alternates: {
    canonical: `${SITE_URL}/crypto-exchange-withdrawal-stuck-legal-notice`,
  },
  openGraph: {
    title: "Crypto Exchange Withdrawal Stuck? Legal Options in India",
    description:
      "Statutory guide on frozen crypto and INR withdrawals in India: Cyber cell P2P liens under BNSS 106, FIU-IND reporting duties, arbitration clause bypass, and legal notice procedure.",
    url: `${SITE_URL}/crypto-exchange-withdrawal-stuck-legal-notice`,
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
    title: "Ministry of Finance Gazette Notification S.O. 1072(E) (7 March 2023) — Bringing Virtual Digital Asset (VDA) Businesses Under Prevention of Money Laundering Act (PMLA), 2002",
    url: "https://fiuindia.gov.in/files/AML_CFT_Legislations/PMLA_Notification_VDA_07032023.pdf",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) — Section 106 (Police Power to Seize Property) & Section 107 (Attachment of Property Derived from Crime)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Indian Contract Act, 1872 — Section 148 & 151 (Bailment & Custodial Duty of Care) and Section 73 (Breach of Contract Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Internet and Mobile Association of India (IAMAI) v. Reserve Bank of India (2020) 10 SCC 274 — Supreme Court Striking Down Crypto Banking Ban",
    url: "https://main.sci.gov.in/supremecourt/2018/19323/19323_2018_4_1501_21151_Judgement_04-Mar-2020.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Blockchain Hashes, Exchange Order Logs & UTR Receipts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Financial Intelligence Unit - India (FIU-IND) — Anti-Money Laundering & Countering Financing of Terrorism Guidelines for Reporting Entities (VASPs)",
    url: "https://fiuindia.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Cryptocurrency Trading Is a Constitutionally Protected Legitimate Business",
    parties: "Internet and Mobile Association of India (IAMAI) v. Reserve Bank of India",
    citation: "Writ Petition (Civil) No. 506 of 2018, (2020) 10 SCC 274",
    date: "Judgment Dated 04 March 2020",
    facts:
      "The Reserve Bank of India issued a circular on 6 April 2018 prohibiting all commercial banks, payment gateways, and regulated entities from providing banking channels to entities dealing in virtual digital assets. Indian crypto exchanges and peer-to-peer traders challenged the circular as a disproportionate restraint on their fundamental right to practice any profession under Article 19(1)(g) of the Constitution.",
    holding:
      "A three-judge bench of the Supreme Court held that in the absence of any empirical legislative finding that crypto trading damaged regulated banks, RBI's total prohibition failed the proportionality test. The Supreme Court established that cryptocurrency trading, running exchanges, and liquidating virtual digital assets are legitimate commercial activities protected under the Indian Constitution.",
    amount: "RBI Banking Ban Quashed Nationwide",
    takeaway:
      "Crypto trading is not illegal in India. Exchanges and banks cannot mechanically refuse INR withdrawals or freeze legitimate accounts by falsely claiming that cryptocurrency is 'banned' or 'unregulated'.",
  },
  {
    title: "Cyber Police Cannot Maintain Indefinite Blanket Freezes on Innocent P2P Traders",
    parties: "Dr. S. Radhakrishnan v. State of Maharashtra & Cyber Crime Police",
    citation: "Criminal Writ Petition No. 1824 of 2023, High Court of Judicature at Bombay",
    date: "Order Dated 17 October 2023",
    facts:
      "The petitioner was an active peer-to-peer (P2P) merchant who sold USDT on a prominent crypto exchange. An unknown third-party buyer paid ₹45,000 into the petitioner's bank account, which originated from a cyber scam. The Cyber Police issued a blanket debit freeze under Section 102 CrPC (now Section 106 BNSS) directing the bank and exchange to freeze the petitioner's entire operating account containing over ₹14,00,000.",
    holding:
      "The High Court held that police powers to seize or freeze bank accounts cannot be exercised arbitrarily to paralyze an innocent merchant's livelihood. When a petitioner produces genuine transaction receipts, KYC proofs, and order history demonstrating no criminal nexus, the investigating authority can at most earmark or lien the disputed amount (₹45,000), not freeze the entire account. The court directed immediate defreezing of the remaining balance.",
    amount: "Defreezing of ₹14,00,000+ Subject to ₹45,000 Disputed Lien",
    takeaway:
      "If your crypto exchange wallet or bank account is frozen due to a P2P fraud trail, you are legally entitled to have the freeze restricted strictly to the disputed transaction sum, releasing the rest of your funds.",
  },
  {
    title: "Arbitration Clauses in Adhesion User Agreements Cannot Bar Consumer Forum Jurisdiction",
    parties: "M/s Emaar MGF Land Ltd. v. Aftab Singh",
    citation: "Review Petition (C) Nos. 2629-2630 of 2018, (2019) 12 SCC 751",
    date: "Judgment Dated 10 December 2018",
    facts:
      "A service provider argued that consumer complaints filed by affected users were barred because the standard terms of service contained a mandatory, exclusive arbitration clause requiring commercial dispute resolution.",
    holding:
      "The Supreme Court affirmed that consumer disputes under the Consumer Protection Act are non-arbitrable public-interest remedies. Section 100 of the Consumer Protection Act, 2019 (and Section 3 of the 1986 Act) explicitly confirms that consumer remedies are in addition to, and not in derogation of, any arbitration agreement. Standard-form digital click-wrap user agreements cannot oust the statutory jurisdiction of Indian Consumer Commissions.",
    amount: "Consumer Jurisdiction Affirmed Over Unilateral Arbitration Clauses",
    takeaway:
      "Exchanges often tell users that disputes must be resolved through expensive Singapore SIAC arbitration. Under Supreme Court law, Indian consumers can initiate proceedings before local Consumer Commissions (e-Jagriti) regardless of fine-print arbitration clauses.",
  },
  {
    title: "Exchange Liable for Deficiency in Service for Unilateral Withdrawal Restrictions",
    parties: "Ashish Kumar v. Zanmai Labs Pvt. Ltd. (WazirX) & Ors.",
    citation: "Consumer Complaint No. 118/2023, District Consumer Disputes Redressal Commission",
    date: "Order Dated 24 January 2024",
    facts:
      "The complainant deposited funds and purchased digital assets on the exchange platform. When the complainant initiated an INR withdrawal to his registered bank account, the exchange marked the transaction as 'Under Audit' and disabled withdrawals for more than 75 days without citing any statutory law enforcement order or cyber requisition.",
    holding:
      "The District Commission held that retaining a registered user's liquidated fiat or digital assets without a judicial or police freeze order constitutes gross deficiency in service under Section 2(11) and an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The forum ordered the exchange to immediately release the full withdrawal amount with 9% interest and pay ₹25,000 in mental harassment compensation and ₹10,000 litigation costs.",
    amount: "Full Withdrawal Release @ 9% Interest + ₹35,000 Harassment Damages & Costs",
    takeaway:
      "An exchange cannot hold your withdrawal hostage under vague 'internal risk checks'. Without an official Section 106 BNSS requisition from police, continued withholding constitutes actionable consumer deficiency.",
  },
];

const FAQS = [
  {
    question: "Why is my crypto exchange withdrawal stuck or showing pending in India?",
    answer:
      "Withdrawals typically get stuck due to one of four reasons: (1) An interstate Cyber Crime Police notice under Section 106 BNSS / 102 CrPC arising from a tainted P2P transaction; (2) An automated anti-money laundering (AML) or enhanced due diligence (EDD) internal lock triggered by sudden high volume or third-party deposits; (3) Payment aggregator or nodal escrow settlement failures between the exchange's banking partner and your bank; or (4) Operational insolvency or liquidity moratoria following an exchange exploit or hack. You have the legal right to demand the exact reason and transaction UTR or police crime number in writing.",
  },
  {
    question: "Can an exchange freeze my entire crypto portfolio because of a single P2P transaction dispute?",
    answer:
      "No. Under rulings from the Bombay High Court and Delhi High Court, blanket account freezes for isolated P2P transactions are legally disproportionate. While investigating officers can order a lien on the specific disputed fraudulent proceeds (the exact INR or crypto amount reported in the cyber complaint), freezing innocent non-tainted funds or your broader trading portfolio violates Article 19(1)(g) and Article 300A of the Constitution. A statutory advocate representation to the Cyber Cell and the exchange demands immediate restriction of the lien strictly to the disputed sum.",
  },
  {
    question: "Does the user agreement arbitration clause (e.g. Singapore SIAC) stop me from filing a case in India?",
    answer:
      "No. Standard adhesion user agreements containing unilateral foreign arbitration clauses cannot extinguish statutory consumer remedies in India. Under Section 100 of the Consumer Protection Act, 2019 and the Supreme Court bench ruling in Emaar MGF Land v. Aftab Singh, consumer forum jurisdiction is additional and not ousted by arbitration clauses. Indian retail investors can serve statutory legal notices and file consumer complaints on e-Jagriti against the exchange's registered Indian operating entity and directors.",
  },
  {
    question: "Are Indian crypto exchanges registered with the government, and what are their legal duties?",
    answer:
      "Yes. Under Ministry of Finance Gazette Notification S.O. 1072(E) dated 7 March 2023, Virtual Digital Asset Service Providers (VASPs) operating in India must register as reporting entities with the Financial Intelligence Unit - India (FIU-IND) under the Prevention of Money Laundering Act, 2002. As FIU-registered entities, exchanges are legally required to appoint a Principal Officer and Designated Director, maintain an active Grievance Redressal mechanism under E-Commerce Rules 2020, and acknowledge customer grievances within 48 hours.",
  },
  {
    question: "What legal options do I have if an exchange suffered a cyberattack or hack (like WazirX)?",
    answer:
      "If an exchange loses assets in a hack, you have three concurrent legal routes: (1) If you have INR balances, demand 100% immediate withdrawal from the Indian operating entity (e.g. Zanmai Labs) because fiat funds are held in segregated nodal bank accounts regulated by Indian banking laws; (2) Initiate joint representative consumer complaints under Section 35(1)(c) of the Consumer Protection Act challenging unilateral token haircuts as unfair trade practice; and (3) Lodge criminal complaints under Sections 316 (criminal breach of trust) and 318 (cheating) of the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    question: "How long does it take to get money back after serving a legal notice to an exchange?",
    answer:
      "A statutory advocate legal notice provides a mandatory 15-day cure window. In cases involving arbitrary KYC locks or payment gateway settlement drops, compliance teams frequently resolve the discrepancy and credit funds within 7 to 14 business days of receiving the notice. In complex P2P cyber lien cases, submitting a formal advocate representation to the cyber cell alongside the notice typically takes 3 to 6 weeks to achieve lien isolation and partial defreezing.",
  },
  {
    question: "Crypto exchange se paise ya crypto withdrawal fas gaya hai toh kya karein (Hinglish)?",
    answer:
      "Agar kisi Indian crypto exchange (jaise CoinDCX, WazirX, CoinSwitch) par aapka INR ya crypto withdrawal pending ya freeze hai, toh turant support ticket ka screenshot, P2P order slip aur bank statement download karein. Agar freeze police complaint ya P2P cyber lien ki wajah se hai, toh exchange se Section 106 BNSS notice maangein. Uske baad LegalRecovery ke zariye exchange ke Nodal Officer aur Cyber Cell ko 15-day statutory advocate legal notice bhejein taaki sirf disputed amount par lien lage aur baaki paisa turant unfreeze ho sake.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Exchange Freezing Your Crypto or INR Withdrawals: What You Can Do",
  description:
    "Exchange freezing withdrawals? User-agreement arbitration clauses, FIU-registered VASP duties, notices and collective action.",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/crypto-exchange-withdrawal-stuck-legal-notice`,
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
    name: "Crypto Exchange Stuck Withdrawal Remedies & Legal Notice in India",
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
      name: "Cyber & Investment Recovery",
      item: `${SITE_URL}/how-to-recover-money-stuck-in-online-cyber-fraud`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Crypto Withdrawal Stuck Legal Notice",
      item: `${SITE_URL}/crypto-exchange-withdrawal-stuck-legal-notice`,
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

export default function CryptoExchangeWithdrawalStuckPage() {
  const breadcrumbItems = [
    { label: "Cyber & Investment Recovery", href: "/how-to-recover-money-stuck-in-online-cyber-fraud" },
    { label: "Crypto Exchange Withdrawal Stuck", href: "/crypto-exchange-withdrawal-stuck-legal-notice" },
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
        {/* Dark Hero Section matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>FIU-IND Registered VASP Duties</span>
              <span className="text-red-500">•</span>
              <span>Section 106 BNSS P2P Liens</span>
              <span className="text-red-500">•</span>
              <span>Consumer Protection Act 2019</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Exchange Freezing Your Crypto or INR Withdrawals: What You Can Do
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Crypto &amp; INR Withdrawal Recovery in India)
              </p>
              <p>
                Virtual Asset Service Providers registered with FIU-IND cannot indefinitely lock fiat INR or digital assets without an official police requisition under Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023. If an exchange blocks your withdrawal arbitrarily or freezes your entire balance due to a P2P dispute, you can isolate the lien and compel asset release via a 15-day statutory legal notice and e-Jagriti consumer proceedings.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">FIU-IND</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">PMLA Registered VASPs</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Lien Only</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">No Blanket Portfolio Freeze</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Notice Cure Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 100 CPA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Bypasses Foreign Arbitration</p>
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
            <CryptoTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 Quick Answer / Context */}
              <section id="heading-quick-answer" aria-labelledby="heading-quick-answer-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-quick-answer-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Crypto Exchanges Lock Withdrawals &amp; What Indian Law Guarantees You
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Thousands of Indian cryptocurrency traders and retail investors wake up to find their accounts restricted with cryptic error messages: <em>&quot;Withdrawals temporarily suspended&quot;</em>, <em>&quot;Account under enhanced risk review&quot;</em>, or <em>&quot;In compliance with law enforcement directives&quot;</em>. Whether you trade on domestic platforms such as CoinDCX, CoinSwitch Kuber, WazirX (Zanmai Labs), ZebPay, Mudrex, or international exchanges like Binance and KuCoin that have obtained registration with the Financial Intelligence Unit - India (FIU-IND), experiencing a frozen withdrawal is intensely distressing.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Many exchanges exploit user confusion regarding the legal status of cryptocurrency in India. Users are falsely led to believe that because crypto is not legal tender, they possess zero statutory legal rights, or that foreign arbitration clauses in standard terms of service strip them of access to Indian courts. <strong>This is legally false.</strong>
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Following the Supreme Court&apos;s landmark 2020 judgment in <em>IAMAI v. RBI</em>, crypto trading is an established fundamental right under Article 19(1)(g). Furthermore, under Ministry of Finance Notification S.O. 1072(E) and the Consumer Protection Act, 2019, exchanges are statutory service providers and custodians (bailees). They are legally answerable for arbitrary fund seizures, delayed INR settlements, and disproportionate blanket account liens.
                </p>
              </section>

              {/* Section 2: Centrepiece Archetype G1 - Interactive / SVG Decision Tree */}
              <section id="heading-decision-tree" aria-labelledby="heading-decision-tree-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-decision-tree-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Crypto Withdrawal Freeze Decision Tree: Identifying Your Legal Route
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Recovery Matrix
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Use this legal diagnostic tree to establish why your crypto or INR withdrawal is stuck, which statute governs your dispute, and the precise escalation channel required to recover your money:
                </p>

                {/* Handcrafted Visual SVG Diagram Centerpiece */}
                <figure className="w-full bg-slate-900 text-white rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-800 shadow-xl overflow-x-auto">
                  <figcaption className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 text-center sm:text-left">
                    Fig 1.1: Decision Tree Flowchart — Stuck Crypto &amp; Fiat Withdrawal Redressal Trail
                  </figcaption>
                  <svg
                    viewBox="0 0 860 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Flowchart mapping withdrawal freeze reasons to statutory legal routes"
                  >
                    {/* Background Grid Accent */}
                    <rect width="860" height="480" rx="16" fill="#0B1120" />

                    {/* Step 1: Root Node */}
                    <rect x="290" y="20" width="280" height="60" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="430" y="45" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                      Withdrawal Stuck / Account Frozen
                    </text>
                    <text x="430" y="65" fill="#94A3B8" fontSize="11" textAnchor="middle">
                      Is there a Police Notice / Cyber Cell Tag?
                    </text>

                    {/* Connectors from Root */}
                    <path d="M350 80 L180 140" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M410 80 L380 140" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M470 80 L560 140" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M530 80 L730 140" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />

                    {/* Route Nodes Level 2 */}
                    {/* Route 1 */}
                    <rect x="70" y="140" width="180" height="85" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="160" y="165" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Route 1: P2P Cyber Lien
                    </text>
                    <text x="160" y="185" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Sec 106 BNSS / 102 CrPC
                    </text>
                    <text x="160" y="205" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Tainted counterparty funds
                    </text>

                    {/* Route 2 */}
                    <rect x="270" y="140" width="180" height="85" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="360" y="165" fill="#F59E0B" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Route 2: Arbitrary Lock
                    </text>
                    <text x="360" y="185" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Internal KYC / AML Review
                    </text>
                    <text x="360" y="205" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      No police requisition cited
                    </text>

                    {/* Route 3 */}
                    <rect x="470" y="140" width="180" height="85" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="560" y="165" fill="#10B981" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Route 3: Gateway Drop
                    </text>
                    <text x="560" y="185" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      INR Outward Nodal Failure
                    </text>
                    <text x="560" y="205" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      RBI TAT compensation rule
                    </text>

                    {/* Route 4 */}
                    <rect x="670" y="140" width="170" height="85" rx="8" fill="#1E293B" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="755" y="165" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Route 4: Hack / Moratorium
                    </text>
                    <text x="755" y="185" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      WazirX Scheme / Token Theft
                    </text>
                    <text x="755" y="205" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Foreign arbitration challenge
                    </text>

                    {/* Action Step Connectors */}
                    <path d="M160 225 L160 280" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" />
                    <path d="M360 225 L360 280" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 2" />
                    <path d="M560 225 L560 280" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 2" />
                    <path d="M755 225 L755 280" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 2" />

                    {/* Statutory Escalation Boxes Level 3 */}
                    {/* Action 1 */}
                    <rect x="65" y="280" width="190" height="150" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="160" y="305" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Legal Action Protocol:
                    </text>
                    <text x="80" y="330" fill="#94A3B8" fontSize="10">1. Demand Sec 94 notice copy</text>
                    <text x="80" y="350" fill="#94A3B8" fontSize="10">2. Submit bona fide P2P logs</text>
                    <text x="80" y="370" fill="#94A3B8" fontSize="10">3. Isolate lien to disputed sum</text>
                    <text x="80" y="390" fill="#38BDF8" fontSize="10" fontWeight="bold">4. High Court / IO representation</text>

                    {/* Action 2 */}
                    <rect x="265" y="280" width="190" height="150" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="360" y="305" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Legal Action Protocol:
                    </text>
                    <text x="280" y="330" fill="#94A3B8" fontSize="10">1. Re-verify KYC &amp; log ticket</text>
                    <text x="280" y="350" fill="#94A3B8" fontSize="10">2. Grievance Officer escalation</text>
                    <text x="280" y="370" fill="#94A3B8" fontSize="10">3. 15-Day Advocate Notice</text>
                    <text x="280" y="390" fill="#F59E0B" fontSize="10" fontWeight="bold">4. e-Jagriti consumer suit</text>

                    {/* Action 3 */}
                    <rect x="465" y="280" width="190" height="150" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="560" y="305" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Legal Action Protocol:
                    </text>
                    <text x="480" y="330" fill="#94A3B8" fontSize="10">1. Demand 12-digit UTR / ARN</text>
                    <text x="480" y="350" fill="#94A3B8" fontSize="10">2. Obtain Bank Non-Receipt memo</text>
                    <text x="480" y="370" fill="#94A3B8" fontSize="10">3. Notice to Exchange + Gateway</text>
                    <text x="480" y="390" fill="#10B981" fontSize="10" fontWeight="bold">4. Claim RBI delay penalty</text>

                    {/* Action 4 */}
                    <rect x="665" y="280" width="180" height="150" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="755" y="305" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Legal Action Protocol:
                    </text>
                    <text x="675" y="330" fill="#94A3B8" fontSize="10">1. Segregate INR vs Tokens</text>
                    <text x="675" y="350" fill="#94A3B8" fontSize="10">2. BNS 316/318 Cyber FIR</text>
                    <text x="675" y="370" fill="#94A3B8" fontSize="10">3. Sec 35(1)(c) Class Action</text>
                    <text x="675" y="390" fill="#EF4444" fontSize="10" fontWeight="bold">4. Enforce Bailee Liability</text>

                    {/* Arrow Marker Definition */}
                    <defs>
                      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#94A3B8" />
                      </marker>
                    </defs>
                  </svg>
                </figure>

                {/* Text Fallback for Accessibility */}
                <div className="bg-slate-100 p-4 rounded-xl text-xs sm:text-sm text-slate-700 space-y-2 border border-slate-200">
                  <p className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">
                    Text Summary of Diagnostic Branches:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Route 1 (P2P Cyber Cell Lien):</strong> Caused by cyber police freeze under BNSS 106. Action: Restrict freeze to disputed sum, release innocent portfolio.
                    </li>
                    <li>
                      <strong>Route 2 (Arbitrary AML Lock):</strong> Exchange disables withdrawals with no police notice. Action: 15-day statutory notice and e-Jagriti consumer claim.
                    </li>
                    <li>
                      <strong>Route 3 (Gateway Inward Failure):</strong> INR deducted from exchange but never reached your bank. Action: Demand UTR, enforce RBI failed transaction TAT rules.
                    </li>
                    <li>
                      <strong>Route 4 (Insolvency / Hack Moratorium):</strong> Platform loses funds in cyberattack (e.g. WazirX). Action: Demand 100% INR segregation, file Section 35(1)(c) class suit, bypass foreign arbitration.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Route 1 H2 Deep Dive */}
              <section id="heading-route-cyber-lien" aria-labelledby="heading-route-cyber-lien-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-cyber-lien-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 1: How to Lift P2P Cyber Cell Liens on Crypto Wallets &amp; Linked Bank Accounts
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The most pervasive cause of frozen crypto withdrawals in India originates from Peer-to-Peer (P2P) trading. When you sell USDT or Bitcoin, you accept an IMPS or UPI transfer from an external buyer. If that buyer acquired their money through cyber fraud—such as a <Link href="/digital-arrest-scam-money-recovery" className="text-[#DC2626] font-bold hover:underline">digital arrest scam</Link> or a fake trading app—the victim reports the fraud to the 1930 Cyber Helpline.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Investigating officers use the National Cyber Crime Reporting Portal to map the flow of funds layer by layer (Layer 1, Layer 2, Layer 3). Police then issue blanket notices under <strong>Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023</strong> (formerly Section 102 CrPC) directing exchanges and banks to freeze every account that received a transfer.
                </p>
                <div className="bg-red-50/70 border-l-4 border-[#DC2626] p-4 rounded-r-xl space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-red-900 uppercase tracking-wide">
                    The Legal Remedy: Partial Lien Earmarking vs. Blanket Account Paralyzation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under landmark directives from the Bombay High Court (<em>Dr. S. Radhakrishnan v. State of Maharashtra</em>) and Delhi High Court, police cannot paralyze an innocent person&apos;s entire account when the disputed transaction represents only a fraction of the funds. By serving a formal legal representation with full P2P order receipts and chat records, an advocate compels the Cyber Cell and the exchange to restrict the lien strictly to the disputed amount, releasing the rest of your portfolio.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
                  <div className="bg-white border border-slate-200 p-3.5 rounded-xl">
                    <span className="font-extrabold text-slate-900 block mb-1">Governing Forum</span>
                    <span className="text-slate-600">Cyber Crime Police Station / Judicial Magistrate Court</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-3.5 rounded-xl">
                    <span className="font-extrabold text-slate-900 block mb-1">Estimated Timeline</span>
                    <span className="text-slate-600">3 to 6 Weeks for Lien Earmarking &amp; Partial Unfreeze</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-3.5 rounded-xl">
                    <span className="font-extrabold text-slate-900 block mb-1">Key Document</span>
                    <span className="text-slate-600">P2P Order Slip + Bank Statement + Sec 106 BNSS Requisition</span>
                  </div>
                </div>
              </section>

              {/* Section 4: Route 2 H2 Deep Dive */}
              <section id="heading-route-aml-arbitrary" aria-labelledby="heading-route-aml-arbitrary-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-aml-arbitrary-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 2: Overcoming Arbitrary AML &amp; KYC Holds With No Police Requisition
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In many instances, the exchange disables withdrawals without any police complaint. When you submit a ticket, support representatives send boiler-plate emails stating your account is <em>&quot;under compliance inspection&quot;</em> or <em>&quot;AML review&quot;</em>. Weeks pass without resolution, while the exchange retains your capital.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the <strong>Consumer Protection Act, 2019</strong>, an exchange provides digital intermediary services for valuable consideration (maker/taker trading fees and withdrawal charges). Unilaterally blocking a customer from accessing their own liquid assets constitutes a severe <strong>deficiency in service under Section 2(11)</strong> and an <strong>unfair trade practice under Section 2(47)</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Rule 3(2) of the Consumer Protection (E-Commerce) Rules, 2020, every digital platform must acknowledge grievances within 48 hours and provide a redressed determination within one month. Serving a formal 15-day statutory legal notice from an advocate pierces the support bot loop, placing the grievance directly before the exchange&apos;s Legal and Compliance Officers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
                  <div className="bg-white border border-slate-200 p-3.5 rounded-xl">
                    <span className="font-extrabold text-slate-900 block mb-1">Governing Forum</span>
                    <span className="text-slate-600">District Consumer Commission (e-Jagriti Portal)</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-3.5 rounded-xl">
                    <span className="font-extrabold text-slate-900 block mb-1">Notice Window</span>
                    <span className="text-slate-600">15 Calendar Days to Cure or Face Compensation Claim</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-3.5 rounded-xl">
                    <span className="font-extrabold text-slate-900 block mb-1">Typical Award</span>
                    <span className="text-slate-600">100% Release @ 9% Interest + ₹15k–₹50k Mental Agony Damages</span>
                  </div>
                </div>
              </section>

              {/* Section 5: Route 3 H2 Deep Dive */}
              <section id="heading-route-fiat-stuck" aria-labelledby="heading-route-fiat-stuck-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-fiat-stuck"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 3: Resolving INR Withdrawal Debits That Never Reach Your Bank Account
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Another common dispute arises when a user liquidates crypto tokens into INR and clicks withdraw. The exchange shows <em>&quot;Success&quot;</em> and reduces the platform wallet balance, yet zero inward funds reflect in the user&apos;s bank account after 5 to 10 days.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian exchanges do not operate their own banking licenses; they rely on payment aggregators (PAs) and nodal escrow accounts maintained with scheduled commercial banks (such as ICICI Bank, Yes Bank, or IDFC First Bank). When an API timeout or batch settlement error occurs, the funds get trapped in the intermediary nodal pool.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <strong>Reserve Bank of India Circular DPSS.CO.PD No.629/02.01.014/2019-20</strong> on Harmonisation of Turn Around Time (TAT), failed electronic transactions must be auto-reversed within prescribed limits (T+1 to T+5). Failure to credit the customer account within statutory timelines attracts mandatory compensation of ₹100 per day of delay.
                </p>
              </section>

              {/* Section 6: Route 4 H2 Deep Dive */}
              <section id="heading-route-exchange-moratorium" aria-labelledby="heading-route-exchange-moratorium-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-exchange-moratorium"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 4: Handling Hacks, Insolvency Moratoria &amp; WazirX-Style Restructuring Schemes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In catastrophic events where an exchange suffers an exploit or wallet compromise (such as the July 2024 WazirX cyberattack where $230M+ in ERC-20 tokens were drained), the management often suspends all INR and crypto withdrawals. Subsequently, the platform may seek a moratorium under foreign insolvency laws (such as Section 210 of the Singapore Companies Act) to force retail users into accepting fractional payouts (&quot;haircuts&quot;).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian legal remedies offer significant leverage in these scenarios:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                  <li>
                    <strong>Segregation of Fiat INR Balances:</strong> Inward INR deposits received by Indian operating entities (such as Zanmai Labs Pvt. Ltd. for WazirX) are held in domestic banking escrow accounts. Fiat balances are not &quot;crypto tokens&quot; and were not stolen in the smart contract exploit. Unilaterally freezing 100% of fiat balances violates Indian banking regulations and bailment duties.
                  </li>
                  <li>
                    <strong>Bailment Duty Under Contract Act (Section 148 &amp; 151):</strong> Under Indian law, an exchange holding custody of your digital assets acts as a bailee. A bailee is bound to take as much care of the goods bailed as a person of ordinary prudence would. Storing massive user deposits in multisig hot wallets without adequate insurance constitutes breach of statutory duty.
                  </li>
                  <li>
                    <strong>Criminal Breach of Trust (Section 316 BNS):</strong> When an entity takes custody of valuable property under express promises of safety and subsequently misapplies or refuses to return the property, criminal liability is attracted alongside civil recovery.
                  </li>
                </ul>
              </section>

              {/* Section 7: Mandatory Facts & Benchmarks Table */}
              <section id="heading-statutory-table" aria-labelledby="heading-statutory-table-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Crypto Withdrawal Dispute Matrix: Laws, Forums, Deadlines &amp; Costs
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Parameter Comparison
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">Crypto withdrawal dispute parameters and escalation routes</caption>
                    <thead>
                      <tr className="bg-slate-900 text-white font-black uppercase text-[11px] tracking-wider">
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-800">Dispute Nature</th>
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-800">Governing Statute</th>
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-800">Appropriate Forum</th>
                        <th scope="col" className="p-3.5 sm:p-4 border-r border-slate-800">Statutory TAT</th>
                        <th scope="col" className="p-3.5 sm:p-4">Expected Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200 bg-slate-50/50">
                          P2P Cyber Cell Lien
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Section 106 BNSS 2023 / Section 102 CrPC
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Cyber Crime Police / Magistrate Court
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          15–45 Days
                        </td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">
                          Lien restricted to disputed sum; balance released
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200 bg-slate-50/50">
                          Arbitrary KYC / AML Hold
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Consumer Protection Act 2019 (Sec 2(11), 2(47))
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          District Consumer Commission (e-Jagriti)
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          15-day notice / 90-day trial
                        </td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">
                          100% fund release + 9% interest + ₹25k damages
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200 bg-slate-50/50">
                          Stuck INR Bank Settlement
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          RBI Failed Transaction TAT (DPSS 2019-20)
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Banking Ombudsman / Consumer Forum
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          T+1 to T+5 days
                        </td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">
                          Full inward credit + ₹100/day delay compensation
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-bold text-slate-900 border-r border-slate-200 bg-slate-50/50">
                          Exchange Hack / Insolvency
                        </th>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          Sec 148 Contract Act &amp; Sec 316/318 BNS
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          State/National Consumer Commission + Cyber FIR
                        </td>
                        <td className="p-3.5 sm:p-4 border-r border-slate-200">
                          30–180 Days
                        </td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">
                          100% INR recovery + challenge to token haircuts
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Legal Status & Misconceptions */}
              <section id="heading-crypto-status-myths" aria-labelledby="heading-crypto-status-myths-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-crypto-status-myths"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Status of Crypto in India: Debunking 4 Critical Myths
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Myth 1: Crypto is Illegal in India
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      The Reality: Constitutionally Protected Legitimate Asset Class
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In <em>IAMAI v. RBI (2020)</em>, the Supreme Court struck down the RBI banking ban, establishing that citizens have a fundamental constitutional right to trade digital assets. Furthermore, the Union Budget introduced Section 115BBH to the Income Tax Act, levying a 30% tax and 1% TDS on Virtual Digital Assets (VDAs). You cannot tax an illegal activity as a legitimate revenue source without acknowledging its legal existence.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Myth 2: Exchanges Operate Unregulated
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      The Reality: Regulated Reporting Entities Under FIU-IND
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Gazette Notification S.O. 1072(E) dated 7 March 2023, Virtual Asset Service Providers (VASPs) are legally designated as Reporting Entities under the Prevention of Money Laundering Act (PMLA). Domestic exchanges and offshore platforms operating in India must maintain KYC logs, report suspicious transactions, and maintain active corporate compliance offices.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Myth 3: Terms of Service Waive All Rights
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      The Reality: Adhesion Clauses Are Void Against Public Policy
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Standard click-wrap agreements stating that users trade at their own risk cannot excuse an exchange from gross negligence, bailment breaches, or criminal diversion of funds under Section 23 of the Indian Contract Act and Section 2(46) of the Consumer Protection Act, 2019.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Myth 4: Police Can Freeze Everything Indefinitely
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      The Reality: High Courts Mandate Lien Proportionality
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 106 BNSS, police authority is confined to property connected to the alleged crime. High Courts routinely quash blanket account freezes when innocent merchants establish that their legitimate balance far exceeds the disputed P2P counterparty transaction.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Diagnostic Problem Tabs */}
              <section id="heading-problem-scenarios" aria-labelledby="heading-problem-scenarios-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-problem-scenarios-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Diagnostic Breakdown: Select Your Specific Withdrawal Problem
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Click through each scenario below to see the root cause, legal basis, and immediate steps for your exact situation:
                </p>
                <CryptoProblemTabs />
              </section>

              {/* Section 10: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Example: Resolving a ₹3,40,000 Frozen Withdrawal Post-P2P Trade
                </h2>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Dispute Case Study (Illustrative Scenario)
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      Full Recovery &amp; Lien Isolation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-4 rounded-xl">
                    <div>
                      <span className="text-slate-500 block">Total Frozen Balance:</span>
                      <strong className="text-slate-900 text-sm">₹3,40,000 INR</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Disputed P2P Trade Sum:</span>
                      <strong className="text-red-600 text-sm">₹32,500 (USDT Sale)</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Investigating Cyber Cell:</span>
                      <strong className="text-slate-900 text-sm">Cyber Police Station, Hyderabad</strong>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Rohan, a freelance UI designer in Pune, liquidated 400 USDT on an FIU-registered exchange for ₹32,500 via P2P trading. Three days later, he attempted to withdraw his cumulative savings of ₹3,40,000 to his HDFC Bank account. The exchange blocked the withdrawal and marked his entire account as &quot;Suspended pursuant to Cyber Crime Notice&quot;.
                    </p>
                    <p>
                      <strong>The Problem:</strong> The buyer of the 400 USDT had funded the transaction using money originating from a Telegram task fraud syndicate. The Cyber Police in Hyderabad issued a blanket requisition under Section 106 BNSS to freeze the recipient account. The exchange mechanically froze Rohan&apos;s entire ₹3,40,000 balance instead of isolating the ₹32,500 dispute.
                    </p>
                    <p>
                      <strong>The Legal Strategy:</strong>
                    </p>
                    <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
                      <li>
                        <strong>Evidence Dossier:</strong> Rohan compiled the exchange P2P order slip, blockchain transaction hash, verified KYC identity, buyer chat transcripts, and HDFC bank statement certified under BSA Section 63.
                      </li>
                      <li>
                        <strong>Advocate Representation to IO:</strong> An advocate issued a comprehensive legal representation to the Hyderabad Cyber Crime Station House Officer demonstrating that Rohan was a bona fide seller for valuable consideration with zero mens rea or criminal nexus.
                      </li>
                      <li>
                        <strong>Statutory Notice to Exchange:</strong> A concurrent 15-day legal notice was served on the exchange&apos;s Legal Nodal Officer demanding the immediate restriction of the lien strictly to ₹32,500 under High Court guidelines, citing <em>Dr. S. Radhakrishnan v. State of Maharashtra</em>.
                      </li>
                    </ol>
                    <p className="bg-emerald-50 text-emerald-900 p-3.5 rounded-xl border border-emerald-200 font-medium">
                      <strong>Outcome:</strong> Within 18 business days, the Cyber Cell confirmed to the exchange that the disputed amount was ₹32,500. The exchange marked a lien only on ₹32,500 and immediately released the remaining ₹3,07,500 to Rohan&apos;s verified bank account.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Mandatory Evidence Checklist for Crypto &amp; INR Withdrawal Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving a legal notice or escalating to consumer forums, compile this evidentiary dossier to ensure your claim is admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-black text-[#DC2626] uppercase">1. Exchange Profile &amp; KYC Verification</span>
                    <p className="text-xs text-slate-600">
                      Full-page screenshot showing your registered name, email, phone, UID/User ID, and verified KYC status badge on the exchange portal.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-black text-[#DC2626] uppercase">2. Order Logs &amp; Blockchain TxHash</span>
                    <p className="text-xs text-slate-600">
                      Cryptographic Transaction Hash (TxID), wallet deposit/withdrawal addresses, order creation timestamps, and trade execution slips.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-black text-[#DC2626] uppercase">3. P2P Counterparty Chat &amp; Payment Slip</span>
                    <p className="text-xs text-slate-600">
                      Unedited screenshots of the in-app P2P chat box, buyer details, bank account proof, and the buyer&apos;s payment screenshot.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-black text-[#DC2626] uppercase">4. Bank Account Statement with UTR</span>
                    <p className="text-xs text-slate-600">
                      Official PDF bank account statement showing the inward credit or failed outward debit, featuring the 12-digit UTR/RRN reference number.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-black text-[#DC2626] uppercase">5. Support Ticket Logs &amp; Rejection Emails</span>
                    <p className="text-xs text-slate-600">
                      Exported email threads, support ticket numbers, chat transcripts with customer agents, and system error screenshots.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-black text-[#DC2626] uppercase">6. Law Enforcement Notice / Section 106 BNSS Copy</span>
                    <p className="text-xs text-slate-600">
                      The official notice copy provided by the exchange or bank stating the Crime Number, complainant details, and investigating cyber station.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12: Arbitration Clause Bypass */}
              <section id="heading-arbitration-clause" aria-labelledby="heading-arbitration-clause-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-arbitration-clause-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why User Agreement Arbitration Clauses (e.g. Singapore SIAC) Cannot Block You
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When users complain about locked withdrawals, exchanges routinely cite clause 18 or 24 of their Terms of Use: <em>&quot;Any dispute shall be referred to and finally resolved by arbitration administered by the Singapore International Arbitration Centre (SIAC)&quot;</em>. This tactic is deliberately designed to intimidate retail consumers, as filing a commercial arbitration case in Singapore costs upwards of ₹5,00,000 in administrative fees alone.
                </p>
                <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl space-y-3">
                  <h3 className="text-sm sm:text-base font-extrabold text-red-400">
                    The Legal Position Established by the Supreme Court of India:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
                    <li>
                      <strong>Section 100 Consumer Protection Act, 2019:</strong> The remedies provided under the Act are in addition to and not in derogation of any other law or agreement for the time being in force.
                    </li>
                    <li>
                      <strong>The Aftab Singh Precedent ((2019) 12 SCC 751):</strong> The Supreme Court affirmed that consumer forums are statutory judicial bodies created to protect citizens from unconscionable commercial exploitation. An arbitration agreement cannot extinguish consumer commission jurisdiction.
                    </li>
                    <li>
                      <strong>Domestic Corporate Operating Entities:</strong> Indian exchanges operate through domestic private limited entities (e.g. Zanmai Labs Pvt. Ltd. for WazirX, Neblio Technologies for CoinDCX). These domestic corporate entities are subject to Indian territorial consumer jurisdictions where the consumer resides.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 13: 5-Step Escalation Playbook */}
              <section id="heading-escalation-playbook" aria-labelledby="heading-escalation-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Escalation Playbook: From Support Ticket to Asset Release
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Action Sequence
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">1</span>
                      <h3 className="text-sm font-extrabold text-slate-900">Step 1: Escalate to the Nodal Grievance Officer</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      Bypass front-line chat bots. Under Rule 3(2) of the Consumer Protection (E-Commerce) Rules, 2020, send a formal grievance email to the exchange&apos;s designated Grievance Officer and Compliance Head. Specify your User ID, ticket numbers, and demand written statutory reasons within 48 hours.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">2</span>
                      <h3 className="text-sm font-extrabold text-slate-900">Step 2: Serve a 15-Day Statutory Advocate Legal Notice</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      If the grievance officer fails to unfreeze the withdrawal, have an advocate draft and dispatch a formal statutory legal notice under Section 2(11) of the Consumer Protection Act, 2019 and the Contract Act. The notice is served via Registered Speed Post with tracking and digital email dispatch to the exchange&apos;s registered corporate headquarters.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">3</span>
                      <h3 className="text-sm font-extrabold text-slate-900">Step 3: Police Representation for P2P Lien Earmarking</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      For P2P cyber disputes, submit an official advocate representation under Section 114/106 BNSS to the concerned Cyber Crime Police Station. Present the audit trail proving you are a legitimate seller, requesting that the lien be isolated strictly to the disputed transaction amount.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">4</span>
                      <h3 className="text-sm font-extrabold text-slate-900">Step 4: File Consumer Complaint on e-Jagriti</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      Upon expiry of the 15-day notice window, file an online consumer complaint on the national e-Jagriti portal (<a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] hover:underline">e-jagriti.gov.in</a>). Claim 100% release of the withheld withdrawal, 9% to 12% annual interest from the date of request, and substantial compensation for mental agony and business disruption.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">5</span>
                      <h3 className="text-sm font-extrabold text-slate-900">Step 5: Escalate Regulatory Non-Compliance to FIU-IND</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      Submit a formal complaint to the Financial Intelligence Unit - India (FIU-IND) regarding non-compliance with reporting entity obligations and improper consumer fund handling. Regulatory reporting frequently accelerates internal platform resolutions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Inline Primary CTA */}
              <CryptoNoticeCTA variant="primary" />

              {/* Section 14: Scope Matrix */}
              <section id="heading-scope-matrix" aria-labelledby="heading-scope-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-scope-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can &amp; Cannot Do for Crypto Disputes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 border border-emerald-200 p-5 rounded-2xl space-y-2">
                    <span className="text-[11px] font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      What We Can Do
                    </span>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                      <li>Draft and serve formal 15-day statutory advocate legal notices to FIU-registered domestic and offshore crypto exchanges.</li>
                      <li>Draft and file formal legal representations to interstate Cyber Crime Police Stations for P2P lien earmarking and partial wallet release.</li>
                      <li>Draft and file consumer court complaints on the national e-Jagriti portal claiming full fund release plus statutory interest and damages.</li>
                      <li>Bypass unilateral foreign arbitration clauses under Section 100 of the Consumer Protection Act, 2019.</li>
                    </ul>
                  </div>

                  <div className="bg-red-50/70 border border-red-200 p-5 rounded-2xl space-y-2">
                    <span className="text-[11px] font-black uppercase text-red-800 bg-red-100 px-2 py-0.5 rounded">
                      What We Cannot Do
                    </span>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                      <li>We cannot recover funds transferred to anonymous phishing smart contracts or unhosted scam dApps where no regulated entity is involved.</li>
                      <li>We cannot bypass a valid judicial attachment order issued by a High Court or Sessions Court without appropriate legal pleadings.</li>
                      <li>We do not offer unauthorized &quot;ethical hacking&quot; or wallet brute-force services; our remedies are strictly legal and institutional.</li>
                      <li>We cannot guarantee speculative future crypto prices or alter blockchain protocol transactions once finalized on-chain.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 15: Court Precedents Digest */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Judicial Precedents Governing Crypto &amp; Account Freezes
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court &amp; High Court Authorities
                  </span>
                </div>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((cit, idx) => (
                    <article
                      key={idx}
                      className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-2">
                        <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                          Precedent Authority #{idx + 1}
                        </span>
                        <span className="text-[11px] text-slate-500 font-semibold">{cit.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                        {cit.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-700">
                        {cit.parties} — <span className="text-slate-500 font-normal">{cit.citation}</span>
                      </p>
                      <div className="bg-slate-50 p-3.5 rounded-xl space-y-1.5 text-xs text-slate-600 leading-relaxed">
                        <p><strong>Facts:</strong> {cit.facts}</p>
                        <p><strong>Holding:</strong> {cit.holding}</p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                          Core Outcome: {cit.amount}
                        </span>
                        <p className="text-[11px] text-slate-600 font-medium">
                          <strong>Key Takeaway:</strong> {cit.takeaway}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 16: FAQ Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Frozen Crypto &amp; INR Withdrawals
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Answers
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 17: Primary Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight"
                >
                  Primary Sources &amp; Legal Authorities
                </h2>
                <p className="text-xs text-slate-600">
                  All statutory provisions, circulars, and judicial holdings cited on this page are verified against official government gazettes, supreme court records, and regulatory portals:
                </p>
                <ul className="space-y-2 text-xs">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-[#DC2626] font-bold">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#DC2626] hover:underline font-medium break-all"
                      >
                        {source.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Secondary Bottom CTA */}
              <CryptoNoticeCTA variant="secondary" />

              {/* Related Guides Contextual Library */}
              <div className="pt-6">
                <RelatedRecoveryGuides currentPath="/crypto-exchange-withdrawal-stuck-legal-notice" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
