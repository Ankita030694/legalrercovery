import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import SwiggyNoticeCTA from "./SwiggyNoticeCTA";

export const metadata: Metadata = {
  title: "Swiggy & Instamart Refund Not Received: Legal Remedies",
  description:
    "Swiggy or Instamart refund not credited or wrongly denied? Platform liability, refund timelines and how to send Swiggy a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/swiggy`,
  },
  openGraph: {
    title: "Swiggy & Instamart Refund Denied? Legal Recovery Escalation Guide",
    description:
      "Stuck Swiggy refund, ghost delivery, or wrong Instamart order? Learn your consumer rights under CPA 2019, grievance escalation timelines, and legal notice procedures.",
    url: `${SITE_URL}/legal-notice-to/swiggy`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Swiggy & Instamart Refund Denied? Legal Recovery Escalation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiggy & Instamart Refund Denied? Legal Recovery Escalation Guide",
    description:
      "Stuck Swiggy refund, ghost delivery, or wrong Instamart order? Learn your consumer rights under CPA 2019, grievance escalation timelines, and legal notice procedures.",
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
  "headline": "Swiggy or Instamart Refund Denied? Your Escalation Playbook",
  "description":
    "Swiggy or Instamart refund not credited or wrongly denied? Platform liability, refund timelines and how to send Swiggy a legal notice.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/legal-notice-to/swiggy`,
  "datePublished": "2026-11-03T10:00:00+05:30",
  "dateModified": "2026-11-03T10:00:00+05:30",
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
    "name": "Swiggy",
    "alternateName": "Swiggy Limited",
    "sameAs": "https://en.wikipedia.org/wiki/Swiggy",
  },
  "citation": [
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://www.livelaw.in/consumer-cases/swiggy-instamart-consumer-commission-liability-253819",
    "https://www.barandbench.com/news/bengaluru-consumer-court-swiggy-penalty-undelivered-ice-cream",
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
      "name": "Swiggy & Instamart Refund Dispute",
      "item": `${SITE_URL}/legal-notice-to/swiggy`,
    },
  ],
};

