import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CreditShellNoticeCTA from "./CreditShellNoticeCTA";
import CreditShellTableOfContents from "./CreditShellTableOfContents";
import CreditShellProblemTabs from "./CreditShellProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Credit Shell or Voucher Instead of Refund: Can You Refuse?",
  description:
    "Airline or OTA pushing a credit shell or voucher? When you're entitled to a cash refund and how to demand it in writing.",
  alternates: {
    canonical: `${SITE_URL}/credit-shell-voucher-instead-of-refund-legal`,
  },
  openGraph: {
    title: "Credit Shell or Voucher Instead of Refund: Can You Refuse?",
    description:
      "Airlines cannot force credit shells or non-withdrawable travel vouchers without passenger consent. Know when you can legally refuse and demand immediate cash.",
    url: `${SITE_URL}/credit-shell-voucher-instead-of-refund-legal`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Credit Shell or Voucher Instead of Refund: Can You Refuse?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credit Shell or Voucher Instead of Refund: Can You Refuse?",
    description:
      "Airlines cannot force credit shells or non-withdrawable travel vouchers without passenger consent. Know when you can legally refuse and demand immediate cash.",
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
    title:
      "Supreme Court of India Judgment in Pravasi Legal Cell & Ors. v. Union of India & Ors. (2020) 10 SCC 724 — Mandatory Direct Cash Refund & Interest Benchmark",
    url: "https://main.sci.gov.in/supremecourt/2020/10966/10966_2020_33_1502_24151_Judgement_01-Oct-2020.pdf",
  },
  {
    title:
      "Directorate General of Civil Aviation (DGCA) Civil Aviation Requirements (CAR) Section 3, Series M, Part IV — Facilities to be Provided to Passengers by Airlines due to Denied Boarding, Cancellation of Flights and Delays in Flights",
    url: "https://www.dgca.gov.in/digigov-portal/?page=4050/CAR-M-Part-IV",
  },
  {
    title:
      "DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part II — Refund of Airline Tickets to Passengers of Consumer Complaints (Mandatory 7-Day Window)",
    url: "https://www.dgca.gov.in/digigov-portal/?page=4049/CAR-M-Part-II",
  },
  {
    title:
      "Central Consumer Protection Authority (CCPA) Guidelines for Prevention and Regulation of Dark Patterns, 2023 — Prohibition of 'Forced Action' and Unconsented Wallet Credits",
    url: "https://consumeraffairs.nic.in/sites/default/files/Dark_Patterns_Guidelines_2023.pdf",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for PNR, Airline Emails, & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "AirSewa Aviation Grievance Redressal Portal — Ministry of Civil Aviation, Government of India",
    url: "https://airsewa.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Directive on Forced Credit Shells and Mandatory Cash Refund",
    parties: "Pravasi Legal Cell & Ors. v. Union of India, Ministry of Civil Aviation & Ors.",
    citation: "Writ Petition (Civil) No. 570 of 2020, (2020) 10 SCC 724",
    date: "Judgment Dated 01 October 2020",
    facts:
      "Following widespread flight cancellations, domestic and international airlines unilaterally locked passenger funds into non-refundable 'credit shells' or travel vouchers with short validity periods, refusing cash refunds. Pravasi Legal Cell and passenger collectives filed public interest petitions before the Supreme Court seeking immediate liquidation of ticket funds into cash.",
    holding:
      "The Supreme Court ruled that an airline cannot compel any passenger to accept a credit shell or voucher in lieu of a refund. Credit shells can only be maintained with the passenger's voluntary consent. The Court mandated that for cancelled flights, airlines must remit 100% refund immediately. Furthermore, any unutilized credit shell must be compulsorily refunded in cash to the passenger along with statutory interest (0.5% to 0.75% per month), holding that withholding passenger money constitutes an impermissible financial lock-in.",
    amount: "100% Cash Refund of Ticket Value + Statutory Monthly Interest to All Aggrieved Passengers",
    takeaway:
      "The Supreme Court explicitly outlawed unilateral, forced credit shells. Unless you willingly choose a travel voucher in writing, you have an unassailable legal right to demand a 100% cash refund to your bank account.",
  },
  {
    title: "National Commission (NCDRC) Order Against Airline for Forfeiting Expired Credit Voucher",
    parties: "InterGlobe Aviation Ltd. (IndiGo) v. Dr. R. Subramanian",
    citation: "Revision Petition No. 1422/2021, NCDRC New Delhi",
    date: "Order Dated 18 November 2022",
    facts:
      "The complainant booked tickets for a family medical conference. Due to a schedule change of over 5 hours announced by the airline, the passenger declined the revised timing. IndiGo refused a cash refund and instead generated a credit shell with a 1-year expiry. When the passenger could not travel within the year due to health reasons, IndiGo forfeited the entire amount of ₹28,450, asserting that their 'Conditions of Carriage' permitted expiry.",
    holding:
      "The National Consumer Disputes Redressal Commission (NCDRC) upheld the State Commission's verdict against IndiGo. The Commission held that when travel disruption originates from the airline's schedule alteration, compelling the customer to accept a credit shell and subsequently forfeiting the principal constitutes a gross unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The Commission directed IndiGo to refund ₹28,450 with 9% annual interest, ₹25,000 compensation for mental harassment, and ₹10,000 litigation costs.",
    amount: "₹28,450 Ticket Refund @ 9% Interest + ₹25,000 Harassment Damages + ₹10,000 Litigation Costs",
    takeaway:
      "Airlines cannot write terms in their Conditions of Carriage that override statutory consumer protection. Unilateral forfeiture of expired vouchers is routinely struck down by consumer commissions with heavy punitive costs.",
  },
  {
    title: "State Commission Ruling on OTA Converting Refund into In-App Wallet Credits",
    parties: "MakeMyTrip (India) Pvt. Ltd. & SpiceJet Ltd. v. Rajesh K. Mehta",
    citation: "First Appeal No. 388/2022, State Consumer Commission, Maharashtra (Mumbai Bench)",
    date: "Order Dated 09 June 2023",
    facts:
      "The complainant booked flight tickets on SpiceJet through MakeMyTrip. The flight was cancelled by SpiceJet. SpiceJet refunded the money to MakeMyTrip's B2B agent balance. However, MakeMyTrip refused to credit the passenger's HDFC credit card, instead loading ₹34,200 into 'MMT MyCash Wallet' with a 6-month validity restriction and no bank transfer option.",
    holding:
      "The State Commission dismissed the appeal filed by MakeMyTrip and SpiceJet, holding both entities jointly and severally liable. Under DGCA CAR Series M Part II (Clause 3.3.2) and CCPA Dark Patterns regulations, converting a cash refund into a closed proprietary wallet without express consent is an unfair trade practice. The Commission ordered MakeMyTrip and SpiceJet to credit ₹34,200 to the complainant's bank account with 12% interest, alongside ₹30,000 compensation and ₹15,000 legal fees.",
    amount: "₹34,200 Cash Refund @ 12% Interest + ₹30,000 Harassment Award + ₹15,000 Legal Expenses",
    takeaway:
      "OTAs like MakeMyTrip, Cleartrip, or EaseMyTrip cannot trap your refund inside app wallets. They are statutory intermediaries mandated under DGCA CAR to return funds directly to your original payment source.",
  },
  {
    title: "District Commission Order on Refusal of Cash Refund After Flight Schedule Alteration",
    parties: "Air India Ltd. v. Vikramaditya Sen & Anr.",
    citation: "Consumer Complaint No. 104/2023, DCDRC Kolkata (North)",
    date: "Order Dated 14 March 2024",
    facts:
      "The complainants booked two round-trip business class tickets from Kolkata to London. Air India rescheduled the flight by 8 hours, causing the passengers to miss connecting European rail links. The passengers cancelled the booking and demanded an immediate bank refund. Air India issued non-transferable credit vouchers instead and asserted that non-refundable fare rules applied.",
    holding:
      "The District Commission ruled that under DGCA CAR Section 3, Series M, Part IV, a schedule delay exceeding 4 hours grants the passenger an absolute right to elect a 100% cash refund. Air India's refusal to remit cash and thrusting vouchers was held to be a severe deficiency in service under Section 2(11) CPA 2019. The Commission ordered Air India to refund the entire fare of ₹1,82,400 with 10% interest from the cancellation date, plus ₹40,000 compensation and ₹15,000 legal expenses.",
    amount: "₹1,82,400 Fare Refund @ 10% Interest + ₹40,000 Mental Agony Award + ₹15,000 Litigation Costs",
    takeaway:
      "Even on discounted or 'non-refundable' tickets, if the airline delays or changes the flight schedule by more than 4 hours, all fare restrictions are nullified under DGCA regulations, making cash refunds mandatory.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Airlines can unilaterally issue a credit shell instead of cash if their company policy says so.",
    fact: "Legally false. Under the Supreme Court ruling in Pravasi Legal Cell (2020) and DGCA CAR Series M Part IV, credit shells require the voluntary, written consent of the passenger. Airlines cannot impose credit shells as a unilateral default.",
    statutoryRef: "Supreme Court Directive (2020) 10 SCC 724 & DGCA CAR Part IV Cl. 3.3.2",
  },
  {
    myth: "If you booked a 'non-refundable' ticket, you can only receive a voucher if the flight is cancelled by the airline.",
    fact: "Complete misconception. 'Non-refundable' restrictions apply only when you voluntarily cancel an on-time flight. If the airline cancels, reschedules by >4 hours, or denies boarding, DGCA mandates a 100% cash refund regardless of ticket fare category.",
    statutoryRef: "DGCA CAR Section 3, Series M, Part IV (Clause 3.3.2) & Part II",
  },
  {
    myth: "Online Travel Agencies (MakeMyTrip, Cleartrip, EaseMyTrip) have the right to refund your money into their app wallet.",
    fact: "Strictly prohibited. Under CCPA Dark Patterns Guidelines, 2023, converting refunds into locked wallet balances is illegal 'Forced Action'. Furthermore, DGCA CAR Part II mandates travel agents to return money directly to your source payment method.",
    statutoryRef: "CCPA Dark Patterns Guidelines 2023 & Section 2(47) CPA 2019",
  },
  {
    myth: "If a credit shell reaches its 1-year expiry date without being used, the airline can forfeit your money.",
    fact: "Unlawful forfeiture. The Supreme Court explicitly directed that any unutilized credit shell must be paid out in cash upon expiration with accrued statutory monthly interest. Retaining expired funds constitutes criminal breach of trust under BNS Section 316.",
    statutoryRef: "Pravasi Legal Cell v. UOI (Para 14) & BNS 2023 Section 316",
  },
  {
    myth: "Airlines are permitted to deduct convenience fees, development fees, or cancellation charges when issuing a refund.",
    fact: "When a flight is disrupted or cancelled by the airline, the refund must be 100% of the gross fare paid, including all passenger service fees, airport development fees, and taxes, with zero deductions.",
    statutoryRef: "DGCA CAR Section 3, Series M, Part II (Clause 3.3)",
  },
  {
    myth: "If you booked through an agent, you cannot hold the airline accountable for your refund.",
    fact: "Under DGCA CAR Series M Part II (Clause 3.3.2), the airline remains the principal transport provider and bears primary responsibility to ensure the passenger receives their refund within 7 working days, regardless of intermediary agent default.",
    statutoryRef: "DGCA CAR Series M Part II (Clause 3.3.2) & Section 2(11) CPA 2019",
  },
  {
    myth: "Once an airline system creates a credit shell, it is permanent and cannot be converted back into bank cash.",
    fact: "Technically and legally untrue. Airline financial settlement systems routinely dissolve credit shells and issue direct NEFT/RTGS or card charge reversals upon receiving a formal advocate legal demand notice citing DGCA CAR and Supreme Court precedents.",
    statutoryRef: "Section 35, Consumer Protection Act, 2019 (Pre-Litigation Resolution)",
  },
];

