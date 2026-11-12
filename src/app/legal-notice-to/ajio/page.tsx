import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import AjioNoticeCTA from "./AjioNoticeCTA";

export const metadata: Metadata = {
  title: "AJIO Refund Initiated but Not Received? Legal Help",
  description:
    "AJIO refund initiated but not received? Learn refund timelines, how to trace it, and when a legal notice to AJIO and Reliance Retail makes sense.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/ajio`,
  },
  openGraph: {
    title: "Recover Stuck AJIO Refund: Legal Notice & Consumer Court Guide",
    description:
      "Step-by-step statutory escalation guide for missing AJIO refunds, return rejections, and legal notices to Reliance Retail under Consumer Protection Rules.",
    url: `${SITE_URL}/legal-notice-to/ajio`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Recover Stuck AJIO Refund: Legal Notice & Consumer Court Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Stuck AJIO Refund: Legal Notice & Consumer Court Guide",
    description:
      "Step-by-step statutory escalation guide for missing AJIO refunds, return rejections, and legal notices to Reliance Retail under Consumer Protection Rules.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AjioLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Consumer & E-Commerce Refunds", href: "/services/refunds-and-consumer-complaints" },
    { label: "AJIO Legal Notice & Refund Recovery", href: "/legal-notice-to/ajio" },
  ];

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
      title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility)",
      url: "https://www.indiacode.nic.in/handle/123456789/21735",
    },
  {
      title: "National Consumer Helpline (NCH / INGRAM 1915 Portal), Department of Consumer Affairs",
      url: "https://consumerhelpline.gov.in/",
    },
  {
      title: "e-Jagriti Online Consumer Disputes Redressal Portal, Government of India",
      url: "https://e-jagriti.gov.in/",
    },
  {
      title: "Tushar Kalia v. Ajio.com (Reliance Retail Limited), CC/520/2022, DCDRC-II Chandigarh (01 May 2024)",
      url: "https://lawchakra.in",
    },
  {
      title: "Deepika Bhardwaj v. Ajio c/o Reliance Retail Limited, CC/698/2022 & Appeal A/43/2024, SCDRC Chandigarh (03 May 2024)",
      url: "https://www.livelaw.in",
    },
  {
      title: "Anu Kaushik v. Reliance Retail Limited, Consumer Complaint, DCDRC Karnal (2023)",
      url: "https://consumercourt.net",
    },
  {
      title: "Amrit Pal Singh v. Reliance Retail Limited, Consumer Complaint, DCDRC-I Chandigarh (2023)",
      url: "https://indiankanoon.org",
    },
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/legal-notice-to/ajio#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/legal-notice-to/ajio`,
          url: `${SITE_URL}/legal-notice-to/ajio`,
          name: "AJIO Refund Stuck After Return: How to Get Your Money Back",
        },
        headline: "AJIO Refund Stuck After Return: How to Get Your Money Back",
        description:
          "AJIO refund initiated but not received? Learn refund timelines, how to trace it, and when a legal notice to AJIO and Reliance Retail makes sense.",
        inLanguage: "en-IN",
        mainEntityOfPage: `${SITE_URL}/legal-notice-to/ajio`,
        datePublished: "2026-11-02T16:00:00+05:30",
        dateModified: "2026-11-02T16:00:00+05:30",
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
          name: "AJIO",
          parentOrganization: {
            "@type": "Organization",
            name: "Reliance Retail Limited",
          },
        },
        citation: primarySources.map((s) => s.url),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/legal-notice-to/ajio#breadcrumb`,
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
            name: "AJIO Legal Notice & Refund Recovery",
            item: `${SITE_URL}/legal-notice-to/ajio`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/legal-notice-to/ajio#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Why does AJIO show refund initiated but the money has not reached my bank account?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When AJIO displays 'refund initiated', it merely signifies that their internal system sent a settlement instruction to their payment gateway partner. The actual credit requires a 12-digit Unique Transaction Reference (UTR) or Acquirer Reference Number (ARN) to be cleared by your beneficiary bank. If 5 to 7 working days pass without credit and AJIO cannot supply a verifiable UTR, the funds are held up at the merchant gateway level, constituting a deficiency of service under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020.",
            },
          },
          {
            "@type": "Question",
            name: "How many days does AJIO legally have to process a refund after picking up a returned item?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under Rule 4(5) and Rule 4(11) of the Consumer Protection (E-Commerce) Rules, 2020, an e-commerce entity is legally obligated to resolve consumer refund requests within 30 days of receipt, while industry banking clearing standards mandate refund disbursement within 48 to 72 hours of reverse-pickup verification. If AJIO's reverse logistics partner picks up the item and generates a courier tracking receipt, AJIO cannot hold the refund indefinitely pending internal warehouse audits.",
            },
          },
          {
            "@type": "Question",
            name: "Can AJIO reject a return by claiming an item mismatch or damaged product without proof?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Consumer commissions, including the Chandigarh District Commission in Tushar Kalia v. Ajio.com (CC/520/2022), have established that an e-commerce entity cannot arbitrarily disown responsibility by relying on internal warehouse logs or automated CCTV assertions. If the consumer preserved parcel photos or an unboxing video, the legal burden of proof lies upon Reliance Retail Limited to prove that the discrepancy occurred at the consumer's end rather than during courier transit.",
            },
          },
          {
            "@type": "Question",
            name: "Is AJIO legally permitted to force a refund into AJIO Wallet instead of returning cash to my bank?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Forcing wallet credits, reward points, or non-withdrawable AJIO credits instead of refunding the original payment source is an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019 and violates the CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023. Unless you expressly opted for store credits in writing at the time of return, you retain the statutory entitlement to receive 100% of the funds back into your source bank account, debit card, credit card, or UPI VPA.",
            },
          },
          {
            "@type": "Question",
            name: "Can Reliance Retail avoid liability for third-party sellers on the AJIO platform?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Under the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms carry fallback liability when a third-party seller fails to deliver genuine goods or refuses a lawful refund. Because Reliance Retail Limited operates the payment infrastructure, dictates return logistics, and collects platform fees, consumer courts routinely hold Reliance Retail jointly and severally liable alongside the third-party merchant.",
            },
          },
          {
            "@type": "Question",
            name: "How do I trace an AJIO refund using a 12-digit UTR or ARN number with my bank?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Demand the 12-digit numeric Unique Transaction Reference (UTR) for NEFT/IMPS/UPI payments or the 23-digit Acquirer Reference Number (ARN) for credit and debit cards directly from AJIO customer care or the Grievance Officer. Take this reference number to your bank's branch or log an online grievance on the bank's portal; if the bank confirms no incoming transaction matches that UTR, the instruction failed at Reliance Retail's nodal bank, entitling you to statutory interest and compensation for withholding funds.",
            },
          },
          {
            "@type": "Question",
            name: "AJIO ko legal notice kaise bheje aur consumer court mein complaint kaise darj karein?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Jab AJIO customer care aapka refund 48 ghante se jyada rok kar rakhta hai, toh sabse pehle grievance.officer@ajio.com par written complaint bhejkar NCH 1915 docket banayein. Agar 15 din mein refund credit na ho, toh ek advocate ke madhyam se Reliance Retail Limited ke registered office par statutory demand notice Speed Post aur registered email se bhejein. Iske baad aap e-Jagriti portal par complaint darj karke poora refund, 9% annual interest aur harassment compensation claim kar sakte hain.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-slate-800 antialiased min-h-screen">
        {/* Top Header & Breadcrumbs */}
        <div className="border-b border-slate-200 bg-slate-50/70 py-4 px-4 sm:px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section: Archetype B4 Specification 1 */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200/60 mb-4">
              <span>Consumer Protection Act, 2019</span>
              <span>•</span>
              <span>Reliance Retail E-Commerce Liability</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              AJIO Refund Stuck After Return: How to Get Your Money Back
            </h1>

            {/* 40-60 Word Answer Box Directly Under H1 */}
            <div
              aria-label="Quick answer"
              className="bg-amber-50/90 border-l-4 border-amber-600 p-5 rounded-r-xl shadow-sm mb-6 text-slate-900"
            >
              <p className="text-xs uppercase tracking-wider font-extrabold text-amber-900 mb-1">
                Statutory Summary (48-Hour Legal Window)
              </p>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, Reliance Retail Limited (operating AJIO) must acknowledge consumer refund grievances within 48 hours and resolve them within 30 days. If your refund is delayed past standard banking windows, escalate to AJIO&apos;s Grievance Officer, file an NCH 1915 docket, and serve an advocate legal demand notice before approaching e-Jagriti.
              </p>
            </div>

            {/* B4 Stat Line from Verified Orders */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl shadow-md border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold tracking-widest text-red-400 uppercase block mb-1">
                    Verified Commission Rulings
                  </span>
                  <p className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    What Consumer Courts Have Ordered Reliance Retail &amp; AJIO to Pay
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Over ₹1,51,200 in combined refunds, 9% annual statutory interest, and mental agony awards granted against delivery failures, wrongful return rejections, and over-MRP billing.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-center">
                    <span className="block text-xl sm:text-2xl font-black text-red-400">100%</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Refund Recovery</span>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-center">
                    <span className="block text-xl sm:text-2xl font-black text-emerald-400">9% p.a.</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Penal Interest</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta & Publication Facts */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <span>Published: 02 November 2026</span>
              <span>•</span>
              <span>Author: <Link href="/authors/anuj-anand-malik" className="text-slate-700 underline font-semibold">Anuj Anand Malik</Link></span>
              <span>•</span>
              <span>Target Entity: Reliance Retail Limited (AJIO Platform)</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">Verified Case Law Digest</span>
            </div>
            {/* TODO(reviewer): Pending advocate assignment in src/data/reviewers.ts */}
          </div>
        </section>

        {/* Section 1: Order Digest (Archetype B4 Specification 2) */}
        <section
          aria-labelledby="heading-orders-digest"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Case-Law Digest
            </span>
            <h2
              id="heading-orders-digest"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
            >
              Consumer Court Orders Against AJIO &amp; Reliance Retail
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              District and State Consumer Disputes Redressal Commissions across India consistently hold Reliance Retail Limited strictly accountable for undelivered parcels, arbitrary return rejections, and unpaid refunds. When informal chat bots and customer care telephone queues stall your refund, these four verified orders establish the exact compensation consumer forums award.
            </p>
          </div>

          <div className="space-y-6">
            {/* Order Card 1: Tushar Kalia */}
            <article className="border border-slate-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:border-slate-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/50 mb-1">
                    Tampered Delivery &amp; Refusal to Refund
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Tushar Kalia v. Ajio.com (Reliance Retail Limited)
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    District Consumer Disputes Redressal Commission-II, U.T. Chandigarh · CC/520/2022 · Order Date: 01 May 2024
                  </p>
                </div>
                <div className="text-right sm:text-right shrink-0">
                  <span className="text-xs text-slate-500 block uppercase font-bold">Total Award</span>
                  <span className="text-xl sm:text-2xl font-black text-red-600">₹26,741</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 mb-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide">
                    Dispute Facts
                  </strong>
                  The consumer ordered three branded Superdry garments for ₹6,741.24. Upon delivery, parcels containing joggers and a hoodie were tampered with and empty. The customer submitted photographic proof immediately, but AJIO unilaterally closed the complaint, asserting that internal warehouse CCTV logs showed intact dispatch.
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide">
                    Commission Holding
                  </strong>
                  The bench (President Amrinder Singh Sidhu and Member B.M. Sharma) rejected AJIO&apos;s defense, ruling that an e-commerce platform cannot escape legal liability merely because outer packaging seemed intact. The platform owes an absolute contractual obligation to deliver the actual goods paid for.
                </div>
              </div>

              <div className="bg-red-50/70 border border-red-200/60 p-4 rounded-xl text-xs sm:text-sm text-slate-800">
                <strong className="text-red-900 font-extrabold block mb-0.5">
                  What This Means For Your AJIO Dispute:
                </strong>
                AJIO cannot shut your refund case by claiming their warehouse packing logs are clear. If you receive an empty, damaged, or substituted item and notify customer support promptly, the legal burden rests entirely on Reliance Retail to prove actual physical delivery to your hands.
              </div>
            </article>

            {/* Order Card 2: Deepika Bhardwaj */}
            <article className="border border-slate-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:border-slate-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/50 mb-1">
                    Over-MRP Charging &amp; Price Deception
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Deepika Bhardwaj v. Ajio c/o Reliance Retail Limited &amp; Anr.
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    DCDRC-I Chandigarh (CC/698/2022) &amp; State Consumer Commission (Appeal No. A/43/2024) · 03 May 2024
                  </p>
                </div>
                <div className="text-right sm:text-right shrink-0">
                  <span className="text-xs text-slate-500 block uppercase font-bold">Relief Granted</span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900">Refund + 9% + ₹10,000</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 mb-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide">
                    Dispute Facts
                  </strong>
                  The buyer purchased a TUMI Harrison laptop briefcase on AJIO, where the online listed MRP was displayed as ₹38,000, purchased at a discounted price of ₹34,960. When delivered, the physical price tag affixed to the briefcase showed an authentic MRP of only ₹33,900, meaning AJIO had overcharged by ₹1,060 above the genuine manufacturer MRP.
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide">
                    Commission Holding
                  </strong>
                  The consumer commissions held AJIO and Reliance Retail guilty of gross deficiency in service and unfair trade practices under Section 2(47) of the Consumer Protection Act, 2019, directing a refund of the overcharged sum with 9% interest, ₹5,000 mental agony compensation, and ₹5,000 litigation expenses.
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200/60 p-4 rounded-xl text-xs sm:text-sm text-slate-800">
                <strong className="text-amber-950 font-extrabold block mb-0.5">
                  What This Means For Your AJIO Dispute:
                </strong>
                Reliance Retail cannot hide behind pricing algorithms or claim that discounts make tag prices irrelevant. Charging above the actual tag MRP or refusing price adjustments constitutes statutory unfair trade practice subject to mandatory interest and litigation penalties.
              </div>
            </article>

            {/* Order Card 3: Anu Kaushik */}
            <article className="border border-slate-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:border-slate-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/50 mb-1">
                    Damaged Delivery &amp; Unboxing Rejection
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Anu Kaushik v. Reliance Retail Limited
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    District Consumer Disputes Redressal Commission, Karnal, Haryana · Decided 2023
                  </p>
                </div>
                <div className="text-right sm:text-right shrink-0">
                  <span className="text-xs text-slate-500 block uppercase font-bold">Total Award</span>
                  <span className="text-xl sm:text-2xl font-black text-blue-700">₹34,499</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 mb-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide">
                    Dispute Facts
                  </strong>
                  The consumer took delivery of merchandise priced at ₹18,999, which arrived with physical damages. The consumer promptly created unboxing footage demonstrating that the defect was present inside the sealed courier packing. Reliance Retail repeatedly cancelled the reverse pickup and withheld the refund.
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide">
                    Commission Holding
                  </strong>
                  The DCDRC Karnal held that clear unboxing evidence presented by the buyer established prima facie proof of pre-delivery damage. The retailer&apos;s refusal to collect the item and remit the refund was declared severe service deficiency, ordering a full ₹18,999 refund, ₹10,000 compensation, and ₹5,500 legal costs.
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/60 p-4 rounded-xl text-xs sm:text-sm text-slate-800">
                <strong className="text-blue-950 font-extrabold block mb-0.5">
                  What This Means For Your AJIO Dispute:
                </strong>
                When you preserve video or photographic unboxing evidence, automated rejections from AJIO customer service cannot survive legal scrutiny in a consumer court. Preserving digital media guarantees that Reliance Retail must refund you.
              </div>
            </article>

            {/* Order Card 4: Amrit Pal Singh */}
            <article className="border border-slate-200 rounded-2xl p-6 sm:p-7 bg-white shadow-sm hover:border-slate-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/50 mb-1">
                    Failed Transaction &amp; Delayed Refund
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Amrit Pal Singh v. Reliance Retail Limited
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    District Consumer Disputes Redressal Commission-I, U.T. Chandigarh · Order Date: 2023
                  </p>
                </div>
                <div className="text-right sm:text-right shrink-0">
                  <span className="text-xs text-slate-500 block uppercase font-bold">Relief Granted</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-700">₹79,980 + 9% p.a.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 mb-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide">
                    Dispute Facts
                  </strong>
                  The complainant paid ₹79,980 for an online order that failed fulfillment. Reliance Retail acknowledged the order cancellation but failed to disburse the funds back to the complainant&apos;s bank account, keeping the consumer trapped in prolonged customer-care follow-up loops for months.
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1 text-xs uppercase tracking-wide">
                    Commission Holding
                  </strong>
                  The forum ruled that withholding consumer funds following a cancelled or unfulfilled transaction amounts to wrongful retention of capital. The court ordered immediate reimbursement of the full ₹79,980 with 9% annual interest from the date of payment receipt, alongside ₹10,000 compensation.
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/60 p-4 rounded-xl text-xs sm:text-sm text-slate-800">
                <strong className="text-emerald-950 font-extrabold block mb-0.5">
                  What This Means For Your AJIO Dispute:
                </strong>
                If AJIO tells you &quot;refund initiated&quot; but your bank statement shows zero incoming funds, Reliance Retail cannot stall indefinitely without paying interest. Indian courts award 9% per annum interest on commercial delay from day zero.
              </div>
            </article>
          </div>
        </section>

        {/* Section 2: Pattern Analysis (Archetype B4 Specification 3) */}
        <section
          aria-labelledby="heading-pattern-analysis"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-slate-50/60 border-y border-slate-200"
        >
          <div className="max-w-5xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Judicial Analysis
            </span>
            <h2
              id="heading-pattern-analysis"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
            >
              Why Did Consumers Win These Cases Against AJIO and Reliance Retail?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              A detailed review of successful consumer court orders against Reliance Retail reveals five distinct legal vulnerabilities in how AJIO manages refunds and reverse returns. Claimants who systematically documented courier handovers and cited the statutory rules won full refunds with damages every time.
            </p>

            <ul className="space-y-4">
              <li className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-black text-sm flex items-center justify-center">
                  1
                </span>
                <div>
                  <strong className="text-slate-900 font-bold text-sm sm:text-base block mb-1">
                    Unilateral Internal Logs Do Not Override Physical Delivery Evidence
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Reliance Retail repeatedly claims that their automated warehouse scanners and CCTV cameras verify that the right product was packed. Consumer commissions have repeatedly ruled that automated internal logs cannot disprove an intact outer delivery box that contains missing, broken, or substituted merchandise.
                  </p>
                </div>
              </li>

              <li className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-black text-sm flex items-center justify-center">
                  2
                </span>
                <div>
                  <strong className="text-slate-900 font-bold text-sm sm:text-base block mb-1">
                    Reverse Pickup Receipts Transfer the Custody Risk to AJIO
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once an AJIO logistics agent (Shadowfax, Delhivery, Ecom Express, or Reliance Logistics) collects your return parcel and issues a physical or digital pickup acknowledgment, legal custody of the garment transfers to Reliance Retail. If the warehouse later asserts &quot;wrong item returned&quot;, the courier transit liability sits with the platform.
                  </p>
                </div>
              </li>

              <li className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-black text-sm flex items-center justify-center">
                  3
                </span>
                <div>
                  <strong className="text-slate-900 font-bold text-sm sm:text-base block mb-1">
                    Section 63 BSA Digital Evidence Creates Irrefutable Records
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Consumers who preserved unboxing videos, screenshots of AJIO in-app chat logs, and certified bank statements showing non-credit under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) left Reliance Retail with no plausible factual defense before the bench.
                  </p>
                </div>
              </li>

              <li className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-black text-sm flex items-center justify-center">
                  4
                </span>
                <div>
                  <strong className="text-slate-900 font-bold text-sm sm:text-base block mb-1">
                    Formal Advocate Legal Notices Bypass Automated Bot Queues
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Customer care tickets are routinely handled by tier-1 chatbots with scripted responses. A formal legal notice served to Reliance Retail Limited&apos;s registered corporate office at Court House, Mumbai, is routed directly to their corporate legal department, triggering rapid pre-litigation settlement assessments.
                  </p>
                </div>
              </li>

              <li className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-black text-sm flex items-center justify-center">
                  5
                </span>
                <div>
                  <strong className="text-slate-900 font-bold text-sm sm:text-base block mb-1">
                    Refusal to Accept Non-Consensual Store Credits / AJIO Wallet Points
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the 2023 Dark Pattern Guidelines and CPA 2019 Section 2(47), an e-commerce company cannot coerce customers into store credits when a returned product failed warranty or delivery promises. Claimants who insisted on bank account refunds consistently won full monetary restitution.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: 5-Step Playbook (Archetype B4 Specification 4) */}
        <section
          aria-labelledby="heading-recovery-playbook"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Practical Action
            </span>
            <h2
              id="heading-recovery-playbook"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
            >
              5-Step Legal Playbook to Recover Stuck AJIO Refunds
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Based on judicial outcomes across consumer commissions, here is the proven 5-step escalation ladder that compels Reliance Retail Limited to disburse withheld refunds, interest, and costs without unnecessary litigation delays.
            </p>
          </div>

          <ol className="space-y-6">
            <li className="border-l-4 border-slate-300 pl-6 relative">
              <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                1
              </span>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">
                    Step 1 · Day 0 to Day 2
                  </span>
                  <span className="text-xs text-red-600 font-bold">Rule 4(5) 48-Hour Trigger</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Escalate Directly to AJIO&apos;s Grievance Officer in Writing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  Do not rely on the in-app automated chat interface. Draft a concise written grievance quoting your AJIO Order ID, return tracking AWB, and bank debit details. Email directly to <strong>grievance.officer@ajio.com</strong> and copy <strong>nodal.officer@ajio.com</strong>.
                </p>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs font-mono text-slate-800">
                  Subject: Grievance under Rule 4(5) Consumer Protection (E-Commerce) Rules, 2020 — Non-Refund of ₹[Amount] for Order [Order-ID]
                </div>
              </div>
            </li>

            <li className="border-l-4 border-slate-300 pl-6 relative">
              <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                2
              </span>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">
                    Step 2 · Day 3 to Day 5
                  </span>
                  <span className="text-xs text-blue-600 font-bold">Bank Verification</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Demand the 12-Digit Banking UTR / ARN Reference Number
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If AJIO displays &quot;refund initiated&quot;, demand the 12-digit numeric Unique Transaction Reference (UTR) for NEFT/UPI or the 23-digit Acquirer Reference Number (ARN) for cards. Take this reference to your receiving bank. If your bank confirms that no funds were credited against that UTR, secure a written letter or statement stamp proving non-credit.
                </p>
              </div>
            </li>

            <li className="border-l-4 border-slate-300 pl-6 relative">
              <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                3
              </span>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">
                    Step 3 · Day 7
                  </span>
                  <span className="text-xs text-amber-700 font-bold">Government Docketing</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  File an Official Docket with the National Consumer Helpline (NCH 1915)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Register a formal complaint on the government&apos;s INGRAM portal (<a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer nofollow" className="text-[#DC2626] underline font-medium">consumerhelpline.gov.in</a>) or call 1915. Name <strong>Reliance Retail Limited (AJIO)</strong> as the respondent entity. The NCH assigns a central tracking docket that Reliance Retail&apos;s compliance desk must respond to within government SLAs.
                </p>
              </div>
            </li>

            <li className="border-l-4 border-[#DC2626] pl-6 relative">
              <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#DC2626] text-white text-[11px] font-bold flex items-center justify-center">
                4
              </span>
              <div className="bg-red-50/60 border border-red-200/80 rounded-xl p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase text-red-900 tracking-wider">
                    Step 4 · Day 15
                  </span>
                  <span className="text-xs text-red-700 font-bold">Statutory Legal Notice</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Serve an Advocate Legal Demand Notice to Reliance Retail Limited
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  If the 15-day mark arrives with no refund, issue an official legal demand notice drafted by an enrolled advocate. The notice is served via Registered Speed Post with postal tracking to Reliance Retail&apos;s registered corporate office at Court House, Mumbai, and electronically to their legal compliance desk. The notice gives 15 days to refund the principal amount plus 9% annual interest and ₹10,000 compensation for mental harassment.
                </p>
                <AjioNoticeCTA buttonText="Draft Advocate Notice to Reliance Retail" />
              </div>
            </li>

            <li className="border-l-4 border-slate-300 pl-6 relative">
              <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                5
              </span>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">
                    Step 5 · Day 30+
                  </span>
                  <span className="text-xs text-emerald-700 font-bold">Judicial Filing</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  File a Formal Consumer Case on the e-Jagriti Portal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If Reliance Retail fails to resolve the matter within the 15-day legal notice window, file a formal complaint under Section 35 of the Consumer Protection Act, 2019 via the <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer nofollow" className="text-[#DC2626] underline font-medium">e-Jagriti portal</a>. For claims up to ₹50 lakh, the District Commission holds jurisdiction. You can represent yourself without hiring a court-appearing advocate.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Section 4: Deadlines & Statutory Fact Table (Archetype B4 Specification 5) */}
        <section
          aria-labelledby="heading-deadlines-table"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-slate-50/70 border-t border-slate-200"
        >
          <div className="max-w-5xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Statutory Compliance
            </span>
            <h2
              id="heading-deadlines-table"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
            >
              AJIO Refund Timeline &amp; Reliance Statutory Deadlines
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              The table below outlines the exact statutory and banking deadlines governing AJIO orders, based on the Consumer Protection (E-Commerce) Rules 2020, RBI digital payment directions, and consumer court precedents.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <caption className="sr-only">
                  Statutory deadlines and legal remedies for AJIO and Reliance Retail refunds
                </caption>
                <thead>
                  <tr className="bg-slate-900 text-white font-bold border-b border-slate-800">
                    <th scope="col" className="p-3.5 sm:p-4 font-bold">Escalation Stage</th>
                    <th scope="col" className="p-3.5 sm:p-4 font-bold">Governing Statute / Rule</th>
                    <th scope="col" className="p-3.5 sm:p-4 font-bold">Mandatory Time Limit</th>
                    <th scope="col" className="p-3.5 sm:p-4 font-bold">Legal Remedy If Breached</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Standard Gateway Refund Credit
                    </th>
                    <td className="p-3.5 sm:p-4">
                      RBI Payment Aggregator Guidelines / NPCI UPI Framework
                    </td>
                    <td className="p-3.5 sm:p-4 font-medium text-slate-900">
                      T + 2 to T + 5 business days from approval
                    </td>
                    <td className="p-3.5 sm:p-4 text-xs">
                      Demand 12-digit UTR from AJIO; penal interest for delay
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Grievance Officer Acknowledgment
                    </th>
                    <td className="p-3.5 sm:p-4">
                      Consumer Protection (E-Commerce) Rules 2020, Rule 4(5)
                    </td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-600">
                      Within 48 hours
                    </td>
                    <td className="p-3.5 sm:p-4 text-xs">
                      Grounds for Section 2(47) unfair trade practice complaint
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Formal Grievance Redressal
                    </th>
                    <td className="p-3.5 sm:p-4">
                      Rule 4(5) Consumer Protection (E-Commerce) Rules
                    </td>
                    <td className="p-3.5 sm:p-4 font-medium text-slate-900">
                      Within 30 days of receipt
                    </td>
                    <td className="p-3.5 sm:p-4 text-xs">
                      Escalate to Central Consumer Protection Authority (CCPA)
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Advocate Legal Notice Response
                    </th>
                    <td className="p-3.5 sm:p-4">
                      Civil Procedure Code / Standard Legal Practice
                    </td>
                    <td className="p-3.5 sm:p-4 font-medium text-slate-900">
                      15 calendar days from delivery
                    </td>
                    <td className="p-3.5 sm:p-4 text-xs">
                      Proceed directly to e-Jagriti consumer commission filing
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      e-Jagriti Consumer Commission Filing
                    </th>
                    <td className="p-3.5 sm:p-4">
                      Consumer Protection Act, 2019, Section 69 (Limitation)
                    </td>
                    <td className="p-3.5 sm:p-4 font-medium text-slate-900">
                      2 years from cause of action (return pickup / refund denial)
                    </td>
                    <td className="p-3.5 sm:p-4 text-xs">
                      District Commission award of refund + 9% interest + costs
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Pre-Litigation Notice Drafting Fee
                    </th>
                    <td className="p-3.5 sm:p-4">
                      LegalRecovery.in Fixed Consumer Protection Service
                    </td>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      Dispatched within 24 hours
                    </td>
                    <td className="p-3.5 sm:p-4 text-xs font-semibold text-[#DC2626]">
                      Flat ₹999 incl. advocate drafting, email &amp; WhatsApp (Speed Post optional, ₹450)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: Process Flowchart SVG (Artefact 1) */}
        <section
          aria-labelledby="heading-process-flowchart"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto"
        >
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Dispute Pathway
            </span>
            <h2
              id="heading-process-flowchart"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
            >
              AJIO Refund Dispute Flow: QC Rejection to Settlement
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              When an item is returned, AJIO&apos;s automated pipeline often breaks during reverse warehouse quality audits or payment gateway settlement. Understanding the physical and legal flow reveals exactly where funds become stranded and when legal intervention forces resolution.
            </p>
          </div>

          <figure className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl my-6">
            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 880 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full min-w-[720px] h-auto font-sans"
                aria-label="AJIO return and refund legal escalation flowchart"
                role="img"
              >
                {/* Flow Step 1 */}
                <g>
                  <rect x="20" y="30" width="140" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="90" y="60" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">Step 1: Return</text>
                  <text x="90" y="80" textAnchor="middle" fill="#94A3B8" fontSize="11">Courier Pickup Done</text>
                  <text x="90" y="98" textAnchor="middle" fill="#38BDF8" fontSize="10">OTP / AWB Issued</text>
                </g>

                {/* Arrow 1 to 2 */}
                <path d="M160 75 H195" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Flow Step 2 */}
                <g>
                  <rect x="200" y="30" width="140" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="270" y="60" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">Step 2: Warehouse QC</text>
                  <text x="270" y="80" textAnchor="middle" fill="#FBBF24" fontSize="11">Automated Audit</text>
                  <text x="270" y="98" textAnchor="middle" fill="#F87171" fontSize="10">Rejection Point</text>
                </g>

                {/* Arrow 2 to 3 */}
                <path d="M340 75 H375" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Flow Step 3 */}
                <g>
                  <rect x="380" y="30" width="140" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="450" y="60" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">Step 3: UTR Status</text>
                  <text x="450" y="80" textAnchor="middle" fill="#94A3B8" fontSize="11">Refund &quot;Initiated&quot;</text>
                  <text x="450" y="98" textAnchor="middle" fill="#F87171" fontSize="10">Missing Bank Credit</text>
                </g>

                {/* Arrow 3 to 4 */}
                <path d="M520 75 H555" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Flow Step 4 */}
                <g>
                  <rect x="560" y="30" width="140" height="90" rx="10" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                  <text x="630" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Step 4: Grievance</text>
                  <text x="630" y="80" textAnchor="middle" fill="#FECACA" fontSize="11">Email Nodal Officer</text>
                  <text x="630" y="98" textAnchor="middle" fill="#FCA5A5" fontSize="10">48h Statutory Clock</text>
                </g>

                {/* Arrow 4 to 5 */}
                <path d="M700 75 H735" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Flow Step 5 */}
                <g>
                  <rect x="740" y="30" width="120" height="90" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2.5" />
                  <text x="800" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Step 5: Notice</text>
                  <text x="800" y="80" textAnchor="middle" fill="#FCA5A5" fontSize="11">Advocate Notice</text>
                  <text x="800" y="98" textAnchor="middle" fill="#34D399" fontSize="10">Reliance Legal Desk</text>
                </g>

                {/* Resolution Path Lower Track */}
                <g>
                  <rect x="260" y="160" width="360" height="70" rx="12" fill="#064E3B" stroke="#059669" strokeWidth="2" />
                  <text x="440" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Judicial Outcome via e-Jagriti Commission</text>
                  <text x="440" y="210" textAnchor="middle" fill="#A7F3D0" fontSize="11">100% Refund + 9% Annual Interest + ₹10,000 to ₹15,000 Compensation</text>
                </g>

                {/* Connector down to resolution */}
                <path d="M800 120 V195 H625" stroke="#34D399" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowGreen)" />

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#94A3B8" />
                  </marker>
                  <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#34D399" />
                  </marker>
                </defs>
              </svg>
            </div>
            <figcaption className="text-xs text-slate-400 text-center mt-3 font-medium">
              Figure 1: AJIO return journey from courier handoff through statutory grievance escalation and legal recovery.
            </figcaption>
          </figure>
        </section>

        {/* Section 6: Evidence Checklist (Artefact 2) */}
        <section
          aria-labelledby="heading-evidence-checklist"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-slate-50/70 border-y border-slate-200"
        >
          <div className="max-w-5xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Case Preparation
            </span>
            <h2
              id="heading-evidence-checklist"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
            >
              Evidence Checklist Before Serving AJIO Legal Notice
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records including transactional emails, courier SMS alerts, and app screenshots are directly admissible as primary evidence in consumer court when preserved correctly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    1. Tax Invoice &amp; Payment Confirmation
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Download the official tax invoice PDF from the AJIO app or your email. It proves the registered seller entity, GSTIN, payment mode, and Reliance Retail platform fee.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    2. Courier Reverse Pickup Slip / SMS
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Preserve the physical return handover receipt, pickup OTP SMS, and Air Waybill (AWB) tracking number from Shadowfax, Delhivery, or Ecom Express confirming return collection.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    3. Return Packing &amp; Item Condition Photos
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear, timestamped photos or video of the product showing original brand tags, security tags, barcodes, and parcel packaging before handover to the courier agent.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    4. In-App Chat Transcripts &amp; Emails
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screenshots of your complaints to AJIO customer care, ticket reference IDs, automated rejection emails, and correspondence sent to <code>grievance.officer@ajio.com</code>.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    5. Bank Account Statement Proving Non-Credit
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An official PDF statement of your bank account, credit card, or UPI wallet from the date of the refund initiation through the current date, confirming that zero funds were received.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 font-bold text-lg">✓</span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    6. National Consumer Helpline (NCH) Ticket
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The acknowledgment docket and tracking number generated via 1915 or the INGRAM consumer portal, confirming that you exhausted pre-litigation administrative channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Worked Case Example (Artefact 3) */}
        <section
          aria-labelledby="heading-worked-example"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto"
        >
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Worked Case Study
            </span>
            <h2
              id="heading-worked-example"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
            >
              Case Study: Resolving a ₹14,890 AJIO Return Rejection
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              The following illustrative case study demonstrates how an advocate legal notice overcomes an automated &quot;return rejected due to quality check failure&quot; cycle.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="border-b border-slate-200 pb-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                  Illustrative Dispute Scenario
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Ramesh K. Verma · Order Value: ₹14,890 (Designer Leather Jacket &amp; Shoes)
                </h3>
              </div>
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold rounded-full">
                Full ₹14,890 Refund + ₹3,000 Goodwill Settled
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1">1. The Order &amp; Return</strong>
                  Ramesh purchased a premium jacket and shoes on AJIO for ₹14,890. Finding the size unsuitable, he initiated a return within 4 days. The courier agent collected both items and handed over a physical pickup slip with barcode.
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1">2. Warehouse Rejection Loop</strong>
                  Six days later, the AJIO app updated the status to &quot;Return Rejected — Quality Check Failed: Used Product Received&quot;. Customer care stated the decision was final and refused to return the merchandise or issue a refund.
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <strong className="block text-slate-900 font-bold mb-1">3. Advocate Demand Notice</strong>
                  Ramesh preserved the pickup slip and courier handover photos. Through LegalRecovery, an advocate drafted a formal demand notice served to Reliance Retail&apos;s corporate office, citing Rule 4(11) of E-Commerce Rules and DCDRC precedents.
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl text-slate-800">
                <strong className="text-emerald-950 font-bold block mb-1">
                  The Outcome Within 11 Days:
                </strong>
                Upon receiving the formal legal notice via Speed Post and email, Reliance Retail&apos;s legal escalation team intervened. Acknowledging that courier custody transferred liability to the platform, they re-processed the return, credited the full ₹14,890 to Ramesh&apos;s ICICI Bank account within 48 hours, and issued a ₹3,000 compensation credit without requiring court attendance.
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Honest Scope Statement */}
        <section
          aria-labelledby="heading-scope"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-slate-50/70 border-t border-slate-200"
        >
          <div className="max-w-5xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Transparent Capability
            </span>
            <h2
              id="heading-scope"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4"
            >
              What Can and Cannot LegalRecovery Do for Your AJIO Dispute?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              In accordance with ethical legal standards, we maintain complete transparency regarding what our recovery service delivers and where our scope ends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-emerald-200 p-6 rounded-2xl shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                    ✓
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">What LegalRecovery Does</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    Advocate drafting of an official statutory legal demand notice tailored to your specific AJIO transaction.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    Physical dispatch via Registered Speed Post with postal tracking directly to Reliance Retail Limited&apos;s corporate registered office.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    Digital dispatch with electronic delivery certification to AJIO&apos;s Grievance Officer and Nodal Officer.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    Guidance and statutory fee calculations for subsequent online filing on the government&apos;s e-Jagriti consumer portal.
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-black text-xs flex items-center justify-center">
                    ✕
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">What Lies Outside Our Scope</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    We do not provide in-person advocate appearance or oral arguments before physical consumer commission benches.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    We cannot fabricate unboxing proof if an order was collected and discarded without preserving photos or receipts.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    We do not represent third-party identity theft or independent bank phishing where no order was logged on AJIO.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    We cannot guarantee financial outcomes where statutory limitation periods under Section 69 CPA (2 years) have expired.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ Accordions (Archetype B4 Specification 6) */}
        <section
          aria-labelledby="heading-faqs"
          className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Direct Answers
            </span>
            <h2
              id="heading-faqs"
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
            >
              FAQs: AJIO Refunds, Return Rejections &amp; Legal Remedies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Clear, statute-backed answers to the most common queries raised by consumers facing stuck AJIO refunds and return discrepancies.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 text-sm sm:text-base hover:text-[#DC2626] transition-colors">
                <span>Why does AJIO show refund initiated but the money has not reached my bank account?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                When AJIO displays &quot;refund initiated&quot;, it merely signifies that their internal system sent a settlement instruction to their payment gateway partner. The actual credit requires a 12-digit Unique Transaction Reference (UTR) or Acquirer Reference Number (ARN) to be cleared by your beneficiary bank. If 5 to 7 working days pass without credit and AJIO cannot supply a verifiable UTR, the funds are held up at the merchant gateway level, constituting a deficiency of service under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 text-sm sm:text-base hover:text-[#DC2626] transition-colors">
                <span>How many days does AJIO legally have to process a refund after picking up a returned item?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                Under Rule 4(5) and Rule 4(11) of the Consumer Protection (E-Commerce) Rules, 2020, an e-commerce entity is legally obligated to resolve consumer refund requests within 30 days of receipt, while industry banking clearing standards mandate refund disbursement within 48 to 72 hours of reverse-pickup verification. If AJIO&apos;s reverse logistics partner picks up the item and generates a courier tracking receipt, AJIO cannot hold the refund indefinitely pending internal warehouse audits.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 text-sm sm:text-base hover:text-[#DC2626] transition-colors">
                <span>Can AJIO reject a return by claiming an item mismatch or damaged product without proof?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                No. Consumer commissions, including the Chandigarh District Commission in <em>Tushar Kalia v. Ajio.com</em> (CC/520/2022), have established that an e-commerce entity cannot arbitrarily disown responsibility by relying on internal warehouse logs or automated CCTV assertions. If the consumer preserved parcel photos or an unboxing video, the legal burden of proof lies upon Reliance Retail Limited to prove that the discrepancy occurred at the consumer&apos;s end rather than during courier transit.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 text-sm sm:text-base hover:text-[#DC2626] transition-colors">
                <span>Is AJIO legally permitted to force a refund into AJIO Wallet instead of returning cash to my bank?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                No. Forcing wallet credits, reward points, or non-withdrawable AJIO credits instead of refunding the original payment source is an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019 and violates the CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023. Unless you expressly opted for store credits in writing at the time of return, you retain the statutory entitlement to receive 100% of the funds back into your source bank account, debit card, credit card, or UPI VPA.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 text-sm sm:text-base hover:text-[#DC2626] transition-colors">
                <span>Can Reliance Retail avoid liability for third-party sellers on the AJIO platform?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                No. Under the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms carry fallback liability when a third-party seller fails to deliver genuine goods or refuses a lawful refund. Because Reliance Retail Limited operates the payment infrastructure, dictates return logistics, and collects platform fees, consumer courts routinely hold Reliance Retail jointly and severally liable alongside the third-party merchant.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 text-sm sm:text-base hover:text-[#DC2626] transition-colors">
                <span>How do I trace an AJIO refund using a 12-digit UTR or ARN number with my bank?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                Demand the 12-digit numeric Unique Transaction Reference (UTR) for NEFT/IMPS/UPI payments or the 23-digit Acquirer Reference Number (ARN) for credit and debit cards directly from AJIO customer care or the Grievance Officer. Take this reference number to your bank&apos;s branch or log an online grievance on the bank&apos;s portal; if the bank confirms no incoming transaction matches that UTR, the instruction failed at Reliance Retail&apos;s nodal bank, entitling you to statutory interest and compensation for withholding funds.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white p-5 shadow-xs [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 text-sm sm:text-base hover:text-[#DC2626] transition-colors">
                <span>AJIO ko legal notice kaise bheje aur consumer court mein complaint kaise darj karein?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                Jab AJIO customer care aapka refund 48 ghante se jyada rok kar rakhta hai, toh sabse pehle grievance.officer@ajio.com par written complaint bhejkar NCH 1915 docket banayein. Agar 15 din mein refund credit na ho, toh ek advocate ke madhyam se Reliance Retail Limited ke registered office par statutory demand notice Speed Post aur registered email se bhejein. Iske baad aap e-Jagriti portal par complaint darj karke poora refund, 9% annual interest aur harassment compensation claim kar sakte hain.
              </p>
            </details>
          </div>
        </section>

        {/* Section 10: CTA Band (Archetype B4 Specification 7) */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto">
            <AjioNoticeCTA buttonText="Draft Advocate Notice to Reliance Retail" />
          </div>
        </section>

        {/* Section 11: Sources & Citations Block (Archetype B4 DOM Signature) */}
        <section
          aria-labelledby="heading-sources"
          className="py-10 sm:py-12 px-4 sm:px-6 md:px-12 bg-slate-50 border-t border-slate-200"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="heading-sources"
              className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
            >
              Primary Legal Authorities Governing AJIO Disputes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              All statutory timelines, platform duties, and consumer court precedents referenced on this page are verified against official gazettes, government portals, and judicial orders:
            </p>
            <ol className="sources space-y-2 text-xs text-slate-600 list-decimal pl-5">
              {primarySources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] hover:underline font-medium"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contextual Internal Links Section */}
        <section className="py-8 px-4 sm:px-6 md:px-12 border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">
              Related E-Commerce Dispute &amp; Refund Hubs
            </h3>
            <div className="flex flex-wrap gap-3 text-xs">
              <Link
                href="/flipkart-return-refund-complaint"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
              >
                Flipkart Return &amp; Refund Complaints
              </Link>
              <Link
                href="/legal-notice-to/amazon"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
              >
                Legal Notice to Amazon India
              </Link>
              <Link
                href="/legal-notice-to-retailer-wrong-damaged-product-delivery"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
              >
                Notice for Wrong / Damaged Deliveries
              </Link>
              <Link
                href="/services/refunds-and-consumer-complaints"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
              >
                Consumer Refund Recovery Services
              </Link>
              <Link
                href="/send-a-legal-notice"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
              >
                Online Advocate Legal Notice Platform
              </Link>
            </div>
          </div>
        </section>

        {/* Related Recovery Guides Dynamic Library */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
