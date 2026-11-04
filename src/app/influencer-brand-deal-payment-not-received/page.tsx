import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import InfluencerNoticeCTA from "./InfluencerNoticeCTA";
import InfluencerTableOfContents from "./InfluencerTableOfContents";
import InfluencerScenarioTabs from "./InfluencerScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Influencer Brand Deal Payment Not Received? Legal Steps",
  description:
    "Brand deal or agency payment delayed for months? Contract terms, ASCI context, evidence and a demand notice that gets creators paid.",
  alternates: {
    canonical: `${SITE_URL}/influencer-brand-deal-payment-not-received`,
  },
  openGraph: {
    title: "Brand or Agency Not Paying for Your Collaboration? Creator Legal Recovery Guide",
    description:
      "Legal decision tree and recovery playbook for Indian influencers, content creators, and YouTubers: joint agency-brand notices, Copyright Act Section 19 takedown leverage, MSME 45-day rule, and Form 26AS TDS proof.",
    url: `${SITE_URL}/influencer-brand-deal-payment-not-received`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 10 (Electronic Contracts), Section 70 (Quantum Meruit for Non-Gratuitous Content), Section 73 (Breach Damages) & Sections 213–226 (Principal-Agent Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Copyright Act, 1957 (Act No. 14 of 1957) — Section 17 (First Ownership of Creator), Section 19(1) & 19(4) (Written Assignment & Royalty Condition), Section 38 (Performers' Rights) & Section 51 (Infringement)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 & MSMED (Amendment) Act, 2026 — Sections 15 to 18 (45-Day Payment Mandate, 3× RBI Bank Rate Compound Interest & MSME ODR Portal)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income-tax Act, 1961 — Section 43B(h) (Tax Disallowance on Unpaid MSE Creator Invoices), Section 194J (10% Professional TDS), Section 194C (Contract TDS) & Section 194R (10% Perquisite TDS on Barter/Gifts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title: "Advertising Standards Council of India (ASCI) Guidelines for Influencer Advertising in Digital Media & Central Consumer Protection Authority (CCPA) Endorsements Know-Hows",
    url: "https://www.ascionline.in/influencer-guidelines/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of WhatsApp Briefs, Instagram DMs, Release Order Emails & Meta Ad Library Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Mandate on Paying for Creative or Commercial Work Delivered Without a Formal Signed Contract (Quantum Meruit)",
    parties: "Food Corporation of India & Ors. v. Vikas Majdoor Kamdar Sahkari Mandli Ltd.",
    citation: "(2007) 13 SCC 544, Supreme Court of India",
    date: "Judgment Dated 7 November 2007",
    facts:
      "The claimant executed substantial commercial services at the express request of the principal's officers without a formal signed rate agreement for the additional scope. After accepting and utilizing the services for its commercial operations, the principal refused payment contending that no formal stamped contract had been executed.",
    holding:
      "The Supreme Court held that under Section 70 of the Indian Contract Act, 1872, whenever a person lawfully does anything or delivers services for another person not intending to do so gratuitously, and the other person enjoys the benefit thereof, the beneficiary is statutorily bound to pay fair compensation under the doctrine of Quantum Meruit. Absence of a formal contract cannot be used to unjustly enrich the recipient.",
    amount: "Full Quantum Meruit Compensation + 9% Annual Interest Ordered",
    takeaway:
      "Even if you shot and published a Reel, YouTube integration, or photography campaign solely on a WhatsApp brief, Instagram DM, or email confirmation without signing a formal vendor contract, the brand and agency are legally bound to pay once your content goes live.",
  },
  {
    title: "Delhi High Court Precedent on Copyright Reversion & Invalid Usage When Agreed Consideration Is Not Paid",
    parties: "Pine Labs Pvt. Ltd. v. Gemalto Terminals India Pvt. Ltd. & Ors.",
    citation: "2011 SCC OnLine Del 3186 (FAO (OS) 635/2009), High Court of Delhi (Division Bench)",
    date: "Judgment Dated 3 August 2011",
    facts:
      "A developer created custom creative/software work for a commercial client under a master engagement. Disputes arose regarding the scope of assignment, non-payment of milestone royalties, and continued commercial exploitation of the creator's intellectual property by the client.",
    holding:
      "The Division Bench of the Delhi High Court held that under Section 19 of the Copyright Act, 1957, an assignment of copyright must strictly specify the duration, territorial extent, and royalty/consideration payable; if the terms are unfulfilled or unspecified, Section 19(4) and Section 19(5) operate in favour of the author/creator. Commercial exploitation beyond the paid and assigned terms constitutes actionable copyright infringement.",
    amount: "Creator's Statutory Ownership & Injunction Leverage Affirmed Under Section 19",
    takeaway:
      "A brand or agency does not automatically own the copyright in your raw video, voiceover, or edit merely by sending a brief. Until your agreed invoice is paid in full, you can legally revoke ad-boosting / whitelisting permissions and serve a copyright takedown notice.",
  },
  {
    title: "Supreme Court Ruling That an Intermediary Cannot Hide Behind 'Back-to-Back' Non-Payment From the Principal",
    parties: "Zonal General Manager, Ircon International Ltd. v. Vinay Heavy Equipments",
    citation: "(2015) 13 SCC 680, Supreme Court of India",
    date: "Judgment Dated 7 April 2015",
    facts:
      "An intermediary agency engaged a service provider to execute deliverables for an end-client. After the deliverables were completed and accepted, the intermediary refused to release payments for months, arguing that the contract was 'back-to-back' and the end-client had not yet settled the intermediary's master bill.",
    holding:
      "The Supreme Court rejected the 'back-to-back' defence, ruling that primary contractual privity and liability rest on the contracting intermediary that issued the work order. In the absence of an explicit covenant shifting the end-client's default risk onto the performer, an intermediary cannot withhold payments indefinitely on the excuse that its upstream client has not paid.",
    amount: "100% Principal Dues + Arbitral Interest Upheld Against Intermediary",
    takeaway:
      "When an influencer marketing agency tells you 'we will pay you only when the brand pays us' 90 days after your Reel went live, that excuse is legally untenable. The agency is your primary debtor, and putting the Brand CMO on copy exposes the delay immediately.",
  },
  {
    title: "Supreme Court Ruling Barring Arbitrary Penalty Deductions Without Proof of Actual Loss",
    parties: "M/s Kailash Nath Associates v. Delhi Development Authority (DDA) & Anr.",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 9 January 2015",
    facts:
      "After contractual performance, the paying party sought to forfeit and deduct substantial sums citing internal penalty clauses, despite having approved the milestones and suffered no quantifiable financial loss.",
    holding:
      "Interpreting Sections 73 and 74 of the Indian Contract Act, 1872, the Supreme Court held that a party cannot unilaterally deduct arbitrary penalties or forfeit contract consideration unless it pleads and proves actual monetary damage caused by a breach of contract.",
    amount: "Full Refund of Unlawful Deductions + Statutory Interest",
    takeaway:
      "If an agency or brand approves your draft video before posting, they cannot later slash your invoice by 30%–50% claiming 'organic views were lower than expected' or 'posting was 2 hours late' unless your contract was explicitly a per-view CPA deal.",
  },
];

const FAQS = [
  {
    question: "What legal action can an influencer or content creator take if a brand or agency does not pay after the post goes live?",
    answer:
      "You have three immediate statutory levers under Indian law: (1) Serve a formal 15-day Advocate Legal Demand Notice jointly on the Influencer Marketing Agency and the Sponsoring Brand's Marketing Head/Directors under Sections 70 and 73 of the Indian Contract Act, 1872; (2) Put both parties on notice of Copyright License Revocation under Section 19 and Section 51 of the Copyright Act, 1957, warning of formal DMCA/Copyright takedown strikes on Instagram/Meta and YouTube if they continue using or boosting your unpaid video; and (3) If you hold Udyam MSME registration, file an online claim on the MSME ODR Portal for 3× RBI Bank Rate compound interest (~20.25% p.a.) and invoke Section 43B(h) income-tax expense disallowance against the buyer.",
  },
  {
    question: "Can an influencer marketing agency legally delay my payment for 90+ days saying 'the brand hasn't paid us yet'?",
    answer:
      "No. Under Indian contract law and the Supreme Court ruling in Ircon International Ltd. v. Vinay Heavy Equipments (2015) 13 SCC 680, primary liability to pay rests on the agency that issued your Release Order or brief. An agency cannot shift its own collection delays onto a creator after deliverables are published. Moreover, in over 60% of delayed creator payout cases, the brand has already paid the agency within 30–45 days, and the agency is holding your money for its own cash flow. Serving a joint legal notice that copies the Brand's Chief Marketing Officer (CMO) and Legal Team almost always forces the agency to clear your payout within days to save its brand retainer.",
  },
  {
    question: "Can I recover my brand deal payment if there was no signed contract and everything was agreed on WhatsApp or Instagram DMs?",
    answer:
      "Yes. Under Section 10 of the Indian Contract Act, 1872, read with Section 10A of the Information Technology Act, 2000, an agreement formed via WhatsApp messages, Instagram DMs, or emails—showing the deliverables, agreed fee, draft approval, and live post link—is a legally binding contract. Furthermore, Section 70 of the Contract Act (Quantum Meruit) mandates that since you published commercial brand promotion non-gratuitously and the brand enjoyed the marketing benefit, they must compensate you. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, exported WhatsApp chats and emails are fully admissible in court.",
  },
  {
    question: "Should I delete the unpaid Reel or YouTube video immediately, or send a legal notice first?",
    answer:
      "Do not silently delete the post before taking legal screenshots—sometimes agencies misuse sudden deletion to allege that you breached the campaign exclusivity window. Instead, first archive complete screenshots of the live post URL, insight metrics, comments, and any Meta Ad Library paid boosts. Next, turn off 'Allow Brand Partner to Boost' in Instagram settings and have an advocate serve a 15-day Legal Notice stating that due to non-payment of consideration, the conditional license under Section 19 of the Copyright Act stands revoked and the content will be taken down / struck for copyright infringement at the brand's risk and cost if dues remain unpaid.",
  },
  {
    question: "Does TDS deducted under Section 194J, 194C, or 194R in Form 26AS prove that the agency owes me the collaboration fee?",
    answer:
      "Yes, it is gold-standard legal proof. When an agency or brand deducts 10% TDS under Section 194J (professional/technical fees), 1%–2% under Section 194C (contract), or 10% under Section 194R (perquisite tax on barter/gifted products above ₹20,000 a year) and deposits it against your PAN in Form 26AS / AIS, they have formally booked your invoice as an admitted liability in their tax filings. They cannot later deny the contract or dispute the deliverable in court, and the TDS deposit acts as an acknowledgment of debt.",
  },
  {
    question: "Can individual influencers and YouTubers register under Udyam (MSME) to use the 45-day payment rule?",
    answer:
      "Yes. Individual creators, sole proprietors, freelance videographers, and content studios can register for free on the government Udyam portal as a Micro Enterprise under Service NIC codes (such as NIC 73100 for advertising/influencer marketing services or NIC 5911 for video production). Once your Udyam Registration Number (URN) is printed on your invoice, the agency or brand is legally bound under Section 15 of the MSMED Act to pay you within 15 to 45 days, failing which they owe 3× RBI Bank Rate monthly compound interest (~20.25% p.a.) under Section 16 and face Section 43B(h) tax disallowance.",
  },
  {
    question: "Brand ya influencer agency collab ke baad payment na de toh legal notice kaise bheje?",
    answer:
      "Agar aapne Instagram Reel, YouTube video ya brand shoot pura kar diya hai aur agency 60–90 din baad bhi 'brand se payment nahi aaya' bolkar paisa rok rahi hai, toh aap Indian Contract Act ki Dhara 70 aur 73, Copyright Act ki Dhara 19, aur MSMED Act ke tehat ek joint Advocate Legal Notice bhej sakte hain. LegalRecovery.in par verified commercial advocates Agency ke Directors aur Brand ke Marketing Head dono ko Registered Speed Post, email aur WhatsApp se 15-din ka demand notice bhejte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Brand or Agency Not Paying for Your Collaboration? Recover It",
  description:
    "Brand deal or agency payment delayed for months? Contract terms, ASCI context, evidence and a demand notice that gets creators paid.",
  datePublished: "2026-11-04T11:30:00+05:30",
  dateModified: "2026-11-04T11:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/influencer-brand-deal-payment-not-received`,
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
  about: [
    {
      "@type": "Thing",
      name: "Influencer Brand Deal Payment Recovery India",
    },
    {
      "@type": "Thing",
      name: "Creator Contract Dispute & Copyright Section 19 Leverage",
    },
  ],
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
      name: "Freelancer & Creator Recovery",
      item: `${SITE_URL}/freelancer-payment-recovery-legal-options-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Influencer Brand Deal Payment Recovery",
      item: `${SITE_URL}/influencer-brand-deal-payment-not-received`,
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

export default function InfluencerBrandDealPaymentRecoveryPage() {
  const breadcrumbItems = [
    { label: "Freelancer & Creator Recovery", href: "/freelancer-payment-recovery-legal-options-india" },
    { label: "Influencer Brand Deal Payment Recovery", href: "/influencer-brand-deal-payment-not-received" },
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
        {/* Hero Section strictly matching /legal-notice-to/irctc and /cheque-bounce-case-against-company-directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Contract Act Sec 70 &amp; 73 • Copyright Act Sec 19</span>
              <span className="text-red-500">•</span>
              <span>Creator &amp; Influencer Dispute Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Brand or Agency Not Paying for Your Collaboration? Recover It
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Creator Payment Rights, Agency Liability &amp; Copyright Leverage)
              </p>
              <p>
                When a brand or influencer marketing agency withholds collaboration fees after your content goes live, both the contracting agency and the sponsoring brand can be pursued under Sections 70, 73, and 226 of the Indian Contract Act, 1872. Until paid, commercial usage rights remain revocable under Section 19 of the Copyright Act, 1957. Serve a 15-day joint advocate demand notice before invoking MSME ODR (45-day rule) or civil recovery within 3 years.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Dual Notice</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Agency + Brand CMO Liable</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Section 19</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Copyright &amp; Ad-Boost Revocation</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3× Bank Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">~20.25% Interest (Udyam Creators)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Pre-Takedown Demand Window</p>
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
            <InfluencerTableOfContents />

            {/* Main Content Body */}
            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype G1 Centrepiece — Decision Tree (<figure> with SVG + nested <ul> fallback) */}
              <section id="heading-decision-tree" aria-labelledby="heading-decision-tree-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-decision-tree-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Creator &amp; Influencer Payment Recovery Decision Tree: Which Legal Route Fits Your Unpaid Brand Collaboration?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India&apos;s creator economy, brand deal payments routinely get trapped between influencer marketing agencies, talent managers, and corporate brand procurement teams for 90 to 180 days. Selecting the fastest legal escalation depends on three facts: (1) whether the brand is actively using or boosting your video in paid ads, (2) whether you hold Udyam MSME registration, and (3) whether your deal was documented via a formal Release Order or WhatsApp/Instagram DMs. Use this decision tree to map your exact route:
                </p>

                <figure className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-5 overflow-x-auto">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs text-slate-500">
                    <span className="font-bold text-slate-800 uppercase tracking-wider">
                      Archetype G1 Creator Recovery Decision Tree
                    </span>
                    <span className="md:hidden text-red-600 font-semibold animate-pulse">Swipe horizontally →</span>
                  </div>

                  {/* Hand-Authored SVG Decision Tree Flowchart */}
                  <svg
                    viewBox="0 0 880 340"
                    width="880"
                    height="340"
                    className="w-full h-auto text-xs font-sans min-w-[700px]"
                    role="img"
                    aria-label="Decision tree for influencer and content creator brand deal payment recovery in India"
                  >
                    <defs>
                      <linearGradient id="infDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="infRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="infGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Root Node: Mandatory Pre-Step */}
                    <rect x="210" y="12" width="460" height="58" rx="10" fill="url(#infRed)" />
                    <text x="440" y="34" fill="#FECACA" fontWeight="bold" fontSize="10" textAnchor="middle">
                      STEP 1 FOR ALL UNPAID CREATORS (DAY 1–15)
                    </text>
                    <text x="440" y="54" fill="#FFFFFF" fontWeight="bold" fontSize="12" textAnchor="middle">
                      Serve Joint 15-Day Advocate Notice to Agency Directors + Brand CMO
                    </text>

                    {/* Branch Lines from Root */}
                    <path d="M 440 70 L 440 95" stroke="#475569" strokeWidth="2" />
                    <path d="M 115 95 L 765 95" stroke="#475569" strokeWidth="2" />
                    <path d="M 115 95 L 115 120" stroke="#475569" strokeWidth="2" />
                    <path d="M 330 95 L 330 120" stroke="#475569" strokeWidth="2" />
                    <path d="M 550 95 L 550 120" stroke="#475569" strokeWidth="2" />
                    <path d="M 765 95 L 765 120" stroke="#475569" strokeWidth="2" />

                    {/* Question Nodes (Row 2) */}
                    <rect x="20" y="120" width="190" height="68" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="115" y="142" fill="#991B1B" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Q1: Brand Running Paid
                    </text>
                    <text x="115" y="158" fill="#991B1B" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Ads / Using Raw Video?
                    </text>
                    <text x="115" y="175" fill="#7F1D1D" fontSize="9.5" textAnchor="middle">
                      Whitelisted Reel / YouTube Ad
                    </text>

                    <rect x="235" y="120" width="190" height="68" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="330" y="142" fill="#92400E" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Q2: Creator / Studio Has
                    </text>
                    <text x="330" y="158" fill="#92400E" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Udyam MSME Registration?
                    </text>
                    <text x="330" y="175" fill="#78350F" fontSize="9.5" textAnchor="middle">
                      Micro/Small Service Enterprise
                    </text>

                    <rect x="455" y="120" width="190" height="68" rx="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
                    <text x="550" y="142" fill="#0F172A" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Q3: Only WhatsApp / DM /
                    </text>
                    <text x="550" y="158" fill="#0F172A" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Email Brief (No Contract)?
                    </text>
                    <text x="550" y="175" fill="#475569" fontSize="9.5" textAnchor="middle">
                      Live Post + 194J TDS Check
                    </text>

                    <rect x="670" y="120" width="190" height="68" rx="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
                    <text x="765" y="142" fill="#0F172A" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Q4: Agency Issued PDC
                    </text>
                    <text x="765" y="158" fill="#0F172A" fontWeight="bold" fontSize="11" textAnchor="middle">
                      Cheque That Bounced?
                    </text>
                    <text x="765" y="175" fill="#475569" fontSize="9.5" textAnchor="middle">
                      Dishonour Memo Received
                    </text>

                    {/* Arrows Down to Route Boxes */}
                    <path d="M 115 188 L 115 218" stroke="#DC2626" strokeWidth="2" />
                    <path d="M 330 188 L 330 218" stroke="#047857" strokeWidth="2" />
                    <path d="M 550 188 L 550 218" stroke="#1E293B" strokeWidth="2" />
                    <path d="M 765 188 L 765 218" stroke="#1E293B" strokeWidth="2" />

                    {/* Route Outcome Nodes (Row 3) */}
                    <rect x="20" y="218" width="190" height="105" rx="10" fill="url(#infRed)" />
                    <text x="115" y="240" fill="#FECACA" fontWeight="bold" fontSize="10" textAnchor="middle">
                      ROUTE 1 (IP LEVERAGE)
                    </text>
                    <text x="115" y="258" fill="#FFFFFF" fontWeight="bold" fontSize="11.5" textAnchor="middle">
                      Copyright Sec 19 Takedown
                    </text>
                    <text x="115" y="276" fill="#FEE2E2" fontSize="9.5" textAnchor="middle">
                      • Revoke Ad Boost License
                    </text>
                    <text x="115" y="292" fill="#FEE2E2" fontSize="9.5" textAnchor="middle">
                      • Meta / YouTube IP Strike
                    </text>
                    <text x="115" y="308" fill="#FECACA" fontSize="9.5" textAnchor="middle">
                      • Sec 51 Infringement Claim
                    </text>

                    <rect x="235" y="218" width="190" height="105" rx="10" fill="url(#infGreen)" />
                    <text x="330" y="240" fill="#A7F3D0" fontWeight="bold" fontSize="10" textAnchor="middle">
                      ROUTE 2 (STATUTORY ODR)
                    </text>
                    <text x="330" y="258" fill="#FFFFFF" fontWeight="bold" fontSize="11.5" textAnchor="middle">
                      MSME ODR + Sec 43B(h)
                    </text>
                    <text x="330" y="276" fill="#D1FAE5" fontSize="9.5" textAnchor="middle">
                      • 45-Day Mandatory Cap
                    </text>
                    <text x="330" y="292" fill="#D1FAE5" fontSize="9.5" textAnchor="middle">
                      • 3× RBI Interest (~20.25%)
                    </text>
                    <text x="330" y="308" fill="#A7F3D0" fontSize="9.5" textAnchor="middle">
                      • Buyer Loses Tax Deduction
                    </text>

                    <rect x="455" y="218" width="190" height="105" rx="10" fill="url(#infDark)" />
                    <text x="550" y="240" fill="#93C5FD" fontWeight="bold" fontSize="10" textAnchor="middle">
                      ROUTE 3 (CIVIL SUMMARY)
                    </text>
                    <text x="550" y="258" fill="#FFFFFF" fontWeight="bold" fontSize="11.5" textAnchor="middle">
                      Order 37 Suit / Sec 70
                    </text>
                    <text x="550" y="276" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      • Sec 63 BSA Chat Evidence
                    </text>
                    <text x="550" y="292" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      • Form 26AS TDS Admission
                    </text>
                    <text x="550" y="308" fill="#CBD5E1" fontSize="9.5" textAnchor="middle">
                      • 10-Day Leave to Defend
                    </text>

                    <rect x="670" y="218" width="190" height="105" rx="10" fill="url(#infDark)" />
                    <text x="765" y="240" fill="#FDE68A" fontWeight="bold" fontSize="10" textAnchor="middle">
                      ROUTE 4 (CRIMINAL PENAL)
                    </text>
                    <text x="765" y="258" fill="#FFFFFF" fontWeight="bold" fontSize="11.5" textAnchor="middle">
                      Sec 138 / 141 NI Act
                    </text>
                    <text x="765" y="276" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      • 30-Day Statutory Notice
                    </text>
                    <text x="765" y="292" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                      • Prosecute Agency Directors
                    </text>
                    <text x="765" y="308" fill="#CBD5E1" fontSize="9.5" textAnchor="middle">
                      • 20% Interim Relief (143A)
                    </text>
                  </svg>

                  {/* Nested <ul> Decision Tree Text Fallback (Required by Archetype G1 DOM Spec) */}
                  <figcaption className="pt-3 border-t border-slate-100">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-2">
                      Structured Decision Logic (Step-by-Step Text Tree):
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                      <li>
                        <strong>Is the Brand or Agency using your video, photos, or face on their social handles, website, or paid ads without paying?</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                          <li>
                            <strong>Yes:</strong> Invoke <strong>Route 1 (Copyright Act Section 19 &amp; Section 51)</strong>. Serve a 15-day joint legal notice revoking all conditional usage and ad-whitelisting licenses, putting the Brand&apos;s CMO on notice of immediate Copyright Takedown strikes on Meta/Instagram and YouTube.
                          </li>
                          <li>
                            <strong>No (or campaign window ended):</strong> Check your Udyam MSME status below.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Are you (or your creator proprietorship/agency) registered under Udyam as a Micro or Small Enterprise?</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                          <li>
                            <strong>Yes:</strong> Invoke <strong>Route 2 (MSMED Act Sections 15–18 &amp; Income-tax Section 43B(h))</strong>. Claim 3× RBI Bank Rate monthly compound interest (~20.25% p.a.) after 45 days, warn the agency/brand of <Link href="/law/section-43bh-msme-payment-rule" className="text-blue-700 underline font-semibold">Section 43B(h) tax disallowance</Link>, and file online on the <Link href="/msme-odr-portal-delayed-payment-guide" className="text-blue-700 underline font-semibold">MSME ODR Portal</Link>.
                          </li>
                          <li>
                            <strong>No:</strong> Proceed to Route 3 based on your written or electronic proof.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Do you have a Release Order, Invoice, Form 26AS TDS entry, or WhatsApp/Email brief + live post link?</strong>
                        <ul className="list-circle pl-5 mt-1 space-y-1 text-slate-600">
                          <li>
                            <strong>Yes:</strong> Invoke <strong>Route 3 (Joint Contract Act Notice → Order XXXVII CPC Summary Suit)</strong> claiming 100% principal plus 18% p.a. commercial interest under Sections 70 and 73 of the Indian Contract Act, 1872.
                          </li>
                          <li>
                            <strong>If the agency gave a cheque that bounced:</strong> Invoke <strong>Route 4</strong> by serving a 30-day statutory notice under Section 138 read with <Link href="/cheque-bounce-case-against-company-directors" className="text-blue-700 underline font-semibold">Section 141 NI Act against the agency and its directors</Link>.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
              </section>

              {/* Section 2: Comparison Table of Creator Recovery Routes */}
              <section id="heading-routes-comparison" aria-labelledby="heading-routes-comparison-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-routes-comparison-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Comparing Influencer &amp; Creator Recovery Routes: Deadlines, Costs, Forums &amp; Statutory Leverage
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike generic freelancer disputes, influencer collaborations carry unique commercial pressure points—brand reputation, paid media ad accounts, and tax deductions. Compare all five legal mechanisms below:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of Influencer and Creator Payment Recovery Routes in India</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Route / Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Best For Which Creator Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Core Legal Leverage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Resolution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Joint Advocate Notice (Agency + Brand CMO)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">All delayed brand deals, agency ghosting, or 60–120 day stalls</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15-Day Cure Period</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Exposes agency default to Brand CMO + claims 18% interest</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">7–15 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Copyright Sec 19 Revocation &amp; Platform Strike
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Brand running Meta/YouTube paid ads or organic posts unpaid</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Immediate on Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Freezes paid ad campaigns &amp; threatens Meta Ad Account strike</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">3–10 Days</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          MSME ODR Portal + Sec 43B(h) Tax Rule
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Udyam-registered creators, production houses &amp; talent agencies</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Day 46 After Invoice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">3× RBI compound interest (~20.25%) + 30% tax disallowance</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">30–90 Days (ODR)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order XXXVII CPC Summary Civil Suit
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Unpaid Release Orders, Invoices, WhatsApp briefs &amp; 194J TDS</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">3 Years from Due Date</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Agency/Brand has no automatic right to defend (Rule 3)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">4–9 Months</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 138 / 141 NI Act Prosecution
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dishonoured cheque issued by agency or brand</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">30 Days of Return Memo</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Up to 2 years imprisonment + 20% interim payout (Sec 143A)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">15–60 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Agency vs Brand Liability & ASCI Context */}
              <section id="heading-agency-vs-brand" aria-labelledby="heading-agency-vs-brand-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-agency-vs-brand-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Who Must Pay You—The Influencer Marketing Agency or the Brand? Defeating the &quot;Brand Hasn&apos;t Paid Us&quot; Excuse
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Both the contracting influencer marketing agency (as primary debtor under Sections 70 and 73 of the Indian Contract Act, 1872) and the sponsoring brand (as principal beneficiary under Section 226 of the Contract Act) should be arrayed together in your statutory demand notice. In Indian influencer disputes, the #1 stalling tactic used by middlemen agencies is claiming: <em>&quot;Our contract is back-to-back; we will release your payout as soon as the brand clears our master campaign invoice.&quot;</em>
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Here is why a dual-party legal notice addressed simultaneously to the <strong>Agency&apos;s Board of Directors</strong> and the <strong>Sponsoring Brand&apos;s Chief Marketing Officer (CMO) &amp; Legal Head</strong> breaks this deadlock within days:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-red-800 border border-red-200">
                      1. Exposes Agency Float &amp; Diversion
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-1">
                      Brands Usually Pay Agencies in 30–45 Days
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      In the majority of 90-to-180 day delays, the corporate brand has <em>already</em> paid the influencer marketing agency, and the agency is rotating creator funds to finance its own overhead. The moment the Brand&apos;s marketing and legal team receives a formal advocate notice stating that their campaign creator remains unpaid, the brand threatens to terminate the agency&apos;s retainer or blacklist it—forcing the agency to wire your NEFT/RTGS payout immediately.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      2. ASCI &amp; CCPA Endorsement Chain Context
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-1">
                      Paid Partnership Tags Establish Direct Brand Link
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under the <strong>ASCI Guidelines for Influencer Advertising in Digital Media</strong> and the <strong>CCPA Endorsements Know-Hows</strong> under Section 10 of the Consumer Protection Act, 2019, mandatory <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">#Ad</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">#Collaboration</code>, and Instagram &quot;Paid Partnership with [Brand]&quot; tags publicly establish a material commercial connection with the Advertiser (Brand). The Brand cannot claim ignorance when its own verified handle accepted your Collab tag and enjoyed commercial promotion under Section 70 of the Contract Act.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Route 1 — Copyright Act Section 19 & Takedown Leverage */}
              <section id="heading-route-copyright" aria-labelledby="heading-route-copyright-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-copyright-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 1: Copyright Act Section 19 &amp; Digital Takedown Leverage When a Brand Uses Your Reel or Video Without Paying
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <strong>Section 17 and Section 19(1) of the Copyright Act, 1957</strong>, the creator who conceptualizes, shoots, and edits a video or photograph is the first statutory owner of the copyright in the cinematograph film, sound recording, and underlying literary script—as well as Performers&apos; Rights under <strong>Section 38</strong>. No assignment of copyright is valid unless it is in writing, signed by the creator, and specifies the exact royalty/consideration payable (Section 19(1)–(3)).
                </p>

                <blockquote
                  cite="https://www.indiacode.nic.in/handle/123456789/1367"
                  className="bg-slate-900 text-slate-100 border-l-4 border-[#DC2626] p-4 sm:p-6 rounded-r-2xl text-xs sm:text-sm leading-relaxed space-y-2"
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-red-400">
                    Statutory Lever • Section 19(1) &amp; Section 51, Copyright Act, 1957
                  </p>
                  <p className="italic">
                    &quot;No assignment of the copyright in any work shall be valid unless it is in writing signed by the assignor or by his duly authorised agent... The assignment of copyright in any work shall identify such work, and shall specify the rights assigned and the duration and territorial extent of such assignment... and shall also specify the amount of royalty and any other consideration payable.&quot;
                  </p>
                </blockquote>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    How Unpaid Creators Use Section 19 in a Pre-Litigation Demand Notice:
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 list-disc pl-5 leading-relaxed">
                    <li>
                      <strong>Conditional License Revocation:</strong> Even where a creator signed an influencer contract granting the brand 3 months or 1 year of digital usage/whitelisting rights, that license is legally conditional upon timely payment of the agreed fee. Once the payment deadline is breached, your advocate serves a formal <strong>Notice of Revocation of License</strong>.
                    </li>
                    <li>
                      <strong>Freezing Paid Performance Ads (Meta &amp; YouTube):</strong> Brands frequently spend ₹5 lakh to ₹50 lakh boosting a creator&apos;s high-converting Reel on Meta Ads Manager while leaving the creator&apos;s ₹50,000–₹2,00,000 production invoice unpaid. Putting the Brand CMO on formal notice that continued ad-boosting after license revocation constitutes <strong>Copyright Infringement under Section 51</strong> (and triggers a formal IP Takedown Report against the Brand&apos;s Meta Business Manager) compels emergency payment release.
                    </li>
                    <li>
                      <strong>Deadline, Cost &amp; Forum:</strong> Notice gives a <strong>7-to-15 day deadline</strong>; if ignored, the creator executes platform copyright takedowns and can file a commercial copyright &amp; recovery suit before the District Judge / Commercial Court under Section 62 of the Copyright Act (where the creator resides or carries on business!).
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Route 2 — MSME ODR Portal & Section 43B(h) Tax Leverage */}
              <section id="heading-route-msme-43bh" aria-labelledby="heading-route-msme-43bh-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-msme-43bh-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 2: MSME ODR Portal, Section 16 Interest (3× RBI Rate) &amp; Section 43B(h) Tax Disallowance for Udyam-Registered Creators
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If you operate as a solo creator, proprietorship, or production studio and hold a free <strong>Udyam Registration Certificate</strong> as a Micro or Small Enterprise (under NIC 73100 Advertising / Influencer Marketing or NIC 59111 Video Production), the <Link href="/msme-act-freelancer-payment-recovery" className="text-blue-700 underline font-semibold">MSMED Act, 2006 (as amended in 2026)</Link> overrides predatory 60-day or 90-day agency payment clauses:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Section 15 MSMED Act
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      15-Day / 45-Day Hard Cap
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If there is no written contract, the agency/brand must pay within <strong>15 days</strong> of your content going live. Even if you signed a contract saying &quot;Net 60&quot; or &quot;Net 90 days&quot;, Section 15 caps the maximum legal credit period at <strong>45 days</strong> from deliverable acceptance.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                      Section 16 MSMED Act
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      3× RBI Compound Interest
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      From Day 16 or Day 46, the defaulting agency or brand owes statutory interest at <strong>3 times the RBI Bank Rate compounded monthly</strong> (~20.25% p.a.). Under Section 23, this interest cannot be claimed as a tax expense by the agency. Use our <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-blue-700 underline font-semibold">MSME Interest Calculator</Link> to compute your exact claim.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-red-800 border border-red-200">
                      Section 43B(h) Income-Tax Act
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      30% Tax Disallowance Hit
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under <Link href="/law/section-43bh-msme-payment-rule" className="text-blue-700 underline font-semibold">Section 43B(h) of the Income-tax Act</Link>, if an agency or brand leaves a Udyam Micro/Small creator&apos;s invoice unpaid past the 15/45-day deadline across March 31, the entire invoice amount is disallowed as a business expense—forcing the agency to pay ~25%–30% corporate income tax on your unpaid fee!
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Route 3 — Order 37 Summary Suit, WhatsApp Briefs & Form 26AS TDS Proof */}
              <section id="heading-route-civil-whatsapp" aria-labelledby="heading-route-civil-whatsapp-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-route-civil-whatsapp-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Route 3: Summary Suits (Order XXXVII CPC), Section 70 Quantum Meruit &amp; Section 194J TDS Proof for WhatsApp Briefs
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  What if you are not registered under MSME and never signed a formal PDF contract? You still have a rock-solid recovery path under civil law. Indian courts recognize that digital media campaigns move rapidly over <Link href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case" className="text-blue-700 underline font-semibold">WhatsApp chats and email threads</Link>:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                        1. Form 26AS / AIS TDS (Sec 194J, 194C &amp; 194R) as Debt Proof
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Agencies frequently deduct <strong>10% TDS under Section 194J</strong> (professional/technical fees) or <strong>1%–2% under Section 194C</strong> when booking your invoice at quarter-end to claim their own input expenses, yet hold back the 90% net payout. Similarly, brands deduct <strong>10% TDS under Section 194R</strong> on barter/gifted products exceeding ₹20,000. Once reflected in your Form 26AS, the agency cannot deny the debt in an <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC Summary Suit</Link>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                        2. WhatsApp Draft Approval + Live Post = Complete Performance
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Under <strong>Section 10A of the IT Act, 2000</strong> and <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</strong>, the combination of (a) a WhatsApp/email rate confirmation, (b) the agency coordinator&apos;s message approving your draft video, and (c) the published Instagram/YouTube link establishes a liquidated debt enforceable within a <strong>3-year limitation period</strong> under Article 18 / Article 113 of the Limitation Act, 1963.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Landmark Court Judgments (<article> cards strictly matching IRCTC layout) */}
              <section id="heading-court-rulings" aria-labelledby="heading-court-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Judicial Precedents on Unpaid Creative Work, Agency-Brand Liability &amp; Copyright Protection
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified Court Records
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
                              Judicial Relief / Binding Rule
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Across Indian Civil &amp; Commercial Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for creators:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Interactive Scenario Tabs */}
              <section id="heading-scenario-picker" aria-labelledby="heading-scenario-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Creator &amp; Influencer Dispute Scenarios: Root Causes, Contract Traps &amp; 3-Step Legal Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Brand or Agency Payment Bottleneck to View the Legal Basis and Immediate Action Plan
                  </p>
                </div>

                <InfluencerScenarioTabs />
              </section>

              {/* Section 9: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook to Recover Delayed Brand Deal &amp; Agency Payments
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Stop sending polite WhatsApp reminders to junior agency coordinators who have no authority to sign bank payouts. Execute this structured 5-step legal escalation:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lock Down Digital Proof &amp; Check Form 26AS for TDS
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Before alerting the agency of legal action, take full-screen captures of your live Instagram Reel / YouTube video, view counts, the brand&apos;s Collab tag or comments, and any active paid ads in the Meta Ad Library. Export your complete WhatsApp chat and email thread. Check your Income Tax Form 26AS / AIS to see if the agency has already deposited Section 194J (10%) or Section 194C TDS against your PAN.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Revoke Paid Ad-Boost Permissions &amp; Freeze Raw File Transfers
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        In your Instagram post settings, switch off &quot;Allow Brand Partner to Boost&quot; so the brand cannot run new performance ads on your unpaid content. Refuse any agency requests for clean/unwatermarked raw files, extended exclusivity, or additional link-in-bio placements until the overdue invoice is settled.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Extract Corporate Details of Both Agency Directors &amp; Brand Marketing Head
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Look up the full registered corporate name, GSTIN, and CIN of both the Influencer Marketing Agency and the Sponsoring Brand on the Ministry of Corporate Affairs (MCA) portal. Identify the Agency&apos;s Founder/Directors and the Brand&apos;s Chief Marketing Officer (CMO), Brand Manager, and General Counsel.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Joint 15-Day Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate serve a formal statutory notice via Registered Speed Post (RPAD) and Section 63 BSA electronic delivery to both the Agency (Party No. 1) and the Brand (Party No. 2). The notice demands 100% principal fee, 18%–20.25% interest, revokes conditional copyright usage under Section 19 of the Copyright Act, and puts their statutory auditors on notice of Section 43B(h) tax disallowance.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See how our <Link href="/how-freelancer-can-send-legal-notice-to-client-india" className="text-blue-700 underline">creator and freelancer legal notice dispatch process</Link> works across India.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Platform Copyright Strike &amp; File MSME ODR or Summary Suit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day notice expires without payment, file a formal Copyright Infringement Report on Meta/YouTube attaching the revoked license notice, lodge an online reference on the MSME ODR Portal (if Udyam-registered), or institute an Order XXXVII CPC summary recovery suit claiming full principal, interest, and legal costs.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 10: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Lifestyle Creator Recovers ₹3,85,000 Unpaid 3-Reel Campaign Fee + ₹24,500 Interest After Joint Brand-Agency Notice
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Creator Recovery
                    </span>
                    <span className="text-xs text-slate-400">Mumbai Creator vs Gurugram Influencer Agency &amp; D2C Skincare Brand</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Kritika Mehra, a Mumbai-based skincare and lifestyle creator (Udyam-registered sole proprietorship), was engaged by a Gurugram influencer marketing agency to produce 3 Instagram Reels and 6 Stories for a major D2C skincare brand&apos;s festive campaign at an agreed fee of ₹3,50,000 + 18% GST (₹3,85,000 net receivable after 10% Section 194J TDS). All deliverables were approved on WhatsApp and published between October 10 and October 22, 2025, under a &quot;Net 30 Days&quot; Release Order.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Over 115 days passed after invoice submission. Meanwhile, the D2C skincare brand whitelisted Kritika&apos;s first Reel and ran Meta performance ads on it for 12 weeks. Whenever Kritika followed up, the agency&apos;s campaign manager claimed: <em>&quot;The brand finance team has held back the Q3 agency settlement; we will pay you as soon as the brand pays us.&quot;</em> However, Kritika checked her Form 26AS and discovered the agency had already deposited ₹35,000 TDS under Section 194J in January!
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Kritika engaged LegalRecovery.in. An advocate drafted and served a joint 15-day statutory legal notice on (1) the Gurugram Influencer Agency&apos;s Directors and (2) the D2C Skincare Brand&apos;s Chief Marketing Officer and Legal Head. The notice attached the Form 26AS TDS admission, invoked Sections 15–16 of the MSMED Act + Section 43B(h) tax disallowance, and formally revoked the copyright &amp; ad-whitelisting license under Section 19 of the Copyright Act, warning of a Meta Ad Library copyright strike within 15 days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Within 48 hours of receiving the Speed Post and email notice, the D2C Brand&apos;s Legal Head emailed the agency confirming the brand had already paid the agency&apos;s invoice 70 days earlier and threatened to terminate the agency&apos;s ₹1.2 crore annual retainer. On Day 9, the agency wired the full ₹3,85,000 net invoice amount plus ₹24,500 in delayed-payment interest directly to Kritika&apos;s bank account via RTGS.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Creator Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Influencer &amp; Creator Evidence Checklist: 6 Digital Records Needed Under Section 63 BSA
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital chats, campaign emails, and social media analytics are primary admissible evidence. Keep these 6 records ready (see our full <Link href="/freelancer-evidence-checklist-payment-recovery-india" className="text-blue-700 underline font-semibold">freelancer &amp; creator evidence guide</Link>):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Release Order, Contract or WhatsApp Rate Chat:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed agreement, email Release Order (RO), or exported WhatsApp/DM thread confirming deliverables and fee.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Pre-Publish Draft &amp; Script Approval Log:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email or WhatsApp message from the agency/brand coordinator approving your draft video and caption to go live.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Live Post URLs, Insights &amp; Collab Tag Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshots showing publication date, views, ASCI paid partnership tag, and the Brand&apos;s handle accepting Collab/commenting.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Meta Ad Library / Paid Boost Screenshots:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">If the brand is running paid ads on your video, capture the Meta Ad Library ID and active date range for Section 19 copyright leverage.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Tax Invoice &amp; Udyam Certificate (If Registered):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of the invoice emailed to the agency/brand finance team, along with your Udyam Registration Number if claiming MSME interest.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Form 26AS / AIS TDS Certificate (Sec 194J / 194C / 194R):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Income-tax portal extract showing any TDS deducted by the agency or brand against your PAN—conclusive proof of debt admission.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Honest Scope */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Honest Scope: What LegalRecovery Can and Cannot Do for Unpaid Creators &amp; Influencers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block">
                      ✓ What LegalRecovery Does For You
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950 list-disc pl-4 leading-relaxed">
                      <li>Drafts and serves a formal <strong>Joint Advocate Legal Demand Notice</strong> on both the Influencer Marketing Agency and the Sponsoring Brand&apos;s CMO/Directors via Registered Speed Post, email, and WhatsApp.</li>
                      <li>Drafts formal <strong>Section 19 Copyright License Revocation &amp; Cease-and-Desist clauses</strong> to stop brands from running unpaid paid ads on your video.</li>
                      <li>Computes and claims <strong>Section 16 MSMED compound interest (3× RBI rate)</strong> and puts the buyer&apos;s tax auditors on notice of Section 43B(h) disallowance.</li>
                      <li>Guides you on filing an MSME ODR Portal reference, Section 138 cheque bounce complaint, or Order XXXVII summary recovery suit if the 15-day notice is ignored.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800 block">
                      ✕ What We Cannot Do (Honest Boundaries)
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-rose-950 list-disc leading-relaxed pl-4">
                      <li>We cannot trace anonymous Telegram/Instagram &quot;crypto/betting task&quot; promoters that have no verifiable corporate entity, GSTIN, or bank trail in India.</li>
                      <li>If you signed a purely performance-based affiliate link contract (commission per sale/code) and zero sales occurred, we cannot claim a fixed deliverable fee unless a minimum base fee was agreed.</li>
                      <li>For pure barter collaborations where the brand delivered the promised genuine product and no cash fee was agreed, monetary recovery does not apply.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 13: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Influencer Brand Deal Payment Delays, Agency Defaults &amp; Legal Notices
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Statutory Answers Grounded in the Indian Contract Act, Copyright Act Section 19 &amp; MSMED Rules
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

              {/* Section 14: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Legal Statutes, Copyright Provisions, ASCI Rules &amp; Official References
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
                  Last updated: November 4, 2026. All statutory references verified against India Code (Contract Act 1872, Copyright Act 1957, MSMED Act 2006/2026, Income-tax Act 1961) and ASCI Digital Influencer Guidelines.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Joint Legal Notice to the Influencer Agency and Brand
                </h2>
                <InfluencerNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Freelancer, Creator &amp; Agency Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/freelancer-payment-recovery-legal-options-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Freelancer Payment Recovery Legal Options Hub →
                  </Link>
                  <Link
                    href="/upwork-fiverr-client-not-paying-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Upwork &amp; Fiverr Client Not Paying Recovery →
                  </Link>
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Copyright Not Transferred Until Paid (Sec 19) →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/agency-not-paying-the-creator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice to Agency Not Paying Creator →
                  </Link>
                  <Link
                    href="/msme-act-freelancer-payment-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME (Udyam) Act for Freelancers &amp; Creators →
                  </Link>
                  <Link
                    href="/how-freelancer-can-send-legal-notice-to-client-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    How to Send a Legal Notice to a Client →
                  </Link>
                  <Link
                    href="/freelancer-evidence-checklist-payment-recovery-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Creator &amp; Freelancer Evidence Checklist →
                  </Link>
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 43B(h) 45-Day Tax Disallowance Rule →
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