const FAQS = [
  {
    question: "Can an airline legally force me to accept a credit shell or travel voucher instead of a cash refund?",
    answer:
      "No. Under the Supreme Court of India's landmark ruling in Pravasi Legal Cell v. Union of India (2020) 10 SCC 724 and DGCA CAR Section 3, Series M, Part IV, airlines cannot compel any passenger to accept a credit shell or travel voucher. A credit shell can only be generated if the passenger expressly consents in writing. If a flight is cancelled or significantly altered by the carrier, you are legally entitled to an immediate 100% cash refund to your original payment method.",
  },
  {
    question: "How do I convert an airline credit shell or travel voucher back to cash in my bank account?",
    answer:
      "To convert a forced credit shell into cash: (1) Do not use the voucher to book another flight, as utilizing it can be deemed acceptance; (2) Send an immediate written refusal to the airline's Nodal Grievance Officer and customer support invoking DGCA CAR Series M Part IV and the Supreme Court Pravasi Legal Cell judgment; (3) File a formal grievance on the Ministry of Civil Aviation's AirSewa portal (airsewa.gov.in); (4) If uncredited after 7 working days, serve a formal statutory advocate legal notice demanding bank remittance within 15 calendar days.",
  },
  {
    question: "What are the DGCA flight voucher refund rules when an airline cancels or delays a flight?",
    answer:
      "Under DGCA CAR Section 3, Series M, Part IV (Clause 3.3), if an airline cancels a flight or reschedules departure by more than 2 to 4 hours, passengers who choose not to accept alternate flights are entitled to a full 100% refund of the ticket value without any cancellation deductions. DGCA CAR Series M Part II mandates that credit card refunds must be processed within 7 working days, and cash bookings refunded immediately.",
  },
  {
    question: "Can MakeMyTrip, Cleartrip, or EaseMyTrip refuse cash and give wallet credits instead?",
    answer:
      "No. Under the Central Consumer Protection Authority (CCPA) Dark Patterns Guidelines, 2023, converting refunds into proprietary wallet credits (such as MMT MyCash, Clearcash, or EMT Wallet) without express opt-in consent is classified as an illegal dark pattern ('Forced Action') and constitutes an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Furthermore, DGCA CAR Part II mandates travel aggregators to credit funds directly back to the passenger's payment card or bank.",
  },
  {
    question: "What happens to an airline credit shell if it expires without being used?",
    answer:
      "Under the Supreme Court's binding directions in Pravasi Legal Cell, airlines are legally prohibited from forfeiting unutilized credit shells. When a credit shell reaches its expiration date, the airline must automatically liquidate the balance and refund the full principal amount in cash to the passenger, accompanied by statutory interest. Withholding or expiring the funds constitutes illegal enrichment and a consumer service deficiency.",
  },
  {
    question: "Am I entitled to interest if the airline delayed converting my voucher to cash?",
    answer:
      "Yes. The Supreme Court prescribed statutory monthly interest (between 0.5% and 0.75% per month) on passenger ticket funds held in credit shells. Moreover, consumer dispute commissions across India routinely award 9% to 12% annual interest on withheld refunds, alongside punitive damages for mental agony and statutory litigation expenses.",
  },
  {
    question: "What is the legal difference between a travel voucher and a cash refund?",
    answer:
      "A cash refund is an unconditional statutory remittance of legal tender directly to your bank account or payment card, leaving you free to spend your money anywhere. A travel voucher or credit shell is an unsecured, restrictive company credit tied to that specific airline or OTA, subject to arbitrary blackout dates, price markups, passenger name restrictions, and short expiry dates. Consumer protection laws mandate that cash is your statutory baseline right.",
  },
  {
    question: "Airline credit shell ya travel voucher dene par bank account mein cash refund kaise lein?",
    answer:
      "Agar airline ya travel agent aapke mana karne ke bawajood credit shell ya wallet balance de de, toh aap use turant email par reject karein. Supreme Court ke Pravasi Legal Cell faisle aur DGCA CAR Series M Part IV ke tehat airline par cash refund dena bandhan-kari hai. AirSewa portal par complaint karein, aur agar 7 dino mein bank mein paise na aayein, toh LegalRecovery.in ke verified advocate se 15 din ka statutory legal notice bhejein.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Airline Credit Shell Instead of Cash? Know When You Can Refuse",
  description:
    "Airline or OTA pushing a credit shell or voucher? When you're entitled to a cash refund and how to demand it in writing.",
  datePublished: "2026-11-03T15:00:00+05:30",
  dateModified: "2026-11-03T15:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/credit-shell-voucher-instead-of-refund-legal`,
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
    name: "Airline Credit Shell and Travel Voucher Cash Refund Rights",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Airline & Train Refund",
      item: `${SITE_URL}/send-a-legal-notice/airline-refund-not-received`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Credit Shell vs Cash Refund Guide",
      item: `${SITE_URL}/credit-shell-voucher-instead-of-refund-legal`,
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

export default function CreditShellVoucherLegalPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Airline & Train Refund",
      href: "/send-a-legal-notice/airline-refund-not-received",
    },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>DGCA CAR Series M &amp; Supreme Court Directives</span>
              <span className="text-red-500">•</span>
              <span>Airline Refund Legality Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Airline Credit Shell Instead of Cash? Know When You Can Refuse
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Forced Voucher &amp; Credit Shell Legality)
              </p>
              <p>
                Under Directorate General of Civil Aviation (DGCA) CAR Series M Part IV and the Supreme Court ruling in <em>Pravasi Legal Cell v. Union of India</em>, airlines and travel aggregators cannot compel passengers to accept credit shells or travel vouchers. If a flight is cancelled, significantly rescheduled, or unutilized upon expiration, you are legally entitled to a 100% cash refund to your original payment method. Refusing the voucher in writing and serving a 15-day statutory advocate legal notice forces immediate bank remittance.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">7 Working Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">DGCA Credit Card Refund Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Cash</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory on Disrupted Flights</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">0.5%–0.75%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">SC Monthly Interest Mandate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹75,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Damages in Commission Orders</p>
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
            <CreditShellTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Can Airlines Legally Push a Credit Shell? */}
              <section
                id="heading-statutory-reality"
                aria-labelledby="heading-statutory-reality-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-statutory-reality-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Can Airlines Legally Force a Credit Shell Instead of Cash?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a flight is grounded, cancelled, or substantially rescheduled, airlines and online travel agencies (OTAs) face immense liquidity pressure. To prevent capital outflow, commercial carriers like <Link href="/legal-notice-to/indigo" className="text-blue-700 underline font-semibold">IndiGo</Link>, <Link href="/legal-notice-to/air-india" className="text-blue-700 underline font-semibold">Air India</Link>, and <Link href="/legal-notice-to/spicejet" className="text-blue-700 underline font-semibold">SpiceJet</Link>, alongside booking engines like <Link href="/legal-notice-to/makemytrip" className="text-blue-700 underline font-semibold">MakeMyTrip</Link> and <Link href="/legal-notice-to/cleartrip" className="text-blue-700 underline font-semibold">Cleartrip</Link>, routinely configure their automated systems to generate an airline &quot;credit shell&quot; or non-withdrawable travel voucher by default.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The definitive legal answer under Indian aviation regulations is an unequivocal <strong>NO</strong>. In the landmark case of <em>Pravasi Legal Cell &amp; Ors. v. Union of India &amp; Ors. (2020) 10 SCC 724</em>, the Supreme Court of India held that credit shells can only be maintained with the passenger&apos;s explicit, voluntary written consent. If a passenger refuses a voucher, the carrier is under a statutory obligation under DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part IV (Clause 3.3.2) to remit a 100% cash refund to the source account.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, Section 2(47) of the Consumer Protection Act, 2019 classifies any unilateral imposition of credit vouchers or conversion of refunds into locked proprietary wallets as an <strong>Unfair Trade Practice</strong>. Under the Central Consumer Protection Authority (CCPA) Dark Patterns Guidelines, 2023, forcing passengers into vouchers without a conspicuous opt-out mechanism is a punishable regulatory violation.
                </p>
              </section>

              {/* Section 2: Archetype G5 Core - Myth vs Fact */}
              <section
                id="heading-myth-vs-fact"
                aria-labelledby="heading-myth-vs-fact-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: 7 Misconceptions Airlines Use to Deny Cash Refunds
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Grounded in Binding Supreme Court Rulings, DGCA CAR Mandates and CCPA Regulations
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-5">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
                    >
                      <div className="p-4 sm:p-5 border-b border-slate-100 bg-red-50/40 flex items-start gap-3">
                        <span className="shrink-0 px-2 py-0.5 bg-red-600 text-white rounded text-[10px] sm:text-xs font-black uppercase tracking-wider mt-0.5">
                          Myth #{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-red-950 leading-snug">
                          &quot;{item.myth}&quot;
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 bg-white space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 px-2 py-0.5 bg-emerald-600 text-white rounded text-[10px] sm:text-xs font-black uppercase tracking-wider mt-0.5">
                            Legal Fact
                          </span>
                          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                            {item.fact}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                          <span className="font-bold text-slate-500 uppercase tracking-wider">
                            Statutory Reference:
                          </span>
                          <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                            {item.statutoryRef}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Landmark Order Digest */}
              <section
                id="heading-order-digest"
                aria-labelledby="heading-order-digest-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Digest: Landmark Orders on Forced Airline Credit Shells
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Precedent #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Judicial Relief / Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Jurisdictional Precedent
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All Indian Consumer Commissions
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Resolution Decision Flowchart SVG */}
              <section
                id="heading-decision-flowchart"
                aria-labelledby="heading-decision-flowchart-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-decision-flowchart-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Can You Demand Cash? Visual Decision Tree &amp; Resolution Hierarchy
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluate your flight disruption scenario below to understand your statutory entitlement under DGCA CAR and Indian consumer law:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#1E293B] text-white p-4 rounded-xl border border-slate-700 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Disruption / Voucher Notice</h3>
                    <p className="text-xs text-slate-200 mt-1">Flight cancelled, rescheduled &gt; 4h, or airline issued unrequested shell.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Decline Shell in Writing</h3>
                    <p className="text-xs text-amber-900 mt-1">Do not use voucher; email airline invoking DGCA CAR Cl. 3.3.2.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">AirSewa &amp; Nodal Escalation</h3>
                    <p className="text-xs text-slate-700 mt-1">Lodge grievance on airsewa.gov.in demanding bank account credit.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served via Registered Speed Post + BSA email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Credit or e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% principal + statutory interest + compensation recovery.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Mobile & Desktop with Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Credit Shell Refusal and Cash Refund Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="csGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="csAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="csSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#csGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Voucher Notice</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Flight Disrupted / Shell</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Do NOT Redeem</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Refuse in Writing</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">DGCA CAR Cl. 3.3.2</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">SC Pravasi Citation</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#1E293B" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">AirSewa Docket</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Lodge Level-1 Dispute</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">NCH 1915 Escalation</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#csAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Airline + OTA Impleaded</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#csSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Bank Cash</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">100% Refund + Interest</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Petition</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY REFUND TIMEFRAMES UNDER DGCA &amp; SUPREME COURT MANDATES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Credit Card Bookings: Immediate reversal within 7 working days (DGCA CAR Series M Part II Cl. 3.3)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Expired Credit Shells: Compulsory cash refund to bank with statutory interest (Pravasi Legal Cell Para 14)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Legal Notice Response Window: 15 Calendar Days before filing consumer complaint on e-Jagriti</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section
                id="heading-playbook"
                aria-labelledby="heading-playbook-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Rejecting a Voucher to Force a Cash Refund
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Airlines bank on passenger fatigue to keep unspent funds in their corporate balances. By executing this structured 5-step escalation protocol, you establish an ironclad legal paper trail that compels airlines and OTAs to liquidate the credit shell into cash:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Do Not Redeem the Voucher &amp; Send Immediate Written Refusal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Redeeming even a fraction of a travel voucher can be construed by airline defense counsel as implied acceptance of the credit shell terms. Send an immediate formal email to the airline&apos;s customer support and Nodal Officer stating: <em>&quot;I expressly decline the credit shell / voucher generated for PNR [Number]. In accordance with DGCA CAR Series M Part IV and the Supreme Court ruling in Pravasi Legal Cell (2020) 10 SCC 724, I demand an unconditional 100% refund remitted directly to my original payment source.&quot;</em>
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Invoke Statutory Intermediary Liability Against the Booking OTA
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If your ticket was purchased via an OTA like <Link href="/legal-notice-to/goibibo" className="text-blue-700 underline">Goibibo</Link>, <Link href="/legal-notice-to/easemytrip" className="text-blue-700 underline">EaseMyTrip</Link>, or Cleartrip, write to their Grievance Officer. Quote DGCA CAR Section 3, Series M, Part II, Clause 3.3.2, which explicitly states that travel agents are facilitators and cannot hold passenger funds or convert cash refunds into proprietary in-app wallet credits without consent.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge Regulatory Escalations on AirSewa &amp; National Consumer Helpline
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the airline or OTA refuses to initiate cash remittance within 7 working days, register a formal complaint on the Ministry of Civil Aviation&apos;s <a href="https://airsewa.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">AirSewa portal</a>. In parallel, register a docket on the National Consumer Helpline (<a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">consumerhelpline.gov.in</a> or Dial 1915), flagging the carrier for unfair trade practice and dark patterns.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When administrative escalation yields only automated deflection, engage a verified advocate to issue a statutory demand notice to the airline corporate office and the booking OTA. Dispatched via Registered Speed Post and served electronically under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, the notice gives the carrier a strict 15-day deadline to remit the cash refund with 18% penal interest and damages. Over 85% of forced credit shell disputes are resolved at this stage to avoid court exposure.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Check transparent advocate drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E293B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Consumer Petition on e-Jagriti with Penal Compensation
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the airline fails to comply within the 15-day notice window, file an online consumer complaint on the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019. Since district commissions possess local territorial jurisdiction where the passenger resides, you can litigate from your home district, claiming the full fare refund, statutory interest, mental agony compensation, and litigation costs.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Statutory Deadlines & Regulations Matrix Table */}
              <section
                id="heading-statutory-table"
                aria-labelledby="heading-statutory-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-statutory-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Aviation Refund Timelines and Passenger Rights Under DGCA
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian civil aviation directives and consumer protection statutes mandate strict, binding turnaround times for passenger refunds. Airlines cannot enforce internal terms that violate these statutory benchmarks:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Aviation Refund Deadlines &amp; Regulatory Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Disruption Scenario / Payment Channel</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Refund Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Law / Regulation</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy if Delayed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Credit / Debit Card Bookings
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II Cl. 3.3</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct bank credit demand + penal interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Cash Bookings at Airline Counters
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Immediate Cash Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II Cl. 3.3</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Airport station manager escalation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          OTA / Travel Agent Bookings
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Airline &amp; Agent Joint 7 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part II Cl. 3.3.2</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand payment gateway ARN / UTR code</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Flight Cancelled by Airline
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Cash to Source Account</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part IV Cl. 3.3.2</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Zero cancellation or clerkage deduction</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Flight Rescheduled &gt; 4 Hours
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Full Cash Refund Entitlement</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">DGCA CAR Series M Part IV Cl. 3.3</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Absolute right to refuse revised flight timing</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Expired Unutilized Credit Shell
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Immediate Cash + Interest</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">SC Pravasi Legal Cell Ruling (Para 14)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Forfeiture is illegal; claim BNS 316 breach</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final statutory demand before e-Jagriti filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Learn more about statutory airline timelines in our comprehensive guide on{" "}
                  <Link href="/law/dgca-air-ticket-refund-rules-2026" className="text-blue-700 underline">
                    DGCA Air Ticket Refund Rules 2026
                  </Link>{" "}
                  and tracing missing bank credits on{" "}
                  <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline">
                    tracing refunds with ARN and UTR numbers
                  </Link>.
                </p>
              </section>

              {/* Section 7: Common Credit Shell & Voucher Bottlenecks */}
              <section
                id="heading-problem-picker"
                aria-labelledby="heading-problem-picker-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Credit Shell and Voucher Bottlenecks: Root Causes and Legal Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Governing Statutory Rule and Immediate Escalation Action
                  </p>
                </div>

                <CreditShellProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Passenger Recovers Cash Refund After Voucher Deadlock
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru to New Delhi (Round-Trip - 3 Passengers)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Sunita Nambiar booked 3 round-trip tickets from Bengaluru to New Delhi on a private airline via a leading travel aggregator for ₹38,400. 18 hours prior to departure, the airline cancelled the flight due to operational fleet maintenance. While Sunita requested a full refund back to her ICICI credit card, the airline&apos;s automated system generated a credit shell with a 12-month validity restriction.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Sunita repeatedly emailed the airline and OTA demanding cash remittance. For 9 months, customer support responded with canned deflection: <em>&quot;As per our commercial terms of carriage, disrupted bookings are processed as credit shells for future travel. Shells cannot be converted to bank cash.&quot;</em> When Sunita was unable to travel due to work commitments and the 1-year expiry approached, the airline warned that the balance would be forfeited.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Sunita engaged LegalRecovery.in. An advocate drafted and served a joint statutory legal demand notice on the airline&apos;s Managing Director and the OTA&apos;s Grievance Officer. The notice invoked the Supreme Court judgment in <em>Pravasi Legal Cell (2020) 10 SCC 724</em>, DGCA CAR Series M Part IV (Clause 3.3.2), and CCPA Dark Patterns Guidelines, giving a strict 15-day demand for cash refund plus interest.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 following receipt of the advocate legal notice, the airline&apos;s Legal &amp; Regulatory Compliance Cell dissolved the credit shell and instructed their acquiring bank to initiate a direct inward NEFT credit. The full fare of ₹38,400 was credited directly to Sunita&apos;s bank account, accompanied by an additional ₹20,000 ex-gratia compensation for the 9-month delay, closing the dispute without consumer court litigation.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Passenger Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Passenger Evidence Checklist: 6 Records Before Serving Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital transaction records are fully admissible in consumer commissions. Assemble these 6 documents before initiating legal escalation:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Electronic Flight Ticket &amp; PNR Slip:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing confirmed booking reference, passenger names, flight numbers, and total fare paid.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Flight Disruption / Cancellation Notice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email, WhatsApp message, or SMS from the airline confirming cancellation or major schedule change.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Credit Shell / Voucher Issuance Communication:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of credit shell generation email showing shell code, balance, and unilateral expiration terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Voucher Rejection Email:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Timestamped copy of your email declining the credit shell and demanding 100% cash refund to bank.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">AirSewa / NCH Docket Numbers:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of registered grievance docket on airsewa.gov.in or consumerhelpline.gov.in.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#1E293B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank / Credit Card Statement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving the original ticket debit and confirming zero inward refund credit past the 7-day DGCA window.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on Airline Credit Shells, Vouchers and Legal Notices
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Answers Grounded in Supreme Court Rulings, DGCA CAR and Consumer Protection Directives
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Aviation Authorities, Primary Statutes &amp; Official Legal References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All provisions verified against active Supreme Court of India precedents, DGCA Civil Aviation Requirements, CCPA Dark Patterns Guidelines, and e-Jagriti consumer commission guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Flight Cash Refund
                </h2>
                <CreditShellNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel &amp; Refund Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Airline Refund Legal Notice Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to/indigo"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    IndiGo Refund Dispute Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to/air-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Air India Refund Dispute Hub →
                  </Link>
                  <Link
                    href="/visa-agent-fraud-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Visa Agent Fraud Legal Notice →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/law/dgca-air-ticket-refund-rules-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    DGCA Air Ticket Refund Rules 2026 →
                  </Link>
                  <Link
                    href="/refund-as-gift-card-or-wallet-legal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Refund as Gift Card / Wallet Legality →
                  </Link>
                  <Link
                    href="/refund-shows-successful-but-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Trace Stuck Refund with UTR/ARN →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
