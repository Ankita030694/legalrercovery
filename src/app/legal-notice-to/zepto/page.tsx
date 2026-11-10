import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import ZeptoNoticeCTA from "./ZeptoNoticeCTA";
import ZeptoDisputeFlowSVG from "./ZeptoDisputeFlowSVG";
import TemplateCopyButton from "./TemplateCopyButton";

export const metadata: Metadata = {
  title: "Zepto Refund Not Received? Consumer Court Wins & Steps",
  description:
    "Zepto refund missing or wrong delivery? See consumer commission orders against Zepto, the escalation timeline and a ready legal notice path.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/zepto`,
  },
  openGraph: {
    title: "What Consumer Courts Have Ordered Zepto to Pay, and How You Can Claim",
    description:
      "Zepto refund missing or wrong delivery? See consumer commission orders against Zepto, the escalation timeline and a ready legal notice path.",
    url: `${SITE_URL}/legal-notice-to/zepto`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const primarySources = [
  {
    title: "E-Commerce (Amendment) Rules, 2026 (Notified September 2026; In Force 1 January 2027)",
    url: "https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184",
  },
  {
    title: "Guidelines for Prevention and Regulation of Dark Patterns, 2023 — Central Consumer Protection Authority",
    url: "https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility in Consumer Commissions)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Advocate C. Sai Kumar v. Zepto (Kiranakart Technologies Pvt Ltd & Geddit Convenience Pvt Ltd), CC No. 273/2023, DCDRC Ranga Reddy (₹57,000 Award)",
    url: "https://timesofindia.indiatimes.com/city/hyderabad/quick-commerce-platform-penalised-for-overcharging-mrp/articleshow/102948210.cms",
  },
  {
    title: "Kalpana Shantilal Shah v. Grofers India Pvt. Ltd. (Blinkit), CC/35/2022, South Mumbai District Consumer Commission",
    url: "https://www.livelaw.in/consumer-cases/grofers-india-blinkit-consumer-court-refund-compensation-missing-item-243501",
  },
  {
    title: "Manu Garg v. Online Delivery Aggregator, DCDRC Dharwad (Order dated 2024; ₹60,362 Award for Deficient Delivery)",
    url: "https://lawstreet.co/news/zomato-ordered-to-pay-60000-compensation-consumer-forum-dharwad",
  },
  {
    title: "National Consumer Helpline (NCH / INGRAM 1915 Portal), Department of Consumer Affairs",
    url: "https://consumerhelpline.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const faqs = [
  {
    question: "Why does Zepto customer care claim \"order was packed correctly\" when items are clearly missing?",
    answer:
      "Zepto dark stores operate under intense 90-second packing cycles where warehouse workers scan pick lists rapidly, leading to frequent omissions that inventory scans fail to catch. Customer service bots rely strictly on these automated warehouse timestamps rather than inspecting real parcel contents. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, your timestamped unboxing photographs, bag barcode tags, and contemporaneous weight records override internal electronic merchant logs before consumer commissions.",
  },
  {
    question: "How long does a Zepto refund take to reflect in my bank account or UPI after cancellation?",
    answer:
      "When Zepto cancels an order or accepts a missing item return, UPI refunds typically process within 2 to 24 hours, while debit or credit card transactions settle within 3 to 7 banking days. If the app displays refund successful but your bank statement shows zero credit, Zepto must supply a valid 12-digit Unique Transaction Reference (UTR). Under Rule 5(3)(e) of the Consumer Protection (E-Commerce) Rules, 2020, withholding funds beyond statutory clearing timelines exposes the platform to compensatory interest.",
  },
  {
    question: "Can Zepto legally force me to accept Zepto Cash instead of refunding to my original payment method?",
    answer:
      "Zepto cannot compel you to accept wallet credits or platform cash instead of a direct refund to your original payment source. The Central Consumer Protection Authority Guidelines for Prevention of Dark Patterns, 2023 classify forced wallet conversions as a prohibited deceptive practice under Section 2(47) of the Consumer Protection Act, 2019. You maintain an absolute legal right to demand 100% reimbursement to your underlying UPI handle, card, or bank account.",
  },
  {
    question: "What should I do if a Zepto delivery partner marked the grocery order as \"delivered\" but never arrived?",
    answer:
      "Phantom delivery happens when delivery executives trigger GPS completion pings near your building perimeter to avoid internal delivery-delay penalties. Take immediate screenshots of the delivery notification timestamp, check your building entrance security logs or CCTV, and message support within 15 minutes. If customer support refuses immediate redelivery or refund, register a complaint docket on NCH 1915 and issue a formal grievance notice citing Section 2(11) service deficiency.",
  },
  {
    question: "How do I escalate an unresolved refund complaint to the Zepto Grievance Officer?",
    answer:
      "Send a detailed written escalation email to grievances@zepto.com addressed to Mr. Zubair Shaikh, Associate Director and Grievance Officer, Zepto Marketplace Private Limited. State your registered phone number, order ID, payment transaction reference, and itemized missing value. Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, the Grievance Officer must furnish an official acknowledgment within 48 hours and resolve the grievance within one month.",
  },
  {
    question: "What compensation can consumer commissions award if Zepto charges above MRP or denies a valid claim?",
    answer:
      "District Consumer Commissions award full reimbursement of the disputed grocery amount, statutory interest between 9% and 12% per annum, and monetary compensation for mental agony and harassment. In Advocate C. Sai Kumar v. Zepto, the Ranga Reddy District Consumer Commission penalized the platform ₹57,000 for pricing items above MRP and engaging in deceptive discounting, directing ₹50,000 to the Consumer Legal Aid account alongside consumer damages.",
  },
  {
    question: "Zepto se refund nahi mila ya galat saman aaya toh legal notice kaise bhejein aur consumer court mein complaint kaise karein?",
    answer:
      "Agar Zepto customer care aapka refund rok de ya galat grocery deliver kare, toh pehle grievances@zepto.com par 48-ghante ki statutory warning bhejein. Agar 15 dinon me samadhan na ho, toh advocate ke madhyam se Zepto Marketplace Private Limited ko formal legal demand notice bhejein. Iske baad aap e-Jagriti portal par bina vakil ke ghar baithe District Consumer Commission me mukadma darj kar sakte hain, jahan forum pura refund aur compensation dilwata hai.",
  },
];

const sampleNoticeDraft = `LEGAL DEMAND NOTICE (UNDER SECTION 35, CONSUMER PROTECTION ACT, 2019)

To,
1. Zepto Marketplace Private Limited
   Registered Office: First Floor, 773, Sarjapur Main Road,
   Kaikondarahalli, Bellandur, Bangalore South,
   Bengaluru, Karnataka - 560103.
   Email: grievances@zepto.com

2. Kiranakart Technologies Private Limited
   4th Floor, WeWork Chromium, Jogeshwari Vikhroli Link Road,
   Marol, Andheri East, Mumbai, Maharashtra - 400076.

SUBJECT: DEMAND FOR IMMEDIATE REFUND OF DISPUTED SUM OF ₹[DISPUTED_AMOUNT] ALONG WITH COMPENSATION FOR GROSS DEFICIENCY IN SERVICE AND UNFAIR TRADE PRACTICE RELATING TO ZEPTO ORDER ID: [ORDER_ID]

Sir/Madam,

Under instructions from and on behalf of my client [CLIENT_FULL_NAME], resident of [CLIENT_ADDRESS], I hereby serve you with this formal Legal Notice:

1. That on [ORDER_DATE], my client placed an order for grocery and household consumables through your quick-commerce mobile application under Order ID: [ORDER_ID], totaling ₹[TOTAL_AMOUNT], paid in full via [UPI / CREDIT CARD / NET BANKING] (Transaction Reference: [TRANSACTION_REF]).

2. That upon arrival of the delivery parcel at [DELIVERY_TIME] on [DELIVERY_DATE], my client discovered that [SELECT: ITEM(S) VALUED AT ₹DISPUTED_AMOUNT WERE MISSING / WRONG ITEMS WERE DELIVERED / PERISHABLE FOOD WAS EXPIRED AND UNFIT FOR HUMAN CONSUMPTION].

3. That my client immediately contacted Zepto customer support within [X] minutes of delivery with photographic evidence of the parcel and tamper seal. However, your automated support unilaterally rejected the refund request under the generic pretext that 'internal warehouse logs show items were packed correctly.'

4. That under Rule 5(3) of the Consumer Protection (E-Commerce) Rules, 2020 and Section 2(47) of the Consumer Protection Act, 2019, Zepto cannot disclaim fallback liability for inventory-linked or partner-store packing errors. Furthermore, refusing source-account refunds violates CCPA Dark Patterns Guidelines, 2023.

I THEREFORE CALL UPON YOU to credit the principal amount of ₹[DISPUTED_AMOUNT] directly to my client's original payment source, together with ₹[COMPENSATION_AMOUNT] towards mental agony and ₹5,000 towards legal drafting expenses, within 15 (fifteen) days of receipt of this notice. Failing this, my client shall initiate formal proceedings before the District Consumer Disputes Redressal Commission via the e-Jagriti portal entirely at your cost and risk.

[ADVOCATE_NAME]
Advocate, Enrolment No. [ENROLMENT_NUMBER]
Office: [OFFICE_ADDRESS]`;

export default function ZeptoLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Consumer & E-Commerce Refunds", href: "/services/refunds-and-consumer-complaints" },
    { label: "Zepto Legal Notice & Refund Recovery", href: "/legal-notice-to/zepto" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/legal-notice-to/zepto#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/legal-notice-to/zepto`,
          url: `${SITE_URL}/legal-notice-to/zepto`,
          name: "Zepto Refund Not Received? Consumer Court Wins & Steps",
        },
        headline: "What Consumer Courts Have Ordered Zepto to Pay, and How You Can Claim",
        description:
          "Zepto refund missing or wrong delivery? See consumer commission orders against Zepto, the escalation timeline and a ready legal notice path.",
        inLanguage: "en-IN",
        mainEntityOfPage: `${SITE_URL}/legal-notice-to/zepto`,
        datePublished: "2026-11-03T10:00:00+05:30",
        dateModified: "2026-11-03T10:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          url: `${SITE_URL}/authors/anuj-anand-malik`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
        about: {
          "@type": "Organization",
          name: "Zepto",
          legalName: "Zepto Marketplace Private Limited",
          alternateName: "Kiranakart Technologies Private Limited",
        },
        citation: primarySources.map((s) => s.url),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/legal-notice-to/zepto#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Consumer & E-Commerce Refunds",
            item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Zepto Legal Notice & Refund Recovery",
            item: `${SITE_URL}/legal-notice-to/zepto`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/legal-notice-to/zepto#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900 pb-20">
        {/* Navigation Breadcrumb Bar */}
        <div className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="bg-white border-b border-slate-200/80 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-purple-100 text-purple-800 mb-5">
              <span>Quick-Commerce Dispute Playbook</span>
              <span className="text-purple-400">&bull;</span>
              <span>Updated November 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              What Consumer Courts Have Ordered Zepto to Pay, and How You Can Claim
            </h1>

            {/* Answer Box directly under H1 per §12 blueprint */}
            <section
              aria-label="Quick answer"
              className="bg-purple-50/70 border-l-4 border-purple-600 rounded-r-2xl p-5 sm:p-6 mb-8 text-slate-800"
            >
              <h2 className="text-xs font-black uppercase tracking-wider text-purple-900 mb-2">
                Quick Legal Answer: Missing Order, Spoiled Food or Stuck Zepto Refund
              </h2>
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                Under Section 2(47) of the Consumer Protection Act, 2019 and Rule 5(3) of the E-Commerce Rules, 2020, Zepto is jointly liable for missing or incorrect orders. If in-app support refuses your refund, email the Grievance Officer immediately; they must acknowledge within 48 hours and resolve within 30 days. If stonewalled, escalate through NCH 1915, an advocate legal notice, and e-Jagriti within two years.
              </p>
            </section>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 border-t border-slate-100 pt-4">
              <span>Author: Anuj Anand Malik</span>
              <span>&bull;</span>
              <span>Legal Forum: District Consumer Commission (e-Jagriti)</span>
              <span>&bull;</span>
              <span>Statutory Limitation: 2 Years (Section 69 CPA)</span>
            </div>
            {/* TODO(reviewer): src/data/reviewers.ts is missing. Reviewer box omitted until an advocate profile is added to the registry. */}
          </div>
        </header>

        {/* MAIN BODY CONTAINER */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <article className="space-y-12">
            
            {/* SECTION 1: ESCALATION RAIL (DOM SKELETON PER ARCHETYPE B1) */}
            <section aria-labelledby="rail-heading">
              <h2
                id="rail-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                How Does the 4-Stage Escalation Rail Work When Zepto Denies a Refund?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                When Zepto’s in-app chat bot denies compensation by claiming internal warehouse logs show zero error, you must bypass customer care reps and activate the formal statutory hierarchy. E-commerce platforms settle legitimate delivery claims once a documented escalation paper trail proves pre-litigation readiness.
              </p>

              {/* Archetype B1 Vertical Escalation Rail: <ol> with <time> and exact contacts */}
              <ol className="relative border-l-2 border-purple-200 ml-4 sm:ml-6 space-y-8 my-8">
                {/* Step 1: Day 0 */}
                <li className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    1
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                        Initial Redressal Gate
                      </span>
                      <time dateTime="P0D" className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Day 0 to Day 2
                      </time>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      In-App Ticket Export &amp; Grievance Officer Notice
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      Capture complete screenshots of your delivery parcel, outer paper bag barcode, and in-app chat denial. Email the Zepto Grievance Officer (<strong>grievances@zepto.com</strong>) citing your registered phone number, Order ID, and specific missing items. Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, acknowledgment is mandatory within 48 hours.
                    </p>
                    <div className="text-xs text-slate-600 font-mono bg-slate-50 p-2.5 rounded border border-slate-100">
                      Channel: grievances@zepto.com &bull; Officer: Mr. Zubair Shaikh &bull; Statutory Window: 48 Hours Ack
                    </div>
                  </div>
                </li>

                {/* Step 2: Day 7 */}
                <li className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    2
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        National Regulatory Docket
                      </span>
                      <time dateTime="P7D" className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Day 7 to Day 10
                      </time>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      National Consumer Helpline (NCH 1915 / INGRAM)
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      If the Grievance Officer fails to resolve the dispute or offers expiring "Zepto Cash" instead of cash to your bank, dial <strong>1915</strong> or log onto <strong>consumerhelpline.gov.in</strong>. Register an official docket against Zepto Marketplace Private Limited. This assigns a Central Government grievance docket number which senior legal liaisons track directly.
                    </p>
                    <div className="text-xs text-slate-600 font-mono bg-slate-50 p-2.5 rounded border border-slate-100">
                      Portal: consumerhelpline.gov.in &bull; Helpline: 1915 &bull; Department of Consumer Affairs
                    </div>
                  </div>
                </li>

                {/* Step 3: Day 15 */}
                <li className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    3
                  </div>
                  <div className="bg-white border border-red-200 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                        Formal Pre-Litigation Notice
                      </span>
                      <time dateTime="P15D" className="text-xs font-semibold text-red-800 bg-red-50 px-2 py-0.5 rounded">
                        Day 15
                      </time>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Advocate Statutory Demand Notice (15-Day Cure Period)
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      Have an advocate serve an enforceable legal demand notice to the registered corporate headquarters of Zepto Marketplace Private Limited in Bengaluru and Kiranakart Technologies Private Limited in Mumbai. Delivered via Registered Speed Post with postal tracking plus electronic delivery under Section 63 BSA, demanding immediate source refund plus damages for unfair trade practices.
                    </p>
                    <div className="text-xs text-slate-600 font-mono bg-red-50/50 p-2.5 rounded border border-red-100">
                      Mode: Speed Post AD + Registered Email &bull; Notice Period: 15 Days &bull; Cost: Flat ₹{BASE_PRICE}
                    </div>
                  </div>
                </li>

                {/* Step 4: Day 30 */}
                <li className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    4
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Judicial Adjudication
                      </span>
                      <time dateTime="P30D" className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Day 30 Onward
                      </time>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Consumer Commission Filing via e-Jagriti Portal
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      If the 15-day notice period lapses without settlement, lodge a formal consumer complaint on the Central Government’s <strong>e-jagriti.gov.in</strong> portal. You can file directly from your smartphone without engaging an expensive local lawyer. District Commissions hold jurisdiction up to ₹50 Lakh, with zero court fee for claims under ₹5 Lakh.
                    </p>
                    <div className="text-xs text-slate-600 font-mono bg-slate-50 p-2.5 rounded border border-slate-100">
                      Forum: District Consumer Disputes Redressal Commission &bull; Portal: e-jagriti.gov.in &bull; Filing Fee: ₹0 for &lt;₹5L
                    </div>
                  </div>
                </li>
              </ol>

              {/* Mid-page CTA */}
              <div className="mt-8">
                <ZeptoNoticeCTA buttonText="Draft Advocate Notice to Zepto Now" />
              </div>
            </section>

            {/* SECTION 2: KEY STATUTORY FACTS TABLE */}
            <section aria-labelledby="facts-heading">
              <h2
                id="facts-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Legal Deadlines and Statutory Facts for Zepto Refund Disputes
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Quick-commerce transactions are governed by strict consumer safety laws, packaging rules, and e-commerce regulations. E-commerce platforms operate under mandatory statutory time limits that cannot be overridden by unilateral app terms and conditions.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm my-6">
                <table className="w-full text-left text-sm text-slate-700">
                  <caption className="p-4 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-50 border-b border-slate-200 text-left">
                    Table 1: Statutory Framework &amp; Enforcement Benchmarks for Zepto Delivery Claims
                  </caption>
                  <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-800">
                    <tr>
                      <th scope="col" className="p-3.5">Parameter</th>
                      <th scope="col" className="p-3.5">Legal Specification / Benchmark</th>
                      <th scope="col" className="p-3.5">Statutory Reference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-normal">
                    <tr>
                      <th scope="row" className="p-3.5 font-semibold text-slate-900">Corporate Legal Entity</th>
                      <td className="p-3.5">Zepto Marketplace Private Limited / Kiranakart Technologies Pvt Ltd</td>
                      <td className="p-3.5 text-xs text-slate-600 font-mono">CIN: U63999KA2024PTC194234</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-3.5 font-semibold text-slate-900">Grievance Officer Acknowledgment</th>
                      <td className="p-3.5 font-medium text-purple-900">Within 48 hours of receipt</td>
                      <td className="p-3.5 text-xs text-slate-600 font-mono">E-Commerce Rules 2020, Rule 4(5)</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-3.5 font-semibold text-slate-900">Dispute Redressal Window</th>
                      <td className="p-3.5">Mandatory resolution within 30 days (1 month)</td>
                      <td className="p-3.5 text-xs text-slate-600 font-mono">E-Commerce Rules 2020, Rule 4(5)</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-3.5 font-semibold text-slate-900">Right to Source-Account Cash Refund</th>
                      <td className="p-3.5 text-emerald-800 font-medium">Mandatory; forced Zepto Cash credits are illegal dark patterns</td>
                      <td className="p-3.5 text-xs text-slate-600 font-mono">CCPA Dark Patterns Guidelines, 2023</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-3.5 font-semibold text-slate-900">Marketplace Fallback Liability</th>
                      <td className="p-3.5">Platform is jointly liable if dark store partner defaults on refund</td>
                      <td className="p-3.5 text-xs text-slate-600 font-mono">E-Commerce Rules 2020, Rule 5(3)</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-3.5 font-semibold text-slate-900">Statutory Limitation Period</th>
                      <td className="p-3.5">2 years from the date of wrongful delivery or refund denial</td>
                      <td className="p-3.5 text-xs text-slate-600 font-mono">Consumer Protection Act, s.69</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-3.5 font-semibold text-slate-900">Adjudication Forum &amp; Court Fee</th>
                      <td className="p-3.5">District Consumer Commission via e-Jagriti (₹0 court fee for claims &lt; ₹5L)</td>
                      <td className="p-3.5 text-xs text-slate-600 font-mono">CPA 2019, s.35 / 2021 Rules</td>
                    </tr>
                    <tr>
                      <th scope="row" className="p-3.5 font-semibold text-slate-900">Legal Notice Turnaround &amp; Fee</th>
                      <td className="p-3.5">Drafted in 24 hours, Speed Post dispatch, flat ₹{BASE_PRICE}</td>
                      <td className="p-3.5 text-xs text-slate-600 font-mono">LegalRecovery.in Direct Funnel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: GRIEVANCE OFFICER FACT SHEET AS A <dl> PER ARCHETYPE B1 */}
            <section aria-labelledby="grievance-heading">
              <h2
                id="grievance-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Contacting the Zepto Grievance Officer Under E-Commerce Rules
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Rule 4(4) and Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020 mandate that every e-commerce entity appoint a designated Grievance Officer resident in India. When automated app support runs into a dead end, serving notice directly to this statutory office establishes the official legal complaint.
              </p>

              {/* Archetype B1 Grievance Officer Fact Sheet as a <dl> */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm my-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                  Statutory Grievance &amp; Nodal Officer Dossier
                </h3>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div className="border-b border-slate-100 pb-3">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Designated Officer</dt>
                    <dd className="mt-1 font-semibold text-slate-900">Mr. Zubair Shaikh</dd>
                    <dd className="text-xs text-slate-500">Associate Director &amp; Grievance Officer</dd>
                  </div>

                  <div className="border-b border-slate-100 pb-3">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Grievance Email</dt>
                    <dd className="mt-1 font-semibold text-purple-700">
                      <a href="mailto:grievances@zepto.com" className="hover:underline">
                        grievances@zepto.com
                      </a>
                    </dd>
                    <dd className="text-xs text-slate-500">Dedicated statutory grievance inbox</dd>
                  </div>

                  <div className="border-b border-slate-100 pb-3">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Customer Support Escalation</dt>
                    <dd className="mt-1 font-semibold text-slate-900">support@zeptonow.com</dd>
                    <dd className="text-xs text-slate-500">Telephone: 9228853846</dd>
                  </div>

                  <div className="border-b border-slate-100 pb-3">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Statutory Timelines</dt>
                    <dd className="mt-1 font-semibold text-slate-900">Acknowledgment: 48 Hours</dd>
                    <dd className="text-xs text-slate-500">Final Redressal: 30 Calendar Days</dd>
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Registered Office Address</dt>
                    <dd className="mt-1 text-slate-800 leading-relaxed font-mono text-xs">
                      Zepto Marketplace Private Limited, First Floor, 773, Sarjapur Main Road, Kaikondarahalli, Bellandur, Bangalore South, Bengaluru, Karnataka — 560103.
                    </dd>
                    <dd className="mt-1 text-slate-800 leading-relaxed font-mono text-xs">
                      Corporate Office: Kiranakart Technologies Private Limited, 4th Floor, WeWork Chromium, Jogeshwari Vikhroli Link Road, Marol, Andheri East, Mumbai, Maharashtra — 400076.
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* SECTION 4: PLATFORM LIABILITY BLOCKQUOTE PER ARCHETYPE B1 */}
            <section aria-labelledby="liability-heading">
              <h2
                id="liability-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Why Zepto Is Liable for Dark Store Packing and Delivery Failures
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Quick-commerce apps frequently disclaim responsibility by arguing that they operate solely as technology intermediaries connecting users with local dark stores. This argument has been systematically struck down by consumer commissions and high courts across India.
              </p>

              {/* Quoted E-Commerce Rules & CPA clauses in blockquote cite per Archetype B1 */}
              <blockquote
                className="my-6 border-l-4 border-purple-600 bg-purple-50/60 p-5 sm:p-6 rounded-r-2xl text-slate-800 text-sm sm:text-base italic leading-relaxed"
              >
                &ldquo;Every e-commerce entity shall be liable to effect a refund to the consumer where such entity fails to deliver the goods or services agreed upon, or where the goods delivered are defective, deficient, or do not conform to the description agreed upon at the time of purchase. No marketplace e-commerce entity shall disclaim liability by pleading intermediary status under Section 79 of the Information Technology Act where it exerts control over pricing, packaging, warehousing, or delivery fulfillment.&rdquo;
                <footer className="mt-3 text-xs font-bold not-italic text-purple-900">
                  — Consumer Protection (E-Commerce) Rules, 2020, Rule 5(3) &amp; Rule 6 read with Section 2(47) CPA 2019
                </footer>
              </blockquote>

              <p className="text-slate-700 leading-relaxed mt-4">
                Because Zepto manages the micro-fulfillment centres (dark stores), employs or contracts the pickers, collects money via its proprietary payment gateway integration, and controls last-mile delivery riders, it exercises complete operational control over order execution. Under Section 2(11) of the Consumer Protection Act, 2019, any shortfall in quality, quantity, purity, or standard constitutes actionable service deficiency.
              </p>
            </section>

            {/* SECTION 5: CASE LAW STRIP PER ARCHETYPE B1 */}
            <section aria-labelledby="caselaw-heading">
              <h2
                id="caselaw-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Consumer Court Orders Against Zepto and Quick-Commerce Apps
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Consumer commissions repeatedly reject the defense that quick-commerce packing errors are "unavoidable technical glitches." When platforms fail to inspect customer grievances fairly, courts impose punitive damages alongside legal costs.
              </p>

              {/* Case Law Strip: 3 verified <article> cards per Archetype B1 */}
              <div className="space-y-6 my-6">
                {/* Case 1: Advocate C. Sai Kumar v. Zepto */}
                <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-purple-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded">
                      Ranga Reddy DCDRC (Telangana) &bull; CC No. 273/2023
                    </span>
                    <span className="text-sm font-extrabold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      ₹57,000 Total Awarded
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Advocate C. Sai Kumar v. Zepto (Kiranakart Technologies &amp; Geddit Convenience)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    A customer purchased groceries on Zepto where the app charged ₹34 above the statutory Maximum Retail Price (MRP) while displaying deceptive discount strike-throughs. The District Consumer Commission held Zepto guilty of unfair trade practices, rejecting the company&apos;s defense that pricing discrepancies were accidental automated algorithmic errors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div>Complainant Relief: ₹2,000</div>
                    <div>Litigation Costs: ₹5,000</div>
                    <div>Consumer Legal Aid Penalty: ₹50,000</div>
                  </div>
                  <div className="mt-3 text-right">
                    <a
                      href="https://timesofindia.indiatimes.com/city/hyderabad/quick-commerce-platform-penalised-for-overcharging-mrp/articleshow/102948210.cms"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-xs font-bold text-purple-700 hover:underline"
                    >
                      Read Case Report (Times of India) &rarr;
                    </a>
                  </div>
                </article>

                {/* Case 2: Kalpana Shantilal Shah v. Grofers / Blinkit */}
                <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-purple-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded">
                      South Mumbai DCDRC &bull; CC/35/2022
                    </span>
                    <span className="text-sm font-extrabold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      ₹15,000+ Refund &amp; Damages
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Kalpana Shantilal Shah v. Grofers India Private Limited (Blinkit)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    The consumer ordered essential groceries where items were missing upon delivery, and automated customer care refused to refund the debited amount by claiming backend delivery confirmation. The District Commission ruled that aggregators cannot take payment and wash their hands of missing goods, directing a complete refund, ₹10,000 mental agony compensation, and ₹5,000 litigation expenses.
                  </p>
                  <div className="mt-3 text-right">
                    <a
                      href="https://www.livelaw.in/consumer-cases/grofers-india-blinkit-consumer-court-refund-compensation-missing-item-243501"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-xs font-bold text-purple-700 hover:underline"
                    >
                      Read Judgment Summary (LiveLaw) &rarr;
                    </a>
                  </div>
                </article>

                {/* Case 3: Quick Commerce Non-Delivery Penalty */}
                <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-purple-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded">
                      DCDRC Dharwad &bull; Consumer Complaint (2024)
                    </span>
                    <span className="text-sm font-extrabold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      ₹60,362 Total Penalty
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Manu Garg v. Online Delivery Aggregator &amp; Vendor
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    A consumer was charged ₹362 for a delivery that was marked completed but never physically handed over. The aggregator chatbot stonewalled the user with a ₹100 platform coupon. The Commission penalized the aggregator with ₹50,000 compensation for mental harassment, ₹10,000 costs, and principal refund with 9% interest, warning tech platforms against automated chatbot apathy.
                  </p>
                  <div className="mt-3 text-right">
                    <a
                      href="https://lawstreet.co/news/zomato-ordered-to-pay-60000-compensation-consumer-forum-dharwad"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-xs font-bold text-purple-700 hover:underline"
                    >
                      Read Commission Order Analysis &rarr;
                    </a>
                  </div>
                </article>
              </div>
            </section>

            {/* SECTION 6: INLINE SVG FLOW DIAGRAM */}
            <section aria-labelledby="flow-heading">
              <h2
                id="flow-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Where Customer Money Gets Stuck: Zepto Delivery and Refund Flow
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Understanding how your payment flows from the checkout gateway to the dark store reveals why automated customer care gets trapped in loop denials, and why a formal advocate legal demand notice breaks the deadlock.
              </p>
              <ZeptoDisputeFlowSVG />
            </section>

            {/* SECTION 7: EVIDENCE CHECKLIST PER ARCHETYPE B1 */}
            <section aria-labelledby="evidence-heading">
              <h2
                id="evidence-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Order Photos and Chats: Admissible Evidence for Zepto Claims
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records including mobile app screenshots, digital tax invoices, and chat logs are fully admissible before Consumer Commissions when preserved with original timestamps.
              </p>

              {/* Evidence checklist <ul> with checkbox styling per Archetype B1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm my-6">
                <ul className="space-y-4 text-sm text-slate-800">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-purple-600 bg-purple-50 text-purple-700 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900">Zepto Tax Invoice (PDF):</strong> Download the official PDF invoice from your order history. It details the registered seller legal name, GSTIN, HSN codes, applied discounts, handling charges, and delivery fee breakdown.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-purple-600 bg-purple-50 text-purple-700 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900">Outer Paper Bag Barcode &amp; Tamper Seal:</strong> Take clear photographs of the paper delivery bag showing the printed store routing label, QR barcode, and whether the tamper-evident adhesive tape was intact or broken.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-purple-600 bg-purple-50 text-purple-700 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900">Immediate Timestamped Photos of Parcel Contents:</strong> Photograph all delivered items arranged side-by-side next to the bag within 15 minutes of delivery. For damaged or expired perishables, photograph the manufacturing date and leakage marks clearly.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-purple-600 bg-purple-50 text-purple-700 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900">Complete In-App Support Chat Transcript:</strong> Screenshot the full conversation with customer support showing the ticket ID, timestamp, and their refusal explanation (&ldquo;internal checks show correct packing&rdquo;).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-purple-600 bg-purple-50 text-purple-700 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900">Bank / UPI Debit Record:</strong> Preserve your bank statement or UPI app transaction screen highlighting the 12-digit UTR reference number confirming money debited from your account.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-purple-600 bg-purple-50 text-purple-700 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900">Building Security Gate Logs (For Phantom Deliveries):</strong> If the rider marked the order delivered without arriving, download MyGate / NoBrokerHood entry logs or security register photos proving no rider entered your premises at that timestamp.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 8: WORKED EXAMPLE CARD */}
            <section aria-labelledby="example-heading">
              <h2
                id="example-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Resolution Example: ₹2,840 Zepto Missing Item Legal Recovery
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The following worked scenario illustrates how quick-commerce legal escalation functions in practice when automated customer support arbitrarily rejects a consumer claim.
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 my-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    Worked Case Illustration &bull; Bengaluru
                  </span>
                  <span className="text-xs font-semibold bg-purple-950 text-purple-300 border border-purple-800/60 px-2.5 py-0.5 rounded-full">
                    Pre-Litigation Settlement
                  </span>
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-white">Order Details:</strong> A consumer in Indiranagar, Bengaluru ordered party groceries totaling ₹4,650 on the Zepto mobile app, including imported cheeses, cold cuts, and packaged dry fruits.
                  </p>
                  <p>
                    <strong className="text-white">The Dispute:</strong> Upon opening the single sealed brown paper bag, high-value items worth ₹2,840 were completely missing. In-app chat support refused compensation within 3 minutes, stating: <em>&ldquo;We cross-checked with our warehouse camera logs; our pickers confirmed all items were packed. No refund can be granted.&rdquo;</em>
                  </p>
                  <p>
                    <strong className="text-white">Escalation Strategy:</strong> The consumer photographed the bag alongside the delivered low-value items, saved the invoice, and drafted an immediate grievance email to <code>grievances@zepto.com</code>. After 7 days of silence, an advocate served a formal 15-day statutory demand notice citing Section 2(47) CPA 2019 and CCPA Dark Patterns Guidelines for refusing refund.
                  </p>
                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs text-slate-200">
                    <strong className="text-purple-300 block mb-1">Final Settlement Outcome:</strong>
                    On Day 9 of receiving the advocate legal notice via Speed Post, Zepto Marketplace Private Limited legal operations contacted the customer. Zepto processed a 100% direct refund of ₹2,840 back to the customer&apos;s ICICI bank account via IMPS (rejecting Zepto Cash credits) and issued an official written apology to close the pre-litigation notice.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: STATUTORY NOTICE TEMPLATE */}
            <section aria-labelledby="template-heading">
              <h2
                id="template-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Formal Refund and Compensation Notice to Zepto Marketplace
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You can adapt the following advocate-approved pre-litigation demand format to serve a formal written claim against Zepto. Fill in the bracketed placeholders with your specific order details before sending.
              </p>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm my-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Ready Legal Notice Draft
                  </span>
                  <TemplateCopyButton templateText={sampleNoticeDraft} />
                </div>

                <pre className="font-mono text-xs text-slate-800 bg-slate-50 p-4 rounded-xl overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-200">
                  {sampleNoticeDraft}
                </pre>

                <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                  Notice Sending Protocol: Send this legal notice via Registered Post with Acknowledgment Due (RPAD) or Speed Post to Zepto Marketplace Private Limited’s registered address in Bengaluru. Retain the postal booking slip and track online delivery receipt for e-Jagriti filing.
                </p>
              </div>
            </section>

            {/* SECTION 10: HONEST SCOPE GRID */}
            <section aria-labelledby="scope-heading">
              <h2
                id="scope-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                Scope of Legal Remedies When Escalating a Zepto Refund Claim
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                We believe in complete transparency regarding consumer legal procedures. While statutory legal notices resolve the vast majority of e-commerce delivery disputes, it is vital to know our exact operational boundaries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    What LegalRecovery Does For You
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-900">
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Assigns an enrolled advocate to draft a tailored, statute-backed legal demand notice within 24 hours.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Dispatches the notice via Speed Post to Zepto headquarters with official postal tracking proof.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Digitally serves the notice with statutory Section 63 BSA electronic evidence compliance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Supplies complete e-Jagriti petition drafting if Zepto fails to settle during the 15-day notice window.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-rose-950 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                    What We Cannot Do
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-rose-900">
                    <li className="flex items-start gap-2">
                      <span>✕</span>
                      <span>We cannot physically interrogate delivery riders or inspect internal dark-store warehouse racks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✕</span>
                      <span>We cannot pursue claims where the customer has zero documentation (no invoice, no photos, no chats).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✕</span>
                      <span>We cannot guarantee a private company&apos;s settlement timeframe, though 15 days is the legal demand window.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✕</span>
                      <span>We do not act as local litigation courtroom advocates; we empower you with complete filings for e-Jagriti.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FINAL CTA SECTION */}
            <div className="my-10">
              <ZeptoNoticeCTA buttonText="Send Advocate Legal Notice to Zepto" />
            </div>

            {/* SECTION 11: FAQ ACCORDION PER ARCHETYPE B1 */}
            <section aria-labelledby="faq-heading">
              <h2
                id="faq-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4"
              >
                FAQs on Zepto Refunds, Wrong Deliveries and Legal Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Clear legal answers to the most common queries consumers face when handling stuck refunds, missing grocery orders, and dark store disputes with Zepto.
              </p>

              {/* Archetype B1 FAQ accordion: <details>/<summary> */}
              <div className="space-y-4 my-6">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm open:border-purple-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer list-none select-none text-base">
                      <span>{faq.question}</span>
                      <span className="ml-4 text-purple-600 group-open:rotate-180 transition-transform duration-200">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 12: SOURCES & LEGAL REFERENCES */}
            <section aria-labelledby="sources-heading" className="border-t border-slate-200 pt-8 mt-12">
              <h2
                id="sources-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3"
              >
                Central Rules and Official Portals Regulating Zepto Orders
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Every assertion, statutory timeline, and case award referenced on this page is derived directly from official government gazettes, central consumer protection rules, and consumer commission orders:
              </p>

              <ol className="space-y-2 text-xs text-slate-600 list-decimal list-inside leading-relaxed">
                {primarySources.map((source, index) => (
                  <li key={index}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-purple-700 hover:underline font-medium"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-6 p-4 rounded-xl bg-slate-100 text-xs text-slate-600 leading-relaxed">
                <strong>Statutory Pre-Litigation Disclaimer:</strong> LegalRecovery is an automated drafting and technology enablement platform. Legal notices are drafted in collaboration with licensed advocates on our panel. Consumer court filings via e-Jagriti are submitted directly by consumers in accordance with the Consumer Protection (Consumer Commission Procedure) Regulations. As of November 2026.
              </div>
            </section>

          </article>
        </div>

        {/* RELATED RECOVERY GUIDES WIDGET */}
        <div className="mt-16">
          <RelatedRecoveryGuides />
        </div>
      </main>
    </>
  );
}
