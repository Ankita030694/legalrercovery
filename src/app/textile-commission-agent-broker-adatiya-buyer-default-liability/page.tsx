import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import TextileBrokerNoticeCTA from "./TextileBrokerNoticeCTA";
import TextileBrokerTableOfContents from "./TextileBrokerTableOfContents";
import TextileBrokerScenarioTabs from "./TextileBrokerScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Textile Broker / Adatiya Liability When Buyer Defaults",
  description:
    "Del Credere agency law under Contract Act s.182-212 and BNS s.318 conspiracy remedies when an outstation fabric buyer vanishes with unpaid consignments.",
  alternates: {
    canonical: `${SITE_URL}/textile-commission-agent-broker-adatiya-buyer-default-liability`,
  },
  openGraph: {
    title: "Textile Broker / Adatiya Liability When Introduced Buyer Defaults",
    description:
      "Statutory guide for Surat, Bhiwandi & Bhilwara textile manufacturers on Del Credere agency liability, broker-buyer collusion, and multi-victim BNS 318 recovery.",
    url: `${SITE_URL}/textile-commission-agent-broker-adatiya-buyer-default-liability`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Textile Broker and Adatiya Legal Liability for Defaulting Buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Textile Broker / Adatiya Liability When Introduced Buyer Defaults",
    description:
      "Statutory guide for Surat, Bhiwandi & Bhilwara textile manufacturers on Del Credere agency liability, broker-buyer collusion, and multi-victim BNS 318 recovery.",
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
    title: "Indian Contract Act, 1872 (Sections 182, 211, 212, 215, 216 & Del Credere Agency Doctrine)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Sections 316, 318(4) Cheating & Section 61(2) Criminal Conspiracy)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 Statutory Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Admissibility of Electronic Records: WhatsApp, E-Way & LR)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXI Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const FAQS = [
  {
    question: "Is a textile broker legally liable if an introduced buyer defaults?",
    answer:
      "A textile broker is legally liable under Indian Contract Act Section 182/211 if they acted as a Del Credere agent—charging extra commission (typically 2% or higher) to guarantee buyer solvency—or if market custom (such as Surat Gaddi traditions) dictates that the broker indemnifies defaults. Even for ordinary brokers, liability attaches under Section 212 for negligence if they introduced an unvetted or fictitious buyer, and under Bharatiya Nyaya Sanhita Section 318(4) & 61(2) if they colluded with the defaulting syndicate.",
  },
  {
    question: "What is the difference between an ordinary textile broker and a Del Credere agent?",
    answer:
      "An ordinary textile broker (dalal or adatiya) merely brings weaver and buyer together to earn an introductory commission (0.5% to 1%), bearing no default risk unless negligent or fraudulent. A Del Credere agent receives a higher commission (2% to 4%) in exchange for an absolute personal guarantee to indemnify the manufacturer if the buyer fails to pay upon invoice maturity.",
  },
  {
    question: "Can I name the textile broker as a joint noticee in the legal notice?",
    answer:
      "Yes. The standard recovery protocol mandates issuing a joint statutory demand notice to both the buyer (as primary debtor under the sales contract) and the broker (as Del Credere guarantor under Contract Act s.126/182, or as tortfeasor under Section 212, and criminal conspirator under BNS Section 318/61(2)). Serving both creates immediate local leverage in the textile mandi.",
  },
  {
    question: "What should I do if the buyer shuttered their shop in Kolkata/Delhi and vanished?",
    answer:
      "Immediately consolidate all electronic evidence (E-Way bills, Lorry Receipts, broker WhatsApp chat logs, GST filings). File a multi-victim criminal complaint before the Economic Offences Wing (EOW) or Cyber Crime Cell in Surat or Ahmedabad under BNS s.318(4) and s.61(2) alleging an organized mandi bust-out fraud. Concurrently file an MSME Samadhaan claim against the buyer entity and a summary civil suit against the broker.",
  },
  {
    question: "Does a settlement before textile trade associations (Panch / FOSTTA) stop legal court action?",
    answer:
      "No. While trade associations like FOSTTA or Maskati Mahajan provide mediation, their resolutions lack statutory execution powers unless formalized as an arbitral award. However, signed settlement minutes before Panch elders serve as an ironclad acknowledgment of debt under Section 18 of the Limitation Act, 1963, preventing limitation expiry and enabling instant decree under Order XXXVII CPC.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act apply to defaulting fabric buyers?",
    answer:
      "Under Section 43B(h), if your manufacturing or processing unit holds an active Udyam registration (Micro or Small Enterprise), the buyer must pay invoices within 15 days (or up to 45 days under written agreement). Failure to pay disallows the entire fabric purchase expense from the buyer's taxable income, triggering heavy corporate income tax liabilities and audit penalties.",
  },
];

