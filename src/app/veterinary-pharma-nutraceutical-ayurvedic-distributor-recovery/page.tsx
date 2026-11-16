import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import VeterinaryPharmaTableOfContents from "./VeterinaryPharmaTableOfContents";
import VeterinaryPharmaScenarioTabs from "./VeterinaryPharmaScenarioTabs";
import VeterinaryPharmaRecoveryCTA from "./VeterinaryPharmaRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/veterinary-pharma-nutraceutical-ayurvedic-distributor-recovery";
const EXACT_H1 =
  "Dealer & Contract-Manufacturing Debt Recovery for Veterinary Pharma, AYUSH/Ayurvedic & FSSAI Nutraceutical Brands";
const META_TITLE = "Veterinary Pharma, AYUSH & Nutraceutical Distributor Dues";
const META_DESCRIPTION =
  "Recover rural veterinary dealer ledgers, AYUSH stockist arrears & private-label nutraceutical manufacturing dues via fast-track legal notices & MSME ODR.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Veterinary Pharma, AYUSH and Nutraceutical Distributor Recovery"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const STATUTORY_MATRIX = [
  {
    remedy: "MSME Mandatory 45-Day Payment & 3x RBI Compound Interest",
    statute: "MSMED Act, 2006 (Section 15, Section 16 & Section 18)",
    timing: "Upon expiry of 45 days from dispatch/delivery of veterinary medicines or wellness batches",
    mechanism:
      "Statutory Advocate Demand Notice followed by petition before the State Micro and Small Enterprises Facilitation Council (MSEFC) or online ODR conciliation",
    relief:
      "Compulsory compound interest at 3 times the RBI Bank Rate calculated with monthly rests; completely overrides informal 90–120 day rural credit norms",
    suitability:
      "Udyam-registered veterinary pharma labs, AYUSH ASU formulation units, feed supplement plants, and CDMO nutraceutical packaging facilities",
    tone: "emerald",
  },
  {
    remedy: "Income Tax Section 43B(h) Corporate Tax Expense Disallowance",
    statute: "Income-tax Act, 1961 (Section 43B(h) read with Finance Act 2023)",
    timing: "End of fiscal year (March 31) where payment is delayed past 45 days to an MSME creditor",
    mechanism:
      "Statutory legal notice warning the buyer's CFO, Board, and Statutory Tax Auditors of immediate deduction disallowance in Tax Audit Form 3CD",
    relief:
      "Defaulting distributor or corporate brand licensee is taxed on the unpaid purchase amount at 25%–35% plus surcharge, turning delayed vendor dues into cash tax liability",
    suitability:
      "Corporate agro-vet distributors, modern trade supermarket chains, retail pharma aggregators, and private-label brand marketers",
    tone: "emerald",
  },
  {
    remedy: "Section 138 Criminal Prosecution on Dishonoured PDCs & Security Cheques",
    statute: "Negotiable Instruments Act, 1881 (Section 138, Section 141 & Section 142(2))",
    timing: "Within 30 days of receiving bank return memo for dishonoured cheque",
    mechanism:
      "15-Day Advocate Statutory Demand Notice; upon non-payment, direct criminal complaint filed at the manufacturer's home bank branch under NI Act Section 142(2)(a)",
    relief:
      "Non-bailable arrest warrants, summons to company directors/proprietors, and court direction under Section 143A for mandatory 20% interim compensation",
    suitability:
      "Dishonoured post-dated cheques, seasonal stockist settlement cheques, and security cheques tendered at distributorship appointment",
    tone: "slate",
  },
  {
    remedy: "Order XXXVII Fast-Track Summary Suit & Pre-Judgment Attachment",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII & Order XXXVIII Rule 5)",
    timing: "Upon expiry of 15-day notice window where delivery challans and e-Way bills establish admitted liquidated debt",
    mechanism:
      "Fast-track summary suit before the Commercial Court under Commercial Courts Act, 2015 s.2(1)(c)(xviii) paired with an urgent application to freeze debtor bank accounts",
    relief:
      "Summary money decree without prolonged trial unless defendant deposits disputed amount in court; interim freezing of bank accounts and warehouse stock",
    suitability:
      "Liquidated invoices backed by signed motor transport lorry receipts (LRs), GST e-Way bills, and running ledger confirmations",
    tone: "slate",
  },
  {
    remedy: "Sale Price Vesting & Risk Transfer for Custom-Manufactured Batches",
    statute: "Sale of Goods Act, 1930 (Section 44, Section 46 & Section 55)",
    timing: "Upon completion of custom batch packaging and issuance of Certificate of Analysis (CoA)",
    mechanism:
      "Commercial notice of deemed delivery establishing that custom packaging with the buyer's trademark and FSSAI license prevents third-party resale",
    relief:
      "Full suit for price under Section 55 plus daily warehousing and stability storage demurrage; defeats client excuse of 'We have not lifted the stock'",
    suitability:
      "Private-label whey protein, collagen gummies, effervescent nutraceutical tablets, and customized herbal extracts manufactured under contract",
    tone: "emerald",
  },
];

