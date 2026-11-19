import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MandateFeeTableOfContents from "./MandateFeeTableOfContents";
import MandateFeeScenarioTabs from "./MandateFeeScenarioTabs";
import MandateFeeCTA from "./MandateFeeCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/investment-banker-debt-syndication-dsa-mandate-success-fee-circumvention";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const META_TITLE = "Client Bypassed Your 2% Loan or M&A Mandate Success Fee?";
const META_DESCRIPTION =
  "Investment bankers, debt syndicators & M&A advisors: enforce Exclusive Mandate & 18-Month Tail Clauses, Contract Act s.73/205 & Sec 9 / Order 38 liens.";
const EXACT_H1 =
  "Prepared the CMA/IM, Introduced the Bank or Investor, Got the Term Sheet—and the Promoter Closed Directly to Dodge Your 2% Success Fee!";

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
        alt: formatAltText(
          "Investment banker and debt syndication mandate success fee circumvention recovery"
        ),
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
      "The Indian Contract Act, 1872 (Sections 70, 73, 202, 205 & 219 — Breach of Exclusivity, Wrongful Mandate Revocation & Agency Remuneration)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Sections 9, 11 & 21 — Urgent Interim Security Over Deal Proceeds & Commencement of Arbitration)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Section 2(1)(c)(i) & (x) Consultancy/Financier Jurisdiction and Section 12A Urgent Interim Relief Carve-Out)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Procedure & Order XXXVIII Rule 5 Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Ministry of Corporate Affairs (MCA V3 Portal) — Public Inspection of Form CHG-1 (Loan Charge Registration) & Form PAS-3 (Equity Allotment)",
    url: "https://www.mca.gov.in/",
  },
  {
    title:
      "The Copyright Act, 1957 (Sections 13, 17 & 51 — Literary & Compilation Copyright Over Proprietary Information Memoranda, CMA Models & TEVRs)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Post-Sanction Fee Cheques & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility Certificate for VDR Logs, Intro Emails, Term Sheets & MCA Extracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Urgent Interim Security Under Section 9 Arbitration Act Is Not Shackled by CPC Technicalities",
    parties: "Essar House Private Limited v. Arcellor Mittal Nippon Steel India Limited",
    citation: "2022 SCC OnLine SC 1219, Supreme Court of India",
    statute: "Arbitration and Conciliation Act, 1996 — Section 9",
    facts:
      "A respondent challenged an interim Section 9 order directing cash deposit / security on the ground that the strict pleadings required for Attachment Before Judgment under Order XXXVIII Rule 5 CPC were not fully established.",
    holding:
      "The Supreme Court held that while courts exercising Section 9 powers keep broad CPC principles in view, they are not strictly bound by the technical rigours of Order XXXVIII Rule 5 CPC. Where a strong prima facie case, balance of convenience, and real risk of asset dissipation or frustrating an award exist, a court may direct monetary security or escrow protection.",
    creditorTakeaway:
      "For boutique investment bankers and debt syndicators whose mandate carries an arbitration clause, Section 9 is vastly faster and more effective than an ordinary civil suit for securing a ₹75 Lakh–₹2.5 Crore success fee before loan drawdown or primary equity funds are disbursed.",
  },
  {
    title: "Evidentiary Bar for Order XXXVIII Rule 5 Attachment Before Judgment in Non-Arbitration Suits",
    parties: "Raman Tech. & Process Engg. Co. & Anr. v. Solanki Traders",
    citation: "(2008) 2 SCC 302, Supreme Court of India",
    statute: "Code of Civil Procedure, 1908 — Order XXXVIII Rule 5",
    facts:
      "A plaintiff obtained an Order XXXVIII Rule 5 attachment before judgment solely by asserting an unpaid commercial balance without specific factual proof that the debtor was actively removing or alienating assets to obstruct execution.",
    holding:
      "The Supreme Court cautioned that Order XXXVIII Rule 5 is an extraordinary remedy and cannot convert an unsecured debt into a secured debt merely on bald apprehensions; the creditor must establish both a bona fide prima facie claim and concrete conduct showing intent to obstruct or delay execution.",
    creditorTakeaway:
      "When filing a non-arbitration Commercial Suit for a bypassed real-estate IPC or debt-syndication mandate, plead concrete dissipation facts—such as clandestine closing via a newly formed sister SPV, abrupt mandate termination right after sanction, or diversion of loan proceeds to promoter group entities.",
  },
  {
    title: "Bypassing Mandatory Section 12A Commercial Mediation When Urgent Interim Relief Is Genuine",
    parties: "Yamini Manohar v. T.K.D. Keerthi (read with Patil Automation (2022) 10 SCC 1)",
    citation: "(2024) 5 SCC 815, Supreme Court of India",
    statute: "Commercial Courts Act, 2015 — Section 12A",
    facts:
      "Following Patil Automation (which made Section 12A pre-institution mediation mandatory for commercial suits >= ₹3 Lakh), defendants routinely sought Order VII Rule 11 rejection whenever plaintiffs filed urgent injunction/attachment suits directly.",
    holding:
      "The Supreme Court clarified that while plaintiffs cannot camouflage a non-urgent money claim to evade Section 12A, a Commercial Court must assess from the plaint, documents, and closing-table timeline whether urgent interim relief is genuinely contemplated—in which case pre-institution mediation is lawfully dispensed with.",
    creditorTakeaway:
      "If you discover an imminent loan disbursement or M&A closing with an introduced lender/fund, document the closing date and immediate fund-movement risk in your Advocate Notice and plaint so your urgent Commercial Suit clears the Yamini Manohar threshold cleanly.",
  },
  {
    title: "Post-Sanction & Escrow Security Fee Cheques Attract Criminal Liability Under Section 138 NI Act",
    parties: "Sripati Singh (Deceased) v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    statute: "Negotiable Instruments Act, 1881 — Sections 138, 139 & 143A",
    facts:
      "A borrower challenged Section 138 prosecution contending that cheques handed over prior to maturity were mere 'security cheques' unenforceable upon subsequent commercial dispute.",
    holding:
      "The Supreme Court ruled that once the underlying obligation matures and remains unpaid on the presentation date, a security cheque becomes an enforceable negotiable instrument squarely attracting Section 138 prosecution.",
    creditorTakeaway:
      "Whenever a promoter issues a post-dated success-fee cheque upon Term Sheet or Bank Sanction Letter receipt and then hits 'Stop Payment' after disbursement, issue the NI Act s.138 statutory notice within 30 days of the return memo to trigger criminal summons against the company and directors u/s 141.",
  },
];

