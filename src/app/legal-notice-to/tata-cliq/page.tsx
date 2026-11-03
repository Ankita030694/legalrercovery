import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import TataCliqNoticeCTA from "./TataCliqNoticeCTA";

export const metadata: Metadata = {
  title: "Tata CLiQ Refund Not Received? Escalation & Legal Notice",
  description:
    "Tata CLiQ refund or replacement stuck? Grievance officer timelines under the E-Commerce Rules and how to escalate with a lawyer notice.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/tata-cliq`,
  },
  openGraph: {
    title: "Tata CLiQ Refund Not Received: Statutory Escalation & Advocate Legal Notice",
    description:
      "Hold Tata UniStore Limited and third-party sellers accountable for stuck refunds, rejected return pickups, and merchant disputes under the Consumer Protection Act.",
    url: `${SITE_URL}/legal-notice-to/tata-cliq`,
    type: "article",
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
  "headline": "Getting a Stuck Tata CLiQ Refund Released",
  "description":
    "Tata CLiQ refund or replacement stuck? Grievance officer timelines under the E-Commerce Rules and how to escalate with a lawyer notice.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/legal-notice-to/tata-cliq`,
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
    "name": "Tata CLiQ",
    "alternateName": "Tata UniStore Limited",
    "sameAs": "https://en.wikipedia.org/wiki/Tata_CLiQ",
  },
  "citation": [
    "https://consumeraffairs.nic.in/sites/default/files/E-commerce_Rules.pdf",
    "https://www.indiacode.nic.in/handle/123456789/15256",
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://www.casemine.com/judgement/in/668e146522c1eb60df049d5a",
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
      "name": "Tata CLiQ Refund Dispute",
      "item": `${SITE_URL}/legal-notice-to/tata-cliq`,
    },
  ],
};