const RECOVERY_STAGES = [
  {
    stage: "Stage 1",
    timeline: "Day 1 – 15",
    title: "Ledger Audit & Delivery Proof Collation",
    desc: "Reconcile commercial invoices against GST e-Way bills, motor transport lorry receipts (LRs), rural godown delivery stamps, and electronic Certificate of Analysis (CoA) records under BSA 2023 s.63.",
  },
  {
    stage: "Stage 2",
    timeline: "Day 16 – 30",
    title: "Tri-Channel Advocate Statutory Notice",
    desc: "Serve an advocate-signed demand notice via Speed Post RPAD, WhatsApp, and registered email. Formally invokes MSMED Act s.16 penal interest and alerts auditors to Section 43B(h) tax disallowances.",
  },
  {
    stage: "Stage 3",
    timeline: "Day 31 – 45",
    title: "Section 138 NI Act Summons at Home Bank",
    desc: "Present security cheques or post-dated cheques; upon dishonour, file criminal complaints under Section 142(2)(a) at the manufacturer's home bank branch to compel director personal appearance.",
  },
  {
    stage: "Stage 4",
    timeline: "Day 46 – 60",
    title: "MSME Samadhaan & Territory Monopoly Revocation",
    desc: "Lodge statutory reference before the State MSEFC for 3x RBI compound penal interest while formally terminating distributor monopoly covenants under Indian Contract Act Section 39.",
  },
  {
    stage: "Stage 5",
    timeline: "Day 60+",
    title: "Order XXXVII Summary Suit & Bank Freezes",
    desc: "File a Commercial Summary Plaint under Order XXXVII CPC paired with Order XXXVIII Rule 5 applications to attach the distributor's bank accounts, rural warehouse inventory, and trade receivables.",
  },
];

const FAQS = [
  {
    q: "Why do veterinary pharma and AYUSH brands face worse distributor credit delays than allopathic brands?",
    a: "Unlike prescription allopathic pharmaceuticals where district stockists are tightly disciplined by the All India Organization of Chemists and Druggists (AIOCD) guidelines and doctor prescription flow, veterinary pharmaceuticals, feed supplements, AYUSH herbal formulations, and FSSAI nutraceuticals operate outside mandatory AIOCD NOC structures. Rural agro-dealers, poultry integrators, and OTC wellness stockists exploit this lack of institutional cartel oversight to demand 90–120 day rolling credit. When seasonal farm incomes dip or milk prices crash, distributors freeze manufacturer payments while keeping farmer cash collections for local lending or other inventory. Enforcing formal advocate demand notices and MSMED Act Section 16 compound interest is essential to replace missing trade association discipline with strict statutory compliance.",
  },
  {
    q: "Can a rural agro-vet distributor delay payment by blaming milk price crashes or poultry bird flu culls?",
    a: "No. Under Section 42 of the Sale of Goods Act, 1930, once veterinary formulations, boluses, or feed premixes are delivered against signed transport lorry receipts (LRs) and valid GST e-Way bills, the sale is legally complete and property passes unconditionally to the buyer. Downstream economic risks—such as dairy cooperative milk rate revisions, local droughts, or disease outbreaks requiring poultry culling—are independent business risks borne solely by the distributor. Downstream market conditions provide zero valid legal defense for withholding payment on admitted manufacturer invoices.",
  },
  {
    q: "How does Section 43B(h) of the Income-tax Act compel veterinary and AYUSH stockists to pay on time?",
    a: "Under Section 43B(h) of the Income-tax Act, 1961 (introduced via Finance Act 2023), any payment due to an enterprise registered under the MSMED Act, 2006 as a Micro or Small enterprise that remains unpaid beyond 45 days (under written agreement) or 15 days (without written agreement) is completely disallowed as an expense deduction for that financial year. The unpaid amount is added back to the distributor's taxable profit, subjecting them to corporate income tax of 25%–35% plus applicable surcharges. When an advocate notice alerts the distributor's Chief Financial Officer and Statutory Tax Auditors that outstanding invoices will be reported in Tax Audit Form 3CD, distributors prioritize clearing the dues to prevent massive tax cash outflows.",
  },
  {
    q: "Can an Ayurvedic manufacturing brand revoke a distributor's exclusive territory rights if they default on credit?",
    a: "Yes. An exclusive territorial distributorship agreement is governed by the Indian Contract Act, 1872. Under Section 39 and Section 51, exclusivity covenants are reciprocal promises contingent upon the distributor meeting minimum primary order indents and clearing credit ledgers within agreed terms. When a stockist defaults on payment or squats on territory without placing orders, the manufacturer is legally entitled to terminate exclusivity immediately, appoint new stockists, and demand full settlement. Furthermore, any attempt by the defaulting stockist to orchestrate a local trade boycott violates Section 3(3)(b) of the Competition Act, 2002.",
  },
  {
    q: "What legal remedy exists if a private-label nutraceutical client refuses to lift a completed custom batch?",
    a: "Under Section 46 and Section 55 of the Sale of Goods Act, 1930, an unpaid seller can sue for the full contract price when goods are manufactured to custom specifications. Because private-label nutraceuticals (such as custom-flavored whey protein, branded collagen gummies, or customized multivitamin tablets) carry the client's proprietary trademark and FSSAI marketer license, they cannot legally be sold to any third party. Therefore, the completed batch represents liquidated damages under Section 73 of the Indian Contract Act, 1872. The manufacturer can issue an advocate notice claiming the full invoice value, plus storage demurrage under Section 44, and initiate fast-track recovery before the MSEFC or Commercial Court.",
  },
  {
    q: "Where does a veterinary pharma company file a Section 138 cheque bounce case against an out-of-state distributor?",
    a: "Following the 2015 Amendment to the Negotiable Instruments Act, Section 142(2)(a) establishes that the territorial jurisdiction for prosecuting a dishonoured cheque lies exclusively where the payee delivers the cheque for collection through an account—which is the manufacturer's home bank branch. A veterinary pharma or AYUSH manufacturer based in Haryana, Gujarat, or Himachal Pradesh whose out-of-state distributor (e.g. in Punjab, Maharashtra, or Tamil Nadu) issues a cheque that bounces can file the Section 138 criminal complaint in their own local magistrate court. The defaulting distributor and its directors must travel and appear physically, creating immense settlement leverage.",
  },
  {
    q: "How can nutraceutical brands challenge arbitrary modern trade debit notes for listing fees and markdowns?",
    a: "Modern trade retail supermarket chains and quick-commerce dark stores frequently levy arbitrary unilateral debit notes for 'New Store Opening (NSO) fees', 'unauthorized festive promotions', or 'markdown compensations'. In law, unilateral deductions without prior signed written authorization violate Section 73 of the Indian Contract Act, 1872 and cannot adjust GST liability under Section 34 of the CGST Act. Furthermore, under Section 15 of the MSMED Act, the statutory 45-day payment limit cannot be overridden by one-sided retail vendor agreements. A formal statutory demand notice rejecting the debit notes and invoking MSEFC arbitration routinely compels retail finance desks to reverse arbitrary debits.",
  },
];