const FAQS = [
  {
    question:
      "Can an investment banker or debt syndicator recover their 2% success fee if the promoter terminated the mandate and closed with the introduced bank 60 days later?",
    answer:
      "Yes. Under Sections 73 and 205 of the Indian Contract Act, 1872, a promoter cannot wrongfully revoke an exclusive mandate mid-process to pocket the benefit of your CMA/IM preparation and lender introduction. If your signed Engagement Letter contains a 12-to-24 month Tail-Period Survival Clause covering introduced lenders/investors, closing within the tail window triggers the full contracted 1.5%–2.5% success fee—which can be proven publicly via MCA Form CHG-1 (loan charge registration) or Form PAS-3 (equity share allotment).",
  },
  {
    question:
      "What if our mandate had no explicit Tail Period clause—can we still claim commission under 'Effective Cause' law?",
    answer:
      "Yes, though an express Tail Clause is always stronger. Indian contract and agency jurisprudence recognizes the 'Effective Cause' (causa causans) doctrine alongside Section 219 (agent's remuneration) and Section 70 (quantum meruit—compensation for non-gratuitous services whose benefit is enjoyed). Where your CMA data, Information Memorandum, VDR logs, and email introductions brought the lender or investor to the table and produced the term sheet, the promoter cannot defeat remuneration merely by executing the final paperwork directly.",
  },
  {
    question:
      "How do I legally prove the client closed the loan or PE funding round behind my back?",
    answer:
      "Corporate borrowers and funded startups cannot hide institutional closings from statutory registries. For corporate debt syndication (term loans, working capital, NCDs, project finance), pull the company's MCA V3 Charge Register (Form CHG-1), which reveals the exact bank/NBFC name, charge creation date, and sanctioned amount. For equity/M&A/VC rounds, download MCA Form PAS-3 (Return of Allotment) and Form MGT-14, which list the exact investor entity, allotment date, and capital raised. For commercial real-estate IPC deals, pull certified copies of the Sub-Registrar Conveyance/Lease Deed and cross-check DIN director records.",
  },
  {
    question:
      "Can I freeze the loan disbursement or M&A closing escrow to secure my unpaid advisory success fee?",
    answer:
      "If your mandate includes an Arbitration Clause, you can move an urgent Section 9 petition before the jurisdictional Commercial Court seeking an interim order directing the client to deposit the disputed success fee into court/escrow or furnish a Bank Guarantee before dissipating closing proceeds—relying on the Supreme Court's flexible Section 9 standard in Essar House v. Arcellor Mittal (2022). Without an arbitration clause, you can pursue an urgent Commercial Suit with Order XXXVIII Rule 5 (Attachment Before Judgment) or Order XXXIX relief, demonstrating concrete asset-dissipation risk under Raman Tech and urgency under Yamini Manohar.",
  },
  {
    question:
      "Should I email the bank or PE investor directly accusing the promoter of fraud before serving a legal notice?",
    answer:
      "Never send emotional or defamatory accusations to a lender or PE fund—that invites a counter-suit for defamation or tortious interference with business relations. Instead, have external commercial litigation counsel issue a strictly factual, contract-backed Legal Notice to the Promoter/Company citing the signed Mandate, Tail Schedule, and Section 9 / Commercial Suit remedies, and—only where legally vetted and permitted under confidentiality terms—place the lender/escrow agent's Legal Compliance Desk on formal notice of the contractual fee claim.",
  },
  {
    question:
      "What if the promoter routed the commercial real-estate purchase or funding through a newly formed sister SPV to bypass our non-circumvention clause?",
    answer:
      "Sister-SPV camouflage is one of the commonest circumvention tactics in commercial real-estate IPC and M&A mandates. Pull the MCA Director Master Data (DIN search), Shareholding Pattern (Form MGT-7), and Beneficial Ownership filings (Form BEN-2) to prove common promoter/fund control between the entity named in your LOI/VDR and the closing SPV. Courts look through sham corporate veils set up solely to evade contractual brokerage and non-circumvention covenants.",
  },
  {
    question:
      "Can a boutique investment bank or corporate DSA use the MSMED Act (3x RBI interest) and Income Tax Section 43B(h) for unpaid retainers?",
    answer:
      "Yes—provided your advisory firm held a valid Udyam Micro or Small Enterprise registration prior to executing the mandate (as mandated by the Supreme Court in Silpi Industries). For unpaid monthly retainers, TEVR/CMA preparation fees, and accrued advisory invoices crossing 45 days, MSMED Act Sections 15–18 grant compound monthly interest at 3x the RBI Bank Rate, while Income Tax Act Section 43B(h) disallows the client's tax deduction on overdue Micro/Small supplier bills at financial year-end.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository — update author/reviewer link once centralized reviewer registry is added.
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T12:15:00+05:30",
  dateModified: "2026-11-19T12:15:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
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
    name: "Investment Banking, Debt Syndication & M&A Mandate Success Fee Circumvention Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Investment Bankers, Debt Syndicators & Commercial IPCs Recover Bypassed 1.5%–2.5% Mandate Success Fees",
  description:
    "5-stage legal recovery sequence combining Protected Lender/Investor Tail Schedules, MCA Form CHG-1/PAS-3 closing proof, BSA 2023 s.63 VDR logs, Advocate Demand Notice, and urgent Section 9 / Order XXXVIII interim protection.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock the Tail-Protected Lender/Investor Schedule Immediately",
      text: "Upon mandate expiry or abrupt promoter termination, serve a formal Tail-Protected Party Schedule listing every introduced bank, NBFC, PE/VC fund, strategic buyer, and their affiliates alongside VDR and intro-email timestamps.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Extract Public Closing Proof via MCA CHG-1, PAS-3 & IGRS Deeds",
      text: "Download MCA V3 Form CHG-1 (loan charge creation), Form PAS-3 (share allotment), DIN cross-links for sister SPVs, or Sub-Registrar registered conveyance/lease deeds to prove transaction closure within the 12–24 month tail window.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Certify VDR Logs, CMA/IM Metadata & Intro Chain Under BSA 2023 s.63",
      text: "Compile the signed Mandate Agreement, Exclusivity & Tail clauses, CMA/TEVR/IM file creation metadata, email threads copying bank RMs or PE partners, and signed Term Sheet/LOI drafts with a Section 63 BSA 2023 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Dispatch an External Advocate Mandate-Breach & Pre-Disbursement Notice",
      text: "Serve a formal demand notice under Contract Act ss.73/205/219, Copyright Act s.51 (for unauthorized reuse of CMA/IM models), and NI Act s.138 (if a post-sanction fee cheque bounced), putting the Board and closing table on strict legal notice.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Move Urgent Section 9 Arbitration or Order XXXVIII / Order XXXVII Commercial Suit",
      text: "If disbursement or closing is imminent and payment is withheld, petition the Commercial Court under Section 9 of the Arbitration Act (or Order XXXVIII Rule 5 / Order XXXVII CPC with Yamini Manohar urgency) to ring-fence the 1.5%–2.5% success fee.",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CAs, Architects, Engineers & Advisors Recovery",
      item: `${SITE_URL}/industries/ca-architects-consultants-professional-fee-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Investment Banker & Debt Syndication Fee Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function InvestmentBankerDebtSyndicationFeePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data (JSON-LD) */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-23 B2B Creditor Playbook</span>
            <span className="text-red-600">&bull;</span>
            <span>Investment Banking, Debt Syndication &amp; M&amp;A Mandates</span>
          </div>

          {/* Single Page H1 (Exact Verbatim Match with ARTICLE_SCHEMA.headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + inline Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &middot; Statutory Summary
            </span>
            Under Indian Contract Act ss.73, 205 &amp; 219 and &lsquo;Effective Cause&rsquo; agency law, promoters cannot terminate an exclusive mandate post-term-sheet to evade a 1.5%&ndash;2.5% success fee. Prove clandestine closing via MCA Form CHG-1 / PAS-3, enforce 12&ndash;24 month Tail Clauses, and ring-fence proceeds via Arbitration Section 9 or Order XXXVIII Rule 5. See our{" "}
            <Link
              href="/industries/ca-architects-consultants-professional-fee-recovery"
              className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white font-bold"
            >
              CA, Architect &amp; Advisory Fee Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                12&ndash;24 Mo
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Enforceable Tail-Period Survival Window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                &#8377;75L&ndash;&#8377;2.5 Cr
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Typical Debt / M&amp;A Mandate Fee at Stake
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                CHG-1 / PAS-3
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Public MCA Proof of Secret Deal Closing
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                s.9 / Order 38
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Urgent Pre-Disbursement Fee Security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs (Breadcrumbs automatically prepends Home /) */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              {
                label: "CAs, Architects & Advisors Recovery",
                href: "/industries/ca-architects-consultants-professional-fee-recovery",
              },
              {
                label: "Investment Banker & Debt Syndication Fee Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky TOC + Editorial Sections */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <MandateFeeTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Closing-Table Circumvention */}
            <section
              id="heading-closing-bypass"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Promoters Bypass Mandates at the Closing Table
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Boutique investment bankers, corporate debt-syndication arrangers, institutional Direct Selling Agents (DSAs), M&amp;A advisors, and commercial real-estate International Property Consultants (IPCs) operate on a stark economic asymmetry: <strong>90% of the intellectual heavy lifting happens upfront for minimal or zero retainer</strong>, while 100% of the commercial reward sits in a single closing-table success fee of 1.5% to 2.5%.
                </p>
                <p>
                  In a &#8377;50 Crore term-loan / working-capital syndication (1.5% = &#8377;75 Lakh) or a &#8377;100 Crore private-equity / M&amp;A transaction (2.5% = &#8377;2.50 Crore), the temptation for an unscrupulous promoter spikes at the exact moment you deliver the hardest milestone—recasting three years of messy financials into a bankable Credit Monitoring Arrangement (CMA) model, building the Information Memorandum (IM) or Techno-Economic Viability Report (TEVR), populating the Virtual Data Room (VDR), and securing an in-principle Term Sheet or Bank Sanction Letter.
                </p>
                <p>
                  Suddenly, the promoter sends a rehearsed email: <em>&ldquo;The bank&rsquo;s ROI is 40 bps too high,&rdquo;</em> or <em>&ldquo;We are pausing the Series B fundraise due to market conditions—consider the mandate closed.&rdquo;</em> Sixty to ninety days later, the borrower quietly signs the exact &#8377;50 Crore facility with the bank relationship manager you introduced, or executes the Share Subscription Agreement (SSA) with the exact PE/VC fund whose partners spent 14 hours inside your VDR—attempting to erase a &#8377;75 Lakh to &#8377;2.5 Crore advisory liability overnight.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      Tactic 1 &middot; The &ldquo;Talks Stalled&rdquo; Stall
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      Promoter runs down the 6-month exclusivity clock, stops returning calls during final credit committee review, and executes definitive agreements 30&ndash;90 days post-expiry.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                      Tactic 2 &middot; Sister-SPV Camouflage
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      Borrower, investor, or commercial real-estate buyer closes the land parcel or structured debt through a newly incorporated group SPV to claim &ldquo;different contracting entity.&rdquo;
                    </p>
                  </div>
                  <div className="bg-slate-100 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      Tactic 3 &middot; Post-Sanction Haircut Squeeze
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      After sanction/disbursement, the promoter stops payment on the post-dated fee cheque and demands an 80% fee cut (&ldquo;take &#8377;15L instead of &#8377;75L or litigate for 5 years&rdquo;).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Statutory Backbone */}
            <section
              id="heading-tail-effective-cause"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Contract Act s.73, s.205, Tail Clauses &amp; Effective Cause Law
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Indian commercial courts and arbitral tribunals have little sympathy for sophisticated corporate borrowers who consume months of financial structuring and then invoke contrived terminations on the eve of closing. Your legal recovery rests on four interlocking pillars under the <strong>Indian Contract Act, 1872</strong> and commercial equity:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      1. Exclusivity &amp; Tail-Period Survival (Contract Act s.73)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      A well-drafted <strong>12-to-24 Month Tail-Period Survival Clause</strong> is NOT a restraint of trade under Section 27—it is a valid deferred-compensation covenant protecting the advisor&rsquo;s upfront origination work. If the client closes with any lender, investor, acquirer, or affiliate introduced during the mandate term within the tail window, non-payment constitutes direct breach entitling you to the full contracted success fee as expectation damages under Section 73.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      2. Wrongful Premature Revocation (Contract Act s.205 &amp; s.202)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under <strong>Section 205</strong>, where there is an express or implied contract that an agency/mandate shall continue for a fixed exclusivity period (e.g., 6 or 9 months), the principal must compensate the agent for any revocation without sufficient cause. Where the advisor holds a contractual charge/interest over closing proceeds, <strong>Section 202</strong> further restricts unilateral revocation aimed at defeating that accrued interest.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      3. &lsquo;Effective Cause&rsquo; (Causa Causans) &amp; Section 219
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under established agency commission law and <strong>Section 219</strong>, an intermediary earns remuneration once they serve as the <em>effective cause</em> bringing the lender/investor and client into negotiation resulting in a consummated transaction. Even if the promoter sidelines the advisor during final legal documentation or tweaks the coupon/valuation slightly, direct closing does not break the chain of causation.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      4. Quantum Meruit (s.70) &amp; CMA/IM Copyright (s.51)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Even where a formal Engagement Letter expired informally or lacked an airtight tail clause, <strong>Section 70</strong> bars unjust enrichment when a borrower enjoys non-gratuitous financial structuring. Simultaneously, redistributing your proprietary CMA Excel models, TEVR reports, or Information Memorandum to a rival lender without paying violates your literary/compilation copyright under <strong>Sections 13, 17 &amp; 51 of the Copyright Act, 1957</strong> (see our{" "}
                      <Link
                        href="/copyright-not-transferred-until-paid-freelancer"
                        className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                      >
                        IP &amp; Copyright Retention Guide
                      </Link>
                      ).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 5-Stage Decision Tree Flowchart (SVG Desktop + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Success-Fee &amp; Disbursement-Lien Recovery Flowchart
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Speed determines collectability in investment banking and debt syndication disputes. Once a &#8377;50 Crore term loan or &#8377;100 Crore equity round hits the borrower&rsquo;s operating bank account and gets swept into vendor paydowns or group transfers, your leverage drops sharply. Execute this five-stage escalation sequence immediately upon suspecting circumvention:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto pb-2">
                <svg
                  width="860"
                  height="310"
                  viewBox="0 0 860 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-stage investment banker and debt syndication success fee recovery flowchart"
                  className="w-full h-auto max-w-[860px] mx-auto"
                >
                  <rect width="860" height="310" rx="16" fill="#0F172A" />

                  {/* Stage 1 */}
                  <rect x="20" y="34" width="148" height="118" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <rect x="32" y="46" width="54" height="18" rx="9" fill="#DC2626" />
                  <text x="59" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="sans-serif">STAGE 1</text>
                  <text x="32" y="82" fill="#F8FAFC" fontSize="12" fontWeight="700" fontFamily="sans-serif">Lock Tail List</text>
                  <text x="32" y="100" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">Send Protected Bank /</text>
                  <text x="32" y="114" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">PE Investor Schedule</text>
                  <text x="32" y="128" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">+ VDR Intro Timestamps</text>

                  {/* Arrow 1->2 */}
                  <line x1="168" y1="93" x2="188" y2="93" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="188,88 196,93 188,98" fill="#94A3B8" />

                  {/* Stage 2 */}
                  <rect x="196" y="34" width="148" height="118" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <rect x="208" y="46" width="54" height="18" rx="9" fill="#D97706" />
                  <text x="235" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="sans-serif">STAGE 2</text>
                  <text x="208" y="82" fill="#F8FAFC" fontSize="12" fontWeight="700" fontFamily="sans-serif">Pull MCA Proof</text>
                  <text x="208" y="100" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">Form CHG-1 (Loan) /</text>
                  <text x="208" y="114" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">Form PAS-3 (Equity) /</text>
                  <text x="208" y="128" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">IGRS Deed &amp; DIN Check</text>

                  {/* Arrow 2->3 */}
                  <line x1="344" y1="93" x2="364" y2="93" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="364,88 372,93 364,98" fill="#94A3B8" />

                  {/* Stage 3 */}
                  <rect x="372" y="34" width="148" height="118" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                  <rect x="384" y="46" width="54" height="18" rx="9" fill="#0284C7" />
                  <text x="411" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="sans-serif">STAGE 3</text>
                  <text x="384" y="82" fill="#F8FAFC" fontSize="12" fontWeight="700" fontFamily="sans-serif">Advocate Notice</text>
                  <text x="384" y="100" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">Contract Act s.73/205</text>
                  <text x="384" y="114" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">+ Copyright s.51 +</text>
                  <text x="384" y="128" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">NI s.138 (if Cheque)</text>

                  {/* Arrow 3->4 */}
                  <line x1="520" y1="93" x2="540" y2="93" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="540,88 548,93 540,98" fill="#94A3B8" />

                  {/* Stage 4 */}
                  <rect x="548" y="34" width="148" height="118" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="560" y="46" width="54" height="18" rx="9" fill="#059669" />
                  <text x="587" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="sans-serif">STAGE 4</text>
                  <text x="560" y="82" fill="#F8FAFC" fontSize="12" fontWeight="700" fontFamily="sans-serif">Forum Split</text>
                  <text x="560" y="100" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">Arbitration Clause?</text>
                  <text x="560" y="114" fill="#10B981" fontSize="10" fontWeight="700" fontFamily="sans-serif">YES &rarr; Sec 9 Petition</text>
                  <text x="560" y="128" fill="#F59E0B" fontSize="10" fontWeight="700" fontFamily="sans-serif">NO &rarr; Order 38 / 37</text>

                  {/* Arrow 4->5 */}
                  <line x1="696" y1="93" x2="716" y2="93" stroke="#94A3B8" strokeWidth="2" />
                  <polygon points="716,88 724,93 716,98" fill="#94A3B8" />

                  {/* Stage 5 */}
                  <rect x="724" y="34" width="116" height="118" rx="12" fill="#7F1D1D" stroke="#F87171" strokeWidth="1.5" />
                  <rect x="734" y="46" width="54" height="18" rx="9" fill="#DC2626" />
                  <text x="761" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="sans-serif">STAGE 5</text>
                  <text x="734" y="82" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">Ring-Fence</text>
                  <text x="734" y="100" fill="#FECACA" fontSize="10" fontFamily="sans-serif">Escrow Deposit /</text>
                  <text x="734" y="114" fill="#FECACA" fontSize="10" fontFamily="sans-serif">Bank Guarantee /</text>
                  <text x="734" y="128" fill="#FECACA" fontSize="10" fontFamily="sans-serif">Award Execution</text>

                  {/* Bottom Urgency Bar */}
                  <rect x="20" y="178" width="820" height="106" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <text x="38" y="202" fill="#F87171" fontSize="11" fontWeight="800" fontFamily="sans-serif">
                    CRITICAL TIMING RULE — PRE-DISBURSEMENT VS POST-DISBURSEMENT STRATEGY
                  </text>
                  <text x="38" y="224" fill="#E2E8F0" fontSize="11" fontFamily="sans-serif">
                    &bull; Pre-Disbursement (Sanction / Term Sheet Issued): Invoke Sec 9 Arbitration or Urgent Commercial Suit (Yamini Manohar s.12A carve-out) to secure closing escrow.
                  </text>
                  <text x="38" y="244" fill="#E2E8F0" fontSize="11" fontFamily="sans-serif">
                    &bull; Post-Disbursement (Within 12-24 Mo Tail): Pull MCA CHG-1 / PAS-3, invoke Sec 21 Arbitration Notice or Order XXXVII Summary Suit + NI Act s.138 on fee cheques.
                  </text>
                  <text x="38" y="264" fill="#A7F3D0" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                    &bull; Udyam-Registered Boutiques: Add MSMED Act s.16 (3x RBI compound interest) &amp; Income Tax s.43B(h) disallowance leverage on unpaid retainer/advisory bills.
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "Stage 1",
                    title: "Lock Tail-Protected Lender / Investor Schedule",
                    body: "Email the finalized list of all introduced banks, NBFCs, PE/VC funds, and affiliates with VDR and email timestamps immediately upon mandate expiry or termination.",
                  },
                  {
                    step: "Stage 2",
                    title: "Extract Public MCA & IGRS Closing Proof",
                    body: "Pull MCA Form CHG-1 (loan charge creation), Form PAS-3 (equity allotment), DIN links for sister SPVs, or Sub-Registrar registered conveyance/lease deeds.",
                  },
                  {
                    step: "Stage 3",
                    title: "Serve Advocate Mandate-Breach Notice",
                    body: "Dispatch formal notice citing Contract Act ss.73/205/219, Copyright Act s.51 (unauthorized CMA/IM reuse), and NI Act s.138 within 30 days if a fee cheque bounced.",
                  },
                  {
                    step: "Stage 4",
                    title: "Select Urgent Interim Forum (Sec 9 vs Order 38)",
                    body: "With an arbitration clause, file a Commercial Court Section 9 petition (Essar House standard). Without arbitration, file an urgent Commercial Suit bypassing s.12A (Yamini Manohar).",
                  },
                  {
                    step: "Stage 5",
                    title: "Ring-Fence Success Fee & Execute Award",
                    body: "Secure escrow deposit, bank guarantee, or summary decree for the full 1.5%–2.5% fee + 18% GST + commercial/MSMED interest.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#DC2626] text-white mb-1.5">
                      {item.step}
                    </span>
                    <p className="text-sm font-bold text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Matrix: Debt Syndication, M&amp;A, PE/VC &amp; IPC Deals
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Different advisory sub-verticals generate different public registries, interim urgency thresholds, and statutory enforcement hooks. Match your mandate structure to the exact recovery weapon below:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Mandate Vertical</th>
                      <th className="py-3.5 px-4 font-bold">Public Proof of Closing</th>
                      <th className="py-3.5 px-4 font-bold">Primary Statutory Hooks</th>
                      <th className="py-3.5 px-4 font-bold">Urgent Interim &amp; Forum Track</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Corporate Debt Syndication &amp; Project Finance (DSA / Arranger)
                      </td>
                      <td className="py-3.5 px-4">
                        MCA V3 <strong>Form CHG-1</strong> (Charge Creation), Sanction Letter drafts, CERSAI / lender emails
                      </td>
                      <td className="py-3.5 px-4">
                        Contract Act ss.73, 205 &amp; 219; Copyright Act s.51 (CMA/TEVR reuse); NI Act s.138 on fee cheques
                      </td>
                      <td className="py-3.5 px-4">
                        Arbitration s.9 escrow security on pending loan tranches OR Commercial Suit (Order XXXVII / XXXVIII)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-100/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        M&amp;A, Private Equity &amp; VC Fundraising (Boutique IB)
                      </td>
                      <td className="py-3.5 px-4">
                        MCA <strong>Form PAS-3</strong> (Share Allotment), Form MGT-14, SH-7, VDR Audit Logs
                      </td>
                      <td className="py-3.5 px-4">
                        12&ndash;24 Month Tail-Period Survival Clause; Contract Act s.73; Investor Warranty Disclosure pressure
                      </td>
                      <td className="py-3.5 px-4">
                        Arbitration s.9 Commercial Court petition (<em>Essar House</em>) + Sec 21 invocation notice
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Commercial Real-Estate IPC &amp; Land / Warehousing Brokerage
                      </td>
                      <td className="py-3.5 px-4">
                        Certified Sub-Registrar (IGRS) Sale/Lease Deed, DIN Master Data (sister SPV check), Site Visit &amp; LOI logs
                      </td>
                      <td className="py-3.5 px-4">
                        &lsquo;Effective Cause&rsquo; (<em>causa causans</em>) agency law; Contract Act s.73 &amp; s.70 (<em>quantum meruit</em>)
                      </td>
                      <td className="py-3.5 px-4">
                        Commercial Court Suit u/s 2(1)(c) + Order XXXVIII Rule 5 / Order XXXIX against balance tranche
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-100/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Unpaid Monthly Retainers, IM/CMA Milestone Bills &amp; Bounced Cheques
                      </td>
                      <td className="py-3.5 px-4">
                        GSTR-1/2B Tax Invoices (SAC 997159 / 998311), Form 26AS (s.194J / s.194H TDS), Bank Return Memo
                      </td>
                      <td className="py-3.5 px-4">
                        Order XXXVII CPC; NI Act ss.138/141/143A; CGST s.16(2) 180-day ITC reversal; MSMED ss.15&ndash;18 &amp; s.43B(h)
                      </td>
                      <td className="py-3.5 px-4">
                        30-day NI Act s.138 criminal notice + Summary Suit / MSEFC Samadhaan (if Udyam Micro/Small)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive 4-Scenario Playbooks */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Deal-Circumvention Traps: Interactive Recovery Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select the exact deal-closing bypass scenario affecting your firm to inspect the commercial flashpoint, legal trap to avoid, and step-by-step creditor escalation sequence:
              </p>

              <MandateFeeScenarioTabs />
            </section>

            {/* Section 6: Verified Supreme Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Supreme Court Precedents: Section 9, Order 38 &amp; Section 12A
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Every Advocate Legal Notice and Commercial Court petition for a bypassed advisory mandate should anchor itself in these four binding Supreme Court authorities governing interim security, urgent s.12A exemptions, and post-sanction fee cheques:
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <article
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-2.5 sm:pl-3 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.statute}
                        </span>
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-100">
                          {item.citation}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        {item.parties} &mdash; {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">Facts &amp; Holding:</strong>{" "}
                        {item.facts} {item.holding}
                      </p>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                        <strong className="text-emerald-900">Advisory Creditor Takeaway:</strong>{" "}
                        {item.creditorTakeaway}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Section 7: Worked Financial & Interest Calculation Ledgers */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Fee Ledgers: &#8377;75L Debt Mandate vs &#8377;2.5 Cr M&amp;A Deal
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Quantifying your exact contractual success fee, statutory GST exposure, and commercial/MSMED interest turns a vague &ldquo;disputed commission&rdquo; into a precision liquidated demand ready for Section 9 security or Order XXXVII summary adjudication:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Ledger A: Corporate Debt Syndication */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/60 mb-3">
                    Case A &middot; Corporate Debt Syndication (&#8377;50 Cr Loan)
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white mb-4">
                    Term Loan Closed 60 Days Post-Termination via MCA Form CHG-1
                  </h3>
                  <dl className="space-y-2.5 text-xs sm:text-sm border-t border-slate-700/80 pt-3">
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-400">Sanctioned Facility (Form CHG-1)</dt>
                      <dd className="font-bold text-white">&#8377;50,00,00,000</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-400">Contracted Success Fee (1.50%)</dt>
                      <dd className="font-bold text-emerald-400">&#8377;75,00,000</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-400">Unpaid CMA/TEVR Retainer Balance</dt>
                      <dd className="font-bold text-slate-200">&#8377;3,50,000</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-400">GST @ 18% (SAC 997159)</dt>
                      <dd className="font-bold text-slate-200">&#8377;14,13,000</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-400">Commercial Interest @ 18% p.a. (6 Mo)</dt>
                      <dd className="font-bold text-amber-400">&#8377;8,33,670</dd>
                    </div>
                    <div className="flex justify-between gap-2 pt-2.5 border-t border-slate-700">
                      <dt className="font-extrabold text-white">Total Section 9 / Suit Demand</dt>
                      <dd className="font-black text-lg text-emerald-400">&#8377;1,00,96,670</dd>
                    </div>
                  </dl>
                  <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                    Note: If the debt-syndication boutique holds pre-mandate Udyam Micro/Small registration, unpaid invoices further attract 3x RBI Bank Rate compounded monthly u/s 16 MSMED Act plus Income Tax s.43B(h) disallowance.
                  </p>
                </div>

                {/* Ledger B: M&A / PE Fundraising */}
                <div className="bg-emerald-50 text-slate-900 rounded-2xl p-5 sm:p-6 border border-emerald-200 shadow-sm">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-900 text-emerald-100 mb-3">
                    Case B &middot; M&amp;A / Series B Raise (&#8377;100 Cr Equity)
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4">
                    Equity Closed Within 18-Month Tail Proven via MCA Form PAS-3
                  </h3>
                  <dl className="space-y-2.5 text-xs sm:text-sm border-t border-emerald-200 pt-3">
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-600">Primary Equity Allotted (Form PAS-3)</dt>
                      <dd className="font-bold text-slate-900">&#8377;100,00,00,000</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-600">Contracted M&amp;A Success Fee (2.50%)</dt>
                      <dd className="font-bold text-emerald-800">&#8377;2,50,00,000</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-600">Less: Creditable Retainer Received</dt>
                      <dd className="font-bold text-slate-700">- &#8377;10,00,000</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-600">Net Success Fee + 18% GST</dt>
                      <dd className="font-bold text-slate-900">&#8377;2,83,20,000</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-600">Accrued Delay Interest @ 18% p.a. (4 Mo)</dt>
                      <dd className="font-bold text-amber-800">&#8377;16,99,200</dd>
                    </div>
                    <div className="flex justify-between gap-2 pt-2.5 border-t border-emerald-300">
                      <dt className="font-extrabold text-slate-900">Escrow / Bank Guarantee Claim</dt>
                      <dd className="font-black text-lg text-emerald-800">&#8377;3,00,19,200</dd>
                    </div>
                  </dl>
                  <p className="text-[11px] text-emerald-900/80 mt-4 leading-relaxed">
                    Strategic Leverage: An undisclosed &#8377;3.00 Cr advisor claim breaches standard &ldquo;No Undisclosed Broker / Finder Fees&rdquo; warranties in PE/VC Share Subscription Agreements, pressuring founders to settle immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  MCA CHG-1, PAS-3, VDR Logs &amp; BSA s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Commercial Courts decide Section 9 and Order XXXVIII applications on documentary affidavits within days—not lengthy oral trials. Assemble this seven-part evidence dossier before serving your Advocate Legal Notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    code: "DOC 01",
                    title: "Executed Mandate Letter & Exclusivity / Tail Clause",
                    desc: "Stamped/e-signed Engagement Letter specifying the fee percentage (1.5%–2.5%), definition of 'Transaction' & 'Affiliates', 12–24 month Tail Survival, Arbitration seat, and retainer creditability.",
                  },
                  {
                    code: "DOC 02",
                    title: "Protected Lender / Investor Tail Schedule",
                    desc: "Timestamped email transmitting the finalized list of all introduced banks, NBFCs, credit funds, PE/VC firms, and strategic acquirers upon mandate expiry or premature termination.",
                  },
                  {
                    code: "DOC 03",
                    title: "MCA Form CHG-1, Form PAS-3 & IGRS Certified Deeds",
                    desc: "Paid public inspection copies from MCA V3 showing exact loan charge creation (lender name + ₹ limit) or equity allotment (investor entity + valuation), plus DIN cross-checks piercing sister SPVs.",
                  },
                  {
                    code: "DOC 04",
                    title: "VDR Audit Trail & Intro Email Headers",
                    desc: "Virtual Data Room download logs (IP address, user email, document timestamps), calendar invites, Zoom/Teams records, and original email threads introducing the promoter to the bank RM or PE partner.",
                  },
                  {
                    code: "DOC 05",
                    title: "CMA Data, TEVR, Financial Model & IM Metadata",
                    desc: "Native Excel/PowerPoint/PDF files with author & creation timestamps proving your firm authored the credit appraisal or investor deck subsequently reused at the closing table (Copyright Act s.51).",
                  },
                  {
                    code: "DOC 06",
                    title: "Term Sheet, Sanction Letter, 26AS & Bounced Cheques",
                    desc: "In-principle sanction letters, non-binding LOIs, GSTR-1 invoices, Form 26AS Section 194J/194H TDS entries, and original bank cheque-return memos (preserving the strict 30-day NI Act s.138 clock).",
                  },
                ].map((doc) => (
                  <div
                    key={doc.code}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-white bg-[#404447] px-2 py-0.5 rounded mb-2">
                      {doc.code}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong className="text-amber-900">Mandatory BSA 2023 Section 63 Certificate:</strong>{" "}
                Every electronic printout—VDR audit CSVs, WhatsApp chats with promoters, Outlook/Gmail introduction chains, and MCA V3 PDF downloads—MUST be accompanied by a signed <strong>Section 63 Bharatiya Sakshya Adhiniyam, 2023</strong> certificate (with cryptographic hash values where applicable) from the person controlling the firm&rsquo;s IT device/email server so opposing counsel cannot block admissibility at the interim hearing stage.
              </div>
            </section>

            {/* Section 9: Dual-Track B2B Conversion CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Launch a &#8377;999 Deal-Fee Notice or Advisory Firm CSV Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are enforcing a single &#8377;75 Lakh&ndash;&#8377;2.5 Crore bypassed debt/M&amp;A mandate or clearing a portfolio of overdue retainer and sub-brokerage receivables across dozens of borrower clients, choose your operational track below:
              </p>

              <MandateFeeCTA />
            </section>

            {/* Section 10: Internal Links — Hub, Calculators, Templates & Sibling Guides */}
            <section
              id="heading-related-tools"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Advisory Hub, Calculators &amp; Sibling IND-23 Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    tag: "Parent IND-23 Hub",
                    title: "CAs, Architects, Engineers & M&A Advisors Fee Recovery Hub",
                    href: "/industries/ca-architects-consultants-professional-fee-recovery",
                    desc: "Complete multi-track recovery architecture for licensed professionals and boutique corporate advisors.",
                  },
                  {
                    tag: "Interactive Calculator",
                    title: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Compute statutory compound interest u/s 16 MSMED Act for Udyam-registered advisory & DSA boutiques.",
                  },
                  {
                    tag: "Interactive Calculator",
                    title: "Limitation Period Calculator (3-Year Contract & s.18 Reset)",
                    href: "/tools/limitation-period-calculator",
                    desc: "Verify your 3-year civil/arbitration deadline from closing date, sanction date, or written acknowledgment.",
                  },
                  {
                    tag: "Notice Template",
                    title: "Security Cheque Presentation & Ledger Demand Notice Format",
                    href: "/templates/security-cheque-presentation-intimation-cum-ledger-notice",
                    desc: "Pre-presentation notice and NI Act s.138 readiness workflow for post-sanction fee cheques.",
                  },
                  {
                    tag: "Notice Template",
                    title: "Section 43B(h) MSME Tax Disallowance Intimation Notice",
                    href: "/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice",
                    desc: "Put defaulting corporate CFOs on formal year-end tax disallowance notice for unpaid Micro/Small retainers.",
                  },
                  {
                    tag: "Statutory Guide",
                    title: "Order 37 CPC Summary Suit for Written-Contract Money Recovery",
                    href: "/law/order-37-summary-suit-money-recovery",
                    desc: "Fast-track summary decree procedure for signed mandate fee confirmations and acknowledged bills.",
                  },
                  {
                    tag: "Core Seed Guide",
                    title: "Consultancy & Professional Retainer Fee Recovery India",
                    href: "/recovery/consultancy-fees",
                    desc: "Legal strategy for recovering B2B advisory retainers, out-of-pocket expenses, and milestone bills.",
                  },
                  {
                    tag: "Sibling IND-23 Guide",
                    title: "CA Unpaid Audit Fee Recovery: ICAI Clause (8) & Civil Law",
                    href: "/chartered-accountant-ca-unpaid-audit-tax-retainer-recovery-icai-noc",
                    desc: "ICAI Chapter VII undisputed audit fee bar, Form 26AS 194J proof, and R.D. Saxena compliance.",
                  },
                  {
                    tag: "Sibling IND-23 Guide",
                    title: "Builder Constructing From Drawings? Unpaid Architect Fees",
                    href: "/architect-interior-consultant-stage-fee-gfc-drawing-copyright-recovery",
                    desc: "Copyright Act ss.13/17/51 enforcement over unpaid CAD/BIM drawings and COA Regulation 2(1)(xii).",
                  },
                  {
                    tag: "Core Seed Guide",
                    title: "Copyright Not Transferred Until Paid (IP & Deliverables)",
                    href: "/copyright-not-transferred-until-paid-freelancer",
                    desc: "Stop clients from reusing unpaid Information Memoranda, CMA models, and financial decks.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group block bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-4 transition-all shadow-xs hover:shadow-md"
                  >
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      {link.tag}
                    </span>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      {link.title} &rarr;
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {link.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: Mandate Exclusivity, 18-Month Tail &amp; Section 9 Liens
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 px-4 sm:px-5 py-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center shrink-0 text-sm font-bold transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Primary Statutory Authorities & Official Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Bare Acts, MCA Filings &amp; Judicial Reference Portals
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Authoritative Indian statutes and official government registries referenced in this B2B advisory fee recovery playbook (reviewed by{" "}
                <strong className="text-slate-900">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions):
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 hover:decoration-[#DC2626] underline-offset-2 transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
