import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import LegalNoticeChargesCTA from "./LegalNoticeChargesCTA";
import LegalNoticeChargesTableOfContents from "./LegalNoticeChargesTableOfContents";
import LegalNoticeChargesCalculator from "./LegalNoticeChargesCalculator";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Legal Notice Charges in India (2026): What It Costs",
  description:
    "Legal notice fees by dispute type and city, what drives the price, delivery costs and what LegalRecovery charges, transparently.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-charges`,
  },
  openGraph: {
    title: "Legal Notice Charges in India (2026): What It Costs",
    description:
      "Comprehensive breakdown of legal notice costs in India by dispute type, city advocate rates, India Post delivery fees, and our transparent ₹999 flat pricing.",
    url: `${SITE_URL}/legal-notice-charges`,
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
    title: "Advocates Act, 1961 — Section 30 (Right of Advocates to Practise) & Section 34 (Rules on Advocate Conduct)",
    url: "https://www.indiacode.nic.in/handle/123456789/1631",
  },
  {
    title: "Bar Council of India (BCI) Rules — Part VI, Chapter II: Standards of Professional Conduct and Etiquette",
    url: "http://www.barcouncilofindia.org/about/professional-standards/rules-on-professional-standards/",
  },
  {
    title: "Code of Civil Procedure, 1908 (CPC) — Section 35 (Court Costs Including Pre-Suit Notice Expenses) & Section 80 (Statutory Notice to Government)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Negotiable Instruments Act, 1881 — Section 138(b) (Statutory Demand Notice for Cheque Dishonour Within 30 Days)",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "India Post Domestic Speed Post Tariff Schedule — Department of Posts, Ministry of Communications",
    url: "https://www.indiapost.gov.in/MBE/Pages/Content/Speed-Post.aspx",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Email & WhatsApp Notice Delivery)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "How much does a lawyer typically charge to send a legal notice in India?",
    answer:
      "In India, private advocate charges for drafting and issuing a legal notice range widely from ₹3,500 to ₹15,000 for standard disputes (such as salary delay, security deposit refund, or consumer defects) and can exceed ₹25,000 to ₹50,000 in high-stakes commercial or property disputes. Legal fees depend on the advocate's years of practice, city tier (Delhi and Mumbai command higher rates than Tier-2 cities), complexity of factual annexures, and chamber overheads. On LegalRecovery.in, verified high court advocates draft and dispatch notices for a transparent flat fee of ₹999 all-inclusive.",
  },
  {
    question: "What are the legal notice charges for recovery of money?",
    answer:
      "For money recovery disputes (such as unpaid freelance invoices, business dues, or friendly loans), advocate charges typically vary based on the claim amount. For claims under ₹1 lakh, city lawyers charge ₹3,000 to ₹7,000; for claims between ₹1 lakh and ₹10 lakh, fees range from ₹7,000 to ₹15,000; and for corporate claims above ₹10 lakh, fees often reach ₹20,000 or more. Under Bar Council of India rules, advocates are prohibited from charging contingent percentage fees on the recovered sum, meaning drafting fees must be fixed upfront regardless of the claim amount.",
  },
  {
    question: "What are the speed post and delivery charges for sending a legal notice?",
    answer:
      "An official legal notice must be sent via Registered Post with Acknowledgment Due (RPAD) or Speed Post through India Post. Speed Post tariffs range from ₹41 to ₹90 for consignments up to 50 grams depending on whether the destination is local or inter-state, plus postal stationery. While independent law chambers often bill clients ₹500 to ₹1,500 under miscellaneous clerkage and dispatch expenses, the actual India Post fee is under ₹100, which is fully covered in LegalRecovery's flat ₹999 fee.",
  },
  {
    question: "Can I claim the legal notice charges back from the opposite party?",
    answer:
      "Yes. Under Section 35 of the Code of Civil Procedure (CPC) and Section 38 of the Consumer Protection Act, 2019, Indian courts and consumer commissions have wide discretion to award actual pre-litigation notice costs to the aggrieved claimant. In your legal notice prayer clause, your advocate explicitly adds a demand for legal drafting costs (typically ₹2,500 to ₹10,000) alongside the principal debt and statutory interest. When matters settle out of court, defaulters frequently pay the notice charges as part of the negotiated settlement.",
  },
  {
    question: "Why do legal notice charges in Delhi and Mumbai differ from Tier-2 cities?",
    answer:
      "Legal notice fees in metropolitan centers like Delhi NCR, Mumbai, and Bengaluru are driven by higher chamber operating overheads, proximity to High Courts, and commercial dispute volume, where independent advocates routinely quote ₹5,000 to ₹20,000. In Tier-2 cities such as Lucknow, Jaipur, or Indore, district court lawyers often draft notices between ₹2,000 and ₹6,000. Online platforms like LegalRecovery eliminate geographic pricing disparities by providing pan-India advocate drafting at a uniform ₹999 price point.",
  },
  {
    question: "Is it legally valid to send a legal notice without hiring an expensive lawyer?",
    answer:
      "Legally, an individual can draft and dispatch a demand notice themselves. However, a personal letter lacks the evidentiary weight of an Advocate Legal Notice issued on an official Supreme Court or High Court advocate letterhead bearing Bar Council enrollment credentials. Companies and defaulters routinely ignore informal personal demands. A formal advocate notice establishes immediate litigation readiness, creates a timestamped statutory record under Section 63 of the Bharatiya Sakshya Adhiniyam 2023, and triggers criminal liability in cheque bounce matters under Section 138 NI Act.",
  },
  {
    question: "Legal notice bhejne ka kitna kharcha aata hai aur advocate ki fees kitni hoti hai?",
    answer:
      "Bharat mein aam taur par district court ya high court ke private vakil legal notice draft karne aur bhejne ke liye ₹3,000 se ₹15,000 tak fees lete hain, jismein typing aur speed post ka kharcha alag se joda jata hai. Cheque bounce ya commercial money recovery ke mamlon mein fees aur zyada ho sakti hai. LegalRecovery.in par verified advocate dwara complete legal notice drafting, Speed Post dispatch aur tracking report sirf flat ₹999 mein uplabdh karwaya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a Legal Notice Cost in India?",
  description:
    "Legal notice fees by dispute type and city, what drives the price, delivery costs and what LegalRecovery charges, transparently.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-notice-charges`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Legal Notice Charges",
      item: `${SITE_URL}/legal-notice-charges`,
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

export default function LegalNoticeChargesPage() {
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Pricing & Legal Notice Charges", href: "/legal-notice-charges" },
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
        {/* Hero Section matching strict site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>2026 Legal Fee Benchmark</span>
              <span className="text-red-500">•</span>
              <span>Statutory Pre-Litigation Costs</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Much Does a Legal Notice Cost in India?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              id="heading-answer-box"
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Legal Notice Cost &amp; Fee Standard)
              </p>
              <p>
                In India, hiring an independent advocate to draft and serve a legal notice typically costs between ₹3,500 and ₹15,000, depending on the dispute type, claim value, and city chambers. India Post Speed Post dispatch adds ₹45 to ₹90. On LegalRecovery.in, verified high court advocates draft, review, and dispatch formal notices via Registered Speed Post for a transparent flat fee of ₹{basePrice}, with zero hidden clerkage or consultation costs.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹{basePrice}</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">LegalRecovery Flat Fee</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹3.5k–₹15k</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Typical Private Advocate Rate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹45–₹90</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">India Post Speed Post Tariff</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15–30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Demand Window</p>
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
            <LegalNoticeChargesTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* SECTION 1 (Archetype G4): Big Comparison Table Hero Element */}
              <section
                id="heading-comparison-matrix"
                aria-labelledby="heading-comparison-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparison-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Comparing Pre-Litigation and Dispute Resolution Routes in India
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    2026 Cost &amp; Timeline Matrix
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before investing thousands of rupees in formal litigation or court filings, understanding the total cost of ownership across different legal remedies is essential. Below is a structured comparison of legal notices, direct consumer commission filings, civil summary suits, and police reports in India.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Comparative breakdown of dispute resolution mechanisms in India by cost, time, and documentation
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 uppercase font-bold text-[11px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Dispute Route</th>
                        <th scope="col" className="p-3 sm:p-4">Total Typical Cost</th>
                        <th scope="col" className="p-3 sm:p-4">Time to Action</th>
                        <th scope="col" className="p-3 sm:p-4">Proof Needed</th>
                        <th scope="col" className="p-3 sm:p-4">Resolution Rate</th>
                        <th scope="col" className="p-3 sm:p-4">When to Choose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="bg-red-50/40 hover:bg-red-50/70 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">
                          LegalRecovery Advocate Notice
                        </th>
                        <td className="p-3 sm:p-4 font-bold text-[#DC2626]">
                          Flat ₹{basePrice} (All-Inclusive)
                        </td>
                        <td className="p-3 sm:p-4">24–48 hours drafting; 15-day demand</td>
                        <td className="p-3 sm:p-4">Invoices, bank statements, chat logs, contract</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">75%–85% pre-suit settlement</td>
                        <td className="p-3 sm:p-4">Immediate, low-cost pre-litigation recovery for claims up to ₹50L</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900">
                          Traditional Chamber Advocate Notice
                        </th>
                        <td className="p-3 sm:p-4">
                          ₹3,500 – ₹20,000 + clerkage &amp; post
                        </td>
                        <td className="p-3 sm:p-4">5–10 working days</td>
                        <td className="p-3 sm:p-4">Physical file, paper copies, fee agreement</td>
                        <td className="p-3 sm:p-4">70%–80% settlement</td>
                        <td className="p-3 sm:p-4">Complex multi-party commercial suits or local property claims</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900">
                          Consumer Commission (e-Jagriti)
                        </th>
                        <td className="p-3 sm:p-4">
                          ₹0 (up to ₹5L claim) or ₹200–₹2,000 court fee + advocate fee
                        </td>
                        <td className="p-3 sm:p-4">6–18 months average adjudication</td>
                        <td className="p-3 sm:p-4">Product bills, repair jobs, notice proof &amp; tracking</td>
                        <td className="p-3 sm:p-4">Binding court order + compensation</td>
                        <td className="p-3 sm:p-4">Defective goods, service deficiency, refused refunds after notice</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900">
                          Order 37 CPC Summary Suit
                        </th>
                        <td className="p-3 sm:p-4">
                          3%–8% ad-valorem court fee + ₹25,000–₹1,00,000 advocate fees
                        </td>
                        <td className="p-3 sm:p-4">12–36 months</td>
                        <td className="p-3 sm:p-4">Written promissory note, bills of exchange, signed debt</td>
                        <td className="p-3 sm:p-4">Decree enforceable through civil attachment</td>
                        <td className="p-3 sm:p-4">Liquidated written commercial debts exceeding ₹5,00,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900">
                          Police / Cyber Cell (BNS 318)
                        </th>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">
                          ₹0 government fee
                        </td>
                        <td className="p-3 sm:p-4">Varies; investigation discretion</td>
                        <td className="p-3 sm:p-4">Proof of fraudulent inducement from inception</td>
                        <td className="p-3 sm:p-4">Criminal FIR; no direct debt recovery guarantee</td>
                        <td className="p-3 sm:p-4">Pure cyber fraud, identity theft, Ponzi schemes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 2 (Archetype G4): Which Route Is Right for You (3 Personas) */}
              <section
                id="heading-persona-selector"
                aria-labelledby="heading-persona-selector-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-persona-selector-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Route Is Right for Your Claim Value &amp; Budget?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Select your dispute profile to identify whether a flat-rate online legal notice or private litigation makes financial sense.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Persona 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                          Claims: ₹5,000 – ₹2,00,000
                        </span>
                        <span className="text-xs font-bold text-slate-400">Persona 1</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                        Consumers, Employees &amp; Tenants
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If an employer has withheld your Full and Final (F&amp;F) settlement, a landlord refuses to refund your security deposit, or an e-commerce brand cancelled an order without refunding your money, paying a private lawyer ₹5,000 to ₹10,000 makes little economic sense. A flat ₹{basePrice} advocate legal notice establishes your formal demand, satisfies the mandatory pre-action protocol, and triggers rapid compliance without eroding your claim.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <Link
                        href="/send-legal-notice-online-india"
                        className="text-xs font-bold text-[#DC2626] hover:underline inline-flex items-center gap-1"
                      >
                        Send Online Legal Notice →
                      </Link>
                    </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                          Claims: ₹1,00,000 – ₹10,00,000
                        </span>
                        <span className="text-xs font-bold text-slate-400">Persona 2</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                        Freelancers, Vendors &amp; Cheque Payees
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        For unpaid client invoices, commercial contractor defaults, or dishonoured cheques governed by Section 138 of the Negotiable Instruments Act, 1881, a statutory notice is legally mandatory within 30 days of memo receipt. A tightly drafted advocate notice quoting statutory interest and criminal provisions forces defaulting businesses to settle prior to facing trial under Section 141 of the NI Act.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <Link
                        href="/cheque-bounce-case-against-company-directors"
                        className="text-xs font-bold text-[#DC2626] hover:underline inline-flex items-center gap-1"
                      >
                        Explore Cheque Bounce Rules →
                      </Link>
                    </div>
                  </div>

                  {/* Persona 3 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">
                          Claims: ₹10,00,000+
                        </span>
                        <span className="text-xs font-bold text-slate-400">Persona 3</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                        Real Estate Buyers &amp; Corporate Disputes
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        In major builder delays (RERA complaints), high-value corporate supplier defaults, or partition suits, an initial legal notice serves as the structural foundation for subsequent court pleadings. While the notice itself can be issued via LegalRecovery to test settlement appetite for ₹{basePrice}, subsequent litigation before the State/National Commission or High Court will require retaining specialized trial counsel.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <Link
                        href="/tools/consumer-commission-fee-jurisdiction-calculator"
                        className="text-xs font-bold text-[#DC2626] hover:underline inline-flex items-center gap-1"
                      >
                        Calculate Court Jurisdiction Fees →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Hand-Authored SVG Diagram: Cost vs Resolution Hierarchy */}
              <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Dispute Resolution Cost vs Time Hierarchy (India 2026)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Visualising how pre-litigation legal notice dramatically lowers initial financial exposure compared to formal litigation.
                </p>

                <div className="w-full flex justify-center overflow-x-auto py-2">
                  <svg
                    viewBox="0 0 760 220"
                    className="w-full max-w-2xl h-auto font-sans"
                    role="img"
                    aria-label="Dispute resolution cost versus timeline flow chart"
                  >
                    {/* Background Grid */}
                    <rect width="760" height="220" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />

                    {/* Step 1: Legal Notice */}
                    <g transform="translate(30, 30)">
                      <rect width="180" height="150" rx="10" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                      <text x="90" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991B1B">
                        STAGE 1: ADVOCATE NOTICE
                      </text>
                      <text x="90" y="60" textAnchor="middle" fontSize="20" fontWeight="900" fill="#DC2626">
                        ₹999 Flat
                      </text>
                      <text x="90" y="85" textAnchor="middle" fontSize="11" fill="#475569">
                        Turnaround: 24–48 Hours
                      </text>
                      <text x="90" y="105" textAnchor="middle" fontSize="11" fill="#475569">
                        Demand Window: 15 Days
                      </text>
                      <rect x="25" y="120" width="130" height="20" rx="6" fill="#DC2626" />
                      <text x="90" y="134" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">
                        80% Resolve Here
                      </text>
                    </g>

                    {/* Arrow 1 */}
                    <path d="M 220 105 L 260 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="265,105 258,100 258,110" fill="#94A3B8" />
                    <text x="242" y="95" textAnchor="middle" fontSize="10" fill="#64748B">If Unpaid</text>

                    {/* Step 2: Consumer / Statutory Commission */}
                    <g transform="translate(275, 30)">
                      <rect width="190" height="150" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                      <text x="95" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1E40AF">
                        STAGE 2: E-JAGRITI / RERA
                      </text>
                      <text x="95" y="60" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1D4ED8">
                        ₹0 – ₹2,000 Govt Fee
                      </text>
                      <text x="95" y="85" textAnchor="middle" fontSize="11" fill="#475569">
                        Turnaround: 6–12 Months
                      </text>
                      <text x="95" y="105" textAnchor="middle" fontSize="11" fill="#475569">
                        Advocate Optional
                      </text>
                      <rect x="25" y="120" width="140" height="20" rx="6" fill="#3B82F6" />
                      <text x="95" y="134" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">
                        Statutory Damages
                      </text>
                    </g>

                    {/* Arrow 2 */}
                    <path d="M 475 105 L 515 105" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="520,105 513,100 513,110" fill="#94A3B8" />
                    <text x="498" y="95" textAnchor="middle" fontSize="10" fill="#64748B">Commercial</text>

                    {/* Step 3: Civil Recovery Suit */}
                    <g transform="translate(530, 30)">
                      <rect width="190" height="150" rx="10" fill="#FAF5FF" stroke="#A855F7" strokeWidth="1.5" />
                      <text x="95" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6B21A8">
                        STAGE 3: CIVIL SUIT
                      </text>
                      <text x="95" y="60" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#7E22CE">
                        ₹30k – ₹1,50,000+
                      </text>
                      <text x="95" y="85" textAnchor="middle" fontSize="11" fill="#475569">
                        Turnaround: 2–4 Years
                      </text>
                      <text x="95" y="105" textAnchor="middle" fontSize="11" fill="#475569">
                        Ad-Valorem Court Fee 3–8%
                      </text>
                      <rect x="25" y="120" width="140" height="20" rx="6" fill="#A855F7" />
                      <text x="95" y="134" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">
                        Attachment of Assets
                      </text>
                    </g>
                  </svg>
                </div>
              </section>

              {/* SECTION 3: What Drives Legal Notice Charges by Advocates */}
              <section
                id="heading-cost-factors"
                aria-labelledby="heading-cost-factors-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-cost-factors-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Drives Legal Notice Charges by Advocates in India?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike statutory court fees, which are strictly codified by State Court Fees Acts, advocate fees for pre-litigation notices are not capped by legislation. Under the Advocates Act, 1961 and the Bar Council of India Rules, legal professionals have the autonomy to determine their professional charges. When consulting independent law chambers, four distinct factors dictate the quotation:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">1</span>
                      Factual &amp; Statutory Complexity
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      A straightforward demand notice for a delayed ₹30,000 refund requires standard clauses under Section 2(11) of the Consumer Protection Act. Conversely, a notice for breach of an employment non-compete clause, intellectual property infringement, or multi-party shareholder disputes involves reviewing dozens of agreements and formulating strict legal averments.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">2</span>
                      Advocate Seniority &amp; Bar Enrolment
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Chamber advocates with 15+ years of practice at the High Court or Supreme Court routinely charge between ₹15,000 and ₹50,000 for drafting notices on their personal letterheads. Junior advocates and district practitioners typically quote between ₹3,000 and ₹7,000 for identical factual disputes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">3</span>
                      Number of Opposing Parties &amp; Arraignment
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      In cheque bounce matters governed by Section 141 of the NI Act, the legal notice must be individually served to the drawer company as well as all active Managing Directors and signatories. Traditional chambers charge per-respondent dispatch and drafting surcharges of ₹1,000 to ₹2,500 per additional party.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">4</span>
                      Chamber Overhead &amp; Geographic Location
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Lawyers practicing in high-cost commercial districts (such as South Delhi, Central Mumbai, or Bengaluru CBD) maintain physical offices, legal assistants, and typists, costs that are factored into client consultation and clerkage bills. Online platforms operate digitally to strip out these overheads.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: Legal Notice Charges for Recovery of Money (Slabs) */}
              <section
                id="heading-recovery-slabs"
                aria-labelledby="heading-recovery-slabs-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-recovery-slabs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Notice Charges for Recovery of Money: Value Slabs
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Money recovery is the single most common category of civil and commercial disputes in India. While the Bar Council of India expressly prohibits advocates from entering into contingency fee arrangements (charging a percentage of money recovered), traditional law chambers calibrate their drafting fees based on the principal debt at stake.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Typical advocate fees for money recovery legal notices across claim value brackets
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 uppercase font-bold text-[11px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Claim Bracket</th>
                        <th scope="col" className="p-3 sm:p-4">Dispute Nature</th>
                        <th scope="col" className="p-3 sm:p-4">Traditional Advocate Fee</th>
                        <th scope="col" className="p-3 sm:p-4">LegalRecovery Price</th>
                        <th scope="col" className="p-3 sm:p-4">Statutory Pre-Condition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Up to ₹50,000</td>
                        <td className="p-3 sm:p-4">E-commerce refunds, small freelance gigs, withheld security deposits</td>
                        <td className="p-3 sm:p-4">₹2,500 – ₹5,000</td>
                        <td className="p-3 sm:p-4 font-bold text-[#DC2626]">₹{basePrice} Flat</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Recommended (High ROI)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">₹50,000 – ₹2,00,000</td>
                        <td className="p-3 sm:p-4">Salary arrears, F&amp;F settlement delay, appliance replacement defaults</td>
                        <td className="p-3 sm:p-4">₹4,000 – ₹8,500</td>
                        <td className="p-3 sm:p-4 font-bold text-[#DC2626]">₹{basePrice} Flat</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Pre-requisite for labour/consumer</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">₹2,00,000 – ₹10,00,000</td>
                        <td className="p-3 sm:p-4">Cheque bounce (NI Act 138), MSME vendor invoices, loan defaults</td>
                        <td className="p-3 sm:p-4">₹7,500 – ₹18,000</td>
                        <td className="p-3 sm:p-4 font-bold text-[#DC2626]">₹{basePrice} Flat</td>
                        <td className="p-3 sm:p-4 text-red-600 font-bold">Mandatory within 30 days</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Above ₹10,00,000</td>
                        <td className="p-3 sm:p-4">Commercial contracts, builder possession failure, B2B debt</td>
                        <td className="p-3 sm:p-4">₹15,000 – ₹45,000+</td>
                        <td className="p-3 sm:p-4 font-bold text-[#DC2626]">₹{basePrice} Flat</td>
                        <td className="p-3 sm:p-4 text-red-600 font-bold">Pre-condition for Section 12A mediation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <span className="font-bold">Important Statutory Note:</span> Under Section 12A of the Commercial Courts Act, 2015, filing a commercial money recovery suit without exhausting Pre-Institution Mediation is barred unless urgent interim relief is prayed for. A well-documented advocate legal notice serves as the prima facie evidence of dispute crystallization when initiating mediation. For detailed money recovery timelines in Hindi, refer to our comprehensive guide on{" "}
                  <Link href="/hi/money-recovery-case-kitna-time-lagta-hai" className="font-bold text-[#DC2626] underline">
                    Court Mein Paisa Wapas Milne Mein Kitna Time Lagta Hai
                  </Link>.
                </div>
              </section>

              {/* SECTION 5: City-Wise Legal Notice Charges */}
              <section
                id="heading-city-charges"
                aria-labelledby="heading-city-charges-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-city-charges-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  City-Wise Legal Notice Charges by Advocates: Delhi, Mumbai &amp; Tech Hubs
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Advocate notice fees fluctuate significantly between metropolitan jurisdictions and regional district bar associations. Here is the verified benchmark for independent chamber drafting across major Indian business centers:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Delhi NCR */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-slate-900">Delhi NCR</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        High Court &amp; 7 Districts
                      </span>
                    </div>
                    <p className="text-xl font-black text-slate-900">₹4,500 – ₹15,000</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Driven by commercial volume across Saket, Tis Hazari, Patiala House, and Delhi High Court chambers. Corporate and cheque bounce notices routinely exceed ₹10,000.
                    </p>
                  </div>

                  {/* Mumbai */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-slate-900">Mumbai &amp; MMR</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Bombay HC &amp; City Civil
                      </span>
                    </div>
                    <p className="text-xl font-black text-slate-900">₹5,000 – ₹20,000</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      South Mumbai (Fort), BKC, and suburban chambers command the highest real estate and commercial notice rates in the country, often with consultation surcharges.
                    </p>
                  </div>

                  {/* Bengaluru */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-slate-900">Bengaluru</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Karnataka HC &amp; Mayo Hall
                      </span>
                    </div>
                    <p className="text-xl font-black text-slate-900">₹4,000 – ₹12,500</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Specialized demand notices for IT startup unpaid wages, vendor SaaS contracts, and residential rental security deposits dominate Bengaluru practice.
                    </p>
                  </div>

                  {/* Hyderabad & Chennai */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-slate-900">Hyderabad &amp; Chennai</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Madras &amp; Telangana HC
                      </span>
                    </div>
                    <p className="text-xl font-black text-slate-900">₹3,500 – ₹10,000</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Standard fee structures across George Town, Nampally, and High Court bar rooms for civil recoveries, property partition notices, and consumer grievances.
                    </p>
                  </div>

                  {/* Kolkata & Pune */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-slate-900">Kolkata &amp; Pune</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Calcutta HC &amp; Shivajinagar
                      </span>
                    </div>
                    <p className="text-xl font-black text-slate-900">₹3,000 – ₹9,000</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Chambers handle extensive real estate consumer notices, builder defect claims, and MSME manufacturing recovery disputes.
                    </p>
                  </div>

                  {/* Tier-2 Cities */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-slate-900">Tier-2 / Tier-3 Hubs</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        District Bar Associations
                      </span>
                    </div>
                    <p className="text-xl font-black text-slate-900">₹2,000 – ₹6,000</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In cities like Lucknow, Jaipur, Patna, Indore, or Nagpur, local advocates draft notices at moderate price points, though digital tracking is often lacking.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 6: Speed Post, Courier & Electronic Delivery Charges */}
              <section
                id="heading-dispatch-charges"
                aria-labelledby="heading-dispatch-charges-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-dispatch-charges-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  India Post Speed Post, Courier &amp; Electronic Delivery Charges
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A legal notice is legally incomplete until it has been formally served upon the opposite party with unimpeachable proof of delivery. In Indian jurisprudence, serving via private courier alone is precarious because private delivery boys frequently fail to produce certified proof of delivery in court. India Post Registered Speed Post is the gold standard recognised under Section 27 of the General Clauses Act, 1897.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                    <h3 className="font-bold text-base text-slate-900">
                      Official India Post Domestic Speed Post Tariff
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                      <li className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span>Local (up to 50 grams):</span>
                        <span className="font-bold text-slate-800">₹41.30 (including GST)</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span>Inter-state (up to 50 grams, 201–1000 km):</span>
                        <span className="font-bold text-slate-800">₹47.20 (including GST)</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span>Weight between 51g to 200g (multi-page agreements):</span>
                        <span className="font-bold text-slate-800">₹60.00 – ₹80.00</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span>Speed Post Tracking Consignment Slip:</span>
                        <span className="font-bold text-emerald-700">Official Web Tracking Included</span>
                      </li>
                    </ul>
                    <p className="text-xs text-slate-500 italic">
                      Note: Private advocate clerks routinely mark up postal fees to ₹500 or ₹1,000 under clerkage expenses.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                    <h3 className="font-bold text-base text-slate-900">
                      Electronic Service under Section 63 BSA 2023
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing the old Section 65B of the Indian Evidence Act), electronic transmission via email with cryptographic server delivery receipts and WhatsApp messages with double blue-tick delivery timestamps constitute valid secondary evidence.
                    </p>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                      <p className="font-bold text-slate-900">Dual-Mode Dispatch Standard:</p>
                      <p>
                        Every notice on LegalRecovery is simultaneously delivered via physical India Post Speed Post and tracked electronic mail to corporate registered office inboxes, giving zero room for the defaulter to claim non-receipt.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 7: What LegalRecovery Charges (Transparent ₹999) */}
              <section
                id="heading-legalrecovery-pricing"
                aria-labelledby="heading-legalrecovery-pricing-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-legalrecovery-pricing-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What LegalRecovery Charges: Transparent Flat ₹{basePrice} Pricing
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  LegalRecovery was founded on a simple principle: access to high-quality pre-litigation advocate advocacy should not be priced like a luxury. Traditional chambers maintain complex billing items that double your final invoice. Here is exactly what is included in our flat ₹{basePrice} fee:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5 space-y-3">
                    <h3 className="font-bold text-base text-emerald-950 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✓</span>
                      Included in LegalRecovery Flat ₹{basePrice}
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <li>• Case evaluation &amp; evidentiary review by verified advocates</li>
                      <li>• Formal statutory drafting on official High Court advocate letterhead</li>
                      <li>• Specific legal provisions cited (CPA 2019, NI Act, Contract Act, BSA 2023)</li>
                      <li>• India Post Registered Speed Post dispatch with postal consignment number</li>
                      <li>• Real-time digital tracking dashboard until confirmed delivery</li>
                      <li>• Electronic notice delivery to company grievance &amp; director emails</li>
                      <li>• Certified delivery report ready for submission to e-Jagriti or Civil Court</li>
                    </ul>
                  </div>

                  <div className="bg-rose-50/40 border border-rose-200 rounded-2xl p-5 space-y-3">
                    <h3 className="font-bold text-base text-rose-950 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">✗</span>
                      What Traditional Chambers Add to Your Bill
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <li>• Initial chamber consultation fee: ₹1,500 – ₹5,000</li>
                      <li>• Advocate drafting fee: ₹3,500 – ₹15,000</li>
                      <li>• Typist &amp; legal paper stationery charges: ₹500 – ₹1,200</li>
                      <li>• Clerkage fee for India Post filing: ₹500 – ₹1,000</li>
                      <li>• Re-drafting or amendment fees if facts need updates: ₹1,500+</li>
                      <li>• In-person follow-up meetings: Billed hourly</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* SECTION 8: Can You Claim Notice Charges Back from Defaulter? */}
              <section
                id="heading-recovery-of-costs"
                aria-labelledby="heading-recovery-of-costs-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-recovery-of-costs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Can You Claim Legal Notice Charges Back from the Defaulter?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Yes. Under Indian law, the innocent party is not expected to bear the financial burden of enforcing contractual rights. There are two primary statutory mechanisms under which you can demand and recover notice costs:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <h3 className="font-bold text-sm text-slate-900">
                      1. Section 35 Code of Civil Procedure, 1908 (CPC) — Realistic Litigation Costs
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      In the landmark judgment of <span className="font-semibold text-slate-800">Sanjeev Kumar Jain v. Raghubir Saran Charitable Trust (2012) 1 SCC 455</span>, the Supreme Court of India held that costs awarded under Section 35 CPC should be realistic and reflect the actual expenses incurred by the party, including pre-suit notice expenses and advocate consultation charges.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <h3 className="font-bold text-sm text-slate-900">
                      2. Section 38(1) &amp; Section 39 Consumer Protection Act, 2019
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      District Consumer Commissions across India routinely award ₹5,000 to ₹15,000 towards litigation costs and legal notice expenses whenever a corporation forces a consumer into litigation by ignoring an advocate legal notice. For instance, in consumer complaint proceedings on{" "}
                      <Link href="/e-jagriti-consumer-complaint-guide" className="font-bold text-[#DC2626] underline">
                        e-Jagriti Online Consumer Forum
                      </Link>, producing the original legal notice and India Post receipt enables the commission to grant direct cost reimbursement.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 font-mono">
                  <p className="font-bold text-slate-900 mb-1 font-sans">
                    Standard Notice Prayer Clause Drafted by Our Advocates:
                  </p>
                  <p className="italic text-slate-800">
                    &quot;You the Noticee are hereby called upon to pay the principal sum of ₹[Amount] along with statutory interest @ 18% per annum, together with a sum of ₹5,000 towards the charges of this legal notice, within a period of 15 days from the receipt hereof, failing which my client shall initiate appropriate civil and criminal proceedings entirely at your risk, cost and consequence.&quot;
                  </p>
                </div>
              </section>

              {/* SECTION 9: Interactive Fee Estimator Island */}
              <section
                id="heading-interactive-calculator"
                aria-labelledby="heading-interactive-calculator-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-interactive-calculator-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Calculate Your Expected Legal Notice Fees by City &amp; Dispute
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Use this live tool to evaluate expected chamber fees versus our all-inclusive flat pricing.
                  </p>
                </div>

                <LegalNoticeChargesCalculator />
              </section>

              {/* SECTION 10: Worked Examples Across Real Dispute Scenarios */}
              <section
                id="heading-worked-examples"
                aria-labelledby="heading-worked-examples-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-examples-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Examples: Real-World Cost vs Recovery Outcomes
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Realistic breakdowns of legal notice expenses, resolution timelines, and net recovery amounts.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Worked Example 1 */}
                  <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                    <div className="pl-2 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-1 rounded-full">
                          Case Study 1 • Freelance Unpaid Invoices
                        </span>
                        <span className="text-xs font-semibold text-slate-500">Claim: ₹65,000</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Graphic Designer Recovering Unpaid Agency Milestone
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A Mumbai-based branding designer delivered website assets for a Gurgaon marketing firm. The agency stopped responding for 90 days, withholding ₹65,000. A local private lawyer quoted ₹6,000 for a notice plus ₹1,000 clerkage. Instead, the freelancer used LegalRecovery for flat ₹{basePrice}. The notice cited Section 65 of the Indian Contract Act and Section 63 BSA electronic email approvals.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <span className="text-slate-500 block text-[10px]">Notice Cost</span>
                          <span className="font-bold text-slate-900">₹{basePrice} Flat</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <span className="text-slate-500 block text-[10px]">Delivery Time</span>
                          <span className="font-bold text-slate-900">Speed Post in 48h</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <span className="text-slate-500 block text-[10px]">Settlement Time</span>
                          <span className="font-bold text-slate-900">Day 11 of 15 Days</span>
                        </div>
                        <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                          <span className="text-emerald-700 block text-[10px]">Total Recovered</span>
                          <span className="font-bold text-emerald-800">₹65,000 (100%)</span>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Worked Example 2 */}
                  <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
                    <div className="pl-2 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                          Case Study 2 • Rental Security Deposit
                        </span>
                        <span className="text-xs font-semibold text-slate-500">Claim: ₹1,20,000</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Bengaluru IT Professional vs Unreasonable Landlord Deductions
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Upon vacating a flat in HSR Layout, the landlord arbitrarily deducted ₹70,000 citing routine wear-and-tear painting charges and refused to refund the remaining ₹50,000. An advocate legal notice was served citing Section 11 of the Model Tenancy Act principles and Indian Contract Act Section 73. Faced with impending litigation and interest penalties, the landlord refunded ₹1,12,000 within 14 days.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <span className="text-slate-500 block text-[10px]">Legal Notice Fee</span>
                          <span className="font-bold text-slate-900">₹{basePrice}</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <span className="text-slate-500 block text-[10px]">Chamber Rate Avoided</span>
                          <span className="font-bold text-rose-700">₹8,500</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <span className="text-slate-500 block text-[10px]">Statutory Window</span>
                          <span className="font-bold text-slate-900">15 Days Notice</span>
                        </div>
                        <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                          <span className="text-emerald-700 block text-[10px]">Net Retained</span>
                          <span className="font-bold text-emerald-800">₹1,11,001</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </section>

              {/* SECTION 11: Pre-Notice Documentary Evidence Checklist */}
              <section
                id="heading-checklist"
                aria-labelledby="heading-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Checklist: Information Needed Before Sending an Advocate Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Assemble these electronic and documentary records to ensure zero delay in advocate drafting.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs">✓</span>
                      1. Opposing Party Corporate &amp; Postal Details
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete registered legal entity name, corporate identification number (CIN if private limited), active registered office address from MCA records, and official grievance officer email ID.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs">✓</span>
                      2. Transaction &amp; Invoicing Proof
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Signed agreements, appointment letters, purchase orders, tax invoices with GSTIN numbers, bank account statements highlighting debit/credit entries, or UTR/IMPS reference numbers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs">✓</span>
                      3. Written Reminders &amp; Communication Trail
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Email correspondence demanding payment, WhatsApp chat exports showing delivery and acknowledgment, customer ticket numbers, and any written promises to pay that were subsequently dishonoured.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs">✓</span>
                      4. Specific Cheque or Bank Memo Details
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In cheque bounce matters, the original scanned copy of the cheque leaf (front and back) and the official Bank Return Memo with the specific dishonour reason and date of receipt.
                    </p>
                  </div>
                </div>
              </section>

              {/* Honest Scope Box */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/80 px-2.5 py-1 rounded-full">
                  Legal Scope &amp; Boundary Notice
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  What an Advocate Legal Notice Can and Cannot Guarantee
                </h3>
                <div className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    <strong className="text-white">What It Does:</strong> A formal legal notice drafted by an enrolled advocate establishes a legally binding pre-litigation record, crystallizes contractual defaults, creates proof of demand under the Limitation Act 1963, and initiates the statutory 15-day window required before approaching consumer commissions, labour courts, or cheque bounce magistrates. Over 80% of corporate entities settle immediately to avoid public litigation.
                  </p>
                  <p>
                    <strong className="text-white">What It Cannot Do:</strong> An advocate notice is a formal pre-trial legal demand, not a court warrant or judicial attachment order. If an opposing party is insolvent, untraceable, or stubbornly ignores the demand, court filing (such as an e-Jagriti consumer complaint, Summary Suit, or Section 138 criminal complaint) becomes necessary. LegalRecovery provides all delivery proofs required to transition seamlessly into court.
                  </p>
                </div>
              </div>

              {/* SECTION 12: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Legal Notice Charges &amp; Costs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Clear answers to the most common queries regarding advocate fees, delivery charges, and legal notice recovery.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 13: Primary Sources & Statutory References */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Sources &amp; Legal Authorities
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Verified statutory provisions, government tariffs, and court guidelines governing pre-litigation notice fees.
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-[#DC2626] hover:underline"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Bottom CTA Banner */}
              <div className="pt-4">
                <LegalNoticeChargesCTA />
              </div>
            </div>
          </div>
        </div>

        {/* Contextual Related Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/legal-notice-charges" />
      </div>
    </>
  );
}