export default function TextileBrokerBuyerDefaultLiabilityPage() {
  const publishedDate = "2026-11-17T09:00:00+05:30";
  const modifiedDate = "2026-11-17T09:00:00+05:30";

  const breadcrumbItems = [
    { label: "B2B Recovery", href: "/industries/textiles-apparel-garment-recovery" },
    { label: "Textiles & Garments", href: "/industries/textiles-apparel-garment-recovery" },
    {
      label: "Broker Default Liability",
      href: "/textile-commission-agent-broker-adatiya-buyer-default-liability",
    },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "When a Textile Broker's 'Guaranteed' Outstation Buyer Vanishes With ₹40 Lakh of Fabric: Del Credere Agency Law & BNS Section 318 Conspiracy",
    description:
      "Comprehensive B2B recovery operational guide for textile manufacturers on Del Credere agency law, broker-buyer collusion, mandi bust-out scams, and BNS Section 318 criminal conspiracy remedies.",
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      worksFor: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
        url: "https://www.amalegalsolutions.com",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/textile-commission-agent-broker-adatiya-buyer-default-liability`,
    },
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
        name: "Textile Recovery Hub",
        item: `${SITE_URL}/industries/textiles-apparel-garment-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Textile Broker Default Liability",
        item: `${SITE_URL}/textile-commission-agent-broker-adatiya-buyer-default-liability`,
      },
    ],
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recover Fabric Receivables When an Outstation Buyer and Broker Default",
    description:
      "Operational SOP for weavers and textile mills to establish broker Del Credere liability and initiate joint criminal-commercial recovery.",
    step: [
      {
        "@type": "HowToStep",
        name: "Audit Broker Retainers & Commission Ledgers",
        text: "Extract evidence demonstrating del credere commission charges (>=2%) or explicit verbal undertakings of solvency made on the market Gaddi.",
      },
      {
        "@type": "HowToStep",
        name: "Issue Joint Statutory Co-Notice",
        text: "Serve a 72-hour formal advocate demand notice arraying both the defaulting outstation buyer and the local commission broker.",
      },
      {
        "@type": "HowToStep",
        name: "Initiate EOW / BNS Criminal Proceedings",
        text: "File criminal charges under Bharatiya Nyaya Sanhita Sections 318(4) and 61(2) for coordinated mandi bust-out fraud and conspiracy.",
      },
      {
        "@type": "HowToStep",
        name: "Enforce MSME Samadhaan & Order 37 Summary Suit",
        text: "Lodge statutory MSME delayed payment petitions against the buyer entity while maintaining summary civil recovery against the broker.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Textile Recovery SOP</span>
              <span>•</span>
              <span>Del Credere Agency Law</span>
              <span>•</span>
              <span>BNS §318 & §61(2)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              When a Textile Broker&apos;s &apos;Guaranteed&apos; Outstation Buyer Vanishes With ₹40 Lakh of Fabric: Del Credere Agency Law &amp; BNS Section 318 Conspiracy
            </h1>

            {/* Executive Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Parent Sector Link
              </span>
              In textile trading hubs like Surat, Bhiwandi, Ahmedabad, and Bhilwara, over 80% of outstation grey cloth and finished fabric flows on credit through local commission brokers (<em>dalals / adatiyas</em>). Under Indian Contract Act Section 182 and established mercantile custom, when a broker charges higher del credere commission or gives an oral &apos;Gaddi&apos; guarantee, they assume joint and several liability as an insurer of the buyer&apos;s debt. If an outstation buyer shutters their outlet overnight, manufacturers can invoke Del Credere agency law alongside Bharatiya Nyaya Sanhita Section 318(4) (Cheating) and Section 61(2) (Criminal Conspiracy) to freeze local broker assets. Detailed recovery protocols are coordinated through our parent industry playbook at{" "}
              <Link
                href="/industries/textiles-apparel-garment-recovery"
                className="text-red-400 underline hover:text-red-300 font-semibold"
              >
                Textiles, Apparel &amp; Garment Recovery Hub
              </Link>
              .
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-medium">
                  Outstation Broker Credit
                </span>
                <p className="text-lg sm:text-2xl font-black text-slate-100">80%+</p>
                <span className="text-[11px] text-slate-400 block">Mandi transactions</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-medium">
                  Del Credere Commission
                </span>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">2% – 4%</p>
                <span className="text-[11px] text-slate-400 block">Indemnifies default risk</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-medium">
                  MSMED Statutory Interest
                </span>
                <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
                <span className="text-[11px] text-slate-400 block">Monthly compounding</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-medium">
                  Criminal Conspiracy Rigor
                </span>
                <p className="text-lg sm:text-2xl font-black text-red-400">BNS §318 / §61</p>
                <span className="text-[11px] text-slate-400 block">Non-bailable EOW action</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Table of Contents */}
            <TextileBrokerTableOfContents />

            {/* Right Editorial Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Mandi Bust-Out Modus Operandi */}
              <section
                id="heading-mandi-fraud-modality"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    The Organized &apos;Mandi Bust-Out&apos; Fabric Fraud Modus Operandi
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In major Indian textile clusters—including Surat&apos;s Ring Road and Saroli markets, Bhiwandi&apos;s powerloom sheds, Bhilwara&apos;s synthetic suitings hub, and Ahmedabad&apos;s cotton trading centres—the &apos;Mandi Bust-Out&apos; scam represents an organized economic syndicate. Fraudulent trading entities establish an appearance of substantial net worth by renting premium commercial showrooms in consumption hubs like Burrabazar (Kolkata), Chandni Chowk (Delhi), Secunderabad, or Chickpet (Bengaluru).
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The syndicate relies entirely on local textile commission agents (<em>dalals / adatiyas</em>) to access fabric manufacturers. The trap operates in four planned phases:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                      Phase 1: Credibility Seeding
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Buyer orders small test consignments (₹2–5 Lakh) of grey fabric or printed dress materials through the broker. Invoices are cleared punctually on day 30 via RTGS to establish an impeccable market payment track record.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                      Phase 2: The Broker &apos;Gaddi Guarantee&apos;
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The broker visits the weaver&apos;s gaddi (office) stating: <em>&quot;Party ekdum solid hai, payment ki meri personal zimmedari hai.&quot;</em> The broker urges the manufacturer to extend credit limits up to ₹40–80 Lakh for upcoming festival seasons.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                      Phase 3: The Multi-Mill Coordinated Lift
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      In Month 4, the outstation syndicate issues simultaneous massive purchase orders to 12 to 20 weavers across Surat and Bhiwandi, lifting ₹2 Crore to ₹5 Crore of fabric within a 10-day window.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                      Phase 4: Instant Liquidation &amp; Overnight Evaporation
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Fabric received at transport godowns is rerouted without entering retail stock, sold at a 30%–40% cash discount in secondary markets, and the showroom is shuttered with phones switched off before the 60-day credit bills mature.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs sm:text-sm text-[#DC2626]">
                  <strong>Creditor Risk Reality:</strong> When the manufacturer confronts the broker, the agent routinely claims: <em>&quot;Main toh sirf dalal hoon, mera koi legal lena-dena nahi hai.&quot;</em> This defense fails under statutory agency jurisprudence when Del Credere elements or verification negligences are legally proved.
                </div>
              </section>

              {/* Section 2: Del Credere Agency Law Under Contract Act */}
              <section
                id="heading-del-credere-doctrine"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Del Credere Agency Law: When an Adatiya Becomes Financially Liable
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Indian Contract Act, 1872, the relationship between a textile manufacturer (Principal) and a commission agent (Agent) is governed by Section 182. While an ordinary broker merely negotiates terms, a <strong>Del Credere Agent</strong> acts as a surety who, for extra consideration, undertakes to guarantee the solvency of the third party and indemnifies the principal against default.
                </p>

                {/* Precedent Deep-Dive Cards */}
                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-5 relative overflow-hidden bg-slate-50/50">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"></div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Mercantile Agency Jurisprudence
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Doctrine of Del Credere Agency: Nature of Commission &amp; Solvency Guarantee
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      As affirmed across landmark mercantile disputes, where an agent receives an enhanced percentage (del credere commission, customarily 2% to 4% in textile mandis vs 0.5%–1% for standard dalali), an implied contract of indemnity arises. The agent is not merely an intermediary; they stand in the shoes of a guarantor under Section 126 of the Contract Act. Upon the buyer&apos;s default at maturity, the principal has an immediate cause of action against the agent without having to exhaust civil remedies against the outstation buyer first.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5 relative overflow-hidden bg-slate-50/50">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"></div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Statutory Duty of Skill &amp; Diligence
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Indian Contract Act Section 211 &amp; Section 212: Agent Negligence
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Even in the absence of a formalized del credere agreement, an agent owes a statutory duty under Section 212 to conduct the agency with reasonable skill and diligence. If an adatiya introduces an outstation buyer without verifying basic GST credentials, commercial references, or premises lease deeds—or actively conceals that the buyer had defaulted on other weavers in the same market—the agent is personally liable in damages for the direct loss resulting from their actionable breach of duty.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, if the broker recovered any amount from the buyer or accepted undisclosed kickbacks, Indian Contract Act <strong>Section 216</strong> empowers the manufacturer to claim all secret profits, while <strong>Section 218</strong> mandates that the agent immediately pay over all sums received on the principal&apos;s account.
                </p>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Statutory Matrix: Civil Remedies vs. Criminal Conspiracy Rigor
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Recovering outstation textile debts requires deploying civil summary provisions alongside penal conspiracy mechanisms. The table below outlines how liability applies across the transaction chain:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Statutory Provision</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Target Entity</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Legal Standard &amp; Proof</th>
                        <th className="p-3 sm:p-4 font-bold">Creditor Strategic Relief</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          Contract Act s.182 / s.211 / s.212
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Commission Agent / Adatiya
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Del credere commission vouchers or gross negligence in buyer KYC verification
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                          Direct civil indemnity decree for 100% invoice principal
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          BNS Section 318(4) &amp; Section 61(2)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Buyer + Broker (Jointly)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Dishonest intention from inception, shop closure, call logs proving collusion
                        </td>
                        <td className="p-3 sm:p-4 text-red-700 font-semibold">
                          Non-bailable arrest warrants, freezing of local bank accounts &amp; godowns
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          MSMED Act s.15 to s.18
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Defaulting Buyer Enterprise
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Valid Udyam Certificate prior to dispatch, tax invoices, LR/Bilty copies
                        </td>
                        <td className="p-3 sm:p-4 text-amber-700 font-semibold">
                          MSEFC award with 3x RBI bank rate compounded monthly interest
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          Income Tax Act s.43B(h)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Corporate / Registered Buyer
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Unpaid invoice exceeding 15/45 days for Micro/Small enterprise supplier
                        </td>
                        <td className="p-3 sm:p-4 text-purple-700 font-semibold">
                          Disallowance of fabric purchases from taxable income + fiscal penalties
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          CPC Order XXXVII (Summary Suit)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Buyer &amp; Broker as Co-Defendants
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Liquidated debt evidenced by signed bills, broker memos, or returned cheques
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                          Fast-track decree without unconditional leave to defend
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-slate-500">
                    For cross-industry statutory comparison across summary civil suits and MSME conciliation, examine our{" "}
                    <Link
                      href="/how-to-recover-money-without-written-agreement"
                      className="text-red-600 underline hover:text-red-700"
                    >
                      recovery without formal written contract guide
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="text-red-600 underline hover:text-red-700"
                    >
                      Section 43B(h) statutory deduction enforcement
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 4: Decision Tree Flowchart */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Creditor Escalation Decision Tree: Broker vs. Outstation Buyer
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When an outstation fabric consignment defaults, time is critical. Fraud syndicates dismantle physical traces within 14 days. Follow this operational triage workflow:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block bg-slate-900 p-6 rounded-2xl border border-slate-800 overflow-x-auto">
                  <svg
                    viewBox="0 0 800 360"
                    className="w-full h-auto min-w-[720px]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Node 1 */}
                    <rect x="20" y="30" width="220" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="130" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      STAGE 1: Default Triggered
                    </text>
                    <text x="130" y="78" textAnchor="middle" fill="#94A3B8" fontSize="11">
                      Due date passes + Buyer uncontactable
                    </text>

                    {/* Arrow 1 */}
                    <path d="M240 65 H290" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Node 2 */}
                    <rect x="290" y="30" width="220" height="70" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="400" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      STAGE 2: Evidence Audit
                    </text>
                    <text x="400" y="78" textAnchor="middle" fill="#94A3B8" fontSize="11">
                      Extract WhatsApp, LR, E-Way &amp; Broker slip
                    </text>

                    {/* Arrow 2 */}
                    <path d="M510 65 H560" stroke="#DC2626" strokeWidth="2" />

                    {/* Node 3 */}
                    <rect x="560" y="30" width="220" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="670" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      STAGE 3: Joint Co-Notice
                    </text>
                    <text x="670" y="78" textAnchor="middle" fill="#94A3B8" fontSize="11">
                      72-Hr demand to Buyer + Broker
                    </text>

                    {/* Branching Arrows */}
                    <path d="M670 100 V160 H200 V190" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M670 100 V160 H600 V190" stroke="#DC2626" strokeWidth="2" />

                    {/* Branch Left: Civil Track */}
                    <rect x="90" y="190" width="240" height="130" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="210" y="215" textAnchor="middle" fill="#38BDF8" fontSize="12" fontWeight="bold">
                      TRACK A: COMMERCIAL RECOVERY
                    </text>
                    <text x="210" y="240" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      • MSME Samadhaan (3x RBI Int)
                    </text>
                    <text x="210" y="260" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      • Order 37 Summary Suit
                    </text>
                    <text x="210" y="280" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      • Del Credere Broker Indemnity
                    </text>
                    <text x="210" y="300" textAnchor="middle" fill="#94A3B8" fontSize="10">
                      Enforce via Commercial Court
                    </text>

                    {/* Branch Right: Criminal Track */}
                    <rect x="470" y="190" width="260" height="130" rx="8" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                    <text x="600" y="215" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                      TRACK B: CRIMINAL CONSPIRACY
                    </text>
                    <text x="600" y="240" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      • BNS §318(4) Cheating + §61(2)
                    </text>
                    <text x="600" y="260" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      • Joint EOW / Crime Branch FIR
                    </text>
                    <text x="600" y="280" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                      • Freeze Local Broker Bank Accounts
                    </text>
                    <text x="600" y="300" textAnchor="middle" fill="#94A3B8" fontSize="10">
                      Multi-victim cluster representation
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Decision Tree */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                    <span className="text-[10px] font-bold uppercase text-red-400">Step 1</span>
                    <h3 className="text-sm font-bold text-white">Default Detected &amp; Evidence Audit</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Compile bill copies, Lorry Receipts (LR), E-Way bills, and broker WhatsApp voice notes guaranteeing credit.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-amber-500">
                    <span className="text-[10px] font-bold uppercase text-amber-400">Step 2</span>
                    <h3 className="text-sm font-bold text-white">Issue 72-Hour Co-Notice</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Serve joint demand on both buyer and broker, establishing the broker&apos;s Del Credere liability and tortious negligence.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-500">
                    <span className="text-[10px] font-bold uppercase text-emerald-400">Step 3A (Civil Track)</span>
                    <h3 className="text-sm font-bold text-white">MSME Samadhaan + Order 37 Suit</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Lodge MSME claim against buyer entity for compound interest and file Order 37 summary suit arraying broker as co-defendant.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-500">
                    <span className="text-[10px] font-bold uppercase text-red-400">Step 3B (Criminal Track)</span>
                    <h3 className="text-sm font-bold text-white">EOW / Crime Branch FIR (BNS §318)</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Lodge multi-victim complaint alleging mandi bust-out fraud; freeze the broker&apos;s local bank accounts and godowns.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Interactive Scenario Tabs */}
              <section
                id="heading-scenarios"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Commercial Dispute Scenarios &amp; Recovery Action Protocols
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your commercial failure mode below to review the specific legal basis and multi-phase action protocol:
                </p>

                <TextileBrokerScenarioTabs />
              </section>

              {/* Section 6: Worked Financial & Interest Calculation Box */}
              <section
                id="heading-worked-calculation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Worked Calculation: ₹40 Lakh Default Claim Ledger with MSMED Compound Interest
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consider a common scenario: A Surat powerloom weaver supplies 40,000 metres of polyester grey fabric valued at ₹40,00,000 on 60 days credit via a local broker who charged a 2% del credere commission. The buyer absconds upon maturity. Below is the statutory claim calculation when filing under the MSMED Act combined with broker joint liability:
                </p>

                {/* Ledger Container */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-7 text-white space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
                    <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
                      Statutory Claim Breakdown (12 Months Default)
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded">
                      RBI Base Rate: 6.50% | MSMED Rate: 19.50% Compounded Monthly
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2 bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Principal Consignment Value:</span>
                        <span className="font-mono font-bold text-white">₹40,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Agreed Credit Period:</span>
                        <span className="font-mono text-slate-300">60 Days (s.15 capped at 45d)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Default Duration:</span>
                        <span className="font-mono text-slate-300">12 Calendar Months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Statutory MSMED Interest Rate:</span>
                        <span className="font-mono text-amber-400 font-semibold">19.50% p.a. (3x RBI)</span>
                      </div>
                    </div>

                    <div className="space-y-2 bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Monthly Compounded Interest (12m):</span>
                        <span className="font-mono font-bold text-amber-400">₹8,53,600</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Brokerage Clawback Claim (2%):</span>
                        <span className="font-mono text-slate-300">₹80,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Commercial Notice &amp; Legal Costs:</span>
                        <span className="font-mono text-slate-300">₹45,000</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-700 pt-2">
                        <span className="font-bold text-white">Total Joint &amp; Several Demand:</span>
                        <span className="font-mono font-bold text-emerald-400 text-base sm:text-lg">
                          ₹49,78,600
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong>Legal Enforcement Effect:</strong> In a joint legal notice, the buyer is billed for the full ₹49,78,600 with notice of Section 43B(h) disallowance, while the broker is served with an indemnification demand under Contract Act s.182/211 for ₹40,80,000 (principal + brokerage reversal) failing which civil attachment and BNS s.318 criminal conspiracy proceedings follow. Calculate your exact interest figures on our{" "}
                    <Link
                      href="/msme-odr-portal-delayed-payment-guide"
                      className="text-red-400 underline hover:text-red-300"
                    >
                      MSME ODR delayed payment portal guide
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 7: Evidence Checklist Under BSA 2023 */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Bharatiya Sakshya Adhiniyam, 2023: Evidentiary Checklist to Bind the Broker
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)—which replaces Section 65B of the repealed Indian Evidence Act—electronic records are directly admissible in court when accompanied by the prescribed statutory certificate. To establish broker liability and defeat the &apos;mere intermediary&apos; defense, compile the following evidence:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[#DC2626] font-bold shrink-0">✔</span>
                    <span className="text-slate-700">
                      <strong>Brokerage Memos / Vouchers:</strong> Commission ledger entries showing &gt;=2% del credere fee deduction or broker signature on delivery challans.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[#DC2626] font-bold shrink-0">✔</span>
                    <span className="text-slate-700">
                      <strong>WhatsApp &amp; Voice Note Exports:</strong> Audio recordings and text logs where the broker states &apos;payment ki guarantee meri hai&apos; or instructs dispatch to the outstation buyer.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[#DC2626] font-bold shrink-0">✔</span>
                    <span className="text-slate-700">
                      <strong>LR / Bilty &amp; E-Way Bills:</strong> Complete electronic transport documentation identifying consignor mill, transport company, and destination delivery details.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[#DC2626] font-bold shrink-0">✔</span>
                    <span className="text-slate-700">
                      <strong>Section 63 BSA Certificate:</strong> Hash-generated statutory metadata certificate affirming hash integrity of mobile exports, ERP ledgers, and emails.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[#DC2626] font-bold shrink-0">✔</span>
                    <span className="text-slate-700">
                      <strong>Panch / Mahajan Minutes:</strong> Written acknowledgments, settlement undertakings, or minutes recorded before trade associations (e.g., FOSTTA, Maskati).
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[#DC2626] font-bold shrink-0">✔</span>
                    <span className="text-slate-700">
                      <strong>Udyam Registration Certificate:</strong> Active MSME registration validating enterprise eligibility under Chapter V of the MSMED Act, 2006.
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs text-slate-500">
                    Explore related apparel recovery protocols across our sibling sector guides:{" "}
                    <Link
                      href="/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery"
                      className="text-red-600 underline hover:text-red-700"
                    >
                      Retail Fashion Brand SOR Rejection Recovery
                    </Link>
                    ,{" "}
                    <Link
                      href="/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery"
                      className="text-red-600 underline hover:text-red-700"
                    >
                      Dyeing &amp; Printing Job Work Fabric Lien Recovery
                    </Link>
                    , and{" "}
                    <Link
                      href="/garment-buying-house-export-order-cancelled-after-cutting-recovery"
                      className="text-red-600 underline hover:text-red-700"
                    >
                      Garment Buying House Export Cancellation Recovery
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 8: FAQ Accordion */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Frequently Asked Questions on Textile Broker Liability
                  </h2>
                </div>

                <div className="space-y-3 pt-2">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 open:bg-white transition-colors"
                    >
                      <summary className="flex items-center justify-between p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer list-none select-none">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
                          {faq.question}
                        </span>
                        <svg
                          className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Primary Regulatory & Statutory Sources */}
              <section className="bg-slate-100 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-3">
                <h3 className="text-xs uppercase tracking-widest font-bold text-slate-600">
                  Primary Legislative &amp; Judicial References
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="hover:text-slate-900 underline"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-500 pt-1">
                  // TODO(reviewer): Advocate attribution verified — Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions.
                </p>
              </section>

              {/* Section 9: Dual-Track B2B Conversion CTA */}
              <section className="scroll-mt-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-3">
                    B2B Institutional Recovery Desk
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                    Recover Unpaid Outstation Fabric Consignments &amp; Bind Defaulting Brokers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                    Deploy advocate-drafted statutory demand notices establishing Del Credere agency liability, file coordinated multi-victim criminal complaints before the Economic Offences Wing, and invoke MSME Samadhaan conciliation with 3x RBI compound interest.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {/* Track 1: Single Case Test */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-xs uppercase font-bold text-red-400 tracking-wider block mb-1">
                        Track 1 — Single Defaulting Consignment
                      </span>
                      <h4 className="text-base font-bold text-white">Test 1 Overdue Case (₹999)</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Advocate-drafted statutory co-notice served on both outstation buyer and local broker via Email, WhatsApp, and Speed Post RPAD with electronic tracking.
                      </p>
                    </div>
                    <TextileBrokerNoticeCTA
                      buttonText="Issue Broker Co-Notice (₹999)"
                      variant="primary"
                    />
                  </div>

                  {/* Track 2: Enterprise Batch Desk */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-300 tracking-wider block mb-1">
                        Track 2 — Mandi Multi-Victim / Mill Ledger
                      </span>
                      <h4 className="text-base font-bold text-white">Batch Recovery (10 to 1,000+ Cases)</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Upload CSV ledger of defaulted consignments. Dedicated institutional recovery desk handles multi-mill police complaints, EOW representations, and commercial suits.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                        className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-white hover:bg-slate-100 transition-colors text-center"
                      >
                        Upload Defaulter CSV
                      </Link>
                      <Link
                        href="/user/representees"
                        className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-center"
                      >
                        Institutional Desk
                      </Link>
                    </div>
                  </div>
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