export default function VeterinaryPharmaDistributorRecoveryPage() {
  const breadcrumbItems = [
    { label: "Pharma & MedTech Hub", href: "/industries/pharma-medical-devices-recovery" },
    {
      label: "Veterinary, AYUSH & Nutraceuticals",
      href: PAGE_URL,
    },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-16T11:56:35+05:30",
    dateModified: "2026-11-16T11:56:35+05:30",
  };

  const HOW_TO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Debt Recovery SOP for Veterinary Pharma, AYUSH & Nutraceutical Brands",
    description:
      "Operational framework to recover overdue distributor ledgers, seasonal agro-vet defaults, AYUSH super-stockist arrears, and private-label nutraceutical batch dues.",
    step: RECOVERY_STAGES.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
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
        name: "Pharma & MedTech Recovery Hub",
        item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Veterinary, AYUSH & Nutraceutical Distributor Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>IND-04 &bull; Veterinary, AYUSH &amp; Nutraceutical Credit Governance</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer for Brand CFOs &amp; Credit Heads
            </span>
            <p>
              Veterinary pharmaceuticals, AYUSH Ayurvedic formulations, and FSSAI nutraceutical
              brands operate beyond mandatory AIOCD association protections, resulting in rampant
              90–120 day rural and OTC retail credit defaults. Under the{" "}
              <Link
                href="/industries/pharma-medical-devices-recovery"
                className="text-red-300 hover:text-white underline underline-offset-2 font-semibold"
              >
                Pharmaceuticals, Medical Devices &amp; Surgical Hub
              </Link>
              , recovery is governed strictly by Section 15–18 of the MSMED Act (3x RBI compound
              interest), Income Tax Act Section 43B(h) buyer disallowances, Negotiable Instruments
              Act Section 138 at home-bank branch courts, and Order XXXVII CPC Summary Suits on
              transport bilties.
            </p>
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold mb-1">
                Statutory Payment Floor
              </span>
              <p className="text-lg sm:text-xl font-black text-slate-100">45 Days</p>
              <span className="text-[10px] text-slate-400">MSMED Act s.15 Cut-Off</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold mb-1">
                Compound Penal Interest
              </span>
              <p className="text-lg sm:text-xl font-black text-emerald-400">19.50% p.a.</p>
              <span className="text-[10px] text-slate-400">3x RBI Bank Rate (Monthly Rests)</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold mb-1">
                Buyer Tax Disallowance
              </span>
              <p className="text-lg sm:text-xl font-black text-amber-400">Section 43B(h)</p>
              <span className="text-[10px] text-slate-400">Unpaid MSME Expense Surcharge</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold mb-1">
                NI Act 138 Jurisdiction
              </span>
              <p className="text-lg sm:text-xl font-black text-red-400">Home Branch</p>
              <span className="text-[10px] text-slate-400">Section 142(2)(a) Payee Court</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Sticky Table of Contents Sidebar */}
          <VeterinaryPharmaTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Sector Structural Vulnerability
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                The Rural &amp; OTC Pharma Credit Trap: Why AIOCD NOC Rules Fall Short
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In the Indian pharmaceutical landscape, prescription allopathic formulations
                  operate under institutionalized credit discipline. Regional allopathic stockists
                  are supervised by the All India Organization of Chemists and Druggists (AIOCD)
                  and affiliated state associations, which enforce No Objection Certificate (NOC)
                  protocols, clear dispute resolution channels, and daily prescription sales velocity.
                  However, manufacturers operating in <strong>Veterinary Pharmaceuticals</strong>,{" "}
                  <strong>Dairy and Poultry Nutrition</strong>, <strong>AYUSH (Ayurvedic/ASU)</strong>{" "}
                  patent medicines, and <strong>FSSAI Dietary Nutraceuticals</strong> find themselves
                  exposed to an entirely different commercial reality.
                </p>
                <p>
                  Because these sectors operate outside mandatory AIOCD NOC governance, downstream
                  channel partners—ranging from rural agro-chemical stockists and livestock feed
                  dealers to regional herbal wellness super-stockists and modern trade retail
                  aggregators—routinely demand excessive 90 to 120-day unsecured rolling credit.
                  When market liquidity tightens, these distributors unilaterally treat manufacturing
                  brands as interest-free working capital lenders.
                </p>
                <p>
                  In rural markets, veterinary dealers collect cash from dairy farmers and commercial
                  broiler poultry farms upon harvesting or milk settlement, yet hold back payments to
                  the pharmaceutical manufacturer by citing regional droughts, milk procurement price
                  cuts by cooperatives, or sudden bird flu culling scares. In the wellness and
                  nutraceutical sectors, modern retail chains and e-commerce stockists leverage their
                  shelf-space power to impose unilateral listing fees, unauthorized marketing
                  deductions, and illegal expired-goods return dumps that wipe out manufacturer profit
                  margins.
                </p>
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="font-bold text-[#DC2626] text-xs sm:text-sm">
                    The Legal Reality for Institutional Credit Managers:
                  </p>
                  <p className="text-slate-800 text-xs sm:text-sm mt-1">
                    Informal trade customs, dealer association resolutions, and seasonal agricultural
                    pretexts possess zero standing under Indian statutory law. Once goods are
                    dispatched against motor transport lorry receipts (LRs) and verified GST e-Way
                    bills, liability is absolute under the <strong>Sale of Goods Act, 1930</strong>{" "}
                    and enforceable via compound interest under the <strong>MSMED Act, 2006</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree SVG */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Operational SOP Playbook
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                5-Stage Operational Escalation Rail: From Rural Notice to Court Action
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                LegalRecovery.in deploys a structured, practitioner-tested 5-stage escalation
                framework designed specifically for veterinary pharma, AYUSH stockists, and
                nutraceutical contract manufacturers to secure full ledger settlements without
                protracted rural litigation.
              </p>

              {/* Desktop SVG Escalation Rail */}
              <div className="hidden md:block w-full bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-6 overflow-x-auto">
                <svg
                  className="w-full h-auto min-w-[700px]"
                  viewBox="0 0 800 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={160}
                  aria-label="5-Stage Recovery Escalation Rail Flowchart"
                >
                  <defs>
                    <linearGradient id="railGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Line */}
                  <line x1="80" y1="80" x2="720" y2="80" stroke="#334155" strokeWidth="4" />

                  {/* Stage 1 */}
                  <circle cx="80" cy="80" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="80" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">01</text>
                  <text x="80" y="125" textAnchor="middle" fill="#CBD5E1" fontSize="11" fontWeight="600">Day 1–15</text>
                  <text x="80" y="140" textAnchor="middle" fill="#94A3B8" fontSize="10">Ledger &amp; LRs Audit</text>

                  {/* Stage 2 */}
                  <circle cx="240" cy="80" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="240" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">02</text>
                  <text x="240" y="125" textAnchor="middle" fill="#CBD5E1" fontSize="11" fontWeight="600">Day 16–30</text>
                  <text x="240" y="140" textAnchor="middle" fill="#94A3B8" fontSize="10">Advocate Demand Notice</text>

                  {/* Stage 3 */}
                  <circle cx="400" cy="80" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="400" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">03</text>
                  <text x="400" y="125" textAnchor="middle" fill="#CBD5E1" fontSize="11" fontWeight="600">Day 31–45</text>
                  <text x="400" y="140" textAnchor="middle" fill="#94A3B8" fontSize="10">NI Act 138 at Home Bank</text>

                  {/* Stage 4 */}
                  <circle cx="560" cy="80" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="560" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">04</text>
                  <text x="560" y="125" textAnchor="middle" fill="#CBD5E1" fontSize="11" fontWeight="600">Day 46–60</text>
                  <text x="560" y="140" textAnchor="middle" fill="#94A3B8" fontSize="10">MSME ODR &amp; Monopoly Cut</text>

                  {/* Stage 5 */}
                  <circle cx="720" cy="80" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="720" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">05</text>
                  <text x="720" y="125" textAnchor="middle" fill="#CBD5E1" fontSize="11" fontWeight="600">Day 60+</text>
                  <text x="720" y="140" textAnchor="middle" fill="#94A3B8" fontSize="10">Order XXXVII &amp; Bank Freeze</text>
                </svg>
              </div>

              {/* Mobile Escalation Cards */}
              <div className="md:hidden space-y-3 mb-6">
                {RECOVERY_STAGES.map((s, idx) => (
                  <div key={idx} className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#DC2626] text-white">
                        {s.stage} &bull; {s.timeline}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-white mb-1">{s.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase text-[11px] mb-1">
                    Multi-Channel Tri-Notice Delivery:
                  </span>
                  <p>
                    Every demand notice is simultaneously dispatched via Speed Post RPAD with postal
                    tracking, instant high-priority Email, and certified WhatsApp API with read-receipt
                    logs complying with Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase text-[11px] mb-1">
                    Section 43B(h) Auditor Alert:
                  </span>
                  <p>
                    Notices explicitly notify the buyer’s statutory auditors that non-settlement
                    triggers mandatory profit disallowances under Section 43B(h) of the Income-tax Act,
                    creating immediate board-level pressure to release payment before fiscal close.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Statutory Enforcement Grid
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                Statutory Recovery Matrix: MSMED Act, NI Act &amp; Order XXXVII CPC
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Creditors in veterinary, AYUSH, and nutraceutical verticals possess multiple
                overlapping statutory remedies that dismantle distributor delay tactics and enforce
                strict personal financial accountability.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Statutory Mechanism</th>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Governing Statute</th>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Trigger Window</th>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Relief / Penal Impact</th>
                      <th className="p-3 sm:p-4 border-b border-slate-800">Target Segment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {STATUTORY_MATRIX.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          {item.remedy}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-semibold align-top whitespace-nowrap">
                          {item.statute}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          {item.timing}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 align-top leading-relaxed">
                          {item.relief}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          {item.suitability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-800 leading-relaxed">
                <strong>Statutory Synergy Tip:</strong> Pair an MSMED Act Section 18 petition with a
                Section 138 NI Act criminal prosecution. While MSEFC adjudicates the civil debt and
                compounds interest at 3x the RBI Bank Rate, the criminal magistrate summons compels the
                distributor’s directors to appear in person, neutralizing protracted delay tactics.
              </div>
            </section>

            {/* Section 4: 4 Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Commercial Failure Modes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                4 Critical Sector Failure Modes &amp; Operational Recovery SOPs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Select a commercial default archetype below to review specific debtor pretexts,
                statutory exposures under Indian law, and the exact LegalRecovery.in operational
                countermeasures.
              </p>

              <VeterinaryPharmaScenarioTabs />
            </section>

            {/* Section 5: Seasonal Agro-Vet Defaults */}
            <section
              id="heading-rural-dealers"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Rural Channel Governance
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                Overcoming Seasonal Agro-Vet &amp; Dairy Cooperative Payment Freezes
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Veterinary pharmaceuticals and livestock nutrition constitute an essential lifeline
                  for India&apos;s rural agrarian economy. However, supply chain credit structures in
                  this vertical suffer from extreme informality. Agro-vet dealers frequently demand
                  extended credit buffers under the guise of seasonal animal husbandry cycles—such as
                  the monsoon sowing season, cattle calving periods, or commercial broiler bird
                  placement cycles.
                </p>
                <p>
                  A common pattern emerges when a dealer absorbs farmer payments in cash or receives
                  cleared billing from local dairy cooperatives, but withholds remittances to the
                  manufacturing brand by asserting that &quot;payments are blocked at the farm level.&quot;
                  In reality, these funds are frequently redirected to finance local crop seed lending,
                  real estate, or high-interest informal credit networks.
                </p>
                <p>
                  From an evidentiary standpoint, veterinary medicine suppliers often fail to maintain
                  written distributor agreements. However, under{" "}
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Distributor &amp; Dealer Dues Recovery Law
                  </Link>
                  , a binding commercial contract does not require a formal stamp-paper agreement. A
                  consecutive chain of commercial tax invoices, generated GST e-Way bills showing
                  transport to the dealer&apos;s rural godown, and countersigned motor transport lorry
                  receipts (LRs) establishes conclusive legal proof of debt.
                </p>
                <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800">
                  <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">
                    Home-Bank Jurisdiction Advantage: Section 142(2)(a) NI Act
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    When dealing with defaulting rural stockists in distant districts or states,
                    manufacturers often fear being dragged into remote rural courts. The 2015 amendment
                    to the Negotiable Instruments Act completely resolves this barrier. Under Section
                    142(2)(a), if a stockist&apos;s security cheque or settlement PDC bounces, the
                    criminal case is instituted at the magistrate court having jurisdiction over the
                    creditor manufacturer’s bank branch where the cheque was presented for clearance.
                    Defaulting rural stockists must personally travel to the manufacturer&apos;s city
                    to secure bail, providing immediate leverage to enforce 100% ledger settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: AYUSH Super-Stockist Territory Squatting */}
            <section
              id="heading-ayush-stockists"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  ASU &amp; Herbal Distribution
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                AYUSH Super-Stockist Territory Squatting &amp; Expiry Dump Rebuttals
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Manufacturers of Ayurvedic, Siddha, and Unani (ASU) medicines face a unique
                  commercial bottleneck: <strong>Territory Monopoly Squatting</strong>. Regional
                  super-stockists frequently demand exclusive marketing rights across entire revenue
                  divisions, only to neglect primary sales promotion while aggressively pushing their
                  own proprietary concoctions or competing private brands.
                </p>
                <p>
                  When the manufacturing company confronts the defaulting stockist over mounting
                  unpaid bills of ₹20L to ₹80L, the stockist deploys two retaliatory defenses:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>
                    <strong>Monopoly Lock &amp; Trade Boycott Threats:</strong> The stockist claims
                    exclusive territorial rights under their initial appointment letter and warns that
                    appointing any replacement distributor will trigger an association boycott across
                    local retail Ayurvedic bhandars and medical stores.
                  </li>
                  <li>
                    <strong>Manufactured Expired Stock Return Dumps:</strong> The stockist accumulates
                    unopened cartons of slow-moving seasonal churn (digestive churnas, herbal cough
                    syrups, winter oils) and attempts to dump the entire consignment back onto the
                    manufacturer, demanding credit notes that extinguish the ledger balance.
                  </li>
                </ol>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="font-bold text-amber-800 text-xs sm:text-sm">
                    Dismantling Expiry Return Debits under GST &amp; Contract Law:
                  </p>
                  <p className="text-slate-800 text-xs sm:text-sm mt-1">
                    Under Section 34(2) of the CGST Act, 2017, credit notes for sales returns cannot
                    be reported after November 30 following the end of the relevant financial year.
                    Furthermore, standard industry contracts cap expiry and breakage returns at 1.5%
                    to 2% of annual turnover. Under CBIC Circular No. 72/46/2018-GST, unaccepted
                    returns are treated as fresh supply transactions requiring a formal tax invoice
                    from the stockist. Manufacturers can legally reject unauthorized stock dumps,
                    enforce the full ledger, and terminate territory rights under Section 39 of the
                    Indian Contract Act, 1872.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Nutraceutical CDMO Batch Refusal */}
            <section
              id="heading-nutra-contract-mfg"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  CDMO &amp; Private-Label Protection
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                Enforcing Contract Liabilities for Private-Label Nutraceutical Batches
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  India&apos;s dietary supplement and functional wellness market is heavily driven by
                  third-party contract manufacturing organizations (CDMOs) and loan-license units.
                  D2C wellness brands, fitness influencers, and marketing companies commission custom
                  formulations—including whey protein isolate, plant protein blends, multivitamin
                  gummies, effervescent tablets, and herbal extract drops—under their own brand names.
                </p>
                <p>
                  When marketing campaigns underperform or consumer demand wanes, brand owners routinely
                  abandon completed batches at the manufacturer&apos;s factory warehouse, refusing to
                  pay the 70%–80% final milestone balance. Because these goods are custom-packed with the
                  brand owner&apos;s registered trademark, logo, and FSSAI marketer license, the
                  manufacturer cannot mitigate losses by selling them to other clients without
                  violating trademark laws and FSSAI packaging regulations.
                </p>
                <p>
                  Under Section 55(2) of the <strong>Sale of Goods Act, 1930</strong>, where the price
                  is payable on a day certain irrespective of delivery, the seller may sue the buyer
                  for the full agreed contract price even though property in the goods has not passed.
                  Furthermore, under Section 44 of the Act, once the manufacturer tenders delivery and
                  issues a formal 7-day batch lifting notice, the buyer becomes liable for all
                  subsequent storage charges, air-conditioned warehouse demurrage, and deterioration
                  risks.
                </p>
                <p>
                  When coupled with{" "}
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Section 43B(h) MSME Payment Rules
                  </Link>
                  , corporate brand marketers who fail to settle CDMO bills within 45 days lose their
                  tax deduction eligibility, triggering immediate corporate cash penalties that
                  compel prompt batch clearance.
                </p>
              </div>
            </section>

            {/* Section 8: Worked Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Empirical Case Study
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                Worked Recovery Ledger: Resolving a ₹36.5 Lakh Veterinary Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Review a live empirical case study demonstrating how a GMP-certified veterinary
                and AYUSH manufacturer recovered ₹36,50,000 in defaulted principal plus statutory
                penal interest from an agro-vet super-distributor within 21 days of notice dispatch.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl mb-6">
                <div className="border-b border-slate-800 pb-4 mb-4 flex flex-wrap justify-between items-center gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Case Ledger #VET-2026-IND04
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Veterinary Formulations &amp; AYUSH Patent Tonic Dues
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Status: 100% Recovered via Notice
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm mb-6">
                  <div className="space-y-2">
                    <p className="text-slate-400">
                      <strong>Creditor:</strong> Udyam-Registered Veterinary &amp; AYUSH Pharma Unit
                      (Haryana)
                    </p>
                    <p className="text-slate-400">
                      <strong>Debtor:</strong> Regional Agro-Vet Super-Distributor (Punjab)
                    </p>
                    <p className="text-slate-400">
                      <strong>Product Lines:</strong> Bovine Calcium Boluses, Mastitis Infusions &amp;
                      AYUSH Tonics
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400">
                      <strong>Principal Ledger Invoices:</strong> ₹36,50,000 (4 Tax Invoices)
                    </p>
                    <p className="text-slate-400">
                      <strong>Days Delinquent:</strong> 180 Days Past 45-Day Statutory MSME Window
                    </p>
                    <p className="text-slate-400">
                      <strong>Debtor Excuse:</strong> &quot;Milk cooperative rate crash; farmers have
                      not paid&quot;
                    </p>
                  </div>
                </div>

                {/* Calculation Breakdown */}
                <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/60 space-y-3">
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Statutory Calculation Breakdown (MSMED Act s.16 &amp; IT Act s.43B(h))
                  </span>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-slate-700">
                      <span className="text-slate-300">Principal Invoiced Amount (4 Invoices)</span>
                      <span className="font-bold text-white">₹36,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700">
                      <span className="text-slate-300">
                        MSMED Act s.16 Compound Interest (3x RBI Bank Rate = 19.50% p.a., 180 days)
                      </span>
                      <span className="font-bold text-emerald-400">+ ₹3,68,412</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700">
                      <span className="text-slate-300">
                        Section 43B(h) Corporate Tax Penalty Exposure on Debtor (31.2% on ₹36.5L)
                      </span>
                      <span className="font-bold text-amber-400">₹11,38,800 Added Tax</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-700">
                      <span className="text-slate-300">Bounced Security PDC Liability (NI Act s.138)</span>
                      <span className="font-bold text-red-400">Criminal Warrant Exposure</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm sm:text-base font-black">
                      <span className="text-white">Total Creditor Demand Claim</span>
                      <span className="text-emerald-400">₹40,18,412</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 p-3.5 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
                  <strong>Resolution Timeline:</strong> On Day 4 post-dispatch of the Advocate Demand
                  Notice, the distributor’s managing partner contacted the creditor to seek an amicable
                  solution. Confronted with the Section 43B(h) auditor disclosure and Section 142(2)
                  home-bank magistrate filing, the debtor transferred ₹20,00,000 via RTGS within 7
                  days and cleared the remaining ₹20,18,412 in two weekly tranches.
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                Want to calculate your exact statutory interest claim? Use our free{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline underline-offset-2"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                to compute compound interest at 3x the RBI Bank Rate with monthly rests.
              </p>
            </section>

            {/* Section 9: BSA 2023 Section 63 Evidence Dossier */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Court-Admissible Evidence
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier for Rural &amp; Modern Trade Audits
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the
                Indian Evidence Act, 1872, electronic records must be authenticated through Section 63
                evidentiary certificates. Ensure your recovery dossier includes the 6 core components
                below before dispatching formal statutory demands.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      GST E-Way Bills &amp; Part B Transporter Logs
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Electronic GST e-Way bills showing vehicle registration numbers, date of dispatch,
                    and delivery destination pin code matching the stockist’s registered warehouse.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Signed Transport Bilties (LRs) &amp; Godown Stamps
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Physical or scanned consignment notes issued by commercial road transporters
                    bearing the stockist’s receiving stamp, signature, or driver delivery acknowledgement.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      FSSAI / AYUSH Batch Certificate of Analysis (CoA)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Government-accredited or internal QC laboratory test certificates verifying batch
                    potency, shelf-life, and FSSAI/AYUSH regulatory compliance, defeating false quality
                    excuses.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      WhatsApp Indents &amp; Ledger Confirmation Chats
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chat exports and email chains where the distributor ordered specific stock,
                    requested rolling credit extensions, acknowledged running balances, or shared
                    deposit slips.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      5
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Cheque Return Memos with Banker CTS Stamps
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Official bank return memos stating reason codes such as &quot;Funds Insufficient&quot;
                    or &quot;Payment Stopped by Drawer&quot;, establishing the basis for Section 138
                    criminal action.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      6
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      BSA Section 63 Electronic Evidence Certificate
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A formal statutory certificate signed by your IT or Accounts Head affirming the
                    system integrity, database logs, and uncorrupted extraction of your accounting ERP
                    records.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Dual B2B Conversion Funnel CTA */}
            <section id="heading-cta" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Conversion &amp; Deployment Desk
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                Deploy Dedicated Recovery Infrastructure: ₹999 Test or Bulk CSV Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Whether you need to recover a single high-value rural agro-vet default or streamline
                hundreds of delinquent distributor and modern trade retail ledgers across India,
                LegalRecovery.in provides calibrated dual-track recovery infrastructure.
              </p>

              <VeterinaryPharmaRecoveryCTA />
            </section>

            {/* Section 11: 7 FAQs Accordion */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Executive Knowledge Base
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                Frequently Asked Questions on Veterinary, AYUSH &amp; Nutra Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Clear statutory answers addressing key legal questions faced by CFOs, General
                Counsel, and Credit Controllers in animal healthcare, herbal formulation, and dietary
                supplement companies.
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none text-left">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors pr-4">
                        {faq.q}
                      </span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform duration-200">
                        &darr;
                      </span>
                    </summary>
                    <div className="pt-3 mt-3 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Authorities & Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  12
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Statutory Foundations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-4">
                Statutory Authorities, Precedents &amp; Regulatory Frameworks
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">
                    Statutory Acts &amp; Government Frameworks:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>
                      <strong>Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act):</strong>{" "}
                      Sections 15, 16, 17, 18, 19 &amp; 24 (Mandatory 45-day payment, compound interest
                      at 3x RBI Bank Rate, and 75% pre-deposit rule).
                    </li>
                    <li>
                      <strong>Income-tax Act, 1961:</strong> Section 43B(h) (Disallowance of deductions
                      for overdue payments to Micro and Small enterprise suppliers).
                    </li>
                    <li>
                      <strong>Negotiable Instruments Act, 1881:</strong> Sections 138, 141, 142(2)(a)
                      &amp; 143A (Dishonour of cheques, director vicarious liability, home-bank
                      jurisdiction, and 20% interim relief).
                    </li>
                    <li>
                      <strong>Sale of Goods Act, 1930:</strong> Sections 42, 44, 46 &amp; 55 (Deemed
                      acceptance upon delivery, buyer liability for storage demurrage, and suit for
                      price).
                    </li>
                    <li>
                      <strong>Indian Contract Act, 1872:</strong> Sections 39, 51, 70 &amp; 73
                      (Termination for distributor non-performance, reciprocal promises, quantum
                      meruit, and compensation for breach).
                    </li>
                    <li>
                      <strong>Code of Civil Procedure, 1908:</strong> Order XXXVII &amp; Order XXXVIII
                      Rule 5 (Summary Suits on written contracts and pre-judgment bank attachment).
                    </li>
                    <li>
                      <strong>Bharatiya Sakshya Adhiniyam, 2023:</strong> Section 63 (Electronic evidence
                      admissibility and certificate requirements replacing legacy Section 65B of the
                      Indian Evidence Act).
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">
                    Related Recovery Spoke Guides in Healthcare &amp; Pharma:
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Link
                      href="/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                    >
                      Cardiac Stents &amp; Ortho Implants
                    </Link>
                    <Link
                      href="/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                    >
                      Medical Equipment &amp; AMC/CMC Recovery
                    </Link>
                    <Link
                      href="/pharma-third-party-contract-manufacturing-cdmo-batch-payment-recovery"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                    >
                      Pharma CDMO Batch Payment Recovery
                    </Link>
                    <Link
                      href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                    >
                      Pharmacy Wholesale Invoice Legal Notice
                    </Link>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 pt-2">
                  <p>
                    Legal Review &amp; Statutory Accuracy Verified by{" "}
                    <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}. Published by
                    LegalRecovery.in Editorial Board.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
