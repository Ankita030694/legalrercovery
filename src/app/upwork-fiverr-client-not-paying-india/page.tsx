import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UpworkFiverrNoticeCTA from "./UpworkFiverrNoticeCTA";
import UpworkFiverrTableOfContents from "./UpworkFiverrTableOfContents";
import UpworkFiverrProblemTabs from "./UpworkFiverrProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Upwork or Fiverr Client Not Paying? Options From India",
  description:
    "Upwork or Fiverr client refusing to pay? Platform dispute steps, off-platform contract risks and legal recovery routes for Indian freelancers.",
  alternates: {
    canonical: `${SITE_URL}/upwork-fiverr-client-not-paying-india`,
  },
  openGraph: {
    title: "Platform Client Stopped Paying: Disputes, Off-Platform Deals and Recovery",
    description:
      "Actionable playbook for Indian freelancers and agencies when an Upwork, Fiverr or off-platform client refuses payment: escrow rules, Section 19 copyright leverage, and legal notices.",
    url: `${SITE_URL}/upwork-fiverr-client-not-paying-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Platform Client Stopped Paying: Disputes, Off-Platform Deals and Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Client Stopped Paying: Disputes, Off-Platform Deals and Recovery",
    description:
      "Actionable playbook for Indian freelancers and agencies when an Upwork, Fiverr or off-platform client refuses payment: escrow rules, Section 19 copyright leverage, and legal notices.",
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
      "Copyright Act, 1957 (Act No. 14 of 1957) — Sections 17, 19(1), 19(3), 51 & 55 (No Valid Copyright Assignment Without Written Signed Agreement & Consideration)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title:
      "Indian Contract Act, 1872 — Sections 10, 70 (Obligation of Person Enjoying Benefit of Non-Gratuitous Act / Quantum Meruit) & Section 73 (Damages for Breach)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15, 16 & 18 (45-Day Cap & 3× RBI Bank Rate Compound Interest for Udyam-Registered Service Providers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Upwork Fixed-Price Escrow Instructions & Hourly Payment Protection Terms — Upwork Legal Center",
    url: "https://www.upwork.com/legal#escrow-instructions",
  },
  {
    title:
      "Fiverr Terms of Service — Payment Terms, Order Cancellation & Intellectual Property Ownership Reversion Clauses",
    url: "https://www.fiverr.com/legal-portal/legal-terms/terms-of-service",
  },
  {
    title:
      "Foreign Exchange Management Act (FEMA), 1999 & RBI Master Direction on Export of Goods and Services (FIRC / e-BRC & Software Export Realization Rules)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10395",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Upwork Work Diaries, Slack/WhatsApp Logs, Git Commits & Electronic Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const SCENARIO_CARDS = [
  {
    badge: "Scenario 01 • Active Platform Escrow",
    title: "Upwork Fixed-Price Milestone Funded, Client Refuses Release or Requests Refund",
    odds: "High Recovery Odds (14-Day Auto-Release / Mediation)",
    situation:
      "You completed the milestone work and clicked 'Submit Work for Payment', but the client keeps requesting out-of-scope edits to stall the 14-day timer or files an escrow refund demand.",
    route:
      "Reject the refund request within 7 calendar days with a line-by-line scope vs delivery matrix to trigger Upwork Escrow Mediation. If the client refuses to pay their ~$350 AAA Arbitration share after mediation, 100% of escrow releases to you automatically.",
    statutoryHook: "Upwork Fixed-Price Escrow Rules + Sec 19 Copyright Act",
    jumpHref: "#heading-step-playbook",
    jumpLabel: "See 6-Step Escrow & Legal Playbook →",
  },
  {
    badge: "Scenario 02 • Hourly Tracker Dispute",
    title: "Upwork Hourly Client's Card Declined on Monday Billing or Disputed Hours",
    odds: "High If Desktop Tracker Used; Direct Claim If Manual",
    situation:
      "Your client's payment method failed on Monday billing, or they disputed your Friday Work Diary hours. Upwork reversed any 'Manual Time' or hours exceeding the weekly cap.",
    route:
      "Tracked hours with active memos and keyboard/mouse activity are paid by Upwork Hourly Protection (up to $2,500). For clawed-back manual hours, serve a formal legal & IP demand notice directly on the client for Quantum Meruit recovery.",
    statutoryHook: "Upwork Hourly Protection + Sec 70 Indian Contract Act",
    jumpHref: "#heading-problem-picker",
    jumpLabel: "Open Hourly Dispute Solver →",
  },
  {
    badge: "Scenario 03 • Off-Platform / Bonus Trap",
    title: "Client Moved You Off Upwork/Fiverr (or Promised 'Bonus' Milestone) and Ghosted",
    odds: "Strong Against Identifiable Indian / Foreign Entities",
    situation:
      "You worked on an unfunded milestone, accepted a direct Slack/Wise/bank arrangement to save platform fees, or delivered extra scope on a 'will pay via bonus' promise, and the client disappeared.",
    route:
      "Preserve Slack/WhatsApp/email approvals and Git/Figma logs under Section 63 BSA. Serve a 15-day Advocate Demand Notice invoking Trimex digital contract bindingness, Section 70 Quantum Meruit, and IP revocation.",
    statutoryHook: "Sec 10, 70 & 73 Contract Act + Trimex International (SC)",
    jumpHref: "#heading-worked-example",
    jumpLabel: "Read $4,950 Off-Platform Case Study →",
  },
  {
    badge: "Scenario 04 • Post-Delivery Reversal",
    title: "Fiverr Client Forces Late Order Cancellation or Files Bank / PayPal Chargeback",
    odds: "Solid via Seller Protection + DMCA Takedown",
    situation:
      "Weeks after accepting your delivery (or after the 3-day auto-completion window), the Fiverr buyer initiates a credit card chargeback or pressures support into a late cancellation while keeping your files.",
    route:
      "Claim Fiverr Chargeback Protection with delivery proof. Because Fiverr ToS immediately reverts 100% copyright to the seller upon cancellation, serve a DMCA Takedown and Legal Notice if the buyer uses your work anywhere online.",
    statutoryHook: "Fiverr ToS Ownership Reversion + Sec 19 & 51 Copyright Act",
    jumpHref: "#heading-problem-picker",
    jumpLabel: "See Fiverr Chargeback & IP Steps →",
  },
  {
    badge: "Scenario 05 • Domestic Client / Agency Default",
    title: "Indian Client or Marketing/IT Agency Hired You and Withheld Your Payout",
    odds: "Highest Statutory Leverage (MSME 3× Interest + Order 37)",
    situation:
      "An Indian startup, D2C brand, or digital agency hired you (via platform or direct invoice) and is withholding ₹50,000 to ₹15,00,000 citing 'end-client hasn't paid us' or endless subjective revisions.",
    route:
      "If Udyam-registered as a Micro/Small service enterprise, serve a Legal Notice claiming 3× RBI Bank Rate monthly compound interest (Section 16 MSMED Act) and Section 43B(h) tax disallowance, followed by MSME ODR or an Order 37 Summary Suit.",
    statutoryHook: "Sections 15–18 MSMED Act + Sec 43B(h) IT Act + Order 37 CPC",
    jumpHref: "#heading-legal-basis",
    jumpLabel: "Compare Indian vs Overseas Routes →",
  },
  {
    badge: "Scenario 06 • Live Commercial Infringement",
    title: "Client Using Your Code, UI/UX Design, Copy, or Video Live Without Paying",
    odds: "Maximum Commercial Pressure via Host / Store Takedown",
    situation:
      "The client rejected your milestone or vanished without paying the final invoice, yet your React/Node code is live on their domain, your UI screens are in their app, or your video ad is running on Meta/YouTube.",
    route:
      "Under Section 19 of the Copyright Act, 1957 (and Upwork/Fiverr ToS), zero IP rights pass without full payment. Serve an Advocate Cease-and-Desist + Payment Demand Notice, followed by DMCA takedowns to AWS, Vercel, GitHub, Shopify, or App Stores.",
    statutoryHook: "Sections 17, 19, 51 & 55 Copyright Act + 17 U.S.C. § 512 DMCA",
    jumpHref: "#heading-legal-basis",
    jumpLabel: "See Section 19 Copyright Lever →",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling That Contracts Concluded Over Email and Digital Chats Without a Signed Formal Agreement Are Legally Binding",
    parties: "Trimex International FZE Limited, Dubai v. Vedanta Aluminium Limited, India",
    citation: "(2010) 3 SCC 1, Supreme Court of India",
    date: "Judgment Dated 22 January 2010",
    facts:
      "A commercial transaction was negotiated and finalized through a sequence of emails setting out the scope of supply, pricing, and commercial terms, though no formal physical contract document was ever signed by both parties. When a dispute arose, the respondent argued that in the absence of a formally executed contract, there was no enforceable agreement between the parties.",
    holding:
      "The Supreme Court held that once a contract is concluded orally or through an exchange of emails and electronic messages that clearly establish offer, acceptance, consideration, and intention to create legal relations under Section 10 of the Indian Contract Act, 1872, the mere fact that a formal contract document was not prepared or signed does not affect its legal enforceability.",
    amount: "Electronic Commercial Contract Upheld as 100% Binding & Enforceable",
    takeaway:
      "If a client moved you off Upwork or Fiverr onto Slack, WhatsApp, or email without signing a formal Master Services Agreement (MSA), your chat thread agreeing on deliverables and rates is a valid, enforceable contract in Indian courts.",
  },
  {
    title: "Constitution Bench Precedent on Section 70 Contract Act (Quantum Meruit): Client Must Pay for Accepted Non-Gratuitous Work",
    parties: "State of West Bengal v. B.K. Mondal and Sons",
    citation: "AIR 1962 SC 779 / 1962 Supp (1) SCR 876 (5-Judge Constitution Bench)",
    date: "Judgment Dated 05 December 1961",
    facts:
      "A contractor executed additional construction work at the request of officers, which did not meet the strict technical formalities of a written government contract. After accepting and using the completed work, the recipient refused to pay, arguing there was no valid formal contract covering the extra scope.",
    holding:
      "A five-judge Constitution Bench of the Supreme Court held that under Section 70 of the Indian Contract Act, 1872, three conditions trigger a mandatory statutory obligation to pay: (1) a person lawfully does something for another or delivers something to them; (2) they do not intend to act gratuitously (for free); and (3) the other person enjoys the benefit thereof. Even where a formal contract is absent or technically defective, the party enjoying the work must pay reasonable compensation.",
    amount: "Full Compensation Awarded Under Section 70 (Quantum Meruit)",
    takeaway:
      "When an Upwork or off-platform client tricks you into delivering extra milestones or out-of-escrow 'scope creep' and then refuses to fund the bonus milestone, Section 70 obligates them to pay for every module they accepted or utilized.",
  },
  {
    title: "Delhi High Court Ruling That Copyright in Software & Creative Work Does Not Transfer Without Strict Compliance With Section 19",
    parties: "Pine Labs Pvt. Ltd. v. Gemalto Terminals India Pvt. Ltd. & Ors.",
    citation: "(2011) 182 DLT 713 (DB) / FAO (OS) 635 of 2009, High Court of Delhi (Division Bench)",
    date: "Judgment Dated 03 August 2011",
    facts:
      "A software development firm developed customized software source code and application modules for a client under a commercial arrangement. Disputes arose regarding the scope of assignment, consideration, and continued commercial exploitation of the software source code by the client.",
    holding:
      "The Division Bench of the Delhi High Court held that under Sections 17, 18, and 19 of the Copyright Act, 1957, an independent software developer or creator (not employed under a contract of service/payroll) is the first owner of copyright. Any assignment of copyright is strictly governed by Section 19: it must be in writing signed by the assignor, specify the rights assigned, duration, territorial extent, and the royalty/consideration payable. Ambiguities are construed in favour of the creator.",
    amount: "Creator's Statutory Copyright Protection Under Section 19 Affirmed",
    takeaway:
      "Unlike full-time salaried employees, Indian freelancers and agencies are independent contractors who own 100% of the copyright in their code, designs, and content until the client pays the agreed consideration in full.",
  },
  {
    title: "Delhi High Court Precedent That Accepted Invoices & Digital Delivery Logs Qualify for Fast-Track Order 37 Summary Suits",
    parties: "M/s Flint Group India Pvt. Ltd. v. M/s Good Morning India Media Pvt. Ltd.",
    citation: "2017 SCC OnLine Del 7894, High Court of Delhi",
    date: "Judgment Dated 17 April 2017",
    facts:
      "The plaintiff raised commercial invoices against the defendant for supplies and services rendered, which were received without contemporaneous quality objections. When sued under Order XXXVII of the Code of Civil Procedure, the defendant raised belated, vague complaints of defective quality to seek unconditional leave to defend.",
    holding:
      "The High Court ruled that commercial invoices containing clear payment terms, accompanied by delivery acknowledgments and unrefuted ledger statements, constitute a written contract under Order XXXVII CPC. Delayed 'moonshine' quality complaints raised for the first time after payment reminders or a legal notice cannot defeat a summary recovery decree.",
    amount: "Summary Decree Granted for Full Principal + Interest",
    takeaway:
      "When an Indian client or agency approves your Figma/Git deliverables on Slack or email and only invents 'quality issues' 45 days later when you press for payment, courts reject their excuse as a sham defence.",
  },
];

const FAQS = [
  {
    question: "What should I do immediately if an Upwork client did not pay or refuses to release an escrow milestone?",
    answer:
      "First, make sure you have formally uploaded your deliverables using the 'Submit Work for Payment' button inside the active milestone—never just in the message room—because that triggers the 14-day automatic escrow release timer. If the client clicks 'Request Changes' in bad faith or requests an escrow refund, click 'Reject Refund Request' within 7 calendar days and attach a clear scope-vs-deliverable proof document. This escalates the milestone to Upwork Escrow Mediation. If mediation fails and the client refuses to pay their share (~$350) for binding AAA Arbitration within the deadline, Upwork releases 100% of the escrow funds to you.",
  },
  {
    question: "How does the Upwork dispute process work for Hourly contracts when a client's card fails?",
    answer:
      "For Hourly contracts, clients have from Monday until Friday (23:59 UTC) of the week following the billing workweek to review and dispute your Work Diary. If the client's payment method fails or they file a dispute, Upwork Hourly Payment Protection pays you (up to $2,500 per contract) ONLY if you logged time using the Upwork Desktop App with consistent keyboard/mouse activity, non-blank work memos, and screenshots showing work on that specific contract. Manual time and bonus promises are excluded from Upwork's payout guarantee and must be recovered directly from the client via a formal legal demand notice.",
  },
  {
    question: "How do I win a Fiverr payment dispute or recover money after a post-delivery Fiverr chargeback?",
    answer:
      "On Fiverr, once you deliver work via the 'Deliver Now' button, the order automatically completes in 72 hours unless a revision is requested. If a buyer initiates a PayPal or credit card chargeback after completion, open an immediate ticket with Fiverr Customer Support providing the order brief, buyer chat approvals, and delivery files to activate Fiverr Chargeback Protection. Additionally, under Fiverr's Terms of Service ('Ownership'), if an order is cancelled or charged back, all intellectual property rights revert immediately to the seller—allowing you to file a DMCA takedown and serve a legal notice if the buyer uses your work.",
  },
  {
    question: "What are my legal options in India if an off-platform client is not paying my invoice?",
    answer:
      "If a client moved you off Upwork/Fiverr or hired you directly on LinkedIn, Slack, or email and stopped paying, your chat/email trail and invoices form a legally binding contract under Section 10 of the Indian Contract Act, 1872 (Trimex International v. Vedanta, Supreme Court) and Section 70 (Quantum Meruit). You can: (1) Serve a 15-day Advocate Legal Demand & Section 19 Copyright Revocation Notice via Speed Post, Email, and WhatsApp; (2) If the client is in India and you have Udyam Registration, file an online claim on the MSME ODR Portal for principal plus 3× RBI Bank Rate compound interest; or (3) File a Summary Suit under Order XXXVII CPC.",
  },
  {
    question: "Can a client legally use my source code, design, or video if they haven't paid the final milestone?",
    answer:
      "No. Under Section 17 and Section 19(1)–(3) of the Indian Copyright Act, 1957 (as well as Section 6 of the Upwork Terms of Service and Fiverr's Ownership Clauses), an independent freelancer retains 100% copyright ownership over all created code, designs, copy, and videos until the full agreed payment is received. Any commercial use of unpaid deliverables by the client is statutory copyright infringement under Section 51, entitling you to issue a Cease-and-Desist notice, send DMCA takedowns to their web host (AWS, Vercel, Shopify, GitHub, YouTube, App Stores), and claim damages.",
  },
  {
    question: "Will Upwork ban my account if I take legal action against a client who moved me off-platform?",
    answer:
      "Wait before reporting an off-platform dispute to Upwork Support: under Section 7 of the Upwork Terms of Service (Non-Circumvention), accepting payments outside Upwork within 24 months of meeting a client on the platform—without paying the Upwork Conversion Fee—violates Upwork's rules and can get BOTH your account and the client's account permanently suspended. Instead of complaining to Upwork Support about an off-platform invoice, enforce your debt directly against the client's company through an independent Advocate Legal Notice and Section 19 Copyright Revocation.",
  },
  {
    question: "Upwork, Fiverr ya direct freelance client payment nahi de raha kya kare?",
    answer:
      "Agar Upwork ya Fiverr par escrow milestone funded hai toh hamesha official 'Submit Work' button se delivery upload karein aur refund request ko 7 din ke andar reject karke platform mediation/arbitration use karein. Agar client ne off-platform kaam karwake ya direct invoice par payment rok liya hai, toh apne WhatsApp/Slack chats, email approvals aur source files (Section 63 BSA) sambhal kar rakhein. LegalRecovery.in ke jariye aap client ko 15-din ka Advocate Legal Notice aur Copyright Act Section 19 Notice bhej sakte hain, jisse client aapka code/design bina payment use nahi kar sakta.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Platform Client Stopped Paying: Disputes & Recovery in India",
  description:
    "Upwork or Fiverr client refusing to pay? Platform dispute steps, off-platform contract risks and legal recovery routes for Indian freelancers.",
  datePublished: "2026-11-04T11:30:00+05:30",
  dateModified: "2026-11-04T11:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/upwork-fiverr-client-not-paying-india`,
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
      name: "Upwork and Fiverr Freelancer Payment Dispute Recovery",
    },
    {
      "@type": "Legislation",
      name: "Copyright Act, 1957 (Section 19)",
    },
    {
      "@type": "Legislation",
      name: "Indian Contract Act, 1872 (Section 70 & Section 73)",
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
      name: "Freelancer Payment Recovery",
      item: `${SITE_URL}/freelancer-payment-recovery-legal-options-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Upwork & Fiverr Client Not Paying",
      item: `${SITE_URL}/upwork-fiverr-client-not-paying-india`,
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

export default function UpworkFiverrClientNotPayingIndiaPage() {
  const breadcrumbItems = [
    { label: "Freelancer Payment Recovery", href: "/freelancer-payment-recovery-legal-options-india" },
    { label: "Upwork & Fiverr Client Not Paying", href: "/upwork-fiverr-client-not-paying-india" },
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
        {/* Hero Section strictly matching IRCTC & Company Directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Freelancers, Creators &amp; Agencies (§8.7)</span>
              <span className="text-red-500">•</span>
              <span>Sec 19 Copyright Act, Sec 70 Contract Act &amp; Escrow Rules</span>
              <span className="text-red-500">•</span>
              <span>Updated <time dateTime="2026-11-04">Nov 2026</time></span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Platform Client Stopped Paying: Disputes &amp; Recovery in India
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory &amp; Platform Quick Answer (Indian Freelancer Recovery Rights)
              </p>
              <p>
                When an Upwork or Fiverr client refuses payment, Indian freelancers must first lock platform remedies—rejecting escrow refund requests within 7 days (14-day auto-release on Upwork; 72-hour completion on Fiverr). For off-platform defaults or unpaid work used live, invoke Section 19 of the Copyright Act, 1957 (no IP transfer until paid), Section 70 of the Contract Act, and serve a 15-day Advocate Demand Notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">14 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Upwork Escrow Auto-Release Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% IP</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Retained Until Paid (Sec 19 Copyright Act)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3× Bank Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">MSME Interest vs Indian Clients (Sec 16)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Civil Suit Limit Under Sec 70 / Order 37</p>
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
            <UpworkFiverrTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1 (Archetype G2 Hero Element): Scenario Cards Grid */}
              <section id="heading-scenario-cards" aria-labelledby="heading-scenario-cards-title" className="scroll-mt-28 space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Archetype G2 • Platform &amp; Off-Platform Diagnostic Grid
                  </span>
                  <h2
                    id="heading-scenario-cards-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Freelance Non-Payment Scenario Fits Your Case?
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether you are a full-stack developer in Bengaluru, a UI/UX studio in Pune, a video editor in Delhi, or an SEO agency in Hyderabad, your recovery strategy depends entirely on <strong>where the money sits today</strong>: inside platform escrow, in an hourly billing dispute, or in an unfunded/off-platform invoice. Match your exact situation below to see your recovery odds and immediate first move:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {SCENARIO_CARDS.map((card, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626]">
                            {card.badge}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                            {card.odds}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <strong className="text-slate-900">Your Situation:</strong> {card.situation}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                          <strong className="text-slate-900">Recommended Action:</strong> {card.route}
                        </p>
                      </div>

                      <div className="pl-2 pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-semibold text-slate-500">
                          {card.statutoryHook}
                        </span>
                        <a
                          href={card.jumpHref}
                          className="text-xs font-extrabold text-[#DC2626] hover:text-red-800 shrink-0"
                        >
                          {card.jumpLabel}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 2 (Archetype G2): Legal Basis With Quoted Statutes & Route-by-Location Comparison Table */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-5">
                <h2
                  id="heading-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Platform Dispute Rules vs Indian Law &amp; Copyright Rights
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Most online forum threads tell Indian freelancers that once an Upwork or Fiverr dispute closes—or once a client moves off-platform and blocks you—your money is gone forever. That is legally false. Platform dispute specialists only control funds sitting inside their escrow account; they do not extinguish the client&apos;s underlying commercial debt or grant the client ownership over your unpaid work. Three statutory levers protect Indian freelancers and agencies:
                </p>

                {/* Quoted Statutes Blockquotes (Archetype G2 requirement) */}
                <div className="space-y-4">
                  <blockquote
                    cite="https://www.indiacode.nic.in/handle/123456789/1367"
                    className="bg-white border-l-4 border-[#DC2626] rounded-r-2xl p-4 sm:p-6 shadow-sm space-y-2"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-red-600">
                      Section 19(1) &amp; Section 19(3), Copyright Act, 1957 — No Copyright Assignment Until Paid
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-slate-800 italic leading-relaxed">
                      &ldquo;19(1) No assignment of the copyright in any work shall be valid unless it is in writing signed by the assignor or by his duly authorised agent… 19(3) The assignment of copyright in any work shall also specify the amount of royalty and any other consideration payable, to the author or his legal heirs during the currency of the assignment…&rdquo;
                    </p>
                    <footer className="text-xs text-slate-600 font-medium pt-1">
                      <strong>Why this is your strongest weapon:</strong> Both <Link href="/copyright-not-transferred-until-paid-freelancer" className="text-blue-700 underline font-semibold">Section 19 of the Indian Copyright Act, 1957 (copyright not transferred until paid)</Link> and Section 6 of the Upwork Terms of Service (&ldquo;Ownership of Work Product and Intellectual Property&rdquo;) state that the client receives IP ownership <em>only upon full payment</em> of the invoice. Until every rupee or dollar is paid, the client has zero legal license to deploy your code on GitHub/AWS, publish your UI design, or run your video ad (a rule that applies equally to <Link href="/influencer-brand-deal-payment-not-received" className="text-blue-700 underline font-semibold">unpaid influencer and creator brand collaborations</Link>). Doing so triggers DMCA takedowns and infringement liability under Section 51. You can check our transparent <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges and fee schedule</Link> before initiating action.
                    </footer>
                  </blockquote>

                  <blockquote
                    cite="https://www.indiacode.nic.in/handle/123456789/2187"
                    className="bg-white border-l-4 border-[#404447] rounded-r-2xl p-4 sm:p-6 shadow-sm space-y-2"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      Section 70, Indian Contract Act, 1872 — Obligation of Person Enjoying Benefit of Non-Gratuitous Act (Quantum Meruit)
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-slate-800 italic leading-relaxed">
                      &ldquo;Where a person lawfully does anything for another person, or delivers anything to him, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation to the former in respect of, or to restore, the thing so done or delivered.&rdquo;
                    </p>
                    <footer className="text-xs text-slate-600 font-medium pt-1">
                      <strong>Why it matters for off-platform &amp; unfunded milestones:</strong> Clients frequently ask freelancers to start Phase 2 before funding the next milestone, or move communication to Slack/WhatsApp without a signed PDF contract. Under Section 70, the moment you prove via email/chat and Git/Figma logs that the work was delivered commercially (not as a free sample), the client is statutorily bound to compensate you. Explore our full hub on <Link href="/freelancer-payment-recovery-legal-options-india" className="text-blue-700 underline font-semibold">freelancer payment recovery legal options in India</Link>.
                    </footer>
                  </blockquote>
                </div>

                {/* Comparison Table of Recovery Routes by Client Location (Platform vs India vs Abroad) */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mt-4">
                  <table className="w-full min-w-[660px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of Freelancer Payment Recovery Routes by Platform and Client Location</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Type &amp; Client Location</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Rule / Statute</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Strict Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Primary Forum / Mechanism</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Leverage &amp; Typical Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Upwork Fixed-Price (Funded in Escrow)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Upwork Fixed-Price Escrow Instructions</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">14d Auto-Release; 7d to Reject Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Upwork Escrow Mediation &rarr; AAA Arbitration (~$350/side)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">100% release if client doesn&apos;t pay arbitration fee; split settlement in mediation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Upwork Hourly (Client Card Declined)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Upwork Hourly Payment Protection Terms</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Client must dispute by Fri 23:59 UTC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Upwork Hourly Protection Review (Desktop Tracker required)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Up to $2,500 covered by Upwork for tracked hours; zero cover for manual time</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Fiverr Order (Cancellation / Chargeback)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Fiverr Payment &amp; Ownership Terms</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">3-Day (72h) Auto-Complete After Delivery</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Fiverr Resolution Center &amp; Chargeback Protection</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Eligible chargebacks reimbursed; 100% copyright reverts to seller on cancel</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Indian Client / Agency (Off-Platform or Unfunded)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sec 70/73 Contract Act + Sec 15–18 MSMED Act + Sec 43B(h) IT Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15-Day Notice; 45-Day MSME Cap; 3 Yr Suit</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Advocate Legal Notice &rarr; MSME ODR Portal / Order 37 CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Principal + 3× RBI Bank Rate (16.50% p.a.) compound interest + tax audit block</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Foreign Client — US, UK, UAE, EU, AU (Off-Platform)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Sec 19 Copyright Act + 17 U.S.C. § 512 DMCA + Sec 20(c) CPC</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">15-Day Demand + Immediate IP Takedown</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cross-Border Legal &amp; IP Notice + Host/App Store DMCA</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Blocks client&apos;s live website/repo/ads; forces SWIFT/Wise settlement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3 (Archetype G2): Step-by-Step <ol> Playbook */}
              <section id="heading-step-playbook" aria-labelledby="heading-step-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-step-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  6-Step Escalation: Platform Dispute to Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether your client stopped responding after receiving the final build on Upwork, filed a bad-faith Fiverr cancellation, or defaulted on a direct off-platform invoice, follow this exact 6-step escalation sequence to protect both your payout and your intellectual property:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lock the Platform Timer: Submit Formally &amp; Pause Unfunded Work Immediately
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        On Upwork Fixed-Price contracts, upload your deliverables through the milestone&apos;s official <strong>&ldquo;Submit Work for Payment&rdquo;</strong> button (not just in chat or Slack) to start the mandatory 14-day automatic release countdown. On Fiverr, deliver via the <strong>&ldquo;Deliver Now&rdquo;</strong> button with a short Loom video demonstrating that every requirement in the initial gig brief works as specified. Never start working on Milestone 2 or extra revisions unless the funds are visibly funded in escrow.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Export Your Digital Audit Trail Before the Client Revokes Workspace Access
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Defaulting clients routinely delete Slack channels, revoke GitHub/Figma/Jira permissions, or unsend WhatsApp messages the moment a payment dispute starts. Immediately export your complete Upwork Work Diary screenshots, message room transcripts, Slack/WhatsApp chats, email approvals, Git commit logs, and Figma version history. Under <Link href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case" className="text-blue-700 underline font-semibold">Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</Link>, these electronic records are primary evidence in Indian courts.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Contest Escrow Refund Requests Within 7 Days &amp; Use the Arbitration FeeBluff Strategically
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If an Upwork client requests an escrow refund, reject it within 7 calendar days with a 1-page PDF matching each milestone requirement to your delivered proof. During Upwork Mediation, remember that the mediator cannot force a refund without your consent. If mediation reaches an impasse, Upwork issues a Notice of Arbitration requiring both you and the client to pay ~\$350 each to the American Arbitration Association (AAA). For milestones between \$400 and \$2,500, if you pay your share first or call the client&apos;s bluff and the client fails to pay their arbitration fee within the window, <strong>100% of the escrow funds are automatically released to you</strong> (and your arbitration fee is refunded).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Section 19 Copyright Revocation &amp; 15-Day Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When work was done outside escrow, off-platform, or when a client cancels an order while keeping your files, engage an advocate to serve a formal <Link href="/how-freelancer-can-send-legal-notice-to-client-india" className="text-blue-700 underline font-semibold">Freelancer Legal Demand &amp; IP Revocation Notice</Link>. The notice formally puts the client, its founders/directors, and its legal department on notice that: (a) under Section 19 of the Copyright Act, 1957 and platform ToS, <strong>no copyright or license has transferred</strong> due to non-payment; (b) any commercial deployment of your code, design, or content is unlawful infringement; and (c) full invoice payment plus 18% interest must be remitted within 15 calendar days.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute DMCA / Host Takedowns Against Live Infringing Websites, Repos &amp; Ad Campaigns
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If a domestic or overseas client ignores the notice while running your unpaid code, UI/UX, copy, or video in production, file a formal Copyright / DMCA Takedown Notice (17 U.S.C. § 512 / Section 51 Copyright Act) with their hosting and distribution providers—such as AWS, Vercel, Cloudflare, Shopify, GitHub, Apple App Store, Google Play Store, YouTube, or Meta Ads. For <Link href="/legal-notice-to-international-client-unpaid-invoice-recovery" className="text-blue-700 underline font-semibold">recovering unpaid invoices from international clients</Link>, the threat of having their live SaaS app or e-commerce store suspended by Shopify/AWS resolves 80%+ of disputes without foreign court litigation.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      6
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File on the MSME ODR Portal (3× RBI Interest) or Institute an Order 37 Summary Suit
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For Indian clients and agencies that fail to settle within 15 days: if you hold an Udyam Registration (available free to individual freelancers, sole proprietors, and agencies under service NIC codes), file an online claim on the <Link href="/msme-odr-portal-delayed-payment-guide" className="text-blue-700 underline font-semibold">MSME ODR Portal</Link> under <Link href="/msme-act-freelancer-payment-recovery" className="text-blue-700 underline font-semibold">Sections 15–18 of the MSMED Act</Link> for principal plus 3× RBI Bank Rate monthly compound interest (16.50% p.a.). Alternatively, file a fast-track <Link href="/law/order-37-summary-suit-money-recovery" className="text-blue-700 underline font-semibold">Order XXXVII CPC Summary Suit</Link> based on your invoices and written chat admissions.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 4 (Archetype G2 Mandatory Block): Mistakes to Avoid (<ul> with ✕ styling) */}
              <section id="heading-mistakes-avoid" aria-labelledby="heading-mistakes-avoid-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-mistakes-avoid-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5 Fatal Mistakes When a Freelance Client Stops Paying
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A single wrong click on Upwork or Fiverr—or a rash reaction in a client&apos;s production environment—can destroy your payout claim or get your freelancer profile banned. Avoid these five costly mistakes:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Complaining to Upwork/Fiverr Support That an Off-Platform Client Did Not Pay You:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 7 of the Upwork Terms of Service (Non-Circumvention), accepting payment outside Upwork from a client you met on the platform within the first 24 months (without paying the Upwork Conversion Fee) is a severe ToS violation. If a client lures you off-platform to Wise/bank transfer and then ghosts you, <strong>do not report the unpaid off-platform invoice to Upwork Support</strong>—Upwork will not recover your money and may permanently ban your freelancer account! Instead, pursue the client directly via an independent Advocate Legal Notice.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Delivering Final Work in Chat / Slack Instead of Clicking &ldquo;Submit Work for Payment&rdquo;:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Sending a Google Drive link, Figma link, or GitHub PR in the Upwork message room or Slack <strong>does not start the 14-day escrow auto-release timer</strong>. If the client disappears after downloading your files from chat, the milestone sits idle until the contract goes dormant after 90 days, at which point escrow can automatically refund back to the client&apos;s card. Always submit via the formal milestone button.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Logging &ldquo;Manual Time&rdquo; on Upwork Hourly Contracts With New or Unverified Clients:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Scam clients intentionally enable &ldquo;Allow Manual Time&rdquo; and tell freelancers not to bother with the desktop tracker. When Monday billing arrives, their prepaid card declines or they dispute the week&apos;s hours—and Upwork automatically strips 100% of manual hours from your pending balance because Manual Time has zero coverage under Upwork Hourly Payment Protection.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Planting &ldquo;Kill Switches&rdquo;, Deleting Client Databases, or Defaming the Client Online:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Never log into a client&apos;s live server to delete existing databases, inject malicious code, or post defamatory accusations tagging their customers on LinkedIn. Under Section 43 and Section 66 of the Information Technology Act, 2000 (and international computer fraud laws), unauthorized destruction of live data turns you from the victim into the accused. Use lawful Section 19 Copyright Revocation and DMCA takedowns instead.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-red-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Handing Over Unwatermarked Master Files or Production Admin Keys Before Final Escrow Release:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Host staging builds on your own Vercel/AWS/test server, share view-only Figma prototypes, or deliver watermarked video previews for milestone review. Transfer final root credentials, raw editable source files, and production repository ownership only upon final milestone release.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5: Resolution Rail Flowchart (IRCTC style) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Payment Recovery: Escrow, IP Revocation &amp; Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured escalation rail to convert a stalled Upwork/Fiverr milestone or unpaid off-platform invoice into full bank settlement:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Lock Platform Submission &amp; Logs</h3>
                    <p className="text-xs text-slate-200 mt-1">Click &apos;Submit Work&apos; (14d Upwork / 3d Fiverr) &amp; export Sec 63 BSA chat/Git logs.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Platform Dispute / Protection</h3>
                    <p className="text-xs text-amber-900 mt-1">Reject escrow refund in 7d, use Hourly Protection, or Fiverr Chargeback cover.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Advocate Demand + Sec 19 IP Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Serve 15-day Legal Notice revoking all copyright/IP license until paid in full.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">DMCA Takedown / MSME ODR / Suit</h3>
                    <p className="text-xs text-slate-700 mt-1">File AWS/Shopify/GitHub DMCA takedown or MSME ODR (3× RBI interest) / Order 37.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Escrow Release or Bank Settlement</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% milestone payout, SWIFT/Wise remittance, or enforceable Indian decree.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Freelancer Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 860 270"
                    width="860"
                    height="270"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[720px]"
                    role="img"
                    aria-label="Upwork, Fiverr and Off-Platform Freelancer Payment Recovery Flowchart"
                  >
                    <defs>
                      <linearGradient id="upwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="upwAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="upwSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="145" height="95" rx="10" fill="url(#upwGrad)" />
                    <text x="82" y="44" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="82" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Lock Delivery</text>
                    <text x="82" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Submit Work Button</text>
                    <text x="82" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Export Sec 63 BSA Logs</text>

                    <path d="M 155 67 L 182 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="182" y="20" width="145" height="95" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="254" y="44" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="254" y="64" fill="#92400E" fontWeight="bold" textAnchor="middle">Platform Dispute</text>
                    <text x="254" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Reject Refund in 7d</text>
                    <text x="254" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Mediation / Protection</text>

                    <path d="M 327 67 L 354 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="354" y="20" width="150" height="95" rx="10" fill="url(#upwAlert)" />
                    <text x="429" y="44" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="429" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Legal + IP Notice</text>
                    <text x="429" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand Notice</text>
                    <text x="429" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Sec 19 Copyright Freeze</text>

                    <path d="M 504 67 L 531 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="531" y="20" width="145" height="95" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="603" y="44" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="603" y="64" fill="#0F172A" fontWeight="bold" textAnchor="middle">DMCA / MSME ODR</text>
                    <text x="603" y="82" fill="#334155" fontSize="10" textAnchor="middle">AWS/Shopify Takedown</text>
                    <text x="603" y="98" fill="#475569" fontSize="9" textAnchor="middle">or Order 37 / 3× Interest</text>

                    <path d="M 676 67 L 703 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="703" y="20" width="145" height="95" rx="10" fill="url(#upwSucc)" />
                    <text x="775" y="44" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="775" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Payout Recovered</text>
                    <text x="775" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Escrow / SWIFT / RTGS</text>
                    <text x="775" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">IP Assigned Only on Pay</text>

                    {/* Bottom Summary Box */}
                    <rect x="10" y="140" width="838" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="164" fill="#0F172A" fontWeight="bold" fontSize="11">THREE STATUTORY &amp; PLATFORM TIMELINES EVERY INDIAN FREELANCER MUST TRACK:</text>
                    <text x="25" y="186" fill="#475569" fontSize="10">1. Platform Timers: 14 calendar days auto-release on Upwork Fixed-Price; 7 days to reject refund; 72 hours auto-complete on Fiverr.</text>
                    <text x="25" y="205" fill="#475569" fontSize="10">2. Copyright Leverage (Sec 19 Copyright Act &amp; Platform ToS): Zero IP ownership passes to the client until 100% of the invoice is paid.</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">3. Domestic Client Leverage (Sec 16 MSMED Act &amp; Sec 43B(h)): Udyam-registered freelancers claim 3× RBI Bank Rate compound interest after 45 days.</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: Interactive Dispute Solver Tabs (IRCTC Tabs style) */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Freelance Dispute Solver: Select Your Exact Issue
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Interactive Guide: Switch Between Upwork Escrow, Hourly Declines, Fiverr Chargebacks, Off-Platform Ghosting &amp; IP Theft
                  </p>
                </div>

                <UpworkFiverrProblemTabs />
              </section>

              {/* Section 7: Landmark Order Digest (IRCTC style <article> cards) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Precedents on Digital Contracts &amp; Copyright
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court &amp; High Court Records
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Commercial Context &amp; Dispute:</strong>
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
                              Legal Relief / Holding Impact
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Applicability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Across Indian Civil &amp; Commercial Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for freelancers &amp; agencies:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Worked Example (IRCTC dark card style) */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Developer Recovers ₹4,15,000 From Client
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Freelancer Recovery Scenario
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru React/Node Developer vs Austin &amp; Mumbai SaaS Client</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Siddharth Nair, an independent full-stack developer in Bengaluru, completed a $1,500 initial milestone on Upwork for a B2B SaaS company operating with a Delaware parent entity and a Mumbai subsidiary. To avoid Upwork&apos;s platform fees on Phase 2, the client&apos;s CTO persuaded Siddharth to sign a direct email Statement of Work (SOW) for $4,950 (₹4,15,000) payable via Wise upon deployment of the analytics dashboard.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Siddharth pushed the completed production code to the client&apos;s GitHub repository on 12 September 2026. Within 48 hours, the client merged the pull request, deployed the dashboard to their live customer portal, and revoked Siddharth&apos;s GitHub and Slack access. For 28 days, the CTO ignored Siddharth&apos;s invoices and WhatsApp reminders, eventually sending a curt email claiming the code &ldquo;needed internal refactoring&rdquo; and refusing payment.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Siddharth engaged LegalRecovery.in. Because reporting an off-platform deal to Upwork would risk Siddharth&apos;s Top Rated Plus account under Upwork&apos;s Non-Circumvention rule, our advocate bypassed Upwork entirely and served a formal 15-day <strong>Statutory Legal Demand &amp; Section 19 Copyright Revocation Notice</strong> to both the Mumbai subsidiary&apos;s registered office (via Registered Speed Post) and the Delaware founders&apos; corporate emails. The notice cited <em>Trimex International</em> (email SOW validity), Section 70 of the Indian Contract Act, Section 16 MSMED compound interest (via Siddharth&apos;s Udyam registration), and Section 19 of the Copyright Act—formally revoking all license to run the unpaid codebase and attaching a draft AWS/GitHub DMCA Takedown notice.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Facing an immediate DMCA takedown of their live customer-facing analytics module and a Section 43B(h) / MSME ODR filing against their Mumbai entity, the client&apos;s legal counsel responded on Day 9. On Day 12, the full ₹4,15,000 ($4,950) was credited to Siddharth&apos;s bank account against a formal Copyright Assignment &amp; No-Dues Letter.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Freelancer Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Records Under Section 63 BSA
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Evidence Act), digital records are fully admissible in Indian courts and MSME ODR proceedings. Before serving a legal notice, secure these 6 records (see our complete <Link href="/freelancer-evidence-checklist-payment-recovery-india" className="text-blue-700 underline font-semibold">freelancer payment recovery evidence checklist</Link>):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Upwork / Fiverr Contract Brief or Email SOW:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">PDF export of the milestone description, hourly rate, gig requirements, or email/Slack thread agreeing on scope and price.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Submission &amp; Delivery Timestamp Proof:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshots of Upwork &lsquo;Submit Work for Payment&rsquo;, Fiverr &lsquo;Deliver Now&rsquo;, Git commit hashes, Figma version history, or Drive share logs.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Client Acceptance &amp; Praise Messages:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Exported Slack, WhatsApp, or platform chat messages where the client approved milestones (&ldquo;Looks great, deploying today&rdquo;) before defaulting.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Original Creation &amp; Master Source Files:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Local dated repositories, raw .fig/.psd/.prproj files, and live screenshots proving the client is using your unpaid IP on their domain or social channels.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Unpaid Invoices &amp; Past Remittance Trail (FIRC / Bank):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copies of overdue GST/export invoices alongside past Wise, Payoneer, SWIFT FIRC, or UPI credits proving an established commercial relationship.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Udyam Registration Certificate (For Indian Clients):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Your Micro/Small Enterprise Udyam certificate to unlock 3× RBI Bank Rate monthly compound interest under Section 16 of the MSMED Act.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Honest Scope Block */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Scope &amp; Boundaries: What LegalRecovery Can and Cannot Do
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Cross-border and platform freelance disputes require realistic legal triage. Before you spend money on a legal notice, review what our advocates can and cannot do:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block">
                      ✓ What LegalRecovery Can Do For You
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed list-disc list-inside">
                      <li>Serve a formal <strong>15-Day Advocate Legal Demand &amp; Section 19 Copyright Revocation Notice</strong> on any identifiable Indian company, startup, agency, or individual client via Speed Post, Email, and WhatsApp.</li>
                      <li>Serve a formal <strong>Cross-Border Demand &amp; IP Cease-and-Desist Notice</strong> on identifiable overseas companies (US, UK, UAE, EU, Singapore, Australia) and prepare DMCA takedown notices for their live websites, GitHub repos, or app listings.</li>
                      <li>Compute and demand <strong>3× RBI Bank Rate compound interest</strong> and Section 43B(h) tax disallowance for Udyam-registered freelancers billing Indian clients.</li>
                    </ul>
                  </div>

                  <div className="bg-red-50/70 border border-red-200 rounded-2xl p-5 space-y-2.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-800 block">
                      ✕ What LegalRecovery Cannot Do
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed list-disc list-inside">
                      <li>We cannot force Upwork Inc. or Fiverr International Ltd. to override their internal Hourly Protection rules (e.g., if you logged manual time without the desktop tracker) or overturn a completed binding AAA Arbitration award.</li>
                      <li>We cannot trace or recover money from an anonymous ₹3,000–₹10,000 ($50–$100) Fiverr/Telegram burner account where you do not know the buyer&apos;s real name, company, domain, or address.</li>
                      <li>We cannot get a suspended Upwork or Fiverr freelancer profile reinstated if the platform banned you for violating their Non-Circumvention policy.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Upwork &amp; Fiverr Disputes &amp; Legal Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Answers Grounded in Upwork/Fiverr Escrow Rules, Section 19 Copyright Act &amp; Indian Contract Law
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

              {/* Section 12: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Legal Statutes &amp; Platform Dispute Rules
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
                  Statutory verification status: All provisions verified against the Indian Copyright Act 1957, Indian Contract Act 1872, MSMED Act 2006/2026, and active Upwork/Fiverr Escrow &amp; Ownership Terms as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand and Copyright Revocation Notice to Your Client
                </h2>
                <UpworkFiverrNoticeCTA variant="primary" />
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
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Copyright Not Transferred Until Paid (Section 19 Lever) →
                  </Link>
                  <Link
                    href="/influencer-brand-deal-payment-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Influencer &amp; Creator Brand Deal Payment Recovery →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Unpaid Invoices From International Clients →
                  </Link>
                  <Link
                    href="/msme-act-freelancer-payment-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME (Udyam) Act for Freelancer Payment Recovery →
                  </Link>
                  <Link
                    href="/how-freelancer-can-send-legal-notice-to-client-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    How a Freelancer Can Send a Legal Notice to a Client →
                  </Link>
                  <Link
                    href="/freelancer-evidence-checklist-payment-recovery-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Freelancer Digital Evidence Checklist (Sec 63 BSA) →
                  </Link>
                  <Link
                    href="/services/recovery-of-freelancer-and-client-payments"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Freelancer &amp; Agency Legal Notice Filing Service →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/upwork-fiverr-client-not-paying-india" />
      </div>
    </>
  );
}