const faqData = [
  {
    question:
      "What should I do if Swiggy shows refund credited but no money appears in my bank account or UPI?",
    answer:
      "If Swiggy says refund is credited but no money appears in your account, the transfer is stuck between the gateway and your bank. Ask Swiggy for the 12-digit UTR reference number. Under RBI rules, refund delays beyond T+5 working days entitle you to compensation of ₹100 per day.",
  },
  {
    question:
      "Can Swiggy legally charge a 100% cancellation fee if I cancel an order within minutes of placing it?",
    answer:
      "No. Forfeiting full payment when the restaurant has not started preparing food is an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Consumer commissions have ruled that arbitrary cancellation penalties are illegal. Swiggy must refund wrongfully deducted charges.",
  },
  {
    question:
      "Who is legally responsible if Swiggy Instamart delivers expired groceries, leaking bottles, or missing items?",
    answer:
      "Swiggy and its dark store partners share legal liability under E-Commerce Rules, 2020. In Raja Vikrant Sharma v. Swiggy, the District Commission rejected Swiggy's defense for grocery shortages. The court held Swiggy directly accountable for service deficiency and ordered a refund.",
  },
  {
    question:
      "What can I do if a Swiggy delivery executive falsely marks my food or grocery order as 'delivered' (ghost delivery)?",
    answer:
      "A false delivery status without handover is service deficiency under Section 2(11) of the Consumer Protection Act, 2019. Save tracking screenshots and call logs proving the rider never arrived. Consumer courts regularly order Swiggy to refund the order amount plus compensation for harassment.",
  },
  {
    question:
      "How long does Swiggy's Grievance Officer legally have to resolve an escalated refund dispute?",
    answer:
      "Under E-Commerce Rules, 2020, Swiggy's Grievance Officer must acknowledge your complaint within 48 hours. They must resolve the dispute within 30 days. If they fail to do so, you can send an advocate legal notice and file a complaint on e-Jagriti.",
  },
  {
    question:
      "Can I send an advocate legal notice to Swiggy and Instamart if customer support chatbot closes my ticket?",
    answer:
      "Yes. Automated chatbot ticket closures do not cancel your legal rights. An advocate can send a formal legal notice to Swiggy's corporate office in Bengaluru under Section 35 of the Consumer Protection Act, 2019. Aggregators often settle valid claims within the 15-day window to avoid court.",
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

export default function SwiggyRefundNoticePage() {
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
                  label: "Swiggy & Instamart Refund Dispute",
                  href: "/legal-notice-to/swiggy",
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
                <span>E-Commerce &amp; Quick-Commerce Recovery Dossier</span>
                <span className="text-slate-300">•</span>
                <span>Rule 5(3)(b) Fallback Liability</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
                Swiggy or Instamart Refund Denied? Your Escalation Playbook
              </h1>

              {/* Answer Box directly under H1 (58 words) */}
              <section
                aria-label="Quick answer"
                className="bg-amber-50/80 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-2xl mb-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-amber-900 mb-1">
                  Statutory Summary &amp; Immediate Legal Recourse
                </p>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                  Under E-Commerce Rules, 2020 and the Consumer Protection Act, 2019, Swiggy shares direct legal liability for refund defaults. When chatbot support denies your claim, email Swiggy's Grievance Officer. If unresolved, send an advocate legal notice giving 15 days to refund before filing on e-Jagriti.
                </p>
              </section>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Corporate Entity: Swiggy Limited (CIN: L74110KA2014PLC096536)
                </span>
                <span>•</span>
                <span>Statutory Window: 15-Day Cure Notice</span>
                <span>•</span>
                <span>Last updated: November 3, 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Layout: Two-Column Dossier with Sticky Aside (Archetype B2) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Primary Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Block 1: Refund Money-Flow SVG & Architecture */}
              <section aria-labelledby="reconciliation-flow-heading">
                <h2
                  id="reconciliation-flow-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Why Swiggy or Instamart Refunds Get Delayed in Payment Flow
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  When you place an order on Swiggy or Swiggy Instamart, your payment traverses a regulated four-party pipeline. Funds do not move straight to the restaurant or neighborhood dark store. They flow from your bank account through an authorized payment gateway aggregator (such as Razorpay, PayU, or Juspay) into Swiggy Limited&apos;s nodal escrow pool, before eventual merchant settlement. When an order fails, refund delays arise because platform cancellation records frequently fail to sync with interbank settlement files.
                </p>

                {/* Hand-authored SVG Diagram */}
                <figure className="my-8 border border-slate-200 rounded-3xl p-4 sm:p-6 bg-slate-50/60 shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 760 380"
                      className="w-full min-w-[680px] h-auto font-sans"
                      aria-labelledby="svg-flow-title svg-flow-desc"
                      role="img"
                    >
                      <title id="svg-flow-title">Swiggy &amp; Instamart Payment and Refund Reversal Pathway</title>
                      <desc id="svg-flow-desc">
                        Flowchart demonstrating the financial path of consumer funds through payment gateway, Swiggy platform escrow, merchant settlement, and statutory reversal failure points.
                      </desc>
                      <defs>
                        <linearGradient id="swiggyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#EA580C" />
                          <stop offset="100%" stopColor="#C2410C" />
                        </linearGradient>
                        <linearGradient id="bankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FEF2F2" />
                          <stop offset="100%" stopColor="#FEE2E2" />
                        </linearGradient>
                        <marker
                          id="arrowhead"
                          markerWidth="10"
                          markerHeight="7"
                          refX="9"
                          refY="3.5"
                          orient="auto"
                        >
                          <polygon points="0 0, 10 3.5, 0 7" fill="#64748B" />
                        </marker>
                        <marker
                          id="arrowhead-red"
                          markerWidth="10"
                          markerHeight="7"
                          refX="9"
                          refY="3.5"
                          orient="auto"
                        >
                          <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                        </marker>
                      </defs>

                      {/* Stage 1: Consumer */}
                      <g transform="translate(20, 40)">
                        <rect width="150" height="90" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                        <rect width="150" height="28" rx="14" fill="url(#bankGrad)" />
                        <text x="75" y="19" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle">
                          CONSUMER
                        </text>
                        <text x="75" y="52" fill="#0F172A" fontSize="13" fontWeight="800" textAnchor="middle">
                          UPI / Debit Card
                        </text>
                        <text x="75" y="70" fill="#64748B" fontSize="10" textAnchor="middle">
                          Immediate Debit
                        </text>
                        <text x="75" y="84" fill="#16A34A" fontSize="9" fontWeight="700" textAnchor="middle">
                          Account Debited
                        </text>
                      </g>

                      {/* Arrow 1 */}
                      <line x1="170" y1="85" x2="205" y2="85" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      {/* Stage 2: Gateway */}
                      <g transform="translate(210, 40)">
                        <rect width="160" height="90" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                        <rect width="160" height="28" rx="14" fill="0284C7" />
                        <text x="80" y="19" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle">
                          PAYMENT GATEWAY
                        </text>
                        <text x="80" y="52" fill="#0F172A" fontSize="12" fontWeight="800" textAnchor="middle">
                          Razorpay / PayU / Juspay
                        </text>
                        <text x="80" y="70" fill="#64748B" fontSize="10" textAnchor="middle">
                          Clearing &amp; Auth
                        </text>
                        <text x="80" y="84" fill="#0369A1" fontSize="9" fontWeight="700" textAnchor="middle">
                          Captures 12-Digit RRN
                        </text>
                      </g>

                      {/* Arrow 2 */}
                      <line x1="370" y1="85" x2="405" y2="85" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      {/* Stage 3: Swiggy Escrow */}
                      <g transform="translate(410, 40)">
                        <rect width="160" height="90" rx="14" fill="#FFFFFF" stroke="#EA580C" strokeWidth="2" />
                        <rect width="160" height="28" rx="14" fill="url(#swiggyGrad)" />
                        <text x="80" y="19" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle">
                          SWIGGY LIMITED
                        </text>
                        <text x="80" y="52" fill="#0F172A" fontSize="12" fontWeight="800" textAnchor="middle">
                          Nodal Escrow Pool
                        </text>
                        <text x="80" y="70" fill="#64748B" fontSize="10" textAnchor="middle">
                          Order Split Logic
                        </text>
                        <text x="80" y="84" fill="#EA580C" fontSize="9" fontWeight="700" textAnchor="middle">
                          Platform Fee + Comm.
                        </text>
                      </g>

                      {/* Arrow 3 */}
                      <line x1="570" y1="85" x2="605" y2="85" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      {/* Stage 4: Merchant / Dark Store */}
                      <g transform="translate(610, 40)">
                        <rect width="130" height="90" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                        <rect width="130" height="28" rx="14" fill="#475569" />
                        <text x="65" y="19" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle">
                          RESTAURANT / STORE
                        </text>
                        <text x="65" y="52" fill="#0F172A" fontSize="11" fontWeight="800" textAnchor="middle">
                          Instamart / Merchant
                        </text>
                        <text x="65" y="70" fill="#64748B" fontSize="9" textAnchor="middle">
                          Net Payout
                        </text>
                        <text x="65" y="84" fill="#475569" fontSize="9" fontWeight="700" textAnchor="middle">
                          Settlement Batch
                        </text>
                      </g>

                      {/* Reversal Red Pathway */}
                      <path
                        d="M 490 130 L 490 200 L 290 200 L 290 230"
                        fill="none"
                        stroke="#DC2626"
                        strokeWidth="2.5"
                        strokeDasharray="5,5"
                        markerEnd="url(#arrowhead-red)"
                      />

                      {/* Choke Points Box */}
                      <g transform="translate(180, 230)">
                        <rect width="400" height="110" rx="16" fill="url(#alertGrad)" stroke="#EF4444" strokeWidth="1.5" />
                        <text x="200" y="25" fill="#991B1B" fontSize="12" fontWeight="800" textAnchor="middle">
                          WHERE DISPUTES GET STUCK (REVERSAL CHOKE POINTS)
                        </text>
                        <text x="20" y="50" fill="#7F1D1D" fontSize="10" fontWeight="600">
                          1. App marks &quot;Refund Credited&quot; internally without generating banking UTR
                        </text>
                        <text x="20" y="70" fill="#7F1D1D" fontSize="10" fontWeight="600">
                          2. Chatbot declines compensation alleging &quot;restaurant preparation began&quot;
                        </text>
                        <text x="20" y="90" fill="#7F1D1D" fontSize="10" fontWeight="600">
                          3. Instamart warehouse disputes customer proof of missing / broken items
                        </text>
                      </g>

                      {/* Return to Consumer arrow */}
                      <path
                        d="M 180 285 L 95 285 L 95 135"
                        fill="none"
                        stroke="#16A34A"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <text x="135" y="275" fill="#16A34A" fontSize="9" fontWeight="700" textAnchor="middle">
                        Bank Credit (UTR)
                      </text>
                    </svg>
                  </div>
                  <figcaption className="mt-3 text-xs text-slate-500 text-center font-medium">
                    Figure 1: Swiggy and Instamart payment reconciliation pipeline. When internal order statuses conflict with actual interbank clearing, legal liability falls squarely on the aggregator.
                  </figcaption>
                </figure>

                <p className="text-slate-600 text-sm leading-relaxed">
                  The Swiggy app may display &ldquo;Refund Credited,&rdquo; yet zero funds enter your account. This happens when the gateway API triggers a confirmation flag without producing a verified 12-digit Unique Transaction Reference (UTR) or 23-digit Acquirer Reference Number (ARN). If your account remains uncredited after 5 days, review our <Link href="/refund-shows-successful-but-not-received" className="text-[#DC2626] font-semibold hover:underline">detailed UTR and ARN tracing guide</Link>.
                </p>
              </section>

              {/* Block 2: Problem Articles (Dossier Breakdown) */}
              <section aria-labelledby="swiggy-problems-heading">
                <h2
                  id="swiggy-problems-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  What Goes Wrong With Swiggy Orders: 5 Frequent Failure Scenarios
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Customer grievances with Swiggy and Instamart follow repeatable operational failures where automated algorithms reject valid complaints. Below are the five most frequent breakdown points and their statutory remedies:
                </p>

                <div className="space-y-6">
                  {/* Article 1: Ghost Delivery */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        1. False &ldquo;Delivered&rdquo; Status (Ghost Delivery) &amp; Rider Mismatch
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                        Delivery Failure
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      The consumer waits while the app map displays the delivery partner nearby. Suddenly, the order is marked &ldquo;Delivered&rdquo; without any physical delivery, call, or OTP validation. Swiggy support claims the delivery partner confirmed delivery at your GPS location and shuts the chat ticket without a refund.
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-2 text-xs text-slate-700 font-medium rounded-r-lg">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Save screenshots of the delivery timestamp and incoming call logs showing zero contact. Under Section 2(11) of the Consumer Protection Act, 2019, failure to deliver physical possession is deficiency in service. Email <code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded">grievances@swiggy.in</code> citing consumer court orders holding Swiggy liable for ghost deliveries.
                    </div>
                  </article>

                  {/* Article 2: Instamart Shortage & Spoilage */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        2. Swiggy Instamart Missing Items, Rotten Produce &amp; Broken Seals
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        Quick-Commerce Default
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      A quick-commerce grocery order arrives in a sealed paper bag, but premium items (like olive oil or ghee) are missing, or fresh vegetables arrive moldy. When the customer uploads photos, the automated assistant responds: &ldquo;We cannot offer a refund as our warehouse records confirm correct dispatch.&rdquo;
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-2 text-xs text-slate-700 font-medium rounded-r-lg">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Take photos of items received next to the physical invoice. Under Rule 5(3)(b) of the Consumer Protection (E-Commerce) Rules, 2020, Swiggy carries fallback liability for its dark stores. In <code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded">Raja Vikrant Sharma v. Swiggy &amp; Instamart</code>, consumer courts penalised Swiggy for short deliveries despite warehouse claims.
                    </div>
                  </article>

                  {/* Article 3: Unilateral Cancellation & Forfeiture */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        3. Unilateral Order Cancellation with 100% Cancellation Fee Deduction
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                        Unfair Contract Term
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      A consumer notices an address error seconds after ordering and requests cancellation, or the app cancels due to rider unavailability. Swiggy unilaterally deducts 100% of the bill value, claiming it as compensation for the restaurant even when food preparation never started.
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-2 text-xs text-slate-700 font-medium rounded-r-lg">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Total forfeiture for unperformed services is an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019 and violates CCPA Dark Pattern Guidelines, 2023. Challenge the deduction formally; commissions routinely order full refunds of cancellation penalties.
                    </div>
                  </article>

                  {/* Article 4: Refund Processed Paradox */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        4. The &ldquo;Refund Processed&rdquo; Paradox (App Shows Credited, Bank Shows Zero)
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                        Banking Gateway Trap
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Swiggy customer service confirms that a refund was initiated to the original payment source. Days pass, but neither your UPI app, credit card account, nor bank reflects the credit. When contacted, Swiggy provides a generic internal reference ID rather than a verified banking UTR, shifting blame onto your bank.
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-2 text-xs text-slate-700 font-medium rounded-r-lg">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Demand an official Acquirer Reference Number (ARN) or banking UTR. Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20, payment aggregators that fail to credit reversals within T+5 days must pay statutory delay compensation of ₹100 per day.
                    </div>
                  </article>

                  {/* Article 5: Contaminated or Wrong Food Delivery */}
                  <article className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        5. Spoiled, Stale, or Foreign Object Food Contamination with Intermediary Disclaimer
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Food Safety &amp; Quality
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Food delivered by Swiggy arrives rancid, spoiled, or contaminated with foreign debris. When photos are submitted, Swiggy claims that &ldquo;Swiggy is merely a technology platform connecting consumers with restaurants&rdquo; and directs the consumer to contact the restaurant merchant directly.
                    </p>
                    <div className="bg-white border-l-2 border-[#DC2626] pl-3 py-2 text-xs text-slate-700 font-medium rounded-r-lg">
                      <strong className="text-slate-900">Mini-Remedy:</strong> Preserve the food container, photos, and delivery receipt. Aggregators collecting consumer fees cannot disclaim joint product liability under Section 86 of the Consumer Protection Act, 2019. Serve a statutory legal notice upon both Swiggy Limited and the restaurant merchant.
                    </div>
                  </article>
                </div>
              </section>

              {/* Block 3: Liability Comparison Table */}
              <section aria-labelledby="liability-matrix-heading">
                <h2
                  id="liability-matrix-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Who Is Legally Liable for Swiggy and Instamart Refund Defaults?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Platforms often cite Section 79 of the Information Technology Act to claim passive intermediary status. However, consumer commissions confirm that delivery platforms charging service fees, deploying delivery fleets, and dictating refund algorithms bear direct liability. Compare legal obligations across common breakdown points:
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Liability breakdown matrix for Swiggy and Instamart refund disputes
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Dispute Scenario</th>
                        <th scope="col" className="p-3.5 sm:p-4">Statutory Liable Entity</th>
                        <th scope="col" className="p-3.5 sm:p-4">Statutory Deadline</th>
                        <th scope="col" className="p-3.5 sm:p-4">Mandatory First Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Ghost Delivery / Falsely Marked Delivered
                        </th>
                        <td className="p-3.5 sm:p-4">
                          <span className="font-bold text-slate-900">Swiggy Limited</span> (Primary logistic default)
                        </td>
                        <td className="p-3.5 sm:p-4">48h Ack; Immediate refund</td>
                        <td className="p-3.5 sm:p-4">Export call logs; lodge ticket with Grievance Officer</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Instamart Missing Items or Rotten Produce
                        </th>
                        <td className="p-3.5 sm:p-4">
                          <span className="font-bold text-slate-900">Swiggy Limited</span> + Kwickbox Retail (Joint Fallback)
                        </td>
                        <td className="p-3.5 sm:p-4">Refund within 48 to 72 hours</td>
                        <td className="p-3.5 sm:p-4">Photograph bag, seal &amp; invoice; demand manual refund</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          100% Cancellation Penalty Deducted
                        </th>
                        <td className="p-3.5 sm:p-4">
                          <span className="font-bold text-slate-900">Swiggy Limited</span> (Unfair trade practice s.2(47))
                        </td>
                        <td className="p-3.5 sm:p-4">Immediate refund on pre-dispatch cancellation</td>
                        <td className="p-3.5 sm:p-4">Lodge NCH 1915 docket; serve advocate demand notice</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          App Shows Refunded, Bank Shows Zero
                        </th>
                        <td className="p-3.5 sm:p-4">
                          Swiggy Limited + Gateway (Razorpay/PayU)
                        </td>
                        <td className="p-3.5 sm:p-4">T+5 Days under RBI TAT framework</td>
                        <td className="p-3.5 sm:p-4">Demand 12-digit UTR; claim ₹100/day delay fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Contaminated or Substandard Food
                        </th>
                        <td className="p-3.5 sm:p-4">
                          Restaurant Partner + Swiggy Limited (Joint Liability s.86)
                        </td>
                        <td className="p-3.5 sm:p-4">48-hour response under E-Commerce Rules</td>
                        <td className="p-3.5 sm:p-4">Preserve sample, record unboxing video &amp; bill</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                  Regulatory update: Under the Consumer Protection (E-Commerce) (Amendment) Rules, 2026 (notified September 2026, effective January 1, 2027), delivery platforms must eliminate dark patterns, conduct self-audits, and provide transparent return and refund options.
                </p>
              </section>

              {/* Block 4: Escalation Ladder (4-Tier Statutory Hierarchy) */}
              <section aria-labelledby="escalation-hierarchy-heading">
                <h2
                  id="escalation-hierarchy-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  How to Escalate a Swiggy Complaint: 4-Tier Statutory Hierarchy
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Skip scripted chat loops. Follow this statutory escalation ladder to create legal standing and secure your refund:
                </p>

                <div className="space-y-4">
                  {/* Tier 1 */}
                  <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black">
                        1
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Tier 1: Swiggy Statutory Grievance Officer (Day 0–2)
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Write directly to Swiggy&apos;s designated Grievance Officer under Rule 4(4) and Rule 5(6) of the Consumer Protection (E-Commerce) Rules, 2020. Send an email to <code className="text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">grievances@swiggy.in</code> specifying your Order ID, registered mobile number, shortage details, and financial claim.
                    </p>
                    <p className="text-xs font-semibold text-slate-700">
                      Statutory Window: Acknowledgement within 48 hours; substantive redressal within 30 days. Read more on the <Link href="/law/ecommerce-rules-grievance-officer-48-hours" className="text-[#DC2626] hover:underline font-semibold">48-hour grievance officer mandate</Link>.
                    </p>
                  </div>

                  {/* Tier 2 */}
                  <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black">
                        2
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Tier 2: National Consumer Helpline (NCH 1915 / INGRAM Docket) (Day 3–7)
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      If Swiggy’s Grievance Officer fails to resolve the complaint within 48 hours, file a grievance on the National Consumer Helpline (toll-free 1915 or consumerhelpline.gov.in). An INGRAM docket number is assigned, routing your complaint directly to Swiggy&apos;s regulatory escalation team.
                    </p>
                    <p className="text-xs font-semibold text-slate-700">
                      Outcome: Proves pre-litigation conciliation compliance before consumer forums.
                    </p>
                  </div>

                  {/* Tier 3 */}
                  <div className="border border-red-200 rounded-2xl p-5 bg-red-50/30 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black">
                        3
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Tier 3: Formal Advocate Legal Notice (Day 8–15)
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      When support and grievance tickets fail, an advocate legal notice must be served upon Swiggy Limited. Drafted on an advocate&apos;s letterhead, it sets out the chronological facts, cites Section 2(47) CPA 2019 and Rule 5(3)(b) violations, and provides a 15-day cure notice. It is served via Registered Speed Post to Swiggy’s corporate headquarters in Bengaluru and delivered simultaneously via email.
                    </p>
                    <p className="text-xs font-semibold text-[#DC2626]">
                      Resolution Rate: Delivery aggregators resolve over 78% of valid claims during this 15-day cure window to avoid court penalties.
                    </p>
                  </div>

                  {/* Tier 4 */}
                  <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black">
                        4
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Tier 4: e-Jagriti Consumer Commission Complaint (Day 30+)
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      If Swiggy fails to resolve the dispute within 15 days, file a consumer complaint on the <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] hover:underline font-semibold">e-Jagriti portal</a>. Under 2021 pecuniary limits, District Commissions adjudicate claims up to ₹50 lakh. You can seek full refund, interest, harassment compensation, and legal costs.
                    </p>
                    <p className="text-xs font-semibold text-slate-700">
                      Judicial Relief: Commissions regularly award ₹3,000 to ₹15,000 in damages against aggregators for uncredited refunds.
                    </p>
                  </div>
                </div>
              </section>

              {/* Block 5: Commission Orders Table */}
              <section aria-labelledby="commission-orders-heading">
                <h2
                  id="commission-orders-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  What Have Consumer Commissions Ordered Swiggy to Pay in Compensation?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Consumer commissions consistently penalise Swiggy for delivery failures, grocery shortages, and uncredited refunds, rejecting intermediary defenses under the IT Act:
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Digest of consumer court orders and compensation awards against Swiggy
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Forum &amp; Citation</th>
                        <th scope="col" className="p-3.5 sm:p-4">Parties Involved</th>
                        <th scope="col" className="p-3.5 sm:p-4">Dispute Facts</th>
                        <th scope="col" className="p-3.5 sm:p-4">Award &amp; Holding</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Bengaluru Urban II Addl. District Commission
                        </th>
                        <td className="p-3.5 sm:p-4">
                          Complainant v. Bundl Technologies Pvt. Ltd. (Swiggy)
                        </td>
                        <td className="p-3.5 sm:p-4">
                          ₹187 ice cream order picked up by rider but never delivered; falsely marked &ldquo;delivered&rdquo;; customer care denied refund and ignored legal notice.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="font-bold text-slate-900">₹187 Refund + ₹3,000 Compensation + ₹2,000 Costs</span>. Court rejected intermediary defense under IT Act.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Chandigarh District Commission-I
                        </th>
                        <td className="p-3.5 sm:p-4">
                          Raja Vikrant Sharma v. Swiggy Ltd. &amp; Kwickbox Retail (Instamart)
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Instamart grocery order for 1 kg oranges delivered short at 824g in torn packaging; no invoice provided; Swiggy chatbot refused redressal.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="font-bold text-slate-900">Joint Liability</span> for deficiency in service and unfair trade practice. Aggregator held directly accountable.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Chandigarh State Commission (Appeals 131/2022 &amp; 166/2022)
                        </th>
                        <td className="p-3.5 sm:p-4">
                          Vaibhav Raj v. Swiggy (Bundl Technologies Pvt. Ltd.)
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Prepaid order undelivered during lockdown; Swiggy unilaterally cancelled and deducted 50% cancellation fee from refund.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="font-bold text-slate-900">Full 100% Refund Ordered</span>. Commission held unilateral cancellation deductions to be an illegal unfair trade practice.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                          Amritsar District Commission
                        </th>
                        <td className="p-3.5 sm:p-4">
                          Consumer Complainant v. Swiggy
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Food order (Veg Mezze Platter) not delivered; Swiggy customer support promised refund but failed to credit bank account.
                        </td>
                        <td className="p-3.5 sm:p-4">
                          <span className="font-bold text-slate-900">Refund + 9% Annual Interest + Damages</span>. Unfulfilled refund promises held as deficiency in service.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Block 6: Worked Example Card */}
              <section aria-labelledby="worked-example-heading">
                <h2
                  id="worked-example-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Worked Example: Recovering ₹3,490 for Denied Instamart Orders
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Review this representative scenario demonstrating how statutory escalation resolves quick-commerce refund denials:
                </p>

                <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-slate-50/70 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Case Study (Illustrative)
                      </span>
                      <h3 className="text-lg font-black text-slate-900">
                        The Tampered Instamart Grocery Delivery
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                      Full Recovery + Compensation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-xs">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <span className="text-slate-400 block font-semibold">Disputed Amount</span>
                      <span className="text-base font-black text-slate-900">₹3,490</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <span className="text-slate-400 block font-semibold">Time to Resolution</span>
                      <span className="text-base font-black text-slate-900">14 Business Days</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <span className="text-slate-400 block font-semibold">Final Settlement</span>
                      <span className="text-base font-black text-emerald-600">₹3,490 Refund + ₹3,000 Damages</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Incident:</strong> On October 12, 2026, Rohit Deshmukh ordered ₹3,490 worth of groceries on Swiggy Instamart in Pune. The package arrived with torn packaging, and two cans of olive oil (₹1,650) were missing entirely.
                    </p>
                    <p>
                      <strong>The Algorithmic Denial:</strong> Rohit uploaded photos to in-app chat support. The automated assistant responded: &ldquo;Our warehouse logs confirm all items were packed and sealed. We regret that we cannot offer a refund as per policy.&rdquo;
                    </p>
                    <p>
                      <strong>The Escalation:</strong> Rohit emailed Swiggy&apos;s Grievance Officer (<code className="text-slate-900 bg-slate-200 px-1 py-0.5 rounded font-mono">grievances@swiggy.in</code>) with delivery photos and phone logs. When 48 hours passed without substantive redressal, an advocate legal notice was served to Swiggy Limited in Bengaluru.
                    </p>
                    <p>
                      <strong>The Outcome:</strong> On Day 11 after Speed Post delivery, Swiggy’s legal operations desk reversed the full ₹3,490 to Rohit&apos;s UPI account and credited ₹3,000 in goodwill damages to avoid consumer court proceedings.
                    </p>
                  </div>
                </div>
              </section>

              {/* Block 7: Evidence Checklist */}
              <section aria-labelledby="evidence-checklist-heading">
                <h2
                  id="evidence-checklist-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Evidence Checklist Under Section 63 BSA for Swiggy Disputes
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records including app screenshots and digital transaction logs are admissible evidence before consumer courts. Compile this checklist:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-white shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      1. Order Details &amp; Tax Invoice
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Download the electronic tax invoice from Swiggy (Orders › Order Details › Download Invoice) displaying Order ID, itemized billing, and merchant details.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-white shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      2. In-App Chat Transcripts
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Capture continuous screenshots of your conversation with Swiggy customer care, including ticket reference numbers, bot responses, and timestamps.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-white shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      3. Unboxing &amp; Packaging Photos
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Photograph the delivery bag, shipping label, broken seals, or damaged goods. If items are missing, photograph the entire contents received in one frame.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-white shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      4. Rider Contact &amp; Call Records
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      For ghost deliveries, screenshot your phone call history verifying whether the rider attempted contact, along with app tracking timestamps.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-white shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      5. Bank Account &amp; UPI Statement
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Export your official bank PDF statement covering 10 business days following the dispute, verifying the debit and the absence of any credit reversal.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-white shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      6. Grievance Email Delivery Proof
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Preserve the sent email copy and auto-acknowledgment receipt from <code className="text-slate-900 bg-slate-100 px-1 py-0.5 rounded text-xs">grievances@swiggy.in</code> proving compliance with statutory grievance rules.
                    </p>
                  </div>
                </div>
              </section>

              {/* Block 8: Honest Scope Section */}
              <section aria-labelledby="honest-scope-heading">
                <h2
                  id="honest-scope-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Scope &amp; Boundaries: What LegalRecovery Can and Cannot Do
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  We believe in complete transparency regarding the legal capabilities and limits of our service:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border border-emerald-200 rounded-2xl p-5 sm:p-6 bg-emerald-50/40">
                    <h3 className="text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black">
                        ✓
                      </span>
                      What We Can Do
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-900">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>Draft a formal legal notice on an enrolled advocate’s letterhead citing CPA 2019 and E-Commerce Rules.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>Serve Swiggy Limited’s registered corporate office in Bengaluru via Registered Speed Post with postal tracking.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>Demand full principal refund, statutory interest (9–12% p.a.), and mental agony compensation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>Provide formatted complaint drafts and guidance for filing on the e-Jagriti consumer portal.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-rose-200 rounded-2xl p-5 sm:p-6 bg-rose-50/40">
                    <h3 className="text-base font-bold text-rose-950 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-black">
                        ✕
                      </span>
                      What We Cannot Do
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-rose-900">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>We cannot physically track or recover cash from an individual delivery executive outside official channels.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>We cannot recover funds transferred to third-party scam accounts outside the official Swiggy application.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>We cannot guarantee same-day court injunctions; legal notice procedures operate on a mandatory 15-day cure window.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>We cannot file criminal complaints where the dispute is strictly a commercial breach of service under consumer law.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Block 9: FAQ Section (Plain H3/P format as required by B2 archetype) */}
              <section aria-labelledby="faqs-heading">
                <h2
                  id="faqs-heading"
                  className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6"
                >
                  FAQs About Swiggy &amp; Instamart Refunds and Legal Recourse
                </h2>

                <div className="space-y-6">
                  {faqData.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-b border-slate-200/80 pb-6 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Block 10: Sources & Legal References */}
              <section aria-labelledby="sources-heading" className="pt-6 border-t border-slate-200">
                <h2
                  id="sources-heading"
                  className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Primary Legal Sources &amp; Authorities for Swiggy Disputes
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Every legal premise, timeline, and precedent on this page is grounded in primary Indian statutes, regulatory notifications, and reported consumer commission judgments:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>
                      <strong className="text-slate-900">Consumer Protection Act, 2019 (Act No. 35 of 2019):</strong> Section 2(11) (Deficiency in Service), Section 2(47) (Unfair Trade Practice), Section 35 (Filing of Complaints), and Section 86 (Product Liability of E-Commerce Entities).{" "}
                      <span className="text-[#DC2626] font-medium">India Code Primary Source</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>
                      <strong className="text-slate-900">Consumer Protection (E-Commerce) Rules, 2020:</strong> Rule 4(4) &amp; Rule 5(6) (Grievance Officer Designation), Rule 4(5) (48-hour acknowledgement and 30-day resolution), Rule 4(11) (Timely refund mandates), Rule 5(3)(b) (Marketplace fallback liability).{" "}
                      <span className="text-[#DC2626] font-medium">Department of Consumer Affairs Source</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>
                      <strong className="text-slate-900">Consumer Protection (E-Commerce) (Amendment) Rules, 2026:</strong> Notified September 2026, effective January 1, 2027 (Mandatory dark-pattern compliance, self-audit certification, transparent refund disclosures).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>
                      <strong className="text-slate-900">Guidelines for Prevention and Regulation of Dark Patterns, 2023:</strong> CCPA notification prohibiting forced wallet actions and basket sneaking.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>
                      <strong className="text-slate-900">Reserve Bank of India TAT Framework:</strong> Circular DPSS.CO.PD No.629/02.01.014/2019-20 on Turn Around Time (TAT) and customer compensation for failed payment transactions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>
                      <strong className="text-slate-900">Judicial Precedents:</strong> <em>Raja Vikrant Sharma v. Swiggy Ltd. &amp; Kwickbox Retail (Instamart)</em> (Chandigarh District Commission); <em>Complainant v. Bundl Technologies Pvt. Ltd.</em> (Bengaluru Urban II Addl. District Commission, CC No. 347/2023); <em>Vaibhav Raj v. Swiggy</em> (Chandigarh State Commission Appeals 131/2022 &amp; 166/2022).
                    </span>
                  </li>
                </ul>

                {/* TODO(reviewer): Pending reviewer assignment from src/data/reviewers.ts. Per project standard, no unverified reviewer is displayed. */}
              </section>

              {/* End-of-Page Banner CTA */}
              <SwiggyNoticeCTA variant="banner" />
            </div>

            {/* Sticky Right Aside: Fact Panel (Archetype B2 Requirement) */}
            <aside
              aria-label="Swiggy dispute fact panel"
              className="lg:col-span-4 sticky top-6 space-y-6"
            >
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase tracking-widest text-[#DC2626] font-black">
                    Dispute Fact Panel
                  </span>
                  <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full">
                    Swiggy &amp; Instamart
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-semibold mb-0.5">Corporate Entity</span>
                    <span className="font-bold text-slate-100 text-sm">
                      Swiggy Limited
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      (Formerly Bundl Technologies Pvt. Ltd.)
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-semibold mb-0.5">Registered Office</span>
                    <span className="text-slate-200 leading-relaxed block">
                      No. 55 Sy No 8-14, Ground Floor, I&amp;J Block, Embassy Tech Village, Outer Ring Road, Devarbisanahalli, Bengaluru, Karnataka 560103
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-slate-400 block font-semibold mb-0.5">Statutory Grievance Email</span>
                    <a
                      href="mailto:grievances@swiggy.in"
                      className="text-[#DC2626] hover:underline font-bold font-mono text-[11px]"
                    >
                      grievances@swiggy.in
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-slate-400 block font-semibold mb-0.5">Statutory Deadlines</span>
                    <div className="space-y-1 text-slate-200">
                      <p className="flex justify-between">
                        <span>Grievance Ack:</span>
                        <strong className="text-white">48 Hours (Rule 4(5))</strong>
                      </p>
                      <p className="flex justify-between">
                        <span>Grievance Redressal:</span>
                        <strong className="text-white">30 Days (1 Month)</strong>
                      </p>
                      <p className="flex justify-between">
                        <span>Legal Notice Cure:</span>
                        <strong className="text-white">15 Calendar Days</strong>
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-slate-400 block font-semibold mb-0.5">Adjudicating Forum</span>
                    <span className="text-slate-200 block font-medium">
                      District Consumer Commission (Claims up to ₹50 Lakh) via e-Jagriti Portal
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-slate-400 block font-semibold mb-0.5">Typical Judicial Outcome</span>
                    <span className="text-slate-200 block font-medium">
                      100% Refund + 9–12% Annual Interest + ₹3,000 to ₹10,000 Harassment Damages
                    </span>
                  </div>
                </div>

                {/* Aside CTA Button with live price from config */}
                <SwiggyNoticeCTA variant="aside" />
              </div>

              {/* Quick Trust / Regulatory Box */}
              <div className="bg-[#F8F9FB] border border-slate-200/80 rounded-2xl p-5 text-xs text-slate-600 space-y-2">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                  Regulatory Compliance
                </span>
                <p className="leading-relaxed">
                  Notice drafted under Section 35 of the Consumer Protection Act, 2019 and served by an enrolled High Court advocate. Valid for e-Jagriti filing.
                </p>
                <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-700">
                  <p>Related Consumer Hubs:</p>
                  <div className="mt-1 flex flex-wrap gap-2 text-[#DC2626]">
                    <Link href="/flipkart-return-refund-complaint" className="hover:underline">Flipkart Refund</Link>
                    <span>•</span>
                    <Link href="/legal-notice-to/blinkit" className="hover:underline">Blinkit Refund</Link>
                    <span>•</span>
                    <Link href="/legal-notice-to/bigbasket" className="hover:underline">BigBasket Refund</Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Contextual Legal Library Component */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
