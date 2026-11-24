import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import UniformTableOfContents from "./UniformTableOfContents";
import UniformScenarioTabs from "./UniformScenarioTabs";
import UniformRecoveryCTA from "./UniformRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/corporate-school-hospital-uniform-bulk-order-payment-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (127 chars) — kept verbatim in <h1> and ARTICLE_SCHEMA.headline
const HERO_HEADLINE =
  "Stitched 5,000 Custom-Logo Uniforms and the Corporate, School or Security Agency Withheld the 50% Balance? Legal Recovery Guide";

const META_TITLE = "Corporate, School & Uniform Manufacturer Debt Recovery";
const META_DESCRIPTION =
  "Logo-embroidered uniforms have ₹0 resale value. Defeat belated fitting pretexts using Size-Set sign-offs, Sale of Goods Act s.55 & MSMED s.15–18 recovery.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
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
    title: "The Sale of Goods Act, 1930 (Sections 16, 17, 23, 42, 47, 55 & 56) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17, 18 & 19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "MSME Samadhaan / ODR Delayed Payment Monitoring Portal — Ministry of MSME, Government of India",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "The Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Records & Section 121 Estoppel) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Societies Registration Act, 1860 (Section 6 — Suits by and against Registered Societies) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2262",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 12A Pre-Institution Mediation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
];

const STATUTORY_PRECEDENTS = [
  {
    title: "Supreme Court on Mandatory 75% Pre-Deposit to Challenge MSEFC Uniform Recovery Awards",
    parties: "Tirupati Steels v. Shubh Industrial Component & Anr.",
    citation: "(2022) 7 SCC 429, Supreme Court of India",
    date: "Judgment Dated 19 April 2022",
    facts:
      "A buyer who suffered an adverse MSEFC arbitral award for unpaid manufactured goods attempted to challenge the award under Section 34 of the Arbitration Act without depositing 75% of the awarded amount mandated by Section 19 of the MSMED Act, 2006.",
    holding:
      "The Supreme Court held that the 75% pre-deposit requirement under Section 19 of the MSMED Act is mandatory, not directory. Courts cannot entertain any challenge to an MSEFC recovery award unless the defaulting corporate, school trust, or institutional buyer deposits 75% of the award value upfront.",
    amount: "75% Statutory Pre-Deposit Shield — Eliminates Dilatory Appeals",
    takeaway:
      "Once an institutional uniform manufacturer obtains an MSEFC award on MSME Samadhaan, the defaulting buyer cannot stall payment through frivolous Section 34 appeals without locking 75% cash in court.",
  },
  {
    title: "Supreme Court on MSMED Act Overriding Private Purchase Order Arbitration Clauses",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation & Anr.",
    citation: "(2021) 18 SCC 790, Supreme Court of India",
    date: "Judgment Dated 29 June 2021",
    facts:
      "Institutional buyers sought to block MSME suppliers from approaching the Micro and Small Enterprises Facilitation Council (MSEFC) by invoking standard-form arbitration clauses printed on the back of corporate Purchase Orders.",
    holding:
      "The Supreme Court ruled that the MSMED Act, 2006 is a special welfare statute whose Sections 15 to 24 override general arbitration agreements under the 1996 Act, provided the supplier held valid Udyam/EM-II registration on the date of the supply contract.",
    amount: "MSEFC Statutory Jurisdiction Prevails Over Buyer PO Boilerplate",
    takeaway:
      "Even if a hospital group, hotel chain, or MNC inserted a restrictive one-sided arbitration clause in its uniform PO, an Udyam-registered micro or small garment vendor can compel statutory conciliation and 3x RBI interest recovery via MSEFC.",
  },
  {
    title: "Supreme Court on Mandatory Section 12A Pre-Institution Mediation in Commercial Suits",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "Commercial suppliers filed recovery suits valued at ₹3 Lakh and above directly in Commercial Courts without exhausting Pre-Institution Mediation under Section 12A of the Commercial Courts Act, 2015, risking plaint rejection under Order VII Rule 11 CPC.",
    holding:
      "The Supreme Court declared Section 12A mediation strictly mandatory for all commercial suits of specified value (₹3 Lakh+) where no urgent interim relief (such as Order XXXVIII Rule 5 attachment) is genuinely sought.",
    amount: "Mandatory s.12A Mediation Gate for Commercial Claims >= ₹3 Lakh",
    takeaway:
      "Uniform manufacturers choosing Commercial Courts over MSEFC must serve a crisp Pre-Institution Mediation notice under s.12A (or plead urgent asset-dissipation grounds) so the suit is never rejected on procedural technicalities.",
  },
];

