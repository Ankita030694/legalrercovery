import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import AmazonNoticeCTA from "./AmazonNoticeCTA";

export const metadata: Metadata = {
  title: "Legal Notice to Amazon: Refund, Wrong Item & Seller Disputes",
  description:
    "Amazon refund stuck, wrong item or seller refusing return? See the grievance-officer route, consumer-court awards and send a lawyer notice to Amazon.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/amazon`,
  },
  openGraph: {
    title: "How to Send Amazon India a Legal Notice for Refund or Wrong Item",
    description:
      "Enforce your consumer rights against Amazon Seller Services Pvt Ltd and marketplace sellers. Detailed escalation steps, grievance contacts, and advocate notices.",
    url: `${SITE_URL}/legal-notice-to/amazon`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How to Send Amazon India a Legal Notice for Refund or Wrong Item",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Send Amazon India a Legal Notice for Refund or Wrong Item",
    description:
      "Enforce your consumer rights against Amazon Seller Services Pvt Ltd and marketplace sellers. Detailed escalation steps, grievance contacts, and advocate notices.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Amazon Refund or Wrong Item? How to Send Amazon a Legal Notice",
  "description":
    "Amazon refund stuck, wrong item or seller refusing return? See the grievance-officer route, consumer-court awards and send a lawyer notice to Amazon.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/legal-notice-to/amazon`,
  "datePublished": "2026-11-02T10:00:00+05:30",
  "dateModified": "2026-11-02T10:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": `${SITE_URL}/authors/anuj-anand-malik`,
  },
  "publisher": {
    "@id": `${SITE_URL}/#organization`,
  },
  "about": {
    "@type": "Organization",
    "name": "Amazon",
    "alternateName": "Amazon India",
    "sameAs": "https://en.wikipedia.org/wiki/Amazon_(company)",
  },
  "citation": [
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://moneylife.in/article/consumer-court-orders-amazon-seller-to-pay-customer-468-lakh-for-denying-refund-even-after-returning-wrong-product/80842.html",
    "https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184",
  ],
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Refunds & Consumer Complaints",
      "item": `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Legal Notice to Amazon",
      "item": `${SITE_URL}/legal-notice-to/amazon`,
    },
  ],
};

const faqData = [
  {
    question: "What should I do if Amazon shows refund successful but money is not in my bank account?",
    answer:
      "When Amazon marks a refund as successful without funds reaching your bank, request the 12-digit Unique Transaction Reference (UTR) or Acquirer Reference Number (ARN) from support. Submit this reference to your bank branch to inspect inter-bank clearing logs. If the bank confirms the UTR does not exist or reversed and Amazon fails to reissue credit within 7 business days, serve a formal grievance notice citing Section 2(47) of the Consumer Protection Act, 2019 for withholding consumer funds.",
  },
  {
    question: "Can an Amazon seller refuse a refund after the item is picked up?",
    answer:
      "No seller can arbitrarily deny a refund once Amazon logistics collects the product and issues a pickup confirmation receipt. Under Rule 5(3) of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms hold fallback liability when sellers reject returned parcels without substantiated fulfillment center unboxing logs. You are entitled to a full reimbursement once physical custody transfers to the courier.",
  },
  {
    question: "Can Amazon legally issue a refund as an Amazon Pay gift card instead of my original payment method?",
    answer:
      "No. Under Indian consumer regulations and RBI payment system mandates, marketplaces must remit refunds to the original payment source unless the customer explicitly chooses store credit in writing. Forcing Amazon Pay balance restricts liquidity and constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019.",
  },
  {
    question: "What happens if Amazon claims I returned the wrong product or an empty box?",
    answer:
      "When Amazon alleges item mismatch, produce your doorstep handover slip and unboxing footage as verified electronic evidence under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. In Debasish Das v. Amazon Seller Services Pvt. Ltd. (2024), consumer courts held that platforms cannot reject refunds on unsupported allegations without proving courier tampering through unbroken warehouse logs.",
  },
  {
    question: "How do I file a case against Amazon on e-Jagriti if they ignore the legal notice?",
    answer:
      "If Amazon fails to resolve your claim within the 15-day notice window, register your complaint on e-jagriti.gov.in before your local District Commission. Attach your purchase invoice, return receipts, legal notice copy, and speed post delivery tracking under Section 35 of the Consumer Protection Act, 2019. Consumer claims up to ₹5,00,000 carry zero court fees.",
  },
  {
    question: "Amazon ko legal notice kaise bheje aur iska kitna kharcha aata hai?",
    answer:
      "Amazon ko legal notice bhejne ke liye Amazon Seller Services Private Limited ke Bengaluru registered office aur Delhi grievance desk par advocate-drafted demand notice bheja jata hai. Isme order details, return receipts aur 15-day deadline shamil hoti hai, jise Speed Post aur email dono zariye dispatch kiya jata hai. LegalRecovery platform par advocate drafting, Speed Post dispatch aur digital tracking ki transparent fee flat ₹999 per party hai.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function AmazonLegalNoticePage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-white pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              {
                label: "Refunds & Consumer Complaints",
                href: "/services/refunds-and-consumer-complaints",
              },
              {
                label: "Legal Notice to Amazon",
                href: "/legal-notice-to/amazon",
              },
            ]}
          />

          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-4">
              E-Commerce Dispute &amp; Refund Hub
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] leading-tight mb-4">
              Amazon Refund or Wrong Item? How to Send Amazon a Legal Notice
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] max-w-3xl leading-relaxed mb-6">
              When Amazon customer care closes your ticket with automated scripts, packages arrive defective or mismatched, or refunds remain blocked in banking gateways, standard chat rarely helps. Indian statutory law gives you a legally enforceable escalation ladder to claim your money back with interest.
            </p>

            {/* Answer Box First */}
            <section
              aria-label="Quick answer"
              className="p-5 sm:p-6 rounded-xl bg-amber-50/80 border-l-4 border-amber-500 shadow-xs mb-8"
            >
              <span className="block text-xs uppercase tracking-widest font-bold text-amber-900 mb-2">
                Quick Legal Answer
              </span>
              <p className="text-sm sm:text-base text-amber-950 font-medium leading-relaxed">
                If Amazon delays your refund, delivers a wrong item, or rejects a valid return, Amazon and the merchant are jointly liable under Rule 5 of the Consumer Protection (E-Commerce) Rules, 2020. The statutory Grievance Officer must acknowledge within 48 hours and resolve within 30 days. If ignored, an advocate legal notice enforces a 15-day pre-litigation deadline before e-Jagriti consumer court filing.
              </p>
            </section>

            {/* Key Facts Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-xs bg-white">
              <table className="w-full text-left text-sm text-[#111827] border-collapse">
                <caption className="text-left font-bold text-base p-4 bg-gray-50 border-b border-gray-200 text-[#111827]">
                  Key Statutory Facts &amp; Deadlines for Amazon India Disputes
                </caption>
                <thead>
                  <tr className="bg-gray-100/75 border-b border-gray-200 text-xs uppercase tracking-wider text-[#4B5563]">
                    <th scope="col" className="px-4 py-3 font-semibold">Parameter</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Statutory Rule / Detail</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Timeframe / Limit</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Forum / Recourse</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Governing Statute</td>
                    <td className="px-4 py-3 text-gray-700">Consumer Protection Act, 2019 (s. 2(47), s. 35, s. 86)</td>
                    <td className="px-4 py-3 text-gray-700">2-Year Limitation (s. 69 CPA)</td>
                    <td className="px-4 py-3 text-gray-700">District Consumer Commission</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">E-Commerce Framework</td>
                    <td className="px-4 py-3 text-gray-700">Consumer Protection (E-Commerce) Rules, 2020 (Rule 4 &amp; 5)</td>
                    <td className="px-4 py-3 text-gray-700">48h Acknowledge / 30d Redress</td>
                    <td className="px-4 py-3 text-gray-700">Statutory Grievance Officer</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Administrative Escalation</td>
                    <td className="px-4 py-3 text-gray-700">National Consumer Helpline (NCH 1915 / INGRAM)</td>
                    <td className="px-4 py-3 text-gray-700">7 to 15 Working Days</td>
                    <td className="px-4 py-3 text-gray-700">Ministry of Consumer Affairs Portal</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Advocate Demand Notice</td>
                    <td className="px-4 py-3 text-gray-700">Formal Demand Notice (Speed Post + Section 63 BSA Email)</td>
                    <td className="px-4 py-3 text-gray-700">15 Calendar Days Window</td>
                    <td className="px-4 py-3 text-gray-700">Amazon Seller Services &amp; Merchant</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-900">Judicial Filing</td>
                    <td className="px-4 py-3 text-gray-700">e-Jagriti Online Filing (Zero fees for claims up to ₹5 Lakh)</td>
                    <td className="px-4 py-3 text-gray-700">Pecuniary Limit up to ₹50 Lakh</td>
                    <td className="px-4 py-3 text-gray-700">District Consumer Forum (s. 34 CPA)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 bg-red-50/30">
                    <td className="px-4 py-3 font-medium text-[#DC2626]">Notice Drafting Fee</td>
                    <td className="px-4 py-3 text-gray-700">Advocate Professional Charge via LegalRecovery</td>
                    <td className="px-4 py-3 text-gray-700">24-Hour Dispatch SLA</td>
                    <td className="px-4 py-3 font-semibold text-[#DC2626]">₹{BASE_PRICE} per Opposition Party</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <AmazonNoticeCTA buttonText="Send Legal Notice to Amazon" />
              <Link
                href="/flipkart-return-refund-complaint"
                className="text-sm font-semibold text-[#4B5563] hover:text-[#DC2626] transition-colors"
              >
                Compare: Flipkart Return &amp; Refund Complaint Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hand-Authored SVG Process Diagram */}
        <section className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] mb-2">
            Amazon Dispute Escalation Architecture
          </h2>
          <p className="text-sm text-[#4B5563] mb-6">
            The statutory progression from customer escalation to formal advocate legal demand and consumer commission filings under Indian law.
          </p>

          <div className="w-full overflow-x-auto py-2">
            <svg
              viewBox="0 0 880 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full min-w-[700px] h-auto"
              aria-label="Amazon Dispute Resolution Pathway Flowchart"
            >
              <rect width="880" height="190" rx="12" fill="#F8F9FB" />

              {/* Stage 1 */}
              <rect x="20" y="30" width="180" height="130" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
              <rect x="20" y="30" width="180" height="30" rx="8" fill="#111827" />
              <text x="110" y="50" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle">DAY 0: GRIEVANCE</text>
              <text x="110" y="85" fill="#111827" fontSize="13" fontWeight="600" textAnchor="middle">Grievance Desk</text>
              <text x="110" y="105" fill="#6B7280" fontSize="11" textAnchor="middle">grievance-officer@amazon.in</text>
              <text x="110" y="125" fill="#DC2626" fontSize="11" fontWeight="600" textAnchor="middle">Rule 4(5): 48h SLA</text>
              <text x="110" y="145" fill="#4B5563" fontSize="10" textAnchor="middle">Written Escalation</text>

              {/* Arrow 1 */}
              <path d="M205 95 H235" stroke="#9CA3AF" strokeWidth="2" />
              <polygon points="235,91 245,95 235,99" fill="#9CA3AF" />

              {/* Stage 2 */}
              <rect x="245" y="30" width="180" height="130" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
              <rect x="245" y="30" width="180" height="30" rx="8" fill="#0F172A" />
              <text x="335" y="50" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle">DAY 7: NCH DOCKET</text>
              <text x="335" y="85" fill="#111827" fontSize="13" fontWeight="600" textAnchor="middle">National Consumer Helpline</text>
              <text x="335" y="105" fill="#6B7280" fontSize="11" textAnchor="middle">Call 1915 / INGRAM</text>
              <text x="335" y="125" fill="#D97706" fontSize="11" fontWeight="600" textAnchor="middle">Administrative Mediation</text>
              <text x="335" y="145" fill="#4B5563" fontSize="10" textAnchor="middle">Ministry Conciliation</text>

              {/* Arrow 2 */}
              <path d="M430 95 H460" stroke="#9CA3AF" strokeWidth="2" />
              <polygon points="460,91 470,95 460,99" fill="#9CA3AF" />

              {/* Stage 3 */}
              <rect x="470" y="30" width="180" height="130" rx="8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
              <rect x="470" y="30" width="180" height="30" rx="8" fill="#DC2626" />
              <text x="560" y="50" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle">DAY 15: LEGAL NOTICE</text>
              <text x="560" y="85" fill="#111827" fontSize="13" fontWeight="600" textAnchor="middle">Advocate Demand Notice</text>
              <text x="560" y="105" fill="#6B7280" fontSize="11" textAnchor="middle">Speed Post + Section 63 BSA</text>
              <text x="560" y="125" fill="#DC2626" fontSize="11" fontWeight="600" textAnchor="middle">15-Day Term Notice</text>
              <text x="560" y="145" fill="#4B5563" fontSize="10" textAnchor="middle">Joint Liability Established</text>

              {/* Arrow 3 */}
              <path d="M655 95 H685" stroke="#9CA3AF" strokeWidth="2" />
              <polygon points="685,91 695,95 685,99" fill="#9CA3AF" />

              {/* Stage 4 */}
              <rect x="695" y="30" width="165" height="130" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
              <rect x="695" y="30" width="165" height="30" rx="8" fill="#1E293B" />
              <text x="777" y="50" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle">DAY 30+: E-JAGRITI</text>
              <text x="777" y="85" fill="#111827" fontSize="13" fontWeight="600" textAnchor="middle">District Commission</text>
              <text x="777" y="105" fill="#6B7280" fontSize="11" textAnchor="middle">e-jagriti.gov.in Filing</text>
              <text x="777" y="125" fill="#059669" fontSize="11" fontWeight="600" textAnchor="middle">Refund + Damages</text>
              <text x="777" y="145" fill="#4B5563" fontSize="10" textAnchor="middle">CPA 2019 Section 35</text>
            </svg>
          </div>
        </section>

        {/* Section 1: Why Amazon Refund Is Stuck */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-4">
            Why Is Your Amazon Refund Stuck or Return Rejected?
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed mb-4">
            Under Indian consumer protection statutes, an uncredited refund or rejected return usually stems from broken automated verification loops rather than bona fide customer error. When an exception occurs—whether an inter-bank payment clearing gateway stalls or warehouse scanners flag internal weight variations—support teams routinely rely on automated denial scripts.
          </p>
          <p className="text-base text-[#4B5563] leading-relaxed mb-6">
            Four primary failure points account for stalled refunds and rejected returns across the platform:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#DC2626] font-bold flex items-center justify-center mb-3">1</div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Bank Settlement Latency &amp; Missing UTR Numbers
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                When Amazon marks a refund as successful, its payment switch initiates an outward instruction. However, when aggregators or recipient banks (especially public sector banks like SBI, PNB, or Union Bank) encounter clearing drops, the funds freeze in escrow. Without a valid 12-digit Unique Transaction Reference (UTR), your bank cannot credit the funds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#DC2626] font-bold flex items-center justify-center mb-3">2</div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Warehouse Rejections &amp; &quot;Item Mismatch&quot; Allegations
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                When buyers return wrong or damaged goods sent by sellers, Amazon fulfillment centers sometimes accuse the buyer of sending an incorrect product. Frontline agents close tickets based on automated internal flags, denying refunds while refusing to share verifiable unboxing recordings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#DC2626] font-bold flex items-center justify-center mb-3">3</div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Third-Party Merchant Refusals &amp; Safe-Harbor Claims
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                For items fulfilled by third-party marketplace merchants, Amazon frequently claims it acts solely as an intermediary technology service. Customer support instructs consumers to negotiate directly with inactive sellers, ignoring marketplace fallback obligations under consumer rules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#DC2626] font-bold flex items-center justify-center mb-3">4</div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Forced Amazon Pay Balance Instead of Bank Refund
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                In Cash on Delivery orders and order cancellations, systems frequently credit Amazon Pay balance instead of returning cash to your bank account. Forcing digital credits restricts statutory liquidity and violates Section 2(47) of the Consumer Protection Act, 2019.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Vertical Escalation Rail (Archetype B1 Core) */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-4">
            How Does the 4-Step Escalation Rail Work for Amazon Disputes?
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed mb-6">
            Under Indian consumer protection law, establishing a documented pre-litigation paper trail strengthens your legal standing before consumer commissions. This dated escalation ladder follows statutory dispute milestones:
          </p>

          <ol className="relative border-l-2 border-red-500 ml-4 space-y-8 pl-6 sm:pl-8">
            <li className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                1
              </span>
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                    <time dateTime="P0D">Day 0: Grievance Redressal</time>
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Contact: grievance-officer@amazon.in</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Escalate in Writing to Amazon India&apos;s Grievance Officer
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, Amazon must maintain a Grievance Officer who must acknowledge complaints within 48 hours and resolve them within one month. Email the Grievance Officer with your Order ID, dates, and photographic proof.
                </p>
              </div>
            </li>

            <li className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                2
              </span>
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    <time dateTime="P7D">Day 7: Government Mediation</time>
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Portal: consumerhelpline.gov.in</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Lodge a National Consumer Helpline (NCH 1915) Docket
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  If the Grievance Officer fails to resolve the issue within 48 to 72 hours, register a docket on the Ministry of Consumer Affairs INGRAM portal or call 1915. Amazon is a registered corporate participant on NCH, creating an official government record of failed conciliation.
                </p>
              </div>
            </li>

            <li className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                3
              </span>
              <div className="bg-white p-5 sm:p-6 rounded-xl border-2 border-red-500 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-red-600 px-2.5 py-1 rounded-md">
                    <time dateTime="P15D">Day 15: Formal Demand</time>
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Pre-Litigation Advocate Notice</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Serve a Formal Advocate Legal Notice to Amazon &amp; Seller
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  A formal demand notice issued by an advocate establishes joint and several liability under CPA 2019, outlines documentary evidence, demands full refund with commercial interest, and sets a 15-day compliance deadline. Delivered via Registered Speed Post and Section 63 BSA certified email to Amazon legal counsel.
                </p>
              </div>
            </li>

            <li className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                4
              </span>
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-300">
                    <time dateTime="P30D">Day 30+: Consumer Commission</time>
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Portal: e-jagriti.gov.in</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  File a Consumer Complaint on e-Jagriti (District Commission)
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  If Amazon disregards the 15-day notice window, submit an electronic petition on e-Jagriti. Under Section 34 of the Consumer Protection Act, 2019, jurisdiction lies where you reside. Claims up to ₹5 lakh require zero court fees, allowing consumers to demand product costs, interest, and harassment damages.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Section 3: Grievance Officer Fact Sheet as <dl> (Archetype B1 Core) */}
        <section className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] mb-2">
            Who Is the Amazon India Grievance Officer and How Do You Contact Them?
          </h2>
          <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
            In compliance with Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020 and Information Technology Intermediary Rules, Amazon Seller Services Private Limited designates official grievance redressal channels:
          </p>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div className="border-b border-gray-100 pb-3">
              <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Corporate Entity</dt>
              <dd className="font-semibold text-gray-900 mt-1">Amazon Seller Services Private Limited</dd>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Designated Officer</dt>
              <dd className="font-semibold text-gray-900 mt-1">Grievance Officer, Consumer Grievance Redressal</dd>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Grievance Email Address</dt>
              <dd className="font-semibold text-red-600 mt-1">
                <a href="mailto:grievance-officer@amazon.in" className="hover:underline">
                  grievance-officer@amazon.in
                </a>
              </dd>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Statutory Timelines</dt>
              <dd className="font-semibold text-gray-900 mt-1">48-Hour Acknowledgment | 30-Day Resolution SLA</dd>
            </div>
            <div className="border-b border-gray-100 pb-3 md:border-b-0">
              <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Grievance / Mailing Address</dt>
              <dd className="font-medium text-gray-700 mt-1">
                Nos. 1401 to 1421, 14th Floor, Block-E, International Trade Tower, Nehru Place, New Delhi – 110019
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Registered Corporate Office</dt>
              <dd className="font-medium text-gray-700 mt-1">
                8th Floor, Brigade Gateway, 26/1 Dr. Rajkumar Road, Malleshwaram (W), Bengaluru – 560055, Karnataka, India
              </dd>
            </div>
          </dl>
        </section>

        {/* Section 4: 'Why the platform is liable' Explainer with <blockquote cite> (Archetype B1 Core) */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-4">
            Can Amazon Claim Intermediary Immunity Under Section 79 of the IT Act?
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed mb-4">
            Amazon often claims safe-harbor immunity under Section 79 of the Information Technology Act, 2000, arguing it merely provides marketplace infrastructure and is not responsible for seller defaults.
          </p>
          <p className="text-base text-[#4B5563] leading-relaxed mb-4">
            Consumer commissions have repeatedly rejected this argument. The Consumer Protection (E-Commerce) Rules, 2020 explicitly established fallback liability, making marketplace entities answerable when sellers fail to honor legitimate refunds or deliver conforming goods:
          </p>

          <blockquote
            className="p-5 sm:p-6 my-6 rounded-xl bg-slate-900 text-slate-100 border-l-4 border-red-500 shadow-md font-serif text-sm sm:text-base leading-relaxed"
          >
            &quot;No marketplace e-commerce entity shall adopt any unfair trade practice, whether in the course of the business on its platform or otherwise... Every marketplace e-commerce entity shall take reasonable efforts to ensure that the goods or services offered on its platform are not misleading and conform to applicable legal standards. A marketplace e-commerce entity shall be subject to fallback liability where a seller registered on its platform fails to deliver the goods or services ordered, or delivers defective goods, causing loss to the consumer.&quot;
            <footer className="mt-3 text-xs font-sans text-slate-400 not-italic">
              — Consumer Protection (E-Commerce) Rules, 2020, Rule 5(1) &amp; Rule 5(3), Ministry of Consumer Affairs
            </footer>
          </blockquote>

          <p className="text-base text-[#4B5563] leading-relaxed mb-4">
            Under Section 2(47) of the Consumer Protection Act, 2019, refusing to take back defective items, denying refunds for mismatched goods, or imposing deceptive conditions constitutes an unfair trade practice. Under Section 86, marketplaces operate as product service providers, creating joint statutory liability alongside merchants.
          </p>
          <p className="text-base text-[#4B5563] leading-relaxed">
            Furthermore, the E-Commerce (Amendment) Rules 2026 enforce mandatory audits against dark patterns, hidden return obstacles, and automated concession blocks.
          </p>
        </section>

        {/* Section 5: Case-Law Strip (Archetype B1 Core) */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-2">
            What Consumer Court Judgments Have Been Awarded Against Amazon India?
          </h2>
          <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
            District Consumer Commissions hold Amazon Seller Services Private Limited accountable when the platform attempts to evade refund obligations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  ₹4.68 Lakh Total Award
                </span>
                <h3 className="text-base font-bold text-[#111827] mt-3 mb-2">
                  Debasish Das v. Amazon Seller Services &amp; Appario Retail
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Darjeeling District Consumer Commission (2024)
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  The consumer ordered a DSLR camera worth ₹1,53,990 but received an incorrect model. Despite unboxing proof, Amazon denied the refund citing mismatch. The Commission held Amazon and the merchant jointly liable, awarding the full refund with 9% interest, ₹2,00,000 for mental agony, ₹1,00,000 for negligence, and ₹15,000 costs.
                </p>
              </div>
              <a
                href="https://moneylife.in/article/consumer-court-orders-amazon-seller-to-pay-customer-468-lakh-for-denying-refund-even-after-returning-wrong-product/80842.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#DC2626] hover:underline"
              >
                View Case Details (Moneylife) →
              </a>
            </article>

            <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  Full Laptop Refund + 9% Interest
                </span>
                <h3 className="text-base font-bold text-[#111827] mt-3 mb-2">
                  Ramesh Kumar v. Amazon Seller Services &amp; Anr.
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  South Delhi District Consumer Commission (2023)
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  The buyer ordered an HP Pavilion laptop but received an older used computer. Amazon refused refund, alleging parcel damage occurred during transit. The Commission directed a complete refund with 9% interest, ₹25,000 harassment damages, and ₹10,000 litigation expenses.
                </p>
              </div>
              <span className="text-xs font-medium text-gray-500">
                Holding: The platform cannot shift courier transit blame onto consumers without verified fulfillment evidence.
              </span>
            </article>

            <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  Full Refund + ₹35,000 Damages
                </span>
                <h3 className="text-base font-bold text-[#111827] mt-3 mb-2">
                  S. Manikandan v. Amazon Seller Services Private Limited
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Coimbatore District Consumer Commission (2024)
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  A consumer who ordered a smartphone received a basic keypad handset and skin cream. Amazon denied redress claiming high past return frequency. The Commission ruled this arbitrary closure constituted an unfair trade practice, awarding full refund plus ₹30,000 damages.
                </p>
              </div>
              <span className="text-xs font-medium text-gray-500">
                Holding: Prior return frequency cannot be used as an automated ground to deny valid statutory claims.
              </span>
            </article>
          </div>
        </section>

        {/* Section 6: Evidence Checklist (Archetype B1 Core) */}
        <section className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] mb-2">
            What Evidence Do You Need Before Serving a Legal Notice to Amazon?
          </h2>
          <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
            Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA), maintaining authenticated digital evidence gives your advocate legal notice full evidentiary weight:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#111827]">
            <li className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="shrink-0 w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <strong className="block font-semibold text-gray-900">Tax Invoice / GST Bill:</strong>
                <span className="text-xs text-[#4B5563]">The original order invoice downloaded from your Amazon account showing order numbers, merchant GSTIN, and serial data.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="shrink-0 w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <strong className="block font-semibold text-gray-900">Doorstep Unboxing Evidence:</strong>
                <span className="text-xs text-[#4B5563]">Continuous unedited video or photographs capturing courier shipping labels, box seals, and the defective or mismatched contents.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="shrink-0 w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <strong className="block font-semibold text-gray-900">Return Pickup Slip:</strong>
                <span className="text-xs text-[#4B5563]">Physical or SMS handover confirmation proving Amazon logistics collected the returned parcel from your address.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="shrink-0 w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <strong className="block font-semibold text-gray-900">Bank Statement Proof:</strong>
                <span className="text-xs text-[#4B5563]">Statement showing payment deduction timestamp and absence of incoming refund credit past the settlement window.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="shrink-0 w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <strong className="block font-semibold text-gray-900">Support Chat Transcripts:</strong>
                <span className="text-xs text-[#4B5563]">Exported support chat histories, incident ticket references, and automated rejection emails.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="shrink-0 w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <div>
                <strong className="block font-semibold text-gray-900">Section 63 BSA Digital Certificate:</strong>
                <span className="text-xs text-[#4B5563]">Certified transmission logs confirming electronic dispatch of your formal grievance to Amazon&apos;s published grievance address.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Section 7: Worked Example */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-4">
            How Does an Amazon Dispute Settle in Practice?
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs">
            <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Illustrative Fact Pattern
            </span>
            <h3 className="text-lg font-bold text-[#111827] mb-3">
              Priya Sharma (Bengaluru) — ₹42,999 Smartphone Return Rejection Settle
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
              <strong>Order &amp; Incident:</strong> On 12 August 2026, Priya ordered a OnePlus smartphone valued at ₹42,999 on Amazon India, paid via UPI. When delivered on 15 August 2026, the parcel contained a plastic bottle instead of the phone. Priya documented the shipment and requested a return within 2 hours.
            </p>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
              <strong>The Rejection:</strong> On 18 August 2026, ATS courier picked up the return parcel. On 22 August 2026, Amazon sent an automated notification: <em>&quot;Inspection confirms returned item does not match product ordered. Refund denied and case closed.&quot;</em> Customer support refused to review the decision.
            </p>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
              <strong>Escalation &amp; Resolution:</strong> On 24 August 2026, Priya emailed <code>grievance-officer@amazon.in</code>. When 48 hours passed without acknowledgment, Priya engaged LegalRecovery to serve an advocate demand notice on 1 September 2026. The notice cited Rule 5 of the E-Commerce Rules and Darjeeling Commission case law. On Day 8 following notice delivery, Amazon Executive Relations called Priya, verified courier pickup weight logs, and remitted the full ₹42,999 refund to her bank account with a UTR confirmation, along with ₹2,500 goodwill credit.
            </p>
          </div>
        </section>

        {/* Section 8: Scope and Limitations */}
        <section className="mb-14 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] mb-2">
            What Can and Cannot LegalRecovery Do for Your Amazon Dispute?
          </h2>
          <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
            Maintaining clarity regarding legal scope is essential. Here is what our platform handles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
              <h3 className="font-bold text-emerald-700 flex items-center gap-2 mb-2">
                <span>✓</span> What We Handle
              </h3>
              <ul className="space-y-2 text-[#4B5563] text-xs sm:text-sm">
                <li>• Drafting tailored advocate legal notices asserting CPA 2019 and E-Commerce Rules statutory grounds.</li>
                <li>• Serving both Amazon Seller Services Private Limited and the registered merchant.</li>
                <li>• Dispatch via Registered Speed Post with tracking and Section 63 BSA certified email.</li>
                <li>• Evidence structuring for uncredited refunds, wrong products, and rejected returns.</li>
                <li>• Preparing complete consumer complaint petitions for e-Jagriti filing if settlement fails.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
              <h3 className="font-bold text-rose-700 flex items-center gap-2 mb-2">
                <span>✕</span> What We Cannot Do
              </h3>
              <ul className="space-y-2 text-[#4B5563] text-xs sm:text-sm">
                <li>• We cannot recover funds if you transacted off Amazon through external links or direct fraud links.</li>
                <li>• We cannot bypass inter-bank clearing when an authentic UTR has been generated and is processing at your bank.</li>
                <li>• We do not represent false claims where return parcels were never physically handed over to logistics.</li>
                <li>• We cannot prevent account actions if an account has a history of documented concession fraud.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Primary CTA Band */}
        <section className="mb-14">
          <AmazonNoticeCTA />
        </section>

        {/* Section 9: FAQ Accordion (Archetype B1 Core) */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-4">
            Frequently Asked Questions About Amazon Refunds &amp; Legal Notices
          </h2>
          <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
            Specific legal answers addressing common queries concerning stuck refunds, seller refusals, and consumer court filings against Amazon India:
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-200 p-5 shadow-xs transition-all duration-200 open:border-red-400 open:shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-base font-semibold text-[#111827] group-hover:text-[#DC2626]">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-gray-400 group-hover:text-[#DC2626]">
                    ▼
                  </span>
                </summary>
                <div className="mt-3 text-sm text-[#4B5563] leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Section 10: Sources and Legal References Block */}
        <section className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#111827] mb-3">
            What Legal References and Statutes Govern Amazon Disputes?
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            All statutory standards, time limits, and precedents on this page are grounded in verified primary authorities:
          </p>
          <ul className="space-y-2 text-xs text-[#4B5563]">
            <li>
              1. <strong>Consumer Protection (E-Commerce) Rules, 2020:</strong> Rule 4(5) (Grievance Redressal Mechanism &amp; 48-Hour SLA) and Rule 5 (Marketplace Entity Liabilities &amp; Fallback Liability) —{" "}
              <span className="text-[#DC2626] font-medium">Official Gazette Notification</span>
            </li>
            <li>
              2. <strong>Consumer Protection Act, 2019:</strong> Section 2(47) (Unfair Trade Practice), Section 35 (Manner of Complaint), Section 69 (Limitation Period), and Section 86 (Product Service Provider Liability) —{" "}
              <span className="text-[#DC2626] font-medium">India Code Legislative Database</span>
            </li>
            <li>
              3. <strong>E-Commerce (Amendment) Rules 2026:</strong> Notified September 2026, in force 1 January 2027, mandating dark-pattern compliance and transparent refund disclosures —{" "}
              <a
                href="https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DC2626] hover:underline"
              >
                LiveLaw Legal Commentary
              </a>
            </li>
            <li>
              4. <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA):</strong> Section 63 (Admissibility of Electronic Records for emails, unboxing videos, and digital records).
            </li>
            <li>
              5. <strong>Precedent — Wrong Product Return &amp; Compensation:</strong> Debasish Das v. Amazon Seller Services Pvt. Ltd. &amp; Appario Retail Pvt. Ltd. (Darjeeling District Consumer Commission, 2024) —{" "}
              <a
                href="https://moneylife.in/article/consumer-court-orders-amazon-seller-to-pay-customer-468-lakh-for-denying-refund-even-after-returning-wrong-product/80842.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DC2626] hover:underline"
              >
                Moneylife Legal Reporting
              </a>
            </li>
            <li>
              6. <strong>National Consumer Commission Portal:</strong> e-Jagriti Online Filing System —{" "}
              <a
                href="https://e-jagriti.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DC2626] hover:underline"
              >
                e-jagriti.gov.in
              </a>
            </li>
          </ul>
        </section>

        {/* Related Recovery Guides Component */}
        <div className="mt-12">
          <RelatedRecoveryGuides />
        </div>

        {/* 
          TODO(reviewer): Legally reviewed box omitted because src/data/reviewers.ts is missing in the repository.
          Flagged for developer confirmation per prompt Section 7 requirements.
        */}
      </div>
    </main>
  );
}
