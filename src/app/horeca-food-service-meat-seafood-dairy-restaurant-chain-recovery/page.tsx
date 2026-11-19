import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HorecaRecoveryTableOfContents from "./HorecaRecoveryTableOfContents";
import HorecaRecoveryScenarioTabs from "./HorecaRecoveryScenarioTabs";
import HorecaRecoveryCTA from "./HorecaRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/horeca-food-service-meat-seafood-dairy-restaurant-chain-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Restaurant, Pub or Cloud-Kitchen Chain Shut Outlets Without Paying Your HoReCa Food/Dairy/Meat Ledger? Fast Recovery Playbook";

// Tightened from 67ch PDF draft to 57ch for Screaming Frog 30-60ch compliance
const META_TITLE = "HoReCa Food, Dairy & Meat: Restaurant & QSR Debt Recovery";

// Tightened from 178ch PDF draft to 139ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "F&B outlets shut LLP-1 owing ₹15L to HoReCa vendors & open a new cafe! Catch directors via NI Act s.138/141 PDCs, chef challans & s.43B(h).";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "horeca food supplier restaurant cloud kitchen unpaid bill recovery",
    "restaurant pub cloud kitchen shut down overnight unpaid food vendor",
    "qsr cafe chain stretching horeca supplier 120 days",
    "fssai shelf life accepted kitchen challan proof",
    "piercing phoenix restaurant brand same founder new entity",
    "msme 45 day rule horeca food distributors",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(META_TITLE),
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

