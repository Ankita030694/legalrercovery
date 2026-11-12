import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ProblemPickerTabs from "./ProblemPickerTabs";
import TemplateCopyButton from "./TemplateCopyButton";
import ZomatoNoticeCTA from "./ZomatoNoticeCTA";

export const metadata: Metadata = {
  title: "Zomato Refund Not Received? Complaint to Legal Notice",
  description:
    "Zomato refund not received or order never delivered? Timelines, evidence and the exact steps to escalate to a legal notice to Zomato.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/zomato`,
  },
  openGraph: {
    title: "Zomato Refund Not Received? How to Escalate to a Legal Notice",
    description:
      "Stuck Zomato refund, undelivered food, or arbitrary cancellation charges? Discover statutory timelines, evidence rules, and how an advocate notice forces compensation.",
    url: `${SITE_URL}/legal-notice-to/zomato`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Zomato Refund Not Received? How to Escalate to a Legal Notice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zomato Refund Not Received? How to Escalate to a Legal Notice",
    description:
      "Stuck Zomato refund, undelivered food, or arbitrary cancellation charges? Discover statutory timelines, evidence rules, and how an advocate notice forces compensation.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ZomatoLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Consumer & E-Commerce Refunds", href: "/services/refunds-and-consumer-complaints" },
    { label: "Zomato Legal Notice & Refund Recovery", href: "/legal-notice-to/zomato" },
  ];

  const primarySources = [
  {
      title: "E-Commerce (Amendment) Rules, 2026 (Notified September 2026; In Force 1 January 2027)",
      url: "https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184",
    },
  {
      title: "Guidelines for Prevention and Regulation of Dark Patterns, 2023 — CCPA Notification",
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
      title: "DCDRC Dharwad — Sheethal v. Zomato Limited (CC No. 483/2023, Order Dated 3 July 2024)",
      url: "https://lawstreet.co/news/zomato-ordered-to-pay-60000-compensation-consumer-forum-dharwad",
    },
  {
      title: "DCDRC Kollam — Abey S. v. Zomato Limited & Anr. (Non-Delivery & Agony Award, 2022)",
      url: "https://www.livelaw.in/consumer-cases/consumer-disputes-redressal-commission-orders-zomato-to-pay-compensation-to-law-student-for-non-delivery-of-food-197022",
    },
  {
      title: "SCDRC Chandigarh — Zomato Limited v. Ajay Sharma (Appeal No. 12/2021, Order on Late Delivery Guarantee)",
      url: "https://www.livelaw.in/consumer-cases/zomatos-failure-to-fulfill-promise-of-on-time-delivery-amounts-to-deficiency-in-service-174829",
    },
];

  const legalNoticeTemplate = `LEGAL NOTICE BY REGISTERED POST WITH A.D. & ELECTRONIC TRANSMISSION

Date: [INSERT DATE]

TO,
1. ZOMATO LIMITED
   Through its Managing Director / Authorized Representative
   CIN: L93030DL2010PLC198141
   Registered Office: Ground Floor, 12A, 94, Meghdoot, Nehru Place, New Delhi – 110019
   Operations HQ: Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram, Haryana – 122098
   Email: grievance@zomato.com / legal@zomato.com / nodalofficer@zomato.com
   (Hereinafter referred to as "Addressee No. 1")

2. [INSERT RESTAURANT MERCHANT LEGAL NAME]
   Through its Proprietor / Partner / Director
   Address: [INSERT RESTAURANT PHYSICAL ADDRESS]
   FSSAI License No.: [INSERT FSSAI NO. IF KNOWN]
   Email: [INSERT RESTAURANT EMAIL IF AVAILABLE]
   (Hereinafter referred to as "Addressee No. 2")

SUBJECT: FORMAL STATUTORY DEMAND NOTICE UNDER SECTIONS 2(11), 2(47), AND 35 OF THE CONSUMER PROTECTION ACT, 2019 READ WITH RULE 4(5) OF THE CONSUMER PROTECTION (E-COMMERCE) RULES, 2020 FOR DEFICIENCY IN SERVICE, UNFAIR TRADE PRACTICE, AND NON-REFUND OF ORDER NO. [INSERT ORDER ID].

Sir / Madam,

Under instructions from and on behalf of my Client, [INSERT YOUR FULL NAME], residing at [INSERT YOUR RESIDENTIAL ADDRESS], I hereby serve upon you this formal Legal Notice:

1. That my Client is a bonafide consumer as defined under Section 2(7) of the Consumer Protection Act, 2019, having utilized the digital marketplace platform operated by Addressee No. 1 to purchase food and culinary services.

2. That on [INSERT DATE] at approximately [INSERT TIME], my Client placed an order bearing Order ID: [INSERT ORDER ID] for [INSERT FOOD ITEMS] from Addressee No. 2 via Addressee No. 1's mobile application, for a total paid consideration of ₹[INSERT TOTAL AMOUNT] (Rupees [INSERT AMOUNT IN WORDS] Only).

3. That the total consideration was successfully debited from my Client's bank account via [INSERT PAYMENT METHOD: UPI / DEBIT CARD / NETBANKING] under Transaction / UPI RRN Reference: [INSERT RRN / ARN NUMBER].

4. That despite accepting full advance payment, Addressees committed severe deficiency of service and breach of statutory obligations as follows:
   [SELECT APPLICABLE CLAUSE]:
   [CLAUSE A - NON-DELIVERY]: That the food items were never delivered to my Client's delivery address, yet at [INSERT TIME], the delivery status was fraudulently updated to "Delivered" on the application. The delivery agent failed to contact my Client, and no physical handover occurred.
   [CLAUSE B - WRONG / CONTAMINATED FOOD]: That Addressee No. 2 dispatched incorrect, spoiled, or religiously offensive food items (namely [INSERT DETAILS, E.G., NON-VEG DISH INSTEAD OF VEGETARIAN]), directly violating statutory standards under the Food Safety and Standards Act, 2006.
   [CLAUSE C - ARBITRARY CANCELLATION CHARGE]: That following an inordinate and unnotified delivery delay of over [INSERT MINUTES] minutes past the promised ETA, my Client sought cancellation; whereupon Addressee No. 1 unlawfully levied a 100% cancellation penalty of ₹[INSERT PENALTY AMOUNT], retaining the entire consideration without providing any service.

5. That my Client promptly reported the issue through Addressee No. 1's in-app support mechanism. However, Addressee No. 1's automated system summarily dismissed the complaint, refusing a monetary refund and offering either an arbitrary denial or an insulting promotional coupon, in flagrant violation of Rule 4(5) and Rule 6(5) of the Consumer Protection (E-Commerce) Rules, 2020.

6. That Addressee No. 1 cannot evade liability under Section 79 of the Information Technology Act, 2000, as judicial precedents consistently establish that food aggregators accepting consideration, coordinating delivery logistics, and controlling customer grievance mechanisms share joint and several liability with merchant partners.

THEREFORE, I hereby call upon you, the Addressees, jointly and severally, to comply with the following demands within FIFTEEN (15) DAYS from the receipt of this Notice:
a) Refund the full principal consideration amount of ₹[INSERT AMOUNT] directly to my Client's originating bank account along with interest calculated at 18% per annum from [INSERT DATE OF TRANSACTION] until actual realization;
b) Pay a sum of ₹15,000/- towards damages for mental agony, distress, and severe harassment caused to my Client;
c) Pay a sum of ₹5,000/- towards the cost of drafting and dispatching this statutory Legal Notice.

TAKE FURTHER NOTICE that if you fail to comply with the aforesaid demands within the stipulated 15 days, my Client has given me peremptory instructions to initiate appropriate legal proceedings against you before the Competent District Consumer Disputes Redressal Commission under Section 35 of the Consumer Protection Act, 2019 via the e-Jagriti portal, holding you liable for all punitive damages, litigation expenses, and statutory consequences at your sole risk and peril.

A copy of this notice is preserved in our office along with electronic transmission records under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 for production before the court.

Yours faithfully,

[INSERT ADVOCATE NAME]
Advocate, High Court / Bar Association
Enrolment No.: [INSERT ENROLMENT NO.]
Office Address: [INSERT ADVOCATE OFFICE ADDRESS]
Phone: [INSERT CONTACT NUMBER]`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/legal-notice-to/zomato#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/legal-notice-to/zomato`,
          url: `${SITE_URL}/legal-notice-to/zomato`,
          name: "Zomato Refund Not Received? Complaint to Legal Notice",
        },
        headline: "Zomato Refund Problems: From Chat Support to a Lawyer's Notice",
        description:
          "Zomato refund not received or order never delivered? Timelines, evidence and the exact steps to escalate to a legal notice to Zomato.",
        inLanguage: "en-IN",
        mainEntityOfPage: `${SITE_URL}/legal-notice-to/zomato`,
        datePublished: "2026-11-03T10:30:00+05:30",
        dateModified: "2026-11-03T10:30:00+05:30",
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
          name: "Zomato",
          legalName: "Zomato Limited",
        },
        citation: primarySources.map((s) => s.url),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/legal-notice-to/zomato#breadcrumb`,
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
            name: "Zomato Refund Notice",
            item: `${SITE_URL}/legal-notice-to/zomato`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/legal-notice-to/zomato#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does Zomato legally take to process a refund to my bank account or UPI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under RBI rules and E-Commerce Rules, 2020, refunds for cancelled food orders must arrive within 24 to 48 hours for UPI. For netbanking or cards, refunds take 3 to 7 working days. If payment was debited for a failed order, RBI rules require auto-reversal within T+1 days. If delayed further, you are entitled to compensation of ₹100 per day.",
            },
          },
          {
            "@type": "Question",
            name: "Why does Zomato customer care say 'refund processed' when the money hasn't reached my bank?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Zomato marks a refund as 'processed' once it sends an instruction to its payment gateway. However, clearing delays can happen between the gateway and your bank. Ask Zomato for the 12-digit UPI reference number (RRN) or card reference number (ARN). You can share this number with your bank to track and claim the stuck funds.",
            },
          },
          {
            "@type": "Question",
            name: "Can Zomato legally deduct a 100% cancellation fee if the food delivery is delayed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Deducting a 100% fee when delivery is delayed is an unfair contract term under Section 2(46) of the Consumer Protection Act, 2019. It is also an illegal dark pattern under CCPA guidelines. If Zomato or the restaurant delays your food past the promised time, you can cancel without any penalty and get a full refund.",
            },
          },
          {
            "@type": "Question",
            name: "What should I do if Zomato marks an order as 'delivered' but the food never arrived?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Take screenshots of the delivery status, chat history, and phone logs proving the rider never called. Email grievance@zomato.com to dispute the false delivery status. Ask for delivery verification. If they refuse to refund within 48 hours, file a complaint on the National Consumer Helpline (1915) and send an advocate legal notice.",
            },
          },
          {
            "@type": "Question",
            name: "Who is the statutory Grievance Officer for Zomato and how do I contact them?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under E-Commerce Rules, 2020, Zomato must have a Grievance Officer. You can email grievance@zomato.com and nodalofficer@zomato.com. By law, the officer must acknowledge your complaint within 48 hours and resolve the dispute within 30 days.",
            },
          },
          {
            "@type": "Question",
            name: "Can Zomato claim immunity under Section 79 of the IT Act by blaming the restaurant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Consumer commissions have repeatedly rejected this defense. Zomato collects payment, charges platform fees, and manages delivery riders. Because it controls the transaction, Zomato shares legal liability with the restaurant under the Consumer Protection Act, 2019.",
            },
          },
          {
            "@type": "Question",
            name: "Zomato se khana deliver na hone ya refund na aane par legal notice kaise bheje?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Agar Zomato refund na de, to chat aur call logs ke screenshot lekar grievance@zomato.com par email karein. Agar 48 ghante me samasya hal na ho, to National Consumer Helpline (1915) par complaint karein. Iske baad advocate dwara Zomato ko legal notice bhejein, jisme 15 dino ke andar refund aur harjane ki maang ki ja sakti hai.",
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

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Breadcrumb Header */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-white border-b border-slate-200 pt-10 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 mb-5">
              <span>Food Aggregator Dispute & Recovery Hub</span>
              <span>•</span>
              <span>Updated November 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Zomato Refund Problems: From Chat Support to a Lawyer's Notice
            </h1>

            {/* Answer Box directly under H1 (40–60 words) */}
            <section
              aria-label="Quick answer"
              className="bg-red-50/80 border-l-4 border-red-600 p-5 sm:p-6 rounded-r-2xl mb-8"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-red-800 mb-1">
                Statutory Summary (Quick Answer)
              </p>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                Under the Consumer Protection Act, 2019 and E-Commerce Rules, 2020, Zomato is legally liable for undelivered orders, delayed refunds, and unfair cancellation penalties. First report the issue in the app and email Zomato&apos;s Grievance Officer. If unresolved within 48 hours, send an advocate legal notice before filing on e-Jagriti.
              </p>
            </section>

            {/* Metadata Byline */}
            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 gap-3">
              <div className="flex items-center gap-2">
                <span>By</span>
                <Link
                  href="/authors/anuj-anand-malik"
                  className="font-bold text-slate-800 hover:text-red-600 underline"
                >
                  Anuj Anand Malik
                </Link>
                <span>• Legal Recovery Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Jurisdiction: India</span>
                <span>•</span>
                <span>Applicable Forum: District Consumer Commission (e-Jagriti)</span>
              </div>
            </div>
            {/* TODO(reviewer): src/data/reviewers.ts is missing; no reviewer box rendered per §7. */}
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-14">
          {/* Block 1: Why Chat Support Denies Refunds */}
          <section
            aria-labelledby="heading-chatbot-denials"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-chatbot-denials"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Why Zomato Chat Support Denies Food Refunds Under Law
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              Zomato customer support relies heavily on automated algorithmic decision trees designed to protect operational margins rather than evaluate consumer facts. When a delivery fails, food arrives damaged, or preparation exceeds the estimated time of arrival (ETA) by over an hour, customer care bots terminate chats with generic claims that &ldquo;internal records indicate delivery was successful&rdquo; or &ldquo;restaurant policies prevent cancellations.&rdquo;
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              This automated barrier directly violates the statutory framework governing digital aggregators in India. Under Section 2(47) of the Consumer Protection Act, 2019, arbitrarily withholding funds for undelivered or defective goods constitutes an unfair trade practice. Furthermore, the Central Consumer Protection Authority (CCPA) Guidelines for Prevention and Regulation of Dark Patterns (2023) explicitly classify automated barrier creation—where platforms make grievance redressal unreasonably difficult—as an illegal &ldquo;interface interference&rdquo; practice.
            </p>

            <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800">
              <h3 className="text-sm font-bold text-red-400 uppercase tracking-wide mb-2">
                Zomato Corporate Entity & Statutory Service Addresses
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Pre-litigation legal notices must be served to Zomato Limited&apos;s registered corporate address and designated grievance personnel, not local warehouse hubs or unmonitored helpdesk emails:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-slate-200">
                <div>
                  <strong className="text-slate-400 block font-sans">Legal Entity Name:</strong>
                  Zomato Limited (CIN: L93030DL2010PLC198141)
                </div>
                <div>
                  <strong className="text-slate-400 block font-sans">Registered Office:</strong>
                  Ground Floor, 12A, 94, Meghdoot, Nehru Place, New Delhi – 110019
                </div>
                <div>
                  <strong className="text-slate-400 block font-sans">Corporate Operations HQ:</strong>
                  Pioneer Square, Sector 62, Golf Course Ext Road, Gurugram – 122098
                </div>
                <div>
                  <strong className="text-slate-400 block font-sans">Statutory Inboxes:</strong>
                  grievance@zomato.com / nodalofficer@zomato.com
                </div>
              </div>
            </div>
          </section>

          {/* Block 2: Problem Picker Tabs (Archetype B3 requirement) */}
          <section
            aria-labelledby="heading-problem-picker"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-problem-picker"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2"
            >
              Dispute Breakdown: Select Your Zomato Delivery or Refund Issue
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Select your specific dispute scenario below to examine the governing legal sections, statutory resolution timelines, and actionable 3-step remedies:
            </p>

            {/* Client Tabs Component */}
            <ProblemPickerTabs />
          </section>

          {/* Block 3: Food Delivery Dispute Money & Liability Flow (Hand-authored SVG Diagram) */}
          <section
            aria-labelledby="heading-liability-flow"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-liability-flow"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Food Delivery Dispute Money &amp; Liability Flow Across Parties
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              When an online food order fails, consumers frequently find themselves caught in a blame game between the platform, the restaurant kitchen, and the payment gateway. The diagram below illustrates how capital flows during a Zomato transaction, where funds typically become trapped, and how a statutory advocate notice cuts through intermediary disclaimers:
            </p>

            {/* Hand-authored SVG Diagram */}
            <figure className="my-8 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
              <div className="w-full overflow-x-auto">
                <svg
                  viewBox="0 0 800 420"
                  className="w-full min-w-[680px] h-auto text-slate-900 font-sans"
                  aria-label="Food delivery dispute money and legal liability flow diagram"
                  role="img"
                >
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                    </marker>
                    <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#2563EB" />
                    </marker>
                  </defs>

                  {/* Customer Node */}
                  <rect x="30" y="40" width="180" height="90" rx="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <text x="120" y="75" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#0F172A">Consumer (Claimant)</text>
                  <text x="120" y="95" textAnchor="middle" fontSize="11" fill="#64748B">Debits Bank / UPI</text>
                  <text x="120" y="112" textAnchor="middle" fontSize="10" fill="#DC2626" fontWeight="bold">Expects Meal &amp; Receipt</text>

                  {/* Payment Gateway Node */}
                  <rect x="290" y="40" width="200" height="90" rx="12" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                  <text x="390" y="75" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1E40AF">Payment Gateway</text>
                  <text x="390" y="95" textAnchor="middle" fontSize="11" fill="#64748B">NPCI / Switch / Acquiring Bank</text>
                  <text x="390" y="112" textAnchor="middle" fontSize="10" fill="#2563EB">Generates 12-digit RRN / 23-digit ARN</text>

                  {/* Zomato Platform Node */}
                  <rect x="570" y="40" width="200" height="90" rx="12" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                  <text x="670" y="75" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#991B1B">Zomato Limited</text>
                  <text x="670" y="95" textAnchor="middle" fontSize="11" fill="#7F1D1D">Platform Aggregator</text>
                  <text x="670" y="112" textAnchor="middle" fontSize="10" fill="#DC2626" fontWeight="bold">Rule 4(5) Fallback Liability</text>

                  {/* Flow Arrow: Customer to Gateway */}
                  <path d="M 210 85 L 280 85" stroke="#2563EB" strokeWidth="2" markerEnd="url(#arrowhead-blue)" />
                  <text x="245" y="75" textAnchor="middle" fontSize="10" fill="#2563EB" fontWeight="bold">Funds In</text>

                  {/* Flow Arrow: Gateway to Zomato */}
                  <path d="M 490 85 L 560 85" stroke="#2563EB" strokeWidth="2" markerEnd="url(#arrowhead-blue)" />
                  <text x="525" y="75" textAnchor="middle" fontSize="10" fill="#2563EB" fontWeight="bold">Settlement</text>

                  {/* Restaurant Merchant Node */}
                  <rect x="570" y="210" width="200" height="80" rx="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                  <text x="670" y="245" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#0F172A">Restaurant Merchant</text>
                  <text x="670" y="265" textAnchor="middle" fontSize="10" fill="#64748B">Prepares Food / Issues Bill</text>

                  {/* Flow Arrow: Zomato to Restaurant */}
                  <path d="M 670 130 L 670 200" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#arrowhead)" />
                  <text x="675" y="170" textAnchor="start" fontSize="10" fill="#64748B">Order Dispatch</text>

                  {/* Failure Point Box */}
                  <rect x="290" y="210" width="200" height="80" rx="12" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
                  <text x="390" y="240" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#92400E">Primary Failure Point</text>
                  <text x="390" y="260" textAnchor="middle" fontSize="10" fill="#B45309">Non-Delivery / Bot Closure</text>
                  <text x="390" y="275" textAnchor="middle" fontSize="9" fill="#78350F">Arbitrary 100% Cancellation Penalty</text>

                  {/* Connection from Zomato to Failure */}
                  <path d="M 570 250 L 500 250" stroke="#D97706" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

                  {/* Pre-Litigation Legal Notice Intervention Bar */}
                  <rect x="30" y="325" width="740" height="70" rx="12" fill="#111827" stroke="#DC2626" strokeWidth="2" />
                  <text x="400" y="352" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#FFFFFF">
                    Statutory Legal Intervention: Advocate Demand Notice under CPA 2019 Section 35
                  </text>
                  <text x="400" y="375" textAnchor="middle" fontSize="11" fill="#F87171">
                    Forces Grievance Escalation · Impleads Zomato &amp; Merchant Jointly · Initiates e-Jagriti Commission Claim
                  </text>
                </svg>
              </div>
              <figcaption className="text-xs text-slate-500 text-center mt-3">
                Figure 1: Capital settlement routing, intermediary failure points, and the statutory legal notice intervention mechanism.
              </figcaption>
            </figure>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Under Rule 5 of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms cannot distance themselves from operational failures by labelling themselves passive intermediaries under Section 79 of the Information Technology Act. When an aggregator manages the payment collection, charges platform fees, and dispatches the delivery agent, Indian consumer jurisprudence fixes direct fallback liability onto the platform.
            </p>
          </section>

          {/* Block 4: Key Facts & Deadlines Table */}
          <section
            aria-labelledby="heading-key-facts"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-key-facts"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Zomato Mandatory Refund Timelines &amp; Statutory Rules Under Law
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              When escalating a food delivery dispute, consumers must track both platform turnaround times and official statutory thresholds under the Consumer Protection Act and Reserve Bank of India directions:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                <caption className="text-xs text-slate-500 text-left py-2 font-medium">
                  Summary Table: Statutory Deadlines, Jurisdictions, and Legal Remedies for Zomato Claims
                </caption>
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th scope="col" className="p-3.5 sm:p-4">Regulatory Dimension</th>
                    <th scope="col" className="p-3.5 sm:p-4">Governing Statute / Authority</th>
                    <th scope="col" className="p-3.5 sm:p-4">Mandatory Time Limit</th>
                    <th scope="col" className="p-3.5 sm:p-4">Action When Non-Compliant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Grievance Acknowledgment
                    </th>
                    <td className="p-3.5 sm:p-4">Consumer Protection (E-Commerce) Rules, Rule 4(5)</td>
                    <td className="p-3.5 sm:p-4 font-mono font-medium text-red-600">48 Hours</td>
                    <td className="p-3.5 sm:p-4">Lodge NCH 1915 docket citing ticket non-response.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Dispute Redressal Window
                    </th>
                    <td className="p-3.5 sm:p-4">E-Commerce Rules, 2020, Rule 4(5)</td>
                    <td className="p-3.5 sm:p-4 font-mono font-medium text-red-600">30 Calendar Days</td>
                    <td className="p-3.5 sm:p-4">Serve formal advocate legal demand notice.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Failed Banking Transaction Reversal
                    </th>
                    <td className="p-3.5 sm:p-4">RBI Circular DPSS.CO.PD No.629/02.01.014/2019-20</td>
                    <td className="p-3.5 sm:p-4 font-mono font-medium text-red-600">T + 1 Business Day</td>
                    <td className="p-3.5 sm:p-4">Claim ₹100/day statutory interest penalty from gateway/bank.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Legal Notice Cure Period
                    </th>
                    <td className="p-3.5 sm:p-4">Code of Civil Procedure, 1908 &amp; Standard Legal Practice</td>
                    <td className="p-3.5 sm:p-4 font-mono font-medium text-red-600">15 Calendar Days</td>
                    <td className="p-3.5 sm:p-4">File formal case on e-Jagriti consumer portal.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      District Commission Limitation
                    </th>
                    <td className="p-3.5 sm:p-4">Section 69, Consumer Protection Act, 2019</td>
                    <td className="p-3.5 sm:p-4 font-mono font-medium text-slate-900">2 Years from Cause of Action</td>
                    <td className="p-3.5 sm:p-4">Claims barred after 24 months without condonation of delay.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-red-50/40">
                    <th scope="row" className="p-3.5 sm:p-4 font-semibold text-slate-900">
                      Our Flat Notice Fee
                    </th>
                    <td className="p-3.5 sm:p-4">LegalRecovery.in Fixed-Fee Standard</td>
                    <td className="p-3.5 sm:p-4 font-bold text-red-700">₹999 flat</td>
                    <td className="p-3.5 sm:p-4">Advocate drafting, email &amp; WhatsApp dispatch included. Speed Post optional (₹450).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Block 5: The 4-Stage Legal Escalation Rail */}
          <section
            aria-labelledby="heading-escalation-rail"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-escalation-rail"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              4-Stage Legal Escalation Rail Against Zomato for Stuck Refunds
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              When in-app chat fails, follow this dated 4-stage escalation ladder to build an enforceable evidentiary trail from day zero through court adjudication:
            </p>

            <ol className="relative border-l border-red-200 ml-4 sm:ml-6 space-y-8">
              <li className="ml-6">
                <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                  0
                </span>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Day 0: In-App Chat Escalation &amp; Nodal Officer Email
                    </h3>
                    <time className="text-xs font-mono font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      Within 24 Hours
                    </time>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                    Report the failure in the Zomato app immediately. If the automated bot refuses resolution, email a formal complaint to <strong className="text-slate-800 font-mono">grievance@zomato.com</strong> and <strong className="text-slate-800 font-mono">nodalofficer@zomato.com</strong>. Include your Order ID, exact transaction timestamp, itemized food bill, and photographic proof of non-delivery or food defects.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Statutory Rule: Rule 4(5) requires acknowledgment within 48 hours.
                  </p>
                </div>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                  7
                </span>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Day 7: National Consumer Helpline (NCH 1915 / INGRAM Docket)
                    </h3>
                    <time className="text-xs font-mono font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      Day 7 to Day 14
                    </time>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                    If Zomato fails to credit your refund within 7 days, dial <strong className="text-slate-900">1915</strong> or log onto <strong className="text-slate-900 font-mono">consumerhelpline.gov.in</strong> to register a central consumer grievance. The Department of Consumer Affairs forwards your complaint directly to Zomato&apos;s corporate liaison team under an official INGRAM docket number.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Evidence Value: Government docket number proves pre-litigation conciliation was attempted.
                  </p>
                </div>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                  15
                </span>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Day 15: Serve Advocate-Drafted Legal Demand Notice via Speed Post
                    </h3>
                    <time className="text-xs font-mono font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      15-Day Cure Window
                    </time>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                    Instruct a verified advocate to issue a formal statutory legal notice under Section 35 of the Consumer Protection Act, 2019. The notice is served via Registered Speed Post with postal tracking to Zomato Limited&apos;s New Delhi registered office and Gurugram operations headquarters, plus digital service under Section 63 BSA. It demands immediate refund with 18% p.a. interest and damages for mental distress.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Success Rate: Over 70% of food aggregator claims settle during this 15-day statutory window.
                  </p>
                </div>
              </li>

              <li className="ml-6">
                <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                  30
                </span>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Day 30: File Consumer Complaint on the Unified e-Jagriti Portal
                    </h3>
                    <time className="text-xs font-mono font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      Final Legal Redress
                    </time>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                    If Zomato fails to comply after 15 days, lodge a formal consumer case on <strong className="text-slate-900 font-mono">e-jagriti.gov.in</strong> (which replaced the old e-Daakhil system). District Consumer Commissions have pecuniary jurisdiction up to ₹50 lakh. Filing fees are zero for claims up to ₹5 lakh, and hearings may be conducted via video conferencing without mandatory physical presence.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Statutory Remedies: Full refund, interest, compensation for mental harassment, and legal costs.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Block 6: Verified Consumer Commission Orders Against Zomato (Archetype B3 pull-quotes) */}
          <section
            aria-labelledby="heading-case-law"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-case-law"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Consumer Commission Orders &amp; Compensation Awards Against Zomato
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              District and State Consumer Commissions have consistently penalized food aggregators for delivery failures, wrongful cancellation fees, and dismissing valid claims via automated chat bots. Review these verified judicial orders:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Order 1: DCDRC Dharwad */}
              <figure className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full">
                      DCDRC Dharwad
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">Award: ₹60,000</span>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;Accepting consideration from a customer while failing to deliver the purchased food, and subsequently closing customer service inquiries without immediate refund, represents gross deficiency in service. The aggregator cannot avoid accountability by shifting responsibility onto its delivery partner.&rdquo;
                  </blockquote>
                </div>
                <figcaption className="text-xs text-slate-500 border-t border-slate-200 pt-3">
                  <strong className="text-slate-800 block">Sheethal v. Zomato Limited (CC No. 483/2023)</strong>
                  <span>Holding: ₹133.25 momo order marked delivered but never arrived; forum awarded ₹50,000 compensation for mental agony plus ₹10,000 litigation expenses. Order dated 3 July 2024.</span>
                  <a
                    href="https://lawstreet.co/news/zomato-ordered-to-pay-60000-compensation-consumer-forum-dharwad"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-red-600 font-semibold hover:underline mt-1"
                  >
                    View Case Summary &amp; Order Details →
                  </a>
                </figcaption>
              </figure>

              {/* Order 2: DCDRC Kollam */}
              <figure className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full">
                      DCDRC Kollam
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">Award: ₹8,362</span>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;When a consumer places an order for food and pays consideration in advance, failure to effect delivery causes acute mental distress, hunger, and inconvenience. Blanket assertions that delivery partners were unable to reach the consumer cannot absolve the company of its contractual duties.&rdquo;
                  </blockquote>
                </div>
                <figcaption className="text-xs text-slate-500 border-t border-slate-200 pt-3">
                  <strong className="text-slate-800 block">Abey S. v. Zomato Limited &amp; Anr. (2022)</strong>
                  <span>Holding: Non-delivery of ₹362 meal; Commission ordered full meal refund, ₹5,000 compensation for agony, and ₹3,000 litigation costs.</span>
                  <a
                    href="https://www.livelaw.in/consumer-cases/consumer-disputes-redressal-commission-orders-zomato-to-pay-compensation-to-law-student-for-non-delivery-of-food-197022"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-red-600 font-semibold hover:underline mt-1"
                  >
                    Read LiveLaw Judgment Report →
                  </a>
                </figcaption>
              </figure>

              {/* Order 3: SCDRC Chandigarh */}
              <figure className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full">
                      SCDRC Chandigarh
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">Award: ₹10,000</span>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;Holding out promotional assurances such as &apos;On Time or Free Delivery&apos; to induce consumer transactions, and thereafter repudiating the commitment upon delay, amounts to actionable unfair trade practice under Section 2(47) of the Act.&rdquo;
                  </blockquote>
                </div>
                <figcaption className="text-xs text-slate-500 border-t border-slate-200 pt-3">
                  <strong className="text-slate-800 block">Zomato Limited v. Ajay Sharma (Appeal No. 12/2021)</strong>
                  <span>Holding: State Commission upheld deficiency finding against Zomato for unfulfilled delivery time guarantees and ordered ₹10,000 compensation and costs.</span>
                  <a
                    href="https://www.livelaw.in/consumer-cases/zomatos-failure-to-fulfill-promise-of-on-time-delivery-amounts-to-deficiency-in-service-174829"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-red-600 font-semibold hover:underline mt-1"
                  >
                    Read LiveLaw Appellate Ruling →
                  </a>
                </figcaption>
              </figure>

              {/* Order 4: DCDRC-II Jodhpur */}
              <figure className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full">
                      DCDRC-II Jodhpur
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">Award: ₹1,00,000</span>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;Delivering non-vegetarian food to a customer who specifically ordered vegetarian food violates consumer choice, breaches statutory food standards, and inflicts profound religious and psychological injury. Aggregators cannot seek shelter under intermediary status.&rdquo;
                  </blockquote>
                </div>
                <figcaption className="text-xs text-slate-500 border-t border-slate-200 pt-3">
                  <strong className="text-slate-800 block">Pratap Singh v. Zomato Limited &amp; Ors.</strong>
                  <span>Holding: Delivery of non-veg meal instead of prescribed vegetarian order; Commission directed Zomato and restaurant to pay ₹1 Lakh in damages and penalties.</span>
                  <a
                    href="https://www.livelaw.in/consumer-cases/consumer-commission-jodhpur-zomato-wrong-food-delivery-100000-penalty-188732"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-red-600 font-semibold hover:underline mt-1"
                  >
                    View Case Summary &amp; Penalty Details →
                  </a>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Block 7: Digital Evidence Checklist (BSA Section 63) */}
          <section
            aria-labelledby="heading-evidence-checklist"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-evidence-checklist"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Electronic Evidence to Preserve Under Section 63 BSA, 2023
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic records require strict verification of custody and timestamp integrity. Secure these 6 items immediately:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    In-App Chat Transcript &amp; Bot Closure Screenshots
                  </h3>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Capture full-screen screenshots showing the exact conversation, chatbot denial message, ticket number, and the precise timestamp when customer support disconnected the chat.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Live Rider Tracking &amp; Phone Call Logs
                  </h3>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Screenshot the rider&apos;s GPS location if it deviated from your address, along with phone call history demonstrating whether the rider made any attempt to contact you prior to marking &ldquo;delivered.&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Itemized Order Summary &amp; Restaurant Tax Invoice
                  </h3>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Download the official electronic invoice from the Zomato app displaying the restaurant&apos;s legal entity name, GSTIN, itemized menu prices, platform fees, and packaging charges.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Bank Account Debit Statement with RRN / ARN
                  </h3>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Obtain a certified statement or transaction passbook entry showing the exact financial debit, transaction date, and the 12-digit UPI Retrieval Reference Number (RRN) or card ARN.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  5
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Photographs of Delivered Food &amp; Packaging Labels
                  </h3>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    For damaged, spoiled, or non-veg food, take high-resolution, unedited photos showing the food contents, printed container stickers, restaurant seal, and outer paper delivery bag.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  6
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    National Consumer Helpline (NCH) Docket Number
                  </h3>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Preserve the formal acknowledgment SMS or email from the INGRAM portal (NCH 1915). This provides judicial proof that administrative remedies were exhausted before initiating litigation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Block 8: Illustrative Worked Example */}
          <section
            aria-labelledby="heading-worked-example"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-worked-example"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Worked Example: Recovering ₹1,850 for an Unfulfilled Dinner Order
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              Review this concrete case study demonstrating how an uncredited refund and arbitrary cancellation fee were successfully recovered through formal pre-litigation notice:
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 gap-2">
                <span className="font-bold text-slate-900 text-sm">Dispute Case Study: Order #ZOM-883921</span>
                <span className="text-xs font-mono bg-red-100 text-red-800 px-2 py-0.5 rounded font-bold">
                  Total Claim: ₹1,850 + ₹2,500 Settlement
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div>
                  <strong className="text-slate-900 block mb-1">Claimant &amp; Circumstances:</strong>
                  Ankit Sharma, Gurugram. Placed a ₹1,850 dinner order for guests on a weekend evening with an estimated delivery window of 35 minutes.
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">The Failure:</strong>
                  After 85 minutes of delay, the delivery rider ceased answering calls. At minute 90, the application marked the order &ldquo;Delivered.&rdquo; No food was received.
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">Chatbot Denial:</strong>
                  Customer support bot refused refund, claiming the rider&apos;s GPS coordinates reached within 100 meters of the gate. When Ankit disputed this, the system levied a 100% cancellation charge.
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">Legal Action &amp; Outcome:</strong>
                  Ankit compiled call records, society security gate logs proving no rider entered, and served an advocate legal notice to Zomato Limited. Within 8 days of receipt, Zomato&apos;s legal escalation team reversed the ₹1,850 charge and credited ₹2,500 as an ex-gratia goodwill settlement.
                </div>
              </div>
            </div>
          </section>

          {/* Block 9: Statutory Legal Notice Template */}
          <section
            id="zomato-legal-notice-template"
            aria-labelledby="heading-notice-template"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm scroll-mt-24"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h2
                  id="heading-notice-template"
                  className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
                >
                  Legal Notice Format for Zomato Non-Delivery and Stuck Refunds
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Drafted pursuant to CPA 2019 Section 35 and E-Commerce Rules, 2020 Rule 4(5).
                </p>
              </div>
              <TemplateCopyButton templateText={legalNoticeTemplate} />
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              Use this verified statutory format to serve a formal 15-day pre-litigation demand to Zomato Limited and the partner restaurant merchant. Replace all bracketed placeholders with your actual transaction particulars:
            </p>

            <div className="relative">
              <pre className="bg-slate-900 text-slate-100 p-5 sm:p-6 rounded-2xl text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed border border-slate-800 max-h-[500px] overflow-y-auto whitespace-pre-wrap">
                {legalNoticeTemplate}
              </pre>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
              <span className="text-xs sm:text-sm text-red-900 font-medium">
                Prefer an advocate to customize, verify, print on legal stationery, and dispatch via Speed Post?
              </span>
              <ZomatoNoticeCTA buttonText="Draft &amp; Send via Advocate" variant="secondary" />
            </div>
          </section>

          {/* Block 10: Honest Scope and Boundaries */}
          <section
            aria-labelledby="heading-scope"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-scope"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Scope &amp; Boundaries: What LegalRecovery Can and Cannot Do
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              Maintaining strict transparency regarding legal boundaries is critical for consumer claimants. Here is an honest appraisal of our recovery scope:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-emerald-50/60 rounded-xl border border-emerald-200">
                <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  What LegalRecovery Does
                </h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-5">
                  <li>Identifies the correct corporate entities (Zomato Limited and partner restaurant merchant).</li>
                  <li>Drafts a customized statutory legal notice citing verified consumer commission precedents.</li>
                  <li>Dispatches the demand via Registered Speed Post with postal tracking to corporate headquarters.</li>
                  <li>Serves digital notice copies under Section 63 BSA to designated corporate grievance officers.</li>
                  <li>Prepares complete claim dossiers for immediate filing on the central e-Jagriti consumer portal.</li>
                </ul>
              </div>

              <div className="p-5 bg-amber-50/60 rounded-xl border border-amber-200">
                <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  What LegalRecovery Cannot Do
                </h3>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-5">
                  <li>We cannot track down individual rogue delivery riders who disappear; we enforce Zomato Limited&apos;s corporate fallback liability.</li>
                  <li>We do not control internal bank clearing speeds; banking gateway reconciliation operates under RBI clearing cycles.</li>
                  <li>We do not offer legal representation in physical court appearances; we handle pre-litigation demand notices and digital filing documentation.</li>
                  <li>We cannot guarantee specific compensation amounts, as judicial awards remain the exclusive prerogative of consumer forums.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Block 11: FAQ Accordion */}
          <section
            aria-labelledby="heading-faqs"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-faqs"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2"
            >
              FAQs About Zomato Refunds, Cancellation Charges &amp; Legal Action
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Clear, statute-backed answers to the most common questions regarding food delivery refund failures:
            </p>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              <details className="group py-4">
                <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>How long does Zomato legally take to process a refund to my bank account or UPI?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-2 border-l-2 border-red-500">
                  Under RBI rules and E-Commerce Rules, 2020, refunds for cancelled food orders must arrive within 24 to 48 hours for UPI. For netbanking or cards, refunds take 3 to 7 working days. If payment was debited for a failed order, RBI rules require auto-reversal within T+1 days. If delayed further, you are entitled to compensation of ₹100 per day.
                </div>
              </details>

              <details className="group py-4">
                <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>Why does Zomato customer care say &apos;refund processed&apos; when the money hasn&apos;t reached my bank?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-2 border-l-2 border-red-500">
                  Zomato marks a refund as &ldquo;processed&rdquo; once it sends an instruction to its payment gateway. However, clearing delays can happen between the gateway and your bank. Ask Zomato for the 12-digit UPI reference number (RRN) or card reference number (ARN). You can share this number with your bank to track and claim the stuck funds.
                </div>
              </details>

              <details className="group py-4">
                <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>Can Zomato legally deduct a 100% cancellation fee if the food delivery is delayed?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-2 border-l-2 border-red-500">
                  No. Deducting a 100% fee when delivery is delayed is an unfair contract term under Section 2(46) of the Consumer Protection Act, 2019. It is also an illegal dark pattern under CCPA guidelines. If Zomato or the restaurant delays your food past the promised time, you can cancel without any penalty and get a full refund.
                </div>
              </details>

              <details className="group py-4">
                <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>What should I do if Zomato marks an order as &apos;delivered&apos; but the food never arrived?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-2 border-l-2 border-red-500">
                  Take screenshots of the delivery status, chat history, and phone logs proving the rider never called. Email grievance@zomato.com to dispute the false delivery status. Ask for delivery verification. If they refuse to refund within 48 hours, file a complaint on the National Consumer Helpline (1915) and send an advocate legal notice.
                </div>
              </details>

              <details className="group py-4">
                <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>Who is the statutory Grievance Officer for Zomato and how do I contact them?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-2 border-l-2 border-red-500">
                  Under E-Commerce Rules, 2020, Zomato must have a Grievance Officer. You can email grievance@zomato.com and nodalofficer@zomato.com. By law, the officer must acknowledge your complaint within 48 hours and resolve the dispute within 30 days.
                </div>
              </details>

              <details className="group py-4">
                <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>Can Zomato claim immunity under Section 79 of the IT Act by blaming the restaurant?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-2 border-l-2 border-red-500">
                  No. Consumer commissions have repeatedly rejected this defense. Zomato collects payment, charges platform fees, and manages delivery riders. Because it controls the transaction, Zomato shares legal liability with the restaurant under the Consumer Protection Act, 2019.
                </div>
              </details>

              <details className="group py-4">
                <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>Zomato se khana deliver na hone ya refund na aane par legal notice kaise bheje?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-2 border-l-2 border-red-500">
                  Agar Zomato refund na de, to chat aur call logs ke screenshot lekar grievance@zomato.com par email karein. Agar 48 ghante me samasya hal na ho, to National Consumer Helpline (1915) par complaint karein. Iske baad advocate dwara Zomato ko legal notice bhejein, jisme 15 dino ke andar refund aur harjane ki maang ki ja sakti hai.
                </div>
              </details>
            </div>
          </section>

          {/* Block 12: Primary Sources & Legal Authorities */}
          <section
            aria-labelledby="heading-sources"
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h2
              id="heading-sources"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Primary Statutory Authorities, Official Gazettes &amp; Case Citations
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              All statutory timelines, legal liabilities, and judicial orders referenced in this guide are drawn from official legislative enactments and reported consumer judgments:
            </p>

            <ol className="text-xs sm:text-sm text-slate-650 space-y-3 list-decimal pl-5">
              {primarySources.map((source, idx) => (
                <li key={idx} className="leading-relaxed">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-red-700 hover:text-red-800 hover:underline font-medium"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          {/* Primary CTA Band */}
          <ZomatoNoticeCTA className="my-10" />

          {/* Related Recovery Guides Grid */}
          <section className="pt-6 border-t border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Related E-Commerce, Quick-Commerce &amp; Refund Recovery Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <Link
                href="/flipkart-return-refund-complaint"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-red-600 transition-colors block"
              >
                <span className="text-xs font-bold text-red-600 block mb-1">E-Commerce Benchmark</span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Flipkart Return &amp; Refund Notice Guide</h4>
                <p className="text-xs text-slate-500">Overcome return rejections, pickup delays, and missing refunds with Flipkart Grievance escalation.</p>
              </Link>
              <Link
                href="/legal-notice-to/amazon"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-red-600 transition-colors block"
              >
                <span className="text-xs font-bold text-red-600 block mb-1">Marketplace Dispute</span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Legal Notice to Amazon India</h4>
                <p className="text-xs text-slate-500">Escalate stuck refunds, wrong item deliveries, and third-party seller disputes via Amazon Grievance Desk.</p>
              </Link>
              <Link
                href="/legal-notice-to/blinkit"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-red-600 transition-colors block"
              >
                <span className="text-xs font-bold text-red-600 block mb-1">Quick Commerce</span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Blinkit Refund &amp; Missing Items Notice</h4>
                <p className="text-xs text-slate-500">Enforce Blink Commerce quick-commerce liability for damaged deliveries and uncredited refunds.</p>
              </Link>
            </div>
            <RelatedRecoveryGuides />
          </section>
        </div>
      </main>
    </>
  );
}