const FAQS = [
  {
    q: "Can a corporate, school, or security agency refuse the 50% balance citing 'fitting' or 'size' issues weeks after delivery?",
    a: "No. Once bulk custom-logo uniforms match the buyer-approved Size-Set (Golden Sample) signed off prior to cutting, Section 17 of the Sale of Goods Act, 1930 bars subjective quality or fitting objections. Under Section 42, retaining uniforms beyond a reasonable inspection window—or distributing them to staff, guards, or students—amounts to irrevocable deemed acceptance, entitling the manufacturer to sue for the full unpaid balance under Section 55(1).",
  },
  {
    q: "Why does the '₹0 open-market resale value' of logo-embroidered uniforms strengthen our recovery suit?",
    a: "Standard off-the-shelf garments can be resold to mitigate loss, allowing buyers to argue for partial damages. By contrast, uniforms embroidered with a corporate trademark, school crest, hospital insignia, or security agency badge cannot legally be sold to third parties under trademark law. Under Section 55(2) and Section 23 of the Sale of Goods Act, bespoke goods appropriated to the contract entitle the unpaid seller to recover 100% of the contract price—not merely a reduced margin.",
  },
  {
    q: "Who should we sue when a private school or college trust withholds uniform balance payments?",
    a: "Never issue a legal notice or file a suit solely in the school's brand name, which is not a juristic person. Check the school's GSTIN and affiliation records to identify whether it operates under a Registered Society (sue through the President/Secretary under Section 6 of the Societies Registration Act, 1860), a Public Charitable Trust (implead the Managing Trustees), or a Section 8 / Private Limited Company.",
  },
  {
    q: "Can we claim 3x RBI compound interest and Section 43B(h) tax leverage on unpaid uniform bills?",
    a: "Yes, if your manufacturing unit holds a valid Micro or Small Udyam Registration prior to the Purchase Order date. Under Sections 15 and 16 of the MSMED Act, 2006, payment cannot be delayed beyond 45 days even by written contract, and overdue balances attract monthly compound interest at three times the RBI bank rate. Additionally, under Section 43B(h) of the Income Tax Act, the buyer loses its income-tax expense deduction for unpaid Micro/Small vendor invoices.",
  },
  {
    q: "What if the buyer cancelled the second lot of 2,500 uniforms after fabric dyeing and cutting?",
    a: "Once custom Pantone-dyed fabric is cut to the buyer's size ratios and embroidered with their logo, the goods are unconditionally appropriated to the contract under Section 23 of the Sale of Goods Act. Unilateral cancellation is an anticipatory breach under Sections 39 and 73 of the Indian Contract Act, 1872, allowing you to recover full Work-in-Progress (WIP) conversion costs, fabric procurement outlay, and contracted profit.",
  },
  {
    q: "Can an industrial uniform maker retain unshipped packed cartons in its godown until the 50% balance is paid?",
    a: "Yes. Under Sections 47 to 49 of the Sale of Goods Act, 1930, an unpaid seller in possession of goods is statutorily entitled to exercise a seller's lien and withhold delivery of balance lots until the overdue balance on earlier lots (or advance-against-dispatch milestones) is cleared, while issuing a formal Notice of Readiness to Deliver.",
  },
  {
    q: "Should we file in the MSME Samadhaan (MSEFC) portal or file an Order XXXVII Summary Suit?",
    a: "If you are an Udyam-registered Micro or Small manufacturer with clean POs, GST invoices, and signed delivery challans, MSME Samadhaan (MSEFC) is generally superior because it awards 3x RBI compound interest and forces a 75% pre-deposit under Section 19 if the buyer appeals. If you are a Medium enterprise (not covered by s.15–18 MSEFC) or need urgent bank-account attachment, an Order XXXVII CPC Summary Suit or Commercial Court s.12A proceeding is the fastest route.",
  },
];

export default function UniformBulkOrderPaymentRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: HERO_HEADLINE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    // TODO(reviewer): src/data/reviewers.ts is absent in this repository
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Institutional Uniform Manufacturers Recover Withheld 50% Bulk Order Balances",
    description:
      "5-step creditor playbook using Size-Set sample estoppel, Sale of Goods Act s.55, MSMED s.15-18, and Section 43B(h) tax leverage.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Size-Set & Golden Sample Estoppel",
        text: "Compile signed Size-Set grading approvals, Pantone shade cards, and NABL/FR lab certificates matching the bulk lot.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Prove Deemed Acceptance & Staff Distribution",
        text: "Preserve GST e-Invoices, e-Way Bills, gate-entry challans, and photographic proof of staff or guards wearing the logo uniforms under BSA 2023 s.63.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Identify Correct Legal Entity (Trust / Society / Corporate)",
        text: "Verify the buyer's Registered Society (s.6), Public Trust, or CIN entity from GSTIN and affiliation records before drafting the demand.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve Fact-Verified Statutory Demand Notice",
        text: "Dispatch a 15-day notice invoking Sale of Goods Act s.55, MSMED s.15-16 (3x RBI interest), and Income Tax s.43B(h) disallowance via Email, WhatsApp, and Speed Post RPAD.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Escalate to MSEFC Samadhaan or Order XXXVII / Commercial Court",
        text: "File on MSME Samadhaan for Micro/Small units (triggering 75% s.19 appeal pre-deposit) or initiate Commercial Court s.12A / Order XXXVII Summary Suit.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: "Textiles & Garment Recovery",
        item: `${SITE_URL}/industries/textiles-apparel-garment-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Uniform Bulk Order Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-13 Textiles &amp; Apparel</span>
            <span>&bull;</span>
            <span>B2B Creditor Playbook</span>
            <span>&bull;</span>
            <span>Sale of Goods Act s.55 &amp; MSMED s.15–18</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {HERO_HEADLINE}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under the{" "}
            <Link
              href="/industries/textiles-apparel-garment-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Textiles, Apparel &amp; Garment Recovery Hub
            </Link>
            , custom-logo uniforms have ₹0 open-market resale value. Once bulk production matches your buyer-approved Size-Set sample, belated fitting excuses are barred by Sale of Goods Act s.17 &amp; s.42—enabling full price recovery under s.55 plus 3x RBI interest via MSMED s.16.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">₹0 Resale</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Trademark-locked logo garments trigger s.55 full price suit
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">45-Day Cap</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                MSMED s.15 statutory outer payment limit + s.43B(h) tax hook
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Monthly compound interest under MSMED s.16 for Micro/Small mills
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">75% Deposit</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Mandatory s.19 pre-deposit before buyer can appeal MSEFC award
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Textiles & Garment Recovery",
                href: "/industries/textiles-apparel-garment-recovery",
              },
              {
                label: "Uniform Bulk Order Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <UniformTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Institutional Uniform Makers Get Trapped on the 50% Balance
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Institutional uniform, industrial workwear, safety PPE, and hospitality linen manufacturers operating across Mumbai, Bhiwandi, Bengaluru, Ahmedabad, and Tirupur face a uniquely asymmetric credit trap. Most corporate, school, hospital, and security-agency bulk contracts run on a <strong>50% advance + 50% post-delivery balance</strong> structure. Once the factory dyes fabric to the client&apos;s exact Pantone shade, stitches 5,000 shirts or coveralls, and embroiders the buyer&apos;s corporate crest or school monogram, the inventory loses 100% of its open-market liquidity.
                </p>
                <p>
                  Defaulting procurement teams exploit this immobility. Knowing that you cannot legally resell trademarked corporate shirts or security-agency uniforms to another buyer, they stall the remaining 50% balance for 90 to 240 days using manufactured objections: <em>&ldquo;employees complained about collar fitting,&rdquo; &ldquo;PTA committee has not cleared uniform funds,&rdquo;</em> or <em>&ldquo;site deployment is on hold.&rdquo;</em>
                </p>
                <p>
                  Indian commercial and statutory law squarely protects bespoke manufacturers against this tactic. By combining <strong>Size-Set Sample Approval Estoppel</strong> under the Sale of Goods Act, 1930 with <strong>MSMED Act Sections 15–18</strong> and <strong>Income Tax Act Section 43B(h)</strong>, an institutional garment vendor can convert a stalled 50% balance into a high-leverage statutory recovery claim. If your unit also supplies through textile brokers or faces fashion-brand SOR rejections, review our companion guides on{" "}
                  <Link
                    href="/textile-commission-agent-broker-adatiya-buyer-default-liability"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    adatiya broker &amp; buyer joint liability
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    retail fashion SOR rejection recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Supreme Court Precedents Governing Uniform &amp; MSME Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Before serving a statutory demand notice, institutional uniform vendors must anchor their escalation in binding Supreme Court authority that prevents corporate buyers, hospital chains, and school trusts from dragging recovery into multi-year civil trials.
              </p>

              <div className="space-y-5">
                {STATUTORY_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 pl-6 sm:pl-7 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <span className="text-xs font-medium text-slate-500">{item.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mb-3">{item.title}</p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong>Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <div className="mt-3 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                          {item.amount}
                        </span>
                        <span className="text-xs text-slate-600 italic">{item.takeaway}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Operational Decision Tree: Which Legal Track Unlocks Your 50% Balance?
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your escalation track based on whether goods are already delivered, whether your unit holds Micro/Small Udyam status, and whether unshipped embroidered lots remain in your warehouse.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto mb-6">
                <svg
                  width="820"
                  height="340"
                  viewBox="0 0 820 340"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Decision tree for corporate, school, and industrial uniform payment recovery"
                  className="w-full h-auto"
                >
                  {/* Root Node */}
                  <rect x="260" y="16" width="300" height="54" rx="10" fill="#DC2626" />
                  <text x="410" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
                    50% Custom-Logo Uniform Balance Unpaid
                  </text>
                  <text x="410" y="57" textAnchor="middle" fill="#FEE2E2" fontSize="11">
                    Verify Delivery Status, Udyam &amp; Size-Set Sign-Off
                  </text>

                  {/* Connector Lines */}
                  <path d="M410 70 V102 M140 102 H680 M140 102 V128 M410 102 V128 M680 102 V128" stroke="#64748B" strokeWidth="2" />

                  {/* Branch 1 */}
                  <rect x="20" y="128" width="240" height="84" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="140" y="152" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="700">
                    Track A: Delivered &amp; Distributed
                  </text>
                  <text x="140" y="172" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Buyer cites fitting/size pretext
                  </text>
                  <text x="140" y="190" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Invoke s.17 Sample + s.42 Deemed Acceptance
                  </text>

                  {/* Branch 2 */}
                  <rect x="290" y="128" width="240" height="84" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="410" y="152" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="700">
                    Track B: Udyam Micro / Small Unit
                  </text>
                  <text x="410" y="172" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    PO &amp; GST Invoice past 45 days
                  </text>
                  <text x="410" y="190" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    MSMED s.16 (3x RBI) + s.43B(h) Notice
                  </text>

                  {/* Branch 3 */}
                  <rect x="560" y="128" width="240" height="84" rx="10" fill="#1E293B" stroke="#334155" />
                  <text x="680" y="152" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="700">
                    Track C: Unshipped / Cut WIP Lots
                  </text>
                  <text x="680" y="172" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Buyer stalls lifting packed cartons
                  </text>
                  <text x="680" y="190" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Invoke s.47 Lien + s.55(2) Price Suit
                  </text>

                  {/* Down Arrows */}
                  <path d="M140 212 V244 M410 212 V244 M680 212 V244" stroke="#64748B" strokeWidth="2" />

                  {/* Outcomes */}
                  <rect x="20" y="244" width="240" height="72" rx="10" fill="#0F172A" stroke="#DC2626" />
                  <text x="140" y="270" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Order XXXVII Summary Suit
                  </text>
                  <text x="140" y="290" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Or Commercial Court s.12A (&gt;= ₹3L)
                  </text>

                  <rect x="290" y="244" width="240" height="72" rx="10" fill="#0F172A" stroke="#10B981" />
                  <text x="410" y="270" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    MSME Samadhaan (MSEFC)
                  </text>
                  <text x="410" y="290" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Conciliation + 75% s.19 Appeal Shield
                  </text>

                  <rect x="560" y="244" width="240" height="72" rx="10" fill="#0F172A" stroke="#F59E0B" />
                  <text x="680" y="270" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Readiness Notice + s.73 WIP Claim
                  </text>
                  <text x="680" y="290" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Recover 100% bespoke conversion cost
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-xs font-bold text-red-400 uppercase mb-1">Track A: Delivered &amp; Distributed</p>
                  <p className="text-xs text-slate-300">
                    Invoke Sale of Goods Act s.17 (Size-Set match) + s.42 (deemed acceptance) and file Order XXXVII CPC or Commercial Court s.12A.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-xs font-bold text-emerald-400 uppercase mb-1">Track B: Udyam Micro / Small Unit</p>
                  <p className="text-xs text-slate-300">
                    Serve MSMED s.15/16 + Income Tax s.43B(h) notice, then file on MSME Samadhaan (MSEFC) for 3x RBI compound interest.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <p className="text-xs font-bold text-amber-400 uppercase mb-1">Track C: Unshipped / Cut WIP Lots</p>
                  <p className="text-xs text-slate-300">
                    Exercise s.47 unpaid seller&apos;s lien, serve Notice of Readiness, and claim full price under s.55(2) / Contract Act s.73.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Buyer Enforcement Matrix */}
            <section
              id="heading-buyer-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Institutional Buyer Enforcement Matrix: Corporate, School, Hospital &amp; Security
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Each uniform buyer category operates under a distinct legal entity structure and payment bottleneck. Naming the wrong respondent (such as a school&apos;s trade name instead of its Registered Society) causes months of procedural dismissal.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Buyer Segment</th>
                      <th className="p-3.5 font-bold">Correct Legal Entity to Sue</th>
                      <th className="p-3.5 font-bold">Primary Estoppel &amp; Proof</th>
                      <th className="p-3.5 font-bold">Optimal Recovery Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Corporate HR / MNC / IT Parks
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Private / Public Ltd Company (CIN) + Procurement &amp; CFO Notice CC
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Approved Size-Set chart + GST e-Invoice + Sec 43B(h) tax disallowance alert
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        MSME Samadhaan (MSEFC) or Commercial Court s.12A
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Private Schools &amp; Coaching Trusts
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Registered Society (s.6 President/Secretary) or Public Trust Trustees
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Principal-signed PO + uniform distribution register + zero-resale crest proof
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Order XXXVII Summary Suit or MSEFC Claim
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Hospital Chains &amp; 5-Star Hotels
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Hospitality / Healthcare Operating Company + Unit GM
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Pantone shade sign-off + custom-monogrammed linen/scrub gate challans
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        MSEFC (3x RBI Rate) + s.47 Lien on unshipped lots
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        PSARA Security Agencies &amp; Factories
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Proprietor / Partnership / Pvt Ltd Agency + Principal Employer Notice
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NABL FR/GSM lab report + guard deployment photos wearing badge uniforms
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        MSME ODR Portal + NI Act s.138 (if PDC bounced)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Size-Set Estoppel & Zero Resale Value */}
            <section
              id="heading-size-set-estoppel"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Defeating Belated Fitting Pretexts: Size-Set Estoppel &amp; Sale of Goods Act s.55
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  In institutional garment manufacturing, bulk cutting never begins on guesswork. Prior to production, the factory submits a <strong>Size-Set (or Golden Sample)</strong> across S, M, L, XL, and XXL ratios alongside fabric GSM and Pantone shade swatches. Once the buyer&apos;s HR manager, school administrator, or safety officer signs or emails approval of that Size-Set, three statutory locks snap shut in your favour:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                      1. Sale by Sample (s.17)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under Section 17 of the Sale of Goods Act, 1930, the seller&apos;s sole warranty is that bulk uniforms correspond with the approved sample in quality and grading. Subjective post-delivery &ldquo;fit&rdquo; complaints cannot override an approved Size-Set.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
                      2. Deemed Acceptance (s.42)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Section 42 deems a buyer to have accepted goods when they intimate acceptance, act inconsistently with the seller&apos;s ownership (e.g., distributing uniforms to staff), or retain them beyond a reasonable inspection period without rejection.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      3. Price Suit on Bespoke Goods (s.55)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Because logo-embroidered uniforms carry ₹0 open-market resale value, Section 55(1) &amp; (2) empower you to sue for the full unpaid contract price—not merely a hypothetical resale-loss differential.
                    </p>
                  </div>
                </div>

                <p>
                  What if the buyer never signed a formal long-form contract and only issued WhatsApp approvals or a basic Purchase Order? Review our guide on{" "}
                  <Link
                    href="/how-to-recover-money-without-written-agreement"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    recovering commercial dues without a formal written agreement
                  </Link>{" "}
                  and also check how{" "}
                  <Link
                    href="/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    dyeing and embroidery job-work fabric liens
                  </Link>{" "}
                  protect unshipped stock.
                </p>
              </div>
            </section>

            {/* Section 6: Interactive Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Real-World Uniform Default Scenarios &amp; Legal Counter-Moves
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact commercial bottleneck below to view the statutory defense-breaker and step-by-step recovery protocol.
              </p>

              <UniformScenarioTabs />
            </section>

            {/* Section 7: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Recovery Ledger: ₹18.50L Corporate Uniform Order (180-Day Delay)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                See how an Udyam-registered Micro/Small uniform manufacturer in Mumbai or Bengaluru quantifies its statutory claim when a corporate or security buyer withholds the 50% balance (₹9,25,000) for 180 days beyond the 45-day MSMED Act s.15 ceiling (assuming an illustrative RBI Bank Rate of 6.75%, i.e., <strong>20.25% p.a. compounded monthly</strong> under Section 16).
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
                      Invoice &amp; Statutory Interest Breakdown
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      <li className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-300">Total Custom-Logo Order Value (5,000 pcs)</span>
                        <span className="font-bold">₹18,50,000</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-300">50% Advance Received at PO Stage</span>
                        <span className="font-bold text-slate-300">− ₹9,25,000</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-300">Withheld 50% Principal Balance</span>
                        <span className="font-bold text-amber-400">₹9,25,000</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-300">MSMED s.16 Interest (6 Months @ 20.25% comp. monthly)</span>
                        <span className="font-bold text-emerald-400">+ ₹97,660</span>
                      </li>
                      <li className="flex justify-between pt-1">
                        <span className="font-bold text-white">Total Recoverable Principal + Interest</span>
                        <span className="font-black text-lg text-emerald-400">₹10,22,660</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                        Section 43B(h) Corporate Tax Disallowance Lever
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                        If the defaulting corporate buyer closes its financial year with this ₹9,25,000 overdue beyond 45 days, Income Tax Act{" "}
                        <Link
                          href="/law/section-43bh-msme-payment-rule"
                          className="text-red-300 underline hover:text-white font-semibold"
                        >
                          Section 43B(h)
                        </Link>{" "}
                        disallows the entire ₹9,25,000 expense deduction—triggering an immediate ~25.17% corporate tax hit of <strong>~₹2,32,822</strong> plus audit qualification in Form 3CD Clause 22.
                      </p>
                    </div>
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors text-center"
                    >
                      Calculate Exact 3x RBI Interest on Your Unpaid Bill &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Note: The 20.25% rate above illustrates 3x an indicative 6.75% RBI Bank Rate; your exact MSEFC computation uses the RBI Bank Rate notified on the appointed day. Read our step-by-step{" "}
                <Link
                  href="/msme-odr-portal-delayed-payment-guide"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME ODR &amp; Samadhaan Portal filing guide
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  6-Point Uniform Evidence &amp; BSA 2023 s.63 Digital Dossier
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before dispatching a legal notice or uploading a claim to MSEFC / Commercial Court, assemble these six documents so the buyer&apos;s &ldquo;pre-existing dispute&rdquo; defense collapses at threshold scrutiny:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed Size-Set & Golden Sample Sheet",
                    desc: "Physical or emailed approval of S–XXL garment measurements, logo placement, and Pantone shade card prior to bulk cutting.",
                  },
                  {
                    title: "2. GST e-Invoice & e-Way Bill Trail",
                    desc: "IRN-verified tax invoices showing HSN codes (6205/6211/6203), 50% advance credit, and e-Way Bill movement to the buyer's site.",
                  },
                  {
                    title: "3. Stamped Delivery Challan / Gate Register",
                    desc: "Security gate stamp, warehouse receipt, or courier POD proving physical handover of packed cartons without contemporaneous objection.",
                  },
                  {
                    title: "4. NABL / Mill GSM & FR Test Reports",
                    desc: "For hospital scrubs or industrial FR workwear, attach lab certificates proving fabric GSM, colour fastness, and safety standard compliance.",
                  },
                  {
                    title: "5. Staff / Guard Usage Proof (Deemed Acceptance)",
                    desc: "Timestamped photos or public social/event posts showing the buyer's employees, guards, or students wearing the supplied logo uniforms.",
                  },
                  {
                    title: "6. Section 63 BSA 2023 Electronic Certificate",
                    desc: "Mandatory statutory certificate authenticating WhatsApp size approvals, email POs, and ledger extracts for admissibility in court.",
                  },
                ].map((doc) => (
                  <div
                    key={doc.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">{doc.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{doc.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track CTA */}
            <section id="heading-cta-desk" className="scroll-mt-28">
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Serve an Advocate Uniform Balance Notice or Upload Bulk Defaulters
                </h2>
              </div>
              <UniformRecoveryCTA />
            </section>

            {/* Section 10: Related Textile & MSME Tools */}
            <section
              id="heading-related-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Essential Textile Recovery Templates, Calculators &amp; Hub Links
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/templates/textile-garment-buyer-and-broker-joint-demand-legal-notice"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Notice Template (P1)
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Textile &amp; Garment Buyer Joint Demand Legal Notice Format &rarr;
                  </p>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive Calculator (T1)
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSME 3x RBI Compound Interest &amp; s.43B(h) Calculator &rarr;
                  </p>
                </Link>
                <Link
                  href="/industries/textiles-apparel-garment-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Parent Industry Hub (IH1)
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Textiles, Apparel &amp; Garment Manufacturers Recovery Hub &rarr;
                  </p>
                </Link>
                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Institutional Batch Desk
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Bulk CSV Recovery Desk for 10 to 10,000+ Default Accounts &rarr;
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: Uniform Bulk Order Payment Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Authorities &amp; Government Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