const PRIMARY_SOURCES = [
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 139, 141 & 143A — Criminal Liability of Designated Partners & Directors on Bounced PDCs)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 45-Day Credit Cap & 3x RBI Compound Interest for Udyam Food Processors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Income-tax Act, 1961 (Section 43B(h) — Disallowance of Unpaid Micro & Small Enterprise Invoices Beyond 15/45 Days)",
    url: "https://www.incometax.gov.in/iec/foportal/",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 19–24, 41 & 42 — Deemed Acceptance Upon Kitchen Delivery & Cold-Chain Storage)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits on Signed Kitchen Challans, Invoices & Personal Guarantees)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Electronic Admissibility of Chef WhatsApp Orders, POS Logs & GST e-Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "Can I recover money if the restaurant LLP-1 shut down overnight and the same founders opened a new cafe?",
    answer:
      "Yes. Shutting an LLP or Pvt Ltd outlet does not erase personal criminal liability under Sections 138 and 141 of the NI Act, 1881 for dishonoured post-dated cheques signed by Designated Partners or Directors. Additionally, if your vendor onboarding form includes a Personal Guarantee clause, you can sue the promoters personally under Order XXXVII CPC. Where founders divert kitchen equipment or cash to a phoenix entity to defraud vendors, a criminal complaint under BNS Section 318 (cheating) and Section 316 (criminal breach of trust) creates immediate settlement pressure.",
  },
  {
    question:
      "What if a restaurant or cloud kitchen claims 'spoiled meat/dairy' or 'short FSSAI shelf life' weeks after delivery?",
    answer:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, perishable food items like imported cheese, frozen fries, poultry, seafood, and dairy must be inspected at the receiving dock. Once the Head Chef or Storekeeper signs and stamps your Delivery Challan without noting temperature abuse or expiry defects and places the crates into the walk-in chiller, the restaurant is legally deemed to have accepted the consignment. Retrospective quality debit notes raised weeks later are legally invalid.",
  },
  {
    question:
      "Does the MSME 45-day rule and Section 43B(h) apply to HoReCa food distributors?",
    answer:
      "Section 43B(h) of the Income Tax Act and Sections 15–18 of the MSMED Act, 2006 apply to Udyam-registered Micro and Small Enterprises engaged in manufacturing or processing (such as dairy processors, cheese/paneer manufacturers, bakery/sauce producers, coffee roasters, and meat/seafood processors) as well as eligible service providers. Purely trading-only wholesale entities cannot claim Section 43B(h) tax disallowance, but can still enforce Order XXXVII CPC Summary Suits, Section 138 NI Act, and contractual interest.",
  },
  {
    question:
      "Why should HoReCa distributors send an Advocate Legal Notice at Day 35 instead of waiting 90–120 days?",
    answer:
      "High-burn pubs, fine-dining outlets, and cloud kitchens in Mumbai, Bengaluru, Delhi-NCR, Goa, Pune, and Hyderabad often collapse within one quarter when landlord rent and Zomato/Swiggy commission pressures peak. Sending a formal Day-35 Advocate Legal Notice puts your ledger ahead of landlords and unsecured lenders while the restaurant's POS cash flows and bank accounts are still active.",
  },
  {
    question:
      "Are WhatsApp food orders from an Executive Chef and thermal delivery challans valid in court?",
    answer:
      "Yes. Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (replacing Section 65B of the Indian Evidence Act), WhatsApp purchase orders from the Head Chef/Procurement Manager, digital GST e-Invoices, e-Way bills, and scanned kitchen-stamped delivery challans are fully admissible in civil, commercial, and criminal courts when accompanied by a signed Section 63 electronic evidence certificate.",
  },
  {
    question:
      "Can I file a Section 138 cheque bounce case if the restaurant gave a 'Stop Payment' instruction or closed its bank account?",
    answer:
      "Yes. The Supreme Court has repeatedly held that 'Payment Stopped by Drawer' and 'Account Closed' attract full criminal prosecution under Section 138 of the NI Act, 1881, just like 'Funds Insufficient'. You must serve a statutory 15-day demand notice within 30 days of receiving the Bank Return Memo and name all active Designated Partners or Directors under Section 141.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-19T09:00:00+05:30",
  dateModified: "2026-11-19T09:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Stage Day-35 HoReCa Food & Restaurant Debt Recovery Playbook",
  description:
    "Step-by-step operational SOP for HoReCa cheese, meat, seafood, dairy, bakery, and coffee distributors to recover unpaid restaurant, pub, and cloud-kitchen ledgers.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Freeze Cold-Chain Credit & Lock Chef-Stamped Challans (Day 30–35)",
      text: "Halt credit dispatches at Day 35, compile Head Chef-stamped Delivery Challans, FSSAI batch logs, and WhatsApp orders, and reconcile the exact GST invoice ledger.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Dispatch Day-35 Advocate Notice to LLP & Promoters",
      text: "Serve a formal Legal Notice via Speed Post RPAD, Email, and WhatsApp addressing both the hospitality entity and its Designated Partners/Directors, citing Section 43B(h) if Udyam-registered.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Present Security PDCs & Trigger NI Act ss.138/141",
      text: "Deposit due post-dated security cheques; upon dishonour, issue the mandatory 15-day Section 138 demand notice within 30 days of the Bank Return Memo.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File Order XXXVII Summary Suit / Commercial Mediation / MSEFC",
      text: "Initiate Order XXXVII CPC Summary Suit on signed challans and personal guarantees, or file on MSME Samadhaan for 3x RBI compound interest.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Pierce Phoenix Entities via BNS s.318 & s.143A Interim Relief",
      text: "If promoters shut LLP-1 and reopen under a new entity, seek 20% interim compensation under s.143A NI Act and initiate BNS s.318/316 criminal action.",
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
      name: "Agri-Inputs, Cold Storage & Food Processing",
      item: `${SITE_URL}/industries/agri-inputs-cold-storage-food-processing-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "HoReCa Food & Restaurant Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function HorecaFoodServiceRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-21 · HoReCa, QSR &amp; Cloud-Kitchen Recovery</span>
            <span className="text-red-700">&bull;</span>
            <span>NI Act s.138/141 + Chef Challans</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/agri-inputs-cold-storage-food-processing-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Agri-Inputs, Cold Storage &amp; Food Processing Recovery Hub
            </Link>
            , HoReCa distributors recover unpaid cheese, meat, seafood, dairy, and bakery ledgers before outlets fold by serving Day-35 advocate notices, enforcing NI Act ss.138/141 against Designated Partners, proving delivery via chef-stamped challans (Sale of Goods Act s.42), and invoking Section 43B(h) for Udyam food processors.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-red-400">Day 35</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Optimal Notice Trigger Before Outlet Shutdown
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-emerald-400">s.138 / 141</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Criminal Liability on Directors &amp; Partners
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Compound Interest (Udyam Food Processors)
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-black text-slate-100">20% Relief</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Interim Payout Under NI Act s.143A
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Agri-Inputs & Food Processing Hub",
                href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
              },
              {
                label: "HoReCa Food & Restaurant Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <HorecaRecoveryTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Restaurant & QSR Default Risk */}
            <section
              id="horeca-outlet-mortality"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why F&amp;B Outlets Default—and Why Day-35 Action Beats Shutdown
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  HoReCa (Hotel, Restaurant, and Catering) foodservice distributors supplying imported mozzarella, frozen French fries, chilled poultry, seafood, bakery premixes, sauces, and specialty coffee beans operate on razor-thin cold-chain margins. Yet across high-burn hospitality corridors in <strong>Mumbai, Bengaluru, Delhi-NCR, Goa, Pune, and Hyderabad</strong>, independent pubs, fine-dining restaurants, and venture-backed cloud-kitchen chains routinely treat food vendors as interest-free working capital.
                </p>
                <p>
                  Because commercial kitchens require daily or bi-weekly cold-chain replenishment, a single restaurant group can accumulate ₹8 lakh to ₹35 lakh in unpaid invoices within 60 to 90 days. When aggregator commissions, high-street rentals, and excise renewals squeeze cash flow, habitual promoters use the classic <strong>&ldquo;phoenix hospitality&rdquo;</strong> playbook: they lock the doors of <em>Hospitality LLP-1</em> owing ₹15 lakh to HoReCa suppliers, surrender the lease, and reopen a rebranded cafe or cloud kitchen next month under <em>Ventures Pvt Ltd-2</em>.
                </p>
                <p>
                  Waiting until Day 90 or Day 120 to &ldquo;maintain the relationship&rdquo; is fatal. By Day 90, the restaurant&apos;s bank account is already drained by the landlord and POS aggregator settlements have stopped. Serving a formal <strong>Day-35 Advocate Legal Notice</strong> puts your ledger at the front of the queue while the kitchen is still operational, daily Zomato/Swiggy payouts are still hitting the bank, and the promoters still have a brand reputation to protect.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Day-35 Recovery Decision Tree */}
            <section
              id="day-35-escalation-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage Day-35 HoReCa Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this time-boxed escalation pipeline the moment a restaurant, QSR chain, or cloud kitchen crosses your 30-day credit window.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-6 mb-6 border border-slate-800">
                <svg
                  viewBox="0 0 840 240"
                  width={840}
                  height={240}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Day-35 HoReCa Food Distributor Debt Recovery Decision Tree"
                >
                  {/* Stage 1 */}
                  <rect x="12" y="30" width="144" height="170" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="84" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 · DAY 35</text>
                  <text x="84" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Freeze Credit &amp;</text>
                  <text x="84" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Lock Challans</text>
                  <text x="84" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">Compile Chef-Stamped</text>
                  <text x="84" y="152" textAnchor="middle" fill="#94A3B8" fontSize="10">Delivery Challans &amp;</text>
                  <text x="84" y="168" textAnchor="middle" fill="#94A3B8" fontSize="10">WhatsApp POs</text>

                  <path d="M 156 115 L 178 115" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="180" y="30" width="144" height="170" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="252" y="60" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 2 · DAY 36</text>
                  <text x="252" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Advocate Notice</text>
                  <text x="252" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">to Partners + CFO</text>
                  <text x="252" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">Speed Post + Email +</text>
                  <text x="252" y="152" textAnchor="middle" fill="#94A3B8" fontSize="10">WhatsApp; cite s.43B(h)</text>
                  <text x="252" y="168" textAnchor="middle" fill="#94A3B8" fontSize="10">if Udyam Processor</text>

                  <path d="M 324 115 L 346 115" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="348" y="30" width="144" height="170" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="420" y="60" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">STAGE 3 · DAY 45+</text>
                  <text x="420" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Present Security</text>
                  <text x="420" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">PDCs (s.138/141)</text>
                  <text x="420" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">15-Day Statutory Notice</text>
                  <text x="420" y="152" textAnchor="middle" fill="#94A3B8" fontSize="10">within 30d of Return</text>
                  <text x="420" y="168" textAnchor="middle" fill="#94A3B8" fontSize="10">Memo on All Signatories</text>

                  <path d="M 492 115 L 514 115" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="516" y="30" width="144" height="170" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="588" y="60" textAnchor="middle" fill="#60A5FA" fontSize="11" fontWeight="700">STAGE 4 · DAY 60+</text>
                  <text x="588" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Order 37 Suit /</text>
                  <text x="588" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">MSME MSEFC</text>
                  <text x="588" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">Summary Suit on</text>
                  <text x="588" y="152" textAnchor="middle" fill="#94A3B8" fontSize="10">Personal Guarantees &amp;</text>
                  <text x="588" y="168" textAnchor="middle" fill="#94A3B8" fontSize="10">3x RBI Interest</text>

                  <path d="M 660 115 L 682 115" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="684" y="30" width="144" height="170" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="756" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 5 · PHOENIX</text>
                  <text x="756" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Pierce LLP-1 via</text>
                  <text x="756" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">BNS s.318 &amp; s.143A</text>
                  <text x="756" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10">20% Interim Payout +</text>
                  <text x="756" y="152" textAnchor="middle" fill="#94A3B8" fontSize="10">Criminal Cheating</text>
                  <text x="756" y="168" textAnchor="middle" fill="#94A3B8" fontSize="10">Against New Entity</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 · Day 35",
                    title: "Freeze Credit & Lock Chef-Stamped Challans",
                    desc: "Stop dispatches immediately and compile signed kitchen challans, FSSAI batch logs, and WhatsApp chef orders.",
                  },
                  {
                    stage: "Stage 2 · Day 36",
                    title: "Serve Advocate Notice to LLP & Promoters",
                    desc: "Dispatch via Speed Post RPAD, Email & WhatsApp; cite Income Tax s.43B(h) if you are an Udyam food processor.",
                  },
                  {
                    stage: "Stage 3 · Day 45+",
                    title: "Present Security PDCs (NI Act ss.138/141)",
                    desc: "Serve 15-day statutory notice within 30 days of Bank Return Memo naming all active Directors/Designated Partners.",
                  },
                  {
                    stage: "Stage 4 · Day 60+",
                    title: "Order XXXVII Suit / MSME Samadhaan",
                    desc: "Enforce personal guarantees via Summary Suit or claim 3x RBI compound interest before MSEFC.",
                  },
                  {
                    stage: "Stage 5 · Phoenix",
                    title: "Pierce LLP-1 via BNS s.318 & s.143A",
                    desc: "Seek 20% interim cheque compensation and file BNS s.318 criminal complaint if founders open a new cafe.",
                  },
                ].map((card) => (
                  <div key={card.stage} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">
                      {card.stage}
                    </p>
                    <p className="text-sm font-bold mb-1">{card.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Remedy Matrix */}
            <section
              id="horeca-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Remedy Matrix for HoReCa &amp; Food Distributors
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Provision</th>
                      <th className="p-3.5 font-bold">HoReCa Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Leverage</th>
                      <th className="p-3.5 font-bold">Statutory Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">NI Act 1881 ss.138, 141 &amp; 143A</td>
                      <td className="p-3.5 text-slate-700">Bounced PDC / Security Cheque (&ldquo;Funds Insufficient&rdquo;, &ldquo;Stop Payment&rdquo;, or &ldquo;Account Closed&rdquo;)</td>
                      <td className="p-3.5 text-slate-700">Criminal prosecution of Designated Partners/Directors + 20% interim payout</td>
                      <td className="p-3.5 text-slate-700">30d notice from Return Memo; 15d cure; 30d complaint</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">MSMED Act ss.15–18 &amp; IT Act s.43B(h)</td>
                      <td className="p-3.5 text-slate-700">QSR / hotel stretches Udyam-registered dairy, bakery, sauce, or meat processor past 45 days</td>
                      <td className="p-3.5 text-slate-700">3x RBI Bank Rate compound interest + tax disallowance for corporate buyer</td>
                      <td className="p-3.5 text-slate-700">45d max credit cap; 90d MSEFC resolution target</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Sale of Goods Act 1930 ss.41 &amp; 42</td>
                      <td className="p-3.5 text-slate-700">Kitchen raises post-consumption &ldquo;spoilage / short FSSAI shelf-life&rdquo; debit note</td>
                      <td className="p-3.5 text-slate-700">Chef-stamped challan + chiller storage = irrevocable deemed acceptance</td>
                      <td className="p-3.5 text-slate-700">Immediate dock inspection required; late claims void</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">CPC Order XXXVII Summary Suit</td>
                      <td className="p-3.5 text-slate-700">Unpaid liquidated invoices backed by signed challans or Promoter Personal Guarantee</td>
                      <td className="p-3.5 text-slate-700">No automatic right to defend; fast decree against personal &amp; firm assets</td>
                      <td className="p-3.5 text-slate-700">10-day appearance window after summons; 3-year limit</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">BNS 2023 ss.316 &amp; 318</td>
                      <td className="p-3.5 text-slate-700">Promoter shuts LLP-1 overnight &amp; shifts kitchen assets to Phoenix Cafe-2</td>
                      <td className="p-3.5 text-slate-700">Criminal complaint for cheating &amp; dishonest asset diversion against founders</td>
                      <td className="p-3.5 text-slate-700">Immediate police / Magistrate complaint upon diversion proof</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: 4 F&B Failure Playbooks (Interactive Scenario Tabs) */}
            <section
              id="horeca-default-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Restaurant &amp; Cloud-Kitchen Default Playbooks
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select the commercial failure mode matching your overdue hospitality ledger to inspect the exact statutory counter-strike and 3-step execution plan.
              </p>

              <HorecaRecoveryScenarioTabs />
            </section>

            {/* Section 5: Worked ₹15L HoReCa Recovery Ledger */}
            <section
              id="worked-horeca-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Ledger: ₹15L Cheese, Meat &amp; Frozen Fries Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider an Udyam-registered dairy &amp; frozen food processor supplying ₹15,00,000 worth of mozzarella, frozen fries, and marinated chicken wings to a 4-outlet pub/cloud-kitchen LLP in Bengaluru/Mumbai on 30-day credit, now 120 days overdue (90 days past due date):
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                      Principal Unpaid Ledger
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-white mt-1">₹15,00,000</p>
                    <p className="text-xs text-slate-400 mt-1">18 Chef-Stamped Kitchen Challans</p>
                  </div>
                  <div className="bg-emerald-950/50 rounded-xl p-4 border border-emerald-700/50">
                    <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">
                      MSMED s.16 Interest (3x RBI)
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                      ~₹72,000+
                    </p>
                    <p className="text-xs text-emerald-200/80 mt-1">
                      Illustrative at ~19.5% p.a. compounded monthly for ~90d delay (verify exact RBI Bank Rate)
                    </p>
                  </div>
                  <div className="bg-red-950/50 rounded-xl p-4 border border-red-700/50">
                    <p className="text-[11px] uppercase tracking-wider text-red-300 font-bold">
                      s.43B(h) Tax Shock to Buyer
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-red-400 mt-1">~₹3.75L–₹4.5L</p>
                    <p className="text-xs text-red-200/80 mt-1">
                      25%–30% corporate tax hit if ₹15L remains unpaid at FY close
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 bg-white/5 rounded-xl p-4 border border-white/10 leading-relaxed">
                  <strong>Combined Enforcement Impact:</strong> When a ₹15L security PDC bounces, the creditor simultaneously demands <strong>₹3,00,000 (20% interim compensation)</strong> under Section 143A NI Act against the Designated Partners, while Section 43B(h) turns the unpaid ₹15L into non-deductible taxable income for the restaurant chain. Run your exact invoice dates in our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-300 underline hover:text-white font-semibold"
                  >
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </Link>
                  .
                </div>
              </div>
            </section>

            {/* Section 6: Chef-Stamped Challans & BSA 2023 s.63 Checklist */}
            <section
              id="chef-challan-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Chef-Stamped Challans &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Hospitality debtors frequently fire their kitchen managers and claim &ldquo;we never ordered or received those crates.&rdquo; Lock down these six evidentiary pillars before serving your Day-35 notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Kitchen Chef-Stamped Delivery Challans",
                    detail:
                      "Preserve physical or scanned challans bearing the restaurant&apos;s rubber stamp, Head Chef / Storekeeper signature, delivery time, and crate count.",
                  },
                  {
                    title: "2. FSSAI Batch, Shelf-Life & Reefer Logs",
                    detail:
                      "Attach cold-chain vehicle temperature logs and FSSAI best-before batch sheets proving compliant delivery at the kitchen dock (defeating Sale of Goods Act s.42 excuses).",
                  },
                  {
                    title: "3. WhatsApp Chef & Purchase Orders",
                    detail:
                      "Export daily WhatsApp indent chats from the Executive Chef or Central Kitchen Buyer along with a BSA 2023 Section 63 electronic certificate.",
                  },
                  {
                    title: "4. GST e-Invoices & e-Way Bills",
                    detail:
                      "Download IRN-validated GST tax invoices and e-Way bills showing GSTR-1 reporting and input tax credit (ITC) availed by the restaurant.",
                  },
                  {
                    title: "5. Vendor Onboarding & Personal Guarantee Form",
                    detail:
                      "Keep the signed credit application carrying promoter PAN, Aadhaar, residential address, and personal guarantee language overriding LLP limited liability.",
                  },
                  {
                    title: "6. Security PDCs & Bank Return Memos",
                    detail:
                      "Retain original dishonoured cheques, Bank Return Memos with clear stamp/date, and MCA Company/LLP Master Data identifying Designated Partners.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Stopping Phoenix Restaurateurs */}
            <section
              id="phoenix-llp-piercing"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Stopping Phoenix Restaurateurs: LLP-1 Shutdown to Cafe-2
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  When a restaurateur abandons <em>LLP-1</em> owing ₹15 lakh and opens a fresh bistro under <em>Pvt Ltd-2</em>, standard polite collection calls fail because the promoter hides behind the corporate veil. LegalRecovery.in&apos;s institutional escalation protocol pierces that shield through three coordinated tracks:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>
                    <strong>Personal Criminal Liability (NI Act s.141):</strong> Every Designated Partner or Managing Director who signed the cheque or controlled kitchen finances faces personal summons, non-bailable warrants on non-appearance, and 20% interim compensation orders—even if LLP-1 has zero balance.
                  </li>
                  <li>
                    <strong>Promoter Personal Guarantee Enforcement:</strong> Enforcing the personal guarantee in your HoReCa credit onboarding form via an Order XXXVII CPC Summary Suit enables direct attachment of the promoter&apos;s personal bank accounts and property.
                  </li>
                  <li>
                    <strong>Dishonest Asset Diversion (BNS s.318 / s.316):</strong> Documenting shared FSSAI premises, identical directors on MCA records, and transferred walk-in chillers/ovens supports a criminal cheating complaint that threatens the new cafe&apos;s launch.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Conversion Funnel */}
            <section
              id="horeca-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Send a Day-35 HoReCa Notice or Upload Outlet Portfolio
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are chasing a single neighbourhood pub&apos;s ₹3 lakh cheese/meat ledger or recovering across 150+ QSR and cloud-kitchen accounts pan-India, choose your execution track below.
              </p>

              <HorecaRecoveryCTA />
            </section>

            {/* Section 9: Related Guides, Tools & Templates */}
            <section
              id="horeca-related-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related Agri-Food Guides, Calculators &amp; Notice Templates
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Agri-Inputs, Cold Storage & Food Processing Hub",
                    href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
                    tag: "Parent Hub",
                  },
                  {
                    title: "MSME 3x RBI Delayed Payment Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "T1 Calculator",
                  },
                  {
                    title: "Legal Notice & Reply Format Workspace",
                    href: "/templates/legal-notice-reply-format",
                    tag: "P1 Template",
                  },
                  {
                    title: "Section 138 Cheque Bounce Timeline & Rules",
                    href: "/cheque-bounce-notice-timeline-section-138",
                    tag: "NI Act s.138",
                  },
                  {
                    title: "Distributor & Dealer Dues Recovery Guide",
                    href: "/distributor-dealer-dues-recovery",
                    tag: "Channel Credit",
                  },
                  {
                    title: "Rice, Dal, Flour & Edible Oil Mill Recovery",
                    href: "/rice-dal-flour-sugar-edible-oil-mill-wholesale-buyer-recovery",
                    tag: "IND-21 Spoke",
                  },
                  {
                    title: "FPO & Cooperative Dairy B2B Buyer Recovery",
                    href: "/fpo-farmer-producer-company-cooperative-dairy-b2b-buyer-recovery",
                    tag: "IND-21 Spoke",
                  },
                  {
                    title: "Agrochemical & Seed Dealer Credit Recovery",
                    href: "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery",
                    tag: "IND-21 Spoke",
                  },
                  {
                    title: "Legal Notice Kaise Bheje (Hindi Guide)",
                    href: "/hi/legal-notice-kaise-bheje",
                    tag: "Hindi Guide",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#DC2626] transition-all shadow-sm"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.tag}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                      {item.title} &rarr;
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="horeca-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: HoReCa &amp; QSR Debt Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm md:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="horeca-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Official Bare Acts
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-4 transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
