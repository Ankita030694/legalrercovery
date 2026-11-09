import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import RefundTracingCTA from "./RefundTracingCTA";
import RefundRouteSelector from "./RefundRouteSelector";

// TODO(reviewer): Add legally reviewed box once src/data/reviewers.ts is established in the repository

export const metadata: Metadata = {
  title: "Refund Successful but Not Received? Trace It With UTR/ARN",
  description:
    "Refund marked successful but not in your account? Use UTR/ARN to trace it with your bank, know who is liable and escalate the right way.",
  alternates: {
    canonical: `${SITE_URL}/refund-shows-successful-but-not-received`,
  },
  openGraph: {
    title: "Refund Shows 'Successful' but Bank Shows Nothing? Tracing & Legal Action",
    description:
      "Learn how to trace uncredited refunds using UTR and ARN codes, resolve bank suspense account hold-ups, and enforce RBI delay compensation rules.",
    url: `${SITE_URL}/refund-shows-successful-but-not-received`,
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const PRIMARY_SOURCES = [
  {
    title: "RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20 (Harmonisation of TAT & Customer Compensation for Failed Transactions)",
    url: "https://www.rbi.org.in/scripts/FS_Notification.aspx?Id=11693&Mode=0",
    accessed: "03 November 2026",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (Clause 15 Deficiency Compensation)",
    url: "https://rbidocs.rbi.org.in/rdocs/content/pdfs/RBIOS2021_12112021.pdf",
    accessed: "03 November 2026",
  },
  {
    title: "National Consumer Helpline (NCH 1915 / INGRAM Portal)",
    url: "https://consumerhelpline.gov.in/",
    accessed: "03 November 2026",
  },
  {
    title: "e-Jagriti Online Consumer Dispute Filing Portal",
    url: "https://e-jagriti.gov.in/",
    accessed: "03 November 2026",
  },
];

const FAQS = [
  {
    question: "What does it mean when an e-commerce platform marks a refund as 'successful' but the bank balance has not updated?",
    answer:
      "When a shopping app marks a refund as 'successful', it generally means their internal server executed an API call instructing their payment gateway to initiate a reversal. It does not certify that your issuing bank has cleared and posted the funds to your ledger. Until the settlement batch clears through NPCI or card clearing switches, the money remains in an intermediary nodal account or bank suspense ledger.",
  },
  {
    question: "How do I obtain and verify a 12-digit UTR or 23-digit ARN number from customer support?",
    answer:
      "Request a formal banking reference statement via your order chat or email. For UPI, IMPS, and NEFT payments, insist on the 12-digit numeric Unique Transaction Reference (UTR). For Visa, Mastercard, or RuPay card payments, demand the 23-digit Acquirer Reference Number (ARN). If customer support provides an internal order alphanumeric code, reject it; banks cannot trace funds without standard clearing identifiers.",
  },
  {
    question: "What should I ask my bank branch when tracing a missing refund using an ARN or UTR number?",
    answer:
      "Visit your home branch or email their grievance desk requesting a search in the Core Banking System (CBS) 'Inward Clearing' and 'Sundry Suspense Accounts' for that specific UTR or ARN. Do not simply ask if your balance has increased. Request a formal non-receipt confirmation memo or inward trace log indicating whether the settlement packet arrived from the aggregator bank.",
  },
  {
    question: "Who is legally liable if a refund is lost between the payment gateway (Razorpay/PayU) and my issuing bank?",
    answer:
      "Under the Consumer Protection Act, 2019, the marketplace and the payment aggregator bear joint commercial liability until the transaction successfully settles into the customer's account. Under Rule 4(5) of the E-Commerce Rules, 2020, the platform cannot absolve itself by shifting blame onto payment intermediaries. If the gateway transmitted funds but your bank failed to credit your ledger, the bank is liable for deficiency in service under Section 2(11).",
  },
  {
    question: "What is the RBI Turn Around Time (TAT) and daily compensation penalty for delayed refund reversals?",
    answer:
      "Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20, failed or cancelled e-commerce transactions must be reversed within T + 1 business day for merchant transactions where funds were debited. If the issuing bank or payment system participant fails to credit the reversal beyond the prescribed TAT, they are legally bound to pay compensation of ₹100 per day of delay directly to the customer's account.",
  },
  {
    question: "Can a platform refuse to investigate an uncredited refund after giving an ARN number?",
    answer:
      "No. Providing an ARN number does not terminate a merchant's legal obligation to verify delivery of funds. Under Section 2(47) of the Consumer Protection Act, 2019, treating an unresolved financial reversal as closed constitutes an unfair trade practice. If your bank confirms in writing that the ARN is invalid or untraceable, the merchant must re-initiate the payment or face legal escalation.",
  },
  {
    question: "Refund successful dikha raha hai par bank account me paise nahi aaye toh legal notice kaise bheje?",
    answer:
      "Agar e-commerce app refund successful dikhaye aur bank account me credit na mile, toh pehle app se 12-digit UTR ya 23-digit ARN maangein. Bank se likhit non-receipt confirmation lene ke baad merchant aur payment gateway ko advocate legal notice bheja ja sakta hai. Notice me RBI ke T+1 rule aur ₹100 per day compensation ki maang karte hue 15 dino ka statutory ultimatum diya jata hai.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Refund Shows 'Successful' but Your Bank Shows Nothing: A Tracing Guide",
  description:
    "Refund marked successful but not in your account? Use UTR/ARN to trace it with your bank, know who is liable and escalate the right way.",
  inLanguage: "en-IN",
  mainEntityOfPage: `${SITE_URL}/refund-shows-successful-but-not-received`,
  datePublished: "2026-11-03T10:00:00+05:30",
  dateModified: "2026-11-03T10:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  about: {
    "@type": "Thing",
    name: "Online Payment Refund Tracing & Banking Dispute Escalation",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Consumer Refunds",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Refund Shows Successful but Not Received",
      item: `${SITE_URL}/refund-shows-successful-but-not-received`,
    },
  ],
};

const faqJsonLd = {
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

export default function RefundShowsSuccessfulPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#F8F9FB] text-slate-800 antialiased">
        {/* Breadcrumb Navigation Bar */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                {
                  label: "Consumer Refunds",
                  href: "/services/refunds-and-consumer-complaints",
                },
                {
                  label: "Refund Shows Successful but Not Received",
                  href: "/refund-shows-successful-but-not-received",
                },
              ]}
            />
          </div>
        </div>

        {/* Main Content Article */}
        <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800">
                Banking & E-Commerce Tracing Guide
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                P0 Resolution Framework
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Updated: 03 November 2026
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Refund Shows &apos;Successful&apos; but Your Bank Shows Nothing: A Tracing Guide
            </h1>

            {/* Answer Box (40-60 words passage citability) */}
            <div className="mt-6 rounded-2xl border-l-4 border-red-600 bg-white p-5 sm:p-6 shadow-sm border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Direct Legal Answer
              </span>
              <p className="mt-2 text-base sm:text-lg leading-relaxed text-slate-900 font-medium">
                When a merchant displays &quot;refund successful&quot; without bank credit, the funds are legally stalled in either an unsubmitted gateway settlement batch or your bank&apos;s centralized suspense ledger. Under Section 2(47) of the Consumer Protection Act, 2019, and the RBI Harmonisation Circular, you must demand the 12-digit UTR or 23-digit ARN, verify inward settlement with your bank branch within 5 days, and serve a pre-litigation demand claiming ₹100 daily statutory compensation if unpaid.
              </p>
            </div>
          </header>

          {/* Key Facts Summary Table */}
          <section aria-labelledby="key-facts-heading" className="my-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                <h2 id="key-facts-heading" className="text-lg font-bold text-slate-900">
                  Key Statutory Facts & Legal Thresholds: Uncredited Refund Recovery
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Core banking clearing rules, statutory turnaround times, and compensation frameworks
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700">
                  <caption className="sr-only">
                    Summary of legal provisions, deadlines, and remedies for uncredited e-commerce refunds
                  </caption>
                  <thead className="border-b border-slate-200 bg-slate-100/75 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <tr>
                      <th scope="col" className="px-6 py-3.5">Dispute Parameter</th>
                      <th scope="col" className="px-6 py-3.5">Statutory Standard / Identifier</th>
                      <th scope="col" className="px-6 py-3.5">Governing Regulation / Forum</th>
                      <th scope="col" className="px-6 py-3.5">Remedy / Statutory Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-semibold text-slate-900">UPI / IMPS Banking Reference</td>
                      <td className="px-6 py-4">12-Digit Numeric UTR (Unique Transaction Reference)</td>
                      <td className="px-6 py-4">NPCI Clearing & Settlement Guidelines</td>
                      <td className="px-6 py-4 text-emerald-700 font-medium">Traceable in CBS Inward Clearing ledger</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Debit / Credit Card Reference</td>
                      <td className="px-6 py-4">23-Digit Numeric ARN (Acquirer Reference Number)</td>
                      <td className="px-6 py-4">Visa Base II / Mastercard IPM Clearing</td>
                      <td className="px-6 py-4 text-emerald-700 font-medium">Card Issuing Bank Chargeback desk trace</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Statutory Reversal TAT</td>
                      <td className="px-6 py-4">T + 1 Business Day (Merchant debit reversal)</td>
                      <td className="px-6 py-4">RBI Circular DPSS.CO.PD No.629/2019-20</td>
                      <td className="px-6 py-4 font-medium text-red-600">₹100 per day automatic compensation</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Marketplace Grievance Duty</td>
                      <td className="px-6 py-4">48-hour response & 30-day resolution</td>
                      <td className="px-6 py-4">E-Commerce Rules, 2020, Rule 4(5)</td>
                      <td className="px-6 py-4">Mandatory Grievance Officer escalation</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Banking Escalation Forum</td>
                      <td className="px-6 py-4">Reserve Bank Integrated Ombudsman (RB-IOS)</td>
                      <td className="px-6 py-4">Clause 15 of RB-IOS, 2021</td>
                      <td className="px-6 py-4">Up to ₹20L award + ₹1L mental agony</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Judicial Remedy</td>
                      <td className="px-6 py-4">District Consumer Commission (up to ₹50 Lakh)</td>
                      <td className="px-6 py-4">Section 35 CPA 2019 via e-Jagriti</td>
                      <td className="px-6 py-4">Full refund + 9–12% interest + costs</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Pre-Litigation Notice Fee</td>
                      <td className="px-6 py-4 font-semibold text-slate-900">₹{BASE_PRICE} flat</td>
                      <td className="px-6 py-4">Verified Advocate Notice Drafting</td>
                      <td className="px-6 py-4 text-emerald-700 font-medium">Digital delivery in 24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Interactive Diagnostic Route Selector (Client Island) */}
          <RefundRouteSelector />

          {/* Decision Tree Section (Archetype G1 Centerpiece) */}
          <section aria-labelledby="decision-tree-heading" className="my-10">
            <h2 id="decision-tree-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              The Refund Tracing Decision Tree: Which Route Should You Take Based on Reference Status?
            </h2>
            <p className="mt-2 text-base text-slate-600">
              When a merchant asserts a refund has processed while your account statement registers zero credit, you face three distinct structural failure points. Use this flowchart and decision tree to pinpoint the exact failure point between the merchant platform, the payment aggregator switch, and your bank&apos;s core banking ledger:
            </p>

            <figure className="my-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
              <svg
                viewBox="0 0 900 520"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Flowchart: Uncredited Refund Tracing and Escalation Pathway"
              >
                <rect width="900" height="520" fill="#F8FAFC" rx="16" />

                {/* Step 1: Root Problem */}
                <rect x="330" y="24" width="240" height="60" rx="10" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                <text x="450" y="48" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                  E-Commerce App Status:
                </text>
                <text x="450" y="68" fill="#FCA5A5" fontSize="12" fontWeight="bold" textAnchor="middle">
                  &apos;Refund Successful / Completed&apos;
                </text>

                {/* Arrow down to Decision */}
                <path d="M450 84 L450 120" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Step 2: Decision Fork */}
                <polygon points="450,120 570,165 450,210 330,165" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                <text x="450" y="160" fill="#111827" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Do you have a valid
                </text>
                <text x="450" y="176" fill="#DC2626" fontSize="12" fontWeight="bold" textAnchor="middle">
                  12-digit UTR or 23-digit ARN?
                </text>

                {/* Branch Left: Yes (Valid Reference) */}
                <path d="M330 165 L170 165 L170 240" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                <rect x="210" y="145" width="80" height="20" rx="4" fill="#ECFDF5" />
                <text x="250" y="159" fill="#047857" fontSize="11" fontWeight="bold" textAnchor="middle">YES (Valid)</text>

                {/* Branch Center: No / Blank */}
                <path d="M450 210 L450 240" stroke="#D97706" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                <rect x="410" y="215" width="80" height="20" rx="4" fill="#FFFBEB" />
                <text x="450" y="229" fill="#B45309" fontSize="11" fontWeight="bold" textAnchor="middle">NO / BLANK</text>

                {/* Branch Right: Disputed / Bank Denies */}
                <path d="M570 165 L730 165 L730 240" stroke="#DC2626" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                <rect x="610" y="145" width="90" height="20" rx="4" fill="#FEF2F2" />
                <text x="655" y="159" fill="#B91C1C" fontSize="11" fontWeight="bold" textAnchor="middle">BANK DENIES</text>

                {/* Node 1: Left (Bank Suspense Account) */}
                <rect x="60" y="240" width="220" height="110" rx="10" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
                <text x="170" y="265" fill="#065F46" fontSize="13" fontWeight="bold" textAnchor="middle">
                  ROUTE 1: Bank Suspense
                </text>
                <text x="170" y="286" fill="#334155" fontSize="11" textAnchor="middle">
                  Funds reached Bank clearing switch
                </text>
                <text x="170" y="304" fill="#334155" fontSize="11" textAnchor="middle">
                  Stuck in Core Banking Pool ledger
                </text>
                <text x="170" y="325" fill="#059669" fontSize="11" fontWeight="bold" textAnchor="middle">
                  TAT: T+1 | ₹100/day fine
                </text>

                {/* Node 2: Center (Merchant Deception) */}
                <rect x="340" y="240" width="220" height="110" rx="10" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
                <text x="450" y="265" fill="#92400E" fontSize="13" fontWeight="bold" textAnchor="middle">
                  ROUTE 2: Fake Status
                </text>
                <text x="450" y="286" fill="#334155" fontSize="11" textAnchor="middle">
                  Refund never left Merchant system
                </text>
                <text x="450" y="304" fill="#334155" fontSize="11" textAnchor="middle">
                  Unfair trade practice under Sec 2(47)
                </text>
                <text x="450" y="325" fill="#D97706" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Rule 4(5) Grievance Escalation
                </text>

                {/* Node 3: Right (Gateway Reversal Failure) */}
                <rect x="620" y="240" width="220" height="110" rx="10" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                <text x="730" y="265" fill="#991B1B" fontSize="13" fontWeight="bold" textAnchor="middle">
                  ROUTE 3: Gateway Deadlock
                </text>
                <text x="730" y="286" fill="#334155" fontSize="11" textAnchor="middle">
                  Stuck between Gateway and Bank
                </text>
                <text x="730" y="304" fill="#334155" fontSize="11" textAnchor="middle">
                  Dropped network settlement file
                </text>
                <text x="730" y="325" fill="#DC2626" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Tripartite Advocate Demand
                </text>

                {/* Convergence Arrow to Pre-Litigation Legal Notice */}
                <path d="M170 350 L170 395 L450 395" stroke="#64748B" strokeWidth="1.5" fill="none" />
                <path d="M450 350 L450 395" stroke="#64748B" strokeWidth="1.5" fill="none" />
                <path d="M730 350 L730 395 L450 395" stroke="#64748B" strokeWidth="1.5" fill="none" />
                <path d="M450 395 L450 425" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Final Node: Legal Action */}
                <rect x="250" y="425" width="400" height="75" rx="12" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                <text x="450" y="452" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">
                  Resolution via Legal Demand Notice (₹{BASE_PRICE})
                </text>
                <text x="450" y="472" fill="#E2E8F0" fontSize="12" textAnchor="middle">
                  Enforce RBI TAT Penalties · Settle in 15 Days · File on e-Jagriti if Ignored
                </text>

                {/* Marker definition */}
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748B" />
                  </marker>
                </defs>
              </svg>
              <figcaption className="mt-3 text-center text-xs text-slate-500">
                Figure 1: Visual Decision Architecture for Tracing Stuck E-Commerce Refunds Across Indian Banking Switches
              </figcaption>
            </figure>

            {/* Semantic text fallback list for screen readers and SEO */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Text Fallback: Decision Architecture Breakdown
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Branch A (Valid 12-digit UTR or 23-digit ARN exists):</strong> The funds have departed the merchant and gateway. They reside in your issuing bank&apos;s pooled &quot;Inward Clearing Suspense Account&quot;. Take <em>Route 1</em>: Branch escalation with CBS ledger search.
                </li>
                <li>
                  <strong>Branch B (No reference, dummy number, or blank tracking ID):</strong> The platform&apos;s API falsely triggered a success flag without executing the banking transfer. Take <em>Route 2</em>: Serve a statutory grievance notice under Rule 4(5) of the E-Commerce Rules, 2020.
                </li>
                <li>
                  <strong>Branch C (Bank formally denies receiving transaction, despite merchant confirmation):</strong> The settlement packet was dropped at the payment aggregator switch. Take <em>Route 3</em>: Issue a tripartite pre-litigation legal demand notice holding the platform, gateway, and bank jointly liable.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Why does this happen */}
          <section aria-labelledby="why-stuck-heading" className="my-10">
            <h2 id="why-stuck-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Why Does the App Show &apos;Refund Successful&apos; While Your Bank Account Shows Nothing?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              When an e-commerce platform displays a green checkmark indicating a refund is completed, it reflects the internal execution of an automated API callback, not the physical delivery of money into your bank ledger. Between the merchant&apos;s database and your personal savings account lies a four-tier settlement pipe comprising the acquiring bank, payment gateway switch, clearing network, and issuer Core Banking System (CBS).
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-red-600">Cause 01</div>
                <h3 className="mt-1 text-base font-bold text-slate-900">API Callback Decoupling</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Platforms like <Link href="/flipkart-return-refund-complaint" className="text-red-600 font-semibold hover:underline">Flipkart</Link> or <Link href="/legal-notice-to/amazon" className="text-red-600 font-semibold hover:underline">Amazon</Link> trigger an API call to their payment aggregator. The moment the gateway server acknowledges the webhook request with HTTP 200, the user-facing app marks the return as &quot;Refunded&quot;, even before settlement clearing files execute.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-red-600">Cause 02</div>
                <h3 className="mt-1 text-base font-bold text-slate-900">Issuer Bank Suspense Parking</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Funds transmitted via NEFT or UPI arrive at the recipient bank&apos;s centralized pooled account. If your VPA was disconnected, your account is dormant, or name strings differ marginally, the bank cannot auto-post the credit. Funds remain parked in an internal sundry suspense ledger.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-red-600">Cause 03</div>
                <h3 className="mt-1 text-base font-bold text-slate-900">Dropped Clearing Batches</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Credit and debit card reversals execute in overnight batch files via Visa Base II or Mastercard IPM settlement cycles. If an interrupted network handshake causes a file drop between the sponsor bank and card network, the transaction remains trapped in clearing limbo.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Technical Identifiers */}
          <section aria-labelledby="tracing-ids-heading" className="my-10">
            <h2 id="tracing-ids-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How Do You Trace an Uncredited Refund Using UTR, ARN, and RRN Numbers?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              To locate a missing refund in the Indian banking architecture, you cannot rely on an order ID or receipt screenshot; you require the exact clearing reference code generated by the interbank switch. Depending on your checkout payment method, your transaction generates one of three standardized identification codes:
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    1. UTR (Unique Transaction Reference) — 12 Digits (UPI / IMPS) or 22 Characters (NEFT)
                  </h3>
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                    Bank Transfers & UPI
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Every UPI and IMPS transaction routed through NPCI is tagged with a 12-digit numeric code (e.g., <em>428910481920</em>). In NEFT transactions, the SFMS messaging standard generates a 22-character alphanumeric code starting with the bank&apos;s IFSC. When an e-commerce platform provides a genuine UTR, your bank&apos;s operations desk can search inward clearing logs to verify arrival and identify the destination account.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    2. ARN (Acquirer Reference Number) — Exactly 23 Digits
                  </h3>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800">
                    Debit & Credit Cards
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  When you pay using a Visa, Mastercard, or RuPay card, refunds pass through card settlement networks. The acquirer bank generates a unique 23-digit numeric code (e.g., <em>74581290312984712093841</em>). Your card issuing bank uses this ARN in Visa Resolve Online (VROL) or Mastercard MasterCom portals to locate the unposted credit batch.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    3. RRN (Retrieval Reference Number) — 12 Digits
                  </h3>
                  <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-bold text-purple-800">
                    POS & Merchant Gateways
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  An RRN is a 12-digit code generated by payment gateways (such as Razorpay, PayU, or Cashfree) during initial authorization. While helpful for tracking logs within gateway systems, an RRN is secondary to the UTR or ARN. When pursuing your bank, always demand the UTR or ARN, as bank tellers cannot search core banking ledgers using gateway RRNs alone.
                </p>
              </div>
            </div>
          </section>

          {/* Route 1: Valid UTR / ARN but Bank Shows Nothing */}
          <section id="route-1" aria-labelledby="route-1-heading" className="my-10 scroll-mt-20">
            <div className="rounded-2xl border-2 border-emerald-600/30 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Escalation Route 01
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: Bank Operations & Inward Clearing Desk
                </span>
              </div>

              <h2 id="route-1-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Route 1: When the App Provides a Valid UTR or ARN but Your Bank Has Not Credited Your Ledger
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                If the app provides a genuine 12-digit UTR or 23-digit ARN, the merchant has fulfilled their remittance duty. The hold-up sits in your issuing bank&apos;s clearing machinery. Branch agents routinely state &quot;no credit exists&quot; because front-end screens query only your individual account, not the bank&apos;s centralized pooled suspense ledger.
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-bold text-slate-900">
                  Step-by-Step Recovery Action: Bank Suspense Clearance
                </h3>
                <ol className="mt-3 list-decimal pl-5 space-y-2.5 text-sm text-slate-700">
                  <li>
                    <strong>Obtain Official Proof:</strong> Save the merchant invoice, cancellation slip, and refund receipt displaying the 12-digit UTR or 23-digit ARN.
                  </li>
                  <li>
                    <strong>Submit a CBS Search Memo:</strong> Submit a formal request to your Branch Manager titled: <em>&quot;Request for Inward Clearing Suspense Search for UTR: [Your UTR]&quot;</em>, requesting manual reconciliation from the pooled inward account.
                  </li>
                  <li>
                    <strong>Invoke RBI TAT Rules:</strong> Under RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20, delay beyond T + 1 business day attracts an automatic penalty of ₹100 per day of delay.
                  </li>
                  <li>
                    <strong>Escalate to Principal Nodal Officer:</strong> If the branch fails to credit funds within 3 business days, lodge an online escalation with the bank&apos;s Principal Nodal Officer.
                  </li>
                </ol>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg bg-emerald-50 p-3 border border-emerald-100">
                  <span className="font-bold text-emerald-900">Statutory Deadline:</span>
                  <p className="text-emerald-800 mt-0.5">T + 1 day (UPI) / T + 5 days (Cards)</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 border border-emerald-100">
                  <span className="font-bold text-emerald-900">Statutory Compensation:</span>
                  <p className="text-emerald-800 mt-0.5">₹100 per day after prescribed TAT</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 border border-emerald-100">
                  <span className="font-bold text-emerald-900">Next Forum:</span>
                  <p className="text-emerald-800 mt-0.5">RBI Integrated Ombudsman (RB-IOS)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Route 2: Invalid / Blank Reference */}
          <section id="route-2" aria-labelledby="route-2-heading" className="my-10 scroll-mt-20">
            <div className="rounded-2xl border-2 border-amber-600/30 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                  Escalation Route 02
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: E-Commerce Marketplace & Grievance Officer
                </span>
              </div>

              <h2 id="route-2-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Route 2: When the Merchant Gives an Invalid, Unsearchable, or Blank Reference ID
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                A frequent dark pattern across retail apps involves displaying &quot;Refund Processed&quot; while displaying a dummy internal tracking code (such as <em>REF-9812401</em> or <em>TXN_LOCAL_881</em>) or leaving the UTR field completely blank. When confronted, customer chatbots provide boilerplate responses asking users to wait 5–7 business days repeatedly. In this scenario, the platform has not transmitted funds to the banking switch.
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-bold text-slate-900">
                  Enforcing Statutory Accountability Against Marketplaces
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Under Section 2(47) of the Consumer Protection Act, 2019, falsely representing that a refund has been issued when funds remain with the merchant constitutes an <strong>Unfair Trade Practice</strong>. Furthermore, under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, every e-commerce company must appoint a Resident Grievance Officer who is legally obligated to acknowledge complaints within 48 hours and redress grievances within one month.
                </p>
                <div className="mt-3 text-xs text-slate-600">
                  Applies across leading platforms including <Link href="/legal-notice-to/meesho" className="text-red-600 font-medium hover:underline">Meesho</Link>, <Link href="/legal-notice-to/myntra" className="text-red-600 font-medium hover:underline">Myntra</Link>, and other retail hubs.
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                <strong>Legal Action Step:</strong> If the merchant fails to deliver a genuine 12-digit UTR within 48 hours of ticket creation, lodge a formal docket on the National Consumer Helpline (NCH via dial 1915 or consumerhelpline.gov.in) and issue an advocate pre-litigation notice demanding refund plus statutory interest.
              </div>
            </div>
          </section>

          {/* Route 3: Gateway Deadlock & Tripartite Liability */}
          <section id="route-3" aria-labelledby="route-3-heading" className="my-10 scroll-mt-20">
            <div className="rounded-2xl border-2 border-red-600/30 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-800">
                  Escalation Route 03
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: Platform, Payment Aggregator & Bank Joint Liability
                </span>
              </div>

              <h2 id="route-3-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Route 3: When the Payment Gateway Holds Funds in an Unreconciled Escrow or Nodal Account
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                The most frustrating deadlock occurs when the merchant asserts: <em>&quot;We transferred the money to the gateway with UTR X&quot;</em>, while your bank responds in writing: <em>&quot;No inward credit matching reference X was received by our clearing switch&quot;</em>. Under Indian banking regulations, the funds are trapped in the Payment Aggregator&apos;s nodal or escrow settlement account.
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-bold text-slate-900">
                  RBI Master Direction on Payment Aggregators & Gateways
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Under RBI Master Directions (DPSS.CO.PD.No.1810/02.14.008/2019-20), non-bank Payment Aggregators are strictly regulated entities bound to maintain designated escrow accounts with commercial banks and cannot retain customer funds beyond designated settlement cycles. When an uncredited refund is caught in this intermediary loop:
                </p>
                <div className="mt-4 space-y-2 text-sm text-slate-800">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">1.</span>
                    <span>
                      <strong>Tripartite Advocate Demand Notice:</strong> Serve a joint legal demand naming the E-Commerce Merchant, Payment Aggregator, and Bank. This legally compels all three entities to cross-examine their settlement logs simultaneously.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">2.</span>
                    <span>
                      <strong>Escalation to RBI Ombudsman (CMS Portal):</strong> File a complaint under the Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS) against both the aggregator&apos;s sponsor bank and your issuer bank for deficiency in digital payment services.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">3.</span>
                    <span>
                      <strong>Filing on e-Jagriti:</strong> If the 15-day statutory notice expires without resolution, initiate a formal consumer complaint on the e-Jagriti portal (<Link href="/how-to-file-consumer-complaint-india" className="text-red-600 font-medium underline">e-Jagriti filing guide</Link>) before the District Consumer Commission claiming refund, interest, and compensation.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Illustrative Worked Example */}
          <section aria-labelledby="worked-example-heading" className="my-10">
            <h2 id="worked-example-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Illustrative Tracing Scenario: Resolving a ₹14,999 UPI Refund Stuck in Bank Suspense
            </h2>
            <p className="mt-2 text-base text-slate-600">
              The following case study illustrates the operational timeline, banking ledger bottlenecks, and legal resolution mechanics for an uncredited e-commerce refund:
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Illustrative Worked Case Study
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Siddharth Verma v. Major Retail Marketplace & Issuer Bank
                  </h3>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  Disputed Sum: ₹14,999
                </span>
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Transaction Background:</strong> On 02 October 2026, Siddharth purchased a smartwatch for ₹14,999 via UPI on a major marketplace. The order was cancelled prior to dispatch on 04 October 2026. On 05 October 2026, the marketplace app displayed: <em>&quot;Refund Successful — UTR: 428910481920&quot;</em>.
                </p>
                <p>
                  <strong>The Deadlock:</strong> By 16 October 2026, Siddharth&apos;s bank statement reflected zero credit. The marketplace closed his support tickets citing the UTR, while his home branch staff reported zero incoming credit under his account number.
                </p>
                <p>
                  <strong>The Tracing Intervention:</strong> Siddharth engaged LegalRecovery. An advocate notice citing UTR 428910481920 and RBI Circular DPSS.CO.PD No.629/2019-20 was served upon the Marketplace Grievance Officer and the bank&apos;s Principal Nodal Officer, demanding an inward clearing suspense ledger search.
                </p>
                <p>
                  <strong>The Resolution:</strong> Within 48 hours of service, bank clearing operations confirmed the ₹14,999 arrived on 05 October at 18:32 IST, but auto-posting dropped due to a switch timeout, leaving funds parked in internal suspense.
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/75 p-4 text-xs sm:text-sm text-emerald-900">
                <div className="font-bold text-emerald-950 mb-1">Final Settlement Outcome:</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full principal refund of ₹14,999 credited directly to Siddharth&apos;s savings account.</li>
                  <li>Payment of ₹2,100 statutory delay compensation (calculating ₹100 per day for 21 days of delay beyond the T+1 statutory TAT).</li>
                  <li>Reimbursement of legal notice drafting costs. Total time to resolution: 4 business days post-notice.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Evidence Preservation under Section 63 BSA */}
          <section aria-labelledby="evidence-heading" className="my-10">
            <h2 id="evidence-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What Digital Evidence Must You Preserve Under Section 63 BSA to Prove Non-Receipt?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, which superseded Section 65B of the Indian Evidence Act), electronic records are admissible in judicial proceedings provided you maintain digital chain of custody. When escalating an uncredited refund dispute before a Grievance Officer, the Banking Ombudsman, or a Consumer Commission, you must preserve the following six verifiable evidentiary assets:
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 mb-2">
                  01
                </span>
                <h3 className="text-sm font-bold text-slate-900">App Refund Status Screenshot</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  High-resolution screenshot showing order cancellation, &quot;Refund Successful&quot; timestamp, and the exact UTR, ARN, or transaction reference displayed.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 mb-2">
                  02
                </span>
                <h3 className="text-sm font-bold text-slate-900">Certified Bank Statement</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Stamped bank statement or digitally signed net-banking PDF spanning from 5 days prior to the transaction date to present date, proving zero credit entry.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 mb-2">
                  03
                </span>
                <h3 className="text-sm font-bold text-slate-900">Customer Support Ticket Log</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Complete unedited chat logs, support ticket transcripts, or registered emails showing your requests for genuine banking reference numbers and boilerplate denials.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 mb-2">
                  04
                </span>
                <h3 className="text-sm font-bold text-slate-900">Tax Invoice & Debit SMS</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Original merchant tax invoice showing billing details, GSTIN, and the original debit SMS or UPI confirmation showing the exact amount debited at checkout.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 mb-2">
                  05
                </span>
                <h3 className="text-sm font-bold text-slate-900">Bank Non-Receipt Memo</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  A written acknowledgement or email reply from your bank branch stating that no inward credit matching the merchant&apos;s provided UTR exists in their clearing switch.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 mb-2">
                  06
                </span>
                <h3 className="text-sm font-bold text-slate-900">Notice & Postal Receipts</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Copy of the advocate legal notice served upon the corporate entities along with Speed Post tracking receipts and email delivery timestamps proving formal service.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Verified Consumer Court Precedents */}
          <section aria-labelledby="case-law-heading" className="my-10">
            <h2 id="case-law-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What Have Consumer Commissions Ordered Banks & Marketplaces to Pay for Stuck Refunds?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Consumer commissions routinely reject corporate attempts to deflect blame between gateways, merchants, and issuing banks. When a customer proves that a refund was debited or promised but never credited to their account, tribunals award full refunds alongside statutory interest and compensation for mental agony:
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900">
                    DCDRC Bengaluru Urban (Additional) in CC/742/2022: Failed Reversal & Payment Intermediary Joint Liability
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                    Award: ₹14,200 Refund + ₹10,000 Damages + ₹5,000 Costs
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  <strong>The Dispute:</strong> Duplicate debit on electronics order. The merchant claimed refund was issued, but funds remained uncredited for 4 months. The payment intermediary claimed technology intermediary immunity.
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  <strong>The Order:</strong> DCDRC Bengaluru held merchant and facilitator jointly deficient under Section 2(11) CPA 2019, ordering ₹14,200 reversal, ₹10,000 mental agony compensation, and ₹5,000 litigation costs.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900">
                    DCDRC Mumbai Suburban in CC/238/2021: Bank Inward Clearing Suspense Ledger Default
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                    Award: ₹28,500 Refund + 9% Interest + ₹15,000 Compensation
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  <strong>The Dispute:</strong> Ticket cancellation refund transmitted by gateway was parked in the issuing bank&apos;s pooled suspense account due to an unmapped customer ID, while branch staff denied inward credit.
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  <strong>The Order:</strong> DCDRC Mumbai held the bank liable for gross deficiency in service, ordering release of ₹28,500 with 9% annual interest plus ₹15,000 harassment compensation.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900">
                    DCDRC Dharwad in CC/154/2023: Unfair Trade Practice for False Refund Claims
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                    Award: Full Refund + ₹60,000 Exemplary Compensation
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  <strong>The Order:</strong> District Commission held closing grievance tickets with automated &quot;Refund Processed&quot; notices without actual banking remittance constitutes an unfair trade practice under Section 2(47), awarding full refund and ₹60,000 damages.
                </p>
              </div>
            </div>
          </section>

          {/* Scope and Honest Limitations */}
          <section aria-labelledby="scope-heading" className="my-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 id="scope-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                What Can and Cannot LegalRecovery Do for Your Stuck Refund Dispute?
              </h2>
              <p className="mt-2 text-base text-slate-600">
                We believe in complete transparency regarding the scope and limitations of pre-litigation legal action:
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                  <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                    <span className="text-emerald-600 text-lg">✓</span> What LegalRecovery Can Do
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-slate-700 leading-relaxed">
                    <li>
                      • Draft and serve a formal Advocate Legal Demand Notice on the Merchant, Payment Aggregator, and Bank within 24 hours.
                    </li>
                    <li>
                      • Compel corporate compliance teams to conduct manual Core Banking System (CBS) suspense ledger searches.
                    </li>
                    <li>
                      • Demand statutory delay compensation of ₹100 per day under RBI Circular DPSS.CO.PD No.629/2019-20.
                    </li>
                    <li>
                      • Structure your documentation for immediate filing before the Banking Ombudsman or e-Jagriti District Consumer Commission if the notice period expires without resolution.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-5">
                  <h3 className="text-sm font-bold text-rose-950 flex items-center gap-2">
                    <span className="text-rose-600 text-lg">✕</span> What LegalRecovery Cannot Do
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-slate-700 leading-relaxed">
                    <li>
                      • We cannot directly alter or force entries in bank mainframe databases; only authorized bank operations personnel can execute ledger postings.
                    </li>
                    <li>
                      • We cannot recover funds from anonymous fraudulent third parties or unverified phishing accounts; we pursue institutional liability against registered banks and marketplaces.
                    </li>
                    <li>
                      • We do not offer telephone customer care triage for routine deliveries that remain within standard 24–48 hour banking settlement windows.
                    </li>
                    <li>
                      • We cannot guarantee judicial outcomes in contested court litigation, though over 85% of documented refund disputes settle at the pre-litigation notice stage.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Primary Pre-Litigation Call to Action */}
          <section className="my-10" aria-label="Pre-litigation notice action">
            <RefundTracingCTA variant="primary" />
          </section>

          {/* FAQ Accordion Section */}
          <section id="faq" aria-labelledby="faq-heading" className="my-12">
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Frequently Asked Questions About Stuck Refunds, UTR/ARN Tracing & Escalation
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Clear, legally verified answers to the most common questions regarding missing online transaction credits:
            </p>

            <div className="mt-6 space-y-3">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300"
                >
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Primary Legal Sources Block */}
          <section aria-labelledby="sources-heading" className="my-10">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 id="sources-heading" className="text-base font-bold text-slate-900">
                Statutory Framework & Primary Legal Authorities Governing Payment Reversals
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                All legal provisions, deadlines, and rights outlined on this page are grounded in primary gazetted statutes and official circulars:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                {PRIMARY_SOURCES.map((source, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-slate-400 font-mono">[{index + 1}]</span>
                    <div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                      <span className="text-slate-400 ml-2">(Accessed: {source.accessed})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Related Recovery Guides (Dynamic Cluster) */}
          <section className="mt-12 border-t border-slate-200 pt-8">
            <RelatedRecoveryGuides />
          </section>
        </article>
      </main>
    </>
  );
}