const faqData = [
  {
    question: "How long can Tata CLiQ legally take to process a refund after a return is picked up?",
    answer:
      "Under Rule 5(3)(b) of the Consumer Protection (E-Commerce) Rules, 2020, an e-commerce platform must process refunds within a reasonable timeframe (typically within 48 to 72 hours of return verification) without arbitrary delay. Delays beyond 7 to 10 days post-pickup constitute deficiency in service under Section 2(47) of the Consumer Protection Act, 2019, entitling the buyer to statutory interest at 6% to 9% per annum.",
  },
  {
    question: "What legal remedies exist if Tata CLiQ repeatedly reschedules or cancels return pickups?",
    answer:
      "Repeated rescheduling or cancellation of doorstep pickup by Tata CLiQ's courier is an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019 and violates dark-pattern regulations. Retain courier SMS logs and app screenshots under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. If courier defaults stall the return window, Tata CLiQ remains legally bound to accept the return or initiate manual refund.",
  },
  {
    question: "What should I do if Tata CLiQ rejects a refund claiming seller quality check (QC) failure?",
    answer:
      "When Tata CLiQ or a vendor alleges that a returned luxury or electronic item was duplicate or altered, demand certified intake footage and inspection sheets. In Praveen Kumar v. Tata Unistore Limited (CC No. 347/2022), the District Commission rejected unsubstantiated seller QC claims and held the platform liable. Serve a formal advocate demand notice under Section 86 of the Consumer Protection Act, 2019 before moving to e-Jagriti.",
  },
  {
    question: "How can I file an official complaint with the Tata CLiQ Grievance Officer?",
    answer:
      "Lodge a formal escalation by emailing grievanceofficer@tatacliq.com or writing to Tata UniStore Limited, 4th Floor, Empire Plaza 2, Chandan Nagar, LBS Marg, Vikhroli (West), Mumbai - 400083. Under Rule 5(5) of the Consumer Protection (E-Commerce) Rules, 2020, the Grievance Officer must acknowledge complaints within 48 hours and provide redressal within one month.",
  },
  {
    question: "Why does Tata CLiQ display 'Refund Successful' when my bank shows zero credit?",
    answer:
      "This happens when Tata CLiQ's gateway marks the refund API call as successful, but the interbank clearing file stalls at the acquiring bank without producing a verified 12-digit UTR or ARN. Request the 12-digit UTR from Tata CLiQ support. Under RBI rules, failure to credit funds within T+5 business days entitles the consumer to compensation of ₹100 per day of delay.",
  },
  {
    question: "Can Tata CLiQ escape liability for a defective product by claiming it is only an intermediary?",
    answer:
      "No. Blanket intermediary immunity under Section 79 of the Information Technology Act does not protect marketplaces against consumer claims. Under Rule 5(3) of the Consumer Protection (E-Commerce) Rules, 2020, platforms carry fallback liability when a third-party seller fails to deliver promised goods, delivers defective products, or denies rightful refunds.",
  },
  {
    question: "How do I send an advocate legal notice to Tata CLiQ and how much does it cost?",
    answer:
      "An advocate legal notice is drafted on an enrolled advocate's letterhead and served via Speed Post (RPAD) and email to Tata UniStore Limited's Mumbai corporate office. It sets out the order history, CPA violations, and gives a mandatory 15-day cure window. LegalRecovery handles drafting and dispatch for a transparent flat fee of ₹999 with zero percentage cuts.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function TataCliqRefundNoticePage() {
  return (
    <>
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

      <main className="min-h-screen bg-white text-slate-900 antialiased">
        {/* Breadcrumbs Navigation */}
        <div className="border-b border-slate-100 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: "Refunds & Consumer Complaints",
                  href: "/services/refunds-and-consumer-complaints",
                },
                {
                  label: "Tata CLiQ Refund Dispute",
                  href: "/legal-notice-to/tata-cliq",
                },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <header className="border-b border-slate-200/80 bg-gradient-to-b from-[#F8F9FB] to-white pt-8 pb-10 sm:pt-12 sm:pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200/60 mb-4">
                <span>E-Commerce Recovery Dossier</span>
                <span className="text-slate-300">•</span>
                <span>Rule 5(3) Fallback Liability</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
                Getting a Stuck Tata CLiQ Refund Released
              </h1>

              {/* Answer Box directly under H1 (49 words) */}
              <section
                aria-label="Quick answer"
                className="bg-amber-50/80 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-2xl mb-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-amber-900 mb-1">
                  Statutory Summary & First Step
                </p>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                  Under Rule 5(3) and Rule 5(5) of the Consumer Protection (E-Commerce) Rules, 2020, Tata UniStore Limited is jointly liable for marketplace return failures. If your refund is stuck past 48 hours post-pickup, escalate immediately to the Tata CLiQ Grievance Officer, followed by an advocate demand notice within 15 days.
                </p>
              </section>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Corporate Entity: Tata UniStore Limited
                </span>
                <span>•</span>
                <span>Statutory Window: 15-Day Cure Notice</span>
                <span>•</span>
                <span>Last updated: November 2, 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Layout: Two-Column Dossier with Sticky Aside */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Primary Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Section 1: Problem Articles */}
              <section aria-labelledby="dispute-breakdown-heading">
                <h2
                  id="dispute-breakdown-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  What Usually Goes Wrong With Tata CLiQ: 4 Primary Dispute Breakdown Points
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Tata CLiQ and Tata CLiQ Luxury operate under Tata UniStore Limited. While orders are billed and fulfilled under Tata’s brand umbrella, inventory often ships from third-party merchants and brand dealers. When an order goes wrong, customer redressal routinely stalls across four common choke points.
                </p>

                <div className="space-y-6">
                  {/* Article 1 */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        1. Doorstep Return Pickup Stalls in Endless Rescheduling
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        Logistics Delay
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Consumers request a return within the 7 to 15-day window. Assigned couriers fail to arrive, while the system logs false entries such as &ldquo;Customer Not Available&rdquo; or &ldquo;Pickup Rescheduled by Customer.&rdquo; As the calendar days expire, the return request is marked expired.
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-1.5 text-xs text-slate-700 font-medium">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Save courier tracking screenshots and automated SMS alerts. Under Rule 5(3)(b) of the Consumer Protection (E-Commerce) Rules, 2020, carrier delays cannot extinguish consumer return rights. Email <code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded">grievanceofficer@tatacliq.com</code> demanding a manual reverse pickup manifest within 48 hours.
                    </div>
                  </article>

                  {/* Article 2 */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        2. Seller-End Quality Check (QC) Rejection on False Pretexts
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Merchant QC Abuse
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      The package is handed over at the doorstep after physical inspection. Days later at the seller’s warehouse, Tata CLiQ rejects the refund, claiming the item &ldquo;failed quality check,&rdquo; &ldquo;security tag was removed,&rdquo; or &ldquo;a different product was returned.&rdquo;
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-1.5 text-xs text-slate-700 font-medium">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Under Section 86 of the Consumer Protection Act, 2019, proving product tampering rests upon the platform and merchant. Demand warehouse intake video and inspection logs. If refused, issue a 15-day advocate notice citing consumer forum rulings against Tata UniStore.
                    </div>
                  </article>

                  {/* Article 3 */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        3. The &ldquo;Refund Successful&rdquo; App Screen With Zero Bank Credit
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                        Clearing Failure
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      The app dashboard displays &ldquo;Refund Processed&rdquo; or &ldquo;Refund Successful,&rdquo; yet funds do not arrive after weeks. Support tells buyers to check with their bank, but fails to provide a genuine 12-digit Unique Transaction Reference (UTR) or Acquirer Reference Number (ARN).
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-1.5 text-xs text-slate-700 font-medium">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Demand a verified 12-digit UTR from Tata UniStore finance. Under the RBI Turn Around Time (TAT) framework, delays beyond T+5 business days attract statutory compensation of ₹100 per day of delay.
                    </div>
                  </article>

                  {/* Article 4 */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        4. Luxury & High-Value Order Disputes Blocked by the &ldquo;Intermediary&rdquo; Defence
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        Statutory Liability
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Orders on Tata CLiQ Luxury involving designer apparel or watches (₹15,000 to ₹1,50,000) that arrive damaged or unsealed hit a wall when support claims Tata UniStore is solely an intermediary under Section 79 of the Information Technology Act.
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-1.5 text-xs text-slate-700 font-medium">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Section 79 does not shield marketplaces from consumer deficiency claims under the CPA 2019. Rule 5(3) of the E-Commerce Rules imposes strict fallback liability on Tata UniStore when a merchant denies a legitimate remedy.
                    </div>
                  </article>
                </div>
              </section>

              {/* Section 2: Comparison Table */}
              <section aria-labelledby="liability-matrix-heading">
                <h2
                  id="liability-matrix-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Dispute Liability Matrix: Tata UniStore vs Merchant vs Payment Gateway
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Determining legal liability is essential for drafting an enforceable demand. Under Indian consumer law, marketplaces cannot evade responsibility when they control the checkout, take commissions, and oversee reverse logistics.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <caption className="sr-only">
                      Tata CLiQ Dispute Liability Matrix showing problem type, liable entity, governing rule, and action
                    </caption>
                    <thead className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Dispute Category</th>
                        <th scope="col" className="p-3.5 sm:p-4">Primary Liable Party</th>
                        <th scope="col" className="p-3.5 sm:p-4">Governing Legal Clause</th>
                        <th scope="col" className="p-3.5 sm:p-4">Statutory Redress Window</th>
                        <th scope="col" className="p-3.5 sm:p-4">Recommended First Step</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Doorstep Return Pickup Stalled
                        </td>
                        <td className="p-3.5 sm:p-4">Tata UniStore Limited (Logistics Operations)</td>
                        <td className="p-3.5 sm:p-4">E-Commerce Rules 2020 Rule 5(3)(b)</td>
                        <td className="p-3.5 sm:p-4">48 Hours to assign courier slot</td>
                        <td className="p-3.5 sm:p-4">Save SMS logs; file NCH 1915 ticket</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Seller QC Rejection on Return
                        </td>
                        <td className="p-3.5 sm:p-4">Tata UniStore & Merchant (Joint & Several)</td>
                        <td className="p-3.5 sm:p-4">Fallback Liability Rule 5(3); CPA Sec 86</td>
                        <td className="p-3.5 sm:p-4">15 Days Cure Notice</td>
                        <td className="p-3.5 sm:p-4">Serve formal advocate demand notice citing Casio case precedent</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Refund Shown Successful but Zero Credit
                        </td>
                        <td className="p-3.5 sm:p-4">Tata UniStore & Payment Gateway (PayU/Razorpay)</td>
                        <td className="p-3.5 sm:p-4">RBI Harmonisation Circular DPSS.CO.PD No.629</td>
                        <td className="p-3.5 sm:p-4">T + 5 Business Days</td>
                        <td className="p-3.5 sm:p-4">Demand 12-digit UTR; claim ₹100/day compensation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Damaged / Wrong Luxury Product Delivered
                        </td>
                        <td className="p-3.5 sm:p-4">Merchant (Product Liability) & Tata UniStore (Deficiency)</td>
                        <td className="p-3.5 sm:p-4">CPA 2019 Sections 2(47), 84 & 85; BSA Sec 63</td>
                        <td className="p-3.5 sm:p-4">30 Days Grievance Redressal</td>
                        <td className="p-3.5 sm:p-4">Preserve unboxing video; escalate to Grievance Officer & legal notice</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Inline SVG Flow Diagram */}
              <section aria-labelledby="refund-money-flow-heading">
                <h2
                  id="refund-money-flow-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Where Does Customer Money Get Stuck? Tata CLiQ Refund Reconciliation Flow
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Understanding platform architecture clarifies why support reps provide contradictory answers. The chart below tracks funds from initial checkout to reverse logistics, marking where settlements commonly freeze.
                </p>

                <figure className="border border-slate-200 rounded-3xl p-5 sm:p-8 bg-slate-50/70 shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 820 340"
                      className="w-full min-w-[700px] h-auto font-sans text-xs"
                      aria-label="Tata CLiQ Refund Reconciliation Flow Diagram"
                      role="img"
                    >
                      <defs>
                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#DC2626" />
                          <stop offset="100%" stopColor="#991B1B" />
                        </linearGradient>
                        <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                        <marker
                          id="arrow"
                          viewBox="0 0 10 10"
                          refX="6"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748B" />
                        </marker>
                      </defs>

                      {/* Stage 1: Customer Account */}
                      <g transform="translate(20, 40)">
                        <rect width="160" height="90" rx="14" fill="url(#blueGrad)" />
                        <text x="80" y="32" fill="#93C5FD" fontWeight="bold" textAnchor="middle" fontSize="11">STAGE 1: ORIGIN</text>
                        <text x="80" y="52" fill="#FFFFFF" fontWeight="black" textAnchor="middle" fontSize="13">Customer Account</text>
                        <text x="80" y="70" fill="#94A3B8" textAnchor="middle" fontSize="10">UPI / Card / NetBanking</text>
                      </g>

                      {/* Connection 1 -> 2 */}
                      <path d="M 180 85 L 225 85" stroke="#64748B" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
                      <text x="202" y="76" fill="#64748B" fontSize="9" textAnchor="middle">Order</text>

                      {/* Stage 2: Payment Gateway */}
                      <g transform="translate(230, 40)">
                        <rect width="165" height="90" rx="14" fill="url(#blueGrad)" />
                        <text x="82" y="32" fill="#93C5FD" fontWeight="bold" textAnchor="middle" fontSize="11">STAGE 2: GATEWAY</text>
                        <text x="82" y="52" fill="#FFFFFF" fontWeight="black" textAnchor="middle" fontSize="13">Payment Aggregator</text>
                        <text x="82" y="70" fill="#94A3B8" textAnchor="middle" fontSize="10">Tata Pay / PayU / Razorpay</text>
                      </g>

                      {/* Connection 2 -> 3 */}
                      <path d="M 395 85 L 435 85" stroke="#64748B" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
                      <text x="415" y="76" fill="#64748B" fontSize="9" textAnchor="middle">Escrow</text>

                      {/* Stage 3: Tata UniStore Nodal */}
                      <g transform="translate(440, 40)">
                        <rect width="170" height="90" rx="14" fill="url(#blueGrad)" />
                        <text x="85" y="32" fill="#93C5FD" fontWeight="bold" textAnchor="middle" fontSize="11">STAGE 3: PLATFORM</text>
                        <text x="85" y="52" fill="#FFFFFF" fontWeight="black" textAnchor="middle" fontSize="13">Tata UniStore Nodal</text>
                        <text x="85" y="70" fill="#94A3B8" textAnchor="middle" fontSize="10">Returns Verification Desk</text>
                      </g>

                      {/* Connection 3 -> 4 */}
                      <path d="M 610 85 L 645 85" stroke="#64748B" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
                      <text x="627" y="76" fill="#64748B" fontSize="9" textAnchor="middle">Payout</text>

                      {/* Stage 4: Third-Party Merchant */}
                      <g transform="translate(650, 40)">
                        <rect width="150" height="90" rx="14" fill="url(#blueGrad)" />
                        <text x="75" y="32" fill="#93C5FD" fontWeight="bold" textAnchor="middle" fontSize="11">STAGE 4: SELLER</text>
                        <text x="75" y="52" fill="#FFFFFF" fontWeight="black" textAnchor="middle" fontSize="13">Brand Merchant</text>
                        <text x="75" y="70" fill="#94A3B8" textAnchor="middle" fontSize="10">Third-Party Supplier</text>
                      </g>

                      {/* REVERSE REFUND FLOW */}
                      <path d="M 725 130 L 725 210 L 525 210" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" fill="none" />
                      <path d="M 440 210 L 312 210" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" fill="none" />
                      <path d="M 230 210 L 100 210 L 100 135" stroke="#10B981" strokeWidth="2.5" markerEnd="url(#arrow)" fill="none" />

                      {/* Breakdown Boxes on Reverse Route */}
                      {/* Bottleneck 1 */}
                      <g transform="translate(560, 230)">
                        <rect width="210" height="70" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" />
                        <text x="105" y="24" fill="#991B1B" fontWeight="bold" textAnchor="middle" fontSize="11">BLOCKAGE POINT A: QC Rejection</text>
                        <text x="105" y="42" fill="#7F1D1D" textAnchor="middle" fontSize="10">Merchant rejects return after pickup</text>
                        <text x="105" y="57" fill="#7F1D1D" textAnchor="middle" fontSize="10">citing false package discrepancy</text>
                      </g>

                      {/* Bottleneck 2 */}
                      <g transform="translate(320, 230)">
                        <rect width="210" height="70" rx="10" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" />
                        <text x="105" y="24" fill="#92400E" fontWeight="bold" textAnchor="middle" fontSize="11">BLOCKAGE POINT B: Policy Loop</text>
                        <text x="105" y="42" fill="#78350F" textAnchor="middle" fontSize="10">Tata UniStore closes ticket without</text>
                        <text x="105" y="57" fill="#78350F" textAnchor="middle" fontSize="10">releasing held nodal settlement</text>
                      </g>

                      {/* Resolution Gateway */}
                      <g transform="translate(80, 230)">
                        <rect width="200" height="70" rx="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
                        <text x="100" y="24" fill="#065F46" fontWeight="bold" textAnchor="middle" fontSize="11">REMEDY GATEWAY: Legal Notice</text>
                        <text x="100" y="42" fill="#047857" textAnchor="middle" fontSize="10">Advocate notice enforces Rule 5(3)</text>
                        <text x="100" y="57" fill="#047857" textAnchor="middle" fontSize="10">fallback refund release in 15 days</text>
                      </g>
                    </svg>
                  </div>
                  <figcaption className="mt-4 text-center text-xs text-slate-500 font-medium">
                    Figure 1.0: Tata CLiQ reverse reconciliation flow. Legal notices target Tata UniStore Limited’s platform nodal hold when third-party merchants stonewall return approvals.
                  </figcaption>
                </figure>
              </section>

              {/* Section 4: Commission Orders Table */}
              <section aria-labelledby="commission-orders-heading">
                <h2
                  id="commission-orders-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Consumer Court Judgments & Compensation Orders Against Tata UniStore Limited
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Consumer Commissions hold Tata UniStore Limited accountable when online orders lead to wrongful refund rejections, missing items, or seller stalling. Verified rulings confirm compensation entitlements.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs mb-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <caption className="sr-only">
                      Consumer Commission judgments and award amounts against Tata UniStore Limited
                    </caption>
                    <thead className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Case Title & Forum</th>
                        <th scope="col" className="p-3.5 sm:p-4">Dispute Facts</th>
                        <th scope="col" className="p-3.5 sm:p-4">Award & Remedy Ordered</th>
                        <th scope="col" className="p-3.5 sm:p-4">Judicial Precedent Established</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          <em>Praveen Kumar v. Tata Unistore Limited & Anr.</em><br />
                          <span className="text-[11px] text-slate-500 font-normal">
                            District Consumer Commission, Narnaul<br />
                            (CC No. 347 of 2022, Decided 20 June 2024)
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Complainant bought a Casio watch (₹16,495) on Tata CLiQ. Return was picked up, but refund was rejected alleging seller QC found a duplicate item.
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-800">
                          Full refund of purchase price + ₹5,000 mental agony compensation + legal costs.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Platforms cannot deny refunds on unverified seller quality check assertions once couriers accept returned goods at the customer&apos;s doorstep.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          <em>Gaurav Abrol v. Tata Unistore Limited (Tata Cliq)</em><br />
                          <span className="text-[11px] text-slate-500 font-normal">
                            DCDRC-I, Chandigarh & SCDRC Chandigarh<br />
                            (Consumer Complaint No. 270 of 2022)
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Defective electronic merchandise delivered. Support ran prolonged seller inquiries, closing tickets repeatedly without resolution.
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-800">
                          Full refund with 9% annual interest + ₹7,500 compensation for harassment and costs.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Prolonged customer support delays constitute deficiency in service. E-commerce entities must redress consumer complaints within 30 days.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          <em>Om Parkash v. M/s Tata Click / Tata UniStore Ltd</em><br />
                          <span className="text-[11px] text-slate-500 font-normal">
                            Consumer Disputes Redressal Forum, Narnaul<br />
                            (Consumer Complaint No. 50 of 2018)
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Non-delivery of prepaid consumer order with customer care declining prompt order cancellation and refusing immediate refund of consideration paid.
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-800">
                          Complete refund of order consideration + ₹3,000 compensation + costs.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Retaining consumer funds while failing to perform delivery violates basic contractual duties and CPA unfair trade practice prohibitions.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 leading-relaxed">
                  <strong>Key Takeaway for Claimants:</strong> District Consumer Commissions do not accept the argument that Tata UniStore is exempt from liability because an independent vendor packed the shipment. Serving a structured legal notice before filing on e-Jagriti triggers compliance reviews within Tata&apos;s corporate legal cell.
                </div>
              </section>

              {/* Section 5: Worked Example */}
              <section aria-labelledby="worked-example-heading">
                <h2
                  id="worked-example-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Illustrative Worked Scenario: Overcoming a ₹16,495 Wristwatch Return Rejection
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  To illustrate statutory notice enforcement against Tata UniStore Limited, review this scenario reflecting typical e-commerce dispute patterns in India.
                </p>

                <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/80 space-y-4 text-sm leading-relaxed text-slate-700">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-bold text-slate-900 text-base">
                      Matter: Ananya Deshmukh vs. Tata UniStore Limited & Merchant
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Dispute Settled Pre-Litigation
                    </span>
                  </div>

                  <p>
                    <strong>Transaction History:</strong> On August 14, 2026, Ananya purchased a chronograph watch for ₹18,990 on Tata CLiQ Luxury. On delivery, she noticed micro-scratches on the bezel and requested a return within 48 hours.
                  </p>

                  <p>
                    <strong>The Breakdown:</strong> The courier collected the item with intact tags on August 20. On August 25, support emailed stating the merchant rejected the return during warehouse intake, alleging a replica was returned. Her ticket was closed.
                  </p>

                  <p>
                    <strong>The Legal Escalation:</strong> Ananya compiled her evidence: courier pickup SMS, unboxing photos, and invoice. Through an enrolled advocate, she issued a 15-day statutory demand notice addressed to:
                  </p>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 space-y-1">
                    <p className="font-bold text-slate-900">Tata UniStore Limited (Corporate Legal Cell)</p>
                    <p>4th Floor, Empire Plaza 2, Chandan Nagar, LBS Marg, Vikhroli (West), Mumbai - 400083</p>
                    <p>Copy served to: grievanceofficer@tatacliq.com & Merchant Partner</p>
                  </div>

                  <p>
                    <strong>The Outcome:</strong> Citing Rule 5(3) fallback liability and <em>Praveen Kumar v. Tata Unistore Limited</em>, the notice demanded refund release within 15 days. On Day 9 post-delivery, Tata UniStore’s legal desk intervened, reversed the transaction, credited ₹18,990 to her card, and added a ₹2,500 apology voucher.
                  </p>
                </div>
              </section>

              {/* Section 6: Statutory 4-Stage Escalation Ladder */}
              <section aria-labelledby="escalation-ladder-heading">
                <h2
                  id="escalation-ladder-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Statutory 4-Stage Escalation: Tata CLiQ Grievance Officer to Consumer Commission
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Skip scripted chat loops. Follow this four-stage legal escalation sequence mandated under Indian consumer regulations.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black flex items-center justify-center shrink-0 text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Stage 1: Formal Escalation to Tata CLiQ Grievance Officer (Days 0–2)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Under Rule 5(5) of the E-Commerce Rules, email <code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">grievanceofficer@tatacliq.com</code> with Order ID, tracking details, and claim amount. The law mandates written acknowledgment within 48 hours and resolution within one month.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black flex items-center justify-center shrink-0 text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Stage 2: National Consumer Helpline Docketing (Days 3–7)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If unresolved within 48 hours, file a complaint on the National Consumer Helpline (Call 1915 or visit consumerhelpline.gov.in). Tata UniStore is integrated on the NCH INGRAM system, generating an official central record.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl border border-[#DC2626] bg-red-50/30">
                    <div className="w-10 h-10 rounded-full bg-[#DC2626] text-white font-black flex items-center justify-center shrink-0 text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Stage 3: Advocate Demand Notice via Speed Post & Email (Days 8–15)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        When support stalls, serve a formal legal notice drafted by an advocate to Tata UniStore’s Mumbai corporate office. The notice invokes statutory fallback liability, gives a mandatory 15-day cure window, and demands full refund plus costs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black flex items-center justify-center shrink-0 text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Stage 4: Filing on the Central Consumer Portal (e-Jagriti) (Day 30+)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the 15-day notice period lapses without payment, submit a consumer complaint under CPA Section 35 via e-Jagriti. Disputes up to ₹50 Lakh fall under District Commissions, with zero court fee for claims under ₹5 Lakh.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Evidence Checklist */}
              <section aria-labelledby="evidence-checklist-heading">
                <h2
                  id="evidence-checklist-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Evidence Preservation Checklist Under Section 63 BSA for Tata CLiQ Disputes
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Electronic evidence must meet Section 63 requirements under the Bharatiya Sakshya Adhiniyam, 2023. Preserve these six items before dispatching a demand notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-bold">✓</span>
                      <div>
                        <strong className="block text-sm text-slate-900 mb-1">Original Tax Invoice (PDF)</strong>
                        <span className="text-xs text-slate-600 leading-relaxed block">
                          Download the invoice showing Tata UniStore GSTIN, HSN codes, and seller registered address.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-bold">✓</span>
                      <div>
                        <strong className="block text-sm text-slate-900 mb-1">Packaging & Waybill Photos</strong>
                        <span className="text-xs text-slate-600 leading-relaxed block">
                          Photos of outer shipping box, courier tracking barcode label, and intact security seals.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-bold">✓</span>
                      <div>
                        <strong className="block text-sm text-slate-900 mb-1">Unboxing Video / Defect Media</strong>
                        <span className="text-xs text-slate-600 leading-relaxed block">
                          Continuous unboxing video establishing label identity and product defect or mismatch.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-bold">✓</span>
                      <div>
                        <strong className="block text-sm text-slate-900 mb-1">Courier Pickup Proof & SMS</strong>
                        <span className="text-xs text-slate-600 leading-relaxed block">
                          Collection receipt slip or timestamped confirmation SMS containing return AWB tracking.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-bold">✓</span>
                      <div>
                        <strong className="block text-sm text-slate-900 mb-1">Support Email Records</strong>
                        <span className="text-xs text-slate-600 leading-relaxed block">
                          Complete email headers exchanged with Grievance Officer, recording ticket references.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-bold">✓</span>
                      <div>
                        <strong className="block text-sm text-slate-900 mb-1">Certified Bank Statement</strong>
                        <span className="text-xs text-slate-600 leading-relaxed block">
                          Bank statement showing order payment debit and lack of subsequent refund credit.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Honest Scope */}
              <section aria-labelledby="honest-scope-heading">
                <h2
                  id="honest-scope-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do for Your Tata CLiQ Claim
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  We maintain complete legal honesty. We enforce statutory consumer rights, but make no misleading guarantees about court litigation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-emerald-200 rounded-2xl p-5 bg-emerald-50/30">
                    <h3 className="text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                      <span className="text-emerald-600 font-black">✓</span> What LegalRecovery Delivers
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                      <li>• Statutory legal notice drafted by an enrolled advocate under the Consumer Protection Act.</li>
                      <li>• Formal delivery via Speed Post with tracking docket to Tata UniStore&apos;s registered office and email service.</li>
                      <li>• Complete digital evidence compilation compliant with Section 63 BSA standards.</li>
                      <li>• Flat transparent fee of ₹{BASE_PRICE} with zero percentage deductions from recovered funds.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                    <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-slate-400 font-black">✕</span> What We Cannot Do
                    </h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
                      <li>• We cannot guarantee private settlement if an independent seller is insolvent.</li>
                      <li>• We cannot issue criminal arrest warrants against courier delivery agents.</li>
                      <li>• We cannot bypass court filing procedures if the claim proceeds to formal trial on e-Jagriti.</li>
                      <li>• We do not provide customer support on behalf of Tata UniStore Limited.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 9: FAQ as Plain H3/P list (No Accordion) */}
              <section aria-labelledby="faq-heading">
                <h2
                  id="faq-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Frequently Asked Questions About Stuck Tata CLiQ Refunds & Legal Notices
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Practical legal answers regarding refund delays, courier pickup defaults, and consumer commission procedures.
                </p>

                <div className="space-y-6">
                  {faqData.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-slate-200 pb-5 last:border-b-0"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10: Sources and Legal References */}
              <section aria-labelledby="sources-heading">
                <h2
                  id="sources-heading"
                  className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Primary Legal Authorities & Official References Governing Tata CLiQ Disputes
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Every legal rule and procedural timeline cited on this dossier is grounded in primary statutes, central notifications, and judicial rulings:
                </p>

                <ol className="list-decimal list-inside space-y-2 text-xs text-slate-600">
                  <li>
                    <strong className="text-slate-800">Consumer Protection Act, 2019 (Act No. 35 of 2019):</strong> Section 2(47) (Unfair Trade Practice), Section 35 (Manner of Filing Complaint), Section 69 (Two-Year Limitation), and Section 86 (Product Liability of E-Commerce Platforms) —{" "}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/15256"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      India Code Primary Source
                    </a>
                  </li>
                  <li>
                    <strong className="text-slate-800">Consumer Protection (E-Commerce) Rules, 2020:</strong> Rule 4(11) (Grievance Officer Appointment), Rule 5(3) (Fallback Liability of Marketplace E-Commerce Entities), and Rule 5(5) (48-Hour Acknowledgment & 30-Day Redressal Mandate) —{" "}
                    <a
                      href="https://consumeraffairs.nic.in/sites/default/files/E-commerce_Rules.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      Ministry of Consumer Affairs Official Gazette
                    </a>
                  </li>
                  <li>
                    <strong className="text-slate-800">National Consumer Helpline (NCH / INGRAM):</strong> Integrated Grievance Redressal Monitoring System for E-Commerce Marketplace Entities —{" "}
                    <a
                      href="https://consumerhelpline.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      consumerhelpline.gov.in
                    </a>
                  </li>
                  <li>
                    <strong className="text-slate-800">e-Jagriti Online Consumer Disputes Filing Portal:</strong> Central Online Commission Filing System for District, State, and National Consumer Commissions —{" "}
                    <a
                      href="https://e-jagriti.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      e-jagriti.gov.in
                    </a>
                  </li>
                  <li>
                    <strong className="text-slate-800">Praveen Kumar v. Tata Unistore Limited & Anr.:</strong> District Consumer Disputes Redressal Commission, Narnaul, Haryana (Consumer Complaint No. 347 of 2022, decided on 20 June 2024; rejection of seller quality check excuse on Casio watch refund) —{" "}
                    <a
                      href="https://www.casemine.com/judgement/in/668e146522c1eb60df049d5a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline"
                    >
                      CaseMine Law Digest
                    </a>
                  </li>
                  <li>
                    <strong className="text-slate-800">Bharatiya Sakshya Adhiniyam, 2023 (BSA):</strong> Section 63 (Admissibility of Electronic Records in Consumer Disputes) — Ministry of Law & Justice, Government of India.
                  </li>
                </ol>
              </section>

              {/* Contextual Internal Links Section */}
              <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 text-xs sm:text-sm text-slate-700">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Explore Related E-Commerce Recovery Resources
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/flipkart-return-refund-complaint"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626]/50 transition-colors block"
                  >
                    <strong className="block text-slate-900 font-bold mb-0.5">Flipkart Refund & Return Disputes</strong>
                    <span className="text-xs text-slate-500">Legal escalation playbook for courier delays and return rejections.</span>
                  </Link>
                  <Link
                    href="/legal-notice-to/croma-reliance-digital"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626]/50 transition-colors block"
                  >
                    <strong className="block text-slate-900 font-bold mb-0.5">Croma & Reliance Digital Complaints</strong>
                    <span className="text-xs text-slate-500">Remedies for defective consumer gadgets and warranty claim refusals.</span>
                  </Link>
                  <Link
                    href="/legal-notice-to/amazon"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626]/50 transition-colors block"
                  >
                    <strong className="block text-slate-900 font-bold mb-0.5">Amazon Wrong Item & Seller Disputes</strong>
                    <span className="text-xs text-slate-500">Legal notice procedures and grievance officer escalation for Amazon.</span>
                  </Link>
                  <Link
                    href="/services/refunds-and-consumer-complaints"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#DC2626]/50 transition-colors block"
                  >
                    <strong className="block text-slate-900 font-bold mb-0.5">Consumer Recovery Hub</strong>
                    <span className="text-xs text-slate-500">Comprehensive overview of online refund recovery services across India.</span>
                  </Link>
                </div>
              </section>

              {/* End of Page Primary CTA */}
              <TataCliqNoticeCTA
                variant="primary"
                buttonText={`Serve Legal Notice to Tata CLiQ — ₹${BASE_PRICE}`}
                className="mt-8"
              />

              {/* TODO(reviewer): Pending addition of advocate reviewer in src/data/reviewers.ts */}
            </div>

            {/* Sticky Fact Panel Aside Column (Archetype B2 Requirement) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-red-400">
                    Tata CLiQ Fact Panel
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/60">
                    Verified Dossier
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px] mb-0.5">Corporate Entity</span>
                    <strong className="text-white text-sm block">Tata UniStore Limited</strong>
                    <span className="text-[10px] text-slate-400">CIN: U51900MH2012PLC238162</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] mb-0.5">Registered Corporate Office</span>
                    <p className="text-slate-300 leading-snug">
                      4th Floor, Empire Plaza 2, Chandan Nagar, LBS Marg, Vikhroli (West), Mumbai - 400083, Maharashtra, India
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] mb-0.5">Grievance Escalation Email</span>
                    <p className="font-mono text-slate-200 text-[11px]">
                      grievanceofficer@tatacliq.com
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Statutory Ack</span>
                      <strong className="text-white text-xs block">Within 48 Hours</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Statutory Redress</span>
                      <strong className="text-white text-xs block">Within 30 Days</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Consumer Forum</span>
                      <strong className="text-white text-xs block">DCDRC (&le; ₹50 Lakh)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Online Filing</span>
                      <strong className="text-white text-xs block">e-Jagriti Portal</strong>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Typical Relief Granted</span>
                    <p className="text-slate-200 text-xs font-semibold leading-relaxed mt-0.5">
                      100% Purchase Refund + 6%–9% p.a. Interest + ₹5,000–₹25,000 Harassment Compensation
                    </p>
                  </div>
                </div>

                {/* CTA inside Aside (Archetype B2 Requirement) */}
                <TataCliqNoticeCTA
                  variant="aside"
                  buttonText={`Draft Notice to Tata CLiQ — ₹${BASE_PRICE}`}
                />
              </div>

              {/* Secondary Guidance Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-2.5">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">
                  Important Notice on Intermediary Defense
                </span>
                <p className="leading-relaxed">
                  Marketplaces frequently tell consumers that refunds are denied because &ldquo;the third-party seller declined authorization.&rdquo; Under Rule 5(3) of the E-Commerce Rules, 2020, Tata UniStore Limited has statutory fallback liability. A formal advocate notice establishes this joint accountability on legal record.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Global Contextual Related Recovery Guides */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
